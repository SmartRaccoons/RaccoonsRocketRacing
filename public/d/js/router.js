(function() {
  var PreloadImg, Router, Sprite, Tank, requestAnimFrame,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
    return window.setTimeout(callback, 1000 / 30);
  };

  PreloadImg = (function() {

    function PreloadImg() {}

    PreloadImg.prototype.initialize = function(what) {};

    return PreloadImg;

  })();

  Sprite = (function() {

    Sprite.prototype._indexFrames = 0;

    Sprite.prototype.img = null;

    Sprite.prototype.pos = [0, 0];

    Sprite.prototype.size = [0, 0];

    Sprite.prototype.speed = 0;

    Sprite.prototype.frames = [0];

    function Sprite(options) {
      var op,
        _this = this;
      if (options == null) {
        options = {};
      }
      for (op in options) {
        this.op = options[op];
      }
      this.img = new Image();
      this.img.onload = function() {
        return _this._loaded = true;
      };
      this.img.src = this.url;
    }

    Sprite.prototype.update = function(dt) {
      return this._index += this.speed * dt;
    };

    Sprite.prototype.render = function(c) {
      var frame;
      if (!this._loaded) {
        return;
      }
      frame = 0;
      if (this.speed > 0) {
        frame = this.frames[Math.floor(this._index) % this.frames.length];
      }
      return c.drawImage(this.img, this.pos[0] * (1 + frame), this.pos[1], this.size[0], this.size[1], 0, 0, this.size[0], this.size[1]);
    };

    return Sprite;

  })();

  Tank = (function(_super) {

    __extends(Tank, _super);

    function Tank() {
      return Tank.__super__.constructor.apply(this, arguments);
    }

    Tank.prototype.url = 'd/img/tank.png';

    Tank.prototype.size = [32, 32];

    return Tank;

  })(Sprite);

  App.Router = Router = (function(_super) {

    __extends(Router, _super);

    function Router() {
      return Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.lastTime = 0;

    Router.prototype.elements = {};

    Router.prototype._keys = {
      'up': {
        'active': false,
        'code': [38]
      },
      'down': {
        'active': false,
        'code': [40]
      },
      'left': {
        'active': false,
        'code': [37]
      },
      'right': {
        'active': false,
        'code': [39]
      },
      'fire': {
        'active': false,
        'code': [32]
      }
    };

    Router.prototype.events = {
      'keydown': function(e) {
        var attr, val, _ref, _ref1;
        _ref = this._keys;
        for (attr in _ref) {
          val = _ref[attr];
          if ((_ref1 = e.keyCode, __indexOf.call(val.code, _ref1) >= 0) && !val.active) {
            val.active = true;
            App.socket.send.trigger('control', {
              'move': attr,
              'active': val.active
            });
          }
        }
        return this;
      },
      'keyup': function(e) {
        var attr, val, _ref, _ref1;
        _ref = this._keys;
        for (attr in _ref) {
          val = _ref[attr];
          if ((_ref1 = e.keyCode, __indexOf.call(val.code, _ref1) >= 0) && val.active) {
            val.active = false;
            App.socket.send.trigger('control', {
              'move': attr,
              'active': val.active
            });
          }
        }
        return this;
      }
    };

    Router.prototype.initialize = function() {
      var _this = this;
      Router.__super__.initialize.apply(this, arguments);
      this.canvas = $('<canvas width=' + (this.$el.width() - 6) + ' height=' + (this.$el.height() - 6) + '>').appendTo(this.$el);
      this.c = this.canvas[0].getContext('2d');
      App.socket.receive.on('add', function(params) {
        return _this.add(params);
      });
      App.socket.receive.on('update', function(params) {
        return _this.update(params);
      });
      return App.socket.receive.on('remove', function(params) {
        return _this.remove(params.id);
      });
    };

    Router.prototype.add = function(params) {
      return this.elements[params.id] = {
        'sprite': new Tank(),
        'pos': params.pos,
        'speed': 0,
        'angle': 0
      };
    };

    Router.prototype.update = function(prop) {
      var attr, val, _results;
      _results = [];
      for (attr in prop) {
        val = prop[attr];
        if (attr !== 'id') {
          _results.push(this.elements[prop['id']][attr] = val);
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Router.prototype.remove = function(id) {
      return delete this.elements[id];
    };

    Router.prototype._updateView = function(dt) {
      var attr, hypo, rd, val, _ref, _results;
      _ref = this.elements;
      _results = [];
      for (attr in _ref) {
        val = _ref[attr];
        rd = val.angle * Math.PI / 180.0;
        hypo = val.speed * dt;
        val.pos[0] += hypo * Math.cos(rd);
        val.pos[1] += hypo * Math.sin(rd);
        _results.push(val.sprite.update(dt));
      }
      return _results;
    };

    Router.prototype.render = function() {
      var el, id, _ref, _results;
      this.c.fillRect(0, 0, this.canvas.width(), this.canvas.height());
      _ref = this.elements;
      _results = [];
      for (id in _ref) {
        el = _ref[id];
        this.c.save();
        this.c.translate(el.pos[0] + el.sprite.size[0] / 2, el.pos[1] + el.sprite.size[1] / 2);
        this.c.rotate(el.angle * Math.PI / 180.0);
        this.c.translate(-el.sprite.size[0] / 2, -el.sprite.size[1] / 2);
        el.sprite.render(this.c);
        _results.push(this.c.restore());
      }
      return _results;
    };

    Router.prototype.start = function() {
      this.lastTime = Date.now();
      return this.process();
    };

    Router.prototype.process = function() {
      var dt, now,
        _this = this;
      now = Date.now();
      dt = (now - this.lastTime) / 1000.0;
      this._updateView(dt);
      this.render();
      this.lastTime = now;
      return requestAnimFrame(function() {
        return _this.process();
      });
    };

    return Router;

  })(Backbone.View);

}).call(this);
