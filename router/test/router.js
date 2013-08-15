(function() {
  var Router, assert, events, extend, nock, sinon;

  assert = require('assert');

  sinon = require('sinon');

  events = require('events');

  nock = require('nock');

  extend = require('util')._extend;

  Router = require('../');

  describe('router', function() {
    var clock, r;
    r = null;
    clock = null;
    beforeEach(function() {
      clock = sinon.useFakeTimers();
      return r = new Router();
    });
    afterEach(function() {
      return clock.restore();
    });
    describe('init', function() {
      it('game', function() {
        r.game._updateView = sinon.spy();
        clock.tick(100);
        return assert(r.game._updateView.callCount > 0);
      });
      return it('emit user', function() {
        var socket;
        socket = {
          'id': 'ben',
          'emit': sinon.spy()
        };
        r.emit_socket(socket, 'beni', {
          '1': 2
        });
        assert.equal('beni', socket.emit.getCall(0).args[0]);
        return assert.deepEqual({
          '1': 2
        }, socket.emit.getCall(0).args[1]);
      });
    });
    describe('connection', function() {
      var socket;
      socket = null;
      beforeEach(function() {
        socket = new events.EventEmitter();
        return socket.id = 'ben';
      });
      it('new tank', function() {
        r.add_tank(socket);
        assert.equal(1, socket.tank_id);
        assert.equal('ben', r.game.get(1).params.socket_id);
        return assert.equal('tank', r.game.get(1).object);
      });
      it('create tank', function() {
        r.add_tank = sinon.spy();
        r.connection(socket);
        assert.equal(1, r.add_tank.callCount);
        return assert.equal('ben', r.add_tank.getCall(0).args[0].id);
      });
      it('emit status', function() {
        r.game._elements = {
          '1': 2,
          '2': 3
        };
        r.emit_socket = sinon.spy();
        r.add_tank = function() {};
        r.connection(socket);
        assert.equal(2, r.emit_socket.callCount);
        assert.equal('ben', r.emit_socket.getCall(0).args[0].id);
        assert.equal('add', r.emit_socket.getCall(0).args[1]);
        return assert.equal(2, r.emit_socket.getCall(0).args[2]);
      });
      it('disconnect', function() {
        r.game.remove = sinon.spy();
        r.connection(socket);
        socket.emit('disconnect');
        return assert.equal(socket.tank_id, r.game.remove.getCall(0).args[0]);
      });
      it('event: new element', function() {
        r.connection(socket);
        r.emit_socket = sinon.spy();
        r.game.add({
          'object': 'ret'
        });
        assert.equal('add', r.emit_socket.getCall(0).args[1]);
        return assert.equal('ret', r.emit_socket.getCall(0).args[2].object);
      });
      it('event: remove element', function() {
        var id;
        r.connection(socket);
        id = r.game.add({
          'object': 'ret'
        });
        r.emit_socket = sinon.spy();
        r.game.remove(id);
        assert.equal('remove', r.emit_socket.getCall(0).args[1]);
        return assert.equal(id, r.emit_socket.getCall(0).args[2].id);
      });
      it('event: update element', function() {
        var id;
        r.connection(socket);
        id = r.game.add({
          'object': 'ret'
        });
        r.emit_socket = sinon.spy();
        r.game.update({
          'id': id,
          'speed': 10
        });
        assert.equal('update', r.emit_socket.getCall(0).args[1]);
        assert.equal(id, r.emit_socket.getCall(0).args[2].id);
        assert.equal(10, r.emit_socket.getCall(0).args[2].speed);
        return assert.deepEqual([0, 0], r.emit_socket.getCall(0).args[2].pos);
      });
      return it('on destroy tank add new', function() {
        r.connection(socket);
        r.game.update({
          'id': 1,
          'speed': 100
        });
        r.game.add({
          'object': 'bullet'
        });
        r.add_tank = sinon.spy();
        r.game.remove(2, 'destroy');
        r.game.remove(1, 'destroy');
        return assert.equal('ben', r.add_tank.getCall(0).args[0].id);
      });
    });
    return describe('control', function() {
      var socket;
      socket = null;
      beforeEach(function() {
        socket = new events.EventEmitter();
        socket.id = 'ben';
        return r.connection(socket);
      });
      it('no tank', function() {
        socket.emit('disconnect');
        r.emit_socket = sinon.spy();
        socket.emit('control', {
          'move': 'up',
          'active': true
        });
        return assert.equal(0, r.emit_socket.callCount);
      });
      return it('moving', function() {
        r.game.tank_start = sinon.spy();
        r.game.tank_stop = sinon.spy();
        socket.emit('control', {
          'move': 'up',
          'active': true
        });
        assert.equal(1, r.game.tank_start.getCall(0).args[0]);
        assert.equal('up', r.game.tank_start.getCall(0).args[1]);
        socket.emit('control', {
          'move': 'up',
          'active': false
        });
        assert.equal(1, r.game.tank_stop.getCall(0).args[0]);
        return assert.equal('up', r.game.tank_stop.getCall(0).args[1]);
      });
    });
  });

}).call(this);
