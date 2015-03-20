(function(Q){var l;
var g=[],q=[];
var J=0;
var h={};
var a=+new Date+"";
var b=75;
var k=40;
var w=/\b__p \+= '';/g,U=/\b(__p \+=) '' \+/g,e=/(__e\(.*?\)|\b__t\)) \+\n'';/g;
var F=/&(?:amp|lt|gt|quot|#39);/g;
var z=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
var D=/\w*$/;
var m=/<%=([\s\S]+?)%>/g;
var i=(i=/\bthis\b/)&&i.test(ab)&&i;
var G=(" \t\x0B\f\xA0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000");
var aa=RegExp("^["+G+"]*0+(?=.$)");
var S=/($^)/;
var A=/[&<>"']/g;
var X=/['\n\r\t\u2028\u2029\\]/g;
var x=["Array","Boolean","Date","Error","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setImmediate","setTimeout"];
var C=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"];
var ad=0;
var W="[object Arguments]",t="[object Array]",B="[object Boolean]",L="[object Date]",K="[object Error]",af="[object Function]",H="[object Number]",c="[object Object]",M="[object RegExp]",I="[object String]";
var u={};
u[af]=false;
u[W]=u[t]=u[B]=u[L]=u[H]=u[c]=u[M]=u[I]=true;
var E={"boolean":false,"function":true,object:true,number:false,string:false,"undefined":false};
var O={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"};
var Y=E[typeof exports]&&exports;
var y=E[typeof module]&&module&&module.exports==Y&&module;
var v=E[typeof global]&&global;
if(v&&(v.global===v||v.window===v)){Q=v
}function R(ak,aj,ah){var ag=(ah||0)-1,ai=ak.length;
while(++ag<ai){if(ak[ag]===aj){return ag
}}return -1
}function P(ag,aj){var ai=typeof aj;
ag=ag.cache;
if(ai=="boolean"||aj==null){return ag[aj]
}if(ai!="number"&&ai!="string"){ai="object"
}var ah=ai=="number"?aj:a+aj;
ag=ag[ai]||(ag[ai]={});
return ai=="object"?(ag[ah]&&R(ag[ah],aj)>-1?0:-1):(ag[ah]?0:-1)
}function N(ak){var ah=this.cache,aj=typeof ak;
if(aj=="boolean"||ak==null){ah[ak]=true
}else{if(aj!="number"&&aj!="string"){aj="object"
}var ai=aj=="number"?ak:a+ak,ag=ah[aj]||(ah[aj]={});
if(aj=="object"){if((ag[ai]||(ag[ai]=[])).push(ak)==this.array.length){ah[aj]=false
}}else{ag[ai]=true
}}}function o(ag){return ag.charCodeAt(0)
}function Z(aj,ah){var ag=aj.index,ak=ah.index;
aj=aj.criteria;
ah=ah.criteria;
if(aj!==ah){if(aj>ah||typeof aj=="undefined"){return 1
}if(aj<ah||typeof ah=="undefined"){return -1
}}return ag<ak?-1:1
}function ac(ak){var ai=-1,aj=ak.length;
var ah=p();
ah["false"]=ah["null"]=ah["true"]=ah["undefined"]=false;
var ag=p();
ag.array=ak;
ag.cache=ah;
ag.push=N;
while(++ai<aj){ag.push(ak[ai])
}return ah.object===false?(n(ag),null):ag
}function f(ag){return"\\"+O[ag]
}function d(){return g.pop()||[]
}function p(){return q.pop()||{args:"",array:null,bottom:"",cache:null,criteria:null,"false":false,firstArg:"",index:0,init:"",leading:false,loop:"",maxWait:0,"null":false,number:null,object:null,push:null,shadowedProps:null,string:null,support:null,top:"",trailing:false,"true":false,"undefined":false,useHas:false,useKeys:false,value:null}
}function j(ag){return typeof ag.toString!="function"&&typeof(ag+"")=="string"
}function V(){}function T(ag){ag.length=0;
if(g.length<k){g.push(ag)
}}function n(ah){var ag=ah.cache;
if(ag){n(ag)
}ah.array=ah.cache=ah.criteria=ah.object=ah.number=ah.string=ah.value=null;
if(q.length<k){q.push(ah)
}}function s(al,ak,ah){ak||(ak=0);
if(typeof ah=="undefined"){ah=al?al.length:0
}var ai=-1,aj=ah-ak||0,ag=Array(aj<0?0:aj);
while(++ai<aj){ag[ai]=al[ak+ai]
}return ag
}function ab(ai){ai=ai?ae.defaults(Q.Object(),ai,ae.pick(Q,x)):Q;
var aG=ai.Array,b9=ai.Boolean,ca=ai.Date,cK=ai.Error,aZ=ai.Function,b0=ai.Math,bf=ai.Number,cN=ai.Object,cv=ai.RegExp,ch=ai.String,aH=ai.TypeError;
var b4=[];
var a6=cK.prototype,cx=cN.prototype,aB=ch.prototype;
var cG=ai._;
var bX=cv("^"+ch(cx.valueOf).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$");
var aW=b0.ceil,bR=ai.clearTimeout,bF=b4.concat,cA=b0.floor,bA=aZ.prototype.toString,ar=bX.test(ar=cN.getPrototypeOf)&&ar,a0=cx.hasOwnProperty,aw=b4.push,ao=cx.propertyIsEnumerable,bV=ai.setImmediate,aX=ai.setTimeout,az=cx.toString;
var b2=bX.test(b2=az.bind)&&b2,av=bX.test(av=cN.create)&&av,bg=bX.test(bg=aG.isArray)&&bg,aK=ai.isFinite,bC=ai.isNaN,cc=bX.test(cc=cN.keys)&&cc,cd=b0.max,an=b0.min,cV=ai.parseInt,bJ=b0.random,aJ=b4.slice;
var a1=bX.test(ai.attachEvent),aq=b2&&!/\n|true/.test(b2+a1);
var cy={};
cy[t]=aG;
cy[B]=b9;
cy[L]=ca;
cy[af]=aZ;
cy[c]=cN;
cy[H]=bf;
cy[M]=cv;
cy[I]=ch;
var bz={};
bz[t]=bz[L]=bz[H]={constructor:true,toLocaleString:true,toString:true,valueOf:true};
bz[B]=bz[I]={constructor:true,toString:true,valueOf:true};
bz[K]=bz[af]=bz[M]={constructor:true,toString:true};
bz[c]={constructor:true};
(function(){var c0=C.length;
while(c0--){var c1=C[c0];
for(var at in bz){if(a0.call(bz,at)&&!a0.call(bz[at],c1)){bz[at][c1]=false
}}}}());
function aU(at){return(at&&typeof at=="object"&&!bB(at)&&a0.call(at,"__wrapped__"))?at:new cB(at)
}function cB(at){this.__wrapped__=at
}cB.prototype=aU.prototype;
var aF=aU.support={};
(function(){var c1=function(){this.x=1
},at={"0":1,length:1},c0=[];
c1.prototype={valueOf:1,y:1};
for(var c3 in new c1){c0.push(c3)
}for(c3 in arguments){}aF.argsObject=arguments.constructor==cN&&!(arguments instanceof aG);
aF.argsClass=a5(arguments);
aF.enumErrorProps=ao.call(a6,"message")||ao.call(a6,"name");
aF.enumPrototypes=ao.call(c1,"prototype");
aF.fastBind=b2&&!aq;
aF.ownLast=c0[0]!="x";
aF.nonEnumArgs=c3!=0;
aF.nonEnumShadows=!/valueOf/.test(c0);
aF.spliceObjects=(b4.splice.call(at,0,1),!at[0]);
aF.unindexedChars=("x"[0]+cN("x")[0])!="xx";
try{aF.nodeClass=!(az.call(document)==c&&!({toString:0}+""))
}catch(c2){aF.nodeClass=true
}}(1));
aU.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:m,variable:"",imports:{_:aU}};
var bL=bD("var index, iterable = <%= firstArg %>, result = <%= init %>;\nif (!iterable) return result;\n<%= top %>;<% if (array) { %>\nvar length = iterable.length; index = -1;\nif (<%= array %>) {  <% if (support.unindexedChars) { %>\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  <% } %>\n  while (++index < length) {\n    <%= loop %>;\n  }\n}\nelse {  <% } else if (support.nonEnumArgs) { %>\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      <%= loop %>;\n    }\n  } else {  <% } %>  <% if (support.enumPrototypes) { %>\n  var skipProto = typeof iterable == 'function';\n  <% } %>  <% if (support.enumErrorProps) { %>\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  <% } %>  <%    var conditions = [];    if (support.enumPrototypes) { conditions.push('!(skipProto && index == \"prototype\")'); }    if (support.enumErrorProps)  { conditions.push('!(skipErrorProps && (index == \"message\" || index == \"name\"))'); }  %>  <% if (useHas && useKeys) { %>\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n<%    if (conditions.length) { %>    if (<%= conditions.join(' && ') %>) {\n  <% } %>    <%= loop %>;    <% if (conditions.length) { %>\n    }<% } %>\n  }  <% } else { %>\n  for (index in iterable) {\n<%    if (useHas) { conditions.push(\"hasOwnProperty.call(iterable, index)\"); }    if (conditions.length) { %>    if (<%= conditions.join(' && ') %>) {\n  <% } %>    <%= loop %>;    <% if (conditions.length) { %>\n    }<% } %>\n  }    <% if (support.nonEnumShadows) { %>\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      <% for (k = 0; k < 7; k++) { %>\n    index = '<%= shadowedProps[k] %>';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))<%        if (!useHas) { %> || (!nonEnum[index] && iterable[index] !== objectProto[index])<% }      %>) {\n      <%= loop %>;\n    }      <% } %>\n  }    <% } %>  <% } %>  <% if (array || support.nonEnumArgs) { %>\n}<% } %>\n<%= bottom %>;\nreturn result");
var b5={args:"object, source, guard",top:"var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",loop:"if (typeof result[index] == 'undefined') result[index] = iterable[index]",bottom:"  }\n}"};
var bo={args:"collection, callback, thisArg",top:"callback = callback && typeof thisArg == 'undefined' ? callback : lodash.createCallback(callback, thisArg)",array:"typeof length == 'number'",loop:"if (callback(iterable[index], index, collection) === false) return result"};
var ag={top:"if (!objectTypes[typeof iterable]) return result;\n"+bo.top,array:false};
function aP(c1,c4,c3,c6){var c5=ax(c1),at=!c3,c7=c4;
if(at){var c0=c6;
c3=c4
}else{if(!c5){if(!c6){throw new aH
}c4=c1
}}function c2(){var da=arguments,c9=at?this:c4;
if(!c5){c1=c4[c7]
}if(c3.length){da=da.length?(da=aJ.call(da),c0?da.concat(c3):c3.concat(da)):c3
}if(this instanceof c2){c9=be(c1.prototype);
var c8=c1.apply(c9,da);
return cY(c8)?c8:c9
}return c1.apply(c9,da)
}return c2
}function aS(){var c4=p();
c4.shadowedProps=C;
c4.support=aF;
c4.array=c4.bottom=c4.loop=c4.top="";
c4.init="iterable";
c4.useHas=true;
c4.useKeys=!!b7;
for(var c2,c1=0;
c2=arguments[c1];
c1++){for(var c3 in c2){c4[c3]=c2[c3]
}}var c0=c4.args;
c4.firstArg=/^[^,]+/.exec(c0)[0];
var at=aZ("errorClass, errorProto, hasOwnProperty, isArguments, isArray, isString, keys, lodash, objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString","return function("+c0+") {\n"+bL(c4)+"\n}");
n(c4);
return at(K,a6,a0,a5,bB,co,b7,aU,cx,E,bz,I,aB,az)
}function be(at){return cY(at)?av(at):{}
}if(!av){var be=function(c0){if(cY(c0)){V.prototype=c0;
var at=new V;
V.prototype=null
}return at||{}
}
}function bm(at){return aT[at]
}function b1(c2,c1,c0){var at=(at=aU.indexOf)===cR?R:at;
return at
}function cX(at){return function(c3,c1,c2,c0){if(typeof c1!="boolean"&&c1!=null){c0=c2;
c2=!(c0&&c0[c1]===c3)?c1:l;
c1=false
}if(c2!=null){c2=aU.createCallback(c2,c0)
}return at(c3,c1,c2,c0)
}
}function aM(c1){var c0,at;
if(!(c1&&az.call(c1)==c)||(c0=c1.constructor,ax(c0)&&!(c0 instanceof c0))||(!aF.argsClass&&a5(c1))||(!aF.nodeClass&&j(c1))){return false
}if(aF.ownLast){aj(c1,function(c4,c3,c2){at=a0.call(c2,c3);
return false
});
return at!==false
}aj(c1,function(c3,c2){at=c2
});
return at===l||a0.call(c1,at)
}function bn(at){return bS[at]
}function a5(at){return az.call(at)==W
}if(!aF.argsClass){a5=function(at){return at?a0.call(at,"callee"):false
}
}var bB=bg||function(at){return at?(typeof at=="object"&&az.call(at)==t):false
};
var bd=aS({args:"object",init:"[]",top:"if (!(objectTypes[typeof object])) return result",loop:"result.push(index)"});
var b7=!cc?bd:function(at){if(!cY(at)){return[]
}if((aF.enumPrototypes&&typeof at=="function")||(aF.nonEnumArgs&&at.length&&a5(at))){return bd(at)
}return cc(at)
};
var cJ=aS(bo);
var aT={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};
var bS=b3(aT);
var br=aS(b5,{top:b5.top.replace(";",";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = lodash.createCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),loop:"result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"});
function cr(c8,c9,da,c6,c3,c1){var db=c8;
if(typeof c9!="boolean"&&c9!=null){c6=da;
da=c9;
c9=false
}if(typeof da=="function"){da=(typeof c6=="undefined")?da:aU.createCallback(da,c6,1);
db=da(db);
if(typeof db!="undefined"){return db
}db=c8
}var c2=cY(db);
if(c2){var c5=az.call(db);
if(!u[c5]||(!aF.nodeClass&&j(db))){return db
}var c4=bB(db)
}if(!c2||!c9){return c2?(c4?s(db):br({},db)):db
}var c7=cy[c5];
switch(c5){case B:case L:return new c7(+db);
case H:case I:return new c7(db);
case M:return c7(db.source,D.exec(db))
}var c0=!c3;
c3||(c3=d());
c1||(c1=d());
var at=c3.length;
while(at--){if(c3[at]==c8){return c1[at]
}}db=c4?c7(db.length):{};
if(c4){if(a0.call(c8,"index")){db.index=c8.index
}if(a0.call(c8,"input")){db.input=c8.input
}}c3.push(c8);
c1.push(db);
(c4?cJ:bN)(c8,function(dc,dd){db[dd]=cr(dc,c9,da,l,c3,c1)
});
if(c0){T(c3);
T(c1)
}return db
}function cU(c0,c1,at){return cr(c0,true,c1,at)
}var bs=aS(b5);
function ck(c1,c2,c0){var at;
c2=aU.createCallback(c2,c0);
bN(c1,function(c5,c4,c3){if(c2(c5,c4,c3)){at=c4;
return false
}});
return at
}var aj=aS(bo,ag,{useHas:false});
var bN=aS(bo,ag);
function cw(c0){var at=[];
aj(c0,function(c2,c1){if(ax(c2)){at.push(c1)
}});
return at.sort()
}function cI(at,c0){return at?a0.call(at,c0):false
}function b3(c1){var c0=-1,c3=b7(c1),c4=c3.length,at={};
while(++c0<c4){var c2=c3[c0];
at[c1[c2]]=c2
}return at
}function bG(at){return at===true||at===false||az.call(at)==B
}function a9(at){return at?(typeof at=="object"&&az.call(at)==L):false
}function bY(at){return at?at.nodeType===1:false
}function ci(c2){var at=true;
if(!c2){return at
}var c0=az.call(c2),c1=c2.length;
if((c0==t||c0==I||(aF.argsClass?c0==W:a5(c2)))||(c0==c&&typeof c1=="number"&&ax(c2.splice))){return !c1
}bN(c2,function(){return(at=false)
});
return at
}function bZ(dg,df,c6,de,di,dh){var c5=c6===h;
if(typeof c6=="function"&&!c5){c6=aU.createCallback(c6,de,2);
var db=c6(dg,df);
if(typeof db!="undefined"){return !!db
}}if(dg===df){return dg!==0||(1/dg==1/df)
}var c3=typeof dg,c1=typeof df;
if(dg===dg&&(!dg||(c3!="function"&&c3!="object"))&&(!df||(c1!="function"&&c1!="object"))){return false
}if(dg==null||df==null){return dg===df
}var at=az.call(dg),c9=az.call(df);
if(at==W){at=c
}if(c9==W){c9=c
}if(at!=c9){return false
}switch(at){case B:case L:return +dg==+df;
case H:return(dg!=+dg)?df!=+df:(dg==0?(1/dg==1/df):dg==+df);
case M:case I:return dg==ch(df)
}var c7=at==t;
if(!c7){if(a0.call(dg,"__wrapped__ ")||a0.call(df,"__wrapped__")){return bZ(dg.__wrapped__||dg,df.__wrapped__||df,c6,de,di,dh)
}if(at!=c||(!aF.nodeClass&&(j(dg)||j(df)))){return false
}var c2=!aF.argsObject&&a5(dg)?cN:dg.constructor,c0=!aF.argsObject&&a5(df)?cN:df.constructor;
if(c2!=c0&&!(ax(c2)&&c2 instanceof c2&&ax(c0)&&c0 instanceof c0)){return false
}}var da=!di;
di||(di=d());
dh||(dh=d());
var c4=di.length;
while(c4--){if(di[c4]==dg){return dh[c4]==df
}}var dc=0;
db=true;
di.push(dg);
dh.push(df);
if(c7){c4=dg.length;
dc=df.length;
db=dc==dg.length;
if(!db&&!c5){return db
}while(dc--){var c8=c4,dd=df[dc];
if(c5){while(c8--){if((db=bZ(dg[c8],dd,c6,de,di,dh))){break
}}}else{if(!(db=bZ(dg[dc],dd,c6,de,di,dh))){break
}}}return db
}aj(df,function(dl,dk,dj){if(a0.call(dj,dk)){dc++;
return(db=a0.call(dg,dk)&&bZ(dg[dk],dl,c6,de,di,dh))
}});
if(db&&!c5){aj(dg,function(dl,dk,dj){if(a0.call(dj,dk)){return(db=--dc>-1)
}})
}if(da){T(di);
T(dh)
}return db
}function aL(at){return aK(at)&&!bC(parseFloat(at))
}function ax(at){return typeof at=="function"
}if(ax(/x/)){ax=function(at){return typeof at=="function"&&az.call(at)==af
}
}function cY(at){return !!(at&&E[typeof at])
}function bP(at){return bq(at)&&at!=+at
}function cP(at){return at===null
}function bq(at){return typeof at=="number"||az.call(at)==H
}var aN=!ar?aM:function(c1){if(!(c1&&az.call(c1)==c)||(!aF.argsClass&&a5(c1))){return false
}var at=c1.valueOf,c0=typeof at=="function"&&(c0=ar(at))&&ar(c0);
return c0?(c1==c0||ar(c1)==c0):aM(c1)
};
function cD(at){return !!(at&&E[typeof at])&&az.call(at)==M
}function co(at){return typeof at=="string"||az.call(at)==I
}function bU(at){return typeof at=="undefined"
}function bI(c3,at,c4){var c7=arguments,c6=0,c1=2;
if(!cY(c3)){return c3
}if(c4===h){var c8=c7[3],c5=c7[4],c2=c7[5]
}else{var c0=true;
c5=d();
c2=d();
if(typeof c4!="number"){c1=c7.length
}if(c1>3&&typeof c7[c1-2]=="function"){c8=aU.createCallback(c7[--c1-1],c7[c1--],2)
}else{if(c1>2&&typeof c7[c1-1]=="function"){c8=c7[--c1]
}}}while(++c6<c1){(bB(c7[c6])?by:bN)(c7[c6],function(df,db){var de,dc,da=df,dd=c3[db];
if(df&&((dc=bB(df))||aN(df))){var dg=c5.length;
while(dg--){if((de=c5[dg]==df)){dd=c2[dg];
break
}}if(!de){var c9;
if(c8){da=c8(dd,df);
if((c9=typeof da!="undefined")){dd=da
}}if(!c9){dd=dc?(bB(dd)?dd:[]):(aN(dd)?dd:{})
}c5.push(df);
c2.push(dd);
if(!c9){dd=bI(dd,df,h,c8,c5,c2)
}}}else{if(c8){da=c8(dd,df);
if(typeof da=="undefined"){da=df
}}if(typeof da!="undefined"){dd=da
}}c3[db]=dd
})
}if(c0){T(c5);
T(c2)
}return c3
}function cl(c1,c5,c0){var c3=b1(),c4=typeof c5=="function",at={};
if(c4){c5=aU.createCallback(c5,c0)
}else{var c2=bF.apply(b4,aJ.call(arguments,1))
}aj(c1,function(c8,c7,c6){if(c4?!c5(c8,c7,c6):c3(c2,c7)<0){at[c7]=c8
}});
return at
}function bx(c1){var c0=-1,c3=b7(c1),c4=c3.length,at=aG(c4);
while(++c0<c4){var c2=c3[c0];
at[c0]=[c2,c1[c2]]
}return at
}function bK(c2,c6,c0){var at={};
if(typeof c6!="function"){var c1=-1,c4=bF.apply(b4,aJ.call(arguments,1)),c5=cY(c2)?c4.length:0;
while(++c1<c5){var c3=c4[c1];
if(c3 in c2){at[c3]=c2[c3]
}}}else{c6=aU.createCallback(c6,c0);
aj(c2,function(c9,c8,c7){if(c6(c9,c8,c7)){at[c8]=c9
}})
}return at
}function cH(c1,c5,c0,at){var c4=bB(c1);
c5=aU.createCallback(c5,at,4);
if(c0==null){if(c4){c0=[]
}else{var c3=c1&&c1.constructor,c2=c3&&c3.prototype;
c0=be(c2)
}}(c4?cJ:bN)(c1,function(c8,c7,c6){return c5(c0,c8,c7,c6)
});
return c0
}function bv(c1){var c0=-1,c2=b7(c1),c3=c2.length,at=aG(c3);
while(++c0<c3){at[c0]=c1[c2[c0]]
}return at
}function cz(c3){var c0=-1,c1=bF.apply(b4,aJ.call(arguments,1)),c2=c1.length,at=aG(c2);
if(aF.unindexedChars&&co(c3)){c3=c3.split("")
}while(++c0<c2){at[c0]=c3[c1[c0]]
}return at
}function a4(c5,c4,c2){var c0=-1,c1=b1(),c3=c5?c5.length:0,at=false;
c2=(c2<0?cd(0,c3+c2):c2)||0;
if(c3&&typeof c3=="number"){at=(co(c5)?c5.indexOf(c4,c2):c1(c5,c4,c2))>-1
}else{cJ(c5,function(c6){if(++c0>=c2){return !(at=c6===c4)
}})
}return at
}function bH(c1,c2,c0){var at={};
c2=aU.createCallback(c2,c0);
by(c1,function(c4,c3,c5){c3=ch(c2(c4,c3,c5));
(a0.call(at,c3)?at[c3]++:at[c3]=1)
});
return at
}function ay(c3,c4,c0){var at=true;
c4=aU.createCallback(c4,c0);
if(bB(c3)){var c1=-1,c2=c3.length;
while(++c1<c2){if(!(at=!!c4(c3[c1],c1,c3))){break
}}}else{cJ(c3,function(c6,c5,c7){return(at=!!c4(c6,c5,c7))
})
}return at
}function bO(c4,c5,c0){var at=[];
c5=aU.createCallback(c5,c0);
if(bB(c4)){var c1=-1,c2=c4.length;
while(++c1<c2){var c3=c4[c1];
if(c5(c3,c1,c4)){at.push(c3)
}}}else{cJ(c4,function(c7,c6,c8){if(c5(c7,c6,c8)){at.push(c7)
}})
}return at
}function bE(c4,c5,c0){c5=aU.createCallback(c5,c0);
if(bB(c4)){var c1=-1,c2=c4.length;
while(++c1<c2){var c3=c4[c1];
if(c5(c3,c1,c4)){return c3
}}}else{var at;
cJ(c4,function(c7,c6,c8){if(c5(c7,c6,c8)){at=c7;
return false
}});
return at
}}function by(c2,c3,at){if(c3&&typeof at=="undefined"&&bB(c2)){var c0=-1,c1=c2.length;
while(++c0<c1){if(c3(c2[c0],c0,c2)===false){break
}}}else{cJ(c2,c3,at)
}return c2
}function bp(c1,c2,c0){var at={};
c2=aU.createCallback(c2,c0);
by(c1,function(c4,c3,c5){c3=ch(c2(c4,c3,c5));
(a0.call(at,c3)?at[c3]:at[c3]=[]).push(c4)
});
return at
}function aI(c5,c0){var c2=aJ.call(arguments,2),c1=-1,c4=typeof c0=="function",c3=c5?c5.length:0,at=aG(typeof c3=="number"?c3:0);
by(c5,function(c6){at[++c1]=(c4?c0:c6[c0]).apply(c6,c2)
});
return at
}function bk(c3,c4,c0){var c1=-1,c2=c3?c3.length:0,at=aG(typeof c2=="number"?c2:0);
c4=aU.createCallback(c4,c0);
if(bB(c3)){while(++c1<c2){at[c1]=c4(c3[c1],c1,c3)
}}else{cJ(c3,function(c6,c5,c7){at[++c1]=c4(c6,c5,c7)
})
}return at
}function bi(c5,c6,c0){var c3=-Infinity,at=c3;
if(!c6&&bB(c5)){var c1=-1,c2=c5.length;
while(++c1<c2){var c4=c5[c1];
if(c4>at){at=c4
}}}else{c6=(!c6&&co(c5))?o:aU.createCallback(c6,c0);
cJ(c5,function(c8,c7,da){var c9=c6(c8,c7,da);
if(c9>c3){c3=c9;
at=c8
}})
}return at
}function cf(c5,c6,c0){var c3=Infinity,at=c3;
if(!c6&&bB(c5)){var c1=-1,c2=c5.length;
while(++c1<c2){var c4=c5[c1];
if(c4<at){at=c4
}}}else{c6=(!c6&&co(c5))?o:aU.createCallback(c6,c0);
cJ(c5,function(c8,c7,da){var c9=c6(c8,c7,da);
if(c9<c3){c3=c9;
at=c8
}})
}return at
}var cT=bk;
function cg(c4,c5,c0,at){var c2=arguments.length<3;
c5=aU.createCallback(c5,at,4);
if(bB(c4)){var c1=-1,c3=c4.length;
if(c2){c0=c4[++c1]
}while(++c1<c3){c0=c5(c0,c4[c1],c1,c4)
}}else{cJ(c4,function(c7,c6,c8){c0=c2?(c2=false,c7):c5(c0,c7,c6,c8)
})
}return c0
}function cE(c5,c6,c0,at){var c4=c5,c3=c5?c5.length:0,c2=arguments.length<3;
if(typeof c3!="number"){var c1=b7(c5);
c3=c1.length
}else{if(aF.unindexedChars&&co(c5)){c4=c5.split("")
}}c6=aU.createCallback(c6,at,4);
by(c5,function(c8,c7,c9){c7=c1?c1[--c3]:--c3;
c0=c2?(c2=false,c4[c7]):c6(c0,c4[c7],c7,c9)
});
return c0
}function aA(c0,c1,at){c1=aU.createCallback(c1,at);
return bO(c0,function(c3,c2,c4){return !c1(c3,c2,c4)
})
}function bw(c2){var c0=-1,c1=c2?c2.length:0,at=aG(typeof c1=="number"?c1:0);
by(c2,function(c4){var c3=cA(bJ()*(++c0+1));
at[c0]=at[c3];
at[c3]=c4
});
return at
}function a8(c0){var at=c0?c0.length:0;
return typeof at=="number"?at:b7(c0).length
}function a7(c3,c4,c0){var at;
c4=aU.createCallback(c4,c0);
if(bB(c3)){var c1=-1,c2=c3.length;
while(++c1<c2){if((at=c4(c3[c1],c1,c3))){break
}}}else{cJ(c3,function(c6,c5,c7){return !(at=c4(c6,c5,c7))
})
}return !!at
}function ba(c4,c5,c0){var c2=-1,c3=c4?c4.length:0,at=aG(typeof c3=="number"?c3:0);
c5=aU.createCallback(c5,c0);
by(c4,function(c8,c7,c9){var c6=at[++c2]=p();
c6.criteria=c5(c8,c7,c9);
c6.index=c2;
c6.value=c8
});
c3=at.length;
at.sort(Z);
while(c3--){var c1=at[c3];
at[c3]=c1.value;
n(c1)
}return at
}function aD(at){if(at&&typeof at.length=="number"){return(aF.unindexedChars&&co(at))?at.split(""):s(at)
}return bv(at)
}var ak=bO;
function aO(c3){var c0=-1,c1=c3?c3.length:0,at=[];
while(++c0<c1){var c2=c3[c0];
if(c2){at.push(c2)
}}return at
}function ah(c3){var c2=-1,c4=b1(),c1=c3?c3.length:0,at=bF.apply(b4,aJ.call(arguments,1)),c7=[];
var c5=c1>=b&&c4===R;
if(c5){var c0=ac(at);
if(c0){c4=P;
at=c0
}else{c5=false
}}while(++c2<c1){var c6=c3[c2];
if(c4(at,c6)<0){c7.push(c6)
}}if(c5){n(at)
}return c7
}function cO(c3,c2,at){var c0=-1,c1=c3?c3.length:0;
c2=aU.createCallback(c2,at);
while(++c0<c1){if(c2(c3[c0],c0,c3)){return c0
}}return -1
}function bh(c4,c3,at){if(c4){var c2=0,c1=c4.length;
if(typeof c3!="number"&&c3!=null){var c0=-1;
c3=aU.createCallback(c3,at);
while(++c0<c1&&c3(c4[c0],c0,c4)){c2++
}}else{c2=c3;
if(c2==null||at){return c4[0]
}}return s(c4,0,an(cd(0,c2),c1))
}}var cq=cX(function cq(c5,c0,c4){var c1=-1,c2=c5?c5.length:0,at=[];
while(++c1<c2){var c3=c5[c1];
if(c4){c3=c4(c3,c1,c5)
}if(bB(c3)){aw.apply(at,c0?c3:cq(c3))
}else{at.push(c3)
}}return at
});
function cR(c3,c2,c0){if(typeof c0=="number"){var c1=c3?c3.length:0;
c0=(c0<0?cd(0,c1+c0):c0||0)
}else{if(c0){var at=bb(c3,c2);
return c3[at]===c2?at:-1
}}return c3?R(c3,c2,c0):-1
}function cS(c4,c3,at){if(!c4){return[]
}var c2=0,c1=c4.length;
if(typeof c3!="number"&&c3!=null){var c0=c1;
c3=aU.createCallback(c3,at);
while(c0--&&c3(c4[c0],c0,c4)){c2++
}}else{c2=(c3==null||at)?1:c3||c2
}return s(c4,0,an(cd(0,c1-c2),c1))
}function cn(c5){var c7=arguments,c3=c7.length,c1=-1,c6=d(),c4=-1,c8=b1(),c2=c5?c5.length:0,da=[],c0=d();
while(++c1<c3){var c9=c7[c1];
c6[c1]=c8===R&&(c9?c9.length:0)>=b&&ac(c1?c7[c1]:c0)
}outer:while(++c4<c2){var at=c6[0];
c9=c5[c4];
if((at?P(at,c9):c8(c0,c9))<0){c1=c3;
(at||c0).push(c9);
while(--c1){at=c6[c1];
if((at?P(at,c9):c8(c7[c1],c9))<0){continue outer
}}da.push(c9)
}}while(c3--){at=c6[c3];
if(at){n(at)
}}T(c6);
T(c0);
return da
}function bt(c4,c3,at){if(c4){var c2=0,c1=c4.length;
if(typeof c3!="number"&&c3!=null){var c0=c1;
c3=aU.createCallback(c3,at);
while(c0--&&c3(c4[c0],c0,c4)){c2++
}}else{c2=c3;
if(c2==null||at){return c4[c1-1]
}}return s(c4,cd(0,c1-c2))
}}function cZ(c2,c1,c0){var at=c2?c2.length:0;
if(typeof c0=="number"){at=(c0<0?cd(0,at+c0):an(c0,at-1))+1
}while(at--){if(c2[at]===c1){return at
}}return -1
}function aY(c4,c0,c3){c4=+c4||0;
c3=+c3||1;
if(c0==null){c0=c4;
c4=0
}var c1=-1,c2=cd(0,aW((c0-c4)/c3)),at=aG(c2);
while(++c1<c2){at[c1]=c4;
c4+=c3
}return at
}function b6(c4,c3,at){if(typeof c3!="number"&&c3!=null){var c2=0,c0=-1,c1=c4?c4.length:0;
c3=aU.createCallback(c3,at);
while(++c0<c1&&c3(c4[c0],c0,c4)){c2++
}}else{c2=(c3==null||at)?1:cd(0,c3)
}return s(c4,c2)
}function bb(c5,c3,c4,c0){var at=0,c2=c5?c5.length:at;
c4=c4?aU.createCallback(c4,c0,1):bj;
c3=c4(c3);
while(at<c2){var c1=(at+c2)>>>1;
(c4(c5[c1])<c3)?at=c1+1:c2=c1
}return at
}function au(at){if(!bB(at)){arguments[0]=at?aJ.call(at):b4
}return bQ(bF.apply(b4,arguments))
}var bQ=cX(function(c5,c2,c9){var c4=-1,c6=b1(),c1=c5?c5.length:0,da=[];
var c7=!c2&&c1>=b&&c6===R,c0=(c9||c7)?d():da;
if(c7){var at=ac(c0);
if(at){c6=P;
c0=at
}else{c7=false;
c0=c9?c0:(T(c0),da)
}}while(++c4<c1){var c8=c5[c4],c3=c9?c9(c8,c4,c5):c8;
if(c2?!c4||c0[c0.length-1]!==c3:c6(c0,c3)<0){if(c9||c7){c0.push(c3)
}da.push(c8)
}}if(c7){T(c0.array);
n(c0)
}else{if(c9){T(c0)
}}return da
});
function cQ(c2){var c0=-1,c1=c2?bi(cT(c2,"length")):0,at=aG(c1<0?0:c1);
while(++c0<c1){at[c0]=cT(c2,c0)
}return at
}function cM(at){return ah(at,aJ.call(arguments,1))
}function ap(at){return at?cQ(arguments):[]
}function cs(c4,c0){var c1=-1,c3=c4?c4.length:0,at={};
while(++c1<c3){var c2=c4[c1];
if(c0){at[c2]=c0[c1]
}else{at[c2[0]]=c2[1]
}}return at
}function aR(c0,at){if(c0<1){return at()
}return function(){if(--c0<1){return at.apply(this,arguments)
}}
}function bW(c0,at){return aF.fastBind||(b2&&arguments.length>2)?b2.call.apply(b2,arguments):aP(c0,at,aJ.call(arguments,2))
}function bu(c1){var at=arguments.length>1?bF.apply(b4,aJ.call(arguments,1)):cw(c1),c0=-1,c3=at.length;
while(++c0<c3){var c2=at[c0];
c1[c2]=bW(c1[c2],c1)
}return c1
}function cC(at,c0){return aP(at,c0,aJ.call(arguments,2),h)
}function cu(){var at=arguments;
return function(){var c0=arguments,c1=at.length;
while(c1--){c0=[at[c1].apply(this,c0)]
}return c0[0]
}
}function aE(c2,at,c3){if(c2==null){return bj
}var c1=typeof c2;
if(c1!="function"){if(c1!="object"){return function(c4){return c4[c2]
}
}var c0=b7(c2);
return function(c5){var c6=c0.length,c4=false;
while(c6--){if(!(c4=bZ(c5[c0[c6]],c2[c0[c6]],h))){break
}}return c4
}
}if(typeof at=="undefined"||(i&&!i.test(bA.call(c2)))){return c2
}if(c3===1){return function(c4){return c2.call(at,c4)
}
}if(c3===2){return function(c5,c4){return c2.call(at,c5,c4)
}
}if(c3===4){return function(c4,c6,c5,c7){return c2.call(at,c4,c6,c5,c7)
}
}return function(c5,c4,c6){return c2.call(at,c5,c4,c6)
}
}function ct(c1,c6,dd){var da,de,db,c7=0,c8=0,c3=false,c4=null,dc=null,c9=true;
function c5(){bR(c4);
bR(dc);
c7=0;
c4=dc=null
}function c2(){var df=c9&&(!at||c7>1);
c5();
if(df){if(c3!==false){c8=new ca
}de=c1.apply(db,da)
}}function c0(){c5();
if(c9||(c3!==c6)){c8=new ca;
de=c1.apply(db,da)
}}c6=cd(0,c6||0);
if(dd===true){var at=true;
c9=false
}else{if(cY(dd)){at=dd.leading;
c3="maxWait" in dd&&cd(c6,dd.maxWait||0);
c9="trailing" in dd?dd.trailing:c9
}}return function(){da=arguments;
db=this;
c7++;
bR(dc);
if(c3===false){if(at&&c7<2){de=c1.apply(db,da)
}}else{var df=new ca;
if(!c4&&!at){c8=df
}var dg=c3-(df-c8);
if(dg<=0){bR(c4);
c4=null;
c8=df;
de=c1.apply(db,da)
}else{if(!c4){c4=aX(c0,dg)
}}}if(c6!==c3){dc=aX(c2,c6)
}return de
}
}function a2(c0){var at=aJ.call(arguments,1);
return aX(function(){c0.apply(l,at)
},1)
}if(aq&&y&&typeof bV=="function"){a2=bW(bV,ai)
}function bM(c0,c1){var at=aJ.call(arguments,2);
return aX(function(){c0.apply(l,at)
},c1)
}function a3(c0,c1){function at(){var c2=at.cache,c3=a+(c1?c1.apply(this,arguments):arguments[0]);
return a0.call(c2,c3)?c2[c3]:(c2[c3]=c0.apply(this,arguments))
}at.cache={};
return at
}function cm(c1){var c0,at;
return function(){if(c0){return at
}c0=true;
at=c1.apply(this,arguments);
c1=null;
return at
}
}function cF(at){return aP(at,aJ.call(arguments,1))
}function cj(at){return aP(at,aJ.call(arguments,1),null,h)
}function ce(c1,c2,c0){var c4=true,c3=true;
if(c0===false){c4=false
}else{if(cY(c0)){c4="leading" in c0?c0.leading:c4;
c3="trailing" in c0?c0.trailing:c3
}}c0=p();
c0.leading=c4;
c0.maxWait=c2;
c0.trailing=c3;
var at=ct(c1,c2,c0);
n(c0);
return at
}function bT(at,c0){return function(){var c1=[at];
aw.apply(c1,arguments);
return c0.apply(this,c1)
}
}function bc(at){return at==null?"":ch(at).replace(A,bm)
}function bj(at){return at
}function aC(at){by(cw(at),function(c0){var c1=aU[c0]=at[c0];
aU.prototype[c0]=function(){var c4=this.__wrapped__,c3=[c4];
aw.apply(c3,arguments);
var c2=c1.apply(aU,c3);
return(c4&&typeof c4=="object"&&c4===c2)?this:new cB(c2)
}
})
}function cL(){ai._=cG;
return this
}var cW=cV(G+"08")==8?cV:function(c0,at){return cV(co(c0)?c0.replace(aa,""):c0,at||0)
};
function b8(c0,at){if(c0==null&&at==null){at=1
}c0=+c0||0;
if(at==null){at=c0;
c0=0
}else{at=+at||0
}var c1=bJ();
return(c0%1||at%1)?c0+an(c1*(at-c0+parseFloat("1e-"+((c1+"").length-1))),at):c0+cA(c1*(at-c0+1))
}function aQ(at,c1){var c0=at?at[c1]:l;
return ax(c0)?at[c1]():c0
}function bD(dc,c6,df){var c3=aU.templateSettings;
dc||(dc="");
df=bL?bs({},df,c3):c3;
var c1=bL&&bs({},df.imports,c3.imports),c7=bL?b7(c1):["_"],c2=bL?bv(c1):[aU];
var db,c8=0,da=df.interpolate||S,c0="__p += '";
var de=cv((df.escape||S).source+"|"+da.source+"|"+(da===m?z:S).source+"|"+(df.evaluate||S).source+"|$","g");
dc.replace(de,function(dg,dk,di,dh,dj,dl){di||(di=dh);
c0+=dc.slice(c8,dl).replace(X,f);
if(dk){c0+="' +\n__e("+dk+") +\n'"
}if(dj){db=true;
c0+="';\n"+dj+";\n__p += '"
}if(di){c0+="' +\n((__t = ("+di+")) == null ? '' : __t) +\n'"
}c8=dl+dg.length;
return dg
});
c0+="';\n";
var c4=df.variable,c5=c4;
if(!c5){c4="obj";
c0="with ("+c4+") {\n"+c0+"\n}\n"
}c0=(db?c0.replace(w,""):c0).replace(U,"$1").replace(e,"$1;");
c0="function("+c4+") {\n"+(c5?"":c4+" || ("+c4+" = {});\n")+"var __t, __p = '', __e = _.escape"+(db?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+c0+"return __p\n}";
var at="\n/*\n//@ sourceURL="+(df.sourceURL||"/lodash/template/source["+(ad++)+"]")+"\n*/";
try{var dd=aZ(c7,"return "+c0+at).apply(l,c2)
}catch(c9){c9.source=c0;
throw c9
}if(c6){return dd(c6)
}dd.source=c0;
return dd
}function al(c3,c2,c0){c3=(c3=+c3)>-1?c3:0;
var c1=-1,at=aG(c3);
c2=aU.createCallback(c2,c0,1);
while(++c1<c3){at[c1]=c2(c1)
}return at
}function am(at){return at==null?"":ch(at).replace(F,bn)
}function cb(at){var c0=++J;
return ch(at==null?"":at)+c0
}function cp(at,c0){c0(at);
return at
}function bl(){return ch(this.__wrapped__)
}function aV(){return this.__wrapped__
}aU.after=aR;
aU.assign=br;
aU.at=cz;
aU.bind=bW;
aU.bindAll=bu;
aU.bindKey=cC;
aU.compact=aO;
aU.compose=cu;
aU.countBy=bH;
aU.createCallback=aE;
aU.debounce=ct;
aU.defaults=bs;
aU.defer=a2;
aU.delay=bM;
aU.difference=ah;
aU.filter=bO;
aU.flatten=cq;
aU.forEach=by;
aU.forIn=aj;
aU.forOwn=bN;
aU.functions=cw;
aU.groupBy=bp;
aU.initial=cS;
aU.intersection=cn;
aU.invert=b3;
aU.invoke=aI;
aU.keys=b7;
aU.map=bk;
aU.max=bi;
aU.memoize=a3;
aU.merge=bI;
aU.min=cf;
aU.omit=cl;
aU.once=cm;
aU.pairs=bx;
aU.partial=cF;
aU.partialRight=cj;
aU.pick=bK;
aU.pluck=cT;
aU.range=aY;
aU.reject=aA;
aU.rest=b6;
aU.shuffle=bw;
aU.sortBy=ba;
aU.tap=cp;
aU.throttle=ce;
aU.times=al;
aU.toArray=aD;
aU.transform=cH;
aU.union=au;
aU.uniq=bQ;
aU.unzip=cQ;
aU.values=bv;
aU.where=ak;
aU.without=cM;
aU.wrap=bT;
aU.zip=ap;
aU.zipObject=cs;
aU.collect=bk;
aU.drop=b6;
aU.each=by;
aU.extend=br;
aU.methods=cw;
aU.object=cs;
aU.select=bO;
aU.tail=b6;
aU.unique=bQ;
aC(aU);
aU.chain=aU;
aU.prototype.chain=function(){return this
};
aU.clone=cr;
aU.cloneDeep=cU;
aU.contains=a4;
aU.escape=bc;
aU.every=ay;
aU.find=bE;
aU.findIndex=cO;
aU.findKey=ck;
aU.has=cI;
aU.identity=bj;
aU.indexOf=cR;
aU.isArguments=a5;
aU.isArray=bB;
aU.isBoolean=bG;
aU.isDate=a9;
aU.isElement=bY;
aU.isEmpty=ci;
aU.isEqual=bZ;
aU.isFinite=aL;
aU.isFunction=ax;
aU.isNaN=bP;
aU.isNull=cP;
aU.isNumber=bq;
aU.isObject=cY;
aU.isPlainObject=aN;
aU.isRegExp=cD;
aU.isString=co;
aU.isUndefined=bU;
aU.lastIndexOf=cZ;
aU.mixin=aC;
aU.noConflict=cL;
aU.parseInt=cW;
aU.random=b8;
aU.reduce=cg;
aU.reduceRight=cE;
aU.result=aQ;
aU.runInContext=ab;
aU.size=a8;
aU.some=a7;
aU.sortedIndex=bb;
aU.template=bD;
aU.unescape=am;
aU.uniqueId=cb;
aU.all=ay;
aU.any=a7;
aU.detect=bE;
aU.findWhere=bE;
aU.foldl=cg;
aU.foldr=cE;
aU.include=a4;
aU.inject=cg;
bN(aU,function(c0,at){if(!aU.prototype[at]){aU.prototype[at]=function(){var c1=[this.__wrapped__];
aw.apply(c1,arguments);
return c0.apply(aU,c1)
}
}});
aU.first=bh;
aU.last=bt;
aU.take=bh;
aU.head=bh;
bN(aU,function(c0,at){if(!aU.prototype[at]){aU.prototype[at]=function(c3,c2){var c1=c0(this.__wrapped__,c3,c2);
return c3==null||(c2&&typeof c3!="function")?c1:new cB(c1)
}
}});
aU.VERSION="1.3.1";
aU.prototype.toString=bl;
aU.prototype.value=aV;
aU.prototype.valueOf=aV;
cJ(["join","pop","shift"],function(at){var c0=b4[at];
aU.prototype[at]=function(){return c0.apply(this.__wrapped__,arguments)
}
});
cJ(["push","reverse","sort","unshift"],function(at){var c0=b4[at];
aU.prototype[at]=function(){c0.apply(this.__wrapped__,arguments);
return this
}
});
cJ(["concat","slice","splice"],function(at){var c0=b4[at];
aU.prototype[at]=function(){return new cB(c0.apply(this.__wrapped__,arguments))
}
});
if(!aF.spliceObjects){cJ(["pop","shift","splice"],function(at){var c0=b4[at],c1=at=="splice";
aU.prototype[at]=function(){var c3=this.__wrapped__,c2=c0.apply(c3,arguments);
if(c3.length===0){delete c3[0]
}return c1?new cB(c2):c2
}
})
}aU._basicEach=cJ;
aU._iteratorTemplate=bL;
aU._shimKeys=bd;
return aU
}var ae=ab();
if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){Q._=ae;
define(function(){return ae
})
}else{if(Y&&!Y.nodeType){if(y){(y.exports=ae)._=ae
}else{Y._=ae
}}else{Q._=ae
}}}(this));
/*!
 * jQuery JavaScript Library v2.1.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-18T15:11Z
 */
(function(b,a){if(typeof module==="object"&&typeof module.exports==="object"){module.exports=b.document?a(b,true):function(c){if(!c.document){throw new Error("jQuery requires a window with a document")
}return a(c)
}
}else{a(b)
}}(typeof window!=="undefined"?window:this,function(window,noGlobal){var arr=[];
var slice=arr.slice;
var concat=arr.concat;
var push=arr.push;
var indexOf=arr.indexOf;
var class2type={};
var toString=class2type.toString;
var hasOwn=class2type.hasOwnProperty;
var support={};
var document=window.document,version="2.1.3",jQuery=function(selector,context){return new jQuery.fn.init(selector,context)
},rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,fcamelCase=function(all,letter){return letter.toUpperCase()
};
jQuery.fn=jQuery.prototype={jquery:version,constructor:jQuery,selector:"",length:0,toArray:function(){return slice.call(this)
},get:function(num){return num!=null?(num<0?this[num+this.length]:this[num]):slice.call(this)
},pushStack:function(elems){var ret=jQuery.merge(this.constructor(),elems);
ret.prevObject=this;
ret.context=this.context;
return ret
},each:function(callback,args){return jQuery.each(this,callback,args)
},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem)
}))
},slice:function(){return this.pushStack(slice.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(i){var len=this.length,j=+i+(i<0?len:0);
return this.pushStack(j>=0&&j<len?[this[j]]:[])
},end:function(){return this.prevObject||this.constructor(null)
},push:push,sort:arr.sort,splice:arr.splice};
jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;
if(typeof target==="boolean"){deep=target;
target=arguments[i]||{};
i++
}if(typeof target!=="object"&&!jQuery.isFunction(target)){target={}
}if(i===length){target=this;
i--
}for(;
i<length;
i++){if((options=arguments[i])!=null){for(name in options){src=target[name];
copy=options[name];
if(target===copy){continue
}if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;
clone=src&&jQuery.isArray(src)?src:[]
}else{clone=src&&jQuery.isPlainObject(src)?src:{}
}target[name]=jQuery.extend(deep,clone,copy)
}else{if(copy!==undefined){target[name]=copy
}}}}}return target
};
jQuery.extend({expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),isReady:true,error:function(msg){throw new Error(msg)
},noop:function(){},isFunction:function(obj){return jQuery.type(obj)==="function"
},isArray:Array.isArray,isWindow:function(obj){return obj!=null&&obj===obj.window
},isNumeric:function(obj){return !jQuery.isArray(obj)&&(obj-parseFloat(obj)+1)>=0
},isPlainObject:function(obj){if(jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false
}if(obj.constructor&&!hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false
}return true
},isEmptyObject:function(obj){var name;
for(name in obj){return false
}return true
},type:function(obj){if(obj==null){return obj+""
}return typeof obj==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj
},globalEval:function(code){var script,indirect=eval;
code=jQuery.trim(code);
if(code){if(code.indexOf("use strict")===1){script=document.createElement("script");
script.text=code;
document.head.appendChild(script).parentNode.removeChild(script)
}else{indirect(code)
}}},camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase)
},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase()
},each:function(obj,callback,args){var value,i=0,length=obj.length,isArray=isArraylike(obj);
if(args){if(isArray){for(;
i<length;
i++){value=callback.apply(obj[i],args);
if(value===false){break
}}}else{for(i in obj){value=callback.apply(obj[i],args);
if(value===false){break
}}}}else{if(isArray){for(;
i<length;
i++){value=callback.call(obj[i],i,obj[i]);
if(value===false){break
}}}else{for(i in obj){value=callback.call(obj[i],i,obj[i]);
if(value===false){break
}}}}return obj
},trim:function(text){return text==null?"":(text+"").replace(rtrim,"")
},makeArray:function(arr,results){var ret=results||[];
if(arr!=null){if(isArraylike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr)
}else{push.call(ret,arr)
}}return ret
},inArray:function(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i)
},merge:function(first,second){var len=+second.length,j=0,i=first.length;
for(;
j<len;
j++){first[i++]=second[j]
}first.length=i;
return first
},grep:function(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;
for(;
i<length;
i++){callbackInverse=!callback(elems[i],i);
if(callbackInverse!==callbackExpect){matches.push(elems[i])
}}return matches
},map:function(elems,callback,arg){var value,i=0,length=elems.length,isArray=isArraylike(elems),ret=[];
if(isArray){for(;
i<length;
i++){value=callback(elems[i],i,arg);
if(value!=null){ret.push(value)
}}}else{for(i in elems){value=callback(elems[i],i,arg);
if(value!=null){ret.push(value)
}}}return concat.apply([],ret)
},guid:1,proxy:function(fn,context){var tmp,args,proxy;
if(typeof context==="string"){tmp=fn[context];
context=fn;
fn=tmp
}if(!jQuery.isFunction(fn)){return undefined
}args=slice.call(arguments,2);
proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)))
};
proxy.guid=fn.guid=fn.guid||jQuery.guid++;
return proxy
},now:Date.now,support:support});
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase()
});
function isArraylike(obj){var length=obj.length,type=jQuery.type(obj);
if(type==="function"||jQuery.isWindow(obj)){return false
}if(obj.nodeType===1&&length){return true
}return type==="array"||length===0||typeof length==="number"&&length>0&&(length-1) in obj
}var Sizzle=
/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
(function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function(a,b){if(a===b){hasDuplicate=true
}return 0
},MAX_NEGATIVE=1<<31,hasOwn=({}).hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,indexOf=function(list,elem){var i=0,len=list.length;
for(;
i<len;
i++){if(list[i]===elem){return i
}}return -1
},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",whitespace="[\\x20\\t\\r\\n\\f]",characterEncoding="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",identifier=characterEncoding.replace("w","w#"),attributes="\\["+whitespace+"*("+characterEncoding+")(?:"+whitespace+"*([*^$|!~]?=)"+whitespace+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+characterEncoding+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|.*)\\)|)",rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={ID:new RegExp("^#("+characterEncoding+")"),CLASS:new RegExp("^\\.("+characterEncoding+")"),TAG:new RegExp("^("+characterEncoding.replace("w","w*")+")"),ATTR:new RegExp("^"+attributes),PSEUDO:new RegExp("^"+pseudos),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),bool:new RegExp("^(?:"+booleans+")$","i"),needsContext:new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,rescape=/'|\\/g,runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function(_,escaped,escapedWhitespace){var high="0x"+escaped-65536;
return high!==high||escapedWhitespace?escaped:high<0?String.fromCharCode(high+65536):String.fromCharCode(high>>10|55296,high&1023|56320)
},unloadHandler=function(){setDocument()
};
try{push.apply((arr=slice.call(preferredDoc.childNodes)),preferredDoc.childNodes);
arr[preferredDoc.childNodes.length].nodeType
}catch(e){push={apply:arr.length?function(target,els){push_native.apply(target,slice.call(els))
}:function(target,els){var j=target.length,i=0;
while((target[j++]=els[i++])){}target.length=j-1
}}
}function Sizzle(selector,context,results,seed){var match,elem,m,nodeType,i,groups,old,nid,newContext,newSelector;
if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context)
}context=context||document;
results=results||[];
nodeType=context.nodeType;
if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results
}if(!seed&&documentIsHTML){if(nodeType!==11&&(match=rquickExpr.exec(selector))){if((m=match[1])){if(nodeType===9){elem=context.getElementById(m);
if(elem&&elem.parentNode){if(elem.id===m){results.push(elem);
return results
}}else{return results
}}else{if(context.ownerDocument&&(elem=context.ownerDocument.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);
return results
}}}else{if(match[2]){push.apply(results,context.getElementsByTagName(selector));
return results
}else{if((m=match[3])&&support.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));
return results
}}}}if(support.qsa&&(!rbuggyQSA||!rbuggyQSA.test(selector))){nid=old=expando;
newContext=context;
newSelector=nodeType!==1&&selector;
if(nodeType===1&&context.nodeName.toLowerCase()!=="object"){groups=tokenize(selector);
if((old=context.getAttribute("id"))){nid=old.replace(rescape,"\\$&")
}else{context.setAttribute("id",nid)
}nid="[id='"+nid+"'] ";
i=groups.length;
while(i--){groups[i]=nid+toSelector(groups[i])
}newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;
newSelector=groups.join(",")
}if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));
return results
}catch(qsaError){}finally{if(!old){context.removeAttribute("id")
}}}}}return select(selector.replace(rtrim,"$1"),context,results,seed)
}function createCache(){var keys=[];
function cache(key,value){if(keys.push(key+" ")>Expr.cacheLength){delete cache[keys.shift()]
}return(cache[key+" "]=value)
}return cache
}function markFunction(fn){fn[expando]=true;
return fn
}function assert(fn){var div=document.createElement("div");
try{return !!fn(div)
}catch(e){return false
}finally{if(div.parentNode){div.parentNode.removeChild(div)
}div=null
}}function addHandle(attrs,handler){var arr=attrs.split("|"),i=attrs.length;
while(i--){Expr.attrHandle[arr[i]]=handler
}}function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||MAX_NEGATIVE)-(~a.sourceIndex||MAX_NEGATIVE);
if(diff){return diff
}if(cur){while((cur=cur.nextSibling)){if(cur===b){return -1
}}}return a?1:-1
}function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();
return name==="input"&&elem.type===type
}
}function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();
return(name==="input"||name==="button")&&elem.type===type
}
}function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;
return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;
while(i--){if(seed[(j=matchIndexes[i])]){seed[j]=!(matches[j]=seed[j])
}}})
})
}function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context
}support=Sizzle.support={};
isXML=Sizzle.isXML=function(elem){var documentElement=elem&&(elem.ownerDocument||elem).documentElement;
return documentElement?documentElement.nodeName!=="HTML":false
};
setDocument=Sizzle.setDocument=function(node){var hasCompare,parent,doc=node?node.ownerDocument||node:preferredDoc;
if(doc===document||doc.nodeType!==9||!doc.documentElement){return document
}document=doc;
docElem=doc.documentElement;
parent=doc.defaultView;
if(parent&&parent!==parent.top){if(parent.addEventListener){parent.addEventListener("unload",unloadHandler,false)
}else{if(parent.attachEvent){parent.attachEvent("onunload",unloadHandler)
}}}documentIsHTML=!isXML(doc);
support.attributes=assert(function(div){div.className="i";
return !div.getAttribute("className")
});
support.getElementsByTagName=assert(function(div){div.appendChild(doc.createComment(""));
return !div.getElementsByTagName("*").length
});
support.getElementsByClassName=rnative.test(doc.getElementsByClassName);
support.getById=assert(function(div){docElem.appendChild(div).id=expando;
return !doc.getElementsByName||!doc.getElementsByName(expando).length
});
if(support.getById){Expr.find.ID=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var m=context.getElementById(id);
return m&&m.parentNode?[m]:[]
}};
Expr.filter.ID=function(id){var attrId=id.replace(runescape,funescape);
return function(elem){return elem.getAttribute("id")===attrId
}
}
}else{delete Expr.find.ID;
Expr.filter.ID=function(id){var attrId=id.replace(runescape,funescape);
return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");
return node&&node.value===attrId
}
}
}Expr.find.TAG=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag)
}else{if(support.qsa){return context.querySelectorAll(tag)
}}}:function(tag,context){var elem,tmp=[],i=0,results=context.getElementsByTagName(tag);
if(tag==="*"){while((elem=results[i++])){if(elem.nodeType===1){tmp.push(elem)
}}return tmp
}return results
};
Expr.find.CLASS=support.getElementsByClassName&&function(className,context){if(documentIsHTML){return context.getElementsByClassName(className)
}};
rbuggyMatches=[];
rbuggyQSA=[];
if((support.qsa=rnative.test(doc.querySelectorAll))){assert(function(div){docElem.appendChild(div).innerHTML="<a id='"+expando+"'></a><select id='"+expando+"-\f]' msallowcapture=''><option selected=''></option></select>";
if(div.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")")
}if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")")
}if(!div.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=")
}if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked")
}if(!div.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]")
}});
assert(function(div){var input=doc.createElement("input");
input.setAttribute("type","hidden");
div.appendChild(input).setAttribute("name","D");
if(div.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=")
}if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled")
}div.querySelectorAll("*,:x");
rbuggyQSA.push(",.*:")
})
}if((support.matchesSelector=rnative.test((matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)))){assert(function(div){support.disconnectedMatch=matches.call(div,"div");
matches.call(div,"[s!='']:x");
rbuggyMatches.push("!=",pseudos)
})
}rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));
rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));
hasCompare=rnative.test(docElem.compareDocumentPosition);
contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;
return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16))
}:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return true
}}}return false
};
sortOrder=hasCompare?function(a,b){if(a===b){hasDuplicate=true;
return 0
}var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;
if(compare){return compare
}compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1;
if(compare&1||(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){if(a===doc||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return -1
}if(b===doc||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1
}return sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0
}return compare&4?-1:1
}:function(a,b){if(a===b){hasDuplicate=true;
return 0
}var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];
if(!aup||!bup){return a===doc?-1:b===doc?1:aup?-1:bup?1:sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0
}else{if(aup===bup){return siblingCheck(a,b)
}}cur=a;
while((cur=cur.parentNode)){ap.unshift(cur)
}cur=b;
while((cur=cur.parentNode)){bp.unshift(cur)
}while(ap[i]===bp[i]){i++
}return i?siblingCheck(ap[i],bp[i]):ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0
};
return doc
};
Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements)
};
Sizzle.matchesSelector=function(elem,expr){if((elem.ownerDocument||elem)!==document){setDocument(elem)
}expr=expr.replace(rattributeQuotes,"='$1']");
if(support.matchesSelector&&documentIsHTML&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);
if(ret||support.disconnectedMatch||elem.document&&elem.document.nodeType!==11){return ret
}}catch(e){}}return Sizzle(expr,document,null,[elem]).length>0
};
Sizzle.contains=function(context,elem){if((context.ownerDocument||context)!==document){setDocument(context)
}return contains(context,elem)
};
Sizzle.attr=function(elem,name){if((elem.ownerDocument||elem)!==document){setDocument(elem)
}var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;
return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null
};
Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg)
};
Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;
hasDuplicate=!support.detectDuplicates;
sortInput=!support.sortStable&&results.slice(0);
results.sort(sortOrder);
if(hasDuplicate){while((elem=results[i++])){if(elem===results[i]){j=duplicates.push(i)
}}while(j--){results.splice(duplicates[j],1)
}}sortInput=null;
return results
};
getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;
if(!nodeType){while((node=elem[i++])){ret+=getText(node)
}}else{if(nodeType===1||nodeType===9||nodeType===11){if(typeof elem.textContent==="string"){return elem.textContent
}else{for(elem=elem.firstChild;
elem;
elem=elem.nextSibling){ret+=getText(elem)
}}}else{if(nodeType===3||nodeType===4){return elem.nodeValue
}}}return ret
};
Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(match){match[1]=match[1].replace(runescape,funescape);
match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);
if(match[2]==="~="){match[3]=" "+match[3]+" "
}return match.slice(0,4)
},CHILD:function(match){match[1]=match[1].toLowerCase();
if(match[1].slice(0,3)==="nth"){if(!match[3]){Sizzle.error(match[0])
}match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));
match[5]=+((match[7]+match[8])||match[3]==="odd")
}else{if(match[3]){Sizzle.error(match[0])
}}return match
},PSEUDO:function(match){var excess,unquoted=!match[6]&&match[2];
if(matchExpr.CHILD.test(match[0])){return null
}if(match[3]){match[2]=match[4]||match[5]||""
}else{if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){match[0]=match[0].slice(0,excess);
match[2]=unquoted.slice(0,excess)
}}return match.slice(0,3)
}},filter:{TAG:function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();
return nodeNameSelector==="*"?function(){return true
}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName
}
},CLASS:function(className){var pattern=classCache[className+" "];
return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"")
})
},ATTR:function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);
if(result==null){return operator==="!="
}if(!operator){return true
}result+="";
return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false
}
},CHILD:function(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";
return first===1&&last===0?function(elem){return !!elem.parentNode
}:function(elem,context,xml){var cache,outerCache,node,diff,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType;
if(parent){if(simple){while(dir){node=elem;
while((node=node[dir])){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false
}}start=dir=type==="only"&&!start&&"nextSibling"
}return true
}start=[forward?parent.firstChild:parent.lastChild];
if(forward&&useCache){outerCache=parent[expando]||(parent[expando]={});
cache=outerCache[type]||[];
nodeIndex=cache[0]===dirruns&&cache[1];
diff=cache[0]===dirruns&&cache[2];
node=nodeIndex&&parent.childNodes[nodeIndex];
while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if(node.nodeType===1&&++diff&&node===elem){outerCache[type]=[dirruns,nodeIndex,diff];
break
}}}else{if(useCache&&(cache=(elem[expando]||(elem[expando]={}))[type])&&cache[0]===dirruns){diff=cache[1]
}else{while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){if(useCache){(node[expando]||(node[expando]={}))[type]=[dirruns,diff]
}if(node===elem){break
}}}}}diff-=last;
return diff===first||(diff%first===0&&diff/first>=0)
}}
},PSEUDO:function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);
if(fn[expando]){return fn(argument)
}if(fn.length>1){args=[pseudo,pseudo,"",argument];
return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;
while(i--){idx=indexOf(seed,matched[i]);
seed[idx]=!(matches[idx]=matched[i])
}}):function(elem){return fn(elem,0,args)
}
}return fn
}},pseudos:{not:markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));
return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;
while(i--){if((elem=unmatched[i])){seed[i]=!(matches[i]=elem)
}}}):function(elem,context,xml){input[0]=elem;
matcher(input,null,xml,results);
input[0]=null;
return !results.pop()
}
}),has:markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0
}
}),contains:markFunction(function(text){text=text.replace(runescape,funescape);
return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1
}
}),lang:markFunction(function(lang){if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang)
}lang=lang.replace(runescape,funescape).toLowerCase();
return function(elem){var elemLang;
do{if((elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){elemLang=elemLang.toLowerCase();
return elemLang===lang||elemLang.indexOf(lang+"-")===0
}}while((elem=elem.parentNode)&&elem.nodeType===1);
return false
}
}),target:function(elem){var hash=window.location&&window.location.hash;
return hash&&hash.slice(1)===elem.id
},root:function(elem){return elem===docElem
},focus:function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex)
},enabled:function(elem){return elem.disabled===false
},disabled:function(elem){return elem.disabled===true
},checked:function(elem){var nodeName=elem.nodeName.toLowerCase();
return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected)
},selected:function(elem){if(elem.parentNode){elem.parentNode.selectedIndex
}return elem.selected===true
},empty:function(elem){for(elem=elem.firstChild;
elem;
elem=elem.nextSibling){if(elem.nodeType<6){return false
}}return true
},parent:function(elem){return !Expr.pseudos.empty(elem)
},header:function(elem){return rheader.test(elem.nodeName)
},input:function(elem){return rinputs.test(elem.nodeName)
},button:function(elem){var name=elem.nodeName.toLowerCase();
return name==="input"&&elem.type==="button"||name==="button"
},text:function(elem){var attr;
return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text")
},first:createPositionalPseudo(function(){return[0]
}),last:createPositionalPseudo(function(matchIndexes,length){return[length-1]
}),eq:createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument]
}),even:createPositionalPseudo(function(matchIndexes,length){var i=0;
for(;
i<length;
i+=2){matchIndexes.push(i)
}return matchIndexes
}),odd:createPositionalPseudo(function(matchIndexes,length){var i=1;
for(;
i<length;
i+=2){matchIndexes.push(i)
}return matchIndexes
}),lt:createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;
for(;
--i>=0;
){matchIndexes.push(i)
}return matchIndexes
}),gt:createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;
for(;
++i<length;
){matchIndexes.push(i)
}return matchIndexes
})}};
Expr.pseudos.nth=Expr.pseudos.eq;
for(i in {radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i)
}for(i in {submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i)
}function setFilters(){}setFilters.prototype=Expr.filters=Expr.pseudos;
Expr.setFilters=new setFilters();
tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];
if(cached){return parseOnly?0:cached.slice(0)
}soFar=selector;
groups=[];
preFilters=Expr.preFilter;
while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match){soFar=soFar.slice(match[0].length)||soFar
}groups.push((tokens=[]))
}matched=false;
if((match=rcombinators.exec(soFar))){matched=match.shift();
tokens.push({value:matched,type:match[0].replace(rtrim," ")});
soFar=soFar.slice(matched.length)
}for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();
tokens.push({value:matched,type:type,matches:match});
soFar=soFar.slice(matched.length)
}}if(!matched){break
}}return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0)
};
function toSelector(tokens){var i=0,len=tokens.length,selector="";
for(;
i<len;
i++){selector+=tokens[i].value
}return selector
}function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&dir==="parentNode",doneName=done++;
return combinator.first?function(elem,context,xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml)
}}}:function(elem,context,xml){var oldCache,outerCache,newCache=[dirruns,doneName];
if(xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true
}}}}else{while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});
if((oldCache=outerCache[dir])&&oldCache[0]===dirruns&&oldCache[1]===doneName){return(newCache[2]=oldCache[2])
}else{outerCache[dir]=newCache;
if((newCache[2]=matcher(elem,context,xml))){return true
}}}}}}
}function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;
while(i--){if(!matchers[i](elem,context,xml)){return false
}}return true
}:matchers[0]
}function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;
for(;
i<len;
i++){Sizzle(selector,contexts[i],results)
}return results
}function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;
for(;
i<len;
i++){if((elem=unmatched[i])){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);
if(mapped){map.push(i)
}}}}return newUnmatched
}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter)
}if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector)
}return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]:results:matcherIn;
if(matcher){matcher(matcherIn,matcherOut,context,xml)
}if(postFilter){temp=condense(matcherOut,postMap);
postFilter(temp,[],context,xml);
i=temp.length;
while(i--){if((elem=temp[i])){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem)
}}}if(seed){if(postFinder||preFilter){if(postFinder){temp=[];
i=matcherOut.length;
while(i--){if((elem=matcherOut[i])){temp.push((matcherIn[i]=elem))
}}postFinder(null,(matcherOut=[]),temp,xml)
}i=matcherOut.length;
while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem)
}}}}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);
if(postFinder){postFinder(null,results,matcherOut,xml)
}else{push.apply(results,matcherOut)
}}})
}function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext
},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1
},implicitRelative,true),matchers=[function(elem,context,xml){var ret=(!leadingRelative&&(xml||context!==outermostContext))||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));
checkContext=null;
return ret
}];
for(;
i<len;
i++){if((matcher=Expr.relative[tokens[i].type])){matchers=[addCombinator(elementMatcher(matchers),matcher)]
}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);
if(matcher[expando]){j=++i;
for(;
j<len;
j++){if(Expr.relative[tokens[j].type]){break
}}return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens((tokens=tokens.slice(j))),j<len&&toSelector(tokens))
}matchers.push(matcher)
}}return elementMatcher(matchers)
}function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,elems=seed||byElement&&Expr.find.TAG("*",outermost),dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1),len=elems.length;
if(outermost){outermostContext=context!==document&&context
}for(;
i!==len&&(elem=elems[i])!=null;
i++){if(byElement&&elem){j=0;
while((matcher=elementMatchers[j++])){if(matcher(elem,context,xml)){results.push(elem);
break
}}if(outermost){dirruns=dirrunsUnique
}}if(bySet){if((elem=!matcher&&elem)){matchedCount--
}if(seed){unmatched.push(elem)
}}}matchedCount+=i;
if(bySet&&i!==matchedCount){j=0;
while((matcher=setMatchers[j++])){matcher(unmatched,setMatched,context,xml)
}if(seed){if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results)
}}}setMatched=condense(setMatched)
}push.apply(results,setMatched);
if(outermost&&!seed&&setMatched.length>0&&(matchedCount+setMatchers.length)>1){Sizzle.uniqueSort(results)
}}if(outermost){dirruns=dirrunsUnique;
outermostContext=contextBackup
}return unmatched
};
return bySet?markFunction(superMatcher):superMatcher
}compile=Sizzle.compile=function(selector,match){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];
if(!cached){if(!match){match=tokenize(selector)
}i=match.length;
while(i--){cached=matcherFromTokens(match[i]);
if(cached[expando]){setMatchers.push(cached)
}else{elementMatchers.push(cached)
}}cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));
cached.selector=selector
}return cached
};
select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize((selector=compiled.selector||selector));
results=results||[];
if(match.length===1){tokens=match[0]=match[0].slice(0);
if(tokens.length>2&&(token=tokens[0]).type==="ID"&&support.getById&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find.ID(token.matches[0].replace(runescape,funescape),context)||[])[0];
if(!context){return results
}else{if(compiled){context=context.parentNode
}}selector=selector.slice(tokens.shift().value.length)
}i=matchExpr.needsContext.test(selector)?0:tokens.length;
while(i--){token=tokens[i];
if(Expr.relative[(type=token.type)]){break
}if((find=Expr.find[type])){if((seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context))){tokens.splice(i,1);
selector=seed.length&&toSelector(tokens);
if(!selector){push.apply(results,seed);
return results
}break
}}}}(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,rsibling.test(selector)&&testContext(context.parentNode)||context);
return results
};
support.sortStable=expando.split("").sort(sortOrder).join("")===expando;
support.detectDuplicates=!!hasDuplicate;
setDocument();
support.sortDetached=assert(function(div1){return div1.compareDocumentPosition(document.createElement("div"))&1
});
if(!assert(function(div){div.innerHTML="<a href='#'></a>";
return div.firstChild.getAttribute("href")==="#"
})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2)
}})
}if(!support.attributes||!assert(function(div){div.innerHTML="<input/>";
div.firstChild.setAttribute("value","");
return div.firstChild.getAttribute("value")===""
})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue
}})
}if(!assert(function(div){return div.getAttribute("disabled")==null
})){addHandle(booleans,function(elem,name,isXML){var val;
if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null
}})
}return Sizzle
})(window);
jQuery.find=Sizzle;
jQuery.expr=Sizzle.selectors;
jQuery.expr[":"]=jQuery.expr.pseudos;
jQuery.unique=Sizzle.uniqueSort;
jQuery.text=Sizzle.getText;
jQuery.isXMLDoc=Sizzle.isXML;
jQuery.contains=Sizzle.contains;
var rneedsContext=jQuery.expr.match.needsContext;
var rsingleTag=(/^<(\w+)\s*\/?>(?:<\/\1>|)$/);
var risSimple=/^.[^:#\[\.,]*$/;
function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return !!qualifier.call(elem,i,elem)!==not
})
}if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return(elem===qualifier)!==not
})
}if(typeof qualifier==="string"){if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not)
}qualifier=jQuery.filter(qualifier,elements)
}return jQuery.grep(elements,function(elem){return(indexOf.call(qualifier,elem)>=0)!==not
})
}jQuery.filter=function(expr,elems,not){var elem=elems[0];
if(not){expr=":not("+expr+")"
}return elems.length===1&&elem.nodeType===1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1
}))
};
jQuery.fn.extend({find:function(selector){var i,len=this.length,ret=[],self=this;
if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;
i<len;
i++){if(jQuery.contains(self[i],this)){return true
}}}))
}for(i=0;
i<len;
i++){jQuery.find(selector,self[i],ret)
}ret=this.pushStack(len>1?jQuery.unique(ret):ret);
ret.selector=this.selector?this.selector+" "+selector:selector;
return ret
},filter:function(selector){return this.pushStack(winnow(this,selector||[],false))
},not:function(selector){return this.pushStack(winnow(this,selector||[],true))
},is:function(selector){return !!winnow(this,typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length
}});
var rootjQuery,rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,init=jQuery.fn.init=function(selector,context){var match,elem;
if(!selector){return this
}if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){match=[null,selector,null]
}else{match=rquickExpr.exec(selector)
}if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;
jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));
if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){if(jQuery.isFunction(this[match])){this[match](context[match])
}else{this.attr(match,context[match])
}}}return this
}else{elem=document.getElementById(match[2]);
if(elem&&elem.parentNode){this.length=1;
this[0]=elem
}this.context=document;
this.selector=selector;
return this
}}else{if(!context||context.jquery){return(context||rootjQuery).find(selector)
}else{return this.constructor(context).find(selector)
}}}else{if(selector.nodeType){this.context=this[0]=selector;
this.length=1;
return this
}else{if(jQuery.isFunction(selector)){return typeof rootjQuery.ready!=="undefined"?rootjQuery.ready(selector):selector(jQuery)
}}}if(selector.selector!==undefined){this.selector=selector.selector;
this.context=selector.context
}return jQuery.makeArray(selector,this)
};
init.prototype=jQuery.fn;
rootjQuery=jQuery(document);
var rparentsprev=/^(?:parents|prev(?:Until|All))/,guaranteedUnique={children:true,contents:true,next:true,prev:true};
jQuery.extend({dir:function(elem,dir,until){var matched=[],truncate=until!==undefined;
while((elem=elem[dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break
}matched.push(elem)
}}return matched
},sibling:function(n,elem){var matched=[];
for(;
n;
n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n)
}}return matched
}});
jQuery.fn.extend({has:function(target){var targets=jQuery(target,this),l=targets.length;
return this.filter(function(){var i=0;
for(;
i<l;
i++){if(jQuery.contains(this,targets[i])){return true
}}})
},closest:function(selectors,context){var cur,i=0,l=this.length,matched=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;
for(;
i<l;
i++){for(cur=this[i];
cur&&cur!==context;
cur=cur.parentNode){if(cur.nodeType<11&&(pos?pos.index(cur)>-1:cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);
break
}}}return this.pushStack(matched.length>1?jQuery.unique(matched):matched)
},index:function(elem){if(!elem){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1
}if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0])
}return indexOf.call(this,elem.jquery?elem[0]:elem)
},add:function(selector,context){return this.pushStack(jQuery.unique(jQuery.merge(this.get(),jQuery(selector,context))))
},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector))
}});
function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}return cur
}jQuery.each({parent:function(elem){var parent=elem.parentNode;
return parent&&parent.nodeType!==11?parent:null
},parents:function(elem){return jQuery.dir(elem,"parentNode")
},parentsUntil:function(elem,i,until){return jQuery.dir(elem,"parentNode",until)
},next:function(elem){return sibling(elem,"nextSibling")
},prev:function(elem){return sibling(elem,"previousSibling")
},nextAll:function(elem){return jQuery.dir(elem,"nextSibling")
},prevAll:function(elem){return jQuery.dir(elem,"previousSibling")
},nextUntil:function(elem,i,until){return jQuery.dir(elem,"nextSibling",until)
},prevUntil:function(elem,i,until){return jQuery.dir(elem,"previousSibling",until)
},siblings:function(elem){return jQuery.sibling((elem.parentNode||{}).firstChild,elem)
},children:function(elem){return jQuery.sibling(elem.firstChild)
},contents:function(elem){return elem.contentDocument||jQuery.merge([],elem.childNodes)
}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);
if(name.slice(-5)!=="Until"){selector=until
}if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched)
}if(this.length>1){if(!guaranteedUnique[name]){jQuery.unique(matched)
}if(rparentsprev.test(name)){matched.reverse()
}}return this.pushStack(matched)
}
});
var rnotwhite=(/\S+/g);
var optionsCache={};
function createOptions(options){var object=optionsCache[options]={};
jQuery.each(options.match(rnotwhite)||[],function(_,flag){object[flag]=true
});
return object
}jQuery.Callbacks=function(options){options=typeof options==="string"?(optionsCache[options]||createOptions(options)):jQuery.extend({},options);
var memory,fired,firing,firingStart,firingLength,firingIndex,list=[],stack=!options.once&&[],fire=function(data){memory=options.memory&&data;
fired=true;
firingIndex=firingStart||0;
firingStart=0;
firingLength=list.length;
firing=true;
for(;
list&&firingIndex<firingLength;
firingIndex++){if(list[firingIndex].apply(data[0],data[1])===false&&options.stopOnFalse){memory=false;
break
}}firing=false;
if(list){if(stack){if(stack.length){fire(stack.shift())
}}else{if(memory){list=[]
}else{self.disable()
}}}},self={add:function(){if(list){var start=list.length;
(function add(args){jQuery.each(args,function(_,arg){var type=jQuery.type(arg);
if(type==="function"){if(!options.unique||!self.has(arg)){list.push(arg)
}}else{if(arg&&arg.length&&type!=="string"){add(arg)
}}})
})(arguments);
if(firing){firingLength=list.length
}else{if(memory){firingStart=start;
fire(memory)
}}}return this
},remove:function(){if(list){jQuery.each(arguments,function(_,arg){var index;
while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);
if(firing){if(index<=firingLength){firingLength--
}if(index<=firingIndex){firingIndex--
}}}})
}return this
},has:function(fn){return fn?jQuery.inArray(fn,list)>-1:!!(list&&list.length)
},empty:function(){list=[];
firingLength=0;
return this
},disable:function(){list=stack=memory=undefined;
return this
},disabled:function(){return !list
},lock:function(){stack=undefined;
if(!memory){self.disable()
}return this
},locked:function(){return !stack
},fireWith:function(context,args){if(list&&(!fired||stack)){args=args||[];
args=[context,args.slice?args.slice():args];
if(firing){stack.push(args)
}else{fire(args)
}}return this
},fire:function(){self.fireWith(this,arguments);
return this
},fired:function(){return !!fired
}};
return self
};
jQuery.extend({Deferred:function(func){var tuples=[["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],state="pending",promise={state:function(){return state
},always:function(){deferred.done(arguments).fail(arguments);
return this
},then:function(){var fns=arguments;
return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=jQuery.isFunction(fns[i])&&fns[i];
deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);
if(returned&&jQuery.isFunction(returned.promise)){returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify)
}else{newDefer[tuple[0]+"With"](this===promise?newDefer.promise():this,fn?[returned]:arguments)
}})
});
fns=null
}).promise()
},promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise
}},deferred={};
promise.pipe=promise.then;
jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3];
promise[tuple[1]]=list.add;
if(stateString){list.add(function(){state=stateString
},tuples[i^1][2].disable,tuples[2][2].lock)
}deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?promise:this,arguments);
return this
};
deferred[tuple[0]+"With"]=list.fireWith
});
promise.promise(deferred);
if(func){func.call(deferred,deferred)
}return deferred
},when:function(subordinate){var i=0,resolveValues=slice.call(arguments),length=resolveValues.length,remaining=length!==1||(subordinate&&jQuery.isFunction(subordinate.promise))?length:0,deferred=remaining===1?subordinate:jQuery.Deferred(),updateFunc=function(i,contexts,values){return function(value){contexts[i]=this;
values[i]=arguments.length>1?slice.call(arguments):value;
if(values===progressValues){deferred.notifyWith(contexts,values)
}else{if(!(--remaining)){deferred.resolveWith(contexts,values)
}}}
},progressValues,progressContexts,resolveContexts;
if(length>1){progressValues=new Array(length);
progressContexts=new Array(length);
resolveContexts=new Array(length);
for(;
i<length;
i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject).progress(updateFunc(i,progressContexts,progressValues))
}else{--remaining
}}}if(!remaining){deferred.resolveWith(resolveContexts,resolveValues)
}return deferred.promise()
}});
var readyList;
jQuery.fn.ready=function(fn){jQuery.ready.promise().done(fn);
return this
};
jQuery.extend({isReady:false,readyWait:1,holdReady:function(hold){if(hold){jQuery.readyWait++
}else{jQuery.ready(true)
}},ready:function(wait){if(wait===true?--jQuery.readyWait:jQuery.isReady){return
}jQuery.isReady=true;
if(wait!==true&&--jQuery.readyWait>0){return
}readyList.resolveWith(document,[jQuery]);
if(jQuery.fn.triggerHandler){jQuery(document).triggerHandler("ready");
jQuery(document).off("ready")
}}});
function completed(){document.removeEventListener("DOMContentLoaded",completed,false);
window.removeEventListener("load",completed,false);
jQuery.ready()
}jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred();
if(document.readyState==="complete"){setTimeout(jQuery.ready)
}else{document.addEventListener("DOMContentLoaded",completed,false);
window.addEventListener("load",completed,false)
}}return readyList.promise(obj)
};
jQuery.ready.promise();
var access=jQuery.access=function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;
if(jQuery.type(key)==="object"){chainable=true;
for(i in key){jQuery.access(elems,fn,i,key[i],true,emptyGet,raw)
}}else{if(value!==undefined){chainable=true;
if(!jQuery.isFunction(value)){raw=true
}if(bulk){if(raw){fn.call(elems,value);
fn=null
}else{bulk=fn;
fn=function(elem,key,value){return bulk.call(jQuery(elem),value)
}
}}if(fn){for(;
i<len;
i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)))
}}}}return chainable?elems:bulk?fn.call(elems):len?fn(elems[0],key):emptyGet
};
jQuery.acceptData=function(owner){return owner.nodeType===1||owner.nodeType===9||!(+owner.nodeType)
};
function Data(){Object.defineProperty(this.cache={},0,{get:function(){return{}
}});
this.expando=jQuery.expando+Data.uid++
}Data.uid=1;
Data.accepts=jQuery.acceptData;
Data.prototype={key:function(owner){if(!Data.accepts(owner)){return 0
}var descriptor={},unlock=owner[this.expando];
if(!unlock){unlock=Data.uid++;
try{descriptor[this.expando]={value:unlock};
Object.defineProperties(owner,descriptor)
}catch(e){descriptor[this.expando]=unlock;
jQuery.extend(owner,descriptor)
}}if(!this.cache[unlock]){this.cache[unlock]={}
}return unlock
},set:function(owner,data,value){var prop,unlock=this.key(owner),cache=this.cache[unlock];
if(typeof data==="string"){cache[data]=value
}else{if(jQuery.isEmptyObject(cache)){jQuery.extend(this.cache[unlock],data)
}else{for(prop in data){cache[prop]=data[prop]
}}}return cache
},get:function(owner,key){var cache=this.cache[this.key(owner)];
return key===undefined?cache:cache[key]
},access:function(owner,key,value){var stored;
if(key===undefined||((key&&typeof key==="string")&&value===undefined)){stored=this.get(owner,key);
return stored!==undefined?stored:this.get(owner,jQuery.camelCase(key))
}this.set(owner,key,value);
return value!==undefined?value:key
},remove:function(owner,key){var i,name,camel,unlock=this.key(owner),cache=this.cache[unlock];
if(key===undefined){this.cache[unlock]={}
}else{if(jQuery.isArray(key)){name=key.concat(key.map(jQuery.camelCase))
}else{camel=jQuery.camelCase(key);
if(key in cache){name=[key,camel]
}else{name=camel;
name=name in cache?[name]:(name.match(rnotwhite)||[])
}}i=name.length;
while(i--){delete cache[name[i]]
}}},hasData:function(owner){return !jQuery.isEmptyObject(this.cache[owner[this.expando]]||{})
},discard:function(owner){if(owner[this.expando]){delete this.cache[owner[this.expando]]
}}};
var data_priv=new Data();
var data_user=new Data();
var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/([A-Z])/g;
function dataAttr(elem,key,data){var name;
if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$1").toLowerCase();
data=elem.getAttribute(name);
if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data
}catch(e){}data_user.set(elem,key,data)
}else{data=undefined
}}return data
}jQuery.extend({hasData:function(elem){return data_user.hasData(elem)||data_priv.hasData(elem)
},data:function(elem,name,data){return data_user.access(elem,name,data)
},removeData:function(elem,name){data_user.remove(elem,name)
},_data:function(elem,name,data){return data_priv.access(elem,name,data)
},_removeData:function(elem,name){data_priv.remove(elem,name)
}});
jQuery.fn.extend({data:function(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;
if(key===undefined){if(this.length){data=data_user.get(elem);
if(elem.nodeType===1&&!data_priv.get(elem,"hasDataAttrs")){i=attrs.length;
while(i--){if(attrs[i]){name=attrs[i].name;
if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));
dataAttr(elem,name,data[name])
}}}data_priv.set(elem,"hasDataAttrs",true)
}}return data
}if(typeof key==="object"){return this.each(function(){data_user.set(this,key)
})
}return access(this,function(value){var data,camelKey=jQuery.camelCase(key);
if(elem&&value===undefined){data=data_user.get(elem,key);
if(data!==undefined){return data
}data=data_user.get(elem,camelKey);
if(data!==undefined){return data
}data=dataAttr(elem,camelKey,undefined);
if(data!==undefined){return data
}return
}this.each(function(){var data=data_user.get(this,camelKey);
data_user.set(this,camelKey,value);
if(key.indexOf("-")!==-1&&data!==undefined){data_user.set(this,key,value)
}})
},null,value,arguments.length>1,null,true)
},removeData:function(key){return this.each(function(){data_user.remove(this,key)
})
}});
jQuery.extend({queue:function(elem,type,data){var queue;
if(elem){type=(type||"fx")+"queue";
queue=data_priv.get(elem,type);
if(data){if(!queue||jQuery.isArray(data)){queue=data_priv.access(elem,type,jQuery.makeArray(data))
}else{queue.push(data)
}}return queue||[]
}},dequeue:function(elem,type){type=type||"fx";
var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type)
};
if(fn==="inprogress"){fn=queue.shift();
startLength--
}if(fn){if(type==="fx"){queue.unshift("inprogress")
}delete hooks.stop;
fn.call(elem,next,hooks)
}if(!startLength&&hooks){hooks.empty.fire()
}},_queueHooks:function(elem,type){var key=type+"queueHooks";
return data_priv.get(elem,key)||data_priv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){data_priv.remove(elem,[type+"queue",key])
})})
}});
jQuery.fn.extend({queue:function(type,data){var setter=2;
if(typeof type!=="string"){data=type;
type="fx";
setter--
}if(arguments.length<setter){return jQuery.queue(this[0],type)
}return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);
jQuery._queueHooks(this,type);
if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type)
}})
},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type)
})
},clearQueue:function(type){return this.queue(type||"fx",[])
},promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!(--count)){defer.resolveWith(elements,[elements])
}};
if(typeof type!=="string"){obj=type;
type=undefined
}type=type||"fx";
while(i--){tmp=data_priv.get(elements[i],type+"queueHooks");
if(tmp&&tmp.empty){count++;
tmp.empty.add(resolve)
}}resolve();
return defer.promise(obj)
}});
var pnum=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
var cssExpand=["Top","Right","Bottom","Left"];
var isHidden=function(elem,el){elem=el||elem;
return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem)
};
var rcheckableType=(/^(?:checkbox|radio)$/i);
(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");
input.setAttribute("type","radio");
input.setAttribute("checked","checked");
input.setAttribute("name","t");
div.appendChild(input);
support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;
div.innerHTML="<textarea>x</textarea>";
support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue
})();
var strundefined=typeof undefined;
support.focusinBubbles="onfocusin" in window;
var rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu)|click/,rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,rtypenamespace=/^([^.]*)(?:\.(.+)|)$/;
function returnTrue(){return true
}function returnFalse(){return false
}function safeActiveElement(){try{return document.activeElement
}catch(err){}}jQuery.event={global:{},add:function(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=data_priv.get(elem);
if(!elemData){return
}if(handler.handler){handleObjIn=handler;
handler=handleObjIn.handler;
selector=handleObjIn.selector
}if(!handler.guid){handler.guid=jQuery.guid++
}if(!(events=elemData.events)){events=elemData.events={}
}if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){return typeof jQuery!==strundefined&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined
}
}types=(types||"").match(rnotwhite)||[""];
t=types.length;
while(t--){tmp=rtypenamespace.exec(types[t])||[];
type=origType=tmp[1];
namespaces=(tmp[2]||"").split(".").sort();
if(!type){continue
}special=jQuery.event.special[type]||{};
type=(selector?special.delegateType:special.bindType)||type;
special=jQuery.event.special[type]||{};
handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);
if(!(handlers=events[type])){handlers=events[type]=[];
handlers.delegateCount=0;
if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle,false)
}}}if(special.add){special.add.call(elem,handleObj);
if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid
}}if(selector){handlers.splice(handlers.delegateCount++,0,handleObj)
}else{handlers.push(handleObj)
}jQuery.event.global[type]=true
}},remove:function(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=data_priv.hasData(elem)&&data_priv.get(elem);
if(!elemData||!(events=elemData.events)){return
}types=(types||"").match(rnotwhite)||[""];
t=types.length;
while(t--){tmp=rtypenamespace.exec(types[t])||[];
type=origType=tmp[1];
namespaces=(tmp[2]||"").split(".").sort();
if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true)
}continue
}special=jQuery.event.special[type]||{};
type=(selector?special.delegateType:special.bindType)||type;
handlers=events[type]||[];
tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");
origCount=j=handlers.length;
while(j--){handleObj=handlers[j];
if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);
if(handleObj.selector){handlers.delegateCount--
}if(special.remove){special.remove.call(elem,handleObj)
}}}if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle)
}delete events[type]
}}if(jQuery.isEmptyObject(events)){delete elemData.handle;
data_priv.remove(elem,"events")
}},trigger:function(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];
cur=tmp=elem=elem||document;
if(elem.nodeType===3||elem.nodeType===8){return
}if(rfocusMorph.test(type+jQuery.event.triggered)){return
}if(type.indexOf(".")>=0){namespaces=type.split(".");
type=namespaces.shift();
namespaces.sort()
}ontype=type.indexOf(":")<0&&"on"+type;
event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);
event.isTrigger=onlyHandlers?2:3;
event.namespace=namespaces.join(".");
event.namespace_re=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
event.result=undefined;
if(!event.target){event.target=elem
}data=data==null?[event]:jQuery.makeArray(data,[event]);
special=jQuery.event.special[type]||{};
if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return
}if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;
if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode
}for(;
cur;
cur=cur.parentNode){eventPath.push(cur);
tmp=cur
}if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window)
}}i=0;
while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;
handle=(data_priv.get(cur,"events")||{})[event.type]&&data_priv.get(cur,"handle");
if(handle){handle.apply(cur,data)
}handle=ontype&&cur[ontype];
if(handle&&handle.apply&&jQuery.acceptData(cur)){event.result=handle.apply(cur,data);
if(event.result===false){event.preventDefault()
}}}event.type=type;
if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&jQuery.acceptData(elem)){if(ontype&&jQuery.isFunction(elem[type])&&!jQuery.isWindow(elem)){tmp=elem[ontype];
if(tmp){elem[ontype]=null
}jQuery.event.triggered=type;
elem[type]();
jQuery.event.triggered=undefined;
if(tmp){elem[ontype]=tmp
}}}}return event.result
},dispatch:function(event){event=jQuery.event.fix(event);
var i,j,ret,matched,handleObj,handlerQueue=[],args=slice.call(arguments),handlers=(data_priv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};
args[0]=event;
event.delegateTarget=this;
if(special.preDispatch&&special.preDispatch.call(this,event)===false){return
}handlerQueue=jQuery.event.handlers.call(this,event,handlers);
i=0;
while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;
j=0;
while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){if(!event.namespace_re||event.namespace_re.test(handleObj.namespace)){event.handleObj=handleObj;
event.data=handleObj.data;
ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);
if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();
event.stopPropagation()
}}}}}if(special.postDispatch){special.postDispatch.call(this,event)
}return event.result
},handlers:function(event,handlers){var i,matches,sel,handleObj,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;
if(delegateCount&&cur.nodeType&&(!event.button||event.type!=="click")){for(;
cur!==this;
cur=cur.parentNode||this){if(cur.disabled!==true||event.type!=="click"){matches=[];
for(i=0;
i<delegateCount;
i++){handleObj=handlers[i];
sel=handleObj.selector+" ";
if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>=0:jQuery.find(sel,this,null,[cur]).length
}if(matches[sel]){matches.push(handleObj)
}}if(matches.length){handlerQueue.push({elem:cur,handlers:matches})
}}}}if(delegateCount<handlers.length){handlerQueue.push({elem:this,handlers:handlers.slice(delegateCount)})
}return handlerQueue
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(event,original){if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode
}return event
}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(event,original){var eventDoc,doc,body,button=original.button;
if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;
doc=eventDoc.documentElement;
body=eventDoc.body;
event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);
event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0)
}if(!event.which&&button!==undefined){event.which=(button&1?1:(button&2?3:(button&4?2:0)))
}return event
}},fix:function(event){if(event[jQuery.expando]){return event
}var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];
if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{}
}copy=fixHook.props?this.props.concat(fixHook.props):this.props;
event=new jQuery.Event(originalEvent);
i=copy.length;
while(i--){prop=copy[i];
event[prop]=originalEvent[prop]
}if(!event.target){event.target=document
}if(event.target.nodeType===3){event.target=event.target.parentNode
}return fixHook.filter?fixHook.filter(event,originalEvent):event
},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==safeActiveElement()&&this.focus){this.focus();
return false
}},delegateType:"focusin"},blur:{trigger:function(){if(this===safeActiveElement()&&this.blur){this.blur();
return false
}},delegateType:"focusout"},click:{trigger:function(){if(this.type==="checkbox"&&this.click&&jQuery.nodeName(this,"input")){this.click();
return false
}},_default:function(event){return jQuery.nodeName(event.target,"a")
}},beforeunload:{postDispatch:function(event){if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result
}}}},simulate:function(type,elem,event,bubble){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true,originalEvent:{}});
if(bubble){jQuery.event.trigger(e,null,elem)
}else{jQuery.event.dispatch.call(elem,e)
}if(e.isDefaultPrevented()){event.preventDefault()
}}};
jQuery.removeEvent=function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle,false)
}};
jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props)
}if(src&&src.type){this.originalEvent=src;
this.type=src.type;
this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&src.returnValue===false?returnTrue:returnFalse
}else{this.type=src
}if(props){jQuery.extend(this,props)
}this.timeStamp=src&&src.timeStamp||jQuery.now();
this[jQuery.expando]=true
};
jQuery.Event.prototype={isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:function(){var e=this.originalEvent;
this.isDefaultPrevented=returnTrue;
if(e&&e.preventDefault){e.preventDefault()
}},stopPropagation:function(){var e=this.originalEvent;
this.isPropagationStopped=returnTrue;
if(e&&e.stopPropagation){e.stopPropagation()
}},stopImmediatePropagation:function(){var e=this.originalEvent;
this.isImmediatePropagationStopped=returnTrue;
if(e&&e.stopImmediatePropagation){e.stopImmediatePropagation()
}this.stopPropagation()
}};
jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;
if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;
ret=handleObj.handler.apply(this,arguments);
event.type=fix
}return ret
}}
});
if(!support.focusinBubbles){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event),true)
};
jQuery.event.special[fix]={setup:function(){var doc=this.ownerDocument||this,attaches=data_priv.access(doc,fix);
if(!attaches){doc.addEventListener(orig,handler,true)
}data_priv.access(doc,fix,(attaches||0)+1)
},teardown:function(){var doc=this.ownerDocument||this,attaches=data_priv.access(doc,fix)-1;
if(!attaches){doc.removeEventListener(orig,handler,true);
data_priv.remove(doc,fix)
}else{data_priv.access(doc,fix,attaches)
}}}
})
}jQuery.fn.extend({on:function(types,selector,data,fn,one){var origFn,type;
if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;
selector=undefined
}for(type in types){this.on(type,selector,data,types[type],one)
}return this
}if(data==null&&fn==null){fn=selector;
data=selector=undefined
}else{if(fn==null){if(typeof selector==="string"){fn=data;
data=undefined
}else{fn=data;
data=selector;
selector=undefined
}}}if(fn===false){fn=returnFalse
}else{if(!fn){return this
}}if(one===1){origFn=fn;
fn=function(event){jQuery().off(event);
return origFn.apply(this,arguments)
};
fn.guid=origFn.guid||(origFn.guid=jQuery.guid++)
}return this.each(function(){jQuery.event.add(this,types,fn,data,selector)
})
},one:function(types,selector,data,fn){return this.on(types,selector,data,fn,1)
},off:function(types,selector,fn){var handleObj,type;
if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;
jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);
return this
}if(typeof types==="object"){for(type in types){this.off(type,selector,types[type])
}return this
}if(selector===false||typeof selector==="function"){fn=selector;
selector=undefined
}if(fn===false){fn=returnFalse
}return this.each(function(){jQuery.event.remove(this,types,fn,selector)
})
},trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this)
})
},triggerHandler:function(type,data){var elem=this[0];
if(elem){return jQuery.event.trigger(type,data,elem,true)
}}});
var rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,rtagName=/<([\w:]+)/,rhtml=/<|&#?\w+;/,rnoInnerhtml=/<(?:script|style|link)/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/^$|\/(?:java|ecma)script/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,wrapMap={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
wrapMap.optgroup=wrapMap.option;
wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;
wrapMap.th=wrapMap.td;
function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody")):elem
}function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;
return elem
}function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);
if(match){elem.type=match[1]
}else{elem.removeAttribute("type")
}return elem
}function setGlobalEval(elems,refElements){var i=0,l=elems.length;
for(;
i<l;
i++){data_priv.set(elems[i],"globalEval",!refElements||data_priv.get(refElements[i],"globalEval"))
}}function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;
if(dest.nodeType!==1){return
}if(data_priv.hasData(src)){pdataOld=data_priv.access(src);
pdataCur=data_priv.set(dest,pdataOld);
events=pdataOld.events;
if(events){delete pdataCur.handle;
pdataCur.events={};
for(type in events){for(i=0,l=events[type].length;
i<l;
i++){jQuery.event.add(dest,type,events[type][i])
}}}}if(data_user.hasData(src)){udataOld=data_user.access(src);
udataCur=jQuery.extend({},udataOld);
data_user.set(dest,udataCur)
}}function getAll(context,tag){var ret=context.getElementsByTagName?context.getElementsByTagName(tag||"*"):context.querySelectorAll?context.querySelectorAll(tag||"*"):[];
return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],ret):ret
}function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();
if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked
}else{if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue
}}}jQuery.extend({clone:function(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.contains(elem.ownerDocument,elem);
if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){destElements=getAll(clone);
srcElements=getAll(elem);
for(i=0,l=srcElements.length;
i<l;
i++){fixInput(srcElements[i],destElements[i])
}}if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);
destElements=destElements||getAll(clone);
for(i=0,l=srcElements.length;
i<l;
i++){cloneCopyEvent(srcElements[i],destElements[i])
}}else{cloneCopyEvent(elem,clone)
}}destElements=getAll(clone,"script");
if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"))
}return clone
},buildFragment:function(elems,context,scripts,selection){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;
for(;
i<l;
i++){elem=elems[i];
if(elem||elem===0){if(jQuery.type(elem)==="object"){jQuery.merge(nodes,elem.nodeType?[elem]:elem)
}else{if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem))
}else{tmp=tmp||fragment.appendChild(context.createElement("div"));
tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();
wrap=wrapMap[tag]||wrapMap._default;
tmp.innerHTML=wrap[1]+elem.replace(rxhtmlTag,"<$1></$2>")+wrap[2];
j=wrap[0];
while(j--){tmp=tmp.lastChild
}jQuery.merge(nodes,tmp.childNodes);
tmp=fragment.firstChild;
tmp.textContent=""
}}}}fragment.textContent="";
i=0;
while((elem=nodes[i++])){if(selection&&jQuery.inArray(elem,selection)!==-1){continue
}contains=jQuery.contains(elem.ownerDocument,elem);
tmp=getAll(fragment.appendChild(elem),"script");
if(contains){setGlobalEval(tmp)
}if(scripts){j=0;
while((elem=tmp[j++])){if(rscriptType.test(elem.type||"")){scripts.push(elem)
}}}}return fragment
},cleanData:function(elems){var data,elem,type,key,special=jQuery.event.special,i=0;
for(;
(elem=elems[i])!==undefined;
i++){if(jQuery.acceptData(elem)){key=elem[data_priv.expando];
if(key&&(data=data_priv.cache[key])){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type)
}else{jQuery.removeEvent(elem,type,data.handle)
}}}if(data_priv.cache[key]){delete data_priv.cache[key]
}}}delete data_user.cache[elem[data_user.expando]]
}}});
jQuery.fn.extend({text:function(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value
}})
},null,value,arguments.length)
},append:function(){return this.domManip(arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);
target.appendChild(elem)
}})
},prepend:function(){return this.domManip(arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);
target.insertBefore(elem,target.firstChild)
}})
},before:function(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this)
}})
},after:function(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling)
}})
},remove:function(selector,keepData){var elem,elems=selector?jQuery.filter(selector,this):this,i=0;
for(;
(elem=elems[i])!=null;
i++){if(!keepData&&elem.nodeType===1){jQuery.cleanData(getAll(elem))
}if(elem.parentNode){if(keepData&&jQuery.contains(elem.ownerDocument,elem)){setGlobalEval(getAll(elem,"script"))
}elem.parentNode.removeChild(elem)
}}return this
},empty:function(){var elem,i=0;
for(;
(elem=this[i])!=null;
i++){if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));
elem.textContent=""
}}return this
},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;
deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;
return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents)
})
},html:function(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;
if(value===undefined&&elem.nodeType===1){return elem.innerHTML
}if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=value.replace(rxhtmlTag,"<$1></$2>");
try{for(;
i<l;
i++){elem=this[i]||{};
if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));
elem.innerHTML=value
}}elem=0
}catch(e){}}if(elem){this.empty().append(value)
}},null,value,arguments.length)
},replaceWith:function(){var arg=arguments[0];
this.domManip(arguments,function(elem){arg=this.parentNode;
jQuery.cleanData(getAll(this));
if(arg){arg.replaceChild(elem,this)
}});
return arg&&(arg.length||arg.nodeType)?this:this.remove()
},detach:function(selector){return this.remove(selector,true)
},domManip:function(args,callback){args=concat.apply([],args);
var fragment,first,scripts,hasScripts,node,doc,i=0,l=this.length,set=this,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);
if(isFunction||(l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value))){return this.each(function(index){var self=set.eq(index);
if(isFunction){args[0]=value.call(this,index,self.html())
}self.domManip(args,callback)
})
}if(l){fragment=jQuery.buildFragment(args,this[0].ownerDocument,false,this);
first=fragment.firstChild;
if(fragment.childNodes.length===1){fragment=first
}if(first){scripts=jQuery.map(getAll(fragment,"script"),disableScript);
hasScripts=scripts.length;
for(;
i<l;
i++){node=fragment;
if(i!==iNoClone){node=jQuery.clone(node,true,true);
if(hasScripts){jQuery.merge(scripts,getAll(node,"script"))
}}callback.call(this[i],node,i)
}if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;
jQuery.map(scripts,restoreScript);
for(i=0;
i<hasScripts;
i++){node=scripts[i];
if(rscriptType.test(node.type||"")&&!data_priv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){if(jQuery._evalUrl){jQuery._evalUrl(node.src)
}}else{jQuery.globalEval(node.textContent.replace(rcleanScript,""))
}}}}}}return this
}});
jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;
for(;
i<=last;
i++){elems=i===last?this:this.clone(true);
jQuery(insert[i])[original](elems);
push.apply(ret,elems.get())
}return this.pushStack(ret)
}
});
var iframe,elemdisplay={};
function actualDisplay(name,doc){var style,elem=jQuery(doc.createElement(name)).appendTo(doc.body),display=window.getDefaultComputedStyle&&(style=window.getDefaultComputedStyle(elem[0]))?style.display:jQuery.css(elem[0],"display");
elem.detach();
return display
}function defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];
if(!display){display=actualDisplay(nodeName,doc);
if(display==="none"||!display){iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);
doc=iframe[0].contentDocument;
doc.write();
doc.close();
display=actualDisplay(nodeName,doc);
iframe.detach()
}elemdisplay[nodeName]=display
}return display
}var rmargin=(/^margin/);
var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");
var getStyles=function(elem){if(elem.ownerDocument.defaultView.opener){return elem.ownerDocument.defaultView.getComputedStyle(elem,null)
}return window.getComputedStyle(elem,null)
};
function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;
computed=computed||getStyles(elem);
if(computed){ret=computed.getPropertyValue(name)||computed[name]
}if(computed){if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name)
}if(rnumnonpx.test(ret)&&rmargin.test(name)){width=style.width;
minWidth=style.minWidth;
maxWidth=style.maxWidth;
style.minWidth=style.maxWidth=style.width=ret;
ret=computed.width;
style.width=width;
style.minWidth=minWidth;
style.maxWidth=maxWidth
}}return ret!==undefined?ret+"":ret
}function addGetHookIf(conditionFn,hookFn){return{get:function(){if(conditionFn()){delete this.get;
return
}return(this.get=hookFn).apply(this,arguments)
}}
}(function(){var pixelPositionVal,boxSizingReliableVal,docElem=document.documentElement,container=document.createElement("div"),div=document.createElement("div");
if(!div.style){return
}div.style.backgroundClip="content-box";
div.cloneNode(true).style.backgroundClip="";
support.clearCloneStyle=div.style.backgroundClip==="content-box";
container.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute";
container.appendChild(div);
function computePixelPositionAndBoxSizingReliable(){div.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
div.innerHTML="";
docElem.appendChild(container);
var divStyle=window.getComputedStyle(div,null);
pixelPositionVal=divStyle.top!=="1%";
boxSizingReliableVal=divStyle.width==="4px";
docElem.removeChild(container)
}if(window.getComputedStyle){jQuery.extend(support,{pixelPosition:function(){computePixelPositionAndBoxSizingReliable();
return pixelPositionVal
},boxSizingReliable:function(){if(boxSizingReliableVal==null){computePixelPositionAndBoxSizingReliable()
}return boxSizingReliableVal
},reliableMarginRight:function(){var ret,marginDiv=div.appendChild(document.createElement("div"));
marginDiv.style.cssText=div.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
marginDiv.style.marginRight=marginDiv.style.width="0";
div.style.width="1px";
docElem.appendChild(container);
ret=!parseFloat(window.getComputedStyle(marginDiv,null).marginRight);
docElem.removeChild(container);
div.removeChild(marginDiv);
return ret
}})
}})();
jQuery.swap=function(elem,options,callback,args){var ret,name,old={};
for(name in options){old[name]=elem.style[name];
elem.style[name]=options[name]
}ret=callback.apply(elem,args||[]);
for(name in options){elem.style[name]=old[name]
}return ret
};
var rdisplayswap=/^(none|table(?!-c[ea]).+)/,rnumsplit=new RegExp("^("+pnum+")(.*)$","i"),rrelNum=new RegExp("^([+-])=("+pnum+")","i"),cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","O","Moz","ms"];
function vendorPropName(style,name){if(name in style){return name
}var capName=name[0].toUpperCase()+name.slice(1),origName=name,i=cssPrefixes.length;
while(i--){name=cssPrefixes[i]+capName;
if(name in style){return name
}}return origName
}function setPositiveNumber(elem,value,subtract){var matches=rnumsplit.exec(value);
return matches?Math.max(0,matches[1]-(subtract||0))+(matches[2]||"px"):value
}function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")?4:name==="width"?1:0,val=0;
for(;
i<4;
i+=2){if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles)
}if(isBorderBox){if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles)
}if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles)
}}else{val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);
if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles)
}}}return val
}function getWidthOrHeight(elem,name,extra){var valueIsBorderBox=true,val=name==="width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";
if(val<=0||val==null){val=curCSS(elem,name,styles);
if(val<0||val==null){val=elem.style[name]
}if(rnumnonpx.test(val)){return val
}valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]);
val=parseFloat(val)||0
}return(val+augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles))+"px"
}function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;
for(;
index<length;
index++){elem=elements[index];
if(!elem.style){continue
}values[index]=data_priv.get(elem,"olddisplay");
display=elem.style.display;
if(show){if(!values[index]&&display==="none"){elem.style.display=""
}if(elem.style.display===""&&isHidden(elem)){values[index]=data_priv.access(elem,"olddisplay",defaultDisplay(elem.nodeName))
}}else{hidden=isHidden(elem);
if(display!=="none"||!hidden){data_priv.set(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"))
}}}for(index=0;
index<length;
index++){elem=elements[index];
if(!elem.style){continue
}if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none"
}}return elements
}jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity");
return ret===""?"1":ret
}}}},cssNumber:{columnCount:true,fillOpacity:true,flexGrow:true,flexShrink:true,fontWeight:true,lineHeight:true,opacity:true,order:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":"cssFloat"},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return
}var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;
name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(style,origName));
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];
if(value!==undefined){type=typeof value;
if(type==="string"&&(ret=rrelNum.exec(value))){value=(ret[1]+1)*ret[2]+parseFloat(jQuery.css(elem,name));
type="number"
}if(value==null||value!==value){return
}if(type==="number"&&!jQuery.cssNumber[origName]){value+="px"
}if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit"
}if(!hooks||!("set" in hooks)||(value=hooks.set(elem,value,extra))!==undefined){style[name]=value
}}else{if(hooks&&"get" in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret
}return style[name]
}},css:function(elem,name,extra,styles){var val,num,hooks,origName=jQuery.camelCase(name);
name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(elem.style,origName));
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];
if(hooks&&"get" in hooks){val=hooks.get(elem,true,extra)
}if(val===undefined){val=curCSS(elem,name,styles)
}if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name]
}if(extra===""||extra){num=parseFloat(val);
return extra===true||jQuery.isNumeric(num)?num||0:val
}return val
}});
jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){if(computed){return rdisplayswap.test(jQuery.css(elem,"display"))&&elem.offsetWidth===0?jQuery.swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra)
}):getWidthOrHeight(elem,name,extra)
}},set:function(elem,value,extra){var styles=extra&&getStyles(elem);
return setPositiveNumber(elem,value,extra?augmentWidthOrHeight(elem,name,extra,jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles):0)
}}
});
jQuery.cssHooks.marginRight=addGetHookIf(support.reliableMarginRight,function(elem,computed){if(computed){return jQuery.swap(elem,{display:"inline-block"},curCSS,[elem,"marginRight"])
}});
jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i=0,expanded={},parts=typeof value==="string"?value.split(" "):[value];
for(;
i<4;
i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0]
}return expanded
}};
if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber
}});
jQuery.fn.extend({css:function(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;
if(jQuery.isArray(name)){styles=getStyles(elem);
len=name.length;
for(;
i<len;
i++){map[name[i]]=jQuery.css(elem,name[i],false,styles)
}return map
}return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name)
},name,value,arguments.length>1)
},show:function(){return showHide(this,true)
},hide:function(){return showHide(this)
},toggle:function(state){if(typeof state==="boolean"){return state?this.show():this.hide()
}return this.each(function(){if(isHidden(this)){jQuery(this).show()
}else{jQuery(this).hide()
}})
}});
function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing)
}jQuery.Tween=Tween;
Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;
this.prop=prop;
this.easing=easing||"swing";
this.options=options;
this.start=this.now=this.cur();
this.end=end;
this.unit=unit||(jQuery.cssNumber[prop]?"":"px")
},cur:function(){var hooks=Tween.propHooks[this.prop];
return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this)
},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];
if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration)
}else{this.pos=eased=percent
}this.now=(this.end-this.start)*eased+this.start;
if(this.options.step){this.options.step.call(this.elem,this.now,this)
}if(hooks&&hooks.set){hooks.set(this)
}else{Tween.propHooks._default.set(this)
}return this
}};
Tween.prototype.init.prototype=Tween.prototype;
Tween.propHooks={_default:{get:function(tween){var result;
if(tween.elem[tween.prop]!=null&&(!tween.elem.style||tween.elem.style[tween.prop]==null)){return tween.elem[tween.prop]
}result=jQuery.css(tween.elem,tween.prop,"");
return !result||result==="auto"?0:result
},set:function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween)
}else{if(tween.elem.style&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit)
}else{tween.elem[tween.prop]=tween.now
}}}}};
Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now
}}};
jQuery.easing={linear:function(p){return p
},swing:function(p){return 0.5-Math.cos(p*Math.PI)/2
}};
jQuery.fx=Tween.prototype.init;
jQuery.fx.step={};
var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i"),rrun=/queueHooks$/,animationPrefilters=[defaultPrefilter],tweeners={"*":[function(prop,value){var tween=this.createTween(prop,value),target=tween.cur(),parts=rfxnum.exec(value),unit=parts&&parts[3]||(jQuery.cssNumber[prop]?"":"px"),start=(jQuery.cssNumber[prop]||unit!=="px"&&+target)&&rfxnum.exec(jQuery.css(tween.elem,prop)),scale=1,maxIterations=20;
if(start&&start[3]!==unit){unit=unit||start[3];
parts=parts||[];
start=+target||1;
do{scale=scale||".5";
start=start/scale;
jQuery.style(tween.elem,prop,start+unit)
}while(scale!==(scale=tween.cur()/target)&&scale!==1&&--maxIterations)
}if(parts){start=tween.start=+start||+target||0;
tween.unit=unit;
tween.end=parts[1]?start+(parts[1]+1)*parts[2]:+parts[2]
}return tween
}]};
function createFxNow(){setTimeout(function(){fxNow=undefined
});
return(fxNow=jQuery.now())
}function genFx(type,includeWidth){var which,i=0,attrs={height:type};
includeWidth=includeWidth?1:0;
for(;
i<4;
i+=2-includeWidth){which=cssExpand[i];
attrs["margin"+which]=attrs["padding"+which]=type
}if(includeWidth){attrs.opacity=attrs.width=type
}return attrs
}function createTween(value,prop,animation){var tween,collection=(tweeners[prop]||[]).concat(tweeners["*"]),index=0,length=collection.length;
for(;
index<length;
index++){if((tween=collection[index].call(animation,prop,value))){return tween
}}}function defaultPrefilter(elem,props,opts){var prop,value,toggle,tween,hooks,oldfire,display,checkDisplay,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHidden(elem),dataShow=data_priv.get(elem,"fxshow");
if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");
if(hooks.unqueued==null){hooks.unqueued=0;
oldfire=hooks.empty.fire;
hooks.empty.fire=function(){if(!hooks.unqueued){oldfire()
}}
}hooks.unqueued++;
anim.always(function(){anim.always(function(){hooks.unqueued--;
if(!jQuery.queue(elem,"fx").length){hooks.empty.fire()
}})
})
}if(elem.nodeType===1&&("height" in props||"width" in props)){opts.overflow=[style.overflow,style.overflowX,style.overflowY];
display=jQuery.css(elem,"display");
checkDisplay=display==="none"?data_priv.get(elem,"olddisplay")||defaultDisplay(elem.nodeName):display;
if(checkDisplay==="inline"&&jQuery.css(elem,"float")==="none"){style.display="inline-block"
}}if(opts.overflow){style.overflow="hidden";
anim.always(function(){style.overflow=opts.overflow[0];
style.overflowX=opts.overflow[1];
style.overflowY=opts.overflow[2]
})
}for(prop in props){value=props[prop];
if(rfxtypes.exec(value)){delete props[prop];
toggle=toggle||value==="toggle";
if(value===(hidden?"hide":"show")){if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true
}else{continue
}}orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop)
}else{display=undefined
}}if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden" in dataShow){hidden=dataShow.hidden
}}else{dataShow=data_priv.access(elem,"fxshow",{})
}if(toggle){dataShow.hidden=!hidden
}if(hidden){jQuery(elem).show()
}else{anim.done(function(){jQuery(elem).hide()
})
}anim.done(function(){var prop;
data_priv.remove(elem,"fxshow");
for(prop in orig){jQuery.style(elem,prop,orig[prop])
}});
for(prop in orig){tween=createTween(hidden?dataShow[prop]:0,prop,anim);
if(!(prop in dataShow)){dataShow[prop]=tween.start;
if(hidden){tween.end=tween.start;
tween.start=prop==="width"||prop==="height"?1:0
}}}}else{if((display==="none"?defaultDisplay(elem.nodeName):display)==="inline"){style.display=display
}}}function propFilter(props,specialEasing){var index,name,easing,value,hooks;
for(index in props){name=jQuery.camelCase(index);
easing=specialEasing[name];
value=props[index];
if(jQuery.isArray(value)){easing=value[1];
value=props[index]=value[0]
}if(index!==name){props[name]=value;
delete props[index]
}hooks=jQuery.cssHooks[name];
if(hooks&&"expand" in hooks){value=hooks.expand(value);
delete props[name];
for(index in value){if(!(index in props)){props[index]=value[index];
specialEasing[index]=easing
}}}else{specialEasing[name]=easing
}}}function Animation(elem,properties,options){var result,stopped,index=0,length=animationPrefilters.length,deferred=jQuery.Deferred().always(function(){delete tick.elem
}),tick=function(){if(stopped){return false
}var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;
for(;
index<length;
index++){animation.tweens[index].run(percent)
}deferred.notifyWith(elem,[animation,percent,remaining]);
if(percent<1&&length){return remaining
}else{deferred.resolveWith(elem,[animation]);
return false
}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{}},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);
animation.tweens.push(tween);
return tween
},stop:function(gotoEnd){var index=0,length=gotoEnd?animation.tweens.length:0;
if(stopped){return this
}stopped=true;
for(;
index<length;
index++){animation.tweens[index].run(1)
}if(gotoEnd){deferred.resolveWith(elem,[animation,gotoEnd])
}else{deferred.rejectWith(elem,[animation,gotoEnd])
}return this
}}),props=animation.props;
propFilter(props,animation.opts.specialEasing);
for(;
index<length;
index++){result=animationPrefilters[index].call(animation,elem,props,animation.opts);
if(result){return result
}}jQuery.map(props,createTween,animation);
if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation)
}jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));
return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always)
}jQuery.Animation=jQuery.extend(Animation,{tweener:function(props,callback){if(jQuery.isFunction(props)){callback=props;
props=["*"]
}else{props=props.split(" ")
}var prop,index=0,length=props.length;
for(;
index<length;
index++){prop=props[index];
tweeners[prop]=tweeners[prop]||[];
tweeners[prop].unshift(callback)
}},prefilter:function(callback,prepend){if(prepend){animationPrefilters.unshift(callback)
}else{animationPrefilters.push(callback)
}}});
jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};
opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;
if(opt.queue==null||opt.queue===true){opt.queue="fx"
}opt.old=opt.complete;
opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this)
}if(opt.queue){jQuery.dequeue(this,opt.queue)
}};
return opt
};
jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){return this.filter(isHidden).css("opacity",0).show().end().animate({opacity:to},speed,easing,callback)
},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){var anim=Animation(this,jQuery.extend({},prop),optall);
if(empty||data_priv.get(this,"finish")){anim.stop(true)
}};
doAnimation.finish=doAnimation;
return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation)
},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;
delete hooks.stop;
stop(gotoEnd)
};
if(typeof type!=="string"){gotoEnd=clearQueue;
clearQueue=type;
type=undefined
}if(clearQueue&&type!==false){this.queue(type||"fx",[])
}return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=data_priv.get(this);
if(index){if(data[index]&&data[index].stop){stopQueue(data[index])
}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index])
}}}for(index=timers.length;
index--;
){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);
dequeue=false;
timers.splice(index,1)
}}if(dequeue||!gotoEnd){jQuery.dequeue(this,type)
}})
},finish:function(type){if(type!==false){type=type||"fx"
}return this.each(function(){var index,data=data_priv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;
data.finish=true;
jQuery.queue(this,type,[]);
if(hooks&&hooks.stop){hooks.stop.call(this,true)
}for(index=timers.length;
index--;
){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);
timers.splice(index,1)
}}for(index=0;
index<length;
index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this)
}}delete data.finish
})
}});
jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];
jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback)
}
});
jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback)
}
});
jQuery.timers=[];
jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;
fxNow=jQuery.now();
for(;
i<timers.length;
i++){timer=timers[i];
if(!timer()&&timers[i]===timer){timers.splice(i--,1)
}}if(!timers.length){jQuery.fx.stop()
}fxNow=undefined
};
jQuery.fx.timer=function(timer){jQuery.timers.push(timer);
if(timer()){jQuery.fx.start()
}else{jQuery.timers.pop()
}};
jQuery.fx.interval=13;
jQuery.fx.start=function(){if(!timerId){timerId=setInterval(jQuery.fx.tick,jQuery.fx.interval)
}};
jQuery.fx.stop=function(){clearInterval(timerId);
timerId=null
};
jQuery.fx.speeds={slow:600,fast:200,_default:400};
jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;
type=type||"fx";
return this.queue(type,function(next,hooks){var timeout=setTimeout(next,time);
hooks.stop=function(){clearTimeout(timeout)
}
})
};
(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));
input.type="checkbox";
support.checkOn=input.value!=="";
support.optSelected=opt.selected;
select.disabled=true;
support.optDisabled=!opt.disabled;
input=document.createElement("input");
input.value="t";
input.type="radio";
support.radioValue=input.value==="t"
})();
var nodeHook,boolHook,attrHandle=jQuery.expr.attrHandle;
jQuery.fn.extend({attr:function(name,value){return access(this,jQuery.attr,name,value,arguments.length>1)
},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name)
})
}});
jQuery.extend({attr:function(elem,name,value){var hooks,ret,nType=elem.nodeType;
if(!elem||nType===3||nType===8||nType===2){return
}if(typeof elem.getAttribute===strundefined){return jQuery.prop(elem,name,value)
}if(nType!==1||!jQuery.isXMLDoc(elem)){name=name.toLowerCase();
hooks=jQuery.attrHooks[name]||(jQuery.expr.match.bool.test(name)?boolHook:nodeHook)
}if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name)
}else{if(hooks&&"set" in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret
}else{elem.setAttribute(name,value+"");
return value
}}}else{if(hooks&&"get" in hooks&&(ret=hooks.get(elem,name))!==null){return ret
}else{ret=jQuery.find.attr(elem,name);
return ret==null?undefined:ret
}}},removeAttr:function(elem,value){var name,propName,i=0,attrNames=value&&value.match(rnotwhite);
if(attrNames&&elem.nodeType===1){while((name=attrNames[i++])){propName=jQuery.propFix[name]||name;
if(jQuery.expr.match.bool.test(name)){elem[propName]=false
}elem.removeAttribute(name)
}}},attrHooks:{type:{set:function(elem,value){if(!support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;
elem.setAttribute("type",value);
if(val){elem.value=val
}return value
}}}}});
boolHook={set:function(elem,value,name){if(value===false){jQuery.removeAttr(elem,name)
}else{elem.setAttribute(name,name)
}return name
}};
jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;
attrHandle[name]=function(elem,name,isXML){var ret,handle;
if(!isXML){handle=attrHandle[name];
attrHandle[name]=ret;
ret=getter(elem,name,isXML)!=null?name.toLowerCase():null;
attrHandle[name]=handle
}return ret
}
});
var rfocusable=/^(?:input|select|textarea|button)$/i;
jQuery.fn.extend({prop:function(name,value){return access(this,jQuery.prop,name,value,arguments.length>1)
},removeProp:function(name){return this.each(function(){delete this[jQuery.propFix[name]||name]
})
}});
jQuery.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(elem,name,value){var ret,hooks,notxml,nType=elem.nodeType;
if(!elem||nType===3||nType===8||nType===2){return
}notxml=nType!==1||!jQuery.isXMLDoc(elem);
if(notxml){name=jQuery.propFix[name]||name;
hooks=jQuery.propHooks[name]
}if(value!==undefined){return hooks&&"set" in hooks&&(ret=hooks.set(elem,value,name))!==undefined?ret:(elem[name]=value)
}else{return hooks&&"get" in hooks&&(ret=hooks.get(elem,name))!==null?ret:elem[name]
}},propHooks:{tabIndex:{get:function(elem){return elem.hasAttribute("tabindex")||rfocusable.test(elem.nodeName)||elem.href?elem.tabIndex:-1
}}}});
if(!support.optSelected){jQuery.propHooks.selected={get:function(elem){var parent=elem.parentNode;
if(parent&&parent.parentNode){parent.parentNode.selectedIndex
}return null
}}
}jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this
});
var rclass=/[\t\r\n\f]/g;
jQuery.fn.extend({addClass:function(value){var classes,elem,cur,clazz,j,finalValue,proceed=typeof value==="string"&&value,i=0,len=this.length;
if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,this.className))
})
}if(proceed){classes=(value||"").match(rnotwhite)||[];
for(;
i<len;
i++){elem=this[i];
cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):" ");
if(cur){j=0;
while((clazz=classes[j++])){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" "
}}finalValue=jQuery.trim(cur);
if(elem.className!==finalValue){elem.className=finalValue
}}}}return this
},removeClass:function(value){var classes,elem,cur,clazz,j,finalValue,proceed=arguments.length===0||typeof value==="string"&&value,i=0,len=this.length;
if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,this.className))
})
}if(proceed){classes=(value||"").match(rnotwhite)||[];
for(;
i<len;
i++){elem=this[i];
cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):"");
if(cur){j=0;
while((clazz=classes[j++])){while(cur.indexOf(" "+clazz+" ")>=0){cur=cur.replace(" "+clazz+" "," ")
}}finalValue=value?jQuery.trim(cur):"";
if(elem.className!==finalValue){elem.className=finalValue
}}}}return this
},toggleClass:function(value,stateVal){var type=typeof value;
if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value)
}if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,this.className,stateVal),stateVal)
})
}return this.each(function(){if(type==="string"){var className,i=0,self=jQuery(this),classNames=value.match(rnotwhite)||[];
while((className=classNames[i++])){if(self.hasClass(className)){self.removeClass(className)
}else{self.addClass(className)
}}}else{if(type===strundefined||type==="boolean"){if(this.className){data_priv.set(this,"__className__",this.className)
}this.className=this.className||value===false?"":data_priv.get(this,"__className__")||""
}}})
},hasClass:function(selector){var className=" "+selector+" ",i=0,l=this.length;
for(;
i<l;
i++){if(this[i].nodeType===1&&(" "+this[i].className+" ").replace(rclass," ").indexOf(className)>=0){return true
}}return false
}});
var rreturn=/\r/g;
jQuery.fn.extend({val:function(value){var hooks,ret,isFunction,elem=this[0];
if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];
if(hooks&&"get" in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret
}ret=elem.value;
return typeof ret==="string"?ret.replace(rreturn,""):ret==null?"":ret
}return
}isFunction=jQuery.isFunction(value);
return this.each(function(i){var val;
if(this.nodeType!==1){return
}if(isFunction){val=value.call(this,i,jQuery(this).val())
}else{val=value
}if(val==null){val=""
}else{if(typeof val==="number"){val+=""
}else{if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+""
})
}}}hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];
if(!hooks||!("set" in hooks)||hooks.set(this,val,"value")===undefined){this.value=val
}})
}});
jQuery.extend({valHooks:{option:{get:function(elem){var val=jQuery.find.attr(elem,"value");
return val!=null?val:jQuery.trim(jQuery.text(elem))
}},select:{get:function(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0;
for(;
i<max;
i++){option=options[i];
if((option.selected||i===index)&&(support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();
if(one){return value
}values.push(value)
}}return values
},set:function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;
while(i--){option=options[i];
if((option.selected=jQuery.inArray(option.value,values)>=0)){optionSet=true
}}if(!optionSet){elem.selectedIndex=-1
}return values
}}}});
jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(jQuery.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>=0)
}}};
if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value
}
}});
jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name)
}
});
jQuery.fn.extend({hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver)
},bind:function(types,data,fn){return this.on(types,null,data,fn)
},unbind:function(types,fn){return this.off(types,null,fn)
},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn)
},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn)
}});
var nonce=jQuery.now();
var rquery=(/\?/);
jQuery.parseJSON=function(data){return JSON.parse(data+"")
};
jQuery.parseXML=function(data){var xml,tmp;
if(!data||typeof data!=="string"){return null
}try{tmp=new DOMParser();
xml=tmp.parseFromString(data,"text/xml")
}catch(e){xml=undefined
}if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data)
}return xml
};
var rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rurl=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,prefilters={},transports={},allTypes="*/".concat("*"),ajaxLocation=window.location.href,ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[];
function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;
dataTypeExpression="*"
}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite)||[];
if(jQuery.isFunction(func)){while((dataType=dataTypes[i++])){if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";
(structure[dataType]=structure[dataType]||[]).unshift(func)
}else{(structure[dataType]=structure[dataType]||[]).push(func)
}}}}
}function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=(structure===transports);
function inspect(dataType){var selected;
inspected[dataType]=true;
jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);
if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);
inspect(dataTypeOrTransport);
return false
}else{if(seekingTransport){return !(selected=dataTypeOrTransport)
}}});
return selected
}return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*")
}function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};
for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key]
}}if(deep){jQuery.extend(true,target,deep)
}return target
}function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;
while(dataTypes[0]==="*"){dataTypes.shift();
if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type")
}}if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);
break
}}}if(dataTypes[0] in responses){finalDataType=dataTypes[0]
}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;
break
}if(!firstDataType){firstDataType=type
}}finalDataType=finalDataType||firstDataType
}if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType)
}return responses[finalDataType]
}}function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},dataTypes=s.dataTypes.slice();
if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv]
}}current=dataTypes.shift();
while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response
}if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType)
}prev=current;
current=dataTypes.shift();
if(current){if(current==="*"){current=prev
}else{if(prev!=="*"&&prev!==current){conv=converters[prev+" "+current]||converters["* "+current];
if(!conv){for(conv2 in converters){tmp=conv2.split(" ");
if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];
if(conv){if(conv===true){conv=converters[conv2]
}else{if(converters[conv2]!==true){current=tmp[0];
dataTypes.unshift(tmp[1])
}}break
}}}}if(conv!==true){if(conv&&s["throws"]){response=conv(response)
}else{try{response=conv(response)
}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current}
}}}}}}}return{state:"success",data:response}
}jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ajaxLocation,type:"GET",isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(target,settings){return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target)
},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;
url=undefined
}options=options||{};
var transport,cacheURL,responseHeadersString,responseHeaders,timeoutTimer,parts,fireGlobals,i,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},state=0,strAbort="canceled",jqXHR={readyState:0,getResponseHeader:function(key){var match;
if(state===2){if(!responseHeaders){responseHeaders={};
while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()]=match[2]
}}match=responseHeaders[key.toLowerCase()]
}return match==null?null:match
},getAllResponseHeaders:function(){return state===2?responseHeadersString:null
},setRequestHeader:function(name,value){var lname=name.toLowerCase();
if(!state){name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;
requestHeaders[name]=value
}return this
},overrideMimeType:function(type){if(!state){s.mimeType=type
}return this
},statusCode:function(map){var code;
if(map){if(state<2){for(code in map){statusCode[code]=[statusCode[code],map[code]]
}}else{jqXHR.always(map[jqXHR.status])
}}return this
},abort:function(statusText){var finalText=statusText||strAbort;
if(transport){transport.abort(finalText)
}done(0,finalText);
return this
}};
deferred.promise(jqXHR).complete=completeDeferred.add;
jqXHR.success=jqXHR.done;
jqXHR.error=jqXHR.fail;
s.url=((url||s.url||ajaxLocation)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//");
s.type=options.method||options.type||s.method||s.type;
s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(rnotwhite)||[""];
if(s.crossDomain==null){parts=rurl.exec(s.url.toLowerCase());
s.crossDomain=!!(parts&&(parts[1]!==ajaxLocParts[1]||parts[2]!==ajaxLocParts[2]||(parts[3]||(parts[1]==="http:"?"80":"443"))!==(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?"80":"443"))))
}if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional)
}inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);
if(state===2){return jqXHR
}fireGlobals=jQuery.event&&s.global;
if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart")
}s.type=s.type.toUpperCase();
s.hasContent=!rnoContent.test(s.type);
cacheURL=s.url;
if(!s.hasContent){if(s.data){cacheURL=(s.url+=(rquery.test(cacheURL)?"&":"?")+s.data);
delete s.data
}if(s.cache===false){s.url=rts.test(cacheURL)?cacheURL.replace(rts,"$1_="+nonce++):cacheURL+(rquery.test(cacheURL)?"&":"?")+"_="+nonce++
}}if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL])
}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL])
}}if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType)
}jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);
for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i])
}if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){return jqXHR.abort()
}strAbort="abort";
for(i in {success:1,error:1,complete:1}){jqXHR[i](s[i])
}transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);
if(!transport){done(-1,"No Transport")
}else{jqXHR.readyState=1;
if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s])
}if(s.async&&s.timeout>0){timeoutTimer=setTimeout(function(){jqXHR.abort("timeout")
},s.timeout)
}try{state=1;
transport.send(requestHeaders,done)
}catch(e){if(state<2){done(-1,e)
}else{throw e
}}}function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;
if(state===2){return
}state=2;
if(timeoutTimer){clearTimeout(timeoutTimer)
}transport=undefined;
responseHeadersString=headers||"";
jqXHR.readyState=status>0?4:0;
isSuccess=status>=200&&status<300||status===304;
if(responses){response=ajaxHandleResponses(s,jqXHR,responses)
}response=ajaxConvert(s,response,jqXHR,isSuccess);
if(isSuccess){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");
if(modified){jQuery.lastModified[cacheURL]=modified
}modified=jqXHR.getResponseHeader("etag");
if(modified){jQuery.etag[cacheURL]=modified
}}if(status===204||s.type==="HEAD"){statusText="nocontent"
}else{if(status===304){statusText="notmodified"
}else{statusText=response.state;
success=response.data;
error=response.error;
isSuccess=!error
}}}else{error=statusText;
if(status||!statusText){statusText="error";
if(status<0){status=0
}}}jqXHR.status=status;
jqXHR.statusText=(nativeStatusText||statusText)+"";
if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR])
}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error])
}jqXHR.statusCode(statusCode);
statusCode=undefined;
if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error])
}completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);
if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);
if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop")
}}}return jqXHR
},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json")
},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script")
}});
jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;
callback=data;
data=undefined
}return jQuery.ajax({url:url,type:method,dataType:type,data:data,success:callback})
}
});
jQuery._evalUrl=function(url){return jQuery.ajax({url:url,type:"GET",dataType:"script",async:false,global:false,"throws":true})
};
jQuery.fn.extend({wrapAll:function(html){var wrap;
if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i))
})
}if(this[0]){wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){wrap.insertBefore(this[0])
}wrap.map(function(){var elem=this;
while(elem.firstElementChild){elem=elem.firstElementChild
}return elem
}).append(this)
}return this
},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i))
})
}return this.each(function(){var self=jQuery(this),contents=self.contents();
if(contents.length){contents.wrapAll(html)
}else{self.append(html)
}})
},wrap:function(html){var isFunction=jQuery.isFunction(html);
return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html)
})
},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes)
}}).end()
}});
jQuery.expr.filters.hidden=function(elem){return elem.offsetWidth<=0&&elem.offsetHeight<=0
};
jQuery.expr.filters.visible=function(elem){return !jQuery.expr.filters.hidden(elem)
};
var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;
function buildParams(prefix,obj,traditional,add){var name;
if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v)
}else{buildParams(prefix+"["+(typeof v==="object"?i:"")+"]",v,traditional,add)
}})
}else{if(!traditional&&jQuery.type(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add)
}}else{add(prefix,obj)
}}}jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,value){value=jQuery.isFunction(value)?value():(value==null?"":value);
s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value)
};
if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional
}if(jQuery.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value)
})
}else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add)
}}return s.join("&").replace(r20,"+")
};
jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var elements=jQuery.prop(this,"elements");
return elements?jQuery.makeArray(elements):this
}).filter(function(){var type=this.type;
return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type))
}).map(function(i,elem){var val=jQuery(this).val();
return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")}
}):{name:elem.name,value:val.replace(rCRLF,"\r\n")}
}).get()
}});
jQuery.ajaxSettings.xhr=function(){try{return new XMLHttpRequest()
}catch(e){}};
var xhrId=0,xhrCallbacks={},xhrSuccessStatus={0:200,1223:204},xhrSupported=jQuery.ajaxSettings.xhr();
if(window.attachEvent){window.attachEvent("onunload",function(){for(var key in xhrCallbacks){xhrCallbacks[key]()
}})
}support.cors=!!xhrSupported&&("withCredentials" in xhrSupported);
support.ajax=xhrSupported=!!xhrSupported;
jQuery.ajaxTransport(function(options){var callback;
if(support.cors||xhrSupported&&!options.crossDomain){return{send:function(headers,complete){var i,xhr=options.xhr(),id=++xhrId;
xhr.open(options.type,options.url,options.async,options.username,options.password);
if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i]
}}if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType)
}if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest"
}for(i in headers){xhr.setRequestHeader(i,headers[i])
}callback=function(type){return function(){if(callback){delete xhrCallbacks[id];
callback=xhr.onload=xhr.onerror=null;
if(type==="abort"){xhr.abort()
}else{if(type==="error"){complete(xhr.status,xhr.statusText)
}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,typeof xhr.responseText==="string"?{text:xhr.responseText}:undefined,xhr.getAllResponseHeaders())
}}}}
};
xhr.onload=callback();
xhr.onerror=callback("error");
callback=xhrCallbacks[id]=callback("abort");
try{xhr.send(options.hasContent&&options.data||null)
}catch(e){if(callback){throw e
}}},abort:function(){if(callback){callback()
}}}
}});
jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(text){jQuery.globalEval(text);
return text
}}});
jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false
}if(s.crossDomain){s.type="GET"
}});
jQuery.ajaxTransport("script",function(s){if(s.crossDomain){var script,callback;
return{send:function(_,complete){script=jQuery("<script>").prop({async:true,charset:s.scriptCharset,src:s.url}).on("load error",callback=function(evt){script.remove();
callback=null;
if(evt){complete(evt.type==="error"?404:200,evt.type)
}});
document.head.appendChild(script[0])
},abort:function(){if(callback){callback()
}}}
}});
var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;
jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(nonce++));
this[callback]=true;
return callback
}});
jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&!(s.contentType||"").indexOf("application/x-www-form-urlencoded")&&rjsonp.test(s.data)&&"data");
if(jsonProp||s.dataTypes[0]==="jsonp"){callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;
if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName)
}else{if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName
}}s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called")
}return responseContainer[0]
};
s.dataTypes[0]="json";
overwritten=window[callbackName];
window[callbackName]=function(){responseContainer=arguments
};
jqXHR.always(function(){window[callbackName]=overwritten;
if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;
oldCallbacks.push(callbackName)
}if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0])
}responseContainer=overwritten=undefined
});
return"script"
}});
jQuery.parseHTML=function(data,context,keepScripts){if(!data||typeof data!=="string"){return null
}if(typeof context==="boolean"){keepScripts=context;
context=false
}context=context||document;
var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[];
if(parsed){return[context.createElement(parsed[1])]
}parsed=jQuery.buildFragment([data],context,scripts);
if(scripts&&scripts.length){jQuery(scripts).remove()
}return jQuery.merge([],parsed.childNodes)
};
var _load=jQuery.fn.load;
jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments)
}var selector,type,response,self=this,off=url.indexOf(" ");
if(off>=0){selector=jQuery.trim(url.slice(off));
url=url.slice(0,off)
}if(jQuery.isFunction(params)){callback=params;
params=undefined
}else{if(params&&typeof params==="object"){type="POST"
}}if(self.length>0){jQuery.ajax({url:url,type:type,dataType:"html",data:params}).done(function(responseText){response=arguments;
self.html(selector?jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):responseText)
}).complete(callback&&function(jqXHR,status){self.each(callback,response||[jqXHR.responseText,status,jqXHR])
})
}return this
};
jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn)
}
});
jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem
}).length
};
var docElem=window.document.documentElement;
function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9&&elem.defaultView
}jQuery.offset={setOffset:function(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};
if(position==="static"){elem.style.position="relative"
}curOffset=curElem.offset();
curCSSTop=jQuery.css(elem,"top");
curCSSLeft=jQuery.css(elem,"left");
calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;
if(calculatePosition){curPosition=curElem.position();
curTop=curPosition.top;
curLeft=curPosition.left
}else{curTop=parseFloat(curCSSTop)||0;
curLeft=parseFloat(curCSSLeft)||0
}if(jQuery.isFunction(options)){options=options.call(elem,i,curOffset)
}if(options.top!=null){props.top=(options.top-curOffset.top)+curTop
}if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft
}if("using" in options){options.using.call(elem,props)
}else{curElem.css(props)
}}};
jQuery.fn.extend({offset:function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i)
})
}var docElem,win,elem=this[0],box={top:0,left:0},doc=elem&&elem.ownerDocument;
if(!doc){return
}docElem=doc.documentElement;
if(!jQuery.contains(docElem,elem)){return box
}if(typeof elem.getBoundingClientRect!==strundefined){box=elem.getBoundingClientRect()
}win=getWindow(doc);
return{top:box.top+win.pageYOffset-docElem.clientTop,left:box.left+win.pageXOffset-docElem.clientLeft}
},position:function(){if(!this[0]){return
}var offsetParent,offset,elem=this[0],parentOffset={top:0,left:0};
if(jQuery.css(elem,"position")==="fixed"){offset=elem.getBoundingClientRect()
}else{offsetParent=this.offsetParent();
offset=this.offset();
if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset()
}parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true);
parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true)
}return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)}
},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent||docElem;
while(offsetParent&&(!jQuery.nodeName(offsetParent,"html")&&jQuery.css(offsetParent,"position")==="static")){offsetParent=offsetParent.offsetParent
}return offsetParent||docElem
})
}});
jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;
jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win=getWindow(elem);
if(val===undefined){return win?win[prop]:elem[method]
}if(win){win.scrollTo(!top?val:window.pageXOffset,top?val:window.pageYOffset)
}else{elem[method]=val
}},method,val,arguments.length,null)
}
});
jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);
return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed
}})
});
jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");
return access(this,function(elem,type,value){var doc;
if(jQuery.isWindow(elem)){return elem.document.documentElement["client"+name]
}if(elem.nodeType===9){doc=elem.documentElement;
return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name])
}return value===undefined?jQuery.css(elem,type,extra):jQuery.style(elem,type,value,extra)
},type,chainable?margin:undefined,chainable,null)
}
})
});
jQuery.fn.size=function(){return this.length
};
jQuery.fn.andSelf=jQuery.fn.addBack;
if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery
})
}var _jQuery=window.jQuery,_$=window.$;
jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$
}if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery
}return jQuery
};
if(typeof noGlobal===strundefined){window.jQuery=window.$=jQuery
}return jQuery
}));
(function(){var v=this;
var C=v.Backbone;
var g=[];
var E=g.push;
var n=g.slice;
var u=g.splice;
var A;
if(typeof exports!=="undefined"){A=exports
}else{A=v.Backbone={}
}A.VERSION="1.0.0";
var M=v._;
if(!M&&(typeof require!=="undefined")){M=require("underscore")
}A.$=v.jQuery||v.Zepto||v.ender||v.$;
A.noConflict=function(){v.Backbone=C;
return this
};
A.emulateHTTP=false;
A.emulateJSON=false;
var K=A.Events={on:function(N,Q,P){if(!y(this,"on",N,[Q,P])||!Q){return this
}this._events||(this._events={});
var O=this._events[N]||(this._events[N]=[]);
O.push({callback:Q,context:P,ctx:P||this});
return this
},once:function(O,R,P){if(!y(this,"once",O,[R,P])||!R){return this
}var N=this;
var Q=M.once(function(){N.off(O,Q);
R.apply(this,arguments)
});
Q._callback=R;
return this.on(O,Q,P)
},off:function(N,W,O){var U,V,X,T,S,P,R,Q;
if(!this._events||!y(this,"off",N,[W,O])){return this
}if(!N&&!W&&!O){this._events={};
return this
}T=N?[N]:M.keys(this._events);
for(S=0,P=T.length;
S<P;
S++){N=T[S];
if(X=this._events[N]){this._events[N]=U=[];
if(W||O){for(R=0,Q=X.length;
R<Q;
R++){V=X[R];
if((W&&W!==V.callback&&W!==V.callback._callback)||(O&&O!==V.context)){U.push(V)
}}}if(!U.length){delete this._events[N]
}}}return this
},trigger:function(P){if(!this._events){return this
}var O=n.call(arguments,1);
if(!y(this,"trigger",P,O)){return this
}var Q=this._events[P];
var N=this._events.all;
if(Q){b(Q,O)
}if(N){b(N,arguments)
}return this
},stopListening:function(Q,N,S){var O=this._listeners;
if(!O){return this
}var P=!N&&!S;
if(typeof N==="object"){S=this
}if(Q){(O={})[Q._listenerId]=Q
}for(var R in O){O[R].off(N,S,this);
if(P){delete this._listeners[R]
}}return this
}};
var x=/\s+/;
var y=function(U,S,O,R){if(!O){return true
}if(typeof O==="object"){for(var Q in O){U[S].apply(U,[Q,O[Q]].concat(R))
}return false
}if(x.test(O)){var T=O.split(x);
for(var P=0,N=T.length;
P<N;
P++){U[S].apply(U,[T[P]].concat(R))
}return false
}return true
};
var b=function(S,Q){var T,R=-1,P=S.length,O=Q[0],N=Q[1],U=Q[2];
switch(Q.length){case 0:while(++R<P){(T=S[R]).callback.call(T.ctx)
}return;
case 1:while(++R<P){(T=S[R]).callback.call(T.ctx,O)
}return;
case 2:while(++R<P){(T=S[R]).callback.call(T.ctx,O,N)
}return;
case 3:while(++R<P){(T=S[R]).callback.call(T.ctx,O,N,U)
}return;
default:while(++R<P){(T=S[R]).callback.apply(T.ctx,Q)
}}};
var D={listenTo:"on",listenToOnce:"once"};
M.each(D,function(N,O){K[O]=function(R,P,T){var Q=this._listeners||(this._listeners={});
var S=R._listenerId||(R._listenerId=M.uniqueId("l"));
Q[S]=R;
if(typeof P==="object"){T=this
}R[N](P,T,this);
return this
}
});
K.bind=K.on;
K.unbind=K.off;
M.extend(A,K);
var F=A.Model=function(N,P){var Q;
var O=N||{};
P||(P={});
this.cid=M.uniqueId("c");
this.attributes={};
M.extend(this,M.pick(P,G));
if(P.parse){O=this.parse(O,P)||{}
}if(Q=M.result(this,"defaults")){O=M.defaults({},O,Q)
}this.set(O,P);
this.changed={};
this.initialize.apply(this,arguments)
};
var G=["url","urlRoot","collection"];
M.extend(F.prototype,K,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(N){return M.clone(this.attributes)
},sync:function(){return A.sync.apply(this,arguments)
},get:function(N){return this.attributes[N]
},escape:function(N){return M.escape(this.get(N))
},has:function(N){return this.get(N)!=null
},set:function(V,N,Z){var T,W,X,U,S,Y,P,R;
if(V==null){return this
}if(typeof V==="object"){W=V;
Z=N
}else{(W={})[V]=N
}Z||(Z={});
if(!this._validate(W,Z)){return false
}X=Z.unset;
S=Z.silent;
U=[];
Y=this._changing;
this._changing=true;
if(!Y){this._previousAttributes=M.clone(this.attributes);
this.changed={}
}R=this.attributes,P=this._previousAttributes;
if(this.idAttribute in W){this.id=W[this.idAttribute]
}for(T in W){N=W[T];
if(!M.isEqual(R[T],N)){U.push(T)
}if(!M.isEqual(P[T],N)){this.changed[T]=N
}else{delete this.changed[T]
}X?delete R[T]:R[T]=N
}if(!S){if(U.length){this._pending=true
}for(var Q=0,O=U.length;
Q<O;
Q++){this.trigger("change:"+U[Q],this,R[U[Q]],Z)
}}if(Y){return this
}if(!S){while(this._pending){this._pending=false;
this.trigger("change",this,Z)
}}this._pending=false;
this._changing=false;
return this
},unset:function(N,O){return this.set(N,void 0,M.extend({},O,{unset:true}))
},clear:function(O){var N={};
for(var P in this.attributes){N[P]=void 0
}return this.set(N,M.extend({},O,{unset:true}))
},hasChanged:function(N){if(N==null){return !M.isEmpty(this.changed)
}return M.has(this.changed,N)
},changedAttributes:function(P){if(!P){return this.hasChanged()?M.clone(this.changed):false
}var R,Q=false;
var O=this._changing?this._previousAttributes:this.attributes;
for(var N in P){if(M.isEqual(O[N],(R=P[N]))){continue
}(Q||(Q={}))[N]=R
}return Q
},previous:function(N){if(N==null||!this._previousAttributes){return null
}return this._previousAttributes[N]
},previousAttributes:function(){return M.clone(this._previousAttributes)
},fetch:function(O){O=O?M.clone(O):{};
if(O.parse===void 0){O.parse=true
}var N=this;
var P=O.success;
O.success=function(Q){if(!N.set(N.parse(Q,O),O)){return false
}if(P){P(N,Q,O)
}N.trigger("sync",N,Q,O)
};
I(this,O);
return this.sync("read",this,O)
},save:function(R,O,V){var S,N,U,P=this.attributes;
if(R==null||typeof R==="object"){S=R;
V=O
}else{(S={})[R]=O
}if(S&&(!V||!V.wait)&&!this.set(S,V)){return false
}V=M.extend({validate:true},V);
if(!this._validate(S,V)){return false
}if(S&&V.wait){this.attributes=M.extend({},P,S)
}if(V.parse===void 0){V.parse=true
}var Q=this;
var T=V.success;
V.success=function(X){Q.attributes=P;
var W=Q.parse(X,V);
if(V.wait){W=M.extend(S||{},W)
}if(M.isObject(W)&&!Q.set(W,V)){return false
}if(T){T(Q,X,V)
}Q.trigger("sync",Q,X,V)
};
I(this,V);
N=this.isNew()?"create":(V.patch?"patch":"update");
if(N==="patch"){V.attrs=S
}U=this.sync(N,this,V);
if(S&&V.wait){this.attributes=P
}return U
},destroy:function(O){O=O?M.clone(O):{};
var N=this;
var R=O.success;
var P=function(){N.trigger("destroy",N,N.collection,O)
};
O.success=function(S){if(O.wait||N.isNew()){P()
}if(R){R(N,S,O)
}if(!N.isNew()){N.trigger("sync",N,S,O)
}};
if(this.isNew()){O.success();
return false
}I(this,O);
var Q=this.sync("delete",this,O);
if(!O.wait){P()
}return Q
},url:function(){var N=M.result(this,"urlRoot")||M.result(this.collection,"url")||s();
if(this.isNew()){return N
}return N+(N.charAt(N.length-1)==="/"?"":"/")+encodeURIComponent(this.id)
},parse:function(O,N){return O
},clone:function(){return new this.constructor(this.attributes)
},isNew:function(){return this.id==null
},isValid:function(N){return this._validate({},M.extend(N||{},{validate:true}))
},_validate:function(P,O){if(!O.validate||!this.validate){return true
}P=M.extend({},this.attributes,P);
var N=this.validationError=this.validate(P,O)||null;
if(!N){return true
}this.trigger("invalid",this,N,M.extend(O||{},{validationError:N}));
return false
}});
var a=["keys","values","pairs","invert","pick","omit"];
M.each(a,function(N){F.prototype[N]=function(){var O=n.call(arguments);
O.unshift(this.attributes);
return M[N].apply(M,O)
}
});
var c=A.Collection=function(O,N){N||(N={});
if(N.url){this.url=N.url
}if(N.model){this.model=N.model
}if(N.comparator!==void 0){this.comparator=N.comparator
}this._reset();
this.initialize.apply(this,arguments);
if(O){this.reset(O,M.extend({silent:true},N))
}};
var o={add:true,remove:true,merge:true};
var L={add:true,merge:false,remove:false};
M.extend(c.prototype,K,{model:F,initialize:function(){},toJSON:function(N){return this.map(function(O){return O.toJSON(N)
})
},sync:function(){return A.sync.apply(this,arguments)
},add:function(O,N){return this.set(O,M.defaults(N||{},L))
},remove:function(S,Q){S=M.isArray(S)?S.slice():[S];
Q||(Q={});
var R,N,P,O;
for(R=0,N=S.length;
R<N;
R++){O=this.get(S[R]);
if(!O){continue
}delete this._byId[O.id];
delete this._byId[O.cid];
P=this.indexOf(O);
this.models.splice(P,1);
this.length--;
if(!Q.silent){Q.index=P;
O.trigger("remove",O,this,Q)
}this._removeReference(O)
}return this
},set:function(O,aa){aa=M.defaults(aa||{},o);
if(aa.parse){O=this.parse(O,aa)
}if(!M.isArray(O)){O=O?[O]:[]
}var V,R,X,Y,P,W;
var Q=aa.at;
var U=this.comparator&&(Q==null)&&aa.sort!==false;
var S=M.isString(this.comparator)?this.comparator:null;
var Z=[],N=[],T={};
for(V=0,R=O.length;
V<R;
V++){if(!(X=this._prepareModel(O[V],aa))){continue
}if(P=this.get(X)){if(aa.remove){T[P.cid]=true
}if(aa.merge){P.set(X.attributes,aa);
if(U&&!W&&P.hasChanged(S)){W=true
}}}else{if(aa.add){Z.push(X);
X.on("all",this._onModelEvent,this);
this._byId[X.cid]=X;
if(X.id!=null){this._byId[X.id]=X
}}}}if(aa.remove){for(V=0,R=this.length;
V<R;
++V){if(!T[(X=this.models[V]).cid]){N.push(X)
}}if(N.length){this.remove(N,aa)
}}if(Z.length){if(U){W=true
}this.length+=Z.length;
if(Q!=null){u.apply(this.models,[Q,0].concat(Z))
}else{E.apply(this.models,Z)
}}if(W){this.sort({silent:true})
}if(aa.silent){return this
}for(V=0,R=Z.length;
V<R;
V++){(X=Z[V]).trigger("add",X,this,aa)
}if(W){this.trigger("sort",this,aa)
}return this
},reset:function(Q,O){O||(O={});
for(var P=0,N=this.models.length;
P<N;
P++){this._removeReference(this.models[P])
}O.previousModels=this.models;
this._reset();
this.add(Q,M.extend({silent:true},O));
if(!O.silent){this.trigger("reset",this,O)
}return this
},push:function(O,N){O=this._prepareModel(O,N);
this.add(O,M.extend({at:this.length},N));
return O
},pop:function(O){var N=this.at(this.length-1);
this.remove(N,O);
return N
},unshift:function(O,N){O=this._prepareModel(O,N);
this.add(O,M.extend({at:0},N));
return O
},shift:function(O){var N=this.at(0);
this.remove(N,O);
return N
},slice:function(O,N){return this.models.slice(O,N)
},get:function(N){if(N==null){return void 0
}return this._byId[N.id!=null?N.id:N.cid||N]
},at:function(N){return this.models[N]
},where:function(N,O){if(M.isEmpty(N)){return O?void 0:[]
}return this[O?"find":"filter"](function(P){for(var Q in N){if(N[Q]!==P.get(Q)){return false
}}return true
})
},findWhere:function(N){return this.where(N,true)
},sort:function(N){if(!this.comparator){throw new Error("Cannot sort a set without a comparator")
}N||(N={});
if(M.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)
}else{this.models.sort(M.bind(this.comparator,this))
}if(!N.silent){this.trigger("sort",this,N)
}return this
},sortedIndex:function(N,Q,O){Q||(Q=this.comparator);
var P=M.isFunction(Q)?Q:function(R){return R.get(Q)
};
return M.sortedIndex(this.models,N,P,O)
},pluck:function(N){return M.invoke(this.models,"get",N)
},fetch:function(N){N=N?M.clone(N):{};
if(N.parse===void 0){N.parse=true
}var P=N.success;
var O=this;
N.success=function(Q){var R=N.reset?"reset":"set";
O[R](Q,N);
if(P){P(O,Q,N)
}O.trigger("sync",O,Q,N)
};
I(this,N);
return this.sync("read",this,N)
},create:function(O,N){N=N?M.clone(N):{};
if(!(O=this._prepareModel(O,N))){return false
}if(!N.wait){this.add(O,N)
}var Q=this;
var P=N.success;
N.success=function(R){if(N.wait){Q.add(O,N)
}if(P){P(O,R,N)
}};
O.save(null,N);
return O
},parse:function(O,N){return O
},clone:function(){return new this.constructor(this.models)
},_reset:function(){this.length=0;
this.models=[];
this._byId={}
},_prepareModel:function(P,O){if(P instanceof F){if(!P.collection){P.collection=this
}return P
}O||(O={});
O.collection=this;
var N=new this.model(P,O);
if(!N._validate(P,O)){this.trigger("invalid",this,P,O);
return false
}return N
},_removeReference:function(N){if(this===N.collection){delete N.collection
}N.off("all",this._onModelEvent,this)
},_onModelEvent:function(P,O,Q,N){if((P==="add"||P==="remove")&&Q!==this){return
}if(P==="destroy"){this.remove(O,N)
}if(O&&P==="change:"+O.idAttribute){delete this._byId[O.previous(O.idAttribute)];
if(O.id!=null){this._byId[O.id]=O
}}this.trigger.apply(this,arguments)
}});
var z=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];
M.each(z,function(N){c.prototype[N]=function(){var O=n.call(arguments);
O.unshift(this.models);
return M[N].apply(M,O)
}
});
var k=["groupBy","countBy","sortBy"];
M.each(k,function(N){c.prototype[N]=function(Q,O){var P=M.isFunction(Q)?Q:function(R){return R.get(Q)
};
return M[N](this.models,P,O)
}
});
var H=A.View=function(N){this.cid=M.uniqueId("view");
this._configure(N||{});
this._ensureElement();
this.initialize.apply(this,arguments);
this.delegateEvents()
};
var w=/^(\S+)\s*(.*)$/;
var e=["model","collection","el","id","attributes","className","tagName","events"];
M.extend(H.prototype,K,{tagName:"div",$:function(N){return this.$el.find(N)
},initialize:function(){},render:function(){return this
},remove:function(){this.$el.remove();
this.stopListening();
return this
},setElement:function(N,O){if(this.$el){this.undelegateEvents()
}this.$el=N instanceof A.$?N:A.$(N);
this.el=this.$el[0];
if(O!==false){this.delegateEvents()
}return this
},delegateEvents:function(R){if(!(R||(R=M.result(this,"events")))){return this
}this.undelegateEvents();
for(var Q in R){var S=R[Q];
if(!M.isFunction(S)){S=this[R[Q]]
}if(!S){continue
}var P=Q.match(w);
var O=P[1],N=P[2];
S=M.bind(S,this);
O+=".delegateEvents"+this.cid;
if(N===""){this.$el.on(O,S)
}else{this.$el.on(O,N,S)
}}return this
},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);
return this
},_configure:function(N){if(this.options){N=M.extend({},M.result(this,"options"),N)
}M.extend(this,M.pick(N,e));
this.options=N
},_ensureElement:function(){if(!this.el){var N=M.extend({},M.result(this,"attributes"));
if(this.id){N.id=M.result(this,"id")
}if(this.className){N["class"]=M.result(this,"className")
}var O=A.$("<"+M.result(this,"tagName")+">").attr(N);
this.setElement(O,false)
}else{this.setElement(M.result(this,"el"),false)
}}});
A.sync=function(T,O,N){var Q=j[T];
M.defaults(N||(N={}),{emulateHTTP:A.emulateHTTP,emulateJSON:A.emulateJSON});
var S={type:Q,dataType:"json"};
if(!N.url){S.url=M.result(O,"url")||s()
}if(N.data==null&&O&&(T==="create"||T==="update"||T==="patch")){S.contentType="application/json";
S.data=JSON.stringify(N.attrs||O.toJSON(N))
}if(N.emulateJSON){S.contentType="application/x-www-form-urlencoded";
S.data=S.data?{model:S.data}:{}
}if(N.emulateHTTP&&(Q==="PUT"||Q==="DELETE"||Q==="PATCH")){S.type="POST";
if(N.emulateJSON){S.data._method=Q
}var P=N.beforeSend;
N.beforeSend=function(U){U.setRequestHeader("X-HTTP-Method-Override",Q);
if(P){return P.apply(this,arguments)
}}
}if(S.type!=="GET"&&!N.emulateJSON){S.processData=false
}if(S.type==="PATCH"&&window.ActiveXObject&&!(window.external&&window.external.msActiveXFilteringEnabled)){S.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")
}
}var R=N.xhr=A.ajax(M.extend(S,N));
O.trigger("request",O,R,N);
return R
};
var j={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};
A.ajax=function(){return A.$.ajax.apply(A.$,arguments)
};
var p=A.Router=function(N){N||(N={});
if(N.routes){this.routes=N.routes
}this._bindRoutes();
this.initialize.apply(this,arguments)
};
var q=/\((.*?)\)/g;
var t=/(\(\?)?:\w+/g;
var d=/\*\w+/g;
var h=/[\-{}\[\]+?.,\\\^$|#\s]/g;
M.extend(p.prototype,K,{initialize:function(){},route:function(O,P,Q){if(!M.isRegExp(O)){O=this._routeToRegExp(O)
}if(M.isFunction(P)){Q=P;
P=""
}if(!Q){Q=this[P]
}var N=this;
A.history.route(O,function(S){var R=N._extractParameters(O,S);
Q&&Q.apply(N,R);
N.trigger.apply(N,["route:"+P].concat(R));
N.trigger("route",P,R);
A.history.trigger("route",N,P,R)
});
return this
},navigate:function(O,N){A.history.navigate(O,N);
return this
},_bindRoutes:function(){if(!this.routes){return
}this.routes=M.result(this,"routes");
var O,N=M.keys(this.routes);
while((O=N.pop())!=null){this.route(O,this.routes[O])
}},_routeToRegExp:function(N){N=N.replace(h,"\\$&").replace(q,"(?:$1)?").replace(t,function(P,O){return O?P:"([^/]+)"
}).replace(d,"(.*?)");
return new RegExp("^"+N+"$")
},_extractParameters:function(N,O){var P=N.exec(O).slice(1);
return M.map(P,function(Q){return Q?decodeURIComponent(Q):null
})
}});
var i=A.History=function(){this.handlers=[];
M.bindAll(this,"checkUrl");
if(typeof window!=="undefined"){this.location=window.location;
this.history=window.history
}};
var B=/^[#\/]|\s+$/g;
var f=/^\/+|\/+$/g;
var J=/msie [\w.]+/;
var m=/\/$/;
i.started=false;
M.extend(i.prototype,K,{interval:50,getHash:function(O){var N=(O||this).location.href.match(/#(.*)$/);
return N?N[1]:""
},getFragment:function(P,O){if(P==null){if(this._hasPushState||!this._wantsHashChange||O){P=this.location.pathname;
var N=this.root.replace(m,"");
if(!P.indexOf(N)){P=P.substr(N.length)
}}else{P=this.getHash()
}}return P.replace(B,"")
},start:function(P){if(i.started){throw new Error("Backbone.history has already been started")
}i.started=true;
this.options=M.extend({},{root:"/"},this.options,P);
this.root=this.options.root;
this._wantsHashChange=this.options.hashChange!==false;
this._wantsPushState=!!this.options.pushState;
this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);
var O=this.getFragment();
var N=document.documentMode;
var R=(J.exec(navigator.userAgent.toLowerCase())&&(!N||N<=7));
this.root=("/"+this.root+"/").replace(f,"/");
if(R&&this._wantsHashChange){this.iframe=A.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;
this.navigate(O)
}if(this._hasPushState){A.$(window).on("popstate",this.checkUrl)
}else{if(this._wantsHashChange&&("onhashchange" in window)&&!R){A.$(window).on("hashchange",this.checkUrl)
}else{if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)
}}}this.fragment=O;
var S=this.location;
var Q=S.pathname.replace(/[^\/]$/,"$&/")===this.root;
if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!Q){this.fragment=this.getFragment(null,true);
this.location.replace(this.root+this.location.search+"#"+this.fragment);
return true
}else{if(this._wantsPushState&&this._hasPushState&&Q&&S.hash){this.fragment=this.getHash().replace(B,"");
this.history.replaceState({},document.title,this.root+this.fragment+S.search)
}}if(!this.options.silent){return this.loadUrl()
}},stop:function(){A.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);
clearInterval(this._checkUrlInterval);
i.started=false
},route:function(N,O){this.handlers.unshift({route:N,callback:O})
},checkUrl:function(O){var N=this.getFragment();
if(N===this.fragment&&this.iframe){N=this.getFragment(this.getHash(this.iframe))
}if(N===this.fragment){return false
}if(this.iframe){this.navigate(N)
}this.loadUrl()||this.loadUrl(this.getHash())
},loadUrl:function(P){var O=this.fragment=this.getFragment(P);
var N=M.any(this.handlers,function(Q){if(Q.route.test(O)){Q.callback(O);
return true
}});
return N
},navigate:function(P,O){if(!i.started){return false
}if(!O||O===true){O={trigger:O}
}P=this.getFragment(P||"");
if(this.fragment===P){return
}this.fragment=P;
var N=this.root+P;
if(this._hasPushState){this.history[O.replace?"replaceState":"pushState"]({},document.title,N)
}else{if(this._wantsHashChange){this._updateHash(this.location,P,O.replace);
if(this.iframe&&(P!==this.getFragment(this.getHash(this.iframe)))){if(!O.replace){this.iframe.document.open().close()
}this._updateHash(this.iframe.location,P,O.replace)
}}else{return this.location.assign(N)
}}if(O.trigger){this.loadUrl(P)
}},_updateHash:function(N,P,Q){if(Q){var O=N.href.replace(/(javascript:|#).*$/,"");
N.replace(O+"#"+P)
}else{N.hash="#"+P
}}});
A.history=new i;
var l=function(N,P){var O=this;
var R;
if(N&&M.has(N,"constructor")){R=N.constructor
}else{R=function(){return O.apply(this,arguments)
}
}M.extend(R,O,P);
var Q=function(){this.constructor=R
};
Q.prototype=O.prototype;
R.prototype=new Q;
if(N){M.extend(R.prototype,N)
}R.__super__=O.prototype;
return R
};
F.extend=c.extend=p.extend=H.extend=i.extend=l;
var s=function(){throw new Error('A "url" property or function must be specified')
};
var I=function(P,O){var N=O.error;
O.error=function(Q){if(N){N(P,Q,O)
}P.trigger("error",P,Q,O)
}
}
}).call(this);
(function(){var a=Backbone.View.prototype.remove;
_.extend(Backbone.View.prototype,{__render:function(b){var c=_.extend({},b);
c.self=this;
this.$el.html(this.template(_.extend(c,this.__renderData(c))));
return this
},__renderData:function(b){return{}
},render:function(b){if(this.model){return this.__render(this.model.toJSON())
}if(this.collection){return this.__render(this.collection.toJSON())
}this.__render(b||{});
return this
},appendSubView:function(b){if(!this.__subview){this.__subview=[]
}this.__subview.push(b);
return b
},__cleanup:function(){var b;
if(this.__subview){while(b=this.__subview.shift()){b.remove()
}}return this
},remove:function(){this.__cleanup();
return a.call(this)
}})
})();
(function(){var b=this;
var g=g||{};
g.WEBGL_RENDERER=0;
g.CANVAS_RENDERER=1;
g.VERSION="v2.2.7";
g.blendModes={NORMAL:0,ADD:1,MULTIPLY:2,SCREEN:3,OVERLAY:4,DARKEN:5,LIGHTEN:6,COLOR_DODGE:7,COLOR_BURN:8,HARD_LIGHT:9,SOFT_LIGHT:10,DIFFERENCE:11,EXCLUSION:12,HUE:13,SATURATION:14,COLOR:15,LUMINOSITY:16};
g.scaleModes={DEFAULT:0,LINEAR:0,NEAREST:1};
g._UID=0;
if(typeof(Float32Array)!="undefined"){g.Float32Array=Float32Array;
g.Uint16Array=Uint16Array;
g.Uint32Array=Uint32Array;
g.ArrayBuffer=ArrayBuffer
}else{g.Float32Array=Array;
g.Uint16Array=Array
}g.INTERACTION_FREQUENCY=30;
g.AUTO_PREVENT_DEFAULT=true;
g.PI_2=Math.PI*2;
g.RAD_TO_DEG=180/Math.PI;
g.DEG_TO_RAD=Math.PI/180;
g.RETINA_PREFIX="@2x";
g.dontSayHello=false;
g.defaultRenderOptions={view:null,transparent:false,antialias:false,preserveDrawingBuffer:false,resolution:1,clearBeforeRender:true,autoResize:false};
g.sayHello=function(i){if(g.dontSayHello){return
}if(navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var h=["%c %c %c Pixi.js "+g.VERSION+" - "+i+"  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ ","background: #ff66a5","background: #ff66a5","color: #ff66a5; background: #030307;","background: #ff66a5","background: #ffc3dc","background: #ff66a5","color: #ff2424; background: #fff","color: #ff2424; background: #fff","color: #ff2424; background: #fff"];
console.log.apply(console,h)
}else{if(window.console){console.log("Pixi.js "+g.VERSION+" - http://www.pixijs.com/")
}}g.dontSayHello=true
};
g.Point=function(h,i){this.x=h||0;
this.y=i||0
};
g.Point.prototype.clone=function(){return new g.Point(this.x,this.y)
};
g.Point.prototype.set=function(h,i){this.x=h||0;
this.y=i||((i!==0)?this.x:0)
};
g.Point.prototype.constructor=g.Point;
g.Rectangle=function(i,k,j,h){this.x=i||0;
this.y=k||0;
this.width=j||0;
this.height=h||0
};
g.Rectangle.prototype.clone=function(){return new g.Rectangle(this.x,this.y,this.width,this.height)
};
g.Rectangle.prototype.contains=function(h,k){if(this.width<=0||this.height<=0){return false
}var i=this.x;
if(h>=i&&h<=i+this.width){var j=this.y;
if(k>=j&&k<=j+this.height){return true
}}return false
};
g.Rectangle.prototype.constructor=g.Rectangle;
g.EmptyRectangle=new g.Rectangle(0,0,0,0);
g.Polygon=function(k){if(!(k instanceof Array)){k=Array.prototype.slice.call(arguments)
}if(k[0] instanceof g.Point){var l=[];
for(var j=0,h=k.length;
j<h;
j++){l.push(k[j].x,k[j].y)
}k=l
}this.closed=true;
this.points=k
};
g.Polygon.prototype.clone=function(){var h=this.points.slice();
return new g.Polygon(h)
};
g.Polygon.prototype.contains=function(u,t){var m=false;
var h=this.points.length/2;
for(var p=0,o=h-1;
p<h;
o=p++){var s=this.points[p*2],n=this.points[p*2+1],q=this.points[o*2],l=this.points[o*2+1],k=((n>t)!==(l>t))&&(u<(q-s)*(t-n)/(l-n)+s);
if(k){m=!m
}}return m
};
g.Polygon.prototype.constructor=g.Polygon;
g.Circle=function(i,j,h){this.x=i||0;
this.y=j||0;
this.radius=h||0
};
g.Circle.prototype.clone=function(){return new g.Circle(this.x,this.y,this.radius)
};
g.Circle.prototype.contains=function(h,l){if(this.radius<=0){return false
}var k=(this.x-h),j=(this.y-l),i=this.radius*this.radius;
k*=k;
j*=j;
return(k+j<=i)
};
g.Circle.prototype.getBounds=function(){return new g.Rectangle(this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2)
};
g.Circle.prototype.constructor=g.Circle;
g.Ellipse=function(i,k,j,h){this.x=i||0;
this.y=k||0;
this.width=j||0;
this.height=h||0
};
g.Ellipse.prototype.clone=function(){return new g.Ellipse(this.x,this.y,this.width,this.height)
};
g.Ellipse.prototype.contains=function(i,k){if(this.width<=0||this.height<=0){return false
}var j=((i-this.x)/this.width),h=((k-this.y)/this.height);
j*=j;
h*=h;
return(j+h<=1)
};
g.Ellipse.prototype.getBounds=function(){return new g.Rectangle(this.x-this.width,this.y-this.height,this.width,this.height)
};
g.Ellipse.prototype.constructor=g.Ellipse;
g.RoundedRectangle=function(j,l,k,i,h){this.x=j||0;
this.y=l||0;
this.width=k||0;
this.height=i||0;
this.radius=h||20
};
g.RoundedRectangle.prototype.clone=function(){return new g.RoundedRectangle(this.x,this.y,this.width,this.height,this.radius)
};
g.RoundedRectangle.prototype.contains=function(h,k){if(this.width<=0||this.height<=0){return false
}var i=this.x;
if(h>=i&&h<=i+this.width){var j=this.y;
if(k>=j&&k<=j+this.height){return true
}}return false
};
g.RoundedRectangle.prototype.constructor=g.RoundedRectangle;
g.Matrix=function(){this.a=1;
this.b=0;
this.c=0;
this.d=1;
this.tx=0;
this.ty=0
};
g.Matrix.prototype.fromArray=function(h){this.a=h[0];
this.b=h[1];
this.c=h[3];
this.d=h[4];
this.tx=h[2];
this.ty=h[5]
};
g.Matrix.prototype.toArray=function(h){if(!this.array){this.array=new g.Float32Array(9)
}var i=this.array;
if(h){i[0]=this.a;
i[1]=this.b;
i[2]=0;
i[3]=this.c;
i[4]=this.d;
i[5]=0;
i[6]=this.tx;
i[7]=this.ty;
i[8]=1
}else{i[0]=this.a;
i[1]=this.c;
i[2]=this.tx;
i[3]=this.b;
i[4]=this.d;
i[5]=this.ty;
i[6]=0;
i[7]=0;
i[8]=1
}return i
};
g.Matrix.prototype.apply=function(i,h){h=h||new g.Point();
h.x=this.a*i.x+this.c*i.y+this.tx;
h.y=this.b*i.x+this.d*i.y+this.ty;
return h
};
g.Matrix.prototype.applyInverse=function(j,h){h=h||new g.Point();
var i=1/(this.a*this.d+this.c*-this.b);
h.x=this.d*i*j.x+-this.c*i*j.y+(this.ty*this.c-this.tx*this.d)*i;
h.y=this.a*i*j.y+-this.b*i*j.x+(-this.ty*this.a+this.tx*this.b)*i;
return h
};
g.Matrix.prototype.translate=function(h,i){this.tx+=h;
this.ty+=i;
return this
};
g.Matrix.prototype.scale=function(h,i){this.a*=h;
this.d*=i;
this.c*=h;
this.b*=i;
this.tx*=h;
this.ty*=i;
return this
};
g.Matrix.prototype.rotate=function(m){var l=Math.cos(m);
var j=Math.sin(m);
var i=this.a;
var k=this.c;
var h=this.tx;
this.a=i*l-this.b*j;
this.b=i*j+this.b*l;
this.c=k*l-this.d*j;
this.d=k*j+this.d*l;
this.tx=h*l-this.ty*j;
this.ty=h*j+this.ty*l;
return this
};
g.Matrix.prototype.append=function(i){var h=this.a;
var j=this.b;
var k=this.c;
var l=this.d;
this.a=i.a*h+i.b*k;
this.b=i.a*j+i.b*l;
this.c=i.c*h+i.d*k;
this.d=i.c*j+i.d*l;
this.tx=i.tx*h+i.ty*k+this.tx;
this.ty=i.tx*j+i.ty*l+this.ty;
return this
};
g.Matrix.prototype.identity=function(){this.a=1;
this.b=0;
this.c=0;
this.d=1;
this.tx=0;
this.ty=0;
return this
};
g.identityMatrix=new g.Matrix();
g.DisplayObject=function(){this.position=new g.Point();
this.scale=new g.Point(1,1);
this.pivot=new g.Point(0,0);
this.rotation=0;
this.alpha=1;
this.visible=true;
this.hitArea=null;
this.buttonMode=false;
this.renderable=false;
this.parent=null;
this.stage=null;
this.worldAlpha=1;
this._interactive=false;
this.defaultCursor="pointer";
this.worldTransform=new g.Matrix();
this._sr=0;
this._cr=1;
this.filterArea=null;
this._bounds=new g.Rectangle(0,0,1,1);
this._currentBounds=null;
this._mask=null;
this._cacheAsBitmap=false;
this._cacheIsDirty=false
};
g.DisplayObject.prototype.constructor=g.DisplayObject;
Object.defineProperty(g.DisplayObject.prototype,"interactive",{get:function(){return this._interactive
},set:function(h){this._interactive=h;
if(this.stage){this.stage.dirty=true
}}});
Object.defineProperty(g.DisplayObject.prototype,"worldVisible",{get:function(){var h=this;
do{if(!h.visible){return false
}h=h.parent
}while(h);
return true
}});
Object.defineProperty(g.DisplayObject.prototype,"mask",{get:function(){return this._mask
},set:function(h){if(this._mask){this._mask.isMask=false
}this._mask=h;
if(this._mask){this._mask.isMask=true
}}});
Object.defineProperty(g.DisplayObject.prototype,"filters",{get:function(){return this._filters
},set:function(m){if(m){var l=[];
for(var k=0;
k<m.length;
k++){var n=m[k].passes;
for(var h=0;
h<n.length;
h++){l.push(n[h])
}}this._filterBlock={target:this,filterPasses:l}
}this._filters=m
}});
Object.defineProperty(g.DisplayObject.prototype,"cacheAsBitmap",{get:function(){return this._cacheAsBitmap
},set:function(h){if(this._cacheAsBitmap===h){return
}if(h){this._generateCachedSprite()
}else{this._destroyCachedSprite()
}this._cacheAsBitmap=h
}});
g.DisplayObject.prototype.updateTransform=function(){var m=this.parent.worldTransform;
var j=this.worldTransform;
var l,i,o,n,k,h;
if(this.rotation%g.PI_2){if(this.rotation!==this.rotationCache){this.rotationCache=this.rotation;
this._sr=Math.sin(this.rotation);
this._cr=Math.cos(this.rotation)
}l=this._cr*this.scale.x;
i=this._sr*this.scale.x;
o=-this._sr*this.scale.y;
n=this._cr*this.scale.y;
k=this.position.x;
h=this.position.y;
if(this.pivot.x||this.pivot.y){k-=this.pivot.x*l+this.pivot.y*o;
h-=this.pivot.x*i+this.pivot.y*n
}j.a=l*m.a+i*m.c;
j.b=l*m.b+i*m.d;
j.c=o*m.a+n*m.c;
j.d=o*m.b+n*m.d;
j.tx=k*m.a+h*m.c+m.tx;
j.ty=k*m.b+h*m.d+m.ty
}else{l=this.scale.x;
n=this.scale.y;
k=this.position.x-this.pivot.x*l;
h=this.position.y-this.pivot.y*n;
j.a=l*m.a;
j.b=l*m.b;
j.c=n*m.c;
j.d=n*m.d;
j.tx=k*m.a+h*m.c+m.tx;
j.ty=k*m.b+h*m.d+m.ty
}this.worldAlpha=this.alpha*this.parent.worldAlpha
};
g.DisplayObject.prototype.displayObjectUpdateTransform=g.DisplayObject.prototype.updateTransform;
g.DisplayObject.prototype.getBounds=function(h){h=h;
return g.EmptyRectangle
};
g.DisplayObject.prototype.getLocalBounds=function(){return this.getBounds(g.identityMatrix)
};
g.DisplayObject.prototype.setStageReference=function(h){this.stage=h;
if(this._interactive){this.stage.dirty=true
}};
g.DisplayObject.prototype.generateTexture=function(i,j,l){var k=this.getLocalBounds();
var h=new g.RenderTexture(k.width|0,k.height|0,l,j,i);
g.DisplayObject._tempMatrix.tx=-k.x;
g.DisplayObject._tempMatrix.ty=-k.y;
h.render(this,g.DisplayObject._tempMatrix);
return h
};
g.DisplayObject.prototype.updateCache=function(){this._generateCachedSprite()
};
g.DisplayObject.prototype.toGlobal=function(h){this.displayObjectUpdateTransform();
return this.worldTransform.apply(h)
};
g.DisplayObject.prototype.toLocal=function(h,i){if(i){h=i.toGlobal(h)
}this.displayObjectUpdateTransform();
return this.worldTransform.applyInverse(h)
};
g.DisplayObject.prototype._renderCachedSprite=function(h){this._cachedSprite.worldAlpha=this.worldAlpha;
if(h.gl){g.Sprite.prototype._renderWebGL.call(this._cachedSprite,h)
}else{g.Sprite.prototype._renderCanvas.call(this._cachedSprite,h)
}};
g.DisplayObject.prototype._generateCachedSprite=function(){this._cacheAsBitmap=false;
var j=this.getLocalBounds();
if(!this._cachedSprite){var h=new g.RenderTexture(j.width|0,j.height|0);
this._cachedSprite=new g.Sprite(h);
this._cachedSprite.worldTransform=this.worldTransform
}else{this._cachedSprite.texture.resize(j.width|0,j.height|0)
}var i=this._filters;
this._filters=null;
this._cachedSprite.filters=i;
g.DisplayObject._tempMatrix.tx=-j.x;
g.DisplayObject._tempMatrix.ty=-j.y;
this._cachedSprite.texture.render(this,g.DisplayObject._tempMatrix,true);
this._cachedSprite.anchor.x=-(j.x/j.width);
this._cachedSprite.anchor.y=-(j.y/j.height);
this._filters=i;
this._cacheAsBitmap=true
};
g.DisplayObject.prototype._destroyCachedSprite=function(){if(!this._cachedSprite){return
}this._cachedSprite.texture.destroy(true);
this._cachedSprite=null
};
g.DisplayObject.prototype._renderWebGL=function(h){h=h
};
g.DisplayObject.prototype._renderCanvas=function(h){h=h
};
g.DisplayObject._tempMatrix=new g.Matrix();
Object.defineProperty(g.DisplayObject.prototype,"x",{get:function(){return this.position.x
},set:function(h){this.position.x=h
}});
Object.defineProperty(g.DisplayObject.prototype,"y",{get:function(){return this.position.y
},set:function(h){this.position.y=h
}});
g.DisplayObjectContainer=function(){g.DisplayObject.call(this);
this.children=[]
};
g.DisplayObjectContainer.prototype=Object.create(g.DisplayObject.prototype);
g.DisplayObjectContainer.prototype.constructor=g.DisplayObjectContainer;
Object.defineProperty(g.DisplayObjectContainer.prototype,"width",{get:function(){return this.scale.x*this.getLocalBounds().width
},set:function(i){var h=this.getLocalBounds().width;
if(h!==0){this.scale.x=i/h
}else{this.scale.x=1
}this._width=i
}});
Object.defineProperty(g.DisplayObjectContainer.prototype,"height",{get:function(){return this.scale.y*this.getLocalBounds().height
},set:function(i){var h=this.getLocalBounds().height;
if(h!==0){this.scale.y=i/h
}else{this.scale.y=1
}this._height=i
}});
g.DisplayObjectContainer.prototype.addChild=function(h){return this.addChildAt(h,this.children.length)
};
g.DisplayObjectContainer.prototype.addChildAt=function(i,h){if(h>=0&&h<=this.children.length){if(i.parent){i.parent.removeChild(i)
}i.parent=this;
this.children.splice(h,0,i);
if(this.stage){i.setStageReference(this.stage)
}return i
}else{throw new Error(i+"addChildAt: The index "+h+" supplied is out of bounds "+this.children.length)
}};
g.DisplayObjectContainer.prototype.swapChildren=function(k,h){if(k===h){return
}var j=this.getChildIndex(k);
var i=this.getChildIndex(h);
if(j<0||i<0){throw new Error("swapChildren: Both the supplied DisplayObjects must be a child of the caller.")
}this.children[j]=h;
this.children[i]=k
};
g.DisplayObjectContainer.prototype.getChildIndex=function(i){var h=this.children.indexOf(i);
if(h===-1){throw new Error("The supplied DisplayObject must be a child of the caller")
}return h
};
g.DisplayObjectContainer.prototype.setChildIndex=function(j,i){if(i<0||i>=this.children.length){throw new Error("The supplied index is out of bounds")
}var h=this.getChildIndex(j);
this.children.splice(h,1);
this.children.splice(i,0,j)
};
g.DisplayObjectContainer.prototype.getChildAt=function(h){if(h<0||h>=this.children.length){throw new Error("getChildAt: Supplied index "+h+" does not exist in the child list, or the supplied DisplayObject must be a child of the caller")
}return this.children[h]
};
g.DisplayObjectContainer.prototype.removeChild=function(i){var h=this.children.indexOf(i);
if(h===-1){return
}return this.removeChildAt(h)
};
g.DisplayObjectContainer.prototype.removeChildAt=function(h){var i=this.getChildAt(h);
if(this.stage){i.removeStageReference()
}i.parent=undefined;
this.children.splice(h,1);
return i
};
g.DisplayObjectContainer.prototype.removeChildren=function(m,n){var l=m||0;
var h=typeof n==="number"?n:this.children.length;
var j=h-l;
if(j>0&&j<=h){var o=this.children.splice(l,j);
for(var k=0;
k<o.length;
k++){var p=o[k];
if(this.stage){p.removeStageReference()
}p.parent=undefined
}return o
}else{if(j===0&&this.children.length===0){return[]
}else{throw new Error("removeChildren: Range Error, numeric values are outside the acceptable range")
}}};
g.DisplayObjectContainer.prototype.updateTransform=function(){if(!this.visible){return
}this.displayObjectUpdateTransform();
if(this._cacheAsBitmap){return
}for(var k=0,h=this.children.length;
k<h;
k++){this.children[k].updateTransform()
}};
g.DisplayObjectContainer.prototype.displayObjectContainerUpdateTransform=g.DisplayObjectContainer.prototype.updateTransform;
g.DisplayObjectContainer.prototype.getBounds=function(){if(this.children.length===0){return g.EmptyRectangle
}var p=Infinity;
var o=Infinity;
var l=-Infinity;
var k=-Infinity;
var q;
var v;
var u;
var m=false;
for(var t=0,s=this.children.length;
t<s;
t++){var n=this.children[t];
if(!n.visible){continue
}m=true;
q=this.children[t].getBounds();
p=p<q.x?p:q.x;
o=o<q.y?o:q.y;
v=q.width+q.x;
u=q.height+q.y;
l=l>v?l:v;
k=k>u?k:u
}if(!m){return g.EmptyRectangle
}var h=this._bounds;
h.x=p;
h.y=o;
h.width=l-p;
h.height=k-o;
return h
};
g.DisplayObjectContainer.prototype.getLocalBounds=function(){var h=this.worldTransform;
this.worldTransform=g.identityMatrix;
for(var l=0,k=this.children.length;
l<k;
l++){this.children[l].updateTransform()
}var m=this.getBounds();
this.worldTransform=h;
return m
};
g.DisplayObjectContainer.prototype.setStageReference=function(k){this.stage=k;
if(this._interactive){this.stage.dirty=true
}for(var l=0,h=this.children.length;
l<h;
l++){var m=this.children[l];
m.setStageReference(k)
}};
g.DisplayObjectContainer.prototype.removeStageReference=function(){for(var k=0,h=this.children.length;
k<h;
k++){var l=this.children[k];
l.removeStageReference()
}if(this._interactive){this.stage.dirty=true
}this.stage=null
};
g.DisplayObjectContainer.prototype._renderWebGL=function(l){if(!this.visible||this.alpha<=0){return
}if(this._cacheAsBitmap){this._renderCachedSprite(l);
return
}var k,h;
if(this._mask||this._filters){if(this._filters){l.spriteBatch.flush();
l.filterManager.pushFilter(this._filterBlock)
}if(this._mask){l.spriteBatch.stop();
l.maskManager.pushMask(this.mask,l);
l.spriteBatch.start()
}for(k=0,h=this.children.length;
k<h;
k++){this.children[k]._renderWebGL(l)
}l.spriteBatch.stop();
if(this._mask){l.maskManager.popMask(this._mask,l)
}if(this._filters){l.filterManager.popFilter()
}l.spriteBatch.start()
}else{for(k=0,h=this.children.length;
k<h;
k++){this.children[k]._renderWebGL(l)
}}};
g.DisplayObjectContainer.prototype._renderCanvas=function(l){if(this.visible===false||this.alpha===0){return
}if(this._cacheAsBitmap){this._renderCachedSprite(l);
return
}if(this._mask){l.maskManager.pushMask(this._mask,l)
}for(var k=0,h=this.children.length;
k<h;
k++){var m=this.children[k];
m._renderCanvas(l)
}if(this._mask){l.maskManager.popMask(l)
}};
g.Sprite=function(h){g.DisplayObjectContainer.call(this);
this.anchor=new g.Point();
this.texture=h||g.Texture.emptyTexture;
this._width=0;
this._height=0;
this.tint=16777215;
this.blendMode=g.blendModes.NORMAL;
this.shader=null;
if(this.texture.baseTexture.hasLoaded){this.onTextureUpdate()
}else{this.texture.on("update",this.onTextureUpdate.bind(this))
}this.renderable=true
};
g.Sprite.prototype=Object.create(g.DisplayObjectContainer.prototype);
g.Sprite.prototype.constructor=g.Sprite;
Object.defineProperty(g.Sprite.prototype,"width",{get:function(){return this.scale.x*this.texture.frame.width
},set:function(h){this.scale.x=h/this.texture.frame.width;
this._width=h
}});
Object.defineProperty(g.Sprite.prototype,"height",{get:function(){return this.scale.y*this.texture.frame.height
},set:function(h){this.scale.y=h/this.texture.frame.height;
this._height=h
}});
g.Sprite.prototype.setTexture=function(h){this.texture=h;
this.cachedTint=16777215
};
g.Sprite.prototype.onTextureUpdate=function(){if(this._width){this.scale.x=this._width/this.texture.frame.width
}if(this._height){this.scale.y=this._height/this.texture.frame.height
}};
g.Sprite.prototype.getBounds=function(v){var s=this.texture.frame.width;
var q=this.texture.frame.height;
var p=s*(1-this.anchor.x);
var o=s*-this.anchor.x;
var n=q*(1-this.anchor.y);
var m=q*-this.anchor.y;
var t=v||this.worldTransform;
var H=t.a;
var F=t.b;
var D=t.c;
var B=t.d;
var I=t.tx;
var G=t.ty;
var C=-Infinity;
var z=-Infinity;
var E=Infinity;
var A=Infinity;
if(F===0&&D===0){if(H<0){H*=-1
}if(B<0){B*=-1
}E=H*o+I;
C=H*p+I;
A=B*m+G;
z=B*n+G
}else{var y=H*o+D*m+I;
var k=B*m+F*o+G;
var x=H*p+D*m+I;
var j=B*m+F*p+G;
var w=H*p+D*n+I;
var i=B*n+F*p+G;
var u=H*o+D*n+I;
var h=B*n+F*o+G;
E=y<E?y:E;
E=x<E?x:E;
E=w<E?w:E;
E=u<E?u:E;
A=k<A?k:A;
A=j<A?j:A;
A=i<A?i:A;
A=h<A?h:A;
C=y>C?y:C;
C=x>C?x:C;
C=w>C?w:C;
C=u>C?u:C;
z=k>z?k:z;
z=j>z?j:z;
z=i>z?i:z;
z=h>z?h:z
}var l=this._bounds;
l.x=E;
l.width=C-E;
l.y=A;
l.height=z-A;
this._currentBounds=l;
return l
};
g.Sprite.prototype._renderWebGL=function(m){if(!this.visible||this.alpha<=0){return
}var l,k;
if(this._mask||this._filters){var h=m.spriteBatch;
if(this._filters){h.flush();
m.filterManager.pushFilter(this._filterBlock)
}if(this._mask){h.stop();
m.maskManager.pushMask(this.mask,m);
h.start()
}h.render(this);
for(l=0,k=this.children.length;
l<k;
l++){this.children[l]._renderWebGL(m)
}h.stop();
if(this._mask){m.maskManager.popMask(this._mask,m)
}if(this._filters){m.filterManager.popFilter()
}h.start()
}else{m.spriteBatch.render(this);
for(l=0,k=this.children.length;
l<k;
l++){this.children[l]._renderWebGL(m)
}}};
g.Sprite.prototype._renderCanvas=function(o){if(this.visible===false||this.alpha===0||this.texture.crop.width<=0||this.texture.crop.height<=0){return
}if(this.blendMode!==o.currentBlendMode){o.currentBlendMode=this.blendMode;
o.context.globalCompositeOperation=g.blendModesCanvas[o.currentBlendMode]
}if(this._mask){o.maskManager.pushMask(this._mask,o)
}if(this.texture.valid){var m=this.texture.baseTexture.resolution/o.resolution;
o.context.globalAlpha=this.worldAlpha;
if(o.smoothProperty&&o.scaleMode!==this.texture.baseTexture.scaleMode){o.scaleMode=this.texture.baseTexture.scaleMode;
o.context[o.smoothProperty]=(o.scaleMode===g.scaleModes.LINEAR)
}var k=(this.texture.trim)?this.texture.trim.x-this.anchor.x*this.texture.trim.width:this.anchor.x*-this.texture.frame.width;
var h=(this.texture.trim)?this.texture.trim.y-this.anchor.y*this.texture.trim.height:this.anchor.y*-this.texture.frame.height;
if(o.roundPixels){o.context.setTransform(this.worldTransform.a,this.worldTransform.b,this.worldTransform.c,this.worldTransform.d,(this.worldTransform.tx*o.resolution)|0,(this.worldTransform.ty*o.resolution)|0);
k=k|0;
h=h|0
}else{o.context.setTransform(this.worldTransform.a,this.worldTransform.b,this.worldTransform.c,this.worldTransform.d,this.worldTransform.tx*o.resolution,this.worldTransform.ty*o.resolution)
}if(this.tint!==16777215){if(this.cachedTint!==this.tint){this.cachedTint=this.tint;
this.tintedTexture=g.CanvasTinter.getTintedTexture(this,this.tint)
}o.context.drawImage(this.tintedTexture,0,0,this.texture.crop.width,this.texture.crop.height,k/m,h/m,this.texture.crop.width/m,this.texture.crop.height/m)
}else{o.context.drawImage(this.texture.baseTexture.source,this.texture.crop.x,this.texture.crop.y,this.texture.crop.width,this.texture.crop.height,k/m,h/m,this.texture.crop.width/m,this.texture.crop.height/m)
}}for(var n=0,l=this.children.length;
n<l;
n++){this.children[n]._renderCanvas(o)
}if(this._mask){o.maskManager.popMask(o)
}};
g.Sprite.fromFrame=function(i){var h=g.TextureCache[i];
if(!h){throw new Error('The frameId "'+i+'" does not exist in the texture cache'+this)
}return new g.Sprite(h)
};
g.Sprite.fromImage=function(i,h,j){var k=g.Texture.fromImage(i,h,j);
return new g.Sprite(k)
};
g.SpriteBatch=function(h){g.DisplayObjectContainer.call(this);
this.textureThing=h;
this.ready=false
};
g.SpriteBatch.prototype=Object.create(g.DisplayObjectContainer.prototype);
g.SpriteBatch.prototype.constructor=g.SpriteBatch;
g.SpriteBatch.prototype.initWebGL=function(h){this.fastSpriteBatch=new g.WebGLFastSpriteBatch(h);
this.ready=true
};
g.SpriteBatch.prototype.updateTransform=function(){this.displayObjectUpdateTransform()
};
g.SpriteBatch.prototype._renderWebGL=function(h){if(!this.visible||this.alpha<=0||!this.children.length){return
}if(!this.ready){this.initWebGL(h.gl)
}if(this.fastSpriteBatch.gl!==h.gl){this.fastSpriteBatch.setContext(h.gl)
}h.spriteBatch.stop();
h.shaderManager.setShader(h.shaderManager.fastShader);
this.fastSpriteBatch.begin(this,h);
this.fastSpriteBatch.render(this);
h.spriteBatch.start()
};
g.SpriteBatch.prototype._renderCanvas=function(q){if(!this.visible||this.alpha<=0||!this.children.length){return
}var h=q.context;
h.globalAlpha=this.worldAlpha;
this.displayObjectUpdateTransform();
var l=this.worldTransform;
var p=true;
for(var m=0;
m<this.children.length;
m++){var j=this.children[m];
if(!j.visible){continue
}var o=j.texture;
var k=o.frame;
h.globalAlpha=this.worldAlpha*j.alpha;
if(j.rotation%(Math.PI*2)===0){if(p){h.setTransform(l.a,l.b,l.c,l.d,l.tx,l.ty);
p=false
}h.drawImage(o.baseTexture.source,k.x,k.y,k.width,k.height,((j.anchor.x)*(-k.width*j.scale.x)+j.position.x+0.5)|0,((j.anchor.y)*(-k.height*j.scale.y)+j.position.y+0.5)|0,k.width*j.scale.x,k.height*j.scale.y)
}else{if(!p){p=true
}j.displayObjectUpdateTransform();
var n=j.worldTransform;
if(q.roundPixels){h.setTransform(n.a,n.b,n.c,n.d,n.tx|0,n.ty|0)
}else{h.setTransform(n.a,n.b,n.c,n.d,n.tx,n.ty)
}h.drawImage(o.baseTexture.source,k.x,k.y,k.width,k.height,((j.anchor.x)*(-k.width)+0.5)|0,((j.anchor.y)*(-k.height)+0.5)|0,k.width,k.height)
}}};
g.MovieClip=function(h){g.Sprite.call(this,h[0]);
this.textures=h;
this.animationSpeed=1;
this.loop=true;
this.onComplete=null;
this.currentFrame=0;
this.playing=false
};
g.MovieClip.prototype=Object.create(g.Sprite.prototype);
g.MovieClip.prototype.constructor=g.MovieClip;
Object.defineProperty(g.MovieClip.prototype,"totalFrames",{get:function(){return this.textures.length
}});
g.MovieClip.prototype.stop=function(){this.playing=false
};
g.MovieClip.prototype.play=function(){this.playing=true
};
g.MovieClip.prototype.gotoAndStop=function(i){this.playing=false;
this.currentFrame=i;
var h=(this.currentFrame+0.5)|0;
this.setTexture(this.textures[h%this.textures.length])
};
g.MovieClip.prototype.gotoAndPlay=function(h){this.currentFrame=h;
this.playing=true
};
g.MovieClip.prototype.updateTransform=function(){this.displayObjectContainerUpdateTransform();
if(!this.playing){return
}this.currentFrame+=this.animationSpeed;
var h=(this.currentFrame+0.5)|0;
this.currentFrame=this.currentFrame%this.textures.length;
if(this.loop||h<this.textures.length){this.setTexture(this.textures[h%this.textures.length])
}else{if(h>=this.textures.length){this.gotoAndStop(this.textures.length-1);
if(this.onComplete){this.onComplete()
}}}};
g.MovieClip.fromFrames=function(k){var h=[];
for(var j=0;
j<k.length;
j++){h.push(new g.Texture.fromFrame(k[j]))
}return new g.MovieClip(h)
};
g.MovieClip.fromImages=function(j){var h=[];
for(var k=0;
k<j.length;
k++){h.push(new g.Texture.fromImage(j[k]))
}return new g.MovieClip(h)
};
g.FilterBlock=function(){this.visible=true;
this.renderable=true
};
g.FilterBlock.prototype.constructor=g.FilterBlock;
g.Text=function(i,h){this.canvas=document.createElement("canvas");
this.context=this.canvas.getContext("2d");
this.resolution=1;
g.Sprite.call(this,g.Texture.fromCanvas(this.canvas));
this.setText(i);
this.setStyle(h)
};
g.Text.prototype=Object.create(g.Sprite.prototype);
g.Text.prototype.constructor=g.Text;
Object.defineProperty(g.Text.prototype,"width",{get:function(){if(this.dirty){this.updateText();
this.dirty=false
}return this.scale.x*this.texture.frame.width
},set:function(h){this.scale.x=h/this.texture.frame.width;
this._width=h
}});
Object.defineProperty(g.Text.prototype,"height",{get:function(){if(this.dirty){this.updateText();
this.dirty=false
}return this.scale.y*this.texture.frame.height
},set:function(h){this.scale.y=h/this.texture.frame.height;
this._height=h
}});
g.Text.prototype.setStyle=function(h){h=h||{};
h.font=h.font||"bold 20pt Arial";
h.fill=h.fill||"black";
h.align=h.align||"left";
h.stroke=h.stroke||"black";
h.strokeThickness=h.strokeThickness||0;
h.wordWrap=h.wordWrap||false;
h.wordWrapWidth=h.wordWrapWidth||100;
h.dropShadow=h.dropShadow||false;
h.dropShadowAngle=h.dropShadowAngle||Math.PI/6;
h.dropShadowDistance=h.dropShadowDistance||4;
h.dropShadowColor=h.dropShadowColor||"black";
this.style=h;
this.dirty=true
};
g.Text.prototype.setText=function(h){this.text=h.toString()||" ";
this.dirty=true
};
g.Text.prototype.updateText=function(){this.texture.baseTexture.resolution=this.resolution;
this.context.font=this.style.font;
var o=this.text;
if(this.style.wordWrap){o=this.wordWrap(this.text)
}var v=o.split(/(?:\r\n|\r|\n)/);
var n=[];
var w=0;
var k=this.determineFontProperties(this.style.font);
for(var p=0;
p<v.length;
p++){var q=this.context.measureText(v[p]).width;
n[p]=q;
w=Math.max(w,q)
}var l=w+this.style.strokeThickness;
if(this.style.dropShadow){l+=this.style.dropShadowDistance
}this.canvas.width=(l+this.context.lineWidth)*this.resolution;
var t=k.fontSize+this.style.strokeThickness;
var u=t*v.length;
if(this.style.dropShadow){u+=this.style.dropShadowDistance
}this.canvas.height=u*this.resolution;
this.context.scale(this.resolution,this.resolution);
if(navigator.isCocoonJS){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
}this.context.font=this.style.font;
this.context.strokeStyle=this.style.stroke;
this.context.lineWidth=this.style.strokeThickness;
this.context.textBaseline="alphabetic";
var m;
var j;
if(this.style.dropShadow){this.context.fillStyle=this.style.dropShadowColor;
var s=Math.sin(this.style.dropShadowAngle)*this.style.dropShadowDistance;
var h=Math.cos(this.style.dropShadowAngle)*this.style.dropShadowDistance;
for(p=0;
p<v.length;
p++){m=this.style.strokeThickness/2;
j=(this.style.strokeThickness/2+p*t)+k.ascent;
if(this.style.align==="right"){m+=w-n[p]
}else{if(this.style.align==="center"){m+=(w-n[p])/2
}}if(this.style.fill){this.context.fillText(v[p],m+s,j+h)
}}}this.context.fillStyle=this.style.fill;
for(p=0;
p<v.length;
p++){m=this.style.strokeThickness/2;
j=(this.style.strokeThickness/2+p*t)+k.ascent;
if(this.style.align==="right"){m+=w-n[p]
}else{if(this.style.align==="center"){m+=(w-n[p])/2
}}if(this.style.stroke&&this.style.strokeThickness){this.context.strokeText(v[p],m,j)
}if(this.style.fill){this.context.fillText(v[p],m,j)
}}this.updateTexture()
};
g.Text.prototype.updateTexture=function(){this.texture.baseTexture.width=this.canvas.width;
this.texture.baseTexture.height=this.canvas.height;
this.texture.crop.width=this.texture.frame.width=this.canvas.width;
this.texture.crop.height=this.texture.frame.height=this.canvas.height;
this._width=this.canvas.width;
this._height=this.canvas.height;
this.texture.baseTexture.dirty()
};
g.Text.prototype._renderWebGL=function(h){if(this.dirty){this.resolution=h.resolution;
this.updateText();
this.dirty=false
}g.Sprite.prototype._renderWebGL.call(this,h)
};
g.Text.prototype._renderCanvas=function(h){if(this.dirty){this.resolution=h.resolution;
this.updateText();
this.dirty=false
}g.Sprite.prototype._renderCanvas.call(this,h)
};
g.Text.prototype.determineFontProperties=function(o){var s=g.Text.fontPropertiesCache[o];
if(!s){s={};
var l=g.Text.fontPropertiesCanvas;
var k=g.Text.fontPropertiesContext;
k.font=o;
var h=Math.ceil(k.measureText("|Mq").width);
var q=Math.ceil(k.measureText("M").width);
var w=2*q;
q=q*1.4|0;
l.width=h;
l.height=w;
k.fillStyle="#f00";
k.fillRect(0,0,h,w);
k.font=o;
k.textBaseline="alphabetic";
k.fillStyle="#000";
k.fillText("|MÉq",0,q);
var t=k.getImageData(0,0,h,w).data;
var m=t.length;
var x=h*4;
var p,n;
var v=0;
var u=false;
for(p=0;
p<q;
p++){for(n=0;
n<x;
n+=4){if(t[v+n]!==255){u=true;
break
}}if(!u){v+=x
}else{break
}}s.ascent=q-p;
v=m-x;
u=false;
for(p=w;
p>q;
p--){for(n=0;
n<x;
n+=4){if(t[v+n]!==255){u=true;
break
}}if(!u){v-=x
}else{break
}}s.descent=p-q;
s.descent+=6;
s.fontSize=s.ascent+s.descent;
g.Text.fontPropertiesCache[o]=s
}return s
};
g.Text.prototype.wordWrap=function(o){var s="";
var q=o.split("\n");
for(var l=0;
l<q.length;
l++){var k=this.style.wordWrapWidth;
var n=q[l].split(" ");
for(var h=0;
h<n.length;
h++){var p=this.context.measureText(n[h]).width;
var m=p+this.context.measureText(" ").width;
if(h===0||m>k){if(h>0){s+="\n"
}s+=n[h];
k=this.style.wordWrapWidth-p
}else{k-=m;
s+=" "+n[h]
}}if(l<q.length-1){s+="\n"
}}return s
};
g.Text.prototype.getBounds=function(h){if(this.dirty){this.updateText();
this.dirty=false
}return g.Sprite.prototype.getBounds.call(this,h)
};
g.Text.prototype.destroy=function(h){this.context=null;
this.canvas=null;
this.texture.destroy(h===undefined?true:h)
};
g.Text.fontPropertiesCache={};
g.Text.fontPropertiesCanvas=document.createElement("canvas");
g.Text.fontPropertiesContext=g.Text.fontPropertiesCanvas.getContext("2d");
g.BitmapText=function(i,h){g.DisplayObjectContainer.call(this);
this.textWidth=0;
this.textHeight=0;
this._pool=[];
this.setText(i);
this.setStyle(h);
this.updateText();
this.dirty=false
};
g.BitmapText.prototype=Object.create(g.DisplayObjectContainer.prototype);
g.BitmapText.prototype.constructor=g.BitmapText;
g.BitmapText.prototype.setText=function(h){this.text=h||" ";
this.dirty=true
};
g.BitmapText.prototype.setStyle=function(i){i=i||{};
i.align=i.align||"left";
this.style=i;
var h=i.font.split(" ");
this.fontName=h[h.length-1];
this.fontSize=h.length>=2?parseInt(h[h.length-2],10):g.BitmapText.fonts[this.fontName].size;
this.dirty=true;
this.tint=i.tint
};
g.BitmapText.prototype.updateText=function(){var x=g.BitmapText.fonts[this.fontName];
var n=new g.Point();
var o=null;
var s=[];
var t=0;
var A=[];
var q=0;
var y=this.fontSize/x.size;
for(var v=0;
v<this.text.length;
v++){var j=this.text.charCodeAt(v);
if(/(?:\r\n|\r|\n)/.test(this.text.charAt(v))){A.push(n.x);
t=Math.max(t,n.x);
q++;
n.x=0;
n.y+=x.lineHeight;
o=null;
continue
}var h=x.chars[j];
if(!h){continue
}if(o&&h.kerning[o]){n.x+=h.kerning[o]
}s.push({texture:h.texture,line:q,charCode:j,position:new g.Point(n.x+h.xOffset,n.y+h.yOffset)});
n.x+=h.xAdvance;
o=j
}A.push(n.x);
t=Math.max(t,n.x);
var u=[];
for(v=0;
v<=q;
v++){var z=0;
if(this.style.align==="right"){z=t-A[v]
}else{if(this.style.align==="center"){z=(t-A[v])/2
}}u.push(z)
}var k=this.children.length;
var l=s.length;
var p=this.tint||16777215;
for(v=0;
v<l;
v++){var w=v<k?this.children[v]:this._pool.pop();
if(w){w.setTexture(s[v].texture)
}else{w=new g.Sprite(s[v].texture)
}w.position.x=(s[v].position.x+u[s[v].line])*y;
w.position.y=s[v].position.y*y;
w.scale.x=w.scale.y=y;
w.tint=p;
if(!w.parent){this.addChild(w)
}}while(this.children.length>l){var m=this.getChildAt(this.children.length-1);
this._pool.push(m);
this.removeChild(m)
}this.textWidth=t*y;
this.textHeight=(n.y+x.lineHeight)*y
};
g.BitmapText.prototype.updateTransform=function(){if(this.dirty){this.updateText();
this.dirty=false
}g.DisplayObjectContainer.prototype.updateTransform.call(this)
};
g.BitmapText.fonts={};
g.InteractionData=function(){this.global=new g.Point();
this.target=null;
this.originalEvent=null
};
g.InteractionData.prototype.getLocalPosition=function(n,o){var h=n.worldTransform;
var j=this.global;
var m=h.a,l=h.c,k=h.tx,s=h.b,q=h.d,p=h.ty,i=1/(m*q+l*-s);
o=o||new g.Point();
o.x=q*i*j.x+-l*i*j.y+(p*l-k*q)*i;
o.y=m*i*j.y+-s*i*j.x+(-p*m+k*s)*i;
return o
};
g.InteractionData.prototype.constructor=g.InteractionData;
g.InteractionManager=function(h){this.stage=h;
this.mouse=new g.InteractionData();
this.touches={};
this.tempPoint=new g.Point();
this.mouseoverEnabled=true;
this.pool=[];
this.interactiveItems=[];
this.interactionDOMElement=null;
this.onMouseMove=this.onMouseMove.bind(this);
this.onMouseDown=this.onMouseDown.bind(this);
this.onMouseOut=this.onMouseOut.bind(this);
this.onMouseUp=this.onMouseUp.bind(this);
this.onTouchStart=this.onTouchStart.bind(this);
this.onTouchEnd=this.onTouchEnd.bind(this);
this.onTouchCancel=this.onTouchCancel.bind(this);
this.onTouchMove=this.onTouchMove.bind(this);
this.last=0;
this.currentCursorStyle="inherit";
this.mouseOut=false;
this.resolution=1;
this._tempPoint=new g.Point()
};
g.InteractionManager.prototype.constructor=g.InteractionManager;
g.InteractionManager.prototype.collectInteractiveSprite=function(m,h){var k=m.children;
var l=k.length;
for(var j=l-1;
j>=0;
j--){var n=k[j];
if(n._interactive){h.interactiveChildren=true;
this.interactiveItems.push(n);
if(n.children.length>0){this.collectInteractiveSprite(n,n)
}}else{n.__iParent=null;
if(n.children.length>0){this.collectInteractiveSprite(n,h)
}}}};
g.InteractionManager.prototype.setTarget=function(h){this.target=h;
this.resolution=h.resolution;
if(this.interactionDOMElement!==null){return
}this.setTargetDomElement(h.view)
};
g.InteractionManager.prototype.setTargetDomElement=function(h){this.removeEvents();
if(window.navigator.msPointerEnabled){h.style["-ms-content-zooming"]="none";
h.style["-ms-touch-action"]="none"
}this.interactionDOMElement=h;
h.addEventListener("mousemove",this.onMouseMove,true);
h.addEventListener("mousedown",this.onMouseDown,true);
h.addEventListener("mouseout",this.onMouseOut,true);
h.addEventListener("touchstart",this.onTouchStart,true);
h.addEventListener("touchend",this.onTouchEnd,true);
h.addEventListener("touchleave",this.onTouchCancel,true);
h.addEventListener("touchcancel",this.onTouchCancel,true);
h.addEventListener("touchmove",this.onTouchMove,true);
window.addEventListener("mouseup",this.onMouseUp,true)
};
g.InteractionManager.prototype.removeEvents=function(){if(!this.interactionDOMElement){return
}this.interactionDOMElement.style["-ms-content-zooming"]="";
this.interactionDOMElement.style["-ms-touch-action"]="";
this.interactionDOMElement.removeEventListener("mousemove",this.onMouseMove,true);
this.interactionDOMElement.removeEventListener("mousedown",this.onMouseDown,true);
this.interactionDOMElement.removeEventListener("mouseout",this.onMouseOut,true);
this.interactionDOMElement.removeEventListener("touchstart",this.onTouchStart,true);
this.interactionDOMElement.removeEventListener("touchend",this.onTouchEnd,true);
this.interactionDOMElement.removeEventListener("touchleave",this.onTouchCancel,true);
this.interactionDOMElement.removeEventListener("touchcancel",this.onTouchCancel,true);
this.interactionDOMElement.removeEventListener("touchmove",this.onTouchMove,true);
this.interactionDOMElement=null;
window.removeEventListener("mouseup",this.onMouseUp,true)
};
g.InteractionManager.prototype.update=function(){if(!this.target){return
}var h=Date.now();
var n=h-this.last;
n=(n*g.INTERACTION_FREQUENCY)/1000;
if(n<1){return
}this.last=h;
var j=0;
if(this.dirty){this.rebuildInteractiveGraph()
}var l=this.interactiveItems.length;
var o="inherit";
var m=false;
for(j=0;
j<l;
j++){var k=this.interactiveItems[j];
k.__hit=this.hitTest(k,this.mouse);
this.mouse.target=k;
if(k.__hit&&!m){if(k.buttonMode){o=k.defaultCursor
}if(!k.interactiveChildren){m=true
}if(!k.__isOver){if(k.mouseover){k.mouseover(this.mouse)
}k.__isOver=true
}}else{if(k.__isOver){if(k.mouseout){k.mouseout(this.mouse)
}k.__isOver=false
}}}if(this.currentCursorStyle!==o){this.currentCursorStyle=o;
this.interactionDOMElement.style.cursor=o
}};
g.InteractionManager.prototype.rebuildInteractiveGraph=function(){this.dirty=false;
var h=this.interactiveItems.length;
for(var j=0;
j<h;
j++){this.interactiveItems[j].interactiveChildren=false
}this.interactiveItems=[];
if(this.stage.interactive){this.interactiveItems.push(this.stage)
}this.collectInteractiveSprite(this.stage,this.stage)
};
g.InteractionManager.prototype.onMouseMove=function(m){if(this.dirty){this.rebuildInteractiveGraph()
}this.mouse.originalEvent=m;
var l=this.interactionDOMElement.getBoundingClientRect();
this.mouse.global.x=(m.clientX-l.left)*(this.target.width/l.width)/this.resolution;
this.mouse.global.y=(m.clientY-l.top)*(this.target.height/l.height)/this.resolution;
var k=this.interactiveItems.length;
for(var h=0;
h<k;
h++){var j=this.interactiveItems[h];
if(j.mousemove){j.mousemove(this.mouse)
}}};
g.InteractionManager.prototype.onMouseDown=function(h){if(this.dirty){this.rebuildInteractiveGraph()
}this.mouse.originalEvent=h;
if(g.AUTO_PREVENT_DEFAULT){this.mouse.originalEvent.preventDefault()
}var k=this.interactiveItems.length;
var q=this.mouse.originalEvent;
var m=q.button===2||q.which===3;
var l=m?"rightdown":"mousedown";
var j=m?"rightclick":"click";
var n=m?"__rightIsDown":"__mouseIsDown";
var p=m?"__isRightDown":"__isDown";
for(var o=0;
o<k;
o++){var s=this.interactiveItems[o];
if(s[l]||s[j]){s[n]=true;
s.__hit=this.hitTest(s,this.mouse);
if(s.__hit){if(s[l]){s[l](this.mouse)
}s[p]=true;
if(!s.interactiveChildren){break
}}}}};
g.InteractionManager.prototype.onMouseOut=function(l){if(this.dirty){this.rebuildInteractiveGraph()
}this.mouse.originalEvent=l;
var k=this.interactiveItems.length;
this.interactionDOMElement.style.cursor="inherit";
for(var h=0;
h<k;
h++){var j=this.interactiveItems[h];
if(j.__isOver){this.mouse.target=j;
if(j.mouseout){j.mouseout(this.mouse)
}j.__isOver=false
}}this.mouseOut=true;
this.mouse.global.x=-10000;
this.mouse.global.y=-10000
};
g.InteractionManager.prototype.onMouseUp=function(h){if(this.dirty){this.rebuildInteractiveGraph()
}this.mouse.originalEvent=h;
var k=this.interactiveItems.length;
var o=false;
var p=this.mouse.originalEvent;
var l=p.button===2||p.which===3;
var q=l?"rightup":"mouseup";
var j=l?"rightclick":"click";
var t=l?"rightupoutside":"mouseupoutside";
var n=l?"__isRightDown":"__isDown";
for(var m=0;
m<k;
m++){var s=this.interactiveItems[m];
if(s[j]||s[q]||s[t]){s.__hit=this.hitTest(s,this.mouse);
if(s.__hit&&!o){if(s[q]){s[q](this.mouse)
}if(s[n]){if(s[j]){s[j](this.mouse)
}}if(!s.interactiveChildren){o=true
}}else{if(s[n]){if(s[t]){s[t](this.mouse)
}}}s[n]=false
}}};
g.InteractionManager.prototype.hitTest=function(v,t){var k=t.global;
if(!v.worldVisible){return false
}v.worldTransform.applyInverse(k,this._tempPoint);
var s=this._tempPoint.x,p=this._tempPoint.y,o;
t.target=v;
if(v.hitArea&&v.hitArea.contains){return v.hitArea.contains(s,p)
}else{if(v instanceof g.Sprite){var l=v.texture.frame.width;
var u=v.texture.frame.height;
var j=-l*v.anchor.x;
var q;
if(s>j&&s<j+l){q=-u*v.anchor.y;
if(p>q&&p<q+u){return true
}}}else{if(v instanceof g.Graphics){var z=v.graphicsData;
for(o=0;
o<z.length;
o++){var n=z[o];
if(!n.fill){continue
}if(n.shape){if(n.shape.contains(s,p)){return true
}}}}}}var m=v.children.length;
for(o=0;
o<m;
o++){var w=v.children[o];
var h=this.hitTest(w,t);
if(h){t.target=v;
return true
}}return false
};
g.InteractionManager.prototype.onTouchMove=function(q){if(this.dirty){this.rebuildInteractiveGraph()
}var p=this.interactionDOMElement.getBoundingClientRect();
var n=q.changedTouches;
var m;
var l=0;
for(l=0;
l<n.length;
l++){var h=n[l];
m=this.touches[h.identifier];
m.originalEvent=q;
m.global.x=((h.clientX-p.left)*(this.target.width/p.width))/this.resolution;
m.global.y=((h.clientY-p.top)*(this.target.height/p.height))/this.resolution;
if(navigator.isCocoonJS&&!p.left&&!p.top&&!q.target.style.width&&!q.target.style.height){m.global.x=h.clientX;
m.global.y=h.clientY
}for(var k=0;
k<this.interactiveItems.length;
k++){var o=this.interactiveItems[k];
if(o.touchmove&&o.__touchData&&o.__touchData[h.identifier]){o.touchmove(m)
}}}};
g.InteractionManager.prototype.onTouchStart=function(h){if(this.dirty){this.rebuildInteractiveGraph()
}var o=this.interactionDOMElement.getBoundingClientRect();
if(g.AUTO_PREVENT_DEFAULT){h.preventDefault()
}var p=h.changedTouches;
for(var n=0;
n<p.length;
n++){var l=p[n];
var q=this.pool.pop();
if(!q){q=new g.InteractionData()
}q.originalEvent=h;
this.touches[l.identifier]=q;
q.global.x=((l.clientX-o.left)*(this.target.width/o.width))/this.resolution;
q.global.y=((l.clientY-o.top)*(this.target.height/o.height))/this.resolution;
if(navigator.isCocoonJS&&!o.left&&!o.top&&!h.target.style.width&&!h.target.style.height){q.global.x=l.clientX;
q.global.y=l.clientY
}var k=this.interactiveItems.length;
for(var m=0;
m<k;
m++){var s=this.interactiveItems[m];
if(s.touchstart||s.tap){s.__hit=this.hitTest(s,q);
if(s.__hit){if(s.touchstart){s.touchstart(q)
}s.__isDown=true;
s.__touchData=s.__touchData||{};
s.__touchData[l.identifier]=q;
if(!s.interactiveChildren){break
}}}}}};
g.InteractionManager.prototype.onTouchEnd=function(h){if(this.dirty){this.rebuildInteractiveGraph()
}var p=this.interactionDOMElement.getBoundingClientRect();
var q=h.changedTouches;
for(var n=0;
n<q.length;
n++){var l=q[n];
var s=this.touches[l.identifier];
var o=false;
s.global.x=((l.clientX-p.left)*(this.target.width/p.width))/this.resolution;
s.global.y=((l.clientY-p.top)*(this.target.height/p.height))/this.resolution;
if(navigator.isCocoonJS&&!p.left&&!p.top&&!h.target.style.width&&!h.target.style.height){s.global.x=l.clientX;
s.global.y=l.clientY
}var k=this.interactiveItems.length;
for(var m=0;
m<k;
m++){var t=this.interactiveItems[m];
if(t.__touchData&&t.__touchData[l.identifier]){t.__hit=this.hitTest(t,t.__touchData[l.identifier]);
s.originalEvent=h;
if(t.touchend||t.tap){if(t.__hit&&!o){if(t.touchend){t.touchend(s)
}if(t.__isDown&&t.tap){t.tap(s)
}if(!t.interactiveChildren){o=true
}}else{if(t.__isDown&&t.touchendoutside){t.touchendoutside(s)
}}t.__isDown=false
}t.__touchData[l.identifier]=null
}}this.pool.push(s);
this.touches[l.identifier]=null
}};
g.InteractionManager.prototype.onTouchCancel=function(h){if(this.dirty){this.rebuildInteractiveGraph()
}var p=this.interactionDOMElement.getBoundingClientRect();
var q=h.changedTouches;
for(var n=0;
n<q.length;
n++){var l=q[n];
var s=this.touches[l.identifier];
var o=false;
s.global.x=((l.clientX-p.left)*(this.target.width/p.width))/this.resolution;
s.global.y=((l.clientY-p.top)*(this.target.height/p.height))/this.resolution;
if(navigator.isCocoonJS&&!p.left&&!p.top&&!h.target.style.width&&!h.target.style.height){s.global.x=l.clientX;
s.global.y=l.clientY
}var k=this.interactiveItems.length;
for(var m=0;
m<k;
m++){var t=this.interactiveItems[m];
if(t.__touchData&&t.__touchData[l.identifier]){t.__hit=this.hitTest(t,t.__touchData[l.identifier]);
s.originalEvent=h;
if(t.touchcancel&&!o){t.touchcancel(s);
if(!t.interactiveChildren){o=true
}}t.__isDown=false;
t.__touchData[l.identifier]=null
}}this.pool.push(s);
this.touches[l.identifier]=null
}};
g.Stage=function(h){g.DisplayObjectContainer.call(this);
this.worldTransform=new g.Matrix();
this.interactive=true;
this.interactionManager=new g.InteractionManager(this);
this.dirty=true;
this.stage=this;
this.stage.hitArea=new g.Rectangle(0,0,100000,100000);
this.setBackgroundColor(h)
};
g.Stage.prototype=Object.create(g.DisplayObjectContainer.prototype);
g.Stage.prototype.constructor=g.Stage;
g.Stage.prototype.setInteractionDelegate=function(h){this.interactionManager.setTargetDomElement(h)
};
g.Stage.prototype.updateTransform=function(){this.worldAlpha=1;
for(var k=0,h=this.children.length;
k<h;
k++){this.children[k].updateTransform()
}if(this.dirty){this.dirty=false;
this.interactionManager.dirty=true
}if(this.interactive){this.interactionManager.update()
}};
g.Stage.prototype.setBackgroundColor=function(h){this.backgroundColor=h||0;
this.backgroundColorSplit=g.hex2rgb(this.backgroundColor);
var i=this.backgroundColor.toString(16);
i="000000".substr(0,6-i.length)+i;
this.backgroundColorString="#"+i
};
g.Stage.prototype.getMousePosition=function(){return this.interactionManager.mouse.global
};
(function(i){var j=0;
var k=["ms","moz","webkit","o"];
for(var h=0;
h<k.length&&!i.requestAnimationFrame;
++h){i.requestAnimationFrame=i[k[h]+"RequestAnimationFrame"];
i.cancelAnimationFrame=i[k[h]+"CancelAnimationFrame"]||i[k[h]+"CancelRequestAnimationFrame"]
}if(!i.requestAnimationFrame){i.requestAnimationFrame=function(o){var l=new Date().getTime();
var m=Math.max(0,16-(l-j));
var n=i.setTimeout(function(){o(l+m)
},m);
j=l+m;
return n
}
}if(!i.cancelAnimationFrame){i.cancelAnimationFrame=function(l){clearTimeout(l)
}
}i.requestAnimFrame=i.requestAnimationFrame
})(this);
g.hex2rgb=function(h){return[(h>>16&255)/255,(h>>8&255)/255,(h&255)/255]
};
g.rgb2hex=function(h){return((h[0]*255<<16)+(h[1]*255<<8)+h[2]*255)
};
if(typeof Function.prototype.bind!=="function"){Function.prototype.bind=(function(){return function(h){var m=this,j=arguments.length-1,n=[];
if(j>0){n.length=j;
while(j--){n[j]=arguments[j+1]
}}if(typeof m!=="function"){throw new TypeError()
}function k(){var p=arguments.length,o=new Array(p);
while(p--){o[p]=arguments[p]
}o=n.concat(o);
return m.apply(this instanceof k?this:h,o)
}k.prototype=(function l(i){if(i){l.prototype=i
}if(!(this instanceof l)){return new l()
}})(m.prototype);
return k
}
})()
}g.AjaxRequest=function(){var h=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.3.0","Microsoft.XMLHTTP"];
if(window.ActiveXObject){for(var j=0;
j<h.length;
j++){try{return new window.ActiveXObject(h[j])
}catch(k){}}}else{if(window.XMLHttpRequest){return new window.XMLHttpRequest()
}else{return false
}}};
g.canUseNewCanvasBlendModes=function(){if(typeof document==="undefined"){return false
}var h=document.createElement("canvas");
h.width=1;
h.height=1;
var i=h.getContext("2d");
i.fillStyle="#000";
i.fillRect(0,0,1,1);
i.globalCompositeOperation="multiply";
i.fillStyle="#fff";
i.fillRect(0,0,1,1);
return i.getImageData(0,0,1,1).data[0]===0
};
g.getNextPowerOfTwo=function(i){if(i>0&&(i&(i-1))===0){return i
}else{var h=1;
while(h<i){h<<=1
}return h
}};
g.isPowerOfTwo=function(i,h){return(i>0&&(i&(i-1))===0&&h>0&&(h&(h-1))===0)
};
g.EventTarget={call:function e(h){if(h){h=h.prototype||h;
g.EventTarget.mixin(h)
}},mixin:function c(m){m.listeners=function l(o){this._listeners=this._listeners||{};
return this._listeners[o]?this._listeners[o].slice():[]
};
m.emit=m.dispatchEvent=function i(o,u){this._listeners=this._listeners||{};
if(typeof o==="object"){u=o;
o=o.type
}if(!u||u.__isEventObject!==true){u=new g.Event(this,o,u)
}if(this._listeners&&this._listeners[o]){var s=this._listeners[o].slice(0),t=s.length,q=s[0],p;
for(p=0;
p<t;
q=s[++p]){q.call(this,u);
if(u.stoppedImmediate){return this
}}if(u.stopped){return this
}}if(this.parent&&this.parent.emit){this.parent.emit.call(this.parent,o,u)
}return this
};
m.on=m.addEventListener=function h(o,p){this._listeners=this._listeners||{};
(this._listeners[o]=this._listeners[o]||[]).push(p);
return this
};
m.once=function k(p,s){this._listeners=this._listeners||{};
var o=this;
function q(){s.apply(o.off(p,q),arguments)
}q._originalHandler=s;
return this.on(p,q)
};
m.off=m.removeEventListener=function n(o,q){this._listeners=this._listeners||{};
if(!this._listeners[o]){return this
}var s=this._listeners[o],p=q?s.length:0;
while(p-->0){if(s[p]===q||s[p]._originalHandler===q){s.splice(p,1)
}}if(s.length===0){delete this._listeners[o]
}return this
};
m.removeAllListeners=function j(o){this._listeners=this._listeners||{};
if(!this._listeners[o]){return this
}delete this._listeners[o];
return this
}
}};
g.Event=function(j,h,i){this.__isEventObject=true;
this.stopped=false;
this.stoppedImmediate=false;
this.target=j;
this.type=h;
this.data=i;
this.content=i;
this.timeStamp=Date.now()
};
g.Event.prototype.stopPropagation=function a(){this.stopped=true
};
g.Event.prototype.stopImmediatePropagation=function d(){this.stoppedImmediate=true
};
g.autoDetectRenderer=function(j,h,i){if(!j){j=800
}if(!h){h=600
}var k=(function(){try{var l=document.createElement("canvas");
return !!window.WebGLRenderingContext&&(l.getContext("webgl")||l.getContext("experimental-webgl"))
}catch(m){return false
}})();
if(k){return new g.WebGLRenderer(j,h,i)
}return new g.CanvasRenderer(j,h,i)
};
g.autoDetectRecommendedRenderer=function(k,h,i){if(!k){k=800
}if(!h){h=600
}var l=(function(){try{var m=document.createElement("canvas");
return !!window.WebGLRenderingContext&&(m.getContext("webgl")||m.getContext("experimental-webgl"))
}catch(n){return false
}})();
var j=/Android/i.test(navigator.userAgent);
if(l&&!j){return new g.WebGLRenderer(k,h,i)
}return new g.CanvasRenderer(k,h,i)
};
g.PolyK={};
g.PolyK.Triangulate=function(s){var E=true;
var t=s.length>>1;
if(t<3){return[]
}var B=[];
var q=[];
for(var z=0;
z<t;
z++){q.push(z)
}z=0;
var w=t;
while(w>3){var x=q[(z+0)%w];
var v=q[(z+1)%w];
var u=q[(z+2)%w];
var o=s[2*x],l=s[2*x+1];
var C=s[2*v],A=s[2*v+1];
var k=s[2*u],h=s[2*u+1];
var m=false;
if(g.PolyK._convex(o,l,C,A,k,h,E)){m=true;
for(var y=0;
y<w;
y++){var D=q[y];
if(D===x||D===v||D===u){continue
}if(g.PolyK._PointInTriangle(s[2*D],s[2*D+1],o,l,C,A,k,h)){m=false;
break
}}}if(m){B.push(x,v,u);
q.splice((z+1)%w,1);
w--;
z=0
}else{if(z++>3*w){if(E){B=[];
q=[];
for(z=0;
z<t;
z++){q.push(z)
}z=0;
w=t;
E=false
}else{return null
}}}}B.push(q[0],q[1],q[2]);
return B
};
g.PolyK._PointInTriangle=function(y,x,s,q,F,E,n,l){var k=n-s;
var j=l-q;
var p=F-s;
var o=E-q;
var D=y-s;
var B=x-q;
var C=k*k+j*j;
var A=k*p+j*o;
var z=k*D+j*B;
var i=p*p+o*o;
var h=p*D+o*B;
var m=1/(C*i-A*A);
var w=(i*z-A*h)*m;
var t=(C*h-A*z)*m;
return(w>=0)&&(t>=0)&&(w+t<1)
};
g.PolyK._convex=function(k,j,m,l,h,n,i){return((j-l)*(h-m)+(m-k)*(n-l)>=0)===i
};
g.initDefaultShaders=function(){};
g.CompileVertexShader=function(i,h){return g._CompileShader(i,h,i.VERTEX_SHADER)
};
g.CompileFragmentShader=function(i,h){return g._CompileShader(i,h,i.FRAGMENT_SHADER)
};
g._CompileShader=function(l,k,j){var i=k.join("\n");
var h=l.createShader(j);
l.shaderSource(h,i);
l.compileShader(h);
if(!l.getShaderParameter(h,l.COMPILE_STATUS)){window.console.log(l.getShaderInfoLog(h));
return null
}return h
};
g.compileProgram=function(l,h,j){var i=g.CompileFragmentShader(l,j);
var k=g.CompileVertexShader(l,h);
var m=l.createProgram();
l.attachShader(m,k);
l.attachShader(m,i);
l.linkProgram(m);
if(!l.getProgramParameter(m,l.LINK_STATUS)){window.console.log("Could not initialise shaders")
}return m
};
g.PixiShader=function(h){this._UID=g._UID++;
this.gl=h;
this.program=null;
this.fragmentSrc=["precision lowp float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;","}"];
this.textureCount=0;
this.firstRun=true;
this.dirty=true;
this.attributes=[];
this.init()
};
g.PixiShader.prototype.constructor=g.PixiShader;
g.PixiShader.prototype.init=function(){var j=this.gl;
var h=g.compileProgram(j,this.vertexSrc||g.PixiShader.defaultVertexSrc,this.fragmentSrc);
j.useProgram(h);
this.uSampler=j.getUniformLocation(h,"uSampler");
this.projectionVector=j.getUniformLocation(h,"projectionVector");
this.offsetVector=j.getUniformLocation(h,"offsetVector");
this.dimensions=j.getUniformLocation(h,"dimensions");
this.aVertexPosition=j.getAttribLocation(h,"aVertexPosition");
this.aTextureCoord=j.getAttribLocation(h,"aTextureCoord");
this.colorAttribute=j.getAttribLocation(h,"aColor");
if(this.colorAttribute===-1){this.colorAttribute=2
}this.attributes=[this.aVertexPosition,this.aTextureCoord,this.colorAttribute];
for(var i in this.uniforms){this.uniforms[i].uniformLocation=j.getUniformLocation(h,i)
}this.initUniforms();
this.program=h
};
g.PixiShader.prototype.initUniforms=function(){this.textureCount=1;
var k=this.gl;
var h;
for(var i in this.uniforms){h=this.uniforms[i];
var j=h.type;
if(j==="sampler2D"){h._init=false;
if(h.value!==null){this.initSampler2D(h)
}}else{if(j==="mat2"||j==="mat3"||j==="mat4"){h.glMatrix=true;
h.glValueLength=1;
if(j==="mat2"){h.glFunc=k.uniformMatrix2fv
}else{if(j==="mat3"){h.glFunc=k.uniformMatrix3fv
}else{if(j==="mat4"){h.glFunc=k.uniformMatrix4fv
}}}}else{h.glFunc=k["uniform"+j];
if(j==="2f"||j==="2i"){h.glValueLength=2
}else{if(j==="3f"||j==="3i"){h.glValueLength=3
}else{if(j==="4f"||j==="4i"){h.glValueLength=4
}else{h.glValueLength=1
}}}}}}};
g.PixiShader.prototype.initSampler2D=function(j){if(!j.value||!j.value.baseTexture||!j.value.baseTexture.hasLoaded){return
}var o=this.gl;
o.activeTexture(o["TEXTURE"+this.textureCount]);
o.bindTexture(o.TEXTURE_2D,j.value.baseTexture._glTextures[o.id]);
if(j.textureData){var m=j.textureData;
var q=(m.magFilter)?m.magFilter:o.LINEAR;
var i=(m.minFilter)?m.minFilter:o.LINEAR;
var n=(m.wrapS)?m.wrapS:o.CLAMP_TO_EDGE;
var l=(m.wrapT)?m.wrapT:o.CLAMP_TO_EDGE;
var p=(m.luminance)?o.LUMINANCE:o.RGBA;
if(m.repeat){n=o.REPEAT;
l=o.REPEAT
}o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!!m.flipY);
if(m.width){var h=(m.width)?m.width:512;
var s=(m.height)?m.height:2;
var k=(m.border)?m.border:0;
o.texImage2D(o.TEXTURE_2D,0,p,h,s,k,p,o.UNSIGNED_BYTE,null)
}else{o.texImage2D(o.TEXTURE_2D,0,p,o.RGBA,o.UNSIGNED_BYTE,j.value.baseTexture.source)
}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,q);
o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,i);
o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,n);
o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,l)
}o.uniform1i(j.uniformLocation,this.textureCount);
j._init=true;
this.textureCount++
};
g.PixiShader.prototype.syncUniforms=function(){this.textureCount=1;
var h;
var j=this.gl;
for(var i in this.uniforms){h=this.uniforms[i];
if(h.glValueLength===1){if(h.glMatrix===true){h.glFunc.call(j,h.uniformLocation,h.transpose,h.value)
}else{h.glFunc.call(j,h.uniformLocation,h.value)
}}else{if(h.glValueLength===2){h.glFunc.call(j,h.uniformLocation,h.value.x,h.value.y)
}else{if(h.glValueLength===3){h.glFunc.call(j,h.uniformLocation,h.value.x,h.value.y,h.value.z)
}else{if(h.glValueLength===4){h.glFunc.call(j,h.uniformLocation,h.value.x,h.value.y,h.value.z,h.value.w)
}else{if(h.type==="sampler2D"){if(h._init){j.activeTexture(j["TEXTURE"+this.textureCount]);
if(h.value.baseTexture._dirty[j.id]){g.instances[j.id].updateTexture(h.value.baseTexture)
}else{j.bindTexture(j.TEXTURE_2D,h.value.baseTexture._glTextures[j.id])
}j.uniform1i(h.uniformLocation,this.textureCount);
this.textureCount++
}else{this.initSampler2D(h)
}}}}}}}};
g.PixiShader.prototype.destroy=function(){this.gl.deleteProgram(this.program);
this.uniforms=null;
this.gl=null;
this.attributes=null
};
g.PixiShader.defaultVertexSrc=["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute vec4 aColor;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","varying vec2 vTextureCoord;","varying vec4 vColor;","const vec2 center = vec2(-1.0, 1.0);","void main(void) {","   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vColor = vec4(aColor.rgb * aColor.a, aColor.a);","}"];
g.PixiFastShader=function(h){this._UID=g._UID++;
this.gl=h;
this.program=null;
this.fragmentSrc=["precision lowp float;","varying vec2 vTextureCoord;","varying float vColor;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;","}"];
this.vertexSrc=["attribute vec2 aVertexPosition;","attribute vec2 aPositionCoord;","attribute vec2 aScale;","attribute float aRotation;","attribute vec2 aTextureCoord;","attribute float aColor;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","uniform mat3 uMatrix;","varying vec2 vTextureCoord;","varying float vColor;","const vec2 center = vec2(-1.0, 1.0);","void main(void) {","   vec2 v;","   vec2 sv = aVertexPosition * aScale;","   v.x = (sv.x) * cos(aRotation) - (sv.y) * sin(aRotation);","   v.y = (sv.x) * sin(aRotation) + (sv.y) * cos(aRotation);","   v = ( uMatrix * vec3(v + aPositionCoord , 1.0) ).xy ;","   gl_Position = vec4( ( v / projectionVector) + center , 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vColor = aColor;","}"];
this.textureCount=0;
this.init()
};
g.PixiFastShader.prototype.constructor=g.PixiFastShader;
g.PixiFastShader.prototype.init=function(){var i=this.gl;
var h=g.compileProgram(i,this.vertexSrc,this.fragmentSrc);
i.useProgram(h);
this.uSampler=i.getUniformLocation(h,"uSampler");
this.projectionVector=i.getUniformLocation(h,"projectionVector");
this.offsetVector=i.getUniformLocation(h,"offsetVector");
this.dimensions=i.getUniformLocation(h,"dimensions");
this.uMatrix=i.getUniformLocation(h,"uMatrix");
this.aVertexPosition=i.getAttribLocation(h,"aVertexPosition");
this.aPositionCoord=i.getAttribLocation(h,"aPositionCoord");
this.aScale=i.getAttribLocation(h,"aScale");
this.aRotation=i.getAttribLocation(h,"aRotation");
this.aTextureCoord=i.getAttribLocation(h,"aTextureCoord");
this.colorAttribute=i.getAttribLocation(h,"aColor");
if(this.colorAttribute===-1){this.colorAttribute=2
}this.attributes=[this.aVertexPosition,this.aPositionCoord,this.aScale,this.aRotation,this.aTextureCoord,this.colorAttribute];
this.program=h
};
g.PixiFastShader.prototype.destroy=function(){this.gl.deleteProgram(this.program);
this.uniforms=null;
this.gl=null;
this.attributes=null
};
g.StripShader=function(h){this._UID=g._UID++;
this.gl=h;
this.program=null;
this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","uniform float alpha;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * alpha;","}"];
this.vertexSrc=["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","uniform mat3 translationMatrix;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","varying vec2 vTextureCoord;","void main(void) {","   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);","   v -= offsetVector.xyx;","   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);","   vTextureCoord = aTextureCoord;","}"];
this.init()
};
g.StripShader.prototype.constructor=g.StripShader;
g.StripShader.prototype.init=function(){var i=this.gl;
var h=g.compileProgram(i,this.vertexSrc,this.fragmentSrc);
i.useProgram(h);
this.uSampler=i.getUniformLocation(h,"uSampler");
this.projectionVector=i.getUniformLocation(h,"projectionVector");
this.offsetVector=i.getUniformLocation(h,"offsetVector");
this.colorAttribute=i.getAttribLocation(h,"aColor");
this.aVertexPosition=i.getAttribLocation(h,"aVertexPosition");
this.aTextureCoord=i.getAttribLocation(h,"aTextureCoord");
this.attributes=[this.aVertexPosition,this.aTextureCoord];
this.translationMatrix=i.getUniformLocation(h,"translationMatrix");
this.alpha=i.getUniformLocation(h,"alpha");
this.program=h
};
g.StripShader.prototype.destroy=function(){this.gl.deleteProgram(this.program);
this.uniforms=null;
this.gl=null;
this.attribute=null
};
g.PrimitiveShader=function(h){this._UID=g._UID++;
this.gl=h;
this.program=null;
this.fragmentSrc=["precision mediump float;","varying vec4 vColor;","void main(void) {","   gl_FragColor = vColor;","}"];
this.vertexSrc=["attribute vec2 aVertexPosition;","attribute vec4 aColor;","uniform mat3 translationMatrix;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","uniform float alpha;","uniform float flipY;","uniform vec3 tint;","varying vec4 vColor;","void main(void) {","   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);","   v -= offsetVector.xyx;","   gl_Position = vec4( v.x / projectionVector.x -1.0, (v.y / projectionVector.y * -flipY) + flipY , 0.0, 1.0);","   vColor = aColor * vec4(tint * alpha, alpha);","}"];
this.init()
};
g.PrimitiveShader.prototype.constructor=g.PrimitiveShader;
g.PrimitiveShader.prototype.init=function(){var i=this.gl;
var h=g.compileProgram(i,this.vertexSrc,this.fragmentSrc);
i.useProgram(h);
this.projectionVector=i.getUniformLocation(h,"projectionVector");
this.offsetVector=i.getUniformLocation(h,"offsetVector");
this.tintColor=i.getUniformLocation(h,"tint");
this.flipY=i.getUniformLocation(h,"flipY");
this.aVertexPosition=i.getAttribLocation(h,"aVertexPosition");
this.colorAttribute=i.getAttribLocation(h,"aColor");
this.attributes=[this.aVertexPosition,this.colorAttribute];
this.translationMatrix=i.getUniformLocation(h,"translationMatrix");
this.alpha=i.getUniformLocation(h,"alpha");
this.program=h
};
g.PrimitiveShader.prototype.destroy=function(){this.gl.deleteProgram(this.program);
this.uniforms=null;
this.gl=null;
this.attributes=null
};
g.ComplexPrimitiveShader=function(h){this._UID=g._UID++;
this.gl=h;
this.program=null;
this.fragmentSrc=["precision mediump float;","varying vec4 vColor;","void main(void) {","   gl_FragColor = vColor;","}"];
this.vertexSrc=["attribute vec2 aVertexPosition;","uniform mat3 translationMatrix;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","uniform vec3 tint;","uniform float alpha;","uniform vec3 color;","uniform float flipY;","varying vec4 vColor;","void main(void) {","   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);","   v -= offsetVector.xyx;","   gl_Position = vec4( v.x / projectionVector.x -1.0, (v.y / projectionVector.y * -flipY) + flipY , 0.0, 1.0);","   vColor = vec4(color * alpha * tint, alpha);","}"];
this.init()
};
g.ComplexPrimitiveShader.prototype.constructor=g.ComplexPrimitiveShader;
g.ComplexPrimitiveShader.prototype.init=function(){var i=this.gl;
var h=g.compileProgram(i,this.vertexSrc,this.fragmentSrc);
i.useProgram(h);
this.projectionVector=i.getUniformLocation(h,"projectionVector");
this.offsetVector=i.getUniformLocation(h,"offsetVector");
this.tintColor=i.getUniformLocation(h,"tint");
this.color=i.getUniformLocation(h,"color");
this.flipY=i.getUniformLocation(h,"flipY");
this.aVertexPosition=i.getAttribLocation(h,"aVertexPosition");
this.attributes=[this.aVertexPosition,this.colorAttribute];
this.translationMatrix=i.getUniformLocation(h,"translationMatrix");
this.alpha=i.getUniformLocation(h,"alpha");
this.program=h
};
g.ComplexPrimitiveShader.prototype.destroy=function(){this.gl.deleteProgram(this.program);
this.uniforms=null;
this.gl=null;
this.attribute=null
};
g.WebGLGraphics=function(){};
g.WebGLGraphics.renderGraphics=function(p,q){var k=q.gl;
var n=q.projection,h=q.offset,m=q.shaderManager.primitiveShader,l;
if(p.dirty){g.WebGLGraphics.updateGraphics(p,k)
}var o=p._webGL[k.id];
for(var j=0;
j<o.data.length;
j++){if(o.data[j].mode===1){l=o.data[j];
q.stencilManager.pushStencil(p,l,q);
k.drawElements(k.TRIANGLE_FAN,4,k.UNSIGNED_SHORT,(l.indices.length-4)*2);
q.stencilManager.popStencil(p,l,q)
}else{l=o.data[j];
q.shaderManager.setShader(m);
m=q.shaderManager.primitiveShader;
k.uniformMatrix3fv(m.translationMatrix,false,p.worldTransform.toArray(true));
k.uniform1f(m.flipY,1);
k.uniform2f(m.projectionVector,n.x,-n.y);
k.uniform2f(m.offsetVector,-h.x,-h.y);
k.uniform3fv(m.tintColor,g.hex2rgb(p.tint));
k.uniform1f(m.alpha,p.worldAlpha);
k.bindBuffer(k.ARRAY_BUFFER,l.buffer);
k.vertexAttribPointer(m.aVertexPosition,2,k.FLOAT,false,4*6,0);
k.vertexAttribPointer(m.colorAttribute,4,k.FLOAT,false,4*6,2*4);
k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,l.indexBuffer);
k.drawElements(k.TRIANGLE_STRIP,l.indices.length,k.UNSIGNED_SHORT,0)
}}};
g.WebGLGraphics.updateGraphics=function(h,o){var m=h._webGL[o.id];
if(!m){m=h._webGL[o.id]={lastIndex:0,data:[],gl:o}
}h.dirty=false;
var j;
if(h.clearDirty){h.clearDirty=false;
for(j=0;
j<m.data.length;
j++){var p=m.data[j];
p.reset();
g.WebGLGraphics.graphicsDataPool.push(p)
}m.data=[];
m.lastIndex=0
}var n;
for(j=m.lastIndex;
j<h.graphicsData.length;
j++){var l=h.graphicsData[j];
if(l.type===g.Graphics.POLY){l.points=l.shape.points.slice();
if(l.shape.closed){if(l.points[0]!==l.points[l.points.length-2]||l.points[1]!==l.points[l.points.length-1]){l.points.push(l.points[0],l.points[1])
}}if(l.fill){if(l.points.length>=6){if(l.points.length<6*2){n=g.WebGLGraphics.switchMode(m,0);
var k=g.WebGLGraphics.buildPoly(l,n);
if(!k){n=g.WebGLGraphics.switchMode(m,1);
g.WebGLGraphics.buildComplexPoly(l,n)
}}else{n=g.WebGLGraphics.switchMode(m,1);
g.WebGLGraphics.buildComplexPoly(l,n)
}}}if(l.lineWidth>0){n=g.WebGLGraphics.switchMode(m,0);
g.WebGLGraphics.buildLine(l,n)
}}else{n=g.WebGLGraphics.switchMode(m,0);
if(l.type===g.Graphics.RECT){g.WebGLGraphics.buildRectangle(l,n)
}else{if(l.type===g.Graphics.CIRC||l.type===g.Graphics.ELIP){g.WebGLGraphics.buildCircle(l,n)
}else{if(l.type===g.Graphics.RREC){g.WebGLGraphics.buildRoundedRectangle(l,n)
}}}}m.lastIndex++
}for(j=0;
j<m.data.length;
j++){n=m.data[j];
if(n.dirty){n.upload()
}}};
g.WebGLGraphics.switchMode=function(i,h){var j;
if(!i.data.length){j=g.WebGLGraphics.graphicsDataPool.pop()||new g.WebGLGraphicsData(i.gl);
j.mode=h;
i.data.push(j)
}else{j=i.data[i.data.length-1];
if(j.mode!==h||h===1){j=g.WebGLGraphics.graphicsDataPool.pop()||new g.WebGLGraphicsData(i.gl);
j.mode=h;
i.data.push(j)
}}j.dirty=true;
return j
};
g.WebGLGraphics.buildRectangle=function(z,m){var k=z.shape;
var t=k.x;
var s=k.y;
var i=k.width;
var w=k.height;
if(z.fill){var l=g.hex2rgb(z.fillColor);
var j=z.fillAlpha;
var h=l[0]*j;
var n=l[1]*j;
var q=l[2]*j;
var u=m.points;
var v=m.indices;
var p=u.length/6;
u.push(t,s);
u.push(h,n,q,j);
u.push(t+i,s);
u.push(h,n,q,j);
u.push(t,s+w);
u.push(h,n,q,j);
u.push(t+i,s+w);
u.push(h,n,q,j);
v.push(p,p,p+1,p+2,p+3,p+3)
}if(z.lineWidth){var o=z.points;
z.points=[t,s,t+i,s,t+i,s+w,t,s+w,t,s];
g.WebGLGraphics.buildLine(z,m);
z.points=o
}};
g.WebGLGraphics.buildRoundedRectangle=function(q,E){var h=q.shape;
var p=h.x;
var o=h.y;
var v=h.width;
var u=h.height;
var k=h.radius;
var s=[];
s.push(p,o+k);
s=s.concat(g.WebGLGraphics.quadraticBezierCurve(p,o+u-k,p,o+u,p+k,o+u));
s=s.concat(g.WebGLGraphics.quadraticBezierCurve(p+v-k,o+u,p+v,o+u,p+v,o+u-k));
s=s.concat(g.WebGLGraphics.quadraticBezierCurve(p+v,o+k,p+v,o,p+v-k,o));
s=s.concat(g.WebGLGraphics.quadraticBezierCurve(p+k,o,p,o,p,o+k));
if(q.fill){var z=g.hex2rgb(q.fillColor);
var l=q.fillAlpha;
var t=z[0]*l;
var B=z[1]*l;
var C=z[2]*l;
var D=E.points;
var m=E.indices;
var j=D.length/6;
var w=g.PolyK.Triangulate(s);
var A=0;
for(A=0;
A<w.length;
A+=3){m.push(w[A]+j);
m.push(w[A]+j);
m.push(w[A+1]+j);
m.push(w[A+2]+j);
m.push(w[A+2]+j)
}for(A=0;
A<s.length;
A++){D.push(s[A],s[++A],t,B,C,l)
}}if(q.lineWidth){var n=q.points;
q.points=s;
g.WebGLGraphics.buildLine(q,E);
q.points=n
}};
g.WebGLGraphics.quadraticBezierCurve=function(A,u,w,q,B,v){var k,s,D,p,z,t,l=20,C=[];
function h(n,j,i){var x=j-n;
return n+(x*i)
}var m=0;
for(var o=0;
o<=l;
o++){m=o/l;
k=h(A,w,m);
s=h(u,q,m);
D=h(w,B,m);
p=h(q,v,m);
z=h(k,D,m);
t=h(s,p,m);
C.push(z,t)
}return C
};
g.WebGLGraphics.buildCircle=function(o,D){var z=o.shape;
var n=z.x;
var m=z.y;
var t;
var s;
if(o.type===g.Graphics.CIRC){t=z.radius;
s=z.radius
}else{t=z.width;
s=z.height
}var p=40;
var A=(Math.PI*2)/p;
var v=0;
if(o.fill){var u=g.hex2rgb(o.fillColor);
var j=o.fillAlpha;
var q=u[0]*j;
var w=u[1]*j;
var B=u[2]*j;
var C=D.points;
var k=D.indices;
var h=C.length/6;
k.push(h);
for(v=0;
v<p+1;
v++){C.push(n,m,q,w,B,j);
C.push(n+Math.sin(A*v)*t,m+Math.cos(A*v)*s,q,w,B,j);
k.push(h++,h++)
}k.push(h-1)
}if(o.lineWidth){var l=o.points;
o.points=[];
for(v=0;
v<p+1;
v++){o.points.push(n+Math.sin(A*v)*t,m+Math.cos(A*v)*s)
}g.WebGLGraphics.buildLine(o,D);
o.points=l
}};
g.WebGLGraphics.buildLine=function(W,G){var S=0;
var J=W.points;
if(J.length===0){return
}if(W.lineWidth%2){for(S=0;
S<J.length;
S++){J[S]+=0.5
}}var x=new g.Point(J[0],J[1]);
var p=new g.Point(J[J.length-2],J[J.length-1]);
if(x.x===p.x&&x.y===p.y){J=J.slice();
J.pop();
J.pop();
p=new g.Point(J[J.length-2],J[J.length-1]);
var z=p.x+(x.x-p.x)*0.5;
var w=p.y+(x.y-p.y)*0.5;
J.unshift(z,w);
J.push(z,w)
}var T=G.points;
var n=G.indices;
var y=J.length/2;
var v=J.length;
var V=T.length/6;
var h=W.lineWidth/2;
var I=g.hex2rgb(W.lineColor);
var R=W.lineAlpha;
var O=I[0]*R;
var U=I[1]*R;
var X=I[2]*R;
var u,t,L,K,D,C,m,l;
var N,M,B,A,k,j;
var Q,H,s,P,F,q;
var Y,E,o;
L=J[0];
K=J[1];
D=J[2];
C=J[3];
N=-(K-C);
M=L-D;
o=Math.sqrt(N*N+M*M);
N/=o;
M/=o;
N*=h;
M*=h;
T.push(L-N,K-M,O,U,X,R);
T.push(L+N,K+M,O,U,X,R);
for(S=1;
S<y-1;
S++){L=J[(S-1)*2];
K=J[(S-1)*2+1];
D=J[(S)*2];
C=J[(S)*2+1];
m=J[(S+1)*2];
l=J[(S+1)*2+1];
N=-(K-C);
M=L-D;
o=Math.sqrt(N*N+M*M);
N/=o;
M/=o;
N*=h;
M*=h;
B=-(C-l);
A=D-m;
o=Math.sqrt(B*B+A*A);
B/=o;
A/=o;
B*=h;
A*=h;
Q=(-M+K)-(-M+C);
H=(-N+D)-(-N+L);
s=(-N+L)*(-M+C)-(-N+D)*(-M+K);
P=(-A+l)-(-A+C);
F=(-B+D)-(-B+m);
q=(-B+m)*(-A+C)-(-B+D)*(-A+l);
Y=Q*F-P*H;
if(Math.abs(Y)<0.1){Y+=10.1;
T.push(D-N,C-M,O,U,X,R);
T.push(D+N,C+M,O,U,X,R);
continue
}u=(H*q-F*s)/Y;
t=(P*s-Q*q)/Y;
E=(u-D)*(u-D)+(t-C)+(t-C);
if(E>140*140){k=N-B;
j=M-A;
o=Math.sqrt(k*k+j*j);
k/=o;
j/=o;
k*=h;
j*=h;
T.push(D-k,C-j);
T.push(O,U,X,R);
T.push(D+k,C+j);
T.push(O,U,X,R);
T.push(D-k,C-j);
T.push(O,U,X,R);
v++
}else{T.push(u,t);
T.push(O,U,X,R);
T.push(D-(u-D),C-(t-C));
T.push(O,U,X,R)
}}L=J[(y-2)*2];
K=J[(y-2)*2+1];
D=J[(y-1)*2];
C=J[(y-1)*2+1];
N=-(K-C);
M=L-D;
o=Math.sqrt(N*N+M*M);
N/=o;
M/=o;
N*=h;
M*=h;
T.push(D-N,C-M);
T.push(O,U,X,R);
T.push(D+N,C+M);
T.push(O,U,X,R);
n.push(V);
for(S=0;
S<v;
S++){n.push(V++)
}n.push(V-1)
};
g.WebGLGraphics.buildComplexPoly=function(u,o){var s=u.points.slice();
if(s.length<6){return
}var t=o.indices;
o.points=s;
o.alpha=u.fillAlpha;
o.color=g.hex2rgb(u.fillColor);
var m=Infinity;
var j=-Infinity;
var l=Infinity;
var h=-Infinity;
var q,p;
for(var n=0;
n<s.length;
n+=2){q=s[n];
p=s[n+1];
m=q<m?q:m;
j=q>j?q:j;
l=p<l?p:l;
h=p>h?p:h
}s.push(m,l,j,l,j,h,m,h);
var k=s.length/2;
for(n=0;
n<k;
n++){t.push(n)
}};
g.WebGLGraphics.buildPoly=function(w,o){var u=w.points;
if(u.length<6){return
}var t=o.points;
var v=o.indices;
var j=u.length/2;
var m=g.hex2rgb(w.fillColor);
var l=w.fillAlpha;
var h=m[0]*l;
var p=m[1]*l;
var s=m[2]*l;
var k=g.PolyK.Triangulate(u);
if(!k){return false
}var q=t.length/6;
var n=0;
for(n=0;
n<k.length;
n+=3){v.push(k[n]+q);
v.push(k[n]+q);
v.push(k[n+1]+q);
v.push(k[n+2]+q);
v.push(k[n+2]+q)
}for(n=0;
n<j;
n++){t.push(u[n*2],u[n*2+1],h,p,s,l)
}return true
};
g.WebGLGraphics.graphicsDataPool=[];
g.WebGLGraphicsData=function(h){this.gl=h;
this.color=[0,0,0];
this.points=[];
this.indices=[];
this.buffer=h.createBuffer();
this.indexBuffer=h.createBuffer();
this.mode=1;
this.alpha=1;
this.dirty=true
};
g.WebGLGraphicsData.prototype.reset=function(){this.points=[];
this.indices=[]
};
g.WebGLGraphicsData.prototype.upload=function(){var h=this.gl;
this.glPoints=new g.Float32Array(this.points);
h.bindBuffer(h.ARRAY_BUFFER,this.buffer);
h.bufferData(h.ARRAY_BUFFER,this.glPoints,h.STATIC_DRAW);
this.glIndicies=new g.Uint16Array(this.indices);
h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
h.bufferData(h.ELEMENT_ARRAY_BUFFER,this.glIndicies,h.STATIC_DRAW);
this.dirty=false
};
g.glContexts=[];
g.instances=[];
g.WebGLRenderer=function(l,h,j){if(j){for(var k in g.defaultRenderOptions){if(typeof j[k]==="undefined"){j[k]=g.defaultRenderOptions[k]
}}}else{j=g.defaultRenderOptions
}if(!g.defaultRenderer){g.sayHello("webGL");
g.defaultRenderer=this
}this.type=g.WEBGL_RENDERER;
this.resolution=j.resolution;
this.transparent=j.transparent;
this.autoResize=j.autoResize||false;
this.preserveDrawingBuffer=j.preserveDrawingBuffer;
this.clearBeforeRender=j.clearBeforeRender;
this.width=l||800;
this.height=h||600;
this.view=j.view||document.createElement("canvas");
this.contextLostBound=this.handleContextLost.bind(this);
this.contextRestoredBound=this.handleContextRestored.bind(this);
this.view.addEventListener("webglcontextlost",this.contextLostBound,false);
this.view.addEventListener("webglcontextrestored",this.contextRestoredBound,false);
this._contextOptions={alpha:this.transparent,antialias:j.antialias,premultipliedAlpha:this.transparent&&this.transparent!=="notMultiplied",stencil:true,preserveDrawingBuffer:j.preserveDrawingBuffer};
this.projection=new g.Point();
this.offset=new g.Point(0,0);
this.shaderManager=new g.WebGLShaderManager();
this.spriteBatch=new g.WebGLSpriteBatch();
this.maskManager=new g.WebGLMaskManager();
this.filterManager=new g.WebGLFilterManager();
this.stencilManager=new g.WebGLStencilManager();
this.blendModeManager=new g.WebGLBlendModeManager();
this.renderSession={};
this.renderSession.gl=this.gl;
this.renderSession.drawCount=0;
this.renderSession.shaderManager=this.shaderManager;
this.renderSession.maskManager=this.maskManager;
this.renderSession.filterManager=this.filterManager;
this.renderSession.blendModeManager=this.blendModeManager;
this.renderSession.spriteBatch=this.spriteBatch;
this.renderSession.stencilManager=this.stencilManager;
this.renderSession.renderer=this;
this.renderSession.resolution=this.resolution;
this.initContext();
this.mapBlendModes()
};
g.WebGLRenderer.prototype.constructor=g.WebGLRenderer;
g.WebGLRenderer.prototype.initContext=function(){var h=this.view.getContext("webgl",this._contextOptions)||this.view.getContext("experimental-webgl",this._contextOptions);
this.gl=h;
if(!h){throw new Error("This browser does not support webGL. Try using the canvas renderer")
}this.glContextId=h.id=g.WebGLRenderer.glContextId++;
g.glContexts[this.glContextId]=h;
g.instances[this.glContextId]=this;
h.disable(h.DEPTH_TEST);
h.disable(h.CULL_FACE);
h.enable(h.BLEND);
this.shaderManager.setContext(h);
this.spriteBatch.setContext(h);
this.maskManager.setContext(h);
this.filterManager.setContext(h);
this.blendModeManager.setContext(h);
this.stencilManager.setContext(h);
this.renderSession.gl=this.gl;
this.resize(this.width,this.height)
};
g.WebGLRenderer.prototype.render=function(h){if(this.contextLost){return
}if(this.__stage!==h){if(h.interactive){h.interactionManager.removeEvents()
}this.__stage=h
}h.updateTransform();
var i=this.gl;
if(h._interactive){if(!h._interactiveEventsAdded){h._interactiveEventsAdded=true;
h.interactionManager.setTarget(this)
}}else{if(h._interactiveEventsAdded){h._interactiveEventsAdded=false;
h.interactionManager.setTarget(this)
}}i.viewport(0,0,this.width,this.height);
i.bindFramebuffer(i.FRAMEBUFFER,null);
if(this.clearBeforeRender){if(this.transparent){i.clearColor(0,0,0,0)
}else{i.clearColor(h.backgroundColorSplit[0],h.backgroundColorSplit[1],h.backgroundColorSplit[2],1)
}i.clear(i.COLOR_BUFFER_BIT)
}this.renderDisplayObject(h,this.projection)
};
g.WebGLRenderer.prototype.renderDisplayObject=function(j,h,i){this.renderSession.blendModeManager.setBlendMode(g.blendModes.NORMAL);
this.renderSession.drawCount=0;
this.renderSession.flipY=i?-1:1;
this.renderSession.projection=h;
this.renderSession.offset=this.offset;
this.spriteBatch.begin(this.renderSession);
this.filterManager.begin(this.renderSession,i);
j._renderWebGL(this.renderSession);
this.spriteBatch.end()
};
g.WebGLRenderer.prototype.resize=function(i,h){this.width=i*this.resolution;
this.height=h*this.resolution;
this.view.width=this.width;
this.view.height=this.height;
if(this.autoResize){this.view.style.width=this.width/this.resolution+"px";
this.view.style.height=this.height/this.resolution+"px"
}this.gl.viewport(0,0,this.width,this.height);
this.projection.x=this.width/2/this.resolution;
this.projection.y=-this.height/2/this.resolution
};
g.WebGLRenderer.prototype.updateTexture=function(h){if(!h.hasLoaded){return
}var i=this.gl;
if(!h._glTextures[i.id]){h._glTextures[i.id]=i.createTexture()
}i.bindTexture(i.TEXTURE_2D,h._glTextures[i.id]);
i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultipliedAlpha);
i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,h.source);
i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,h.scaleMode===g.scaleModes.LINEAR?i.LINEAR:i.NEAREST);
if(h.mipmap&&g.isPowerOfTwo(h.width,h.height)){i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,h.scaleMode===g.scaleModes.LINEAR?i.LINEAR_MIPMAP_LINEAR:i.NEAREST_MIPMAP_NEAREST);
i.generateMipmap(i.TEXTURE_2D)
}else{i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,h.scaleMode===g.scaleModes.LINEAR?i.LINEAR:i.NEAREST)
}if(!h._powerOf2){i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE);
i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)
}else{i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.REPEAT);
i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.REPEAT)
}h._dirty[i.id]=false;
return h._glTextures[i.id]
};
g.WebGLRenderer.prototype.handleContextLost=function(h){h.preventDefault();
this.contextLost=true
};
g.WebGLRenderer.prototype.handleContextRestored=function(){this.initContext();
for(var h in g.TextureCache){var i=g.TextureCache[h].baseTexture;
i._glTextures=[]
}this.contextLost=false
};
g.WebGLRenderer.prototype.destroy=function(){this.view.removeEventListener("webglcontextlost",this.contextLostBound);
this.view.removeEventListener("webglcontextrestored",this.contextRestoredBound);
g.glContexts[this.glContextId]=null;
this.projection=null;
this.offset=null;
this.shaderManager.destroy();
this.spriteBatch.destroy();
this.maskManager.destroy();
this.filterManager.destroy();
this.shaderManager=null;
this.spriteBatch=null;
this.maskManager=null;
this.filterManager=null;
this.gl=null;
this.renderSession=null
};
g.WebGLRenderer.prototype.mapBlendModes=function(){var h=this.gl;
if(!g.blendModesWebGL){g.blendModesWebGL=[];
g.blendModesWebGL[g.blendModes.NORMAL]=[h.ONE,h.ONE_MINUS_SRC_ALPHA];
g.blendModesWebGL[g.blendModes.ADD]=[h.SRC_ALPHA,h.DST_ALPHA];
g.blendModesWebGL[g.blendModes.MULTIPLY]=[h.DST_COLOR,h.ONE_MINUS_SRC_ALPHA];
g.blendModesWebGL[g.blendModes.SCREEN]=[h.SRC_ALPHA,h.ONE];
g.blendModesWebGL[g.blendModes.OVERLAY]=[h.ONE,h.ONE_MINUS_SRC_ALPHA];
g.blendModesWebGL[g.blendModes.DARKEN]=[h.ONE,h.ONE_MINUS_SRC_ALPHA];
g.blendModesWebGL[g.blendModes.LIGHTEN]=[h.ONE,h.ONE_MINUS_SRC_ALPHA];
g.blendModesWebGL[g.blendModes.COLOR_DODGE]=[h.ONE,h.ONE_MINUS_SRC_ALPHA];
g.blendModesWebGL[g.blendModes.COLOR_BURN]=[h.ONE,h.ONE_MINUS_SRC_ALPHA];
g.blendModesWebGL[g.blendModes.HARD_LIGHT]=[h.ONE,h.ONE_MINUS_SRC_ALPHA];
g.blendModesWebGL[g.blendModes.SOFT_LIGHT]=[h.ONE,h.ONE_MINUS_SRC_ALPHA];
g.blendModesWebGL[g.blendModes.DIFFERENCE]=[h.ONE,h.ONE_MINUS_SRC_ALPHA];
g.blendModesWebGL[g.blendModes.EXCLUSION]=[h.ONE,h.ONE_MINUS_SRC_ALPHA];
g.blendModesWebGL[g.blendModes.HUE]=[h.ONE,h.ONE_MINUS_SRC_ALPHA];
g.blendModesWebGL[g.blendModes.SATURATION]=[h.ONE,h.ONE_MINUS_SRC_ALPHA];
g.blendModesWebGL[g.blendModes.COLOR]=[h.ONE,h.ONE_MINUS_SRC_ALPHA];
g.blendModesWebGL[g.blendModes.LUMINOSITY]=[h.ONE,h.ONE_MINUS_SRC_ALPHA]
}};
g.WebGLRenderer.glContextId=0;
g.WebGLBlendModeManager=function(){this.currentBlendMode=99999
};
g.WebGLBlendModeManager.prototype.constructor=g.WebGLBlendModeManager;
g.WebGLBlendModeManager.prototype.setContext=function(h){this.gl=h
};
g.WebGLBlendModeManager.prototype.setBlendMode=function(h){if(this.currentBlendMode===h){return false
}this.currentBlendMode=h;
var i=g.blendModesWebGL[this.currentBlendMode];
this.gl.blendFunc(i[0],i[1]);
return true
};
g.WebGLBlendModeManager.prototype.destroy=function(){this.gl=null
};
g.WebGLMaskManager=function(){};
g.WebGLMaskManager.prototype.constructor=g.WebGLMaskManager;
g.WebGLMaskManager.prototype.setContext=function(h){this.gl=h
};
g.WebGLMaskManager.prototype.pushMask=function(i,h){var j=h.gl;
if(i.dirty){g.WebGLGraphics.updateGraphics(i,j)
}if(!i._webGL[j.id].data.length){return
}h.stencilManager.pushStencil(i,i._webGL[j.id].data[0],h)
};
g.WebGLMaskManager.prototype.popMask=function(i,h){var j=this.gl;
h.stencilManager.popStencil(i,i._webGL[j.id].data[0],h)
};
g.WebGLMaskManager.prototype.destroy=function(){this.gl=null
};
g.WebGLStencilManager=function(){this.stencilStack=[];
this.reverse=true;
this.count=0
};
g.WebGLStencilManager.prototype.setContext=function(h){this.gl=h
};
g.WebGLStencilManager.prototype.pushStencil=function(h,k,i){var j=this.gl;
this.bindGraphics(h,k,i);
if(this.stencilStack.length===0){j.enable(j.STENCIL_TEST);
j.clear(j.STENCIL_BUFFER_BIT);
this.reverse=true;
this.count=0
}this.stencilStack.push(k);
var l=this.count;
j.colorMask(false,false,false,false);
j.stencilFunc(j.ALWAYS,0,255);
j.stencilOp(j.KEEP,j.KEEP,j.INVERT);
if(k.mode===1){j.drawElements(j.TRIANGLE_FAN,k.indices.length-4,j.UNSIGNED_SHORT,0);
if(this.reverse){j.stencilFunc(j.EQUAL,255-l,255);
j.stencilOp(j.KEEP,j.KEEP,j.DECR)
}else{j.stencilFunc(j.EQUAL,l,255);
j.stencilOp(j.KEEP,j.KEEP,j.INCR)
}j.drawElements(j.TRIANGLE_FAN,4,j.UNSIGNED_SHORT,(k.indices.length-4)*2);
if(this.reverse){j.stencilFunc(j.EQUAL,255-(l+1),255)
}else{j.stencilFunc(j.EQUAL,l+1,255)
}this.reverse=!this.reverse
}else{if(!this.reverse){j.stencilFunc(j.EQUAL,255-l,255);
j.stencilOp(j.KEEP,j.KEEP,j.DECR)
}else{j.stencilFunc(j.EQUAL,l,255);
j.stencilOp(j.KEEP,j.KEEP,j.INCR)
}j.drawElements(j.TRIANGLE_STRIP,k.indices.length,j.UNSIGNED_SHORT,0);
if(!this.reverse){j.stencilFunc(j.EQUAL,255-(l+1),255)
}else{j.stencilFunc(j.EQUAL,l+1,255)
}}j.colorMask(true,true,true,true);
j.stencilOp(j.KEEP,j.KEEP,j.KEEP);
this.count++
};
g.WebGLStencilManager.prototype.bindGraphics=function(i,n,k){this._currentGraphics=i;
var m=this.gl;
var h=k.projection,l=k.offset,j;
if(n.mode===1){j=k.shaderManager.complexPrimitiveShader;
k.shaderManager.setShader(j);
m.uniform1f(j.flipY,k.flipY);
m.uniformMatrix3fv(j.translationMatrix,false,i.worldTransform.toArray(true));
m.uniform2f(j.projectionVector,h.x,-h.y);
m.uniform2f(j.offsetVector,-l.x,-l.y);
m.uniform3fv(j.tintColor,g.hex2rgb(i.tint));
m.uniform3fv(j.color,n.color);
m.uniform1f(j.alpha,i.worldAlpha*n.alpha);
m.bindBuffer(m.ARRAY_BUFFER,n.buffer);
m.vertexAttribPointer(j.aVertexPosition,2,m.FLOAT,false,4*2,0);
m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,n.indexBuffer)
}else{j=k.shaderManager.primitiveShader;
k.shaderManager.setShader(j);
m.uniformMatrix3fv(j.translationMatrix,false,i.worldTransform.toArray(true));
m.uniform1f(j.flipY,k.flipY);
m.uniform2f(j.projectionVector,h.x,-h.y);
m.uniform2f(j.offsetVector,-l.x,-l.y);
m.uniform3fv(j.tintColor,g.hex2rgb(i.tint));
m.uniform1f(j.alpha,i.worldAlpha);
m.bindBuffer(m.ARRAY_BUFFER,n.buffer);
m.vertexAttribPointer(j.aVertexPosition,2,m.FLOAT,false,4*6,0);
m.vertexAttribPointer(j.colorAttribute,4,m.FLOAT,false,4*6,2*4);
m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,n.indexBuffer)
}};
g.WebGLStencilManager.prototype.popStencil=function(h,k,i){var j=this.gl;
this.stencilStack.pop();
this.count--;
if(this.stencilStack.length===0){j.disable(j.STENCIL_TEST)
}else{var l=this.count;
this.bindGraphics(h,k,i);
j.colorMask(false,false,false,false);
if(k.mode===1){this.reverse=!this.reverse;
if(this.reverse){j.stencilFunc(j.EQUAL,255-(l+1),255);
j.stencilOp(j.KEEP,j.KEEP,j.INCR)
}else{j.stencilFunc(j.EQUAL,l+1,255);
j.stencilOp(j.KEEP,j.KEEP,j.DECR)
}j.drawElements(j.TRIANGLE_FAN,4,j.UNSIGNED_SHORT,(k.indices.length-4)*2);
j.stencilFunc(j.ALWAYS,0,255);
j.stencilOp(j.KEEP,j.KEEP,j.INVERT);
j.drawElements(j.TRIANGLE_FAN,k.indices.length-4,j.UNSIGNED_SHORT,0);
if(!this.reverse){j.stencilFunc(j.EQUAL,255-(l),255)
}else{j.stencilFunc(j.EQUAL,l,255)
}}else{if(!this.reverse){j.stencilFunc(j.EQUAL,255-(l+1),255);
j.stencilOp(j.KEEP,j.KEEP,j.INCR)
}else{j.stencilFunc(j.EQUAL,l+1,255);
j.stencilOp(j.KEEP,j.KEEP,j.DECR)
}j.drawElements(j.TRIANGLE_STRIP,k.indices.length,j.UNSIGNED_SHORT,0);
if(!this.reverse){j.stencilFunc(j.EQUAL,255-(l),255)
}else{j.stencilFunc(j.EQUAL,l,255)
}}j.colorMask(true,true,true,true);
j.stencilOp(j.KEEP,j.KEEP,j.KEEP)
}};
g.WebGLStencilManager.prototype.destroy=function(){this.stencilStack=null;
this.gl=null
};
g.WebGLShaderManager=function(){this.maxAttibs=10;
this.attribState=[];
this.tempAttribState=[];
for(var h=0;
h<this.maxAttibs;
h++){this.attribState[h]=false
}this.stack=[]
};
g.WebGLShaderManager.prototype.constructor=g.WebGLShaderManager;
g.WebGLShaderManager.prototype.setContext=function(h){this.gl=h;
this.primitiveShader=new g.PrimitiveShader(h);
this.complexPrimitiveShader=new g.ComplexPrimitiveShader(h);
this.defaultShader=new g.PixiShader(h);
this.fastShader=new g.PixiFastShader(h);
this.stripShader=new g.StripShader(h);
this.setShader(this.defaultShader)
};
g.WebGLShaderManager.prototype.setAttribs=function(l){var j;
for(j=0;
j<this.tempAttribState.length;
j++){this.tempAttribState[j]=false
}for(j=0;
j<l.length;
j++){var h=l[j];
this.tempAttribState[h]=true
}var k=this.gl;
for(j=0;
j<this.attribState.length;
j++){if(this.attribState[j]!==this.tempAttribState[j]){this.attribState[j]=this.tempAttribState[j];
if(this.tempAttribState[j]){k.enableVertexAttribArray(j)
}else{k.disableVertexAttribArray(j)
}}}};
g.WebGLShaderManager.prototype.setShader=function(h){if(this._currentId===h._UID){return false
}this._currentId=h._UID;
this.currentShader=h;
this.gl.useProgram(h.program);
this.setAttribs(h.attributes);
return true
};
g.WebGLShaderManager.prototype.destroy=function(){this.attribState=null;
this.tempAttribState=null;
this.primitiveShader.destroy();
this.complexPrimitiveShader.destroy();
this.defaultShader.destroy();
this.fastShader.destroy();
this.stripShader.destroy();
this.gl=null
};
g.WebGLSpriteBatch=function(){this.vertSize=5;
this.size=2000;
var h=this.size*4*4*this.vertSize;
var m=this.size*6;
this.vertices=new g.ArrayBuffer(h);
this.positions=new g.Float32Array(this.vertices);
this.colors=new g.Uint32Array(this.vertices);
this.indices=new g.Uint16Array(m);
this.lastIndexCount=0;
for(var l=0,k=0;
l<m;
l+=6,k+=4){this.indices[l+0]=k+0;
this.indices[l+1]=k+1;
this.indices[l+2]=k+2;
this.indices[l+3]=k+0;
this.indices[l+4]=k+2;
this.indices[l+5]=k+3
}this.drawing=false;
this.currentBatchSize=0;
this.currentBaseTexture=null;
this.dirty=true;
this.textures=[];
this.blendModes=[];
this.shaders=[];
this.sprites=[];
this.defaultShader=new g.AbstractFilter(["precision lowp float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;","}"])
};
g.WebGLSpriteBatch.prototype.setContext=function(i){this.gl=i;
this.vertexBuffer=i.createBuffer();
this.indexBuffer=i.createBuffer();
i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
i.bufferData(i.ELEMENT_ARRAY_BUFFER,this.indices,i.STATIC_DRAW);
i.bindBuffer(i.ARRAY_BUFFER,this.vertexBuffer);
i.bufferData(i.ARRAY_BUFFER,this.vertices,i.DYNAMIC_DRAW);
this.currentBlendMode=99999;
var h=new g.PixiShader(i);
h.fragmentSrc=this.defaultShader.fragmentSrc;
h.uniforms={};
h.init();
this.defaultShader.shaders[i.id]=h
};
g.WebGLSpriteBatch.prototype.begin=function(h){this.renderSession=h;
this.shader=this.renderSession.shaderManager.defaultShader;
this.start()
};
g.WebGLSpriteBatch.prototype.end=function(){this.flush()
};
g.WebGLSpriteBatch.prototype.render=function(u){var t=u.texture;
if(this.currentBatchSize>=this.size){this.flush();
this.currentBaseTexture=t.baseTexture
}var p=t._uvs;
if(!p){return
}var i=u.anchor.x;
var h=u.anchor.y;
var s,q,n,m;
if(t.trim){var x=t.trim;
q=x.x-i*x.width;
s=q+t.crop.width;
m=x.y-h*x.height;
n=m+t.crop.height
}else{s=(t.frame.width)*(1-i);
q=(t.frame.width)*-i;
n=t.frame.height*(1-h);
m=t.frame.height*-h
}var j=this.currentBatchSize*4*this.vertSize;
var v=t.baseTexture.resolution;
var w=u.worldTransform;
var D=w.a/v;
var B=w.b/v;
var z=w.c/v;
var y=w.d/v;
var C=w.tx;
var A=w.ty;
var o=this.colors;
var l=this.positions;
if(this.renderSession.roundPixels){l[j]=D*q+z*m+C|0;
l[j+1]=y*m+B*q+A|0;
l[j+5]=D*s+z*m+C|0;
l[j+6]=y*m+B*s+A|0;
l[j+10]=D*s+z*n+C|0;
l[j+11]=y*n+B*s+A|0;
l[j+15]=D*q+z*n+C|0;
l[j+16]=y*n+B*q+A|0
}else{l[j]=D*q+z*m+C;
l[j+1]=y*m+B*q+A;
l[j+5]=D*s+z*m+C;
l[j+6]=y*m+B*s+A;
l[j+10]=D*s+z*n+C;
l[j+11]=y*n+B*s+A;
l[j+15]=D*q+z*n+C;
l[j+16]=y*n+B*q+A
}l[j+2]=p.x0;
l[j+3]=p.y0;
l[j+7]=p.x1;
l[j+8]=p.y1;
l[j+12]=p.x2;
l[j+13]=p.y2;
l[j+17]=p.x3;
l[j+18]=p.y3;
var k=u.tint;
o[j+4]=o[j+9]=o[j+14]=o[j+19]=(k>>16)+(k&65280)+((k&255)<<16)+(u.worldAlpha*255<<24);
this.sprites[this.currentBatchSize++]=u
};
g.WebGLSpriteBatch.prototype.renderTilingSprite=function(i){var u=i.tilingTexture;
if(this.currentBatchSize>=this.size){this.flush();
this.currentBaseTexture=u.baseTexture
}if(!i._uvs){i._uvs=new g.TextureUvs()
}var q=i._uvs;
i.tilePosition.x%=u.baseTexture.width*i.tileScaleOffset.x;
i.tilePosition.y%=u.baseTexture.height*i.tileScaleOffset.y;
var B=i.tilePosition.x/(u.baseTexture.width*i.tileScaleOffset.x);
var A=i.tilePosition.y/(u.baseTexture.height*i.tileScaleOffset.y);
var H=(i.width/u.baseTexture.width)/(i.tileScale.x*i.tileScaleOffset.x);
var E=(i.height/u.baseTexture.height)/(i.tileScale.y*i.tileScaleOffset.y);
q.x0=0-B;
q.y0=0-A;
q.x1=(1*H)-B;
q.y1=0-A;
q.x2=(1*H)-B;
q.y2=(1*E)-A;
q.x3=0-B;
q.y3=(1*E)-A;
var l=i.tint;
var z=(l>>16)+(l&65280)+((l&255)<<16)+(i.alpha*255<<24);
var n=this.positions;
var p=this.colors;
var w=i.width;
var v=i.height;
var j=i.anchor.x;
var h=i.anchor.y;
var t=w*(1-j);
var s=w*-j;
var o=v*(1-h);
var m=v*-h;
var k=this.currentBatchSize*4*this.vertSize;
var x=u.baseTexture.resolution;
var y=i.worldTransform;
var J=y.a/x;
var G=y.b/x;
var D=y.c/x;
var C=y.d/x;
var I=y.tx;
var F=y.ty;
n[k++]=J*s+D*m+I;
n[k++]=C*m+G*s+F;
n[k++]=q.x0;
n[k++]=q.y0;
p[k++]=z;
n[k++]=(J*t+D*m+I);
n[k++]=C*m+G*t+F;
n[k++]=q.x1;
n[k++]=q.y1;
p[k++]=z;
n[k++]=J*t+D*o+I;
n[k++]=C*o+G*t+F;
n[k++]=q.x2;
n[k++]=q.y2;
p[k++]=z;
n[k++]=J*s+D*o+I;
n[k++]=C*o+G*s+F;
n[k++]=q.x3;
n[k++]=q.y3;
p[k++]=z;
this.sprites[this.currentBatchSize++]=i
};
g.WebGLSpriteBatch.prototype.flush=function(){if(this.currentBatchSize===0){return
}var y=this.gl;
var h;
if(this.dirty){this.dirty=false;
y.activeTexture(y.TEXTURE0);
y.bindBuffer(y.ARRAY_BUFFER,this.vertexBuffer);
y.bindBuffer(y.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
h=this.defaultShader.shaders[y.id];
var t=this.vertSize*4;
y.vertexAttribPointer(h.aVertexPosition,2,y.FLOAT,false,t,0);
y.vertexAttribPointer(h.aTextureCoord,2,y.FLOAT,false,t,2*4);
y.vertexAttribPointer(h.colorAttribute,4,y.UNSIGNED_BYTE,true,t,4*4)
}if(this.currentBatchSize>(this.size*0.5)){y.bufferSubData(y.ARRAY_BUFFER,0,this.vertices)
}else{var p=this.positions.subarray(0,this.currentBatchSize*4*this.vertSize);
y.bufferSubData(y.ARRAY_BUFFER,0,p)
}var w,B,o;
var u=0;
var n=0;
var A=null;
var q=this.renderSession.blendModeManager.currentBlendMode;
var k=null;
var m=false;
var l=false;
var s;
for(var z=0,x=this.currentBatchSize;
z<x;
z++){s=this.sprites[z];
w=s.texture.baseTexture;
B=s.blendMode;
o=s.shader||this.defaultShader;
m=q!==B;
l=k!==o;
if(A!==w||m||l){this.renderBatch(A,u,n);
n=z;
u=0;
A=w;
if(m){q=B;
this.renderSession.blendModeManager.setBlendMode(q)
}if(l){k=o;
h=k.shaders[y.id];
if(!h){h=new g.PixiShader(y);
h.fragmentSrc=k.fragmentSrc;
h.uniforms=k.uniforms;
h.init();
k.shaders[y.id]=h
}this.renderSession.shaderManager.setShader(h);
if(h.dirty){h.syncUniforms()
}var C=this.renderSession.projection;
y.uniform2f(h.projectionVector,C.x,C.y);
var v=this.renderSession.offset;
y.uniform2f(h.offsetVector,v.x,v.y)
}}u++
}this.renderBatch(A,u,n);
this.currentBatchSize=0
};
g.WebGLSpriteBatch.prototype.renderBatch=function(i,h,k){if(h===0){return
}var j=this.gl;
if(i._dirty[j.id]){this.renderSession.renderer.updateTexture(i)
}else{j.bindTexture(j.TEXTURE_2D,i._glTextures[j.id])
}j.drawElements(j.TRIANGLES,h*6,j.UNSIGNED_SHORT,k*6*2);
this.renderSession.drawCount++
};
g.WebGLSpriteBatch.prototype.stop=function(){this.flush();
this.dirty=true
};
g.WebGLSpriteBatch.prototype.start=function(){this.dirty=true
};
g.WebGLSpriteBatch.prototype.destroy=function(){this.vertices=null;
this.indices=null;
this.gl.deleteBuffer(this.vertexBuffer);
this.gl.deleteBuffer(this.indexBuffer);
this.currentBaseTexture=null;
this.gl=null
};
g.WebGLFastSpriteBatch=function(n){this.vertSize=10;
this.maxSize=6000;
this.size=this.maxSize;
var h=this.size*4*this.vertSize;
var m=this.maxSize*6;
this.vertices=new g.Float32Array(h);
this.indices=new g.Uint16Array(m);
this.vertexBuffer=null;
this.indexBuffer=null;
this.lastIndexCount=0;
for(var l=0,k=0;
l<m;
l+=6,k+=4){this.indices[l+0]=k+0;
this.indices[l+1]=k+1;
this.indices[l+2]=k+2;
this.indices[l+3]=k+0;
this.indices[l+4]=k+2;
this.indices[l+5]=k+3
}this.drawing=false;
this.currentBatchSize=0;
this.currentBaseTexture=null;
this.currentBlendMode=0;
this.renderSession=null;
this.shader=null;
this.matrix=null;
this.setContext(n)
};
g.WebGLFastSpriteBatch.prototype.constructor=g.WebGLFastSpriteBatch;
g.WebGLFastSpriteBatch.prototype.setContext=function(h){this.gl=h;
this.vertexBuffer=h.createBuffer();
this.indexBuffer=h.createBuffer();
h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
h.bufferData(h.ELEMENT_ARRAY_BUFFER,this.indices,h.STATIC_DRAW);
h.bindBuffer(h.ARRAY_BUFFER,this.vertexBuffer);
h.bufferData(h.ARRAY_BUFFER,this.vertices,h.DYNAMIC_DRAW)
};
g.WebGLFastSpriteBatch.prototype.begin=function(h,i){this.renderSession=i;
this.shader=this.renderSession.shaderManager.fastShader;
this.matrix=h.worldTransform.toArray(true);
this.start()
};
g.WebGLFastSpriteBatch.prototype.end=function(){this.flush()
};
g.WebGLFastSpriteBatch.prototype.render=function(h){var n=h.children;
var m=n[0];
if(!m.texture._uvs){return
}this.currentBaseTexture=m.texture.baseTexture;
if(m.blendMode!==this.renderSession.blendModeManager.currentBlendMode){this.flush();
this.renderSession.blendModeManager.setBlendMode(m.blendMode)
}for(var l=0,k=n.length;
l<k;
l++){this.renderSprite(n[l])
}this.flush()
};
g.WebGLFastSpriteBatch.prototype.renderSprite=function(q){if(!q.visible){return
}if(q.texture.baseTexture!==this.currentBaseTexture){this.flush();
this.currentBaseTexture=q.texture.baseTexture;
if(!q.texture._uvs){return
}}var j,n=this.vertices,h,s,l,k,p,o,m;
j=q.texture._uvs;
h=q.texture.frame.width;
s=q.texture.frame.height;
if(q.texture.trim){var i=q.texture.trim;
k=i.x-q.anchor.x*i.width;
l=k+q.texture.crop.width;
o=i.y-q.anchor.y*i.height;
p=o+q.texture.crop.height
}else{l=(q.texture.frame.width)*(1-q.anchor.x);
k=(q.texture.frame.width)*-q.anchor.x;
p=q.texture.frame.height*(1-q.anchor.y);
o=q.texture.frame.height*-q.anchor.y
}m=this.currentBatchSize*4*this.vertSize;
n[m++]=k;
n[m++]=o;
n[m++]=q.position.x;
n[m++]=q.position.y;
n[m++]=q.scale.x;
n[m++]=q.scale.y;
n[m++]=q.rotation;
n[m++]=j.x0;
n[m++]=j.y1;
n[m++]=q.alpha;
n[m++]=l;
n[m++]=o;
n[m++]=q.position.x;
n[m++]=q.position.y;
n[m++]=q.scale.x;
n[m++]=q.scale.y;
n[m++]=q.rotation;
n[m++]=j.x1;
n[m++]=j.y1;
n[m++]=q.alpha;
n[m++]=l;
n[m++]=p;
n[m++]=q.position.x;
n[m++]=q.position.y;
n[m++]=q.scale.x;
n[m++]=q.scale.y;
n[m++]=q.rotation;
n[m++]=j.x2;
n[m++]=j.y2;
n[m++]=q.alpha;
n[m++]=k;
n[m++]=p;
n[m++]=q.position.x;
n[m++]=q.position.y;
n[m++]=q.scale.x;
n[m++]=q.scale.y;
n[m++]=q.rotation;
n[m++]=j.x3;
n[m++]=j.y3;
n[m++]=q.alpha;
this.currentBatchSize++;
if(this.currentBatchSize>=this.size){this.flush()
}};
g.WebGLFastSpriteBatch.prototype.flush=function(){if(this.currentBatchSize===0){return
}var i=this.gl;
if(!this.currentBaseTexture._glTextures[i.id]){this.renderSession.renderer.updateTexture(this.currentBaseTexture,i)
}i.bindTexture(i.TEXTURE_2D,this.currentBaseTexture._glTextures[i.id]);
if(this.currentBatchSize>(this.size*0.5)){i.bufferSubData(i.ARRAY_BUFFER,0,this.vertices)
}else{var h=this.vertices.subarray(0,this.currentBatchSize*4*this.vertSize);
i.bufferSubData(i.ARRAY_BUFFER,0,h)
}i.drawElements(i.TRIANGLES,this.currentBatchSize*6,i.UNSIGNED_SHORT,0);
this.currentBatchSize=0;
this.renderSession.drawCount++
};
g.WebGLFastSpriteBatch.prototype.stop=function(){this.flush()
};
g.WebGLFastSpriteBatch.prototype.start=function(){var j=this.gl;
j.activeTexture(j.TEXTURE0);
j.bindBuffer(j.ARRAY_BUFFER,this.vertexBuffer);
j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
var h=this.renderSession.projection;
j.uniform2f(this.shader.projectionVector,h.x,h.y);
j.uniformMatrix3fv(this.shader.uMatrix,false,this.matrix);
var i=this.vertSize*4;
j.vertexAttribPointer(this.shader.aVertexPosition,2,j.FLOAT,false,i,0);
j.vertexAttribPointer(this.shader.aPositionCoord,2,j.FLOAT,false,i,2*4);
j.vertexAttribPointer(this.shader.aScale,2,j.FLOAT,false,i,4*4);
j.vertexAttribPointer(this.shader.aRotation,1,j.FLOAT,false,i,6*4);
j.vertexAttribPointer(this.shader.aTextureCoord,2,j.FLOAT,false,i,7*4);
j.vertexAttribPointer(this.shader.colorAttribute,1,j.FLOAT,false,i,9*4)
};
g.WebGLFilterManager=function(){this.filterStack=[];
this.offsetX=0;
this.offsetY=0
};
g.WebGLFilterManager.prototype.constructor=g.WebGLFilterManager;
g.WebGLFilterManager.prototype.setContext=function(h){this.gl=h;
this.texturePool=[];
this.initShaderBuffers()
};
g.WebGLFilterManager.prototype.begin=function(j,i){this.renderSession=j;
this.defaultShader=j.shaderManager.defaultShader;
var h=this.renderSession.projection;
this.width=h.x*2;
this.height=-h.y*2;
this.buffer=i
};
g.WebGLFilterManager.prototype.pushFilter=function(i){var o=this.gl;
var h=this.renderSession.projection;
var n=this.renderSession.offset;
i._filterArea=i.target.filterArea||i.target.getBounds();
this.filterStack.push(i);
var j=i.filterPasses[0];
this.offsetX+=i._filterArea.x;
this.offsetY+=i._filterArea.y;
var k=this.texturePool.pop();
if(!k){k=new g.FilterTexture(this.gl,this.width,this.height)
}else{k.resize(this.width,this.height)
}o.bindTexture(o.TEXTURE_2D,k.texture);
var l=i._filterArea;
var m=j.padding;
l.x-=m;
l.y-=m;
l.width+=m*2;
l.height+=m*2;
if(l.x<0){l.x=0
}if(l.width>this.width){l.width=this.width
}if(l.y<0){l.y=0
}if(l.height>this.height){l.height=this.height
}o.bindFramebuffer(o.FRAMEBUFFER,k.frameBuffer);
o.viewport(0,0,l.width,l.height);
h.x=l.width/2;
h.y=-l.height/2;
n.x=-l.x;
n.y=-l.y;
o.colorMask(true,true,true,true);
o.clearColor(0,0,0,0);
o.clear(o.COLOR_BUFFER_BIT);
i._glFilterTexture=k
};
g.WebGLFilterManager.prototype.popFilter=function(){var v=this.gl;
var s=this.filterStack.pop();
var D=s._filterArea;
var p=s._glFilterTexture;
var E=this.renderSession.projection;
var l=this.renderSession.offset;
if(s.filterPasses.length>1){v.viewport(0,0,D.width,D.height);
v.bindBuffer(v.ARRAY_BUFFER,this.vertexBuffer);
this.vertexArray[0]=0;
this.vertexArray[1]=D.height;
this.vertexArray[2]=D.width;
this.vertexArray[3]=D.height;
this.vertexArray[4]=0;
this.vertexArray[5]=0;
this.vertexArray[6]=D.width;
this.vertexArray[7]=0;
v.bufferSubData(v.ARRAY_BUFFER,0,this.vertexArray);
v.bindBuffer(v.ARRAY_BUFFER,this.uvBuffer);
this.uvArray[2]=D.width/this.width;
this.uvArray[5]=D.height/this.height;
this.uvArray[6]=D.width/this.width;
this.uvArray[7]=D.height/this.height;
v.bufferSubData(v.ARRAY_BUFFER,0,this.uvArray);
var z=p;
var j=this.texturePool.pop();
if(!j){j=new g.FilterTexture(this.gl,this.width,this.height)
}j.resize(this.width,this.height);
v.bindFramebuffer(v.FRAMEBUFFER,j.frameBuffer);
v.clear(v.COLOR_BUFFER_BIT);
v.disable(v.BLEND);
for(var w=0;
w<s.filterPasses.length-1;
w++){var k=s.filterPasses[w];
v.bindFramebuffer(v.FRAMEBUFFER,j.frameBuffer);
v.activeTexture(v.TEXTURE0);
v.bindTexture(v.TEXTURE_2D,z.texture);
this.applyFilterPass(k,D,D.width,D.height);
var C=z;
z=j;
j=C
}v.enable(v.BLEND);
p=z;
this.texturePool.push(j)
}var o=s.filterPasses[s.filterPasses.length-1];
this.offsetX-=D.x;
this.offsetY-=D.y;
var t=this.width;
var q=this.height;
var B=0;
var A=0;
var u=this.buffer;
if(this.filterStack.length===0){v.colorMask(true,true,true,true)
}else{var h=this.filterStack[this.filterStack.length-1];
D=h._filterArea;
t=D.width;
q=D.height;
B=D.x;
A=D.y;
u=h._glFilterTexture.frameBuffer
}E.x=t/2;
E.y=-q/2;
l.x=B;
l.y=A;
D=s._filterArea;
var n=D.x-B;
var m=D.y-A;
v.bindBuffer(v.ARRAY_BUFFER,this.vertexBuffer);
this.vertexArray[0]=n;
this.vertexArray[1]=m+D.height;
this.vertexArray[2]=n+D.width;
this.vertexArray[3]=m+D.height;
this.vertexArray[4]=n;
this.vertexArray[5]=m;
this.vertexArray[6]=n+D.width;
this.vertexArray[7]=m;
v.bufferSubData(v.ARRAY_BUFFER,0,this.vertexArray);
v.bindBuffer(v.ARRAY_BUFFER,this.uvBuffer);
this.uvArray[2]=D.width/this.width;
this.uvArray[5]=D.height/this.height;
this.uvArray[6]=D.width/this.width;
this.uvArray[7]=D.height/this.height;
v.bufferSubData(v.ARRAY_BUFFER,0,this.uvArray);
v.viewport(0,0,t*this.renderSession.resolution,q*this.renderSession.resolution);
v.bindFramebuffer(v.FRAMEBUFFER,u);
v.activeTexture(v.TEXTURE0);
v.bindTexture(v.TEXTURE_2D,p.texture);
this.applyFilterPass(o,D,t,q);
this.texturePool.push(p);
s._glFilterTexture=null
};
g.WebGLFilterManager.prototype.applyFilterPass=function(j,l,i,h){var m=this.gl;
var k=j.shaders[m.id];
if(!k){k=new g.PixiShader(m);
k.fragmentSrc=j.fragmentSrc;
k.uniforms=j.uniforms;
k.init();
j.shaders[m.id]=k
}this.renderSession.shaderManager.setShader(k);
m.uniform2f(k.projectionVector,i/2,-h/2);
m.uniform2f(k.offsetVector,0,0);
if(j.uniforms.dimensions){j.uniforms.dimensions.value[0]=this.width;
j.uniforms.dimensions.value[1]=this.height;
j.uniforms.dimensions.value[2]=this.vertexArray[0];
j.uniforms.dimensions.value[3]=this.vertexArray[5]
}k.syncUniforms();
m.bindBuffer(m.ARRAY_BUFFER,this.vertexBuffer);
m.vertexAttribPointer(k.aVertexPosition,2,m.FLOAT,false,0,0);
m.bindBuffer(m.ARRAY_BUFFER,this.uvBuffer);
m.vertexAttribPointer(k.aTextureCoord,2,m.FLOAT,false,0,0);
m.bindBuffer(m.ARRAY_BUFFER,this.colorBuffer);
m.vertexAttribPointer(k.colorAttribute,2,m.FLOAT,false,0,0);
m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
m.drawElements(m.TRIANGLES,6,m.UNSIGNED_SHORT,0);
this.renderSession.drawCount++
};
g.WebGLFilterManager.prototype.initShaderBuffers=function(){var h=this.gl;
this.vertexBuffer=h.createBuffer();
this.uvBuffer=h.createBuffer();
this.colorBuffer=h.createBuffer();
this.indexBuffer=h.createBuffer();
this.vertexArray=new g.Float32Array([0,0,1,0,0,1,1,1]);
h.bindBuffer(h.ARRAY_BUFFER,this.vertexBuffer);
h.bufferData(h.ARRAY_BUFFER,this.vertexArray,h.STATIC_DRAW);
this.uvArray=new g.Float32Array([0,0,1,0,0,1,1,1]);
h.bindBuffer(h.ARRAY_BUFFER,this.uvBuffer);
h.bufferData(h.ARRAY_BUFFER,this.uvArray,h.STATIC_DRAW);
this.colorArray=new g.Float32Array([1,16777215,1,16777215,1,16777215,1,16777215]);
h.bindBuffer(h.ARRAY_BUFFER,this.colorBuffer);
h.bufferData(h.ARRAY_BUFFER,this.colorArray,h.STATIC_DRAW);
h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
h.bufferData(h.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,1,3,2]),h.STATIC_DRAW)
};
g.WebGLFilterManager.prototype.destroy=function(){var j=this.gl;
this.filterStack=null;
this.offsetX=0;
this.offsetY=0;
for(var h=0;
h<this.texturePool.length;
h++){this.texturePool[h].destroy()
}this.texturePool=null;
j.deleteBuffer(this.vertexBuffer);
j.deleteBuffer(this.uvBuffer);
j.deleteBuffer(this.colorBuffer);
j.deleteBuffer(this.indexBuffer)
};
g.FilterTexture=function(k,j,h,i){this.gl=k;
this.frameBuffer=k.createFramebuffer();
this.texture=k.createTexture();
i=i||g.scaleModes.DEFAULT;
k.bindTexture(k.TEXTURE_2D,this.texture);
k.texParameteri(k.TEXTURE_2D,k.TEXTURE_MAG_FILTER,i===g.scaleModes.LINEAR?k.LINEAR:k.NEAREST);
k.texParameteri(k.TEXTURE_2D,k.TEXTURE_MIN_FILTER,i===g.scaleModes.LINEAR?k.LINEAR:k.NEAREST);
k.texParameteri(k.TEXTURE_2D,k.TEXTURE_WRAP_S,k.CLAMP_TO_EDGE);
k.texParameteri(k.TEXTURE_2D,k.TEXTURE_WRAP_T,k.CLAMP_TO_EDGE);
k.bindFramebuffer(k.FRAMEBUFFER,this.frameBuffer);
k.bindFramebuffer(k.FRAMEBUFFER,this.frameBuffer);
k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,this.texture,0);
this.renderBuffer=k.createRenderbuffer();
k.bindRenderbuffer(k.RENDERBUFFER,this.renderBuffer);
k.framebufferRenderbuffer(k.FRAMEBUFFER,k.DEPTH_STENCIL_ATTACHMENT,k.RENDERBUFFER,this.renderBuffer);
this.resize(j,h)
};
g.FilterTexture.prototype.constructor=g.FilterTexture;
g.FilterTexture.prototype.clear=function(){var h=this.gl;
h.clearColor(0,0,0,0);
h.clear(h.COLOR_BUFFER_BIT)
};
g.FilterTexture.prototype.resize=function(i,h){if(this.width===i&&this.height===h){return
}this.width=i;
this.height=h;
var j=this.gl;
j.bindTexture(j.TEXTURE_2D,this.texture);
j.texImage2D(j.TEXTURE_2D,0,j.RGBA,i,h,0,j.RGBA,j.UNSIGNED_BYTE,null);
j.bindRenderbuffer(j.RENDERBUFFER,this.renderBuffer);
j.renderbufferStorage(j.RENDERBUFFER,j.DEPTH_STENCIL,i,h)
};
g.FilterTexture.prototype.destroy=function(){var h=this.gl;
h.deleteFramebuffer(this.frameBuffer);
h.deleteTexture(this.texture);
this.frameBuffer=null;
this.texture=null
};
g.CanvasBuffer=function(i,h){this.width=i;
this.height=h;
this.canvas=document.createElement("canvas");
this.context=this.canvas.getContext("2d");
this.canvas.width=i;
this.canvas.height=h
};
g.CanvasBuffer.prototype.constructor=g.CanvasBuffer;
g.CanvasBuffer.prototype.clear=function(){this.context.setTransform(1,0,0,1,0,0);
this.context.clearRect(0,0,this.width,this.height)
};
g.CanvasBuffer.prototype.resize=function(i,h){this.width=this.canvas.width=i;
this.height=this.canvas.height=h
};
g.CanvasMaskManager=function(){};
g.CanvasMaskManager.prototype.constructor=g.CanvasMaskManager;
g.CanvasMaskManager.prototype.pushMask=function(m,l){var k=l.context;
k.save();
var h=m.alpha;
var j=m.worldTransform;
var i=l.resolution;
k.setTransform(j.a*i,j.b*i,j.c*i,j.d*i,j.tx*i,j.ty*i);
g.CanvasGraphics.renderGraphicsMask(m,k);
k.clip();
m.worldAlpha=h
};
g.CanvasMaskManager.prototype.popMask=function(h){h.context.restore()
};
g.CanvasTinter=function(){};
g.CanvasTinter.getTintedTexture=function(k,h){var m=k.texture;
h=g.CanvasTinter.roundColor(h);
var l="#"+("00000"+(h|0).toString(16)).substr(-6);
m.tintCache=m.tintCache||{};
if(m.tintCache[l]){return m.tintCache[l]
}var i=g.CanvasTinter.canvas||document.createElement("canvas");
g.CanvasTinter.tintMethod(m,h,i);
if(g.CanvasTinter.convertTintToImage){var j=new Image();
j.src=i.toDataURL();
m.tintCache[l]=j
}else{m.tintCache[l]=i;
g.CanvasTinter.canvas=null
}return i
};
g.CanvasTinter.tintWithMultiply=function(l,h,i){var j=i.getContext("2d");
var k=l.crop;
i.width=k.width;
i.height=k.height;
j.fillStyle="#"+("00000"+(h|0).toString(16)).substr(-6);
j.fillRect(0,0,k.width,k.height);
j.globalCompositeOperation="multiply";
j.drawImage(l.baseTexture.source,k.x,k.y,k.width,k.height,0,0,k.width,k.height);
j.globalCompositeOperation="destination-atop";
j.drawImage(l.baseTexture.source,k.x,k.y,k.width,k.height,0,0,k.width,k.height)
};
g.CanvasTinter.tintWithOverlay=function(l,h,i){var j=i.getContext("2d");
var k=l.crop;
i.width=k.width;
i.height=k.height;
j.globalCompositeOperation="copy";
j.fillStyle="#"+("00000"+(h|0).toString(16)).substr(-6);
j.fillRect(0,0,k.width,k.height);
j.globalCompositeOperation="destination-atop";
j.drawImage(l.baseTexture.source,k.x,k.y,k.width,k.height,0,0,k.width,k.height)
};
g.CanvasTinter.tintWithPerPixel=function(s,n,l){var k=l.getContext("2d");
var p=s.crop;
l.width=p.width;
l.height=p.height;
k.globalCompositeOperation="copy";
k.drawImage(s.baseTexture.source,p.x,p.y,p.width,p.height,0,0,p.width,p.height);
var j=g.hex2rgb(n);
var h=j[0],q=j[1],t=j[2];
var u=k.getImageData(0,0,p.width,p.height);
var m=u.data;
for(var o=0;
o<m.length;
o+=4){m[o+0]*=h;
m[o+1]*=q;
m[o+2]*=t
}k.putImageData(u,0,0)
};
g.CanvasTinter.roundColor=function(h){var i=g.CanvasTinter.cacheStepsPerColorChannel;
var j=g.hex2rgb(h);
j[0]=Math.min(255,(j[0]/i)*i);
j[1]=Math.min(255,(j[1]/i)*i);
j[2]=Math.min(255,(j[2]/i)*i);
return g.rgb2hex(j)
};
g.CanvasTinter.cacheStepsPerColorChannel=8;
g.CanvasTinter.convertTintToImage=false;
g.CanvasTinter.canUseMultiply=g.canUseNewCanvasBlendModes();
g.CanvasTinter.tintMethod=g.CanvasTinter.canUseMultiply?g.CanvasTinter.tintWithMultiply:g.CanvasTinter.tintWithPerPixel;
g.CanvasRenderer=function(l,h,j){if(j){for(var k in g.defaultRenderOptions){if(typeof j[k]==="undefined"){j[k]=g.defaultRenderOptions[k]
}}}else{j=g.defaultRenderOptions
}if(!g.defaultRenderer){g.sayHello("Canvas");
g.defaultRenderer=this
}this.type=g.CANVAS_RENDERER;
this.resolution=j.resolution;
this.clearBeforeRender=j.clearBeforeRender;
this.transparent=j.transparent;
this.autoResize=j.autoResize||false;
this.width=l||800;
this.height=h||600;
this.width*=this.resolution;
this.height*=this.resolution;
this.view=j.view||document.createElement("canvas");
this.context=this.view.getContext("2d",{alpha:this.transparent});
this.refresh=true;
this.view.width=this.width*this.resolution;
this.view.height=this.height*this.resolution;
this.count=0;
this.maskManager=new g.CanvasMaskManager();
this.renderSession={context:this.context,maskManager:this.maskManager,scaleMode:null,smoothProperty:null,roundPixels:false};
this.mapBlendModes();
this.resize(l,h);
if("imageSmoothingEnabled" in this.context){this.renderSession.smoothProperty="imageSmoothingEnabled"
}else{if("webkitImageSmoothingEnabled" in this.context){this.renderSession.smoothProperty="webkitImageSmoothingEnabled"
}else{if("mozImageSmoothingEnabled" in this.context){this.renderSession.smoothProperty="mozImageSmoothingEnabled"
}else{if("oImageSmoothingEnabled" in this.context){this.renderSession.smoothProperty="oImageSmoothingEnabled"
}else{if("msImageSmoothingEnabled" in this.context){this.renderSession.smoothProperty="msImageSmoothingEnabled"
}}}}}};
g.CanvasRenderer.prototype.constructor=g.CanvasRenderer;
g.CanvasRenderer.prototype.render=function(h){h.updateTransform();
this.context.setTransform(1,0,0,1,0,0);
this.context.globalAlpha=1;
this.renderSession.currentBlendMode=g.blendModes.NORMAL;
this.context.globalCompositeOperation=g.blendModesCanvas[g.blendModes.NORMAL];
if(navigator.isCocoonJS&&this.view.screencanvas){this.context.fillStyle="black";
this.context.clear()
}if(this.clearBeforeRender){if(this.transparent){this.context.clearRect(0,0,this.width,this.height)
}else{this.context.fillStyle=h.backgroundColorString;
this.context.fillRect(0,0,this.width,this.height)
}}this.renderDisplayObject(h);
if(h.interactive){if(!h._interactiveEventsAdded){h._interactiveEventsAdded=true;
h.interactionManager.setTarget(this)
}}};
g.CanvasRenderer.prototype.destroy=function(h){if(typeof h==="undefined"){h=true
}if(h&&this.view.parent){this.view.parent.removeChild(this.view)
}this.view=null;
this.context=null;
this.maskManager=null;
this.renderSession=null
};
g.CanvasRenderer.prototype.resize=function(i,h){this.width=i*this.resolution;
this.height=h*this.resolution;
this.view.width=this.width;
this.view.height=this.height;
if(this.autoResize){this.view.style.width=this.width/this.resolution+"px";
this.view.style.height=this.height/this.resolution+"px"
}};
g.CanvasRenderer.prototype.renderDisplayObject=function(i,h){this.renderSession.context=h||this.context;
this.renderSession.resolution=this.resolution;
i._renderCanvas(this.renderSession)
};
g.CanvasRenderer.prototype.mapBlendModes=function(){if(!g.blendModesCanvas){g.blendModesCanvas=[];
if(g.canUseNewCanvasBlendModes()){g.blendModesCanvas[g.blendModes.NORMAL]="source-over";
g.blendModesCanvas[g.blendModes.ADD]="lighter";
g.blendModesCanvas[g.blendModes.MULTIPLY]="multiply";
g.blendModesCanvas[g.blendModes.SCREEN]="screen";
g.blendModesCanvas[g.blendModes.OVERLAY]="overlay";
g.blendModesCanvas[g.blendModes.DARKEN]="darken";
g.blendModesCanvas[g.blendModes.LIGHTEN]="lighten";
g.blendModesCanvas[g.blendModes.COLOR_DODGE]="color-dodge";
g.blendModesCanvas[g.blendModes.COLOR_BURN]="color-burn";
g.blendModesCanvas[g.blendModes.HARD_LIGHT]="hard-light";
g.blendModesCanvas[g.blendModes.SOFT_LIGHT]="soft-light";
g.blendModesCanvas[g.blendModes.DIFFERENCE]="difference";
g.blendModesCanvas[g.blendModes.EXCLUSION]="exclusion";
g.blendModesCanvas[g.blendModes.HUE]="hue";
g.blendModesCanvas[g.blendModes.SATURATION]="saturation";
g.blendModesCanvas[g.blendModes.COLOR]="color";
g.blendModesCanvas[g.blendModes.LUMINOSITY]="luminosity"
}else{g.blendModesCanvas[g.blendModes.NORMAL]="source-over";
g.blendModesCanvas[g.blendModes.ADD]="lighter";
g.blendModesCanvas[g.blendModes.MULTIPLY]="source-over";
g.blendModesCanvas[g.blendModes.SCREEN]="source-over";
g.blendModesCanvas[g.blendModes.OVERLAY]="source-over";
g.blendModesCanvas[g.blendModes.DARKEN]="source-over";
g.blendModesCanvas[g.blendModes.LIGHTEN]="source-over";
g.blendModesCanvas[g.blendModes.COLOR_DODGE]="source-over";
g.blendModesCanvas[g.blendModes.COLOR_BURN]="source-over";
g.blendModesCanvas[g.blendModes.HARD_LIGHT]="source-over";
g.blendModesCanvas[g.blendModes.SOFT_LIGHT]="source-over";
g.blendModesCanvas[g.blendModes.DIFFERENCE]="source-over";
g.blendModesCanvas[g.blendModes.EXCLUSION]="source-over";
g.blendModesCanvas[g.blendModes.HUE]="source-over";
g.blendModesCanvas[g.blendModes.SATURATION]="source-over";
g.blendModesCanvas[g.blendModes.COLOR]="source-over";
g.blendModesCanvas[g.blendModes.LUMINOSITY]="source-over"
}}};
g.CanvasGraphics=function(){};
g.CanvasGraphics.renderGraphics=function(M,n){var H=M.worldAlpha;
if(M.dirty){this.updateGraphicsTint(M);
M.dirty=false
}for(var K=0;
K<M.graphicsData.length;
K++){var O=M.graphicsData[K];
var m=O.shape;
var t=O._fillTint;
var l=O._lineTint;
n.lineWidth=O.lineWidth;
if(O.type===g.Graphics.POLY){n.beginPath();
var J=m.points;
n.moveTo(J[0],J[1]);
for(var I=1;
I<J.length/2;
I++){n.lineTo(J[I*2],J[I*2+1])
}if(m.closed){n.lineTo(J[0],J[1])
}if(J[0]===J[J.length-2]&&J[1]===J[J.length-1]){n.closePath()
}if(O.fill){n.globalAlpha=O.fillAlpha*H;
n.fillStyle="#"+("00000"+(t|0).toString(16)).substr(-6);
n.fill()
}if(O.lineWidth){n.globalAlpha=O.lineAlpha*H;
n.strokeStyle="#"+("00000"+(l|0).toString(16)).substr(-6);
n.stroke()
}}else{if(O.type===g.Graphics.RECT){if(O.fillColor||O.fillColor===0){n.globalAlpha=O.fillAlpha*H;
n.fillStyle="#"+("00000"+(t|0).toString(16)).substr(-6);
n.fillRect(m.x,m.y,m.width,m.height)
}if(O.lineWidth){n.globalAlpha=O.lineAlpha*H;
n.strokeStyle="#"+("00000"+(l|0).toString(16)).substr(-6);
n.strokeRect(m.x,m.y,m.width,m.height)
}}else{if(O.type===g.Graphics.CIRC){n.beginPath();
n.arc(m.x,m.y,m.radius,0,2*Math.PI);
n.closePath();
if(O.fill){n.globalAlpha=O.fillAlpha*H;
n.fillStyle="#"+("00000"+(t|0).toString(16)).substr(-6);
n.fill()
}if(O.lineWidth){n.globalAlpha=O.lineAlpha*H;
n.strokeStyle="#"+("00000"+(l|0).toString(16)).substr(-6);
n.stroke()
}}else{if(O.type===g.Graphics.ELIP){var B=m.width*2;
var L=m.height*2;
var A=m.x-B/2;
var z=m.y-L/2;
n.beginPath();
var C=0.5522848,s=(B/2)*C,p=(L/2)*C,G=A+B,k=z+L,D=A+B/2,N=z+L/2;
n.moveTo(A,N);
n.bezierCurveTo(A,N-p,D-s,z,D,z);
n.bezierCurveTo(D+s,z,G,N-p,G,N);
n.bezierCurveTo(G,N+p,D+s,k,D,k);
n.bezierCurveTo(D-s,k,A,N+p,A,N);
n.closePath();
if(O.fill){n.globalAlpha=O.fillAlpha*H;
n.fillStyle="#"+("00000"+(t|0).toString(16)).substr(-6);
n.fill()
}if(O.lineWidth){n.globalAlpha=O.lineAlpha*H;
n.strokeStyle="#"+("00000"+(l|0).toString(16)).substr(-6);
n.stroke()
}}else{if(O.type===g.Graphics.RREC){var u=m.x;
var q=m.y;
var F=m.width;
var E=m.height;
var o=m.radius;
var v=Math.min(F,E)/2|0;
o=o>v?v:o;
n.beginPath();
n.moveTo(u,q+o);
n.lineTo(u,q+E-o);
n.quadraticCurveTo(u,q+E,u+o,q+E);
n.lineTo(u+F-o,q+E);
n.quadraticCurveTo(u+F,q+E,u+F,q+E-o);
n.lineTo(u+F,q+o);
n.quadraticCurveTo(u+F,q,u+F-o,q);
n.lineTo(u+o,q);
n.quadraticCurveTo(u,q,u,q+o);
n.closePath();
if(O.fillColor||O.fillColor===0){n.globalAlpha=O.fillAlpha*H;
n.fillStyle="#"+("00000"+(t|0).toString(16)).substr(-6);
n.fill()
}if(O.lineWidth){n.globalAlpha=O.lineAlpha*H;
n.strokeStyle="#"+("00000"+(l|0).toString(16)).substr(-6);
n.stroke()
}}}}}}}};
g.CanvasGraphics.renderGraphicsMask=function(K,m){var I=K.graphicsData.length;
if(I===0){return
}if(I>1){I=1;
window.console.log("Pixi.js warning: masks in canvas can only mask using the first path in the graphics object")
}for(var H=0;
H<1;
H++){var M=K.graphicsData[H];
var l=M.shape;
if(M.type===g.Graphics.POLY){m.beginPath();
var G=l.points;
m.moveTo(G[0],G[1]);
for(var F=1;
F<G.length/2;
F++){m.lineTo(G[F*2],G[F*2+1])
}if(G[0]===G[G.length-2]&&G[1]===G[G.length-1]){m.closePath()
}}else{if(M.type===g.Graphics.RECT){m.beginPath();
m.rect(l.x,l.y,l.width,l.height);
m.closePath()
}else{if(M.type===g.Graphics.CIRC){m.beginPath();
m.arc(l.x,l.y,l.radius,0,2*Math.PI);
m.closePath()
}else{if(M.type===g.Graphics.ELIP){var z=l.width*2;
var J=l.height*2;
var v=l.x-z/2;
var u=l.y-J/2;
m.beginPath();
var A=0.5522848,q=(z/2)*A,o=(J/2)*A,E=v+z,k=u+J,B=v+z/2,L=u+J/2;
m.moveTo(v,L);
m.bezierCurveTo(v,L-o,B-q,u,B,u);
m.bezierCurveTo(B+q,u,E,L-o,E,L);
m.bezierCurveTo(E,L+o,B+q,k,B,k);
m.bezierCurveTo(B-q,k,v,L+o,v,L);
m.closePath()
}else{if(M.type===g.Graphics.RREC){var N=l.points;
var s=N[0];
var p=N[1];
var D=N[2];
var C=N[3];
var n=N[4];
var t=Math.min(D,C)/2|0;
n=n>t?t:n;
m.beginPath();
m.moveTo(s,p+n);
m.lineTo(s,p+C-n);
m.quadraticCurveTo(s,p+C,s+n,p+C);
m.lineTo(s+D-n,p+C);
m.quadraticCurveTo(s+D,p+C,s+D,p+C-n);
m.lineTo(s+D,p+n);
m.quadraticCurveTo(s+D,p,s+D-n,p);
m.lineTo(s+n,p);
m.quadraticCurveTo(s,p,s,p+n);
m.closePath()
}}}}}}};
g.CanvasGraphics.updateGraphicsTint=function(k){if(k.tint===16777215){return
}var j=(k.tint>>16&255)/255;
var h=(k.tint>>8&255)/255;
var n=(k.tint&255)/255;
for(var l=0;
l<k.graphicsData.length;
l++){var m=k.graphicsData[l];
var p=m.fillColor|0;
var o=m.lineColor|0;
m._fillTint=(((p>>16&255)/255*j*255<<16)+((p>>8&255)/255*h*255<<8)+(p&255)/255*n*255);
m._lineTint=(((o>>16&255)/255*j*255<<16)+((o>>8&255)/255*h*255<<8)+(o&255)/255*n*255)
}};
g.Graphics=function(){g.DisplayObjectContainer.call(this);
this.renderable=true;
this.fillAlpha=1;
this.lineWidth=0;
this.lineColor=0;
this.graphicsData=[];
this.tint=16777215;
this.blendMode=g.blendModes.NORMAL;
this.currentPath=null;
this._webGL=[];
this.isMask=false;
this.boundsPadding=0;
this._localBounds=new g.Rectangle(0,0,1,1);
this.dirty=true;
this.webGLDirty=false;
this.cachedSpriteDirty=false
};
g.Graphics.prototype=Object.create(g.DisplayObjectContainer.prototype);
g.Graphics.prototype.constructor=g.Graphics;
Object.defineProperty(g.Graphics.prototype,"cacheAsBitmap",{get:function(){return this._cacheAsBitmap
},set:function(h){this._cacheAsBitmap=h;
if(this._cacheAsBitmap){this._generateCachedSprite()
}else{this.destroyCachedSprite();
this.dirty=true
}}});
g.Graphics.prototype.lineStyle=function(h,i,j){this.lineWidth=h||0;
this.lineColor=i||0;
this.lineAlpha=(arguments.length<3)?1:j;
if(this.currentPath){if(this.currentPath.shape.points.length){this.drawShape(new g.Polygon(this.currentPath.shape.points.slice(-2)));
return this
}this.currentPath.lineWidth=this.lineWidth;
this.currentPath.lineColor=this.lineColor;
this.currentPath.lineAlpha=this.lineAlpha
}return this
};
g.Graphics.prototype.moveTo=function(h,i){this.drawShape(new g.Polygon([h,i]));
return this
};
g.Graphics.prototype.lineTo=function(h,i){this.currentPath.shape.points.push(h,i);
this.dirty=true;
return this
};
g.Graphics.prototype.quadraticCurveTo=function(t,o,v,s){if(this.currentPath){if(this.currentPath.shape.points.length===0){this.currentPath.shape.points=[0,0]
}}else{this.moveTo(0,0)
}var h,p,k=20,w=this.currentPath.shape.points;
if(w.length===0){this.moveTo(0,0)
}var u=w[w.length-2];
var q=w[w.length-1];
var l=0;
for(var m=1;
m<=k;
m++){l=m/k;
h=u+((t-u)*l);
p=q+((o-q)*l);
w.push(h+(((t+((v-t)*l))-h)*l),p+(((o+((s-o)*l))-p)*l))
}this.dirty=true;
return this
};
g.Graphics.prototype.bezierCurveTo=function(y,u,x,p,A,w){if(this.currentPath){if(this.currentPath.shape.points.length===0){this.currentPath.shape.points=[0,0]
}}else{this.moveTo(0,0)
}var m=20,k,l,h,t,s,B=this.currentPath.shape.points;
var z=B[B.length-2];
var v=B[B.length-1];
var o=0;
for(var q=1;
q<=m;
q++){o=q/m;
k=(1-o);
l=k*k;
h=l*k;
t=o*o;
s=t*o;
B.push(h*z+3*l*o*y+3*k*t*x+s*A,h*v+3*l*o*u+3*k*t*p+s*w)
}this.dirty=true;
return this
};
g.Graphics.prototype.arcTo=function(E,n,D,l,o){if(this.currentPath){if(this.currentPath.shape.points.length===0){this.currentPath.shape.points.push(E,n)
}}else{this.moveTo(E,n)
}var B=this.currentPath.shape.points;
var w=B[B.length-2];
var u=B[B.length-1];
var J=u-n;
var q=w-E;
var I=l-n;
var p=D-E;
var C=Math.abs(J*p-q*I);
if(C<1e-8||o===0){if(B[B.length-2]!==E||B[B.length-1]!==n){B.push(E,n)
}}else{var H=J*J+q*q;
var y=I*I+p*p;
var i=J*I+q*p;
var t=o*Math.sqrt(H)/C;
var s=o*Math.sqrt(y)/C;
var j=t*i/H;
var h=s*i/y;
var m=t*p+s*q;
var k=t*I+s*J;
var x=q*(s+j);
var v=J*(s+j);
var G=p*(t+h);
var F=I*(t+h);
var A=Math.atan2(v-k,x-m);
var z=Math.atan2(F-k,G-m);
this.arc(m+E,k+n,o,A,z,q*I>p*J)
}this.dirty=true;
return this
};
g.Graphics.prototype.arc=function(k,j,l,x,v,h){var D=k+Math.cos(x)*l;
var B=j+Math.sin(x)*l;
var A;
if(this.currentPath){A=this.currentPath.shape.points;
if(A.length===0){A.push(D,B)
}else{if(A[A.length-2]!==D||A[A.length-1]!==B){A.push(D,B)
}}}else{this.moveTo(D,B);
A=this.currentPath.shape.points
}if(x===v){return this
}if(!h&&v<=x){v+=Math.PI*2
}else{if(h&&x<=v){x+=Math.PI*2
}}var p=h?(x-v)*-1:(v-x);
var u=(Math.abs(p)/(Math.PI*2))*40;
if(p===0){return this
}var m=p/(u*2);
var t=m*2;
var w=Math.cos(m);
var y=Math.sin(m);
var F=u-1;
var n=(F%1)/F;
for(var z=0;
z<=F;
z++){var q=z+n*z;
var C=((m)+x+(t*q));
var E=Math.cos(C);
var o=-Math.sin(C);
A.push(((w*E)+(y*o))*l+k,((w*-o)+(y*E))*l+j)
}this.dirty=true;
return this
};
g.Graphics.prototype.beginFill=function(h,i){this.filling=true;
this.fillColor=h||0;
this.fillAlpha=(i===undefined)?1:i;
if(this.currentPath){if(this.currentPath.shape.points.length<=2){this.currentPath.fill=this.filling;
this.currentPath.fillColor=this.fillColor;
this.currentPath.fillAlpha=this.fillAlpha
}}return this
};
g.Graphics.prototype.endFill=function(){this.filling=false;
this.fillColor=null;
this.fillAlpha=1;
return this
};
g.Graphics.prototype.drawRect=function(i,k,j,h){this.drawShape(new g.Rectangle(i,k,j,h));
return this
};
g.Graphics.prototype.drawRoundedRect=function(j,l,k,i,h){this.drawShape(new g.RoundedRectangle(j,l,k,i,h));
return this
};
g.Graphics.prototype.drawCircle=function(i,j,h){this.drawShape(new g.Circle(i,j,h));
return this
};
g.Graphics.prototype.drawEllipse=function(i,k,j,h){this.drawShape(new g.Ellipse(i,k,j,h));
return this
};
g.Graphics.prototype.drawPolygon=function(h){if(!(h instanceof Array)){h=Array.prototype.slice.call(arguments)
}this.drawShape(new g.Polygon(h));
return this
};
g.Graphics.prototype.clear=function(){this.lineWidth=0;
this.filling=false;
this.dirty=true;
this.clearDirty=true;
this.graphicsData=[];
return this
};
g.Graphics.prototype.generateTexture=function(h,j){h=h||1;
var l=this.getBounds();
var i=new g.CanvasBuffer(l.width*h,l.height*h);
var k=g.Texture.fromCanvas(i.canvas,j);
k.baseTexture.resolution=h;
i.context.scale(h,h);
i.context.translate(-l.x,-l.y);
g.CanvasGraphics.renderGraphics(this,i.context);
return k
};
g.Graphics.prototype._renderWebGL=function(l){if(this.visible===false||this.alpha===0||this.isMask===true){return
}if(this._cacheAsBitmap){if(this.dirty||this.cachedSpriteDirty){this._generateCachedSprite();
this.updateCachedSpriteTexture();
this.cachedSpriteDirty=false;
this.dirty=false
}this._cachedSprite.worldAlpha=this.worldAlpha;
g.Sprite.prototype._renderWebGL.call(this._cachedSprite,l);
return
}else{l.spriteBatch.stop();
l.blendModeManager.setBlendMode(this.blendMode);
if(this._mask){l.maskManager.pushMask(this._mask,l)
}if(this._filters){l.filterManager.pushFilter(this._filterBlock)
}if(this.blendMode!==l.spriteBatch.currentBlendMode){l.spriteBatch.currentBlendMode=this.blendMode;
var m=g.blendModesWebGL[l.spriteBatch.currentBlendMode];
l.spriteBatch.gl.blendFunc(m[0],m[1])
}if(this.webGLDirty){this.dirty=true;
this.webGLDirty=false
}g.WebGLGraphics.renderGraphics(this,l);
if(this.children.length){l.spriteBatch.start();
for(var k=0,h=this.children.length;
k<h;
k++){this.children[k]._renderWebGL(l)
}l.spriteBatch.stop()
}if(this._filters){l.filterManager.popFilter()
}if(this._mask){l.maskManager.popMask(this.mask,l)
}l.drawCount++;
l.spriteBatch.start()
}};
g.Graphics.prototype._renderCanvas=function(o){if(this.visible===false||this.alpha===0||this.isMask===true){return
}if(this._cacheAsBitmap){if(this.dirty||this.cachedSpriteDirty){this._generateCachedSprite();
this.updateCachedSpriteTexture();
this.cachedSpriteDirty=false;
this.dirty=false
}this._cachedSprite.alpha=this.alpha;
g.Sprite.prototype._renderCanvas.call(this._cachedSprite,o);
return
}else{var n=o.context;
var l=this.worldTransform;
if(this.blendMode!==o.currentBlendMode){o.currentBlendMode=this.blendMode;
n.globalCompositeOperation=g.blendModesCanvas[o.currentBlendMode]
}if(this._mask){o.maskManager.pushMask(this._mask,o)
}var k=o.resolution;
n.setTransform(l.a*k,l.b*k,l.c*k,l.d*k,l.tx*k,l.ty*k);
g.CanvasGraphics.renderGraphics(this,n);
for(var m=0,h=this.children.length;
m<h;
m++){this.children[m]._renderCanvas(o)
}if(this._mask){o.maskManager.popMask(o)
}}};
g.Graphics.prototype.getBounds=function(t){if(this.isMask){return g.EmptyRectangle
}if(this.dirty){this.updateLocalBounds();
this.webGLDirty=true;
this.cachedSpriteDirty=true;
this.dirty=false
}var l=this._localBounds;
var p=l.x;
var o=l.width+l.x;
var n=l.y;
var m=l.height+l.y;
var q=t||this.worldTransform;
var F=q.a;
var D=q.b;
var C=q.c;
var A=q.d;
var G=q.tx;
var E=q.ty;
var w=F*o+C*m+G;
var k=A*m+D*o+E;
var v=F*p+C*m+G;
var j=A*m+D*p+E;
var u=F*p+C*n+G;
var i=A*n+D*p+E;
var s=F*o+C*n+G;
var h=A*n+D*o+E;
var z=w;
var x=k;
var B=w;
var y=k;
B=v<B?v:B;
B=u<B?u:B;
B=s<B?s:B;
y=j<y?j:y;
y=i<y?i:y;
y=h<y?h:y;
z=v>z?v:z;
z=u>z?u:z;
z=s>z?s:z;
x=j>x?j:x;
x=i>x?i:x;
x=h>x?h:x;
this._bounds.x=B;
this._bounds.width=z-B;
this._bounds.y=y;
this._bounds.height=x-y;
return this._bounds
};
g.Graphics.prototype.updateLocalBounds=function(){var n=Infinity;
var l=-Infinity;
var m=Infinity;
var k=-Infinity;
if(this.graphicsData.length){var u,D,B,z,C,s;
for(var q=0;
q<this.graphicsData.length;
q++){var p=this.graphicsData[q];
var v=p.type;
var t=p.lineWidth;
u=p.shape;
if(v===g.Graphics.RECT||v===g.Graphics.RREC){B=u.x-t/2;
z=u.y-t/2;
C=u.width+t;
s=u.height+t;
n=B<n?B:n;
l=B+C>l?B+C:l;
m=z<m?z:m;
k=z+s>k?z+s:k
}else{if(v===g.Graphics.CIRC){B=u.x;
z=u.y;
C=u.radius+t/2;
s=u.radius+t/2;
n=B-C<n?B-C:n;
l=B+C>l?B+C:l;
m=z-s<m?z-s:m;
k=z+s>k?z+s:k
}else{if(v===g.Graphics.ELIP){B=u.x;
z=u.y;
C=u.width+t/2;
s=u.height+t/2;
n=B-C<n?B-C:n;
l=B+C>l?B+C:l;
m=z-s<m?z-s:m;
k=z+s>k?z+s:k
}else{D=u.points;
for(var o=0;
o<D.length;
o+=2){B=D[o];
z=D[o+1];
n=B-t<n?B-t:n;
l=B+t>l?B+t:l;
m=z-t<m?z-t:m;
k=z+t>k?z+t:k
}}}}}}else{n=0;
l=0;
m=0;
k=0
}var A=this.boundsPadding;
this._localBounds.x=n-A;
this._localBounds.width=(l-n)+A*2;
this._localBounds.y=m-A;
this._localBounds.height=(k-m)+A*2
};
g.Graphics.prototype._generateCachedSprite=function(){var j=this.getLocalBounds();
if(!this._cachedSprite){var h=new g.CanvasBuffer(j.width,j.height);
var i=g.Texture.fromCanvas(h.canvas);
this._cachedSprite=new g.Sprite(i);
this._cachedSprite.buffer=h;
this._cachedSprite.worldTransform=this.worldTransform
}else{this._cachedSprite.buffer.resize(j.width,j.height)
}this._cachedSprite.anchor.x=-(j.x/j.width);
this._cachedSprite.anchor.y=-(j.y/j.height);
this._cachedSprite.buffer.context.translate(-j.x,-j.y);
this.worldAlpha=1;
g.CanvasGraphics.renderGraphics(this,this._cachedSprite.buffer.context);
this._cachedSprite.alpha=this.alpha
};
g.Graphics.prototype.updateCachedSpriteTexture=function(){var j=this._cachedSprite;
var i=j.texture;
var h=j.buffer.canvas;
i.baseTexture.width=h.width;
i.baseTexture.height=h.height;
i.crop.width=i.frame.width=h.width;
i.crop.height=i.frame.height=h.height;
j._width=h.width;
j._height=h.height;
i.baseTexture.dirty()
};
g.Graphics.prototype.destroyCachedSprite=function(){this._cachedSprite.texture.destroy(true);
this._cachedSprite=null
};
g.Graphics.prototype.drawShape=function(h){if(this.currentPath){if(this.currentPath.shape.points.length<=2){this.graphicsData.pop()
}}this.currentPath=null;
var i=new g.GraphicsData(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.filling,h);
this.graphicsData.push(i);
if(i.type===g.Graphics.POLY){i.shape.closed=this.filling;
this.currentPath=i
}this.dirty=true;
return i
};
g.GraphicsData=function(h,m,j,n,k,l,i){this.lineWidth=h;
this.lineColor=m;
this.lineAlpha=j;
this._lineTint=m;
this.fillColor=n;
this.fillAlpha=k;
this._fillTint=n;
this.fill=l;
this.shape=i;
this.type=i.type
};
g.Graphics.POLY=0;
g.Graphics.RECT=1;
g.Graphics.CIRC=2;
g.Graphics.ELIP=3;
g.Graphics.RREC=4;
g.Polygon.prototype.type=g.Graphics.POLY;
g.Rectangle.prototype.type=g.Graphics.RECT;
g.Circle.prototype.type=g.Graphics.CIRC;
g.Ellipse.prototype.type=g.Graphics.ELIP;
g.RoundedRectangle.prototype.type=g.Graphics.RREC;
g.Strip=function(h){g.DisplayObjectContainer.call(this);
this.texture=h;
this.uvs=new g.Float32Array([0,1,1,1,1,0,0,1]);
this.vertices=new g.Float32Array([0,0,100,0,100,100,0,100]);
this.colors=new g.Float32Array([1,1,1,1]);
this.indices=new g.Uint16Array([0,1,2,3]);
this.dirty=true;
this.blendMode=g.blendModes.NORMAL;
this.canvasPadding=0;
this.drawMode=g.Strip.DrawModes.TRIANGLE_STRIP
};
g.Strip.prototype=Object.create(g.DisplayObjectContainer.prototype);
g.Strip.prototype.constructor=g.Strip;
g.Strip.prototype._renderWebGL=function(h){if(!this.visible||this.alpha<=0){return
}h.spriteBatch.stop();
if(!this._vertexBuffer){this._initWebGL(h)
}h.shaderManager.setShader(h.shaderManager.stripShader);
this._renderStrip(h);
h.spriteBatch.start()
};
g.Strip.prototype._initWebGL=function(h){var i=h.gl;
this._vertexBuffer=i.createBuffer();
this._indexBuffer=i.createBuffer();
this._uvBuffer=i.createBuffer();
this._colorBuffer=i.createBuffer();
i.bindBuffer(i.ARRAY_BUFFER,this._vertexBuffer);
i.bufferData(i.ARRAY_BUFFER,this.vertices,i.DYNAMIC_DRAW);
i.bindBuffer(i.ARRAY_BUFFER,this._uvBuffer);
i.bufferData(i.ARRAY_BUFFER,this.uvs,i.STATIC_DRAW);
i.bindBuffer(i.ARRAY_BUFFER,this._colorBuffer);
i.bufferData(i.ARRAY_BUFFER,this.colors,i.STATIC_DRAW);
i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,this._indexBuffer);
i.bufferData(i.ELEMENT_ARRAY_BUFFER,this.indices,i.STATIC_DRAW)
};
g.Strip.prototype._renderStrip=function(k){var m=k.gl;
var h=k.projection,l=k.offset,i=k.shaderManager.stripShader;
var j=this.drawMode===g.Strip.DrawModes.TRIANGLE_STRIP?m.TRIANGLE_STRIP:m.TRIANGLES;
k.blendModeManager.setBlendMode(this.blendMode);
m.uniformMatrix3fv(i.translationMatrix,false,this.worldTransform.toArray(true));
m.uniform2f(i.projectionVector,h.x,-h.y);
m.uniform2f(i.offsetVector,-l.x,-l.y);
m.uniform1f(i.alpha,this.worldAlpha);
if(!this.dirty){m.bindBuffer(m.ARRAY_BUFFER,this._vertexBuffer);
m.bufferSubData(m.ARRAY_BUFFER,0,this.vertices);
m.vertexAttribPointer(i.aVertexPosition,2,m.FLOAT,false,0,0);
m.bindBuffer(m.ARRAY_BUFFER,this._uvBuffer);
m.vertexAttribPointer(i.aTextureCoord,2,m.FLOAT,false,0,0);
m.activeTexture(m.TEXTURE0);
if(this.texture.baseTexture._dirty[m.id]){k.renderer.updateTexture(this.texture.baseTexture)
}else{m.bindTexture(m.TEXTURE_2D,this.texture.baseTexture._glTextures[m.id])
}m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,this._indexBuffer)
}else{this.dirty=false;
m.bindBuffer(m.ARRAY_BUFFER,this._vertexBuffer);
m.bufferData(m.ARRAY_BUFFER,this.vertices,m.STATIC_DRAW);
m.vertexAttribPointer(i.aVertexPosition,2,m.FLOAT,false,0,0);
m.bindBuffer(m.ARRAY_BUFFER,this._uvBuffer);
m.bufferData(m.ARRAY_BUFFER,this.uvs,m.STATIC_DRAW);
m.vertexAttribPointer(i.aTextureCoord,2,m.FLOAT,false,0,0);
m.activeTexture(m.TEXTURE0);
if(this.texture.baseTexture._dirty[m.id]){k.renderer.updateTexture(this.texture.baseTexture)
}else{m.bindTexture(m.TEXTURE_2D,this.texture.baseTexture._glTextures[m.id])
}m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,this._indexBuffer);
m.bufferData(m.ELEMENT_ARRAY_BUFFER,this.indices,m.STATIC_DRAW)
}m.drawElements(j,this.indices.length,m.UNSIGNED_SHORT,0)
};
g.Strip.prototype._renderCanvas=function(j){var i=j.context;
var h=this.worldTransform;
if(j.roundPixels){i.setTransform(h.a,h.b,h.c,h.d,h.tx|0,h.ty|0)
}else{i.setTransform(h.a,h.b,h.c,h.d,h.tx,h.ty)
}if(this.drawMode===g.Strip.DrawModes.TRIANGLE_STRIP){this._renderCanvasTriangleStrip(i)
}else{this._renderCanvasTriangles(i)
}};
g.Strip.prototype._renderCanvasTriangleStrip=function(m){var j=this.vertices;
var l=this.uvs;
var n=j.length/2;
this.count++;
for(var k=0;
k<n-2;
k++){var h=k*2;
this._renderCanvasDrawTriangle(m,j,l,h,(h+2),(h+4))
}};
g.Strip.prototype._renderCanvasTriangles=function(h){var n=this.vertices;
var k=this.uvs;
var q=this.indices;
var j=q.length;
this.count++;
for(var l=0;
l<j;
l+=3){var p=q[l]*2,o=q[l+1]*2,m=q[l+2]*2;
this._renderCanvasDrawTriangle(h,n,k,p,o,m)
}};
g.Strip.prototype._renderCanvasDrawTriangle=function(m,t,D,v,s,q){var j=this.texture.baseTexture.source;
var h=this.texture.width;
var E=this.texture.height;
var P=t[v],O=t[s],M=t[q];
var p=t[v+1],o=t[s+1],l=t[q+1];
var N=D[v]*h,L=D[s]*h,K=D[q]*h;
var n=D[v+1]*E,k=D[s+1]*E,i=D[q+1]*E;
if(this.canvasPadding>0){var J=this.canvasPadding/this.worldTransform.a;
var I=this.canvasPadding/this.worldTransform.d;
var B=(P+O+M)/3;
var z=(p+o+l)/3;
var H=P-B;
var G=p-z;
var F=Math.sqrt(H*H+G*G);
P=B+(H/F)*(F+J);
p=z+(G/F)*(F+I);
H=O-B;
G=o-z;
F=Math.sqrt(H*H+G*G);
O=B+(H/F)*(F+J);
o=z+(G/F)*(F+I);
H=M-B;
G=l-z;
F=Math.sqrt(H*H+G*G);
M=B+(H/F)*(F+J);
l=z+(G/F)*(F+I)
}m.save();
m.beginPath();
m.moveTo(P,p);
m.lineTo(O,o);
m.lineTo(M,l);
m.closePath();
m.clip();
var Q=(N*k)+(n*K)+(L*i)-(k*K)-(n*L)-(N*i);
var C=(P*k)+(n*M)+(O*i)-(k*M)-(n*O)-(P*i);
var A=(N*O)+(P*K)+(L*M)-(O*K)-(P*L)-(N*M);
var y=(N*k*M)+(n*O*K)+(P*L*i)-(P*k*K)-(n*L*M)-(N*O*i);
var x=(p*k)+(n*l)+(o*i)-(k*l)-(n*o)-(p*i);
var w=(N*o)+(p*K)+(L*l)-(o*K)-(p*L)-(N*l);
var u=(N*k*l)+(n*o*K)+(p*L*i)-(p*k*K)-(n*L*l)-(N*o*i);
m.transform(C/Q,x/Q,A/Q,w/Q,y/Q,u/Q);
m.drawImage(j,0,0);
m.restore()
};
g.Strip.prototype.renderStripFlat=function(j){var k=this.context;
var q=j.vertices;
var m=q.length/2;
this.count++;
k.beginPath();
for(var o=1;
o<m-2;
o++){var p=o*2;
var n=q[p],l=q[p+2],h=q[p+4];
var u=q[p+1],t=q[p+3],s=q[p+5];
k.moveTo(n,u);
k.lineTo(l,t);
k.lineTo(h,s)
}k.fillStyle="#FF0000";
k.fill();
k.closePath()
};
g.Strip.prototype.onTextureUpdate=function(){this.updateFrame=true
};
g.Strip.prototype.getBounds=function(s){var q=s||this.worldTransform;
var E=q.a;
var C=q.b;
var A=q.c;
var v=q.d;
var F=q.tx;
var D=q.ty;
var z=-Infinity;
var u=-Infinity;
var B=Infinity;
var w=Infinity;
var k=this.vertices;
for(var t=0,p=k.length;
t<p;
t+=2){var j=k[t],h=k[t+1];
var o=(E*j)+(A*h)+F;
var m=(v*h)+(C*j)+D;
B=o<B?o:B;
w=m<w?m:w;
z=o>z?o:z;
u=m>u?m:u
}if(B===-Infinity||u===Infinity){return g.EmptyRectangle
}var l=this._bounds;
l.x=B;
l.width=z-B;
l.y=w;
l.height=u-w;
this._currentBounds=l;
return l
};
g.Strip.DrawModes={TRIANGLE_STRIP:0,TRIANGLES:1};
g.Rope=function(i,h){g.Strip.call(this,i);
this.points=h;
this.vertices=new g.Float32Array(h.length*4);
this.uvs=new g.Float32Array(h.length*4);
this.colors=new g.Float32Array(h.length*2);
this.indices=new g.Uint16Array(h.length*2);
this.refresh()
};
g.Rope.prototype=Object.create(g.Strip.prototype);
g.Rope.prototype.constructor=g.Rope;
g.Rope.prototype.refresh=function(){var q=this.points;
if(q.length<1){return
}var j=this.uvs;
var o=q[0];
var s=this.indices;
var h=this.colors;
this.count-=0.2;
j[0]=0;
j[1]=0;
j[2]=0;
j[3]=1;
h[0]=1;
h[1]=1;
s[0]=0;
s[1]=1;
var n=q.length,p,m,l;
for(var k=1;
k<n;
k++){p=q[k];
m=k*4;
l=k/(n-1);
if(k%2){j[m]=l;
j[m+1]=0;
j[m+2]=l;
j[m+3]=1
}else{j[m]=l;
j[m+1]=0;
j[m+2]=l;
j[m+3]=1
}m=k*2;
h[m]=1;
h[m+1]=1;
m=k*2;
s[m]=m;
s[m+1]=m+1;
o=p
}};
g.Rope.prototype.updateTransform=function(){var u=this.points;
if(u.length<1){return
}var s=u[0];
var p;
var h={x:0,y:0};
this.count-=0.2;
var n=this.vertices;
var q=u.length,t,m,o,j,l;
for(var k=0;
k<q;
k++){t=u[k];
m=k*4;
if(k<u.length-1){p=u[k+1]
}else{p=t
}h.y=-(p.x-s.x);
h.x=p.y-s.y;
o=(1-(k/(q-1)))*10;
if(o>1){o=1
}j=Math.sqrt(h.x*h.x+h.y*h.y);
l=this.texture.height/2;
h.x/=j;
h.y/=j;
h.x*=l;
h.y*=l;
n[m]=t.x+h.x;
n[m+1]=t.y+h.y;
n[m+2]=t.x-h.x;
n[m+3]=t.y-h.y;
s=t
}g.DisplayObjectContainer.prototype.updateTransform.call(this)
};
g.Rope.prototype.setTexture=function(h){this.texture=h
};
g.TilingSprite=function(j,i,h){g.Sprite.call(this,j);
this._width=i||100;
this._height=h||100;
this.tileScale=new g.Point(1,1);
this.tileScaleOffset=new g.Point(1,1);
this.tilePosition=new g.Point(0,0);
this.renderable=true;
this.tint=16777215;
this.blendMode=g.blendModes.NORMAL
};
g.TilingSprite.prototype=Object.create(g.Sprite.prototype);
g.TilingSprite.prototype.constructor=g.TilingSprite;
Object.defineProperty(g.TilingSprite.prototype,"width",{get:function(){return this._width
},set:function(h){this._width=h
}});
Object.defineProperty(g.TilingSprite.prototype,"height",{get:function(){return this._height
},set:function(h){this._height=h
}});
g.TilingSprite.prototype.setTexture=function(h){if(this.texture===h){return
}this.texture=h;
this.refreshTexture=true;
this.cachedTint=16777215
};
g.TilingSprite.prototype._renderWebGL=function(l){if(this.visible===false||this.alpha===0){return
}var k,h;
if(this._mask){l.spriteBatch.stop();
l.maskManager.pushMask(this.mask,l);
l.spriteBatch.start()
}if(this._filters){l.spriteBatch.flush();
l.filterManager.pushFilter(this._filterBlock)
}if(!this.tilingTexture||this.refreshTexture){this.generateTilingTexture(true);
if(this.tilingTexture&&this.tilingTexture.needsUpdate){l.renderer.updateTexture(this.tilingTexture.baseTexture);
this.tilingTexture.needsUpdate=false
}}else{l.spriteBatch.renderTilingSprite(this)
}for(k=0,h=this.children.length;
k<h;
k++){this.children[k]._renderWebGL(l)
}l.spriteBatch.stop();
if(this._filters){l.filterManager.popFilter()
}if(this._mask){l.maskManager.popMask(this._mask,l)
}l.spriteBatch.start()
};
g.TilingSprite.prototype._renderCanvas=function(q){if(this.visible===false||this.alpha===0){return
}var p=q.context;
if(this._mask){q.maskManager.pushMask(this._mask,q)
}p.globalAlpha=this.worldAlpha;
var n=this.worldTransform;
var o,m;
var l=q.resolution;
p.setTransform(n.a*l,n.b*l,n.c*l,n.d*l,n.tx*l,n.ty*l);
if(!this.__tilePattern||this.refreshTexture){this.generateTilingTexture(false);
if(this.tilingTexture){this.__tilePattern=p.createPattern(this.tilingTexture.baseTexture.source,"repeat")
}else{return
}}if(this.blendMode!==q.currentBlendMode){q.currentBlendMode=this.blendMode;
p.globalCompositeOperation=g.blendModesCanvas[q.currentBlendMode]
}var h=this.tilePosition;
var k=this.tileScale;
h.x%=this.tilingTexture.baseTexture.width;
h.y%=this.tilingTexture.baseTexture.height;
p.scale(k.x,k.y);
p.translate(h.x+(this.anchor.x*-this._width),h.y+(this.anchor.y*-this._height));
p.fillStyle=this.__tilePattern;
p.fillRect(-h.x,-h.y,this._width/k.x,this._height/k.y);
p.scale(1/k.x,1/k.y);
p.translate(-h.x+(this.anchor.x*this._width),-h.y+(this.anchor.y*this._height));
if(this._mask){q.maskManager.popMask(q)
}for(o=0,m=this.children.length;
o<m;
o++){this.children[o]._renderCanvas(q)
}};
g.TilingSprite.prototype.getBounds=function(){var s=this._width;
var q=this._height;
var p=s*(1-this.anchor.x);
var o=s*-this.anchor.x;
var n=q*(1-this.anchor.y);
var m=q*-this.anchor.y;
var t=this.worldTransform;
var G=t.a;
var E=t.b;
var D=t.c;
var B=t.d;
var H=t.tx;
var F=t.ty;
var x=G*o+D*m+H;
var k=B*m+E*o+F;
var w=G*p+D*m+H;
var j=B*m+E*p+F;
var v=G*p+D*n+H;
var i=B*n+E*p+F;
var u=G*o+D*n+H;
var h=B*n+E*o+F;
var A=-Infinity;
var y=-Infinity;
var C=Infinity;
var z=Infinity;
C=x<C?x:C;
C=w<C?w:C;
C=v<C?v:C;
C=u<C?u:C;
z=k<z?k:z;
z=j<z?j:z;
z=i<z?i:z;
z=h<z?h:z;
A=x>A?x:A;
A=w>A?w:A;
A=v>A?v:A;
A=u>A?u:A;
y=k>y?k:y;
y=j>y?j:y;
y=i>y?i:y;
y=h>y?h:y;
var l=this._bounds;
l.x=C;
l.width=A-C;
l.y=z;
l.height=y-z;
this._currentBounds=l;
return l
};
g.TilingSprite.prototype.onTextureUpdate=function(){};
g.TilingSprite.prototype.generateTilingTexture=function(j){if(!this.texture.baseTexture.hasLoaded){return
}var n=this.originalTexture||this.texture;
var o=n.frame;
var m,i;
var h=o.width!==n.baseTexture.width||o.height!==n.baseTexture.height;
var l=false;
if(!j){if(h){if(n.trim){m=n.trim.width;
i=n.trim.height
}else{m=o.width;
i=o.height
}l=true
}}else{m=g.getNextPowerOfTwo(o.width);
i=g.getNextPowerOfTwo(o.height);
if(o.width!==m||o.height!==i||n.baseTexture.width!==m||n.baseTexture.height||i){l=true
}}if(l){var k;
if(this.tilingTexture&&this.tilingTexture.isTiling){k=this.tilingTexture.canvasBuffer;
k.resize(m,i);
this.tilingTexture.baseTexture.width=m;
this.tilingTexture.baseTexture.height=i;
this.tilingTexture.needsUpdate=true
}else{k=new g.CanvasBuffer(m,i);
this.tilingTexture=g.Texture.fromCanvas(k.canvas);
this.tilingTexture.canvasBuffer=k;
this.tilingTexture.isTiling=true
}k.context.drawImage(n.baseTexture.source,n.crop.x,n.crop.y,n.crop.width,n.crop.height,0,0,m,i);
this.tileScaleOffset.x=o.width/m;
this.tileScaleOffset.y=o.height/i
}else{if(this.tilingTexture&&this.tilingTexture.isTiling){this.tilingTexture.destroy(true)
}this.tileScaleOffset.x=1;
this.tileScaleOffset.y=1;
this.tilingTexture=n
}this.refreshTexture=false;
this.originalTexture=this.texture;
this.texture=this.tilingTexture;
this.tilingTexture.baseTexture._powerOf2=true
};
g.TilingSprite.prototype.destroy=function(){g.Sprite.prototype.destroy.call(this);
this.tileScale=null;
this.tileScaleOffset=null;
this.tilePosition=null;
this.tilingTexture.destroy(true);
this.tilingTexture=null
};
var f={radDeg:180/Math.PI,degRad:Math.PI/180,temp:[],Float32Array:(typeof(Float32Array)==="undefined")?Array:Float32Array,Uint16Array:(typeof(Uint16Array)==="undefined")?Array:Uint16Array};
f.BoneData=function(h,i){this.name=h;
this.parent=i
};
f.BoneData.prototype={length:0,x:0,y:0,rotation:0,scaleX:1,scaleY:1,inheritScale:true,inheritRotation:true,flipX:false,flipY:false};
f.SlotData=function(h,i){this.name=h;
this.boneData=i
};
f.SlotData.prototype={r:1,g:1,b:1,a:1,attachmentName:null,additiveBlending:false};
f.IkConstraintData=function(h){this.name=h;
this.bones=[]
};
f.IkConstraintData.prototype={target:null,bendDirection:1,mix:1};
f.Bone=function(j,i,h){this.data=j;
this.skeleton=i;
this.parent=h;
this.setToSetupPose()
};
f.Bone.yDown=false;
f.Bone.prototype={x:0,y:0,rotation:0,rotationIK:0,scaleX:1,scaleY:1,flipX:false,flipY:false,m00:0,m01:0,worldX:0,m10:0,m11:0,worldY:0,worldRotation:0,worldScaleX:1,worldScaleY:1,worldFlipX:false,worldFlipY:false,updateWorldTransform:function(){var k=this.parent;
if(k){this.worldX=this.x*k.m00+this.y*k.m01+k.worldX;
this.worldY=this.x*k.m10+this.y*k.m11+k.worldY;
if(this.data.inheritScale){this.worldScaleX=k.worldScaleX*this.scaleX;
this.worldScaleY=k.worldScaleY*this.scaleY
}else{this.worldScaleX=this.scaleX;
this.worldScaleY=this.scaleY
}this.worldRotation=this.data.inheritRotation?(k.worldRotation+this.rotationIK):this.rotationIK;
this.worldFlipX=k.worldFlipX!=this.flipX;
this.worldFlipY=k.worldFlipY!=this.flipY
}else{var j=this.skeleton.flipX,h=this.skeleton.flipY;
this.worldX=j?-this.x:this.x;
this.worldY=(h!=f.Bone.yDown)?-this.y:this.y;
this.worldScaleX=this.scaleX;
this.worldScaleY=this.scaleY;
this.worldRotation=this.rotationIK;
this.worldFlipX=j!=this.flipX;
this.worldFlipY=h!=this.flipY
}var m=this.worldRotation*f.degRad;
var l=Math.cos(m);
var i=Math.sin(m);
if(this.worldFlipX){this.m00=-l*this.worldScaleX;
this.m01=i*this.worldScaleY
}else{this.m00=l*this.worldScaleX;
this.m01=-i*this.worldScaleY
}if(this.worldFlipY!=f.Bone.yDown){this.m10=-i*this.worldScaleX;
this.m11=-l*this.worldScaleY
}else{this.m10=i*this.worldScaleX;
this.m11=l*this.worldScaleY
}},setToSetupPose:function(){var h=this.data;
this.x=h.x;
this.y=h.y;
this.rotation=h.rotation;
this.rotationIK=this.rotation;
this.scaleX=h.scaleX;
this.scaleY=h.scaleY;
this.flipX=h.flipX;
this.flipY=h.flipY
},worldToLocal:function(m){var i=m[0]-this.worldX,h=m[1]-this.worldY;
var l=this.m00,o=this.m10,k=this.m01,n=this.m11;
if(this.worldFlipX!=(this.worldFlipY!=f.Bone.yDown)){l=-l;
n=-n
}var j=1/(l*n-k*o);
m[0]=i*l*j-h*k*j;
m[1]=h*n*j-i*o*j
},localToWorld:function(j){var i=j[0],h=j[1];
j[0]=i*this.m00+h*this.m01+this.worldX;
j[1]=i*this.m10+h*this.m11+this.worldY
}};
f.Slot=function(h,i){this.data=h;
this.bone=i;
this.setToSetupPose()
};
f.Slot.prototype={r:1,g:1,b:1,a:1,_attachmentTime:0,attachment:null,attachmentVertices:[],setAttachment:function(h){this.attachment=h;
this._attachmentTime=this.bone.skeleton.time;
this.attachmentVertices.length=0
},setAttachmentTime:function(h){this._attachmentTime=this.bone.skeleton.time-h
},getAttachmentTime:function(){return this.bone.skeleton.time-this._attachmentTime
},setToSetupPose:function(){var j=this.data;
this.r=j.r;
this.g=j.g;
this.b=j.b;
this.a=j.a;
var l=this.bone.skeleton.data.slots;
for(var h=0,k=l.length;
h<k;
h++){if(l[h]==j){this.setAttachment(!j.attachmentName?null:this.bone.skeleton.getAttachmentBySlotIndex(h,j.attachmentName));
break
}}}};
f.IkConstraint=function(j,k){this.data=j;
this.mix=j.mix;
this.bendDirection=j.bendDirection;
this.bones=[];
for(var h=0,l=j.bones.length;
h<l;
h++){this.bones.push(k.findBone(j.bones[h].name))
}this.target=k.findBone(j.target.name)
};
f.IkConstraint.prototype={apply:function(){var i=this.target;
var h=this.bones;
switch(h.length){case 1:f.IkConstraint.apply1(h[0],i.worldX,i.worldY,this.mix);
break;
case 2:f.IkConstraint.apply2(h[0],h[1],i.worldX,i.worldY,this.bendDirection,this.mix);
break
}}};
f.IkConstraint.apply1=function(m,l,k,n){var i=(!m.data.inheritRotation||!m.parent)?0:m.parent.worldRotation;
var h=m.rotation;
var j=Math.atan2(k-m.worldY,l-m.worldX)*f.radDeg-i;
m.rotationIK=h+(j-h)*n
};
f.IkConstraint.apply2=function(q,n,u,s,A,k){var i=n.rotation,B=q.rotation;
if(!k){n.rotationIK=i;
q.rotationIK=B;
return
}var E,D,z=f.temp;
var F=q.parent;
if(F){z[0]=u;
z[1]=s;
F.worldToLocal(z);
u=(z[0]-q.x)*F.worldScaleX;
s=(z[1]-q.y)*F.worldScaleY
}else{u-=q.x;
s-=q.y
}if(n.parent==q){E=n.x;
D=n.y
}else{z[0]=n.x;
z[1]=n.y;
n.parent.localToWorld(z);
q.worldToLocal(z);
E=z[0];
D=z[1]
}var y=E*q.worldScaleX,x=D*q.worldScaleY;
var l=Math.atan2(x,y);
var p=Math.sqrt(y*y+x*x),o=n.data.length*n.worldScaleX;
var j=2*p*o;
if(j<0.0001){n.rotationIK=i+(Math.atan2(s,u)*f.radDeg-B-i)*k;
return
}var h=(u*u+s*s-p*p-o*o)/j;
if(h<-1){h=-1
}else{if(h>1){h=1
}}var m=Math.acos(h)*A;
var C=p+o*h,t=o*Math.sin(m);
var v=Math.atan2(s*C-u*t,u*C+s*t);
var w=(v-l)*f.radDeg-B;
if(w>180){w-=360
}else{if(w<-180){w+=360
}}q.rotationIK=B+w*k;
w=(m+l)*f.radDeg-i;
if(w>180){w-=360
}else{if(w<-180){w+=360
}}n.rotationIK=i+(w+q.worldRotation-n.parent.worldRotation)*k
};
f.Skin=function(h){this.name=h;
this.attachments={}
};
f.Skin.prototype={addAttachment:function(h,i,j){this.attachments[h+":"+i]=j
},getAttachment:function(h,i){return this.attachments[h+":"+i]
},_attachAll:function(l,o){for(var j in o.attachments){var k=j.indexOf(":");
var h=parseInt(j.substring(0,k));
var i=j.substring(k+1);
var n=l.slots[h];
if(n.attachment&&n.attachment.name==i){var m=this.getAttachment(h,i);
if(m){n.setAttachment(m)
}}}}};
f.Animation=function(h,i,j){this.name=h;
this.timelines=i;
this.duration=j
};
f.Animation.prototype={apply:function(p,o,m,h,l){if(h&&this.duration!=0){m%=this.duration;
o%=this.duration
}var k=this.timelines;
for(var j=0,q=k.length;
j<q;
j++){k[j].apply(p,o,m,l,1)
}},mix:function(l,h,k,p,s,m){if(p&&this.duration!=0){k%=this.duration;
h%=this.duration
}var q=this.timelines;
for(var o=0,j=q.length;
o<j;
o++){q[o].apply(l,h,k,s,m)
}}};
f.Animation.binarySearch=function(i,m,j){var h=0;
var k=Math.floor(i.length/j)-2;
if(!k){return j
}var l=k>>>1;
while(true){if(i[(l+1)*j]<=m){h=l+1
}else{k=l
}if(h==k){return(h+1)*j
}l=(h+k)>>>1
}};
f.Animation.binarySearch1=function(i,l){var h=0;
var j=i.length-2;
if(!j){return 1
}var k=j>>>1;
while(true){if(i[k+1]<=l){h=k+1
}else{j=k
}if(h==j){return h+1
}k=(h+j)>>>1
}};
f.Animation.linearSearch=function(h,m,l){for(var j=0,k=h.length-l;
j<=k;
j+=l){if(h[j]>m){return j
}}return -1
};
f.Curves=function(h){this.curves=[]
};
f.Curves.prototype={setLinear:function(h){this.curves[h*19]=0
},setStepped:function(h){this.curves[h*19]=1
},setCurve:function(t,F,L,E,K){var D=1/10,B=D*D,A=B*D;
var m=3*D,k=3*B,h=6*B,M=6*A;
var J=-F*2+E,I=-L*2+K,p=(F-E)*3+1,o=(L-K)*3+1;
var C=F*m+J*k+p*A,z=L*m+I*k+o*A;
var s=J*h+p*M,q=I*h+o*M;
var l=p*M,j=o*M;
var H=t*19;
var w=this.curves;
w[H++]=2;
var v=C,u=z;
for(var G=H+19-1;
H<G;
H+=2){w[H]=v;
w[H+1]=u;
C+=s;
z+=q;
s+=l;
q+=j;
v+=C;
u+=z
}},getCurvePercent:function(j,p){p=p<0?0:(p>1?1:p);
var u=this.curves;
var l=j*19;
var q=u[l];
if(q===0){return p
}if(q==1){return 0
}l++;
var t=0;
for(var h=l,k=l+19-1;
l<k;
l+=2){t=u[l];
if(t>=p){var o,m;
if(l==h){o=0;
m=0
}else{o=u[l-2];
m=u[l-1]
}return m+(u[l+1]-m)*(p-o)/(t-o)
}}var s=u[l-1];
return s+(1-s)*(p-t)/(1-t)
}};
f.RotateTimeline=function(h){this.curves=new f.Curves(h);
this.frames=[];
this.frames.length=h*2
};
f.RotateTimeline.prototype={boneIndex:0,getFrameCount:function(){return this.frames.length/2
},setFrame:function(j,h,i){j*=2;
this.frames[j]=h;
this.frames[j+1]=i
},apply:function(l,h,k,t,m){var q=this.frames;
if(k<q[0]){return
}var s=l.bones[this.boneIndex];
if(k>=q[q.length-2]){var n=s.data.rotation+q[q.length-1]-s.rotation;
while(n>180){n-=360
}while(n<-180){n+=360
}s.rotation+=n*m;
return
}var i=f.Animation.binarySearch(q,k,2);
var j=q[i-1];
var p=q[i];
var o=1-(k-p)/(q[i-2]-p);
o=this.curves.getCurvePercent(i/2-1,o);
var n=q[i+1]-j;
while(n>180){n-=360
}while(n<-180){n+=360
}n=s.data.rotation+(j+n*o)-s.rotation;
while(n>180){n-=360
}while(n<-180){n+=360
}s.rotation+=n*m
}};
f.TranslateTimeline=function(h){this.curves=new f.Curves(h);
this.frames=[];
this.frames.length=h*3
};
f.TranslateTimeline.prototype={boneIndex:0,getFrameCount:function(){return this.frames.length/3
},setFrame:function(k,i,h,j){k*=3;
this.frames[k]=i;
this.frames[k+1]=h;
this.frames[k+2]=j
},apply:function(m,h,l,t,n){var q=this.frames;
if(l<q[0]){return
}var s=m.bones[this.boneIndex];
if(l>=q[q.length-3]){s.x+=(s.data.x+q[q.length-2]-s.x)*n;
s.y+=(s.data.y+q[q.length-1]-s.y)*n;
return
}var k=f.Animation.binarySearch(q,l,3);
var j=q[k-2];
var i=q[k-1];
var p=q[k];
var o=1-(l-p)/(q[k+-3]-p);
o=this.curves.getCurvePercent(k/3-1,o);
s.x+=(s.data.x+j+(q[k+1]-j)*o-s.x)*n;
s.y+=(s.data.y+i+(q[k+2]-i)*o-s.y)*n
}};
f.ScaleTimeline=function(h){this.curves=new f.Curves(h);
this.frames=[];
this.frames.length=h*3
};
f.ScaleTimeline.prototype={boneIndex:0,getFrameCount:function(){return this.frames.length/3
},setFrame:function(k,i,h,j){k*=3;
this.frames[k]=i;
this.frames[k+1]=h;
this.frames[k+2]=j
},apply:function(m,h,l,t,n){var q=this.frames;
if(l<q[0]){return
}var s=m.bones[this.boneIndex];
if(l>=q[q.length-3]){s.scaleX+=(s.data.scaleX*q[q.length-2]-s.scaleX)*n;
s.scaleY+=(s.data.scaleY*q[q.length-1]-s.scaleY)*n;
return
}var k=f.Animation.binarySearch(q,l,3);
var j=q[k-2];
var i=q[k-1];
var p=q[k];
var o=1-(l-p)/(q[k+-3]-p);
o=this.curves.getCurvePercent(k/3-1,o);
s.scaleX+=(s.data.scaleX*(j+(q[k+1]-j)*o)-s.scaleX)*n;
s.scaleY+=(s.data.scaleY*(i+(q[k+2]-i)*o)-s.scaleY)*n
}};
f.ColorTimeline=function(h){this.curves=new f.Curves(h);
this.frames=[];
this.frames.length=h*5
};
f.ColorTimeline.prototype={slotIndex:0,getFrameCount:function(){return this.frames.length/5
},setFrame:function(m,l,k,j,h,i){m*=5;
this.frames[m]=l;
this.frames[m+1]=k;
this.frames[m+2]=j;
this.frames[m+3]=h;
this.frames[m+4]=i
},apply:function(l,z,n,A,m){var u=this.frames;
if(n<u[0]){return
}var v,x,y,B;
if(n>=u[u.length-5]){var w=u.length-1;
v=u[w-3];
x=u[w-2];
y=u[w-1];
B=u[w]
}else{var p=f.Animation.binarySearch(u,n,5);
var j=u[p-4];
var o=u[p-3];
var s=u[p-2];
var t=u[p-1];
var q=u[p];
var h=1-(n-q)/(u[p-5]-q);
h=this.curves.getCurvePercent(p/5-1,h);
v=j+(u[p+1]-j)*h;
x=o+(u[p+2]-o)*h;
y=s+(u[p+3]-s)*h;
B=t+(u[p+4]-t)*h
}var k=l.slots[this.slotIndex];
if(m<1){k.r+=(v-k.r)*m;
k.g+=(x-k.g)*m;
k.b+=(y-k.b)*m;
k.a+=(B-k.a)*m
}else{k.r=v;
k.g=x;
k.b=y;
k.a=B
}}};
f.AttachmentTimeline=function(h){this.curves=new f.Curves(h);
this.frames=[];
this.frames.length=h;
this.attachmentNames=[];
this.attachmentNames.length=h
};
f.AttachmentTimeline.prototype={slotIndex:0,getFrameCount:function(){return this.frames.length
},setFrame:function(j,i,h){this.frames[j]=i;
this.attachmentNames[j]=h
},apply:function(m,l,k,h,j){var n=this.frames;
if(k<n[0]){if(l>k){this.apply(m,l,Number.MAX_VALUE,null,0)
}return
}else{if(l>k){l=-1
}}var o=k>=n[n.length-1]?n.length-1:f.Animation.binarySearch1(n,k)-1;
if(n[o]<l){return
}var i=this.attachmentNames[o];
m.slots[this.slotIndex].setAttachment(!i?null:m.getAttachmentBySlotIndex(this.slotIndex,i))
}};
f.EventTimeline=function(h){this.frames=[];
this.frames.length=h;
this.events=[];
this.events.length=h
};
f.EventTimeline.prototype={getFrameCount:function(){return this.frames.length
},setFrame:function(j,i,h){this.frames[j]=i;
this.events[j]=h
},apply:function(m,h,l,q,n){if(!q){return
}var o=this.frames;
var k=o.length;
if(h>l){this.apply(m,h,Number.MAX_VALUE,q,n);
h=-1
}else{if(h>=o[k-1]){return
}}if(l<o[0]){return
}var j;
if(h<o[0]){j=0
}else{j=f.Animation.binarySearch1(o,h);
var i=o[j];
while(j>0){if(o[j-1]!=i){break
}j--
}}var p=this.events;
for(;
j<k&&l>=o[j];
j++){q.push(p[j])
}}};
f.DrawOrderTimeline=function(h){this.frames=[];
this.frames.length=h;
this.drawOrders=[];
this.drawOrders.length=h
};
f.DrawOrderTimeline.prototype={getFrameCount:function(){return this.frames.length
},setFrame:function(j,h,i){this.frames[j]=h;
this.drawOrders[j]=i
},apply:function(o,j,m,v,p){var t=this.frames;
if(m<t[0]){return
}var k;
if(m>=t[t.length-1]){k=t.length-1
}else{k=f.Animation.binarySearch1(t,m)-1
}var h=o.drawOrder;
var s=o.slots;
var u=this.drawOrders[k];
if(!u){for(var q=0,l=s.length;
q<l;
q++){h[q]=s[q]
}}else{for(var q=0,l=u.length;
q<l;
q++){h[q]=o.slots[u[q]]
}}}};
f.FfdTimeline=function(h){this.curves=new f.Curves(h);
this.frames=[];
this.frames.length=h;
this.frameVertices=[];
this.frameVertices.length=h
};
f.FfdTimeline.prototype={slotIndex:0,attachment:0,getFrameCount:function(){return this.frames.length
},setFrame:function(j,i,h){this.frames[j]=i;
this.frameVertices[j]=h
},apply:function(l,x,o,y,m){var k=l.slots[this.slotIndex];
if(k.attachment!=this.attachment){return
}var u=this.frames;
if(o<u[0]){return
}var p=this.frameVertices;
var t=p[0].length;
var n=k.attachmentVertices;
if(n.length!=t){m=1
}n.length=t;
if(o>=u[u.length-1]){var z=p[u.length-1];
if(m<1){for(var w=0;
w<t;
w++){n[w]+=(z[w]-n[w])*m
}}else{for(var w=0;
w<t;
w++){n[w]=z[w]
}}return
}var q=f.Animation.binarySearch1(u,o);
var s=u[q];
var j=1-(o-s)/(u[q-1]-s);
j=this.curves.getCurvePercent(q-1,j<0?0:(j>1?1:j));
var A=p[q-1];
var h=p[q];
if(m<1){for(var w=0;
w<t;
w++){var v=A[w];
n[w]+=(v+(h[w]-v)*j-n[w])*m
}}else{for(var w=0;
w<t;
w++){var v=A[w];
n[w]=v+(h[w]-v)*j
}}}};
f.IkConstraintTimeline=function(h){this.curves=new f.Curves(h);
this.frames=[];
this.frames.length=h*3
};
f.IkConstraintTimeline.prototype={ikConstraintIndex:0,getFrameCount:function(){return this.frames.length/3
},setFrame:function(k,j,i,h){k*=3;
this.frames[k]=j;
this.frames[k+1]=i;
this.frames[k+2]=h
},apply:function(l,h,k,t,m){var p=this.frames;
if(k<p[0]){return
}var s=l.ikConstraints[this.ikConstraintIndex];
if(k>=p[p.length-3]){s.mix+=(p[p.length-2]-s.mix)*m;
s.bendDirection=p[p.length-1];
return
}var j=f.Animation.binarySearch(p,k,3);
var i=p[j+-2];
var o=p[j];
var n=1-(k-o)/(p[j+-3]-o);
n=this.curves.getCurvePercent(j/3-1,n);
var q=i+(p[j+1]-i)*n;
s.mix+=(q-s.mix)*m;
s.bendDirection=p[j+-1]
}};
f.FlipXTimeline=function(h){this.curves=new f.Curves(h);
this.frames=[];
this.frames.length=h*2
};
f.FlipXTimeline.prototype={boneIndex:0,getFrameCount:function(){return this.frames.length/2
},setFrame:function(j,i,h){j*=2;
this.frames[j]=i;
this.frames[j+1]=h?1:0
},apply:function(l,k,j,h,i){var m=this.frames;
if(j<m[0]){if(k>j){this.apply(l,k,Number.MAX_VALUE,null,0)
}return
}else{if(k>j){k=-1
}}var n=(j>=m[m.length-2]?m.length:f.Animation.binarySearch(m,j,2))-2;
if(m[n]<k){return
}l.bones[boneIndex].flipX=m[n+1]!=0
}};
f.FlipYTimeline=function(h){this.curves=new f.Curves(h);
this.frames=[];
this.frames.length=h*2
};
f.FlipYTimeline.prototype={boneIndex:0,getFrameCount:function(){return this.frames.length/2
},setFrame:function(j,i,h){j*=2;
this.frames[j]=i;
this.frames[j+1]=h?1:0
},apply:function(l,k,j,h,i){var m=this.frames;
if(j<m[0]){if(k>j){this.apply(l,k,Number.MAX_VALUE,null,0)
}return
}else{if(k>j){k=-1
}}var n=(j>=m[m.length-2]?m.length:f.Animation.binarySearch(m,j,2))-2;
if(m[n]<k){return
}l.bones[boneIndex].flipY=m[n+1]!=0
}};
f.SkeletonData=function(){this.bones=[];
this.slots=[];
this.skins=[];
this.events=[];
this.animations=[];
this.ikConstraints=[]
};
f.SkeletonData.prototype={name:null,defaultSkin:null,width:0,height:0,version:null,hash:null,findBone:function(k){var h=this.bones;
for(var j=0,l=h.length;
j<l;
j++){if(h[j].name==k){return h[j]
}}return null
},findBoneIndex:function(k){var h=this.bones;
for(var j=0,l=h.length;
j<l;
j++){if(h[j].name==k){return j
}}return -1
},findSlot:function(h){var k=this.slots;
for(var j=0,l=k.length;
j<l;
j++){if(k[j].name==h){return slot[j]
}}return null
},findSlotIndex:function(h){var k=this.slots;
for(var j=0,l=k.length;
j<l;
j++){if(k[j].name==h){return j
}}return -1
},findSkin:function(h){var k=this.skins;
for(var j=0,l=k.length;
j<l;
j++){if(k[j].name==h){return k[j]
}}return null
},findEvent:function(h){var k=this.events;
for(var j=0,l=k.length;
j<l;
j++){if(k[j].name==h){return k[j]
}}return null
},findAnimation:function(j){var l=this.animations;
for(var h=0,k=l.length;
h<k;
h++){if(l[h].name==j){return l[h]
}}return null
},findIkConstraint:function(k){var j=this.ikConstraints;
for(var h=0,l=j.length;
h<l;
h++){if(j[h].name==k){return j[h]
}}return null
}};
f.Skeleton=function(h){this.data=h;
this.bones=[];
for(var j=0,q=h.bones.length;
j<q;
j++){var o=h.bones[j];
var k=!o.parent?null:this.bones[h.bones.indexOf(o.parent)];
this.bones.push(new f.Bone(o,this,k))
}this.slots=[];
this.drawOrder=[];
for(var j=0,q=h.slots.length;
j<q;
j++){var l=h.slots[j];
var m=this.bones[h.bones.indexOf(l.boneData)];
var p=new f.Slot(l,m);
this.slots.push(p);
this.drawOrder.push(p)
}this.ikConstraints=[];
for(var j=0,q=h.ikConstraints.length;
j<q;
j++){this.ikConstraints.push(new f.IkConstraint(h.ikConstraints[j],this))
}this.boneCache=[];
this.updateCache()
};
f.Skeleton.prototype={x:0,y:0,skin:null,r:1,g:1,b:1,a:1,time:0,flipX:false,flipY:false,updateCache:function(){var t=this.ikConstraints;
var x=t.length;
var p=x+1;
var u=this.boneCache;
if(u.length>p){u.length=p
}for(var l=0,j=u.length;
l<j;
l++){u[l].length=0
}while(u.length<p){u[u.length]=[]
}var w=u[0];
var k=this.bones;
outer:for(var l=0,j=k.length;
l<j;
l++){var s=k[l];
var m=s;
do{for(var q=0;
q<x;
q++){var v=t[q];
var o=v.bones[0];
var h=v.bones[v.bones.length-1];
while(true){if(m==h){u[q].push(s);
u[q+1].push(s);
continue outer
}if(h==o){break
}h=h.parent
}}m=m.parent
}while(m);
w[w.length]=s
}},updateWorldTransform:function(){var h=this.bones;
for(var k=0,q=h.length;
k<q;
k++){var o=h[k];
o.rotationIK=o.rotation
}var k=0,m=this.boneCache.length-1;
while(true){var j=this.boneCache[k];
for(var l=0,p=j.length;
l<p;
l++){j[l].updateWorldTransform()
}if(k==m){break
}this.ikConstraints[k].apply();
k++
}},setToSetupPose:function(){this.setBonesToSetupPose();
this.setSlotsToSetupPose()
},setBonesToSetupPose:function(){var h=this.bones;
for(var k=0,m=h.length;
k<m;
k++){h[k].setToSetupPose()
}var l=this.ikConstraints;
for(var k=0,m=l.length;
k<m;
k++){var j=l[k];
j.bendDirection=j.data.bendDirection;
j.mix=j.data.mix
}},setSlotsToSetupPose:function(){var j=this.slots;
var k=this.drawOrder;
for(var h=0,l=j.length;
h<l;
h++){k[h]=j[h];
j[h].setToSetupPose(h)
}},getRootBone:function(){return this.bones.length?this.bones[0]:null
},findBone:function(k){var h=this.bones;
for(var j=0,l=h.length;
j<l;
j++){if(h[j].data.name==k){return h[j]
}}return null
},findBoneIndex:function(k){var h=this.bones;
for(var j=0,l=h.length;
j<l;
j++){if(h[j].data.name==k){return j
}}return -1
},findSlot:function(h){var k=this.slots;
for(var j=0,l=k.length;
j<l;
j++){if(k[j].data.name==h){return k[j]
}}return null
},findSlotIndex:function(h){var k=this.slots;
for(var j=0,l=k.length;
j<l;
j++){if(k[j].data.name==h){return j
}}return -1
},setSkinByName:function(h){var i=this.data.findSkin(h);
if(!i){throw"Skin not found: "+h
}this.setSkin(i)
},setSkin:function(l){if(l){if(this.skin){l._attachAll(this,this.skin)
}else{var k=this.slots;
for(var j=0,p=k.length;
j<p;
j++){var o=k[j];
var h=o.data.attachmentName;
if(h){var m=l.getAttachment(j,h);
if(m){o.setAttachment(m)
}}}}}this.skin=l
},getAttachmentBySlotName:function(i,h){return this.getAttachmentBySlotIndex(this.data.findSlotIndex(i),h)
},getAttachmentBySlotIndex:function(i,h){if(this.skin){var j=this.skin.getAttachment(i,h);
if(j){return j
}}if(this.data.defaultSkin){return this.data.defaultSkin.getAttachment(i,h)
}return null
},setAttachment:function(j,h){var l=this.slots;
for(var k=0,p=l.length;
k<p;
k++){var o=l[k];
if(o.data.name==j){var m=null;
if(h){m=this.getAttachmentBySlotIndex(k,h);
if(!m){throw"Attachment not found: "+h+", for slot: "+j
}}o.setAttachment(m);
return
}}throw"Slot not found: "+j
},findIkConstraint:function(k){var j=this.ikConstraints;
for(var h=0,l=j.length;
h<l;
h++){if(j[h].data.name==k){return j[h]
}}return null
},update:function(h){this.time+=h
}};
f.EventData=function(h){this.name=h
};
f.EventData.prototype={intValue:0,floatValue:0,stringValue:null};
f.Event=function(h){this.data=h
};
f.Event.prototype={intValue:0,floatValue:0,stringValue:null};
f.AttachmentType={region:0,boundingbox:1,mesh:2,skinnedmesh:3};
f.RegionAttachment=function(h){this.name=h;
this.offset=[];
this.offset.length=8;
this.uvs=[];
this.uvs.length=8
};
f.RegionAttachment.prototype={type:f.AttachmentType.region,x:0,y:0,rotation:0,scaleX:1,scaleY:1,width:0,height:0,r:1,g:1,b:1,a:1,path:null,rendererObject:null,regionOffsetX:0,regionOffsetY:0,regionWidth:0,regionHeight:0,regionOriginalWidth:0,regionOriginalHeight:0,setUVs:function(j,h,l,m,i){var k=this.uvs;
if(i){k[2]=j;
k[3]=m;
k[4]=j;
k[5]=h;
k[6]=l;
k[7]=h;
k[0]=l;
k[1]=m
}else{k[0]=j;
k[1]=m;
k[2]=j;
k[3]=h;
k[4]=l;
k[5]=h;
k[6]=l;
k[7]=m
}},updateOffset:function(){var x=this.width/this.regionOriginalWidth*this.scaleX;
var w=this.height/this.regionOriginalHeight*this.scaleY;
var i=-this.width/2*this.scaleX+this.regionOffsetX*x;
var z=-this.height/2*this.scaleY+this.regionOffsetY*w;
var n=i+this.regionWidth*x;
var v=z+this.regionHeight*w;
var y=this.rotation*f.degRad;
var j=Math.cos(y);
var h=Math.sin(y);
var p=i*j+this.x;
var o=i*h;
var t=z*j+this.y;
var q=z*h;
var u=n*j+this.x;
var s=n*h;
var l=v*j+this.y;
var k=v*h;
var m=this.offset;
m[0]=p-q;
m[1]=t+o;
m[2]=p-k;
m[3]=l+o;
m[4]=u-k;
m[5]=l+s;
m[6]=u-q;
m[7]=t+s
},computeVertices:function(m,l,o,k){m+=o.worldX;
l+=o.worldY;
var p=o.m00,n=o.m01,j=o.m10,i=o.m11;
var h=this.offset;
k[0]=h[0]*p+h[1]*n+m;
k[1]=h[0]*j+h[1]*i+l;
k[2]=h[2]*p+h[3]*n+m;
k[3]=h[2]*j+h[3]*i+l;
k[4]=h[4]*p+h[5]*n+m;
k[5]=h[4]*j+h[5]*i+l;
k[6]=h[6]*p+h[7]*n+m;
k[7]=h[6]*j+h[7]*i+l
}};
f.MeshAttachment=function(h){this.name=h
};
f.MeshAttachment.prototype={type:f.AttachmentType.mesh,vertices:null,uvs:null,regionUVs:null,triangles:null,hullLength:0,r:1,g:1,b:1,a:1,path:null,rendererObject:null,regionU:0,regionV:0,regionU2:0,regionV2:0,regionRotate:false,regionOffsetX:0,regionOffsetY:0,regionWidth:0,regionHeight:0,regionOriginalWidth:0,regionOriginalHeight:0,edges:null,width:0,height:0,updateUVs:function(){var k=this.regionU2-this.regionU,h=this.regionV2-this.regionV;
var l=this.regionUVs.length;
if(!this.uvs||this.uvs.length!=l){this.uvs=new f.Float32Array(l)
}if(this.regionRotate){for(var j=0;
j<l;
j+=2){this.uvs[j]=this.regionU+this.regionUVs[j+1]*k;
this.uvs[j+1]=this.regionV+h-this.regionUVs[j]*h
}}else{for(var j=0;
j<l;
j+=2){this.uvs[j]=this.regionU+this.regionUVs[j]*k;
this.uvs[j+1]=this.regionV+this.regionUVs[j+1]*h
}}},computeWorldVertices:function(s,q,t,h){var v=t.bone;
s+=v.worldX;
q+=v.worldY;
var w=v.m00,u=v.m01,l=v.m10,k=v.m11;
var n=this.vertices;
var m=n.length;
if(t.attachmentVertices.length==m){n=t.attachmentVertices
}for(var j=0;
j<m;
j+=2){var p=n[j];
var o=n[j+1];
h[j]=p*w+o*u+s;
h[j+1]=p*l+o*k+q
}}};
f.SkinnedMeshAttachment=function(h){this.name=h
};
f.SkinnedMeshAttachment.prototype={type:f.AttachmentType.skinnedmesh,bones:null,weights:null,uvs:null,regionUVs:null,triangles:null,hullLength:0,r:1,g:1,b:1,a:1,path:null,rendererObject:null,regionU:0,regionV:0,regionU2:0,regionV2:0,regionRotate:false,regionOffsetX:0,regionOffsetY:0,regionWidth:0,regionHeight:0,regionOriginalWidth:0,regionOriginalHeight:0,edges:null,width:0,height:0,updateUVs:function(q,p,h,o,l){var j=this.regionU2-this.regionU,s=this.regionV2-this.regionV;
var k=this.regionUVs.length;
if(!this.uvs||this.uvs.length!=k){this.uvs=new f.Float32Array(k)
}if(this.regionRotate){for(var m=0;
m<k;
m+=2){this.uvs[m]=this.regionU+this.regionUVs[m+1]*j;
this.uvs[m+1]=this.regionV+s-this.regionUVs[m]*s
}}else{for(var m=0;
m<k;
m+=2){this.uvs[m]=this.regionU+this.regionUVs[m]*j;
this.uvs[m+1]=this.regionV+this.regionUVs[m+1]*s
}}},computeWorldVertices:function(o,m,j,u){var l=j.bone.skeleton.bones;
var D=this.weights;
var B=this.bones;
var p=0,q=0,E=0,C=0,A=B.length,i;
var G,F,k,z,t,s;
if(!j.attachmentVertices.length){for(;
q<A;
p+=2){G=0;
F=0;
i=B[q++]+q;
for(;
q<i;
q++,E+=3){k=l[B[q]];
z=D[E];
t=D[E+1];
s=D[E+2];
G+=(z*k.m00+t*k.m01+k.worldX)*s;
F+=(z*k.m10+t*k.m11+k.worldY)*s
}u[p]=G+o;
u[p+1]=F+m
}}else{var h=j.attachmentVertices;
for(;
q<A;
p+=2){G=0;
F=0;
i=B[q++]+q;
for(;
q<i;
q++,E+=3,C+=2){k=l[B[q]];
z=D[E]+h[C];
t=D[E+1]+h[C+1];
s=D[E+2];
G+=(z*k.m00+t*k.m01+k.worldX)*s;
F+=(z*k.m10+t*k.m11+k.worldY)*s
}u[p]=G+o;
u[p+1]=F+m
}}}};
f.BoundingBoxAttachment=function(h){this.name=h;
this.vertices=[]
};
f.BoundingBoxAttachment.prototype={type:f.AttachmentType.boundingbox,computeWorldVertices:function(s,p,v,h){s+=v.worldX;
p+=v.worldY;
var w=v.m00,u=v.m01,m=v.m10,l=v.m11;
var o=this.vertices;
for(var k=0,j=o.length;
k<j;
k+=2){var t=o[k];
var q=o[k+1];
h[k]=t*w+q*u+s;
h[k+1]=t*m+q*l+p
}}};
f.AnimationStateData=function(h){this.skeletonData=h;
this.animationToMixTime={}
};
f.AnimationStateData.prototype={defaultMix:0,setMixByName:function(i,h,j){var l=this.skeletonData.findAnimation(i);
if(!l){throw"Animation not found: "+i
}var k=this.skeletonData.findAnimation(h);
if(!k){throw"Animation not found: "+h
}this.setMix(l,k,j)
},setMix:function(j,i,h){this.animationToMixTime[j.name+":"+i.name]=h
},getMix:function(j,i){var h=j.name+":"+i.name;
return this.animationToMixTime.hasOwnProperty(h)?this.animationToMixTime[h]:this.defaultMix
}};
f.TrackEntry=function(){};
f.TrackEntry.prototype={next:null,previous:null,animation:null,loop:false,delay:0,time:0,lastTime:-1,endTime:0,timeScale:1,mixTime:0,mixDuration:0,mix:1,onStart:null,onEnd:null,onComplete:null,onEvent:null};
f.AnimationState=function(h){this.data=h;
this.tracks=[];
this.events=[]
};
f.AnimationState.prototype={onStart:null,onEnd:null,onComplete:null,onEvent:null,timeScale:1,update:function(m){m*=this.timeScale;
for(var j=0;
j<this.tracks.length;
j++){var l=this.tracks[j];
if(!l){continue
}l.time+=m*l.timeScale;
if(l.previous){var h=m*l.previous.timeScale;
l.previous.time+=h;
l.mixTime+=h
}var k=l.next;
if(k){k.time=l.lastTime-k.delay;
if(k.time>=0){this.setCurrent(j,k)
}}else{if(!l.loop&&l.lastTime>=l.endTime){this.clearTrack(j)
}}}},apply:function(m){for(var n=0;
n<this.tracks.length;
n++){var t=this.tracks[n];
if(!t){continue
}this.events.length=0;
var k=t.time;
var j=t.lastTime;
var q=t.endTime;
var o=t.loop;
if(!o&&k>q){k=q
}var p=t.previous;
if(!p){if(t.mix==1){t.animation.apply(m,t.lastTime,k,o,this.events)
}else{t.animation.mix(m,t.lastTime,k,o,this.events,t.mix)
}}else{var u=p.time;
if(!p.loop&&u>p.endTime){u=p.endTime
}p.animation.apply(m,u,u,p.loop,null);
var l=t.mixTime/t.mixDuration*t.mix;
if(l>=1){l=1;
t.previous=null
}t.animation.mix(m,t.lastTime,k,o,this.events,l)
}for(var v=0,w=this.events.length;
v<w;
v++){var h=this.events[v];
if(t.onEvent){t.onEvent(n,h)
}if(this.onEvent){this.onEvent(n,h)
}}if(o?(j%q>k%q):(j<q&&k>=q)){var s=Math.floor(k/q);
if(t.onComplete){t.onComplete(n,s)
}if(this.onComplete){this.onComplete(n,s)
}}t.lastTime=t.time
}},clearTracks:function(){for(var h=0,j=this.tracks.length;
h<j;
h++){this.clearTrack(h)
}this.tracks.length=0
},clearTrack:function(i){if(i>=this.tracks.length){return
}var h=this.tracks[i];
if(!h){return
}if(h.onEnd){h.onEnd(i)
}if(this.onEnd){this.onEnd(i)
}this.tracks[i]=null
},_expandToIndex:function(h){if(h<this.tracks.length){return this.tracks[h]
}while(h>=this.tracks.length){this.tracks.push(null)
}return null
},setCurrent:function(h,j){var k=this._expandToIndex(h);
if(k){var i=k.previous;
k.previous=null;
if(k.onEnd){k.onEnd(h)
}if(this.onEnd){this.onEnd(h)
}j.mixDuration=this.data.getMix(k.animation,j.animation);
if(j.mixDuration>0){j.mixTime=0;
if(i&&k.mixTime/k.mixDuration<0.5){j.previous=i
}else{j.previous=k
}}}this.tracks[h]=j;
if(j.onStart){j.onStart(h)
}if(this.onStart){this.onStart(h)
}},setAnimationByName:function(k,i,h){var j=this.data.skeletonData.findAnimation(i);
if(!j){throw"Animation not found: "+i
}return this.setAnimation(k,j,h)
},setAnimation:function(k,j,h){var i=new f.TrackEntry();
i.animation=j;
i.loop=h;
i.endTime=j.duration;
this.setCurrent(k,i);
return i
},addAnimationByName:function(l,j,h,i){var k=this.data.skeletonData.findAnimation(j);
if(!k){throw"Animation not found: "+j
}return this.addAnimation(l,k,h,i)
},addAnimation:function(m,l,h,i){var k=new f.TrackEntry();
k.animation=l;
k.loop=h;
k.endTime=l.duration;
var j=this._expandToIndex(m);
if(j){while(j.next){j=j.next
}j.next=k
}else{this.tracks[m]=k
}if(i<=0){if(j){i+=j.endTime-this.data.getMix(j.animation,l)
}else{i=0
}}k.delay=i;
return k
},getCurrent:function(h){if(h>=this.tracks.length){return null
}return this.tracks[h]
}};
f.SkeletonJson=function(h){this.attachmentLoader=h
};
f.SkeletonJson.prototype={scale:1,readSkeletonData:function(H,S){var l=new f.SkeletonData();
l.name=S;
var k=H.skeleton;
if(k){l.hash=k.hash;
l.version=k.spine;
l.width=k.width||0;
l.height=k.height||0
}var M=H.bones;
for(var K=0,F=M.length;
K<F;
K++){var P=M[K];
var w=null;
if(P.parent){w=l.findBone(P.parent);
if(!w){throw"Parent bone not found: "+P.parent
}}var q=new f.BoneData(P.name,w);
q.length=(P.length||0)*this.scale;
q.x=(P.x||0)*this.scale;
q.y=(P.y||0)*this.scale;
q.rotation=(P.rotation||0);
q.scaleX=P.hasOwnProperty("scaleX")?P.scaleX:1;
q.scaleY=P.hasOwnProperty("scaleY")?P.scaleY:1;
q.inheritScale=P.hasOwnProperty("inheritScale")?P.inheritScale:true;
q.inheritRotation=P.hasOwnProperty("inheritRotation")?P.inheritRotation:true;
l.bones.push(q)
}var y=H.ik;
if(y){for(var K=0,F=y.length;
K<F;
K++){var Q=y[K];
var N=new f.IkConstraintData(Q.name);
var M=Q.bones;
for(var B=0,j=M.length;
B<j;
B++){var p=l.findBone(M[B]);
if(!p){throw"IK bone not found: "+M[B]
}N.bones.push(p)
}N.target=l.findBone(Q.target);
if(!N.target){throw"Target bone not found: "+Q.target
}N.bendDirection=(!Q.hasOwnProperty("bendPositive")||Q.bendPositive)?1:-1;
N.mix=Q.hasOwnProperty("mix")?Q.mix:1;
l.ikConstraints.push(N)
}}var z=H.slots;
for(var K=0,F=z.length;
K<F;
K++){var L=z[K];
var q=l.findBone(L.bone);
if(!q){throw"Slot bone not found: "+L.bone
}var s=new f.SlotData(L.name,q);
var J=L.color;
if(J){s.r=this.toColor(J,0);
s.g=this.toColor(J,1);
s.b=this.toColor(J,2);
s.a=this.toColor(J,3)
}s.attachmentName=L.attachment;
s.additiveBlending=L.additive&&L.additive=="true";
l.slots.push(s)
}var R=H.skins;
for(var A in R){if(!R.hasOwnProperty(A)){continue
}var E=R[A];
var I=new f.Skin(A);
for(var t in E){if(!E.hasOwnProperty(t)){continue
}var O=l.findSlotIndex(t);
var G=E[t];
for(var D in G){if(!G.hasOwnProperty(D)){continue
}var x=this.readAttachment(I,D,G[D]);
if(x){I.addAttachment(O,D,x)
}}}l.skins.push(I);
if(I.name=="default"){l.defaultSkin=I
}}var h=H.events;
for(var o in h){if(!h.hasOwnProperty(o)){continue
}var C=h[o];
var m=new f.EventData(o);
m.intValue=C["int"]||0;
m.floatValue=C["float"]||0;
m.stringValue=C.string||null;
l.events.push(m)
}var v=H.animations;
for(var u in v){if(!v.hasOwnProperty(u)){continue
}this.readAnimation(u,v[u],l)
}return l
},readAttachment:function(u,B,z){B=z.name||B;
var l=f.AttachmentType[z.type||"region"];
var s=z.path||B;
var A=this.scale;
if(l==f.AttachmentType.region){var k=this.attachmentLoader.newRegionAttachment(u,B,s);
if(!k){return null
}k.path=s;
k.x=(z.x||0)*A;
k.y=(z.y||0)*A;
k.scaleX=z.hasOwnProperty("scaleX")?z.scaleX:1;
k.scaleY=z.hasOwnProperty("scaleY")?z.scaleY:1;
k.rotation=z.rotation||0;
k.width=(z.width||0)*A;
k.height=(z.height||0)*A;
var v=z.color;
if(v){k.r=this.toColor(v,0);
k.g=this.toColor(v,1);
k.b=this.toColor(v,2);
k.a=this.toColor(v,3)
}k.updateOffset();
return k
}else{if(l==f.AttachmentType.mesh){var h=this.attachmentLoader.newMeshAttachment(u,B,s);
if(!h){return null
}h.path=s;
h.vertices=this.getFloatArray(z,"vertices",A);
h.triangles=this.getIntArray(z,"triangles");
h.regionUVs=this.getFloatArray(z,"uvs",1);
h.updateUVs();
v=z.color;
if(v){h.r=this.toColor(v,0);
h.g=this.toColor(v,1);
h.b=this.toColor(v,2);
h.a=this.toColor(v,3)
}h.hullLength=(z.hull||0)*2;
if(z.edges){h.edges=this.getIntArray(z,"edges")
}h.width=(z.width||0)*A;
h.height=(z.height||0)*A;
return h
}else{if(l==f.AttachmentType.skinnedmesh){var h=this.attachmentLoader.newSkinnedMeshAttachment(u,B,s);
if(!h){return null
}h.path=s;
var p=this.getFloatArray(z,"uvs",1);
var m=this.getFloatArray(z,"vertices",1);
var y=[];
var x=[];
for(var w=0,t=m.length;
w<t;
){var o=m[w++]|0;
x[x.length]=o;
for(var j=w+o*4;
w<j;
){x[x.length]=m[w];
y[y.length]=m[w+1]*A;
y[y.length]=m[w+2]*A;
y[y.length]=m[w+3];
w+=4
}}h.bones=x;
h.weights=y;
h.triangles=this.getIntArray(z,"triangles");
h.regionUVs=p;
h.updateUVs();
v=z.color;
if(v){h.r=this.toColor(v,0);
h.g=this.toColor(v,1);
h.b=this.toColor(v,2);
h.a=this.toColor(v,3)
}h.hullLength=(z.hull||0)*2;
if(z.edges){h.edges=this.getIntArray(z,"edges")
}h.width=(z.width||0)*A;
h.height=(z.height||0)*A;
return h
}else{if(l==f.AttachmentType.boundingbox){var q=this.attachmentLoader.newBoundingBoxAttachment(u,B);
var m=z.vertices;
for(var w=0,t=m.length;
w<t;
w++){q.vertices.push(m[w]*A)
}return q
}}}}throw"Unknown attachment type: "+l
},readAnimation:function(B,P,af){var W=[];
var N=0;
var an=P.slots;
for(var ap in an){if(!an.hasOwnProperty(ap)){continue
}var O=an[ap];
var at=af.findSlotIndex(ap);
for(var j in O){if(!O.hasOwnProperty(j)){continue
}var aq=O[j];
if(j=="color"){var v=new f.ColorTimeline(aq.length);
v.slotIndex=at;
var o=0;
for(var ai=0,ad=aq.length;
ai<ad;
ai++){var al=aq[ai];
var Q=al.color;
var Z=this.toColor(Q,0);
var ak=this.toColor(Q,1);
var ao=this.toColor(Q,2);
var ar=this.toColor(Q,3);
v.setFrame(o,al.time,Z,ak,ao,ar);
this.readCurve(v,o,al);
o++
}W.push(v);
N=Math.max(N,v.frames[v.getFrameCount()*5-5])
}else{if(j=="attachment"){var v=new f.AttachmentTimeline(aq.length);
v.slotIndex=at;
var o=0;
for(var ai=0,ad=aq.length;
ai<ad;
ai++){var al=aq[ai];
v.setFrame(o++,al.time,al.name)
}W.push(v);
N=Math.max(N,v.frames[v.getFrameCount()-1])
}else{throw"Invalid timeline type for a slot: "+j+" ("+ap+")"
}}}}var ac=P.bones;
for(var A in ac){if(!ac.hasOwnProperty(A)){continue
}var z=af.findBoneIndex(A);
if(z==-1){throw"Bone not found: "+A
}var s=ac[A];
for(var j in s){if(!s.hasOwnProperty(j)){continue
}var aq=s[j];
if(j=="rotate"){var v=new f.RotateTimeline(aq.length);
v.boneIndex=z;
var o=0;
for(var ai=0,ad=aq.length;
ai<ad;
ai++){var al=aq[ai];
v.setFrame(o,al.time,al.angle);
this.readCurve(v,o,al);
o++
}W.push(v);
N=Math.max(N,v.frames[v.getFrameCount()*2-2])
}else{if(j=="translate"||j=="scale"){var v;
var I=1;
if(j=="scale"){v=new f.ScaleTimeline(aq.length)
}else{v=new f.TranslateTimeline(aq.length);
I=this.scale
}v.boneIndex=z;
var o=0;
for(var ai=0,ad=aq.length;
ai<ad;
ai++){var al=aq[ai];
var Y=(al.x||0)*I;
var X=(al.y||0)*I;
v.setFrame(o,al.time,Y,X);
this.readCurve(v,o,al);
o++
}W.push(v);
N=Math.max(N,v.frames[v.getFrameCount()*3-3])
}else{if(j=="flipX"||j=="flipY"){var Y=j=="flipX";
var v=Y?new f.FlipXTimeline(aq.length):new f.FlipYTimeline(aq.length);
v.boneIndex=z;
var w=Y?"x":"y";
var o=0;
for(var ai=0,ad=aq.length;
ai<ad;
ai++){var al=aq[ai];
v.setFrame(o,al.time,al[w]||false);
o++
}W.push(v);
N=Math.max(N,v.frames[v.getFrameCount()*2-2])
}else{throw"Invalid timeline type for a bone: "+j+" ("+A+")"
}}}}}var E=P.ik;
for(var u in E){if(!E.hasOwnProperty(u)){continue
}var S=af.findIkConstraint(u);
var aq=E[u];
var v=new f.IkConstraintTimeline(aq.length);
v.ikConstraintIndex=af.ikConstraints.indexOf(S);
var o=0;
for(var ai=0,ad=aq.length;
ai<ad;
ai++){var al=aq[ai];
var ae=al.hasOwnProperty("mix")?al.mix:1;
var H=(!al.hasOwnProperty("bendPositive")||al.bendPositive)?1:-1;
v.setFrame(o,al.time,ae,H);
this.readCurve(v,o,al);
o++
}W.push(v);
N=Math.max(N,v.frames[v.frameCount*3-3])
}var ag=P.ffd;
for(var L in ag){var D=af.findSkin(L);
var O=ag[L];
for(ap in O){var at=af.findSlotIndex(ap);
var ah=O[ap];
for(var aa in ah){var aq=ah[aa];
var v=new f.FfdTimeline(aq.length);
var G=D.getAttachment(at,aa);
if(!G){throw"FFD attachment not found: "+aa
}v.slotIndex=at;
v.attachment=G;
var h=G.type==f.AttachmentType.mesh;
var aj;
if(h){aj=G.vertices.length
}else{aj=G.weights.length/3*2
}var o=0;
for(var ai=0,ad=aq.length;
ai<ad;
ai++){var al=aq[ai];
var l;
if(!al.vertices){if(h){l=G.vertices
}else{l=[];
l.length=aj
}}else{var U=al.vertices;
var l=[];
l.length=aj;
var K=al.offset||0;
var am=U.length;
if(this.scale==1){for(var T=0;
T<am;
T++){l[T+K]=U[T]
}}else{for(var T=0;
T<am;
T++){l[T+K]=U[T]*this.scale
}}if(h){var R=G.vertices;
for(var T=0,am=l.length;
T<am;
T++){l[T]+=R[T]
}}}v.setFrame(o,al.time,l);
this.readCurve(v,o,al);
o++
}W[W.length]=v;
N=Math.max(N,v.frames[v.frameCount-1])
}}}var ab=P.drawOrder;
if(!ab){ab=P.draworder
}if(ab){var v=new f.DrawOrderTimeline(ab.length);
var t=af.slots.length;
var o=0;
for(var ai=0,ad=ab.length;
ai<ad;
ai++){var av=ab[ai];
var V=null;
if(av.offsets){V=[];
V.length=t;
for(var T=t-1;
T>=0;
T--){V[T]=-1
}var F=av.offsets;
var k=[];
k.length=t-F.length;
var q=0,M=0;
for(var T=0,am=F.length;
T<am;
T++){var p=F[T];
var at=af.findSlotIndex(p.slot);
if(at==-1){throw"Slot not found: "+p.slot
}while(q!=at){k[M++]=q++
}V[q+p.offset]=q++
}while(q<t){k[M++]=q++
}for(var T=t-1;
T>=0;
T--){if(V[T]==-1){V[T]=k[--M]
}}}v.setFrame(o++,av.time,V)
}W.push(v);
N=Math.max(N,v.frames[v.getFrameCount()-1])
}var J=P.events;
if(J){var v=new f.EventTimeline(J.length);
var o=0;
for(var ai=0,ad=J.length;
ai<ad;
ai++){var m=J[ai];
var C=af.findEvent(m.name);
if(!C){throw"Event not found: "+m.name
}var au=new f.Event(C);
au.intValue=m.hasOwnProperty("int")?m["int"]:C.intValue;
au.floatValue=m.hasOwnProperty("float")?m["float"]:C.floatValue;
au.stringValue=m.hasOwnProperty("string")?m.string:C.stringValue;
v.setFrame(o++,m.time,au)
}W.push(v);
N=Math.max(N,v.frames[v.getFrameCount()-1])
}af.animations.push(new f.Animation(B,W,N))
},readCurve:function(h,k,j){var i=j.curve;
if(!i){h.curves.setLinear(k)
}else{if(i=="stepped"){h.curves.setStepped(k)
}else{if(i instanceof Array){h.curves.setCurve(k,i[0],i[1],i[2],i[3])
}}}},toColor:function(h,i){if(h.length!=8){throw"Color hexidecimal length must be 8, recieved: "+h
}return parseInt(h.substring(i*2,(i*2)+2),16)/255
},getFloatArray:function(m,j,o){var l=m[j];
var h=new f.Float32Array(l.length);
var k=0,p=l.length;
if(o==1){for(;
k<p;
k++){h[k]=l[k]
}}else{for(;
k<p;
k++){h[k]=l[k]*o
}}return h
},getIntArray:function(m,j){var l=m[j];
var h=new f.Uint16Array(l.length);
for(var k=0,o=l.length;
k<o;
k++){h[k]=l[k]|0
}return h
}};
f.Atlas=function(n,h){this.textureLoader=h;
this.pages=[];
this.regions=[];
var j=new f.AtlasReader(n);
var q=[];
q.length=4;
var k=null;
while(true){var t=j.readLine();
if(t===null){break
}t=j.trim(t);
if(!t.length){k=null
}else{if(!k){k=new f.AtlasPage();
k.name=t;
if(j.readTuple(q)==2){k.width=parseInt(q[0]);
k.height=parseInt(q[1]);
j.readTuple(q)
}k.format=f.Atlas.Format[q[0]];
j.readTuple(q);
k.minFilter=f.Atlas.TextureFilter[q[0]];
k.magFilter=f.Atlas.TextureFilter[q[1]];
var p=j.readValue();
k.uWrap=f.Atlas.TextureWrap.clampToEdge;
k.vWrap=f.Atlas.TextureWrap.clampToEdge;
if(p=="x"){k.uWrap=f.Atlas.TextureWrap.repeat
}else{if(p=="y"){k.vWrap=f.Atlas.TextureWrap.repeat
}else{if(p=="xy"){k.uWrap=k.vWrap=f.Atlas.TextureWrap.repeat
}}}h.load(k,t,this);
this.pages.push(k)
}else{var m=new f.AtlasRegion();
m.name=t;
m.page=k;
m.rotate=j.readValue()=="true";
j.readTuple(q);
var o=parseInt(q[0]);
var l=parseInt(q[1]);
j.readTuple(q);
var i=parseInt(q[0]);
var s=parseInt(q[1]);
m.u=o/k.width;
m.v=l/k.height;
if(m.rotate){m.u2=(o+s)/k.width;
m.v2=(l+i)/k.height
}else{m.u2=(o+i)/k.width;
m.v2=(l+s)/k.height
}m.x=o;
m.y=l;
m.width=Math.abs(i);
m.height=Math.abs(s);
if(j.readTuple(q)==4){m.splits=[parseInt(q[0]),parseInt(q[1]),parseInt(q[2]),parseInt(q[3])];
if(j.readTuple(q)==4){m.pads=[parseInt(q[0]),parseInt(q[1]),parseInt(q[2]),parseInt(q[3])];
j.readTuple(q)
}}m.originalWidth=parseInt(q[0]);
m.originalHeight=parseInt(q[1]);
j.readTuple(q);
m.offsetX=parseInt(q[0]);
m.offsetY=parseInt(q[1]);
m.index=parseInt(j.readValue());
this.regions.push(m)
}}}};
f.Atlas.prototype={findRegion:function(h){var l=this.regions;
for(var j=0,k=l.length;
j<k;
j++){if(l[j].name==h){return l[j]
}}return null
},dispose:function(){var h=this.pages;
for(var j=0,k=h.length;
j<k;
j++){this.textureLoader.unload(h[j].rendererObject)
}},updateUVs:function(j){var m=this.regions;
for(var h=0,l=m.length;
h<l;
h++){var k=m[h];
if(k.page!=j){continue
}k.u=k.x/j.width;
k.v=k.y/j.height;
if(k.rotate){k.u2=(k.x+k.height)/j.width;
k.v2=(k.y+k.width)/j.height
}else{k.u2=(k.x+k.width)/j.width;
k.v2=(k.y+k.height)/j.height
}}}};
f.Atlas.Format={alpha:0,intensity:1,luminanceAlpha:2,rgb565:3,rgba4444:4,rgb888:5,rgba8888:6};
f.Atlas.TextureFilter={nearest:0,linear:1,mipMap:2,mipMapNearestNearest:3,mipMapLinearNearest:4,mipMapNearestLinear:5,mipMapLinearLinear:6};
f.Atlas.TextureWrap={mirroredRepeat:0,clampToEdge:1,repeat:2};
f.AtlasPage=function(){};
f.AtlasPage.prototype={name:null,format:null,minFilter:null,magFilter:null,uWrap:null,vWrap:null,rendererObject:null,width:0,height:0};
f.AtlasRegion=function(){};
f.AtlasRegion.prototype={page:null,name:null,x:0,y:0,width:0,height:0,u:0,v:0,u2:0,v2:0,offsetX:0,offsetY:0,originalWidth:0,originalHeight:0,index:0,rotate:false,splits:null,pads:null};
f.AtlasReader=function(h){this.lines=h.split(/\r\n|\r|\n/)
};
f.AtlasReader.prototype={index:0,trim:function(h){return h.replace(/^\s+|\s+$/g,"")
},readLine:function(){if(this.index>=this.lines.length){return null
}return this.lines[this.index++]
},readValue:function(){var h=this.readLine();
var i=h.indexOf(":");
if(i==-1){throw"Invalid line: "+h
}return this.trim(h.substring(i+1))
},readTuple:function(j){var k=this.readLine();
var m=k.indexOf(":");
if(m==-1){throw"Invalid line: "+k
}var l=0,n=m+1;
for(;
l<3;
l++){var h=k.indexOf(",",n);
if(h==-1){break
}j[l]=this.trim(k.substr(n,h-n));
n=h+1
}j[l]=this.trim(k.substring(n));
return l+1
}};
f.AtlasAttachmentLoader=function(h){this.atlas=h
};
f.AtlasAttachmentLoader.prototype={newRegionAttachment:function(k,h,j){var i=this.atlas.findRegion(j);
if(!i){throw"Region not found in atlas: "+j+" (region attachment: "+h+")"
}var l=new f.RegionAttachment(h);
l.rendererObject=i;
l.setUVs(i.u,i.v,i.u2,i.v2,i.rotate);
l.regionOffsetX=i.offsetX;
l.regionOffsetY=i.offsetY;
l.regionWidth=i.width;
l.regionHeight=i.height;
l.regionOriginalWidth=i.originalWidth;
l.regionOriginalHeight=i.originalHeight;
return l
},newMeshAttachment:function(k,h,j){var i=this.atlas.findRegion(j);
if(!i){throw"Region not found in atlas: "+j+" (mesh attachment: "+h+")"
}var l=new f.MeshAttachment(h);
l.rendererObject=i;
l.regionU=i.u;
l.regionV=i.v;
l.regionU2=i.u2;
l.regionV2=i.v2;
l.regionRotate=i.rotate;
l.regionOffsetX=i.offsetX;
l.regionOffsetY=i.offsetY;
l.regionWidth=i.width;
l.regionHeight=i.height;
l.regionOriginalWidth=i.originalWidth;
l.regionOriginalHeight=i.originalHeight;
return l
},newSkinnedMeshAttachment:function(k,h,j){var i=this.atlas.findRegion(j);
if(!i){throw"Region not found in atlas: "+j+" (skinned mesh attachment: "+h+")"
}var l=new f.SkinnedMeshAttachment(h);
l.rendererObject=i;
l.regionU=i.u;
l.regionV=i.v;
l.regionU2=i.u2;
l.regionV2=i.v2;
l.regionRotate=i.rotate;
l.regionOffsetX=i.offsetX;
l.regionOffsetY=i.offsetY;
l.regionWidth=i.width;
l.regionHeight=i.height;
l.regionOriginalWidth=i.originalWidth;
l.regionOriginalHeight=i.originalHeight;
return l
},newBoundingBoxAttachment:function(i,h){return new f.BoundingBoxAttachment(h)
}};
f.SkeletonBounds=function(){this.polygonPool=[];
this.polygons=[];
this.boundingBoxes=[]
};
f.SkeletonBounds.prototype={minX:0,minY:0,maxX:0,maxY:0,update:function(l,t){var s=l.slots;
var p=s.length;
var z=l.x,u=l.y;
var j=this.boundingBoxes;
var q=this.polygonPool;
var w=this.polygons;
j.length=0;
for(var o=0,h=w.length;
o<h;
o++){q.push(w[o])
}w.length=0;
for(var o=0;
o<p;
o++){var A=s[o];
var m=A.attachment;
if(m.type!=f.AttachmentType.boundingbox){continue
}j.push(m);
var k=q.length,v;
if(k>0){v=q[k-1];
q.splice(k-1,1)
}else{v=[]
}w.push(v);
v.length=m.vertices.length;
m.computeWorldVertices(z,u,A.bone,v)
}if(t){this.aabbCompute()
}},aabbCompute:function(){var t=this.polygons;
var m=Number.MAX_VALUE,l=Number.MAX_VALUE,j=Number.MIN_VALUE,h=Number.MIN_VALUE;
for(var o=0,k=t.length;
o<k;
o++){var p=t[o];
for(var u=0,v=p.length;
u<v;
u+=2){var s=p[u];
var q=p[u+1];
m=Math.min(m,s);
l=Math.min(l,q);
j=Math.max(j,s);
h=Math.max(h,q)
}}this.minX=m;
this.minY=l;
this.maxX=j;
this.maxY=h
},aabbContainsPoint:function(h,i){return h>=this.minX&&h<=this.maxX&&i>=this.minY&&i<=this.maxY
},aabbIntersectsSegment:function(k,t,j,q){var o=this.minX,n=this.minY,i=this.maxX,h=this.maxY;
if((k<=o&&j<=o)||(t<=n&&q<=n)||(k>=i&&j>=i)||(t>=h&&q>=h)){return false
}var l=(q-t)/(j-k);
var p=l*(o-k)+t;
if(p>n&&p<h){return true
}p=l*(i-k)+t;
if(p>n&&p<h){return true
}var s=(n-t)/l+k;
if(s>o&&s<i){return true
}s=(h-t)/l+k;
if(s>o&&s<i){return true
}return false
},aabbIntersectsSkeleton:function(h){return this.minX<h.maxX&&this.maxX>h.minX&&this.minY<h.maxY&&this.maxY>h.minY
},containsPoint:function(h,m){var j=this.polygons;
for(var k=0,l=j.length;
k<l;
k++){if(this.polygonContainsPoint(j[k],h,m)){return this.boundingBoxes[k]
}}return null
},intersectsSegment:function(k,o,j,m){var h=this.polygons;
for(var l=0,p=h.length;
l<p;
l++){if(h[l].intersectsSegment(k,o,j,m)){return this.boundingBoxes[l]
}}return null
},polygonContainsPoint:function(n,o,m){var q=n.length;
var j=q-2;
var k=false;
for(var p=0;
p<q;
p+=2){var h=n[p+1];
var l=n[j+1];
if((h<m&&l>=m)||(l<m&&h>=m)){var i=n[p];
if(i+(m-h)/(l-h)*(n[j]-i)<o){k=!k
}}j=p
}return k
},polygonIntersectsSegment:function(u,D,m,B,l){var i=u.length;
var C=D-B,k=m-l;
var p=D*l-m*B;
var A=u[i-2],j=u[i-1];
for(var v=0;
v<i;
v+=2){var w=u[v],h=u[v+1];
var o=A*h-j*w;
var t=A-w,z=j-h;
var n=C*z-k*t;
var s=(p*t-C*o)/n;
if(((s>=A&&s<=w)||(s>=w&&s<=A))&&((s>=D&&s<=B)||(s>=B&&s<=D))){var q=(p*z-k*o)/n;
if(((q>=j&&q<=h)||(q>=h&&q<=j))&&((q>=m&&q<=l)||(q>=l&&q<=m))){return true
}}A=w;
j=h
}return false
},getPolygon:function(i){var h=this.boundingBoxes.indexOf(i);
return h==-1?null:this.polygons[h]
},getWidth:function(){return this.maxX-this.minX
},getHeight:function(){return this.maxY-this.minY
}};
f.Bone.yDown=true;
g.AnimCache={};
g.SpineTextureLoader=function(i,h){g.EventTarget.call(this);
this.basePath=i;
this.crossorigin=h;
this.loadingCount=0
};
g.SpineTextureLoader.prototype=g.SpineTextureLoader;
g.SpineTextureLoader.prototype.load=function(j,h){j.rendererObject=g.BaseTexture.fromImage(this.basePath+"/"+h,this.crossorigin);
if(!j.rendererObject.hasLoaded){var i=this;
++i.loadingCount;
j.rendererObject.addEventListener("loaded",function(){--i.loadingCount;
i.dispatchEvent({type:"loadedBaseTexture",content:i})
})
}};
g.SpineTextureLoader.prototype.unload=function(h){h.destroy(true)
};
g.Spine=function(h){g.DisplayObjectContainer.call(this);
this.spineData=g.AnimCache[h];
if(!this.spineData){throw new Error("Spine data must be preloaded using PIXI.SpineLoader or PIXI.AssetLoader: "+h)
}this.skeleton=new f.Skeleton(this.spineData);
this.skeleton.updateWorldTransform();
this.stateData=new f.AnimationStateData(this.spineData);
this.state=new f.AnimationState(this.stateData);
this.slotContainers=[];
for(var l=0,j=this.skeleton.drawOrder.length;
l<j;
l++){var p=this.skeleton.drawOrder[l];
var m=p.attachment;
var o=new g.DisplayObjectContainer();
this.slotContainers.push(o);
this.addChild(o);
if(m instanceof f.RegionAttachment){var k=m.rendererObject.name;
var q=this.createSprite(p,m);
p.currentSprite=q;
p.currentSpriteName=k;
o.addChild(q)
}else{if(m instanceof f.MeshAttachment){var s=this.createMesh(p,m);
p.currentMesh=s;
p.currentMeshName=m.name;
o.addChild(s)
}else{continue
}}}this.autoUpdate=true
};
g.Spine.prototype=Object.create(g.DisplayObjectContainer.prototype);
g.Spine.prototype.constructor=g.Spine;
Object.defineProperty(g.Spine.prototype,"autoUpdate",{get:function(){return(this.updateTransform===g.Spine.prototype.autoUpdateTransform)
},set:function(h){this.updateTransform=h?g.Spine.prototype.autoUpdateTransform:g.DisplayObjectContainer.prototype.updateTransform
}});
g.Spine.prototype.update=function(j){this.state.update(j);
this.state.apply(this.skeleton);
this.skeleton.updateWorldTransform();
var h=this.skeleton.drawOrder;
for(var m=0,k=h.length;
m<k;
m++){var t=h[m];
var o=t.attachment;
var p=this.slotContainers[m];
if(!o){p.visible=false;
continue
}var q=o.type;
if(q===f.AttachmentType.region){if(o.rendererObject){if(!t.currentSpriteName||t.currentSpriteName!==o.name){var l=o.rendererObject.name;
if(t.currentSprite!==undefined){t.currentSprite.visible=false
}t.sprites=t.sprites||{};
if(t.sprites[l]!==undefined){t.sprites[l].visible=true
}else{var u=this.createSprite(t,o);
p.addChild(u)
}t.currentSprite=t.sprites[l];
t.currentSpriteName=l
}}var v=t.bone;
p.position.x=v.worldX+o.x*v.m00+o.y*v.m01;
p.position.y=v.worldY+o.x*v.m10+o.y*v.m11;
p.scale.x=v.worldScaleX;
p.scale.y=v.worldScaleY;
p.rotation=-(t.bone.worldRotation*f.degRad);
t.currentSprite.tint=g.rgb2hex([t.r,t.g,t.b])
}else{if(q===f.AttachmentType.skinnedmesh){if(!t.currentMeshName||t.currentMeshName!==o.name){var s=o.name;
if(t.currentMesh!==undefined){t.currentMesh.visible=false
}t.meshes=t.meshes||{};
if(t.meshes[s]!==undefined){t.meshes[s].visible=true
}else{var w=this.createMesh(t,o);
p.addChild(w)
}t.currentMesh=t.meshes[s];
t.currentMeshName=s
}o.computeWorldVertices(t.bone.skeleton.x,t.bone.skeleton.y,t,t.currentMesh.vertices)
}else{p.visible=false;
continue
}}p.visible=true;
p.alpha=t.a
}};
g.Spine.prototype.autoUpdateTransform=function(){this.lastTime=this.lastTime||Date.now();
var h=(Date.now()-this.lastTime)*0.001;
this.lastTime=Date.now();
this.update(h);
g.DisplayObjectContainer.prototype.updateTransform.call(this)
};
g.Spine.prototype.createSprite=function(o,m){var l=m.rendererObject;
var j=l.page.rendererObject;
var k=new g.Rectangle(l.x,l.y,l.rotate?l.height:l.width,l.rotate?l.width:l.height);
var h=new g.Texture(j,k);
var i=new g.Sprite(h);
var n=l.rotate?Math.PI*0.5:0;
i.scale.set(l.width/l.originalWidth,l.height/l.originalHeight);
i.rotation=n-(m.rotation*f.degRad);
i.anchor.x=i.anchor.y=0.5;
o.sprites=o.sprites||{};
o.sprites[l.name]=i;
return i
};
g.Spine.prototype.createMesh=function(m,l){var k=l.rendererObject;
var j=k.page.rendererObject;
var i=new g.Texture(j);
var h=new g.Strip(i);
h.drawMode=g.Strip.DrawModes.TRIANGLES;
h.canvasPadding=1.5;
h.vertices=new g.Float32Array(l.uvs.length);
h.uvs=l.uvs;
h.indices=l.triangles;
m.meshes=m.meshes||{};
m.meshes[l.name]=h;
return h
};
g.BaseTextureCache={};
g.BaseTextureCacheIdGenerator=0;
g.BaseTexture=function(j,i){this.resolution=1;
this.width=100;
this.height=100;
this.scaleMode=i||g.scaleModes.DEFAULT;
this.hasLoaded=false;
this.source=j;
this._UID=g._UID++;
this.premultipliedAlpha=true;
this._glTextures=[];
this.mipmap=false;
this._dirty=[true,true,true,true];
if(!j){return
}if((this.source.complete||this.source.getContext)&&this.source.width&&this.source.height){this.hasLoaded=true;
this.width=this.source.naturalWidth||this.source.width;
this.height=this.source.naturalHeight||this.source.height;
this.dirty()
}else{var h=this;
this.source.onload=function(){h.hasLoaded=true;
h.width=h.source.naturalWidth||h.source.width;
h.height=h.source.naturalHeight||h.source.height;
h.dirty();
h.dispatchEvent({type:"loaded",content:h})
};
this.source.onerror=function(){h.dispatchEvent({type:"error",content:h})
}
}this.imageUrl=null;
this._powerOf2=false
};
g.BaseTexture.prototype.constructor=g.BaseTexture;
g.EventTarget.mixin(g.BaseTexture.prototype);
g.BaseTexture.prototype.destroy=function(){if(this.imageUrl){delete g.BaseTextureCache[this.imageUrl];
delete g.TextureCache[this.imageUrl];
this.imageUrl=null;
if(!navigator.isCocoonJS){this.source.src=""
}}else{if(this.source&&this.source._pixiId){delete g.BaseTextureCache[this.source._pixiId]
}}this.source=null;
this.unloadFromGPU()
};
g.BaseTexture.prototype.updateSourceImage=function(h){this.hasLoaded=false;
this.source.src=null;
this.source.src=h
};
g.BaseTexture.prototype.dirty=function(){for(var h=0;
h<this._glTextures.length;
h++){this._dirty[h]=true
}};
g.BaseTexture.prototype.unloadFromGPU=function(){this.dirty();
for(var j=this._glTextures.length-1;
j>=0;
j--){var h=this._glTextures[j];
var k=g.glContexts[j];
if(k&&h){k.deleteTexture(h)
}}this._glTextures.length=0;
this.dirty()
};
g.BaseTexture.fromImage=function(i,h,j){var k=g.BaseTextureCache[i];
if(h===undefined&&i.indexOf("data:")===-1){h=true
}if(!k){var l=new Image();
if(h){l.crossOrigin=""
}l.src=i;
k=new g.BaseTexture(l,j);
k.imageUrl=i;
g.BaseTextureCache[i]=k;
if(i.indexOf(g.RETINA_PREFIX+".")!==-1){k.resolution=2
}}return k
};
g.BaseTexture.fromCanvas=function(h,i){if(!h._pixiId){h._pixiId="canvas_"+g.TextureCacheIdGenerator++
}var j=g.BaseTextureCache[h._pixiId];
if(!j){j=new g.BaseTexture(h,i);
g.BaseTextureCache[h._pixiId]=j
}return j
};
g.TextureCache={};
g.FrameCache={};
g.TextureCacheIdGenerator=0;
g.Texture=function(j,k,i,h){this.noFrame=false;
if(!k){this.noFrame=true;
k=new g.Rectangle(0,0,1,1)
}if(j instanceof g.Texture){j=j.baseTexture
}this.baseTexture=j;
this.frame=k;
this.trim=h;
this.valid=false;
this.requiresUpdate=false;
this._uvs=null;
this.width=0;
this.height=0;
this.crop=i||new g.Rectangle(0,0,1,1);
if(j.hasLoaded){if(this.noFrame){k=new g.Rectangle(0,0,j.width,j.height)
}this.setFrame(k)
}else{j.addEventListener("loaded",this.onBaseTextureLoaded.bind(this))
}};
g.Texture.prototype.constructor=g.Texture;
g.EventTarget.mixin(g.Texture.prototype);
g.Texture.prototype.onBaseTextureLoaded=function(){var h=this.baseTexture;
h.removeEventListener("loaded",this.onLoaded);
if(this.noFrame){this.frame=new g.Rectangle(0,0,h.width,h.height)
}this.setFrame(this.frame);
this.dispatchEvent({type:"update",content:this})
};
g.Texture.prototype.destroy=function(h){if(h){this.baseTexture.destroy()
}this.valid=false
};
g.Texture.prototype.setFrame=function(h){this.noFrame=false;
this.frame=h;
this.width=h.width;
this.height=h.height;
this.crop.x=h.x;
this.crop.y=h.y;
this.crop.width=h.width;
this.crop.height=h.height;
if(!this.trim&&(h.x+h.width>this.baseTexture.width||h.y+h.height>this.baseTexture.height)){throw new Error("Texture Error: frame does not fit inside the base Texture dimensions "+this)
}this.valid=h&&h.width&&h.height&&this.baseTexture.source&&this.baseTexture.hasLoaded;
if(this.trim){this.width=this.trim.width;
this.height=this.trim.height;
this.frame.width=this.trim.width;
this.frame.height=this.trim.height
}if(this.valid){this._updateUvs()
}};
g.Texture.prototype._updateUvs=function(){if(!this._uvs){this._uvs=new g.TextureUvs()
}var j=this.crop;
var h=this.baseTexture.width;
var i=this.baseTexture.height;
this._uvs.x0=j.x/h;
this._uvs.y0=j.y/i;
this._uvs.x1=(j.x+j.width)/h;
this._uvs.y1=j.y/i;
this._uvs.x2=(j.x+j.width)/h;
this._uvs.y2=(j.y+j.height)/i;
this._uvs.x3=j.x/h;
this._uvs.y3=(j.y+j.height)/i
};
g.Texture.fromImage=function(i,h,j){var k=g.TextureCache[i];
if(!k){k=new g.Texture(g.BaseTexture.fromImage(i,h,j));
g.TextureCache[i]=k
}return k
};
g.Texture.fromFrame=function(i){var h=g.TextureCache[i];
if(!h){throw new Error('The frameId "'+i+'" does not exist in the texture cache ')
}return h
};
g.Texture.fromCanvas=function(h,i){var j=g.BaseTexture.fromCanvas(h,i);
return new g.Texture(j)
};
g.Texture.addTextureToCache=function(h,i){g.TextureCache[i]=h
};
g.Texture.removeTextureFromCache=function(i){var h=g.TextureCache[i];
delete g.TextureCache[i];
delete g.BaseTextureCache[i];
return h
};
g.TextureUvs=function(){this.x0=0;
this.y0=0;
this.x1=0;
this.y1=0;
this.x2=0;
this.y2=0;
this.x3=0;
this.y3=0
};
g.Texture.emptyTexture=new g.Texture(new g.BaseTexture());
g.RenderTexture=function(k,h,l,j,i){this.width=k||100;
this.height=h||100;
this.resolution=i||1;
this.frame=new g.Rectangle(0,0,this.width*this.resolution,this.height*this.resolution);
this.crop=new g.Rectangle(0,0,this.width*this.resolution,this.height*this.resolution);
this.baseTexture=new g.BaseTexture();
this.baseTexture.width=this.width*this.resolution;
this.baseTexture.height=this.height*this.resolution;
this.baseTexture._glTextures=[];
this.baseTexture.resolution=this.resolution;
this.baseTexture.scaleMode=j||g.scaleModes.DEFAULT;
this.baseTexture.hasLoaded=true;
g.Texture.call(this,this.baseTexture,new g.Rectangle(0,0,this.width*this.resolution,this.height*this.resolution));
this.renderer=l||g.defaultRenderer;
if(this.renderer.type===g.WEBGL_RENDERER){var m=this.renderer.gl;
this.baseTexture._dirty[m.id]=false;
this.textureBuffer=new g.FilterTexture(m,this.width,this.height,this.baseTexture.scaleMode);
this.baseTexture._glTextures[m.id]=this.textureBuffer.texture;
this.render=this.renderWebGL;
this.projection=new g.Point(this.width*0.5,-this.height*0.5)
}else{this.render=this.renderCanvas;
this.textureBuffer=new g.CanvasBuffer(this.width*this.resolution,this.height*this.resolution);
this.baseTexture.source=this.textureBuffer.canvas
}this.valid=true;
this._updateUvs()
};
g.RenderTexture.prototype=Object.create(g.Texture.prototype);
g.RenderTexture.prototype.constructor=g.RenderTexture;
g.RenderTexture.prototype.resize=function(j,h,i){if(j===this.width&&h===this.height){return
}this.valid=(j>0&&h>0);
this.width=j;
this.height=h;
this.frame.width=this.crop.width=j*this.resolution;
this.frame.height=this.crop.height=h*this.resolution;
if(i){this.baseTexture.width=this.width*this.resolution;
this.baseTexture.height=this.height*this.resolution
}if(this.renderer.type===g.WEBGL_RENDERER){this.projection.x=this.width/2;
this.projection.y=-this.height/2
}if(!this.valid){return
}this.textureBuffer.resize(this.width,this.height)
};
g.RenderTexture.prototype.clear=function(){if(!this.valid){return
}if(this.renderer.type===g.WEBGL_RENDERER){this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER,this.textureBuffer.frameBuffer)
}this.textureBuffer.clear()
};
g.RenderTexture.prototype.renderWebGL=function(q,l,k){if(!this.valid){return
}var h=q.worldTransform;
h.identity();
h.translate(0,this.projection.y*2);
if(l){h.append(l)
}h.scale(1,-1);
q.worldAlpha=1;
var o=q.children;
for(var n=0,m=o.length;
n<m;
n++){o[n].updateTransform()
}var p=this.renderer.gl;
p.viewport(0,0,this.width*this.resolution,this.height*this.resolution);
p.bindFramebuffer(p.FRAMEBUFFER,this.textureBuffer.frameBuffer);
if(k){this.textureBuffer.clear()
}this.renderer.spriteBatch.dirty=true;
this.renderer.renderDisplayObject(q,this.projection,this.textureBuffer.frameBuffer);
this.renderer.spriteBatch.dirty=true
};
g.RenderTexture.prototype.renderCanvas=function(p,s,n){if(!this.valid){return
}var o=p.worldTransform;
o.identity();
if(s){o.append(s)
}p.worldAlpha=1;
var k=p.children;
for(var m=0,l=k.length;
m<l;
m++){k[m].updateTransform()
}if(n){this.textureBuffer.clear()
}var h=this.textureBuffer.context;
var q=this.renderer.resolution;
this.renderer.resolution=this.resolution;
this.renderer.renderDisplayObject(p,h);
this.renderer.resolution=q
};
g.RenderTexture.prototype.getImage=function(){var h=new Image();
h.src=this.getBase64();
return h
};
g.RenderTexture.prototype.getBase64=function(){return this.getCanvas().toDataURL()
};
g.RenderTexture.prototype.getCanvas=function(){if(this.renderer.type===g.WEBGL_RENDERER){var m=this.renderer.gl;
var k=this.textureBuffer.width;
var h=this.textureBuffer.height;
var i=new Uint8Array(4*k*h);
m.bindFramebuffer(m.FRAMEBUFFER,this.textureBuffer.frameBuffer);
m.readPixels(0,0,k,h,m.RGBA,m.UNSIGNED_BYTE,i);
m.bindFramebuffer(m.FRAMEBUFFER,null);
var l=new g.CanvasBuffer(k,h);
var j=l.context.getImageData(0,0,k,h);
j.data.set(i);
l.context.putImageData(j,0,0);
return l.canvas
}else{return this.textureBuffer.canvas
}};
g.RenderTexture.tempMatrix=new g.Matrix();
g.VideoTexture=function(i,h){if(!i){throw new Error("No video source element specified.")
}if((i.readyState===i.HAVE_ENOUGH_DATA||i.readyState===i.HAVE_FUTURE_DATA)&&i.width&&i.height){i.complete=true
}g.BaseTexture.call(this,i,h);
this.autoUpdate=false;
this.updateBound=this._onUpdate.bind(this);
if(!i.complete){this._onCanPlay=this.onCanPlay.bind(this);
i.addEventListener("canplay",this._onCanPlay);
i.addEventListener("canplaythrough",this._onCanPlay);
i.addEventListener("play",this.onPlayStart.bind(this));
i.addEventListener("pause",this.onPlayStop.bind(this))
}};
g.VideoTexture.prototype=Object.create(g.BaseTexture.prototype);
g.VideoTexture.constructor=g.VideoTexture;
g.VideoTexture.prototype._onUpdate=function(){if(this.autoUpdate){window.requestAnimationFrame(this.updateBound);
this.dirty()
}};
g.VideoTexture.prototype.onPlayStart=function(){if(!this.autoUpdate){window.requestAnimationFrame(this.updateBound);
this.autoUpdate=true
}};
g.VideoTexture.prototype.onPlayStop=function(){this.autoUpdate=false
};
g.VideoTexture.prototype.onCanPlay=function(){if(event.type==="canplaythrough"){this.hasLoaded=true;
if(this.source){this.source.removeEventListener("canplay",this._onCanPlay);
this.source.removeEventListener("canplaythrough",this._onCanPlay);
this.width=this.source.videoWidth;
this.height=this.source.videoHeight;
if(!this.__loaded){this.__loaded=true;
this.dispatchEvent({type:"loaded",content:this})
}}}};
g.VideoTexture.prototype.destroy=function(){if(this.source&&this.source._pixiId){g.BaseTextureCache[this.source._pixiId]=null;
delete g.BaseTextureCache[this.source._pixiId];
this.source._pixiId=null;
delete this.source._pixiId
}g.BaseTexture.prototype.destroy.call(this)
};
g.VideoTexture.baseTextureFromVideo=function(j,h){if(!j._pixiId){j._pixiId="video_"+g.TextureCacheIdGenerator++
}var i=g.BaseTextureCache[j._pixiId];
if(!i){i=new g.VideoTexture(j,h);
g.BaseTextureCache[j._pixiId]=i
}return i
};
g.VideoTexture.textureFromVideo=function(j,h){var i=g.VideoTexture.baseTextureFromVideo(j,h);
return new g.Texture(i)
};
g.VideoTexture.fromUrl=function(h,i){var j=document.createElement("video");
j.src=h;
j.autoPlay=true;
j.play();
return g.VideoTexture.textureFromVideo(j,i)
};
g.AssetLoader=function(h,i){this.assetURLs=h;
this.crossorigin=i;
this.loadersByType={jpg:g.ImageLoader,jpeg:g.ImageLoader,png:g.ImageLoader,gif:g.ImageLoader,webp:g.ImageLoader,json:g.JsonLoader,atlas:g.AtlasLoader,anim:g.SpineLoader,xml:g.BitmapFontLoader,fnt:g.BitmapFontLoader}
};
g.EventTarget.mixin(g.AssetLoader.prototype);
g.AssetLoader.prototype.constructor=g.AssetLoader;
g.AssetLoader.prototype._getDataType=function(j){var m="data:";
var l=j.slice(0,m.length).toLowerCase();
if(l===m){var h=j.slice(m.length);
var k=h.indexOf(",");
if(k===-1){return null
}var i=h.slice(0,k).split(";")[0];
if(!i||i.toLowerCase()==="text/plain"){return"txt"
}return i.split("/").pop().toLowerCase()
}return null
};
g.AssetLoader.prototype.load=function(){var m=this;
function l(i){m.onAssetLoaded(i.data.content)
}this.loadCount=this.assetURLs.length;
for(var k=0;
k<this.assetURLs.length;
k++){var o=this.assetURLs[k];
var j=this._getDataType(o);
if(!j){j=o.split("?").shift().split(".").pop().toLowerCase()
}var n=this.loadersByType[j];
if(!n){throw new Error(j+" is an unsupported file type")
}var h=new n(o,this.crossorigin);
h.on("loaded",l);
h.load()
}};
g.AssetLoader.prototype.onAssetLoaded=function(h){this.loadCount--;
this.emit("onProgress",{content:this,loader:h,loaded:this.assetURLs.length-this.loadCount,total:this.assetURLs.length});
if(this.onProgress){this.onProgress(h)
}if(!this.loadCount){this.emit("onComplete",{content:this});
if(this.onComplete){this.onComplete()
}}};
g.JsonLoader=function(i,h){this.url=i;
this.crossorigin=h;
this.baseUrl=i.replace(/[^\/]*$/,"");
this.loaded=false
};
g.JsonLoader.prototype.constructor=g.JsonLoader;
g.EventTarget.mixin(g.JsonLoader.prototype);
g.JsonLoader.prototype.load=function(){if(window.XDomainRequest&&this.crossorigin){this.ajaxRequest=new window.XDomainRequest();
this.ajaxRequest.timeout=3000;
this.ajaxRequest.onerror=this.onError.bind(this);
this.ajaxRequest.ontimeout=this.onError.bind(this);
this.ajaxRequest.onprogress=function(){};
this.ajaxRequest.onload=this.onJSONLoaded.bind(this)
}else{if(window.XMLHttpRequest){this.ajaxRequest=new window.XMLHttpRequest()
}else{this.ajaxRequest=new window.ActiveXObject("Microsoft.XMLHTTP")
}this.ajaxRequest.onreadystatechange=this.onReadyStateChanged.bind(this)
}this.ajaxRequest.open("GET",this.url,true);
this.ajaxRequest.send()
};
g.JsonLoader.prototype.onReadyStateChanged=function(){if(this.ajaxRequest.readyState===4&&(this.ajaxRequest.status===200||window.location.href.indexOf("http")===-1)){this.onJSONLoaded()
}};
g.JsonLoader.prototype.onJSONLoaded=function(){if(!this.ajaxRequest.responseText){this.onError();
return
}this.json=JSON.parse(this.ajaxRequest.responseText);
if(this.json.frames&&this.json.meta&&this.json.meta.image){var o=this.baseUrl+this.json.meta.image;
var k=new g.ImageLoader(o,this.crossorigin);
var q=this.json.frames;
this.texture=k.texture.baseTexture;
k.addEventListener("loaded",this.onLoaded.bind(this));
for(var m in q){var p=q[m].frame;
if(p){var h=new g.Rectangle(p.x,p.y,p.w,p.h);
var n=h.clone();
var j=null;
if(q[m].trimmed){var v=q[m].sourceSize;
var u=q[m].spriteSourceSize;
j=new g.Rectangle(u.x,u.y,v.w,v.h)
}g.TextureCache[m]=new g.Texture(this.texture,h,n,j)
}}k.load()
}else{if(this.json.bones){if(g.AnimCache[this.url]){this.onLoaded()
}else{var s=this.url.substr(0,this.url.lastIndexOf("."))+".atlas";
var t=new g.JsonLoader(s,this.crossorigin);
var l=this;
t.onJSONLoaded=function(){if(!this.ajaxRequest.responseText){this.onError();
return
}var x=new g.SpineTextureLoader(this.url.substring(0,this.url.lastIndexOf("/")));
var z=new f.Atlas(this.ajaxRequest.responseText,x);
var y=new f.AtlasAttachmentLoader(z);
var w=new f.SkeletonJson(y);
var i=w.readSkeletonData(l.json);
g.AnimCache[l.url]=i;
l.spine=i;
l.spineAtlas=z;
l.spineAtlasLoader=t;
if(x.loadingCount>0){x.addEventListener("loadedBaseTexture",function(A){if(A.content.content.loadingCount<=0){l.onLoaded()
}})
}else{l.onLoaded()
}};
t.load()
}}else{this.onLoaded()
}}};
g.JsonLoader.prototype.onLoaded=function(){this.loaded=true;
this.dispatchEvent({type:"loaded",content:this})
};
g.JsonLoader.prototype.onError=function(){this.dispatchEvent({type:"error",content:this})
};
g.AtlasLoader=function(i,h){this.url=i;
this.baseUrl=i.replace(/[^\/]*$/,"");
this.crossorigin=h;
this.loaded=false
};
g.AtlasLoader.constructor=g.AtlasLoader;
g.EventTarget.mixin(g.AtlasLoader.prototype);
g.AtlasLoader.prototype.load=function(){this.ajaxRequest=new g.AjaxRequest();
this.ajaxRequest.onreadystatechange=this.onAtlasLoaded.bind(this);
this.ajaxRequest.open("GET",this.url,true);
if(this.ajaxRequest.overrideMimeType){this.ajaxRequest.overrideMimeType("application/json")
}this.ajaxRequest.send(null)
};
g.AtlasLoader.prototype.onAtlasLoaded=function(){if(this.ajaxRequest.readyState===4){if(this.ajaxRequest.status===200||window.location.href.indexOf("http")===-1){this.atlas={meta:{image:[]},frames:[]};
var v=this.ajaxRequest.responseText.split(/\r?\n/);
var t=-3;
var n=0;
var h=null;
var q=false;
var l=0,k=0,w=this.onLoaded.bind(this);
for(l=0;
l<v.length;
l++){v[l]=v[l].replace(/^\s+|\s+$/g,"");
if(v[l]===""){q=l+1
}if(v[l].length>0){if(q===l){this.atlas.meta.image.push(v[l]);
n=this.atlas.meta.image.length-1;
this.atlas.frames.push({});
t=-3
}else{if(t>0){if(t%7===1){if(h!=null){this.atlas.frames[n][h.name]=h
}h={name:v[l],frame:{}}
}else{var s=v[l].split(" ");
if(t%7===3){h.frame.x=Number(s[1].replace(",",""));
h.frame.y=Number(s[2])
}else{if(t%7===4){h.frame.w=Number(s[1].replace(",",""));
h.frame.h=Number(s[2])
}else{if(t%7===5){var u={x:0,y:0,w:Number(s[1].replace(",","")),h:Number(s[2])};
if(u.w>h.frame.w||u.h>h.frame.h){h.trimmed=true;
h.realSize=u
}else{h.trimmed=false
}}}}}}}t++
}}if(h!=null){this.atlas.frames[n][h.name]=h
}if(this.atlas.meta.image.length>0){this.images=[];
for(k=0;
k<this.atlas.meta.image.length;
k++){var m=this.baseUrl+this.atlas.meta.image[k];
var p=this.atlas.frames[k];
this.images.push(new g.ImageLoader(m,this.crossorigin));
for(l in p){var o=p[l].frame;
if(o){g.TextureCache[l]=new g.Texture(this.images[k].texture.baseTexture,{x:o.x,y:o.y,width:o.w,height:o.h});
if(p[l].trimmed){g.TextureCache[l].realSize=p[l].realSize;
g.TextureCache[l].trim.x=0;
g.TextureCache[l].trim.y=0
}}}}this.currentImageId=0;
for(k=0;
k<this.images.length;
k++){this.images[k].on("loaded",w)
}this.images[this.currentImageId].load()
}else{this.onLoaded()
}}else{this.onError()
}}};
g.AtlasLoader.prototype.onLoaded=function(){if(this.images.length-1>this.currentImageId){this.currentImageId++;
this.images[this.currentImageId].load()
}else{this.loaded=true;
this.emit("loaded",{content:this})
}};
g.AtlasLoader.prototype.onError=function(){this.emit("error",{content:this})
};
g.SpriteSheetLoader=function(i,h){this.url=i;
this.crossorigin=h;
this.baseUrl=i.replace(/[^\/]*$/,"");
this.texture=null;
this.frames={}
};
g.SpriteSheetLoader.prototype.constructor=g.SpriteSheetLoader;
g.EventTarget.mixin(g.SpriteSheetLoader.prototype);
g.SpriteSheetLoader.prototype.load=function(){var i=this;
var h=new g.JsonLoader(this.url,this.crossorigin);
h.on("loaded",function(j){i.json=j.data.content.json;
i.onLoaded()
});
h.load()
};
g.SpriteSheetLoader.prototype.onLoaded=function(){this.emit("loaded",{content:this})
};
g.ImageLoader=function(i,h){this.texture=g.Texture.fromImage(i,h);
this.frames=[]
};
g.ImageLoader.prototype.constructor=g.ImageLoader;
g.EventTarget.mixin(g.ImageLoader.prototype);
g.ImageLoader.prototype.load=function(){if(!this.texture.baseTexture.hasLoaded){this.texture.baseTexture.on("loaded",this.onLoaded.bind(this))
}else{this.onLoaded()
}};
g.ImageLoader.prototype.onLoaded=function(){this.emit("loaded",{content:this})
};
g.ImageLoader.prototype.loadFramedSpriteSheet=function(o,j,h){this.frames=[];
var n=Math.floor(this.texture.width/o);
var q=Math.floor(this.texture.height/j);
var k=0;
for(var m=0;
m<q;
m++){for(var p=0;
p<n;
p++,k++){var l=new g.Texture(this.texture.baseTexture,{x:p*o,y:m*j,width:o,height:j});
this.frames.push(l);
if(h){g.TextureCache[h+"-"+k]=l
}}}this.load()
};
g.BitmapFontLoader=function(i,h){this.url=i;
this.crossorigin=h;
this.baseUrl=i.replace(/[^\/]*$/,"");
this.texture=null
};
g.BitmapFontLoader.prototype.constructor=g.BitmapFontLoader;
g.EventTarget.mixin(g.BitmapFontLoader.prototype);
g.BitmapFontLoader.prototype.load=function(){this.ajaxRequest=new g.AjaxRequest();
this.ajaxRequest.onreadystatechange=this.onXMLLoaded.bind(this);
this.ajaxRequest.open("GET",this.url,true);
if(this.ajaxRequest.overrideMimeType){this.ajaxRequest.overrideMimeType("application/xml")
}this.ajaxRequest.send(null)
};
g.BitmapFontLoader.prototype.onXMLLoaded=function(){if(this.ajaxRequest.readyState===4){if(this.ajaxRequest.status===200||window.location.protocol.indexOf("http")===-1){var w=this.ajaxRequest.responseXML;
if(!w||/MSIE 9/i.test(navigator.userAgent)||navigator.isCocoonJS){if(typeof(window.DOMParser)==="function"){var q=new DOMParser();
w=q.parseFromString(this.ajaxRequest.responseText,"text/xml")
}else{var h=document.createElement("div");
h.innerHTML=this.ajaxRequest.responseText;
w=h
}}var s=this.baseUrl+w.getElementsByTagName("page")[0].getAttribute("file");
var l=new g.ImageLoader(s,this.crossorigin);
this.texture=l.texture.baseTexture;
var n={};
var k=w.getElementsByTagName("info")[0];
var t=w.getElementsByTagName("common")[0];
n.font=k.getAttribute("face");
n.size=parseInt(k.getAttribute("size"),10);
n.lineHeight=parseInt(t.getAttribute("lineHeight"),10);
n.chars={};
var u=w.getElementsByTagName("char");
for(var m=0;
m<u.length;
m++){var y=parseInt(u[m].getAttribute("id"),10);
var x=new g.Rectangle(parseInt(u[m].getAttribute("x"),10),parseInt(u[m].getAttribute("y"),10),parseInt(u[m].getAttribute("width"),10),parseInt(u[m].getAttribute("height"),10));
n.chars[y]={xOffset:parseInt(u[m].getAttribute("xoffset"),10),yOffset:parseInt(u[m].getAttribute("yoffset"),10),xAdvance:parseInt(u[m].getAttribute("xadvance"),10),kerning:{},texture:g.TextureCache[y]=new g.Texture(this.texture,x)}
}var v=w.getElementsByTagName("kerning");
for(m=0;
m<v.length;
m++){var p=parseInt(v[m].getAttribute("first"),10);
var j=parseInt(v[m].getAttribute("second"),10);
var o=parseInt(v[m].getAttribute("amount"),10);
n.chars[j].kerning[p]=o
}g.BitmapText.fonts[n.font]=n;
l.addEventListener("loaded",this.onLoaded.bind(this));
l.load()
}}};
g.BitmapFontLoader.prototype.onLoaded=function(){this.emit("loaded",{content:this})
};
g.SpineLoader=function(i,h){this.url=i;
this.crossorigin=h;
this.loaded=false
};
g.SpineLoader.prototype.constructor=g.SpineLoader;
g.EventTarget.mixin(g.SpineLoader.prototype);
g.SpineLoader.prototype.load=function(){var i=this;
var h=new g.JsonLoader(this.url,this.crossorigin);
h.on("loaded",function(j){i.json=j.data.content.json;
i.onLoaded()
});
h.load()
};
g.SpineLoader.prototype.onLoaded=function(){this.loaded=true;
this.emit("loaded",{content:this})
};
g.AbstractFilter=function(i,h){this.passes=[this];
this.shaders=[];
this.dirty=true;
this.padding=0;
this.uniforms=h||{};
this.fragmentSrc=i||[]
};
g.AbstractFilter.prototype.constructor=g.AbstractFilter;
g.AbstractFilter.prototype.syncUniforms=function(){for(var k=0,h=this.shaders.length;
k<h;
k++){this.shaders[k].dirty=true
}};
g.AlphaMaskFilter=function(h){g.AbstractFilter.call(this);
this.passes=[this];
h.baseTexture._powerOf2=true;
this.uniforms={mask:{type:"sampler2D",value:h},mapDimensions:{type:"2f",value:{x:1,y:5112}},dimensions:{type:"4fv",value:[0,0,0,0]}};
if(h.baseTexture.hasLoaded){this.uniforms.mask.value.x=h.width;
this.uniforms.mask.value.y=h.height
}else{this.boundLoadedFunction=this.onTextureLoaded.bind(this);
h.baseTexture.on("loaded",this.boundLoadedFunction)
}this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D mask;","uniform sampler2D uSampler;","uniform vec2 offset;","uniform vec4 dimensions;","uniform vec2 mapDimensions;","void main(void) {","   vec2 mapCords = vTextureCoord.xy;","   mapCords += (dimensions.zw + offset)/ dimensions.xy ;","   mapCords.y *= -1.0;","   mapCords.y += 1.0;","   mapCords *= dimensions.xy / mapDimensions;","   vec4 original =  texture2D(uSampler, vTextureCoord);","   float maskAlpha =  texture2D(mask, mapCords).r;","   original *= maskAlpha;","   gl_FragColor =  original;","}"]
};
g.AlphaMaskFilter.prototype=Object.create(g.AbstractFilter.prototype);
g.AlphaMaskFilter.prototype.constructor=g.AlphaMaskFilter;
g.AlphaMaskFilter.prototype.onTextureLoaded=function(){this.uniforms.mapDimensions.value.x=this.uniforms.mask.value.width;
this.uniforms.mapDimensions.value.y=this.uniforms.mask.value.height;
this.uniforms.mask.value.baseTexture.off("loaded",this.boundLoadedFunction)
};
Object.defineProperty(g.AlphaMaskFilter.prototype,"map",{get:function(){return this.uniforms.mask.value
},set:function(h){this.uniforms.mask.value=h
}});
g.ColorMatrixFilter=function(){g.AbstractFilter.call(this);
this.passes=[this];
this.uniforms={matrix:{type:"mat4",value:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}};
this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float invert;","uniform mat4 matrix;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord) * matrix;","}"]
};
g.ColorMatrixFilter.prototype=Object.create(g.AbstractFilter.prototype);
g.ColorMatrixFilter.prototype.constructor=g.ColorMatrixFilter;
Object.defineProperty(g.ColorMatrixFilter.prototype,"matrix",{get:function(){return this.uniforms.matrix.value
},set:function(h){this.uniforms.matrix.value=h
}});
g.GrayFilter=function(){g.AbstractFilter.call(this);
this.passes=[this];
this.uniforms={gray:{type:"1f",value:1}};
this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","uniform float gray;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord);","   gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126*gl_FragColor.r + 0.7152*gl_FragColor.g + 0.0722*gl_FragColor.b), gray);","}"]
};
g.GrayFilter.prototype=Object.create(g.AbstractFilter.prototype);
g.GrayFilter.prototype.constructor=g.GrayFilter;
Object.defineProperty(g.GrayFilter.prototype,"gray",{get:function(){return this.uniforms.gray.value
},set:function(h){this.uniforms.gray.value=h
}});
g.DisplacementFilter=function(h){g.AbstractFilter.call(this);
this.passes=[this];
h.baseTexture._powerOf2=true;
this.uniforms={displacementMap:{type:"sampler2D",value:h},scale:{type:"2f",value:{x:30,y:30}},offset:{type:"2f",value:{x:0,y:0}},mapDimensions:{type:"2f",value:{x:1,y:5112}},dimensions:{type:"4fv",value:[0,0,0,0]}};
if(h.baseTexture.hasLoaded){this.uniforms.mapDimensions.value.x=h.width;
this.uniforms.mapDimensions.value.y=h.height
}else{this.boundLoadedFunction=this.onTextureLoaded.bind(this);
h.baseTexture.on("loaded",this.boundLoadedFunction)
}this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D displacementMap;","uniform sampler2D uSampler;","uniform vec2 scale;","uniform vec2 offset;","uniform vec4 dimensions;","uniform vec2 mapDimensions;","void main(void) {","   vec2 mapCords = vTextureCoord.xy;","   mapCords += (dimensions.zw + offset)/ dimensions.xy ;","   mapCords.y *= -1.0;","   mapCords.y += 1.0;","   vec2 matSample = texture2D(displacementMap, mapCords).xy;","   matSample -= 0.5;","   matSample *= scale;","   matSample /= mapDimensions;","   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x + matSample.x, vTextureCoord.y + matSample.y));","   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb, 1.0);","   vec2 cord = vTextureCoord;","}"]
};
g.DisplacementFilter.prototype=Object.create(g.AbstractFilter.prototype);
g.DisplacementFilter.prototype.constructor=g.DisplacementFilter;
g.DisplacementFilter.prototype.onTextureLoaded=function(){this.uniforms.mapDimensions.value.x=this.uniforms.displacementMap.value.width;
this.uniforms.mapDimensions.value.y=this.uniforms.displacementMap.value.height;
this.uniforms.displacementMap.value.baseTexture.off("loaded",this.boundLoadedFunction)
};
Object.defineProperty(g.DisplacementFilter.prototype,"map",{get:function(){return this.uniforms.displacementMap.value
},set:function(h){this.uniforms.displacementMap.value=h
}});
Object.defineProperty(g.DisplacementFilter.prototype,"scale",{get:function(){return this.uniforms.scale.value
},set:function(h){this.uniforms.scale.value=h
}});
Object.defineProperty(g.DisplacementFilter.prototype,"offset",{get:function(){return this.uniforms.offset.value
},set:function(h){this.uniforms.offset.value=h
}});
g.PixelateFilter=function(){g.AbstractFilter.call(this);
this.passes=[this];
this.uniforms={invert:{type:"1f",value:0},dimensions:{type:"4fv",value:new g.Float32Array([10000,100,10,10])},pixelSize:{type:"2f",value:{x:10,y:10}}};
this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform vec2 testDim;","uniform vec4 dimensions;","uniform vec2 pixelSize;","uniform sampler2D uSampler;","void main(void) {","   vec2 coord = vTextureCoord;","   vec2 size = dimensions.xy/pixelSize;","   vec2 color = floor( ( vTextureCoord * size ) ) / size + pixelSize/dimensions.xy * 0.5;","   gl_FragColor = texture2D(uSampler, color);","}"]
};
g.PixelateFilter.prototype=Object.create(g.AbstractFilter.prototype);
g.PixelateFilter.prototype.constructor=g.PixelateFilter;
Object.defineProperty(g.PixelateFilter.prototype,"size",{get:function(){return this.uniforms.pixelSize.value
},set:function(h){this.dirty=true;
this.uniforms.pixelSize.value=h
}});
g.BlurXFilter=function(){g.AbstractFilter.call(this);
this.passes=[this];
this.uniforms={blur:{type:"1f",value:1/512}};
this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float blur;","uniform sampler2D uSampler;","void main(void) {","   vec4 sum = vec4(0.0);","   sum += texture2D(uSampler, vec2(vTextureCoord.x - 4.0*blur, vTextureCoord.y)) * 0.05;","   sum += texture2D(uSampler, vec2(vTextureCoord.x - 3.0*blur, vTextureCoord.y)) * 0.09;","   sum += texture2D(uSampler, vec2(vTextureCoord.x - 2.0*blur, vTextureCoord.y)) * 0.12;","   sum += texture2D(uSampler, vec2(vTextureCoord.x - blur, vTextureCoord.y)) * 0.15;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;","   sum += texture2D(uSampler, vec2(vTextureCoord.x + blur, vTextureCoord.y)) * 0.15;","   sum += texture2D(uSampler, vec2(vTextureCoord.x + 2.0*blur, vTextureCoord.y)) * 0.12;","   sum += texture2D(uSampler, vec2(vTextureCoord.x + 3.0*blur, vTextureCoord.y)) * 0.09;","   sum += texture2D(uSampler, vec2(vTextureCoord.x + 4.0*blur, vTextureCoord.y)) * 0.05;","   gl_FragColor = sum;","}"]
};
g.BlurXFilter.prototype=Object.create(g.AbstractFilter.prototype);
g.BlurXFilter.prototype.constructor=g.BlurXFilter;
Object.defineProperty(g.BlurXFilter.prototype,"blur",{get:function(){return this.uniforms.blur.value/(1/7000)
},set:function(h){this.dirty=true;
this.uniforms.blur.value=(1/7000)*h
}});
g.BlurYFilter=function(){g.AbstractFilter.call(this);
this.passes=[this];
this.uniforms={blur:{type:"1f",value:1/512}};
this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float blur;","uniform sampler2D uSampler;","void main(void) {","   vec4 sum = vec4(0.0);","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 4.0*blur)) * 0.05;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 3.0*blur)) * 0.09;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 2.0*blur)) * 0.12;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - blur)) * 0.15;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + blur)) * 0.15;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 2.0*blur)) * 0.12;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 3.0*blur)) * 0.09;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 4.0*blur)) * 0.05;","   gl_FragColor = sum;","}"]
};
g.BlurYFilter.prototype=Object.create(g.AbstractFilter.prototype);
g.BlurYFilter.prototype.constructor=g.BlurYFilter;
Object.defineProperty(g.BlurYFilter.prototype,"blur",{get:function(){return this.uniforms.blur.value/(1/7000)
},set:function(h){this.uniforms.blur.value=(1/7000)*h
}});
g.BlurFilter=function(){this.blurXFilter=new g.BlurXFilter();
this.blurYFilter=new g.BlurYFilter();
this.passes=[this.blurXFilter,this.blurYFilter]
};
g.BlurFilter.prototype=Object.create(g.AbstractFilter.prototype);
g.BlurFilter.prototype.constructor=g.BlurFilter;
Object.defineProperty(g.BlurFilter.prototype,"blur",{get:function(){return this.blurXFilter.blur
},set:function(h){this.blurXFilter.blur=this.blurYFilter.blur=h
}});
Object.defineProperty(g.BlurFilter.prototype,"blurX",{get:function(){return this.blurXFilter.blur
},set:function(h){this.blurXFilter.blur=h
}});
Object.defineProperty(g.BlurFilter.prototype,"blurY",{get:function(){return this.blurYFilter.blur
},set:function(h){this.blurYFilter.blur=h
}});
g.InvertFilter=function(){g.AbstractFilter.call(this);
this.passes=[this];
this.uniforms={invert:{type:"1f",value:1}};
this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float invert;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord);","   gl_FragColor.rgb = mix( (vec3(1)-gl_FragColor.rgb) * gl_FragColor.a, gl_FragColor.rgb, 1.0 - invert);","}"]
};
g.InvertFilter.prototype=Object.create(g.AbstractFilter.prototype);
g.InvertFilter.prototype.constructor=g.InvertFilter;
Object.defineProperty(g.InvertFilter.prototype,"invert",{get:function(){return this.uniforms.invert.value
},set:function(h){this.uniforms.invert.value=h
}});
g.SepiaFilter=function(){g.AbstractFilter.call(this);
this.passes=[this];
this.uniforms={sepia:{type:"1f",value:1}};
this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float sepia;","uniform sampler2D uSampler;","const mat3 sepiaMatrix = mat3(0.3588, 0.7044, 0.1368, 0.2990, 0.5870, 0.1140, 0.2392, 0.4696, 0.0912);","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord);","   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * sepiaMatrix, sepia);","}"]
};
g.SepiaFilter.prototype=Object.create(g.AbstractFilter.prototype);
g.SepiaFilter.prototype.constructor=g.SepiaFilter;
Object.defineProperty(g.SepiaFilter.prototype,"sepia",{get:function(){return this.uniforms.sepia.value
},set:function(h){this.uniforms.sepia.value=h
}});
g.TwistFilter=function(){g.AbstractFilter.call(this);
this.passes=[this];
this.uniforms={radius:{type:"1f",value:0.5},angle:{type:"1f",value:5},offset:{type:"2f",value:{x:0.5,y:0.5}}};
this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform vec4 dimensions;","uniform sampler2D uSampler;","uniform float radius;","uniform float angle;","uniform vec2 offset;","void main(void) {","   vec2 coord = vTextureCoord - offset;","   float distance = length(coord);","   if (distance < radius) {","       float ratio = (radius - distance) / radius;","       float angleMod = ratio * ratio * angle;","       float s = sin(angleMod);","       float c = cos(angleMod);","       coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);","   }","   gl_FragColor = texture2D(uSampler, coord+offset);","}"]
};
g.TwistFilter.prototype=Object.create(g.AbstractFilter.prototype);
g.TwistFilter.prototype.constructor=g.TwistFilter;
Object.defineProperty(g.TwistFilter.prototype,"offset",{get:function(){return this.uniforms.offset.value
},set:function(h){this.dirty=true;
this.uniforms.offset.value=h
}});
Object.defineProperty(g.TwistFilter.prototype,"radius",{get:function(){return this.uniforms.radius.value
},set:function(h){this.dirty=true;
this.uniforms.radius.value=h
}});
Object.defineProperty(g.TwistFilter.prototype,"angle",{get:function(){return this.uniforms.angle.value
},set:function(h){this.dirty=true;
this.uniforms.angle.value=h
}});
g.ColorStepFilter=function(){g.AbstractFilter.call(this);
this.passes=[this];
this.uniforms={step:{type:"1f",value:5}};
this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","uniform float step;","void main(void) {","   vec4 color = texture2D(uSampler, vTextureCoord);","   color = floor(color * step) / step;","   gl_FragColor = color;","}"]
};
g.ColorStepFilter.prototype=Object.create(g.AbstractFilter.prototype);
g.ColorStepFilter.prototype.constructor=g.ColorStepFilter;
Object.defineProperty(g.ColorStepFilter.prototype,"step",{get:function(){return this.uniforms.step.value
},set:function(h){this.uniforms.step.value=h
}});
g.DotScreenFilter=function(){g.AbstractFilter.call(this);
this.passes=[this];
this.uniforms={scale:{type:"1f",value:1},angle:{type:"1f",value:5},dimensions:{type:"4fv",value:[0,0,0,0]}};
this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform vec4 dimensions;","uniform sampler2D uSampler;","uniform float angle;","uniform float scale;","float pattern() {","   float s = sin(angle), c = cos(angle);","   vec2 tex = vTextureCoord * dimensions.xy;","   vec2 point = vec2(","       c * tex.x - s * tex.y,","       s * tex.x + c * tex.y","   ) * scale;","   return (sin(point.x) * sin(point.y)) * 4.0;","}","void main() {","   vec4 color = texture2D(uSampler, vTextureCoord);","   float average = (color.r + color.g + color.b) / 3.0;","   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);","}"]
};
g.DotScreenFilter.prototype=Object.create(g.AbstractFilter.prototype);
g.DotScreenFilter.prototype.constructor=g.DotScreenFilter;
Object.defineProperty(g.DotScreenFilter.prototype,"scale",{get:function(){return this.uniforms.scale.value
},set:function(h){this.dirty=true;
this.uniforms.scale.value=h
}});
Object.defineProperty(g.DotScreenFilter.prototype,"angle",{get:function(){return this.uniforms.angle.value
},set:function(h){this.dirty=true;
this.uniforms.angle.value=h
}});
g.CrossHatchFilter=function(){g.AbstractFilter.call(this);
this.passes=[this];
this.uniforms={blur:{type:"1f",value:1/512}};
this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float blur;","uniform sampler2D uSampler;","void main(void) {","    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);","    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);","    if (lum < 1.00) {","        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0) {","            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","        }","    }","    if (lum < 0.75) {","        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0) {","            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","        }","    }","    if (lum < 0.50) {","        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0) {","            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","        }","    }","    if (lum < 0.3) {","        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0) {","            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","        }","    }","}"]
};
g.CrossHatchFilter.prototype=Object.create(g.AbstractFilter.prototype);
g.CrossHatchFilter.prototype.constructor=g.CrossHatchFilter;
Object.defineProperty(g.CrossHatchFilter.prototype,"blur",{get:function(){return this.uniforms.blur.value/(1/7000)
},set:function(h){this.uniforms.blur.value=(1/7000)*h
}});
g.RGBSplitFilter=function(){g.AbstractFilter.call(this);
this.passes=[this];
this.uniforms={red:{type:"2f",value:{x:20,y:20}},green:{type:"2f",value:{x:-20,y:20}},blue:{type:"2f",value:{x:20,y:-20}},dimensions:{type:"4fv",value:[0,0,0,0]}};
this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform vec2 red;","uniform vec2 green;","uniform vec2 blue;","uniform vec4 dimensions;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/dimensions.xy).r;","   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/dimensions.xy).g;","   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/dimensions.xy).b;","   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;","}"]
};
g.RGBSplitFilter.prototype=Object.create(g.AbstractFilter.prototype);
g.RGBSplitFilter.prototype.constructor=g.RGBSplitFilter;
Object.defineProperty(g.RGBSplitFilter.prototype,"red",{get:function(){return this.uniforms.red.value
},set:function(h){this.uniforms.red.value=h
}});
Object.defineProperty(g.RGBSplitFilter.prototype,"green",{get:function(){return this.uniforms.green.value
},set:function(h){this.uniforms.green.value=h
}});
Object.defineProperty(g.RGBSplitFilter.prototype,"blue",{get:function(){return this.uniforms.blue.value
},set:function(h){this.uniforms.blue.value=h
}});
if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=g
}exports.PIXI=g
}else{if(typeof define!=="undefined"&&define.amd){define(g)
}else{b.PIXI=g
}}}).call(this);
var _l=function(b,c){var a=App.lang.strings[App.lang.active][b];
if(c){a=a.replace(/\\?\{([^{}]+)\}/g,function(e,d){if(e.charAt(0)=="\\"){return e.slice(1)
}return(c[d]!=null)?c[d]:""
})
}return a
};
var App={events:{},socket:{receive:{},send:{}},sound:function(d){try{var b=new Audio("/d/sounds/"+d+".wav");
b.volume=0.3;
b.play()
}catch(c){}},lang:{active:"en",strings:{en:{}}}};
_.extend(App.events,Backbone.Events);
_.extend(App.socket.receive,Backbone.Events);
_.extend(App.socket.send,Backbone.Events);
(function(){App.lang.strings.en={Join:"Join","Create room":"Create room","Left room":"Left room"}
}).call(this);
(function(){var c,b,a;
a=typeof require!=="undefined"?require("lodash"):window._;
c=typeof require!=="undefined"?require("backbone"):window.Backbone;
(typeof module!=="undefined"?module.exports:window).BcoCore=b=(function(){a.extend(d.prototype,c.Events);
d.prototype.size=[416,416];
function d(){this._elements={}
}d.prototype._collides=function(f,l,k,e,i,j,g,h){return !(k<=i||f>=g||e<=j||l>=h)
};
d.prototype._collides_ob=function(f,e){return this._collides(f.pos[0],f.pos[1],f.pos[0]+f.size[0],f.pos[1]+f.size[1],e.pos[0],e.pos[1],e.pos[0]+e.size[0],e.pos[1]+e.size[1])
};
d.prototype.__requestAnimFrame=function(f){var e;
e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;
if(e){return e(f)
}return window.setTimeout(f,1000/30)
};
d.prototype.restart=function(){return this._elements={}
};
d.prototype.add=function(e){return this._elements[e.id]=e
};
d.prototype.add_user=function(e,f){if(f==null){f={}
}f.object="user";
f.params={user_id:e};
return this.add(f)
};
d.prototype.get=function(l){var g,k,i,j,h,f,e;
if(typeof l==="number"){return this._elements[l]
}g=[];
e=this._elements;
for(k in e){h=e[k];
j=true;
for(i in l){f=l[i];
if(j&&h[i]!==f){j=false
}}if(j){g.push(h)
}}return g
};
d.prototype.get_user=function(e){var h,g,f;
f=this._elements;
for(h in f){g=f[h];
if(g.params.user_id===e){return g
}}return null
};
d.prototype.update=function(h){var e,g,f;
f=[];
for(e in h){g=h[e];
if(e!=="id"){f.push(this._elements[h.id][e]=g)
}else{f.push(void 0)
}}return f
};
d.prototype.destroy=function(e){return delete this._elements[e.id]
};
d.prototype.start=function(){this._stop=false;
this._lastTime=Date.now();
return this._process()
};
d.prototype.stop=function(){return this._stop=true
};
d.prototype._process=function(){var f,e;
e=Date.now();
f=(e-this._lastTime)/1000;
if(f>0){this._updateView(f)
}this._lastTime=e;
return this.__requestAnimFrame((function(g){return function(){if(!g._stop){return g._process()
}}
})(this))
};
d.prototype._updateView=function(f){var i,e,l,m,g,k,j,h;
j=this._elements;
for(e in j){g=j[e];
if(g.speed>0){m=g.angle*Math.PI/180;
i=g.speed*f;
g.pos[0]+=i*Math.cos(m);
g.pos[1]+=i*Math.sin(m);
g.pos[0]=Math.round(g.pos[0]*100)/100;
g.pos[1]=Math.round(g.pos[1]*100)/100;
if(g.destroy===0){h=this._elements;
for(l in h){k=h[l];
if(e!==l&&k.destroy===0&&this._collides_ob(g,k)){if(g.angle===0){g.pos[0]=k.pos[0]-g.size[0]
}else{if(g.angle===90){g.pos[1]=k.pos[1]-g.size[1]
}else{if(g.angle===180){g.pos[0]=k.pos[0]+k.size[0]
}else{if(g.angle===270){g.pos[1]=k.pos[1]+k.size[1]
}}}}}}if(g.angle===0&&g.pos[0]+g.size[0]>this.size[0]){g.pos[0]=this.size[0]-g.size[0]
}else{if(g.angle===90&&g.pos[1]+g.size[1]>this.size[1]){g.pos[1]=this.size[1]-g.size[1]
}else{if(g.angle===180&&g.pos[0]<0){g.pos[0]=0
}else{if(g.angle===270&&g.pos[1]<0){g.pos[1]=0
}}}}}}}return this
};
return d
})()
}).call(this);
(function(){var c,a={}.hasOwnProperty,b=function(g,e){for(var d in e){if(a.call(e,d)){g[d]=e[d]
}}function f(){this.constructor=g
}f.prototype=e.prototype;
g.prototype=new f();
g.__super__=e.prototype;
return g
};
window.Bco=c=(function(d){b(e,d);
_.extend(e.prototype,Backbone.View.prototype);
e.prototype.className="game-canvas";
e.prototype.options={path:""};
function e(){e.__super__.constructor.apply(this,arguments);
Backbone.View.prototype.constructor.apply(this,arguments);
this
}e.prototype.restart=function(){var h,g,f;
f=this._elements;
for(h in f){g=f[h];
if(g.sprite){this.stage.removeChild(g.sprite)
}}return e.__super__.restart.apply(this,arguments)
};
e.prototype.add=function(g){var f;
e.__super__.add.apply(this,arguments);
f=new PIXI.Sprite(PIXI.Texture.fromImage(this.options.path+"d/img/"+g.object+".png"));
f.anchor.x=0.5;
f.anchor.y=0.5;
this._elements[g.id]["sprite"]=f;
return this.stage.addChild(f)
};
e.prototype.elements=function(i){var g,k,j,h,f;
h=this._elements;
for(k in h){g=h[k];
if(g.sprite){this.stage.removeChild(g.sprite)
}}this._elements={};
f=[];
for(k in i){j=i[k];
f.push(this.add(j))
}return f
};
e.prototype.destroy=function(f){if(this._elements[f.id].sprite){this.stage.removeChild(this._elements[f.id].sprite)
}return e.__super__.destroy.apply(this,arguments)
};
e.prototype._updateView=function(f){e.__super__._updateView.apply(this,arguments);
return this.draw()
};
e.prototype.draw=function(){var h,g,f;
f=this._elements;
for(h in f){g=f[h];
if(g.sprite){g.sprite.position.x=g.pos[0]+g.size[0]/2;
g.sprite.position.y=g.pos[1]+g.size[1]/2;
g.sprite.rotation=g.angle*Math.PI/180
}}return this.renderer.render(this.stage)
};
e.prototype.render=function(){this.stage=new PIXI.Stage;
this.renderer=PIXI.autoDetectRenderer(416,416);
this.$el.append(this.renderer.view);
return this
};
return e
})(window.BcoCore)
}).call(this);
(function(){var c,h,f,e,b,g,a={}.hasOwnProperty,d=function(l,j){for(var i in j){if(a.call(j,i)){l[i]=j[i]
}}function k(){this.constructor=l
}k.prototype=j.prototype;
l.prototype=new k();
l.__super__=j.prototype;
return l
};
App.Sprite=b=(function(){i.prototype.size=[0,0];
i.prototype.pos=[0,0];
i.prototype._frames=[0];
i.prototype._frames_speed=0;
i.prototype._frames_index=0;
function i(){if(this._name){this.url="d/img/"+this._name+".png"
}this.img=new Image();
this.img.onload=(function(j){return function(){return j._loaded=true
}
})(this);
this.img.src=this.url
}i.prototype.update=function(j){if(this._frames_speed>0){this._frames_index+=this._frames_speed*j;
if(this._frames_index>=this._frames.length){return this._frames_index=this._frames_index%this._frames.length
}}};
i.prototype.render=function(k){var j;
if(!this._loaded){return
}j=this._frames[Math.floor(this._frames_index)];
return k.drawImage(this.img,this.pos[0]+this.size[0]*j,this.pos[1],this.size[0],this.size[1],0,0,this.size[0],this.size[1])
};
return i
})();
App.SpriteUser=g=(function(i){d(j,i);
function j(){return j.__super__.constructor.apply(this,arguments)
}j.prototype.size=[32,32];
j.prototype._name="user";
return j
})(b);
App.SpriteBullet=f=(function(i){d(j,i);
function j(){return j.__super__.constructor.apply(this,arguments)
}j.prototype.size=[8,8];
j.prototype._name="bullet";
return j
})(b);
App.SpriteBrick=h=(function(i){d(j,i);
function j(){return j.__super__.constructor.apply(this,arguments)
}j.prototype.size=[16,16];
j.prototype._name="brick";
return j
})(b);
App.SpriteIron=e=(function(i){d(j,i);
function j(){return j.__super__.constructor.apply(this,arguments)
}j.prototype.size=[16,16];
j.prototype._name="iron";
return j
})(b);
App.SpriteBase=c=(function(j){d(i,j);
function i(){return i.__super__.constructor.apply(this,arguments)
}i.prototype.size=[32,32];
i.prototype._name="base";
return i
})(b)
}).call(this);
(function(){var h,f,j,a,g,e,c,b,i={}.hasOwnProperty,d=function(n,l){for(var k in l){if(i.call(l,k)){n[k]=l[k]
}}function m(){this.constructor=n
}m.prototype=l.prototype;
n.prototype=new m();
n.__super__=l.prototype;
return n
};
App.Rooms=a=(function(l){d(k,l);
function k(){g=k.__super__.constructor.apply(this,arguments);
return g
}k.prototype.tagName="ol";
k.prototype.rooms={};
k.prototype.events={"click >li":function(m){return this.trigger("open",parseInt($(m.target).closest("li").attr("data-pk")))
}};
k.prototype.room_add=function(n){var m,o=this;
m=new f();
m.rooms=this;
this.listenTo(m,"monitor:add",function(){return o.trigger("monitor:add")
});
this.listenTo(m,"monitor:remove",function(){return o.trigger("monitor:remove")
});
m.render(n);
m.$el.prependTo(this.$el);
return this.rooms[n.id]=m
};
k.prototype.room_remove=function(m){this.rooms[m.id].remove();
return delete this.rooms[m.id]
};
k.prototype.user_join=function(m){return this.rooms[m.room_id].user_add(m.user)
};
k.prototype.user_left=function(m){return this.rooms[m.room_id].user_left(m.user_id)
};
k.prototype.list=function(m){return this.render(m)
};
k.prototype.render=function(m){var n=this;
_.each(this.rooms,function(p,o){return n.room_remove({id:o})
});
return _.each(m,_.bind(this.room_add,this))
};
return k
})(Backbone.View);
f=(function(l){d(k,l);
function k(){e=k.__super__.constructor.apply(this,arguments);
return e
}k.prototype.tagName="li";
k.prototype.template=_.template("<strong><%=name%></strong>\n<span><%=self.rooms.options.stages[stage]%></span>");
k.prototype.user_add=function(m){this._users+=1;
this._update_users();
if(m.id===this.rooms.options.monitor){this.trigger("monitor:add");
return this._monitor=true
}};
k.prototype.user_left=function(m){this._users-=1;
this._update_users();
if(m===this.rooms.options.monitor){this._monitor=false;
return this.trigger("monitor:remove")
}};
k.prototype._update_users=function(){return this.$el.attr("data-users",this._users)
};
k.prototype.render=function(m){k.__super__.render.apply(this,arguments);
this._users=0;
this._max=m.max;
this.$el.attr("data-pk",m.id);
this.$el.attr("data-max",m.max);
this._update_users();
return _.each(m.users,_.bind(this.user_add,this))
};
k.prototype.remove=function(){if(this._monitor){this.trigger("monitor:remove")
}return k.__super__.remove.apply(this,arguments)
};
return k
})(Backbone.View);
App.RoomPreview=j=(function(k){d(l,k);
function l(){c=l.__super__.constructor.apply(this,arguments);
return c
}l.prototype.className="room-preview";
l.prototype.template=_.template('<div class="preview">\n              <span><img src="d/maps/preview<%=stage%>.png" /></span>\n              <strong><%=name%></strong>\n              <i><%=users.length%>/<%=max%></i>\n            </div>\n<input type="text" value="http://countertank.com/#m<%=id%>" />\n            <div class="teams" data-teams="<%=teams.length%>">\n              <% _.each(teams, function(users, i){ %>\n                <div data-id="<%=i%>">\n                  <ol>\n                    <% _.each(users, function(u){ %>\n                      <li data-id="<%=u%>">\n                          <strong><%=users_ids[u].name%></strong>\n                      </li>\n                    <% }) %>\n                  </ol>\n                  <button><%=_l(\'Join\')%></button>\n                </div>\n              <% }) %>\n            </div>');
l.prototype.events={"click input":function(m){return this.$("input").select()
},"click .teams button":function(m){return this.trigger("join",{room:this._room_id,team:parseInt($(m.target).parent("div").attr("data-id"))})
}};
l.prototype.show=function(){return this.render.apply(this,arguments)
};
l.prototype.__renderData=function(m){var n;
this._room_id=m.id;
n={};
_.each(m.users,function(o){return n[o.id]=o
});
return{users_ids:n}
};
return l
})(Backbone.View);
App.CreateRoom=h=(function(l){d(k,l);
function k(){b=k.__super__.constructor.apply(this,arguments);
return b
}k.prototype.className="room-new-add";
k.prototype.template=_.template("<button><%=_l('Create room')%></button>");
k.prototype.events={"click button":function(){return this.trigger("create")
}};
return k
})(Backbone.View)
}).call(this);
(function(){var e,a,b={}.hasOwnProperty,d=function(i,g){for(var f in g){if(b.call(g,f)){i[f]=g[f]
}}function h(){this.constructor=i
}h.prototype=g.prototype;
i.prototype=new h();
i.__super__=g.prototype;
return i
},c=[].indexOf||function(h){for(var g=0,f=this.length;
g<f;
g++){if(g in this&&this[g]===h){return g
}}return -1
};
App.Order=e=(function(){function f(){this.buffer=[];
this.end()
}f.prototype._last_update=function(){return this._last=(new Date()).getTime()
};
f.prototype.next=function(h,g){if(g==null){g=0
}this.buffer.push({fn:h,delay:g});
if(!this.buffer_execute){return this.end(true)
}};
f.prototype.end=function(g){var h,i;
if(g==null){g=false
}if(!g){this._last_update()
}this.buffer_execute=true;
if(this.buffer.length>0){i=this.buffer.shift();
h=this._last+i.delay-(new Date()).getTime();
if(h>0){return setTimeout(i.fn,h)
}else{return i.fn()
}}else{return this.buffer_execute=false
}};
return f
})();
App.Router=a=(function(g){d(f,g);
function f(){return f.__super__.constructor.apply(this,arguments)
}f.prototype.routes={"":"rooms","m:id":"map"};
f.prototype.initialize=function(k){var i,h,j;
this.$el=k.el;
this.room=new App.Rooms({stages:{1:"stage 1"}});
this.listenTo(this.room,"open",(function(l){return function(m){return l.map(m)
}
})(this));
this.room_new=new App.CreateRoom();
this.listenTo(this.room_new,"create",(function(l){return function(){return App.socket.send.trigger("room:create")
}
})(this));
this.roompreview=new App.RoomPreview();
this.listenTo(this.roompreview,"join",function(l){return App.socket.send.trigger("room:join",l)
});
this.game=new window.Bco();
this.game.render();
this.listenTo(App.socket.receive,"login:success",(function(l){return function(m){l.user=m;
return l.room.options.monitor=m.id
}
})(this));
this.listenTo(App.socket.receive,"room:list",(function(l){return function(){l.game.stop();
return l.$el.removeClass("user-in-room")
}
})(this));
this.listenTo(App.socket.receive,"game:start",(function(l){return function(){return l.$el.addClass("user-in-room")
}
})(this));
this.listenTo(App.socket.receive,"roompreview:show",(function(l){return function(m){return l.navigate("m"+m.id)
}
})(this));
j=new e();
this.listenTo(App.socket.receive,"all",(function(l){return function(){var n,m,o,q,p;
n=Array.prototype.slice.call(arguments);
o=n.shift();
q=o.split(":");
if(q.length===2){if((p=q[0])==="room"||p==="roompreview"||p==="game"){m=0;
return j.next(function(){l[q[0]][q[1]].apply(l[q[0]],n);
return j.end()
},m)
}}}
})(this));
h={up:{active:false,code:[38,74]},down:{active:false,code:[40,77]},left:{active:false,code:[37,78]},right:{active:false,code:[39,188]},fire:{active:false,code:[32,90]}};
i=(function(l){return function(o,p){var m,q,n;
n=[];
for(m in h){q=h[m];
if(c.call(q.code,o)>=0&&q.active!==p){q.active=p;
n.push(App.socket.send.trigger("control",{move:m,active:p}))
}else{n.push(void 0)
}}return n
}
})(this);
$("body").on("keydown",function(l){l.preventDefault();
return i(l.keyCode,true)
});
$("body").on("keyup",function(l){return i(l.keyCode,false)
});
this.render();
return this
};
f.prototype.rooms=function(){};
f.prototype.map=function(i){var h;
h=(function(j){return function(){return App.socket.send.trigger("room:open",i)
}
})(this);
if(this.user){return h()
}else{return this.listenToOnce(App.socket.receive,"login:success",h)
}};
f.prototype.render=function(){this.$el.html('<div id="user-panel">\n  <!--<ul>\n    <li>Rules</li>\n    <li>My profile</li>\n    <li>Best users</li>\n  </ul>-->\n  <div class="room-left"><a href="#">'+_l("Left room")+'</a></div>\n<!--<div class="info">\n  <span class="username">fake name</span>\n  <span class="logout">logout</span>\n</div>-->\n</div>\n\n<section class=\'room\'>\n<div class="room-list"></div>\n</section>\n\n<section class=\'game\'>\n\n<!--<div class="chat">\n		<ol>\n			<li>\n					<i>12:23</i>\n					<strong>Super user</strong>\n					 of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiv\n				</ul>\n			</li>\n			<li>\n					<i>12:23</i>\n					<strong>Super user</strong>\n        00s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiv\n				</ul>\n			</li>\n		</ol>\n		<textarea cols="35" rows="3" placeholder="(Nastrodoj)Press Enter to add message"></textarea>\n</div>-->\n\n\n</section>');
this.$el.find(".room-left a").on("click",function(){return App.socket.send.trigger("room:left")
});
this.room.$el.appendTo(this.$el.find(".room-list"));
this.room_new.render().$el.appendTo(this.$el.find(".room-list"));
this.roompreview.$el.appendTo(this.$el.find(".room"));
return this.game.$el.appendTo(this.$el.find(".game"))
};
f.prototype.remove=function(){this.$el.remove();
$("body").off("keydown");
$("body").off("keyup");
return this.stopListening()
};
return f
})(Backbone.Router)
}).call(this);
var r=new App.Router({el:$("#wrap")}),primus;
App.socket.send.on("all",function(){primus.write(Array.prototype.slice.call(arguments))
});
var connect=function(a){primus=Primus.connect(a,{ping:1000});
primus.on("data",function(c){App.socket.receive.trigger.apply(App.socket.receive,c)
});
primus.on("timeout",function(){});
primus.on("end",function(){});
primus.on("close",function(){});
primus.on("disconnection",function(){});
primus.on("open",function(){App.socket.send.trigger("login:try");
if(!Backbone.History.started){Backbone.history.start()
}});
$("body").append('<div id="debug"><div class="latency"></div></div>');
var b=$("#debug .latency");
primus.on("incoming::pong",function(){b.text(primus.latency)
});
return primus
};
connect("").on("timeout",function(){connect(":9052")
});