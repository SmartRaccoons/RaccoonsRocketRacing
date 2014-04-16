App.Rooms = class Rooms extends Backbone.View
  tagName: 'ol'
  rooms: {}

  events:
    'click >li': (e)-> @trigger 'open', parseInt($(e.target).attr('data-pk'))

  room_add: (data)->
    r = new Room()
    r.rooms = @
    @listenTo r, 'monitor:add', => @trigger 'monitor:add'
    @listenTo r, 'monitor:remove', => @trigger 'monitor:remove'
    r.render(data)
    r.$el.prependTo(@$el)
    @rooms[data.id] = r

  room_remove: (data)->
    @rooms[data.id].remove()
    delete @rooms[data.id]

  user_join: (data)-> @rooms[data.room_id].user_add(data.user)

  user_left: (data)-> @rooms[data.room_id].user_left(data.user_id)

  list: (rooms)-> @render(rooms)

  render: (rooms)->
    _.each @rooms, (r, i)=> @room_remove({'id': i})
    _.each rooms, _.bind(@room_add, @)


class Room extends Backbone.View
  tagName: 'li'
  template: _.template """
                       <strong><%=name%></strong>
                       <span><%=self.rooms.options.stages[stage]%></span>
                       """

  user_add: (user)->
    @_users += 1
    @_update_users()
    if user.id is @rooms.options.monitor
      @trigger 'monitor:add'
      @_monitor = true

  user_left: (user)->
    @_users -= 1
    @_update_users()
    if user is @rooms.options.monitor
      @_monitor = false
      @trigger 'monitor:remove'

  _update_users: ->
    @$el.attr('data-users', @_users)

  render: (data)->
    super
    @_users = 0
    @_max = data.max
    @$el.attr('data-pk', data.id)
    @$el.attr('data-max', data.max)
    @_update_users()
    _.each data.users, _.bind(@user_add, @)

  remove: ->
    if @_monitor
      @trigger 'monitor:remove'
    super


App.RoomPreview = class RoomPreview extends Backbone.View
  template: _.template """
						<div class="preview">
							<img src="public/d/maps/preview<%=stage%>.png" />
							<strong><%=name%></strong>

							<i><%=users.length%>/<%=max%></i>
						</div>
						<input type="text" value="http://countertank.com/#m<%=id%>" />
            <div class="teams" data-teams="<%=teams.length%>">
              <% _.each(teams, function(users, i){ %>
                <div data-id="<%=i%>">
                  <ol>
                    <% _.each(users, function(u){ %>
                      <li data-id="<%=u%>">
                          <strong><%=users_ids[u].name%></strong>
                      </li>
                    <% }) %>
                  </ol>
                  <button><%=_l('Join')%></button>
                </div>
              <% }) %>
            </div>
  """
  events:
    'click .preview input': (e)-> @.select()
    'click .teams button': (e)-> @trigger 'join', {'room': @_room_id, 'team': parseInt($(e.target).parent('div').attr('data-id'))}


  show: -> @render.apply(@, arguments)

  __renderData: (d)->
    @_room_id = d.id
    users_ids = {}
    _.each d.users, (u)->
      users_ids[u.id] = u
    return {'users_ids': users_ids}


App.CreateRoom = class CreateRoom extends Backbone.View
  className: 'room-new-add'
  template: _.template """
                       <button><%=_l('Create room')%></button>
                       """
  events:
    'click button': -> @trigger 'create'