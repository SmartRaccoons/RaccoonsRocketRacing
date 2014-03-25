
_ = if typeof require isnt 'undefined' then require('lodash') else window._
Backbone = if typeof require isnt 'undefined' then require('backbone') else window.Backbone



(if typeof module isnt 'undefined' then module.exports else window).BcoCore = class BcoCore
  _.extend @prototype, Backbone.Events

  size: [416, 416]

  constructor: ->
    @_elements = {}

  _collides: (x, y, r, b, x2, y2, r2, b2)->
    !(r <= x2 || x >= r2 || b <= y2 || y >= b2)
#    !(r < x2 || x > r2 || b < y2 || y > b2)

  _collides_ob: (val, val2)->
    @_collides(val.pos[0], val.pos[1], val.pos[0]+val.size[0], val.pos[1]+val.size[1],
                        val2.pos[0], val2.pos[1], val2.pos[0]+val2.size[0], val2.pos[1]+val2.size[1])

  __requestAnimFrame: (callback)->
    fn = window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame
    if fn
      return fn(callback)
    window.setTimeout(callback, 1000 / 30)

  restart: ->
    @_elements = {}

  add: (pr)->
    @_elements[pr.id] = pr

  get: (pr)->
    if typeof pr is 'number'
      return @_elements[pr]
    elements = []
    for id, val of @_elements
      passed = true
      for param, value of pr
        if passed and val[param] isnt value
          passed = false
      if passed
        elements.push(val)
    return elements

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
      if val.speed > 0
        rd = val.angle * Math.PI/180.0
        hypo = val.speed * dt
        val.pos[0] += hypo * Math.cos(rd)
        val.pos[1] += hypo * Math.sin(rd)
        val.pos[0] = Math.round(val.pos[0] * 100)/100
        val.pos[1] = Math.round(val.pos[1] * 100)/100
        if val.destroy is 0
          for id2, val2 of @_elements
            if id isnt id2 and val2.destroy is 0 and @_collides_ob(val, val2)
              if val.angle is 0
                val.pos[0] = val2.pos[0]-val.size[0]
              else if val.angle is 90
                val.pos[1] = val2.pos[1]-val.size[1]
              else if val.angle is 180
                val.pos[0] = val2.pos[0]+val2.size[0]
              else if val.angle is 270
                val.pos[1] = val2.pos[1]+val2.size[1]
          if val.angle is 0 and val.pos[0]+val.size[0]>@size[0]
            val.pos[0] = @size[0]-val.size[0]
          else if val.angle is 90 and val.pos[1]+val.size[1]>@size[1]
            val.pos[1] = @size[1]-val.size[1]
          else if val.angle is 180 and val.pos[0]<0
            val.pos[0] = 0
          else if val.angle is 270 and val.pos[1]<0
            val.pos[1] = 0
    @


(if typeof module isnt 'undefined' then module.exports else window).Bco = class Bco extends BcoCore
  _.extend @prototype, Backbone.View.prototype
  options:
    path: ''

  constructor: ->
    super
    Backbone.View.prototype.constructor.apply(this, arguments)
    @

  restart: ->
    for id, val of @_elements
      if val.sprite
        @stage.removeChild(val.sprite)
    super

  add: (pr)->
    super
    sprite = new PIXI.Sprite(PIXI.Texture.fromImage(@options.path+'d/img/'+pr.object+'.png'))
    sprite.anchor.x = 0.5
    sprite.anchor.y = 0.5
    @_elements[pr.id]['sprite'] = sprite
    @stage.addChild(sprite)

  destroy: (pr)->
    if @_elements[pr.id].sprite
      @stage.removeChild(@_elements[pr.id].sprite)
    super

  _updateView: (dt)->
    super
    @draw()

  draw: ->
    for id, val of @_elements
      if val.sprite
        val.sprite.position.x = val.pos[0] + val.size[0]/2
        val.sprite.position.y = val.pos[1] + val.size[1]/2
        val.sprite.rotation = val.angle * Math.PI/180.0
    @renderer.render(@stage)

  render: ->
    @stage = new PIXI.Stage
    @renderer = PIXI.autoDetectRenderer(416, 416)
    @$el.append(@renderer.view)
    @



#(if typeof module isnt 'undefined' then module.exports else window).Bco = class Bco extends BcoCore
#  _.extend @prototype, Backbone.View.prototype
#
#  constructor: ->
#    super
#    Backbone.View.prototype.constructor.apply(this, arguments)
#    @
#
#  add: (pr)->
#    super
#    @_elements[pr.id]['sprite'] = new App['Sprite'+pr.object[0].toUpperCase()+pr.object.substr(1)]()
#
#  _updateView: (dt)->
#    super
#    for id, val of @_elements
#      if val.sprite
#        val.sprite.update(dt)
#    @draw()
#
#  draw: ->
#    @c.fillStyle = "rgb(0,0,0)"
#    @c.fillRect(0, 0, @canvas.width(), @canvas.height())
#    for id, val of @_elements
#      if val.sprite
#        @c.save()
#        @c.translate(val.pos[0]+val.size[0]/2, val.pos[1]+val.size[1]/2)
#        @c.rotate(val.angle * Math.PI/180.0)
#        @c.translate(-val.size[0]/2, -val.size[1]/2)
#        val.sprite.render(@c)
#        @c.restore()
#    @
#
#  render: ->
#    @canvas = $('<canvas width=416 height=416>')
#    @$el.append(@canvas)
#    @c = @canvas[0].getContext('2d')
#    @

