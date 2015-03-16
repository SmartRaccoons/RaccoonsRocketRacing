nock = require('nock')

exports.init = (app, config)=>
  app.get '/lodash/lodash.js', (req, res)-> res.sendfile(__dirname+'/node_modules/lodash/lodash.js')
  app.get '/backbone/backbone.js', (req, res)-> res.sendfile(__dirname+'/node_modules/backbone/backbone.js')
  app.get '/jquery.js', (req, res)-> res.sendfile(__dirname+'/bower_components/jquery/dist/jquery.js')
  app.get '/pixi.js', (req, res)-> res.sendfile(__dirname+'/bower_components/pixi.js/bin/pixi.dev.js')
  app.get '/bco/client.js', (req, res)-> res.sendfile(__dirname+'/bco/client.js')
  app.get '/bco/client.coffee', (req, res)-> res.sendfile(__dirname+'/bco/client.coffee')
  app.get '/bco/client.js.map', (req, res)-> res.sendfile(__dirname+'/bco/client.js.map')
  app.get '/-bco', (req, res)-> res.sendfile(__dirname+'/public/dev.html')