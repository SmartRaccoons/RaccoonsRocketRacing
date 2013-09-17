
_ = if typeof require isnt 'undefined' then require('lodash') else window._
Backbone = if typeof require isnt 'undefined' then require('backbone') else window.Backbone



(if typeof module isnt 'undefined' then module.exports else window).BcoCore = class BcoCore
  _.extend @prototype, Backbone.Events

  size: [416, 416]

  constructor: ->
    @_elements = {}

  __requestAnimFrame: (callback)->
    fn = window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame
    if fn
      return fn(callback)
    window.setTimeout(callback, 1000 / 30)

  add: (pr)->
    @_elements[pr.id] = pr

  get: (id)->
    @_elements[id]

  update: (pr)->
    for attr, val of pr
      if attr isnt 'id'
        @_elements[pr['id']][attr] = val

  destroy: (pr)->
    delete @_elements[pr.id]

  start: ->
    @_lastTime = Date.now()
    @_process()

  stop: ->
    @_stop = true

  _process: ->
    now = Date.now()
    dt = (now - @_lastTime) / 1000.0
    if dt>0
      @_updateView(dt)
    @_lastTime = now
    @__requestAnimFrame =>
      if not @_stop
        @_process()

  _updateView: (dt)->
    for id, val of @_elements
      rd = val.angle * Math.PI/180.0
      hypo = val.speed * dt
      val.pos[0] += hypo * Math.cos(rd)
      val.pos[1] += hypo * Math.sin(rd)
    @


(if typeof module isnt 'undefined' then module.exports else window).Bco = class Bco extends BcoCore
  _.extend @prototype, Backbone.View.prototype

  constructor: ->
    super
    Backbone.View.prototype.constructor.apply(this, arguments)
    @

  add: (pr)->
    super
    if ['tank', 'bullet', 'brick'].indexOf(pr.object) isnt -1
      @_elements[pr.id]['sprite'] = new App['Sprite'+pr.object[0].toUpperCase()+pr.object.substr(1)]()

  _updateView: (dt)->
    super
    for id, val of @_elements
      if val.sprite
        val.sprite.update(dt)
    @draw()

  draw: ->
    @c.fillStyle = "rgb(0,0,0)"
    @c.fillRect(0, 0, @canvas.width(), @canvas.height())
    for id, val of @_elements
      if val.sprite
        @c.save()
        @c.translate(val.pos[0]+val.size[0]/2, val.pos[1]+val.size[1]/2)
        @c.rotate(val.angle * Math.PI/180.0)
        @c.translate(-val.size[0]/2, -val.size[1]/2)
        val.sprite.render(@c)
        @c.restore()
    @

  render: ->
    @canvas = $('<canvas width=416 height=416>')
    @$el.append(@canvas)
    @c = @canvas[0].getContext('2d')
    @

