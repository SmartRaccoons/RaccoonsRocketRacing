(function() {
  var TestSprite,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  TestSprite = (function(_super) {

    __extends(TestSprite, _super);

    function TestSprite() {
      return TestSprite.__super__.constructor.apply(this, arguments);
    }

    TestSprite.prototype.url = 'test';

    return TestSprite;

  })(App.Sprite);

  describe('Objects', function() {
    var image, s, stub_image;
    s = null;
    image = null;
    stub_image = null;
    beforeEach(function() {
      image = {
        'onload': sinon.spy()
      };
      stub_image = sinon.stub(window, 'Image').returns(image);
      return s = new TestSprite();
    });
    afterEach(function() {
      return stub_image.restore();
    });
    describe('Sprite', function() {
      it('default', function() {
        expect(s.size).to.be.eql([0, 0]);
        expect(s.pos).to.be.eql([0, 0]);
        expect(s._frames).to.be.eql([0]);
        return expect(s._frames_speed).to.be(0);
      });
      it('image', function() {
        expect(image.src).to.be('test');
        expect(s._loaded).to.not.ok();
        image.onload();
        return expect(s._loaded).to.be.ok();
      });
      it('no image', function() {
        var draw;
        draw = sinon.spy();
        s.render({
          'drawImage': draw
        });
        expect(draw.callCount).to.be(0);
        image.onload();
        s.render({
          'drawImage': draw
        });
        return expect(draw.callCount).to.be(1);
      });
      it('update', function() {
        expect(s._frames_index).to.be(0);
        s._frames = [0, 1];
        s._frames_speed = 1;
        s.update(1);
        expect(s._frames_index).to.be(1);
        s.update(1);
        expect(s._frames_index).to.be(0);
        s.update(8.5);
        expect(s._frames_index).to.be(0.5);
        s._frames_speed = 0;
        s.update(0.5);
        return expect(s._frames_index).to.be(0.5);
      });
      return it('render', function() {
        var draw;
        draw = sinon.spy();
        s._frames = [0, 1];
        s._frames_speed = 1;
        s.pos = [5, 6];
        s.size = [10, 11];
        s.speed = 1;
        image.onload();
        s.render({
          'drawImage': draw
        });
        expect(draw.getCall(0).args[0].src).to.be('test');
        expect(draw.getCall(0).args[1]).to.be(5);
        expect(draw.getCall(0).args[2]).to.be(6);
        expect(draw.getCall(0).args[3]).to.be(10);
        expect(draw.getCall(0).args[4]).to.be(11);
        expect(draw.getCall(0).args[5]).to.be(0);
        expect(draw.getCall(0).args[6]).to.be(0);
        expect(draw.getCall(0).args[7]).to.be(10);
        expect(draw.getCall(0).args[8]).to.be(11);
        s.update(1.9);
        s.render({
          'drawImage': draw
        });
        return expect(draw.getCall(1).args[1]).to.be(15);
      });
    });
    describe('Tank', function() {
      return it('params', function() {
        var t;
        t = new App.SpriteTank();
        expect(t.size).to.be.eql([32, 32]);
        return expect(t.url).to.be('d/img/tank.png');
      });
    });
    describe('Bullet', function() {
      return it('params', function() {
        var t;
        t = new App.SpriteBullet();
        expect(t.size).to.be.eql([8, 8]);
        return expect(t.url).to.be('d/img/bullet.png');
      });
    });
    return describe('Brick', function() {
      return it('params', function() {
        var t;
        t = new App.SpriteBrick();
        expect(t.size).to.be.eql([16, 16]);
        return expect(t.url).to.be('d/img/brick.png');
      });
    });
  });

}).call(this);
