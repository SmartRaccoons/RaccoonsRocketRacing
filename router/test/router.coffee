assert = require('assert')
sinon = require('sinon')
events = require('events')
nock = require('nock')
extend = require('util')._extend


Router = require('../')


describe 'router', ->
  r = null
  clock = null
  beforeEach ->
    clock = sinon.useFakeTimers()
    r = new Router()
  afterEach ->
    clock.restore()


  describe 'functional', ->
    it 'emit_user', ->
      r.users.add({'socket': {'emit': sinon.spy()}})
      user = r.users.models[0]
      r.emit_user(user, 'event', 'args', 'args2')
      assert.deepEqual(user.get('socket').emit.getCall(0).args, ['event', 'args', 'args2'])

    it 'emit_room', ->
      r.emit_lobby = sinon.spy()
      r.emit_user = sinon.spy()
      r.users.add({'id': 1})
      r.users.add({'id': 2})
      r.users.add({'id': 3})
      r.rooms.add({'users': [r.users.models[0]]})
      r.rooms.user_join(r.users.models[1], {'room': 1})
      r.emit_user = sinon.spy()
      r.emit_room(r.rooms.models[0], 'event', 'args', 'args2')
      assert.equal(r.emit_user.getCall(0).args[0].id, 1)
      assert.equal(r.emit_user.getCall(0).args[1], 'event')
      assert.equal(r.emit_user.getCall(0).args[2], 'args')
      assert.equal(r.emit_user.getCall(0).args[3], 'args2')
      assert.equal(r.emit_user.getCall(1).args[0].id, 2)
      assert.equal(r.emit_user.getCall(1).args[1], 'event')
      assert.equal(r.emit_user.getCall(1).args[2], 'args')
      assert.equal(r.emit_user.getCall(1).args[3], 'args2')
      assert.equal(r.emit_user.callCount, 2)

    it 'emit_lobby', ->
      r.emit_user = sinon.spy()
      r.users.add({'id': 1})
      r.users.add({'id': 2})
      r.users.add({'id': 3})
      r.users.add({'name': 'not is_authenticated'})
      r.rooms.add({'users': [r.users.models[0]]})
      r.emit_user = sinon.spy()
      r.emit_lobby('event', 'args')
      assert.equal(r.emit_user.getCall(0).args[0].id, 2)
      assert.equal(r.emit_user.getCall(0).args[1], 'event')
      assert.equal(r.emit_user.getCall(0).args[2], 'args')
      assert.equal(r.emit_user.getCall(1).args[0].id, 3)
      assert.equal(r.emit_user.getCall(1).args[1], 'event')
      assert.equal(r.emit_user.getCall(1).args[2], 'args')
      assert.equal(r.emit_user.callCount, 2)


  describe 'connection', ->
    socket = null
    beforeEach ->
      socket = new events.EventEmitter()
      socket.id = '1'

    it 'login (auto)', ->
      r.emit_user = sinon.spy()
      r.connection(socket)
      spy = sinon.spy()
      r.users.models[0].on 'change:room', spy
      assert.equal(r.users.models[0].get('socket').id, '1')
      assert.equal(r.users.models[0].is_authenticated(), false)
      assert.equal(spy.callCount, 0)
      socket.emit('login:try')
      assert.equal(spy.callCount, 1)
      assert.equal(r.users.models[0].is_authenticated(), true)
      assert.equal(r.users.models[0].id, '1')
      assert.equal(r.users.models[0].get('name'), 'Guest 1')
      s = r.emit_user.withArgs(r.users.models[0], 'login:success')
      assert.equal(s.callCount, 1)
      assert.deepEqual(s.getCall(0).args[2], {'id': '1', 'name': 'Guest 1'})

    it 'end', ->
      r.connection(socket)
      socket.emit('login:try')
      assert.equal(r.users.models[0].id, '1')
      socket.emit('end')
      assert.equal(r.users.models.length, 0)


  describe 'rooms', ->
    spy = null
    socket = null
    beforeEach ->
      socket = new events.EventEmitter()
      socket.id = '1'
      spy = sinon.spy()
      r.emit_lobby = spy
      r.emit_user = sinon.spy()

    it 'change room, send room list', ->
      r.users.add({'id': 1})
      r.rooms.add({'stage': 2})
      r.emit_user = sinon.spy()
      r.users.models[0].set('room', null)
      s = r.emit_user.withArgs(r.users.models[0], 'room:list')
      s_game = r.emit_user.withArgs(r.users.models[0], 'game:start')
      assert.equal(s.callCount, 1)
      assert.deepEqual(s.getCall(0).args[2], [{'id': 1, 'stage': 2, 'max': 2, 'users': []}])
      assert.equal(s_game.callCount, 0)

    it 'cheng room, game start', ->
      r.users.add({'id': 1})
      r.rooms.add({})
      r.emit_user = sinon.spy()
      r.users.models[0].set('room', {})
      s = r.emit_user.withArgs(r.users.models[0], 'room:list')
      s_game = r.emit_user.withArgs(r.users.models[0], 'game:start')
      assert.equal(s.callCount, 0)
      assert.equal(s_game.callCount, 1)

    it 'add', ->
      r.rooms.add({'stage': 1})
      s = spy.withArgs('room:room_add')
      assert.equal(s.callCount, 1)
      assert.deepEqual(s.getCall(0).args[1], {'id': 1, 'stage': 1, 'max': 2, 'users': []})

    it 'remove', ->
      r.users.add({'id': 1})
      r.rooms.add({'users': [r.users.models[0]]})
      r.rooms.user_left(r.users.models[0])
      s = spy.withArgs('room:room_remove')
      assert.equal(s.callCount, 1)
      assert.deepEqual(s.getCall(0).args[1], {'id': 1})

    it 'user:join', ->
      r.users.add({'id': 1})
      r.rooms.add({'users': []})
      r.rooms.user_join(r.users.models[0], {'room': 1})
      s = spy.withArgs('room:user_join')
      assert.equal(s.callCount, 1)
      assert.deepEqual(s.getCall(0).args[1], {'room_id': 1, 'user': {'id': 1, 'name': ''}})

    it 'user:left', ->
      r.users.add({'id': 1})
      r.users.add({'id': 2})
      r.rooms.add({'users': [r.users.models[0]]})
      r.rooms.user_join(r.users.models[1], {'room': 1})
      r.rooms.user_left(r.users.models[1])
      s = spy.withArgs('room:user_left')
      assert.equal(s.callCount, 1)
      assert.deepEqual(s.getCall(0).args[1], {'room_id': 1, 'user_id': 2})

    it 'user:left last', ->
      r.users.add({'id': 1})
      r.rooms.add({'users': [r.users.models[0]]})
      r.rooms.user_left(r.users.models[0])
      s = spy.withArgs('room:user_left')
      assert.equal(s.callCount, 0)

    it 'remove user & left room', ->
      r.users.add({'id': 1})
      r.rooms.add({'users': [r.users.models[0]]})
      r.rooms.models[0].user_left = sinon.spy()
      r.users.remove(r.users.models[0])
      assert.equal(r.rooms.models[0].user_left.callCount, 1)
      assert.equal(r.rooms.models[0].user_left.getCall(0).args[0].id, 1)

    it 'remove user - no room', ->
      r.users.add({'id': 1})
      r.rooms.add({'users': []})
      r.rooms.models[0].user_left = sinon.spy()
      r.users.remove(r.users.models[0])
      assert.equal(r.rooms.models[0].user_left.callCount, 0)


  describe 'rooms user action', ->
    spy = null
    socket = null
    beforeEach ->
      socket = new events.EventEmitter()
      socket.id = '2'
      spy = sinon.spy()
      r.emit_lobby = spy
      r.emit_user = sinon.spy()
      r.connection(socket)

    it 'create', ->
      socket.emit('login:try')
      socket.emit('room:create')
      assert.equal(r.rooms.models.length, 1)
      assert.equal(r.rooms.models[0].get('users')[0].id, r.users.models[0].id)
#      assert.deepEqual(r.rooms.models[0].get('teams'), [[r.users.models[0].id], []])
      assert.equal(r.rooms.models[0].get('stage'), 1)
      assert.equal(r.rooms.models[0].get('max'), 4)

    it 'create not authenticated', ->
      socket.emit('room:create')
      assert.equal(r.rooms.models.length, 0)

    it 'create second time', ->
      socket.emit('login:try')
      socket.emit('room:create')
      socket.emit('room:create')
      assert.equal(r.rooms.models.length, 1)

    it 'open', ->
      socket.emit('login:try')
      r.rooms.add({'users': []})
      socket.emit('room:open', 1)
      s = r.emit_user.withArgs(r.users.models[0], 'roompreview:show')
      assert.equal(s.callCount, 1)
      assert.deepEqual(s.getCall(0).args[2], r.rooms.models[0].toJSON())

    it 'open wrong room id', ->
      socket.emit('login:try')
      r.rooms.add({'users': []})
      r.emit_user = sinon.spy()
      socket.emit('room:open', 2)
      assert.equal(r.emit_user.callCount, 0)

    it 'open not authenticated', ->
      r.rooms.add({'users': []})
      r.emit_user = sinon.spy()
      socket.emit('room:open', 1)
      assert.equal(r.emit_user.callCount, 0)

    it 'join', ->
      r.rooms.add({'users': []})
      socket.emit('login:try')
      socket.emit('room:join', {'room': 1})
      assert.equal(r.rooms.models[0].get('users').length, 1)
      assert.equal(r.rooms.models[0].get('users')[0].id, r.users.models[0].id)

    it 'join not authenticated', ->
      r.rooms.add({'users': []})
      socket.emit('room:join', 2)
      assert.equal(r.rooms.models[0].get('users').length, 0)

    it 'join wrong id', ->
      r.connection(socket)
      r.rooms.add({'users': []})
      socket.emit('login:try')
      socket.emit('room:join', 2)
      assert.equal(r.rooms.models[0].get('users').length, 0)

    it 'join second time', ->
      r.rooms.add({'users': []})
      r.rooms.add({'users': []})
      socket.emit('login:try')
      socket.emit('room:join', {'room': 1})
      socket.emit('room:join', {'room': 2})
      assert.equal(r.rooms.models[0].get('users').length, 1)
      assert.equal(r.rooms.models[1].get('users').length, 0)

    it 'join full', ->
      r.users.add({'id': 1})
      r.users.add({'id': 2})
      r.rooms.add({'users': [r.users.models[1]]})
      r.rooms.user_join(r.users.models[2], {'room': 1})
      socket.emit('login:try')
      socket.emit('room:join', {'room': 1})
      assert.equal(r.rooms.models[0].get('users').length, 2)

    it 'left', ->
      r.rooms.add({'users': []})
      socket.emit('login:try')
      socket.emit('room:join', {'room': 1})
      socket.emit('room:left')
      assert.equal(r.rooms.models.length, 0)

    it 'left not authorize', ->
      r.rooms.add({'users': []})
      socket.emit('room:left')
      assert.equal(r.rooms.models.length, 1)


  describe 'game', ->
    beforeEach ->
      r.users.add({'id': 'ben'})
      r.users.add({'id': 'zed'})
      r.emit_user = sinon.spy()
      r.emit_room = sinon.spy()

    it 'create/start on new room', ->
      r.rooms.add({})
      room = r.rooms.models[0]
      room.game._updateView = sinon.spy()
      clock.tick(100)
      assert(room.game._updateView.callCount>0)

    it 'emit user', ->
      r.rooms.add({'users': [r.users.models[0]]})
      r.rooms.user_join(r.users.models[1], {'room': 1})
      add = r.emit_user.withArgs(r.users.models[0], 'game:elements')
      add2 = r.emit_user.withArgs(r.users.models[1], 'game:elements')
      assert.equal(add.callCount, 1)
      assert.equal(add2.callCount, 1)
      assert.deepEqual(add.getCall(0).args[2], r.rooms.models[0].game._elements)
      assert.deepEqual(add2.getCall(0).args[2], r.rooms.models[0].game._elements)

    it 'join user', ->
      r.rooms.add({'users': [r.users.models[0]]})
      r.rooms.user_join(r.users.models[1], {'room': 1})
      add = r.emit_user.withArgs(r.users.models[1], 'game:elements')
      assert.equal(add.callCount, 1)
      assert.deepEqual(add.getCall(0).args[2], r.rooms.models[0].game._elements)

    it 'add user', ->
      r.rooms.add({})
      g = r.rooms.models[0].game
      g.add_user = sinon.spy()
      r.rooms.user_join(r.users.models[0], {'room': 1})
      assert.equal(g.add_user.callCount, 1)
      assert.equal(g.add_user.getCall(0).args[0], 'ben')
      assert.deepEqual(g.add_user.getCall(0).args[1], {'pos': [64, 64]})

    it 'destroy user', ->
      r.rooms.add({'users': [r.users.models[1]]})
      spy = sinon.spy()
      r.rooms.models[0].game.destroy_user = spy
      r.rooms.user_left(r.users.models[1])
      assert.equal(spy.callCount, 1)
      assert.equal(spy.getCall(0).args[0], 'zed')

    it 'destroy room', ->
      r.rooms.add({'users': [r.users.models[1]]})
      spy = sinon.spy()
      r.rooms.models[0].game.stop = spy
      r.rooms.remove(r.rooms.models[0])
      assert.equal(spy.callCount, 1)

    it 'event add', ->
      r.rooms.add({})
      r.emit_room = sinon.spy()
      add = r.emit_room.withArgs(r.rooms.models[0], 'game:add')
      r.rooms.models[0].game.add({'object': 'brick'})
      assert.equal(add.callCount, 1)
      assert.equal(add.getCall(0).args[2].object, 'brick')

    it 'event destroy', ->
      r.rooms.add({})
      r.emit_room = sinon.spy()
      destroy = r.emit_room.withArgs(r.rooms.models[0], 'game:destroy')
      r.rooms.models[0].game.destroy(1, 'f')
      assert.equal(destroy.callCount, 1)
      assert.equal(destroy.getCall(0).args[2].id, 1)
      assert.equal(destroy.getCall(0).args[2].reason, 'f')

    it 'event update', ->
      r.rooms.add({})
      r.emit_room = sinon.spy()
      update = r.emit_room.withArgs(r.rooms.models[0], 'game:update')
      id = r.rooms.models[0].game.add({'object': 'ret'})
      r.rooms.models[0].game.update({'id': id, 'speed': 10})
      assert.equal(update.callCount, 1)
      assert.equal(update.getCall(0).args[2].id, id)
      assert.equal(update.getCall(0).args[2].speed, 10)
      assert.deepEqual(update.getCall(0).args[2].pos, [0, 0])
      assert.deepEqual(update.getCall(0).args[2].vel, [0, 0])
      assert.equal(update.getCall(0).args[3], true)

    it 'event restart', ->
      r.rooms.add({})
      r.emit_room = sinon.spy()
      restart = r.emit_room.withArgs(r.rooms.models[0], 'game:restart')
      r.rooms.models[0].game.restart()
      assert.equal(restart.callCount, 1)

    it 'event destroy base', ->
      spy = sinon.spy()
      r.rooms.add({})
      r.emit_room = sinon.spy()
      destroy = r.emit_room.withArgs(r.rooms.models[0], 'game:destroy')
      r.rooms.models[0].game.restart = spy
      fake = r.rooms.models[0].game.add({'object': 'bana'})
      base = r.rooms.models[0].game.add({'object': 'base'})
      r.rooms.models[0].game.destroy(fake)
      assert.equal(spy.callCount, 0)
      r.rooms.models[0].game.destroy(base)
      assert.equal(spy.callCount, 1)


  describe 'game control', ->
    socket = null
    start = null
    action = null
    stop = null
    beforeEach ->
      start = sinon.spy()
      stop = sinon.spy()
      action = sinon.spy()
      socket = new events.EventEmitter()
      socket.id = '1'
      r.users.add({'id': 'ben'})
      r.users.add({'id': 'zed'})
      r.emit_user = sinon.spy()
      r.emit_room = sinon.spy()
      r.connection(socket)

    it 'control active:true', ->
      socket.emit('login:try')
      socket.emit('room:create')
      r.rooms.models[0].game.user_action = action
      socket.emit('control', {'active': true, 'move': 'up'})
      assert.equal(action.callCount, 1)
      assert.equal(action.getCall(0).args[0], '1')
      assert.equal(action.getCall(0).args[1], 'up')
      assert.equal(action.getCall(0).args[2], true)

    it 'control active:false', ->
      socket.emit('login:try')
      socket.emit('room:create')
      r.rooms.models[0].game.user_action = action
      socket.emit('control', {'active': false, 'move': 'down'})
      assert.equal(action.callCount, 1)
      assert.equal(action.getCall(0).args[0], '1')
      assert.equal(action.getCall(0).args[1], 'down')
      assert.equal(action.getCall(0).args[2], false)

    it 'not login', ->
      socket.emit('control', {'active': true, 'move': 'up'})
      assert.equal(r.emit_room.callCount, 0)

    it 'not room', ->
      socket.emit('login:try')
      socket.emit('control', {'active': true, 'move': 'up'})
      assert.equal(r.emit_room.callCount, 0)

