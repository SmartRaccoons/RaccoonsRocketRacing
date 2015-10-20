// Generated by CoffeeScript 1.8.0
(function() {
  var nock;

  nock = require('nock');

  exports.init = (function(_this) {
    return function(app, config) {
      app.use(function(req, res, next) {
        req.headers['Cache-Control'] = 'no-cache';
        return next();
      });
      app.get('/lodash/lodash.js', function(req, res) {
        return res.sendfile(__dirname + '/node_modules/lodash/lodash.js');
      });
      app.get('/backbone/backbone.js', function(req, res) {
        return res.sendfile(__dirname + '/node_modules/backbone/backbone.js');
      });
      app.get('/jquery.js', function(req, res) {
        return res.sendfile(__dirname + '/bower_components/jquery/dist/jquery.js');
      });
      app.get('/pixi.js', function(req, res) {
        return res.sendfile(__dirname + '/bower_components/pixi.js/bin/pixi.dev.js');
      });
      app.get('/bco/index.js', function(req, res) {
        return res.sendfile(__dirname + '/bco/index.js');
      });
      app.get('/bco/index.coffee', function(req, res) {
        return res.sendfile(__dirname + '/bco/index.coffee');
      });
      app.get('/bco/index.js.map', function(req, res) {
        return res.sendfile(__dirname + '/bco/index.js.map');
      });
      app.get('/bco/client.js', function(req, res) {
        return res.sendfile(__dirname + '/bco/client.js');
      });
      app.get('/bco/client.coffee', function(req, res) {
        return res.sendfile(__dirname + '/bco/client.coffee');
      });
      app.get('/bco/client.js.map', function(req, res) {
        return res.sendfile(__dirname + '/bco/client.js.map');
      });
      return app.get('/-bco', function(req, res) {
        return res.sendfile(__dirname + '/public/dev.html');
      });
    };
  })(this);

}).call(this);
