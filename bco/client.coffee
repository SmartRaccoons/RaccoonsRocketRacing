
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

  add_user: (user_id, params = {})->
    params['object'] = 'user'
    params['params'] = {'user_id': user_id}
    @add(params)

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

  get_user: (user_id)->
    for id, val of @_elements
      if val.params.user_id is user_id
        return val
    return null

  user_action: (user_id, move, active=true)->
    if move in ['up', 'down', 'left', 'right']
      @_user_move(user_id, move, active)

  _user_move: (user_id, move, active=false)->
    t = @get_user(user_id)
    if not t._keystokes
      t._keystokes = []
    if active
      t._keystokes.push(move)
    else
      if t._keystokes[t._keystokes.length - 1] isnt move
        return t._keystokes.splice(t._keystokes.indexOf(move), 1)
      t._keystokes.splice(t._keystokes.length-1, 1)
    params = {'id': t.id, 'speed': 100}
    if t._keystokes.length is 0
      params['speed'] = 0
    else
      last_move = t._keystokes[t._keystokes.length - 1]
      if last_move is 'up'
        params['angle'] = 270
      else if last_move is 'down'
        params['angle'] = 90
      else if last_move is 'left'
        params['angle'] = 180
      else if last_move is 'right'
        params['angle'] = 0
      if t.angle isnt params['angle']
        pr = 16
        params['pos'] = [Math.round(t.pos[0]/pr)*pr, Math.round(t.pos[1]/pr)*pr]
    @update(params)

  update: (pr)->
    for attr, val of pr
      if attr isnt 'id'
        @_elements[pr['id']][attr] = val

  destroy: (pr)->
    delete @_elements[pr.id]

  start: ->
    @_stop = false
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
  #TODO TDD
  _.extend @prototype, Backbone.View.prototype
  className: 'game-canvas'
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

#  start: ->
#    super

  add: (pr)->
    super
    sprite = new PIXI.Sprite(PIXI.Texture.fromImage(@options.path+'d/img/'+pr.object+'.png'))
    sprite.anchor.x = 0.5
    sprite.anchor.y = 0.5
    @_elements[pr.id]['sprite'] = sprite
    @stage.addChild(sprite)

  elements: (data)->
    for id, el of @_elements
      if el.sprite
        @stage.removeChild(el.sprite)
    @_elements = {}
    for id, val of data
      @add(val)

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
