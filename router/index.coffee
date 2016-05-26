events = require('events')
extend = require('util')._extend

Users = require('../room').Users
Rooms = require('../room').Rooms
Game = require('../game/server').Game


map = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]


module.exports = class Router extends events.EventEmitter

  constructor: ->
    @users = new Users()
    @users.on 'remove', (u)=>
      if u.get('room')
        @rooms.user_left(u)
    @users.on 'change:room', (u)=>
      if u.get('room') is null
        @emit_user(u, 'room:list', @rooms.toJSON())
      else
        @emit_user(u, 'game:start')

    @rooms = new Rooms()
    join_user = (u)=>
      r = u.get('room')
      @emit_user(u, 'game:elements', r.game._elements)
      r.game.add_user(u.id, {'pos': [0, 0]})

    @rooms.on 'add', (r)=>
      @emit_lobby('room:room_add', r.toJSON())
      r.game = new Game(map)
      r.game.on 'add', (pr)=> @emit_room(r, 'game:add', pr)
      r.game.on 'update', (pr)=>
        @emit_room(r, 'game:update', extend({'pos': r.game.get(pr.id).pos, 'angle': r.game.get(pr.id).angle, 'vel': r.game.get(pr.id).vel}, pr), true)
      r.game.on 'restart', => @emit_room(r, 'game:restart')
      r.game.on 'destroy', (pr)=>
        @emit_room(r, 'game:destroy', pr)
        element = r.game.get(pr.id)
        if element and element.object is 'base'
          r.game.restart()
      r.game.start()
      r.get('users').forEach join_user

    @rooms.on 'remove', (r)=>
      r.game.stop()
      @emit_lobby('room:room_remove', {'id': r.id})
    @rooms.on 'user:join', (r, user)=>
      @emit_lobby('room:user_join', {'room_id': r.id, 'user': user.user_data()})
      join_user(user)
    @rooms.on 'user:left', (r, user)=>
      r.game.destroy_user(user.id)
      if r.get('users').length > 0
        @emit_lobby('room:user_left', {'room_id': r.id, 'user_id': user.id})

  connection: (socket)->
    user = new @users.model({'socket': socket})
    @users.add(user)
    socket.on 'login:try', =>
      user.set({'id': socket.id, 'name': 'Guest '+socket.id})
      @emit_user user, 'login:success', user.user_data(true)
      user.set({'room': null})
#      return
#      if @rooms.length > 0
#        room_join({
#          room: @rooms.models[0].id
#          team: 0
#        })
#      else
#        room_create()

    room_create = =>
      if not user.is_authenticated() or user.get('room')
        return
      @rooms.add({'users': [user], 'stage': 1, 'max': 4})

    socket.on 'room:create', room_create

    socket.on 'room:open', (r)=>
      room = @rooms.get(r)
      if not user.is_authenticated() or not room
        return
      @emit_user user, 'roompreview:show', room.toJSON()

    room_join = (pr)=>
      if not user.is_authenticated()
        return
      try
        @rooms.user_join(user, pr)
      catch e

    socket.on 'room:join', room_join

    socket.on 'room:left', =>
      try
        @rooms.user_left(user)
      catch e

    socket.on 'end', =>
      @users.remove(user)

    socket.on 'control', (p)=>
      if not user.get('room')
        return
      user.get('room').game.user_action(user.id, p.move, p.active)

  emit_user: (user, args...)->
    @emit_socket.apply(@, [user.get('socket')].concat(args))

  emit_socket: (socket, args...)-> socket.emit.apply(@, args)

  emit_room: (room, args...)->
    room.get('users').forEach (u)=>
      @emit_user.apply(@, [u].concat(args))

  emit_lobby: (event, args)->
    @users.each (u)=>
      if not u.get('room') and u.is_authenticated()
        @emit_user(u, event, args)

