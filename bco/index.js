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

    function Bco(map) {
      var l, r, x, y, _i, _j, _len, _len1;
      Bco.__super__.constructor.apply(this, arguments);
      if (map) {
        y = 0;
        for (_i = 0, _len = map.length; _i < _len; _i++) {
          r = map[_i];
          x = 0;
          for (_j = 0, _len1 = r.length; _j < _len1; _j++) {
            l = r[_j];
            if (l === 1) {
              this.add({
                'object': 'brick',
                pos: [x * 16, y * 16]
              });
            }
            x++;
          }
          y++;
        }
      }
      this;

    }

    Bco.prototype._collides = function(x, y, r, b, x2, y2, r2, b2) {
      return !(r <= x2 || x >= r2 || b <= y2 || y >= b2);
    };

    Bco.prototype.__requestAnimFrame = function(callback) {
      return setTimeout(callback, 1000 / 40);
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
        over: 0,
        stuck: 1,
        hitpoints: pr.hitpoints || 1,
        _keystokes: []
      };
      if (pr.object === 'tank') {
        params['size'] = [32, 32];
      }
      if (pr.object === 'bullet') {
        params['size'] = [8, 8];
      }
      if (pr.object === 'brick') {
        params['hitpoints'] = 2;
      }
      Bco.__super__.add.call(this, params);
      this.trigger('add', params);
      return this.id;
    };

    Bco.prototype.update = function(pr) {
      Bco.__super__.update.call(this, pr);
      return this.trigger('update', pr);
    };

    Bco.prototype.destroy = function(id, reason) {
      this.trigger('destroy', {
        'id': id,
        'reason': reason
      });
      return Bco.__super__.destroy.call(this, {
        'id': id
      });
    };

    Bco.prototype.tank_start = function(tank_id, move) {
      var tank;
      tank = this.get(tank_id);
      if (move === 'up' || move === 'down' || move === 'left' || move === 'right') {
        return this._tank_move(tank_id, move, true);
      } else if (move === 'fire') {
        return this.add({
          'object': 'bullet',
          'params': {
            'owner': tank_id
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
      var last_move, params;
      if (active == null) {
        active = false;
      }
      if (active) {
        this._elements[tank_id]._keystokes.push(move);
      } else {
        if (this._elements[tank_id]._keystokes[this._elements[tank_id]._keystokes.length - 1] !== move) {
          return this._elements[tank_id]._keystokes.splice(this._elements[tank_id]._keystokes.indexOf(move), 1);
        }
        this._elements[tank_id]._keystokes.splice(this._elements[tank_id]._keystokes.length - 1, 1);
      }
      params = {
        'id': tank_id,
        'speed': 100,
        'stuck': 1
      };
      if (this._elements[tank_id]._keystokes.length === 0) {
        params['speed'] = 0;
      } else {
        last_move = this._elements[tank_id]._keystokes[this._elements[tank_id]._keystokes.length - 1];
        if (last_move === 'up') {
          params['angle'] = 270;
        } else if (last_move === 'down') {
          params['angle'] = 90;
        } else if (last_move === 'left') {
          params['angle'] = 180;
        } else if (last_move === 'right') {
          params['angle'] = 0;
        }
      }
      return this.update(params);
    };

    Bco.prototype._updateView = function(dt) {
      var id, id2, remove, update, val, val2, _i, _len, _ref, _ref1, _ref2, _results;
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
          if (id !== id2 && this._collides(val.pos[0], val.pos[1], val.pos[0] + val.size[0], val.pos[1] + val.size[1], val2.pos[0], val2.pos[1], val2.pos[0] + val2.size[0], val2.pos[1] + val2.size[1])) {
            if (val.destroy === 0 && val.speed > 0 && val.stuck !== val2.over) {
              update = {
                'id': val.id,
                'stuck': val2.over,
                'pos': val.pos
              };
              if (val.angle === 0) {
                update.pos[0] = val2.pos[0] - val.size[0];
              } else if (val.angle === 90) {
                update.pos[1] = val2.pos[1] - val.size[1];
              } else if (val.angle === 180) {
                update.pos[0] = val2.pos[0] + val2.size[0];
              } else if (val.angle === 270) {
                update.pos[1] = val2.pos[1] + val2.size[1];
              }
              this.update(update);
            }
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
