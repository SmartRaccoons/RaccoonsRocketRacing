// Generated by CoffeeScript 1.6.3
(function() {
  var Primus, Router, app, config, email, events, express, fs, jsp, pjson, primus, primus_client, pro, r, server, _, _mainHtml;

  config = require('./config.js');

  express = require('express');

  _ = require('lodash');

  fs = require('fs');

  Primus = require('primus');

  jsp = require("uglify-js").parser;

  pro = require("uglify-js").uglify;

  events = require('events');

  pjson = require('./package.json');

  Router = require('./router');

  email = require('emailjs').server.connect({
    user: 'no-reply@raccoons.lv',
    password: 'yozpupuy',
    host: 'smtp.gmail.com',
    ssl: true
  });

  app = express();

  server = app.listen(config.port);

  _mainHtml = '';

  fs.readFile(__dirname + '/public/index.html', 'utf8', function(err, text) {
    return _mainHtml = text.replace(/{version}/g, pjson.version);
  });

  app.use('/d', express["static"](__dirname + '/public/d'));

  app.get('/', function(req, res) {
    return res.send(_mainHtml);
  });

  app.get('/callback.html', function(req, res) {
    return res.sendfile(__dirname + '/public/callback.html');
  });

  app.get('/transaction61ysdf', function(req, res) {});

  if (config.development) {
    require('./app_dev').init(app);
  } else {
    process.on('uncaughtException', function(err) {
      console.log(err.message, err.stack);
      return email.send({
        subject: '[CounterTanks] server error: ' + err.message,
        text: err.stack + '',
        from: '<no-reply@raccoons.lv>',
        to: '<valuks@raccoons.lv>'
      }, function() {
        return process.exit(1);
      });
    });
  }

  primus = new Primus(server, {
    transformer: 'browserchannel'
  });

  primus_client = pro.gen_code(pro.ast_squeeze(pro.ast_mangle(jsp.parse(primus.library()))));

  app.get('/pr.js', function(req, res) {
    return res.send(primus_client);
  });

  r = new Router();

  r.emit_socket = function(socket, event) {
    var args;
    args = Array.prototype.slice.apply(arguments).splice(2);
    args.unshift(event);
    return socket.spark.write(args);
  };

  primus.on('connection', function(spark) {
    var socket;
    socket = new events.EventEmitter;
    socket.id = spark.id;
    spark.socket = socket;
    socket.spark = spark;
    socket.end = function() {
      return spark.end();
    };
    spark.on('end', function() {
      return socket.emit('end');
    });
    spark.on('data', function(data) {
      return socket.emit.apply(socket, data);
    });
    return r.connection(socket);
  });

  console.log('http://127.0.0.1:' + config.port + '/-bco version:' + pjson.version);

}).call(this);
