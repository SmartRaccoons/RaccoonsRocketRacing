(function() {
  var Base, Brick, Bullet, Sprite, Tank,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Sprite = Sprite = (function() {

    Sprite.prototype.size = [0, 0];

    Sprite.prototype.pos = [0, 0];

    Sprite.prototype._frames = [0];

    Sprite.prototype._frames_speed = 0;

    Sprite.prototype._frames_index = 0;

    function Sprite() {
      var _this = this;
      if (this._name) {
        this.url = 'd/img/' + this._name + '.png';
      }
      this.img = new Image();
      this.img.onload = function() {
        return _this._loaded = true;
      };
      this.img.src = this.url;
    }

    Sprite.prototype.update = function(dt) {
      if (this._frames_speed > 0) {
        this._frames_index += this._frames_speed * dt;
        if (this._frames_index >= this._frames.length) {
          return this._frames_index = this._frames_index % this._frames.length;
        }
      }
    };

    Sprite.prototype.render = function(c) {
      var frame;
      if (!this._loaded) {
        return;
      }
      frame = this._frames[Math.floor(this._frames_index)];
      return c.drawImage(this.img, this.pos[0] + this.size[0] * frame, this.pos[1], this.size[0], this.size[1], 0, 0, this.size[0], this.size[1]);
    };

    return Sprite;

  })();

  App.SpriteTank = Tank = (function(_super) {

    __extends(Tank, _super);

    function Tank() {
      return Tank.__super__.constructor.apply(this, arguments);
    }

    Tank.prototype.size = [32, 32];

    Tank.prototype._name = 'tank';

    return Tank;

  })(Sprite);

  App.SpriteBullet = Bullet = (function(_super) {

    __extends(Bullet, _super);

    function Bullet() {
      return Bullet.__super__.constructor.apply(this, arguments);
    }

    Bullet.prototype.size = [8, 8];

    Bullet.prototype._name = 'bullet';

    return Bullet;

  })(Sprite);

  App.SpriteBrick = Brick = (function(_super) {

    __extends(Brick, _super);

    function Brick() {
      return Brick.__super__.constructor.apply(this, arguments);
    }

    Brick.prototype.size = [16, 16];

    Brick.prototype._name = 'brick';

    return Brick;

  })(Sprite);

  App.SpriteBase = Base = (function(_super) {

    __extends(Base, _super);

    function Base() {
      return Base.__super__.constructor.apply(this, arguments);
    }

    Base.prototype.size = [32, 32];

    Base.prototype._name = 'base';

    return Base;

  })(Sprite);

}).call(this);
