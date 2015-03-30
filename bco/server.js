// Generated by CoffeeScript 1.8.0
(function() {
  var Backbone, Bco, BcoCore, _,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Backbone = require('backbone');

  _ = require('lodash');

  BcoCore = require('./index').BcoCore;

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
          } else if (l === 2) {
            object = 'iron';
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
      var t, users, _i, _len;
      users = this.get({
        'object': 'user'
      });
      Bco.__super__.restart.apply(this, arguments);
      this.trigger('restart');
      this._draw_map();
      for (_i = 0, _len = users.length; _i < _len; _i++) {
        t = users[_i];
        this.add_user(t.params.user_id, {
          'pos': t.pos_start
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
        vel: pr.vel || [0, 0],
        size: [16, 16],
        angle: pr.angle || 0,
        destroy: pr.destroy || 0,
        hitpoints: pr.hitpoints || 1
      };
      if (pr.object === 'user') {
        params.size = [32, 32];
        params.speed = 0.3;
        params.accelerator = 0.0001;
        params.rub = 0.96;
        params.moving = [];
        if (!params.pos_start) {
          params.pos_start = [params['pos'][0], params['pos'][1]];
        }
      }
      if (pr.object === 'bullet') {
        params.speed = 8;
        params.size = [8, 8];
        params.vel = [Math.cos(params.angle) * params.speed, Math.sin(params.angle) * params.speed];
      }
      if (pr.object === 'brick') {
        params.hitpoints = 2;
      }
      if (pr.object === 'iron') {
        params.hitpoints = 20;
      }
      if (pr.object === 'base') {
        params.size = [32, 32];
      }
      Bco.__super__.add.call(this, params);
      this.trigger('add', params);
      return this.id;
    };

    Bco.prototype.destroy_user = function(user_id) {
      var t;
      t = this.get_user(user_id);
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
      if (ob && ob.object === 'user' && reason === 'destroy') {
        this.add_user(ob.params.user_id, {
          'pos': ob.pos_start
        });
      }
      return this;
    };

    Bco.prototype.user_action = function(user_id, move, active) {
      var index, t;
      if (active == null) {
        active = true;
      }
      t = this.get_user(user_id);
      index = t.moving.indexOf(move);
      if (active) {
        if (index < 0) {
          t.moving.push(move);
        }
      } else {
        t.moving.splice(index, 1);
      }
      return this.update({
        id: t.id,
        moving: t.moving
      });
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

//# sourceMappingURL=server.js.map
