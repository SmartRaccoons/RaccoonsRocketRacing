(function() {
  var BcoCore,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  BcoCore = (function(_super) {

    __extends(BcoCore, _super);

    function BcoCore() {
      return BcoCore.__super__.constructor.apply(this, arguments);
    }

    BcoCore.prototype.__requestAnimFrame = function(callback) {
      return window.setTimeout(callback, 1000 / 40);
    };

    return BcoCore;

  })(window.BcoCore);

  describe('BcoCore', function() {
    var b;
    b = null;
    beforeEach(function() {
      return b = new BcoCore();
    });
    afterEach(function() {
      return b = null;
    });
    describe('init', function() {
      return it('size', function() {
        b = new BcoCore();
        return expect(b.size).to.be.eql([416, 416]);
      });
    });
    describe('add', function() {
      return it('to elements', function() {
        b.add({
          'id': 2,
          'speed': 4
        });
        return expect(b.get(2).speed).to.be(4);
      });
    });
    describe('update', function() {
      beforeEach(function() {
        return b.add({
          'id': 1,
          'object': 'benja'
        });
      });
      return it('elements', function() {
        b.update({
          'id': 1,
          'pos': [10, 11],
          'speed': 11
        });
        expect(b.get(1).pos).to.be.eql([10, 11]);
        return expect(b.get(1).speed).to.be(11);
      });
    });
    describe('destroy', function() {
      var id;
      id = 2;
      beforeEach(function() {
        return b.add({
          'object': 'benja',
          'id': id
        });
      });
      return it('from elements', function() {
        b.destroy({
          'id': id
        });
        return expect(b.get(id)).not.be.ok();
      });
    });
    return describe('process', function() {
      var clock;
      clock = null;
      beforeEach(function() {
        clock = sinon.useFakeTimers();
        return b._elements = {};
      });
      afterEach(function() {
        return clock.restore();
      });
      it('start', function() {
        b._updateView = sinon.spy();
        clock.tick(1000);
        expect(b._updateView.callCount).to.be(0);
        b.start();
        clock.tick(24);
        expect(b._updateView.callCount).to.be(0);
        clock.tick(25);
        expect(b._updateView.callCount).to.be(1);
        expect(b._updateView.getCall(0).args[0]).to.be(0.025);
        clock.tick(100);
        return expect(b._updateView.callCount).to.be(5);
      });
      it('update position', function() {
        b.add({
          'id': 1,
          'object': 'benja',
          'speed': 10,
          'angle': 0,
          'pos': [0, 0]
        });
        b._updateView(1);
        expect(b.get(1).pos).to.be.eql([10, 0]);
        b._updateView(0.5);
        expect(b.get(1).pos).to.be.eql([15, 0]);
        b.update({
          'id': 1,
          'angle': 90,
          'pos': [0, 0]
        });
        b._updateView(0.5);
        expect(b.get(1).pos[0] < 0.0001).to.be.ok();
        expect(b.get(1).pos[1] - 5 < 0.0001).to.be.ok();
        b.update({
          'id': 1,
          'angle': 45,
          'pos': [0, 0]
        });
        b._updateView(1);
        expect(b.get(1).pos[0] - 7.07 < 0.01).to.be.ok();
        return expect(b.get(1).pos[1] - 7.07 < 0.01).to.be.ok();
      });
      return it('stop', function() {
        b._updateView = sinon.spy();
        b.start();
        clock.tick(25);
        b.stop();
        expect(b._updateView.callCount).to.be(1);
        clock.tick(100);
        return expect(b._updateView.callCount).to.be(1);
      });
    });
  });

  describe('Bco', function() {
    var b;
    b = null;
    beforeEach(function() {
      b = new Bco();
      b.render();
      return b.$el.appendTo('body');
    });
    afterEach(function() {
      return b.remove();
    });
    describe('init', function() {
      return it('canvas', function() {
        expect(b.$('canvas').width()).to.be(416);
        return expect(b.$('canvas').height()).to.be(416);
      });
    });
    describe('objects', function() {
      it('none', function() {
        b.add({
          'id': 2,
          'object': 'none'
        });
        return expect(b.get(2).sprite).not.be.ok();
      });
      it('tank', function() {
        b.add({
          'id': 2,
          'object': 'tank'
        });
        expect(b.get(2).sprite).to.be.ok();
        return expect(b.get(2).sprite.size).to.be.eql([32, 32]);
      });
      it('bullet', function() {
        b.add({
          'id': 2,
          'object': 'bullet'
        });
        expect(b.get(2).sprite).to.be.ok();
        return expect(b.get(2).sprite.size).to.be.eql([8, 8]);
      });
      return it('brick', function() {
        b.add({
          'id': 3,
          'object': 'brick'
        });
        return expect(b.get(3).sprite._name).to.be('brick');
      });
    });
    describe('updateView', function() {
      beforeEach(function() {
        return b.draw = sinon.spy();
      });
      afterEach(function() {
        return b.draw = null;
      });
      it('update', function() {
        b.add({
          'id': 1,
          'object': 'none',
          'pos': [0, 0]
        });
        b.add({
          'id': 2,
          'object': 'tank',
          'pos': [0, 0]
        });
        b.get(2).sprite.update = sinon.spy();
        b._updateView(1);
        return expect(b.get(2).sprite.update.getCall(0).args[0]).to.be(1);
      });
      return it('draw', function() {
        b._updateView(1);
        return expect(b.draw.callCount).to.be(1);
      });
    });
    return describe('draw', function() {
      beforeEach(function() {
        return b.c = {
          'id': 'ben',
          'fillRect': sinon.spy(),
          'save': sinon.spy(),
          'restore': sinon.spy(),
          'translate': sinon.spy(),
          'rotate': sinon.spy()
        };
      });
      afterEach(function() {
        return b.c = {};
      });
      it('fillRect', function() {
        b.draw();
        return expect(b.c.fillRect.getCall(0).args).to.be.eql([0, 0, 416, 416]);
      });
      it('position', function() {
        b.add({
          'id': 1,
          'object': 'tank',
          'pos': [10, 10],
          'size': [20, 20]
        });
        b.add({
          'id': 2,
          'object': 'bullet',
          'pos': [10, 10],
          'size': [30, 30]
        });
        b.add({
          'id': 3,
          'object': 'none',
          'pos': [10, 10],
          'size': [30, 30]
        });
        b.draw();
        expect(b.c.save.callCount).to.be(2);
        expect(b.c.restore.callCount).to.be(2);
        expect(b.c.translate.getCall(0).args[0]).to.be(20);
        expect(b.c.translate.getCall(0).args[1]).to.be(20);
        expect(b.c.translate.getCall(2).args[0]).to.be(25);
        expect(b.c.translate.getCall(2).args[1]).to.be(25);
        expect(b.c.translate.getCall(1).args[0]).to.be(-10);
        expect(b.c.translate.getCall(1).args[1]).to.be(-10);
        expect(b.c.translate.getCall(3).args[0]).to.be(-15);
        return expect(b.c.translate.getCall(3).args[1]).to.be(-15);
      });
      it('angle', function() {
        b.add({
          'id': 1,
          'object': 'tank',
          'pos': [10, 10],
          'size': [20, 20],
          'angle': 90
        });
        b.add({
          'id': 2,
          'object': 'bullet',
          'pos': [10, 10],
          'size': [30, 30],
          'angle': 0
        });
        b.draw();
        expect((b.c.rotate.getCall(0).args[0] - 1.57) < 0.01).to.be.ok();
        return expect(b.c.rotate.getCall(1).args[0]).to.be(0);
      });
      return it('sprite render', function() {
        b.add({
          'id': 1,
          'object': 'tank',
          'pos': [10, 10],
          'size': [20, 20],
          'angle': 90
        });
        b.get(1).sprite.render = sinon.spy();
        b.draw();
        return expect(b.get(1).sprite.render.getCall(0).args[0].id).to.be('ben');
      });
    });
  });

}).call(this);
