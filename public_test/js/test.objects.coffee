
class TestSprite extends App.Sprite
  url: 'test'


describe 'Objects', ->
  s = null
  image = null
  stub_image = null
  beforeEach ->
      image =
        'onload': sinon.spy()
      stub_image = sinon.stub(window, 'Image').returns(image)
      s = new TestSprite()
  afterEach ->
    stub_image.restore()


  describe 'Sprite', ->

    it 'default', ->
      expect(s.size).to.be.eql([0, 0])
      expect(s.pos).to.be.eql([0, 0])
      expect(s._frames).to.be.eql([0])
      expect(s._frames_speed).to.be(0)

    it 'image', ->
      expect(image.src).to.be('test')
      expect(s._loaded).to.not.ok()
      image.onload()
      expect(s._loaded).to.be.ok()

    it 'no image', ->
      draw = sinon.spy()
      s.render({'drawImage': draw})
      expect(draw.callCount).to.be(0)
      image.onload()
      s.render({'drawImage': draw})
      expect(draw.callCount).to.be(1)

    it 'update', ->
      expect(s._frames_index).to.be(0)
      s._frames = [0, 1]
      s._frames_speed = 1
      s.update(1)
      expect(s._frames_index).to.be(1)
      s.update(1)
      expect(s._frames_index).to.be(0)
      s.update(8.5)
      expect(s._frames_index).to.be(0.5)
      s._frames_speed = 0
      s.update(0.5)
      expect(s._frames_index).to.be(0.5)

    it 'render', ->
      draw = sinon.spy()
      s._frames = [0, 1]
      s._frames_speed = 1
      s.pos = [5, 6]
      s.size = [10, 11]
      s.speed = 1
      image.onload()
      s.render({'drawImage': draw})
      expect(draw.getCall(0).args[0].src).to.be('test')
      expect(draw.getCall(0).args[1]).to.be(5)
      expect(draw.getCall(0).args[2]).to.be(6)
      expect(draw.getCall(0).args[3]).to.be(10)
      expect(draw.getCall(0).args[4]).to.be(11)
      expect(draw.getCall(0).args[5]).to.be(0)
      expect(draw.getCall(0).args[6]).to.be(0)
      expect(draw.getCall(0).args[7]).to.be(10)
      expect(draw.getCall(0).args[8]).to.be(11)
      s.update(1.9)
      s.render({'drawImage': draw})
      expect(draw.getCall(1).args[1]).to.be(15)


  describe 'Tank', ->
    it 'params', ->
      t = new App.SpriteTank()
      expect(t.size).to.be.eql([32, 32])
      expect(t.url).to.be('d/img/tank.png')


  describe 'Bullet', ->
    it 'params', ->
      t = new App.SpriteBullet()
      expect(t.size).to.be.eql([8, 8])
      expect(t.url).to.be('d/img/bullet.png')

  describe 'Brick', ->
    it 'params', ->
      t = new App.SpriteBrick()
      expect(t.size).to.be.eql([16, 16])
      expect(t.url).to.be('d/img/brick.png')

