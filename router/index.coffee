events = require('events')
extend = require('util')._extend

Users = require('../room').Users
Rooms = require('../room').Rooms
Bco = require('../bco').Bco


module.exports = class Router extends events.EventEmitter

  constructor: ->
    @users = new Users()
    @users.on 'remove', (u)=>
      if u.get('room')
        @rooms.left_user(u)
    @users.on 'change:room', (u)=>
      @emit_user(u, 'room:list', @rooms.toJSON())

    @rooms = new Rooms()
    @rooms.on 'add', (r)=>
      @emit_lobby('room:room_add', r.toJSON())
    @rooms.on 'remove', (r)=>
      @emit_lobby('room:room_remove', {'id': r.id})
    @rooms.on 'user:join', (r, user)=>
      @emit_lobby('room:user_join', {'room_id': r.id, 'user': user.user_data()})
    @rooms.on 'user:left', (r, user)=>
      if r.get('users').length > 0
        @emit_lobby('room:user_left', {'room_id': r.id, 'user_id': user.id})

  connection: (socket)->
    user = new @users.model({'socket': socket})
    @users.add(user)
    socket.on 'login:try', =>
      user.set({'id': socket.id, 'name': 'Guest '+socket.id})
      @emit_user user, 'login:success', user.user_data(true)
      user.set({'room': null})

    socket.on 'room:create', =>
      if not user.is_authenticated() or user.get('room')
        return
      @rooms.add({'users': [user]})

    socket.on 'room:join', (room)=>
      if not user.is_authenticated()
        return
      try
        @rooms.join_user(room, user)
      catch e

    socket.on 'room:left', =>
      try
        @rooms.left_user(user)
      catch e

    socket.on 'end', =>
      @users.remove(user)


  emit_user: (user, event, args)-> @emit_socket user.get('socket'), event, args

  emit_socket: (socket, event, args)-> socket.emit event, args

  emit_room: (room, event, args)->
    room.get('users').forEach (u)=> @emit_user(u, event, args)


  emit_lobby: (event, args)->
    @users.each (u)=>
      if not u.get('room') and u.is_authenticated()
        @emit_user(u, event, args)

#  emit_users: (event, args)-> @users.each (u)=> @emit_user(u, event, args)



#    @game = new Bco()
#    @game = new Bco([
#            [0,0,0,0,0,0,0,0,0,0,0,1,10,0,1,0,0,0,0,0,0,0,0,0,0,0],
#            [0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
#            [0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0],
#            [0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0],
#            [0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0],
#            [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
#            [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
#            [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
#            [0,0,1,1,0,0,1,1,0,0,1,1,2,2,1,1,0,0,1,1,0,0,1,1,0,0],
#            [0,0,1,1,0,0,1,1,0,0,1,1,2,2,1,1,0,0,1,1,0,0,1,1,0,0],
#            [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
#            [0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
#            [2,2,0,0,1,1,1,1,2,2,0,0,0,0,0,0,2,2,1,1,1,1,0,0,2,2],
#            [2,2,0,0,1,1,1,1,2,2,0,0,0,0,0,0,2,2,1,1,1,1,0,0,2,2],
#            [0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
#            [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
#            [0,0,1,1,0,0,1,1,0,0,1,1,2,2,1,1,0,0,1,1,0,0,1,1,0,0],
#            [0,0,1,1,0,0,1,1,0,0,1,1,2,2,1,1,0,0,1,1,0,0,1,1,0,0],
#            [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
#            [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
#            [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0],
#            [0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0],
#            [0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0],
#            [0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0],
#            [0,0,0,0,0,0,0,0,0,0,0,1,10,0,1,0,0,0,0,0,0,0,0,0,0,0],
#            [0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0]
#        ])
#    @game.start()
#    @game.on 'destroy', (params)=>
#      element = @game.get(params.id)
#      if element and element.object is 'base'
#        @game.restart()
#    @game.on 'restart', => @emit_users('restart')
#    @game.on 'add', (pr)=> @emit_users('add', pr)
#    @game.on 'destroy', (pr)=> @emit_users('destroy', pr)
#    @game.on 'update', (pr)=> @emit_users('update', extend({'pos': @game.get(pr.id).pos}, pr))
#
#  add_tank: (socket)->
#    positions = [[0, 0], [@game.size[0]-32, @game.size[1]-32], [@.game.size[0]-32, 0], [0, @game.size[1]-32]]
#    @game.add_tank(socket.id, {pos: positions[@game.get({'object': 'tank'}).length % 4]})
#
#  connection: (socket)->
#    user = @users.add({'id': socket.id, 'socket': socket})
#    socket.on 'control', (p)=>
#      if not @game.get_tank(socket.id)
#        return
#      if p.active
#        @game.tank_start(socket.id, p.move)
#      else
#        @game.tank_stop(socket.id, p.move)
#
#    socket.on 'disconnect', =>
#      @game.destroy_tank(socket.id)
#      @users.remove(user)
#
#    for id, val of @game._elements
#      @emit_user user, 'add', val
#    @add_tank(socket)
#
#  emit_user: (user, event, args)-> user.get('socket').emit event, args
#
#  emit_users: (event, args)-> @users.each (u)=> @emit_user(u, event, args)

