assert = require("assert")
sinon = require('sinon')

@code = require('../')
Users = @code.Users
Rooms = @code.Rooms


describe 'Users', ->
  beforeEach ->
    @users = new Users
    @authorize_data = {'id': 2, 'name': 'Beni'}


  describe 'methods', ->
    it 'user_data', ->
      @users.add(@authorize_data)
      assert.deepEqual({'id': 2, 'name': 'Beni'}, @users.models[0].user_data())
      assert.deepEqual({'id': 2, 'name': 'Beni'}, @users.models[0].user_data(true))

    it 'is_authenticated', ->
      @users.add({'socket': {}})
      assert.equal(false, @users.models[0].is_authenticated())
      @users.models[0].set('id', 2)
      assert.equal(true, @users.models[0].is_authenticated())


describe 'Rooms', ->
  beforeEach ->
    @users = new Users()
    @users.add({'id': 'unique', 'name': 'lietotajs 1'})
    @users.add({'id': 'unique 2', 'name': 'lietotajs 2'})
    @users.add({'id': 'unique 3', 'name': 'lietotajs 3'})
    @users.add({'id': 'unique 4', 'name': 'lietotajs 4'})


  describe 'new room', ->
    it 'join user errors', ->
      rooms = new Rooms()
      rooms.add({'id': 'bena', 'users': [@users.models[0]], 'creator': @users.models[0]})
      rooms.add({'id': '2', 'users': [@users.models[1]], 'creator': @users.models[1]})
      assert.throws((=> rooms.join_user('no', @users.models[2])), Error, 'wrong room')
      assert.throws((=> rooms.join_user('2', @users.models[1])), Error, 'user in room')
      assert.throws((=> rooms.join_user('bena', @users.models[1])), Error, 'user in room')
      assert.doesNotThrow((=> rooms.join_user('bena', @users.models[2])))

    it 'left user errors', ->
      rooms = new Rooms()
      rooms.add({'id': 'bena', 'users': [@users.models[0]], 'creator': @users.models[0]})
      assert.throws((=> rooms.left_user(@users.models[1])), Error, 'not in room')
      assert.doesNotThrow((=> rooms.left_user(@users.models[0])))

    it 'join user', ->
      rooms = new Rooms()
      spy = sinon.spy()
      rooms.on 'user:join', spy
      rooms.add({'id': 'bena', 'users': [@users.models[0]], 'creator': @users.models[0]})
      assert.equal(rooms.models[0].id, @users.models[0].get('room').id)
      rooms.join_user('bena', @users.models[1])
      assert.equal(rooms.models[0].id, @users.models[1].get('room').id)
      assert.equal('bena', spy.getCall(0).args[0].get('id'))
      assert.equal('unique 2', spy.getCall(0).args[1].get('id'))
      assert.equal(1, spy.callCount)
      assert.equal(rooms.get('bena').get('users').length, 2)

    it 'left user', ->
      rooms = new Rooms()
      spy = sinon.spy()
      rooms.on 'user:left', spy
      rooms.add({'id': 'bena', 'users': [@users.models[0]], 'creator': @users.models[0]})
      rooms.join_user('bena', @users.models[1])
      rooms.left_user(@users.models[0])
      assert.equal('bena', spy.getCall(0).args[0].get('id'))
      assert.equal('unique', spy.getCall(0).args[1].get('id'))
      assert.equal(1, spy.callCount)
      assert.equal(rooms.get('bena').get('users').length, 1)
      assert.equal(null, @users.models[0].get('room'))

    it 'left last user and destroy room', ->
      rooms = new Rooms()
      spy = sinon.spy()
      rooms.on 'remove', spy
      rooms.add({'id': 'bena', 'users': [@users.models[0]], 'creator': @users.models[0]})
      rooms.left_user(@users.models[0])
      assert.equal('bena', spy.getCall(0).args[0].get('id'))
      assert.equal(0, rooms.models.length)


  describe 'toJSON', ->
    it 'attributes', ->
      rooms = new Rooms(null, {'max': 3})
      rooms.add({'stage': 1, 'users': [@users.models[0]]})
      rooms.add({'stage': 1, 'users': [@users.models[1], @users.models[2], @users.models[3]], 'type': ['d']})
      assert.deepEqual({'id': 1, 'max': 3, 'stage': 1, 'users': [{'id': 'unique', 'name': 'lietotajs 1'}]}, rooms.toJSON()[0])
      assert.equal(3, rooms.toJSON()[1]['max'])
      assert.deepEqual(2, rooms.toJSON()[1]['id'])
      assert.deepEqual([{'id': 'unique 2', 'name': 'lietotajs 2'},
                          {'id': 'unique 3', 'name': 'lietotajs 3'},
                          {'id': 'unique 4', 'name': 'lietotajs 4'}], rooms.toJSON()[1]['users'])


  describe 'create/remove room', ->
    it '3 max players', ->
      rooms = new Rooms([], {'max': 3})
      rooms.add('id': 'bena', 'users': [@users.models[0]], 'creator': @users.models[0])
      rooms.join_user('bena', @users.models[1])
      rooms.join_user('bena', @users.models[2])
      assert.throws((=> rooms.joinUser('bena', @users.models[3])), Error, 'full room')

    it 'remove room', ->
      rooms = new Rooms([], {'max': 3})
      spy = sinon.spy()
      rooms.on 'remove', spy
      rooms.add('id': 'bena', 'users': [@users.models[0]], 'creator': @users.models[0])
      rooms.join_user('bena', @users.models[1])
      rooms.join_user('bena', @users.models[2])
      rooms.remove(rooms.models[0])
      assert.equal(1, spy.callCount)
      assert.equal(null, @users.models[0].room)
      assert.equal(null, @users.models[1].room)
      assert.equal(null, @users.models[2].room)
