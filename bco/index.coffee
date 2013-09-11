Backbone = require('backbone')
_ = require('lodash')

collides = (x, y, r, b, x2, y2, r2, b2)-> !(r <= x2 || x > r2 || b <= y2 || y > b2)


BcoCore = require('./client').BcoCore

module.exports.Bco = class Bco extends BcoCore
  id: 0

  __requestAnimFrame: (callback)-> setTimeout(callback, 1000 / 40)

  add: (pr)->
    @id++
    params =
      id: @id
      object: pr.object
      params: pr.params || {}
      pos: pr.pos || [0, 0]
      size: if pr.object is 'tank' then [32, 32] else [8, 8]
      speed: pr.speed || 0
      angle: pr.angle || 0
      destroy: pr.destroy || 0
      hitpoints: pr.hitpoints || 1
      _keystokes: []
    super(params)
    @trigger 'add', params
    @id

  update: (pr)->
    super(pr)
    @trigger 'update', pr

  remove: (id, reason)->
    @trigger 'remove', {'id': id, 'reason': reason}
    super(id)

  tank_start: (tank_id, move)->
    tank = @get(tank_id)
    if move in ['up', 'down', 'left', 'right']
      @_tank_move(tank_id, move, true)
    else if move is 'fire'
      @add
        'object': 'bullet'
        'params': {'owner': tank_id}
        'pos': [tank.pos[0]+tank.size[0]/2-4, tank.pos[1]+tank.size[1]/2-4]
        'angle': tank.angle
        'speed': 200

  tank_stop: (tank_id, move)->
    if move in ['up', 'down', 'left', 'right']
      @_tank_move(tank_id, move)

  _tank_move: (tank_id, move, active=false)->
    if active
      @_elements[tank_id]._keystokes.push(move)
    else
      if @_elements[tank_id]._keystokes[@_elements[tank_id]._keystokes.length - 1] isnt move
        return @_elements[tank_id]._keystokes.splice(@_elements[tank_id]._keystokes.indexOf(move), 1)
      @_elements[tank_id]._keystokes.splice(@_elements[tank_id]._keystokes.length-1, 1)
    params = {'id': tank_id, 'speed': 100}
    if @_elements[tank_id]._keystokes.length is 0
      params['speed'] = 0
    else
      last_move = @_elements[tank_id]._keystokes[@_elements[tank_id]._keystokes.length - 1]
      if last_move is 'up'
        params['angle'] = 270
      else if last_move is 'down'
        params['angle'] = 90
      else if last_move is 'left'
        params['angle'] = 180
      else if last_move is 'right'
        params['angle'] = 0
    @update(params)

  _updateView: (dt)->
    super(dt)

    for id, val of @_elements
      if val.destroy > 0 and (val.pos[0] < 0 or val.pos[1] < 0 or val.pos[0]+val.size[0] > @size[0] or val.pos[1]+val.size[1] > @size[1])
        @remove(id)

    for id, val of @_elements
      for id2, val2 of @_elements
        if id isnt id2 and val.destroy > 0
          if collides(val.pos[0], val.pos[1], val.pos[0]+val.size[0], val.pos[1]+val.size[1],
                      val2.pos[0], val2.pos[1], val2.pos[0]+val2.size[0], val2.pos[1]+val2.size[1])
            val2.hitpoints -= val.destroy
            @remove(id)
            if val2.hitpoints <= 0
              @remove(id2)
