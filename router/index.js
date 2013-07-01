(function() {
  var Game, Router, events, extend,
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

  Game = (function(_super) {

    __extends(Game, _super);

    function Game() {
      return Game.__super__.constructor.apply(this, arguments);
    }

    Game.prototype.elements = {};

    Game.prototype.id = 0;

    Game.prototype.add = function(params) {
      var p;
      this.id++;
      p = {
        'id': this.id,
        'pos': params.pos,
        'speed': 0,
        'angle': 0
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

    Game.prototype._updateView = function(dt) {
      var attr, hypo, rd, val, _ref, _results;
      _ref = this.elements;
      _results = [];
      for (attr in _ref) {
        val = _ref[attr];
        rd = val.angle * Math.PI / 180.0;
        hypo = val.speed * dt;
        val.pos[0] += hypo * Math.cos(rd);
        _results.push(val.pos[1] += hypo * Math.sin(rd));
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
      return process.nextTick(function() {
        return _this.process();
      });
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
        var active_move, update_params, _ref;
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
          return console.info('fire');
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
        console.info(el);
        socket.emit('add', this.game.elements[el]);
      }
      return socket.tank_id = this.game.add({
        'pos': [0, 0]
      });
    };

    return Router;

  })(events.EventEmitter);

}).call(this);
