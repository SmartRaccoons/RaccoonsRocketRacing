assert = require('assert')
sinon = require('sinon')
events = require('events')
nock = require('nock')
extend = require('util')._extend

assert.double = (check, v)->
  assert(v - 0.01 < check < v + 0.01)


Game = require('../server').Game


describe 'Game', ->
  b = null
  beforeEach ->
    b = new Game([
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ])

  afterEach ->


  describe 'load map', ->
    it 'walls', ->
      b = new Game([[0, 0, 1], [1, 0, 0]])
      assert.deepEqual([32, 0], b.get(1).pos)
      assert.equal('wall', b.get(1).object)
      assert.deepEqual([0, 16], b.get(2).pos)

    it 'size', ->
      b = new Game([[0, 0, 0], [0, 0, 0]])
      assert.deepEqual([48, 32], b.size)


  describe 'add', ->

    it 'default params', ->
      id = b.add({'object': 'benja'})
      assert.equal(1, b.get(id).id)
      assert.equal('benja', b.get(id).object)
      assert.deepEqual({}, b.get(id).params)
      assert.deepEqual([0, 0], b.get(id).pos)
      assert.deepEqual([0, 0], b.get(id).vel)
      assert.deepEqual([16, 16], b.get(id).size)
      assert.equal(8, b.get(id).radius)
      assert.equal(0, b.get(id).angle)
      assert.equal(0, b.get(id).destroy)
      assert.equal(1, b.get(id).hitpoints)
      id = b.add({'object': 'benja2', 'params': {'1': 1}, 'pos': [1, 2], 'angle': 3, 'destroy': 1, 'hitpoints': 10})
      assert.equal(2, b.get(id).id)
      assert.equal('benja2', b.get(id).object)
      assert.deepEqual({'1': 1}, b.get(id).params)
      assert.deepEqual([1, 2], b.get(id).pos)
      assert.deepEqual([16, 16], b.get(id).size)
      assert.equal(3, b.get(id).angle)
      assert.equal(10, b.get(id).hitpoints)

    it 'auto id', ->
      assert.equal(b._id, 0)
      b.add({'object': 'user'})
      assert.equal(b._id, 1)

    it 'user', ->
      id = b.add_user('ser', {pos: [1, 2]})
      assert.equal('user', b.get(id).object)
      assert.deepEqual([8, 8], b.get(id).size)
      assert.equal(b.get(id).speed, 0.12)
      assert.equal(b.get(id).wheel, 0.002)
      assert.equal(b.get(id).accelerator, 0.0001)
      assert.equal(b.get(id).fire_rate, 1000)
      assert.equal(b.get(id).fire_last, 0)
      assert.equal(b.get(id).rub, 0.9999)
      assert.deepEqual(b.get(id).moving, [])
      assert.deepEqual([1, 2], b.get(id).pos)
      assert.equal(4, b.get(id).radius)
      assert.equal('ser', b.get(id).params.user_id)

    it 'get user', ->
      id = b.add_user('ser')
      assert.equal(id, b.get_user('ser').id)

    it 'get unknown user', ->
      assert.equal(null, b.get_user('random'))

    it 'user bullet', ->
      user_id = b.add_user('1', {pos: [1, 2]})
      id = b.add_bullet(b.get(user_id))
      assert.equal(b.get(id).object, 'bullet')
      assert.equal(b.get(id).destroy, 1)
      assert.equal(b.get(id).speed, 0.3)
      assert.equal(b.get(id).radius, 4)
      assert.equal(b.get(id).angle, 0)
      assert.deepEqual(b.get(id).size, [8,  8])
      assert.deepEqual(b.get(id).vel, [0.3, 0])
      assert.equal(b.get(id).params.owner, user_id)
      assert.deepEqual(b.get(id).pos, [1, 2])

    it 'user bullet velocity (45 angle)', ->
      user_id = b.add_user('1', {pos: [1, 2], angle: Math.PI / 4})
      id = b.add_bullet(b.get(user_id))
      assert.double(b.get(id).speed * 0.70, b.get(id).vel[0])
      assert.double(b.get(id).speed * 0.70, b.get(id).vel[1])

    it 'wall', ->
      id = b.add_wall({pos: [1, 2]})
      assert.equal(b.get(id).object, 'wall')
      assert.equal(b.get(id).hitpoints, 2)
      assert.deepEqual(b.get(id).pos, [1, 2])

    it 'event', ->
      spy = sinon.spy()
      b.on 'add', spy
      id = b.add({'object': 'benja'})
      assert.equal(1, spy.getCall(0).args[0].id)
      assert.equal('benja', spy.getCall(0).args[0].object)


  describe 'restart', ->
    it 'same map', ->
      b = new Game([[0, 1], [0, 1]])
      b.destroy(1)
      assert.equal(1, b.get({}).length)
      b.restart()
      assert.equal(2, b.get({}).length)

    it 'event', ->
      b = new Game()
      spy = sinon.spy()
      b.on 'restart', spy
      b.restart()
      assert.equal(1, spy.callCount)

    it 'users', ->
      b = new Game([[0, 1], [0, 1]])
      b.add_user('ben')
      b.restart()
      assert.notEqual(null, b.get_user('ben'))

    it 'users coors', ->
      b = new Game()
      b.add_user('ben', {'pos': [1, 2], 'speed': 10})
      b._updateView(1)
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

    it 'launch rocket', ->
      clock.tick(100000)
      id = b.add_user('ben')
      b.user_action('ben', 'fire')
      spy = sinon.spy(b, 'add_bullet')
      b._updateView(1)
      assert.equal(1, spy.callCount)
      assert.equal(id, spy.getCall(0).args[0].id)

    it 'launch rocket timeout', ->
      clock.tick(100000)
      id = b.add_user('ben')
      b.user_action('ben', 'fire')
      spy = sinon.spy(b, 'add_bullet')
      b._updateView(1)
      b._updateView(1)
      assert.equal(1, spy.callCount)
      clock.tick(100000)
      b._updateView(1)
      assert.equal(2, spy.callCount)


  describe 'collide', ->
    bullet_data = null
    user_data = null
    beforeEach ->
      bullet_data = {'object': 'bullet', 'angle': 0, 'pos': [10, 10], 'destroy': 1, speed: 8}
      user_data = {'object': 'user', 'angle': Math.PI / 2, 'pos': [20, 10]}

    it 'bullet', ->
      user_data.hitpoints = 10
      bullet = b.add(bullet_data)
      user = b.add(user_data)
      b.collide(b.get(bullet), b.get(user))
      assert.equal(9, b.get(user).hitpoints)

    it 'bullet destroy', ->
      bullet = b.add(bullet_data)
      user = b.add(user_data)
      b.collide(b.get(bullet), b.get(user))
      assert.equal(null, b.get(bullet))

    it 'destroy hitpoints 0', ->
      bullet = b.add(bullet_data)
      user = b.add(user_data)
      b.update = sinon.spy()
      b.collide(b.get(bullet), b.get(user))
      assert.equal(null, b.get(user))
      assert.equal(0, b.update.callCount)

    it 'owner', ->
      b.update = sinon.spy()
      user = b.add(user_data)
      bullet_data['params'] = {'owner': user}
      bullet = b.add(bullet_data)
      b.collide(b.get(bullet), b.get(user))
      assert.equal(1, b.get(user).hitpoints)

    it 'destroy zero', ->
      b.update = sinon.spy()
      bullet_data.destroy = 0
      bullet = b.add(bullet_data)
      user = b.add(user_data)
      b.collide(b.get(bullet), b.get(user))
      assert.equal(1, b.get(user).hitpoints)
      assert.equal(0, b.update.callCount)


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
