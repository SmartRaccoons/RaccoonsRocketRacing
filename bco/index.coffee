Backbone = require('backbone')
_ = require('lodash')



BcoCore = require('./client').BcoCore

module.exports.Bco = class Bco extends BcoCore
  id: 0
  _map: []
  _tank_pos: {}

  constructor: (map=[])->
    super
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
      @add_user(t.params.user_id, {'pos': t['pos_start']})
    @

  add: (pr)->
    @id++
    params =
      id: @id
      object: pr.object
      params: pr.params || {}
      pos: pr.pos || [0, 0]
      size: [16, 16]
      speed: pr.speed || 0
      angle: pr.angle || 0
      destroy: pr.destroy || 0
      over: false
      hitpoints: pr.hitpoints || 1
    if pr.object is 'user'
      params['size'] = [32, 32]
      if not params['pos_start']
        params['pos_start'] = [params['pos'][0], params['pos'][1]]
    if pr.object is 'bullet'
      params['size'] = [8,  8]
    if pr.object is 'brick'
      params['hitpoints'] = 2
    if pr.object is 'iron'
      params['hitpoints'] = 20
    if pr.object is 'base'
      params['size'] = [32, 32]
    super(params)
    @trigger 'add', params
    @id

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
      @add_user(ob.params.user_id, {'pos': ob['pos_start']})
    @

  user_action: (user_id, move, active=true)->
    if move in ['up', 'down', 'left', 'right']
      @_user_move(user_id, move, active)
    if move is 'fire' and active
      user = @get_user(user_id)
      @add
        'object': 'bullet'
        'params': {'owner': user.id}
        'pos': [user.pos[0]+user.size[0]/2-4, user.pos[1]+user.size[1]/2-4]
        'angle': user.angle
        'destroy': 1
        'speed': 200

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

  _updateView: (dt)->
    super(dt)

    for id, val of @_elements
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
