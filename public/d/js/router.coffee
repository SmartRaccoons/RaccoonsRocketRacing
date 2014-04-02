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


App.Router = class Router extends Backbone.View

  'template': _.template """
                <div class="room-list"></div>
                <section class="game"></section>
              """

  'events':
    'keydown': (e)-> @control(e.keyCode, true)
    'keyup': (e)-> @control(e.keyCode, false)

  initialize: ->
    @_keys =
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
        'code': [32]
    super

    @room = new App.Rooms()

    @game = new window.Bco()
    @game.render()
    #    @game.start()

    @listenTo App.socket.receive, 'login:success', (user)=>
      @room.options.monitor = user.id

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

    @render()
    @

  control: (code, active)->
    for attr, val of @_keys
      if code in val.code and val.active isnt active
        val.active = active
        App.socket.send.trigger 'control', {'move': attr, 'active': active}

  render: ->
    super
    @room.$el.appendTo(@$('.room-list'))
    @game.$el.appendTo(@$('.game'))
