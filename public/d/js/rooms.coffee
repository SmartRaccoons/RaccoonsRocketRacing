App.Rooms = class Rooms extends Backbone.View
  tagName: 'ol'
  rooms: {}

  add: (data)->
    r = new Room()
    r.rooms = @
    @listenTo r, 'join', => @trigger 'join', data.id
    @listenTo r, 'monitor:add', => @trigger 'monitor:add'
    @listenTo r, 'monitor:remove', => @trigger 'monitor:remove'
    r.render(data)
    r.$el.prependTo(@$el)
    @rooms[data.id] = r

  room_remove: (id)->
    @rooms[id].remove()
    delete @rooms[id]

  user_add: (room, user)-> @rooms[room].user_add(user)

  user_remove: (room, user)-> @rooms[room].user_remove(user)

  all: (rooms)-> @render(rooms)

  render: (rooms)->
    _.each @rooms, (r, i)=> @room_remove(i)
    _.each rooms, _.bind(@add, @)


class Room extends Backbone.View
  tagName: 'li'
  template: _.template """
                       <ul></ul>
                       <button type='button'><%=_l('Play')%></button>
                       """

  events:
    'click button': -> @trigger('join')

  user_add: (user)->
    @_users += 1
    if @_users is @_max
      @$button.attr('disabled', '')
    if user.id is @rooms.options.monitor
      @trigger 'monitor:add'
      @_monitor = true
    @$ul.append('<li data-pk="'+user.id+'"><strong>'+user.name+'</strong></li>')

  user_remove: (user)->
    @_users -= 1
    if @_users < @_max
      @$button.removeAttr('disabled')
    if user is @rooms.options.monitor
      @_monitor = false
      @trigger 'monitor:remove'
    @$ul.find('li[data-pk="'+user+'"]').remove()

  render: (data)->
    super
    @_users = 0
    @_max = data.max
    @$ul = @$('ul')
    @$button = @$('button')
    @$el.attr('data-pk', data.id)
    _.each data.users, _.bind(@user_add, @)

  remove: ->
    if @_monitor
      @trigger 'monitor:remove'
    super


App.CreateRoom = class CreateRoom extends Backbone.View
  className: 'room-new-add'
  template: _.template """
                       <button><%=_l('Create room')%></button>
                       """
  events:
    'click button': -> @trigger 'create'