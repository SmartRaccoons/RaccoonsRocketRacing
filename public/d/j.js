(function(){var G;
var ax="3.10.1";
var P=1,H=2,V=4,ae=8,m=16,af=32,aw=64,J=128,j=256;
var t=30,aD="...";
var v=150,R=16;
var aR=200;
var N=1,ao=2;
var aK="Expected a function";
var aN="__lodash_placeholder__";
var z="[object Arguments]",aA="[object Array]",aM="[object Boolean]",B="[object Date]",aI="[object Error]",a="[object Function]",aJ="[object Map]",g="[object Number]",d="[object Object]",U="[object RegExp]",b="[object Set]",A="[object String]",y="[object WeakMap]";
var aP="[object ArrayBuffer]",a1="[object Float32Array]",W="[object Float64Array]",x="[object Int8Array]",aE="[object Int16Array]",E="[object Int32Array]",aL="[object Uint8Array]",al="[object Uint8ClampedArray]",ar="[object Uint16Array]",p="[object Uint32Array]";
var aB=/\b__p \+= '';/g,ap=/\b(__p \+=) '' \+/g,C=/(__e\(.*?\)|\b__t\)) \+\n'';/g;
var a0=/&(?:amp|lt|gt|quot|#39|#96);/g,h=/[&<>"'`]/g,s=RegExp(a0.source),au=RegExp(h.source);
var n=/<%-([\s\S]+?)%>/g,F=/<%([\s\S]+?)%>/g,Y=/<%=([\s\S]+?)%>/g;
var aW=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,u=/^\w*$/,am=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
var aj=/^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,aG=RegExp(aj.source);
var ac=/[\u0300-\u036f\ufe20-\ufe23]/g;
var a5=/\\(\\)?/g;
var e=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
var aC=/\w*$/;
var r=/^0[xX]/;
var c=/^\[object .+?Constructor\]$/;
var O=/^\d+$/;
var Q=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;
var aO=/($^)/;
var q=/['\n\r\u2028\u2029\\]/g;
var ai=(function(){var a7="[A-Z\\xc0-\\xd6\\xd8-\\xde]",a6="[a-z\\xdf-\\xf6\\xf8-\\xff]+";
return RegExp(a7+"+(?="+a7+a6+")|"+a7+"?"+a6+"|"+a7+"+|[0-9]+","g")
}());
var ag=["Array","ArrayBuffer","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Math","Number","Object","RegExp","Set","String","_","clearTimeout","isFinite","parseFloat","parseInt","setTimeout","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap"];
var K=-1;
var ak={};
ak[a1]=ak[W]=ak[x]=ak[aE]=ak[E]=ak[aL]=ak[al]=ak[ar]=ak[p]=true;
ak[z]=ak[aA]=ak[aP]=ak[aM]=ak[B]=ak[aI]=ak[a]=ak[aJ]=ak[g]=ak[d]=ak[U]=ak[b]=ak[A]=ak[y]=false;
var an={};
an[z]=an[aA]=an[aP]=an[aM]=an[B]=an[a1]=an[W]=an[x]=an[aE]=an[E]=an[g]=an[d]=an[U]=an[A]=an[aL]=an[al]=an[ar]=an[p]=true;
an[aI]=an[a]=an[aJ]=an[b]=an[y]=false;
var k={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcC":"I","\xcd":"I","\xce":"I","\xcf":"I","\xeC":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss"};
var aV={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"};
var T={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"};
var aF={"function":true,object:true};
var aS={"0":"x30","1":"x31","2":"x32","3":"x33","4":"x34","5":"x35","6":"x36","7":"x37","8":"x38","9":"x39",A:"x41",B:"x42",C:"x43",D:"x44",E:"x45",F:"x46",a:"x61",b:"x62",c:"x63",d:"x64",e:"x65",f:"x66",n:"x6e",r:"x72",t:"x74",u:"x75",v:"x76",x:"x78"};
var ab={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"};
var D=aF[typeof exports]&&exports&&!exports.nodeType&&exports;
var ad=aF[typeof module]&&module&&!module.nodeType&&module;
var aH=D&&ad&&typeof global=="object"&&global&&global.Object&&global;
var aZ=aF[typeof self]&&self&&self.Object&&self;
var S=aF[typeof window]&&window&&window.Object&&window;
var a2=ad&&ad.exports===D&&D;
var aU=aH||((S!==(this&&this.window))&&S)||aZ||this;
function aa(bb,a7){if(bb!==a7){var a9=bb===null,ba=bb===G,bc=bb===bb;
var bd=a7===null,a6=a7===G,a8=a7===a7;
if((bb>a7&&!bd)||!bc||(a9&&!a6&&a8)||(ba&&a8)){return 1
}if((bb<a7&&!a9)||!a8||(bd&&!ba&&bc)||(a6&&bc)){return -1
}}return 0
}function I(ba,a6,a9){var a8=ba.length,a7=a9?a8:-1;
while((a9?a7--:++a7<a8)){if(a6(ba[a7],a7,ba)){return a7
}}return -1
}function aX(ba,a9,a7){if(a9!==a9){return at(ba,a7)
}var a6=a7-1,a8=ba.length;
while(++a6<a8){if(ba[a6]===a9){return a6
}}return -1
}function i(a6){return typeof a6=="function"||false
}function az(a6){return a6==null?"":(a6+"")
}function l(a7,a9){var a6=-1,a8=a7.length;
while(++a6<a8&&a9.indexOf(a7.charAt(a6))>-1){}return a6
}function o(a7,a8){var a6=a7.length;
while(a6--&&a8.indexOf(a7.charAt(a6))>-1){}return a6
}function L(a7,a6){return aa(a7.criteria,a6.criteria)||(a7.index-a6.index)
}function a4(ba,be,a9){var bc=-1,bd=ba.criteria,a6=be.criteria,a7=bd.length,bb=a9.length;
while(++bc<a7){var bf=aa(bd[bc],a6[bc]);
if(bf){if(bc>=bb){return bf
}var a8=a9[bc];
return bf*((a8==="asc"||a8===true)?1:-1)
}}return ba.index-be.index
}function aq(a6){return k[a6]
}function a3(a6){return aV[a6]
}function X(a7,a6,a8){if(a6){a7=aS[a7]
}else{if(a8){a7=ab[a7]
}}return"\\"+a7
}function aQ(a6){return"\\"+ab[a6]
}function at(bb,a8,ba){var a9=bb.length,a7=a8+(ba?0:-1);
while((ba?a7--:++a7<a9)){var a6=bb[a7];
if(a6!==a6){return a7
}}return -1
}function f(a6){return !!a6&&typeof a6=="object"
}function aY(a6){return((a6<=160&&(a6>=9&&a6<=13)||a6==32||a6==160)||a6==5760||a6==6158||(a6>=8192&&(a6<=8202||a6==8232||a6==8233||a6==8239||a6==8287||a6==12288||a6==65279)))
}function M(bb,ba){var a7=-1,a9=bb.length,a8=-1,a6=[];
while(++a7<a9){if(bb[a7]===ba){bb[a7]=aN;
a6[++a8]=a7
}}return a6
}function Z(bb,a9){var a6,ba=-1,a7=bb.length,bd=-1,be=[];
while(++ba<a7){var bc=bb[ba],a8=a9?a9(bc,ba,bb):bc;
if(!ba||a6!==a8){a6=a8;
be[++bd]=bc
}}return be
}function aT(a7){var a6=-1,a8=a7.length;
while(++a6<a8&&aY(a7.charCodeAt(a6))){}return a6
}function w(a7){var a6=a7.length;
while(a6--&&aY(a7.charCodeAt(a6))){}return a6
}function av(a6){return T[a6]
}function ay(bH){bH=bH?ah.defaults(aU.Object(),bH,ah.pick(aU,ag)):aU;
var fH=bH.Array,ea=bH.Date,gW=bH.Error,eZ=bH.Function,gT=bH.Math,d5=bH.Number,ec=bH.Object,eW=bH.RegExp,en=bH.String,gG=bH.TypeError;
var cU=fH.prototype,eB=ec.prototype,gI=en.prototype;
var eT=eZ.prototype.toString;
var bR=eB.hasOwnProperty;
var ey=0;
var g0=eB.toString;
var d2=aU._;
var df=eW("^"+eT.call(bR).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");
var dS=bH.ArrayBuffer,eI=bH.clearTimeout,eR=bH.parseFloat,bf=gT.pow,g1=eB.propertyIsEnumerable,f5=bz(bH,"Set"),b9=bH.setTimeout,fy=cU.splice,g5=bH.Uint8Array,dk=bz(bH,"WeakMap");
var ca=gT.ceil,hb=bz(ec,"create"),fM=gT.floor,gX=bz(fH,"isArray"),ff=bH.isFinite,f2=bz(ec,"keys"),dJ=gT.max,bK=gT.min,eS=bz(ea,"now"),bd=bH.parseInt,b7=gT.random;
var a6=d5.NEGATIVE_INFINITY,eK=d5.POSITIVE_INFINITY;
var cd=4294967295,gS=cd-1,dT=cd>>>1;
var gz=9007199254740991;
var cw=dk&&new dk;
var cR={};
function gN(gt){if(f(gt)&&!bT(gt)&&!(gt instanceof fP)){if(gt instanceof b4){return gt
}if(bR.call(gt,"__chain__")&&bR.call(gt,"__wrapped__")){return gH(gt)
}}return new b4(gt)
}function dZ(){}function b4(hx,gt,hy){this.__wrapped__=hx;
this.__actions__=hy||[];
this.__chain__=!!gt
}var gj=gN.support={};
gN.templateSettings={escape:n,evaluate:F,interpolate:Y,variable:"",imports:{_:gN}};
function fP(gt){this.__wrapped__=gt;
this.__actions__=[];
this.__dir__=1;
this.__filtered__=false;
this.__iteratees__=[];
this.__takeCount__=eK;
this.__views__=[]
}function hu(){var gt=new fP(this.__wrapped__);
gt.__actions__=dG(this.__actions__);
gt.__dir__=this.__dir__;
gt.__filtered__=this.__filtered__;
gt.__iteratees__=dG(this.__iteratees__);
gt.__takeCount__=this.__takeCount__;
gt.__views__=dG(this.__views__);
return gt
}function gB(){if(this.__filtered__){var gt=new fP(this);
gt.__dir__=-1;
gt.__filtered__=true
}else{gt=this.clone();
gt.__dir__*=-1
}return gt
}function dO(){var hH=this.__wrapped__.value(),hL=this.__dir__,hD=bT(hH),gt=hL<0,hN=hD?hH.length:0,hK=fY(0,hN,this.__views__),hC=hK.start,hA=hK.end,hB=hA-hC,hG=gt?hA:(hC-1),hF=this.__iteratees__,hQ=hF.length,hy=0,hE=bK(hB,this.__takeCount__);
if(!hD||hN<aR||(hN==hB&&hE==hB)){return bo((gt&&hD)?hH.reverse():hH,this.__actions__)
}var hI=[];
outer:while(hB--&&hy<hE){hG+=hL;
var hO=-1,hM=hH[hG];
while(++hO<hQ){var hP=hF[hO],hJ=hP.iteratee,hz=hP.type,hx=hJ(hM);
if(hz==ao){hM=hx
}else{if(!hx){if(hz==N){continue outer
}else{break outer
}}}}hI[hy++]=hM
}return hI
}function cH(){this.__data__={}
}function fJ(gt){return this.has(gt)&&delete this.__data__[gt]
}function fK(gt){return gt=="__proto__"?G:this.__data__[gt]
}function fa(gt){return gt!="__proto__"&&bR.call(this.__data__,gt)
}function ft(gt,hx){if(gt!="__proto__"){this.__data__[gt]=hx
}return this
}function cz(gt){var hx=gt?gt.length:0;
this.data={hash:hb(null),set:new f5};
while(hx--){this.push(gt[hx])
}}function hq(hx,hz){var hy=hx.data,gt=(typeof hz=="string"||bw(hz))?hy.set.has(hz):hy.hash[hz];
return gt?0:-1
}function bL(hx){var gt=this.data;
if(typeof hx=="string"||bw(hx)){gt.set.add(hx)
}else{gt.hash[hx]=true
}}function cQ(hC,hx){var hz=-1,hB=hC.length,hA=-1,hy=hx.length,gt=fH(hB+hy);
while(++hz<hB){gt[hz]=hC[hz]
}while(++hA<hy){gt[hz++]=hx[hA]
}return gt
}function dG(hy,hz){var gt=-1,hx=hy.length;
hz||(hz=fH(hx));
while(++gt<hx){hz[gt]=hy[gt]
}return hz
}function gi(hz,hy){var gt=-1,hx=hz.length;
while(++gt<hx){if(hy(hz[gt],gt,hz)===false){break
}}return hz
}function bt(hy,hx){var gt=hy.length;
while(gt--){if(hx(hy[gt],gt,hy)===false){break
}}return hy
}function cS(hz,gt){var hx=-1,hy=hz.length;
while(++hx<hy){if(!gt(hz[hx],hx,hz)){return false
}}return true
}function gQ(hD,hA,gt,hy){var hB=-1,hx=hD.length,hz=hy,hF=hz;
while(++hB<hx){var hE=hD[hB],hC=+hA(hE);
if(gt(hC,hz)){hz=hC;
hF=hE
}}return hF
}function ek(hC,hx){var hy=-1,hA=hC.length,hz=-1,gt=[];
while(++hy<hA){var hB=hC[hy];
if(hx(hB,hy,hC)){gt[++hz]=hB
}}return gt
}function gm(hA,hz){var hx=-1,hy=hA.length,gt=fH(hy);
while(++hx<hy){gt[hx]=hz(hA[hx],hx,hA)
}return gt
}function gF(hA,gt){var hx=-1,hy=gt.length,hz=hA.length;
while(++hx<hy){hA[hz+hx]=gt[hx]
}return hA
}function e3(hB,hA,gt,hz){var hx=-1,hy=hB.length;
if(hz&&hy){gt=hB[++hx]
}while(++hx<hy){gt=hA(gt,hB[hx],hx,hB)
}return gt
}function fz(hA,hz,gt,hy){var hx=hA.length;
if(hy&&hx){gt=hA[--hx]
}while(hx--){gt=hz(gt,hA[hx],hx,hA)
}return gt
}function bJ(hz,gt){var hx=-1,hy=hz.length;
while(++hx<hy){if(gt(hz[hx],hx,hz)){return true
}}return false
}function em(hz,hy){var hx=hz.length,gt=0;
while(hx--){gt+=+hy(hz[hx])||0
}return gt
}function gc(gt,hx){return gt===G?hx:gt
}function fS(gt,hz,hy,hx){return(gt===G||!bR.call(hx,hy))?hz:gt
}function d0(hz,gt,hy){var hA=-1,hB=dV(gt),hx=hB.length;
while(++hA<hx){var hD=hB[hA],hC=hz[hD],hE=hy(hC,gt[hD],hD,hz,gt);
if((hE===hE?(hE!==hC):(hC===hC))||(hC===G&&!(hD in hz))){hz[hD]=hE
}}return hz
}function eN(gt,hx){return hx==null?gt:fE(hx,dV(hx),gt)
}function e9(hz,hC){var hA=-1,hB=hz==null,hy=!hB&&dH(hz),hx=hy?hz.length:0,gt=hC.length,hE=fH(gt);
while(++hA<gt){var hD=hC[hA];
if(hy){hE[hA]=da(hD,hx)?hz[hD]:G
}else{hE[hA]=hB?G:hz[hD]
}}return hE
}function fE(hB,hz,hx){hx||(hx={});
var gt=-1,hA=hz.length;
while(++gt<hA){var hy=hz[gt];
hx[hy]=hB[hy]
}return hx
}function bU(hy,gt,hz){var hx=typeof hy;
if(hx=="function"){return gt===G?hy:eM(hy,gt,hz)
}if(hy==null){return cJ
}if(hx=="object"){return bI(hy)
}return gt===G?dN(hy):dp(hy,gt)
}function cI(hE,hC,hx,hF,hz,hA,hy){var hH;
if(hx){hH=hz?hx(hE,hF,hz):hx(hE)
}if(hH!==G){return hH
}if(!bw(hE)){return hE
}var hB=bT(hE);
if(hB){hH=bh(hE);
if(!hC){return dG(hE,hH)
}}else{var hG=g0.call(hE),hD=hG==a;
if(hG==d||hG==z||(hD&&!hz)){hH=cG(hD?{}:hE);
if(!hC){return eN(hH,hE)
}}else{return an[hG]?fp(hE,hG,hC):(hz?hE:{})
}}hA||(hA=[]);
hy||(hy=[]);
var gt=hA.length;
while(gt--){if(hA[gt]==hE){return hy[gt]
}}hA.push(hE);
hy.push(hH);
(hB?gi:g2)(hE,function(hJ,hI){hH[hI]=cI(hJ,hC,hx,hI,hE,hA,hy)
});
return hH
}var e7=(function(){function gt(){}return function(hy){if(bw(hy)){gt.prototype=hy;
var hx=new gt;
gt.prototype=G
}return hx||{}
}
}());
function dh(hx,hy,gt){if(typeof hx!="function"){throw new gG(aK)
}return b9(function(){hx.apply(G,gt)
},hy)
}function cn(hB,hF){var hy=hB?hB.length:0,hG=[];
if(!hy){return hG
}var hA=-1,hD=bB(),hz=hD==aX,hx=(hz&&hF.length>=aR)?gC(hF):null,hC=hF.length;
if(hx){hD=hq;
hz=false;
hF=hx
}outer:while(++hA<hy){var hE=hB[hA];
if(hz&&hE===hE){var gt=hC;
while(gt--){if(hF[gt]===hE){continue outer
}}hG.push(hE)
}else{if(hD(hF,hE,0)<0){hG.push(hE)
}}}return hG
}var bZ=cC(g2);
var cy=cC(cp,true);
function bq(hy,hx){var gt=true;
bZ(hy,function(hA,hz,hB){gt=!!hx(hA,hz,hB);
return gt
});
return gt
}function dL(hB,hA,hx,hy){var hz=hy,gt=hz;
bZ(hB,function(hD,hC,hF){var hE=+hA(hD,hC,hF);
if(hx(hE,hz)||(hE===hy&&hE===gt)){hz=hE;
gt=hD
}});
return gt
}function gU(hA,hy,hz,gt){var hx=hA.length;
hz=hz==null?0:(+hz||0);
if(hz<0){hz=-hz>hx?0:(hx+hz)
}gt=(gt===G||gt>hx)?hx:(+gt||0);
if(gt<0){gt+=hx
}hx=hz>gt?0:(gt>>>0);
hz>>>=0;
while(hz<hx){hA[hz++]=hy
}return hA
}function fG(hy,hx){var gt=[];
bZ(hy,function(hA,hz,hB){if(hx(hA,hz,hB)){gt.push(hA)
}});
return gt
}function gr(hA,hx,hz,hy){var gt;
hz(hA,function(hC,hB,hD){if(hx(hC,hB,hD)){gt=hy?hB:hC;
return false
}});
return gt
}function d1(hC,hx,hB,gt){gt||(gt=[]);
var hy=-1,hz=hC.length;
while(++hy<hz){var hA=hC[hy];
if(f(hA)&&dH(hA)&&(hB||bT(hA)||hm(hA))){if(hx){d1(hA,hx,hB,gt)
}else{gF(gt,hA)
}}else{if(!hB){gt[gt.length]=hA
}}}return gt
}var fc=bA();
var dv=bA(true);
function cF(gt,hx){return fc(gt,hx,ck)
}function g2(gt,hx){return fc(gt,hx,dV)
}function cp(gt,hx){return dv(gt,hx,dV)
}function gD(hy,hA){var hx=-1,hC=hA.length,hB=-1,gt=[];
while(++hx<hC){var hz=hA[hx];
if(c9(hy[hz])){gt[++hB]=hz
}}return gt
}function gk(hy,hA,gt){if(hy==null){return
}if(gt!==G&&gt in f0(hy)){hA=[gt]
}var hx=0,hz=hA.length;
while(hy!=null&&hx<hz){hy=hy[hA[hx++]]
}return(hx&&hx==hz)?hy:G
}function cq(hA,hx,hz,hy,gt,hB){if(hA===hx){return true
}if(hA==null||hx==null||(!bw(hA)&&!f(hx))){return hA!==hA&&hx!==hx
}return cD(hA,hx,cq,hz,hy,gt,hB)
}function cD(hN,hA,hH,hE,hG,hK,hI){var hD=bT(hN),hF=bT(hA),hy=aA,hL=aA;
if(!hD){hy=g0.call(hN);
if(hy==z){hy=d
}else{if(hy!=d){hD=fe(hN)
}}}if(!hF){hL=g0.call(hA);
if(hL==z){hL=d
}else{if(hL!=d){hF=fe(hA)
}}}var gt=hy==d,hx=hL==d,hC=hy==hL;
if(hC&&!(hD||gt)){return d3(hN,hA,hy)
}if(!hG){var hM=gt&&bR.call(hN,"__wrapped__"),hJ=hx&&bR.call(hA,"__wrapped__");
if(hM||hJ){return hH(hM?hN.value():hN,hJ?hA.value():hA,hE,hG,hK,hI)
}}if(!hC){return false
}hK||(hK=[]);
hI||(hI=[]);
var hz=hK.length;
while(hz--){if(hK[hz]==hN){return hI[hz]==hA
}}hK.push(hN);
hI.push(hA);
var hB=(hD?fi:dl)(hN,hA,hH,hE,hG,hK,hI);
hK.pop();
hI.pop();
return hB
}function cY(hA,hE,hz){var hD=hE.length,hx=hD,hy=!hz;
if(hA==null){return !hx
}hA=f0(hA);
while(hD--){var hB=hE[hD];
if((hy&&hB[2])?hB[1]!==hA[hB[0]]:!(hB[0] in hA)){return false
}}while(++hD<hx){hB=hE[hD];
var hF=hB[0],hC=hA[hF],gt=hB[1];
if(hy&&hB[2]){if(hC===G&&!(hF in hA)){return false
}}else{var hG=hz?hz(hC,gt,hF):G;
if(!(hG===G?cq(gt,hC,hz,true):hG)){return false
}}}return true
}function d7(hz,hy){var hx=-1,gt=dH(hz)?fH(hz.length):[];
bZ(hz,function(hB,hA,hC){gt[++hx]=hy(hB,hA,hC)
});
return gt
}function bI(hz){var gt=c2(hz);
if(gt.length==1&&gt[0][2]){var hx=gt[0][0],hy=gt[0][1];
return function(hA){if(hA==null){return false
}return hA[hx]===hy&&(hy!==G||(hx in f0(hA)))
}
}return function(hA){return cY(hA,gt)
}
}function dp(hA,hz){var hy=bT(hA),hx=gv(hA)&&e4(hz),gt=(hA+"");
hA=et(hA);
return function(hB){if(hB==null){return false
}var hC=gt;
hB=f0(hB);
if((hy||!hx)&&!(hC in hB)){hB=hA.length==1?hB:gk(hB,bQ(hA,0,-1));
if(hB==null){return false
}hC=gE(hA);
hB=f0(hB)
}return hB[hC]===hz?(hz!==G||(hC in hB)):cq(hz,hB[hC],G,true)
}
}function hp(hy,hB,hA,gt,hC){if(!bw(hy)){return hy
}var hx=dH(hB)&&(bT(hB)||fe(hB)),hz=hx?G:dV(hB);
gi(hz||hB,function(hH,hF){if(hz){hF=hH;
hH=hB[hF]
}if(f(hH)){gt||(gt=[]);
hC||(hC=[]);
fg(hy,hB,hF,hp,hA,gt,hC)
}else{var hG=hy[hF],hD=hA?hA(hG,hH,hF,hy,hB):G,hE=hD===G;
if(hE){hD=hH
}if((hD!==G||(hx&&!(hF in hy)))&&(hE||(hD===hD?(hD!==hG):(hG===hG)))){hy[hF]=hD
}}});
return hy
}function fg(hD,gt,hG,hA,hB,hE,hC){var hy=hE.length,hx=gt[hG];
while(hy--){if(hE[hy]==hx){hD[hG]=hC[hy];
return
}}var hF=hD[hG],hH=hB?hB(hF,hx,hG,hD,gt):G,hz=hH===G;
if(hz){hH=hx;
if(dH(hx)&&(bT(hx)||fe(hx))){hH=bT(hF)?hF:(dH(hF)?dG(hF):[])
}else{if(eV(hx)||hm(hx)){hH=hm(hF)?ef(hF):(eV(hF)?hF:{})
}else{hz=false
}}}hE.push(hx);
hC.push(hH);
if(hz){hD[hG]=hA(hH,hx,hB,hE,hC)
}else{if(hH===hH?(hH!==hF):(hF===hF)){hD[hG]=hH
}}}function g8(gt){return function(hx){return hx==null?G:hx[gt]
}
}function f6(hx){var gt=(hx+"");
hx=et(hx);
return function(hy){return gk(hy,hx,gt)
}
}function hk(hA,hx){var hz=hA?hx.length:0;
while(hz--){var gt=hx[hz];
if(gt!=hy&&da(gt)){var hy=gt;
fy.call(hA,gt,1)
}}return hA
}function eG(hx,gt){return hx+fM(b7()*(gt-hx+1))
}function gO(hA,hz,gt,hx,hy){hy(hA,function(hC,hB,hD){gt=hx?(hx=false,hC):hz(gt,hC,hB,hD)
});
return gt
}var hh=!cw?cJ:function(gt,hx){cw.set(gt,hx);
return gt
};
function bQ(hB,hA,hx){var hy=-1,hz=hB.length;
hA=hA==null?0:(+hA||0);
if(hA<0){hA=-hA>hz?0:(hz+hA)
}hx=(hx===G||hx>hz)?hz:(+hx||0);
if(hx<0){hx+=hz
}hz=hA>hx?0:((hx-hA)>>>0);
hA>>>=0;
var gt=fH(hz);
while(++hy<hz){gt[hy]=hB[hy+hA]
}return gt
}function dP(hy,hx){var gt;
bZ(hy,function(hA,hz,hB){gt=hx(hA,hz,hB);
return !gt
});
return !!gt
}function gu(hy,gt){var hx=hy.length;
hy.sort(gt);
while(hx--){hy[hx]=hy[hx].value
}return hy
}function fd(hA,hz,hy){var hB=he(),hx=-1;
hz=gm(hz,function(hC){return hB(hC)
});
var gt=d7(hA,function(hC){var hD=gm(hz,function(hE){return hE(hC)
});
return{criteria:hD,index:++hx,value:hC}
});
return gu(gt,function(hD,hC){return a4(hD,hC,hy)
})
}function b6(hy,hx){var gt=0;
bZ(hy,function(hA,hz,hB){gt+=+hx(hA,hz,hB)||0
});
return gt
}function b2(hD,hB){var hC=-1,hE=bB(),hx=hD.length,hy=hE==aX,hF=hy&&hx>=aR,gt=hF?gC():null,hH=[];
if(gt){hE=hq;
hy=false
}else{hF=false;
gt=hB?[]:hH
}outer:while(++hC<hx){var hG=hD[hC],hz=hB?hB(hG,hC,hD):hG;
if(hy&&hG===hG){var hA=gt.length;
while(hA--){if(gt[hA]===hz){continue outer
}}if(hB){gt.push(hz)
}hH.push(hG)
}else{if(hE(gt,hz,0)<0){if(hB||hF){gt.push(hz)
}hH.push(hG)
}}}return hH
}function fV(hy,hz){var hx=-1,hA=hz.length,gt=fH(hA);
while(++hx<hA){gt[hx]=hy[hz[hx]]
}return gt
}function gx(hB,gt,hy,hA){var hz=hB.length,hx=hA?hz:-1;
while((hA?hx--:++hx<hz)&&gt(hB[hx],hx,hB)){}return hy?bQ(hB,(hA?0:hx),(hA?hx+1:hz)):bQ(hB,(hA?hx+1:0),(hA?hz:hx))
}function bo(hA,hB){var gt=hA;
if(gt instanceof fP){gt=gt.value()
}var hx=-1,hy=hB.length;
while(++hx<hy){var hz=hB[hx];
gt=hz.func.apply(hz.thisArg,gF([gt],hz.args))
}return gt
}function g9(hC,hB,hA){var gt=0,hz=hC?hC.length:gt;
if(typeof hB=="number"&&hB===hB&&hz<=dT){while(gt<hz){var hx=(gt+hz)>>>1,hy=hC[hx];
if((hA?(hy<=hB):(hy<hB))&&hy!==null){gt=hx+1
}else{hz=hx
}}return hz
}return b0(hC,hB,cJ,hA)
}function b0(hC,hG,hA,hD){hG=hA(hG);
var hE=0,hz=hC?hC.length:0,hx=hG!==hG,hB=hG===null,hH=hG===G;
while(hE<hz){var hF=fM((hE+hz)/2),hy=hA(hC[hF]),gt=hy!==G,hJ=hy===hy;
if(hx){var hI=hJ||hD
}else{if(hB){hI=hJ&&gt&&(hD||hy!=null)
}else{if(hH){hI=hJ&&(hD||gt)
}else{if(hy==null){hI=false
}else{hI=hD?(hy<=hG):(hy<hG)
}}}}if(hI){hE=hF+1
}else{hz=hF
}}return bK(hz,gS)
}function eM(hx,gt,hy){if(typeof hx!="function"){return cJ
}if(gt===G){return hx
}switch(hy){case 1:return function(hz){return hx.call(gt,hz)
};
case 3:return function(hA,hz,hB){return hx.call(gt,hA,hz,hB)
};
case 4:return function(hz,hB,hA,hC){return hx.call(gt,hz,hB,hA,hC)
};
case 5:return function(hD,hz,hB,hA,hC){return hx.call(gt,hD,hz,hB,hA,hC)
}
}return function(){return hx.apply(gt,arguments)
}
}function fr(hy){var gt=new dS(hy.byteLength),hx=new g5(gt);
hx.set(new g5(hy));
return gt
}function gK(hB,hA,hy){var hx=hy.length,gt=-1,hz=dJ(hB.length-hx,0),hC=-1,hD=hA.length,hE=fH(hD+hz);
while(++hC<hD){hE[hC]=hA[hC]
}while(++gt<hx){hE[hy[gt]]=hB[gt]
}while(hz--){hE[hC++]=hB[gt++]
}return hE
}function fb(hE,hD,hz){var hF=-1,hy=hz.length,gt=-1,hC=dJ(hE.length-hy,0),hx=-1,hB=hD.length,hG=fH(hC+hB);
while(++gt<hC){hG[gt]=hE[gt]
}var hA=gt;
while(++hx<hB){hG[hA+hx]=hD[hx]
}while(++hF<hy){hG[hA+hz[hF]]=hE[gt++]
}return hG
}function eH(hx,gt){return function(hE,hD,hz){var hy=gt?gt():{};
hD=he(hD,hz,3);
if(bT(hE)){var hA=-1,hB=hE.length;
while(++hA<hB){var hC=hE[hA];
hx(hy,hC,hD(hC,hA,hE),hE)
}}else{bZ(hE,function(hG,hF,hH){hx(hy,hG,hD(hG,hF,hH),hH)
})
}return hy
}
}function fR(gt){return bc(function(hA,hz){var hy=-1,hD=hA==null?0:hz.length,hB=hD>2?hz[hD-2]:G,hC=hD>2?hz[2]:G,hx=hD>1?hz[hD-1]:G;
if(typeof hB=="function"){hB=eM(hB,hx,5);
hD-=2
}else{hB=typeof hx=="function"?hx:G;
hD-=(hB?1:0)
}if(hC&&eb(hz[0],hz[1],hC)){hB=hD<3?G:hB;
hD=1
}while(++hy<hD){var hE=hz[hy];
if(hE){gt(hA,hE,hB)
}}return hA
})
}function cC(hx,gt){return function(hC,hB){var hz=hC?fw(hC):0;
if(!fL(hz)){return hx(hC,hB)
}var hy=gt?hz:-1,hA=f0(hC);
while((gt?hy--:++hy<hz)){if(hB(hA[hy],hy,hA)===false){break
}}return hC
}
}function bA(gt){return function(hy,hE,hC){var hD=f0(hy),hA=hC(hy),hB=hA.length,hx=gt?hB:-1;
while((gt?hx--:++hx<hB)){var hz=hA[hx];
if(hE(hD[hz],hz,hD)===false){break
}}return hy
}
}function bx(hy,gt){var hx=eL(hy);
function hz(){var hA=(this&&this!==aU&&this instanceof hz)?hx:hy;
return hA.apply(gt,arguments)
}return hz
}function gC(gt){return(hb&&f5)?new cz(gt):null
}function gL(gt){return function(hz){var hy=-1,hB=dM(dq(hz)),hA=hB.length,hx="";
while(++hy<hA){hx=gt(hx,hB[hy],hy)
}return hx
}
}function eL(gt){return function(){var hz=arguments;
switch(hz.length){case 0:return new gt;
case 1:return new gt(hz[0]);
case 2:return new gt(hz[0],hz[1]);
case 3:return new gt(hz[0],hz[1],hz[2]);
case 4:return new gt(hz[0],hz[1],hz[2],hz[3]);
case 5:return new gt(hz[0],hz[1],hz[2],hz[3],hz[4]);
case 6:return new gt(hz[0],hz[1],hz[2],hz[3],hz[4],hz[5]);
case 7:return new gt(hz[0],hz[1],hz[2],hz[3],hz[4],hz[5],hz[6])
}var hy=e7(gt.prototype),hx=gt.apply(hy,hz);
return bw(hx)?hx:hy
}
}function gd(gt){function hx(hA,hB,hz){if(hz&&eb(hA,hB,hz)){hB=G
}var hy=e8(hA,gt,G,G,G,G,G,hB);
hy.placeholder=hx.placeholder;
return hy
}return hx
}function ha(gt,hx){return bc(function(hz){var hy=hz[0];
if(hy==null){return hy
}hz.push(hx);
return gt.apply(G,hz)
})
}function a7(gt,hx){return function(hB,hA,hz){if(hz&&eb(hB,hA,hz)){hA=G
}hA=he(hA,hz,3);
if(hA.length==1){hB=bT(hB)?hB:eP(hB);
var hy=gQ(hB,hA,gt,hx);
if(!(hB.length&&hy===hx)){return hy
}}return dL(hB,hA,gt,hx)
}
}function dn(hx,gt){return function(hB,hy,hz){hy=he(hy,hz,3);
if(bT(hB)){var hA=I(hB,hy,gt);
return hA>-1?hB[hA]:G
}return gr(hB,hy,hx)
}
}function e0(gt){return function(hz,hx,hy){if(!(hz&&hz.length)){return -1
}hx=he(hx,hy,3);
return I(hz,hx,gt)
}
}function cx(gt){return function(hz,hx,hy){hx=he(hx,hy,3);
return gr(hz,hx,gt,true)
}
}function eu(gt){return function(){var hE,hB=arguments.length,hy=gt?hB:-1,hz=0,hx=fH(hB);
while((gt?hy--:++hy<hB)){var hA=hx[hz++]=arguments[hy];
if(typeof hA!="function"){throw new gG(aK)
}if(!hE&&b4.prototype.thru&&bP(hA)=="wrapper"){hE=new b4([],true)
}}hy=hE?-1:hB;
while(++hy<hB){hA=hx[hy];
var hD=bP(hA),hC=hD=="wrapper"?dm(hA):G;
if(hC&&e5(hC[0])&&hC[1]==(J|ae|af|j)&&!hC[4].length&&hC[9]==1){hE=hE[bP(hC[0])].apply(hE,hC[3])
}else{hE=(hA.length==1&&e5(hA))?hE[hD]():hE.thru(hA)
}}return function(){var hH=arguments,hI=hH[0];
if(hE&&hH.length==1&&bT(hI)&&hI.length>=aR){return hE.plant(hI).value()
}var hG=0,hF=hB?hx[hG].apply(this,hH):hI;
while(++hG<hB){hF=hx[hG].call(this,hF)
}return hF
}
}
}function fA(gt,hx){return function(hA,hz,hy){return(typeof hz=="function"&&hy===G&&bT(hA))?gt(hA,hz):hx(hA,eM(hz,hy,3))
}
}function c8(gt){return function(hy,hz,hx){if(typeof hz!="function"||hx!==G){hz=eM(hz,hx,3)
}return gt(hy,hz,ck)
}
}function ee(gt){return function(hy,hz,hx){if(typeof hz!="function"||hx!==G){hz=eM(hz,hx,3)
}return gt(hy,hz)
}
}function g3(gt){return function(hz,hA,hy){var hx={};
hA=he(hA,hy,3);
g2(hz,function(hE,hD,hC){var hB=hA(hE,hD,hC);
hD=gt?hB:hD;
hE=gt?hE:hB;
hx[hD]=hE
});
return hx
}
}function b3(gt){return function(hx,hz,hy){hx=az(hx);
return(gt?hx:"")+c0(hx,hz,hy)+(gt?"":hx)
}
}function dC(gt){var hx=bc(function(hz,hy){var hA=M(hy,hx.placeholder);
return e8(hz,gt,G,hy,hA)
});
return hx
}function dX(gt,hx){return function(hC,hB,hz,hy){var hA=arguments.length<3;
return(typeof hB=="function"&&hy===G&&bT(hC))?gt(hC,hB,hz,hA):gO(hC,he(hB,hy,4),hz,hA,hx)
}
}function cr(hA,hL,hJ,hD,hz,hI,hC,hx,hM,hK){var hy=hL&J,gt=hL&P,hH=hL&H,hN=hL&ae,hF=hL&V,hE=hL&m,hG=hH?G:eL(hA);
function hB(){var hP=arguments.length,hT=hP,hV=fH(hP);
while(hT--){hV[hT]=arguments[hT]
}if(hD){hV=gK(hV,hD,hz)
}if(hI){hV=fb(hV,hI,hC)
}if(hN||hE){var hZ=hB.placeholder,hR=M(hV,hZ);
hP-=hR.length;
if(hP<hK){var h0=hx?dG(hx):G,hQ=dJ(hK-hP,0),hU=hN?hR:G,hY=hN?G:hR,hS=hN?hV:G,hO=hN?G:hV;
hL|=(hN?af:aw);
hL&=~(hN?aw:af);
if(!hF){hL&=~(P|H)
}var h2=[hA,hL,hJ,hS,hU,hO,hY,h0,hM,hQ],h1=cr.apply(G,h2);
if(e5(hA)){hr(h1,h2)
}h1.placeholder=hZ;
return h1
}}var hW=gt?hJ:this,hX=hH?hW[hA]:hA;
if(hx){hV=gP(hV,hx)
}if(hy&&hM<hV.length){hV.length=hM
}if(this&&this!==aU&&this instanceof hB){hX=hG||eL(hA)
}return hX.apply(hW,hV)
}return hB
}function c0(gt,hz,hy){var hx=gt.length;
hz=+hz;
if(hx>=hz||!ff(hz)){return""
}var hA=hz-hx;
hy=hy==null?" ":(hy+"");
return de(hy,ca(hA/hy.length)).slice(0,hA)
}function hw(hB,hy,hx,hA){var gt=hy&P,hz=eL(hB);
function hC(){var hD=-1,hI=arguments.length,hH=-1,hF=hA.length,hE=fH(hF+hI);
while(++hH<hF){hE[hH]=hA[hH]
}while(hI--){hE[hH++]=arguments[++hD]
}var hG=(this&&this!==aU&&this instanceof hC)?hz:hB;
return hG.apply(gt?hx:this,hE)
}return hC
}function cA(gt){var hx=gT[gt];
return function(hz,hy){hy=hy===G?0:(+hy||0);
if(hy){hy=bf(10,hy);
return hx(hz*hy)/hy
}return hx(hz)
}
}function gZ(gt){return function(hB,hy,hz,hx){var hA=he(hz);
return(hz==null&&hA===bU)?g9(hB,hy,gt):b0(hB,hy,hA(hz,hx,1),gt)
}
}function e8(hB,hA,hG,hF,hC,hH,hz,gt){var hL=hA&H;
if(!hL&&typeof hB!="function"){throw new gG(aK)
}var hy=hF?hF.length:0;
if(!hy){hA&=~(af|aw);
hF=hC=G
}hy-=(hC?hC.length:0);
if(hA&aw){var hI=hF,hx=hC;
hF=hC=G
}var hE=hL?G:dm(hB),hK=[hB,hA,hG,hF,hC,hI,hx,hH,hz,gt];
if(hE){br(hK,hE);
hA=hK[1];
gt=hK[9]
}hK[9]=gt==null?(hL?0:hB.length):(dJ(gt-hy,0)||0);
if(hA==P){var hJ=bx(hK[0],hK[2])
}else{if((hA==af||hA==(P|af))&&!hK[4].length){hJ=hw.apply(G,hK)
}else{hJ=cr.apply(G,hK)
}}var hD=hE?hh:hr;
return hD(hJ,hK)
}function fi(hD,hE,hH,hx,hz,hA,hy){var hC=-1,hF=hD.length,hG=hE.length;
if(hF!=hG&&!(hz&&hG>hF)){return false
}while(++hC<hF){var gt=hD[hC],hB=hE[hC],hI=hx?hx(hz?hB:gt,hz?gt:hB,hC):G;
if(hI!==G){if(hI){continue
}return false
}if(hz){if(!bJ(hE,function(hJ){return gt===hJ||hH(gt,hJ,hx,hz,hA,hy)
})){return false
}}else{if(!(gt===hB||hH(gt,hB,hx,hz,hA,hy))){return false
}}}return true
}function d3(hy,hx,gt){switch(gt){case aM:case B:return +hy==+hx;
case aI:return hy.name==hx.name&&hy.message==hx.message;
case g:return(hy!=+hy)?hx!=+hx:hy==+hx;
case U:case A:return hy==(hx+"")
}return false
}function dl(hM,hy,hJ,hE,hG,hL,hK){var hB=dV(hM),hD=hB.length,hC=dV(hy),hH=hC.length;
if(hD!=hH&&!hG){return false
}var hz=hD;
while(hz--){var hN=hB[hz];
if(!(hG?hN in hy:bR.call(hy,hN))){return false
}}var gt=hG;
while(++hz<hD){hN=hB[hz];
var hO=hM[hN],hx=hy[hN],hA=hE?hE(hG?hx:hO,hG?hO:hx,hN):G;
if(!(hA===G?hJ(hO,hx,hE,hG,hL,hK):hA)){return false
}gt||(gt=hN=="constructor")
}if(!gt){var hF=hM.constructor,hI=hy.constructor;
if(hF!=hI&&("constructor" in hM&&"constructor" in hy)&&!(typeof hF=="function"&&hF instanceof hF&&typeof hI=="function"&&hI instanceof hI)){return false
}}return true
}function he(hy,hx,hz){var gt=gN.callback||c7;
gt=gt===c7?bU:gt;
return hz?gt(hy,hx,hz):gt
}var dm=!cw?gb:function(gt){return cw.get(gt)
};
function bP(hz){var gt=hz.name,hB=cR[gt],hy=hB?hB.length:0;
while(hy--){var hA=hB[hy],hx=hA.func;
if(hx==null||hx==hz){return hA.name
}}return gt
}function bB(hz,hy,hx){var gt=gN.indexOf||eQ;
gt=gt===eQ?aX:gt;
return hz?gt(hz,hy,hx):gt
}var fw=g8("length");
function c2(hx){var gt=dw(hx),hy=gt.length;
while(hy--){gt[hy][2]=e4(gt[hy][1])
}return gt
}function bz(gt,hx){var hy=gt==null?G:gt[hx];
return bN(hy)?hy:G
}function fY(hC,gt,hz){var hx=-1,hA=hz.length;
while(++hx<hA){var hB=hz[hx],hy=hB.size;
switch(hB.type){case"drop":hC+=hy;
break;
case"dropRight":gt-=hy;
break;
case"take":gt=bK(gt,hC+hy);
break;
case"takeRight":hC=dJ(hC,gt-hy);
break
}}return{start:hC,end:gt}
}function bh(hy){var hx=hy.length,gt=new hy.constructor(hx);
if(hx&&typeof hy[0]=="string"&&bR.call(hy,"index")){gt.index=hy.index;
gt.input=hy.input
}return gt
}function cG(hx){var gt=hx.constructor;
if(!(typeof gt=="function"&&gt instanceof gt)){gt=ec
}return new gt
}function fp(hB,hx,hz){var hA=hB.constructor;
switch(hx){case aP:return fr(hB);
case aM:case B:return new hA(+hB);
case a1:case W:case x:case aE:case E:case aL:case al:case ar:case p:var hy=hB.buffer;
return new hA(hz?fr(hy):hy,hB.byteOffset,hB.length);
case g:case A:return new hA(hB);
case U:var gt=new hA(hB.source,aC.exec(hB));
gt.lastIndex=hB.lastIndex
}return gt
}function ep(hx,hz,gt){if(hx!=null&&!gv(hz,hx)){hz=et(hz);
hx=hz.length==1?hx:gk(hx,bQ(hz,0,-1));
hz=gE(hz)
}var hy=hx==null?hx:hx[hz];
return hy==null?G:hy.apply(hx,gt)
}function dH(gt){return gt!=null&&fL(fw(gt))
}function da(hx,gt){hx=(typeof hx=="number"||O.test(hx))?+hx:-1;
gt=gt==null?gz:gt;
return hx>-1&&hx%1==0&&hx<gt
}function eb(hA,hy,hx){if(!bw(hx)){return false
}var hz=typeof hy;
if(hz=="number"?(dH(hx)&&da(hy,hx.length)):(hz=="string"&&hy in hx)){var gt=hx[hy];
return hA===hA?(hA===gt):(gt!==gt)
}return false
}function gv(hz,hx){var hy=typeof hz;
if((hy=="string"&&u.test(hz))||hy=="number"){return true
}if(bT(hz)){return false
}var gt=!aW.test(hz);
return gt||(hx!=null&&hz in f0(hx))
}function e5(hx){var hz=bP(hx);
if(!(hz in fP.prototype)){return false
}var gt=gN[hz];
if(hx===gt){return true
}var hy=dm(gt);
return !!hy&&hx===hy[0]
}function fL(gt){return typeof gt=="number"&&gt>-1&&gt%1==0&&gt<=gz
}function e4(gt){return gt===gt&&!bw(gt)
}function br(hA,gt){var hy=hA[1],hD=gt[1],hC=hy|hD,hz=hC<J;
var hx=(hD==J&&hy==ae)||(hD==J&&hy==j&&hA[7].length<=gt[8])||(hD==(J|j)&&hy==ae);
if(!(hz||hx)){return hA
}if(hD&P){hA[2]=gt[2];
hC|=(hy&P)?0:V
}var hE=gt[3];
if(hE){var hB=hA[3];
hA[3]=hB?gK(hB,hE,gt[4]):dG(hE);
hA[4]=hB?M(hA[3],aN):dG(gt[4])
}hE=gt[5];
if(hE){hB=hA[5];
hA[5]=hB?fb(hB,hE,gt[6]):dG(hE);
hA[6]=hB?M(hA[5],aN):dG(gt[6])
}hE=gt[7];
if(hE){hA[7]=dG(hE)
}if(hD&J){hA[8]=hA[8]==null?gt[8]:bK(hA[8],gt[8])
}if(hA[9]==null){hA[9]=gt[9]
}hA[0]=gt[0];
hA[1]=hC;
return hA
}function fF(gt,hx){return gt===G?hx:dK(gt,hx,fF)
}function cN(hy,hA){hy=f0(hy);
var hx=-1,hB=hA.length,gt={};
while(++hx<hB){var hz=hA[hx];
if(hz in hy){gt[hz]=hy[hz]
}}return gt
}function f9(hy,hx){var gt={};
cF(hy,function(hB,hA,hz){if(hx(hB,hA,hz)){gt[hA]=hB
}});
return gt
}function gP(hB,hx){var hA=hB.length,hz=bK(hx.length,hA),hy=dG(hB);
while(hz--){var gt=hx[hz];
hB[hz]=da(gt,hA)?hy[gt]:G
}return hB
}var hr=(function(){var hx=0,gt=0;
return function(hz,hB){var hy=eA(),hA=R-(hy-gt);
gt=hy;
if(hA>0){if(++hx>=v){return hz
}}else{hx=0
}return hh(hz,hB)
}
}());
function bu(hz){var hC=ck(hz),hB=hC.length,hD=hB&&hz.length;
var hx=!!hD&&fL(hD)&&(bT(hz)||hm(hz));
var hy=-1,gt=[];
while(++hy<hB){var hA=hC[hy];
if((hx&&da(hA,hD))||bR.call(hz,hA)){gt.push(hA)
}}return gt
}function eP(gt){if(gt==null){return[]
}if(!dH(gt)){return cl(gt)
}return bw(gt)?gt:ec(gt)
}function f0(gt){return bw(gt)?gt:ec(gt)
}function et(hx){if(bT(hx)){return hx
}var gt=[];
az(hx).replace(am,function(hA,hB,hy,hz){gt.push(hy?hz.replace(a5,"$1"):(hB||hA))
});
return gt
}function gH(gt){return gt instanceof fP?gt.clone():new b4(gt.__wrapped__,gt.__chain__,dG(gt.__actions__))
}function ew(hC,hy,hB){if(hB?eb(hC,hy,hB):hy==null){hy=1
}else{hy=dJ(fM(hy)||1,1)
}var hx=0,hA=hC?hC.length:0,hz=-1,gt=fH(ca(hA/hy));
while(hx<hA){gt[++hz]=bQ(hC,hx,(hx+=hy))
}return gt
}function dy(hB){var hx=-1,hz=hB?hB.length:0,hy=-1,gt=[];
while(++hx<hz){var hA=hB[hx];
if(hA){gt[++hy]=hA
}}return gt
}var ge=bc(function(hx,gt){return(f(hx)&&dH(hx))?cn(hx,d1(gt,false,true)):[]
});
function dY(hz,hy,hx){var gt=hz?hz.length:0;
if(!gt){return[]
}if(hx?eb(hz,hy,hx):hy==null){hy=1
}return bQ(hz,hy<0?0:hy)
}function eC(hz,hy,hx){var gt=hz?hz.length:0;
if(!gt){return[]
}if(hx?eb(hz,hy,hx):hy==null){hy=1
}hy=gt-(+hy||0);
return bQ(hz,0,hy<0?0:hy)
}function bj(hy,gt,hx){return(hy&&hy.length)?gx(hy,he(gt,hx,3),true,true):[]
}function dz(hy,gt,hx){return(hy&&hy.length)?gx(hy,he(gt,hx,3),true):[]
}function ce(hA,hy,hz,gt){var hx=hA?hA.length:0;
if(!hx){return[]
}if(hz&&typeof hz!="number"&&eb(hA,hy,hz)){hz=0;
gt=hx
}return gU(hA,hy,hz,gt)
}var bV=e0();
var bs=e0(true);
function ba(gt){return gt?gt[0]:G
}function ei(hz,gt,hy){var hx=hz?hz.length:0;
if(hy&&eb(hz,gt,hy)){gt=false
}return hx?d1(hz,gt):[]
}function f4(hx){var gt=hx?hx.length:0;
return gt?d1(hx,true):[]
}function eQ(hA,hz,hx){var hy=hA?hA.length:0;
if(!hy){return -1
}if(typeof hx=="number"){hx=hx<0?dJ(hy+hx,0):hx
}else{if(hx){var gt=g9(hA,hz);
if(gt<hy&&(hz===hz?(hz===hA[gt]):(hA[gt]!==hA[gt]))){return gt
}return -1
}}return aX(hA,hz,hx||0)
}function fj(gt){return eC(gt,1)
}var dc=bc(function(hy){var hH=hy.length,hB=hH,hE=fH(hz),hF=bB(),hA=hF==aX,hI=[];
while(hB--){var hG=hy[hB]=dH(hG=hy[hB])?hG:[];
hE[hB]=(hA&&hG.length>=120)?gC(hB&&hG):null
}var hD=hy[0],hC=-1,hz=hD?hD.length:0,hx=hE[0];
outer:while(++hC<hz){hG=hD[hC];
if((hx?hq(hx,hG):hF(hI,hG,0))<0){var hB=hH;
while(--hB){var gt=hE[hB];
if((gt?hq(gt,hG):hF(hy[hB],hG,0))<0){continue outer
}}if(hx){hx.push(hG)
}hI.push(hG)
}}return hI
});
function gE(hx){var gt=hx?hx.length:0;
return gt?hx[gt-1]:G
}function dQ(hB,hA,hy){var hz=hB?hB.length:0;
if(!hz){return -1
}var hx=hz;
if(typeof hy=="number"){hx=(hy<0?dJ(hz+hy,0):bK(hy||0,hz-1))+1
}else{if(hy){hx=g9(hB,hA,true)-1;
var gt=hB[hx];
if(hA===hA?(hA===gt):(gt!==gt)){return hx
}return -1
}}if(hA!==hA){return at(hB,hx,true)
}while(hx--){if(hB[hx]===hA){return hx
}}return -1
}function fC(){var hx=arguments,hC=hx[0];
if(!(hC&&hC.length)){return hC
}var gt=0,hz=bB(),hA=hx.length;
while(++gt<hA){var hy=0,hB=hx[gt];
while((hy=hz(hC,hB,hy))>-1){fy.call(hC,hy,1)
}}return hC
}var dA=bc(function(hy,hx){hx=d1(hx);
var gt=e9(hy,hx);
hk(hy,hx.sort(aa));
return gt
});
function el(hD,hx,hy){var gt=[];
if(!(hD&&hD.length)){return gt
}var hA=-1,hz=[],hB=hD.length;
hx=he(hx,hy,3);
while(++hA<hB){var hC=hD[hA];
if(hx(hC,hA,hD)){gt.push(hC);
hz.push(hA)
}}hk(hD,hz);
return gt
}function ga(gt){return dY(gt,1)
}function eF(hz,hy,gt){var hx=hz?hz.length:0;
if(!hx){return[]
}if(gt&&typeof gt!="number"&&eb(hz,hy,gt)){hy=0;
gt=hx
}return bQ(hz,hy,gt)
}var eo=gZ();
var gg=gZ(true);
function d9(hz,hy,hx){var gt=hz?hz.length:0;
if(!gt){return[]
}if(hx?eb(hz,hy,hx):hy==null){hy=1
}return bQ(hz,0,hy<0?0:hy)
}function er(hz,hy,hx){var gt=hz?hz.length:0;
if(!gt){return[]
}if(hx?eb(hz,hy,hx):hy==null){hy=1
}hy=gt-(+hy||0);
return bQ(hz,hy<0?0:hy)
}function gs(hy,gt,hx){return(hy&&hy.length)?gx(hy,he(gt,hx,3),false,true):[]
}function ds(hy,gt,hx){return(hy&&hy.length)?gx(hy,he(gt,hx,3)):[]
}var cu=bc(function(gt){return b2(d1(gt,false,true))
});
function dF(hB,hA,hy,gt){var hx=hB?hB.length:0;
if(!hx){return[]
}if(hA!=null&&typeof hA!="boolean"){gt=hy;
hy=eb(hB,hA,gt)?G:hA;
hA=false
}var hz=he();
if(!(hy==null&&hz===bU)){hy=hz(hy,gt,3)
}return(hA&&bB()==aX)?Z(hB,hy):b2(hB,hy)
}function cf(hz){if(!(hz&&hz.length)){return[]
}var hx=-1,hy=0;
hz=ek(hz,function(hA){if(dH(hA)){hy=dJ(hA.length,hy);
return true
}});
var gt=fH(hy);
while(++hx<hy){gt[hx]=gm(hz,g8(hx))
}return gt
}function cZ(hA,hz,hx){var hy=hA?hA.length:0;
if(!hy){return[]
}var gt=cf(hA);
if(hz==null){return gt
}hz=eM(hz,hx,4);
return gm(gt,function(hB){return e3(hB,hz,G,true)
})
}var ev=bc(function(hx,gt){return dH(hx)?cn(hx,gt):[]
});
function a8(){var hx=-1,hy=arguments.length;
while(++hx<hy){var hz=arguments[hx];
if(dH(hz)){var gt=gt?gF(cn(gt,hz),cn(hz,gt)):hz
}}return gt?b2(gt):[]
}var fT=bc(cf);
function bM(hA,hx){var hy=-1,hB=hA?hA.length:0,gt={};
if(hB&&!hx&&!bT(hA[0])){hx=[]
}while(++hy<hB){var hz=hA[hy];
if(hx){gt[hz]=hx[hy]
}else{if(hz){gt[hz[0]]=hz[1]
}}}return gt
}var fW=bc(function(hy){var hx=hy.length,hz=hx>2?hy[hx-2]:G,gt=hx>1?hy[hx-1]:G;
if(hx>2&&typeof hz=="function"){hx-=2
}else{hz=(hx>1&&typeof gt=="function")?(--hx,gt):G;
gt=G
}hy.length=hx;
return cZ(hy,hz,gt)
});
function f7(hx){var gt=gN(hx);
gt.__chain__=true;
return gt
}function eU(hx,hy,gt){hy.call(gt,hx);
return hx
}function dB(hx,hy,gt){return hy.call(gt,hx)
}function hi(){return f7(this)
}function cM(){return new b4(this.value(),this.__chain__)
}var cT=bc(function(gt){gt=d1(gt);
return this.thru(function(hx){return cQ(bT(hx)?hx:[f0(hx)],gt)
})
});
function eh(hz){var gt,hx=this;
while(hx instanceof dZ){var hA=gH(hx);
if(gt){hy.__wrapped__=hA
}else{gt=hA
}var hy=hA;
hx=hx.__wrapped__
}hy.__wrapped__=hz;
return gt
}function ht(){var hx=this.__wrapped__;
var hy=function(hz){return(gt&&gt.__dir__<0)?hz:hz.reverse()
};
if(hx instanceof fP){var gt=hx;
if(this.__actions__.length){gt=new fP(this)
}gt=gt.reverse();
gt.__actions__.push({func:dB,args:[hy],thisArg:G});
return new b4(gt,this.__chain__)
}return this.thru(hy)
}function gw(){return(this.value()+"")
}function cO(){return bo(this.__wrapped__,this.__actions__)
}var hc=bc(function(hx,gt){return e9(hx,d1(gt))
});
var bg=eH(function(gt,hy,hx){bR.call(gt,hx)?++gt[hx]:(gt[hx]=1)
});
function eg(hz,gt,hx){var hy=bT(hz)?cS:bq;
if(hx&&eb(hz,gt,hx)){gt=G
}if(typeof gt!="function"||hx!==G){gt=he(gt,hx,3)
}return hy(hz,gt)
}function cc(hz,gt,hx){var hy=bT(hz)?ek:fG;
gt=he(gt,hx,3);
return hy(hz,gt)
}var bG=dn(bZ);
var ch=dn(cy,true);
function d4(hx,gt){return bG(hx,bI(gt))
}var c3=fA(gi,bZ);
var eE=fA(bt,cy);
var b1=eH(function(gt,hy,hx){if(bR.call(gt,hx)){gt[hx].push(hy)
}else{gt[hx]=[hy]
}});
function cj(hA,hz,gt,hy){var hx=hA?fw(hA):0;
if(!fL(hx)){hA=cl(hA);
hx=hA.length
}if(typeof gt!="number"||(hy&&eb(hz,gt,hy))){gt=0
}else{gt=gt<0?dJ(hx+gt,0):(gt||0)
}return(typeof hA=="string"||!bT(hA)&&bD(hA))?(gt<=hx&&hA.indexOf(hz,gt)>-1):(!!hx&&bB(hA,hz,gt)>-1)
}var bC=eH(function(gt,hy,hx){gt[hx]=hy
});
var a9=bc(function(hC,hB,hz){var hy=-1,hA=typeof hB=="function",hx=gv(hB),gt=dH(hC)?fH(hC.length):[];
bZ(hC,function(hE){var hD=hA?hB:((hx&&hE!=null)?hE[hB]:G);
gt[++hy]=hD?hD.apply(hE,hz):ep(hE,hB,hz)
});
return gt
});
function du(hz,hy,gt){var hx=bT(hz)?gm:d7;
hy=he(hy,gt,3);
return hx(hz,hy)
}var b8=eH(function(gt,hy,hx){gt[hx?0:1].push(hy)
},function(){return[[],[]]
});
function fx(hx,gt){return du(hx,dN(gt))
}var c4=dX(e3,bZ);
var dE=dX(fz,cy);
function cV(hz,gt,hx){var hy=bT(hz)?ek:fG;
gt=he(gt,hx,3);
return hy(hz,function(hB,hA,hC){return !gt(hB,hA,hC)
})
}function f3(hz,hx,hB){if(hB?eb(hz,hx,hB):hx==null){hz=eP(hz);
var gt=hz.length;
return gt>0?hz[eG(0,gt-1)]:G
}var hA=-1,hE=fN(hz),gt=hE.length,hy=gt-1;
hx=bK(hx<0?0:(+hx||0),gt);
while(++hA<hx){var hC=eG(hA,hy),hD=hE[hC];
hE[hC]=hE[hA];
hE[hA]=hD
}hE.length=hx;
return hE
}function hj(gt){return f3(gt,eK)
}function fh(hx){var gt=hx?fw(hx):0;
return fL(gt)?gt:dV(hx).length
}function fm(hz,gt,hx){var hy=bT(hz)?bJ:dP;
if(hx&&eb(hz,gt,hx)){gt=G
}if(typeof gt!="function"||hx!==G){gt=he(gt,hx,3)
}return hy(hz,gt)
}function cK(hA,hz,hx){if(hA==null){return[]
}if(hx&&eb(hA,hz,hx)){hz=G
}var hy=-1;
hz=he(hz,hx,3);
var gt=d7(hA,function(hC,hB,hD){return{criteria:hz(hC,hB,hD),index:++hy,value:hC}
});
return gu(gt,L)
}var c5=bc(function(hy,hx){if(hy==null){return[]
}var gt=hx[2];
if(gt&&eb(hx[0],hx[1],gt)){hx.length=1
}return fd(hy,d1(hx),[])
});
function fs(hz,hy,gt,hx){if(hz==null){return[]
}if(hx&&eb(hy,gt,hx)){gt=G
}if(!bT(hy)){hy=hy==null?[]:[hy]
}if(!bT(gt)){gt=gt==null?[]:[gt]
}return fd(hz,hy,gt)
}function bi(hx,gt){return cc(hx,bI(gt))
}var eA=eS||function(){return new ea().getTime()
};
function hg(hy,hx){if(typeof hx!="function"){if(typeof hy=="function"){var gt=hy;
hy=hx;
hx=gt
}else{throw new gG(aK)
}}hy=ff(hy=+hy)?hy:0;
return function(){if(--hy<1){return hx.apply(this,arguments)
}}
}function fv(hx,hy,gt){if(gt&&eb(hx,hy,gt)){hy=G
}hy=(hx&&hy==null)?hx.length:dJ(+hy||0,0);
return e8(hx,J,G,G,G,G,hy)
}function gh(hz,hy){var gt;
if(typeof hy!="function"){if(typeof hz=="function"){var hx=hz;
hz=hy;
hy=hx
}else{throw new gG(aK)
}}return function(){if(--hz>0){gt=hy.apply(this,arguments)
}if(hz<=1){hy=G
}return gt
}
}var d6=bc(function(hz,hx,hy){var gt=P;
if(hy.length){var hA=M(hy,d6.placeholder);
gt|=af
}return e8(hz,gt,hx,hy,hA)
});
var bO=bc(function(hx,hA){hA=hA.length?d1(hA):gf(hx);
var gt=-1,hz=hA.length;
while(++gt<hz){var hy=hA[gt];
hx[hy]=e8(hx[hy],P,hx)
}return hx
});
var gA=bc(function(hx,hz,hy){var gt=P|H;
if(hy.length){var hA=M(hy,gA.placeholder);
gt|=af
}return e8(hz,gt,hx,hy,hA)
});
var ci=gd(ae);
var gy=gd(m);
function eY(hC,hH,hz){var gt,hO,hE,hG,hJ,hD,hK,hB=0,hA=false,hx=true;
if(typeof hC!="function"){throw new gG(aK)
}hH=hH<0?0:(+hH||0);
if(hz===true){var hN=true;
hx=false
}else{if(bw(hz)){hN=!!hz.leading;
hA="maxWait" in hz&&dJ(+hz.maxWait||0,hH);
hx="trailing" in hz?!!hz.trailing:hx
}}function hy(){if(hD){eI(hD)
}if(hO){eI(hO)
}hB=0;
hO=hD=hK=G
}function hF(hP,hQ){if(hQ){eI(hQ)
}hO=hD=hK=G;
if(hP){hB=eA();
hE=hC.apply(hJ,gt);
if(!hD&&!hO){gt=hJ=G
}}}function hI(){var hP=hH-(eA()-hG);
if(hP<=0||hP>hH){hF(hK,hO)
}else{hD=b9(hI,hP)
}}function hL(){hF(hx,hD)
}function hM(){gt=arguments;
hG=eA();
hJ=this;
hK=hx&&(hD||!hN);
if(hA===false){var hP=hN&&!hD
}else{if(!hO&&!hN){hB=hG
}var hR=hA-(hG-hB),hQ=hR<=0||hR>hA;
if(hQ){if(hO){hO=eI(hO)
}hB=hG;
hE=hC.apply(hJ,gt)
}else{if(!hO){hO=b9(hL,hR)
}}}if(hQ&&hD){hD=eI(hD)
}else{if(!hD&&hH!==hA){hD=b9(hI,hH)
}}if(hP){hQ=true;
hE=hC.apply(hJ,gt)
}if(hQ&&!hD&&!hO){gt=hJ=G
}return hE
}hM.cancel=hy;
return hM
}var bW=bc(function(hx,gt){return dh(hx,1,gt)
});
var fZ=bc(function(hx,hy,gt){return dh(hx,hy,gt)
});
var cL=eu();
var go=eu(true);
function gM(hx,hy){if(typeof hx!="function"||(hy&&typeof hy!="function")){throw new gG(aK)
}var gt=function(){var hB=arguments,hC=hy?hy.apply(this,hB):hB[0],hA=gt.cache;
if(hA.has(hC)){return hA.get(hC)
}var hz=hx.apply(this,hB);
gt.cache=hA.set(hC,hz);
return hz
};
gt.cache=new gM.Cache;
return gt
}var ct=bc(function(hy,gt){gt=d1(gt);
if(typeof hy!="function"||!cS(gt,i)){throw new gG(aK)
}var hx=gt.length;
return bc(function(hA){var hz=bK(hA.length,hx);
while(hz--){hA[hz]=gt[hz](hA[hz])
}return hy.apply(this,hA)
})
});
function fD(gt){if(typeof gt!="function"){throw new gG(aK)
}return function(){return !gt.apply(this,arguments)
}
}function fu(gt){return gh(2,gt)
}var hn=dC(af);
var dg=dC(aw);
var g4=bc(function(hx,gt){return e8(hx,j,G,G,G,d1(gt))
});
function bc(gt,hx){if(typeof gt!="function"){throw new gG(aK)
}hx=dJ(hx===G?(gt.length-1):(+hx||0),0);
return function(){var hA=arguments,hz=-1,hC=dJ(hA.length-hx,0),hB=fH(hC);
while(++hz<hC){hB[hz]=hA[hx+hz]
}switch(hx){case 0:return gt.call(this,hB);
case 1:return gt.call(this,hA[0],hB);
case 2:return gt.call(this,hA[0],hA[1],hB)
}var hy=fH(hx+1);
hz=-1;
while(++hz<hx){hy[hz]=hA[hz]
}hy[hx]=hB;
return gt.apply(this,hy)
}
}function fX(gt){if(typeof gt!="function"){throw new gG(aK)
}return function(hx){return gt.apply(this,hx)
}
}function cP(hx,hy,gt){var hA=true,hz=true;
if(typeof hx!="function"){throw new gG(aK)
}if(gt===false){hA=false
}else{if(bw(gt)){hA="leading" in gt?!!gt.leading:hA;
hz="trailing" in gt?!!gt.trailing:hz
}}return eY(hx,hy,{leading:hA,maxWait:+hy,trailing:hz})
}function be(gt,hx){hx=hx==null?cJ:hx;
return e8(hx,af,G,[gt],[])
}function fn(hz,hx,hy,gt){if(hx&&typeof hx!="boolean"&&eb(hz,hx,hy)){hx=false
}else{if(typeof hx=="function"){gt=hy;
hy=hx;
hx=false
}}return typeof hy=="function"?cI(hz,hx,eM(hy,gt,1)):cI(hz,hx)
}function hl(hy,hx,gt){return typeof hx=="function"?cI(hy,true,eM(hx,gt,1)):cI(hy,true)
}function fo(hx,gt){return hx>gt
}function bY(hx,gt){return hx>=gt
}function hm(gt){return f(gt)&&dH(gt)&&bR.call(gt,"callee")&&!g1.call(gt,"callee")
}var bT=gX||function(gt){return f(gt)&&fL(gt.length)&&g0.call(gt)==aA
};
function cs(gt){return gt===true||gt===false||(f(gt)&&g0.call(gt)==aM)
}function gV(gt){return f(gt)&&g0.call(gt)==B
}function bp(gt){return !!gt&&gt.nodeType===1&&f(gt)&&!eV(gt)
}function f8(gt){if(gt==null){return true
}if(dH(gt)&&(bT(gt)||bD(gt)||hm(gt)||(f(gt)&&c9(gt.splice)))){return !gt.length
}return !dV(gt).length
}function hd(hA,hx,hz,hy){hz=typeof hz=="function"?eM(hz,hy,3):G;
var gt=hz?hz(hA,hx):G;
return gt===G?cq(hA,hx,hz):!!gt
}function cX(gt){return f(gt)&&typeof gt.message=="string"&&g0.call(gt)==aI
}function gn(gt){return typeof gt=="number"&&ff(gt)
}function c9(gt){return bw(gt)&&g0.call(gt)==a
}function bw(hx){var gt=typeof hx;
return !!hx&&(gt=="object"||gt=="function")
}function bb(hx,hz,hy,gt){hy=typeof hy=="function"?eM(hy,gt,3):G;
return cY(hx,c2(hz),hy)
}function cW(gt){return bn(gt)&&gt!=+gt
}function bN(gt){if(gt==null){return false
}if(c9(gt)){return df.test(eT.call(gt))
}return f(gt)&&c.test(gt)
}function fO(gt){return gt===null
}function bn(gt){return typeof gt=="number"||(f(gt)&&g0.call(gt)==g)
}function eV(hy){var hx;
if(!(f(hy)&&g0.call(hy)==d&&!hm(hy))||(!bR.call(hy,"constructor")&&(hx=hy.constructor,typeof hx=="function"&&!(hx instanceof hx)))){return false
}var gt;
cF(hy,function(hA,hz){gt=hz
});
return gt===G||bR.call(hy,gt)
}function co(gt){return bw(gt)&&g0.call(gt)==U
}function bD(gt){return typeof gt=="string"||(f(gt)&&g0.call(gt)==A)
}function fe(gt){return f(gt)&&fL(gt.length)&&!!ak[g0.call(gt)]
}function bE(gt){return gt===G
}function ej(hx,gt){return hx<gt
}function gJ(hx,gt){return hx<=gt
}function fN(hx){var gt=hx?fw(hx):0;
if(!fL(gt)){return cl(hx)
}if(!gt){return[]
}return dG(hx)
}function ef(gt){return fE(gt,ck(gt))
}var dK=fR(hp);
var hv=fR(function(gt,hy,hx){return hx?d0(gt,hy,hx):eN(gt,hy)
});
function by(hx,hy,hz){var gt=e7(hx);
if(hz&&eb(hx,hy,hz)){hy=G
}return hy?eN(gt,hy):gt
}var gl=ha(hv,gc);
var eD=ha(dK,fF);
var gq=cx(g2);
var bv=cx(cp);
var fl=c8(fc);
var fU=c8(dv);
var dj=ee(g2);
var cB=ee(cp);
function gf(gt){return gD(gt,ck(gt))
}function fB(hy,hz,hx){var gt=hy==null?G:gk(hy,et(hz),hz+"");
return gt===G?hx:gt
}function e2(hx,hy){if(hx==null){return false
}var gt=bR.call(hx,hy);
if(!gt&&!gv(hy)){hy=et(hy);
hx=hy.length==1?hx:gk(hx,bQ(hy,0,-1));
if(hx==null){return false
}hy=gE(hy);
gt=bR.call(hx,hy)
}return gt||(fL(hx.length)&&da(hy,hx.length)&&(bT(hx)||hm(hx)))
}function cE(hx,hB,hz){if(hz&&eb(hx,hB,hz)){hB=G
}var hy=-1,hA=dV(hx),gt=hA.length,hE={};
while(++hy<gt){var hD=hA[hy],hC=hx[hD];
if(hB){if(bR.call(hE,hC)){hE[hC].push(hD)
}else{hE[hC]=[hD]
}}else{hE[hC]=hD
}}return hE
}var dV=!f2?bu:function(hx){var gt=hx==null?G:hx.constructor;
if((typeof gt=="function"&&gt.prototype===hx)||(typeof hx!="function"&&dH(hx))){return bu(hx)
}return bw(hx)?f2(hx):[]
};
function ck(hz){if(hz==null){return[]
}if(!bw(hz)){hz=ec(hz)
}var hC=hz.length;
hC=(hC&&fL(hC)&&(bT(hz)||hm(hz))&&hC)||0;
var hy=hz.constructor,hx=-1,hD=typeof hy=="function"&&hy.prototype===hz,gt=fH(hC),hB=hC>0;
while(++hx<hC){gt[hx]=(hx+"")
}for(var hA in hz){if(!(hB&&da(hA,hC))&&!(hA=="constructor"&&(hD||!bR.call(hz,hA)))){gt.push(hA)
}}return gt
}var ez=g3(true);
var hs=g3();
var fq=bc(function(hx,hy){if(hx==null){return{}
}if(typeof hy[0]!="function"){var hy=gm(d1(hy),en);
return cN(hx,cn(ck(hx),hy))
}var gt=eM(hy[0],hy[1],3);
return f9(hx,function(hB,hA,hz){return !gt(hB,hA,hz)
})
});
function dw(hy){hy=f0(hy);
var hx=-1,hA=dV(hy),hB=hA.length,gt=fH(hB);
while(++hx<hB){var hz=hA[hx];
gt[hx]=[hz,hy[hz]]
}return gt
}var bS=bc(function(gt,hx){if(gt==null){return{}
}return typeof hx[0]=="function"?f9(gt,eM(hx[0],hx[1],3)):cN(gt,d1(hx))
});
function c6(hy,hz,hx){var gt=hy==null?G:hy[hz];
if(gt===G){if(hy!=null&&!gv(hz,hy)){hz=et(hz);
hy=hz.length==1?hy:gk(hy,bQ(hz,0,-1));
gt=hy==null?G:hy[gE(hz)]
}gt=gt===G?hx:gt
}return c9(gt)?gt.call(hy):gt
}function fk(hy,hE,hC){if(hy==null){return hy
}var hx=(hE+"");
hE=(hy[hx]!=null||gv(hE,hy))?[hx]:et(hE);
var hA=-1,gt=hE.length,hz=gt-1,hB=hy;
while(hB!=null&&++hA<gt){var hD=hE[hA];
if(bw(hB)){if(hA==hz){hB[hD]=hC
}else{if(hB[hD]==null){hB[hD]=da(hE[hA+1])?[]:{}
}}}hB=hB[hD]
}return hy
}function cb(hz,hB,hx,gt){var hA=bT(hz)||fe(hz);
hB=he(hB,gt,4);
if(hx==null){if(hA||bw(hz)){var hy=hz.constructor;
if(hA){hx=bT(hz)?new hy:[]
}else{hx=e7(c9(hy)?hy.prototype:G)
}}else{hx={}
}}(hA?gi:g2)(hz,function(hE,hD,hC){return hB(hx,hE,hD,hC)
});
return hx
}function cl(gt){return fV(gt,dV(gt))
}function e6(gt){return fV(gt,ck(gt))
}function fQ(hx,hy,gt){hy=+hy||0;
if(gt===G){gt=hy;
hy=0
}else{gt=+gt||0
}return hx>=bK(hy,gt)&&hx<dJ(hy,gt)
}function ho(hy,gt,hB){if(hB&&eb(hy,gt,hB)){gt=hB=G
}var hA=hy==null,hx=gt==null;
if(hB==null){if(hx&&typeof hy=="boolean"){hB=hy;
hy=1
}else{if(typeof gt=="boolean"){hB=gt;
hx=true
}}}if(hA&&hx){gt=1;
hx=false
}hy=+hy||0;
if(hx){gt=hy;
hy=0
}else{gt=+gt||0
}if(hB||hy%1||gt%1){var hz=b7();
return bK(hy+(hz*(gt-hy+eR("1e-"+((hz+"").length-1)))),gt)
}return eG(hy,gt)
}var cm=gL(function(gt,hy,hx){hy=hy.toLowerCase();
return gt+(hx?(hy.charAt(0).toUpperCase()+hy.slice(1)):hy)
});
function d8(gt){gt=az(gt);
return gt&&(gt.charAt(0).toUpperCase()+gt.slice(1))
}function dq(gt){gt=az(gt);
return gt&&gt.replace(Q,aq).replace(ac,"")
}function ed(hx,hz,gt){hx=az(hx);
hz=(hz+"");
var hy=hx.length;
gt=gt===G?hy:bK(gt<0?0:(+gt||0),hy);
gt-=hz.length;
return gt>=0&&hx.indexOf(hz,gt)==gt
}function eJ(gt){gt=az(gt);
return(gt&&au.test(gt))?gt.replace(h,a3):gt
}function dI(gt){gt=az(gt);
return(gt&&aG.test(gt))?gt.replace(aj,X):(gt||"(?:)")
}var es=gL(function(gt,hy,hx){return gt+(hx?"-":"")+hy.toLowerCase()
});
function e1(hx,hC,hB){hx=az(hx);
hC=+hC;
var hA=hx.length;
if(hA>=hC||!ff(hC)){return hx
}var gt=(hC-hA)/2,hy=fM(gt),hz=ca(gt);
hB=c0("",hz,hB);
return hB.slice(0,hy)+hx+hB
}var dx=b3();
var fI=b3(true);
function cg(gt,hx,hy){if(hy?eb(gt,hx,hy):hx==null){hx=0
}else{if(hx){hx=+hx
}}gt=cv(gt);
return bd(gt,hx||(r.test(gt)?16:10))
}function de(hx,hy){var gt="";
hx=az(hx);
hy=+hy;
if(hy<1||!hx||!ff(hy)){return gt
}do{if(hy%2){gt+=hx
}hy=fM(hy/2);
hx+=hx
}while(hy);
return gt
}var g7=gL(function(gt,hy,hx){return gt+(hx?"_":"")+hy.toLowerCase()
});
var f1=gL(function(gt,hy,hx){return gt+(hx?" ":"")+(hy.charAt(0).toUpperCase()+hy.slice(1))
});
function ex(hx,hy,gt){hx=az(hx);
gt=gt==null?0:bK(gt<0?0:(+gt||0),hx.length);
return hx.lastIndexOf(hy,gt)==gt
}function bk(hD,hL,hC){var hA=gN.templateSettings;
if(hC&&eb(hD,hL,hC)){hL=hC=G
}hD=az(hD);
hL=d0(eN({},hC||hL),hA,fS);
var hy=d0(eN({},hL.imports),hA.imports,fS),hE=dV(hy),hz=fV(hy,hE);
var hH,hI,hF=0,hG=hL.interpolate||aO,hx="__p += '";
var hK=eW((hL.escape||aO).source+"|"+hG.source+"|"+(hG===Y?e:aO).source+"|"+(hL.evaluate||aO).source+"|$","g");
var gt="//# sourceURL="+("sourceURL" in hL?hL.sourceURL:("lodash.templateSources["+(++K)+"]"))+"\n";
hD.replace(hK,function(hM,hQ,hO,hN,hP,hR){hO||(hO=hN);
hx+=hD.slice(hF,hR).replace(q,aQ);
if(hQ){hH=true;
hx+="' +\n__e("+hQ+") +\n'"
}if(hP){hI=true;
hx+="';\n"+hP+";\n__p += '"
}if(hO){hx+="' +\n((__t = ("+hO+")) == null ? '' : __t) +\n'"
}hF=hR+hM.length;
return hM
});
hx+="';\n";
var hB=hL.variable;
if(!hB){hx="with (obj) {\n"+hx+"\n}\n"
}hx=(hI?hx.replace(aB,""):hx).replace(ap,"$1").replace(C,"$1;");
hx="function("+(hB||"obj")+") {\n"+(hB?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(hH?", __e = _.escape":"")+(hI?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+hx+"return __p\n}";
var hJ=dD(function(){return eZ(hE,gt+"return "+hx).apply(G,hz)
});
hJ.source=hx;
if(cX(hJ)){throw hJ
}return hJ
}function cv(gt,hy,hx){var hz=gt;
gt=az(gt);
if(!gt){return gt
}if(hx?eb(hz,hy,hx):hy==null){return gt.slice(aT(gt),w(gt)+1)
}hy=(hy+"");
return gt.slice(l(gt,hy),o(gt,hy)+1)
}function eq(gt,hy,hx){var hz=gt;
gt=az(gt);
if(!gt){return gt
}if(hx?eb(hz,hy,hx):hy==null){return gt.slice(aT(gt))
}return gt.slice(l(gt,(hy+"")))
}function b5(gt,hy,hx){var hz=gt;
gt=az(gt);
if(!gt){return gt
}if(hx?eb(hz,hy,hx):hy==null){return gt.slice(0,w(gt)+1)
}return gt.slice(0,o(gt,(hy+""))+1)
}function hf(hC,hG,hE){if(hE&&eb(hC,hG,hE)){hG=G
}var gt=t,hF=aD;
if(hG!=null){if(bw(hG)){var hA="separator" in hG?hG.separator:hA;
gt="length" in hG?(+hG.length||0):gt;
hF="omission" in hG?az(hG.omission):hF
}else{gt=+hG||0
}}hC=az(hC);
if(gt>=hC.length){return hC
}var hy=gt-hF.length;
if(hy<1){return hF
}var hH=hC.slice(0,hy);
if(hA==null){return hH+hF
}if(co(hA)){if(hC.slice(hy).search(hA)){var hz,hx,hB=hC.slice(0,hy);
if(!hA.global){hA=eW(hA.source,(aC.exec(hA)||"")+"g")
}hA.lastIndex=0;
while((hz=hA.exec(hB))){hx=hz.index
}hH=hH.slice(0,hx==null?hy:hx)
}}else{if(hC.indexOf(hA,hy)!=hy){var hD=hH.lastIndexOf(hA);
if(hD>-1){hH=hH.slice(0,hD)
}}}return hH+hF
}function dd(gt){gt=az(gt);
return(gt&&s.test(gt))?gt.replace(a0,av):gt
}function dM(gt,hy,hx){if(hx&&eb(gt,hy,hx)){hy=G
}gt=az(gt);
return gt.match(hy||ai)||[]
}var dD=bc(function(hx,gt){try{return hx.apply(G,gt)
}catch(hy){return cX(hy)?hy:new gW(hy)
}});
function c7(hy,gt,hx){if(hx&&eb(hy,gt,hx)){gt=G
}return f(hy)?bX(hy):bU(hy,gt)
}function bF(gt){return function(){return gt
}
}function cJ(gt){return gt
}function bX(gt){return bI(cI(gt,true))
}function di(hx,gt){return dp(hx,cI(gt,true))
}var dt=bc(function(hx,gt){return function(hy){return ep(hy,hx,gt)
}
});
var eO=bc(function(hx,gt){return function(hy){return ep(hx,hy,gt)
}
});
function dU(hA,gt,hH){if(hH==null){var hB=bw(gt),hD=hB?dV(gt):G,hG=(hD&&hD.length)?gD(gt,hD):G;
if(!(hG?hG.length:hB)){hG=false;
hH=gt;
gt=hA;
hA=this
}}if(!hG){hG=gD(gt,dV(gt))
}var hx=true,hC=-1,hF=c9(hA),hy=hG.length;
if(hH===false){hx=false
}else{if(bw(hH)&&"chain" in hH){hx=hH.chain
}}while(++hC<hy){var hE=hG[hC],hz=gt[hE];
hA[hE]=hz;
if(hF){hA.prototype[hE]=(function(hI){return function(){var hK=this.__chain__;
if(hx||hK){var hJ=hA(this.__wrapped__),hL=hJ.__actions__=dG(this.__actions__);
hL.push({func:hI,args:arguments,thisArg:hA});
hJ.__chain__=hK;
return hJ
}return hI.apply(hA,gF([this.value()],arguments))
}
}(hz))
}}return hA
}function gY(){aU._=d2;
return this
}function gb(){}function dN(gt){return gv(gt)?g8(gt):f6(gt)
}function g6(gt){return function(hx){return gk(gt,et(hx),hx+"")
}
}function dW(hB,hx,hA){if(hA&&eb(hB,hx,hA)){hx=hA=G
}hB=+hB||0;
hA=hA==null?1:(+hA||0);
if(hx==null){hx=hB;
hB=0
}else{hx=+hx||0
}var hy=-1,hz=dJ(ca((hx-hB)/(hA||1)),0),gt=fH(hz);
while(++hy<hz){gt[hy]=hB;
hB+=hA
}return gt
}function gR(hA,hz,hx){hA=fM(hA);
if(hA<1||!ff(hA)){return[]
}var hy=-1,gt=fH(bK(hA,cd));
hz=eM(hz,hx,1);
while(++hy<hA){if(hy<cd){gt[hy]=hz(hy)
}else{hz(hy)
}}return gt
}function db(gt){var hx=++ey;
return az(gt)+hx
}function c1(gt,hx){return(+gt||0)+(+hx||0)
}var gp=cA("ceil");
var dR=cA("floor");
var dr=a7(fo,a6);
var bm=a7(ej,eK);
var eX=cA("round");
function bl(hy,hx,gt){if(gt&&eb(hy,hx,gt)){hx=G
}hx=he(hx,gt,3);
return hx.length==1?em(bT(hy)?hy:eP(hy),hx):b6(hy,hx)
}gN.prototype=dZ.prototype;
b4.prototype=e7(dZ.prototype);
b4.prototype.constructor=b4;
fP.prototype=e7(dZ.prototype);
fP.prototype.constructor=fP;
cH.prototype["delete"]=fJ;
cH.prototype.get=fK;
cH.prototype.has=fa;
cH.prototype.set=ft;
cz.prototype.push=bL;
gM.Cache=cH;
gN.after=hg;
gN.ary=fv;
gN.assign=hv;
gN.at=hc;
gN.before=gh;
gN.bind=d6;
gN.bindAll=bO;
gN.bindKey=gA;
gN.callback=c7;
gN.chain=f7;
gN.chunk=ew;
gN.compact=dy;
gN.constant=bF;
gN.countBy=bg;
gN.create=by;
gN.curry=ci;
gN.curryRight=gy;
gN.debounce=eY;
gN.defaults=gl;
gN.defaultsDeep=eD;
gN.defer=bW;
gN.delay=fZ;
gN.difference=ge;
gN.drop=dY;
gN.dropRight=eC;
gN.dropRightWhile=bj;
gN.dropWhile=dz;
gN.fill=ce;
gN.filter=cc;
gN.flatten=ei;
gN.flattenDeep=f4;
gN.flow=cL;
gN.flowRight=go;
gN.forEach=c3;
gN.forEachRight=eE;
gN.forIn=fl;
gN.forInRight=fU;
gN.forOwn=dj;
gN.forOwnRight=cB;
gN.functions=gf;
gN.groupBy=b1;
gN.indexBy=bC;
gN.initial=fj;
gN.intersection=dc;
gN.invert=cE;
gN.invoke=a9;
gN.keys=dV;
gN.keysIn=ck;
gN.map=du;
gN.mapKeys=ez;
gN.mapValues=hs;
gN.matches=bX;
gN.matchesProperty=di;
gN.memoize=gM;
gN.merge=dK;
gN.method=dt;
gN.methodOf=eO;
gN.mixin=dU;
gN.modArgs=ct;
gN.negate=fD;
gN.omit=fq;
gN.once=fu;
gN.pairs=dw;
gN.partial=hn;
gN.partialRight=dg;
gN.partition=b8;
gN.pick=bS;
gN.pluck=fx;
gN.property=dN;
gN.propertyOf=g6;
gN.pull=fC;
gN.pullAt=dA;
gN.range=dW;
gN.rearg=g4;
gN.reject=cV;
gN.remove=el;
gN.rest=ga;
gN.restParam=bc;
gN.set=fk;
gN.shuffle=hj;
gN.slice=eF;
gN.sortBy=cK;
gN.sortByAll=c5;
gN.sortByOrder=fs;
gN.spread=fX;
gN.take=d9;
gN.takeRight=er;
gN.takeRightWhile=gs;
gN.takeWhile=ds;
gN.tap=eU;
gN.throttle=cP;
gN.thru=dB;
gN.times=gR;
gN.toArray=fN;
gN.toPlainObject=ef;
gN.transform=cb;
gN.union=cu;
gN.uniq=dF;
gN.unzip=cf;
gN.unzipWith=cZ;
gN.values=cl;
gN.valuesIn=e6;
gN.where=bi;
gN.without=ev;
gN.wrap=be;
gN.xor=a8;
gN.zip=fT;
gN.zipObject=bM;
gN.zipWith=fW;
gN.backflow=go;
gN.collect=du;
gN.compose=go;
gN.each=c3;
gN.eachRight=eE;
gN.extend=hv;
gN.iteratee=c7;
gN.methods=gf;
gN.object=bM;
gN.select=cc;
gN.tail=ga;
gN.unique=dF;
dU(gN,gN);
gN.add=c1;
gN.attempt=dD;
gN.camelCase=cm;
gN.capitalize=d8;
gN.ceil=gp;
gN.clone=fn;
gN.cloneDeep=hl;
gN.deburr=dq;
gN.endsWith=ed;
gN.escape=eJ;
gN.escapeRegExp=dI;
gN.every=eg;
gN.find=bG;
gN.findIndex=bV;
gN.findKey=gq;
gN.findLast=ch;
gN.findLastIndex=bs;
gN.findLastKey=bv;
gN.findWhere=d4;
gN.first=ba;
gN.floor=dR;
gN.get=fB;
gN.gt=fo;
gN.gte=bY;
gN.has=e2;
gN.identity=cJ;
gN.includes=cj;
gN.indexOf=eQ;
gN.inRange=fQ;
gN.isArguments=hm;
gN.isArray=bT;
gN.isBoolean=cs;
gN.isDate=gV;
gN.isElement=bp;
gN.isEmpty=f8;
gN.isEqual=hd;
gN.isError=cX;
gN.isFinite=gn;
gN.isFunction=c9;
gN.isMatch=bb;
gN.isNaN=cW;
gN.isNative=bN;
gN.isNull=fO;
gN.isNumber=bn;
gN.isObject=bw;
gN.isPlainObject=eV;
gN.isRegExp=co;
gN.isString=bD;
gN.isTypedArray=fe;
gN.isUndefined=bE;
gN.kebabCase=es;
gN.last=gE;
gN.lastIndexOf=dQ;
gN.lt=ej;
gN.lte=gJ;
gN.max=dr;
gN.min=bm;
gN.noConflict=gY;
gN.noop=gb;
gN.now=eA;
gN.pad=e1;
gN.padLeft=dx;
gN.padRight=fI;
gN.parseInt=cg;
gN.random=ho;
gN.reduce=c4;
gN.reduceRight=dE;
gN.repeat=de;
gN.result=c6;
gN.round=eX;
gN.runInContext=ay;
gN.size=fh;
gN.snakeCase=g7;
gN.some=fm;
gN.sortedIndex=eo;
gN.sortedLastIndex=gg;
gN.startCase=f1;
gN.startsWith=ex;
gN.sum=bl;
gN.template=bk;
gN.trim=cv;
gN.trimLeft=eq;
gN.trimRight=b5;
gN.trunc=hf;
gN.unescape=dd;
gN.uniqueId=db;
gN.words=dM;
gN.all=eg;
gN.any=fm;
gN.contains=cj;
gN.eq=hd;
gN.detect=bG;
gN.foldl=c4;
gN.foldr=dE;
gN.head=ba;
gN.include=cj;
gN.inject=c4;
dU(gN,(function(){var gt={};
g2(gN,function(hy,hx){if(!gN.prototype[hx]){gt[hx]=hy
}});
return gt
}()),false);
gN.sample=f3;
gN.prototype.sample=function(gt){if(!this.__chain__&&gt==null){return f3(this.value())
}return this.thru(function(hx){return f3(hx,gt)
})
};
gN.VERSION=ax;
gi(["bind","bindKey","curry","curryRight","partial","partialRight"],function(gt){gN[gt].placeholder=gN
});
gi(["drop","take"],function(gt,hx){fP.prototype[gt]=function(hA){var hz=this.__filtered__;
if(hz&&!hx){return new fP(this)
}hA=hA==null?1:dJ(fM(hA)||0,0);
var hy=this.clone();
if(hz){hy.__takeCount__=bK(hy.__takeCount__,hA)
}else{hy.__views__.push({size:hA,type:gt+(hy.__dir__<0?"Right":"")})
}return hy
};
fP.prototype[gt+"Right"]=function(hy){return this.reverse()[gt](hy).reverse()
}
});
gi(["filter","map","takeWhile"],function(hx,hy){var hz=hy+1,gt=hz!=ao;
fP.prototype[hx]=function(hC,hB){var hA=this.clone();
hA.__iteratees__.push({iteratee:he(hC,hB,1),type:hz});
hA.__filtered__=hA.__filtered__||gt;
return hA
}
});
gi(["first","last"],function(gt,hx){var hy="take"+(hx?"Right":"");
fP.prototype[gt]=function(){return this[hy](1).value()[0]
}
});
gi(["initial","rest"],function(hx,hy){var gt="drop"+(hy?"":"Right");
fP.prototype[hx]=function(){return this.__filtered__?new fP(this):this[gt](1)
}
});
gi(["pluck","where"],function(hy,hz){var gt=hz?"filter":"map",hx=hz?bI:dN;
fP.prototype[hy]=function(hA){return this[gt](hx(hA))
}
});
fP.prototype.compact=function(){return this.filter(cJ)
};
fP.prototype.reject=function(gt,hx){gt=he(gt,hx,1);
return this.filter(function(hy){return !gt(hy)
})
};
fP.prototype.slice=function(hy,hx){hy=hy==null?0:(+hy||0);
var gt=this;
if(gt.__filtered__&&(hy>0||hx<0)){return new fP(gt)
}if(hy<0){gt=gt.takeRight(-hy)
}else{if(hy){gt=gt.drop(hy)
}}if(hx!==G){hx=(+hx||0);
gt=hx<0?gt.dropRight(-hx):gt.take(hx-hy)
}return gt
};
fP.prototype.takeRightWhile=function(gt,hx){return this.reverse().takeWhile(gt,hx).reverse()
};
fP.prototype.toArray=function(){return this.take(eK)
};
g2(fP.prototype,function(hz,hx){var hA=/^(?:filter|map|reject)|While$/.test(hx),gt=/^(?:first|last)$/.test(hx),hy=gN[gt?("take"+(hx=="last"?"Right":"")):hx];
if(!hy){return
}gN.prototype[hx]=function(){var hI=gt?[1]:arguments,hE=this.__chain__,hK=this.__wrapped__,hD=!!this.__actions__.length,hJ=hK instanceof fP,hG=hI[0],hF=hJ||bT(hK);
if(hF&&hA&&typeof hG=="function"&&hG.length!=1){hJ=hF=false
}var hH=function(hM){return(gt&&hE)?hy(hM,1)[0]:hy.apply(G,gF([hM],hI))
};
var hC={func:dB,args:[hH],thisArg:G},hB=hJ&&!hD;
if(gt&&!hE){if(hB){hK=hK.clone();
hK.__actions__.push(hC);
return hz.call(hK)
}return hy.call(G,this.value())[0]
}if(!gt&&hF){hK=hB?hK:new fP(this);
var hL=hz.apply(hK,hI);
hL.__actions__.push(hC);
return new b4(hL,hE)
}return this.thru(hH)
}
});
gi(["join","pop","push","replace","shift","sort","splice","split","unshift"],function(hx){var hy=(/^(?:replace|split)$/.test(hx)?gI:cU)[hx],hz=/^(?:push|sort|unshift)$/.test(hx)?"tap":"thru",gt=/^(?:join|pop|replace|shift)$/.test(hx);
gN.prototype[hx]=function(){var hA=arguments;
if(gt&&!this.__chain__){return hy.apply(this.value(),hA)
}return this[hz](function(hB){return hy.apply(hB,hA)
})
}
});
g2(fP.prototype,function(hz,gt){var hy=gN[gt];
if(hy){var hx=hy.name,hA=cR[hx]||(cR[hx]=[]);
hA.push({name:gt,func:hy})
}});
cR[cr(G,H).name]=[{name:"wrapper",func:G}];
fP.prototype.clone=hu;
fP.prototype.reverse=gB;
fP.prototype.value=dO;
gN.prototype.chain=hi;
gN.prototype.commit=cM;
gN.prototype.concat=cT;
gN.prototype.plant=eh;
gN.prototype.reverse=ht;
gN.prototype.toString=gw;
gN.prototype.run=gN.prototype.toJSON=gN.prototype.valueOf=gN.prototype.value=cO;
gN.prototype.collect=gN.prototype.map;
gN.prototype.head=gN.prototype.first;
gN.prototype.select=gN.prototype.filter;
gN.prototype.tail=gN.prototype.rest;
return gN
}var ah=ay();
if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){aU._=ah;
define(function(){return ah
})
}else{if(D&&ad){if(a2){(ad.exports=ah)._=ah
}else{D._=ah
}}else{aU._=ah
}}}.call(this));
/*!
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
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
var document=window.document,version="2.1.4",jQuery=function(selector,context){return new jQuery.fn.init(selector,context)
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
function isArraylike(obj){var length="length" in obj&&obj.length,type=jQuery.type(obj);
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
(function(b){var a=(typeof self=="object"&&self.self==self&&self)||(typeof global=="object"&&global.global==global&&global);
if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(g,h,e){a.Backbone=b(a,e,g,h)
})
}else{if(typeof exports!=="undefined"){var c=require("underscore"),d;
try{d=require("jquery")
}catch(f){}b(a,exports,c,d)
}else{a.Backbone=b(a,{},a._,(a.jQuery||a.Zepto||a.ender||a.$))
}}}(function(w,D,P,C){var H=w.Backbone;
var n=Array.prototype.slice;
D.VERSION="1.2.3";
D.$=C;
D.noConflict=function(){w.Backbone=H;
return this
};
D.emulateHTTP=false;
D.emulateJSON=false;
var I=function(R,S,Q){switch(R){case 1:return function(){return P[S](this[Q])
};
case 2:return function(T){return P[S](this[Q],T)
};
case 3:return function(U,T){return P[S](this[Q],F(U,this),T)
};
case 4:return function(U,V,T){return P[S](this[Q],F(U,this),V,T)
};
default:return function(){var T=n.call(arguments);
T.unshift(this[Q]);
return P[S].apply(P,T)
}
}};
var s=function(R,Q,S){P.each(Q,function(T,U){if(P[U]){R.prototype[U]=I(T,U,S)
}})
};
var F=function(R,Q){if(P.isFunction(R)){return R
}if(P.isObject(R)&&!Q._isModel(R)){return q(R)
}if(P.isString(R)){return function(S){return S.get(R)
}
}return R
};
var q=function(Q){var R=P.matches(Q);
return function(S){return R(S.attributes)
}
};
var N=D.Events={};
var y=/\s+/;
var z=function(V,S,Q,W,T){var R=0,U;
if(Q&&typeof Q==="object"){if(W!==void 0&&"context" in T&&T.context===void 0){T.context=W
}for(U=P.keys(Q);
R<U.length;
R++){S=z(V,S,U[R],Q[U[R]],T)
}}else{if(Q&&y.test(Q)){for(U=Q.split(y);
R<U.length;
R++){S=V(S,U[R],W,T)
}}else{S=V(S,Q,W,T)
}}return S
};
N.on=function(Q,S,R){return h(this,Q,S,R)
};
var h=function(U,Q,V,S,R){U._events=z(B,U._events||{},Q,V,{context:S,ctx:U,listening:R});
if(R){var T=U._listeners||(U._listeners={});
T[R.id]=R
}return U
};
N.listenTo=function(U,R,W){if(!U){return this
}var V=U._listenId||(U._listenId=P.uniqueId("l"));
var T=this._listeningTo||(this._listeningTo={});
var S=T[V];
if(!S){var Q=this._listenId||(this._listenId=P.uniqueId("l"));
S=T[V]={obj:U,objId:V,id:Q,listeningTo:T,count:0}
}h(U,R,W,this,S);
return this
};
var B=function(W,T,X,S){if(X){var R=W[T]||(W[T]=[]);
var V=S.context,Q=S.ctx,U=S.listening;
if(U){U.count++
}R.push({callback:X,context:V,ctx:V||Q,listening:U})
}return W
};
N.off=function(Q,S,R){if(!this._events){return this
}this._events=z(d,this._events,Q,S,{context:R,listeners:this._listeners});
return this
};
N.stopListening=function(V,Q,W){var T=this._listeningTo;
if(!T){return this
}var U=V?[V._listenId]:P.keys(T);
for(var S=0;
S<U.length;
S++){var R=T[U[S]];
if(!R){break
}R.obj.off(Q,W,this)
}if(P.isEmpty(T)){this._listeningTo=void 0
}return this
};
var d=function(ac,R,aa,ad){if(!ac){return
}var W=0,X;
var S=ad.context,Z=ad.listeners;
if(!R&&!aa&&!S){var Q=P.keys(Z);
for(;
W<Q.length;
W++){X=Z[Q[W]];
delete Z[X.id];
delete X.listeningTo[X.objId]
}return
}var Y=R?[R]:P.keys(ac);
for(;
W<Y.length;
W++){R=Y[W];
var T=ac[R];
if(!T){break
}var U=[];
for(var V=0;
V<T.length;
V++){var ab=T[V];
if(aa&&aa!==ab.callback&&aa!==ab.callback._callback||S&&S!==ab.context){U.push(ab)
}else{X=ab.listening;
if(X&&--X.count===0){delete Z[X.id];
delete X.listeningTo[X.objId]
}}}if(U.length){ac[R]=U
}else{delete ac[R]
}}if(P.size(ac)){return ac
}};
N.once=function(Q,T,S){var R=z(G,{},Q,T,P.bind(this.off,this));
return this.on(R,void 0,S)
};
N.listenToOnce=function(S,Q,T){var R=z(G,{},Q,T,P.bind(this.stopListening,this,S));
return this.listenTo(S,R)
};
var G=function(T,Q,U,S){if(U){var R=T[Q]=P.once(function(){S(Q,R);
U.apply(this,arguments)
});
R._callback=U
}return T
};
N.trigger=function(R){if(!this._events){return this
}var T=Math.max(0,arguments.length-1);
var Q=Array(T);
for(var S=0;
S<T;
S++){Q[S]=arguments[S+1]
}z(m,this._events,R,void 0,Q);
return this
};
var m=function(R,U,Q,T){if(R){var V=R[U];
var S=R.all;
if(V&&S){S=S.slice()
}if(V){b(V,T)
}if(S){b(S,[U].concat(T))
}}return R
};
var b=function(V,T){var W,U=-1,S=V.length,R=T[0],Q=T[1],X=T[2];
switch(T.length){case 0:while(++U<S){(W=V[U]).callback.call(W.ctx)
}return;
case 1:while(++U<S){(W=V[U]).callback.call(W.ctx,R)
}return;
case 2:while(++U<S){(W=V[U]).callback.call(W.ctx,R,Q)
}return;
case 3:while(++U<S){(W=V[U]).callback.call(W.ctx,R,Q,X)
}return;
default:while(++U<S){(W=V[U]).callback.apply(W.ctx,T)
}return
}};
N.bind=N.on;
N.unbind=N.off;
P.extend(D,N);
var J=D.Model=function(Q,S){var R=Q||{};
S||(S={});
this.cid=P.uniqueId(this.cidPrefix);
this.attributes={};
if(S.collection){this.collection=S.collection
}if(S.parse){R=this.parse(R,S)||{}
}R=P.defaults({},R,P.result(this,"defaults"));
this.set(R,S);
this.changed={};
this.initialize.apply(this,arguments)
};
P.extend(J.prototype,N,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(Q){return P.clone(this.attributes)
},sync:function(){return D.sync.apply(this,arguments)
},get:function(Q){return this.attributes[Q]
},escape:function(Q){return P.escape(this.get(Q))
},has:function(Q){return this.get(Q)!=null
},matches:function(Q){return !!P.iteratee(Q,this)(this.attributes)
},set:function(Y,Q,ac){if(Y==null){return this
}var Z;
if(typeof Y==="object"){Z=Y;
ac=Q
}else{(Z={})[Y]=Q
}ac||(ac={});
if(!this._validate(Z,ac)){return false
}var aa=ac.unset;
var W=ac.silent;
var X=[];
var ab=this._changing;
this._changing=true;
if(!ab){this._previousAttributes=P.clone(this.attributes);
this.changed={}
}var V=this.attributes;
var T=this.changed;
var R=this._previousAttributes;
for(var U in Z){Q=Z[U];
if(!P.isEqual(V[U],Q)){X.push(U)
}if(!P.isEqual(R[U],Q)){T[U]=Q
}else{delete T[U]
}aa?delete V[U]:V[U]=Q
}this.id=this.get(this.idAttribute);
if(!W){if(X.length){this._pending=ac
}for(var S=0;
S<X.length;
S++){this.trigger("change:"+X[S],this,V[X[S]],ac)
}}if(ab){return this
}if(!W){while(this._pending){ac=this._pending;
this._pending=false;
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
}var R=this._changing?this._previousAttributes:this.attributes;
var U={};
for(var Q in S){var T=S[Q];
if(P.isEqual(R[Q],T)){continue
}U[Q]=T
}return P.size(U)?U:false
},previous:function(Q){if(Q==null||!this._previousAttributes){return null
}return this._previousAttributes[Q]
},previousAttributes:function(){return P.clone(this._previousAttributes)
},fetch:function(R){R=P.extend({parse:true},R);
var Q=this;
var S=R.success;
R.success=function(U){var T=R.parse?Q.parse(U,R):U;
if(!Q.set(T,R)){return false
}if(S){S.call(R.context,Q,U,R)
}Q.trigger("sync",Q,U,R)
};
M(this,R);
return this.sync("read",this,R)
},save:function(V,R,Z){var W;
if(V==null||typeof V==="object"){W=V;
Z=R
}else{(W={})[V]=R
}Z=P.extend({validate:true,parse:true},Z);
var T=Z.wait;
if(W&&!T){if(!this.set(W,Z)){return false
}}else{if(!this._validate(W,Z)){return false
}}var U=this;
var X=Z.success;
var S=this.attributes;
Z.success=function(ab){U.attributes=S;
var aa=Z.parse?U.parse(ab,Z):ab;
if(T){aa=P.extend({},W,aa)
}if(aa&&!U.set(aa,Z)){return false
}if(X){X.call(Z.context,U,ab,Z)
}U.trigger("sync",U,ab,Z)
};
M(this,Z);
if(W&&T){this.attributes=P.extend({},S,W)
}var Q=this.isNew()?"create":(Z.patch?"patch":"update");
if(Q==="patch"&&!Z.attrs){Z.attrs=W
}var Y=this.sync(Q,this,Z);
this.attributes=S;
return Y
},destroy:function(R){R=R?P.clone(R):{};
var Q=this;
var V=R.success;
var T=R.wait;
var S=function(){Q.stopListening();
Q.trigger("destroy",Q,Q.collection,R)
};
R.success=function(W){if(T){S()
}if(V){V.call(R.context,Q,W,R)
}if(!Q.isNew()){Q.trigger("sync",Q,W,R)
}};
var U=false;
if(this.isNew()){P.defer(R.success)
}else{M(this,R);
U=this.sync("delete",this,R)
}if(!T){S()
}return U
},url:function(){var Q=P.result(this,"urlRoot")||P.result(this.collection,"url")||t();
if(this.isNew()){return Q
}var R=this.get(this.idAttribute);
return Q.replace(/[^\/]$/,"$&/")+encodeURIComponent(R)
},parse:function(R,Q){return R
},clone:function(){return new this.constructor(this.attributes)
},isNew:function(){return !this.has(this.idAttribute)
},isValid:function(Q){return this._validate({},P.defaults({validate:true},Q))
},_validate:function(S,R){if(!R.validate||!this.validate){return true
}S=P.extend({},this.attributes,S);
var Q=this.validationError=this.validate(S,R)||null;
if(!Q){return true
}this.trigger("invalid",this,Q,P.extend(R,{validationError:Q}));
return false
}});
var a={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};
s(J,a,"attributes");
var c=D.Collection=function(R,Q){Q||(Q={});
if(Q.model){this.model=Q.model
}if(Q.comparator!==void 0){this.comparator=Q.comparator
}this._reset();
this.initialize.apply(this,arguments);
if(R){this.reset(R,P.extend({silent:true},Q))
}};
var o={add:true,remove:true,merge:true};
var O={add:true,remove:false};
var v=function(V,U,Q){Q=Math.min(Math.max(Q,0),V.length);
var R=Array(V.length-Q);
var T=U.length;
for(var S=0;
S<R.length;
S++){R[S]=V[S+Q]
}for(S=0;
S<T;
S++){V[S+Q]=U[S]
}for(S=0;
S<R.length;
S++){V[S+T+Q]=R[S]
}};
P.extend(c.prototype,N,{model:J,initialize:function(){},toJSON:function(Q){return this.map(function(R){return R.toJSON(Q)
})
},sync:function(){return D.sync.apply(this,arguments)
},add:function(R,Q){return this.set(R,P.extend({merge:false},Q,O))
},remove:function(T,Q){Q=P.extend({},Q);
var R=!P.isArray(T);
T=R?[T]:P.clone(T);
var S=this._removeModels(T,Q);
if(!Q.silent&&S){this.trigger("update",this,Q)
}return R?S[0]:S
},set:function(ah,R){if(ah==null){return
}R=P.defaults({},R,o);
if(R.parse&&!this._isModel(ah)){ah=this.parse(ah,R)
}var U=!P.isArray(ah);
ah=U?[ah]:ah.slice();
var W=R.at;
if(W!=null){W=+W
}if(W<0){W+=this.length+1
}var V=[];
var ai=[];
var ab=[];
var Z={};
var X=R.add;
var T=R.merge;
var aj=R.remove;
var af=false;
var Q=this.comparator&&(W==null)&&R.sort!==false;
var ae=P.isString(this.comparator)?this.comparator:null;
var S;
for(var ad=0;
ad<ah.length;
ad++){S=ah[ad];
var Y=this.get(S);
if(Y){if(T&&S!==Y){var aa=this._isModel(S)?S.attributes:S;
if(R.parse){aa=Y.parse(aa,R)
}Y.set(aa,R);
if(Q&&!af){af=Y.hasChanged(ae)
}}if(!Z[Y.cid]){Z[Y.cid]=true;
V.push(Y)
}ah[ad]=Y
}else{if(X){S=ah[ad]=this._prepareModel(S,R);
if(S){ai.push(S);
this._addReference(S,R);
Z[S.cid]=true;
V.push(S)
}}}}if(aj){for(ad=0;
ad<this.length;
ad++){S=this.models[ad];
if(!Z[S.cid]){ab.push(S)
}}if(ab.length){this._removeModels(ab,R)
}}var ac=false;
var ag=!Q&&X&&aj;
if(V.length&&ag){ac=this.length!=V.length||P.some(this.models,function(al,ak){return al!==V[ak]
});
this.models.length=0;
v(this.models,V,0);
this.length=this.models.length
}else{if(ai.length){if(Q){af=true
}v(this.models,ai,W==null?this.length:W);
this.length=this.models.length
}}if(af){this.sort({silent:true})
}if(!R.silent){for(ad=0;
ad<ai.length;
ad++){if(W!=null){R.index=W+ad
}S=ai[ad];
S.trigger("add",S,this,R)
}if(af||ac){this.trigger("sort",this,R)
}if(ai.length||ab.length){this.trigger("update",this,R)
}}return U?ah[0]:ah
},reset:function(S,Q){Q=Q?P.clone(Q):{};
for(var R=0;
R<this.models.length;
R++){this._removeReference(this.models[R],Q)
}Q.previousModels=this.models;
this._reset();
S=this.add(S,P.extend({silent:true},Q));
if(!Q.silent){this.trigger("reset",this,Q)
}return S
},push:function(R,Q){return this.add(R,P.extend({at:this.length},Q))
},pop:function(R){var Q=this.at(this.length-1);
return this.remove(Q,R)
},unshift:function(R,Q){return this.add(R,P.extend({at:0},Q))
},shift:function(R){var Q=this.at(0);
return this.remove(Q,R)
},slice:function(){return n.apply(this.models,arguments)
},get:function(Q){if(Q==null){return void 0
}var R=this.modelId(this._isModel(Q)?Q.attributes:Q);
return this._byId[Q]||this._byId[R]||this._byId[Q.cid]
},at:function(Q){if(Q<0){Q+=this.length
}return this.models[Q]
},where:function(Q,R){return this[R?"find":"filter"](Q)
},findWhere:function(Q){return this.where(Q,true)
},sort:function(R){var Q=this.comparator;
if(!Q){throw new Error("Cannot sort a set without a comparator")
}R||(R={});
var S=Q.length;
if(P.isFunction(Q)){Q=P.bind(Q,this)
}if(S===1||P.isString(Q)){this.models=this.sortBy(Q)
}else{this.models.sort(Q)
}if(!R.silent){this.trigger("sort",this,R)
}return this
},pluck:function(Q){return P.invoke(this.models,"get",Q)
},fetch:function(Q){Q=P.extend({parse:true},Q);
var S=Q.success;
var R=this;
Q.success=function(T){var U=Q.reset?"reset":"set";
R[U](T,Q);
if(S){S.call(Q.context,R,T,Q)
}R.trigger("sync",R,T,Q)
};
M(this,Q);
return this.sync("read",this,Q)
},create:function(R,Q){Q=Q?P.clone(Q):{};
var S=Q.wait;
R=this._prepareModel(R,Q);
if(!R){return false
}if(!S){this.add(R,Q)
}var U=this;
var T=Q.success;
Q.success=function(W,X,V){if(S){U.add(W,V)
}if(T){T.call(V.context,W,X,V)
}};
R.save(null,Q);
return R
},parse:function(R,Q){return R
},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})
},modelId:function(Q){return Q[this.model.prototype.idAttribute||"id"]
},_reset:function(){this.length=0;
this.models=[];
this._byId={}
},_prepareModel:function(S,R){if(this._isModel(S)){if(!S.collection){S.collection=this
}return S
}R=R?P.clone(R):{};
R.collection=this;
var Q=new this.model(S,R);
if(!Q.validationError){return Q
}this.trigger("invalid",this,Q.validationError,R);
return false
},_removeModels:function(V,S){var U=[];
for(var T=0;
T<V.length;
T++){var R=this.get(V[T]);
if(!R){continue
}var Q=this.indexOf(R);
this.models.splice(Q,1);
this.length--;
if(!S.silent){S.index=Q;
R.trigger("remove",R,this,S)
}U.push(R);
this._removeReference(R,S)
}return U.length?U:false
},_isModel:function(Q){return Q instanceof J
},_addReference:function(R,Q){this._byId[R.cid]=R;
var S=this.modelId(R.attributes);
if(S!=null){this._byId[S]=R
}R.on("all",this._onModelEvent,this)
},_removeReference:function(R,Q){delete this._byId[R.cid];
var S=this.modelId(R.attributes);
if(S!=null){delete this._byId[S]
}if(this===R.collection){delete R.collection
}R.off("all",this._onModelEvent,this)
},_onModelEvent:function(S,R,U,Q){if((S==="add"||S==="remove")&&U!==this){return
}if(S==="destroy"){this.remove(R,Q)
}if(S==="change"){var T=this.modelId(R.previousAttributes());
var V=this.modelId(R.attributes);
if(T!==V){if(T!=null){delete this._byId[T]
}if(V!=null){this._byId[V]=R
}}}this.trigger.apply(this,arguments)
}});
var A={forEach:3,each:3,map:3,collect:3,reduce:4,foldl:4,inject:4,reduceRight:4,foldr:4,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3};
s(c,A,"models");
var L=D.View=function(Q){this.cid=P.uniqueId("view");
P.extend(this,P.pick(Q,f));
this._ensureElement();
this.initialize.apply(this,arguments)
};
var x=/^(\S+)\s*(.*)$/;
var f=["model","collection","el","id","attributes","className","tagName","events"];
P.extend(L.prototype,N,{tagName:"div",$:function(Q){return this.$el.find(Q)
},initialize:function(){},render:function(){return this
},remove:function(){this._removeElement();
this.stopListening();
return this
},_removeElement:function(){this.$el.remove()
},setElement:function(Q){this.undelegateEvents();
this._setElement(Q);
this.delegateEvents();
return this
},_setElement:function(Q){this.$el=Q instanceof D.$?Q:D.$(Q);
this.el=this.$el[0]
},delegateEvents:function(S){S||(S=P.result(this,"events"));
if(!S){return this
}this.undelegateEvents();
for(var R in S){var T=S[R];
if(!P.isFunction(T)){T=this[T]
}if(!T){continue
}var Q=R.match(x);
this.delegate(Q[1],Q[2],P.bind(T,this))
}return this
},delegate:function(R,Q,S){this.$el.on(R+".delegateEvents"+this.cid,Q,S);
return this
},undelegateEvents:function(){if(this.$el){this.$el.off(".delegateEvents"+this.cid)
}return this
},undelegate:function(R,Q,S){this.$el.off(R+".delegateEvents"+this.cid,Q,S);
return this
},_createElement:function(Q){return document.createElement(Q)
},_ensureElement:function(){if(!this.el){var Q=P.extend({},P.result(this,"attributes"));
if(this.id){Q.id=P.result(this,"id")
}if(this.className){Q["class"]=P.result(this,"className")
}this.setElement(this._createElement(P.result(this,"tagName")));
this._setAttributes(Q)
}else{this.setElement(P.result(this,"el"))
}},_setAttributes:function(Q){this.$el.attr(Q)
}});
D.sync=function(X,S,R){var U=k[X];
P.defaults(R||(R={}),{emulateHTTP:D.emulateHTTP,emulateJSON:D.emulateJSON});
var W={type:U,dataType:"json"};
if(!R.url){W.url=P.result(S,"url")||t()
}if(R.data==null&&S&&(X==="create"||X==="update"||X==="patch")){W.contentType="application/json";
W.data=JSON.stringify(R.attrs||S.toJSON(R))
}if(R.emulateJSON){W.contentType="application/x-www-form-urlencoded";
W.data=W.data?{model:W.data}:{}
}if(R.emulateHTTP&&(U==="PUT"||U==="DELETE"||U==="PATCH")){W.type="POST";
if(R.emulateJSON){W.data._method=U
}var T=R.beforeSend;
R.beforeSend=function(Y){Y.setRequestHeader("X-HTTP-Method-Override",U);
if(T){return T.apply(this,arguments)
}}
}if(W.type!=="GET"&&!R.emulateJSON){W.processData=false
}var Q=R.error;
R.error=function(Z,aa,Y){R.textStatus=aa;
R.errorThrown=Y;
if(Q){Q.call(R.context,Z,aa,Y)
}};
var V=R.xhr=D.ajax(P.extend(W,R));
S.trigger("request",S,V,R);
return V
};
var k={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};
D.ajax=function(){return D.$.ajax.apply(D.$,arguments)
};
var p=D.Router=function(Q){Q||(Q={});
if(Q.routes){this.routes=Q.routes
}this._bindRoutes();
this.initialize.apply(this,arguments)
};
var r=/\((.*?)\)/g;
var u=/(\(\?)?:\w+/g;
var e=/\*\w+/g;
var i=/[\-{}\[\]+?.,\\\^$|#\s]/g;
P.extend(p.prototype,N,{initialize:function(){},route:function(R,S,T){if(!P.isRegExp(R)){R=this._routeToRegExp(R)
}if(P.isFunction(S)){T=S;
S=""
}if(!T){T=this[S]
}var Q=this;
D.history.route(R,function(V){var U=Q._extractParameters(R,V);
if(Q.execute(T,U,S)!==false){Q.trigger.apply(Q,["route:"+S].concat(U));
Q.trigger("route",S,U);
D.history.trigger("route",Q,S,U)
}});
return this
},execute:function(S,R,Q){if(S){S.apply(this,R)
}},navigate:function(R,Q){D.history.navigate(R,Q);
return this
},_bindRoutes:function(){if(!this.routes){return
}this.routes=P.result(this,"routes");
var R,Q=P.keys(this.routes);
while((R=Q.pop())!=null){this.route(R,this.routes[R])
}},_routeToRegExp:function(Q){Q=Q.replace(i,"\\$&").replace(r,"(?:$1)?").replace(u,function(S,R){return R?S:"([^/?]+)"
}).replace(e,"([^?]*?)");
return new RegExp("^"+Q+"(?:\\?([\\s\\S]*))?$")
},_extractParameters:function(Q,R){var S=Q.exec(R).slice(1);
return P.map(S,function(U,T){if(T===S.length-1){return U||null
}return U?decodeURIComponent(U):null
})
}});
var j=D.History=function(){this.handlers=[];
this.checkUrl=P.bind(this.checkUrl,this);
if(typeof window!=="undefined"){this.location=window.location;
this.history=window.history
}};
var E=/^[#\/]|\s+$/g;
var g=/^\/+|\/+$/g;
var K=/#.*$/;
j.started=false;
P.extend(j.prototype,N,{interval:50,atRoot:function(){var Q=this.location.pathname.replace(/[^\/]$/,"$&/");
return Q===this.root&&!this.getSearch()
},matchRoot:function(){var R=this.decodeFragment(this.location.pathname);
var Q=R.slice(0,this.root.length-1)+"/";
return Q===this.root
},decodeFragment:function(Q){return decodeURI(Q.replace(/%25/g,"%2525"))
},getSearch:function(){var Q=this.location.href.replace(/#.*/,"").match(/\?.+/);
return Q?Q[0]:""
},getHash:function(R){var Q=(R||this).location.href.match(/#(.*)$/);
return Q?Q[1]:""
},getPath:function(){var Q=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);
return Q.charAt(0)==="/"?Q.slice(1):Q
},getFragment:function(Q){if(Q==null){if(this._usePushState||!this._wantsHashChange){Q=this.getPath()
}else{Q=this.getHash()
}}return Q.replace(E,"")
},start:function(S){if(j.started){throw new Error("Backbone.history has already been started")
}j.started=true;
this.options=P.extend({root:"/"},this.options,S);
this.root=this.options.root;
this._wantsHashChange=this.options.hashChange!==false;
this._hasHashChange="onhashchange" in window&&(document.documentMode===void 0||document.documentMode>7);
this._useHashChange=this._wantsHashChange&&this._hasHashChange;
this._wantsPushState=!!this.options.pushState;
this._hasPushState=!!(this.history&&this.history.pushState);
this._usePushState=this._wantsPushState&&this._hasPushState;
this.fragment=this.getFragment();
this.root=("/"+this.root+"/").replace(g,"/");
if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var R=this.root.slice(0,-1)||"/";
this.location.replace(R+"#"+this.getPath());
return true
}else{if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})
}}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");
this.iframe.src="javascript:0";
this.iframe.style.display="none";
this.iframe.tabIndex=-1;
var Q=document.body;
var T=Q.insertBefore(this.iframe,Q.firstChild).contentWindow;
T.document.open();
T.document.close();
T.location.hash="#"+this.fragment
}var U=window.addEventListener||function(V,W){return attachEvent("on"+V,W)
};
if(this._usePushState){U("popstate",this.checkUrl,false)
}else{if(this._useHashChange&&!this.iframe){U("hashchange",this.checkUrl,false)
}else{if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)
}}}if(!this.options.silent){return this.loadUrl()
}},stop:function(){var Q=window.removeEventListener||function(R,S){return detachEvent("on"+R,S)
};
if(this._usePushState){Q("popstate",this.checkUrl,false)
}else{if(this._useHashChange&&!this.iframe){Q("hashchange",this.checkUrl,false)
}}if(this.iframe){document.body.removeChild(this.iframe);
this.iframe=null
}if(this._checkUrlInterval){clearInterval(this._checkUrlInterval)
}j.started=false
},route:function(Q,R){this.handlers.unshift({route:Q,callback:R})
},checkUrl:function(R){var Q=this.getFragment();
if(Q===this.fragment&&this.iframe){Q=this.getHash(this.iframe.contentWindow)
}if(Q===this.fragment){return false
}if(this.iframe){this.navigate(Q)
}this.loadUrl()
},loadUrl:function(Q){if(!this.matchRoot()){return false
}Q=this.fragment=this.getFragment(Q);
return P.some(this.handlers,function(R){if(R.route.test(Q)){R.callback(Q);
return true
}})
},navigate:function(T,S){if(!j.started){return false
}if(!S||S===true){S={trigger:!!S}
}T=this.getFragment(T||"");
var Q=this.root;
if(T===""||T.charAt(0)==="?"){Q=Q.slice(0,-1)||"/"
}var R=Q+T;
T=this.decodeFragment(T.replace(K,""));
if(this.fragment===T){return
}this.fragment=T;
if(this._usePushState){this.history[S.replace?"replaceState":"pushState"]({},document.title,R)
}else{if(this._wantsHashChange){this._updateHash(this.location,T,S.replace);
if(this.iframe&&(T!==this.getHash(this.iframe.contentWindow))){var U=this.iframe.contentWindow;
if(!S.replace){U.document.open();
U.document.close()
}this._updateHash(U.location,T,S.replace)
}}else{return this.location.assign(R)
}}if(S.trigger){return this.loadUrl(T)
}},_updateHash:function(Q,S,T){if(T){var R=Q.href.replace(/(javascript:|#).*$/,"");
Q.replace(R+"#"+S)
}else{Q.hash="#"+S
}}});
D.history=new j;
var l=function(Q,S){var R=this;
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
J.extend=c.extend=p.extend=L.extend=j.extend=l;
var t=function(){throw new Error('A "url" property or function must be specified')
};
var M=function(S,R){var Q=R.error;
R.error=function(T){if(Q){Q.call(R.context,S,T,R)
}S.trigger("error",S,T,R)
}
};
return D
}));
(function(){var a;
a=Backbone.View.prototype.remove;
_.extend(Backbone.View.prototype,{initialize:function(b){return this.options=_.extend(this.options||{},b)
},__render:function(b){var c;
c=_.extend({},b);
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
b=void 0;
if(this.__subview){while(b=this.__subview.shift()){b.remove()
}}return this
},remove:function(){this.__cleanup();
return a.call(this)
}})
}).call(this);
(function(b){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=b()
}else{if(typeof define==="function"&&define.amd){define([],b)
}else{var a;
if(typeof window!=="undefined"){a=window
}else{if(typeof global!=="undefined"){a=global
}else{if(typeof self!=="undefined"){a=self
}else{a=this
}}}a.PIXI=b()
}}})(function(){var d,b,a;
return(function c(f,k,h){function g(q,n){if(!k[q]){if(!f[q]){var m=typeof require=="function"&&require;
if(!n&&m){return m(q,!0)
}if(e){return e(q,!0)
}var p=new Error("Cannot find module '"+q+"'");
throw p.code="MODULE_NOT_FOUND",p
}var i=k[q]={exports:{}};
f[q][0].call(i.exports,function(l){var o=f[q][1][l];
return g(o?o:l)
},i,i.exports,c,f,k,h)
}return k[q].exports
}var e=typeof require=="function"&&require;
for(var j=0;
j<h.length;
j++){g(h[j])
}return g
})({1:[function(f,g,e){(function(i,h){
/*!
 * async
 * https://github.com/caolan/async
 *
 * Copyright 2010-2014 Caolan McMahon
 * Released under the MIT license
 */
(function(){var K={};
function V(){}function O(aa){return aa
}function t(aa){return !!aa
}function m(aa){return !aa
}var S;
var z=typeof self==="object"&&self.self===self&&self||typeof h==="object"&&h.global===h&&h||this;
if(z!=null){S=z.async
}K.noConflict=function(){z.async=S;
return K
};
function k(aa){return function(){if(aa===null){throw new Error("Callback was already called.")
}aa.apply(this,arguments);
aa=null
}
}function w(aa){return function(){if(aa===null){return
}aa.apply(this,arguments);
aa=null
}
}var E=Object.prototype.toString;
var W=Array.isArray||function(aa){return E.call(aa)==="[object Array]"
};
var p=function(ab){var aa=typeof ab;
return aa==="function"||aa==="object"&&!!ab
};
function P(aa){return W(aa)||(typeof aa.length==="number"&&aa.length>=0&&aa.length%1===0)
}function R(aa,ab){return P(aa)?U(aa,ab):X(aa,ab)
}function U(aa,ac){var ab=-1,ad=aa.length;
while(++ab<ad){ac(aa[ab],ab,aa)
}}function B(ab,ad){var ac=-1,ae=ab.length,aa=Array(ae);
while(++ac<ae){aa[ac]=ad(ab[ac],ac,ab)
}return aa
}function q(aa){return B(Array(aa),function(ab,ac){return ac
})
}function C(aa,ac,ab){U(aa,function(ad,af,ae){ab=ac(ab,ad,af,ae)
});
return ab
}function X(aa,ab){U(A(aa),function(ac){ab(aa[ac],ac)
})
}function Q(aa,ac){for(var ab=0;
ab<aa.length;
ab++){if(aa[ab]===ac){return ab
}}return -1
}var A=Object.keys||function(ac){var ab=[];
for(var aa in ac){if(ac.hasOwnProperty(aa)){ab.push(aa)
}}return ab
};
function s(ac){var ab=-1;
var aa;
var ae;
if(P(ac)){aa=ac.length;
return function ad(){ab++;
return ab<aa?ab:null
}
}else{ae=A(ac);
aa=ae.length;
return function ad(){ab++;
return ab<aa?ae[ab]:null
}
}}function r(aa,ab){ab=ab==null?aa.length-1:+ab;
return function(){var ae=Math.max(arguments.length-ab,0);
var ad=Array(ae);
for(var ac=0;
ac<ae;
ac++){ad[ac]=arguments[ac+ab]
}switch(ab){case 0:return aa.call(this,ad);
case 1:return aa.call(this,arguments[0],ad)
}}
}function n(aa){return function(ac,ab,ad){return aa(ac,ad)
}
}var u=typeof setImmediate==="function"&&setImmediate;
var I=u?function(aa){u(aa)
}:function(aa){setTimeout(aa,0)
};
if(typeof i==="object"&&typeof i.nextTick==="function"){K.nextTick=i.nextTick
}else{K.nextTick=I
}K.setImmediate=u?I:K.nextTick;
K.forEach=K.each=function(aa,ab,ac){return K.eachOf(aa,n(ab),ac)
};
K.forEachSeries=K.eachSeries=function(aa,ab,ac){return K.eachOfSeries(aa,n(ab),ac)
};
K.forEachLimit=K.eachLimit=function(aa,ab,ac,ad){return N(ab)(aa,n(ac),ad)
};
K.forEachOf=K.eachOf=function(ab,ae,af){af=w(af||V);
ab=ab||[];
var ac=P(ab)?ab.length:A(ab).length;
var ad=0;
if(!ac){return af(null)
}R(ab,function(ah,ag){ae(ab[ag],ag,k(aa))
});
function aa(ag){if(ag){af(ag)
}else{ad+=1;
if(ad>=ac){af(null)
}}}};
K.forEachOfSeries=K.eachOfSeries=function(ae,ad,af){af=w(af||V);
ae=ae||[];
var aa=s(ae);
var ac=aa();
function ab(){var ag=true;
if(ac===null){return af(null)
}ad(ae[ac],ac,k(function(ah){if(ah){af(ah)
}else{ac=aa();
if(ac===null){return af(null)
}else{if(ag){K.nextTick(ab)
}else{ab()
}}}}));
ag=false
}ab()
};
K.forEachOfLimit=K.eachOfLimit=function(ac,aa,ab,ad){N(aa)(ac,ab,ad)
};
function N(aa){return function(ag,af,ai){ai=w(ai||V);
ag=ag||[];
var ab=s(ag);
if(aa<=0){return ai(null)
}var ac=false;
var ad=0;
var ae=false;
(function ah(){if(ac&&ad<=0){return ai(null)
}while(ad<aa&&!ae){var aj=ab();
if(aj===null){ac=true;
if(ad<=0){ai(null)
}return
}ad+=1;
af(ag[aj],aj,k(function(ak){ad-=1;
if(ak){ai(ak);
ae=true
}else{ah()
}}))
}})()
}
}function G(aa){return function(ac,ab,ad){return aa(K.eachOf,ac,ab,ad)
}
}function j(aa){return function(ad,ab,ac,ae){return aa(N(ab),ad,ac,ae)
}
}function M(aa){return function(ac,ab,ad){return aa(K.eachOfSeries,ac,ab,ad)
}
}function D(ad,aa,ac,ae){ae=w(ae||V);
var ab=[];
ad(aa,function(ag,af,ah){ac(ag,function(aj,ai){ab[af]=ai;
ah(aj)
})
},function(af){ae(af,ab)
})
}K.map=G(D);
K.mapSeries=M(D);
K.mapLimit=j(D);
K.inject=K.foldl=K.reduce=function(aa,ab,ac,ad){K.eachOfSeries(aa,function(ae,af,ag){ac(ab,ae,function(ai,ah){ab=ah;
ag(ai)
})
},function(ae){ad(ae||null,ab)
})
};
K.foldr=K.reduceRight=function(aa,ab,ac,ae){var ad=B(aa,O).reverse();
K.reduce(ad,ab,ac,ae)
};
function T(ad,aa,ac,ae){var ab=[];
ad(aa,function(af,ag,ah){ac(af,function(ai){if(ai){ab.push({index:ag,value:af})
}ah()
})
},function(){ae(B(ab.sort(function(ag,af){return ag.index-af.index
}),function(af){return af.value
}))
})
}K.select=K.filter=G(T);
K.selectLimit=K.filterLimit=j(T);
K.selectSeries=K.filterSeries=M(T);
function J(ac,aa,ab,ad){T(ac,aa,function(af,ae){ab(af,function(ag){ae(!ag)
})
},ad)
}K.reject=G(J);
K.rejectLimit=j(J);
K.rejectSeries=M(J);
function H(ab,aa,ac){return function(ae,ag,ah,ad){function af(){if(ad){ad(ac(false,void 0))
}}function ai(aj,ak,al){if(!ad){return al()
}ah(aj,function(am){if(ad&&aa(am)){ad(ac(true,aj));
ad=ah=false
}al()
})
}if(arguments.length>3){ab(ae,ag,ai,af)
}else{ad=ah;
ah=ag;
ab(ae,ai,af)
}}
}K.any=K.some=H(K.eachOf,t,O);
K.someLimit=H(K.eachOfLimit,t,O);
K.all=K.every=H(K.eachOf,m,m);
K.everyLimit=H(K.eachOfLimit,m,m);
function x(ab,aa){return aa
}K.detect=H(K.eachOf,O,x);
K.detectSeries=H(K.eachOfSeries,O,x);
K.detectLimit=H(K.eachOfLimit,O,x);
K.sortBy=function(aa,ac,ad){K.map(aa,function(ae,af){ac(ae,function(ag,ah){if(ag){af(ag)
}else{af(null,{value:ae,criteria:ah})
}})
},function(af,ae){if(af){return ad(af)
}else{ad(null,B(ae.sort(ab),function(ag){return ag.value
}))
}});
function ab(ah,ag){var af=ah.criteria,ae=ag.criteria;
return af<ae?-1:af>ae?1:0
}};
K.auto=function(ac,ah){ah=w(ah||V);
var ai=A(ac);
var ab=ai.length;
if(!ab){return ah(null)
}var ae={};
var ag=[];
function aa(aj){ag.unshift(aj)
}function ad(ak){var aj=Q(ag,ak);
if(aj>=0){ag.splice(aj,1)
}}function af(){ab--;
U(ag.slice(0),function(aj){aj()
})
}aa(function(){if(!ab){ah(null,ae)
}});
U(ai,function(al){var ak=W(ac[al])?ac[al]:[ac[al]];
var aq=r(function(au,ar){if(ar.length<=1){ar=ar[0]
}if(au){var at={};
X(ae,function(aw,av){at[av]=aw
});
at[al]=ar;
ah(au,at)
}else{ae[al]=ar;
K.setImmediate(af)
}});
var an=ak.slice(0,ak.length-1);
var aj=an.length;
var ap;
while(aj--){if(!(ap=ac[an[aj]])){throw new Error("Has inexistant dependency")
}if(W(ap)&&Q(ap,al)>=0){throw new Error("Has cyclic dependencies")
}}function am(){return C(an,function(at,ar){return(at&&ae.hasOwnProperty(ar))
},true)&&!ae.hasOwnProperty(al)
}if(am()){ak[ak.length-1](aq,ae)
}else{aa(ao)
}function ao(){if(am()){ad(ao);
ak[ak.length-1](aq,ae)
}}})
};
K.retry=function(ab,ae,ah){var ad=5;
var ag=0;
var ai=[];
var aa={times:ad,interval:ag};
function af(al,ak){if(typeof ak==="number"){al.times=parseInt(ak,10)||ad
}else{if(typeof ak==="object"){al.times=parseInt(ak.times,10)||ad;
al.interval=parseInt(ak.interval,10)||ag
}else{throw new Error("Unsupported argument type for 'times': "+typeof ak)
}}}var ac=arguments.length;
if(ac<1||ac>3){throw new Error("Invalid arguments - must be either (task), (task, callback), (times, task) or (times, task, callback)")
}else{if(ac<=2&&typeof ab==="function"){ah=ae;
ae=ab
}}if(typeof ab!=="function"){af(aa,ab)
}aa.callback=ah;
aa.task=ae;
function aj(ao,al){function an(ap,aq){return function(ar){ap(function(au,at){ar(!au||aq,{err:au,result:at})
},al)
}
}function am(ap){return function(aq){setTimeout(function(){aq(null)
},ap)
}
}while(aa.times){var ak=!(aa.times-=1);
ai.push(an(aa.task,ak));
if(!ak&&aa.interval>0){ai.push(am(aa.interval))
}}K.series(ai,function(ap,aq){aq=aq[aq.length-1];
(ao||aa.callback)(aq.err,aq.result)
})
}return aa.callback?aj():aj
};
K.waterfall=function(ad,ac){ac=w(ac||V);
if(!W(ad)){var aa=new Error("First argument to waterfall must be an array of functions");
return ac(aa)
}if(!ad.length){return ac()
}function ab(ae){return r(function(ah,af){if(ah){ac.apply(null,[ah].concat(af))
}else{var ag=ae.next();
if(ag){af.push(ab(ag))
}else{af.push(ac)
}Z(ae).apply(null,af)
}})
}ab(K.iterator(ad))()
};
function y(ab,ad,ac){ac=ac||V;
var aa=P(ad)?[]:{};
ab(ad,function(ae,af,ag){ae(r(function(ai,ah){if(ah.length<=1){ah=ah[0]
}aa[af]=ah;
ag(ai)
}))
},function(ae){ac(ae,aa)
})
}K.parallel=function(ab,aa){y(K.eachOf,ab,aa)
};
K.parallelLimit=function(ac,aa,ab){y(N(aa),ac,ab)
};
K.series=function(ab,aa){y(K.eachOfSeries,ab,aa)
};
K.iterator=function(ab){function aa(ac){function ad(){if(ab.length){ab[ac].apply(null,arguments)
}return ad.next()
}ad.next=function(){return(ac<ab.length-1)?aa(ac+1):null
};
return ad
}return aa(0)
};
K.apply=r(function(ab,aa){return r(function(ac){return ab.apply(null,aa.concat(ac))
})
});
function L(ad,ab,ac,ae){var aa=[];
ad(ab,function(ag,ah,af){ac(ag,function(ai,aj){aa=aa.concat(aj||[]);
af(ai)
})
},function(af){ae(af,aa)
})
}K.concat=G(L);
K.concatSeries=M(L);
K.whilst=function(ad,ab,ac){ac=ac||V;
if(ad()){var aa=r(function(af,ae){if(af){ac(af)
}else{if(ad.apply(this,ae)){ab(aa)
}else{ac(null)
}}});
ab(aa)
}else{ac(null)
}};
K.doWhilst=function(ab,ad,ac){var aa=0;
return K.whilst(function(){return ++aa<=1||ad.apply(this,arguments)
},ab,ac)
};
K.until=function(ac,aa,ab){return K.whilst(function(){return !ac.apply(this,arguments)
},aa,ab)
};
K.doUntil=function(aa,ac,ab){return K.doWhilst(aa,function(){return !ac.apply(this,arguments)
},ab)
};
K.during=function(ae,ac,ad){ad=ad||V;
var ab=r(function(ag,af){if(ag){ad(ag)
}else{af.push(aa);
ae.apply(this,af)
}});
var aa=function(ag,af){if(ag){ad(ag)
}else{if(af){ac(ab)
}else{ad(null)
}}};
ae(aa)
};
K.doDuring=function(ab,ad,ac){var aa=0;
K.during(function(ae){if(aa++<1){ae(null,true)
}else{ad.apply(this,arguments)
}},ab,ac)
};
function o(ag,ad,af){if(ad==null){ad=1
}else{if(ad===0){throw new Error("Concurrency must not be zero")
}}function aa(ai,ah,ak,aj){if(aj!=null&&typeof aj!=="function"){throw new Error("task callback must be a function")
}ai.started=true;
if(!W(ah)){ah=[ah]
}if(ah.length===0&&ai.idle()){return K.setImmediate(function(){ai.drain()
})
}U(ah,function(al){var am={data:al,callback:aj||V};
if(ak){ai.tasks.unshift(am)
}else{ai.tasks.push(am)
}if(ai.tasks.length===ai.concurrency){ai.saturated()
}});
K.setImmediate(ai.process)
}function ac(ah,ai){return function(){ab-=1;
var aj=arguments;
U(ai,function(ak){ak.callback.apply(ak,aj)
});
if(ah.tasks.length+ab===0){ah.drain()
}ah.process()
}
}var ab=0;
var ae={tasks:[],concurrency:ad,payload:af,saturated:V,empty:V,drain:V,started:false,paused:false,push:function(ah,ai){aa(ae,ah,false,ai)
},kill:function(){ae.drain=V;
ae.tasks=[]
},unshift:function(ah,ai){aa(ae,ah,true,ai)
},process:function(){if(!ae.paused&&ab<ae.concurrency&&ae.tasks.length){while(ab<ae.concurrency&&ae.tasks.length){var aj=ae.payload?ae.tasks.splice(0,ae.payload):ae.tasks.splice(0,ae.tasks.length);
var ai=B(aj,function(ak){return ak.data
});
if(ae.tasks.length===0){ae.empty()
}ab+=1;
var ah=k(ac(ae,aj));
ag(ai,ah)
}}},length:function(){return ae.tasks.length
},running:function(){return ab
},idle:function(){return ae.tasks.length+ab===0
},pause:function(){ae.paused=true
},resume:function(){if(ae.paused===false){return
}ae.paused=false;
var ai=Math.min(ae.concurrency,ae.tasks.length);
for(var ah=1;
ah<=ai;
ah++){K.setImmediate(ae.process)
}}};
return ae
}K.queue=function(ac,aa){var ab=o(function(ae,ad){ac(ae[0],ad)
},aa,1);
return ab
};
K.priorityQueue=function(af,ad){function ac(ah,ag){return ah.priority-ag.priority
}function ab(al,aj,ak){var ai=-1,ag=al.length-1;
while(ai<ag){var ah=ai+((ag-ai+1)>>>1);
if(ak(aj,al[ah])>=0){ai=ah
}else{ag=ah-1
}}return ai
}function aa(ai,ah,ag,aj){if(aj!=null&&typeof aj!=="function"){throw new Error("task callback must be a function")
}ai.started=true;
if(!W(ah)){ah=[ah]
}if(ah.length===0){return K.setImmediate(function(){ai.drain()
})
}U(ah,function(ak){var al={data:ak,priority:ag,callback:typeof aj==="function"?aj:V};
ai.tasks.splice(ab(ai.tasks,al,ac)+1,0,al);
if(ai.tasks.length===ai.concurrency){ai.saturated()
}K.setImmediate(ai.process)
})
}var ae=K.queue(af,ad);
ae.push=function(ah,ag,ai){aa(ae,ah,ag,ai)
};
delete ae.unshift;
return ae
};
K.cargo=function(ab,aa){return o(ab,1,aa)
};
function Y(aa){return r(function(ac,ab){ac.apply(null,ab.concat([r(function(ae,ad){if(typeof console==="object"){if(ae){if(console.error){console.error(ae)
}}else{if(console[aa]){U(ad,function(af){console[aa](af)
})
}}}})]))
})
}K.log=Y("log");
K.dir=Y("dir");
K.memoize=function(ae,ac){var ab={};
var ad={};
ac=ac||O;
var aa=r(function aa(af){var ah=af.pop();
var ag=ac.apply(null,af);
if(ag in ab){K.nextTick(function(){ah.apply(null,ab[ag])
})
}else{if(ag in ad){ad[ag].push(ah)
}else{ad[ag]=[ah];
ae.apply(null,af.concat([r(function(aj){ab[ag]=aj;
var al=ad[ag];
delete ad[ag];
for(var ak=0,ai=al.length;
ak<ai;
ak++){al[ak].apply(null,aj)
}})]))
}}});
aa.memo=ab;
aa.unmemoized=ae;
return aa
};
K.unmemoize=function(aa){return function(){return(aa.unmemoized||aa).apply(null,arguments)
}
};
function F(aa){return function(ac,ab,ad){aa(q(ac),ab,ad)
}
}K.times=F(K.map);
K.timesSeries=F(K.mapSeries);
K.timesLimit=function(ac,aa,ab,ad){return K.mapLimit(q(ac),aa,ab,ad)
};
K.seq=function(){var aa=arguments;
return r(function(ab){var ac=this;
var ad=ab[ab.length-1];
if(typeof ad=="function"){ab.pop()
}else{ad=V
}K.reduce(aa,ab,function(af,ag,ae){ag.apply(ac,af.concat([r(function(ai,ah){ae(ai,ah)
})]))
},function(af,ae){ad.apply(ac,[af].concat(ae))
})
})
};
K.compose=function(){return K.seq.apply(null,Array.prototype.reverse.call(arguments))
};
function v(aa){return r(function(ac,ab){var ad=r(function(ae){var af=this;
var ag=ae.pop();
return aa(ac,function(aj,ai,ah){aj.apply(af,ae.concat([ah]))
},ag)
});
if(ab.length){return ad.apply(this,ab)
}else{return ad
}})
}K.applyEach=v(K.eachOf);
K.applyEachSeries=v(K.eachOfSeries);
K.forever=function(ad,ae){var aa=k(ae||V);
var ab=Z(ad);
function ac(af){if(af){return aa(af)
}ab(ac)
}ac()
};
function Z(aa){return r(function(ab){var ad=ab.pop();
ab.push(function(){var ae=arguments;
if(ac){K.setImmediate(function(){ad.apply(null,ae)
})
}else{ad.apply(null,ae)
}});
var ac=true;
aa.apply(this,ab);
ac=false
})
}K.ensureAsync=Z;
K.constant=r(function(aa){var ab=[null].concat(aa);
return function(ac){return ac.apply(this,ab)
}
});
K.wrapSync=K.asyncify=function l(aa){return r(function(ac){var ae=ac.pop();
var ab;
try{ab=aa.apply(this,ac)
}catch(ad){return ae(ad)
}if(p(ab)&&typeof ab.then==="function"){ab.then(function(af){ae(null,af)
})["catch"](function(af){ae(af.message?af:new Error(af))
})
}else{ae(null,ab)
}})
};
if(typeof g==="object"&&g.exports){g.exports=K
}else{if(typeof d==="function"&&d.amd){d([],function(){return K
})
}else{z.async=K
}}}())
}).call(this,f("_process"),typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{_process:3}],2:[function(f,g,e){(function(m){function k(r,o){var n=0;
for(var p=r.length-1;
p>=0;
p--){var q=r[p];
if(q==="."){r.splice(p,1)
}else{if(q===".."){r.splice(p,1);
n++
}else{if(n){r.splice(p,1);
n--
}}}}if(o){for(;
n--;
n){r.unshift("..")
}}return r
}var j=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var h=function(n){return j.exec(n).slice(1)
};
e.resolve=function(){var p="",n=false;
for(var o=arguments.length-1;
o>=-1&&!n;
o--){var q=(o>=0)?arguments[o]:m.cwd();
if(typeof q!=="string"){throw new TypeError("Arguments to path.resolve must be strings")
}else{if(!q){continue
}}p=q+"/"+p;
n=q.charAt(0)==="/"
}p=k(i(p.split("/"),function(r){return !!r
}),!n).join("/");
return((n?"/":"")+p)||"."
};
e.normalize=function(p){var o=e.isAbsolute(p),n=l(p,-1)==="/";
p=k(i(p.split("/"),function(q){return !!q
}),!o).join("/");
if(!p&&!o){p="."
}if(p&&n){p+="/"
}return(o?"/":"")+p
};
e.isAbsolute=function(n){return n.charAt(0)==="/"
};
e.join=function(){var n=Array.prototype.slice.call(arguments,0);
return e.normalize(i(n,function(q,o){if(typeof q!=="string"){throw new TypeError("Arguments to path.join must be strings")
}return q
}).join("/"))
};
e.relative=function(t,u){t=e.resolve(t).substr(1);
u=e.resolve(u).substr(1);
function p(w){var y=0;
for(;
y<w.length;
y++){if(w[y]!==""){break
}}var x=w.length-1;
for(;
x>=0;
x--){if(w[x]!==""){break
}}if(y>x){return[]
}return w.slice(y,x-y+1)
}var s=p(t.split("/"));
var o=p(u.split("/"));
var n=Math.min(s.length,o.length);
var v=n;
for(var r=0;
r<n;
r++){if(s[r]!==o[r]){v=r;
break
}}var q=[];
for(var r=v;
r<s.length;
r++){q.push("..")
}q=q.concat(o.slice(v));
return q.join("/")
};
e.sep="/";
e.delimiter=":";
e.dirname=function(q){var n=h(q),o=n[0],p=n[1];
if(!o&&!p){return"."
}if(p){p=p.substr(0,p.length-1)
}return o+p
};
e.basename=function(p,n){var o=h(p)[2];
if(n&&o.substr(-1*n.length)===n){o=o.substr(0,o.length-n.length)
}return o
};
e.extname=function(n){return h(n)[3]
};
function i(n,q){if(n.filter){return n.filter(q)
}var p=[];
for(var o=0;
o<n.length;
o++){if(q(n[o],o,n)){p.push(n[o])
}}return p
}var l="ab".substr(-1)==="b"?function(o,p,n){return o.substr(p,n)
}:function(o,p,n){if(p<0){p=o.length+p
}return o.substr(p,n)
}
}).call(this,f("_process"))
},{_process:3}],3:[function(g,f,i){var e=f.exports={};
var j=[];
var n=false;
var k;
var l=-1;
function m(){n=false;
if(k.length){j=k.concat(j)
}else{l=-1
}if(j.length){p()
}}function p(){if(n){return
}var r=setTimeout(m);
n=true;
var q=j.length;
while(q){k=j;
j=[];
while(++l<q){if(k){k[l].run()
}}l=-1;
q=j.length
}k=null;
n=false;
clearTimeout(r)
}e.nextTick=function(q){var r=new Array(arguments.length-1);
if(arguments.length>1){for(var s=1;
s<arguments.length;
s++){r[s-1]=arguments[s]
}}j.push(new h(q,r));
if(j.length===1&&!n){setTimeout(p,0)
}};
function h(q,r){this.fun=q;
this.array=r
}h.prototype.run=function(){this.fun.apply(null,this.array)
};
e.title="browser";
e.browser=true;
e.env={};
e.argv=[];
e.version="";
e.versions={};
function o(){}e.on=o;
e.addListener=o;
e.once=o;
e.off=o;
e.removeListener=o;
e.removeAllListeners=o;
e.emit=o;
e.binding=function(q){throw new Error("process.binding is not supported")
};
e.cwd=function(){return"/"
};
e.chdir=function(q){throw new Error("process.chdir is not supported")
};
e.umask=function(){return 0
}
},{}],4:[function(f,g,e){(function(h){
/*! https://mths.be/punycode v1.3.2 by @mathias */
;
(function(H){var x=typeof e=="object"&&e&&!e.nodeType&&e;
var P=typeof g=="object"&&g&&!g.nodeType&&g;
var G=typeof h=="object"&&h;
if(G.global===G||G.window===G||G.self===G){H=G
}var m,A=2147483647,t=36,v=1,y=26,q=38,u=700,w=72,p=128,N="-",D=/^xn--/,l=/[^\x20-\x7E]/,i=/[\x2E\u3002\uFF0E\uFF61]/g,z={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},o=t-v,J=Math.floor,F=String.fromCharCode,O;
function I(Q){throw RangeError(z[Q])
}function L(T,R){var S=T.length;
var Q=[];
while(S--){Q[S]=R(T[S])
}return Q
}function k(R,S){var U=R.split("@");
var Q="";
if(U.length>1){Q=U[0]+"@";
R=U[1]
}R=R.replace(i,"\x2E");
var V=R.split(".");
var T=L(V,S).join(".");
return Q+T
}function s(T){var S=[],R=0,U=T.length,V,Q;
while(R<U){V=T.charCodeAt(R++);
if(V>=55296&&V<=56319&&R<U){Q=T.charCodeAt(R++);
if((Q&64512)==56320){S.push(((V&1023)<<10)+(Q&1023)+65536)
}else{S.push(V);
R--
}}else{S.push(V)
}}return S
}function K(Q){return L(Q,function(S){var R="";
if(S>65535){S-=65536;
R+=F(S>>>10&1023|55296);
S=56320|S&1023
}R+=F(S);
return R
}).join("")
}function n(Q){if(Q-48<10){return Q-22
}if(Q-65<26){return Q-65
}if(Q-97<26){return Q-97
}return t
}function E(R,Q){return R+22+75*(R<26)-((Q!=0)<<5)
}function j(T,R,S){var Q=0;
T=S?J(T/u):T>>1;
T+=J(T/R);
for(;
T>o*y>>1;
Q+=t){T=J(T/o)
}return J(Q+(o+1)*T/(T+q))
}function C(ac){var S=[],V=ac.length,X,Y=0,R=p,Z=w,U,W,aa,Q,ad,T,ab,af,ae;
U=ac.lastIndexOf(N);
if(U<0){U=0
}for(W=0;
W<U;
++W){if(ac.charCodeAt(W)>=128){I("not-basic")
}S.push(ac.charCodeAt(W))
}for(aa=U>0?U+1:0;
aa<V;
){for(Q=Y,ad=1,T=t;
;
T+=t){if(aa>=V){I("invalid-input")
}ab=n(ac.charCodeAt(aa++));
if(ab>=t||ab>J((A-Y)/ad)){I("overflow")
}Y+=ab*ad;
af=T<=Z?v:(T>=Z+y?y:T-Z);
if(ab<af){break
}ae=t-af;
if(ad>J(A/ae)){I("overflow")
}ad*=ae
}X=S.length+1;
Z=j(Y-Q,X,Q==0);
if(J(Y/X)>A-R){I("overflow")
}R+=J(Y/X);
Y%=X;
S.splice(Y++,0,R)
}return K(S)
}function r(ac){var T,ae,Z,R,aa,Y,U,Q,X,ag,ad,S=[],W,V,af,ab;
ac=s(ac);
W=ac.length;
T=p;
ae=0;
aa=w;
for(Y=0;
Y<W;
++Y){ad=ac[Y];
if(ad<128){S.push(F(ad))
}}Z=R=S.length;
if(R){S.push(N)
}while(Z<W){for(U=A,Y=0;
Y<W;
++Y){ad=ac[Y];
if(ad>=T&&ad<U){U=ad
}}V=Z+1;
if(U-T>J((A-ae)/V)){I("overflow")
}ae+=(U-T)*V;
T=U;
for(Y=0;
Y<W;
++Y){ad=ac[Y];
if(ad<T&&++ae>A){I("overflow")
}if(ad==T){for(Q=ae,X=t;
;
X+=t){ag=X<=aa?v:(X>=aa+y?y:X-aa);
if(Q<ag){break
}ab=Q-ag;
af=t-ag;
S.push(F(E(ag+ab%af,0)));
Q=J(ab/af)
}S.push(F(E(Q,0)));
aa=j(ae,V,Z==R);
ae=0;
++Z
}}++ae;
++T
}return S.join("")
}function B(Q){return k(Q,function(R){return D.test(R)?C(R.slice(4).toLowerCase()):R
})
}function M(Q){return k(Q,function(R){return l.test(R)?"xn--"+r(R):R
})
}m={version:"1.3.2",ucs2:{decode:s,encode:K},decode:C,encode:r,toASCII:M,toUnicode:B};
if(typeof d=="function"&&typeof d.amd=="object"&&d.amd){d("punycode",function(){return m
})
}else{if(x&&P){if(g.exports==x){P.exports=m
}else{for(O in m){m.hasOwnProperty(O)&&(x[O]=m[O])
}}}else{H.punycode=m
}}}(this))
}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{}],5:[function(g,h,f){function i(j,k){return Object.prototype.hasOwnProperty.call(j,k)
}h.exports=function(p,z,y,A){z=z||"&";
y=y||"=";
var m={};
if(typeof p!=="string"||p.length===0){return m
}var o=/\+/g;
p=p.split(z);
var s=1000;
if(A&&typeof A.maxKeys==="number"){s=A.maxKeys
}var n=p.length;
if(s>0&&n>s){n=s
}for(var l=0;
l<n;
++l){var r=p[l].replace(o,"%20"),t=r.indexOf(y),q,w,j,u;
if(t>=0){q=r.substr(0,t);
w=r.substr(t+1)
}else{q=r;
w=""
}j=decodeURIComponent(q);
u=decodeURIComponent(w);
if(!i(m,j)){m[j]=u
}else{if(e(m[j])){m[j].push(u)
}else{m[j]=[m[j],u]
}}}return m
};
var e=Array.isArray||function(j){return Object.prototype.toString.call(j)==="[object Array]"
}
},{}],6:[function(h,i,g){var k=function(l){switch(typeof l){case"string":return l;
case"boolean":return l?"true":"false";
case"number":return isFinite(l)?l:"";
default:return""
}};
i.exports=function(o,n,l,m){n=n||"&";
l=l||"=";
if(o===null){o=undefined
}if(typeof o==="object"){return j(f(o),function(p){var q=encodeURIComponent(k(p))+l;
if(e(o[p])){return j(o[p],function(r){return q+encodeURIComponent(k(r))
}).join(n)
}else{return q+encodeURIComponent(k(o[p]))
}}).join(n)
}if(!m){return""
}return encodeURIComponent(k(m))+l+encodeURIComponent(k(o))
};
var e=Array.isArray||function(l){return Object.prototype.toString.call(l)==="[object Array]"
};
function j(l,o){if(l.map){return l.map(o)
}var n=[];
for(var m=0;
m<l.length;
m++){n.push(o(l[m],m))
}return n
}var f=Object.keys||function(n){var m=[];
for(var l in n){if(Object.prototype.hasOwnProperty.call(n,l)){m.push(l)
}}return m
}
},{}],7:[function(f,g,e){e.decode=e.parse=f("./decode");
e.encode=e.stringify=f("./encode")
},{"./decode":5,"./encode":6}],8:[function(p,h,D){var g=p("punycode");
D.parse=A;
D.resolve=r;
D.resolveObject=m;
D.format=t;
D.Url=w;
function w(){this.protocol=null;
this.slashes=null;
this.auth=null;
this.host=null;
this.port=null;
this.hostname=null;
this.hash=null;
this.search=null;
this.query=null;
this.pathname=null;
this.path=null;
this.href=null
}var k=/^([a-z0-9.+-]+:)/i,e=/:[0-9]*$/,n=["<",">",'"',"`"," ","\r","\n","\t"],f=["{","}","|","\\","^","`"].concat(n),B=["'"].concat(f),C=["%","/","?",";","#"].concat(B),y=["/","?","#"],E=255,o=/^[a-z0-9A-Z_-]{0,63}$/,j=/^([a-z0-9A-Z_-]{0,63})(.*)$/,x={javascript:true,"javascript:":true},v={javascript:true,"javascript:":true},l={http:true,https:true,ftp:true,gopher:true,file:true,"http:":true,"https:":true,"ftp:":true,"gopher:":true,"file:":true},i=p("querystring");
function A(G,I,H){if(G&&s(G)&&G instanceof w){return G
}var F=new w;
F.parse(G,I,H);
return F
}w.prototype.parse=function(K,ab,ag){if(!u(K)){throw new TypeError("Parameter 'url' must be a string, not "+typeof K)
}var Q=K;
Q=Q.trim();
var V=k.exec(Q);
if(V){V=V[0];
var ah=V.toLowerCase();
this.protocol=ah;
Q=Q.substr(V.length)
}if(ag||V||Q.match(/^\/\/[^@\/]+@[^@\/]+/)){var I=Q.substr(0,2)==="//";
if(I&&!(V&&v[V])){Q=Q.substr(2);
this.slashes=true
}}if(!v[V]&&(I||(V&&!l[V]))){var G=-1;
for(var ac=0;
ac<y.length;
ac++){var af=Q.indexOf(y[ac]);
if(af!==-1&&(G===-1||af<G)){G=af
}}var O,S;
if(G===-1){S=Q.lastIndexOf("@")
}else{S=Q.lastIndexOf("@",G)
}if(S!==-1){O=Q.slice(0,S);
Q=Q.slice(S+1);
this.auth=decodeURIComponent(O)
}G=-1;
for(var ac=0;
ac<C.length;
ac++){var af=Q.indexOf(C[ac]);
if(af!==-1&&(G===-1||af<G)){G=af
}}if(G===-1){G=Q.length
}this.host=Q.slice(0,G);
Q=Q.slice(G);
this.parseHost();
this.hostname=this.hostname||"";
var J=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";
if(!J){var N=this.hostname.split(/\./);
for(var ac=0,X=N.length;
ac<X;
ac++){var W=N[ac];
if(!W){continue
}if(!W.match(o)){var aj="";
for(var aa=0,Y=W.length;
aa<Y;
aa++){if(W.charCodeAt(aa)>127){aj+="x"
}else{aj+=W[aa]
}}if(!aj.match(o)){var Z=N.slice(0,ac);
var M=N.slice(ac+1);
var P=W.match(j);
if(P){Z.push(P[1]);
M.unshift(P[2])
}if(M.length){Q="/"+M.join(".")+Q
}this.hostname=Z.join(".");
break
}}}}if(this.hostname.length>E){this.hostname=""
}else{this.hostname=this.hostname.toLowerCase()
}if(!J){var L=this.hostname.split(".");
var T=[];
for(var ac=0;
ac<L.length;
++ac){var R=L[ac];
T.push(R.match(/[^A-Za-z0-9_-]/)?"xn--"+g.encode(R):R)
}this.hostname=T.join(".")
}var U=this.port?":"+this.port:"";
var ad=this.hostname||"";
this.host=ad+U;
this.href+=this.host;
if(J){this.hostname=this.hostname.substr(1,this.hostname.length-2);
if(Q[0]!=="/"){Q="/"+Q
}}}if(!x[ah]){for(var ac=0,X=B.length;
ac<X;
ac++){var ai=B[ac];
var ak=encodeURIComponent(ai);
if(ak===ai){ak=escape(ai)
}Q=Q.split(ai).join(ak)
}}var F=Q.indexOf("#");
if(F!==-1){this.hash=Q.substr(F);
Q=Q.slice(0,F)
}var H=Q.indexOf("?");
if(H!==-1){this.search=Q.substr(H);
this.query=Q.substr(H+1);
if(ab){this.query=i.parse(this.query)
}Q=Q.slice(0,H)
}else{if(ab){this.search="";
this.query={}
}}if(Q){this.pathname=Q
}if(l[ah]&&this.hostname&&!this.pathname){this.pathname="/"
}if(this.pathname||this.search){var U=this.pathname||"";
var R=this.search||"";
this.path=U+R
}this.href=this.format();
return this
};
function t(F){if(u(F)){F=A(F)
}if(!(F instanceof w)){return w.prototype.format.call(F)
}return F.format()
}w.prototype.format=function(){var H=this.auth||"";
if(H){H=encodeURIComponent(H);
H=H.replace(/%3A/i,":");
H+="@"
}var L=this.protocol||"",K=this.pathname||"",J=this.hash||"",G=false,I="";
if(this.host){G=H+this.host
}else{if(this.hostname){G=H+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]");
if(this.port){G+=":"+this.port
}}}if(this.query&&s(this.query)&&Object.keys(this.query).length){I=i.stringify(this.query)
}var F=this.search||(I&&("?"+I))||"";
if(L&&L.substr(-1)!==":"){L+=":"
}if(this.slashes||(!L||l[L])&&G!==false){G="//"+(G||"");
if(K&&K.charAt(0)!=="/"){K="/"+K
}}else{if(!G){G=""
}}if(J&&J.charAt(0)!=="#"){J="#"+J
}if(F&&F.charAt(0)!=="?"){F="?"+F
}K=K.replace(/[?#]/g,function(M){return encodeURIComponent(M)
});
F=F.replace("#","%23");
return L+G+K+F+J
};
function r(G,F){return A(G,false,true).resolve(F)
}w.prototype.resolve=function(F){return this.resolveObject(A(F,false,true)).format()
};
function m(G,F){if(!G){return F
}return A(G,false,true).resolveObject(F)
}w.prototype.resolveObject=function(V){if(u(V)){var H=new w();
H.parse(V,false,true);
V=H
}var L=new w();
Object.keys(this).forEach(function(X){L[X]=this[X]
},this);
L.hash=V.hash;
if(V.href===""){L.href=L.format();
return L
}if(V.slashes&&!V.protocol){Object.keys(V).forEach(function(X){if(X!=="protocol"){L[X]=V[X]
}});
if(l[L.protocol]&&L.hostname&&!L.pathname){L.path=L.pathname="/"
}L.href=L.format();
return L
}if(V.protocol&&V.protocol!==L.protocol){if(!l[V.protocol]){Object.keys(V).forEach(function(X){L[X]=V[X]
});
L.href=L.format();
return L
}L.protocol=V.protocol;
if(!V.host&&!v[V.protocol]){var W=(V.pathname||"").split("/");
while(W.length&&!(V.host=W.shift())){}if(!V.host){V.host=""
}if(!V.hostname){V.hostname=""
}if(W[0]!==""){W.unshift("")
}if(W.length<2){W.unshift("")
}L.pathname=W.join("/")
}else{L.pathname=V.pathname
}L.search=V.search;
L.query=V.query;
L.host=V.host||"";
L.auth=V.auth;
L.hostname=V.hostname||V.host;
L.port=V.port;
if(L.pathname||L.search){var P=L.pathname||"";
var N=L.search||"";
L.path=P+N
}L.slashes=L.slashes||V.slashes;
L.href=L.format();
return L
}var O=(L.pathname&&L.pathname.charAt(0)==="/"),S=(V.host||V.pathname&&V.pathname.charAt(0)==="/"),T=(S||O||(L.host&&V.pathname)),I=T,M=L.pathname&&L.pathname.split("/")||[],W=V.pathname&&V.pathname.split("/")||[],G=L.protocol&&!l[L.protocol];
if(G){L.hostname="";
L.port=null;
if(L.host){if(M[0]===""){M[0]=L.host
}else{M.unshift(L.host)
}}L.host="";
if(V.protocol){V.hostname=null;
V.port=null;
if(V.host){if(W[0]===""){W[0]=V.host
}else{W.unshift(V.host)
}}V.host=null
}T=T&&(W[0]===""||M[0]==="")
}if(S){L.host=(V.host||V.host==="")?V.host:L.host;
L.hostname=(V.hostname||V.hostname==="")?V.hostname:L.hostname;
L.search=V.search;
L.query=V.query;
M=W
}else{if(W.length){if(!M){M=[]
}M.pop();
M=M.concat(W);
L.search=V.search;
L.query=V.query
}else{if(!q(V.search)){if(G){L.hostname=L.host=M.shift();
var R=L.host&&L.host.indexOf("@")>0?L.host.split("@"):false;
if(R){L.auth=R.shift();
L.host=L.hostname=R.shift()
}}L.search=V.search;
L.query=V.query;
if(!z(L.pathname)||!z(L.search)){L.path=(L.pathname?L.pathname:"")+(L.search?L.search:"")
}L.href=L.format();
return L
}}}if(!M.length){L.pathname=null;
if(L.search){L.path="/"+L.search
}else{L.path=null
}L.href=L.format();
return L
}var J=M.slice(-1)[0];
var F=((L.host||V.host)&&(J==="."||J==="..")||J==="");
var K=0;
for(var U=M.length;
U>=0;
U--){J=M[U];
if(J=="."){M.splice(U,1)
}else{if(J===".."){M.splice(U,1);
K++
}else{if(K){M.splice(U,1);
K--
}}}}if(!T&&!I){for(;
K--;
K){M.unshift("..")
}}if(T&&M[0]!==""&&(!M[0]||M[0].charAt(0)!=="/")){M.unshift("")
}if(F&&(M.join("/").substr(-1)!=="/")){M.push("")
}var Q=M[0]===""||(M[0]&&M[0].charAt(0)==="/");
if(G){L.hostname=L.host=Q?"":M.length?M.shift():"";
var R=L.host&&L.host.indexOf("@")>0?L.host.split("@"):false;
if(R){L.auth=R.shift();
L.host=L.hostname=R.shift()
}}T=T||(L.host&&M.length);
if(T&&!Q){M.unshift("")
}if(!M.length){L.pathname=null;
L.path=null
}else{L.pathname=M.join("/")
}if(!z(L.pathname)||!z(L.search)){L.path=(L.pathname?L.pathname:"")+(L.search?L.search:"")
}L.auth=V.auth||L.auth;
L.slashes=L.slashes||V.slashes;
L.href=L.format();
return L
};
w.prototype.parseHost=function(){var G=this.host;
var F=e.exec(G);
if(F){F=F[0];
if(F!==":"){this.port=F.substr(1)
}G=G.substr(0,G.length-F.length)
}if(G){this.hostname=G
}};
function u(F){return typeof F==="string"
}function s(F){return typeof F==="object"&&F!==null
}function z(F){return F===null
}function q(F){return F==null
}},{punycode:4,querystring:7}],9:[function(q,h,E){h.exports=n;
function n(M,Q,N){N=N||2;
var O=Q&&Q.length,K=O?Q[0]*N:M.length,P=v(M,B(M,0,K,N,true)),I=[];
if(!P){return I
}var J,H,G,F,S,R,T;
if(O){P=x(M,Q,P,N)
}if(M.length>80*N){J=G=M[0];
H=F=M[1];
for(var L=N;
L<K;
L+=N){S=M[L];
R=M[L+1];
if(S<J){J=S
}if(R<H){H=R
}if(S>G){G=S
}if(R>F){F=R
}}T=Math.max(G-J,F-H)
}g(M,P,I,N,J,H,T);
return I
}function B(J,G,H,L,F){var M=0,K,I,N;
for(K=G,I=H-L;
K<H;
K+=L){M+=(J[I]-J[K])*(J[K+1]+J[I+1]);
I=K
}if(F===(M>0)){for(K=G;
K<H;
K+=L){N=l(K,N)
}}else{for(K=H-L;
K>=G;
K-=L){N=l(K,N)
}}return N
}function v(I,J,F){if(!F){F=J
}var H=J,G;
do{G=false;
if(!H.steiner&&(s(I,H.i,H.next.i)||r(I,H.prev.i,H.i,H.next.i)===0)){H.prev.next=H.next;
H.next.prev=H.prev;
if(H.prevZ){H.prevZ.nextZ=H.nextZ
}if(H.nextZ){H.nextZ.prevZ=H.prevZ
}H=F=H.prev;
if(H===H.next){return null
}G=true
}else{H=H.next
}}while(G||H!==F);
return F
}function g(K,G,I,M,J,F,P,O){if(!G){return
}if(!O&&J!==undefined){p(K,G,J,F,P)
}var N=G,H,L;
while(G.prev!==G.next){H=G.prev;
L=G.next;
if(y(K,G,J,F,P)){I.push(H.i/M);
I.push(G.i/M);
I.push(L.i/M);
L.prev=H;
H.next=L;
if(G.prevZ){G.prevZ.nextZ=G.nextZ
}if(G.nextZ){G.nextZ.prevZ=G.prevZ
}G=L.next;
N=L.next;
continue
}G=L;
if(G===N){if(!O){g(K,v(K,G),I,M,J,F,P,1)
}else{if(O===1){G=u(K,G,I,M);
g(K,G,I,M,J,F,P,2)
}else{if(O===2){t(K,G,I,M,J,F,P)
}}}break
}}}function y(am,N,aj,ag,T){var al=N.prev.i,ak=N.i,ah=N.next.i,O=am[al],L=am[al+1],ad=am[ak],aa=am[ak+1],G=am[ah],F=am[ah+1],ai=O*aa-L*ad,I=O*F-L*G,an=G*aa-F*ad,U=ai-I-an;
if(U<=0){return false
}var H=F-L,ac=O-G,K=L-aa,W=ad-O,Y,S,R,Q,P,X,V;
if(aj!==undefined){var M=O<ad?(O<G?O:G):(ad<G?ad:G),J=L<aa?(L<F?L:F):(aa<F?aa:F),ab=O>ad?(O>G?O:G):(ad>G?ad:G),Z=L>aa?(L>F?L:F):(aa>F?aa:F),af=e(M,J,aj,ag,T),ae=e(ab,Z,aj,ag,T);
V=N.nextZ;
while(V&&V.z<=ae){Y=V.i;
V=V.nextZ;
if(Y===al||Y===ah){continue
}S=am[Y];
R=am[Y+1];
Q=H*S+ac*R-I;
if(Q>=0){P=K*S+W*R+ai;
if(P>=0){X=U-Q-P;
if((X>=0)&&((Q&&P)||(Q&&X)||(P&&X))){return false
}}}}V=N.prevZ;
while(V&&V.z>=af){Y=V.i;
V=V.prevZ;
if(Y===al||Y===ah){continue
}S=am[Y];
R=am[Y+1];
Q=H*S+ac*R-I;
if(Q>=0){P=K*S+W*R+ai;
if(P>=0){X=U-Q-P;
if((X>=0)&&((Q&&P)||(Q&&X)||(P&&X))){return false
}}}}}else{V=N.next.next;
while(V!==N.prev){Y=V.i;
V=V.next;
S=am[Y];
R=am[Y+1];
Q=H*S+ac*R-I;
if(Q>=0){P=K*S+W*R+ai;
if(P>=0){X=U-Q-P;
if((X>=0)&&((Q&&P)||(Q&&X)||(P&&X))){return false
}}}}}return true
}function u(I,F,H,J){var G=F;
do{var M=G.prev,L=G.next.next;
if(M.i!==L.i&&f(I,M.i,G.i,G.next.i,L.i)&&A(I,M,L)&&A(I,L,M)){H.push(M.i/J);
H.push(G.i/J);
H.push(L.i/J);
M.next=L;
L.prev=M;
var N=G.prevZ,K=G.nextZ&&G.nextZ.nextZ;
if(N){N.nextZ=K
}if(K){K.prevZ=N
}G=F=L
}G=G.next
}while(G!==F);
return G
}function t(J,F,H,K,I,G,O){var N=F;
do{var M=N.next.next;
while(M!==N.prev){if(N.i!==M.i&&z(J,N,M)){var L=o(N,M);
N=v(J,N,N.next);
L=v(J,L,L.next);
g(J,N,H,K,I,G,O);
g(J,L,H,K,I,G,O);
return
}M=M.next
}N=N.next
}while(N!==F)
}function x(H,O,K,J){var L=[],I,M,F,G,N;
for(I=0,M=O.length;
I<M;
I++){F=O[I]*J;
G=I<M-1?O[I+1]*J:H.length;
N=B(H,F,G,J,false);
if(N===N.next){N.steiner=true
}N=v(H,N);
if(N){L.push(m(H,N))
}}L.sort(function(Q,P){return H[Q.i]-H[P.i]
});
for(I=0;
I<L.length;
I++){k(H,L[I],K);
K=v(H,K,K.next)
}return K
}function k(I,H,G){G=C(I,H,G);
if(G){var F=o(G,H);
v(I,F,F.next)
}}function C(ai,J,L){var V=L,Y=J.i,T=ai[Y],S=ai[Y+1],ad=-Infinity,G,ah,ae;
do{ah=V.i;
ae=V.next.i;
if(S<=ai[ah+1]&&S>=ai[ae+1]){var af=ai[ah]+(S-ai[ah+1])*(ai[ae]-ai[ah])/(ai[ae+1]-ai[ah+1]);
if(af<=T&&af>ad){ad=af;
G=ai[ah]<ai[ae]?V:V.next
}}V=V.next
}while(V!==L);
if(!G){return null
}var ab=ai[G.i],aa=ai[G.i+1],H=T*aa-S*ab,P=T*S-S*ad,K=S-S,F=T-ad,X=S-aa,Z=ab-T,U=H-P-(ad*aa-S*ab),ag=U<=0?-1:1,W=G,M=Infinity,R,O,I,Q,N,ac;
V=G.next;
while(V!==W){R=ai[V.i];
O=ai[V.i+1];
I=T-R;
if(I>=0&&R>=ab){Q=(K*R+F*O-P)*ag;
if(Q>=0){N=(X*R+Z*O+H)*ag;
if(N>=0&&U*ag-Q-N>=0){ac=Math.abs(S-O)/I;
if(ac<M&&A(ai,V,J)){G=V;
M=ac
}}}}V=V.next
}return G
}function p(I,K,F,J,G){var H=K;
do{if(H.z===null){H.z=e(I[H.i],I[H.i+1],F,J,G)
}H.prevZ=H.prev;
H.nextZ=H.next;
H=H.next
}while(H!==K);
H.prevZ.nextZ=null;
H.prevZ=null;
j(H)
}function j(L){var I,H,G,K,M,F,N,J,O=1;
do{H=L;
L=null;
M=null;
F=0;
while(H){F++;
G=H;
N=0;
for(I=0;
I<O;
I++){N++;
G=G.nextZ;
if(!G){break
}}J=O;
while(N>0||(J>0&&G)){if(N===0){K=G;
G=G.nextZ;
J--
}else{if(J===0||!G){K=H;
H=H.nextZ;
N--
}else{if(H.z<=G.z){K=H;
H=H.nextZ;
N--
}else{K=G;
G=G.nextZ;
J--
}}}if(M){M.nextZ=K
}else{L=K
}K.prevZ=M;
M=K
}H=G
}M.nextZ=null;
O*=2
}while(F>1);
return L
}function e(G,J,F,I,H){G=1000*(G-F)/H;
G=(G|(G<<8))&16711935;
G=(G|(G<<4))&252645135;
G=(G|(G<<2))&858993459;
G=(G|(G<<1))&1431655765;
J=1000*(J-I)/H;
J=(J|(J<<8))&16711935;
J=(J|(J<<4))&252645135;
J=(J|(J<<2))&858993459;
J=(J|(J<<1))&1431655765;
return G|(J<<1)
}function m(H,I){var G=I,F=I;
do{if(H[G.i]<H[F.i]){F=G
}G=G.next
}while(G!==I);
return F
}function z(H,G,F){return G.next.i!==F.i&&G.prev.i!==F.i&&!w(H,G,G.i,F.i)&&A(H,G,F)&&A(H,F,G)&&i(H,G,G.i,F.i)
}function r(H,I,G,F){var J=(H[G+1]-H[I+1])*(H[F]-H[G])-(H[G]-H[I])*(H[F+1]-H[G+1]);
return J>0?1:J<0?-1:0
}function s(F,H,G){return F[H]===F[G]&&F[H+1]===F[G+1]
}function f(G,I,F,H,J){return r(G,I,F,H)!==r(G,I,F,J)&&r(G,H,J,I)!==r(G,H,J,F)
}function w(I,L,G,F){var H=L;
do{var K=H.i,J=H.next.i;
if(K!==G&&J!==G&&K!==F&&J!==F&&f(I,K,J,G,F)){return true
}H=H.next
}while(H!==L);
return false
}function A(H,G,F){return r(H,G.prev.i,G.i,G.next.i)===-1?r(H,G.i,F.i,G.next.i)!==-1&&r(H,G.i,G.prev.i,F.i)!==-1:r(H,G.i,F.i,G.prev.i)===-1||r(H,G.i,G.next.i,F.i)===-1
}function i(I,F,L,J){var G=F,H=false,M=(I[L]+I[J])/2,K=(I[L+1]+I[J+1])/2;
do{var O=G.i,N=G.next.i;
if(((I[O+1]>K)!==(I[N+1]>K))&&(M<(I[N]-I[O])*(K-I[O+1])/(I[N+1]-I[O+1])+I[O])){H=!H
}G=G.next
}while(G!==F);
return H
}function o(H,G){var F=new D(H.i),I=new D(G.i),K=H.next,J=G.prev;
H.next=G;
G.prev=H;
F.next=K;
K.prev=F;
I.next=F;
F.prev=I;
J.next=I;
I.prev=J;
return I
}function l(F,H){var G=new D(F);
if(!H){G.prev=G;
G.next=G
}else{G.next=H.next;
G.prev=H;
H.next.prev=G;
H.next=G
}return G
}function D(F){this.i=F;
this.prev=null;
this.next=null;
this.z=null;
this.prevZ=null;
this.nextZ=null;
this.steiner=false
}},{}],10:[function(h,g,i){var k=typeof Object.create!=="function"?"~":false;
function q(t,r,s){this.fn=t;
this.context=r;
this.once=s||false
}function p(){}p.prototype._events=undefined;
p.prototype.listeners=function m(w,v){var t=k?k+w:w,x=this._events&&this._events[t];
if(v){return !!x
}if(!x){return[]
}if(x.fn){return[x.fn]
}for(var u=0,s=x.length,r=new Array(s);
u<s;
u++){r[u]=x[u].fn
}return r
};
p.prototype.emit=function n(s,u,t,r,D,C){var B=k?k+s:s;
if(!this._events||!this._events[B]){return false
}var A=this._events[B],y=arguments.length,z,x;
if("function"===typeof A.fn){if(A.once){this.removeListener(s,A.fn,undefined,true)
}switch(y){case 1:return A.fn.call(A.context),true;
case 2:return A.fn.call(A.context,u),true;
case 3:return A.fn.call(A.context,u,t),true;
case 4:return A.fn.call(A.context,u,t,r),true;
case 5:return A.fn.call(A.context,u,t,r,D),true;
case 6:return A.fn.call(A.context,u,t,r,D,C),true
}for(x=1,z=new Array(y-1);
x<y;
x++){z[x-1]=arguments[x]
}A.fn.apply(A.context,z)
}else{var v=A.length,w;
for(x=0;
x<v;
x++){if(A[x].once){this.removeListener(s,A[x].fn,undefined,true)
}switch(y){case 1:A[x].fn.call(A[x].context);
break;
case 2:A[x].fn.call(A[x].context,u);
break;
case 3:A[x].fn.call(A[x].context,u,t);
break;
default:if(!z){for(w=1,z=new Array(y-1);
w<y;
w++){z[w-1]=arguments[w]
}}A[x].fn.apply(A[x].context,z)
}}}return true
};
p.prototype.on=function l(u,t,s){var v=new q(t,s||this),r=k?k+u:u;
if(!this._events){this._events=k?{}:Object.create(null)
}if(!this._events[r]){this._events[r]=v
}else{if(!this._events[r].fn){this._events[r].push(v)
}else{this._events[r]=[this._events[r],v]
}}return this
};
p.prototype.once=function f(u,t,s){var v=new q(t,s||this,true),r=k?k+u:u;
if(!this._events){this._events=k?{}:Object.create(null)
}if(!this._events[r]){this._events[r]=v
}else{if(!this._events[r].fn){this._events[r].push(v)
}else{this._events[r]=[this._events[r],v]
}}return this
};
p.prototype.removeListener=function j(r,x,t,s){var y=k?k+r:r;
if(!this._events||!this._events[y]){return this
}var w=this._events[y],z=[];
if(x){if(w.fn){if(w.fn!==x||(s&&!w.once)||(t&&w.context!==t)){z.push(w)
}}else{for(var v=0,u=w.length;
v<u;
v++){if(w[v].fn!==x||(s&&!w[v].once)||(t&&w[v].context!==t)){z.push(w[v])
}}}}if(z.length){this._events[y]=z.length===1?z[0]:z
}else{delete this._events[y]
}return this
};
p.prototype.removeAllListeners=function o(r){if(!this._events){return this
}if(r){delete this._events[k?k+r:r]
}else{this._events=k?{}:Object.create(null)
}return this
};
p.prototype.off=p.prototype.removeListener;
p.prototype.addListener=p.prototype.on;
p.prototype.setMaxListeners=function e(){return this
};
p.prefixed=k;
if("undefined"!==typeof g){g.exports=p
}},{}],11:[function(g,h,e){var i=Object.prototype.hasOwnProperty;
var f=Object.prototype.propertyIsEnumerable;
function j(k){if(k===null||k===undefined){throw new TypeError("Object.assign cannot be called with null or undefined")
}return Object(k)
}h.exports=Object.assign||function(p,o){var r;
var q=j(p);
var k;
for(var n=1;
n<arguments.length;
n++){r=Object(arguments[n]);
for(var m in r){if(i.call(r,m)){q[m]=r[m]
}}if(Object.getOwnPropertySymbols){k=Object.getOwnPropertySymbols(r);
for(var l=0;
l<k.length;
l++){if(f.call(r,k[l])){q[k[l]]=r[k[l]]
}}}}return q
}
},{}],12:[function(f,g,e){g.exports={name:"pixi.js",version:"3.0.8",description:"Pixi.js is a fast lightweight 2D library that works across all devices.",author:"Mat Groves",contributors:["Chad Engler <chad@pantherdev.com>","Richard Davey <rdavey@gmail.com>"],main:"./src/index.js",homepage:"http://goodboydigital.com/",bugs:"https://github.com/pixijs/pixi.js/issues",license:"MIT",repository:{type:"git",url:"https://github.com/pixijs/pixi.js.git"},scripts:{start:"gulp && gulp watch",test:"gulp && testem ci",build:"gulp",docs:"jsdoc -c ./gulp/util/jsdoc.conf.json -R README.md"},files:["bin/","src/","CONTRIBUTING.md","LICENSE","package.json","README.md"],dependencies:{async:"^1.4.2",brfs:"^1.4.1",earcut:"^2.0.2",eventemitter3:"^1.1.1","gulp-header":"^1.7.1","object-assign":"^4.0.1","resource-loader":"^1.6.2"},devDependencies:{browserify:"^11.1.0",chai:"^3.2.0",del:"^2.0.2",gulp:"^3.9.0","gulp-cached":"^1.1.0","gulp-concat":"^2.6.0","gulp-debug":"^2.1.0","gulp-jshint":"^1.11.2","gulp-mirror":"^0.4.0","gulp-plumber":"^1.0.1","gulp-rename":"^1.2.2","gulp-sourcemaps":"^1.5.2","gulp-uglify":"^1.4.1","gulp-util":"^3.0.6","jaguarjs-jsdoc":"git+https://github.com/davidshimjs/jaguarjs-jsdoc.git",jsdoc:"^3.3.2","jshint-summary":"^0.4.0",minimist:"^1.2.0",mocha:"^2.3.2","require-dir":"^0.3.0","run-sequence":"^1.1.2",testem:"^0.9.4","vinyl-buffer":"^1.0.0","vinyl-source-stream":"^1.1.0",watchify:"^3.4.0"},browserify:{transform:["brfs"]}}
},{}],13:[function(g,h,f){var e={VERSION:g("../../package.json").version,PI_2:Math.PI*2,RAD_TO_DEG:180/Math.PI,DEG_TO_RAD:Math.PI/180,TARGET_FPMS:0.06,RENDERER_TYPE:{UNKNOWN:0,WEBGL:1,CANVAS:2},BLEND_MODES:{NORMAL:0,ADD:1,MULTIPLY:2,SCREEN:3,OVERLAY:4,DARKEN:5,LIGHTEN:6,COLOR_DODGE:7,COLOR_BURN:8,HARD_LIGHT:9,SOFT_LIGHT:10,DIFFERENCE:11,EXCLUSION:12,HUE:13,SATURATION:14,COLOR:15,LUMINOSITY:16},DRAW_MODES:{POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},SCALE_MODES:{DEFAULT:0,LINEAR:0,NEAREST:1},RETINA_PREFIX:/@(.+)x/,RESOLUTION:1,FILTER_RESOLUTION:1,DEFAULT_RENDER_OPTIONS:{view:null,resolution:1,antialias:false,forceFXAA:false,autoResize:false,transparent:false,backgroundColor:0,clearBeforeRender:true,preserveDrawingBuffer:false,roundPixels:false},SHAPES:{POLY:0,RECT:1,CIRC:2,ELIP:3,RREC:4},SPRITE_BATCH_SIZE:2000};
h.exports=e
},{"../../package.json":12}],14:[function(i,j,h){var k=i("../math"),g=i("./DisplayObject"),l=i("../textures/RenderTexture"),f=new k.Matrix();
function e(){g.call(this);
this.children=[]
}e.prototype=Object.create(g.prototype);
e.prototype.constructor=e;
j.exports=e;
Object.defineProperties(e.prototype,{width:{get:function(){return this.scale.x*this.getLocalBounds().width
},set:function(n){var m=this.getLocalBounds().width;
if(m!==0){this.scale.x=n/m
}else{this.scale.x=1
}this._width=n
}},height:{get:function(){return this.scale.y*this.getLocalBounds().height
},set:function(n){var m=this.getLocalBounds().height;
if(m!==0){this.scale.y=n/m
}else{this.scale.y=1
}this._height=n
}}});
e.prototype.onChildrenChange=function(){};
e.prototype.addChild=function(m){return this.addChildAt(m,this.children.length)
};
e.prototype.addChildAt=function(n,m){if(n===this){return n
}if(m>=0&&m<=this.children.length){if(n.parent){n.parent.removeChild(n)
}n.parent=this;
this.children.splice(m,0,n);
this.onChildrenChange(m);
n.emit("added",this);
return n
}else{throw new Error(n+"addChildAt: The index "+m+" supplied is out of bounds "+this.children.length)
}};
e.prototype.swapChildren=function(p,m){if(p===m){return
}var o=this.getChildIndex(p);
var n=this.getChildIndex(m);
if(o<0||n<0){throw new Error("swapChildren: Both the supplied DisplayObjects must be children of the caller.")
}this.children[o]=m;
this.children[n]=p;
this.onChildrenChange(o<n?o:n)
};
e.prototype.getChildIndex=function(n){var m=this.children.indexOf(n);
if(m===-1){throw new Error("The supplied DisplayObject must be a child of the caller")
}return m
};
e.prototype.setChildIndex=function(o,n){if(n<0||n>=this.children.length){throw new Error("The supplied index is out of bounds")
}var m=this.getChildIndex(o);
this.children.splice(m,1);
this.children.splice(n,0,o);
this.onChildrenChange(n)
};
e.prototype.getChildAt=function(m){if(m<0||m>=this.children.length){throw new Error("getChildAt: Supplied index "+m+" does not exist in the child list, or the supplied DisplayObject is not a child of the caller")
}return this.children[m]
};
e.prototype.removeChild=function(n){var m=this.children.indexOf(n);
if(m===-1){return
}return this.removeChildAt(m)
};
e.prototype.removeChildAt=function(m){var n=this.getChildAt(m);
n.parent=null;
this.children.splice(m,1);
this.onChildrenChange(m);
n.emit("removed",this);
return n
};
e.prototype.removeChildren=function(q,r){var p=q||0;
var m=typeof r==="number"?r:this.children.length;
var n=m-p;
var s,o;
if(n>0&&n<=m){s=this.children.splice(p,n);
for(o=0;
o<s.length;
++o){s[o].parent=null
}this.onChildrenChange(q);
for(o=0;
o<s.length;
++o){s[o].emit("removed",this)
}return s
}else{if(n===0&&this.children.length===0){return[]
}else{throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
}}};
e.prototype.generateTexture=function(q,n,o){var p=this.getLocalBounds();
var m=new l(q,p.width|0,p.height|0,o,n);
f.tx=-p.x;
f.ty=-p.y;
m.render(this,f);
return m
};
e.prototype.updateTransform=function(){if(!this.visible){return
}this.displayObjectUpdateTransform();
for(var n=0,m=this.children.length;
n<m;
++n){this.children[n].updateTransform()
}};
e.prototype.containerUpdateTransform=e.prototype.updateTransform;
e.prototype.getBounds=function(){if(!this._currentBounds){if(this.children.length===0){return k.Rectangle.EMPTY
}var s=Infinity;
var r=Infinity;
var o=-Infinity;
var n=-Infinity;
var t;
var x;
var w;
var p=false;
for(var v=0,u=this.children.length;
v<u;
++v){var q=this.children[v];
if(!q.visible){continue
}p=true;
t=this.children[v].getBounds();
s=s<t.x?s:t.x;
r=r<t.y?r:t.y;
x=t.width+t.x;
w=t.height+t.y;
o=o>x?o:x;
n=n>w?n:w
}if(!p){return k.Rectangle.EMPTY
}var m=this._bounds;
m.x=s;
m.y=r;
m.width=o-s;
m.height=n-r;
this._currentBounds=m
}return this._currentBounds
};
e.prototype.containerGetBounds=e.prototype.getBounds;
e.prototype.getLocalBounds=function(){var m=this.worldTransform;
this.worldTransform=k.Matrix.IDENTITY;
for(var o=0,n=this.children.length;
o<n;
++o){this.children[o].updateTransform()
}this.worldTransform=m;
this._currentBounds=null;
return this.getBounds(k.Matrix.IDENTITY)
};
e.prototype.renderWebGL=function(o){if(!this.visible||this.worldAlpha<=0||!this.renderable){return
}var n,m;
if(this._mask||this._filters){o.currentRenderer.flush();
if(this._filters&&this._filters.length){o.filterManager.pushFilter(this,this._filters)
}if(this._mask){o.maskManager.pushMask(this,this._mask)
}o.currentRenderer.start();
this._renderWebGL(o);
for(n=0,m=this.children.length;
n<m;
n++){this.children[n].renderWebGL(o)
}o.currentRenderer.flush();
if(this._mask){o.maskManager.popMask(this,this._mask)
}if(this._filters){o.filterManager.popFilter()
}o.currentRenderer.start()
}else{this._renderWebGL(o);
for(n=0,m=this.children.length;
n<m;
++n){this.children[n].renderWebGL(o)
}}};
e.prototype._renderWebGL=function(m){};
e.prototype._renderCanvas=function(m){};
e.prototype.renderCanvas=function(o){if(!this.visible||this.alpha<=0||!this.renderable){return
}if(this._mask){o.maskManager.pushMask(this._mask,o)
}this._renderCanvas(o);
for(var n=0,m=this.children.length;
n<m;
++n){this.children[n].renderCanvas(o)
}if(this._mask){o.maskManager.popMask(o)
}};
e.prototype.destroy=function(o){g.prototype.destroy.call(this);
if(o){for(var n=0,m=this.children.length;
n<m;
++n){this.children[n].destroy(o)
}}this.removeChildren();
this.children=null
}
},{"../math":23,"../textures/RenderTexture":61,"./DisplayObject":15}],15:[function(g,f,h){var l=g("../math"),j=g("../textures/RenderTexture"),m=g("eventemitter3"),n=g("../const"),k=new l.Matrix(),e={worldTransform:new l.Matrix(),worldAlpha:1,children:[]};
function i(){m.call(this);
this.position=new l.Point();
this.scale=new l.Point(1,1);
this.pivot=new l.Point(0,0);
this.rotation=0;
this.alpha=1;
this.visible=true;
this.renderable=true;
this.parent=null;
this.worldAlpha=1;
this.worldTransform=new l.Matrix();
this.filterArea=null;
this._sr=0;
this._cr=1;
this._bounds=new l.Rectangle(0,0,1,1);
this._currentBounds=null;
this._mask=null
}i.prototype=Object.create(m.prototype);
i.prototype.constructor=i;
f.exports=i;
Object.defineProperties(i.prototype,{x:{get:function(){return this.position.x
},set:function(o){this.position.x=o
}},y:{get:function(){return this.position.y
},set:function(o){this.position.y=o
}},worldVisible:{get:function(){var o=this;
do{if(!o.visible){return false
}o=o.parent
}while(o);
return true
}},mask:{get:function(){return this._mask
},set:function(o){if(this._mask){this._mask.renderable=true
}this._mask=o;
if(this._mask){this._mask.renderable=false
}}},filters:{get:function(){return this._filters&&this._filters.slice()
},set:function(o){this._filters=o&&o.slice()
}}});
i.prototype.updateTransform=function(){var t=this.parent.worldTransform;
var q=this.worldTransform;
var s,p,v,u,r,o;
if(this.rotation%n.PI_2){if(this.rotation!==this.rotationCache){this.rotationCache=this.rotation;
this._sr=Math.sin(this.rotation);
this._cr=Math.cos(this.rotation)
}s=this._cr*this.scale.x;
p=this._sr*this.scale.x;
v=-this._sr*this.scale.y;
u=this._cr*this.scale.y;
r=this.position.x;
o=this.position.y;
if(this.pivot.x||this.pivot.y){r-=this.pivot.x*s+this.pivot.y*v;
o-=this.pivot.x*p+this.pivot.y*u
}q.a=s*t.a+p*t.c;
q.b=s*t.b+p*t.d;
q.c=v*t.a+u*t.c;
q.d=v*t.b+u*t.d;
q.tx=r*t.a+o*t.c+t.tx;
q.ty=r*t.b+o*t.d+t.ty
}else{s=this.scale.x;
u=this.scale.y;
r=this.position.x-this.pivot.x*s;
o=this.position.y-this.pivot.y*u;
q.a=s*t.a;
q.b=s*t.b;
q.c=u*t.c;
q.d=u*t.d;
q.tx=r*t.a+o*t.c+t.tx;
q.ty=r*t.b+o*t.d+t.ty
}this.worldAlpha=this.alpha*this.parent.worldAlpha;
this._currentBounds=null
};
i.prototype.displayObjectUpdateTransform=i.prototype.updateTransform;
i.prototype.getBounds=function(o){return l.Rectangle.EMPTY
};
i.prototype.getLocalBounds=function(){return this.getBounds(l.Matrix.IDENTITY)
};
i.prototype.toGlobal=function(o){if(!this.parent){this.parent=e;
this.displayObjectUpdateTransform();
this.parent=null
}else{this.displayObjectUpdateTransform()
}return this.worldTransform.apply(o)
};
i.prototype.toLocal=function(o,p){if(p){o=p.toGlobal(o)
}if(!this.parent){this.parent=e;
this.displayObjectUpdateTransform();
this.parent=null
}else{this.displayObjectUpdateTransform()
}return this.worldTransform.applyInverse(o)
};
i.prototype.renderWebGL=function(o){};
i.prototype.renderCanvas=function(o){};
i.prototype.generateTexture=function(s,q,p){var r=this.getLocalBounds();
var o=new j(s,r.width|0,r.height|0,q,p);
k.tx=-r.x;
k.ty=-r.y;
o.render(this,k);
return o
};
i.prototype.setParent=function(o){if(!o||!o.addChild){throw new Error("setParent: Argument must be a Container")
}o.addChild(this);
return o
};
i.prototype.destroy=function(){this.position=null;
this.scale=null;
this.pivot=null;
this.parent=null;
this._bounds=null;
this._currentBounds=null;
this._mask=null;
this.worldTransform=null;
this.filterArea=null
}
},{"../const":13,"../math":23,"../textures/RenderTexture":61,eventemitter3:10}],16:[function(g,f,j){var h=g("../display/Container"),i=g("../textures/Texture"),l=g("../renderers/canvas/utils/CanvasBuffer"),o=g("../renderers/canvas/utils/CanvasGraphics"),m=g("./GraphicsData"),n=g("../math"),p=g("../const"),e=new n.Point();
function k(){h.call(this);
this.fillAlpha=1;
this.lineWidth=0;
this.lineColor=0;
this.graphicsData=[];
this.tint=16777215;
this._prevTint=16777215;
this.blendMode=p.BLEND_MODES.NORMAL;
this.currentPath=null;
this._webGL={};
this.isMask=false;
this.boundsPadding=0;
this._localBounds=new n.Rectangle(0,0,1,1);
this.dirty=true;
this.glDirty=false;
this.boundsDirty=true;
this.cachedSpriteDirty=false
}k.prototype=Object.create(h.prototype);
k.prototype.constructor=k;
f.exports=k;
k.prototype.clone=function(){var r=new k();
r.renderable=this.renderable;
r.fillAlpha=this.fillAlpha;
r.lineWidth=this.lineWidth;
r.lineColor=this.lineColor;
r.tint=this.tint;
r.blendMode=this.blendMode;
r.isMask=this.isMask;
r.boundsPadding=this.boundsPadding;
r.dirty=true;
r.glDirty=true;
r.cachedSpriteDirty=this.cachedSpriteDirty;
for(var q=0;
q<this.graphicsData.length;
++q){r.graphicsData.push(this.graphicsData[q].clone())
}r.currentPath=r.graphicsData[r.graphicsData.length-1];
r.updateLocalBounds();
return r
};
k.prototype.lineStyle=function(q,s,t){this.lineWidth=q||0;
this.lineColor=s||0;
this.lineAlpha=(t===undefined)?1:t;
if(this.currentPath){if(this.currentPath.shape.points.length){var r=new n.Polygon(this.currentPath.shape.points.slice(-2));
r.closed=false;
this.drawShape(r)
}else{this.currentPath.lineWidth=this.lineWidth;
this.currentPath.lineColor=this.lineColor;
this.currentPath.lineAlpha=this.lineAlpha
}}return this
};
k.prototype.moveTo=function(q,s){var r=new n.Polygon([q,s]);
r.closed=false;
this.drawShape(r);
return this
};
k.prototype.lineTo=function(q,r){this.currentPath.shape.points.push(q,r);
this.dirty=true;
return this
};
k.prototype.quadraticCurveTo=function(y,u,A,x){if(this.currentPath){if(this.currentPath.shape.points.length===0){this.currentPath.shape.points=[0,0]
}}else{this.moveTo(0,0)
}var q,v,r=20,B=this.currentPath.shape.points;
if(B.length===0){this.moveTo(0,0)
}var z=B[B.length-2];
var w=B[B.length-1];
var s=0;
for(var t=1;
t<=r;
++t){s=t/r;
q=z+((y-z)*s);
v=w+((u-w)*s);
B.push(q+(((y+((A-y)*s))-q)*s),v+(((u+((x-u)*s))-v)*s))
}this.dirty=this.boundsDirty=true;
return this
};
k.prototype.bezierCurveTo=function(D,z,C,v,F,B){if(this.currentPath){if(this.currentPath.shape.points.length===0){this.currentPath.shape.points=[0,0]
}}else{this.moveTo(0,0)
}var t=20,r,s,q,y,x,G=this.currentPath.shape.points;
var E=G[G.length-2];
var A=G[G.length-1];
var u=0;
for(var w=1;
w<=t;
++w){u=w/t;
r=(1-u);
s=r*r;
q=s*r;
y=u*u;
x=y*u;
G.push(q*E+3*s*u*D+3*r*y*C+x*F,q*A+3*s*u*z+3*r*y*v+x*B)
}this.dirty=this.boundsDirty=true;
return this
};
k.prototype.arcTo=function(M,w,L,u,x){if(this.currentPath){if(this.currentPath.shape.points.length===0){this.currentPath.shape.points.push(M,w)
}}else{this.moveTo(M,w)
}var J=this.currentPath.shape.points,E=J[J.length-2],C=J[J.length-1],R=C-w,z=E-M,Q=u-w,y=L-M,K=Math.abs(R*y-z*Q);
if(K<1e-8||x===0){if(J[J.length-2]!==M||J[J.length-1]!==w){J.push(M,w)
}}else{var P=R*R+z*z,G=Q*Q+y*y,r=R*Q+z*y,B=x*Math.sqrt(P)/K,A=x*Math.sqrt(G)/K,s=B*r/P,q=A*r/G,v=B*y+A*z,t=B*Q+A*R,F=z*(A+s),D=R*(A+s),O=y*(B+q),N=Q*(B+q),I=Math.atan2(D-t,F-v),H=Math.atan2(N-t,O-v);
this.arc(v+M,t+w,x,I,H,z*Q>y*R)
}this.dirty=this.boundsDirty=true;
return this
};
k.prototype.arc=function(t,r,u,E,C,q){q=q||false;
if(E===C){return this
}if(!q&&C<=E){C+=Math.PI*2
}else{if(q&&E<=C){E+=Math.PI*2
}}var y=q?(E-C)*-1:(C-E);
var B=Math.ceil(Math.abs(y)/(Math.PI*2))*40;
if(y===0){return this
}var K=t+Math.cos(E)*u;
var I=r+Math.sin(E)*u;
if(this.currentPath){this.currentPath.shape.points.push(K,I)
}else{this.moveTo(K,I)
}var H=this.currentPath.shape.points;
var v=y/(B*2);
var A=v*2;
var D=Math.cos(v);
var F=Math.sin(v);
var M=B-1;
var w=(M%1)/M;
for(var G=0;
G<=M;
G++){var z=G+w*G;
var J=((v)+E+(A*z));
var L=Math.cos(J);
var x=-Math.sin(J);
H.push(((D*L)+(F*x))*u+t,((D*-x)+(F*L))*u+r)
}this.dirty=this.boundsDirty=true;
return this
};
k.prototype.beginFill=function(q,r){this.filling=true;
this.fillColor=q||0;
this.fillAlpha=(r===undefined)?1:r;
if(this.currentPath){if(this.currentPath.shape.points.length<=2){this.currentPath.fill=this.filling;
this.currentPath.fillColor=this.fillColor;
this.currentPath.fillAlpha=this.fillAlpha
}}return this
};
k.prototype.endFill=function(){this.filling=false;
this.fillColor=null;
this.fillAlpha=1;
return this
};
k.prototype.drawRect=function(r,t,s,q){this.drawShape(new n.Rectangle(r,t,s,q));
return this
};
k.prototype.drawRoundedRect=function(s,u,t,r,q){this.drawShape(new n.RoundedRectangle(s,u,t,r,q));
return this
};
k.prototype.drawCircle=function(r,s,q){this.drawShape(new n.Circle(r,s,q));
return this
};
k.prototype.drawEllipse=function(r,t,s,q){this.drawShape(new n.Ellipse(r,t,s,q));
return this
};
k.prototype.drawPolygon=function(u){var t=u;
var r=true;
if(t instanceof n.Polygon){r=t.closed;
t=t.points
}if(!Array.isArray(t)){t=new Array(arguments.length);
for(var s=0;
s<t.length;
++s){t[s]=arguments[s]
}}var q=new n.Polygon(t);
q.closed=r;
this.drawShape(q);
return this
};
k.prototype.clear=function(){this.lineWidth=0;
this.filling=false;
this.dirty=true;
this.clearDirty=true;
this.graphicsData=[];
return this
};
k.prototype.generateTexture=function(v,q,s){q=q||1;
var u=this.getLocalBounds();
var r=new l(u.width*q,u.height*q);
var t=i.fromCanvas(r.canvas,s);
t.baseTexture.resolution=q;
r.context.scale(q,q);
r.context.translate(-u.x,-u.y);
o.renderGraphics(this,r.context);
return t
};
k.prototype._renderWebGL=function(q){if(this.glDirty){this.dirty=true;
this.glDirty=false
}q.setObjectRenderer(q.plugins.graphics);
q.plugins.graphics.render(this)
};
k.prototype._renderCanvas=function(u){if(this.isMask===true){return
}if(this._prevTint!==this.tint){this.dirty=true
}var s=u.context;
var r=this.worldTransform;
var t=u.blendModes[this.blendMode];
if(t!==s.globalCompositeOperation){s.globalCompositeOperation=t
}var q=u.resolution;
s.setTransform(r.a*q,r.b*q,r.c*q,r.d*q,r.tx*q,r.ty*q);
o.renderGraphics(this,s)
};
k.prototype.getBounds=function(B){if(!this._currentBounds){if(!this.renderable){return n.Rectangle.EMPTY
}if(this.boundsDirty){this.updateLocalBounds();
this.glDirty=true;
this.cachedSpriteDirty=true;
this.boundsDirty=false
}var u=this._localBounds;
var y=u.x;
var x=u.width+u.x;
var w=u.y;
var v=u.height+u.y;
var z=B||this.worldTransform;
var N=z.a;
var L=z.b;
var K=z.c;
var I=z.d;
var O=z.tx;
var M=z.ty;
var E=N*x+K*v+O;
var t=I*v+L*x+M;
var D=N*y+K*v+O;
var s=I*v+L*y+M;
var C=N*y+K*w+O;
var r=I*w+L*y+M;
var A=N*x+K*w+O;
var q=I*w+L*x+M;
var H=E;
var F=t;
var J=E;
var G=t;
J=D<J?D:J;
J=C<J?C:J;
J=A<J?A:J;
G=s<G?s:G;
G=r<G?r:G;
G=q<G?q:G;
H=D>H?D:H;
H=C>H?C:H;
H=A>H?A:H;
F=s>F?s:F;
F=r>F?r:F;
F=q>F?q:F;
this._bounds.x=J;
this._bounds.width=H-J;
this._bounds.y=G;
this._bounds.height=F-G;
this._currentBounds=this._bounds
}return this._currentBounds
};
k.prototype.containsPoint=function(q){this.worldTransform.applyInverse(q,e);
var t=this.graphicsData;
for(var r=0;
r<t.length;
r++){var s=t[r];
if(!s.fill){continue
}if(s.shape){if(s.shape.contains(e.x,e.y)){return true
}}}return false
};
k.prototype.updateLocalBounds=function(){var t=Infinity;
var r=-Infinity;
var s=Infinity;
var q=-Infinity;
if(this.graphicsData.length){var C,I,G,E,H,A;
for(var z=0;
z<this.graphicsData.length;
z++){var v=this.graphicsData[z];
var D=v.type;
var B=v.lineWidth;
C=v.shape;
if(D===p.SHAPES.RECT||D===p.SHAPES.RREC){G=C.x-B/2;
E=C.y-B/2;
H=C.width+B;
A=C.height+B;
t=G<t?G:t;
r=G+H>r?G+H:r;
s=E<s?E:s;
q=E+A>q?E+A:q
}else{if(D===p.SHAPES.CIRC){G=C.x;
E=C.y;
H=C.radius+B/2;
A=C.radius+B/2;
t=G-H<t?G-H:t;
r=G+H>r?G+H:r;
s=E-A<s?E-A:s;
q=E+A>q?E+A:q
}else{if(D===p.SHAPES.ELIP){G=C.x;
E=C.y;
H=C.width+B/2;
A=C.height+B/2;
t=G-H<t?G-H:t;
r=G+H>r?G+H:r;
s=E-A<s?E-A:s;
q=E+A>q?E+A:q
}else{I=C.points;
for(var u=0;
u<I.length;
u+=2){G=I[u];
E=I[u+1];
t=G-B<t?G-B:t;
r=G+B>r?G+B:r;
s=E-B<s?E-B:s;
q=E+B>q?E+B:q
}}}}}}else{t=0;
r=0;
s=0;
q=0
}var F=this.boundsPadding;
this._localBounds.x=t-F;
this._localBounds.width=(r-t)+F*2;
this._localBounds.y=s-F;
this._localBounds.height=(q-s)+F*2
};
k.prototype.drawShape=function(q){if(this.currentPath){if(this.currentPath.shape.points.length<=2){this.graphicsData.pop()
}}this.currentPath=null;
var r=new m(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.filling,q);
this.graphicsData.push(r);
if(r.type===p.SHAPES.POLY){r.shape.closed=r.shape.closed||this.filling;
this.currentPath=r
}this.dirty=this.boundsDirty=true;
return r
};
k.prototype.destroy=function(){h.prototype.destroy.apply(this,arguments);
for(var r=0;
r<this.graphicsData.length;
++r){this.graphicsData[r].destroy()
}for(var s in this._webgl){for(var q=0;
q<this._webgl[s].data.length;
++q){this._webgl[s].data[q].destroy()
}}this.graphicsData=null;
this.currentPath=null;
this._webgl=null;
this._localBounds=null
}
},{"../const":13,"../display/Container":14,"../math":23,"../renderers/canvas/utils/CanvasBuffer":35,"../renderers/canvas/utils/CanvasGraphics":36,"../textures/Texture":62,"./GraphicsData":17}],17:[function(f,g,e){function h(i,n,k,o,l,m,j){this.lineWidth=i;
this.lineColor=n;
this.lineAlpha=k;
this._lineTint=n;
this.fillColor=o;
this.fillAlpha=l;
this._fillTint=o;
this.fill=m;
this.shape=j;
this.type=j.type
}h.prototype.constructor=h;
g.exports=h;
h.prototype.clone=function(){return new h(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.fill,this.shape)
};
h.prototype.destroy=function(){this.shape=null
}
},{}],18:[function(g,f,h){var m=g("../../utils"),k=g("../../math"),o=g("../../const"),n=g("../../renderers/webgl/utils/ObjectRenderer"),l=g("../../renderers/webgl/WebGLRenderer"),e=g("./WebGLGraphicsData"),j=g("earcut");
function i(p){n.call(this,p);
this.graphicsDataPool=[];
this.primitiveShader=null;
this.complexPrimitiveShader=null;
this.maximumSimplePolySize=200
}i.prototype=Object.create(n.prototype);
i.prototype.constructor=i;
f.exports=i;
l.registerPlugin("graphics",i);
i.prototype.onContextChange=function(){};
i.prototype.destroy=function(){n.prototype.destroy.call(this);
for(var p=0;
p<this.graphicsDataPool.length;
++p){this.graphicsDataPool[p].destroy()
}this.graphicsDataPool=null
};
i.prototype.render=function(p){var t=this.renderer;
var v=t.gl;
var r=t.shaderManager.plugins.primitiveShader,u;
if(p.dirty){this.updateGraphics(p)
}var s=p._webGL[v.id];
t.blendModeManager.setBlendMode(p.blendMode);
for(var q=0,w=s.data.length;
q<w;
q++){u=s.data[q];
if(s.data[q].mode===1){t.stencilManager.pushStencil(p,u);
v.uniform1f(t.shaderManager.complexPrimitiveShader.uniforms.alpha._location,p.worldAlpha*u.alpha);
v.drawElements(v.TRIANGLE_FAN,4,v.UNSIGNED_SHORT,(u.indices.length-4)*2);
t.stencilManager.popStencil(p,u)
}else{r=t.shaderManager.primitiveShader;
t.shaderManager.setShader(r);
v.uniformMatrix3fv(r.uniforms.translationMatrix._location,false,p.worldTransform.toArray(true));
v.uniformMatrix3fv(r.uniforms.projectionMatrix._location,false,t.currentRenderTarget.projectionMatrix.toArray(true));
v.uniform3fv(r.uniforms.tint._location,m.hex2rgb(p.tint));
v.uniform1f(r.uniforms.alpha._location,p.worldAlpha);
v.bindBuffer(v.ARRAY_BUFFER,u.buffer);
v.vertexAttribPointer(r.attributes.aVertexPosition,2,v.FLOAT,false,4*6,0);
v.vertexAttribPointer(r.attributes.aColor,4,v.FLOAT,false,4*6,2*4);
v.bindBuffer(v.ELEMENT_ARRAY_BUFFER,u.indexBuffer);
v.drawElements(v.TRIANGLE_STRIP,u.indices.length,v.UNSIGNED_SHORT,0)
}t.drawCount++
}};
i.prototype.updateGraphics=function(p){var v=this.renderer.gl;
var t=p._webGL[v.id];
if(!t){t=p._webGL[v.id]={lastIndex:0,data:[],gl:v}
}p.dirty=false;
var q;
if(p.clearDirty){p.clearDirty=false;
for(q=0;
q<t.data.length;
q++){var w=t.data[q];
w.reset();
this.graphicsDataPool.push(w)
}t.data=[];
t.lastIndex=0
}var u;
for(q=t.lastIndex;
q<p.graphicsData.length;
q++){var s=p.graphicsData[q];
if(s.type===o.SHAPES.POLY){s.points=s.shape.points.slice();
if(s.shape.closed){if(s.points[0]!==s.points[s.points.length-2]||s.points[1]!==s.points[s.points.length-1]){s.points.push(s.points[0],s.points[1])
}}if(s.fill){if(s.points.length>=6){if(s.points.length<this.maximumSimplePolySize*2){u=this.switchMode(t,0);
var r=this.buildPoly(s,u);
if(!r){u=this.switchMode(t,1);
this.buildComplexPoly(s,u)
}}else{u=this.switchMode(t,1);
this.buildComplexPoly(s,u)
}}}if(s.lineWidth>0){u=this.switchMode(t,0);
this.buildLine(s,u)
}}else{u=this.switchMode(t,0);
if(s.type===o.SHAPES.RECT){this.buildRectangle(s,u)
}else{if(s.type===o.SHAPES.CIRC||s.type===o.SHAPES.ELIP){this.buildCircle(s,u)
}else{if(s.type===o.SHAPES.RREC){this.buildRoundedRectangle(s,u)
}}}}t.lastIndex++
}for(q=0;
q<t.data.length;
q++){u=t.data[q];
if(u.dirty){u.upload()
}}};
i.prototype.switchMode=function(q,p){var r;
if(!q.data.length){r=this.graphicsDataPool.pop()||new e(q.gl);
r.mode=p;
q.data.push(r)
}else{r=q.data[q.data.length-1];
if((r.points.length>320000)||r.mode!==p||p===1){r=this.graphicsDataPool.pop()||new e(q.gl);
r.mode=p;
q.data.push(r)
}}r.dirty=true;
return r
};
i.prototype.buildRectangle=function(H,v){var t=H.shape;
var D=t.x;
var C=t.y;
var q=t.width;
var G=t.height;
if(H.fill){var u=m.hex2rgb(H.fillColor);
var s=H.fillAlpha;
var p=u[0]*s;
var w=u[1]*s;
var B=u[2]*s;
var E=v.points;
var F=v.indices;
var A=E.length/6;
E.push(D,C);
E.push(p,w,B,s);
E.push(D+q,C);
E.push(p,w,B,s);
E.push(D,C+G);
E.push(p,w,B,s);
E.push(D+q,C+G);
E.push(p,w,B,s);
F.push(A,A,A+1,A+2,A+3,A+3)
}if(H.lineWidth){var z=H.points;
H.points=[D,C,D+q,C,D+q,C+G,D,C+G,D,C];
this.buildLine(H,v);
H.points=z
}};
i.prototype.buildRoundedRectangle=function(A,L){var p=A.shape;
var z=p.x;
var w=p.y;
var E=p.width;
var D=p.height;
var s=p.radius;
var B=[];
B.push(z,w+s);
this.quadraticBezierCurve(z,w+D-s,z,w+D,z+s,w+D,B);
this.quadraticBezierCurve(z+E-s,w+D,z+E,w+D,z+E,w+D-s,B);
this.quadraticBezierCurve(z+E,w+s,z+E,w,z+E-s,w,B);
this.quadraticBezierCurve(z+s,w,z,w,z,w+s+1e-10,B);
if(A.fill){var G=m.hex2rgb(A.fillColor);
var t=A.fillAlpha;
var C=G[0]*t;
var I=G[1]*t;
var J=G[2]*t;
var K=L.points;
var u=L.indices;
var q=K.length/6;
var F=j(B,null,2);
var H=0;
for(H=0;
H<F.length;
H+=3){u.push(F[H]+q);
u.push(F[H]+q);
u.push(F[H+1]+q);
u.push(F[H+2]+q);
u.push(F[H+2]+q)
}for(H=0;
H<B.length;
H++){K.push(B[H],B[++H],C,I,J,t)
}}if(A.lineWidth){var v=A.points;
A.points=B;
this.buildLine(A,L);
A.points=v
}};
i.prototype.quadraticBezierCurve=function(A,w,p,I,r,q,G){var H,t,E,s,v,u,B=20,F=G||[];
function z(J,y,x){var K=y-J;
return J+(K*x)
}var C=0;
for(var D=0;
D<=B;
D++){C=D/B;
H=z(A,p,C);
t=z(w,I,C);
E=z(p,r,C);
s=z(I,q,C);
v=z(H,E,C);
u=z(t,s,C);
F.push(v,u)
}return F
};
i.prototype.buildCircle=function(w,K){var G=w.shape;
var v=G.x;
var u=G.y;
var C;
var B;
if(w.type===o.SHAPES.CIRC){C=G.radius;
B=G.radius
}else{C=G.width;
B=G.height
}var z=Math.floor(30*Math.sqrt(G.radius))||Math.floor(15*Math.sqrt(G.width+G.height));
var H=(Math.PI*2)/z;
var E=0;
if(w.fill){var D=m.hex2rgb(w.fillColor);
var q=w.fillAlpha;
var A=D[0]*q;
var F=D[1]*q;
var I=D[2]*q;
var J=K.points;
var s=K.indices;
var p=J.length/6;
s.push(p);
for(E=0;
E<z+1;
E++){J.push(v,u,A,F,I,q);
J.push(v+Math.sin(H*E)*C,u+Math.cos(H*E)*B,A,F,I,q);
s.push(p++,p++)
}s.push(p-1)
}if(w.lineWidth){var t=w.points;
w.points=[];
for(E=0;
E<z+1;
E++){w.points.push(v+Math.sin(H*E)*C,u+Math.cos(H*E)*B)
}this.buildLine(w,K);
w.points=t
}};
i.prototype.buildLine=function(ad,N){var Z=0;
var Q=ad.points;
if(Q.length===0){return
}var E=new k.Point(Q[0],Q[1]);
var x=new k.Point(Q[Q.length-2],Q[Q.length-1]);
if(E.x===x.x&&E.y===x.y){Q=Q.slice();
Q.pop();
Q.pop();
x=new k.Point(Q[Q.length-2],Q[Q.length-1]);
var G=x.x+(E.x-x.x)*0.5;
var D=x.y+(E.y-x.y)*0.5;
Q.unshift(G,D);
Q.push(G,D)
}var aa=N.points;
var v=N.indices;
var F=Q.length/2;
var C=Q.length;
var ac=aa.length/6;
var p=ad.lineWidth/2;
var P=m.hex2rgb(ad.lineColor);
var Y=ad.lineAlpha;
var V=P[0]*Y;
var ab=P[1]*Y;
var ae=P[2]*Y;
var B,A,S,R,K,J,u,t;
var U,T,I,H,s,q;
var X,O,z,W,M,y;
var af,L,w;
S=Q[0];
R=Q[1];
K=Q[2];
J=Q[3];
U=-(R-J);
T=S-K;
w=Math.sqrt(U*U+T*T);
U/=w;
T/=w;
U*=p;
T*=p;
aa.push(S-U,R-T,V,ab,ae,Y);
aa.push(S+U,R+T,V,ab,ae,Y);
for(Z=1;
Z<F-1;
Z++){S=Q[(Z-1)*2];
R=Q[(Z-1)*2+1];
K=Q[(Z)*2];
J=Q[(Z)*2+1];
u=Q[(Z+1)*2];
t=Q[(Z+1)*2+1];
U=-(R-J);
T=S-K;
w=Math.sqrt(U*U+T*T);
U/=w;
T/=w;
U*=p;
T*=p;
I=-(J-t);
H=K-u;
w=Math.sqrt(I*I+H*H);
I/=w;
H/=w;
I*=p;
H*=p;
X=(-T+R)-(-T+J);
O=(-U+K)-(-U+S);
z=(-U+S)*(-T+J)-(-U+K)*(-T+R);
W=(-H+t)-(-H+J);
M=(-I+K)-(-I+u);
y=(-I+u)*(-H+J)-(-I+K)*(-H+t);
af=X*M-W*O;
if(Math.abs(af)<0.1){af+=10.1;
aa.push(K-U,J-T,V,ab,ae,Y);
aa.push(K+U,J+T,V,ab,ae,Y);
continue
}B=(O*y-M*z)/af;
A=(W*z-X*y)/af;
L=(B-K)*(B-K)+(A-J)+(A-J);
if(L>140*140){s=U-I;
q=T-H;
w=Math.sqrt(s*s+q*q);
s/=w;
q/=w;
s*=p;
q*=p;
aa.push(K-s,J-q);
aa.push(V,ab,ae,Y);
aa.push(K+s,J+q);
aa.push(V,ab,ae,Y);
aa.push(K-s,J-q);
aa.push(V,ab,ae,Y);
C++
}else{aa.push(B,A);
aa.push(V,ab,ae,Y);
aa.push(K-(B-K),J-(A-J));
aa.push(V,ab,ae,Y)
}}S=Q[(F-2)*2];
R=Q[(F-2)*2+1];
K=Q[(F-1)*2];
J=Q[(F-1)*2+1];
U=-(R-J);
T=S-K;
w=Math.sqrt(U*U+T*T);
U/=w;
T/=w;
U*=p;
T*=p;
aa.push(K-U,J-T);
aa.push(V,ab,ae,Y);
aa.push(K+U,J+T);
aa.push(V,ab,ae,Y);
v.push(ac);
for(Z=0;
Z<C;
Z++){v.push(ac++)
}v.push(ac-1)
};
i.prototype.buildComplexPoly=function(C,v){var A=C.points.slice();
if(A.length<6){return
}var B=v.indices;
v.points=A;
v.alpha=C.fillAlpha;
v.color=m.hex2rgb(C.fillColor);
var t=Infinity;
var q=-Infinity;
var s=Infinity;
var p=-Infinity;
var z,w;
for(var u=0;
u<A.length;
u+=2){z=A[u];
w=A[u+1];
t=z<t?z:t;
q=z>q?z:q;
s=w<s?w:s;
p=w>p?w:p
}A.push(t,s,q,s,q,p,t,p);
var r=A.length/2;
for(u=0;
u<r;
u++){B.push(u)
}};
i.prototype.buildPoly=function(D,w){var B=D.points;
if(B.length<6){return
}var A=w.points;
var C=w.indices;
var q=B.length/2;
var u=m.hex2rgb(D.fillColor);
var t=D.fillAlpha;
var p=u[0]*t;
var x=u[1]*t;
var z=u[2]*t;
var s=j(B,null,2);
if(!s){return false
}var y=A.length/6;
var v=0;
for(v=0;
v<s.length;
v+=3){C.push(s[v]+y);
C.push(s[v]+y);
C.push(s[v+1]+y);
C.push(s[v+2]+y);
C.push(s[v+2]+y)
}for(v=0;
v<q;
v++){A.push(B[v*2],B[v*2+1],p,x,z,t)
}return true
}
},{"../../const":13,"../../math":23,"../../renderers/webgl/WebGLRenderer":39,"../../renderers/webgl/utils/ObjectRenderer":53,"../../utils":67,"./WebGLGraphicsData":19,earcut:9}],19:[function(g,h,f){function e(i){this.gl=i;
this.color=[0,0,0];
this.points=[];
this.indices=[];
this.buffer=i.createBuffer();
this.indexBuffer=i.createBuffer();
this.mode=1;
this.alpha=1;
this.dirty=true;
this.glPoints=null;
this.glIndices=null
}e.prototype.constructor=e;
h.exports=e;
e.prototype.reset=function(){this.points.length=0;
this.indices.length=0
};
e.prototype.upload=function(){var i=this.gl;
this.glPoints=new Float32Array(this.points);
i.bindBuffer(i.ARRAY_BUFFER,this.buffer);
i.bufferData(i.ARRAY_BUFFER,this.glPoints,i.STATIC_DRAW);
this.glIndices=new Uint16Array(this.indices);
i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
i.bufferData(i.ELEMENT_ARRAY_BUFFER,this.glIndices,i.STATIC_DRAW);
this.dirty=false
};
e.prototype.destroy=function(){this.color=null;
this.points=null;
this.indices=null;
this.gl.deleteBuffer(this.buffer);
this.gl.deleteBuffer(this.indexBuffer);
this.gl=null;
this.buffer=null;
this.indexBuffer=null;
this.glPoints=null;
this.glIndices=null
}
},{}],20:[function(g,h,f){var e=h.exports=Object.assign(g("./const"),g("./math"),{utils:g("./utils"),ticker:g("./ticker"),DisplayObject:g("./display/DisplayObject"),Container:g("./display/Container"),Sprite:g("./sprites/Sprite"),ParticleContainer:g("./particles/ParticleContainer"),SpriteRenderer:g("./sprites/webgl/SpriteRenderer"),ParticleRenderer:g("./particles/webgl/ParticleRenderer"),Text:g("./text/Text"),Graphics:g("./graphics/Graphics"),GraphicsData:g("./graphics/GraphicsData"),GraphicsRenderer:g("./graphics/webgl/GraphicsRenderer"),Texture:g("./textures/Texture"),BaseTexture:g("./textures/BaseTexture"),RenderTexture:g("./textures/RenderTexture"),VideoBaseTexture:g("./textures/VideoBaseTexture"),TextureUvs:g("./textures/TextureUvs"),CanvasRenderer:g("./renderers/canvas/CanvasRenderer"),CanvasGraphics:g("./renderers/canvas/utils/CanvasGraphics"),CanvasBuffer:g("./renderers/canvas/utils/CanvasBuffer"),WebGLRenderer:g("./renderers/webgl/WebGLRenderer"),ShaderManager:g("./renderers/webgl/managers/ShaderManager"),Shader:g("./renderers/webgl/shaders/Shader"),ObjectRenderer:g("./renderers/webgl/utils/ObjectRenderer"),RenderTarget:g("./renderers/webgl/utils/RenderTarget"),AbstractFilter:g("./renderers/webgl/filters/AbstractFilter"),FXAAFilter:g("./renderers/webgl/filters/FXAAFilter"),SpriteMaskFilter:g("./renderers/webgl/filters/SpriteMaskFilter"),autoDetectRenderer:function(l,i,j,k){l=l||800;
i=i||600;
if(!k&&e.utils.isWebGLSupported()){return new e.WebGLRenderer(l,i,j)
}return new e.CanvasRenderer(l,i,j)
}})
},{"./const":13,"./display/Container":14,"./display/DisplayObject":15,"./graphics/Graphics":16,"./graphics/GraphicsData":17,"./graphics/webgl/GraphicsRenderer":18,"./math":23,"./particles/ParticleContainer":29,"./particles/webgl/ParticleRenderer":31,"./renderers/canvas/CanvasRenderer":34,"./renderers/canvas/utils/CanvasBuffer":35,"./renderers/canvas/utils/CanvasGraphics":36,"./renderers/webgl/WebGLRenderer":39,"./renderers/webgl/filters/AbstractFilter":40,"./renderers/webgl/filters/FXAAFilter":41,"./renderers/webgl/filters/SpriteMaskFilter":42,"./renderers/webgl/managers/ShaderManager":46,"./renderers/webgl/shaders/Shader":51,"./renderers/webgl/utils/ObjectRenderer":53,"./renderers/webgl/utils/RenderTarget":55,"./sprites/Sprite":57,"./sprites/webgl/SpriteRenderer":58,"./text/Text":59,"./textures/BaseTexture":60,"./textures/RenderTexture":61,"./textures/Texture":62,"./textures/TextureUvs":63,"./textures/VideoBaseTexture":64,"./ticker":66,"./utils":67}],21:[function(g,h,f){var i=g("./Point");
function e(){this.a=1;
this.b=0;
this.c=0;
this.d=1;
this.tx=0;
this.ty=0
}e.prototype.constructor=e;
h.exports=e;
e.prototype.fromArray=function(j){this.a=j[0];
this.b=j[1];
this.c=j[3];
this.d=j[4];
this.tx=j[2];
this.ty=j[5]
};
e.prototype.toArray=function(k,j){if(!this.array){this.array=new Float32Array(9)
}var l=j||this.array;
if(k){l[0]=this.a;
l[1]=this.b;
l[2]=0;
l[3]=this.c;
l[4]=this.d;
l[5]=0;
l[6]=this.tx;
l[7]=this.ty;
l[8]=1
}else{l[0]=this.a;
l[1]=this.c;
l[2]=this.tx;
l[3]=this.b;
l[4]=this.d;
l[5]=this.ty;
l[6]=0;
l[7]=0;
l[8]=1
}return l
};
e.prototype.apply=function(m,k){k=k||new i();
var j=m.x;
var l=m.y;
k.x=this.a*j+this.c*l+this.tx;
k.y=this.b*j+this.d*l+this.ty;
return k
};
e.prototype.applyInverse=function(n,k){k=k||new i();
var m=1/(this.a*this.d+this.c*-this.b);
var j=n.x;
var l=n.y;
k.x=this.d*m*j+-this.c*m*l+(this.ty*this.c-this.tx*this.d)*m;
k.y=this.a*m*l+-this.b*m*j+(-this.ty*this.a+this.tx*this.b)*m;
return k
};
e.prototype.translate=function(j,k){this.tx+=j;
this.ty+=k;
return this
};
e.prototype.scale=function(j,k){this.a*=j;
this.d*=k;
this.c*=j;
this.b*=k;
this.tx*=j;
this.ty*=k;
return this
};
e.prototype.rotate=function(o){var n=Math.cos(o);
var l=Math.sin(o);
var k=this.a;
var m=this.c;
var j=this.tx;
this.a=k*n-this.b*l;
this.b=k*l+this.b*n;
this.c=m*n-this.d*l;
this.d=m*l+this.d*n;
this.tx=j*n-this.ty*l;
this.ty=j*l+this.ty*n;
return this
};
e.prototype.append=function(k){var j=this.a;
var l=this.b;
var m=this.c;
var n=this.d;
this.a=k.a*j+k.b*m;
this.b=k.a*l+k.b*n;
this.c=k.c*j+k.d*m;
this.d=k.c*l+k.d*n;
this.tx=k.tx*j+k.ty*m+this.tx;
this.ty=k.tx*l+k.ty*n+this.ty;
return this
};
e.prototype.prepend=function(l){var k=this.tx;
if(l.a!==1||l.b!==0||l.c!==0||l.d!==1){var j=this.a;
var m=this.c;
this.a=j*l.a+this.b*l.c;
this.b=j*l.b+this.b*l.d;
this.c=m*l.a+this.d*l.c;
this.d=m*l.b+this.d*l.d
}this.tx=k*l.a+this.ty*l.c+l.tx;
this.ty=k*l.b+this.ty*l.d+l.ty;
return this
};
e.prototype.invert=function(){var k=this.a;
var l=this.b;
var m=this.c;
var o=this.d;
var j=this.tx;
var p=k*o-l*m;
this.a=o/p;
this.b=-l/p;
this.c=-m/p;
this.d=k/p;
this.tx=(m*this.ty-o*j)/p;
this.ty=-(k*this.ty-l*j)/p;
return this
};
e.prototype.identity=function(){this.a=1;
this.b=0;
this.c=0;
this.d=1;
this.tx=0;
this.ty=0;
return this
};
e.prototype.clone=function(){var j=new e();
j.a=this.a;
j.b=this.b;
j.c=this.c;
j.d=this.d;
j.tx=this.tx;
j.ty=this.ty;
return j
};
e.prototype.copy=function(j){j.a=this.a;
j.b=this.b;
j.c=this.c;
j.d=this.d;
j.tx=this.tx;
j.ty=this.ty;
return j
};
e.IDENTITY=new e();
e.TEMP_MATRIX=new e()
},{"./Point":22}],22:[function(f,g,e){function h(i,j){this.x=i||0;
this.y=j||0
}h.prototype.constructor=h;
g.exports=h;
h.prototype.clone=function(){return new h(this.x,this.y)
};
h.prototype.copy=function(i){this.set(i.x,i.y)
};
h.prototype.equals=function(i){return(i.x===this.x)&&(i.y===this.y)
};
h.prototype.set=function(i,j){this.x=i||0;
this.y=j||((j!==0)?this.x:0)
}
},{}],23:[function(f,g,e){g.exports={Point:f("./Point"),Matrix:f("./Matrix"),Circle:f("./shapes/Circle"),Ellipse:f("./shapes/Ellipse"),Polygon:f("./shapes/Polygon"),Rectangle:f("./shapes/Rectangle"),RoundedRectangle:f("./shapes/RoundedRectangle")}
},{"./Matrix":21,"./Point":22,"./shapes/Circle":24,"./shapes/Ellipse":25,"./shapes/Polygon":26,"./shapes/Rectangle":27,"./shapes/RoundedRectangle":28}],24:[function(g,i,f){var h=g("./Rectangle"),e=g("../../const");
function j(l,m,k){this.x=l||0;
this.y=m||0;
this.radius=k||0;
this.type=e.SHAPES.CIRC
}j.prototype.constructor=j;
i.exports=j;
j.prototype.clone=function(){return new j(this.x,this.y,this.radius)
};
j.prototype.contains=function(k,o){if(this.radius<=0){return false
}var n=(this.x-k),m=(this.y-o),l=this.radius*this.radius;
n*=n;
m*=m;
return(n+m<=l)
};
j.prototype.getBounds=function(){return new h(this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2)
}
},{"../../const":13,"./Rectangle":27}],25:[function(g,j,f){var i=g("./Rectangle"),e=g("../../const");
function h(l,n,m,k){this.x=l||0;
this.y=n||0;
this.width=m||0;
this.height=k||0;
this.type=e.SHAPES.ELIP
}h.prototype.constructor=h;
j.exports=h;
h.prototype.clone=function(){return new h(this.x,this.y,this.width,this.height)
};
h.prototype.contains=function(l,n){if(this.width<=0||this.height<=0){return false
}var m=((l-this.x)/this.width),k=((n-this.y)/this.height);
m*=m;
k*=k;
return(m+k<=1)
};
h.prototype.getBounds=function(){return new i(this.x-this.width,this.y-this.height,this.width,this.height)
}
},{"../../const":13,"./Rectangle":27}],26:[function(h,i,g){var j=h("../Point"),e=h("../../const");
function f(l){var o=l;
if(!Array.isArray(o)){o=new Array(arguments.length);
for(var k=0;
k<o.length;
++k){o[k]=arguments[k]
}}if(o[0] instanceof j){var q=[];
for(var n=0,m=o.length;
n<m;
n++){q.push(o[n].x,o[n].y)
}o=q
}this.closed=true;
this.points=o;
this.type=e.SHAPES.POLY
}f.prototype.constructor=f;
i.exports=f;
f.prototype.clone=function(){return new f(this.points.slice())
};
f.prototype.contains=function(u,t){var n=false;
var k=this.points.length/2;
for(var q=0,p=k-1;
q<k;
p=q++){var s=this.points[q*2],o=this.points[q*2+1],r=this.points[p*2],m=this.points[p*2+1],l=((o>t)!==(m>t))&&(u<(r-s)*(t-o)/(m-o)+s);
if(l){n=!n
}}return n
}
},{"../../const":13,"../Point":22}],27:[function(g,i,f){var e=g("../../const");
function h(k,m,l,j){this.x=k||0;
this.y=m||0;
this.width=l||0;
this.height=j||0;
this.type=e.SHAPES.RECT
}h.prototype.constructor=h;
i.exports=h;
h.EMPTY=new h(0,0,0,0);
h.prototype.clone=function(){return new h(this.x,this.y,this.width,this.height)
};
h.prototype.contains=function(j,k){if(this.width<=0||this.height<=0){return false
}if(j>=this.x&&j<this.x+this.width){if(k>=this.y&&k<this.y+this.height){return true
}}return false
}
},{"../../const":13}],28:[function(g,h,f){var e=g("../../const");
function i(l,n,m,k,j){this.x=l||0;
this.y=n||0;
this.width=m||0;
this.height=k||0;
this.radius=j||20;
this.type=e.SHAPES.RREC
}i.prototype.constructor=i;
h.exports=i;
i.prototype.clone=function(){return new i(this.x,this.y,this.width,this.height,this.radius)
};
i.prototype.contains=function(j,k){if(this.width<=0||this.height<=0){return false
}if(j>=this.x&&j<=this.x+this.width){if(k>=this.y&&k<=this.y+this.height){return true
}}return false
}
},{"../../const":13}],29:[function(h,i,g){var f=h("../display/Container"),e=h("../const");
function j(n,m,l){f.call(this);
l=l||15000;
n=n||15000;
var k=16384;
if(l>k){l=k
}if(l>n){l=n
}this._properties=[false,true,false,false,false];
this._maxSize=n;
this._batchSize=l;
this._buffers=null;
this._bufferToUpdate=0;
this.interactiveChildren=false;
this.blendMode=e.BLEND_MODES.NORMAL;
this.roundPixels=true;
this.setProperties(m)
}j.prototype=Object.create(f.prototype);
j.prototype.constructor=j;
i.exports=j;
j.prototype.setProperties=function(k){if(k){this._properties[0]="scale" in k?!!k.scale:this._properties[0];
this._properties[1]="position" in k?!!k.position:this._properties[1];
this._properties[2]="rotation" in k?!!k.rotation:this._properties[2];
this._properties[3]="uvs" in k?!!k.uvs:this._properties[3];
this._properties[4]="alpha" in k?!!k.alpha:this._properties[4]
}};
j.prototype.updateTransform=function(){this.displayObjectUpdateTransform()
};
j.prototype.renderWebGL=function(k){if(!this.visible||this.worldAlpha<=0||!this.children.length||!this.renderable){return
}k.setObjectRenderer(k.plugins.particle);
k.plugins.particle.render(this)
};
j.prototype.onChildrenChange=function(l){var k=Math.floor(l/this._batchSize);
if(k<this._bufferToUpdate){this._bufferToUpdate=k
}};
j.prototype.renderCanvas=function(u){if(!this.visible||this.worldAlpha<=0||!this.children.length||!this.renderable){return
}var k=u.context;
var o=this.worldTransform;
var v=true;
var t=0;
var s=0;
var p=0;
var n=0;
k.globalAlpha=this.worldAlpha;
this.displayObjectUpdateTransform();
for(var q=0;
q<this.children.length;
++q){var m=this.children[q];
if(!m.visible){continue
}var l=m.texture.frame;
k.globalAlpha=this.worldAlpha*m.alpha;
if(m.rotation%(Math.PI*2)===0){if(v){k.setTransform(o.a,o.b,o.c,o.d,o.tx,o.ty);
v=false
}t=((m.anchor.x)*(-l.width*m.scale.x)+m.position.x+0.5);
s=((m.anchor.y)*(-l.height*m.scale.y)+m.position.y+0.5);
p=l.width*m.scale.x;
n=l.height*m.scale.y
}else{if(!v){v=true
}m.displayObjectUpdateTransform();
var r=m.worldTransform;
if(u.roundPixels){k.setTransform(r.a,r.b,r.c,r.d,r.tx|0,r.ty|0)
}else{k.setTransform(r.a,r.b,r.c,r.d,r.tx,r.ty)
}t=((m.anchor.x)*(-l.width)+0.5);
s=((m.anchor.y)*(-l.height)+0.5);
p=l.width;
n=l.height
}k.drawImage(m.texture.baseTexture.source,l.x,l.y,l.width,l.height,t,s,p,n)
}};
j.prototype.destroy=function(){f.prototype.destroy.apply(this,arguments);
if(this._buffers){for(var k=0;
k<this._buffers.length;
++k){this._buffers[k].destroy()
}}this._properties=null;
this._buffers=null
}
},{"../const":13,"../display/Container":14}],30:[function(f,g,e){function h(o,l,n,k){this.gl=o;
this.vertSize=2;
this.vertByteSize=this.vertSize*4;
this.size=k;
this.dynamicProperties=[];
this.staticProperties=[];
for(var j=0;
j<l.length;
j++){var m=l[j];
if(n[j]){this.dynamicProperties.push(m)
}else{this.staticProperties.push(m)
}}this.staticStride=0;
this.staticBuffer=null;
this.staticData=null;
this.dynamicStride=0;
this.dynamicBuffer=null;
this.dynamicData=null;
this.initBuffers()
}h.prototype.constructor=h;
g.exports=h;
h.prototype.initBuffers=function(){var n=this.gl;
var j;
var l;
var m=0;
this.dynamicStride=0;
for(j=0;
j<this.dynamicProperties.length;
j++){l=this.dynamicProperties[j];
l.offset=m;
m+=l.size;
this.dynamicStride+=l.size
}this.dynamicData=new Float32Array(this.size*this.dynamicStride*4);
this.dynamicBuffer=n.createBuffer();
n.bindBuffer(n.ARRAY_BUFFER,this.dynamicBuffer);
n.bufferData(n.ARRAY_BUFFER,this.dynamicData,n.DYNAMIC_DRAW);
var k=0;
this.staticStride=0;
for(j=0;
j<this.staticProperties.length;
j++){l=this.staticProperties[j];
l.offset=k;
k+=l.size;
this.staticStride+=l.size
}this.staticData=new Float32Array(this.size*this.staticStride*4);
this.staticBuffer=n.createBuffer();
n.bindBuffer(n.ARRAY_BUFFER,this.staticBuffer);
n.bufferData(n.ARRAY_BUFFER,this.staticData,n.DYNAMIC_DRAW)
};
h.prototype.uploadDynamic=function(l,o,k){var n=this.gl;
for(var j=0;
j<this.dynamicProperties.length;
j++){var m=this.dynamicProperties[j];
m.uploadFunction(l,o,k,this.dynamicData,this.dynamicStride,m.offset)
}n.bindBuffer(n.ARRAY_BUFFER,this.dynamicBuffer);
n.bufferSubData(n.ARRAY_BUFFER,0,this.dynamicData)
};
h.prototype.uploadStatic=function(l,o,k){var n=this.gl;
for(var j=0;
j<this.staticProperties.length;
j++){var m=this.staticProperties[j];
m.uploadFunction(l,o,k,this.staticData,this.staticStride,m.offset)
}n.bindBuffer(n.ARRAY_BUFFER,this.staticBuffer);
n.bufferSubData(n.ARRAY_BUFFER,0,this.staticData)
};
h.prototype.bind=function(){var l=this.gl;
var j,k;
l.bindBuffer(l.ARRAY_BUFFER,this.dynamicBuffer);
for(j=0;
j<this.dynamicProperties.length;
j++){k=this.dynamicProperties[j];
l.vertexAttribPointer(k.attribute,k.size,l.FLOAT,false,this.dynamicStride*4,k.offset*4)
}l.bindBuffer(l.ARRAY_BUFFER,this.staticBuffer);
for(j=0;
j<this.staticProperties.length;
j++){k=this.staticProperties[j];
l.vertexAttribPointer(k.attribute,k.size,l.FLOAT,false,this.staticStride*4,k.offset*4)
}};
h.prototype.destroy=function(){this.dynamicProperties=null;
this.dynamicData=null;
this.gl.deleteBuffer(this.dynamicBuffer);
this.staticProperties=null;
this.staticData=null;
this.gl.deleteBuffer(this.staticBuffer)
}
},{}],31:[function(h,g,j){var m=h("../../renderers/webgl/utils/ObjectRenderer"),l=h("../../renderers/webgl/WebGLRenderer"),i=h("./ParticleShader"),f=h("./ParticleBuffer"),k=h("../../math");
function e(p){m.call(this,p);
var q=98304;
this.indices=new Uint16Array(q);
for(var o=0,n=0;
o<q;
o+=6,n+=4){this.indices[o+0]=n+0;
this.indices[o+1]=n+1;
this.indices[o+2]=n+2;
this.indices[o+3]=n+0;
this.indices[o+4]=n+2;
this.indices[o+5]=n+3
}this.shader=null;
this.indexBuffer=null;
this.properties=null;
this.tempMatrix=new k.Matrix()
}e.prototype=Object.create(m.prototype);
e.prototype.constructor=e;
g.exports=e;
l.registerPlugin("particle",e);
e.prototype.onContextChange=function(){var n=this.renderer.gl;
this.shader=new i(this.renderer.shaderManager);
this.indexBuffer=n.createBuffer();
n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
n.bufferData(n.ELEMENT_ARRAY_BUFFER,this.indices,n.STATIC_DRAW);
this.properties=[{attribute:this.shader.attributes.aVertexPosition,size:2,uploadFunction:this.uploadVertices,offset:0},{attribute:this.shader.attributes.aPositionCoord,size:2,uploadFunction:this.uploadPosition,offset:0},{attribute:this.shader.attributes.aRotation,size:1,uploadFunction:this.uploadRotation,offset:0},{attribute:this.shader.attributes.aTextureCoord,size:2,uploadFunction:this.uploadUvs,offset:0},{attribute:this.shader.attributes.aColor,size:1,uploadFunction:this.uploadAlpha,offset:0}]
};
e.prototype.start=function(){var o=this.renderer.gl;
o.activeTexture(o.TEXTURE0);
o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
var n=this.shader;
this.renderer.shaderManager.setShader(n)
};
e.prototype.render=function(o){var p=o.children,x=p.length,y=o._maxSize,w=o._batchSize;
if(x===0){return
}else{if(x>y){x=y
}}if(!o._buffers){o._buffers=this.generateBuffers(o)
}this.renderer.blendModeManager.setBlendMode(o.blendMode);
var v=this.renderer.gl;
var q=o.worldTransform.copy(this.tempMatrix);
q.prepend(this.renderer.currentRenderTarget.projectionMatrix);
v.uniformMatrix3fv(this.shader.uniforms.projectionMatrix._location,false,q.toArray(true));
v.uniform1f(this.shader.uniforms.uAlpha._location,o.worldAlpha);
var n=p[0]._texture.baseTexture;
if(!n._glTextures[v.id]){if(!this.renderer.updateTexture(n)){return
}if(!o._properties[0]||!o._properties[3]){o._bufferToUpdate=0
}}else{v.bindTexture(v.TEXTURE_2D,n._glTextures[v.id])
}for(var t=0,s=0;
t<x;
t+=w,s+=1){var u=(x-t);
if(u>w){u=w
}var r=o._buffers[s];
r.uploadDynamic(p,t,u);
if(o._bufferToUpdate===s){r.uploadStatic(p,t,u);
o._bufferToUpdate=s+1
}r.bind(this.shader);
v.drawElements(v.TRIANGLES,u*6,v.UNSIGNED_SHORT,0);
this.renderer.drawCount++
}};
e.prototype.generateBuffers=function(o){var t=this.renderer.gl,n=[],r=o._maxSize,q=o._batchSize,s=o._properties,p;
for(p=0;
p<r;
p+=q){n.push(new f(t,this.properties,s,q))
}return n
};
e.prototype.uploadVertices=function(o,B,t,v,n,q){var C,w,p,A,z,u,s,y,x;
for(var r=0;
r<t;
r++){C=o[B+r];
w=C._texture;
A=C.scale.x;
z=C.scale.y;
if(w.trim){p=w.trim;
s=p.x-C.anchor.x*p.width;
u=s+w.crop.width;
x=p.y-C.anchor.y*p.height;
y=x+w.crop.height
}else{u=(w._frame.width)*(1-C.anchor.x);
s=(w._frame.width)*-C.anchor.x;
y=w._frame.height*(1-C.anchor.y);
x=w._frame.height*-C.anchor.y
}v[q]=s*A;
v[q+1]=x*z;
v[q+n]=u*A;
v[q+n+1]=x*z;
v[q+n*2]=u*A;
v[q+n*2+1]=y*z;
v[q+n*3]=s*A;
v[q+n*3+1]=y*z;
q+=n*4
}};
e.prototype.uploadPosition=function(p,t,o,u,r,s){for(var n=0;
n<o;
n++){var q=p[t+n].position;
u[s]=q.x;
u[s+1]=q.y;
u[s+r]=q.x;
u[s+r+1]=q.y;
u[s+r*2]=q.x;
u[s+r*2+1]=q.y;
u[s+r*3]=q.x;
u[s+r*3+1]=q.y;
s+=r*4
}};
e.prototype.uploadRotation=function(q,t,p,u,r,s){for(var o=0;
o<p;
o++){var n=q[t+o].rotation;
u[s]=n;
u[s+r]=n;
u[s+r*2]=n;
u[s+r*3]=n;
s+=r*4
}};
e.prototype.uploadUvs=function(q,t,p,u,r,s){for(var o=0;
o<p;
o++){var n=q[t+o]._texture._uvs;
if(n){u[s]=n.x0;
u[s+1]=n.y0;
u[s+r]=n.x1;
u[s+r+1]=n.y1;
u[s+r*2]=n.x2;
u[s+r*2+1]=n.y2;
u[s+r*3]=n.x3;
u[s+r*3+1]=n.y3;
s+=r*4
}else{u[s]=0;
u[s+1]=0;
u[s+r]=0;
u[s+r+1]=0;
u[s+r*2]=0;
u[s+r*2+1]=0;
u[s+r*3]=0;
u[s+r*3+1]=0;
s+=r*4
}}};
e.prototype.uploadAlpha=function(p,t,o,u,r,s){for(var n=0;
n<o;
n++){var q=p[t+n].alpha;
u[s]=q;
u[s+r]=q;
u[s+r*2]=q;
u[s+r*3]=q;
s+=r*4
}};
e.prototype.destroy=function(){if(this.renderer.gl){this.renderer.gl.deleteBuffer(this.indexBuffer)
}m.prototype.destroy.apply(this,arguments);
this.shader.destroy();
this.indices=null;
this.tempMatrix=null
}
},{"../../math":23,"../../renderers/webgl/WebGLRenderer":39,"../../renderers/webgl/utils/ObjectRenderer":53,"./ParticleBuffer":30,"./ParticleShader":32}],32:[function(h,i,f){var g=h("../../renderers/webgl/shaders/TextureShader");
function e(j){g.call(this,j,["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute float aColor;","attribute vec2 aPositionCoord;","attribute vec2 aScale;","attribute float aRotation;","uniform mat3 projectionMatrix;","varying vec2 vTextureCoord;","varying float vColor;","void main(void){","   vec2 v = aVertexPosition;","   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);","   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);","   v = v + aPositionCoord;","   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vColor = aColor;","}"].join("\n"),["precision lowp float;","varying vec2 vTextureCoord;","varying float vColor;","uniform sampler2D uSampler;","uniform float uAlpha;","void main(void){","  vec4 color = texture2D(uSampler, vTextureCoord) * vColor * uAlpha;","  if (color.a == 0.0) discard;","  gl_FragColor = color;","}"].join("\n"),{uAlpha:{type:"1f",value:1}},{aPositionCoord:0,aRotation:0})
}e.prototype=Object.create(g.prototype);
e.prototype.constructor=e;
i.exports=e
},{"../../renderers/webgl/shaders/TextureShader":52}],33:[function(i,j,h){var g=i("../utils"),l=i("../math"),e=i("../const"),k=i("eventemitter3");
function f(q,p,m,n){k.call(this);
g.sayHello(q);
if(n){for(var o in e.DEFAULT_RENDER_OPTIONS){if(typeof n[o]==="undefined"){n[o]=e.DEFAULT_RENDER_OPTIONS[o]
}}}else{n=e.DEFAULT_RENDER_OPTIONS
}this.type=e.RENDERER_TYPE.UNKNOWN;
this.width=p||800;
this.height=m||600;
this.view=n.view||document.createElement("canvas");
this.resolution=n.resolution;
this.transparent=n.transparent;
this.autoResize=n.autoResize||false;
this.blendModes=null;
this.preserveDrawingBuffer=n.preserveDrawingBuffer;
this.clearBeforeRender=n.clearBeforeRender;
this.roundPixels=n.roundPixels;
this._backgroundColor=0;
this._backgroundColorRgb=[0,0,0];
this._backgroundColorString="#000000";
this.backgroundColor=n.backgroundColor||this._backgroundColor;
this._tempDisplayObjectParent={worldTransform:new l.Matrix(),worldAlpha:1,children:[]};
this._lastObjectRendered=this._tempDisplayObjectParent
}f.prototype=Object.create(k.prototype);
f.prototype.constructor=f;
j.exports=f;
Object.defineProperties(f.prototype,{backgroundColor:{get:function(){return this._backgroundColor
},set:function(m){this._backgroundColor=m;
this._backgroundColorString=g.hex2string(m);
g.hex2rgb(m,this._backgroundColorRgb)
}}});
f.prototype.resize=function(n,m){this.width=n*this.resolution;
this.height=m*this.resolution;
this.view.width=this.width;
this.view.height=this.height;
if(this.autoResize){this.view.style.width=this.width/this.resolution+"px";
this.view.style.height=this.height/this.resolution+"px"
}};
f.prototype.destroy=function(m){if(m&&this.view.parentNode){this.view.parentNode.removeChild(this.view)
}this.type=e.RENDERER_TYPE.UNKNOWN;
this.width=0;
this.height=0;
this.view=null;
this.resolution=0;
this.transparent=false;
this.autoResize=false;
this.blendModes=null;
this.preserveDrawingBuffer=false;
this.clearBeforeRender=false;
this.roundPixels=false;
this._backgroundColor=0;
this._backgroundColorRgb=null;
this._backgroundColorString=null
}
},{"../const":13,"../math":23,"../utils":67,eventemitter3:10}],34:[function(g,f,h){var l=g("../SystemRenderer"),e=g("./utils/CanvasMaskManager"),k=g("../../utils"),j=g("../../math"),m=g("../../const");
function i(p,n,o){o=o||{};
l.call(this,"Canvas",p,n,o);
this.type=m.RENDERER_TYPE.CANVAS;
this.context=this.view.getContext("2d",{alpha:this.transparent});
this.refresh=true;
this.maskManager=new e();
this.smoothProperty="imageSmoothingEnabled";
if(!this.context.imageSmoothingEnabled){if(this.context.webkitImageSmoothingEnabled){this.smoothProperty="webkitImageSmoothingEnabled"
}else{if(this.context.mozImageSmoothingEnabled){this.smoothProperty="mozImageSmoothingEnabled"
}else{if(this.context.oImageSmoothingEnabled){this.smoothProperty="oImageSmoothingEnabled"
}else{if(this.context.msImageSmoothingEnabled){this.smoothProperty="msImageSmoothingEnabled"
}}}}}this.initPlugins();
this._mapBlendModes();
this._tempDisplayObjectParent={worldTransform:new j.Matrix(),worldAlpha:1};
this.resize(p,n)
}i.prototype=Object.create(l.prototype);
i.prototype.constructor=i;
f.exports=i;
k.pluginTarget.mixin(i);
i.prototype.render=function(n){var o=n.parent;
this._lastObjectRendered=n;
n.parent=this._tempDisplayObjectParent;
n.updateTransform();
n.parent=o;
this.context.setTransform(1,0,0,1,0,0);
this.context.globalAlpha=1;
this.context.globalCompositeOperation=this.blendModes[m.BLEND_MODES.NORMAL];
if(navigator.isCocoonJS&&this.view.screencanvas){this.context.fillStyle="black";
this.context.clear()
}if(this.clearBeforeRender){if(this.transparent){this.context.clearRect(0,0,this.width,this.height)
}else{this.context.fillStyle=this._backgroundColorString;
this.context.fillRect(0,0,this.width,this.height)
}}this.renderDisplayObject(n,this.context)
};
i.prototype.destroy=function(n){this.destroyPlugins();
l.prototype.destroy.call(this,n);
this.context=null;
this.refresh=true;
this.maskManager.destroy();
this.maskManager=null;
this.smoothProperty=null
};
i.prototype.renderDisplayObject=function(p,o){var n=this.context;
this.context=o;
p.renderCanvas(this);
this.context=n
};
i.prototype.resize=function(n,o){l.prototype.resize.call(this,n,o);
if(this.smoothProperty){this.context[this.smoothProperty]=(m.SCALE_MODES.DEFAULT===m.SCALE_MODES.LINEAR)
}};
i.prototype._mapBlendModes=function(){if(!this.blendModes){this.blendModes={};
if(k.canUseNewCanvasBlendModes()){this.blendModes[m.BLEND_MODES.NORMAL]="source-over";
this.blendModes[m.BLEND_MODES.ADD]="lighter";
this.blendModes[m.BLEND_MODES.MULTIPLY]="multiply";
this.blendModes[m.BLEND_MODES.SCREEN]="screen";
this.blendModes[m.BLEND_MODES.OVERLAY]="overlay";
this.blendModes[m.BLEND_MODES.DARKEN]="darken";
this.blendModes[m.BLEND_MODES.LIGHTEN]="lighten";
this.blendModes[m.BLEND_MODES.COLOR_DODGE]="color-dodge";
this.blendModes[m.BLEND_MODES.COLOR_BURN]="color-burn";
this.blendModes[m.BLEND_MODES.HARD_LIGHT]="hard-light";
this.blendModes[m.BLEND_MODES.SOFT_LIGHT]="soft-light";
this.blendModes[m.BLEND_MODES.DIFFERENCE]="difference";
this.blendModes[m.BLEND_MODES.EXCLUSION]="exclusion";
this.blendModes[m.BLEND_MODES.HUE]="hue";
this.blendModes[m.BLEND_MODES.SATURATION]="saturate";
this.blendModes[m.BLEND_MODES.COLOR]="color";
this.blendModes[m.BLEND_MODES.LUMINOSITY]="luminosity"
}else{this.blendModes[m.BLEND_MODES.NORMAL]="source-over";
this.blendModes[m.BLEND_MODES.ADD]="lighter";
this.blendModes[m.BLEND_MODES.MULTIPLY]="source-over";
this.blendModes[m.BLEND_MODES.SCREEN]="source-over";
this.blendModes[m.BLEND_MODES.OVERLAY]="source-over";
this.blendModes[m.BLEND_MODES.DARKEN]="source-over";
this.blendModes[m.BLEND_MODES.LIGHTEN]="source-over";
this.blendModes[m.BLEND_MODES.COLOR_DODGE]="source-over";
this.blendModes[m.BLEND_MODES.COLOR_BURN]="source-over";
this.blendModes[m.BLEND_MODES.HARD_LIGHT]="source-over";
this.blendModes[m.BLEND_MODES.SOFT_LIGHT]="source-over";
this.blendModes[m.BLEND_MODES.DIFFERENCE]="source-over";
this.blendModes[m.BLEND_MODES.EXCLUSION]="source-over";
this.blendModes[m.BLEND_MODES.HUE]="source-over";
this.blendModes[m.BLEND_MODES.SATURATION]="source-over";
this.blendModes[m.BLEND_MODES.COLOR]="source-over";
this.blendModes[m.BLEND_MODES.LUMINOSITY]="source-over"
}}}
},{"../../const":13,"../../math":23,"../../utils":67,"../SystemRenderer":33,"./utils/CanvasMaskManager":37}],35:[function(f,h,e){function g(j,i){this.canvas=document.createElement("canvas");
this.context=this.canvas.getContext("2d");
this.canvas.width=j;
this.canvas.height=i
}g.prototype.constructor=g;
h.exports=g;
Object.defineProperties(g.prototype,{width:{get:function(){return this.canvas.width
},set:function(i){this.canvas.width=i
}},height:{get:function(){return this.canvas.height
},set:function(i){this.canvas.height=i
}}});
g.prototype.clear=function(){this.context.setTransform(1,0,0,1,0,0);
this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
};
g.prototype.resize=function(j,i){this.canvas.width=j;
this.canvas.height=i
};
g.prototype.destroy=function(){this.context=null;
this.canvas=null
}
},{}],36:[function(g,h,f){var e=g("../../../const");
var i={};
h.exports=i;
i.renderGraphics=function(L,n){var G=L.worldAlpha;
if(L.dirty){this.updateGraphicsTint(L);
L.dirty=false
}for(var J=0;
J<L.graphicsData.length;
J++){var N=L.graphicsData[J];
var m=N.shape;
var s=N._fillTint;
var l=N._lineTint;
n.lineWidth=N.lineWidth;
if(N.type===e.SHAPES.POLY){n.beginPath();
var I=m.points;
n.moveTo(I[0],I[1]);
for(var H=1;
H<I.length/2;
H++){n.lineTo(I[H*2],I[H*2+1])
}if(m.closed){n.lineTo(I[0],I[1])
}if(I[0]===I[I.length-2]&&I[1]===I[I.length-1]){n.closePath()
}if(N.fill){n.globalAlpha=N.fillAlpha*G;
n.fillStyle="#"+("00000"+(s|0).toString(16)).substr(-6);
n.fill()
}if(N.lineWidth){n.globalAlpha=N.lineAlpha*G;
n.strokeStyle="#"+("00000"+(l|0).toString(16)).substr(-6);
n.stroke()
}}else{if(N.type===e.SHAPES.RECT){if(N.fillColor||N.fillColor===0){n.globalAlpha=N.fillAlpha*G;
n.fillStyle="#"+("00000"+(s|0).toString(16)).substr(-6);
n.fillRect(m.x,m.y,m.width,m.height)
}if(N.lineWidth){n.globalAlpha=N.lineAlpha*G;
n.strokeStyle="#"+("00000"+(l|0).toString(16)).substr(-6);
n.strokeRect(m.x,m.y,m.width,m.height)
}}else{if(N.type===e.SHAPES.CIRC){n.beginPath();
n.arc(m.x,m.y,m.radius,0,2*Math.PI);
n.closePath();
if(N.fill){n.globalAlpha=N.fillAlpha*G;
n.fillStyle="#"+("00000"+(s|0).toString(16)).substr(-6);
n.fill()
}if(N.lineWidth){n.globalAlpha=N.lineAlpha*G;
n.strokeStyle="#"+("00000"+(l|0).toString(16)).substr(-6);
n.stroke()
}}else{if(N.type===e.SHAPES.ELIP){var A=m.width*2;
var K=m.height*2;
var z=m.x-A/2;
var v=m.y-K/2;
n.beginPath();
var B=0.5522848,r=(A/2)*B,p=(K/2)*B,F=z+A,k=v+K,C=z+A/2,M=v+K/2;
n.moveTo(z,M);
n.bezierCurveTo(z,M-p,C-r,v,C,v);
n.bezierCurveTo(C+r,v,F,M-p,F,M);
n.bezierCurveTo(F,M+p,C+r,k,C,k);
n.bezierCurveTo(C-r,k,z,M+p,z,M);
n.closePath();
if(N.fill){n.globalAlpha=N.fillAlpha*G;
n.fillStyle="#"+("00000"+(s|0).toString(16)).substr(-6);
n.fill()
}if(N.lineWidth){n.globalAlpha=N.lineAlpha*G;
n.strokeStyle="#"+("00000"+(l|0).toString(16)).substr(-6);
n.stroke()
}}else{if(N.type===e.SHAPES.RREC){var t=m.x;
var q=m.y;
var E=m.width;
var D=m.height;
var o=m.radius;
var u=Math.min(E,D)/2|0;
o=o>u?u:o;
n.beginPath();
n.moveTo(t,q+o);
n.lineTo(t,q+D-o);
n.quadraticCurveTo(t,q+D,t+o,q+D);
n.lineTo(t+E-o,q+D);
n.quadraticCurveTo(t+E,q+D,t+E,q+D-o);
n.lineTo(t+E,q+o);
n.quadraticCurveTo(t+E,q,t+E-o,q);
n.lineTo(t+o,q);
n.quadraticCurveTo(t,q,t,q+o);
n.closePath();
if(N.fillColor||N.fillColor===0){n.globalAlpha=N.fillAlpha*G;
n.fillStyle="#"+("00000"+(s|0).toString(16)).substr(-6);
n.fill()
}if(N.lineWidth){n.globalAlpha=N.lineAlpha*G;
n.strokeStyle="#"+("00000"+(l|0).toString(16)).substr(-6);
n.stroke()
}}}}}}}};
i.renderGraphicsMask=function(J,m){var H=J.graphicsData.length;
if(H===0){return
}m.beginPath();
for(var G=0;
G<H;
G++){var L=J.graphicsData[G];
var l=L.shape;
if(L.type===e.SHAPES.POLY){var F=l.points;
m.moveTo(F[0],F[1]);
for(var E=1;
E<F.length/2;
E++){m.lineTo(F[E*2],F[E*2+1])
}if(F[0]===F[F.length-2]&&F[1]===F[F.length-1]){m.closePath()
}}else{if(L.type===e.SHAPES.RECT){m.rect(l.x,l.y,l.width,l.height);
m.closePath()
}else{if(L.type===e.SHAPES.CIRC){m.arc(l.x,l.y,l.radius,0,2*Math.PI);
m.closePath()
}else{if(L.type===e.SHAPES.ELIP){var v=l.width*2;
var I=l.height*2;
var u=l.x-v/2;
var t=l.y-I/2;
var z=0.5522848,q=(v/2)*z,o=(I/2)*z,D=u+v,k=t+I,A=u+v/2,K=t+I/2;
m.moveTo(u,K);
m.bezierCurveTo(u,K-o,A-q,t,A,t);
m.bezierCurveTo(A+q,t,D,K-o,D,K);
m.bezierCurveTo(D,K+o,A+q,k,A,k);
m.bezierCurveTo(A-q,k,u,K+o,u,K);
m.closePath()
}else{if(L.type===e.SHAPES.RREC){var r=l.x;
var p=l.y;
var C=l.width;
var B=l.height;
var n=l.radius;
var s=Math.min(C,B)/2|0;
n=n>s?s:n;
m.moveTo(r,p+n);
m.lineTo(r,p+B-n);
m.quadraticCurveTo(r,p+B,r+n,p+B);
m.lineTo(r+C-n,p+B);
m.quadraticCurveTo(r+C,p+B,r+C,p+B-n);
m.lineTo(r+C,p+n);
m.quadraticCurveTo(r+C,p,r+C-n,p);
m.lineTo(r+n,p);
m.quadraticCurveTo(r,p,r,p+n);
m.closePath()
}}}}}}};
i.updateGraphicsTint=function(l){if(l.tint===16777215&&l._prevTint===l.tint){return
}l._prevTint=l.tint;
var k=(l.tint>>16&255)/255;
var j=(l.tint>>8&255)/255;
var o=(l.tint&255)/255;
for(var m=0;
m<l.graphicsData.length;
m++){var n=l.graphicsData[m];
var q=n.fillColor|0;
var p=n.lineColor|0;
n._fillTint=(((q>>16&255)/255*k*255<<16)+((q>>8&255)/255*j*255<<8)+(q&255)/255*o*255);
n._lineTint=(((p>>16&255)/255*k*255<<16)+((p>>8&255)/255*j*255<<8)+(p&255)/255*o*255)
}}
},{"../../../const":13}],37:[function(f,g,e){var i=f("./CanvasGraphics");
function h(){}h.prototype.constructor=h;
g.exports=h;
h.prototype.pushMask=function(n,m){m.context.save();
var j=n.alpha;
var l=n.worldTransform;
var k=m.resolution;
m.context.setTransform(l.a*k,l.b*k,l.c*k,l.d*k,l.tx*k,l.ty*k);
if(!n.texture){i.renderGraphicsMask(n,m.context);
m.context.clip()
}n.worldAlpha=j
};
h.prototype.popMask=function(j){j.context.restore()
};
h.prototype.destroy=function(){}
},{"./CanvasGraphics":36}],38:[function(g,h,f){var e=g("../../../utils");
var i={};
h.exports=i;
i.getTintedTexture=function(m,j){var o=m.texture;
j=i.roundColor(j);
var n="#"+("00000"+(j|0).toString(16)).substr(-6);
o.tintCache=o.tintCache||{};
if(o.tintCache[n]){return o.tintCache[n]
}var k=i.canvas||document.createElement("canvas");
i.tintMethod(o,j,k);
if(i.convertTintToImage){var l=new Image();
l.src=k.toDataURL();
o.tintCache[n]=l
}else{o.tintCache[n]=k;
i.canvas=null
}return k
};
i.tintWithMultiply=function(o,j,l){var m=l.getContext("2d");
var k=o.baseTexture.resolution;
var n=o.crop.clone();
n.x*=k;
n.y*=k;
n.width*=k;
n.height*=k;
l.width=n.width;
l.height=n.height;
m.fillStyle="#"+("00000"+(j|0).toString(16)).substr(-6);
m.fillRect(0,0,n.width,n.height);
m.globalCompositeOperation="multiply";
m.drawImage(o.baseTexture.source,n.x,n.y,n.width,n.height,0,0,n.width,n.height);
m.globalCompositeOperation="destination-atop";
m.drawImage(o.baseTexture.source,n.x,n.y,n.width,n.height,0,0,n.width,n.height)
};
i.tintWithOverlay=function(o,j,l){var m=l.getContext("2d");
var k=o.baseTexture.resolution;
var n=o.crop.clone();
n.x*=k;
n.y*=k;
n.width*=k;
n.height*=k;
l.width=n.width;
l.height=n.height;
m.globalCompositeOperation="copy";
m.fillStyle="#"+("00000"+(j|0).toString(16)).substr(-6);
m.fillRect(0,0,n.width,n.height);
m.globalCompositeOperation="destination-atop";
m.drawImage(o.baseTexture.source,n.x,n.y,n.width,n.height,0,0,n.width,n.height)
};
i.tintWithPerPixel=function(u,p,m){var l=m.getContext("2d");
var o=u.baseTexture.resolution;
var s=u.crop.clone();
s.x*=o;
s.y*=o;
s.width*=o;
s.height*=o;
m.width=s.width;
m.height=s.height;
l.globalCompositeOperation="copy";
l.drawImage(u.baseTexture.source,s.x,s.y,s.width,s.height,0,0,s.width,s.height);
var k=e.hex2rgb(p);
var j=k[0],t=k[1],v=k[2];
var w=l.getImageData(0,0,s.width,s.height);
var n=w.data;
for(var q=0;
q<n.length;
q+=4){n[q+0]*=j;
n[q+1]*=t;
n[q+2]*=v
}l.putImageData(w,0,0)
};
i.roundColor=function(j){var k=i.cacheStepsPerColorChannel;
var l=e.hex2rgb(j);
l[0]=Math.min(255,(l[0]/k)*k);
l[1]=Math.min(255,(l[1]/k)*k);
l[2]=Math.min(255,(l[2]/k)*k);
return e.rgb2hex(l)
};
i.cacheStepsPerColorChannel=8;
i.convertTintToImage=false;
i.canUseMultiply=e.canUseNewCanvasBlendModes();
i.tintMethod=i.canUseMultiply?i.tintWithMultiply:i.tintWithPerPixel
},{"../../../utils":67}],39:[function(h,g,i){var r=h("../SystemRenderer"),m=h("./managers/ShaderManager"),e=h("./managers/MaskManager"),l=h("./managers/StencilManager"),j=h("./managers/FilterManager"),k=h("./managers/BlendModeManager"),f=h("./utils/RenderTarget"),q=h("./utils/ObjectRenderer"),o=h("./filters/FXAAFilter"),p=h("../../utils"),s=h("../../const");
function n(v,t,u){u=u||{};
r.call(this,"WebGL",v,t,u);
this.type=s.RENDERER_TYPE.WEBGL;
this.handleContextLost=this.handleContextLost.bind(this);
this.handleContextRestored=this.handleContextRestored.bind(this);
this.view.addEventListener("webglcontextlost",this.handleContextLost,false);
this.view.addEventListener("webglcontextrestored",this.handleContextRestored,false);
this._useFXAA=!!u.forceFXAA&&u.antialias;
this._FXAAFilter=null;
this._contextOptions={alpha:this.transparent,antialias:u.antialias,premultipliedAlpha:this.transparent&&this.transparent!=="notMultiplied",stencil:true,preserveDrawingBuffer:u.preserveDrawingBuffer};
this.drawCount=0;
this.shaderManager=new m(this);
this.maskManager=new e(this);
this.stencilManager=new l(this);
this.filterManager=new j(this);
this.blendModeManager=new k(this);
this.currentRenderTarget=null;
this.currentRenderer=new q(this);
this.initPlugins();
this._createContext();
this._initContext();
this._mapGlModes();
this._renderTargetStack=[]
}n.prototype=Object.create(r.prototype);
n.prototype.constructor=n;
g.exports=n;
p.pluginTarget.mixin(n);
n.glContextId=0;
n.prototype._createContext=function(){var t=this.view.getContext("webgl",this._contextOptions)||this.view.getContext("experimental-webgl",this._contextOptions);
this.gl=t;
if(!t){throw new Error("This browser does not support webGL. Try using the canvas renderer")
}this.glContextId=n.glContextId++;
t.id=this.glContextId;
t.renderer=this
};
n.prototype._initContext=function(){var t=this.gl;
t.disable(t.DEPTH_TEST);
t.disable(t.CULL_FACE);
t.enable(t.BLEND);
this.renderTarget=new f(t,this.width,this.height,null,this.resolution,true);
this.setRenderTarget(this.renderTarget);
this.emit("context",t);
this.resize(this.width,this.height);
if(!this._useFXAA){this._useFXAA=(this._contextOptions.antialias&&!t.getContextAttributes().antialias)
}if(this._useFXAA){window.console.warn("FXAA antialiasing being used instead of native antialiasing");
this._FXAAFilter=[new o()]
}};
n.prototype.render=function(t){if(this.gl.isContextLost()){return
}this.drawCount=0;
this._lastObjectRendered=t;
if(this._useFXAA){this._FXAAFilter[0].uniforms.resolution.value.x=this.width;
this._FXAAFilter[0].uniforms.resolution.value.y=this.height;
t.filterArea=this.renderTarget.size;
t.filters=this._FXAAFilter
}var u=t.parent;
t.parent=this._tempDisplayObjectParent;
t.updateTransform();
t.parent=u;
var v=this.gl;
this.setRenderTarget(this.renderTarget);
if(this.clearBeforeRender){if(this.transparent){v.clearColor(0,0,0,0)
}else{v.clearColor(this._backgroundColorRgb[0],this._backgroundColorRgb[1],this._backgroundColorRgb[2],1)
}v.clear(v.COLOR_BUFFER_BIT)
}this.renderDisplayObject(t,this.renderTarget)
};
n.prototype.renderDisplayObject=function(v,u,t){this.setRenderTarget(u);
if(t){u.clear()
}this.filterManager.setFilterStack(u.filterStack);
v.renderWebGL(this);
this.currentRenderer.flush()
};
n.prototype.setObjectRenderer=function(t){if(this.currentRenderer===t){return
}this.currentRenderer.stop();
this.currentRenderer=t;
this.currentRenderer.start()
};
n.prototype.setRenderTarget=function(t){if(this.currentRenderTarget===t){return
}this.currentRenderTarget=t;
this.currentRenderTarget.activate();
this.stencilManager.setMaskStack(t.stencilMaskStack)
};
n.prototype.resize=function(u,t){r.prototype.resize.call(this,u,t);
this.filterManager.resize(u,t);
this.renderTarget.resize(u,t);
if(this.currentRenderTarget===this.renderTarget){this.renderTarget.activate();
this.gl.viewport(0,0,this.width,this.height)
}};
n.prototype.updateTexture=function(t){t=t.baseTexture||t;
if(!t.hasLoaded){return
}var u=this.gl;
if(!t._glTextures[u.id]){t._glTextures[u.id]=u.createTexture();
t.on("update",this.updateTexture,this);
t.on("dispose",this.destroyTexture,this)
}u.bindTexture(u.TEXTURE_2D,t._glTextures[u.id]);
u.pixelStorei(u.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultipliedAlpha);
u.texImage2D(u.TEXTURE_2D,0,u.RGBA,u.RGBA,u.UNSIGNED_BYTE,t.source);
u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MAG_FILTER,t.scaleMode===s.SCALE_MODES.LINEAR?u.LINEAR:u.NEAREST);
if(t.mipmap&&t.isPowerOfTwo){u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MIN_FILTER,t.scaleMode===s.SCALE_MODES.LINEAR?u.LINEAR_MIPMAP_LINEAR:u.NEAREST_MIPMAP_NEAREST);
u.generateMipmap(u.TEXTURE_2D)
}else{u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MIN_FILTER,t.scaleMode===s.SCALE_MODES.LINEAR?u.LINEAR:u.NEAREST)
}if(!t.isPowerOfTwo){u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_S,u.CLAMP_TO_EDGE);
u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_T,u.CLAMP_TO_EDGE)
}else{u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_S,u.REPEAT);
u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_T,u.REPEAT)
}return t._glTextures[u.id]
};
n.prototype.destroyTexture=function(t){t=t.baseTexture||t;
if(!t.hasLoaded){return
}if(t._glTextures[this.gl.id]){this.gl.deleteTexture(t._glTextures[this.gl.id])
}};
n.prototype.handleContextLost=function(t){t.preventDefault()
};
n.prototype.handleContextRestored=function(){this._initContext();
for(var t in p.BaseTextureCache){p.BaseTextureCache[t]._glTextures.length=0
}};
n.prototype.destroy=function(u){this.destroyPlugins();
this.view.removeEventListener("webglcontextlost",this.handleContextLost);
this.view.removeEventListener("webglcontextrestored",this.handleContextRestored);
for(var t in p.BaseTextureCache){var v=p.BaseTextureCache[t];
v.off("update",this.updateTexture,this);
v.off("dispose",this.destroyTexture,this)
}r.prototype.destroy.call(this,u);
this.uid=0;
this.shaderManager.destroy();
this.maskManager.destroy();
this.stencilManager.destroy();
this.filterManager.destroy();
this.blendModeManager.destroy();
this.shaderManager=null;
this.maskManager=null;
this.filterManager=null;
this.blendModeManager=null;
this.currentRenderer=null;
this.handleContextLost=null;
this.handleContextRestored=null;
this._contextOptions=null;
this.drawCount=0;
this.gl.useProgram(null);
this.gl=null
};
n.prototype._mapGlModes=function(){var t=this.gl;
if(!this.blendModes){this.blendModes={};
this.blendModes[s.BLEND_MODES.NORMAL]=[t.ONE,t.ONE_MINUS_SRC_ALPHA];
this.blendModes[s.BLEND_MODES.ADD]=[t.SRC_ALPHA,t.DST_ALPHA];
this.blendModes[s.BLEND_MODES.MULTIPLY]=[t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA];
this.blendModes[s.BLEND_MODES.SCREEN]=[t.SRC_ALPHA,t.ONE];
this.blendModes[s.BLEND_MODES.OVERLAY]=[t.ONE,t.ONE_MINUS_SRC_ALPHA];
this.blendModes[s.BLEND_MODES.DARKEN]=[t.ONE,t.ONE_MINUS_SRC_ALPHA];
this.blendModes[s.BLEND_MODES.LIGHTEN]=[t.ONE,t.ONE_MINUS_SRC_ALPHA];
this.blendModes[s.BLEND_MODES.COLOR_DODGE]=[t.ONE,t.ONE_MINUS_SRC_ALPHA];
this.blendModes[s.BLEND_MODES.COLOR_BURN]=[t.ONE,t.ONE_MINUS_SRC_ALPHA];
this.blendModes[s.BLEND_MODES.HARD_LIGHT]=[t.ONE,t.ONE_MINUS_SRC_ALPHA];
this.blendModes[s.BLEND_MODES.SOFT_LIGHT]=[t.ONE,t.ONE_MINUS_SRC_ALPHA];
this.blendModes[s.BLEND_MODES.DIFFERENCE]=[t.ONE,t.ONE_MINUS_SRC_ALPHA];
this.blendModes[s.BLEND_MODES.EXCLUSION]=[t.ONE,t.ONE_MINUS_SRC_ALPHA];
this.blendModes[s.BLEND_MODES.HUE]=[t.ONE,t.ONE_MINUS_SRC_ALPHA];
this.blendModes[s.BLEND_MODES.SATURATION]=[t.ONE,t.ONE_MINUS_SRC_ALPHA];
this.blendModes[s.BLEND_MODES.COLOR]=[t.ONE,t.ONE_MINUS_SRC_ALPHA];
this.blendModes[s.BLEND_MODES.LUMINOSITY]=[t.ONE,t.ONE_MINUS_SRC_ALPHA]
}if(!this.drawModes){this.drawModes={};
this.drawModes[s.DRAW_MODES.POINTS]=t.POINTS;
this.drawModes[s.DRAW_MODES.LINES]=t.LINES;
this.drawModes[s.DRAW_MODES.LINE_LOOP]=t.LINE_LOOP;
this.drawModes[s.DRAW_MODES.LINE_STRIP]=t.LINE_STRIP;
this.drawModes[s.DRAW_MODES.TRIANGLES]=t.TRIANGLES;
this.drawModes[s.DRAW_MODES.TRIANGLE_STRIP]=t.TRIANGLE_STRIP;
this.drawModes[s.DRAW_MODES.TRIANGLE_FAN]=t.TRIANGLE_FAN
}}
},{"../../const":13,"../../utils":67,"../SystemRenderer":33,"./filters/FXAAFilter":41,"./managers/BlendModeManager":43,"./managers/FilterManager":44,"./managers/MaskManager":45,"./managers/ShaderManager":46,"./managers/StencilManager":47,"./utils/ObjectRenderer":53,"./utils/RenderTarget":55}],40:[function(f,g,e){var i=f("../shaders/TextureShader");
function h(k,l,j){this.shaders=[];
this.padding=0;
this.uniforms=j||{};
this.vertexSrc=k||i.defaultVertexSrc;
this.fragmentSrc=l||i.defaultFragmentSrc
}h.prototype.constructor=h;
g.exports=h;
h.prototype.getShader=function(k){var l=k.gl;
var j=this.shaders[l.id];
if(!j){j=new i(k.shaderManager,this.vertexSrc,this.fragmentSrc,this.uniforms,this.attributes);
this.shaders[l.id]=j
}return j
};
h.prototype.applyFilter=function(n,l,k,j){var m=this.getShader(n);
n.filterManager.applyFilter(m,l,k,j)
};
h.prototype.syncUniform=function(k){for(var m=0,l=this.shaders.length;
m<l;
++m){this.shaders[m].syncUniform(k)
}}
},{"../shaders/TextureShader":52}],41:[function(f,g,e){var h=f("./AbstractFilter");
function i(){h.call(this,"\nprecision mediump float;\n\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform vec2 resolution;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvarying vec2 vResolution;\n\n//texcoords computed in vertex step\n//to avoid dependent texture reads\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n            out vec2 v_rgbNW, out vec2 v_rgbNE,\n            out vec2 v_rgbSW, out vec2 v_rgbSE,\n            out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n   vResolution = resolution;\n\n   //compute the texture coords and send them to varyings\n   texcoords(aTextureCoord * resolution, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n",'precision lowp float;\n\n\n/**\nBasic FXAA implementation based on the code on geeks3d.com with the\nmodification that the texture2DLod stuff was removed since it\'s\nunsupported by WebGL.\n\n--\n\nFrom:\nhttps://github.com/mitsuhiko/webgl-meincraft\n\nCopyright (c) 2011 by Armin Ronacher.\n\nSome rights reserved.\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions are\nmet:\n\n    * Redistributions of source code must retain the above copyright\n      notice, this list of conditions and the following disclaimer.\n\n    * Redistributions in binary form must reproduce the above\n      copyright notice, this list of conditions and the following\n      disclaimer in the documentation and/or other materials provided\n      with the distribution.\n\n    * The names of the contributors may not be used to endorse or\n      promote products derived from this software without specific\n      prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\nLIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\nA PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\nOWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\nSPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\nLIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\nDATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\nTHEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\nOF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n*/\n\n#ifndef FXAA_REDUCE_MIN\n    #define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n    #define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n    #define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n            vec2 v_rgbNW, vec2 v_rgbNE,\n            vec2 v_rgbSW, vec2 v_rgbSE,\n            vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vResolution;\n\n//texcoords computed in vertex step\n//to avoid dependent texture reads\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform sampler2D uSampler;\n\n\nvoid main(void){\n\n    gl_FragColor = fxaa(uSampler, vTextureCoord * vResolution, vResolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n}\n',{resolution:{type:"v2",value:{x:1,y:1}}})
}i.prototype=Object.create(h.prototype);
i.prototype.constructor=i;
g.exports=i;
i.prototype.applyFilter=function(n,l,k){var j=n.filterManager;
var m=this.getShader(n);
j.applyFilter(m,l,k)
}
},{"./AbstractFilter":40}],42:[function(g,h,f){var i=g("./AbstractFilter"),j=g("../../../math");
function e(k){var l=new j.Matrix();
i.call(this,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n","precision lowp float;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform sampler2D mask;\n\nvoid main(void)\n{\n    // check clip! this will stop the mask bleeding out from the edges\n    vec2 text = abs( vMaskCoord - 0.5 );\n    text = step(0.5, text);\n    float clip = 1.0 - max(text.y, text.x);\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    original *= (masky.r * masky.a * alpha * clip);\n    gl_FragColor = original;\n}\n",{mask:{type:"sampler2D",value:k._texture},alpha:{type:"f",value:1},otherMatrix:{type:"mat3",value:l.toArray(true)}});
this.maskSprite=k;
this.maskMatrix=l
}e.prototype=Object.create(i.prototype);
e.prototype.constructor=e;
h.exports=e;
e.prototype.applyFilter=function(o,m,l){var k=o.filterManager;
this.uniforms.mask.value=this.maskSprite._texture;
k.calculateMappedMatrix(m.frame,this.maskSprite,this.maskMatrix);
this.uniforms.otherMatrix.value=this.maskMatrix.toArray(true);
this.uniforms.alpha.value=this.maskSprite.worldAlpha;
var n=this.getShader(o);
k.applyFilter(n,m,l)
};
Object.defineProperties(e.prototype,{map:{get:function(){return this.uniforms.mask.value
},set:function(k){this.uniforms.mask.value=k
}},offset:{get:function(){return this.uniforms.offset.value
},set:function(k){this.uniforms.offset.value=k
}}})
},{"../../../math":23,"./AbstractFilter":40}],43:[function(g,h,f){var i=g("./WebGLManager");
function e(j){i.call(this,j);
this.currentBlendMode=99999
}e.prototype=Object.create(i.prototype);
e.prototype.constructor=e;
h.exports=e;
e.prototype.setBlendMode=function(j){if(this.currentBlendMode===j){return false
}this.currentBlendMode=j;
var k=this.renderer.blendModes[this.currentBlendMode];
this.renderer.gl.blendFunc(k[0],k[1]);
return true
}
},{"./WebGLManager":48}],44:[function(h,f,i){var l=h("./WebGLManager"),e=h("../utils/RenderTarget"),m=h("../../../const"),g=h("../utils/Quad"),k=h("../../../math");
function j(n){l.call(this,n);
this.filterStack=[];
this.filterStack.push({renderTarget:n.currentRenderTarget,filter:[],bounds:null});
this.texturePool=[];
this.textureSize=new k.Rectangle(0,0,n.width,n.height);
this.currentFrame=null
}j.prototype=Object.create(l.prototype);
j.prototype.constructor=j;
f.exports=j;
j.prototype.onContextChange=function(){this.texturePool.length=0;
var n=this.renderer.gl;
this.quad=new g(n)
};
j.prototype.setFilterStack=function(n){this.filterStack=n
};
j.prototype.pushFilter=function(s,q){var p=s.filterArea?s.filterArea.clone():s.getBounds();
p.x=p.x|0;
p.y=p.y|0;
p.width=p.width|0;
p.height=p.height|0;
var r=q[0].padding|0;
p.x-=r;
p.y-=r;
p.width+=r*2;
p.height+=r*2;
if(this.renderer.currentRenderTarget.transform){var n=this.renderer.currentRenderTarget.transform;
p.x+=n.tx;
p.y+=n.ty;
this.capFilterArea(p);
p.x-=n.tx;
p.y-=n.ty
}else{this.capFilterArea(p)
}if(p.width>0&&p.height>0){this.currentFrame=p;
var o=this.getRenderTarget();
this.renderer.setRenderTarget(o);
o.clear();
this.filterStack.push({renderTarget:o,filter:q})
}else{this.filterStack.push({renderTarget:null,filter:q})
}};
j.prototype.popFilter=function(){var u=this.filterStack.pop();
var t=this.filterStack[this.filterStack.length-1];
var v=u.renderTarget;
if(!u.renderTarget){return
}var p=t.renderTarget;
var s=this.renderer.gl;
this.currentFrame=v.frame;
this.quad.map(this.textureSize,v.frame);
s.bindBuffer(s.ARRAY_BUFFER,this.quad.vertexBuffer);
s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,this.quad.indexBuffer);
var o=u.filter;
s.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aVertexPosition,2,s.FLOAT,false,0,0);
s.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aTextureCoord,2,s.FLOAT,false,0,2*4*4);
s.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aColor,4,s.FLOAT,false,0,4*4*4);
this.renderer.blendModeManager.setBlendMode(m.BLEND_MODES.NORMAL);
if(o.length===1){if(o[0].uniforms.dimensions){o[0].uniforms.dimensions.value[0]=this.renderer.width;
o[0].uniforms.dimensions.value[1]=this.renderer.height;
o[0].uniforms.dimensions.value[2]=this.quad.vertices[0];
o[0].uniforms.dimensions.value[3]=this.quad.vertices[5]
}o[0].applyFilter(this.renderer,v,p);
this.returnRenderTarget(v)
}else{var q=v;
var w=this.getRenderTarget(true);
for(var r=0;
r<o.length-1;
r++){var n=o[r];
if(n.uniforms.dimensions){n.uniforms.dimensions.value[0]=this.renderer.width;
n.uniforms.dimensions.value[1]=this.renderer.height;
n.uniforms.dimensions.value[2]=this.quad.vertices[0];
n.uniforms.dimensions.value[3]=this.quad.vertices[5]
}n.applyFilter(this.renderer,q,w);
var x=q;
q=w;
w=x
}o[o.length-1].applyFilter(this.renderer,q,p);
this.returnRenderTarget(q);
this.returnRenderTarget(w)
}return u.filter
};
j.prototype.getRenderTarget=function(n){var o=this.texturePool.pop()||new e(this.renderer.gl,this.textureSize.width,this.textureSize.height,m.SCALE_MODES.LINEAR,this.renderer.resolution*m.FILTER_RESOLUTION);
o.frame=this.currentFrame;
if(n){o.clear(true)
}return o
};
j.prototype.returnRenderTarget=function(n){this.texturePool.push(n)
};
j.prototype.applyFilter=function(p,o,r,n){var q=this.renderer.gl;
this.renderer.setRenderTarget(r);
if(n){r.clear()
}this.renderer.shaderManager.setShader(p);
p.uniforms.projectionMatrix.value=this.renderer.currentRenderTarget.projectionMatrix.toArray(true);
p.syncUniforms();
q.activeTexture(q.TEXTURE0);
q.bindTexture(q.TEXTURE_2D,o.texture);
q.drawElements(q.TRIANGLES,6,q.UNSIGNED_SHORT,0);
this.renderer.drawCount++
};
j.prototype.calculateMappedMatrix=function(q,v,r){var n=v.worldTransform.copy(k.Matrix.TEMP_MATRIX),s=v._texture.baseTexture;
var u=r.identity();
var t=this.textureSize.height/this.textureSize.width;
u.translate(q.x/this.textureSize.width,q.y/this.textureSize.height);
u.scale(1,t);
var p=(this.textureSize.width/s.width);
var o=(this.textureSize.height/s.height);
n.tx/=s.width*p;
n.ty/=s.width*p;
n.invert();
u.prepend(n);
u.scale(1,1/t);
u.scale(p,o);
u.translate(v.anchor.x,v.anchor.y);
return u
};
j.prototype.capFilterArea=function(n){if(n.x<0){n.width+=n.x;
n.x=0
}if(n.y<0){n.height+=n.y;
n.y=0
}if(n.x+n.width>this.textureSize.width){n.width=this.textureSize.width-n.x
}if(n.y+n.height>this.textureSize.height){n.height=this.textureSize.height-n.y
}};
j.prototype.resize=function(p,n){this.textureSize.width=p;
this.textureSize.height=n;
for(var o=0;
o<this.texturePool.length;
o++){this.texturePool[o].resize(p,n)
}};
j.prototype.destroy=function(){this.quad.destroy();
l.prototype.destroy.call(this);
this.filterStack=null;
this.offsetY=0;
for(var n=0;
n<this.texturePool.length;
n++){this.texturePool[n].destroy()
}this.texturePool=null
}
},{"../../../const":13,"../../../math":23,"../utils/Quad":54,"../utils/RenderTarget":55,"./WebGLManager":48}],45:[function(f,h,e){var i=f("./WebGLManager"),g=f("../filters/SpriteMaskFilter");
function j(k){i.call(this,k);
this.stencilStack=[];
this.reverse=true;
this.count=0;
this.alphaMaskPool=[]
}j.prototype=Object.create(i.prototype);
j.prototype.constructor=j;
h.exports=j;
j.prototype.pushMask=function(l,k){if(k.texture){this.pushSpriteMask(l,k)
}else{this.pushStencilMask(l,k)
}};
j.prototype.popMask=function(l,k){if(k.texture){this.popSpriteMask(l,k)
}else{this.popStencilMask(l,k)
}};
j.prototype.pushSpriteMask=function(m,l){var k=this.alphaMaskPool.pop();
if(!k){k=[new g(l)]
}k[0].maskSprite=l;
this.renderer.filterManager.pushFilter(m,k)
};
j.prototype.popSpriteMask=function(){var k=this.renderer.filterManager.popFilter();
this.alphaMaskPool.push(k)
};
j.prototype.pushStencilMask=function(l,k){this.renderer.stencilManager.pushMask(k)
};
j.prototype.popStencilMask=function(l,k){this.renderer.stencilManager.popMask(k)
}
},{"../filters/SpriteMaskFilter":42,"./WebGLManager":48}],46:[function(f,e,g){var k=f("./WebGLManager"),h=f("../shaders/TextureShader"),m=f("../shaders/ComplexPrimitiveShader"),j=f("../shaders/PrimitiveShader"),l=f("../../../utils");
function i(o){k.call(this,o);
this.maxAttibs=10;
this.attribState=[];
this.tempAttribState=[];
for(var n=0;
n<this.maxAttibs;
n++){this.attribState[n]=false
}this.stack=[];
this._currentId=-1;
this.currentShader=null
}i.prototype=Object.create(k.prototype);
i.prototype.constructor=i;
l.pluginTarget.mixin(i);
e.exports=i;
i.prototype.onContextChange=function(){this.initPlugins();
var o=this.renderer.gl;
this.maxAttibs=o.getParameter(o.MAX_VERTEX_ATTRIBS);
this.attribState=[];
for(var n=0;
n<this.maxAttibs;
n++){this.attribState[n]=false
}this.defaultShader=new h(this);
this.primitiveShader=new j(this);
this.complexPrimitiveShader=new m(this)
};
i.prototype.setAttribs=function(q){var o;
for(o=0;
o<this.tempAttribState.length;
o++){this.tempAttribState[o]=false
}for(var n in q){this.tempAttribState[q[n]]=true
}var p=this.renderer.gl;
for(o=0;
o<this.attribState.length;
o++){if(this.attribState[o]!==this.tempAttribState[o]){this.attribState[o]=this.tempAttribState[o];
if(this.attribState[o]){p.enableVertexAttribArray(o)
}else{p.disableVertexAttribArray(o)
}}}};
i.prototype.setShader=function(n){if(this._currentId===n.uid){return false
}this._currentId=n.uid;
this.currentShader=n;
this.renderer.gl.useProgram(n.program);
this.setAttribs(n.attributes);
return true
};
i.prototype.destroy=function(){this.primitiveShader.destroy();
this.complexPrimitiveShader.destroy();
k.prototype.destroy.call(this);
this.destroyPlugins();
this.attribState=null;
this.tempAttribState=null
}
},{"../../../utils":67,"../shaders/ComplexPrimitiveShader":49,"../shaders/PrimitiveShader":50,"../shaders/TextureShader":52,"./WebGLManager":48}],47:[function(g,h,f){var i=g("./WebGLManager"),e=g("../../../utils");
function j(k){i.call(this,k);
this.stencilMaskStack=null
}j.prototype=Object.create(i.prototype);
j.prototype.constructor=j;
h.exports=j;
j.prototype.setMaskStack=function(l){this.stencilMaskStack=l;
var k=this.renderer.gl;
if(l.stencilStack.length===0){k.disable(k.STENCIL_TEST)
}else{k.enable(k.STENCIL_TEST)
}};
j.prototype.pushStencil=function(k,n){this.renderer.currentRenderTarget.attachStencilBuffer();
var m=this.renderer.gl,l=this.stencilMaskStack;
this.bindGraphics(k,n);
if(l.stencilStack.length===0){m.enable(m.STENCIL_TEST);
m.clear(m.STENCIL_BUFFER_BIT);
l.reverse=true;
l.count=0
}l.stencilStack.push(n);
var o=l.count;
m.colorMask(false,false,false,false);
m.stencilFunc(m.ALWAYS,0,255);
m.stencilOp(m.KEEP,m.KEEP,m.INVERT);
if(n.mode===1){m.drawElements(m.TRIANGLE_FAN,n.indices.length-4,m.UNSIGNED_SHORT,0);
if(l.reverse){m.stencilFunc(m.EQUAL,255-o,255);
m.stencilOp(m.KEEP,m.KEEP,m.DECR)
}else{m.stencilFunc(m.EQUAL,o,255);
m.stencilOp(m.KEEP,m.KEEP,m.INCR)
}m.drawElements(m.TRIANGLE_FAN,4,m.UNSIGNED_SHORT,(n.indices.length-4)*2);
if(l.reverse){m.stencilFunc(m.EQUAL,255-(o+1),255)
}else{m.stencilFunc(m.EQUAL,o+1,255)
}l.reverse=!l.reverse
}else{if(!l.reverse){m.stencilFunc(m.EQUAL,255-o,255);
m.stencilOp(m.KEEP,m.KEEP,m.DECR)
}else{m.stencilFunc(m.EQUAL,o,255);
m.stencilOp(m.KEEP,m.KEEP,m.INCR)
}m.drawElements(m.TRIANGLE_STRIP,n.indices.length,m.UNSIGNED_SHORT,0);
if(!l.reverse){m.stencilFunc(m.EQUAL,255-(o+1),255)
}else{m.stencilFunc(m.EQUAL,o+1,255)
}}m.colorMask(true,true,true,true);
m.stencilOp(m.KEEP,m.KEEP,m.KEEP);
l.count++
};
j.prototype.bindGraphics=function(k,n){var m=this.renderer.gl;
var l;
if(n.mode===1){l=this.renderer.shaderManager.complexPrimitiveShader;
this.renderer.shaderManager.setShader(l);
m.uniformMatrix3fv(l.uniforms.translationMatrix._location,false,k.worldTransform.toArray(true));
m.uniformMatrix3fv(l.uniforms.projectionMatrix._location,false,this.renderer.currentRenderTarget.projectionMatrix.toArray(true));
m.uniform3fv(l.uniforms.tint._location,e.hex2rgb(k.tint));
m.uniform3fv(l.uniforms.color._location,n.color);
m.uniform1f(l.uniforms.alpha._location,k.worldAlpha);
m.bindBuffer(m.ARRAY_BUFFER,n.buffer);
m.vertexAttribPointer(l.attributes.aVertexPosition,2,m.FLOAT,false,4*2,0);
m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,n.indexBuffer)
}else{l=this.renderer.shaderManager.primitiveShader;
this.renderer.shaderManager.setShader(l);
m.uniformMatrix3fv(l.uniforms.translationMatrix._location,false,k.worldTransform.toArray(true));
m.uniformMatrix3fv(l.uniforms.projectionMatrix._location,false,this.renderer.currentRenderTarget.projectionMatrix.toArray(true));
m.uniform3fv(l.uniforms.tint._location,e.hex2rgb(k.tint));
m.uniform1f(l.uniforms.alpha._location,k.worldAlpha);
m.bindBuffer(m.ARRAY_BUFFER,n.buffer);
m.vertexAttribPointer(l.attributes.aVertexPosition,2,m.FLOAT,false,4*6,0);
m.vertexAttribPointer(l.attributes.aColor,4,m.FLOAT,false,4*6,2*4);
m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,n.indexBuffer)
}};
j.prototype.popStencil=function(k,n){var m=this.renderer.gl,l=this.stencilMaskStack;
l.stencilStack.pop();
l.count--;
if(l.stencilStack.length===0){m.disable(m.STENCIL_TEST)
}else{var o=l.count;
this.bindGraphics(k,n);
m.colorMask(false,false,false,false);
if(n.mode===1){l.reverse=!l.reverse;
if(l.reverse){m.stencilFunc(m.EQUAL,255-(o+1),255);
m.stencilOp(m.KEEP,m.KEEP,m.INCR)
}else{m.stencilFunc(m.EQUAL,o+1,255);
m.stencilOp(m.KEEP,m.KEEP,m.DECR)
}m.drawElements(m.TRIANGLE_FAN,4,m.UNSIGNED_SHORT,(n.indices.length-4)*2);
m.stencilFunc(m.ALWAYS,0,255);
m.stencilOp(m.KEEP,m.KEEP,m.INVERT);
m.drawElements(m.TRIANGLE_FAN,n.indices.length-4,m.UNSIGNED_SHORT,0);
this.renderer.drawCount+=2;
if(!l.reverse){m.stencilFunc(m.EQUAL,255-(o),255)
}else{m.stencilFunc(m.EQUAL,o,255)
}}else{if(!l.reverse){m.stencilFunc(m.EQUAL,255-(o+1),255);
m.stencilOp(m.KEEP,m.KEEP,m.INCR)
}else{m.stencilFunc(m.EQUAL,o+1,255);
m.stencilOp(m.KEEP,m.KEEP,m.DECR)
}m.drawElements(m.TRIANGLE_STRIP,n.indices.length,m.UNSIGNED_SHORT,0);
this.renderer.drawCount++;
if(!l.reverse){m.stencilFunc(m.EQUAL,255-(o),255)
}else{m.stencilFunc(m.EQUAL,o,255)
}}m.colorMask(true,true,true,true);
m.stencilOp(m.KEEP,m.KEEP,m.KEEP)
}};
j.prototype.destroy=function(){i.prototype.destroy.call(this);
this.stencilMaskStack.stencilStack=null
};
j.prototype.pushMask=function(k){this.renderer.setObjectRenderer(this.renderer.plugins.graphics);
if(k.dirty){this.renderer.plugins.graphics.updateGraphics(k,this.renderer.gl)
}if(!k._webGL[this.renderer.gl.id].data.length){return
}this.pushStencil(k,k._webGL[this.renderer.gl.id].data[0])
};
j.prototype.popMask=function(k){this.renderer.setObjectRenderer(this.renderer.plugins.graphics);
this.popStencil(k,k._webGL[this.renderer.gl.id].data[0])
}
},{"../../../utils":67,"./WebGLManager":48}],48:[function(f,g,e){function h(i){this.renderer=i;
this.renderer.on("context",this.onContextChange,this)
}h.prototype.constructor=h;
g.exports=h;
h.prototype.onContextChange=function(){};
h.prototype.destroy=function(){this.renderer.off("context",this.onContextChange,this);
this.renderer=null
}
},{}],49:[function(f,g,e){var h=f("./Shader");
function i(j){h.call(this,j,["attribute vec2 aVertexPosition;","uniform mat3 translationMatrix;","uniform mat3 projectionMatrix;","uniform vec3 tint;","uniform float alpha;","uniform vec3 color;","varying vec4 vColor;","void main(void){","   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);","   vColor = vec4(color * alpha * tint, alpha);","}"].join("\n"),["precision mediump float;","varying vec4 vColor;","void main(void){","   gl_FragColor = vColor;","}"].join("\n"),{tint:{type:"3f",value:[0,0,0]},alpha:{type:"1f",value:0},color:{type:"3f",value:[0,0,0]},translationMatrix:{type:"mat3",value:new Float32Array(9)},projectionMatrix:{type:"mat3",value:new Float32Array(9)}},{aVertexPosition:0})
}i.prototype=Object.create(h.prototype);
i.prototype.constructor=i;
g.exports=i
},{"./Shader":51}],50:[function(g,h,f){var i=g("./Shader");
function e(j){i.call(this,j,["attribute vec2 aVertexPosition;","attribute vec4 aColor;","uniform mat3 translationMatrix;","uniform mat3 projectionMatrix;","uniform float alpha;","uniform float flipY;","uniform vec3 tint;","varying vec4 vColor;","void main(void){","   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);","   vColor = aColor * vec4(tint * alpha, alpha);","}"].join("\n"),["precision mediump float;","varying vec4 vColor;","void main(void){","   gl_FragColor = vColor;","}"].join("\n"),{tint:{type:"3f",value:[0,0,0]},alpha:{type:"1f",value:0},translationMatrix:{type:"mat3",value:new Float32Array(9)},projectionMatrix:{type:"mat3",value:new Float32Array(9)}},{aVertexPosition:0,aColor:0})
}e.prototype=Object.create(i.prototype);
e.prototype.constructor=e;
h.exports=e
},{"./Shader":51}],51:[function(g,h,f){var e=g("../../../utils");
function i(n,k,m,j,l){if(!k||!m){throw new Error("Pixi.js Error. Shader requires vertexSrc and fragmentSrc")
}this.uid=e.uid();
this.gl=n.renderer.gl;
this.shaderManager=n;
this.program=null;
this.uniforms=j||{};
this.attributes=l||{};
this.textureCount=1;
this.vertexSrc=k;
this.fragmentSrc=m;
this.init()
}i.prototype.constructor=i;
h.exports=i;
i.prototype.init=function(){this.compile();
this.gl.useProgram(this.program);
this.cacheUniformLocations(Object.keys(this.uniforms));
this.cacheAttributeLocations(Object.keys(this.attributes))
};
i.prototype.cacheUniformLocations=function(k){for(var j=0;
j<k.length;
++j){this.uniforms[k[j]]._location=this.gl.getUniformLocation(this.program,k[j])
}};
i.prototype.cacheAttributeLocations=function(k){for(var j=0;
j<k.length;
++j){this.attributes[k[j]]=this.gl.getAttribLocation(this.program,k[j])
}};
i.prototype.compile=function(){var m=this.gl;
var k=this._glCompile(m.VERTEX_SHADER,this.vertexSrc);
var l=this._glCompile(m.FRAGMENT_SHADER,this.fragmentSrc);
var j=m.createProgram();
m.attachShader(j,k);
m.attachShader(j,l);
m.linkProgram(j);
if(!m.getProgramParameter(j,m.LINK_STATUS)){console.error("Pixi.js Error: Could not initialize shader.");
console.error("gl.VALIDATE_STATUS",m.getProgramParameter(j,m.VALIDATE_STATUS));
console.error("gl.getError()",m.getError());
if(m.getProgramInfoLog(j)!==""){console.warn("Pixi.js Warning: gl.getProgramInfoLog()",m.getProgramInfoLog(j))
}m.deleteProgram(j);
j=null
}m.deleteShader(k);
m.deleteShader(l);
return(this.program=j)
};
i.prototype.syncUniform=function(j){var k=j._location,o=j.value,p=this.gl,m,l;
switch(j.type){case"b":case"bool":case"boolean":p.uniform1i(k,o?1:0);
break;
case"i":case"1i":p.uniform1i(k,o);
break;
case"f":case"1f":p.uniform1f(k,o);
break;
case"2f":p.uniform2f(k,o[0],o[1]);
break;
case"3f":p.uniform3f(k,o[0],o[1],o[2]);
break;
case"4f":p.uniform4f(k,o[0],o[1],o[2],o[3]);
break;
case"v2":p.uniform2f(k,o.x,o.y);
break;
case"v3":p.uniform3f(k,o.x,o.y,o.z);
break;
case"v4":p.uniform4f(k,o.x,o.y,o.z,o.w);
break;
case"1iv":p.uniform1iv(k,o);
break;
case"2iv":p.uniform2iv(k,o);
break;
case"3iv":p.uniform3iv(k,o);
break;
case"4iv":p.uniform4iv(k,o);
break;
case"1fv":p.uniform1fv(k,o);
break;
case"2fv":p.uniform2fv(k,o);
break;
case"3fv":p.uniform3fv(k,o);
break;
case"4fv":p.uniform4fv(k,o);
break;
case"m2":case"mat2":case"Matrix2fv":p.uniformMatrix2fv(k,j.transpose,o);
break;
case"m3":case"mat3":case"Matrix3fv":p.uniformMatrix3fv(k,j.transpose,o);
break;
case"m4":case"mat4":case"Matrix4fv":p.uniformMatrix4fv(k,j.transpose,o);
break;
case"c":if(typeof o==="number"){o=e.hex2rgb(o)
}p.uniform3f(k,o[0],o[1],o[2]);
break;
case"iv1":p.uniform1iv(k,o);
break;
case"iv":p.uniform3iv(k,o);
break;
case"fv1":p.uniform1fv(k,o);
break;
case"fv":p.uniform3fv(k,o);
break;
case"v2v":if(!j._array){j._array=new Float32Array(2*o.length)
}for(m=0,l=o.length;
m<l;
++m){j._array[m*2]=o[m].x;
j._array[m*2+1]=o[m].y
}p.uniform2fv(k,j._array);
break;
case"v3v":if(!j._array){j._array=new Float32Array(3*o.length)
}for(m=0,l=o.length;
m<l;
++m){j._array[m*3]=o[m].x;
j._array[m*3+1]=o[m].y;
j._array[m*3+2]=o[m].z
}p.uniform3fv(k,j._array);
break;
case"v4v":if(!j._array){j._array=new Float32Array(4*o.length)
}for(m=0,l=o.length;
m<l;
++m){j._array[m*4]=o[m].x;
j._array[m*4+1]=o[m].y;
j._array[m*4+2]=o[m].z;
j._array[m*4+3]=o[m].w
}p.uniform4fv(k,j._array);
break;
case"t":case"sampler2D":if(!j.value||!j.value.baseTexture.hasLoaded){break
}p.activeTexture(p["TEXTURE"+this.textureCount]);
var n=j.value.baseTexture._glTextures[p.id];
if(!n){this.initSampler2D(j);
n=j.value.baseTexture._glTextures[p.id]
}p.bindTexture(p.TEXTURE_2D,n);
p.uniform1i(j._location,this.textureCount);
this.textureCount++;
break;
default:console.warn("Pixi.js Shader Warning: Unknown uniform type: "+j.type)
}};
i.prototype.syncUniforms=function(){this.textureCount=1;
for(var j in this.uniforms){this.syncUniform(this.uniforms[j])
}};
i.prototype.initSampler2D=function(j){var m=this.gl;
var k=j.value.baseTexture;
if(!k.hasLoaded){return
}if(j.textureData){var l=j.textureData;
k._glTextures[m.id]=m.createTexture();
m.bindTexture(m.TEXTURE_2D,k._glTextures[m.id]);
m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultipliedAlpha);
m.texImage2D(m.TEXTURE_2D,0,l.luminance?m.LUMINANCE:m.RGBA,m.RGBA,m.UNSIGNED_BYTE,k.source);
m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MAG_FILTER,l.magFilter?l.magFilter:m.LINEAR);
m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MIN_FILTER,l.wrapS?l.wrapS:m.CLAMP_TO_EDGE);
m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_T,l.wrapS?l.wrapS:m.CLAMP_TO_EDGE);
m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_S,l.wrapT?l.wrapT:m.CLAMP_TO_EDGE)
}else{this.shaderManager.renderer.updateTexture(k)
}};
i.prototype.destroy=function(){this.gl.deleteProgram(this.program);
this.gl=null;
this.uniforms=null;
this.attributes=null;
this.vertexSrc=null;
this.fragmentSrc=null
};
i.prototype._glCompile=function(j,l){var k=this.gl.createShader(j);
this.gl.shaderSource(k,l);
this.gl.compileShader(k);
if(!this.gl.getShaderParameter(k,this.gl.COMPILE_STATUS)){console.log(this.gl.getShaderInfoLog(k));
return null
}return k
}
},{"../../../utils":67}],52:[function(g,h,e){var i=g("./Shader");
function f(m,l,r,j,o){var p={uSampler:{type:"sampler2D",value:0},projectionMatrix:{type:"mat3",value:new Float32Array([1,0,0,0,1,0,0,0,1])}};
if(j){for(var q in j){p[q]=j[q]
}}var k={aVertexPosition:0,aTextureCoord:0,aColor:0};
if(o){for(var n in o){k[n]=o[n]
}}l=l||f.defaultVertexSrc;
r=r||f.defaultFragmentSrc;
i.call(this,m,l,r,p,k)
}f.prototype=Object.create(i.prototype);
f.prototype.constructor=f;
h.exports=f;
f.defaultVertexSrc=["precision lowp float;","attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute vec4 aColor;","uniform mat3 projectionMatrix;","varying vec2 vTextureCoord;","varying vec4 vColor;","void main(void){","   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vColor = vec4(aColor.rgb * aColor.a, aColor.a);","}"].join("\n");
f.defaultFragmentSrc=["precision lowp float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","void main(void){","   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;","}"].join("\n")
},{"./Shader":51}],53:[function(f,g,e){var h=f("../managers/WebGLManager");
function i(j){h.call(this,j)
}i.prototype=Object.create(h.prototype);
i.prototype.constructor=i;
g.exports=i;
i.prototype.start=function(){};
i.prototype.stop=function(){this.flush()
};
i.prototype.flush=function(){};
i.prototype.render=function(j){}
},{"../managers/WebGLManager":48}],54:[function(f,g,e){function h(i){this.gl=i;
this.vertices=new Float32Array([0,0,200,0,200,200,0,200]);
this.uvs=new Float32Array([0,0,1,0,1,1,0,1]);
this.colors=new Float32Array([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);
this.indices=new Uint16Array([0,1,2,0,3,2]);
this.vertexBuffer=i.createBuffer();
this.indexBuffer=i.createBuffer();
i.bindBuffer(i.ARRAY_BUFFER,this.vertexBuffer);
i.bufferData(i.ARRAY_BUFFER,(8+8+16)*4,i.DYNAMIC_DRAW);
i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
i.bufferData(i.ELEMENT_ARRAY_BUFFER,this.indices,i.STATIC_DRAW);
this.upload()
}h.prototype.constructor=h;
h.prototype.map=function(k,j){var i=0;
var l=0;
this.uvs[0]=i;
this.uvs[1]=l;
this.uvs[2]=i+j.width/k.width;
this.uvs[3]=l;
this.uvs[4]=i+j.width/k.width;
this.uvs[5]=l+j.height/k.height;
this.uvs[6]=i;
this.uvs[7]=l+j.height/k.height;
i=j.x;
l=j.y;
this.vertices[0]=i;
this.vertices[1]=l;
this.vertices[2]=i+j.width;
this.vertices[3]=l;
this.vertices[4]=i+j.width;
this.vertices[5]=l+j.height;
this.vertices[6]=i;
this.vertices[7]=l+j.height;
this.upload()
};
h.prototype.upload=function(){var i=this.gl;
i.bindBuffer(i.ARRAY_BUFFER,this.vertexBuffer);
i.bufferSubData(i.ARRAY_BUFFER,0,this.vertices);
i.bufferSubData(i.ARRAY_BUFFER,8*4,this.uvs);
i.bufferSubData(i.ARRAY_BUFFER,(8+8)*4,this.colors)
};
h.prototype.destroy=function(){var i=this.gl;
i.deleteBuffer(this.vertexBuffer);
i.deleteBuffer(this.indexBuffer)
};
g.exports=h
},{}],55:[function(i,j,g){var k=i("../../../math"),f=i("../../../utils"),e=i("../../../const"),h=i("./StencilMaskStack");
var l=function(s,r,m,q,p,o){this.gl=s;
this.frameBuffer=null;
this.texture=null;
this.size=new k.Rectangle(0,0,1,1);
this.resolution=p||e.RESOLUTION;
this.projectionMatrix=new k.Matrix();
this.transform=null;
this.frame=null;
this.stencilBuffer=null;
this.stencilMaskStack=new h();
this.filterStack=[{renderTarget:this,filter:[],bounds:this.size}];
this.scaleMode=q||e.SCALE_MODES.DEFAULT;
this.root=o;
if(!this.root){this.frameBuffer=s.createFramebuffer();
this.texture=s.createTexture();
s.bindTexture(s.TEXTURE_2D,this.texture);
s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,q===e.SCALE_MODES.LINEAR?s.LINEAR:s.NEAREST);
s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,q===e.SCALE_MODES.LINEAR?s.LINEAR:s.NEAREST);
var n=f.isPowerOfTwo(r,m);
if(!n){s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE);
s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)
}else{s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.REPEAT);
s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.REPEAT)
}s.bindFramebuffer(s.FRAMEBUFFER,this.frameBuffer);
s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,this.texture,0)
}this.resize(r,m)
};
l.prototype.constructor=l;
j.exports=l;
l.prototype.clear=function(n){var m=this.gl;
if(n){m.bindFramebuffer(m.FRAMEBUFFER,this.frameBuffer)
}m.clearColor(0,0,0,0);
m.clear(m.COLOR_BUFFER_BIT)
};
l.prototype.attachStencilBuffer=function(){if(this.stencilBuffer){return
}if(!this.root){var m=this.gl;
this.stencilBuffer=m.createRenderbuffer();
m.bindRenderbuffer(m.RENDERBUFFER,this.stencilBuffer);
m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_STENCIL_ATTACHMENT,m.RENDERBUFFER,this.stencilBuffer);
m.renderbufferStorage(m.RENDERBUFFER,m.DEPTH_STENCIL,this.size.width*this.resolution,this.size.height*this.resolution)
}};
l.prototype.activate=function(){var n=this.gl;
n.bindFramebuffer(n.FRAMEBUFFER,this.frameBuffer);
var m=this.frame||this.size;
this.calculateProjection(m);
if(this.transform){this.projectionMatrix.append(this.transform)
}n.viewport(0,0,m.width*this.resolution,m.height*this.resolution)
};
l.prototype.calculateProjection=function(m){var n=this.projectionMatrix;
n.identity();
if(!this.root){n.a=1/m.width*2;
n.d=1/m.height*2;
n.tx=-1-m.x*n.a;
n.ty=-1-m.y*n.d
}else{n.a=1/m.width*2;
n.d=-1/m.height*2;
n.tx=-1-m.x*n.a;
n.ty=1-m.y*n.d
}};
l.prototype.resize=function(o,m){o=o|0;
m=m|0;
if(this.size.width===o&&this.size.height===m){return
}this.size.width=o;
this.size.height=m;
if(!this.root){var p=this.gl;
p.bindTexture(p.TEXTURE_2D,this.texture);
p.texImage2D(p.TEXTURE_2D,0,p.RGBA,o*this.resolution,m*this.resolution,0,p.RGBA,p.UNSIGNED_BYTE,null);
if(this.stencilBuffer){p.bindRenderbuffer(p.RENDERBUFFER,this.stencilBuffer);
p.renderbufferStorage(p.RENDERBUFFER,p.DEPTH_STENCIL,o*this.resolution,m*this.resolution)
}}var n=this.frame||this.size;
this.calculateProjection(n)
};
l.prototype.destroy=function(){var m=this.gl;
m.deleteRenderbuffer(this.stencilBuffer);
m.deleteFramebuffer(this.frameBuffer);
m.deleteTexture(this.texture);
this.frameBuffer=null;
this.texture=null
}
},{"../../../const":13,"../../../math":23,"../../../utils":67,"./StencilMaskStack":56}],56:[function(g,h,e){function f(){this.stencilStack=[];
this.reverse=true;
this.count=0
}f.prototype.constructor=f;
h.exports=f
},{}],57:[function(i,h,l){var m=i("../math"),k=i("../textures/Texture"),j=i("../display/Container"),f=i("../renderers/canvas/utils/CanvasTinter"),n=i("../utils"),o=i("../const"),e=new m.Point();
function g(p){j.call(this);
this.anchor=new m.Point();
this._texture=null;
this._width=0;
this._height=0;
this.tint=16777215;
this.blendMode=o.BLEND_MODES.NORMAL;
this.shader=null;
this.cachedTint=16777215;
this.texture=p||k.EMPTY
}g.prototype=Object.create(j.prototype);
g.prototype.constructor=g;
h.exports=g;
Object.defineProperties(g.prototype,{width:{get:function(){return Math.abs(this.scale.x)*this.texture._frame.width
},set:function(p){this.scale.x=n.sign(this.scale.x)*p/this.texture._frame.width;
this._width=p
}},height:{get:function(){return Math.abs(this.scale.y)*this.texture._frame.height
},set:function(p){this.scale.y=n.sign(this.scale.y)*p/this.texture._frame.height;
this._height=p
}},texture:{get:function(){return this._texture
},set:function(p){if(this._texture===p){return
}this._texture=p;
this.cachedTint=16777215;
if(p){if(p.baseTexture.hasLoaded){this._onTextureUpdate()
}else{p.once("update",this._onTextureUpdate,this)
}}}}});
g.prototype._onTextureUpdate=function(){if(this._width){this.scale.x=n.sign(this.scale.x)*this._width/this.texture.frame.width
}if(this._height){this.scale.y=n.sign(this.scale.y)*this._height/this.texture.frame.height
}};
g.prototype._renderWebGL=function(p){p.setObjectRenderer(p.plugins.sprite);
p.plugins.sprite.render(this)
};
g.prototype.getBounds=function(C){if(!this._currentBounds){var z=this._texture._frame.width;
var y=this._texture._frame.height;
var x=z*(1-this.anchor.x);
var w=z*-this.anchor.x;
var v=y*(1-this.anchor.y);
var u=y*-this.anchor.y;
var A=C||this.worldTransform;
var P=A.a;
var N=A.b;
var L=A.c;
var I=A.d;
var Q=A.tx;
var O=A.ty;
var M,K,J,G;
if(N===0&&L===0){if(P<0){P*=-1
}if(I<0){I*=-1
}M=P*w+Q;
K=P*x+Q;
J=I*u+O;
G=I*v+O
}else{var F=P*w+L*u+Q;
var s=I*u+N*w+O;
var E=P*x+L*u+Q;
var r=I*u+N*x+O;
var D=P*x+L*v+Q;
var q=I*v+N*x+O;
var B=P*w+L*v+Q;
var p=I*v+N*w+O;
M=F;
M=E<M?E:M;
M=D<M?D:M;
M=B<M?B:M;
J=s;
J=r<J?r:J;
J=q<J?q:J;
J=p<J?p:J;
K=F;
K=E>K?E:K;
K=D>K?D:K;
K=B>K?B:K;
G=s;
G=r>G?r:G;
G=q>G?q:G;
G=p>G?p:G
}if(this.children.length){var H=this.containerGetBounds();
x=H.x;
w=H.x+H.width;
v=H.y;
u=H.y+H.height;
M=(M<x)?M:x;
J=(J<v)?J:v;
K=(K>w)?K:w;
G=(G>u)?G:u
}var t=this._bounds;
t.x=M;
t.width=K-M;
t.y=J;
t.height=G-J;
this._currentBounds=t
}return this._currentBounds
};
g.prototype.getLocalBounds=function(){this._bounds.x=-this._texture._frame.width*this.anchor.x;
this._bounds.y=-this._texture._frame.height*this.anchor.y;
this._bounds.width=this._texture._frame.width;
this._bounds.height=this._texture._frame.height;
return this._bounds
};
g.prototype.containsPoint=function(q){this.worldTransform.applyInverse(q,e);
var t=this._texture._frame.width;
var p=this._texture._frame.height;
var r=-t*this.anchor.x;
var s;
if(e.x>r&&e.x<r+t){s=-p*this.anchor.y;
if(e.y>s&&e.y<s+p){return true
}}return false
};
g.prototype._renderCanvas=function(t){if(this.texture.crop.width<=0||this.texture.crop.height<=0){return
}var r=t.blendModes[this.blendMode];
if(r!==t.context.globalCompositeOperation){t.context.globalCompositeOperation=r
}if(this.texture.valid){var u=this._texture,s=this.worldTransform,A,z,p,y;
t.context.globalAlpha=this.worldAlpha;
var x=u.baseTexture.scaleMode===o.SCALE_MODES.LINEAR;
if(t.smoothProperty&&t.context[t.smoothProperty]!==x){t.context[t.smoothProperty]=x
}if(u.rotate){var w=s.a;
var v=s.b;
s.a=-s.c;
s.b=-s.d;
s.c=w;
s.d=v;
p=u.crop.height;
y=u.crop.width;
A=(u.trim)?u.trim.y-this.anchor.y*u.trim.height:this.anchor.y*-u._frame.height;
z=(u.trim)?u.trim.x-this.anchor.x*u.trim.width:this.anchor.x*-u._frame.width
}else{p=u.crop.width;
y=u.crop.height;
A=(u.trim)?u.trim.x-this.anchor.x*u.trim.width:this.anchor.x*-u._frame.width;
z=(u.trim)?u.trim.y-this.anchor.y*u.trim.height:this.anchor.y*-u._frame.height
}if(t.roundPixels){t.context.setTransform(s.a,s.b,s.c,s.d,(s.tx*t.resolution)|0,(s.ty*t.resolution)|0);
A=A|0;
z=z|0
}else{t.context.setTransform(s.a,s.b,s.c,s.d,s.tx*t.resolution,s.ty*t.resolution)
}var q=u.baseTexture.resolution;
if(this.tint!==16777215){if(this.cachedTint!==this.tint){this.cachedTint=this.tint;
this.tintedTexture=f.getTintedTexture(this,this.tint)
}t.context.drawImage(this.tintedTexture,0,0,p*q,y*q,A*t.resolution,z*t.resolution,p*t.resolution,y*t.resolution)
}else{t.context.drawImage(u.baseTexture.source,u.crop.x*q,u.crop.y*q,p*q,y*q,A*t.resolution,z*t.resolution,p*t.resolution,y*t.resolution)
}}};
g.prototype.destroy=function(p,q){j.prototype.destroy.call(this);
this.anchor=null;
if(p){this._texture.destroy(q)
}this._texture=null;
this.shader=null
};
g.fromFrame=function(q){var p=n.TextureCache[q];
if(!p){throw new Error('The frameId "'+q+'" does not exist in the texture cache')
}return new g(p)
};
g.fromImage=function(q,p,r){return new g(k.fromImage(q,p,r))
}
},{"../const":13,"../display/Container":14,"../math":23,"../renderers/canvas/utils/CanvasTinter":38,"../textures/Texture":62,"../utils":67}],58:[function(h,i,g){var k=h("../../renderers/webgl/utils/ObjectRenderer"),f=h("../../renderers/webgl/WebGLRenderer"),e=h("../../const");
function j(o){k.call(this,o);
this.vertSize=5;
this.vertByteSize=this.vertSize*4;
this.size=e.SPRITE_BATCH_SIZE;
var l=(this.size*4)*this.vertByteSize;
var p=this.size*6;
this.vertices=new ArrayBuffer(l);
this.positions=new Float32Array(this.vertices);
this.colors=new Uint32Array(this.vertices);
this.indices=new Uint16Array(p);
for(var n=0,m=0;
n<p;
n+=6,m+=4){this.indices[n+0]=m+0;
this.indices[n+1]=m+1;
this.indices[n+2]=m+2;
this.indices[n+3]=m+0;
this.indices[n+4]=m+2;
this.indices[n+5]=m+3
}this.currentBatchSize=0;
this.sprites=[];
this.shader=null
}j.prototype=Object.create(k.prototype);
j.prototype.constructor=j;
i.exports=j;
f.registerPlugin("sprite",j);
j.prototype.onContextChange=function(){var l=this.renderer.gl;
this.shader=this.renderer.shaderManager.defaultShader;
this.vertexBuffer=l.createBuffer();
this.indexBuffer=l.createBuffer();
l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
l.bufferData(l.ELEMENT_ARRAY_BUFFER,this.indices,l.STATIC_DRAW);
l.bindBuffer(l.ARRAY_BUFFER,this.vertexBuffer);
l.bufferData(l.ARRAY_BUFFER,this.vertices,l.DYNAMIC_DRAW);
this.currentBlendMode=99999
};
j.prototype.render=function(x){var w=x._texture;
if(this.currentBatchSize>=this.size){this.flush()
}var t=w._uvs;
if(!t){return
}var m=x.anchor.x;
var l=x.anchor.y;
var v,u,r,q;
if(w.trim&&x.tileScale===undefined){var z=w.trim;
u=z.x-m*z.width;
v=u+w.crop.width;
q=z.y-l*z.height;
r=q+w.crop.height
}else{v=(w._frame.width)*(1-m);
u=(w._frame.width)*-m;
r=w._frame.height*(1-l);
q=w._frame.height*-l
}var n=this.currentBatchSize*this.vertByteSize;
var y=x.worldTransform;
var E=y.a;
var D=y.b;
var B=y.c;
var A=y.d;
var F=y.tx;
var C=y.ty;
var s=this.colors;
var p=this.positions;
if(this.renderer.roundPixels){p[n]=E*u+B*q+F|0;
p[n+1]=A*q+D*u+C|0;
p[n+5]=E*v+B*q+F|0;
p[n+6]=A*q+D*v+C|0;
p[n+10]=E*v+B*r+F|0;
p[n+11]=A*r+D*v+C|0;
p[n+15]=E*u+B*r+F|0;
p[n+16]=A*r+D*u+C|0
}else{p[n]=E*u+B*q+F;
p[n+1]=A*q+D*u+C;
p[n+5]=E*v+B*q+F;
p[n+6]=A*q+D*v+C;
p[n+10]=E*v+B*r+F;
p[n+11]=A*r+D*v+C;
p[n+15]=E*u+B*r+F;
p[n+16]=A*r+D*u+C
}p[n+2]=t.x0;
p[n+3]=t.y0;
p[n+7]=t.x1;
p[n+8]=t.y1;
p[n+12]=t.x2;
p[n+13]=t.y2;
p[n+17]=t.x3;
p[n+18]=t.y3;
var o=x.tint;
s[n+4]=s[n+9]=s[n+14]=s[n+19]=(o>>16)+(o&65280)+((o&255)<<16)+(x.worldAlpha*255<<24);
this.sprites[this.currentBatchSize++]=x
};
j.prototype.flush=function(){if(this.currentBatchSize===0){return
}var t=this.renderer.gl;
var v;
if(this.currentBatchSize>(this.size*0.5)){t.bufferSubData(t.ARRAY_BUFFER,0,this.vertices)
}else{var x=this.positions.subarray(0,this.currentBatchSize*this.vertByteSize);
t.bufferSubData(t.ARRAY_BUFFER,0,x)
}var A,p,l;
var w=0;
var n=0;
var u=null;
var o=this.renderer.blendModeManager.currentBlendMode;
var m=null;
var s=false;
var y=false;
var z;
for(var r=0,q=this.currentBatchSize;
r<q;
r++){z=this.sprites[r];
A=z._texture.baseTexture;
p=z.blendMode;
l=z.shader||this.shader;
s=o!==p;
y=m!==l;
if(u!==A||s||y){this.renderBatch(u,w,n);
n=r;
w=0;
u=A;
if(s){o=p;
this.renderer.blendModeManager.setBlendMode(o)
}if(y){m=l;
v=m.shaders?m.shaders[t.id]:m;
if(!v){v=m.getShader(this.renderer)
}this.renderer.shaderManager.setShader(v);
v.uniforms.projectionMatrix.value=this.renderer.currentRenderTarget.projectionMatrix.toArray(true);
v.syncUniforms();
t.activeTexture(t.TEXTURE0)
}}w++
}this.renderBatch(u,w,n);
this.currentBatchSize=0
};
j.prototype.renderBatch=function(m,l,o){if(l===0){return
}var n=this.renderer.gl;
if(!m._glTextures[n.id]){this.renderer.updateTexture(m)
}else{n.bindTexture(n.TEXTURE_2D,m._glTextures[n.id])
}n.drawElements(n.TRIANGLES,l*6,n.UNSIGNED_SHORT,o*6*2);
this.renderer.drawCount++
};
j.prototype.start=function(){var m=this.renderer.gl;
m.bindBuffer(m.ARRAY_BUFFER,this.vertexBuffer);
m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
var l=this.vertByteSize;
m.vertexAttribPointer(this.shader.attributes.aVertexPosition,2,m.FLOAT,false,l,0);
m.vertexAttribPointer(this.shader.attributes.aTextureCoord,2,m.FLOAT,false,l,2*4);
m.vertexAttribPointer(this.shader.attributes.aColor,4,m.UNSIGNED_BYTE,true,l,4*4)
};
j.prototype.destroy=function(){this.renderer.gl.deleteBuffer(this.vertexBuffer);
this.renderer.gl.deleteBuffer(this.indexBuffer);
k.prototype.destroy.call(this);
this.shader.destroy();
this.renderer=null;
this.vertices=null;
this.positions=null;
this.colors=null;
this.indices=null;
this.vertexBuffer=null;
this.indexBuffer=null;
this.sprites=null;
this.shader=null
}
},{"../../const":13,"../../renderers/webgl/WebGLRenderer":39,"../../renderers/webgl/utils/ObjectRenderer":53}],59:[function(h,f,j){var e=h("../sprites/Sprite"),i=h("../textures/Texture"),k=h("../math"),l=h("../utils"),m=h("../const");
function g(q,o,n){this.canvas=document.createElement("canvas");
this.context=this.canvas.getContext("2d");
this.resolution=n||m.RESOLUTION;
this._text=null;
this._style=null;
var p=i.fromCanvas(this.canvas);
p.trim=new k.Rectangle();
e.call(this,p);
this.text=q;
this.style=o
}g.prototype=Object.create(e.prototype);
g.prototype.constructor=g;
f.exports=g;
g.fontPropertiesCache={};
g.fontPropertiesCanvas=document.createElement("canvas");
g.fontPropertiesContext=g.fontPropertiesCanvas.getContext("2d");
Object.defineProperties(g.prototype,{width:{get:function(){if(this.dirty){this.updateText()
}return this.scale.x*this._texture._frame.width
},set:function(n){this.scale.x=n/this._texture._frame.width;
this._width=n
}},height:{get:function(){if(this.dirty){this.updateText()
}return this.scale.y*this._texture._frame.height
},set:function(n){this.scale.y=n/this._texture._frame.height;
this._height=n
}},style:{get:function(){return this._style
},set:function(n){n=n||{};
if(typeof n.fill==="number"){n.fill=l.hex2string(n.fill)
}if(typeof n.stroke==="number"){n.stroke=l.hex2string(n.stroke)
}if(typeof n.dropShadowColor==="number"){n.dropShadowColor=l.hex2string(n.dropShadowColor)
}n.font=n.font||"bold 20pt Arial";
n.fill=n.fill||"black";
n.align=n.align||"left";
n.stroke=n.stroke||"black";
n.strokeThickness=n.strokeThickness||0;
n.wordWrap=n.wordWrap||false;
n.wordWrapWidth=n.wordWrapWidth||100;
n.dropShadow=n.dropShadow||false;
n.dropShadowColor=n.dropShadowColor||"#000000";
n.dropShadowAngle=n.dropShadowAngle||Math.PI/6;
n.dropShadowDistance=n.dropShadowDistance||5;
n.padding=n.padding||0;
n.textBaseline=n.textBaseline||"alphabetic";
n.lineJoin=n.lineJoin||"miter";
n.miterLimit=n.miterLimit||10;
this._style=n;
this.dirty=true
}},text:{get:function(){return this._text
},set:function(n){n=n.toString()||" ";
if(this._text===n){return
}this._text=n;
this.dirty=true
}}});
g.prototype.updateText=function(){var o=this._style;
this.context.font=o.font;
var u=o.wordWrap?this.wordWrap(this._text):this._text;
var A=u.split(/(?:\r\n|\r|\n)/);
var t=new Array(A.length);
var B=0;
var r=this.determineFontProperties(o.font);
for(var v=0;
v<A.length;
v++){var w=this.context.measureText(A[v]).width;
t[v]=w;
B=Math.max(B,w)
}var q=B+o.strokeThickness;
if(o.dropShadow){q+=o.dropShadowDistance
}this.canvas.width=(q+this.context.lineWidth)*this.resolution;
var y=this.style.lineHeight||r.fontSize+o.strokeThickness;
var z=y*A.length;
if(o.dropShadow){z+=o.dropShadowDistance
}this.canvas.height=(z+this._style.padding*2)*this.resolution;
this.context.scale(this.resolution,this.resolution);
if(navigator.isCocoonJS){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
}this.context.font=o.font;
this.context.strokeStyle=o.stroke;
this.context.lineWidth=o.strokeThickness;
this.context.textBaseline=o.textBaseline;
this.context.lineJoin=o.lineJoin;
this.context.miterLimit=o.miterLimit;
var s;
var p;
if(o.dropShadow){this.context.fillStyle=o.dropShadowColor;
var x=Math.cos(o.dropShadowAngle)*o.dropShadowDistance;
var n=Math.sin(o.dropShadowAngle)*o.dropShadowDistance;
for(v=0;
v<A.length;
v++){s=o.strokeThickness/2;
p=(o.strokeThickness/2+v*y)+r.ascent;
if(o.align==="right"){s+=B-t[v]
}else{if(o.align==="center"){s+=(B-t[v])/2
}}if(o.fill){this.context.fillText(A[v],s+x,p+n+this._style.padding)
}}}this.context.fillStyle=o.fill;
for(v=0;
v<A.length;
v++){s=o.strokeThickness/2;
p=(o.strokeThickness/2+v*y)+r.ascent;
if(o.align==="right"){s+=B-t[v]
}else{if(o.align==="center"){s+=(B-t[v])/2
}}if(o.stroke&&o.strokeThickness){this.context.strokeText(A[v],s,p+this._style.padding)
}if(o.fill){this.context.fillText(A[v],s,p+this._style.padding)
}}this.updateTexture()
};
g.prototype.updateTexture=function(){var n=this._texture;
n.baseTexture.hasLoaded=true;
n.baseTexture.resolution=this.resolution;
n.baseTexture.width=this.canvas.width/this.resolution;
n.baseTexture.height=this.canvas.height/this.resolution;
n.crop.width=n._frame.width=this.canvas.width/this.resolution;
n.crop.height=n._frame.height=this.canvas.height/this.resolution;
n.trim.x=0;
n.trim.y=-this._style.padding;
n.trim.width=n._frame.width;
n.trim.height=n._frame.height-this._style.padding*2;
this._width=this.canvas.width/this.resolution;
this._height=this.canvas.height/this.resolution;
n.baseTexture.emit("update",n.baseTexture);
this.dirty=false
};
g.prototype.renderWebGL=function(n){if(this.dirty){this.updateText()
}e.prototype.renderWebGL.call(this,n)
};
g.prototype._renderCanvas=function(n){if(this.dirty){this.updateText()
}e.prototype._renderCanvas.call(this,n)
};
g.prototype.determineFontProperties=function(s){var v=g.fontPropertiesCache[s];
if(!v){v={};
var p=g.fontPropertiesCanvas;
var o=g.fontPropertiesContext;
o.font=s;
var n=Math.ceil(o.measureText("|MÉq").width);
var u=Math.ceil(o.measureText("M").width);
var z=2*u;
u=u*1.4|0;
p.width=n;
p.height=z;
o.fillStyle="#f00";
o.fillRect(0,0,n,z);
o.font=s;
o.textBaseline="alphabetic";
o.fillStyle="#000";
o.fillText("|MÉq",0,u);
var w=o.getImageData(0,0,n,z).data;
var q=w.length;
var A=n*4;
var t,r;
var y=0;
var x=false;
for(t=0;
t<u;
t++){for(r=0;
r<A;
r+=4){if(w[y+r]!==255){x=true;
break
}}if(!x){y+=A
}else{break
}}v.ascent=u-t;
y=q-A;
x=false;
for(t=z;
t>u;
t--){for(r=0;
r<A;
r+=4){if(w[y+r]!==255){x=true;
break
}}if(!x){y-=A
}else{break
}}v.descent=t-u;
v.fontSize=v.ascent+v.descent;
g.fontPropertiesCache[s]=v
}return v
};
g.prototype.wordWrap=function(t){var w="";
var v=t.split("\n");
var n=this._style.wordWrapWidth;
for(var q=0;
q<v.length;
q++){var p=n;
var s=v[q].split(" ");
for(var o=0;
o<s.length;
o++){var u=this.context.measureText(s[o]).width;
var r=u+this.context.measureText(" ").width;
if(o===0||r>p){if(o>0){w+="\n"
}w+=s[o];
p=n-u
}else{p-=r;
w+=" "+s[o]
}}if(q<v.length-1){w+="\n"
}}return w
};
g.prototype.getBounds=function(n){if(this.dirty){this.updateText()
}return e.prototype.getBounds.call(this,n)
};
g.prototype.destroy=function(n){this.context=null;
this.canvas=null;
this._style=null;
this._texture.destroy(n===undefined?true:n)
}
},{"../const":13,"../math":23,"../sprites/Sprite":57,"../textures/Texture":62,"../utils":67}],60:[function(h,i,g){var f=h("../utils"),e=h("../const"),j=h("eventemitter3");
function k(n,m,l){j.call(this);
this.uid=f.uid();
this.resolution=l||1;
this.width=100;
this.height=100;
this.realWidth=100;
this.realHeight=100;
this.scaleMode=m||e.SCALE_MODES.DEFAULT;
this.hasLoaded=false;
this.isLoading=false;
this.source=null;
this.premultipliedAlpha=true;
this.imageUrl=null;
this.isPowerOfTwo=false;
this.mipmap=false;
this._glTextures=[];
if(n){this.loadSource(n)
}}k.prototype=Object.create(j.prototype);
k.prototype.constructor=k;
i.exports=k;
k.prototype.update=function(){this.realWidth=this.source.naturalWidth||this.source.width;
this.realHeight=this.source.naturalHeight||this.source.height;
this.width=this.realWidth/this.resolution;
this.height=this.realHeight/this.resolution;
this.isPowerOfTwo=f.isPowerOfTwo(this.realWidth,this.realHeight);
this.emit("update",this)
};
k.prototype.loadSource=function(n){var m=this.isLoading;
this.hasLoaded=false;
this.isLoading=false;
if(m&&this.source){this.source.onload=null;
this.source.onerror=null
}this.source=n;
if((this.source.complete||this.source.getContext)&&this.source.width&&this.source.height){this._sourceLoaded()
}else{if(!n.getContext){this.isLoading=true;
var l=this;
n.onload=function(){n.onload=null;
n.onerror=null;
if(!l.isLoading){return
}l.isLoading=false;
l._sourceLoaded();
l.emit("loaded",l)
};
n.onerror=function(){n.onload=null;
n.onerror=null;
if(!l.isLoading){return
}l.isLoading=false;
l.emit("error",l)
};
if(n.complete&&n.src){this.isLoading=false;
n.onload=null;
n.onerror=null;
if(n.width&&n.height){this._sourceLoaded();
if(m){this.emit("loaded",this)
}}else{if(m){this.emit("error",this)
}}}}}};
k.prototype._sourceLoaded=function(){this.hasLoaded=true;
this.update()
};
k.prototype.destroy=function(){if(this.imageUrl){delete f.BaseTextureCache[this.imageUrl];
delete f.TextureCache[this.imageUrl];
this.imageUrl=null;
if(!navigator.isCocoonJS){this.source.src=""
}}else{if(this.source&&this.source._pixiId){delete f.BaseTextureCache[this.source._pixiId]
}}this.source=null;
this.dispose()
};
k.prototype.dispose=function(){this.emit("dispose",this);
this._glTextures.length=0
};
k.prototype.updateSourceImage=function(l){this.source.src=l;
this.loadSource(this.source)
};
k.fromImage=function(m,l,n){var o=f.BaseTextureCache[m];
if(l===undefined&&m.indexOf("data:")!==0){l=true
}if(!o){var p=new Image();
if(l){p.crossOrigin=""
}o=new k(p,n);
o.imageUrl=m;
p.src=m;
f.BaseTextureCache[m]=o;
o.resolution=f.getResolutionOfUrl(m)
}return o
};
k.fromCanvas=function(l,m){if(!l._pixiId){l._pixiId="canvas_"+f.uid()
}var n=f.BaseTextureCache[l._pixiId];
if(!n){n=new k(l,m);
f.BaseTextureCache[l._pixiId]=n
}return n
}
},{"../const":13,"../utils":67,eventemitter3:10}],61:[function(g,f,i){var k=g("./BaseTexture"),h=g("./Texture"),e=g("../renderers/webgl/utils/RenderTarget"),l=g("../renderers/webgl/managers/FilterManager"),n=g("../renderers/canvas/utils/CanvasBuffer"),o=g("../math"),p=g("../const"),m=new o.Matrix();
function j(v,t,q,s,r){if(!v){throw new Error("Unable to create RenderTexture, you must pass a renderer into the constructor.")
}t=t||100;
q=q||100;
r=r||p.RESOLUTION;
var u=new k();
u.width=t;
u.height=q;
u.resolution=r;
u.scaleMode=s||p.SCALE_MODES.DEFAULT;
u.hasLoaded=true;
h.call(this,u,new o.Rectangle(0,0,t,q));
this.width=t;
this.height=q;
this.resolution=r;
this.render=null;
this.renderer=v;
if(this.renderer.type===p.RENDERER_TYPE.WEBGL){var w=this.renderer.gl;
this.textureBuffer=new e(w,this.width,this.height,u.scaleMode,this.resolution);
this.baseTexture._glTextures[w.id]=this.textureBuffer.texture;
this.filterManager=new l(this.renderer);
this.filterManager.onContextChange();
this.filterManager.resize(t,q);
this.render=this.renderWebGL;
this.renderer.currentRenderer.start();
this.renderer.currentRenderTarget.activate()
}else{this.render=this.renderCanvas;
this.textureBuffer=new n(this.width*this.resolution,this.height*this.resolution);
this.baseTexture.source=this.textureBuffer.canvas
}this.valid=true;
this._updateUvs()
}j.prototype=Object.create(h.prototype);
j.prototype.constructor=j;
f.exports=j;
j.prototype.resize=function(s,q,r){if(s===this.width&&q===this.height){return
}this.valid=(s>0&&q>0);
this.width=this._frame.width=this.crop.width=s;
this.height=this._frame.height=this.crop.height=q;
if(r){this.baseTexture.width=this.width;
this.baseTexture.height=this.height
}if(!this.valid){return
}this.textureBuffer.resize(this.width,this.height);
if(this.filterManager){this.filterManager.resize(this.width,this.height)
}};
j.prototype.clear=function(){if(!this.valid){return
}if(this.renderer.type===p.RENDERER_TYPE.WEBGL){this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER,this.textureBuffer.frameBuffer)
}this.textureBuffer.clear()
};
j.prototype.renderWebGL=function(x,s,q,w){if(!this.valid){return
}w=(w!==undefined)?w:true;
this.textureBuffer.transform=s;
this.textureBuffer.activate();
x.worldAlpha=1;
if(w){x.worldTransform.identity();
x.currentBounds=null;
var v=x.children;
var u,t;
for(u=0,t=v.length;
u<t;
++u){v[u].updateTransform()
}}var r=this.renderer.filterManager;
this.renderer.filterManager=this.filterManager;
this.renderer.renderDisplayObject(x,this.textureBuffer,q);
this.renderer.filterManager=r
};
j.prototype.renderCanvas=function(y,A,w,t){if(!this.valid){return
}t=!!t;
var x=m;
x.identity();
if(A){x.append(A)
}y.worldTransform=x;
var r=y.worldTransform;
y.worldAlpha=1;
var s=y.children;
var v,u;
for(v=0,u=s.length;
v<u;
++v){s[v].updateTransform()
}if(w){this.textureBuffer.clear()
}var q=this.textureBuffer.context;
var z=this.renderer.resolution;
this.renderer.resolution=this.resolution;
this.renderer.renderDisplayObject(y,q);
this.renderer.resolution=z;
y.worldTransform=r
};
j.prototype.destroy=function(){h.prototype.destroy.call(this,true);
this.textureBuffer.destroy();
if(this.filterManager){this.filterManager.destroy()
}this.renderer=null
};
j.prototype.getImage=function(){var q=new Image();
q.src=this.getBase64();
return q
};
j.prototype.getBase64=function(){return this.getCanvas().toDataURL()
};
j.prototype.getCanvas=function(){if(this.renderer.type===p.RENDERER_TYPE.WEBGL){var v=this.renderer.gl;
var t=this.textureBuffer.size.width;
var q=this.textureBuffer.size.height;
var r=new Uint8Array(4*t*q);
v.bindFramebuffer(v.FRAMEBUFFER,this.textureBuffer.frameBuffer);
v.readPixels(0,0,t,q,v.RGBA,v.UNSIGNED_BYTE,r);
v.bindFramebuffer(v.FRAMEBUFFER,null);
var u=new n(t,q);
var s=u.context.getImageData(0,0,t,q);
s.data.set(r);
u.context.putImageData(s,0,0);
return u.canvas
}else{return this.textureBuffer.canvas
}};
j.prototype.getPixels=function(){var s,q;
if(this.renderer.type===p.RENDERER_TYPE.WEBGL){var t=this.renderer.gl;
s=this.textureBuffer.size.width;
q=this.textureBuffer.size.height;
var r=new Uint8Array(4*s*q);
t.bindFramebuffer(t.FRAMEBUFFER,this.textureBuffer.frameBuffer);
t.readPixels(0,0,s,q,t.RGBA,t.UNSIGNED_BYTE,r);
t.bindFramebuffer(t.FRAMEBUFFER,null);
return r
}else{s=this.textureBuffer.canvas.width;
q=this.textureBuffer.canvas.height;
return this.textureBuffer.canvas.getContext("2d").getImageData(0,0,s,q).data
}};
j.prototype.getPixel=function(q,t){if(this.renderer.type===p.RENDERER_TYPE.WEBGL){var s=this.renderer.gl;
var r=new Uint8Array(4);
s.bindFramebuffer(s.FRAMEBUFFER,this.textureBuffer.frameBuffer);
s.readPixels(q,t,1,1,s.RGBA,s.UNSIGNED_BYTE,r);
s.bindFramebuffer(s.FRAMEBUFFER,null);
return r
}else{return this.textureBuffer.canvas.getContext("2d").getImageData(q,t,1,1).data
}}
},{"../const":13,"../math":23,"../renderers/canvas/utils/CanvasBuffer":35,"../renderers/webgl/managers/FilterManager":44,"../renderers/webgl/utils/RenderTarget":55,"./BaseTexture":60,"./Texture":62}],62:[function(f,e,h){var i=f("./BaseTexture"),m=f("./VideoBaseTexture"),j=f("./TextureUvs"),n=f("eventemitter3"),k=f("../math"),l=f("../utils");
function g(r,s,q,o,p){n.call(this);
this.noFrame=false;
if(!s){this.noFrame=true;
s=new k.Rectangle(0,0,1,1)
}if(r instanceof g){r=r.baseTexture
}this.baseTexture=r;
this._frame=s;
this.trim=o;
this.valid=false;
this.requiresUpdate=false;
this._uvs=null;
this.width=0;
this.height=0;
this.crop=q||s;
this.rotate=!!p;
if(r.hasLoaded){if(this.noFrame){s=new k.Rectangle(0,0,r.width,r.height);
r.on("update",this.onBaseTextureUpdated,this)
}this.frame=s
}else{r.once("loaded",this.onBaseTextureLoaded,this)
}}g.prototype=Object.create(n.prototype);
g.prototype.constructor=g;
e.exports=g;
Object.defineProperties(g.prototype,{frame:{get:function(){return this._frame
},set:function(o){this._frame=o;
this.noFrame=false;
this.width=o.width;
this.height=o.height;
if(!this.trim&&!this.rotate&&(o.x+o.width>this.baseTexture.width||o.y+o.height>this.baseTexture.height)){throw new Error("Texture Error: frame does not fit inside the base Texture dimensions "+this)
}this.valid=o&&o.width&&o.height&&this.baseTexture.hasLoaded;
if(this.trim){this.width=this.trim.width;
this.height=this.trim.height;
this._frame.width=this.trim.width;
this._frame.height=this.trim.height
}else{this.crop=o
}if(this.valid){this._updateUvs()
}}}});
g.prototype.update=function(){this.baseTexture.update()
};
g.prototype.onBaseTextureLoaded=function(o){if(this.noFrame){this.frame=new k.Rectangle(0,0,o.width,o.height)
}else{this.frame=this._frame
}this.emit("update",this)
};
g.prototype.onBaseTextureUpdated=function(o){this._frame.width=o.width;
this._frame.height=o.height;
this.emit("update",this)
};
g.prototype.destroy=function(o){if(this.baseTexture){if(o){this.baseTexture.destroy()
}this.baseTexture.off("update",this.onBaseTextureUpdated,this);
this.baseTexture.off("loaded",this.onBaseTextureLoaded,this);
this.baseTexture=null
}this._frame=null;
this._uvs=null;
this.trim=null;
this.crop=null;
this.valid=false;
this.off("dispose",this.dispose,this);
this.off("update",this.update,this)
};
g.prototype.clone=function(){return new g(this.baseTexture,this.frame,this.crop,this.trim,this.rotate)
};
g.prototype._updateUvs=function(){if(!this._uvs){this._uvs=new j()
}this._uvs.set(this.crop,this.baseTexture,this.rotate)
};
g.fromImage=function(p,o,q){var r=l.TextureCache[p];
if(!r){r=new g(i.fromImage(p,o,q));
l.TextureCache[p]=r
}return r
};
g.fromFrame=function(p){var o=l.TextureCache[p];
if(!o){throw new Error('The frameId "'+p+'" does not exist in the texture cache')
}return o
};
g.fromCanvas=function(o,p){return new g(i.fromCanvas(o,p))
};
g.fromVideo=function(p,o){if(typeof p==="string"){return g.fromVideoUrl(p,o)
}else{return new g(m.fromVideo(p,o))
}};
g.fromVideoUrl=function(p,o){return new g(m.fromUrl(p,o))
};
g.addTextureToCache=function(o,p){l.TextureCache[p]=o
};
g.removeTextureFromCache=function(p){var o=l.TextureCache[p];
delete l.TextureCache[p];
delete l.BaseTextureCache[p];
return o
};
g.EMPTY=new g(new i())
},{"../math":23,"../utils":67,"./BaseTexture":60,"./TextureUvs":63,"./VideoBaseTexture":64,eventemitter3:10}],63:[function(f,g,e){function h(){this.x0=0;
this.y0=0;
this.x1=1;
this.y1=0;
this.x2=1;
this.y2=1;
this.x3=0;
this.y3=1
}g.exports=h;
h.prototype.set=function(m,l,j){var i=l.width;
var k=l.height;
if(j){this.x0=(m.x+m.height)/i;
this.y0=m.y/k;
this.x1=(m.x+m.height)/i;
this.y1=(m.y+m.width)/k;
this.x2=m.x/i;
this.y2=(m.y+m.width)/k;
this.x3=m.x/i;
this.y3=m.y/k
}else{this.x0=m.x/i;
this.y0=m.y/k;
this.x1=(m.x+m.width)/i;
this.y1=m.y/k;
this.x2=(m.x+m.width)/i;
this.y2=(m.y+m.height)/k;
this.x3=m.x/i;
this.y3=(m.y+m.height)/k
}}
},{}],64:[function(h,i,g){var k=h("./BaseTexture"),f=h("../utils");
function e(m,l){if(!m){throw new Error("No video source element specified.")
}if((m.readyState===m.HAVE_ENOUGH_DATA||m.readyState===m.HAVE_FUTURE_DATA)&&m.width&&m.height){m.complete=true
}k.call(this,m,l);
this.autoUpdate=false;
this._onUpdate=this._onUpdate.bind(this);
this._onCanPlay=this._onCanPlay.bind(this);
if(!m.complete){m.addEventListener("canplay",this._onCanPlay);
m.addEventListener("canplaythrough",this._onCanPlay);
m.addEventListener("play",this._onPlayStart.bind(this));
m.addEventListener("pause",this._onPlayStop.bind(this))
}this.__loaded=false
}e.prototype=Object.create(k.prototype);
e.prototype.constructor=e;
i.exports=e;
e.prototype._onUpdate=function(){if(this.autoUpdate){window.requestAnimationFrame(this._onUpdate);
this.update()
}};
e.prototype._onPlayStart=function(){if(!this.autoUpdate){window.requestAnimationFrame(this._onUpdate);
this.autoUpdate=true
}};
e.prototype._onPlayStop=function(){this.autoUpdate=false
};
e.prototype._onCanPlay=function(){this.hasLoaded=true;
if(this.source){this.source.removeEventListener("canplay",this._onCanPlay);
this.source.removeEventListener("canplaythrough",this._onCanPlay);
this.width=this.source.videoWidth;
this.height=this.source.videoHeight;
this.source.play();
if(!this.__loaded){this.__loaded=true;
this.emit("loaded",this)
}}};
e.prototype.destroy=function(){if(this.source&&this.source._pixiId){delete f.BaseTextureCache[this.source._pixiId];
delete this.source._pixiId
}k.prototype.destroy.call(this)
};
e.fromVideo=function(n,l){if(!n._pixiId){n._pixiId="video_"+f.uid()
}var m=f.BaseTextureCache[n._pixiId];
if(!m){m=new e(n,l);
f.BaseTextureCache[n._pixiId]=m
}return m
};
e.fromUrl=function(l,n){var o=document.createElement("video");
if(Array.isArray(l)){for(var m=0;
m<l.length;
++m){o.appendChild(j(l[m].src||l[m],l[m].mime))
}}else{o.appendChild(j(l.src||l,l.mime))
}o.load();
o.play();
return e.fromVideo(o,n)
};
e.fromUrls=e.fromUrl;
function j(n,l){if(!l){l="video/"+n.substr(n.lastIndexOf(".")+1)
}var m=document.createElement("source");
m.src=n;
m.type=l;
return m
}},{"../utils":67,"./BaseTexture":60}],65:[function(j,h,m){var t=j("../const"),s=j("eventemitter3"),l="tick";
function e(){var v=this;
this._tick=function u(w){v._requestId=null;
if(v.started){v.update(w);
if(v.started&&v._requestId===null&&v._emitter.listeners(l,true)){v._requestId=requestAnimationFrame(v._tick)
}}};
this._emitter=new s();
this._requestId=null;
this._maxElapsedMS=100;
this.autoStart=false;
this.deltaTime=1;
this.elapsedMS=1/t.TARGET_FPMS;
this.lastTime=0;
this.speed=1;
this.started=false
}Object.defineProperties(e.prototype,{FPS:{get:function(){return 1000/this.elapsedMS
}},minFPS:{get:function(){return 1000/this._maxElapsedMS
},set:function(u){var v=Math.min(Math.max(0,u)/1000,t.TARGET_FPMS);
this._maxElapsedMS=1/v
}}});
e.prototype._requestIfNeeded=function r(){if(this._requestId===null&&this._emitter.listeners(l,true)){this.lastTime=performance.now();
this._requestId=requestAnimationFrame(this._tick)
}};
e.prototype._cancelIfNeeded=function i(){if(this._requestId!==null){cancelAnimationFrame(this._requestId);
this._requestId=null
}};
e.prototype._startIfPossible=function q(){if(this.started){this._requestIfNeeded()
}else{if(this.autoStart){this.start()
}}};
e.prototype.add=function p(v,u){this._emitter.on(l,v,u);
this._startIfPossible();
return this
};
e.prototype.addOnce=function f(v,u){this._emitter.once(l,v,u);
this._startIfPossible();
return this
};
e.prototype.remove=function n(v,u){this._emitter.off(l,v,u);
if(!this._emitter.listeners(l,true)){this._cancelIfNeeded()
}return this
};
e.prototype.start=function g(){if(!this.started){this.started=true;
this._requestIfNeeded()
}};
e.prototype.stop=function o(){if(this.started){this.started=false;
this._cancelIfNeeded()
}};
e.prototype.update=function k(v){var u;
v=v||performance.now();
u=this.elapsedMS=v-this.lastTime;
if(u>this._maxElapsedMS){u=this._maxElapsedMS
}this.deltaTime=u*t.TARGET_FPMS*this.speed;
this._emitter.emit(l,this.deltaTime);
this.lastTime=v
};
h.exports=e
},{"../const":13,eventemitter3:10}],66:[function(f,g,e){var i=f("./Ticker");
var h=new i();
h.autoStart=true;
g.exports={shared:h,Ticker:i}
},{"./Ticker":65}],67:[function(h,i,g){var e=h("../const");
var f=i.exports={_uid:0,_saidHello:false,EventEmitter:h("eventemitter3"),pluginTarget:h("./pluginTarget"),async:h("async"),uid:function(){return ++f._uid
},hex2rgb:function(k,j){j=j||[];
j[0]=(k>>16&255)/255;
j[1]=(k>>8&255)/255;
j[2]=(k&255)/255;
return j
},hex2string:function(j){j=j.toString(16);
j="000000".substr(0,6-j.length)+j;
return"#"+j
},rgb2hex:function(j){return((j[0]*255<<16)+(j[1]*255<<8)+j[2]*255)
},canUseNewCanvasBlendModes:function(){if(typeof document==="undefined"){return false
}var k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABAQMAAADD8p2OAAAAA1BMVEX/";
var o="AAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==";
var j=new Image();
j.src=k+"AP804Oa6"+o;
var p=new Image();
p.src=k+"/wCKxvRF"+o;
var l=document.createElement("canvas");
l.width=6;
l.height=1;
var m=l.getContext("2d");
m.globalCompositeOperation="multiply";
m.drawImage(j,0,0);
m.drawImage(p,2,0);
var n=m.getImageData(2,0,1,1).data;
return(n[0]===255&&n[1]===0&&n[2]===0)
},getNextPowerOfTwo:function(k){if(k>0&&(k&(k-1))===0){return k
}else{var j=1;
while(j<k){j<<=1
}return j
}},isPowerOfTwo:function(k,j){return(k>0&&(k&(k-1))===0&&j>0&&(j&(j-1))===0)
},getResolutionOfUrl:function(k){var j=e.RETINA_PREFIX.exec(k);
if(j){return parseFloat(j[1])
}return 1
},sayHello:function(k){if(f._saidHello){return
}if(navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var j=["\n %c %c %c Pixi.js "+e.VERSION+" - ✰ "+k+" ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n","background: #ff66a5; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff66a5; background: #030307; padding:5px 0;","background: #ff66a5; padding:5px 0;","background: #ffc3dc; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;"];
window.console.log.apply(console,j)
}else{if(window.console){window.console.log("Pixi.js "+e.VERSION+" - "+k+" - http://www.pixijs.com/")
}}f._saidHello=true
},isWebGLSupported:function(){var j={stencil:true};
try{if(!window.WebGLRenderingContext){return false
}var k=document.createElement("canvas"),m=k.getContext("webgl",j)||k.getContext("experimental-webgl",j);
return !!(m&&m.getContextAttributes().stencil)
}catch(l){return false
}},sign:function(j){return j?(j<0?-1:1):0
},TextureCache:{},BaseTextureCache:{}}
},{"../const":13,"./pluginTarget":68,async:1,eventemitter3:10}],68:[function(h,i,g){function e(j){j.__plugins={};
j.registerPlugin=function(l,k){j.__plugins[l]=k
};
j.prototype.initPlugins=function(){this.plugins=this.plugins||{};
for(var k in j.__plugins){this.plugins[k]=new (j.__plugins[k])(this)
}};
j.prototype.destroyPlugins=function(){for(var k in this.plugins){this.plugins[k].destroy();
this.plugins[k]=null
}this.plugins=null
}
}i.exports={mixin:function f(j){e(j)
}}
},{}],69:[function(g,h,f){var e=g("./core"),k=g("./mesh"),i=g("./extras"),j=g("./filters");
e.SpriteBatch=function(){throw new ReferenceError("SpriteBatch does not exist any more, please use the new ParticleContainer instead.")
};
e.AssetLoader=function(){throw new ReferenceError("The loader system was overhauled in pixi v3, please see the new PIXI.loaders.Loader class.")
};
Object.defineProperties(e,{Stage:{get:function(){console.warn("You do not need to use a PIXI Stage any more, you can simply render any container.");
return e.Container
}},DisplayObjectContainer:{get:function(){console.warn("DisplayObjectContainer has been shortened to Container, please use Container from now on.");
return e.Container
}},Strip:{get:function(){console.warn("The Strip class has been renamed to Mesh and moved to mesh.Mesh, please use mesh.Mesh from now on.");
return k.Mesh
}},Rope:{get:function(){console.warn("The Rope class has been moved to mesh.Rope, please use mesh.Rope from now on.");
return k.Rope
}},MovieClip:{get:function(){console.warn("The MovieClip class has been moved to extras.MovieClip, please use extras.MovieClip from now on.");
return i.MovieClip
}},TilingSprite:{get:function(){console.warn("The TilingSprite class has been moved to extras.TilingSprite, please use extras.TilingSprite from now on.");
return i.TilingSprite
}},BitmapText:{get:function(){console.warn("The BitmapText class has been moved to extras.BitmapText, please use extras.BitmapText from now on.");
return i.BitmapText
}},blendModes:{get:function(){console.warn("The blendModes has been moved to BLEND_MODES, please use BLEND_MODES from now on.");
return e.BLEND_MODES
}},scaleModes:{get:function(){console.warn("The scaleModes has been moved to SCALE_MODES, please use SCALE_MODES from now on.");
return e.SCALE_MODES
}},BaseTextureCache:{get:function(){console.warn("The BaseTextureCache class has been moved to utils.BaseTextureCache, please use utils.BaseTextureCache from now on.");
return e.utils.BaseTextureCache
}},TextureCache:{get:function(){console.warn("The TextureCache class has been moved to utils.TextureCache, please use utils.TextureCache from now on.");
return e.utils.TextureCache
}},math:{get:function(){console.warn("The math namespace is deprecated, please access members already accessible on PIXI.");
return e
}}});
e.Sprite.prototype.setTexture=function(l){this.texture=l;
console.warn("setTexture is now deprecated, please use the texture property, e.g : sprite.texture = texture;")
};
i.BitmapText.prototype.setText=function(l){this.text=l;
console.warn("setText is now deprecated, please use the text property, e.g : myBitmapText.text = 'my text';")
};
e.Text.prototype.setText=function(l){this.text=l;
console.warn("setText is now deprecated, please use the text property, e.g : myText.text = 'my text';")
};
e.Text.prototype.setStyle=function(l){this.style=l;
console.warn("setStyle is now deprecated, please use the style property, e.g : myText.style = style;")
};
e.Texture.prototype.setFrame=function(l){this.frame=l;
console.warn("setFrame is now deprecated, please use the frame property, e.g : myTexture.frame = frame;")
};
Object.defineProperties(j,{AbstractFilter:{get:function(){console.warn("filters.AbstractFilter is an undocumented alias, please use AbstractFilter from now on.");
return e.AbstractFilter
}},FXAAFilter:{get:function(){console.warn("filters.FXAAFilter is an undocumented alias, please use FXAAFilter from now on.");
return e.FXAAFilter
}},SpriteMaskFilter:{get:function(){console.warn("filters.SpriteMaskFilter is an undocumented alias, please use SpriteMaskFilter from now on.");
return e.SpriteMaskFilter
}}});
e.utils.uuid=function(){console.warn("utils.uuid() is deprecated, please use utils.uid() from now on.");
return e.utils.uid()
}
},{"./core":20,"./extras":76,"./filters":93,"./mesh":117}],70:[function(g,h,f){var e=g("../core");
function i(k,j){e.Container.call(this);
j=j||{};
this.textWidth=0;
this.textHeight=0;
this._glyphs=[];
this._font={tint:j.tint!==undefined?j.tint:16777215,align:j.align||"left",name:null,size:0};
this.font=j.font;
this._text=k;
this.maxWidth=0;
this.maxLineHeight=0;
this.dirty=false;
this.updateText()
}i.prototype=Object.create(e.Container.prototype);
i.prototype.constructor=i;
h.exports=i;
Object.defineProperties(i.prototype,{tint:{get:function(){return this._font.tint
},set:function(j){this._font.tint=(typeof j==="number"&&j>=0)?j:16777215;
this.dirty=true
}},align:{get:function(){return this._font.align
},set:function(j){this._font.align=j||"left";
this.dirty=true
}},font:{get:function(){return this._font
},set:function(j){if(!j){return
}if(typeof j==="string"){j=j.split(" ");
this._font.name=j.length===1?j[0]:j.slice(1).join(" ");
this._font.size=j.length>=2?parseInt(j[0],10):i.fonts[this._font.name].size
}else{this._font.name=j.name;
this._font.size=typeof j.size==="number"?j.size:parseInt(j.size,10)
}this.dirty=true
}},text:{get:function(){return this._text
},set:function(j){j=j.toString()||" ";
if(this._text===j){return
}this._text=j;
this.dirty=true
}}});
i.prototype.updateText=function(){var y=i.fonts[this._font.name];
var m=new e.Point();
var n=null;
var t=[];
var r=0;
var u=0;
var B=[];
var q=0;
var z=this._font.size/y.size;
var p=-1;
var s=0;
for(var w=0;
w<this.text.length;
w++){var k=this.text.charCodeAt(w);
p=/(\s)/.test(this.text.charAt(w))?w:p;
if(/(?:\r\n|\r|\n)/.test(this.text.charAt(w))){B.push(r);
u=Math.max(u,r);
q++;
m.x=0;
m.y+=y.lineHeight;
n=null;
continue
}if(p!==-1&&this.maxWidth>0&&m.x*z>this.maxWidth){t.splice(p,w-p);
w=p;
p=-1;
B.push(r);
u=Math.max(u,r);
q++;
m.x=0;
m.y+=y.lineHeight;
n=null;
continue
}var j=y.chars[k];
if(!j){continue
}if(n&&j.kerning[n]){m.x+=j.kerning[n]
}t.push({texture:j.texture,line:q,charCode:k,position:new e.Point(m.x+j.xOffset,m.y+j.yOffset)});
r=m.x+(j.texture.width+j.xOffset);
m.x+=j.xAdvance;
s=Math.max(s,(j.yOffset+j.texture.height));
n=k
}B.push(r);
u=Math.max(u,r);
var v=[];
for(w=0;
w<=q;
w++){var A=0;
if(this._font.align==="right"){A=u-B[w]
}else{if(this._font.align==="center"){A=(u-B[w])/2
}}v.push(A)
}var l=t.length;
var o=this.tint;
for(w=0;
w<l;
w++){var x=this._glyphs[w];
if(x){x.texture=t[w].texture
}else{x=new e.Sprite(t[w].texture);
this._glyphs.push(x)
}x.position.x=(t[w].position.x+v[t[w].line])*z;
x.position.y=t[w].position.y*z;
x.scale.x=x.scale.y=z;
x.tint=o;
if(!x.parent){this.addChild(x)
}}for(w=l;
w<this._glyphs.length;
++w){this.removeChild(this._glyphs[w])
}this.textWidth=u*z;
this.textHeight=(m.y+y.lineHeight)*z;
this.maxLineHeight=s*z
};
i.prototype.updateTransform=function(){this.validate();
this.containerUpdateTransform()
};
i.prototype.getLocalBounds=function(){this.validate();
return e.Container.prototype.getLocalBounds.call(this)
};
i.prototype.validate=function(){if(this.dirty){this.updateText();
this.dirty=false
}};
i.fonts={}
},{"../core":20}],71:[function(g,h,f){var e=g("../core");
function i(j){e.Sprite.call(this,j[0] instanceof e.Texture?j[0]:j[0].texture);
this._textures=null;
this._durations=null;
this.textures=j;
this.animationSpeed=1;
this.loop=true;
this.onComplete=null;
this._currentTime=0;
this.playing=false
}i.prototype=Object.create(e.Sprite.prototype);
i.prototype.constructor=i;
h.exports=i;
Object.defineProperties(i.prototype,{totalFrames:{get:function(){return this._textures.length
}},textures:{get:function(){return this._textures
},set:function(k){if(k[0] instanceof e.Texture){this._textures=k;
this._durations=null
}else{this._textures=[];
this._durations=[];
for(var j=0;
j<k.length;
j++){this._textures.push(k[j].texture);
this._durations.push(k[j].time)
}}}},currentFrame:{get:function(){var j=Math.floor(this._currentTime)%this._textures.length;
if(j<0){j+=this._textures.length
}return j
}}});
i.prototype.stop=function(){if(!this.playing){return
}this.playing=false;
e.ticker.shared.remove(this.update,this)
};
i.prototype.play=function(){if(this.playing){return
}this.playing=true;
e.ticker.shared.add(this.update,this)
};
i.prototype.gotoAndStop=function(j){this.stop();
this._currentTime=j;
this._texture=this._textures[this.currentFrame]
};
i.prototype.gotoAndPlay=function(j){this._currentTime=j;
this.play()
};
i.prototype.update=function(l){var k=this.animationSpeed*l;
if(this._durations!==null){var m=this._currentTime%1*this._durations[this.currentFrame];
m+=k/60*1000;
while(m<0){this._currentTime--;
m+=this._durations[this.currentFrame]
}var j=Math.sign(this.animationSpeed*l);
this._currentTime=Math.floor(this._currentTime);
while(m>=this._durations[this.currentFrame]){m-=this._durations[this.currentFrame]*j;
this._currentTime+=j
}this._currentTime+=m/this._durations[this.currentFrame]
}else{this._currentTime+=k
}if(this._currentTime<0&&!this.loop){this.gotoAndStop(0);
if(this.onComplete){this.onComplete()
}}else{if(this._currentTime>=this._textures.length&&!this.loop){this.gotoAndStop(this._textures.length-1);
if(this.onComplete){this.onComplete()
}}else{this._texture=this._textures[this.currentFrame]
}}};
i.prototype.destroy=function(){this.stop();
e.Sprite.prototype.destroy.call(this)
};
i.fromFrames=function(l){var j=[];
for(var k=0;
k<l.length;
++k){j.push(new e.Texture.fromFrame(l[k]))
}return new i(j)
};
i.fromImages=function(k){var j=[];
for(var l=0;
l<k.length;
++l){j.push(new e.Texture.fromImage(k[l]))
}return new i(j)
}
},{"../core":20}],72:[function(g,h,f){var e=g("../core"),j=new e.Point(),k=g("../core/renderers/canvas/utils/CanvasTinter");
function i(n,m,l){e.Sprite.call(this,n);
this.tileScale=new e.Point(1,1);
this.tilePosition=new e.Point(0,0);
this._width=m||100;
this._height=l||100;
this._uvs=new e.TextureUvs();
this._canvasPattern=null;
this.shader=new e.AbstractFilter(["precision lowp float;","attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute vec4 aColor;","uniform mat3 projectionMatrix;","uniform vec4 uFrame;","uniform vec4 uTransform;","varying vec2 vTextureCoord;","varying vec4 vColor;","void main(void){","   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);","   vec2 coord = aTextureCoord;","   coord -= uTransform.xy;","   coord /= uTransform.zw;","   vTextureCoord = coord;","   vColor = vec4(aColor.rgb * aColor.a, aColor.a);","}"].join("\n"),["precision lowp float;","varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","uniform vec4 uFrame;","uniform vec2 uPixelSize;","void main(void){","   vec2 coord = mod(vTextureCoord, uFrame.zw);","   coord = clamp(coord, uPixelSize, uFrame.zw - uPixelSize);","   coord += uFrame.xy;","   gl_FragColor =  texture2D(uSampler, coord) * vColor ;","}"].join("\n"),{uFrame:{type:"4fv",value:[0,0,1,1]},uTransform:{type:"4fv",value:[0,0,1,1]},uPixelSize:{type:"2fv",value:[1,1]}})
}i.prototype=Object.create(e.Sprite.prototype);
i.prototype.constructor=i;
h.exports=i;
Object.defineProperties(i.prototype,{width:{get:function(){return this._width
},set:function(l){this._width=l
}},height:{get:function(){return this._height
},set:function(l){this._height=l
}}});
i.prototype._onTextureUpdate=function(){return
};
i.prototype._renderWebGL=function(q){var p=this._texture;
if(!p||!p._uvs){return
}var r=p._uvs,n=p._frame.width,m=p._frame.height,l=p.baseTexture.width,o=p.baseTexture.height;
p._uvs=this._uvs;
p._frame.width=this.width;
p._frame.height=this.height;
this.shader.uniforms.uPixelSize.value[0]=1/l;
this.shader.uniforms.uPixelSize.value[1]=1/o;
this.shader.uniforms.uFrame.value[0]=r.x0;
this.shader.uniforms.uFrame.value[1]=r.y0;
this.shader.uniforms.uFrame.value[2]=r.x1-r.x0;
this.shader.uniforms.uFrame.value[3]=r.y2-r.y0;
this.shader.uniforms.uTransform.value[0]=(this.tilePosition.x%(n*this.tileScale.x))/this._width;
this.shader.uniforms.uTransform.value[1]=(this.tilePosition.y%(m*this.tileScale.y))/this._height;
this.shader.uniforms.uTransform.value[2]=(l/this._width)*this.tileScale.x;
this.shader.uniforms.uTransform.value[3]=(o/this._height)*this.tileScale.y;
q.setObjectRenderer(q.plugins.sprite);
q.plugins.sprite.render(this);
p._uvs=r;
p._frame.width=n;
p._frame.height=m
};
i.prototype._renderCanvas=function(s){var t=this._texture;
if(!t.baseTexture.hasLoaded){return
}var o=s.context,p=this.worldTransform,q=s.resolution,m=t.baseTexture,n=(this.tilePosition.x/this.tileScale.x)%t._frame.width,l=(this.tilePosition.y/this.tileScale.y)%t._frame.height;
if(!this._canvasPattern){var u=new e.CanvasBuffer(t._frame.width,t._frame.height);
if(this.tint!==16777215){if(this.cachedTint!==this.tint){this.cachedTint=this.tint;
this.tintedTexture=k.getTintedTexture(this,this.tint)
}u.context.drawImage(this.tintedTexture,0,0)
}else{u.context.drawImage(m.source,-t._frame.x,-t._frame.y)
}this._canvasPattern=u.context.createPattern(u.canvas,"repeat")
}o.globalAlpha=this.worldAlpha;
o.setTransform(p.a*q,p.b*q,p.c*q,p.d*q,p.tx*q,p.ty*q);
o.scale(this.tileScale.x,this.tileScale.y);
o.translate(n+(this.anchor.x*-this._width),l+(this.anchor.y*-this._height));
var r=s.blendModes[this.blendMode];
if(r!==s.context.globalCompositeOperation){o.globalCompositeOperation=r
}o.fillStyle=this._canvasPattern;
o.fillRect(-n,-l,this._width/this.tileScale.x,this._height/this.tileScale.y)
};
i.prototype.getBounds=function(){var v=this._width;
var u=this._height;
var t=v*(1-this.anchor.x);
var s=v*-this.anchor.x;
var r=u*(1-this.anchor.y);
var q=u*-this.anchor.y;
var w=this.worldTransform;
var J=w.a;
var H=w.b;
var G=w.c;
var E=w.d;
var K=w.tx;
var I=w.ty;
var A=J*s+G*q+K;
var o=E*q+H*s+I;
var z=J*t+G*q+K;
var n=E*q+H*t+I;
var y=J*t+G*r+K;
var m=E*r+H*t+I;
var x=J*s+G*r+K;
var l=E*r+H*s+I;
var F,D,C,B;
F=A;
F=z<F?z:F;
F=y<F?y:F;
F=x<F?x:F;
C=o;
C=n<C?n:C;
C=m<C?m:C;
C=l<C?l:C;
D=A;
D=z>D?z:D;
D=y>D?y:D;
D=x>D?x:D;
B=o;
B=n>B?n:B;
B=m>B?m:B;
B=l>B?l:B;
var p=this._bounds;
p.x=F;
p.width=D-F;
p.y=C;
p.height=B-C;
this._currentBounds=p;
return p
};
i.prototype.containsPoint=function(m){this.worldTransform.applyInverse(m,j);
var p=this._width;
var l=this._height;
var n=-p*this.anchor.x;
var o;
if(j.x>n&&j.x<n+p){o=-l*this.anchor.y;
if(j.y>o&&j.y<o+l){return true
}}return false
};
i.prototype.destroy=function(){e.Sprite.prototype.destroy.call(this);
this.tileScale=null;
this._tileScaleOffset=null;
this.tilePosition=null;
this._uvs=null
};
i.fromFrame=function(o,m,l){var n=e.utils.TextureCache[o];
if(!n){throw new Error('The frameId "'+o+'" does not exist in the texture cache '+this)
}return new i(n,m,l)
};
i.fromImage=function(n,p,l,m,o){return new i(e.Texture.fromImage(n,m,o),p,l)
}
},{"../core":20,"../core/renderers/canvas/utils/CanvasTinter":38}],73:[function(i,j,h){var f=i("../core"),g=f.DisplayObject,e=new f.Matrix();
g.prototype._cacheAsBitmap=false;
g.prototype._originalRenderWebGL=null;
g.prototype._originalRenderCanvas=null;
g.prototype._originalUpdateTransform=null;
g.prototype._originalHitTest=null;
g.prototype._originalDestroy=null;
g.prototype._cachedSprite=null;
Object.defineProperties(g.prototype,{cacheAsBitmap:{get:function(){return this._cacheAsBitmap
},set:function(k){if(this._cacheAsBitmap===k){return
}this._cacheAsBitmap=k;
if(k){this._originalRenderWebGL=this.renderWebGL;
this._originalRenderCanvas=this.renderCanvas;
this._originalUpdateTransform=this.updateTransform;
this._originalGetBounds=this.getBounds;
this._originalDestroy=this.destroy;
this._originalContainsPoint=this.containsPoint;
this.renderWebGL=this._renderCachedWebGL;
this.renderCanvas=this._renderCachedCanvas;
this.destroy=this._cacheAsBitmapDestroy
}else{if(this._cachedSprite){this._destroyCachedDisplayObject()
}this.renderWebGL=this._originalRenderWebGL;
this.renderCanvas=this._originalRenderCanvas;
this.getBounds=this._originalGetBounds;
this.destroy=this._originalDestroy;
this.updateTransform=this._originalUpdateTransform;
this.containsPoint=this._originalContainsPoint
}}}});
g.prototype._renderCachedWebGL=function(k){if(!this.visible||this.worldAlpha<=0||!this.renderable){return
}this._initCachedDisplayObject(k);
this._cachedSprite.worldAlpha=this.worldAlpha;
k.setObjectRenderer(k.plugins.sprite);
k.plugins.sprite.render(this._cachedSprite)
};
g.prototype._initCachedDisplayObject=function(q){if(this._cachedSprite){return
}q.currentRenderer.flush();
var p=this.getLocalBounds().clone();
if(this._filters){var r=this._filters[0].padding;
p.x-=r;
p.y-=r;
p.width+=r*2;
p.height+=r*2
}var o=q.currentRenderTarget;
var l=q.filterManager.filterStack;
var n=new f.RenderTexture(q,p.width|0,p.height|0);
var k=e;
k.tx=-p.x;
k.ty=-p.y;
this.renderWebGL=this._originalRenderWebGL;
n.render(this,k,true,true);
q.setRenderTarget(o);
q.filterManager.filterStack=l;
this.renderWebGL=this._renderCachedWebGL;
this.updateTransform=this.displayObjectUpdateTransform;
this.getBounds=this._getCachedBounds;
this._cachedSprite=new f.Sprite(n);
this._cachedSprite.worldTransform=this.worldTransform;
this._cachedSprite.anchor.x=-(p.x/p.width);
this._cachedSprite.anchor.y=-(p.y/p.height);
this.updateTransform();
this.containsPoint=this._cachedSprite.containsPoint.bind(this._cachedSprite)
};
g.prototype._renderCachedCanvas=function(k){if(!this.visible||this.worldAlpha<=0||!this.renderable){return
}this._initCachedDisplayObjectCanvas(k);
this._cachedSprite.worldAlpha=this.worldAlpha;
this._cachedSprite.renderCanvas(k)
};
g.prototype._initCachedDisplayObjectCanvas=function(p){if(this._cachedSprite){return
}var o=this.getLocalBounds();
var n=p.context;
var l=new f.RenderTexture(p,o.width|0,o.height|0);
var k=e;
k.tx=-o.x;
k.ty=-o.y;
this.renderCanvas=this._originalRenderCanvas;
l.render(this,k,true);
p.context=n;
this.renderCanvas=this._renderCachedCanvas;
this.updateTransform=this.displayObjectUpdateTransform;
this.getBounds=this._getCachedBounds;
this._cachedSprite=new f.Sprite(l);
this._cachedSprite.worldTransform=this.worldTransform;
this._cachedSprite.anchor.x=-(o.x/o.width);
this._cachedSprite.anchor.y=-(o.y/o.height);
this.updateTransform();
this.containsPoint=this._cachedSprite.containsPoint.bind(this._cachedSprite)
};
g.prototype._getCachedBounds=function(){this._cachedSprite._currentBounds=null;
return this._cachedSprite.getBounds()
};
g.prototype._destroyCachedDisplayObject=function(){this._cachedSprite._texture.destroy();
this._cachedSprite=null
};
g.prototype._cacheAsBitmapDestroy=function(){this.cacheAsBitmap=false;
this._originalDestroy()
}
},{"../core":20}],74:[function(g,h,f){var e=g("../core");
e.DisplayObject.prototype.name=null;
e.Container.prototype.getChildByName=function(j){for(var k=0;
k<this.children.length;
k++){if(this.children[k].name===j){return this.children[k]
}}return null
}
},{"../core":20}],75:[function(g,h,f){var e=g("../core");
e.DisplayObject.prototype.getGlobalPosition=function(i){i=i||new e.Point();
if(this.parent){this.displayObjectUpdateTransform();
i.x=this.worldTransform.tx;
i.y=this.worldTransform.ty
}else{i.x=this.position.x;
i.y=this.position.y
}return i
}
},{"../core":20}],76:[function(f,g,e){f("./cacheAsBitmap");
f("./getChildByName");
f("./getGlobalPosition");
g.exports={MovieClip:f("./MovieClip"),TilingSprite:f("./TilingSprite"),BitmapText:f("./BitmapText")}
},{"./BitmapText":70,"./MovieClip":71,"./TilingSprite":72,"./cacheAsBitmap":73,"./getChildByName":74,"./getGlobalPosition":75}],77:[function(g,h,f){var e=g("../../core");
function i(){e.AbstractFilter.call(this,null,"precision mediump float;\n\nuniform vec4 dimensions;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, -4.0) + 2.5);\n    if (clamp(p.x, 0.0, 4.0) == p.x && clamp(p.y, 0.0, 4.0) == p.y)\n    {\n        if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 uv = gl_FragCoord.xy;\n\n    vec3 col = texture2D(uSampler, floor( uv / pixelSize ) * pixelSize / dimensions.xy).rgb;\n\n    float gray = (col.r + col.g + col.b) / 3.0;\n\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    vec2 p = mod( uv / ( pixelSize * 0.5 ), 2.0) - vec2(1.0);\n    col = col * character(n, p);\n\n    gl_FragColor = vec4(col, 1.0);\n}\n",{dimensions:{type:"4fv",value:new Float32Array([0,0,0,0])},pixelSize:{type:"1f",value:8}})
}i.prototype=Object.create(e.AbstractFilter.prototype);
i.prototype.constructor=i;
h.exports=i;
Object.defineProperties(i.prototype,{size:{get:function(){return this.uniforms.pixelSize.value
},set:function(j){this.uniforms.pixelSize.value=j
}}})
},{"../../core":20}],78:[function(g,h,f){var e=g("../../core"),j=g("../blur/BlurXFilter"),k=g("../blur/BlurYFilter");
function i(){e.AbstractFilter.call(this);
this.blurXFilter=new j();
this.blurYFilter=new k();
this.defaultFilter=new e.AbstractFilter()
}i.prototype=Object.create(e.AbstractFilter.prototype);
i.prototype.constructor=i;
h.exports=i;
i.prototype.applyFilter=function(o,m,l){var n=o.filterManager.getRenderTarget(true);
this.defaultFilter.applyFilter(o,m,l);
this.blurXFilter.applyFilter(o,m,n);
o.blendModeManager.setBlendMode(e.BLEND_MODES.SCREEN);
this.blurYFilter.applyFilter(o,n,l);
o.blendModeManager.setBlendMode(e.BLEND_MODES.NORMAL);
o.filterManager.returnRenderTarget(n)
};
Object.defineProperties(i.prototype,{blur:{get:function(){return this.blurXFilter.blur
},set:function(l){this.blurXFilter.blur=this.blurYFilter.blur=l
}},blurX:{get:function(){return this.blurXFilter.blur
},set:function(l){this.blurXFilter.blur=l
}},blurY:{get:function(){return this.blurYFilter.blur
},set:function(l){this.blurYFilter.blur=l
}}})
},{"../../core":20,"../blur/BlurXFilter":81,"../blur/BlurYFilter":82}],79:[function(g,h,f){var e=g("../../core");
function i(k,j){e.AbstractFilter.call(this,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform float dirX;\nuniform float dirY;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[3];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[0] = aTextureCoord + vec2( (0.004 * strength) * dirX, (0.004 * strength) * dirY );\n    vBlurTexCoords[1] = aTextureCoord + vec2( (0.008 * strength) * dirX, (0.008 * strength) * dirY );\n    vBlurTexCoords[2] = aTextureCoord + vec2( (0.012 * strength) * dirX, (0.012 * strength) * dirY );\n\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n","precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[3];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vTextureCoord     ) * 0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0]) * 0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1]) * 0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2]) * 0.004431848411938341;\n}\n",{strength:{type:"1f",value:1},dirX:{type:"1f",value:k||0},dirY:{type:"1f",value:j||0}});
this.defaultFilter=new e.AbstractFilter();
this.passes=1;
this.dirX=k||0;
this.dirY=j||0;
this.strength=4
}i.prototype=Object.create(e.AbstractFilter.prototype);
i.prototype.constructor=i;
h.exports=i;
i.prototype.applyFilter=function(p,l,k,j){var n=this.getShader(p);
this.uniforms.strength.value=this.strength/4/this.passes*(l.frame.width/l.size.width);
if(this.passes===1){p.filterManager.applyFilter(n,l,k,j)
}else{var o=p.filterManager.getRenderTarget(true);
p.filterManager.applyFilter(n,l,o,j);
for(var m=0;
m<this.passes-2;
m++){p.filterManager.applyFilter(n,o,o,j)
}p.filterManager.applyFilter(n,o,k,j);
p.filterManager.returnRenderTarget(o)
}};
Object.defineProperties(i.prototype,{blur:{get:function(){return this.strength
},set:function(j){this.padding=j*0.5;
this.strength=j
}},dirX:{get:function(){return this.dirX
},set:function(j){this.uniforms.dirX.value=j
}},dirY:{get:function(){return this.dirY
},set:function(j){this.uniforms.dirY.value=j
}}})
},{"../../core":20}],80:[function(g,h,f){var e=g("../../core"),i=g("./BlurXFilter"),k=g("./BlurYFilter");
function j(){e.AbstractFilter.call(this);
this.blurXFilter=new i();
this.blurYFilter=new k()
}j.prototype=Object.create(e.AbstractFilter.prototype);
j.prototype.constructor=j;
h.exports=j;
j.prototype.applyFilter=function(o,m,l){var n=o.filterManager.getRenderTarget(true);
this.blurXFilter.applyFilter(o,m,n);
this.blurYFilter.applyFilter(o,n,l);
o.filterManager.returnRenderTarget(n)
};
Object.defineProperties(j.prototype,{blur:{get:function(){return this.blurXFilter.blur
},set:function(l){this.padding=Math.abs(l)*0.5;
this.blurXFilter.blur=this.blurYFilter.blur=l
}},passes:{get:function(){return this.blurXFilter.passes
},set:function(l){this.blurXFilter.passes=this.blurYFilter.passes=l
}},blurX:{get:function(){return this.blurXFilter.blur
},set:function(l){this.blurXFilter.blur=l
}},blurY:{get:function(){return this.blurYFilter.blur
},set:function(l){this.blurYFilter.blur=l
}}})
},{"../../core":20,"./BlurXFilter":81,"./BlurYFilter":82}],81:[function(g,h,f){var e=g("../../core");
function i(){e.AbstractFilter.call(this,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(-0.012 * strength, 0.0);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(-0.008 * strength, 0.0);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(-0.004 * strength, 0.0);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2( 0.004 * strength, 0.0);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2( 0.008 * strength, 0.0);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2( 0.012 * strength, 0.0);\n\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n","precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n}\n",{strength:{type:"1f",value:1}});
this.passes=1;
this.strength=4
}i.prototype=Object.create(e.AbstractFilter.prototype);
i.prototype.constructor=i;
h.exports=i;
i.prototype.applyFilter=function(q,r,j,o){var p=this.getShader(q);
this.uniforms.strength.value=this.strength/4/this.passes*(r.frame.width/r.size.width);
if(this.passes===1){q.filterManager.applyFilter(p,r,j,o)
}else{var n=q.filterManager.getRenderTarget(true);
var m=r;
var k=n;
for(var l=0;
l<this.passes-1;
l++){q.filterManager.applyFilter(p,m,k,true);
var s=k;
k=m;
m=s
}q.filterManager.applyFilter(p,m,j,o);
q.filterManager.returnRenderTarget(n)
}};
Object.defineProperties(i.prototype,{blur:{get:function(){return this.strength
},set:function(j){this.padding=Math.abs(j)*0.5;
this.strength=j
}}})
},{"../../core":20}],82:[function(g,h,f){var e=g("../../core");
function i(){e.AbstractFilter.call(this,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(0.0, -0.012 * strength);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(0.0, -0.008 * strength);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(0.0, -0.004 * strength);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2(0.0,  0.004 * strength);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2(0.0,  0.008 * strength);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2(0.0,  0.012 * strength);\n\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n","precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n}\n",{strength:{type:"1f",value:1}});
this.passes=1;
this.strength=4
}i.prototype=Object.create(e.AbstractFilter.prototype);
i.prototype.constructor=i;
h.exports=i;
i.prototype.applyFilter=function(q,r,j,o){var p=this.getShader(q);
this.uniforms.strength.value=Math.abs(this.strength)/4/this.passes*(r.frame.height/r.size.height);
if(this.passes===1){q.filterManager.applyFilter(p,r,j,o)
}else{var n=q.filterManager.getRenderTarget(true);
var m=r;
var k=n;
for(var l=0;
l<this.passes-1;
l++){q.filterManager.applyFilter(p,m,k,true);
var s=k;
k=m;
m=s
}q.filterManager.applyFilter(p,m,j,o);
q.filterManager.returnRenderTarget(n)
}};
Object.defineProperties(i.prototype,{blur:{get:function(){return this.strength
},set:function(j){this.padding=Math.abs(j)*0.5;
this.strength=j
}}})
},{"../../core":20}],83:[function(h,i,g){var f=h("../../core");
function e(){f.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 delta;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta * percent);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    gl_FragColor = color / total;\n    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n",{delta:{type:"v2",value:{x:0.1,y:0}}})
}e.prototype=Object.create(f.AbstractFilter.prototype);
e.prototype.constructor=e;
i.exports=e
},{"../../core":20}],84:[function(g,i,f){var e=g("../../core");
function h(){e.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[25];\n\nvoid main(void)\n{\n\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.r = (m[0] * c.r);\n        gl_FragColor.r += (m[1] * c.g);\n        gl_FragColor.r += (m[2] * c.b);\n        gl_FragColor.r += (m[3] * c.a);\n        gl_FragColor.r += m[4];\n\n    gl_FragColor.g = (m[5] * c.r);\n        gl_FragColor.g += (m[6] * c.g);\n        gl_FragColor.g += (m[7] * c.b);\n        gl_FragColor.g += (m[8] * c.a);\n        gl_FragColor.g += m[9];\n\n     gl_FragColor.b = (m[10] * c.r);\n        gl_FragColor.b += (m[11] * c.g);\n        gl_FragColor.b += (m[12] * c.b);\n        gl_FragColor.b += (m[13] * c.a);\n        gl_FragColor.b += m[14];\n\n     gl_FragColor.a = (m[15] * c.r);\n        gl_FragColor.a += (m[16] * c.g);\n        gl_FragColor.a += (m[17] * c.b);\n        gl_FragColor.a += (m[18] * c.a);\n        gl_FragColor.a += m[19];\n\n}\n",{m:{type:"1fv",value:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0]}})
}h.prototype=Object.create(e.AbstractFilter.prototype);
h.prototype.constructor=h;
i.exports=h;
h.prototype._loadMatrix=function(k,j){j=!!j;
var l=k;
if(j){this._multiply(l,this.uniforms.m.value,k);
l=this._colorMatrix(l)
}this.uniforms.m.value=l
};
h.prototype._multiply=function(l,k,j){l[0]=(k[0]*j[0])+(k[1]*j[5])+(k[2]*j[10])+(k[3]*j[15]);
l[1]=(k[0]*j[1])+(k[1]*j[6])+(k[2]*j[11])+(k[3]*j[16]);
l[2]=(k[0]*j[2])+(k[1]*j[7])+(k[2]*j[12])+(k[3]*j[17]);
l[3]=(k[0]*j[3])+(k[1]*j[8])+(k[2]*j[13])+(k[3]*j[18]);
l[4]=(k[0]*j[4])+(k[1]*j[9])+(k[2]*j[14])+(k[3]*j[19]);
l[5]=(k[5]*j[0])+(k[6]*j[5])+(k[7]*j[10])+(k[8]*j[15]);
l[6]=(k[5]*j[1])+(k[6]*j[6])+(k[7]*j[11])+(k[8]*j[16]);
l[7]=(k[5]*j[2])+(k[6]*j[7])+(k[7]*j[12])+(k[8]*j[17]);
l[8]=(k[5]*j[3])+(k[6]*j[8])+(k[7]*j[13])+(k[8]*j[18]);
l[9]=(k[5]*j[4])+(k[6]*j[9])+(k[7]*j[14])+(k[8]*j[19]);
l[10]=(k[10]*j[0])+(k[11]*j[5])+(k[12]*j[10])+(k[13]*j[15]);
l[11]=(k[10]*j[1])+(k[11]*j[6])+(k[12]*j[11])+(k[13]*j[16]);
l[12]=(k[10]*j[2])+(k[11]*j[7])+(k[12]*j[12])+(k[13]*j[17]);
l[13]=(k[10]*j[3])+(k[11]*j[8])+(k[12]*j[13])+(k[13]*j[18]);
l[14]=(k[10]*j[4])+(k[11]*j[9])+(k[12]*j[14])+(k[13]*j[19]);
l[15]=(k[15]*j[0])+(k[16]*j[5])+(k[17]*j[10])+(k[18]*j[15]);
l[16]=(k[15]*j[1])+(k[16]*j[6])+(k[17]*j[11])+(k[18]*j[16]);
l[17]=(k[15]*j[2])+(k[16]*j[7])+(k[17]*j[12])+(k[18]*j[17]);
l[18]=(k[15]*j[3])+(k[16]*j[8])+(k[17]*j[13])+(k[18]*j[18]);
l[19]=(k[15]*j[4])+(k[16]*j[9])+(k[17]*j[14])+(k[18]*j[19]);
return l
};
h.prototype._colorMatrix=function(k){var j=new Float32Array(k);
j[4]/=255;
j[9]/=255;
j[14]/=255;
j[19]/=255;
return j
};
h.prototype.brightness=function(j,l){var k=[j,0,0,0,0,0,j,0,0,0,0,0,j,0,0,0,0,0,1,0];
this._loadMatrix(k,l)
};
h.prototype.greyscale=function(l,k){var j=[l,l,l,0,0,l,l,l,0,0,l,l,l,0,0,0,0,0,1,0];
this._loadMatrix(j,k)
};
h.prototype.grayscale=h.prototype.greyscale;
h.prototype.blackAndWhite=function(k){var j=[0.3,0.6,0.1,0,0,0.3,0.6,0.1,0,0,0.3,0.6,0.1,0,0,0,0,0,1,0];
this._loadMatrix(j,k)
};
h.prototype.hue=function(o,l){o=(o||0)/180*Math.PI;
var p=Math.cos(o),k=Math.sin(o);
var n=0.213,m=0.715,q=0.072;
var j=[n+p*(1-n)+k*(-n),m+p*(-m)+k*(-m),q+p*(-q)+k*(1-q),0,0,n+p*(-n)+k*(0.143),m+p*(1-m)+k*(0.14),q+p*(-q)+k*(-0.283),0,0,n+p*(-n)+k*(-(1-n)),m+p*(-m)+k*(m),q+p*(1-q)+k*(q),0,0,0,0,0,1,0];
this._loadMatrix(j,l)
};
h.prototype.contrast=function(m,l){var k=(m||0)+1;
var n=-128*(k-1);
var j=[k,0,0,0,n,0,k,0,0,n,0,0,k,0,n,0,0,0,1,0];
this._loadMatrix(j,l)
};
h.prototype.saturate=function(m,l){var j=(m||0)*2/3+1;
var n=((j-1)*-0.5);
var k=[j,n,n,0,0,n,j,n,0,0,n,n,j,0,0,0,0,0,1,0];
this._loadMatrix(k,l)
};
h.prototype.desaturate=function(j){this.saturate(-1)
};
h.prototype.negative=function(k){var j=[0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0];
this._loadMatrix(j,k)
};
h.prototype.sepia=function(k){var j=[0.393,0.7689999,0.18899999,0,0,0.349,0.6859999,0.16799999,0,0,0.272,0.5339999,0.13099999,0,0,0,0,0,1,0];
this._loadMatrix(j,k)
};
h.prototype.technicolor=function(k){var j=[1.9125277891456083,-0.8545344976951645,-0.09155508482755585,0,11.793603434377337,-0.3087833385928097,1.7658908555458428,-0.10601743074722245,0,-70.35205161461398,-0.231103377548616,-0.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];
this._loadMatrix(j,k)
};
h.prototype.polaroid=function(k){var j=[1.438,-0.062,-0.062,0,0,-0.122,1.378,-0.122,0,0,-0.016,-0.016,1.483,0,0,0,0,0,1,0];
this._loadMatrix(j,k)
};
h.prototype.toBGR=function(k){var j=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];
this._loadMatrix(j,k)
};
h.prototype.kodachrome=function(k){var j=[1.1285582396593525,-0.3967382283601348,-0.03992559172921793,0,63.72958762196502,-0.16404339962244616,1.0835251566291304,-0.05498805115633132,0,24.732407896706203,-0.16786010706155763,-0.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];
this._loadMatrix(j,k)
};
h.prototype.browni=function(k){var j=[0.5997023498159715,0.34553243048391263,-0.2708298674538042,0,47.43192855600873,-0.037703249837783157,0.8609577587992641,0.15059552388459913,0,-36.96841498319127,0.24113635128153335,-0.07441037908422492,0.44972182064877153,0,-7.562075277591283,0,0,0,1,0];
this._loadMatrix(j,k)
};
h.prototype.vintage=function(k){var j=[0.6279345635605994,0.3202183420819367,-0.03965408211312453,0,9.651285835294123,0.02578397704808868,0.6441188644374771,0.03259127616149294,0,7.462829176470591,0.0466055556782719,-0.0851232987247891,0.5241648018700465,0,5.159190588235296,0,0,0,1,0];
this._loadMatrix(j,k)
};
h.prototype.colorTone=function(r,o,n,s,k){r=r||0.2;
o=o||0.15;
n=n||16770432;
s=s||3375104;
var u=((n>>16)&255)/255;
var m=((n>>8)&255)/255;
var p=(n&255)/255;
var q=((s>>16)&255)/255;
var j=((s>>8)&255)/255;
var l=(s&255)/255;
var t=[0.3,0.59,0.11,0,0,u,m,p,r,0,q,j,l,o,0,u-q,m-j,p-l,0,0];
this._loadMatrix(t,k)
};
h.prototype.night=function(j,l){j=j||0.1;
var k=[j*(-2),-j,0,0,0,-j,0,j,0,0,0,j,j*2,0,0,0,0,0,1,0];
this._loadMatrix(k,l)
};
h.prototype.predator=function(l,k){var j=[11.224130630493164*l,-4.794486999511719*l,-2.8746118545532227*l,0*l,0.40342438220977783*l,-3.6330697536468506*l,9.193157196044922*l,-2.951810836791992*l,0*l,-1.316135048866272*l,-3.2184197902679443*l,-4.2375030517578125*l,7.476448059082031*l,0*l,0.8044459223747253*l,0,0,0,1,0];
this._loadMatrix(j,k)
};
h.prototype.lsd=function(k){var j=[2,-0.4,0.5,0,0,-0.5,2,-0.4,0,0,-0.4,-0.5,3,0,0,0,0,0,1,0];
this._loadMatrix(j,k)
};
h.prototype.reset=function(){var j=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];
this._loadMatrix(j,false)
};
Object.defineProperties(h.prototype,{matrix:{get:function(){return this.uniforms.m.value
},set:function(j){this.uniforms.m.value=j
}}})
},{"../../core":20}],85:[function(h,i,g){var f=h("../../core");
function e(){f.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float step;\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    color = floor(color * step) / step;\n\n    gl_FragColor = color;\n}\n",{step:{type:"1f",value:5}})
}e.prototype=Object.create(f.AbstractFilter.prototype);
e.prototype.constructor=e;
i.exports=e;
Object.defineProperties(e.prototype,{step:{get:function(){return this.uniforms.step.value
},set:function(j){this.uniforms.step.value=j
}}})
},{"../../core":20}],86:[function(h,i,g){var f=h("../../core");
function e(k,l,j){f.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying mediump vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 texelSize;\nuniform float matrix[9];\n\nvoid main(void)\n{\n   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left\n   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center\n   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right\n\n   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left\n   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center\n   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right\n\n   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left\n   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center\n   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right\n\n   gl_FragColor =\n       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +\n       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +\n       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];\n\n   gl_FragColor.a = c22.a;\n}\n",{matrix:{type:"1fv",value:new Float32Array(k)},texelSize:{type:"v2",value:{x:1/l,y:1/j}}})
}e.prototype=Object.create(f.AbstractFilter.prototype);
e.prototype.constructor=e;
i.exports=e;
Object.defineProperties(e.prototype,{matrix:{get:function(){return this.uniforms.matrix.value
},set:function(j){this.uniforms.matrix.value=new Float32Array(j)
}},width:{get:function(){return 1/this.uniforms.texelSize.value.x
},set:function(j){this.uniforms.texelSize.value.x=1/j
}},height:{get:function(){return 1/this.uniforms.texelSize.value.y
},set:function(j){this.uniforms.texelSize.value.y=1/j
}}})
},{"../../core":20}],87:[function(g,h,f){var e=g("../../core");
function i(){e.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n\n    if (lum < 1.00)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.75)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.50)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.3)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n}\n")
}i.prototype=Object.create(e.AbstractFilter.prototype);
i.prototype.constructor=i;
h.exports=i
},{"../../core":20}],88:[function(g,i,f){var e=g("../../core");
function h(j,l){var k=new e.Matrix();
j.renderable=false;
e.AbstractFilter.call(this,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMapCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vMapCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n","precision mediump float;\n\nvarying vec2 vMapCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nvoid main(void)\n{\n   vec4 map =  texture2D(mapSampler, vMapCoord);\n\n   map -= 0.5;\n   map.xy *= scale;\n\n   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y));\n}\n",{mapSampler:{type:"sampler2D",value:j.texture},otherMatrix:{type:"mat3",value:k.toArray(true)},scale:{type:"v2",value:{x:1,y:1}}});
this.maskSprite=j;
this.maskMatrix=k;
if(l===null||l===undefined){l=20
}this.scale=new e.Point(l,l)
}h.prototype=Object.create(e.AbstractFilter.prototype);
h.prototype.constructor=h;
i.exports=h;
h.prototype.applyFilter=function(n,l,k){var j=n.filterManager;
j.calculateMappedMatrix(l.frame,this.maskSprite,this.maskMatrix);
this.uniforms.otherMatrix.value=this.maskMatrix.toArray(true);
this.uniforms.scale.value.x=this.scale.x*(1/l.frame.width);
this.uniforms.scale.value.y=this.scale.y*(1/l.frame.height);
var m=this.getShader(n);
j.applyFilter(m,l,k)
};
Object.defineProperties(h.prototype,{map:{get:function(){return this.uniforms.mapSampler.value
},set:function(j){this.uniforms.mapSampler.value=j
}}})
},{"../../core":20}],89:[function(h,i,g){var e=h("../../core");
function f(){e.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec4 dimensions;\nuniform sampler2D uSampler;\n\nuniform float angle;\nuniform float scale;\n\nfloat pattern()\n{\n   float s = sin(angle), c = cos(angle);\n   vec2 tex = vTextureCoord * dimensions.xy;\n   vec2 point = vec2(\n       c * tex.x - s * tex.y,\n       s * tex.x + c * tex.y\n   ) * scale;\n   return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvoid main()\n{\n   vec4 color = texture2D(uSampler, vTextureCoord);\n   float average = (color.r + color.g + color.b) / 3.0;\n   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);\n}\n",{scale:{type:"1f",value:1},angle:{type:"1f",value:5},dimensions:{type:"4fv",value:[0,0,0,0]}})
}f.prototype=Object.create(e.AbstractFilter.prototype);
f.prototype.constructor=f;
i.exports=f;
Object.defineProperties(f.prototype,{scale:{get:function(){return this.uniforms.scale.value
},set:function(j){this.uniforms.scale.value=j
}},angle:{get:function(){return this.uniforms.angle.value
},set:function(j){this.uniforms.angle.value=j
}}})
},{"../../core":20}],90:[function(h,i,g){var f=h("../../core");
function e(){f.AbstractFilter.call(this,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform vec2 offset;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition+offset), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(0.0, -0.012 * strength);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(0.0, -0.008 * strength);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(0.0, -0.004 * strength);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2(0.0,  0.004 * strength);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2(0.0,  0.008 * strength);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2(0.0,  0.012 * strength);\n\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n","precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform vec3 color;\nuniform float alpha;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    vec4 sum = vec4(0.0);\n\n    sum += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    sum += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    sum += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    sum += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    sum += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    sum += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    sum += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n\n    gl_FragColor = vec4( color.rgb * sum.a * alpha, sum.a * alpha );\n}\n",{blur:{type:"1f",value:1/512},color:{type:"c",value:[0,0,0]},alpha:{type:"1f",value:0.7},offset:{type:"2f",value:[5,5]},strength:{type:"1f",value:1}});
this.passes=1;
this.strength=4
}e.prototype=Object.create(f.AbstractFilter.prototype);
e.prototype.constructor=e;
i.exports=e;
e.prototype.applyFilter=function(q,r,j,o){var p=this.getShader(q);
this.uniforms.strength.value=this.strength/4/this.passes*(r.frame.height/r.size.height);
if(this.passes===1){q.filterManager.applyFilter(p,r,j,o)
}else{var n=q.filterManager.getRenderTarget(true);
var m=r;
var k=n;
for(var l=0;
l<this.passes-1;
l++){q.filterManager.applyFilter(p,m,k,o);
var s=k;
k=m;
m=s
}q.filterManager.applyFilter(p,m,j,o);
q.filterManager.returnRenderTarget(n)
}};
Object.defineProperties(e.prototype,{blur:{get:function(){return this.strength
},set:function(j){this.padding=j*0.5;
this.strength=j
}}})
},{"../../core":20}],91:[function(h,i,g){var f=h("../../core"),j=h("../blur/BlurXFilter"),e=h("./BlurYTintFilter");
function k(){f.AbstractFilter.call(this);
this.blurXFilter=new j();
this.blurYTintFilter=new e();
this.defaultFilter=new f.AbstractFilter();
this.padding=30;
this._dirtyPosition=true;
this._angle=45*Math.PI/180;
this._distance=10;
this.alpha=0.75;
this.hideObject=false;
this.blendMode=f.BLEND_MODES.MULTIPLY
}k.prototype=Object.create(f.AbstractFilter.prototype);
k.prototype.constructor=k;
i.exports=k;
k.prototype.applyFilter=function(o,m,l){var n=o.filterManager.getRenderTarget(true);
if(this._dirtyPosition){this._dirtyPosition=false;
this.blurYTintFilter.uniforms.offset.value[0]=Math.sin(this._angle)*this._distance;
this.blurYTintFilter.uniforms.offset.value[1]=Math.cos(this._angle)*this._distance
}this.blurXFilter.applyFilter(o,m,n);
o.blendModeManager.setBlendMode(this.blendMode);
this.blurYTintFilter.applyFilter(o,n,l);
o.blendModeManager.setBlendMode(f.BLEND_MODES.NORMAL);
if(!this.hideObject){this.defaultFilter.applyFilter(o,m,l)
}o.filterManager.returnRenderTarget(n)
};
Object.defineProperties(k.prototype,{blur:{get:function(){return this.blurXFilter.blur
},set:function(l){this.blurXFilter.blur=this.blurYTintFilter.blur=l
}},blurX:{get:function(){return this.blurXFilter.blur
},set:function(l){this.blurXFilter.blur=l
}},blurY:{get:function(){return this.blurYTintFilter.blur
},set:function(l){this.blurYTintFilter.blur=l
}},color:{get:function(){return f.utils.rgb2hex(this.blurYTintFilter.uniforms.color.value)
},set:function(l){this.blurYTintFilter.uniforms.color.value=f.utils.hex2rgb(l)
}},alpha:{get:function(){return this.blurYTintFilter.uniforms.alpha.value
},set:function(l){this.blurYTintFilter.uniforms.alpha.value=l
}},distance:{get:function(){return this._distance
},set:function(l){this._dirtyPosition=true;
this._distance=l
}},angle:{get:function(){return this._angle
},set:function(l){this._dirtyPosition=true;
this._angle=l
}}})
},{"../../core":20,"../blur/BlurXFilter":81,"./BlurYTintFilter":90}],92:[function(h,i,f){var e=h("../../core");
function g(){e.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\nuniform float gray;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n   gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126*gl_FragColor.r + 0.7152*gl_FragColor.g + 0.0722*gl_FragColor.b), gray);\n}\n",{gray:{type:"1f",value:1}})
}g.prototype=Object.create(e.AbstractFilter.prototype);
g.prototype.constructor=g;
i.exports=g;
Object.defineProperties(g.prototype,{gray:{get:function(){return this.uniforms.gray.value
},set:function(j){this.uniforms.gray.value=j
}}})
},{"../../core":20}],93:[function(f,g,e){g.exports={AsciiFilter:f("./ascii/AsciiFilter"),BloomFilter:f("./bloom/BloomFilter"),BlurFilter:f("./blur/BlurFilter"),BlurXFilter:f("./blur/BlurXFilter"),BlurYFilter:f("./blur/BlurYFilter"),BlurDirFilter:f("./blur/BlurDirFilter"),ColorMatrixFilter:f("./color/ColorMatrixFilter"),ColorStepFilter:f("./color/ColorStepFilter"),ConvolutionFilter:f("./convolution/ConvolutionFilter"),CrossHatchFilter:f("./crosshatch/CrossHatchFilter"),DisplacementFilter:f("./displacement/DisplacementFilter"),DotScreenFilter:f("./dot/DotScreenFilter"),GrayFilter:f("./gray/GrayFilter"),DropShadowFilter:f("./dropshadow/DropShadowFilter"),InvertFilter:f("./invert/InvertFilter"),NoiseFilter:f("./noise/NoiseFilter"),PixelateFilter:f("./pixelate/PixelateFilter"),RGBSplitFilter:f("./rgb/RGBSplitFilter"),ShockwaveFilter:f("./shockwave/ShockwaveFilter"),SepiaFilter:f("./sepia/SepiaFilter"),SmartBlurFilter:f("./blur/SmartBlurFilter"),TiltShiftFilter:f("./tiltshift/TiltShiftFilter"),TiltShiftXFilter:f("./tiltshift/TiltShiftXFilter"),TiltShiftYFilter:f("./tiltshift/TiltShiftYFilter"),TwistFilter:f("./twist/TwistFilter")}
},{"./ascii/AsciiFilter":77,"./bloom/BloomFilter":78,"./blur/BlurDirFilter":79,"./blur/BlurFilter":80,"./blur/BlurXFilter":81,"./blur/BlurYFilter":82,"./blur/SmartBlurFilter":83,"./color/ColorMatrixFilter":84,"./color/ColorStepFilter":85,"./convolution/ConvolutionFilter":86,"./crosshatch/CrossHatchFilter":87,"./displacement/DisplacementFilter":88,"./dot/DotScreenFilter":89,"./dropshadow/DropShadowFilter":91,"./gray/GrayFilter":92,"./invert/InvertFilter":94,"./noise/NoiseFilter":95,"./pixelate/PixelateFilter":96,"./rgb/RGBSplitFilter":97,"./sepia/SepiaFilter":98,"./shockwave/ShockwaveFilter":99,"./tiltshift/TiltShiftFilter":101,"./tiltshift/TiltShiftXFilter":102,"./tiltshift/TiltShiftYFilter":103,"./twist/TwistFilter":104}],94:[function(h,i,g){var e=h("../../core");
function f(){e.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform float invert;\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.rgb = mix( (vec3(1)-gl_FragColor.rgb) * gl_FragColor.a, gl_FragColor.rgb, 1.0 - invert);\n}\n",{invert:{type:"1f",value:1}})
}f.prototype=Object.create(e.AbstractFilter.prototype);
f.prototype.constructor=f;
i.exports=f;
Object.defineProperties(f.prototype,{invert:{get:function(){return this.uniforms.invert.value
},set:function(j){this.uniforms.invert.value=j
}}})
},{"../../core":20}],95:[function(g,h,f){var e=g("../../core");
function i(){e.AbstractFilter.call(this,null,"precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float noise;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    float diff = (rand(vTextureCoord) - 0.5) * noise;\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    gl_FragColor = color;\n}\n",{noise:{type:"1f",value:0.5}})
}i.prototype=Object.create(e.AbstractFilter.prototype);
i.prototype.constructor=i;
h.exports=i;
Object.defineProperties(i.prototype,{noise:{get:function(){return this.uniforms.noise.value
},set:function(j){this.uniforms.noise.value=j
}}})
},{"../../core":20}],96:[function(g,h,f){var e=g("../../core");
function i(){e.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 dimensions;\nuniform vec2 pixelSize;\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord;\n\n    vec2 size = dimensions.xy / pixelSize;\n\n    vec2 color = floor( ( vTextureCoord * size ) ) / size + pixelSize/dimensions.xy * 0.5;\n\n    gl_FragColor = texture2D(uSampler, color);\n}\n",{dimensions:{type:"4fv",value:new Float32Array([0,0,0,0])},pixelSize:{type:"v2",value:{x:10,y:10}}})
}i.prototype=Object.create(e.AbstractFilter.prototype);
i.prototype.constructor=i;
h.exports=i;
Object.defineProperties(i.prototype,{size:{get:function(){return this.uniforms.pixelSize.value
},set:function(j){this.uniforms.pixelSize.value=j
}}})
},{"../../core":20}],97:[function(g,h,f){var e=g("../../core");
function i(){e.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 dimensions;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nvoid main(void)\n{\n   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/dimensions.xy).r;\n   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/dimensions.xy).g;\n   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/dimensions.xy).b;\n   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;\n}\n",{red:{type:"v2",value:{x:20,y:20}},green:{type:"v2",value:{x:-20,y:20}},blue:{type:"v2",value:{x:20,y:-20}},dimensions:{type:"4fv",value:[0,0,0,0]}})
}i.prototype=Object.create(e.AbstractFilter.prototype);
i.prototype.constructor=i;
h.exports=i;
Object.defineProperties(i.prototype,{red:{get:function(){return this.uniforms.red.value
},set:function(j){this.uniforms.red.value=j
}},green:{get:function(){return this.uniforms.green.value
},set:function(j){this.uniforms.green.value=j
}},blue:{get:function(){return this.uniforms.blue.value
},set:function(j){this.uniforms.blue.value=j
}}})
},{"../../core":20}],98:[function(h,i,f){var e=h("../../core");
function g(){e.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float sepia;\n\nconst mat3 sepiaMatrix = mat3(0.3588, 0.7044, 0.1368, 0.2990, 0.5870, 0.1140, 0.2392, 0.4696, 0.0912);\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * sepiaMatrix, sepia);\n}\n",{sepia:{type:"1f",value:1}})
}g.prototype=Object.create(e.AbstractFilter.prototype);
g.prototype.constructor=g;
i.exports=g;
Object.defineProperties(g.prototype,{sepia:{get:function(){return this.uniforms.sepia.value
},set:function(j){this.uniforms.sepia.value=j
}}})
},{"../../core":20}],99:[function(g,h,f){var e=g("../../core");
function i(){e.AbstractFilter.call(this,null,"precision lowp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nuniform vec2 center;\nuniform vec3 params; // 10.0, 0.8, 0.1\nuniform float time;\n\nvoid main()\n{\n    vec2 uv = vTextureCoord;\n    vec2 texCoord = uv;\n\n    float dist = distance(uv, center);\n\n    if ( (dist <= (time + params.z)) && (dist >= (time - params.z)) )\n    {\n        float diff = (dist - time);\n        float powDiff = 1.0 - pow(abs(diff*params.x), params.y);\n\n        float diffTime = diff  * powDiff;\n        vec2 diffUV = normalize(uv - center);\n        texCoord = uv + (diffUV * diffTime);\n    }\n\n    gl_FragColor = texture2D(uSampler, texCoord);\n}\n",{center:{type:"v2",value:{x:0.5,y:0.5}},params:{type:"v3",value:{x:10,y:0.8,z:0.1}},time:{type:"1f",value:0}})
}i.prototype=Object.create(e.AbstractFilter.prototype);
i.prototype.constructor=i;
h.exports=i;
Object.defineProperties(i.prototype,{center:{get:function(){return this.uniforms.center.value
},set:function(j){this.uniforms.center.value=j
}},params:{get:function(){return this.uniforms.params.value
},set:function(j){this.uniforms.params.value=j
}},time:{get:function(){return this.uniforms.time.value
},set:function(j){this.uniforms.time.value=j
}}})
},{"../../core":20}],100:[function(g,h,f){var e=g("../../core");
function i(){e.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float blur;\nuniform float gradientBlur;\nuniform vec2 start;\nuniform vec2 end;\nuniform vec2 delta;\nuniform vec2 texSize;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));\n    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    gl_FragColor = color / total;\n    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n",{blur:{type:"1f",value:100},gradientBlur:{type:"1f",value:600},start:{type:"v2",value:{x:0,y:window.innerHeight/2}},end:{type:"v2",value:{x:600,y:window.innerHeight/2}},delta:{type:"v2",value:{x:30,y:30}},texSize:{type:"v2",value:{x:window.innerWidth,y:window.innerHeight}}});
this.updateDelta()
}i.prototype=Object.create(e.AbstractFilter.prototype);
i.prototype.constructor=i;
h.exports=i;
i.prototype.updateDelta=function(){this.uniforms.delta.value.x=0;
this.uniforms.delta.value.y=0
};
Object.defineProperties(i.prototype,{blur:{get:function(){return this.uniforms.blur.value
},set:function(j){this.uniforms.blur.value=j
}},gradientBlur:{get:function(){return this.uniforms.gradientBlur.value
},set:function(j){this.uniforms.gradientBlur.value=j
}},start:{get:function(){return this.uniforms.start.value
},set:function(j){this.uniforms.start.value=j;
this.updateDelta()
}},end:{get:function(){return this.uniforms.end.value
},set:function(j){this.uniforms.end.value=j;
this.updateDelta()
}}})
},{"../../core":20}],101:[function(g,i,f){var e=g("../../core"),j=g("./TiltShiftXFilter"),k=g("./TiltShiftYFilter");
function h(){e.AbstractFilter.call(this);
this.tiltShiftXFilter=new j();
this.tiltShiftYFilter=new k()
}h.prototype=Object.create(e.AbstractFilter.prototype);
h.prototype.constructor=h;
i.exports=h;
h.prototype.applyFilter=function(o,m,l){var n=o.filterManager.getRenderTarget(true);
this.tiltShiftXFilter.applyFilter(o,m,n);
this.tiltShiftYFilter.applyFilter(o,n,l);
o.filterManager.returnRenderTarget(n)
};
Object.defineProperties(h.prototype,{blur:{get:function(){return this.tiltShiftXFilter.blur
},set:function(l){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=l
}},gradientBlur:{get:function(){return this.tiltShiftXFilter.gradientBlur
},set:function(l){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=l
}},start:{get:function(){return this.tiltShiftXFilter.start
},set:function(l){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=l
}},end:{get:function(){return this.tiltShiftXFilter.end
},set:function(l){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=l
}}})
},{"../../core":20,"./TiltShiftXFilter":102,"./TiltShiftYFilter":103}],102:[function(f,g,e){var i=f("./TiltShiftAxisFilter");
function h(){i.call(this)
}h.prototype=Object.create(i.prototype);
h.prototype.constructor=h;
g.exports=h;
h.prototype.updateDelta=function(){var k=this.uniforms.end.value.x-this.uniforms.start.value.x;
var j=this.uniforms.end.value.y-this.uniforms.start.value.y;
var l=Math.sqrt(k*k+j*j);
this.uniforms.delta.value.x=k/l;
this.uniforms.delta.value.y=j/l
}
},{"./TiltShiftAxisFilter":100}],103:[function(f,g,e){var h=f("./TiltShiftAxisFilter");
function i(){h.call(this)
}i.prototype=Object.create(h.prototype);
i.prototype.constructor=i;
g.exports=i;
i.prototype.updateDelta=function(){var k=this.uniforms.end.value.x-this.uniforms.start.value.x;
var j=this.uniforms.end.value.y-this.uniforms.start.value.y;
var l=Math.sqrt(k*k+j*j);
this.uniforms.delta.value.x=-j/l;
this.uniforms.delta.value.y=k/l
}
},{"./TiltShiftAxisFilter":100}],104:[function(g,h,f){var e=g("../../core");
function i(){e.AbstractFilter.call(this,null,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\n\nvoid main(void)\n{\n   vec2 coord = vTextureCoord - offset;\n   float dist = length(coord);\n\n   if (dist < radius)\n   {\n       float ratio = (radius - dist) / radius;\n       float angleMod = ratio * ratio * angle;\n       float s = sin(angleMod);\n       float c = cos(angleMod);\n       coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n   }\n\n   gl_FragColor = texture2D(uSampler, coord+offset);\n}\n",{radius:{type:"1f",value:0.5},angle:{type:"1f",value:5},offset:{type:"v2",value:{x:0.5,y:0.5}}})
}i.prototype=Object.create(e.AbstractFilter.prototype);
i.prototype.constructor=i;
h.exports=i;
Object.defineProperties(i.prototype,{offset:{get:function(){return this.uniforms.offset.value
},set:function(j){this.uniforms.offset.value=j
}},radius:{get:function(){return this.uniforms.radius.value
},set:function(j){this.uniforms.radius.value=j
}},angle:{get:function(){return this.uniforms.angle.value
},set:function(j){this.uniforms.angle.value=j
}}})
},{"../../core":20}],105:[function(f,g,e){(function(i){f("./polyfill");
var h=g.exports=f("./core");
h.extras=f("./extras");
h.filters=f("./filters");
h.interaction=f("./interaction");
h.loaders=f("./loaders");
h.mesh=f("./mesh");
h.loader=new h.loaders.Loader();
Object.assign(h,f("./deprecation"));
i.PIXI=h
}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"./core":20,"./deprecation":69,"./extras":76,"./filters":93,"./interaction":108,"./loaders":111,"./mesh":117,"./polyfill":122}],106:[function(h,i,f){var e=h("../core");
function g(){this.global=new e.Point();
this.target=null;
this.originalEvent=null
}g.prototype.constructor=g;
i.exports=g;
g.prototype.getLocalPosition=function(l,j,k){return l.toLocal(k?k:this.global,j)
}
},{"../core":20}],107:[function(h,i,f){var e=h("../core"),g=h("./InteractionData");
Object.assign(e.DisplayObject.prototype,h("./interactiveTarget"));
function j(l,k){k=k||{};
this.renderer=l;
this.autoPreventDefault=k.autoPreventDefault!==undefined?k.autoPreventDefault:true;
this.interactionFrequency=k.interactionFrequency||10;
this.mouse=new g();
this.eventData={stopped:false,target:null,type:null,data:this.mouse,stopPropagation:function(){this.stopped=true
}};
this.interactiveDataPool=[];
this.interactionDOMElement=null;
this.eventsAdded=false;
this.onMouseUp=this.onMouseUp.bind(this);
this.processMouseUp=this.processMouseUp.bind(this);
this.onMouseDown=this.onMouseDown.bind(this);
this.processMouseDown=this.processMouseDown.bind(this);
this.onMouseMove=this.onMouseMove.bind(this);
this.processMouseMove=this.processMouseMove.bind(this);
this.onMouseOut=this.onMouseOut.bind(this);
this.processMouseOverOut=this.processMouseOverOut.bind(this);
this.onTouchStart=this.onTouchStart.bind(this);
this.processTouchStart=this.processTouchStart.bind(this);
this.onTouchEnd=this.onTouchEnd.bind(this);
this.processTouchEnd=this.processTouchEnd.bind(this);
this.onTouchMove=this.onTouchMove.bind(this);
this.processTouchMove=this.processTouchMove.bind(this);
this.last=0;
this.currentCursorStyle="inherit";
this._tempPoint=new e.Point();
this.resolution=1;
this.setTargetElement(this.renderer.view,this.renderer.resolution)
}j.prototype.constructor=j;
i.exports=j;
j.prototype.setTargetElement=function(l,k){this.removeEvents();
this.interactionDOMElement=l;
this.resolution=k||1;
this.addEvents()
};
j.prototype.addEvents=function(){if(!this.interactionDOMElement){return
}e.ticker.shared.add(this.update,this);
if(window.navigator.msPointerEnabled){this.interactionDOMElement.style["-ms-content-zooming"]="none";
this.interactionDOMElement.style["-ms-touch-action"]="none"
}window.document.addEventListener("mousemove",this.onMouseMove,true);
this.interactionDOMElement.addEventListener("mousedown",this.onMouseDown,true);
this.interactionDOMElement.addEventListener("mouseout",this.onMouseOut,true);
this.interactionDOMElement.addEventListener("touchstart",this.onTouchStart,true);
this.interactionDOMElement.addEventListener("touchend",this.onTouchEnd,true);
this.interactionDOMElement.addEventListener("touchmove",this.onTouchMove,true);
window.addEventListener("mouseup",this.onMouseUp,true);
this.eventsAdded=true
};
j.prototype.removeEvents=function(){if(!this.interactionDOMElement){return
}e.ticker.shared.remove(this.update);
if(window.navigator.msPointerEnabled){this.interactionDOMElement.style["-ms-content-zooming"]="";
this.interactionDOMElement.style["-ms-touch-action"]=""
}window.document.removeEventListener("mousemove",this.onMouseMove,true);
this.interactionDOMElement.removeEventListener("mousedown",this.onMouseDown,true);
this.interactionDOMElement.removeEventListener("mouseout",this.onMouseOut,true);
this.interactionDOMElement.removeEventListener("touchstart",this.onTouchStart,true);
this.interactionDOMElement.removeEventListener("touchend",this.onTouchEnd,true);
this.interactionDOMElement.removeEventListener("touchmove",this.onTouchMove,true);
this.interactionDOMElement=null;
window.removeEventListener("mouseup",this.onMouseUp,true);
this.eventsAdded=false
};
j.prototype.update=function(k){this._deltaTime+=k;
if(this._deltaTime<this.interactionFrequency){return
}this._deltaTime=0;
if(!this.interactionDOMElement){return
}if(this.didMove){this.didMove=false;
return
}this.cursor="inherit";
this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseOverOut,true);
if(this.currentCursorStyle!==this.cursor){this.currentCursorStyle=this.cursor;
this.interactionDOMElement.style.cursor=this.cursor
}};
j.prototype.dispatchEvent=function(m,k,l){if(!l.stopped){l.target=m;
l.type=k;
m.emit(k,l);
if(m[k]){m[k](l)
}}};
j.prototype.mapPositionToPoint=function(l,k,n){var m=this.interactionDOMElement.getBoundingClientRect();
l.x=((k-m.left)*(this.interactionDOMElement.width/m.width))/this.resolution;
l.y=((n-m.top)*(this.interactionDOMElement.height/m.height))/this.resolution
};
j.prototype.processInteractive=function(k,r,p,m,l){if(!r||!r.visible){return false
}var o=r.children;
var q=false;
l=l||r.interactive;
if(r.interactiveChildren){for(var n=o.length-1;
n>=0;
n--){if(!q&&m){q=this.processInteractive(k,o[n],p,true,l)
}else{this.processInteractive(k,o[n],p,false,false)
}}}if(l){if(m){if(r.hitArea){r.worldTransform.applyInverse(k,this._tempPoint);
q=r.hitArea.contains(this._tempPoint.x,this._tempPoint.y)
}else{if(r.containsPoint){q=r.containsPoint(k)
}}}if(r.interactive){p(r,q)
}}return q
};
j.prototype.onMouseDown=function(k){this.mouse.originalEvent=k;
this.eventData.data=this.mouse;
this.eventData.stopped=false;
this.mapPositionToPoint(this.mouse.global,k.clientX,k.clientY);
if(this.autoPreventDefault){this.mouse.originalEvent.preventDefault()
}this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseDown,true)
};
j.prototype.processMouseDown=function(n,k){var l=this.mouse.originalEvent;
var m=l.button===2||l.which===3;
if(k){n[m?"_isRightDown":"_isLeftDown"]=true;
this.dispatchEvent(n,m?"rightdown":"mousedown",this.eventData)
}};
j.prototype.onMouseUp=function(k){this.mouse.originalEvent=k;
this.eventData.data=this.mouse;
this.eventData.stopped=false;
this.mapPositionToPoint(this.mouse.global,k.clientX,k.clientY);
this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseUp,true)
};
j.prototype.processMouseUp=function(o,l){var m=this.mouse.originalEvent;
var n=m.button===2||m.which===3;
var k=n?"_isRightDown":"_isLeftDown";
if(l){this.dispatchEvent(o,n?"rightup":"mouseup",this.eventData);
if(o[k]){o[k]=false;
this.dispatchEvent(o,n?"rightclick":"click",this.eventData)
}}else{if(o[k]){o[k]=false;
this.dispatchEvent(o,n?"rightupoutside":"mouseupoutside",this.eventData)
}}};
j.prototype.onMouseMove=function(k){this.mouse.originalEvent=k;
this.eventData.data=this.mouse;
this.eventData.stopped=false;
this.mapPositionToPoint(this.mouse.global,k.clientX,k.clientY);
this.didMove=true;
this.cursor="inherit";
this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseMove,true);
if(this.currentCursorStyle!==this.cursor){this.currentCursorStyle=this.cursor;
this.interactionDOMElement.style.cursor=this.cursor
}};
j.prototype.processMouseMove=function(l,k){this.dispatchEvent(l,"mousemove",this.eventData);
this.processMouseOverOut(l,k)
};
j.prototype.onMouseOut=function(k){this.mouse.originalEvent=k;
this.eventData.stopped=false;
this.mapPositionToPoint(this.mouse.global,k.clientX,k.clientY);
this.interactionDOMElement.style.cursor="inherit";
this.mapPositionToPoint(this.mouse.global,k.clientX,k.clientY);
this.processInteractive(this.mouse.global,this.renderer._lastObjectRendered,this.processMouseOverOut,false)
};
j.prototype.processMouseOverOut=function(l,k){if(k){if(!l._over){l._over=true;
this.dispatchEvent(l,"mouseover",this.eventData)
}if(l.buttonMode){this.cursor=l.defaultCursor
}}else{if(l._over){l._over=false;
this.dispatchEvent(l,"mouseout",this.eventData)
}}};
j.prototype.onTouchStart=function(o){if(this.autoPreventDefault){o.preventDefault()
}var n=o.changedTouches;
var p=n.length;
for(var m=0;
m<p;
m++){var k=n[m];
var l=this.getTouchData(k);
l.originalEvent=o;
this.eventData.data=l;
this.eventData.stopped=false;
this.processInteractive(l.global,this.renderer._lastObjectRendered,this.processTouchStart,true);
this.returnTouchData(l)
}};
j.prototype.processTouchStart=function(l,k){if(k){l._touchDown=true;
this.dispatchEvent(l,"touchstart",this.eventData)
}};
j.prototype.onTouchEnd=function(o){if(this.autoPreventDefault){o.preventDefault()
}var n=o.changedTouches;
var p=n.length;
for(var m=0;
m<p;
m++){var k=n[m];
var l=this.getTouchData(k);
l.originalEvent=o;
this.eventData.data=l;
this.eventData.stopped=false;
this.processInteractive(l.global,this.renderer._lastObjectRendered,this.processTouchEnd,true);
this.returnTouchData(l)
}};
j.prototype.processTouchEnd=function(l,k){if(k){this.dispatchEvent(l,"touchend",this.eventData);
if(l._touchDown){l._touchDown=false;
this.dispatchEvent(l,"tap",this.eventData)
}}else{if(l._touchDown){l._touchDown=false;
this.dispatchEvent(l,"touchendoutside",this.eventData)
}}};
j.prototype.onTouchMove=function(o){if(this.autoPreventDefault){o.preventDefault()
}var n=o.changedTouches;
var p=n.length;
for(var m=0;
m<p;
m++){var k=n[m];
var l=this.getTouchData(k);
l.originalEvent=o;
this.eventData.data=l;
this.eventData.stopped=false;
this.processInteractive(l.global,this.renderer._lastObjectRendered,this.processTouchMove,true);
this.returnTouchData(l)
}};
j.prototype.processTouchMove=function(l,k){k=k;
this.dispatchEvent(l,"touchmove",this.eventData)
};
j.prototype.getTouchData=function(k){var l=this.interactiveDataPool.pop();
if(!l){l=new g()
}l.identifier=k.identifier;
this.mapPositionToPoint(l.global,k.clientX,k.clientY);
if(navigator.isCocoonJS){l.global.x=l.global.x/this.resolution;
l.global.y=l.global.y/this.resolution
}k.globalX=l.global.x;
k.globalY=l.global.y;
return l
};
j.prototype.returnTouchData=function(k){this.interactiveDataPool.push(k)
};
j.prototype.destroy=function(){this.removeEvents();
this.renderer=null;
this.mouse=null;
this.eventData=null;
this.interactiveDataPool=null;
this.interactionDOMElement=null;
this.onMouseUp=null;
this.processMouseUp=null;
this.onMouseDown=null;
this.processMouseDown=null;
this.onMouseMove=null;
this.processMouseMove=null;
this.onMouseOut=null;
this.processMouseOverOut=null;
this.onTouchStart=null;
this.processTouchStart=null;
this.onTouchEnd=null;
this.processTouchEnd=null;
this.onTouchMove=null;
this.processTouchMove=null;
this._tempPoint=null
};
e.WebGLRenderer.registerPlugin("interaction",j);
e.CanvasRenderer.registerPlugin("interaction",j)
},{"../core":20,"./InteractionData":106,"./interactiveTarget":109}],108:[function(f,g,e){g.exports={InteractionData:f("./InteractionData"),InteractionManager:f("./InteractionManager"),interactiveTarget:f("./interactiveTarget")}
},{"./InteractionData":106,"./InteractionManager":107,"./interactiveTarget":109}],109:[function(f,g,e){var h={interactive:false,buttonMode:false,interactiveChildren:true,defaultCursor:"pointer",_over:false,_touchDown:false};
g.exports=h
},{}],110:[function(g,h,f){var k=g("resource-loader").Resource,e=g("../core"),i=g("../extras"),j=g("path");
function l(o,v){var p={};
var n=o.data.getElementsByTagName("info")[0];
var t=o.data.getElementsByTagName("common")[0];
p.font=n.getAttribute("face");
p.size=parseInt(n.getAttribute("size"),10);
p.lineHeight=parseInt(t.getAttribute("lineHeight"),10);
p.chars={};
var u=o.data.getElementsByTagName("char");
for(var q=0;
q<u.length;
q++){var y=parseInt(u[q].getAttribute("id"),10);
var x=new e.Rectangle(parseInt(u[q].getAttribute("x"),10)+v.frame.x,parseInt(u[q].getAttribute("y"),10)+v.frame.y,parseInt(u[q].getAttribute("width"),10),parseInt(u[q].getAttribute("height"),10));
p.chars[y]={xOffset:parseInt(u[q].getAttribute("xoffset"),10),yOffset:parseInt(u[q].getAttribute("yoffset"),10),xAdvance:parseInt(u[q].getAttribute("xadvance"),10),kerning:{},texture:new e.Texture(v.baseTexture,x)}
}var w=o.data.getElementsByTagName("kerning");
for(q=0;
q<w.length;
q++){var s=parseInt(w[q].getAttribute("first"),10);
var m=parseInt(w[q].getAttribute("second"),10);
var r=parseInt(w[q].getAttribute("amount"),10);
p.chars[m].kerning[s]=r
}o.bitmapFont=p;
i.BitmapText.fonts[p.font]=p
}h.exports=function(){return function(q,o){if(!q.data||!q.isXml){return o()
}if(q.data.getElementsByTagName("page").length===0||q.data.getElementsByTagName("info").length===0||q.data.getElementsByTagName("info")[0].getAttribute("face")===null){return o()
}var n=j.dirname(q.url);
if(n==="."){n=""
}if(this.baseUrl&&n){if(this.baseUrl.charAt(this.baseUrl.length-1)==="/"){n+="/"
}n=n.replace(this.baseUrl,"")
}if(n&&n.charAt(n.length-1)!=="/"){n+="/"
}var m=n+q.data.getElementsByTagName("page")[0].getAttribute("file");
if(e.utils.TextureCache[m]){l(q,e.utils.TextureCache[m]);
o()
}else{var p={crossOrigin:q.crossOrigin,loadType:k.LOAD_TYPE.IMAGE};
this.add(q.name+"_image",m,p,function(r){l(q,r.texture);
o()
})
}}
}
},{"../core":20,"../extras":76,path:2,"resource-loader":129}],111:[function(f,g,e){g.exports={Loader:f("./loader"),bitmapFontParser:f("./bitmapFontParser"),spritesheetParser:f("./spritesheetParser"),textureParser:f("./textureParser"),Resource:f("resource-loader").Resource}
},{"./bitmapFontParser":110,"./loader":112,"./spritesheetParser":113,"./textureParser":114,"resource-loader":129}],112:[function(i,h,k){var m=i("resource-loader"),j=i("./textureParser"),g=i("./spritesheetParser"),l=i("./bitmapFontParser");
function f(p,o){m.call(this,p,o);
for(var n=0;
n<f._pixiMiddleware.length;
++n){this.use(f._pixiMiddleware[n]())
}}f.prototype=Object.create(m.prototype);
f.prototype.constructor=f;
h.exports=f;
f._pixiMiddleware=[m.middleware.parsing.blob,j,g,l];
f.addPixiMiddleware=function(n){f._pixiMiddleware.push(n)
};
var e=m.Resource;
e.setExtensionXhrType("fnt",e.XHR_RESPONSE_TYPE.DOCUMENT)
},{"./bitmapFontParser":110,"./spritesheetParser":113,"./textureParser":114,"resource-loader":129}],113:[function(g,h,f){var j=g("resource-loader").Resource,i=g("path"),e=g("../core");
h.exports=function(){return function(o,m){if(!o.data||!o.isJson||!o.data.frames){return m()
}var n={crossOrigin:o.crossOrigin,loadType:j.LOAD_TYPE.IMAGE};
var k=i.dirname(o.url.replace(this.baseUrl,""));
var l=e.utils.getResolutionOfUrl(o.url);
this.add(o.name+"_image",k+"/"+o.data.meta.image,n,function(t){o.textures={};
var v=o.data.frames;
for(var s in v){var u=v[s].frame;
if(u){var r=null;
var p=null;
if(v[s].rotated){r=new e.Rectangle(u.x,u.y,u.h,u.w)
}else{r=new e.Rectangle(u.x,u.y,u.w,u.h)
}if(v[s].trimmed){p=new e.Rectangle(v[s].spriteSourceSize.x/l,v[s].spriteSourceSize.y/l,v[s].sourceSize.w/l,v[s].sourceSize.h/l)
}if(v[s].rotated){var q=r.width;
r.width=r.height;
r.height=q
}r.x/=l;
r.y/=l;
r.width/=l;
r.height/=l;
o.textures[s]=new e.Texture(t.texture.baseTexture,r,r.clone(),p,v[s].rotated);
e.utils.TextureCache[s]=o.textures[s]
}}m()
})
}
}
},{"../core":20,path:2,"resource-loader":129}],114:[function(g,h,f){var e=g("../core");
h.exports=function(){return function(k,i){if(k.data&&k.isImage){var j=new e.BaseTexture(k.data,null,e.utils.getResolutionOfUrl(k.url));
j.imageUrl=k.url;
k.texture=new e.Texture(j);
e.utils.BaseTextureCache[k.url]=j;
e.utils.TextureCache[k.url]=k.texture
}i()
}
}
},{"../core":20}],115:[function(h,i,g){var e=h("../core"),k=new e.Point(),f=new e.Polygon();
function j(n,l,m,p,o){e.Container.call(this);
this._texture=null;
this.uvs=m||new Float32Array([0,1,1,1,1,0,0,1]);
this.vertices=l||new Float32Array([0,0,100,0,100,100,0,100]);
this.indices=p||new Uint16Array([0,1,2,3]);
this.dirty=true;
this.blendMode=e.BLEND_MODES.NORMAL;
this.canvasPadding=0;
this.drawMode=o||j.DRAW_MODES.TRIANGLE_MESH;
this.texture=n
}j.prototype=Object.create(e.Container.prototype);
j.prototype.constructor=j;
i.exports=j;
Object.defineProperties(j.prototype,{texture:{get:function(){return this._texture
},set:function(l){if(this._texture===l){return
}this._texture=l;
if(l){if(l.baseTexture.hasLoaded){this._onTextureUpdate()
}else{l.once("update",this._onTextureUpdate,this)
}}}}});
j.prototype._renderWebGL=function(l){l.setObjectRenderer(l.plugins.mesh);
l.plugins.mesh.render(this)
};
j.prototype._renderCanvas=function(n){var m=n.context;
var l=this.worldTransform;
if(n.roundPixels){m.setTransform(l.a,l.b,l.c,l.d,l.tx|0,l.ty|0)
}else{m.setTransform(l.a,l.b,l.c,l.d,l.tx,l.ty)
}if(this.drawMode===j.DRAW_MODES.TRIANGLE_MESH){this._renderCanvasTriangleMesh(m)
}else{this._renderCanvasTriangles(m)
}};
j.prototype._renderCanvasTriangleMesh=function(p){var m=this.vertices;
var o=this.uvs;
var q=m.length/2;
for(var n=0;
n<q-2;
n++){var l=n*2;
this._renderCanvasDrawTriangle(p,m,o,l,(l+2),(l+4))
}};
j.prototype._renderCanvasTriangles=function(l){var q=this.vertices;
var n=this.uvs;
var t=this.indices;
var m=t.length;
for(var o=0;
o<m;
o+=3){var s=t[o]*2,r=t[o+1]*2,p=t[o+2]*2;
this._renderCanvasDrawTriangle(l,q,n,s,r,p)
}};
j.prototype._renderCanvasDrawTriangle=function(q,w,G,y,v,u){var n=this._texture.baseTexture.source;
var l=this._texture.baseTexture.width;
var H=this._texture.baseTexture.height;
var S=w[y],R=w[v],P=w[u];
var t=w[y+1],s=w[v+1],p=w[u+1];
var Q=G[y]*l,O=G[v]*l,N=G[u]*l;
var r=G[y+1]*H,o=G[v+1]*H,m=G[u+1]*H;
if(this.canvasPadding>0){var M=this.canvasPadding/this.worldTransform.a;
var L=this.canvasPadding/this.worldTransform.d;
var E=(S+R+P)/3;
var C=(t+s+p)/3;
var K=S-E;
var J=t-C;
var I=Math.sqrt(K*K+J*J);
S=E+(K/I)*(I+M);
t=C+(J/I)*(I+L);
K=R-E;
J=s-C;
I=Math.sqrt(K*K+J*J);
R=E+(K/I)*(I+M);
s=C+(J/I)*(I+L);
K=P-E;
J=p-C;
I=Math.sqrt(K*K+J*J);
P=E+(K/I)*(I+M);
p=C+(J/I)*(I+L)
}q.save();
q.beginPath();
q.moveTo(S,t);
q.lineTo(R,s);
q.lineTo(P,p);
q.closePath();
q.clip();
var T=(Q*o)+(r*N)+(O*m)-(o*N)-(r*O)-(Q*m);
var F=(S*o)+(r*P)+(R*m)-(o*P)-(r*R)-(S*m);
var D=(Q*R)+(S*N)+(O*P)-(R*N)-(S*O)-(Q*P);
var B=(Q*o*P)+(r*R*N)+(S*O*m)-(S*o*N)-(r*O*P)-(Q*R*m);
var A=(t*o)+(r*p)+(s*m)-(o*p)-(r*s)-(t*m);
var z=(Q*s)+(t*N)+(O*p)-(s*N)-(t*O)-(Q*p);
var x=(Q*o*p)+(r*s*N)+(t*O*m)-(t*o*N)-(r*O*p)-(Q*s*m);
q.transform(F/T,A/T,D/T,z/T,B/T,x/T);
q.drawImage(n,0,0);
q.restore()
};
j.prototype.renderMeshFlat=function(q){var m=this.context;
var t=q.vertices;
var o=t.length/2;
m.beginPath();
for(var r=1;
r<o-2;
r++){var s=r*2;
var p=t[s],n=t[s+2],l=t[s+4];
var w=t[s+1],v=t[s+3],u=t[s+5];
m.moveTo(p,w);
m.lineTo(n,v);
m.lineTo(l,u)
}m.fillStyle="#FF0000";
m.fill();
m.closePath()
};
j.prototype._onTextureUpdate=function(){this.updateFrame=true
};
j.prototype.getBounds=function(u){if(!this._currentBounds){var t=u||this.worldTransform;
var G=t.a;
var E=t.b;
var C=t.c;
var z=t.d;
var H=t.tx;
var F=t.ty;
var B=-Infinity;
var w=-Infinity;
var D=Infinity;
var A=Infinity;
var o=this.vertices;
for(var v=0,s=o.length;
v<s;
v+=2){var m=o[v],l=o[v+1];
var r=(G*m)+(C*l)+H;
var q=(z*l)+(E*m)+F;
D=r<D?r:D;
A=q<A?q:A;
B=r>B?r:B;
w=q>w?q:w
}if(D===-Infinity||w===Infinity){return e.Rectangle.EMPTY
}var p=this._bounds;
p.x=D;
p.width=B-D;
p.y=A;
p.height=w-A;
this._currentBounds=p
}return this._currentBounds
};
j.prototype.containsPoint=function(r){if(!this.getBounds().contains(r.x,r.y)){return false
}this.worldTransform.applyInverse(r,k);
var o=this.vertices;
var s=f.points;
var l,n;
if(this.drawMode===j.DRAW_MODES.TRIANGLES){var t=this.indices;
n=this.indices.length;
for(l=0;
l<n;
l+=3){var q=t[l]*2,p=t[l+1]*2,m=t[l+2]*2;
s[0]=o[q];
s[1]=o[q+1];
s[2]=o[p];
s[3]=o[p+1];
s[4]=o[m];
s[5]=o[m+1];
if(f.contains(k.x,k.y)){return true
}}}else{n=o.length;
for(l=0;
l<n;
l+=6){s[0]=o[l];
s[1]=o[l+1];
s[2]=o[l+2];
s[3]=o[l+3];
s[4]=o[l+4];
s[5]=o[l+5];
if(f.contains(k.x,k.y)){return true
}}}return false
};
j.DRAW_MODES={TRIANGLE_MESH:0,TRIANGLES:1}
},{"../core":20}],116:[function(g,i,f){var j=g("./Mesh");
var e=g("../core");
function h(l,k){j.call(this,l);
this.points=k;
this.vertices=new Float32Array(k.length*4);
this.uvs=new Float32Array(k.length*4);
this.colors=new Float32Array(k.length*2);
this.indices=new Uint16Array(k.length*2);
this._ready=true;
this.refresh()
}h.prototype=Object.create(j.prototype);
h.prototype.constructor=h;
i.exports=h;
h.prototype.refresh=function(){var t=this.points;
if(t.length<1||!this._texture._uvs){return
}var m=this.uvs;
var v=this.indices;
var k=this.colors;
var u=this._texture._uvs;
var l=new e.Point(u.x0,u.y0);
var q=new e.Point(u.x2-u.x0,u.y2-u.y0);
m[0]=0+l.x;
m[1]=0+l.y;
m[2]=0+l.x;
m[3]=1*q.y+l.y;
k[0]=1;
k[1]=1;
v[0]=0;
v[1]=1;
var r=t.length,s,p,o;
for(var n=1;
n<r;
n++){s=t[n];
p=n*4;
o=n/(r-1);
m[p]=o*q.x+l.x;
m[p+1]=0+l.y;
m[p+2]=o*q.x+l.x;
m[p+3]=1*q.y+l.y;
p=n*2;
k[p]=1;
k[p+1]=1;
p=n*2;
v[p]=p;
v[p+1]=p+1
}this.dirty=true
};
h.prototype._onTextureUpdate=function(){j.prototype._onTextureUpdate.call(this);
if(this._ready){this.refresh()
}};
h.prototype.updateTransform=function(){var u=this.points;
if(u.length<1){return
}var s=u[0];
var q;
var w=0;
var v=0;
var o=this.vertices;
var r=u.length,t,n,p,k,m;
for(var l=0;
l<r;
l++){t=u[l];
n=l*4;
if(l<u.length-1){q=u[l+1]
}else{q=t
}v=-(q.x-s.x);
w=q.y-s.y;
p=(1-(l/(r-1)))*10;
if(p>1){p=1
}k=Math.sqrt(w*w+v*v);
m=this._texture.height/2;
w/=k;
v/=k;
w*=m;
v*=m;
o[n]=t.x+w;
o[n+1]=t.y+v;
o[n+2]=t.x-w;
o[n+3]=t.y-v;
s=t
}this.containerUpdateTransform()
}
},{"../core":20,"./Mesh":115}],117:[function(f,g,e){g.exports={Mesh:f("./Mesh"),Rope:f("./Rope"),MeshRenderer:f("./webgl/MeshRenderer"),MeshShader:f("./webgl/MeshShader")}
},{"./Mesh":115,"./Rope":116,"./webgl/MeshRenderer":118,"./webgl/MeshShader":119}],118:[function(h,i,g){var e=h("../../core"),j=h("../Mesh");
function f(m){e.ObjectRenderer.call(this,m);
this.indices=new Uint16Array(15000);
for(var l=0,k=0;
l<15000;
l+=6,k+=4){this.indices[l+0]=k+0;
this.indices[l+1]=k+1;
this.indices[l+2]=k+2;
this.indices[l+3]=k+0;
this.indices[l+4]=k+2;
this.indices[l+5]=k+3
}}f.prototype=Object.create(e.ObjectRenderer.prototype);
f.prototype.constructor=f;
i.exports=f;
e.WebGLRenderer.registerPlugin("mesh",f);
f.prototype.onContextChange=function(){};
f.prototype.render=function(p){if(!p._vertexBuffer){this._initWebGL(p)
}var n=this.renderer,o=n.gl,l=p._texture.baseTexture,k=n.shaderManager.plugins.meshShader;
var m=p.drawMode===j.DRAW_MODES.TRIANGLE_MESH?o.TRIANGLE_STRIP:o.TRIANGLES;
n.blendModeManager.setBlendMode(p.blendMode);
o.uniformMatrix3fv(k.uniforms.translationMatrix._location,false,p.worldTransform.toArray(true));
o.uniformMatrix3fv(k.uniforms.projectionMatrix._location,false,n.currentRenderTarget.projectionMatrix.toArray(true));
o.uniform1f(k.uniforms.alpha._location,p.worldAlpha);
if(!p.dirty){o.bindBuffer(o.ARRAY_BUFFER,p._vertexBuffer);
o.bufferSubData(o.ARRAY_BUFFER,0,p.vertices);
o.vertexAttribPointer(k.attributes.aVertexPosition,2,o.FLOAT,false,0,0);
o.bindBuffer(o.ARRAY_BUFFER,p._uvBuffer);
o.vertexAttribPointer(k.attributes.aTextureCoord,2,o.FLOAT,false,0,0);
o.activeTexture(o.TEXTURE0);
if(!l._glTextures[o.id]){this.renderer.updateTexture(l)
}else{o.bindTexture(o.TEXTURE_2D,l._glTextures[o.id])
}o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,p._indexBuffer);
o.bufferSubData(o.ELEMENT_ARRAY_BUFFER,0,p.indices)
}else{p.dirty=false;
o.bindBuffer(o.ARRAY_BUFFER,p._vertexBuffer);
o.bufferData(o.ARRAY_BUFFER,p.vertices,o.STATIC_DRAW);
o.vertexAttribPointer(k.attributes.aVertexPosition,2,o.FLOAT,false,0,0);
o.bindBuffer(o.ARRAY_BUFFER,p._uvBuffer);
o.bufferData(o.ARRAY_BUFFER,p.uvs,o.STATIC_DRAW);
o.vertexAttribPointer(k.attributes.aTextureCoord,2,o.FLOAT,false,0,0);
o.activeTexture(o.TEXTURE0);
if(!l._glTextures[o.id]){this.renderer.updateTexture(l)
}else{o.bindTexture(o.TEXTURE_2D,l._glTextures[o.id])
}o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,p._indexBuffer);
o.bufferData(o.ELEMENT_ARRAY_BUFFER,p.indices,o.STATIC_DRAW)
}o.drawElements(m,p.indices.length,o.UNSIGNED_SHORT,0)
};
f.prototype._initWebGL=function(l){var k=this.renderer.gl;
l._vertexBuffer=k.createBuffer();
l._indexBuffer=k.createBuffer();
l._uvBuffer=k.createBuffer();
k.bindBuffer(k.ARRAY_BUFFER,l._vertexBuffer);
k.bufferData(k.ARRAY_BUFFER,l.vertices,k.DYNAMIC_DRAW);
k.bindBuffer(k.ARRAY_BUFFER,l._uvBuffer);
k.bufferData(k.ARRAY_BUFFER,l.uvs,k.STATIC_DRAW);
if(l.colors){l._colorBuffer=k.createBuffer();
k.bindBuffer(k.ARRAY_BUFFER,l._colorBuffer);
k.bufferData(k.ARRAY_BUFFER,l.colors,k.STATIC_DRAW)
}k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,l._indexBuffer);
k.bufferData(k.ELEMENT_ARRAY_BUFFER,l.indices,k.STATIC_DRAW)
};
f.prototype.flush=function(){};
f.prototype.start=function(){var k=this.renderer.shaderManager.plugins.meshShader;
this.renderer.shaderManager.setShader(k)
};
f.prototype.destroy=function(){e.ObjectRenderer.prototype.destroy.call(this)
}
},{"../../core":20,"../Mesh":115}],119:[function(g,h,f){var e=g("../../core");
function i(j){e.Shader.call(this,j,["precision lowp float;","attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","uniform mat3 translationMatrix;","uniform mat3 projectionMatrix;","varying vec2 vTextureCoord;","void main(void){","   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);","   vTextureCoord = aTextureCoord;","}"].join("\n"),["precision lowp float;","varying vec2 vTextureCoord;","uniform float alpha;","uniform sampler2D uSampler;","void main(void){","   gl_FragColor = texture2D(uSampler, vTextureCoord) * alpha ;","}"].join("\n"),{alpha:{type:"1f",value:0},translationMatrix:{type:"mat3",value:new Float32Array(9)},projectionMatrix:{type:"mat3",value:new Float32Array(9)}},{aVertexPosition:0,aTextureCoord:0})
}i.prototype=Object.create(e.Shader.prototype);
i.prototype.constructor=i;
h.exports=i;
e.ShaderManager.registerPlugin("meshShader",i)
},{"../../core":20}],120:[function(f,g,e){if(!Math.sign){Math.sign=function(h){h=+h;
if(h===0||isNaN(h)){return h
}return h>0?1:-1
}
}},{}],121:[function(f,g,e){if(!Object.assign){Object.assign=f("object-assign")
}},{"object-assign":11}],122:[function(f,g,e){f("./Object.assign");
f("./requestAnimationFrame");
f("./Math.sign")
},{"./Math.sign":120,"./Object.assign":121,"./requestAnimationFrame":123}],123:[function(f,g,e){(function(k){if(!(Date.now&&Date.prototype.getTime)){Date.now=function i(){return new Date().getTime()
}
}if(!(k.performance&&k.performance.now)){var j=Date.now();
if(!k.performance){k.performance={}
}k.performance.now=function(){return Date.now()-j
}
}var l=Date.now();
var m=["ms","moz","webkit","o"];
for(var h=0;
h<m.length&&!k.requestAnimationFrame;
++h){k.requestAnimationFrame=k[m[h]+"RequestAnimationFrame"];
k.cancelAnimationFrame=k[m[h]+"CancelAnimationFrame"]||k[m[h]+"CancelRequestAnimationFrame"]
}if(!k.requestAnimationFrame){k.requestAnimationFrame=function(p){if(typeof p!=="function"){throw new TypeError(p+"is not a function")
}var o=Date.now(),n=16+l-o;
if(n<0){n=0
}l=o;
return setTimeout(function(){l=Date.now();
p(performance.now())
},n)
}
}if(!k.cancelAnimationFrame){k.cancelAnimationFrame=function(n){clearTimeout(n)
}
}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{}],124:[function(f,g,e){(function(h){
/*!
 * async
 * https://github.com/caolan/async
 *
 * Copyright 2010-2014 Caolan McMahon
 * Released under the MIT license
 */
(function(){var m={};
var y,t;
y=this;
if(y!=null){t=y.async
}m.noConflict=function(){y.async=t;
return m
};
function A(F){var G=false;
return function(){if(G){throw new Error("Callback was already called.")
}G=true;
F.apply(y,arguments)
}
}var E=Object.prototype.toString;
var p=Array.isArray||function(F){return E.call(F)==="[object Array]"
};
var B=function(F,H){if(F.forEach){return F.forEach(H)
}for(var G=0;
G<F.length;
G+=1){H(F[G],G,F)
}};
var i=function(F,H){if(F.map){return F.map(H)
}var G=[];
B(F,function(I,K,J){G.push(H(I,K,J))
});
return G
};
var D=function(F,H,G){if(F.reduce){return F.reduce(H,G)
}B(F,function(I,K,J){G=H(G,I,K,J)
});
return G
};
var k=function(H){if(Object.keys){return Object.keys(H)
}var G=[];
for(var F in H){if(H.hasOwnProperty(F)){G.push(F)
}}return G
};
if(typeof h==="undefined"||!(h.nextTick)){if(typeof setImmediate==="function"){m.nextTick=function(F){setImmediate(F)
};
m.setImmediate=m.nextTick
}else{m.nextTick=function(F){setTimeout(F,0)
};
m.setImmediate=m.nextTick
}}else{m.nextTick=h.nextTick;
if(typeof setImmediate!=="undefined"){m.setImmediate=function(F){setImmediate(F)
}
}else{m.setImmediate=m.nextTick
}}m.each=function(F,I,J){J=J||function(){};
if(!F.length){return J()
}var H=0;
B(F,function(K){I(K,A(G))
});
function G(K){if(K){J(K);
J=function(){}
}else{H+=1;
if(H>=F.length){J()
}}}};
m.forEach=m.each;
m.eachSeries=function(F,I,J){J=J||function(){};
if(!F.length){return J()
}var H=0;
var G=function(){I(F[H],function(K){if(K){J(K);
J=function(){}
}else{H+=1;
if(H>=F.length){J()
}else{G()
}}})
};
G()
};
m.forEachSeries=m.eachSeries;
m.eachLimit=function(F,G,I,J){var H=o(G);
H.apply(null,[F,I,J])
};
m.forEachLimit=m.eachLimit;
var o=function(F){return function(G,K,M){M=M||function(){};
if(!G.length||F<=0){return M()
}var J=0;
var H=0;
var I=0;
(function L(){if(J>=G.length){return M()
}while(I<F&&H<G.length){H+=1;
I+=1;
K(G[H-1],function(N){if(N){M(N);
M=function(){}
}else{J+=1;
I-=1;
if(J>=G.length){M()
}else{L()
}}})
}})()
}
};
var z=function(F){return function(){var G=Array.prototype.slice.call(arguments);
return F.apply(null,[m.each].concat(G))
}
};
var x=function(F,G){return function(){var H=Array.prototype.slice.call(arguments);
return G.apply(null,[o(F)].concat(H))
}
};
var v=function(F){return function(){var G=Array.prototype.slice.call(arguments);
return F.apply(null,[m.eachSeries].concat(G))
}
};
var q=function(I,F,H,J){F=i(F,function(K,L){return{index:L,value:K}
});
if(!J){I(F,function(K,L){H(K.value,function(M){L(M)
})
})
}else{var G=[];
I(F,function(K,L){H(K.value,function(N,M){G[K.index]=M;
L(N)
})
},function(K){J(K,G)
})
}};
m.map=z(q);
m.mapSeries=v(q);
m.mapLimit=function(F,G,H,I){return l(G)(F,H,I)
};
var l=function(F){return x(F,q)
};
m.reduce=function(F,G,H,I){m.eachSeries(F,function(J,K){H(G,J,function(M,L){G=L;
K(M)
})
},function(J){I(J,G)
})
};
m.inject=m.reduce;
m.foldl=m.reduce;
m.reduceRight=function(F,G,H,J){var I=i(F,function(K){return K
}).reverse();
m.reduce(I,G,H,J)
};
m.foldr=m.reduceRight;
var C=function(I,F,H,J){var G=[];
F=i(F,function(K,L){return{index:L,value:K}
});
I(F,function(K,L){H(K.value,function(M){if(M){G.push(K)
}L()
})
},function(K){J(i(G.sort(function(M,L){return M.index-L.index
}),function(L){return L.value
}))
})
};
m.filter=z(C);
m.filterSeries=v(C);
m.select=m.filter;
m.selectSeries=m.filterSeries;
var u=function(I,F,H,J){var G=[];
F=i(F,function(K,L){return{index:L,value:K}
});
I(F,function(K,L){H(K.value,function(M){if(!M){G.push(K)
}L()
})
},function(K){J(i(G.sort(function(M,L){return M.index-L.index
}),function(L){return L.value
}))
})
};
m.reject=z(u);
m.rejectSeries=v(u);
var n=function(H,F,G,I){H(F,function(J,K){G(J,function(L){if(L){I(J);
I=function(){}
}else{K()
}})
},function(J){I()
})
};
m.detect=z(n);
m.detectSeries=v(n);
m.some=function(F,G,H){m.each(F,function(I,J){G(I,function(K){if(K){H(true);
H=function(){}
}J()
})
},function(I){H(false)
})
};
m.any=m.some;
m.every=function(F,G,H){m.each(F,function(I,J){G(I,function(K){if(!K){H(false);
H=function(){}
}J()
})
},function(I){H(true)
})
};
m.all=m.every;
m.sortBy=function(F,G,H){m.map(F,function(I,J){G(I,function(K,L){if(K){J(K)
}else{J(null,{value:I,criteria:L})
}})
},function(K,I){if(K){return H(K)
}else{var J=function(O,N){var M=O.criteria,L=N.criteria;
return M<L?-1:M>L?1:0
};
H(null,i(I.sort(J),function(L){return L.value
}))
}})
};
m.auto=function(H,M){M=M||function(){};
var N=k(H);
var G=N.length;
if(!G){return M()
}var J={};
var L=[];
var F=function(O){L.unshift(O)
};
var I=function(P){for(var O=0;
O<L.length;
O+=1){if(L[O]===P){L.splice(O,1);
return
}}};
var K=function(){G--;
B(L.slice(0),function(O){O()
})
};
F(function(){if(!G){var O=M;
M=function(){};
O(null,J)
}});
B(N,function(P){var O=p(H[P])?H[P]:[H[P]];
var T=function(W){var U=Array.prototype.slice.call(arguments,1);
if(U.length<=1){U=U[0]
}if(W){var V={};
B(k(J),function(X){V[X]=J[X]
});
V[P]=U;
M(W,V);
M=function(){}
}else{J[P]=U;
m.setImmediate(K)
}};
var R=O.slice(0,Math.abs(O.length-1))||[];
var Q=function(){return D(R,function(V,U){return(V&&J.hasOwnProperty(U))
},true)&&!J.hasOwnProperty(P)
};
if(Q()){O[O.length-1](T,J)
}else{var S=function(){if(Q()){I(S);
O[O.length-1](T,J)
}};
F(S)
}})
};
m.retry=function(J,F,K){var H=5;
var G=[];
if(typeof J==="function"){K=F;
F=J;
J=H
}J=parseInt(J,10)||H;
var I=function(N,L){var M=function(O,P){return function(Q){O(function(S,R){Q(!S||P,{err:S,result:R})
},L)
}
};
while(J){G.push(M(F,!(J-=1)))
}m.series(G,function(O,P){P=P[P.length-1];
(N||K)(P.err,P.result)
})
};
return K?I():I
};
m.waterfall=function(I,H){H=H||function(){};
if(!p(I)){var F=new Error("First argument to waterfall must be an array of functions");
return H(F)
}if(!I.length){return H()
}var G=function(J){return function(M){if(M){H.apply(null,arguments);
H=function(){}
}else{var K=Array.prototype.slice.call(arguments,1);
var L=J.next();
if(L){K.push(G(L))
}else{K.push(H)
}m.setImmediate(function(){J.apply(null,K)
})
}}
};
G(m.iterator(I))()
};
var j=function(G,I,H){H=H||function(){};
if(p(I)){G.map(I,function(J,K){if(J){J(function(M){var L=Array.prototype.slice.call(arguments,1);
if(L.length<=1){L=L[0]
}K.call(null,M,L)
})
}},H)
}else{var F={};
G.each(k(I),function(J,K){I[J](function(M){var L=Array.prototype.slice.call(arguments,1);
if(L.length<=1){L=L[0]
}F[J]=L;
K(M)
})
},function(J){H(J,F)
})
}};
m.parallel=function(G,F){j({map:m.map,each:m.each},G,F)
};
m.parallelLimit=function(H,F,G){j({map:l(F),each:o(F)},H,G)
};
m.series=function(H,G){G=G||function(){};
if(p(H)){m.mapSeries(H,function(I,J){if(I){I(function(L){var K=Array.prototype.slice.call(arguments,1);
if(K.length<=1){K=K[0]
}J.call(null,L,K)
})
}},G)
}else{var F={};
m.eachSeries(k(H),function(I,J){H[I](function(L){var K=Array.prototype.slice.call(arguments,1);
if(K.length<=1){K=K[0]
}F[I]=K;
J(L)
})
},function(I){G(I,F)
})
}};
m.iterator=function(G){var F=function(H){var I=function(){if(G.length){G[H].apply(null,arguments)
}return I.next()
};
I.next=function(){return(H<G.length-1)?F(H+1):null
};
return I
};
return F(0)
};
m.apply=function(G){var F=Array.prototype.slice.call(arguments,1);
return function(){return G.apply(null,F.concat(Array.prototype.slice.call(arguments)))
}
};
var w=function(I,F,G,J){var H=[];
I(F,function(L,K){G(L,function(M,N){H=H.concat(N||[]);
K(M)
})
},function(K){J(K,H)
})
};
m.concat=z(w);
m.concatSeries=v(w);
m.whilst=function(H,F,G){if(H()){F(function(I){if(I){return G(I)
}m.whilst(H,F,G)
})
}else{G()
}};
m.doWhilst=function(F,H,G){F(function(J){if(J){return G(J)
}var I=Array.prototype.slice.call(arguments,1);
if(H.apply(null,I)){m.doWhilst(F,H,G)
}else{G()
}})
};
m.until=function(H,F,G){if(!H()){F(function(I){if(I){return G(I)
}m.until(H,F,G)
})
}else{G()
}};
m.doUntil=function(F,H,G){F(function(J){if(J){return G(J)
}var I=Array.prototype.slice.call(arguments,1);
if(!H.apply(null,I)){m.doUntil(F,H,G)
}else{G()
}})
};
m.queue=function(J,H){if(H===undefined){H=1
}function F(L,K,N,M){if(!L.started){L.started=true
}if(!p(K)){K=[K]
}if(K.length==0){return m.setImmediate(function(){if(L.drain){L.drain()
}})
}B(K,function(O){var P={data:O,callback:typeof M==="function"?M:null};
if(N){L.tasks.unshift(P)
}else{L.tasks.push(P)
}if(L.saturated&&L.tasks.length===L.concurrency){L.saturated()
}m.setImmediate(L.process)
})
}var G=0;
var I={tasks:[],concurrency:H,saturated:null,empty:null,drain:null,started:false,paused:false,push:function(K,L){F(I,K,false,L)
},kill:function(){I.drain=null;
I.tasks=[]
},unshift:function(K,L){F(I,K,true,L)
},process:function(){if(!I.paused&&G<I.concurrency&&I.tasks.length){var L=I.tasks.shift();
if(I.empty&&I.tasks.length===0){I.empty()
}G+=1;
var M=function(){G-=1;
if(L.callback){L.callback.apply(L,arguments)
}if(I.drain&&I.tasks.length+G===0){I.drain()
}I.process()
};
var K=A(M);
J(L.data,K)
}},length:function(){return I.tasks.length
},running:function(){return G
},idle:function(){return I.tasks.length+G===0
},pause:function(){if(I.paused===true){return
}I.paused=true;
I.process()
},resume:function(){if(I.paused===false){return
}I.paused=false;
I.process()
}};
return I
};
m.priorityQueue=function(K,I){function H(M,L){return M.priority-L.priority
}function G(Q,O,P){var N=-1,L=Q.length-1;
while(N<L){var M=N+((L-N+1)>>>1);
if(P(O,Q[M])>=0){N=M
}else{L=M-1
}}return N
}function F(N,M,L,O){if(!N.started){N.started=true
}if(!p(M)){M=[M]
}if(M.length==0){return m.setImmediate(function(){if(N.drain){N.drain()
}})
}B(M,function(P){var Q={data:P,priority:L,callback:typeof O==="function"?O:null};
N.tasks.splice(G(N.tasks,Q,H)+1,0,Q);
if(N.saturated&&N.tasks.length===N.concurrency){N.saturated()
}m.setImmediate(N.process)
})
}var J=m.queue(K,I);
J.push=function(M,L,N){F(J,M,L,N)
};
delete J.unshift;
return J
};
m.cargo=function(J,I){var F=false,K=[];
var G={tasks:K,payload:I,saturated:null,empty:null,drain:null,drained:true,push:function(L,M){if(!p(L)){L=[L]
}B(L,function(N){K.push({data:N,callback:typeof M==="function"?M:null});
G.drained=false;
if(G.saturated&&K.length===I){G.saturated()
}});
m.setImmediate(G.process)
},process:function H(){if(F){return
}if(K.length===0){if(G.drain&&!G.drained){G.drain()
}G.drained=true;
return
}var L=typeof I==="number"?K.splice(0,I):K.splice(0,K.length);
var M=i(L,function(N){return N.data
});
if(G.empty){G.empty()
}F=true;
J(M,function(){F=false;
var N=arguments;
B(L,function(O){if(O.callback){O.callback.apply(null,N)
}});
H()
})
},length:function(){return K.length
},running:function(){return F
}};
return G
};
var r=function(F){return function(H){var G=Array.prototype.slice.call(arguments,1);
H.apply(null,G.concat([function(J){var I=Array.prototype.slice.call(arguments,1);
if(typeof console!=="undefined"){if(J){if(console.error){console.error(J)
}}else{if(console[F]){B(I,function(K){console[F](K)
})
}}}}]))
}
};
m.log=r("log");
m.dir=r("dir");
m.memoize=function(J,H){var G={};
var I={};
H=H||function(K){return K
};
var F=function(){var K=Array.prototype.slice.call(arguments);
var M=K.pop();
var L=H.apply(null,K);
if(L in G){m.nextTick(function(){M.apply(null,G[L])
})
}else{if(L in I){I[L].push(M)
}else{I[L]=[M];
J.apply(null,K.concat([function(){G[L]=arguments;
var P=I[L];
delete I[L];
for(var O=0,N=P.length;
O<N;
O++){P[O].apply(null,arguments)
}}]))
}}};
F.memo=G;
F.unmemoized=J;
return F
};
m.unmemoize=function(F){return function(){return(F.unmemoized||F).apply(null,arguments)
}
};
m.times=function(I,H,J){var F=[];
for(var G=0;
G<I;
G++){F.push(G)
}return m.map(F,H,J)
};
m.timesSeries=function(I,H,J){var F=[];
for(var G=0;
G<I;
G++){F.push(G)
}return m.mapSeries(F,H,J)
};
m.seq=function(){var F=arguments;
return function(){var H=this;
var G=Array.prototype.slice.call(arguments);
var I=G.pop();
m.reduce(F,G,function(K,L,J){L.apply(H,K.concat([function(){var N=arguments[0];
var M=Array.prototype.slice.call(arguments,1);
J(N,M)
}]))
},function(K,J){I.apply(H,[K].concat(J))
})
}
};
m.compose=function(){return m.seq.apply(null,Array.prototype.reverse.call(arguments))
};
var s=function(I,G){var H=function(){var K=this;
var J=Array.prototype.slice.call(arguments);
var L=J.pop();
return I(G,function(N,M){N.apply(K,J.concat([M]))
},L)
};
if(arguments.length>2){var F=Array.prototype.slice.call(arguments,2);
return H.apply(this,F)
}else{return H
}};
m.applyEach=z(s);
m.applyEachSeries=v(s);
m.forever=function(G,H){function F(I){if(I){if(H){return H(I)
}throw I
}G(F)
}F()
};
if(typeof g!=="undefined"&&g.exports){g.exports=m
}else{if(typeof d!=="undefined"&&d.amd){d([],function(){return m
})
}else{y.async=m
}}}())
}).call(this,f("_process"))
},{_process:3}],125:[function(h,g,i){var k=typeof Object.create!=="function"?"~":false;
function q(t,r,s){this.fn=t;
this.context=r;
this.once=s||false
}function p(){}p.prototype._events=undefined;
p.prototype.listeners=function m(w,v){var t=k?k+w:w,x=this._events&&this._events[t];
if(v){return !!x
}if(!x){return[]
}if(this._events[t].fn){return[this._events[t].fn]
}for(var u=0,s=this._events[t].length,r=new Array(s);
u<s;
u++){r[u]=this._events[t][u].fn
}return r
};
p.prototype.emit=function n(s,u,t,r,D,C){var B=k?k+s:s;
if(!this._events||!this._events[B]){return false
}var A=this._events[B],y=arguments.length,z,x;
if("function"===typeof A.fn){if(A.once){this.removeListener(s,A.fn,undefined,true)
}switch(y){case 1:return A.fn.call(A.context),true;
case 2:return A.fn.call(A.context,u),true;
case 3:return A.fn.call(A.context,u,t),true;
case 4:return A.fn.call(A.context,u,t,r),true;
case 5:return A.fn.call(A.context,u,t,r,D),true;
case 6:return A.fn.call(A.context,u,t,r,D,C),true
}for(x=1,z=new Array(y-1);
x<y;
x++){z[x-1]=arguments[x]
}A.fn.apply(A.context,z)
}else{var v=A.length,w;
for(x=0;
x<v;
x++){if(A[x].once){this.removeListener(s,A[x].fn,undefined,true)
}switch(y){case 1:A[x].fn.call(A[x].context);
break;
case 2:A[x].fn.call(A[x].context,u);
break;
case 3:A[x].fn.call(A[x].context,u,t);
break;
default:if(!z){for(w=1,z=new Array(y-1);
w<y;
w++){z[w-1]=arguments[w]
}}A[x].fn.apply(A[x].context,z)
}}}return true
};
p.prototype.on=function l(u,t,s){var v=new q(t,s||this),r=k?k+u:u;
if(!this._events){this._events=k?{}:Object.create(null)
}if(!this._events[r]){this._events[r]=v
}else{if(!this._events[r].fn){this._events[r].push(v)
}else{this._events[r]=[this._events[r],v]
}}return this
};
p.prototype.once=function f(u,t,s){var v=new q(t,s||this,true),r=k?k+u:u;
if(!this._events){this._events=k?{}:Object.create(null)
}if(!this._events[r]){this._events[r]=v
}else{if(!this._events[r].fn){this._events[r].push(v)
}else{this._events[r]=[this._events[r],v]
}}return this
};
p.prototype.removeListener=function j(r,x,t,s){var y=k?k+r:r;
if(!this._events||!this._events[y]){return this
}var w=this._events[y],z=[];
if(x){if(w.fn){if(w.fn!==x||(s&&!w.once)||(t&&w.context!==t)){z.push(w)
}}else{for(var v=0,u=w.length;
v<u;
v++){if(w[v].fn!==x||(s&&!w[v].once)||(t&&w[v].context!==t)){z.push(w[v])
}}}}if(z.length){this._events[y]=z.length===1?z[0]:z
}else{delete this._events[y]
}return this
};
p.prototype.removeAllListeners=function o(r){if(!this._events){return this
}if(r){delete this._events[k?k+r:r]
}else{this._events=k?{}:Object.create(null)
}return this
};
p.prototype.off=p.prototype.removeListener;
p.prototype.addListener=p.prototype.on;
p.prototype.setMaxListeners=function e(){return this
};
p.prefixed=k;
g.exports=p
},{}],126:[function(g,h,e){var i=g("async"),f=g("url"),k=g("./Resource"),j=g("eventemitter3");
function l(n,m){j.call(this);
m=m||10;
this.baseUrl=n||"";
this.progress=0;
this.loading=false;
this._progressChunk=0;
this._beforeMiddleware=[];
this._afterMiddleware=[];
this._boundLoadResource=this._loadResource.bind(this);
this._boundOnLoad=this._onLoad.bind(this);
this._buffer=[];
this._numToLoad=0;
this._queue=i.queue(this._boundLoadResource,m);
this.resources={}
}l.prototype=Object.create(j.prototype);
l.prototype.constructor=l;
h.exports=l;
l.prototype.add=l.prototype.enqueue=function(p,o,n,m){if(Array.isArray(p)){for(var q=0;
q<p.length;
++q){this.add(p[q])
}return this
}if(typeof p==="object"){m=o||p.callback||p.onComplete;
n=p;
o=p.url;
p=p.name||p.key||p.url
}if(typeof o!=="string"){m=n;
n=o;
o=p
}if(typeof o!=="string"){throw new Error("No url passed to add resource to loader.")
}if(typeof n==="function"){m=n;
n=null
}if(this.resources[p]){throw new Error('Resource with name "'+p+'" already exists.')
}o=this._handleBaseUrl(o);
this.resources[p]=new k(p,o,n);
if(typeof m==="function"){this.resources[p].once("afterMiddleware",m)
}this._numToLoad++;
if(this._queue.started){this._queue.push(this.resources[p]);
this._progressChunk=(100-this.progress)/(this._queue.length()+this._queue.running())
}else{this._buffer.push(this.resources[p]);
this._progressChunk=100/this._buffer.length
}return this
};
l.prototype._handleBaseUrl=function(m){var n=f.parse(m);
if(n.protocol||n.pathname.indexOf("//")===0){return m
}if(this.baseUrl.length&&this.baseUrl.lastIndexOf("/")!==this.baseUrl.length-1&&m.lastIndexOf("/")!==m.length-1){return this.baseUrl+"/"+m
}else{return this.baseUrl+m
}};
l.prototype.before=l.prototype.pre=function(m){this._beforeMiddleware.push(m);
return this
};
l.prototype.after=l.prototype.use=function(m){this._afterMiddleware.push(m);
return this
};
l.prototype.reset=function(){this.progress=0;
this.loading=false;
this._progressChunk=0;
this._buffer.length=0;
this._numToLoad=0;
this._queue.kill();
this._queue.started=false;
this.resources={}
};
l.prototype.load=function(m){if(typeof m==="function"){this.once("complete",m)
}if(this._queue.started){return this
}this.emit("start",this);
for(var n=0;
n<this._buffer.length;
++n){this._queue.push(this._buffer[n])
}this._buffer.length=0;
return this
};
l.prototype._loadResource=function(o,n){var m=this;
o._dequeue=n;
this._runMiddleware(o,this._beforeMiddleware,function(){o.load(m._boundOnLoad)
})
};
l.prototype._onComplete=function(){this.emit("complete",this,this.resources)
};
l.prototype._onLoad=function(m){this.progress+=this._progressChunk;
this.emit("progress",this,m);
this._runMiddleware(m,this._afterMiddleware,function(){m.emit("afterMiddleware",m);
this._numToLoad--;
if(this._numToLoad===0){this.progress=100;
this._onComplete()
}if(m.error){this.emit("error",m.error,this,m)
}else{this.emit("load",this,m)
}});
m._dequeue()
};
l.prototype._runMiddleware=function(p,o,m){var n=this;
i.eachSeries(o,function(r,q){r.call(n,p,q)
},m.bind(this,p))
};
l.LOAD_TYPE=k.LOAD_TYPE;
l.XHR_READY_STATE=k.XHR_READY_STATE;
l.XHR_RESPONSE_TYPE=k.XHR_RESPONSE_TYPE
},{"./Resource":127,async:124,eventemitter3:125,url:8}],127:[function(j,g,l){var n=j("eventemitter3"),k=j("url"),m=!!(window.XDomainRequest&&!("withCredentials" in (new XMLHttpRequest()))),i=null;
function f(q,p,o){n.call(this);
o=o||{};
if(typeof q!=="string"||typeof p!=="string"){throw new Error("Both name and url are required for constructing a resource.")
}this.name=q;
this.url=p;
this.isDataUrl=this.url.indexOf("data:")===0;
this.data=null;
this.crossOrigin=o.crossOrigin===true?"anonymous":null;
this.loadType=o.loadType||this._determineLoadType();
this.xhrType=o.xhrType;
this.error=null;
this.xhr=null;
this.isJson=false;
this.isXml=false;
this.isImage=false;
this.isAudio=false;
this.isVideo=false;
this._dequeue=null;
this._boundComplete=this.complete.bind(this);
this._boundOnError=this._onError.bind(this);
this._boundOnProgress=this._onProgress.bind(this);
this._boundXhrOnError=this._xhrOnError.bind(this);
this._boundXhrOnAbort=this._xhrOnAbort.bind(this);
this._boundXhrOnLoad=this._xhrOnLoad.bind(this);
this._boundXdrOnTimeout=this._xdrOnTimeout.bind(this)
}f.prototype=Object.create(n.prototype);
f.prototype.constructor=f;
g.exports=f;
f.prototype.complete=function(){if(this.data&&this.data.removeEventListener){this.data.removeEventListener("error",this._boundOnError);
this.data.removeEventListener("load",this._boundComplete);
this.data.removeEventListener("progress",this._boundOnProgress);
this.data.removeEventListener("canplaythrough",this._boundComplete)
}if(this.xhr){if(this.xhr.removeEventListener){this.xhr.removeEventListener("error",this._boundXhrOnError);
this.xhr.removeEventListener("abort",this._boundXhrOnAbort);
this.xhr.removeEventListener("progress",this._boundOnProgress);
this.xhr.removeEventListener("load",this._boundXhrOnLoad)
}else{this.xhr.onerror=null;
this.xhr.ontimeout=null;
this.xhr.onprogress=null;
this.xhr.onload=null
}}this.emit("complete",this)
};
f.prototype.load=function(o){this.emit("start",this);
if(o){this.once("complete",o)
}if(typeof this.crossOrigin!=="string"){this.crossOrigin=this._determineCrossOrigin(this.url)
}switch(this.loadType){case f.LOAD_TYPE.IMAGE:this._loadImage();
break;
case f.LOAD_TYPE.AUDIO:this._loadElement("audio");
break;
case f.LOAD_TYPE.VIDEO:this._loadElement("video");
break;
case f.LOAD_TYPE.XHR:default:if(m&&this.crossOrigin){this._loadXdr()
}else{this._loadXhr()
}break
}};
f.prototype._loadImage=function(){this.data=new Image();
if(this.crossOrigin){this.data.crossOrigin=this.crossOrigin
}this.data.src=this.url;
this.isImage=true;
this.data.addEventListener("error",this._boundOnError,false);
this.data.addEventListener("load",this._boundComplete,false);
this.data.addEventListener("progress",this._boundOnProgress,false)
};
f.prototype._loadElement=function(p){if(p==="audio"&&typeof Audio!=="undefined"){this.data=new Audio()
}else{this.data=document.createElement(p)
}if(this.data===null){this.error=new Error("Unsupported element "+p);
this.complete();
return
}if(navigator.isCocoonJS){this.data.src=Array.isArray(this.url)?this.url[0]:this.url
}else{if(Array.isArray(this.url)){for(var o=0;
o<this.url.length;
++o){this.data.appendChild(this._createSource(p,this.url[o]))
}}else{this.data.appendChild(this._createSource(p,this.url))
}}this["is"+p[0].toUpperCase()+p.substring(1)]=true;
this.data.addEventListener("error",this._boundOnError,false);
this.data.addEventListener("load",this._boundComplete,false);
this.data.addEventListener("progress",this._boundOnProgress,false);
this.data.addEventListener("canplaythrough",this._boundComplete,false);
this.data.load()
};
f.prototype._loadXhr=function(){if(typeof this.xhrType!=="string"){this.xhrType=this._determineXhrType()
}var o=this.xhr=new XMLHttpRequest();
o.open("GET",this.url,true);
if(this.xhrType===f.XHR_RESPONSE_TYPE.JSON||this.xhrType===f.XHR_RESPONSE_TYPE.DOCUMENT){o.responseType=f.XHR_RESPONSE_TYPE.TEXT
}else{o.responseType=this.xhrType
}o.addEventListener("error",this._boundXhrOnError,false);
o.addEventListener("abort",this._boundXhrOnAbort,false);
o.addEventListener("progress",this._boundOnProgress,false);
o.addEventListener("load",this._boundXhrOnLoad,false);
o.send()
};
f.prototype._loadXdr=function(){if(typeof this.xhrType!=="string"){this.xhrType=this._determineXhrType()
}var o=this.xhr=new XDomainRequest();
o.timeout=5000;
o.onerror=this._boundXhrOnError;
o.ontimeout=this._boundXdrOnTimeout;
o.onprogress=this._boundOnProgress;
o.onload=this._boundXhrOnLoad;
o.open("GET",this.url,true);
setTimeout(function(){o.send()
},0)
};
f.prototype._createSource=function(p,o,r){if(!r){r=p+"/"+o.substr(o.lastIndexOf(".")+1)
}var q=document.createElement("source");
q.src=o;
q.type=r;
return q
};
f.prototype._onError=function(o){this.error=new Error("Failed to load element using "+o.target.nodeName);
this.complete()
};
f.prototype._onProgress=function(o){if(o&&o.lengthComputable){this.emit("progress",this,o.loaded/o.total)
}};
f.prototype._xhrOnError=function(){this.error=new Error(e(this.xhr)+" Request failed. Status: "+this.xhr.status+', text: "'+this.xhr.statusText+'"');
this.complete()
};
f.prototype._xhrOnAbort=function(){this.error=new Error(e(this.xhr)+" Request was aborted by the user.");
this.complete()
};
f.prototype._xdrOnTimeout=function(){this.error=new Error(e(this.xhr)+" Request timed out.");
this.complete()
};
f.prototype._xhrOnLoad=function(){var q=this.xhr,o=q.status!==undefined?q.status:200;
if(o===200||o===204||(o===0&&q.responseText.length>0)){if(this.xhrType===f.XHR_RESPONSE_TYPE.TEXT){this.data=q.responseText
}else{if(this.xhrType===f.XHR_RESPONSE_TYPE.JSON){try{this.data=JSON.parse(q.responseText);
this.isJson=true
}catch(p){this.error=new Error("Error trying to parse loaded json:",p)
}}else{if(this.xhrType===f.XHR_RESPONSE_TYPE.DOCUMENT){try{if(window.DOMParser){var s=new DOMParser();
this.data=s.parseFromString(q.responseText,"text/xml")
}else{var r=document.createElement("div");
r.innerHTML=q.responseText;
this.data=r
}this.isXml=true
}catch(p){this.error=new Error("Error trying to parse loaded xml:",p)
}}else{this.data=q.response||q.responseText
}}}}else{this.error=new Error("["+q.status+"]"+q.statusText+":"+q.responseURL)
}this.complete()
};
function e(o){return o.toString().replace("object ","")
}f.prototype._determineCrossOrigin=function(p,q){if(p.indexOf("data:")===0){return""
}q=q||window.location;
if(!i){i=document.createElement("a")
}i.href=p;
p=k.parse(i.href);
var o=(!p.port&&q.port==="")||(p.port===q.port);
if(p.hostname!==q.hostname||!o||p.protocol!==q.protocol){return"anonymous"
}return""
};
f.prototype._determineXhrType=function(){return f._xhrTypeMap[this._getExtension()]||f.XHR_RESPONSE_TYPE.TEXT
};
f.prototype._determineLoadType=function(){return f._loadTypeMap[this._getExtension()]||f.LOAD_TYPE.XHR
};
f.prototype._getExtension=function(){var o=this.url,p;
if(this.isDataUrl){var r=o.indexOf("/");
p=o.substring(r+1,o.indexOf(";",r))
}else{var q=o.indexOf("?");
if(q!==-1){o=o.substring(0,q)
}p=o.substring(o.lastIndexOf(".")+1)
}return p
};
f.prototype._getMimeFromXhrType=function(o){switch(o){case f.XHR_RESPONSE_TYPE.BUFFER:return"application/octet-binary";
case f.XHR_RESPONSE_TYPE.BLOB:return"application/blob";
case f.XHR_RESPONSE_TYPE.DOCUMENT:return"application/xml";
case f.XHR_RESPONSE_TYPE.JSON:return"application/json";
case f.XHR_RESPONSE_TYPE.DEFAULT:case f.XHR_RESPONSE_TYPE.TEXT:default:return"text/plain"
}};
f.LOAD_TYPE={XHR:1,IMAGE:2,AUDIO:3,VIDEO:4};
f.XHR_READY_STATE={UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4};
f.XHR_RESPONSE_TYPE={DEFAULT:"text",BUFFER:"arraybuffer",BLOB:"blob",DOCUMENT:"document",JSON:"json",TEXT:"text"};
f._loadTypeMap={gif:f.LOAD_TYPE.IMAGE,png:f.LOAD_TYPE.IMAGE,bmp:f.LOAD_TYPE.IMAGE,jpg:f.LOAD_TYPE.IMAGE,jpeg:f.LOAD_TYPE.IMAGE,tif:f.LOAD_TYPE.IMAGE,tiff:f.LOAD_TYPE.IMAGE,webp:f.LOAD_TYPE.IMAGE,tga:f.LOAD_TYPE.IMAGE};
f._xhrTypeMap={xhtml:f.XHR_RESPONSE_TYPE.DOCUMENT,html:f.XHR_RESPONSE_TYPE.DOCUMENT,htm:f.XHR_RESPONSE_TYPE.DOCUMENT,xml:f.XHR_RESPONSE_TYPE.DOCUMENT,tmx:f.XHR_RESPONSE_TYPE.DOCUMENT,tsx:f.XHR_RESPONSE_TYPE.DOCUMENT,svg:f.XHR_RESPONSE_TYPE.DOCUMENT,gif:f.XHR_RESPONSE_TYPE.BLOB,png:f.XHR_RESPONSE_TYPE.BLOB,bmp:f.XHR_RESPONSE_TYPE.BLOB,jpg:f.XHR_RESPONSE_TYPE.BLOB,jpeg:f.XHR_RESPONSE_TYPE.BLOB,tif:f.XHR_RESPONSE_TYPE.BLOB,tiff:f.XHR_RESPONSE_TYPE.BLOB,webp:f.XHR_RESPONSE_TYPE.BLOB,tga:f.XHR_RESPONSE_TYPE.BLOB,json:f.XHR_RESPONSE_TYPE.JSON,text:f.XHR_RESPONSE_TYPE.TEXT,txt:f.XHR_RESPONSE_TYPE.TEXT};
f.setExtensionLoadType=function(p,o){h(f._loadTypeMap,p,o)
};
f.setExtensionXhrType=function(p,o){h(f._xhrTypeMap,p,o)
};
function h(o,q,p){if(q&&q.indexOf(".")===0){q=q.substring(1)
}if(!q){return
}o[q]=p
}},{eventemitter3:125,url:8}],128:[function(f,g,e){g.exports={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encodeBinary:function(j){var i="";
var n;
var h=new Array(4);
var m=0;
var k=0;
var l=0;
while(m<j.length){n=new Array(3);
for(k=0;
k<n.length;
k++){if(m<j.length){n[k]=j.charCodeAt(m++)&255
}else{n[k]=0
}}h[0]=n[0]>>2;
h[1]=((n[0]&3)<<4)|(n[1]>>4);
h[2]=((n[1]&15)<<2)|(n[2]>>6);
h[3]=n[2]&63;
l=m-(j.length-1);
switch(l){case 2:h[3]=64;
h[2]=64;
break;
case 1:h[3]=64;
break;
default:break
}for(k=0;
k<h.length;
k++){i+=this._keyStr.charAt(h[k])
}}return i
}}
},{}],129:[function(f,g,e){g.exports=f("./Loader");
g.exports.Resource=f("./Resource");
g.exports.middleware={caching:{memory:f("./middlewares/caching/memory")},parsing:{blob:f("./middlewares/parsing/blob")}}
},{"./Loader":126,"./Resource":127,"./middlewares/caching/memory":130,"./middlewares/parsing/blob":131}],130:[function(g,h,f){var e={};
h.exports=function(){return function(j,i){if(e[j.url]){j.data=e[j.url];
j.complete()
}else{j.once("complete",function(){e[this.url]=this.data
});
i()
}}
}
},{}],131:[function(f,h,e){var i=f("../../Resource"),g=f("../../b64");
window.URL=window.URL||window.webkitURL;
h.exports=function(){return function(l,k){if(!l.data){return k()
}if(l.xhr&&l.xhrType===i.XHR_RESPONSE_TYPE.BLOB){if(!window.Blob||typeof l.data==="string"){var j=l.xhr.getResponseHeader("content-type");
if(j&&j.indexOf("image")===0){l.data=new Image();
l.data.src="data:"+j+";base64,"+g.encodeBinary(l.xhr.responseText);
l.isImage=true;
l.data.onload=function(){l.data.onload=null;
k()
}
}}else{if(l.data.type.indexOf("image")===0){var m=URL.createObjectURL(l.data);
l.blob=l.data;
l.data=new Image();
l.data.src=m;
l.isImage=true;
l.data.onload=function(){URL.revokeObjectURL(m);
l.data.onload=null;
k()
}
}}}else{k()
}}
}
},{"../../Resource":127,"../../b64":128}]},{},[105])(105)
});
(function(){window._l=function(b,c){var a;
a=App.lang.strings[App.lang.active][b];
if(c){a=a.replace(/\\?\{([^{}]+)\}/g,function(e,d){if(e.charAt(0)==="\\"){return e.slice(1)
}if(c[d]!==null){return c[d]
}else{return""
}})
}return a
};
window.App={events:{},socket:{receive:{},send:{}},sound:function(d){var b,c;
try{b=new Audio("/d/sounds/"+d+".wav");
b.volume=0.3;
b.play()
}catch(f){c=f
}},lang:{active:"en",strings:{en:{}}}};
_.extend(App.events,Backbone.Events);
_.extend(App.socket.receive,Backbone.Events);
_.extend(App.socket.send,Backbone.Events)
}).call(this);
(function(){App.lang.strings.en={Join:"Join","Create room":"Create room","Left room":"Left room"}
}).call(this);
(function(){var d,c,a,b;
b=typeof require!=="undefined"?require("lodash"):window._;
d=typeof require!=="undefined"?require("backbone"):window.Backbone;
a=(function(){function e(){}e.prototype.multiply=function(f,g){return[f[0]*g,f[1]*g]
};
e.prototype.plus=function(g,f){return[g[0]+f[0],g[1]+f[1]]
};
e.prototype.magnitude=function(f){return Math.sqrt(f[0]*f[0]+f[1]*f[1])
};
e.prototype.create=function(g,f){return[Math.cos(g)*f,Math.sin(g)*f]
};
e.prototype.accelerate=function(g,i,j,f){var h;
g=this.plus(g,this.create(j,i));
h=this.magnitude(g);
if(f<h){return this.multiply(g,f/h)
}return g
};
return e
})();
(typeof module!=="undefined"?module.exports:window).GameCore=c=(function(){b.extend(e.prototype,d.Events);
e.prototype.vector=new a();
e.prototype.size=[416,416];
function e(){this._elements={}
}e.prototype._collides=function(g,m,l,f,j,k,h,i){return !(l<=j||g>=h||f<=k||m>=i)
};
e.prototype._collides_ob=function(g,f){return this._collides(g.pos[0],g.pos[1],g.pos[0]+g.size[0],g.pos[1]+g.size[1],f.pos[0],f.pos[1],f.pos[0]+f.size[0],f.pos[1]+f.size[1])
};
e.prototype.__requestAnimFrame=function(g){var f;
f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;
if(f){return f(g)
}return window.setTimeout(g,1000/20)
};
e.prototype.restart=function(){return this._elements={}
};
e.prototype.add=function(f){return this._elements[f.id]=f
};
e.prototype.get=function(m){var h,l,j,k,i,g,f;
if(typeof m==="number"){return this._elements[m]
}h=[];
f=this._elements;
for(l in f){i=f[l];
k=true;
for(j in m){g=m[j];
if(k&&i[j]!==g){k=false
}}if(k){h.push(i)
}}return h
};
e.prototype.update=function(i){var f,h,g;
g=[];
for(f in i){h=i[f];
if(f!=="id"){g.push(this._elements[i.id][f]=h)
}else{g.push(void 0)
}}return g
};
e.prototype.destroy=function(f){return delete this._elements[f.id]
};
e.prototype.start=function(){this._stop=false;
this._lastTime=Date.now();
return this._process()
};
e.prototype.stop=function(){return this._stop=true
};
e.prototype._process=function(){var g,f;
f=Date.now();
g=f-this._lastTime;
if(g>0){this._updateView(g)
}this._lastTime=f;
return this.__requestAnimFrame((function(h){return function(){if(!h._stop){return h._process()
}}
})(this))
};
e.prototype._updateView=function(g){var f,i,h;
h=this._elements;
for(i in h){f=h[i];
if(f.wheel&&f.moving.indexOf("right")>-1){f.angle+=f.wheel*g
}if(f.wheel&&f.moving.indexOf("left")>-1){f.angle-=f.wheel*g
}if(f.accelerator&&f.moving.indexOf("up")>-1){f.vel=this.vector.accelerate(f.vel,g*f.accelerator,f.angle,f.speed)
}else{if(f.rub){f.vel=this.vector.multiply(f.vel,Math.pow(f.rub,g))
}}if(f.vel[0]!==0||f.vel[1]!==0){f.pos=this.vector.plus(f.pos,this.vector.multiply(f.vel,g))
}}return this
};
return e
})()
}).call(this);
(function(){var c,a={}.hasOwnProperty,b=function(g,e){for(var d in e){if(a.call(e,d)){g[d]=e[d]
}}function f(){this.constructor=g
}f.prototype=e.prototype;
g.prototype=new f();
g.__super__=e.prototype;
return g
};
window.Game=c=(function(d){b(e,d);
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
g.sprite.rotation=g.angle
}}return this.renderer.render(this.stage)
};
e.prototype.render=function(){this.stage=new PIXI.Container();
this.renderer=PIXI.autoDetectRenderer(416,416);
this.$el.append(this.renderer.view);
return this
};
return e
})(window.GameCore)
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
(function(){var e,d,f,b,a={}.hasOwnProperty,c=function(j,h){for(var g in h){if(a.call(h,g)){j[g]=h[g]
}}function i(){this.constructor=j
}i.prototype=h.prototype;
j.prototype=new i();
j.__super__=h.prototype;
return j
};
App.Rooms=b=(function(h){c(g,h);
function g(){return g.__super__.constructor.apply(this,arguments)
}g.prototype.tagName="ol";
g.prototype.rooms={};
g.prototype.events={"click >li":function(i){return this.trigger("open",parseInt($(i.target).closest("li").attr("data-pk")))
}};
g.prototype.room_add=function(j){var i;
i=new d();
i.rooms=this;
this.listenTo(i,"monitor:add",(function(k){return function(){return k.trigger("monitor:add")
}
})(this));
this.listenTo(i,"monitor:remove",(function(k){return function(){return k.trigger("monitor:remove")
}
})(this));
i.render(j);
i.$el.prependTo(this.$el);
return this.rooms[j.id]=i
};
g.prototype.room_remove=function(i){this.rooms[i.id].remove();
return delete this.rooms[i.id]
};
g.prototype.user_join=function(i){return this.rooms[i.room_id].user_add(i.user)
};
g.prototype.user_left=function(i){return this.rooms[i.room_id].user_left(i.user_id)
};
g.prototype.list=function(i){return this.render(i)
};
g.prototype.render=function(i){_.each(this.rooms,(function(j){return function(l,k){return j.room_remove({id:k})
}
})(this));
return _.each(i,_.bind(this.room_add,this))
};
return g
})(Backbone.View);
d=(function(h){c(g,h);
function g(){return g.__super__.constructor.apply(this,arguments)
}g.prototype.tagName="li";
g.prototype.template=_.template("<strong><%=name%></strong>\n<span><%=self.rooms.options.stages[stage]%></span>");
g.prototype.user_add=function(i){this._users+=1;
this._update_users();
if(i.id===this.rooms.options.monitor){this.trigger("monitor:add");
return this._monitor=true
}};
g.prototype.user_left=function(i){this._users-=1;
this._update_users();
if(i===this.rooms.options.monitor){this._monitor=false;
return this.trigger("monitor:remove")
}};
g.prototype._update_users=function(){return this.$el.attr("data-users",this._users)
};
g.prototype.render=function(i){g.__super__.render.apply(this,arguments);
this._users=0;
this._max=i.max;
this.$el.attr("data-pk",i.id);
this.$el.attr("data-max",i.max);
this._update_users();
return _.each(i.users,_.bind(this.user_add,this))
};
g.prototype.remove=function(){if(this._monitor){this.trigger("monitor:remove")
}return g.__super__.remove.apply(this,arguments)
};
return g
})(Backbone.View);
App.RoomPreview=f=(function(g){c(h,g);
function h(){return h.__super__.constructor.apply(this,arguments)
}h.prototype.className="room-preview";
h.prototype.template=_.template('<div class="preview">\n              <span><img src="d/maps/preview<%=stage%>.png" /></span>\n              <strong><%=name%></strong>\n              <i><%=users.length%>/<%=max%></i>\n            </div>\n<input type="text" value="http://countertank.com/#m<%=id%>" />\n            <div class="teams" data-teams="<%=teams.length%>">\n              <% _.each(teams, function(users, i){ %>\n                <div data-id="<%=i%>">\n                  <ol>\n                    <% _.each(users, function(u){ %>\n                      <li data-id="<%=u%>">\n                          <strong><%=users_ids[u].name%></strong>\n                      </li>\n                    <% }) %>\n                  </ol>\n                  <button><%=_l(\'Join\')%></button>\n                </div>\n              <% }) %>\n            </div>');
h.prototype.events={"click input":function(i){return this.$("input").select()
},"click .teams button":function(i){return this.trigger("join",{room:this._room_id,team:parseInt($(i.target).parent("div").attr("data-id"))})
}};
h.prototype.show=function(){return this.render.apply(this,arguments)
};
h.prototype.__renderData=function(i){var j;
this._room_id=i.id;
j={};
_.each(i.users,function(k){return j[k.id]=k
});
return{users_ids:j}
};
return h
})(Backbone.View);
App.CreateRoom=e=(function(h){c(g,h);
function g(){return g.__super__.constructor.apply(this,arguments)
}g.prototype.className="room-new-add";
g.prototype.template=_.template("<button><%=_l('Create room')%></button>");
g.prototype.events={"click button":function(){return this.trigger("create")
}};
return g
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
this.game=new window.Game();
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
(function(){var a,c,b;
b=new App.Router({el:$("#wrap")});
c=void 0;
App.socket.send.on("all",function(){c.write(Array.prototype.slice.call(arguments))
});
a=function(d){var e;
c=Primus.connect(d,{ping:1000});
c.on("data",function(f){App.socket.receive.trigger.apply(App.socket.receive,f)
});
c.on("timeout",function(){});
c.on("end",function(){});
c.on("close",function(){});
c.on("disconnection",function(){});
c.on("open",function(){App.socket.send.trigger("login:try");
if(!Backbone.History.started){Backbone.history.start()
}});
$("body").append('<div id="debug"><div class="latency"></div></div>');
e=$("#debug .latency");
c.on("incoming::pong",function(){e.text(c.latency)
});
return c
};
a("").on("timeout",function(){a(":9052")
})
}).call(this);