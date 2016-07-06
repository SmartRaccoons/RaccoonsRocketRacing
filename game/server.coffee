Backbone = require('backbone')
_ = require('lodash')



GameCore = require('./index').GameCore


module.exports.Game = class Game extends GameCore
  _map: []
  _tank_pos: {}

  constructor: (map=[])->
    super
    @_id = 0
    @_map = map
    @_draw_map()
    @

  __requestAnimFrame: (callback)-> setTimeout(callback, 1000 / 40)

  _draw_map: ->
    objects = {
      0: null
      1: 'wall'
    }
    y = 0
    for r in @_map
      x = 0
      for l in r
        if objects[l]
          @['add_' + objects[l]]({pos: [x*16, y*16]})
        x++
      y++
    @size = [x*16, y*16]
    @

  restart: ->
    users = @get({'object': 'user'})
    super

    @trigger 'restart'
    @_draw_map()
    for t in users
      @add_user(t.params.user_id, {'pos': t.pos})
    @

  add: (pr)->
    @_id++
    params = _.extend({
      id: @_id
      params: {}
      pos: [0, 0]
      vel: [0, 0]
      size: [16, 16]
      angle: 0
      destroy: 0
      hitpoints: 1
    }, pr)
    super(params)
    @trigger 'add', params
    @_id

  add_user: (user_id, params = {})->
    @add(_.extend({
      object: 'user'
      size: [8, 8]
      speed: 0.12
      wheel: 0.002
      accelerator: 0.0001
      rub: 0.9999
      fire_rate: 1000
      fire_last: 0
      moving: []
      radius: 4
      params: {
        user_id: user_id
      }
    }, params))

  get_user: (user_id)->
    for id, val of @_elements
      if val.params.user_id is user_id
        return val
    return null

  add_bullet: (user)->
    user.fire_last = new Date().getTime()
    speed = 0.3
    angle = user.angle
    @add({
      object: 'bullet'
      size: [8, 8]
      destroy: 1
      speed: speed
      radius: 4
      pos: [user.pos[0], user.pos[1]]
      vel: [Math.cos(angle) * speed, Math.sin(angle) * speed]
      angle: angle
      params: {
        owner: user.id
      }
    })
    
  add_wall: (params)->
    @add _.extend({
      object: 'wall'
      hitpoints: 2
    }, params)
    

  destroy_user: (user_id)->
    t = @get_user(user_id)
    @destroy(t.id)

  update: (pr)->
    super(pr)
    @trigger 'update', pr

  destroy: (id, reason)->
    @trigger 'destroy', {'id': id, 'reason': reason}
    ob = @get(id)
    super({'id': id})
    if ob and ob.object is 'user' and reason is 'destroy'
      @add_user(ob.params.user_id, {'pos': ob.pos})
    @

  user_action: (user_id, move, active=true)->
    t = @get_user(user_id)
    index = t.moving.indexOf(move)
    if active
      if index < 0
        t.moving.push(move)
    else
      t.moving.splice(index, 1)
    @update({
      id: t.id
      moving: t.moving
    })

  collide: (el1, el2)->
    super
    if el1.destroy > 0 and el1.params.owner isnt el2.id
      if el2.hitpoints - el1.destroy <= 0
        @destroy(el2.id, 'destroy')
      else
        @update({'id': el2.id, 'hitpoints': el2.hitpoints - el1.destroy})
      @destroy(el1.id, 'destroy')

  _updateView: (dt)->
    super(dt)

    for id, val of @_elements
      if val.moving and val.moving.indexOf('fire') > -1 and val.fire_last + val.fire_rate < new Date().getTime()
        @add_bullet(val)
      if val.destroy > 0 and (val.pos[0] < 0 or val.pos[1] < 0 or val.pos[0]+val.size[0] > @size[0] or val.pos[1]+val.size[1] > @size[1])
        @destroy(id)
