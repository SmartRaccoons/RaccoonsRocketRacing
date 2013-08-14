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
    @emit 'add', @_elements[@id]
    @id

  update: (pr)->
    for attr, val of pr
      if attr isnt 'id'
        @_elements[pr['id']][attr] = val
    @emit 'update', pr

  remove: (id, reason)->
    delete @_elements[id]
    @emit 'remove', {'id': id, 'reason': reason}

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
