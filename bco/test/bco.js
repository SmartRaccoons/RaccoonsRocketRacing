(function() {
  var Bco, assert, events, extend, nock, sinon;

  assert = require('assert');

  sinon = require('sinon');

  events = require('events');

  nock = require('nock');

  extend = require('util')._extend;

  Bco = require('../');

  describe('bco', function() {
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
      it('default params', function() {
        var id;
        id = b.add({
          'object': 'benja'
        });
        assert.equal(1, b.get(id).id);
        assert.equal('benja', b.get(id).object);
        assert.deepEqual({}, b.get(id).params);
        assert.deepEqual([0, 0], b.get(id).pos);
        assert.deepEqual([8, 8], b.get(id).size);
        assert.equal(0, b.get(id).speed);
        assert.equal(0, b.get(id).angle);
        id = b.add({
          'object': 'benja2',
          'params': {
            '1': 1
          },
          'pos': [1, 2],
          'speed': 2,
          'angle': 3
        });
        assert.equal(2, b.get(id).id);
        assert.equal('benja2', b.get(id).object);
        assert.deepEqual({
          '1': 1
        }, b.get(id).params);
        assert.deepEqual([1, 2], b.get(id).pos);
        assert.deepEqual([8, 8], b.get(id).size);
        assert.equal(2, b.get(id).speed);
        return assert.equal(3, b.get(id).angle);
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
      it('elements', function() {
        b.update({
          'id': id,
          'pos': [10, 11],
          'speed': 11
        });
        assert.deepEqual([10, 11], b.get(id).pos);
        return assert.equal(11, b.get(id).speed);
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
    describe('remove', function() {
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
        b.on('remove', spy);
        b.remove(id);
        assert.equal(null, b.get(id));
        return assert.equal(id, spy.getCall(0).args[0].id);
      });
      return it('reason', function() {
        var spy;
        spy = sinon.spy();
        b.on('remove', spy);
        b.remove(id, 'benja');
        return assert.equal('benja', spy.getCall(0).args[0].reason);
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
        assert.equal(0, b._updateView.callCount);
        b.start();
        clock.tick(24);
        assert.equal(0, b._updateView.callCount);
        clock.tick(25);
        assert.equal(1, b._updateView.callCount);
        assert.equal(0.025, b._updateView.getCall(0).args[0]);
        clock.tick(100);
        return assert.equal(5, b._updateView.callCount);
      });
      it('update position', function() {
        var id;
        id = b.add({
          'object': 'benja',
          'speed': 10,
          'angle': 0,
          'pos': [0, 0]
        });
        b._updateView(1);
        assert.deepEqual([10, 0], b.get(id).pos);
        b._updateView(0.5);
        assert.deepEqual([15, 0], b.get(id).pos);
        b.update({
          'id': id,
          'angle': 90,
          'pos': [0, 0]
        });
        b._updateView(0.5);
        assert(b.get(id).pos[0] < 0.0001);
        assert(b.get(id).pos[1] - 5 < 0.0001);
        b.update({
          'id': id,
          'angle': 45,
          'pos': [0, 0]
        });
        b._updateView(1);
        assert(b.get(id).pos[0] - 7.07 < 0.01);
        return assert(b.get(id).pos[1] - 7.07 < 0.01);
      });
      return it('stop', function() {
        b._updateView = sinon.spy();
        b.start();
        clock.tick(25);
        b.stop();
        assert.equal(1, b._updateView.callCount);
        clock.tick(100);
        return assert.equal(1, b._updateView.callCount);
      });
    });
  });

}).call(this);
