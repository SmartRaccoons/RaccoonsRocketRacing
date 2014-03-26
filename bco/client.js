// Generated by CoffeeScript 1.6.3
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

    BcoCore.prototype._collides_ob = function(val, val2) {
      return this._collides(val.pos[0], val.pos[1], val.pos[0] + val.size[0], val.pos[1] + val.size[1], val2.pos[0], val2.pos[1], val2.pos[0] + val2.size[0], val2.pos[1] + val2.size[1]);
    };

    BcoCore.prototype.__requestAnimFrame = function(callback) {
      var fn;
      fn = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
      if (fn) {
        return fn(callback);
      }
      return window.setTimeout(callback, 1000 / 30);
    };

    BcoCore.prototype.restart = function() {
      return this._elements = {};
    };

    BcoCore.prototype.add = function(pr) {
      return this._elements[pr.id] = pr;
    };

    BcoCore.prototype.get = function(pr) {
      var elements, id, param, passed, val, value, _ref;
      if (typeof pr === 'number') {
        return this._elements[pr];
      }
      elements = [];
      _ref = this._elements;
      for (id in _ref) {
        val = _ref[id];
        passed = true;
        for (param in pr) {
          value = pr[param];
          if (passed && val[param] !== value) {
            passed = false;
          }
        }
        if (passed) {
          elements.push(val);
        }
      }
      return elements;
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
          val.pos[0] += hypo * Math.cos(rd);
          val.pos[1] += hypo * Math.sin(rd);
          val.pos[0] = Math.round(val.pos[0] * 100) / 100;
          val.pos[1] = Math.round(val.pos[1] * 100) / 100;
          if (val.destroy === 0) {
            _ref1 = this._elements;
            for (id2 in _ref1) {
              val2 = _ref1[id2];
              if (id !== id2 && val2.destroy === 0 && this._collides_ob(val, val2)) {
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
            if (val.angle === 0 && val.pos[0] + val.size[0] > this.size[0]) {
              val.pos[0] = this.size[0] - val.size[0];
            } else if (val.angle === 90 && val.pos[1] + val.size[1] > this.size[1]) {
              val.pos[1] = this.size[1] - val.size[1];
            } else if (val.angle === 180 && val.pos[0] < 0) {
              val.pos[0] = 0;
            } else if (val.angle === 270 && val.pos[1] < 0) {
              val.pos[1] = 0;
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

    Bco.prototype.options = {
      path: ''
    };

    function Bco() {
      Bco.__super__.constructor.apply(this, arguments);
      Backbone.View.prototype.constructor.apply(this, arguments);
      this;
    }

    Bco.prototype.restart = function() {
      var id, val, _ref;
      _ref = this._elements;
      for (id in _ref) {
        val = _ref[id];
        if (val.sprite) {
          this.stage.removeChild(val.sprite);
        }
      }
      return Bco.__super__.restart.apply(this, arguments);
    };

    Bco.prototype.add = function(pr) {
      var sprite;
      Bco.__super__.add.apply(this, arguments);
      sprite = new PIXI.Sprite(PIXI.Texture.fromImage(this.options.path + 'd/img/' + pr.object + '.png'));
      sprite.anchor.x = 0.5;
      sprite.anchor.y = 0.5;
      this._elements[pr.id]['sprite'] = sprite;
      return this.stage.addChild(sprite);
    };

    Bco.prototype.destroy = function(pr) {
      if (this._elements[pr.id].sprite) {
        this.stage.removeChild(this._elements[pr.id].sprite);
      }
      return Bco.__super__.destroy.apply(this, arguments);
    };

    Bco.prototype._updateView = function(dt) {
      Bco.__super__._updateView.apply(this, arguments);
      return this.draw();
    };

    Bco.prototype.draw = function() {
      var id, val, _ref;
      _ref = this._elements;
      for (id in _ref) {
        val = _ref[id];
        if (val.sprite) {
          val.sprite.position.x = val.pos[0] + val.size[0] / 2;
          val.sprite.position.y = val.pos[1] + val.size[1] / 2;
          val.sprite.rotation = val.angle * Math.PI / 180.0;
        }
      }
      return this.renderer.render(this.stage);
    };

    Bco.prototype.render = function() {
      this.stage = new PIXI.Stage;
      this.renderer = PIXI.autoDetectRenderer(416, 416);
      this.$el.append(this.renderer.view);
      return this;
    };

    return Bco;

  })(BcoCore);

}).call(this);