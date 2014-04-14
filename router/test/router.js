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
        var s, s_game;
        r.users.add({
          'id': 1
        });
        r.rooms.add({
          'stage': 2
        });
        r.emit_user = sinon.spy();
        r.users.models[0].set('room', null);
        s = r.emit_user.withArgs(r.users.models[0], 'room:list');
        s_game = r.emit_user.withArgs(r.users.models[0], 'game:start');
        assert.equal(s.callCount, 1);
        assert.deepEqual(s.getCall(0).args[2], [
          {
            'id': 1,
            'stage': 2,
            'max': 2,
            'users': []
          }
        ]);
        return assert.equal(s_game.callCount, 0);
      });
      it('cheng room, game start', function() {
        var s, s_game;
        r.users.add({
          'id': 1
        });
        r.rooms.add({});
        r.emit_user = sinon.spy();
        r.users.models[0].set('room', {});
        s = r.emit_user.withArgs(r.users.models[0], 'room:list');
        s_game = r.emit_user.withArgs(r.users.models[0], 'game:start');
        assert.equal(s.callCount, 0);
        return assert.equal(s_game.callCount, 1);
      });
      it('add', function() {
        var s;
        r.rooms.add({
          'stage': 1
        });
        s = spy.withArgs('room:room_add');
        assert.equal(s.callCount, 1);
        return assert.deepEqual(s.getCall(0).args[1], {
          'id': 1,
          'stage': 1,
          'max': 2,
          'users': []
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
        s = spy.withArgs('room:room_remove');
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
            'id': 1,
            'name': ''
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
    describe('rooms user action', function() {
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
        assert.equal(r.rooms.models[0].get('users')[0].id, r.users.models[0].id);
        return assert.equal(r.rooms.models[0].get('stage'), 1);
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
      it('join full', function() {
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
      it('left', function() {
        r.rooms.add({
          'users': []
        });
        socket.emit('login:try');
        socket.emit('room:join', 1);
        socket.emit('room:left');
        return assert.equal(r.rooms.models.length, 0);
      });
      return it('left not authorize', function() {
        r.rooms.add({
          'users': []
        });
        socket.emit('room:left');
        return assert.equal(r.rooms.models.length, 1);
      });
    });
    describe('game', function() {
      beforeEach(function() {
        r.users.add({
          'id': 'ben'
        });
        r.users.add({
          'id': 'zed'
        });
        r.emit_user = sinon.spy();
        return r.emit_room = sinon.spy();
      });
      it('create/start on new room', function() {
        var room;
        r.rooms.add({});
        room = r.rooms.models[0];
        room.game._updateView = sinon.spy();
        clock.tick(100);
        return assert(room.game._updateView.callCount > 0);
      });
      it('emit user', function() {
        var add, add2;
        r.rooms.add({
          'users': [r.users.models[0], r.users.models[1]]
        });
        add = r.emit_user.withArgs(r.users.models[0], 'game:elements');
        add2 = r.emit_user.withArgs(r.users.models[1], 'game:elements');
        assert.equal(add.callCount, 1);
        assert.equal(add2.callCount, 1);
        assert.deepEqual(add.getCall(0).args[2], r.rooms.models[0].game._elements);
        return assert.deepEqual(add2.getCall(0).args[2], r.rooms.models[0].game._elements);
      });
      it('join user', function() {
        var add;
        r.rooms.add({
          'users': [r.users.models[0]]
        });
        r.rooms.join_user(1, r.users.models[1]);
        add = r.emit_user.withArgs(r.users.models[1], 'game:elements');
        assert.equal(add.callCount, 1);
        return assert.deepEqual(add.getCall(0).args[2], r.rooms.models[0].game._elements);
      });
      it('add tank', function() {
        var g;
        r.rooms.add({});
        g = r.rooms.models[0].game;
        g.add_tank = sinon.spy();
        r.rooms.join_user(1, r.users.models[0]);
        assert.equal(g.add_tank.callCount, 1);
        assert.equal(g.add_tank.getCall(0).args[0], 'ben');
        return assert.deepEqual(g.add_tank.getCall(0).args[1], {
          'pos': [0, 0]
        });
      });
      it('add tank 2. position', function() {
        var g;
        r.rooms.add({
          'users': [r.users.models[1]]
        });
        g = r.rooms.models[0].game;
        g.add_tank = sinon.spy();
        r.rooms.join_user(1, r.users.models[0]);
        assert.equal(g.add_tank.callCount, 1);
        assert.equal(g.add_tank.getCall(0).args[0], 'ben');
        g.add_tank.getCall(0).args[1];
        return assert.deepEqual(g.add_tank.getCall(0).args[1], {
          'pos': [g.size[0] - 32, g.size[1] - 32]
        });
      });
      it('destroy tank', function() {
        var spy;
        r.rooms.add({
          'users': [r.users.models[1]]
        });
        spy = sinon.spy();
        r.rooms.models[0].game.destroy_tank = spy;
        r.rooms.left_user(r.users.models[1]);
        assert.equal(spy.callCount, 1);
        return assert.equal(spy.getCall(0).args[0], 'zed');
      });
      it('destroy room', function() {
        var spy;
        r.rooms.add({
          'users': [r.users.models[1]]
        });
        spy = sinon.spy();
        r.rooms.models[0].game.stop = spy;
        r.rooms.remove(r.rooms.models[0]);
        return assert.equal(spy.callCount, 1);
      });
      it('event add', function() {
        var add;
        r.rooms.add({});
        r.emit_room = sinon.spy();
        add = r.emit_room.withArgs(r.rooms.models[0], 'game:add');
        r.rooms.models[0].game.add({
          'object': 'brick'
        });
        assert.equal(add.callCount, 1);
        return assert.equal(add.getCall(0).args[2].object, 'brick');
      });
      it('event destroy', function() {
        var destroy;
        r.rooms.add({});
        r.emit_room = sinon.spy();
        destroy = r.emit_room.withArgs(r.rooms.models[0], 'game:destroy');
        r.rooms.models[0].game.destroy(1, 'f');
        assert.equal(destroy.callCount, 1);
        assert.equal(destroy.getCall(0).args[2].id, 1);
        return assert.equal(destroy.getCall(0).args[2].reason, 'f');
      });
      it('event update', function() {
        var id, update;
        r.rooms.add({});
        r.emit_room = sinon.spy();
        update = r.emit_room.withArgs(r.rooms.models[0], 'game:update');
        id = r.rooms.models[0].game.add({
          'object': 'ret'
        });
        r.rooms.models[0].game.update({
          'id': id,
          'speed': 10
        });
        assert.equal(update.callCount, 1);
        assert.equal(update.getCall(0).args[2].id, id);
        assert.equal(update.getCall(0).args[2].speed, 10);
        return assert.deepEqual(update.getCall(0).args[2].pos, [0, 0]);
      });
      it('event restart', function() {
        var restart;
        r.rooms.add({});
        r.emit_room = sinon.spy();
        restart = r.emit_room.withArgs(r.rooms.models[0], 'game:restart');
        r.rooms.models[0].game.restart();
        return assert.equal(restart.callCount, 1);
      });
      return it('event destroy base', function() {
        var base, destroy, fake, spy;
        spy = sinon.spy();
        r.rooms.add({});
        r.emit_room = sinon.spy();
        destroy = r.emit_room.withArgs(r.rooms.models[0], 'game:destroy');
        r.rooms.models[0].game.restart = spy;
        fake = r.rooms.models[0].game.add({
          'object': 'bana'
        });
        base = r.rooms.models[0].game.add({
          'object': 'base'
        });
        r.rooms.models[0].game.destroy(fake);
        assert.equal(spy.callCount, 0);
        r.rooms.models[0].game.destroy(base);
        return assert.equal(spy.callCount, 1);
      });
    });
    return describe('game control', function() {
      var socket, start, stop;
      socket = null;
      start = null;
      stop = null;
      beforeEach(function() {
        start = sinon.spy();
        stop = sinon.spy();
        socket = new events.EventEmitter();
        socket.id = '1';
        r.users.add({
          'id': 'ben'
        });
        r.users.add({
          'id': 'zed'
        });
        r.emit_user = sinon.spy();
        r.emit_room = sinon.spy();
        return r.connection(socket);
      });
      it('control active:true', function() {
        socket.emit('login:try');
        socket.emit('room:create');
        r.rooms.models[0].game.tank_start = start;
        r.rooms.models[0].game.tank_stop = stop;
        socket.emit('control', {
          'active': true,
          'move': 'up'
        });
        assert.equal(start.callCount, 1);
        assert.equal(stop.callCount, 0);
        assert.equal(start.getCall(0).args[0], '1');
        return assert.equal(start.getCall(0).args[1], 'up');
      });
      it('control active:false', function() {
        socket.emit('login:try');
        socket.emit('room:create');
        r.rooms.models[0].game.tank_start = start;
        r.rooms.models[0].game.tank_stop = stop;
        socket.emit('control', {
          'active': false,
          'move': 'down'
        });
        assert.equal(start.callCount, 0);
        assert.equal(stop.callCount, 1);
        assert.equal(stop.getCall(0).args[0], '1');
        return assert.equal(stop.getCall(0).args[1], 'down');
      });
      it('not login', function() {
        socket.emit('control', {
          'active': true,
          'move': 'up'
        });
        return assert.equal(r.emit_room.callCount, 0);
      });
      return it('not room', function() {
        socket.emit('login:try');
        socket.emit('control', {
          'active': true,
          'move': 'up'
        });
        return assert.equal(r.emit_room.callCount, 0);
      });
    });
  });

}).call(this);
