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
    beforeEach ->
      socket = new events.EventEmitter()
      socket.id = 'ben'
    it 'new tank', ->
      r.add_tank(socket)
      assert.equal('ben', r.game.get(socket.tank_id).params.socket_id)
      assert.equal('tank', r.game.get(socket.tank_id).object)

    it 'new tank in other 2. position', ->
      r.add_tank(socket)
      socket2 = new events.EventEmitter()
      socket2.id = 'ban'
      r.add_tank(socket2)
      t = r.game.get(socket2.tank_id)
      assert.deepEqual([r.game.size[0]-t.size[0], 0], t.pos)

    it 'new tank in other 3. position', ->
      r.add_tank(socket)
      r.add_tank(socket)
      socket2 = new events.EventEmitter()
      socket2.id = 'ban'
      r.add_tank(socket2)
      t = r.game.get(socket2.tank_id)
      assert.deepEqual([r.game.size[0]-t.size[0], r.game.size[1]-t.size[1]], t.pos)

    it 'new tank in other 4. position', ->
      r.add_tank(socket)
      r.add_tank(socket)
      r.add_tank(socket)
      socket2 = new events.EventEmitter()
      socket2.id = 'ban'
      r.add_tank(socket2)
      t = r.game.get(socket2.tank_id)
      assert.deepEqual([0, r.game.size[1]-t.size[1]], t.pos)

    it 'new tank in other 5. position', ->
      r.add_tank(socket)
      r.add_tank(socket)
      r.add_tank(socket)
      r.add_tank(socket)
      socket2 = new events.EventEmitter()
      socket2.id = 'ban'
      r.add_tank(socket2)
      t = r.game.get(socket2.tank_id)
      assert.deepEqual([0, 0], t.pos)

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
      socket.emit('disconnect')
      assert.equal(socket.tank_id, r.game.destroy.getCall(0).args[0])

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
      r.game.update({'id': socket.tank_id, 'speed': 100})
      r.add_tank = sinon.spy()
      r.game.destroy(socket.tank_id, 'destroy')
      assert.equal('ben', r.add_tank.getCall(0).args[0].id)


  describe 'control', ->
    socket = null
    beforeEach ->
      socket = new events.EventEmitter()
      socket.id = 'ben'
      r.connection(socket)

    it 'no tank', ->
      socket.emit 'disconnect'
      r.emit_socket = sinon.spy()
      socket.emit 'control', {'move': 'up', 'active': true}
      assert.equal(0, r.emit_socket.callCount)

    it 'moving', ->
      r.game.tank_start = sinon.spy()
      r.game.tank_stop = sinon.spy()
      socket.emit 'control', {'move': 'up', 'active': true}
      assert.equal(socket.tank_id, r.game.tank_start.getCall(0).args[0])
      assert.equal('up', r.game.tank_start.getCall(0).args[1])
      socket.emit 'control', {'move': 'up', 'active': false}
      assert.equal(socket.tank_id, r.game.tank_stop.getCall(0).args[0])
      assert.equal('up', r.game.tank_stop.getCall(0).args[1])





