nock = require('nock')

express = require('express')


exports.init = (app, primus)=>

  primus.save(__dirname + '/public/d/js/plugins/primus.js')
  app.use (req, res, next)->
    req.headers['Cache-Control'] = 'no-cache'
    next()
  app.get '/lodash/lodash.js', (req, res)-> res.sendfile(__dirname+'/node_modules/lodash/index.js')
  app.get '/backbone/backbone.js', (req, res)-> res.sendfile(__dirname+'/node_modules/backbone/backbone.js')
  app.use('/bower_components', express.static(__dirname + '/bower_components'))
  app.use('/node_modules', express.static(__dirname + '/node_modules'))
  app.get '/game/index.js', (req, res)-> res.sendfile(__dirname+'/game/index.js')
  app.get '/game/index.coffee', (req, res)-> res.sendfile(__dirname+'/game/index.coffee')
  app.get '/game/index.js.map', (req, res)-> res.sendfile(__dirname+'/game/index.js.map')
  app.get '/game/client.js', (req, res)-> res.sendfile(__dirname+'/game/client.js')
  app.get '/game/client.coffee', (req, res)-> res.sendfile(__dirname+'/game/client.coffee')
  app.get '/game/client.js.map', (req, res)-> res.sendfile(__dirname+'/game/client.js.map')
  app.get '/-d', (req, res)-> res.sendfile(__dirname+'/public/dev.html')
  app.use '/public_test', express.static(__dirname + '/public_test')