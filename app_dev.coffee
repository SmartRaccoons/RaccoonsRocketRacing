nock = require('nock')

exports.init = (app, config)=>
  app.get '/lodash/lodash.js', (req, res)-> res.sendfile(__dirname+'/node_modules/lodash/lodash.js')
  app.get '/backbone/backbone.js', (req, res)-> res.sendfile(__dirname+'/node_modules/backbone/backbone.js')
  app.get '/bco/client.js', (req, res)-> res.sendfile(__dirname+'/bco/client.js')
  app.get '/-bco', (req, res)-> res.sendfile(__dirname+'/public/dev.html')