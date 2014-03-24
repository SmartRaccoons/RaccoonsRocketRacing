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
    describe('load map', function() {
      it('brick', function() {
        b = new Bco([[0, 0, 1], [1, 0, 0]]);
        assert.deepEqual([32, 0], b.get(1).pos);
        assert.equal('brick', b.get(1).object);
        return assert.deepEqual([0, 16], b.get(2).pos);
      });
      it('iron', function() {
        b = new Bco([[0, 0, 2]]);
        return assert.equal('iron', b.get(1).object);
      });
      return it('base', function() {
        b = new Bco([[0, 10, 0], [0, 0, 0]]);
        assert.deepEqual([16, 0], b.get(1).pos);
        return assert.equal('base', b.get(1).object);
      });
    });
    describe('add', function() {
      it('auto id', function() {
        assert.equal(b.id, 0);
        b.add({
          'object': 'tank'
        });
        return assert.equal(b.id, 1);
      });
      it('tank', function() {
        var id;
        id = b.add({
          'object': 'tank'
        });
        assert.equal(1, id);
        return assert.deepEqual(b.get(id).size, [32, 32]);
      });
      it('bullet', function() {
        var id;
        id = b.add({
          'object': 'bullet'
        });
        assert.equal(1, id);
        return assert.deepEqual(b.get(id).size, [8, 8]);
      });
      it('brick', function() {
        var id;
        id = b.add({
          'object': 'brick'
        });
        return assert.equal(b.get(id).hitpoints, 2);
      });
      it('iron', function() {
        var id;
        id = b.add({
          'object': 'iron'
        });
        return assert.equal(b.get(id).hitpoints, 20);
      });
      it('base', function() {
        var id;
        id = b.add({
          'object': 'base'
        });
        return assert.deepEqual(b.get(id).size, [32, 32]);
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
        return assert.equal(false, b.get(id).over);
      });
      it('event', function() {
        var id, spy;
        spy = sinon.spy();
        b.on('add', spy);
        id = b.add({
          'object': 'benja'
        });
        assert.equal(1, spy.getCall(0).args[0].id);
        return assert.equal('benja', spy.getCall(0).args[0].object);
      });
      return it('add/get_tank', function() {
        var id;
        id = b.add_tank('ser', {
          'pos': [1, 2]
        });
        assert.equal('tank', b.get(id).object);
        assert.deepEqual([1, 2], b.get(id).pos);
        assert.equal('ser', b.get(id).params.tank_id);
        return assert.equal(id, b.get_tank('ser').id);
      });
    });
    describe('restart', function() {
      it('same map', function() {
        b = new Bco([[0, 1], [0, 1]]);
        b.destroy(1);
        assert.equal(1, b.get({}).length);
        b.restart();
        return assert.equal(2, b.get({}).length);
      });
      it('event', function() {
        var spy;
        b = new Bco();
        spy = sinon.spy();
        b.on('restart', spy);
        b.restart();
        return assert.equal(1, spy.callCount);
      });
      it('tanks', function() {
        b = new Bco([[0, 1], [0, 1]]);
        b.add_tank('ben');
        b.restart();
        return assert.notEqual(null, b.get_tank('ben'));
      });
      return it('tanks coors', function() {
        var id;
        b = new Bco();
        b.add_tank('ben', {
          'pos': [1, 2],
          'speed': 10
        });
        b._updateView(1);
        b.restart();
        assert.deepEqual([1, 2], b.get_tank('ben').pos);
        id = b.get_tank('ben').id;
        b.update({
          'id': id,
          'pos': [0, 1]
        });
        b.restart();
        return assert.deepEqual([1, 2], b.get_tank('ben').pos);
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
      it('reason', function() {
        var spy;
        spy = sinon.spy();
        b.on('destroy', spy);
        b.destroy(id, 'benja');
        return assert.equal('benja', spy.getCall(0).args[0].reason);
      });
      it('reappend tank', function() {
        id = b.add_tank('ben');
        b.destroy(id);
        assert.equal(null, b.get_tank('ben'));
        id = b.add_tank('ben', {
          'pos': [1, 2]
        });
        b.destroy(id, 'destroy');
        assert.equal(null, b.get(id));
        return assert.deepEqual([1, 2], b.get_tank('ben').pos);
      });
      return it('reappend tank on restart', function() {
        b.on('destroy', function() {
          return b._elements = {};
        });
        id = b.add_tank('ben');
        b.destroy(id, 'destroy');
        return assert.equal(null, b.get_tank('ben'));
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
    return describe('control', function() {
      var id, socket_id;
      id = null;
      socket_id = 'bob';
      beforeEach(function() {
        b.add_tank(socket_id, {
          'pos': [2, 3],
          'angle': 90
        });
        return id = b.get_tank(socket_id).id;
      });
      it('fire', function() {
        var spy;
        spy = sinon.spy();
        b.on('add', spy);
        b.tank_start(socket_id, 'fire');
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
        b.tank_start(socket_id, 'up');
        assert.equal(id, spy.getCall(0).args[0].id);
        assert.equal(270, spy.getCall(0).args[0].angle);
        return assert.equal(100, spy.getCall(0).args[0].speed);
      });
      it('move down', function() {
        var spy;
        spy = sinon.spy();
        b.on('update', spy);
        b.tank_start(socket_id, 'down');
        return assert.equal(90, spy.getCall(0).args[0].angle);
      });
      it('move left', function() {
        var spy;
        spy = sinon.spy();
        b.on('update', spy);
        b.tank_start(socket_id, 'left');
        return assert.equal(180, spy.getCall(0).args[0].angle);
      });
      it('move right', function() {
        var spy;
        spy = sinon.spy();
        b.on('update', spy);
        b.tank_start(socket_id, 'right');
        return assert.equal(0, spy.getCall(0).args[0].angle);
      });
      it('move round coors', function() {
        var spy;
        spy = sinon.spy();
        b.on('update', spy);
        b.get_tank(socket_id).pos = [7, 8];
        b.get_tank(socket_id).angle = 0;
        b.tank_start(socket_id, 'right');
        assert(!spy.getCall(0).args[0].pos);
        b.tank_start(socket_id, 'up');
        assert.deepEqual([0, 16], spy.getCall(1).args[0].pos);
        b._elements[id].pos = [24, 23];
        b.tank_start(socket_id, 'left');
        return assert.deepEqual([32, 16], spy.getCall(2).args[0].pos);
      });
      it('move stop', function() {
        var spy;
        spy = sinon.spy();
        b.tank_start(socket_id, 'up');
        b.on('update', spy);
        b.tank_stop(socket_id, 'up');
        return assert.equal(0, spy.getCall(0).args[0].speed);
      });
      it('move with more keystokes', function() {
        var spy;
        spy = sinon.spy();
        b.on('update', spy);
        b.tank_start(socket_id, 'down');
        b.tank_start(socket_id, 'left');
        b.tank_start(socket_id, 'up');
        b.tank_stop(socket_id, 'up');
        assert.equal(4, spy.callCount);
        assert.equal(180, spy.getCall(3).args[0].angle);
        assert.equal(100, spy.getCall(3).args[0].speed);
        b.tank_stop(socket_id, 'down');
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
  });

}).call(this);
