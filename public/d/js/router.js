// Generated by CoffeeScript 1.6.3
(function() {
  var Order, Router, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  App.Order = Order = (function() {
    function Order() {
      this.buffer = [];
      this.end();
    }

    Order.prototype._last_update = function() {
      return this._last = (new Date()).getTime();
    };

    Order.prototype.next = function(fn, delay) {
      if (delay == null) {
        delay = 0;
      }
      this.buffer.push({
        'fn': fn,
        'delay': delay
      });
      if (!this.buffer_execute) {
        return this.end(true);
      }
    };

    Order.prototype.end = function(immediate) {
      var diff, pr;
      if (immediate == null) {
        immediate = false;
      }
      if (!immediate) {
        this._last_update();
      }
      this.buffer_execute = true;
      if (this.buffer.length > 0) {
        pr = this.buffer.shift();
        diff = this._last + pr.delay - (new Date()).getTime();
        if (diff > 0) {
          return setTimeout(pr.fn, diff);
        } else {
          return pr.fn();
        }
      } else {
        return this.buffer_execute = false;
      }
    };

    return Order;

  })();

  App.Router = Router = (function(_super) {
    __extends(Router, _super);

    function Router() {
      _ref = Router.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Router.prototype['template'] = _.template("<div class=\"room-list\"></div>\n<section class=\"game\"></section>");

    Router.prototype['events'] = {
      'keydown': function(e) {
        return this.control(e.keyCode, true);
      },
      'keyup': function(e) {
        return this.control(e.keyCode, false);
      }
    };

    Router.prototype.initialize = function() {
      var o,
        _this = this;
      this._keys = {
        'up': {
          'active': false,
          'code': [38, 74]
        },
        'down': {
          'active': false,
          'code': [40, 77]
        },
        'left': {
          'active': false,
          'code': [37, 78]
        },
        'right': {
          'active': false,
          'code': [39, 188]
        },
        'fire': {
          'active': false,
          'code': [32]
        }
      };
      Router.__super__.initialize.apply(this, arguments);
      this.room = new App.Rooms();
      this.game = new window.Bco();
      this.game.render();
      this.listenTo(App.socket.receive, 'login:success', function(user) {
        return _this.room.options.monitor = user.id;
      });
      o = new Order();
      this.listenTo(App.socket.receive, 'all', function() {
        var args, delay, event, params, _ref1;
        args = Array.prototype.slice.call(arguments);
        event = args.shift();
        params = event.split(':');
        if (params.length === 2) {
          if ((_ref1 = params[0]) === 'room' || _ref1 === 'game') {
            delay = 0;
            return o.next(function() {
              _this[params[0]][params[1]].apply(_this[params[0]], args);
              return o.end();
            }, delay);
          }
        }
      });
      this.render();
      return this;
    };

    Router.prototype.control = function(code, active) {
      var attr, val, _ref1, _results;
      _ref1 = this._keys;
      _results = [];
      for (attr in _ref1) {
        val = _ref1[attr];
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

    Router.prototype.render = function() {
      Router.__super__.render.apply(this, arguments);
      this.room.$el.appendTo(this.$('.room-list'));
      return this.game.$el.appendTo(this.$('.game'));
    };

    return Router;

  })(Backbone.View);

}).call(this);
