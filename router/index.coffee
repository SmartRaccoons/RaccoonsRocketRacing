events = require('events')


extend = (from, to)->
  for v, attr of to
    from[v] = attr
  from


class Game extends events.EventEmitter

  elements: {}
  id: 0

  add: (params)->
    @id++
    p =
      'id': @id
      'pos': params.pos
      'speed': 0
      'angle': 0
    @elements[@id] = p
    @emit 'add', p
    @id

  update: (prop)->
    for attr, val of prop
      if attr isnt 'id'
        @elements[prop['id']][attr] = val
    @emit 'update', prop

  remove: (id)->
    delete @elements[id]
    @emit 'remove', {'id': id}

  _updateView: (dt)->
    for attr, val of @elements
      rd = val.angle * Math.PI/180.0
      hypo = val.speed * dt
      val.pos[0] += hypo * Math.cos(rd)
      val.pos[1] += hypo * Math.sin(rd)

  start: ->
    @lastTime = Date.now()
    @process()

  process: ->
    now = Date.now()
    dt = (now - @lastTime) / 1000.0
    @_updateView(dt)
    @lastTime = now
    process.nextTick =>
      @process()


module.exports = class Router extends events.EventEmitter
  constructor: (options, db)->
    @db = db
    @send = new events.EventEmitter()
    @game = new Game()
    @game.start()

  connection: (socket)->
    move_controls = []
    socket.on 'control', (p)=>
      if p.move in ['up', 'down', 'left', 'right']
        if p.active
          move_controls.push(p.move)
        else if move_controls.indexOf(p.move) isnt -1
          move_controls.splice(move_controls.indexOf(p.move), 1)
        if move_controls.length is 0
          @game.update({'id': socket.tank_id, 'speed': 0})
        else
          active_move = move_controls[move_controls.length-1]
          update_params = {'id': socket.tank_id, 'speed': 50}
          if active_move is 'up'
            update_params['angle'] = 270
          if active_move is 'left'
            update_params['angle'] = 180
          if active_move is 'right'
            update_params['angle'] = 0
          if active_move is 'down'
            update_params['angle'] = 90
          @game.update(update_params)
      else if p.move is 'fire'
        console.info 'fire'


    socket.on 'disconnect', =>
      @game.remove(socket.tank_id)

    @game.on 'add', (params)-> socket.emit 'add', params
    @game.on 'remove', (params)-> socket.emit 'remove', params
    @game.on 'update', (params)-> socket.emit 'update', extend({}, params)
    for el of @game.elements
      console.info el
      socket.emit 'add', @game.elements[el]
    socket.tank_id = @game.add({'pos': [0, 0]})
