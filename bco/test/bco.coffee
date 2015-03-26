assert = require('assert')
sinon = require('sinon')
events = require('events')
nock = require('nock')
extend = require('util')._extend


Bco = require('../server').Bco


describe 'Bco', ->
  b = null
  beforeEach ->
    b = new Bco()

  afterEach ->


  describe 'load map', ->
    it 'brick', ->
      b = new Bco([[0, 0, 1], [1, 0, 0]])
      assert.deepEqual([32, 0], b.get(1).pos)
      assert.equal('brick', b.get(1).object)
      assert.deepEqual([0, 16], b.get(2).pos)

    it 'iron', ->
      b = new Bco([[0, 0, 2]])
      assert.equal('iron', b.get(1).object)

    it 'base', ->
      b = new Bco([[0, 10, 0], [0, 0, 0]])
      assert.deepEqual([16, 0], b.get(1).pos)
      assert.equal('base', b.get(1).object)


  describe 'add', ->
    it 'auto id', ->
      assert.equal(b.id, 0)
      b.add({'object': 'user'})
      assert.equal(b.id, 1)

    it 'user', ->
      id = b.add({'object': 'user'})
      assert.equal(1, id)
      assert.deepEqual(b.get(id).size, [32, 32])
      assert.equal(b.get(id).accelerator, 0)
      assert.deepEqual(b.get(id).moving, [])

    it 'bullet', ->
      id = b.add({'object': 'bullet'})
      assert.equal(1, id)
      assert.equal(b.get(id).speed, 8)
      assert.deepEqual(b.get(id).size, [8, 8])

    it 'bullet velocity', ->
      id = b.add({'object': 'bullet', 'angle': 0})
      assert.deepEqual(b.get(id).vel, [8, 0])

      id = b.add({'object': 'bullet', 'angle': Math.PI})
      assert(-8.001 < b.get(id).vel[0] < -7.999)
      assert(-0.001 < b.get(id).vel[1] < 0.001)

      id = b.add({'object': 'bullet', 'angle': Math.PI / 4})
      assert(5.65 < b.get(id).vel[0] < 5.66)
      assert(5.65 < b.get(id).vel[1] < 5.66)

      id = b.add({'object': 'bullet', 'angle': Math.PI / 5})
      assert(6.3 < b.get(id).vel[0] < 6.5)
      assert(4.7 < b.get(id).vel[1] < 4.9)

    it 'brick', ->
      id = b.add({'object': 'brick'})
      assert.equal(b.get(id).hitpoints, 2)

    it 'iron', ->
      id = b.add({'object': 'iron'})
      assert.equal(b.get(id).hitpoints, 20)

    it 'base', ->
      id = b.add({'object': 'base'})
      assert.deepEqual(b.get(id).size, [32, 32])

    it 'default params', ->
      id = b.add({'object': 'benja'})
      assert.equal(1, b.get(id).id)
      assert.equal('benja', b.get(id).object)
      assert.deepEqual({}, b.get(id).params)
      assert.deepEqual([0, 0], b.get(id).pos)
      assert.deepEqual([0, 0], b.get(id).vel)
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

    it 'event', ->
      spy = sinon.spy()
      b.on 'add', spy
      id = b.add({'object': 'benja'})
      assert.equal(1, spy.getCall(0).args[0].id)
      assert.equal('benja', spy.getCall(0).args[0].object)


  describe 'restart', ->
    it 'same map', ->
      b = new Bco([[0, 1], [0, 1]])
      b.destroy(1)
      assert.equal(1, b.get({}).length)
      b.restart()
      assert.equal(2, b.get({}).length)

    it 'event', ->
      b = new Bco()
      spy = sinon.spy()
      b.on 'restart', spy
      b.restart()
      assert.equal(1, spy.callCount)

    it 'users', ->
      b = new Bco([[0, 1], [0, 1]])
      b.add_user('ben')
      b.restart()
      assert.notEqual(null, b.get_user('ben'))

    it 'users coors', ->
      b = new Bco()
      b.add_user('ben', {'pos': [1, 2], 'speed': 10})
      b._updateView(1)
      b.restart()
      assert.deepEqual([1, 2], b.get_user('ben').pos)
      id = b.get_user('ben').id
      b.update({'id': id, 'pos': [0, 1]})
      b.restart()
      assert.deepEqual([1, 2], b.get_user('ben').pos)



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

    it 'reappend user', ->
      id = b.add_user('ben')
      b.destroy(id)
      assert.equal(null, b.get_user('ben'))
      id = b.add_user('ben', {'pos': [1, 2]})
      b.destroy(id, 'destroy')
      assert.equal(null, b.get(id))
      assert.deepEqual([1, 2], b.get_user('ben').pos)

    it 'reappend user on restart', ->
      b.on 'destroy', ->
        b._elements = {}
      id = b.add_user('ben')
      b.destroy(id, 'destroy')
      assert.equal(null, b.get_user('ben'))

    it 'destroy user', ->
      id = b.add_user('ben')
      assert.notEqual(b.get(id))
      b.destroy_user('ben')
      assert.equal(null, b.get(id))


  describe 'process', ->
    clock = null
    beforeEach ->
      clock = sinon.useFakeTimers()
      b._elements = {}
    afterEach ->
      clock.restore()

    it 'update position out of space for destroyers', ->
      id = b.add({'object': 'benja', 'pos': [1, 1], vel: [0, -10], 'destroy': 1})
      b._updateView(0.2)
      assert.equal(null, b.get(id))
      id = b.add({'object': 'benja', 'pos': [1, 1], vel: [-10, 0], 'destroy': 1})
      b._updateView(0.2)
      assert.equal(null, b.get(id))
      id = b.add({'object': 'benja', 'pos': [408, 1], vel: [0, 10],  'destroy': 1})
      b._updateView(0.2)
      assert.equal(null, b.get(id))
      id = b.add({'object': 'benja', 'pos': [1, 408], vel: [10, 0],  'destroy': 1})
      b._updateView(0.2)
      assert.equal(null, b.get(id))

    it 'collides bullet', ->
      spy = sinon.spy(b, 'destroy')
      bullet = b.add({'object': 'bullet', 'angle': 0, 'pos': [10, 10], 'destroy': 1})
      user = b.add({'object': 'user', 'angle': Math.PI / 2, 'pos': [20, 10]})
      b._updateView(0.1)
      assert.equal(bullet, b.get(bullet).id)
      b._updateView(0.2)
      assert.equal(null, b.get(bullet))
      assert.equal(null, b.get(user))
      assert(spy.withArgs(user, 'destroy').calledOnce)
      assert(spy.withArgs(bullet, 'destroy').calledOnce)

    it 'collides self bullet', ->
      spy = sinon.spy(b, 'destroy')
      user = b.add({'object': 'user', 'angle': Math.PI / 2, 'pos': [20, 10]})
      bullet = b.add({'object': 'bullet', 'angle': 0, 'pos': [10, 10], 'destroy': 1, 'params': {'owner': user}})
      b._updateView(0.3)
      assert.equal(0, spy.callCount)

    it 'collides bullet with hitpoints', ->
      spy = sinon.spy(b, 'update')
      bullet = b.add({'object': 'bullet', 'angle': 0, 'pos': [10, 10], 'destroy': 1})
      user = b.add({'object': 'user', 'angle': Math.PI / 2, 'pos': [20, 10], 'hitpoints': 2})
      b._updateView(0.3)
      assert.equal(null, b.get(bullet))
      assert.equal(1, b.get(user).hitpoints)
      assert.equal(1, spy.callCount)
      assert.equal(user, spy.getCall(0).args[0].id)
      assert.equal(1, spy.getCall(0).args[0].hitpoints)

    it 'collides bullet with 2 elements', ->
      spy = sinon.spy(b, 'destroy')
      bullet = b.add({'object': 'bullet', 'speed': 10, 'angle': 0, 'pos': [10, 10], 'destroy': 1})
      b.add({'object': 'user', angle: Math.PI / 2, 'pos': [20, 10]})
      b.add({'object': 'user', 'angle': Math.PI / 2, 'pos': [20, 10]})
      b._updateView(0.3)
      assert.equal(3, spy.callCount)
      assert(spy.withArgs(bullet, 'destroy').calledOnce)


  describe 'control', ->
    user_id = 10
    id = null
    spy_update = null
    spy_add = null
    beforeEach ->
      id = b.add_user(user_id, {'pos': [2, 3], 'angle': 90})
      spy_update = sinon.spy(b, 'update')
      spy_add = sinon.spy(b, 'add')

    it 'turn up', ->
      b.user_action(user_id, 'up')
      assert.equal(id, spy_update.getCall(0).args[0].id)
      assert.deepEqual(['up'], spy_update.getCall(0).args[0].moving)

    it 'turn up twice', ->
      b.user_action(user_id, 'up')
      b.user_action(user_id, 'up')
      assert.equal(id, spy_update.getCall(0).args[0].id)
      assert.deepEqual(['up'], spy_update.getCall(0).args[0].moving)

    it 'turn up stop', ->
      b.user_action(user_id, 'up')
      b.user_action(user_id, 'up', false)
      assert.equal(id, spy_update.getCall(1).args[0].id)
      assert.deepEqual([], spy_update.getCall(1).args[0].moving)

    it 'turn down (after up)', ->
      b.user_action(user_id, 'up')
      b.user_action(user_id, 'down')
      assert.equal(id, spy_update.getCall(1).args[0].id)
      assert.deepEqual(['up', 'down'], spy_update.getCall(1).args[0].moving)

    it 'turn down stop (after up)', ->
      b.user_action(user_id, 'up')
      b.user_action(user_id, 'down')
      b.user_action(user_id, 'down', false)
      assert.equal(id, spy_update.getCall(2).args[0].id)
      assert.deepEqual(['up'], spy_update.getCall(2).args[0].moving)
