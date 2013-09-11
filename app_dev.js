// Generated by CoffeeScript 1.3.3
(function() {
  var nock,
    _this = this;

  nock = require('nock');

  exports.init = function(app, config) {
    app.get('/lodash/lodash.js', function(req, res) {
      return res.sendfile(__dirname + '/node_modules/lodash/lodash.js');
    });
    app.get('/backbone/backbone.js', function(req, res) {
      return res.sendfile(__dirname + '/node_modules/backbone/backbone.js');
    });
    app.get('/bco/client.js', function(req, res) {
      return res.sendfile(__dirname + '/bco/client.js');
    });
    return app.get('/-bco', function(req, res) {
      return res.sendfile(__dirname + '/public/dev.html');
    });
  };

}).call(this);
