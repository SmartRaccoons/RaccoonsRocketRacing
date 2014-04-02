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
      r.emit_user(user, 'ben', 'ban')
      assert.deepEqual(user.get('socket').emit.getCall(0).args, ['ben', 'ban'])

    it 'emit_room', ->
      r.emit_lobby = sinon.spy()
      r.emit_user = sinon.spy()
      r.users.add({'id': 1})
      r.users.add({'id': 2})
      r.users.add({'id': 3})
      r.rooms.add({'users': [r.users.models[0], r.users.models[1]]})
      r.emit_user = sinon.spy()
      r.emit_room(r.rooms.models[0], 'event', 'args')
      assert.equal(r.emit_user.getCall(0).args[0].id, 1)
      assert.equal(r.emit_user.getCall(0).args[1], 'event')
      assert.equal(r.emit_user.getCall(0).args[2], 'args')
      assert.equal(r.emit_user.getCall(1).args[0].id, 2)
      assert.equal(r.emit_user.getCall(1).args[1], 'event')
      assert.equal(r.emit_user.getCall(1).args[2], 'args')
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
      r.rooms.add({})
      r.emit_user = sinon.spy()
      r.users.models[0].set('room', {})
      s = r.emit_user.withArgs(r.users.models[0], 'room:list')
      assert.equal(s.callCount, 1)
      assert.deepEqual(s.getCall(0).args[2], [{'id': 1, 'max': 2, 'users': []}])

    it 'change room, send room list (no lobby)', ->
      r.users.add({'id': 1})
      r.rooms.add({})
      r.emit_user = sinon.spy()
      s = r.emit_user.withArgs(r.users.models[0], 'room:list')
      assert.equal(s.callCount, 0)

    it 'add', ->
      r.rooms.add({})
      s = spy.withArgs('room:room_add')
      assert.equal(s.callCount, 1)
      assert.deepEqual(s.getCall(0).args[1], {'id': 1, 'max': 2, 'users': []})

    it 'remove', ->
      r.users.add({'id': 1})
      r.rooms.add({'users': [r.users.models[0]]})
      r.rooms.left_user(r.users.models[0])
      s = spy.withArgs('room:room_remove')
      assert.equal(s.callCount, 1)
      assert.deepEqual(s.getCall(0).args[1], {'id': 1})

    it 'user:join', ->
      r.users.add({'id': 1})
      r.rooms.add({'users': []})
      r.rooms.join_user(1, r.users.models[0])
      s = spy.withArgs('room:user_join')
      assert.equal(s.callCount, 1)
      assert.deepEqual(s.getCall(0).args[1], {'room_id': 1, 'user': {'id': 1}})

    it 'user:left', ->
      r.users.add({'id': 1})
      r.users.add({'id': 2})
      r.rooms.add({'users': [r.users.models[0], r.users.models[1]]})
      r.rooms.left_user(r.users.models[1])
      s = spy.withArgs('room:user_left')
      assert.equal(s.callCount, 1)
      assert.deepEqual(s.getCall(0).args[1], {'room_id': 1, 'user_id': 2})

    it 'user:left last', ->
      r.users.add({'id': 1})
      r.rooms.add({'users': [r.users.models[0]]})
      r.rooms.left_user(r.users.models[0])
      s = spy.withArgs('room:user_left')
      assert.equal(s.callCount, 0)

    it 'remove user & left room', ->
      r.users.add({'id': 1})
      r.rooms.add({'users': [r.users.models[0]]})
      r.rooms.models[0].left_user = sinon.spy()
      r.users.remove(r.users.models[0])
      assert.equal(r.rooms.models[0].left_user.callCount, 1)
      assert.equal(r.rooms.models[0].left_user.getCall(0).args[0].id, 1)

    it 'remove user - no room', ->
      r.users.add({'id': 1})
      r.rooms.add({'users': []})
      r.rooms.models[0].left_user = sinon.spy()
      r.users.remove(r.users.models[0])
      assert.equal(r.rooms.models[0].left_user.callCount, 0)


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

    it 'create not authenticated', ->
      socket.emit('room:create')
      assert.equal(r.rooms.models.length, 0)

    it 'create second time', ->
      socket.emit('login:try')
      socket.emit('room:create')
      socket.emit('room:create')
      assert.equal(r.rooms.models.length, 1)

    it 'join', ->
      r.rooms.add({'users': []})
      socket.emit('login:try')
      socket.emit('room:join', 1)
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
      socket.emit('room:join', 1)
      socket.emit('room:join', 2)
      assert.equal(r.rooms.models[0].get('users').length, 1)
      assert.equal(r.rooms.models[1].get('users').length, 0)

    it 'join full', ->
      r.users.add({'id': 1})
      r.users.add({'id': 2})
      r.rooms.add({'users': [r.users.models[1], r.users.models[2]]})
      socket.emit('login:try')
      socket.emit('room:join', 1)
      assert.equal(r.rooms.models[0].get('users').length, 2)

    it 'left', ->
      r.rooms.add({'users': []})
      socket.emit('login:try')
      socket.emit('room:join', 1)
      socket.emit('room:left')
      assert.equal(r.rooms.models.length, 0)

    it 'left not authorize', ->
      r.rooms.add({'users': []})
      socket.emit('room:left')
      assert.equal(r.rooms.models.length, 1)





#describe 'router', ->
#  r = null
#  clock = null
#  beforeEach ->
#    clock = sinon.useFakeTimers()
#    r = new Router()
#  afterEach ->
#    clock.restore()
#
#  describe 'init', ->
#    it 'game', ->
#      r.game._updateView = sinon.spy()
#      clock.tick(100)
#      assert(r.game._updateView.callCount>0)
#
#    it 'emit user', ->
#      socket = {'id': 'ben', 'emit': sinon.spy()}
#      r.emit_socket(socket, 'beni', {'1': 2})
#      assert.equal('beni', socket.emit.getCall(0).args[0])
#      assert.deepEqual({'1': 2}, socket.emit.getCall(0).args[1])
#
#  describe 'connection', ->
#    socket = null
#    socket2 = null
#    beforeEach ->
#      socket = new events.EventEmitter()
#      socket.id = 'ben'
#      socket2 = new events.EventEmitter()
#      socket2.id = 'ban'
#    it 'new tank', ->
#      r.add_tank(socket)
#      assert.equal('ben', r.game.get_tank(socket.id).params.tank_id)
#      assert.equal('tank', r.game.get_tank(socket.id).object)
#
#    it 'new tank in other 2. position', ->
#      r.add_tank(socket)
#      r.add_tank(socket2)
#      t = r.game.get_tank(socket2.id)
#      assert.deepEqual([r.game.size[0]-t.size[0], r.game.size[1]-t.size[1]], t.pos)
#
#    it 'new tank in other 3. position', ->
#      r.add_tank(socket)
#      r.add_tank(socket)
#      r.add_tank(socket2)
#      t = r.game.get_tank(socket2.id)
#      assert.deepEqual([r.game.size[0]-t.size[0], 0], t.pos)
#
#    it 'new tank in other 4. position', ->
#      r.add_tank(socket)
#      r.add_tank(socket)
#      r.add_tank(socket)
#      r.add_tank(socket2)
#      t = r.game.get_tank(socket2.id)
#      assert.deepEqual([0, r.game.size[1]-t.size[1]], t.pos)
#
#    it 'new tank in other 5. position', ->
#      r.add_tank(socket)
#      r.add_tank(socket)
#      r.add_tank(socket)
#      r.add_tank(socket)
#      r.add_tank(socket2)
#      t = r.game.get_tank(socket2.id)
#      assert.deepEqual([0, 0], t.pos)
#
#    it 'new tank in other 6. position', ->
#      r.add_tank(socket)
#      r.add_tank(socket)
#      r.add_tank(socket)
#      r.add_tank(socket)
#      r.add_tank(socket)
#      r.add_tank(socket2)
#      t = r.game.get_tank(socket2.id)
#      assert.deepEqual([r.game.size[0]-t.size[0], r.game.size[1]-t.size[1]], t.pos)
#
#    it 'create tank', ->
#      r.add_tank = sinon.spy()
#      r.connection(socket)
#      assert.equal(1, r.add_tank.callCount)
#      assert.equal('ben', r.add_tank.getCall(0).args[0].id)
#
#    it 'emit status', ->
#      r.game._elements = {'1': 2, '2': 3}
#      r.emit_socket = sinon.spy()
#      r.add_tank = ->
#      r.connection(socket)
#      assert.equal(2, r.emit_socket.callCount)
#      assert.equal('ben', r.emit_socket.getCall(0).args[0].id)
#      assert.equal('add', r.emit_socket.getCall(0).args[1])
#      assert.equal(2, r.emit_socket.getCall(0).args[2])
#
#    it 'disconnect', ->
#      r.game.destroy = sinon.spy()
#      r.connection(socket)
#      t = r.game.get_tank(socket.id)
#      socket.emit('disconnect')
#      assert.equal(t.id, r.game.destroy.getCall(0).args[0])
#
#    it 'event: new element', ->
#      r.connection(socket)
#      r.emit_socket = sinon.spy()
#      r.game.add({'object': 'ret'})
#      assert.equal('add', r.emit_socket.getCall(0).args[1])
#      assert.equal('ret', r.emit_socket.getCall(0).args[2].object)
#
#    it 'event: destroy element', ->
#      r.connection(socket)
#      id = r.game.add({'object': 'ret'})
#      r.emit_socket = sinon.spy()
#      r.game.destroy(id)
#      assert.equal('destroy', r.emit_socket.getCall(0).args[1])
#      assert.equal(id, r.emit_socket.getCall(0).args[2].id)
#
#    it 'event: update element', ->
#      r.connection(socket)
#      id = r.game.add({'object': 'ret'})
#      r.emit_socket = sinon.spy()
#      r.game.update({'id': id, 'speed': 10})
#      assert.equal('update', r.emit_socket.getCall(0).args[1])
#      assert.equal(id, r.emit_socket.getCall(0).args[2].id)
#      assert.equal(10, r.emit_socket.getCall(0).args[2].speed)
#      assert.deepEqual([0, 0], r.emit_socket.getCall(0).args[2].pos)
#
#
#  describe 'gameplay', ->
#    socket = null
#    socket2 = null
#    t = null
#    beforeEach ->
#      socket = new events.EventEmitter()
#      socket.id = 'ben'
#      socket2 = new events.EventEmitter()
#      socket2.id = 'ban'
#      r.connection(socket)
#      r.connection(socket2)
#      t = r.game.get_tank(socket.id)
#
#    it 'destroy base', ->
#      r.game.restart = sinon.spy()
#      id = r.game.add({'object': 'ben'})
#      r.game.destroy(id)
#      assert.equal(0, r.game.restart.callCount)
#      id = r.game.add({'object': 'base'})
#      r.game.destroy(id)
#      assert.equal(1, r.game.restart.callCount)
#
#    it 'restart event', ->
#      stub = sinon.stub(r, 'emit_socket')
#      r.game.restart()
#      assert.equal(1, stub.withArgs(socket, 'restart').callCount)
#      assert.equal(1, stub.withArgs(socket2, 'restart').callCount)
#
#  describe 'control', ->
#    socket = null
#    t = null
#    beforeEach ->
#      socket = new events.EventEmitter()
#      socket.id = 'ben'
#      r.connection(socket)
#      t = r.game.get_tank(socket.id)
#
#    it 'no tank', ->
#      socket.emit 'disconnect'
#      r.emit_socket = sinon.spy()
#      socket.emit 'control', {'move': 'up', 'active': true}
#      assert.equal(0, r.emit_socket.callCount)
#
#    it 'moving', ->
#      r.game.tank_start = sinon.spy()
#      r.game.tank_stop = sinon.spy()
#      socket.emit 'control', {'move': 'up', 'active': true}
#      assert.equal(socket.id, r.game.tank_start.getCall(0).args[0])
#      assert.equal('up', r.game.tank_start.getCall(0).args[1])
#      socket.emit 'control', {'move': 'up', 'active': false}
#      assert.equal(socket.id, r.game.tank_stop.getCall(0).args[0])
#      assert.equal('up', r.game.tank_stop.getCall(0).args[1])
#
#



