root = exports ? this
if not root.Backbone and exports?
  root.Backbone = require('backbone')


class User extends root.Backbone.Model
  _main_attr: ['id']
  _main_own_attr: ['id', 'name']
  defaults:
    'name': ''

  sync: ->

  user_data: (own=false)->
    attr = {}
    for v in (if own then @_main_own_attr else @_main_attr)
      attr[v] = if v of @attributes then @attributes[v] else @[v]()
    attr

  is_authenticated: -> !!@get('id')


root.Users = class Users extends root.Backbone.Collection
  model: User


class Room extends root.Backbone.Model
  defaults:
    users: []

  initialize: ->
    for u in @get('users')
      @_add_user(u)

  is_full: -> @get('users').length is @get('max')

  _add_user: (u)->
    u.set('room', @)

  join_user: (user)->
    @_add_user(user)
    @get('users').push(user)
    @collection.trigger('user:join', @, user)

  left_user: (user)->
    users = []
    for u in @get('users')
      if u.id isnt user.id
        users.push(u)
    @set('users', users)
    u.set('room', null)
    @collection.trigger('user:left', @, user)

  toJSON: ->
      'id': @id
      'is_full': @is_full()
      'users': @get('users').map (u)-> u.user_data()


root.Rooms = class Rooms extends root.Backbone.Collection
  model: Room
  initialize: (models, opt)->
    @_id = 1
    @_max = opt&&opt['max'] || 2
    @on 'remove', (r)->
      r.get('users').forEach (u)-> u.set('room', null)
    @

  add: ->
    args = Array.prototype.slice.call(arguments)
    if not args[0].id
      args[0].id = @_id++
    if not args[0].max
      args[0].max = @_max
    root.Backbone.Collection.prototype.add.apply(@, args)

  join_user: (room_id, user)->
    room = @get(room_id)
    if not room?
      throw new Error 'wrong room'
    for r in @models
      for u in r.get('users')
        if user.id is u.id
          throw new Error 'user in room'
    if room.is_full()
      throw new Error 'full room'
    room.join_user(user)

  left_user: (user)->
    room = @by_user(user)
    if not room
      throw new Error 'not in room'
    room.left_user(user)
    if room.get('users').length is 0
      @remove(room)
      room = null

  by_user: (user)->
    for r in @models
      for u in r.get('users')
        if u.id is user.id
          return r
    return null

  toJSON: -> @map (r)-> r.toJSON()


