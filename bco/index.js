(function() {
  var Backbone, Bco, BcoCore, _,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Backbone = require('backbone');

  _ = require('lodash');

  BcoCore = require('./client').BcoCore;

  module.exports.Bco = Bco = (function(_super) {

    __extends(Bco, _super);

    Bco.prototype.id = 0;

    Bco.prototype._map = [];

    Bco.prototype._tank_pos = {};

    function Bco(map) {
      if (map == null) {
        map = [];
      }
      Bco.__super__.constructor.apply(this, arguments);
      this._map = map;
      this._draw_map();
      this;

    }

    Bco.prototype.__requestAnimFrame = function(callback) {
      return setTimeout(callback, 1000 / 40);
    };

    Bco.prototype._draw_map = function() {
      var l, object, r, x, y, _i, _j, _len, _len1, _ref;
      y = 0;
      _ref = this._map;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        r = _ref[_i];
        x = 0;
        for (_j = 0, _len1 = r.length; _j < _len1; _j++) {
          l = r[_j];
          object = null;
          if (l === 1) {
            object = 'brick';
          } else if (l === 10) {
            object = 'base';
          }
          if (object) {
            this.add({
              'object': object,
              pos: [x * 16, y * 16]
            });
          }
          x++;
        }
        y++;
      }
      return this;
    };

    Bco.prototype.restart = function() {
      var t, tanks, _i, _len;
      tanks = this.get({
        'object': 'tank'
      });
      Bco.__super__.restart.apply(this, arguments);
      this.trigger('restart');
      this._draw_map();
      for (_i = 0, _len = tanks.length; _i < _len; _i++) {
        t = tanks[_i];
        this.add_tank(t.params.tank_id, {
          'pos': t['pos_start']
        });
      }
      return this;
    };

    Bco.prototype.add = function(pr) {
      var params;
      this.id++;
      params = {
        id: this.id,
        object: pr.object,
        params: pr.params || {},
        pos: pr.pos || [0, 0],
        size: [16, 16],
        speed: pr.speed || 0,
        angle: pr.angle || 0,
        destroy: pr.destroy || 0,
        over: false,
        hitpoints: pr.hitpoints || 1
      };
      if (pr.object === 'tank') {
        params['size'] = [32, 32];
        if (!params['pos_start']) {
          params['pos_start'] = [params['pos'][0], params['pos'][1]];
        }
      }
      if (pr.object === 'bullet') {
        params['size'] = [8, 8];
      }
      if (pr.object === 'brick') {
        params['hitpoints'] = 2;
      }
      if (pr.object === 'base') {
        params['size'] = [32, 32];
      }
      Bco.__super__.add.call(this, params);
      this.trigger('add', params);
      return this.id;
    };

    Bco.prototype.add_tank = function(tank_id, params) {
      if (params == null) {
        params = {};
      }
      params['object'] = 'tank';
      params['params'] = {
        'tank_id': tank_id
      };
      return this.add(params);
    };

    Bco.prototype.get_tank = function(tank_id) {
      var id, val, _ref;
      _ref = this._elements;
      for (id in _ref) {
        val = _ref[id];
        if (val.params.tank_id === tank_id) {
          return val;
        }
      }
      return null;
    };

    Bco.prototype.destroy_tank = function(tank_id) {
      var t;
      t = this.get_tank(tank_id);
      return this.destroy(t.id);
    };

    Bco.prototype.update = function(pr) {
      Bco.__super__.update.call(this, pr);
      return this.trigger('update', pr);
    };

    Bco.prototype.destroy = function(id, reason) {
      var ob;
      this.trigger('destroy', {
        'id': id,
        'reason': reason
      });
      ob = this.get(id);
      Bco.__super__.destroy.call(this, {
        'id': id
      });
      if (ob && ob.object === 'tank' && reason === 'destroy') {
        this.add_tank(ob.params.tank_id, {
          'pos': ob['pos_start']
        });
      }
      return this;
    };

    Bco.prototype.tank_start = function(tank_id, move) {
      var tank;
      tank = this.get_tank(tank_id);
      if (move === 'up' || move === 'down' || move === 'left' || move === 'right') {
        return this._tank_move(tank_id, move, true);
      } else if (move === 'fire') {
        return this.add({
          'object': 'bullet',
          'params': {
            'owner': tank.id
          },
          'pos': [tank.pos[0] + tank.size[0] / 2 - 4, tank.pos[1] + tank.size[1] / 2 - 4],
          'angle': tank.angle,
          'destroy': 1,
          'speed': 200
        });
      }
    };

    Bco.prototype.tank_stop = function(tank_id, move) {
      if (move === 'up' || move === 'down' || move === 'left' || move === 'right') {
        return this._tank_move(tank_id, move);
      }
    };

    Bco.prototype._tank_move = function(tank_id, move, active) {
      var last_move, params, pr, t;
      if (active == null) {
        active = false;
      }
      t = this.get_tank(tank_id);
      if (!t._keystokes) {
        t._keystokes = [];
      }
      if (active) {
        t._keystokes.push(move);
      } else {
        if (t._keystokes[t._keystokes.length - 1] !== move) {
          return t._keystokes.splice(t._keystokes.indexOf(move), 1);
        }
        t._keystokes.splice(t._keystokes.length - 1, 1);
      }
      params = {
        'id': t.id,
        'speed': 100
      };
      if (t._keystokes.length === 0) {
        params['speed'] = 0;
      } else {
        last_move = t._keystokes[t._keystokes.length - 1];
        if (last_move === 'up') {
          params['angle'] = 270;
        } else if (last_move === 'down') {
          params['angle'] = 90;
        } else if (last_move === 'left') {
          params['angle'] = 180;
        } else if (last_move === 'right') {
          params['angle'] = 0;
        }
        if (t.angle !== params['angle']) {
          pr = 16;
          params['pos'] = [Math.round(t.pos[0] / pr) * pr, Math.round(t.pos[1] / pr) * pr];
        }
      }
      return this.update(params);
    };

    Bco.prototype._updateView = function(dt) {
      var id, id2, remove, val, val2, _i, _len, _ref, _ref1, _ref2, _results;
      Bco.__super__._updateView.call(this, dt);
      _ref = this._elements;
      for (id in _ref) {
        val = _ref[id];
        if (val.destroy > 0 && (val.pos[0] < 0 || val.pos[1] < 0 || val.pos[0] + val.size[0] > this.size[0] || val.pos[1] + val.size[1] > this.size[1])) {
          this.destroy(id);
        }
      }
      remove = [];
      _ref1 = this._elements;
      for (id in _ref1) {
        val = _ref1[id];
        _ref2 = this._elements;
        for (id2 in _ref2) {
          val2 = _ref2[id2];
          if (id !== id2 && this._collides_ob(val, val2)) {
            if (val.destroy > 0 && val.params.owner !== val2.id) {
              this.update({
                'id': val2.id,
                'hitpoints': val2.hitpoints - val.destroy
              });
              if (remove.indexOf(val.id) === -1) {
                remove.push(val.id);
              }
              if (val2.hitpoints <= 0) {
                if (remove.indexOf(val2.id) === -1) {
                  remove.push(val2.id);
                }
              }
            }
          }
        }
      }
      _results = [];
      for (_i = 0, _len = remove.length; _i < _len; _i++) {
        id = remove[_i];
        _results.push(this.destroy(id, 'destroy'));
      }
      return _results;
    };

    return Bco;

  })(BcoCore);

}).call(this);
