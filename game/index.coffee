
_ = if typeof require isnt 'undefined' then require('lodash') else window._
Backbone = if typeof require isnt 'undefined' then require('backbone') else window.Backbone


class Vector
  #isnt tested
  multiply: (vector, scalar)->
    [vector[0] * scalar, vector[1] * scalar]

  add: (v1, v2)->
    [v1[0] + v2[0], v1[1] + v2[1]]

  magnitude: (v)->
    Math.sqrt(v[0] * v[0] + v[1] * v[1])

  create: (angle, length)->
    [Math.cos(angle) * length, Math.sin(angle) * length]

  accelerate: (v, speed, angle, max)->
    v = @add(v, @create(angle, speed))
    magnitude = @magnitude(v)
    if max < magnitude
      return @multiply(v, max / magnitude)
    v
    
  normalise: (vector)->
    m = @magnitude(vector)
    [vector[0] / m, vector[1] / m]
    
  dot: (vector, vector2)->
    vector[0]*vector2[0] + vector[1]*vector2[1]
    


(if typeof module isnt 'undefined' then module.exports else window).GameCore = class GameCore
  _.extend @prototype, Backbone.Events

  vector: new Vector()

  constructor: ->
    @_elements = {}

  _collides_box: (x, y, r, b, x2, y2, r2, b2)->
    !(r <= x2 || x >= r2 || b <= y2 || y >= b2)

  _collides_circle: (x, y, r, x2, y2, r2)->
    dx = x - x2
    dy = y - y2
    Math.sqrt(dx * dx + dy * dy) <= r + r2

  _collides_ob: (val, val2)->
    @_collides_box(val.pos[0] - val.radius, val.pos[1] - val.radius, val.pos[0] + val.radius, val.pos[1] + val.radius,
      val2.pos[0] - val2.radius, val2.pos[1] - val2.radius, val2.pos[0] + val2.radius, val2.pos[1] + val2.radius) and
      @_collides_circle(val.pos[0], val.pos[1], val.radius, val2.pos[0], val2.pos[1], val2.radius)

  __requestAnimFrame: (callback)->
    fn = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame
    if fn
      return fn(callback)
    window.setTimeout(callback, 1000 / 20)

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
    @_stop = false
    @_lastTime = Date.now()
    @_process()

  stop: ->
    @_stop = true

  _collide_circle_unmovable: (el1, el2)->
    normal = @vector.normalise( [el2.pos[0] - el1.pos[0], el2.pos[1] - el1.pos[1]])
    tangent = [-normal[1], normal[0]]
    @vector.add @vector.multiply(tangent, @vector.dot(tangent, el1.vel)), @vector.multiply(normal, -@vector.dot(normal, el1.vel))

  collide: (el1, el2)->
    fn = @["collide_#{el1.object}_to_#{el2.object}"]
    if !fn
      return
    fn.apply(@, arguments)

  collide_user_to_wall: (el1, el2, dt)->
    el1.vel = @_collide_circle_unmovable(el1, el2)
    @_update_element_position(el1, dt, true)
    
  _update_element_angle: (el, dt, recalculate = false)->
    if recalculate
      el.angle = el.angle_last
    else
      el.angle_last = el.angle
    if el.wheel
      if el.moving.indexOf('right') > -1
        el.angle -= el.wheel * dt
      if el.moving.indexOf('left') > -1
        el.angle += el.wheel * dt

  _update_element_velocity: (el, dt, recalculate = false)->
    if recalculate
       el.vel = el.vel_last
    else
      el.vel_last = el.vel
    if el.accelerator and el.moving.indexOf('up') > -1
      el.vel = @vector.accelerate(el.vel, dt * el.accelerator, el.angle, el.speed)
    else if el.rub and (el.vel[0] isnt 0 or el.vel[1] isnt 0)
      el.vel = @vector.multiply(el.vel, Math.pow(el.rub, dt))

  _update_element_position: (el, dt, recalculate = false)->
    if recalculate
      el.pos = el.pos_last
    else
      el.pos_last = el.pos
    if el.vel[0] isnt 0 or el.vel[1] isnt 0
      el.pos = @vector.add(el.pos, @vector.multiply(el.vel, dt))

  _update_element: (el, dt, recalculate = false)->
    @_update_element_angle.apply(this, arguments)
    @_update_element_velocity.apply(this, arguments)
    @_update_element_position.apply(this, arguments)

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
      @_update_element(el, dt)

      if el.speed > 0
        for id2, el2 of @_elements
          if id isnt id2  and @_collides_ob(el, el2)
            @collide(el, el2, dt)
    @