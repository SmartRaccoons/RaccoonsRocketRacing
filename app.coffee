config = require('./config.js')
express = require('express')
_ = require('lodash')
fs = require('fs')
Primus = require('primus')
jsp = require("uglify-js").parser
pro = require("uglify-js").uglify
events = require('events')
pjson = require('./package.json')
Router = require('./router')


email   = require('emailjs').server.connect({
    user: 'no-reply@raccoons.lv',
    password: 'yozpupuy',
    host: 'smtp.gmail.com',
    ssl: true
})

#db = require('mysql').createConnection(config.db)

app = express()
server = app.listen(config.port)

_mainHtml = ''
fs.readFile __dirname+'/public/index.html', 'utf8', (err, text)-> _mainHtml = text.replace(/{version}/g, pjson.version)

app.use('/d', express.static(__dirname + '/public/d'))
app.get '/', (req, res)-> res.send _mainHtml
app.get '/callback.html', (req, res)-> res.sendfile(__dirname + '/public/callback.html')
app.get '/transaction61ysdf', (req, res)->
#  r.transactionCoins parseInt(req.query['id']), req.query, -> res.send('OK')

if config.development
  require('./app_dev').init(app)
else
  process.on 'uncaughtException', (err)->
    console.log err.message, err.stack
    email.send({
      subject: '[CounterTanks] server error: '+err.message
      text: err.stack+''
      from: '<no-reply@raccoons.lv>'
      to: '<valuks@raccoons.lv>'
    }, -> process.exit(1))


primus = new Primus(server, { transformer: 'websockets' })
primus_client = pro.gen_code(pro.ast_squeeze(pro.ast_mangle(jsp.parse(primus.library()))))
app.get '/pr.js', (req, res)-> res.send primus_client


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


console.log('http://127.0.0.1:'+config.port+'/-bco version:'+pjson.version)
