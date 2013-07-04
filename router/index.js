(function() {
  var Game, Router, collides, events, extend,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  events = require('events');

  extend = function(from, to) {
    var attr, v;
    for (v in to) {
      attr = to[v];
      from[v] = attr;
    }
    return from;
  };

  collides = function(x, y, r, b, x2, y2, r2, b2) {
    return !(r <= x2 || x > r2 || b <= y2 || y > b2);
  };

  Game = (function(_super) {

    __extends(Game, _super);

    function Game() {
      return Game.__super__.constructor.apply(this, arguments);
    }

    Game.prototype.elements = {};

    Game.prototype.id = 0;

    Game.prototype.add = function(params) {
      var p, size;
      this.id++;
      if (params.object === 'tank') {
        size = [32, 32];
      } else if (params.object === 'bullet') {
        size = [8, 8];
      }
      p = {
        'id': this.id,
        'object': params.object,
        'params': params.params || {},
        'pos': params.pos || [0, 0],
        'size': size,
        'speed': params.speed || 0,
        'angle': params.angle || 0
      };
      this.elements[this.id] = p;
      this.emit('add', p);
      return this.id;
    };

    Game.prototype.update = function(prop) {
      var attr, val;
      for (attr in prop) {
        val = prop[attr];
        if (attr !== 'id') {
          this.elements[prop['id']][attr] = val;
        }
      }
      return this.emit('update', prop);
    };

    Game.prototype.remove = function(id) {
      delete this.elements[id];
      return this.emit('remove', {
        'id': id
      });
    };

    Game.prototype.get = function(id) {
      return this.elements[id];
    };

    Game.prototype._updateView = function(dt) {
      var hypo, id, id2, rd, val, val2, _ref, _ref1, _results;
      _ref = this.elements;
      for (id in _ref) {
        val = _ref[id];
        rd = val.angle * Math.PI / 180.0;
        hypo = val.speed * dt;
        val.pos[0] += hypo * Math.cos(rd);
        val.pos[1] += hypo * Math.sin(rd);
        if (val.object !== 'tank') {
          if (val.pos[0] > 416 || val.pos[0] < 0 || val.pos[1] > 416 || val.pos[1] < 0) {
            this.remove(id);
          }
        }
      }
      _ref1 = this.elements;
      _results = [];
      for (id in _ref1) {
        val = _ref1[id];
        _results.push((function() {
          var _ref2, _results1;
          _ref2 = this.elements;
          _results1 = [];
          for (id2 in _ref2) {
            val2 = _ref2[id2];
            if (id !== id2 && val2.object === 'bullet' && val2.params.owner !== val.id) {
              if (collides(val.pos[0], val.pos[1], val.pos[0] + val.size[0], val.pos[1] + val.size[1], val2.pos[0], val2.pos[1], val2.pos[0] + val2.size[0], val2.pos[1] + val2.size[1])) {
                this.remove(id2);
                _results1.push(this.remove(id));
              } else {
                _results1.push(void 0);
              }
            } else {
              _results1.push(void 0);
            }
          }
          return _results1;
        }).call(this));
      }
      return _results;
    };

    Game.prototype.start = function() {
      this.lastTime = Date.now();
      return this.process();
    };

    Game.prototype.process = function() {
      var dt, now,
        _this = this;
      now = Date.now();
      dt = (now - this.lastTime) / 1000.0;
      this._updateView(dt);
      this.lastTime = now;
      return setTimeout(function() {
        return _this.process();
      }, 1000 / 40);
    };

    return Game;

  })(events.EventEmitter);

  module.exports = Router = (function(_super) {

    __extends(Router, _super);

    function Router(options, db) {
      this.db = db;
      this.send = new events.EventEmitter();
      this.game = new Game();
      this.game.start();
    }

    Router.prototype.connection = function(socket) {
      var el, move_controls,
        _this = this;
      move_controls = [];
      socket.on('control', function(p) {
        var active_move, update_params, user_tank, _ref;
        if (!_this.game.get(socket.tank_id)) {
          return;
        }
        if ((_ref = p.move) === 'up' || _ref === 'down' || _ref === 'left' || _ref === 'right') {
          if (p.active) {
            move_controls.push(p.move);
          } else if (move_controls.indexOf(p.move) !== -1) {
            move_controls.splice(move_controls.indexOf(p.move), 1);
          }
          if (move_controls.length === 0) {
            return _this.game.update({
              'id': socket.tank_id,
              'speed': 0
            });
          } else {
            active_move = move_controls[move_controls.length - 1];
            update_params = {
              'id': socket.tank_id,
              'speed': 50
            };
            if (active_move === 'up') {
              update_params['angle'] = 270;
            }
            if (active_move === 'left') {
              update_params['angle'] = 180;
            }
            if (active_move === 'right') {
              update_params['angle'] = 0;
            }
            if (active_move === 'down') {
              update_params['angle'] = 90;
            }
            return _this.game.update(update_params);
          }
        } else if (p.move === 'fire') {
          if (p.active) {
            user_tank = _this.game.get(socket.tank_id);
            return _this.game.add({
              'object': 'bullet',
              'params': {
                'owner': socket.tank_id
              },
              'pos': [user_tank.pos[0] + 12, user_tank.pos[1] + 12],
              'angle': user_tank.angle,
              'speed': 200
            });
          }
        }
      });
      socket.on('disconnect', function() {
        return _this.game.remove(socket.tank_id);
      });
      this.game.on('add', function(params) {
        return socket.emit('add', params);
      });
      this.game.on('remove', function(params) {
        return socket.emit('remove', params);
      });
      this.game.on('update', function(params) {
        return socket.emit('update', extend({}, params));
      });
      for (el in this.game.elements) {
        socket.emit('add', this.game.elements[el]);
      }
      return socket.tank_id = this.game.add({
        'object': 'tank'
      });
    };

    return Router;

  })(events.EventEmitter);

}).call(this);
