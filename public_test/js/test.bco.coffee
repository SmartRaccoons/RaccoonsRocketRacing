

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
      expect(b.size).to.be.eql([416, 416])


  describe 'add', ->
    it 'to elements', ->
      b.add({'id': 2, 'speed': 4})
      expect(b.get(2).speed).to.be(4)


  describe 'update', ->
    beforeEach ->
     b.add({'id': 1, 'object': 'benja'})

    it 'elements', ->
      b.update({'id': 1, 'pos': [10, 11], 'speed': 11})
      expect(b.get(1).pos).to.be.eql([10, 11])
      expect(b.get(1).speed).to.be(11)


  describe 'destroy', ->
    id = 2
    beforeEach ->
      b.add({'object': 'benja', 'id': id})

    it 'from elements', ->
      b.destroy({'id': id})
      expect(b.get(id)).not.be.ok()


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
      expect(b._updateView.callCount).to.be(0)
      b.start()
      clock.tick(24)
      expect(b._updateView.callCount).to.be(0)
      clock.tick(25)
      expect(b._updateView.callCount).to.be(1)
      expect(b._updateView.getCall(0).args[0]).to.be(0.025)
      clock.tick(100)
      expect(b._updateView.callCount).to.be(5)

    it 'update position', ->
      b.add({'id': 1, 'object': 'benja', 'speed': 10, 'angle': 0, 'pos': [0, 0]})
      b._updateView(1)
      expect(b.get(1).pos).to.be.eql([10, 0])
      b._updateView(0.5)
      expect(b.get(1).pos).to.be.eql([15, 0])
      b.update({'id': 1, 'angle': 90, 'pos': [0, 0]})
      b._updateView(0.5)
      expect(b.get(1).pos[0]<0.0001).to.be.ok()
      expect(b.get(1).pos[1]-5<0.0001).to.be.ok()
      b.update({'id': 1, 'angle': 45, 'pos': [0, 0]})
      b._updateView(1)
      expect(b.get(1).pos[0]-7.07<0.01).to.be.ok()
      expect(b.get(1).pos[1]-7.07<0.01).to.be.ok()

    it 'stop', ->
      b._updateView = sinon.spy()
      b.start()
      clock.tick(25)
      b.stop()
      expect(b._updateView.callCount).to.be(1)
      clock.tick(100)
      expect(b._updateView.callCount).to.be(1)


describe 'Bco', ->
  b = null
  beforeEach ->
    b = new Bco()
    b.render()
    b.$el.appendTo('body')
  afterEach ->
    b.remove()

  describe 'init', ->
    it 'canvas', ->
      expect(b.$('canvas').width()).to.be(416)
      expect(b.$('canvas').height()).to.be(416)

  describe 'objects', ->
    it 'none', ->
      b.add({'id': 2, 'object': 'none'})
      expect(b.get(2).sprite).not.be.ok()

    it 'tank', ->
      b.add({'id': 2, 'object': 'tank'})
      expect(b.get(2).sprite).to.be.ok()
      expect(b.get(2).sprite.size).to.be.eql([32,32])

    it 'bullet', ->
      b.add({'id': 2, 'object': 'bullet'})
      expect(b.get(2).sprite).to.be.ok()
      expect(b.get(2).sprite.size).to.be.eql([8,8])

    it 'brick', ->
      b.add({'id': 3, 'object': 'brick'})
      expect(b.get(3).sprite._name).to.be('brick')


  describe 'updateView', ->
    beforeEach ->
      b.draw = sinon.spy()

    afterEach ->
      b.draw = null

    it 'update', ->
      b.add({'id': 1, 'object': 'none', 'pos': [0, 0]})
      b.add({'id': 2, 'object': 'tank', 'pos': [0, 0]})
      b.get(2).sprite.update = sinon.spy()
      b._updateView(1)
      expect(b.get(2).sprite.update.getCall(0).args[0]).to.be(1)

    it 'draw', ->
      b._updateView(1)
      expect(b.draw.callCount).to.be(1)

  describe 'draw', ->
    beforeEach ->
      b.c = {'id': 'ben', 'fillRect': sinon.spy(), 'save': sinon.spy(), 'restore': sinon.spy(), 'translate': sinon.spy(), 'rotate': sinon.spy()}

    afterEach ->
      b.c = {}

    it 'fillRect', ->
      b.draw()
      expect(b.c.fillRect.getCall(0).args).to.be.eql([0, 0, 416, 416])

    it 'position', ->
      b.add({'id': 1, 'object': 'tank', 'pos': [10, 10], 'size': [20, 20]})
      b.add({'id': 2, 'object': 'bullet', 'pos': [10, 10], 'size': [30, 30]})
      b.add({'id': 3, 'object': 'none', 'pos': [10, 10], 'size': [30, 30]})
      b.draw()
      expect(b.c.save.callCount).to.be(2)
      expect(b.c.restore.callCount).to.be(2)
      expect(b.c.translate.getCall(0).args[0]).to.be(20)
      expect(b.c.translate.getCall(0).args[1]).to.be(20)
      expect(b.c.translate.getCall(2).args[0]).to.be(25)
      expect(b.c.translate.getCall(2).args[1]).to.be(25)
      expect(b.c.translate.getCall(1).args[0]).to.be(-10)
      expect(b.c.translate.getCall(1).args[1]).to.be(-10)
      expect(b.c.translate.getCall(3).args[0]).to.be(-15)
      expect(b.c.translate.getCall(3).args[1]).to.be(-15)

    it 'angle', ->
      b.add({'id': 1, 'object': 'tank', 'pos': [10, 10], 'size': [20, 20], 'angle': 90})
      b.add({'id': 2, 'object': 'bullet', 'pos': [10, 10], 'size': [30, 30], 'angle': 0})
      b.draw()
      expect((b.c.rotate.getCall(0).args[0]-1.57)<0.01).to.be.ok()
      expect(b.c.rotate.getCall(1).args[0]).to.be(0)

    it 'sprite render', ->
      b.add({'id': 1, 'object': 'tank', 'pos': [10, 10], 'size': [20, 20], 'angle': 90})
      b.get(1).sprite.render = sinon.spy()
      b.draw()
      expect(b.get(1).sprite.render.getCall(0).args[0].id).to.be('ben')




