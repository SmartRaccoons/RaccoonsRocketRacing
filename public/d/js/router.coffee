App.Order = class Order
  constructor: ->
    @buffer = []
    @end()
  _last_update: -> @_last = (new Date()).getTime()
  next: (fn, delay=0)->
    @buffer.push({'fn': fn, 'delay': delay})
    @end(true) if not @buffer_execute
  end: (immediate=false)->
    if not immediate
      @_last_update()
    @buffer_execute = true
    if @buffer.length>0
      pr = @buffer.shift()
      diff =  @_last + pr.delay - (new Date()).getTime()
      if diff>0 then setTimeout(pr.fn, diff) else pr.fn()
    else
      @buffer_execute = false


App.Router = class Router extends Backbone.Router

  routes:
    '': 'rooms'
    'm:id': 'map'

  initialize: (op)->
    @$el = op.el
    @room = new App.Rooms
      'stages': 1: 'stage 1'
    @listenTo @room, 'join', (id)=> App.socket.send.trigger 'room:join', id

    @room_new = new App.CreateRoom()
    @listenTo @room_new, 'create', => App.socket.send.trigger 'room:create'

    @game = new window.Bco()
    @game.render()

    @listenTo App.socket.receive, 'login:success', (user)=>
      @room.options.monitor = user.id

    @listenTo App.socket.receive, 'room:list', =>
      @game.stop()
      @$el.removeClass('user-in-room')
    @listenTo App.socket.receive, 'game:start', => @$el.addClass('user-in-room')

    o = new Order()
    @listenTo App.socket.receive, 'all', =>
      args = Array.prototype.slice.call(arguments)
      event = args.shift()
      params = event.split(':')
      if params.length is 2
        if params[0] in ['room', 'game']
          delay = 0
          o.next =>
            @[params[0]][params[1]].apply(@[params[0]], args)
            o.end()
          , delay

    keys =
      'up':
        'active': false
        'code': [38, 74]
      'down':
        'active': false
        'code': [40, 77]
      'left':
        'active': false
        'code': [37, 78]
      'right':
        'active': false
        'code': [39, 188]
      'fire':
        'active': false
        'code': [32, 90]
    control = (code, active)->
     for attr, val of keys
      if code in val.code and val.active isnt active
        val.active = active
        App.socket.send.trigger 'control', {'move': attr, 'active': active}
    $('body').on 'keydown', (e)-> control(e.keyCode, true)
    $('body').on 'keyup', (e)-> control(e.keyCode, false)
    @render()
    @

  rooms: ->

  map: (id)->
    console.info id

  render: ->
    @$el.html """
<div id="user-panel">
  <ul>
    <li>Rules</li>
    <li><a href="#">Battles</a></li>
    <li>My profile</li>
    <li>Best users</li>
  </ul>
  <div class="room-left"><a href="#">"""+_l('Left room')+"""</a></div>
  <div class="info">
    <span class="username">termilv</span>
    <span class="logout">logout</span>
  </div>
</div>

<section class='room'>
  <div class="room-list"></div>
</section>

<section class='game'></section>
"""
    @$el.find('.room-left a').on 'click', -> App.socket.send.trigger 'room:left'
    @room.$el.appendTo(@$el.find('.room-list'))
    @room_new.render().$el.appendTo(@$el.find('.room-list'))
    @game.$el.appendTo(@$el.find('.game'))


  remove: ->
    @$el.remove()
    $('body').off 'keydown'
    $('body').off 'keyup'
    @stopListening()


