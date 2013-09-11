events = require('events')
extend = require('util')._extend


Bco = require('../bco').Bco


module.exports = class Router extends events.EventEmitter
  _sockets: {}

  constructor: ->
    @game = new Bco()
    @game.start()
    @game.on 'remove', (params)=>
      element = @game.get(params.id)
      if element.object is 'tank' and params.reason is 'destroy'
        @add_tank(@_sockets[element.params.socket_id])

  add_tank: (socket)->
    socket.tank_id = @game.add({'object': 'tank', 'params': {'socket_id': socket.id}})

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
      @game.remove(socket.tank_id)
      delete @_sockets[socket.id]

    @game.on 'add', (params)=> @emit_socket(socket, 'add', params)
    @game.on 'remove', (params)=> @emit_socket(socket, 'remove', params)
    @game.on 'update', (params)=> @emit_socket(socket, 'update', extend({'pos': @game.get(params.id).pos}, params))

    for id, val of @game._elements
      @emit_socket socket, 'add', val
    @add_tank(socket)

  emit_socket: (socket, event, args)->
    socket.emit event, args

