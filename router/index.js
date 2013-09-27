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
      this.game = new Bco([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 2, 0, 0, 1, 1, 1, 1, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 1, 1, 1, 1, 0, 0, 2, 2], [2, 2, 0, 0, 1, 1, 1, 1, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 1, 1, 1, 1, 0, 0, 2, 2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 10, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
      this.game.start();
      this.game.on('destroy', function(params) {
        var element;
        element = _this.game.get(params.id);
        if (element && element.object === 'base') {
          return _this.game.restart();
        }
      });
      this.game.on('restart', function() {
        return _this.emit_sockets('restart');
      });
      this.game.on('add', function(pr) {
        return _this.emit_sockets('add', pr);
      });
      this.game.on('destroy', function(pr) {
        return _this.emit_sockets('destroy', pr);
      });
      this.game.on('update', function(pr) {
        return _this.emit_sockets('update', extend({
          'pos': _this.game.get(pr.id).pos
        }, pr));
      });
    }

    Router.prototype.add_tank = function(socket) {
      var positions;
      positions = [[0, 0], [this.game.size[0] - 32, this.game.size[1] - 32], [this.game.size[0] - 32, 0], [0, this.game.size[1] - 32]];
      return this.game.add_tank(socket.id, {
        pos: positions[this.game.get({
          'object': 'tank'
        }).length % 4]
      });
    };

    Router.prototype.connection = function(socket) {
      var id, val, _ref,
        _this = this;
      this._sockets[socket.id] = socket;
      socket.on('control', function(p) {
        if (!_this.game.get_tank(socket.id)) {
          return;
        }
        if (p.active) {
          return _this.game.tank_start(socket.id, p.move);
        } else {
          return _this.game.tank_stop(socket.id, p.move);
        }
      });
      socket.on('disconnect', function() {
        _this.game.destroy_tank(socket.id);
        return delete _this._sockets[socket.id];
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

    Router.prototype.emit_sockets = function(event, args) {
      var id, socket, _ref, _results;
      _ref = this._sockets;
      _results = [];
      for (id in _ref) {
        socket = _ref[id];
        _results.push(this.emit_socket(socket, event, args));
      }
      return _results;
    };

    return Router;

  })(events.EventEmitter);

}).call(this);
