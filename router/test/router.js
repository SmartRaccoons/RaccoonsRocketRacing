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
      var socket, socket2;
      socket = null;
      socket2 = null;
      beforeEach(function() {
        socket = new events.EventEmitter();
        socket.id = 'ben';
        socket2 = new events.EventEmitter();
        return socket2.id = 'ban';
      });
      it('new tank', function() {
        r.add_tank(socket);
        assert.equal('ben', r.game.get_tank(socket.id).params.tank_id);
        return assert.equal('tank', r.game.get_tank(socket.id).object);
      });
      it('new tank in other 2. position', function() {
        var t;
        r.add_tank(socket);
        r.add_tank(socket2);
        t = r.game.get_tank(socket2.id);
        return assert.deepEqual([r.game.size[0] - t.size[0], r.game.size[1] - t.size[1]], t.pos);
      });
      it('new tank in other 3. position', function() {
        var t;
        r.add_tank(socket);
        r.add_tank(socket);
        r.add_tank(socket2);
        t = r.game.get_tank(socket2.id);
        return assert.deepEqual([r.game.size[0] - t.size[0], 0], t.pos);
      });
      it('new tank in other 4. position', function() {
        var t;
        r.add_tank(socket);
        r.add_tank(socket);
        r.add_tank(socket);
        r.add_tank(socket2);
        t = r.game.get_tank(socket2.id);
        return assert.deepEqual([0, r.game.size[1] - t.size[1]], t.pos);
      });
      it('new tank in other 5. position', function() {
        var t;
        r.add_tank(socket);
        r.add_tank(socket);
        r.add_tank(socket);
        r.add_tank(socket);
        r.add_tank(socket2);
        t = r.game.get_tank(socket2.id);
        return assert.deepEqual([0, 0], t.pos);
      });
      it('new tank in other 6. position', function() {
        var t;
        r.add_tank(socket);
        r.add_tank(socket);
        r.add_tank(socket);
        r.add_tank(socket);
        r.add_tank(socket);
        r.add_tank(socket2);
        t = r.game.get_tank(socket2.id);
        return assert.deepEqual([r.game.size[0] - t.size[0], r.game.size[1] - t.size[1]], t.pos);
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
        var t;
        r.game.destroy = sinon.spy();
        r.connection(socket);
        t = r.game.get_tank(socket.id);
        socket.emit('disconnect');
        return assert.equal(t.id, r.game.destroy.getCall(0).args[0]);
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
      it('event: destroy element', function() {
        var id;
        r.connection(socket);
        id = r.game.add({
          'object': 'ret'
        });
        r.emit_socket = sinon.spy();
        r.game.destroy(id);
        assert.equal('destroy', r.emit_socket.getCall(0).args[1]);
        return assert.equal(id, r.emit_socket.getCall(0).args[2].id);
      });
      return it('event: update element', function() {
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
    });
    describe('gameplay', function() {
      var socket, socket2, t;
      socket = null;
      socket2 = null;
      t = null;
      beforeEach(function() {
        socket = new events.EventEmitter();
        socket.id = 'ben';
        socket2 = new events.EventEmitter();
        socket2.id = 'ban';
        r.connection(socket);
        r.connection(socket2);
        return t = r.game.get_tank(socket.id);
      });
      it('destroy base', function() {
        var id;
        r.game.restart = sinon.spy();
        id = r.game.add({
          'object': 'ben'
        });
        r.game.destroy(id);
        assert.equal(0, r.game.restart.callCount);
        id = r.game.add({
          'object': 'base'
        });
        r.game.destroy(id);
        return assert.equal(1, r.game.restart.callCount);
      });
      return it('restart event', function() {
        var stub;
        stub = sinon.stub(r, 'emit_socket');
        r.game.restart();
        assert.equal(1, stub.withArgs(socket, 'restart').callCount);
        return assert.equal(1, stub.withArgs(socket2, 'restart').callCount);
      });
    });
    return describe('control', function() {
      var socket, t;
      socket = null;
      t = null;
      beforeEach(function() {
        socket = new events.EventEmitter();
        socket.id = 'ben';
        r.connection(socket);
        return t = r.game.get_tank(socket.id);
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
        assert.equal(socket.id, r.game.tank_start.getCall(0).args[0]);
        assert.equal('up', r.game.tank_start.getCall(0).args[1]);
        socket.emit('control', {
          'move': 'up',
          'active': false
        });
        assert.equal(socket.id, r.game.tank_stop.getCall(0).args[0]);
        return assert.equal('up', r.game.tank_stop.getCall(0).args[1]);
      });
    });
  });

}).call(this);
