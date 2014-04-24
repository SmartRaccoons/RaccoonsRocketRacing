(function(T){var o;
var j=[],u=[];
var M=0;
var k={};
var c=+new Date+"";
var d=75;
var n=40;
var z=/\b__p \+= '';/g,X=/\b(__p \+=) '' \+/g,h=/(__e\(.*?\)|\b__t\)) \+\n'';/g;
var I=/&(?:amp|lt|gt|quot|#39);/g;
var C=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
var G=/\w*$/;
var p=/<%=([\s\S]+?)%>/g;
var l=(l=/\bthis\b/)&&l.test(ae)&&l;
var J=(" \t\x0B\f\xA0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000");
var ad=RegExp("^["+J+"]*0+(?=.$)");
var V=/($^)/;
var D=/[&<>"']/g;
var aa=/['\n\r\t\u2028\u2029\\]/g;
var A=["Array","Boolean","Date","Error","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setImmediate","setTimeout"];
var F=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"];
var ag=0;
var Z="[object Arguments]",w="[object Array]",E="[object Boolean]",O="[object Date]",N="[object Error]",ai="[object Function]",K="[object Number]",e="[object Object]",P="[object RegExp]",L="[object String]";
var x={};
x[ai]=false;
x[Z]=x[w]=x[E]=x[O]=x[K]=x[e]=x[P]=x[L]=true;
var H={"boolean":false,"function":true,object:true,number:false,string:false,"undefined":false};
var R={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"};
var ab=H[typeof exports]&&exports;
var B=H[typeof module]&&module&&module.exports==ab&&module;
var y=H[typeof global]&&global;
if(y&&(y.global===y||y.window===y)){T=y
}function U(an,am,ak){var aj=(ak||0)-1,al=an.length;
while(++aj<al){if(an[aj]===am){return aj
}}return -1
}function S(aj,am){var al=typeof am;
aj=aj.cache;
if(al=="boolean"||am==null){return aj[am]
}if(al!="number"&&al!="string"){al="object"
}var ak=al=="number"?am:c+am;
aj=aj[al]||(aj[al]={});
return al=="object"?(aj[ak]&&U(aj[ak],am)>-1?0:-1):(aj[ak]?0:-1)
}function Q(an){var ak=this.cache,am=typeof an;
if(am=="boolean"||an==null){ak[an]=true
}else{if(am!="number"&&am!="string"){am="object"
}var al=am=="number"?an:c+an,aj=ak[am]||(ak[am]={});
if(am=="object"){if((aj[al]||(aj[al]=[])).push(an)==this.array.length){ak[am]=false
}}else{aj[al]=true
}}}function s(aj){return aj.charCodeAt(0)
}function ac(al,ak){var aj=al.index,am=ak.index;
al=al.criteria;
ak=ak.criteria;
if(al!==ak){if(al>ak||typeof al=="undefined"){return 1
}if(al<ak||typeof ak=="undefined"){return -1
}}return aj<am?-1:1
}function af(an){var al=-1,am=an.length;
var ak=t();
ak["false"]=ak["null"]=ak["true"]=ak["undefined"]=false;
var aj=t();
aj.array=an;
aj.cache=ak;
aj.push=Q;
while(++al<am){aj.push(an[al])
}return ak.object===false?(q(aj),null):aj
}function i(aj){return"\\"+R[aj]
}function f(){return j.pop()||[]
}function t(){return u.pop()||{args:"",array:null,bottom:"",cache:null,criteria:null,"false":false,firstArg:"",index:0,init:"",leading:false,loop:"",maxWait:0,"null":false,number:null,object:null,push:null,shadowedProps:null,string:null,support:null,top:"",trailing:false,"true":false,"undefined":false,useHas:false,useKeys:false,value:null}
}function m(aj){return typeof aj.toString!="function"&&typeof(aj+"")=="string"
}function Y(){}function W(aj){aj.length=0;
if(j.length<n){j.push(aj)
}}function q(ak){var aj=ak.cache;
if(aj){q(aj)
}ak.array=ak.cache=ak.criteria=ak.object=ak.number=ak.string=ak.value=null;
if(u.length<n){u.push(ak)
}}function v(ao,an,ak){an||(an=0);
if(typeof ak=="undefined"){ak=ao?ao.length:0
}var al=-1,am=ak-an||0,aj=Array(am<0?0:am);
while(++al<am){aj[al]=ao[an+al]
}return aj
}function ae(al){al=al?ah.defaults(T.Object(),al,ah.pick(T,A)):T;
var aJ=al.Array,cc=al.Boolean,cd=al.Date,cN=al.Error,a2=al.Function,b3=al.Math,bi=al.Number,cQ=al.Object,cy=al.RegExp,ck=al.String,aK=al.TypeError;
var b7=[];
var a9=cN.prototype,cA=cQ.prototype,aE=ck.prototype;
var cJ=al._;
var b0=cy("^"+ck(cA.valueOf).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$");
var aZ=b3.ceil,bU=al.clearTimeout,bI=b7.concat,cD=b3.floor,bD=a2.prototype.toString,aw=b0.test(aw=cQ.getPrototypeOf)&&aw,a3=cA.hasOwnProperty,az=b7.push,ar=cA.propertyIsEnumerable,bY=al.setImmediate,a0=al.setTimeout,aC=cA.toString;
var b5=b0.test(b5=aC.bind)&&b5,ay=b0.test(ay=cQ.create)&&ay,bj=b0.test(bj=aJ.isArray)&&bj,aN=al.isFinite,bF=al.isNaN,cf=b0.test(cf=cQ.keys)&&cf,cg=b3.max,aq=b3.min,cY=al.parseInt,bM=b3.random,aM=b7.slice;
var a4=b0.test(al.attachEvent),av=b5&&!/\n|true/.test(b5+a4);
var cB={};
cB[w]=aJ;
cB[E]=cc;
cB[O]=cd;
cB[ai]=a2;
cB[e]=cQ;
cB[K]=bi;
cB[P]=cy;
cB[L]=ck;
var bC={};
bC[w]=bC[O]=bC[K]={constructor:true,toLocaleString:true,toString:true,valueOf:true};
bC[E]=bC[L]={constructor:true,toString:true,valueOf:true};
bC[N]=bC[ai]=bC[P]={constructor:true,toString:true};
bC[e]={constructor:true};
(function(){var c3=F.length;
while(c3--){var c4=F[c3];
for(var at in bC){if(a3.call(bC,at)&&!a3.call(bC[at],c4)){bC[at][c4]=false
}}}}());
function aX(at){return(at&&typeof at=="object"&&!bE(at)&&a3.call(at,"__wrapped__"))?at:new cE(at)
}function cE(at){this.__wrapped__=at
}cE.prototype=aX.prototype;
var aI=aX.support={};
(function(){var c4=function(){this.x=1
},at={"0":1,length:1},c3=[];
c4.prototype={valueOf:1,y:1};
for(var c6 in new c4){c3.push(c6)
}for(c6 in arguments){}aI.argsObject=arguments.constructor==cQ&&!(arguments instanceof aJ);
aI.argsClass=a8(arguments);
aI.enumErrorProps=ar.call(a9,"message")||ar.call(a9,"name");
aI.enumPrototypes=ar.call(c4,"prototype");
aI.fastBind=b5&&!av;
aI.ownLast=c3[0]!="x";
aI.nonEnumArgs=c6!=0;
aI.nonEnumShadows=!/valueOf/.test(c3);
aI.spliceObjects=(b7.splice.call(at,0,1),!at[0]);
aI.unindexedChars=("x"[0]+cQ("x")[0])!="xx";
try{aI.nodeClass=!(aC.call(document)==e&&!({toString:0}+""))
}catch(c5){aI.nodeClass=true
}}(1));
aX.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:p,variable:"",imports:{_:aX}};
var bO=bG("var index, iterable = <%= firstArg %>, result = <%= init %>;\nif (!iterable) return result;\n<%= top %>;<% if (array) { %>\nvar length = iterable.length; index = -1;\nif (<%= array %>) {  <% if (support.unindexedChars) { %>\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  <% } %>\n  while (++index < length) {\n    <%= loop %>;\n  }\n}\nelse {  <% } else if (support.nonEnumArgs) { %>\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      <%= loop %>;\n    }\n  } else {  <% } %>  <% if (support.enumPrototypes) { %>\n  var skipProto = typeof iterable == 'function';\n  <% } %>  <% if (support.enumErrorProps) { %>\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  <% } %>  <%    var conditions = [];    if (support.enumPrototypes) { conditions.push('!(skipProto && index == \"prototype\")'); }    if (support.enumErrorProps)  { conditions.push('!(skipErrorProps && (index == \"message\" || index == \"name\"))'); }  %>  <% if (useHas && useKeys) { %>\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n<%    if (conditions.length) { %>    if (<%= conditions.join(' && ') %>) {\n  <% } %>    <%= loop %>;    <% if (conditions.length) { %>\n    }<% } %>\n  }  <% } else { %>\n  for (index in iterable) {\n<%    if (useHas) { conditions.push(\"hasOwnProperty.call(iterable, index)\"); }    if (conditions.length) { %>    if (<%= conditions.join(' && ') %>) {\n  <% } %>    <%= loop %>;    <% if (conditions.length) { %>\n    }<% } %>\n  }    <% if (support.nonEnumShadows) { %>\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      <% for (k = 0; k < 7; k++) { %>\n    index = '<%= shadowedProps[k] %>';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))<%        if (!useHas) { %> || (!nonEnum[index] && iterable[index] !== objectProto[index])<% }      %>) {\n      <%= loop %>;\n    }      <% } %>\n  }    <% } %>  <% } %>  <% if (array || support.nonEnumArgs) { %>\n}<% } %>\n<%= bottom %>;\nreturn result");
var b8={args:"object, source, guard",top:"var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",loop:"if (typeof result[index] == 'undefined') result[index] = iterable[index]",bottom:"  }\n}"};
var br={args:"collection, callback, thisArg",top:"callback = callback && typeof thisArg == 'undefined' ? callback : lodash.createCallback(callback, thisArg)",array:"typeof length == 'number'",loop:"if (callback(iterable[index], index, collection) === false) return result"};
var aj={top:"if (!objectTypes[typeof iterable]) return result;\n"+br.top,array:false};
function aS(c4,c7,c6,c9){var c8=aA(c4),at=!c6,da=c7;
if(at){var c3=c9;
c6=c7
}else{if(!c8){if(!c9){throw new aK
}c7=c4
}}function c5(){var dd=arguments,dc=at?this:c7;
if(!c8){c4=c7[da]
}if(c6.length){dd=dd.length?(dd=aM.call(dd),c3?dd.concat(c6):c6.concat(dd)):c6
}if(this instanceof c5){dc=bh(c4.prototype);
var db=c4.apply(dc,dd);
return c1(db)?db:dc
}return c4.apply(dc,dd)
}return c5
}function aV(){var c7=t();
c7.shadowedProps=F;
c7.support=aI;
c7.array=c7.bottom=c7.loop=c7.top="";
c7.init="iterable";
c7.useHas=true;
c7.useKeys=!!ca;
for(var c5,c4=0;
c5=arguments[c4];
c4++){for(var c6 in c5){c7[c6]=c5[c6]
}}var c3=c7.args;
c7.firstArg=/^[^,]+/.exec(c3)[0];
var at=a2("errorClass, errorProto, hasOwnProperty, isArguments, isArray, isString, keys, lodash, objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString","return function("+c3+") {\n"+bO(c7)+"\n}");
q(c7);
return at(N,a9,a3,a8,bE,cr,ca,aX,cA,H,bC,L,aE,aC)
}function bh(at){return c1(at)?ay(at):{}
}if(!ay){var bh=function(c3){if(c1(c3)){Y.prototype=c3;
var at=new Y;
Y.prototype=null
}return at||{}
}
}function bp(at){return aW[at]
}function b4(c5,c4,c3){var at=(at=aX.indexOf)===cU?U:at;
return at
}function c0(at){return function(c6,c4,c5,c3){if(typeof c4!="boolean"&&c4!=null){c3=c5;
c5=!(c3&&c3[c4]===c6)?c4:o;
c4=false
}if(c5!=null){c5=aX.createCallback(c5,c3)
}return at(c6,c4,c5,c3)
}
}function aP(c4){var c3,at;
if(!(c4&&aC.call(c4)==e)||(c3=c4.constructor,aA(c3)&&!(c3 instanceof c3))||(!aI.argsClass&&a8(c4))||(!aI.nodeClass&&m(c4))){return false
}if(aI.ownLast){am(c4,function(c7,c6,c5){at=a3.call(c5,c6);
return false
});
return at!==false
}am(c4,function(c6,c5){at=c5
});
return at===o||a3.call(c4,at)
}function bq(at){return bV[at]
}function a8(at){return aC.call(at)==Z
}if(!aI.argsClass){a8=function(at){return at?a3.call(at,"callee"):false
}
}var bE=bj||function(at){return at?(typeof at=="object"&&aC.call(at)==w):false
};
var bg=aV({args:"object",init:"[]",top:"if (!(objectTypes[typeof object])) return result",loop:"result.push(index)"});
var ca=!cf?bg:function(at){if(!c1(at)){return[]
}if((aI.enumPrototypes&&typeof at=="function")||(aI.nonEnumArgs&&at.length&&a8(at))){return bg(at)
}return cf(at)
};
var cM=aV(br);
var aW={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};
var bV=b6(aW);
var bu=aV(b8,{top:b8.top.replace(";",";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = lodash.createCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),loop:"result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"});
function cu(db,dc,dd,c9,c6,c4){var de=db;
if(typeof dc!="boolean"&&dc!=null){c9=dd;
dd=dc;
dc=false
}if(typeof dd=="function"){dd=(typeof c9=="undefined")?dd:aX.createCallback(dd,c9,1);
de=dd(de);
if(typeof de!="undefined"){return de
}de=db
}var c5=c1(de);
if(c5){var c8=aC.call(de);
if(!x[c8]||(!aI.nodeClass&&m(de))){return de
}var c7=bE(de)
}if(!c5||!dc){return c5?(c7?v(de):bu({},de)):de
}var da=cB[c8];
switch(c8){case E:case O:return new da(+de);
case K:case L:return new da(de);
case P:return da(de.source,G.exec(de))
}var c3=!c6;
c6||(c6=f());
c4||(c4=f());
var at=c6.length;
while(at--){if(c6[at]==db){return c4[at]
}}de=c7?da(de.length):{};
if(c7){if(a3.call(db,"index")){de.index=db.index
}if(a3.call(db,"input")){de.input=db.input
}}c6.push(db);
c4.push(de);
(c7?cM:bQ)(db,function(df,dg){de[dg]=cu(df,dc,dd,o,c6,c4)
});
if(c3){W(c6);
W(c4)
}return de
}function cX(c3,c4,at){return cu(c3,true,c4,at)
}var bv=aV(b8);
function cn(c4,c5,c3){var at;
c5=aX.createCallback(c5,c3);
bQ(c4,function(c8,c7,c6){if(c5(c8,c7,c6)){at=c7;
return false
}});
return at
}var am=aV(br,aj,{useHas:false});
var bQ=aV(br,aj);
function cz(c3){var at=[];
am(c3,function(c5,c4){if(aA(c5)){at.push(c4)
}});
return at.sort()
}function cL(at,c3){return at?a3.call(at,c3):false
}function b6(c4){var c3=-1,c6=ca(c4),c7=c6.length,at={};
while(++c3<c7){var c5=c6[c3];
at[c4[c5]]=c5
}return at
}function bJ(at){return at===true||at===false||aC.call(at)==E
}function bc(at){return at?(typeof at=="object"&&aC.call(at)==O):false
}function b1(at){return at?at.nodeType===1:false
}function cl(c5){var at=true;
if(!c5){return at
}var c3=aC.call(c5),c4=c5.length;
if((c3==w||c3==L||(aI.argsClass?c3==Z:a8(c5)))||(c3==e&&typeof c4=="number"&&aA(c5.splice))){return !c4
}bQ(c5,function(){return(at=false)
});
return at
}function b2(dj,di,c9,dh,dl,dk){var c8=c9===k;
if(typeof c9=="function"&&!c8){c9=aX.createCallback(c9,dh,2);
var de=c9(dj,di);
if(typeof de!="undefined"){return !!de
}}if(dj===di){return dj!==0||(1/dj==1/di)
}var c6=typeof dj,c4=typeof di;
if(dj===dj&&(!dj||(c6!="function"&&c6!="object"))&&(!di||(c4!="function"&&c4!="object"))){return false
}if(dj==null||di==null){return dj===di
}var at=aC.call(dj),dc=aC.call(di);
if(at==Z){at=e
}if(dc==Z){dc=e
}if(at!=dc){return false
}switch(at){case E:case O:return +dj==+di;
case K:return(dj!=+dj)?di!=+di:(dj==0?(1/dj==1/di):dj==+di);
case P:case L:return dj==ck(di)
}var da=at==w;
if(!da){if(a3.call(dj,"__wrapped__ ")||a3.call(di,"__wrapped__")){return b2(dj.__wrapped__||dj,di.__wrapped__||di,c9,dh,dl,dk)
}if(at!=e||(!aI.nodeClass&&(m(dj)||m(di)))){return false
}var c5=!aI.argsObject&&a8(dj)?cQ:dj.constructor,c3=!aI.argsObject&&a8(di)?cQ:di.constructor;
if(c5!=c3&&!(aA(c5)&&c5 instanceof c5&&aA(c3)&&c3 instanceof c3)){return false
}}var dd=!dl;
dl||(dl=f());
dk||(dk=f());
var c7=dl.length;
while(c7--){if(dl[c7]==dj){return dk[c7]==di
}}var df=0;
de=true;
dl.push(dj);
dk.push(di);
if(da){c7=dj.length;
df=di.length;
de=df==dj.length;
if(!de&&!c8){return de
}while(df--){var db=c7,dg=di[df];
if(c8){while(db--){if((de=b2(dj[db],dg,c9,dh,dl,dk))){break
}}}else{if(!(de=b2(dj[df],dg,c9,dh,dl,dk))){break
}}}return de
}am(di,function(dp,dn,dm){if(a3.call(dm,dn)){df++;
return(de=a3.call(dj,dn)&&b2(dj[dn],dp,c9,dh,dl,dk))
}});
if(de&&!c8){am(dj,function(dp,dn,dm){if(a3.call(dm,dn)){return(de=--df>-1)
}})
}if(dd){W(dl);
W(dk)
}return de
}function aO(at){return aN(at)&&!bF(parseFloat(at))
}function aA(at){return typeof at=="function"
}if(aA(/x/)){aA=function(at){return typeof at=="function"&&aC.call(at)==ai
}
}function c1(at){return !!(at&&H[typeof at])
}function bS(at){return bt(at)&&at!=+at
}function cS(at){return at===null
}function bt(at){return typeof at=="number"||aC.call(at)==K
}var aQ=!aw?aP:function(c4){if(!(c4&&aC.call(c4)==e)||(!aI.argsClass&&a8(c4))){return false
}var at=c4.valueOf,c3=typeof at=="function"&&(c3=aw(at))&&aw(c3);
return c3?(c4==c3||aw(c4)==c3):aP(c4)
};
function cG(at){return !!(at&&H[typeof at])&&aC.call(at)==P
}function cr(at){return typeof at=="string"||aC.call(at)==L
}function bX(at){return typeof at=="undefined"
}function bL(c6,at,c7){var da=arguments,c9=0,c4=2;
if(!c1(c6)){return c6
}if(c7===k){var db=da[3],c8=da[4],c5=da[5]
}else{var c3=true;
c8=f();
c5=f();
if(typeof c7!="number"){c4=da.length
}if(c4>3&&typeof da[c4-2]=="function"){db=aX.createCallback(da[--c4-1],da[c4--],2)
}else{if(c4>2&&typeof da[c4-1]=="function"){db=da[--c4]
}}}while(++c9<c4){(bE(da[c9])?bB:bQ)(da[c9],function(di,de){var dh,df,dd=di,dg=c6[de];
if(di&&((df=bE(di))||aQ(di))){var dj=c8.length;
while(dj--){if((dh=c8[dj]==di)){dg=c5[dj];
break
}}if(!dh){var dc;
if(db){dd=db(dg,di);
if((dc=typeof dd!="undefined")){dg=dd
}}if(!dc){dg=df?(bE(dg)?dg:[]):(aQ(dg)?dg:{})
}c8.push(di);
c5.push(dg);
if(!dc){dg=bL(dg,di,k,db,c8,c5)
}}}else{if(db){dd=db(dg,di);
if(typeof dd=="undefined"){dd=di
}}if(typeof dd!="undefined"){dg=dd
}}c6[de]=dg
})
}if(c3){W(c8);
W(c5)
}return c6
}function co(c4,c8,c3){var c6=b4(),c7=typeof c8=="function",at={};
if(c7){c8=aX.createCallback(c8,c3)
}else{var c5=bI.apply(b7,aM.call(arguments,1))
}am(c4,function(db,da,c9){if(c7?!c8(db,da,c9):c6(c5,da)<0){at[da]=db
}});
return at
}function bA(c4){var c3=-1,c6=ca(c4),c7=c6.length,at=aJ(c7);
while(++c3<c7){var c5=c6[c3];
at[c3]=[c5,c4[c5]]
}return at
}function bN(c5,c9,c3){var at={};
if(typeof c9!="function"){var c4=-1,c7=bI.apply(b7,aM.call(arguments,1)),c8=c1(c5)?c7.length:0;
while(++c4<c8){var c6=c7[c4];
if(c6 in c5){at[c6]=c5[c6]
}}}else{c9=aX.createCallback(c9,c3);
am(c5,function(dc,db,da){if(c9(dc,db,da)){at[db]=dc
}})
}return at
}function cK(c4,c8,c3,at){var c7=bE(c4);
c8=aX.createCallback(c8,at,4);
if(c3==null){if(c7){c3=[]
}else{var c6=c4&&c4.constructor,c5=c6&&c6.prototype;
c3=bh(c5)
}}(c7?cM:bQ)(c4,function(db,da,c9){return c8(c3,db,da,c9)
});
return c3
}function by(c4){var c3=-1,c5=ca(c4),c6=c5.length,at=aJ(c6);
while(++c3<c6){at[c3]=c4[c5[c3]]
}return at
}function cC(c6){var c3=-1,c4=bI.apply(b7,aM.call(arguments,1)),c5=c4.length,at=aJ(c5);
if(aI.unindexedChars&&cr(c6)){c6=c6.split("")
}while(++c3<c5){at[c3]=c6[c4[c3]]
}return at
}function a7(c8,c7,c5){var c3=-1,c4=b4(),c6=c8?c8.length:0,at=false;
c5=(c5<0?cg(0,c6+c5):c5)||0;
if(c6&&typeof c6=="number"){at=(cr(c8)?c8.indexOf(c7,c5):c4(c8,c7,c5))>-1
}else{cM(c8,function(c9){if(++c3>=c5){return !(at=c9===c7)
}})
}return at
}function bK(c4,c5,c3){var at={};
c5=aX.createCallback(c5,c3);
bB(c4,function(c7,c6,c8){c6=ck(c5(c7,c6,c8));
(a3.call(at,c6)?at[c6]++:at[c6]=1)
});
return at
}function aB(c6,c7,c3){var at=true;
c7=aX.createCallback(c7,c3);
if(bE(c6)){var c4=-1,c5=c6.length;
while(++c4<c5){if(!(at=!!c7(c6[c4],c4,c6))){break
}}}else{cM(c6,function(c9,c8,da){return(at=!!c7(c9,c8,da))
})
}return at
}function bR(c7,c8,c3){var at=[];
c8=aX.createCallback(c8,c3);
if(bE(c7)){var c4=-1,c5=c7.length;
while(++c4<c5){var c6=c7[c4];
if(c8(c6,c4,c7)){at.push(c6)
}}}else{cM(c7,function(da,c9,db){if(c8(da,c9,db)){at.push(da)
}})
}return at
}function bH(c7,c8,c3){c8=aX.createCallback(c8,c3);
if(bE(c7)){var c4=-1,c5=c7.length;
while(++c4<c5){var c6=c7[c4];
if(c8(c6,c4,c7)){return c6
}}}else{var at;
cM(c7,function(da,c9,db){if(c8(da,c9,db)){at=da;
return false
}});
return at
}}function bB(c5,c6,at){if(c6&&typeof at=="undefined"&&bE(c5)){var c3=-1,c4=c5.length;
while(++c3<c4){if(c6(c5[c3],c3,c5)===false){break
}}}else{cM(c5,c6,at)
}return c5
}function bs(c4,c5,c3){var at={};
c5=aX.createCallback(c5,c3);
bB(c4,function(c7,c6,c8){c6=ck(c5(c7,c6,c8));
(a3.call(at,c6)?at[c6]:at[c6]=[]).push(c7)
});
return at
}function aL(c8,c3){var c5=aM.call(arguments,2),c4=-1,c7=typeof c3=="function",c6=c8?c8.length:0,at=aJ(typeof c6=="number"?c6:0);
bB(c8,function(c9){at[++c4]=(c7?c3:c9[c3]).apply(c9,c5)
});
return at
}function bn(c6,c7,c3){var c4=-1,c5=c6?c6.length:0,at=aJ(typeof c5=="number"?c5:0);
c7=aX.createCallback(c7,c3);
if(bE(c6)){while(++c4<c5){at[c4]=c7(c6[c4],c4,c6)
}}else{cM(c6,function(c9,c8,da){at[++c4]=c7(c9,c8,da)
})
}return at
}function bl(c8,c9,c3){var c6=-Infinity,at=c6;
if(!c9&&bE(c8)){var c4=-1,c5=c8.length;
while(++c4<c5){var c7=c8[c4];
if(c7>at){at=c7
}}}else{c9=(!c9&&cr(c8))?s:aX.createCallback(c9,c3);
cM(c8,function(db,da,dd){var dc=c9(db,da,dd);
if(dc>c6){c6=dc;
at=db
}})
}return at
}function ci(c8,c9,c3){var c6=Infinity,at=c6;
if(!c9&&bE(c8)){var c4=-1,c5=c8.length;
while(++c4<c5){var c7=c8[c4];
if(c7<at){at=c7
}}}else{c9=(!c9&&cr(c8))?s:aX.createCallback(c9,c3);
cM(c8,function(db,da,dd){var dc=c9(db,da,dd);
if(dc<c6){c6=dc;
at=db
}})
}return at
}var cW=bn;
function cj(c7,c8,c3,at){var c5=arguments.length<3;
c8=aX.createCallback(c8,at,4);
if(bE(c7)){var c4=-1,c6=c7.length;
if(c5){c3=c7[++c4]
}while(++c4<c6){c3=c8(c3,c7[c4],c4,c7)
}}else{cM(c7,function(da,c9,db){c3=c5?(c5=false,da):c8(c3,da,c9,db)
})
}return c3
}function cH(c8,c9,c3,at){var c7=c8,c6=c8?c8.length:0,c5=arguments.length<3;
if(typeof c6!="number"){var c4=ca(c8);
c6=c4.length
}else{if(aI.unindexedChars&&cr(c8)){c7=c8.split("")
}}c9=aX.createCallback(c9,at,4);
bB(c8,function(db,da,dc){da=c4?c4[--c6]:--c6;
c3=c5?(c5=false,c7[da]):c9(c3,c7[da],da,dc)
});
return c3
}function aD(c3,c4,at){c4=aX.createCallback(c4,at);
return bR(c3,function(c6,c5,c7){return !c4(c6,c5,c7)
})
}function bz(c5){var c3=-1,c4=c5?c5.length:0,at=aJ(typeof c4=="number"?c4:0);
bB(c5,function(c7){var c6=cD(bM()*(++c3+1));
at[c3]=at[c6];
at[c6]=c7
});
return at
}function bb(c3){var at=c3?c3.length:0;
return typeof at=="number"?at:ca(c3).length
}function ba(c6,c7,c3){var at;
c7=aX.createCallback(c7,c3);
if(bE(c6)){var c4=-1,c5=c6.length;
while(++c4<c5){if((at=c7(c6[c4],c4,c6))){break
}}}else{cM(c6,function(c9,c8,da){return !(at=c7(c9,c8,da))
})
}return !!at
}function bd(c7,c8,c3){var c5=-1,c6=c7?c7.length:0,at=aJ(typeof c6=="number"?c6:0);
c8=aX.createCallback(c8,c3);
bB(c7,function(db,da,dc){var c9=at[++c5]=t();
c9.criteria=c8(db,da,dc);
c9.index=c5;
c9.value=db
});
c6=at.length;
at.sort(ac);
while(c6--){var c4=at[c6];
at[c6]=c4.value;
q(c4)
}return at
}function aG(at){if(at&&typeof at.length=="number"){return(aI.unindexedChars&&cr(at))?at.split(""):v(at)
}return by(at)
}var an=bR;
function aR(c6){var c3=-1,c4=c6?c6.length:0,at=[];
while(++c3<c4){var c5=c6[c3];
if(c5){at.push(c5)
}}return at
}function ak(c6){var c5=-1,c7=b4(),c4=c6?c6.length:0,at=bI.apply(b7,aM.call(arguments,1)),da=[];
var c8=c4>=d&&c7===U;
if(c8){var c3=af(at);
if(c3){c7=S;
at=c3
}else{c8=false
}}while(++c5<c4){var c9=c6[c5];
if(c7(at,c9)<0){da.push(c9)
}}if(c8){q(at)
}return da
}function cR(c6,c5,at){var c3=-1,c4=c6?c6.length:0;
c5=aX.createCallback(c5,at);
while(++c3<c4){if(c5(c6[c3],c3,c6)){return c3
}}return -1
}function bk(c7,c6,at){if(c7){var c5=0,c4=c7.length;
if(typeof c6!="number"&&c6!=null){var c3=-1;
c6=aX.createCallback(c6,at);
while(++c3<c4&&c6(c7[c3],c3,c7)){c5++
}}else{c5=c6;
if(c5==null||at){return c7[0]
}}return v(c7,0,aq(cg(0,c5),c4))
}}var ct=c0(function ct(c8,c3,c7){var c4=-1,c5=c8?c8.length:0,at=[];
while(++c4<c5){var c6=c8[c4];
if(c7){c6=c7(c6,c4,c8)
}if(bE(c6)){az.apply(at,c3?c6:ct(c6))
}else{at.push(c6)
}}return at
});
function cU(c6,c5,c3){if(typeof c3=="number"){var c4=c6?c6.length:0;
c3=(c3<0?cg(0,c4+c3):c3||0)
}else{if(c3){var at=be(c6,c5);
return c6[at]===c5?at:-1
}}return c6?U(c6,c5,c3):-1
}function cV(c7,c6,at){if(!c7){return[]
}var c5=0,c4=c7.length;
if(typeof c6!="number"&&c6!=null){var c3=c4;
c6=aX.createCallback(c6,at);
while(c3--&&c6(c7[c3],c3,c7)){c5++
}}else{c5=(c6==null||at)?1:c6||c5
}return v(c7,0,aq(cg(0,c4-c5),c4))
}function cq(c8){var da=arguments,c6=da.length,c4=-1,c9=f(),c7=-1,db=b4(),c5=c8?c8.length:0,dd=[],c3=f();
while(++c4<c6){var dc=da[c4];
c9[c4]=db===U&&(dc?dc.length:0)>=d&&af(c4?da[c4]:c3)
}outer:while(++c7<c5){var at=c9[0];
dc=c8[c7];
if((at?S(at,dc):db(c3,dc))<0){c4=c6;
(at||c3).push(dc);
while(--c4){at=c9[c4];
if((at?S(at,dc):db(da[c4],dc))<0){continue outer
}}dd.push(dc)
}}while(c6--){at=c9[c6];
if(at){q(at)
}}W(c9);
W(c3);
return dd
}function bw(c7,c6,at){if(c7){var c5=0,c4=c7.length;
if(typeof c6!="number"&&c6!=null){var c3=c4;
c6=aX.createCallback(c6,at);
while(c3--&&c6(c7[c3],c3,c7)){c5++
}}else{c5=c6;
if(c5==null||at){return c7[c4-1]
}}return v(c7,cg(0,c4-c5))
}}function c2(c5,c4,c3){var at=c5?c5.length:0;
if(typeof c3=="number"){at=(c3<0?cg(0,at+c3):aq(c3,at-1))+1
}while(at--){if(c5[at]===c4){return at
}}return -1
}function a1(c7,c3,c6){c7=+c7||0;
c6=+c6||1;
if(c3==null){c3=c7;
c7=0
}var c4=-1,c5=cg(0,aZ((c3-c7)/c6)),at=aJ(c5);
while(++c4<c5){at[c4]=c7;
c7+=c6
}return at
}function b9(c7,c6,at){if(typeof c6!="number"&&c6!=null){var c5=0,c3=-1,c4=c7?c7.length:0;
c6=aX.createCallback(c6,at);
while(++c3<c4&&c6(c7[c3],c3,c7)){c5++
}}else{c5=(c6==null||at)?1:cg(0,c6)
}return v(c7,c5)
}function be(c8,c6,c7,c3){var at=0,c5=c8?c8.length:at;
c7=c7?aX.createCallback(c7,c3,1):bm;
c6=c7(c6);
while(at<c5){var c4=(at+c5)>>>1;
(c7(c8[c4])<c6)?at=c4+1:c5=c4
}return at
}function ax(at){if(!bE(at)){arguments[0]=at?aM.call(at):b7
}return bT(bI.apply(b7,arguments))
}var bT=c0(function(c8,c5,dc){var c7=-1,c9=b4(),c4=c8?c8.length:0,dd=[];
var da=!c5&&c4>=d&&c9===U,c3=(dc||da)?f():dd;
if(da){var at=af(c3);
if(at){c9=S;
c3=at
}else{da=false;
c3=dc?c3:(W(c3),dd)
}}while(++c7<c4){var db=c8[c7],c6=dc?dc(db,c7,c8):db;
if(c5?!c7||c3[c3.length-1]!==c6:c9(c3,c6)<0){if(dc||da){c3.push(c6)
}dd.push(db)
}}if(da){W(c3.array);
q(c3)
}else{if(dc){W(c3)
}}return dd
});
function cT(c5){var c3=-1,c4=c5?bl(cW(c5,"length")):0,at=aJ(c4<0?0:c4);
while(++c3<c4){at[c3]=cW(c5,c3)
}return at
}function cP(at){return ak(at,aM.call(arguments,1))
}function au(at){return at?cT(arguments):[]
}function cv(c7,c3){var c4=-1,c6=c7?c7.length:0,at={};
while(++c4<c6){var c5=c7[c4];
if(c3){at[c5]=c3[c4]
}else{at[c5[0]]=c5[1]
}}return at
}function aU(c3,at){if(c3<1){return at()
}return function(){if(--c3<1){return at.apply(this,arguments)
}}
}function bZ(c3,at){return aI.fastBind||(b5&&arguments.length>2)?b5.call.apply(b5,arguments):aS(c3,at,aM.call(arguments,2))
}function bx(c4){var at=arguments.length>1?bI.apply(b7,aM.call(arguments,1)):cz(c4),c3=-1,c6=at.length;
while(++c3<c6){var c5=at[c3];
c4[c5]=bZ(c4[c5],c4)
}return c4
}function cF(at,c3){return aS(at,c3,aM.call(arguments,2),k)
}function cx(){var at=arguments;
return function(){var c3=arguments,c4=at.length;
while(c4--){c3=[at[c4].apply(this,c3)]
}return c3[0]
}
}function aH(c5,at,c6){if(c5==null){return bm
}var c4=typeof c5;
if(c4!="function"){if(c4!="object"){return function(c7){return c7[c5]
}
}var c3=ca(c5);
return function(c8){var c9=c3.length,c7=false;
while(c9--){if(!(c7=b2(c8[c3[c9]],c5[c3[c9]],k))){break
}}return c7
}
}if(typeof at=="undefined"||(l&&!l.test(bD.call(c5)))){return c5
}if(c6===1){return function(c7){return c5.call(at,c7)
}
}if(c6===2){return function(c8,c7){return c5.call(at,c8,c7)
}
}if(c6===4){return function(c7,c9,c8,da){return c5.call(at,c7,c9,c8,da)
}
}return function(c8,c7,c9){return c5.call(at,c8,c7,c9)
}
}function cw(c4,c9,dg){var dd,dh,de,da=0,db=0,c6=false,c7=null,df=null,dc=true;
function c8(){bU(c7);
bU(df);
da=0;
c7=df=null
}function c5(){var di=dc&&(!at||da>1);
c8();
if(di){if(c6!==false){db=new cd
}dh=c4.apply(de,dd)
}}function c3(){c8();
if(dc||(c6!==c9)){db=new cd;
dh=c4.apply(de,dd)
}}c9=cg(0,c9||0);
if(dg===true){var at=true;
dc=false
}else{if(c1(dg)){at=dg.leading;
c6="maxWait" in dg&&cg(c9,dg.maxWait||0);
dc="trailing" in dg?dg.trailing:dc
}}return function(){dd=arguments;
de=this;
da++;
bU(df);
if(c6===false){if(at&&da<2){dh=c4.apply(de,dd)
}}else{var di=new cd;
if(!c7&&!at){db=di
}var dj=c6-(di-db);
if(dj<=0){bU(c7);
c7=null;
db=di;
dh=c4.apply(de,dd)
}else{if(!c7){c7=a0(c3,dj)
}}}if(c9!==c6){df=a0(c5,c9)
}return dh
}
}function a5(c3){var at=aM.call(arguments,1);
return a0(function(){c3.apply(o,at)
},1)
}if(av&&B&&typeof bY=="function"){a5=bZ(bY,al)
}function bP(c3,c4){var at=aM.call(arguments,2);
return a0(function(){c3.apply(o,at)
},c4)
}function a6(c3,c4){function at(){var c5=at.cache,c6=c+(c4?c4.apply(this,arguments):arguments[0]);
return a3.call(c5,c6)?c5[c6]:(c5[c6]=c3.apply(this,arguments))
}at.cache={};
return at
}function cp(c4){var c3,at;
return function(){if(c3){return at
}c3=true;
at=c4.apply(this,arguments);
c4=null;
return at
}
}function cI(at){return aS(at,aM.call(arguments,1))
}function cm(at){return aS(at,aM.call(arguments,1),null,k)
}function ch(c4,c5,c3){var c7=true,c6=true;
if(c3===false){c7=false
}else{if(c1(c3)){c7="leading" in c3?c3.leading:c7;
c6="trailing" in c3?c3.trailing:c6
}}c3=t();
c3.leading=c7;
c3.maxWait=c5;
c3.trailing=c6;
var at=cw(c4,c5,c3);
q(c3);
return at
}function bW(at,c3){return function(){var c4=[at];
az.apply(c4,arguments);
return c3.apply(this,c4)
}
}function bf(at){return at==null?"":ck(at).replace(D,bp)
}function bm(at){return at
}function aF(at){bB(cz(at),function(c3){var c4=aX[c3]=at[c3];
aX.prototype[c3]=function(){var c7=this.__wrapped__,c6=[c7];
az.apply(c6,arguments);
var c5=c4.apply(aX,c6);
return(c7&&typeof c7=="object"&&c7===c5)?this:new cE(c5)
}
})
}function cO(){al._=cJ;
return this
}var cZ=cY(J+"08")==8?cY:function(c3,at){return cY(cr(c3)?c3.replace(ad,""):c3,at||0)
};
function cb(c3,at){if(c3==null&&at==null){at=1
}c3=+c3||0;
if(at==null){at=c3;
c3=0
}else{at=+at||0
}var c4=bM();
return(c3%1||at%1)?c3+aq(c4*(at-c3+parseFloat("1e-"+((c4+"").length-1))),at):c3+cD(c4*(at-c3+1))
}function aT(at,c4){var c3=at?at[c4]:o;
return aA(c3)?at[c4]():c3
}function bG(df,c9,di){var c6=aX.templateSettings;
df||(df="");
di=bO?bv({},di,c6):c6;
var c4=bO&&bv({},di.imports,c6.imports),da=bO?ca(c4):["_"],c5=bO?by(c4):[aX];
var de,db=0,dd=di.interpolate||V,c3="__p += '";
var dh=cy((di.escape||V).source+"|"+dd.source+"|"+(dd===p?C:V).source+"|"+(di.evaluate||V).source+"|$","g");
df.replace(dh,function(dj,dn,dl,dk,dm,dp){dl||(dl=dk);
c3+=df.slice(db,dp).replace(aa,i);
if(dn){c3+="' +\n__e("+dn+") +\n'"
}if(dm){de=true;
c3+="';\n"+dm+";\n__p += '"
}if(dl){c3+="' +\n((__t = ("+dl+")) == null ? '' : __t) +\n'"
}db=dp+dj.length;
return dj
});
c3+="';\n";
var c7=di.variable,c8=c7;
if(!c8){c7="obj";
c3="with ("+c7+") {\n"+c3+"\n}\n"
}c3=(de?c3.replace(z,""):c3).replace(X,"$1").replace(h,"$1;");
c3="function("+c7+") {\n"+(c8?"":c7+" || ("+c7+" = {});\n")+"var __t, __p = '', __e = _.escape"+(de?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+c3+"return __p\n}";
var at="\n/*\n//@ sourceURL="+(di.sourceURL||"/lodash/template/source["+(ag++)+"]")+"\n*/";
try{var dg=a2(da,"return "+c3+at).apply(o,c5)
}catch(dc){dc.source=c3;
throw dc
}if(c9){return dg(c9)
}dg.source=c3;
return dg
}function ao(c6,c5,c3){c6=(c6=+c6)>-1?c6:0;
var c4=-1,at=aJ(c6);
c5=aX.createCallback(c5,c3,1);
while(++c4<c6){at[c4]=c5(c4)
}return at
}function ap(at){return at==null?"":ck(at).replace(I,bq)
}function ce(at){var c3=++M;
return ck(at==null?"":at)+c3
}function cs(at,c3){c3(at);
return at
}function bo(){return ck(this.__wrapped__)
}function aY(){return this.__wrapped__
}aX.after=aU;
aX.assign=bu;
aX.at=cC;
aX.bind=bZ;
aX.bindAll=bx;
aX.bindKey=cF;
aX.compact=aR;
aX.compose=cx;
aX.countBy=bK;
aX.createCallback=aH;
aX.debounce=cw;
aX.defaults=bv;
aX.defer=a5;
aX.delay=bP;
aX.difference=ak;
aX.filter=bR;
aX.flatten=ct;
aX.forEach=bB;
aX.forIn=am;
aX.forOwn=bQ;
aX.functions=cz;
aX.groupBy=bs;
aX.initial=cV;
aX.intersection=cq;
aX.invert=b6;
aX.invoke=aL;
aX.keys=ca;
aX.map=bn;
aX.max=bl;
aX.memoize=a6;
aX.merge=bL;
aX.min=ci;
aX.omit=co;
aX.once=cp;
aX.pairs=bA;
aX.partial=cI;
aX.partialRight=cm;
aX.pick=bN;
aX.pluck=cW;
aX.range=a1;
aX.reject=aD;
aX.rest=b9;
aX.shuffle=bz;
aX.sortBy=bd;
aX.tap=cs;
aX.throttle=ch;
aX.times=ao;
aX.toArray=aG;
aX.transform=cK;
aX.union=ax;
aX.uniq=bT;
aX.unzip=cT;
aX.values=by;
aX.where=an;
aX.without=cP;
aX.wrap=bW;
aX.zip=au;
aX.zipObject=cv;
aX.collect=bn;
aX.drop=b9;
aX.each=bB;
aX.extend=bu;
aX.methods=cz;
aX.object=cv;
aX.select=bR;
aX.tail=b9;
aX.unique=bT;
aF(aX);
aX.chain=aX;
aX.prototype.chain=function(){return this
};
aX.clone=cu;
aX.cloneDeep=cX;
aX.contains=a7;
aX.escape=bf;
aX.every=aB;
aX.find=bH;
aX.findIndex=cR;
aX.findKey=cn;
aX.has=cL;
aX.identity=bm;
aX.indexOf=cU;
aX.isArguments=a8;
aX.isArray=bE;
aX.isBoolean=bJ;
aX.isDate=bc;
aX.isElement=b1;
aX.isEmpty=cl;
aX.isEqual=b2;
aX.isFinite=aO;
aX.isFunction=aA;
aX.isNaN=bS;
aX.isNull=cS;
aX.isNumber=bt;
aX.isObject=c1;
aX.isPlainObject=aQ;
aX.isRegExp=cG;
aX.isString=cr;
aX.isUndefined=bX;
aX.lastIndexOf=c2;
aX.mixin=aF;
aX.noConflict=cO;
aX.parseInt=cZ;
aX.random=cb;
aX.reduce=cj;
aX.reduceRight=cH;
aX.result=aT;
aX.runInContext=ae;
aX.size=bb;
aX.some=ba;
aX.sortedIndex=be;
aX.template=bG;
aX.unescape=ap;
aX.uniqueId=ce;
aX.all=aB;
aX.any=ba;
aX.detect=bH;
aX.findWhere=bH;
aX.foldl=cj;
aX.foldr=cH;
aX.include=a7;
aX.inject=cj;
bQ(aX,function(c3,at){if(!aX.prototype[at]){aX.prototype[at]=function(){var c4=[this.__wrapped__];
az.apply(c4,arguments);
return c3.apply(aX,c4)
}
}});
aX.first=bk;
aX.last=bw;
aX.take=bk;
aX.head=bk;
bQ(aX,function(c3,at){if(!aX.prototype[at]){aX.prototype[at]=function(c6,c5){var c4=c3(this.__wrapped__,c6,c5);
return c6==null||(c5&&typeof c6!="function")?c4:new cE(c4)
}
}});
aX.VERSION="1.3.1";
aX.prototype.toString=bo;
aX.prototype.value=aY;
aX.prototype.valueOf=aY;
cM(["join","pop","shift"],function(at){var c3=b7[at];
aX.prototype[at]=function(){return c3.apply(this.__wrapped__,arguments)
}
});
cM(["push","reverse","sort","unshift"],function(at){var c3=b7[at];
aX.prototype[at]=function(){c3.apply(this.__wrapped__,arguments);
return this
}
});
cM(["concat","slice","splice"],function(at){var c3=b7[at];
aX.prototype[at]=function(){return new cE(c3.apply(this.__wrapped__,arguments))
}
});
if(!aI.spliceObjects){cM(["pop","shift","splice"],function(at){var c3=b7[at],c4=at=="splice";
aX.prototype[at]=function(){var c6=this.__wrapped__,c5=c3.apply(c6,arguments);
if(c6.length===0){delete c6[0]
}return c4?new cE(c5):c5
}
})
}aX._basicEach=cM;
aX._iteratorTemplate=bO;
aX._shimKeys=bg;
return aX
}var ah=ae();
if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){T._=ah;
define(function(){return ah
})
}else{if(ab&&!ab.nodeType){if(B){(B.exports=ah)._=ah
}else{ab._=ah
}}else{T._=ah
}}}(this));
(function(){var y=this;
var F=y.Backbone;
var j=[];
var H=j.push;
var q=j.slice;
var x=j.splice;
var D;
if(typeof exports!=="undefined"){D=exports
}else{D=y.Backbone={}
}D.VERSION="1.0.0";
var P=y._;
if(!P&&(typeof require!=="undefined")){P=require("underscore")
}D.$=y.jQuery||y.Zepto||y.ender||y.$;
D.noConflict=function(){y.Backbone=F;
return this
};
D.emulateHTTP=false;
D.emulateJSON=false;
var N=D.Events={on:function(Q,T,S){if(!B(this,"on",Q,[T,S])||!T){return this
}this._events||(this._events={});
var R=this._events[Q]||(this._events[Q]=[]);
R.push({callback:T,context:S,ctx:S||this});
return this
},once:function(R,U,S){if(!B(this,"once",R,[U,S])||!U){return this
}var Q=this;
var T=P.once(function(){Q.off(R,T);
U.apply(this,arguments)
});
T._callback=U;
return this.on(R,T,S)
},off:function(Q,Z,R){var X,Y,aa,W,V,S,U,T;
if(!this._events||!B(this,"off",Q,[Z,R])){return this
}if(!Q&&!Z&&!R){this._events={};
return this
}W=Q?[Q]:P.keys(this._events);
for(V=0,S=W.length;
V<S;
V++){Q=W[V];
if(aa=this._events[Q]){this._events[Q]=X=[];
if(Z||R){for(U=0,T=aa.length;
U<T;
U++){Y=aa[U];
if((Z&&Z!==Y.callback&&Z!==Y.callback._callback)||(R&&R!==Y.context)){X.push(Y)
}}}if(!X.length){delete this._events[Q]
}}}return this
},trigger:function(S){if(!this._events){return this
}var R=q.call(arguments,1);
if(!B(this,"trigger",S,R)){return this
}var T=this._events[S];
var Q=this._events.all;
if(T){d(T,R)
}if(Q){d(Q,arguments)
}return this
},stopListening:function(T,Q,V){var R=this._listeners;
if(!R){return this
}var S=!Q&&!V;
if(typeof Q==="object"){V=this
}if(T){(R={})[T._listenerId]=T
}for(var U in R){R[U].off(Q,V,this);
if(S){delete this._listeners[U]
}}return this
}};
var A=/\s+/;
var B=function(X,V,R,U){if(!R){return true
}if(typeof R==="object"){for(var T in R){X[V].apply(X,[T,R[T]].concat(U))
}return false
}if(A.test(R)){var W=R.split(A);
for(var S=0,Q=W.length;
S<Q;
S++){X[V].apply(X,[W[S]].concat(U))
}return false
}return true
};
var d=function(V,T){var W,U=-1,S=V.length,R=T[0],Q=T[1],X=T[2];
switch(T.length){case 0:while(++U<S){(W=V[U]).callback.call(W.ctx)
}return;
case 1:while(++U<S){(W=V[U]).callback.call(W.ctx,R)
}return;
case 2:while(++U<S){(W=V[U]).callback.call(W.ctx,R,Q)
}return;
case 3:while(++U<S){(W=V[U]).callback.call(W.ctx,R,Q,X)
}return;
default:while(++U<S){(W=V[U]).callback.apply(W.ctx,T)
}}};
var G={listenTo:"on",listenToOnce:"once"};
P.each(G,function(Q,R){N[R]=function(U,S,W){var T=this._listeners||(this._listeners={});
var V=U._listenerId||(U._listenerId=P.uniqueId("l"));
T[V]=U;
if(typeof S==="object"){W=this
}U[Q](S,W,this);
return this
}
});
N.bind=N.on;
N.unbind=N.off;
P.extend(D,N);
var I=D.Model=function(Q,S){var T;
var R=Q||{};
S||(S={});
this.cid=P.uniqueId("c");
this.attributes={};
P.extend(this,P.pick(S,J));
if(S.parse){R=this.parse(R,S)||{}
}if(T=P.result(this,"defaults")){R=P.defaults({},R,T)
}this.set(R,S);
this.changed={};
this.initialize.apply(this,arguments)
};
var J=["url","urlRoot","collection"];
P.extend(I.prototype,N,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(Q){return P.clone(this.attributes)
},sync:function(){return D.sync.apply(this,arguments)
},get:function(Q){return this.attributes[Q]
},escape:function(Q){return P.escape(this.get(Q))
},has:function(Q){return this.get(Q)!=null
},set:function(Y,Q,ac){var W,Z,aa,X,V,ab,S,U;
if(Y==null){return this
}if(typeof Y==="object"){Z=Y;
ac=Q
}else{(Z={})[Y]=Q
}ac||(ac={});
if(!this._validate(Z,ac)){return false
}aa=ac.unset;
V=ac.silent;
X=[];
ab=this._changing;
this._changing=true;
if(!ab){this._previousAttributes=P.clone(this.attributes);
this.changed={}
}U=this.attributes,S=this._previousAttributes;
if(this.idAttribute in Z){this.id=Z[this.idAttribute]
}for(W in Z){Q=Z[W];
if(!P.isEqual(U[W],Q)){X.push(W)
}if(!P.isEqual(S[W],Q)){this.changed[W]=Q
}else{delete this.changed[W]
}aa?delete U[W]:U[W]=Q
}if(!V){if(X.length){this._pending=true
}for(var T=0,R=X.length;
T<R;
T++){this.trigger("change:"+X[T],this,U[X[T]],ac)
}}if(ab){return this
}if(!V){while(this._pending){this._pending=false;
this.trigger("change",this,ac)
}}this._pending=false;
this._changing=false;
return this
},unset:function(Q,R){return this.set(Q,void 0,P.extend({},R,{unset:true}))
},clear:function(R){var Q={};
for(var S in this.attributes){Q[S]=void 0
}return this.set(Q,P.extend({},R,{unset:true}))
},hasChanged:function(Q){if(Q==null){return !P.isEmpty(this.changed)
}return P.has(this.changed,Q)
},changedAttributes:function(S){if(!S){return this.hasChanged()?P.clone(this.changed):false
}var U,T=false;
var R=this._changing?this._previousAttributes:this.attributes;
for(var Q in S){if(P.isEqual(R[Q],(U=S[Q]))){continue
}(T||(T={}))[Q]=U
}return T
},previous:function(Q){if(Q==null||!this._previousAttributes){return null
}return this._previousAttributes[Q]
},previousAttributes:function(){return P.clone(this._previousAttributes)
},fetch:function(R){R=R?P.clone(R):{};
if(R.parse===void 0){R.parse=true
}var Q=this;
var S=R.success;
R.success=function(T){if(!Q.set(Q.parse(T,R),R)){return false
}if(S){S(Q,T,R)
}Q.trigger("sync",Q,T,R)
};
L(this,R);
return this.sync("read",this,R)
},save:function(U,R,Y){var V,Q,X,S=this.attributes;
if(U==null||typeof U==="object"){V=U;
Y=R
}else{(V={})[U]=R
}if(V&&(!Y||!Y.wait)&&!this.set(V,Y)){return false
}Y=P.extend({validate:true},Y);
if(!this._validate(V,Y)){return false
}if(V&&Y.wait){this.attributes=P.extend({},S,V)
}if(Y.parse===void 0){Y.parse=true
}var T=this;
var W=Y.success;
Y.success=function(aa){T.attributes=S;
var Z=T.parse(aa,Y);
if(Y.wait){Z=P.extend(V||{},Z)
}if(P.isObject(Z)&&!T.set(Z,Y)){return false
}if(W){W(T,aa,Y)
}T.trigger("sync",T,aa,Y)
};
L(this,Y);
Q=this.isNew()?"create":(Y.patch?"patch":"update");
if(Q==="patch"){Y.attrs=V
}X=this.sync(Q,this,Y);
if(V&&Y.wait){this.attributes=S
}return X
},destroy:function(R){R=R?P.clone(R):{};
var Q=this;
var U=R.success;
var S=function(){Q.trigger("destroy",Q,Q.collection,R)
};
R.success=function(V){if(R.wait||Q.isNew()){S()
}if(U){U(Q,V,R)
}if(!Q.isNew()){Q.trigger("sync",Q,V,R)
}};
if(this.isNew()){R.success();
return false
}L(this,R);
var T=this.sync("delete",this,R);
if(!R.wait){S()
}return T
},url:function(){var Q=P.result(this,"urlRoot")||P.result(this.collection,"url")||v();
if(this.isNew()){return Q
}return Q+(Q.charAt(Q.length-1)==="/"?"":"/")+encodeURIComponent(this.id)
},parse:function(R,Q){return R
},clone:function(){return new this.constructor(this.attributes)
},isNew:function(){return this.id==null
},isValid:function(Q){return this._validate({},P.extend(Q||{},{validate:true}))
},_validate:function(S,R){if(!R.validate||!this.validate){return true
}S=P.extend({},this.attributes,S);
var Q=this.validationError=this.validate(S,R)||null;
if(!Q){return true
}this.trigger("invalid",this,Q,P.extend(R||{},{validationError:Q}));
return false
}});
var c=["keys","values","pairs","invert","pick","omit"];
P.each(c,function(Q){I.prototype[Q]=function(){var R=q.call(arguments);
R.unshift(this.attributes);
return P[Q].apply(P,R)
}
});
var e=D.Collection=function(R,Q){Q||(Q={});
if(Q.url){this.url=Q.url
}if(Q.model){this.model=Q.model
}if(Q.comparator!==void 0){this.comparator=Q.comparator
}this._reset();
this.initialize.apply(this,arguments);
if(R){this.reset(R,P.extend({silent:true},Q))
}};
var s={add:true,remove:true,merge:true};
var O={add:true,merge:false,remove:false};
P.extend(e.prototype,N,{model:I,initialize:function(){},toJSON:function(Q){return this.map(function(R){return R.toJSON(Q)
})
},sync:function(){return D.sync.apply(this,arguments)
},add:function(R,Q){return this.set(R,P.defaults(Q||{},O))
},remove:function(V,T){V=P.isArray(V)?V.slice():[V];
T||(T={});
var U,Q,S,R;
for(U=0,Q=V.length;
U<Q;
U++){R=this.get(V[U]);
if(!R){continue
}delete this._byId[R.id];
delete this._byId[R.cid];
S=this.indexOf(R);
this.models.splice(S,1);
this.length--;
if(!T.silent){T.index=S;
R.trigger("remove",R,this,T)
}this._removeReference(R)
}return this
},set:function(R,ad){ad=P.defaults(ad||{},s);
if(ad.parse){R=this.parse(R,ad)
}if(!P.isArray(R)){R=R?[R]:[]
}var Y,U,aa,ab,S,Z;
var T=ad.at;
var X=this.comparator&&(T==null)&&ad.sort!==false;
var V=P.isString(this.comparator)?this.comparator:null;
var ac=[],Q=[],W={};
for(Y=0,U=R.length;
Y<U;
Y++){if(!(aa=this._prepareModel(R[Y],ad))){continue
}if(S=this.get(aa)){if(ad.remove){W[S.cid]=true
}if(ad.merge){S.set(aa.attributes,ad);
if(X&&!Z&&S.hasChanged(V)){Z=true
}}}else{if(ad.add){ac.push(aa);
aa.on("all",this._onModelEvent,this);
this._byId[aa.cid]=aa;
if(aa.id!=null){this._byId[aa.id]=aa
}}}}if(ad.remove){for(Y=0,U=this.length;
Y<U;
++Y){if(!W[(aa=this.models[Y]).cid]){Q.push(aa)
}}if(Q.length){this.remove(Q,ad)
}}if(ac.length){if(X){Z=true
}this.length+=ac.length;
if(T!=null){x.apply(this.models,[T,0].concat(ac))
}else{H.apply(this.models,ac)
}}if(Z){this.sort({silent:true})
}if(ad.silent){return this
}for(Y=0,U=ac.length;
Y<U;
Y++){(aa=ac[Y]).trigger("add",aa,this,ad)
}if(Z){this.trigger("sort",this,ad)
}return this
},reset:function(T,R){R||(R={});
for(var S=0,Q=this.models.length;
S<Q;
S++){this._removeReference(this.models[S])
}R.previousModels=this.models;
this._reset();
this.add(T,P.extend({silent:true},R));
if(!R.silent){this.trigger("reset",this,R)
}return this
},push:function(R,Q){R=this._prepareModel(R,Q);
this.add(R,P.extend({at:this.length},Q));
return R
},pop:function(R){var Q=this.at(this.length-1);
this.remove(Q,R);
return Q
},unshift:function(R,Q){R=this._prepareModel(R,Q);
this.add(R,P.extend({at:0},Q));
return R
},shift:function(R){var Q=this.at(0);
this.remove(Q,R);
return Q
},slice:function(R,Q){return this.models.slice(R,Q)
},get:function(Q){if(Q==null){return void 0
}return this._byId[Q.id!=null?Q.id:Q.cid||Q]
},at:function(Q){return this.models[Q]
},where:function(Q,R){if(P.isEmpty(Q)){return R?void 0:[]
}return this[R?"find":"filter"](function(S){for(var T in Q){if(Q[T]!==S.get(T)){return false
}}return true
})
},findWhere:function(Q){return this.where(Q,true)
},sort:function(Q){if(!this.comparator){throw new Error("Cannot sort a set without a comparator")
}Q||(Q={});
if(P.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)
}else{this.models.sort(P.bind(this.comparator,this))
}if(!Q.silent){this.trigger("sort",this,Q)
}return this
},sortedIndex:function(Q,T,R){T||(T=this.comparator);
var S=P.isFunction(T)?T:function(U){return U.get(T)
};
return P.sortedIndex(this.models,Q,S,R)
},pluck:function(Q){return P.invoke(this.models,"get",Q)
},fetch:function(Q){Q=Q?P.clone(Q):{};
if(Q.parse===void 0){Q.parse=true
}var S=Q.success;
var R=this;
Q.success=function(T){var U=Q.reset?"reset":"set";
R[U](T,Q);
if(S){S(R,T,Q)
}R.trigger("sync",R,T,Q)
};
L(this,Q);
return this.sync("read",this,Q)
},create:function(R,Q){Q=Q?P.clone(Q):{};
if(!(R=this._prepareModel(R,Q))){return false
}if(!Q.wait){this.add(R,Q)
}var T=this;
var S=Q.success;
Q.success=function(U){if(Q.wait){T.add(R,Q)
}if(S){S(R,U,Q)
}};
R.save(null,Q);
return R
},parse:function(R,Q){return R
},clone:function(){return new this.constructor(this.models)
},_reset:function(){this.length=0;
this.models=[];
this._byId={}
},_prepareModel:function(S,R){if(S instanceof I){if(!S.collection){S.collection=this
}return S
}R||(R={});
R.collection=this;
var Q=new this.model(S,R);
if(!Q._validate(S,R)){this.trigger("invalid",this,S,R);
return false
}return Q
},_removeReference:function(Q){if(this===Q.collection){delete Q.collection
}Q.off("all",this._onModelEvent,this)
},_onModelEvent:function(S,R,T,Q){if((S==="add"||S==="remove")&&T!==this){return
}if(S==="destroy"){this.remove(R,Q)
}if(R&&S==="change:"+R.idAttribute){delete this._byId[R.previous(R.idAttribute)];
if(R.id!=null){this._byId[R.id]=R
}}this.trigger.apply(this,arguments)
}});
var C=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];
P.each(C,function(Q){e.prototype[Q]=function(){var R=q.call(arguments);
R.unshift(this.models);
return P[Q].apply(P,R)
}
});
var n=["groupBy","countBy","sortBy"];
P.each(n,function(Q){e.prototype[Q]=function(T,R){var S=P.isFunction(T)?T:function(U){return U.get(T)
};
return P[Q](this.models,S,R)
}
});
var K=D.View=function(Q){this.cid=P.uniqueId("view");
this._configure(Q||{});
this._ensureElement();
this.initialize.apply(this,arguments);
this.delegateEvents()
};
var z=/^(\S+)\s*(.*)$/;
var h=["model","collection","el","id","attributes","className","tagName","events"];
P.extend(K.prototype,N,{tagName:"div",$:function(Q){return this.$el.find(Q)
},initialize:function(){},render:function(){return this
},remove:function(){this.$el.remove();
this.stopListening();
return this
},setElement:function(Q,R){if(this.$el){this.undelegateEvents()
}this.$el=Q instanceof D.$?Q:D.$(Q);
this.el=this.$el[0];
if(R!==false){this.delegateEvents()
}return this
},delegateEvents:function(U){if(!(U||(U=P.result(this,"events")))){return this
}this.undelegateEvents();
for(var T in U){var V=U[T];
if(!P.isFunction(V)){V=this[U[T]]
}if(!V){continue
}var S=T.match(z);
var R=S[1],Q=S[2];
V=P.bind(V,this);
R+=".delegateEvents"+this.cid;
if(Q===""){this.$el.on(R,V)
}else{this.$el.on(R,Q,V)
}}return this
},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);
return this
},_configure:function(Q){if(this.options){Q=P.extend({},P.result(this,"options"),Q)
}P.extend(this,P.pick(Q,h));
this.options=Q
},_ensureElement:function(){if(!this.el){var Q=P.extend({},P.result(this,"attributes"));
if(this.id){Q.id=P.result(this,"id")
}if(this.className){Q["class"]=P.result(this,"className")
}var R=D.$("<"+P.result(this,"tagName")+">").attr(Q);
this.setElement(R,false)
}else{this.setElement(P.result(this,"el"),false)
}}});
D.sync=function(W,R,Q){var T=m[W];
P.defaults(Q||(Q={}),{emulateHTTP:D.emulateHTTP,emulateJSON:D.emulateJSON});
var V={type:T,dataType:"json"};
if(!Q.url){V.url=P.result(R,"url")||v()
}if(Q.data==null&&R&&(W==="create"||W==="update"||W==="patch")){V.contentType="application/json";
V.data=JSON.stringify(Q.attrs||R.toJSON(Q))
}if(Q.emulateJSON){V.contentType="application/x-www-form-urlencoded";
V.data=V.data?{model:V.data}:{}
}if(Q.emulateHTTP&&(T==="PUT"||T==="DELETE"||T==="PATCH")){V.type="POST";
if(Q.emulateJSON){V.data._method=T
}var S=Q.beforeSend;
Q.beforeSend=function(X){X.setRequestHeader("X-HTTP-Method-Override",T);
if(S){return S.apply(this,arguments)
}}
}if(V.type!=="GET"&&!Q.emulateJSON){V.processData=false
}if(V.type==="PATCH"&&window.ActiveXObject&&!(window.external&&window.external.msActiveXFilteringEnabled)){V.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")
}
}var U=Q.xhr=D.ajax(P.extend(V,Q));
R.trigger("request",R,U,Q);
return U
};
var m={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};
D.ajax=function(){return D.$.ajax.apply(D.$,arguments)
};
var t=D.Router=function(Q){Q||(Q={});
if(Q.routes){this.routes=Q.routes
}this._bindRoutes();
this.initialize.apply(this,arguments)
};
var u=/\((.*?)\)/g;
var w=/(\(\?)?:\w+/g;
var f=/\*\w+/g;
var k=/[\-{}\[\]+?.,\\\^$|#\s]/g;
P.extend(t.prototype,N,{initialize:function(){},route:function(R,S,T){if(!P.isRegExp(R)){R=this._routeToRegExp(R)
}if(P.isFunction(S)){T=S;
S=""
}if(!T){T=this[S]
}var Q=this;
D.history.route(R,function(V){var U=Q._extractParameters(R,V);
T&&T.apply(Q,U);
Q.trigger.apply(Q,["route:"+S].concat(U));
Q.trigger("route",S,U);
D.history.trigger("route",Q,S,U)
});
return this
},navigate:function(R,Q){D.history.navigate(R,Q);
return this
},_bindRoutes:function(){if(!this.routes){return
}this.routes=P.result(this,"routes");
var R,Q=P.keys(this.routes);
while((R=Q.pop())!=null){this.route(R,this.routes[R])
}},_routeToRegExp:function(Q){Q=Q.replace(k,"\\$&").replace(u,"(?:$1)?").replace(w,function(S,R){return R?S:"([^/]+)"
}).replace(f,"(.*?)");
return new RegExp("^"+Q+"$")
},_extractParameters:function(Q,R){var S=Q.exec(R).slice(1);
return P.map(S,function(T){return T?decodeURIComponent(T):null
})
}});
var l=D.History=function(){this.handlers=[];
P.bindAll(this,"checkUrl");
if(typeof window!=="undefined"){this.location=window.location;
this.history=window.history
}};
var E=/^[#\/]|\s+$/g;
var i=/^\/+|\/+$/g;
var M=/msie [\w.]+/;
var p=/\/$/;
l.started=false;
P.extend(l.prototype,N,{interval:50,getHash:function(R){var Q=(R||this).location.href.match(/#(.*)$/);
return Q?Q[1]:""
},getFragment:function(S,R){if(S==null){if(this._hasPushState||!this._wantsHashChange||R){S=this.location.pathname;
var Q=this.root.replace(p,"");
if(!S.indexOf(Q)){S=S.substr(Q.length)
}}else{S=this.getHash()
}}return S.replace(E,"")
},start:function(S){if(l.started){throw new Error("Backbone.history has already been started")
}l.started=true;
this.options=P.extend({},{root:"/"},this.options,S);
this.root=this.options.root;
this._wantsHashChange=this.options.hashChange!==false;
this._wantsPushState=!!this.options.pushState;
this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);
var R=this.getFragment();
var Q=document.documentMode;
var U=(M.exec(navigator.userAgent.toLowerCase())&&(!Q||Q<=7));
this.root=("/"+this.root+"/").replace(i,"/");
if(U&&this._wantsHashChange){this.iframe=D.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;
this.navigate(R)
}if(this._hasPushState){D.$(window).on("popstate",this.checkUrl)
}else{if(this._wantsHashChange&&("onhashchange" in window)&&!U){D.$(window).on("hashchange",this.checkUrl)
}else{if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)
}}}this.fragment=R;
var V=this.location;
var T=V.pathname.replace(/[^\/]$/,"$&/")===this.root;
if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!T){this.fragment=this.getFragment(null,true);
this.location.replace(this.root+this.location.search+"#"+this.fragment);
return true
}else{if(this._wantsPushState&&this._hasPushState&&T&&V.hash){this.fragment=this.getHash().replace(E,"");
this.history.replaceState({},document.title,this.root+this.fragment+V.search)
}}if(!this.options.silent){return this.loadUrl()
}},stop:function(){D.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);
clearInterval(this._checkUrlInterval);
l.started=false
},route:function(Q,R){this.handlers.unshift({route:Q,callback:R})
},checkUrl:function(R){var Q=this.getFragment();
if(Q===this.fragment&&this.iframe){Q=this.getFragment(this.getHash(this.iframe))
}if(Q===this.fragment){return false
}if(this.iframe){this.navigate(Q)
}this.loadUrl()||this.loadUrl(this.getHash())
},loadUrl:function(S){var R=this.fragment=this.getFragment(S);
var Q=P.any(this.handlers,function(T){if(T.route.test(R)){T.callback(R);
return true
}});
return Q
},navigate:function(S,R){if(!l.started){return false
}if(!R||R===true){R={trigger:R}
}S=this.getFragment(S||"");
if(this.fragment===S){return
}this.fragment=S;
var Q=this.root+S;
if(this._hasPushState){this.history[R.replace?"replaceState":"pushState"]({},document.title,Q)
}else{if(this._wantsHashChange){this._updateHash(this.location,S,R.replace);
if(this.iframe&&(S!==this.getFragment(this.getHash(this.iframe)))){if(!R.replace){this.iframe.document.open().close()
}this._updateHash(this.iframe.location,S,R.replace)
}}else{return this.location.assign(Q)
}}if(R.trigger){this.loadUrl(S)
}},_updateHash:function(Q,S,T){if(T){var R=Q.href.replace(/(javascript:|#).*$/,"");
Q.replace(R+"#"+S)
}else{Q.hash="#"+S
}}});
D.history=new l;
var o=function(Q,S){var R=this;
var U;
if(Q&&P.has(Q,"constructor")){U=Q.constructor
}else{U=function(){return R.apply(this,arguments)
}
}P.extend(U,R,S);
var T=function(){this.constructor=U
};
T.prototype=R.prototype;
U.prototype=new T;
if(Q){P.extend(U.prototype,Q)
}U.__super__=R.prototype;
return U
};
I.extend=e.extend=t.extend=K.extend=l.extend=o;
var v=function(){throw new Error('A "url" property or function must be specified')
};
var L=function(S,R){var Q=R.error;
R.error=function(T){if(Q){Q(S,T,R)
}S.trigger("error",S,T,R)
}
}
}).call(this);
(function(){var c=Backbone.View.prototype.remove;
_.extend(Backbone.View.prototype,{__render:function(e){var f=_.extend({},e);
f.self=this;
this.$el.html(this.template(_.extend(f,this.__renderData(f))));
return this
},__renderData:function(e){return{}
},render:function(d){if(this.model){return this.__render(this.model.toJSON())
}if(this.collection){return this.__render(this.collection.toJSON())
}this.__render(d||{});
return this
},appendSubView:function(d){if(!this.__subview){this.__subview=[]
}this.__subview.push(d);
return d
},__cleanup:function(){var d;
if(this.__subview){while(d=this.__subview.shift()){d.remove()
}}return this
},remove:function(){this.__cleanup();
return c.call(this)
}})
})();
(function(){var d=this;
var i=i||{};
i.WEBGL_RENDERER=0;
i.CANVAS_RENDERER=1;
i.VERSION="v1.5.1";
i.blendModes={NORMAL:0,ADD:1,MULTIPLY:2,SCREEN:3,OVERLAY:4,DARKEN:5,LIGHTEN:6,COLOR_DODGE:7,COLOR_BURN:8,HARD_LIGHT:9,SOFT_LIGHT:10,DIFFERENCE:11,EXCLUSION:12,HUE:13,SATURATION:14,COLOR:15,LUMINOSITY:16};
i.scaleModes={DEFAULT:0,LINEAR:0,NEAREST:1};
i.INTERACTION_FREQUENCY=30;
i.AUTO_PREVENT_DEFAULT=true;
i.RAD_TO_DEG=180/Math.PI;
i.DEG_TO_RAD=Math.PI/180;
i.Point=function(j,k){this.x=j||0;
this.y=k||0
};
i.Point.prototype.clone=function(){return new i.Point(this.x,this.y)
};
i.Point.prototype.constructor=i.Point;
i.Point.prototype.set=function(j,k){this.x=j||0;
this.y=k||((k!==0)?this.x:0)
};
i.Rectangle=function(k,m,l,j){this.x=k||0;
this.y=m||0;
this.width=l||0;
this.height=j||0
};
i.Rectangle.prototype.clone=function(){return new i.Rectangle(this.x,this.y,this.width,this.height)
};
i.Rectangle.prototype.contains=function(j,m){if(this.width<=0||this.height<=0){return false
}var k=this.x;
if(j>=k&&j<=k+this.width){var l=this.y;
if(m>=l&&m<=l+this.height){return true
}}return false
};
i.Rectangle.prototype.constructor=i.Rectangle;
i.EmptyRectangle=new i.Rectangle(0,0,0,0);
i.Polygon=function(l){if(!(l instanceof Array)){l=Array.prototype.slice.call(arguments)
}if(typeof l[0]==="number"){var m=[];
for(var k=0,j=l.length;
k<j;
k+=2){m.push(new i.Point(l[k],l[k+1]))
}l=m
}this.points=l
};
i.Polygon.prototype.clone=function(){var k=[];
for(var j=0;
j<this.points.length;
j++){k.push(this.points[j].clone())
}return new i.Polygon(k)
};
i.Polygon.prototype.contains=function(u,t){var m=false;
for(var p=0,o=this.points.length-1;
p<this.points.length;
o=p++){var s=this.points[p].x,n=this.points[p].y,q=this.points[o].x,l=this.points[o].y,k=((n>t)!==(l>t))&&(u<(q-s)*(t-n)/(l-n)+s);
if(k){m=!m
}}return m
};
i.Polygon.prototype.constructor=i.Polygon;
i.Circle=function(k,l,j){this.x=k||0;
this.y=l||0;
this.radius=j||0
};
i.Circle.prototype.clone=function(){return new i.Circle(this.x,this.y,this.radius)
};
i.Circle.prototype.contains=function(j,n){if(this.radius<=0){return false
}var m=(this.x-j),l=(this.y-n),k=this.radius*this.radius;
m*=m;
l*=l;
return(m+l<=k)
};
i.Circle.prototype.constructor=i.Circle;
i.Ellipse=function(k,m,l,j){this.x=k||0;
this.y=m||0;
this.width=l||0;
this.height=j||0
};
i.Ellipse.prototype.clone=function(){return new i.Ellipse(this.x,this.y,this.width,this.height)
};
i.Ellipse.prototype.contains=function(k,m){if(this.width<=0||this.height<=0){return false
}var l=((k-this.x)/this.width),j=((m-this.y)/this.height);
l*=l;
j*=j;
return(l+j<=1)
};
i.Ellipse.prototype.getBounds=function(){return new i.Rectangle(this.x,this.y,this.width,this.height)
};
i.Ellipse.prototype.constructor=i.Ellipse;
i.determineMatrixArrayType=function(){return(typeof Float32Array!=="undefined")?Float32Array:Array
};
i.Matrix2=i.determineMatrixArrayType();
i.Matrix=function(){this.a=1;
this.b=0;
this.c=0;
this.d=1;
this.tx=0;
this.ty=0
};
i.Matrix.prototype.fromArray=function(j){this.a=j[0];
this.b=j[1];
this.c=j[3];
this.d=j[4];
this.tx=j[2];
this.ty=j[5]
};
i.Matrix.prototype.toArray=function(j){if(!this.array){this.array=new Float32Array(9)
}var k=this.array;
if(j){this.array[0]=this.a;
this.array[1]=this.c;
this.array[2]=0;
this.array[3]=this.b;
this.array[4]=this.d;
this.array[5]=0;
this.array[6]=this.tx;
this.array[7]=this.ty;
this.array[8]=1
}else{this.array[0]=this.a;
this.array[1]=this.b;
this.array[2]=this.tx;
this.array[3]=this.c;
this.array[4]=this.d;
this.array[5]=this.ty;
this.array[6]=0;
this.array[7]=0;
this.array[8]=1
}return k
};
i.identityMatrix=new i.Matrix();
i.DisplayObject=function(){this.position=new i.Point();
this.scale=new i.Point(1,1);
this.pivot=new i.Point(0,0);
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
this.worldTransform=new i.Matrix();
this.color=[];
this.dynamic=true;
this._sr=0;
this._cr=1;
this.filterArea=new i.Rectangle(0,0,1,1);
this._bounds=new i.Rectangle(0,0,1,1);
this._currentBounds=null;
this._mask=null
};
i.DisplayObject.prototype.constructor=i.DisplayObject;
i.DisplayObject.prototype.setInteractive=function(j){this.interactive=j
};
Object.defineProperty(i.DisplayObject.prototype,"interactive",{get:function(){return this._interactive
},set:function(j){this._interactive=j;
if(this.stage){this.stage.dirty=true
}}});
Object.defineProperty(i.DisplayObject.prototype,"worldVisible",{get:function(){var j=this;
do{if(!j.visible){return false
}j=j.parent
}while(j);
return true
}});
Object.defineProperty(i.DisplayObject.prototype,"mask",{get:function(){return this._mask
},set:function(j){if(this._mask){this._mask.isMask=false
}this._mask=j;
if(this._mask){this._mask.isMask=true
}}});
Object.defineProperty(i.DisplayObject.prototype,"filters",{get:function(){return this._filters
},set:function(n){if(n){var m=[];
for(var l=0;
l<n.length;
l++){var o=n[l].passes;
for(var k=0;
k<o.length;
k++){m.push(o[k])
}}this._filterBlock={target:this,filterPasses:m}
}this._filters=n
}});
i.DisplayObject.prototype.updateTransform=function(){if(this.rotation!==this.rotationCache){this.rotationCache=this.rotation;
this._sr=Math.sin(this.rotation);
this._cr=Math.cos(this.rotation)
}var m=this.parent.worldTransform;
var j=this.worldTransform;
var u=this.pivot.x;
var t=this.pivot.y;
var p=this._cr*this.scale.x,o=-this._sr*this.scale.y,x=this._sr*this.scale.x,w=this._cr*this.scale.y,n=this.position.x-p*u-t*o,v=this.position.y-w*t-u*x,s=m.a,q=m.b,l=m.c,k=m.d;
j.a=s*p+q*x;
j.b=s*o+q*w;
j.tx=s*n+q*v+m.tx;
j.c=l*p+k*x;
j.d=l*o+k*w;
j.ty=l*n+k*v+m.ty;
this.worldAlpha=this.alpha*this.parent.worldAlpha
};
i.DisplayObject.prototype.getBounds=function(j){j=j;
return i.EmptyRectangle
};
i.DisplayObject.prototype.getLocalBounds=function(){return this.getBounds(i.identityMatrix)
};
i.DisplayObject.prototype.setStageReference=function(j){this.stage=j;
if(this._interactive){this.stage.dirty=true
}};
i.DisplayObject.prototype._renderWebGL=function(j){j=j
};
i.DisplayObject.prototype._renderCanvas=function(j){j=j
};
Object.defineProperty(i.DisplayObject.prototype,"x",{get:function(){return this.position.x
},set:function(j){this.position.x=j
}});
Object.defineProperty(i.DisplayObject.prototype,"y",{get:function(){return this.position.y
},set:function(j){this.position.y=j
}});
i.DisplayObjectContainer=function(){i.DisplayObject.call(this);
this.children=[]
};
i.DisplayObjectContainer.prototype=Object.create(i.DisplayObject.prototype);
i.DisplayObjectContainer.prototype.constructor=i.DisplayObjectContainer;
i.DisplayObjectContainer.prototype.addChild=function(j){this.addChildAt(j,this.children.length)
};
i.DisplayObjectContainer.prototype.addChildAt=function(k,j){if(j>=0&&j<=this.children.length){if(k.parent){k.parent.removeChild(k)
}k.parent=this;
this.children.splice(j,0,k);
if(this.stage){k.setStageReference(this.stage)
}}else{throw new Error(k+" The index "+j+" supplied is out of bounds "+this.children.length)
}};
i.DisplayObjectContainer.prototype.swapChildren=function(m,j){if(m===j){return
}var l=this.children.indexOf(m);
var k=this.children.indexOf(j);
if(l<0||k<0){throw new Error("swapChildren: Both the supplied DisplayObjects must be a child of the caller.")
}this.children[l]=j;
this.children[k]=m
};
i.DisplayObjectContainer.prototype.getChildAt=function(j){if(j>=0&&j<this.children.length){return this.children[j]
}else{throw new Error("The supplied DisplayObjects must be a child of the caller "+this)
}};
i.DisplayObjectContainer.prototype.removeChild=function(k){var j=this.children.indexOf(k);
if(j!==-1){if(this.stage){k.removeStageReference()
}k.parent=undefined;
this.children.splice(j,1)
}else{throw new Error(k+" The supplied DisplayObject must be a child of the caller "+this)
}};
i.DisplayObjectContainer.prototype.updateTransform=function(){if(!this.visible){return
}i.DisplayObject.prototype.updateTransform.call(this);
for(var l=0,k=this.children.length;
l<k;
l++){this.children[l].updateTransform()
}};
i.DisplayObjectContainer.prototype.getBounds=function(w){if(this.children.length===0){return i.EmptyRectangle
}if(w){var v=this.worldTransform;
this.worldTransform=w;
this.updateTransform();
this.worldTransform=v
}var q=Infinity;
var p=Infinity;
var m=-Infinity;
var l=-Infinity;
var s;
var y;
var x;
var n=false;
for(var u=0,t=this.children.length;
u<t;
u++){var o=this.children[u];
if(!o.visible){continue
}n=true;
s=this.children[u].getBounds(w);
q=q<s.x?q:s.x;
p=p<s.y?p:s.y;
y=s.width+s.x;
x=s.height+s.y;
m=m>y?m:y;
l=l>x?l:x
}if(!n){return i.EmptyRectangle
}var k=this._bounds;
k.x=q;
k.y=p;
k.width=m-q;
k.height=l-p;
return k
};
i.DisplayObjectContainer.prototype.getLocalBounds=function(){var k=this.worldTransform;
this.worldTransform=i.identityMatrix;
for(var m=0,l=this.children.length;
m<l;
m++){this.children[m].updateTransform()
}var n=this.getBounds();
this.worldTransform=k;
return n
};
i.DisplayObjectContainer.prototype.setStageReference=function(l){this.stage=l;
if(this._interactive){this.stage.dirty=true
}for(var m=0,k=this.children.length;
m<k;
m++){var n=this.children[m];
n.setStageReference(l)
}};
i.DisplayObjectContainer.prototype.removeStageReference=function(){for(var l=0,k=this.children.length;
l<k;
l++){var m=this.children[l];
m.removeStageReference()
}if(this._interactive){this.stage.dirty=true
}this.stage=null
};
i.DisplayObjectContainer.prototype._renderWebGL=function(m){if(!this.visible||this.alpha<=0){return
}var l,k;
if(this._mask||this._filters){if(this._mask){m.spriteBatch.stop();
m.maskManager.pushMask(this.mask,m);
m.spriteBatch.start()
}if(this._filters){m.spriteBatch.flush();
m.filterManager.pushFilter(this._filterBlock)
}for(l=0,k=this.children.length;
l<k;
l++){this.children[l]._renderWebGL(m)
}m.spriteBatch.stop();
if(this._filters){m.filterManager.popFilter()
}if(this._mask){m.maskManager.popMask(m)
}m.spriteBatch.start()
}else{for(l=0,k=this.children.length;
l<k;
l++){this.children[l]._renderWebGL(m)
}}};
i.DisplayObjectContainer.prototype._renderCanvas=function(m){if(this.visible===false||this.alpha===0){return
}if(this._mask){m.maskManager.pushMask(this._mask,m.context)
}for(var l=0,k=this.children.length;
l<k;
l++){var n=this.children[l];
n._renderCanvas(m)
}if(this._mask){m.maskManager.popMask(m.context)
}};
i.Sprite=function(j){i.DisplayObjectContainer.call(this);
this.anchor=new i.Point();
this.texture=j;
this._width=0;
this._height=0;
this.tint=16777215;
this.blendMode=i.blendModes.NORMAL;
if(j.baseTexture.hasLoaded){this.onTextureUpdate()
}else{this.onTextureUpdateBind=this.onTextureUpdate.bind(this);
this.texture.addEventListener("update",this.onTextureUpdateBind)
}this.renderable=true
};
i.Sprite.prototype=Object.create(i.DisplayObjectContainer.prototype);
i.Sprite.prototype.constructor=i.Sprite;
Object.defineProperty(i.Sprite.prototype,"width",{get:function(){return this.scale.x*this.texture.frame.width
},set:function(j){this.scale.x=j/this.texture.frame.width;
this._width=j
}});
Object.defineProperty(i.Sprite.prototype,"height",{get:function(){return this.scale.y*this.texture.frame.height
},set:function(j){this.scale.y=j/this.texture.frame.height;
this._height=j
}});
i.Sprite.prototype.setTexture=function(j){if(this.texture.baseTexture!==j.baseTexture){this.textureChange=true;
this.texture=j
}else{this.texture=j
}this.cachedTint=16777215;
this.updateFrame=true
};
i.Sprite.prototype.onTextureUpdate=function(){if(this._width){this.scale.x=this._width/this.texture.frame.width
}if(this._height){this.scale.y=this._height/this.texture.frame.height
}this.updateFrame=true
};
i.Sprite.prototype.getBounds=function(x){var u=this.texture.frame.width;
var t=this.texture.frame.height;
var s=u*(1-this.anchor.x);
var q=u*-this.anchor.x;
var p=t*(1-this.anchor.y);
var o=t*-this.anchor.y;
var v=x||this.worldTransform;
var J=v.a;
var H=v.c;
var G=v.b;
var E=v.d;
var K=v.tx;
var I=v.ty;
var A=J*q+G*o+K;
var m=E*o+H*q+I;
var z=J*s+G*o+K;
var l=E*o+H*s+I;
var y=J*s+G*p+K;
var k=E*p+H*s+I;
var w=J*q+G*p+K;
var j=E*p+H*q+I;
var D=-Infinity;
var B=-Infinity;
var F=Infinity;
var C=Infinity;
F=A<F?A:F;
F=z<F?z:F;
F=y<F?y:F;
F=w<F?w:F;
C=m<C?m:C;
C=l<C?l:C;
C=k<C?k:C;
C=j<C?j:C;
D=A>D?A:D;
D=z>D?z:D;
D=y>D?y:D;
D=w>D?w:D;
B=m>B?m:B;
B=l>B?l:B;
B=k>B?k:B;
B=j>B?j:B;
var n=this._bounds;
n.x=F;
n.width=D-F;
n.y=C;
n.height=B-C;
this._currentBounds=n;
return n
};
i.Sprite.prototype._renderWebGL=function(n){if(!this.visible||this.alpha<=0){return
}var m,l;
if(this._mask||this._filters){var k=n.spriteBatch;
if(this._mask){k.stop();
n.maskManager.pushMask(this.mask,n);
k.start()
}if(this._filters){k.flush();
n.filterManager.pushFilter(this._filterBlock)
}k.render(this);
for(m=0,l=this.children.length;
m<l;
m++){this.children[m]._renderWebGL(n)
}k.stop();
if(this._filters){n.filterManager.popFilter()
}if(this._mask){n.maskManager.popMask(n)
}k.start()
}else{n.spriteBatch.render(this);
for(m=0,l=this.children.length;
m<l;
m++){this.children[m]._renderWebGL(n)
}}};
i.Sprite.prototype._renderCanvas=function(t){if(this.visible===false||this.alpha===0){return
}var m=this.texture.frame;
var k=t.context;
var s=this.texture;
if(this.blendMode!==t.currentBlendMode){t.currentBlendMode=this.blendMode;
k.globalCompositeOperation=i.blendModesCanvas[t.currentBlendMode]
}if(this._mask){t.maskManager.pushMask(this._mask,t.context)
}if(m&&m.width&&m.height&&s.baseTexture.source){k.globalAlpha=this.worldAlpha;
var n=this.worldTransform;
if(t.roundPixels){k.setTransform(n.a,n.c,n.b,n.d,n.tx||0,n.ty||0)
}else{k.setTransform(n.a,n.c,n.b,n.d,n.tx,n.ty)
}if(t.smoothProperty&&t.scaleMode!==this.texture.baseTexture.scaleMode){t.scaleMode=this.texture.baseTexture.scaleMode;
k[t.smoothProperty]=(t.scaleMode===i.scaleModes.LINEAR)
}if(this.tint!==16777215){if(this.cachedTint!==this.tint){if(!s.baseTexture.hasLoaded){return
}this.cachedTint=this.tint;
this.tintedTexture=i.CanvasTinter.getTintedTexture(this,this.tint)
}k.drawImage(this.tintedTexture,0,0,m.width,m.height,(this.anchor.x)*-m.width,(this.anchor.y)*-m.height,m.width,m.height)
}else{if(s.trim){var o=s.trim;
k.drawImage(this.texture.baseTexture.source,m.x,m.y,m.width,m.height,o.x-this.anchor.x*o.width,o.y-this.anchor.y*o.height,m.width,m.height)
}else{k.drawImage(this.texture.baseTexture.source,m.x,m.y,m.width,m.height,(this.anchor.x)*-m.width,(this.anchor.y)*-m.height,m.width,m.height)
}}}for(var q=0,p=this.children.length;
q<p;
q++){var l=this.children[q];
l._renderCanvas(t)
}if(this._mask){t.maskManager.popMask(t.context)
}};
i.Sprite.fromFrame=function(k){var j=i.TextureCache[k];
if(!j){throw new Error('The frameId "'+k+'" does not exist in the texture cache'+this)
}return new i.Sprite(j)
};
i.Sprite.fromImage=function(k,j,l){var m=i.Texture.fromImage(k,j,l);
return new i.Sprite(m)
};
i.SpriteBatch=function(j){i.DisplayObjectContainer.call(this);
this.textureThing=j;
this.ready=false
};
i.SpriteBatch.prototype=Object.create(i.DisplayObjectContainer.prototype);
i.SpriteBatch.constructor=i.SpriteBatch;
i.SpriteBatch.prototype.initWebGL=function(j){this.fastSpriteBatch=new i.WebGLFastSpriteBatch(j);
this.ready=true
};
i.SpriteBatch.prototype.updateTransform=function(){i.DisplayObject.prototype.updateTransform.call(this)
};
i.SpriteBatch.prototype._renderWebGL=function(j){if(!this.visible||this.alpha<=0||!this.children.length){return
}if(!this.ready){this.initWebGL(j.gl)
}j.spriteBatch.stop();
j.shaderManager.activateShader(j.shaderManager.fastShader);
this.fastSpriteBatch.begin(this,j);
this.fastSpriteBatch.render(this);
j.shaderManager.activateShader(j.shaderManager.defaultShader);
j.spriteBatch.start()
};
i.SpriteBatch.prototype._renderCanvas=function(u){var j=u.context;
j.globalAlpha=this.worldAlpha;
var m=this.worldTransform;
if(u.roundPixels){j.setTransform(m.a,m.c,m.b,m.d,Math.floor(m.tx),Math.floor(m.ty))
}else{j.setTransform(m.a,m.c,m.b,m.d,m.tx,m.ty)
}j.save();
for(var n=0;
n<this.children.length;
n++){var k=this.children[n];
var p=k.texture;
var l=p.frame;
j.globalAlpha=this.worldAlpha*k.alpha;
if(k.rotation%(Math.PI*2)===0){j.drawImage(p.baseTexture.source,l.x,l.y,l.width,l.height,((k.anchor.x)*(-l.width*k.scale.x)+k.position.x+0.5)|0,((k.anchor.y)*(-l.height*k.scale.y)+k.position.y+0.5)|0,l.width*k.scale.x,l.height*k.scale.y)
}else{i.DisplayObject.prototype.updateTransform.call(k);
m=k.localTransform;
if(this.rotation!==this.rotationCache){this.rotationCache=this.rotation;
this._sr=Math.sin(this.rotation);
this._cr=Math.cos(this.rotation)
}var t=k._cr*k.scale.x,s=-k._sr*k.scale.y,q=k._sr*k.scale.x,o=k._cr*k.scale.y;
j.setTransform(t,q,s,o,k.position.x,k.position.y);
j.drawImage(p.baseTexture.source,l.x,l.y,l.width,l.height,((k.anchor.x)*(-l.width)+0.5)|0,((k.anchor.y)*(-l.height)+0.5)|0,l.width,l.height)
}}j.restore()
};
i.MovieClip=function(j){i.Sprite.call(this,j[0]);
this.textures=j;
this.animationSpeed=1;
this.loop=true;
this.onComplete=null;
this.currentFrame=0;
this.playing=false
};
i.MovieClip.prototype=Object.create(i.Sprite.prototype);
i.MovieClip.prototype.constructor=i.MovieClip;
Object.defineProperty(i.MovieClip.prototype,"totalFrames",{get:function(){return this.textures.length
}});
i.MovieClip.prototype.stop=function(){this.playing=false
};
i.MovieClip.prototype.play=function(){this.playing=true
};
i.MovieClip.prototype.gotoAndStop=function(k){this.playing=false;
this.currentFrame=k;
var j=(this.currentFrame+0.5)|0;
this.setTexture(this.textures[j%this.textures.length])
};
i.MovieClip.prototype.gotoAndPlay=function(j){this.currentFrame=j;
this.playing=true
};
i.MovieClip.prototype.updateTransform=function(){i.Sprite.prototype.updateTransform.call(this);
if(!this.playing){return
}this.currentFrame+=this.animationSpeed;
var j=(this.currentFrame+0.5)|0;
if(this.loop||j<this.textures.length){this.setTexture(this.textures[j%this.textures.length])
}else{if(j>=this.textures.length){this.gotoAndStop(this.textures.length-1);
if(this.onComplete){this.onComplete()
}}}};
i.FilterBlock=function(){this.visible=true;
this.renderable=true
};
i.Text=function(k,j){this.canvas=document.createElement("canvas");
this.context=this.canvas.getContext("2d");
i.Sprite.call(this,i.Texture.fromCanvas(this.canvas));
this.setText(k);
this.setStyle(j);
this.updateText();
this.dirty=false
};
i.Text.prototype=Object.create(i.Sprite.prototype);
i.Text.prototype.constructor=i.Text;
i.Text.prototype.setStyle=function(j){j=j||{};
j.font=j.font||"bold 20pt Arial";
j.fill=j.fill||"black";
j.align=j.align||"left";
j.stroke=j.stroke||"black";
j.strokeThickness=j.strokeThickness||0;
j.wordWrap=j.wordWrap||false;
j.wordWrapWidth=j.wordWrapWidth||100;
this.style=j;
this.dirty=true
};
i.Text.prototype.setText=function(j){this.text=j.toString()||" ";
this.dirty=true
};
i.Text.prototype.updateText=function(){this.context.font=this.style.font;
var o=this.text;
if(this.style.wordWrap){o=this.wordWrap(this.text)
}var n=o.split(/(?:\r\n|\r|\n)/);
var l=[];
var k=0;
for(var p=0;
p<n.length;
p++){var j=this.context.measureText(n[p]).width;
l[p]=j;
k=Math.max(k,j)
}this.canvas.width=k+this.style.strokeThickness;
var q=this.determineFontHeight("font: "+this.style.font+";")+this.style.strokeThickness;
this.canvas.height=q*n.length;
if(navigator.isCocoonJS){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
}this.context.fillStyle=this.style.fill;
this.context.font=this.style.font;
this.context.strokeStyle=this.style.stroke;
this.context.lineWidth=this.style.strokeThickness;
this.context.textBaseline="top";
for(p=0;
p<n.length;
p++){var m=new i.Point(this.style.strokeThickness/2,this.style.strokeThickness/2+p*q);
if(this.style.align==="right"){m.x+=k-l[p]
}else{if(this.style.align==="center"){m.x+=(k-l[p])/2
}}if(this.style.stroke&&this.style.strokeThickness){this.context.strokeText(n[p],m.x,m.y)
}if(this.style.fill){this.context.fillText(n[p],m.x,m.y)
}}this.updateTexture()
};
i.Text.prototype.updateTexture=function(){this.texture.baseTexture.width=this.canvas.width;
this.texture.baseTexture.height=this.canvas.height;
this.texture.frame.width=this.canvas.width;
this.texture.frame.height=this.canvas.height;
this._width=this.canvas.width;
this._height=this.canvas.height;
this.requiresUpdate=true
};
i.Text.prototype._renderWebGL=function(j){if(this.requiresUpdate){this.requiresUpdate=false;
i.updateWebGLTexture(this.texture.baseTexture,j.gl)
}i.Sprite.prototype._renderWebGL.call(this,j)
};
i.Text.prototype.updateTransform=function(){if(this.dirty){this.updateText();
this.dirty=false
}i.Sprite.prototype.updateTransform.call(this)
};
i.Text.prototype.determineFontHeight=function(n){var k=i.Text.heightCache[n];
if(!k){var j=document.getElementsByTagName("body")[0];
var m=document.createElement("div");
var l=document.createTextNode("M");
m.appendChild(l);
m.setAttribute("style",n+";position:absolute;top:0;left:0");
j.appendChild(m);
k=m.offsetHeight;
i.Text.heightCache[n]=k;
j.removeChild(m)
}return k
};
i.Text.prototype.wordWrap=function(p){var t="";
var s=p.split("\n");
for(var m=0;
m<s.length;
m++){var l=this.style.wordWrapWidth;
var o=s[m].split(" ");
for(var k=0;
k<o.length;
k++){var q=this.context.measureText(o[k]).width;
var n=q+this.context.measureText(" ").width;
if(n>l){if(k>0){t+="\n"
}t+=o[k]+" ";
l=this.style.wordWrapWidth-q
}else{l-=n;
t+=o[k]+" "
}}if(m<s.length-1){t+="\n"
}}return t
};
i.Text.prototype.destroy=function(j){if(j){this.texture.destroy()
}};
i.Text.heightCache={};
i.BitmapText=function(k,j){i.DisplayObjectContainer.call(this);
this._pool=[];
this.setText(k);
this.setStyle(j);
this.updateText();
this.dirty=false
};
i.BitmapText.prototype=Object.create(i.DisplayObjectContainer.prototype);
i.BitmapText.prototype.constructor=i.BitmapText;
i.BitmapText.prototype.setText=function(j){this.text=j||" ";
this.dirty=true
};
i.BitmapText.prototype.setStyle=function(k){k=k||{};
k.align=k.align||"left";
this.style=k;
var j=k.font.split(" ");
this.fontName=j[j.length-1];
this.fontSize=j.length>=2?parseInt(j[j.length-2],10):i.BitmapText.fonts[this.fontName].size;
this.dirty=true;
this.tint=k.tint
};
i.BitmapText.prototype.updateText=function(){var y=i.BitmapText.fonts[this.fontName];
var o=new i.Point();
var p=null;
var t=[];
var u=0;
var B=[];
var s=0;
var z=this.fontSize/y.size;
for(var w=0;
w<this.text.length;
w++){var k=this.text.charCodeAt(w);
if(/(?:\r\n|\r|\n)/.test(this.text.charAt(w))){B.push(o.x);
u=Math.max(u,o.x);
s++;
o.x=0;
o.y+=y.lineHeight;
p=null;
continue
}var j=y.chars[k];
if(!j){continue
}if(p&&j[p]){o.x+=j.kerning[p]
}t.push({texture:j.texture,line:s,charCode:k,position:new i.Point(o.x+j.xOffset,o.y+j.yOffset)});
o.x+=j.xAdvance;
p=k
}B.push(o.x);
u=Math.max(u,o.x);
var v=[];
for(w=0;
w<=s;
w++){var A=0;
if(this.style.align==="right"){A=u-B[w]
}else{if(this.style.align==="center"){A=(u-B[w])/2
}}v.push(A)
}var l=this.children.length;
var m=t.length;
var q=this.tint||16777215;
for(w=0;
w<m;
w++){var x=w<l?this.children[w]:this._pool.pop();
if(x){x.setTexture(t[w].texture)
}else{x=new i.Sprite(t[w].texture)
}x.position.x=(t[w].position.x+v[t[w].line])*z;
x.position.y=t[w].position.y*z;
x.scale.x=x.scale.y=z;
x.tint=q;
if(!x.parent){this.addChild(x)
}}while(this.children.length>m){var n=this.getChildAt(this.children.length-1);
this._pool.push(n);
this.removeChild(n)
}this.textWidth=u*z;
this.textHeight=(o.y+y.lineHeight)*z
};
i.BitmapText.prototype.updateTransform=function(){if(this.dirty){this.updateText();
this.dirty=false
}i.DisplayObjectContainer.prototype.updateTransform.call(this)
};
i.BitmapText.fonts={};
i.InteractionData=function(){this.global=new i.Point();
this.local=new i.Point();
this.target=null;
this.originalEvent=null
};
i.InteractionData.prototype.getLocalPosition=function(p){var j=p.worldTransform;
var l=this.global;
var o=j.a,n=j.b,m=j.tx,t=j.c,s=j.d,q=j.ty,k=1/(o*s+n*-t);
return new i.Point(s*k*l.x+-n*k*l.y+(q*n-m*s)*k,o*k*l.y+-t*k*l.x+(-q*o+m*t)*k)
};
i.InteractionData.prototype.constructor=i.InteractionData;
i.InteractionManager=function(j){this.stage=j;
this.mouse=new i.InteractionData();
this.touchs={};
this.tempPoint=new i.Point();
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
this.onTouchMove=this.onTouchMove.bind(this);
this.last=0;
this.currentCursorStyle="inherit";
this.mouseOut=false
};
i.InteractionManager.prototype.constructor=i.InteractionManager;
i.InteractionManager.prototype.collectInteractiveSprite=function(n,j){var l=n.children;
var m=l.length;
for(var k=m-1;
k>=0;
k--){var o=l[k];
if(o.interactive){j.interactiveChildren=true;
this.interactiveItems.push(o);
if(o.children.length>0){this.collectInteractiveSprite(o,o)
}}else{o.__iParent=null;
if(o.children.length>0){this.collectInteractiveSprite(o,j)
}}}};
i.InteractionManager.prototype.setTarget=function(j){this.target=j;
if(this.interactionDOMElement===null){this.setTargetDomElement(j.view)
}};
i.InteractionManager.prototype.setTargetDomElement=function(j){this.removeEvents();
if(window.navigator.msPointerEnabled){j.style["-ms-content-zooming"]="none";
j.style["-ms-touch-action"]="none"
}this.interactionDOMElement=j;
j.addEventListener("mousemove",this.onMouseMove,true);
j.addEventListener("mousedown",this.onMouseDown,true);
j.addEventListener("mouseout",this.onMouseOut,true);
j.addEventListener("touchstart",this.onTouchStart,true);
j.addEventListener("touchend",this.onTouchEnd,true);
j.addEventListener("touchmove",this.onTouchMove,true);
document.body.addEventListener("mouseup",this.onMouseUp,true)
};
i.InteractionManager.prototype.removeEvents=function(){if(!this.interactionDOMElement){return
}this.interactionDOMElement.style["-ms-content-zooming"]="";
this.interactionDOMElement.style["-ms-touch-action"]="";
this.interactionDOMElement.removeEventListener("mousemove",this.onMouseMove,true);
this.interactionDOMElement.removeEventListener("mousedown",this.onMouseDown,true);
this.interactionDOMElement.removeEventListener("mouseout",this.onMouseOut,true);
this.interactionDOMElement.removeEventListener("touchstart",this.onTouchStart,true);
this.interactionDOMElement.removeEventListener("touchend",this.onTouchEnd,true);
this.interactionDOMElement.removeEventListener("touchmove",this.onTouchMove,true);
this.interactionDOMElement=null;
document.body.removeEventListener("mouseup",this.onMouseUp,true)
};
i.InteractionManager.prototype.update=function(){if(!this.target){return
}var k=Date.now();
var p=k-this.last;
p=(p*i.INTERACTION_FREQUENCY)/1000;
if(p<1){return
}this.last=k;
var l=0;
if(this.dirty){this.dirty=false;
var j=this.interactiveItems.length;
for(l=0;
l<j;
l++){this.interactiveItems[l].interactiveChildren=false
}this.interactiveItems=[];
if(this.stage.interactive){this.interactiveItems.push(this.stage)
}this.collectInteractiveSprite(this.stage,this.stage)
}var n=this.interactiveItems.length;
var q="inherit";
var o=false;
for(l=0;
l<n;
l++){var m=this.interactiveItems[l];
m.__hit=this.hitTest(m,this.mouse);
this.mouse.target=m;
if(m.__hit&&!o){if(m.buttonMode){q=m.defaultCursor
}if(!m.interactiveChildren){o=true
}if(!m.__isOver){if(m.mouseover){m.mouseover(this.mouse)
}m.__isOver=true
}}else{if(m.__isOver){if(m.mouseout){m.mouseout(this.mouse)
}m.__isOver=false
}}}if(this.currentCursorStyle!==q){this.currentCursorStyle=q;
this.interactionDOMElement.style.cursor=q
}};
i.InteractionManager.prototype.onMouseMove=function(n){this.mouse.originalEvent=n||window.event;
var m=this.interactionDOMElement.getBoundingClientRect();
this.mouse.global.x=(n.clientX-m.left)*(this.target.width/m.width);
this.mouse.global.y=(n.clientY-m.top)*(this.target.height/m.height);
var l=this.interactiveItems.length;
for(var j=0;
j<l;
j++){var k=this.interactiveItems[j];
if(k.mousemove){k.mousemove(this.mouse)
}}};
i.InteractionManager.prototype.onMouseDown=function(m){this.mouse.originalEvent=m||window.event;
if(i.AUTO_PREVENT_DEFAULT){this.mouse.originalEvent.preventDefault()
}var l=this.interactiveItems.length;
for(var j=0;
j<l;
j++){var k=this.interactiveItems[j];
if(k.mousedown||k.click){k.__mouseIsDown=true;
k.__hit=this.hitTest(k,this.mouse);
if(k.__hit){if(k.mousedown){k.mousedown(this.mouse)
}k.__isDown=true;
if(!k.interactiveChildren){break
}}}}};
i.InteractionManager.prototype.onMouseOut=function(){var l=this.interactiveItems.length;
this.interactionDOMElement.style.cursor="inherit";
for(var j=0;
j<l;
j++){var k=this.interactiveItems[j];
if(k.__isOver){this.mouse.target=k;
if(k.mouseout){k.mouseout(this.mouse)
}k.__isOver=false
}}this.mouseOut=true;
this.mouse.global.x=-10000;
this.mouse.global.y=-10000
};
i.InteractionManager.prototype.onMouseUp=function(n){this.mouse.originalEvent=n||window.event;
var m=this.interactiveItems.length;
var j=false;
for(var k=0;
k<m;
k++){var l=this.interactiveItems[k];
l.__hit=this.hitTest(l,this.mouse);
if(l.__hit&&!j){if(l.mouseup){l.mouseup(this.mouse)
}if(l.__isDown){if(l.click){l.click(this.mouse)
}}if(!l.interactiveChildren){j=true
}}else{if(l.__isDown){if(l.mouseupoutside){l.mouseupoutside(this.mouse)
}}}l.__isDown=false
}};
i.InteractionManager.prototype.hitTest=function(D,A){var v=A.global;
if(!D.worldVisible){return false
}var j=(D instanceof i.Sprite),w=D.worldTransform,H=w.a,F=w.b,E=w.tx,o=w.c,n=w.d,m=w.ty,t=1/(H*n+F*-o),q=n*t*v.x+-F*t*v.y+(m*F-E*n)*t,p=H*t*v.y+-o*t*v.x+(-m*H+E*o)*t;
A.target=D;
if(D.hitArea&&D.hitArea.contains){if(D.hitArea.contains(q,p)){A.target=D;
return true
}return false
}else{if(j){var u=D.texture.frame.width,s=D.texture.frame.height,C=-u*D.anchor.x,k;
if(q>C&&q<C+u){k=-s*D.anchor.y;
if(p>k&&p<k+s){A.target=D;
return true
}}}}var l=D.children.length;
for(var z=0;
z<l;
z++){var G=D.children[z];
var B=this.hitTest(G,A);
if(B){A.target=D;
return true
}}return false
};
i.InteractionManager.prototype.onTouchMove=function(q){var p=this.interactionDOMElement.getBoundingClientRect();
var m=q.changedTouches;
var l;
var k=0;
for(k=0;
k<m.length;
k++){var j=m[k];
l=this.touchs[j.identifier];
l.originalEvent=q||window.event;
l.global.x=(j.clientX-p.left)*(this.target.width/p.width);
l.global.y=(j.clientY-p.top)*(this.target.height/p.height);
if(navigator.isCocoonJS){l.global.x=j.clientX;
l.global.y=j.clientY
}}var o=this.interactiveItems.length;
for(k=0;
k<o;
k++){var n=this.interactiveItems[k];
if(n.touchmove){n.touchmove(l)
}}};
i.InteractionManager.prototype.onTouchStart=function(k){var p=this.interactionDOMElement.getBoundingClientRect();
if(i.AUTO_PREVENT_DEFAULT){k.preventDefault()
}var q=k.changedTouches;
for(var o=0;
o<q.length;
o++){var m=q[o];
var s=this.pool.pop();
if(!s){s=new i.InteractionData()
}s.originalEvent=k||window.event;
this.touchs[m.identifier]=s;
s.global.x=(m.clientX-p.left)*(this.target.width/p.width);
s.global.y=(m.clientY-p.top)*(this.target.height/p.height);
if(navigator.isCocoonJS){s.global.x=m.clientX;
s.global.y=m.clientY
}var l=this.interactiveItems.length;
for(var n=0;
n<l;
n++){var t=this.interactiveItems[n];
if(t.touchstart||t.tap){t.__hit=this.hitTest(t,s);
if(t.__hit){if(t.touchstart){t.touchstart(s)
}t.__isDown=true;
t.__touchData=s;
if(!t.interactiveChildren){break
}}}}}};
i.InteractionManager.prototype.onTouchEnd=function(k){var s=this.interactionDOMElement.getBoundingClientRect();
var t=k.changedTouches;
for(var o=0;
o<t.length;
o++){var m=t[o];
var u=this.touchs[m.identifier];
var p=false;
u.global.x=(m.clientX-s.left)*(this.target.width/s.width);
u.global.y=(m.clientY-s.top)*(this.target.height/s.height);
if(navigator.isCocoonJS){u.global.x=m.clientX;
u.global.y=m.clientY
}var l=this.interactiveItems.length;
for(var n=0;
n<l;
n++){var v=this.interactiveItems[n];
var q=v.__touchData;
v.__hit=this.hitTest(v,u);
if(q===u){u.originalEvent=k||window.event;
if(v.touchend||v.tap){if(v.__hit&&!p){if(v.touchend){v.touchend(u)
}if(v.__isDown){if(v.tap){v.tap(u)
}}if(!v.interactiveChildren){p=true
}}else{if(v.__isDown){if(v.touchendoutside){v.touchendoutside(u)
}}}v.__isDown=false
}v.__touchData=null
}}this.pool.push(u);
this.touchs[m.identifier]=null
}};
i.Stage=function(j){i.DisplayObjectContainer.call(this);
this.worldTransform=new i.Matrix();
this.interactive=true;
this.interactionManager=new i.InteractionManager(this);
this.dirty=true;
this.stage=this;
this.stage.hitArea=new i.Rectangle(0,0,100000,100000);
this.setBackgroundColor(j)
};
i.Stage.prototype=Object.create(i.DisplayObjectContainer.prototype);
i.Stage.prototype.constructor=i.Stage;
i.Stage.prototype.setInteractionDelegate=function(j){this.interactionManager.setTargetDomElement(j)
};
i.Stage.prototype.updateTransform=function(){this.worldAlpha=1;
for(var l=0,k=this.children.length;
l<k;
l++){this.children[l].updateTransform()
}if(this.dirty){this.dirty=false;
this.interactionManager.dirty=true
}if(this.interactive){this.interactionManager.update()
}};
i.Stage.prototype.setBackgroundColor=function(j){this.backgroundColor=j||0;
this.backgroundColorSplit=i.hex2rgb(this.backgroundColor);
var k=this.backgroundColor.toString(16);
k="000000".substr(0,6-k.length)+k;
this.backgroundColorString="#"+k
};
i.Stage.prototype.getMousePosition=function(){return this.interactionManager.mouse.global
};
var f=0;
var h=["ms","moz","webkit","o"];
for(var c=0;
c<h.length&&!window.requestAnimationFrame;
++c){window.requestAnimationFrame=window[h[c]+"RequestAnimationFrame"];
window.cancelAnimationFrame=window[h[c]+"CancelAnimationFrame"]||window[h[c]+"CancelRequestAnimationFrame"]
}if(!window.requestAnimationFrame){window.requestAnimationFrame=function(m){var j=new Date().getTime();
var k=Math.max(0,16-(j-f));
var l=window.setTimeout(function(){m(j+k)
},k);
f=j+k;
return l
}
}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(j){clearTimeout(j)
}
}window.requestAnimFrame=window.requestAnimationFrame;
i.hex2rgb=function(j){return[(j>>16&255)/255,(j>>8&255)/255,(j&255)/255]
};
i.rgb2hex=function(j){return((j[0]*255<<16)+(j[1]*255<<8)+j[2]*255)
};
if(typeof Function.prototype.bind!=="function"){Function.prototype.bind=(function(){var j=Array.prototype.slice;
return function(k){var n=this,o=j.call(arguments,1);
if(typeof n!=="function"){throw new TypeError()
}function l(){var p=o.concat(j.call(arguments));
n.apply(this instanceof l?this:k,p)
}l.prototype=(function m(p){if(p){m.prototype=p
}if(!(this instanceof m)){return new m()
}})(n.prototype);
return l
}
})()
}i.AjaxRequest=function(){var j=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.3.0","Microsoft.XMLHTTP"];
if(window.ActiveXObject){for(var k=0;
k<j.length;
k++){try{return new window.ActiveXObject(j[k])
}catch(l){}}}else{if(window.XMLHttpRequest){return new window.XMLHttpRequest()
}else{return false
}}};
i.canUseNewCanvasBlendModes=function(){var j=document.createElement("canvas");
j.width=1;
j.height=1;
var k=j.getContext("2d");
k.fillStyle="#000";
k.fillRect(0,0,1,1);
k.globalCompositeOperation="multiply";
k.fillStyle="#fff";
k.fillRect(0,0,1,1);
return k.getImageData(0,0,1,1).data[0]===0
};
i.getNextPowerOfTwo=function(k){if(k>0&&(k&(k-1))===0){return k
}else{var j=1;
while(j<k){j<<=1
}return j
}};
i.EventTarget=function(){var j={};
this.addEventListener=this.on=function(k,l){if(j[k]===undefined){j[k]=[]
}if(j[k].indexOf(l)===-1){j[k].push(l)
}};
this.dispatchEvent=this.emit=function(n){if(!j[n.type]||!j[n.type].length){return
}for(var m=0,k=j[n.type].length;
m<k;
m++){j[n.type][m](n)
}};
this.removeEventListener=this.off=function(l,m){var k=j[l].indexOf(m);
if(k!==-1){j[l].splice(k,1)
}};
this.removeAllEventListeners=function(l){var k=j[l];
if(k){k.length=0
}}
};
i.autoDetectRenderer=function(m,j,l,o,k){if(!m){m=800
}if(!j){j=600
}var n=(function(){try{var p=document.createElement("canvas");
return !!window.WebGLRenderingContext&&(p.getContext("webgl")||p.getContext("experimental-webgl"))
}catch(q){return false
}})();
if(n){return new i.WebGLRenderer(m,j,l,o,k)
}return new i.CanvasRenderer(m,j,l,o)
};
i.PolyK={};
i.PolyK.Triangulate=function(t){var F=true;
var u=t.length>>1;
if(u<3){return[]
}var C=[];
var s=[];
for(var A=0;
A<u;
A++){s.push(A)
}A=0;
var x=u;
while(x>3){var y=s[(A+0)%x];
var w=s[(A+1)%x];
var v=s[(A+2)%x];
var q=t[2*y],m=t[2*y+1];
var D=t[2*w],B=t[2*w+1];
var l=t[2*v],k=t[2*v+1];
var o=false;
if(i.PolyK._convex(q,m,D,B,l,k,F)){o=true;
for(var z=0;
z<x;
z++){var E=s[z];
if(E===y||E===w||E===v){continue
}if(i.PolyK._PointInTriangle(t[2*E],t[2*E+1],q,m,D,B,l,k)){o=false;
break
}}}if(o){C.push(y,w,v);
s.splice((A+1)%x,1);
x--;
A=0
}else{if(A++>3*x){if(F){C=[];
s=[];
for(A=0;
A<u;
A++){s.push(A)
}A=0;
x=u;
F=false
}else{window.console.log("PIXI Warning: shape too complex to fill");
return[]
}}}}C.push(s[0],s[1],s[2]);
return C
};
i.PolyK._PointInTriangle=function(A,z,w,t,H,G,p,n){var m=p-w;
var l=n-t;
var s=H-w;
var q=G-t;
var F=A-w;
var D=z-t;
var E=m*m+l*l;
var C=m*s+l*q;
var B=m*F+l*D;
var k=s*s+q*q;
var j=s*F+q*D;
var o=1/(E*k-C*C);
var y=(k*B-C*j)*o;
var x=(E*j-C*B)*o;
return(y>=0)&&(x>=0)&&(y+x<1)
};
i.PolyK._convex=function(m,l,o,n,j,p,k){return((l-n)*(j-o)+(o-m)*(p-n)>=0)===k
};
i.initDefaultShaders=function(){};
i.CompileVertexShader=function(k,j){return i._CompileShader(k,j,k.VERTEX_SHADER)
};
i.CompileFragmentShader=function(k,j){return i._CompileShader(k,j,k.FRAGMENT_SHADER)
};
i._CompileShader=function(n,m,l){var k=m.join("\n");
var j=n.createShader(l);
n.shaderSource(j,k);
n.compileShader(j);
if(!n.getShaderParameter(j,n.COMPILE_STATUS)){window.console.log(n.getShaderInfoLog(j));
return null
}return j
};
i.compileProgram=function(n,j,l){var k=i.CompileFragmentShader(n,l);
var m=i.CompileVertexShader(n,j);
var o=n.createProgram();
n.attachShader(o,m);
n.attachShader(o,k);
n.linkProgram(o);
if(!n.getProgramParameter(o,n.LINK_STATUS)){window.console.log("Could not initialise shaders")
}return o
};
i.PixiShader=function(j){this.gl=j;
this.program=null;
this.fragmentSrc=["precision lowp float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;","}"];
this.textureCount=0;
this.attributes=[];
this.init()
};
i.PixiShader.prototype.init=function(){var l=this.gl;
var j=i.compileProgram(l,this.vertexSrc||i.PixiShader.defaultVertexSrc,this.fragmentSrc);
l.useProgram(j);
this.uSampler=l.getUniformLocation(j,"uSampler");
this.projectionVector=l.getUniformLocation(j,"projectionVector");
this.offsetVector=l.getUniformLocation(j,"offsetVector");
this.dimensions=l.getUniformLocation(j,"dimensions");
this.aVertexPosition=l.getAttribLocation(j,"aVertexPosition");
this.aTextureCoord=l.getAttribLocation(j,"aTextureCoord");
this.colorAttribute=l.getAttribLocation(j,"aColor");
if(this.colorAttribute===-1){this.colorAttribute=2
}this.attributes=[this.aVertexPosition,this.aTextureCoord,this.colorAttribute];
for(var k in this.uniforms){this.uniforms[k].uniformLocation=l.getUniformLocation(j,k)
}this.initUniforms();
this.program=j
};
i.PixiShader.prototype.initUniforms=function(){this.textureCount=1;
var m=this.gl;
var j;
for(var k in this.uniforms){j=this.uniforms[k];
var l=j.type;
if(l==="sampler2D"){j._init=false;
if(j.value!==null){this.initSampler2D(j)
}}else{if(l==="mat2"||l==="mat3"||l==="mat4"){j.glMatrix=true;
j.glValueLength=1;
if(l==="mat2"){j.glFunc=m.uniformMatrix2fv
}else{if(l==="mat3"){j.glFunc=m.uniformMatrix3fv
}else{if(l==="mat4"){j.glFunc=m.uniformMatrix4fv
}}}}else{j.glFunc=m["uniform"+l];
if(l==="2f"||l==="2i"){j.glValueLength=2
}else{if(l==="3f"||l==="3i"){j.glValueLength=3
}else{if(l==="4f"||l==="4i"){j.glValueLength=4
}else{j.glValueLength=1
}}}}}}};
i.PixiShader.prototype.initSampler2D=function(l){if(!l.value||!l.value.baseTexture||!l.value.baseTexture.hasLoaded){return
}var q=this.gl;
q.activeTexture(q["TEXTURE"+this.textureCount]);
q.bindTexture(q.TEXTURE_2D,l.value.baseTexture._glTexture);
if(l.textureData){var o=l.textureData;
var t=(o.magFilter)?o.magFilter:q.LINEAR;
var k=(o.minFilter)?o.minFilter:q.LINEAR;
var p=(o.wrapS)?o.wrapS:q.CLAMP_TO_EDGE;
var n=(o.wrapT)?o.wrapT:q.CLAMP_TO_EDGE;
var s=(o.luminance)?q.LUMINANCE:q.RGBA;
if(o.repeat){p=q.REPEAT;
n=q.REPEAT
}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,!!o.flipY);
if(o.width){var j=(o.width)?o.width:512;
var u=(o.height)?o.height:2;
var m=(o.border)?o.border:0;
q.texImage2D(q.TEXTURE_2D,0,s,j,u,m,s,q.UNSIGNED_BYTE,null)
}else{q.texImage2D(q.TEXTURE_2D,0,s,q.RGBA,q.UNSIGNED_BYTE,l.value.baseTexture.source)
}q.texParameteri(q.TEXTURE_2D,q.TEXTURE_MAG_FILTER,t);
q.texParameteri(q.TEXTURE_2D,q.TEXTURE_MIN_FILTER,k);
q.texParameteri(q.TEXTURE_2D,q.TEXTURE_WRAP_S,p);
q.texParameteri(q.TEXTURE_2D,q.TEXTURE_WRAP_T,n)
}q.uniform1i(l.uniformLocation,this.textureCount);
l._init=true;
this.textureCount++
};
i.PixiShader.prototype.syncUniforms=function(){this.textureCount=1;
var j;
var l=this.gl;
for(var k in this.uniforms){j=this.uniforms[k];
if(j.glValueLength===1){if(j.glMatrix===true){j.glFunc.call(l,j.uniformLocation,j.transpose,j.value)
}else{j.glFunc.call(l,j.uniformLocation,j.value)
}}else{if(j.glValueLength===2){j.glFunc.call(l,j.uniformLocation,j.value.x,j.value.y)
}else{if(j.glValueLength===3){j.glFunc.call(l,j.uniformLocation,j.value.x,j.value.y,j.value.z)
}else{if(j.glValueLength===4){j.glFunc.call(l,j.uniformLocation,j.value.x,j.value.y,j.value.z,j.value.w)
}else{if(j.type==="sampler2D"){if(j._init){l.activeTexture(l["TEXTURE"+this.textureCount]);
l.bindTexture(l.TEXTURE_2D,j.value.baseTexture._glTextures[l.id]||i.createWebGLTexture(j.value.baseTexture,l));
l.uniform1i(j.uniformLocation,this.textureCount);
this.textureCount++
}else{this.initSampler2D(j)
}}}}}}}};
i.PixiShader.prototype.destroy=function(){this.gl.deleteProgram(this.program);
this.uniforms=null;
this.gl=null;
this.attributes=null
};
i.PixiShader.defaultVertexSrc=["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute vec2 aColor;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","varying vec2 vTextureCoord;","varying vec4 vColor;","const vec2 center = vec2(-1.0, 1.0);","void main(void) {","   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vec3 color = mod(vec3(aColor.y/65536.0, aColor.y/256.0, aColor.y), 256.0) / 256.0;","   vColor = vec4(color * aColor.x, aColor.x);","}"];
i.PixiFastShader=function(j){this.gl=j;
this.program=null;
this.fragmentSrc=["precision lowp float;","varying vec2 vTextureCoord;","varying float vColor;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;","}"];
this.vertexSrc=["attribute vec2 aVertexPosition;","attribute vec2 aPositionCoord;","attribute vec2 aScale;","attribute float aRotation;","attribute vec2 aTextureCoord;","attribute float aColor;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","uniform mat3 uMatrix;","varying vec2 vTextureCoord;","varying float vColor;","const vec2 center = vec2(-1.0, 1.0);","void main(void) {","   vec2 v;","   vec2 sv = aVertexPosition * aScale;","   v.x = (sv.x) * cos(aRotation) - (sv.y) * sin(aRotation);","   v.y = (sv.x) * sin(aRotation) + (sv.y) * cos(aRotation);","   v = ( uMatrix * vec3(v + aPositionCoord , 1.0) ).xy ;","   gl_Position = vec4( ( v / projectionVector) + center , 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vColor = aColor;","}"];
this.textureCount=0;
this.init()
};
i.PixiFastShader.prototype.init=function(){var k=this.gl;
var j=i.compileProgram(k,this.vertexSrc,this.fragmentSrc);
k.useProgram(j);
this.uSampler=k.getUniformLocation(j,"uSampler");
this.projectionVector=k.getUniformLocation(j,"projectionVector");
this.offsetVector=k.getUniformLocation(j,"offsetVector");
this.dimensions=k.getUniformLocation(j,"dimensions");
this.uMatrix=k.getUniformLocation(j,"uMatrix");
this.aVertexPosition=k.getAttribLocation(j,"aVertexPosition");
this.aPositionCoord=k.getAttribLocation(j,"aPositionCoord");
this.aScale=k.getAttribLocation(j,"aScale");
this.aRotation=k.getAttribLocation(j,"aRotation");
this.aTextureCoord=k.getAttribLocation(j,"aTextureCoord");
this.colorAttribute=k.getAttribLocation(j,"aColor");
if(this.colorAttribute===-1){this.colorAttribute=2
}this.attributes=[this.aVertexPosition,this.aPositionCoord,this.aScale,this.aRotation,this.aTextureCoord,this.colorAttribute];
this.program=j
};
i.PixiFastShader.prototype.destroy=function(){this.gl.deleteProgram(this.program);
this.uniforms=null;
this.gl=null;
this.attributes=null
};
i.StripShader=function(){this.program=null;
this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying float vColor;","uniform float alpha;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y));","   gl_FragColor = gl_FragColor * alpha;","}"];
this.vertexSrc=["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute float aColor;","uniform mat3 translationMatrix;","uniform vec2 projectionVector;","varying vec2 vTextureCoord;","uniform vec2 offsetVector;","varying float vColor;","void main(void) {","   vec3 v = translationMatrix * vec3(aVertexPosition, 1.0);","   v -= offsetVector.xyx;","   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / projectionVector.y + 1.0 , 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vColor = aColor;","}"]
};
i.StripShader.prototype.init=function(){var k=i.gl;
var j=i.compileProgram(k,this.vertexSrc,this.fragmentSrc);
k.useProgram(j);
this.uSampler=k.getUniformLocation(j,"uSampler");
this.projectionVector=k.getUniformLocation(j,"projectionVector");
this.offsetVector=k.getUniformLocation(j,"offsetVector");
this.colorAttribute=k.getAttribLocation(j,"aColor");
this.aVertexPosition=k.getAttribLocation(j,"aVertexPosition");
this.aTextureCoord=k.getAttribLocation(j,"aTextureCoord");
this.translationMatrix=k.getUniformLocation(j,"translationMatrix");
this.alpha=k.getUniformLocation(j,"alpha");
this.program=j
};
i.PrimitiveShader=function(j){this.gl=j;
this.program=null;
this.fragmentSrc=["precision mediump float;","varying vec4 vColor;","void main(void) {","   gl_FragColor = vColor;","}"];
this.vertexSrc=["attribute vec2 aVertexPosition;","attribute vec4 aColor;","uniform mat3 translationMatrix;","uniform vec2 projectionVector;","uniform vec2 offsetVector;","uniform float alpha;","uniform vec3 tint;","varying vec4 vColor;","void main(void) {","   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);","   v -= offsetVector.xyx;","   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);","   vColor = aColor * vec4(tint * alpha, alpha);","}"];
this.init()
};
i.PrimitiveShader.prototype.init=function(){var k=this.gl;
var j=i.compileProgram(k,this.vertexSrc,this.fragmentSrc);
k.useProgram(j);
this.projectionVector=k.getUniformLocation(j,"projectionVector");
this.offsetVector=k.getUniformLocation(j,"offsetVector");
this.tintColor=k.getUniformLocation(j,"tint");
this.aVertexPosition=k.getAttribLocation(j,"aVertexPosition");
this.colorAttribute=k.getAttribLocation(j,"aColor");
this.attributes=[this.aVertexPosition,this.colorAttribute];
this.translationMatrix=k.getUniformLocation(j,"translationMatrix");
this.alpha=k.getUniformLocation(j,"alpha");
this.program=j
};
i.PrimitiveShader.prototype.destroy=function(){this.gl.deleteProgram(this.program);
this.uniforms=null;
this.gl=null;
this.attribute=null
};
i.WebGLGraphics=function(){};
i.WebGLGraphics.renderGraphics=function(k,n){var p=n.gl;
var j=n.projection,o=n.offset,l=n.shaderManager.primitiveShader;
if(!k._webGL[p.id]){k._webGL[p.id]={points:[],indices:[],lastIndex:0,buffer:p.createBuffer(),indexBuffer:p.createBuffer()}
}var m=k._webGL[p.id];
if(k.dirty){k.dirty=false;
if(k.clearDirty){k.clearDirty=false;
m.lastIndex=0;
m.points=[];
m.indices=[]
}i.WebGLGraphics.updateGraphics(k,p)
}n.shaderManager.activatePrimitiveShader();
p.blendFunc(p.ONE,p.ONE_MINUS_SRC_ALPHA);
p.uniformMatrix3fv(l.translationMatrix,false,k.worldTransform.toArray(true));
p.uniform2f(l.projectionVector,j.x,-j.y);
p.uniform2f(l.offsetVector,-o.x,-o.y);
p.uniform3fv(l.tintColor,i.hex2rgb(k.tint));
p.uniform1f(l.alpha,k.worldAlpha);
p.bindBuffer(p.ARRAY_BUFFER,m.buffer);
p.vertexAttribPointer(l.aVertexPosition,2,p.FLOAT,false,4*6,0);
p.vertexAttribPointer(l.colorAttribute,4,p.FLOAT,false,4*6,2*4);
p.bindBuffer(p.ELEMENT_ARRAY_BUFFER,m.indexBuffer);
p.drawElements(p.TRIANGLE_STRIP,m.indices.length,p.UNSIGNED_SHORT,0);
n.shaderManager.deactivatePrimitiveShader()
};
i.WebGLGraphics.updateGraphics=function(j,n){var m=j._webGL[n.id];
for(var k=m.lastIndex;
k<j.graphicsData.length;
k++){var l=j.graphicsData[k];
if(l.type===i.Graphics.POLY){if(l.fill){if(l.points.length>3){i.WebGLGraphics.buildPoly(l,m)
}}if(l.lineWidth>0){i.WebGLGraphics.buildLine(l,m)
}}else{if(l.type===i.Graphics.RECT){i.WebGLGraphics.buildRectangle(l,m)
}else{if(l.type===i.Graphics.CIRC||l.type===i.Graphics.ELIP){i.WebGLGraphics.buildCircle(l,m)
}}}}m.lastIndex=j.graphicsData.length;
m.glPoints=new Float32Array(m.points);
n.bindBuffer(n.ARRAY_BUFFER,m.buffer);
n.bufferData(n.ARRAY_BUFFER,m.glPoints,n.STATIC_DRAW);
m.glIndicies=new Uint16Array(m.indices);
n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,m.indexBuffer);
n.bufferData(n.ELEMENT_ARRAY_BUFFER,m.glIndicies,n.STATIC_DRAW)
};
i.WebGLGraphics.buildRectangle=function(B,o){var m=B.points;
var v=m[0];
var u=m[1];
var k=m[2];
var A=m[3];
if(B.fill){var n=i.hex2rgb(B.fillColor);
var l=B.fillAlpha;
var j=n[0]*l;
var p=n[1]*l;
var t=n[2]*l;
var w=o.points;
var z=o.indices;
var s=w.length/6;
w.push(v,u);
w.push(j,p,t,l);
w.push(v+k,u);
w.push(j,p,t,l);
w.push(v,u+A);
w.push(j,p,t,l);
w.push(v+k,u+A);
w.push(j,p,t,l);
z.push(s,s,s+1,s+2,s+3,s+3)
}if(B.lineWidth){var q=B.points;
B.points=[v,u,v+k,u,v+k,u+A,v,u+A,v,u];
i.WebGLGraphics.buildLine(B,o);
B.points=q
}};
i.WebGLGraphics.buildCircle=function(q,E){var m=q.points;
var p=m[0];
var o=m[1];
var v=m[2];
var u=m[3];
var s=40;
var B=(Math.PI*2)/s;
var z=0;
if(q.fill){var w=i.hex2rgb(q.fillColor);
var k=q.fillAlpha;
var t=w[0]*k;
var A=w[1]*k;
var C=w[2]*k;
var D=E.points;
var l=E.indices;
var j=D.length/6;
l.push(j);
for(z=0;
z<s+1;
z++){D.push(p,o,t,A,C,k);
D.push(p+Math.sin(B*z)*v,o+Math.cos(B*z)*u,t,A,C,k);
l.push(j++,j++)
}l.push(j-1)
}if(q.lineWidth){var n=q.points;
q.points=[];
for(z=0;
z<s+1;
z++){q.points.push(p+Math.sin(B*z)*v,o+Math.cos(B*z)*u)
}i.WebGLGraphics.buildLine(q,E);
q.points=n
}};
i.WebGLGraphics.buildLine=function(X,H){var T=0;
var K=X.points;
if(K.length===0){return
}if(X.lineWidth%2){for(T=0;
T<K.length;
T++){K[T]+=0.5
}}var y=new i.Point(K[0],K[1]);
var q=new i.Point(K[K.length-2],K[K.length-1]);
if(y.x===q.x&&y.y===q.y){K.pop();
K.pop();
q=new i.Point(K[K.length-2],K[K.length-1]);
var A=q.x+(y.x-q.x)*0.5;
var x=q.y+(y.y-q.y)*0.5;
K.unshift(A,x);
K.push(A,x)
}var U=H.points;
var o=H.indices;
var z=K.length/2;
var w=K.length;
var W=U.length/6;
var j=X.lineWidth/2;
var J=i.hex2rgb(X.lineColor);
var S=X.lineAlpha;
var P=J[0]*S;
var V=J[1]*S;
var Y=J[2]*S;
var v,u,M,L,E,D,n,m;
var O,N,C,B,l,k;
var R,I,t,Q,G,s;
var Z,F,p;
M=K[0];
L=K[1];
E=K[2];
D=K[3];
O=-(L-D);
N=M-E;
p=Math.sqrt(O*O+N*N);
O/=p;
N/=p;
O*=j;
N*=j;
U.push(M-O,L-N,P,V,Y,S);
U.push(M+O,L+N,P,V,Y,S);
for(T=1;
T<z-1;
T++){M=K[(T-1)*2];
L=K[(T-1)*2+1];
E=K[(T)*2];
D=K[(T)*2+1];
n=K[(T+1)*2];
m=K[(T+1)*2+1];
O=-(L-D);
N=M-E;
p=Math.sqrt(O*O+N*N);
O/=p;
N/=p;
O*=j;
N*=j;
C=-(D-m);
B=E-n;
p=Math.sqrt(C*C+B*B);
C/=p;
B/=p;
C*=j;
B*=j;
R=(-N+L)-(-N+D);
I=(-O+E)-(-O+M);
t=(-O+M)*(-N+D)-(-O+E)*(-N+L);
Q=(-B+m)-(-B+D);
G=(-C+E)-(-C+n);
s=(-C+n)*(-B+D)-(-C+E)*(-B+m);
Z=R*G-Q*I;
if(Math.abs(Z)<0.1){Z+=10.1;
U.push(E-O,D-N,P,V,Y,S);
U.push(E+O,D+N,P,V,Y,S);
continue
}v=(I*s-G*t)/Z;
u=(Q*t-R*s)/Z;
F=(v-E)*(v-E)+(u-D)+(u-D);
if(F>140*140){l=O-C;
k=N-B;
p=Math.sqrt(l*l+k*k);
l/=p;
k/=p;
l*=j;
k*=j;
U.push(E-l,D-k);
U.push(P,V,Y,S);
U.push(E+l,D+k);
U.push(P,V,Y,S);
U.push(E-l,D-k);
U.push(P,V,Y,S);
w++
}else{U.push(v,u);
U.push(P,V,Y,S);
U.push(E-(v-E),D-(u-D));
U.push(P,V,Y,S)
}}M=K[(z-2)*2];
L=K[(z-2)*2+1];
E=K[(z-1)*2];
D=K[(z-1)*2+1];
O=-(L-D);
N=M-E;
p=Math.sqrt(O*O+N*N);
O/=p;
N/=p;
O*=j;
N*=j;
U.push(E-O,D-N);
U.push(P,V,Y,S);
U.push(E+O,D+N);
U.push(P,V,Y,S);
o.push(W);
for(T=0;
T<w;
T++){o.push(W++)
}o.push(W-1)
};
i.WebGLGraphics.buildPoly=function(x,p){var v=x.points;
if(v.length<6){return
}var u=p.points;
var w=p.indices;
var k=v.length/2;
var n=i.hex2rgb(x.fillColor);
var m=x.fillAlpha;
var j=n[0]*m;
var q=n[1]*m;
var t=n[2]*m;
var l=i.PolyK.Triangulate(v);
var s=u.length/6;
var o=0;
for(o=0;
o<l.length;
o+=3){w.push(l[o]+s);
w.push(l[o]+s);
w.push(l[o+1]+s);
w.push(l[o+2]+s);
w.push(l[o+2]+s)
}for(o=0;
o<k;
o++){u.push(v[o*2],v[o*2+1],j,q,t,m)
}};
i.glContexts=[];
i.WebGLRenderer=function(m,j,l,q,k){if(!i.defaultRenderer){i.defaultRenderer=this
}this.type=i.WEBGL_RENDERER;
this.transparent=!!q;
this.width=m||800;
this.height=j||600;
this.view=l||document.createElement("canvas");
this.view.width=this.width;
this.view.height=this.height;
this.contextLost=this.handleContextLost.bind(this);
this.contextRestoredLost=this.handleContextRestored.bind(this);
this.view.addEventListener("webglcontextlost",this.contextLost,false);
this.view.addEventListener("webglcontextrestored",this.contextRestoredLost,false);
this.options={alpha:this.transparent,antialias:!!k,premultipliedAlpha:!!q,stencil:true};
try{this.gl=this.view.getContext("experimental-webgl",this.options)
}catch(o){try{this.gl=this.view.getContext("webgl",this.options)
}catch(n){throw new Error(" This browser does not support webGL. Try using the canvas renderer"+this)
}}var p=this.gl;
this.glContextId=p.id=i.WebGLRenderer.glContextId++;
i.glContexts[this.glContextId]=p;
if(!i.blendModesWebGL){i.blendModesWebGL=[];
i.blendModesWebGL[i.blendModes.NORMAL]=[p.ONE,p.ONE_MINUS_SRC_ALPHA];
i.blendModesWebGL[i.blendModes.ADD]=[p.SRC_ALPHA,p.DST_ALPHA];
i.blendModesWebGL[i.blendModes.MULTIPLY]=[p.DST_COLOR,p.ONE_MINUS_SRC_ALPHA];
i.blendModesWebGL[i.blendModes.SCREEN]=[p.SRC_ALPHA,p.ONE];
i.blendModesWebGL[i.blendModes.OVERLAY]=[p.ONE,p.ONE_MINUS_SRC_ALPHA];
i.blendModesWebGL[i.blendModes.DARKEN]=[p.ONE,p.ONE_MINUS_SRC_ALPHA];
i.blendModesWebGL[i.blendModes.LIGHTEN]=[p.ONE,p.ONE_MINUS_SRC_ALPHA];
i.blendModesWebGL[i.blendModes.COLOR_DODGE]=[p.ONE,p.ONE_MINUS_SRC_ALPHA];
i.blendModesWebGL[i.blendModes.COLOR_BURN]=[p.ONE,p.ONE_MINUS_SRC_ALPHA];
i.blendModesWebGL[i.blendModes.HARD_LIGHT]=[p.ONE,p.ONE_MINUS_SRC_ALPHA];
i.blendModesWebGL[i.blendModes.SOFT_LIGHT]=[p.ONE,p.ONE_MINUS_SRC_ALPHA];
i.blendModesWebGL[i.blendModes.DIFFERENCE]=[p.ONE,p.ONE_MINUS_SRC_ALPHA];
i.blendModesWebGL[i.blendModes.EXCLUSION]=[p.ONE,p.ONE_MINUS_SRC_ALPHA];
i.blendModesWebGL[i.blendModes.HUE]=[p.ONE,p.ONE_MINUS_SRC_ALPHA];
i.blendModesWebGL[i.blendModes.SATURATION]=[p.ONE,p.ONE_MINUS_SRC_ALPHA];
i.blendModesWebGL[i.blendModes.COLOR]=[p.ONE,p.ONE_MINUS_SRC_ALPHA];
i.blendModesWebGL[i.blendModes.LUMINOSITY]=[p.ONE,p.ONE_MINUS_SRC_ALPHA]
}this.projection=new i.Point();
this.projection.x=this.width/2;
this.projection.y=-this.height/2;
this.offset=new i.Point(0,0);
this.resize(this.width,this.height);
this.contextLost=false;
this.shaderManager=new i.WebGLShaderManager(p);
this.spriteBatch=new i.WebGLSpriteBatch(p);
this.maskManager=new i.WebGLMaskManager(p);
this.filterManager=new i.WebGLFilterManager(p,this.transparent);
this.renderSession={};
this.renderSession.gl=this.gl;
this.renderSession.drawCount=0;
this.renderSession.shaderManager=this.shaderManager;
this.renderSession.maskManager=this.maskManager;
this.renderSession.filterManager=this.filterManager;
this.renderSession.spriteBatch=this.spriteBatch;
p.useProgram(this.shaderManager.defaultShader.program);
p.disable(p.DEPTH_TEST);
p.disable(p.CULL_FACE);
p.enable(p.BLEND);
p.colorMask(true,true,true,this.transparent)
};
i.WebGLRenderer.prototype.constructor=i.WebGLRenderer;
i.WebGLRenderer.prototype.render=function(j){if(this.contextLost){return
}if(this.__stage!==j){if(j.interactive){j.interactionManager.removeEvents()
}this.__stage=j
}i.WebGLRenderer.updateTextures();
j.updateTransform();
var k=this.gl;
k.viewport(0,0,this.width,this.height);
k.bindFramebuffer(k.FRAMEBUFFER,null);
if(this.transparent){k.clearColor(0,0,0,0)
}else{k.clearColor(j.backgroundColorSplit[0],j.backgroundColorSplit[1],j.backgroundColorSplit[2],1)
}k.clear(k.COLOR_BUFFER_BIT);
this.renderDisplayObject(j,this.projection);
if(j.interactive){if(!j._interactiveEventsAdded){j._interactiveEventsAdded=true;
j.interactionManager.setTarget(this)
}}else{if(j._interactiveEventsAdded){j._interactiveEventsAdded=false;
j.interactionManager.setTarget(this)
}}};
i.WebGLRenderer.prototype.renderDisplayObject=function(l,j,k){this.renderSession.drawCount=0;
this.renderSession.currentBlendMode=9999;
this.renderSession.projection=j;
this.renderSession.offset=this.offset;
this.spriteBatch.begin(this.renderSession);
this.filterManager.begin(this.renderSession,k);
l._renderWebGL(this.renderSession);
this.spriteBatch.end()
};
i.WebGLRenderer.updateTextures=function(){var j=0;
for(j=0;
j<i.Texture.frameUpdates.length;
j++){i.WebGLRenderer.updateTextureFrame(i.Texture.frameUpdates[j])
}for(j=0;
j<i.texturesToDestroy.length;
j++){i.WebGLRenderer.destroyTexture(i.texturesToDestroy[j])
}i.texturesToUpdate.length=0;
i.texturesToDestroy.length=0;
i.Texture.frameUpdates.length=0
};
i.WebGLRenderer.destroyTexture=function(l){for(var k=l._glTextures.length-1;
k>=0;
k--){var j=l._glTextures[k];
var m=i.glContexts[k];
if(m&&j){m.deleteTexture(j)
}}l._glTextures.length=0
};
i.WebGLRenderer.updateTextureFrame=function(j){j.updateFrame=false;
j._updateWebGLuvs()
};
i.WebGLRenderer.prototype.resize=function(k,j){this.width=k;
this.height=j;
this.view.width=k;
this.view.height=j;
this.gl.viewport(0,0,this.width,this.height);
this.projection.x=this.width/2;
this.projection.y=-this.height/2
};
i.createWebGLTexture=function(j,k){if(j.hasLoaded){j._glTextures[k.id]=k.createTexture();
k.bindTexture(k.TEXTURE_2D,j._glTextures[k.id]);
k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,true);
k.texImage2D(k.TEXTURE_2D,0,k.RGBA,k.RGBA,k.UNSIGNED_BYTE,j.source);
k.texParameteri(k.TEXTURE_2D,k.TEXTURE_MAG_FILTER,j.scaleMode===i.scaleModes.LINEAR?k.LINEAR:k.NEAREST);
k.texParameteri(k.TEXTURE_2D,k.TEXTURE_MIN_FILTER,j.scaleMode===i.scaleModes.LINEAR?k.LINEAR:k.NEAREST);
if(!j._powerOf2){k.texParameteri(k.TEXTURE_2D,k.TEXTURE_WRAP_S,k.CLAMP_TO_EDGE);
k.texParameteri(k.TEXTURE_2D,k.TEXTURE_WRAP_T,k.CLAMP_TO_EDGE)
}else{k.texParameteri(k.TEXTURE_2D,k.TEXTURE_WRAP_S,k.REPEAT);
k.texParameteri(k.TEXTURE_2D,k.TEXTURE_WRAP_T,k.REPEAT)
}k.bindTexture(k.TEXTURE_2D,null)
}return j._glTextures[k.id]
};
i.updateWebGLTexture=function(j,k){if(j._glTextures[k.id]){k.bindTexture(k.TEXTURE_2D,j._glTextures[k.id]);
k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,true);
k.texImage2D(k.TEXTURE_2D,0,k.RGBA,k.RGBA,k.UNSIGNED_BYTE,j.source);
k.texParameteri(k.TEXTURE_2D,k.TEXTURE_MAG_FILTER,j.scaleMode===i.scaleModes.LINEAR?k.LINEAR:k.NEAREST);
k.texParameteri(k.TEXTURE_2D,k.TEXTURE_MIN_FILTER,j.scaleMode===i.scaleModes.LINEAR?k.LINEAR:k.NEAREST);
if(!j._powerOf2){k.texParameteri(k.TEXTURE_2D,k.TEXTURE_WRAP_S,k.CLAMP_TO_EDGE);
k.texParameteri(k.TEXTURE_2D,k.TEXTURE_WRAP_T,k.CLAMP_TO_EDGE)
}else{k.texParameteri(k.TEXTURE_2D,k.TEXTURE_WRAP_S,k.REPEAT);
k.texParameteri(k.TEXTURE_2D,k.TEXTURE_WRAP_T,k.REPEAT)
}k.bindTexture(k.TEXTURE_2D,null)
}};
i.WebGLRenderer.prototype.handleContextLost=function(j){j.preventDefault();
this.contextLost=true
};
i.WebGLRenderer.prototype.handleContextRestored=function(){try{this.gl=this.view.getContext("experimental-webgl",this.options)
}catch(m){try{this.gl=this.view.getContext("webgl",this.options)
}catch(l){throw new Error(" This browser does not support webGL. Try using the canvas renderer"+this)
}}var n=this.gl;
n.id=i.WebGLRenderer.glContextId++;
this.shaderManager.setContext(n);
this.spriteBatch.setContext(n);
this.maskManager.setContext(n);
this.filterManager.setContext(n);
this.renderSession.gl=this.gl;
n.disable(n.DEPTH_TEST);
n.disable(n.CULL_FACE);
n.enable(n.BLEND);
n.colorMask(true,true,true,this.transparent);
this.gl.viewport(0,0,this.width,this.height);
for(var j in i.TextureCache){var k=i.TextureCache[j].baseTexture;
k._glTextures=[]
}this.contextLost=false
};
i.WebGLRenderer.prototype.destroy=function(){this.view.removeEventListener("webglcontextlost",this.contextLost);
this.view.removeEventListener("webglcontextrestored",this.contextRestoredLost);
i.glContexts[this.glContextId]=null;
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
i.WebGLRenderer.glContextId=0;
i.WebGLMaskManager=function(j){this.maskStack=[];
this.maskPosition=0;
this.setContext(j)
};
i.WebGLMaskManager.prototype.setContext=function(j){this.gl=j
};
i.WebGLMaskManager.prototype.pushMask=function(k,j){var l=this.gl;
if(this.maskStack.length===0){l.enable(l.STENCIL_TEST);
l.stencilFunc(l.ALWAYS,1,1)
}this.maskStack.push(k);
l.colorMask(false,false,false,true);
l.stencilOp(l.KEEP,l.KEEP,l.INCR);
i.WebGLGraphics.renderGraphics(k,j);
l.colorMask(true,true,true,true);
l.stencilFunc(l.NOTEQUAL,0,this.maskStack.length);
l.stencilOp(l.KEEP,l.KEEP,l.KEEP)
};
i.WebGLMaskManager.prototype.popMask=function(j){var l=this.gl;
var k=this.maskStack.pop();
if(k){l.colorMask(false,false,false,false);
l.stencilOp(l.KEEP,l.KEEP,l.DECR);
i.WebGLGraphics.renderGraphics(k,j);
l.colorMask(true,true,true,true);
l.stencilFunc(l.NOTEQUAL,0,this.maskStack.length);
l.stencilOp(l.KEEP,l.KEEP,l.KEEP)
}if(this.maskStack.length===0){l.disable(l.STENCIL_TEST)
}};
i.WebGLMaskManager.prototype.destroy=function(){this.maskStack=null;
this.gl=null
};
i.WebGLShaderManager=function(k){this.maxAttibs=10;
this.attribState=[];
this.tempAttribState=[];
for(var j=0;
j<this.maxAttibs;
j++){this.attribState[j]=false
}this.setContext(k)
};
i.WebGLShaderManager.prototype.setContext=function(j){this.gl=j;
this.primitiveShader=new i.PrimitiveShader(j);
this.defaultShader=new i.PixiShader(j);
this.fastShader=new i.PixiFastShader(j);
this.activateShader(this.defaultShader)
};
i.WebGLShaderManager.prototype.setAttribs=function(m){var k;
for(k=0;
k<this.tempAttribState.length;
k++){this.tempAttribState[k]=false
}for(k=0;
k<m.length;
k++){var j=m[k];
this.tempAttribState[j]=true
}var l=this.gl;
for(k=0;
k<this.attribState.length;
k++){if(this.attribState[k]!==this.tempAttribState[k]){this.attribState[k]=this.tempAttribState[k];
if(this.tempAttribState[k]){l.enableVertexAttribArray(k)
}else{l.disableVertexAttribArray(k)
}}}};
i.WebGLShaderManager.prototype.activateShader=function(j){this.currentShader=j;
this.gl.useProgram(j.program);
this.setAttribs(j.attributes)
};
i.WebGLShaderManager.prototype.activatePrimitiveShader=function(){var j=this.gl;
j.useProgram(this.primitiveShader.program);
this.setAttribs(this.primitiveShader.attributes)
};
i.WebGLShaderManager.prototype.deactivatePrimitiveShader=function(){var j=this.gl;
j.useProgram(this.defaultShader.program);
this.setAttribs(this.defaultShader.attributes)
};
i.WebGLShaderManager.prototype.destroy=function(){this.attribState=null;
this.tempAttribState=null;
this.primitiveShader.destroy();
this.defaultShader.destroy();
this.fastShader.destroy();
this.gl=null
};
i.WebGLSpriteBatch=function(o){this.vertSize=6;
this.size=10000;
var k=this.size*4*this.vertSize;
var n=this.size*6;
this.vertices=new Float32Array(k);
this.indices=new Uint16Array(n);
this.lastIndexCount=0;
for(var m=0,l=0;
m<n;
m+=6,l+=4){this.indices[m+0]=l+0;
this.indices[m+1]=l+1;
this.indices[m+2]=l+2;
this.indices[m+3]=l+0;
this.indices[m+4]=l+2;
this.indices[m+5]=l+3
}this.drawing=false;
this.currentBatchSize=0;
this.currentBaseTexture=null;
this.setContext(o)
};
i.WebGLSpriteBatch.prototype.setContext=function(j){this.gl=j;
this.vertexBuffer=j.createBuffer();
this.indexBuffer=j.createBuffer();
j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
j.bufferData(j.ELEMENT_ARRAY_BUFFER,this.indices,j.STATIC_DRAW);
j.bindBuffer(j.ARRAY_BUFFER,this.vertexBuffer);
j.bufferData(j.ARRAY_BUFFER,this.vertices,j.DYNAMIC_DRAW);
this.currentBlendMode=99999
};
i.WebGLSpriteBatch.prototype.begin=function(j){this.renderSession=j;
this.shader=this.renderSession.shaderManager.defaultShader;
this.start()
};
i.WebGLSpriteBatch.prototype.end=function(){this.flush()
};
i.WebGLSpriteBatch.prototype.render=function(w){if(w.texture.baseTexture!==this.currentBaseTexture||this.currentBatchSize>=this.size){this.flush();
this.currentBaseTexture=w.texture.baseTexture
}if(w.blendMode!==this.currentBlendMode){this.setBlendMode(w.blendMode)
}var s=w._uvs||w.texture._uvs;
if(!s){return
}var m=w.worldAlpha;
var o=w.tint;
var k=this.vertices;
var x=w.texture.frame.width;
var v=w.texture.frame.height;
var l=w.anchor.x;
var j=w.anchor.y;
var u,t,q,p;
if(w.texture.trim){var z=w.texture.trim;
t=z.x-l*z.width;
u=t+x;
p=z.y-j*z.height;
q=p+v
}else{u=(x)*(1-l);
t=(x)*-l;
q=v*(1-j);
p=v*-j
}var n=this.currentBatchSize*4*this.vertSize;
var y=w.worldTransform;
var F=y.a;
var D=y.c;
var B=y.b;
var A=y.d;
var E=y.tx;
var C=y.ty;
k[n++]=F*t+B*p+E;
k[n++]=A*p+D*t+C;
k[n++]=s.x0;
k[n++]=s.y0;
k[n++]=m;
k[n++]=o;
k[n++]=F*u+B*p+E;
k[n++]=A*p+D*u+C;
k[n++]=s.x1;
k[n++]=s.y1;
k[n++]=m;
k[n++]=o;
k[n++]=F*u+B*q+E;
k[n++]=A*q+D*u+C;
k[n++]=s.x2;
k[n++]=s.y2;
k[n++]=m;
k[n++]=o;
k[n++]=F*t+B*q+E;
k[n++]=A*q+D*t+C;
k[n++]=s.x3;
k[n++]=s.y3;
k[n++]=m;
k[n++]=o;
this.currentBatchSize++
};
i.WebGLSpriteBatch.prototype.renderTilingSprite=function(l){var w=l.tilingTexture;
if(w.baseTexture!==this.currentBaseTexture||this.currentBatchSize>=this.size){this.flush();
this.currentBaseTexture=w.baseTexture
}if(l.blendMode!==this.currentBlendMode){this.setBlendMode(l.blendMode)
}if(!l._uvs){l._uvs=new i.TextureUvs()
}var t=l._uvs;
l.tilePosition.x%=w.baseTexture.width;
l.tilePosition.y%=w.baseTexture.height;
var B=l.tilePosition.x/w.baseTexture.width;
var A=l.tilePosition.y/w.baseTexture.height;
var H=(l.width/w.baseTexture.width)/(l.tileScale.x*l.tileScaleOffset.x);
var E=(l.height/w.baseTexture.height)/(l.tileScale.y*l.tileScaleOffset.y);
t.x0=0-B;
t.y0=0-A;
t.x1=(1*H)-B;
t.y1=0-A;
t.x2=(1*H)-B;
t.y2=(1*E)-A;
t.x3=0-B;
t.y3=(1*E)-A;
var n=l.worldAlpha;
var p=l.tint;
var k=this.vertices;
var y=l.width;
var x=l.height;
var m=l.anchor.x;
var j=l.anchor.y;
var v=y*(1-m);
var u=y*-m;
var s=x*(1-j);
var q=x*-j;
var o=this.currentBatchSize*4*this.vertSize;
var z=l.worldTransform;
var J=z.a;
var G=z.c;
var D=z.b;
var C=z.d;
var I=z.tx;
var F=z.ty;
k[o++]=J*u+D*q+I;
k[o++]=C*q+G*u+F;
k[o++]=t.x0;
k[o++]=t.y0;
k[o++]=n;
k[o++]=p;
k[o++]=J*v+D*q+I;
k[o++]=C*q+G*v+F;
k[o++]=t.x1;
k[o++]=t.y1;
k[o++]=n;
k[o++]=p;
k[o++]=J*v+D*s+I;
k[o++]=C*s+G*v+F;
k[o++]=t.x2;
k[o++]=t.y2;
k[o++]=n;
k[o++]=p;
k[o++]=J*u+D*s+I;
k[o++]=C*s+G*u+F;
k[o++]=t.x3;
k[o++]=t.y3;
k[o++]=n;
k[o++]=p;
this.currentBatchSize++
};
i.WebGLSpriteBatch.prototype.flush=function(){if(this.currentBatchSize===0){return
}var k=this.gl;
k.bindTexture(k.TEXTURE_2D,this.currentBaseTexture._glTextures[k.id]||i.createWebGLTexture(this.currentBaseTexture,k));
if(this.currentBatchSize>(this.size*0.5)){k.bufferSubData(k.ARRAY_BUFFER,0,this.vertices)
}else{var j=this.vertices.subarray(0,this.currentBatchSize*4*this.vertSize);
k.bufferSubData(k.ARRAY_BUFFER,0,j)
}k.drawElements(k.TRIANGLES,this.currentBatchSize*6,k.UNSIGNED_SHORT,0);
this.currentBatchSize=0;
this.renderSession.drawCount++
};
i.WebGLSpriteBatch.prototype.stop=function(){this.flush()
};
i.WebGLSpriteBatch.prototype.start=function(){var l=this.gl;
l.activeTexture(l.TEXTURE0);
l.bindBuffer(l.ARRAY_BUFFER,this.vertexBuffer);
l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
var j=this.renderSession.projection;
l.uniform2f(this.shader.projectionVector,j.x,j.y);
var k=this.vertSize*4;
l.vertexAttribPointer(this.shader.aVertexPosition,2,l.FLOAT,false,k,0);
l.vertexAttribPointer(this.shader.aTextureCoord,2,l.FLOAT,false,k,2*4);
l.vertexAttribPointer(this.shader.colorAttribute,2,l.FLOAT,false,k,4*4);
if(this.currentBlendMode!==i.blendModes.NORMAL){this.setBlendMode(i.blendModes.NORMAL)
}};
i.WebGLSpriteBatch.prototype.setBlendMode=function(j){this.flush();
this.currentBlendMode=j;
var k=i.blendModesWebGL[this.currentBlendMode];
this.gl.blendFunc(k[0],k[1])
};
i.WebGLSpriteBatch.prototype.destroy=function(){this.vertices=null;
this.indices=null;
this.gl.deleteBuffer(this.vertexBuffer);
this.gl.deleteBuffer(this.indexBuffer);
this.currentBaseTexture=null;
this.gl=null
};
i.WebGLFastSpriteBatch=function(o){this.vertSize=10;
this.maxSize=6000;
this.size=this.maxSize;
var k=this.size*4*this.vertSize;
var n=this.maxSize*6;
this.vertices=new Float32Array(k);
this.indices=new Uint16Array(n);
this.vertexBuffer=null;
this.indexBuffer=null;
this.lastIndexCount=0;
for(var m=0,l=0;
m<n;
m+=6,l+=4){this.indices[m+0]=l+0;
this.indices[m+1]=l+1;
this.indices[m+2]=l+2;
this.indices[m+3]=l+0;
this.indices[m+4]=l+2;
this.indices[m+5]=l+3
}this.drawing=false;
this.currentBatchSize=0;
this.currentBaseTexture=null;
this.currentBlendMode=0;
this.renderSession=null;
this.shader=null;
this.matrix=null;
this.setContext(o)
};
i.WebGLFastSpriteBatch.prototype.setContext=function(j){this.gl=j;
this.vertexBuffer=j.createBuffer();
this.indexBuffer=j.createBuffer();
j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
j.bufferData(j.ELEMENT_ARRAY_BUFFER,this.indices,j.STATIC_DRAW);
j.bindBuffer(j.ARRAY_BUFFER,this.vertexBuffer);
j.bufferData(j.ARRAY_BUFFER,this.vertices,j.DYNAMIC_DRAW);
this.currentBlendMode=99999
};
i.WebGLFastSpriteBatch.prototype.begin=function(j,k){this.renderSession=k;
this.shader=this.renderSession.shaderManager.fastShader;
this.matrix=j.worldTransform.toArray(true);
this.start()
};
i.WebGLFastSpriteBatch.prototype.end=function(){this.flush()
};
i.WebGLFastSpriteBatch.prototype.render=function(k){var o=k.children;
var n=o[0];
if(!n.texture._uvs){return
}this.currentBaseTexture=n.texture.baseTexture;
if(n.blendMode!==this.currentBlendMode){this.setBlendMode(n.blendMode)
}for(var m=0,l=o.length;
m<l;
m++){this.renderSprite(o[m])
}this.flush()
};
i.WebGLFastSpriteBatch.prototype.renderSprite=function(t){if(t.texture.baseTexture!==this.currentBaseTexture){this.flush();
this.currentBaseTexture=t.texture.baseTexture;
if(!t.texture._uvs){return
}}var m,k=this.vertices,j,u,o,n,s,q,p;
m=t.texture._uvs;
j=t.texture.frame.width;
u=t.texture.frame.height;
if(t.texture.trim){var l=t.texture.trim;
n=l.x-t.anchor.x*l.width;
o=n+t.texture.frame.width;
q=l.y-t.anchor.y*l.height;
s=q+t.texture.frame.height
}else{o=(t.texture.frame.width)*(1-t.anchor.x);
n=(t.texture.frame.width)*-t.anchor.x;
s=t.texture.frame.height*(1-t.anchor.y);
q=t.texture.frame.height*-t.anchor.y
}p=this.currentBatchSize*4*this.vertSize;
k[p++]=n;
k[p++]=q;
k[p++]=t.position.x;
k[p++]=t.position.y;
k[p++]=t.scale.x;
k[p++]=t.scale.y;
k[p++]=t.rotation;
k[p++]=m.x0;
k[p++]=m.y1;
k[p++]=t.alpha;
k[p++]=o;
k[p++]=q;
k[p++]=t.position.x;
k[p++]=t.position.y;
k[p++]=t.scale.x;
k[p++]=t.scale.y;
k[p++]=t.rotation;
k[p++]=m.x1;
k[p++]=m.y1;
k[p++]=t.alpha;
k[p++]=o;
k[p++]=s;
k[p++]=t.position.x;
k[p++]=t.position.y;
k[p++]=t.scale.x;
k[p++]=t.scale.y;
k[p++]=t.rotation;
k[p++]=m.x2;
k[p++]=m.y2;
k[p++]=t.alpha;
k[p++]=n;
k[p++]=s;
k[p++]=t.position.x;
k[p++]=t.position.y;
k[p++]=t.scale.x;
k[p++]=t.scale.y;
k[p++]=t.rotation;
k[p++]=m.x3;
k[p++]=m.y3;
k[p++]=t.alpha;
this.currentBatchSize++;
if(this.currentBatchSize>=this.size){this.flush()
}};
i.WebGLFastSpriteBatch.prototype.flush=function(){if(this.currentBatchSize===0){return
}var k=this.gl;
if(!this.currentBaseTexture._glTextures[k.id]){i.createWebGLTexture(this.currentBaseTexture,k)
}k.bindTexture(k.TEXTURE_2D,this.currentBaseTexture._glTextures[k.id]);
if(this.currentBatchSize>(this.size*0.5)){k.bufferSubData(k.ARRAY_BUFFER,0,this.vertices)
}else{var j=this.vertices.subarray(0,this.currentBatchSize*4*this.vertSize);
k.bufferSubData(k.ARRAY_BUFFER,0,j)
}k.drawElements(k.TRIANGLES,this.currentBatchSize*6,k.UNSIGNED_SHORT,0);
this.currentBatchSize=0;
this.renderSession.drawCount++
};
i.WebGLFastSpriteBatch.prototype.stop=function(){this.flush()
};
i.WebGLFastSpriteBatch.prototype.start=function(){var l=this.gl;
l.activeTexture(l.TEXTURE0);
l.bindBuffer(l.ARRAY_BUFFER,this.vertexBuffer);
l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
var j=this.renderSession.projection;
l.uniform2f(this.shader.projectionVector,j.x,j.y);
l.uniformMatrix3fv(this.shader.uMatrix,false,this.matrix);
var k=this.vertSize*4;
l.vertexAttribPointer(this.shader.aVertexPosition,2,l.FLOAT,false,k,0);
l.vertexAttribPointer(this.shader.aPositionCoord,2,l.FLOAT,false,k,2*4);
l.vertexAttribPointer(this.shader.aScale,2,l.FLOAT,false,k,4*4);
l.vertexAttribPointer(this.shader.aRotation,1,l.FLOAT,false,k,6*4);
l.vertexAttribPointer(this.shader.aTextureCoord,2,l.FLOAT,false,k,7*4);
l.vertexAttribPointer(this.shader.colorAttribute,1,l.FLOAT,false,k,9*4);
if(this.currentBlendMode!==i.blendModes.NORMAL){this.setBlendMode(i.blendModes.NORMAL)
}};
i.WebGLFastSpriteBatch.prototype.setBlendMode=function(j){this.flush();
this.currentBlendMode=j;
var k=i.blendModesWebGL[this.currentBlendMode];
this.gl.blendFunc(k[0],k[1])
};
i.WebGLFilterManager=function(k,j){this.transparent=j;
this.filterStack=[];
this.offsetX=0;
this.offsetY=0;
this.setContext(k)
};
i.WebGLFilterManager.prototype.setContext=function(j){this.gl=j;
this.texturePool=[];
this.initShaderBuffers()
};
i.WebGLFilterManager.prototype.begin=function(l,k){this.renderSession=l;
this.defaultShader=l.shaderManager.defaultShader;
var j=this.renderSession.projection;
this.width=j.x*2;
this.height=-j.y*2;
this.buffer=k
};
i.WebGLFilterManager.prototype.pushFilter=function(k){var q=this.gl;
var j=this.renderSession.projection;
var p=this.renderSession.offset;
this.filterStack.push(k);
var m=k.filterPasses[0];
this.offsetX+=k.target.filterArea.x;
this.offsetY+=k.target.filterArea.y;
var n=this.texturePool.pop();
if(!n){n=new i.FilterTexture(this.gl,this.width,this.height)
}else{n.resize(this.width,this.height)
}q.bindTexture(q.TEXTURE_2D,n.texture);
k.target.filterArea=k.target.getBounds();
var o=k.target.filterArea;
var l=m.padding;
o.x-=l;
o.y-=l;
o.width+=l*2;
o.height+=l*2;
if(o.x<0){o.x=0
}if(o.width>this.width){o.width=this.width
}if(o.y<0){o.y=0
}if(o.height>this.height){o.height=this.height
}q.bindFramebuffer(q.FRAMEBUFFER,n.frameBuffer);
q.viewport(0,0,o.width,o.height);
j.x=o.width/2;
j.y=-o.height/2;
p.x=-o.x;
p.y=-o.y;
q.uniform2f(this.defaultShader.projectionVector,o.width/2,-o.height/2);
q.uniform2f(this.defaultShader.offsetVector,-o.x,-o.y);
q.colorMask(true,true,true,true);
q.clearColor(0,0,0,0);
q.clear(q.COLOR_BUFFER_BIT);
k._glFilterTexture=n
};
i.WebGLFilterManager.prototype.popFilter=function(){var w=this.gl;
var t=this.filterStack.pop();
var E=t.target.filterArea;
var q=t._glFilterTexture;
var F=this.renderSession.projection;
var m=this.renderSession.offset;
if(t.filterPasses.length>1){w.viewport(0,0,E.width,E.height);
w.bindBuffer(w.ARRAY_BUFFER,this.vertexBuffer);
this.vertexArray[0]=0;
this.vertexArray[1]=E.height;
this.vertexArray[2]=E.width;
this.vertexArray[3]=E.height;
this.vertexArray[4]=0;
this.vertexArray[5]=0;
this.vertexArray[6]=E.width;
this.vertexArray[7]=0;
w.bufferSubData(w.ARRAY_BUFFER,0,this.vertexArray);
w.bindBuffer(w.ARRAY_BUFFER,this.uvBuffer);
this.uvArray[2]=E.width/this.width;
this.uvArray[5]=E.height/this.height;
this.uvArray[6]=E.width/this.width;
this.uvArray[7]=E.height/this.height;
w.bufferSubData(w.ARRAY_BUFFER,0,this.uvArray);
var A=q;
var k=this.texturePool.pop();
if(!k){k=new i.FilterTexture(this.gl,this.width,this.height)
}w.bindFramebuffer(w.FRAMEBUFFER,k.frameBuffer);
w.clear(w.COLOR_BUFFER_BIT);
w.disable(w.BLEND);
for(var z=0;
z<t.filterPasses.length-1;
z++){var l=t.filterPasses[z];
w.bindFramebuffer(w.FRAMEBUFFER,k.frameBuffer);
w.activeTexture(w.TEXTURE0);
w.bindTexture(w.TEXTURE_2D,A.texture);
this.applyFilterPass(l,E,E.width,E.height);
var D=A;
A=k;
k=D
}w.enable(w.BLEND);
q=A;
this.texturePool.push(k)
}var p=t.filterPasses[t.filterPasses.length-1];
this.offsetX-=E.x;
this.offsetY-=E.y;
var u=this.width;
var s=this.height;
var C=0;
var B=0;
var v=this.buffer;
if(this.filterStack.length===0){w.colorMask(true,true,true,this.transparent)
}else{var j=this.filterStack[this.filterStack.length-1];
E=j.target.filterArea;
u=E.width;
s=E.height;
C=E.x;
B=E.y;
v=j._glFilterTexture.frameBuffer
}F.x=u/2;
F.y=-s/2;
m.x=C;
m.y=B;
E=t.target.filterArea;
var o=E.x-C;
var n=E.y-B;
w.bindBuffer(w.ARRAY_BUFFER,this.vertexBuffer);
this.vertexArray[0]=o;
this.vertexArray[1]=n+E.height;
this.vertexArray[2]=o+E.width;
this.vertexArray[3]=n+E.height;
this.vertexArray[4]=o;
this.vertexArray[5]=n;
this.vertexArray[6]=o+E.width;
this.vertexArray[7]=n;
w.bufferSubData(w.ARRAY_BUFFER,0,this.vertexArray);
w.bindBuffer(w.ARRAY_BUFFER,this.uvBuffer);
this.uvArray[2]=E.width/this.width;
this.uvArray[5]=E.height/this.height;
this.uvArray[6]=E.width/this.width;
this.uvArray[7]=E.height/this.height;
w.bufferSubData(w.ARRAY_BUFFER,0,this.uvArray);
w.viewport(0,0,u,s);
w.bindFramebuffer(w.FRAMEBUFFER,v);
w.activeTexture(w.TEXTURE0);
w.bindTexture(w.TEXTURE_2D,q.texture);
this.applyFilterPass(p,E,u,s);
w.useProgram(this.defaultShader.program);
w.uniform2f(this.defaultShader.projectionVector,u/2,-s/2);
w.uniform2f(this.defaultShader.offsetVector,-C,-B);
this.texturePool.push(q);
t._glFilterTexture=null
};
i.WebGLFilterManager.prototype.applyFilterPass=function(l,n,k,j){var o=this.gl;
var m=l.shaders[o.id];
if(!m){m=new i.PixiShader(o);
m.fragmentSrc=l.fragmentSrc;
m.uniforms=l.uniforms;
m.init();
l.shaders[o.id]=m
}o.useProgram(m.program);
o.uniform2f(m.projectionVector,k/2,-j/2);
o.uniform2f(m.offsetVector,0,0);
if(l.uniforms.dimensions){l.uniforms.dimensions.value[0]=this.width;
l.uniforms.dimensions.value[1]=this.height;
l.uniforms.dimensions.value[2]=this.vertexArray[0];
l.uniforms.dimensions.value[3]=this.vertexArray[5]
}m.syncUniforms();
o.bindBuffer(o.ARRAY_BUFFER,this.vertexBuffer);
o.vertexAttribPointer(m.aVertexPosition,2,o.FLOAT,false,0,0);
o.bindBuffer(o.ARRAY_BUFFER,this.uvBuffer);
o.vertexAttribPointer(m.aTextureCoord,2,o.FLOAT,false,0,0);
o.bindBuffer(o.ARRAY_BUFFER,this.colorBuffer);
o.vertexAttribPointer(m.colorAttribute,2,o.FLOAT,false,0,0);
o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
o.drawElements(o.TRIANGLES,6,o.UNSIGNED_SHORT,0);
this.renderSession.drawCount++
};
i.WebGLFilterManager.prototype.initShaderBuffers=function(){var j=this.gl;
this.vertexBuffer=j.createBuffer();
this.uvBuffer=j.createBuffer();
this.colorBuffer=j.createBuffer();
this.indexBuffer=j.createBuffer();
this.vertexArray=new Float32Array([0,0,1,0,0,1,1,1]);
j.bindBuffer(j.ARRAY_BUFFER,this.vertexBuffer);
j.bufferData(j.ARRAY_BUFFER,this.vertexArray,j.STATIC_DRAW);
this.uvArray=new Float32Array([0,0,1,0,0,1,1,1]);
j.bindBuffer(j.ARRAY_BUFFER,this.uvBuffer);
j.bufferData(j.ARRAY_BUFFER,this.uvArray,j.STATIC_DRAW);
this.colorArray=new Float32Array([1,16777215,1,16777215,1,16777215,1,16777215]);
j.bindBuffer(j.ARRAY_BUFFER,this.colorBuffer);
j.bufferData(j.ARRAY_BUFFER,this.colorArray,j.STATIC_DRAW);
j.bindBuffer(j.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
j.bufferData(j.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,1,3,2]),j.STATIC_DRAW)
};
i.WebGLFilterManager.prototype.destroy=function(){var k=this.gl;
this.filterStack=null;
this.offsetX=0;
this.offsetY=0;
for(var j=0;
j<this.texturePool.length;
j++){this.texturePool.destroy()
}this.texturePool=null;
k.deleteBuffer(this.vertexBuffer);
k.deleteBuffer(this.uvBuffer);
k.deleteBuffer(this.colorBuffer);
k.deleteBuffer(this.indexBuffer)
};
i.FilterTexture=function(l,k,j){this.gl=l;
this.frameBuffer=l.createFramebuffer();
this.texture=l.createTexture();
l.bindTexture(l.TEXTURE_2D,this.texture);
l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MAG_FILTER,l.LINEAR);
l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR);
l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE);
l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE);
l.bindFramebuffer(l.FRAMEBUFFER,this.framebuffer);
l.bindFramebuffer(l.FRAMEBUFFER,this.frameBuffer);
l.framebufferTexture2D(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,this.texture,0);
this.resize(k,j)
};
i.FilterTexture.prototype.clear=function(){var j=this.gl;
j.clearColor(0,0,0,0);
j.clear(j.COLOR_BUFFER_BIT)
};
i.FilterTexture.prototype.resize=function(k,j){if(this.width===k&&this.height===j){return
}this.width=k;
this.height=j;
var l=this.gl;
l.bindTexture(l.TEXTURE_2D,this.texture);
l.texImage2D(l.TEXTURE_2D,0,l.RGBA,k,j,0,l.RGBA,l.UNSIGNED_BYTE,null)
};
i.FilterTexture.prototype.destroy=function(){var j=this.gl;
j.deleteFramebuffer(this.frameBuffer);
j.deleteTexture(this.texture);
this.frameBuffer=null;
this.texture=null
};
i.CanvasMaskManager=function(){};
i.CanvasMaskManager.prototype.pushMask=function(m,l){l.save();
var j=m.alpha;
var k=m.worldTransform;
l.setTransform(k.a,k.c,k.b,k.d,k.tx,k.ty);
i.CanvasGraphics.renderGraphicsMask(m,l);
l.clip();
m.worldAlpha=j
};
i.CanvasMaskManager.prototype.popMask=function(j){j.restore()
};
i.CanvasTinter=function(){};
i.CanvasTinter.getTintedTexture=function(m,j){var o=m.texture;
j=i.CanvasTinter.roundColor(j);
var n="#"+("00000"+(j|0).toString(16)).substr(-6);
o.tintCache=o.tintCache||{};
if(o.tintCache[n]){return o.tintCache[n]
}var k=i.CanvasTinter.canvas||document.createElement("canvas");
i.CanvasTinter.tintMethod(o,j,k);
if(i.CanvasTinter.convertTintToImage){var l=new Image();
l.src=k.toDataURL();
o.tintCache[n]=l
}else{o.tintCache[n]=k;
i.CanvasTinter.canvas=null
}return k
};
i.CanvasTinter.tintWithMultiply=function(m,j,k){var l=k.getContext("2d");
var n=m.frame;
k.width=n.width;
k.height=n.height;
l.fillStyle="#"+("00000"+(j|0).toString(16)).substr(-6);
l.fillRect(0,0,n.width,n.height);
l.globalCompositeOperation="multiply";
l.drawImage(m.baseTexture.source,n.x,n.y,n.width,n.height,0,0,n.width,n.height);
l.globalCompositeOperation="destination-atop";
l.drawImage(m.baseTexture.source,n.x,n.y,n.width,n.height,0,0,n.width,n.height)
};
i.CanvasTinter.tintWithOverlay=function(m,j,k){var l=k.getContext("2d");
var n=m.frame;
k.width=n.width;
k.height=n.height;
l.globalCompositeOperation="copy";
l.fillStyle="#"+("00000"+(j|0).toString(16)).substr(-6);
l.fillRect(0,0,n.width,n.height);
l.globalCompositeOperation="destination-atop";
l.drawImage(m.baseTexture.source,n.x,n.y,n.width,n.height,0,0,n.width,n.height)
};
i.CanvasTinter.tintWithPerPixel=function(t,p,n){var l=n.getContext("2d");
var m=t.frame;
n.width=m.width;
n.height=m.height;
l.globalCompositeOperation="copy";
l.drawImage(t.baseTexture.source,m.x,m.y,m.width,m.height,0,0,m.width,m.height);
var k=i.hex2rgb(p);
var j=k[0],s=k[1],u=k[2];
var v=l.getImageData(0,0,m.width,m.height);
var o=v.data;
for(var q=0;
q<o.length;
q+=4){o[q+0]*=j;
o[q+1]*=s;
o[q+2]*=u
}l.putImageData(v,0,0)
};
i.CanvasTinter.roundColor=function(j){var k=i.CanvasTinter.cacheStepsPerColorChannel;
var l=i.hex2rgb(j);
l[0]=Math.min(255,(l[0]/k)*k);
l[1]=Math.min(255,(l[1]/k)*k);
l[2]=Math.min(255,(l[2]/k)*k);
return i.rgb2hex(l)
};
i.CanvasTinter.cacheStepsPerColorChannel=8;
i.CanvasTinter.convertTintToImage=false;
i.CanvasTinter.canUseMultiply=i.canUseNewCanvasBlendModes();
i.CanvasTinter.tintMethod=i.CanvasTinter.canUseMultiply?i.CanvasTinter.tintWithMultiply:i.CanvasTinter.tintWithPerPixel;
i.CanvasRenderer=function(l,j,k,m){i.defaultRenderer=i.defaultRenderer||this;
this.type=i.CANVAS_RENDERER;
this.clearBeforeRender=true;
this.roundPixels=false;
this.transparent=!!m;
if(!i.blendModesCanvas){i.blendModesCanvas=[];
if(i.canUseNewCanvasBlendModes()){i.blendModesCanvas[i.blendModes.NORMAL]="source-over";
i.blendModesCanvas[i.blendModes.ADD]="lighter";
i.blendModesCanvas[i.blendModes.MULTIPLY]="multiply";
i.blendModesCanvas[i.blendModes.SCREEN]="screen";
i.blendModesCanvas[i.blendModes.OVERLAY]="overlay";
i.blendModesCanvas[i.blendModes.DARKEN]="darken";
i.blendModesCanvas[i.blendModes.LIGHTEN]="lighten";
i.blendModesCanvas[i.blendModes.COLOR_DODGE]="color-dodge";
i.blendModesCanvas[i.blendModes.COLOR_BURN]="color-burn";
i.blendModesCanvas[i.blendModes.HARD_LIGHT]="hard-light";
i.blendModesCanvas[i.blendModes.SOFT_LIGHT]="soft-light";
i.blendModesCanvas[i.blendModes.DIFFERENCE]="difference";
i.blendModesCanvas[i.blendModes.EXCLUSION]="exclusion";
i.blendModesCanvas[i.blendModes.HUE]="hue";
i.blendModesCanvas[i.blendModes.SATURATION]="saturation";
i.blendModesCanvas[i.blendModes.COLOR]="color";
i.blendModesCanvas[i.blendModes.LUMINOSITY]="luminosity"
}else{i.blendModesCanvas[i.blendModes.NORMAL]="source-over";
i.blendModesCanvas[i.blendModes.ADD]="lighter";
i.blendModesCanvas[i.blendModes.MULTIPLY]="source-over";
i.blendModesCanvas[i.blendModes.SCREEN]="source-over";
i.blendModesCanvas[i.blendModes.OVERLAY]="source-over";
i.blendModesCanvas[i.blendModes.DARKEN]="source-over";
i.blendModesCanvas[i.blendModes.LIGHTEN]="source-over";
i.blendModesCanvas[i.blendModes.COLOR_DODGE]="source-over";
i.blendModesCanvas[i.blendModes.COLOR_BURN]="source-over";
i.blendModesCanvas[i.blendModes.HARD_LIGHT]="source-over";
i.blendModesCanvas[i.blendModes.SOFT_LIGHT]="source-over";
i.blendModesCanvas[i.blendModes.DIFFERENCE]="source-over";
i.blendModesCanvas[i.blendModes.EXCLUSION]="source-over";
i.blendModesCanvas[i.blendModes.HUE]="source-over";
i.blendModesCanvas[i.blendModes.SATURATION]="source-over";
i.blendModesCanvas[i.blendModes.COLOR]="source-over";
i.blendModesCanvas[i.blendModes.LUMINOSITY]="source-over"
}}this.width=l||800;
this.height=j||600;
this.view=k||document.createElement("canvas");
this.context=this.view.getContext("2d",{alpha:this.transparent});
this.refresh=true;
this.view.width=this.width;
this.view.height=this.height;
this.count=0;
this.maskManager=new i.CanvasMaskManager();
this.renderSession={context:this.context,maskManager:this.maskManager,scaleMode:null,smoothProperty:null};
if("imageSmoothingEnabled" in this.context){this.renderSession.smoothProperty="imageSmoothingEnabled"
}else{if("webkitImageSmoothingEnabled" in this.context){this.renderSession.smoothProperty="webkitImageSmoothingEnabled"
}else{if("mozImageSmoothingEnabled" in this.context){this.renderSession.smoothProperty="mozImageSmoothingEnabled"
}else{if("oImageSmoothingEnabled" in this.context){this.renderSession.smoothProperty="oImageSmoothingEnabled"
}}}}};
i.CanvasRenderer.prototype.constructor=i.CanvasRenderer;
i.CanvasRenderer.prototype.render=function(j){i.texturesToUpdate.length=0;
i.texturesToDestroy.length=0;
j.updateTransform();
this.context.setTransform(1,0,0,1,0,0);
this.context.globalAlpha=1;
if(!this.transparent&&this.clearBeforeRender){this.context.fillStyle=j.backgroundColorString;
this.context.fillRect(0,0,this.width,this.height)
}else{if(this.transparent&&this.clearBeforeRender){this.context.clearRect(0,0,this.width,this.height)
}}this.renderDisplayObject(j);
if(j.interactive){if(!j._interactiveEventsAdded){j._interactiveEventsAdded=true;
j.interactionManager.setTarget(this)
}}if(i.Texture.frameUpdates.length>0){i.Texture.frameUpdates.length=0
}};
i.CanvasRenderer.prototype.resize=function(k,j){this.width=k;
this.height=j;
this.view.width=k;
this.view.height=j
};
i.CanvasRenderer.prototype.renderDisplayObject=function(k,j){this.renderSession.context=j||this.context;
k._renderCanvas(this.renderSession)
};
i.CanvasRenderer.prototype.renderStripFlat=function(k){var l=this.context;
var n=k.verticies;
var o=n.length/2;
this.count++;
l.beginPath();
for(var q=1;
q<o-2;
q++){var s=q*2;
var p=n[s],m=n[s+2],j=n[s+4];
var v=n[s+1],u=n[s+3],t=n[s+5];
l.moveTo(p,v);
l.lineTo(m,u);
l.lineTo(j,t)
}l.fillStyle="#FF0000";
l.fill();
l.closePath()
};
i.CanvasRenderer.prototype.renderStrip=function(B){var n=this.context;
var m=B.verticies;
var A=B.uvs;
var s=m.length/2;
this.count++;
for(var C=1;
C<s-2;
C++){var u=C*2;
var I=m[u],H=m[u+2],F=m[u+4];
var q=m[u+1],p=m[u+3],l=m[u+5];
var G=A[u]*B.texture.width,E=A[u+2]*B.texture.width,D=A[u+4]*B.texture.width;
var o=A[u+1]*B.texture.height,k=A[u+3]*B.texture.height,j=A[u+5]*B.texture.height;
n.save();
n.beginPath();
n.moveTo(I,q);
n.lineTo(H,p);
n.lineTo(F,l);
n.closePath();
n.clip();
var J=G*k+o*D+E*j-k*D-o*E-G*j;
var z=I*k+o*F+H*j-k*F-o*H-I*j;
var y=G*H+I*D+E*F-H*D-I*E-G*F;
var x=G*k*F+o*H*D+I*E*j-I*k*D-o*E*F-G*H*j;
var w=q*k+o*l+p*j-k*l-o*p-q*j;
var v=G*p+q*D+E*l-p*D-q*E-G*l;
var t=G*k*l+o*p*D+q*E*j-q*k*D-o*E*l-G*p*j;
n.transform(z/J,w/J,y/J,v/J,x/J,t/J);
n.drawImage(B.texture.baseTexture.source,0,0);
n.restore()
}};
i.CanvasBuffer=function(k,j){this.width=k;
this.height=j;
this.canvas=document.createElement("canvas");
this.context=this.canvas.getContext("2d");
this.canvas.width=k;
this.canvas.height=j
};
i.CanvasBuffer.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)
};
i.CanvasBuffer.prototype.resize=function(k,j){this.width=this.canvas.width=k;
this.height=this.canvas.height=j
};
i.CanvasGraphics=function(){};
i.CanvasGraphics.renderGraphics=function(F,l){var z=F.worldAlpha;
var A="";
for(var D=0;
D<F.graphicsData.length;
D++){var H=F.graphicsData[D];
var C=H.points;
l.strokeStyle=A="#"+("00000"+(H.lineColor|0).toString(16)).substr(-6);
l.lineWidth=H.lineWidth;
if(H.type===i.Graphics.POLY){l.beginPath();
l.moveTo(C[0],C[1]);
for(var B=1;
B<C.length/2;
B++){l.lineTo(C[B*2],C[B*2+1])
}if(C[0]===C[C.length-2]&&C[1]===C[C.length-1]){l.closePath()
}if(H.fill){l.globalAlpha=H.fillAlpha*z;
l.fillStyle=A="#"+("00000"+(H.fillColor|0).toString(16)).substr(-6);
l.fill()
}if(H.lineWidth){l.globalAlpha=H.lineAlpha*z;
l.stroke()
}}else{if(H.type===i.Graphics.RECT){if(H.fillColor||H.fillColor===0){l.globalAlpha=H.fillAlpha*z;
l.fillStyle=A="#"+("00000"+(H.fillColor|0).toString(16)).substr(-6);
l.fillRect(C[0],C[1],C[2],C[3])
}if(H.lineWidth){l.globalAlpha=H.lineAlpha*z;
l.strokeRect(C[0],C[1],C[2],C[3])
}}else{if(H.type===i.Graphics.CIRC){l.beginPath();
l.arc(C[0],C[1],C[2],0,2*Math.PI);
l.closePath();
if(H.fill){l.globalAlpha=H.fillAlpha*z;
l.fillStyle=A="#"+("00000"+(H.fillColor|0).toString(16)).substr(-6);
l.fill()
}if(H.lineWidth){l.globalAlpha=H.lineAlpha*z;
l.stroke()
}}else{if(H.type===i.Graphics.ELIP){var s=H.points;
var q=s[2]*2;
var E=s[3]*2;
var p=s[0]-q/2;
var o=s[1]-E/2;
l.beginPath();
var t=0.5522848,n=(q/2)*t,m=(E/2)*t,v=p+q,k=o+E,u=p+q/2,G=o+E/2;
l.moveTo(p,G);
l.bezierCurveTo(p,G-m,u-n,o,u,o);
l.bezierCurveTo(u+n,o,v,G-m,v,G);
l.bezierCurveTo(v,G+m,u+n,k,u,k);
l.bezierCurveTo(u-n,k,p,G+m,p,G);
l.closePath();
if(H.fill){l.globalAlpha=H.fillAlpha*z;
l.fillStyle=A="#"+("00000"+(H.fillColor|0).toString(16)).substr(-6);
l.fill()
}if(H.lineWidth){l.globalAlpha=H.lineAlpha*z;
l.stroke()
}}}}}}};
i.CanvasGraphics.renderGraphicsMask=function(E,l){var C=E.graphicsData.length;
if(C===0){return
}if(C>1){C=1;
window.console.log("Pixi.js warning: masks in canvas can only mask using the first path in the graphics object")
}for(var B=0;
B<1;
B++){var G=E.graphicsData[B];
var A=G.points;
if(G.type===i.Graphics.POLY){l.beginPath();
l.moveTo(A[0],A[1]);
for(var z=1;
z<A.length/2;
z++){l.lineTo(A[z*2],A[z*2+1])
}if(A[0]===A[A.length-2]&&A[1]===A[A.length-1]){l.closePath()
}}else{if(G.type===i.Graphics.RECT){l.beginPath();
l.rect(A[0],A[1],A[2],A[3]);
l.closePath()
}else{if(G.type===i.Graphics.CIRC){l.beginPath();
l.arc(A[0],A[1],A[2],0,2*Math.PI);
l.closePath()
}else{if(G.type===i.Graphics.ELIP){var s=G.points;
var q=s[2]*2;
var D=s[3]*2;
var p=s[0]-q/2;
var o=s[1]-D/2;
l.beginPath();
var t=0.5522848,n=(q/2)*t,m=(D/2)*t,v=p+q,k=o+D,u=p+q/2,F=o+D/2;
l.moveTo(p,F);
l.bezierCurveTo(p,F-m,u-n,o,u,o);
l.bezierCurveTo(u+n,o,v,F-m,v,F);
l.bezierCurveTo(v,F+m,u+n,k,u,k);
l.bezierCurveTo(u-n,k,p,F+m,p,F);
l.closePath()
}}}}}};
i.Graphics=function(){i.DisplayObjectContainer.call(this);
this.renderable=true;
this.fillAlpha=1;
this.lineWidth=0;
this.lineColor="black";
this.graphicsData=[];
this.tint=16777215;
this.blendMode=i.blendModes.NORMAL;
this.currentPath={points:[]};
this._webGL=[];
this.isMask=false;
this.bounds=null;
this.boundsPadding=10
};
i.Graphics.prototype=Object.create(i.DisplayObjectContainer.prototype);
i.Graphics.prototype.constructor=i.Graphics;
Object.defineProperty(i.Graphics.prototype,"cacheAsBitmap",{get:function(){return this._cacheAsBitmap
},set:function(j){this._cacheAsBitmap=j;
if(this._cacheAsBitmap){this._generateCachedSprite()
}else{this.destroyCachedSprite();
this.dirty=true
}}});
i.Graphics.prototype.lineStyle=function(j,k,l){if(!this.currentPath.points.length){this.graphicsData.pop()
}this.lineWidth=j||0;
this.lineColor=k||0;
this.lineAlpha=(arguments.length<3)?1:l;
this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[],type:i.Graphics.POLY};
this.graphicsData.push(this.currentPath);
return this
};
i.Graphics.prototype.moveTo=function(j,k){if(!this.currentPath.points.length){this.graphicsData.pop()
}this.currentPath=this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[],type:i.Graphics.POLY};
this.currentPath.points.push(j,k);
this.graphicsData.push(this.currentPath);
return this
};
i.Graphics.prototype.lineTo=function(j,k){this.currentPath.points.push(j,k);
this.dirty=true;
return this
};
i.Graphics.prototype.beginFill=function(j,k){this.filling=true;
this.fillColor=j||0;
this.fillAlpha=(arguments.length<2)?1:k;
return this
};
i.Graphics.prototype.endFill=function(){this.filling=false;
this.fillColor=null;
this.fillAlpha=1;
return this
};
i.Graphics.prototype.drawRect=function(k,m,l,j){if(!this.currentPath.points.length){this.graphicsData.pop()
}this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[k,m,l,j],type:i.Graphics.RECT};
this.graphicsData.push(this.currentPath);
this.dirty=true;
return this
};
i.Graphics.prototype.drawCircle=function(k,l,j){if(!this.currentPath.points.length){this.graphicsData.pop()
}this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[k,l,j,j],type:i.Graphics.CIRC};
this.graphicsData.push(this.currentPath);
this.dirty=true;
return this
};
i.Graphics.prototype.drawEllipse=function(k,m,l,j){if(!this.currentPath.points.length){this.graphicsData.pop()
}this.currentPath={lineWidth:this.lineWidth,lineColor:this.lineColor,lineAlpha:this.lineAlpha,fillColor:this.fillColor,fillAlpha:this.fillAlpha,fill:this.filling,points:[k,m,l,j],type:i.Graphics.ELIP};
this.graphicsData.push(this.currentPath);
this.dirty=true;
return this
};
i.Graphics.prototype.clear=function(){this.lineWidth=0;
this.filling=false;
this.dirty=true;
this.clearDirty=true;
this.graphicsData=[];
this.bounds=null;
return this
};
i.Graphics.prototype.generateTexture=function(){var l=this.getBounds();
var j=new i.CanvasBuffer(l.width,l.height);
var k=i.Texture.fromCanvas(j.canvas);
j.context.translate(-l.x,-l.y);
i.CanvasGraphics.renderGraphics(this,j.context);
return k
};
i.Graphics.prototype._renderWebGL=function(m){if(this.visible===false||this.alpha===0||this.isMask===true){return
}if(this._cacheAsBitmap){if(this.dirty){this._generateCachedSprite();
i.updateWebGLTexture(this._cachedSprite.texture.baseTexture,m.gl);
this.dirty=false
}i.Sprite.prototype._renderWebGL.call(this._cachedSprite,m);
return
}else{m.spriteBatch.stop();
if(this._mask){m.maskManager.pushMask(this.mask,m)
}if(this._filters){m.filterManager.pushFilter(this._filterBlock)
}if(this.blendMode!==m.spriteBatch.currentBlendMode){m.spriteBatch.currentBlendMode=this.blendMode;
var n=i.blendModesWebGL[m.spriteBatch.currentBlendMode];
m.spriteBatch.gl.blendFunc(n[0],n[1])
}i.WebGLGraphics.renderGraphics(this,m);
if(this.children.length){m.spriteBatch.start();
for(var l=0,k=this.children.length;
l<k;
l++){this.children[l]._renderWebGL(m)
}m.spriteBatch.stop()
}if(this._filters){m.filterManager.popFilter()
}if(this._mask){m.maskManager.popMask(m)
}m.drawCount++;
m.spriteBatch.start()
}};
i.Graphics.prototype._renderCanvas=function(o){if(this.visible===false||this.alpha===0||this.isMask===true){return
}var n=o.context;
var l=this.worldTransform;
if(this.blendMode!==o.currentBlendMode){o.currentBlendMode=this.blendMode;
n.globalCompositeOperation=i.blendModesCanvas[o.currentBlendMode]
}n.setTransform(l.a,l.c,l.b,l.d,l.tx,l.ty);
i.CanvasGraphics.renderGraphics(this,n);
for(var m=0,k=this.children.length;
m<k;
m++){this.children[m]._renderCanvas(o)
}};
i.Graphics.prototype.getBounds=function(v){if(!this.bounds){this.updateBounds()
}var s=this.bounds.x;
var q=this.bounds.width+this.bounds.x;
var p=this.bounds.y;
var o=this.bounds.height+this.bounds.y;
var t=v||this.worldTransform;
var H=t.a;
var F=t.c;
var E=t.b;
var C=t.d;
var I=t.tx;
var G=t.ty;
var y=H*q+E*o+I;
var m=C*o+F*q+G;
var x=H*s+E*o+I;
var l=C*o+F*s+G;
var w=H*s+E*p+I;
var k=C*p+F*s+G;
var u=H*q+E*p+I;
var j=C*p+F*q+G;
var B=-Infinity;
var z=-Infinity;
var D=Infinity;
var A=Infinity;
D=y<D?y:D;
D=x<D?x:D;
D=w<D?w:D;
D=u<D?u:D;
A=m<A?m:A;
A=l<A?l:A;
A=k<A?k:A;
A=j<A?j:A;
B=y>B?y:B;
B=x>B?x:B;
B=w>B?w:B;
B=u>B?u:B;
z=m>z?m:z;
z=l>z?l:z;
z=k>z?k:z;
z=j>z?j:z;
var n=this._bounds;
n.x=D;
n.width=B-D;
n.y=A;
n.height=z-A;
return n
};
i.Graphics.prototype.updateBounds=function(){var n=Infinity;
var l=-Infinity;
var m=Infinity;
var k=-Infinity;
var C,A,v,B,s;
for(var q=0;
q<this.graphicsData.length;
q++){var p=this.graphicsData[q];
var u=p.type;
var t=p.lineWidth;
C=p.points;
if(u===i.Graphics.RECT){A=C[0]-t/2;
v=C[1]-t/2;
B=C[2]+t;
s=C[3]+t;
n=A<n?A:n;
l=A+B>l?A+B:l;
m=v<m?A:m;
k=v+s>k?v+s:k
}else{if(u===i.Graphics.CIRC||u===i.Graphics.ELIP){A=C[0];
v=C[1];
B=C[2]+t/2;
s=C[3]+t/2;
n=A-B<n?A-B:n;
l=A+B>l?A+B:l;
m=v-s<m?v-s:m;
k=v+s>k?v+s:k
}else{for(var o=0;
o<C.length;
o+=2){A=C[o];
v=C[o+1];
n=A-t<n?A-t:n;
l=A+t>l?A+t:l;
m=v-t<m?v-t:m;
k=v+t>k?v+t:k
}}}}var z=this.boundsPadding;
this.bounds=new i.Rectangle(n-z,m-z,(l-n)+z*2,(k-m)+z*2)
};
i.Graphics.prototype._generateCachedSprite=function(){var l=this.getLocalBounds();
if(!this._cachedSprite){var j=new i.CanvasBuffer(l.width,l.height);
var k=i.Texture.fromCanvas(j.canvas);
this._cachedSprite=new i.Sprite(k);
this._cachedSprite.buffer=j;
this._cachedSprite.worldTransform=this.worldTransform
}else{this._cachedSprite.buffer.resize(l.width,l.height)
}this._cachedSprite.anchor.x=-(l.x/l.width);
this._cachedSprite.anchor.y=-(l.y/l.height);
this._cachedSprite.buffer.context.translate(-l.x,-l.y);
i.CanvasGraphics.renderGraphics(this,this._cachedSprite.buffer.context)
};
i.Graphics.prototype.destroyCachedSprite=function(){this._cachedSprite.texture.destroy(true);
this._cachedSprite=null
};
i.Graphics.POLY=0;
i.Graphics.RECT=1;
i.Graphics.CIRC=2;
i.Graphics.ELIP=3;
i.Strip=function(m,l,j){i.DisplayObjectContainer.call(this);
this.texture=m;
this.blendMode=i.blendModes.NORMAL;
try{this.uvs=new Float32Array([0,1,1,1,1,0,0,1]);
this.verticies=new Float32Array([0,0,0,0,0,0,0,0,0]);
this.colors=new Float32Array([1,1,1,1]);
this.indices=new Uint16Array([0,1,2,3])
}catch(k){this.uvs=[0,1,1,1,1,0,0,1];
this.verticies=[0,0,0,0,0,0,0,0,0];
this.colors=[1,1,1,1];
this.indices=[0,1,2,3]
}this.width=l;
this.height=j;
if(m.baseTexture.hasLoaded){this.width=this.texture.frame.width;
this.height=this.texture.frame.height;
this.updateFrame=true
}else{this.onTextureUpdateBind=this.onTextureUpdate.bind(this);
this.texture.addEventListener("update",this.onTextureUpdateBind)
}this.renderable=true
};
i.Strip.prototype=Object.create(i.DisplayObjectContainer.prototype);
i.Strip.prototype.constructor=i.Strip;
i.Strip.prototype.setTexture=function(j){this.texture=j;
this.width=j.frame.width;
this.height=j.frame.height;
this.updateFrame=true
};
i.Strip.prototype.onTextureUpdate=function(){this.updateFrame=true
};
i.Rope=function(l,k){i.Strip.call(this,l);
this.points=k;
try{this.verticies=new Float32Array(k.length*4);
this.uvs=new Float32Array(k.length*4);
this.colors=new Float32Array(k.length*2);
this.indices=new Uint16Array(k.length*2)
}catch(j){this.verticies=new Array(k.length*4);
this.uvs=new Array(k.length*4);
this.colors=new Array(k.length*2);
this.indices=new Array(k.length*2)
}this.refresh()
};
i.Rope.prototype=Object.create(i.Strip.prototype);
i.Rope.prototype.constructor=i.Rope;
i.Rope.prototype.refresh=function(){var s=this.points;
if(s.length<1){return
}var k=this.uvs;
var p=s[0];
var t=this.indices;
var j=this.colors;
this.count-=0.2;
k[0]=0;
k[1]=1;
k[2]=0;
k[3]=1;
j[0]=1;
j[1]=1;
t[0]=0;
t[1]=1;
var o=s.length,q,n,m;
for(var l=1;
l<o;
l++){q=s[l];
n=l*4;
m=l/(o-1);
if(l%2){k[n]=m;
k[n+1]=0;
k[n+2]=m;
k[n+3]=1
}else{k[n]=m;
k[n+1]=0;
k[n+2]=m;
k[n+3]=1
}n=l*2;
j[n]=1;
j[n+1]=1;
n=l*2;
t[n]=n;
t[n+1]=n+1;
p=q
}};
i.Rope.prototype.updateTransform=function(){var v=this.points;
if(v.length<1){return
}var t=v[0];
var q;
var k={x:0,y:0};
this.count-=0.2;
var j=this.verticies;
j[0]=t.x+k.x;
j[1]=t.y+k.y;
j[2]=t.x-k.x;
j[3]=t.y-k.y;
var s=v.length,u,o,p,l,n;
for(var m=1;
m<s;
m++){u=v[m];
o=m*4;
if(m<v.length-1){q=v[m+1]
}else{q=u
}k.y=-(q.x-t.x);
k.x=q.y-t.y;
p=(1-(m/(s-1)))*10;
if(p>1){p=1
}l=Math.sqrt(k.x*k.x+k.y*k.y);
n=this.texture.height/2;
k.x/=l;
k.y/=l;
k.x*=n;
k.y*=n;
j[o]=u.x+k.x;
j[o+1]=u.y+k.y;
j[o+2]=u.x-k.x;
j[o+3]=u.y-k.y;
t=u
}i.DisplayObjectContainer.prototype.updateTransform.call(this)
};
i.Rope.prototype.setTexture=function(j){this.texture=j;
this.updateFrame=true
};
i.TilingSprite=function(l,k,j){i.Sprite.call(this,l);
this.width=k||100;
this.height=j||100;
this.tileScale=new i.Point(1,1);
this.tileScaleOffset=new i.Point(1,1);
this.tilePosition=new i.Point(0,0);
this.renderable=true;
this.tint=16777215;
this.blendMode=i.blendModes.NORMAL
};
i.TilingSprite.prototype=Object.create(i.Sprite.prototype);
i.TilingSprite.prototype.constructor=i.TilingSprite;
Object.defineProperty(i.TilingSprite.prototype,"width",{get:function(){return this._width
},set:function(j){this._width=j
}});
Object.defineProperty(i.TilingSprite.prototype,"height",{get:function(){return this._height
},set:function(j){this._height=j
}});
i.TilingSprite.prototype.onTextureUpdate=function(){this.updateFrame=true
};
i.TilingSprite.prototype._renderWebGL=function(m){if(this.visible===false||this.alpha===0){return
}var l,k;
if(this.mask||this.filters){if(this.mask){m.spriteBatch.stop();
m.maskManager.pushMask(this.mask,m);
m.spriteBatch.start()
}if(this.filters){m.spriteBatch.flush();
m.filterManager.pushFilter(this._filterBlock)
}if(!this.tilingTexture){this.generateTilingTexture(true)
}else{m.spriteBatch.renderTilingSprite(this)
}for(l=0,k=this.children.length;
l<k;
l++){this.children[l]._renderWebGL(m)
}m.spriteBatch.stop();
if(this.filters){m.filterManager.popFilter()
}if(this.mask){m.maskManager.popMask(m)
}m.spriteBatch.start()
}else{if(!this.tilingTexture){this.generateTilingTexture(true)
}else{m.spriteBatch.renderTilingSprite(this)
}for(l=0,k=this.children.length;
l<k;
l++){this.children[l]._renderWebGL(m)
}}};
i.TilingSprite.prototype._renderCanvas=function(n){if(this.visible===false||this.alpha===0){return
}var m=n.context;
if(this._mask){n.maskManager.pushMask(this._mask,m)
}m.globalAlpha=this.worldAlpha;
var l=this.worldTransform;
m.setTransform(l.a,l.c,l.b,l.d,l.tx,l.ty);
if(!this.__tilePattern){this.generateTilingTexture(false);
if(this.tilingTexture){this.__tilePattern=m.createPattern(this.tilingTexture.baseTexture.source,"repeat")
}}if(this.blendMode!==n.currentBlendMode){n.currentBlendMode=this.blendMode;
m.globalCompositeOperation=i.blendModesCanvas[n.currentBlendMode]
}m.beginPath();
var j=this.tilePosition;
var k=this.tileScale;
j.x%=this.tilingTexture.baseTexture.width;
j.y%=this.tilingTexture.baseTexture.height;
m.scale(k.x,k.y);
m.translate(j.x,j.y);
m.fillStyle=this.__tilePattern;
m.fillRect(-j.x,-j.y,this.width/k.x,this.height/k.y);
m.scale(1/k.x,1/k.y);
m.translate(-j.x,-j.y);
m.closePath();
if(this._mask){n.maskManager.popMask(n.context)
}};
i.TilingSprite.prototype.getBounds=function(){var u=this._width;
var t=this._height;
var s=u*(1-this.anchor.x);
var q=u*-this.anchor.x;
var p=t*(1-this.anchor.y);
var o=t*-this.anchor.y;
var v=this.worldTransform;
var I=v.a;
var G=v.c;
var F=v.b;
var D=v.d;
var J=v.tx;
var H=v.ty;
var z=I*q+F*o+J;
var m=D*o+G*q+H;
var y=I*s+F*o+J;
var l=D*o+G*s+H;
var x=I*s+F*p+J;
var k=D*p+G*s+H;
var w=I*q+F*p+J;
var j=D*p+G*q+H;
var C=-Infinity;
var A=-Infinity;
var E=Infinity;
var B=Infinity;
E=z<E?z:E;
E=y<E?y:E;
E=x<E?x:E;
E=w<E?w:E;
B=m<B?m:B;
B=l<B?l:B;
B=k<B?k:B;
B=j<B?j:B;
C=z>C?z:C;
C=y>C?y:C;
C=x>C?x:C;
C=w>C?w:C;
A=m>A?m:A;
A=l>A?l:A;
A=k>A?k:A;
A=j>A?j:A;
var n=this._bounds;
n.x=E;
n.width=C-E;
n.y=B;
n.height=A-B;
this._currentBounds=n;
return n
};
i.TilingSprite.prototype.generateTilingTexture=function(s){var n=this.texture;
if(!n.baseTexture.hasLoaded){return
}var j=n.baseTexture;
var l=n.frame;
var p,m;
var k=l.width!==j.width||l.height!==j.height;
this.tilingTexture=n;
var o=false;
if(!s){if(k){p=l.width;
m=l.height;
o=true
}}else{p=i.getNextPowerOfTwo(n.frame.width);
m=i.getNextPowerOfTwo(n.frame.height);
if(l.width!==p&&l.height!==m){o=true
}}if(o){var q=new i.CanvasBuffer(p,m);
q.context.drawImage(n.baseTexture.source,l.x,l.y,l.width,l.height,0,0,p,m);
this.tilingTexture=i.Texture.fromCanvas(q.canvas);
this.tileScaleOffset.x=l.width/p;
this.tileScaleOffset.y=l.height/m
}this.tilingTexture.baseTexture._powerOf2=true
};
var e={};
e.BoneData=function(j,k){this.name=j;
this.parent=k
};
e.BoneData.prototype={length:0,x:0,y:0,rotation:0,scaleX:1,scaleY:1};
e.SlotData=function(j,k){this.name=j;
this.boneData=k
};
e.SlotData.prototype={r:1,g:1,b:1,a:1,attachmentName:null};
e.Bone=function(k,j){this.data=k;
this.parent=j;
this.setToSetupPose()
};
e.Bone.yDown=false;
e.Bone.prototype={x:0,y:0,rotation:0,scaleX:1,scaleY:1,m00:0,m01:0,worldX:0,m10:0,m11:0,worldY:0,worldRotation:0,worldScaleX:1,worldScaleY:1,updateWorldTransform:function(l,k){var m=this.parent;
if(m!=null){this.worldX=this.x*m.m00+this.y*m.m01+m.worldX;
this.worldY=this.x*m.m10+this.y*m.m11+m.worldY;
this.worldScaleX=m.worldScaleX*this.scaleX;
this.worldScaleY=m.worldScaleY*this.scaleY;
this.worldRotation=m.worldRotation+this.rotation
}else{this.worldX=this.x;
this.worldY=this.y;
this.worldScaleX=this.scaleX;
this.worldScaleY=this.scaleY;
this.worldRotation=this.rotation
}var o=this.worldRotation*Math.PI/180;
var n=Math.cos(o);
var j=Math.sin(o);
this.m00=n*this.worldScaleX;
this.m10=j*this.worldScaleX;
this.m01=-j*this.worldScaleY;
this.m11=n*this.worldScaleY;
if(l){this.m00=-this.m00;
this.m01=-this.m01
}if(k){this.m10=-this.m10;
this.m11=-this.m11
}if(e.Bone.yDown){this.m10=-this.m10;
this.m11=-this.m11
}},setToSetupPose:function(){var j=this.data;
this.x=j.x;
this.y=j.y;
this.rotation=j.rotation;
this.scaleX=j.scaleX;
this.scaleY=j.scaleY
}};
e.Slot=function(j,l,k){this.data=j;
this.skeleton=l;
this.bone=k;
this.setToSetupPose()
};
e.Slot.prototype={r:1,g:1,b:1,a:1,_attachmentTime:0,attachment:null,setAttachment:function(j){this.attachment=j;
this._attachmentTime=this.skeleton.time
},setAttachmentTime:function(j){this._attachmentTime=this.skeleton.time-j
},getAttachmentTime:function(){return this.skeleton.time-this._attachmentTime
},setToSetupPose:function(){var k=this.data;
this.r=k.r;
this.g=k.g;
this.b=k.b;
this.a=k.a;
var m=this.skeleton.data.slots;
for(var j=0,l=m.length;
j<l;
j++){if(m[j]==k){this.setAttachment(!k.attachmentName?null:this.skeleton.getAttachmentBySlotIndex(j,k.attachmentName));
break
}}}};
e.Skin=function(j){this.name=j;
this.attachments={}
};
e.Skin.prototype={addAttachment:function(j,k,l){this.attachments[j+":"+k]=l
},getAttachment:function(j,k){return this.attachments[j+":"+k]
},_attachAll:function(n,q){for(var l in q.attachments){var m=l.indexOf(":");
var j=parseInt(l.substring(0,m),10);
var k=l.substring(m+1);
var p=n.slots[j];
if(p.attachment&&p.attachment.name==k){var o=this.getAttachment(j,k);
if(o){p.setAttachment(o)
}}}}};
e.Animation=function(j,k,l){this.name=j;
this.timelines=k;
this.duration=l
};
e.Animation.prototype={apply:function(o,m,j){if(j&&this.duration){m%=this.duration
}var l=this.timelines;
for(var k=0,p=l.length;
k<p;
k++){l[k].apply(o,m,1)
}},mix:function(p,o,j,m){if(j&&this.duration){o%=this.duration
}var l=this.timelines;
for(var k=0,q=l.length;
k<q;
k++){l[k].apply(p,o,m)
}}};
e.binarySearch=function(k,o,l){var j=0;
var m=Math.floor(k.length/l)-2;
if(!m){return l
}var n=m>>>1;
while(true){if(k[(n+1)*l]<=o){j=n+1
}else{m=n
}if(j==m){return(j+1)*l
}n=(j+m)>>>1
}};
e.linearSearch=function(j,n,m){for(var k=0,l=j.length-m;
k<=l;
k+=m){if(j[k]>n){return k
}}return -1
};
e.Curves=function(j){this.curves=[];
this.curves.length=(j-1)*6
};
e.Curves.prototype={setLinear:function(j){this.curves[j*6]=0
},setStepped:function(j){this.curves[j*6]=-1
},setCurve:function(q,u,A,t,z){var v=1/10;
var p=v*v;
var o=p*v;
var l=3*v;
var k=3*p;
var j=6*p;
var B=6*o;
var y=-u*2+t;
var x=-A*2+z;
var n=(u-t)*3+1;
var m=(A-z)*3+1;
var w=q*6;
var s=this.curves;
s[w]=u*l+y*k+n*o;
s[w+1]=A*l+x*k+m*o;
s[w+2]=y*j+n*B;
s[w+3]=x*j+m*B;
s[w+4]=n*B;
s[w+5]=m*B
},getCurvePercent:function(m,s){s=s<0?0:(s>1?1:s);
var p=m*6;
var z=this.curves;
var j=z[p];
if(!j){return s
}if(j==-1){return 0
}var A=z[p+1];
var w=z[p+2];
var v=z[p+3];
var o=z[p+4];
var n=z[p+5];
var u=j,t=A;
var q=10-2;
while(true){if(u>=s){var l=u-j;
var k=t-A;
return k+(t-k)*(s-l)/(u-l)
}if(!q){break
}q--;
j+=w;
A+=v;
w+=o;
v+=n;
u+=j;
t+=A
}return t+(1-t)*(s-u)/(1-u)
}};
e.RotateTimeline=function(j){this.curves=new e.Curves(j);
this.frames=[];
this.frames.length=j*2
};
e.RotateTimeline.prototype={boneIndex:0,getFrameCount:function(){return this.frames.length/2
},setFrame:function(l,j,k){l*=2;
this.frames[l]=j;
this.frames[l+1]=k
},apply:function(l,k,m){var s=this.frames,n;
if(k<s[0]){return
}var t=l.bones[this.boneIndex];
if(k>=s[s.length-2]){n=t.data.rotation+s[s.length-1]-t.rotation;
while(n>180){n-=360
}while(n<-180){n+=360
}t.rotation+=n*m;
return
}var j=e.binarySearch(s,k,2);
var o=s[j-1];
var q=s[j];
var p=1-(k-q)/(s[j-2]-q);
p=this.curves.getCurvePercent(j/2-1,p);
n=s[j+1]-o;
while(n>180){n-=360
}while(n<-180){n+=360
}n=t.data.rotation+(o+n*p)-t.rotation;
while(n>180){n-=360
}while(n<-180){n+=360
}t.rotation+=n*m
}};
e.TranslateTimeline=function(j){this.curves=new e.Curves(j);
this.frames=[];
this.frames.length=j*3
};
e.TranslateTimeline.prototype={boneIndex:0,getFrameCount:function(){return this.frames.length/3
},setFrame:function(m,k,j,l){m*=3;
this.frames[m]=k;
this.frames[m+1]=j;
this.frames[m+2]=l
},apply:function(l,k,m){var s=this.frames;
if(k<s[0]){return
}var t=l.bones[this.boneIndex];
if(k>=s[s.length-3]){t.x+=(t.data.x+s[s.length-2]-t.x)*m;
t.y+=(t.data.y+s[s.length-1]-t.y)*m;
return
}var j=e.binarySearch(s,k,3);
var o=s[j-2];
var n=s[j-1];
var q=s[j];
var p=1-(k-q)/(s[j+-3]-q);
p=this.curves.getCurvePercent(j/3-1,p);
t.x+=(t.data.x+o+(s[j+1]-o)*p-t.x)*m;
t.y+=(t.data.y+n+(s[j+2]-n)*p-t.y)*m
}};
e.ScaleTimeline=function(j){this.curves=new e.Curves(j);
this.frames=[];
this.frames.length=j*3
};
e.ScaleTimeline.prototype={boneIndex:0,getFrameCount:function(){return this.frames.length/3
},setFrame:function(m,k,j,l){m*=3;
this.frames[m]=k;
this.frames[m+1]=j;
this.frames[m+2]=l
},apply:function(l,k,m){var s=this.frames;
if(k<s[0]){return
}var t=l.bones[this.boneIndex];
if(k>=s[s.length-3]){t.scaleX+=(t.data.scaleX-1+s[s.length-2]-t.scaleX)*m;
t.scaleY+=(t.data.scaleY-1+s[s.length-1]-t.scaleY)*m;
return
}var j=e.binarySearch(s,k,3);
var o=s[j-2];
var n=s[j-1];
var q=s[j];
var p=1-(k-q)/(s[j+-3]-q);
p=this.curves.getCurvePercent(j/3-1,p);
t.scaleX+=(t.data.scaleX-1+o+(s[j+1]-o)*p-t.scaleX)*m;
t.scaleY+=(t.data.scaleY-1+n+(s[j+2]-n)*p-t.scaleY)*m
}};
e.ColorTimeline=function(j){this.curves=new e.Curves(j);
this.frames=[];
this.frames.length=j*5
};
e.ColorTimeline.prototype={slotIndex:0,getFrameCount:function(){return this.frames.length/2
},setFrame:function(m,k,j,l){m*=5;
this.frames[m]=k;
this.frames[m+1]=r;
this.frames[m+2]=g;
this.frames[m+3]=b;
this.frames[m+4]=a
},apply:function(n,m,o){var w=this.frames;
if(m<w[0]){return
}var A=n.slots[this.slotIndex];
if(m>=w[w.length-5]){var p=w.length-1;
A.r=w[p-3];
A.g=w[p-2];
A.b=w[p-1];
A.a=w[p];
return
}var k=e.binarySearch(w,m,5);
var z=w[k-4];
var l=w[k-3];
var q=w[k-2];
var t=w[k-1];
var v=w[k];
var u=1-(m-v)/(w[k-5]-v);
u=this.curves.getCurvePercent(k/5-1,u);
var j=z+(w[k+1]-z)*u;
var s=l+(w[k+2]-l)*u;
var x=q+(w[k+3]-q)*u;
var y=t+(w[k+4]-t)*u;
if(o<1){A.r+=(j-A.r)*o;
A.g+=(s-A.g)*o;
A.b+=(x-A.b)*o;
A.a+=(y-A.a)*o
}else{A.r=j;
A.g=s;
A.b=x;
A.a=y
}}};
e.AttachmentTimeline=function(j){this.curves=new e.Curves(j);
this.frames=[];
this.frames.length=j;
this.attachmentNames=[];
this.attachmentNames.length=j
};
e.AttachmentTimeline.prototype={slotIndex:0,getFrameCount:function(){return this.frames.length
},setFrame:function(l,k,j){this.frames[l]=k;
this.attachmentNames[l]=j
},apply:function(m,l,k){var n=this.frames;
if(l<n[0]){return
}var o;
if(l>=n[n.length-1]){o=n.length-1
}else{o=e.binarySearch(n,l,1)-1
}var j=this.attachmentNames[o];
m.slots[this.slotIndex].setAttachment(!j?null:m.getAttachmentBySlotIndex(this.slotIndex,j))
}};
e.SkeletonData=function(){this.bones=[];
this.slots=[];
this.skins=[];
this.animations=[]
};
e.SkeletonData.prototype={defaultSkin:null,findBone:function(l){var j=this.bones;
for(var k=0,m=j.length;
k<m;
k++){if(j[k].name==l){return j[k]
}}return null
},findBoneIndex:function(l){var j=this.bones;
for(var k=0,m=j.length;
k<m;
k++){if(j[k].name==l){return k
}}return -1
},findSlot:function(j){var l=this.slots;
for(var k=0,m=l.length;
k<m;
k++){if(l[k].name==j){return slot[k]
}}return null
},findSlotIndex:function(j){var l=this.slots;
for(var k=0,m=l.length;
k<m;
k++){if(l[k].name==j){return k
}}return -1
},findSkin:function(j){var l=this.skins;
for(var k=0,m=l.length;
k<m;
k++){if(l[k].name==j){return l[k]
}}return null
},findAnimation:function(k){var m=this.animations;
for(var j=0,l=m.length;
j<l;
j++){if(m[j].name==k){return m[j]
}}return null
}};
e.Skeleton=function(j){this.data=j;
this.bones=[];
for(var k=0,s=j.bones.length;
k<s;
k++){var p=j.bones[k];
var l=!p.parent?null:this.bones[j.bones.indexOf(p.parent)];
this.bones.push(new e.Bone(p,l))
}this.slots=[];
this.drawOrder=[];
for(k=0,s=j.slots.length;
k<s;
k++){var m=j.slots[k];
var o=this.bones[j.bones.indexOf(m.boneData)];
var q=new e.Slot(m,this,o);
this.slots.push(q);
this.drawOrder.push(q)
}};
e.Skeleton.prototype={x:0,y:0,skin:null,r:1,g:1,b:1,a:1,time:0,flipX:false,flipY:false,updateWorldTransform:function(){var l=this.flipX;
var k=this.flipY;
var j=this.bones;
for(var m=0,o=j.length;
m<o;
m++){j[m].updateWorldTransform(l,k)
}},setToSetupPose:function(){this.setBonesToSetupPose();
this.setSlotsToSetupPose()
},setBonesToSetupPose:function(){var j=this.bones;
for(var k=0,l=j.length;
k<l;
k++){j[k].setToSetupPose()
}},setSlotsToSetupPose:function(){var k=this.slots;
for(var j=0,l=k.length;
j<l;
j++){k[j].setToSetupPose(j)
}},getRootBone:function(){return this.bones.length?this.bones[0]:null
},findBone:function(l){var j=this.bones;
for(var k=0,m=j.length;
k<m;
k++){if(j[k].data.name==l){return j[k]
}}return null
},findBoneIndex:function(l){var j=this.bones;
for(var k=0,m=j.length;
k<m;
k++){if(j[k].data.name==l){return k
}}return -1
},findSlot:function(j){var l=this.slots;
for(var k=0,m=l.length;
k<m;
k++){if(l[k].data.name==j){return l[k]
}}return null
},findSlotIndex:function(j){var l=this.slots;
for(var k=0,m=l.length;
k<m;
k++){if(l[k].data.name==j){return k
}}return -1
},setSkinByName:function(j){var k=this.data.findSkin(j);
if(!k){throw"Skin not found: "+j
}this.setSkin(k)
},setSkin:function(j){if(this.skin&&j){j._attachAll(this,this.skin)
}this.skin=j
},getAttachmentBySlotName:function(k,j){return this.getAttachmentBySlotIndex(this.data.findSlotIndex(k),j)
},getAttachmentBySlotIndex:function(k,j){if(this.skin){var l=this.skin.getAttachment(k,j);
if(l){return l
}}if(this.data.defaultSkin){return this.data.defaultSkin.getAttachment(k,j)
}return null
},setAttachment:function(k,j){var m=this.slots;
for(var l=0,q=m.size;
l<q;
l++){var p=m[l];
if(p.data.name==k){var o=null;
if(j){o=this.getAttachment(l,j);
if(o==null){throw"Attachment not found: "+j+", for slot: "+k
}}p.setAttachment(o);
return
}}throw"Slot not found: "+k
},update:function(j){time+=j
}};
e.AttachmentType={region:0};
e.RegionAttachment=function(){this.offset=[];
this.offset.length=8;
this.uvs=[];
this.uvs.length=8
};
e.RegionAttachment.prototype={x:0,y:0,rotation:0,scaleX:1,scaleY:1,width:0,height:0,rendererObject:null,regionOffsetX:0,regionOffsetY:0,regionWidth:0,regionHeight:0,regionOriginalWidth:0,regionOriginalHeight:0,setUVs:function(l,j,n,o,k){var m=this.uvs;
if(k){m[2]=l;
m[3]=o;
m[4]=l;
m[5]=j;
m[6]=n;
m[7]=j;
m[0]=n;
m[1]=o
}else{m[0]=l;
m[1]=o;
m[2]=l;
m[3]=j;
m[4]=n;
m[5]=j;
m[6]=n;
m[7]=o
}},updateOffset:function(){var z=this.width/this.regionOriginalWidth*this.scaleX;
var y=this.height/this.regionOriginalHeight*this.scaleY;
var k=-this.width/2*this.scaleX+this.regionOffsetX*z;
var B=-this.height/2*this.scaleY+this.regionOffsetY*y;
var p=k+this.regionWidth*z;
var x=B+this.regionHeight*y;
var A=this.rotation*Math.PI/180;
var l=Math.cos(A);
var j=Math.sin(A);
var s=k*l+this.x;
var q=k*j;
var v=B*l+this.y;
var t=B*j;
var w=p*l+this.x;
var u=p*j;
var n=x*l+this.y;
var m=x*j;
var o=this.offset;
o[0]=s-t;
o[1]=v+q;
o[2]=s-m;
o[3]=n+q;
o[4]=w-m;
o[5]=n+u;
o[6]=w-t;
o[7]=v+u
},computeVertices:function(o,n,q,m){o+=q.worldX;
n+=q.worldY;
var s=q.m00;
var p=q.m01;
var l=q.m10;
var k=q.m11;
var j=this.offset;
m[0]=j[0]*s+j[1]*p+o;
m[1]=j[0]*l+j[1]*k+n;
m[2]=j[2]*s+j[3]*p+o;
m[3]=j[2]*l+j[3]*k+n;
m[4]=j[4]*s+j[5]*p+o;
m[5]=j[4]*l+j[5]*k+n;
m[6]=j[6]*s+j[7]*p+o;
m[7]=j[6]*l+j[7]*k+n
}};
e.AnimationStateData=function(j){this.skeletonData=j;
this.animationToMixTime={}
};
e.AnimationStateData.prototype={defaultMix:0,setMixByName:function(k,j,l){var n=this.skeletonData.findAnimation(k);
if(!n){throw"Animation not found: "+k
}var m=this.skeletonData.findAnimation(j);
if(!m){throw"Animation not found: "+j
}this.setMix(n,m,l)
},setMix:function(l,k,j){this.animationToMixTime[l.name+":"+k.name]=j
},getMix:function(l,k){var j=this.animationToMixTime[l.name+":"+k.name];
return j?j:this.defaultMix
}};
e.AnimationState=function(j){this.data=j;
this.queue=[]
};
e.AnimationState.prototype={current:null,previous:null,currentTime:0,previousTime:0,currentLoop:false,previousLoop:false,mixTime:0,mixDuration:0,update:function(k){this.currentTime+=k;
this.previousTime+=k;
this.mixTime+=k;
if(this.queue.length>0){var j=this.queue[0];
if(this.currentTime>=j.delay){this._setAnimation(j.animation,j.loop);
this.queue.shift()
}}},apply:function(k){if(!this.current){return
}if(this.previous){this.previous.apply(k,this.previousTime,this.previousLoop);
var j=this.mixTime/this.mixDuration;
if(j>=1){j=1;
this.previous=null
}this.current.mix(k,this.currentTime,this.currentLoop,j)
}else{this.current.apply(k,this.currentTime,this.currentLoop)
}},clearAnimation:function(){this.previous=null;
this.current=null;
this.queue.length=0
},_setAnimation:function(k,j){this.previous=null;
if(k&&this.current){this.mixDuration=this.data.getMix(this.current,k);
if(this.mixDuration>0){this.mixTime=0;
this.previous=this.current;
this.previousTime=this.currentTime;
this.previousLoop=this.currentLoop
}}this.current=k;
this.currentLoop=j;
this.currentTime=0
},setAnimationByName:function(k,j){var l=this.data.skeletonData.findAnimation(k);
if(!l){throw"Animation not found: "+k
}this.setAnimation(l,j)
},setAnimation:function(k,j){this.queue.length=0;
this._setAnimation(k,j)
},addAnimationByName:function(l,j,k){var m=this.data.skeletonData.findAnimation(l);
if(!m){throw"Animation not found: "+l
}this.addAnimation(m,j,k)
},addAnimation:function(n,j,l){var m={};
m.animation=n;
m.loop=j;
if(!l||l<=0){var k=this.queue.length?this.queue[this.queue.length-1].animation:this.current;
if(k!=null){l=k.duration-this.data.getMix(k,n)+(l||0)
}else{l=0
}}m.delay=l;
this.queue.push(m)
},isComplete:function(){return !this.current||this.currentTime>=this.current.duration
}};
e.SkeletonJson=function(j){this.attachmentLoader=j
};
e.SkeletonJson.prototype={scale:1,readSkeletonData:function(z){var j=new e.SkeletonData(),k;
var E=z.bones;
for(var C=0,x=E.length;
C<x;
C++){var G=E[C];
var q=null;
if(G.parent){q=j.findBone(G.parent);
if(!q){throw"Parent bone not found: "+G.parent
}}k=new e.BoneData(G.name,q);
k.length=(G.length||0)*this.scale;
k.x=(G.x||0)*this.scale;
k.y=(G.y||0)*this.scale;
k.rotation=(G.rotation||0);
k.scaleX=G.scaleX||1;
k.scaleY=G.scaleY||1;
j.bones.push(k)
}var t=z.slots;
for(C=0,x=t.length;
C<x;
C++){var D=t[C];
k=j.findBone(D.bone);
if(!k){throw"Slot bone not found: "+D.bone
}var l=new e.SlotData(D.name,k);
var B=D.color;
if(B){l.r=e.SkeletonJson.toColor(B,0);
l.g=e.SkeletonJson.toColor(B,1);
l.b=e.SkeletonJson.toColor(B,2);
l.a=e.SkeletonJson.toColor(B,3)
}l.attachmentName=D.attachment;
j.slots.push(l)
}var H=z.skins;
for(var u in H){if(!H.hasOwnProperty(u)){continue
}var w=H[u];
var A=new e.Skin(u);
for(var m in w){if(!w.hasOwnProperty(m)){continue
}var F=j.findSlotIndex(m);
var y=w[m];
for(var v in y){if(!y.hasOwnProperty(v)){continue
}var s=this.readAttachment(A,v,y[v]);
if(s!=null){A.addAttachment(F,v,s)
}}}j.skins.push(A);
if(A.name=="default"){j.defaultSkin=A
}}var p=z.animations;
for(var o in p){if(!p.hasOwnProperty(o)){continue
}this.readAnimation(o,p[o],j)
}return j
},readAttachment:function(m,j,l){j=l.name||j;
var k=e.AttachmentType[l.type||"region"];
if(k==e.AttachmentType.region){var n=new e.RegionAttachment();
n.x=(l.x||0)*this.scale;
n.y=(l.y||0)*this.scale;
n.scaleX=l.scaleX||1;
n.scaleY=l.scaleY||1;
n.rotation=l.rotation||0;
n.width=(l.width||32)*this.scale;
n.height=(l.height||32)*this.scale;
n.updateOffset();
n.rendererObject={};
n.rendererObject.name=j;
n.rendererObject.scale={};
n.rendererObject.scale.x=n.scaleX;
n.rendererObject.scale.y=n.scaleY;
n.rendererObject.rotation=-n.rotation*Math.PI/180;
return n
}throw"Unknown attachment type: "+k
},readAnimation:function(O,N,l){var C=[];
var j=0;
var u,o,z,q,k,F,D;
var H=N.bones;
for(var p in H){if(!H.hasOwnProperty(p)){continue
}var t=l.findBoneIndex(p);
if(t==-1){throw"Bone not found: "+p
}var L=H[p];
for(z in L){if(!L.hasOwnProperty(z)){continue
}k=L[z];
if(z=="rotate"){o=new e.RotateTimeline(k.length);
o.boneIndex=t;
u=0;
for(F=0,D=k.length;
F<D;
F++){q=k[F];
o.setFrame(u,q.time,q.angle);
e.SkeletonJson.readCurve(o,u,q);
u++
}C.push(o);
j=Math.max(j,o.frames[o.getFrameCount()*2-2])
}else{if(z=="translate"||z=="scale"){var m=1;
if(z=="scale"){o=new e.ScaleTimeline(k.length)
}else{o=new e.TranslateTimeline(k.length);
m=this.scale
}o.boneIndex=t;
u=0;
for(F=0,D=k.length;
F<D;
F++){q=k[F];
var w=(q.x||0)*m;
var v=(q.y||0)*m;
o.setFrame(u,q.time,w,v);
e.SkeletonJson.readCurve(o,u,q);
u++
}C.push(o);
j=Math.max(j,o.frames[o.getFrameCount()*3-3])
}else{throw"Invalid timeline type for a bone: "+z+" ("+p+")"
}}}}var A=N.slots;
for(var s in A){if(!A.hasOwnProperty(s)){continue
}var G=A[s];
var J=l.findSlotIndex(s);
for(z in G){if(!G.hasOwnProperty(z)){continue
}k=G[z];
if(z=="color"){o=new e.ColorTimeline(k.length);
o.slotIndex=J;
u=0;
for(F=0,D=k.length;
F<D;
F++){q=k[F];
var E=q.color;
var B=e.SkeletonJson.toColor(E,0);
var I=e.SkeletonJson.toColor(E,1);
var K=e.SkeletonJson.toColor(E,2);
var M=e.SkeletonJson.toColor(E,3);
o.setFrame(u,q.time,B,I,K,M);
e.SkeletonJson.readCurve(o,u,q);
u++
}C.push(o);
j=Math.max(j,o.frames[o.getFrameCount()*5-5])
}else{if(z=="attachment"){o=new e.AttachmentTimeline(k.length);
o.slotIndex=J;
u=0;
for(F=0,D=k.length;
F<D;
F++){q=k[F];
o.setFrame(u++,q.time,q.name)
}C.push(o);
j=Math.max(j,o.frames[o.getFrameCount()-1])
}else{throw"Invalid timeline type for a slot: "+z+" ("+s+")"
}}}}l.animations.push(new e.Animation(O,C,j))
}};
e.SkeletonJson.readCurve=function(j,m,l){var k=l.curve;
if(!k){return
}if(k=="stepped"){j.curves.setStepped(m)
}else{if(k instanceof Array){j.curves.setCurve(m,k[0],k[1],k[2],k[3])
}}};
e.SkeletonJson.toColor=function(j,k){if(j.length!=8){throw"Color hexidecimal length must be 8, recieved: "+j
}return parseInt(j.substring(k*2,2),16)/255
};
e.Atlas=function(p,j){this.textureLoader=j;
this.pages=[];
this.regions=[];
var l=new e.AtlasReader(p);
var t=[];
t.length=4;
var m=null;
while(true){var v=l.readLine();
if(v==null){break
}v=l.trim(v);
if(!v.length){m=null
}else{if(!m){m=new e.AtlasPage();
m.name=v;
m.format=e.Atlas.Format[l.readValue()];
l.readTuple(t);
m.minFilter=e.Atlas.TextureFilter[t[0]];
m.magFilter=e.Atlas.TextureFilter[t[1]];
var s=l.readValue();
m.uWrap=e.Atlas.TextureWrap.clampToEdge;
m.vWrap=e.Atlas.TextureWrap.clampToEdge;
if(s=="x"){m.uWrap=e.Atlas.TextureWrap.repeat
}else{if(s=="y"){m.vWrap=e.Atlas.TextureWrap.repeat
}else{if(s=="xy"){m.uWrap=m.vWrap=e.Atlas.TextureWrap.repeat
}}}j.load(m,v);
this.pages.push(m)
}else{var o=new e.AtlasRegion();
o.name=v;
o.page=m;
o.rotate=l.readValue()=="true";
l.readTuple(t);
var q=parseInt(t[0],10);
var n=parseInt(t[1],10);
l.readTuple(t);
var k=parseInt(t[0],10);
var u=parseInt(t[1],10);
o.u=q/m.width;
o.v=n/m.height;
if(o.rotate){o.u2=(q+u)/m.width;
o.v2=(n+k)/m.height
}else{o.u2=(q+k)/m.width;
o.v2=(n+u)/m.height
}o.x=q;
o.y=n;
o.width=Math.abs(k);
o.height=Math.abs(u);
if(l.readTuple(t)==4){o.splits=[parseInt(t[0],10),parseInt(t[1],10),parseInt(t[2],10),parseInt(t[3],10)];
if(l.readTuple(t)==4){o.pads=[parseInt(t[0],10),parseInt(t[1],10),parseInt(t[2],10),parseInt(t[3],10)];
l.readTuple(t)
}}o.originalWidth=parseInt(t[0],10);
o.originalHeight=parseInt(t[1],10);
l.readTuple(t);
o.offsetX=parseInt(t[0],10);
o.offsetY=parseInt(t[1],10);
o.index=parseInt(l.readValue(),10);
this.regions.push(o)
}}}};
e.Atlas.prototype={findRegion:function(j){var m=this.regions;
for(var k=0,l=m.length;
k<l;
k++){if(m[k].name==j){return m[k]
}}return null
},dispose:function(){var j=this.pages;
for(var k=0,l=j.length;
k<l;
k++){this.textureLoader.unload(j[k].rendererObject)
}},updateUVs:function(k){var o=this.regions;
for(var j=0,m=o.length;
j<m;
j++){var l=o[j];
if(l.page!=k){continue
}l.u=l.x/k.width;
l.v=l.y/k.height;
if(l.rotate){l.u2=(l.x+l.height)/k.width;
l.v2=(l.y+l.width)/k.height
}else{l.u2=(l.x+l.width)/k.width;
l.v2=(l.y+l.height)/k.height
}}}};
e.Atlas.Format={alpha:0,intensity:1,luminanceAlpha:2,rgb565:3,rgba4444:4,rgb888:5,rgba8888:6};
e.Atlas.TextureFilter={nearest:0,linear:1,mipMap:2,mipMapNearestNearest:3,mipMapLinearNearest:4,mipMapNearestLinear:5,mipMapLinearLinear:6};
e.Atlas.TextureWrap={mirroredRepeat:0,clampToEdge:1,repeat:2};
e.AtlasPage=function(){};
e.AtlasPage.prototype={name:null,format:null,minFilter:null,magFilter:null,uWrap:null,vWrap:null,rendererObject:null,width:0,height:0};
e.AtlasRegion=function(){};
e.AtlasRegion.prototype={page:null,name:null,x:0,y:0,width:0,height:0,u:0,v:0,u2:0,v2:0,offsetX:0,offsetY:0,originalWidth:0,originalHeight:0,index:0,rotate:false,splits:null,pads:null,};
e.AtlasReader=function(j){this.lines=j.split(/\r\n|\r|\n/)
};
e.AtlasReader.prototype={index:0,trim:function(j){return j.replace(/^\s+|\s+$/g,"")
},readLine:function(){if(this.index>=this.lines.length){return null
}return this.lines[this.index++]
},readValue:function(){var j=this.readLine();
var k=j.indexOf(":");
if(k==-1){throw"Invalid line: "+j
}return this.trim(j.substring(k+1))
},readTuple:function(k){var l=this.readLine();
var n=l.indexOf(":");
if(n==-1){throw"Invalid line: "+l
}var m=0,o=n+1;
for(;
m<3;
m++){var j=l.indexOf(",",o);
if(j==-1){if(!m){throw"Invalid line: "+l
}break
}k[m]=this.trim(l.substr(o,j-o));
o=j+1
}k[m]=this.trim(l.substring(o));
return m+1
}};
e.AtlasAttachmentLoader=function(j){this.atlas=j
};
e.AtlasAttachmentLoader.prototype={newAttachment:function(m,k,j){switch(k){case e.AttachmentType.region:var l=this.atlas.findRegion(j);
if(!l){throw"Region not found in atlas: "+j+" ("+k+")"
}var n=new e.RegionAttachment(j);
n.rendererObject=l;
n.setUVs(l.u,l.v,l.u2,l.v2,l.rotate);
n.regionOffsetX=l.offsetX;
n.regionOffsetY=l.offsetY;
n.regionWidth=l.width;
n.regionHeight=l.height;
n.regionOriginalWidth=l.originalWidth;
n.regionOriginalHeight=l.originalHeight;
return n
}throw"Unknown attachment type: "+k
}};
e.Bone.yDown=true;
i.AnimCache={};
i.Spine=function(k){i.DisplayObjectContainer.call(this);
this.spineData=i.AnimCache[k];
if(!this.spineData){throw new Error("Spine data must be preloaded using PIXI.SpineLoader or PIXI.AssetLoader: "+k)
}this.skeleton=new e.Skeleton(this.spineData);
this.skeleton.updateWorldTransform();
this.stateData=new e.AnimationStateData(this.spineData);
this.state=new e.AnimationState(this.stateData);
this.slotContainers=[];
for(var o=0,s=this.skeleton.drawOrder.length;
o<s;
o++){var q=this.skeleton.drawOrder[o];
var p=q.attachment;
var j=new i.DisplayObjectContainer();
this.slotContainers.push(j);
this.addChild(j);
if(!(p instanceof e.RegionAttachment)){continue
}var m=p.rendererObject.name;
var l=this.createSprite(q,p.rendererObject);
q.currentSprite=l;
q.currentSpriteName=m;
j.addChild(l)
}};
i.Spine.prototype=Object.create(i.DisplayObjectContainer.prototype);
i.Spine.prototype.constructor=i.Spine;
i.Spine.prototype.updateTransform=function(){this.lastTime=this.lastTime||Date.now();
var l=(Date.now()-this.lastTime)*0.001;
this.lastTime=Date.now();
this.state.update(l);
this.state.apply(this.skeleton);
this.skeleton.updateWorldTransform();
var j=this.skeleton.drawOrder;
for(var o=0,k=j.length;
o<k;
o++){var s=j[o];
var p=s.attachment;
var q=this.slotContainers[o];
if(!(p instanceof e.RegionAttachment)){q.visible=false;
continue
}if(p.rendererObject){if(!s.currentSpriteName||s.currentSpriteName!=p.name){var m=p.rendererObject.name;
if(s.currentSprite!==undefined){s.currentSprite.visible=false
}s.sprites=s.sprites||{};
if(s.sprites[m]!==undefined){s.sprites[m].visible=true
}else{var t=this.createSprite(s,p.rendererObject);
q.addChild(t)
}s.currentSprite=s.sprites[m];
s.currentSpriteName=m
}}q.visible=true;
var u=s.bone;
q.position.x=u.worldX+p.x*u.m00+p.y*u.m01;
q.position.y=u.worldY+p.x*u.m10+p.y*u.m11;
q.scale.x=u.worldScaleX;
q.scale.y=u.worldScaleY;
q.rotation=-(s.bone.worldRotation*Math.PI/180)
}i.DisplayObjectContainer.prototype.updateTransform.call(this)
};
i.Spine.prototype.createSprite=function(m,l){var j=i.TextureCache[l.name]?l.name:l.name+".png";
var k=new i.Sprite(i.Texture.fromFrame(j));
k.scale=l.scale;
k.rotation=l.rotation;
k.anchor.x=k.anchor.y=0.5;
m.sprites=m.sprites||{};
m.sprites[l.name]=k;
return k
};
i.BaseTextureCache={};
i.texturesToUpdate=[];
i.texturesToDestroy=[];
i.BaseTextureCacheIdGenerator=0;
i.BaseTexture=function(l,k){i.EventTarget.call(this);
this.width=100;
this.height=100;
this.scaleMode=k||i.scaleModes.DEFAULT;
this.hasLoaded=false;
this.source=l;
if(!l){return
}if(this.source.complete||this.source.getContext){this.hasLoaded=true;
this.width=this.source.width;
this.height=this.source.height;
i.texturesToUpdate.push(this)
}else{var j=this;
this.source.onload=function(){j.hasLoaded=true;
j.width=j.source.width;
j.height=j.source.height;
i.texturesToUpdate.push(j);
j.dispatchEvent({type:"loaded",content:j})
}
}this.imageUrl=null;
this._powerOf2=false;
this.id=i.BaseTextureCacheIdGenerator++;
this._glTextures=[]
};
i.BaseTexture.prototype.constructor=i.BaseTexture;
i.BaseTexture.prototype.destroy=function(){if(this.imageUrl){delete i.BaseTextureCache[this.imageUrl];
this.imageUrl=null;
this.source.src=null
}this.source=null;
i.texturesToDestroy.push(this)
};
i.BaseTexture.prototype.updateSourceImage=function(j){this.hasLoaded=false;
this.source.src=null;
this.source.src=j
};
i.BaseTexture.fromImage=function(k,j,l){var m=i.BaseTextureCache[k];
j=!j;
if(!m){var n=new Image();
if(j){n.crossOrigin=""
}n.src=k;
m=new i.BaseTexture(n,l);
m.imageUrl=k;
i.BaseTextureCache[k]=m
}return m
};
i.BaseTexture.fromCanvas=function(j,k){if(!j._pixiId){j._pixiId="canvas_"+i.TextureCacheIdGenerator++
}var l=i.BaseTextureCache[j._pixiId];
if(!l){l=new i.BaseTexture(j,k);
i.BaseTextureCache[j._pixiId]=l
}return l
};
i.TextureCache={};
i.FrameCache={};
i.TextureCacheIdGenerator=0;
i.Texture=function(k,l){i.EventTarget.call(this);
if(!l){this.noFrame=true;
l=new i.Rectangle(0,0,1,1)
}if(k instanceof i.Texture){k=k.baseTexture
}this.baseTexture=k;
this.frame=l;
this.trim=null;
this.scope=this;
if(k.hasLoaded){if(this.noFrame){l=new i.Rectangle(0,0,k.width,k.height)
}this.setFrame(l)
}else{var j=this;
k.addEventListener("loaded",function(){j.onBaseTextureLoaded()
})
}};
i.Texture.prototype.constructor=i.Texture;
i.Texture.prototype.onBaseTextureLoaded=function(){var j=this.baseTexture;
j.removeEventListener("loaded",this.onLoaded);
if(this.noFrame){this.frame=new i.Rectangle(0,0,j.width,j.height)
}this.setFrame(this.frame);
this.scope.dispatchEvent({type:"update",content:this})
};
i.Texture.prototype.destroy=function(j){if(j){this.baseTexture.destroy()
}};
i.Texture.prototype.setFrame=function(j){this.frame=j;
this.width=j.width;
this.height=j.height;
if(j.x+j.width>this.baseTexture.width||j.y+j.height>this.baseTexture.height){throw new Error("Texture Error: frame does not fit inside the base Texture dimensions "+this)
}this.updateFrame=true;
i.Texture.frameUpdates.push(this)
};
i.Texture.prototype._updateWebGLuvs=function(){if(!this._uvs){this._uvs=new i.TextureUvs()
}var l=this.frame;
var j=this.baseTexture.width;
var k=this.baseTexture.height;
this._uvs.x0=l.x/j;
this._uvs.y0=l.y/k;
this._uvs.x1=(l.x+l.width)/j;
this._uvs.y1=l.y/k;
this._uvs.x2=(l.x+l.width)/j;
this._uvs.y2=(l.y+l.height)/k;
this._uvs.x3=l.x/j;
this._uvs.y3=(l.y+l.height)/k
};
i.Texture.fromImage=function(k,j,l){var m=i.TextureCache[k];
if(!m){m=new i.Texture(i.BaseTexture.fromImage(k,j,l));
i.TextureCache[k]=m
}return m
};
i.Texture.fromFrame=function(k){var j=i.TextureCache[k];
if(!j){throw new Error('The frameId "'+k+'" does not exist in the texture cache ')
}return j
};
i.Texture.fromCanvas=function(j,k){var l=i.BaseTexture.fromCanvas(j,k);
return new i.Texture(l)
};
i.Texture.addTextureToCache=function(j,k){i.TextureCache[k]=j
};
i.Texture.removeTextureFromCache=function(k){var j=i.TextureCache[k];
i.TextureCache[k]=null;
return j
};
i.Texture.frameUpdates=[];
i.TextureUvs=function(){this.x0=0;
this.y0=0;
this.x1=0;
this.y1=0;
this.x2=0;
this.y2=0;
this.x3=0;
this.y4=0
};
i.RenderTexture=function(k,j,l){i.EventTarget.call(this);
this.width=k||100;
this.height=j||100;
this.frame=new i.Rectangle(0,0,this.width,this.height);
this.baseTexture=new i.BaseTexture();
this.baseTexture.width=this.width;
this.baseTexture.height=this.height;
this.baseTexture._glTextures=[];
this.baseTexture.hasLoaded=true;
this.renderer=l||i.defaultRenderer;
if(this.renderer.type===i.WEBGL_RENDERER){var m=this.renderer.gl;
this.textureBuffer=new i.FilterTexture(m,this.width,this.height);
this.baseTexture._glTextures[m.id]=this.textureBuffer.texture;
this.render=this.renderWebGL;
this.projection=new i.Point(this.width/2,-this.height/2)
}else{this.render=this.renderCanvas;
this.textureBuffer=new i.CanvasBuffer(this.width,this.height);
this.baseTexture.source=this.textureBuffer.canvas
}i.Texture.frameUpdates.push(this)
};
i.RenderTexture.prototype=Object.create(i.Texture.prototype);
i.RenderTexture.prototype.constructor=i.RenderTexture;
i.RenderTexture.prototype.resize=function(k,j){this.width=k;
this.height=j;
this.frame.width=this.width;
this.frame.height=this.height;
if(this.renderer.type===i.WEBGL_RENDERER){this.projection.x=this.width/2;
this.projection.y=-this.height/2;
var l=this.renderer.gl;
l.bindTexture(l.TEXTURE_2D,this.baseTexture._glTextures[l.id]);
l.texImage2D(l.TEXTURE_2D,0,l.RGBA,this.width,this.height,0,l.RGBA,l.UNSIGNED_BYTE,null)
}else{this.textureBuffer.resize(this.width,this.height)
}i.Texture.frameUpdates.push(this)
};
i.RenderTexture.prototype.renderWebGL=function(s,l,k){var q=this.renderer.gl;
q.colorMask(true,true,true,true);
q.viewport(0,0,this.width,this.height);
q.bindFramebuffer(q.FRAMEBUFFER,this.textureBuffer.frameBuffer);
if(k){this.textureBuffer.clear()
}var o=s.children;
var p=s.worldTransform;
s.worldTransform=i.RenderTexture.tempMatrix;
s.worldTransform.d=-1;
s.worldTransform.ty=this.projection.y*-2;
if(l){s.worldTransform.tx=l.x;
s.worldTransform.ty-=l.y
}for(var n=0,m=o.length;
n<m;
n++){o[n].updateTransform()
}i.WebGLRenderer.updateTextures();
this.renderer.renderDisplayObject(s,this.projection,this.textureBuffer.frameBuffer);
s.worldTransform=p
};
i.RenderTexture.prototype.renderCanvas=function(q,l,k){var p=q.children;
q.worldTransform=i.RenderTexture.tempMatrix;
if(l){q.worldTransform.tx=l.x;
q.worldTransform.ty=l.y
}for(var o=0,m=p.length;
o<m;
o++){p[o].updateTransform()
}if(k){this.textureBuffer.clear()
}var n=this.textureBuffer.context;
this.renderer.renderDisplayObject(q,n);
n.setTransform(1,0,0,1,0,0)
};
i.RenderTexture.tempMatrix=new i.Matrix();
i.AssetLoader=function(j,k){i.EventTarget.call(this);
this.assetURLs=j;
this.crossorigin=k;
this.loadersByType={jpg:i.ImageLoader,jpeg:i.ImageLoader,png:i.ImageLoader,gif:i.ImageLoader,json:i.JsonLoader,atlas:i.AtlasLoader,anim:i.SpineLoader,xml:i.BitmapFontLoader,fnt:i.BitmapFontLoader}
};
i.AssetLoader.prototype.constructor=i.AssetLoader;
i.AssetLoader.prototype._getDataType=function(l){var o="data:";
var n=l.slice(0,o.length).toLowerCase();
if(n===o){var j=l.slice(o.length);
var m=j.indexOf(",");
if(m===-1){return null
}var k=j.slice(0,m).split(";")[0];
if(!k||k.toLowerCase()==="text/plain"){return"txt"
}return k.split("/").pop().toLowerCase()
}return null
};
i.AssetLoader.prototype.load=function(){var n=this;
function m(q){n.onAssetLoaded(q.loader)
}this.loadCount=this.assetURLs.length;
for(var l=0;
l<this.assetURLs.length;
l++){var p=this.assetURLs[l];
var k=this._getDataType(p);
if(!k){k=p.split("?").shift().split(".").pop().toLowerCase()
}var o=this.loadersByType[k];
if(!o){throw new Error(k+" is an unsupported file type")
}var j=new o(p,this.crossorigin);
j.addEventListener("loaded",m);
j.load()
}};
i.AssetLoader.prototype.onAssetLoaded=function(j){this.loadCount--;
this.dispatchEvent({type:"onProgress",content:this,loader:j});
if(this.onProgress){this.onProgress(j)
}if(!this.loadCount){this.dispatchEvent({type:"onComplete",content:this});
if(this.onComplete){this.onComplete()
}}};
i.JsonLoader=function(k,j){i.EventTarget.call(this);
this.url=k;
this.crossorigin=j;
this.baseUrl=k.replace(/[^\/]*$/,"");
this.loaded=false
};
i.JsonLoader.prototype.constructor=i.JsonLoader;
i.JsonLoader.prototype.load=function(){this.ajaxRequest=new i.AjaxRequest(this.crossorigin);
var j=this;
this.ajaxRequest.onreadystatechange=function(){j.onJSONLoaded()
};
this.ajaxRequest.open("GET",this.url,true);
if(this.ajaxRequest.overrideMimeType){this.ajaxRequest.overrideMimeType("application/json")
}this.ajaxRequest.send(null)
};
i.JsonLoader.prototype.onJSONLoaded=function(){if(this.ajaxRequest.readyState===4){if(this.ajaxRequest.status===200||window.location.protocol.indexOf("http")===-1){this.json=JSON.parse(this.ajaxRequest.responseText);
if(this.json.frames){var s=this;
var n=this.baseUrl+this.json.meta.image;
var k=new i.ImageLoader(n,this.crossorigin);
var q=this.json.frames;
this.texture=k.texture.baseTexture;
k.addEventListener("loaded",function(){s.onLoaded()
});
for(var l in q){var p=q[l].frame;
if(p){i.TextureCache[l]=new i.Texture(this.texture,{x:p.x,y:p.y,width:p.w,height:p.h});
if(q[l].trimmed){var o=i.TextureCache[l];
var u=q[l].sourceSize;
var t=q[l].spriteSourceSize;
o.trim=new i.Rectangle(t.x,t.y,u.w,u.h)
}}}k.load()
}else{if(this.json.bones){var m=new e.SkeletonJson();
var j=m.readSkeletonData(this.json);
i.AnimCache[this.url]=j;
this.onLoaded()
}else{this.onLoaded()
}}}else{this.onError()
}}};
i.JsonLoader.prototype.onLoaded=function(){this.loaded=true;
this.dispatchEvent({type:"loaded",content:this})
};
i.JsonLoader.prototype.onError=function(){this.dispatchEvent({type:"error",content:this})
};
i.AtlasLoader=function(k,j){i.EventTarget.call(this);
this.url=k;
this.baseUrl=k.replace(/[^\/]*$/,"");
this.crossorigin=j;
this.loaded=false
};
i.AtlasLoader.constructor=i.AtlasLoader;
i.AtlasLoader.prototype.load=function(){this.ajaxRequest=new i.AjaxRequest();
this.ajaxRequest.onreadystatechange=this.onAtlasLoaded.bind(this);
this.ajaxRequest.open("GET",this.url,true);
if(this.ajaxRequest.overrideMimeType){this.ajaxRequest.overrideMimeType("application/json")
}this.ajaxRequest.send(null)
};
i.AtlasLoader.prototype.onAtlasLoaded=function(){if(this.ajaxRequest.readyState===4){if(this.ajaxRequest.status===200||window.location.href.indexOf("http")===-1){this.atlas={meta:{image:[]},frames:[]};
var w=this.ajaxRequest.responseText.split(/\r?\n/);
var u=-3;
var o=0;
var k=null;
var s=false;
var m=0,l=0,x=this.onLoaded.bind(this);
for(m=0;
m<w.length;
m++){w[m]=w[m].replace(/^\s+|\s+$/g,"");
if(w[m]===""){s=m+1
}if(w[m].length>0){if(s===m){this.atlas.meta.image.push(w[m]);
o=this.atlas.meta.image.length-1;
this.atlas.frames.push({});
u=-3
}else{if(u>0){if(u%7===1){if(k!=null){this.atlas.frames[o][k.name]=k
}k={name:w[m],frame:{}}
}else{var t=w[m].split(" ");
if(u%7===3){k.frame.x=Number(t[1].replace(",",""));
k.frame.y=Number(t[2])
}else{if(u%7===4){k.frame.w=Number(t[1].replace(",",""));
k.frame.h=Number(t[2])
}else{if(u%7===5){var v={x:0,y:0,w:Number(t[1].replace(",","")),h:Number(t[2])};
if(v.w>k.frame.w||v.h>k.frame.h){k.trimmed=true;
k.realSize=v
}else{k.trimmed=false
}}}}}}}u++
}}if(k!=null){this.atlas.frames[o][k.name]=k
}if(this.atlas.meta.image.length>0){this.images=[];
for(l=0;
l<this.atlas.meta.image.length;
l++){var n=this.baseUrl+this.atlas.meta.image[l];
var q=this.atlas.frames[l];
this.images.push(new i.ImageLoader(n,this.crossorigin));
for(m in q){var p=q[m].frame;
if(p){i.TextureCache[m]=new i.Texture(this.images[l].texture.baseTexture,{x:p.x,y:p.y,width:p.w,height:p.h});
if(q[m].trimmed){i.TextureCache[m].realSize=q[m].realSize;
i.TextureCache[m].trim.x=0;
i.TextureCache[m].trim.y=0
}}}}this.currentImageId=0;
for(l=0;
l<this.images.length;
l++){this.images[l].addEventListener("loaded",x)
}this.images[this.currentImageId].load()
}else{this.onLoaded()
}}else{this.onError()
}}};
i.AtlasLoader.prototype.onLoaded=function(){if(this.images.length-1>this.currentImageId){this.currentImageId++;
this.images[this.currentImageId].load()
}else{this.loaded=true;
this.dispatchEvent({type:"loaded",content:this})
}};
i.AtlasLoader.prototype.onError=function(){this.dispatchEvent({type:"error",content:this})
};
i.SpriteSheetLoader=function(k,j){i.EventTarget.call(this);
this.url=k;
this.crossorigin=j;
this.baseUrl=k.replace(/[^\/]*$/,"");
this.texture=null;
this.frames={}
};
i.SpriteSheetLoader.prototype.constructor=i.SpriteSheetLoader;
i.SpriteSheetLoader.prototype.load=function(){var k=this;
var j=new i.JsonLoader(this.url,this.crossorigin);
j.addEventListener("loaded",function(l){k.json=l.content.json;
k.onLoaded()
});
j.load()
};
i.SpriteSheetLoader.prototype.onLoaded=function(){this.dispatchEvent({type:"loaded",content:this})
};
i.ImageLoader=function(k,j){i.EventTarget.call(this);
this.texture=i.Texture.fromImage(k,j);
this.frames=[]
};
i.ImageLoader.prototype.constructor=i.ImageLoader;
i.ImageLoader.prototype.load=function(){if(!this.texture.baseTexture.hasLoaded){var j=this;
this.texture.baseTexture.addEventListener("loaded",function(){j.onLoaded()
})
}else{this.onLoaded()
}};
i.ImageLoader.prototype.onLoaded=function(){this.dispatchEvent({type:"loaded",content:this})
};
i.ImageLoader.prototype.loadFramedSpriteSheet=function(p,k,j){this.frames=[];
var o=Math.floor(this.texture.width/p);
var t=Math.floor(this.texture.height/k);
var l=0;
for(var n=0;
n<t;
n++){for(var q=0;
q<o;
q++,l++){var m=new i.Texture(this.texture,{x:q*p,y:n*k,width:p,height:k});
this.frames.push(m);
if(j){i.TextureCache[j+"-"+l]=m
}}}if(!this.texture.baseTexture.hasLoaded){var s=this;
this.texture.baseTexture.addEventListener("loaded",function(){s.onLoaded()
})
}else{this.onLoaded()
}};
i.BitmapFontLoader=function(k,j){i.EventTarget.call(this);
this.url=k;
this.crossorigin=j;
this.baseUrl=k.replace(/[^\/]*$/,"");
this.texture=null
};
i.BitmapFontLoader.prototype.constructor=i.BitmapFontLoader;
i.BitmapFontLoader.prototype.load=function(){this.ajaxRequest=new i.AjaxRequest();
var j=this;
this.ajaxRequest.onreadystatechange=function(){j.onXMLLoaded()
};
this.ajaxRequest.open("GET",this.url,true);
if(this.ajaxRequest.overrideMimeType){this.ajaxRequest.overrideMimeType("application/xml")
}this.ajaxRequest.send(null)
};
i.BitmapFontLoader.prototype.onXMLLoaded=function(){if(this.ajaxRequest.readyState===4){if(this.ajaxRequest.status===200||window.location.protocol.indexOf("http")===-1){var x=this.ajaxRequest.responseXML;
if(!x||/MSIE 9/i.test(navigator.userAgent)||navigator.isCocoonJS){if(typeof(window.DOMParser)==="function"){var s=new DOMParser();
x=s.parseFromString(this.ajaxRequest.responseText,"text/xml")
}else{var j=document.createElement("div");
j.innerHTML=this.ajaxRequest.responseText;
x=j
}}var t=this.baseUrl+x.getElementsByTagName("page")[0].getAttribute("file");
var m=new i.ImageLoader(t,this.crossorigin);
this.texture=m.texture.baseTexture;
var o={};
var l=x.getElementsByTagName("info")[0];
var u=x.getElementsByTagName("common")[0];
o.font=l.getAttribute("face");
o.size=parseInt(l.getAttribute("size"),10);
o.lineHeight=parseInt(u.getAttribute("lineHeight"),10);
o.chars={};
var v=x.getElementsByTagName("char");
for(var n=0;
n<v.length;
n++){var z=parseInt(v[n].getAttribute("id"),10);
var y=new i.Rectangle(parseInt(v[n].getAttribute("x"),10),parseInt(v[n].getAttribute("y"),10),parseInt(v[n].getAttribute("width"),10),parseInt(v[n].getAttribute("height"),10));
o.chars[z]={xOffset:parseInt(v[n].getAttribute("xoffset"),10),yOffset:parseInt(v[n].getAttribute("yoffset"),10),xAdvance:parseInt(v[n].getAttribute("xadvance"),10),kerning:{},texture:i.TextureCache[z]=new i.Texture(this.texture,y)}
}var w=x.getElementsByTagName("kerning");
for(n=0;
n<w.length;
n++){var q=parseInt(w[n].getAttribute("first"),10);
var k=parseInt(w[n].getAttribute("second"),10);
var p=parseInt(w[n].getAttribute("amount"),10);
o.chars[k].kerning[q]=p
}i.BitmapText.fonts[o.font]=o;
var A=this;
m.addEventListener("loaded",function(){A.onLoaded()
});
m.load()
}}};
i.BitmapFontLoader.prototype.onLoaded=function(){this.dispatchEvent({type:"loaded",content:this})
};
i.SpineLoader=function(k,j){i.EventTarget.call(this);
this.url=k;
this.crossorigin=j;
this.loaded=false
};
i.SpineLoader.prototype.constructor=i.SpineLoader;
i.SpineLoader.prototype.load=function(){var k=this;
var j=new i.JsonLoader(this.url,this.crossorigin);
j.addEventListener("loaded",function(l){k.json=l.content.json;
k.onLoaded()
});
j.load()
};
i.SpineLoader.prototype.onLoaded=function(){this.loaded=true;
this.dispatchEvent({type:"loaded",content:this})
};
i.AbstractFilter=function(k,j){this.passes=[this];
this.shaders=[];
this.dirty=true;
this.padding=0;
this.uniforms=j||{};
this.fragmentSrc=k||[]
};
i.AlphaMaskFilter=function(j){i.AbstractFilter.call(this);
this.passes=[this];
j.baseTexture._powerOf2=true;
this.uniforms={mask:{type:"sampler2D",value:j},mapDimensions:{type:"2f",value:{x:1,y:5112}},dimensions:{type:"4fv",value:[0,0,0,0]}};
if(j.baseTexture.hasLoaded){this.uniforms.mask.value.x=j.width;
this.uniforms.mask.value.y=j.height
}else{this.boundLoadedFunction=this.onTextureLoaded.bind(this);
j.baseTexture.on("loaded",this.boundLoadedFunction)
}this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D mask;","uniform sampler2D uSampler;","uniform vec2 offset;","uniform vec4 dimensions;","uniform vec2 mapDimensions;","void main(void) {","   vec2 mapCords = vTextureCoord.xy;","   mapCords += (dimensions.zw + offset)/ dimensions.xy ;","   mapCords.y *= -1.0;","   mapCords.y += 1.0;","   mapCords *= dimensions.xy / mapDimensions;","   vec4 original =  texture2D(uSampler, vTextureCoord);","   float maskAlpha =  texture2D(mask, mapCords).r;","   original *= maskAlpha;","   gl_FragColor =  original;","}"]
};
i.AlphaMaskFilter.prototype=Object.create(i.AbstractFilter.prototype);
i.AlphaMaskFilter.prototype.constructor=i.AlphaMaskFilter;
i.AlphaMaskFilter.prototype.onTextureLoaded=function(){this.uniforms.mapDimensions.value.x=this.uniforms.mask.value.width;
this.uniforms.mapDimensions.value.y=this.uniforms.mask.value.height;
this.uniforms.mask.value.baseTexture.off("loaded",this.boundLoadedFunction)
};
Object.defineProperty(i.AlphaMaskFilter.prototype,"map",{get:function(){return this.uniforms.mask.value
},set:function(j){this.uniforms.mask.value=j
}});
i.ColorMatrixFilter=function(){i.AbstractFilter.call(this);
this.passes=[this];
this.uniforms={matrix:{type:"mat4",value:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},};
this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float invert;","uniform mat4 matrix;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord) * matrix;","}"]
};
i.ColorMatrixFilter.prototype=Object.create(i.AbstractFilter.prototype);
i.ColorMatrixFilter.prototype.constructor=i.ColorMatrixFilter;
Object.defineProperty(i.ColorMatrixFilter.prototype,"matrix",{get:function(){return this.uniforms.matrix.value
},set:function(j){this.uniforms.matrix.value=j
}});
i.GrayFilter=function(){i.AbstractFilter.call(this);
this.passes=[this];
this.uniforms={gray:{type:"1f",value:1},};
this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","uniform float gray;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord);","   gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126*gl_FragColor.r + 0.7152*gl_FragColor.g + 0.0722*gl_FragColor.b), gray);","}"]
};
i.GrayFilter.prototype=Object.create(i.AbstractFilter.prototype);
i.GrayFilter.prototype.constructor=i.GrayFilter;
Object.defineProperty(i.GrayFilter.prototype,"gray",{get:function(){return this.uniforms.gray.value
},set:function(j){this.uniforms.gray.value=j
}});
i.DisplacementFilter=function(j){i.AbstractFilter.call(this);
this.passes=[this];
j.baseTexture._powerOf2=true;
this.uniforms={displacementMap:{type:"sampler2D",value:j},scale:{type:"2f",value:{x:30,y:30}},offset:{type:"2f",value:{x:0,y:0}},mapDimensions:{type:"2f",value:{x:1,y:5112}},dimensions:{type:"4fv",value:[0,0,0,0]}};
if(j.baseTexture.hasLoaded){this.uniforms.mapDimensions.value.x=j.width;
this.uniforms.mapDimensions.value.y=j.height
}else{this.boundLoadedFunction=this.onTextureLoaded.bind(this);
j.baseTexture.on("loaded",this.boundLoadedFunction)
}this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D displacementMap;","uniform sampler2D uSampler;","uniform vec2 scale;","uniform vec2 offset;","uniform vec4 dimensions;","uniform vec2 mapDimensions;","void main(void) {","   vec2 mapCords = vTextureCoord.xy;","   mapCords += (dimensions.zw + offset)/ dimensions.xy ;","   mapCords.y *= -1.0;","   mapCords.y += 1.0;","   vec2 matSample = texture2D(displacementMap, mapCords).xy;","   matSample -= 0.5;","   matSample *= scale;","   matSample /= mapDimensions;","   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x + matSample.x, vTextureCoord.y + matSample.y));","   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb, 1.0);","   vec2 cord = vTextureCoord;","}"]
};
i.DisplacementFilter.prototype=Object.create(i.AbstractFilter.prototype);
i.DisplacementFilter.prototype.constructor=i.DisplacementFilter;
i.DisplacementFilter.prototype.onTextureLoaded=function(){this.uniforms.mapDimensions.value.x=this.uniforms.displacementMap.value.width;
this.uniforms.mapDimensions.value.y=this.uniforms.displacementMap.value.height;
this.uniforms.displacementMap.value.baseTexture.off("loaded",this.boundLoadedFunction)
};
Object.defineProperty(i.DisplacementFilter.prototype,"map",{get:function(){return this.uniforms.displacementMap.value
},set:function(j){this.uniforms.displacementMap.value=j
}});
Object.defineProperty(i.DisplacementFilter.prototype,"scale",{get:function(){return this.uniforms.scale.value
},set:function(j){this.uniforms.scale.value=j
}});
Object.defineProperty(i.DisplacementFilter.prototype,"offset",{get:function(){return this.uniforms.offset.value
},set:function(j){this.uniforms.offset.value=j
}});
i.PixelateFilter=function(){i.AbstractFilter.call(this);
this.passes=[this];
this.uniforms={invert:{type:"1f",value:0},dimensions:{type:"4fv",value:new Float32Array([10000,100,10,10])},pixelSize:{type:"2f",value:{x:10,y:10}},};
this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform vec2 testDim;","uniform vec4 dimensions;","uniform vec2 pixelSize;","uniform sampler2D uSampler;","void main(void) {","   vec2 coord = vTextureCoord;","   vec2 size = dimensions.xy/pixelSize;","   vec2 color = floor( ( vTextureCoord * size ) ) / size + pixelSize/dimensions.xy * 0.5;","   gl_FragColor = texture2D(uSampler, color);","}"]
};
i.PixelateFilter.prototype=Object.create(i.AbstractFilter.prototype);
i.PixelateFilter.prototype.constructor=i.PixelateFilter;
Object.defineProperty(i.PixelateFilter.prototype,"size",{get:function(){return this.uniforms.pixelSize.value
},set:function(j){this.dirty=true;
this.uniforms.pixelSize.value=j
}});
i.BlurXFilter=function(){i.AbstractFilter.call(this);
this.passes=[this];
this.uniforms={blur:{type:"1f",value:1/512},};
this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float blur;","uniform sampler2D uSampler;","void main(void) {","   vec4 sum = vec4(0.0);","   sum += texture2D(uSampler, vec2(vTextureCoord.x - 4.0*blur, vTextureCoord.y)) * 0.05;","   sum += texture2D(uSampler, vec2(vTextureCoord.x - 3.0*blur, vTextureCoord.y)) * 0.09;","   sum += texture2D(uSampler, vec2(vTextureCoord.x - 2.0*blur, vTextureCoord.y)) * 0.12;","   sum += texture2D(uSampler, vec2(vTextureCoord.x - blur, vTextureCoord.y)) * 0.15;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;","   sum += texture2D(uSampler, vec2(vTextureCoord.x + blur, vTextureCoord.y)) * 0.15;","   sum += texture2D(uSampler, vec2(vTextureCoord.x + 2.0*blur, vTextureCoord.y)) * 0.12;","   sum += texture2D(uSampler, vec2(vTextureCoord.x + 3.0*blur, vTextureCoord.y)) * 0.09;","   sum += texture2D(uSampler, vec2(vTextureCoord.x + 4.0*blur, vTextureCoord.y)) * 0.05;","   gl_FragColor = sum;","}"]
};
i.BlurXFilter.prototype=Object.create(i.AbstractFilter.prototype);
i.BlurXFilter.prototype.constructor=i.BlurXFilter;
Object.defineProperty(i.BlurXFilter.prototype,"blur",{get:function(){return this.uniforms.blur.value/(1/7000)
},set:function(j){this.dirty=true;
this.uniforms.blur.value=(1/7000)*j
}});
i.BlurYFilter=function(){i.AbstractFilter.call(this);
this.passes=[this];
this.uniforms={blur:{type:"1f",value:1/512},};
this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float blur;","uniform sampler2D uSampler;","void main(void) {","   vec4 sum = vec4(0.0);","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 4.0*blur)) * 0.05;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 3.0*blur)) * 0.09;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 2.0*blur)) * 0.12;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - blur)) * 0.15;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + blur)) * 0.15;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 2.0*blur)) * 0.12;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 3.0*blur)) * 0.09;","   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 4.0*blur)) * 0.05;","   gl_FragColor = sum;","}"]
};
i.BlurYFilter.prototype=Object.create(i.AbstractFilter.prototype);
i.BlurYFilter.prototype.constructor=i.BlurYFilter;
Object.defineProperty(i.BlurYFilter.prototype,"blur",{get:function(){return this.uniforms.blur.value/(1/7000)
},set:function(j){this.uniforms.blur.value=(1/7000)*j
}});
i.BlurFilter=function(){this.blurXFilter=new i.BlurXFilter();
this.blurYFilter=new i.BlurYFilter();
this.passes=[this.blurXFilter,this.blurYFilter]
};
Object.defineProperty(i.BlurFilter.prototype,"blur",{get:function(){return this.blurXFilter.blur
},set:function(j){this.blurXFilter.blur=this.blurYFilter.blur=j
}});
Object.defineProperty(i.BlurFilter.prototype,"blurX",{get:function(){return this.blurXFilter.blur
},set:function(j){this.blurXFilter.blur=j
}});
Object.defineProperty(i.BlurFilter.prototype,"blurY",{get:function(){return this.blurYFilter.blur
},set:function(j){this.blurYFilter.blur=j
}});
i.InvertFilter=function(){i.AbstractFilter.call(this);
this.passes=[this];
this.uniforms={invert:{type:"1f",value:1},};
this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float invert;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord);","   gl_FragColor.rgb = mix( (vec3(1)-gl_FragColor.rgb) * gl_FragColor.a, gl_FragColor.rgb, 1.0 - invert);","}"]
};
i.InvertFilter.prototype=Object.create(i.AbstractFilter.prototype);
i.InvertFilter.prototype.constructor=i.InvertFilter;
Object.defineProperty(i.InvertFilter.prototype,"invert",{get:function(){return this.uniforms.invert.value
},set:function(j){this.uniforms.invert.value=j
}});
i.SepiaFilter=function(){i.AbstractFilter.call(this);
this.passes=[this];
this.uniforms={sepia:{type:"1f",value:1},};
this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float sepia;","uniform sampler2D uSampler;","const mat3 sepiaMatrix = mat3(0.3588, 0.7044, 0.1368, 0.2990, 0.5870, 0.1140, 0.2392, 0.4696, 0.0912);","void main(void) {","   gl_FragColor = texture2D(uSampler, vTextureCoord);","   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * sepiaMatrix, sepia);","}"]
};
i.SepiaFilter.prototype=Object.create(i.AbstractFilter.prototype);
i.SepiaFilter.prototype.constructor=i.SepiaFilter;
Object.defineProperty(i.SepiaFilter.prototype,"sepia",{get:function(){return this.uniforms.sepia.value
},set:function(j){this.uniforms.sepia.value=j
}});
i.TwistFilter=function(){i.AbstractFilter.call(this);
this.passes=[this];
this.uniforms={radius:{type:"1f",value:0.5},angle:{type:"1f",value:5},offset:{type:"2f",value:{x:0.5,y:0.5}},};
this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform vec4 dimensions;","uniform sampler2D uSampler;","uniform float radius;","uniform float angle;","uniform vec2 offset;","void main(void) {","   vec2 coord = vTextureCoord - offset;","   float distance = length(coord);","   if (distance < radius) {","       float ratio = (radius - distance) / radius;","       float angleMod = ratio * ratio * angle;","       float s = sin(angleMod);","       float c = cos(angleMod);","       coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);","   }","   gl_FragColor = texture2D(uSampler, coord+offset);","}"]
};
i.TwistFilter.prototype=Object.create(i.AbstractFilter.prototype);
i.TwistFilter.prototype.constructor=i.TwistFilter;
Object.defineProperty(i.TwistFilter.prototype,"offset",{get:function(){return this.uniforms.offset.value
},set:function(j){this.dirty=true;
this.uniforms.offset.value=j
}});
Object.defineProperty(i.TwistFilter.prototype,"radius",{get:function(){return this.uniforms.radius.value
},set:function(j){this.dirty=true;
this.uniforms.radius.value=j
}});
Object.defineProperty(i.TwistFilter.prototype,"angle",{get:function(){return this.uniforms.angle.value
},set:function(j){this.dirty=true;
this.uniforms.angle.value=j
}});
i.ColorStepFilter=function(){i.AbstractFilter.call(this);
this.passes=[this];
this.uniforms={step:{type:"1f",value:5},};
this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","uniform float step;","void main(void) {","   vec4 color = texture2D(uSampler, vTextureCoord);","   color = floor(color * step) / step;","   gl_FragColor = color;","}"]
};
i.ColorStepFilter.prototype=Object.create(i.AbstractFilter.prototype);
i.ColorStepFilter.prototype.constructor=i.ColorStepFilter;
Object.defineProperty(i.ColorStepFilter.prototype,"step",{get:function(){return this.uniforms.step.value
},set:function(j){this.uniforms.step.value=j
}});
i.DotScreenFilter=function(){i.AbstractFilter.call(this);
this.passes=[this];
this.uniforms={scale:{type:"1f",value:1},angle:{type:"1f",value:5},dimensions:{type:"4fv",value:[0,0,0,0]}};
this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform vec4 dimensions;","uniform sampler2D uSampler;","uniform float angle;","uniform float scale;","float pattern() {","   float s = sin(angle), c = cos(angle);","   vec2 tex = vTextureCoord * dimensions.xy;","   vec2 point = vec2(","       c * tex.x - s * tex.y,","       s * tex.x + c * tex.y","   ) * scale;","   return (sin(point.x) * sin(point.y)) * 4.0;","}","void main() {","   vec4 color = texture2D(uSampler, vTextureCoord);","   float average = (color.r + color.g + color.b) / 3.0;","   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);","}"]
};
i.DotScreenFilter.prototype=Object.create(i.DotScreenFilter.prototype);
i.DotScreenFilter.prototype.constructor=i.DotScreenFilter;
Object.defineProperty(i.DotScreenFilter.prototype,"scale",{get:function(){return this.uniforms.scale.value
},set:function(j){this.dirty=true;
this.uniforms.scale.value=j
}});
Object.defineProperty(i.DotScreenFilter.prototype,"angle",{get:function(){return this.uniforms.angle.value
},set:function(j){this.dirty=true;
this.uniforms.angle.value=j
}});
i.CrossHatchFilter=function(){i.AbstractFilter.call(this);
this.passes=[this];
this.uniforms={blur:{type:"1f",value:1/512},};
this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform float blur;","uniform sampler2D uSampler;","void main(void) {","    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);","    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);","    if (lum < 1.00) {","        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0) {","            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","        }","    }","    if (lum < 0.75) {","        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0) {","            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","        }","    }","    if (lum < 0.50) {","        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0) {","            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","        }","    }","    if (lum < 0.3) {","        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0) {","            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);","        }","    }","}"]
};
i.CrossHatchFilter.prototype=Object.create(i.AbstractFilter.prototype);
i.CrossHatchFilter.prototype.constructor=i.BlurYFilter;
Object.defineProperty(i.CrossHatchFilter.prototype,"blur",{get:function(){return this.uniforms.blur.value/(1/7000)
},set:function(j){this.uniforms.blur.value=(1/7000)*j
}});
i.RGBSplitFilter=function(){i.AbstractFilter.call(this);
this.passes=[this];
this.uniforms={red:{type:"2f",value:{x:20,y:20}},green:{type:"2f",value:{x:-20,y:20}},blue:{type:"2f",value:{x:20,y:-20}},dimensions:{type:"4fv",value:[0,0,0,0]}};
this.fragmentSrc=["precision mediump float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform vec2 red;","uniform vec2 green;","uniform vec2 blue;","uniform vec4 dimensions;","uniform sampler2D uSampler;","void main(void) {","   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/dimensions.xy).r;","   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/dimensions.xy).g;","   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/dimensions.xy).b;","   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;","}"]
};
i.RGBSplitFilter.prototype=Object.create(i.AbstractFilter.prototype);
i.RGBSplitFilter.prototype.constructor=i.RGBSplitFilter;
Object.defineProperty(i.RGBSplitFilter.prototype,"angle",{get:function(){return this.uniforms.blur.value/(1/7000)
},set:function(j){this.uniforms.blur.value=(1/7000)*j
}});
if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=i
}exports.PIXI=i
}else{if(typeof define!=="undefined"&&define.amd){define(i)
}else{d.PIXI=i
}}}).call(this);
var _l=function(d,e){var c=App.lang.strings[App.lang.active][d];
if(e){c=c.replace(/\\?\{([^{}]+)\}/g,function(h,f){if(h.charAt(0)=="\\"){return h.slice(1)
}return(e[f]!=null)?e[f]:""
})
}return c
};
var App={events:{},socket:{receive:{},send:{}},sound:function(f){try{var c=new Audio("/d/sounds/"+f+".wav");
c.volume=0.3;
c.play()
}catch(d){}},lang:{active:"lv",strings:{lv:{}}}};
_.extend(App.events,Backbone.Events);
_.extend(App.socket.receive,Backbone.Events);
_.extend(App.socket.send,Backbone.Events);
App.lang.strings.lv={Join:"Pievienoties","Create room":"Izveidot istabu","Left room":"Pamest istabu","":""};
(function(){var i,h,f,d,c={}.hasOwnProperty,e=function(m,k){for(var j in k){if(c.call(k,j)){m[j]=k[j]
}}function l(){this.constructor=m
}l.prototype=k.prototype;
m.prototype=new l();
m.__super__=k.prototype;
return m
};
d=typeof require!=="undefined"?require("lodash"):window._;
i=typeof require!=="undefined"?require("backbone"):window.Backbone;
(typeof module!=="undefined"?module.exports:window).BcoCore=f=(function(){d.extend(j.prototype,i.Events);
j.prototype.size=[416,416];
function j(){this._elements={}
}j.prototype._collides=function(l,s,q,k,o,p,m,n){return !(q<=o||l>=m||k<=p||s>=n)
};
j.prototype._collides_ob=function(l,k){return this._collides(l.pos[0],l.pos[1],l.pos[0]+l.size[0],l.pos[1]+l.size[1],k.pos[0],k.pos[1],k.pos[0]+k.size[0],k.pos[1]+k.size[1])
};
j.prototype.__requestAnimFrame=function(l){var k;
k=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;
if(k){return k(l)
}return window.setTimeout(l,1000/30)
};
j.prototype.restart=function(){return this._elements={}
};
j.prototype.add=function(k){return this._elements[k.id]=k
};
j.prototype.get=function(s){var m,q,o,p,n,l,k;
if(typeof s==="number"){return this._elements[s]
}m=[];
k=this._elements;
for(q in k){n=k[q];
p=true;
for(o in s){l=s[o];
if(p&&n[o]!==l){p=false
}}if(p){m.push(n)
}}return m
};
j.prototype.update=function(n){var k,m,l;
l=[];
for(k in n){m=n[k];
if(k!=="id"){l.push(this._elements[n.id][k]=m)
}else{l.push(void 0)
}}return l
};
j.prototype.destroy=function(k){return delete this._elements[k.id]
};
j.prototype.start=function(){this._stop=false;
this._lastTime=Date.now();
return this._process()
};
j.prototype.stop=function(){return this._stop=true
};
j.prototype._process=function(){var l,k,m=this;
k=Date.now();
l=(k-this._lastTime)/1000;
if(l>0){this._updateView(l)
}this._lastTime=k;
return this.__requestAnimFrame(function(){if(!m._stop){return m._process()
}})
};
j.prototype._updateView=function(l){var o,k,s,t,m,q,p,n;
p=this._elements;
for(k in p){m=p[k];
if(m.speed>0){t=m.angle*Math.PI/180;
o=m.speed*l;
m.pos[0]+=o*Math.cos(t);
m.pos[1]+=o*Math.sin(t);
m.pos[0]=Math.round(m.pos[0]*100)/100;
m.pos[1]=Math.round(m.pos[1]*100)/100;
if(m.destroy===0){n=this._elements;
for(s in n){q=n[s];
if(k!==s&&q.destroy===0&&this._collides_ob(m,q)){if(m.angle===0){m.pos[0]=q.pos[0]-m.size[0]
}else{if(m.angle===90){m.pos[1]=q.pos[1]-m.size[1]
}else{if(m.angle===180){m.pos[0]=q.pos[0]+q.size[0]
}else{if(m.angle===270){m.pos[1]=q.pos[1]+q.size[1]
}}}}}}if(m.angle===0&&m.pos[0]+m.size[0]>this.size[0]){m.pos[0]=this.size[0]-m.size[0]
}else{if(m.angle===90&&m.pos[1]+m.size[1]>this.size[1]){m.pos[1]=this.size[1]-m.size[1]
}else{if(m.angle===180&&m.pos[0]<0){m.pos[0]=0
}else{if(m.angle===270&&m.pos[1]<0){m.pos[1]=0
}}}}}}}return this
};
return j
})();
(typeof module!=="undefined"?module.exports:window).Bco=h=(function(j){e(k,j);
d.extend(k.prototype,i.View.prototype);
k.prototype.className="game-canvas";
k.prototype.options={path:""};
function k(){k.__super__.constructor.apply(this,arguments);
i.View.prototype.constructor.apply(this,arguments);
this
}k.prototype.restart=function(){var n,m,l;
l=this._elements;
for(n in l){m=l[n];
if(m.sprite){this.stage.removeChild(m.sprite)
}}return k.__super__.restart.apply(this,arguments)
};
k.prototype.add=function(m){var l;
k.__super__.add.apply(this,arguments);
l=new PIXI.Sprite(PIXI.Texture.fromImage(this.options.path+"d/img/"+m.object+".png"));
l.anchor.x=0.5;
l.anchor.y=0.5;
this._elements[m.id]["sprite"]=l;
return this.stage.addChild(l)
};
k.prototype.elements=function(o){var m,q,p,n,l;
n=this._elements;
for(q in n){m=n[q];
if(m.sprite){this.stage.removeChild(m.sprite)
}}this._elements={};
l=[];
for(q in o){p=o[q];
l.push(this.add(p))
}return l
};
k.prototype.destroy=function(l){if(this._elements[l.id].sprite){this.stage.removeChild(this._elements[l.id].sprite)
}return k.__super__.destroy.apply(this,arguments)
};
k.prototype._updateView=function(l){k.__super__._updateView.apply(this,arguments);
return this.draw()
};
k.prototype.draw=function(){var n,m,l;
l=this._elements;
for(n in l){m=l[n];
if(m.sprite){m.sprite.position.x=m.pos[0]+m.size[0]/2;
m.sprite.position.y=m.pos[1]+m.size[1]/2;
m.sprite.rotation=m.angle*Math.PI/180
}}return this.renderer.render(this.stage)
};
k.prototype.render=function(){this.stage=new PIXI.Stage;
this.renderer=PIXI.autoDetectRenderer(416,416);
this.$el.append(this.renderer.view);
return this
};
return k
})(f)
}).call(this);
(function(){var f,k,j,i,e,c,d={}.hasOwnProperty,h=function(o,m){for(var l in m){if(d.call(m,l)){o[l]=m[l]
}}function n(){this.constructor=o
}n.prototype=m.prototype;
o.prototype=new n();
o.__super__=m.prototype;
return o
};
App.Sprite=e=(function(){l.prototype.size=[0,0];
l.prototype.pos=[0,0];
l.prototype._frames=[0];
l.prototype._frames_speed=0;
l.prototype._frames_index=0;
function l(){var m=this;
if(this._name){this.url="d/img/"+this._name+".png"
}this.img=new Image();
this.img.onload=function(){return m._loaded=true
};
this.img.src=this.url
}l.prototype.update=function(m){if(this._frames_speed>0){this._frames_index+=this._frames_speed*m;
if(this._frames_index>=this._frames.length){return this._frames_index=this._frames_index%this._frames.length
}}};
l.prototype.render=function(n){var m;
if(!this._loaded){return
}m=this._frames[Math.floor(this._frames_index)];
return n.drawImage(this.img,this.pos[0]+this.size[0]*m,this.pos[1],this.size[0],this.size[1],0,0,this.size[0],this.size[1])
};
return l
})();
App.SpriteTank=c=(function(m){h(l,m);
function l(){return l.__super__.constructor.apply(this,arguments)
}l.prototype.size=[32,32];
l.prototype._name="tank";
return l
})(e);
App.SpriteBullet=j=(function(l){h(m,l);
function m(){return m.__super__.constructor.apply(this,arguments)
}m.prototype.size=[8,8];
m.prototype._name="bullet";
return m
})(e);
App.SpriteBrick=k=(function(l){h(m,l);
function m(){return m.__super__.constructor.apply(this,arguments)
}m.prototype.size=[16,16];
m.prototype._name="brick";
return m
})(e);
App.SpriteIron=i=(function(l){h(m,l);
function m(){return m.__super__.constructor.apply(this,arguments)
}m.prototype.size=[16,16];
m.prototype._name="iron";
return m
})(e);
App.SpriteBase=f=(function(m){h(l,m);
function l(){return l.__super__.constructor.apply(this,arguments)
}l.prototype.size=[32,32];
l.prototype._name="base";
return l
})(e)
}).call(this);
(function(){var k,i,m,c,j,h,e,d,l={}.hasOwnProperty,f=function(q,o){for(var n in o){if(l.call(o,n)){q[n]=o[n]
}}function p(){this.constructor=q
}p.prototype=o.prototype;
q.prototype=new p();
q.__super__=o.prototype;
return q
};
App.Rooms=c=(function(o){f(n,o);
function n(){j=n.__super__.constructor.apply(this,arguments);
return j
}n.prototype.tagName="ol";
n.prototype.rooms={};
n.prototype.events={"click >li":function(p){return this.trigger("open",parseInt($(p.target).closest("li").attr("data-pk")))
}};
n.prototype.room_add=function(q){var p,s=this;
p=new i();
p.rooms=this;
this.listenTo(p,"monitor:add",function(){return s.trigger("monitor:add")
});
this.listenTo(p,"monitor:remove",function(){return s.trigger("monitor:remove")
});
p.render(q);
p.$el.prependTo(this.$el);
return this.rooms[q.id]=p
};
n.prototype.room_remove=function(p){this.rooms[p.id].remove();
return delete this.rooms[p.id]
};
n.prototype.user_join=function(p){return this.rooms[p.room_id].user_add(p.user)
};
n.prototype.user_left=function(p){return this.rooms[p.room_id].user_left(p.user_id)
};
n.prototype.list=function(p){return this.render(p)
};
n.prototype.render=function(p){var q=this;
_.each(this.rooms,function(t,s){return q.room_remove({id:s})
});
return _.each(p,_.bind(this.room_add,this))
};
return n
})(Backbone.View);
i=(function(o){f(n,o);
function n(){h=n.__super__.constructor.apply(this,arguments);
return h
}n.prototype.tagName="li";
n.prototype.template=_.template("<strong><%=name%></strong>\n<span><%=self.rooms.options.stages[stage]%></span>");
n.prototype.user_add=function(p){this._users+=1;
this._update_users();
if(p.id===this.rooms.options.monitor){this.trigger("monitor:add");
return this._monitor=true
}};
n.prototype.user_left=function(p){this._users-=1;
this._update_users();
if(p===this.rooms.options.monitor){this._monitor=false;
return this.trigger("monitor:remove")
}};
n.prototype._update_users=function(){return this.$el.attr("data-users",this._users)
};
n.prototype.render=function(p){n.__super__.render.apply(this,arguments);
this._users=0;
this._max=p.max;
this.$el.attr("data-pk",p.id);
this.$el.attr("data-max",p.max);
this._update_users();
return _.each(p.users,_.bind(this.user_add,this))
};
n.prototype.remove=function(){if(this._monitor){this.trigger("monitor:remove")
}return n.__super__.remove.apply(this,arguments)
};
return n
})(Backbone.View);
App.RoomPreview=m=(function(n){f(o,n);
function o(){e=o.__super__.constructor.apply(this,arguments);
return e
}o.prototype.className="room-preview";
o.prototype.template=_.template('<div class="preview">\n              <span><img src="d/maps/preview<%=stage%>.png" /></span>\n              <strong><%=name%></strong>\n              <i><%=users.length%>/<%=max%></i>\n            </div>\n<input type="text" value="http://countertank.com/#m<%=id%>" />\n            <div class="teams" data-teams="<%=teams.length%>">\n              <% _.each(teams, function(users, i){ %>\n                <div data-id="<%=i%>">\n                  <ol>\n                    <% _.each(users, function(u){ %>\n                      <li data-id="<%=u%>">\n                          <strong><%=users_ids[u].name%></strong>\n                      </li>\n                    <% }) %>\n                  </ol>\n                  <button><%=_l(\'Join\')%></button>\n                </div>\n              <% }) %>\n            </div>');
o.prototype.events={"click input":function(p){return this.$("input").select()
},"click .teams button":function(p){return this.trigger("join",{room:this._room_id,team:parseInt($(p.target).parent("div").attr("data-id"))})
}};
o.prototype.show=function(){return this.render.apply(this,arguments)
};
o.prototype.__renderData=function(p){var q;
this._room_id=p.id;
q={};
_.each(p.users,function(s){return q[s.id]=s
});
return{users_ids:q}
};
return o
})(Backbone.View);
App.CreateRoom=k=(function(o){f(n,o);
function n(){d=n.__super__.constructor.apply(this,arguments);
return d
}n.prototype.className="room-new-add";
n.prototype.template=_.template("<button><%=_l('Create room')%></button>");
n.prototype.events={"click button":function(){return this.trigger("create")
}};
return n
})(Backbone.View)
}).call(this);
(function(){var h,c,i,d={}.hasOwnProperty,f=function(m,k){for(var j in k){if(d.call(k,j)){m[j]=k[j]
}}function l(){this.constructor=m
}l.prototype=k.prototype;
m.prototype=new l();
m.__super__=k.prototype;
return m
},e=[].indexOf||function(m){for(var k=0,j=this.length;
k<j;
k++){if(k in this&&this[k]===m){return k
}}return -1
};
App.Order=h=(function(){function j(){this.buffer=[];
this.end()
}j.prototype._last_update=function(){return this._last=(new Date()).getTime()
};
j.prototype.next=function(l,k){if(k==null){k=0
}this.buffer.push({fn:l,delay:k});
if(!this.buffer_execute){return this.end(true)
}};
j.prototype.end=function(k){var l,m;
if(k==null){k=false
}if(!k){this._last_update()
}this.buffer_execute=true;
if(this.buffer.length>0){m=this.buffer.shift();
l=this._last+m.delay-(new Date()).getTime();
if(l>0){return setTimeout(m.fn,l)
}else{return m.fn()
}}else{return this.buffer_execute=false
}};
return j
})();
App.Router=c=(function(k){f(j,k);
function j(){i=j.__super__.constructor.apply(this,arguments);
return i
}j.prototype.routes={"":"rooms","m:id":"map"};
j.prototype.initialize=function(q){var m,l,n,p=this;
this.$el=q.el;
this.room=new App.Rooms({stages:{1:"stage 1"}});
this.listenTo(this.room,"open",function(o){return p.map(o)
});
this.room_new=new App.CreateRoom();
this.listenTo(this.room_new,"create",function(){return App.socket.send.trigger("room:create")
});
this.roompreview=new App.RoomPreview();
this.listenTo(this.roompreview,"join",function(o){return App.socket.send.trigger("room:join",o)
});
this.game=new window.Bco();
this.game.render();
this.listenTo(App.socket.receive,"login:success",function(o){p.user=o;
return p.room.options.monitor=o.id
});
this.listenTo(App.socket.receive,"room:list",function(){p.game.stop();
return p.$el.removeClass("user-in-room")
});
this.listenTo(App.socket.receive,"game:start",function(){return p.$el.addClass("user-in-room")
});
this.listenTo(App.socket.receive,"roompreview:show",function(o){return p.navigate("m"+o.id)
});
n=new h();
this.listenTo(App.socket.receive,"all",function(){var t,s,u,v,o;
t=Array.prototype.slice.call(arguments);
u=t.shift();
v=u.split(":");
if(v.length===2){if((o=v[0])==="room"||o==="roompreview"||o==="game"){s=0;
return n.next(function(){p[v[0]][v[1]].apply(p[v[0]],t);
return n.end()
},s)
}}});
l={up:{active:false,code:[38,74]},down:{active:false,code:[40,77]},left:{active:false,code:[37,78]},right:{active:false,code:[39,188]},fire:{active:false,code:[32,90]}};
m=function(t,u){var o,v,s;
s=[];
for(o in l){v=l[o];
if(e.call(v.code,t)>=0&&v.active!==u){v.active=u;
s.push(App.socket.send.trigger("control",{move:o,active:u}))
}else{s.push(void 0)
}}return s
};
$("body").on("keydown",function(o){return m(o.keyCode,true)
});
$("body").on("keyup",function(o){return m(o.keyCode,false)
});
this.render();
return this
};
j.prototype.rooms=function(){};
j.prototype.map=function(n){var l,m=this;
l=function(){return App.socket.send.trigger("room:open",n)
};
if(this.user){return l()
}else{return this.listenToOnce(App.socket.receive,"login:success",l)
}};
j.prototype.render=function(){this.$el.html('<div id="user-panel">\n  <ul>\n    <li>Rules</li>\n    <li>My profile</li>\n    <li>Best users</li>\n  </ul>\n  <div class="room-left"><a href="#">'+_l("Left room")+'</a></div>\n<div class="info">\n  <span class="username">fake name</span>\n  <span class="logout">logout</span>\n</div>\n</div>\n\n<section class=\'room\'>\n<div class="chat">\n		<ol>\n			<li>\n					<i>12:23</i>\n					<strong>Super user</strong>\n					 of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiv\n				</ul>\n			</li>\n			<li>\n					<i>12:23</i>\n					<strong>Super user</strong>\n        00s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiv\n				</ul>\n			</li>\n		</ol>\n		<textarea cols="35" rows="3" placeholder="(Nastrodoj)Press Enter to add message"></textarea>\n</div>\n\n\n<div class="room-list"></div>\n</section>\n\n<section class=\'game\'>\n\n<div class="chat">\n		<ol>\n			<li>\n					<i>12:23</i>\n					<strong>Super user</strong>\n					 of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiv\n				</ul>\n			</li>\n			<li>\n					<i>12:23</i>\n					<strong>Super user</strong>\n        00s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiv\n				</ul>\n			</li>\n		</ol>\n		<textarea cols="35" rows="3" placeholder="(Nastrodoj)Press Enter to add message"></textarea>\n</div>\n\n\n</section>');
this.$el.find(".room-left a").on("click",function(){return App.socket.send.trigger("room:left")
});
this.room.$el.appendTo(this.$el.find(".room-list"));
this.room_new.render().$el.appendTo(this.$el.find(".room-list"));
this.roompreview.$el.appendTo(this.$el.find(".room"));
this.game.$el.appendTo(this.$el.find(".game"));
return $('<div class="users">\n  <h1>Super mapka</h1>\n  <input type="text" value="http://countertank.com/#m3" />\n  <ol>\n    <li>\n        <strong>Super user</strong>\n    </li>\n  </ol>\n</div>').appendTo(this.$el.find(".game"))
};
j.prototype.remove=function(){this.$el.remove();
$("body").off("keydown");
$("body").off("keyup");
return this.stopListening()
};
return j
})(Backbone.Router)
}).call(this);
var r=new App.Router({el:$("#wrap")}),primus;
App.socket.send.on("all",function(){primus.write(Array.prototype.slice.call(arguments))
});
var connect=function(c){primus=Primus.connect(c,{ping:1000});
primus.on("data",function(e){App.socket.receive.trigger.apply(App.socket.receive,e)
});
primus.on("timeout",function(){});
primus.on("end",function(){});
primus.on("close",function(){});
primus.on("disconnection",function(){});
primus.on("open",function(){App.socket.send.trigger("login:try");
if(!Backbone.History.started){Backbone.history.start()
}});
$("body").append('<div id="debug"><div class="latency"></div></div>');
var d=$("#debug .latency");
primus.on("incoming::pong",function(){d.text(primus.latency)
});
return primus
};
connect("").on("timeout",function(){connect(":9052")
});