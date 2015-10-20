
_ = if typeof require isnt 'undefined' then require('lodash') else window._
Backbone = if typeof require isnt 'undefined' then require('backbone') else window.Backbone


class Vector
  #isnt tested
  multiply: (vector, scalar)->
    [vector[0] * scalar, vector[1] * scalar]

  plus: (v1, v2)->
    [v1[0] + v2[0], v1[1] + v2[1]]

  magnitude: (v)->
    Math.sqrt(v[0] * v[0] + v[1] * v[1])

  create: (angle, length)->
    [Math.cos(angle) * length, Math.sin(angle) * length]

  accelerate: (v, speed, angle, max)->
    v = @plus(v, @create(angle, speed))
    magnitude = @magnitude(v)
    if max < magnitude
      return @multiply(v, max / magnitude)
    v


(if typeof module isnt 'undefined' then module.exports else window).GameCore = class GameCore
  _.extend @prototype, Backbone.Events

  vector: new Vector()

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
    dt = now - @_lastTime
    if dt>0
      @_updateView(dt)
    @_lastTime = now
    @__requestAnimFrame =>
      if not @_stop
        @_process()

  _updateView: (dt)->
    for id, el of @_elements
      if el.wheel and el.moving.indexOf('right') > -1
        el.angle += el.wheel * dt
      if el.wheel and  el.moving.indexOf('left') > -1
        el.angle -= el.wheel * dt
      if el.accelerator and el.moving.indexOf('up') > -1
        el.vel = @vector.accelerate(el.vel, dt * el.accelerator, el.angle, el.speed)
      else if el.rub
        el.vel = @vector.multiply(el.vel, Math.pow(el.rub, dt))
      if el.vel[0] isnt 0 or el.vel[1] isnt 0
        el.pos = @vector.plus(el.pos, @vector.multiply(el.vel, dt))
#      if val.speed > 0
#        if val.destroy is 0
#          for id2, val2 of @_elements
#            if id isnt id2 and val2.destroy is 0 and @_collides_ob(val, val2)
#              if val.angle is 0
#                val.pos[0] = val2.pos[0]-val.size[0]
#              else if val.angle is 90
#                val.pos[1] = val2.pos[1]-val.size[1]
#              else if val.angle is 180
#                val.pos[0] = val2.pos[0]+val2.size[0]
#              else if val.angle is 270
#                val.pos[1] = val2.pos[1]+val2.size[1]
#          if val.angle is 0 and val.pos[0]+val.size[0]>@size[0]
#            val.pos[0] = @size[0]-val.size[0]
#          else if val.angle is 90 and val.pos[1]+val.size[1]>@size[1]
#            val.pos[1] = @size[1]-val.size[1]
#          else if val.angle is 180 and val.pos[0]<0
#            val.pos[0] = 0
#          else if val.angle is 270 and val.pos[1]<0
#            val.pos[1] = 0
    @