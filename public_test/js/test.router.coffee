describe 'Router', ->
  r = null
  keyboard_up = {}
  keyboard_down = {}
  clock = null
  beforeEach ->
    r = new App.Router({el: $('<div id="wrap">').appendTo('body')})
    keyboard_up.up = jQuery.Event("keyup")
    keyboard_up.up.which = keyboard_up.up.keyCode = 38
    keyboard_up.down = jQuery.Event("keyup")
    keyboard_up.down.which = keyboard_up.down.keyCode = 40
    keyboard_up.left = jQuery.Event("keyup")
    keyboard_up.left.which = keyboard_up.left.keyCode = 37
    keyboard_up.right = jQuery.Event("keyup")
    keyboard_up.right.which = keyboard_up.right.keyCode = 39
    keyboard_up.fire = jQuery.Event("keyup")
    keyboard_up.fire.which = keyboard_up.fire.keyCode = 32
    keyboard_down.up = jQuery.Event("keydown")
    keyboard_down.up.which = keyboard_down.up.keyCode = 38
    keyboard_down.down = jQuery.Event("keydown")
    keyboard_down.down.which = keyboard_down.down.keyCode = 40
    keyboard_down.left = jQuery.Event("keydown")
    keyboard_down.left.which = keyboard_down.left.keyCode = 37
    keyboard_down.right = jQuery.Event("keydown")
    keyboard_down.right.which = keyboard_down.right.keyCode = 39
    keyboard_down.fire = jQuery.Event("keydown")
    keyboard_down.fire.which = keyboard_down.fire.keyCode = 32

  afterEach ->
    r.remove()

  describe 'moving', ->

    it 'keydown', ->
      spy = sinon.spy()
      App.socket.send.on 'control', spy
      $('#wrap').trigger(keyboard_down.up)
      expect(spy.getCall(0).args[0]).to.be.eql({'move': 'up', 'active': true})
      $('#wrap').trigger(keyboard_down.down)
      expect(spy.getCall(1).args[0]).to.be.eql({'move': 'down', 'active': true})
      $('#wrap').trigger(keyboard_down.left)
      expect(spy.getCall(2).args[0]).to.be.eql({'move': 'left', 'active': true})
      $('#wrap').trigger(keyboard_down.right)
      expect(spy.getCall(3).args[0]).to.be.eql({'move': 'right', 'active': true})
      $('#wrap').trigger(keyboard_down.fire)
      expect(spy.getCall(4).args[0]).to.be.eql({'move': 'fire', 'active': true})
      expect(spy.callCount).to.be(5)

    it 'keydown 2x times', ->
      spy = sinon.spy()
      App.socket.send.on 'control', spy
      $('#wrap').trigger(keyboard_down.up)
      $('#wrap').trigger(keyboard_down.up)
      expect(spy.callCount).to.be(1)
      
    it 'keyup', ->
      spy = sinon.spy()
      $('#wrap').trigger(keyboard_down.up)
      $('#wrap').trigger(keyboard_down.down)
      $('#wrap').trigger(keyboard_down.left)
      $('#wrap').trigger(keyboard_down.right)
      $('#wrap').trigger(keyboard_down.fire)
      App.socket.send.on 'control', spy
      $('#wrap').trigger(keyboard_up.up)
      expect(spy.getCall(0).args[0]).to.be.eql({'move': 'up', 'active': false})
      $('#wrap').trigger(keyboard_up.down)
      expect(spy.getCall(1).args[0]).to.be.eql({'move': 'down', 'active': false})
      $('#wrap').trigger(keyboard_up.left)
      expect(spy.getCall(2).args[0]).to.be.eql({'move': 'left', 'active': false})
      $('#wrap').trigger(keyboard_up.right)
      expect(spy.getCall(3).args[0]).to.be.eql({'move': 'right', 'active': false})
      $('#wrap').trigger(keyboard_up.fire)
      expect(spy.getCall(4).args[0]).to.be.eql({'move': 'fire', 'active': false})
      expect(spy.callCount).to.be(5)

    it 'keyup 2x times', ->
      spy = sinon.spy()
      $('#wrap').trigger(keyboard_down.up)
      App.socket.send.on 'control', spy
      $('#wrap').trigger(keyboard_up.up)
      $('#wrap').trigger(keyboard_up.up)
      expect(spy.callCount).to.be(1)


  describe 'authorize', ->
    it 'login:success', ->
      App.socket.receive.trigger 'login:success', {'id': 1, 'name': 'beni'}
      expect(r.room.options.monitor).to.be(1)


  describe 'rooms', ->
    it 'room:functions', ->
      expect(r.$('.room-list ol>li').length).to.be(0)
      App.socket.receive.trigger 'room:list', [{'id': 1, stage: 1}]
      expect(r.$('.room-list ol>li').length).to.be(1)
      App.socket.receive.trigger 'room:room_add', {'id': 2, stage: 1}
      expect($('.room-list ol>li').length).to.be(2)

    it 'room:create', ->
      spy = sinon.spy()
      App.socket.send.on 'room:create', spy
      r.$('.room-new-add button').click()
      expect(spy.callCount).to.be(1)

#    it 'room:join', ->
#      spy = sinon.spy()
#      App.socket.send.on 'room:join', spy
#      App.socket.receive.trigger 'room:list', [{'id': 1}, {'id': 2}]
#      r.$('.room-list ol>li:first-child button').click()
#      expect(spy.callCount).to.be(1)
#      expect(spy.getCall(0).args[0]).to.be(2)

    it 'room:left', ->
      spy = sinon.spy()
      App.socket.send.on 'room:left', spy
      r.$('.room-left button').click()
      expect(spy.callCount).to.be(1)


  describe 'game', ->
    it 'start', ->
      r.game = {'start': sinon.spy(), 'stop': sinon.spy()}
      expect(r.$el.hasClass('user-in-room')).not.be.ok()
      App.socket.receive.trigger 'game:start'
      expect(r.$el.hasClass('user-in-room')).to.be.ok()
      App.socket.receive.trigger 'room:list'
      expect(r.game.stop.callCount).to.be(1)
      expect(r.$el.hasClass('user-in-room')).not.be.ok()

#    it 'init', ->
#      expect(r.$('canvas').length>0).to.be.ok()

#    it 'start', ->
#      expect(r.game._lastTime).to.be.ok()

    it 'events', ->
      r.game = {'add': sinon.spy(), 'update': sinon.spy(), 'destroy': sinon.spy(), 'restart': sinon.spy()}
      App.socket.receive.trigger 'game:add', {'id': 1, 'pos': [0, 0], 'object': 'bullet'}
      expect(r.game.add.getCall(0).args[0].id).to.be(1)
      App.socket.receive.trigger 'game:update', {'id': 1, 'size': 2}
      expect(r.game.update.getCall(0).args[0].size).to.be(2)
      App.socket.receive.trigger 'game:destroy', {'id': 1}
      expect(r.game.destroy.getCall(0).args[0].id).to.be(1)
      App.socket.receive.trigger 'game:restart'
      expect(r.game.restart.callCount).to.be(1)

      
