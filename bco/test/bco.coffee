assert = require('assert')
sinon = require('sinon')
events = require('events')
nock = require('nock')
extend = require('util')._extend


Bco = require('../').Bco


describe 'Bco', ->
  b = null
  beforeEach ->
    b = new Bco()

  afterEach ->

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

    it 'add brick', ->
      id = b.add({'object': 'brick'})
      assert.equal(b.get(id).hitpoints, 2)

  describe 'load map', ->
    it 'elements', ->
      b = new Bco([[0, 0, 1], [1, 0, 0]])
      assert.deepEqual([32, 0], b.get(1).pos)
      assert.equal('brick', b.get(1).object)
      assert.deepEqual([0, 16], b.get(2).pos)


    it 'default params', ->
      id = b.add({'object': 'benja'})
      assert.equal(1, b.get(id).id)
      assert.equal('benja', b.get(id).object)
      assert.deepEqual({}, b.get(id).params)
      assert.deepEqual([0, 0], b.get(id).pos)
      assert.deepEqual([16, 16], b.get(id).size)
      assert.equal(0, b.get(id).speed)
      assert.equal(0, b.get(id).angle)
      assert.equal(0, b.get(id).destroy)
      assert.equal(1, b.get(id).hitpoints)
      id = b.add({'object': 'benja2', 'params': {'1': 1}, 'pos': [1, 2], 'speed': 2, 'angle': 3, 'destroy': 1, 'hitpoints': 10})
      assert.equal(2, b.get(id).id)
      assert.equal('benja2', b.get(id).object)
      assert.deepEqual({'1': 1}, b.get(id).params)
      assert.deepEqual([1, 2], b.get(id).pos)
      assert.deepEqual([16, 16], b.get(id).size)
      assert.equal(2, b.get(id).speed)
      assert.equal(3, b.get(id).angle)
      assert.equal(10, b.get(id).hitpoints)
      assert.equal(0, b.get(id).over)
      assert.equal(1, b.get(id).stuck)

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

    it 'event update', ->
      spy = sinon.spy()
      b.on 'update', spy
      b.update({'id': id, 'pos': [10, 11], 'speed': 11})
      assert.deepEqual([10, 11], spy.getCall(0).args[0].pos)
      assert.equal(11, spy.getCall(0).args[0].speed)


  describe 'destroy', ->
    id = null
    beforeEach ->
      id = b.add({'object': 'benja'})

    it 'event', ->
      spy = sinon.spy()
      b.on 'destroy', spy
      b.destroy(id)
      assert.equal(id, spy.getCall(0).args[0].id)

    it 'reason', ->
      spy = sinon.spy()
      b.on 'destroy', spy
      b.destroy(id, 'benja')
      assert.equal('benja', spy.getCall(0).args[0].reason)


  describe 'process', ->
    clock = null
    beforeEach ->
      clock = sinon.useFakeTimers()
      b._elements = {}
    afterEach ->
      clock.restore()

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

    it 'collides bullet', ->
      spy = sinon.spy(b, 'destroy')
      bullet = b.add({'object': 'bullet', 'speed': 10, 'angle': 0, 'pos': [10, 10], 'destroy': 1})
      tank = b.add({'object': 'tank', 'speed': 0, 'angle': 90, 'pos': [20, 10]})
      b._updateView(0.1)
      assert.equal(bullet, b.get(bullet).id)
      b._updateView(0.2)
      assert.equal(null, b.get(bullet))
      assert.equal(null, b.get(tank))
      assert(spy.withArgs(tank, 'destroy').calledOnce)
      assert(spy.withArgs(bullet, 'destroy').calledOnce)

    it 'collides self bullet', ->
      spy = sinon.spy(b, 'destroy')
      tank = b.add({'object': 'tank', 'speed': 0, 'angle': 90, 'pos': [20, 10]})
      bullet = b.add({'object': 'bullet', 'speed': 10, 'angle': 0, 'pos': [10, 10], 'destroy': 1, 'params': {'owner': tank}})
      b._updateView(0.3)
      assert.equal(0, spy.callCount)


    it 'collides bullet with hitpoints', ->
      spy = sinon.spy(b, 'update')
      bullet = b.add({'object': 'bullet', 'speed': 10, 'angle': 0, 'pos': [10, 10], 'destroy': 1})
      tank = b.add({'object': 'tank', 'speed': 0, 'angle': 90, 'pos': [20, 10], 'hitpoints': 2})
      b._updateView(0.3)
      assert.equal(null, b.get(bullet))
      assert.equal(1, b.get(tank).hitpoints)
      assert.equal(1, spy.callCount)
      assert.equal(tank, spy.getCall(0).args[0].id)
      assert.equal(1, spy.getCall(0).args[0].hitpoints)

    it 'collides bullet with 2 elements', ->
      spy = sinon.spy(b, 'destroy')
      bullet = b.add({'object': 'bullet', 'speed': 10, 'angle': 0, 'pos': [10, 10], 'destroy': 1})
      b.add({'object': 'tank', 'speed': 0, 'angle': 90, 'pos': [20, 10]})
      b.add({'object': 'tank', 'speed': 0, 'angle': 90, 'pos': [20, 10]})
      b._updateView(0.3)
      assert.equal(3, spy.callCount)
      assert(spy.withArgs(bullet, 'destroy').calledOnce)

  describe 'collides', ->
    clock = null
    tank1 = null
    tank2 = null
    spy = null
    beforeEach ->
      clock = sinon.useFakeTimers()
      b._elements = {}
      spy = sinon.spy(b, 'update')
      tank1 = b.add({'object': 'tank', 'speed': 10, 'angle': 0, 'pos': [0, 0]})
      tank2 = b.add({'object': 'brick', 'speed': 0, 'angle': 0, 'pos': [0, 0]})
    afterEach ->
      clock.restore()

    it 'over elements', ->
      b._updateView(0.8)
      assert.equal(0, b.get(tank1).stuck)
      assert.equal(1, b.get(tank2).stuck)
      assert.equal(1, spy.callCount)
      assert.equal(tank1, spy.getCall(0).args[0].id)
      assert.equal(0, spy.getCall(0).args[0].stuck)
      b._updateView(0.1)
      assert.equal(1, spy.callCount)

    it 'remove stuck', ->
      b.get(tank1).stuck = 0
      b._tank_move(tank1, 'up', true)
      assert.equal(1, b.get(tank1).stuck)

    it 'over element from left', ->
      b.get(tank2).pos = [34, 0]
      b.get(tank1).pos = [0, 1]
      b._updateView(1)
      assert.deepEqual([2, 1], b.get(tank1).pos)

    it 'over element from right', ->
      b.get(tank1).angle = 180
      b.get(tank1).pos = [17, 1]
      b._updateView(1)
      assert.deepEqual([16, 1], b.get(tank1).pos)

    it 'over element from top', ->
      b.get(tank1).angle = 90
      b.get(tank2).pos = [0, 34]
      b._updateView(1)
      assert.deepEqual([0, 2], b.get(tank1).pos)

    it 'over element from bottom', ->
      b.get(tank1).angle = 270
      b.get(tank1).pos = [0, 17]
      b._updateView(1)
      assert.deepEqual([0, 16], b.get(tank1).pos)

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
      assert.deepEqual(1, spy.getCall(0).args[0].destroy)

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

    it 'move round coors', ->
      spy = sinon.spy()
      b.on 'update', spy
      b.get(id).pos = [3, 4]
      b.tank_start(id, 'right')
      assert.deepEqual([0, 8], spy.getCall(0).args[0].pos)
      b._elements[id].pos = [4, 12]
      b.tank_start(id, 'left')
      assert.deepEqual([8, 16], spy.getCall(1).args[0].pos)

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
    it 'top', ->
      assert(!b._collides(2, 0, 8, 9,
        0, 10, 10, 20))
      assert(!b._collides(2, 0, 8, 10,
        0, 10, 10, 20))
      assert(b._collides(2, 0, 8, 11,
        0, 10, 10, 20))
    it 'bottom', ->
      assert(!b._collides(2, 21, 8, 22,
        0, 10, 10, 20))
      assert(!b._collides(2, 20, 8, 22,
        0, 10, 10, 20))
      assert(b._collides(2, 19, 8, 22,
        0, 10, 10, 20))
    it 'left', ->
      assert(!b._collides(0, 2, 9, 8,
        10, 0, 20, 10))
      assert(!b._collides(0, 2, 10, 8,
        10, 0, 20, 10))
      assert(b._collides(0, 2, 11, 8,
        10, 0, 20, 10))
    it 'right', ->
      assert(!b._collides(21, 2, 30, 8,
        10, 0, 20, 10))
      assert(!b._collides(20, 2, 30, 8,
        10, 0, 20, 10))
      assert(b._collides(19, 2, 30, 8,
        10, 0, 20, 10))
