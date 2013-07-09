/* Socket.IO.js build:0.9.16, development. Copyright(c) 2011 LearnBoost <dev@learnboost.com> MIT Licensed */
var io=("undefined"===typeof module?{}:module.exports);
(function(){(function(exports,global){var io=exports;
io.version="0.9.16";
io.protocol=1;
io.transports=[];
io.j=[];
io.sockets={};
io.connect=function(host,details){var uri=io.util.parseUri(host),uuri,socket;
if(global&&global.location){uri.protocol=uri.protocol||global.location.protocol.slice(0,-1);
uri.host=uri.host||(global.document?global.document.domain:global.location.hostname);
uri.port=uri.port||global.location.port
}uuri=io.util.uniqueUri(uri);
var options={host:uri.host,secure:"https"==uri.protocol,port:uri.port||("https"==uri.protocol?443:80),query:uri.query||""};
io.util.merge(options,details);
if(options["force new connection"]||!io.sockets[uuri]){socket=new io.Socket(options)
}if(!options["force new connection"]&&socket){io.sockets[uuri]=socket
}socket=socket||io.sockets[uuri];
return socket.of(uri.path.length>1?uri.path:"")
}
})("object"===typeof module?module.exports:(this.io={}),this);
(function(exports,global){var util=exports.util={};
var re=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];
util.parseUri=function(str){var m=re.exec(str||""),uri={},i=14;
while(i--){uri[parts[i]]=m[i]||""
}return uri
};
util.uniqueUri=function(uri){var protocol=uri.protocol,host=uri.host,port=uri.port;
if("document" in global){host=host||document.domain;
port=port||(protocol=="https"&&document.location.protocol!=="https:"?443:document.location.port)
}else{host=host||"localhost";
if(!port&&protocol=="https"){port=443
}}return(protocol||"http")+"://"+host+":"+(port||80)
};
util.query=function(base,addition){var query=util.chunkQuery(base||""),components=[];
util.merge(query,util.chunkQuery(addition||""));
for(var part in query){if(query.hasOwnProperty(part)){components.push(part+"="+query[part])
}}return components.length?"?"+components.join("&"):""
};
util.chunkQuery=function(qs){var query={},params=qs.split("&"),i=0,l=params.length,kv;
for(;
i<l;
++i){kv=params[i].split("=");
if(kv[0]){query[kv[0]]=kv[1]
}}return query
};
var pageLoaded=false;
util.load=function(fn){if("document" in global&&document.readyState==="complete"||pageLoaded){return fn()
}util.on(global,"load",fn,false)
};
util.on=function(element,event,fn,capture){if(element.attachEvent){element.attachEvent("on"+event,fn)
}else{if(element.addEventListener){element.addEventListener(event,fn,capture)
}}};
util.request=function(xdomain){if(xdomain&&"undefined"!=typeof XDomainRequest&&!util.ua.hasCORS){return new XDomainRequest()
}if("undefined"!=typeof XMLHttpRequest&&(!xdomain||util.ua.hasCORS)){return new XMLHttpRequest()
}if(!xdomain){try{return new window[(["Active"].concat("Object").join("X"))]("Microsoft.XMLHTTP")
}catch(e){}}return null
};
if("undefined"!=typeof window){util.load(function(){pageLoaded=true
})
}util.defer=function(fn){if(!util.ua.webkit||"undefined"!=typeof importScripts){return fn()
}util.load(function(){setTimeout(fn,100)
})
};
util.merge=function merge(target,additional,deep,lastseen){var seen=lastseen||[],depth=typeof deep=="undefined"?2:deep,prop;
for(prop in additional){if(additional.hasOwnProperty(prop)&&util.indexOf(seen,prop)<0){if(typeof target[prop]!=="object"||!depth){target[prop]=additional[prop];
seen.push(additional[prop])
}else{util.merge(target[prop],additional[prop],depth-1,seen)
}}}return target
};
util.mixin=function(ctor,ctor2){util.merge(ctor.prototype,ctor2.prototype)
};
util.inherit=function(ctor,ctor2){function f(){}f.prototype=ctor2.prototype;
ctor.prototype=new f
};
util.isArray=Array.isArray||function(obj){return Object.prototype.toString.call(obj)==="[object Array]"
};
util.intersect=function(arr,arr2){var ret=[],longest=arr.length>arr2.length?arr:arr2,shortest=arr.length>arr2.length?arr2:arr;
for(var i=0,l=shortest.length;
i<l;
i++){if(~util.indexOf(longest,shortest[i])){ret.push(shortest[i])
}}return ret
};
util.indexOf=function(arr,o,i){for(var j=arr.length,i=i<0?i+j<0?0:i+j:i||0;
i<j&&arr[i]!==o;
i++){}return j<=i?-1:i
};
util.toArray=function(enu){var arr=[];
for(var i=0,l=enu.length;
i<l;
i++){arr.push(enu[i])
}return arr
};
util.ua={};
util.ua.hasCORS="undefined"!=typeof XMLHttpRequest&&(function(){try{var a=new XMLHttpRequest()
}catch(e){return false
}return a.withCredentials!=undefined
})();
util.ua.webkit="undefined"!=typeof navigator&&/webkit/i.test(navigator.userAgent);
util.ua.iDevice="undefined"!=typeof navigator&&/iPad|iPhone|iPod/i.test(navigator.userAgent)
})("undefined"!=typeof io?io:module.exports,this);
(function(exports,io){exports.EventEmitter=EventEmitter;
function EventEmitter(){}EventEmitter.prototype.on=function(name,fn){if(!this.$events){this.$events={}
}if(!this.$events[name]){this.$events[name]=fn
}else{if(io.util.isArray(this.$events[name])){this.$events[name].push(fn)
}else{this.$events[name]=[this.$events[name],fn]
}}return this
};
EventEmitter.prototype.addListener=EventEmitter.prototype.on;
EventEmitter.prototype.once=function(name,fn){var self=this;
function on(){self.removeListener(name,on);
fn.apply(this,arguments)
}on.listener=fn;
this.on(name,on);
return this
};
EventEmitter.prototype.removeListener=function(name,fn){if(this.$events&&this.$events[name]){var list=this.$events[name];
if(io.util.isArray(list)){var pos=-1;
for(var i=0,l=list.length;
i<l;
i++){if(list[i]===fn||(list[i].listener&&list[i].listener===fn)){pos=i;
break
}}if(pos<0){return this
}list.splice(pos,1);
if(!list.length){delete this.$events[name]
}}else{if(list===fn||(list.listener&&list.listener===fn)){delete this.$events[name]
}}}return this
};
EventEmitter.prototype.removeAllListeners=function(name){if(name===undefined){this.$events={};
return this
}if(this.$events&&this.$events[name]){this.$events[name]=null
}return this
};
EventEmitter.prototype.listeners=function(name){if(!this.$events){this.$events={}
}if(!this.$events[name]){this.$events[name]=[]
}if(!io.util.isArray(this.$events[name])){this.$events[name]=[this.$events[name]]
}return this.$events[name]
};
EventEmitter.prototype.emit=function(name){if(!this.$events){return false
}var handler=this.$events[name];
if(!handler){return false
}var args=Array.prototype.slice.call(arguments,1);
if("function"==typeof handler){handler.apply(this,args)
}else{if(io.util.isArray(handler)){var listeners=handler.slice();
for(var i=0,l=listeners.length;
i<l;
i++){listeners[i].apply(this,args)
}}else{return false
}}return true
}
})("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports);
(function(exports,nativeJSON){if(nativeJSON&&nativeJSON.parse){return exports.JSON={parse:nativeJSON.parse,stringify:nativeJSON.stringify}
}var JSON=exports.JSON={};
function f(n){return n<10?"0"+n:n
}function date(d,key){return isFinite(d.valueOf())?d.getUTCFullYear()+"-"+f(d.getUTCMonth()+1)+"-"+f(d.getUTCDate())+"T"+f(d.getUTCHours())+":"+f(d.getUTCMinutes())+":"+f(d.getUTCSeconds())+"Z":null
}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;
function quote(string){escapable.lastIndex=0;
return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})+'"':'"'+string+'"'
}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];
if(value instanceof Date){value=date(key)
}if(typeof rep==="function"){value=rep.call(holder,key,value)
}switch(typeof value){case"string":return quote(value);
case"number":return isFinite(value)?String(value):"null";
case"boolean":case"null":return String(value);
case"object":if(!value){return"null"
}gap+=indent;
partial=[];
if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;
for(i=0;
i<length;
i+=1){partial[i]=str(i,value)||"null"
}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";
gap=mind;
return v
}if(rep&&typeof rep==="object"){length=rep.length;
for(i=0;
i<length;
i+=1){if(typeof rep[i]==="string"){k=rep[i];
v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";
gap=mind;
return v
}}JSON.stringify=function(value,replacer,space){var i;
gap="";
indent="";
if(typeof space==="number"){for(i=0;
i<space;
i+=1){indent+=" "
}}else{if(typeof space==="string"){indent=space
}}rep=replacer;
if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")
}return str("",{"":value})
};
JSON.parse=function(text,reviver){var j;
function walk(holder,key){var k,v,value=holder[key];
if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);
if(v!==undefined){value[k]=v
}else{delete value[k]
}}}}return reviver.call(holder,key,value)
}text=String(text);
cx.lastIndex=0;
if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})
}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");
return typeof reviver==="function"?walk({"":j},""):j
}throw new SyntaxError("JSON.parse")
}
})("undefined"!=typeof io?io:module.exports,typeof JSON!=="undefined"?JSON:undefined);
(function(exports,io){var parser=exports.parser={};
var packets=parser.packets=["disconnect","connect","heartbeat","message","json","event","ack","error","noop"];
var reasons=parser.reasons=["transport not supported","client not handshaken","unauthorized"];
var advice=parser.advice=["reconnect"];
var JSON=io.JSON,indexOf=io.util.indexOf;
parser.encodePacket=function(packet){var type=indexOf(packets,packet.type),id=packet.id||"",endpoint=packet.endpoint||"",ack=packet.ack,data=null;
switch(packet.type){case"error":var reason=packet.reason?indexOf(reasons,packet.reason):"",adv=packet.advice?indexOf(advice,packet.advice):"";
if(reason!==""||adv!==""){data=reason+(adv!==""?("+"+adv):"")
}break;
case"message":if(packet.data!==""){data=packet.data
}break;
case"event":var ev={name:packet.name};
if(packet.args&&packet.args.length){ev.args=packet.args
}data=JSON.stringify(ev);
break;
case"json":data=JSON.stringify(packet.data);
break;
case"connect":if(packet.qs){data=packet.qs
}break;
case"ack":data=packet.ackId+(packet.args&&packet.args.length?"+"+JSON.stringify(packet.args):"");
break
}var encoded=[type,id+(ack=="data"?"+":""),endpoint];
if(data!==null&&data!==undefined){encoded.push(data)
}return encoded.join(":")
};
parser.encodePayload=function(packets){var decoded="";
if(packets.length==1){return packets[0]
}for(var i=0,l=packets.length;
i<l;
i++){var packet=packets[i];
decoded+="\ufffd"+packet.length+"\ufffd"+packets[i]
}return decoded
};
var regexp=/([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
parser.decodePacket=function(data){var pieces=data.match(regexp);
if(!pieces){return{}
}var id=pieces[2]||"",data=pieces[5]||"",packet={type:packets[pieces[1]],endpoint:pieces[4]||""};
if(id){packet.id=id;
if(pieces[3]){packet.ack="data"
}else{packet.ack=true
}}switch(packet.type){case"error":var pieces=data.split("+");
packet.reason=reasons[pieces[0]]||"";
packet.advice=advice[pieces[1]]||"";
break;
case"message":packet.data=data||"";
break;
case"event":try{var opts=JSON.parse(data);
packet.name=opts.name;
packet.args=opts.args
}catch(e){}packet.args=packet.args||[];
break;
case"json":try{packet.data=JSON.parse(data)
}catch(e){}break;
case"connect":packet.qs=data||"";
break;
case"ack":var pieces=data.match(/^([0-9]+)(\+)?(.*)/);
if(pieces){packet.ackId=pieces[1];
packet.args=[];
if(pieces[3]){try{packet.args=pieces[3]?JSON.parse(pieces[3]):[]
}catch(e){}}}break;
case"disconnect":case"heartbeat":break
}return packet
};
parser.decodePayload=function(data){if(data.charAt(0)=="\ufffd"){var ret=[];
for(var i=1,length="";
i<data.length;
i++){if(data.charAt(i)=="\ufffd"){ret.push(parser.decodePacket(data.substr(i+1).substr(0,length)));
i+=Number(length)+1;
length=""
}else{length+=data.charAt(i)
}}return ret
}else{return[parser.decodePacket(data)]
}}
})("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports);
(function(exports,io){exports.Transport=Transport;
function Transport(socket,sessid){this.socket=socket;
this.sessid=sessid
}io.util.mixin(Transport,io.EventEmitter);
Transport.prototype.heartbeats=function(){return true
};
Transport.prototype.onData=function(data){this.clearCloseTimeout();
if(this.socket.connected||this.socket.connecting||this.socket.reconnecting){this.setCloseTimeout()
}if(data!==""){var msgs=io.parser.decodePayload(data);
if(msgs&&msgs.length){for(var i=0,l=msgs.length;
i<l;
i++){this.onPacket(msgs[i])
}}}return this
};
Transport.prototype.onPacket=function(packet){this.socket.setHeartbeatTimeout();
if(packet.type=="heartbeat"){return this.onHeartbeat()
}if(packet.type=="connect"&&packet.endpoint==""){this.onConnect()
}if(packet.type=="error"&&packet.advice=="reconnect"){this.isOpen=false
}this.socket.onPacket(packet);
return this
};
Transport.prototype.setCloseTimeout=function(){if(!this.closeTimeout){var self=this;
this.closeTimeout=setTimeout(function(){self.onDisconnect()
},this.socket.closeTimeout)
}};
Transport.prototype.onDisconnect=function(){if(this.isOpen){this.close()
}this.clearTimeouts();
this.socket.onDisconnect();
return this
};
Transport.prototype.onConnect=function(){this.socket.onConnect();
return this
};
Transport.prototype.clearCloseTimeout=function(){if(this.closeTimeout){clearTimeout(this.closeTimeout);
this.closeTimeout=null
}};
Transport.prototype.clearTimeouts=function(){this.clearCloseTimeout();
if(this.reopenTimeout){clearTimeout(this.reopenTimeout)
}};
Transport.prototype.packet=function(packet){this.send(io.parser.encodePacket(packet))
};
Transport.prototype.onHeartbeat=function(heartbeat){this.packet({type:"heartbeat"})
};
Transport.prototype.onOpen=function(){this.isOpen=true;
this.clearCloseTimeout();
this.socket.onOpen()
};
Transport.prototype.onClose=function(){var self=this;
this.isOpen=false;
this.socket.onClose();
this.onDisconnect()
};
Transport.prototype.prepareUrl=function(){var options=this.socket.options;
return this.scheme()+"://"+options.host+":"+options.port+"/"+options.resource+"/"+io.protocol+"/"+this.name+"/"+this.sessid
};
Transport.prototype.ready=function(socket,fn){fn.call(this)
}
})("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports);
(function(exports,io,global){exports.Socket=Socket;
function Socket(options){this.options={port:80,secure:false,document:"document" in global?document:false,resource:"socket.io",transports:io.transports,"connect timeout":10000,"try multiple transports":true,reconnect:true,"reconnection delay":500,"reconnection limit":Infinity,"reopen delay":3000,"max reconnection attempts":10,"sync disconnect on unload":false,"auto connect":true,"flash policy port":10843,manualFlush:false};
io.util.merge(this.options,options);
this.connected=false;
this.open=false;
this.connecting=false;
this.reconnecting=false;
this.namespaces={};
this.buffer=[];
this.doBuffer=false;
if(this.options["sync disconnect on unload"]&&(!this.isXDomain()||io.util.ua.hasCORS)){var self=this;
io.util.on(global,"beforeunload",function(){self.disconnectSync()
},false)
}if(this.options["auto connect"]){this.connect()
}}io.util.mixin(Socket,io.EventEmitter);
Socket.prototype.of=function(name){if(!this.namespaces[name]){this.namespaces[name]=new io.SocketNamespace(this,name);
if(name!==""){this.namespaces[name].packet({type:"connect"})
}}return this.namespaces[name]
};
Socket.prototype.publish=function(){this.emit.apply(this,arguments);
var nsp;
for(var i in this.namespaces){if(this.namespaces.hasOwnProperty(i)){nsp=this.of(i);
nsp.$emit.apply(nsp,arguments)
}}};
function empty(){}Socket.prototype.handshake=function(fn){var self=this,options=this.options;
function complete(data){if(data instanceof Error){self.connecting=false;
self.onError(data.message)
}else{fn.apply(null,data.split(":"))
}}var url=["http"+(options.secure?"s":"")+":/",options.host+":"+options.port,options.resource,io.protocol,io.util.query(this.options.query,"t="+ +new Date)].join("/");
if(this.isXDomain()&&!io.util.ua.hasCORS){var insertAt=document.getElementsByTagName("script")[0],script=document.createElement("script");
script.src=url+"&jsonp="+io.j.length;
insertAt.parentNode.insertBefore(script,insertAt);
io.j.push(function(data){complete(data);
script.parentNode.removeChild(script)
})
}else{var xhr=io.util.request();
xhr.open("GET",url,true);
if(this.isXDomain()){xhr.withCredentials=true
}xhr.onreadystatechange=function(){if(xhr.readyState==4){xhr.onreadystatechange=empty;
if(xhr.status==200){complete(xhr.responseText)
}else{if(xhr.status==403){self.onError(xhr.responseText)
}else{self.connecting=false;
!self.reconnecting&&self.onError(xhr.responseText)
}}}};
xhr.send(null)
}};
Socket.prototype.getTransport=function(override){var transports=override||this.transports,match;
for(var i=0,transport;
transport=transports[i];
i++){if(io.Transport[transport]&&io.Transport[transport].check(this)&&(!this.isXDomain()||io.Transport[transport].xdomainCheck(this))){return new io.Transport[transport](this,this.sessionid)
}}return null
};
Socket.prototype.connect=function(fn){if(this.connecting){return this
}var self=this;
self.connecting=true;
this.handshake(function(sid,heartbeat,close,transports){self.sessionid=sid;
self.closeTimeout=close*1000;
self.heartbeatTimeout=heartbeat*1000;
if(!self.transports){self.transports=self.origTransports=(transports?io.util.intersect(transports.split(","),self.options.transports):self.options.transports)
}self.setHeartbeatTimeout();
function connect(transports){if(self.transport){self.transport.clearTimeouts()
}self.transport=self.getTransport(transports);
if(!self.transport){return self.publish("connect_failed")
}self.transport.ready(self,function(){self.connecting=true;
self.publish("connecting",self.transport.name);
self.transport.open();
if(self.options["connect timeout"]){self.connectTimeoutTimer=setTimeout(function(){if(!self.connected){self.connecting=false;
if(self.options["try multiple transports"]){var remaining=self.transports;
while(remaining.length>0&&remaining.splice(0,1)[0]!=self.transport.name){}if(remaining.length){connect(remaining)
}else{self.publish("connect_failed")
}}}},self.options["connect timeout"])
}})
}connect(self.transports);
self.once("connect",function(){clearTimeout(self.connectTimeoutTimer);
fn&&typeof fn=="function"&&fn()
})
});
return this
};
Socket.prototype.setHeartbeatTimeout=function(){clearTimeout(this.heartbeatTimeoutTimer);
if(this.transport&&!this.transport.heartbeats()){return
}var self=this;
this.heartbeatTimeoutTimer=setTimeout(function(){self.transport.onClose()
},this.heartbeatTimeout)
};
Socket.prototype.packet=function(data){if(this.connected&&!this.doBuffer){this.transport.packet(data)
}else{this.buffer.push(data)
}return this
};
Socket.prototype.setBuffer=function(v){this.doBuffer=v;
if(!v&&this.connected&&this.buffer.length){if(!this.options.manualFlush){this.flushBuffer()
}}};
Socket.prototype.flushBuffer=function(){this.transport.payload(this.buffer);
this.buffer=[]
};
Socket.prototype.disconnect=function(){if(this.connected||this.connecting){if(this.open){this.of("").packet({type:"disconnect"})
}this.onDisconnect("booted")
}return this
};
Socket.prototype.disconnectSync=function(){var xhr=io.util.request();
var uri=["http"+(this.options.secure?"s":"")+":/",this.options.host+":"+this.options.port,this.options.resource,io.protocol,"",this.sessionid].join("/")+"/?disconnect=1";
xhr.open("GET",uri,false);
xhr.send(null);
this.onDisconnect("booted")
};
Socket.prototype.isXDomain=function(){var port=global.location.port||("https:"==global.location.protocol?443:80);
return this.options.host!==global.location.hostname||this.options.port!=port
};
Socket.prototype.onConnect=function(){if(!this.connected){this.connected=true;
this.connecting=false;
if(!this.doBuffer){this.setBuffer(false)
}this.emit("connect")
}};
Socket.prototype.onOpen=function(){this.open=true
};
Socket.prototype.onClose=function(){this.open=false;
clearTimeout(this.heartbeatTimeoutTimer)
};
Socket.prototype.onPacket=function(packet){this.of(packet.endpoint).onPacket(packet)
};
Socket.prototype.onError=function(err){if(err&&err.advice){if(err.advice==="reconnect"&&(this.connected||this.connecting)){this.disconnect();
if(this.options.reconnect){this.reconnect()
}}}this.publish("error",err&&err.reason?err.reason:err)
};
Socket.prototype.onDisconnect=function(reason){var wasConnected=this.connected,wasConnecting=this.connecting;
this.connected=false;
this.connecting=false;
this.open=false;
if(wasConnected||wasConnecting){this.transport.close();
this.transport.clearTimeouts();
if(wasConnected){this.publish("disconnect",reason);
if("booted"!=reason&&this.options.reconnect&&!this.reconnecting){this.reconnect()
}}}};
Socket.prototype.reconnect=function(){this.reconnecting=true;
this.reconnectionAttempts=0;
this.reconnectionDelay=this.options["reconnection delay"];
var self=this,maxAttempts=this.options["max reconnection attempts"],tryMultiple=this.options["try multiple transports"],limit=this.options["reconnection limit"];
function reset(){if(self.connected){for(var i in self.namespaces){if(self.namespaces.hasOwnProperty(i)&&""!==i){self.namespaces[i].packet({type:"connect"})
}}self.publish("reconnect",self.transport.name,self.reconnectionAttempts)
}clearTimeout(self.reconnectionTimer);
self.removeListener("connect_failed",maybeReconnect);
self.removeListener("connect",maybeReconnect);
self.reconnecting=false;
delete self.reconnectionAttempts;
delete self.reconnectionDelay;
delete self.reconnectionTimer;
delete self.redoTransports;
self.options["try multiple transports"]=tryMultiple
}function maybeReconnect(){if(!self.reconnecting){return
}if(self.connected){return reset()
}if(self.connecting&&self.reconnecting){return self.reconnectionTimer=setTimeout(maybeReconnect,1000)
}if(self.reconnectionAttempts++>=maxAttempts){if(!self.redoTransports){self.on("connect_failed",maybeReconnect);
self.options["try multiple transports"]=true;
self.transports=self.origTransports;
self.transport=self.getTransport();
self.redoTransports=true;
self.connect()
}else{self.publish("reconnect_failed");
reset()
}}else{if(self.reconnectionDelay<limit){self.reconnectionDelay*=2
}self.connect();
self.publish("reconnecting",self.reconnectionDelay,self.reconnectionAttempts);
self.reconnectionTimer=setTimeout(maybeReconnect,self.reconnectionDelay)
}}this.options["try multiple transports"]=false;
this.reconnectionTimer=setTimeout(maybeReconnect,this.reconnectionDelay);
this.on("connect",maybeReconnect)
}
})("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports,this);
(function(exports,io){exports.SocketNamespace=SocketNamespace;
function SocketNamespace(socket,name){this.socket=socket;
this.name=name||"";
this.flags={};
this.json=new Flag(this,"json");
this.ackPackets=0;
this.acks={}
}io.util.mixin(SocketNamespace,io.EventEmitter);
SocketNamespace.prototype.$emit=io.EventEmitter.prototype.emit;
SocketNamespace.prototype.of=function(){return this.socket.of.apply(this.socket,arguments)
};
SocketNamespace.prototype.packet=function(packet){packet.endpoint=this.name;
this.socket.packet(packet);
this.flags={};
return this
};
SocketNamespace.prototype.send=function(data,fn){var packet={type:this.flags.json?"json":"message",data:data};
if("function"==typeof fn){packet.id=++this.ackPackets;
packet.ack=true;
this.acks[packet.id]=fn
}return this.packet(packet)
};
SocketNamespace.prototype.emit=function(name){var args=Array.prototype.slice.call(arguments,1),lastArg=args[args.length-1],packet={type:"event",name:name};
if("function"==typeof lastArg){packet.id=++this.ackPackets;
packet.ack="data";
this.acks[packet.id]=lastArg;
args=args.slice(0,args.length-1)
}packet.args=args;
return this.packet(packet)
};
SocketNamespace.prototype.disconnect=function(){if(this.name===""){this.socket.disconnect()
}else{this.packet({type:"disconnect"});
this.$emit("disconnect")
}return this
};
SocketNamespace.prototype.onPacket=function(packet){var self=this;
function ack(){self.packet({type:"ack",args:io.util.toArray(arguments),ackId:packet.id})
}switch(packet.type){case"connect":this.$emit("connect");
break;
case"disconnect":if(this.name===""){this.socket.onDisconnect(packet.reason||"booted")
}else{this.$emit("disconnect",packet.reason)
}break;
case"message":case"json":var params=["message",packet.data];
if(packet.ack=="data"){params.push(ack)
}else{if(packet.ack){this.packet({type:"ack",ackId:packet.id})
}}this.$emit.apply(this,params);
break;
case"event":var params=[packet.name].concat(packet.args);
if(packet.ack=="data"){params.push(ack)
}this.$emit.apply(this,params);
break;
case"ack":if(this.acks[packet.ackId]){this.acks[packet.ackId].apply(this,packet.args);
delete this.acks[packet.ackId]
}break;
case"error":if(packet.advice){this.socket.onError(packet)
}else{if(packet.reason=="unauthorized"){this.$emit("connect_failed",packet.reason)
}else{this.$emit("error",packet.reason)
}}break
}};
function Flag(nsp,name){this.namespace=nsp;
this.name=name
}Flag.prototype.send=function(){this.namespace.flags[this.name]=true;
this.namespace.send.apply(this.namespace,arguments)
};
Flag.prototype.emit=function(){this.namespace.flags[this.name]=true;
this.namespace.emit.apply(this.namespace,arguments)
}
})("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports);
(function(exports,io,global){exports.websocket=WS;
function WS(socket){io.Transport.apply(this,arguments)
}io.util.inherit(WS,io.Transport);
WS.prototype.name="websocket";
WS.prototype.open=function(){var query=io.util.query(this.socket.options.query),self=this,Socket;
if(!Socket){Socket=global.MozWebSocket||global.WebSocket
}this.websocket=new Socket(this.prepareUrl()+query);
this.websocket.onopen=function(){self.onOpen();
self.socket.setBuffer(false)
};
this.websocket.onmessage=function(ev){self.onData(ev.data)
};
this.websocket.onclose=function(){self.onClose();
self.socket.setBuffer(true)
};
this.websocket.onerror=function(e){self.onError(e)
};
return this
};
if(io.util.ua.iDevice){WS.prototype.send=function(data){var self=this;
setTimeout(function(){self.websocket.send(data)
},0);
return this
}
}else{WS.prototype.send=function(data){this.websocket.send(data);
return this
}
}WS.prototype.payload=function(arr){for(var i=0,l=arr.length;
i<l;
i++){this.packet(arr[i])
}return this
};
WS.prototype.close=function(){this.websocket.close();
return this
};
WS.prototype.onError=function(e){this.socket.onError(e)
};
WS.prototype.scheme=function(){return this.socket.options.secure?"wss":"ws"
};
WS.check=function(){return("WebSocket" in global&&!("__addTask" in WebSocket))||"MozWebSocket" in global
};
WS.xdomainCheck=function(){return true
};
io.transports.push("websocket")
})("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this);
(function(exports,io){exports.flashsocket=Flashsocket;
function Flashsocket(){io.Transport.websocket.apply(this,arguments)
}io.util.inherit(Flashsocket,io.Transport.websocket);
Flashsocket.prototype.name="flashsocket";
Flashsocket.prototype.open=function(){var self=this,args=arguments;
WebSocket.__addTask(function(){io.Transport.websocket.prototype.open.apply(self,args)
});
return this
};
Flashsocket.prototype.send=function(){var self=this,args=arguments;
WebSocket.__addTask(function(){io.Transport.websocket.prototype.send.apply(self,args)
});
return this
};
Flashsocket.prototype.close=function(){WebSocket.__tasks.length=0;
io.Transport.websocket.prototype.close.call(this);
return this
};
Flashsocket.prototype.ready=function(socket,fn){function init(){var options=socket.options,port=options["flash policy port"],path=["http"+(options.secure?"s":"")+":/",options.host+":"+options.port,options.resource,"static/flashsocket","WebSocketMain"+(socket.isXDomain()?"Insecure":"")+".swf"];
if(!Flashsocket.loaded){if(typeof WEB_SOCKET_SWF_LOCATION==="undefined"){WEB_SOCKET_SWF_LOCATION=path.join("/")
}if(port!==843){WebSocket.loadFlashPolicyFile("xmlsocket://"+options.host+":"+port)
}WebSocket.__initialize();
Flashsocket.loaded=true
}fn.call(self)
}var self=this;
if(document.body){return init()
}io.util.load(init)
};
Flashsocket.check=function(){if(typeof WebSocket=="undefined"||!("__initialize" in WebSocket)||!swfobject){return false
}return swfobject.getFlashPlayerVersion().major>=10
};
Flashsocket.xdomainCheck=function(){return true
};
if(typeof window!="undefined"){WEB_SOCKET_DISABLE_AUTO_INITIALIZATION=true
}io.transports.push("flashsocket")
})("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports);
if("undefined"!=typeof window){var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;
if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;
if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;
X=false;
ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");
ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);
ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);
ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0
}}else{if(typeof O[(["Active"].concat("Object").join("X"))]!=D){try{var ad=new window[(["Active"].concat("Object").join("X"))](W);
if(ad){ab=ad.GetVariable("$version");
if(ab){X=true;
ab=ab.split(" ")[1].split(",");
ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]
}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}
}(),k=function(){if(!M.w3){return
}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()
}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)
}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);
f()
}});
if(O==top){(function(){if(J){return
}try{j.documentElement.doScroll("left")
}catch(X){setTimeout(arguments.callee,0);
return
}f()
})()
}}if(M.wk){(function(){if(J){return
}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);
return
}f()
})()
}s(f)
}}();
function f(){if(J){return
}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));
Z.parentNode.removeChild(Z)
}catch(aa){return
}J=true;
var X=U.length;
for(var Y=0;
Y<X;
Y++){U[Y]()
}}function K(X){if(J){X()
}else{U[U.length]=X
}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)
}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)
}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)
}else{if(typeof O.onload=="function"){var X=O.onload;
O.onload=function(){X();
Y()
}
}else{O.onload=Y
}}}}}function h(){if(T){V()
}else{H()
}}function V(){var X=j.getElementsByTagName("body")[0];
var aa=C(r);
aa.setAttribute("type",q);
var Z=X.appendChild(aa);
if(Z){var Y=0;
(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");
if(ab){ab=ab.split(" ")[1].split(",");
M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]
}}else{if(Y<10){Y++;
setTimeout(arguments.callee,10);
return
}}X.removeChild(aa);
Z=null;
H()
})()
}else{H()
}}function H(){var ag=o.length;
if(ag>0){for(var af=0;
af<ag;
af++){var Y=o[af].id;
var ab=o[af].callbackFn;
var aa={success:false,id:Y};
if(M.pv[0]>0){var ae=c(Y);
if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);
if(ab){aa.success=true;
aa.ref=z(Y);
ab(aa)
}}else{if(o[af].expressInstall&&A()){var ai={};
ai.data=o[af].expressInstall;
ai.width=ae.getAttribute("width")||"0";
ai.height=ae.getAttribute("height")||"0";
if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")
}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")
}var ah={};
var X=ae.getElementsByTagName("param");
var ac=X.length;
for(var ad=0;
ad<ac;
ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")
}}P(ai,ah,Y,ab)
}else{p(ae);
if(ab){ab(aa)
}}}}}else{w(Y,true);
if(ab){var Z=z(Y);
if(Z&&typeof Z.SetVariable!=D){aa.success=true;
aa.ref=Z
}ab(aa)
}}}}}function z(aa){var X=null;
var Y=c(aa);
if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y
}else{var Z=Y.getElementsByTagName(r)[0];
if(Z){X=Z
}}}return X
}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)
}function P(aa,ab,X,Z){a=true;
E=Z||null;
B={success:false,id:X};
var ae=c(X);
if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);
Q=null
}else{l=ae;
Q=X
}aa.id=R;
if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"
}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"
}j.title=j.title.slice(0,47)+" - Flash Player Installation";
var ad=M.ie&&M.win?(["Active"].concat("").join("X")):"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;
if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac
}else{ab.flashvars=ac
}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");
X+="SWFObjectNew";
Y.setAttribute("id",X);
ae.parentNode.insertBefore(Y,ae);
ae.style.display="none";
(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)
}else{setTimeout(arguments.callee,10)
}})()
}u(aa,ab,X)
}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");
Y.parentNode.insertBefore(X,Y);
X.parentNode.replaceChild(g(Y),X);
Y.style.display="none";
(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)
}else{setTimeout(arguments.callee,10)
}})()
}else{Y.parentNode.replaceChild(g(Y),Y)
}}function g(ab){var aa=C("div");
if(M.win&&M.ie){aa.innerHTML=ab.innerHTML
}else{var Y=ab.getElementsByTagName(r)[0];
if(Y){var ad=Y.childNodes;
if(ad){var X=ad.length;
for(var Z=0;
Z<X;
Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))
}}}}}return aa
}function u(ai,ag,Y){var X,aa=c(Y);
if(M.wk&&M.wk<312){return X
}if(aa){if(typeof ai.id==D){ai.id=Y
}if(M.ie&&M.win){var ah="";
for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]
}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'
}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'
}}}}}var af="";
for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'
}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";
N[N.length]=ai.id;
X=c(ai.id)
}else{var Z=C(r);
Z.setAttribute("type",q);
for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])
}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])
}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])
}}aa.parentNode.replaceChild(Z,aa);
X=Z
}}return X
}function e(Z,X,Y){var aa=C("param");
aa.setAttribute("name",X);
aa.setAttribute("value",Y);
Z.appendChild(aa)
}function y(Y){var X=c(Y);
if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";
(function(){if(X.readyState==4){b(Y)
}else{setTimeout(arguments.callee,10)
}})()
}else{X.parentNode.removeChild(X)
}}}function b(Z){var Y=c(Z);
if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null
}}Y.parentNode.removeChild(Y)
}}function c(Z){var X=null;
try{X=j.getElementById(Z)
}catch(Y){}return X
}function C(X){return j.createElement(X)
}function i(Z,X,Y){Z.attachEvent(X,Y);
I[I.length]=[Z,X,Y]
}function F(Z){var Y=M.pv,X=Z.split(".");
X[0]=parseInt(X[0],10);
X[1]=parseInt(X[1],10)||0;
X[2]=parseInt(X[2],10)||0;
return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false
}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return
}var aa=j.getElementsByTagName("head")[0];
if(!aa){return
}var X=(ad&&typeof ad=="string")?ad:"screen";
if(ab){n=null;
G=null
}if(!n||G!=X){var Z=C("style");
Z.setAttribute("type","text/css");
Z.setAttribute("media",X);
n=aa.appendChild(Z);
if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]
}G=X
}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)
}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))
}}}function w(Z,X){if(!m){return
}var Y=X?"visible":"hidden";
if(J&&c(Z)){c(Z).style.visibility=Y
}else{v("#"+Z,"visibility:"+Y)
}}function L(Y){var Z=/[\\\"<>\.;]/;
var X=Z.exec(Y)!=null;
return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y
}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;
for(var ab=0;
ab<ac;
ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])
}var Z=N.length;
for(var aa=0;
aa<Z;
aa++){y(N[aa])
}for(var Y in M){M[Y]=null
}M=null;
for(var X in swfobject){swfobject[X]=null
}swfobject=null
})
}}();
return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};
Y.id=ab;
Y.swfVersion=X;
Y.expressInstall=aa;
Y.callbackFn=Z;
o[o.length]=Y;
w(ab,false)
}else{if(Z){Z({success:false,id:ab})
}}},getObjectById:function(X){if(M.w3){return z(X)
}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};
if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);
K(function(){ae+="";
ag+="";
var aj={};
if(af&&typeof af===r){for(var al in af){aj[al]=af[al]
}}aj.data=ab;
aj.width=ae;
aj.height=ag;
var am={};
if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]
}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]
}else{am.flashvars=ai+"="+Z[ai]
}}}if(F(Y)){var an=u(aj,am,ah);
if(aj.id==ah){w(ah,true)
}X.success=true;
X.ref=an
}else{if(aa&&A()){aj.data=aa;
P(aj,am,ah,ac);
return
}else{w(ah,true)
}}if(ac){ac(X)
}})
}else{if(ac){ac(X)
}}},switchOffAutoHideShow:function(){m=false
},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}
},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)
}else{return undefined
}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)
}},removeSWF:function(X){if(M.w3){y(X)
}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)
}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;
if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]
}if(aa==null){return L(Z)
}var Y=Z.split("&");
for(var X=0;
X<Y.length;
X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))
}}}return""
},expressInstallCallback:function(){if(a){var X=c(R);
if(X&&l){X.parentNode.replaceChild(l,X);
if(Q){w(Q,true);
if(M.ie&&M.win){l.style.display="block"
}}if(E){E(B)
}}a=false
}}}
}()
}(function(){if("undefined"==typeof window||window.WebSocket){return
}var console=window.console;
if(!console||!console.log||!console.error){console={log:function(){},error:function(){}}
}if(!swfobject.hasFlashPlayerVersion("10.0.0")){console.error("Flash Player >= 10.0.0 is required.");
return
}if(location.protocol=="file:"){console.error("WARNING: web-socket-js doesn't work in file:///... URL unless you set Flash Security Settings properly. Open the page via Web server i.e. http://...")
}WebSocket=function(url,protocols,proxyHost,proxyPort,headers){var self=this;
self.__id=WebSocket.__nextId++;
WebSocket.__instances[self.__id]=self;
self.readyState=WebSocket.CONNECTING;
self.bufferedAmount=0;
self.__events={};
if(!protocols){protocols=[]
}else{if(typeof protocols=="string"){protocols=[protocols]
}}setTimeout(function(){WebSocket.__addTask(function(){WebSocket.__flash.create(self.__id,url,protocols,proxyHost||null,proxyPort||0,headers||null)
})
},0)
};
WebSocket.prototype.send=function(data){if(this.readyState==WebSocket.CONNECTING){throw"INVALID_STATE_ERR: Web Socket connection has not been established"
}var result=WebSocket.__flash.send(this.__id,encodeURIComponent(data));
if(result<0){return true
}else{this.bufferedAmount+=result;
return false
}};
WebSocket.prototype.close=function(){if(this.readyState==WebSocket.CLOSED||this.readyState==WebSocket.CLOSING){return
}this.readyState=WebSocket.CLOSING;
WebSocket.__flash.close(this.__id)
};
WebSocket.prototype.addEventListener=function(type,listener,useCapture){if(!(type in this.__events)){this.__events[type]=[]
}this.__events[type].push(listener)
};
WebSocket.prototype.removeEventListener=function(type,listener,useCapture){if(!(type in this.__events)){return
}var events=this.__events[type];
for(var i=events.length-1;
i>=0;
--i){if(events[i]===listener){events.splice(i,1);
break
}}};
WebSocket.prototype.dispatchEvent=function(event){var events=this.__events[event.type]||[];
for(var i=0;
i<events.length;
++i){events[i](event)
}var handler=this["on"+event.type];
if(handler){handler(event)
}};
WebSocket.prototype.__handleEvent=function(flashEvent){if("readyState" in flashEvent){this.readyState=flashEvent.readyState
}if("protocol" in flashEvent){this.protocol=flashEvent.protocol
}var jsEvent;
if(flashEvent.type=="open"||flashEvent.type=="error"){jsEvent=this.__createSimpleEvent(flashEvent.type)
}else{if(flashEvent.type=="close"){jsEvent=this.__createSimpleEvent("close")
}else{if(flashEvent.type=="message"){var data=decodeURIComponent(flashEvent.message);
jsEvent=this.__createMessageEvent("message",data)
}else{throw"unknown event type: "+flashEvent.type
}}}this.dispatchEvent(jsEvent)
};
WebSocket.prototype.__createSimpleEvent=function(type){if(document.createEvent&&window.Event){var event=document.createEvent("Event");
event.initEvent(type,false,false);
return event
}else{return{type:type,bubbles:false,cancelable:false}
}};
WebSocket.prototype.__createMessageEvent=function(type,data){if(document.createEvent&&window.MessageEvent&&!window.opera){var event=document.createEvent("MessageEvent");
event.initMessageEvent("message",false,false,data,null,null,window,null);
return event
}else{return{type:type,data:data,bubbles:false,cancelable:false}
}};
WebSocket.CONNECTING=0;
WebSocket.OPEN=1;
WebSocket.CLOSING=2;
WebSocket.CLOSED=3;
WebSocket.__flash=null;
WebSocket.__instances={};
WebSocket.__tasks=[];
WebSocket.__nextId=0;
WebSocket.loadFlashPolicyFile=function(url){WebSocket.__addTask(function(){WebSocket.__flash.loadManualPolicyFile(url)
})
};
WebSocket.__initialize=function(){if(WebSocket.__flash){return
}if(WebSocket.__swfLocation){window.WEB_SOCKET_SWF_LOCATION=WebSocket.__swfLocation
}if(!window.WEB_SOCKET_SWF_LOCATION){console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
return
}var container=document.createElement("div");
container.id="webSocketContainer";
container.style.position="absolute";
if(WebSocket.__isFlashLite()){container.style.left="0px";
container.style.top="0px"
}else{container.style.left="-100px";
container.style.top="-100px"
}var holder=document.createElement("div");
holder.id="webSocketFlash";
container.appendChild(holder);
document.body.appendChild(container);
swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION,"webSocketFlash","1","1","10.0.0",null,null,{hasPriority:true,swliveconnect:true,allowScriptAccess:"always"},null,function(e){if(!e.success){console.error("[WebSocket] swfobject.embedSWF failed")
}})
};
WebSocket.__onFlashInitialized=function(){setTimeout(function(){WebSocket.__flash=document.getElementById("webSocketFlash");
WebSocket.__flash.setCallerUrl(location.href);
WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);
for(var i=0;
i<WebSocket.__tasks.length;
++i){WebSocket.__tasks[i]()
}WebSocket.__tasks=[]
},0)
};
WebSocket.__onFlashEvent=function(){setTimeout(function(){try{var events=WebSocket.__flash.receiveEvents();
for(var i=0;
i<events.length;
++i){WebSocket.__instances[events[i].webSocketId].__handleEvent(events[i])
}}catch(e){console.error(e)
}},0);
return true
};
WebSocket.__log=function(message){console.log(decodeURIComponent(message))
};
WebSocket.__error=function(message){console.error(decodeURIComponent(message))
};
WebSocket.__addTask=function(task){if(WebSocket.__flash){task()
}else{WebSocket.__tasks.push(task)
}};
WebSocket.__isFlashLite=function(){if(!window.navigator||!window.navigator.mimeTypes){return false
}var mimeType=window.navigator.mimeTypes["application/x-shockwave-flash"];
if(!mimeType||!mimeType.enabledPlugin||!mimeType.enabledPlugin.filename){return false
}return mimeType.enabledPlugin.filename.match(/flashlite/i)?true:false
};
if(!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION){if(window.addEventListener){window.addEventListener("load",function(){WebSocket.__initialize()
},false)
}else{window.attachEvent("onload",function(){WebSocket.__initialize()
})
}}})();
(function(exports,io,global){exports.XHR=XHR;
function XHR(socket){if(!socket){return
}io.Transport.apply(this,arguments);
this.sendBuffer=[]
}io.util.inherit(XHR,io.Transport);
XHR.prototype.open=function(){this.socket.setBuffer(false);
this.onOpen();
this.get();
this.setCloseTimeout();
return this
};
XHR.prototype.payload=function(payload){var msgs=[];
for(var i=0,l=payload.length;
i<l;
i++){msgs.push(io.parser.encodePacket(payload[i]))
}this.send(io.parser.encodePayload(msgs))
};
XHR.prototype.send=function(data){this.post(data);
return this
};
function empty(){}XHR.prototype.post=function(data){var self=this;
this.socket.setBuffer(true);
function stateChange(){if(this.readyState==4){this.onreadystatechange=empty;
self.posting=false;
if(this.status==200){self.socket.setBuffer(false)
}else{self.onClose()
}}}function onload(){this.onload=empty;
self.socket.setBuffer(false)
}this.sendXHR=this.request("POST");
if(global.XDomainRequest&&this.sendXHR instanceof XDomainRequest){this.sendXHR.onload=this.sendXHR.onerror=onload
}else{this.sendXHR.onreadystatechange=stateChange
}this.sendXHR.send(data)
};
XHR.prototype.close=function(){this.onClose();
return this
};
XHR.prototype.request=function(method){var req=io.util.request(this.socket.isXDomain()),query=io.util.query(this.socket.options.query,"t="+ +new Date);
req.open(method||"GET",this.prepareUrl()+query,true);
if(method=="POST"){try{if(req.setRequestHeader){req.setRequestHeader("Content-type","text/plain;charset=UTF-8")
}else{req.contentType="text/plain"
}}catch(e){}}return req
};
XHR.prototype.scheme=function(){return this.socket.options.secure?"https":"http"
};
XHR.check=function(socket,xdomain){try{var request=io.util.request(xdomain),usesXDomReq=(global.XDomainRequest&&request instanceof XDomainRequest),socketProtocol=(socket&&socket.options&&socket.options.secure?"https:":"http:"),isXProtocol=(global.location&&socketProtocol!=global.location.protocol);
if(request&&!(usesXDomReq&&isXProtocol)){return true
}}catch(e){}return false
};
XHR.xdomainCheck=function(socket){return XHR.check(socket,true)
}
})("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this);
(function(exports,io){exports.htmlfile=HTMLFile;
function HTMLFile(socket){io.Transport.XHR.apply(this,arguments)
}io.util.inherit(HTMLFile,io.Transport.XHR);
HTMLFile.prototype.name="htmlfile";
HTMLFile.prototype.get=function(){this.doc=new window[(["Active"].concat("Object").join("X"))]("htmlfile");
this.doc.open();
this.doc.write("<html></html>");
this.doc.close();
this.doc.parentWindow.s=this;
var iframeC=this.doc.createElement("div");
iframeC.className="socketio";
this.doc.body.appendChild(iframeC);
this.iframe=this.doc.createElement("iframe");
iframeC.appendChild(this.iframe);
var self=this,query=io.util.query(this.socket.options.query,"t="+ +new Date);
this.iframe.src=this.prepareUrl()+query;
io.util.on(window,"unload",function(){self.destroy()
})
};
HTMLFile.prototype._=function(data,doc){data=data.replace(/\\\//g,"/");
this.onData(data);
try{var script=doc.getElementsByTagName("script")[0];
script.parentNode.removeChild(script)
}catch(e){}};
HTMLFile.prototype.destroy=function(){if(this.iframe){try{this.iframe.src="about:blank"
}catch(e){}this.doc=null;
this.iframe.parentNode.removeChild(this.iframe);
this.iframe=null;
CollectGarbage()
}};
HTMLFile.prototype.close=function(){this.destroy();
return io.Transport.XHR.prototype.close.call(this)
};
HTMLFile.check=function(socket){if(typeof window!="undefined"&&(["Active"].concat("Object").join("X")) in window){try{var a=new window[(["Active"].concat("Object").join("X"))]("htmlfile");
return a&&io.Transport.XHR.check(socket)
}catch(e){}}return false
};
HTMLFile.xdomainCheck=function(){return false
};
io.transports.push("htmlfile")
})("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports);
(function(exports,io,global){exports["xhr-polling"]=XHRPolling;
function XHRPolling(){io.Transport.XHR.apply(this,arguments)
}io.util.inherit(XHRPolling,io.Transport.XHR);
io.util.merge(XHRPolling,io.Transport.XHR);
XHRPolling.prototype.name="xhr-polling";
XHRPolling.prototype.heartbeats=function(){return false
};
XHRPolling.prototype.open=function(){var self=this;
io.Transport.XHR.prototype.open.call(self);
return false
};
function empty(){}XHRPolling.prototype.get=function(){if(!this.isOpen){return
}var self=this;
function stateChange(){if(this.readyState==4){this.onreadystatechange=empty;
if(this.status==200){self.onData(this.responseText);
self.get()
}else{self.onClose()
}}}function onload(){this.onload=empty;
this.onerror=empty;
self.retryCounter=1;
self.onData(this.responseText);
self.get()
}function onerror(){self.retryCounter++;
if(!self.retryCounter||self.retryCounter>3){self.onClose()
}else{self.get()
}}this.xhr=this.request();
if(global.XDomainRequest&&this.xhr instanceof XDomainRequest){this.xhr.onload=onload;
this.xhr.onerror=onerror
}else{this.xhr.onreadystatechange=stateChange
}this.xhr.send(null)
};
XHRPolling.prototype.onClose=function(){io.Transport.XHR.prototype.onClose.call(this);
if(this.xhr){this.xhr.onreadystatechange=this.xhr.onload=this.xhr.onerror=empty;
try{this.xhr.abort()
}catch(e){}this.xhr=null
}};
XHRPolling.prototype.ready=function(socket,fn){var self=this;
io.util.defer(function(){fn.call(self)
})
};
io.transports.push("xhr-polling")
})("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this);
(function(exports,io,global){var indicator=global.document&&"MozAppearance" in global.document.documentElement.style;
exports["jsonp-polling"]=JSONPPolling;
function JSONPPolling(socket){io.Transport["xhr-polling"].apply(this,arguments);
this.index=io.j.length;
var self=this;
io.j.push(function(msg){self._(msg)
})
}io.util.inherit(JSONPPolling,io.Transport["xhr-polling"]);
JSONPPolling.prototype.name="jsonp-polling";
JSONPPolling.prototype.post=function(data){var self=this,query=io.util.query(this.socket.options.query,"t="+(+new Date)+"&i="+this.index);
if(!this.form){var form=document.createElement("form"),area=document.createElement("textarea"),id=this.iframeId="socketio_iframe_"+this.index,iframe;
form.className="socketio";
form.style.position="absolute";
form.style.top="0px";
form.style.left="0px";
form.style.display="none";
form.target=id;
form.method="POST";
form.setAttribute("accept-charset","utf-8");
area.name="d";
form.appendChild(area);
document.body.appendChild(form);
this.form=form;
this.area=area
}this.form.action=this.prepareUrl()+query;
function complete(){initIframe();
self.socket.setBuffer(false)
}function initIframe(){if(self.iframe){self.form.removeChild(self.iframe)
}try{iframe=document.createElement('<iframe name="'+self.iframeId+'">')
}catch(e){iframe=document.createElement("iframe");
iframe.name=self.iframeId
}iframe.id=self.iframeId;
self.form.appendChild(iframe);
self.iframe=iframe
}initIframe();
this.area.value=io.JSON.stringify(data);
try{this.form.submit()
}catch(e){}if(this.iframe.attachEvent){iframe.onreadystatechange=function(){if(self.iframe.readyState=="complete"){complete()
}}
}else{this.iframe.onload=complete
}this.socket.setBuffer(true)
};
JSONPPolling.prototype.get=function(){var self=this,script=document.createElement("script"),query=io.util.query(this.socket.options.query,"t="+(+new Date)+"&i="+this.index);
if(this.script){this.script.parentNode.removeChild(this.script);
this.script=null
}script.async=true;
script.src=this.prepareUrl()+query;
script.onerror=function(){self.onClose()
};
var insertAt=document.getElementsByTagName("script")[0];
insertAt.parentNode.insertBefore(script,insertAt);
this.script=script;
if(indicator){setTimeout(function(){var iframe=document.createElement("iframe");
document.body.appendChild(iframe);
document.body.removeChild(iframe)
},100)
}};
JSONPPolling.prototype._=function(msg){this.onData(msg);
if(this.isOpen){this.get()
}return this
};
JSONPPolling.prototype.ready=function(socket,fn){var self=this;
if(!indicator){return fn.call(this)
}io.util.load(function(){fn.call(self)
})
};
JSONPPolling.check=function(){return"document" in global
};
JSONPPolling.xdomainCheck=function(){return true
};
io.transports.push("jsonp-polling")
})("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this);
if(typeof define==="function"&&define.amd){define([],function(){return io
})
}})();
(function(bx,a0){var a7=typeof exports=="object"&&exports;
var c=typeof module=="object"&&module&&module.exports==a7&&module;
var S=typeof global=="object"&&global;
if(S.global===S){bx=S
}var bl=[],ae={};
var bj=0;
var ba=ae;
var an=30;
var b7=bx._;
var bu=/&(?:amp|lt|gt|quot|#39);/g;
var af=/\b__p \+= '';/g,ch=/\b(__p \+=) '' \+/g,W=/(__e\(.*?\)|\b__t\)) \+\n'';/g;
var p=/\w*$/;
var bf=RegExp("^"+(ae.valueOf+"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$");
var T=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
var b2=/<%=([\s\S]+?)%>/g;
var au=/($^)/;
var bz=/[&<>"']/g;
var cg=/['\n\r\t\u2028\u2029\\]/g;
var o=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"];
var bq=0;
var U=Math.ceil,aR=bl.concat,b1=Math.floor,q=bf.test(q=Object.getPrototypeOf)&&q,Y=ae.hasOwnProperty,s=bl.push,v=ae.toString;
var bi=bf.test(bi=Q.bind)&&bi,ao=bf.test(ao=Array.isArray)&&ao,C=bx.isFinite,aO=bx.isNaN,bC=bf.test(bC=Object.keys)&&bC,bD=Math.max,l=Math.min,aW=Math.random;
var bv="[object Arguments]",a6="[object Array]",I="[object Boolean]",bH="[object Date]",b="[object Function]",bE="[object Number]",aA="[object Object]",aN="[object RegExp]",by="[object String]";
var Z=!!bx.attachEvent,n=bi&&!/\n|true/.test(bi+Z);
var bo=bi&&!n;
var w=bC&&(Z||n);
var cm;
var bK;
var d;
var V=(V={"0":1,length:1},bl.splice.call(V,0,1),V[0]);
var aJ=true;
(function(){var e=[];
function at(){this.x=1
}at.prototype={valueOf:1,y:1};
for(var cn in new at){e.push(cn)
}for(cn in arguments){aJ=!cn
}cm=!/valueOf/.test(e);
bK=at.propertyIsEnumerable("prototype");
d=e[0]!="x"
}(1));
var a4=arguments.constructor==Object;
var bZ=!ad(arguments);
var aT=("x"[0]+Object("x")[0])!="xx";
try{var bn=v.call(document)==aA&&!({toString:0}+"")
}catch(bJ){}var be={};
be[b]=false;
be[bv]=be[a6]=be[I]=be[bH]=be[bE]=be[aA]=be[aN]=be[by]=true;
var bY={};
bY[a6]=Array;
bY[I]=Boolean;
bY[bH]=Date;
bY[aA]=Object;
bY[bE]=Number;
bY[aN]=RegExp;
bY[by]=String;
var b9={"boolean":false,"function":true,object:true,number:false,string:false,"undefined":false};
var bN={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"};
function P(e){if(e&&typeof e=="object"&&e.__wrapped__){return e
}if(!(this instanceof P)){return new P(e)
}this.__wrapped__=e
}P.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:b2,variable:"",imports:{_:P}};
var aY=aP("var index, iterable = <%= firstArg %>, result = iterable;\nif (!iterable) return result;\n<%= top %>;\n<% if (arrays) { %>var length = iterable.length; index = -1;\nif (<%= arrays %>) {  <% if (noCharByIndex) { %>\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  <% } %>\n  while (++index < length) {\n    <%= loop %>\n  }\n}\nelse {  <%  } else if (nonEnumArgs) { %>\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      <%= loop %>\n    }\n  } else {  <% } %>  <% if (hasEnumPrototype) { %>\n  var skipProto = typeof iterable == 'function';\n  <% } %>  <% if (isKeysFast && useHas) { %>\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] ? nativeKeys(iterable) : [],\n      length = ownProps.length;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n    <% if (hasEnumPrototype) { %>if (!(skipProto && index == 'prototype')) {\n  <% } %>    <%= loop %>\n    <% if (hasEnumPrototype) { %>}\n<% } %>  }  <% } else { %>\n  for (index in iterable) {<%    if (hasEnumPrototype || useHas) { %>\n    if (<%      if (hasEnumPrototype) { %>!(skipProto && index == 'prototype')<% }      if (hasEnumPrototype && useHas) { %> && <% }      if (useHas) { %>hasOwnProperty.call(iterable, index)<% }    %>) {    <% } %>\n    <%= loop %>;    <% if (hasEnumPrototype || useHas) { %>\n    }<% } %>\n  }  <% } %>  <% if (hasDontEnumBug) { %>\n\n  var ctor = iterable.constructor;\n    <% for (var k = 0; k < 7; k++) { %>\n  index = '<%= shadowed[k] %>';\n  if (<%      if (shadowed[k] == 'constructor') {        %>!(ctor && ctor.prototype === iterable) && <%      } %>hasOwnProperty.call(iterable, index)) {\n    <%= loop %>\n  }    <% } %>  <% } %>  <% if (arrays || nonEnumArgs) { %>\n}<% } %>\n<%= bottom %>;\nreturn result");
var bp={args:"object, source, guard",top:"var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",loop:"if (typeof result[index] == 'undefined') result[index] = iterable[index]",bottom:"  }\n}"};
var az={args:"collection, callback, thisArg",top:"callback = callback && typeof thisArg == 'undefined' ? callback : createCallback(callback, thisArg)",arrays:"typeof length == 'number'",loop:"if (callback(iterable[index], index, collection) === false) return result"};
var a={top:"if (!objectTypes[typeof iterable]) return result;\n"+az.top,arrays:false};
function bA(cs,cp,cn){cp||(cp=0);
var cq=cs.length,cr=(cq-cp)>=(cn||an);
if(cr){var e={},at=cp-1;
while(++at<cq){var co=cs[at]+"";
(Y.call(e,co)?e[co]:(e[co]=[])).push(cs[at])
}}return function(cu){if(cr){var ct=cu+"";
return Y.call(e,ct)&&ce(e[ct],cu)>-1
}return ce(cs,cu,cp)>-1
}
}function bs(e){return e.charCodeAt(0)
}function a8(cn,at){var e=cn.index,co=at.index;
cn=cn.criteria;
at=at.criteria;
if(cn!==at){if(cn>at||typeof cn=="undefined"){return 1
}if(cn<at||typeof at=="undefined"){return -1
}}return e<co?-1:1
}function J(cr,at,cn,e){var cs=t(cr),cq=!cn,co=at;
if(cq){cn=at
}if(!cs){at=cr
}function cp(){var cv=arguments,cu=cq?this:at;
if(!cs){cr=at[co]
}if(cn.length){cv=cv.length?(cv=Q(cv),e?cv.concat(cn):cn.concat(cv)):cn
}if(this instanceof cp){g.prototype=cr.prototype;
cu=new g;
g.prototype=null;
var ct=cr.apply(cu,cv);
return ck(ct)?ct:cu
}return cr.apply(cu,cv)
}return cp
}function A(co,e,cp){if(co==null){return ar
}var cn=typeof co;
if(cn!="function"){if(cn!="object"){return function(cq){return cq[co]
}
}var at=bt(co);
return function(cr){var cs=at.length,cq=false;
while(cs--){if(!(cq=bh(cr[at[cs]],co[at[cs]],ba))){break
}}return cq
}
}if(typeof e!="undefined"){if(cp===1){return function(cq){return co.call(e,cq)
}
}if(cp===2){return function(cr,cq){return co.call(e,cr,cq)
}
}if(cp===4){return function(cq,ct,cs,cr){return co.call(e,cq,ct,cs,cr)
}
}return function(cs,cr,cq){return co.call(e,cs,cr,cq)
}
}return co
}function N(){var cq={hasDontEnumBug:cm,hasEnumPrototype:bK,isKeysFast:w,nonEnumArgs:aJ,noCharByIndex:aT,shadowed:o,arrays:"isArray(iterable)",bottom:"",loop:"",top:"",useHas:true};
for(var co,cn=0;
co=arguments[cn];
cn++){for(var cp in co){cq[cp]=co[cp]
}}var at=cq.args;
cq.firstArg=/^[^,]+/.exec(at)[0];
var e=Function("createCallback, hasOwnProperty, isArguments, isArray, isString, objectTypes, nativeKeys","return function("+at+") {\n"+aY(cq)+"\n}");
return e(A,Y,ad,aM,bR,b9,bC)
}var L=N(az);
function cd(e){return"\\"+bN[e]
}function ax(e){return O[e]
}function bm(e){return typeof e.toString!="function"&&typeof(e+"")=="string"
}function g(){}function Q(cq,cp,at){cp||(cp=0);
if(typeof at=="undefined"){at=cq?cq.length:0
}var cn=-1,co=at-cp||0,e=Array(co<0?0:co);
while(++cn<co){e[cn]=cq[cp+cn]
}return e
}function ay(e){return a9[e]
}function ad(e){return v.call(e)==bv
}if(bZ){ad=function(e){return e?Y.call(e,"callee"):false
}
}var h=N(az,a,{useHas:false});
var a1=N(az,a);
var aM=ao||function(e){return(a4&&e instanceof Array)||v.call(e)==a6
};
var bt=!bC?am:function(e){if(!ck(e)){return[]
}if((bK&&typeof e=="function")||(aJ&&e.length&&ad(e))){return am(e)
}return bC(e)
};
function E(cn){var e=false;
if(!(cn&&typeof cn=="object")||ad(cn)){return e
}var at=cn.constructor;
if((!t(at)&&(!bn||!bm(cn)))||at instanceof at){if(d){h(cn,function(cq,cp,co){e=!Y.call(co,cp);
return false
});
return e===false
}h(cn,function(cp,co){e=co
});
return e===false||Y.call(cn,e)
}return e
}function am(at){var e=[];
a1(at,function(co,cn){e.push(cn)
});
return e
}var O={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};
var a9=bk(O);
var aD=N(bp,{top:bp.top.replace(";",";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = createCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),loop:"result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"});
function bU(cu,cv,cw,cs,co,at){var cx=cu;
if(typeof cv=="function"){cs=cw;
cw=cv;
cv=false
}if(typeof cw=="function"){cw=typeof cs=="undefined"?cw:A(cw,cs,1);
cx=cw(cx);
var cq=typeof cx!="undefined";
if(!cq){cx=cu
}}var cn=ck(cx);
if(cn){var cr=v.call(cx);
if(!be[cr]||(bn&&bm(cx))){return cx
}var cp=aM(cx)
}if(!cn||!cv){return cn&&!cq?(cp?Q(cx):aD({},cx)):cx
}var ct=bY[cr];
switch(cr){case I:case bH:return cq?cx:new ct(+cx);
case bE:case by:return cq?cx:new ct(cx);
case aN:return cq?cx:ct(cx.source,p.exec(cx))
}co||(co=[]);
at||(at=[]);
var e=co.length;
while(e--){if(co[e]==cu){return at[e]
}}if(!cq){cx=cp?ct(cx.length):{};
if(cp){if(Y.call(cu,"index")){cx.index=cu.index
}if(Y.call(cu,"input")){cx.input=cu.input
}}}co.push(cu);
at.push(cx);
(cp?aL:a1)(cq?cx:cu,function(cy,cz){cx[cz]=bU(cy,cv,cw,a0,co,at)
});
return cx
}function cj(at,cn,e){return bU(at,true,cn,e)
}var aE=N(bp);
function bX(at){var e=[];
h(at,function(co,cn){if(t(co)){e.push(cn)
}});
return e.sort()
}function b8(e,at){return e?Y.call(e,at):false
}function bk(cn){var at=-1,cp=bt(cn),cq=cp.length,e={};
while(++at<cq){var co=cp[at];
e[cn[co]]=co
}return e
}function aS(e){return e===true||e===false||v.call(e)==I
}function ai(e){return e instanceof Date||v.call(e)==bH
}function bg(e){return e?e.nodeType===1:false
}function bL(co){var e=true;
if(!co){return e
}var at=v.call(co),cn=co.length;
if((at==a6||at==by||at==bv||(bZ&&ad(co)))||(at==aA&&typeof cn=="number"&&t(co.splice))){return !cn
}a1(co,function(){return(e=false)
});
return e
}function bh(cB,cA,cs,cz,cD,cC){var cr=cs===ba;
if(cs&&!cr){cs=typeof cz=="undefined"?cs:A(cs,cz,2);
var cw=cs(cB,cA);
if(typeof cw!="undefined"){return !!cw
}}if(cB===cA){return cB!==0||(1/cB==1/cA)
}var cp=typeof cB,cn=typeof cA;
if(cB===cB&&(!cB||(cp!="function"&&cp!="object"))&&(!cA||(cn!="function"&&cn!="object"))){return false
}if(cB==null||cA==null){return cB===cA
}var e=v.call(cB),cv=v.call(cA);
if(e==bv){e=aA
}if(cv==bv){cv=aA
}if(e!=cv){return false
}switch(e){case I:case bH:return +cB==+cA;
case bE:return cB!=+cB?cA!=+cA:(cB==0?(1/cB==1/cA):cB==+cA);
case aN:case by:return cB==cA+""
}var ct=e==a6;
if(!ct){if(cB.__wrapped__||cA.__wrapped__){return bh(cB.__wrapped__||cB,cA.__wrapped__||cA,cs,cz,cD,cC)
}if(e!=aA||(bn&&(bm(cB)||bm(cA)))){return false
}var co=!a4&&ad(cB)?Object:cB.constructor,at=!a4&&ad(cA)?Object:cA.constructor;
if(co!=at&&!(t(co)&&co instanceof co&&t(at)&&at instanceof at)){return false
}}cD||(cD=[]);
cC||(cC=[]);
var cq=cD.length;
while(cq--){if(cD[cq]==cB){return cC[cq]==cA
}}var cx=0;
cw=true;
cD.push(cB);
cC.push(cA);
if(ct){cq=cB.length;
cx=cA.length;
cw=cx==cB.length;
if(!cw&&!cr){return cw
}while(cx--){var cu=cq,cy=cA[cx];
if(cr){while(cu--){if((cw=bh(cB[cu],cy,cs,cz,cD,cC))){break
}}}else{if(!(cw=bh(cB[cx],cy,cs,cz,cD,cC))){break
}}}return cw
}h(cA,function(cG,cF,cE){if(Y.call(cE,cF)){cx++;
return(cw=Y.call(cB,cF)&&bh(cB[cF],cG,cs,cz,cD,cC))
}});
if(cw&&!cr){h(cB,function(cG,cF,cE){if(Y.call(cE,cF)){return(cw=--cx>-1)
}})
}return cw
}function D(e){return C(e)&&!aO(parseFloat(e))
}function t(e){return typeof e=="function"
}if(t(/x/)){t=function(e){return e instanceof Function||v.call(e)==b
}
}function ck(e){return e?b9[typeof e]:false
}function a3(e){return aC(e)&&e!=+e
}function cc(e){return e===null
}function aC(e){return typeof e=="number"||v.call(e)==bE
}var F=!q?E:function(cn){if(!(cn&&typeof cn=="object")){return false
}var e=cn.valueOf,at=typeof e=="function"&&(at=q(e))&&q(at);
return at?cn==at||(q(cn)==at&&!ad(cn)):E(cn)
};
function b4(e){return e instanceof RegExp||v.call(e)==aN
}function bR(e){return typeof e=="string"||v.call(e)==by
}function bc(e){return typeof e=="undefined"
}function aV(co,e,cp){var cs=arguments,cr=0,at=2;
if(!ck(co)){return co
}if(cp===ba){var ct=cs[3],cq=cs[4],cn=cs[5]
}else{cq=[];
cn=[];
if(typeof cp!="number"){at=cs.length
}if(at>3&&typeof cs[at-2]=="function"){ct=A(cs[--at-1],cs[at--],2)
}else{if(at>2&&typeof cs[at-1]=="function"){ct=cs[--at]
}}}while(++cr<at){(aM(cs[cr])?aL:a1)(cs[cr],function(cz,cv){var cy,cw,cu=cz,cx=co[cv];
if(cz&&((cw=aM(cz))||F(cz))){var cA=cq.length;
while(cA--){if((cy=cq[cA]==cz)){cx=cn[cA];
break
}}if(!cy){cx=cw?(aM(cx)?cx:[]):(F(cx)?cx:{});
if(ct){cu=ct(cx,cz);
if(typeof cu!="undefined"){cx=cu
}}cq.push(cz);
cn.push(cx);
if(!ct){cx=aV(cx,cz,ba,ct,cq,cn)
}}}else{if(ct){cu=ct(cx,cz);
if(typeof cu=="undefined"){cu=cz
}}if(typeof cu!="undefined"){cx=cu
}}co[cv]=cx
})
}return co
}function bO(cn,cq,at){var cp=typeof cq=="function",e={};
if(cp){cq=A(cq,at)
}else{var co=aR.apply(bl,arguments)
}h(cn,function(ct,cs,cr){if(cp?!cq(ct,cs,cr):ce(co,cs,1)<0){e[cs]=ct
}});
return e
}function aK(cn){var at=-1,cp=bt(cn),cq=cp.length,e=Array(cq);
while(++at<cq){var co=cp[at];
e[at]=[co,cn[co]]
}return e
}function aX(co,cs,at){var e={};
if(typeof cs!="function"){var cn=0,cq=aR.apply(bl,arguments),cr=ck(co)?cq.length:0;
while(++cn<cr){var cp=cq[cn];
if(cp in co){e[cp]=co[cp]
}}}else{cs=A(cs,at);
h(co,function(cv,cu,ct){if(cs(cv,cu,ct)){e[cu]=cv
}})
}return e
}function aH(cn){var at=-1,co=bt(cn),cp=co.length,e=Array(cp);
while(++at<cp){e[at]=cn[co[at]]
}return e
}function b0(cp){var at=-1,cn=aR.apply(bl,Q(arguments,1)),co=cn.length,e=Array(co);
if(aT&&bR(cp)){cp=cp.split("")
}while(++at<co){e[at]=cp[cn[at]]
}return e
}function ac(cq,cp,cn){var at=-1,co=cq?cq.length:0,e=false;
cn=(cn<0?bD(0,co+cn):cn)||0;
if(typeof co=="number"){e=(bR(cq)?cq.indexOf(cp,cn):ce(cq,cp,cn))>-1
}else{L(cq,function(cr){if(++at>=cn){return !(e=cr===cp)
}})
}return e
}function aU(cn,co,at){var e={};
co=A(co,at);
aL(cn,function(cq,cp,cr){cp=co(cq,cp,cr)+"";
(Y.call(e,cp)?e[cp]++:e[cp]=1)
});
return e
}function u(cp,cq,at){var e=true;
cq=A(cq,at);
if(aM(cp)){var cn=-1,co=cp.length;
while(++cn<co){if(!(e=!!cq(cp[cn],cn,cp))){break
}}}else{L(cp,function(cs,cr,ct){return(e=!!cq(cs,cr,ct))
})
}return e
}function a2(cq,cr,at){var e=[];
cr=A(cr,at);
if(aM(cq)){var cn=-1,co=cq.length;
while(++cn<co){var cp=cq[cn];
if(cr(cp,cn,cq)){e.push(cp)
}}}else{L(cq,function(ct,cs,cu){if(cr(ct,cs,cu)){e.push(ct)
}})
}return e
}function aQ(cn,co,at){var e;
co=A(co,at);
aL(cn,function(cq,cp,cr){if(co(cq,cp,cr)){e=cq;
return false
}});
return e
}function aL(co,cp,e){if(cp&&typeof e=="undefined"&&aM(co)){var at=-1,cn=co.length;
while(++at<cn){if(cp(co[at],at,co)===false){break
}}}else{L(co,cp,e)
}return co
}function aB(cn,co,at){var e={};
co=A(co,at);
aL(cn,function(cq,cp,cr){cp=co(cq,cp,cr)+"";
(Y.call(e,cp)?e[cp]:e[cp]=[]).push(cq)
});
return e
}function B(cr,at){var co=Q(arguments,2),cn=-1,cq=typeof at=="function",cp=cr?cr.length:0,e=Array(typeof cp=="number"?cp:0);
aL(cr,function(cs){e[++cn]=(cq?at:cs[at]).apply(cs,co)
});
return e
}function av(cp,cq,at){var cn=-1,co=cp?cp.length:0,e=Array(typeof co=="number"?co:0);
cq=A(cq,at);
if(aM(cp)){while(++cn<co){e[cn]=cq(cp[cn],cn,cp)
}}else{L(cp,function(cs,cr,ct){e[++cn]=cq(cs,cr,ct)
})
}return e
}function aq(cr,cs,at){var cp=-Infinity,e=cp;
if(!cs&&aM(cr)){var cn=-1,co=cr.length;
while(++cn<co){var cq=cr[cn];
if(cq>e){e=cq
}}}else{cs=!cs&&bR(cr)?bs:A(cs,at);
L(cr,function(cu,ct,cw){var cv=cs(cu,ct,cw);
if(cv>cp){cp=cv;
e=cu
}})
}return e
}function bG(cr,cs,at){var cp=Infinity,e=cp;
if(!cs&&aM(cr)){var cn=-1,co=cr.length;
while(++cn<co){var cq=cr[cn];
if(cq<e){e=cq
}}}else{cs=!cs&&bR(cr)?bs:A(cs,at);
L(cr,function(cu,ct,cw){var cv=cs(cu,ct,cw);
if(cv<cp){cp=cv;
e=cu
}})
}return e
}var ci=av;
function bI(cq,cr,at,e){var co=arguments.length<3;
cr=A(cr,e,4);
if(aM(cq)){var cn=-1,cp=cq.length;
if(co){at=cq[++cn]
}while(++cn<cp){at=cr(at,cq[cn],cn,cq)
}}else{L(cq,function(ct,cs,cu){at=co?(co=false,ct):cr(at,ct,cs,cu)
})
}return at
}function b5(cr,cs,at,e){var cq=cr,cp=cr?cr.length:0,co=arguments.length<3;
if(typeof cp!="number"){var cn=bt(cr);
cp=cn.length
}else{if(aT&&bR(cr)){cq=cr.split("")
}}cs=A(cs,e,4);
aL(cr,function(cu,ct,cv){ct=cn?cn[--cp]:--cp;
at=co?(co=false,cq[ct]):cs(at,cq[ct],ct,cv)
});
return at
}function x(at,cn,e){cn=A(cn,e);
return a2(at,function(cp,co,cq){return !cn(cp,co,cq)
})
}function aI(co){var at=-1,cn=co?co.length:0,e=Array(typeof cn=="number"?cn:0);
aL(co,function(cq){var cp=b1(aW()*(++at+1));
e[at]=e[cp];
e[cp]=cq
});
return e
}function ah(at){var e=at?at.length:0;
return typeof e=="number"?e:bt(at).length
}function ag(cp,cq,at){var e;
cq=A(cq,at);
if(aM(cp)){var cn=-1,co=cp.length;
while(++cn<co){if((e=cq(cp[cn],cn,cp))){break
}}}else{L(cp,function(cs,cr,ct){return !(e=cq(cs,cr,ct))
})
}return !!e
}function aj(cp,cq,at){var cn=-1,co=cp?cp.length:0,e=Array(typeof co=="number"?co:0);
cq=A(cq,at);
aL(cp,function(cs,cr,ct){e[++cn]={criteria:cq(cs,cr,ct),index:cn,value:cs}
});
co=e.length;
e.sort(a8);
while(co--){e[co]=e[co].value
}return e
}function z(e){if(e&&typeof e.length=="number"){return aT&&bR(e)?e.split(""):Q(e)
}return aH(e)
}var i=a2;
function G(cp){var at=-1,cn=cp?cp.length:0,e=[];
while(++at<cn){var co=cp[at];
if(co){e.push(co)
}}return e
}function f(cr){var at=-1,cp=cr?cr.length:0,co=aR.apply(bl,arguments),cn=bA(co,cp),e=[];
while(++at<cp){var cq=cr[at];
if(!cn(cq)){e.push(cq)
}}return e
}function ap(cq,cp,e){if(cq){var co=0,cn=cq.length;
if(typeof cp!="number"&&cp!=null){var at=-1;
cp=A(cp,e);
while(++at<cn&&cp(cq[at],at,cq)){co++
}}else{co=cp;
if(co==null||e){return cq[0]
}}return Q(cq,0,l(bD(0,co),cn))
}}function bT(cq,cp){var at=-1,cn=cq?cq.length:0,e=[];
while(++at<cn){var co=cq[at];
if(aM(co)){s.apply(e,cp?co:bT(co))
}else{e.push(co)
}}return e
}function ce(cp,co,at){var e=-1,cn=cp?cp.length:0;
if(typeof at=="number"){e=(at<0?bD(0,cn+at):at||0)-1
}else{if(at){e=ak(cp,co);
return cp[e]===co?e:-1
}}while(++e<cn){if(cp[e]===co){return e
}}return -1
}function cf(cq,cp,e){if(!cq){return[]
}var co=0,cn=cq.length;
if(typeof cp!="number"&&cp!=null){var at=cn;
cp=A(cp,e);
while(at--&&cp(cq[at],at,cq)){co++
}}else{co=(cp==null||e)?1:cp||co
}return Q(cq,0,l(bD(0,cn-co),cn))
}function bQ(cr){var cs=arguments,cp=cs.length,at={"0":{}},cq=-1,co=cr?cr.length:0,ct=co>=100,cx=[],e=cx;
outer:while(++cq<co){var cu=cr[cq];
if(ct){var cv=cu+"";
var cw=Y.call(at[0],cv)?!(e=at[0][cv]):(e=at[0][cv]=[])
}if(cw||ce(e,cu)<0){if(ct){e.push(cu)
}var cn=cp;
while(--cn){if(!(at[cn]||(at[cn]=bA(cs[cn],0,100)))(cu)){continue outer
}}cx.push(cu)
}}return cx
}function aF(cq,cp,e){if(cq){var co=0,cn=cq.length;
if(typeof cp!="number"&&cp!=null){var at=cn;
cp=A(cp,e);
while(at--&&cp(cq[at],at,cq)){co++
}}else{co=cp;
if(co==null||e){return cq[cn-1]
}}return Q(cq,bD(0,cn-co))
}}function cl(co,cn,at){var e=co?co.length:0;
if(typeof at=="number"){e=(at<0?bD(0,e+at):l(at,e-1))+1
}while(e--){if(co[e]===cn){return e
}}return -1
}function H(cq,at){var cn=-1,cp=cq?cq.length:0,e={};
while(++cn<cp){var co=cq[cn];
if(at){e[co]=at[cn]
}else{e[co[0]]=co[1]
}}return e
}function X(cq,at,cp){cq=+cq||0;
cp=+cp||1;
if(at==null){at=cq;
cq=0
}var cn=-1,co=bD(0,U((at-cq)/cp)),e=Array(co);
while(++cn<co){e[cn]=cq;
cq+=cp
}return e
}function br(cq,cp,e){if(typeof cp!="number"&&cp!=null){var co=0,at=-1,cn=cq?cq.length:0;
cp=A(cp,e);
while(++at<cn&&cp(cq[at],at,cq)){co++
}}else{co=(cp==null||e)?1:bD(0,cp)
}return Q(cq,co)
}function ak(cr,cp,cq,at){var e=0,co=cr?cr.length:e;
cq=cq?A(cq,at,1):ar;
cp=cq(cp);
while(e<co){var cn=(e+co)>>>1;
cq(cr[cn])<cp?e=cn+1:co=cn
}return e
}function r(){return a5(aR.apply(bl,arguments))
}function a5(cr,co,cw,cs){var cq=-1,cn=cr?cr.length:0,cy=[],at=cy;
if(typeof co=="function"){cs=cw;
cw=co;
co=false
}var ct=!co&&cn>=75;
if(ct){var e={}
}if(cw){at=[];
cw=A(cw,cs)
}while(++cq<cn){var cu=cr[cq],cp=cw?cw(cu,cq,cr):cu;
if(ct){var cv=cp+"";
var cx=Y.call(e,cv)?!(at=e[cv]):(at=e[cv]=[])
}if(co?!cq||at[at.length-1]!==cp:cx||ce(at,cp)<0){if(cw||ct){at.push(cp)
}cy.push(cu)
}}return cy
}function cb(cq){var at=-1,co=cq?cq.length:0,cn=bA(arguments,1),e=[];
while(++at<co){var cp=cq[at];
if(!cn(cp)){e.push(cp)
}}return e
}function m(co){var at=-1,cn=co?aq(ci(arguments,"length")):0,e=Array(cn);
while(++at<cn){e[at]=ci(arguments,at)
}return e
}function M(at,e){if(at<1){return e()
}return function(){if(--at<1){return e.apply(this,arguments)
}}
}function bd(at,e){return bo||(bi&&arguments.length>2)?bi.call.apply(bi,arguments):J(at,e,Q(arguments,2))
}function aG(cn){var e=aR.apply(bl,arguments),at=e.length>1?0:(e=bX(cn),-1),cp=e.length;
while(++at<cp){var co=e[at];
cn[co]=bd(cn[co],cn)
}return cn
}function b3(e,at){return J(e,at,Q(arguments,2))
}function bW(){var e=arguments;
return function(){var at=arguments,cn=e.length;
while(cn--){at=[e[cn].apply(this,at)]
}return at[0]
}
}function bV(cq,cr,cn){var cp,e,at,cs;
function co(){cs=null;
if(!cn){e=cq.apply(at,cp)
}}return function(){var ct=cn&&!cs;
cp=arguments;
at=this;
clearTimeout(cs);
cs=setTimeout(co,cr);
if(ct){e=cq.apply(at,cp)
}return e
}
}function aZ(at,cn){var e=Q(arguments,2);
return setTimeout(function(){at.apply(a0,e)
},cn)
}function aa(at){var e=Q(arguments,1);
return setTimeout(function(){at.apply(a0,e)
},1)
}if(n&&c&&typeof setImmediate=="function"){aa=bd(setImmediate,bx)
}function ab(at,cn){var e={};
return function(){var co=(cn?cn.apply(this,arguments):arguments[0])+"";
return Y.call(e,co)?e[co]:(e[co]=at.apply(this,arguments))
}
}function bP(cn){var at,e;
return function(){if(at){return e
}at=true;
e=cn.apply(this,arguments);
cn=null;
return e
}
}function b6(e){return J(e,Q(arguments,1))
}function bM(e){return J(e,Q(arguments,1),null,ba)
}function bF(cq,cr){var co,e,at,cs,cn=0;
function cp(){cn=new Date;
cs=null;
e=cq.apply(at,co)
}return function(){var ct=new Date,cu=cr-(ct-cn);
co=arguments;
at=this;
if(cu<=0){clearTimeout(cs);
cs=null;
cn=ct;
e=cq.apply(at,co)
}else{if(!cs){cs=setTimeout(cp,cu)
}}return e
}
}function bb(e,at){return function(){var cn=[e];
s.apply(cn,arguments);
return at.apply(this,cn)
}
}function al(e){return e==null?"":(e+"").replace(bz,ax)
}function ar(e){return e
}function y(e){aL(bX(e),function(at){var cn=P[at]=e[at];
P.prototype[at]=function(){var co=[this.__wrapped__];
s.apply(co,arguments);
return new P(cn.apply(P,co))
}
})
}function ca(){bx._=b7;
return this
}function bw(at,e){if(at==null&&e==null){e=1
}at=+at||0;
if(e==null){e=at;
at=0
}return at+b1(aW()*((+e||0)-at+1))
}function K(e,cn){var at=e?e[cn]:a0;
return t(at)?e[cn]():at
}function aP(cz,ct,cC){var cq=P.templateSettings;
cz||(cz="");
cC=aY?aE({},cC,cq):cq;
var co=aY&&aE({},cC.imports,cq.imports),cu=aY?bt(co):["_"],cp=aY?aH(co):[P];
var cy,cv=0,cx=cC.interpolate||au,cn="__p += '";
var cB=RegExp((cC.escape||au).source+"|"+cx.source+"|"+(cx===b2?T:au).source+"|"+(cC.evaluate||au).source+"|$","g");
cz.replace(cB,function(e,cG,cE,cD,cF,cH){cE||(cE=cD);
cn+=cz.slice(cv,cH).replace(cg,cd);
if(cG){cn+="' +\n__e("+cG+") +\n'"
}if(cF){cy=true;
cn+="';\n"+cF+";\n__p += '"
}if(cE){cn+="' +\n((__t = ("+cE+")) == null ? '' : __t) +\n'"
}cv=cH+e.length;
return e
});
cn+="';\n";
var cr=cC.variable,cs=cr;
if(!cs){cr="obj";
cn="with ("+cr+") {\n"+cn+"\n}\n"
}cn=(cy?cn.replace(af,""):cn).replace(ch,"$1").replace(W,"$1;");
cn="function("+cr+") {\n"+(cs?"":cr+" || ("+cr+" = {});\n")+"var __t, __p = '', __e = _.escape"+(cy?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+cn+"return __p\n}";
var at="\n/*\n//@ sourceURL="+(cC.sourceURL||"/lodash/template/source["+(bq++)+"]")+"\n*/";
try{var cA=Function(cu,"return "+cn+at).apply(a0,cp)
}catch(cw){cw.source=cn;
throw cw
}if(ct){return cA(ct)
}cA.source=cn;
return cA
}function j(cp,co,at){cp=+cp||0;
var cn=-1,e=Array(cp);
while(++cn<cp){e[cn]=co.call(at,cn)
}return e
}function k(e){return e==null?"":(e+"").replace(bu,ay)
}function bB(e){var at=++bj;
return(e==null?"":e+"")+at
}function bS(e,at){at(e);
return e
}function aw(){return this.__wrapped__+""
}function R(){return this.__wrapped__
}P.after=M;
P.assign=aD;
P.at=b0;
P.bind=bd;
P.bindAll=aG;
P.bindKey=b3;
P.compact=G;
P.compose=bW;
P.countBy=aU;
P.debounce=bV;
P.defaults=aE;
P.defer=aa;
P.delay=aZ;
P.difference=f;
P.filter=a2;
P.flatten=bT;
P.forEach=aL;
P.forIn=h;
P.forOwn=a1;
P.functions=bX;
P.groupBy=aB;
P.initial=cf;
P.intersection=bQ;
P.invert=bk;
P.invoke=B;
P.keys=bt;
P.map=av;
P.max=aq;
P.memoize=ab;
P.merge=aV;
P.min=bG;
P.object=H;
P.omit=bO;
P.once=bP;
P.pairs=aK;
P.partial=b6;
P.partialRight=bM;
P.pick=aX;
P.pluck=ci;
P.range=X;
P.reject=x;
P.rest=br;
P.shuffle=aI;
P.sortBy=aj;
P.tap=bS;
P.throttle=bF;
P.times=j;
P.toArray=z;
P.union=r;
P.uniq=a5;
P.values=aH;
P.where=i;
P.without=cb;
P.wrap=bb;
P.zip=m;
P.collect=av;
P.drop=br;
P.each=aL;
P.extend=aD;
P.methods=bX;
P.select=a2;
P.tail=br;
P.unique=a5;
y(P);
P.clone=bU;
P.cloneDeep=cj;
P.contains=ac;
P.escape=al;
P.every=u;
P.find=aQ;
P.has=b8;
P.identity=ar;
P.indexOf=ce;
P.isArguments=ad;
P.isArray=aM;
P.isBoolean=aS;
P.isDate=ai;
P.isElement=bg;
P.isEmpty=bL;
P.isEqual=bh;
P.isFinite=D;
P.isFunction=t;
P.isNaN=a3;
P.isNull=cc;
P.isNumber=aC;
P.isObject=ck;
P.isPlainObject=F;
P.isRegExp=b4;
P.isString=bR;
P.isUndefined=bc;
P.lastIndexOf=cl;
P.mixin=y;
P.noConflict=ca;
P.random=bw;
P.reduce=bI;
P.reduceRight=b5;
P.result=K;
P.size=ah;
P.some=ag;
P.sortedIndex=ak;
P.template=aP;
P.unescape=k;
P.uniqueId=bB;
P.all=u;
P.any=ag;
P.detect=aQ;
P.foldl=bI;
P.foldr=b5;
P.include=ac;
P.inject=bI;
a1(P,function(at,e){if(!P.prototype[e]){P.prototype[e]=function(){var cn=[this.__wrapped__];
s.apply(cn,arguments);
return at.apply(P,cn)
}
}});
P.first=ap;
P.last=aF;
P.take=ap;
P.head=ap;
a1(P,function(at,e){if(!P.prototype[e]){P.prototype[e]=function(cp,co){var cn=at(this.__wrapped__,cp,co);
return cp==null||(co&&typeof cp!="function")?cn:new P(cn)
}
}});
P.VERSION="1.0.1";
P.prototype.toString=aw;
P.prototype.value=R;
P.prototype.valueOf=R;
L(["join","pop","shift"],function(e){var at=bl[e];
P.prototype[e]=function(){return at.apply(this.__wrapped__,arguments)
}
});
L(["push","reverse","sort","unshift"],function(e){var at=bl[e];
P.prototype[e]=function(){at.apply(this.__wrapped__,arguments);
return this
}
});
L(["concat","slice","splice"],function(e){var at=bl[e];
P.prototype[e]=function(){return new P(at.apply(this.__wrapped__,arguments))
}
});
if(V){L(["pop","shift","splice"],function(e){var at=bl[e],cn=e=="splice";
P.prototype[e]=function(){var cp=this.__wrapped__,co=at.apply(cp,arguments);
if(cp.length===0){delete cp[0]
}return cn?new P(co):co
}
})
}P._each=L;
P._iteratorTemplate=aY;
if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){bx._=P;
define(function(){return P
})
}else{if(a7){if(c){(c.exports=P)._=P
}else{a7._=P
}}else{bx._=P
}}}(this));
(function(){var s=this;
var q=s.Backbone;
var i=[];
var h=i.push;
var r=i.slice;
var B=i.splice;
var d;
if(typeof exports!=="undefined"){d=exports
}else{d=s.Backbone={}
}d.VERSION="0.9.10";
var D=s._;
if(!D&&(typeof require!=="undefined")){D=require("underscore")
}d.$=s.jQuery||s.Zepto||s.ender;
d.noConflict=function(){s.Backbone=q;
return this
};
d.emulateHTTP=false;
d.emulateJSON=false;
var a=/\s+/;
var F=function(N,L,H,K){if(!H){return true
}if(typeof H==="object"){for(var J in H){N[L].apply(N,[J,H[J]].concat(K))
}}else{if(a.test(H)){var M=H.split(a);
for(var I=0,G=M.length;
I<G;
I++){N[L].apply(N,[M[I]].concat(K))
}}else{return true
}}};
var e=function(J,H){var K,I=-1,G=J.length;
switch(H.length){case 0:while(++I<G){(K=J[I]).callback.call(K.ctx)
}return;
case 1:while(++I<G){(K=J[I]).callback.call(K.ctx,H[0])
}return;
case 2:while(++I<G){(K=J[I]).callback.call(K.ctx,H[0],H[1])
}return;
case 3:while(++I<G){(K=J[I]).callback.call(K.ctx,H[0],H[1],H[2])
}return;
default:while(++I<G){(K=J[I]).callback.apply(K.ctx,H)
}}};
var p=d.Events={on:function(G,J,H){if(!(F(this,"on",G,[J,H])&&J)){return this
}this._events||(this._events={});
var I=this._events[G]||(this._events[G]=[]);
I.push({callback:J,context:H,ctx:H||this});
return this
},once:function(H,K,I){if(!(F(this,"once",H,[K,I])&&K)){return this
}var G=this;
var J=D.once(function(){G.off(H,J);
K.apply(this,arguments)
});
J._callback=K;
this.on(H,J,I);
return this
},off:function(G,P,H){var M,O,Q,N,L,I,K,J;
if(!this._events||!F(this,"off",G,[P,H])){return this
}if(!G&&!P&&!H){this._events={};
return this
}N=G?[G]:D.keys(this._events);
for(L=0,I=N.length;
L<I;
L++){G=N[L];
if(M=this._events[G]){Q=[];
if(P||H){for(K=0,J=M.length;
K<J;
K++){O=M[K];
if((P&&P!==O.callback&&P!==O.callback._callback)||(H&&H!==O.context)){Q.push(O)
}}}this._events[G]=Q
}}return this
},trigger:function(I){if(!this._events){return this
}var H=r.call(arguments,1);
if(!F(this,"trigger",I,H)){return this
}var J=this._events[I];
var G=this._events.all;
if(J){e(J,H)
}if(G){e(G,arguments)
}return this
},listenTo:function(I,G,K){var H=this._listeners||(this._listeners={});
var J=I._listenerId||(I._listenerId=D.uniqueId("l"));
H[J]=I;
I.on(G,typeof G==="object"?this:K,this);
return this
},stopListening:function(I,G,K){var H=this._listeners;
if(!H){return
}if(I){I.off(G,typeof G==="object"?this:K,this);
if(!G&&!K){delete H[I._listenerId]
}}else{if(typeof G==="object"){K=this
}for(var J in H){H[J].off(G,K,this)
}this._listeners={}
}return this
}};
p.bind=p.on;
p.unbind=p.off;
D.extend(d,p);
var n=d.Model=function(G,I){var J;
var H=G||{};
this.cid=D.uniqueId("c");
this.attributes={};
if(I&&I.collection){this.collection=I.collection
}if(I&&I.parse){H=this.parse(H,I)||{}
}if(J=D.result(this,"defaults")){H=D.defaults({},H,J)
}this.set(H,I);
this.changed={};
this.initialize.apply(this,arguments)
};
D.extend(n.prototype,p,{changed:null,idAttribute:"id",initialize:function(){},toJSON:function(G){return D.clone(this.attributes)
},sync:function(){return d.sync.apply(this,arguments)
},get:function(G){return this.attributes[G]
},escape:function(G){return D.escape(this.get(G))
},has:function(G){return this.get(G)!=null
},set:function(O,G,S){var M,P,Q,N,L,R,I,K;
if(O==null){return this
}if(typeof O==="object"){P=O;
S=G
}else{(P={})[O]=G
}S||(S={});
if(!this._validate(P,S)){return false
}Q=S.unset;
L=S.silent;
N=[];
R=this._changing;
this._changing=true;
if(!R){this._previousAttributes=D.clone(this.attributes);
this.changed={}
}K=this.attributes,I=this._previousAttributes;
if(this.idAttribute in P){this.id=P[this.idAttribute]
}for(M in P){G=P[M];
if(!D.isEqual(K[M],G)){N.push(M)
}if(!D.isEqual(I[M],G)){this.changed[M]=G
}else{delete this.changed[M]
}Q?delete K[M]:K[M]=G
}if(!L){if(N.length){this._pending=true
}for(var J=0,H=N.length;
J<H;
J++){this.trigger("change:"+N[J],this,K[N[J]],S)
}}if(R){return this
}if(!L){while(this._pending){this._pending=false;
this.trigger("change",this,S)
}}this._pending=false;
this._changing=false;
return this
},unset:function(G,H){return this.set(G,void 0,D.extend({},H,{unset:true}))
},clear:function(H){var G={};
for(var I in this.attributes){G[I]=void 0
}return this.set(G,D.extend({},H,{unset:true}))
},hasChanged:function(G){if(G==null){return !D.isEmpty(this.changed)
}return D.has(this.changed,G)
},changedAttributes:function(I){if(!I){return this.hasChanged()?D.clone(this.changed):false
}var K,J=false;
var H=this._changing?this._previousAttributes:this.attributes;
for(var G in I){if(D.isEqual(H[G],(K=I[G]))){continue
}(J||(J={}))[G]=K
}return J
},previous:function(G){if(G==null||!this._previousAttributes){return null
}return this._previousAttributes[G]
},previousAttributes:function(){return D.clone(this._previousAttributes)
},fetch:function(G){G=G?D.clone(G):{};
if(G.parse===void 0){G.parse=true
}var H=G.success;
G.success=function(J,K,I){if(!J.set(J.parse(K,I),I)){return false
}if(H){H(J,K,I)
}};
return this.sync("read",this,G)
},save:function(J,M,I){var H,L,N,K,G=this.attributes;
if(J==null||typeof J==="object"){H=J;
I=M
}else{(H={})[J]=M
}if(H&&(!I||!I.wait)&&!this.set(H,I)){return false
}I=D.extend({validate:true},I);
if(!this._validate(H,I)){return false
}if(H&&I.wait){this.attributes=D.extend({},G,H)
}if(I.parse===void 0){I.parse=true
}L=I.success;
I.success=function(P,R,O){P.attributes=G;
var Q=P.parse(R,O);
if(O.wait){Q=D.extend(H||{},Q)
}if(D.isObject(Q)&&!P.set(Q,O)){return false
}if(L){L(P,R,O)
}};
N=this.isNew()?"create":(I.patch?"patch":"update");
if(N==="patch"){I.attrs=H
}K=this.sync(N,this,I);
if(H&&I.wait){this.attributes=G
}return K
},destroy:function(H){H=H?D.clone(H):{};
var G=this;
var K=H.success;
var I=function(){G.trigger("destroy",G,G.collection,H)
};
H.success=function(M,N,L){if(L.wait||M.isNew()){I()
}if(K){K(M,N,L)
}};
if(this.isNew()){H.success(this,null,H);
return false
}var J=this.sync("delete",this,H);
if(!H.wait){I()
}return J
},url:function(){var G=D.result(this,"urlRoot")||D.result(this.collection,"url")||v();
if(this.isNew()){return G
}return G+(G.charAt(G.length-1)==="/"?"":"/")+encodeURIComponent(this.id)
},parse:function(H,G){return H
},clone:function(){return new this.constructor(this.attributes)
},isNew:function(){return this.id==null
},isValid:function(G){return !this.validate||!this.validate(this.attributes,G)
},_validate:function(I,H){if(!H.validate||!this.validate){return true
}I=D.extend({},this.attributes,I);
var G=this.validationError=this.validate(I,H)||null;
if(!G){return true
}this.trigger("invalid",this,G,H||{});
return false
}});
var E=d.Collection=function(H,G){G||(G={});
if(G.model){this.model=G.model
}if(G.comparator!==void 0){this.comparator=G.comparator
}this.models=[];
this._reset();
this.initialize.apply(this,arguments);
if(H){this.reset(H,D.extend({silent:true},G))
}};
D.extend(E.prototype,p,{model:n,initialize:function(){},toJSON:function(G){return this.map(function(H){return H.toJSON(G)
})
},sync:function(){return d.sync.apply(this,arguments)
},add:function(G,R){G=D.isArray(G)?G.slice():[G];
R||(R={});
var M,J,N,P,H,O,Q,I,L,K;
Q=[];
I=R.at;
L=this.comparator&&(I==null)&&R.sort!=false;
K=D.isString(this.comparator)?this.comparator:null;
for(M=0,J=G.length;
M<J;
M++){if(!(N=this._prepareModel(P=G[M],R))){this.trigger("invalid",this,P,R);
continue
}if(H=this.get(N)){if(R.merge){H.set(P===N?N.attributes:P,R);
if(L&&!O&&H.hasChanged(K)){O=true
}}continue
}Q.push(N);
N.on("all",this._onModelEvent,this);
this._byId[N.cid]=N;
if(N.id!=null){this._byId[N.id]=N
}}if(Q.length){if(L){O=true
}this.length+=Q.length;
if(I!=null){B.apply(this.models,[I,0].concat(Q))
}else{h.apply(this.models,Q)
}}if(O){this.sort({silent:true})
}if(R.silent){return this
}for(M=0,J=Q.length;
M<J;
M++){(N=Q[M]).trigger("add",N,this,R)
}if(O){this.trigger("sort",this,R)
}return this
},remove:function(L,J){L=D.isArray(L)?L.slice():[L];
J||(J={});
var K,G,I,H;
for(K=0,G=L.length;
K<G;
K++){H=this.get(L[K]);
if(!H){continue
}delete this._byId[H.id];
delete this._byId[H.cid];
I=this.indexOf(H);
this.models.splice(I,1);
this.length--;
if(!J.silent){J.index=I;
H.trigger("remove",H,this,J)
}this._removeReference(H)
}return this
},push:function(H,G){H=this._prepareModel(H,G);
this.add(H,D.extend({at:this.length},G));
return H
},pop:function(H){var G=this.at(this.length-1);
this.remove(G,H);
return G
},unshift:function(H,G){H=this._prepareModel(H,G);
this.add(H,D.extend({at:0},G));
return H
},shift:function(H){var G=this.at(0);
this.remove(G,H);
return G
},slice:function(H,G){return this.models.slice(H,G)
},get:function(G){if(G==null){return void 0
}this._idAttr||(this._idAttr=this.model.prototype.idAttribute);
return this._byId[G.id||G.cid||G[this._idAttr]||G]
},at:function(G){return this.models[G]
},where:function(G){if(D.isEmpty(G)){return[]
}return this.filter(function(H){for(var I in G){if(G[I]!==H.get(I)){return false
}}return true
})
},sort:function(G){if(!this.comparator){throw new Error("Cannot sort a set without a comparator")
}G||(G={});
if(D.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)
}else{this.models.sort(D.bind(this.comparator,this))
}if(!G.silent){this.trigger("sort",this,G)
}return this
},pluck:function(G){return D.invoke(this.models,"get",G)
},update:function(G,O){O=D.extend({add:true,merge:true,remove:true},O);
if(O.parse){G=this.parse(G,O)
}var M,K,I,H;
var N=[],L=[],J={};
if(!D.isArray(G)){G=G?[G]:[]
}if(O.add&&!O.remove){return this.add(G,O)
}for(K=0,I=G.length;
K<I;
K++){M=G[K];
H=this.get(M);
if(O.remove&&H){J[H.cid]=true
}if((O.add&&!H)||(O.merge&&H)){N.push(M)
}}if(O.remove){for(K=0,I=this.models.length;
K<I;
K++){M=this.models[K];
if(!J[M.cid]){L.push(M)
}}}if(L.length){this.remove(L,O)
}if(N.length){this.add(N,O)
}return this
},reset:function(J,H){H||(H={});
if(H.parse){J=this.parse(J,H)
}for(var I=0,G=this.models.length;
I<G;
I++){this._removeReference(this.models[I])
}H.previousModels=this.models.slice();
this._reset();
if(J){this.add(J,D.extend({silent:true},H))
}if(!H.silent){this.trigger("reset",this,H)
}return this
},fetch:function(G){G=G?D.clone(G):{};
if(G.parse===void 0){G.parse=true
}var H=G.success;
G.success=function(K,J,I){var L=I.update?"update":"reset";
K[L](J,I);
if(H){H(K,J,I)
}};
return this.sync("read",this,G)
},create:function(H,G){G=G?D.clone(G):{};
if(!(H=this._prepareModel(H,G))){return false
}if(!G.wait){this.add(H,G)
}var J=this;
var I=G.success;
G.success=function(L,M,K){if(K.wait){J.add(L,K)
}if(I){I(L,M,K)
}};
H.save(null,G);
return H
},parse:function(H,G){return H
},clone:function(){return new this.constructor(this.models)
},_reset:function(){this.length=0;
this.models.length=0;
this._byId={}
},_prepareModel:function(I,H){if(I instanceof n){if(!I.collection){I.collection=this
}return I
}H||(H={});
H.collection=this;
var G=new this.model(I,H);
if(!G._validate(I,H)){return false
}return G
},_removeReference:function(G){if(this===G.collection){delete G.collection
}G.off("all",this._onModelEvent,this)
},_onModelEvent:function(I,H,J,G){if((I==="add"||I==="remove")&&J!==this){return
}if(I==="destroy"){this.remove(H,G)
}if(H&&I==="change:"+H.idAttribute){delete this._byId[H.previous(H.idAttribute)];
if(H.id!=null){this._byId[H.id]=H
}}this.trigger.apply(this,arguments)
},sortedIndex:function(G,J,H){J||(J=this.comparator);
var I=D.isFunction(J)?J:function(K){return K.get(J)
};
return D.sortedIndex(this.models,G,I,H)
}});
var z=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];
D.each(z,function(G){E.prototype[G]=function(){var H=r.call(arguments);
H.unshift(this.models);
return D[G].apply(D,H)
}
});
var j=["groupBy","countBy","sortBy"];
D.each(j,function(G){E.prototype[G]=function(J,H){var I=D.isFunction(J)?J:function(K){return K.get(J)
};
return D[G](this.models,I,H)
}
});
var C=d.Router=function(G){G||(G={});
if(G.routes){this.routes=G.routes
}this._bindRoutes();
this.initialize.apply(this,arguments)
};
var m=/\((.*?)\)/g;
var k=/(\(\?)?:\w+/g;
var A=/\*\w+/g;
var f=/[\-{}\[\]+?.,\\\^$|#\s]/g;
D.extend(C.prototype,p,{initialize:function(){},route:function(G,H,I){if(!D.isRegExp(G)){G=this._routeToRegExp(G)
}if(!I){I=this[H]
}d.history.route(G,D.bind(function(K){var J=this._extractParameters(G,K);
I&&I.apply(this,J);
this.trigger.apply(this,["route:"+H].concat(J));
this.trigger("route",H,J);
d.history.trigger("route",this,H,J)
},this));
return this
},navigate:function(H,G){d.history.navigate(H,G);
return this
},_bindRoutes:function(){if(!this.routes){return
}var H,G=D.keys(this.routes);
while((H=G.pop())!=null){this.route(H,this.routes[H])
}},_routeToRegExp:function(G){G=G.replace(f,"\\$&").replace(m,"(?:$1)?").replace(k,function(I,H){return H?I:"([^/]+)"
}).replace(A,"(.*?)");
return new RegExp("^"+G+"$")
},_extractParameters:function(G,H){return G.exec(H).slice(1)
}});
var b=d.History=function(){this.handlers=[];
D.bindAll(this,"checkUrl");
if(typeof window!=="undefined"){this.location=window.location;
this.history=window.history
}};
var o=/^[#\/]|\s+$/g;
var y=/^\/+|\/+$/g;
var l=/msie [\w.]+/;
var c=/\/$/;
b.started=false;
D.extend(b.prototype,p,{interval:50,getHash:function(H){var G=(H||this).location.href.match(/#(.*)$/);
return G?G[1]:""
},getFragment:function(I,H){if(I==null){if(this._hasPushState||!this._wantsHashChange||H){I=this.location.pathname;
var G=this.root.replace(c,"");
if(!I.indexOf(G)){I=I.substr(G.length)
}}else{I=this.getHash()
}}return I.replace(o,"")
},start:function(I){if(b.started){throw new Error("Backbone.history has already been started")
}b.started=true;
this.options=D.extend({},{root:"/"},this.options,I);
this.root=this.options.root;
this._wantsHashChange=this.options.hashChange!==false;
this._wantsPushState=!!this.options.pushState;
this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);
var H=this.getFragment();
var G=document.documentMode;
var K=(l.exec(navigator.userAgent.toLowerCase())&&(!G||G<=7));
this.root=("/"+this.root+"/").replace(y,"/");
if(K&&this._wantsHashChange){this.iframe=d.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;
this.navigate(H)
}if(this._hasPushState){d.$(window).on("popstate",this.checkUrl)
}else{if(this._wantsHashChange&&("onhashchange" in window)&&!K){d.$(window).on("hashchange",this.checkUrl)
}else{if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)
}}}this.fragment=H;
var L=this.location;
var J=L.pathname.replace(/[^\/]$/,"$&/")===this.root;
if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!J){this.fragment=this.getFragment(null,true);
this.location.replace(this.root+this.location.search+"#"+this.fragment);
return true
}else{if(this._wantsPushState&&this._hasPushState&&J&&L.hash){this.fragment=this.getHash().replace(o,"");
this.history.replaceState({},document.title,this.root+this.fragment+L.search)
}}if(!this.options.silent){return this.loadUrl()
}},stop:function(){d.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);
clearInterval(this._checkUrlInterval);
b.started=false
},route:function(G,H){this.handlers.unshift({route:G,callback:H})
},checkUrl:function(H){var G=this.getFragment();
if(G===this.fragment&&this.iframe){G=this.getFragment(this.getHash(this.iframe))
}if(G===this.fragment){return false
}if(this.iframe){this.navigate(G)
}this.loadUrl()||this.loadUrl(this.getHash())
},loadUrl:function(I){var H=this.fragment=this.getFragment(I);
var G=D.any(this.handlers,function(J){if(J.route.test(H)){J.callback(H);
return true
}});
return G
},navigate:function(I,H){if(!b.started){return false
}if(!H||H===true){H={trigger:H}
}I=this.getFragment(I||"");
if(this.fragment===I){return
}this.fragment=I;
var G=this.root+I;
if(this._hasPushState){this.history[H.replace?"replaceState":"pushState"]({},document.title,G)
}else{if(this._wantsHashChange){this._updateHash(this.location,I,H.replace);
if(this.iframe&&(I!==this.getFragment(this.getHash(this.iframe)))){if(!H.replace){this.iframe.document.open().close()
}this._updateHash(this.iframe.location,I,H.replace)
}}else{return this.location.assign(G)
}}if(H.trigger){this.loadUrl(I)
}},_updateHash:function(G,I,J){if(J){var H=G.href.replace(/(javascript:|#).*$/,"");
G.replace(H+"#"+I)
}else{G.hash="#"+I
}}});
d.history=new b;
var u=d.View=function(G){this.cid=D.uniqueId("view");
this._configure(G||{});
this._ensureElement();
this.initialize.apply(this,arguments);
this.delegateEvents()
};
var g=/^(\S+)\s*(.*)$/;
var w=["model","collection","el","id","attributes","className","tagName","events"];
D.extend(u.prototype,p,{tagName:"div",$:function(G){return this.$el.find(G)
},initialize:function(){},render:function(){return this
},remove:function(){this.$el.remove();
this.stopListening();
return this
},setElement:function(G,H){if(this.$el){this.undelegateEvents()
}this.$el=G instanceof d.$?G:d.$(G);
this.el=this.$el[0];
if(H!==false){this.delegateEvents()
}return this
},delegateEvents:function(K){if(!(K||(K=D.result(this,"events")))){return
}this.undelegateEvents();
for(var J in K){var L=K[J];
if(!D.isFunction(L)){L=this[K[J]]
}if(!L){throw new Error('Method "'+K[J]+'" does not exist')
}var I=J.match(g);
var H=I[1],G=I[2];
L=D.bind(L,this);
H+=".delegateEvents"+this.cid;
if(G===""){this.$el.on(H,L)
}else{this.$el.on(H,G,L)
}}},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid)
},_configure:function(G){if(this.options){G=D.extend({},D.result(this,"options"),G)
}D.extend(this,D.pick(G,w));
this.options=G
},_ensureElement:function(){if(!this.el){var G=D.extend({},D.result(this,"attributes"));
if(this.id){G.id=D.result(this,"id")
}if(this.className){G["class"]=D.result(this,"className")
}var H=d.$("<"+D.result(this,"tagName")+">").attr(G);
this.setElement(H,false)
}else{this.setElement(D.result(this,"el"),false)
}}});
var t={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};
d.sync=function(G,I,O){var J=t[G];
D.defaults(O||(O={}),{emulateHTTP:d.emulateHTTP,emulateJSON:d.emulateJSON});
var H={type:J,dataType:"json"};
if(!O.url){H.url=D.result(I,"url")||v()
}if(O.data==null&&I&&(G==="create"||G==="update"||G==="patch")){H.contentType="application/json";
H.data=JSON.stringify(O.attrs||I.toJSON(O))
}if(O.emulateJSON){H.contentType="application/x-www-form-urlencoded";
H.data=H.data?{model:H.data}:{}
}if(O.emulateHTTP&&(J==="PUT"||J==="DELETE"||J==="PATCH")){H.type="POST";
if(O.emulateJSON){H.data._method=J
}var L=O.beforeSend;
O.beforeSend=function(P){P.setRequestHeader("X-HTTP-Method-Override",J);
if(L){return L.apply(this,arguments)
}}
}if(H.type!=="GET"&&!O.emulateJSON){H.processData=false
}var M=O.success;
O.success=function(P){if(M){M(I,P,O)
}I.trigger("sync",I,P,O)
};
var K=O.error;
O.error=function(P){if(K){K(I,P,O)
}I.trigger("error",I,P,O)
};
var N=O.xhr=d.ajax(D.extend(H,O));
I.trigger("request",I,N,O);
return N
};
d.ajax=function(){return d.$.ajax.apply(d.$,arguments)
};
var x=function(G,I){var H=this;
var K;
if(G&&D.has(G,"constructor")){K=G.constructor
}else{K=function(){return H.apply(this,arguments)
}
}D.extend(K,H,I);
var J=function(){this.constructor=K
};
J.prototype=H.prototype;
K.prototype=new J;
if(G){D.extend(K.prototype,G)
}K.__super__=H.prototype;
return K
};
n.extend=E.extend=C.extend=u.extend=b.extend=x;
var v=function(){throw new Error('A "url" property or function must be specified')
}
}).call(this);
var __locale={"":""};
var App={events:{},socket:{receive:{},send:{}},sound:function(d){try{var b=new Audio("d/sounds/"+d+".wav");
b.volume=0.3;
b.play()
}catch(c){}}};
_.extend(App.events,Backbone.Events);
_.extend(App.socket.receive,Backbone.Events);
_.extend(App.socket.send,Backbone.Events);
var __l=function(b,c){var a=__locale[b];
if(c){a=a.replace(/\\?\{([^{}]+)\}/g,function(e,d){if(e.charAt(0)=="\\"){return e.slice(1)
}return(c[d]!=null)?c[d]:""
})
}return a
};
(function(){var a,f,c,b,d,h,g={}.hasOwnProperty,e=function(m,k){for(var j in k){if(g.call(k,j)){m[j]=k[j]
}}function l(){this.constructor=m
}l.prototype=k.prototype;
m.prototype=new l();
m.__super__=k.prototype;
return m
},i=[].indexOf||function(m){for(var k=0,j=this.length;
k<j;
k++){if(k in this&&this[k]===m){return k
}}return -1
};
h=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(j){return window.setTimeout(j,1000/30)
};
f=(function(){function j(){}j.prototype.initialize=function(k){};
return j
})();
b=(function(){j.prototype._indexFrames=0;
j.prototype.img=null;
j.prototype.pos=[0,0];
j.prototype.size=[0,0];
j.prototype.speed=0;
j.prototype.frames=[0];
function j(k){var m,l=this;
if(k==null){k={}
}for(m in k){this.op=k[m]
}this.img=new Image();
this.img.onload=function(){return l._loaded=true
};
this.img.src=this.url
}j.prototype.update=function(k){return this._index+=this.speed*k
};
j.prototype.render=function(l){var k;
if(!this._loaded){return
}k=0;
if(this.speed>0){k=this.frames[Math.floor(this._index)%this.frames.length]
}return l.drawImage(this.img,this.pos[0]*(1+k),this.pos[1],this.size[0],this.size[1],0,0,this.size[0],this.size[1])
};
return j
})();
d=(function(k){e(j,k);
function j(){return j.__super__.constructor.apply(this,arguments)
}j.prototype.url="d/img/tank.png";
j.prototype.size=[32,32];
return j
})(b);
a=(function(j){e(k,j);
function k(){return k.__super__.constructor.apply(this,arguments)
}k.prototype.url="d/img/bullet.png";
k.prototype.size=[8,8];
return k
})(b);
App.Router=c=(function(k){e(j,k);
function j(){return j.__super__.constructor.apply(this,arguments)
}j.prototype.lastTime=0;
j.prototype.elements={};
j.prototype._keys={up:{active:false,code:[38]},down:{active:false,code:[40]},left:{active:false,code:[37]},right:{active:false,code:[39]},fire:{active:false,code:[32]}};
j.prototype.events={keydown:function(o){var m,p,n,l;
n=this._keys;
for(m in n){p=n[m];
if((l=o.keyCode,i.call(p.code,l)>=0)&&!p.active){p.active=true;
App.socket.send.trigger("control",{move:m,active:p.active})
}}return this
},keyup:function(o){var m,p,n,l;
n=this._keys;
for(m in n){p=n[m];
if((l=o.keyCode,i.call(p.code,l)>=0)&&p.active){p.active=false;
App.socket.send.trigger("control",{move:m,active:p.active})
}}return this
}};
j.prototype.initialize=function(){var l=this;
j.__super__.initialize.apply(this,arguments);
this.canvas=$("<canvas width=416 height=416>").appendTo(this.$el);
this.c=this.canvas[0].getContext("2d");
App.socket.receive.on("add",function(m){return l.add(m)
});
App.socket.receive.on("update",function(m){return l.update(m)
});
return App.socket.receive.on("remove",function(m){return l.remove(m.id)
})
};
j.prototype.add=function(m){var l;
if(m.object==="tank"){l=new d()
}else{if(m.object==="bullet"){l=new a()
}}return this.elements[m.id]={sprite:l,pos:m.pos||[0,0],speed:m.speed||0,angle:m.angle||0}
};
j.prototype.update=function(o){var l,n,m;
m=[];
for(l in o){n=o[l];
if(l!=="id"){m.push(this.elements[o.id][l]=n)
}else{m.push(void 0)
}}return m
};
j.prototype.remove=function(l){return delete this.elements[l]
};
j.prototype._updateView=function(o){var l,r,n,q,p,m;
p=this.elements;
m=[];
for(l in p){q=p[l];
n=q.angle*Math.PI/180;
r=q.speed*o;
q.pos[0]+=r*Math.cos(n);
q.pos[1]+=r*Math.sin(n);
m.push(q.sprite.update(o))
}return m
};
j.prototype.render=function(){var m,o,n,l;
this.c.fillStyle="rgb(0,0,0)";
this.c.fillRect(0,0,this.canvas.width(),this.canvas.height());
n=this.elements;
l=[];
for(o in n){m=n[o];
this.c.fillStyle="rgba(255,255,255,0.4)";
this.c.fillRect(m.pos[0],m.pos[1],m.sprite.size[0],m.sprite.size[1]);
this.c.save();
this.c.translate(m.pos[0]+m.sprite.size[0]/2,m.pos[1]+m.sprite.size[1]/2);
this.c.rotate(m.angle*Math.PI/180);
this.c.translate(-m.sprite.size[0]/2,-m.sprite.size[1]/2);
m.sprite.render(this.c);
l.push(this.c.restore())
}return l
};
j.prototype.start=function(){this.lastTime=Date.now();
return this.process()
};
j.prototype.process=function(){var m,l,n=this;
l=Date.now();
m=(l-this.lastTime)/1000;
this._updateView(m);
this.render();
this.lastTime=l;
return h(function(){return n.process()
})
};
return j
})(Backbone.View)
}).call(this);