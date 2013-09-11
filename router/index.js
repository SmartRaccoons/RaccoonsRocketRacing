(function() {
  var Bco, Router, events, extend,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  events = require('events');

  extend = require('util')._extend;

  Bco = require('../bco').Bco;

  module.exports = Router = (function(_super) {

    __extends(Router, _super);

    Router.prototype._sockets = {};

    function Router() {
      var _this = this;
      this.game = new Bco();
      this.game.start();
      this.game.on('remove', function(params) {
        var element;
        element = _this.game.get(params.id);
        if (element.object === 'tank' && params.reason === 'destroy') {
          return _this.add_tank(_this._sockets[element.params.socket_id]);
        }
      });
    }

    Router.prototype.add_tank = function(socket) {
      return socket.tank_id = this.game.add({
        'object': 'tank',
        'params': {
          'socket_id': socket.id
        }
      });
    };

    Router.prototype.connection = function(socket) {
      var id, val, _ref,
        _this = this;
      this._sockets[socket.id] = socket;
      socket.on('control', function(p) {
        if (!_this.game.get(socket.tank_id)) {
          return;
        }
        if (p.active) {
          return _this.game.tank_start(socket.tank_id, p.move);
        } else {
          return _this.game.tank_stop(socket.tank_id, p.move);
        }
      });
      socket.on('disconnect', function() {
        _this.game.remove(socket.tank_id);
        return delete _this._sockets[socket.id];
      });
      this.game.on('add', function(params) {
        return _this.emit_socket(socket, 'add', params);
      });
      this.game.on('remove', function(params) {
        return _this.emit_socket(socket, 'remove', params);
      });
      this.game.on('update', function(params) {
        return _this.emit_socket(socket, 'update', extend({
          'pos': _this.game.get(params.id).pos
        }, params));
      });
      _ref = this.game._elements;
      for (id in _ref) {
        val = _ref[id];
        this.emit_socket(socket, 'add', val);
      }
      return this.add_tank(socket);
    };

    Router.prototype.emit_socket = function(socket, event, args) {
      return socket.emit(event, args);
    };

    return Router;

  })(events.EventEmitter);

}).call(this);
