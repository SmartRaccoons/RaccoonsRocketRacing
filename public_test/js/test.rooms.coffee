describe 'Rooms', ->
  r = null
  beforeEach ->
    r = new App.Rooms({'monitor': 1})
    r.$el.appendTo(document.body)
  afterEach ->
    r.remove()

  describe 'render rooms', ->
    it 'add/remove room', ->
      r.render()
      expect(r.$('>li')).to.have.length(0)
      r.room_add({'id': 1, 'users': [{'id': 10, 'name': ''}]})
      r.room_add({'id': 2, 'users': []})
      expect(r.$('>li').length).to.be(2)
      expect(r.$('>li:eq(0)').attr('data-pk')).to.be('2')
      expect(r.$('>li:eq(1)').attr('data-pk')).to.be('1')
      expect(r.$('>li:eq(0)>ul>li').length).to.be(0)
      expect(r.$('>li:eq(1)>ul>li').length).to.be(1)
      r.room_remove(1)
      expect(r.$('>li').length).to.be(1)
      expect(r.rooms[1]).to.be(undefined)

    it 'add/remove user', ->
      r.render()
      expect(r.$('>li')).to.have.length(0)
      r.room_add({'id': 1, 'users': []})
      expect(r.$('>li:eq(0)>ul>li')).to.have.length(0)
      r.user_join(1, {'id': 3, 'name': 'Ze'})
      expect(r.$('>li:eq(0)>ul>li')).to.have.length(1)
      r.user_join(1, {'id': 4, 'name': 'Zebra'})
      expect(r.$('>li:eq(0)>ul>li')).to.have.length(2)
      expect(r.$('>li:eq(0)>ul>li:eq(0)').attr('data-pk')).to.be('3')
      expect(r.$('>li:eq(0)>ul>li:eq(0) strong').html()).to.be('Ze')
      r.user_left(1, 4)
      expect(r.$('>li:eq(0)>ul>li')).to.have.length(1)

    it 'change full', ->
      r.render([{'id': 1, max: 2, 'users': [{'id': 10}]}])
      expect(r.$('>li')).to.have.length(1)
      expect(r.$('>li:eq(0) button').is(':disabled')).not.be.ok()
      r.user_join(1, {'id': 11})
      expect(r.$('>li:eq(0) button').is(':disabled')).to.be.ok()
      r.user_left(1, 10)
      expect(r.$('>li:eq(0) button').is(':disabled')).not.be.ok()
      r.user_left(1, 11)
      expect(r.$('>li:eq(0) button').is(':disabled')).not.be.ok()

    it 'trigger join', ->
      r.render([{'id': 1, 'users': []}])
      r.room_add({'id': 2, 'users': []})
      spy = sinon.spy()
      r.on('join', spy)
      r.$('>li[data-pk="1"] button').click()
      expect(spy.callCount).to.be(1)
      expect(spy.getCall(0).args[0]).to.be(1)
      r.$('>li[data-pk="2"] button').click()
      expect(spy.getCall(1).args[0]).to.be(2)

    it 'monitor id on join', ->
      spy = sinon.spy()
      r.on 'monitor:add', spy
      r.render([{'id': 1, 'users': [{'id': 1, 'name': ''}]}])
      r.user_join(1, {'id': 2, 'name': ''})
      expect(spy.callCount).to.be(1)

    it 'monitor id on remove user', ->
      r.render([])
      spy = sinon.spy()
      r.on 'monitor:remove', spy
      r.render([{'id': 1, 'users': [{'id': 1, 'name': ''}, {'id': 2, 'name': ''}]}])
      r.user_left(1, 2)
      r.user_left(1, 1)
      expect(spy.callCount).to.be(1)

    it 'monitor id on remove room', ->
      spy = sinon.spy()
      r.on 'monitor:remove', spy
      r.render([{'id': 1, 'users': [{'id': 1, 'name': ''}]}, {'id': 2, 'is_full': false, 'users': []}])
      r.room_remove(2)
      r.room_remove(1)
      expect(spy.callCount).to.be(1)

    it 'monitor id on remove room and user', ->
      spy = sinon.spy()
      r.on 'monitor:remove', spy
      r.render([{'id': 1, 'users': [{'id': 1, 'name': ''}]}])
      r.user_join(1, 1)
      r.room_remove(1)
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