exports.development = true
exports.port = 3052

exports.db = 'mysql://root@127.0.0.1/bco' //'?debug=true'
exports.dr_app_id = 'fedja';

exports.io = {
    loglevel : 3,
    transports : ["jsonp-polling"],
//    transports : ['websocket', 'htmlfile', 'xhr-polling', 'jsonp-polling'],
    duration : 8
}