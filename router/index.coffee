events = require('events')
extend = require('util')._extend

Users = require('../room').Users
Rooms = require('../room').Rooms
Bco = require('../bco').Bco


map = [
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
      x = 0
      y = 0
      if u.get('team') > 0
        y = r.game.size[1]-32
      if r.get('teams')[u.get('team')].length > 1 and r.game.get_tank(r.get('teams')[0][0]).pos_start[0] is 0
        x = r.game.size[0]-32
      r.game.add_tank(u.id, {'pos': [x, y]})

    @rooms.on 'add', (r)=>
      @emit_lobby('room:room_add', r.toJSON())
      r.game = new Bco(map)
      r.game.on 'add', (pr)=> @emit_room(r, 'game:add', pr)
      r.game.on 'update', (pr)=>
        @emit_room(r, 'game:update', extend({'pos': r.game.get(pr.id).pos}, pr))
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
      r.game.destroy_tank(user.id)
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
      @rooms.add({'users': [user], 'stage': 1, 'max': 4, 'teams': [[user.id], []]})

    socket.on 'room:open', (r)=>
      room = @rooms.get(r)
      if not user.is_authenticated() or not room
        return
      @emit_user user, 'roompreview:show', room.toJSON()

    socket.on 'room:join', (pr)=>
      if not user.is_authenticated()
        return
      try
        @rooms.user_join(user, pr)
      catch e

    socket.on 'room:left', =>
      try
        @rooms.user_left(user)
      catch e

    socket.on 'end', =>
      @users.remove(user)

    socket.on 'control', (p)=>
      if not user.get('room')
        return
      user.get('room').game[if p.active then 'tank_start' else 'tank_stop'](user.id, p.move)

  emit_user: (user, event, args)-> @emit_socket user.get('socket'), event, args

  emit_socket: (socket, event, args)-> socket.emit event, args

  emit_room: (room, event, args)->
    room.get('users').forEach (u)=> @emit_user(u, event, args)


  emit_lobby: (event, args)->
    @users.each (u)=>
      if not u.get('room') and u.is_authenticated()
        @emit_user(u, event, args)

