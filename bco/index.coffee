events = require('events')

collides = (x, y, r, b, x2, y2, r2, b2)-> !(r <= x2 || x > r2 || b <= y2 || y > b2)

module.exports = class Bco extends events.EventEmitter
  id: 0
  size: [416, 416]
  _elements: {}


  constructor: (params)->


  add: (pr)->
    @id++
    @_elements[@id] =
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
    @emit 'add', @_elements[@id]
    @id

  update: (pr)->
    for attr, val of pr
      if attr isnt 'id'
        @_elements[pr['id']][attr] = val
    @emit 'update', pr

  remove: (id, reason)->
    @emit 'remove', {'id': id, 'reason': reason}
    delete @_elements[id]

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

  get: (id)->
    @_elements[id]

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
    setTimeout =>
      if not @_stop
        @_process()
    , 1000/40

  _updateView: (dt)->
    for id, val of @_elements
      rd = val.angle * Math.PI/180.0
      hypo = val.speed * dt
      val.pos[0] += hypo * Math.cos(rd)
      val.pos[1] += hypo * Math.sin(rd)

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
