(function() {
  var Bco, events,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  events = require('events');

  module.exports = Bco = (function(_super) {

    __extends(Bco, _super);

    function Bco() {
      return Bco.__super__.constructor.apply(this, arguments);
    }

    Bco.prototype.id = 0;

    Bco.prototype._elements = {};

    Bco.prototype.add = function(pr) {
      this.id++;
      this._elements[this.id] = {
        id: this.id,
        object: pr.object,
        params: pr.params || {},
        pos: pr.pos || [0, 0],
        size: pr.object === 'tank' ? [32, 32] : [8, 8],
        speed: pr.speed || 0,
        angle: pr.angle || 0
      };
      this.emit('add', this._elements[this.id]);
      return this.id;
    };

    Bco.prototype.update = function(pr) {
      var attr, val;
      for (attr in pr) {
        val = pr[attr];
        if (attr !== 'id') {
          this._elements[pr['id']][attr] = val;
        }
      }
      return this.emit('update', pr);
    };

    Bco.prototype.remove = function(id, reason) {
      delete this._elements[id];
      return this.emit('remove', {
        'id': id,
        'reason': reason
      });
    };

    Bco.prototype.get = function(id) {
      return this._elements[id];
    };

    Bco.prototype.start = function() {
      this._lastTime = Date.now();
      return this._process();
    };

    Bco.prototype.stop = function() {
      return this._stop = true;
    };

    Bco.prototype._process = function() {
      var dt, now,
        _this = this;
      now = Date.now();
      dt = (now - this._lastTime) / 1000.0;
      if (dt > 0) {
        this._updateView(dt);
      }
      this._lastTime = now;
      return setTimeout(function() {
        if (!_this._stop) {
          return _this._process();
        }
      }, 1000 / 40);
    };

    Bco.prototype._updateView = function(dt) {
      var hypo, id, rd, val, _ref, _results;
      _ref = this._elements;
      _results = [];
      for (id in _ref) {
        val = _ref[id];
        rd = val.angle * Math.PI / 180.0;
        hypo = val.speed * dt;
        val.pos[0] += hypo * Math.cos(rd);
        _results.push(val.pos[1] += hypo * Math.sin(rd));
      }
      return _results;
    };

    return Bco;

  })(events.EventEmitter);

}).call(this);
