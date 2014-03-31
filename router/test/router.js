// Generated by CoffeeScript 1.6.3
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
    describe('functional', function() {
      it('emit_user', function() {
        var user;
        r.users.add({
          'socket': {
            'emit': sinon.spy()
          }
        });
        user = r.users.models[0];
        r.emit_user(user, 'ben', 'ban');
        return assert.deepEqual(user.get('socket').emit.getCall(0).args, ['ben', 'ban']);
      });
      it('emit_room', function() {
        r.emit_lobby = sinon.spy();
        r.emit_user = sinon.spy();
        r.users.add({
          'id': 1
        });
        r.users.add({
          'id': 2
        });
        r.users.add({
          'id': 3
        });
        r.rooms.add({
          'users': [r.users.models[0], r.users.models[1]]
        });
        r.emit_user = sinon.spy();
        r.emit_room(r.rooms.models[0], 'event', 'args');
        assert.equal(r.emit_user.getCall(0).args[0].id, 1);
        assert.equal(r.emit_user.getCall(0).args[1], 'event');
        assert.equal(r.emit_user.getCall(0).args[2], 'args');
        assert.equal(r.emit_user.getCall(1).args[0].id, 2);
        assert.equal(r.emit_user.getCall(1).args[1], 'event');
        assert.equal(r.emit_user.getCall(1).args[2], 'args');
        return assert.equal(r.emit_user.callCount, 2);
      });
      return it('emit_lobby', function() {
        r.emit_user = sinon.spy();
        r.users.add({
          'id': 1
        });
        r.users.add({
          'id': 2
        });
        r.users.add({
          'id': 3
        });
        r.users.add({
          'name': 'not is_authenticated'
        });
        r.rooms.add({
          'users': [r.users.models[0]]
        });
        r.emit_user = sinon.spy();
        r.emit_lobby('event', 'args');
        assert.equal(r.emit_user.getCall(0).args[0].id, 2);
        assert.equal(r.emit_user.getCall(0).args[1], 'event');
        assert.equal(r.emit_user.getCall(0).args[2], 'args');
        assert.equal(r.emit_user.getCall(1).args[0].id, 3);
        assert.equal(r.emit_user.getCall(1).args[1], 'event');
        assert.equal(r.emit_user.getCall(1).args[2], 'args');
        return assert.equal(r.emit_user.callCount, 2);
      });
    });
    describe('connection', function() {
      var socket;
      socket = null;
      beforeEach(function() {
        socket = new events.EventEmitter();
        return socket.id = '1';
      });
      it('login (auto)', function() {
        var s, spy;
        r.emit_user = sinon.spy();
        r.connection(socket);
        spy = sinon.spy();
        r.users.models[0].on('change:room', spy);
        assert.equal(r.users.models[0].get('socket').id, '1');
        assert.equal(r.users.models[0].is_authenticated(), false);
        assert.equal(spy.callCount, 0);
        socket.emit('login:try');
        assert.equal(spy.callCount, 1);
        assert.equal(r.users.models[0].is_authenticated(), true);
        assert.equal(r.users.models[0].id, '1');
        assert.equal(r.users.models[0].get('name'), 'Guest 1');
        s = r.emit_user.withArgs(r.users.models[0], 'login:success');
        assert.equal(s.callCount, 1);
        return assert.deepEqual(s.getCall(0).args[2], {
          'id': '1',
          'name': 'Guest 1'
        });
      });
      return it('end', function() {
        r.connection(socket);
        socket.emit('login:try');
        assert.equal(r.users.models[0].id, '1');
        socket.emit('end');
        return assert.equal(r.users.models.length, 0);
      });
    });
    describe('rooms', function() {
      var socket, spy;
      spy = null;
      socket = null;
      beforeEach(function() {
        socket = new events.EventEmitter();
        socket.id = '1';
        spy = sinon.spy();
        r.emit_lobby = spy;
        return r.emit_user = sinon.spy();
      });
      it('change room, send room list', function() {
        var s;
        r.users.add({
          'id': 1
        });
        r.rooms.add({});
        r.emit_user = sinon.spy();
        r.users.models[0].set('room', {});
        s = r.emit_user.withArgs(r.users.models[0], 'room:list');
        assert.equal(s.callCount, 1);
        return assert.deepEqual(s.getCall(0).args[2], [
          {
            'id': 1,
            'is_full': false,
            'users': []
          }
        ]);
      });
      it('change room, send room list (no lobby)', function() {
        var s;
        r.users.add({
          'id': 1
        });
        r.rooms.add({});
        r.emit_user = sinon.spy();
        s = r.emit_user.withArgs(r.users.models[0], 'room:list');
        return assert.equal(s.callCount, 0);
      });
      it('add', function() {
        var s;
        r.rooms.add({});
        s = spy.withArgs('room:add');
        assert.equal(s.callCount, 1);
        return assert.deepEqual(s.getCall(0).args[1], {
          'id': 1,
          'users': [],
          'is_full': false
        });
      });
      it('remove', function() {
        var s;
        r.users.add({
          'id': 1
        });
        r.rooms.add({
          'users': [r.users.models[0]]
        });
        r.rooms.left_user(r.users.models[0]);
        s = spy.withArgs('room:remove');
        assert.equal(s.callCount, 1);
        return assert.deepEqual(s.getCall(0).args[1], {
          'id': 1
        });
      });
      it('user:join', function() {
        var s;
        r.users.add({
          'id': 1
        });
        r.rooms.add({
          'users': []
        });
        r.rooms.join_user(1, r.users.models[0]);
        s = spy.withArgs('room:user_join');
        assert.equal(s.callCount, 1);
        return assert.deepEqual(s.getCall(0).args[1], {
          'room_id': 1,
          'user': {
            'id': 1
          }
        });
      });
      it('user:left', function() {
        var s;
        r.users.add({
          'id': 1
        });
        r.users.add({
          'id': 2
        });
        r.rooms.add({
          'users': [r.users.models[0], r.users.models[1]]
        });
        r.rooms.left_user(r.users.models[1]);
        s = spy.withArgs('room:user_left');
        assert.equal(s.callCount, 1);
        return assert.deepEqual(s.getCall(0).args[1], {
          'room_id': 1,
          'user_id': 2
        });
      });
      it('user:left last', function() {
        var s;
        r.users.add({
          'id': 1
        });
        r.rooms.add({
          'users': [r.users.models[0]]
        });
        r.rooms.left_user(r.users.models[0]);
        s = spy.withArgs('room:user_left');
        return assert.equal(s.callCount, 0);
      });
      it('remove user & left room', function() {
        r.users.add({
          'id': 1
        });
        r.rooms.add({
          'users': [r.users.models[0]]
        });
        r.rooms.models[0].left_user = sinon.spy();
        r.users.remove(r.users.models[0]);
        assert.equal(r.rooms.models[0].left_user.callCount, 1);
        return assert.equal(r.rooms.models[0].left_user.getCall(0).args[0].id, 1);
      });
      return it('remove user - no room', function() {
        r.users.add({
          'id': 1
        });
        r.rooms.add({
          'users': []
        });
        r.rooms.models[0].left_user = sinon.spy();
        r.users.remove(r.users.models[0]);
        return assert.equal(r.rooms.models[0].left_user.callCount, 0);
      });
    });
    return describe('rooms user action', function() {
      var socket, spy;
      spy = null;
      socket = null;
      beforeEach(function() {
        socket = new events.EventEmitter();
        socket.id = '2';
        spy = sinon.spy();
        r.emit_lobby = spy;
        r.emit_user = sinon.spy();
        return r.connection(socket);
      });
      it('create', function() {
        socket.emit('login:try');
        socket.emit('room:create');
        assert.equal(r.rooms.models.length, 1);
        return assert.equal(r.rooms.models[0].get('users')[0].id, r.users.models[0].id);
      });
      it('create not authenticated', function() {
        socket.emit('room:create');
        return assert.equal(r.rooms.models.length, 0);
      });
      it('create second time', function() {
        socket.emit('login:try');
        socket.emit('room:create');
        socket.emit('room:create');
        return assert.equal(r.rooms.models.length, 1);
      });
      it('join', function() {
        r.rooms.add({
          'users': []
        });
        socket.emit('login:try');
        socket.emit('room:join', 1);
        assert.equal(r.rooms.models[0].get('users').length, 1);
        return assert.equal(r.rooms.models[0].get('users')[0].id, r.users.models[0].id);
      });
      it('join not authenticated', function() {
        r.rooms.add({
          'users': []
        });
        socket.emit('room:join', 2);
        return assert.equal(r.rooms.models[0].get('users').length, 0);
      });
      it('join wrong id', function() {
        r.connection(socket);
        r.rooms.add({
          'users': []
        });
        socket.emit('login:try');
        socket.emit('room:join', 2);
        return assert.equal(r.rooms.models[0].get('users').length, 0);
      });
      it('join second time', function() {
        r.rooms.add({
          'users': []
        });
        r.rooms.add({
          'users': []
        });
        socket.emit('login:try');
        socket.emit('room:join', 1);
        socket.emit('room:join', 2);
        assert.equal(r.rooms.models[0].get('users').length, 1);
        return assert.equal(r.rooms.models[1].get('users').length, 0);
      });
      return it('join full', function() {
        r.users.add({
          'id': 1
        });
        r.users.add({
          'id': 2
        });
        r.rooms.add({
          'users': [r.users.models[1], r.users.models[2]]
        });
        socket.emit('login:try');
        socket.emit('room:join', 1);
        return assert.equal(r.rooms.models[0].get('users').length, 2);
      });
    });
  });

}).call(this);
