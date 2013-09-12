requestAnimFrame =
  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
  (callback)->
    window.setTimeout(callback, 1000 / 30)


App.Router = class Router extends Backbone.View
  'events':
    'keydown': (e)-> @control(e.keyCode, true)
    'keyup': (e)-> @control(e.keyCode, false)

  constructor: ->
    @_keys =
      'up':
        'active': false
        'code': [38]
      'down':
        'active': false
        'code': [40]
      'left':
        'active': false
        'code': [37]
      'right':
        'active': false
        'code': [39]
      'fire':
        'active': false
        'code': [32]
    super
    @game = new window.Bco()
    @game.render().$el.appendTo(@$el)
    App.socket.receive.on 'add', (params)=> @game.add(params)
    App.socket.receive.on 'update', (params)=> @game.update(params)
    App.socket.receive.on 'destroy', (params)=> @game.destroy(params)
    @game.start()

  control: (code, active)->
    for attr, val of @_keys
      if code in val.code and val.active isnt active
        val.active = active
        App.socket.send.trigger 'control', {'move': attr, 'active': active}
