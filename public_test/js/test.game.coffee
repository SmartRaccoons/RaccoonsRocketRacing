

class GameCore extends window.GameCore
  __requestAnimFrame: (callback)-> window.setTimeout(callback, 1000 / 40)



describe 'GameCore', ->
  b = null
  beforeEach ->
    b = new GameCore()

  afterEach ->
    b = null


  describe 'get', ->
    it 'id', ->
      b.add({'id': 1, 'name': 'ben'})
      b.add({'id': 2, 'name': 'ban'})
      assert.equal(b.get(1).name, 'ben')
      assert.equal(b.get(2).name, 'ban')

    it 'params', ->
      b.add({'id': 1, 'name': 'ben'})
      b.add({'id': 2, 'name': 'ban'})
      b.add({'id': 3, 'name': 'ban', 's': 't'})
      assert.equal(b.get({'id': 1})[0].name, 'ben')
      assert.equal(b.get({'name': 'ban'})[0].name, 'ban')
      assert.equal(b.get({'name': 'ban', 's': 't'})[0].s, 't')
      assert.deepEqual(b.get({'name': 'ban', 's': 'z'}), [])


  describe 'add', ->
    it 'to elements', ->
      b.add({'id': 2, 'speed': 4})
      assert.equal(b.get(2).speed, 4)


  describe 'update', ->
    beforeEach ->
     b.add({'id': 1, 'object': 'benja'})

    it 'elements', ->
      b.update({'id': 1, 'pos': [10, 11], 'speed': 11})
      assert.deepEqual(b.get(1).pos, [10, 11])
      assert.equal(b.get(1).speed, 11)


  describe 'destroy', ->
    id = 2
    beforeEach ->
      b.add({'object': 'benja', 'id': id})

    it 'from elements', ->
      b.destroy({'id': id})
      assert(!b.get(id))

    it 'restart', ->
      b.restart()
      assert(!b.get(id))

  describe 'position', ->
    id = 2
    beforeEach ->
      b.add({'object': 'benja', 'id': id, pos: [0, 0], vel: [1, 1], angle: 0, wheel: 10, moving: []})
      sinon.spy(b.vector, 'multiply')
      sinon.spy(b.vector, 'accelerate')

    afterEach ->
      b.vector.multiply.restore()
      b.vector.accelerate.restore()

    it 'update element', ->
      b._update_element_angle = sinon.spy()
      b._update_element_velocity = sinon.spy()
      b._update_element_position = sinon.spy()
      b._update_element(b.get(id), 1, true)
      assert.equal(1, b._update_element_angle.callCount)
      assert.equal(id, b._update_element_angle.getCall(0).args[0].id)
      assert.equal(1, b._update_element_angle.getCall(0).args[1])
      assert.equal(true, b._update_element_angle.getCall(0).args[2])
      assert.equal(1, b._update_element_velocity.callCount)
      assert.equal(id, b._update_element_velocity.getCall(0).args[0].id)
      assert.equal(1, b._update_element_velocity.getCall(0).args[1])
      assert.equal(true, b._update_element_velocity.getCall(0).args[2])
      assert.equal(1, b._update_element_position.callCount)
      assert.equal(id, b._update_element_position.getCall(0).args[0].id)
      assert.equal(1, b._update_element_position.getCall(0).args[1])
      assert.equal(true, b._update_element_position.getCall(0).args[2])

    it 'update angle right', ->
      b.get(id).moving = ['right']
      b._update_element_angle(b.get(id), 1)
      assert.equal(b.get(id).angle, -10)
      assert.equal(b.get(id).angle_last, 0)

    it 'update angle right recalculate', ->
      b.get(id).moving = ['right']
      b.get(id).angle_last = -10
      b._update_element_angle(b.get(id), 1, true)
      assert.equal(b.get(id).angle, -20)
      assert.equal(b.get(id).angle_last, -10)

    it 'update angle left', ->
      b.get(id).moving = ['left']
      b._update_element_angle(b.get(id), 1)
      assert.equal(b.get(id).angle, 10)

    it 'update velocity (up)', ->
      b.get(id).speed = 20
      b.get(id).accelerator = 10
      b.get(id).moving = ['up']
      b._update_element_velocity(b.get(id), 1)
      assert.deepEqual(b.get(id).vel, [11, 1])
      assert.deepEqual(b.get(id).vel_last, [1, 1])
      assert.equal(1, b.vector.accelerate.callCount)
      assert.deepEqual([[1, 1], 10, 0, 20], b.vector.accelerate.getCall(0).args)

    it 'update velocity (up) recalculate', ->
      b.get(id).speed = 20
      b.get(id).accelerator = 10
      b.get(id).moving = ['up']
      b.get(id).vel_last = [2, 2]
      b._update_element_velocity(b.get(id), 1, true)
      assert.deepEqual(b.get(id).vel, [12, 2])
      assert.deepEqual(b.get(id).vel_last, [2, 2])

    it 'update velocity decrease velocity', ->
      b.get(id).rub = 0.9
      b._update_element_velocity(b.get(id), 2)
      assert.deepEqual(b.get(id).vel, [0.81, 0.81])
      assert.equal(1, b.vector.multiply.callCount)
      assert.deepEqual([[1, 1], 0.81], b.vector.multiply.getCall(0).args)

    it 'update velocity decrease velocity [0, 0]', ->
      b.get(id).vel = [0, 0]
      b.get(id).rub = 0.9
      b._update_element_velocity(b.get(id), 2)
      assert.equal(0, b.vector.multiply.callCount)

    it 'update velocity accelerate + decrease', ->
      b.get(id).accelerator = 10
      b.get(id).moving = ['up']
      b.get(id).rub = 0.9
      b._update_element_velocity(b.get(id), 1)
      assert.equal(0, b.vector.multiply.callCount)

    it 'update position', ->
      b._update_element_position(b.get(id), 2)
      assert.deepEqual(b.get(id).pos, [2, 2])
      b._update_element_position(b.get(id), 0.5)
      assert.deepEqual(b.get(id).pos, [2.5, 2.5])
      assert.deepEqual(b.get(id).pos_last, [2, 2])

    it 'udate position recalculate', ->
      b.get(id).pos_last = [2, 2]
      b._update_element_position(b.get(id), 1, true)
      assert.deepEqual(b.get(id).pos, [3, 3])
      assert.deepEqual(b.get(id).pos_last, [2, 2])

    it 'update position no velocity', ->
      b.get(id).vel = [0, 0]
      b._update_element_position(b.get(id), 2)
      assert.equal(0, b.vector.multiply.callCount)


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
      assert.equal(b._updateView.callCount, 0)
      b.start()
      clock.tick(24)
      assert.equal(b._updateView.callCount, 0)
      clock.tick(25)
      assert.equal(b._updateView.callCount, 1)
      assert.equal(b._updateView.getCall(0).args[0], 25)
      clock.tick(100)
      assert.equal(b._updateView.callCount, 5)

    it 'update position', ->
      b.add({'id': 1, 'object': 'benja', 'pos': [0, 0], 'vel': [1, 1]})
      b._update_element = spy = sinon.spy()
      b._updateView(2)
      assert.equal(1, spy.callCount)
      assert.equal(1, spy.getCall(0).args[0].id)
      assert.equal(2, spy.getCall(0).args[1])

    it 'update velocity (no moving)', ->
      b.add({'id': 1, 'object': 'benja', 'pos': [0, 0], 'vel': [0, 0]})
      b._elements[1].accelerator = 10
      b._elements[1].moving = []
      b._updateView(1)
      assert.deepEqual(b.get(1).vel, [0, 0])

    it 'stop', ->
      b._updateView = sinon.spy()
      b.start()
      clock.tick(25)
      b.stop()
      assert.equal(b._updateView.callCount, 1)
      clock.tick(100)
      assert.equal(b._updateView.callCount, 1)
      b.start()
      clock.tick(25)
      assert.equal(b._updateView.callCount, 2)


  describe 'collide check', ->
    user_data = null
    bullet_data = null
    beforeEach ->
      user_data = {id: 1, 'object': 'user', 'speed': 10, 'angle': 0, vel: [0, 0], 'pos': [10, 10], 'destroy': 1, speed: 8}
      bullet_data = {id: 2, 'object': 'bullet', angle: Math.PI / 2, vel: [0, 0], 'pos': [20, 10]}

    it 'match', ->
      sinon.stub(b, '_collides_ob', -> true)
      b.collide = sinon.spy()
      bullet = b.add(user_data)
      b.add(bullet_data)
      b._updateView(0.3)
      assert(b._collides_ob.callCount > 0)
      assert.equal(b._collides_ob.getCall(0).args[0].id, 1)
      assert.equal(b._collides_ob.getCall(0).args[1].id, 2)
      assert.equal(b.collide.callCount, 1)
      assert.equal(b.collide.getCall(0).args[0].id, 1)
      assert.equal(b.collide.getCall(0).args[1].id, 2)
      assert.equal(b.collide.getCall(0).args[2], 0.3)

    it 'is not match', ->
      sinon.stub(b, '_collides_ob', -> false)
      b.collide = sinon.spy()
      bullet = b.add(user_data)
      b.add(bullet_data)
      b._updateView(0.3)
      assert(b._collides_ob.callCount > 0)
      assert.equal(b.collide.callCount, 0)

    it 'with 0 speed', ->
      sinon.stub(b, '_collides_ob', -> true)
      b.collide = sinon.spy()
      user_data.speed = 0
      bullet = b.add(user_data)
      b.add(bullet_data)
      b._updateView(0.3)
      assert.equal(b._collides_ob.callCount, 0)


  describe 'collide', ->
    user_data = null
    wall_data = null
    beforeEach ->
      user_data = {id: 1, 'object': 'user', pos: [2, 2], vel: [0, 0]}
      wall_data = {id: 2, 'object': 'wall'}
      b.add(user_data)
      b.add(wall_data)
      sinon.stub(b, '_collide_circle_unmovable', -> [1, 2])
      sinon.stub(b, '_update_element_position')

    afterEach ->
      b._collide_circle_unmovable.restore()
      b._update_element_position.restore()

    it 'call', ->
      b.collide_user_to_ob = sinon.spy()
      b.collide({id: 1, 'object': 'user'}, {id: 2, 'object': 'ob'}, 0.2)
      assert.equal(1, b.collide_user_to_ob.callCount)
      assert.equal(1, b.collide_user_to_ob.getCall(0).args[0].id)
      assert.equal(2, b.collide_user_to_ob.getCall(0).args[1].id)
      assert.equal(0.2, b.collide_user_to_ob.getCall(0).args[2])

    it 'call undefined', ->
      assert.doesNotThrow ->
        b.collide({'object': 'user'}, {'object': 'ob'})
      , TypeError

    it 'user to wall', ->
      b.collide_user_to_wall(user_data, wall_data, 0.1)
      assert.equal(1, b._collide_circle_unmovable.callCount)
      assert.equal(1, b._collide_circle_unmovable.getCall(0).args[0].id)
      assert.equal(2, b._collide_circle_unmovable.getCall(0).args[1].id)
      assert.deepEqual([1, 2], user_data.vel)
      assert.equal(1, b._update_element_position.callCount)
      assert.equal(1, b._update_element_position.getCall(0).args[0].id)
      assert.equal(0.1, b._update_element_position.getCall(0).args[1])
      assert.equal(true, b._update_element_position.getCall(0).args[2])


  describe 'collides helpers', ->
    it 'box top', ->
      assert(!b._collides_box(2, 0, 8, 9,
        0, 10, 10, 20))
      assert(!b._collides_box(2, 0, 8, 10,
        0, 10, 10, 20))
      assert(b._collides_box(2, 0, 8, 11,
        0, 10, 10, 20))
    it 'box bottom', ->
      assert(!b._collides_box(2, 21, 8, 22,
        0, 10, 10, 20))
      assert(!b._collides_box(2, 20, 8, 22,
        0, 10, 10, 20))
      assert(b._collides_box(2, 19, 8, 22,
        0, 10, 10, 20))
    it 'box left', ->
      assert(!b._collides_box(0, 2, 9, 8,
        10, 0, 20, 10))
      assert(!b._collides_box(0, 2, 10, 8,
        10, 0, 20, 10))
      assert(b._collides_box(0, 2, 11, 8,
        10, 0, 20, 10))
    it 'box right', ->
      assert(!b._collides_box(21, 2, 30, 8,
        10, 0, 20, 10))
      assert(!b._collides_box(20, 2, 30, 8,
        10, 0, 20, 10))
      assert(b._collides_box(19, 2, 30, 8,
        10, 0, 20, 10))

    it 'circle line', ->
      assert(b._collides_circle(0, 0, 5, 0, 6, 1))

    it 'circle in', ->
      assert(b._collides_circle(0, 0, 5, 0, 5, 1))

    it 'circle out', ->
      assert(!b._collides_circle(0, 0, 5, 0, 7, 1))

    it 'shortcut', ->
      spy = sinon.stub(b, '_collides_box', -> false)
      b._collides_circle = sinon.spy()
      b._collides_ob({pos: [1, 2], radius: 4}, {pos: [5, 6], radius: 10})
      assert.equal(1, spy.callCount)
      assert.deepEqual([-3, -2, 5, 6, -5, -4, 15, 16], spy.getCall(0).args)
      assert.equal(0, b._collides_circle.callCount)

    it 'shortcut for circle', ->
      spy = sinon.stub(b, '_collides_box', -> true)
      b._collides_circle = sinon.spy()
      b._collides_ob({pos: [1, 2], radius: 4}, {pos: [5, 6], radius: 10})
      assert.equal(1, b._collides_circle.callCount)
      assert.deepEqual([1, 2, 4, 5, 6, 10], b._collides_circle.getCall(0).args)


  describe 'collides circle to unmoveable circle', ->
    o1 = null
    o2 = null
    beforeEach ->
      o1 = b.add({id: 1, pos: [0, 0]})
      o2 = b.add({id: 2, pos: [5, 5]})

    it 'direct x', ->
      o1.pos = [0, 5]
      o1.vel = [1, 0]
      assert.deepEqual([-1, 0], b._collide_circle_unmovable(o1, o2))

    it 'reverse direct x', ->
      o1.pos = [10, 5]
      o1.vel = [-1, 0]
      assert.deepEqual([1, 0], b._collide_circle_unmovable(o1, o2))

    it 'direct 45', ->
      o1.pos = [0, 0]
      o1.vel = [1, 0]
      assert.equal(0, b._collide_circle_unmovable(o1, o2)[0])
      assert(-1 < b._collide_circle_unmovable(o1, o2)[1] <= -0.9)

    it 'reverse direct 45', ->
      o1.pos = [10, 0]
      o1.vel = [-1, 0]
      assert.equal(0, b._collide_circle_unmovable(o1, o2)[0])
      assert(-1 < b._collide_circle_unmovable(o1, o2)[1] <= -0.9)

    it 'direct 135', ->
      o1.pos = [0, 10]
      o1.vel = [1, 0]
      assert.equal(0, b._collide_circle_unmovable(o1, o2)[0])
      assert(0.9 < b._collide_circle_unmovable(o1, o2)[1] <= 1)

    it 'reverse direct 135', ->
      o1.pos = [10, 10]
      o1.vel = [-1, 0]
      assert.equal(0, b._collide_circle_unmovable(o1, o2)[0])
      assert(0.9 < b._collide_circle_unmovable(o1, o2)[1] <= 1)

