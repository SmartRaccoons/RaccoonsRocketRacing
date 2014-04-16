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

    Router.prototype.routes = {
      '': 'rooms',
      'm:id': 'map'
    };

    Router.prototype.initialize = function(op) {
      var control, keys, o,
        _this = this;
      this.$el = op.el;
      this.room = new App.Rooms({
        'stages': {
          1: 'stage 1'
        }
      });
      this.listenTo(this.room, 'open', function(id) {
        return _this.map(id);
      });
      this.room_new = new App.CreateRoom();
      this.listenTo(this.room_new, 'create', function() {
        return App.socket.send.trigger('room:create');
      });
      this.roompreview = new App.RoomPreview();
      this.listenTo(this.roompreview, 'join', function(d) {
        return App.socket.send.trigger('room:join', d);
      });
      this.game = new window.Bco();
      this.game.render();
      this.listenTo(App.socket.receive, 'login:success', function(user) {
        _this.user = user;
        return _this.room.options.monitor = user.id;
      });
      this.listenTo(App.socket.receive, 'room:list', function() {
        _this.game.stop();
        return _this.$el.removeClass('user-in-room');
      });
      this.listenTo(App.socket.receive, 'game:start', function() {
        return _this.$el.addClass('user-in-room');
      });
      this.listenTo(App.socket.receive, 'roompreview:show', function(data) {
        return _this.navigate('m' + data.id);
      });
      o = new Order();
      this.listenTo(App.socket.receive, 'all', function() {
        var args, delay, event, params, _ref1;
        args = Array.prototype.slice.call(arguments);
        event = args.shift();
        params = event.split(':');
        if (params.length === 2) {
          if ((_ref1 = params[0]) === 'room' || _ref1 === 'roompreview' || _ref1 === 'game') {
            delay = 0;
            return o.next(function() {
              _this[params[0]][params[1]].apply(_this[params[0]], args);
              return o.end();
            }, delay);
          }
        }
      });
      keys = {
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
          'code': [32, 90]
        }
      };
      control = function(code, active) {
        var attr, val, _results;
        _results = [];
        for (attr in keys) {
          val = keys[attr];
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
      $('body').on('keydown', function(e) {
        return control(e.keyCode, true);
      });
      $('body').on('keyup', function(e) {
        return control(e.keyCode, false);
      });
      this.render();
      return this;
    };

    Router.prototype.rooms = function() {};

    Router.prototype.map = function(id) {
      var load,
        _this = this;
      load = function() {
        return App.socket.send.trigger('room:open', id);
      };
      if (this.user) {
        return load();
      } else {
        return this.listenToOnce(App.socket.receive, 'login:success', load);
      }
    };

    Router.prototype.render = function() {
      this.$el.html("<div id=\"user-panel\">\n  <ul>\n    <li>Rules</li>\n    <li><a href=\"#\">Battles</a></li>\n    <li>My profile</li>\n    <li>Best users</li>\n  </ul>\n  <div class=\"room-left\"><a href=\"#\">" + _l('Left room') + "</a></div>\n<div class=\"info\">\n  <span class=\"username\">termilv</span>\n  <span class=\"logout\">logout</span>\n</div>\n</div>\n\n<section class='room'>\n<div class=\"room-list\"></div>\n</section>\n\n<section class='game'></section>");
      this.$el.find('.room-left a').on('click', function() {
        return App.socket.send.trigger('room:left');
      });
      this.room.$el.appendTo(this.$el.find('.room-list'));
      this.room_new.render().$el.appendTo(this.$el.find('.room-list'));
      this.roompreview.$el.appendTo(this.$el.find('.room'));
      return this.game.$el.appendTo(this.$el.find('.game'));
    };

    Router.prototype.remove = function() {
      this.$el.remove();
      $('body').off('keydown');
      $('body').off('keyup');
      return this.stopListening();
    };

    return Router;

  })(Backbone.Router);

}).call(this);
