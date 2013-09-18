(function() {
  var Bco, assert, events, extend, nock, sinon;

  assert = require('assert');

  sinon = require('sinon');

  events = require('events');

  nock = require('nock');

  extend = require('util')._extend;

  Bco = require('../').Bco;

  describe('Bco', function() {
    var b;
    b = null;
    beforeEach(function() {
      return b = new Bco();
    });
    afterEach(function() {});
    describe('add', function() {
      it('auto id', function() {
        assert.equal(b.id, 0);
        b.add({
          'object': 'tank'
        });
        return assert.equal(b.id, 1);
      });
      it('add tank', function() {
        var id;
        id = b.add({
          'object': 'tank'
        });
        assert.equal(1, id);
        return assert.deepEqual(b.get(id).size, [32, 32]);
      });
      it('add bullet', function() {
        var id;
        id = b.add({
          'object': 'bullet'
        });
        assert.equal(1, id);
        return assert.deepEqual(b.get(id).size, [8, 8]);
      });
      return it('add brick', function() {
        var id;
        id = b.add({
          'object': 'brick'
        });
        return assert.equal(b.get(id).hitpoints, 2);
      });
    });
    describe('load map', function() {
      it('elements', function() {
        b = new Bco([[0, 0, 1], [1, 0, 0]]);
        assert.deepEqual([32, 0], b.get(1).pos);
        assert.equal('brick', b.get(1).object);
        return assert.deepEqual([0, 16], b.get(2).pos);
      });
      it('default params', function() {
        var id;
        id = b.add({
          'object': 'benja'
        });
        assert.equal(1, b.get(id).id);
        assert.equal('benja', b.get(id).object);
        assert.deepEqual({}, b.get(id).params);
        assert.deepEqual([0, 0], b.get(id).pos);
        assert.deepEqual([16, 16], b.get(id).size);
        assert.equal(0, b.get(id).speed);
        assert.equal(0, b.get(id).angle);
        assert.equal(0, b.get(id).destroy);
        assert.equal(1, b.get(id).hitpoints);
        id = b.add({
          'object': 'benja2',
          'params': {
            '1': 1
          },
          'pos': [1, 2],
          'speed': 2,
          'angle': 3,
          'destroy': 1,
          'hitpoints': 10
        });
        assert.equal(2, b.get(id).id);
        assert.equal('benja2', b.get(id).object);
        assert.deepEqual({
          '1': 1
        }, b.get(id).params);
        assert.deepEqual([1, 2], b.get(id).pos);
        assert.deepEqual([16, 16], b.get(id).size);
        assert.equal(2, b.get(id).speed);
        assert.equal(3, b.get(id).angle);
        assert.equal(10, b.get(id).hitpoints);
        assert.equal(0, b.get(id).over);
        return assert.equal(1, b.get(id).stuck);
      });
      return it('event add', function() {
        var id, spy;
        spy = sinon.spy();
        b.on('add', spy);
        id = b.add({
          'object': 'benja'
        });
        assert.equal(1, spy.getCall(0).args[0].id);
        return assert.equal('benja', spy.getCall(0).args[0].object);
      });
    });
    describe('update', function() {
      var id;
      id = null;
      beforeEach(function() {
        return id = b.add({
          'object': 'benja'
        });
      });
      return it('event update', function() {
        var spy;
        spy = sinon.spy();
        b.on('update', spy);
        b.update({
          'id': id,
          'pos': [10, 11],
          'speed': 11
        });
        assert.deepEqual([10, 11], spy.getCall(0).args[0].pos);
        return assert.equal(11, spy.getCall(0).args[0].speed);
      });
    });
    describe('destroy', function() {
      var id;
      id = null;
      beforeEach(function() {
        return id = b.add({
          'object': 'benja'
        });
      });
      it('event', function() {
        var spy;
        spy = sinon.spy();
        b.on('destroy', spy);
        b.destroy(id);
        return assert.equal(id, spy.getCall(0).args[0].id);
      });
      return it('reason', function() {
        var spy;
        spy = sinon.spy();
        b.on('destroy', spy);
        b.destroy(id, 'benja');
        return assert.equal('benja', spy.getCall(0).args[0].reason);
      });
    });
    describe('process', function() {
      var clock;
      clock = null;
      beforeEach(function() {
        clock = sinon.useFakeTimers();
        return b._elements = {};
      });
      afterEach(function() {
        return clock.restore();
      });
      it('update position out of space for destroyers', function() {
        var id;
        id = b.add({
          'object': 'benja',
          'speed': 10,
          'angle': 180,
          'pos': [1, 1],
          'destroy': 1
        });
        b._updateView(0.2);
        assert.equal(null, b.get(id));
        id = b.add({
          'object': 'benja',
          'speed': 10,
          'angle': 270,
          'pos': [1, 1],
          'destroy': 1
        });
        b._updateView(0.2);
        assert.equal(null, b.get(id));
        id = b.add({
          'object': 'benja',
          'speed': 10,
          'angle': 0,
          'pos': [408, 1],
          'destroy': 1
        });
        b._updateView(0.2);
        assert.equal(null, b.get(id));
        id = b.add({
          'object': 'benja',
          'speed': 10,
          'angle': 90,
          'pos': [1, 408],
          'destroy': 1
        });
        b._updateView(0.2);
        return assert.equal(null, b.get(id));
      });
      it('collides bullet', function() {
        var bullet, spy, tank;
        spy = sinon.spy(b, 'destroy');
        bullet = b.add({
          'object': 'bullet',
          'speed': 10,
          'angle': 0,
          'pos': [10, 10],
          'destroy': 1
        });
        tank = b.add({
          'object': 'tank',
          'speed': 0,
          'angle': 90,
          'pos': [20, 10]
        });
        b._updateView(0.1);
        assert.equal(bullet, b.get(bullet).id);
        b._updateView(0.2);
        assert.equal(null, b.get(bullet));
        assert.equal(null, b.get(tank));
        assert(spy.withArgs(tank, 'destroy').calledOnce);
        return assert(spy.withArgs(bullet, 'destroy').calledOnce);
      });
      it('collides self bullet', function() {
        var bullet, spy, tank;
        spy = sinon.spy(b, 'destroy');
        tank = b.add({
          'object': 'tank',
          'speed': 0,
          'angle': 90,
          'pos': [20, 10]
        });
        bullet = b.add({
          'object': 'bullet',
          'speed': 10,
          'angle': 0,
          'pos': [10, 10],
          'destroy': 1,
          'params': {
            'owner': tank
          }
        });
        b._updateView(0.3);
        return assert.equal(0, spy.callCount);
      });
      it('collides bullet with hitpoints', function() {
        var bullet, spy, tank;
        spy = sinon.spy(b, 'update');
        bullet = b.add({
          'object': 'bullet',
          'speed': 10,
          'angle': 0,
          'pos': [10, 10],
          'destroy': 1
        });
        tank = b.add({
          'object': 'tank',
          'speed': 0,
          'angle': 90,
          'pos': [20, 10],
          'hitpoints': 2
        });
        b._updateView(0.3);
        assert.equal(null, b.get(bullet));
        assert.equal(1, b.get(tank).hitpoints);
        assert.equal(1, spy.callCount);
        assert.equal(tank, spy.getCall(0).args[0].id);
        return assert.equal(1, spy.getCall(0).args[0].hitpoints);
      });
      return it('collides bullet with 2 elements', function() {
        var bullet, spy;
        spy = sinon.spy(b, 'destroy');
        bullet = b.add({
          'object': 'bullet',
          'speed': 10,
          'angle': 0,
          'pos': [10, 10],
          'destroy': 1
        });
        b.add({
          'object': 'tank',
          'speed': 0,
          'angle': 90,
          'pos': [20, 10]
        });
        b.add({
          'object': 'tank',
          'speed': 0,
          'angle': 90,
          'pos': [20, 10]
        });
        b._updateView(0.3);
        assert.equal(3, spy.callCount);
        return assert(spy.withArgs(bullet, 'destroy').calledOnce);
      });
    });
    describe('collides', function() {
      var clock, spy, tank1, tank2;
      clock = null;
      tank1 = null;
      tank2 = null;
      spy = null;
      beforeEach(function() {
        clock = sinon.useFakeTimers();
        b._elements = {};
        spy = sinon.spy(b, 'update');
        tank1 = b.add({
          'object': 'tank',
          'speed': 10,
          'angle': 0,
          'pos': [0, 0]
        });
        return tank2 = b.add({
          'object': 'brick',
          'speed': 0,
          'angle': 0,
          'pos': [0, 0]
        });
      });
      afterEach(function() {
        return clock.restore();
      });
      it('over elements', function() {
        b._updateView(0.8);
        assert.equal(0, b.get(tank1).stuck);
        assert.equal(1, b.get(tank2).stuck);
        assert.equal(1, spy.callCount);
        assert.equal(tank1, spy.getCall(0).args[0].id);
        assert.equal(0, spy.getCall(0).args[0].stuck);
        b._updateView(0.1);
        return assert.equal(1, spy.callCount);
      });
      it('remove stuck', function() {
        b.get(tank1).stuck = 0;
        b._tank_move(tank1, 'up', true);
        return assert.equal(1, b.get(tank1).stuck);
      });
      it('over element from left', function() {
        b.get(tank2).pos = [34, 0];
        b.get(tank1).pos = [0, 1];
        b._updateView(1);
        return assert.deepEqual([2, 1], b.get(tank1).pos);
      });
      it('over element from right', function() {
        b.get(tank1).angle = 180;
        b.get(tank1).pos = [17, 1];
        b._updateView(1);
        return assert.deepEqual([16, 1], b.get(tank1).pos);
      });
      it('over element from top', function() {
        b.get(tank1).angle = 90;
        b.get(tank2).pos = [0, 34];
        b._updateView(1);
        return assert.deepEqual([0, 2], b.get(tank1).pos);
      });
      return it('over element from bottom', function() {
        b.get(tank1).angle = 270;
        b.get(tank1).pos = [0, 17];
        b._updateView(1);
        return assert.deepEqual([0, 16], b.get(tank1).pos);
      });
    });
    describe('control', function() {
      var id;
      id = null;
      beforeEach(function() {
        return id = b.add({
          'object': 'tank',
          'pos': [2, 3],
          'angle': 90
        });
      });
      it('fire', function() {
        var spy;
        spy = sinon.spy();
        b.on('add', spy);
        b.tank_start(id, 'fire');
        assert.equal('bullet', spy.getCall(0).args[0].object);
        assert.equal(id, spy.getCall(0).args[0].params.owner);
        assert.deepEqual([14, 15], spy.getCall(0).args[0].pos);
        assert.deepEqual(90, spy.getCall(0).args[0].angle);
        assert.deepEqual(200, spy.getCall(0).args[0].speed);
        return assert.deepEqual(1, spy.getCall(0).args[0].destroy);
      });
      it('move', function() {
        var spy;
        spy = sinon.spy();
        b.on('update', spy);
        b.tank_start(id, 'up');
        assert.equal(id, spy.getCall(0).args[0].id);
        assert.equal(270, spy.getCall(0).args[0].angle);
        return assert.equal(100, spy.getCall(0).args[0].speed);
      });
      it('move down', function() {
        var spy;
        spy = sinon.spy();
        b.on('update', spy);
        b.tank_start(id, 'down');
        return assert.equal(90, spy.getCall(0).args[0].angle);
      });
      it('move left', function() {
        var spy;
        spy = sinon.spy();
        b.on('update', spy);
        b.tank_start(id, 'left');
        return assert.equal(180, spy.getCall(0).args[0].angle);
      });
      it('move right', function() {
        var spy;
        spy = sinon.spy();
        b.on('update', spy);
        b.tank_start(id, 'right');
        return assert.equal(0, spy.getCall(0).args[0].angle);
      });
      it('move stop', function() {
        var spy;
        spy = sinon.spy();
        b.tank_start(id, 'up');
        b.on('update', spy);
        b.tank_stop(id, 'up');
        return assert.equal(0, spy.getCall(0).args[0].speed);
      });
      it('move with more keystokes', function() {
        var spy;
        spy = sinon.spy();
        b.on('update', spy);
        b.tank_start(id, 'down');
        b.tank_start(id, 'left');
        b.tank_start(id, 'up');
        b.tank_stop(id, 'up');
        assert.equal(4, spy.callCount);
        assert.equal(180, spy.getCall(3).args[0].angle);
        assert.equal(100, spy.getCall(3).args[0].speed);
        b.tank_stop(id, 'down');
        return assert.equal(4, spy.callCount);
      });
      return it('wrong move', function() {
        var add, update;
        update = sinon.spy();
        add = sinon.spy();
        b.on('update', update);
        b.on('add', add);
        b.tank_start(id, 'ben');
        assert.equal(0, update.callCount);
        assert.equal(0, add.callCount);
        b._tank_move = sinon.spy();
        b.tank_stop(id, 'ben');
        return assert.equal(0, b._tank_move.callCount);
      });
    });
    return describe('collides', function() {
      it('top', function() {
        assert(!b._collides(2, 0, 8, 9, 0, 10, 10, 20));
        assert(!b._collides(2, 0, 8, 10, 0, 10, 10, 20));
        return assert(b._collides(2, 0, 8, 11, 0, 10, 10, 20));
      });
      it('bottom', function() {
        assert(!b._collides(2, 21, 8, 22, 0, 10, 10, 20));
        assert(!b._collides(2, 20, 8, 22, 0, 10, 10, 20));
        return assert(b._collides(2, 19, 8, 22, 0, 10, 10, 20));
      });
      it('left', function() {
        assert(!b._collides(0, 2, 9, 8, 10, 0, 20, 10));
        assert(!b._collides(0, 2, 10, 8, 10, 0, 20, 10));
        return assert(b._collides(0, 2, 11, 8, 10, 0, 20, 10));
      });
      return it('right', function() {
        assert(!b._collides(21, 2, 30, 8, 10, 0, 20, 10));
        assert(!b._collides(20, 2, 30, 8, 10, 0, 20, 10));
        return assert(b._collides(19, 2, 30, 8, 10, 0, 20, 10));
      });
    });
  });

}).call(this);
