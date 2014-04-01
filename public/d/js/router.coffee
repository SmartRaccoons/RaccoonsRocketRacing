
App.Router = class Router extends Backbone.View
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
    @game = new window.Bco()
    @game.render().$el.appendTo(@$el)
    @listenTo App.socket.receive, 'add', (params)=> @game.add(params)
    @listenTo App.socket.receive, 'update', (params)=> @game.update(params)
    @listenTo App.socket.receive, 'destroy', (params)=> @game.destroy(params)
    @listenTo App.socket.receive, 'restart', => @game.restart()
    @game.start()
    @

  control: (code, active)->
    for attr, val of @_keys
      if code in val.code and val.active isnt active
        val.active = active
        App.socket.send.trigger 'control', {'move': attr, 'active': active}
