// Generated by CoffeeScript 1.3.3
(function() {
  var Router, app, config, db, express, fs, io, pjson, r, server, _, _mainHtml, _root_dir;

  config = require('./config.js');

  express = require('express');

  _ = require('lodash');

  fs = require('fs');

  pjson = require('./package.json');

  Router = require('./router');

  db = require('mysql').createConnection(config.db);

  app = express();

  server = app.listen(config.port);

  _root_dir = __dirname;

  _mainHtml = '';

  fs.readFile(_root_dir + '/public/index.html', 'utf8', function(err, text) {
    return _mainHtml = text.replace(/{version}/g, pjson.version);
  });

  app.use('/d', express["static"](_root_dir + '/public/d'));

  app.get('/', function(req, res) {
    return res.send(_mainHtml);
  });

  app.get('/callback.html', function(req, res) {
    return res.sendfile(_root_dir + '/public/callback.html');
  });

  if (config.development) {
    require('./app_dev').init(app);
  }

  io = require('socket.io').listen(server);

  io.set('log level', config.io.loglevel);

  io.set('transports', config.io.transports);

  io.set('polling duration', config.io.duration);

  r = new Router({}, db);

  r.send.emit = function(event, socket) {
    var args;
    args = Array.prototype.slice.apply(arguments).splice(2);
    args.unshift(event);
    return socket.emit.apply(socket, args);
  };

  io.sockets.on('connection', function(socket) {
    return r.connection(socket);
  });

  console.log('http://127.0.0.1:' + config.port + ' version:' + pjson.version);

}).call(this);