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
(function(P){var l;
var g=[],q=[];
var I=0;
var h={};
var a=+new Date+"";
var b=75;
var k=40;
var v=/\b__p \+= '';/g,T=/\b(__p \+=) '' \+/g,e=/(__e\(.*?\)|\b__t\)) \+\n'';/g;
var E=/&(?:amp|lt|gt|quot|#39);/g;
var y=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
var C=/\w*$/;
var m=/<%=([\s\S]+?)%>/g;
var i=(i=/\bthis\b/)&&i.test(aa)&&i;
var F=(" \t\x0B\f\xA0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000");
var Z=RegExp("^["+F+"]*0+(?=.$)");
var R=/($^)/;
var z=/[&<>"']/g;
var W=/['\n\r\t\u2028\u2029\\]/g;
var w=["Array","Boolean","Date","Error","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setImmediate","setTimeout"];
var B=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"];
var ac=0;
var V="[object Arguments]",s="[object Array]",A="[object Boolean]",K="[object Date]",J="[object Error]",ae="[object Function]",G="[object Number]",c="[object Object]",L="[object RegExp]",H="[object String]";
var t={};
t[ae]=false;
t[V]=t[s]=t[A]=t[K]=t[G]=t[c]=t[L]=t[H]=true;
var D={"boolean":false,"function":true,object:true,number:false,string:false,"undefined":false};
var N={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"};
var X=D[typeof exports]&&exports;
var x=D[typeof module]&&module&&module.exports==X&&module;
var u=D[typeof global]&&global;
if(u&&(u.global===u||u.window===u)){P=u
}function Q(aj,ai,ag){var af=(ag||0)-1,ah=aj.length;
while(++af<ah){if(aj[af]===ai){return af
}}return -1
}function O(af,ai){var ah=typeof ai;
af=af.cache;
if(ah=="boolean"||ai==null){return af[ai]
}if(ah!="number"&&ah!="string"){ah="object"
}var ag=ah=="number"?ai:a+ai;
af=af[ah]||(af[ah]={});
return ah=="object"?(af[ag]&&Q(af[ag],ai)>-1?0:-1):(af[ag]?0:-1)
}function M(aj){var ag=this.cache,ai=typeof aj;
if(ai=="boolean"||aj==null){ag[aj]=true
}else{if(ai!="number"&&ai!="string"){ai="object"
}var ah=ai=="number"?aj:a+aj,af=ag[ai]||(ag[ai]={});
if(ai=="object"){if((af[ah]||(af[ah]=[])).push(aj)==this.array.length){ag[ai]=false
}}else{af[ah]=true
}}}function o(af){return af.charCodeAt(0)
}function Y(ah,ag){var af=ah.index,aj=ag.index;
ah=ah.criteria;
ag=ag.criteria;
if(ah!==ag){if(ah>ag||typeof ah=="undefined"){return 1
}if(ah<ag||typeof ag=="undefined"){return -1
}}return af<aj?-1:1
}function ab(aj){var ah=-1,ai=aj.length;
var ag=p();
ag["false"]=ag["null"]=ag["true"]=ag["undefined"]=false;
var af=p();
af.array=aj;
af.cache=ag;
af.push=M;
while(++ah<ai){af.push(aj[ah])
}return ag.object===false?(n(af),null):af
}function f(af){return"\\"+N[af]
}function d(){return g.pop()||[]
}function p(){return q.pop()||{args:"",array:null,bottom:"",cache:null,criteria:null,"false":false,firstArg:"",index:0,init:"",leading:false,loop:"",maxWait:0,"null":false,number:null,object:null,push:null,shadowedProps:null,string:null,support:null,top:"",trailing:false,"true":false,"undefined":false,useHas:false,useKeys:false,value:null}
}function j(af){return typeof af.toString!="function"&&typeof(af+"")=="string"
}function U(){}function S(af){af.length=0;
if(g.length<k){g.push(af)
}}function n(ag){var af=ag.cache;
if(af){n(af)
}ag.array=ag.cache=ag.criteria=ag.object=ag.number=ag.string=ag.value=null;
if(q.length<k){q.push(ag)
}}function r(ak,aj,ag){aj||(aj=0);
if(typeof ag=="undefined"){ag=ak?ak.length:0
}var ah=-1,ai=ag-aj||0,af=Array(ai<0?0:ai);
while(++ah<ai){af[ah]=ak[aj+ah]
}return af
}function aa(ah){ah=ah?ad.defaults(P.Object(),ah,ad.pick(P,w)):P;
var aF=ah.Array,b8=ah.Boolean,b9=ah.Date,cJ=ah.Error,aY=ah.Function,bZ=ah.Math,be=ah.Number,cM=ah.Object,cu=ah.RegExp,cg=ah.String,aG=ah.TypeError;
var b3=[];
var a5=cJ.prototype,cw=cM.prototype,aA=cg.prototype;
var cF=ah._;
var bW=cu("^"+cg(cw.valueOf).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$");
var aV=bZ.ceil,bQ=ah.clearTimeout,bE=b3.concat,cz=bZ.floor,bz=aY.prototype.toString,aq=bW.test(aq=cM.getPrototypeOf)&&aq,aZ=cw.hasOwnProperty,av=b3.push,an=cw.propertyIsEnumerable,bU=ah.setImmediate,aW=ah.setTimeout,ay=cw.toString;
var b1=bW.test(b1=ay.bind)&&b1,au=bW.test(au=cM.create)&&au,bf=bW.test(bf=aF.isArray)&&bf,aJ=ah.isFinite,bB=ah.isNaN,cb=bW.test(cb=cM.keys)&&cb,cc=bZ.max,am=bZ.min,cU=ah.parseInt,bI=bZ.random,aI=b3.slice;
var a0=bW.test(ah.attachEvent),ap=b1&&!/\n|true/.test(b1+a0);
var cx={};
cx[s]=aF;
cx[A]=b8;
cx[K]=b9;
cx[ae]=aY;
cx[c]=cM;
cx[G]=be;
cx[L]=cu;
cx[H]=cg;
var by={};
by[s]=by[K]=by[G]={constructor:true,toLocaleString:true,toString:true,valueOf:true};
by[A]=by[H]={constructor:true,toString:true,valueOf:true};
by[J]=by[ae]=by[L]={constructor:true,toString:true};
by[c]={constructor:true};
(function(){var cZ=B.length;
while(cZ--){var c0=B[cZ];
for(var at in by){if(aZ.call(by,at)&&!aZ.call(by[at],c0)){by[at][c0]=false
}}}}());
function aT(at){return(at&&typeof at=="object"&&!bA(at)&&aZ.call(at,"__wrapped__"))?at:new cA(at)
}function cA(at){this.__wrapped__=at
}cA.prototype=aT.prototype;
var aE=aT.support={};
(function(){var c0=function(){this.x=1
},at={"0":1,length:1},cZ=[];
c0.prototype={valueOf:1,y:1};
for(var c2 in new c0){cZ.push(c2)
}for(c2 in arguments){}aE.argsObject=arguments.constructor==cM&&!(arguments instanceof aF);
aE.argsClass=a4(arguments);
aE.enumErrorProps=an.call(a5,"message")||an.call(a5,"name");
aE.enumPrototypes=an.call(c0,"prototype");
aE.fastBind=b1&&!ap;
aE.ownLast=cZ[0]!="x";
aE.nonEnumArgs=c2!=0;
aE.nonEnumShadows=!/valueOf/.test(cZ);
aE.spliceObjects=(b3.splice.call(at,0,1),!at[0]);
aE.unindexedChars=("x"[0]+cM("x")[0])!="xx";
try{aE.nodeClass=!(ay.call(document)==c&&!({toString:0}+""))
}catch(c1){aE.nodeClass=true
}}(1));
aT.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:m,variable:"",imports:{_:aT}};
var bK=bC("var index, iterable = <%= firstArg %>, result = <%= init %>;\nif (!iterable) return result;\n<%= top %>;<% if (array) { %>\nvar length = iterable.length; index = -1;\nif (<%= array %>) {  <% if (support.unindexedChars) { %>\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  <% } %>\n  while (++index < length) {\n    <%= loop %>;\n  }\n}\nelse {  <% } else if (support.nonEnumArgs) { %>\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      <%= loop %>;\n    }\n  } else {  <% } %>  <% if (support.enumPrototypes) { %>\n  var skipProto = typeof iterable == 'function';\n  <% } %>  <% if (support.enumErrorProps) { %>\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  <% } %>  <%    var conditions = [];    if (support.enumPrototypes) { conditions.push('!(skipProto && index == \"prototype\")'); }    if (support.enumErrorProps)  { conditions.push('!(skipErrorProps && (index == \"message\" || index == \"name\"))'); }  %>  <% if (useHas && useKeys) { %>\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n<%    if (conditions.length) { %>    if (<%= conditions.join(' && ') %>) {\n  <% } %>    <%= loop %>;    <% if (conditions.length) { %>\n    }<% } %>\n  }  <% } else { %>\n  for (index in iterable) {\n<%    if (useHas) { conditions.push(\"hasOwnProperty.call(iterable, index)\"); }    if (conditions.length) { %>    if (<%= conditions.join(' && ') %>) {\n  <% } %>    <%= loop %>;    <% if (conditions.length) { %>\n    }<% } %>\n  }    <% if (support.nonEnumShadows) { %>\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      <% for (k = 0; k < 7; k++) { %>\n    index = '<%= shadowedProps[k] %>';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))<%        if (!useHas) { %> || (!nonEnum[index] && iterable[index] !== objectProto[index])<% }      %>) {\n      <%= loop %>;\n    }      <% } %>\n  }    <% } %>  <% } %>  <% if (array || support.nonEnumArgs) { %>\n}<% } %>\n<%= bottom %>;\nreturn result");
var b4={args:"object, source, guard",top:"var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",loop:"if (typeof result[index] == 'undefined') result[index] = iterable[index]",bottom:"  }\n}"};
var bn={args:"collection, callback, thisArg",top:"callback = callback && typeof thisArg == 'undefined' ? callback : lodash.createCallback(callback, thisArg)",array:"typeof length == 'number'",loop:"if (callback(iterable[index], index, collection) === false) return result"};
var af={top:"if (!objectTypes[typeof iterable]) return result;\n"+bn.top,array:false};
function aO(c0,c3,c2,c5){var c4=aw(c0),at=!c2,c6=c3;
if(at){var cZ=c5;
c2=c3
}else{if(!c4){if(!c5){throw new aG
}c3=c0
}}function c1(){var c9=arguments,c8=at?this:c3;
if(!c4){c0=c3[c6]
}if(c2.length){c9=c9.length?(c9=aI.call(c9),cZ?c9.concat(c2):c2.concat(c9)):c2
}if(this instanceof c1){c8=bd(c0.prototype);
var c7=c0.apply(c8,c9);
return cX(c7)?c7:c8
}return c0.apply(c8,c9)
}return c1
}function aR(){var c3=p();
c3.shadowedProps=B;
c3.support=aE;
c3.array=c3.bottom=c3.loop=c3.top="";
c3.init="iterable";
c3.useHas=true;
c3.useKeys=!!b6;
for(var c1,c0=0;
c1=arguments[c0];
c0++){for(var c2 in c1){c3[c2]=c1[c2]
}}var cZ=c3.args;
c3.firstArg=/^[^,]+/.exec(cZ)[0];
var at=aY("errorClass, errorProto, hasOwnProperty, isArguments, isArray, isString, keys, lodash, objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString","return function("+cZ+") {\n"+bK(c3)+"\n}");
n(c3);
return at(J,a5,aZ,a4,bA,cn,b6,aT,cw,D,by,H,aA,ay)
}function bd(at){return cX(at)?au(at):{}
}if(!au){var bd=function(cZ){if(cX(cZ)){U.prototype=cZ;
var at=new U;
U.prototype=null
}return at||{}
}
}function bl(at){return aS[at]
}function b0(c1,c0,cZ){var at=(at=aT.indexOf)===cQ?Q:at;
return at
}function cW(at){return function(c2,c0,c1,cZ){if(typeof c0!="boolean"&&c0!=null){cZ=c1;
c1=!(cZ&&cZ[c0]===c2)?c0:l;
c0=false
}if(c1!=null){c1=aT.createCallback(c1,cZ)
}return at(c2,c0,c1,cZ)
}
}function aL(c0){var cZ,at;
if(!(c0&&ay.call(c0)==c)||(cZ=c0.constructor,aw(cZ)&&!(cZ instanceof cZ))||(!aE.argsClass&&a4(c0))||(!aE.nodeClass&&j(c0))){return false
}if(aE.ownLast){ai(c0,function(c3,c2,c1){at=aZ.call(c1,c2);
return false
});
return at!==false
}ai(c0,function(c2,c1){at=c1
});
return at===l||aZ.call(c0,at)
}function bm(at){return bR[at]
}function a4(at){return ay.call(at)==V
}if(!aE.argsClass){a4=function(at){return at?aZ.call(at,"callee"):false
}
}var bA=bf||function(at){return at?(typeof at=="object"&&ay.call(at)==s):false
};
var bc=aR({args:"object",init:"[]",top:"if (!(objectTypes[typeof object])) return result",loop:"result.push(index)"});
var b6=!cb?bc:function(at){if(!cX(at)){return[]
}if((aE.enumPrototypes&&typeof at=="function")||(aE.nonEnumArgs&&at.length&&a4(at))){return bc(at)
}return cb(at)
};
var cI=aR(bn);
var aS={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};
var bR=b2(aS);
var bq=aR(b4,{top:b4.top.replace(";",";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = lodash.createCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),loop:"result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"});
function cq(c7,c8,c9,c5,c2,c0){var da=c7;
if(typeof c8!="boolean"&&c8!=null){c5=c9;
c9=c8;
c8=false
}if(typeof c9=="function"){c9=(typeof c5=="undefined")?c9:aT.createCallback(c9,c5,1);
da=c9(da);
if(typeof da!="undefined"){return da
}da=c7
}var c1=cX(da);
if(c1){var c4=ay.call(da);
if(!t[c4]||(!aE.nodeClass&&j(da))){return da
}var c3=bA(da)
}if(!c1||!c8){return c1?(c3?r(da):bq({},da)):da
}var c6=cx[c4];
switch(c4){case A:case K:return new c6(+da);
case G:case H:return new c6(da);
case L:return c6(da.source,C.exec(da))
}var cZ=!c2;
c2||(c2=d());
c0||(c0=d());
var at=c2.length;
while(at--){if(c2[at]==c7){return c0[at]
}}da=c3?c6(da.length):{};
if(c3){if(aZ.call(c7,"index")){da.index=c7.index
}if(aZ.call(c7,"input")){da.input=c7.input
}}c2.push(c7);
c0.push(da);
(c3?cI:bM)(c7,function(db,dc){da[dc]=cq(db,c8,c9,l,c2,c0)
});
if(cZ){S(c2);
S(c0)
}return da
}function cT(cZ,c0,at){return cq(cZ,true,c0,at)
}var br=aR(b4);
function cj(c0,c1,cZ){var at;
c1=aT.createCallback(c1,cZ);
bM(c0,function(c4,c3,c2){if(c1(c4,c3,c2)){at=c3;
return false
}});
return at
}var ai=aR(bn,af,{useHas:false});
var bM=aR(bn,af);
function cv(cZ){var at=[];
ai(cZ,function(c1,c0){if(aw(c1)){at.push(c0)
}});
return at.sort()
}function cH(at,cZ){return at?aZ.call(at,cZ):false
}function b2(c0){var cZ=-1,c2=b6(c0),c3=c2.length,at={};
while(++cZ<c3){var c1=c2[cZ];
at[c0[c1]]=c1
}return at
}function bF(at){return at===true||at===false||ay.call(at)==A
}function a8(at){return at?(typeof at=="object"&&ay.call(at)==K):false
}function bX(at){return at?at.nodeType===1:false
}function ch(c1){var at=true;
if(!c1){return at
}var cZ=ay.call(c1),c0=c1.length;
if((cZ==s||cZ==H||(aE.argsClass?cZ==V:a4(c1)))||(cZ==c&&typeof c0=="number"&&aw(c1.splice))){return !c0
}bM(c1,function(){return(at=false)
});
return at
}function bY(df,de,c5,dd,dh,dg){var c4=c5===h;
if(typeof c5=="function"&&!c4){c5=aT.createCallback(c5,dd,2);
var da=c5(df,de);
if(typeof da!="undefined"){return !!da
}}if(df===de){return df!==0||(1/df==1/de)
}var c2=typeof df,c0=typeof de;
if(df===df&&(!df||(c2!="function"&&c2!="object"))&&(!de||(c0!="function"&&c0!="object"))){return false
}if(df==null||de==null){return df===de
}var at=ay.call(df),c8=ay.call(de);
if(at==V){at=c
}if(c8==V){c8=c
}if(at!=c8){return false
}switch(at){case A:case K:return +df==+de;
case G:return(df!=+df)?de!=+de:(df==0?(1/df==1/de):df==+de);
case L:case H:return df==cg(de)
}var c6=at==s;
if(!c6){if(aZ.call(df,"__wrapped__ ")||aZ.call(de,"__wrapped__")){return bY(df.__wrapped__||df,de.__wrapped__||de,c5,dd,dh,dg)
}if(at!=c||(!aE.nodeClass&&(j(df)||j(de)))){return false
}var c1=!aE.argsObject&&a4(df)?cM:df.constructor,cZ=!aE.argsObject&&a4(de)?cM:de.constructor;
if(c1!=cZ&&!(aw(c1)&&c1 instanceof c1&&aw(cZ)&&cZ instanceof cZ)){return false
}}var c9=!dh;
dh||(dh=d());
dg||(dg=d());
var c3=dh.length;
while(c3--){if(dh[c3]==df){return dg[c3]==de
}}var db=0;
da=true;
dh.push(df);
dg.push(de);
if(c6){c3=df.length;
db=de.length;
da=db==df.length;
if(!da&&!c4){return da
}while(db--){var c7=c3,dc=de[db];
if(c4){while(c7--){if((da=bY(df[c7],dc,c5,dd,dh,dg))){break
}}}else{if(!(da=bY(df[db],dc,c5,dd,dh,dg))){break
}}}return da
}ai(de,function(dk,dj,di){if(aZ.call(di,dj)){db++;
return(da=aZ.call(df,dj)&&bY(df[dj],dk,c5,dd,dh,dg))
}});
if(da&&!c4){ai(df,function(dk,dj,di){if(aZ.call(di,dj)){return(da=--db>-1)
}})
}if(c9){S(dh);
S(dg)
}return da
}function aK(at){return aJ(at)&&!bB(parseFloat(at))
}function aw(at){return typeof at=="function"
}if(aw(/x/)){aw=function(at){return typeof at=="function"&&ay.call(at)==ae
}
}function cX(at){return !!(at&&D[typeof at])
}function bO(at){return bp(at)&&at!=+at
}function cO(at){return at===null
}function bp(at){return typeof at=="number"||ay.call(at)==G
}var aM=!aq?aL:function(c0){if(!(c0&&ay.call(c0)==c)||(!aE.argsClass&&a4(c0))){return false
}var at=c0.valueOf,cZ=typeof at=="function"&&(cZ=aq(at))&&aq(cZ);
return cZ?(c0==cZ||aq(c0)==cZ):aL(c0)
};
function cC(at){return !!(at&&D[typeof at])&&ay.call(at)==L
}function cn(at){return typeof at=="string"||ay.call(at)==H
}function bT(at){return typeof at=="undefined"
}function bH(c2,at,c3){var c6=arguments,c5=0,c0=2;
if(!cX(c2)){return c2
}if(c3===h){var c7=c6[3],c4=c6[4],c1=c6[5]
}else{var cZ=true;
c4=d();
c1=d();
if(typeof c3!="number"){c0=c6.length
}if(c0>3&&typeof c6[c0-2]=="function"){c7=aT.createCallback(c6[--c0-1],c6[c0--],2)
}else{if(c0>2&&typeof c6[c0-1]=="function"){c7=c6[--c0]
}}}while(++c5<c0){(bA(c6[c5])?bx:bM)(c6[c5],function(de,da){var dd,db,c9=de,dc=c2[da];
if(de&&((db=bA(de))||aM(de))){var df=c4.length;
while(df--){if((dd=c4[df]==de)){dc=c1[df];
break
}}if(!dd){var c8;
if(c7){c9=c7(dc,de);
if((c8=typeof c9!="undefined")){dc=c9
}}if(!c8){dc=db?(bA(dc)?dc:[]):(aM(dc)?dc:{})
}c4.push(de);
c1.push(dc);
if(!c8){dc=bH(dc,de,h,c7,c4,c1)
}}}else{if(c7){c9=c7(dc,de);
if(typeof c9=="undefined"){c9=de
}}if(typeof c9!="undefined"){dc=c9
}}c2[da]=dc
})
}if(cZ){S(c4);
S(c1)
}return c2
}function ck(c0,c4,cZ){var c2=b0(),c3=typeof c4=="function",at={};
if(c3){c4=aT.createCallback(c4,cZ)
}else{var c1=bE.apply(b3,aI.call(arguments,1))
}ai(c0,function(c7,c6,c5){if(c3?!c4(c7,c6,c5):c2(c1,c6)<0){at[c6]=c7
}});
return at
}function bw(c0){var cZ=-1,c2=b6(c0),c3=c2.length,at=aF(c3);
while(++cZ<c3){var c1=c2[cZ];
at[cZ]=[c1,c0[c1]]
}return at
}function bJ(c1,c5,cZ){var at={};
if(typeof c5!="function"){var c0=-1,c3=bE.apply(b3,aI.call(arguments,1)),c4=cX(c1)?c3.length:0;
while(++c0<c4){var c2=c3[c0];
if(c2 in c1){at[c2]=c1[c2]
}}}else{c5=aT.createCallback(c5,cZ);
ai(c1,function(c8,c7,c6){if(c5(c8,c7,c6)){at[c7]=c8
}})
}return at
}function cG(c0,c4,cZ,at){var c3=bA(c0);
c4=aT.createCallback(c4,at,4);
if(cZ==null){if(c3){cZ=[]
}else{var c2=c0&&c0.constructor,c1=c2&&c2.prototype;
cZ=bd(c1)
}}(c3?cI:bM)(c0,function(c7,c6,c5){return c4(cZ,c7,c6,c5)
});
return cZ
}function bu(c0){var cZ=-1,c1=b6(c0),c2=c1.length,at=aF(c2);
while(++cZ<c2){at[cZ]=c0[c1[cZ]]
}return at
}function cy(c2){var cZ=-1,c0=bE.apply(b3,aI.call(arguments,1)),c1=c0.length,at=aF(c1);
if(aE.unindexedChars&&cn(c2)){c2=c2.split("")
}while(++cZ<c1){at[cZ]=c2[c0[cZ]]
}return at
}function a3(c4,c3,c1){var cZ=-1,c0=b0(),c2=c4?c4.length:0,at=false;
c1=(c1<0?cc(0,c2+c1):c1)||0;
if(c2&&typeof c2=="number"){at=(cn(c4)?c4.indexOf(c3,c1):c0(c4,c3,c1))>-1
}else{cI(c4,function(c5){if(++cZ>=c1){return !(at=c5===c3)
}})
}return at
}function bG(c0,c1,cZ){var at={};
c1=aT.createCallback(c1,cZ);
bx(c0,function(c3,c2,c4){c2=cg(c1(c3,c2,c4));
(aZ.call(at,c2)?at[c2]++:at[c2]=1)
});
return at
}function ax(c2,c3,cZ){var at=true;
c3=aT.createCallback(c3,cZ);
if(bA(c2)){var c0=-1,c1=c2.length;
while(++c0<c1){if(!(at=!!c3(c2[c0],c0,c2))){break
}}}else{cI(c2,function(c5,c4,c6){return(at=!!c3(c5,c4,c6))
})
}return at
}function bN(c3,c4,cZ){var at=[];
c4=aT.createCallback(c4,cZ);
if(bA(c3)){var c0=-1,c1=c3.length;
while(++c0<c1){var c2=c3[c0];
if(c4(c2,c0,c3)){at.push(c2)
}}}else{cI(c3,function(c6,c5,c7){if(c4(c6,c5,c7)){at.push(c6)
}})
}return at
}function bD(c3,c4,cZ){c4=aT.createCallback(c4,cZ);
if(bA(c3)){var c0=-1,c1=c3.length;
while(++c0<c1){var c2=c3[c0];
if(c4(c2,c0,c3)){return c2
}}}else{var at;
cI(c3,function(c6,c5,c7){if(c4(c6,c5,c7)){at=c6;
return false
}});
return at
}}function bx(c1,c2,at){if(c2&&typeof at=="undefined"&&bA(c1)){var cZ=-1,c0=c1.length;
while(++cZ<c0){if(c2(c1[cZ],cZ,c1)===false){break
}}}else{cI(c1,c2,at)
}return c1
}function bo(c0,c1,cZ){var at={};
c1=aT.createCallback(c1,cZ);
bx(c0,function(c3,c2,c4){c2=cg(c1(c3,c2,c4));
(aZ.call(at,c2)?at[c2]:at[c2]=[]).push(c3)
});
return at
}function aH(c4,cZ){var c1=aI.call(arguments,2),c0=-1,c3=typeof cZ=="function",c2=c4?c4.length:0,at=aF(typeof c2=="number"?c2:0);
bx(c4,function(c5){at[++c0]=(c3?cZ:c5[cZ]).apply(c5,c1)
});
return at
}function bj(c2,c3,cZ){var c0=-1,c1=c2?c2.length:0,at=aF(typeof c1=="number"?c1:0);
c3=aT.createCallback(c3,cZ);
if(bA(c2)){while(++c0<c1){at[c0]=c3(c2[c0],c0,c2)
}}else{cI(c2,function(c5,c4,c6){at[++c0]=c3(c5,c4,c6)
})
}return at
}function bh(c4,c5,cZ){var c2=-Infinity,at=c2;
if(!c5&&bA(c4)){var c0=-1,c1=c4.length;
while(++c0<c1){var c3=c4[c0];
if(c3>at){at=c3
}}}else{c5=(!c5&&cn(c4))?o:aT.createCallback(c5,cZ);
cI(c4,function(c7,c6,c9){var c8=c5(c7,c6,c9);
if(c8>c2){c2=c8;
at=c7
}})
}return at
}function ce(c4,c5,cZ){var c2=Infinity,at=c2;
if(!c5&&bA(c4)){var c0=-1,c1=c4.length;
while(++c0<c1){var c3=c4[c0];
if(c3<at){at=c3
}}}else{c5=(!c5&&cn(c4))?o:aT.createCallback(c5,cZ);
cI(c4,function(c7,c6,c9){var c8=c5(c7,c6,c9);
if(c8<c2){c2=c8;
at=c7
}})
}return at
}var cS=bj;
function cf(c3,c4,cZ,at){var c1=arguments.length<3;
c4=aT.createCallback(c4,at,4);
if(bA(c3)){var c0=-1,c2=c3.length;
if(c1){cZ=c3[++c0]
}while(++c0<c2){cZ=c4(cZ,c3[c0],c0,c3)
}}else{cI(c3,function(c6,c5,c7){cZ=c1?(c1=false,c6):c4(cZ,c6,c5,c7)
})
}return cZ
}function cD(c4,c5,cZ,at){var c3=c4,c2=c4?c4.length:0,c1=arguments.length<3;
if(typeof c2!="number"){var c0=b6(c4);
c2=c0.length
}else{if(aE.unindexedChars&&cn(c4)){c3=c4.split("")
}}c5=aT.createCallback(c5,at,4);
bx(c4,function(c7,c6,c8){c6=c0?c0[--c2]:--c2;
cZ=c1?(c1=false,c3[c6]):c5(cZ,c3[c6],c6,c8)
});
return cZ
}function az(cZ,c0,at){c0=aT.createCallback(c0,at);
return bN(cZ,function(c2,c1,c3){return !c0(c2,c1,c3)
})
}function bv(c1){var cZ=-1,c0=c1?c1.length:0,at=aF(typeof c0=="number"?c0:0);
bx(c1,function(c3){var c2=cz(bI()*(++cZ+1));
at[cZ]=at[c2];
at[c2]=c3
});
return at
}function a7(cZ){var at=cZ?cZ.length:0;
return typeof at=="number"?at:b6(cZ).length
}function a6(c2,c3,cZ){var at;
c3=aT.createCallback(c3,cZ);
if(bA(c2)){var c0=-1,c1=c2.length;
while(++c0<c1){if((at=c3(c2[c0],c0,c2))){break
}}}else{cI(c2,function(c5,c4,c6){return !(at=c3(c5,c4,c6))
})
}return !!at
}function a9(c3,c4,cZ){var c1=-1,c2=c3?c3.length:0,at=aF(typeof c2=="number"?c2:0);
c4=aT.createCallback(c4,cZ);
bx(c3,function(c7,c6,c8){var c5=at[++c1]=p();
c5.criteria=c4(c7,c6,c8);
c5.index=c1;
c5.value=c7
});
c2=at.length;
at.sort(Y);
while(c2--){var c0=at[c2];
at[c2]=c0.value;
n(c0)
}return at
}function aC(at){if(at&&typeof at.length=="number"){return(aE.unindexedChars&&cn(at))?at.split(""):r(at)
}return bu(at)
}var aj=bN;
function aN(c2){var cZ=-1,c0=c2?c2.length:0,at=[];
while(++cZ<c0){var c1=c2[cZ];
if(c1){at.push(c1)
}}return at
}function ag(c2){var c1=-1,c3=b0(),c0=c2?c2.length:0,at=bE.apply(b3,aI.call(arguments,1)),c6=[];
var c4=c0>=b&&c3===Q;
if(c4){var cZ=ab(at);
if(cZ){c3=O;
at=cZ
}else{c4=false
}}while(++c1<c0){var c5=c2[c1];
if(c3(at,c5)<0){c6.push(c5)
}}if(c4){n(at)
}return c6
}function cN(c2,c1,at){var cZ=-1,c0=c2?c2.length:0;
c1=aT.createCallback(c1,at);
while(++cZ<c0){if(c1(c2[cZ],cZ,c2)){return cZ
}}return -1
}function bg(c3,c2,at){if(c3){var c1=0,c0=c3.length;
if(typeof c2!="number"&&c2!=null){var cZ=-1;
c2=aT.createCallback(c2,at);
while(++cZ<c0&&c2(c3[cZ],cZ,c3)){c1++
}}else{c1=c2;
if(c1==null||at){return c3[0]
}}return r(c3,0,am(cc(0,c1),c0))
}}var cp=cW(function cp(c4,cZ,c3){var c0=-1,c1=c4?c4.length:0,at=[];
while(++c0<c1){var c2=c4[c0];
if(c3){c2=c3(c2,c0,c4)
}if(bA(c2)){av.apply(at,cZ?c2:cp(c2))
}else{at.push(c2)
}}return at
});
function cQ(c2,c1,cZ){if(typeof cZ=="number"){var c0=c2?c2.length:0;
cZ=(cZ<0?cc(0,c0+cZ):cZ||0)
}else{if(cZ){var at=ba(c2,c1);
return c2[at]===c1?at:-1
}}return c2?Q(c2,c1,cZ):-1
}function cR(c3,c2,at){if(!c3){return[]
}var c1=0,c0=c3.length;
if(typeof c2!="number"&&c2!=null){var cZ=c0;
c2=aT.createCallback(c2,at);
while(cZ--&&c2(c3[cZ],cZ,c3)){c1++
}}else{c1=(c2==null||at)?1:c2||c1
}return r(c3,0,am(cc(0,c0-c1),c0))
}function cm(c4){var c6=arguments,c2=c6.length,c0=-1,c5=d(),c3=-1,c7=b0(),c1=c4?c4.length:0,c9=[],cZ=d();
while(++c0<c2){var c8=c6[c0];
c5[c0]=c7===Q&&(c8?c8.length:0)>=b&&ab(c0?c6[c0]:cZ)
}outer:while(++c3<c1){var at=c5[0];
c8=c4[c3];
if((at?O(at,c8):c7(cZ,c8))<0){c0=c2;
(at||cZ).push(c8);
while(--c0){at=c5[c0];
if((at?O(at,c8):c7(c6[c0],c8))<0){continue outer
}}c9.push(c8)
}}while(c2--){at=c5[c2];
if(at){n(at)
}}S(c5);
S(cZ);
return c9
}function bs(c3,c2,at){if(c3){var c1=0,c0=c3.length;
if(typeof c2!="number"&&c2!=null){var cZ=c0;
c2=aT.createCallback(c2,at);
while(cZ--&&c2(c3[cZ],cZ,c3)){c1++
}}else{c1=c2;
if(c1==null||at){return c3[c0-1]
}}return r(c3,cc(0,c0-c1))
}}function cY(c1,c0,cZ){var at=c1?c1.length:0;
if(typeof cZ=="number"){at=(cZ<0?cc(0,at+cZ):am(cZ,at-1))+1
}while(at--){if(c1[at]===c0){return at
}}return -1
}function aX(c3,cZ,c2){c3=+c3||0;
c2=+c2||1;
if(cZ==null){cZ=c3;
c3=0
}var c0=-1,c1=cc(0,aV((cZ-c3)/c2)),at=aF(c1);
while(++c0<c1){at[c0]=c3;
c3+=c2
}return at
}function b5(c3,c2,at){if(typeof c2!="number"&&c2!=null){var c1=0,cZ=-1,c0=c3?c3.length:0;
c2=aT.createCallback(c2,at);
while(++cZ<c0&&c2(c3[cZ],cZ,c3)){c1++
}}else{c1=(c2==null||at)?1:cc(0,c2)
}return r(c3,c1)
}function ba(c4,c2,c3,cZ){var at=0,c1=c4?c4.length:at;
c3=c3?aT.createCallback(c3,cZ,1):bi;
c2=c3(c2);
while(at<c1){var c0=(at+c1)>>>1;
(c3(c4[c0])<c2)?at=c0+1:c1=c0
}return at
}function ar(at){if(!bA(at)){arguments[0]=at?aI.call(at):b3
}return bP(bE.apply(b3,arguments))
}var bP=cW(function(c4,c1,c8){var c3=-1,c5=b0(),c0=c4?c4.length:0,c9=[];
var c6=!c1&&c0>=b&&c5===Q,cZ=(c8||c6)?d():c9;
if(c6){var at=ab(cZ);
if(at){c5=O;
cZ=at
}else{c6=false;
cZ=c8?cZ:(S(cZ),c9)
}}while(++c3<c0){var c7=c4[c3],c2=c8?c8(c7,c3,c4):c7;
if(c1?!c3||cZ[cZ.length-1]!==c2:c5(cZ,c2)<0){if(c8||c6){cZ.push(c2)
}c9.push(c7)
}}if(c6){S(cZ.array);
n(cZ)
}else{if(c8){S(cZ)
}}return c9
});
function cP(c1){var cZ=-1,c0=c1?bh(cS(c1,"length")):0,at=aF(c0<0?0:c0);
while(++cZ<c0){at[cZ]=cS(c1,cZ)
}return at
}function cL(at){return ag(at,aI.call(arguments,1))
}function ao(at){return at?cP(arguments):[]
}function cr(c3,cZ){var c0=-1,c2=c3?c3.length:0,at={};
while(++c0<c2){var c1=c3[c0];
if(cZ){at[c1]=cZ[c0]
}else{at[c1[0]]=c1[1]
}}return at
}function aQ(cZ,at){if(cZ<1){return at()
}return function(){if(--cZ<1){return at.apply(this,arguments)
}}
}function bV(cZ,at){return aE.fastBind||(b1&&arguments.length>2)?b1.call.apply(b1,arguments):aO(cZ,at,aI.call(arguments,2))
}function bt(c0){var at=arguments.length>1?bE.apply(b3,aI.call(arguments,1)):cv(c0),cZ=-1,c2=at.length;
while(++cZ<c2){var c1=at[cZ];
c0[c1]=bV(c0[c1],c0)
}return c0
}function cB(at,cZ){return aO(at,cZ,aI.call(arguments,2),h)
}function ct(){var at=arguments;
return function(){var cZ=arguments,c0=at.length;
while(c0--){cZ=[at[c0].apply(this,cZ)]
}return cZ[0]
}
}function aD(c1,at,c2){if(c1==null){return bi
}var c0=typeof c1;
if(c0!="function"){if(c0!="object"){return function(c3){return c3[c1]
}
}var cZ=b6(c1);
return function(c4){var c5=cZ.length,c3=false;
while(c5--){if(!(c3=bY(c4[cZ[c5]],c1[cZ[c5]],h))){break
}}return c3
}
}if(typeof at=="undefined"||(i&&!i.test(bz.call(c1)))){return c1
}if(c2===1){return function(c3){return c1.call(at,c3)
}
}if(c2===2){return function(c4,c3){return c1.call(at,c4,c3)
}
}if(c2===4){return function(c3,c5,c4,c6){return c1.call(at,c3,c5,c4,c6)
}
}return function(c4,c3,c5){return c1.call(at,c4,c3,c5)
}
}function cs(c0,c5,dc){var c9,dd,da,c6=0,c7=0,c2=false,c3=null,db=null,c8=true;
function c4(){bQ(c3);
bQ(db);
c6=0;
c3=db=null
}function c1(){var de=c8&&(!at||c6>1);
c4();
if(de){if(c2!==false){c7=new b9
}dd=c0.apply(da,c9)
}}function cZ(){c4();
if(c8||(c2!==c5)){c7=new b9;
dd=c0.apply(da,c9)
}}c5=cc(0,c5||0);
if(dc===true){var at=true;
c8=false
}else{if(cX(dc)){at=dc.leading;
c2="maxWait" in dc&&cc(c5,dc.maxWait||0);
c8="trailing" in dc?dc.trailing:c8
}}return function(){c9=arguments;
da=this;
c6++;
bQ(db);
if(c2===false){if(at&&c6<2){dd=c0.apply(da,c9)
}}else{var de=new b9;
if(!c3&&!at){c7=de
}var df=c2-(de-c7);
if(df<=0){bQ(c3);
c3=null;
c7=de;
dd=c0.apply(da,c9)
}else{if(!c3){c3=aW(cZ,df)
}}}if(c5!==c2){db=aW(c1,c5)
}return dd
}
}function a1(cZ){var at=aI.call(arguments,1);
return aW(function(){cZ.apply(l,at)
},1)
}if(ap&&x&&typeof bU=="function"){a1=bV(bU,ah)
}function bL(cZ,c0){var at=aI.call(arguments,2);
return aW(function(){cZ.apply(l,at)
},c0)
}function a2(cZ,c0){function at(){var c1=at.cache,c2=a+(c0?c0.apply(this,arguments):arguments[0]);
return aZ.call(c1,c2)?c1[c2]:(c1[c2]=cZ.apply(this,arguments))
}at.cache={};
return at
}function cl(c0){var cZ,at;
return function(){if(cZ){return at
}cZ=true;
at=c0.apply(this,arguments);
c0=null;
return at
}
}function cE(at){return aO(at,aI.call(arguments,1))
}function ci(at){return aO(at,aI.call(arguments,1),null,h)
}function cd(c0,c1,cZ){var c3=true,c2=true;
if(cZ===false){c3=false
}else{if(cX(cZ)){c3="leading" in cZ?cZ.leading:c3;
c2="trailing" in cZ?cZ.trailing:c2
}}cZ=p();
cZ.leading=c3;
cZ.maxWait=c1;
cZ.trailing=c2;
var at=cs(c0,c1,cZ);
n(cZ);
return at
}function bS(at,cZ){return function(){var c0=[at];
av.apply(c0,arguments);
return cZ.apply(this,c0)
}
}function bb(at){return at==null?"":cg(at).replace(z,bl)
}function bi(at){return at
}function aB(at){bx(cv(at),function(cZ){var c0=aT[cZ]=at[cZ];
aT.prototype[cZ]=function(){var c3=this.__wrapped__,c2=[c3];
av.apply(c2,arguments);
var c1=c0.apply(aT,c2);
return(c3&&typeof c3=="object"&&c3===c1)?this:new cA(c1)
}
})
}function cK(){ah._=cF;
return this
}var cV=cU(F+"08")==8?cU:function(cZ,at){return cU(cn(cZ)?cZ.replace(Z,""):cZ,at||0)
};
function b7(cZ,at){if(cZ==null&&at==null){at=1
}cZ=+cZ||0;
if(at==null){at=cZ;
cZ=0
}else{at=+at||0
}var c0=bI();
return(cZ%1||at%1)?cZ+am(c0*(at-cZ+parseFloat("1e-"+((c0+"").length-1))),at):cZ+cz(c0*(at-cZ+1))
}function aP(at,c0){var cZ=at?at[c0]:l;
return aw(cZ)?at[c0]():cZ
}function bC(db,c5,de){var c2=aT.templateSettings;
db||(db="");
de=bK?br({},de,c2):c2;
var c0=bK&&br({},de.imports,c2.imports),c6=bK?b6(c0):["_"],c1=bK?bu(c0):[aT];
var da,c7=0,c9=de.interpolate||R,cZ="__p += '";
var dd=cu((de.escape||R).source+"|"+c9.source+"|"+(c9===m?y:R).source+"|"+(de.evaluate||R).source+"|$","g");
db.replace(dd,function(df,dj,dh,dg,di,dk){dh||(dh=dg);
cZ+=db.slice(c7,dk).replace(W,f);
if(dj){cZ+="' +\n__e("+dj+") +\n'"
}if(di){da=true;
cZ+="';\n"+di+";\n__p += '"
}if(dh){cZ+="' +\n((__t = ("+dh+")) == null ? '' : __t) +\n'"
}c7=dk+df.length;
return df
});
cZ+="';\n";
var c3=de.variable,c4=c3;
if(!c4){c3="obj";
cZ="with ("+c3+") {\n"+cZ+"\n}\n"
}cZ=(da?cZ.replace(v,""):cZ).replace(T,"$1").replace(e,"$1;");
cZ="function("+c3+") {\n"+(c4?"":c3+" || ("+c3+" = {});\n")+"var __t, __p = '', __e = _.escape"+(da?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+cZ+"return __p\n}";
var at="\n/*\n//@ sourceURL="+(de.sourceURL||"/lodash/template/source["+(ac++)+"]")+"\n*/";
try{var dc=aY(c6,"return "+cZ+at).apply(l,c1)
}catch(c8){c8.source=cZ;
throw c8
}if(c5){return dc(c5)
}dc.source=cZ;
return dc
}function ak(c2,c1,cZ){c2=(c2=+c2)>-1?c2:0;
var c0=-1,at=aF(c2);
c1=aT.createCallback(c1,cZ,1);
while(++c0<c2){at[c0]=c1(c0)
}return at
}function al(at){return at==null?"":cg(at).replace(E,bm)
}function ca(at){var cZ=++I;
return cg(at==null?"":at)+cZ
}function co(at,cZ){cZ(at);
return at
}function bk(){return cg(this.__wrapped__)
}function aU(){return this.__wrapped__
}aT.after=aQ;
aT.assign=bq;
aT.at=cy;
aT.bind=bV;
aT.bindAll=bt;
aT.bindKey=cB;
aT.compact=aN;
aT.compose=ct;
aT.countBy=bG;
aT.createCallback=aD;
aT.debounce=cs;
aT.defaults=br;
aT.defer=a1;
aT.delay=bL;
aT.difference=ag;
aT.filter=bN;
aT.flatten=cp;
aT.forEach=bx;
aT.forIn=ai;
aT.forOwn=bM;
aT.functions=cv;
aT.groupBy=bo;
aT.initial=cR;
aT.intersection=cm;
aT.invert=b2;
aT.invoke=aH;
aT.keys=b6;
aT.map=bj;
aT.max=bh;
aT.memoize=a2;
aT.merge=bH;
aT.min=ce;
aT.omit=ck;
aT.once=cl;
aT.pairs=bw;
aT.partial=cE;
aT.partialRight=ci;
aT.pick=bJ;
aT.pluck=cS;
aT.range=aX;
aT.reject=az;
aT.rest=b5;
aT.shuffle=bv;
aT.sortBy=a9;
aT.tap=co;
aT.throttle=cd;
aT.times=ak;
aT.toArray=aC;
aT.transform=cG;
aT.union=ar;
aT.uniq=bP;
aT.unzip=cP;
aT.values=bu;
aT.where=aj;
aT.without=cL;
aT.wrap=bS;
aT.zip=ao;
aT.zipObject=cr;
aT.collect=bj;
aT.drop=b5;
aT.each=bx;
aT.extend=bq;
aT.methods=cv;
aT.object=cr;
aT.select=bN;
aT.tail=b5;
aT.unique=bP;
aB(aT);
aT.chain=aT;
aT.prototype.chain=function(){return this
};
aT.clone=cq;
aT.cloneDeep=cT;
aT.contains=a3;
aT.escape=bb;
aT.every=ax;
aT.find=bD;
aT.findIndex=cN;
aT.findKey=cj;
aT.has=cH;
aT.identity=bi;
aT.indexOf=cQ;
aT.isArguments=a4;
aT.isArray=bA;
aT.isBoolean=bF;
aT.isDate=a8;
aT.isElement=bX;
aT.isEmpty=ch;
aT.isEqual=bY;
aT.isFinite=aK;
aT.isFunction=aw;
aT.isNaN=bO;
aT.isNull=cO;
aT.isNumber=bp;
aT.isObject=cX;
aT.isPlainObject=aM;
aT.isRegExp=cC;
aT.isString=cn;
aT.isUndefined=bT;
aT.lastIndexOf=cY;
aT.mixin=aB;
aT.noConflict=cK;
aT.parseInt=cV;
aT.random=b7;
aT.reduce=cf;
aT.reduceRight=cD;
aT.result=aP;
aT.runInContext=aa;
aT.size=a7;
aT.some=a6;
aT.sortedIndex=ba;
aT.template=bC;
aT.unescape=al;
aT.uniqueId=ca;
aT.all=ax;
aT.any=a6;
aT.detect=bD;
aT.findWhere=bD;
aT.foldl=cf;
aT.foldr=cD;
aT.include=a3;
aT.inject=cf;
bM(aT,function(cZ,at){if(!aT.prototype[at]){aT.prototype[at]=function(){var c0=[this.__wrapped__];
av.apply(c0,arguments);
return cZ.apply(aT,c0)
}
}});
aT.first=bg;
aT.last=bs;
aT.take=bg;
aT.head=bg;
bM(aT,function(cZ,at){if(!aT.prototype[at]){aT.prototype[at]=function(c2,c1){var c0=cZ(this.__wrapped__,c2,c1);
return c2==null||(c1&&typeof c2!="function")?c0:new cA(c0)
}
}});
aT.VERSION="1.3.1";
aT.prototype.toString=bk;
aT.prototype.value=aU;
aT.prototype.valueOf=aU;
cI(["join","pop","shift"],function(at){var cZ=b3[at];
aT.prototype[at]=function(){return cZ.apply(this.__wrapped__,arguments)
}
});
cI(["push","reverse","sort","unshift"],function(at){var cZ=b3[at];
aT.prototype[at]=function(){cZ.apply(this.__wrapped__,arguments);
return this
}
});
cI(["concat","slice","splice"],function(at){var cZ=b3[at];
aT.prototype[at]=function(){return new cA(cZ.apply(this.__wrapped__,arguments))
}
});
if(!aE.spliceObjects){cI(["pop","shift","splice"],function(at){var cZ=b3[at],c0=at=="splice";
aT.prototype[at]=function(){var c2=this.__wrapped__,c1=cZ.apply(c2,arguments);
if(c2.length===0){delete c2[0]
}return c0?new cA(c1):c1
}
})
}aT._basicEach=cI;
aT._iteratorTemplate=bK;
aT._shimKeys=bc;
return aT
}var ad=aa();
if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){P._=ad;
define(function(){return ad
})
}else{if(X&&!X.nodeType){if(x){(x.exports=ad)._=ad
}else{X._=ad
}}else{P._=ad
}}}(this));
(function(){var u=this;
var B=u.Backbone;
var g=[];
var D=g.push;
var n=g.slice;
var t=g.splice;
var z;
if(typeof exports!=="undefined"){z=exports
}else{z=u.Backbone={}
}z.VERSION="1.0.0";
var L=u._;
if(!L&&(typeof require!=="undefined")){L=require("underscore")
}z.$=u.jQuery||u.Zepto||u.ender||u.$;
z.noConflict=function(){u.Backbone=B;
return this
};
z.emulateHTTP=false;
z.emulateJSON=false;
var J=z.Events={on:function(M,P,O){if(!x(this,"on",M,[P,O])||!P){return this
}this._events||(this._events={});
var N=this._events[M]||(this._events[M]=[]);
N.push({callback:P,context:O,ctx:O||this});
return this
},once:function(N,Q,O){if(!x(this,"once",N,[Q,O])||!Q){return this
}var M=this;
var P=L.once(function(){M.off(N,P);
Q.apply(this,arguments)
});
P._callback=Q;
return this.on(N,P,O)
},off:function(M,V,N){var T,U,W,S,R,O,Q,P;
if(!this._events||!x(this,"off",M,[V,N])){return this
}if(!M&&!V&&!N){this._events={};
return this
}S=M?[M]:L.keys(this._events);
for(R=0,O=S.length;
R<O;
R++){M=S[R];
if(W=this._events[M]){this._events[M]=T=[];
if(V||N){for(Q=0,P=W.length;
Q<P;
Q++){U=W[Q];
if((V&&V!==U.callback&&V!==U.callback._callback)||(N&&N!==U.context)){T.push(U)
}}}if(!T.length){delete this._events[M]
}}}return this
},trigger:function(O){if(!this._events){return this
}var N=n.call(arguments,1);
if(!x(this,"trigger",O,N)){return this
}var P=this._events[O];
var M=this._events.all;
if(P){b(P,N)
}if(M){b(M,arguments)
}return this
},stopListening:function(P,M,R){var N=this._listeners;
if(!N){return this
}var O=!M&&!R;
if(typeof M==="object"){R=this
}if(P){(N={})[P._listenerId]=P
}for(var Q in N){N[Q].off(M,R,this);
if(O){delete this._listeners[Q]
}}return this
}};
var w=/\s+/;
var x=function(T,R,N,Q){if(!N){return true
}if(typeof N==="object"){for(var P in N){T[R].apply(T,[P,N[P]].concat(Q))
}return false
}if(w.test(N)){var S=N.split(w);
for(var O=0,M=S.length;
O<M;
O++){T[R].apply(T,[S[O]].concat(Q))
}return false
}return true
};
var b=function(R,P){var S,Q=-1,O=R.length,N=P[0],M=P[1],T=P[2];
switch(P.length){case 0:while(++Q<O){(S=R[Q]).callback.call(S.ctx)
}return;
case 1:while(++Q<O){(S=R[Q]).callback.call(S.ctx,N)
}return;
case 2:while(++Q<O){(S=R[Q]).callback.call(S.ctx,N,M)
}return;
case 3:while(++Q<O){(S=R[Q]).callback.call(S.ctx,N,M,T)
}return;
default:while(++Q<O){(S=R[Q]).callback.apply(S.ctx,P)
}}};
var C={listenTo:"on",listenToOnce:"once"};
L.each(C,function(M,N){J[N]=function(Q,O,S){var P=this._listeners||(this._listeners={});
var R=Q._listenerId||(Q._listenerId=L.uniqueId("l"));
P[R]=Q;
if(typeof O==="object"){S=this
}Q[M](O,S,this);
return this
}
});
J.bind=J.on;
J.unbind=J.off;
L.extend(z,J);
var E=z.Model=function(M,O){var P;
var N=M||{};
O||(O={});
this.cid=L.uniqueId("c");
this.attributes={};
L.extend(this,L.pick(O,F));
if(O.parse){N=this.parse(N,O)||{}
}if(P=L.result(this,"defaults")){N=L.defaults({},N,P)
}this.set(N,O);
this.changed={};
this.initialize.apply(this,arguments)
};
var F=["url","urlRoot","collection"];
L.extend(E.prototype,J,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(M){return L.clone(this.attributes)
},sync:function(){return z.sync.apply(this,arguments)
},get:function(M){return this.attributes[M]
},escape:function(M){return L.escape(this.get(M))
},has:function(M){return this.get(M)!=null
},set:function(U,M,Y){var S,V,W,T,R,X,O,Q;
if(U==null){return this
}if(typeof U==="object"){V=U;
Y=M
}else{(V={})[U]=M
}Y||(Y={});
if(!this._validate(V,Y)){return false
}W=Y.unset;
R=Y.silent;
T=[];
X=this._changing;
this._changing=true;
if(!X){this._previousAttributes=L.clone(this.attributes);
this.changed={}
}Q=this.attributes,O=this._previousAttributes;
if(this.idAttribute in V){this.id=V[this.idAttribute]
}for(S in V){M=V[S];
if(!L.isEqual(Q[S],M)){T.push(S)
}if(!L.isEqual(O[S],M)){this.changed[S]=M
}else{delete this.changed[S]
}W?delete Q[S]:Q[S]=M
}if(!R){if(T.length){this._pending=true
}for(var P=0,N=T.length;
P<N;
P++){this.trigger("change:"+T[P],this,Q[T[P]],Y)
}}if(X){return this
}if(!R){while(this._pending){this._pending=false;
this.trigger("change",this,Y)
}}this._pending=false;
this._changing=false;
return this
},unset:function(M,N){return this.set(M,void 0,L.extend({},N,{unset:true}))
},clear:function(N){var M={};
for(var O in this.attributes){M[O]=void 0
}return this.set(M,L.extend({},N,{unset:true}))
},hasChanged:function(M){if(M==null){return !L.isEmpty(this.changed)
}return L.has(this.changed,M)
},changedAttributes:function(O){if(!O){return this.hasChanged()?L.clone(this.changed):false
}var Q,P=false;
var N=this._changing?this._previousAttributes:this.attributes;
for(var M in O){if(L.isEqual(N[M],(Q=O[M]))){continue
}(P||(P={}))[M]=Q
}return P
},previous:function(M){if(M==null||!this._previousAttributes){return null
}return this._previousAttributes[M]
},previousAttributes:function(){return L.clone(this._previousAttributes)
},fetch:function(N){N=N?L.clone(N):{};
if(N.parse===void 0){N.parse=true
}var M=this;
var O=N.success;
N.success=function(P){if(!M.set(M.parse(P,N),N)){return false
}if(O){O(M,P,N)
}M.trigger("sync",M,P,N)
};
H(this,N);
return this.sync("read",this,N)
},save:function(Q,N,U){var R,M,T,O=this.attributes;
if(Q==null||typeof Q==="object"){R=Q;
U=N
}else{(R={})[Q]=N
}if(R&&(!U||!U.wait)&&!this.set(R,U)){return false
}U=L.extend({validate:true},U);
if(!this._validate(R,U)){return false
}if(R&&U.wait){this.attributes=L.extend({},O,R)
}if(U.parse===void 0){U.parse=true
}var P=this;
var S=U.success;
U.success=function(W){P.attributes=O;
var V=P.parse(W,U);
if(U.wait){V=L.extend(R||{},V)
}if(L.isObject(V)&&!P.set(V,U)){return false
}if(S){S(P,W,U)
}P.trigger("sync",P,W,U)
};
H(this,U);
M=this.isNew()?"create":(U.patch?"patch":"update");
if(M==="patch"){U.attrs=R
}T=this.sync(M,this,U);
if(R&&U.wait){this.attributes=O
}return T
},destroy:function(N){N=N?L.clone(N):{};
var M=this;
var Q=N.success;
var O=function(){M.trigger("destroy",M,M.collection,N)
};
N.success=function(R){if(N.wait||M.isNew()){O()
}if(Q){Q(M,R,N)
}if(!M.isNew()){M.trigger("sync",M,R,N)
}};
if(this.isNew()){N.success();
return false
}H(this,N);
var P=this.sync("delete",this,N);
if(!N.wait){O()
}return P
},url:function(){var M=L.result(this,"urlRoot")||L.result(this.collection,"url")||r();
if(this.isNew()){return M
}return M+(M.charAt(M.length-1)==="/"?"":"/")+encodeURIComponent(this.id)
},parse:function(N,M){return N
},clone:function(){return new this.constructor(this.attributes)
},isNew:function(){return this.id==null
},isValid:function(M){return this._validate({},L.extend(M||{},{validate:true}))
},_validate:function(O,N){if(!N.validate||!this.validate){return true
}O=L.extend({},this.attributes,O);
var M=this.validationError=this.validate(O,N)||null;
if(!M){return true
}this.trigger("invalid",this,M,L.extend(N||{},{validationError:M}));
return false
}});
var a=["keys","values","pairs","invert","pick","omit"];
L.each(a,function(M){E.prototype[M]=function(){var N=n.call(arguments);
N.unshift(this.attributes);
return L[M].apply(L,N)
}
});
var c=z.Collection=function(N,M){M||(M={});
if(M.url){this.url=M.url
}if(M.model){this.model=M.model
}if(M.comparator!==void 0){this.comparator=M.comparator
}this._reset();
this.initialize.apply(this,arguments);
if(N){this.reset(N,L.extend({silent:true},M))
}};
var o={add:true,remove:true,merge:true};
var K={add:true,merge:false,remove:false};
L.extend(c.prototype,J,{model:E,initialize:function(){},toJSON:function(M){return this.map(function(N){return N.toJSON(M)
})
},sync:function(){return z.sync.apply(this,arguments)
},add:function(N,M){return this.set(N,L.defaults(M||{},K))
},remove:function(R,P){R=L.isArray(R)?R.slice():[R];
P||(P={});
var Q,M,O,N;
for(Q=0,M=R.length;
Q<M;
Q++){N=this.get(R[Q]);
if(!N){continue
}delete this._byId[N.id];
delete this._byId[N.cid];
O=this.indexOf(N);
this.models.splice(O,1);
this.length--;
if(!P.silent){P.index=O;
N.trigger("remove",N,this,P)
}this._removeReference(N)
}return this
},set:function(N,Z){Z=L.defaults(Z||{},o);
if(Z.parse){N=this.parse(N,Z)
}if(!L.isArray(N)){N=N?[N]:[]
}var U,Q,W,X,O,V;
var P=Z.at;
var T=this.comparator&&(P==null)&&Z.sort!==false;
var R=L.isString(this.comparator)?this.comparator:null;
var Y=[],M=[],S={};
for(U=0,Q=N.length;
U<Q;
U++){if(!(W=this._prepareModel(N[U],Z))){continue
}if(O=this.get(W)){if(Z.remove){S[O.cid]=true
}if(Z.merge){O.set(W.attributes,Z);
if(T&&!V&&O.hasChanged(R)){V=true
}}}else{if(Z.add){Y.push(W);
W.on("all",this._onModelEvent,this);
this._byId[W.cid]=W;
if(W.id!=null){this._byId[W.id]=W
}}}}if(Z.remove){for(U=0,Q=this.length;
U<Q;
++U){if(!S[(W=this.models[U]).cid]){M.push(W)
}}if(M.length){this.remove(M,Z)
}}if(Y.length){if(T){V=true
}this.length+=Y.length;
if(P!=null){t.apply(this.models,[P,0].concat(Y))
}else{D.apply(this.models,Y)
}}if(V){this.sort({silent:true})
}if(Z.silent){return this
}for(U=0,Q=Y.length;
U<Q;
U++){(W=Y[U]).trigger("add",W,this,Z)
}if(V){this.trigger("sort",this,Z)
}return this
},reset:function(P,N){N||(N={});
for(var O=0,M=this.models.length;
O<M;
O++){this._removeReference(this.models[O])
}N.previousModels=this.models;
this._reset();
this.add(P,L.extend({silent:true},N));
if(!N.silent){this.trigger("reset",this,N)
}return this
},push:function(N,M){N=this._prepareModel(N,M);
this.add(N,L.extend({at:this.length},M));
return N
},pop:function(N){var M=this.at(this.length-1);
this.remove(M,N);
return M
},unshift:function(N,M){N=this._prepareModel(N,M);
this.add(N,L.extend({at:0},M));
return N
},shift:function(N){var M=this.at(0);
this.remove(M,N);
return M
},slice:function(N,M){return this.models.slice(N,M)
},get:function(M){if(M==null){return void 0
}return this._byId[M.id!=null?M.id:M.cid||M]
},at:function(M){return this.models[M]
},where:function(M,N){if(L.isEmpty(M)){return N?void 0:[]
}return this[N?"find":"filter"](function(O){for(var P in M){if(M[P]!==O.get(P)){return false
}}return true
})
},findWhere:function(M){return this.where(M,true)
},sort:function(M){if(!this.comparator){throw new Error("Cannot sort a set without a comparator")
}M||(M={});
if(L.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)
}else{this.models.sort(L.bind(this.comparator,this))
}if(!M.silent){this.trigger("sort",this,M)
}return this
},sortedIndex:function(M,P,N){P||(P=this.comparator);
var O=L.isFunction(P)?P:function(Q){return Q.get(P)
};
return L.sortedIndex(this.models,M,O,N)
},pluck:function(M){return L.invoke(this.models,"get",M)
},fetch:function(M){M=M?L.clone(M):{};
if(M.parse===void 0){M.parse=true
}var O=M.success;
var N=this;
M.success=function(P){var Q=M.reset?"reset":"set";
N[Q](P,M);
if(O){O(N,P,M)
}N.trigger("sync",N,P,M)
};
H(this,M);
return this.sync("read",this,M)
},create:function(N,M){M=M?L.clone(M):{};
if(!(N=this._prepareModel(N,M))){return false
}if(!M.wait){this.add(N,M)
}var P=this;
var O=M.success;
M.success=function(Q){if(M.wait){P.add(N,M)
}if(O){O(N,Q,M)
}};
N.save(null,M);
return N
},parse:function(N,M){return N
},clone:function(){return new this.constructor(this.models)
},_reset:function(){this.length=0;
this.models=[];
this._byId={}
},_prepareModel:function(O,N){if(O instanceof E){if(!O.collection){O.collection=this
}return O
}N||(N={});
N.collection=this;
var M=new this.model(O,N);
if(!M._validate(O,N)){this.trigger("invalid",this,O,N);
return false
}return M
},_removeReference:function(M){if(this===M.collection){delete M.collection
}M.off("all",this._onModelEvent,this)
},_onModelEvent:function(O,N,P,M){if((O==="add"||O==="remove")&&P!==this){return
}if(O==="destroy"){this.remove(N,M)
}if(N&&O==="change:"+N.idAttribute){delete this._byId[N.previous(N.idAttribute)];
if(N.id!=null){this._byId[N.id]=N
}}this.trigger.apply(this,arguments)
}});
var y=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];
L.each(y,function(M){c.prototype[M]=function(){var N=n.call(arguments);
N.unshift(this.models);
return L[M].apply(L,N)
}
});
var k=["groupBy","countBy","sortBy"];
L.each(k,function(M){c.prototype[M]=function(P,N){var O=L.isFunction(P)?P:function(Q){return Q.get(P)
};
return L[M](this.models,O,N)
}
});
var G=z.View=function(M){this.cid=L.uniqueId("view");
this._configure(M||{});
this._ensureElement();
this.initialize.apply(this,arguments);
this.delegateEvents()
};
var v=/^(\S+)\s*(.*)$/;
var e=["model","collection","el","id","attributes","className","tagName","events"];
L.extend(G.prototype,J,{tagName:"div",$:function(M){return this.$el.find(M)
},initialize:function(){},render:function(){return this
},remove:function(){this.$el.remove();
this.stopListening();
return this
},setElement:function(M,N){if(this.$el){this.undelegateEvents()
}this.$el=M instanceof z.$?M:z.$(M);
this.el=this.$el[0];
if(N!==false){this.delegateEvents()
}return this
},delegateEvents:function(Q){if(!(Q||(Q=L.result(this,"events")))){return this
}this.undelegateEvents();
for(var P in Q){var R=Q[P];
if(!L.isFunction(R)){R=this[Q[P]]
}if(!R){continue
}var O=P.match(v);
var N=O[1],M=O[2];
R=L.bind(R,this);
N+=".delegateEvents"+this.cid;
if(M===""){this.$el.on(N,R)
}else{this.$el.on(N,M,R)
}}return this
},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);
return this
},_configure:function(M){if(this.options){M=L.extend({},L.result(this,"options"),M)
}L.extend(this,L.pick(M,e));
this.options=M
},_ensureElement:function(){if(!this.el){var M=L.extend({},L.result(this,"attributes"));
if(this.id){M.id=L.result(this,"id")
}if(this.className){M["class"]=L.result(this,"className")
}var N=z.$("<"+L.result(this,"tagName")+">").attr(M);
this.setElement(N,false)
}else{this.setElement(L.result(this,"el"),false)
}}});
z.sync=function(S,N,M){var P=j[S];
L.defaults(M||(M={}),{emulateHTTP:z.emulateHTTP,emulateJSON:z.emulateJSON});
var R={type:P,dataType:"json"};
if(!M.url){R.url=L.result(N,"url")||r()
}if(M.data==null&&N&&(S==="create"||S==="update"||S==="patch")){R.contentType="application/json";
R.data=JSON.stringify(M.attrs||N.toJSON(M))
}if(M.emulateJSON){R.contentType="application/x-www-form-urlencoded";
R.data=R.data?{model:R.data}:{}
}if(M.emulateHTTP&&(P==="PUT"||P==="DELETE"||P==="PATCH")){R.type="POST";
if(M.emulateJSON){R.data._method=P
}var O=M.beforeSend;
M.beforeSend=function(T){T.setRequestHeader("X-HTTP-Method-Override",P);
if(O){return O.apply(this,arguments)
}}
}if(R.type!=="GET"&&!M.emulateJSON){R.processData=false
}if(R.type==="PATCH"&&window.ActiveXObject&&!(window.external&&window.external.msActiveXFilteringEnabled)){R.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")
}
}var Q=M.xhr=z.ajax(L.extend(R,M));
N.trigger("request",N,Q,M);
return Q
};
var j={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};
z.ajax=function(){return z.$.ajax.apply(z.$,arguments)
};
var p=z.Router=function(M){M||(M={});
if(M.routes){this.routes=M.routes
}this._bindRoutes();
this.initialize.apply(this,arguments)
};
var q=/\((.*?)\)/g;
var s=/(\(\?)?:\w+/g;
var d=/\*\w+/g;
var h=/[\-{}\[\]+?.,\\\^$|#\s]/g;
L.extend(p.prototype,J,{initialize:function(){},route:function(N,O,P){if(!L.isRegExp(N)){N=this._routeToRegExp(N)
}if(L.isFunction(O)){P=O;
O=""
}if(!P){P=this[O]
}var M=this;
z.history.route(N,function(R){var Q=M._extractParameters(N,R);
P&&P.apply(M,Q);
M.trigger.apply(M,["route:"+O].concat(Q));
M.trigger("route",O,Q);
z.history.trigger("route",M,O,Q)
});
return this
},navigate:function(N,M){z.history.navigate(N,M);
return this
},_bindRoutes:function(){if(!this.routes){return
}this.routes=L.result(this,"routes");
var N,M=L.keys(this.routes);
while((N=M.pop())!=null){this.route(N,this.routes[N])
}},_routeToRegExp:function(M){M=M.replace(h,"\\$&").replace(q,"(?:$1)?").replace(s,function(O,N){return N?O:"([^/]+)"
}).replace(d,"(.*?)");
return new RegExp("^"+M+"$")
},_extractParameters:function(M,N){var O=M.exec(N).slice(1);
return L.map(O,function(P){return P?decodeURIComponent(P):null
})
}});
var i=z.History=function(){this.handlers=[];
L.bindAll(this,"checkUrl");
if(typeof window!=="undefined"){this.location=window.location;
this.history=window.history
}};
var A=/^[#\/]|\s+$/g;
var f=/^\/+|\/+$/g;
var I=/msie [\w.]+/;
var m=/\/$/;
i.started=false;
L.extend(i.prototype,J,{interval:50,getHash:function(N){var M=(N||this).location.href.match(/#(.*)$/);
return M?M[1]:""
},getFragment:function(O,N){if(O==null){if(this._hasPushState||!this._wantsHashChange||N){O=this.location.pathname;
var M=this.root.replace(m,"");
if(!O.indexOf(M)){O=O.substr(M.length)
}}else{O=this.getHash()
}}return O.replace(A,"")
},start:function(O){if(i.started){throw new Error("Backbone.history has already been started")
}i.started=true;
this.options=L.extend({},{root:"/"},this.options,O);
this.root=this.options.root;
this._wantsHashChange=this.options.hashChange!==false;
this._wantsPushState=!!this.options.pushState;
this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);
var N=this.getFragment();
var M=document.documentMode;
var Q=(I.exec(navigator.userAgent.toLowerCase())&&(!M||M<=7));
this.root=("/"+this.root+"/").replace(f,"/");
if(Q&&this._wantsHashChange){this.iframe=z.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;
this.navigate(N)
}if(this._hasPushState){z.$(window).on("popstate",this.checkUrl)
}else{if(this._wantsHashChange&&("onhashchange" in window)&&!Q){z.$(window).on("hashchange",this.checkUrl)
}else{if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)
}}}this.fragment=N;
var R=this.location;
var P=R.pathname.replace(/[^\/]$/,"$&/")===this.root;
if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!P){this.fragment=this.getFragment(null,true);
this.location.replace(this.root+this.location.search+"#"+this.fragment);
return true
}else{if(this._wantsPushState&&this._hasPushState&&P&&R.hash){this.fragment=this.getHash().replace(A,"");
this.history.replaceState({},document.title,this.root+this.fragment+R.search)
}}if(!this.options.silent){return this.loadUrl()
}},stop:function(){z.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);
clearInterval(this._checkUrlInterval);
i.started=false
},route:function(M,N){this.handlers.unshift({route:M,callback:N})
},checkUrl:function(N){var M=this.getFragment();
if(M===this.fragment&&this.iframe){M=this.getFragment(this.getHash(this.iframe))
}if(M===this.fragment){return false
}if(this.iframe){this.navigate(M)
}this.loadUrl()||this.loadUrl(this.getHash())
},loadUrl:function(O){var N=this.fragment=this.getFragment(O);
var M=L.any(this.handlers,function(P){if(P.route.test(N)){P.callback(N);
return true
}});
return M
},navigate:function(O,N){if(!i.started){return false
}if(!N||N===true){N={trigger:N}
}O=this.getFragment(O||"");
if(this.fragment===O){return
}this.fragment=O;
var M=this.root+O;
if(this._hasPushState){this.history[N.replace?"replaceState":"pushState"]({},document.title,M)
}else{if(this._wantsHashChange){this._updateHash(this.location,O,N.replace);
if(this.iframe&&(O!==this.getFragment(this.getHash(this.iframe)))){if(!N.replace){this.iframe.document.open().close()
}this._updateHash(this.iframe.location,O,N.replace)
}}else{return this.location.assign(M)
}}if(N.trigger){this.loadUrl(O)
}},_updateHash:function(M,O,P){if(P){var N=M.href.replace(/(javascript:|#).*$/,"");
M.replace(N+"#"+O)
}else{M.hash="#"+O
}}});
z.history=new i;
var l=function(M,O){var N=this;
var Q;
if(M&&L.has(M,"constructor")){Q=M.constructor
}else{Q=function(){return N.apply(this,arguments)
}
}L.extend(Q,N,O);
var P=function(){this.constructor=Q
};
P.prototype=N.prototype;
Q.prototype=new P;
if(M){L.extend(Q.prototype,M)
}Q.__super__=N.prototype;
return Q
};
E.extend=c.extend=p.extend=G.extend=i.extend=l;
var r=function(){throw new Error('A "url" property or function must be specified')
};
var H=function(O,N){var M=N.error;
N.error=function(P){if(M){M(O,P,N)
}O.trigger("error",O,P,N)
}
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
(function(){var f,e,d,b,a={}.hasOwnProperty,c=function(j,h){for(var g in h){if(a.call(h,g)){j[g]=h[g]
}}function i(){this.constructor=j
}i.prototype=h.prototype;
j.prototype=new i();
j.__super__=h.prototype;
return j
};
b=typeof require!=="undefined"?require("lodash"):window._;
f=typeof require!=="undefined"?require("backbone"):window.Backbone;
(typeof module!=="undefined"?module.exports:window).BcoCore=d=(function(){b.extend(g.prototype,f.Events);
g.prototype.size=[416,416];
function g(){this._elements={}
}g.prototype._collides=function(i,o,n,h,l,m,j,k){return !(n<=l||i>=j||h<=m||o>=k)
};
g.prototype._collides_ob=function(i,h){return this._collides(i.pos[0],i.pos[1],i.pos[0]+i.size[0],i.pos[1]+i.size[1],h.pos[0],h.pos[1],h.pos[0]+h.size[0],h.pos[1]+h.size[1])
};
g.prototype.__requestAnimFrame=function(i){var h;
h=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;
if(h){return h(i)
}return window.setTimeout(i,1000/30)
};
g.prototype.add=function(h){return this._elements[h.id]=h
};
g.prototype.get=function(o){var j,n,l,m,k,i,h;
if(typeof o==="number"){return this._elements[o]
}j=[];
h=this._elements;
for(n in h){k=h[n];
m=true;
for(l in o){i=o[l];
if(m&&k[l]!==i){m=false
}}if(m){j.push(k)
}}return j
};
g.prototype.update=function(k){var h,j,i;
i=[];
for(h in k){j=k[h];
if(h!=="id"){i.push(this._elements[k.id][h]=j)
}else{i.push(void 0)
}}return i
};
g.prototype.destroy=function(h){return delete this._elements[h.id]
};
g.prototype.start=function(){this._lastTime=Date.now();
return this._process()
};
g.prototype.stop=function(){return this._stop=true
};
g.prototype._process=function(){var i,h,j=this;
h=Date.now();
i=(h-this._lastTime)/1000;
if(i>0){this._updateView(i)
}this._lastTime=h;
return this.__requestAnimFrame(function(){if(!j._stop){return j._process()
}})
};
g.prototype._updateView=function(i){var l,h,o,p,j,n,m,k;
m=this._elements;
for(h in m){j=m[h];
if(j.speed>0){p=j.angle*Math.PI/180;
l=j.speed*i;
j.pos[0]+=l*Math.cos(p);
j.pos[1]+=l*Math.sin(p);
j.pos[0]=Math.round(j.pos[0]*100)/100;
j.pos[1]=Math.round(j.pos[1]*100)/100;
if(j.destroy===0){k=this._elements;
for(o in k){n=k[o];
if(h!==o&&n.destroy===0&&this._collides_ob(j,n)){if(j.angle===0){j.pos[0]=n.pos[0]-j.size[0]
}else{if(j.angle===90){j.pos[1]=n.pos[1]-j.size[1]
}else{if(j.angle===180){j.pos[0]=n.pos[0]+n.size[0]
}else{if(j.angle===270){j.pos[1]=n.pos[1]+n.size[1]
}}}}}}if(j.angle===0&&j.pos[0]+j.size[0]>this.size[0]){j.pos[0]=this.size[0]-j.size[0]
}else{if(j.angle===90&&j.pos[1]+j.size[1]>this.size[1]){j.pos[1]=this.size[1]-j.size[1]
}else{if(j.angle===180&&j.pos[0]<0){j.pos[0]=0
}else{if(j.angle===270&&j.pos[1]<0){j.pos[1]=0
}}}}}}}return this
};
return g
})();
(typeof module!=="undefined"?module.exports:window).Bco=e=(function(g){c(h,g);
b.extend(h.prototype,f.View.prototype);
function h(){h.__super__.constructor.apply(this,arguments);
f.View.prototype.constructor.apply(this,arguments);
this
}h.prototype.add=function(i){h.__super__.add.apply(this,arguments);
if(["tank","bullet","brick"].indexOf(i.object)!==-1){return this._elements[i.id]["sprite"]=new App["Sprite"+i.object[0].toUpperCase()+i.object.substr(1)]()
}};
h.prototype._updateView=function(i){var l,k,j;
h.__super__._updateView.apply(this,arguments);
j=this._elements;
for(l in j){k=j[l];
if(k.sprite){k.sprite.update(i)
}}return this.draw()
};
h.prototype.draw=function(){var k,j,i;
this.c.fillStyle="rgb(0,0,0)";
this.c.fillRect(0,0,this.canvas.width(),this.canvas.height());
i=this._elements;
for(k in i){j=i[k];
if(j.sprite){this.c.save();
this.c.translate(j.pos[0]+j.size[0]/2,j.pos[1]+j.size[1]/2);
this.c.rotate(j.angle*Math.PI/180);
this.c.translate(-j.size[0]/2,-j.size[1]/2);
j.sprite.render(this.c);
this.c.restore()
}}return this
};
h.prototype.render=function(){this.canvas=$("<canvas width=416 height=416>");
this.$el.append(this.canvas);
this.c=this.canvas[0].getContext("2d");
return this
};
return h
})(d)
}).call(this);
(function(){var f,e,c,a,b={}.hasOwnProperty,d=function(j,h){for(var g in h){if(b.call(h,g)){j[g]=h[g]
}}function i(){this.constructor=j
}i.prototype=h.prototype;
j.prototype=new i();
j.__super__=h.prototype;
return j
};
App.Sprite=c=(function(){g.prototype.size=[0,0];
g.prototype.pos=[0,0];
g.prototype._frames=[0];
g.prototype._frames_speed=0;
g.prototype._frames_index=0;
function g(){var h=this;
if(this._name){this.url="d/img/"+this._name+".png"
}this.img=new Image();
this.img.onload=function(){return h._loaded=true
};
this.img.src=this.url
}g.prototype.update=function(h){if(this._frames_speed>0){this._frames_index+=this._frames_speed*h;
if(this._frames_index>=this._frames.length){return this._frames_index=this._frames_index%this._frames.length
}}};
g.prototype.render=function(i){var h;
if(!this._loaded){return
}h=this._frames[Math.floor(this._frames_index)];
return i.drawImage(this.img,this.pos[0]+this.size[0]*h,this.pos[1],this.size[0],this.size[1],0,0,this.size[0],this.size[1])
};
return g
})();
App.SpriteTank=a=(function(h){d(g,h);
function g(){return g.__super__.constructor.apply(this,arguments)
}g.prototype.size=[32,32];
g.prototype._name="tank";
return g
})(c);
App.SpriteBullet=e=(function(g){d(h,g);
function h(){return h.__super__.constructor.apply(this,arguments)
}h.prototype.size=[8,8];
h.prototype._name="bullet";
return h
})(c);
App.SpriteBrick=f=(function(g){d(h,g);
function h(){return h.__super__.constructor.apply(this,arguments)
}h.prototype.size=[16,16];
h.prototype._name="brick";
return h
})(c)
}).call(this);
(function(){var a,c,b={}.hasOwnProperty,e=function(i,g){for(var f in g){if(b.call(g,f)){i[f]=g[f]
}}function h(){this.constructor=i
}h.prototype=g.prototype;
i.prototype=new h();
i.__super__=g.prototype;
return i
},d=[].indexOf||function(h){for(var g=0,f=this.length;
g<f;
g++){if(g in this&&this[g]===h){return g
}}return -1
};
c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(f){return window.setTimeout(f,1000/30)
};
App.Router=a=(function(g){e(f,g);
f.prototype.events={keydown:function(h){return this.control(h.keyCode,true)
},keyup:function(h){return this.control(h.keyCode,false)
}};
function f(){var h=this;
this._keys={up:{active:false,code:[38]},down:{active:false,code:[40]},left:{active:false,code:[37]},right:{active:false,code:[39]},fire:{active:false,code:[32]}};
f.__super__.constructor.apply(this,arguments);
this.game=new window.Bco();
this.game.render().$el.appendTo(this.$el);
App.socket.receive.on("add",function(i){return h.game.add(i)
});
App.socket.receive.on("update",function(i){return h.game.update(i)
});
App.socket.receive.on("destroy",function(i){return h.game.destroy(i)
});
this.game.start()
}f.prototype.control=function(j,l){var h,m,k,i;
k=this._keys;
i=[];
for(h in k){m=k[h];
if(d.call(m.code,j)>=0&&m.active!==l){m.active=l;
i.push(App.socket.send.trigger("control",{move:h,active:l}))
}else{i.push(void 0)
}}return i
};
return f
})(Backbone.View)
}).call(this);