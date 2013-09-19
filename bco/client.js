(function() {
  var Backbone, Bco, BcoCore, _,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  _ = typeof require !== 'undefined' ? require('lodash') : window._;

  Backbone = typeof require !== 'undefined' ? require('backbone') : window.Backbone;

  (typeof module !== 'undefined' ? module.exports : window).BcoCore = BcoCore = (function() {

    _.extend(BcoCore.prototype, Backbone.Events);

    BcoCore.prototype.size = [416, 416];

    function BcoCore() {
      this._elements = {};
    }

    BcoCore.prototype._collides = function(x, y, r, b, x2, y2, r2, b2) {
      return !(r <= x2 || x >= r2 || b <= y2 || y >= b2);
    };

    BcoCore.prototype.__requestAnimFrame = function(callback) {
      var fn;
      fn = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
      if (fn) {
        return fn(callback);
      }
      return window.setTimeout(callback, 1000 / 30);
    };

    BcoCore.prototype.add = function(pr) {
      return this._elements[pr.id] = pr;
    };

    BcoCore.prototype.get = function(id) {
      return this._elements[id];
    };

    BcoCore.prototype.update = function(pr) {
      var attr, val, _results;
      _results = [];
      for (attr in pr) {
        val = pr[attr];
        if (attr !== 'id') {
          _results.push(this._elements[pr['id']][attr] = val);
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    BcoCore.prototype.destroy = function(pr) {
      return delete this._elements[pr.id];
    };

    BcoCore.prototype.start = function() {
      this._lastTime = Date.now();
      return this._process();
    };

    BcoCore.prototype.stop = function() {
      return this._stop = true;
    };

    BcoCore.prototype._process = function() {
      var dt, now,
        _this = this;
      now = Date.now();
      dt = (now - this._lastTime) / 1000.0;
      if (dt > 0) {
        this._updateView(dt);
      }
      this._lastTime = now;
      return this.__requestAnimFrame(function() {
        if (!_this._stop) {
          return _this._process();
        }
      });
    };

    BcoCore.prototype._updateView = function(dt) {
      var hypo, id, id2, rd, val, val2, _ref, _ref1;
      _ref = this._elements;
      for (id in _ref) {
        val = _ref[id];
        if (val.speed > 0) {
          rd = val.angle * Math.PI / 180.0;
          hypo = val.speed * dt;
          val.pos[0] += Math.round(hypo * Math.cos(rd) * 100000) / 100000;
          val.pos[1] += Math.round(hypo * Math.sin(rd) * 100000) / 100000;
          if (val.destroy === 0) {
            _ref1 = this._elements;
            for (id2 in _ref1) {
              val2 = _ref1[id2];
              if (id !== id2 && val2.destroy === 0 && this._collides(val.pos[0], val.pos[1], val.pos[0] + val.size[0], val.pos[1] + val.size[1], val2.pos[0], val2.pos[1], val2.pos[0] + val2.size[0], val2.pos[1] + val2.size[1])) {
                if (val.angle === 0) {
                  val.pos[0] = val2.pos[0] - val.size[0];
                } else if (val.angle === 90) {
                  val.pos[1] = val2.pos[1] - val.size[1];
                } else if (val.angle === 180) {
                  val.pos[0] = val2.pos[0] + val2.size[0];
                } else if (val.angle === 270) {
                  val.pos[1] = val2.pos[1] + val2.size[1];
                }
              }
            }
          }
        }
      }
      return this;
    };

    return BcoCore;

  })();

  (typeof module !== 'undefined' ? module.exports : window).Bco = Bco = (function(_super) {

    __extends(Bco, _super);

    _.extend(Bco.prototype, Backbone.View.prototype);

    function Bco() {
      Bco.__super__.constructor.apply(this, arguments);
      Backbone.View.prototype.constructor.apply(this, arguments);
      this;

    }

    Bco.prototype.add = function(pr) {
      Bco.__super__.add.apply(this, arguments);
      if (['tank', 'bullet', 'brick'].indexOf(pr.object) !== -1) {
        return this._elements[pr.id]['sprite'] = new App['Sprite' + pr.object[0].toUpperCase() + pr.object.substr(1)]();
      }
    };

    Bco.prototype._updateView = function(dt) {
      var id, val, _ref;
      Bco.__super__._updateView.apply(this, arguments);
      _ref = this._elements;
      for (id in _ref) {
        val = _ref[id];
        if (val.sprite) {
          val.sprite.update(dt);
        }
      }
      return this.draw();
    };

    Bco.prototype.draw = function() {
      var id, val, _ref;
      this.c.fillStyle = "rgb(0,0,0)";
      this.c.fillRect(0, 0, this.canvas.width(), this.canvas.height());
      _ref = this._elements;
      for (id in _ref) {
        val = _ref[id];
        if (val.sprite) {
          this.c.save();
          this.c.translate(val.pos[0] + val.size[0] / 2, val.pos[1] + val.size[1] / 2);
          this.c.rotate(val.angle * Math.PI / 180.0);
          this.c.translate(-val.size[0] / 2, -val.size[1] / 2);
          val.sprite.render(this.c);
          this.c.restore();
        }
      }
      return this;
    };

    Bco.prototype.render = function() {
      this.canvas = $('<canvas width=416 height=416>');
      this.$el.append(this.canvas);
      this.c = this.canvas[0].getContext('2d');
      return this;
    };

    return Bco;

  })(BcoCore);

}).call(this);
