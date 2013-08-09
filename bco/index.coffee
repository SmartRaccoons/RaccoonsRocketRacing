events = require('events')


module.exports = class Bco extends events.EventEmitter
  id: 0
  _elements: {}

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
