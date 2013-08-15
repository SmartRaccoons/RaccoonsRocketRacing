assert = require('assert')
sinon = require('sinon')
events = require('events')
nock = require('nock')
extend = require('util')._extend


Bco = require('../')

describe 'bco', ->
  b = null
  beforeEach ->
    b = new Bco()

  afterEach ->

  describe 'init', ->
    it 'size', ->
      b = new Bco()
      assert.deepEqual([416, 416], b.size)

  describe 'add', ->
    it 'auto id', ->
      assert.equal(b.id, 0)
      b.add({'object': 'tank'})
      assert.equal(b.id, 1)

    it 'add tank', ->
      id = b.add({'object': 'tank'})
      assert.equal(1, id)
      assert.deepEqual(b.get(id).size, [32, 32])

    it 'add bullet', ->
      id = b.add({'object': 'bullet'})
      assert.equal(1, id)
      assert.deepEqual(b.get(id).size, [8, 8])

    it 'default params', ->
      id = b.add({'object': 'benja'})
      assert.equal(1, b.get(id).id)
      assert.equal('benja', b.get(id).object)
      assert.deepEqual({}, b.get(id).params)
      assert.deepEqual([0, 0], b.get(id).pos)
      assert.deepEqual([8, 8], b.get(id).size)
      assert.equal(0, b.get(id).speed)
      assert.equal(0, b.get(id).angle)
      assert.equal(0, b.get(id).destroy)
      assert.equal(1, b.get(id).hitpoints)
      id = b.add({'object': 'benja2', 'params': {'1': 1}, 'pos': [1, 2], 'speed': 2, 'angle': 3, 'destroy': 1, 'hitpoints': 10})
      assert.equal(2, b.get(id).id)
      assert.equal('benja2', b.get(id).object)
      assert.deepEqual({'1': 1}, b.get(id).params)
      assert.deepEqual([1, 2], b.get(id).pos)
      assert.deepEqual([8, 8], b.get(id).size)
      assert.equal(2, b.get(id).speed)
      assert.equal(3, b.get(id).angle)
      assert.equal(10, b.get(id).hitpoints)

    it 'event add', ->
      spy = sinon.spy()
      b.on 'add', spy
      id = b.add({'object': 'benja'})
      assert.equal(1, spy.getCall(0).args[0].id)
      assert.equal('benja', spy.getCall(0).args[0].object)


  describe 'update', ->
    id = null
    beforeEach ->
      id = b.add({'object': 'benja'})

    it 'elements', ->
      b.update({'id': id, 'pos': [10, 11], 'speed': 11})
      assert.deepEqual([10, 11], b.get(id).pos)
      assert.equal(11, b.get(id).speed)

    it 'event update', ->
      spy = sinon.spy()
      b.on 'update', spy
      b.update({'id': id, 'pos': [10, 11], 'speed': 11})
      assert.deepEqual([10, 11], spy.getCall(0).args[0].pos)
      assert.equal(11, spy.getCall(0).args[0].speed)


  describe 'remove', ->
    id = null
    beforeEach ->
      id = b.add({'object': 'benja'})

    it 'event', ->
      spy = sinon.spy()
      b.on 'remove', spy
      b.remove(id)
      assert.equal(null, b.get(id))
      assert.equal(id, spy.getCall(0).args[0].id)

    it 'reason', ->
      spy = sinon.spy()
      b.on 'remove', spy
      b.remove(id, 'benja')
      assert.equal('benja', spy.getCall(0).args[0].reason)


  describe 'process', ->
    clock = null
    beforeEach ->
      clock = sinon.useFakeTimers()
      b._elements = {}
    afterEach ->
      clock.restore()

    it 'start', ->
      b._updateView = sinon.spy()
      clock.tick(1000)
      assert.equal(0, b._updateView.callCount)
      b.start()
      clock.tick(24)
      assert.equal(0, b._updateView.callCount)
      clock.tick(25)
      assert.equal(1, b._updateView.callCount)
      assert.equal(0.025, b._updateView.getCall(0).args[0])
      clock.tick(100)
      assert.equal(5, b._updateView.callCount)

    it 'update position', ->
      id = b.add({'object': 'benja', 'speed': 10, 'angle': 0, 'pos': [0, 0]})
      b._updateView(1)
      assert.deepEqual([10, 0], b.get(id).pos)
      b._updateView(0.5)
      assert.deepEqual([15, 0], b.get(id).pos)
      b.update({'id': id, 'angle': 90, 'pos': [0, 0]})
      b._updateView(0.5)
      assert(b.get(id).pos[0]<0.0001)
      assert(b.get(id).pos[1]-5<0.0001)
      b.update({'id': id, 'angle': 45, 'pos': [0, 0]})
      b._updateView(1)
      assert(b.get(id).pos[0]-7.07<0.01)
      assert(b.get(id).pos[1]-7.07<0.01)

    it 'update position out of space for destroyers', ->
      id = b.add({'object': 'benja', 'speed': 10, 'angle': 180, 'pos': [1, 1], 'destroy': 1})
      b._updateView(0.2)
      assert.equal(null, b.get(id))
      id = b.add({'object': 'benja', 'speed': 10, 'angle': 270, 'pos': [1, 1], 'destroy': 1})
      b._updateView(0.2)
      assert.equal(null, b.get(id))
      id = b.add({'object': 'benja', 'speed': 10, 'angle': 0, 'pos': [408, 1], 'destroy': 1})
      b._updateView(0.2)
      assert.equal(null, b.get(id))
      id = b.add({'object': 'benja', 'speed': 10, 'angle': 90, 'pos': [1, 408], 'destroy': 1})
      b._updateView(0.2)
      assert.equal(null, b.get(id))

    it 'collides', ->
      bullet = b.add({'object': 'bullet', 'speed': 10, 'angle': 0, 'pos': [10, 10], 'destroy': 1})
      tank = b.add({'object': 'tank', 'speed': 0, 'angle': 90, 'pos': [20, 10]})
      b._updateView(0.1)
      assert.equal(bullet, b.get(bullet).id)
      b._updateView(0.2)
      assert.equal(null, b.get(bullet))
      assert.equal(null, b.get(tank))

    it 'collides with hitpoints', ->
      bullet = b.add({'object': 'bullet', 'speed': 10, 'angle': 0, 'pos': [10, 10], 'destroy': 1})
      tank = b.add({'object': 'tank', 'speed': 0, 'angle': 90, 'pos': [20, 10], 'hitpoints': 2})
      b._updateView(0.3)
      assert.equal(null, b.get(bullet))
      assert.equal(tank, b.get(tank).id)
      assert.equal(1, b.get(tank).hitpoints)

    it 'stop', ->
      b._updateView = sinon.spy()
      b.start()
      clock.tick(25)
      b.stop()
      assert.equal(1, b._updateView.callCount)
      clock.tick(100)
      assert.equal(1, b._updateView.callCount)

  describe 'control', ->
    id = null
    beforeEach ->
      id = b.add({'object': 'tank', 'pos': [2, 3], 'angle': 90})

    it 'fire', ->
      spy = sinon.spy()
      b.on 'add', spy
      b.tank_start(id, 'fire')
      assert.equal('bullet', spy.getCall(0).args[0].object)
      assert.equal(id, spy.getCall(0).args[0].params.owner)
      assert.deepEqual([14, 15], spy.getCall(0).args[0].pos)
      assert.deepEqual(90, spy.getCall(0).args[0].angle)
      assert.deepEqual(200, spy.getCall(0).args[0].speed)

    it 'move', ->
      spy = sinon.spy()
      b.on 'update', spy
      b.tank_start(id, 'up')
      assert.equal(id, spy.getCall(0).args[0].id)
      assert.equal(270, spy.getCall(0).args[0].angle)
      assert.equal(100, spy.getCall(0).args[0].speed)

    it 'move down', ->
      spy = sinon.spy()
      b.on 'update', spy
      b.tank_start(id, 'down')
      assert.equal(90, spy.getCall(0).args[0].angle)

    it 'move left', ->
      spy = sinon.spy()
      b.on 'update', spy
      b.tank_start(id, 'left')
      assert.equal(180, spy.getCall(0).args[0].angle)

    it 'move right', ->
      spy = sinon.spy()
      b.on 'update', spy
      b.tank_start(id, 'right')
      assert.equal(0, spy.getCall(0).args[0].angle)

    it 'move stop', ->
      spy = sinon.spy()
      b.tank_start(id, 'up')
      b.on 'update', spy
      b.tank_stop(id, 'up')
      assert.equal(0, spy.getCall(0).args[0].speed)

    it 'move with more keystokes', ->
      spy = sinon.spy()
      b.on 'update', spy
      b.tank_start(id, 'down')
      b.tank_start(id, 'left')
      b.tank_start(id, 'up')
      b.tank_stop(id, 'up')
      assert.equal(4, spy.callCount)
      assert.equal(180, spy.getCall(3).args[0].angle)
      assert.equal(100, spy.getCall(3).args[0].speed)
      b.tank_stop(id, 'down')
      assert.equal(4, spy.callCount)

    it 'wrong move', ->
      update = sinon.spy()
      add = sinon.spy()
      b.on 'update', update
      b.on 'add', add
      b.tank_start(id, 'ben')
      assert.equal(0, update.callCount)
      assert.equal(0, add.callCount)
      b._tank_move = sinon.spy()
      b.tank_stop(id, 'ben')
      assert.equal(0, b._tank_move.callCount)


  describe 'collides', ->
    it 'rt'
    it 'rb'
    it 'lt'
    it 'lb'
