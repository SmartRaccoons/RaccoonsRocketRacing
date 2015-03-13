

class BcoCore extends window.BcoCore
  __requestAnimFrame: (callback)-> window.setTimeout(callback, 1000 / 40)




describe 'BcoCore', ->
  b = null
  beforeEach ->
    b = new BcoCore()

  afterEach ->
    b = null


  describe 'init', ->
    it 'size', ->
      b = new BcoCore()
      assert.deepEqual(b.size, [416, 416])

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

    it 'add/get user', ->
      id = 5
      b.add_user('ser', {'id': id, 'pos': [1, 2]})
      assert.equal('user', b.get(id).object)
      assert.deepEqual([1, 2], b.get(id).pos)
      assert.equal('ser', b.get(id).params.user_id)
      assert.equal(id, b.get_user('ser').id)

    it 'get unknown user', ->
      assert.equal(null, b.get_user('random'))


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


  describe.skip 'control', ->
    id = 5
    beforeEach ->
      b.add({'object': 'tank', id: 'r', 'tank_id': id})

#    it 'fire', ->
#      spy = sinon.spy()
#      b.on 'add', spy
#      b.tank_start(socket_id, 'fire')
#      assert.equal('bullet', spy.getCall(0).args[0].object)
#      assert.equal(id, spy.getCall(0).args[0].params.owner)
#      assert.deepEqual([14, 15], spy.getCall(0).args[0].pos)
#      assert.deepEqual(90, spy.getCall(0).args[0].angle)
#      assert.deepEqual(200, spy.getCall(0).args[0].speed)
#      assert.deepEqual(1, spy.getCall(0).args[0].destroy)

    it 'move', ->
      spy = sinon.spy()
      b.on 'update', spy
      b.tank_start(socket_id, 'up')
      assert.equal(id, spy.getCall(0).args[0].id)
      assert.equal(270, spy.getCall(0).args[0].angle)
      assert.equal(100, spy.getCall(0).args[0].speed)

    it 'move down', ->
      spy = sinon.spy()
      b.on 'update', spy
      b.tank_start(socket_id, 'down')
      assert.equal(90, spy.getCall(0).args[0].angle)

    it 'move left', ->
      spy = sinon.spy()
      b.on 'update', spy
      b.tank_start(socket_id, 'left')
      assert.equal(180, spy.getCall(0).args[0].angle)

    it 'move right', ->
      spy = sinon.spy()
      b.on 'update', spy
      b.tank_start(socket_id, 'right')
      assert.equal(0, spy.getCall(0).args[0].angle)

    it 'move round coors', ->
      spy = sinon.spy()
      b.on 'update', spy
      b.get_tank(socket_id).pos = [7, 8]
      b.get_tank(socket_id).angle = 0
      b.tank_start(socket_id, 'right')
      assert(!spy.getCall(0).args[0].pos)
      b.tank_start(socket_id, 'up')
      assert.deepEqual([0, 16], spy.getCall(1).args[0].pos)
      b._elements[id].pos = [24, 23]
      b.tank_start(socket_id, 'left')
      assert.deepEqual([32, 16], spy.getCall(2).args[0].pos)

    it 'move stop', ->
      spy = sinon.spy()
      b.tank_start(socket_id, 'up')
      b.on 'update', spy
      b.tank_stop(socket_id, 'up')
      assert.equal(0, spy.getCall(0).args[0].speed)

    it 'move with more keystokes', ->
      spy = sinon.spy()
      b.on 'update', spy
      b.tank_start(socket_id, 'down')
      b.tank_start(socket_id, 'left')
      b.tank_start(socket_id, 'up')
      b.tank_stop(socket_id, 'up')
      assert.equal(4, spy.callCount)
      assert.equal(180, spy.getCall(3).args[0].angle)
      assert.equal(100, spy.getCall(3).args[0].speed)
      b.tank_stop(socket_id, 'down')
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
      assert.equal(b._updateView.getCall(0).args[0], 0.025)
      clock.tick(100)
      assert.equal(b._updateView.callCount, 5)

    it 'update position', ->
      b.add({'id': 1, 'object': 'benja', 'speed': 10, 'angle': 0, 'pos': [0, 0], 'stuck': 1})
      b._updateView(1)
      assert.deepEqual(b.get(1).pos, [10, 0])
      b._updateView(0.5)
      assert.deepEqual(b.get(1).pos, [15, 0])
      b.update({'id': 1, 'angle': 90, 'pos': [0, 0]})
      b._updateView(0.5)
      assert.deepEqual(b.get(1).pos, [0, 5])
      b.update({'id': 1, 'angle': 45, 'pos': [0, 0]})
      b._updateView(1)
      assert.deepEqual(b.get(1).pos, [7.07, 7.07])

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


  describe 'stop out of box', ->
    beforeEach ->
      b._elements = {}
      b.add({'id': 1, 'object': 'tank', 'speed': 10, 'destroy': 0, 'angle': 0, 'size': [32, 32], 'pos': [0, 0]})
      b.add({'id': 5, 'object': 'brick', 'speed': 0, 'destroy': 0, 'angle': 0, 'pos': [100, 100], 'size': [16, 16]})

    it 'left', ->
      b.get(1).angle = 180
      b.get(1).pos = [1, 0]
      b._updateView(1)
      assert.deepEqual(b.get(1).pos, [0, 0])

    it 'right', ->
      b.get(1).pos = [b.size[0]-b.get(1).size[0]-1, 0]
      b._updateView(1)
      expect(b.get(1).pos, [b.size[0]-b.get(1).size[0], 0])

    it 'up', ->
      b.get(1).angle = 270
      b.get(1).pos = [0, 1]
      b._updateView(1)
      assert.deepEqual(b.get(1).pos, [0, 0])

    it 'down', ->
      b.get(1).angle = 90
      b.get(1).pos = [0, b.size[1]-b.get(1).size[1]-1]
      b._updateView(1)
      assert.deepEqual(b.get(1).pos, [0, b.size[1]-b.get(1).size[1]])

    it 'destroy param', ->
      b.get(1).destroy = 1
      b.get(1).angle = 180
      b.get(1).pos = [1, 0]
      b._updateView(1)
      assert.deepEqual(b.get(1).pos, [-9, 0])


  describe 'stop on collides', ->
    clock = null
    object = 5
    beforeEach ->
      clock = sinon.useFakeTimers()
      b._elements = {}
      b.add({'id': 1, 'object': 'tank', 'speed': 10, 'destroy': 0, 'angle': 0, 'size': [32, 32], 'pos': [0, 0]})
      b.add({'id': 5, 'object': 'brick', 'speed': 0, 'destroy': 0, 'angle': 0, 'pos': [100, 100], 'size': [16, 16]})
    afterEach ->
      clock.restore()

    it 'over elements', ->
      b.add({'id': 2, 'object': 'brick', 'speed': 0, 'destroy': 0, 'angle': 0, 'size': [16, 16], 'pos': [34, 0]})
      b._updateView(0.1)
      assert.deepEqual(b.get(1).pos, [1, 0])
      b._updateView(0.4)
      assert.deepEqual(b.get(1).pos, [2, 0])

    it 'destroy param', ->
      b.get(1).pos = [0, 0]
      b.add({'id': 3, 'object': 'bullet', 'speed': 20, 'angle': 0, 'size': [8, 8], 'pos': [0, 0], 'destroy': 1})
      b._updateView(0.2)
      assert.deepEqual(b.get(1).pos, [2, 0])
      assert.deepEqual(b.get(3).pos, [4, 0])

    it 'over element from left', ->
      b.get(object).pos = [34, 0]
      b.get(1).pos = [0, 1]
      b._updateView(1)
      assert.deepEqual(b.get(1).pos, [2, 1])

    it 'over element from right', ->
      b.get(1).angle = 180
      b.get(1).pos = [17, 1]
      b.get(object).pos = [0, 0]
      b._updateView(1)
      assert.deepEqual(b.get(1).pos, [16, 1])

    it 'over element from top', ->
      b.get(1).angle = 90
      b.get(object).pos = [0, 34]
      b._updateView(1)
      assert.deepEqual(b.get(1).pos, [0, 2])

    it 'over element from bottom', ->
      b.get(1).angle = 270
      b.get(1).pos = [0, 17]
      b.get(object).pos = [0, 0]
      b._updateView(1)
      assert.deepEqual(b.get(1).pos, [0, 16])


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
      
      
#describe 'Bco', ->
#  b = null
#  beforeEach ->
#    b = new Bco()
#    b.render()
#    b.$el.appendTo('body')
#  afterEach ->
#    b.remove()
#
#  describe 'init', ->
#    it 'canvas', ->
#      expect(b.$('canvas').width()).to.be(416)
#      expect(b.$('canvas').height()).to.be(416)
#
#  describe 'objects', ->
#
#    it 'tank', ->
#      b.add({'id': 2, 'object': 'tank'})
#      expect(b.get(2).sprite).to.be.ok()
#      expect(b.get(2).sprite.size).to.be.eql([32,32])
#
#    it 'bullet', ->
#      b.add({'id': 2, 'object': 'bullet'})
#      expect(b.get(2).sprite).to.be.ok()
#      expect(b.get(2).sprite.size).to.be.eql([8,8])
#
#    it 'brick', ->
#      b.add({'id': 3, 'object': 'brick'})
#      expect(b.get(3).sprite._name).to.be('brick')
#
#    it 'base', ->
#      b.add({'id': 2, 'object': 'base'})
#      expect(b.get(2).sprite._name).to.be('base')
#      expect(b.get(2).sprite.size).to.be.eql([32, 32])
#
#
#  describe 'updateView', ->
#    beforeEach ->
#      b.draw = sinon.spy()
#
#    afterEach ->
#      b.draw = null
#
#    it 'update', ->
#      b.add({'id': 2, 'object': 'tank', 'pos': [0, 0]})
#      b.get(2).sprite.update = sinon.spy()
#      b._updateView(1)
#      expect(b.get(2).sprite.update.getCall(0).args[0]).to.be(1)
#
#    it 'draw', ->
#      b._updateView(1)
#      expect(b.draw.callCount).to.be(1)
#
#  describe 'draw', ->
#    beforeEach ->
#      b.c = {'id': 'ben', 'fillRect': sinon.spy(), 'save': sinon.spy(), 'restore': sinon.spy(), 'translate': sinon.spy(), 'rotate': sinon.spy()}
#
#    afterEach ->
#      b.c = {}
#
#    it 'fillRect', ->
#      b.draw()
#      expect(b.c.fillRect.getCall(0).args).to.be.eql([0, 0, 416, 416])
#
#    it 'position', ->
#      b.add({'id': 1, 'object': 'tank', 'pos': [10, 10], 'size': [20, 20]})
#      b.add({'id': 2, 'object': 'bullet', 'pos': [10, 10], 'size': [30, 30]})
#      b.draw()
#      expect(b.c.save.callCount).to.be(2)
#      expect(b.c.restore.callCount).to.be(2)
#      expect(b.c.translate.getCall(0).args[0]).to.be(20)
#      expect(b.c.translate.getCall(0).args[1]).to.be(20)
#      expect(b.c.translate.getCall(2).args[0]).to.be(25)
#      expect(b.c.translate.getCall(2).args[1]).to.be(25)
#      expect(b.c.translate.getCall(1).args[0]).to.be(-10)
#      expect(b.c.translate.getCall(1).args[1]).to.be(-10)
#      expect(b.c.translate.getCall(3).args[0]).to.be(-15)
#      expect(b.c.translate.getCall(3).args[1]).to.be(-15)
#
#    it 'angle', ->
#      b.add({'id': 1, 'object': 'tank', 'pos': [10, 10], 'size': [20, 20], 'angle': 90})
#      b.add({'id': 2, 'object': 'bullet', 'pos': [10, 10], 'size': [30, 30], 'angle': 0})
#      b.draw()
#      expect((b.c.rotate.getCall(0).args[0]-1.57)<0.01).to.be.ok()
#      expect(b.c.rotate.getCall(1).args[0]).to.be(0)
#
#    it 'sprite render', ->
#      b.add({'id': 1, 'object': 'tank', 'pos': [10, 10], 'size': [20, 20], 'angle': 90})
#      b.get(1).sprite.render = sinon.spy()
#      b.draw()
#      expect(b.get(1).sprite.render.getCall(0).args[0].id).to.be('ben')




