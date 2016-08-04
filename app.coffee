config = require('./config')
express = require('express')
_ = require('lodash')
fs = require('fs')
Primus = require('primus')
jsp = require("uglify-js").parser
pro = require("uglify-js").uglify
events = require('events')
pjson = require('./package.json')
Router = require('./router')


if process.argv[2]
  _.extend(config, require("./config.#{process.argv[2]}"))

email   = require('emailjs').server.connect({
    user: config.support.email,
    password: config.support.pass,
    host: 'smtp.gmail.com',
    ssl: true
})


app = express()
server = app.listen(config.port)

_mainHtml = ''
fs.readFile __dirname+'/public/index.html', 'utf8', (err, text)-> _mainHtml = text.replace(/{version}/g, pjson.version).replace(/{analytics}/g, config.analytics)

app.use('/d', express.static(__dirname + '/public/d'))
app.get '/', (req, res)-> res.send _mainHtml
app.get '/callback.html', (req, res)-> res.sendFile(__dirname + '/public/callback.html')
app.get '/transaction61ysdf', (req, res)->
#  r.transactionCoins parseInt(req.query['id']), req.query, -> res.send('OK')


primus = new Primus(server, { transformer: 'websockets' })

if config.development
  require('./app_dev').init(app, primus)
else
  process.on 'uncaughtException', (err)->
    console.log err.message, err.stack
    email.send({
      subject: '[RRR] server error: '+err.message
      text: err.stack+''
      from: '<no-reply@raccoons.lv>'
      to: '<v@raccoons.lv>'
    }, -> process.exit(1))


callback_data = (socket, data)-> socket.emit.apply(socket, data)
callback_write = (socket, args)-> socket.spark.write(args)

if config.development
  wrap_delay = (fn, delay, log)->
    wrap = ->
      log.apply(this, arguments)
      fn.apply(this, arguments)
    if delay is 0
      return wrap
    ->
      args = arguments
      setTimeout ->
        wrap.apply(this, args)
      , delay
  callback_data = wrap_delay(callback_data, config.development_delay_in, (socket, data)->
    console.info 'data', socket.id, data
  )
  callback_write = wrap_delay(callback_write, config.development_delay_out, (socket, args, event)->
    console.info 'emit', socket.id, event, args
  )


r = new Router()
r.emit_socket = (socket, event)->
  args = Array.prototype.slice.apply(arguments).splice(2)
  args.unshift(event)
  callback_write(socket, args, event)

primus.on 'connection', (spark)->
  socket = new events.EventEmitter
  socket.id = spark.id
  spark.socket = socket
  socket.spark = spark
  socket.end = -> spark.end()
  spark.on 'end', -> socket.emit 'end'
  spark.on 'data', (data)->
    callback_data(socket, data)
  r.connection(socket)


console.log('http://127.0.0.1:'+config.port+'/-d version:'+pjson.version)
