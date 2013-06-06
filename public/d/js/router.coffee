requestAnimFrame =
#  window.requestAnimationFrame ||
#    window.webkitRequestAnimationFrame ||
#    window.mozRequestAnimationFrame ||
#    window.oRequestAnimationFrame ||
#    window.msRequestAnimationFrame ||
  (callback)->
    window.setTimeout(callback, 1000 / 1)




class PreloadImg
  initialize: (what)->



class Sprite
  _indexFrames: 0
  img: null
  pos: [0, 0]
  size: [0, 0]
  speed: 0
  frames: [0]

  constructor: (options={})->
    for op of options
      @op = options[op]
    @img = new Image()
    @img.onload = =>
      @_loaded = true
    @img.src = @url

  update: (dt)->
    @_index += @speed * dt

  render: (c)->
    if !@_loaded
      return
    frame = 0
    if @speed > 0
      frame = @frames[Math.floor(@_index) % @frames.length]
    c.drawImage(@img,
      @pos[0] * (1 + frame),
      @pos[1], @size[0], @size[1],
      0, 0,
      @size[0], @size[1])


class Tank extends Sprite
  url: 'd/img/tank.png'
  size: [32, 32]


App.Router = class Router extends Backbone.View
  lastTime: 0
  elements: {}
  _keys:
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
  events:
    'keydown': (e)->
      for attr, val of @_keys
        if e.keyCode in val.code and not val.active
          val.active = true
          App.socket.send.trigger 'control', {'move': attr, 'active': val.active}
      @
    'keyup': (e)->
      for attr, val of @_keys
        if e.keyCode in val.code and val.active
          val.active = false
          App.socket.send.trigger 'control', {'move': attr, 'active': val.active}
      @

  initialize: ->
    super
    @canvas = $('<canvas width='+(@$el.width()-6)+' height='+(@$el.height()-6)+'>').appendTo(@$el)
    @c = @canvas[0].getContext('2d')
    App.socket.receive.on 'add', (params)=> @add(params)
    App.socket.receive.on 'update', (params)=> @update(params.id, params.attr)
    App.socket.receive.on 'remove', (params)=> @update(params.id)

  add: (params)->
    @elements[params.id] =
      'sprite': new Tank()
      'pos': params.pos
      'speed': 2
      'angle': 0

  update: (id, prop)->
    for attr, val of prop
      @get(id)[attr] = val

  remove: (id)->
    delete @elements[id]

  get: (id)->
    @elements[id]

  _updateView: (dt)->
    for attr, val of @elements
      rd = val.angle * Math.PI/180.0
      hypo = val.speed * dt
      val.pos[0] += hypo * Math.cos(rd)
      val.pos[1] += hypo * Math.sin(rd)
      val.sprite.update(dt)

  render: ->
    @c.fillRect(0, 0, @canvas.width(), @canvas.height())
    for id, el of @elements
      @c.save()
      @c.translate(el.pos[0]+el.sprite.size[0]/2, el.pos[1]+el.sprite.size[1]/2)
      @c.rotate(el.angle * Math.PI/180.0)
      @c.translate(-el.sprite.size[0]/2, -el.sprite.size[1]/2)
      el.sprite.render(@c)
      @c.restore()

  start: ->
    @lastTime = Date.now()
    @process()

  process: ->
    now = Date.now()
    dt = (now - @lastTime) / 1000.0
    @_updateView(dt)
    @render()
    @lastTime = now
    requestAnimFrame =>
      @process()



