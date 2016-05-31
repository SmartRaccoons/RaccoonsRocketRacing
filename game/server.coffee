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
    y = 0
    for r in @_map
      x = 0
      for l in r
        object = null
        if l is 1
          object = 'brick'
        else if l is 10
          object = 'base'
        else if l is 2
          object = 'iron'
        @add {'object': object, pos: [x*16, y*16]} if object
        x++
      y++
    @

  restart: ->
    users = @get({'object': 'user'})
    super

    @trigger 'restart'
    @_draw_map()
    for t in users
      @add_user(t.params.user_id, {'pos': t.pos_start})
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
    if pr.object is 'user'
      params.size = [8, 8]
      params.speed = 0.12
      params.wheel = 0.002
      params.accelerator = 0.0001
      params.rub = 0.9999
      params.fire_rate = 1000
      params.fire_last = 0
      params.moving = []
      if not params.pos_start
        params.pos_start = [params['pos'][0], params['pos'][1]]
    if pr.object is 'bullet'
      params.speed = params.speed or 0.3
      params.size = [8,  8]
      params.vel = [Math.cos(params.angle) * params.speed, Math.sin(params.angle) * params.speed]
    if pr.object is 'brick'
      params.hitpoints = 2
    if pr.object is 'iron'
      params.hitpoints = 20
    if pr.object is 'base'
      params.size = [32, 32]
    super(params)
    @trigger 'add', params
    @_id

  add_user: (user_id, params = {})->
    params['object'] = 'user'
    params['params'] = {'user_id': user_id}
    @add(params)

  get_user: (user_id)->
    for id, val of @_elements
      if val.params.user_id is user_id
        return val
    return null

  add_bullet: (user)->
    user.fire_last = new Date().getTime()
    @add({
      object: 'bullet'
      pos: [user.pos[0], user.pos[1]]
      angle: user.angle
      params: {
        owner: user.id
      }
    })

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
      @add_user(ob.params.user_id, {'pos': ob.pos_start})
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

  _updateView: (dt)->
    super(dt)

    for id, val of @_elements
      if val.moving and val.moving.indexOf('fire') > -1 and val.fire_last + val.fire_rate < new Date().getTime()
        @add_bullet(val)
      if val.destroy > 0 and (val.pos[0] < 0 or val.pos[1] < 0 or val.pos[0]+val.size[0] > @size[0] or val.pos[1]+val.size[1] > @size[1])
        @destroy(id)
    remove = []
    for id, val of @_elements
      for id2, val2 of @_elements
        if id isnt id2 and @_collides_ob(val, val2)
          if val.destroy > 0 and val.params.owner isnt val2.id
            #bullet
            @update({'id': val2.id, 'hitpoints': val2.hitpoints - val.destroy})
            remove.push(val.id) if remove.indexOf(val.id) is -1
            if val2.hitpoints <= 0
              remove.push(val2.id) if remove.indexOf(val2.id) is -1
    for id in remove
      @destroy(id, 'destroy')
