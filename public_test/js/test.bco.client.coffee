

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




