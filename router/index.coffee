events = require('events')


extend = (from, to)->
  for v, attr of to
    from[v] = attr
  from



collides = (x, y, r, b, x2, y2, r2, b2)-> !(r <= x2 || x > r2 || b <= y2 || y > b2)


class Game extends events.EventEmitter

  elements: {}
  id: 0

  add: (params)->
    @id++
    if params.object is 'tank'
      size = [32, 32]
    else if params.object is 'bullet'
      size = [8, 8]
    p =
      'id': @id
      'object': params.object
      'params': params.params || {}
      'pos': params.pos || [0, 0]
      'size': size
      'speed': params.speed || 0
      'angle': params.angle || 0
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

  get: (id)->
    @elements[id]

  _updateView: (dt)->
    for id, val of @elements
      rd = val.angle * Math.PI/180.0
      hypo = val.speed * dt
      val.pos[0] += hypo * Math.cos(rd)
      val.pos[1] += hypo * Math.sin(rd)
      if val.object isnt 'tank'
        if val.pos[0] > 416 or val.pos[0] < 0 or val.pos[1] > 416 or val.pos[1] < 0
          @remove(id)


    for id, val of @elements
      for id2, val2 of @elements
        if id isnt id2 and val2.object is 'bullet' and val2.params.owner isnt val.id
          if collides(val.pos[0], val.pos[1], val.pos[0]+val.size[0], val.pos[1]+val.size[1],
                     val2.pos[0], val2.pos[1], val2.pos[0]+val2.size[0], val2.pos[1]+val2.size[1])
            @remove(id2)
            @remove(id)

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
      if !@game.get(socket.tank_id)
        return
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
        if p.active
          user_tank = @game.get(socket.tank_id)
          @game.add({'object': 'bullet', 'params': {'owner': socket.tank_id}, 'pos': [user_tank.pos[0]+12, user_tank.pos[1]+12], 'angle': user_tank.angle, 'speed': 200})


    socket.on 'disconnect', =>
      @game.remove(socket.tank_id)

    @game.on 'add', (params)-> socket.emit 'add', params
    @game.on 'remove', (params)-> socket.emit 'remove', params
    @game.on 'update', (params)-> socket.emit 'update', extend({}, params)
    for el of @game.elements
      socket.emit 'add', @game.elements[el]
    socket.tank_id = @game.add({'object': 'tank'})
