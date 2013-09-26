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

  describe 'init', ->
    it 'game', ->
      r.game._updateView = sinon.spy()
      clock.tick(100)
      assert(r.game._updateView.callCount>0)

    it 'emit user', ->
      socket = {'id': 'ben', 'emit': sinon.spy()}
      r.emit_socket(socket, 'beni', {'1': 2})
      assert.equal('beni', socket.emit.getCall(0).args[0])
      assert.deepEqual({'1': 2}, socket.emit.getCall(0).args[1])

  describe 'connection', ->
    socket = null
    socket2 = null
    beforeEach ->
      socket = new events.EventEmitter()
      socket.id = 'ben'
      socket2 = new events.EventEmitter()
      socket2.id = 'ban'
    it 'new tank', ->
      r.add_tank(socket)
      assert.equal('ben', r.game.get_tank(socket.id).params.tank_id)
      assert.equal('tank', r.game.get_tank(socket.id).object)

    it 'new tank in other 2. position', ->
      r.add_tank(socket)
      r.add_tank(socket2)
      t = r.game.get_tank(socket2.id)
      assert.deepEqual([r.game.size[0]-t.size[0], r.game.size[1]-t.size[1]], t.pos)

    it 'new tank in other 3. position', ->
      r.add_tank(socket)
      r.add_tank(socket)
      r.add_tank(socket2)
      t = r.game.get_tank(socket2.id)
      assert.deepEqual([r.game.size[0]-t.size[0], 0], t.pos)

    it 'new tank in other 4. position', ->
      r.add_tank(socket)
      r.add_tank(socket)
      r.add_tank(socket)
      r.add_tank(socket2)
      t = r.game.get_tank(socket2.id)
      assert.deepEqual([0, r.game.size[1]-t.size[1]], t.pos)

    it 'new tank in other 5. position', ->
      r.add_tank(socket)
      r.add_tank(socket)
      r.add_tank(socket)
      r.add_tank(socket)
      r.add_tank(socket2)
      t = r.game.get_tank(socket2.id)
      assert.deepEqual([0, 0], t.pos)

    it 'new tank in other 6. position', ->
      r.add_tank(socket)
      r.add_tank(socket)
      r.add_tank(socket)
      r.add_tank(socket)
      r.add_tank(socket)
      r.add_tank(socket2)
      t = r.game.get_tank(socket2.id)
      assert.deepEqual([r.game.size[0]-t.size[0], r.game.size[1]-t.size[1]], t.pos)

    it 'create tank', ->
      r.add_tank = sinon.spy()
      r.connection(socket)
      assert.equal(1, r.add_tank.callCount)
      assert.equal('ben', r.add_tank.getCall(0).args[0].id)

    it 'emit status', ->
      r.game._elements = {'1': 2, '2': 3}
      r.emit_socket = sinon.spy()
      r.add_tank = ->
      r.connection(socket)
      assert.equal(2, r.emit_socket.callCount)
      assert.equal('ben', r.emit_socket.getCall(0).args[0].id)
      assert.equal('add', r.emit_socket.getCall(0).args[1])
      assert.equal(2, r.emit_socket.getCall(0).args[2])

    it 'disconnect', ->
      r.game.destroy = sinon.spy()
      r.connection(socket)
      t = r.game.get_tank(socket.id)
      socket.emit('disconnect')
      assert.equal(t.id, r.game.destroy.getCall(0).args[0])

    it 'event: new element', ->
      r.connection(socket)
      r.emit_socket = sinon.spy()
      r.game.add({'object': 'ret'})
      assert.equal('add', r.emit_socket.getCall(0).args[1])
      assert.equal('ret', r.emit_socket.getCall(0).args[2].object)

    it 'event: destroy element', ->
      r.connection(socket)
      id = r.game.add({'object': 'ret'})
      r.emit_socket = sinon.spy()
      r.game.destroy(id)
      assert.equal('destroy', r.emit_socket.getCall(0).args[1])
      assert.equal(id, r.emit_socket.getCall(0).args[2].id)

    it 'event: update element', ->
      r.connection(socket)
      id = r.game.add({'object': 'ret'})
      r.emit_socket = sinon.spy()
      r.game.update({'id': id, 'speed': 10})
      assert.equal('update', r.emit_socket.getCall(0).args[1])
      assert.equal(id, r.emit_socket.getCall(0).args[2].id)
      assert.equal(10, r.emit_socket.getCall(0).args[2].speed)
      assert.deepEqual([0, 0], r.emit_socket.getCall(0).args[2].pos)

    it 'on destroy tank add new', ->
      r.connection(socket)
      r.game.update({'id': r.game.get_tank(socket.id).id, 'speed': 100})
      r.add_tank = sinon.spy()
      r.game.destroy(r.game.get_tank(socket.id).id, 'destroy')
      assert.equal('ben', r.add_tank.getCall(0).args[0].id)

  describe 'gameplay', ->
    socket = null
    socket2 = null
    t = null
    beforeEach ->
      socket = new events.EventEmitter()
      socket.id = 'ben'
      socket2 = new events.EventEmitter()
      socket2.id = 'ban'
      r.connection(socket)
      r.connection(socket2)
      t = r.game.get_tank(socket.id)

    it 'destroy base', ->
      r.game.restart = sinon.spy()
      id = r.game.add({'object': 'ben'})
      r.game.destroy(id)
      assert.equal(0, r.game.restart.callCount)
      id = r.game.add({'object': 'base'})
      r.game.destroy(id)
      assert.equal(1, r.game.restart.callCount)

    it 'restart event', ->
      stub = sinon.stub(r, 'emit_socket')
      r.game.restart()
      assert.equal(1, stub.withArgs(socket, 'restart').callCount)
      assert.equal(1, stub.withArgs(socket2, 'restart').callCount)

  describe 'control', ->
    socket = null
    t = null
    beforeEach ->
      socket = new events.EventEmitter()
      socket.id = 'ben'
      r.connection(socket)
      t = r.game.get_tank(socket.id)

    it 'no tank', ->
      socket.emit 'disconnect'
      r.emit_socket = sinon.spy()
      socket.emit 'control', {'move': 'up', 'active': true}
      assert.equal(0, r.emit_socket.callCount)

    it 'moving', ->
      r.game.tank_start = sinon.spy()
      r.game.tank_stop = sinon.spy()
      socket.emit 'control', {'move': 'up', 'active': true}
      assert.equal(socket.id, r.game.tank_start.getCall(0).args[0])
      assert.equal('up', r.game.tank_start.getCall(0).args[1])
      socket.emit 'control', {'move': 'up', 'active': false}
      assert.equal(socket.id, r.game.tank_stop.getCall(0).args[0])
      assert.equal('up', r.game.tank_stop.getCall(0).args[1])





