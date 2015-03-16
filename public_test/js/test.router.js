// Generated by CoffeeScript 1.8.0
(function() {
  describe('Router', function() {
    var clock, keyboard_down, keyboard_up, r;
    r = null;
    keyboard_up = {};
    keyboard_down = {};
    clock = null;
    beforeEach(function() {
      r = new App.Router({
        el: $('<div id="wrap">').appendTo('body')
      });
      keyboard_up.up = jQuery.Event("keyup");
      keyboard_up.up.which = keyboard_up.up.keyCode = 38;
      keyboard_up.down = jQuery.Event("keyup");
      keyboard_up.down.which = keyboard_up.down.keyCode = 40;
      keyboard_up.left = jQuery.Event("keyup");
      keyboard_up.left.which = keyboard_up.left.keyCode = 37;
      keyboard_up.right = jQuery.Event("keyup");
      keyboard_up.right.which = keyboard_up.right.keyCode = 39;
      keyboard_up.fire = jQuery.Event("keyup");
      keyboard_up.fire.which = keyboard_up.fire.keyCode = 32;
      keyboard_down.up = jQuery.Event("keydown");
      keyboard_down.up.which = keyboard_down.up.keyCode = 38;
      keyboard_down.down = jQuery.Event("keydown");
      keyboard_down.down.which = keyboard_down.down.keyCode = 40;
      keyboard_down.left = jQuery.Event("keydown");
      keyboard_down.left.which = keyboard_down.left.keyCode = 37;
      keyboard_down.right = jQuery.Event("keydown");
      keyboard_down.right.which = keyboard_down.right.keyCode = 39;
      keyboard_down.fire = jQuery.Event("keydown");
      return keyboard_down.fire.which = keyboard_down.fire.keyCode = 32;
    });
    afterEach(function() {
      return r.remove();
    });
    describe('functional', function() {
      it('map request', function() {
        var spy;
        spy = sinon.spy();
        App.socket.send.on('room:open', spy);
        App.socket.receive.trigger('login:success', {
          'id': 1,
          'name': 'beni'
        });
        r.map(2);
        expect(spy.callCount).to.be(1);
        return expect(spy.getCall(0).args[0]).to.be(2);
      });
      return it('map request not logged in', function() {
        var spy;
        spy = sinon.spy();
        App.socket.send.on('room:open', spy);
        r.map(2);
        expect(spy.callCount).to.be(0);
        App.socket.receive.trigger('login:success', {
          'id': 1,
          'name': 'beni'
        });
        expect(spy.callCount).to.be(1);
        App.socket.receive.trigger('login:success', {
          'id': 1,
          'name': 'beni'
        });
        return expect(spy.callCount).to.be(1);
      });
    });
    describe('moving', function() {
      beforeEach(function() {
        r.user = {
          id: 5
        };
        return r.game.user_action = sinon.spy();
      });
      it('keydown', function() {
        var spy;
        spy = sinon.spy();
        App.socket.send.on('control', spy);
        $('#wrap').trigger(keyboard_down.up);
        expect(spy.getCall(0).args[0]).to.be.eql({
          'move': 'up',
          'active': true
        });
        expect(r.game.user_action.getCall(0).args[0], 5);
        expect(r.game.user_action.getCall(0).args[1], 'up');
        expect(r.game.user_action.getCall(0).args[2], true);
        $('#wrap').trigger(keyboard_down.down);
        expect(spy.getCall(1).args[0]).to.be.eql({
          'move': 'down',
          'active': true
        });
        $('#wrap').trigger(keyboard_down.left);
        expect(spy.getCall(2).args[0]).to.be.eql({
          'move': 'left',
          'active': true
        });
        $('#wrap').trigger(keyboard_down.right);
        expect(spy.getCall(3).args[0]).to.be.eql({
          'move': 'right',
          'active': true
        });
        $('#wrap').trigger(keyboard_down.fire);
        expect(spy.getCall(4).args[0]).to.be.eql({
          'move': 'fire',
          'active': true
        });
        return expect(spy.callCount).to.be(5);
      });
      it('keydown 2x times', function() {
        var spy;
        spy = sinon.spy();
        App.socket.send.on('control', spy);
        $('#wrap').trigger(keyboard_down.up);
        $('#wrap').trigger(keyboard_down.up);
        return expect(spy.callCount).to.be(1);
      });
      it('keyup', function() {
        var spy;
        spy = sinon.spy();
        $('#wrap').trigger(keyboard_down.up);
        $('#wrap').trigger(keyboard_down.down);
        $('#wrap').trigger(keyboard_down.left);
        $('#wrap').trigger(keyboard_down.right);
        $('#wrap').trigger(keyboard_down.fire);
        App.socket.send.on('control', spy);
        $('#wrap').trigger(keyboard_up.up);
        expect(spy.getCall(0).args[0]).to.be.eql({
          'move': 'up',
          'active': false
        });
        $('#wrap').trigger(keyboard_up.down);
        expect(spy.getCall(1).args[0]).to.be.eql({
          'move': 'down',
          'active': false
        });
        $('#wrap').trigger(keyboard_up.left);
        expect(spy.getCall(2).args[0]).to.be.eql({
          'move': 'left',
          'active': false
        });
        $('#wrap').trigger(keyboard_up.right);
        expect(spy.getCall(3).args[0]).to.be.eql({
          'move': 'right',
          'active': false
        });
        $('#wrap').trigger(keyboard_up.fire);
        expect(spy.getCall(4).args[0]).to.be.eql({
          'move': 'fire',
          'active': false
        });
        return expect(spy.callCount).to.be(5);
      });
      return it('keyup 2x times', function() {
        var spy;
        spy = sinon.spy();
        $('#wrap').trigger(keyboard_down.up);
        App.socket.send.on('control', spy);
        $('#wrap').trigger(keyboard_up.up);
        $('#wrap').trigger(keyboard_up.up);
        return expect(spy.callCount).to.be(1);
      });
    });
    describe('authorize', function() {
      return it('login:success', function() {
        App.socket.receive.trigger('login:success', {
          'id': 1,
          'name': 'beni'
        });
        return expect(r.room.options.monitor).to.be(1);
      });
    });
    describe('rooms', function() {
      it('room:functions', function() {
        expect($('.room-list ol>li').length).to.be(0);
        App.socket.receive.trigger('room:list', [
          {
            'id': 1,
            stage: 1
          }
        ]);
        expect($('.room-list ol>li').length).to.be(1);
        App.socket.receive.trigger('room:room_add', {
          'id': 2,
          stage: 1
        });
        return expect($('.room-list ol>li').length).to.be(2);
      });
      it('room:create', function() {
        var spy;
        spy = sinon.spy();
        App.socket.send.on('room:create', spy);
        $('.room-new-add button').click();
        return expect(spy.callCount).to.be(1);
      });
      it('room:open', function() {
        r.map = sinon.spy();
        App.socket.receive.trigger('room:list', [
          {
            'id': 1,
            'stage': 1
          }, {
            'id': 2,
            'stage': 1
          }
        ]);
        $('.room-list ol>li:first-child').click();
        expect(r.map.callCount).to.be(1);
        return expect(r.map.getCall(0).args[0]).to.be(2);
      });
      return it('room:left', function() {
        var spy;
        spy = sinon.spy();
        App.socket.send.on('room:left', spy);
        $('.room-left a').click();
        return expect(spy.callCount).to.be(1);
      });
    });
    describe('room preview', function() {
      it('preview', function() {
        App.socket.receive.trigger('roompreview:show', {
          'id': 10,
          'name': 'ben',
          'max': 2,
          'stage': 1,
          'users': [],
          'teams': []
        });
        return expect($('.room .preview strong').html()).to.be('ben');
      });
      it('join event', function() {
        var spy;
        App.socket.receive.trigger('roompreview:show', {
          'id': 10,
          'name': 'ben',
          'max': 2,
          'stage': 1,
          'users': [],
          'teams': [[], []]
        });
        spy = sinon.spy();
        App.socket.send.on('room:join', spy);
        $('.room .teams>div:nth-child(1) button').click();
        return expect(spy.getCall(0).args[0]).to.be.eql({
          'room': 10,
          'team': 0
        });
      });
      return it('trigger navigation', function() {
        r.navigate = sinon.spy();
        App.socket.receive.trigger('roompreview:show', {
          'id': 11,
          'name': 'ben',
          'max': 2,
          'stage': 1,
          'users': [],
          'teams': [[], []]
        });
        expect(r.navigate.callCount).to.be(1);
        return expect(r.navigate.getCall(0).args[0]).to.be('m11');
      });
    });
    return describe('game', function() {
      it('start', function() {
        r.game = {
          'start': sinon.spy(),
          'stop': sinon.spy()
        };
        expect(r.$el.hasClass('user-in-room')).not.be.ok();
        App.socket.receive.trigger('game:start');
        expect(r.$el.hasClass('user-in-room')).to.be.ok();
        App.socket.receive.trigger('room:list');
        expect(r.game.stop.callCount).to.be(1);
        return expect(r.$el.hasClass('user-in-room')).not.be.ok();
      });
      return it('events', function() {
        r.game = {
          'add': sinon.spy(),
          'update': sinon.spy(),
          'destroy': sinon.spy(),
          'restart': sinon.spy()
        };
        App.socket.receive.trigger('game:add', {
          'id': 1,
          'pos': [0, 0],
          'object': 'bullet'
        });
        expect(r.game.add.getCall(0).args[0].id).to.be(1);
        App.socket.receive.trigger('game:update', {
          'id': 1,
          'size': 2
        });
        expect(r.game.update.getCall(0).args[0].size).to.be(2);
        App.socket.receive.trigger('game:destroy', {
          'id': 1
        });
        expect(r.game.destroy.getCall(0).args[0].id).to.be(1);
        App.socket.receive.trigger('game:restart');
        return expect(r.game.restart.callCount).to.be(1);
      });
    });
  });

}).call(this);

//# sourceMappingURL=test.router.js.map
