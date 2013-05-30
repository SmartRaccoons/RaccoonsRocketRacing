events = require('events')


module.exports = class Router extends events.EventEmitter
  constructor: (options, db)->
    @db = db
    @send = new events.EventEmitter()

  connection: (socket)->
    socket.on 'login:request', (data)=>

    socket.on 'disconnect', =>