describe 'Rooms', ->
  r = null
  beforeEach ->
    r = new App.Rooms({'monitor': 1, 'stages': {1: 'stage 1', 2: 'stage 2'}})
    r.$el.appendTo(document.body)
  afterEach ->
    r.remove()

  describe 'render rooms', ->
    it 'add/remove room', ->
      r.render()
      expect(r.$('>li')).to.have.length(0)
      r.room_add({'id': 1, 'name': 'Beni', 'max': 2, 'stage': 1, 'users': [{'id': 10, 'name': ''}]})
      r.room_add({'id': 2, 'name': 'Bon', 'max': 10, 'stage': 2, 'users': []})
      expect(r.$('>li').length).to.be(2)
      expect(r.$('>li:eq(0)').attr('data-pk')).to.be('2')
      expect(r.$('>li:eq(0)').attr('data-max')).to.be('10')
      expect(r.$('>li:eq(0)').attr('data-users')).to.be('0')
      expect(r.$('>li:eq(1)').attr('data-pk')).to.be('1')
      expect(r.$('>li:eq(1)').attr('data-max')).to.be('2')
      expect(r.$('>li:eq(1)').attr('data-users')).to.be('1')
      expect(r.$('>li:eq(0) strong').html()).to.be('Bon')
      expect(r.$('>li:eq(1) strong').html()).to.be('Beni')
      expect(r.$('>li:eq(0) span').text()).to.be('stage 2')
      expect(r.$('>li:eq(1) span').text()).to.be('stage 1')
      r.room_remove({'id': 1})
      expect(r.$('>li').length).to.be(1)
      expect(r.rooms[1]).to.be(undefined)

    it 'add/remove user', ->
      r.render()
      r.room_add({'id': 1, stage: 1, max: 2, 'users': []})
      expect(r.$('>li:eq(0)').attr('data-users')).to.be('0')
      r.user_join({'room_id': 1, 'user': {'id': 3, 'name': 'Ze'}})
      expect(r.$('>li:eq(0)').attr('data-users')).to.be('1')
      r.user_left({'room_id': 1, 'user_id': 4})
      expect(r.$('>li:eq(0)').attr('data-users')).to.be('0')

    it 'trigger open', ->
      r.render([{'id': 1, 'stage': 1, 'users': []}])
      r.room_add({'id': 2, 'stage': 1, 'users': []})
      spy = sinon.spy()
      r.on('open', spy)
      r.$('>li[data-pk="1"] strong').click()
      expect(spy.callCount).to.be(1)
      expect(spy.getCall(0).args[0]).to.be(1)

    it 'monitor id on join', ->
      spy = sinon.spy()
      r.on 'monitor:add', spy
      r.render([{'id': 1, 'stage': 1, 'users': [{'id': 1, 'name': ''}]}])
      r.user_join({'room_id': 1, 'user': {'id': 2, 'name': ''}})
      expect(spy.callCount).to.be(1)

    it 'monitor id on remove user', ->
      r.render([])
      spy = sinon.spy()
      r.on 'monitor:remove', spy
      r.render([{'id': 1, 'stage': 1, 'users': [{'id': 1, 'name': ''}, {'id': 2, 'name': ''}]}])
      r.user_left({'room_id': 1, 'user_id': 2})
      r.user_left({'room_id': 1, 'user_id': 1})
      expect(spy.callCount).to.be(1)

    it 'monitor id on remove room', ->
      spy = sinon.spy()
      r.on 'monitor:remove', spy
      r.render([{'id': 1, 'stage': 1, 'users': [{'id': 1, 'name': ''}]}, {'id': 2, stage: 1, 'is_full': false, 'users': []}])
      r.room_remove({'id': 2})
      r.room_remove({'id': 1})
      expect(spy.callCount).to.be(1)

    it 'monitor id on remove room and user', ->
      spy = sinon.spy()
      r.on 'monitor:remove', spy
      r.render([{'id': 1, 'stage': 1, 'users': [{'id': 1, 'name': ''}]}])
      r.user_join({'room_id': 1, 'user': {'id': 1}})
      r.room_remove({'id': 1})
      expect(spy.callCount).to.be(1)


describe 'Create Room', ->
  describe 'new room', ->
    r = null
    spy = null
    beforeEach ->
      r = new App.CreateRoom()
      r.$el.appendTo(document.body)
      r.render()
      spy = sinon.spy()
      r.on 'create', spy
    afterEach ->
      r.remove()

    it 'trigger event (default)', ->
      r.$('button').click()
      expect(spy.callCount).to.be(1)


describe 'Preview Room', ->
  r = null
  spy = null
  beforeEach ->
    r = new App.RoomPreview()

  afterEach ->
    r.remove()

  describe 'render', ->

    it 'map params', ->
      r.show({'id': 10, 'name': 'ben', 'max': 2, 'stage': 1, 'users': [], 'teams': []})
      expect(r.$('.preview img').attr('src')).to.be('d/maps/preview1.png')
      expect(r.$('.preview strong').html()).to.be('ben')
      expect(r.$('.preview i').html()).to.be('0/2')

    it 'users', ->
      r.show({'id': 10, 'name': 'ben', 'max': 2, 'stage': 1, 'users': [{'id': 1, 'name': 'user 1'}, {'id': 2, 'name': 'user 2'}]})
      expect(r.$('.users li:nth-child(1)').attr('data-id')).to.be('1')
      expect(r.$('.users li:nth-child(1) strong').html()).to.be('user 1')
      expect(r.$('.users li:nth-child(2)').attr('data-id')).to.be('2')
      expect(r.$('.users li:nth-child(2) strong').html()).to.be('user 2')

    it 'event join', ->
      r.show({'id': 10, 'name': 'ben', 'max': 2, 'stage': 1, 'users': [{'id': 1, 'name': 'user 1'}]})
      spy = sinon.spy()
      r.on 'join', spy
      r.$('.users button').click()
      expect(spy.callCount).to.be(1)
      expect(spy.getCall(0).args[0]).to.be.eql({'room': 10})
