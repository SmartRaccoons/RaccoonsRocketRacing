events = require('events')
extend = require('util')._extend


Bco = require('../bco').Bco


module.exports = class Router extends events.EventEmitter
  _sockets: {}

  constructor: ->
    @game = new Bco()
    @game = new Bco([
            [0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0],
            [0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0],
            [0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0],
            [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
            [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
            [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
            [0,0,1,1,0,0,1,1,0,0,1,1,2,2,1,1,0,0,1,1,0,0,1,1,0,0],
            [0,0,1,1,0,0,1,1,0,0,1,1,2,2,1,1,0,0,1,1,0,0,1,1,0,0],
            [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
            [0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
            [2,2,0,0,1,1,1,1,2,2,0,0,0,0,0,0,2,2,1,1,1,1,0,0,2,2],
            [2,2,0,0,1,1,1,1,2,2,0,0,0,0,0,0,2,2,1,1,1,1,0,0,2,2],
            [0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
            [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
            [0,0,1,1,0,0,1,1,0,0,1,1,2,2,1,1,0,0,1,1,0,0,1,1,0,0],
            [0,0,1,1,0,0,1,1,0,0,1,1,2,2,1,1,0,0,1,1,0,0,1,1,0,0],
            [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
            [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
            [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
            [0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0],
            [0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0],
            [0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0]
        ])
    @game.start()
    @game.on 'destroy', (params)=>
      element = @game.get(params.id)
      if element.object is 'tank' and params.reason is 'destroy'
        @add_tank(@_sockets[element.params.socket_id])

  add_tank: (socket)->
    positions = [[0, 0], [@game.size[0]-32, @game.size[1]-32], [@.game.size[0]-32, 0], [0, @game.size[1]-32]]
    socket.tank_id = @game.add({'object': 'tank', pos: positions[@game.get({'object': 'tank'}).length % 4], 'params': {'socket_id': socket.id}})

  connection: (socket)->
    @_sockets[socket.id] = socket
    socket.on 'control', (p)=>
      if not @game.get(socket.tank_id)
        return
      if p.active
        @game.tank_start(socket.tank_id, p.move)
      else
        @game.tank_stop(socket.tank_id, p.move)

    socket.on 'disconnect', =>
      @game.destroy(socket.tank_id)
      delete @_sockets[socket.id]

    @game.on 'add', (params)=> @emit_socket(socket, 'add', params)
    @game.on 'destroy', (params)=> @emit_socket(socket, 'destroy', params)
    @game.on 'update', (params)=> @emit_socket(socket, 'update', extend({'pos': @game.get(params.id).pos}, params))

    for id, val of @game._elements
      @emit_socket socket, 'add', val
    @add_tank(socket)

  emit_socket: (socket, event, args)->
    socket.emit event, args

