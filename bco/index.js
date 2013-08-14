(function() {
  var Bco, collides, events,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  events = require('events');

  collides = function(x, y, r, b, x2, y2, r2, b2) {
    return !(r <= x2 || x > r2 || b <= y2 || y > b2);
  };

  module.exports = Bco = (function(_super) {

    __extends(Bco, _super);

    Bco.prototype.id = 0;

    Bco.prototype.size = [416, 416];

    Bco.prototype._elements = {};

    function Bco(params) {}

    Bco.prototype.add = function(pr) {
      this.id++;
      this._elements[this.id] = {
        id: this.id,
        object: pr.object,
        params: pr.params || {},
        pos: pr.pos || [0, 0],
        size: pr.object === 'tank' ? [32, 32] : [8, 8],
        speed: pr.speed || 0,
        angle: pr.angle || 0,
        destroy: pr.destroy || 0,
        hitpoints: pr.hitpoints || 1
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
      var hypo, id, id2, rd, val, val2, _ref, _ref1, _ref2, _results;
      _ref = this._elements;
      for (id in _ref) {
        val = _ref[id];
        rd = val.angle * Math.PI / 180.0;
        hypo = val.speed * dt;
        val.pos[0] += hypo * Math.cos(rd);
        val.pos[1] += hypo * Math.sin(rd);
      }
      _ref1 = this._elements;
      for (id in _ref1) {
        val = _ref1[id];
        if (val.destroy > 0 && (val.pos[0] < 0 || val.pos[1] < 0 || val.pos[0] + val.size[0] > this.size[0] || val.pos[1] + val.size[1] > this.size[1])) {
          this.remove(id);
        }
      }
      _ref2 = this._elements;
      _results = [];
      for (id in _ref2) {
        val = _ref2[id];
        _results.push((function() {
          var _ref3, _results1;
          _ref3 = this._elements;
          _results1 = [];
          for (id2 in _ref3) {
            val2 = _ref3[id2];
            if (id !== id2 && val.destroy > 0) {
              if (collides(val.pos[0], val.pos[1], val.pos[0] + val.size[0], val.pos[1] + val.size[1], val2.pos[0], val2.pos[1], val2.pos[0] + val2.size[0], val2.pos[1] + val2.size[1])) {
                val2.hitpoints -= val.destroy;
                this.remove(id);
                if (val2.hitpoints <= 0) {
                  _results1.push(this.remove(id2));
                } else {
                  _results1.push(void 0);
                }
              } else {
                _results1.push(void 0);
              }
            } else {
              _results1.push(void 0);
            }
          }
          return _results1;
        }).call(this));
      }
      return _results;
    };

    return Bco;

  })(events.EventEmitter);

}).call(this);
