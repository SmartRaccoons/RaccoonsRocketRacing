(function() {
  var Router, requestAnimFrame,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
    return window.setTimeout(callback, 1000 / 30);
  };

  App.Router = Router = (function(_super) {

    __extends(Router, _super);

    Router.prototype['events'] = {
      'keydown': function(e) {
        return this.control(e.keyCode, true);
      },
      'keyup': function(e) {
        return this.control(e.keyCode, false);
      }
    };

    function Router() {
      var _this = this;
      this._keys = {
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
      Router.__super__.constructor.apply(this, arguments);
      this.game = new window.Bco();
      this.game.render().$el.appendTo(this.$el);
      App.socket.receive.on('add', function(params) {
        return _this.game.add(params);
      });
      App.socket.receive.on('update', function(params) {
        return _this.game.update(params);
      });
      App.socket.receive.on('destroy', function(params) {
        return _this.game.destroy(params);
      });
      App.socket.receive.on('restart', function() {
        return _this.game.restart();
      });
      this.game.start();
    }

    Router.prototype.control = function(code, active) {
      var attr, val, _ref, _results;
      _ref = this._keys;
      _results = [];
      for (attr in _ref) {
        val = _ref[attr];
        if (__indexOf.call(val.code, code) >= 0 && val.active !== active) {
          val.active = active;
          _results.push(App.socket.send.trigger('control', {
            'move': attr,
            'active': active
          }));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    return Router;

  })(Backbone.View);

}).call(this);
