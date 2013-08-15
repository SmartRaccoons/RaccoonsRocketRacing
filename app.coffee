config = require('./config.js')
express = require('express')
_ = require('lodash')
fs = require('fs')
pjson = require('./package.json')
Router = require('./router')
#email   = require('emailjs').server.connect({
#    user: 'battletank@raccoons.lv',
#    password: '',
#    host: 'smtp.gmail.com',
#    ssl: true
#})

db = require('mysql').createConnection(config.db)

app = express()
server = app.listen(config.port)

_root_dir = __dirname

_mainHtml = ''
fs.readFile _root_dir+'/public/index.html', 'utf8', (err, text)-> _mainHtml = text.replace(/{version}/g, pjson.version)

app.use('/d', express.static(_root_dir + '/public/d'))
app.get '/', (req, res)-> res.send _mainHtml
app.get '/callback.html', (req, res)-> res.sendfile(_root_dir+'/public/callback.html')
#app.get '/transaction61ysdf', (req, res)->
#  r.transactionCoins parseInt(req.query['id']), req.query, -> res.send('OK')

if config.development
  require('./app_dev').init(app)
#else
#  process.on 'uncaughtException', (err)->
#    console.log err.message, err.stack
#    email.send({
#      subject: '[zolite] server error: '+err.message
#      text: err.stack+''
#      from: 'Zolīte <zolite@raccoons.lv>'
#      to: '<zolite@raccoons.lv>'
#    }, -> process.exit(1))

io = require('socket.io').listen(server)
io.set('log level', config.io.loglevel)
io.set('transports', config.io.transports)
io.set('polling duration', config.io.duration)

r = new Router({}, db, io)
#r.send.emit = (event, socket)->
#  args = Array.prototype.slice.apply(arguments).splice(2)
#  args.unshift(event)
#  socket.emit.apply(socket, args)

io.sockets.on 'connection', (socket)-> r.connection(socket)


console.log('http://127.0.0.1:'+config.port+' version:'+pjson.version)