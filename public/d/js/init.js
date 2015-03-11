var _l = function(key, subparams){
    var res = App.lang.strings[App.lang.active][key];
    if(subparams){
        res = res.replace(/\\?\{([^{}]+)\}/g, function(match, name){
            if (match.charAt(0) == '\\'){
                return match.slice(1);
            }
            return (subparams[name] != null) ? subparams[name] : '';
        });
    }
    return res;
};

var App = {
    'events': {},
    'socket': {'receive': {}, 'send': {}},
    'sound': function(what){
        try {
            var a = new Audio('/d/sounds/'+what+'.wav');
            a.volume = 0.3;
            a.play();
        } catch (e){}
    },
    'lang': {
        'active': 'en',
        'strings': {
            'en': {}
        }
    }
};
_.extend(App.events, Backbone.Events);
_.extend(App.socket.receive, Backbone.Events);
_.extend(App.socket.send, Backbone.Events);