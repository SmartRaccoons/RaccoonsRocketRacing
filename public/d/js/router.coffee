Order = window._Order


App.Router = class Router extends Backbone.Router

  routes:
    '': 'rooms'
    'm:id': 'map'

  initialize: (op)->
    @$el = op.el
    @room = new App.Rooms
      'stages': 1: 'stage 1'
    @listenTo @room, 'open', (id)=> @map(id)

    @room_new = new App.CreateRoom()
    @listenTo @room_new, 'create', => App.socket.send.trigger 'room:create'

    @roompreview = new App.RoomPreview()
    @listenTo @roompreview, 'join', (d)-> App.socket.send.trigger 'room:join', d

    @game = new window.Game()

    @listenTo App.socket.receive, 'login:success', (user)=>
      @user = user
      @room.options.monitor = user.id

    @listenTo App.socket.receive, 'room:list', =>
      @game.stop()
      @$el.removeClass('user-in-room')
    @listenTo App.socket.receive, 'game:start', => @$el.addClass('user-in-room')
    @listenTo App.socket.receive, 'roompreview:show', (data)=> @navigate 'm'+data.id

    o = new Order()
    @listenTo App.socket.receive, 'all', =>
      args = Array.prototype.slice.call(arguments)
      event = args.shift()
      params = event.split(':')
      if params.length is 2
        if params[0] in ['room', 'roompreview', 'game']
          delay = 0
          o.next =>
            @[params[0]][params[1]].apply(@[params[0]], args)
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
    control = (code, active)=>
     for attr, val of keys
      if code in val.code and val.active isnt active
        val.active = active
        App.socket.send.trigger 'control', {'move': attr, 'active': active}
    $('body').on 'keydown', (e)->
      e.preventDefault() #prevent scrolling
      control(e.keyCode, true)
    $('body').on 'keyup', (e)-> control(e.keyCode, false)
    @render()
    @

  rooms: ->

  map: (id)->
    load = => App.socket.send.trigger 'room:open', id
    if @user
      load()
    else
      @listenToOnce App.socket.receive, 'login:success', load

  render: ->
    @$el.html """
<div id="user-panel">
  <div class="room-left"><a href="#">"""+_l('Left room')+"""</a></div>
  <!--<div class="info">
    <span class="username">fake name</span>
    <span class="logout">logout</span>
  </div>-->
</div>

<section class='room'>
  <div class="room-list"></div>
</section>

<section class='game'>
</section>
"""
    @$el.find('.room-left a').on 'click', -> App.socket.send.trigger 'room:left'
    @room.$el.appendTo(@$el.find('.room-list'))
    @room_new.render().$el.appendTo(@$el.find('.room-list'))
    @roompreview.$el.appendTo(@$el.find('.room'))
    @game.$el.appendTo(@$el.find('.game'))
    @game.render()
#    $("""
#    div class="users">
#      <h1>Super mapka</h1>
#      <input type="text" value="http://countertank.com/#m3" />
#      <ol>
#        <li>
#            <strong>Super user</strong>
#        </li>
#      </ol>
#    </div>
#    """).appendTo(@$el.find('.game'))


  remove: ->
    @$el.remove()
    $('body').off 'keydown'
    $('body').off 'keyup'
    @stopListening()


