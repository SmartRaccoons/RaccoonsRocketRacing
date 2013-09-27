events = require('events')
extend = require('util')._extend


Bco = require('../bco').Bco


module.exports = class Router extends events.EventEmitter
  _sockets: {}

  constructor: ->
    @game = new Bco()
    @game = new Bco([
            [0,0,0,0,0,0,0,0,0,0,0,1,10,0,1,0,0,0,0,0,0,0,0,0,0,0],
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
            [0,0,0,0,0,0,0,0,0,0,0,1,10,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0]
        ])
    @game.start()
    @game.on 'destroy', (params)=>
      element = @game.get(params.id)
      if element.object is 'base'
        @game.restart()
    @game.on 'restart', => @emit_sockets('restart')
    @game.on 'add', (pr)=> @emit_sockets('add', pr)
    @game.on 'destroy', (pr)=> @emit_sockets('destroy', pr)
    @game.on 'update', (pr)=> @emit_sockets('update', extend({'pos': @game.get(pr.id).pos}, pr))

  add_tank: (socket)->
    positions = [[0, 0], [@game.size[0]-32, @game.size[1]-32], [@.game.size[0]-32, 0], [0, @game.size[1]-32]]
    @game.add_tank(socket.id, {pos: positions[@game.get({'object': 'tank'}).length % 4]})

  connection: (socket)->
    @_sockets[socket.id] = socket
    socket.on 'control', (p)=>
      if not @game.get_tank(socket.id)
        return
      if p.active
        @game.tank_start(socket.id, p.move)
      else
        @game.tank_stop(socket.id, p.move)

    socket.on 'disconnect', =>
      @game.destroy_tank(socket.id)
      delete @_sockets[socket.id]

    for id, val of @game._elements
      @emit_socket socket, 'add', val
    @add_tank(socket)

  emit_socket: (socket, event, args)->
    socket.emit event, args

  emit_sockets: (event, args)->
    for id, socket of @_sockets
      @emit_socket(socket, event, args)

