var r = new App.Router({el: $('body')}),
    primus;
App.socket.send.on('all', function(){
    primus.write(Array.prototype.slice.call(arguments));
});
var connect = function(address){
    primus = Primus.connect(address);
    primus.on('data', function(data){
        App.socket.receive.trigger.apply(App.socket.receive, data);
    });
    primus.on('timeout', function(){});
    primus.on('end', function(){});
    primus.on('close', function(){});
    primus.on('disconnection', function(){});
    primus.on('open', function(){
        App.socket.send.trigger('login:try')
//      App.socket.receive.trigger.apply(App.socket.receive, ['connect']);
    });
    return primus;
}
connect('').on('timeout', function(){
   connect(':9052');
});