(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.xm(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.i(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.ou(b)
return new s(c,this)}:function(){if(s===null)s=A.ou(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.ou(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
oB(a,b,c,d){return{i:a,p:b,e:c,x:d}},
n9(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.oz==null){A.x0()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.h(A.pV("Return interceptor for "+A.y(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.lS
if(o==null)o=$.lS=A.n8(n)
p=q[o]}if(p!=null)return p
p=A.x8(a)
if(p!=null)return p
if(typeof a=="function")return B.dn
s=Object.getPrototypeOf(a)
if(s==null)return B.c7
if(s===Object.prototype)return B.c7
if(typeof q=="function"){o=$.lS
if(o==null)o=$.lS=A.n8(n)
Object.defineProperty(q,o,{value:B.aX,enumerable:false,writable:true,configurable:true})
return B.aX}return B.aX},
nL(a,b){if(a<0||a>4294967295)throw A.h(A.aC(a,0,4294967295,"length",null))
return J.ps(new Array(a),b)},
ay(a,b){if(a<0||a>4294967295)throw A.h(A.aC(a,0,4294967295,"length",null))
return J.ps(new Array(a),b)},
hY(a,b){if(a<0)throw A.h(A.av("Length must be a non-negative integer: "+a,null))
return A.i(new Array(a),b.n("t<0>"))},
aQ(a,b){if(a<0)throw A.h(A.av("Length must be a non-negative integer: "+a,null))
return A.i(new Array(a),b.n("t<0>"))},
ps(a,b){var s=A.i(a,b.n("t<0>"))
s.$flags=1
return s},
tg(a,b){var s=t.V
return J.oV(s.a(a),s.a(b))},
pt(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
ti(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.pt(r))break;++b}return b},
tj(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.a(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.pt(q))break}return b},
dg(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.f_.prototype
return J.i_.prototype}if(typeof a=="string")return J.cB.prototype
if(a==null)return J.f0.prototype
if(typeof a=="boolean")return J.hZ.prototype
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
if(typeof a=="symbol")return J.dR.prototype
if(typeof a=="bigint")return J.dQ.prototype
return a}if(a instanceof A.I)return a
return J.n9(a)},
a6(a){if(typeof a=="string")return J.cB.prototype
if(a==null)return a
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
if(typeof a=="symbol")return J.dR.prototype
if(typeof a=="bigint")return J.dQ.prototype
return a}if(a instanceof A.I)return a
return J.n9(a)},
aF(a){if(a==null)return a
if(Array.isArray(a))return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
if(typeof a=="symbol")return J.dR.prototype
if(typeof a=="bigint")return J.dQ.prototype
return a}if(a instanceof A.I)return a
return J.n9(a)},
wU(a){if(typeof a=="number")return J.dP.prototype
if(typeof a=="string")return J.cB.prototype
if(a==null)return a
if(!(a instanceof A.I))return J.e7.prototype
return a},
aX(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bI.prototype
if(typeof a=="symbol")return J.dR.prototype
if(typeof a=="bigint")return J.dQ.prototype
return a}if(a instanceof A.I)return a
return J.n9(a)},
a0(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dg(a).T(a,b)},
d(a,b){if(typeof b==="number")if(Array.isArray(a)||A.x4(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aF(a).k(a,b)},
a2(a,b,c){return J.aF(a).i(a,b,c)},
nB(a,b){return J.aF(a).B(a,b)},
rt(a,b,c){return J.aX(a).fV(a,b,c)},
oT(a,b,c){return J.aX(a).fW(a,b,c)},
ru(a,b,c){return J.aX(a).ee(a,b,c)},
rv(a,b,c){return J.aX(a).fX(a,b,c)},
oU(a,b,c){return J.aX(a).fY(a,b,c)},
nC(a,b,c){return J.aX(a).fZ(a,b,c)},
rw(a){return J.aX(a).h_(a)},
rx(a,b,c){return J.aX(a).dh(a,b,c)},
aI(a,b,c){return J.aX(a).h0(a,b,c)},
ry(a,b,c){return J.aX(a).h1(a,b,c)},
D(a){return J.aX(a).h2(a)},
Q(a,b,c){return J.aX(a).cC(a,b,c)},
oV(a,b){return J.wU(a).bH(a,b)},
rz(a,b){return J.aF(a).bU(a,b)},
eq(a,b,c,d){return J.aF(a).O(a,b,c,d)},
rA(a){return J.aX(a).gt(a)},
bp(a){return J.dg(a).gI(a)},
rB(a){return J.a6(a).gW(a)},
dj(a){return J.aF(a).gE(a)},
bW(a){return J.a6(a).gp(a)},
oW(a){return J.dg(a).gaA(a)},
rC(a){return J.aF(a).cM(a)},
nD(a,b){return J.aF(a).bF(a,b)},
nE(a,b,c){return J.aF(a).bW(a,b,c)},
rD(a,b){return J.aF(a).hA(a,b)},
hc(a){return J.dg(a).C(a)},
hL:function hL(){},
hZ:function hZ(){},
f0:function f0(){},
f1:function f1(){},
c5:function c5(){},
ie:function ie(){},
e7:function e7(){},
bI:function bI(){},
dQ:function dQ(){},
dR:function dR(){},
t:function t(a){this.$ti=a},
hX:function hX(){},
k4:function k4(a){this.$ti=a},
es:function es(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dP:function dP(){},
f_:function f_(){},
i_:function i_(){},
cB:function cB(){}},A={nM:function nM(){},
pw(a){return new A.dS("Field '"+a+"' has been assigned during initialization.")},
kd(a){return new A.dS("Field '"+a+"' has not been initialized.")},
tl(a){return new A.dS("Field '"+a+"' has already been initialized.")},
bN(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
kZ(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
j2(a,b,c){return a},
oA(a){var s,r
for(s=$.aW.length,r=0;r<s;++r)if(a===$.aW[r])return!0
return!1},
e6(a,b,c,d){A.bi(b,"start")
if(c!=null){A.bi(c,"end")
if(b>c)A.G(A.aC(b,0,c,"start",null))}return new A.fz(a,b,c,d.n("fz<0>"))},
tp(a,b,c,d){if(t.W.b(a))return new A.ew(a,b,c.n("@<0>").aM(d).n("ew<1,2>"))
return new A.cG(a,b,c.n("@<0>").aM(d).n("cG<1,2>"))},
pQ(a,b,c){var s="count"
if(t.W.b(a)){A.ja(b,s,t.p)
A.bi(b,s)
return new A.dA(a,b,c.n("dA<0>"))}A.ja(b,s,t.p)
A.bi(b,s)
return new A.bM(a,b,c.n("bM<0>"))},
aP(){return new A.e4("No element")},
pr(){return new A.e4("Too few elements")},
ix(a,b,c,d,e){if(c-b<=32)A.tX(a,b,c,d,e)
else A.tW(a,b,c,d,e)},
tX(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.aF(a);s<=c;++s){q=r.k(a,s)
p=s
for(;;){if(p>b){o=d.$2(r.k(a,p-1),q)
if(typeof o!=="number")return o.bg()
o=o>0}else o=!1
if(!o)break
n=p-1
r.i(a,p,r.k(a,n))
p=n}r.i(a,p,q)}},
tW(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.a.K(a5-a4+1,6),i=a4+j,h=a5-j,g=B.a.K(a4+a5,2),f=g-j,e=g+j,d=J.aF(a3),c=d.k(a3,i),b=d.k(a3,f),a=d.k(a3,g),a0=d.k(a3,e),a1=d.k(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.bg()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.bg()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.bg()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.bg()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.bg()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.bg()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.bg()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.bg()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.bg()
if(a2>0){s=a1
a1=a0
a0=s}d.i(a3,i,c)
d.i(a3,g,a)
d.i(a3,h,a1)
d.i(a3,f,d.k(a3,a4))
d.i(a3,e,d.k(a3,a5))
r=a4+1
q=a5-1
p=J.a0(a6.$2(b,a0),0)
if(p)for(o=r;o<=q;++o){n=d.k(a3,o)
m=a6.$2(n,b)
if(m===0)continue
if(m<0){if(o!==r){d.i(a3,o,d.k(a3,r))
d.i(a3,r,n)}++r}else for(;;){m=a6.$2(d.k(a3,q),b)
if(m>0){--q
continue}else{l=q-1
if(m<0){d.i(a3,o,d.k(a3,r))
k=r+1
d.i(a3,r,d.k(a3,q))
d.i(a3,q,n)
q=l
r=k
break}else{d.i(a3,o,d.k(a3,q))
d.i(a3,q,n)
q=l
break}}}}else for(o=r;o<=q;++o){n=d.k(a3,o)
if(a6.$2(n,b)<0){if(o!==r){d.i(a3,o,d.k(a3,r))
d.i(a3,r,n)}++r}else if(a6.$2(n,a0)>0)for(;;)if(a6.$2(d.k(a3,q),a0)>0){--q
if(q<o)break
continue}else{l=q-1
if(a6.$2(d.k(a3,q),b)<0){d.i(a3,o,d.k(a3,r))
k=r+1
d.i(a3,r,d.k(a3,q))
d.i(a3,q,n)
r=k}else{d.i(a3,o,d.k(a3,q))
d.i(a3,q,n)}q=l
break}}a2=r-1
d.i(a3,a4,d.k(a3,a2))
d.i(a3,a2,b)
a2=q+1
d.i(a3,a5,d.k(a3,a2))
d.i(a3,a2,a0)
A.ix(a3,a4,r-2,a6,a7)
A.ix(a3,q+2,a5,a6,a7)
if(p)return
if(r<i&&q>h){while(J.a0(a6.$2(d.k(a3,r),b),0))++r
while(J.a0(a6.$2(d.k(a3,q),a0),0))--q
for(o=r;o<=q;++o){n=d.k(a3,o)
if(a6.$2(n,b)===0){if(o!==r){d.i(a3,o,d.k(a3,r))
d.i(a3,r,n)}++r}else if(a6.$2(n,a0)===0)for(;;)if(a6.$2(d.k(a3,q),a0)===0){--q
if(q<o)break
continue}else{l=q-1
if(a6.$2(d.k(a3,q),b)<0){d.i(a3,o,d.k(a3,r))
k=r+1
d.i(a3,r,d.k(a3,q))
d.i(a3,q,n)
r=k}else{d.i(a3,o,d.k(a3,q))
d.i(a3,q,n)}q=l
break}}A.ix(a3,r,q,a6,a7)}else A.ix(a3,r,q,a6,a7)},
dS:function dS(a){this.a=a},
aw:function aw(a){this.a=a},
kX:function kX(){},
A:function A(){},
bv:function bv(){},
fz:function fz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cF:function cF(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cG:function cG(a,b,c){this.a=a
this.b=b
this.$ti=c},
ew:function ew(a,b,c){this.a=a
this.b=b
this.$ti=c},
f5:function f5(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fJ:function fJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
fK:function fK(a,b,c){this.a=a
this.b=b
this.$ti=c},
bM:function bM(a,b,c){this.a=a
this.b=b
this.$ti=c},
dA:function dA(a,b,c){this.a=a
this.b=b
this.$ti=c},
fw:function fw(a,b,c){this.a=a
this.b=b
this.$ti=c},
ex:function ex(a){this.$ti=a},
ey:function ey(a){this.$ti=a},
a1:function a1(){},
bx:function bx(){},
e8:function e8(){},
qX(a){var s=A.qW(a)
if(s!=null)return s
return"minified:"+a},
x4(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
y(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.hc(a)
return s},
fs(a){var s,r=$.pH
if(r==null)r=$.pH=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
tO(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.a(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
ii(a){var s,r,q,p
if(a instanceof A.I)return A.aV(A.ak(a),null)
s=J.dg(a)
if(s===B.dl||s===B.dp||t.cx.b(a)){r=B.b1(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.aV(A.ak(a),null)},
pI(a){var s,r,q
if(a==null||typeof a=="number"||A.mi(a))return J.hc(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.bX)return a.C(0)
if(a instanceof A.ar)return a.fK(!0)
s=$.ro()
for(r=0;r<1;++r){q=s[r].mb(a)
if(q!=null)return q}return"Instance of '"+A.ii(a)+"'"},
tL(){return Date.now()},
tN(){var s,r
if($.kG!==0)return
$.kG=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.kG=1e6
$.o0=new A.kF(r)},
pG(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
tP(a){var s,r,q,p=A.i([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.P)(a),++r){q=a[r]
if(!A.mj(q))throw A.h(A.ch(q))
if(q<=65535)B.c.B(p,q)
else if(q<=1114111){B.c.B(p,55296+(B.a.j(q-65536,10)&1023))
B.c.B(p,56320+(q&1023))}else throw A.h(A.ch(q))}return A.pG(p)},
pJ(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.mj(q))throw A.h(A.ch(q))
if(q<0)throw A.h(A.ch(q))
if(q>65535)return A.tP(a)}return A.pG(a)},
tQ(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
dY(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.a.j(s,10)|55296)>>>0,s&1023|56320)}throw A.h(A.aC(a,0,1114111,null,null))},
tM(a){var s=a.$thrownJsError
if(s==null)return null
return A.dh(s)},
pK(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.a9(a,s)
a.$thrownJsError=s
s.stack=b.C(0)}},
a8(a){throw A.h(A.ch(a))},
a(a,b){if(a==null)J.bW(a)
throw A.h(A.j4(a,b))},
j4(a,b){var s,r="index",q=null
if(!A.mj(b))return new A.b8(!0,b,r,q)
s=J.bW(a)
if(b<0||b>=s)return A.k0(b,s,a,q,r)
return new A.e1(q,q,!0,b,r,"Value not in range")},
wI(a,b,c){if(a<0||a>c)return A.aC(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aC(b,a,c,"end",null)
return new A.b8(!0,b,"end",null)},
ch(a){return new A.b8(!0,a,null,null)},
h(a){return A.a9(a,new Error())},
a9(a,b){var s
if(a==null)a=new A.bO()
b.dartException=a
s=A.xo
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
xo(){return J.hc(this.dartException)},
G(a,b){throw A.a9(a,b==null?new Error():b)},
b(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.G(A.vu(a,b,c),s)},
vu(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.j.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.fB("'"+s+"': Cannot "+o+" "+l+k+n)},
P(a){throw A.h(A.br(a))},
bP(a){var s,r,q,p,o,n
a=A.xe(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.i([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.l9(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
la(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
pT(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
nN(a,b){var s=b==null,r=s?null:b.method
return new A.i4(a,r,s?null:b.receiver)},
bo(a){var s
if(a==null)return new A.ko(a)
if(a instanceof A.eA){s=a.a
return A.cj(a,s==null?A.eh(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.cj(a,a.dartException)
return A.wj(a)},
cj(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
wj(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.a.j(r,16)&8191)===10)switch(q){case 438:return A.cj(a,A.nN(A.y(s)+" (Error "+q+")",null))
case 445:case 5007:A.y(s)
return A.cj(a,new A.fd())}}if(a instanceof TypeError){p=$.r1()
o=$.r2()
n=$.r3()
m=$.r4()
l=$.r7()
k=$.r8()
j=$.r6()
$.r5()
i=$.ra()
h=$.r9()
g=p.bB(s)
if(g!=null)return A.cj(a,A.nN(A.aU(s),g))
else{g=o.bB(s)
if(g!=null){g.method="call"
return A.cj(a,A.nN(A.aU(s),g))}else if(n.bB(s)!=null||m.bB(s)!=null||l.bB(s)!=null||k.bB(s)!=null||j.bB(s)!=null||m.bB(s)!=null||i.bB(s)!=null||h.bB(s)!=null){A.aU(s)
return A.cj(a,new A.fd())}}return A.cj(a,new A.iE(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.fx()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.cj(a,new A.b8(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.fx()
return a},
dh(a){var s
if(a instanceof A.eA)return a.b
if(a==null)return new A.h_(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.h_(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
oC(a){if(a==null)return J.bp(a)
if(typeof a=="object")return A.fs(a)
return J.bp(a)},
wA(a){if(typeof a=="number")return B.b.gI(a)
if(a instanceof A.iZ)return A.fs(a)
if(a instanceof A.ar)return a.gI(a)
return A.oC(a)},
qE(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
vI(a,b,c,d,e,f){t.Z.a(a)
switch(A.p(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.h(new A.lD("Unsupported number of arguments for wrapped closure"))},
em(a,b){var s=a.$identity
if(!!s)return s
s=A.wB(a,b)
a.$identity=s
return s},
wB(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.vI)},
rO(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.iz().constructor.prototype):Object.create(new A.dl(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.p4(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.rK(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.p4(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
rK(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.h("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.rG)}throw A.h("Error in functionType of tearoff")},
rL(a,b,c,d){var s=A.p3
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
p4(a,b,c,d){if(c)return A.rN(a,b,d)
return A.rL(b.length,d,a,b)},
rM(a,b,c,d){var s=A.p3,r=A.rH
switch(b?-1:a){case 0:throw A.h(new A.iw("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
rN(a,b,c){var s,r
if($.p1==null)$.p1=A.p0("interceptor")
if($.p2==null)$.p2=A.p0("receiver")
s=b.length
r=A.rM(s,c,a,b)
return r},
ou(a){return A.rO(a)},
rG(a,b){return A.h5(v.typeUniverse,A.ak(a.a),b)},
p3(a){return a.a},
rH(a){return a.b},
p0(a){var s,r,q,p=new A.dl("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.h(A.av("Field name "+a+" not found.",null))},
n8(a){return v.getIsolateTag(a)},
yZ(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
x8(a){var s,r,q,p,o,n=A.aU($.qJ.$1(a)),m=$.n2[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.nf[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.qi($.qA.$2(a,n))
if(q!=null){m=$.n2[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.nf[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.ng(s)
$.n2[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.nf[n]=s
return s}if(p==="-"){o=A.ng(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.qN(a,s)
if(p==="*")throw A.h(A.pV(n))
if(v.leafTags[n]===true){o=A.ng(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.qN(a,s)},
qN(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.oB(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
ng(a){return J.oB(a,!1,null,!!a.$iaR)},
xa(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.ng(s)
else return J.oB(s,c,null,null)},
x0(){if(!0===$.oz)return
$.oz=!0
A.x1()},
x1(){var s,r,q,p,o,n,m,l
$.n2=Object.create(null)
$.nf=Object.create(null)
A.x_()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.qO.$1(o)
if(n!=null){m=A.xa(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
x_(){var s,r,q,p,o,n,m=B.cG()
m=A.ek(B.cH,A.ek(B.cI,A.ek(B.b2,A.ek(B.b2,A.ek(B.cJ,A.ek(B.cK,A.ek(B.cL(B.b1),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.qJ=new A.nc(p)
$.qA=new A.nd(o)
$.qO=new A.ne(n)},
ek(a,b){return a(b)||b},
v1(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.a(b,s)
if(!J.a0(r,b[s]))return!1}return!0},
wD(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
xe(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
K:function K(a,b){this.a=a
this.b=b},
fV:function fV(a,b){this.a=a
this.b=b},
bk:function bk(a,b,c){this.a=a
this.b=b
this.c=c},
fW:function fW(a,b,c){this.a=a
this.b=b
this.c=c},
fX:function fX(a){this.a=a},
fY:function fY(a){this.a=a},
ed:function ed(a){this.a=a},
eu:function eu(){},
d4:function d4(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c_:function c_(a,b){this.a=a
this.$ti=b},
dz:function dz(){},
ev:function ev(a,b,c){this.a=a
this.b=b
this.$ti=c},
eH:function eH(a,b){this.a=a
this.$ti=b},
kF:function kF(a){this.a=a},
fv:function fv(){},
l9:function l9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fd:function fd(){},
i4:function i4(a,b,c){this.a=a
this.b=b
this.c=c},
iE:function iE(a){this.a=a},
ko:function ko(a){this.a=a},
eA:function eA(a,b){this.a=a
this.b=b},
h_:function h_(a){this.a=a
this.b=null},
bX:function bX(){},
hk:function hk(){},
hl:function hl(){},
iA:function iA(){},
iz:function iz(){},
dl:function dl(a,b){this.a=a
this.b=b},
iw:function iw(a){this.a=a},
bd:function bd(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
kc:function kc(a){this.a=a},
kg:function kg(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
az:function az(a,b){this.a=a
this.$ti=b},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
kh:function kh(a,b){this.a=a
this.$ti=b},
be:function be(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
cD:function cD(a,b){this.a=a
this.$ti=b},
f3:function f3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
cC:function cC(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
nc:function nc(a){this.a=a},
nd:function nd(a){this.a=a},
ne:function ne(a){this.a=a},
ar:function ar(){},
d7:function d7(){},
d8:function d8(){},
ce:function ce(){},
xm(a){throw A.a9(A.pw(a),new Error())},
c(){throw A.a9(A.kd(""),new Error())},
U(){throw A.a9(A.tl(""),new Error())},
xn(){throw A.a9(A.pw(""),new Error())},
q0(){var s=new A.lB()
return s.b=s},
lB:function lB(){this.b=null},
ah(a,b,c){},
q(a){var s,r,q
if(t.iy.b(a))return a
s=J.a6(a)
r=A.ae(s.gp(a),null,!1,t.z)
for(q=0;q<s.gp(a);++q)B.c.i(r,q,s.k(a,q))
return r},
tq(a,b,c){var s
A.ah(a,b,c)
s=new DataView(a,b,c)
return s},
tr(a){return new Float32Array(a)},
ts(a,b,c){A.ah(a,b,c)
c=B.a.K(a.byteLength-b,4)
return new Float32Array(a,b,c)},
pz(a){return new Float64Array(A.q(a))},
tt(a,b,c){A.ah(a,b,c)
return new Float64Array(a,b,c)},
tu(a,b,c){A.ah(a,b,c)
c=B.a.K(a.byteLength-b,2)
return new Int16Array(a,b,c)},
tv(a){return new Int32Array(a)},
tw(a,b,c){A.ah(a,b,c)
if(c==null)c=B.a.K(a.byteLength-b,4)
return new Int32Array(a,b,c)},
pA(a){return new Int8Array(a)},
tx(a,b,c){A.ah(a,b,c)
return c==null?new Int8Array(a,b):new Int8Array(a,b,c)},
ty(a){return new Uint16Array(a)},
tz(a,b,c){A.ah(a,b,c)
c=B.a.K(a.byteLength-b,2)
return new Uint16Array(a,b,c)},
tA(a){return new Uint32Array(a)},
tB(a,b,c){A.ah(a,b,c)
c=B.a.K(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
tC(a,b,c){var s
A.ah(a,b,c)
s=new Uint8ClampedArray(a,b,c)
return s},
fc(a){return new Uint8Array(a)},
tD(a){return new Uint8Array(A.q(a))},
pB(a,b,c){A.ah(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
bU(a,b,c){if(a>>>0!==a||a>=c)throw A.h(A.j4(b,a))},
j0(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.h(A.wI(a,b,c))
if(b==null)return c
return b},
c6:function c6(){},
dU:function dU(){},
f9:function f9(){},
m3:function m3(a){this.a=a},
i7:function i7(){},
aj:function aj(){},
c7:function c7(){},
aT:function aT(){},
cH:function cH(){},
f6:function f6(){},
f7:function f7(){},
cI:function cI(){},
f8:function f8(){},
fa:function fa(){},
fb:function fb(){},
cJ:function cJ(){},
c8:function c8(){},
fP:function fP(){},
fQ:function fQ(){},
fR:function fR(){},
fS:function fS(){},
o9(a,b){var s=b.c
return s==null?b.c=A.h3(a,"aJ",[b.x]):s},
pP(a){var s=a.w
if(s===6||s===7)return A.pP(a.x)
return s===11||s===12},
tV(a){return a.as},
oD(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
a_(a){return A.m2(v.typeUniverse,a,!1)},
dd(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.dd(a1,s,a3,a4)
if(r===s)return a2
return A.qb(a1,r,!0)
case 7:s=a2.x
r=A.dd(a1,s,a3,a4)
if(r===s)return a2
return A.qa(a1,r,!0)
case 8:q=a2.y
p=A.ej(a1,q,a3,a4)
if(p===q)return a2
return A.h3(a1,a2.x,p)
case 9:o=a2.x
n=A.dd(a1,o,a3,a4)
m=a2.y
l=A.ej(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.oi(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.ej(a1,j,a3,a4)
if(i===j)return a2
return A.qc(a1,k,i)
case 11:h=a2.x
g=A.dd(a1,h,a3,a4)
f=a2.y
e=A.we(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.q9(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.ej(a1,d,a3,a4)
o=a2.x
n=A.dd(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.oj(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.h(A.hf("Attempted to substitute unexpected RTI kind "+a0))}},
ej(a,b,c,d){var s,r,q,p,o=b.length,n=A.m6(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.dd(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
wf(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.m6(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.dd(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
we(a,b,c,d){var s,r=b.a,q=A.ej(a,r,c,d),p=b.b,o=A.ej(a,p,c,d),n=b.c,m=A.wf(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.iS()
s.a=q
s.b=o
s.c=m
return s},
i(a,b){a[v.arrayRti]=b
return a},
ov(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.wW(s)
return a.$S()}return null},
x2(a,b){var s
if(A.pP(b))if(a instanceof A.bX){s=A.ov(a)
if(s!=null)return s}return A.ak(a)},
ak(a){if(a instanceof A.I)return A.n(a)
if(Array.isArray(a))return A.aM(a)
return A.op(J.dg(a))},
aM(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
n(a){var s=a.$ti
return s!=null?s:A.op(a)},
op(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.vF(a,s)},
vF(a,b){var s=a instanceof A.bX?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.va(v.typeUniverse,s.name)
b.$ccache=r
return r},
wW(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.m2(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
wV(a){return A.bz(A.n(a))},
ot(a){var s
if(a instanceof A.ar)return a.fc()
s=a instanceof A.bX?A.ov(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.oW(a).a
if(Array.isArray(a))return A.aM(a)
return A.ak(a)},
bz(a){var s=a.r
return s==null?a.r=new A.iZ(a):s},
wN(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
if(0>=p)return A.a(q,0)
s=A.h5(v.typeUniverse,A.ot(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.a(q,r)
s=A.qe(v.typeUniverse,s,A.ot(q[r]))}return A.h5(v.typeUniverse,s,a)},
b6(a){return A.bz(A.m2(v.typeUniverse,a,!1))},
vE(a){var s=this
s.b=A.wa(s)
return s.b(a)},
wa(a){var s,r,q,p,o
if(a===t.K)return A.vO
if(A.di(a))return A.vS
s=a.w
if(s===6)return A.vB
if(s===1)return A.qq
if(s===7)return A.vJ
r=A.w9(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.di)){a.f="$i"+q
if(q==="r")return A.vM
if(a===t.m)return A.vL
return A.vR}}else if(s===10){p=A.wD(a.x,a.y)
o=p==null?A.qq:p
return o==null?A.eh(o):o}return A.vz},
w9(a){if(a.w===8){if(a===t.p)return A.mj
if(a===t.i||a===t.U)return A.vN
if(a===t.N)return A.vQ
if(a===t.y)return A.mi}return null},
vD(a){var s=this,r=A.vy
if(A.di(s))r=A.vj
else if(s===t.K)r=A.eh
else if(A.eo(s)){r=A.vA
if(s===t.I)r=A.vi
else if(s===t.jv)r=A.qi
else if(s===t.fU)r=A.vg
else if(s===t.jh)r=A.ol
else if(s===t.jX)r=A.vh
else if(s===t.mU)r=A.m8}else if(s===t.p)r=A.p
else if(s===t.N)r=A.aU
else if(s===t.y)r=A.cg
else if(s===t.U)r=A.by
else if(s===t.i)r=A.ok
else if(s===t.m)r=A.bl
s.a=r
return s.a(a)},
vz(a){var s=this
if(a==null)return A.eo(s)
return A.x5(v.typeUniverse,A.x2(a,s),s)},
vB(a){if(a==null)return!0
return this.x.b(a)},
vR(a){var s,r=this
if(a==null)return A.eo(r)
s=r.f
if(a instanceof A.I)return!!a[s]
return!!J.dg(a)[s]},
vM(a){var s,r=this
if(a==null)return A.eo(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.I)return!!a[s]
return!!J.dg(a)[s]},
vL(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.I)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
qp(a){if(typeof a=="object"){if(a instanceof A.I)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
vy(a){var s=this
if(a==null){if(A.eo(s))return a}else if(s.b(a))return a
throw A.a9(A.qk(a,s),new Error())},
vA(a){var s=this
if(a==null||s.b(a))return a
throw A.a9(A.qk(a,s),new Error())},
qk(a,b){return new A.h1("TypeError: "+A.q1(a,A.aV(b,null)))},
q1(a,b){return A.jz(a)+": type '"+A.aV(A.ot(a),null)+"' is not a subtype of type '"+b+"'"},
b5(a,b){return new A.h1("TypeError: "+A.q1(a,b))},
vJ(a){var s=this
return s.x.b(a)||A.o9(v.typeUniverse,s).b(a)},
vO(a){return a!=null},
eh(a){if(a!=null)return a
throw A.a9(A.b5(a,"Object"),new Error())},
vS(a){return!0},
vj(a){return a},
qq(a){return!1},
mi(a){return!0===a||!1===a},
cg(a){if(!0===a)return!0
if(!1===a)return!1
throw A.a9(A.b5(a,"bool"),new Error())},
vg(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a9(A.b5(a,"bool?"),new Error())},
ok(a){if(typeof a=="number")return a
throw A.a9(A.b5(a,"double"),new Error())},
vh(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a9(A.b5(a,"double?"),new Error())},
mj(a){return typeof a=="number"&&Math.floor(a)===a},
p(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.a9(A.b5(a,"int"),new Error())},
vi(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a9(A.b5(a,"int?"),new Error())},
vN(a){return typeof a=="number"},
by(a){if(typeof a=="number")return a
throw A.a9(A.b5(a,"num"),new Error())},
ol(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a9(A.b5(a,"num?"),new Error())},
vQ(a){return typeof a=="string"},
aU(a){if(typeof a=="string")return a
throw A.a9(A.b5(a,"String"),new Error())},
qi(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a9(A.b5(a,"String?"),new Error())},
bl(a){if(A.qp(a))return a
throw A.a9(A.b5(a,"JSObject"),new Error())},
m8(a){if(a==null)return a
if(A.qp(a))return a
throw A.a9(A.b5(a,"JSObject?"),new Error())},
qv(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.aV(a[q],b)
return s},
w_(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.qv(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.aV(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
ql(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.i([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.c.B(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.a(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.aV(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.aV(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.aV(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.aV(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.aV(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
aV(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.aV(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.aV(a.x,b)+">"
if(l===8){p=A.wi(a.x)
o=a.y
return o.length>0?p+("<"+A.qv(o,b)+">"):p}if(l===10)return A.w_(a,b)
if(l===11)return A.ql(a,b,null)
if(l===12)return A.ql(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.a(b,n)
return b[n]}return"?"},
wi(a){var s=A.qW(a)
if(s!=null)return s
return"minified:"+a},
vb(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
va(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.m2(a,b,!1)
else if(typeof m=="number"){s=m
r=A.h4(a,5,"#")
q=A.m6(s)
for(p=0;p<s;++p)q[p]=r
o=A.h3(a,b,q)
n[b]=o
return o}else return m},
v9(a,b){return A.qg(a.tR,b)},
v8(a,b){return A.qg(a.eT,b)},
m2(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.qd(a,null,b,!1)
r.set(b,s)
return s},
h5(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.qd(a,b,c,!0)
q.set(c,r)
return r},
qe(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.oi(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
qd(a,b,c,d){return A.v_(A.uU(a,b,c,d))},
cf(a,b){b.a=A.vD
b.b=A.vE
return b},
h4(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.bj(null,null)
s.w=b
s.as=c
r=A.cf(a,s)
a.eC.set(c,r)
return r},
qb(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.v6(a,b,r,c)
a.eC.set(r,s)
return s},
v6(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.di(b))if(!(b===t.a||b===t.v))if(s!==6)r=s===7&&A.eo(b.x)
if(r)return b
else if(s===1)return t.a}q=new A.bj(null,null)
q.w=6
q.x=b
q.as=c
return A.cf(a,q)},
qa(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.v4(a,b,r,c)
a.eC.set(r,s)
return s},
v4(a,b,c,d){var s,r
if(d){s=b.w
if(A.di(b)||b===t.K)return b
else if(s===1)return A.h3(a,"aJ",[b])
else if(b===t.a||b===t.v)return t.gK}r=new A.bj(null,null)
r.w=7
r.x=b
r.as=c
return A.cf(a,r)},
v7(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.bj(null,null)
s.w=13
s.x=b
s.as=q
r=A.cf(a,s)
a.eC.set(q,r)
return r},
h2(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
v3(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
h3(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.h2(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.bj(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.cf(a,r)
a.eC.set(p,q)
return q},
oi(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.h2(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.bj(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.cf(a,o)
a.eC.set(q,n)
return n},
qc(a,b,c){var s,r,q="+"+(b+"("+A.h2(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.bj(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.cf(a,s)
a.eC.set(q,r)
return r},
q9(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.h2(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.h2(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.v3(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.bj(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.cf(a,p)
a.eC.set(r,o)
return o},
oj(a,b,c,d){var s,r=b.as+("<"+A.h2(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.v5(a,b,c,r,d)
a.eC.set(r,s)
return s},
v5(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.m6(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.dd(a,b,r,0)
m=A.ej(a,c,r,0)
return A.oj(a,n,m,c!==m)}}l=new A.bj(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.cf(a,l)},
uU(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
v_(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.uW(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.q5(a,r,l,k,!1)
else if(q===46)r=A.q5(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.d6(a.u,a.e,k.pop()))
break
case 94:k.push(A.v7(a.u,k.pop()))
break
case 35:k.push(A.h4(a.u,5,"#"))
break
case 64:k.push(A.h4(a.u,2,"@"))
break
case 126:k.push(A.h4(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.uY(a,k)
break
case 38:A.uX(a,k)
break
case 63:p=a.u
k.push(A.qb(p,A.d6(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.qa(p,A.d6(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.uV(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.q6(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.v0(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.d6(a.u,a.e,m)},
uW(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
q5(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.vb(s,o.x)[p]
if(n==null)A.G('No "'+p+'" in "'+A.tV(o)+'"')
d.push(A.h5(s,o,n))}else d.push(p)
return m},
uY(a,b){var s,r=a.u,q=A.q4(a,b),p=b.pop()
if(typeof p=="string")b.push(A.h3(r,p,q))
else{s=A.d6(r,a.e,p)
switch(s.w){case 11:b.push(A.oj(r,s,q,a.n))
break
default:b.push(A.oi(r,s,q))
break}}},
uV(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.q4(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.d6(p,a.e,o)
q=new A.iS()
q.a=s
q.b=n
q.c=m
b.push(A.q9(p,r,q))
return
case-4:b.push(A.qc(p,b.pop(),s))
return
default:throw A.h(A.hf("Unexpected state under `()`: "+A.y(o)))}},
uX(a,b){var s=b.pop()
if(0===s){b.push(A.h4(a.u,1,"0&"))
return}if(1===s){b.push(A.h4(a.u,4,"1&"))
return}throw A.h(A.hf("Unexpected extended operation "+A.y(s)))},
q4(a,b){var s=b.splice(a.p)
A.q6(a.u,a.e,s)
a.p=b.pop()
return s},
d6(a,b,c){if(typeof c=="string")return A.h3(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.uZ(a,b,c)}else return c},
q6(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.d6(a,b,c[s])},
v0(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.d6(a,b,c[s])},
uZ(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.h(A.hf("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.h(A.hf("Bad index "+c+" for "+b.C(0)))},
x5(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.ag(a,b,null,c,null)
r.set(c,s)}return s},
ag(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.di(d))return!0
s=b.w
if(s===4)return!0
if(A.di(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.ag(a,c[b.x],c,d,e))return!0
q=d.w
p=t.a
if(b===p||b===t.v){if(q===7)return A.ag(a,b,c,d.x,e)
return d===p||d===t.v||q===6}if(d===t.K){if(s===7)return A.ag(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.ag(a,b.x,c,d,e))return!1
return A.ag(a,A.o9(a,b),c,d,e)}if(s===6)return A.ag(a,p,c,d,e)&&A.ag(a,b.x,c,d,e)
if(q===7){if(A.ag(a,b,c,d.x,e))return!0
return A.ag(a,b,c,A.o9(a,d),e)}if(q===6)return A.ag(a,b,c,p,e)||A.ag(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.lZ)return!0
if(q===12){if(b===t.O)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.ag(a,j,c,i,e)||!A.ag(a,i,e,j,c))return!1}return A.qo(a,b.x,c,d.x,e)}if(q===11){if(b===t.O)return!0
if(p)return!1
return A.qo(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.vK(a,b,c,d,e)}if(o&&q===10)return A.vP(a,b,c,d,e)
return!1},
qo(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.ag(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.ag(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.ag(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.ag(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.ag(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
vK(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.h5(a,b,r[o])
return A.qh(a,p,null,c,d.y,e)}return A.qh(a,b.y,null,c,d.y,e)},
qh(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.ag(a,b[s],d,e[s],f))return!1
return!0},
vP(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.ag(a,r[s],c,q[s],e))return!1
return!0},
eo(a){var s=a.w,r=!0
if(!(a===t.a||a===t.v))if(!A.di(a))if(s!==6)r=s===7&&A.eo(a.x)
return r},
di(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
qg(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
m6(a){return a>0?new Array(a):v.typeUniverse.sEA},
bj:function bj(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
iS:function iS(){this.c=this.b=this.a=null},
iZ:function iZ(a){this.a=a},
iQ:function iQ(){},
h1:function h1(a){this.a=a},
uO(){var s,r,q
if(self.scheduleImmediate!=null)return A.wm()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.em(new A.ly(s),1)).observe(r,{childList:true})
return new A.lx(s,r,q)}else if(self.setImmediate!=null)return A.wn()
return A.wo()},
uP(a){self.scheduleImmediate(A.em(new A.lz(t.M.a(a)),0))},
uQ(a){self.setImmediate(A.em(new A.lA(t.M.a(a)),0))},
uR(a){A.ob(B.aA,t.M.a(a))},
ob(a,b){return A.v2(0,b)},
v2(a,b){var s=new A.lZ()
s.ik(a,b)
return s},
dc(a){return new A.iM(new A.a5($.Z,a.n("a5<0>")),a.n("iM<0>"))},
db(a,b){a.$2(0,null)
b.b=!0
return b.a},
bm(a,b){A.vl(a,b)},
da(a,b){b.ef(a)},
d9(a,b){b.eg(A.bo(a),A.dh(a))},
vl(a,b){var s,r,q=new A.mb(b),p=new A.mc(b)
if(a instanceof A.a5)a.fI(q,p,t.z)
else{s=t.z
if(a instanceof A.a5)a.en(q,p,s)
else{r=new A.a5($.Z,t.c)
r.a=8
r.c=a
r.fI(q,p,s)}}},
de(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.Z.hw(new A.mH(s),t.q,t.p,t.z)},
q8(a,b,c){return 0},
nF(a){var s
if(t.Q.b(a)){s=a.gcp()
if(s!=null)return s}return B.aa},
t5(a,b){var s=new A.a5($.Z,b.n("a5<0>"))
A.pS(B.aA,new A.jL(a,s))
return s},
t6(a,b){var s
if(!b.b(null))throw A.h(A.j9(null,"computation","The type parameter is not nullable"))
s=new A.a5($.Z,b.n("a5<0>"))
A.pS(a,new A.jK(null,s,b))
return s},
qn(a,b){if($.Z===B.B)return null
return null},
vG(a,b){if($.Z!==B.B)A.qn(a,b)
if(b==null)if(t.Q.b(a)){b=a.gcp()
if(b==null){A.pK(a,B.aa)
b=B.aa}}else b=B.aa
else if(t.Q.b(a))A.pK(a,b)
return new A.aO(a,b)},
lH(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t.c;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.tY()
b.dJ(new A.aO(new A.b8(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.fn(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.cA()
b.cX(o.a)
A.d3(b,p)
return}b.a^=2
A.j1(null,null,b.b,t.M.a(new A.lI(o,b)))},
d3(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.u,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.os(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.d3(d.a,c)
q.a=l
k=l.a}p=d.a
j=p.c
q.b=n
q.c=j
if(o){i=c.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=c.b.b
if(n){p=p.b===h
p=!(p||p)}else p=!1
if(p){s.a(j)
A.os(j.a,j.b)
return}g=$.Z
if(g!==h)$.Z=h
else g=null
c=c.c
if((c&15)===8)new A.lM(q,d,n).$0()
else if(o){if((c&1)!==0)new A.lL(q,j).$0()}else if((c&2)!==0)new A.lK(d,q).$0()
if(g!=null)$.Z=g
c=q.c
if(c instanceof A.a5){p=q.a.$ti
p=p.n("aJ<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.dd(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.lH(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.dd(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
w0(a,b){var s
if(t.R.b(a))return b.hw(a,t.z,t.K,t.l)
s=t.x
if(s.b(a))return s.a(a)
throw A.h(A.j9(a,"onError",u.c))},
vY(){var s,r
for(s=$.ei;s!=null;s=$.ei){$.h9=null
r=s.b
$.ei=r
if(r==null)$.h8=null
s.a.$0()}},
wc(){$.oq=!0
try{A.vY()}finally{$.h9=null
$.oq=!1
if($.ei!=null)$.oM().$1(A.qC())}},
qw(a){var s=new A.iN(a),r=$.h8
if(r==null){$.ei=$.h8=s
if(!$.oq)$.oM().$1(A.qC())}else $.h8=r.b=s},
w8(a){var s,r,q,p=$.ei
if(p==null){A.qw(a)
$.h9=$.h8
return}s=new A.iN(a)
r=$.h9
if(r==null){s.b=p
$.ei=$.h9=s}else{q=r.b
s.b=q
$.h9=r.b=s
if(q==null)$.h8=s}},
yd(a,b){A.j2(a,"stream",t.K)
return new A.iW(b.n("iW<0>"))},
pS(a,b){var s=$.Z
if(s===B.B)return A.ob(a,t.M.a(b))
return A.ob(a,t.M.a(s.h4(b)))},
os(a,b){A.w8(new A.ms(a,b))},
qu(a,b,c,d,e){var s,r=$.Z
if(r===c)return d.$0()
$.Z=c
s=r
try{r=d.$0()
return r}finally{$.Z=s}},
w3(a,b,c,d,e,f,g){var s,r=$.Z
if(r===c)return d.$1(e)
$.Z=c
s=r
try{r=d.$1(e)
return r}finally{$.Z=s}},
w2(a,b,c,d,e,f,g,h,i){var s,r=$.Z
if(r===c)return d.$2(e,f)
$.Z=c
s=r
try{r=d.$2(e,f)
return r}finally{$.Z=s}},
j1(a,b,c,d){t.M.a(d)
if(B.B!==c){d=c.h4(d)
d=d}A.qw(d)},
ly:function ly(a){this.a=a},
lx:function lx(a,b,c){this.a=a
this.b=b
this.c=c},
lz:function lz(a){this.a=a},
lA:function lA(a){this.a=a},
lZ:function lZ(){},
m_:function m_(a,b){this.a=a
this.b=b},
iM:function iM(a,b){this.a=a
this.b=!1
this.$ti=b},
mb:function mb(a){this.a=a},
mc:function mc(a){this.a=a},
mH:function mH(a){this.a=a},
h0:function h0(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
eg:function eg(a,b){this.a=a
this.$ti=b},
aO:function aO(a,b){this.a=a
this.b=b},
jL:function jL(a,b){this.a=a
this.b=b},
jK:function jK(a,b,c){this.a=a
this.b=b
this.c=c},
iO:function iO(){},
fL:function fL(a,b){this.a=a
this.$ti=b},
d2:function d2(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
a5:function a5(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
lE:function lE(a,b){this.a=a
this.b=b},
lJ:function lJ(a,b){this.a=a
this.b=b},
lI:function lI(a,b){this.a=a
this.b=b},
lG:function lG(a,b){this.a=a
this.b=b},
lF:function lF(a,b){this.a=a
this.b=b},
lM:function lM(a,b,c){this.a=a
this.b=b
this.c=c},
lN:function lN(a,b){this.a=a
this.b=b},
lO:function lO(a){this.a=a},
lL:function lL(a,b){this.a=a
this.b=b},
lK:function lK(a,b){this.a=a
this.b=b},
iN:function iN(a){this.a=a
this.b=null},
iW:function iW(a){this.$ti=a},
h6:function h6(){},
iV:function iV(){},
lV:function lV(a,b){this.a=a
this.b=b},
ms:function ms(a,b){this.a=a
this.b=b},
px(a,b){return new A.bd(a.n("@<0>").aM(b).n("bd<1,2>"))},
cE(a,b,c){return b.n("@<0>").aM(c).n("nO<1,2>").a(A.qE(a,new A.bd(b.n("@<0>").aM(c).n("bd<1,2>"))))},
F(a,b){return new A.bd(a.n("@<0>").aM(b).n("bd<1,2>"))},
nP(a){return new A.fN(a.n("fN<0>"))},
og(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
i6(a,b,c){var s=A.px(b,c)
a.b5(0,new A.ki(s,b,c))
return s},
tm(a,b){var s=t.V
return J.oV(s.a(a),s.a(b))},
nS(a){var s,r
if(A.oA(a))return"{...}"
s=new A.fy("")
try{r={}
B.c.B($.aW,a)
s.a+="{"
r.a=!0
a.b5(0,new A.kl(r,s))
s.a+="}"}finally{if(0>=$.aW.length)return A.a($.aW,-1)
$.aW.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
tn(a){return 8},
to(a){var s
a=(a<<1>>>0)-1
for(;;a=s){s=(a&a-1)>>>0
if(s===0)return a}},
fN:function fN(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iT:function iT(a){this.a=a
this.b=null},
d5:function d5(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ki:function ki(a,b,c){this.a=a
this.b=b
this.c=c},
C:function C(){},
dT:function dT(){},
kk:function kk(a){this.a=a},
kl:function kl(a,b){this.a=a
this.b=b},
f4:function f4(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
fO:function fO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
bL:function bL(){},
fZ:function fZ(){},
vd(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.rh()
else s=new Uint8Array(o)
for(r=0;r<o;++r){q=b+r
if(!(q<a.length))return A.a(a,q)
p=a[q]
if((p&255)!==p)p=255
s[r]=p}return s},
vc(a,b,c,d){var s=a?$.rg():$.rf()
if(s==null)return null
if(0===c&&d===b.length)return A.qf(s,b)
return A.qf(s,b.subarray(c,d))},
qf(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
ve(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
m5:function m5(){},
m4:function m4(){},
m1:function m1(){},
m0:function m0(){},
dm:function dm(){},
hp:function hp(){},
hq:function hq(){},
i5:function i5(){},
kf:function kf(){},
ke:function ke(a){this.a=a},
iF:function iF(){},
iG:function iG(a){this.a=a},
j_:function j_(a){this.a=a
this.b=16
this.c=0},
x3(a){var s=A.tO(a,null)
if(s!=null)return s
throw A.h(A.nI(a,null,null))},
rT(a,b){a=A.a9(a,new Error())
if(a==null)a=A.eh(a)
a.stack=b.C(0)
throw a},
ae(a,b,c,d){var s,r=c?J.hY(a,d):J.nL(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
nQ(a,b,c){var s,r,q=A.i([],c.n("t<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.P)(a),++r)B.c.B(q,c.a(a[r]))
if(b)return q
q.$flags=1
return q},
w(a,b){var s,r
if(Array.isArray(a))return A.i(a.slice(0),b.n("t<0>"))
s=A.i([],b.n("t<0>"))
for(r=J.dj(a);r.D();)B.c.B(s,r.gJ())
return s},
nR(a,b,c){var s,r=J.hY(a,c)
for(s=0;s<a;++s)B.c.i(r,s,b.$1(s))
return r},
e5(a,b,c){var s,r,q,p,o
A.bi(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.h(A.aC(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.pJ(b>0||c<o?p.slice(b,c):p)}if(t.hD.b(a))return A.tZ(a,b,c)
if(r)a=J.rD(a,c)
if(b>0)a=J.nD(a,b)
s=A.w(a,t.p)
return A.pJ(s)},
tZ(a,b,c){var s=a.length
if(b>=s)return""
return A.tQ(a,b,c==null||c>s?s:c)},
pR(a,b,c){var s=J.dj(b)
if(!s.D())return a
if(c.length===0){do a+=A.y(s.gJ())
while(s.D())}else{a+=A.y(s.gJ())
while(s.D())a=a+c+A.y(s.gJ())}return a},
tY(){return A.dh(new Error())},
jz(a){if(typeof a=="number"||A.mi(a)||a==null)return J.hc(a)
if(typeof a=="string")return JSON.stringify(a)
return A.pI(a)},
rU(a,b){A.j2(a,"error",t.K)
A.j2(b,"stackTrace",t.l)
A.rT(a,b)},
hf(a){return new A.he(a)},
av(a,b){return new A.b8(!1,null,b,a)},
j9(a,b,c){return new A.b8(!0,a,b,c)},
ja(a,b,c){return a},
pN(a){var s=null
return new A.e1(s,s,!1,s,s,a)},
aC(a,b,c,d,e){return new A.e1(b,c,!0,a,d,"Invalid value")},
b1(a,b,c){if(0>a||a>c)throw A.h(A.aC(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.h(A.aC(b,a,c,"end",null))
return b}return c},
bi(a,b){if(a<0)throw A.h(A.aC(a,0,null,b,null))
return a},
k0(a,b,c,d,e){return new A.hJ(b,!0,a,e,"Index out of range")},
aq(a){return new A.fB(a)},
pV(a){return new A.iD(a)},
kY(a){return new A.e4(a)},
br(a){return new A.ho(a)},
nI(a,b,c){return new A.eG(a,b,c)},
tf(a,b,c){var s,r
if(A.oA(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.i([],t.s)
B.c.B($.aW,a)
try{A.vT(a,s)}finally{if(0>=$.aW.length)return A.a($.aW,-1)
$.aW.pop()}r=A.pR(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
k2(a,b,c){var s,r
if(A.oA(a))return b+"..."+c
s=new A.fy(b)
B.c.B($.aW,a)
try{r=s
r.a=A.pR(r.a,a,", ")}finally{if(0>=$.aW.length)return A.a($.aW,-1)
$.aW.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
vT(a,b){var s,r,q,p,o,n,m,l=a.gE(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.D())return
s=A.y(l.gJ())
B.c.B(b,s)
k+=s.length+2;++j}if(!l.D()){if(j<=5)return
if(0>=b.length)return A.a(b,-1)
r=b.pop()
if(0>=b.length)return A.a(b,-1)
q=b.pop()}else{p=l.gJ();++j
if(!l.D()){if(j<=4){B.c.B(b,A.y(p))
return}r=A.y(p)
if(0>=b.length)return A.a(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gJ();++j
for(;l.D();p=o,o=n){n=l.gJ();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2;--j}B.c.B(b,"...")
return}}q=A.y(p)
r=A.y(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.a(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.c.B(b,m)
B.c.B(b,q)
B.c.B(b,r)},
dV(a,b,c,d){var s
if(B.E===c){s=B.b.gI(a)
b=J.bp(b)
return A.kZ(A.bN(A.bN($.j7(),s),b))}if(B.E===d){s=B.b.gI(a)
b=J.bp(b)
c=J.bp(c)
return A.kZ(A.bN(A.bN(A.bN($.j7(),s),b),c))}s=B.b.gI(a)
b=J.bp(b)
c=J.bp(c)
d=J.bp(d)
d=A.kZ(A.bN(A.bN(A.bN(A.bN($.j7(),s),b),c),d))
return d},
o(a){var s,r,q=$.j7()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.P)(a),++r)q=A.bN(q,J.bp(a[r]))
return A.kZ(q)},
cm:function cm(){},
lC:function lC(){},
Y:function Y(){},
he:function he(a){this.a=a},
bO:function bO(){},
b8:function b8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e1:function e1(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hJ:function hJ(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fB:function fB(a){this.a=a},
iD:function iD(a){this.a=a},
e4:function e4(a){this.a=a},
ho:function ho(a){this.a=a},
ia:function ia(){},
fx:function fx(){},
lD:function lD(a){this.a=a},
eG:function eG(a,b,c){this.a=a
this.b=b
this.c=c},
f:function f(){},
aA:function aA(a,b,c){this.a=a
this.b=b
this.$ti=c},
ab:function ab(){},
I:function I(){},
iX:function iX(){},
cY:function cY(){this.b=this.a=0},
fy:function fy(a){this.a=a},
hs:function hs(a,b){this.a=a
this.$ti=b},
k3(a,b){var s,r,q,p,o
if(b.length===0)return!1
s=b.split(".")
r=v.G
for(q=s.length,p=0;p<q;++p,r=o){o=r[s[p]]
A.m8(o)
if(o==null)return!1}return a instanceof t.O.a(r)},
kn:function kn(a){this.a=a},
vo(a,b,c){t.Z.a(a)
if(A.p(c)>=1)return a.$1(b)
return a.$0()},
oE(a,b){var s=new A.a5($.Z,b.n("a5<0>")),r=new A.fL(s,b.n("fL<0>"))
a.then(A.em(new A.ni(r,b),1),A.em(new A.nj(r),1))
return s},
ni:function ni(a,b){this.a=a
this.b=b},
nj:function nj(a){this.a=a},
xk(a){return Math.sin(a)},
wC(a){return Math.cos(a)},
fU:function fU(){this.b=this.a=0},
hB(a){var s=new A.jQ()
s.i_(a)
return s},
jQ:function jQ(){this.a=$
this.b=0
this.c=2147483647},
eT:function eT(a,b){this.a=a
this.b=b},
eS:function eS(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0
_.f=c},
ef:function ef(a,b){this.a=a
this.b=b},
lw:function lw(){},
m7:function m7(){},
rP(a,b,c,d){var s=A.of(),r=A.of(),q=A.of(),p=new Uint16Array(16),o=new Uint32Array(573),n=new Uint8Array(573)
s=new A.jn(a,c,s,r,q,p,o,n)
s.jI(b,d)
s.jc(B.a8)
return s},
p7(a,b,c,d){var s,r=b*2,q=a.length
if(!(r>=0&&r<q))return A.a(a,r)
r=a[r]
s=c*2
if(!(s>=0&&s<q))return A.a(a,s)
s=a[s]
if(r>=s)if(r===s){if(!(b>=0&&b<573))return A.a(d,b)
r=d[b]
if(!(c>=0&&c<573))return A.a(d,c)
r=r<=d[c]}else r=!1
else r=!0
return r},
of(){return new A.lR()},
uS(a,b,c){var s,r,q,p,o,n,m,l=new Uint16Array(16)
for(s=0,r=1;r<=15;++r){s=s+c[r-1]<<1>>>0
if(!(r<16))return A.a(l,r)
l[r]=s}for(q=a.length,p=0;p<=b;++p){o=p*2
n=o+1
if(!(n<q))return A.a(a,n)
m=a[n]
if(m===0)continue
if(!(m<16))return A.a(l,m)
n=l[m]
if(!(m<16))return A.a(l,m)
l[m]=n+1
n=A.uT(n,m)
a.$flags&2&&A.b(a)
if(!(o<q))return A.a(a,o)
a[o]=n}},
uT(a,b){var s,r=0
do{s=A.aN(a,1)
r=(r|a&1)<<1>>>0
if(--b,b>0){a=s
continue}else break}while(!0)
return A.aN(r,1)},
q3(a){var s
if(a<256){if(!(a>=0))return A.a(B.ah,a)
s=B.ah[a]}else{s=256+A.aN(a,7)
if(!(s<512))return A.a(B.ah,s)
s=B.ah[s]}return s},
oh(a,b,c,d,e){return new A.lY(a,b,c,d,e)},
aN(a,b){if(a>=0)return B.a.ba(a,b)
else return B.a.ba(a,b)+B.a.P(2,(~b>>>0)+65536&65535)},
eb:function eb(a,b){this.a=a
this.b=b},
jn:function jn(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0
_.x=_.w=_.r=_.f=$
_.y=2
_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=$
_.k1=0
_.p3=_.p2=_.p1=_.ok=_.k4=_.k3=_.k2=$
_.p4=c
_.R8=d
_.RG=e
_.rx=f
_.ry=g
_.x1=_.to=$
_.x2=h
_.bc=_.aO=_.bJ=_.c4=_.bA=_.aI=_.bz=_.y2=_.y1=_.xr=$},
b4:function b4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lR:function lR(){this.c=this.b=this.a=$},
lY:function lY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
k1:function k1(a,b){var _=this
_.a=a
_.b=null
_.c=b
_.d=!1
_.f=_.e=0},
b7(a){return new A.hd(a,null,null)},
hd:function hd(a,b,c){this.a=a
this.b=b
this.c=c},
et:function et(a,b){this.a=a
this.b=b},
po(a){return new A.eU(new A.iP(a,0,new Uint8Array(65536),B.R),0,null,B.R)},
pp(a,b,c){return new A.eU(a.b,a.c+b,c,a.a)},
eU:function eU(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=0
_.a=d},
iP:function iP(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.r=_.f=_.e=0
_.w=!1
_.a=d},
hK(a,b,c,d){var s,r,q,p,o=new A.eV(b)
if(d==null)d=0
if(d<0)d=0
else{s=a.length
if(d>s)d=s}r=a.length-d
if(c==null)c=r
if(c<0||c>r)c=r
q=t.D.b(a)?a:new Uint8Array(A.q(a))
p=J.Q(B.d.gt(q),q.byteOffset+d,c)
o.b=p
o.d=p.length
return o},
eV:function eV(a){var _=this
_.b=null
_.c=0
_.d=$
_.a=a},
eW:function eW(){},
tF(a){return new A.ic(new Uint8Array(32768),a)},
ic:function ic(a,b){this.b=0
this.c=a
this.a=b},
ff:function ff(){},
ny(a){var s,r
A:{if(a==null){s=null
break A}if(A.mi(a)){s=a
break A}if(typeof a=="number"){s=a
break A}if(typeof a=="string"){s=a
break A}if(t.D.b(a)){s=a
break A}if(t.bW.b(a)){s=a
break A}if(t.pk.b(a)){s=a
break A}if(t.j.b(a)){s=[]
for(r=J.dj(a);r.D();)s.push(A.ny(r.gJ()))
break A}s={}
s.a=null
if(t.f.b(a)){s.a=a
s=new A.nz(s).$0()
break A}s=A.G(A.av("Cannot send "+J.oW(a).C(0),null))}return s},
oy(a){var s,r,q,p,o=null
if(a==null)return o
if(typeof a==="boolean")return A.cg(a)
if(typeof a==="number")return A.ok(a)
if(typeof a==="string")return A.aU(a)
s=A.k3(a,"Uint8Array")
if(s)return t.hD.a(a)
s=A.k3(a,"Int32Array")
if(s)return t.da.a(a)
s=A.k3(a,"Float32Array")
if(s)return t.gz.a(a)
s=A.k3(a,"Array")
if(s){s=[]
t.dM.a(a)
r=B.c.gE(a)
while(r.D())s.push(A.oy(r.gJ()))
return s}A.bl(a)
q=t.dM.a(A.th(A.bl(v.G.Object),"keys",a,o,o,o))
s=A.F(t.N,t.X)
r=B.c.gE(q)
while(r.D()){p=A.aU(r.gJ())
s.i(0,p,A.oy(a[p]))}return s},
mY(a){return A.wF(t.bC.a(a))},
wF(a){var s=0,r=A.dc(t.bM),q,p=2,o=[],n,m,l,k,j,i,h,g,f
var $async$mY=A.de(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:h=a.b
g=null
p=4
s=7
return A.bm(A.mf(h),$async$mY)
case 7:g=c
p=2
s=6
break
case 4:p=3
f=o.pop()
if(A.bo(f) instanceof A.hH)throw f
else{if(A.qU(h)===B.aE)throw A.h(B.cW)
g=A.wE(h)
n=g.a*g.b
k=n
if(typeof k!=="number"){q=k.bg()
s=1
break}if(k>12582912){k=n
if(typeof k!=="number"){q=A.a8(k)
s=1
break}m=Math.sqrt(12582912/k)
k=g
j=Math.max(g.a,g.b)
i=m
if(typeof i!=="number"){q=A.a8(i)
s=1
break}g=A.n4(k,B.b.a2(j*i))}}s=6
break
case 3:s=2
break
case 6:q=new A.fV(!1,g)
s=1
break
case 1:return A.da(q,r)
case 2:return A.d9(o.at(-1),r)}})
return A.db($async$mY,r)},
mf(a){var s=0,r=A.dc(t.B),q,p=[],o,n,m,l,k,j,i,h,g,f
var $async$mf=A.de(function(b,c){if(b===1)return A.d9(c,r)
for(;;)switch(s){case 0:g=v.G
s=3
return A.bm(A.oE(A.bl(g.createImageBitmap(A.bl(new g.Blob(A.i([a],t.aA))),{imageOrientation:"from-image"})),t.m),$async$mf)
case 3:f=c
try{o=A.p(f.width)
n=A.p(f.height)
i=o
h=n
if(typeof i!=="number"){q=i.bO()
s=1
break}if(typeof h!=="number"){q=A.a8(h)
s=1
break}if(i*h>12e7){i=A.hI("Too large to open: "+A.y(o)+" \xd7 "+A.y(n)+" pixels (the limit is 120 megapixels)")
throw A.h(i)}i=o
h=n
if(typeof i!=="number"){q=i.bO()
s=1
break}if(typeof h!=="number"){q=A.a8(h)
s=1
break}if(i*h>12582912){i=o
h=n
if(typeof i!=="number"){q=i.bO()
s=1
break}if(typeof h!=="number"){q=A.a8(h)
s=1
break}m=Math.sqrt(12582912/(i*h))
h=o
i=m
if(typeof h!=="number"){q=h.bO()
s=1
break}if(typeof i!=="number"){q=A.a8(i)
s=1
break}o=B.b.a2(h*i)
i=n
h=m
if(typeof i!=="number"){q=i.bO()
s=1
break}if(typeof h!=="number"){q=A.a8(h)
s=1
break}n=B.b.a2(i*h)}l=A.bl(new g.OffscreenCanvas(o,n))
i=A.m8(l.getContext("2d"))
i.toString
i.fillStyle="white"
i.fillRect(0,0,o,n)
i.imageSmoothingQuality="high"
i.drawImage.apply(i,[f,0,0,o,n])
k=i
j=t.mR.a(A.bl(k.getImageData(0,0,o,n)).data)
i=A.pO(o,n,J.Q(J.rA(j),j.byteOffset,j.byteLength))
q=i
s=1
break}finally{f.close()}case 1:return A.da(q,r)}})
return A.db($async$mf,r)},
j5(a){return A.wL(a)},
wL(a){var s=0,r=A.dc(t.D),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c
var $async$j5=A.de(function(b,a0){if(b===1){o.push(a0)
s=p}for(;;)switch(s){case 0:p=4
j=v.G
i=a.a
h=a.b
n=A.bl(new j.OffscreenCanvas(i,h))
g=A.m8(n.getContext("2d"))
g.toString
m=g
g=a.c
l=J.ry(B.d.gt(g),g.byteOffset,g.byteLength)
m.putImageData(A.bl(new j.ImageData(l,i,h)),0,0)
s=7
return A.bm(A.oE(A.bl(n.convertToBlob({type:"image/png"})),t.m),$async$j5)
case 7:k=a0
c=A
s=8
return A.bm(A.oE(A.bl(k.arrayBuffer()),t.eb),$async$j5)
case 8:h=c.pB(a0,0,null)
q=h
s=1
break
p=2
s=6
break
case 4:p=3
d=o.pop()
e=new A.ax(null,null,null,null,0,B.i,0,0)
e.i8(null,B.d.gt(a.c),0,null,B.f,0,0,B.i,a.b,null,0,4,B.ab,null,B.f,null,null,a.a,!1)
j=new A.kw(B.k4,4,null).lt(e,!1)
q=j
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.da(q,r)
case 2:return A.d9(o.at(-1),r)}})
return A.db($async$j5,r)},
xj(){var s,r=v.G,q=t.bD
q=new A.nt(new A.jq(A.wr(),B.cX,A.F(t.cc,t.fb),A.F(q,t.bk),A.F(q,t.hh)),r)
if(typeof q=="function")A.G(A.av("Attempting to rewrap a JS function.",null))
s=function(a,b){return function(c){return a(b,c,arguments.length)}}(A.vo,q)
s[$.oH()]=q
r.onmessage=s},
h7(b2,b3,b4){var s=0,r=A.dc(t.X),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$h7=A.de(function(b5,b6){if(b5===1)return A.d9(b6,r)
for(;;)switch(s){case 0:case 3:switch(b3){case"open":s=5
break
case"build":s=6
break
case"layout":s=7
break
case"brush":s=8
break
case"channels":s=9
break
case"match":s=10
break
case"export":s=11
break
default:s=12
break}break
case 5:b4.toString
t.f.a(b4)
A.aU(b4.k(0,"name"))
p=t.D.a(b4.k(0,"bytes"))
o=A.ol(b4.k(0,"lastModified"))
if(o!=null)B.b.h(o)
s=13
return A.bm(b2.dt(new A.hj(p)),$async$h7)
case 13:n=b6
m=n.a
l=n.b
k=n.c
q=A.cE(["width",b2.d,"height",b2.e,"display",A.lv(m,0),"heic",l,"ms",k],t.N,t.K)
s=1
break
case 6:j=new A.cY()
$.ep()
j.cq()
i=b2.r
if(i==null)i=A.G(B.ba)
h=A.tE(A.n4(i,1000))
g=A.x6(h,1.6,2,Math.max(1,B.b.a8(0.004*h.gbK())))
f=A.wX(g,1.6)
e=A.wz(g)
d=A.n4(i,Math.min(2048,4096))
b2.Q=d
b2.z=A.oF(d)
b2.r=null
b2.w=A.wv(new A.kE(h,g,f,e),B.cs,B.cE)
b2.x.aR(0)
b2.y.aR(0)
q=A.i([h.a,h.b,j.gcF()],t.t)
s=1
break
case 7:p=A.iL(b4)
n=b2.fJ(p)
c=n.a
b=b2.y.k(0,p)
b2.kf(p)
p=t.N
o=A.F(p,t.K)
a=c.r
o.i(0,"layout",A.cE(["width",c.a,"height",c.b,"regionCount",c.c,"okLab",c.d,"area",c.f,"points",a.a,"ringStarts",a.b,"regionRings",a.c,"edges",c.w.a,"brush",c.x,"variation",c.y,"detail",c.z],p,t.X))
o.i(0,"ms",n.b)
if(b!=null)o.i(0,"brush",A.lv(b.a,b.b))
q=o
s=1
break
case 8:a0=b2.di(A.iL(b4))
q=A.lv(a0.a,a0.b)
s=1
break
case 9:p=b2.lb(b4==null?null:A.iL(b4))
o=p.a
q=A.cE(["rgba",o.c,"width",o.a,"height",o.b,"values",p.b,"warmths",p.c],t.N,t.X)
s=1
break
case 10:b4.toString
t.f.a(b4)
a1=b4.k(0,"key")
p=b4.k(0,"rgb")
p.toString
p=B.b.h(A.by(p))
o=a1==null?null:A.iL(a1)
if(o==null){o=b2.Q
i=o==null?A.G(B.a0):o}else i=b2.di(o).a
a2=A.wx(i,p)
p=A.lv(a2.a,0)
o=A.px(t.N,t.X)
o.c3(0,p)
o.i(0,"histogram",a2.b)
q=o
s=1
break
case 11:j=new A.cY()
$.ep()
j.cq()
b4.toString
t.f.a(b4)
a3=t.eO.a(b4.k(0,"study"))
a4=t.lH.a(b4.k(0,"grid"))
p=A.iL(b4.k(0,"key"))
o=A.cg(b4.k(0,"photo"))
a=A.cg(b4.k(0,"lines"))
if(a3==null)a5=null
else{a5=A.cg(a3.k(0,"warmth"))
a6=A.pZ(a3.k(0,"splits"))
a5=new A.fW(A.pZ(a3.k(0,"colors")),a6,a5)}if(a4==null)a6=null
else{a6=J.aF(a4)
a7=a6.k(a4,0)
a7.toString
a7=B.b.h(A.by(a7))
a8=a6.k(a4,1)
a8.toString
a8=B.b.h(A.by(a8))
a9=a6.k(a4,2)
a9.toString
a6=new A.hy(a7,a8,B.b.h(A.by(a9)),A.cg(a6.k(a4,3)))}s=14
return A.bm(b2.cG(new A.jB(p,o,a,a5,a6,A.cg(b4.k(0,"darkGrid")))),$async$h7)
case 14:b0=b6
b1=A
s=15
return A.bm(A.j5(b0),$async$h7)
case 15:q=b1.cE(["png",b6,"width",b0.a,"height",b0.b,"ms",j.gcF()],t.N,t.K)
s=1
break
case 12:throw A.h(A.av("Unknown engine op "+b3,null))
case 4:case 1:return A.da(q,r)}})
return A.db($async$h7,r)},
nz:function nz(a){this.a=a},
nt:function nt(a,b){this.a=a
this.b=b},
nr:function nr(a,b){this.a=a
this.b=b},
ns:function ns(a,b){this.a=a
this.b=b},
rS(a,b){var s,r,q,p,o=A.e3(a,b),n=o.c
for(s=n.length,r=n.$flags|0,q=0;q<s;q+=4){r&2&&A.b(n)
n[q]=243
p=q+1
if(!(p<s))return A.a(n,p)
n[p]=240
p=q+2
if(!(p<s))return A.a(n,p)
n[p]=232
p=q+3
if(!(p<s))return A.a(n,p)
n[p]=255}return o},
rR(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a4.a,c=d/a5.a,b=a4.b,a=b/a5.b,a0=a5.r,a1=a0.a,a2=t.n,a3=A.i([],a2)
for(s=a0.b,r=s.length,q=a1.length,p=0;o=p+1,o<r;p=o){if(!(p<r))return A.a(s,p)
n=s[p]
m=s[o]
for(l=n;l<m;l=k){k=l+1
j=k<m?k:n
i=l*2
if(!(i>=0&&i<q))return A.a(a1,i)
h=a1[i];++i
if(!(i<q))return A.a(a1,i)
i=a1[i]
g=j*2
if(!(g>=0&&g<q))return A.a(a1,g)
f=a1[g];++g
if(!(g<q))return A.a(a1,g)
B.c.c3(a3,A.i([h*c,i*a,f*c,a1[g]*a],a2))}}e=Math.max(1,Math.max(d,b)*0.0016)
if(a6){A.ha(a4,a3,e*2.2,0,0.55)
A.ha(a4,a3,e,16777215,0.95)}else A.ha(a4,a3,e,2829099,1)},
rQ(a,b,c){var s=a.a,r=a.b,q=A.wY(s,r,b),p=new A.jr(r,s),o=Math.max(s,r),n=c?1052688:16053492,m=c?16777215:0,l=q.a,k=p.$2(l[2],l[3]),j=p.$2(l[0],l[1]),i=Math.max(1.5,o*0.0012)
A.ha(a,j,Math.max(1,o*0.0007),n,0.5)
A.ha(a,k,i*2.5,m,0.35)
A.ha(a,k,i,n,1)},
jy:function jy(a,b){this.c=a
this.d=b},
jq:function jq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.e=_.d=0
_.w=_.r=_.f=null
_.x=c
_.y=d
_.Q=_.z=null
_.as=e
_.at=0},
jx:function jx(a){this.a=a},
jr:function jr(a,b){this.a=a
this.b=b},
jw:function jw(a,b){this.a=a
this.b=b},
js:function js(a){this.a=a},
jt:function jt(a,b){this.a=a
this.b=b},
ju:function ju(a,b){this.a=a
this.b=b},
jv:function jv(a,b,c){this.a=a
this.b=b
this.c=c},
cz:function cz(){},
hj:function hj(a){this.b=a},
jB:function jB(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ez:function ez(a){this.a=a},
wt(b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=b3.a,a7=Math.max(1,B.b.a8(a6.gbK()/500)),a8=A.qV(b3.b,0,a7,1.6,0.03,Math.max(1,0.03*a6.gbK())),a9=a8.a,b0=a8.b,b1=a9*b0,b2=new A.fU()
b2.dH(7)
s=A.wd(a8,b4,b2)
r=s.a
q=s.b
p=A.vt(a9,b0,b4,b2)
o=p.a
n=p.b
m=Math.max(1,0.015*a6.gbK())
l=A.qV(a6,0,a7,1.6,0,m)
k=new Float32Array(b1)
j=new Float32Array(b1)
i=new Float32Array(b1)
for(h=l.e,g=h.length,f=r.length,e=o.length,d=q.length,c=n.length,b=0;b<b1;++b){if(!(b<g))return A.a(h,b)
a=A.qs(h[b],0.25,0.6)
if(!(b<b1))return A.a(i,b)
i[b]=a
a0=Math.sqrt(a)
a1=Math.sqrt(1-a)
if(!(b<f))return A.a(r,b)
a2=r[b]
if(!(b<e))return A.a(o,b)
a3=o[b]
if(!(b<b1))return A.a(k,b)
k[b]=a0*a2+a1*a3
if(!(b<d))return A.a(q,b)
a3=q[b]
if(!(b<c))return A.a(n,b)
a2=n[b]
if(!(b<b1))return A.a(j,b)
j[b]=a0*a3+a1*a2}A.mp(k,j)
a4=A.wH(a6,Math.max(1,0.001*a6.gbK()),1.6,m)
if(a7>1)a4=A.mP(a4,a6.a,a6.b,a9,b0,a7)
for(a6=a4.length,h=a4.$flags|0,b=0;b<b1;++b){if(!(b<a6))return A.a(a4,b)
a5=A.qs(a4[b],0.015,0.045)
a=i[b]
h&2&&A.b(a4)
a4[b]=0+a5*(a*2.2+(1-a)*0.15)}return new A.ji(a9,b0,k,j,a4)},
wd(e0,e1,e2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=e0.a,d0=e0.b,d1=c9*d0,d2=Math.max(c9,d0),d3=A.or(c9,d0,Math.max(1,0.003*d2),e2,!1),d4=d3.a,d5=d3.b,d6=e0.c,d7=e0.d,d8=new Float32Array(d1),d9=new Float32Array(d1)
for(s=d4.length,r=d6.length,q=d5.length,p=d7.length,o=0;o<d1;++o){if(!(o<s))return A.a(d4,o)
n=d4[o]
if(!(o<r))return A.a(d6,o)
m=d6[o]
if(!(o<q))return A.a(d5,o)
l=d5[o]
if(!(o<p))return A.a(d7,o)
k=n*m+l*d7[o]
d8[o]=k*m
d9[o]=k*d7[o]}j=Math.max(1,B.b.a8(0.2*d2/2))
i=3*j
h=new Int32Array(i)
g=new Int32Array(i)
s=2*i
r=s+1
f=new Int32Array(r)
s+=2
e=new Float64Array(s)
d=new Float64Array(s)
c=new Float64Array(s)
b=new Float64Array(s)
a=new Float32Array(d1)
a0=new Float32Array(d1)
a1=new Int32Array(d1)
a2=new A.my(c9,d6,d7,i,d0)
q=j+1
a3=1/q
for(o=0;o<d1;++o){if(a1[o]>0)continue
a4=a2.$3(o,-1,h)
a5=a2.$3(o,1,g)
a6=a4<0
a7=a5<0
if(a6)a4=-a4-1
if(a7)a5=-a5-1
p=a4+1
a8=p+a5
for(n=a4-1,a9=0;a9<a4;++a9){m=n-a9
if(!(a9<i))return A.a(h,a9)
l=h[a9]
if(!(m>=0&&m<r))return A.a(f,m)
f[m]=l}if(!(a4>=0&&a4<r))return A.a(f,a4)
f[a4]=o
for(a9=0;a9<a5;++a9){n=p+a9
if(!(a9<i))return A.a(g,a9)
m=g[a9]
if(!(n>=0&&n<r))return A.a(f,n)
f[n]=m}for(b0=0;b0<a8;b0=p){if(!(b0<r))return A.a(f,b0)
b1=f[b0]
p=b0+1
n=e[b0]
if(!(b1>=0&&b1<d1))return A.a(d8,b1)
e[p]=n+d8[b1]
n=d[b0]
if(!(b1<d1))return A.a(d9,b1)
d[p]=n+d9[b1]
c[p]=c[b0]+b0*d8[b1]
b[p]=b[b0]+b0*d9[b1]}b2=a6?0:Math.min(j,a4)
b3=a8-1
b4=a7?b3:Math.max(b3-j,a4)
for(k=b2;k<=b4;k=b7){b5=k-j
if(b5<0)b5=0
b6=k+j
if(b6>b3)b6=b3
b7=k+1
if(!(b7>=0&&b7<s))return A.a(e,b7)
p=e[b7]
if(!(b5<s))return A.a(e,b5)
b8=p-e[b5]
if(!(b7<s))return A.a(d,b7)
n=d[b7]
b9=n-d[b5]
if(!(b7<s))return A.a(c,b7)
m=c[b7]
l=c[b5]
if(!(b7<s))return A.a(b,b7)
c0=b[b7]
c1=b[b5]
c2=b6+1
if(!(c2>=0&&c2<s))return A.a(e,c2)
c3=e[c2]-p
c4=d[c2]-n
n=c[c2]
c2=b[c2]
if(!(k>=0&&k<r))return A.a(f,k)
b1=f[k]
if(!(b1>=0&&b1<d1))return A.a(a,b1)
a[b1]=a[b1]+(q*(b8+c3)+(m-l-k*b8)-(n-m-k*c3))*a3
if(!(b1<d1))return A.a(a0,b1)
a0[b1]=a0[b1]+(q*(b9+c4)+(c0-c1-k*b9)-(c2-c0-k*c4))*a3
if(!(b1<d1))return A.a(a1,b1)
a1[b1]=a1[b1]+1}}c5=new Float32Array(d1)
c6=new Float32Array(d1)
for(o=0;o<d1;++o){c5[o]=a[o]/a1[o]
c6[o]=a0[o]/a1[o]}A.mp(c5,c6)
for(o=0;o<d1;++o){s=c5[o]
r=c6[o]
c7=Math.sqrt(s*s+r*r)
if(c7<1e-12)continue
c8=Math.pow(c7,0.30000000000000004)
c5[o]=c5[o]*c8
c6[o]=c6[o]*c8}A.mp(c5,c6)
return new A.K(c5,c6)},
vt(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=Math.max(2,0.012*Math.max(a,a0)),d=A.or(a,a0,e,a2,!0),c=d.a,b=d.b
for(s=c.length,r=b.length,q=1;q<=2;++q){p=1/B.a.P(1,q)
o=A.or(a,a0,e*p,a2,!0)
n=o.a
m=o.b
for(l=n.length,k=c.$flags|0,j=m.length,i=b.$flags|0,h=0;h<s;++h){g=c[h]
if(!(h<l))return A.a(n,h)
f=n[h]
k&2&&A.b(c)
c[h]=g+p*f
if(!(h<r))return A.a(b,h)
f=b[h]
if(!(h<j))return A.a(m,h)
g=m[h]
i&2&&A.b(b)
b[h]=f+p*g}}A.mp(c,b)
return new A.K(c,b)},
or(b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=B.b.ab(b2/b4)+2,a9=a8*(B.b.ab(b3/b4)+2),b0=new Float32Array(a9),b1=new Float32Array(a9)
for(s=0;s<a9;++s){r=b5.ds()
if(!(s<a9))return A.a(b0,s)
b0[s]=r*2-1
r=b5.ds()
if(!(s<a9))return A.a(b1,s)
b1[s]=r*2-1}r=b2*b3
q=new Float32Array(r)
p=new Float32Array(r)
for(o=0;o<b3;++o){n=o/b4
m=B.b.a2(n)
l=n-m
if(b6)l=l*l*(3-2*l)
for(k=m*a8,j=1-l,i=o*b2,h=0;h<b2;++h){g=h/b4
f=B.b.a2(g)
e=g-f
if(b6)e=e*e*(3-2*e)
d=k+f
c=d+1
b=d+a8
a=b+1
a0=1-e
a1=a0*j
a2=e*j
a3=a0*l
a4=e*l
s=i+h
if(!(d>=0&&d<a9))return A.a(b0,d)
a0=b0[d]
if(!(c>=0&&c<a9))return A.a(b0,c)
a5=b0[c]
if(!(b>=0&&b<a9))return A.a(b0,b)
a6=b0[b]
if(!(a>=0&&a<a9))return A.a(b0,a)
a7=b0[a]
if(!(s>=0&&s<r))return A.a(q,s)
q[s]=a1*a0+a2*a5+a3*a6+a4*a7
if(!(d<a9))return A.a(b1,d)
a7=b1[d]
a6=b1[c]
a5=b1[b]
a0=b1[a]
if(!(s<r))return A.a(p,s)
p[s]=a1*a7+a2*a6+a3*a5+a4*a0}}return new A.K(q,p)},
qs(a,b,c){var s
if(a<=b)return 0
if(a>=c)return 1
s=(a-b)/(c-b)
return s*s*(3-2*s)},
mp(a,b){var s,r,q,p,o,n,m,l
for(s=a.length,r=b.length,q=0,p=0;p<s;++p){o=a[p]
if(!(p<r))return A.a(b,p)
n=b[p]
q+=o*o+n*n}m=Math.sqrt(q/s)
if(m===0)return
for(o=a.$flags|0,n=b.$flags|0,p=0;p<s;++p){l=a[p]
o&2&&A.b(a)
a[p]=l/m
if(!(p<r))return A.a(b,p)
l=b[p]
n&2&&A.b(b)
b[p]=l/m}},
xh(h2,h3,h4,h5,h6,h7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3=null,g4=A.qP(h2,h5,h6),g5=h2.c,g6=Math.max(h5,h6),g7=g6/Math.max(h2.a,h2.b),g8=h3==null,g9=g8?0:0.012*Math.pow(0.5,B.b.H(h2.z,0,1))*g6,h0=A.vC(h2),h1=new Float64Array(g5)
for(s=h0.length,r=h2.f,q=r.length,p=0;p<g5;++p){if(!(p<s))return A.a(h0,p)
o=h0[p]
if(o>0){if(!(p<q))return A.a(r,p)
n=2*r[p]/o}else n=1e9
if(!(p<g5))return A.a(h1,p)
h1[p]=0.8*n*g7}m=new A.no(h2.d,0.12,h4)
s=h7==null
l=s?g3:h7.e.length
if(l==null)l=0
r=h5*h6
k=new Uint16Array(r)
j=s?g3:h7.a
if(j==null)j=1
i=s?g3:h7.b
if(i==null)i=1
h=j/h5
g=i/h6
f=new A.nm(h,g,j,i,h7)
e=g8?g3:h3.a
if(e==null)e=1
d=g8?g3:h3.b
if(d==null)d=1
c=g8?g3:h3.c
if(c==null)c=new Float32Array(1)
b=g8?g3:h3.d
if(b==null)b=new Float32Array(1)
a=g8?g3:h3.e
if(a==null)a=new Float32Array(1)
a0=e/h5
a1=d/h6
a2=new A.np(h5-1,h6-1,g4,h5)
a3=new Int32Array(h5)
a4=new Int32Array(h5)
a5=new Float64Array(h5)
a6=new Int32Array(h5)
for(g8=j-1,a7=e-1,a8=0;a8<h5;++a8){q=a8+0.5
a9=q*a0-0.5
if(a9<0)a9=0
if(a9>a7)a9=a7
b0=B.b.a2(a9)
if(!(a8<h5))return A.a(a3,a8)
a3[a8]=b0
o=b0+1
o=o<e?o:b0
if(!(a8<h5))return A.a(a4,a8)
a4[a8]=o
if(!(a8<h5))return A.a(a5,a8)
a5[a8]=a9-b0
q=B.a.H(B.b.h(q*h),0,g8)
if(!(a8<h5))return A.a(a6,a8)
a6[a8]=q}b1=s?g3:h7.c
b2=s?g3:h7.d
for(g8=!s,s=c.length,q=b.length,o=g4.length,b3=a.length,b4=g9===0,b5=b1!=null,b6=i-1,b7=d-1,b8=0;b8<h6;++b8){b9=b8+0.5
c0=b9*a1-0.5
if(c0<0)c0=0
if(c0>b7)c0=b7
c1=B.b.a2(c0)
c2=c0-c1
c3=c1+1
c3=c3<d?c3:c1
c4=B.a.H(B.b.h(b9*g),0,b6)*j
for(b9=b8*h5,c5=1-c2,c6=c1*e,c7=c3*e,a8=0;a8<h5;++a8){b0=a3[a8]
c8=a4[a8]
c9=a5[a8]
d0=c6+b0
d1=c6+c8
d2=c7+b0
d3=c7+c8
d4=b9+a8
if(!(d4>=0&&d4<o))return A.a(g4,d4)
d5=g4[d4]
if(!(d0>=0&&d0<b3))return A.a(a,d0)
d6=a[d0]
d7=1-c9
if(!(d1>=0&&d1<b3))return A.a(a,d1)
d8=a[d1]
if(!(d2>=0&&d2<b3))return A.a(a,d2)
d9=a[d2]
if(!(d3>=0&&d3<b3))return A.a(a,d3)
e0=(d6*d7+d8*c9)*c5+(d9*d7+a[d3]*c9)*c2
if(e0===0||b4){e1=l+d5
if(b5){d6=c4+a6[a8]
if(!(d6>=0&&d6<b1.length))return A.a(b1,d6)
e2=b1[d6]
if(e2>=0){if(!(e2<b2.length))return A.a(b2,e2)
d6=b2[e2]===d5}else d6=!1
if(d6)e1=e2}if(!(d4<r))return A.a(k,d4)
k[d4]=e1
continue}if(!(d0<s))return A.a(c,d0)
d6=c[d0]
if(!(d1<s))return A.a(c,d1)
d8=c[d1]
if(!(d2<s))return A.a(c,d2)
d9=c[d2]
if(!(d3<s))return A.a(c,d3)
e3=c[d3]
if(!(d0<q))return A.a(b,d0)
e4=b[d0]
if(!(d1<q))return A.a(b,d1)
e5=b[d1]
if(!(d2<q))return A.a(b,d2)
e6=b[d2]
if(!(d3<q))return A.a(b,d3)
e7=((d6*d7+d8*c9)*c5+(d9*d7+e3*c9)*c2)*g9*e0
e8=((e4*d7+e5*c9)*c5+(e6*d7+b[d3]*c9)*c2)*g9*e0
p=a2.$2(a8+e7,b8+e8)
e9=1
if(p!==d5){f0=Math.sqrt(e7*e7+e8*e8)
if(!(d5<g5))return A.a(h1,d5)
f1=0
for(;;++f1){f2=h1[d5]
if(!(p>=0&&p<g5))return A.a(h1,p)
f3=h1[p]
d6=m.$2(d5,p)
if(typeof d6!=="number")return A.a8(d6)
f4=f0*d6
f5=f2<f3?f2:f3
if(f4>f5)f4=f5
if(f0*e9<=f4+1e-9)break
if(f1===3){p=d5
e9=0
break}e9=f4/f0
p=a2.$2(a8+e7*e9,b8+e8*e9)
if(p===d5)break}}e1=l+p
if(g8){e2=f.$3(a8+e7*e9,b8+e8*e9,p)
if(e2<0)e2=f.$3(a8,b8,p)
if(e2>=0)e1=e2}if(!(d4<r))return A.a(k,d4)
k[d4]=e1}}f6=g9>0?h4.l7(h2.z)*g6:0
A.w1(k,h5,h6,B.b.a8(f6*f6),new A.nn(new A.nq(h7,f,l),g4,h5))
f7=A.e3(h5,h6)
f8=f7.c
f9=h2.e
for(g6=f8.$flags|0,g8=f9.length,b8=0;b8<h6;++b8)for(s=b8*h5,a8=0;a8<h5;++a8){g0=s+a8
if(!(g0>=0&&g0<r))return A.a(k,g0)
e1=k[g0]
if(e1<l){q=h7.e
if(!(e1<q.length))return A.a(q,e1)
g1=q[e1]}else{q=e1-l
if(!(q>=0&&q<g8))return A.a(f9,q)
g1=f9[q]}g2=g0*4
q=B.a.j(g1,16)
g6&2&&A.b(f8)
o=f8.length
if(!(g2>=0&&g2<o))return A.a(f8,g2)
f8[g2]=q&255
q=g2+1
b3=B.a.j(g1,8)
if(!(q<o))return A.a(f8,q)
f8[q]=b3&255
b3=g2+2
if(!(b3<o))return A.a(f8,b3)
f8[b3]=g1&255
b3=g2+3
if(!(b3<o))return A.a(f8,b3)
f8[b3]=255}return f7},
w1(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2={}
if(a6<=1)return
s=a4*a5
r=new Int32Array(s)
a2.a=new Int32Array(1024)
q=new A.mr(a2)
for(p=a3.length,o=0,n=0;n<a5;++n)for(m=n>0,l=n*a4,k=0;k<a4;++k){j=l+k
if(!(j>=0&&j<p))return A.a(a3,j)
i=a3[j]
if(k>0){h=j-1
if(!(h>=0))return A.a(a3,h)
g=a3[h]===i}else g=!1
if(m){h=j-a4
if(!(h>=0))return A.a(a3,h)
f=a3[h]===i}else f=!1
if(g){h=j-1
if(!(h>=0&&h<s))return A.a(r,h)
e=r[h]
if(!(j<s))return A.a(r,j)
r[j]=e
if(f){d=q.$1(r[h])
h=j-a4
if(!(h>=0&&h<s))return A.a(r,h)
c=q.$1(r[h])
if(d<c){h=a2.a
h.$flags&2&&A.b(h)
if(c>>>0!==c||c>=h.length)return A.a(h,c)
h[c]=d}else if(c<d){h=a2.a
h.$flags&2&&A.b(h)
if(d>>>0!==d||d>=h.length)return A.a(h,d)
h[d]=c}}}else if(f){h=j-a4
if(!(h>=0&&h<s))return A.a(r,h)
h=r[h]
if(!(j<s))return A.a(r,j)
r[j]=h}else{h=a2.a
if(o===h.length){b=new Int32Array(o*2)
B.l.ap(b,0,o,h)
a2.a=b
h=b}h.$flags&2&&A.b(h)
if(!(o>=0&&o<h.length))return A.a(h,o)
h[o]=o
a=o+1
if(!(j<s))return A.a(r,j)
r[j]=o
o=a}}a0=new Int32Array(o)
for(j=0;j<s;++j){a1=q.$1(r[j])
if(!(j<s))return A.a(r,j)
r[j]=a1
if(a1>>>0!==a1||a1>=o)return A.a(a0,a1)
p=a0[a1]
if(a1>>>0!==a1||a1>=o)return A.a(a0,a1)
a0[a1]=p+1}for(j=0;j<s;++j){p=r[j]
if(!(p>=0&&p<o))return A.a(a0,p)
if(a0[p]<a6)B.q.i(a3,j,a7.$2(B.a.V(j,a4),B.a.a1(j,a4)))}},
vC(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a7.r,a3=a2.a,a4=new A.mh(a7.a,a7.b),a5=a7.c,a6=new Float64Array(a5)
for(s=a2.c,r=s.length,q=a3.length,p=a2.b,o=p.length,n=0;n<a5;n=l){if(!(n<r))return A.a(s,n)
m=s[n]
l=n+1
if(!(l<r))return A.a(s,l)
k=0
while(m<s[l]){if(!(m>=0&&m<o))return A.a(p,m)
j=p[m];++m
if(!(m<o))return A.a(p,m)
i=p[m]
for(h=j;h<i;h=g){g=h+1
f=g<i?g:j
e=h*2
if(!(e>=0&&e<q))return A.a(a3,e)
d=a3[e];++e
if(!(e<q))return A.a(a3,e)
c=a3[e]
e=f*2
if(!(e>=0&&e<q))return A.a(a3,e)
b=a3[e];++e
if(!(e<q))return A.a(a3,e)
a=a3[e]
if(a4.$4(d,c,b,a))continue
a0=b-d
a1=a-c
k+=Math.sqrt(a0*a0+a1*a1)}}if(!(n<a5))return A.a(a6,n)
a6[n]=k}return a6},
ji:function ji(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jj:function jj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
my:function my(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
no:function no(a,b,c){this.a=a
this.b=b
this.c=c},
nm:function nm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nq:function nq(a,b,c){this.a=a
this.b=b
this.c=c},
np:function np(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nn:function nn(a,b,c){this.a=a
this.b=b
this.c=c},
mr:function mr(a){this.a=a},
mh:function mh(a,b){this.a=a
this.b=b},
wP(a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=a8.b,a4=a8.d.c,a5=a3.a*a3.b,a6=t.t,a7=[A.i([],a6),A.i([],a6)]
for(a6=a4.length,s=0;s<a5;++s){if(!(s<a6))return A.a(a4,s)
r=a4[s]
if(!(r>=0&&r<2))return A.a(a7,r)
B.c.B(a7[r],s)}q=A.ae(2,0,!1,t.i)
for(a6=a3.c,r=a6.length,p=a3.d,o=p.length,n=a3.e,m=n.length,l=0;l<2;++l){k=a7[l]
j=k.length
if(j===0)continue
for(i=0,h=0,g=0,f=0,e=0;e<j;++e){s=k[e]
if(!(s<r))return A.a(a6,s)
d=a6[s]*b0
i+=d
if(!(s<o))return A.a(p,s)
c=p[s]
h+=c
if(!(s<m))return A.a(n,s)
b=n[s]
g+=b
f+=d*d+c*c+b*b}B.c.i(q,l,j*Math.sqrt(Math.max(0,f/j-(i*i+h*h+g*g)/(j*j))))}a=q[0]+q[1]
a0=new Int32Array(a5)
for(a6=a===0,l=0;l<2;++l){k=a7[l]
if(k.length===0)continue
a1=A.vV(a8,k,Math.max(1,B.b.a8(a9*(a6?0.5:q[l]/a))),b0,b1+l)
for(r=k.length,p=l*256,o=a1.length,a2=0;a2<r;++a2){n=k[a2]
if(!(a2<o))return A.a(a1,a2)
m=a1[a2]
if(!(n<a5))return A.a(a0,n)
a0[n]=p+m}}return a0},
vV(c5,c6,c7,c8,c9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4={}
c4.a=c7
s=c5.b
r=new A.fU()
r.dH(c9)
q=Math.max(1,c6.length/4e4|0)
p=A.i([],t.t)
for(o=0;n=c6.length,o<n;o+=q){if(!(o>=0))return A.a(c6,o)
p.push(c6[o])}m=p.length
l=new Float64Array(m)
k=new Float64Array(m)
j=new Float64Array(m)
for(n=s.c,i=n.length,h=s.d,g=h.length,f=s.e,e=f.length,o=0;o<m;++o){d=p[o]
if(!(d<i))return A.a(n,d)
c=n[d]
if(!(o<m))return A.a(l,o)
l[o]=c*c8
if(!(d<g))return A.a(h,d)
c=h[d]
if(!(o<m))return A.a(k,o)
k[o]=c
if(!(d<e))return A.a(f,d)
c=f[d]
if(!(o<m))return A.a(j,o)
j[o]=c}c7=c4.a=Math.min(c4.a,m)
b=new Float64Array(c7)
a=new Float64Array(c7)
a0=new Float64Array(c7)
a1=new Float64Array(m)
B.k.O(a1,0,m,1/0)
a2=r.lN(m)
for(a3=m-1,a4=0;p=c4.a,a4<p;){if(!(a2>=0&&a2<m))return A.a(l,a2)
c=l[a2]
if(!(a4<c7))return A.a(b,a4)
b[a4]=c
c=k[a2]
if(!(a4<c7))return A.a(a,a4)
a[a4]=c
c=j[a2]
if(!(a4<c7))return A.a(a0,a4)
a0[a4]=c
for(a5=0,o=0;o<m;++o){c=l[o]
if(!(a4<c7))return A.a(b,a4)
a6=c-b[a4]
c=k[o]
if(!(a4<c7))return A.a(a,a4)
a7=c-a[a4]
c=j[o]
if(!(a4<c7))return A.a(a0,a4)
a8=c-a0[a4]
a9=a6*a6+a7*a7+a8*a8
if(a9<a1[o]){if(!(o<m))return A.a(a1,o)
a1[o]=a9}a5+=a1[o]}++a4
if(a4===p)break
b0=r.ds()*a5
o=0
for(;;){if(!(o<m)){a2=a3
break}b0-=a1[o]
if(b0<=0){a2=o
break}++o}}b1=new A.mk(c4,b,a,a0)
b2=new Float64Array(p)
b3=new Float64Array(p)
b4=new Float64Array(p)
b5=new Float64Array(p)
for(b6=0;b6<15;++b6){B.k.O(b2,0,c4.a,0)
B.k.O(b3,0,c4.a,0)
B.k.O(b4,0,c4.a,0)
B.k.O(b5,0,c4.a,0)
for(o=0;o<m;++o){a4=b1.$3(l[o],k[o],j[o])
if(a4>>>0!==a4||a4>=p)return A.a(b2,a4)
c=b2[a4]
b7=l[o]
if(a4>>>0!==a4||a4>=p)return A.a(b2,a4)
b2[a4]=c+b7
if(a4>>>0!==a4||a4>=p)return A.a(b3,a4)
b7=b3[a4]
c=k[o]
if(a4>>>0!==a4||a4>=p)return A.a(b3,a4)
b3[a4]=b7+c
if(a4>>>0!==a4||a4>=p)return A.a(b4,a4)
c=b4[a4]
b7=j[o]
if(a4>>>0!==a4||a4>=p)return A.a(b4,a4)
b4[a4]=c+b7
if(a4>>>0!==a4||a4>=p)return A.a(b5,a4)
b7=b5[a4]
if(a4>>>0!==a4||a4>=p)return A.a(b5,a4)
b5[a4]=b7+1}for(c=c4.a,b8=0,a4=0;a4<c;++a4){if(!(a4<p))return A.a(b5,a4)
b7=b5[a4]
if(b7===0)continue
if(!(a4<p))return A.a(b2,a4)
b9=b2[a4]/b7
if(!(a4<p))return A.a(b3,a4)
c0=b3[a4]/b7
if(!(a4<p))return A.a(b4,a4)
c1=b4[a4]/b7
if(!(a4<c7))return A.a(b,a4)
b7=b[a4]
if(!(a4<c7))return A.a(a,a4)
c2=a[a4]
if(!(a4<c7))return A.a(a0,a4)
b8+=Math.abs(b9-b7)+Math.abs(c0-c2)+Math.abs(c1-a0[a4])
if(!(a4<c7))return A.a(b,a4)
b[a4]=b9
if(!(a4<c7))return A.a(a,a4)
a[a4]=c0
if(!(a4<c7))return A.a(a0,a4)
a0[a4]=c1}if(b8<0.00001)break}p=c6.length
c3=new Int32Array(p)
for(o=0;o<c6.length;++o){d=c6[o]
if(!(d<i))return A.a(n,d)
p=n[d]
if(!(d<g))return A.a(h,d)
c=h[d]
if(!(d<e))return A.a(f,d)
B.l.i(c3,o,b1.$3(p*c8,c,f[d]))}return c3},
mk:function mk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hh:function hh(a,b){this.a=a
this.b=b},
cn:function cn(a,b){this.a=a
this.b=b},
bD:function bD(a,b){this.a=a
this.b=b},
jc:function jc(){},
wO(c1,c2,c3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=c1.a,b7=b6.a,b8=b6.b,b9=b7*b8,c0=c1.c
for(b6=c0.length,s=0,r=0;r<b6;++r)s+=c0[r]
s=Math.max(0.000001,s/b9)
q=new Float64Array(b9)
for(p=0,o=0;o<b9;++o){if(!(o<b6))return A.a(c0,o)
n=Math.pow(0.5+c0[o]/s,1.5)
if(!(o<b9))return A.a(q,o)
q[o]=n
p+=n}m=c2/p
b6=t.n
l=A.i([],b6)
k=A.i([],b6)
j=new A.fU()
j.dH(c3)
i=new A.n6(j)
h=new Float64Array(b9)
for(b6=b7-1,g=0;g<b8;g=e){f=(g&1)===0
for(e=g+1,d=e<b8,c=g*b7,b=g+0.5,a=0;a<b7;++a){a0=f?a:b6-a
o=c+a0
if(!(o>=0&&o<b9))return A.a(q,o)
a1=q[o]*m+h[o]
a2=a1>=0.5?1:0
if(a2>0){a3=i.$0()
if(typeof a3!=="number")return A.a8(a3)
B.c.B(l,a0+0.5+a3)
a3=i.$0()
if(typeof a3!=="number")return A.a8(a3)
B.c.B(k,b+a3)}a4=a1-a2
a5=f?1:-1
a3=a0+a5
a6=a3>=0
if(a6&&a3<b7){a7=o+a5
if(!(a7>=0&&a7<b9))return A.a(h,a7)
a8=h[a7]
if(!(a7<b9))return A.a(h,a7)
h[a7]=a8+a4*7/16}if(d){a7=a0-a5
if(a7>=0&&a7<b7){a7=o+b7-a5
if(!(a7<b9))return A.a(h,a7)
a8=h[a7]
if(!(a7<b9))return A.a(h,a7)
h[a7]=a8+a4*3/16}a7=o+b7
if(!(a7<b9))return A.a(h,a7)
a8=h[a7]
if(!(a7<b9))return A.a(h,a7)
h[a7]=a8+a4*5/16
if(a6&&a3<b7){a3=a7+a5
if(!(a3<b9))return A.a(h,a3)
a6=h[a3]
if(!(a3<b9))return A.a(h,a3)
h[a3]=a6+a4/16}}}}a9=2*Math.sqrt(b9/c2)
b0=new A.n5(l,i,k)
for(a0=0;a0<=b7;a0+=a9){b0.$2(a0,0)
b0.$2(a0,b8)}for(g=a9;g<b8;g+=a9){b0.$2(0,g)
b0.$2(b7,g)}b0.$2(b7,0)
b0.$2(b7,b8)
b1=A.wG(new Float64Array(A.q(l)),new Float64Array(A.q(k)))
b2=new Int32Array(b9)
B.l.O(b2,0,b9,-1)
for(b6=b1.length,d=b6/3|0,b3=0;b3<d;++b3){c=3*b3
if(!(c<b6))return A.a(b1,c)
b=b1[c]
a3=l.length
if(!(b>=0&&b<a3))return A.a(l,b)
a6=l[b]
a7=k.length
if(!(b<a7))return A.a(k,b)
b=k[b]
a8=c+1
if(!(a8<b6))return A.a(b1,a8)
a8=b1[a8]
if(!(a8>=0&&a8<a3))return A.a(l,a8)
b4=l[a8]
if(!(a8<a7))return A.a(k,a8)
a8=k[a8]
c+=2
if(!(c<b6))return A.a(b1,c)
c=b1[c]
if(!(c>=0&&c<a3))return A.a(l,c)
a3=l[c]
if(!(c<a7))return A.a(k,c)
A.vw(b2,b7,b8,b3,a6,b,b4,a8,a3,k[c])}A.vx(b2,b7,b8)
b5=new Int32Array(b9)
return new A.K(b5,A.j3(b2,b7,b8,b5))},
vw(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=Math.max(0,B.b.a2(Math.min(a7,Math.min(a9,b1)))),c=Math.min(a4-1,B.b.ab(Math.max(a7,Math.max(a9,b1)))),b=Math.max(0,B.b.a2(Math.min(a8,Math.min(b0,b2)))),a=Math.min(a5-1,B.b.ab(Math.max(a8,Math.max(b0,b2)))),a0=a9-a7,a1=b0-a8,a2=a0*(b2-a8)-a1*(b1-a7)
if(Math.abs(a2)<1e-12)return
s=a2>0?1:-1
for(r=b1-a9,q=b2-b0,p=a7-b1,o=a8-b2,n=a3.$flags|0,m=b;m<=a;++m){l=m+0.5
for(k=a0*(l-a8),j=r*(l-b0),i=p*(l-b2),h=m*a4,g=d;g<=c;++g){f=g+0.5
if((k-a1*(f-a7))*s>=0&&(j-q*(f-a9))*s>=0&&(i-o*(f-b1))*s>=0){e=h+g
n&2&&A.b(a3)
if(!(e>=0&&e<a3.length))return A.a(a3,e)
a3[e]=a6}}}},
vx(a,b,c){var s,r,q,p,o,n,m,l={},k=a.length,j=new Int32Array(k)
l.a=0
for(s=0;s<k;++s)if(a[s]>=0){r=l.a++
if(!(r<k))return A.a(j,r)
j[r]=s}for(r=b-1,q=0;q<l.a;q=p){p=q+1
if(!(q<k))return A.a(j,q)
s=j[q]
o=B.a.V(s,b)
n=new A.mg(l,a,s,j)
if(o>0)n.$1(s-1)
if(o<r)n.$1(s+1)
if(s>=b)n.$1(s-b)
m=s+b
if(m<k)n.$1(m)}},
wG(c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8={},b9=c0.length
for(s=c1.length,r=1/0,q=1/0,p=-1/0,o=-1/0,n=0;n<b9;++n){m=c0[n]
r=Math.min(r,m)
p=Math.max(p,m)
if(!(n<s))return A.a(c1,n)
m=c1[n]
q=Math.min(q,m)
o=Math.max(o,m)}l=Math.max(p-r,o-q)*20+1
k=(r+p)/2
j=(q+o)/2
s=t.i
m=A.w(c0,s)
m.push(k-l)
m.push(k)
m.push(k+l)
s=A.w(c1,s)
i=j-l
s.push(i)
s.push(j+l)
s.push(i)
i=t.t
h=A.i([],i)
g=A.i([],i)
f=A.i([],i)
e=t.n
d=A.i([],e)
c=A.i([],e)
b=A.i([],e)
a=A.i([],t.df)
a0=new A.mZ(m,s,h,g,f,d,c,b,a)
a0.$3(b9,b9+1,b9+2)
b8.a=A.i([0],i)
e=t.p
a1=J.aQ(b9,e)
for(n=0;n<b9;++n)a1[n]=n
B.c.bV(a1,new A.n_(s,m))
a2=A.F(e,e)
a3=A.F(e,e)
for(e=a1.length,a4=0;a4<a1.length;a1.length===e||(0,A.P)(a1),++a4){a5=a1[a4]
if(!(a5<m.length))return A.a(m,a5)
a6=m[a5]
if(!(a5<s.length))return A.a(s,a5)
a7=s[a5]
a8=A.i([],i)
a9=A.i([],i)
for(b0=b8.a,b1=b0.length,b2=0;b2<b0.length;b0.length===b1||(0,A.P)(b0),++b2){b3=b0[b2]
if(!(b3>=0&&b3<d.length))return A.a(d,b3)
b4=a6-d[b3]
if(!(b3<c.length))return A.a(c,b3)
b5=a7-c[b3]
if(!(b3<b.length))return A.a(b,b3)
if(b4*b4+b5*b5<b[b3]*1.000000000001)B.c.B(a8,b3)
else B.c.B(a9,b3)}b8.a=a9
a2.aR(0)
a3.aR(0)
b6=new A.n1(b9,a2,a3)
for(b0=a8.length,b2=0;b2<a8.length;a8.length===b0||(0,A.P)(a8),++b2){b3=a8[b2]
B.c.i(a,b3,!1)
if(!(b3>=0&&b3<h.length))return A.a(h,b3)
b1=h[b3]
if(!(b3<g.length))return A.a(g,b3)
b6.$2(b1,g[b3])
if(!(b3<g.length))return A.a(g,b3)
b1=g[b3]
if(!(b3<f.length))return A.a(f,b3)
b6.$2(b1,f[b3])
if(!(b3<f.length))return A.a(f,b3)
b1=f[b3]
if(!(b3<h.length))return A.a(h,b3)
b6.$2(b1,h[b3])}a2.b5(0,new A.n0(b8,a3,a0,b9,a5,a))}b7=A.i([],i)
for(b3=0;b3<a.length;++b3){if(!a[b3])continue
if(!(b3<h.length))return A.a(h,b3)
s=h[b3]
m=!0
if(s<b9){if(!(b3<g.length))return A.a(g,b3)
if(g[b3]<b9){if(!(b3<f.length))return A.a(f,b3)
m=f[b3]>=b9}}if(m)continue
B.c.B(b7,s)
if(!(b3<g.length))return A.a(g,b3)
B.c.B(b7,g[b3])
if(!(b3<f.length))return A.a(f,b3)
B.c.B(b7,f[b3])}return new Int32Array(A.q(b7))},
n6:function n6(a){this.a=a},
n5:function n5(a,b,c){this.a=a
this.b=b
this.c=c},
mg:function mg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mZ:function mZ(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
n_:function n_(a,b){this.a=a
this.b=b},
n1:function n1(a,b,c){this.a=a
this.b=b
this.c=c},
n0:function n0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
xb(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new Float64Array(256)
for(s=a.length,r=0;r<s;++r){q=B.a.H(B.b.a8(a[r]*255),0,255)
if(!(q>=0&&q<256))return A.a(d,q)
p=d[q]
if(!(q<256))return A.a(d,q)
d[q]=p+1}for(o=0,n=0;n<256;++n)o+=n*d[n]
m=new Float64Array(256)
for(l=0,k=0,j=-1,n=0;n<256;++n){q=d[n]
l+=q
k+=n*q
i=s-l
if(l===0||i===0)continue
q=k/l-(o-k)/i
if(!(n<256))return A.a(m,n)
m[n]=l*i*q*q
h=m[n]
if(h>j)j=h}s=j*0.999999999
g=0
for(;;){if(!(g<256))return A.a(m,g)
if(!(m[g]<s))break;++g}f=g
for(;;){e=f+1
if(!(e<256&&m[e]>=s))break
f=e}return 0+((g+f)/2+0.5)/255},
wz(a){var s,r,q,p,o=a.a,n=a.b,m=o*n,l=A.df(a.c,o,n,0.006*a.gbK()),k=A.xb(l),j=new Int32Array(m)
for(s=l.length,r=0;r<m;++r){if(!(r<s))return A.a(l,r)
q=l[r]>=k?1:0
if(!(r<m))return A.a(j,r)
j[r]=q}A.vf(j,o,n,B.b.a8(0.002*m))
p=new Uint8Array(m)
for(r=0;r<m;++r){s=j[r]
if(!(r<m))return A.a(p,r)
p[r]=s}return new A.jH(p)},
vf(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(d<=1)return
s=a.length
r=new Int32Array(s)
q=A.j3(a,b,c,r)
p=new Int32Array(q)
for(o=0;o<s;++o){n=r[o]
if(!(n>=0&&n<q))return A.a(p,n)
m=p[n]
if(!(n<q))return A.a(p,n)
p[n]=m+1}for(m=a.$flags|0,l=0;l<s;++l){k=r[l]
if(!(k>=0&&k<q))return A.a(p,k)
if(p[k]<d){k=a[l]
m&2&&A.b(a)
a[l]=1-k}}},
jH:function jH(a){this.c=a},
oX(a,b,c,d,e,f,g,h,i,j){var s,r,q,p,o,n=A.i([],t.t)
for(s=f.length,r=0;r<h;++r){q=r*3
if(!(q<s))return A.a(f,q)
p=f[q]
o=q+1
if(!(o<s))return A.a(f,o)
o=f[o]
q+=2
if(!(q<s))return A.a(f,q)
n.push(A.qL(p,o,f[q]))}return new A.dk(j,e,h,f,new Int32Array(A.q(n)),a,g,d,b,i,c)},
dk:function dk(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k},
oY(a,b,c,d,e,f){return new A.jb(a,b,c,d,e,f,A.F(t.p,t.mO))},
wv(a,b,c){var s,r,q,p,o,n=null
switch(b.a){case 0:s=new A.K(new Int32Array(0),0)
break
case 1:s=A.qT(a.b,10,6000,10,1.6,0)
break
case 2:s=A.wO(a,2400,7)
break
default:s=n}r=s.a
q=n
p=s.b
q=p
o=r
if(b===B.b_)return A.oY(a,b,c,n,0,n)
return A.oY(a,b,c,o,q,A.wu(A.qm(a,o,q),1,6,1.6,1))},
qm(a,b,c){return A.tU(a.b,a.c,b,a.d.c,c)},
xg(a,b){var s,r,q,p,o,n,m,l,k,j=a.c.hv(b),i=a.a
if(a.b===B.b_){s=A.wP(i,B.a.H(B.b.a8(2*Math.sqrt(j)),2,48),1.6,7)
r=i.a
q=s.length
p=new Int32Array(q)
o=A.j3(s,r.a,r.b,p)
n=A.wk(A.qm(i,p,o),6,1.6,j,0.15*q/j)
m=n.a
l=A.qB(o,m,n.b,m.length)
return new A.K(A.qt(p,l.a),l.b)}k=a.f.hb(j)
r=a.d
r.toString
return new A.K(A.qt(r,k.a),k.b)},
qt(a,b){var s,r,q,p=a.length,o=new Int32Array(p)
for(s=b.length,r=0;r<p;++r){q=a[r]
if(!(q>=0&&q<s))return A.a(b,q)
q=b[q]
if(!(r<p))return A.a(o,r)
o[r]=q}return o},
x7(a,b,c,d,e,f,g,h,i){var s,r,q,p,o,n,m,l,k
switch(f.a){case 0:s=a.a.gbK()
s=new A.er((0.01+-0.0075*B.b.H(e,0,1))*s)
break
case 1:s=new A.fe(0.6,2)
break
default:s=null}r=a.a
q=r.a
p=r.b
o=A.xc(c,q,p,d,s)
n=new Int32Array(d)
for(s=c.length,m=0;m<s;++m){l=c[m]
if(!(l>=0&&l<d))return A.a(n,l)
k=n[l]
if(!(l<d))return A.a(n,l)
n[l]=k+1}return A.oX(n,!1,e,f,p,A.xi(c,d,r,g),o,d,!1,q)},
ws(c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=c1.f,c0=c1.c
if(b9==null)return null
s=c2.z
r=b9.hb(c0.hv(s)).b
if(r!==c2.c)return null
q=c1.a.a
p=q.a
o=q.b
n=A.qP(c2,p,o)
m=0.245*Math.pow(0.0653061224489796,B.b.H(s,0,1))*Math.max(p,o)
l=A.wb(c1,n,m,0.25*m*m)
k=l.a
j=l.b
i=j.length
h=new Float64Array(r)
g=r*3
f=new Float64Array(g)
e=new Float64Array(i)
d=i*3
c=new Float64Array(d)
for(b=n.length,a=k.length,a0=q.c,a1=a0.length,a2=q.d,a3=a2.length,a4=q.e,a5=a4.length,a6=0;a6<b;++a6){a7=n[a6]
if(!(a6<a))return A.a(k,a6)
a8=k[a6]
if(!(a6<a1))return A.a(a0,a6)
a9=a0[a6]
if(!(a6<a3))return A.a(a2,a6)
b0=a2[a6]
if(!(a6<a5))return A.a(a4,a6)
b1=a4[a6]
if(!(a7<r))return A.a(h,a7)
b2=h[a7]
if(!(a7<r))return A.a(h,a7)
h[a7]=b2+1
b2=a7*3
if(!(b2<g))return A.a(f,b2)
b3=f[b2]
if(!(b2<g))return A.a(f,b2)
f[b2]=b3+a9
b3=b2+1
if(!(b3<g))return A.a(f,b3)
b4=f[b3]
if(!(b3<g))return A.a(f,b3)
f[b3]=b4+b0
b2+=2
if(!(b2<g))return A.a(f,b2)
b4=f[b2]
if(!(b2<g))return A.a(f,b2)
f[b2]=b4+b1
if(a8<0)continue
if(!(a8<i))return A.a(e,a8)
b2=e[a8]
if(!(a8<i))return A.a(e,a8)
e[a8]=b2+1
b2=a8*3
if(!(b2>=0&&b2<d))return A.a(c,b2)
b3=c[b2]
if(!(b2<d))return A.a(c,b2)
c[b2]=b3+a9
b3=b2+1
if(!(b3<d))return A.a(c,b3)
b4=c[b3]
if(!(b3<d))return A.a(c,b3)
c[b3]=b4+b0
b2+=2
if(!(b2<d))return A.a(c,b2)
b4=c[b2]
if(!(b2<d))return A.a(c,b2)
c[b2]=b4+b1}b5=c2.d
b6=0.3+0.7*B.b.H(s/0.5,0,1)
b7=b6*1.25
b8=new Int32Array(i)
for(g=b5.length,d=c2.e,b=d.length,a8=0;a8<i;++a8){a7=j[a8]
if(e[a8]!==0){if(!(a7>=0&&a7<r))return A.a(h,a7)
a=h[a7]===0}else a=!0
if(a){if(!(a7>=0&&a7<b))return A.a(d,a7)
a=d[a7]
if(!(a8<i))return A.a(b8,a8)
b8[a8]=a
continue}a=new A.mQ(c,a8,e,f,a7,h)
a0=a7*3
if(!(a0>=0&&a0<g))return A.a(b5,a0)
a1=b5[a0]
a2=a.$1(0)
if(typeof a2!=="number")return A.a8(a2)
a3=a0+1
if(!(a3<g))return A.a(b5,a3)
a3=b5[a3]
a4=a.$1(1)
if(typeof a4!=="number")return A.a8(a4)
a0+=2
if(!(a0<g))return A.a(b5,a0)
a0=b5[a0]
a=a.$1(2)
if(typeof a!=="number")return A.a8(a)
a=A.qL(a1+b6*a2,a3+b7*a4,a0+b7*a)
if(!(a8<i))return A.a(b8,a8)
b8[a8]=a}return new A.jj(p,o,A.qM(k,p,o,i,c0.hk(s)*q.gbK(),n,j),j,b8)},
wb(a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a2.a.a,e=f.a,d=f.b,c=e*d,b=a2.hS(Math.max(1,B.b.a8(c/(a4*a4)))),a=b.a,a0=b.b,a1=new Int32Array(c)
for(f=a3.length,s=a.length,r=0;r<c;++r){if(!(r<f))return A.a(a3,r)
q=a3[r]
if(!(r<s))return A.a(a,r)
p=a[r]
if(!(r<c))return A.a(a1,r)
a1[r]=q*a0+p}o=new Int32Array(c)
n=A.j3(a1,e,d,o)
m=new Int32Array(n)
l=new Int32Array(n)
for(r=0;r<c;++r){s=o[r]
if(!(s>=0&&s<n))return A.a(m,s)
q=m[s]
if(!(s<n))return A.a(m,s)
m[s]=q+1
q=o[r]
if(!(r<f))return A.a(a3,r)
s=a3[r]
if(!(q>=0&&q<n))return A.a(l,q)
l[q]=s}k=A.qz(o,n,m,e,d,a5,new A.mx(l))
j=new Int32Array(n)
B.l.O(j,0,n,-1)
i=A.i([],t.t)
h=new Int32Array(c)
for(f=k.length,r=0;r<c;++r){s=o[r]
if(!(s>=0&&s<f))return A.a(k,s)
g=k[s]
if(!(g>=0&&g<n))return A.a(j,g)
if(j[g]<0){s=i.length
if(!(g<n))return A.a(j,g)
j[g]=s
if(!(g<n))return A.a(l,g)
B.c.B(i,l[g])}s=j[g]
if(!(r<c))return A.a(h,r)
h[r]=s}return new A.K(h,new Int32Array(A.q(i)))},
qQ(a,b,c,d){var s,r,q,p=b.x
if(p||b.y){if(p){s=a.w
if(s===$){r=A.wt(a.a,a.c)
a.w!==$&&A.xn()
a.w=r
s=r}p=s}else p=null
q=b.y?A.ws(a,b):null
q=A.xh(b,p,a.c,c,d,q)
p=q}else p=A.xf(b,c,d)
return p},
jb:function jb(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
mQ:function mQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mx:function mx(a){this.a=a},
qr(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=c?l:l+1,j=new Float64Array(k),i=new Float64Array(k)
if(!c){if(0>=l)return A.a(a,0)
j[0]=a[0]
if(0>=b.length)return A.a(b,0)
i[0]=b[0]
s=1}else s=0
for(r=b.length,q=0;p=q+1,p<l;q=p,s=m){if(!(q<l))return A.a(a,q)
o=a[q]
n=a[p]
if(!(s<k))return A.a(j,s)
j[s]=(o+n)/2
m=s+1
if(!(q<r))return A.a(b,q)
n=b[q]
if(!(p<r))return A.a(b,p)
o=b[p]
if(!(s<k))return A.a(i,s)
i[s]=(n+o)/2}if(c){r=j[0]
if(!(s<k))return A.a(j,s)
j[s]=r
i[s]=i[0]}else{o=l-1
if(!(o>=0))return A.a(a,o)
n=a[o]
if(!(s<k))return A.a(j,s)
j[s]=n
if(!(o<r))return A.a(b,o)
o=b[o]
if(!(s<k))return A.a(i,s)
i[s]=o}return new A.K(j,i)},
xc(a,b,c,d,e){var s,r,q,p,o,n,m,l=A.wh(a,b,c),k=l.length,j=A.ae(k,e,!1,t.b3),i=new A.nh(l,b+1,j)
for(s=0;s<l.length;++s)i.$1(s)
for(;;){r=A.vs(l,b)
for(q=r.$ti,p=new A.d5(r,r.r,q.n("d5<1>")),p.c=r.e,q=q.c,o=!1;p.D();){n=p.d
if(n==null)n=q.a(n)
if(n>>>0!==n||n>=k)return A.a(j,n)
m=j[n]
if(m==null)continue
B.c.i(j,n,m.hx())
i.$1(n)
o=!0}if(!o)break}return A.vk(l,d)},
wh(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b+1,g=new A.mB(b,c,a),f=b*(c+1),e=new Uint8Array(f)
for(s=0;s<=c;++s)for(r=s-1,q=s*b,p=0;p<b;++p)if(!J.a0(g.$2(p,r),g.$2(p,s))){o=q+p
if(!(o>=0&&o<f))return A.a(e,o)
e[o]=1}r=h*c
n=new Uint8Array(r)
for(s=0;s<c;++s)for(q=s*h,p=0;p<=b;++p)if(!J.a0(g.$2(p-1,s),g.$2(p,s))){o=q+p
if(!(o>=0&&o<r))return A.a(n,o)
n[o]=1}m=new A.mz(b,e,c,n,h)
l=new A.mA(b,c,m)
k=A.i([],t.bf)
j=new A.mE(h,new A.mD(g),new A.mC(e,b,n,h),l,k,m)
for(s=0;s<=c;++s)for(p=0;p<=b;++p){if(!l.$2(p,s))continue
for(i=0;i<4;++i)if(J.a0(m.$3(p,s,i),1))j.$3(p,s,i)}for(s=0;s<=c;++s)for(q=s*b,p=0;p<b;++p){o=q+p
if(!(o>=0&&o<f))return A.a(e,o)
if(e[o]===1)j.$3(p,s,0)}for(s=0;s<c;++s)for(f=s*h,p=0;p<=b;++p){q=f+p
if(!(q>=0&&q<r))return A.a(n,q)
if(n[q]===1)j.$3(p,s,1)}return k},
qx(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a.length
if(e<=2||d<=0)return new A.K(a,b)
s=new Uint8Array(e)
if(0>=e)return A.a(s,0)
s[0]=1
r=e-1
if(!(r>=0))return A.a(s,r)
s[r]=1
if(c){for(q=b.length,p=0,o=-1,n=1;n<r;++n){m=a[n]-a[0]
if(!(n<q))return A.a(b,n)
l=b[n]-b[0]
k=m*m+l*l
if(k>o){o=k
p=n}}if(!(p>=0&&p<e))return A.a(s,p)
s[p]=1
A.oo(a,b,0,p,d,s)
A.oo(a,b,p,r,d,s)}else A.oo(a,b,0,r,d,s)
for(j=0,i=0;i<e;++i)j+=s[i]
h=new Float64Array(j)
g=new Float64Array(j)
for(r=b.length,n=0,f=0;n<e;++n){if(s[n]===0)continue
q=a[n]
if(!(f<j))return A.a(h,f)
h[f]=q
if(!(n<r))return A.a(b,n)
q=b[n]
if(!(f<j))return A.a(g,f)
g[f]=q;++f}return new A.K(h,g)},
oo(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=A.i([a4,a5],t.t),a1=a6*a6
for(s=a2.length,r=a3.length;q=a0.length,q!==0;){if(0>=q)return A.a(a0,-1)
p=a0.pop()
if(0>=a0.length)return A.a(a0,-1)
o=a0.pop()
if(p-o<2)continue
for(n=o+1,m=a1,l=-1;n<p;++n){if(!(n>=0&&n<s))return A.a(a2,n)
q=a2[n]
if(!(n<r))return A.a(a3,n)
k=a3[n]
if(!(o>=0&&o<s))return A.a(a2,o)
j=a2[o]
if(!(o<r))return A.a(a3,o)
i=a3[o]
if(!(p>=0&&p<s))return A.a(a2,p)
h=a2[p]
if(!(p<r))return A.a(a3,p)
g=h-j
f=a3[p]-i
e=g*g+f*f
d=B.b.H(e===0?0:((q-j)*g+(k-i)*f)/e,0,1)
c=j+d*g-q
b=i+d*f-k
a=c*c+b*b
if(a>m){m=a
l=n}}if(l<0)continue
a7.$flags&2&&A.b(a7)
if(!(l<a7.length))return A.a(a7,l)
a7[l]=1
B.c.B(a0,o)
B.c.B(a0,l)
B.c.B(a0,l)
B.c.B(a0,p)}},
vp(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=a.length
if(i<3)return new A.K(a,b)
s=t.n
r=A.i([],s)
q=A.i([],s)
s=!c
if(s){B.c.B(r,a[0])
if(0>=b.length)return A.a(b,0)
B.c.B(q,b[0])}for(p=b.length,o=0;n=o+1,n<i;o=n){if(!(o<i))return A.a(a,o)
m=a[o]
l=a[n]
if(!(o<p))return A.a(b,o)
k=b[o]
if(!(n<p))return A.a(b,n)
j=b[n]
if(!s||o>0){B.c.B(r,0.75*m+0.25*l)
B.c.B(q,0.75*k+0.25*j)}if(!s||o+2<i){B.c.B(r,0.25*m+0.75*l)
B.c.B(q,0.25*k+0.75*j)}}if(c){B.c.B(r,B.c.gdl(r))
B.c.B(q,B.c.gdl(q))}else{s=i-1
B.c.B(r,a[s])
if(!(s<p))return A.a(b,s)
B.c.B(q,b[s])}return new A.K(new Float64Array(A.q(r)),new Float64Array(A.q(q)))},
vs(c4,c5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=B.b.ab(c5/16)+2,b9=t.p,c0=A.F(b9,t.L),c1=t.t,c2=A.i([],c1),c3=A.i([],c1)
for(s=0;s<c4.length;++s){c1=c4[s]
r=c1.e
r===$&&A.c()
c1=c1.f
c1===$&&A.c()
for(q=r.length,p=c1.length,o=0;n=o+1,n<q;o=n){m=c2.length
B.c.B(c2,s)
B.c.B(c3,o)
if(!(o<q))return A.a(r,o)
l=B.b.a2(Math.min(r[o],r[n])/16)
k=B.b.a2(Math.max(r[o],r[n])/16)
if(!(o<p))return A.a(c1,o)
j=c1[o]
if(!(n<p))return A.a(c1,n)
i=B.b.a2(Math.min(j,c1[n])/16)
h=B.b.a2(Math.max(c1[o],c1[n])/16)
for(g=i;g<=h;)for(++g,j=g*b8,f=l;f<=k;++f)J.nB(c0.dv(j+f+1,new A.me()),m)}}e=A.nP(b9)
for(b9=new A.be(c0,c0.r,c0.e,c0.$ti.n("be<2>"));b9.D();){c1=b9.d
for(r=J.a6(c1),d=0;d<r.gp(c1);d=a){c=r.k(c1,d)
if(!(c>=0&&c<c2.length))return A.a(c2,c)
b=c2[c]
if(!(b<c4.length))return A.a(c4,b)
q=c4[b]
p=q.e
p===$&&A.c()
q=q.f
q===$&&A.c()
if(!(c<c3.length))return A.a(c3,c)
o=c3[c]
for(a=d+1,j=p.length,a0=q.length,a1=o+1,a2=a;a2<r.gp(c1);++a2){a3=r.k(c1,a2)
if(!(a3>=0&&a3<c2.length))return A.a(c2,a3)
a4=c2[a3]
if(!(a3<c3.length))return A.a(c3,a3)
a5=c3[a3]
if(b===a4){if(!(b<c4.length))return A.a(c4,b)
a6=c4[b]
a7=a6.e
a7===$&&A.c()
a8=Math.abs(o-a5)
if(a8<=1)continue
if(a6.d&&a8===a7.length-2)continue}if(!(a4<c4.length))return A.a(c4,a4)
a6=c4[a4]
a7=a6.e
a7===$&&A.c()
a6=a6.f
a6===$&&A.c()
if(!(o<j))return A.a(p,o)
a9=p[o]
if(!(o<a0))return A.a(q,o)
b0=q[o]
if(!(a1<j))return A.a(p,a1)
b1=p[a1]
if(!(a1<a0))return A.a(q,a1)
b2=q[a1]
b3=a7.length
if(!(a5<b3))return A.a(a7,a5)
b4=a7[a5]
b5=a6.length
if(!(a5<b5))return A.a(a6,a5)
b6=a6[a5]
b7=a5+1
if(!(b7<b3))return A.a(a7,b7)
a7=a7[b7]
if(!(b7<b5))return A.a(a6,b7)
if(A.vZ(a9,b0,b1,b2,b4,b6,a7,a6[b7])){e.B(0,b)
e.B(0,a4)}}}}return e},
vZ(a,b,c,d,e,f,g,h){var s=new A.mq(),r=s.$6(e,f,g,h,a,b),q=s.$6(e,f,g,h,c,d),p=s.$6(a,b,c,d,e,f),o=s.$6(a,b,c,d,g,h)
if(!(r>1e-9&&q<-1e-9))s=r<-1e-9&&q>1e-9
else s=!0
if(s)if(!(p>1e-9&&o<-1e-9))s=p<-1e-9&&o>1e-9
else s=!0
else s=!1
return s},
vk(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=J.aQ(a8,t.l3)
for(s=t.p,r=t.L,q=0;q<a8;++q)a6[q]=A.F(s,r)
for(p=0;p<a7.length;++p){o=a7[p]
s=o.b
if(s>=0){if(!(s<a6.length))return A.a(a6,s)
s=a6[s]
r=o.a
n=r.length
if(n===0)A.G(A.aP())
if(0>=n)return A.a(r,0)
J.nB(s.dv(r[0],new A.m9()),p*2)}s=o.c
if(s>=0){if(!(s<a6.length))return A.a(a6,s)
s=a6[s]
r=o.a
n=r.length
if(n===0)A.G(A.aP())
m=n-1
if(!(m>=0))return A.a(r,m)
J.nB(s.dv(r[m],new A.ma()),p*2+1)}}l=A.i([],t.n)
s=t.t
k=A.i([0],s)
j=A.i([0],s)
for(i=0;i<a8;++i){if(!(i<a6.length))return A.a(a6,i)
h=a6[i]
s=A.n(h).n("az<1>")
s=A.w(new A.az(h,s),s.n("f.E"))
r=s.length
g=0
for(;g<s.length;s.length===r||(0,A.P)(s),++g){f=s[g]
n=h.k(0,f)
n.toString
for(m=J.a6(n);m.gej(n);){e=l.length
d=m.cM(n)
for(;;){c=B.a.j(d,1)
if(!(c<a7.length))return A.a(a7,c)
o=a7[c]
b=(d&1)===1
c=o.e
c===$&&A.c()
a=c.length
for(c=a-1,a0=1;a0<a;++a0){a1=b?c-a0:a0
a2=o.e
if(!(a1>=0&&a1<a2.length))return A.a(a2,a1)
B.c.B(l,a2[a1])
a2=o.f
a2===$&&A.c()
if(!(a1<a2.length))return A.a(a2,a1)
B.c.B(l,a2[a1])}c=o.a
if(b){a2=c.length
if(a2===0)A.G(A.aP())
if(0>=a2)return A.a(c,0)
a3=c[0]}else{a2=c.length
if(a2===0)A.G(A.aP())
a4=a2-1
if(!(a4>=0))return A.a(c,a4)
a3=c[a4]}if(a3===f)break
a5=h.k(0,a3)
if(a5==null||J.rB(a5))break
d=J.rC(a5)}c=l.length
if(B.a.K(c-e,2)<3)B.c.sp(l,e)
else B.c.B(k,c/2|0)}}B.c.B(j,k.length-1)}return new A.kW(new Float32Array(A.q(l)),new Int32Array(A.q(k)),new Int32Array(A.q(j)))},
kW:function kW(a,b,c){this.a=a
this.b=b
this.c=c},
fM:function fM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=$},
er:function er(a){this.a=a},
fe:function fe(a,b){this.a=a
this.b=b},
nh:function nh(a,b,c){this.a=a
this.b=b
this.c=c},
mB:function mB(a,b,c){this.a=a
this.b=b
this.c=c},
mz:function mz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mC:function mC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mA:function mA(a,b,c){this.a=a
this.b=b
this.c=c},
mD:function mD(a){this.a=a},
mE:function mE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
me:function me(){},
mq:function mq(){},
m9:function m9(){},
ma:function ma(){},
kE:function kE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xf(a,b,c){var s=A.e3(b,c)
A.w7(a,b,c,4,new A.nl(b,s.c))
return s},
qP(a,b,c){var s,r,q,p,o,n,m,l,k,j
if(a.c>65535)throw A.h(A.av("Too many regions for 16-bit labels",null))
s=b*c
r=new Uint16Array(s)
B.q.O(r,0,s,65535)
q=A.q7(a,b/a.a,c/a.b,b)
for(p=0;p<c;++p){o=p*b
q.ez(p+0.5,new A.nk(b,r,o))
for(n=p>0,m=o-b,l=0;l<b;++l){k=o+l
if(!(k>=0&&k<s))return A.a(r,k)
if(r[k]!==65535)continue
if(l>0){j=k-1
if(!(j>=0))return A.a(r,j)
j=r[j]}else if(n){if(!(m>=0&&m<s))return A.a(r,m)
j=r[m]}else j=0
if(!(k<s))return A.a(r,k)
r[k]=j}}return r},
w7(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=A.q7(a0,a1/a0.a,a2/a0.b,a1),d=a0.c,c=new Float64Array(d),b=new Float64Array(d),a=new Float64Array(d)
for(s=a0.e,r=s.length,q=0;q<d;++q){if(!(q<r))return A.a(s,q)
p=s[q]
o=$.j8()
n=B.a.j(p,16)&255
m=o.length
if(!(n<m))return A.a(o,n)
c[q]=o[n]
n=B.a.j(p,8)&255
if(!(n<m))return A.a(o,n)
b[q]=o[n]
n=p&255
if(!(n<m))return A.a(o,n)
a[q]=o[n]}l=new Float64Array(a1)
k=new Float64Array(a1)
j=new Float64Array(a1)
i=new Float64Array(a1)
h=new A.mv(a1,new A.mu(l,k,c,j,b,i,a),1/a3)
for(g=0;g<a2;++g){B.k.O(l,0,a1,0)
B.k.O(k,0,a1,0)
B.k.O(j,0,a1,0)
B.k.O(i,0,a1,0)
for(f=0;f<a3;++f)e.ez(g+(f+0.5)/a3,h)
a4.$5(g,l,k,j,i)}},
q7(a,b,c,d){var s,r,q=t.n,p=A.i([],q),o=A.i([],q),n=A.i([],q)
q=A.i([],q)
s=t.t
r=A.i([],s)
s=A.i([],s)
q=new A.lW(d,p,o,n,q,r,s,new Float64Array(64))
q.ij(a,b,c,d)
return q},
nl:function nl(a,b){this.a=a
this.b=b},
nk:function nk(a,b,c){this.a=a
this.b=b
this.c=c},
mu:function mu(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mv:function mv(a,b,c){this.a=a
this.b=b
this.c=c},
lW:function lW(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=$
_.w=g
_.x=0
_.y=h},
lX:function lX(a){this.a=a},
tT(a){var s,r,q,p=new Float64Array(a),o=new Float64Array(a),n=new Float64Array(a),m=new Float64Array(a),l=new Float64Array(a),k=J.aQ(a,t.nu)
for(s=t.p,r=t.C,q=0;q<a;++q)k[q]=A.F(s,r)
s=new Uint8Array(a)
B.d.O(s,0,a,1)
return new A.kT(a,p,o,n,m,l,k,s,a)},
tU(b5,b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=A.tT(b9),b3=b5.a,b4=b5.b
for(s=b7.length,r=b2.b,q=r.length,p=r.$flags|0,o=b2.c,n=o.length,m=b5.c,l=m.length,k=o.$flags|0,j=b2.d,i=j.length,h=b5.d,g=h.length,f=j.$flags|0,e=b2.e,d=e.length,c=b5.e,b=c.length,a=e.$flags|0,a0=b2.f,a1=a0.length,a2=b8.length,a3=a0.$flags|0,a4=0;a4<s;++a4){a5=b7[a4]
if(!(a5>=0&&a5<q))return A.a(r,a5)
a6=r[a5]
p&2&&A.b(r)
r[a5]=a6+1
if(!(a5<n))return A.a(o,a5)
a6=o[a5]
if(!(a4<l))return A.a(m,a4)
a7=m[a4]
k&2&&A.b(o)
o[a5]=a6+a7
if(!(a5<i))return A.a(j,a5)
a7=j[a5]
if(!(a4<g))return A.a(h,a4)
a6=h[a4]
f&2&&A.b(j)
j[a5]=a7+a6
if(!(a5<d))return A.a(e,a5)
a6=e[a5]
if(!(a4<b))return A.a(c,a4)
a7=c[a4]
a&2&&A.b(e)
e[a5]=a6+a7
if(!(a5<a1))return A.a(a0,a5)
a7=a0[a5]
if(!(a4<a2))return A.a(b8,a4)
a6=b8[a4]
a3&2&&A.b(a0)
a0[a5]=a7+a6}a8=new A.kU(b7,b2,b6)
for(a9=0;a9<b4;a9=b0)for(b0=a9+1,s=b0<b4,r=a9*b3,b1=0;b1<b3;){a4=r+b1;++b1
if(b1<b3)a8.$2(a4,a4+1)
if(s)a8.$2(a4,a4+b3)}return b2},
qB(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=new Int32Array(a)
for(s=0;s<a;++s){if(!(s<a))return A.a(g,s)
g[s]=s}for(r=c.length,q=b.length,p=0;p<d;++p){if(!(p<r))return A.a(c,p)
o=c[p]
if(!(p<q))return A.a(b,p)
n=b[p]
if(!(o>=0&&o<a))return A.a(g,o)
g[o]=n}m=new A.mO(g)
l=new Int32Array(a)
B.l.O(l,0,a,-1)
k=new Int32Array(a)
for(j=0,s=0;s<a;++s){i=m.$1(s)
if(i>>>0!==i||i>=a)return A.a(l,i)
if(l[i]<0){h=j+1
if(i>>>0!==i||i>=a)return A.a(l,i)
l[i]=j
j=h}r=l[i]
if(!(s<a))return A.a(k,s)
k[s]=r}return new A.K(k,j)},
q2(){var s=t.t
return new A.lP(A.i([],t.n),A.i([],s),A.i([],s),A.i([],s),A.i([],s))},
wu(a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=A.i([],t.n)
for(s=a2.a,r=a2.r,q=0;q<s;++q){if(!(q<r.length))return A.a(r,q)
r[q].b5(0,new A.mR(q,a1))}B.c.dF(a1)
p=a1.length
if(p===0)o=1
else{n=p/2|0
if(!(n<p))return A.a(a1,n)
n=a1[n]
o=n>0.000001?n:0.001}m=new A.mU(a2,a6,a5,a3,o,a4)
l=new Int32Array(s)
k=A.q2()
for(q=0;q<s;++q){if(!(q<r.length))return A.a(r,q)
r[q].b5(0,new A.mS(q,k,m))}p=t.t
j=A.i([],p)
i=A.i([],p)
p=a2.b
n=p.length
h=a2.w
g=h.length
f=k.a
for(;;){if(!(f.length!==0&&a2.x>1))break
A:{e=k.hq().a
q=e[0]
d=e[1]
c=e[2]
b=e[3]
if(!(q>=0&&q<g))return A.a(h,q)
if(h[q]!==0){if(!(d>=0&&d<g))return A.a(h,d)
e=h[d]===0}else e=!0
if(e)break A
if(!(q<s))return A.a(l,q)
if(l[q]===c){if(!(d>=0&&d<s))return A.a(l,d)
e=l[d]!==b}else e=!0
if(e)break A
if(!(q<n))return A.a(p,q)
e=p[q]
if(!(d>=0&&d<n))return A.a(p,d)
a=e>=p[d]?q:d
a0=a===q?d:q
a2.hp(a,a0)
if(!(a<s))return A.a(l,a)
e=l[a]
if(!(a<s))return A.a(l,a)
l[a]=e+1
B.c.B(j,a)
B.c.B(i,a0)
if(!(a<r.length))return A.a(r,a)
r[a].b5(0,new A.mT(k,m,a,l))}}return new A.km(s,new Int32Array(A.q(j)),new Int32Array(A.q(i)))},
wk(a,b,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a.a,d=new Int32Array(e),c=A.q2()
for(s=a.b,r=s.length,q=0;q<e;++q){if(!(q<r))return A.a(s,q)
c.du(s[q],q,q,0,0)}p=t.t
o=A.i([],p)
n=A.i([],p)
p=a.r
m=a.w
l=m.length
k=c.a
for(;;){if(!(k.length!==0&&a.x>1))break
A:{j={}
j.a=null
i=c.hq().a
q=i[0]
j.a=q
h=i[2]
if(!(q>=0&&q<l))return A.a(m,q)
if(m[q]!==0){if(!(q<e))return A.a(d,q)
i=d[q]!==h}else i=!0
if(i)break A
if(!(q<r))return A.a(s,q)
if(s[q]>=a2&&a.x<=a1)break
j.b=-1
j.c=1/0
if(!(q<p.length))return A.a(p,q)
p[q].b5(0,new A.mN(j,a,a0,b))
i=j.b
if(i<0)break A
a.hp(i,j.a)
i=j.b
if(!(i>=0&&i<e))return A.a(d,i)
d[i]=d[i]+1
B.c.B(o,i)
B.c.B(n,j.a)
i=j.b
if(!(i>=0&&i<r))return A.a(s,i)
g=s[i]
if(!(i<e))return A.a(d,i)
f=d[i]
c.du(g,i,i,f,f)}}return new A.K(new Int32Array(A.q(o)),new Int32Array(A.q(n)))},
bC:function bC(){this.b=this.a=0},
kT:function kT(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
kU:function kU(a,b,c){this.a=a
this.b=b
this.c=c},
kV:function kV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
km:function km(a,b,c){this.a=a
this.b=b
this.c=c},
mO:function mO(a){this.a=a},
lP:function lP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mR:function mR(a,b){this.a=a
this.b=b},
mU:function mU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mS:function mS(a,b,c){this.a=a
this.b=b
this.c=c},
mT:function mT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mN:function mN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xi(a8,a9,b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=a9+1,a7=new Int32Array(a6)
for(s=a8.length,r=0;r<s;++r){q=a8[r]+1
if(!(q>=0&&q<a6))return A.a(a7,q)
p=a7[q]
if(!(q<a6))return A.a(a7,q)
a7[q]=p+1}for(o=0;o<a9;o=n){n=o+1
q=a7[n]
p=a7[o]
if(!(n<a6))return A.a(a7,n)
a7[n]=q+p}m=new Int32Array(s)
l=new Int32Array(A.q(a7))
for(a6=l.length,q=l.$flags|0,k=0;k<s;++k){p=a8[k]
if(!(p>=0&&p<a6))return A.a(l,p)
j=l[p]
q&2&&A.b(l)
l[p]=j+1
if(!(j>=0&&j<s))return A.a(m,j)
m[j]=k}a6=a9*3
i=new Float32Array(a6)
s=new Int32Array(2048)
h=new A.lQ(s,new Float64Array(2048))
if(b1===B.b9)g=new A.lT(new Int32Array(269568),A.i([],t.t))
else g=null
for(s=b1.a,q=b0.c,p=t.aL,j=b0.d,f=b0.e,o=0;o<a9;o=n){e=a7[o]
n=o+1
d=a7[n]
if(d===e)continue
c=m.BYTES_PER_ELEMENT
b=(A.b1(e,d,B.a.a1(m.byteLength,c))-e)*c
if(B.a.V(b,4)!==0)A.G(A.av("The number of bytes to view must be a multiple of 4",null))
a=J.oU(B.l.gt(m),m.byteOffset+e*c,B.a.K(b,4))
switch(s){case 0:a0=A.vX(b0,a)
break
case 1:h.d3(q,a,p.a(B.cj))
a0=a.length
a1=h.dw(0.5,a0)
p.a(B.aS)
h.d3(j,a,B.aS)
a2=h.dw(0.5,a0)
h.d3(f,a,B.aS)
a0=new A.bk(a1,a2,h.dw(0.5,a0))
break
case 2:a0=g.lz(b0,a)
break
case 3:a0=A.vq(b0,a,h)
break
default:a0=null}a3=a0.a
a4=a0.b
a5=a0.c
a0=o*3
if(!(a0<a6))return A.a(i,a0)
i[a0]=a3
a1=a0+1
if(!(a1<a6))return A.a(i,a1)
i[a1]=a4
a0+=2
if(!(a0<a6))return A.a(i,a0)
i[a0]=a5}return i},
vX(a,b){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=b.length,r=a.c,q=r.length,p=a.d,o=p.length,n=a.e,m=n.length,l=0,k=0,j=0,i=0;i<s;++i){h=b[i]
if(!(h>=0&&h<q))return A.a(r,h)
l+=r[h]
if(!(h<o))return A.a(p,h)
k+=p[h]
if(!(h<m))return A.a(n,h)
j+=n[h]}return new A.bk(l/s,k/s,j/s)},
vq(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.length
a0.d3(a.c,b,B.cj)
s=a0.ma(0.1,0.9,c)
r=new Float64Array(c)
for(q=a.d,p=q.length,o=a.e,n=o.length,m=0,l=0,k=0,j=0;j<c;++j){i=b[j]
if(!(i>=0&&i<p))return A.a(q,i)
h=q[i]
if(!(i<n))return A.a(o,i)
g=o[i]
m+=h
l+=g
f=Math.sqrt(h*h+g*g)
if(!(j<c))return A.a(r,j)
r[j]=f
k+=r[j]}m/=c
l/=c
k/=c
e=Math.sqrt(m*m+l*l)
if(e<0.000001||k<0.000001)return new A.bk(s,m,l)
a0.ly(r,B.k9)
d=e+(a0.dw(0.5,c)-e)*B.b.H(e/k,0,1)
return new A.bk(s,m/e*d,l/e*d)},
lQ:function lQ(a,b){this.a=a
this.b=b},
lT:function lT(a,b){this.a=a
this.b=b},
qT(e5,e6,e7,e8,e9,f0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7=e5.a,d8=e5.b,d9=d7*d8,e0=Math.max(2,B.b.a8(Math.sqrt(d9/e7))),e1=e9*100,e2=new Float64Array(d9),e3=new Float64Array(d9),e4=new Float64Array(d9)
for(s=e5.c,r=s.length,q=e5.d,p=q.length,o=e5.e,n=o.length,m=0;m<d9;++m){if(!(m<r))return A.a(s,m)
l=s[m]
if(!(m<d9))return A.a(e2,m)
e2[m]=l*e1
if(!(m<p))return A.a(q,m)
l=q[m]
if(!(m<d9))return A.a(e3,m)
e3[m]=l*100
if(!(m<n))return A.a(o,m)
l=o[m]
if(!(m<d9))return A.a(e4,m)
e4[m]=l*100}k=new A.nu(d7,d8,e5)
s=t.n
j=A.i([],s)
i=A.i([],s)
for(h=B.a.K(e0,2),s=d7-1,r=d8-1,g=h;g<d8;g+=e0)for(f=h;f<d7;f+=e0){for(e=g,d=f,c=1/0,b=-1;b<=1;++b)for(q=g+b,a=-1;a<=1;++a){a0=B.a.H(f+a,0,s)
a1=B.a.H(q,0,r)
a2=k.$2(a0,a1)
if(a2<c){c=a2
e=a1
d=a0}}B.c.B(j,d)
B.c.B(i,e)}a3=j.length
a4=new Float64Array(a3)
a5=new Float64Array(a3)
a6=new Float64Array(a3)
a7=new Float64Array(A.q(j))
a8=new Float64Array(A.q(i))
for(q=a8.length,p=a7.length,a9=0;a9<a3;++a9){if(!(a9<q))return A.a(a8,a9)
o=B.b.h(a8[a9])
if(!(a9<p))return A.a(a7,a9)
m=o*d7+B.b.h(a7[a9])
if(!(m>=0&&m<d9))return A.a(e2,m)
o=e2[m]
if(!(a9<a3))return A.a(a4,a9)
a4[a9]=o
if(!(m<d9))return A.a(e3,m)
o=e3[m]
if(!(a9<a3))return A.a(a5,a9)
a5[a9]=o
if(!(m<d9))return A.a(e4,m)
o=e4[m]
if(!(a9<a3))return A.a(a6,a9)
a6[a9]=o}b0=new Int32Array(d9)
B.l.O(b0,0,d9,-1)
b1=new Float64Array(d9)
o=e6/e0
b2=o*o
b3=new Float64Array(a3)
b4=new Float64Array(a3)
b5=new Float64Array(a3)
b6=new Float64Array(a3)
b7=new Float64Array(a3)
b8=new Float64Array(a3)
if(f0>0)b9=new Int32Array(d9)
else b9=null
for(o=f0*d9,c0=0;c0<e8;++c0){n=b9==null
if(!n)B.l.dE(b9,0,b0)
B.k.O(b1,0,d9,1/0)
for(a9=0;a9<a3;++a9){if(!(a9<p))return A.a(a7,a9)
c1=Math.max(0,B.b.a2(a7[a9]-e0))
c2=Math.min(s,B.b.ab(a7[a9]+e0))
if(!(a9<q))return A.a(a8,a9)
g=Math.max(0,B.b.a2(a8[a9]-e0))
c3=Math.min(r,B.b.ab(a8[a9]+e0))
c4=a4[a9]
c5=a5[a9]
c6=a6[a9]
c7=a7[a9]
c8=a8[a9]
for(h=g;h<=c3;++h){b=h-c8
m=h*d7+c1
for(l=b*b,f=c1;f<=c2;++f,++m){if(!(m>=0&&m<d9))return A.a(e2,m)
c9=e2[m]-c4
d0=e3[m]-c5
d1=e4[m]-c6
a=f-c7
d2=c9*c9+d0*d0+d1*d1+(a*a+l)*b2
if(d2<b1[m]){if(!(m<d9))return A.a(b1,m)
b1[m]=d2
if(!(m<d9))return A.a(b0,m)
b0[m]=a9}}}}B.k.O(b3,0,a3,0)
B.k.O(b4,0,a3,0)
B.k.O(b5,0,a3,0)
B.k.O(b6,0,a3,0)
B.k.O(b7,0,a3,0)
B.k.O(b8,0,a3,0)
for(h=0,m=0;h<d8;++h)for(f=0;f<d7;++f,++m){if(!(m>=0&&m<d9))return A.a(b0,m)
a9=b0[m]
if(a9<0)continue
if(!(a9<a3))return A.a(b3,a9)
l=b3[a9]
d3=e2[m]
if(!(a9<a3))return A.a(b3,a9)
b3[a9]=l+d3
if(!(a9<a3))return A.a(b4,a9)
d3=b4[a9]
l=e3[m]
if(!(a9<a3))return A.a(b4,a9)
b4[a9]=d3+l
if(!(a9<a3))return A.a(b5,a9)
l=b5[a9]
d3=e4[m]
if(!(a9<a3))return A.a(b5,a9)
b5[a9]=l+d3
if(!(a9<a3))return A.a(b6,a9)
d3=b6[a9]
if(!(a9<a3))return A.a(b6,a9)
b6[a9]=d3+f
if(!(a9<a3))return A.a(b7,a9)
d3=b7[a9]
if(!(a9<a3))return A.a(b7,a9)
b7[a9]=d3+h
if(!(a9<a3))return A.a(b8,a9)
d3=b8[a9]
if(!(a9<a3))return A.a(b8,a9)
b8[a9]=d3+1}for(l=a7.$flags|0,d3=a8.$flags|0,a9=0;a9<a3;++a9){d4=b8[a9]
if(d4===0)continue
d5=b3[a9]
if(!(a9<a3))return A.a(a4,a9)
a4[a9]=d5/d4
d4=b4[a9]
d5=b8[a9]
if(!(a9<a3))return A.a(a5,a9)
a5[a9]=d4/d5
d5=b5[a9]
d4=b8[a9]
if(!(a9<a3))return A.a(a6,a9)
a6[a9]=d5/d4
d4=b6[a9]
d5=b8[a9]
l&2&&A.b(a7)
if(!(a9<p))return A.a(a7,a9)
a7[a9]=d4/d5
d5=b7[a9]
d4=b8[a9]
d3&2&&A.b(a8)
if(!(a9<q))return A.a(a8,a9)
a8[a9]=d5/d4}if(!n&&c0>=1){for(n=b9.length,d6=0,m=0;m<d9;++m){l=b0[m]
if(!(m<n))return A.a(b9,m)
if(l!==b9[m])++d6}if(d6<o)break}}for(m=0;m<d9;++m)if(b0[m]<0){s=m>0?b0[m-1]:0
if(!(m<d9))return A.a(b0,m)
b0[m]=s}return A.wM(b0,d7,d8,B.a.K(e0*e0,4))},
wM(a,b,c,d){var s,r,q,p,o,n,m,l=a.length,k=new Int32Array(l),j=A.j3(a,b,c,k),i=new Int32Array(j)
for(s=0;s<l;++s){r=k[s]
if(!(r>=0&&r<j))return A.a(i,r)
q=i[r]
if(!(r<j))return A.a(i,r)
i[r]=q+1}p=A.qz(k,j,i,b,c,d,null)
o=new Int32Array(l)
for(q=p.length,n=0;n<l;++n){m=k[n]
if(!(m>=0&&m<q))return A.a(p,m)
m=p[m]
if(!(n<l))return A.a(o,n)
o[n]=m}return new A.K(o,A.wy(o))},
nu:function nu(a,b,c){this.a=a
this.b=b
this.c=c},
nv:function nv(){},
iy:function iy(a,b,c){this.a=a
this.b=b
this.c=c},
f2:function f2(a,b,c){this.a=a
this.b=b
this.c=c},
i9:function i9(a,b,c){this.a=a
this.b=b
this.c=c},
bB(a){if(a<=0.04045)return a/12.92
return Math.pow((a+0.055)/1.055,2.4)},
ci(a){var s,r,q
if(a<=0)return 0
if(a>=1)return 255
s=$.rl()
r=B.b.h(a*4096)
if(!(r>=0&&r<s.length))return A.a(s,r)
q=s[r]
for(;;){if(q<255){s=$.oR()
if(!(q<s.length))return A.a(s,q)
s=a>=s[q]}else s=!1
if(!s)break;++q}return q},
el(a){if(a===0)return 0
return a<0?-Math.pow(-a,0.3333333333333333):Math.pow(a,0.3333333333333333)},
md:function md(){},
j3(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=d.length
B.l.O(d,0,f,-1)
s=a.length
r=new Int32Array(s)
for(q=b-1,p=d.$flags|0,o=0,n=0;n<s;++n){if(!(n<f))return A.a(d,n)
if(d[n]>=0)continue
m=a[n]
if(0>=s)return A.a(r,0)
r[0]=n
p&2&&A.b(d)
d[n]=o
for(l=1;l>0;){--l
if(!(l<s))return A.a(r,l)
k=r[l]
j=B.a.V(k,b)
i=!1
if(j>0){h=k-1
if(!(h>=0&&h<f))return A.a(d,h)
if(d[h]<0){if(!(h<s))return A.a(a,h)
i=a[h]===m}}if(i){i=k-1
if(!(i>=0&&i<f))return A.a(d,i)
d[i]=o
g=l+1
if(!(l<s))return A.a(r,l)
r[l]=i
l=g}i=!1
if(j<q){h=k+1
if(!(h>=0&&h<f))return A.a(d,h)
if(d[h]<0){if(!(h<s))return A.a(a,h)
i=a[h]===m}}if(i){i=k+1
if(!(i>=0&&i<f))return A.a(d,i)
d[i]=o
g=l+1
if(!(l<s))return A.a(r,l)
r[l]=i
l=g}i=!1
if(k>=b){h=k-b
if(!(h>=0&&h<f))return A.a(d,h)
if(d[h]<0){if(!(h<s))return A.a(a,h)
i=a[h]===m}}if(i){i=k-b
if(!(i>=0&&i<f))return A.a(d,i)
d[i]=o
g=l+1
if(!(l<s))return A.a(r,l)
r[l]=i
l=g}i=k+b
if(i<s){if(!(i>=0&&i<f))return A.a(d,i)
h=d[i]<0&&a[i]===m}else h=!1
if(h){if(!(i>=0&&i<f))return A.a(d,i)
d[i]=o
g=l+1
if(!(l<s))return A.a(r,l)
r[l]=i
l=g}}++o}return o},
wy(a){var s,r,q=t.p,p=A.F(q,q)
for(q=a.length,s=0;s<q;++s){r=p.dv(a[s],new A.mV(p))
a.$flags&2&&A.b(a)
a[s]=r}return p.a},
qz(a8,a9,b0,b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4={},a5=a9+1,a6=new Int32Array(a5),a7=new Int32Array(a9)
B.l.O(a7,0,a9,-1)
a4.a=0
s=new A.mM(b2,b1,a8)
s.$1(new A.mI(a4,b4,b0,b3,a6,a7))
for(r=0;r<a9;r=q){q=r+1
p=a6[q]
o=a6[r]
if(!(q<a5))return A.a(a6,q)
a6[q]=p+o}p=a6[a9]
n=new Int32Array(p)
s.$1(new A.mJ(b4,b0,b3,n,new Int32Array(A.q(a6))))
m=new Int32Array(a9)
for(r=0;r<a9;++r){if(!(r<a9))return A.a(m,r)
m[r]=r}l=new A.mL(m)
o=a4.a
k=new Int32Array(o)
for(r=0;r<a9;++r){j=a7[r]
if(j>=0){if(!(j<o))return A.a(k,j)
k[j]=r}}i=B.l.m7(k)
B.c.bV(i,new A.mK(b0,a7))
h=new Int32Array(a9)
g=A.i([],t.t)
for(o=i.length,f=0;f<i.length;i.length===o||(0,A.P)(i),++f){r=i[f]
if(!(r>=0&&r<a5))return A.a(a6,r)
e=a6[r]
j=r+1
if(!(j<a5))return A.a(a6,j)
for(;e<a6[j];++e){if(!(e>=0&&e<p))return A.a(n,e)
d=n[e]
if(!(d>=0&&d<a9))return A.a(h,d)
c=h[d]
if(!(d<a9))return A.a(h,d)
h[d]=c+1
if(c===0)B.c.B(g,d)}for(j=g.length,b=-1,a=0,a0=0;a0<j;++a0){d=g[a0]
if(!(d>=0&&d<a9))return A.a(h,d)
a1=h[d]
if(a1>a){a=a1
b=d}if(!(d<a9))return A.a(h,d)
h[d]=0}B.c.aR(g)
if(b>=0){a2=l.$1(r)
a3=l.$1(b)
if(a2!==a3){if(a2>>>0!==a2||a2>=a9)return A.a(m,a2)
m[a2]=a3}}}for(r=0;r<a9;++r)B.l.i(m,r,l.$1(r))
return m},
mV:function mV(a){this.a=a},
mM:function mM(a,b,c){this.a=a
this.b=b
this.c=c},
mI:function mI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mJ:function mJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mL:function mL(a){this.a=a},
mK:function mK(a,b){this.a=a
this.b=b},
wq(a,b,c,d){var s,r,q
if(d<=0)return new Float32Array(A.q(a))
s=a.length
r=new Float32Array(s)
q=new Float32Array(s)
A.qj(a,r,b,c,d,!0)
A.qj(r,q,b,c,d,!1)
return q},
qj(a,b,c,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h=a2?a0:c,g=a2?c:a0,f=a2?1:c,e=1/(2*a1+1),d=g-1
for(s=a.length,r=b.$flags|0,q=-a1,p=0;p<h;++p){o=a2?p*c:p
for(n=q,m=0;n<=a1;++n){if(n<0)l=0
else l=n>d?d:n
l=o+l*f
if(!(l>=0&&l<s))return A.a(a,l)
m+=a[l]}for(n=0;n<g;++n){l=o+n*f
r&2&&A.b(b)
if(!(l>=0&&l<b.length))return A.a(b,l)
b[l]=m*e
k=n+a1+1
j=n-a1
l=o+(k>d?d:k)*f
if(!(l>=0&&l<s))return A.a(a,l)
l=a[l]
i=o+(j<0?0:j)*f
if(!(i>=0&&i<s))return A.a(a,i)
m+=l-a[i]}}},
df(a,b,c,d){var s,r,q,p,o,n
if(d<0.5)return new Float32Array(A.q(a))
s=12*d*d
r=B.b.a2(Math.sqrt(s/3+1))
if((r&1)===0)--r
q=r+2
p=B.b.a8((s-3*r*r-12*r-9)/(-4*r-4))
for(o=a,n=0;n<3;++n)o=A.wq(o,b,c,B.a.K((n<p?r:q)-1,2))
return o},
mt(a,b,c){var s,r,q,p,o,n,m,l,k,j=a+1,i=j*(b+1),h=new Float64Array(i)
for(s=0;s<b;s=q)for(r=s*a,q=s+1,p=q*j,o=s*j,n=0,m=0;m<a;++m){l=c.$1(r+m)
if(typeof l!=="number")return A.a8(l)
n+=l
l=p+m+1
k=o+m+1
if(!(k>=0&&k<i))return A.a(h,k)
k=h[k]
if(!(l>=0&&l<i))return A.a(h,l)
h[l]=k+n}return h},
x6(a,b,c,d){var s,r
for(s=a,r=0;r<c;++r)s=A.vW(s,d,b,4)
return s},
vW(e4,e5,e6,e7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8=e4.a,c9=e4.b,d0=c8+1,d1=e4.c,d2=e4.d,d3=e4.e,d4=e6*e6,d5=A.mt(c8,c9,new A.ml(d1)),d6=A.mt(c8,c9,new A.mm(d2)),d7=A.mt(c8,c9,new A.mn(d3)),d8=A.mt(c8,c9,new A.mo(d4,d1,d2,d3)),d9=A.pC(c8,c9),e0=new Float64Array(4),e1=new Float64Array(4),e2=new Float64Array(4),e3=new Float64Array(4)
for(s=d9.c,r=s.$flags|0,q=d9.d,p=q.$flags|0,o=d9.e,n=o.$flags|0,m=d5.length,l=d6.length,k=d7.length,j=d8.length,i=0;i<c9;i=e){h=Math.max(0,i-e5)
g=Math.min(c9,i+e5+1)
for(f=i*c8,e=i+1,d=0;d<c8;d=a){c=Math.max(0,d-e5)
b=Math.min(c8,d+e5+1)
for(a=d+1,a0=1/0,a1=0;a1<4;++a1){a2=(a1&1)===0
a3=(a1&2)===0
a4=a2?c:d
a5=a2?a:b
a6=a3?h:i
a7=a3?e:g
a8=(a5-a4)*(a7-a6)
a9=a6*d0
b0=a9+a4
b1=a9+a5
a9=a7*d0
b2=a9+a4
b3=a9+a5
if(!(b3>=0&&b3<m))return A.a(d5,b3)
a9=d5[b3]
if(!(b1>=0&&b1<m))return A.a(d5,b1)
b4=d5[b1]
if(!(b2>=0&&b2<m))return A.a(d5,b2)
b5=d5[b2]
if(!(b0>=0&&b0<m))return A.a(d5,b0)
b6=(a9-b4-b5+d5[b0])/a8
if(!(b3<l))return A.a(d6,b3)
b5=d6[b3]
if(!(b1<l))return A.a(d6,b1)
b4=d6[b1]
if(!(b2<l))return A.a(d6,b2)
a9=d6[b2]
if(!(b0<l))return A.a(d6,b0)
b7=(b5-b4-a9+d6[b0])/a8
if(!(b3<k))return A.a(d7,b3)
a9=d7[b3]
if(!(b1<k))return A.a(d7,b1)
b4=d7[b1]
if(!(b2<k))return A.a(d7,b2)
b5=d7[b2]
if(!(b0<k))return A.a(d7,b0)
b8=(a9-b4-b5+d7[b0])/a8
if(!(b3<j))return A.a(d8,b3)
b5=d8[b3]
if(!(b1<j))return A.a(d8,b1)
b4=d8[b1]
if(!(b2<j))return A.a(d8,b2)
a9=d8[b2]
if(!(b0<j))return A.a(d8,b0)
b9=Math.max(0,(b5-b4-a9+d8[b0])/a8-(d4*b6*b6+b7*b7+b8*b8))
if(!(a1<4))return A.a(e0,a1)
e0[a1]=b6
if(!(a1<4))return A.a(e1,a1)
e1[a1]=b7
if(!(a1<4))return A.a(e2,a1)
e2[a1]=b8
if(!(a1<4))return A.a(e3,a1)
e3[a1]=b9
if(b9<a0)a0=b9}for(a9=a0+1e-8,c0=0,c1=0,c2=0,c3=0,a1=0;a1<4;++a1){c4=a9/(e3[a1]+1e-8)
for(c5=1,c6=0;c6<e7;++c6)c5*=c4
c0+=c5
c1+=c5*e0[a1]
c2+=c5*e1[a1]
c3+=c5*e2[a1]}c7=f+d
r&2&&A.b(s)
if(!(c7>=0&&c7<s.length))return A.a(s,c7)
s[c7]=c1/c0
p&2&&A.b(q)
if(!(c7<q.length))return A.a(q,c7)
q[c7]=c2/c0
n&2&&A.b(o)
if(!(c7<o.length))return A.a(o,c7)
o[c7]=c3/c0}}return d9},
wX(b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=b8.a,b3=b8.b,b4=b2*b3,b5=new Float32Array(b4),b6=[b8.c,b8.d,b8.e],b7=[b9*b9,1,1]
for(s=b2-1,r=b3-1,q=0;q<b3;++q){p=q>0?q-1:0
o=q<r?q+1:r
for(n=q*b2,m=p*b2,l=o*b2,k=0;k<b2;++k){j=k>0?k-1:0
i=k<s?k+1:s
for(h=m+i,g=n+i,f=l+i,e=m+j,d=n+j,c=l+j,b=l+k,a=m+k,a0=0,a1=0;a1<3;++a1){a2=b6[a1]
a3=a2.length
if(!(h>=0&&h<a3))return A.a(a2,h)
a4=a2[h]
if(!(g>=0&&g<a3))return A.a(a2,g)
a5=a2[g]
if(!(f>=0&&f<a3))return A.a(a2,f)
a6=a2[f]
if(!(e>=0&&e<a3))return A.a(a2,e)
a7=a2[e]
if(!(d>=0&&d<a3))return A.a(a2,d)
a8=a2[d]
if(!(c>=0&&c<a3))return A.a(a2,c)
a9=a2[c]
b0=a4+2*a5+a6-(a7+2*a8+a9)
if(!(b>=0&&b<a3))return A.a(a2,b)
a8=a2[b]
if(!(a>=0&&a<a3))return A.a(a2,a)
b1=a9+2*a8+a6-(a7+2*a2[a]+a4)
a0+=b7[a1]*(b0*b0+b1*b1)}h=n+k
g=Math.sqrt(a0)
if(!(h>=0&&h<b4))return A.a(b5,h)
b5[h]=g/8}}return b5},
mP(a,b,c,d,e,a0){var s,r,q,p,o,n,m,l,k,j,i,h=d*e,g=new Float32Array(h),f=new Int32Array(h)
for(s=d-1,r=a.length,q=e-1,p=0;p<c;++p)for(o=Math.min(B.a.a1(p,a0),q)*d,n=p*b,m=0;m<b;++m){l=o+Math.min(B.a.a1(m,a0),s)
if(l>>>0!==l||l>=h)return A.a(g,l)
k=g[l]
j=n+m
if(!(j>=0&&j<r))return A.a(a,j)
j=a[j]
if(l>>>0!==l||l>=h)return A.a(g,l)
g[l]=k+j
if(l>>>0!==l||l>=h)return A.a(f,l)
j=f[l]
if(l>>>0!==l||l>=h)return A.a(f,l)
f[l]=j+1}for(i=0;i<h;++i){s=g[i]
r=f[i]
if(!(i<h))return A.a(g,i)
g[i]=s/r}return g},
ml:function ml(a){this.a=a},
mm:function mm(a){this.a=a},
mn:function mn(a){this.a=a},
mo:function mo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qV(e8,e9,f0,f1,f2,f3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0=e8.a,e1=e8.b,e2=e0*e1,e3=new Float32Array(e2),e4=new Float32Array(e2),e5=new Float32Array(e2),e6=[e8.c,e8.d,e8.e],e7=[f1*f1,1,1]
for(s=e0-1,r=e1-1,q=0;q<e1;++q){p=q>0?q-1:0
o=q<r?q+1:r
for(n=q*e0,m=p*e0,l=o*e0,k=0;k<e0;++k){j=k>0?k-1:0
i=k<s?k+1:s
for(h=m+i,g=n+i,f=l+i,e=m+j,d=n+j,c=l+j,b=l+k,a=m+k,a0=0,a1=0,a2=0,a3=0;a3<3;++a3){a4=e6[a3]
a5=a4.length
if(!(h>=0&&h<a5))return A.a(a4,h)
a6=a4[h]
if(!(g>=0&&g<a5))return A.a(a4,g)
a7=a4[g]
if(!(f>=0&&f<a5))return A.a(a4,f)
a8=a4[f]
if(!(e>=0&&e<a5))return A.a(a4,e)
a9=a4[e]
if(!(d>=0&&d<a5))return A.a(a4,d)
b0=a4[d]
if(!(c>=0&&c<a5))return A.a(a4,c)
b1=a4[c]
b2=a6+2*a7+a8-(a9+2*b0+b1)
if(!(b>=0&&b<a5))return A.a(a4,b)
b0=a4[b]
if(!(a>=0&&a<a5))return A.a(a4,a)
b3=b1+2*b0+a8-(a9+2*a4[a]+a6)
a6=e7[a3]
a9=a6*b2
a0+=a9*b2
a1+=a9*b3
a2+=a6*b3*b3}b4=n+k
if(!(b4>=0&&b4<e2))return A.a(e3,b4)
e3[b4]=a0
e4[b4]=a1
e5[b4]=a2}}b5=A.df(e3,e0,e1,f3)
b6=A.df(e4,e0,e1,f3)
b7=A.df(e5,e0,e1,f3)
if(f0>1){b8=Math.max(1,B.a.a1(e0,f0))
b9=Math.max(1,B.a.a1(e1,f0))
b5=A.mP(b5,e0,e1,b8,b9,f0)
b6=A.mP(b6,e0,e1,b8,b9,f0)
b7=A.mP(b7,e0,e1,b8,b9,f0)}else{b9=e1
b8=e0}c0=b8*b9
for(e2=b5.length,n=b7.length,c1=0,b4=0;b4<c0;++b4){if(!(b4<e2))return A.a(b5,b4)
m=b5[b4]
if(!(b4<n))return A.a(b7,b4)
c1+=m+b7[b4]}c2=f2*c1/c0+1e-12
c3=Math.sin(e9)
a3=Math.cos(e9)
c4=c2*c3*c3
c5=-c2*c3*a3
c6=c2*a3*a3
c7=new Float32Array(c0)
c8=new Float32Array(c0)
c9=new Float32Array(c0)
for(m=b6.length,b4=0;b4<c0;++b4){if(!(b4<e2))return A.a(b5,b4)
d0=b5[b4]+c4
if(!(b4<m))return A.a(b6,b4)
d1=b6[b4]+c5
if(!(b4<n))return A.a(b7,b4)
d2=b7[b4]+c6
d3=(d0-d2)/2
l=d1*d1
d4=Math.sqrt(d3*d3+l)
h=d0+d2
d5=h/2+d4
d6=d5-d2
d7=d5-d0
if(l+d7*d7>d6*d6+l){d8=d7
d6=d1}else d8=d1
d9=Math.sqrt(d6*d6+d8*d8)
if(d9<1e-20){c7[b4]=a3
c8[b4]=c3}else{c7[b4]=-d8/d9
c8[b4]=d6/d9}c9[b4]=h>1e-20?B.b.H(2*d4/h,0,1):0}return new A.jJ(b8,b9,c7,c8,c9)},
jJ:function jJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pO(a,b,c){var s=c.length
if(s!==a*b*4)A.G(A.av("RGBA buffer length "+s+" != "+a+"x"+b+"x4",null))
return new A.b2(a,b,c)},
e3(a,b){return new A.b2(a,b,new Uint8Array(a*b*4))},
pC(a,b){var s=a*b,r=new Float32Array(s),q=new Float32Array(s)
return new A.kp(a,b,r,q,new Float32Array(s))},
tE(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=A.pC(a2.a,a2.b),a0=a2.c,a1=$.j8()
for(s=a.a*a.b,r=a0.length,q=a1.length,p=a.c,o=p.$flags|0,n=a.d,m=n.$flags|0,l=a.e,k=l.$flags|0,j=0,i=0;j<s;++j,i+=4){if(!(i<r))return A.a(a0,i)
h=a0[i]
if(!(h<q))return A.a(a1,h)
g=a1[h]
h=i+1
if(!(h<r))return A.a(a0,h)
h=a0[h]
if(!(h<q))return A.a(a1,h)
f=a1[h]
h=i+2
if(!(h<r))return A.a(a0,h)
h=a0[h]
if(!(h<q))return A.a(a1,h)
e=a1[h]
d=A.el(0.4122214708*g+0.5363325363*f+0.0514459929*e)
c=A.el(0.2119034982*g+0.6806995451*f+0.1073969566*e)
b=A.el(0.0883024619*g+0.2817188376*f+0.6299787005*e)
o&2&&A.b(p)
if(!(j<p.length))return A.a(p,j)
p[j]=0.2104542553*d+0.793617785*c-0.0040720468*b
m&2&&A.b(n)
if(!(j<n.length))return A.a(n,j)
n[j]=1.9779984951*d-2.428592205*c+0.4505937099*b
k&2&&A.b(l)
if(!(j<l.length))return A.a(l,j)
l[j]=0.0259040371*d+0.7827717662*c-0.808675766*b}return a},
qL(a,b,c){var s=a+0.3963377774*b+0.2158037573*c,r=a-0.1055613458*b-0.0638541728*c,q=a-0.0894841775*b-1.291485548*c,p=s*s*s,o=r*r*r,n=q*q*q
return(A.ci(4.0767416621*p-3.3077115913*o+0.2309699292*n)<<16|A.ci(-1.2684380046*p+2.6097574011*o-0.3413193965*n)<<8|A.ci(-0.0041960863*p-0.7034186147*o+1.707614701*n))>>>0},
b2:function b2(a,b,c){this.a=a
this.b=b
this.c=c},
kp:function kp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qG(a,b,c){var s,r=a>b?a:b
if(r<=c)return new A.K(a,b)
s=c/r
return new A.K(B.a.H(B.b.a8(a*s),1,c),B.a.H(B.b.a8(b*s),1,c))},
n4(a,b){var s=a.a,r=a.b,q=A.qG(s,r,b),p=q.a,o=q.b
if(p===s&&o===r)return a
return A.wJ(a,p,o)},
wJ(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0={},a1=a5.a,a2=A.qy(a1,a6),a3=A.qy(a5.b,a7),a4=$.j8()
a0.a=-1
s=a6*3
r=new Float64Array(s)
q=new A.n3(a0,a1,a6,a2,a4,a5.c,r)
p=A.e3(a6,a7)
o=new Float64Array(s)
for(n=p.c,m=0;m<a7;++m){B.k.O(o,0,s,0)
if(!(m<a3.length))return A.a(a3,m)
l=a3[m]
for(k=l.a,j=k.length,i=l.b,h=i.length,g=0;g<j;++g){q.$1(k[g])
if(!(g<h))return A.a(i,g)
f=i[g]
for(e=0;e<s;++e){d=o[e]
c=r[e]
if(!(e<s))return A.a(o,e)
o[e]=d+c*f}}b=m*a6*4
for(a=0;a<a6;++a,b+=4){k=a*3
if(!(k<s))return A.a(o,k)
j=A.ci(o[k])
n.$flags&2&&A.b(n)
i=n.length
if(!(b>=0&&b<i))return A.a(n,b)
n[b]=j
j=b+1
h=k+1
if(!(h<s))return A.a(o,h)
h=A.ci(o[h])
n.$flags&2&&A.b(n)
if(!(j<i))return A.a(n,j)
n[j]=h
h=b+2
k+=2
if(!(k<s))return A.a(o,k)
k=A.ci(o[k])
n.$flags&2&&A.b(n)
if(!(h<i))return A.a(n,h)
n[h]=k
k=b+3
if(!(k<i))return A.a(n,k)
n[k]=255}}return p},
qy(a,b){return A.nR(b,new A.mw(a/b,a),t.l_)},
n3:function n3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ee:function ee(a,b){this.a=a
this.b=b},
mw:function mw(a,b){this.a=a
this.b=b},
wY(a,b,c){var s=a/Math.max(1,c.a),r=c.d?s:b/Math.max(1,c.b),q=new A.na(Math.max(1,c.c)),p=q.$2(a,s),o=p.a,n=p.b,m=q.$2(b,r),l=m.a
return new A.fY([n,m.b,o,l])},
hy:function hy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
na:function na(a){this.a=a},
oF(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g=a4.a,f=a4.b,e=g*f,d=A.e3(g,f),c=new Int32Array(256),b=new Int32Array(256),a=a4.c,a0=d.c,a1=$.j8(),a2=$.rp(),a3=$.rs()
for(g=a.length,f=a1.length,s=a2.length,r=a3.length,q=0;q<e;++q){p=q*4
if(!(p<g))return A.a(a,p)
o=a[p]
n=p+1
if(!(n<g))return A.a(a,n)
m=a[n]
l=p+2
if(!(l<g))return A.a(a,l)
k=a[l]
if(!(o<f))return A.a(a1,o)
l=a1[o]
if(!(m<f))return A.a(a1,m)
j=a1[m]
if(!(k<f))return A.a(a1,k)
j=B.a.H(B.b.a8((0.2126729*l+0.7151522*j+0.072175*a1[k])*65535),0,65535)
if(!(j>=0&&j<s))return A.a(a2,j)
i=a2[j]
j=(o>>>2<<12|m>>>2<<6|k>>>2)>>>0
if(!(j<r))return A.a(a3,j)
h=a3[j]
a0.$flags&2&&A.b(a0)
j=a0.length
if(!(p<j))return A.a(a0,p)
a0[p]=i
if(!(n<j))return A.a(a0,n)
a0[n]=h
n=p+3
if(!(n<j))return A.a(a0,n)
a0[n]=255
if(!(i<256))return A.a(c,i)
n=c[i]
if(!(i<256))return A.a(c,i)
c[i]=n+1
if(!(h<256))return A.a(b,h)
n=b[h]
if(!(h<256))return A.a(b,h)
b[h]=n+1}return new A.iK(d,c,b)},
wZ(a,b){var s=b.length,r=0
for(;;){if(!(r<s&&a>=b[r]))break;++r}return r},
wx(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=new A.iy((B.a.j(a6,16)&255)/255,(B.a.j(a6,8)&255)/255,(a6&255)/255).m6().ep(),a=a5.a,a0=a5.b,a1=a*a0,a2=A.e3(a,a0),a3=new Int32Array(256),a4=new Int32Array(65536)
B.l.O(a4,0,65536,-1)
s=new Uint8Array(65536)
r=a5.c
q=a2.c
for(a=r.length,a0=b.a,p=b.b,o=b.c,n=0;n<a1;++n){m=n*4
if(!(m<a))return A.a(r,m)
l=r[m]
k=m+1
if(!(k<a))return A.a(r,k)
k=r[k]
j=m+2
if(!(j<a))return A.a(r,j)
j=r[j]
i=(l<<16|k<<8|j)>>>0
h=(i^i>>>7^i>>>15)&65535
if(a4[h]===i)g=s[h]
else{f=new A.f2(A.bB(l/255),A.bB(k/255),A.bB(j/255)).ep()
e=f.a-a0
d=f.b-p
c=f.c-o
g=B.a.H(B.b.a8(Math.sqrt(e*e+d*d+c*c)/0.25*255),0,255)
if(!(h<65536))return A.a(a4,h)
a4[h]=i
if(!(h<65536))return A.a(s,h)
s[h]=g}q.$flags&2&&A.b(q)
l=q.length
if(!(m<l))return A.a(q,m)
q[m]=g
k=m+3
if(!(k<l))return A.a(q,k)
q[k]=255
if(!(g>=0&&g<256))return A.a(a3,g)
k=a3[g]
if(!(g<256))return A.a(a3,g)
a3[g]=k+1}return new A.K(a2,a3)},
iK:function iK(a,b,c){this.a=a
this.b=b
this.c=c},
mF:function mF(){},
mG:function mG(){},
jl:function jl(a,b){this.a=a
this.b=b},
V:function V(a){this.a=-1
this.b=a},
bq:function bq(a,b){this.a=a
this.b=b},
dn:function dn(a){this.a=a},
dp:function dp(a){this.a=a},
dq:function dq(a){this.a=a},
dr:function dr(a){this.a=a},
ds:function ds(a){this.a=a},
dt:function dt(a){this.a=a},
du:function du(a,b){this.a=a
this.b=b},
dv:function dv(a){this.a=a},
dw:function dw(a,b){this.a=a
this.b=b},
dx:function dx(a){this.a=a},
dy:function dy(a,b){this.a=a
this.b=b},
p5(a,b,c,d){var s=new A.cl(new Uint8Array(4))
s.hV(a,b,c,d)
return s},
b9:function b9(a){this.a=a},
hm:function hm(a){this.a=a},
cl:function cl(a){this.a=a},
en(a,b,c){var s
if(b===c)return a
switch(b.a){case 0:if(a===0)s=0
else{s=B.c6.k(0,c)
s.toString}return s
case 1:switch(c.a){case 0:return a===0?0:1
case 1:return a
case 2:return a*5
case 3:return a*75
case 4:return a*21845
case 5:return a*1431655765
case 6:return a*42
case 7:return a*10922
case 8:return a*715827882
case 9:case 10:case 11:return a/3}break
case 2:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.j(A.p(a),1)
case 2:return a
case 3:return a*17
case 4:return a*4369
case 5:return a*286331153
case 6:return a*8
case 7:return a*2184
case 8:return a*143165576
case 9:case 10:case 11:return a/3}break
case 3:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.j(A.p(a),6)
case 2:return B.a.j(A.p(a),4)
case 3:return a
case 4:return a*257
case 5:return a*16843009
case 6:return B.a.j(A.p(a),1)
case 7:return a*128
case 8:return a*8421504
case 9:case 10:case 11:return a/255}break
case 4:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.j(A.p(a),14)
case 2:return B.a.j(A.p(a),12)
case 3:return B.a.j(A.p(a),8)
case 4:return a
case 5:return A.p(a)<<8>>>0
case 6:return B.a.j(A.p(a),9)
case 7:return B.a.j(A.p(a),1)
case 8:return a*524296
case 9:case 10:case 11:return a/65535}break
case 5:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.j(A.p(a),30)
case 2:return B.a.j(A.p(a),28)
case 3:return B.a.j(A.p(a),24)
case 4:return B.a.j(A.p(a),16)
case 5:return a
case 6:return B.a.j(A.p(a),25)
case 7:return B.a.j(A.p(a),17)
case 8:return B.a.j(A.p(a),1)
case 9:case 10:case 11:return a/4294967295}break
case 6:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.a.j(A.p(a),5)
case 2:return a<=0?0:B.a.j(A.p(a),3)
case 3:return a<=0?0:A.p(a)<<1>>>0
case 4:return a<=0?0:A.p(a)*516
case 5:return a<=0?0:A.p(a)*33818640
case 6:return a
case 7:return a*258
case 8:return a*16909320
case 9:case 10:case 11:return a/127}break
case 7:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.a.j(A.p(a),15)
case 2:return a<=0?0:B.a.j(A.p(a),11)
case 3:return a<=0?0:B.a.j(A.p(a),7)
case 4:return a<=0?0:A.p(a)<<1>>>0
case 5:return a<=0?0:A.p(a)*131076
case 6:return B.a.j(A.p(a),8)
case 7:return a
case 8:return A.p(a)*65538
case 9:case 10:case 11:return a/32767}break
case 8:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.a.j(A.p(a),29)
case 2:return a<=0?0:B.a.j(A.p(a),27)
case 3:return a<=0?0:B.a.j(A.p(a),23)
case 4:return a<=0?0:B.a.j(A.p(a),16)
case 5:return a<=0?0:A.p(a)<<1>>>0
case 6:return B.a.j(A.p(a),24)
case 7:return B.a.j(A.p(a),16)
case 8:return a
case 9:case 10:case 11:return a/2147483647}break
case 9:case 10:case 11:switch(c.a){case 0:return a===0?0:1
case 1:return B.b.h(B.b.H(a,0,1)*3)
case 2:return B.b.h(B.b.H(a,0,1)*15)
case 3:return B.b.h(B.b.H(a,0,1)*255)
case 4:return B.b.h(B.b.H(a,0,1)*65535)
case 5:return B.b.h(B.b.H(a,0,1)*4294967295)
case 6:return B.b.h(a<0?B.b.H(a,-1,1)*128:B.b.H(a,-1,1)*127)
case 7:return B.b.h(a<0?B.b.H(a,-1,1)*32768:B.b.H(a,-1,1)*32767)
case 8:return B.b.h(a<0?B.b.H(a,-1,1)*2147483648:B.b.H(a,-1,1)*2147483647)
case 9:case 10:case 11:return a}break}},
ap:function ap(a,b){this.a=a
this.b=b},
hg:function hg(a,b){this.a=a
this.b=b},
eB(a){var s,r=new A.bZ(A.F(t.N,t.P))
r.i0(a)
s=a.b
if(s!=null)r.b=new Uint8Array(A.q(s))
return r},
jA(a){var s=new A.bZ(A.F(t.N,t.P))
s.bM(a)
return s},
bZ:function bZ(a){this.b=null
this.c=0
this.a=a},
iR:function iR(a,b){this.a=a
this.b=b},
j(a,b,c){return new A.hr(a,b)},
hr:function hr(a,b){this.a=a
this.b=b},
bH:function bH(a){this.a=a},
jV:function jV(a){this.a=a},
pe(a){var s=new A.bt(A.F(t.p,t.r),new A.bH(A.F(t.N,t.P)))
s.li(a)
return s},
bt:function bt(a,b){this.a=a
this.b=b},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
pl(a,b){var s=new A.cx(new Uint16Array(b))
s.i5(a,b)
return s},
ta(a){var s=new Uint32Array(1)
s[0]=a
return new A.c2(s)},
pg(a,b){var s=new A.c2(new Uint32Array(b))
s.i2(a,b)
return s},
ph(a,b){var s,r=J.aQ(b,t.k)
for(s=0;s<b;++s)r[s]=new A.e2(a.l(),a.l())
return new A.ct(r)},
pk(a,b){var s=new A.cw(new Int16Array(b))
s.i4(a,b)
return s},
pi(a,b){var s=new A.cu(new Int32Array(b))
s.i3(a,b)
return s},
pj(a,b){var s,r,q,p,o=J.aQ(b,t.k)
for(s=0;s<b;++s){r=a.l()
q=$.S()
q.$flags&2&&A.b(q)
q[0]=r
r=$.ac()
if(0>=r.length)return A.a(r,0)
p=r[0]
q[0]=a.l()
o[s]=new A.e2(p,r[0])}return new A.cv(o)},
pm(a,b){var s=new A.dF(new Float32Array(b))
s.i6(a,b)
return s},
pf(a,b){var s=new A.dD(new Float64Array(b))
s.i1(a,b)
return s},
am:function am(a,b){this.a=a
this.b=b},
aa:function aa(){},
bG:function bG(a){this.a=a},
cs:function cs(a){this.a=a},
cx:function cx(a){this.a=a},
c2:function c2(a){this.a=a},
ct:function ct(a){this.a=a},
c3:function c3(a){this.a=a},
cw:function cw(a){this.a=a},
cu:function cu(a){this.a=a},
cv:function cv(a){this.a=a},
dF:function dF(a){this.a=a},
dD:function dD(a){this.a=a},
dG:function dG(a){this.a=a},
dE:function dE(a){this.a=a},
as(a,b,c,d){var s
if(d)s=a<0||b<0
else s=a<1||b<1
if(s)throw A.h(A.l("Invalid image dimensions "+a+"x"+b))
if(c>0&&a*b>c)throw A.h(A.l("Image dimensions "+a+"x"+b+" exceed the maximum of "+c+" pixels"))},
bJ:function bJ(a){this.a=a
this.c=0},
oZ(a){var s,r,q=new A.jh()
if(!A.p_(a))A.G(A.l("Not a bitmap file."))
a.d+=2
s=a.l()
r=$.S()
r.$flags&2&&A.b(r)
r[0]=s
s=$.ac()
if(0>=s.length)return A.a(s,0)
a.d+=4
r[0]=a.l()
q.b=s[0]
return q},
p_(a){if(a.c-a.d<2)return!1
return A.x(a,null,0).m()===19778},
rF(a,b){var s,r,q,p,o=b==null?A.oZ(a):b,n=a.d,m=a.l(),l=a.l(),k=$.S()
k.$flags&2&&A.b(k)
k[0]=l
l=$.ac()
if(0>=l.length)return A.a(l,0)
s=l[0]
k[0]=a.l()
l=l[0]
r=a.m()
q=a.m()
p=a.l()
if(p>=14)A.G(A.l("Unsupported BMP compression type: "+p))
if(!(p<14))return A.a(B.as,p)
p=B.as[p]
a.l()
k[0]=a.l()
k[0]=a.l()
k=a.l()
a.l()
n=new A.aY(o,s,l,m,r,q,p,k,n)
n.eD(a,b)
return n},
al:function al(a,b){this.a=a
this.b=b},
jh:function jh(){this.b=$},
aY:function aY(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=h
_.ay=_.ax=_.at=_.as=$
_.ch=null
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=$
_.fy=i},
rE(a,b){return new A.hi(a,b==null?268435456:b)},
hi:function hi(a,b){var _=this
_.a=$
_.b=null
_.c=a
_.d=b},
jg:function jg(a,b){this.a=a
this.b=b},
je:function je(a,b){this.a=a
this.b=b},
jd:function jd(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
jo:function jo(a,b){var _=this
_.a=$
_.b=null
_.c=a
_.d=b},
H:function H(){},
jm:function jm(){},
jp:function jp(){},
ht:function ht(){},
eX:function eX(a,b,c,d){var _=this
_.r=a
_.w=b
_.x=c
_.b=_.a=0
_.c=d},
cp:function cp(a,b){this.a=a
this.b=b},
co:function co(a,b){this.a=a
this.b=b},
hu:function hu(){var _=this
_.w=_.r=_.f=_.d=_.c=_.b=_.a=$},
p8(a,b,c,d){var s,r
switch(a.a){case 1:return new A.hQ(c,b)
case 2:return new A.eY(c,d==null?1:d,b)
case 3:return new A.eY(c,d==null?16:d,b)
case 4:s=d==null?32:d
r=new A.hO(c,s,b)
r.ia(b,c,s)
return r
case 5:return new A.hP(c,d==null?16:d,b)
case 6:return new A.eX(c,d==null?32:d,!1,b)
case 7:return new A.eX(c,d==null?32:d,!0,b)
default:throw A.h(A.l("Invalid compression type: "+a.C(0)))}},
bb:function bb(a,b){this.a=a
this.b=b},
bE:function bE(){},
hM:function hM(){},
rY(a,b,c,d){var s,r,q,p,o,n,m,l
if(b===0){if(d!==0)throw A.h(A.l("Incomplete huffman data"))
return}s=a.d
r=a.l()
q=a.l()
a.d+=4
p=a.l()
o=!0
if(r<65537)o=q>=65537
if(o)throw A.h(A.l("Invalid huffman table size"))
a.d+=4
n=A.ae(65537,0,!1,t.p)
m=J.ay(16384,t.ho)
for(l=0;l<16384;++l)m[l]=new A.hv()
A.rZ(a,b-20,r,q,n)
if(p>8*(b-(a.d-s)))throw A.h(A.l("Error in header for Huffman-encoded data (invalid number of bits)."))
A.rV(n,r,q,m)
A.rX(n,m,a,p,q,d,c)},
rX(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j="Error in Huffman-encoded data (invalid code).",i=A.i([0,0],t.t),h=c.d+B.a.K(d+7,8)
for(s=b.length,r=0;c.d<h;){A.nG(i,c)
while(q=i[1],q>=14){p=B.a.ba(i[0],q-14)&16383
if(!(p<s))return A.a(b,p)
o=b[p]
p=o.a
if(p!==0){B.c.i(i,1,q-p)
r=A.nH(o.b,e,i,c,g,r,f)}else{if(o.c==null)throw A.h(A.l(j))
for(n=0;n<o.b;++n){q=o.c
if(!(n<q.length))return A.a(q,n)
q=q[n]
if(!(q<65537))return A.a(a,q)
m=a[q]&63
for(;;){q=i[1]
if(!(q<m&&c.d<h))break
A.nG(i,c)}if(q>=m){p=o.c
if(!(n<p.length))return A.a(p,n)
p=p[n]
if(!(p<65537))return A.a(a,p)
q-=m
if(a[p]>>>6===(B.a.ba(i[0],q)&B.a.P(1,m)-1)>>>0){B.c.i(i,1,q)
q=o.c
if(!(n<q.length))return A.a(q,n)
l=A.nH(q[n],e,i,c,g,r,f)
r=l
break}}}if(n===o.b)throw A.h(A.l(j))}}}k=8-d&7
B.c.i(i,0,B.a.j(i[0],k))
B.c.i(i,1,i[1]-k)
while(q=i[1],q>0){p=B.a.Y(i[0],14-q)&16383
if(!(p<s))return A.a(b,p)
o=b[p]
p=o.a
if(p!==0){B.c.i(i,1,q-p)
r=A.nH(o.b,e,i,c,g,r,f)}else throw A.h(A.l(j))}if(r!==f)throw A.h(A.l("Error in Huffman-encoded data (decoded data are shorter than expected)."))},
nH(a,b,c,d,e,f,g){var s,r,q,p,o,n,m="Error in Huffman-encoded data (decoded data are longer than expected)."
if(a===b){if(c[1]<8)A.nG(c,d)
B.c.i(c,1,c[1]-8)
s=B.a.ba(c[0],c[1])&255
if(f+s>g)throw A.h(A.l(m))
r=f-1
q=e.length
if(!(r>=0&&r<q))return A.a(e,r)
p=e[r]
for(r=e.$flags|0;o=s-1,s>0;s=o,f=n){n=f+1
r&2&&A.b(e)
if(!(f<q))return A.a(e,f)
e[f]=p}}else{if(f<g){e.toString
n=f+1
e.$flags&2&&A.b(e)
if(!(f<e.length))return A.a(e,f)
e[f]=a}else throw A.h(A.l(m))
f=n}return f},
rV(a,b,c,d){var s,r,q,p,o,n,m,l,k="Error in Huffman-encoded data (invalid code table entry)."
for(s=d.length,r=t.t;b<=c;++b){if(!(b<65537))return A.a(a,b)
q=a[b]
p=q>>>6
o=q&63
if(B.a.a9(p,o)!==0)throw A.h(A.l(k))
if(o>14){q=B.a.a3(p,o-14)
if(!(q<s))return A.a(d,q)
n=d[q]
if(n.a!==0)throw A.h(A.l(k));++n.b
q=n.c
if(q==null){q=A.i([],r)
n.slP(q)}B.c.B(q,b)}else if(o!==0){q=14-o
m=B.a.Y(p,q)
if(!(m<s))return A.a(d,m)
for(l=B.a.Y(1,q);l>0;--l,++m){if(!(m<s))return A.a(d,m)
n=d[m]
if(n.a!==0||n.c!=null)throw A.h(A.l(k))
n.a=o
n.b=b}}}},
rZ(a,b,c,d,e){var s,r,q,p,o,n="Error in Huffman-encoded data (unexpected end of code table data).",m="Error in Huffman-encoded data (code table is longer than expected).",l=a.d,k=A.i([0,0],t.t)
for(s=d+1;c<=d;++c){if(a.d-l>b)throw A.h(A.l(n))
r=A.p9(6,k,a)
B.c.i(e,c,r)
if(r===63){if(a.d-l>b)throw A.h(A.l(n))
q=A.p9(8,k,a)+6
if(c+q>s)throw A.h(A.l(m))
for(;p=q-1,q!==0;q=p,c=o){o=c+1
B.c.i(e,c,0)}--c}else if(r>=59){q=r-59+2
if(c+q>s)throw A.h(A.l(m))
for(;p=q-1,q!==0;q=p,c=o){o=c+1
B.c.i(e,c,0)}--c}}A.rW(e)},
rW(a){var s,r,q,p,o,n=A.ae(59,0,!1,t.p)
for(s=0;s<65537;++s){r=a[s]
if(!(r<59))return A.a(n,r)
B.c.i(n,r,n[r]+1)}for(q=0,s=58;s>0;--s,q=p){p=q+n[s]>>>1
B.c.i(n,s,q)}for(s=0;s<65537;++s){o=a[s]
if(o>0){if(!(o<59))return A.a(n,o)
r=n[o]
B.c.i(n,o,r+1)
B.c.i(a,s,(o|r<<6)>>>0)}}},
nG(a,b){B.c.i(a,0,(a[0]<<8|b.G())>>>0)
B.c.i(a,1,a[1]+8>>>0)},
p9(a,b,c){var s
while(s=b[1],s<a){B.c.i(b,0,(b[0]<<8|J.d(c.a,c.d++))>>>0)
B.c.i(b,1,b[1]+8>>>0)}B.c.i(b,1,s-a)
return(B.a.ba(b[0],b[1])&B.a.P(1,a)-1)>>>0},
hv:function hv(){this.b=this.a=0
this.c=null},
t_(a){var s
if(a.length<8)return!1
s=A.v(a,!1,null,0)
if(s.l()!==20000630)return!1
if(s.G()!==2)return!1
if((s.bm()&4294967289)>>>0!==0)return!1
return!0},
hw:function hw(a){var _=this
_.b=_.a=0
_.c=a
_.d=null
_.e=$},
pq(a,b,c,d){var s=new A.hN(a,A.i([],t.a_),A.F(t.N,t.iW),B.bd,b)
s.hY(a,b,c,d)
return s},
eC:function eC(){},
jG:function jG(a,b){this.a=a
this.b=b},
hN:function hN(a,b,c,d,e){var _=this
_.a=a
_.b=null
_.c=b
_.d=0
_.e=c
_.r=$
_.x=_.w=0
_.at=$
_.ax=d
_.ay=null
_.ch=$
_.CW=null
_.cx=0
_.cy=null
_.db=e
_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=null
_.k2=$
_.k3=null},
hO:function hO(a,b,c){var _=this
_.r=null
_.w=a
_.x=b
_.y=$
_.z=null
_.b=_.a=0
_.c=c},
fT:function fT(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=$},
hP:function hP(a,b,c){var _=this
_.r=a
_.w=b
_.x=null
_.b=_.a=0
_.c=c},
hQ:function hQ(a,b){var _=this
_.r=null
_.w=a
_.b=_.a=0
_.c=b},
eY:function eY(a,b,c){var _=this
_.w=a
_.x=b
_.y=null
_.b=_.a=0
_.c=c},
jC:function jC(a){this.a=null
this.b=a},
jF:function jF(a,b){this.a=a
this.b=b},
jD:function jD(a,b){this.a=a
this.b=b},
jE:function jE(a,b,c){this.a=a
this.b=b
this.c=c},
pb(a){var s=new Uint8Array(a*3)
return new A.eI(A.t8(a),a,null,new A.b_(s,a,3))},
t7(a){return new A.eI(a.a,a.b,a.c,A.pD(a.d))},
t8(a){var s
for(s=1;s<=8;++s)if(B.a.P(1,s)>=a)return s
return 0},
eI:function eI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eJ:function eJ(){},
hR:function hR(){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=null
_.r=80
_.w=0
_.x=-1
_.y=$},
c0:function c0(a){var _=this
_.b=_.a=0
_.e=_.c=null
_.r=a},
jM:function jM(a){var _=this
_.a=null
_.b=a
_.f=_.e=_.d=_.c=0
_.r=null
_.w=0
_.x=null
_.z=_.y=$
_.Q=null
_.as=0
_.at=null
_.ch=_.ay=_.ax=0
_.CW=null
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=0},
jP:function jP(a,b){this.a=a
this.b=b},
jN:function jN(a,b){this.a=a
this.b=b},
jO:function jO(a,b,c){this.a=a
this.b=b
this.c=c},
pd(a){var s,r,q,p
if(a.m()!==0)return null
s=a.m()
if(s>=3)return null
if(B.dt[s]===B.bf)return null
r=a.m()
q=J.aQ(r,t.aw)
for(p=0;p<r;++p){J.d(a.a,a.d++)
J.d(a.a,a.d++)
J.d(a.a,a.d++);++a.d
a.m()
a.m()
q[p]=new A.hG(a.l(),a.l())}return new A.hF(r,q)},
dC:function dC(a,b){this.a=a
this.b=b},
hF:function hF(a,b){this.d=a
this.e=b},
hG:function hG(a,b){this.d=a
this.e=b},
hE:function hE(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=h
_.ay=_.ax=_.at=_.as=$
_.ch=null
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=$
_.fy=i},
jR:function jR(a){this.b=this.a=null
this.c=a},
jU:function jU(a,b){this.a=a
this.b=b},
jT:function jT(a,b,c){this.a=a
this.b=b
this.c=c},
jS:function jS(a,b){this.a=a
this.b=b},
p6(a,b,c,d,e){var s,r
if(a===b)s=0
else s=a===1&&b===4?2:1
if(c===d)r=0
else r=c===1&&d===4?2:1
return new A.hn(e,s,r)},
hn:function hn(a,b,c){this.e=a
this.f=b
this.r=c},
qK(a){var s=$.rn(),r=s.a,q=r.get(a)
if(q==null){q=A.vn(a)
s.$ti.n("1?").a(q)
r.set(a,q)
s=q}else s=q
return s},
vn(a){var s,r,q,p,o,n=new Uint16Array(512)
for(s=0;s<512;++s)for(r=a,q=1;q<=9;++q){p=r[B.a.a3(s,9-q)&1]
if(p instanceof A.dB){o=p.a
if(!(s<512))return A.a(n,s)
n[s]=(q<<8|o)>>>0
break}if(!(p instanceof A.cr))break
r=p.a}return n},
c1:function c1(){},
cr:function cr(a){this.a=a},
dB:function dB(a){this.a=a},
pv(a){var s,r=a.f.e
r.toString
s=a.b
s=new A.ka(a,B.a.a1(r+s-1,s),a.gdD())
s.ib(a)
return s},
qI(a){var s,r=A.pv(a)
r.hF(0,a.gdD())
s=r.d
s===$&&A.c()
return s},
ka:function ka(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.w=_.r=_.f=_.e=_.d=$},
k5:function k5(){this.d=null},
c4:function c4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.x=_.w=_.r=_.f=_.e=$
_.y=!1
_.z=0
_.ay=_.ax=_.at=_.as=_.Q=$},
k6(){var s,r,q,p,o=A.ae(4,null,!1,t.jH),n=A.i([],t.gU),m=t.iM,l=J.hY(0,m)
m=J.hY(0,m)
s=A.i([],t.an)
r=A.i([],t.hg)
q=new Uint8Array(64)
p=new Int32Array(64)
return new A.i0(new A.bZ(A.F(t.N,t.P)),o,n,l,m,s,r,q,p,new Int16Array(0))},
tk(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=B.a.a1(8,b),e=f*f
for(s=e>>>1,r=c.length,q=0;q<b;++q){p=d+q
if(!(p<r))return A.a(c,p)
p=c[p]
p.toString
for(o=p.$flags|0,n=q*f,m=0;m<b;++m){for(l=m*f,k=0,j=0;j<f;++j){i=(n+j)*8+l
for(h=0;h<f;++h){g=i+h
if(!(g<64))return A.a(a,g)
k+=a[g]}}l=a0+m
g=B.a.a1(k+s,e)
o&2&&A.b(p)
if(!(l<p.length))return A.a(p,l)
p[l]=g}}},
i0:function i0(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=0
_.b=1
_.d=_.c=$
_.x=_.r=_.f=_.e=null
_.y=a
_.z=b
_.Q=c
_.as=d
_.at=e
_.ax=f
_.ay=!1
_.ch=0
_.cx=_.CW=!1
_.cy=null
_.db=g
_.dx=h
_.dy=i
_.fr=j},
ec:function ec(a){this.a=a
this.b=0},
iU:function iU(){},
i1:function i1(a,b){var _=this
_.e=_.d=_.c=_.b=null
_.r=_.f=0
_.x=_.w=$
_.y=a
_.z=b},
i2:function i2(){this.b=this.a=0},
kb:function kb(){this.r=this.f=$},
i3:function i3(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.f=$
_.r=null
_.y=c
_.z=d
_.Q=e
_.as=f
_.at=g
_.ax=h
_.ay=null
_.cx=_.CW=_.ch=0
_.cy=!1
_.dx=_.db=0
_.dy=$
_.fr=i},
pu(){return new A.k7(268435456)},
k7:function k7(a){this.a=a},
k9:function k9(a,b){this.a=a
this.b=b},
k8:function k8(a,b,c){this.a=a
this.b=b
this.c=c},
kv:function kv(a,b,c){this.a=a
this.b=b
this.c=c},
dX:function dX(a,b){this.a=a
this.b=b},
fq:function fq(a,b){this.a=a
this.b=b},
fr:function fr(){},
hS:function hS(a,b,c,d,e,f,g,h,i){var _=this
_.y=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
c9:function c9(a,b){this.a=a
this.b=b},
ih:function ih(){},
hT:function hT(a,b,c){var _=this
_.c=_.b=_.a=0
_.d=-1
_.r=_.f=0
_.z=_.x=_.w=null
_.Q=""
_.at=null
_.ax=a
_.CW=1
_.cy=b
_.db=c},
pF(a){var s=t.N,r=A.i([],t.fi),q=A.i([],t.t),p=a==null?268435456:a
return new A.kr(new A.hT(A.F(s,s),r,q),p)},
kr:function kr(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=0
_.e=$
_.f=0},
ku:function ku(a,b){this.a=a
this.b=b},
ks:function ks(a,b){this.a=a
this.b=b},
kt:function kt(a,b,c){this.a=a
this.b=b
this.c=c},
iY:function iY(){},
tK(a){var s,r,q=new A.aw(a),p=!q.gW(q)&&a.length<=79&&q.gdl(q)!==32&&q.gdq(q)!==32,o=a.length,n=0
for(;;){if(!(p&&n<o))break
if(!(n<o))return A.a(a,n)
s=a.charCodeAt(n)
if(!(s>=32&&s<=126))r=s>=161&&s<=255
else r=!0
if(r){if(s===32){r=n-1
if(!(r>=0))return A.a(a,r)
r=a.charCodeAt(r)===32}else r=!1
p=!r}else p=!1;++n}return p?a:"ICC_PROFILE"},
tI(a,b,c){var s,r,q,p=a.length,o=c.$flags|0,n=1,m=0
for(;;){if(!(m<b&&m<p))break
s=n+1
if(!(m<p))return A.a(a,m)
r=a[m]
o&2&&A.b(c)
if(!(n<c.length))return A.a(c,n)
c[n]=r;++m
n=s}for(m=b;m<p;++m,n=s){s=n+1
r=a[m]
q=m-b
if(!(q>=0))return A.a(a,q)
q=a[q]
o&2&&A.b(c)
if(!(n<c.length))return A.a(c,n)
c[n]=r-q}},
tJ(a,b,c){var s,r,q,p,o,n,m,l=a.length
for(s=b.length,r=c.$flags|0,q=1,p=0;p<l;++p,q=o){o=q+1
n=a[p]
if(!(p<s))return A.a(b,p)
m=b[p]
r&2&&A.b(c)
if(!(q<c.length))return A.a(c,q)
c[q]=n-m}},
tG(a,b,c,d){var s,r,q,p,o=a.length,n=b.length,m=d.$flags|0,l=1,k=0
for(;;){if(!(k<c&&k<o))break
s=l+1
if(!(k<o))return A.a(a,k)
r=a[k]
if(!(k<n))return A.a(b,k)
q=b[k]
m&2&&A.b(d)
if(!(l<d.length))return A.a(d,l)
d[l]=r-(q>>>1);++k
l=s}for(k=c;k<o;++k,l=s){s=l+1
r=a[k]
q=k-c
if(!(q>=0))return A.a(a,q)
q=a[q]
if(!(k<n))return A.a(b,k)
p=b[k]
m&2&&A.b(d)
if(!(l<d.length))return A.a(d,l)
d[l]=r-(q+p>>>1)}},
tH(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=a.length,i=b.length,h=d.$flags|0,g=1,f=0
for(;;){if(!(f<c&&f<j))break
s=g+1
if(!(f<j))return A.a(a,f)
r=a[f]
if(!(f<i))return A.a(b,f)
q=b[f]
h&2&&A.b(d)
if(!(g<d.length))return A.a(d,g)
d[g]=r-q;++f
g=s}for(f=c;f<j;++f,g=s){r=f-c
if(!(r>=0))return A.a(a,r)
p=a[r]
if(!(f<i))return A.a(b,f)
o=b[f]
if(!(r<i))return A.a(b,r)
n=b[r]
m=o-n
l=p-n
k=m+l
if(m<0)m=-m
if(l<0)l=-l
if(k<0)k=-k
s=g+1
r=a[f]
if(m<=l&&m<=k)q=p
else q=l<=k?o:n
h&2&&A.b(d)
if(!(g<d.length))return A.a(d,g)
d[g]=r-q}},
ig:function ig(a,b){this.a=a
this.b=b},
kw:function kw(a,b,c){var _=this
_.a=null
_.b=a
_.c=0
_.d=b
_.e=$
_.f=0
_.r=!1
_.w=null
_.z=c},
ky:function ky(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kx:function kx(a,b,c){this.a=a
this.b=b
this.c=c},
ca:function ca(a,b){this.a=a
this.b=b},
cb:function cb(a){this.b=this.a=0
this.e=a},
kz:function kz(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b},
kC:function kC(a,b,c){this.a=a
this.b=b
this.c=c},
kD:function kD(a,b){this.a=a
this.b=b},
kB:function kB(a,b){this.a=a
this.b=b},
kA:function kA(){},
ij:function ij(){this.a=null},
ik:function ik(){this.a=null},
bw:function bw(){},
io:function io(){this.a=null},
ip:function ip(){this.a=null},
is:function is(){this.a=null},
it:function it(){this.a=null},
ft:function ft(a){this.b=a},
ir:function ir(){},
kH:function kH(){var _=this
_.w=_.r=_.f=_.e=$},
cW:function cW(a){this.a=a
this.c=null},
pL(a,b){var s=A.i([],t.k9),r=b==null?268435456:b
r=new A.il(s,A.F(t.p,t.ok),a.length,r)
r.ie(a,b)
return r},
o4(a,b,c,d){var s=a/255,r=b/255,q=c/255,p=d/255,o=r*(1-q),n=s*(1-p)
return B.b.h(B.b.H((2*s<q?2*r*s+o+n:p*q-2*(q-s)*(p-r)+o+n)*255,0,255))},
kM(a,b){if(b===0)return 0
return B.a.h(B.a.H(B.b.h(255*(1-(1-a/255)/(b/255))),0,255))},
kO(a,b){return B.a.h(B.a.H(a+b-255,0,255))},
o6(a,b){return B.a.h(B.a.H(255-(255-b)*(255-a),0,255))},
kN(a,b){if(b===255)return 255
return B.b.h(B.b.H(a/255/(1-b/255)*255,0,255))},
o7(a,b){var s=a/255,r=b/255,q=1-r
return B.b.a8(255*(q*r*s+r*(1-q*(1-s))))},
o2(a,b){var s=b/255,r=a/255
if(r<0.5)return B.b.a8(510*s*r)
else return B.b.a8(255*(1-2*(1-s)*(1-r)))},
o8(a,b){if(b<128)return A.kM(a,2*b)
else return A.kN(a,2*(b-128))},
o3(a,b){var s
if(b<128)return A.kO(a,2*b)
else{s=2*(b-128)
return s+a>255?255:a+s}},
o5(a,b){return b<128?Math.min(a,2*b):Math.max(a,2*(b-128))},
o1(a,b){return B.b.a8(b+a-2*b*a/255)},
aK(a,b,c){var s,r,q
if(a==null)s=0
else{s=a.length
if(c===1){if(!(b>=0&&b<s))return A.a(a,b)
s=a[b]}else{if(!(b>=0&&b<s))return A.a(a,b)
r=a[b]
q=b+1
if(!(q<s))return A.a(a,q)
q=(r<<8|a[q])>>>8
s=q}}return s},
pM(b7,b8,b9,c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=A.F(t.p,t.dS)
for(s=c1.length,r=0;q=c1.length,r<q;c1.length===s||(0,A.P)(c1),++r){p=c1[r]
b6.i(0,p.a,p)}if(b8===8)o=1
else o=b8===16?2:-1
n=A.W(b5,b5,B.f,0,B.i,c0,b5,0,q,b5,B.f,b9,!1)
if(o===-1)throw A.h(A.l("PSD: unsupported bit depth: "+A.y(b8)))
m=b6.k(0,0)
l=b6.k(0,1)
k=b6.k(0,2)
j=b6.k(0,-1)
i=A.i([0,0,0],t.t)
h=-o
for(s=n.a,s=s.gE(s),g=q>=5,f=q===4,e=q>=2,q=q>=4;s.D();){d=s.gJ()
h+=o
switch(b7){case B.cg:d.sq(A.aK(m.c,h,o))
d.sv(A.aK(l.c,h,o))
d.su(A.aK(k.c,h,o))
d.sA(q?A.aK(j.c,h,o):255)
if(d.gA()!==0){d.sq((d.gq()+d.gA()-255)*255/d.gA())
d.sv((d.gv()+d.gA()-255)*255/d.gA())
d.su((d.gu()+d.gA()-255)*255/d.gA())}break
case B.ci:c=A.aK(m.c,h,o)
b=A.aK(l.c,h,o)
a=A.aK(k.c,h,o)
a0=q?A.aK(j.c,h,o):255
a1=((c*100>>>8)+16)/116
a2=(b-128)/500+a1
a3=a1-(a-128)/200
a4=Math.pow(a1,3)
a1=a4>0.008856?a4:(a1-0.13793103448275862)/7.787
a5=Math.pow(a2,3)
a2=a5>0.008856?a5:(a2-0.13793103448275862)/7.787
a6=Math.pow(a3,3)
a3=a6>0.008856?a6:(a3-0.13793103448275862)/7.787
a2=a2*95.047/100
a1=a1*100/100
a3=a3*108.883/100
a7=a2*3.240454836+a1*-1.53713885+a3*-0.498531547
a8=a2*-0.96926639+a1*1.87601093+a3*0.041556082
a9=a2*0.05564342+a1*-0.20402585+a3*1.05722516
a7=a7>0.0031308?1.055*Math.pow(a7,0.4166666666666667)-0.055:12.92*a7
a8=a8>0.0031308?1.055*Math.pow(a8,0.4166666666666667)-0.055:12.92*a8
a9=a9>0.0031308?1.055*Math.pow(a9,0.4166666666666667)-0.055:12.92*a9
b0=[B.b.a8(B.b.H(a7*255,0,255)),B.b.a8(B.b.H(a8*255,0,255)),B.b.a8(B.b.H(a9*255,0,255))]
d.sq(b0[0])
d.sv(b0[1])
d.su(b0[2])
d.sA(a0)
break
case B.cf:b1=A.aK(m.c,h,o)
a0=e?A.aK(j.c,h,o):255
d.sq(b1)
d.sv(b1)
d.su(b1)
d.sA(a0)
break
case B.ch:b2=A.aK(m.c,h,o)
b3=A.aK(l.c,h,o)
a1=A.aK(k.c,h,o)
b4=A.aK(b6.k(0,f?-1:3).c,h,o)
a0=g?A.aK(j.c,h,o):255
A.qD(255-b2,255-b3,255-a1,255-b4,i)
d.sq(i[0])
d.sv(i[1])
d.su(i[2])
d.sA(a0)
break
default:throw A.h(A.l("Unhandled color mode: "+A.y(b7)))}}return n},
bh:function bh(a,b){this.a=a
this.b=b},
il:function il(a,b,c,d){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=$
_.r=_.f=null
_.w=a
_.x=$
_.y=null
_.z=b
_.as=$
_.at=c
_.ch=_.ay=_.ax=null
_.CW=d},
im:function im(){},
iq:function iq(a,b,c){var _=this
_.b=_.a=null
_.f=_.e=_.d=_.c=$
_.r=null
_.as=_.y=_.w=$
_.ay=a
_.ch=b
_.cx=null
_.cy=c},
tR(a,b){var s
switch(a){case"lsct":s=b.c-b.d
b.l()
if(s>=12){if(b.al(4)!=="8BIM")A.G(A.l("Invalid key in layer additional data"))
b.al(4)}if(s>=16)b.l()
return new A.ir()
default:return new A.ft(b)}},
dZ:function dZ(){},
kI:function kI(a){this.a=null
this.b=a},
kK:function kK(a,b,c){this.a=a
this.b=b
this.c=c},
kL:function kL(a,b){this.a=a
this.b=b},
kJ:function kJ(a,b){this.a=a
this.b=b},
iu:function iu(){},
e0:function e0(a,b,c){this.a=a
this.b=b
this.c=c},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e_:function e_(){var _=this
_.Q=_.z=_.y=_.f=_.d=_.b=_.a=0},
cX:function cX(a){var _=this
_.b=0
_.c=a
_.Q=_.r=_.f=0},
fu:function fu(){this.y=this.b=this.a=0},
bK(a,b){var s,r=a>>>8
if(!(r<256))return A.a(B.V,r)
r=B.V[r]
s=b>>>8
if(!(s<256))return A.a(B.V,s)
return(r<<17|B.V[s]<<16|B.V[a&255]<<1|B.V[b&255])>>>0},
b0:function b0(a){var _=this
_.a=a
_.b=0
_.c=!1
_.d=0
_.e=!1
_.f=0
_.r=!1},
kP:function kP(a){this.b=this.a=null
this.c=a},
kS:function kS(a,b){this.a=a
this.b=b},
kQ:function kQ(a,b){this.a=a
this.b=b},
kR:function kR(a,b,c){this.a=a
this.b=b
this.c=c},
fA:function fA(a){var _=this
_.b=_.a=0
_.c=a
_.Q=_.z=_.y=_.x=_.f=_.e=0
_.as=null
_.ax=0},
aD:function aD(a,b){this.a=a
this.b=b},
l_:function l_(a){this.a=null
this.b=$
this.c=a},
l1:function l1(a,b,c){this.a=a
this.b=b
this.c=c},
l2:function l2(a,b){this.a=a
this.b=b},
l0:function l0(a,b){this.a=a
this.b=b},
l3:function l3(a){this.a=a
this.c=this.b=0},
iB:function iB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=e},
oa(a,b,c){var s=new A.l8(b,a),r=t.I
s.e=A.ae(b,null,!1,r)
s.f=A.ae(b,null,!1,r)
return s},
l8:function l8(a,b){var _=this
_.a=a
_.c=b
_.d=0
_.f=_.e=null
_.r=$
_.x=_.w=null
_.y=0
_.z=2
_.as=0
_.at=null},
iC:function iC(a,b,c,d){var _=this
_.a=a
_.c=_.b=0
_.d=b
_.w=_.r=_.f=_.e=1
_.x=c
_.y=d
_.z=!1
_.Q=1
_.at=_.as=$
_.ch=_.ay=0
_.cx=_.CW=null
_.db=_.cy=$
_.dy=1
_.fx=_.fr=0
_.id=null
_.k3=_.k2=_.k1=$},
cZ:function cZ(a,b){this.a=a
this.b=b},
af:function af(a,b){this.a=a
this.b=b},
b3:function b3(a,b){this.a=a
this.b=b},
d_:function d_(a){var _=this
_.b=_.a=0
_.d=null
_.f=a},
py(){return new A.kj(new Uint8Array(4096))},
kj:function kj(a){var _=this
_.a=9
_.d=_.c=_.b=0
_.w=_.r=_.f=_.e=$
_.x=a
_.z=_.y=$
_.Q=null
_.as=$},
l4:function l4(a){var _=this
_.b=_.a=null
_.c=$
_.d=a},
l7:function l7(a,b){this.a=a
this.b=b},
l5:function l5(a,b){this.a=a
this.b=b},
l6:function l6(a,b,c){this.a=a
this.b=b
this.c=c},
oc(a,b){var s=new Int32Array(4),r=new Int32Array(4),q=new Int8Array(4),p=new Int8Array(4),o=A.ae(8,null,!1,t.nX),n=A.ae(4,null,!1,t.nk)
return new A.lc(a,b,new A.lk(),new A.ln(),new A.le(s,r),new A.lp(q,p),o,n,new Uint8Array(4))},
aE(a,b,c,d,e){var s,r,q,p,o
for(s=c.length,r=a.$flags|0,q=0;q<e;++q){p=b+q
o=d+q
if(!(o>=0&&o<s))return A.a(c,o)
o=c[o]
r&2&&A.b(a)
if(!(p>=0&&p<a.length))return A.a(a,p)
a[p]=o}},
pY(a,b,c){if(c===0)if(a===0)return b===0?6:5
else return b===0?4:0
return c},
lc:function lc(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=$
_.d=null
_.e=$
_.f=c
_.r=d
_.w=e
_.x=f
_.as=_.Q=_.z=_.y=0
_.ax=_.at=null
_.ch=_.ay=$
_.cx=_.CW=null
_.cy=$
_.db=g
_.dy=h
_.fr=null
_.fy=_.fx=$
_.go=null
_.id=i
_.p3=_.p2=_.p1=_.ok=_.k4=_.k3=_.k2=_.k1=$
_.R8=_.p4=null
_.x2=_.x1=_.to=_.ry=_.rx=_.RG=$
_.xr=null
_.y2=_.y1=0
_.bz=$
_.aI=null
_.bA=$
_.bJ=_.c4=null
_.aO=$},
pW(a){var s=new A.fD(a)
s.b=254
s.c=0
s.d=-8
return s},
fD:function fD(a){var _=this
_.a=a
_.d=_.c=_.b=$
_.e=!1},
E(a,b,c){return B.a.aS(B.a.j(a+2*b+c+2,2),32)},
ud(a){var s,r=A.i([A.E(J.d(a.a,a.d+-33),J.d(a.a,a.d+-32),J.d(a.a,a.d+-31)),A.E(J.d(a.a,a.d+-32),J.d(a.a,a.d+-31),J.d(a.a,a.d+-30)),A.E(J.d(a.a,a.d+-31),J.d(a.a,a.d+-30),J.d(a.a,a.d+-29)),A.E(J.d(a.a,a.d+-30),J.d(a.a,a.d+-29),J.d(a.a,a.d+-28))],t.t)
for(s=0;s<4;++s)a.dr(s*32,4,r)},
u5(a){var s=J.d(a.a,a.d+-33),r=J.d(a.a,a.d+-1),q=J.d(a.a,a.d+31),p=J.d(a.a,a.d+63),o=J.d(a.a,a.d+95),n=A.x(a,null,0),m=n.dB(),l=A.E(s,r,q)
m.$flags&2&&A.b(m)
if(0>=m.length)return A.a(m,0)
m[0]=16843009*l
n.d+=32
l=n.dB()
m=A.E(r,q,p)
l.$flags&2&&A.b(l)
if(0>=l.length)return A.a(l,0)
l[0]=16843009*m
n.d+=32
m=n.dB()
l=A.E(q,p,o)
m.$flags&2&&A.b(m)
if(0>=m.length)return A.a(m,0)
m[0]=16843009*l
n.d+=32
l=n.dB()
m=A.E(p,o,o)
l.$flags&2&&A.b(l)
if(0>=l.length)return A.a(l,0)
l[0]=16843009*m},
u3(a){var s,r,q,p
for(s=4,r=0;r<4;++r)s+=J.d(a.a,a.d+(r-32))+J.d(a.a,a.d+(-1+r*32))
s=B.a.j(s,3)
for(r=0;r<4;++r){q=a.a
p=a.d+r*32
J.eq(q,p,p+4,s)}},
od(a,b){var s,r,q,p,o,n,m=255-J.d(a.a,a.d+-33)
for(s=0,r=0;r<b;++r){q=m+J.d(a.a,a.d+(s-1))
for(p=0;p<b;++p){o=$.nA()
n=q+J.d(a.a,a.d+(-32+p))
if(!(n>=0&&n<766))return A.a(o,n)
n=o[n]
J.a2(a.a,a.d+(s+p),n)}s+=32}},
ub(a){A.od(a,4)},
uc(a){A.od(a,8)},
ua(a){A.od(a,16)},
u9(a){var s,r=J.d(a.a,a.d+-1),q=J.d(a.a,a.d+31),p=J.d(a.a,a.d+63),o=J.d(a.a,a.d+95),n=J.d(a.a,a.d+-33),m=J.d(a.a,a.d+-32),l=J.d(a.a,a.d+-31),k=J.d(a.a,a.d+-30),j=J.d(a.a,a.d+-29)
a.i(0,96,A.E(q,p,o))
s=A.E(r,q,p)
a.i(0,97,s)
a.i(0,64,s)
s=A.E(n,r,q)
a.i(0,98,s)
a.i(0,65,s)
a.i(0,32,s)
s=A.E(m,n,r)
a.i(0,99,s)
a.i(0,66,s)
a.i(0,33,s)
a.i(0,0,s)
s=A.E(l,m,n)
a.i(0,67,s)
a.i(0,34,s)
a.i(0,1,s)
s=A.E(k,l,m)
a.i(0,35,s)
a.i(0,2,s)
a.i(0,3,A.E(j,k,l))},
u8(a){var s,r=J.d(a.a,a.d+-32),q=J.d(a.a,a.d+-31),p=J.d(a.a,a.d+-30),o=J.d(a.a,a.d+-29),n=J.d(a.a,a.d+-28),m=J.d(a.a,a.d+-27),l=J.d(a.a,a.d+-26),k=J.d(a.a,a.d+-25)
a.i(0,0,A.E(r,q,p))
s=A.E(q,p,o)
a.i(0,32,s)
a.i(0,1,s)
s=A.E(p,o,n)
a.i(0,64,s)
a.i(0,33,s)
a.i(0,2,s)
s=A.E(o,n,m)
a.i(0,96,s)
a.i(0,65,s)
a.i(0,34,s)
a.i(0,3,s)
s=A.E(n,m,l)
a.i(0,97,s)
a.i(0,66,s)
a.i(0,35,s)
s=A.E(m,l,k)
a.i(0,98,s)
a.i(0,67,s)
a.i(0,99,A.E(l,k,k))},
uf(a){var s=J.d(a.a,a.d+-1),r=J.d(a.a,a.d+31),q=J.d(a.a,a.d+63),p=J.d(a.a,a.d+-33),o=J.d(a.a,a.d+-32),n=J.d(a.a,a.d+-31),m=J.d(a.a,a.d+-30),l=J.d(a.a,a.d+-29),k=B.a.aS(B.a.j(p+o+1,1),32)
a.i(0,65,k)
a.i(0,0,k)
k=B.a.aS(B.a.j(o+n+1,1),32)
a.i(0,66,k)
a.i(0,1,k)
k=B.a.aS(B.a.j(n+m+1,1),32)
a.i(0,67,k)
a.i(0,2,k)
a.i(0,3,B.a.aS(B.a.j(m+l+1,1),32))
a.i(0,96,A.E(q,r,s))
a.i(0,64,A.E(r,s,p))
k=A.E(s,p,o)
a.i(0,97,k)
a.i(0,32,k)
k=A.E(p,o,n)
a.i(0,98,k)
a.i(0,33,k)
k=A.E(o,n,m)
a.i(0,99,k)
a.i(0,34,k)
a.i(0,35,A.E(n,m,l))},
ue(a){var s,r=J.d(a.a,a.d+-32),q=J.d(a.a,a.d+-31),p=J.d(a.a,a.d+-30),o=J.d(a.a,a.d+-29),n=J.d(a.a,a.d+-28),m=J.d(a.a,a.d+-27),l=J.d(a.a,a.d+-26),k=J.d(a.a,a.d+-25)
a.i(0,0,B.a.aS(B.a.j(r+q+1,1),32))
s=B.a.aS(B.a.j(q+p+1,1),32)
a.i(0,64,s)
a.i(0,1,s)
s=B.a.aS(B.a.j(p+o+1,1),32)
a.i(0,65,s)
a.i(0,2,s)
s=B.a.aS(B.a.j(o+n+1,1),32)
a.i(0,66,s)
a.i(0,3,s)
a.i(0,32,A.E(r,q,p))
s=A.E(q,p,o)
a.i(0,96,s)
a.i(0,33,s)
s=A.E(p,o,n)
a.i(0,97,s)
a.i(0,34,s)
s=A.E(o,n,m)
a.i(0,98,s)
a.i(0,35,s)
a.i(0,67,A.E(n,m,l))
a.i(0,99,A.E(m,l,k))},
u6(a){var s,r=J.d(a.a,a.d+-1),q=J.d(a.a,a.d+31),p=J.d(a.a,a.d+63),o=J.d(a.a,a.d+95)
a.i(0,0,B.a.aS(B.a.j(r+q+1,1),32))
s=B.a.aS(B.a.j(q+p+1,1),32)
a.i(0,32,s)
a.i(0,2,s)
s=B.a.aS(B.a.j(p+o+1,1),32)
a.i(0,64,s)
a.i(0,34,s)
a.i(0,1,A.E(r,q,p))
s=A.E(q,p,o)
a.i(0,33,s)
a.i(0,3,s)
s=A.E(p,o,o)
a.i(0,65,s)
a.i(0,35,s)
a.i(0,99,o)
a.i(0,98,o)
a.i(0,97,o)
a.i(0,96,o)
a.i(0,66,o)
a.i(0,67,o)},
u4(a){var s=J.d(a.a,a.d+-1),r=J.d(a.a,a.d+31),q=J.d(a.a,a.d+63),p=J.d(a.a,a.d+95),o=J.d(a.a,a.d+-33),n=J.d(a.a,a.d+-32),m=J.d(a.a,a.d+-31),l=J.d(a.a,a.d+-30),k=B.a.aS(B.a.j(s+o+1,1),32)
a.i(0,34,k)
a.i(0,0,k)
k=B.a.aS(B.a.j(r+s+1,1),32)
a.i(0,66,k)
a.i(0,32,k)
k=B.a.aS(B.a.j(q+r+1,1),32)
a.i(0,98,k)
a.i(0,64,k)
a.i(0,96,B.a.aS(B.a.j(p+q+1,1),32))
a.i(0,3,A.E(n,m,l))
a.i(0,2,A.E(o,n,m))
k=A.E(s,o,n)
a.i(0,35,k)
a.i(0,1,k)
k=A.E(r,s,o)
a.i(0,67,k)
a.i(0,33,k)
k=A.E(q,r,s)
a.i(0,99,k)
a.i(0,65,k)
a.i(0,97,A.E(p,q,r))},
uq(a){var s
for(s=0;s<16;++s)a.ck(s*32,16,a,-32)},
uo(a){var s,r,q,p,o
for(s=0,r=16;r>0;--r){q=J.d(a.a,a.d+(s-1))
p=a.a
o=a.d+s
J.eq(p,o,o+16,q)
s+=32}},
li(a,b){var s,r,q
for(s=0;s<16;++s){r=b.a
q=b.d+s*32
J.eq(r,q,q+16,a)}},
ug(a){var s,r
for(s=16,r=0;r<16;++r)s+=J.d(a.a,a.d+(-1+r*32))+J.d(a.a,a.d+(r-32))
A.li(B.a.j(s,5),a)},
ui(a){var s,r
for(s=8,r=0;r<16;++r)s+=J.d(a.a,a.d+(-1+r*32))
A.li(B.a.j(s,4),a)},
uh(a){var s,r
for(s=8,r=0;r<16;++r)s+=J.d(a.a,a.d+(r-32))
A.li(B.a.j(s,4),a)},
uj(a){A.li(128,a)},
ur(a){var s
for(s=0;s<8;++s)a.ck(s*32,8,a,-32)},
up(a){var s,r,q,p,o
for(s=0,r=0;r<8;++r){q=J.d(a.a,a.d+(s-1))
p=a.a
o=a.d+s
J.eq(p,o,o+8,q)
s+=32}},
lj(a,b){var s,r,q
for(s=0;s<8;++s){r=b.a
q=b.d+s*32
J.eq(r,q,q+8,a)}},
uk(a){var s,r
for(s=8,r=0;r<8;++r)s+=J.d(a.a,a.d+(r-32))+J.d(a.a,a.d+(-1+r*32))
A.lj(B.a.j(s,4),a)},
ul(a){var s,r
for(s=4,r=0;r<8;++r)s+=J.d(a.a,a.d+(r-32))
A.lj(B.a.j(s,3),a)},
um(a){var s,r
for(s=4,r=0;r<8;++r)s+=J.d(a.a,a.d+(-1+r*32))
A.lj(B.a.j(s,3),a)},
un(a){A.lj(128,a)},
lf(a,b){return B.a.j(a*b+1073741824,16)-16384},
lg(a,b,c,d,e){var s=b+c+d*32
a.i(0,s,A.u2(J.d(a.a,a.d+s)+(B.a.j(e+65536,3)-8192)))},
lh(a,b,c,d,e){A.lg(a,0,0,b,c+d)
A.lg(a,0,1,b,c+e)
A.lg(a,0,2,b,c-e)
A.lg(a,0,3,b,c-d)},
u7(){var s,r,q,p
if(!$.pX){for(s=-255;s<=255;++s){r=$.oI()
q=255+s
p=s<0?-s:s
r.$flags&2&&A.b(r)
r[q]=p
p=$.oJ()
r=B.a.j(r[q],1)
p.$flags&2&&A.b(p)
p[q]=r}for(s=-1020;s<=1020;++s){r=$.oK()
if(s<-128)q=-128
else q=s>127?127:s
r.$flags&2&&A.b(r)
r[1020+s]=q}for(s=-112;s<=112;++s){r=$.oL()
if(s<-16)q=-16
else q=s>15?15:s
r.$flags&2&&A.b(r)
r[112+s]=q}for(s=-255;s<=510;++s){r=$.nA()
if(s<0)q=0
else q=s>255?255:s
r.$flags&2&&A.b(r)
r[255+s]=q}$.pX=!0}},
u2(a){var s
if((a&-256)>>>0===0)s=a
else s=a<0?0:255
return s},
ld:function ld(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
u1(){var s,r=J.ay(3,t.D)
for(s=0;s<3;++s)r[s]=new Uint8Array(11)
return new A.fC(r)},
uH(){var s,r,q,p,o=new Uint8Array(3),n=J.ay(4,t.ac)
for(s=t.e5,r=0;r<4;++r){q=J.ay(8,s)
for(p=0;p<8;++p)q[p]=A.u1()
n[r]=q}B.d.O(o,0,3,255)
return new A.lo(o,n)},
lk:function lk(){this.d=$},
ln:function ln(){},
lp:function lp(a,b){var _=this
_.b=_.a=!1
_.c=!0
_.d=a
_.e=b},
fC:function fC(a){this.a=a},
lo:function lo(a,b){this.a=a
this.b=b},
le:function le(a,b){var _=this
_.a=$
_.b=null
_.d=_.c=$
_.e=a
_.f=b},
bR:function bR(){var _=this
_.b=_.a=0
_.c=!1
_.d=0},
fF:function fF(){this.b=this.a=0},
iJ:function iJ(a,b,c){this.a=a
this.b=b
this.c=c},
fG:function fG(a,b){var _=this
_.a=a
_.b=$
_.c=b
_.e=_.d=null
_.f=$},
fH:function fH(a,b,c){this.a=a
this.b=b
this.c=c},
oe(a,b){var s,r=A.i([],t.d),q=A.i([],t.ip),p=new Uint32Array(2),o=new A.iH(a,p)
p=o.e=J.Q(B.n.gt(p),0,null)
s=a.G()
p.$flags&2&&A.b(p)
if(0>=p.length)return A.a(p,0)
p[0]=s
s=a.G()
p.$flags&2&&A.b(p)
if(1>=p.length)return A.a(p,1)
p[1]=s
s=a.G()
p.$flags&2&&A.b(p)
if(2>=p.length)return A.a(p,2)
p[2]=s
s=a.G()
p.$flags&2&&A.b(p)
if(3>=p.length)return A.a(p,3)
p[3]=s
s=a.G()
p.$flags&2&&A.b(p)
if(4>=p.length)return A.a(p,4)
p[4]=s
s=a.G()
p.$flags&2&&A.b(p)
if(5>=p.length)return A.a(p,5)
p[5]=s
s=a.G()
p.$flags&2&&A.b(p)
if(6>=p.length)return A.a(p,6)
p[6]=s
s=a.G()
p.$flags&2&&A.b(p)
if(7>=p.length)return A.a(p,7)
p[7]=s
o.b=!1
return new A.fE(o,b,r,q)},
cd(a,b){return B.a.j(a+B.a.P(1,b)-1,b)},
fE:function fE(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=null
_.w=_.r=_.f=0
_.x=null
_.Q=_.z=_.y=0
_.as=null
_.at=0
_.ax=c
_.ay=null
_.ch=d
_.CW=0
_.cx=null
_.cy=$
_.db=0
_.dx=null
_.fr=_.dy=0},
hU:function hU(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=null
_.w=_.r=_.f=0
_.x=null
_.Q=_.z=_.y=0
_.as=null
_.at=0
_.ax=c
_.ay=null
_.ch=d
_.CW=0
_.cx=null
_.cy=$
_.db=0
_.dx=null
_.fr=_.dy=0},
iH:function iH(a,b){var _=this
_.a=0
_.b=!0
_.c=a
_.d=b
_.e=$},
ll:function ll(a,b){this.a=a
this.b=b},
bS(a,b){return((a^b)>>>1&2139062143)+((a&b)>>>0)},
d1(a){if(a<0)return 0
if(a>255)return 255
return a},
lm(a,b,c){return Math.abs(b-c)-Math.abs(a-c)},
us(a,b,c){return 4278190080},
ut(a,b,c){return a},
uy(a,b,c){if(!(c>=0&&c<b.length))return A.a(b,c)
return b[c]},
uz(a,b,c){var s=c+1
if(!(s>=0&&s<b.length))return A.a(b,s)
return b[s]},
uA(a,b,c){var s=c-1
if(!(s>=0&&s<b.length))return A.a(b,s)
return b[s]},
uB(a,b,c){var s,r,q=b.length
if(!(c>=0&&c<q))return A.a(b,c)
s=b[c]
r=c+1
if(!(r<q))return A.a(b,r)
return A.bS(A.bS(a,b[r]),s)},
uC(a,b,c){var s=c-1
if(!(s>=0&&s<b.length))return A.a(b,s)
return A.bS(a,b[s])},
uD(a,b,c){if(!(c>=0&&c<b.length))return A.a(b,c)
return A.bS(a,b[c])},
uE(a,b,c){var s=c-1,r=b.length
if(!(s>=0&&s<r))return A.a(b,s)
s=b[s]
if(!(c>=0&&c<r))return A.a(b,c)
return A.bS(s,b[c])},
uF(a,b,c){var s,r,q=b.length
if(!(c>=0&&c<q))return A.a(b,c)
s=b[c]
r=c+1
if(!(r<q))return A.a(b,r)
return A.bS(s,b[r])},
uu(a,b,c){var s,r,q=c-1,p=b.length
if(!(q>=0&&q<p))return A.a(b,q)
q=b[q]
if(!(c>=0&&c<p))return A.a(b,c)
s=b[c]
r=c+1
if(!(r<p))return A.a(b,r)
r=b[r]
return A.bS(A.bS(a,q),A.bS(s,r))},
uv(a,b,c){var s,r,q=b.length
if(!(c>=0&&c<q))return A.a(b,c)
s=b[c]
r=c-1
if(!(r>=0&&r<q))return A.a(b,r)
r=b[r]
return A.lm(s>>>24,a>>>24,r>>>24)+A.lm(s>>>16&255,a>>>16&255,r>>>16&255)+A.lm(s>>>8&255,a>>>8&255,r>>>8&255)+A.lm(s&255,a&255,r&255)<=0?s:a},
uw(a,b,c){var s,r,q=b.length
if(!(c>=0&&c<q))return A.a(b,c)
s=b[c]
r=c-1
if(!(r>=0&&r<q))return A.a(b,r)
r=b[r]
return(A.d1((a>>>24)+(s>>>24)-(r>>>24))<<24|A.d1((a>>>16&255)+(s>>>16&255)-(r>>>16&255))<<16|A.d1((a>>>8&255)+(s>>>8&255)-(r>>>8&255))<<8|A.d1((a&255)+(s&255)-(r&255)))>>>0},
ux(a,b,c){var s,r,q,p,o,n=b.length
if(!(c>=0&&c<n))return A.a(b,c)
s=b[c]
r=c-1
if(!(r>=0&&r<n))return A.a(b,r)
r=b[r]
q=A.bS(a,s)
s=q>>>24
n=q>>>16&255
p=q>>>8&255
o=q>>>0&255
return(A.d1(s+B.a.K(s-(r>>>24),2))<<24|A.d1(n+B.a.K(n-(r>>>16&255),2))<<16|A.d1(p+B.a.K(p-(r>>>8&255),2))<<8|A.d1(o+B.a.K(o-(r&255),2)))>>>0},
d0:function d0(a,b){this.a=a
this.b=b},
iI:function iI(a){var _=this
_.a=a
_.c=_.b=0
_.d=null
_.e=0},
lq:function lq(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=0
_.r=1
_.w=!1
_.x=$
_.y=!1},
fI:function fI(){},
hV:function hV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=_.f=$
_.w=1
_.y=_.x=$},
nJ(a){var s,r=J.aQ(a,t.a6)
for(s=0;s<a;++s)r[s]=new A.hz()
return new A.eL(r,0)},
t9(){var s,r,q=J.ay(5,t.lJ)
for(s=0;s<5;++s)q[s]=A.nJ(0)
r=J.ay(64,t.lq)
for(s=0;s<64;++s)r[s]=new A.hA()
return new A.eK(q,r)},
hz:function hz(){this.b=this.a=0},
hA:function hA(){this.b=this.a=0},
eL:function eL(a,b){this.a=a
this.b=b},
eK:function eK(a,b){var _=this
_.a=a
_.b=!1
_.c=0
_.e=_.d=!1
_.f=b},
eM:function eM(){var _=this
_.b=_.a=null
_.e=_.d=0},
hC:function hC(a){this.a=a
this.b=null},
ea:function ea(a,b){this.a=a
this.b=b},
bT:function bT(a,b){var _=this
_.b=_.a=0
_.c=null
_.e=_.d=!1
_.f=a
_.r=null
_.w=""
_.y=0
_.z=b
_.as=0
_.at=null
_.ch=_.ay=0},
eZ:function eZ(a,b){var _=this
_.b=_.a=0
_.c=null
_.e=_.d=!1
_.f=a
_.r=null
_.w=""
_.y=0
_.z=b
_.as=0
_.at=null
_.ch=_.ay=0},
lr:function lr(a){this.a=null
this.b=a
this.c=null},
lu:function lu(a,b){this.a=a
this.b=b},
ls:function ls(a,b){this.a=a
this.b=b},
lt:function lt(a,b,c){this.a=a
this.b=b
this.c=c},
pc(a){return new A.bF(a.a,a.b,B.d.hT(a.c,0))},
hD:function hD(a,b){this.a=a
this.b=b},
bF:function bF(a,b,c){this.a=a
this.b=b
this.c=c},
W(a,b,c,d,e,f,g,h,i,j,k,l,m){var s=new A.ax(null,null,null,a,h,e,d,0)
B.c.B(s.gaw(),s)
s.fh(l,f,b,c,g,i,j,k,m)
return s},
jY(a,b,c,d){var s,r,q,p,o=null,n=a.e
n=n==null?o:A.eB(n)
s=a.c
s=s==null?o:A.pc(s)
r=a.w
q=a.r
p=a.f
p=p==null?o:new A.b9(new Uint8Array(A.q(p.a)))
r=new A.ax(o,s,n,p,q,r,a.y,a.z)
r.i9(a,b,c,d)
return r},
bc(a,b,c){var s,r,q,p,o,n=null,m=a.a
m=m==null?n:m.ao(c)
s=a.e
s=s==null?n:A.eB(s)
r=a.c
r=r==null?n:A.pc(r)
q=a.w
p=a.r
o=a.f
o=o==null?n:new A.b9(new Uint8Array(A.q(o.a)))
q=new A.ax(m,r,s,o,p,q,a.y,a.z)
q.i7(a,b,c)
return q},
hx:function hx(a,b){this.a=a
this.b=b},
ax:function ax(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=null
_.c=b
_.d=null
_.e=c
_.f=d
_.r=e
_.w=f
_.x=$
_.y=g
_.z=h},
k_:function k_(a,b){this.a=a
this.b=b},
jZ:function jZ(){},
an:function an(){},
tb(a,b,c){return new A.dH(new Uint16Array(a*b*c),a,b,c)},
dH:function dH(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
tc(a,b,c){return new A.dI(new Float32Array(a*b*c),a,b,c)},
dI:function dI(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eN:function eN(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eO:function eO(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eP:function eP(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eQ:function eQ(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dJ:function dJ(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
cy:function cy(a,b,c,d,e){var _=this
_.d=a
_.e=b
_.a=c
_.b=d
_.c=e},
dK:function dK(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
td(a,b,c){return new A.dL(new Uint32Array(a*b*c),a,b,c)},
dL:function dL(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dM:function dM(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
pn(a,b,c){return new A.dN(new Uint8Array(a*b*c),null,a,b,c)},
dN:function dN(a,b,c,d,e){var _=this
_.d=a
_.e=b
_.a=c
_.b=d
_.c=e},
hW:function hW(a,b){this.a=a
this.b=b},
aZ:function aZ(){},
fg:function fg(a,b,c){this.c=a
this.a=b
this.b=c},
fh:function fh(a,b,c){this.c=a
this.a=b
this.b=c},
fi:function fi(a,b,c){this.c=a
this.a=b
this.b=c},
fj:function fj(a,b,c){this.c=a
this.a=b
this.b=c},
fk:function fk(a,b,c){this.c=a
this.a=b
this.b=c},
fl:function fl(a,b,c){this.c=a
this.a=b
this.b=c},
fm:function fm(a,b,c){this.c=a
this.a=b
this.b=c},
dW:function dW(a,b,c){this.c=a
this.a=b
this.b=c},
pD(a){return new A.b_(new Uint8Array(A.q(a.c)),a.a,a.b)},
b_:function b_(a,b,c){this.c=a
this.a=b
this.b=c},
nT(a){return new A.cK(-1,0,-a.c,a)},
cK:function cK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nU(a){return new A.cL(-1,0,-a.c,a)},
cL:function cL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nV(a){return new A.cM(-1,0,-a.c,a)},
cM:function cM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nW(a){return new A.cN(-1,0,-a.c,a)},
cN:function cN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nX(a){return new A.cO(-1,0,-a.c,a)},
cO:function cO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nY(a){return new A.cP(-1,0,-a.c,a)},
cP:function cP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bg(a,b,c,d,e){a.a5(b-1,c)
return new A.id(a,b,b+d-1,c+e-1)},
id:function id(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
fn(a){return new A.cQ(-1,0,0,-1,0,a)},
cQ:function cQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
nZ(a){return new A.cR(-1,0,-a.c,a)},
cR:function cR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fo(a){return new A.cS(-1,0,0,-2,0,a)},
cS:function cS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
o_(a){return new A.cT(-1,0,-a.c,a)},
cT:function cT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fp(a){return new A.cU(-1,0,0,-(a.c<<2>>>0),a)},
cU:function cU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kq(a){return new A.cV(-1,0,-a.c,a)},
cV:function cV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
J:function J(){},
wR(a,b){switch(b.a){case 0:A.n7(a)
break
case 1:A.qH(a)
break
case 2:A.wS(a)
break}return a},
qH(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=a3.gaw().length
for(s=t.g,r=0;r<a2;++r){q=a3.x
if(q===$)q=a3.x=A.i([],s)
if(!(r<q.length))return A.a(q,r)
p=q[r]
o=p.a
n=o==null
m=n?a1:o.a
if(m==null)m=0
l=n?a1:o.b
if(l==null)l=0
k=B.a.K(l,2)
if(!n){j=J.D(o.gt(o))
if(j==null){o=p.a
o=o==null?a1:o.gt(o)
if(o==null)o=B.d.gt(new Uint8Array(0))
j=J.D(o)}i=p.a.gaD()
h=new Uint8Array(i)
for(g=l-1,f=0;f<k;++f,--g){e=f*i
d=g*i
B.d.a6(h,0,i,j,e)
B.d.a6(j,e,e+i,j,d)
B.d.ap(j,d,d+i,h)}continue}o=a3.a
if((o==null?a1:o.gU())!=null)for(g=l-1,f=0;f<k;++f,--g)for(c=0;c<m;++c){o=p.a
b=o==null?a1:o.a0(c,f,a1)
if(b==null)b=new A.J()
o=p.a
a=o==null?a1:o.a0(c,g,a1)
if(a==null)a=new A.J()
a0=b.gS()
b.sS(a.gS())
a.sS(a0)}else for(g=l-1,f=0;f<k;++f,--g)for(c=0;c<m;++c){o=p.a
b=o==null?a1:o.a0(c,f,a1)
if(b==null)b=new A.J()
o=p.a
a=o==null?a1:o.a0(c,g,a1)
if(a==null)a=new A.J()
a0=b.gq()
b.sq(a.gq())
a.sq(a0)
a0=b.gv()
b.sv(a.gv())
a.sv(a0)
a0=b.gu()
b.su(a.gu())
a.su(a0)
a0=b.gA()
b.sA(a.gA())
a.sA(a0)}}return a3},
n7(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null,a1=a2.gaw().length
for(s=t.g,r=0;r<a1;++r){q=a2.x
if(q===$)q=a2.x=A.i([],s)
if(!(r<q.length))return A.a(q,r)
p=q[r]
o=p.a
n=o==null
m=n?a0:o.a
if(m==null)m=0
l=n?a0:o.b
if(l==null)l=0
k=B.a.K(m,2)
j=A.bV(p)
if(j>0){o=p.a
i=o==null?a0:J.D(o.gt(o))
if(i==null){o=p.a
o=o==null?a0:o.gt(o)
if(o==null)o=B.d.gt(new Uint8Array(0))
i=J.D(o)}h=p.a.gaD()
for(g=0;g<l;++g)A.qR(i,g*h,m,j)
continue}o=a2.a
if((o==null?a0:o.gU())!=null)for(f=m-1,g=0;g<l;++g)for(e=f,d=0;d<k;++d,--e){o=p.a
c=o==null?a0:o.a0(d,g,a0)
if(c==null)c=new A.J()
o=p.a
b=o==null?a0:o.a0(e,g,a0)
if(b==null)b=new A.J()
a=c.gS()
c.sS(b.gS())
b.sS(a)}else for(f=m-1,g=0;g<l;++g)for(e=f,d=0;d<k;++d,--e){o=p.a
c=o==null?a0:o.a0(d,g,a0)
if(c==null)c=new A.J()
o=p.a
b=o==null?a0:o.a0(e,g,a0)
if(b==null)b=new A.J()
a=c.gq()
c.sq(b.gq())
b.sq(a)
a=c.gv()
c.sv(b.gv())
b.sv(a)
a=c.gu()
c.su(b.gu())
b.su(a)
a=c.gA()
c.sA(b.gA())
b.sA(a)}}return a2},
wS(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a1.gaw().length
for(s=t.g,r=0;r<a0;++r){q=a1.x
if(q===$)q=a1.x=A.i([],s)
if(!(r<q.length))return A.a(q,r)
p=q[r]
o=p.a
n=o==null
m=n?a:o.a
if(m==null)m=0
l=n?a:o.b
if(l==null)l=0
k=A.bV(p)
if(k>0){o=p.a
o=o==null?a:J.D(o.gt(o))
if(o==null){o=p.a
o=o==null?a:o.gt(o)
if(o==null)o=B.d.gt(new Uint8Array(0))
o=J.D(o)}A.qR(o,0,m*l,k)
continue}o=p.a
if((o==null?a:o.gU())!=null)for(j=l-1,i=m-1,h=0;h<=j;++h,--j){g=h===j?B.a.K(m,2):m
for(f=i,e=0;e<g;++e,--f){o=p.a
d=o==null?a:o.a0(e,h,a)
if(d==null)d=new A.J()
o=p.a
c=o==null?a:o.a0(f,j,a)
if(c==null)c=new A.J()
b=d.gS()
d.sS(c.gS())
c.sS(b)}}else for(j=l-1,i=m-1,h=0;h<=j;++h,--j){g=h===j?B.a.K(m,2):m
for(f=i,e=0;e<g;++e,--f){o=p.a
d=o==null?a:o.a0(e,h,a)
if(d==null)d=new A.J()
o=p.a
c=o==null?a:o.a0(f,j,a)
if(c==null)c=new A.J()
b=d.gq()
d.sq(c.gq())
c.sq(b)
b=d.gv()
d.sv(c.gv())
c.sv(b)
b=d.gu()
d.su(c.gu())
c.su(b)
b=d.gA()
d.sA(c.gA())
c.sA(b)}}}return a1},
jI:function jI(a,b){this.a=a
this.b=b},
l(a){return new A.eR(a)},
eR:function eR(a){this.a=a},
v(a,b,c,d){var s=J.a6(a),r=s.gp(a)
s=c==null?s.gp(a):d+c
return new A.ai(a,d,Math.min(r,s),d,b)},
x(a,b,c){var s=a.a,r=a.d,q=J.bW(s),p=b==null?a.c:a.d+c+b
return new A.ai(s,a.b,Math.min(q,p),r+c,a.e)},
ai:function ai(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
i8:function i8(a,b,c,d){var _=this
_.a=$
_.b=10
_.c=16
_.d=3
_.f=_.e=$
_.r=null
_.Q=_.z=_.y=_.x=_.w=$
_.as=a
_.at=b
_.ax=c
_.ay=d
_.CW=_.ch=$},
bf(a,b){return new A.ib(a,new Uint8Array(b))},
ib:function ib(a,b){this.a=0
this.b=a
this.c=b},
iv:function iv(){},
e2:function e2(a,b){this.a=a
this.b=b},
hI(a){return new A.hH(a)},
wE(a){var s,r,q,p,o,n,m=A.qU(a)
if(m===B.aE)throw A.h(A.hI("HEIC/HEIF must be converted before decoding"))
s=null
try{r=A.wQ(a)
o=r
q=o==null?null:o.aq(a)
if(q!=null&&q.gR()*q.gN()>12e7){o=A.hI("Too large to open: "+q.gR()+" \xd7 "+q.gN()+" pixels (the limit is 120 megapixels)")
throw A.h(o)}o=r
s=o==null?null:o.aL(a)}catch(n){o=A.bo(n)
if(o instanceof A.eR){p=o
throw A.h(A.hI("Unsupported or corrupt image: "+p.a))}else throw n}if(s==null)throw A.h(A.hI("Unsupported or corrupt image ("+m.b+")"))
return A.wg(A.wp(s))},
wg(a){var s,r,q,p,o,n,m,l,k,j=a.lh(B.f,4),i=j.gbe(),h=4!==i?j.lg(null,4):j
i=h.a
i=i==null?null:i.hH(h!==j,B.ab)
s=new Uint8Array(A.q(i==null?j.Z():i))
for(i=s.length,r=s.$flags|0,q=0;q<i;q+=4){p=q+3
if(!(p<i))return A.a(s,p)
o=s[p]
if(o===255)continue
for(n=255*(255-o),m=0;m<3;++m){l=q+m
if(!(l<i))return A.a(s,l)
k=B.a.K(s[l]*o+n+127,255)
r&2&&A.b(s)
s[l]=k}r&2&&A.b(s)
s[p]=255}return A.pO(j.gR(),j.gN(),s)},
hH:function hH(a){this.a=a},
qU(a){var s=new A.nx(a),r=new A.nw(a)
if(s.$2(0,B.dK))return B.dd
if(s.$2(0,B.aO))return B.de
if(J.a0(r.$2(0,4),"GIF8"))return B.df
if(J.a0(r.$2(0,4),"RIFF")&&J.a0(r.$2(8,4),"WEBP"))return B.dg
if(J.a0(r.$2(0,2),"BM"))return B.dh
if(s.$2(0,B.ew)||s.$2(0,B.ex))return B.di
if(J.a0(r.$2(4,4),"ftyp")&&B.ka.bs(0,r.$2(8,4)))return B.aE
return B.dj},
bu:function bu(a,b){this.a=a
this.b=b},
nx:function nx(a){this.a=a},
nw:function nw(a){this.a=a},
u_(a){throw A.h(A.aq("Uint64List not supported on the web."))},
te(a,b,c){return J.nC(a,b,c)},
pU(a,b){return J.aI(a,b,null)},
t3(a){return J.oT(a,0,null)},
t4(a){return a.ee(0,0,null)},
qW(a){return v.mangledGlobalNames[a]},
th(a,b,c,d,e,f){var s=a[b](c)
return s},
wT(a){var s,r,q,p,o,n=a.gp(0)
for(s=1,r=0;n>0;){q=3800>n?n:3800
n-=q
while(--q,q>=0){p=a.b
p.toString
o=a.c++
if(!(o>=0&&o<p.length))return A.a(p,o)
s+=p[o]
r+=s}s=B.a.V(s,65521)
r=B.a.V(r,65521)}return(r<<16|s)>>>0},
bA(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=J.a6(a),b=c.gp(a)
a0^=4294967295
s=0
if(t.D.b(a)&&b>=16){r=$.rm()
q=a.BYTES_PER_ELEMENT
p=A.b1(0,null,B.a.a1(a.byteLength,q))
o=J.rt(B.d.gt(a),a.byteOffset+0*q,p*q)
while(b>=8){n=o.getUint32(s,!0)^a0
m=o.getUint32(s+4,!0)
l=r[1792+(n&255)]
k=r[1536+(n>>>8&255)]
j=r[1280+(n>>>16&255)]
i=1024+(n>>>24)
if(!(i<2048))return A.a(r,i)
i=r[i]
h=r[768+(m&255)]
g=r[512+(m>>>8&255)]
f=r[256+(m>>>16&255)]
e=m>>>24
if(!(e<2048))return A.a(r,e)
a0=l^k^j^i^h^g^f^r[e]
s+=8
b-=8}}while(b>=8){d=s+1
a0=B.A[(a0^c.k(a,s))&255]^a0>>>8
s=d+1
a0=B.A[(a0^c.k(a,d))&255]^a0>>>8
d=s+1
a0=B.A[(a0^c.k(a,s))&255]^a0>>>8
s=d+1
a0=B.A[(a0^c.k(a,d))&255]^a0>>>8
d=s+1
a0=B.A[(a0^c.k(a,s))&255]^a0>>>8
s=d+1
a0=B.A[(a0^c.k(a,d))&255]^a0>>>8
d=s+1
a0=B.A[(a0^c.k(a,s))&255]^a0>>>8
s=d+1
a0=B.A[(a0^c.k(a,d))&255]^a0>>>8
b-=8}if(b>0)do{d=s+1
a0=B.A[(a0^c.k(a,s))&255]^a0>>>8
if(--b,b>0){s=d
continue}else break}while(!0)
return(a0^4294967295)>>>0},
vm(){var s,r,q,p,o,n,m,l=new Uint32Array(2048)
for(s=0;s<256;++s){r=B.A[s]
if(!(s<2048))return A.a(l,s)
l[s]=r}for(q=1;q<8;++q)for(r=(q-1)*256,p=q*256,s=0;s<256;++s){o=r+s
if(!(o>=0&&o<2048))return A.a(l,o)
n=l[o]
o=p+s
m=B.A[n&255]
if(!(o<2048))return A.a(l,o)
l[o]=(m^n>>>8)>>>0}return l},
iL(a){var s,r,q,p
a.toString
t.j.a(a)
s=J.aF(a)
r=s.k(a,0)
r.toString
r=B.b.h(A.by(r))
q=s.k(a,1)
q.toString
q=B.b.h(A.by(q))
if(!(q>=0&&q<2))return A.a(B.bB,q)
q=B.bB[q]
p=s.k(a,2)
p.toString
p=B.b.h(A.by(p))
if(!(p>=0&&p<4))return A.a(B.bJ,p)
p=B.bJ[p]
return new A.ed([A.cg(s.k(a,3)),p,q,r,A.cg(s.k(a,4))])},
lv(a,b){return A.cE(["rgba",a.c,"width",a.a,"height",a.b,"ms",b],t.N,t.X)},
pZ(a){var s,r,q=A.i([],t.t)
a.toString
s=J.dj(t.j.a(a))
while(s.D()){r=s.gJ()
r.toString
q.push(B.b.h(A.by(r)))}return q},
qM(b3,b4,b5,b6,b7,b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
if(b7<0.5||b6<1)return b3
s=new Int32Array(b6)
B.l.O(s,0,b6,b4)
r=new Int32Array(b6)
B.l.O(r,0,b6,b5)
q=new Int32Array(b6)
B.l.O(q,0,b6,-1)
p=new Int32Array(b6)
B.l.O(p,0,b6,-1)
for(o=b3.length,n=0;n<b5;++n)for(m=n*b4,l=0;l<b4;++l){k=m+l
if(!(k>=0&&k<o))return A.a(b3,k)
j=b3[k]
if(j<0)continue
if(!(j<b6))return A.a(s,j)
if(l<s[j]){if(!(j<b6))return A.a(s,j)
s[j]=l}if(!(j<b6))return A.a(q,j)
if(l>q[j]){if(!(j<b6))return A.a(q,j)
q[j]=l}if(!(j<b6))return A.a(r,j)
if(n<r[j]){if(!(j<b6))return A.a(r,j)
r[j]=n}if(!(j<b6))return A.a(p,j)
if(n>p[j]){if(!(j<b6))return A.a(p,j)
p[j]=n}}i=B.b.ab(3*b7)
h=new Int32Array(A.q(b3))
m=b4*b5
g=new Float32Array(m)
for(k=b9==null,f=b4-1,e=b5-1,j=0;j<b6;++j){d=q[j]
if(d<0)continue
if(k)c=null
else{if(!(j<b9.length))return A.a(b9,j)
c=b9[j]}b=s[j]-i
if(b<0)b=0
n=r[j]
a=n-i
if(a<0)a=0
a0=d+i
if(a0>=b4)a0=f
a1=p[j]+i
if(a1>=b5)a1=e
a2=a0-b+1
a3=a1-a+1
d=a2*a3
a4=new Float32Array(d)
for(;n<=p[j];++n){a5=n*b4
a6=(n-a)*a2-b
for(l=s[j];l<=q[j];++l){a7=a5+l
if(!(a7>=0&&a7<o))return A.a(b3,a7)
if(b3[a7]===j){a7=a6+l
if(!(a7>=0&&a7<d))return A.a(a4,a7)
a4[a7]=1}}}a8=A.df(a4,a2,a3,b7)
for(d=a8.length,a7=c!=null,a9=h.$flags|0,n=a;n<=a1;++n){a5=n*b4
a6=(n-a)*a2-b
for(l=b;l<=a0;++l){b0=a6+l
if(!(b0>=0&&b0<d))return A.a(a8,b0)
b1=a8[b0]
b0=a5+l
if(!(b0>=0&&b0<m))return A.a(g,b0)
if(b1>g[b0])if(a7){if(!(b0<b8.length))return A.a(b8,b0)
b2=b8[b0]===c}else b2=!0
else b2=!1
if(b2){if(!(b0<m))return A.a(g,b0)
g[b0]=b1
a9&2&&A.b(h)
if(!(b0<h.length))return A.a(h,b0)
h[b0]=j}}}}return h},
wH(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=a.a,g=a.b,f=h*g,e=new Float32Array(f),d=[a.c,a.d,a.e],c=[a0*a0,1,1]
for(s=3*b,r=0;r<3;++r){q=d[r]
p=A.df(q,h,g,b)
o=A.df(q,h,g,s)
n=c[r]
for(q=p.length,m=o.length,l=0;l<f;++l){if(!(l<q))return A.a(p,l)
k=p[l]
if(!(l<m))return A.a(o,l)
j=k-o[l]
k=e[l]
if(!(l<f))return A.a(e,l)
e[l]=k+n*j*j}}i=A.df(e,h,g,a1)
for(s=i.length,l=0;l<f;++l){if(!(l<s))return A.a(i,l)
q=Math.sqrt(i[l])
i.$flags&2&&A.b(i)
i[l]=q}return i},
ha(c7,c8,c9,d0,d1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2=c7.a,c3=c7.b,c4=c2*c3,c5=new Uint8Array(c4),c6=c9/2
for(s=c6+0.5,r=c6+1,q=c3-1,p=c2-1,o=0;n=o+3,m=c8.length,n<m;o+=4){if(!(o<m))return A.a(c8,o)
l=c8[o]
k=o+1
if(!(k<m))return A.a(c8,k)
j=c8[k]
k=o+2
if(!(k<m))return A.a(c8,k)
i=c8[k]
h=c8[n]
g=i-l
f=h-j
e=g*g+f*f
d=Math.max(0,B.b.a2(Math.min(j,h)-c6-1))
c=Math.min(q,B.b.ab(Math.max(j,h)+c6+1))
b=Math.max(0,B.b.a2(Math.min(l,i)-c6-1))
a=Math.min(p,B.b.ab(Math.max(l,i)+c6+1))
a0=Math.abs(f)>1e-9?g/f:null
n=a0==null
a1=n?1/0:r*Math.sqrt(1+a0*a0)+1
for(m=e===0,n=!n,a2=d;a2<=c;++a2){a3=a2+0.5
if(n){a4=l+(a3-j)*a0
a5=Math.max(b,B.b.a2(a4-a1))
a6=Math.min(a,B.b.ab(a4+a1))}else{a6=a
a5=b}for(k=a2*c2,a7=(a3-j)*f,a8=a5;a8<=a6;++a8){a9=a8+0.5
b0=m?0:((a9-l)*g+a7)/e
if(b0<0)b0=0
if(b0>1)b0=1
b1=a9-(l+b0*g)
b2=a3-(j+b0*f)
b3=s-Math.sqrt(b1*b1+b2*b2)
if(b3<=0)continue
b4=b3>=1?255:B.b.a8(b3*255)
b5=k+a8
if(!(b5>=0&&b5<c4))return A.a(c5,b5)
if(b4>c5[b5]){if(!(b5<c4))return A.a(c5,b5)
c5[b5]=b4}}}}b6=d0>>>16&255
b7=d0>>>8&255
b8=d0&255
b9=c7.c
for(s=b9.length,r=b9.$flags|0,b5=0;b5<c4;++b5){b3=c5[b5]
if(b3===0)continue
c0=b3/255*d1
c1=b5*4
if(!(c1<s))return A.a(b9,c1)
q=b9[c1]
q=B.b.a8(q+(b6-q)*c0)
r&2&&A.b(b9)
b9[c1]=q
q=c1+1
if(!(q<s))return A.a(b9,q)
p=b9[q]
b9[q]=B.b.a8(p+(b7-p)*c0)
p=c1+2
if(!(p<s))return A.a(b9,p)
q=b9[p]
b9[p]=B.b.a8(q+(b8-q)*c0)}},
wl(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=A.oF(a),g=new Int32Array(256)
for(s=0;s<256;++s){r=A.wZ(s,c)
if(!(r<b.length))return A.a(b,r)
r=b[r]
if(!(s<256))return A.a(g,s)
g[s]=r}q=A.e3(a.a,a.b)
p=h.a.c
o=q.c
n=d?1:0
for(h=o.length,r=p.length,m=o.$flags|0,l=0;l<h;l+=4){k=l+n
if(!(k<r))return A.a(p,k)
k=p[k]
if(!(k<256))return A.a(g,k)
j=g[k]
k=B.a.j(j,16)
m&2&&A.b(o)
o[l]=k&255
k=l+1
i=B.a.j(j,8)
if(!(k<h))return A.a(o,k)
o[k]=i&255
i=l+2
if(!(i<h))return A.a(o,i)
o[i]=j&255
i=l+3
if(!(i<h))return A.a(o,i)
o[i]=255}return q},
ow(a,b,c,d,e,f,g,h,i,j,k){var s,r,q,p,o,n,m,l
if(j==null)j=0
if(k==null)k=0
if(i==null)i=b.gR()
if(h==null)h=b.gN()
if(e==null)e=a.gR()<b.gR()?a.gR():b.gR()
if(d==null)d=a.gN()<b.gN()?a.gN():b.gN()
s=c===B.a9
if(!s&&a.gbj())a=a.ha(a.gbe())
r=h/d
q=i/e
p=t.p
o=J.ay(d,p)
for(n=0;n<d;++n)o[n]=k+B.b.h(n*r)
m=J.ay(e,p)
for(l=0;l<e;++l)m[l]=j+B.b.h(l*q)
if(s)A.vv(b,a,f,g,e,d,m,o,null,B.b8)
else A.vr(b,a,f,g,e,d,m,o,c,!1,null,B.b8)
return a},
vv(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=a6.gR(),a3=a6.gN(),a4=A.bV(a5)
if(a4>0&&A.bV(a6)===a4&&a5.gL()===a6.gL()&&a5.gbj()===a6.gbj()&&a7>=0&&a8>=0){s=a5.Z()
r=a6.Z()
q=a5.a.gaD()
p=a6.a.gaD()
o=Math.min(a9,a2-a7)
n=s.length
m=r.$flags|0
l=b1.length
k=b2.length
j=a7*a4
i=0
for(;;){if(!(i<b0&&a8+i<a3))break
if(!(i<k))return A.a(b2,i)
h=b2[i]*q
g=(a8+i)*p+j
for(f=0;f<o;++f){if(!(f<l))return A.a(b1,f)
e=h+b1[f]*a4
for(d=0;d<a4;++d,g=c){c=g+1
b=e+d
if(!(b>=0&&b<n))return A.a(s,b)
b=s[b]
m&2&&A.b(r)
if(!(g>=0&&g<r.length))return A.a(r,g)
r[g]=b}}++i}return}for(n=b1.length,m=b2.length,a=null,i=0;i<b0;++i)for(a0=a8+i,l=a0>=a3,f=0;f<a9;++f){a1=a7+f
if(a1>=a2||l)continue
if(!(f<n))return A.a(b1,f)
k=b1[f]
if(!(i<m))return A.a(b2,i)
j=b2[i]
b=a5.a
a=b==null?null:b.a0(k,j,a)
if(a==null)a=new A.J()
a6.c6(a1,a0,a)}},
vr(a,b,c,d,e,f,g,h,i,j,a0,a1){var s,r,q,p,o,n,m,l,k
for(s=g.length,r=h.length,q=null,p=0;p<f;++p)for(o=d+p,n=0;n<e;++n){if(!(n<s))return A.a(g,n)
m=g[n]
if(!(p<r))return A.a(h,p)
l=h[p]
k=a.a
q=k==null?null:k.a0(m,l,q)
if(q==null)q=new A.J()
A.wK(b,c+n,o,q,i,!1,a0,a1)}},
wK(a8,a9,b0,b1,b2,b3,b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
if(!a8.hg(a9,b0))return a8
if(b2===B.a9||a8.gbj())if(a8.hg(a9,b0)){a8.es(a9,b0).aY(b1)
return a8}s=b1.gag()
r=b1.gad()
q=b1.gaf()
p=b1.gp(b1)<4?1:b1.gah()
if(p===0)return a8
o=a8.es(a9,b0)
n=o.gag()
m=o.gad()
l=o.gaf()
k=o.gah()
switch(b2.a){case 0:return a8
case 1:break
case 2:s=Math.max(n,s)
r=Math.max(m,r)
q=Math.max(l,q)
break
case 3:s=1-(1-s)*(1-n)
r=1-(1-r)*(1-m)
q=1-(1-q)*(1-l)
break
case 4:j=p*k
i=1-k
h=1-p
g=s*i+n*h
f=r*i+m*h
e=q*i+l*h
h=B.b.H(p,0.01,1)
i=p<0
d=i?0:1
c=B.b.H(s/h*d,0,0.99)
d=B.b.H(p,0.01,1)
h=i?0:1
b=B.b.H(r/d*h,0,0.99)
h=B.b.H(p,0.01,1)
i=i?0:1
a=B.b.H(q/h*i,0,0.99)
i=n*p
h=m*p
d=l*p
a0=j<s*k+i?0:1
a1=j<r*k+h?0:1
a2=j<q*k+d?0:1
s=(j+g)*(1-a0)+(i/(1-c)+g)*a0
r=(j+f)*(1-a1)+(h/(1-b)+f)*a1
q=(j+e)*(1-a2)+(d/(1-a)+e)*a2
break
case 5:s=n+s
r=m+r
q=l+q
break
case 6:s=Math.min(n,s)
r=Math.min(m,r)
q=Math.min(l,q)
break
case 7:s=n*s
r=m*r
q=l*q
break
case 8:s=s!==0?1-(1-n)/s:0
r=r!==0?1-(1-m)/r:0
q=q!==0?1-(1-l)/q:0
break
case 9:i=1-k
h=1-p
d=s*i
a3=n*h
s=2*n<k?2*s*n+d+a3:p*k-2*(k-n)*(p-s)+d+a3
d=r*i
a3=m*h
r=2*m<k?2*r*m+d+a3:p*k-2*(k-m)*(p-r)+d+a3
i=q*i
h=l*h
q=2*l<k?2*q*l+i+h:p*k-2*(k-l)*(p-q)+i+h
break
case 10:i=k===0
if(i)s=0
else{h=n/k
s=n*(p*h+2*s*(1-h))+s*(1-k)+n*(1-p)}if(i)r=0
else{h=m/k
r=m*(p*h+2*r*(1-h))+r*(1-k)+m*(1-p)}if(i)q=0
else{i=l/k
q=l*(p*i+2*q*(1-i))+q*(1-k)+l*(1-p)}break
case 11:i=2*s
h=1-k
d=1-p
a3=s*h
a4=n*d
s=i<p?i*n+a3+a4:p*k-2*(k-n)*(p-s)+a3+a4
i=2*r
a3=r*h
a4=m*d
r=i<p?i*m+a3+a4:p*k-2*(k-m)*(p-r)+a3+a4
i=2*q
h=q*h
d=l*d
q=i<p?i*l+h+d:p*k-2*(k-l)*(p-q)+h+d
break
case 12:s=Math.abs(s-n)
r=Math.abs(r-m)
q=Math.abs(q-l)
break
case 13:s=n-s
r=m-r
q=l-q
break
case 14:s=s!==0?n/s:0
r=r!==0?m/r:0
q=q!==0?l/q:0
break}a5=1-p
a6=p+k*a5
a7=a6>0?1/a6:0
o.sag((s*p+n*k*a5)*a7)
o.sad((r*p+m*k*a5)*a7)
o.saf((q*p+l*k*a5)*a7)
o.sah(a6)
return a8},
qF(a,b,c,d,e,f,g){var s,r=B.b.H(Math.min(d,e),0,a.gR()-1),q=B.b.H(Math.min(f,g),0,a.gN()-1),p=B.b.H(Math.max(d,e),0,a.gR()-1),o=B.b.H(Math.max(f,g),0,a.gN()-1),n=a.a.bf(0,r,q,p-r+1,o-q+1)
for(s=n.a;n.D();)s.aY(c)
return a},
M(a,b){var s,r,q
try{r=a.$0()
return r}catch(q){s=A.bo(q)
if(s instanceof A.eR)throw q
throw A.h(A.l("Invalid image data: "+A.y(s)))}},
t0(a6,a7,a8,a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=b2<16384,a5=a8>b0?b0:a8
for(s=1;s<=a5;)s=s<<1>>>0
s=s>>>1
r=s>>>1
q=A.i([0,0],t.t)
for(p=a6.length,o=s,s=r;s>=1;o=s,s=r){n=a7+b1*(b0-o)
m=b1*s
l=b1*o
k=a9*s
j=a9*o
for(i=(a8&s)>>>0!==0,h=a9*(a8-o),g=a7;g<=n;g+=l){f=g+h
for(e=g;e<=f;e+=j){d=e+k
c=e+m
b=c+k
if(a4){if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.eD(a,a6[c],q)
a0=q[0]
a1=q[1]
if(!(d>=0&&d<p))return A.a(a6,d)
a=a6[d]
if(!(b>=0&&b<p))return A.a(a6,b)
A.eD(a,a6[b],q)
a2=q[0]
a3=q[1]
A.eD(a0,a2,q)
a=q[0]
a6.$flags&2&&A.b(a6)
a6[e]=a
a6[d]=q[1]
A.eD(a1,a3,q)
a=q[0]
a6.$flags&2&&A.b(a6)
a6[c]=a
a6[b]=q[1]}else{if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.eE(a,a6[c],q)
a0=q[0]
a1=q[1]
if(!(d>=0&&d<p))return A.a(a6,d)
a=a6[d]
if(!(b>=0&&b<p))return A.a(a6,b)
A.eE(a,a6[b],q)
a2=q[0]
a3=q[1]
A.eE(a0,a2,q)
a=q[0]
a6.$flags&2&&A.b(a6)
a6[e]=a
a6[d]=q[1]
A.eE(a1,a3,q)
a=q[0]
a6.$flags&2&&A.b(a6)
a6[c]=a
a6[b]=q[1]}}if(i){c=e+m
if(a4){if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.eD(a,a6[c],q)
a0=q[0]
a=q[1]
a6.$flags&2&&A.b(a6)
a6[c]=a}else{if(!(e>=0&&e<p))return A.a(a6,e)
a=a6[e]
if(!(c>=0&&c<p))return A.a(a6,c)
A.eE(a,a6[c],q)
a0=q[0]
a=q[1]
a6.$flags&2&&A.b(a6)
a6[c]=a}a6.$flags&2&&A.b(a6)
if(!(e>=0&&e<p))return A.a(a6,e)
a6[e]=a0}}if((b0&s)>>>0!==0){f=g+h
for(e=g;e<=f;e+=j){d=e+k
if(a4){if(!(e>=0&&e<p))return A.a(a6,e)
i=a6[e]
if(!(d>=0&&d<p))return A.a(a6,d)
A.eD(i,a6[d],q)
a0=q[0]
i=q[1]
a6.$flags&2&&A.b(a6)
a6[d]=i}else{if(!(e>=0&&e<p))return A.a(a6,e)
i=a6[e]
if(!(d>=0&&d<p))return A.a(a6,d)
A.eE(i,a6[d],q)
a0=q[0]
i=q[1]
a6.$flags&2&&A.b(a6)
a6[d]=i}a6.$flags&2&&A.b(a6)
if(!(e>=0&&e<p))return A.a(a6,e)
a6[e]=a0}}r=s>>>1}},
eD(a,b,c){var s,r,q,p,o=$.at()
o.$flags&2&&A.b(o)
o[0]=a
s=$.aG()
if(0>=s.length)return A.a(s,0)
r=s[0]
o[0]=b
q=s[0]
p=r+(q&1)+B.a.j(q,1)
B.c.i(c,0,p)
B.c.i(c,1,p-q)},
eE(a,b,c){var s=a-B.a.j(b,1)&65535
B.c.i(c,1,s)
B.c.i(c,0,b+s-32768&65535)},
wQ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=268435456,e=A.pu()
if(e.aJ(a))return e
s=A.pF(g)
if(s.aJ(a))return s
r=new A.jM(f)
if(r.aJ(a))return r
q=new A.lr(f)
if(q.aJ(a))return q
p=new A.l4(f)
if(p.fu(A.v(a,!1,g,0),!0)!=null)return p
o=new A.kI(f)
if(o.aJ(a))return o
if(A.t_(a))return new A.jC(f)
n=A.rE(!1,g)
if(n.aJ(a))return n
m=A.ae(A.tn(g),g,!1,t.jv)
l=new A.kz(new A.f4(m,t.p8),f)
if(l.aJ(a))return l
k=new A.l_(f)
j=A.v(a,!1,g,0)
m=k.a=new A.fA(B.au)
m.bM(j)
if(m.hi())return k
i=new A.jR(f)
if(i.aJ(a))return i
h=new A.kP(f)
if(h.aJ(a))return h
return g},
xd(b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
if($.on==null){s=new Uint8Array(768)
for(r=0;r<256;++r){q=256+r
if(!(q<768))return A.a(s,q)
s[q]=r}for(r=256;r<512;++r){q=256+r
if(!(q<768))return A.a(s,q)
s[q]=255}$.on=s}for(q=b4.length,p=b7.$flags|0,r=0;r<64;++r){o=b5+r
if(!(o<q))return A.a(b4,o)
o=b4[o]
n=b3[r]
p&2&&A.b(b7)
if(!(r<64))return A.a(b7,r)
b7[r]=o*n}for(m=0,r=0;r<8;++r,m+=8){q=1+m
if(!(q<64))return A.a(b7,q)
o=b7[q]
n=!1
if(o===0){l=2+m
if(!(l<64))return A.a(b7,l)
if(b7[l]===0){l=3+m
if(!(l<64))return A.a(b7,l)
if(b7[l]===0){l=4+m
if(!(l<64))return A.a(b7,l)
if(b7[l]===0){l=5+m
if(!(l<64))return A.a(b7,l)
if(b7[l]===0){l=6+m
if(!(l<64))return A.a(b7,l)
if(b7[l]===0){n=7+m
if(!(n<64))return A.a(b7,n)
n=b7[n]===0}}}}}}if(n){if(!(m<64))return A.a(b7,m)
q=B.a.j(5793*b7[m]+512,10)
k=(q&2147483647)-((q&2147483648)>>>0)
p&2&&A.b(b7)
if(!(m<64))return A.a(b7,m)
b7[m]=k
q=m+1
if(!(q<64))return A.a(b7,q)
b7[q]=k
q=m+2
if(!(q<64))return A.a(b7,q)
b7[q]=k
q=m+3
if(!(q<64))return A.a(b7,q)
b7[q]=k
q=m+4
if(!(q<64))return A.a(b7,q)
b7[q]=k
q=m+5
if(!(q<64))return A.a(b7,q)
b7[q]=k
q=m+6
if(!(q<64))return A.a(b7,q)
b7[q]=k
q=m+7
if(!(q<64))return A.a(b7,q)
b7[q]=k
continue}if(!(m<64))return A.a(b7,m)
n=B.a.j(5793*b7[m]+128,8)
j=(n&2147483647)-((n&2147483648)>>>0)
n=4+m
if(!(n<64))return A.a(b7,n)
l=B.a.j(5793*b7[n]+128,8)
i=(l&2147483647)-((l&2147483648)>>>0)
l=2+m
if(!(l<64))return A.a(b7,l)
h=b7[l]
g=6+m
if(!(g<64))return A.a(b7,g)
f=b7[g]
e=7+m
if(!(e<64))return A.a(b7,e)
d=b7[e]
c=B.a.j(2896*(o-d)+128,8)
b=(c&2147483647)-((c&2147483648)>>>0)
d=B.a.j(2896*(o+d)+128,8)
a=(d&2147483647)-((d&2147483648)>>>0)
d=3+m
if(!(d<64))return A.a(b7,d)
o=b7[d]<<4
a0=(o&2147483647)-((o&2147483648)>>>0)
o=5+m
if(!(o<64))return A.a(b7,o)
c=b7[o]<<4
a1=(c&2147483647)-((c&2147483648)>>>0)
c=B.a.j(j-i+1,1)
k=(c&2147483647)-((c&2147483648)>>>0)
c=B.a.j(j+i+1,1)
j=(c&2147483647)-((c&2147483648)>>>0)
c=B.a.j(h*3784+f*1567+128,8)
c=(c&2147483647)-((c&2147483648)>>>0)
a2=B.a.j(h*1567-f*3784+128,8)
h=(a2&2147483647)-((a2&2147483648)>>>0)
a2=B.a.j(b-a1+1,1)
a2=(a2&2147483647)-((a2&2147483648)>>>0)
a3=B.a.j(b+a1+1,1)
b=(a3&2147483647)-((a3&2147483648)>>>0)
a3=B.a.j(a+a0+1,1)
a3=(a3&2147483647)-((a3&2147483648)>>>0)
a4=B.a.j(a-a0+1,1)
a0=(a4&2147483647)-((a4&2147483648)>>>0)
a4=B.a.j(j-c+1,1)
a4=(a4&2147483647)-((a4&2147483648)>>>0)
c=B.a.j(j+c+1,1)
j=(c&2147483647)-((c&2147483648)>>>0)
c=B.a.j(k-h+1,1)
c=(c&2147483647)-((c&2147483648)>>>0)
a5=B.a.j(k+h+1,1)
i=(a5&2147483647)-((a5&2147483648)>>>0)
a5=B.a.j(b*2276+a3*3406+2048,12)
k=(a5&2147483647)-((a5&2147483648)>>>0)
a3=B.a.j(b*3406-a3*2276+2048,12)
b=(a3&2147483647)-((a3&2147483648)>>>0)
a3=B.a.j(a0*799+a2*4017+2048,12)
a3=(a3&2147483647)-((a3&2147483648)>>>0)
a2=B.a.j(a0*4017-a2*799+2048,12)
a0=(a2&2147483647)-((a2&2147483648)>>>0)
p&2&&A.b(b7)
if(!(m<64))return A.a(b7,m)
b7[m]=j+k
if(!(e<64))return A.a(b7,e)
b7[e]=j-k
if(!(q<64))return A.a(b7,q)
b7[q]=i+a3
if(!(g<64))return A.a(b7,g)
b7[g]=i-a3
if(!(l<64))return A.a(b7,l)
b7[l]=c+a0
if(!(o<64))return A.a(b7,o)
b7[o]=c-a0
if(!(d<64))return A.a(b7,d)
b7[d]=a4+b
if(!(n<64))return A.a(b7,n)
b7[n]=a4-b}for(r=0;r<8;++r){a6=8+r
a7=16+r
a8=24+r
a9=32+r
b0=40+r
b1=48+r
b2=56+r
q=b7[a6]
if(q===0&&b7[a7]===0&&b7[a8]===0&&b7[a9]===0&&b7[b0]===0&&b7[b1]===0&&b7[b2]===0){q=B.a.j(5793*b7[r]+8192,14)
k=(q&2147483647)-((q&2147483648)>>>0)
p&2&&A.b(b7)
if(!(r<64))return A.a(b7,r)
b7[r]=k
if(!(a6<64))return A.a(b7,a6)
b7[a6]=k
if(!(a7<64))return A.a(b7,a7)
b7[a7]=k
if(!(a8<64))return A.a(b7,a8)
b7[a8]=k
if(!(a9<64))return A.a(b7,a9)
b7[a9]=k
if(!(b0<64))return A.a(b7,b0)
b7[b0]=k
if(!(b1<64))return A.a(b7,b1)
b7[b1]=k
if(!(b2<64))return A.a(b7,b2)
b7[b2]=k
continue}o=B.a.j(5793*b7[r]+2048,12)
j=(o&2147483647)-((o&2147483648)>>>0)
o=B.a.j(5793*b7[a9]+2048,12)
i=(o&2147483647)-((o&2147483648)>>>0)
h=b7[a7]
f=b7[b1]
o=b7[b2]
n=B.a.j(2896*(q-o)+2048,12)
b=(n&2147483647)-((n&2147483648)>>>0)
o=B.a.j(2896*(q+o)+2048,12)
a=(o&2147483647)-((o&2147483648)>>>0)
a0=b7[a8]
a1=b7[b0]
o=B.a.j(j-i+1,1)
k=(o&2147483647)-((o&2147483648)>>>0)
o=B.a.j(j+i+1,1)
j=(o&2147483647)-((o&2147483648)>>>0)
o=B.a.j(h*3784+f*1567+2048,12)
q=(o&2147483647)-((o&2147483648)>>>0)
o=B.a.j(h*1567-f*3784+2048,12)
h=(o&2147483647)-((o&2147483648)>>>0)
o=B.a.j(b-a1+1,1)
o=(o&2147483647)-((o&2147483648)>>>0)
n=B.a.j(b+a1+1,1)
b=(n&2147483647)-((n&2147483648)>>>0)
n=B.a.j(a+a0+1,1)
n=(n&2147483647)-((n&2147483648)>>>0)
l=B.a.j(a-a0+1,1)
a0=(l&2147483647)-((l&2147483648)>>>0)
l=B.a.j(j-q+1,1)
l=(l&2147483647)-((l&2147483648)>>>0)
q=B.a.j(j+q+1,1)
j=(q&2147483647)-((q&2147483648)>>>0)
q=B.a.j(k-h+1,1)
q=(q&2147483647)-((q&2147483648)>>>0)
g=B.a.j(k+h+1,1)
i=(g&2147483647)-((g&2147483648)>>>0)
g=B.a.j(b*2276+n*3406+2048,12)
k=(g&2147483647)-((g&2147483648)>>>0)
n=B.a.j(b*3406-n*2276+2048,12)
b=(n&2147483647)-((n&2147483648)>>>0)
n=B.a.j(a0*799+o*4017+2048,12)
n=(n&2147483647)-((n&2147483648)>>>0)
o=B.a.j(a0*4017-o*799+2048,12)
a0=(o&2147483647)-((o&2147483648)>>>0)
p&2&&A.b(b7)
if(!(r<64))return A.a(b7,r)
b7[r]=j+k
if(!(b2<64))return A.a(b7,b2)
b7[b2]=j-k
b7[a6]=i+n
b7[b1]=i-n
b7[a7]=q+a0
b7[b0]=q-a0
b7[a8]=l+b
b7[a9]=l-b}for(q=$.on,p=b6.$flags|0,r=0;r<64;++r){q.toString
o=B.a.j(b7[r]+8,4)
o=384+((o&2147483647)-((o&2147483648)>>>0))
if(!(o>=0&&o<768))return A.a(q,o)
o=q[o]
p&2&&A.b(b6)
if(!(r<64))return A.a(b6,r)
b6[r]=o}},
hb(a,b){return(a&65535)*b+((a>>>16)*b&65535)*65536>>>0},
uM(a,b,c,d,e,f){A.uJ(f,a,b,c,d,e,!0,f)},
uN(a,b,c,d,e,f){A.uK(f,a,b,c,d,e,!0,f)},
uL(a,b,c,d,e,f){A.uI(f,a,b,c,d,e,!0,f)},
e9(a,b,c,d,e){var s,r,q
for(s=0;s<d;++s){r=J.d(a.a,a.d+s)
q=J.d(b.a,b.d+s)
J.a2(c.a,c.d+s,r+q)}},
uJ(a,b,c,d,e,f,g,h){var s,r,q=null,p=e*d,o=e+f,n=A.v(a,!1,q,p),m=A.v(h,!1,q,p),l=A.x(m,q,0)
if(e===0){m.i(0,0,J.d(n.a,n.d))
A.e9(A.x(n,q,1),l,A.x(m,q,1),b-1,!0)
l.d+=d
n.d+=d
m.d+=d
e=1}for(s=-d,r=b-1;e<o;){A.e9(n,A.x(l,q,s),m,1,!0)
A.e9(A.x(n,q,1),l,A.x(m,q,1),r,!0);++e
l.d+=d
n.d+=d
m.d+=d}},
uK(a,b,c,d,e,f,g,h){var s=null,r=e*d,q=e+f,p=A.v(a,!1,s,r),o=A.v(h,!1,s,r),n=A.x(o,s,0)
if(e===0){o.i(0,0,J.d(p.a,p.d))
A.e9(A.x(p,s,1),n,A.x(o,s,1),b-1,!0)
p.d+=d
o.d+=d
e=1}else n.d-=d
while(e<q){A.e9(p,n,o,b,!0);++e
n.d+=d
p.d+=d
o.d+=d}},
uI(a,b,c,d,e,f,g,h){var s,r,q,p,o,n=null,m=e*d,l=e+f,k=A.v(a,!1,n,m),j=A.v(h,!1,n,m),i=A.x(j,n,0)
if(e===0){j.i(0,0,J.d(k.a,k.d))
A.e9(A.x(k,n,1),i,A.x(j,n,1),b-1,!0)
i.d+=d
k.d+=d
j.d+=d
e=1}for(s=-d;e<l;){A.e9(k,A.x(i,n,s),j,1,!0)
for(r=1;r<b;++r){q=r-d
p=J.d(i.a,i.d+(r-1))+J.d(i.a,i.d+q)-J.d(i.a,i.d+(q-1))
if((p&4294967040)>>>0===0)o=p
else o=p<0?0:255
q=J.d(k.a,k.d+r)
J.a2(j.a,j.d+r,q+o)}++e
i.d+=d
k.d+=d
j.d+=d}},
bV(a){var s,r,q=a.a
if(q==null)return 0
s=a.gaK()*q.c
if((s&7)!==0)return 0
r=B.a.j(s,3)
return q.gaD()===a.gR()*r?r:0},
xl(a,b,c,d){var s,r,q,p,o,n,m
for(s=a.length,r=a.$flags|0,q=0;q<d;++q){p=b+q
if(!(p>=0&&p<s))return A.a(a,p)
o=a[p]
n=c+q
if(!(n>=0&&n<s))return A.a(a,n)
m=a[n]
r&2&&A.b(a)
a[p]=m
a[n]=o}},
qR(a,b,c,d){var s,r
for(s=b+(c-1)*d,r=b;r<s;r+=d,s-=d)A.xl(a,r,s,d)},
wp(a){var s,r="ifd0"
if(!a.gcj().k(0,r).a.aN(274)||a.gcj().k(0,r).gcl()===1)return A.bc(a,!1,!1)
switch(a.gcj().k(0,r).gcl()){case 2:s=A.n7(A.bc(a,!1,!1))
break
case 3:s=A.wR(A.bc(a,!1,!1),B.da)
break
case 4:s=A.qH(A.bc(a,!1,!1))
break
case 5:s=A.n7(A.mW(a,90))
break
case 6:s=A.mW(a,90)
break
case 7:s=A.n7(A.mW(a,-90))
break
case 8:s=A.mW(a,-90)
break
default:s=A.bc(a,!1,!1)
break}s.e=A.eB(a.gcj())
s.gcj().k(0,r).scl(null)
return s},
mW(b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=B.a.V(b2,360)
b1.gbj()
if(B.a.V(b0,90)===0)switch(B.a.K(b0,90)){case 1:return A.w6(b1)
case 2:return A.w4(b1)
case 3:return A.w5(b1)
default:return A.bc(b1,!1,!1)}s=b0*3.141592653589793/180
r=Math.cos(s)
q=Math.sin(s)
p=b1.gR()
o=b1.gR()
n=b1.gN()
m=b1.gN()
l=0.5*b1.gR()
k=0.5*b1.gN()
n=Math.abs(p*r)+Math.abs(n*q)
j=0.5*n
m=Math.abs(o*q)+Math.abs(m*r)
i=0.5*m
h=b1.gaw().length
for(p=t.g,g=b1.f,f=a9,e=0;e<h;++e){d=b1.x
if(d===$)d=b1.x=A.i([],p)
if(!(e<d.length))return A.a(d,e)
c=d[e]
o=f==null
b=o?a9:f.dg()
if(b==null){a=B.b.h(n)
b=A.jY(b1,B.b.h(m),!0,a)}if(o)f=b
a0=c.f
if(a0==null)a0=g
if(a0!=null){o=b.a
if(o!=null)o.aZ(0,a0)}for(o=b.a,o=o.gE(o);o.D();){a1=o.gJ()
a2=a1.gb7()
a3=a1.gb0()
a=a2-j
a4=a3-i
a5=l+a*r+a4*q
a6=k-a*q+a4*r
a=!1
if(a5>=0)if(a6>=0){a4=c.a
a7=a4==null
a8=a7?a9:a4.a
if(a5<(a8==null?0:a8)){a=a7?a9:a4.b
a=a6<(a==null?0:a)}}if(a)b.c6(a2,a3,c.hK(a5,a6,B.dm))}}f.toString
return f},
w6(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null
for(s=a.gaw(),r=s.length,q=b,p=0;p<s.length;s.length===r||(0,A.P)(s),++p){o=s[p]
n=q==null
m=n?b:q.dg()
if(m==null){l=o.a
k=l==null
j=k?b:l.b
if(j==null)j=0
l=k?b:l.a
m=A.jY(o,l==null?0:l,!0,j)}if(n)q=m
n=o.a
n=n==null?b:n.b
i=(n==null?0:n)-1
h=A.bV(o)
if(h>0&&A.bV(m)===h){n=o.a
l=n==null
k=l?b:n.a
g=-(k==null?0:k)*h
f=l?b:J.D(n.gt(n))
if(f==null){n=o.a
n=n==null?b:n.gt(n)
if(n==null)n=B.d.gt(new Uint8Array(0))
f=J.D(n)}n=m.a
e=n==null?b:J.D(n.gt(n))
if(e==null){n=m.a
n=n==null?b:n.gt(n)
if(n==null)n=B.d.gt(new Uint8Array(0))
e=J.D(n)}d=0
for(;;){n=m.a
l=n==null
k=l?b:n.b
if(!(d<(k==null?0:k)))break
k=o.a
k=k==null?b:k.a
if(k==null)k=0
j=l?b:n.a
if(j==null)j=0
n=l?b:n.a
if(n==null)n=0
A.om(f,(i*k+d)*h,g,e,d*j*h,n,h);++d}continue}d=0
for(;;){n=m.a
n=n==null?b:n.b
if(!(d<(n==null?0:n)))break
c=0
for(;;){n=m.a
n=n==null?b:n.a
if(!(c<(n==null?0:n)))break
n=o.a
n=n==null?b:n.a0(d,i-c,b)
m.c6(c,d,n==null?new A.J():n);++c}++d}}q.toString
return q},
w4(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null
for(s=a.gaw(),r=s.length,q=c,p=0;p<s.length;s.length===r||(0,A.P)(s),++p){o=s[p]
n=o.a
m=n==null
l=m?c:n.a
k=(l==null?0:l)-1
n=m?c:n.b
j=(n==null?0:n)-1
n=q==null
i=n?c:q.dg()
if(i==null)i=A.bc(o,!0,!0)
if(n)q=i
h=A.bV(o)
if(h>0&&A.bV(i)===h){n=o.a
m=n==null
l=m?c:n.a
if(l==null)l=0
g=m?c:n.b
f=l*(g==null?0:g)
n=m?c:J.D(n.gt(n))
if(n==null){n=o.a
n=n==null?c:n.gt(n)
if(n==null)n=B.d.gt(new Uint8Array(0))
n=J.D(n)}m=i.a
m=m==null?c:J.D(m.gt(m))
if(m==null){m=i.a
m=m==null?c:m.gt(m)
if(m==null)m=B.d.gt(new Uint8Array(0))
m=J.D(m)}A.om(n,(f-1)*h,-h,m,0,f,h)
continue}e=0
for(;;){n=i.a
n=n==null?c:n.b
if(!(e<(n==null?0:n)))break
n=j-e
d=0
for(;;){m=i.a
m=m==null?c:m.a
if(!(d<(m==null?0:m)))break
m=o.a
m=m==null?c:m.a0(k-d,n,c)
i.c6(d,e,m==null?new A.J():m);++d}++e}}q.toString
return q},
w5(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null
for(s=a.gaw(),r=s.length,q=b,p=0;p<s.length;s.length===r||(0,A.P)(s),++p){o=s[p]
n=a.a
n=n==null?b:n.a
m=(n==null?0:n)-1
n=q==null
l=n?b:q.dg()
if(l==null){k=o.a
j=k==null
i=j?b:k.b
if(i==null)i=0
k=j?b:k.a
l=A.jY(o,k==null?0:k,!0,i)}if(n)q=l
h=A.bV(o)
n=!1
if(h>0)if(A.bV(l)===h){n=o.a
n=n==null?b:n.a
if(n==null)n=0
k=a.a
k=k==null?b:k.a
n=n===(k==null?0:k)}if(n){n=o.a
k=n==null
j=k?b:n.a
g=(j==null?0:j)*h
f=k?b:J.D(n.gt(n))
if(f==null){n=o.a
n=n==null?b:n.gt(n)
if(n==null)n=B.d.gt(new Uint8Array(0))
f=J.D(n)}n=l.a
e=n==null?b:J.D(n.gt(n))
if(e==null){n=l.a
n=n==null?b:n.gt(n)
if(n==null)n=B.d.gt(new Uint8Array(0))
e=J.D(n)}d=0
for(;;){n=l.a
k=n==null
j=k?b:n.b
if(!(d<(j==null?0:j)))break
j=k?b:n.a
if(j==null)j=0
n=k?b:n.a
if(n==null)n=0
A.om(f,(m-d)*h,g,e,d*j*h,n,h);++d}continue}d=0
for(;;){n=l.a
n=n==null?b:n.b
if(!(d<(n==null?0:n)))break
n=m-d
c=0
for(;;){k=l.a
k=k==null?b:k.a
if(!(c<(k==null?0:k)))break
k=o.a
k=k==null?b:k.a0(n,c,b)
l.c6(c,d,k==null?new A.J():k);++c}++d}}q.toString
return q},
om(a,b,c,d,e,f,g){var s,r,q,p,o,n
for(s=a.length,r=d.$flags|0,q=0;q<f;++q,b+=c)for(p=0;p<g;++p,e=o){o=e+1
n=b+p
if(!(n>=0&&n<s))return A.a(a,n)
n=a[n]
r&2&&A.b(d)
if(!(e>=0&&e<d.length))return A.a(d,e)
d[e]=n}},
nb(a,b){var s=A.hK(a,B.R,null,null),r=A.po(new A.eS(s,B.a1,B.aZ))
try{s=r.aa(b).Z()
return s}finally{r.h6()}},
mX(a){var s
a=(a&-a)>>>0
s=a!==0?31:32
if((a&65535)!==0)s-=16
if((a&16711935)!==0)s-=8
if((a&252645135)!==0)s-=4
if((a&858993459)!==0)s-=2
return(a&1431655765)!==0?s-1:s},
xp(a){var s
$.oP().i(0,0,a)
s=$.rk()
if(0>=s.length)return A.a(s,0)
return s[0]},
qS(a,b,c,d){return(B.a.H(a,0,255)|B.a.H(b,0,255)<<8|B.a.H(c,0,255)<<16|B.a.H(d,0,255)<<24)>>>0},
bn(a,b,c){var s,r,q,p,o,n=b.gp(b),m=b.gL(),l=a.gU(),k=l==null?null:l.gL()
if(k==null)k=a.gL()
s=a.gp(a)
if(n===1)b.i(0,0,A.en(B.b.a2(a.gp(a)>2?a.gam():a.k(0,0)),k,m))
else if(n===2){r=s>2?a.gam():a.k(0,0)
b.i(0,0,A.en(!B.kb.bs(0,k)?B.b.a2(r):r,k,m))
b.i(0,1,A.en(s===2?a.k(0,1):a.gA(),k,m))}else if(n<=s)for(q=0;q<n;++q)b.i(0,q,A.en(a.k(0,q),k,m))
else if(s===2){p=A.en(a.k(0,0),k,m)
if(n===3){b.i(0,0,p)
b.i(0,1,p)
b.i(0,2,p)}else{c=A.en(a.k(0,1),k,m)
b.i(0,0,p)
b.i(0,1,p)
b.i(0,2,p)
b.i(0,3,c)}}else{for(q=0;q<s;++q)b.i(0,q,A.en(a.k(0,q),k,m))
o=s===1?b.k(0,0):0
for(q=s;q<n;++q)b.i(0,q,q===3?c:o)}return b},
ox(a,b,c,d,e){var s,r,q=a.gU(),p=q==null?null:q.gL()
if(p==null)p=a.gL()
q=e==null
s=q?null:e.gL()
c=s==null?c:s
if(c==null)c=a.gL()
s=q?null:e.gp(e)
d=s==null?d:s
if(d==null)d=a.gp(a)
if(b==null)b=0
if(c===p&&d===a.gp(a)){if(q)return a.M()
e.aY(a)
return e}switch(c.a){case 3:if(q)r=new A.b9(new Uint8Array(d))
else r=e
return A.bn(a,r,b)
case 0:return A.bn(a,q?new A.du(d,0):e,b)
case 1:return A.bn(a,q?new A.dw(d,0):e,b)
case 2:if(q){q=d<3?1:2
r=new A.dy(d,new Uint8Array(q))}else r=e
return A.bn(a,r,b)
case 4:if(q)r=new A.dv(new Uint16Array(d))
else r=e
return A.bn(a,r,b)
case 5:if(q)r=new A.dx(new Uint32Array(d))
else r=e
return A.bn(a,r,b)
case 6:if(q)r=new A.dt(new Int8Array(d))
else r=e
return A.bn(a,r,b)
case 7:if(q)r=new A.dr(new Int16Array(d))
else r=e
return A.bn(a,r,b)
case 8:if(q)r=new A.ds(new Int32Array(d))
else r=e
return A.bn(a,r,b)
case 9:if(q)r=new A.dn(new Uint16Array(d))
else r=e
return A.bn(a,r,b)
case 10:if(q)r=new A.dp(new Float32Array(d))
else r=e
return A.bn(a,r,b)
case 11:if(q)r=new A.dq(new Float64Array(d))
else r=e
return A.bn(a,r,b)}},
a7(a){return 0.299*a.gq()+0.587*a.gv()+0.114*a.gu()},
qD(a,b,c,d,e){var s=1-d/255
B.c.i(e,0,B.b.a8(255*(1-a/255)*s))
B.c.i(e,1,B.b.a8(255*(1-b/255)*s))
B.c.i(e,2,B.b.a8(255*(1-c/255)*s))},
N(a){var s,r,q,p=$.oN()
p.$flags&2&&A.b(p)
p[0]=a
p=$.ri()
if(0>=p.length)return A.a(p,0)
s=p[0]
if(a===0)return s>>>16
if($.L==null)A.R()
r=s>>>23&511
p=$.pa.cw()
if(!(r<p.length))return A.a(p,r)
r=p[r]
if(r!==0){q=s&8388607
return r+(q+4095+(q>>>13&1)>>>13)}return A.t1(s)},
t1(a){var s,r,q=a>>>16&32768,p=(a>>>23&255)-112,o=a&8388607
if(p<=0){if(p<-10)return q
o|=8388608
s=14-p
return(q|B.a.ba(o+(B.a.Y(1,s-1)-1)+(B.a.a3(o,s)&1),s))>>>0}else if(p===143)if(o===0)return q|31744
else{o=o>>>13
r=o===0?1:0
return q|o|r|31744}else{o=o+4095+(o>>>13&1)
if((o&8388608)!==0){++p
o=0}if(p>30)return q|31744
return(q|p<<10|o>>>13)>>>0}},
R(){var s,r,q,p,o,n=$.L
if(n!=null)return n
s=new Uint32Array(65536)
$.L=J.oT(B.n.gt(s),0,null)
n=new Uint16Array(512)
$.pa.b=n
for(r=0;r<256;++r){q=(r&255)-112
if(q<=0||q>=30){n[r]=0
p=(r|256)>>>0
if(!(p<512))return A.a(n,p)
n[p]=0}else{p=q<<10>>>0
n[r]=p
o=(r|256)>>>0
if(!(o<512))return A.a(n,o)
n[o]=(p|32768)>>>0}}for(r=0;r<65536;++r)s[r]=A.t2(r)
n=$.L
n.toString
return n},
t2(a){var s,r=a>>>15&1,q=a>>>10&31,p=a&1023
if(q===0)if(p===0)return r<<31>>>0
else{while((p&1024)===0){p=p<<1;--q}++q
p&=4294966271}else if(q===31){s=r<<31
if(p===0)return(s|2139095040)>>>0
else return(s|p<<13|2139095040)>>>0}return(r<<31|q+112<<23|p<<13)>>>0},
x9(){return A.xj()}},B={}
var w=[A,J,B]
var $={}
A.nM.prototype={}
J.hL.prototype={
T(a,b){return a===b},
gI(a){return A.fs(a)},
C(a){return"Instance of '"+A.ii(a)+"'"},
gaA(a){return A.bz(A.op(this))}}
J.hZ.prototype={
C(a){return String(a)},
gI(a){return a?519018:218159},
gaA(a){return A.bz(t.y)},
$iO:1,
$ia3:1}
J.f0.prototype={
T(a,b){return null==b},
C(a){return"null"},
gI(a){return 0},
$iO:1,
$iab:1}
J.f1.prototype={$iX:1}
J.c5.prototype={
gI(a){return 0},
gaA(a){return B.kL},
C(a){return String(a)}}
J.ie.prototype={}
J.e7.prototype={}
J.bI.prototype={
C(a){var s=a[$.qY()]
if(s==null)s=a[$.oH()]
if(s==null)return this.hU(a)
return"JavaScript function for "+J.hc(s)},
$icq:1}
J.dQ.prototype={
gI(a){return 0},
C(a){return String(a)}}
J.dR.prototype={
gI(a){return 0},
C(a){return String(a)}}
J.t.prototype={
B(a,b){A.aM(a).c.a(b)
a.$flags&1&&A.b(a,29)
a.push(b)},
cM(a){a.$flags&1&&A.b(a,"removeLast",1)
if(a.length===0)throw A.h(A.j4(a,-1))
return a.pop()},
c3(a,b){var s
A.aM(a).n("f<1>").a(b)
a.$flags&1&&A.b(a,"addAll",2)
if(Array.isArray(b)){this.im(a,b)
return}for(s=J.dj(b);s.D();)a.push(s.gJ())},
im(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.h(A.br(a))
for(r=0;r<s;++r)a.push(b[r])},
aR(a){a.$flags&1&&A.b(a,"clear","clear")
a.length=0},
hA(a,b){return A.e6(a,0,A.j2(b,"count",t.p),A.aM(a).c)},
bF(a,b){return A.e6(a,b,null,A.aM(a).c)},
bU(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
bW(a,b,c){if(b<0||b>a.length)throw A.h(A.aC(b,0,a.length,"start",null))
if(c<b||c>a.length)throw A.h(A.aC(c,b,a.length,"end",null))
if(b===c)return A.i([],A.aM(a))
return A.i(a.slice(b,c),A.aM(a))},
gdl(a){if(a.length>0)return a[0]
throw A.h(A.aP())},
gdq(a){var s=a.length
if(s>0)return a[s-1]
throw A.h(A.aP())},
a6(a,b,c,d,e){var s,r,q,p,o
A.aM(a).n("f<1>").a(d)
a.$flags&2&&A.b(a,5)
A.b1(b,c,a.length)
s=c-b
if(s===0)return
A.bi(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.nD(d,e).cm(0,!1)
q=0}p=J.a6(r)
if(q+s>p.gp(r))throw A.h(A.pr())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.k(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.k(r,q+o)},
O(a,b,c,d){var s
A.aM(a).n("1?").a(d)
a.$flags&2&&A.b(a,"fillRange")
A.b1(b,c,a.length)
for(s=b;s<c;++s)a[s]=d},
bV(a,b){var s,r,q,p,o,n=A.aM(a)
n.n("e(1,1)?").a(b)
a.$flags&2&&A.b(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.vH()
if(s===2){r=a[0]
q=a[1]
n=b.$2(r,q)
if(typeof n!=="number")return n.bg()
if(n>0){a[0]=q
a[1]=r}return}p=0
if(n.c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.em(b,2))
if(p>0)this.kM(a,p)},
dF(a){return this.bV(a,null)},
kM(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bs(a,b){var s
for(s=0;s<a.length;++s)if(J.a0(a[s],b))return!0
return!1},
gW(a){return a.length===0},
gej(a){return a.length!==0},
C(a){return A.k2(a,"[","]")},
gE(a){return new J.es(a,a.length,A.aM(a).n("es<1>"))},
gI(a){return A.fs(a)},
gp(a){return a.length},
sp(a,b){a.$flags&1&&A.b(a,"set length","change the length of")
if(b<0)throw A.h(A.aC(b,0,null,"newLength",null))
if(b>a.length)A.aM(a).c.a(null)
a.length=b},
k(a,b){if(!(b>=0&&b<a.length))throw A.h(A.j4(a,b))
return a[b]},
i(a,b,c){A.aM(a).c.a(c)
a.$flags&2&&A.b(a)
if(!(b>=0&&b<a.length))throw A.h(A.j4(a,b))
a[b]=c},
gaA(a){return A.bz(A.aM(a))},
$iao:1,
$iA:1,
$if:1,
$ir:1}
J.hX.prototype={
mb(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.ii(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.k4.prototype={}
J.es.prototype={
gJ(){var s=this.d
return s==null?this.$ti.c.a(s):s},
D(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.P(q)
throw A.h(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iz:1}
J.dP.prototype={
bH(a,b){var s
A.by(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gei(b)
if(this.gei(a)===s)return 0
if(this.gei(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gei(a){return a===0?1/a<0:a<0},
h(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.h(A.aq(""+a+".toInt()"))},
ab(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.h(A.aq(""+a+".ceil()"))},
a2(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.h(A.aq(""+a+".floor()"))},
a8(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.h(A.aq(""+a+".round()"))},
H(a,b,c){if(this.bH(b,c)>0)throw A.h(A.ch(b))
if(this.bH(a,b)<0)return b
if(this.bH(a,c)>0)return c
return a},
dA(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.h(A.aC(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.a(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.G(A.aq("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.a(p,1)
s=p[1]
if(3>=r)return A.a(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.G.bO("0",o)},
C(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
V(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
a1(a,b){A.by(b)
if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.fH(a,b)},
K(a,b){return(a|0)===a?a/b|0:this.fH(a,b)},
fH(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.h(A.aq("Result of truncating division is "+A.y(s)+": "+A.y(a)+" ~/ "+b))},
Y(a,b){if(b<0)throw A.h(A.ch(b))
return b>31?0:a<<b>>>0},
P(a,b){return b>31?0:a<<b>>>0},
ba(a,b){var s
if(b<0)throw A.h(A.ch(b))
if(a>0)s=this.a9(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
j(a,b){var s
if(a>0)s=this.a9(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
a3(a,b){if(0>b)throw A.h(A.ch(b))
return this.a9(a,b)},
a9(a,b){return b>31?0:a>>>b},
gaA(a){return A.bz(t.U)},
$iba:1,
$ik:1,
$im:1}
J.f_.prototype={
aS(a,b){var s=this.Y(1,b-1)
return((a&s-1)>>>0)-((a&s)>>>0)},
gaA(a){return A.bz(t.p)},
$iO:1,
$ie:1}
J.i_.prototype={
gaA(a){return A.bz(t.i)},
$iO:1}
J.cB.prototype={
eA(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
hD(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.a(p,0)
if(p.charCodeAt(0)===133){s=J.ti(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.a(p,r)
q=p.charCodeAt(r)===133?J.tj(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
bO(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.h(B.cM)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
lQ(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bO(c,s)+a},
bH(a,b){var s
A.aU(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
C(a){return a},
gI(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gaA(a){return A.bz(t.N)},
gp(a){return a.length},
$iao:1,
$iO:1,
$iba:1,
$ipE:1,
$iT:1}
A.dS.prototype={
C(a){return"LateInitializationError: "+this.a}}
A.aw.prototype={
gp(a){return this.a.length},
k(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s.charCodeAt(b)}}
A.kX.prototype={}
A.A.prototype={}
A.bv.prototype={
gE(a){var s=this
return new A.cF(s,s.gp(s),A.n(s).n("cF<bv.E>"))},
gW(a){return this.gp(this)===0},
bF(a,b){return A.e6(this,b,null,A.n(this).n("bv.E"))}}
A.fz.prototype={
gjl(){var s=J.bW(this.a),r=this.c
if(r==null||r>s)return s
return r},
gkV(){var s=J.bW(this.a),r=this.b
if(r>s)return s
return r},
gp(a){var s,r=J.bW(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
bU(a,b){var s=this,r=s.gkV()+b
if(b<0||r>=s.gjl())throw A.h(A.k0(b,s.gp(0),s,null,"index"))
return J.rz(s.a,r)},
bF(a,b){var s,r,q=this
A.bi(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.ex(q.$ti.n("ex<1>"))
return A.e6(q.a,s,r,q.$ti.c)},
cm(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.a6(n),l=m.gp(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=J.nL(0,p.$ti.c)
return n}r=A.ae(s,m.bU(n,o),!1,p.$ti.c)
for(q=1;q<s;++q){B.c.i(r,q,m.bU(n,o+q))
if(m.gp(n)<l)throw A.h(A.br(p))}return r}}
A.cF.prototype={
gJ(){var s=this.d
return s==null?this.$ti.c.a(s):s},
D(){var s,r=this,q=r.a,p=J.a6(q),o=p.gp(q)
if(r.b!==o)throw A.h(A.br(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.bU(q,s);++r.c
return!0},
$iz:1}
A.cG.prototype={
gE(a){var s=this.a
return new A.f5(s.gE(s),this.b,A.n(this).n("f5<1,2>"))},
gp(a){var s=this.a
return s.gp(s)},
gW(a){var s=this.a
return s.gW(s)}}
A.ew.prototype={$iA:1}
A.f5.prototype={
D(){var s=this,r=s.b
if(r.D()){s.a=s.c.$1(r.gJ())
return!0}s.a=null
return!1},
gJ(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iz:1}
A.fJ.prototype={
gE(a){return new A.fK(J.dj(this.a),this.b,this.$ti.n("fK<1>"))}}
A.fK.prototype={
D(){var s,r
for(s=this.a,r=this.b;s.D();)if(r.$1(s.gJ()))return!0
return!1},
gJ(){return this.a.gJ()},
$iz:1}
A.bM.prototype={
bF(a,b){A.ja(b,"count",t.p)
A.bi(b,"count")
return new A.bM(this.a,this.b+b,A.n(this).n("bM<1>"))},
gE(a){var s=this.a
return new A.fw(s.gE(s),this.b,A.n(this).n("fw<1>"))}}
A.dA.prototype={
gp(a){var s=this.a,r=s.gp(s)-this.b
if(r>=0)return r
return 0},
bF(a,b){A.ja(b,"count",t.p)
A.bi(b,"count")
return new A.dA(this.a,this.b+b,this.$ti)},
$iA:1}
A.fw.prototype={
D(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.D()
this.b=0
return s.D()},
gJ(){return this.a.gJ()},
$iz:1}
A.ex.prototype={
gE(a){return B.cF},
gW(a){return!0},
gp(a){return 0},
bF(a,b){A.bi(b,"count")
return this},
cm(a,b){var s=J.nL(0,this.$ti.c)
return s}}
A.ey.prototype={
D(){return!1},
gJ(){throw A.h(A.aP())},
$iz:1}
A.a1.prototype={
sp(a,b){throw A.h(A.aq("Cannot change the length of a fixed-length list"))},
B(a,b){A.ak(a).n("a1.E").a(b)
throw A.h(A.aq("Cannot add to a fixed-length list"))},
cM(a){throw A.h(A.aq("Cannot remove from a fixed-length list"))}}
A.bx.prototype={
i(a,b,c){A.n(this).n("bx.E").a(c)
throw A.h(A.aq("Cannot modify an unmodifiable list"))},
sp(a,b){throw A.h(A.aq("Cannot change the length of an unmodifiable list"))},
B(a,b){A.n(this).n("bx.E").a(b)
throw A.h(A.aq("Cannot add to an unmodifiable list"))},
cM(a){throw A.h(A.aq("Cannot remove from an unmodifiable list"))},
a6(a,b,c,d,e){A.n(this).n("f<bx.E>").a(d)
throw A.h(A.aq("Cannot modify an unmodifiable list"))},
ap(a,b,c,d){return this.a6(0,b,c,d,0)},
O(a,b,c,d){A.n(this).n("bx.E?").a(d)
throw A.h(A.aq("Cannot modify an unmodifiable list"))}}
A.e8.prototype={}
A.K.prototype={$r:"+(1,2)",$s:1}
A.fV.prototype={$r:"+heic,image(1,2)",$s:2}
A.bk.prototype={$r:"+(1,2,3)",$s:3}
A.fW.prototype={$r:"+colors,splits,warmth(1,2,3)",$s:4}
A.fX.prototype={$r:"+(1,2,3,4)",$s:5}
A.fY.prototype={$r:"+minorXs,minorYs,xs,ys(1,2,3,4)",$s:6}
A.ed.prototype={$r:"+brush,colors,edges,stop,variation(1,2,3,4,5)",$s:7}
A.eu.prototype={
C(a){return A.nS(this)},
gdk(){return new A.eg(this.lv(),A.n(this).n("eg<aA<1,2>>"))},
lv(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gdk(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.ghj(),o=o.gE(o),n=A.n(s),m=n.y[1],n=n.n("aA<1,2>")
case 2:if(!o.D()){r=3
break}l=o.gJ()
k=s.k(0,l)
r=4
return a.b=new A.aA(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
$iaS:1}
A.d4.prototype={
gJ(){var s=this.d
return s==null?this.$ti.c.a(s):s},
D(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iz:1}
A.c_.prototype={
cc(){var s=this,r=s.$map
if(r==null){r=new A.cC(s.$ti.n("cC<1,2>"))
A.qE(s.a,r)
s.$map=r}return r},
k(a,b){return this.cc().k(0,b)},
b5(a,b){this.$ti.n("~(1,2)").a(b)
this.cc().b5(0,b)},
ghj(){var s=this.cc()
return new A.az(s,A.n(s).n("az<1>"))},
gp(a){return this.cc().a}}
A.dz.prototype={}
A.ev.prototype={
gp(a){return this.b},
gW(a){return this.b===0},
gE(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.d4(s,s.length,r.$ti.n("d4<1>"))},
bs(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.eH.prototype={
gp(a){return this.a.length},
gW(a){return this.a.length===0},
gE(a){var s=this.a
return new A.d4(s,s.length,this.$ti.n("d4<1>"))},
cc(){var s,r,q,p,o=this,n=o.$map
if(n==null){n=new A.cC(o.$ti.n("cC<1,1>"))
for(s=o.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
n.i(0,p,p)}o.$map=n}return n},
bs(a,b){return this.cc().aN(b)}}
A.kF.prototype={
$0(){return B.b.a2(1000*this.a.now())},
$S:13}
A.fv.prototype={}
A.l9.prototype={
bB(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.fd.prototype={
C(a){return"Null check operator used on a null value"}}
A.i4.prototype={
C(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.iE.prototype={
C(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.ko.prototype={
C(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.eA.prototype={}
A.h_.prototype={
C(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$icc:1}
A.bX.prototype={
C(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.qX(r==null?"unknown":r)+"'"},
gaA(a){var s=A.ov(this)
return A.bz(s==null?A.ak(this):s)},
$icq:1,
gme(){return this},
$C:"$1",
$R:1,
$D:null}
A.hk.prototype={$C:"$0",$R:0}
A.hl.prototype={$C:"$2",$R:2}
A.iA.prototype={}
A.iz.prototype={
C(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.qX(s)+"'"}}
A.dl.prototype={
T(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.dl))return!1
return this.$_target===b.$_target&&this.a===b.a},
gI(a){return(A.oC(this.a)^A.fs(this.$_target))>>>0},
C(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.ii(this.a)+"'")}}
A.iw.prototype={
C(a){return"RuntimeError: "+this.a}}
A.bd.prototype={
gp(a){return this.a},
gdk(){return new A.cD(this,A.n(this).n("cD<1,2>"))},
aN(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.lF(a)},
lF(a){var s=this.d
if(s==null)return!1
return this.cI(this.f5(s,a),a)>=0},
c3(a,b){A.n(this).n("aS<1,2>").a(b).b5(0,new A.kc(this))},
k(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.lG(b)},
lG(a){var s,r,q=this.d
if(q==null)return null
s=this.f5(q,a)
r=this.cI(s,a)
if(r<0)return null
return s[r].b},
i(a,b,c){var s,r,q=this,p=A.n(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.eF(s==null?q.b=q.e2():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.eF(r==null?q.c=q.e2():r,b,c)}else q.lI(b,c)},
lI(a,b){var s,r,q,p,o=this,n=A.n(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.e2()
r=o.dm(a)
q=s[r]
if(q==null)s[r]=[o.e3(a,b)]
else{p=o.cI(q,a)
if(p>=0)q[p].b=b
else q.push(o.e3(a,b))}},
dv(a,b){var s,r,q=this,p=A.n(q)
p.c.a(a)
p.n("2()").a(b)
if(q.aN(a)){s=q.k(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.i(0,a,r)
return r},
bN(a,b){var s=this
if(typeof b=="string")return s.fz(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.fz(s.c,b)
else return s.lH(b)},
lH(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.dm(a)
r=n[s]
q=o.cI(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.fN(p)
if(r.length===0)delete n[s]
return p.b},
aR(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.e1()}},
b5(a,b){var s,r,q=this
A.n(q).n("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.h(A.br(q))
s=s.c}},
eF(a,b,c){var s,r=A.n(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.e3(b,c)
else s.b=c},
fz(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.fN(s)
delete a[b]
return s.b},
e1(){this.r=this.r+1&1073741823},
e3(a,b){var s=this,r=A.n(s),q=new A.kg(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.e1()
return q},
fN(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.e1()},
dm(a){return J.bp(a)&1073741823},
f5(a,b){return a[this.dm(b)]},
cI(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a0(a[r].a,b))return r
return-1},
C(a){return A.nS(this)},
e2(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$inO:1}
A.kc.prototype={
$2(a,b){var s=this.a,r=A.n(s)
s.i(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.n(this.a).n("~(1,2)")}}
A.kg.prototype={}
A.az.prototype={
gp(a){return this.a.a},
gW(a){return this.a.a===0},
gE(a){var s=this.a
return new A.ad(s,s.r,s.e,this.$ti.n("ad<1>"))}}
A.ad.prototype={
gJ(){return this.d},
D(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.h(A.br(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iz:1}
A.kh.prototype={
gp(a){return this.a.a},
gW(a){return this.a.a===0},
gE(a){var s=this.a
return new A.be(s,s.r,s.e,this.$ti.n("be<1>"))}}
A.be.prototype={
gJ(){return this.d},
D(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.h(A.br(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iz:1}
A.cD.prototype={
gp(a){return this.a.a},
gW(a){return this.a.a===0},
gE(a){var s=this.a
return new A.f3(s,s.r,s.e,this.$ti.n("f3<1,2>"))}}
A.f3.prototype={
gJ(){var s=this.d
s.toString
return s},
D(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.h(A.br(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.aA(s.a,s.b,r.$ti.n("aA<1,2>"))
r.c=s.c
return!0}},
$iz:1}
A.cC.prototype={
dm(a){return A.wA(a)&1073741823},
cI(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a0(a[r].a,b))return r
return-1}}
A.nc.prototype={
$1(a){return this.a(a)},
$S:35}
A.nd.prototype={
$2(a,b){return this.a(a,b)},
$S:36}
A.ne.prototype={
$1(a){return this.a(A.aU(a))},
$S:43}
A.ar.prototype={
gaA(a){return A.bz(this.fc())},
fc(){return A.wN(this.$r,this.d6())},
C(a){return this.fK(!1)},
fK(a){var s,r,q,p,o,n=this.jq(),m=this.d6(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.a(m,q)
o=m[q]
l=a?l+A.pI(o):l+A.y(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
jq(){var s,r=this.$s
while($.lU.length<=r)B.c.B($.lU,null)
s=$.lU[r]
if(s==null){s=this.iE()
B.c.i($.lU,r,s)}return s},
iE(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.aQ(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.c.i(j,q,r[s])}}j=A.nQ(j,!1,k)
j.$flags=3
return j}}
A.d7.prototype={
d6(){return[this.a,this.b]},
T(a,b){if(b==null)return!1
return b instanceof A.d7&&this.$s===b.$s&&J.a0(this.a,b.a)&&J.a0(this.b,b.b)},
gI(a){return A.dV(this.$s,this.a,this.b,B.E)}}
A.d8.prototype={
d6(){return[this.a,this.b,this.c]},
T(a,b){var s=this
if(b==null)return!1
return b instanceof A.d8&&s.$s===b.$s&&J.a0(s.a,b.a)&&J.a0(s.b,b.b)&&J.a0(s.c,b.c)},
gI(a){var s=this
return A.dV(s.$s,s.a,s.b,s.c)}}
A.ce.prototype={
d6(){return this.a},
T(a,b){if(b==null)return!1
return b instanceof A.ce&&this.$s===b.$s&&A.v1(this.a,b.a)},
gI(a){return A.dV(this.$s,A.o(this.a),B.E,B.E)}}
A.lB.prototype={
cw(){var s=this.b
if(s===this)throw A.h(A.kd(""))
return s}}
A.c6.prototype={
gaA(a){return B.kE},
cC(a,b,c){A.ah(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
h2(a){return this.cC(a,0,null)},
fZ(a,b,c){A.ah(a,b,c)
return c==null?new Int8Array(a,b):new Int8Array(a,b,c)},
h1(a,b,c){var s
A.ah(a,b,c)
s=new Uint8ClampedArray(a,b,c)
return s},
dh(a,b,c){A.ah(a,b,c)
c=B.a.K(a.byteLength-b,2)
return new Uint16Array(a,b,c)},
h_(a){return this.dh(a,0,null)},
fX(a,b,c){A.ah(a,b,c)
c=B.a.K(a.byteLength-b,2)
return new Int16Array(a,b,c)},
h0(a,b,c){A.ah(a,b,c)
c=B.a.K(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
fY(a,b,c){A.ah(a,b,c)
if(c==null)c=B.a.K(a.byteLength-b,4)
return new Int32Array(a,b,c)},
fW(a,b,c){A.ah(a,b,c)
c=B.a.K(a.byteLength-b,4)
return new Float32Array(a,b,c)},
ee(a,b,c){A.ah(a,b,c)
return new Float64Array(a,b,c)},
fV(a,b,c){var s
A.ah(a,b,c)
s=new DataView(a,b,c)
return s},
$iO:1,
$ic6:1}
A.dU.prototype={$idU:1}
A.f9.prototype={
gt(a){if(((a.$flags|0)&2)!==0)return new A.m3(a.buffer)
else return a.buffer},
jK(a,b,c,d){var s=A.aC(b,0,c,d,null)
throw A.h(s)},
eQ(a,b,c,d){if(b>>>0!==b||b>c)this.jK(a,b,c,d)},
$ia4:1}
A.m3.prototype={
cC(a,b,c){var s=A.pB(this.a,b,c)
s.$flags=3
return s},
h2(a){return this.cC(0,0,null)},
fZ(a,b,c){var s=A.tx(this.a,b,c)
s.$flags=3
return s},
h1(a,b,c){var s=A.tC(this.a,b,c)
s.$flags=3
return s},
dh(a,b,c){var s=A.tz(this.a,b,c)
s.$flags=3
return s},
h_(a){return this.dh(0,0,null)},
fX(a,b,c){var s=A.tu(this.a,b,c)
s.$flags=3
return s},
h0(a,b,c){var s=A.tB(this.a,b,c)
s.$flags=3
return s},
fY(a,b,c){var s=A.tw(this.a,b,c)
s.$flags=3
return s},
fW(a,b,c){var s=A.ts(this.a,b,c)
s.$flags=3
return s},
ee(a,b,c){var s=A.tt(this.a,b,c)
s.$flags=3
return s},
fV(a,b,c){var s=A.tq(this.a,b,c)
s.$flags=3
return s}}
A.i7.prototype={
gaA(a){return B.kF},
$iO:1}
A.aj.prototype={
gp(a){return a.length},
fD(a,b,c,d,e){var s,r,q
t.dO.a(d)
s=a.length
this.eQ(a,b,s,"start")
this.eQ(a,c,s,"end")
if(b>c)throw A.h(A.aC(b,0,c,null,null))
r=c-b
if(e<0)throw A.h(A.av(e,null))
q=d.length
if(q-e<r)throw A.h(A.kY("Not enough elements"))
if(e!==0||q!==r)d=d.subarray(e,e+r)
a.set(d,b)},
$iao:1,
$iaR:1}
A.c7.prototype={
k(a,b){A.bU(b,a,a.length)
return a[b]},
i(a,b,c){A.ok(c)
a.$flags&2&&A.b(a)
A.bU(b,a,a.length)
a[b]=c},
a6(a,b,c,d,e){t.id.a(d)
a.$flags&2&&A.b(a,5)
if(t.dQ.b(d)){this.fD(a,b,c,d,e)
return}this.eC(a,b,c,d,e)},
ap(a,b,c,d){return this.a6(a,b,c,d,0)},
$iA:1,
$if:1,
$ir:1}
A.aT.prototype={
i(a,b,c){A.p(c)
a.$flags&2&&A.b(a)
A.bU(b,a,a.length)
a[b]=c},
a6(a,b,c,d,e){t.fm.a(d)
a.$flags&2&&A.b(a,5)
if(t.aj.b(d)){this.fD(a,b,c,d,e)
return}this.eC(a,b,c,d,e)},
ap(a,b,c,d){return this.a6(a,b,c,d,0)},
$iA:1,
$if:1,
$ir:1}
A.cH.prototype={
gaA(a){return B.kG},
$iO:1,
$icH:1,
$ieF:1}
A.f6.prototype={
gaA(a){return B.kH},
$iO:1,
$ibs:1}
A.f7.prototype={
gaA(a){return B.kI},
k(a,b){A.bU(b,a,a.length)
return a[b]},
bW(a,b,c){return new Int16Array(a.subarray(b,A.j0(b,c,a.length)))},
$iO:1,
$icA:1}
A.cI.prototype={
gaA(a){return B.kJ},
k(a,b){A.bU(b,a,a.length)
return a[b]},
$iO:1,
$icI:1,
$idO:1}
A.f8.prototype={
gaA(a){return B.kK},
k(a,b){A.bU(b,a,a.length)
return a[b]},
$iO:1,
$inK:1}
A.fa.prototype={
gaA(a){return B.kN},
k(a,b){A.bU(b,a,a.length)
return a[b]},
$iO:1,
$ilb:1}
A.fb.prototype={
gaA(a){return B.kO},
k(a,b){A.bU(b,a,a.length)
return a[b]},
$iO:1,
$ibQ:1}
A.cJ.prototype={
gaA(a){return B.kP},
gp(a){return a.length},
k(a,b){A.bU(b,a,a.length)
return a[b]},
$iO:1,
$icJ:1}
A.c8.prototype={
gaA(a){return B.kQ},
gp(a){return a.length},
k(a,b){A.p(b)
A.bU(b,a,a.length)
return a[b]},
bW(a,b,c){return new Uint8Array(a.subarray(b,A.j0(b,c,a.length)))},
hT(a,b){return this.bW(a,b,null)},
$iO:1,
$ic8:1,
$iaL:1}
A.fP.prototype={}
A.fQ.prototype={}
A.fR.prototype={}
A.fS.prototype={}
A.bj.prototype={
n(a){return A.h5(v.typeUniverse,this,a)},
aM(a){return A.qe(v.typeUniverse,this,a)}}
A.iS.prototype={}
A.iZ.prototype={
C(a){return A.aV(this.a,null)}}
A.iQ.prototype={
C(a){return this.a}}
A.h1.prototype={$ibO:1}
A.ly.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:22}
A.lx.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:66}
A.lz.prototype={
$0(){this.a.$0()},
$S:24}
A.lA.prototype={
$0(){this.a.$0()},
$S:24}
A.lZ.prototype={
ik(a,b){if(self.setTimeout!=null)self.setTimeout(A.em(new A.m_(this,b),0),a)
else throw A.h(A.aq("`setTimeout()` not found."))}}
A.m_.prototype={
$0(){this.b.$0()},
$S:2}
A.iM.prototype={
ef(a){var s,r=this,q=r.$ti
q.n("1/?").a(a)
if(a==null)a=q.c.a(a)
if(!r.b)r.a.eJ(a)
else{s=r.a
if(q.n("aJ<1>").b(a))s.eP(a)
else s.eT(a)}},
eg(a,b){var s=this.a
if(this.b)s.cY(new A.aO(a,b))
else s.dJ(new A.aO(a,b))}}
A.mb.prototype={
$1(a){return this.a.$2(0,a)},
$S:12}
A.mc.prototype={
$2(a,b){this.a.$2(1,new A.eA(a,t.l.a(b)))},
$S:37}
A.mH.prototype={
$2(a,b){this.a(A.p(a),b)},
$S:40}
A.h0.prototype={
gJ(){var s=this.b
return s==null?this.$ti.c.a(s):s},
kN(a,b){var s,r,q
a=A.p(a)
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
D(){var s,r,q,p,o=this,n=null,m=0
for(;;){s=o.d
if(s!=null)try{if(s.D()){o.b=s.gJ()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.kN(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.q8
return!1}if(0>=p.length)return A.a(p,-1)
o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.q8
throw n
return!1}if(0>=p.length)return A.a(p,-1)
o.a=p.pop()
m=1
continue}throw A.h(A.kY("sync*"))}return!1},
mi(a){var s,r,q=this
if(a instanceof A.eg){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.c.B(r,q.a)
q.a=s
return 2}else{q.d=J.dj(a)
return 2}},
$iz:1}
A.eg.prototype={
gE(a){return new A.h0(this.a(),this.$ti.n("h0<1>"))}}
A.aO.prototype={
C(a){return A.y(this.a)},
$iY:1,
gcp(){return this.b}}
A.jL.prototype={
$0(){var s,r,q,p,o,n,m=null
try{m=this.a.$0()}catch(q){s=A.bo(q)
r=A.dh(q)
p=s
o=r
n=A.qn(p,o)
p=new A.aO(p,o)
this.b.cY(p)
return}this.b.eS(m)},
$S:2}
A.jK.prototype={
$0(){this.c.a(null)
this.b.eS(null)},
$S:2}
A.iO.prototype={
eg(a,b){var s=this.a
if((s.a&30)!==0)throw A.h(A.kY("Future already completed"))
s.dJ(A.vG(a,b))},
h9(a){return this.eg(a,null)}}
A.fL.prototype={
ef(a){var s,r=this.$ti
r.n("1/?").a(a)
s=this.a
if((s.a&30)!==0)throw A.h(A.kY("Future already completed"))
s.eJ(r.n("1/").a(a))}}
A.d2.prototype={
lL(a){if((this.c&15)!==6)return!0
return this.b.b.em(t.nU.a(this.d),a.a,t.y,t.K)},
lD(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.R.b(q))p=l.m3(q,m,a.b,o,n,t.l)
else p=l.em(t.x.a(q),m,o,n)
try{o=r.$ti.n("2/").a(p)
return o}catch(s){if(t.do.b(A.bo(s))){if((r.c&1)!==0)throw A.h(A.av("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.h(A.av("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.a5.prototype={
en(a,b,c){var s,r,q=this.$ti
q.aM(c).n("1/(2)").a(a)
s=$.Z
if(s===B.B){if(!t.R.b(b)&&!t.x.b(b))throw A.h(A.j9(b,"onError",u.c))}else{c.n("@<0/>").aM(q.c).n("1(2)").a(a)
b=A.w0(b,s)}r=new A.a5(s,c.n("a5<0>"))
this.dI(new A.d2(r,3,a,b,q.n("@<1>").aM(c).n("d2<1,2>")))
return r},
fI(a,b,c){var s,r=this.$ti
r.aM(c).n("1/(2)").a(a)
s=new A.a5($.Z,c.n("a5<0>"))
this.dI(new A.d2(s,19,a,b,r.n("@<1>").aM(c).n("d2<1,2>")))
return s},
kQ(a){this.a=this.a&1|16
this.c=a},
cX(a){this.a=a.a&30|this.a&1
this.c=a.c},
dI(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.dI(a)
return}r.cX(s)}A.j1(null,null,r.b,t.M.a(new A.lE(r,a)))}},
fn(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.fn(a)
return}m.cX(n)}l.a=m.dd(a)
A.j1(null,null,m.b,t.M.a(new A.lJ(l,m)))}},
cA(){var s=t.F.a(this.c)
this.c=null
return this.dd(s)},
dd(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
eS(a){var s,r=this,q=r.$ti
q.n("1/").a(a)
if(q.n("aJ<1>").b(a))A.lH(a,r,!0)
else{s=r.cA()
q.c.a(a)
r.a=8
r.c=a
A.d3(r,s)}},
eT(a){var s,r=this
r.$ti.c.a(a)
s=r.cA()
r.a=8
r.c=a
A.d3(r,s)},
iC(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.cA()
q.cX(a)
A.d3(q,r)},
cY(a){var s=this.cA()
this.kQ(a)
A.d3(this,s)},
eJ(a){var s=this.$ti
s.n("1/").a(a)
if(s.n("aJ<1>").b(a)){this.eP(a)
return}this.iq(a)},
iq(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.j1(null,null,s.b,t.M.a(new A.lG(s,a)))},
eP(a){A.lH(this.$ti.n("aJ<1>").a(a),this,!1)
return},
dJ(a){this.a^=2
A.j1(null,null,this.b,t.M.a(new A.lF(this,a)))},
$iaJ:1}
A.lE.prototype={
$0(){A.d3(this.a,this.b)},
$S:2}
A.lJ.prototype={
$0(){A.d3(this.b,this.a.a)},
$S:2}
A.lI.prototype={
$0(){A.lH(this.a.a,this.b,!0)},
$S:2}
A.lG.prototype={
$0(){this.a.eT(this.b)},
$S:2}
A.lF.prototype={
$0(){this.a.cY(this.b)},
$S:2}
A.lM.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.m2(t.mY.a(q.d),t.z)}catch(p){s=A.bo(p)
r=A.dh(p)
if(k.c&&t.u.a(k.b.a.c).a===s){q=k.a
q.c=t.u.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.nF(q)
n=k.a
n.c=new A.aO(q,o)
q=n}q.b=!0
return}if(j instanceof A.a5&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.u.a(j.c)
q.b=!0}return}if(j instanceof A.a5){m=k.b.a
l=new A.a5(m.b,m.$ti)
j.en(new A.lN(l,m),new A.lO(l),t.q)
q=k.a
q.c=l
q.b=!1}},
$S:2}
A.lN.prototype={
$1(a){this.a.iC(this.b)},
$S:22}
A.lO.prototype={
$2(a,b){A.eh(a)
t.l.a(b)
this.a.cY(new A.aO(a,b))},
$S:45}
A.lL.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.em(o.n("2/(1)").a(p.d),m,o.n("2/"),n)}catch(l){s=A.bo(l)
r=A.dh(l)
q=s
p=r
if(p==null)p=A.nF(q)
o=this.a
o.c=new A.aO(q,p)
o.b=!0}},
$S:2}
A.lK.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.u.a(l.a.a.c)
p=l.b
if(p.a.lL(s)&&p.a.e!=null){p.c=p.a.lD(s)
p.b=!1}}catch(o){r=A.bo(o)
q=A.dh(o)
p=t.u.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.nF(p)
m=l.b
m.c=new A.aO(p,n)
p=m}p.b=!0}},
$S:2}
A.iN.prototype={}
A.iW.prototype={}
A.h6.prototype={$iq_:1}
A.iV.prototype={
m4(a){var s,r,q
t.M.a(a)
try{if(B.B===$.Z){a.$0()
return}A.qu(null,null,this,a,t.q)}catch(q){s=A.bo(q)
r=A.dh(q)
A.os(A.eh(s),t.l.a(r))}},
h4(a){return new A.lV(this,t.M.a(a))},
m2(a,b){b.n("0()").a(a)
if($.Z===B.B)return a.$0()
return A.qu(null,null,this,a,b)},
em(a,b,c,d){c.n("@<0>").aM(d).n("1(2)").a(a)
d.a(b)
if($.Z===B.B)return a.$1(b)
return A.w3(null,null,this,a,b,c,d)},
m3(a,b,c,d,e,f){d.n("@<0>").aM(e).aM(f).n("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.Z===B.B)return a.$2(b,c)
return A.w2(null,null,this,a,b,c,d,e,f)},
hw(a,b,c,d){return b.n("@<0>").aM(c).aM(d).n("1(2,3)").a(a)}}
A.lV.prototype={
$0(){return this.a.m4(this.b)},
$S:2}
A.ms.prototype={
$0(){A.rU(this.a,this.b)},
$S:2}
A.fN.prototype={
gE(a){var s=this,r=new A.d5(s,s.r,s.$ti.n("d5<1>"))
r.c=s.e
return r},
gp(a){return this.a},
gW(a){return this.a===0},
B(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.eR(s==null?q.b=A.og():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.eR(r==null?q.c=A.og():r,b)}else return q.il(b)},
il(a){var s,r,q,p=this
p.$ti.c.a(a)
s=p.d
if(s==null)s=p.d=A.og()
r=J.bp(a)&1073741823
q=s[r]
if(q==null)s[r]=[p.dN(a)]
else{if(p.jt(q,a)>=0)return!1
q.push(p.dN(a))}return!0},
eR(a,b){this.$ti.c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.dN(b)
return!0},
dN(a){var s=this,r=new A.iT(s.$ti.c.a(a))
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
jt(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a0(a[r].a,b))return r
return-1}}
A.iT.prototype={}
A.d5.prototype={
gJ(){var s=this.d
return s==null?this.$ti.c.a(s):s},
D(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.h(A.br(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.n("1?").a(r.a)
s.c=r.b
return!0}},
$iz:1}
A.ki.prototype={
$2(a,b){this.a.i(0,this.b.a(a),this.c.a(b))},
$S:48}
A.C.prototype={
gE(a){return new A.cF(a,this.gp(a),A.ak(a).n("cF<C.E>"))},
bU(a,b){return this.k(a,b)},
gW(a){return this.gp(a)===0},
gej(a){return!this.gW(a)},
gdl(a){if(this.gp(a)===0)throw A.h(A.aP())
return this.k(a,0)},
gdq(a){if(this.gp(a)===0)throw A.h(A.aP())
return this.k(a,this.gp(a)-1)},
bs(a,b){var s,r=this.gp(a)
for(s=0;s<r;++s){if(J.a0(this.k(a,s),b))return!0
if(r!==this.gp(a))throw A.h(A.br(a))}return!1},
bF(a,b){return A.e6(a,b,null,A.ak(a).n("C.E"))},
hA(a,b){return A.e6(a,0,A.j2(b,"count",t.p),A.ak(a).n("C.E"))},
cm(a,b){var s,r,q,p,o=this
if(o.gW(a)){s=J.hY(0,A.ak(a).n("C.E"))
return s}r=o.k(a,0)
q=A.ae(o.gp(a),r,!0,A.ak(a).n("C.E"))
for(p=1;p<o.gp(a);++p)B.c.i(q,p,o.k(a,p))
return q},
m7(a){return this.cm(a,!0)},
B(a,b){var s
A.ak(a).n("C.E").a(b)
s=this.gp(a)
this.sp(a,s+1)
this.i(a,s,b)},
cM(a){var s,r=this
if(r.gp(a)===0)throw A.h(A.aP())
s=r.k(a,r.gp(a)-1)
r.sp(a,r.gp(a)-1)
return s},
bV(a,b){var s,r=A.ak(a)
r.n("e(C.E,C.E)?").a(b)
s=b==null?A.ww():b
A.ix(a,0,this.gp(a)-1,s,r.n("C.E"))},
dF(a){return this.bV(a,null)},
bW(a,b,c){var s,r=this.gp(a)
A.b1(b,c,r)
s=A.w(this.hM(a,b,c),A.ak(a).n("C.E"))
return s},
hM(a,b,c){A.b1(b,c,this.gp(a))
return A.e6(a,b,c,A.ak(a).n("C.E"))},
O(a,b,c,d){var s
A.ak(a).n("C.E?").a(d)
A.b1(b,c,this.gp(a))
for(s=b;s<c;++s)this.i(a,s,d)},
a6(a,b,c,d,e){var s,r,q,p,o
A.ak(a).n("f<C.E>").a(d)
A.b1(b,c,this.gp(a))
s=c-b
if(s===0)return
A.bi(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.nD(d,e).cm(0,!1)
r=0}p=J.a6(q)
if(r+s>p.gp(q))throw A.h(A.pr())
if(r<b)for(o=s-1;o>=0;--o)this.i(a,b+o,p.k(q,r+o))
else for(o=0;o<s;++o)this.i(a,b+o,p.k(q,r+o))},
ap(a,b,c,d){return this.a6(a,b,c,d,0)},
dE(a,b,c){A.ak(a).n("f<C.E>").a(c)
this.ap(a,b,b+c.length,c)},
C(a){return A.k2(a,"[","]")},
$iA:1,
$if:1,
$ir:1}
A.dT.prototype={
gdk(){var s=A.n(this),r=s.n("az<1>")
s=s.n("aA<1,2>")
return A.tp(new A.az(this,r),r.aM(s).n("1(f.E)").a(new A.kk(this)),r.n("f.E"),s)},
gp(a){return this.a},
C(a){return A.nS(this)},
$iaS:1}
A.kk.prototype={
$1(a){var s=this.a,r=A.n(s)
r.c.a(a)
s=s.k(0,a)
if(s==null)s=r.y[1].a(s)
return new A.aA(a,s,r.n("aA<1,2>"))},
$S(){return A.n(this.a).n("aA<1,2>(1)")}}
A.kl.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.y(a)
r.a=(r.a+=s)+": "
s=A.y(b)
r.a+=s},
$S:38}
A.f4.prototype={
gE(a){var s=this
return new A.fO(s,s.c,s.d,s.b,s.$ti.n("fO<1>"))},
gW(a){return this.b===this.c},
gp(a){return(this.c-this.b&this.a.length-1)>>>0},
bU(a,b){var s,r,q=this,p=q.gp(0)
if(0>b||b>=p)A.G(A.k0(b,p,q,null,"index"))
p=q.a
s=p.length
r=(q.b+b&s-1)>>>0
if(!(r>=0&&r<s))return A.a(p,r)
r=p[r]
return r==null?q.$ti.c.a(r):r},
c3(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.$ti
j.n("f<1>").a(b)
s=b.length
r=k.gp(0)
q=r+s
p=k.a
o=p.length
if(q>=o){n=A.ae(A.to(q+(q>>>1)),null,!1,j.n("1?"))
k.c=k.l4(n)
k.a=n
k.b=0
B.c.a6(n,r,q,b,0)
k.c+=s}else{j=k.c
m=o-j
if(s<m){B.c.a6(p,j,j+s,b,0)
k.c+=s}else{l=s-m
B.c.a6(p,j,j+m,b,0)
B.c.a6(k.a,0,l,b,m)
k.c=l}}++k.d},
C(a){return A.k2(this,"{","}")},
hz(){var s,r,q=this,p=q.b
if(p===q.c)throw A.h(A.aP());++q.d
s=q.a
if(!(p<s.length))return A.a(s,p)
r=s[p]
if(r==null)r=q.$ti.c.a(r)
B.c.i(s,p,null)
q.b=(q.b+1&q.a.length-1)>>>0
return r},
l4(a){var s,r,q,p,o,n=this
n.$ti.n("r<1?>").a(a)
s=n.b
r=n.c
q=n.a
if(s<=r){p=r-s
B.c.a6(a,0,p,q,s)
return p}else{o=q.length-s
B.c.a6(a,0,o,q,s)
B.c.a6(a,o,o+n.c,n.a,0)
return n.c+o}},
$itS:1}
A.fO.prototype={
gJ(){var s=this.e
return s==null?this.$ti.c.a(s):s},
D(){var s,r,q=this,p=q.a
if(q.c!==p.d)A.G(A.br(p))
s=q.d
if(s===q.b){q.e=null
return!1}p=p.a
r=p.length
if(!(s<r))return A.a(p,s)
q.e=p[s]
q.d=(s+1&r-1)>>>0
return!0},
$iz:1}
A.bL.prototype={
gW(a){return this.gp(this)===0},
C(a){return A.k2(this,"{","}")},
bF(a,b){return A.pQ(this,b,A.n(this).c)},
$iA:1,
$if:1}
A.fZ.prototype={}
A.m5.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:28}
A.m4.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:28}
A.m1.prototype={
ci(a){var s,r,q=a.length,p=A.b1(0,null,q),o=new Uint8Array(p)
for(s=0;s<p;++s){if(!(s<q))return A.a(a,s)
r=a.charCodeAt(s)
if((r&4294967040)!==0)throw A.h(A.j9(a,"string","Contains invalid characters."))
if(!(s<p))return A.a(o,s)
o[s]=r}return o}}
A.m0.prototype={
ci(a){var s,r,q,p
t.L.a(a)
s=a.length
r=A.b1(0,null,s)
for(q=0;q<r;++q){if(!(q<s))return A.a(a,q)
p=a[q]
if((p&4294967040)!==0){if(!this.a)throw A.h(A.nI("Invalid value in input: "+p,null,null))
return this.iG(a,0,r)}}return A.e5(a,0,r)},
iG(a,b,c){var s,r,q,p
t.L.a(a)
for(s=a.length,r=b,q="";r<c;++r){if(!(r<s))return A.a(a,r)
p=a[r]
q+=A.dY((p&4294967040)!==0?65533:p)}return q.charCodeAt(0)==0?q:q}}
A.dm.prototype={}
A.hp.prototype={}
A.hq.prototype={}
A.i5.prototype={
aL(a){var s
t.L.a(a)
s=B.dq.ci(a)
return s}}
A.kf.prototype={}
A.ke.prototype={}
A.iF.prototype={
lj(a,b){t.L.a(a)
return(b===!0?B.kS:B.kR).ci(a)}}
A.iG.prototype={
ci(a){return new A.j_(this.a).eV(t.L.a(a),0,null,!0)}}
A.j_.prototype={
eV(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.b1(b,c,a.length)
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.vd(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.vc(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.dQ(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.ve(o)
l.b=0
throw A.h(A.nI(m,a,p+l.c))}return n},
dQ(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.a.K(b+c,2)
r=q.dQ(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.dQ(a,s,c,d)}return q.lo(a,b,c,d)},
lo(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.fy(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.a(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.a(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.a(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.dY(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.dY(h)
e.a+=p
break
case 65:p=A.dY(h)
e.a+=p;--d
break
default:p=A.dY(h)
e.a=(e.a+=p)+p
break}else{k.b=g
k.c=d-1
return""}g=0}if(d===a0)break A
o=d+1
if(!(d>=0&&d<c))return A.a(a,d)
s=a[d]}o=d+1
if(!(d>=0&&d<c))return A.a(a,d)
s=a[d]
if(s<128){for(;;){if(!(o<a0)){n=a0
break}m=o+1
if(!(o>=0&&o<c))return A.a(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-d<20)for(l=d;l<n;++l){if(!(l<c))return A.a(a,l)
p=A.dY(a[l])
e.a+=p}else{p=A.e5(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.dY(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.cm.prototype={
T(a,b){if(b==null)return!1
return b instanceof A.cm},
gI(a){return B.a.gI(0)},
bH(a,b){t.jS.a(b)
return 0},
C(a){return"0:00:00."+B.G.lQ(B.a.C(0),6,"0")},
$iba:1}
A.lC.prototype={
C(a){return this.a7()}}
A.Y.prototype={
gcp(){return A.tM(this)}}
A.he.prototype={
C(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.jz(s)
return"Assertion failed"}}
A.bO.prototype={}
A.b8.prototype={
gdT(){return"Invalid argument"+(!this.a?"(s)":"")},
gdS(){return""},
C(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.y(p),n=s.gdT()+q+o
if(!s.a)return n
return n+s.gdS()+": "+A.jz(s.geh())},
geh(){return this.b}}
A.e1.prototype={
geh(){return A.ol(this.b)},
gdT(){return"RangeError"},
gdS(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.y(q):""
else if(q==null)s=": Not greater than or equal to "+A.y(r)
else if(q>r)s=": Not in inclusive range "+A.y(r)+".."+A.y(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.y(r)
return s}}
A.hJ.prototype={
geh(){return A.p(this.b)},
gdT(){return"RangeError"},
gdS(){if(A.p(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gp(a){return this.f}}
A.fB.prototype={
C(a){return"Unsupported operation: "+this.a}}
A.iD.prototype={
C(a){return"UnimplementedError: "+this.a}}
A.e4.prototype={
C(a){return"Bad state: "+this.a}}
A.ho.prototype={
C(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.jz(s)+"."}}
A.ia.prototype={
C(a){return"Out of Memory"},
gcp(){return null},
$iY:1}
A.fx.prototype={
C(a){return"Stack Overflow"},
gcp(){return null},
$iY:1}
A.lD.prototype={
C(a){return"Exception: "+this.a}}
A.eG.prototype={
C(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.c
return q!=null?r+(" (at offset "+A.y(q)+")"):r}}
A.f.prototype={
cm(a,b){var s=A.n(this).n("f.E")
if(b)s=A.w(this,s)
else{s=A.w(this,s)
s.$flags=1
s=s}return s},
gp(a){var s,r=this.gE(this)
for(s=0;r.D();)++s
return s},
gW(a){return!this.gE(this).D()},
gej(a){return!this.gW(this)},
bF(a,b){return A.pQ(this,b,A.n(this).n("f.E"))},
bU(a,b){var s,r
A.bi(b,"index")
s=this.gE(this)
for(r=b;s.D();){if(r===0)return s.gJ();--r}throw A.h(A.k0(b,b-r,this,null,"index"))},
C(a){return A.tf(this,"(",")")}}
A.aA.prototype={
C(a){return"MapEntry("+A.y(this.a)+": "+A.y(this.b)+")"}}
A.ab.prototype={
gI(a){return A.I.prototype.gI.call(this,0)},
C(a){return"null"}}
A.I.prototype={$iI:1,
T(a,b){return this===b},
gI(a){return A.fs(this)},
C(a){return"Instance of '"+A.ii(this)+"'"},
gaA(a){return A.wV(this)},
toString(){return this.C(this)}}
A.iX.prototype={
C(a){return""},
$icc:1}
A.cY.prototype={
gcF(){var s,r=this.b
if(r==null)r=$.o0.$0()
s=r-this.a
if($.ep()===1000)return s
return B.a.K(s,1000)},
cq(){var s=this,r=s.b
if(r!=null){s.a=s.a+($.o0.$0()-r)
s.b=null}}}
A.fy.prototype={
gp(a){return this.a.length},
C(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.hs.prototype={
C(a){return"Expando:null"}}
A.kn.prototype={
C(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.ni.prototype={
$1(a){return this.a.ef(this.b.n("0/?").a(a))},
$S:12}
A.nj.prototype={
$1(a){if(a==null)return this.a.h9(new A.kn(a===undefined))
return this.a.h9(a)},
$S:12}
A.fU.prototype={
dH(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.a.K(a-s,k)
r=a>>>0
a=B.a.K(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.a.K(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.a.K(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.a.K(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.a.K(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.a.K(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.bS()
l.bS()
l.bS()
l.bS()},
bS(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.a.K(o-n+(q-p)+(m-r),4294967296)>>>0},
lN(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.h(A.pN("max must be in range 0 < max \u2264 2^32, was "+a))
s=a-1
if((a&s)>>>0===0){p.bS()
return(p.a&s)>>>0}do{p.bS()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
ds(){var s,r=this
r.bS()
s=r.a
r.bS()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992}}
A.jQ.prototype={
i_(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=a.length
for(s=0;s<f;++s){r=a[s]
if(r>g.b)g.b=r
if(r<g.c)g.c=r}r=g.b
q=B.a.Y(1,r)
p=g.a=new Uint32Array(q)
for(o=1,n=0,m=2;o<=r;){for(l=o<<16,s=0;s<f;++s)if(a[s]===o){for(k=n,j=0,i=0;i<o;++i){j=(j<<1|k&1)>>>0
k=k>>>1}for(h=(l|s)>>>0,i=j;i<q;i+=m){if(!(i>=0))return A.a(p,i)
p[i]=h}++n}++o
n=n<<1>>>0
m=m<<1>>>0}}}
A.eT.prototype={
a7(){return"InflateFormat."+this.b}}
A.eS.prototype={
ln(a){var s,r,q,p,o,n,m=this,l="Truncated zlib stream"
switch(m.f.a){case 0:s=m.a
r=s.c
q=s.d
q===$&&A.c()
if(r>=q){if(m.d===0&&m.b!==B.dk)throw A.h(A.b7("Empty input is not a "+m.b.b+" stream"))
m.f=B.cr
return!1}if(m.b===B.aF)if(!m.ku()){if(m.d!==0)throw A.h(A.b7("Data after the last gzip member"))
s.c=r
m.b=B.a1}if(m.b===B.a1){if(s.gp(0)<2)A.G(A.b7(l))
p=s.G()
o=s.G()
if((p&15)!==8)A.G(A.b7("Only deflate compression is supported"))
if(B.a.V(p*256+o,31)!==0)A.G(A.b7("Invalid zlib header"))
if((o&32)!==0)A.G(A.b7("zlib preset dictionaries are not supported"))}m.e=a.e+a.f
m.c=new A.k1(s,a)
m.f=B.kY
return!0
case 1:s=m.c
r=!s.jU()
if(r&&s.d)A.G(A.b7("Invalid deflate data"))
if(r)m.f=B.kZ
return!0
case 2:s=m.b
if(s===B.aF){s=m.a
if(s.gp(0)<8)throw A.h(A.b7("Truncated gzip stream"))
s.l()
n=s.l()
if(B.a.V(a.e+a.f-m.e,4294967296)!==n)throw A.h(A.b7("gzip member length does not match"))}else if(s===B.a1){s=m.a
if(s.gp(0)<4)throw A.h(A.b7(l))
s.l()}++m.d
s=m.b===B.aF
m.f=s?B.aZ:B.cr
return s
case 3:return!1}},
ku(){var s,r,q,p,o=this.a
if(o.gp(0)<10)return!1
if(o.m()!==35615)return!1
if(o.G()!==8)return!1
s=o.G()
o.l()
o.G()
o.G()
if((s&4)!==0){if(o.gp(0)<2)return!1
r=o.m()
if(o.gp(0)<r)return!1
q=o.c+=r
p=o.d
p===$&&A.c()
o.c=B.a.H(q,0,p)}if((s&8)!==0&&!this.fG())return!1
if((s&16)!==0&&!this.fG())return!1
if((s&2)!==0){if(o.gp(0)<2)return!1
o.m()}return!0},
fG(){var s,r,q=this.a
for(;;){s=q.c
r=q.d
r===$&&A.c()
if(!(s<r))break
r=q.b
r.toString
q.c=s+1
if(!(s>=0&&s<r.length))return A.a(r,s)
if(r[s]===0)return!0}return!1},
$irJ:1}
A.ef.prototype={
a7(){return"_State."+this.b}}
A.lw.prototype={}
A.m7.prototype={
he(a,b){var s
t.L.a(a)
s=A.tF(B.a_)
this.lu(A.hK(a,B.R,null,null),s,b,!1,null)
return J.Q(B.d.gt(s.c),s.c.byteOffset,s.b)},
lu(a,b,c,d,e){var s=b.a
b.a=B.a_
try{this.jk(a,b,c,!1,e)}finally{b.sl9(s)}},
jk(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=(B.a.H(15,0,15)-8<<4|8)>>>0
b.a_(k)
s=k*256
for(r=0;q=(r|0)>>>0,B.a.V(s+q,31)!==0;)++r
b.a_(q)
p=a.c
o=A.wT(a)
a.c=p
q=c==null?6:c
A.rP(a,q,b,15)
q=o&255
n=o>>>24&255
m=o>>>16&255
l=o>>>8&255
if(b.a===B.a_){b.a_(n)
b.a_(m)
b.a_(l)
b.a_(q)}else{b.a_(q)
b.a_(l)
b.a_(m)
b.a_(n)}}}
A.eb.prototype={
a7(){return"_DeflateFlushMode."+this.b}}
A.jn.prototype={
jI(a,b){var s,r,q,p,o=this,n=!0
if(b>=9)if(b<=15)n=a>9
if(n)return!1
s=o.jy(a)
if(s==null)return!1
$.bY.b=s
n=new Uint16Array(1146)
o.p1=n
r=new Uint16Array(122)
o.p2=r
q=new Uint16Array(78)
o.p3=q
o.as=b
p=o.Q=B.a.P(1,b)
o.at=p-1
o.db=15
o.cy=32768
o.dx=32767
o.dy=5
o.ax=new Uint8Array(p*2)
o.ch=new Uint16Array(p)
o.CW=new Uint16Array(32768)
o.y1=16384
o.f=new Uint8Array(65536)
o.r=65536
o.bz=16384
o.xr=49152
o.k4=a
o.w=o.x=o.ok=0
o.c=113
o.d=0
p=o.p4
p.a=n
p.c=$.re()
p=o.R8
p.a=r
p.c=$.rd()
p=o.RG
p.a=q
p.c=$.rc()
o.bc=o.aO=0
o.bJ=8
o.fg()
o.ay=2*o.Q
B.q.O(o.CW,0,o.cy,0)
o.k2=o.fr=o.id=0
o.fx=o.k3=2
o.cx=o.go=0
return!0},
jc(a){var s,r,q,p,o=this,n=o.x
n===$&&A.c()
if(n!==0)o.dW()
n=o.a
s=n.c
n=n.d
n===$&&A.c()
r=!0
if(s>=n){n=o.k2
n===$&&A.c()
if(n===0)n=a!==B.aw&&o.c!==666
else n=r}else n=r
if(n){switch($.bY.cw().e){case 0:q=o.jf(a)
break
case 1:q=o.jd(a)
break
case 2:q=o.je(a)
break
default:q=-1
break}n=q===2
if(n||q===3)o.c=666
if(q===0||n)return 0
if(q===1){if(a===B.kW){o.aF(2,3)
o.cf(256,B.aj)
o.h3()
n=o.bJ
n===$&&A.c()
s=o.bc
s===$&&A.c()
if(1+n+10-s<9){o.aF(2,3)
o.cf(256,B.aj)
o.h3()}o.bJ=7}else{o.fL(0,0,!1)
if(a===B.kX){n=o.cy
n===$&&A.c()
s=o.CW
p=0
for(;p<n;++p){s===$&&A.c()
s.$flags&2&&A.b(s)
if(!(p<s.length))return A.a(s,p)
s[p]=0}}}o.dW()}}if(a!==B.a8)return 0
return 1},
fg(){var s=this,r=s.p1
r===$&&A.c()
B.q.O(r,0,572,0)
r=s.p2
r===$&&A.c()
B.q.O(r,0,60,0)
r=s.p3
r===$&&A.c()
B.q.O(r,0,38,0)
r=s.p1
r.$flags&2&&A.b(r)
r[512]=1
s.y2=s.c4=s.aI=s.bA=0},
e7(a,b){var s,r,q,p,o,n,m=this.ry
if(!(b>=0&&b<573))return A.a(m,b)
s=m[b]
r=b<<1>>>0
q=m.$flags|0
p=this.x2
for(;;){o=this.to
o===$&&A.c()
if(!(r<=o))break
if(r<o){o=r+1
if(!(o>=0&&o<573))return A.a(m,o)
o=m[o]
if(!(r>=0&&r<573))return A.a(m,r)
o=A.p7(a,o,m[r],p)}else o=!1
if(o)++r
if(!(r>=0&&r<573))return A.a(m,r)
if(A.p7(a,s,m[r],p))break
o=m[r]
q&2&&A.b(m)
if(!(b>=0&&b<573))return A.a(m,b)
m[b]=o
n=r<<1>>>0
b=r
r=n}q&2&&A.b(m)
if(!(b>=0&&b<573))return A.a(m,b)
m[b]=s},
fA(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=a.length
if(1>=h)return A.a(a,1)
s=a[1]
if(s===0){r=138
q=3}else{r=7
q=4}p=(b+1)*2+1
a.$flags&2&&A.b(a)
if(!(p>=0&&p<h))return A.a(a,p)
a[p]=65535
for(p=this.p3,o=0,n=-1,m=0;o<=b;s=k){++o
l=o*2+1
if(!(l<h))return A.a(a,l)
k=a[l];++m
if(m<r&&s===k)continue
else{j=3
if(m<q){p===$&&A.c()
l=s*2
if(!(l<78))return A.a(p,l)
i=p[l]
p.$flags&2&&A.b(p)
p[l]=i+m}else if(s!==0){if(s!==n){p===$&&A.c()
l=s*2
if(!(l<78))return A.a(p,l)
i=p[l]
p.$flags&2&&A.b(p)
p[l]=i+1}p===$&&A.c()
l=p[32]
p.$flags&2&&A.b(p)
p[32]=l+1}else if(m<=10){p===$&&A.c()
l=p[34]
p.$flags&2&&A.b(p)
p[34]=l+1}else{p===$&&A.c()
l=p[36]
p.$flags&2&&A.b(p)
p[36]=l+1}}if(k===0){q=j
r=138}else if(s===k){q=j
r=6}else{r=7
q=4}n=s
m=0}},
iw(){var s,r,q=this,p=q.p1
p===$&&A.c()
s=q.p4.b
s===$&&A.c()
q.fA(p,s)
s=q.p2
s===$&&A.c()
p=q.R8.b
p===$&&A.c()
q.fA(s,p)
q.RG.dK(q)
for(p=q.p3,r=18;r>=3;--r){p===$&&A.c()
s=B.ar[r]*2+1
if(!(s<78))return A.a(p,s)
if(p[s]!==0)break}p=q.aI
p===$&&A.c()
q.aI=p+(3*(r+1)+5+5+4)
return r},
kP(a,b,c){var s,r,q,p,o=this
o.aF(a-257,5)
s=b-1
o.aF(s,5)
o.aF(c-4,4)
for(r=0;r<c;++r){q=o.p3
q===$&&A.c()
if(!(r<19))return A.a(B.ar,r)
p=B.ar[r]*2+1
if(!(p<78))return A.a(q,p)
o.aF(q[p],3)}q=o.p1
q===$&&A.c()
o.fB(q,a-1)
q=o.p2
q===$&&A.c()
o.fB(q,s)},
fB(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a.length
if(1>=e)return A.a(a,1)
s=a[1]
if(s===0){r=138
q=3}else{r=7
q=4}for(p=t.L,o=0,n=-1,m=0;o<=b;s=k){++o
l=o*2+1
if(!(l<e))return A.a(a,l)
k=a[l];++m
if(m<r&&s===k)continue
else{j=3
if(m<q){l=s*2
i=l+1
do{h=f.p3
h===$&&A.c()
p.a(h)
if(!(l<78))return A.a(h,l)
g=h[l]
if(!(i<78))return A.a(h,i)
f.aF(g&65535,h[i]&65535)}while(--m,m!==0)}else if(s!==0){if(s!==n){l=f.p3
l===$&&A.c()
p.a(l)
i=s*2
if(!(i<78))return A.a(l,i)
h=l[i];++i
if(!(i<78))return A.a(l,i)
f.aF(h&65535,l[i]&65535);--m}l=f.p3
l===$&&A.c()
p.a(l)
f.aF(l[32]&65535,l[33]&65535)
f.aF(m-3,2)}else{l=f.p3
if(m<=10){l===$&&A.c()
p.a(l)
f.aF(l[34]&65535,l[35]&65535)
f.aF(m-3,3)}else{l===$&&A.c()
p.a(l)
f.aF(l[36]&65535,l[37]&65535)
f.aF(m-11,7)}}}if(k===0){q=j
r=138}else if(s===k){q=j
r=6}else{r=7
q=4}n=s
m=0}},
km(a,b,c){var s,r,q=this
if(c===0)return
s=q.f
s===$&&A.c()
r=q.x
r===$&&A.c()
B.d.a6(s,r,r+c,a,b)
q.x=q.x+c},
bh(a){var s,r=this.f
r===$&&A.c()
s=this.x
s===$&&A.c()
this.x=s+1
r.$flags&2&&A.b(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a},
cf(a,b){var s,r,q
t.L.a(b)
s=a*2
r=b.length
if(!(s<r))return A.a(b,s)
q=b[s];++s
if(!(s<r))return A.a(b,s)
this.aF(q&65535,b[s]&65535)},
aF(a,b){var s,r=this,q=r.bc
q===$&&A.c()
s=r.aO
if(q>16-b){s===$&&A.c()
q=r.aO=(s|B.a.Y(a,q)&65535)>>>0
r.bh(q)
r.bh(A.aN(q,8))
r.aO=A.aN(a,16-r.bc)
r.bc=r.bc+(b-16)}else{s===$&&A.c()
r.aO=(s|B.a.Y(a,q)&65535)>>>0
r.bc=q+b}},
cB(a,b){var s,r,q,p,o,n=this,m=n.f
m===$&&A.c()
s=n.bz
s===$&&A.c()
r=n.y2
r===$&&A.c()
r=s+r*2
s=A.aN(a,8)
m.$flags&2&&A.b(m)
if(!(r<m.length))return A.a(m,r)
m[r]=s
s=n.f
r=n.bz
m=n.y2
r=r+m*2+1
s.$flags&2&&A.b(s)
q=s.length
if(!(r<q))return A.a(s,r)
s[r]=a
r=n.xr
r===$&&A.c()
r+=m
if(!(r<q))return A.a(s,r)
s[r]=b
n.y2=m+1
if(a===0){m=n.p1
m===$&&A.c()
s=b*2
if(!(s>=0&&s<1146))return A.a(m,s)
r=m[s]
m.$flags&2&&A.b(m)
m[s]=r+1}else{m=n.c4
m===$&&A.c()
n.c4=m+1
m=n.p1
m===$&&A.c()
if(!(b>=0&&b<256))return A.a(B.aL,b)
s=(B.aL[b]+256+1)*2
if(!(s<1146))return A.a(m,s)
r=m[s]
m.$flags&2&&A.b(m)
m[s]=r+1
r=n.p2
r===$&&A.c()
s=A.q3(a-1)*2
if(!(s<122))return A.a(r,s)
m=r[s]
r.$flags&2&&A.b(r)
r[s]=m+1}m=n.y2
if((m&8191)===0){s=n.k4
s===$&&A.c()
s=s>2}else s=!1
if(s){p=m*8
m=n.id
m===$&&A.c()
s=n.fr
s===$&&A.c()
for(r=n.p2,o=0;o<30;++o){r===$&&A.c()
q=o*2
if(!(q<122))return A.a(r,q)
p+=r[q]*(5+B.a2[o])}p=A.aN(p,3)
r=n.c4
r===$&&A.c()
q=n.y2
if(r<q/2&&p<(m-s)/2)return!0
m=q}s=n.y1
s===$&&A.c()
return m===s-1},
eU(a,b){var s,r,q,p,o,n,m,l,k=this,j=t.L
j.a(a)
j.a(b)
j=k.y2
j===$&&A.c()
if(j!==0){s=0
do{j=k.f
j===$&&A.c()
r=k.bz
r===$&&A.c()
r+=s*2
q=j.length
if(!(r<q))return A.a(j,r)
p=j[r];++r
if(!(r<q))return A.a(j,r)
o=p<<8&65280|j[r]&255
r=k.xr
r===$&&A.c()
r+=s
if(!(r<q))return A.a(j,r)
n=j[r]&255;++s
if(o===0)k.cf(n,a)
else{m=B.aL[n]
k.cf(m+256+1,a)
if(!(m<29))return A.a(B.aG,m)
l=B.aG[m]
if(l!==0)k.aF(n-B.dM[m],l);--o
m=A.q3(o)
k.cf(m,b)
if(!(m<30))return A.a(B.a2,m)
l=B.a2[m]
if(l!==0)k.aF(o-B.eN[m],l)}}while(s<k.y2)}k.cf(256,a)
if(513>=a.length)return A.a(a,513)
k.bJ=a[513]},
hN(){var s,r,q,p,o
for(s=this.p1,r=0,q=0;r<7;){s===$&&A.c()
p=r*2
if(!(p<1146))return A.a(s,p)
q+=s[p];++r}for(o=0;r<128;){s===$&&A.c()
p=r*2
if(!(p<1146))return A.a(s,p)
o+=s[p];++r}while(r<256){s===$&&A.c()
p=r*2
if(!(p<1146))return A.a(s,p)
q+=s[p];++r}this.y=q>A.aN(o,2)?0:1},
h3(){var s=this,r=s.bc
r===$&&A.c()
if(r===16){r=s.aO
r===$&&A.c()
s.bh(r)
s.bh(A.aN(r,8))
s.bc=s.aO=0}else if(r>=8){r=s.aO
r===$&&A.c()
s.bh(r)
s.aO=A.aN(s.aO,8)
s.bc=s.bc-8}},
eK(){var s=this,r=s.bc
r===$&&A.c()
if(r>8){r=s.aO
r===$&&A.c()
s.bh(r)
s.bh(A.aN(r,8))}else if(r>0){r=s.aO
r===$&&A.c()
s.bh(r)}s.bc=s.aO=0},
bP(a){var s,r,q,p,o,n=this,m=n.fr
m===$&&A.c()
if(m>=0)s=m
else s=-1
r=n.id
r===$&&A.c()
m=r-m
r=n.k4
r===$&&A.c()
if(r>0){if(n.y===2)n.hN()
n.p4.dK(n)
n.R8.dK(n)
q=n.iw()
r=n.aI
r===$&&A.c()
p=A.aN(r+3+7,3)
r=n.bA
r===$&&A.c()
o=A.aN(r+3+7,3)
if(o<=p)p=o}else{o=m+5
p=o
q=0}if(m+4<=p&&s!==-1)n.fL(s,m,a)
else if(o===p){n.aF(2+(a?1:0),3)
n.eU(B.aj,B.bF)}else{n.aF(4+(a?1:0),3)
m=n.p4.b
m===$&&A.c()
s=n.R8.b
s===$&&A.c()
n.kP(m+1,s+1,q+1)
s=n.p1
s===$&&A.c()
m=n.p2
m===$&&A.c()
n.eU(s,m)}n.fg()
if(a)n.eK()
n.fr=n.id
n.dW()},
jf(a){var s,r,q,p,o,n=this,m=n.r
m===$&&A.c()
s=m-5
s=65535>s?s:65535
for(m=a===B.aw;;){r=n.k2
r===$&&A.c()
if(r<=1){n.dV()
r=n.k2
q=r===0
if(q&&m)return 0
if(q)break}q=n.id
q===$&&A.c()
r=n.id=q+r
n.k2=0
q=n.fr
q===$&&A.c()
p=q+s
if(r>=p){n.k2=r-p
n.id=p
n.bP(!1)}r=n.id
q=n.fr
o=n.Q
o===$&&A.c()
if(r-q>=o-262)n.bP(!1)}m=a===B.a8
n.bP(m)
return m?3:1},
fL(a,b,c){var s,r=this
r.aF(c?1:0,3)
r.eK()
r.bJ=8
r.bh(b)
r.bh(A.aN(b,8))
s=(~b>>>0)+65536&65535
r.bh(s)
r.bh(A.aN(s,8))
s=r.ax
s===$&&A.c()
r.km(s,a,b)},
dV(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a
do{s=h.ay
s===$&&A.c()
r=h.k2
r===$&&A.c()
q=h.id
q===$&&A.c()
p=s-r-q
if(p===0&&q===0&&r===0){s=h.Q
s===$&&A.c()
p=s}else{s=h.Q
s===$&&A.c()
if(q>=s+s-262){r=h.ax
r===$&&A.c()
B.d.a6(r,0,s,r,s)
s=h.k1
o=h.Q
h.k1=s-o
h.id=h.id-o
s=h.fr
s===$&&A.c()
h.fr=s-o
s=h.cy
s===$&&A.c()
r=h.CW
r===$&&A.c()
q=r.length
n=r.$flags|0
m=s
l=m
do{--m
if(!(m>=0&&m<q))return A.a(r,m)
k=r[m]&65535
s=k>=o?k-o:0
n&2&&A.b(r)
r[m]=s}while(--l,l!==0)
s=h.ch
s===$&&A.c()
r=s.length
q=s.$flags|0
m=o
l=m
do{--m
if(!(m>=0&&m<r))return A.a(s,m)
k=s[m]&65535
n=k>=o?k-o:0
q&2&&A.b(s)
s[m]=n}while(--l,l!==0)
p+=o}}s=g.c
r=g.d
r===$&&A.c()
if(s>=r)return
s=h.ax
s===$&&A.c()
l=h.kp(s,h.id+h.k2,p)
s=h.k2=h.k2+l
if(s>=3){r=h.ax
q=h.id
n=r.length
if(q>>>0!==q||q>=n)return A.a(r,q)
j=r[q]&255
h.cx=j
i=h.dy
i===$&&A.c()
i=B.a.Y(j,i);++q
if(!(q<n))return A.a(r,q)
q=r[q]
r=h.dx
r===$&&A.c()
h.cx=((i^q&255)&r)>>>0}}while(s<262&&!(g.c>=g.d))},
jd(a){var s,r,q,p,o,n,m,l,k,j,i=this
for(s=a===B.aw,r=0;;){q=i.k2
q===$&&A.c()
if(q<262){i.dV()
q=i.k2
if(q<262&&s)return 0
if(q===0)break}if(q>=3){q=i.cx
q===$&&A.c()
p=i.dy
p===$&&A.c()
p=B.a.Y(q,p)
q=i.ax
q===$&&A.c()
o=i.id
o===$&&A.c()
n=o+2
if(!(n>=0&&n<q.length))return A.a(q,n)
n=q[n]
q=i.dx
q===$&&A.c()
q=((p^n&255)&q)>>>0
i.cx=q
n=i.CW
n===$&&A.c()
if(!(q<n.length))return A.a(n,q)
p=n[q]
r=p&65535
m=i.ch
m===$&&A.c()
l=i.at
l===$&&A.c()
l=(o&l)>>>0
m.$flags&2&&A.b(m)
if(!(l>=0&&l<m.length))return A.a(m,l)
m[l]=p
n.$flags&2&&A.b(n)
n[q]=o}if(r!==0){q=i.id
q===$&&A.c()
p=i.Q
p===$&&A.c()
p=(q-r&65535)<=p-262
q=p}else q=!1
if(q){q=i.ok
q===$&&A.c()
if(q!==2)i.fx=i.fj(r)}q=i.fx
q===$&&A.c()
p=i.id
if(q>=3){p===$&&A.c()
k=i.cB(p-i.k1,q-3)
q=i.k2
p=i.fx
q-=p
i.k2=q
o=$.bY.b
if(o===$.bY)A.G(A.kd(""))
if(p<=o.b&&q>=3){q=i.fx=p-1
do{p=i.id=i.id+1
o=i.cx
o===$&&A.c()
n=i.dy
n===$&&A.c()
n=B.a.Y(o,n)
o=i.ax
o===$&&A.c()
m=p+2
if(!(m>=0&&m<o.length))return A.a(o,m)
m=o[m]
o=i.dx
o===$&&A.c()
o=((n^m&255)&o)>>>0
i.cx=o
m=i.CW
m===$&&A.c()
if(!(o<m.length))return A.a(m,o)
n=m[o]
r=n&65535
l=i.ch
l===$&&A.c()
j=i.at
j===$&&A.c()
j=(p&j)>>>0
l.$flags&2&&A.b(l)
if(!(j>=0&&j<l.length))return A.a(l,j)
l[j]=n
m.$flags&2&&A.b(m)
m[o]=p}while(q=i.fx=q-1,q!==0)
i.id=p+1}else{q=i.id=i.id+p
i.fx=0
p=i.ax
p===$&&A.c()
o=p.length
if(!(q>=0&&q<o))return A.a(p,q)
n=p[q]&255
i.cx=n
m=i.dy
m===$&&A.c()
m=B.a.Y(n,m);++q
if(!(q<o))return A.a(p,q)
q=p[q]
p=i.dx
p===$&&A.c()
i.cx=((m^q&255)&p)>>>0}}else{q=i.ax
q===$&&A.c()
p===$&&A.c()
if(!(p>=0&&p<q.length))return A.a(q,p)
k=i.cB(0,q[p]&255)
i.k2=i.k2-1
i.id=i.id+1}if(k)i.bP(!1)}s=a===B.a8
i.bP(s)
return s?3:1},
je(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
for(s=a===B.aw,r=0;;){q=h.k2
q===$&&A.c()
if(q<262){h.dV()
q=h.k2
if(q<262&&s)return 0
if(q===0)break}if(q>=3){q=h.cx
q===$&&A.c()
p=h.dy
p===$&&A.c()
p=B.a.Y(q,p)
q=h.ax
q===$&&A.c()
o=h.id
o===$&&A.c()
n=o+2
if(!(n>=0&&n<q.length))return A.a(q,n)
n=q[n]
q=h.dx
q===$&&A.c()
q=((p^n&255)&q)>>>0
h.cx=q
n=h.CW
n===$&&A.c()
if(!(q<n.length))return A.a(n,q)
p=n[q]
r=p&65535
m=h.ch
m===$&&A.c()
l=h.at
l===$&&A.c()
l=(o&l)>>>0
m.$flags&2&&A.b(m)
if(!(l>=0&&l<m.length))return A.a(m,l)
m[l]=p
n.$flags&2&&A.b(n)
n[q]=o}q=h.fx
q===$&&A.c()
h.k3=q
h.fy=h.k1
h.fx=2
p=!1
if(r!==0){o=$.bY.b
if(o===$.bY)A.G(A.kd(""))
if(q<o.b){q=h.id
q===$&&A.c()
p=h.Q
p===$&&A.c()
p=(q-r&65535)<=p-262
q=p}else q=p}else q=p
p=2
if(q){q=h.ok
q===$&&A.c()
if(q!==2){q=h.fj(r)
h.fx=q}else q=p
o=!1
if(q<=5)if(h.ok!==1){if(q===3){o=h.id
o===$&&A.c()
o=o-h.k1>4096}}else o=!0
if(o){h.fx=2
q=p}}else q=p
p=h.k3
if(p>=3&&q<=p){q=h.id
q===$&&A.c()
k=q+h.k2-3
j=h.cB(q-1-h.fy,p-3)
p=h.k2
q=h.k3
h.k2=p-(q-1)
q=h.k3=q-2
do{p=h.id=h.id+1
if(p<=k){o=h.cx
o===$&&A.c()
n=h.dy
n===$&&A.c()
n=B.a.Y(o,n)
o=h.ax
o===$&&A.c()
m=p+2
if(!(m>=0&&m<o.length))return A.a(o,m)
m=o[m]
o=h.dx
o===$&&A.c()
o=((n^m&255)&o)>>>0
h.cx=o
m=h.CW
m===$&&A.c()
if(!(o<m.length))return A.a(m,o)
n=m[o]
r=n&65535
l=h.ch
l===$&&A.c()
i=h.at
i===$&&A.c()
i=(p&i)>>>0
l.$flags&2&&A.b(l)
if(!(i>=0&&i<l.length))return A.a(l,i)
l[i]=n
m.$flags&2&&A.b(m)
m[o]=p}}while(q=h.k3=q-1,q!==0)
h.go=0
h.fx=2
h.id=p+1
if(j)h.bP(!1)}else{q=h.go
q===$&&A.c()
if(q!==0){q=h.ax
q===$&&A.c()
p=h.id
p===$&&A.c();--p
if(!(p>=0&&p<q.length))return A.a(q,p)
if(h.cB(0,q[p]&255))h.bP(!1)
h.id=h.id+1
h.k2=h.k2-1}else{h.go=1
q=h.id
q===$&&A.c()
h.id=q+1
h.k2=h.k2-1}}}s=h.go
s===$&&A.c()
if(s!==0){s=h.ax
s===$&&A.c()
q=h.id
q===$&&A.c();--q
if(!(q>=0&&q<s.length))return A.a(s,q)
h.cB(0,s[q]&255)
h.go=0}s=a===B.a8
h.bP(s)
return s?3:1},
fj(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=$.bY.cw().d,a=c.id
a===$&&A.c()
s=c.k3
s===$&&A.c()
r=c.Q
r===$&&A.c()
r-=262
q=a>r?a-r:0
p=$.bY.cw().c
r=c.at
r===$&&A.c()
o=c.id+258
n=c.ax
n===$&&A.c()
m=a+s
l=m-1
k=n.length
if(!(l>=0&&l<k))return A.a(n,l)
j=n[l]
if(!(m>=0&&m<k))return A.a(n,m)
i=n[m]
if(c.k3>=$.bY.cw().a)b=b>>>2
n=c.k2
n===$&&A.c()
if(p>n)p=n
h=o-258
g=s
f=a
do{A:{a=c.ax
s=a0+g
n=a.length
if(!(s>=0&&s<n))return A.a(a,s)
m=!0
if(a[s]===i){--s
if(!(s>=0))return A.a(a,s)
if(a[s]===j){if(!(a0>=0&&a0<n))return A.a(a,a0)
s=a[a0]
if(!(f>=0&&f<n))return A.a(a,f)
if(s===a[f]){e=a0+1
if(!(e<n))return A.a(a,e)
s=a[e]
m=f+1
if(!(m<n))return A.a(a,m)
m=s!==a[m]
s=m}else{s=m
e=a0}}else{s=m
e=a0}}else{s=m
e=a0}if(s)break A
f+=2;++e
do{++f
if(!(f>=0&&f<n))return A.a(a,f)
s=a[f];++e
if(!(e>=0&&e<n))return A.a(a,e)
m=!1
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
if(s===a[e]){++f
if(!(f<n))return A.a(a,f)
s=a[f];++e
if(!(e<n))return A.a(a,e)
s=s===a[e]&&f<o}else s=m}else s=m}else s=m}else s=m}else s=m}else s=m}else s=m}while(s)
d=258-(o-f)
if(d>g){c.k1=a0
if(d>=p){g=d
break}a=c.ax
s=h+d
n=s-1
m=a.length
if(!(n>=0&&n<m))return A.a(a,n)
j=a[n]
if(!(s<m))return A.a(a,s)
i=a[s]
g=d}f=h}a=c.ch
a===$&&A.c()
s=a0&r
if(!(s>=0&&s<a.length))return A.a(a,s)
a0=a[s]&65535
if(a0>q){--b
a=b!==0}else a=!1}while(a)
a=c.k2
if(g<=a)return g
return a},
kp(a,b,c){var s,r,q,p,o,n,m=this
if(c!==0){s=m.a
r=s.c
s=s.d
s===$&&A.c()
s=r>=s}else s=!0
if(s)return 0
q=m.a.aa(c)
p=q.gp(q)
if(p===0)return 0
o=q.Z()
n=o.length
if(p>n)p=n
B.d.ap(a,b,b+p,o)
m.e+=p
m.d=A.bA(o,m.d)
return p},
dW(){var s,r=this,q=r.x
q===$&&A.c()
s=r.f
s===$&&A.c()
r.b.eq(s,q)
s=r.w
s===$&&A.c()
r.w=s+q
q=r.x-q
r.x=q
if(q===0)r.w=0},
jy(a){switch(a){case 0:return new A.b4(0,0,0,0,0)
case 1:return new A.b4(4,4,8,4,1)
case 2:return new A.b4(4,5,16,8,1)
case 3:return new A.b4(4,6,32,32,1)
case 4:return new A.b4(4,4,16,16,2)
case 5:return new A.b4(8,16,32,32,2)
case 6:return new A.b4(8,16,128,128,2)
case 7:return new A.b4(8,32,128,256,2)
case 8:return new A.b4(32,128,258,1024,2)
case 9:return new A.b4(32,258,258,4096,2)}return null}}
A.b4.prototype={}
A.lR.prototype={
jw(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.a
a3===$&&A.c()
s=a2.c
s===$&&A.c()
r=s.a
q=s.b
p=s.c
o=s.e
for(s=a4.rx,n=s.$flags|0,m=0;m<=15;++m){n&2&&A.b(s)
s[m]=0}l=a4.ry
k=a4.x1
k===$&&A.c()
if(!(k>=0&&k<573))return A.a(l,k)
j=l[k]*2+1
a3.$flags&2&&A.b(a3)
i=a3.length
if(!(j>=0&&j<i))return A.a(a3,j)
a3[j]=0
for(h=k+1,k=r!=null,j=q.length,g=0;h<573;++h){f=l[h]
e=f*2
d=e+1
if(!(d>=0&&d<i))return A.a(a3,d)
c=a3[d]*2+1
if(!(c<i))return A.a(a3,c)
m=a3[c]+1
if(m>o){++g
m=o}a3.$flags&2&&A.b(a3)
a3[d]=m
c=a2.b
c===$&&A.c()
if(f>c)continue
if(!(m<16))return A.a(s,m)
c=s[m]
n&2&&A.b(s)
s[m]=c+1
if(f>=p){c=f-p
if(!(c>=0&&c<j))return A.a(q,c)
b=q[c]}else b=0
if(!(e>=0&&e<i))return A.a(a3,e)
a=a3[e]
e=a4.aI
e===$&&A.c()
a4.aI=e+a*(m+b)
if(k){e=a4.bA
e===$&&A.c()
if(!(d<r.length))return A.a(r,d)
a4.bA=e+a*(r[d]+b)}}if(g===0)return
m=o-1
do{a0=m
for(;;){if(!(a0>=0&&a0<16))return A.a(s,a0)
k=s[a0]
if(!(k===0))break;--a0}n&2&&A.b(s)
s[a0]=k-1
k=a0+1
if(!(k<16))return A.a(s,k)
s[k]=s[k]+2
if(!(o<16))return A.a(s,o)
s[o]=s[o]-1
g-=2}while(g>0)
for(m=o;m!==0;--m){if(!(m>=0))return A.a(s,m)
f=s[m]
while(f!==0){--h
if(!(h>=0&&h<573))return A.a(l,h)
a1=l[h]
n=a2.b
n===$&&A.c()
if(a1>n)continue
n=a1*2
k=n+1
if(!(k>=0&&k<i))return A.a(a3,k)
j=a3[k]
if(j!==m){e=a4.aI
e===$&&A.c()
if(!(n>=0&&n<i))return A.a(a3,n)
a4.aI=e+(m-j)*a3[n]
a3.$flags&2&&A.b(a3)
a3[k]=m}--f}}},
dK(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.a
a0===$&&A.c()
s=a.c
s===$&&A.c()
r=s.a
q=s.d
a1.to=0
a1.x1=573
for(s=a0.length,p=a1.ry,o=p.$flags|0,n=a1.x2,m=n.$flags|0,l=a0.$flags|0,k=0,j=-1;k<q;++k){i=k*2
if(!(i<s))return A.a(a0,i)
if(a0[i]!==0){i=++a1.to
o&2&&A.b(p)
if(!(i>=0&&i<573))return A.a(p,i)
p[i]=k
m&2&&A.b(n)
if(!(k<573))return A.a(n,k)
n[k]=0
j=k}else{++i
l&2&&A.b(a0)
if(!(i<s))return A.a(a0,i)
a0[i]=0}}for(i=r!=null;h=a1.to,h<2;){++h
a1.to=h
if(j<2){++j
g=j}else g=0
o&2&&A.b(p)
if(!(h>=0))return A.a(p,h)
p[h]=g
h=g*2
l&2&&A.b(a0)
if(!(h>=0&&h<s))return A.a(a0,h)
a0[h]=1
m&2&&A.b(n)
if(!(g>=0))return A.a(n,g)
n[g]=0
f=a1.aI
f===$&&A.c()
a1.aI=f-1
if(i){f=a1.bA
f===$&&A.c();++h
if(!(h<r.length))return A.a(r,h)
a1.bA=f-r[h]}}a.b=j
for(k=B.a.K(h,2);k>=1;--k)a1.e7(a0,k)
g=q
do{k=p[1]
i=a1.to--
if(!(i>=0&&i<573))return A.a(p,i)
i=p[i]
o&2&&A.b(p)
p[1]=i
a1.e7(a0,1)
e=p[1]
i=--a1.x1
if(!(i>=0&&i<573))return A.a(p,i)
p[i]=k;--i
a1.x1=i
if(!(i>=0))return A.a(p,i)
p[i]=e
i=g*2
h=k*2
if(!(h>=0&&h<s))return A.a(a0,h)
f=a0[h]
d=e*2
if(!(d>=0&&d<s))return A.a(a0,d)
c=a0[d]
l&2&&A.b(a0)
if(!(i<s))return A.a(a0,i)
a0[i]=f+c
if(!(k>=0&&k<573))return A.a(n,k)
c=n[k]
if(!(e>=0&&e<573))return A.a(n,e)
f=n[e]
i=c>f?c:f
m&2&&A.b(n)
if(!(g<573))return A.a(n,g)
n[g]=i+1;++h;++d
if(!(d<s))return A.a(a0,d)
a0[d]=g
if(!(h<s))return A.a(a0,h)
a0[h]=g
b=g+1
p[1]=g
a1.e7(a0,1)
if(a1.to>=2){g=b
continue}else break}while(!0)
s=--a1.x1
o=p[1]
if(!(s>=0&&s<573))return A.a(p,s)
p[s]=o
a.jw(a1)
A.uS(a0,j,a1.rx)}}
A.lY.prototype={}
A.k1.prototype={
gbQ(){var s=this.a
if(s==null)return s
s.d===$&&A.c()
return s},
jU(){var s,r,q,p=this,o=p.gbQ()
if(o!=null){s=o.c
r=o.d
r===$&&A.c()
r=s>=r
s=r}else s=!0
if(s)return!1
q=p.bi(3)
switch(B.a.j(q,1)){case 0:if(p.k7()===-1){p.d=!0
return!1}break
case 1:if(p.eZ($.r_(),$.qZ())===-1){p.d=!0
return!1}break
case 2:if(p.jV()===-1){p.d=!0
return!1}break
default:p.d=!0
return!1}return(q&1)===0},
bi(a){var s,r,q,p,o=this
if(a===0)return 0
while(s=o.f,s<a){s=o.gbQ()
r=s.c
s=s.d
s===$&&A.c()
if(r>=s)return-1
s=o.gbQ()
r=s.b
r.toString
s=s.c++
if(!(s>=0&&s<r.length))return A.a(r,s)
q=r[s]
s=o.e
r=o.f
o.e=(s|B.a.Y(q,r))>>>0
o.f=r+8}r=o.e
p=B.a.P(1,a)
o.e=B.a.a9(r,a)
o.f=s-a
return(r&p-1)>>>0},
e8(a){var s,r,q,p,o,n,m,l=this,k=a.a
k===$&&A.c()
s=a.b
while(r=l.f,r<s){r=l.gbQ()
q=r.c
r=r.d
r===$&&A.c()
if(q>=r)return-1
r=l.gbQ()
q=r.b
q.toString
r=r.c++
if(!(r>=0&&r<q.length))return A.a(q,r)
p=q[r]
r=l.e
q=l.f
l.e=(r|B.a.Y(p,q))>>>0
l.f=q+8}q=l.e
o=(q&B.a.Y(1,s)-1)>>>0
if(!(o<k.length))return A.a(k,o)
n=k[o]
m=n>>>16
if(m===0)return-1
l.e=B.a.a9(q,m)
l.f=r-m
return n&65535},
k7(){var s,r,q=this
q.f=q.e=0
s=q.bi(16)
r=q.bi(16)
if(s!==0&&s!==(r^65535)>>>0)return-1
if(s>q.gbQ().gp(0))return-1
q.c.hG(q.gbQ().aa(s))
return 0},
jV(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.bi(5)
if(h===-1)return-1
h+=257
if(h>288)return-1
s=i.bi(5)
if(s===-1)return-1;++s
if(s>32)return-1
r=i.bi(4)
if(r===-1)return-1
r+=4
if(r>19)return-1
q=new Uint8Array(19)
for(p=0;p<r;++p){o=i.bi(3)
if(o===-1)return-1
n=B.ar[p]
if(!(n<19))return A.a(q,n)
q[n]=o}m=A.hB(q)
n=h+s
l=new Uint8Array(n)
k=J.Q(B.d.gt(l),0,h)
j=J.Q(B.d.gt(l),h,s)
if(i.jH(n,m,l)===-1)return-1
return i.eZ(A.hB(k),A.hB(j))},
eZ(a,b){var s,r,q,p,o,n,m,l=this
for(s=l.c;;){r=l.e8(a)
if(r<0||r>285)return-1
if(r===256)break
if(r<256){s.a_(r&255)
continue}q=r-257
if(!(q>=0&&q<29))return A.a(B.bW,q)
p=B.bW[q]
o=l.bi(B.jM[q])
n=l.e8(b)
if(n<0||n>29)return-1
if(!(n>=0&&n<30))return A.a(B.bX,n)
m=B.bX[n]+l.bi(B.a2[n])
if(m<1||m>s.gp(s))return-1
s.hE(m,p+o)}while(s=l.f,s>=8){l.f=s-8
s=l.gbQ()
p=--s.c
o=s.d
o===$&&A.c()
s.c=B.a.H(p,0,o)}return 0},
jH(a,b,c){var s,r,q,p,o,n,m,l,k=this
for(s=0,r=0;r<a;){q=k.e8(b)
if(q===-1)return-1
p=0
switch(q){case 16:o=k.bi(2)
if(o===-1)return-1
o+=3
if(r+o>a)return-1
for(n=c.$flags|0;m=o-1,o>0;o=m,r=l){l=r+1
n&2&&A.b(c)
if(!(r>=0&&r<c.length))return A.a(c,r)
c[r]=s}break
case 17:o=k.bi(3)
if(o===-1)return-1
o+=3
if(r+o>a)return-1
for(n=c.$flags|0;m=o-1,o>0;o=m,r=l){l=r+1
n&2&&A.b(c)
if(!(r>=0&&r<c.length))return A.a(c,r)
c[r]=0}s=p
break
case 18:o=k.bi(7)
if(o===-1)return-1
o+=11
if(r+o>a)return-1
for(n=c.$flags|0;m=o-1,o>0;o=m,r=l){l=r+1
n&2&&A.b(c)
if(!(r>=0&&r<c.length))return A.a(c,r)
c[r]=0}s=p
break
default:if(q<0||q>15)return-1
l=r+1
c.$flags&2&&A.b(c)
if(!(r>=0&&r<c.length))return A.a(c,r)
c[r]=q
r=l
s=q
break}}return 0}}
A.hd.prototype={}
A.et.prototype={
a7(){return"ByteOrder."+this.b}}
A.eU.prototype={
gek(){return this.e},
ev(a){return this.e=a},
gp(a){var s=this,r=s.d
if(r!=null)return Math.max(0,r-s.e)
return s.b.hy(s.c+s.e)},
glK(){var s,r,q=this,p=q.d
if(p!=null&&q.e>=p)return!0
s=q.b
r=q.c+q.e
s.d1(r,1)
return r>=s.e+s.f},
h6(){if(this.c===0&&this.d==null){var s=this.b
s.d=new Uint8Array(0)
s.e=s.e+s.f
s.f=0
s.w=!0}},
eB(a,b){var s=this.d
if(s!=null)a=Math.min(a,Math.max(0,s-b))
return A.pp(this,b,a)},
G(){var s,r=this
if(r.glK())return 0
s=r.b.l8(r.c+r.e);++r.e
return s},
aa(a){var s,r,q=this,p=q.d
if(p!=null)a=Math.max(0,Math.min(a,p-q.e))
s=q.e
r=A.pp(q,s,a)
q.e=s+a
return r},
Z(){var s,r,q=this,p=q.d
if(p!=null){s=q.e
return q.b.hs(q.c+s,Math.max(0,p-s))}s=q.b
r=q.c+q.e
return s.hs(r,s.hy(r))}}
A.iP.prototype={
gp(a){return this.e+this.f},
d1(a,b){var s,r=this,q=r.e
if(a<q)throw A.h(A.b7("Position "+a+" of the decoded data has already been read past, only the last "+r.f+" bytes from "+q+" are still held"))
r.r=a
q=r.b
s=a+b
for(;;){if(!(!r.w&&r.e+r.f<s))break
if(!q.ln(r))r.w=!0}},
l8(a){var s,r,q=this
q.d1(a,1)
s=q.e
if(a>=s+q.f)return 0
r=q.d
s=a-s
if(!(s>=0&&s<r.length))return A.a(r,s)
return r[s]},
hs(a,b){var s,r,q=this
q.d1(a,b)
s=q.e
r=Math.max(0,Math.min(b,s+q.f-a))
s=a-s
return B.d.bW(q.d,s,s+r)},
hy(a){this.d1(a,0)
return Math.max(0,this.e+this.f-a)},
eb(a){var s,r,q,p,o=this,n=o.f,m=o.d
if(n+a<=m.length)return
s=o.e
r=Math.max(s,Math.min(o.r-o.c,s+n-32768))-s
if(r>0){B.d.a6(m,0,n-r,m,r)
n=o.f-=r
o.e+=r}m=n+a
s=o.d
q=s.length
if(m>q){m=Math.max(q*2,m)
p=new Uint8Array(m)
B.d.ap(p,0,n,s)
o.d=p}},
a_(a){var s,r,q=this
if(q.f===q.d.length)q.eb(1)
s=q.d
r=q.f++
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a},
eq(a,b){var s,r,q=this
t.L.a(a)
b=a.length
q.eb(b)
s=q.d
r=q.f
B.d.ap(s,r,r+b,a)
q.f+=b},
bE(a){return this.eq(a,null)},
hG(a){return this.bE(a.Z())},
hE(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
i.eb(b)
s=i.f
r=s-a
if(r<0)throw A.h(A.b7("Back reference before the start of the data"))
q=s+b
if(a>=b){p=i.d
B.d.a6(p,s,q,p,r)}else for(p=i.d,o=p.length,n=p.$flags|0,m=r;s<q;s=l,m=k){l=s+1
k=m+1
if(!(m<o))return A.a(p,m)
j=p[m]
n&2&&A.b(p)
if(!(s>=0&&s<o))return A.a(p,s)
p[s]=j}i.f+=b}}
A.eV.prototype={
gek(){return this.c},
gp(a){var s=this.b
return s==null?0:s.length-this.c},
ev(a){this.c=a},
eB(a,b){var s=this.b
if(s==null)return A.hK(A.i([],t.t),B.R,null,null)
return A.hK(s,this.a,a,b)},
G(){var s,r=this.b
r.toString
s=this.c++
if(!(s>=0&&s<r.length))return A.a(r,s)
return r[s]},
Z(){var s,r,q=this,p=q.b
if(p==null)return new Uint8Array(0)
s=q.gp(0)
r=p.length-q.c
if(s<0||s>r)s=r
return J.Q(B.d.gt(p),q.b.byteOffset+q.c,s)}}
A.eW.prototype={
m(){var s=this.G(),r=this.G()
if(this.a===B.a_)return(s<<8|r)>>>0
return(r<<8|s)>>>0},
l(){var s=this,r=s.G(),q=s.G(),p=s.G(),o=s.G()
if(s.a===B.a_)return(r<<24|q<<16|p<<8|o)>>>0
return(o<<24|p<<16|q<<8|r)>>>0},
aa(a){var s=this,r=s.eB(a,s.gek())
s.ev(s.gek()+r.gp(r))
return r}}
A.ic.prototype={
a_(a){var s,r,q=this
if(q.b===q.c.length)q.jT()
s=q.c
r=q.b++
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a},
eq(a,b){var s,r,q,p,o=this
t.L.a(a)
if(b==null)b=a.length
while(s=o.b,r=s+b,q=o.c,p=q.length,r>p)o.d8(r-p)
B.d.ap(q,s,r,a)
o.b+=b},
hG(a){var s,r,q,p,o=this
while(s=o.b,r=a.gp(a),q=o.c,s+r>q.length)o.d8(o.b+a.gp(a)-o.c.length)
if(a instanceof A.eV){s=a.b
if(s!=null){r=o.b
B.d.a6(q,r,r+a.gp(0),s,a.c)}}else{p=a.Z()
s=o.c
r=o.b
B.d.a6(s,r,r+a.gp(a),p,0)}o.b=o.b+a.gp(a)},
hE(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
while(s=i.b,r=s+b,q=i.c,p=q.length,r>p)i.d8(r-p)
o=s-a
if(a>=b)B.d.a6(q,s,r,q,o)
else for(n=q.$flags|0,m=o;s<r;s=l,m=k){l=s+1
k=m+1
if(!(m>=0&&m<p))return A.a(q,m)
j=q[m]
n&2&&A.b(q)
if(!(s>=0))return A.a(q,s)
q[s]=j}i.b+=b},
d8(a){var s,r=this.c,q=r.length,p=q+(a==null?1:a),o=q===0?32768:q*2
if(o<p)o=p
s=new Uint8Array(o)
B.d.ap(s,0,q,r)
this.c=s},
jT(){return this.d8(null)},
gp(a){return this.b}}
A.ff.prototype={
sl9(a){this.a=t.aO.a(a)}}
A.nz.prototype={
$0(){var s,r,q={}
for(s=this.a.a.gdk(),s=s.gE(s);s.D();){r=s.gJ()
q[A.y(r.a)]=A.ny(r.b)}return q},
$S:58}
A.nt.prototype={
$1(a){var s,r,q=A.oy(A.bl(a).data)
q.toString
t.f.a(q)
s=q.k(0,"id")
r=this.b
A.h7(this.a,A.aU(q.k(0,"op")),q.k(0,"arg")).en(new A.nr(r,s),new A.ns(r,s),t.q)},
$S:60}
A.nr.prototype={
$1(a){return this.a.postMessage(A.ny(A.cE(["id",this.b,"result",a],t.N,t.z)))},
$S:62}
A.ns.prototype={
$1(a){return this.a.postMessage(A.ny(A.cE(["id",this.b,"error",A.y(A.eh(a))],t.N,t.z)))},
$S:73}
A.jy.prototype={}
A.jq.prototype={
dt(a){var s=0,r=A.dc(t.hI),q,p=this,o,n,m,l,k
var $async$dt=A.de(function(b,c){if(b===1)return A.d9(c,r)
for(;;)switch(s){case 0:k=new A.cY()
$.ep()
k.cq()
s=3
return A.bm(p.a.$1(a),$async$dt)
case 3:o=c
n=o.b
m=o.a
p.f=a
p.d=n.a
p.e=n.b
p.w=null
p.x.aR(0)
p.y.aR(0)
p.Q=p.z=null
p.as.aR(0)
l=A.n4(n,4096)
p.r=l
q=new A.bk(l,m,k.gcF())
s=1
break
case 1:return A.da(q,r)}})
return A.db($async$dt,r)},
di(a){var s,r,q,p,o,n,m=this,l=m.y,k=l.bN(0,a)
if(k!=null){l.i(0,a,k)
return k}s=A.qG(m.d,m.e,Math.min(2048,4096))
r=new A.cY()
$.ep()
r.cq()
q=m.w
if(q==null)q=A.G(B.a0)
p=new A.K(A.qQ(q,m.e0(a),s.a,s.b),r.gcF())
l.i(0,a,p)
for(q=m.b.c,o=A.n(l).n("az<1>");l.a>q;){n=new A.az(l,o).gE(0)
if(!n.D())A.G(A.aP())
l.bN(0,n.gJ())}return p},
lb(a){var s,r,q,p,o,n,m=this
if(a==null){s=m.z
return s==null?A.G(B.a0):s}s=m.as
r=s.bN(0,a)
if(r!=null){s.i(0,a,r)
return r}q=A.oF(m.di(a).a)
s.i(0,a,q)
for(p=m.b.d,o=A.n(s).n("az<1>");s.a>p;){n=new A.az(s,o).gE(0)
if(!n.D())A.G(A.aP())
s.bN(0,n.gJ())}return q},
cG(a){var s=0,r=A.dc(t.B),q,p=this,o,n,m,l,k,j
var $async$cG=A.de(function(b,c){if(b===1)return A.d9(c,r)
for(;;)switch(s){case 0:k=p.e0(a.a)
j=new A.jx(p)
s=a.d?3:5
break
case 3:o=a.c
s=o?6:8
break
case 6:s=9
return A.bm(j.$0(),$async$cG)
case 9:s=7
break
case 8:c=A.rS(p.d,p.e)
case 7:n=c
A.rR(n,k,o)
s=4
break
case 5:s=a.c?10:12
break
case 10:s=13
return A.bm(j.$0(),$async$cG)
case 13:n=c
s=11
break
case 12:j=p.w
if(j==null)j=A.G(B.a0)
n=A.qQ(j,k,p.d,p.e)
case 11:m=a.e
if(m!=null){j=m.c
o=m.b
n=A.wl(n,m.a,o,j)}case 4:l=a.f
if(l!=null)A.rQ(n,l,a.r)
q=n
s=1
break
case 1:return A.da(q,r)}})
return A.db($async$cG,r)},
e0(a){return this.fJ(a).a},
fJ(a){var s,r=this.x,q=a.a,p=new A.bk(q[3],q[2],q[1]),o=r.k(0,p)
if(o==null){o=new A.jw(this,a).$0()
r.i(0,p,o)}s=o.a
r=q[0]
q=q[4]
r=r===s.x&&q===s.y?s:A.oX(s.f,r,s.z,s.w,s.b,s.d,s.r,s.c,q,s.a)
return new A.K(r,o.b)},
kf(a){var s,r,q,p,o,n,m,l,k,j=this,i=++j.at,h=J.aQ(32,t.p)
for(s=0;s<32;++s)h[s]=s
B.c.bV(h,new A.js(a))
r=A.i([],t.f7)
for(q=h.length,p=a.a,o=0;o<h.length;h.length===q||(0,A.P)(h),++o){n=h[o]
m=p[2]
l=p[1]
k=new A.ed([p[0],l,m,n,p[4]])
B.c.B(r,new A.jt(j,k))
if((p[0]||p[4])&&Math.abs(n-p[3])<=2)B.c.B(r,new A.ju(j,k))}A.t5(new A.jv(j,r,i),t.a)}}
A.jx.prototype={
$0(){var s=0,r=A.dc(t.B),q,p=this,o,n
var $async$$0=A.de(function(a,b){if(a===1)return A.d9(b,r)
for(;;)switch(s){case 0:o=p.a
n=o.f
if(n==null)n=A.G(B.ba)
s=3
return A.bm(o.a.$1(n),$async$$0)
case 3:q=b.b
s=1
break
case 1:return A.da(q,r)}})
return A.db($async$$0,r)},
$S:75}
A.jr.prototype={
$2(a,b){var s,r,q,p,o,n,m=t.bd
m.a(a)
m.a(b)
m=t.n
s=A.i([],m)
for(r=a.length,q=this.a,p=0;p<a.length;a.length===r||(0,A.P)(a),++p){o=a[p]
B.c.c3(s,A.i([o,0,o,q],m))}for(r=b.length,q=this.b,p=0;p<b.length;b.length===r||(0,A.P)(b),++p){n=b[p]
B.c.c3(s,A.i([0,n,q,n],m))}return s},
$S:57}
A.jw.prototype={
$0(){var s,r,q,p,o,n,m,l,k=new A.cY()
$.ep()
k.cq()
s=this.a.w
if(s==null)s=A.G(B.a0)
r=this.b.a
q=r[3]/31
p=r[2]
r=r[1]
o=A.xg(s,q)
n=o.b
m=s.a
l=m.a
s=s.c
return new A.K(A.x7(m,s,A.qM(o.a,l.a,l.b,n,s.hk(q)*l.gbK(),null,null),n,q,p,r,!1,!1),k.gcF())},
$S:39}
A.js.prototype={
$2(a,b){var s
A.p(a)
A.p(b)
s=this.a.a[3]
return B.a.bH(Math.abs(a-s),Math.abs(b-s))},
$S:6}
A.jt.prototype={
$0(){return this.a.e0(this.b)},
$S:2}
A.ju.prototype={
$0(){return this.a.di(this.b)},
$S:2}
A.jv.prototype={
$0(){var s=0,r=A.dc(t.a),q,p=this,o,n,m,l,k,j,i
var $async$$0=A.de(function(a,b){if(a===1)return A.d9(b,r)
for(;;)switch(s){case 0:o=p.b,n=o.length,m=p.c,l=p.a,k=t.q,j=0
case 3:if(!(j<o.length)){s=5
break}i=o[j]
s=6
return A.bm(A.t6(B.aA,k),$async$$0)
case 6:if(m!==l.at||l.w==null){s=1
break}i.$0()
case 4:o.length===n||(0,A.P)(o),++j
s=3
break
case 5:case 1:return A.da(q,r)}})
return A.db($async$$0,r)},
$S:52}
A.cz.prototype={}
A.hj.prototype={}
A.jB.prototype={}
A.ez.prototype={
C(a){return this.a}}
A.ji.prototype={}
A.jj.prototype={}
A.my.prototype={
$3(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a,f=B.a.V(a,g)+0.5,e=B.a.a1(a,g)+0.5,d=h.b,c=d.length
if(!(a<c))return A.a(d,a)
s=d[a]*b
r=h.c
q=r.length
if(!(a<q))return A.a(r,a)
p=r[a]*b
for(o=h.d,n=a0.$flags|0,m=h.e,l=0;l<o;++l,p=i,s=j){f+=s
e+=p
if(f<0||e<0||f>=g||e>=m)return-l-1
k=B.b.h(e)*g+B.b.h(f)
if(!(k>=0&&k<c))return A.a(d,k)
j=d[k]
if(!(k<q))return A.a(r,k)
i=r[k]
if(j*s+i*p<0){j=-j
i=-i}n&2&&A.b(a0)
if(!(l<a0.length))return A.a(a0,l)
a0[l]=k}return o},
$S:34}
A.no.prototype={
$2(a,b){var s,r,q,p,o,n,m,l=this.a,k=a*3,j=l.length
if(!(k<j))return A.a(l,k)
s=l[k]
r=b*3
if(!(r<j))return A.a(l,r)
q=s-l[r]
s=k+1
if(!(s<j))return A.a(l,s)
s=l[s]
p=r+1
if(!(p<j))return A.a(l,p)
o=s-l[p]
k+=2
if(!(k<j))return A.a(l,k)
k=l[k]
r+=2
if(!(r<j))return A.a(l,r)
n=k-l[r]
m=Math.sqrt(q*q+o*o+n*n)/this.b
return 1-(m>1?1:m)},
$S:26}
A.nm.prototype={
$3(a,b,c){var s,r,q,p,o=this,n=B.b.h((a+0.5)*o.a),m=B.b.h((b+0.5)*o.b)
if(n<0)n=0
s=o.c
if(n>=s)n=s-1
if(m<0)m=0
r=o.d
if(m>=r)m=r-1
q=o.e
r=q.c
s=m*s+n
if(!(s>=0&&s<r.length))return A.a(r,s)
p=r[s]
if(p>=0){s=q.d
if(!(p<s.length))return A.a(s,p)
s=s[p]===c}else s=!1
return s?p:-1},
$S:51}
A.nq.prototype={
$3(a,b,c){var s
if(this.a==null)return c
s=this.b.$3(a,b,c)
return s>=0?s:this.c+c},
$S:23}
A.np.prototype={
$2(a,b){var s,r,q,p,o=this,n=B.b.a8(a),m=B.b.a8(b)
if(n<0)n=0
s=o.a
if(n>s)n=s
if(m<0)m=0
r=o.b
if(m>r)m=r
q=o.c
p=m*o.d+n
if(!(p>=0&&p<q.length))return A.a(q,p)
return q[p]},
$S:54}
A.nn.prototype={
$2(a,b){var s=this.b,r=b*this.c+a
if(!(r>=0&&r<s.length))return A.a(s,r)
return this.a.$3(a,b,s[r])},
$S:6}
A.mr.prototype={
$1(a){var s,r=this.a.a,q=r.length,p=r.$flags|0
for(;;){if(!(a>=0&&a<q))return A.a(r,a)
s=r[a]
if(!(s!==a))break
if(!(s>=0&&s<q))return A.a(r,s)
s=r[s]
p&2&&A.b(r)
r[a]=s
a=r[a]}return a},
$S:14}
A.mh.prototype={
$4(a,b,c,d){var s,r=!0
if(!(a<=0&&c<=0))if(!(b<=0&&d<=0)){s=this.a
if(!(a>=s&&c>=s)){r=this.b
r=b>=r&&d>=r}}return r},
$S:72}
A.mk.prototype={
$3(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
for(s=e.a.a,r=e.b,q=r.length,p=e.c,o=p.length,n=e.d,m=n.length,l=0,k=1/0,j=0;j<s;++j){if(!(j<q))return A.a(r,j)
i=a-r[j]
if(!(j<o))return A.a(p,j)
h=b-p[j]
if(!(j<m))return A.a(n,j)
g=c-n[j]
f=i*i+h*h+g*g
if(f<k){k=f
l=j}}return l},
$S:31}
A.hh.prototype={
a7(){return"BlockingApproach."+this.b}}
A.cn.prototype={
a7(){return"EdgeStyle."+this.b}}
A.bD.prototype={
a7(){return"ColorStrategy."+this.b}}
A.jc.prototype={
hk(a){return 0},
l7(a){return 0.008*Math.pow(0.375,B.b.H(a,0,1))},
hv(a){return B.b.a8(3*Math.pow(500,B.b.H(a,0,1)))}}
A.n6.prototype={
$0(){return(this.a.ds()-0.5)*0.001},
$S:32}
A.n5.prototype={
$2(a,b){var s=this.b,r=s.$0()
if(typeof r!=="number")return A.a8(r)
B.c.B(this.a,a+r)
s=s.$0()
if(typeof s!=="number")return A.a8(s)
B.c.B(this.c,b+s)},
$S:33}
A.mg.prototype={
$1(a){var s,r=this,q=r.b,p=q.length
if(!(a>=0&&a<p))return A.a(q,a)
if(q[a]<0){s=r.c
if(!(s>=0&&s<p))return A.a(q,s)
s=q[s]
q.$flags&2&&A.b(q)
q[a]=s
s=r.d
q=r.a.a++
s.$flags&2&&A.b(s)
if(!(q<s.length))return A.a(s,q)
s[q]=a}},
$S:11}
A.mZ.prototype={
$3(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.a,b=c.length
if(!(a>=0&&a<b))return A.a(c,a)
s=c[a]
r=d.b
q=r.length
if(!(a<q))return A.a(r,a)
p=r[a]
if(!(a0>=0&&a0<b))return A.a(c,a0)
o=c[a0]
if(!(a0<q))return A.a(r,a0)
n=r[a0]
if(!(a1>=0&&a1<b))return A.a(c,a1)
m=c[a1]
if(!(a1<q))return A.a(r,a1)
l=r[a1]
r=n-l
q=l-p
c=p-n
k=2*(s*r+o*q+m*c)
if(Math.abs(k)<1e-12){j=(s+o+m)/3
i=(p+n+l)/3
h=1/0}else{g=s*s+p*p
f=o*o+n*n
e=m*m+l*l
j=(g*r+f*q+e*c)/k
i=(g*(m-o)+f*(s-m)+e*(o-s))/k
c=s-j
b=p-i
h=c*c+b*b}B.c.B(d.c,a)
B.c.B(d.d,a0)
B.c.B(d.e,a1)
B.c.B(d.f,j)
B.c.B(d.r,i)
B.c.B(d.w,h)
B.c.B(d.x,!0)},
$S:15}
A.n_.prototype={
$2(a,b){var s,r,q,p,o,n,m
A.p(a)
A.p(b)
s=this.a
if(!(a>=0&&a<s.length))return A.a(s,a)
r=B.b.a2(s[a]/32)
if(!(b>=0&&b<s.length))return A.a(s,b)
q=B.b.a2(s[b]/32)
if(r!==q)return r-q
s=(r&1)===0?1:-1
p=this.b
o=p.length
if(!(a<o))return A.a(p,a)
n=p[a]
if(!(b<o))return A.a(p,b)
m=s*B.b.bH(n,p[b])
return m!==0?m:a-b},
$S:6}
A.n1.prototype={
$2(a,b){var s,r=this.a,q=r+3,p=a<b?a*q+b:b*q+a
q=this.b
s=q.k(0,p)
q.i(0,p,(s==null?0:s)+1)
this.c.i(0,p,a*(r+3)+b)},
$S:7}
A.n0.prototype={
$2(a,b){var s,r,q=this
A.p(a)
if(A.p(b)!==1)return
s=q.b.k(0,a)
s.toString
r=q.d+3
q.c.$3(B.a.a1(s,r),B.a.V(s,r),q.e)
B.c.B(q.a.a,q.f.length-1)},
$S:7}
A.jH.prototype={}
A.dk.prototype={}
A.jb.prototype={
hS(a){var s,r,q,p=this.r,o=p.bN(0,a)
if(o!=null){p.i(0,a,o)
return o}s=A.qT(this.a.a,8,a,4,1,0.02)
p.i(0,a,s)
for(r=A.n(p).n("az<1>");p.a>4;){q=new A.az(p,r).gE(0)
if(!q.D())A.G(A.aP())
p.bN(0,q.gJ())}return s}}
A.mQ.prototype={
$1(a){var s,r,q=this,p=q.a,o=q.b,n=o*3+a
if(!(n<p.length))return A.a(p,n)
n=p[n]
p=q.c
if(!(o<p.length))return A.a(p,o)
o=p[o]
p=q.d
s=q.e
r=s*3+a
if(!(r>=0&&r<p.length))return A.a(p,r)
r=p[r]
p=q.f
if(!(s>=0&&s<p.length))return A.a(p,s)
return n/o-r/p[s]},
$S:8}
A.mx.prototype={
$2(a,b){var s,r=this.a,q=r.length
if(!(a>=0&&a<q))return A.a(r,a)
s=r[a]
if(!(b>=0&&b<q))return A.a(r,b)
return s===r[b]},
$S:20}
A.kW.prototype={}
A.fM.prototype={}
A.er.prototype={
ew(a,b,c){return A.qx(a,b,c,this.a)},
hx(){var s=this.a
return s>1?new A.er(s/2):null},
$ijk:1}
A.fe.prototype={
ew(a,b,c){var s,r,q,p=A.qr(a,b,c),o=A.qx(p.a,p.b,c,this.a),n=o.a,m=o.b
for(s=this.b,r=0;r<s;++r){q=A.vp(n,m,c)
n=q.a
m=q.b}return new A.K(n,m)},
hx(){var s=this.b
return s>0?new A.fe(this.a/2,s-1):null},
$ijk:1}
A.nh.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this.a
if(!(a>=0&&a<k.length))return A.a(k,a)
s=k[a]
k=s.a
r=k.length
q=new Float64Array(r)
p=new Float64Array(r)
for(o=this.b,n=0;n<r;++n){q[n]=B.a.V(k[n],o)
p[n]=B.a.a1(k[n],o)}k=this.c
if(!(a<k.length))return A.a(k,a)
m=k[a]
k=s.d
l=m==null?A.qr(q,p,k):m.ew(q,p,k)
s.e=l.a
s.f=l.b},
$S:11}
A.mB.prototype={
$2(a,b){var s,r,q=this
if(a<0||b<0||a>=q.a||b>=q.b)s=-1
else{s=q.c
r=b*q.a+a
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}return s},
$S:6}
A.mz.prototype={
$3(a,b,c){var s,r,q=this
switch(c){case 0:s=q.a
if(a<s){r=q.b
s=b*s+a
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]}else s=0
return s
case 1:if(b<q.c){s=q.d
r=b*q.e+a
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s
case 2:if(a>0){s=q.b
r=b*q.a+a-1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s
default:if(b>0){s=q.d
r=(b-1)*q.e+a
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s}},
$S:23}
A.mC.prototype={
$3(a,b,c){var s,r,q=this
switch(c){case 0:s=q.a
r=b*q.b+a
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=2
break
case 1:s=q.c
r=b*q.d+a
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=2
break
case 2:s=q.a
r=b*q.b+a-1
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=2
break
default:s=q.c
r=(b-1)*q.d+a
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=2}},
$S:15}
A.mA.prototype={
$2(a,b){var s,r,q
if(a===0||a===this.a)s=b===0||b===this.b
else s=!1
if(s)return!0
for(s=this.c,r=0,q=0;q<4;++q)if(!J.a0(s.$3(a,b,q),0))++r
return r>=3},
$S:20}
A.mD.prototype={
$3(a,b,c){var s,r=this.a
switch(c){case 0:return new A.K(r.$2(a,b-1),r.$2(a,b))
case 1:return new A.K(r.$2(a,b),r.$2(a-1,b))
case 2:s=a-1
return new A.K(r.$2(s,b),r.$2(s,b-1))
default:s=b-1
return new A.K(r.$2(a-1,s),r.$2(a,s))}},
$S:30}
A.mE.prototype={
$3(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i=j.a,h=A.i([b*i+a],t.t),g=j.b.$3(a,b,c),f=g.a,e=g.b
for(s=j.f,r=j.d,q=j.c,p=c,o=b,n=a;;p=m){q.$3(n,o,p)
switch(p){case 0:++n
break
case 1:++o
break
case 2:--n
break
default:--o}B.c.B(h,o*i+n)
if(r.$2(n,o)){B.c.B(j.e,new A.fM(new Int32Array(A.q(h)),f,e,!1))
return}l=p+2
k=0
for(;;){if(!(k<4)){m=-1
break}if(k!==B.a.V(l,4)&&J.a0(s.$3(n,o,k),1)){m=k
break}++k}if(m<0){B.c.B(j.e,new A.fM(new Int32Array(A.q(h)),f,e,!0))
return}}},
$S:15}
A.me.prototype={
$0(){return A.i([],t.t)},
$S:16}
A.mq.prototype={
$6(a,b,c,d,e,f){return(c-a)*(f-b)-(d-b)*(e-a)},
$S:41}
A.m9.prototype={
$0(){return A.i([],t.t)},
$S:16}
A.ma.prototype={
$0(){return A.i([],t.t)},
$S:16}
A.kE.prototype={}
A.nl.prototype={
$5(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=this.a,r=a*s*4,q=this.b,p=q.$flags|0,o=b.length,n=q.length,m=c.length,l=d.length,k=e.length,j=0;j<s;++j,r+=4){if(!(j<o))return A.a(b,j)
i=b[j]
if(i>1e-9){if(!(j<m))return A.a(c,j)
h=A.ci(c[j]/i)
p&2&&A.b(q)
if(!(r>=0&&r<n))return A.a(q,r)
q[r]=h
h=r+1
if(!(j<l))return A.a(d,j)
g=A.ci(d[j]/i)
if(!(h<n))return A.a(q,h)
q[h]=g
g=r+2
if(!(j<k))return A.a(e,j)
h=A.ci(e[j]/i)
if(!(g<n))return A.a(q,g)
q[g]=h}else if(j>0){h=r-4
if(!(h>=0&&h<n))return A.a(q,h)
h=q[h]
p&2&&A.b(q)
if(!(r>=0&&r<n))return A.a(q,r)
q[r]=h
h=r+1
g=r-3
if(!(g>=0))return A.a(q,g)
g=q[g]
if(!(h<n))return A.a(q,h)
q[h]=g
g=r+2
h=r-2
if(!(h>=0))return A.a(q,h)
h=q[h]
if(!(g<n))return A.a(q,g)
q[g]=h}h=r+3
p&2&&A.b(q)
if(!(h>=0&&h<n))return A.a(q,h)
q[h]=255}},
$S:42}
A.nk.prototype={
$3(a,b,c){var s,r,q,p,o,n,m=B.b.ab(a-0.5),l=B.b.ab(b-0.5)
if(m<0)m=0
s=this.a
if(l>s)l=s
for(r=this.b,q=this.c,p=r.$flags|0,o=m;o<l;++o){n=q+o
p&2&&A.b(r)
if(!(n>=0&&n<r.length))return A.a(r,n)
r[n]=c}},
$S:25}
A.mu.prototype={
$3(a,b,c){var s,r,q=this,p=q.a
if(!(a>=0&&a<p.length))return A.a(p,a)
s=p[a]
p.$flags&2&&A.b(p)
p[a]=s+b
s=q.b
if(!(a<s.length))return A.a(s,a)
p=s[a]
r=q.c
if(!(c>=0&&c<r.length))return A.a(r,c)
r=r[c]
s.$flags&2&&A.b(s)
s[a]=p+b*r
r=q.d
if(!(a<r.length))return A.a(r,a)
p=r[a]
s=q.e
if(!(c<s.length))return A.a(s,c)
s=s[c]
r.$flags&2&&A.b(r)
r[a]=p+b*s
s=q.f
if(!(a<s.length))return A.a(s,a)
p=s[a]
r=q.r
if(!(c<r.length))return A.a(r,c)
r=r[c]
s.$flags&2&&A.b(s)
s[a]=p+b*r},
$S:44}
A.mv.prototype={
$3(a,b,c){var s,r,q,p,o,n=this
if(b<=a)return
s=B.b.a2(a)
r=B.b.a2(b)
if(s===r){if(s<n.a)n.b.$3(s,(b-a)*n.c,c)
return}q=n.b
p=s+1
o=n.c
q.$3(s,(p-a)*o,c)
for(;p<r;++p)q.$3(p,o,c)
if(r<n.a)q.$3(r,(b-r)*o,c)},
$S:25}
A.lW.prototype={
ij(b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b0.r,a9=a8.a
for(s=b0.c,r=a8.c,q=r.length,p=a7.e,o=a7.f,n=a7.d,m=a7.c,l=a7.b,k=a9.length,j=a8.b,i=j.length,h=0;h<s;h=f){if(!(h<q))return A.a(r,h)
g=r[h]
f=h+1
if(!(f<q))return A.a(r,f)
while(g<r[f]){if(!(g>=0&&g<i))return A.a(j,g)
e=j[g];++g
if(!(g<i))return A.a(j,g)
d=j[g]
for(c=e;c<d;c=b){b=c+1
a=b<d?b:e
a0=c*2
if(!(a0>=0&&a0<k))return A.a(a9,a0)
a1=a9[a0]*b1;++a0
if(!(a0<k))return A.a(a9,a0)
a2=a9[a0]*b2
a0=a*2
if(!(a0>=0&&a0<k))return A.a(a9,a0)
a3=a9[a0]*b1;++a0
if(!(a0<k))return A.a(a9,a0)
a4=a9[a0]*b2
if(a2===a4)continue
a5=a2<a4
B.c.B(l,a5?a2:a4)
B.c.B(m,a5?a4:a2)
B.c.B(n,a5?a1:a3)
B.c.B(p,(a3-a1)/(a4-a2))
B.c.B(o,h)}}}a6=l.length
s=J.aQ(a6,t.p)
for(c=0;c<a6;++c)s[c]=c
B.c.bV(s,new A.lX(a7))
t.L.a(s)
a7.r!==$&&A.U()
a7.r=s},
ez(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this
t.kk.a(a4)
s=a2.b
for(;;){r=a2.x
q=a2.r
q===$&&A.c()
p=q.length
if(r<p){o=q[r]
if(!(o<s.length))return A.a(s,o)
o=s[o]<=a3}else o=!1
if(!o)break
o=a2.w
a2.x=r+1
if(!(r<p))return A.a(q,r)
B.c.B(o,q[r])}r=A.i([],t.t)
for(q=a2.w,p=q.length,o=a2.c,n=0;n<q.length;q.length===p||(0,A.P)(q),++n){m=q[n]
if(!(m>=0&&m<o.length))return A.a(o,m)
if(o[m]>a3)r.push(m)}a2.w=r
for(q=r.length,p=a2.f,l=a2.a,o=a2.d,k=a2.e,j=0,n=0;n<r.length;r.length===q||(0,A.P)(r),++n,j=f){m=r[n]
if(!(m>=0&&m<o.length))return A.a(o,m)
i=o[m]
if(!(m<s.length))return A.a(s,m)
h=s[m]
if(!(m<k.length))return A.a(k,m)
g=i+(a3-h)*k[m]
if(g<0)g=0
if(g>l)g=l
i=a2.y
h=i.length
if(j===h){h=new Float64Array(h*2)
B.k.ap(h,0,j,i)
a2.y=h
i=h}f=j+1
if(!(m<p.length))return A.a(p,m)
h=p[m]
i.$flags&2&&A.b(i)
if(!(j<i.length))return A.a(i,j)
i[j]=h*65536+g}s=a2.y
e=s.BYTES_PER_ELEMENT
d=A.b1(0,j,B.a.a1(s.byteLength,e))*e
if(B.a.V(d,8)!==0)A.G(A.av("The number of bytes to view must be a multiple of 8",null))
c=J.ru(B.k.gt(s),s.byteOffset+0*e,B.a.K(d,8))
B.k.dF(c)
for(s=c.length,b=0;b<j;b=a0){if(!(b>=0&&b<s))return A.a(c,b)
a=B.b.a2(c[b]/65536)
a0=b
for(;;){if(a0<j){if(!(a0<s))return A.a(c,a0)
r=B.b.a2(c[a0]/65536)===a}else r=!1
if(!r)break;++a0}for(r=a*65536,a1=b;q=a1+1,q<a0;a1+=2){if(!(a1<s))return A.a(c,a1)
p=c[a1]
if(!(q<s))return A.a(c,q)
a4.$3(p-r,c[q]-r,a)}}}}
A.lX.prototype={
$2(a,b){var s,r,q
A.p(a)
A.p(b)
s=this.a.b
r=s.length
if(!(a>=0&&a<r))return A.a(s,a)
q=s[a]
if(!(b>=0&&b<r))return A.a(s,b)
return B.b.bH(q,s[b])},
$S:6}
A.bC.prototype={
ghn(){var s=this.a
return s===0?0:this.b/s},
gp(a){return this.a}}
A.kT.prototype={
ho(a){var s,r=this.c
if(!(a>=0&&a<r.length))return A.a(r,a)
r=r[a]
s=this.b
if(!(a<s.length))return A.a(s,a)
return r/s[a]},
hl(a){var s,r=this.d
if(!(a>=0&&a<r.length))return A.a(r,a)
r=r[a]
s=this.b
if(!(a<s.length))return A.a(s,a)
return r/s[a]},
hm(a){var s,r=this.e
if(!(a>=0&&a<r.length))return A.a(r,a)
r=r[a]
s=this.b
if(!(a<s.length))return A.a(s,a)
return r/s[a]},
dn(a){var s,r=this.f
if(!(a>=0&&a<r.length))return A.a(r,a)
r=r[a]
s=this.b
if(!(a<s.length))return A.a(s,a)
return r*2>=s[a]},
h7(a,b,c){var s=this,r=(s.ho(a)-s.ho(b))*c,q=s.hl(a)-s.hl(b),p=s.hm(a)-s.hm(b)
return r*r+q*q+p*p},
hp(a,b){var s,r,q,p=this,o=p.b,n=o.length
if(!(a>=0&&a<n))return A.a(o,a)
s=o[a]
if(!(b>=0&&b<n))return A.a(o,b)
n=o[b]
o.$flags&2&&A.b(o)
o[a]=s+n
n=p.c
s=n.length
if(!(a<s))return A.a(n,a)
o=n[a]
if(!(b<s))return A.a(n,b)
s=n[b]
n.$flags&2&&A.b(n)
n[a]=o+s
s=p.d
o=s.length
if(!(a<o))return A.a(s,a)
n=s[a]
if(!(b<o))return A.a(s,b)
o=s[b]
s.$flags&2&&A.b(s)
s[a]=n+o
o=p.e
n=o.length
if(!(a<n))return A.a(o,a)
s=o[a]
if(!(b<n))return A.a(o,b)
n=o[b]
o.$flags&2&&A.b(o)
o[a]=s+n
n=p.f
s=n.length
if(!(a<s))return A.a(n,a)
o=n[a]
if(!(b<s))return A.a(n,b)
s=n[b]
n.$flags&2&&A.b(n)
n[a]=o+s
s=p.r
o=s.length
if(!(a<o))return A.a(s,a)
r=s[a]
if(!(b<o))return A.a(s,b)
q=s[b]
r.bN(0,b)
q.b5(0,new A.kV(p,a,r,b))
q.aR(0)
s=p.w
s.$flags&2&&A.b(s)
if(!(b<s.length))return A.a(s,b)
s[b]=0;--p.x}}
A.kU.prototype={
$2(a,b){var s,r,q,p,o,n=this.a,m=n.length
if(!(a>=0&&a<m))return A.a(n,a)
s=n[a]
if(!(b>=0&&b<m))return A.a(n,b)
r=n[b]
if(s===r)return
n=this.b.r
if(!(s>=0&&s<n.length))return A.a(n,s)
q=n[s].k(0,r)
if(q==null){q=new A.bC()
if(!(s<n.length))return A.a(n,s)
n[s].i(0,r,q)
if(!(r>=0&&r<n.length))return A.a(n,r)
n[r].i(0,s,q)}++q.a
n=q.b
m=this.c
p=m.length
if(!(a<p))return A.a(m,a)
o=m[a]
if(!(b<p))return A.a(m,b)
q.b=n+(o+m[b])*0.5},
$S:7}
A.kV.prototype={
$2(a,b){var s,r,q,p=this
A.p(a)
t.C.a(b)
s=p.b
if(a===s)return
r=p.c
q=r.k(0,a)
if(q==null){r.i(0,a,b)
r=p.a.r
if(!(a>=0&&a<r.length))return A.a(r,a)
r[a].i(0,s,b)}else{q.a=q.a+b.a
q.b=q.b+b.b}s=p.a.r
if(!(a>=0&&a<s.length))return A.a(s,a)
s[a].bN(0,p.d)},
$S:9}
A.km.prototype={
hb(a){var s=this.a,r=this.b
return A.qB(s,r,this.c,B.a.H(s-a,0,r.length))}}
A.mO.prototype={
$1(a){var s,r,q,p=this.a,o=p.length,n=a
for(;;){if(!(n>=0&&n<o))return A.a(p,n)
s=p[n]
if(!(s!==n))break
n=s}r=p.$flags|0
for(;;){if(!(a>=0&&a<o))return A.a(p,a)
q=p[a]
if(!(q!==n))break
r&2&&A.b(p)
p[a]=n
a=q}return n},
$S:14}
A.lP.prototype={
du(a,b,c,d,e){var s,r,q,p,o=this,n=o.a
B.c.B(n,a)
B.c.B(o.b,b)
B.c.B(o.c,c)
B.c.B(o.d,d)
B.c.B(o.e,e)
s=n.length-1
for(;s>0;s=r){r=B.a.j(s-1,1)
q=n.length
if(!(r<q))return A.a(n,r)
p=n[r]
if(!(s<q))return A.a(n,s)
if(p<=n[s])break
o.ed(s,r)}},
hq(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.b
if(0>=e.length)return A.a(e,0)
s=e[0]
r=f.c
if(0>=r.length)return A.a(r,0)
q=r[0]
p=f.d
if(0>=p.length)return A.a(p,0)
o=p[0]
n=f.e
if(0>=n.length)return A.a(n,0)
m=n[0]
l=f.a
f.ed(0,l.length-1)
if(0>=l.length)return A.a(l,-1)
l.pop()
if(0>=e.length)return A.a(e,-1)
e.pop()
if(0>=r.length)return A.a(r,-1)
r.pop()
if(0>=p.length)return A.a(p,-1)
p.pop()
if(0>=n.length)return A.a(n,-1)
n.pop()
k=l.length
for(j=0;;j=g){i=2*j+1
h=i+1
if(i<k){e=l.length
if(!(i<e))return A.a(l,i)
r=l[i]
if(!(j>=0&&j<e))return A.a(l,j)
r=r<l[j]
e=r}else e=!1
g=e?i:j
if(h<k){e=l.length
if(!(h<e))return A.a(l,h)
r=l[h]
if(!(g>=0&&g<e))return A.a(l,g)
r=r<l[g]
e=r}else e=!1
if(e)g=h
if(g===j)break
f.ed(j,g)}return new A.fX([s,q,o,m])},
ed(a,b){var s,r,q=this,p=q.a,o=p.length
if(!(a>=0&&a<o))return A.a(p,a)
s=p[a]
if(!(b>=0&&b<o))return A.a(p,b)
o=p[b]
if(!(a>=0&&a<p.length))return A.a(p,a)
p[a]=o
if(!(b>=0&&b<p.length))return A.a(p,b)
p[b]=s
p=q.b
o=p.length
if(!(a<o))return A.a(p,a)
r=p[a]
if(!(b<o))return A.a(p,b)
o=p[b]
if(!(a>=0&&a<p.length))return A.a(p,a)
p[a]=o
if(!(b>=0&&b<p.length))return A.a(p,b)
p[b]=r
p=q.c
o=p.length
if(!(a<o))return A.a(p,a)
r=p[a]
if(!(b<o))return A.a(p,b)
o=p[b]
if(!(a>=0&&a<p.length))return A.a(p,a)
p[a]=o
if(!(b>=0&&b<p.length))return A.a(p,b)
p[b]=r
p=q.d
o=p.length
if(!(a<o))return A.a(p,a)
r=p[a]
if(!(b<o))return A.a(p,b)
o=p[b]
if(!(a>=0&&a<p.length))return A.a(p,a)
p[a]=o
if(!(b>=0&&b<p.length))return A.a(p,b)
p[b]=r
p=q.e
o=p.length
if(!(a<o))return A.a(p,a)
r=p[a]
if(!(b<o))return A.a(p,b)
o=p[b]
if(!(a>=0&&a<p.length))return A.a(p,a)
p[a]=o
if(!(b>=0&&b<p.length))return A.a(p,b)
p[b]=r}}
A.mR.prototype={
$2(a,b){A.p(a)
t.C.a(b)
if(a>this.a)B.c.B(this.b,b.ghn())},
$S:9}
A.mU.prototype={
$3(a,b,c){var s,r,q,p,o=this,n=o.a,m=n.b,l=m.length
if(!(a>=0&&a<l))return A.a(m,a)
s=m[a]
if(!(b>=0&&b<l))return A.a(m,b)
r=m[b]
q=s*r/(s+r)
m=o.b
m=m===1?q:Math.pow(q,m)
p=m*n.h7(a,b,o.c)*(1+o.d*c.ghn()/o.e)
return n.dn(a)!==n.dn(b)?p*o.f:p},
$S:46}
A.mS.prototype={
$2(a,b){var s
A.p(a)
t.C.a(b)
s=this.a
if(a>s)this.b.du(this.c.$3(s,a,b),s,a,0,0)},
$S:9}
A.mT.prototype={
$2(a,b){var s,r,q,p,o,n=this
A.p(a)
s=n.c
r=n.b.$3(s,a,t.C.a(b))
q=n.d
p=q.length
if(!(s>=0&&s<p))return A.a(q,s)
o=q[s]
if(!(a>=0&&a<p))return A.a(q,a)
n.a.du(r,s,a,o,q[a])},
$S:9}
A.mN.prototype={
$2(a,b){var s,r,q,p=this
A.p(a)
t.C.a(b)
s=p.b
r=p.a
q=s.h7(r.a,a,p.c)
if(s.dn(r.a)!==s.dn(a))q*=p.d
if(q<r.c){r.c=q
r.b=a}},
$S:9}
A.lQ.prototype={
d3(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a
B.l.O(g,0,2048,0)
s=this.b
B.k.O(s,0,2048,0)
r=c.a
q=2048/(c.b-r)
for(p=b.length,o=a.length,n=g.$flags|0,m=s.$flags|0,l=0;l<p;++l){k=b[l]
if(!(k>=0&&k<o))return A.a(a,k)
j=a[k]
i=B.a.H(B.b.a2((j-r)*q),0,2047)
if(!(i>=0&&i<2048))return A.a(g,i)
h=g[i]
n&2&&A.b(g)
g[i]=h+1
h=s[i]
m&2&&A.b(s)
s[i]=h+j}},
ly(a,b){var s,r,q,p,o,n,m,l,k,j,i=this.a
B.l.O(i,0,2048,0)
s=this.b
B.k.O(s,0,2048,0)
r=b.a
q=2048/(b.b-r)
for(p=a.length,o=i.$flags|0,n=s.$flags|0,m=0;m<p;++m){l=a[m]
k=B.a.H(B.b.a2((l-r)*q),0,2047)
if(!(k>=0&&k<2048))return A.a(i,k)
j=i[k]
o&2&&A.b(i)
i[k]=j+1
j=s[k]
n&2&&A.b(s)
s[k]=j+l}},
dw(a,b){var s=a*(b-1),r=B.b.a2(s),q=s-r,p=this.fP(r)
return q===0?p:p+(this.fP(r+1)-p)*q},
fP(a){var s,r,q,p
for(s=this.a,r=0,q=0;q<2048;++q){p=s[q]
if(p===0)continue
r+=p
if(r>a)return this.b[q]/p}return 0},
ma(a,b,c){var s,r,q,p,o,n,m,l,k,j=a*c,i=b*c
for(s=this.b,r=this.a,q=0,p=0,o=0,n=0;n<2048;++n){m=r[n]
if(m===0)continue
l=q+m
k=Math.min(l,i)-Math.max(q,j)
if(k<=0){q=l
continue}p+=s[n]/m*k
o+=k
q=l}return o===0?0:p/o}}
A.lT.prototype={
lz(b9,c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=c0.length,b8=new Int32Array(b7)
for(s=this.a,r=s.$flags|0,q=b9.c,p=q.length,o=b9.d,n=o.length,m=b9.e,l=m.length,k=this.b,j=0;j<b7;++j){i=c0[j]
if(!(i>=0&&i<p))return A.a(q,i)
h=B.a.H(B.b.a2(q[i]/0.02)+1,0,51)
if(!(i<n))return A.a(o,i)
g=B.a.H(B.b.a2(o[i]/0.01)+36,0,71)
if(!(i<l))return A.a(m,i)
f=(h*72+g)*72+B.a.H(B.b.a2(m[i]/0.01)+36,0,71)
if(!(j<b7))return A.a(b8,j)
b8[j]=f
if(!(f>=0&&f<269568))return A.a(s,f)
h=s[f]
r&2&&A.b(s)
s[f]=h+1
if(h===0)B.c.B(k,f)}for(h=k.length,e=-1,d=0,c=0;c<h;++c){f=k[c]
b=B.a.V(f,72)
a=B.a.V(B.a.K(f,72),72)
a0=B.a.K(f,5184)
for(a1=0,a2=-1;a2<=1;++a2){a3=a0+a2
if(a3<0||a3>=52)continue
for(g=a3*72,a4=-1;a4<=1;++a4){a5=a+a4
if(a5<0||a5>=72)continue
a6=(g+a5)*72
for(a7=-1;a7<=1;++a7){a8=b+a7
if(a8<0||a8>=72)continue
a9=a6+a8
if(!(a9>=0&&a9<269568))return A.a(s,a9)
a1+=s[a9]}}}if(a1>e){d=f
e=a1}}for(c=0;c<h;++c){f=k[c]
r&2&&A.b(s)
if(!(f>=0&&f<269568))return A.a(s,f)
s[f]=0}B.c.aR(k)
b0=B.a.V(d,72)
b1=B.a.V(B.a.K(d,72),72)
b2=B.a.K(d,5184)
for(b3=0,b4=0,b5=0,b6=0,j=0;j<b7;++j){f=b8[j]
if(Math.abs(B.a.K(f,5184)-b2)<=1&&Math.abs(B.a.V(B.a.K(f,72),72)-b1)<=1&&Math.abs(B.a.V(f,72)-b0)<=1){i=c0[j]
if(!(i>=0&&i<p))return A.a(q,i)
b3+=q[i]
if(!(i<n))return A.a(o,i)
b4+=o[i]
if(!(i<l))return A.a(m,i)
b5+=m[i];++b6}}return new A.bk(b3/b6,b4/b6,b5/b6)}}
A.nu.prototype={
$2(a,b){var s,r,q,p=this.a,o=new A.nv(),n=b*p,m=n+Math.max(0,a-1),l=n+Math.min(p-1,a+1),k=Math.max(0,b-1)*p+a,j=Math.min(this.b-1,b+1)*p+a
p=this.c
s=p.c
n=o.$3(s,m,l)
r=o.$3(s,k,j)
if(typeof n!=="number")return n.an()
if(typeof r!=="number")return A.a8(r)
q=o.$3(p.d,m,l)
if(typeof q!=="number")return A.a8(q)
p=o.$3(p.e,k,j)
if(typeof p!=="number")return A.a8(p)
return n+r+q+p},
$S:26}
A.nv.prototype={
$3(a,b,c){var s,r=a.length
if(!(b>=0&&b<r))return A.a(a,b)
s=a[b]
if(!(c>=0&&c<r))return A.a(a,c)
return Math.abs(s-a[c])},
$S:47}
A.iy.prototype={
m6(){return new A.f2(A.bB(this.a),A.bB(this.b),A.bB(this.c))},
T(a,b){if(b==null)return!1
return b instanceof A.iy&&b.a===this.a&&b.b===this.b&&b.c===this.c},
gI(a){return A.dV(this.a,this.b,this.c,B.E)},
C(a){return"Srgb("+A.y(this.a)+", "+A.y(this.b)+", "+A.y(this.c)+")"}}
A.f2.prototype={
ep(){var s=this.a,r=this.b,q=this.c,p=A.el(0.4122214708*s+0.5363325363*r+0.0514459929*q),o=A.el(0.2119034982*s+0.6806995451*r+0.1073969566*q),n=A.el(0.0883024619*s+0.2817188376*r+0.6299787005*q)
return new A.i9(0.2104542553*p+0.793617785*o-0.0040720468*n,1.9779984951*p-2.428592205*o+0.4505937099*n,0.0259040371*p+0.7827717662*o-0.808675766*n)},
C(a){return"LinearRgb("+A.y(this.a)+", "+A.y(this.b)+", "+A.y(this.c)+")"}}
A.i9.prototype={
T(a,b){if(b==null)return!1
return b instanceof A.i9&&b.a===this.a&&b.b===this.b&&b.c===this.c},
gI(a){return A.dV(this.a,this.b,this.c,B.E)},
C(a){return"OkLab("+A.y(this.a)+", "+A.y(this.b)+", "+A.y(this.c)+")"}}
A.md.prototype={
$0(){var s,r,q,p,o=new Uint8Array(4096)
for(s=0,r=0;r<4096;++r){q=r/4096
for(;;){if(s<255){p=$.oR()
if(!(s>=0&&s<p.length))return A.a(p,s)
p=q>=p[s]}else p=!1
if(!p)break;++s}if(!(r<4096))return A.a(o,r)
o[r]=s}return o},
$S:17}
A.mV.prototype={
$0(){return this.a.a},
$S:13}
A.mM.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
t.e0.a(a)
for(s=this.a,r=this.b,q=this.c,p=q.length,o=0;o<s;o=n)for(n=o+1,m=n<s,l=o*r,k=0;k<r;){j=l+k;++k
if(k<r){if(!(j>=0&&j<p))return A.a(q,j)
i=q[j]
h=j+1
if(!(h<p))return A.a(q,h)
a.$2(i,q[h])}if(m){if(!(j>=0&&j<p))return A.a(q,j)
i=q[j]
h=j+r
if(!(h<p))return A.a(q,h)
a.$2(i,q[h])}}},
$S:49}
A.mI.prototype={
$2(a,b){var s,r,q,p,o,n,m=this
if(a!==b){s=m.b
s=s!=null&&!s.$2(a,b)}else s=!0
if(s)return
s=m.c
r=s.length
if(!(a>=0&&a<r))return A.a(s,a)
q=m.d
if(s[a]<q){p=a+1
o=m.e
if(!(p<o.length))return A.a(o,p)
n=o[p]
o.$flags&2&&A.b(o)
o[p]=n+1
p=m.f
if(!(a<p.length))return A.a(p,a)
if(p[a]<0){o=m.a.a++
p.$flags&2&&A.b(p)
p[a]=o}}if(!(b>=0&&b<r))return A.a(s,b)
if(s[b]<q){s=b+1
r=m.e
if(!(s<r.length))return A.a(r,s)
q=r[s]
r.$flags&2&&A.b(r)
r[s]=q+1
s=m.f
if(!(b<s.length))return A.a(s,b)
if(s[b]<0){r=m.a.a++
s.$flags&2&&A.b(s)
s[b]=r}}},
$S:7}
A.mJ.prototype={
$2(a,b){var s,r,q,p,o,n,m=this
if(a!==b){s=m.a
s=s!=null&&!s.$2(a,b)}else s=!0
if(s)return
s=m.b
r=s.length
if(!(a>=0&&a<r))return A.a(s,a)
q=m.c
if(s[a]<q){p=m.d
o=m.e
if(!(a<o.length))return A.a(o,a)
n=o[a]
o.$flags&2&&A.b(o)
o[a]=n+1
p.$flags&2&&A.b(p)
if(!(n>=0&&n<p.length))return A.a(p,n)
p[n]=b}if(!(b>=0&&b<r))return A.a(s,b)
if(s[b]<q){s=m.d
r=m.e
if(!(b<r.length))return A.a(r,b)
q=r[b]
r.$flags&2&&A.b(r)
r[b]=q+1
s.$flags&2&&A.b(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=a}},
$S:7}
A.mL.prototype={
$1(a){var s,r=this.a,q=r.length,p=r.$flags|0
for(;;){if(!(a>=0&&a<q))return A.a(r,a)
s=r[a]
if(!(s!==a))break
if(!(s>=0&&s<q))return A.a(r,s)
s=r[s]
p&2&&A.b(r)
r[a]=s
a=r[a]}return a},
$S:14}
A.mK.prototype={
$2(a,b){var s,r,q,p
A.p(a)
A.p(b)
s=this.a
r=s.length
if(!(a>=0&&a<r))return A.a(s,a)
q=s[a]
if(!(b>=0&&b<r))return A.a(s,b)
p=q-s[b]
if(p!==0)s=p
else{s=this.b
r=s.length
if(!(a<r))return A.a(s,a)
q=s[a]
if(!(b<r))return A.a(s,b)
s=q-s[b]}return s},
$S:6}
A.ml.prototype={
$1(a){var s=this.a
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
$S:8}
A.mm.prototype={
$1(a){var s=this.a
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
$S:8}
A.mn.prototype={
$1(a){var s=this.a
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
$S:8}
A.mo.prototype={
$1(a){var s,r,q=this,p=q.b
if(!(a>=0&&a<p.length))return A.a(p,a)
p=p[a]
s=q.c
if(!(a<s.length))return A.a(s,a)
s=s[a]
r=q.d
if(!(a<r.length))return A.a(r,a)
r=r[a]
return q.a*p*p+s*s+r*r},
$S:8}
A.jJ.prototype={
gp(a){return this.a*this.b}}
A.b2.prototype={}
A.kp.prototype={
gp(a){return this.a*this.b},
gbK(){var s=this.a,r=this.b
return s>r?s:r}}
A.n3.prototype={
$1(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.a
if(a4.a===a5)return
a4.a=a5
s=a5*a3.b*4
for(a4=a3.c,r=a3.r,q=r.$flags|0,p=a3.e,o=a3.f,n=o.length,m=p.length,l=a3.d,k=l.length,j=0;j<a4;++j){if(!(j<k))return A.a(l,j)
i=l[j]
for(h=i.a,g=h.length,f=i.b,e=f.length,d=0,c=0,b=0,a=0;a<g;++a){a0=s+h[a]*4
if(!(a<e))return A.a(f,a)
a1=f[a]
if(!(a0>=0&&a0<n))return A.a(o,a0)
a2=o[a0]
if(!(a2<m))return A.a(p,a2)
d+=p[a2]*a1
a2=a0+1
if(!(a2<n))return A.a(o,a2)
a2=o[a2]
if(!(a2<m))return A.a(p,a2)
c+=p[a2]*a1
a2=a0+2
if(!(a2<n))return A.a(o,a2)
a2=o[a2]
if(!(a2<m))return A.a(p,a2)
b+=p[a2]*a1}h=j*3
q&2&&A.b(r)
g=r.length
if(!(h<g))return A.a(r,h)
r[h]=d
f=h+1
if(!(f<g))return A.a(r,f)
r[f]=c
h+=2
if(!(h<g))return A.a(r,h)
r[h]=b}},
$S:11}
A.ee.prototype={}
A.mw.prototype={
$1(a){var s,r,q,p,o=this.a,n=a*o,m=(a+1)*o,l=B.b.a2(n),k=B.a.H(B.b.ab(m)-1,l,this.b-1)-l+1,j=new Int32Array(k),i=new Float64Array(k)
for(s=0;s<k;++s){r=l+s
q=r<n?n:r
p=r+1
if(p>m)p=m
if(!(s<k))return A.a(j,s)
j[s]=r
if(!(s<k))return A.a(i,s)
i[s]=(p-q)/o}return new A.ee(j,i)},
$S:50}
A.hy.prototype={
T(a,b){var s=this
if(b==null)return!1
return b instanceof A.hy&&b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d},
gI(a){var s=this
return A.dV(s.a,s.b,s.c,s.d)}}
A.na.prototype={
$2(a,b){var s,r,q,p,o=t.n,n=A.i([],o),m=A.i([],o),l=a-b*0.000001
for(o=this.a,s=0;r=b*s,r<l;++s){if(s>0)B.c.B(n,r)
for(q=1;q<o;++q){p=r+b*q/o
if(p<l)B.c.B(m,p)}}return new A.K(n,m)},
$S:77}
A.iK.prototype={}
A.mF.prototype={
$0(){var s,r,q,p=new Uint8Array(65536)
for(s=0;s<65536;++s){r=s/65535
q=B.a.H(B.b.a8((r>0.008856451679035631?116*A.el(r)-16:903.2962962962963*r)*255/100),0,255)
if(!(s<65536))return A.a(p,s)
p[s]=q}return p},
$S:17}
A.mG.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i=new Uint8Array(262144)
for(s=0;s<64;++s)for(r=(s*4+2)/255,q=s<<12,p=0;p<64;++p)for(o=(p*4+2)/255,n=q|p<<6,m=0;m<64;++m){l=new A.f2(A.bB(r),A.bB(o),A.bB((m*4+2)/255)).ep()
k=(n|m)>>>0
j=B.a.H(B.b.a8(((l.b*$.rq()+l.c*$.rr())/0.2+1)/2*255),0,255)
if(!(k<262144))return A.a(i,k)
i[k]=j}return i},
$S:17}
A.jl.prototype={
a7(){return"Channel."+this.b}}
A.V.prototype={
D(){var s=this.b
return++this.a<s.gp(s)},
gJ(){return this.b.k(0,this.a)},
$iz:1}
A.bq.prototype={
a7(){return"ChannelOrder."+this.b}}
A.dn.prototype={
M(){return new A.dn(new Uint16Array(A.q(this.a)))},
gL(){return B.C},
gp(a){return this.a.length},
gU(){return null},
k(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]
r=$.L
r=r!=null?r:A.R()
if(!(s<r.length))return A.a(r,s)
s=r[s]}else s=0
return s},
i(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=A.N(c)
r.$flags&2&&A.b(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gS(){return this.gq()},
gq(){var s,r=this.a
if(!B.q.gW(r)){if(0>=r.length)return A.a(r,0)
r=r[0]
s=$.L
s=s!=null?s:A.R()
if(!(r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
gv(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]
r=$.L
r=r!=null?r:A.R()
if(!(s<r.length))return A.a(r,s)
s=r[s]}else if(r>1){s=s[1]
r=$.L
r=r!=null?r:A.R()
if(!(s<r.length))return A.a(r,s)
s=r[s]}else s=0
return s},
gu(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]
r=$.L
r=r!=null?r:A.R()
if(!(s<r.length))return A.a(r,s)
s=r[s]}else if(r>2){s=s[2]
r=$.L
r=r!=null?r:A.R()
if(!(s<r.length))return A.a(r,s)
s=r[s]}else s=0
return s},
gA(){var s=this.a,r=s.length
if(r===2){if(1>=r)return A.a(s,1)
s=s[1]
r=$.L
r=r!=null?r:A.R()
if(!(s<r.length))return A.a(r,s)
s=r[s]}else if(r>3){s=s[3]
r=$.L
r=r!=null?r:A.R()
if(!(s<r.length))return A.a(r,s)
s=r[s]}else s=0
return s},
gam(){return this.a.length===2?this.gq():A.a7(this)},
gE(a){return new A.V(this)},
T(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gp(b)===this.a.length){s=b.gI(b)
r=A.w(this,A.n(this).n("f.E"))
s=s===A.o(r)}return s},
gI(a){var s=A.w(this,A.n(this).n("f.E"))
return A.o(s)},
$iB:1}
A.dp.prototype={
M(){return new A.dp(new Float32Array(A.q(this.a)))},
gL(){return B.F},
gp(a){return this.a.length},
gU(){return null},
k(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
i(a,b,c){var s=this.a,r=s.length
if(b<r){s.$flags&2&&A.b(s)
if(!(b>=0))return A.a(s,b)
s[b]=c}},
gS(){var s=this.a
if(!B.P.gW(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gq(){var s=this.a
if(!B.P.gW(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gv(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>1?s[1]:0
return s},
gu(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>2?s[2]:0
return s},
gA(){var s=this.a,r=s.length
if(r===2){if(1>=r)return A.a(s,1)
s=s[1]}else s=r>3?s[3]:1
return s},
gam(){var s=this.a,r=s.length
if(r===2)if(!B.P.gW(s)){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
else s=A.a7(this)
return s},
gE(a){return new A.V(this)},
T(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gp(b)===this.a.length){s=b.gI(b)
r=A.w(this,A.n(this).n("f.E"))
s=s===A.o(r)}return s},
gI(a){var s=A.w(this,A.n(this).n("f.E"))
return A.o(s)},
$iB:1}
A.dq.prototype={
M(){return new A.dq(new Float64Array(A.q(this.a)))},
gL(){return B.H},
gp(a){return this.a.length},
gU(){return null},
k(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
i(a,b,c){var s=this.a,r=s.length
if(b<r){s.$flags&2&&A.b(s)
if(!(b>=0))return A.a(s,b)
s[b]=c}},
gS(){var s=this.a
if(!B.k.gW(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gq(){var s=this.a
if(!B.k.gW(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gv(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>1?s[1]:0
return s},
gu(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>2?s[2]:0
return s},
gA(){var s=this.a,r=s.length
if(r===2){if(1>=r)return A.a(s,1)
s=s[1]}else s=r>3?s[3]:1
return s},
gam(){var s=this.a,r=s.length
if(r===2)if(!B.k.gW(s)){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
else s=A.a7(this)
return s},
gE(a){return new A.V(this)},
T(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gp(b)===this.a.length){s=b.gI(b)
r=A.w(this,A.n(this).n("f.E"))
s=s===A.o(r)}return s},
gI(a){var s=A.w(this,A.n(this).n("f.E"))
return A.o(s)},
$iB:1}
A.dr.prototype={
M(){return new A.dr(new Int16Array(A.q(this.a)))},
gL(){return B.N},
gp(a){return this.a.length},
gU(){return null},
k(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
i(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.h(c)
r.$flags&2&&A.b(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gS(){var s=this.a
if(!B.Q.gW(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gq(){var s=this.a
if(!B.Q.gW(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gv(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>1?s[1]:0
return s},
gu(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>2?s[2]:0
return s},
gA(){var s=this.a,r=s.length
if(r===2){if(1>=r)return A.a(s,1)
s=s[1]}else s=r>3?s[3]:0
return s},
gam(){var s=this.a,r=s.length
if(r===2)if(!B.Q.gW(s)){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
else s=A.a7(this)
return s},
gE(a){return new A.V(this)},
T(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gp(b)===this.a.length){s=b.gI(b)
r=A.w(this,A.n(this).n("f.E"))
s=s===A.o(r)}return s},
gI(a){var s=A.w(this,A.n(this).n("f.E"))
return A.o(s)},
$iB:1}
A.ds.prototype={
M(){return new A.ds(new Int32Array(A.q(this.a)))},
gL(){return B.O},
gp(a){return this.a.length},
gU(){return null},
k(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
i(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.h(c)
r.$flags&2&&A.b(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gS(){var s=this.a
if(!B.l.gW(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gq(){var s=this.a
if(!B.l.gW(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gv(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>1?s[1]:0
return s},
gu(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>2?s[2]:0
return s},
gA(){var s=this.a,r=s.length
if(r===2){if(1>=r)return A.a(s,1)
s=s[1]}else s=r>3?s[3]:0
return s},
gam(){var s=this.a,r=s.length
if(r===2)if(!B.l.gW(s)){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
else s=A.a7(this)
return s},
gE(a){return new A.V(this)},
T(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gp(b)===this.a.length){s=b.gI(b)
r=A.w(this,A.n(this).n("f.E"))
s=s===A.o(r)}return s},
gI(a){var s=A.w(this,A.n(this).n("f.E"))
return A.o(s)},
$iB:1}
A.dt.prototype={
M(){return new A.dt(new Int8Array(A.q(this.a)))},
gL(){return B.M},
gp(a){return this.a.length},
gU(){return null},
k(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
i(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.h(c)
r.$flags&2&&A.b(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gS(){var s=this.a
if(!B.Z.gW(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gq(){var s=this.a
if(!B.Z.gW(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gv(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>1?s[1]:0
return s},
gu(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>2?s[2]:0
return s},
gA(){var s=this.a,r=s.length
if(r===2){if(1>=r)return A.a(s,1)
s=s[1]}else s=r>3?s[3]:0
return s},
gam(){var s=this.a,r=s.length
if(r===2)if(!B.Z.gW(s)){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
else s=A.a7(this)
return s},
gE(a){return new A.V(this)},
T(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gp(b)===this.a.length){s=b.gI(b)
r=A.w(this,A.n(this).n("f.E"))
s=s===A.o(r)}return s},
gI(a){var s=A.w(this,A.n(this).n("f.E"))
return A.o(s)},
$iB:1}
A.du.prototype={
M(){var s=this.b
s===$&&A.c()
return new A.du(this.a,s)},
gL(){return B.v},
gU(){return null},
bY(a){var s
if(a<this.a){s=this.b
s===$&&A.c()
s=B.a.a3(s,7-a)&1}else s=0
return s},
c8(a,b){var s
if(a>=this.a)return
a=7-a
s=this.b
s===$&&A.c()
this.b=b!==0?(s|B.a.Y(1,a))>>>0:(s&~(B.a.Y(1,a)&255))>>>0},
k(a,b){return this.bY(b)},
i(a,b,c){return this.c8(b,c)},
gS(){return this.bY(0)},
gq(){return this.bY(0)},
gv(){return this.bY(this.a===2?0:1)},
gu(){return this.bY(this.a===2?0:2)},
gA(){return this.bY(this.a===2?1:3)},
gam(){return this.a===2?this.bY(0):A.a7(this)},
aj(a,b,c,d){var s,r=this
r.c8(0,a)
s=r.a
if(s===2)r.c8(1,d)
else if(s>2){r.c8(1,b)
r.c8(2,c)
r.c8(3,d)}},
gE(a){return new A.V(this)},
T(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gp(b)===this.a){s=b.gI(b)
r=A.w(this,A.n(this).n("f.E"))
s=s===A.o(r)}return s},
gI(a){var s=A.w(this,A.n(this).n("f.E"))
return A.o(s)},
$iB:1,
gp(a){return this.a}}
A.dv.prototype={
M(){return new A.dv(new Uint16Array(A.q(this.a)))},
gL(){return B.o},
gp(a){return this.a.length},
gU(){return null},
k(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
i(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.h(c)
r.$flags&2&&A.b(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gS(){var s=this.a
if(!B.q.gW(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gq(){var s=this.a
if(!B.q.gW(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gv(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>1?s[1]:0
return s},
gu(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>2?s[2]:0
return s},
gA(){var s=this.a,r=s.length
if(r===2){if(1>=r)return A.a(s,1)
s=s[1]}else s=r>3?s[3]:0
return s},
gam(){var s=this.a,r=s.length
if(r===2)if(!B.q.gW(s)){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
else s=A.a7(this)
return s},
gE(a){return new A.V(this)},
T(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gp(b)===this.a.length){s=b.gI(b)
r=A.w(this,A.n(this).n("f.E"))
s=s===A.o(r)}return s},
gI(a){var s=A.w(this,A.n(this).n("f.E"))
return A.o(s)},
$iB:1}
A.dw.prototype={
M(){var s=this.b
s===$&&A.c()
return new A.dw(this.a,s)},
gL(){return B.y},
gU(){return null},
bZ(a){var s
if(a<this.a){s=this.b
s===$&&A.c()
s=B.a.a3(s,6-(a<<1>>>0))&3}else s=0
return s},
c9(a,b){var s,r,q
if(a>=this.a)return
if(!(a>=0&&a<4))return A.a(B.bu,a)
s=B.bu[a]
r=B.b.h(b)
q=this.b
q===$&&A.c()
this.b=(q&s|B.a.Y(r&3,6-(a<<1>>>0)))>>>0},
k(a,b){return this.bZ(b)},
i(a,b,c){return this.c9(b,c)},
gS(){return this.bZ(0)},
gq(){return this.bZ(0)},
gv(){return this.bZ(this.a===2?0:1)},
gu(){return this.bZ(this.a===2?0:2)},
gA(){return this.bZ(this.a===2?1:3)},
gam(){return this.a===2?this.bZ(0):A.a7(this)},
aj(a,b,c,d){var s,r=this
r.c9(0,a)
s=r.a
if(s===2)r.c9(1,d)
else if(s>2){r.c9(1,b)
r.c9(2,c)
r.c9(3,d)}},
gE(a){return new A.V(this)},
T(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gp(b)===this.a){s=b.gI(b)
r=A.w(this,A.n(this).n("f.E"))
s=s===A.o(r)}return s},
gI(a){var s=A.w(this,A.n(this).n("f.E"))
return A.o(s)},
$iB:1,
gp(a){return this.a}}
A.dx.prototype={
M(){return new A.dx(new Uint32Array(A.q(this.a)))},
gL(){return B.I},
gp(a){return this.a.length},
gU(){return null},
k(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
i(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.h(c)
r.$flags&2&&A.b(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gS(){var s=this.a
if(!B.n.gW(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gq(){var s=this.a
if(!B.n.gW(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gv(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>1?s[1]:0
return s},
gu(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>2?s[2]:0
return s},
gA(){var s=this.a,r=s.length
if(r===2){if(1>=r)return A.a(s,1)
s=s[1]}else s=r>3?s[3]:0
return s},
gam(){var s=this.a,r=s.length
if(r===2)if(!B.n.gW(s)){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
else s=A.a7(this)
return s},
gE(a){return new A.V(this)},
T(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gp(b)===this.a.length){s=b.gI(b)
r=A.w(this,A.n(this).n("f.E"))
s=s===A.o(r)}return s},
gI(a){var s=A.w(this,A.n(this).n("f.E"))
return A.o(s)},
$iB:1}
A.dy.prototype={
M(){return new A.dy(this.a,new Uint8Array(A.q(this.b)))},
gL(){return B.z},
gU(){return null},
c_(a){var s,r
if(a<0||a>=this.a)s=0
else{s=this.b
r=s.length
if(a<2){if(0>=r)return A.a(s,0)
s=B.a.a3(s[0],4-(a<<2>>>0))&15}else{if(1>=r)return A.a(s,1)
s=B.a.a3(s[1],4-((a&1)<<2))&15}}return s},
cg(a,b){var s,r,q,p
if(a>=this.a)return
s=B.a.H(B.b.h(b),0,15)
if(a>1){a&=1
r=1}else r=0
if(a===0){q=this.b
if(!(r<q.length))return A.a(q,r)
p=q[r]
q.$flags&2&&A.b(q)
q[r]=(p&15|s<<4)>>>0}else if(a===1){q=this.b
if(!(r<q.length))return A.a(q,r)
p=q[r]
q.$flags&2&&A.b(q)
q[r]=(p&240|s)>>>0}},
k(a,b){return this.c_(b)},
i(a,b,c){return this.cg(b,c)},
gS(){return this.c_(0)},
gq(){return this.c_(0)},
gv(){return this.c_(this.a===2?0:1)},
gu(){return this.c_(this.a===2?0:2)},
gA(){return this.c_(this.a===2?1:3)},
gam(){return this.a===2?this.c_(0):A.a7(this)},
aj(a,b,c,d){var s,r=this
r.cg(0,a)
s=r.a
if(s===2)r.cg(1,d)
else if(s>2){r.cg(1,b)
r.cg(2,c)
r.cg(3,d)}},
gE(a){return new A.V(this)},
T(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gp(b)===this.a){s=b.gI(b)
r=A.w(this,A.n(this).n("f.E"))
s=s===A.o(r)}return s},
gI(a){var s=A.w(this,A.n(this).n("f.E"))
return A.o(s)},
$iB:1,
gp(a){return this.a}}
A.b9.prototype={
hV(a,b,c,d){var s,r=this.a
r.$flags&2&&A.b(r)
s=r.length
if(0>=s)return A.a(r,0)
r[0]=a
if(1>=s)return A.a(r,1)
r[1]=b
if(2>=s)return A.a(r,2)
r[2]=c
if(3>=s)return A.a(r,3)
r[3]=d},
M(){return new A.b9(new Uint8Array(A.q(this.a)))},
gL(){return B.f},
gp(a){return this.a.length},
gU(){return null},
k(a,b){var s=this.a,r=s.length
if(b<r){if(!(b>=0))return A.a(s,b)
s=s[b]}else s=0
return s},
i(a,b,c){var s,r=this.a,q=r.length
if(b<q){s=B.b.h(c)
r.$flags&2&&A.b(r)
if(!(b>=0))return A.a(r,b)
r[b]=s}},
gS(){var s=this.a
if(!B.d.gW(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gq(){var s=this.a
if(!B.d.gW(s)){if(0>=s.length)return A.a(s,0)
s=s[0]}else s=0
return s},
gv(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>1?s[1]:0
return s},
gu(){var s=this.a,r=s.length
if(r===2){if(0>=r)return A.a(s,0)
s=s[0]}else s=r>2?s[2]:0
return s},
gA(){var s=this.a,r=s.length
if(r===2){if(1>=r)return A.a(s,1)
s=s[1]}else s=r>3?s[3]:255
return s},
gam(){var s=this.a,r=s.length
if(r===2)if(!B.d.gW(s)){if(0>=r)return A.a(s,0)
s=s[0]}else s=0
else s=A.a7(this)
return s},
gE(a){return new A.V(this)},
T(a,b){var s,r
if(b==null)return!1
s=!1
if(t.G.b(b))if(b.gp(b)===this.a.length){s=b.gI(b)
r=A.w(this,A.n(this).n("f.E"))
s=s===A.o(r)}return s},
gI(a){var s=A.w(this,A.n(this).n("f.E"))
return A.o(s)},
$iB:1}
A.hm.prototype={}
A.cl.prototype={}
A.ap.prototype={
a7(){return"Format."+this.b}}
A.hg.prototype={
a7(){return"BlendMode."+this.b}}
A.bZ.prototype={
cS(a){var s=$.oS()
if(!s.aN(a))return"<unknown>"
return s.k(0,a).a},
C(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
for(s=e.a,r=new A.ad(s,s.r,s.e,A.n(s).n("ad<1>")),q=t.p,p=t.r,o=t.N,n=t.P,m="";r.D();){l=r.d
m+=l+"\n"
k=s.k(0,l)
for(l=k.a,l=new A.ad(l,l.r,l.e,A.n(l).n("ad<1>"));l.D();){j=l.d
i=k.k(0,j)
m=i==null?m+("\t"+e.cS(j)+"\n"):m+("\t"+e.cS(j)+": "+i.C(0)+"\n")}for(l=k.b.a,j=new A.ad(l,l.r,l.e,A.n(l).n("ad<1>"));j.D();){h=j.d
m+=h+"\n"
if(!l.aN(h))l.i(0,h,new A.bt(A.F(q,p),new A.bH(A.F(o,n))))
g=l.k(0,h)
for(h=g.a,h=new A.ad(h,h.r,h.e,A.n(h).n("ad<1>"));h.D();){f=h.d
i=g.k(0,f)
m=i==null?m+("\t"+e.cS(f)+"\n"):m+("\t"+e.cS(f)+": "+i.C(0)+"\n")}}}return m.charCodeAt(0)==0?m:m},
bM(c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4="Length must be a non-negative integer: ",c5=c6.e
c6.e=!0
s=c6.d
a1=c6.m()
if(a1===18761){c6.e=!1
if(c6.m()!==42){c6.e=c5
return!1}}else if(a1===19789){c6.e=!0
if(c6.m()!==42){c6.e=c5
return!1}}else return!1
r=c6.l()
c3.c=0
q=0
a2=t.p
a3=A.nP(a2)
a4=c3.a
a5=t.n0
a6=c6.c
a7=t.r
a8=t.N
a9=t.P
for(;;){b0=r
if(typeof b0!=="number")return b0.bg()
if(b0>0){b0=q
if(typeof b0!=="number")return b0.eu()
b0=b0<64&&a3.B(0,r)}else b0=!1
if(!b0)break
try{b0=s
b1=r
if(typeof b0!=="number")return b0.an()
if(typeof b1!=="number")return A.a8(b1)
b1=b0+b1
c6.d=b1
if(a6-b1<2)break
p=new A.bt(A.F(a2,a7),new A.bH(A.F(a8,a9)))
o=c6.m()
b0=o
if(typeof b0!=="number")return b0.bO()
if(b0*12>a6-c6.d)break
n=o
b0=n
if(b0<0)A.G(A.av(c4+A.y(b0),null))
m=A.i(new Array(b0),a5)
l=0
for(;;){b0=l
b1=n
if(typeof b0!=="number")return b0.eu()
if(typeof b1!=="number")return A.a8(b1)
if(!(b0<b1))break
J.a2(m,l,c3.fq(c6,s))
b0=l
if(typeof b0!=="number")return b0.an()
l=b0+1}k=m
for(b0=k,b1=b0.length,b2=0;b2<b0.length;b0.length===b1||(0,A.P)(b0),++b2){j=b0[b2]
if(j.b!=null){b3=j.a
b4=j.b
b4.toString
J.a2(p,b3,b4)}}a4.i(0,"ifd"+A.y(q),p)
b0=q
if(typeof b0!=="number")return b0.an()
q=b0+1
r=c6.l()}catch(b5){break}}for(b0=new A.be(a4,a4.r,a4.e,A.n(a4).n("be<2>"));b0.D();){i=b0.d
for(b1=B.c5.ghj(),b1=b1.gE(b1);b1.D();){h=b1.gJ()
b3=A.p(h)
if(i.a.aN(b3))try{g=J.d(i,h).h(0)
b3=s
b4=g
if(typeof b3!=="number")return b3.an()
if(typeof b4!=="number")return A.a8(b4)
c6.d=b3+b4
f=new A.bt(A.F(a2,a7),new A.bH(A.F(a8,a9)))
e=c6.m()
d=e
b4=d
if(b4<0)A.G(A.av(c4+A.y(b4),null))
c=A.i(new Array(b4),a5)
b=0
for(;;){b3=b
b4=d
if(typeof b3!=="number")return b3.eu()
if(typeof b4!=="number")return A.a8(b4)
if(!(b3<b4))break
J.a2(c,b,c3.fq(c6,s))
b3=b
if(typeof b3!=="number")return b3.an()
b=b3+1}a=c
for(b3=a,b4=b3.length,b2=0;b2<b3.length;b3.length===b4||(0,A.P)(b3),++b2){a0=b3[b2]
if(a0.b!=null){b6=a0.a
b7=a0.b
b7.toString
J.a2(f,b6,b7)}}b3=i.b
b4=B.c5.k(0,h)
b4.toString
b3.a.i(0,b4,a9.a(f))}catch(b5){continue}}}c3.b=null
b8=a4.k(0,"ifd1")
if(b8!=null){a2=b8.a
a2=a2.aN(513)&&a2.aN(514)}else a2=!1
if(a2){b9=b8.k(0,513).h(0)
c0=b8.k(0,514).h(0)
a2=s
if(typeof a2!=="number")return a2.an()
c1=a2+b9
if(c0>0){a2=s
if(typeof a2!=="number")return A.a8(a2)
a2=c1>=a2&&c1+c0<=a6}else a2=!1
if(a2){c2=c6.d
c6.d=c1
c3.b=c6.aa(c0).Z()
c6.d=c2}}c6.e=c5
return!1},
fq(a,b){var s,r,q,p,o,n,m,l=a.m(),k=a.m(),j=a.l(),i=new A.iR(l,null)
if(k>=14)return i
s=B.bN[k]
r=j*B.U[k]
if(this.c+r>16777216)return i
q=a.d
if((r>4?a.d=a.l()+b:q)+r>a.c)return i
p=a.aa(r)
this.c+=r
switch(s.a){case 0:break
case 6:i.b=new A.c3(new Int8Array(A.q(J.nC(B.d.gt(p.Z()),0,j))))
break
case 1:i.b=new A.bG(new Uint8Array(A.q(p.aa(j).Z())))
break
case 7:i.b=new A.dG(new Uint8Array(A.q(p.aa(j).Z())))
break
case 2:i.b=new A.cs(j===0?"":p.al(j-1))
break
case 3:i.b=A.pl(p,j)
break
case 4:i.b=A.pg(p,j)
break
case 5:i.b=A.ph(p,j)
break
case 10:i.b=A.pj(p,j)
break
case 8:i.b=A.pk(p,j)
break
case 9:i.b=A.pi(p,j)
break
case 11:i.b=A.pm(p,j)
break
case 12:i.b=A.pf(p,j)
break
case 13:if(j===1){o=new A.dE(0)
n=p.l()
m=$.S()
m.$flags&2&&A.b(m)
m[0]=n
n=$.ac()
if(0>=n.length)return A.a(n,0)
o.a=n[0]
i.b=o}break}a.d=q+4
return i}}
A.iR.prototype={}
A.hr.prototype={}
A.bH.prototype={
i0(a){a.a.b5(0,new A.jV(this))},
k(a,b){var s=this.a
if(!s.aN(b))s.i(0,b,new A.bt(A.F(t.p,t.r),new A.bH(A.F(t.N,t.P))))
s=s.k(0,b)
s.toString
return s}}
A.jV.prototype={
$2(a,b){var s
A.aU(a)
s=A.pe(t.P.a(b))
this.a.a.i(0,a,s)
return s},
$S:27}
A.bt.prototype={
li(a){a.a.b5(0,new A.jW(this))
a.b.a.b5(0,new A.jX(this))},
k(a,b){var s=this.a.k(0,b)
return s},
i(a,b,c){this.a.i(0,b,c)},
gcl(){var s=this.a.k(0,274)
return s==null?null:s.h(0)},
scl(a){this.a.bN(0,274)}}
A.jW.prototype={
$2(a,b){var s
A.p(a)
s=t.r.a(b).M()
this.a.a.i(0,a,s)
return s},
$S:53}
A.jX.prototype={
$2(a,b){var s
A.aU(a)
s=A.pe(t.P.a(b))
this.a.b.a.i(0,a,s)
return s},
$S:27}
A.am.prototype={
a7(){return"IfdValueType."+this.b}}
A.aa.prototype={
ac(a,b){A.p(b)
return 0},
h(a){return this.ac(0,0)},
bn(){return new Uint8Array(0)},
C(a){return""},
T(a,b){var s=this
if(b==null)return!1
return b instanceof A.aa&&s.gb6()===b.gb6()&&s.gp(s)===b.gp(b)&&s.gI(s)===b.gI(b)},
gI(a){return 0}}
A.bG.prototype={
M(){return new A.bG(new Uint8Array(A.q(this.a)))},
gb6(){return B.bg},
gp(a){return this.a.length},
T(a,b){var s,r
if(b==null)return!1
if(b instanceof A.bG){s=this.a
r=b.a
s=s.length===r.length&&A.o(s)===A.o(r)}else s=!1
return s},
gI(a){return A.o(this.a)},
ac(a,b){var s
A.p(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
h(a){return this.ac(0,0)},
bn(){return this.a},
C(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.y(s)
return s}}
A.cs.prototype={
M(){return new A.cs(this.a)},
gb6(){return B.m},
gp(a){return this.a.length+1},
T(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cs){s=this.a
r=b.a
s=s.length+1===r.length+1&&B.G.gI(s)===B.G.gI(r)}else s=!1
return s},
gI(a){return B.G.gI(this.a)},
bn(){return new Uint8Array(A.q(new A.aw(this.a)))},
C(a){return this.a}}
A.cx.prototype={
i5(a,b){var s,r,q,p
for(s=this.a,r=s.$flags|0,q=0;q<b;++q){p=a.m()
r&2&&A.b(s)
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
M(){return new A.cx(new Uint16Array(A.q(this.a)))},
gb6(){return B.j},
gp(a){return this.a.length},
T(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cx){s=this.a
r=b.a
s=s.length===r.length&&A.o(s)===A.o(r)}else s=!1
return s},
gI(a){return A.o(this.a)},
ac(a,b){var s
A.p(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
h(a){return this.ac(0,0)},
bn(){return J.D(B.q.gt(this.a))},
C(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.y(s)
return s}}
A.c2.prototype={
i2(a,b){var s,r,q,p
for(s=this.a,r=s.$flags|0,q=0;q<b;++q){p=a.l()
r&2&&A.b(s)
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
M(){return new A.c2(new Uint32Array(A.q(this.a)))},
gb6(){return B.r},
gp(a){return this.a.length},
T(a,b){var s,r
if(b==null)return!1
if(b instanceof A.c2){s=this.a
r=b.a
s=s.length===r.length&&A.o(s)===A.o(r)}else s=!1
return s},
gI(a){return A.o(this.a)},
ac(a,b){var s
A.p(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
h(a){return this.ac(0,0)},
bn(){return J.D(B.n.gt(this.a))},
C(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.y(s)
return s}}
A.ct.prototype={
M(){return new A.ct(A.nQ(this.a,!0,t.k))},
gb6(){return B.u},
gp(a){return this.a.length},
ac(a,b){var s
A.p(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b].h(0)},
h(a){return this.ac(0,0)},
T(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.ct){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.o(s)===A.o(q)}else s=!1
return s},
gI(a){return A.o(this.a)},
C(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=s[0].C(0)}else s=A.y(s)
return s}}
A.c3.prototype={
M(){return new A.c3(new Int8Array(A.q(this.a)))},
gb6(){return B.bl},
gp(a){return this.a.length},
T(a,b){var s,r
if(b==null)return!1
if(b instanceof A.c3){s=this.a
r=b.a
s=s.length===r.length&&A.o(s)===A.o(r)}else s=!1
return s},
gI(a){return A.o(this.a)},
ac(a,b){var s
A.p(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
h(a){return this.ac(0,0)},
bn(){return J.D(B.Z.gt(this.a))},
C(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.y(s)
return s}}
A.cw.prototype={
i4(a,b){var s,r,q,p,o
for(s=this.a,r=s.$flags|0,q=0;q<b;++q){p=a.m()
o=$.at()
o.$flags&2&&A.b(o)
o[0]=p
p=$.aG()
if(0>=p.length)return A.a(p,0)
p=p[0]
r&2&&A.b(s)
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
M(){return new A.cw(new Int16Array(A.q(this.a)))},
gb6(){return B.bm},
gp(a){return this.a.length},
T(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cw){s=this.a
r=b.a
s=s.length===r.length&&A.o(s)===A.o(r)}else s=!1
return s},
gI(a){return A.o(this.a)},
ac(a,b){var s
A.p(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
h(a){return this.ac(0,0)},
bn(){return J.D(B.Q.gt(this.a))},
C(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.y(s)
return s}}
A.cu.prototype={
i3(a,b){var s,r,q,p,o
for(s=this.a,r=s.$flags|0,q=0;q<b;++q){p=a.l()
o=$.S()
o.$flags&2&&A.b(o)
o[0]=p
p=$.ac()
if(0>=p.length)return A.a(p,0)
p=p[0]
r&2&&A.b(s)
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
M(){return new A.cu(new Int32Array(A.q(this.a)))},
gb6(){return B.bn},
gp(a){return this.a.length},
T(a,b){var s,r
if(b==null)return!1
if(b instanceof A.cu){s=this.a
r=b.a
s=s.length===r.length&&A.o(s)===A.o(r)}else s=!1
return s},
gI(a){return A.o(this.a)},
ac(a,b){var s
A.p(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b]},
h(a){return this.ac(0,0)},
bn(){return J.D(B.l.gt(this.a))},
C(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=""+s[0]}else s=A.y(s)
return s}}
A.cv.prototype={
M(){return new A.cv(A.nQ(this.a,!0,t.k))},
gb6(){return B.bh},
gp(a){return this.a.length},
T(a,b){var s,r,q
if(b==null)return!1
if(b instanceof A.cv){s=this.a
r=s.length
q=b.a
s=r===q.length&&A.o(s)===A.o(q)}else s=!1
return s},
gI(a){return A.o(this.a)},
ac(a,b){var s
A.p(b)
s=this.a
if(!(b>=0&&b<s.length))return A.a(s,b)
return s[b].h(0)},
h(a){return this.ac(0,0)},
C(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=s[0].C(0)}else s=A.y(s)
return s}}
A.dF.prototype={
i6(a,b){var s,r,q,p,o
for(s=this.a,r=s.$flags|0,q=0;q<b;++q){p=a.l()
o=$.S()
o.$flags&2&&A.b(o)
o[0]=p
p=$.ck()
if(0>=p.length)return A.a(p,0)
p=p[0]
r&2&&A.b(s)
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
M(){return new A.dF(new Float32Array(A.q(this.a)))},
gb6(){return B.bi},
gp(a){return this.a.length},
T(a,b){var s,r
if(b==null)return!1
if(b instanceof A.dF){s=this.a
r=b.a
s=s.length===r.length&&A.o(s)===A.o(r)}else s=!1
return s},
gI(a){return A.o(this.a)},
bn(){return J.D(B.P.gt(this.a))},
C(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=A.y(s[0])}else s=A.y(s)
return s}}
A.dD.prototype={
i1(a,b){var s,r
for(s=this.a,r=0;r<b;++r)B.k.i(s,r,a.dz())},
M(){return new A.dD(new Float64Array(A.q(this.a)))},
gb6(){return B.bj},
gp(a){return this.a.length},
T(a,b){var s,r
if(b==null)return!1
if(b instanceof A.dD){s=this.a
r=b.a
s=s.length===r.length&&A.o(s)===A.o(r)}else s=!1
return s},
gI(a){return A.o(this.a)},
bn(){return J.D(B.k.gt(this.a))},
C(a){var s=this.a,r=s.length
if(r===1){if(0>=r)return A.a(s,0)
s=A.y(s[0])}else s=A.y(s)
return s}}
A.dG.prototype={
M(){return new A.dG(new Uint8Array(A.q(this.a)))},
gb6(){return B.S},
gp(a){return this.a.length},
bn(){return this.a},
T(a,b){var s,r
if(b==null)return!1
if(b instanceof A.dG){s=this.a
r=b.a
s=s.length===r.length&&A.o(s)===A.o(r)}else s=!1
return s},
gI(a){return A.o(this.a)},
C(a){return"<data>"}}
A.dE.prototype={
M(){return A.ta(this.a)},
gb6(){return B.bk},
gp(a){return 1},
T(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.dE)s=this.a===b.a
return s},
gI(a){return this.a},
ac(a,b){if(A.p(b)!==0)throw A.h(A.pN("Ifd tags must have exactly one entry (the offset)"))
return this.a},
h(a){return this.ac(0,0)},
bn(){var s=this.a
return new Uint8Array(A.q(A.i([B.a.j(s,24),B.a.j(s,16),B.a.j(s,8),s],t.t)))},
C(a){return"Ifd@"+this.a}}
A.bJ.prototype={
c2(a,b,c){var s,r=this.c+b*c
this.c=r
s=this.a
if(s>0&&r>s)throw A.h(A.l("Animation frames exceed the maximum of "+s+" pixels"))}}
A.al.prototype={
a7(){return"BmpCompression."+this.b}}
A.jh.prototype={}
A.aY.prototype={
eD(a,b){var s,r,q,p,o,n,m,l=this,k=l.d,j=k<=40
if(j){s=l.r
s=s===B.ay||s===B.az}else s=!0
if(s){s=l.as=a.l()
r=A.mX(s)
l.CW=r
q=B.a.a3(s,r)
s=q>0
l.cx=s?255/q:0
r=l.at=a.l()
p=A.mX(r)
l.cy=p
o=B.a.a3(r,p)
l.db=s?255/o:0
r=l.ax=a.l()
p=A.mX(r)
l.dx=p
n=B.a.a3(r,p)
l.dy=s?255/n:0
if(!j||l.r===B.az){j=l.ay=a.l()
s=A.mX(j)
l.fr=s
m=B.a.a3(j,s)
l.fx=m>0?255/m:0}else if(l.f===16){l.ay=4278190080
l.fr=24
l.fx=1}else{l.ay=4278190080
l.fr=24
l.fx=1}}else if(l.f===16){l.as=31744
l.CW=10
l.cx=8.225806451612904
l.at=992
l.cy=5
l.db=8.225806451612904
l.ax=31
l.dx=0
l.dy=8.225806451612904
l.fx=l.fr=l.ay=0}else{l.as=16711680
l.CW=16
l.cx=1
l.at=65280
l.cy=8
l.db=1
l.ax=255
l.dx=0
l.dy=1
l.ay=4278190080
l.fr=24
l.fx=1}j=a.d
a.d=j+(k-(j-l.fy))
if(l.f<=8)l.lW(a)},
gcH(){var s=this.d
if(s!==40)if(s===124){s=this.ay
s===$&&A.c()
s=s===0}else s=!1
else s=!0
return s},
gN(){return Math.abs(this.c)},
lW(a){var s,r,q,p,o,n=this,m=n.z
if(m===0)m=B.a.P(1,n.f)
n.ch=new A.b_(new Uint8Array(m*3),m,3)
for(s=0;s<m;++s){r=J.d(a.a,a.d++)
q=J.d(a.a,a.d++)
p=J.d(a.a,a.d++)
o=J.d(a.a,a.d++)
n.ch.cT(s,p,q,r,o)}},
lr(a,b){var s,r,q,p,o,n,m,l,k,j=this
t.jO.a(b)
if(j.ch!=null){s=j.f
if(s===1){r=a.G()
for(q=7;q>=0;--q)b.$4(B.a.ba(r,q)&1,0,0,0)
return}else if(s===2){r=a.G()
for(q=6;q>=0;q-=2)b.$4(B.a.ba(r,q)&2,0,0,0)}else if(s===4){r=a.G()
b.$4(B.a.j(r,4)&15,0,0,0)
b.$4(r&15,0,0,0)
return}else if(s===8){b.$4(a.G(),0,0,0)
return}}s=j.r
if(s===B.ay&&j.f===32){p=a.l()
s=j.as
s===$&&A.c()
o=j.CW
o===$&&A.c()
o=B.a.a3((p&s)>>>0,o)
s=j.cx
s===$&&A.c()
n=B.b.h(o*s)
s=j.at
s===$&&A.c()
o=j.cy
o===$&&A.c()
o=B.a.a3((p&s)>>>0,o)
s=j.db
s===$&&A.c()
m=B.b.h(o*s)
s=j.ax
s===$&&A.c()
o=j.dx
o===$&&A.c()
o=B.a.a3((p&s)>>>0,o)
s=j.dy
s===$&&A.c()
l=B.b.h(o*s)
if(j.gcH())k=255
else{s=j.ay
s===$&&A.c()
o=j.fr
o===$&&A.c()
o=B.a.a3((p&s)>>>0,o)
s=j.fx
s===$&&A.c()
k=B.b.h(o*s)}return b.$4(n,m,l,k)}else{o=j.f
if(o===32&&s===B.b0){l=a.G()
m=a.G()
n=a.G()
k=a.G()
return b.$4(n,m,l,j.gcH()?255:k)}else if(o===24){l=a.G()
m=a.G()
return b.$4(a.G(),m,l,255)}else if(o===16){p=a.m()
s=j.as
s===$&&A.c()
o=j.CW
o===$&&A.c()
o=B.a.a3((p&s)>>>0,o)
s=j.cx
s===$&&A.c()
n=B.b.h(o*s)
s=j.at
s===$&&A.c()
o=j.cy
o===$&&A.c()
o=B.a.a3((p&s)>>>0,o)
s=j.db
s===$&&A.c()
m=B.b.h(o*s)
s=j.ax
s===$&&A.c()
o=j.dx
o===$&&A.c()
o=B.a.a3((p&s)>>>0,o)
s=j.dy
s===$&&A.c()
l=B.b.h(o*s)
if(j.gcH())k=255
else{s=j.ay
s===$&&A.c()
o=j.fr
o===$&&A.c()
o=B.a.a3((p&s)>>>0,o)
s=j.fx
s===$&&A.c()
k=B.b.h(o*s)}return b.$4(n,m,l,k)}else throw A.h(A.l("Unsupported bitsPerPixel ("+o+") or compression ("+s.C(0)+")."))}},
$iH:1,
gR(){return this.b}}
A.hi.prototype={
aJ(a){var s,r
if(!A.p_(A.v(a,!1,null,0))||a.length<18)return!1
s=A.v(a,!1,null,0)
s.d+=14
r=s.l()
return r>=12&&r<=124},
aq(a){return A.M(new A.jg(this,a),t.bL)},
iu(a){var s
if(!this.aJ(a))return null
s=A.v(a,!1,null,0)
this.a=s
return this.b=A.rF(s,null)},
ai(a){return A.M(new A.je(this,a),t.mo)},
it(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.b
if(a0==null)return new A.ax(a,a,a,a,0,B.i,0,0)
s=b.a
s===$&&A.c()
r=a0.a.b
r===$&&A.c()
s.d=r
r=a0.b
A.as(r,a0.gN(),b.d,!1)
q=a0.f
p=B.a.K(r*q+31,32)*4
s=a0.gN()
o=b.a
if(p*s>o.c-o.d)throw A.h(A.l("Truncated BMP data"))
s=b.c
if(s)n=4
else if(q===1||q===4||q===8)n=1
else{o=q===32?4:3
n=o}if(s)m=B.f
else if(q===1)m=B.v
else{if(q===2)o=B.y
else if(q===4)o=B.z
else o=B.f
m=o}l=s?a:a0.ch
k=A.W(a,a,m,0,B.i,a0.gN(),a,0,n,l,B.f,r,!1)
for(j=k.gN()-1,s=a0.c,r=1/s<0,o=s<0,s=s===0;j>=0;--j){i={}
if(!(s?r:o))h=j
else{g=k.a
g=g==null?a:g.b
h=(g==null?0:g)-1-j}g=b.a
f=g.aE(p)
g.d=g.d+(f.c-f.d)
g=k.a
e=g==null
d=e?a:g.a
if(d==null)d=0
i.a=0
c=e?a:g.a0(0,h,a)
if(c==null)c=new A.J()
while(i.a<d)a0.lr(f,new A.jd(i,b,d,a0,c))}return k},
aL(a){return A.M(new A.jf(this,a,null),t.H)},
is(a,b){var s=this.aq(a)
if(s==null||s.b<1||s.gN()<1)return null
return this.ai(0)}}
A.jg.prototype={
$0(){return this.a.iu(this.b)},
$S:55}
A.je.prototype={
$0(){return this.a.it(this.b)},
$S:56}
A.jd.prototype={
$4(a,b,c,d){var s,r,q=this,p=q.a
if(p.a<q.c){s=q.b.c&&q.d.ch!=null
r=q.e
if(s){s=q.d
r.aj(s.ch.aX(a),s.ch.aW(a),s.ch.aU(a),s.ch.aT(a))}else r.aj(a,b,c,d)
r.D();++p.a}},
$S:76}
A.jf.prototype={
$0(){return this.a.is(this.b,this.c)},
$S:1}
A.jo.prototype={}
A.H.prototype={}
A.jm.prototype={}
A.jp.prototype={}
A.ht.prototype={}
A.eX.prototype={
cJ(){return this.w},
bo(a,b,c,d,e){throw A.h(A.l("B44 compression not yet supported."))},
cn(a,b,c){return this.bo(a,b,c,null,null)},
C(a){return A.y(this.r)+" "+this.x}}
A.cp.prototype={
a7(){return"ExrChannelType."+this.b}}
A.co.prototype={
a7(){return"ExrChannelName."+this.b}}
A.hu.prototype={
hW(a){var s=this,r=a.cL()
s.a=r
if(r.length===0)return
r=a.l()
if(!(r<3))return A.a(B.bD,r)
s.c=B.bD[r]
a.G()
a.d+=3
s.f=a.l()
s.r=a.l()
r=s.a
if(r==="R"){s.w=!0
s.b=B.cY}else if(r==="G"){s.w=!0
s.b=B.cZ}else if(r==="B"){s.w=!0
s.b=B.d_}else if(r==="A"){s.w=!0
s.b=B.d0}else{s.w=!1
s.b=B.d1}switch(s.c.a){case 0:s.d=4
break
case 1:s.d=2
break
case 2:s.d=4
break}}}
A.bb.prototype={
a7(){return"ExrCompressorType."+this.b}}
A.bE.prototype={
bo(a,b,c,d,e){throw A.h(A.l("Unsupported compression type"))},
cn(a,b,c){return this.bo(a,b,c,null,null)}}
A.hM.prototype={}
A.hv.prototype={
slP(a){this.c=t.T.a(a)}}
A.hw.prototype={
hX(a,b){var s,r,q,p,o,n=this,m=A.v(a,!1,null,0)
if(m.l()!==20000630)throw A.h(A.l("File is not an OpenEXR image file."))
s=n.d=m.G()
if(s!==2)throw A.h(A.l("Cannot read version "+s+" image files."))
s=n.e=m.bm()
if((s&4294967289)>>>0!==0)throw A.h(A.l("The file format version number's flag field contains unrecognized flags."))
r=new A.bJ(b)
if((s&16)===0){q=n.c
p=A.pq(q.length,(s&2)!==0,m,b)
if(p.w>0)B.c.B(q,p)}else for(s=n.c;;){p=A.pq(s.length,(n.e&2)!==0,m,b)
q=p.w
if(q<=0)break
r.c2(0,q,p.x)
B.c.B(s,p)}s=n.c
q=s.length
if(q===0)throw A.h(A.l("Error reading image header"))
for(o=0;o<s.length;s.length===q||(0,A.P)(s),++o)s[o].lV(m)
n.kA(m)},
kA(a){var s,r,q,p,o=this
for(s=o.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.P)(s),++q){p=s[q]
o.a=Math.max(o.a,p.w)
o.b=Math.max(o.b,p.x)
if(p.db)o.kJ(p,a)
else o.kI(p,a)}},
kJ(b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=this.e
b5===$&&A.c()
s=(b5&16)!==0
b5=b6.b
b5.toString
r=b6.CW
q=b6.ay
p=A.x(b7,b4,0)
o=b6.c
n=b6.a
m=0
l=0
for(;;){k=b6.k1
k.toString
if(!(m<k))break
j=0
for(;;){k=b6.id
k.toString
if(!(j<k))break
k=l!==0
i=0
h=0
for(;;){g=b6.go
if(!(m<g.length))return A.a(g,m)
if(!(i<g[m]))break
f=0
for(;;){g=b6.fy
if(!(j<g.length))return A.a(g,j)
if(!(f<g[j]))break
if(k)break
if(!(l>=0&&l<q.length))return A.a(q,l)
g=q[l]
if(!(h>=0&&h<g.length))return A.a(g,h)
p.d=g[h]
if(s)if(p.l()!==n)throw A.h(A.l("Invalid Image Data"))
e=p.l()
d=p.l()
p.l()
p.l()
c=p.aE(p.l())
p.d=p.d+(c.c-c.d)
g=b6.dy
g.toString
b=d*g
a=b6.dx
a.toString
g=r.bo(c,e*a,b,a,g)
a=g.length
a=Math.min(a,a)
a0=new A.ai(g,0,a,0,!1)
a1=r.a
a2=r.b
a3=o.length
a4=0
a5=0
for(;;){if(!(a5<a2&&b<this.b))break
for(a6=0;a6<a3;++a6){if(a4>=a)break
if(!(a6<o.length))return A.a(o,a6)
a7=o[a6]
g=b6.dx
g.toString
a8=e*g
for(a9=0;a9<a1;++a9,++a8){g=a7.c
g===$&&A.c()
switch(g.a){case 1:g=a0.m()
b0=$.L
b0=b0!=null?b0:A.R()
if(!(g<b0.length))return A.a(b0,g)
b1=b0[g]
break
case 2:b1=a0.m()
break
case 0:b1=a0.l()
break
default:b1=b4}g=a7.d
g===$&&A.c()
a4+=g
g=a7.w
g===$&&A.c()
if(g){g=b5.a
b2=g==null?b4:g.a0(a8,b,b4)
if(b2==null)b2=new A.J()
g=a7.b
g===$&&A.c()
b2.i(0,g.a,b1)}else{g=a7.a
g===$&&A.c()
b0=b5.b
b3=b0!=null?b0.k(0,g):b4
if(b3!=null)b3.aH(a8,b,b1,0,0)}}}++a5;++b}++f;++h}++i}++j;++l}++m}},
kI(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=null,a7=this.e
a7===$&&A.c()
s=(a7&16)!==0
a7=a8.b
a7.toString
r=a8.CW
q=a8.ay
if(0>=q.length)return A.a(q,0)
p=q[0]
o=a8.cx
n=A.x(a9,a6,0)
for(q=p.length,m=a8.c,l=r!=null,k=0,j=0;j<q;++j){n.d=p[j]
if(s)if(n.l()!==3.141592653589793)throw A.h(A.l("Invalid Image Data"))
i=n.l()
h=$.S()
h.$flags&2&&A.b(h)
h[0]=i
i=$.ac()
if(0>=i.length)return A.a(i,0)
h[0]=n.l()
g=n.aE(i[0])
n.d=n.d+(g.c-g.d)
if(l){i=r.cn(g,0,k)
h=i.length
f=new A.ai(i,0,Math.min(h,h),0,!1)}else f=g
e=f.c-f.d
d=m.length
c=0
for(;;){if(!(c<o&&k<this.b))break
i=a8.cy
if(!(k>=0&&k<i.length))return A.a(i,k)
b=i[k]
if(b>=e)break
for(a=0;a<d;++a){if(b>=e)break
if(!(a<m.length))return A.a(m,a)
a0=m[a]
a1=a8.w
for(a2=0;a2<a1;++a2){i=a0.c
i===$&&A.c()
switch(i.a){case 1:i=f.m()
h=$.L
h=h!=null?h:A.R()
if(!(i<h.length))return A.a(h,i)
a3=h[i]
break
case 2:a3=f.m()
break
case 0:a3=f.l()
break
default:a3=a6}i=a0.d
i===$&&A.c()
b+=i
i=a0.w
i===$&&A.c()
if(i){i=a7.a
a4=i==null?a6:i.a0(a2,k,a6)
if(a4==null)a4=new A.J()
i=a0.b
i===$&&A.c()
a4.i(0,i.a,a3)}else{i=a0.a
i===$&&A.c()
h=a7.b
a5=h!=null?h.k(0,i):a6
if(a5!=null)a5.aH(a2,k,a3,0,0)}}}++c;++k}}},
$iH:1,
gR(){return this.a},
gN(){return this.b}}
A.eC.prototype={
hY(b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2=A.F(t.N,t.oD)
for(s=b0.e,r=t.t,q=t.L,p=b0.c,o=B.C;;){n=b5.cL()
if(n.length===0)break
b5.cL()
m=b5.aE(b5.l())
b5.d=b5.d+(m.c-m.d)
s.i(0,n,new A.ht())
switch(n){case"channels":for(;;){l=new A.hu()
l.hW(m)
k=l.a
k===$&&A.c()
if(k.length===0)break
j=l.w
j===$&&A.c()
if(j){++b0.d
k=l.c
k===$&&A.c()
if(k===B.bb)o=B.C
else o=k===B.bc?B.F:B.I}else{j=l.c
j===$&&A.c()
b2.i(0,k,j)}B.c.B(p,l)}break
case"chromaticities":k=new Float32Array(8)
b0.at=k
j=m.l()
i=$.S()
i.$flags&2&&A.b(i)
i[0]=j
j=$.ck()
if(0>=j.length)return A.a(j,0)
k[0]=j[0]
k=b0.at
i[0]=m.l()
h=j[0]
k.$flags&2&&A.b(k)
k[1]=h
h=b0.at
i[0]=m.l()
k=j[0]
h.$flags&2&&A.b(h)
h[2]=k
k=b0.at
i[0]=m.l()
h=j[0]
k.$flags&2&&A.b(k)
k[3]=h
h=b0.at
i[0]=m.l()
k=j[0]
h.$flags&2&&A.b(h)
h[4]=k
k=b0.at
i[0]=m.l()
h=j[0]
k.$flags&2&&A.b(k)
k[5]=h
h=b0.at
i[0]=m.l()
k=j[0]
h.$flags&2&&A.b(h)
h[6]=k
k=b0.at
i[0]=m.l()
j=j[0]
k.$flags&2&&A.b(k)
k[7]=j
break
case"compression":k=J.d(m.a,m.d++)
if(!(k>=0&&k<8))return A.a(B.bP,k)
b0.ax=B.bP[k]
break
case"dataWindow":k=m.l()
j=$.S()
j.$flags&2&&A.b(j)
j[0]=k
k=$.ac()
if(0>=k.length)return A.a(k,0)
i=k[0]
j[0]=m.l()
h=k[0]
j[0]=m.l()
g=k[0]
j[0]=m.l()
k=q.a(A.i([i,h,g,k[0]],r))
b0.r=k
b0.w=k[2]-k[0]+1
b0.x=k[3]-k[1]+1
break
case"displayWindow":k=m.l()
j=$.S()
j.$flags&2&&A.b(j)
j[0]=k
k=$.ac()
if(0>=k.length)return A.a(k,0)
j[0]=m.l()
j[0]=m.l()
j[0]=m.l()
break
case"lineOrder":break
case"pixelAspectRatio":k=m.l()
j=$.S()
j.$flags&2&&A.b(j)
j[0]=k
k=$.ck()
if(0>=k.length)return A.a(k,0)
break
case"screenWindowCenter":k=m.l()
j=$.S()
j.$flags&2&&A.b(j)
j[0]=k
k=$.ck()
if(0>=k.length)return A.a(k,0)
j[0]=m.l()
break
case"screenWindowWidth":k=m.l()
j=$.S()
j.$flags&2&&A.b(j)
j[0]=k
k=$.ck()
if(0>=k.length)return A.a(k,0)
break
case"tiles":b0.dx=m.l()
b0.dy=m.l()
f=J.d(m.a,m.d++)
b0.fr=f&15
b0.fx=B.a.j(f,4)&15
break
case"type":e=m.cL()
if(e!=="deepscanline")if(e!=="deeptile")throw A.h(A.l("EXR Invalid type: "+e))
break
default:break}}s=b0.w
if(s===0&&b0.x===0)return
A.as(s,b0.x,b6,!1)
s=b0.w
b0.b=A.W(b1,b1,o,0,B.i,b0.x,b1,0,b0.d,b1,B.f,s,!1)
for(s=new A.cD(b2,b2.$ti.n("cD<1,2>")).gE(0);s.D();){d=s.d
switch(d.b.a){case 1:r=b0.w
q=b0.x
r=new A.dH(new Uint16Array(r*q),r,q,1)
break
case 2:r=b0.w
q=b0.x
r=new A.dI(new Float32Array(r*q),r,q,1)
break
case 0:r=b0.w
q=b0.x
r=new A.dL(new Uint32Array(r*q),r,q,1)
break
default:r=b1}q=b0.b
q.toString
q.hO(d.a,r)}if(b0.db){c={}
b=b0.dx
if(b==null)b=0
a=b0.dy
if(a==null)a=0
if(b<1||a<1)throw A.h(A.l("Invalid EXR tile size"))
A.as(b,a,b6,!1)
s=b0.r
s===$&&A.c()
b0.id=b0.iA(s[0],s[2],s[1],s[3])
s=b0.r
b0.k1=b0.iB(s[0],s[2],s[1],s[3])
if(b0.fr!==2)b0.k1=1
s=b0.id
s.toString
r=b0.r
b0.fy=b0.eO(s,r[0],r[2],b0.dx,b0.fx)
r=b0.k1
r.toString
s=b0.r
b0.go=b0.eO(r,s[1],s[3],b0.dy,b0.fx)
s=b0.iz()
b0.k2=s
r=b0.dx
r.toString
r=s*r
b0.k3=r
b0.CW=A.p8(b0.ax,b0,r,b0.dy)
s=b0.k1
s.toString
r=b0.id
q=b0.fy
p=b0.go
a0=0
a1=0
for(;a1<s;++a1){r.toString
a2=0
for(;a2<r;++a2){if(!(a2<q.length))return A.a(q,a2)
k=q[a2]
if(!(a1<p.length))return A.a(p,a1)
a0+=k*p[a1]}}if(a0*8>b5.c-b5.d)throw A.h(A.l("Truncated EXR data"))
c.a=c.b=0
s=b0.id
s.toString
r=b0.k1
r.toString
b0.ay=A.nR(s*r,new A.jG(c,b0),t.mC)}else{s=b0.x
r=b0.ch=new Uint32Array(s+1)
for(q=p.length,k=b0.r,j=b0.w,a3=0;a3<q;++a3){a4=p[a3]
i=a4.d
i===$&&A.c()
h=a4.f
h===$&&A.c()
a5=B.a.a1(i*j,h)
for(i=a4.r,a6=0;a6<s;++a6){k===$&&A.c()
h=k[1]
i===$&&A.c()
if(B.a.V(a6+h,i)===0)r[a6]=r[a6]+a5}}for(a7=0,a6=0;a6<s;++a6)a7=Math.max(a7,r[a6])
s=A.p8(b0.ax,b0,a7,b1)
b0.CW=s
s=b0.cx=s.cJ()
r=b0.ch
q=r.length
p=new Uint32Array(q)
b0.cy=p
for(--q,a8=0,a9=0;a9<=q;++a9){if(B.a.V(a9,s)===0)a8=0
p[a9]=a8
a8+=r[a9]}s=B.a.a1(b0.x+s,s)
b0.ay=A.i([new Uint32Array(s-1)],t.mD)}},
iA(a,b,c,d){var s,r,q,p,o=this
switch(o.fr){case 0:s=1
break
case 1:r=Math.max(b-a+1,d-c+1)
q=o.fx
A.p(r)
s=(q===0?o.d4(r):o.cW(r))+1
break
case 2:p=b-a+1
s=(o.fx===0?o.d4(p):o.cW(p))+1
break
default:throw A.h(A.l("Unknown LevelMode format."))}return s},
iB(a,b,c,d){var s,r,q,p,o=this
switch(o.fr){case 0:s=1
break
case 1:r=Math.max(b-a+1,d-c+1)
q=o.fx
A.p(r)
s=(q===0?o.d4(r):o.cW(r))+1
break
case 2:p=d-c+1
s=(o.fx===0?o.d4(p):o.cW(p))+1
break
default:throw A.h(A.l("Unknown LevelMode format."))}return s},
d4(a){var s
for(s=0;a>1;){++s
a=B.a.j(a,1)}return s},
cW(a){var s,r
for(s=0,r=0;a>1;){if((a&1)!==0)r=1;++s
a=B.a.j(a,1)}return s+r},
iz(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0,p=0;p<r;++p){o=s[p].d
o===$&&A.c()
q+=o}return q},
eO(a,b,c,d,e){var s,r,q,p,o,n,m=J.ay(a,t.p)
for(s=e===1,r=c-b+1,q=0;q<a;++q){p=B.a.P(1,q)
o=B.a.a1(r,p)
if(s&&o*p<r)++o
n=Math.max(o,1)
d.toString
m[q]=B.a.a1(n+d-1,d)}return m}}
A.jG.prototype={
$1(a){var s,r,q,p,o=this.b,n=o.fy,m=this.a,l=m.b
if(!(l<n.length))return A.a(n,l)
n=n[l]
s=o.go
r=m.a
if(!(r<s.length))return A.a(s,r)
s=s[r]
q=new Uint32Array(n*s)
p=l+1
m.b=p
if(p===o.id){m.b=0
m.a=r+1}return q},
$S:59}
A.hN.prototype={
lV(a){var s,r,q,p,o,n=this
if(n.db)for(s=0;s<n.ay.length;++s){r=0
for(;;){q=n.ay
if(!(s<q.length))return A.a(q,s)
q=q[s]
if(!(r<q.length))break
p=a.el()
q.$flags&2&&A.b(q)
q[r]=p;++r}}else{q=n.ay
if(0>=q.length)return A.a(q,0)
o=q[0].length
for(s=0;s<o;++s){q=n.ay
if(0>=q.length)return A.a(q,0)
q=q[0]
p=a.el()
q.$flags&2&&A.b(q)
if(!(s<q.length))return A.a(q,s)
q[s]=p}}}}
A.hO.prototype={
ia(a,b,c){var s,r,q,p=this,o=a.c.length,n=J.ay(o,t.nA)
for(s=0;s<o;++s)n[s]=new A.fT()
p.y=t.a3.a(n)
r=p.w
r.toString
q=B.a.K(r*p.x,2)
p.z=new Uint16Array(q)},
cJ(){return this.x},
bo(a6,a7,a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this
if(a9==null)a9=a5.c.w
if(b0==null)b0=a5.c.cx
s=a7+a9-1
r=a8+b0-1
q=a5.c
p=q.w
if(s>p)s=p-1
p=q.x
if(r>p)r=p-1
a5.a=s-a7+1
a5.b=r-a8+1
o=q.c
n=o.length
for(m=0,l=0;l<n;++l){k=o[l]
q=a5.y
q===$&&A.c()
if(!(l<q.length))return A.a(q,l)
j=q[l]
j.b=j.a=m
q=k.f
q===$&&A.c()
i=B.a.a1(a7,q)
h=B.a.a1(s,q)
q=i*q<a7?0:1
q=h-i+q
j.c=q
p=k.r
p===$&&A.c()
i=B.a.a1(a8,p)
h=B.a.a1(r,p)
g=i*p<a8?0:1
g=h-i+g
j.d=g
j.e=p
p=k.d
p===$&&A.c()
p=p/2|0
j.f=p
m+=q*g*p}f=a6.m()
e=a6.m()
if(e>=8192)throw A.h(A.l("Error in header for PIZ-compressed data (invalid bitmap size)."))
d=new Uint8Array(8192)
if(f<=e){c=a6.aa(e-f+1)
b=c.c-c.d
for(a=f,l=0;l<b;++l,a=a0){a0=a+1
q=J.d(c.a,c.d+l)
if(!(a<8192))return A.a(d,a)
d[a]=q}}a1=new Uint16Array(65536)
a2=a5.kO(d,a1)
A.rY(a6,a6.l(),a5.z,m)
for(l=0;l<n;++l){q=a5.y
q===$&&A.c()
if(!(l<q.length))return A.a(q,l)
j=q[l]
a=0
for(;;){q=j.f
q===$&&A.c()
if(!(a<q))break
p=a5.z
p.toString
g=j.a
g===$&&A.c()
a3=j.c
a3===$&&A.c()
a4=j.d
a4===$&&A.c()
A.t0(p,g+a,a3,q,a4,a3*q,a2);++a}}q=a5.z
q.toString
a5.ip(a1,q,m)
q=a5.r
if(q==null){q=a5.w
q.toString
q=a5.r=A.bf(!1,q*a5.x+73728)}q.a=0
for(;a8<=r;++a8)for(l=0;l<n;++l){q=a5.y
q===$&&A.c()
if(!(l<q.length))return A.a(q,l)
j=q[l]
q=j.e
q===$&&A.c()
if(B.a.V(a8,q)!==0)continue
q=j.c
q===$&&A.c()
p=j.f
p===$&&A.c()
a7=q*p
for(;a7>0;--a7){q=a5.r
q.toString
p=a5.z
p.toString
g=j.b
g===$&&A.c()
j.b=g+1
if(!(g>=0&&g<p.length))return A.a(p,g)
q.dC(p[g])}}q=a5.r
return J.Q(B.d.gt(q.c),0,q.a)},
cn(a,b,c){return this.bo(a,b,c,null,null)},
ip(a,b,c){var s,r,q,p=t.L
p.a(a)
p.a(b)
for(p=b.length,s=b.$flags|0,r=0;r<c;++r){if(!(r<p))return A.a(b,r)
q=b[r]
if(!(q>=0&&q<65536))return A.a(a,q)
q=a[q]
s&2&&A.b(b)
b[r]=q}},
kO(a,b){var s,r,q,p,o,n
for(s=b.$flags|0,r=0,q=0;q<65536;++q){if(q!==0){p=q>>>3
if(!(p<8192))return A.a(a,p)
p=(a[p]&1<<(q&7))>>>0!==0}else p=!0
if(p){o=r+1
s&2&&A.b(b)
if(!(r<65536))return A.a(b,r)
b[r]=q
r=o}}for(o=r;o<65536;o=n){n=o+1
s&2&&A.b(b)
if(!(o<65536))return A.a(b,o)
b[o]=0}return r-1}}
A.fT.prototype={}
A.hP.prototype={
cJ(){return this.w},
bo(a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a4.Z(),a3=a1.r
a3.toString
a3=a1.w*a3
s=A.nb(a2,a3)
a2=a1.x;(a2==null?a1.x=A.bf(!1,a3):a2).a=0
r=A.i([0,0,0,0],t.t)
q=new Uint32Array(1)
p=J.Q(B.n.gt(q),0,null)
if(a7==null)a7=a1.c.w
if(a8==null)a8=a1.c.cx
o=a5+a7-1
n=a6+a8-1
a2=a1.c
a3=a2.w
if(o>a3)o=a3-1
a3=a2.x
if(n>a3)n=a3-1
a1.a=o-a5+1
a1.b=n-a6+1
a2=a2.c
m=a2.length
for(a3=p.length,l=s.length,k=a6,j=0;k<=n;++k)for(i=0;i<m;++i){if(!(i<a2.length))return A.a(a2,i)
h=a2[i]
g=h.r
g===$&&A.c()
if(B.a.V(a6,g)!==0)continue
g=h.f
g===$&&A.c()
f=B.a.a1(a5,g)
e=B.a.a1(o,g)
g=f*g<a5?0:1
d=e-f+g
if(0>=1)return A.a(q,0)
q[0]=0
g=h.c
g===$&&A.c()
switch(g.a){case 0:B.c.i(r,0,j)
B.c.i(r,1,r[0]+d)
B.c.i(r,2,r[1]+d)
j=r[2]+d
for(c=0;c<d;++c){g=r[0]
B.c.i(r,0,g+1)
if(!(g>=0&&g<l))return A.a(s,g)
g=s[g]
b=r[1]
B.c.i(r,1,b+1)
if(!(b>=0&&b<l))return A.a(s,b)
b=s[b]
a=r[2]
B.c.i(r,2,a+1)
if(!(a>=0&&a<l))return A.a(s,a)
a=s[a]
q[0]=q[0]+((g<<24|b<<16|a<<8)>>>0)
for(a0=0;a0<4;++a0){g=a1.x
g.toString
if(!(a0<a3))return A.a(p,a0)
g.a_(p[a0])}}break
case 1:B.c.i(r,0,j)
B.c.i(r,1,r[0]+d)
j=r[1]+d
for(c=0;c<d;++c){g=r[0]
B.c.i(r,0,g+1)
if(!(g>=0&&g<l))return A.a(s,g)
g=s[g]
b=r[1]
B.c.i(r,1,b+1)
if(!(b>=0&&b<l))return A.a(s,b)
b=s[b]
q[0]=q[0]+((g<<8|b)>>>0)
for(a0=0;a0<2;++a0){g=a1.x
g.toString
if(!(a0<a3))return A.a(p,a0)
g.a_(p[a0])}}break
case 2:B.c.i(r,0,j)
B.c.i(r,1,r[0]+d)
B.c.i(r,2,r[1]+d)
j=r[2]+d
for(c=0;c<d;++c){g=r[0]
B.c.i(r,0,g+1)
if(!(g>=0&&g<l))return A.a(s,g)
g=s[g]
b=r[1]
B.c.i(r,1,b+1)
if(!(b>=0&&b<l))return A.a(s,b)
b=s[b]
a=r[2]
B.c.i(r,2,a+1)
if(!(a>=0&&a<l))return A.a(s,a)
a=s[a]
q[0]=q[0]+((g<<24|b<<16|a<<8)>>>0)
for(a0=0;a0<4;++a0){g=a1.x
g.toString
if(!(a0<a3))return A.a(p,a0)
g.a_(p[a0])}}break}}a2=a1.x
return J.Q(B.d.gt(a2.c),0,a2.a)},
cn(a,b,c){return this.bo(a,b,c,null,null)}}
A.hQ.prototype={
cJ(){return 1},
bo(a0,a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=a0.c,a=A.bf(!1,(b-a0.d)*2)
if(a3==null)a3=c.c.w
if(a4==null)a4=c.c.cx
s=a1+a3-1
r=a2+a4-1
q=c.c
p=q.w
if(s>p)s=p-1
q=q.x
if(r>q)r=q-1
c.a=s-a1+1
c.b=r-a2+1
while(q=a0.d,q<b){p=a0.a
a0.d=q+1
q=J.d(p,q)
p=$.au()
p.$flags&2&&A.b(p)
p[0]=q
q=$.aH()
if(0>=q.length)return A.a(q,0)
o=q[0]
if(o<0){n=-o
for(;m=n-1,n>0;n=m)a.a_(J.d(a0.a,a0.d++))}else for(n=o;m=n-1,n>=0;n=m)a.a_(J.d(a0.a,a0.d++))}l=J.Q(B.d.gt(a.c),0,a.a)
k=l.length
for(b=l.$flags|0,j=1;j<k;++j){q=l[j-1]
p=l[j]
b&2&&A.b(l)
l[j]=q+p-128}b=c.r
if(b==null||b.length!==k)b=c.r=new Uint8Array(k)
q=B.a.K(k+1,2)
for(i=0,h=0;;q=d,i=f){if(h<k){g=h+1
f=i+1
if(!(i<k))return A.a(l,i)
p=l[i]
b.$flags&2&&A.b(b)
e=b.length
if(!(h<e))return A.a(b,h)
b[h]=p}else break
if(g<k){h=g+1
d=q+1
if(!(q<k))return A.a(l,q)
q=l[q]
if(!(g<e))return A.a(b,g)
b[g]=q}else break}return b},
cn(a,b,c){return this.bo(a,b,c,null,null)},
C(a){return A.y(this.w)}}
A.eY.prototype={
cJ(){return this.x},
bo(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=a.Z(),e=g.w
if(e==null)e=0
s=A.nb(f,e*g.x)
if(d==null)d=g.c.w
if(a0==null)a0=g.c.cx
r=b+d-1
q=c+a0-1
f=g.c
e=f.w
if(r>e)r=e-1
f=f.x
if(q>f)q=f-1
g.a=r-b+1
g.b=q-c+1
p=s.length
for(f=s.$flags|0,o=1;o<p;++o){e=s[o-1]
n=s[o]
f&2&&A.b(s)
s[o]=e+n-128}f=g.y
if(f==null||f.length!==p)f=g.y=new Uint8Array(p)
e=B.a.K(p+1,2)
for(m=0,l=0;;e=h,m=j){if(l<p){k=l+1
j=m+1
if(!(m<p))return A.a(s,m)
n=s[m]
f.$flags&2&&A.b(f)
i=f.length
if(!(l<i))return A.a(f,l)
f[l]=n}else break
if(k<p){l=k+1
h=e+1
if(!(e<p))return A.a(s,e)
e=s[e]
if(!(k<i))return A.a(f,k)
f[k]=e}else break}return f},
cn(a,b,c){return this.bo(a,b,c,null,null)},
C(a){return A.y(this.w)}}
A.jC.prototype={
aq(a){return A.M(new A.jF(this,a),t._)},
ai(a){return A.M(new A.jD(this,a),t.H)},
jo(a){var s=this.a
if(s==null)return null
s=s.c
if(!(a<s.length))return A.a(s,a)
return s[a].b},
aL(a){return A.M(new A.jE(this,a,null),t.H)},
jn(a,b){if(this.aq(a)==null)return null
return this.ai(0)}}
A.jF.prototype={
$0(){var s=this.a,r=new A.hw(A.i([],t.lv))
r.hX(this.b,s.b)
return s.a=r},
$S:5}
A.jD.prototype={
$0(){return this.a.jo(this.b)},
$S:1}
A.jE.prototype={
$0(){return this.a.jn(this.b,this.c)},
$S:1}
A.eI.prototype={
lA(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(d===0&&e.c!=null){s=e.c
s.toString
return s}for(s=e.b,r=e.d,q=-1,p=-1,o=0;o<s;++o){n=r.aX(o)
m=r.aW(o)
l=r.aU(o)
k=r.aT(o)
if(n===a&&m===b&&l===c&&k===d)return o
j=a-n
i=b-m
h=c-l
g=d-k
f=j*j+i*i+h*h+g*g
if(p===-1){p=o
q=f}else if(f<q){p=o
q=f}}return p},
er(){var s,r,q,p,o,n,m,l=this
if(l.c==null)return l.d
s=l.d
r=s.a
q=new A.b_(new Uint8Array(r*4),r,4)
for(p=0;p<r;++p){o=s.aX(p)
n=s.aW(p)
m=s.aU(p)
q.cT(p,o,n,m,p===l.c?0:255)}return q}}
A.eJ.prototype={
hZ(a){var s,r,q,p,o,n,m=this
m.a=a.m()
m.b=a.m()
m.c=a.m()
m.d=a.m()
s=a.G()
m.e=(s&64)!==0
if((s&128)!==0){m.f=A.pb(B.a.P(1,(s&7)+1))
for(r=0;q=m.f,r<q.b;++r){p=J.d(a.a,a.d++)
o=J.d(a.a,a.d++)
n=J.d(a.a,a.d++)
q.d.b9(r,p,o,n)}}m.y=a.d-a.b}}
A.hR.prototype={}
A.c0.prototype={$iH:1,
gR(){return this.a},
gN(){return this.b}}
A.jM.prototype={
aJ(a){var s,r
this.r=A.v(a,!1,null,0)
this.a=new A.c0(A.i([],t.b))
try{s=this.fe()
return s}catch(r){return!1}},
aq(a){return A.M(new A.jP(this,a),t.bT)},
jE(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.r=A.v(a,!1,null,0)
i.a=new A.c0(A.i([],t.b))
if(!i.fe())return null
p=i.a
A.as(p.a,p.b,i.b,!0)
try{while(p=i.r,o=p.d,o<p.c){n=p.a
p.d=o+1
s=J.d(n,o)
switch(s){case 44:r=i.fF()
if(r==null){p=i.a
return p}p=r
p.r=i.f
p.w=i.d
if(i.c!==0){if(r.f==null&&i.a.e!=null){p=i.a.e
o=p.a
n=p.b
m=p.c
p=p.d
r.f=new A.eI(o,n,m,new A.b_(new Uint8Array(A.q(p.c)),p.a,p.b))}if(r.f!=null)r.f.c=i.e}B.c.B(i.a.r,r)
break
case 33:p=i.r
q=J.d(p.a,p.d++)
if(J.a0(q,255)){p=i.r
if(p.al(J.d(p.a,p.d++))==="NETSCAPE2.0"){l=J.d(p.a,p.d++)
k=J.d(p.a,p.d++)
if(l===3&&k===1)i.w=p.m()}else i.de()}else if(J.a0(q,249)){p=i.r
p.toString
i.kv(p)}else i.de()
break
case 59:p=i.a
return p
default:break}}}catch(j){}return i.a},
kv(a){var s,r,q,p=this
a.G()
s=a.G()
p.f=a.m()
p.e=a.G()
a.G()
p.d=B.a.j(s,2)&7
p.c=s&1
r=a.cU(1,0)
if(J.d(r.a,r.d)===44){++a.d
q=p.fF()
if(q==null)return
q.r=p.f
q.w=p.d
r=p.c!==0
q.x=r?p.e:-1
if(r){r=q.f
if(r==null&&p.a.e!=null){r=p.a.e
r.toString
r=q.f=A.t7(r)}if(r!=null)r.c=p.e}B.c.B(p.a.r,q)}},
ai(a){return A.M(new A.jN(this,a),t.H)},
jD(a){var s,r,q,p=this,o=p.r
if(o==null||p.a==null)return null
s=p.a.r
r=s.length
if(a>=r)return null
q=s[a]
s=q.y
s===$&&A.c()
o.d=s
return p.j0(q)},
aL(a){return A.M(new A.jO(this,a,null),t.H)},
jC(a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null
if(a4.aq(a6)==null)return a5
s=a4.a
r=s.r.length
if(r===1)return a4.ai(0)
new A.bJ(a4.b).c2(0,s.a*r,s.b)
for(s=t.p,q=a5,p=q,o=0;r=a4.a.r,o<r.length;++o){a7=r[o]
n=a4.ai(o)
if(n==null)return a5
n.y=a7.r*10
if(p==null||q==null){n.r=a4.w
q=n
p=q
continue}r=n.a
m=r==null
l=m?a5:r.a
if(l==null)l=0
k=q.a
j=k==null
i=j?a5:k.a
h=!1
if(l===(i==null?0:i)){r=m?a5:r.b
if(r==null)r=0
m=j?a5:k.b
if(r===(m==null?0:m)){r=a7.a
r===$&&A.c()
if(r===0){r=a7.b
r===$&&A.c()
r=r===0&&a7.w===2}else r=h}else r=h}else r=h
if(r){p.aQ(n)
q=n
continue}g=a7.f
if(!(g!=null)){r=a4.a.e
r.toString
g=r}r=j?a5:k.a
if(r==null)r=0
m=j?a5:k.b
if(m==null)m=0
f=A.W(a5,a5,B.f,0,B.i,m,a5,0,1,g.er(),B.f,r,!1)
r=a7.w
if(r===2){r=f.a
e=r==null?a5:J.D(r.gt(r))
if(e==null){r=f.a
r=r==null?a5:r.gt(r)
if(r==null)r=B.d.gt(new Uint8Array(0))
e=J.D(r)}r=a7.x
m=e.length
if(r!==-1)B.d.O(e,0,m,r)
else{r=a4.a.c.a
if(!B.d.gW(r)){if(0>=r.length)return A.a(r,0)
r=r[0]}else r=0
B.d.O(e,0,m,r)}}else if(r!==3)if(a7.f!=null){r=q.a
d=r==null?a5:r.gU()
c=A.F(s,s)
for(r=d.a,b=0;b<r;++b)c.i(0,b,g.lA(d.aX(b),d.aW(b),d.aU(b),d.aT(b)))
r=f.a
a=r==null?a5:J.D(r.gt(r))
if(a==null){r=f.a
r=r==null?a5:r.gt(r)
if(r==null)r=B.d.gt(new Uint8Array(0))
a=J.D(r)}r=q.a
a0=r==null?a5:J.D(r.gt(r))
if(a0==null){r=q.a
r=r==null?a5:r.gt(r)
if(r==null)r=B.d.gt(new Uint8Array(0))
a0=J.D(r)}for(a1=a.length,r=a0.length,m=a.$flags|0,a2=0;a2<a1;++a2){if(!(a2<r))return A.a(a0,a2)
a3=c.k(0,a0[a2])
if(a3!=null&&a3!==-1){m&2&&A.b(a)
a[a2]=a3}}}f.y=n.y
r=a7.a
r===$&&A.c()
m=a7.b
m===$&&A.c()
a4.iD(n,f,r,m)
p.aQ(f)
q=f}return p},
fF(){var s,r=this.r
if(r.d>=r.c)return null
s=new A.hR()
s.hZ(r);++this.r.d
this.de()
return s},
j0(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
if(f.x==null){f.x=new Uint8Array(256)
f.y=new Uint8Array(4095)
f.z=new Uint8Array(4096)
f.Q=new Uint32Array(4096)}s=f.as=f.r.G()
r=B.a.Y(1,s)
f.fr=r;++r
f.dy=r
f.dx=r+1;++s
f.db=s
f.cy=B.a.Y(1,s)
f.ch=0
f.cx=4098
f.ax=f.ay=0
s=f.x
s.toString
s.$flags&2&&A.b(s)
s[0]=0
s=f.Q
s.toString
B.n.O(s,0,4096,4098)
s=a.c
s===$&&A.c()
r=a.d
r===$&&A.c()
q=a.a
q===$&&A.c()
p=f.a
if(q+s<=p.a){q=a.b
q===$&&A.c()
q=q+r>p.b}else q=!0
if(q)return e
o=a.f
if(!(o!=null)){q=p.e
q.toString
o=q}f.at=s*r
n=A.W(e,e,B.f,0,B.i,r,e,0,1,o.er(),B.f,s,!1)
m=new Uint8Array(s)
q=a.e
q===$&&A.c()
if(q){q=a.b
q===$&&A.c()
for(r=q+r,l=0,k=0;l<4;++l)for(j=q+B.dr[l];j<r;j+=B.eL[l],++k){if(!f.f9(m))return n
p=n.a
i=p==null
h=i?e:p.a
g=j*(h==null?0:h)
p=i?e:J.D(p.gt(p))
if(p==null){p=n.a
p=p==null?e:p.gt(p)
if(p==null)p=B.d.gt(new Uint8Array(0))
p=J.D(p)}B.d.ap(p,g,g+s,m)}}else for(j=0;j<r;++j){if(!f.f9(m))return n
q=n.a
p=q==null
i=p?e:q.a
g=j*(i==null?0:i)
q=p?e:J.D(q.gt(q))
if(q==null){q=n.a
q=q==null?e:q.gt(q)
if(q==null)q=B.d.gt(new Uint8Array(0))
q=J.D(q)}B.d.ap(q,g,g+s,m)}return n},
iD(a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a2.a,a=b==null?null:b.gU(),a0=a.a,a1=J.aQ(a0,t.y)
for(s=0;s<a0;++s)a1[s]=a.aT(s)!==0
r=a2.Z()
q=a3.Z()
p=a2.gR()
o=a3.gR()
n=a3.gN()
b=a2.a
m=a1.length
l=r.length
k=q.$flags|0
j=b==null
i=0
for(;;){h=j?null:b.b
if(!(i<(h==null?0:h)))break
g=i+a5
if(g>=n)break
for(f=i*p,h=g*o,e=0;e<p;++e,++f){d=e+a4
if(d>=o)break
if(!(f>=0&&f<l))return A.a(r,f)
s=r[f]
if(s<m&&a1[s]){c=h+d
k&2&&A.b(q)
if(!(c>=0&&c<q.length))return A.a(q,c)
q[c]=s}}++i}},
fe(){var s,r,q,p,o,n=this,m=n.r.al(6)
if(m!=="GIF87a"&&m!=="GIF89a")return!1
s=n.a
s.toString
s.a=n.r.m()
s=n.a
s.toString
s.b=n.r.m()
r=n.r.G()
s=n.a
s.toString
s.c=new A.b9(new Uint8Array(A.q(A.i([n.r.G()],t.t))));++n.r.d
if((r&128)!==0){s=n.a
s.toString
s.e=A.pb(B.a.P(1,(r&7)+1))
for(q=0;q<n.a.e.b;++q){s=n.r
p=J.d(s.a,s.d++)
s=n.r
o=J.d(s.a,s.d++)
s=n.r
r=J.d(s.a,s.d++)
n.a.e.d.b9(q,p,o,r)}}n.a.toString
return!0},
f9(a){var s=this,r=s.at
r.toString
s.at=r-a.length
if(!s.jb(a))return!1
if(s.at===0)s.de()
return!0},
de(){var s,r,q,p=this.r
if(p.d>=p.c)return!0
s=p.G()
for(;;){if(s!==0){p=this.r
p=p.d<p.c}else p=!1
if(!p)break
p=this.r
r=p.d+=s
if(r>=p.c)return!0
q=p.a
p.d=r+1
s=J.d(q,r)}return!0},
jb(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.ch
if(f>4095)return!1
s=a.length
r=0
if(f!==0){q=a.$flags|0
for(;;){if(!(f!==0&&r<s))break
p=r+1
o=g.y
o===$&&A.c()
f=g.ch=f-1
if(!(f>=0))return A.a(o,f)
o=o[f]
q&2&&A.b(a)
if(!(r<s))return A.a(a,r)
a[r]=o
r=p}}for(f=a.$flags|0;r<s;){n=g.CW=g.ja()
if(n==null)return!1
q=g.dy
if(n===q)return!1
o=g.fr
if(n===o){for(o=g.Q,m=0;m<=4095;++m){o.toString
o.$flags&2&&A.b(o)
o[m]=4098}g.dx=q+1
q=g.as+1
g.db=q
g.cy=B.a.Y(1,q)
g.cx=4098}else{if(n<o){p=r+1
f&2&&A.b(a)
if(!(r>=0))return A.a(a,r)
a[r]=n
r=p}else{q=g.Q
q.toString
if(n>>>0!==n||n>=4096)return A.a(q,n)
if(q[n]===4098){l=g.dx-2
if(n===l){n=g.cx
k=g.z
k===$&&A.c()
j=g.y
j===$&&A.c()
i=g.ch++
o=g.e_(q,n,o)
j.$flags&2&&A.b(j)
if(!(i>=0&&i<4095))return A.a(j,i)
j[i]=o
k.$flags&2&&A.b(k)
if(!(l>=0&&l<4096))return A.a(k,l)
k[l]=o}else return!1}m=0
for(;;){h=m+1
if(!(m<=4095&&n>g.fr&&n<=4095))break
q=g.y
q===$&&A.c()
o=g.ch++
l=g.z
l===$&&A.c()
if(!(n>=0&&n<4096))return A.a(l,n)
l=l[n]
q.$flags&2&&A.b(q)
if(!(o>=0&&o<4095))return A.a(q,o)
q[o]=l
n=g.Q[n]
m=h}if(h>=4095||n>4095)return!1
q=g.y
q===$&&A.c()
o=g.ch
l=g.ch=o+1
q.$flags&2&&A.b(q)
if(!(o>=0&&o<4095))return A.a(q,o)
q[o]=n
o=l
for(;;){if(!(o!==0&&r<s))break
p=r+1
o=g.ch=o-1
if(!(o>=0&&o<4095))return A.a(q,o)
l=q[o]
f&2&&A.b(a)
if(!(r>=0&&r<s))return A.a(a,r)
a[r]=l
r=p}}q=g.cx
if(q!==4098){o=g.Q
o.toString
l=g.dx-2
if(!(l>=0&&l<4096))return A.a(o,l)
l=o[l]===4098
o=l}else o=!1
if(o){o=g.Q
o.toString
l=g.dx-2
o.$flags&2&&A.b(o)
if(!(l>=0&&l<4096))return A.a(o,l)
o[l]=q
k=g.CW
j=g.z
i=g.fr
if(k===l){j===$&&A.c()
q=g.e_(o,q,i)
j.$flags&2&&A.b(j)
j[l]=q}else{j===$&&A.c()
k.toString
q=g.e_(o,k,i)
j.$flags&2&&A.b(j)
j[l]=q}}q=g.CW
q.toString
g.cx=q}}return!0},
ja(){var s,r,q,p,o=this
if(o.db>12)return null
while(s=o.ay,r=o.db,s<r){s=o.iv()
s.toString
r=o.ax
q=o.ay
o.ax=(r|B.a.Y(s,q))>>>0
o.ay=q+8}q=o.ax
if(!(r>=0&&r<13))return A.a(B.bx,r)
p=B.bx[r]
o.ax=B.a.a9(q,r)
o.ay=s-r
s=o.dx
if(s<4097){++s
o.dx=s
s=s>o.cy&&r<12}else s=!1
if(s){o.cy=o.cy<<1>>>0
o.db=r+1}return q&p},
e_(a,b,c){var s,r,q=0
for(;;){if(b>c){s=q+1
r=q<=4095
q=s}else r=!1
if(!r)break
if(b>4095)return 4098
a.toString
if(!(b>=0))return A.a(a,b)
b=a[b]}return b},
iv(){var s,r,q=this,p=q.x,o=p[0],n=p.$flags|0
if(o===0){o=q.r.G()
n&2&&A.b(p)
p[0]=o
p=q.x
o=p[0]
if(o===0)return null
B.d.ap(p,1,1+o,q.r.aa(o).Z())
p=q.x
s=p[1]
p.$flags&2&&A.b(p)
p[1]=2
p[0]=p[0]-1}else{r=p[1]
n&2&&A.b(p)
p[1]=r+1
if(!(r<256))return A.a(p,r)
s=p[r]
p[0]=o-1}return s}}
A.jP.prototype={
$0(){return this.a.jE(this.b)},
$S:61}
A.jN.prototype={
$0(){return this.a.jD(this.b)},
$S:1}
A.jO.prototype={
$0(){return this.a.jC(this.b,this.c)},
$S:1}
A.dC.prototype={
a7(){return"IcoType."+this.b}}
A.hF.prototype={$iH:1,
gR(){return 0},
gN(){return 0}}
A.hG.prototype={}
A.hE.prototype={
gN(){return B.a.K(A.aY.prototype.gN.call(this),2)},
gcH(){return!(this.d===40&&this.f===32)&&A.aY.prototype.gcH.call(this)}}
A.jR.prototype={
aJ(a){var s,r=this,q=A.v(a,!1,null,0)
r.a=q
try{r.b=A.pd(q)}catch(s){r.b=null}return r.b!=null},
aq(a){return A.M(new A.jU(this,a),t._)},
aL(a){return A.M(new A.jT(this,a,null),t.H)},
jF(a,b){var s,r,q,p,o,n,m=this,l=null
if(m.aq(a)==null)return l
s=m.b.e.length
if(s===1)return m.ai(0)
r=new A.bJ(m.c)
for(q=l,p=0;p<m.b.e.length;++p){b=m.ai(p)
if(b==null)continue
s=b.a
o=s==null
n=o?l:s.a
if(n==null)n=0
s=o?l:s.b
r.c2(0,n,s==null?0:s)
if(q==null){b.w=B.i
q=b}else q.aQ(b)}return q},
ai(a){return A.M(new A.jS(this,a),t.H)},
jG(b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.a
if(b1!=null){s=a9.b
s=s==null||b2>=s.d}else s=!0
if(s)return b0
s=a9.b.e
if(!(b2<s.length))return A.a(s,b2)
r=s[b2]
s=b1.a
b1=b1.b+r.e
q=r.d
p=J.nE(s,b1,b1+q)
b1=a9.c
o=A.pF(b1)
t.D.a(p)
if(o.aJ(p))return o.hd(p,0)
n=A.bf(!1,14)
n.dC(19778)
n.b_(q)
n.b_(0)
n.b_(0)
s=A.v(p,!1,b0,0)
q=A.oZ(A.v(J.Q(B.d.gt(n.c),0,n.a),!1,b0,0))
m=s.d
l=s.l()
k=s.l()
j=$.S()
j.$flags&2&&A.b(j)
j[0]=k
k=$.ac()
if(0>=k.length)return A.a(k,0)
i=k[0]
j[0]=s.l()
k=k[0]
h=s.m()
g=s.m()
f=s.l()
if(f>=14)A.G(A.l("Unsupported BMP compression type: "+f))
if(!(f<14))return A.a(B.as,f)
f=B.as[f]
s.l()
j[0]=s.l()
j[0]=s.l()
j=s.l()
s.l()
e=new A.hE(q,i,k,l,h,g,f,j,m)
e.eD(s,q)
if(l!==40&&h!==1)return b0
d=j===0&&g<=8?40+4*B.a.P(1,g):40+4*j
q.b=d
n.a-=4
n.b_(d)
c=A.v(p,!1,b0,0)
b=new A.jo(!0,b1)
b.a=c
b.b=e
a=b.ai(0)
if(g>=32)return a
a0=32-B.a.V(i,32)
a1=B.a.K(a0===32?i:i+a0,8)
for(b1=k<0,s=k===0,k=1/k<0,a2=0;a2<B.a.K(A.aY.prototype.gN.call(e),2);++a2){if(!(s?k:b1))a3=a2
else{q=a.a
q=q==null?b0:q.b
a3=(q==null?0:q)-1-a2}a4=c.aE(a1)
c.d=c.d+(a4.c-a4.d)
q=a.a
a5=q==null?b0:q.a0(0,a3,b0)
if(a5==null)a5=new A.J()
for(a6=0;a6<i;){a7=J.d(a4.a,a4.d++)
a8=7
for(;;){if(!(a8>-1&&a6<i))break
if((a7&B.a.Y(1,a8))>>>0!==0)a5.sA(0)
a5.D();++a6;--a8}}}return a}}
A.jU.prototype={
$0(){var s=this.a,r=A.v(this.b,!1,null,0)
s.a=r
return s.b=A.pd(r)},
$S:5}
A.jT.prototype={
$0(){return this.a.jF(this.b,this.c)},
$S:1}
A.jS.prototype={
$0(){return this.a.jG(this.b)},
$S:1}
A.hn.prototype={}
A.c1.prototype={}
A.cr.prototype={}
A.dB.prototype={}
A.ka.prototype={
ib(a){var s,r,q,p,o,n,m,l=this,k=null,j="ifd0",i=l.a,h=i.y
if(h.k(0,j).a.aN(274)){s=h.k(0,j).gcl()
s.toString
r=s}else r=0
q=r>=5&&r<=8
p=q?l.c:l.b
s=A.W(k,k,B.f,0,B.i,q?l.b:l.c,k,0,3,k,B.f,p,!1)
s.e=A.eB(h)
s.gcj().k(0,j).scl(k)
s.c=i.x
l.d!==$&&A.U()
l.d=s
i=s.a
i=J.D(i.gt(i))
l.e!==$&&A.U()
l.e=i
o=s.a.gaD()
n=l.b-1
m=l.c-1
i=l.f
switch(r){case 2:i!==$&&A.U()
l.f=n*3
l.r!==$&&A.U()
l.r=-3
l.w!==$&&A.U()
l.w=o
break
case 3:i!==$&&A.U()
l.f=m*o+n*3
l.r!==$&&A.U()
l.r=-3
l.w!==$&&A.U()
l.w=-o
break
case 4:i!==$&&A.U()
l.f=m*o
l.r!==$&&A.U()
l.r=3
l.w!==$&&A.U()
l.w=-o
break
case 5:i!==$&&A.U()
l.f=0
l.r!==$&&A.U()
l.r=o
l.w!==$&&A.U()
l.w=3
break
case 6:i!==$&&A.U()
l.f=m*3
l.r!==$&&A.U()
l.r=o
l.w!==$&&A.U()
l.w=-3
break
case 7:i!==$&&A.U()
l.f=n*o+m*3
l.r!==$&&A.U()
l.r=-o
l.w!==$&&A.U()
l.w=-3
break
case 8:i!==$&&A.U()
l.f=n*o
l.r!==$&&A.U()
l.r=-o
l.w!==$&&A.U()
l.w=3
break
default:i!==$&&A.U()
l.f=0
l.r!==$&&A.U()
l.r=3
l.w!==$&&A.U()
l.w=o
break}},
hF(d3,d4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=c9.a,d1=d0.ax,d2=d1.length
switch(d2){case 1:if(0>=d2)return A.a(d1,0)
s=d1[0]
r=s.f
q=s.r
d0=c9.f
d0===$&&A.c()
d2=c9.w
d2===$&&A.c()
p=d0+d3*d2
for(d0=c9.b,o=c9.r,n=c9.e,m=s.e,l=m.length,k=d3;k<d4;++k,p+=d2){j=B.a.j(k,q)
if(!(j<l))return A.a(m,j)
i=m[j]
j=i.length
h=p
g=0
while(g<d0){f=B.a.a9(g,r)
if(!(f<j))return A.a(i,f)
e=i[f]
n===$&&A.c()
n.$flags&2&&A.b(n)
f=n.length
if(!(h>=0&&h<f))return A.a(n,h)
n[h]=e
d=h+1
if(!(d<f))return A.a(n,d)
n[d]=e
d=h+2
if(!(d<f))return A.a(n,d)
n[d]=e;++g
o===$&&A.c()
h+=o}}break
case 3:d0=d0.e
c=d0==null||d0.d===1
if(0>=d2)return A.a(d1,0)
s=d1[0]
if(1>=d2)return A.a(d1,1)
b=d1[1]
if(2>=d2)return A.a(d1,2)
a=d1[2]
r=s.f
q=s.r
a0=b.f
a1=b.r
a2=a.f
a3=a.r
a4=$.oQ()
d0=c9.f
d0===$&&A.c()
d2=c9.w
d2===$&&A.c()
p=d0+d3*d2
for(d0=c9.b,o=c9.r,n=c9.e,m=s.e,l=m.length,j=b.e,f=j.length,d=a.e,a5=d.length,k=d3;k<d4;++k,p+=d2){a6=B.a.j(k,q)
if(!(a6<l))return A.a(m,a6)
a6=m[a6]
a6.toString
a7=B.a.j(k,a1)
if(!(a7<f))return A.a(j,a7)
a7=j[a7]
a7.toString
a8=B.a.j(k,a3)
if(!(a8<a5))return A.a(d,a8)
a8=d[a8]
a8.toString
if(c){a9=a6.length
b0=a7.length
b1=a8.length
h=p
g=0
while(g<d0){b2=B.a.a9(g,r)
if(!(b2<a9))return A.a(a6,b2)
e=(a6[b2]<<8>>>0)+65536
b2=B.a.a9(g,a0)
if(!(b2<b0))return A.a(a7,b2)
b3=a7[b2]-128
b2=B.a.a9(g,a2)
if(!(b2<b1))return A.a(a8,b2)
b4=a8[b2]-128
n===$&&A.c()
b2=B.a.j(e+359*b4,8)
if(!(b2<768))return A.a(a4,b2)
b2=a4[b2]
n.$flags&2&&A.b(n)
b5=n.length
if(!(h>=0&&h<b5))return A.a(n,h)
n[h]=b2
b2=h+1
b6=B.a.j(e-88*b3-183*b4,8)
if(!(b6<768))return A.a(a4,b6)
b6=a4[b6]
if(!(b2<b5))return A.a(n,b2)
n[b2]=b6
b6=h+2
b2=B.a.j(e+454*b3,8)
if(!(b2<768))return A.a(a4,b2)
b2=a4[b2]
if(!(b6<b5))return A.a(n,b6)
n[b6]=b2;++g
o===$&&A.c()
h+=o}}else{a9=a6.length
b0=a7.length
b1=a8.length
h=p
g=0
while(g<d0){n===$&&A.c()
b2=B.a.a9(g,r)
if(!(b2<a9))return A.a(a6,b2)
b2=a6[b2]
n.$flags&2&&A.b(n)
b5=n.length
if(!(h>=0&&h<b5))return A.a(n,h)
n[h]=b2
b2=h+1
b6=B.a.a9(g,a0)
if(!(b6<b0))return A.a(a7,b6)
b6=a7[b6]
if(!(b2<b5))return A.a(n,b2)
n[b2]=b6
b6=h+2
b2=B.a.a9(g,a2)
if(!(b2<b1))return A.a(a8,b2)
b2=a8[b2]
if(!(b6<b5))return A.a(n,b6)
n[b6]=b2;++g
o===$&&A.c()
h+=o}}}break
case 4:d0=d0.e
if(d0==null)throw A.h(A.l("Unsupported color mode (4 components)"))
d0=d0.d===0
if(0>=d2)return A.a(d1,0)
s=d1[0]
if(1>=d2)return A.a(d1,1)
b=d1[1]
if(2>=d2)return A.a(d1,2)
a=d1[2]
if(3>=d2)return A.a(d1,3)
b7=d1[3]
r=s.f
q=s.r
a0=b.f
a1=b.r
a2=a.f
a3=a.r
b8=b7.f
b9=b7.r
a4=$.oQ()
d2=c9.f
d2===$&&A.c()
o=c9.w
o===$&&A.c()
p=d2+d3*o
for(d2=c9.b,n=c9.r,m=c9.e,l=s.e,j=l.length,f=b.e,d=f.length,a5=a.e,a6=a5.length,a7=b7.e,a8=a7.length,k=d3;k<d4;++k,p+=o){a9=B.a.j(k,q)
if(!(a9<j))return A.a(l,a9)
a9=l[a9]
a9.toString
b0=B.a.j(k,a1)
if(!(b0<d))return A.a(f,b0)
b0=f[b0]
b0.toString
b1=B.a.j(k,a3)
if(!(b1<a6))return A.a(a5,b1)
b1=a5[b1]
b1.toString
b2=B.a.j(k,b9)
if(!(b2<a8))return A.a(a7,b2)
c0=a7[b2]
b2=a9.length
b5=b0.length
b6=b1.length
c1=c0.length
h=p
g=0
while(g<d2){c2=B.a.a9(g,b8)
if(!(c2<c1))return A.a(c0,c2)
c3=c0[c2]
if(d0){c2=B.a.a9(g,r)
if(!(c2<b2))return A.a(a9,c2)
c4=a9[c2]
c2=B.a.a9(g,a0)
if(!(c2<b5))return A.a(b0,c2)
c5=b0[c2]
c2=B.a.a9(g,a2)
if(!(c2<b6))return A.a(b1,c2)
e=b1[c2]}else{c2=B.a.a9(g,r)
if(!(c2<b2))return A.a(a9,c2)
c6=(a9[c2]<<8>>>0)+65536
c2=B.a.a9(g,a0)
if(!(c2<b5))return A.a(b0,c2)
b3=b0[c2]-128
c2=B.a.a9(g,a2)
if(!(c2<b6))return A.a(b1,c2)
b4=b1[c2]-128
c2=B.a.j(c6+359*b4,8)
if(!(c2<768))return A.a(a4,c2)
c4=255-a4[c2]
c2=B.a.j(c6-88*b3-183*b4,8)
if(!(c2<768))return A.a(a4,c2)
c5=255-a4[c2]
c2=B.a.j(c6+454*b3,8)
if(!(c2<768))return A.a(a4,c2)
e=255-a4[c2]}m===$&&A.c()
c2=B.a.j(c4*c3,8)
m.$flags&2&&A.b(m)
c7=m.length
if(!(h>=0&&h<c7))return A.a(m,h)
m[h]=c2
c2=h+1
c8=B.a.j(c5*c3,8)
if(!(c2<c7))return A.a(m,c2)
m[c2]=c8
c8=h+2
c2=B.a.j(e*c3,8)
if(!(c8<c7))return A.a(m,c8)
m[c8]=c2;++g
n===$&&A.c()
h+=n}}break
default:throw A.h(A.l("Unsupported color mode"))}}}
A.k5.prototype={}
A.c4.prototype={}
A.i0.prototype={
md(a){var s,r,q,p,o,n=this,m=A.v(t.L.a(a),!0,null,0)
n.c=m
s=m.cU(2,0)
if(J.d(s.a,s.d)!==255||J.d(s.a,s.d+1)!==216)return!1
if(n.bx()!==216)return!1
r=n.bx()
q=!1
p=!1
for(;;){if(r!==217){m=n.c
m=m.d<m.c}else m=!1
if(!m)break
o=n.c.m()
if(o<2)break
m=n.c
m.d=m.d+(o-2)
switch(r){case 192:case 193:case 194:q=!0
break
case 218:if(q)return!0
p=!0
break}r=n.bx()}return q&&p},
lU(a){var s,r,q,p,o,n,m=this
m.c=A.v(t.L.a(a),!0,null,0)
if(m.bx()!==216)return null
s=new A.i2()
r=m.bx()
q=!1
p=!1
for(;;){if(r!==217){o=m.c
o=o.d<o.c}else o=!1
if(!o)break
switch(r){case 192:case 193:case 194:m.fs(r,m.fo(),!1)
q=!0
break
case 218:m.fE()
p=!0
break
default:m.fE()
break}r=m.bx()}o=m.f
if(o!=null){n=o.e
n.toString
s.a=n
o=o.d
o.toString
s.b=o}o=m.f=null
B.c.aR(m.Q)
return q&&p?s:o},
bM(a){var s,r,q,p,o,n,m=this
m.c=A.v(t.L.a(a),!0,null,0)
m.kn()
if(m.Q.length!==1)throw A.h(A.l("Only single frame JPEGs supported"))
s=m.f
s.toString
if(m.cy!=null)return
if(!m.ay){m.ay=!0
s.lS(m.b===8)}for(r=s.z,q=s.y,p=m.ax,o=0;o<r.length;++o){n=q.k(0,r[o])
B.c.B(p,A.p6(n.a,s.f,n.b,s.r,m.ix(s,n)))}},
gdD(){var s,r=this.f.d
r.toString
s=this.b
return B.a.a1(r+s-1,s)},
kn(){var s,r,q,p,o=this
o.ch=0
if(o.bx()!==216)throw A.h(A.l("Start Of Image marker not found."))
s=o.bx()
for(;;){if(s!==217){r=o.c
r===$&&A.c()
r=r.d<r.c}else r=!1
if(!r)break
A:{if(s>=208&&s<=215||s===1){s=o.bx()
break A}q=o.fo()
switch(s){case 224:case 225:case 226:case 227:case 228:case 229:case 230:case 231:case 232:case 233:case 234:case 235:case 236:case 237:case 238:case 239:case 254:o.ko(s,q)
break
case 219:o.kr(q)
break
case 192:case 193:case 194:o.kt(s,q)
break
case 195:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 205:case 206:case 207:throw A.h(A.l("Unhandled frame type "+B.a.dA(s,16)))
case 196:o.kq(q)
break
case 221:o.r=q.m()
break
case 218:o.kH(q)
break
case 255:r=o.c
r===$&&A.c()
if(J.d(r.a,r.d)!==255)--o.c.d
break
default:r=o.c
r===$&&A.c()
p=!1
if(J.d(r.a,r.d+-3)===255){r=o.c
if(J.d(r.a,r.d+-2)>=192){r=o.c
r=J.d(r.a,r.d+-2)<=254}else r=p}else r=p
if(r){o.c.d-=3
break}if(s!==0)throw A.h(A.l("Unknown JPEG marker "+B.a.dA(s,16)))
break}s=o.bx()}}},
fE(){var s,r=this.c
r===$&&A.c()
s=r.m()
if(s<2)throw A.h(A.l("Invalid Block"))
r=this.c
r.d=r.d+(s-2)},
fo(){var s,r=this.c
r===$&&A.c()
s=r.m()
if(s<2)throw A.h(A.l("Invalid Block"))
return this.c.aa(s-2)},
bx(){var s,r=this,q=r.c
q===$&&A.c()
if(q.d>=q.c)return 0
do{do{s=r.c.G()
if(s!==255){q=r.c
q=q.d<q.c}else q=!1}while(q)
q=r.c
if(q.d>=q.c)return s
do{s=r.c.G()
if(s===255){q=r.c
q=q.d<q.c}else q=!1}while(q)
if(s===0){q=r.c
q=q.d<q.c}else q=!1}while(q)
return s},
kz(a){var s
for(s=0;s<12;++s)if(J.d(a.a,a.d++)!==B.jv[s])return
this.x=new A.bF("ICC_PROFILE",B.ae,a.Z())},
ks(a){if(a.l()!==1165519206)return
if(a.m()!==0)return
this.y.bM(a)},
ko(a,b){var s,r,q,p,o,n=this,m=b
if(n.cy!=null)s=a===225||a===238
else s=!1
if(s)n.cx=!0
if(a===224){s=m
r=!1
if(J.d(s.a,s.d)===74){s=m
if(J.d(s.a,s.d+1)===70){s=m
if(J.d(s.a,s.d+2)===73){s=m
if(J.d(s.a,s.d+3)===70){s=m
s=J.d(s.a,s.d+4)===0}else s=r}else s=r}else s=r}else s=r
if(s){s=new A.kb()
r=m
J.d(r.a,r.d+5)
r=m
J.d(r.a,r.d+6)
r=m
J.d(r.a,r.d+7)
r=m
J.d(r.a,r.d+8)
r=m
J.d(r.a,r.d+9)
r=m
J.d(r.a,r.d+10)
r=m
J.d(r.a,r.d+11)
r=m
r=J.d(r.a,r.d+12)
s.f=r
q=m
q=J.d(q.a,q.d+13)
s.r=q
n.d=s
m.cU(14+3*r*q,14)}}else if(a===225)n.ks(m)
else if(a===226)n.kz(m)
else if(a===238){s=m
r=!1
if(J.d(s.a,s.d)===65){s=m
if(J.d(s.a,s.d+1)===100){s=m
if(J.d(s.a,s.d+2)===111){s=m
if(J.d(s.a,s.d+3)===98){s=m
if(J.d(s.a,s.d+4)===101){s=m
s=J.d(s.a,s.d+5)===0}else s=r}else s=r}else s=r}else s=r}else s=r
if(s){p=new A.k5()
s=m
J.d(s.a,s.d+6)
s=m
J.d(s.a,s.d+7)
s=m
J.d(s.a,s.d+8)
s=m
J.d(s.a,s.d+9)
s=m
J.d(s.a,s.d+10)
s=m
p.d=J.d(s.a,s.d+11)
n.e=p}}else if(a===254)try{m.lZ()}catch(o){}},
kr(a){var s,r,q,p,o,n,m,l,k
for(s=a.c,r=this.z;q=a.d,p=q<s,p;){p=a.a
a.d=q+1
o=J.d(p,q)
n=B.a.j(o,4)
o&=15
if(o>=4)throw A.h(A.l("Invalid number of quantization tables"))
if(r[o]==null)B.c.i(r,o,new Int16Array(64))
m=r[o]
for(q=n!==0,l=0;l<64;++l){k=q?a.m():J.d(a.a,a.d++)
m.toString
p=$.j6()
if(!(l<p.length))return A.a(p,l)
p=p[l]
m.$flags&2&&A.b(m)
if(!(p<64))return A.a(m,p)
m[p]=k}}if(p)throw A.h(A.l("Bad length for DQT block"))},
fs(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this
if(i.f!=null)throw A.h(A.l("Duplicate JPG frame data found."))
s=A.F(t.p,t.fg)
r=A.i([],t.t)
q=new A.i1(s,r)
q.b=a===194
q.c=b.G()
q.d=b.m()
q.e=b.m()
p=b.G()
for(o=i.z,n=0;n<p;++n){m=J.d(b.a,b.d++)
l=J.d(b.a,b.d++)
k=B.a.j(l,4)
j=J.d(b.a,b.d++)
B.c.B(r,m)
s.i(0,m,new A.c4(k&15,l&15,o,j))}if(c)i.l1(q)
i.f=q
B.c.B(i.Q,q)},
kt(a,b){return this.fs(a,b,!0)},
l1(a){var s,r,q,p=a.e
p.toString
s=a.d
s.toString
if(p===0||s===0)throw A.h(A.l("Invalid JPEG dimensions "+p+"x"+s))
r=this.a
if(r>0&&p*s>r)throw A.h(A.l("JPEG dimensions "+p+"x"+s+" exceed the maximum of "+r+" pixels"))
p=a.y
s=p.a
if(s===0||s>4)throw A.h(A.l("Unsupported number of JPEG components: "+s))
for(p=new A.be(p,p.r,p.e,A.n(p).n("be<2>"));p.D();){s=p.d
r=s.a
q=!0
if(r>=1)if(r<=4){s=s.b
s=s<1||s>4}else s=q
else s=q
if(s)throw A.h(A.l("Invalid JPEG sampling factor"))}},
kq(a){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.c,r=this.at,q=this.as;p=a.d,p<s;){o=a.a
a.d=p+1
n=J.d(o,p)
m=new Uint8Array(16)
for(l=0,k=0;k<16;++k){p=J.d(a.a,a.d++)
if(!(k<16))return A.a(m,k)
m[k]=p
l+=m[k]}j=a.aE(l)
a.d=a.d+(j.c-j.d)
i=j.Z()
if((n&16)!==0){n-=16
h=q}else h=r
if(h.length<=n)B.c.sp(h,n+1)
B.c.i(h,n,this.jP(m,i))}},
kH(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this
if(++a0.ch>1000)throw A.h(A.l("Too many JPEG scans"))
s=a1.G()
if(s<1||s>4)throw A.h(A.l("Invalid SOS block"))
r=a0.f
r.toString
q=A.i([],t.ns)
for(p=a0.as,o=a0.at,n=r.y,m=t.hQ,l=0;l<s;++l){k=J.d(a1.a,a1.d++)
j=J.d(a1.a,a1.d++)
if(!n.aN(k))throw A.h(A.l("Invalid Component in SOS block"))
i=n.k(0,k)
i.toString
h=B.a.j(j,4)&15
g=j&15
f=o.length
if(h<f){if(!(h<f))return A.a(o,h)
f=o[h]
f.toString
i.Q=m.a(f)
i.at=A.qK(f)}f=p.length
if(g<f){if(!(g<f))return A.a(p,g)
f=p[g]
f.toString
i.as=m.a(f)
i.ax=A.qK(f)}B.c.B(q,i)}e=a1.G()
d=a1.G()
c=a1.G()
p=B.a.j(c,4)
o=r.b
o.toString
if(o&&a0.b===8&&e>0)return
if(a0.cy!=null)throw A.h(B.cO)
b=!1
if(!a0.ay){a0.ay=!0
o=r.z
if(0>=o.length)return A.a(o,0)
o=n.k(0,o[0])
o.toString
if(a0.CW){m=r.b
m.toString
if(!m){m=q.length
if(m===n.a)if(m<=1)o=o.a===1&&o.b===1
else o=!0
else o=b
b=o}}r.hr(b,a0.b===8)
if(b)a0.kT(r)}o=a0.c
o===$&&A.c()
n=a0.r
a=new A.i3(o,r,q,n,e,d,p&15,c&15,new Int16Array(64))
p=r.w
p===$&&A.c()
a.f=p
a.r=r.b
if(b)a.slO(a0.giQ())
a.bI()},
jP(a,b){var s,r,q,p,o,n,m,l,k=A.i([],t.kv),j=16
for(;;){if(!(j>0&&a[j-1]===0))break;--j}s=t.er
B.c.B(k,new A.ec(A.ae(2,null,!1,s)))
if(0>=k.length)return A.a(k,0)
r=k[0]
for(q=b.length,p=0,o=0;o<j;){for(n=0;n<a[o];++n){if(0>=k.length)return A.a(k,-1)
r=k.pop()
m=r.b
if(!(p>=0&&p<q))return A.a(b,p)
B.c.i(r.a,m,new A.dB(b[p]))
while(m=r.b,m>0){if(0>=k.length)return A.a(k,-1)
r=k.pop()}r.b=m+1
B.c.B(k,r)
for(;k.length<=o;r=l){m=A.ae(2,null,!1,s)
l=new A.ec(m)
B.c.B(k,l)
B.c.i(r.a,r.b,new A.cr(m))}++p}++o
if(o<j){m=A.ae(2,null,!1,s)
l=new A.ec(m)
B.c.B(k,l)
B.c.i(r.a,r.b,new A.cr(m))
r=l}}if(0>=k.length)return A.a(k,0)
return k[0].a},
ix(a,b){var s,r,q,p,o,n,m,l,k=b.e
k===$&&A.c()
s=b.f
s===$&&A.c()
r=B.a.a1(8,this.b)
q=k*r
p=new Int32Array(64)
o=new Uint8Array(64)
n=A.ae(s*r,null,!1,t.nh)
for(m=0;m<s;++m){for(k=m*r,l=0;l<r;++l)B.c.i(n,k+l,new Uint8Array(q))
this.eM(b,m,n,k,o,p)}b.x=new Int16Array(0)
return n},
eM(a,b,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t.bi.a(a0)
s=B.a.a1(8,this.b)
r=a.x
r===$&&A.c()
q=a.r
q===$&&A.c()
p=a.c
o=a.d
if(!(o>=0&&o<4))return A.a(p,o)
o=p[o]
o.toString
p=s===8
n=s===1
q=b*q
m=a0.length
l=r.length
k=0
for(;;){j=a.e
j===$&&A.c()
if(!(k<j))break
A:{i=q+k
h=i<<6>>>0
if(n){j=a.y?i:h
if(!(j>=0&&j<l))return A.a(r,j)
g=r[j]
if(!(a1<m))return A.a(a0,a1)
j=a0[a1]
j.toString
f=128+B.b.a2((B.b.a2((5793*B.b.a2((5793*(g*o[0])+512)/1024)+8192)/16384)+8)/16)
if(f<0)e=0
else e=f>255?255:f
j.$flags&2&&A.b(j)
if(!(k<j.length))return A.a(j,k)
j[k]=e
break A}A.xd(o,r,h,a2,a3)
d=k*s
if(p)for(j=d+8,c=0;c<8;++c){e=a1+c
if(!(e<m))return A.a(a0,e)
e=a0[e]
if(e!=null)B.d.a6(e,d,j,a2,c<<3>>>0)}else A.tk(a2,s,a0,a1,d)}++k}},
lq(a){var s,r,q,p=this
t.L.a(a)
p.CW=!0
try{p.bM(a)}catch(s){if(A.bo(s) instanceof A.iU)return p.eY(a)
else throw s}r=p.cy
if(r==null)return A.qI(p)
if(p.cx)return p.eY(a)
q=r.d
q===$&&A.c()
q.c=p.x
return q},
eY(a){var s
t.L.a(a)
s=A.k6()
s.a=this.a
s.b=this.b
s.bM(a)
return A.qI(s)},
kT(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=B.a.a1(8,c.b),a=c.db
B.c.aR(a)
for(s=a0.z,r=s.length,q=t.h,p=a0.y,o=c.ax,n=t.nh,m=0;m<s.length;s.length===r||(0,A.P)(s),++m){l=p.k(0,s[m])
k=l.a
j=a0.f
i=l.b
h=a0.r
g=l.f
g===$&&A.c()
B.c.B(o,A.p6(k,j,i,h,A.ae(g*b,null,!1,n)))
f=i*b
e=A.i(new Array(f),q)
for(k=l.e,d=0;d<f;++d){k===$&&A.c()
e[d]=new Uint8Array(k*b)}B.c.B(a,e)}c.cy=A.pv(c)},
iR(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.f
a6.toString
s=B.a.a1(8,a5.b)
for(r=a6.z,q=a5.dx,p=a5.dy,o=a6.y,n=a5.ax,m=a5.db,l=0;l<r.length;++l){k=o.k(0,r[l])
k.toString
if(!(l<n.length))return A.a(n,l)
j=n[l].e
if(!(l<m.length))return A.a(m,l)
i=m[l]
for(h=k.b,g=a7*h,f=0;f<h;++f){e=g+f
d=k.f
d===$&&A.c()
if(e>=d)break
for(d=e*s,c=f*s,b=0;b<s;++b){a=c+b
if(!(a<i.length))return A.a(i,a)
B.c.i(j,d+b,i[a])}a5.eM(k,f,j,d,q,p)}k=k.x
k===$&&A.c()
h=a5.fr
g=k.length
if(h.length<g)h=a5.fr=new Int16Array(g)
B.Q.ap(k,0,g,h)}a0=a6.r*s
a1=a7*a0
a2=Math.min(a1+a0,a5.gdD())
if(a1<a2)a5.cy.hF(a1,a2)
for(l=0;l<r.length;++l){a6=o.k(0,r[l])
a6.toString
if(!(l<n.length))return A.a(n,l)
j=n[l].e
a6=a6.b
a3=a7*a6*s
a6=a3+a6*s
q=j.length
a4=a3
for(;;){if(!(a4<a6&&a4<q))break
B.c.i(j,a4,null);++a4}}}}
A.ec.prototype={}
A.iU.prototype={}
A.i1.prototype={
hr(a,b){var s,r,q,p,o,n,m,l,k,j,i=this
for(s=i.y,r=A.n(s).n("ad<1>"),q=new A.ad(s,s.r,s.e,r);q.D();){p=s.k(0,q.d)
i.f=Math.max(i.f,p.a)
i.r=Math.max(i.r,p.b)}q=i.e
q.toString
i.w=B.b.ab(q/8/i.f)
q=i.d
q.toString
i.x=B.b.ab(q/8/i.r)
for(r=new A.ad(s,s.r,s.e,r);r.D();){q=s.k(0,r.d)
q.toString
o=i.e
o.toString
n=q.a
m=B.b.ab(B.b.ab(o/8)*n/i.f)
o=i.d
o.toString
l=q.b
k=B.b.ab(B.b.ab(o/8)*l/i.r)
j=i.w*n
n=i.x
q.e=m
q.f=k
q.r=j
n=q.w=n*l
q.y=b
q.z=a?l:0
o=a?l:n
n=b?1:64
q.x=new Int16Array(j*o*n)}},
lS(a){return this.hr(!1,a)}}
A.i2.prototype={$iH:1,
gR(){return this.a},
gN(){return this.b}}
A.kb.prototype={}
A.i3.prototype={
bI(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.y,a1=a0.length,a2=a.r
a2.toString
if(a2)if(a.Q===0)s=a.at===0?a.giV():a.giX()
else s=a.at===0?a.giK():a.giM()
else s=a.giS()
a2=a1===1
if(a2){if(0>=a1)return A.a(a0,0)
r=a0[0]
q=r.e
q===$&&A.c()
r=r.f
r===$&&A.c()
p=q*r}else{r=a.f
r===$&&A.c()
q=a.b.x
q===$&&A.c()
p=r*q}r=a.z
if(r==null||r===0)a.z=p
for(r=a.a,q=t.E,o=0;o<p;){for(n=0;n<a1;++n){if(!(n<a0.length))return A.a(a0,n)
a0[n].ay=0}a.db=0
if(a2){if(0>=a0.length)return A.a(a0,0)
m=a0[0]
l=0
for(;;){k=a.z
k.toString
if(!(l<k))break
q.a(s)
k=m.e
k===$&&A.c()
j=B.a.a1(o,k)
i=B.a.V(o,k)
k=m.z
k=k>0?B.a.V(j,k):j
h=m.r
h===$&&A.c()
a.f_(m,s,k*h+i);++o
if(a.ay!=null&&B.a.V(o,m.e)===0)a.ec(B.a.a1(o,m.e));++l}}else{l=0
for(;;){k=a.z
k.toString
if(!(l<k))break
for(n=0;n<a1;++n){if(!(n<a0.length))return A.a(a0,n)
m=a0[n]
g=m.a
f=m.b
for(e=0;e<f;++e)for(d=0;d<g;++d)a.j1(m,s,o,e,d)}++o
if(a.ay!=null){k=a.f
k===$&&A.c()
k=B.a.V(o,k)===0}else k=!1
if(k){k=a.f
k===$&&A.c()
a.ec(B.a.a1(o,k))}++l}}a.cx=a.CW=0
k=a.cy=!1
if(o>=p)break
c=J.d(r.a,r.d)
b=J.d(r.a,r.d+1)
if(c===255)if(b>=208?b<=215:k)r.d+=2
else break}if(a.ay!=null){if(a2){if(0>=a0.length)return A.a(a0,0)
a0=a0[0].f
a0===$&&A.c()}else{a0=a.b.x
a0===$&&A.c()}a.ec(a0)}},
ec(a){var s,r
while(s=this.ch,s<a){r=this.ay
r.toString
this.ch=s+1
r.$1(s)}},
dU(){var s,r,q=this,p=q.a,o=p.c
for(;;){if(!(q.cx<=24&&!q.cy))break
s=p.d
if(s>=o){q.cy=!0
break}r=J.d(p.a,s)
if(r===255){s=p.d
if(o-s<2||J.d(p.a,s+1)!==0){q.cy=!0
break}p.d+=2}else ++p.d
q.CW=(q.CW<<8|r)>>>0
q.cx+=8}},
cd(){var s=this,r=s.cx
if(r===0){s.dU()
r=s.cx
if(r===0)return null}--r
s.cx=r
return B.a.a3(s.CW,r)&1},
cu(a,b){var s,r,q,p,o,n,m=this
t.hQ.a(a)
if(m.cx<9)m.dU()
s=m.cx
if(s>=9){r=B.a.a3(m.CW,s-9)&511
if(!(r<b.length))return A.a(b,r)
q=b[r]
if(q!==0){m.cx=s-(q>>>8)
return q&255}}for(p=a;;){o=m.cd()
if(o==null)return null
if(o>>>0!==o||o>=2)return A.a(p,o)
n=p[o]
if(n instanceof A.dB)return n.a
if(!(n instanceof A.cr))return null
p=n.a}},
e9(a){var s=this,r=s.cx
if(r<a){s.dU()
r=s.cx
if(r<a){s.cx=0
return null}}r-=a
s.cx=r
return(B.a.a3(s.CW,r)&B.a.P(1,a)-1)>>>0},
cz(a){var s
if(a==null)return 0
if(a===1)return this.cd()===1?1:-1
s=this.e9(a)
if(s==null)return 0
if(s>=B.a.Y(1,a-1))return s
return s+B.a.P(-1,a)+1},
iT(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=a.Q
j===$&&A.c()
s=a.at
s===$&&A.c()
r=k.cu(j,s)
q=r===0?0:k.cz(r)
j=a.ay
j===$&&A.c()
j+=q
a.ay=j
b.$flags&2&&A.b(b)
s=b.length
if(!(c<s))return A.a(b,c)
b[c]=j
for(p=1;p<64;){j=a.as
j===$&&A.c()
o=a.ax
o===$&&A.c()
n=k.cu(j,o)
if(n==null)break
m=n&15
l=n>>>4
if(m===0){if(l<15)break
p+=16
continue}p+=l
m=k.cz(m)
j=$.j6()
if(!(p>=0&&p<j.length))return A.a(j,p)
j=c+j[p]
b.$flags&2&&A.b(b)
if(!(j<s))return A.a(b,j)
b[j]=m;++p}},
iW(a,b,c){var s,r,q,p=a.Q
p===$&&A.c()
s=a.at
s===$&&A.c()
r=this.cu(p,s)
q=r===0?0:B.a.P(this.cz(r),this.ax)
p=a.ay
p===$&&A.c()
p+=q
a.ay=p
b.$flags&2&&A.b(b)
if(!(c<b.length))return A.a(b,c)
b[c]=p},
iY(a,b,c){var s,r
if(!(c<b.length))return A.a(b,c)
s=b[c]
r=this.cd()
r.toString
r=B.a.P(r,this.ax)
b.$flags&2&&A.b(b)
b[c]=(s|r)>>>0},
iL(a,b,c){var s,r,q,p,o,n,m,l=this,k=l.db
if(k>0){l.db=k-1
return}s=l.Q
r=l.as
for(k=l.ax;s<=r;){q=a.as
q===$&&A.c()
p=a.ax
p===$&&A.c()
p=l.cu(q,p)
p.toString
o=p&15
n=p>>>4
if(o===0){if(n<15){k=l.e9(n)
k.toString
l.db=k+B.a.P(1,n)-1
break}s+=16
continue}s+=n
q=$.j6()
if(!(s>=0&&s<q.length))return A.a(q,s)
q=c+q[s]
p=l.cz(o)
m=B.a.P(1,k)
b.$flags&2&&A.b(b)
if(!(q<b.length))return A.a(b,q)
b[q]=p*m;++s}},
iN(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=k.Q,i=k.as
A:for(s=b.length,r=k.ax,q=0;j<=i;){p=$.j6()
if(!(j>=0&&j<p.length))return A.a(p,j)
o=c+p[j]
p=k.dx
switch(p){case 0:p=a.as
p===$&&A.c()
n=a.ax
n===$&&A.c()
m=k.cu(p,n)
if(m==null)throw A.h(A.l("Invalid progressive encoding"))
l=m&15
q=m>>>4
if(l===0)if(q<15){p=k.e9(q)
p.toString
k.db=p+B.a.P(1,q)
k.dx=4}else{k.dx=1
q=16}else{if(l!==1)throw A.h(A.l("invalid ACn encoding"))
k.dy=k.cz(l)
k.dx=q!==0?2:3}continue A
case 1:case 2:if(!(o<s))return A.a(b,o)
n=b[o]
if(n!==0){p=k.cd()
p.toString
p=B.a.P(p,r)
b.$flags&2&&A.b(b)
b[o]=n+p}else{--q
if(q===0)k.dx=p===2?3:0}break
case 3:if(!(o<s))return A.a(b,o)
p=b[o]
if(p!==0){n=k.cd()
n.toString
n=B.a.P(n,r)
b.$flags&2&&A.b(b)
b[o]=p+n}else{p=k.dy
p===$&&A.c()
p=B.a.P(p,r)
b.$flags&2&&A.b(b)
b[o]=p
k.dx=0}break
case 4:if(!(o<s))return A.a(b,o)
p=b[o]
if(p!==0){n=k.cd()
n.toString
n=B.a.P(n,r)
b.$flags&2&&A.b(b)
b[o]=p+n}break}++j}if(k.dx===4)if(--k.db===0)k.dx=0},
j1(a,b,c,d,e){var s,r,q,p
t.E.a(b)
s=this.f
s===$&&A.c()
r=B.a.a1(c,s)*a.b+d
q=B.a.V(c,s)*a.a+e
s=a.w
s===$&&A.c()
if(r<s){s=a.r
s===$&&A.c()
s=q>=s}else s=!0
if(s)return
s=a.z
s=s>0?B.a.V(r,s):r
p=a.r
p===$&&A.c()
this.f_(a,b,s*p+q)},
f_(a,b,c){var s,r,q
t.E.a(b)
s=a.x
s===$&&A.c()
if(!a.y){b.$3(a,s,c<<6>>>0)
return}r=this.fr
if(!(c>=0&&c<s.length))return A.a(s,c)
q=s[c]
r.$flags&2&&A.b(r)
r[0]=q
b.$3(a,r,0)
q=r[0]
s.$flags&2&&A.b(s)
s[c]=q},
slO(a){this.ay=t.bZ.a(a)}}
A.k7.prototype={
aJ(a){var s,r=a.length,q=!0
if(r>=2){if(0>=r)return A.a(a,0)
if(a[0]===255){if(1>=r)return A.a(a,1)
r=a[1]!==216}else r=q}else r=q
if(r)return!1
try{r=A.k6().md(a)
return r}catch(s){return!1}},
aq(a){return A.M(new A.k9(this,a),t._)},
aL(a){return A.M(new A.k8(this,a,null),t.H)}}
A.k9.prototype={
$0(){var s=this.b
A.v(s,!0,null,0)
return A.k6().lU(s)},
$S:5}
A.k8.prototype={
$0(){var s=A.k6()
s.a=this.a.a
s.b=1
return s.lq(this.b)},
$S:1}
A.kv.prototype={}
A.dX.prototype={
a7(){return"PngDisposeMode."+this.b}}
A.fq.prototype={
a7(){return"PngBlendMode."+this.b}}
A.fr.prototype={}
A.hS.prototype={}
A.c9.prototype={
a7(){return"PngFilterType."+this.b}}
A.ih.prototype={
sR(a){this.a=A.p(a)},
sN(a){this.b=A.p(a)},
sU(a){this.w=t.gy.a(a)},
sm9(a){this.x=t.T.a(a)},
$iH:1,
gR(){return this.a},
gN(){return this.b}}
A.hT.prototype={}
A.kr.prototype={
aJ(a){var s
if(a.length<8)return!1
for(s=0;s<8;++s)if(a[s]!==B.aO[s])return!1
return!0},
aq(a){return A.M(new A.ku(this,a),t._)},
ka(b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7=A.v(b8,!0,b6,0)
b5.e=b7
s=b7.aa(8)
for(r=0;r<8;++r)if(J.d(s.a,s.d+r)!==B.aO[r])return b6
for(b7=b5.a,q=b7.cy,p=t.t,o=b7.db,n=t.L,m=b5.b,l=b7.ax;;){k=b5.e
j=k.d-k.b
i=k.l()
h=b5.e.al(4)
switch(h){case"tEXt":k=b5.e
g=k.aE(i)
k.d=k.d+(g.c-g.d)
f=g.Z()
e=f.length
for(r=0;r<e;++r)if(f[r]===0){k=r+1
l.i(0,B.b3.aL(new Uint8Array(f.subarray(0,A.j0(0,r,e)))),B.b3.aL(new Uint8Array(f.subarray(k,A.j0(k,b6,e)))))
break}b5.e.d+=4
break
case"pHYs":k=b5.e
g=k.aE(i)
k.d=k.d+(g.c-g.d)
d=A.x(g,b6,0)
d.l()
d.l()
J.d(d.a,d.d++)
b5.e.d+=4
break
case"IHDR":k=b5.e
g=k.aE(i)
k.d=k.d+(g.c-g.d)
c=A.x(g,b6,0)
b=c.Z()
b7.a=c.l()
k=c.l()
b7.b=k
A.as(b7.a,k,m,!1)
b7.c=J.d(c.a,c.d++)
b7.d=J.d(c.a,c.d++)
J.d(c.a,c.d++)
b7.f=J.d(c.a,c.d++)
b7.r=J.d(c.a,c.d++)
k=b7.d
if(!(k===0||k===2||k===3||k===4||k===6))return b6
if(b7.f!==0)return b6
switch(k){case 0:if(!B.c.bs(A.i([1,2,4,8,16],p),b7.c))return b6
break
case 2:if(!B.c.bs(A.i([8,16],p),b7.c))return b6
break
case 3:if(!B.c.bs(A.i([1,2,4,8],p),b7.c))return b6
break
case 4:if(!B.c.bs(A.i([8,16],p),b7.c))return b6
break
case 6:if(!B.c.bs(A.i([8,16],p),b7.c))return b6
break}if(b5.e.l()!==A.bA(n.a(b),A.bA(new A.aw(h),0)))throw A.h(A.l("Invalid "+h+" checksum"))
break
case"PLTE":k=b5.e
g=k.aE(i)
k.d=k.d+(g.c-g.d)
b7.sU(g.Z())
if(b5.e.l()!==A.bA(n.a(n.a(b7.w)),A.bA(new A.aw(h),0)))throw A.h(A.l("Invalid "+h+" checksum"))
break
case"tRNS":k=b5.e
g=k.aE(i)
k.d=k.d+(g.c-g.d)
b7.sm9(g.Z())
a=b5.e.l()
k=b7.x
k.toString
if(a!==A.bA(n.a(k),A.bA(new A.aw(h),0)))throw A.h(A.l("Invalid "+h+" checksum"))
break
case"IEND":b5.e.d+=4
break
case"gAMA":if(i!==4)throw A.h(A.l("Invalid gAMA chunk"))
b5.e.l()
b5.e.d+=4
break
case"IDAT":B.c.B(o,j)
k=b5.e
k.d=(k.d+=i)+4
break
case"acTL":b7.CW=b5.e.l()
b5.e.l()
b5.e.d+=4
break
case"fcTL":b5.e.l()
a0=b5.e.l()
a1=b5.e.l()
a2=b5.e.l()
a3=b5.e.l()
a4=b5.e.m()
a5=b5.e.m()
k=b5.e
a6=J.d(k.a,k.d++)
k=b5.e
a7=J.d(k.a,k.d++)
if(!(a6>=0&&a6<3))return A.a(B.bq,a6)
k=B.bq[a6]
if(!(a7>=0&&a7<2))return A.a(B.bK,a7)
a8=B.bK[a7]
B.c.B(q,new A.hS(A.i([],p),a0,a1,a2,a3,a4,a5,k,a8))
b5.e.d+=4
break
case"fdAT":b5.e.l()
B.c.B(B.c.gdq(q).y,j)
k=b5.e
k.d=(k.d+=i-4)+4
break
case"bKGD":k=b7.d
if(k===3){k=b5.e
a9=J.d(k.a,k.d++);--i
b0=a9*3
k=b7.w
a8=k.length
if(!(b0>=0&&b0<a8))return A.a(k,b0)
b1=k[b0]
b2=b0+1
if(!(b2<a8))return A.a(k,b2)
b3=k[b2]
b2=b0+2
if(!(b2<a8))return A.a(k,b2)
b4=k[b2]
k=b7.x
if(k!=null){k=B.d.bs(k,a9)?0:255
a8=new Uint8Array(4)
a8[0]=b1
a8[1]=b3
a8[2]=b4
a8[3]=k
b7.z=new A.cl(a8)}else{k=new Uint8Array(3)
k[0]=b1
k[1]=b3
k[2]=b4
b7.z=new A.hm(k)}}else if(k===0||k===4){b5.e.m()
i-=2}else if(k===2||k===6){k=b5.e
k.m()
k.m()
k.m()
i-=24}if(i>0)b5.e.d+=i
b5.e.d+=4
break
case"iCCP":b7.Q=b5.e.cL()
k=b5.e
J.d(k.a,k.d++)
k=b7.Q
a8=b5.e
g=a8.aE(i-(k.length+2))
a8.d=a8.d+(g.c-g.d)
b7.at=g.Z()
b5.e.d+=4
break
case"cICP":k=b5.e
a8=k.d
if(i===4){b2=k.a
k.d=a8+1
J.d(b2,a8)
a8=b5.e
J.d(a8.a,a8.d++)
a8=b5.e
J.d(a8.a,a8.d++)
a8=b5.e
J.d(a8.a,a8.d++)}else k.d=a8+i
b5.e.d+=4
break
default:k=b5.e
k.d=(k.d+=i)+4
break}if(h==="IEND")break
k=b5.e
if(k.d>=k.c)return b6}return b7},
ai(a){return A.M(new A.ks(this,a),t.H)},
k9(c4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=this,b8=null,b9=b7.a,c0=b9.a,c1=b9.b,c2=b9.cy,c3=c2.length
if(c3===0||c4===0){m=A.i([],t.h)
c2=b9.db
l=c2.length
for(c3=t.L,k=0,j=0;j<l;++j){i=b7.e
i===$&&A.c()
if(!(j<c2.length))return A.a(c2,j)
i.d=c2[j]
h=i.l()
g=b7.e.al(4)
i=b7.e
f=i.aE(h)
i.d=i.d+(f.c-f.d)
e=f.Z()
k+=e.length
B.c.B(m,e)
if(b7.e.l()!==A.bA(c3.a(e),A.bA(new A.aw(g),0)))throw A.h(A.l("Invalid "+g+" checksum"))}d=new Uint8Array(k)
for(c2=m.length,c=0,b=0;b<m.length;m.length===c2||(0,A.P)(m),++b){e=m[b]
B.d.dE(d,c,e)
c+=e.length}}else{if(c4>=c3)throw A.h(A.l("Invalid Frame Number: "+c4))
if(!(c4<c3))return A.a(c2,c4)
a=c2[c4]
c0=a.b
c1=a.c
A.as(c0,c1,b7.b,!1)
m=A.i([],t.h)
for(c2=a.y,k=0,j=0;j<c2.length;++j){c3=b7.e
c3===$&&A.c()
c3.d=c2[j]
h=c3.l()
c3=b7.e
c3.al(4)
c3.d+=4
c3=b7.e
f=c3.aE(h-4)
c3.d=c3.d+(f.c-f.d)
e=f.Z()
k+=e.length
B.c.B(m,e)}d=new Uint8Array(k)
for(c2=m.length,c=0,b=0;b<m.length;m.length===c2||(0,A.P)(m),++b){e=m[b]
B.d.dE(d,c,e)
c+=e.length}}c2=b9.d
a0=1
if(!(c2===3))if(!(c2===0)){if(c2===4)c2=2
else c2=c2===6?4:3
a0=c2}c2=A.hK(d,B.R,b8,b8)
s=A.po(new A.eS(c2,B.a1,B.aZ))
b7.d=b7.c=0
a1=b8
if(b9.d===3){c2=b9.w
if(c2!=null){c3=c2.length
a2=c3/3|0
a3=b9.x
i=a3!=null
a4=i?a3.length:0
a5=i?4:3
a1=new A.b_(new Uint8Array(a2*a5),a2,a5)
for(i=a5===4,j=0,a6=0;j<a2;++j,a6+=3){if(i&&j<a4){if(!(j<a3.length))return A.a(a3,j)
a7=a3[j]}else a7=255
if(!(a6<c3))return A.a(c2,a6)
a8=c2[a6]
a9=a6+1
if(!(a9<c3))return A.a(c2,a9)
a9=c2[a9]
b0=a6+2
if(!(b0<c3))return A.a(c2,b0)
a1.cT(j,a8,a9,c2[b0],a7)}}}if(b9.d===0&&b9.x!=null&&a1==null&&b9.c<=8){a3=b9.x
b1=a3.length
c2=b9.c
a2=B.a.Y(1,c2)
c3=a2*4
i=new Uint8Array(c3)
a1=new A.b_(i,a2,4)
if(c2===1)b2=255
else if(c2===2)b2=85
else{c2=c2===4?17:1
b2=c2}for(j=0;j<a2;++j){b3=j*b2
a1.cT(j,b3,b3,b3,255)}for(j=0;j<b1;j+=2){c2=a3[j]
a8=j+1
if(!(a8<b1))return A.a(a3,a8)
b4=(c2&255)<<8|a3[a8]&255
if(b4<a2){c2=b4*4+3
if(!(c2<c3))return A.a(i,c2)
i[c2]=0}}}c2=b9.c
if(c2===1)b5=B.v
else if(c2===2)b5=B.y
else{if(c2===4)c3=B.z
else c3=c2===16?B.o:B.f
b5=c3}c3=b9.d
if(c3===0&&b9.x!=null&&c2>8)a0=4
r=A.W(b8,b8,b5,0,B.i,c1,b8,0,c3===2&&b9.x!=null?4:a0,a1,B.f,c0,!1)
q=b9.a
p=b9.b
b9.a=c0
b9.b=c1
o=c0
n=c1
b7.f=0
try{if(b9.r!==0){c2=o
if(typeof c2!=="number")return c2.an()
c2=B.b.j(c2+7,3)
c3=n
if(typeof c3!=="number")return c3.an()
b7.c0(s,r,0,0,8,8,c2,B.b.j(c3+7,3))
c3=o
if(typeof c3!=="number")return c3.an()
c3=B.b.j(c3+3,3)
c2=n
if(typeof c2!=="number")return c2.an()
b7.c0(s,r,4,0,8,8,c3,B.b.j(c2+7,3))
c2=o
if(typeof c2!=="number")return c2.an()
c2=B.b.j(c2+3,2)
c3=n
if(typeof c3!=="number")return c3.an()
b7.c0(s,r,0,4,4,8,c2,B.b.j(c3+3,3))
c3=o
if(typeof c3!=="number")return c3.an()
c3=B.b.j(c3+1,2)
c2=n
if(typeof c2!=="number")return c2.an()
b7.c0(s,r,2,0,4,4,c3,B.b.j(c2+3,2))
c2=o
if(typeof c2!=="number")return c2.an()
c2=B.b.j(c2+1,1)
c3=n
if(typeof c3!=="number")return c3.an()
b7.c0(s,r,0,2,2,4,c2,B.b.j(c3+1,2))
c3=o
if(typeof c3!=="number")return c3.ba()
c3=B.b.j(c3,1)
c2=n
if(typeof c2!=="number")return c2.an()
b7.c0(s,r,1,0,2,2,c3,B.b.j(c2+1,1))
c2=n
if(typeof c2!=="number")return c2.ba()
b7.c0(s,r,0,1,1,2,o,B.b.j(c2,1))}else b7.kg(s,r)}catch(b6){c2=A.bo(b6)
if(c2 instanceof A.hd)return b8
else if(c2 instanceof A.eG)return b8
else if(c2 instanceof A.iY)return b8
else throw b6}finally{s.h6()
b9.sR(q)
b9.sN(p)}c2=b9.at
if(c2!=null)r.c=new A.bF(b9.Q,B.aD,c2)
b9=b9.ax
if(b9.a!==0)r.l6(b9)
return r},
hd(a,b){return A.M(new A.kt(this,t.D.a(a),b),t.H)},
aL(a){return this.hd(a,null)},
k8(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null
if(a.aq(a1)==null)return a0
s=a.a
r=s.cy
q=r.length
if(q===0||a2!=null)return a.ai(a2==null?0:a2)
p=Math.min(s.CW,q)
new A.bJ(a.b).c2(0,s.a*p,s.b)
for(q=t.g,o=a0,n=o,m=0;m<p;++m){if(!(m<r.length))return A.a(r,m)
a2=r[m]
l=a.ai(m)
if(l==null)continue
if(n==null||o==null){n=l.ha(l.gbe())
k=a2.f
n.y=B.b.h((k===0||a2.r===0?0:k/a2.r)*1000)
o=n
continue}k=m-1
if(!(k>=0&&k<r.length))return A.a(r,k)
j=r[k]
i=l.a
h=i==null
g=h?a0:i.a
if(g==null)g=0
f=o.a
e=f==null
d=e?a0:f.a
if(g===(d==null?0:d)){i=h?a0:i.b
if(i==null)i=0
h=e?a0:f.b
i=i===(h==null?0:h)&&a2.d===0&&a2.e===0&&a2.x===B.c8}else i=!1
if(i){k=a2.f
l.y=B.b.h((k===0||a2.r===0?0:k/a2.r)*1000)
n.aQ(l)
o=l
continue}c=n.x
if(c===$)c=n.x=A.i([],q)
if(!(k<c.length))return A.a(c,k)
o=A.bc(c[k],!1,!1)
b=j.w
if(b===B.ca){k=j.d
i=j.e
h=s.z
if(h==null){h=new Uint8Array(4)
g=new A.cl(h)
h[0]=0
h[1]=0
h[2]=0
h[3]=0
h=g}A.qF(o,!1,h,k,k+j.b-1,i,i+j.c-1)}else if(b===B.cb&&m>1){k=m-2
c=n.x
if(c===$)c=n.x=A.i([],q)
if(!(k>=0&&k<c.length))return A.a(c,k)
i=j.d
h=j.e
g=j.b
f=j.c
o=A.ow(o,c[k],B.ax,f,g,i,h,f,g,i,h)}k=a2.f
o.y=B.b.h((k===0||a2.r===0?0:k/a2.r)*1000)
k=a2.x===B.c9?B.ax:B.a9
o=A.ow(o,l,k,a0,a0,a2.d,a2.e,a0,a0,a0,a0)
n.aQ(o)}return n},
ge6(){var s=this.a.d
if(s===4)s=2
else if(s===2)s=3
else s=s===6?4:1
return s},
c0(a,b,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
if(a4===0||a5===0)return
s=c.ge6()
r=c.a.c
q=s*r
p=B.a.j(q+7,3)
o=B.a.K(q*a4+7,8)
n=r===8||r===16
m=A.i([0,0,0,0],t.t)
for(l=a1,k=null,j=null,i=0;i<a5;++i,l+=a3,++c.f,j=g){s=a.G()
if(!(s<5))return A.a(B.aq,s)
h=B.aq[s]
g=a.aa(o).Z()
s=g.length
if(s!==o)throw A.h(B.b5)
c.fM(h,p,g,j)
if(n){c.fT(g,b,l,a0,a2,a4)
continue}c.d=c.c=0
f=new A.ai(g,0,Math.min(s,s),0,!0)
for(e=a0,d=0;d<a4;++d,e+=a2){c.fw(f,m)
s=b.a
k=s==null?null:s.a0(e,l,k)
if(k==null)k=new A.J()
c.fC(k,m)}}},
kg(a,a0){var s,r,q,p,o,n,m,l=this,k=l.ge6(),j=l.a,i=j.c,h=k*i,g=j.a,f=j.b,e=B.a.K(g*h+7,8),d=B.a.j(h+7,3),c=i===8||i===16,b=A.i([0,0,0,0],t.t)
k=a0.a
s=k.gE(k)
s.D()
for(r=null,q=0;q<f;++q,r=o){k=a.G()
if(!(k<5))return A.a(B.aq,k)
p=B.aq[k]
o=a.aa(e).Z()
k=o.length
if(k!==e)throw A.h(B.b5)
l.fM(p,d,o,r)
if(c){l.fT(o,a0,q,0,1,g)
continue}l.d=l.c=0
n=new A.ai(o,0,Math.min(k,k),0,!0)
for(m=0;m<g;++m){l.fw(n,b)
l.fC(s.gJ(),b)
s.D()}}},
fT(a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this.ge6(),b=a3.a,a=b.c,a0=this.a,a1=a0.x
if(a0.c===8){s=J.D(b.gt(b))
r=a4*a3.a.gaD()+a5*a
q=a6*a
if(a===c){if(a6===1){B.d.ap(s,r,r+a7*c,a2)
return}for(b=a2.length,a0=s.$flags|0,p=0,o=0;p<a7;++p,r+=q)for(n=0;n<c;++n,o=l){m=r+n
l=o+1
if(!(o>=0&&o<b))return A.a(a2,o)
k=a2[o]
a0&2&&A.b(s)
if(!(m>=0&&m<s.length))return A.a(s,m)
s[m]=k}return}b=a1.length
if(0>=b)return A.a(a1,0)
a0=a1[0]
if(1>=b)return A.a(a1,1)
j=(a0&255)<<8|a1[1]&255
if(2>=b)return A.a(a1,2)
a0=a1[2]
if(3>=b)return A.a(a1,3)
i=(a0&255)<<8|a1[3]&255
if(4>=b)return A.a(a1,4)
a0=a1[4]
if(5>=b)return A.a(a1,5)
h=(a0&255)<<8|a1[5]&255
for(b=a2.length,a0=s.$flags|0,p=0,o=0;p<a7;++p,o+=3,r+=q){if(!(o<b))return A.a(a2,o)
g=a2[o]
m=o+1
if(!(m<b))return A.a(a2,m)
f=a2[m]
m=o+2
if(!(m<b))return A.a(a2,m)
e=a2[m]
a0&2&&A.b(s)
m=s.length
if(!(r>=0&&r<m))return A.a(s,r)
s[r]=g
k=r+1
if(!(k<m))return A.a(s,k)
s[k]=f
k=r+2
if(!(k<m))return A.a(s,k)
s[k]=e
k=r+3
d=g===j&&f===i&&e===h?0:255
if(!(k<m))return A.a(s,k)
s[k]=d}return}s=t.iI.a(b).d
r=(a4*a3.gR()+a5)*a
q=a6*a
if(a===c)for(b=a2.length,a0=s.$flags|0,p=0,o=0;p<a7;++p,r+=q)for(n=0;n<c;++n,o+=2){m=r+n
if(!(o>=0&&o<b))return A.a(a2,o)
k=a2[o]
d=o+1
if(!(d<b))return A.a(a2,d)
d=a2[d]
a0&2&&A.b(s)
if(!(m>=0&&m<s.length))return A.a(s,m)
s[m]=(k<<8|d)>>>0}else if(c===3){b=a1.length
if(0>=b)return A.a(a1,0)
a0=a1[0]
if(1>=b)return A.a(a1,1)
j=(a0&255)<<8|a1[1]&255
if(2>=b)return A.a(a1,2)
a0=a1[2]
if(3>=b)return A.a(a1,3)
i=(a0&255)<<8|a1[3]&255
if(4>=b)return A.a(a1,4)
a0=a1[4]
if(5>=b)return A.a(a1,5)
h=(a0&255)<<8|a1[5]&255
for(b=a2.length,a0=s.$flags|0,p=0,o=0;p<a7;++p,o+=6,r+=q){if(!(o<b))return A.a(a2,o)
m=a2[o]
k=o+1
if(!(k<b))return A.a(a2,k)
g=(m<<8|a2[k])>>>0
k=o+2
if(!(k<b))return A.a(a2,k)
k=a2[k]
m=o+3
if(!(m<b))return A.a(a2,m)
f=(k<<8|a2[m])>>>0
m=o+4
if(!(m<b))return A.a(a2,m)
m=a2[m]
k=o+5
if(!(k<b))return A.a(a2,k)
e=(m<<8|a2[k])>>>0
a0&2&&A.b(s)
k=s.length
if(!(r>=0&&r<k))return A.a(s,r)
s[r]=g
m=r+1
if(!(m<k))return A.a(s,m)
s[m]=f
m=r+2
if(!(m<k))return A.a(s,m)
s[m]=e
m=r+3
d=g===j&&f===i&&e===h?0:65535
if(!(m<k))return A.a(s,m)
s[m]=d}}else{b=a1.length
if(0>=b)return A.a(a1,0)
a0=a1[0]
if(1>=b)return A.a(a1,1)
i=(a0&255)<<8|a1[1]&255
for(b=a2.length,a0=s.$flags|0,p=0,o=0;p<a7;++p,o+=2,r+=q){if(!(o<b))return A.a(a2,o)
m=a2[o]
k=o+1
if(!(k<b))return A.a(a2,k)
f=(m<<8|a2[k])>>>0
a0&2&&A.b(s)
k=s.length
if(!(r>=0&&r<k))return A.a(s,r)
s[r]=f
m=r+1
if(!(m<k))return A.a(s,m)
s[m]=f
m=r+2
if(!(m<k))return A.a(s,m)
s[m]=f
m=r+3
d=f===i?0:65535
if(!(m<k))return A.a(s,m)
s[m]=d}}},
fM(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=c.length,f=b<g?b:g
switch(a.a){case 0:break
case 1:for(s=c.$flags|0,r=b;r<g;++r){q=c[r]
p=r-b
if(!(p>=0))return A.a(c,p)
p=c[p]
s&2&&A.b(c)
c[r]=q+p}break
case 2:if(d!=null)for(s=d.length,q=c.$flags|0,r=0;r<g;++r){p=c[r]
if(!(r<s))return A.a(d,r)
o=d[r]
q&2&&A.b(c)
c[r]=p+o}break
case 3:if(d==null)for(s=c.$flags|0,r=b;r<g;++r){q=c[r]
p=r-b
if(!(p>=0))return A.a(c,p)
p=c[p]
s&2&&A.b(c)
c[r]=q+(p>>>1)}else{for(s=d.length,q=c.$flags|0,r=0;r<f;++r){if(!(r<g))return A.a(c,r)
p=c[r]
if(!(r<s))return A.a(d,r)
o=d[r]
q&2&&A.b(c)
c[r]=p+(o>>>1)}for(r=b;r<g;++r){p=c[r]
o=r-b
if(!(o>=0))return A.a(c,o)
o=c[o]
if(!(r<s))return A.a(d,r)
n=d[r]
q&2&&A.b(c)
c[r]=p+(o+n>>>1)}}break
case 4:if(d==null)for(s=c.$flags|0,r=b;r<g;++r){q=c[r]
p=r-b
if(!(p>=0))return A.a(c,p)
p=c[p]
s&2&&A.b(c)
c[r]=q+p}else{for(s=d.length,q=c.$flags|0,r=0;r<f;++r){if(!(r<g))return A.a(c,r)
p=c[r]
if(!(r<s))return A.a(d,r)
o=d[r]
q&2&&A.b(c)
c[r]=p+o}for(r=b;r<g;++r){p=r-b
if(!(p>=0))return A.a(c,p)
m=c[p]
if(!(r<s))return A.a(d,r)
l=d[r]
if(!(p<s))return A.a(d,p)
k=d[p]
j=l-k
i=m-k
h=j+i
if(j<0)j=-j
if(i<0)i=-i
if(h<0)h=-h
p=c[r]
if(j<=i&&j<=h)o=m
else o=i<=h?l:k
q&2&&A.b(c)
c[r]=p+o}}break}},
bq(a,b){var s,r,q,p,o,n=this
if(b===0)return 0
if(b===8)return a.G()
if(b===16)return a.m()
for(s=a.c;r=n.d,r<b;){r=a.d
if(r>=s)throw A.h(A.l("Invalid PNG data."))
q=a.a
a.d=r+1
p=J.d(q,r)
r=n.d
n.c=B.a.Y(p,r)
n.d=r+8}if(b===1)o=1
else if(b===2)o=3
else{if(b===4)s=15
else s=0
o=s}s=r-b
r=B.a.a3(n.c,s)
n.d=s
return r&o},
fw(a,b){var s,r,q=this
t.L.a(b)
s=q.a
r=s.d
switch(r){case 0:B.c.i(b,0,q.bq(a,s.c))
return
case 2:B.c.i(b,0,q.bq(a,s.c))
B.c.i(b,1,q.bq(a,s.c))
B.c.i(b,2,q.bq(a,s.c))
return
case 3:B.c.i(b,0,q.bq(a,s.c))
return
case 4:B.c.i(b,0,q.bq(a,s.c))
B.c.i(b,1,q.bq(a,s.c))
return
case 6:B.c.i(b,0,q.bq(a,s.c))
B.c.i(b,1,q.bq(a,s.c))
B.c.i(b,2,q.bq(a,s.c))
B.c.i(b,3,q.bq(a,s.c))
return}throw A.h(A.l("Invalid color type: "+r+"."))},
fC(a,b){var s,r,q,p,o,n,m,l,k,j
t.L.a(b)
s=this.a
r=s.d
switch(r){case 0:r=s.x
if(r!=null&&s.c>8){s=r.length
if(0>=s)return A.a(r,0)
q=r[0]
if(1>=s)return A.a(r,1)
r=r[1]
p=b[0]
a.aj(p,p,p,p!==((q&255)<<8|r&255)?a.gF():0)
return}a.aC(b[0],0,0)
return
case 2:o=b[0]
p=b[1]
n=b[2]
s=s.x
if(s!=null){r=s.length
if(0>=r)return A.a(s,0)
q=s[0]
if(1>=r)return A.a(s,1)
m=s[1]
if(2>=r)return A.a(s,2)
l=s[2]
if(3>=r)return A.a(s,3)
k=s[3]
if(4>=r)return A.a(s,4)
j=s[4]
if(5>=r)return A.a(s,5)
s=s[5]
if(o!==((q&255)<<8|m&255)||p!==((l&255)<<8|k&255)||n!==((j&255)<<8|s&255)){a.aj(o,p,n,a.gF())
return}}a.aC(o,p,n)
return
case 3:a.sS(b[0])
return
case 4:a.aj(b[0],0,0,b[1])
return
case 6:a.aj(b[0],b[1],b[2],b[3])
return}throw A.h(A.l("Invalid color type: "+r+"."))}}
A.ku.prototype={
$0(){return this.a.ka(this.b)},
$S:5}
A.ks.prototype={
$0(){return this.a.k9(this.b)},
$S:1}
A.kt.prototype={
$0(){return this.a.k8(this.b,this.c)},
$S:1}
A.iY.prototype={}
A.ig.prototype={
a7(){return"PngFilter."+this.b}}
A.kw.prototype={
aQ(a){var s,r,q,p,o,n,m=this,l=8192,k={},j=a.a
j=j==null?null:j.gbk()
if(!(j===!0&&a.gL()!==B.o))j=a.gaK()<8&&!a.gbj()&&a.gbe()>1
else j=!0
if(j)a=a.lf(B.f)
if(m.w==null){j=A.bf(!0,l)
m.w=j
j.bE(A.i([137,80,78,71,13,10,26,10],t.t))
s=A.bf(!0,l)
s.b_(a.gR())
s.b_(a.gN())
s.a_(a.gaK())
if(a.gbj())j=3
else if(a.gbe()===1)j=0
else if(a.gbe()===2)j=4
else j=a.gbe()===3?2:6
s.a_(j)
s.a_(0)
s.a_(0)
s.a_(0)
j=m.w
j.toString
m.br(j,"IHDR",J.Q(B.d.gt(s.c),0,s.a))
j=a.c
if(j!=null){s=A.bf(!0,l)
s.bE(new A.aw(A.tK(j.a)))
s.a_(0)
s.a_(0)
s.bE(j.le())
j=m.w
j.toString
m.br(j,"iCCP",J.Q(B.d.gt(s.c),0,s.a))}if(a.gbj()){j=m.a
if(j!=null){j=j.a
j===$&&A.c()
m.fS(j)}else{j=a.a
j=j==null?null:j.gU()
j.toString
m.fS(j)}}if(m.r){s=A.bf(!0,l)
j=m.e
j===$&&A.c()
s.b_(j)
s.b_(m.c)
j=m.w
j.toString
m.br(j,"acTL",J.Q(B.d.gt(s.c),0,s.a))}}j=a.d
if(j!=null)for(j=new A.ad(j,j.r,j.e,A.n(j).n("ad<1>"));j.D();){r=j.d
q=a.d.k(0,r)
q.toString
s=new A.ib(!0,new Uint8Array(8192))
s.bE(B.b4.ci(r))
s.a_(0)
s.bE(B.b4.ci(q))
r=m.w
r.toString
m.br(r,"tEXt",J.Q(B.d.gt(s.c),0,s.a))}if(m.r){s=A.bf(!0,l)
s.b_(m.f)
s.b_(a.gR())
s.b_(a.gN())
s.b_(0)
s.b_(0)
s.dC(a.y)
s.dC(1000)
s.a_(1)
s.a_(0)
j=m.w
j.toString
m.br(j,"fcTL",J.Q(B.d.gt(s.c),0,s.a));++m.f}p=m.f<=1
o=p?0:4
s=new Uint8Array(o+65536)
k.a=o
k.b=0
j=new A.ky(k,m,p,s,o)
r=m.d
q=new A.kx(k,s,j)
n=A.bf(!1,(a.a.gaD()+1)*a.gN())
m.jr(0,a,new A.kv(r,q,n))
q.$1(B.b6.he(t.L.a(J.Q(B.d.gt(n.c),0,n.a)),r))
if(k.a>o||k.b===0)j.$0()},
lB(){var s,r=this,q=r.w
if(q==null)return null
r.br(q,"IEND",A.i([],t.t))
r.f=0
q=r.w
s=J.Q(B.d.gt(q.c),0,q.a)
r.w=null
return s},
lt(a,b){var s,r,q,p,o,n,m=this
if(a.gR()<1||a.gN()<1||a.a==null)A.G(A.l("Cannot encode an empty image"))
s=a.gaw().length
if(s<=1){m.e=1
m.r=!1
m.aQ(a)}else{s=a.gaw().length
m.e=s
m.r=s>1
m.c=a.r
if(a.gbj()){s=new Int32Array(256)
r=new Int32Array(0)
q=new Int32Array(65536)
p=new A.i8(s,r,q,new Uint16Array(65536))
p.jR(256)
p.fU(a)
m.a=p
for(s=a.gaw(),r=s.length,o=0;o<s.length;s.length===r||(0,A.P)(s),++o){n=s[o]
if(n!==a)p.fU(n)}}for(s=a.gaw(),r=s.length,o=0;o<s.length;s.length===r||(0,A.P)(s),++o){n=s[o]
q=m.a
if(q!=null)m.aQ(q.hI(n))
else m.aQ(n)}}s=m.lB()
s.toString
return s},
fS(a){var s,r,q,p=this
if(a.gL()===B.f&&a.b===3&&a.a===256){s=p.w
s.toString
p.br(s,"PLTE",J.Q(a.gt(a),0,null))}else{s=a.a
r=A.bf(!0,s*3)
for(q=0;q<s;++q){r.a_(B.b.h(a.aX(q)))
r.a_(B.b.h(a.aW(q)))
r.a_(B.b.h(a.aU(q)))}s=p.w
s.toString
p.br(s,"PLTE",J.Q(B.d.gt(r.c),0,r.a))}if(a.b===4){s=a.a
r=A.bf(!0,s)
for(q=0;q<s;++q)r.a_(B.b.h(a.aT(q)))
s=p.w
s.toString
p.br(s,"tRNS",J.Q(B.d.gt(r.c),0,r.a))}},
br(a,b,c){t.L.a(c)
a.b_(c.length)
a.bE(new A.aw(b))
a.bE(c)
a.b_(A.bA(c,A.bA(new A.aw(b),0)))},
jr(a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=a8.gbj()?B.k3:this.b,a=a8.gt(0),a0=a8.a.gaD(),a1=a8.gbj()?1:a8.gbe(),a2=B.a.j(a1*a8.gaK()+7,3),a3=a8.gaK()+7>>>3,a4=new Uint8Array(a0),a5=[a4,new Uint8Array(a0)],a6=a5[1]
a4=a0+1
s=new Uint8Array(a4)
r=b.a
if(0>=a4)return A.a(s,0)
s[0]=r
q=a9.c
p=a3>1
o=J.aX(a)
n=a3-1
m=0
l=0
for(;;){k=a8.a
k=k==null?null:k.b
if(!(l<(k==null?0:k)))break
j=o.cC(a,m,a0)
i=a5[l&1]
if(p)for(k=j.length,h=i.$flags|0,g=0;g<a0;g+=a3)for(f=n,e=0;e<a3;++e,--f){d=g+e
c=g+f
if(!(c>=0&&c<k))return A.a(j,c)
c=j[c]
h&2&&A.b(i)
if(!(d<i.length))return A.a(i,d)
i[d]=c}else B.d.ap(i,0,a0,j)
switch(r){case 0:B.d.ap(s,1,a4,i)
break
case 1:A.tI(i,a2,s)
break
case 2:A.tJ(i,a6,s)
break
case 3:A.tG(i,a6,a2,s)
break
case 4:A.tH(i,a6,a2,s)
break}q.bE(s);++l
m+=a0
a6=i}}}
A.ky.prototype={
$0(){var s,r,q=this,p=q.b,o=q.d,n=q.a
if(q.c){s=p.w
s.toString
p.br(s,"IDAT",J.Q(B.d.gt(o),0,n.a))}else{s=p.f
o.$flags&2&&A.b(o)
r=o.length
if(0>=r)return A.a(o,0)
o[0]=s>>>24&255
if(1>=r)return A.a(o,1)
o[1]=s>>>16&255
if(2>=r)return A.a(o,2)
o[2]=s>>>8&255
if(3>=r)return A.a(o,3)
o[3]=s&255
p.f=s+1
s=p.w
s.toString
p.br(s,"fdAT",J.Q(B.d.gt(o),0,n.a))}n.a=q.e;++n.b},
$S:2}
A.kx.prototype={
$1(a){var s,r,q,p,o,n,m,l
for(s=a.length,r=this.a,q=this.b,p=q.length,o=this.c,n=0;n<s;){m=r.a
l=Math.min(s-n,p-m)
B.d.a6(q,m,m+l,a,n)
n+=l
if((r.a+=l)===p)o.$0()}},
$S:63}
A.ca.prototype={
a7(){return"PnmFormat."+this.b}}
A.cb.prototype={
gR(){return this.a},
gN(){return this.b}}
A.kz.prototype={
aJ(a){var s
this.b=A.v(a,!1,null,0)
s=this.d7()
if(s==="P1"||s==="P2"||s==="P5"||s==="P3"||s==="P6")return!0
return!1},
aL(a){return A.M(new A.kC(this,a,null),t.H)},
kb(a,b){if(this.aq(a)==null)return null
return this.ai(0)},
aq(a){return A.M(new A.kD(this,a),t._)},
kd(a){var s,r,q,p=this
p.b=A.v(a,!1,null,0)
s=p.d7()
if(s==="P1"){r=p.a=new A.cb(B.a4)
r.e=B.cc}else if(s==="P2"){r=p.a=new A.cb(B.a4)
r.e=B.cd}else if(s==="P5"){r=p.a=new A.cb(B.a4)
r.e=B.aQ}else if(s==="P3"){r=p.a=new A.cb(B.a4)
r.e=B.ce}else if(s==="P6"){r=p.a=new A.cb(B.a4)
r.e=B.aR}else return p.b=null
r.a=p.cv()
r=p.a
r.toString
r.b=p.cv()
r=p.a
q=r.a
if(q<1||r.b<1)return p.a=p.b=null
A.as(q,r.b,p.d,!1)
return p.a},
ai(a){return A.M(new A.kB(this,a),t.H)},
kc(a){var s,r,q,p,o,n=this,m=null,l=n.a
if(l==null)return m
l=l.e
if(l===B.cc){n.dL(1)
l=n.a
s=l.a
r=A.W(m,m,B.v,0,B.i,l.b,m,0,1,m,B.f,s,!1)
for(l=r.a,l=l.gE(l);l.D();){q=l.gJ()
if(n.d7()==="1")q.aC(1,1,1)
else q.aC(0,0,0)}return r}else if(l===B.cd||l===B.aQ){p=n.cv()
if(p===0)return m
n.dL(1)
l=n.a
s=l.a
l=l.b
r=A.W(m,m,n.hf(p),0,B.i,l,m,0,1,m,B.f,s,!1)
for(l=r.a,l=l.gE(l);l.D();){q=l.gJ()
o=n.dc(n.a.e,p)
q.aC(o,o,o)}return r}else if(l===B.ce||l===B.aR){p=n.cv()
if(p===0)return m
n.dL(3)
l=n.a
s=l.a
l=l.b
r=A.W(m,m,n.hf(p),0,B.i,l,m,0,3,m,B.f,s,!1)
for(l=r.a,l=l.gE(l);l.D();)l.gJ().aC(n.dc(n.a.e,p),n.dc(n.a.e,p),n.dc(n.a.e,p))
return r}return m},
dL(a){var s,r=this.a,q=r.a
r=r.b
s=this.b
if(s.c-s.d+this.c.gp(0)<q*r*a)throw A.h(A.l("Truncated PNM data"))},
hf(a){if(a>255)return B.o
if(a>15)return B.f
if(a>3)return B.z
if(a>1)return B.y
return B.v},
dc(a,b){if(a===B.aQ||a===B.aR)return this.b.G()
return this.cv()},
cv(){var s,r,q=this.d7()
if(J.bW(q)===0)return 0
try{s=A.x3(q)
return s}catch(r){return 0}},
d7(){var s,r,q,p,o=this.b
if(o==null)return""
s=this.c
if(!s.gW(0))return s.hz()
r=B.G.hD(o.lY())
if(r.length===0)return""
while(B.G.eA(r,"#"))r=B.G.hD(this.b.hu(70))
o=t.cF
q=A.w(new A.fJ(A.i(r.split(" "),t.s),t.gS.a(new A.kA()),o),o.n("f.E"))
for(o=q.length,p=0;p<o;++p)if(B.G.eA(q[p],"#")){B.c.sp(q,p)
break}s.c3(0,q)
if(s.b===s.c)return""
return s.hz()}}
A.kC.prototype={
$0(){return this.a.kb(this.b,this.c)},
$S:1}
A.kD.prototype={
$0(){return this.a.kd(this.b)},
$S:5}
A.kB.prototype={
$0(){return this.a.kc(this.b)},
$S:1}
A.kA.prototype={
$1(a){return A.aU(a)!==""},
$S:64}
A.ij.prototype={
slE(a){t.T.a(a)},
shP(a){t.T.a(a)},
sm_(a){t.T.a(a)},
sm0(a){t.T.a(a)}}
A.ik.prototype={
sbG(a){t.T.a(a)},
sbL(a){t.T.a(a)}}
A.bw.prototype={}
A.io.prototype={
sbG(a){t.T.a(a)},
sbL(a){t.T.a(a)}}
A.ip.prototype={
sbG(a){t.T.a(a)},
sbL(a){t.T.a(a)}}
A.is.prototype={
sbG(a){t.T.a(a)},
sbL(a){t.T.a(a)}}
A.it.prototype={
sbG(a){t.T.a(a)},
sbL(a){t.T.a(a)}}
A.ft.prototype={}
A.ir.prototype={}
A.kH.prototype={
ic(a){var s,r,q,p,o=this
a.m()
a.m()
a.m()
a.m()
s=B.a.K(a.c-a.d,8)
if(s>0){o.e=new Uint16Array(s)
o.f=new Uint16Array(s)
o.r=new Uint16Array(s)
o.w=new Uint16Array(s)
for(r=0;r<s;++r){q=o.e
p=a.m()
q.$flags&2&&A.b(q)
if(!(r<q.length))return A.a(q,r)
q[r]=p
p=o.f
q=a.m()
p.$flags&2&&A.b(p)
if(!(r<p.length))return A.a(p,r)
p[r]=q
q=o.r
p=a.m()
q.$flags&2&&A.b(q)
if(!(r<q.length))return A.a(q,r)
q[r]=p
p=o.w
q=a.m()
p.$flags&2&&A.b(p)
if(!(r<p.length))return A.a(p,r)
p[r]=q}}}}
A.cW.prototype={
ht(a,b,c,d,e,f,g){if(a.c-a.d<2)return
if(e==null)e=a.m()
switch(e){case 0:d.toString
this.kG(a,b,c,d)
break
case 1:if(f==null)f=this.kD(a,c)
d.toString
this.kF(a,b,c,d,f,g)
break
default:throw A.h(A.l("Unsupported compression: "+e))}},
lX(a,b,c,d){return this.ht(a,b,c,d,null,null,0)},
kD(a,b){var s,r,q=new Uint16Array(b)
for(s=0;s<b;++s){r=a.m()
if(!(s<b))return A.a(q,s)
q[s]=r}return q},
kG(a,b,c,d){var s,r=b*c
if(d===16)r*=2
if(r>a.c-a.d){s=new Uint8Array(r)
this.c=s
B.d.O(s,0,r,255)
return}this.c=a.aa(r).Z()},
kF(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=b*c
if(d===16)l*=2
s=new Uint8Array(l)
this.c=s
r=f*c
q=e.length
if(r>=q){B.d.O(s,0,l,255)
return}for(p=0,o=0;o<c;++o,r=n){n=r+1
if(!(r>=0&&r<q))return A.a(e,r)
m=a.aE(e[r])
a.d=a.d+(m.c-m.d)
s=this.c
s.toString
this.j6(m,s,p)
p+=b}},
j6(a,b,c){var s,r,q,p,o,n,m,l
for(s=a.c,r=b.length;q=a.d,q<s;){p=a.a
a.d=q+1
q=J.d(p,q)
p=$.au()
p.$flags&2&&A.b(p)
p[0]=q
q=$.aH()
if(0>=q.length)return A.a(q,0)
o=q[0]
if(o<0){o=1-o
q=a.d
if(q>=s)break
p=a.a
a.d=q+1
n=J.d(p,q)
if(c+o>r)o=r-c
for(q=b.$flags|0,m=0;m<o;++m,c=l){l=c+1
q&2&&A.b(b)
if(!(c>=0&&c<r))return A.a(b,c)
b[c]=n}}else{++o
if(c+o>r)o=r-c
o=Math.min(o,s-a.d)
for(m=0;m<o;++m,c=l){l=c+1
q=J.d(a.a,a.d++)
b.$flags&2&&A.b(b)
if(!(c>=0&&c<r))return A.a(b,c)
b[c]=q}}}}}
A.bh.prototype={
a7(){return"PsdColorMode."+this.b}}
A.il.prototype={
gla(){var s=this.e
s===$&&A.c()
return s},
ie(a,b){var s,r,q=this
q.as=A.v(a,!0,null,0)
q.kk()
if(q.c!==943870035)return
s=q.as.l()
q.as.aa(s)
s=q.as.l()
q.ax=q.as.aa(s)
s=q.as.l()
q.ay=q.as.aa(s)
r=q.as
q.ch=r.aa(r.c-r.d)},
bI(){var s,r=this
if(r.c===943870035){s=r.as
s===$&&A.c()
s=s==null}else s=!0
if(s)return!1
A.as(r.a,r.b,r.CW,!1)
s=r.e
s===$&&A.c()
if(s<1||s>56)throw A.h(A.l("Invalid number of PSD channels: "+r.gla()))
r.kB()
r.kC()
r.kE()
r.ch=r.ay=r.ax=r.as=null
return!0},
lp(){if(!this.bI())return null
return this.m1()},
m1(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=null,a2=a0.y
if(a2!=null)return a2
a2=a0.a
a2=A.W(a1,a1,B.f,0,B.i,a0.b,a1,0,4,a1,B.f,a2,!1)
a0.y=a2
a2.aR(0)
for(a2=a0.w,s=0;s<a2.length;++s){r=a2[s]
q=r.y
q===$&&A.c()
if((q&2)!==0)continue
q=r.w
q===$&&A.c()
p=q/255
o=r.r
n=r.cx
q=r.a
q.toString
m=q
l=0
for(;;){q=r.f
q===$&&A.c()
if(!(l<q))break
q=r.a
q.toString
k=q+l
j=r.b
q=m>=0
i=0
for(;;){h=r.e
h===$&&A.c()
if(!(i<h))break
h=n.a
g=h==null?a1:h.a0(i,l,a1)
if(g==null)g=new A.J()
f=B.b.h(g.gq())
e=B.b.h(g.gv())
d=B.b.h(g.gu())
c=B.b.h(g.gA())
j.toString
if(j>=0&&j<a0.a&&q&&m<a0.b){h=r.b
h.toString
b=a0.y.a
a=b==null?a1:b.a0(h+i,k,a1)
if(a==null)a=new A.J()
a0.ir(B.b.h(a.gq()),B.b.h(a.gv()),B.b.h(a.gu()),B.b.h(a.gA()),f,e,d,c,o,p,a)}++i;++j}++l;++m}}a2=a0.y
a2.toString
return a2},
ir(a,b,c,d,e,f,g,h,i,j,k){var s,r,q,p,o,n=h/255*j
switch(i){case 1885434739:s=d
r=c
q=b
p=a
break
case 1852797549:s=h
r=g
q=f
p=e
break
case 1684632435:s=h
r=g
q=f
p=e
break
case 1684107883:p=Math.min(a,e)
q=Math.min(b,f)
r=Math.min(c,g)
s=h
break
case 1836411936:p=B.a.j(a*e,8)
q=B.a.j(b*f,8)
r=B.a.j(c*g,8)
s=h
break
case 1768188278:p=A.kM(a,e)
q=A.kM(b,f)
r=A.kM(c,g)
s=h
break
case 1818391150:p=A.kO(a,e)
q=A.kO(b,f)
r=A.kO(c,g)
s=h
break
case 1684751212:s=h
r=g
q=f
p=e
break
case 1818850405:p=Math.max(a,e)
q=Math.max(b,f)
r=Math.max(c,g)
s=h
break
case 1935897198:p=A.o6(a,e)
q=A.o6(b,f)
r=A.o6(c,g)
s=h
break
case 1684633120:p=A.kN(a,e)
q=A.kN(b,f)
r=A.kN(c,g)
s=h
break
case 1818518631:p=e+a>255?255:a+e
q=f+b>255?255:b+f
r=g+c>255?255:c+g
s=h
break
case 1818706796:s=h
r=g
q=f
p=e
break
case 1870030194:p=A.o4(a,e,d,h)
q=A.o4(b,f,d,h)
r=A.o4(c,g,d,h)
s=h
break
case 1934387572:p=A.o7(a,e)
q=A.o7(b,f)
r=A.o7(c,g)
s=h
break
case 1749838196:p=A.o2(a,e)
q=A.o2(b,f)
r=A.o2(c,g)
s=h
break
case 1984719220:p=A.o8(a,e)
q=A.o8(b,f)
r=A.o8(c,g)
s=h
break
case 1816947060:p=A.o3(a,e)
q=A.o3(b,f)
r=A.o3(c,g)
s=h
break
case 1884055924:p=A.o5(a,e)
q=A.o5(b,f)
r=A.o5(c,g)
s=h
break
case 1749903736:p=e<255-a?0:255
q=f<255-b?0:255
r=g<255-c?0:255
s=h
break
case 1684629094:p=Math.abs(e-a)
q=Math.abs(f-b)
r=Math.abs(g-c)
s=h
break
case 1936553316:p=A.o1(a,e)
q=A.o1(b,f)
r=A.o1(c,g)
s=h
break
case 1718842722:s=h
r=g
q=f
p=e
break
case 1717856630:s=h
r=g
q=f
p=e
break
case 1752524064:s=h
r=g
q=f
p=e
break
case 1935766560:s=h
r=g
q=f
p=e
break
case 1668246642:s=h
r=g
q=f
p=e
break
case 1819634976:s=h
r=g
q=f
p=e
break
default:s=h
r=g
q=f
p=e}o=1-n
k.sq(B.b.h(a*o+p*n))
k.sv(B.b.h(b*o+q*n))
k.su(B.b.h(c*o+r*n))
k.sA(B.b.h(d*o+s*n))},
kk(){var s,r,q=this,p=q.as
p===$&&A.c()
q.c=p.l()
p=q.as.m()
q.d=p
if(p!==1){q.c=0
return}s=q.as.aa(6)
for(r=0;r<6;++r)if(J.d(s.a,s.d+r)!==0){q.c=0
return}q.e=q.as.m()
q.b=q.as.l()
q.a=q.as.l()
q.f=q.as.m()
p=q.as.m()
if(!(p<8))return A.a(B.c4,p)
q.r=B.c4[p]},
kB(){var s,r,q,p,o,n=this,m=n.ax
m.d=m.b
for(m=n.z;s=n.ax,s.d<s.c;){r=s.l()
q=n.ax.m()
s=n.ax
p=J.d(s.a,s.d++)
n.ax.al(p)
if((p&1)===0)++n.ax.d
p=n.ax.l()
s=n.ax
o=s.aE(p)
s.d=s.d+(o.c-o.d)
if((p&1)===1)++n.ax.d
if(r===943868237)m.i(0,q,new A.im())}},
kC(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.ay
c.d=c.b
s=c.l()
if((s&1)!==0)++s
r=d.ay.aa(s)
c=d.w
B.c.aR(c)
if(s>0){q=r.m()
p=$.at()
p.$flags&2&&A.b(p)
p[0]=q
q=$.aG()
if(0>=q.length)return A.a(q,0)
o=q[0]
if(o<0)o=-o
for(q=t.N,p=t.mi,n=t.k9,m=t.na,l=0;l<o;++l){k=new A.iq(A.F(q,p),A.i([],n),A.i([],m))
k.ig(r)
B.c.B(c,k)}}q=d.CW
j=new A.bJ(q)
i=d.f===16?2:1
p=d.a
n=d.b
m=d.e
m===$&&A.c()
h=p*n*m*i
for(p=c.length,g=0;g<c.length;c.length===p||(0,A.P)(c),++g){k=c[g]
n=k.e
n===$&&A.c()
m=k.f
m===$&&A.c()
A.as(n,m,q,!0)
j.c2(0,k.e,k.f)
m=k.e
n=k.f
f=k.as
f===$&&A.c()
h+=m*n*f.length*i}if(h>Math.max(128*d.at,16777216))throw A.h(A.l("PSD data is too small for its size"))
for(l=0;l<c.length;++l)c[l].lT(r,d)
s=d.ay.l()
e=d.ay.aa(s)
if(s>0){e.m()
e.m()
e.m()
e.m()
e.m()
e.m()
e.G()}},
kE(){var s,r,q,p,o,n,m=this,l=m.ch
l.d=l.b
s=l.m()
if(s===1){l=m.b
r=m.e
r===$&&A.c()
q=l*r
p=new Uint16Array(q)
for(o=0;o<q;++o)p[o]=m.ch.m()}else p=null
m.x=t.cf.a(A.i([],t.mS))
o=0
for(;;){l=m.e
l===$&&A.c()
if(!(o<l))break
l=m.x
r=m.ch
r.toString
n=o===3?-1:o
n=new A.cW(n)
n.ht(r,m.a,m.b,m.f,s,p,o)
B.c.B(l,n);++o}m.y=A.pM(m.r,m.f,m.a,m.b,m.x)},
$iH:1,
gR(){return this.a},
gN(){return this.b}}
A.im.prototype={}
A.iq.prototype={
ig(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a4.l(),a3=$.S()
a3.$flags&2&&A.b(a3)
a3[0]=a2
a2=$.ac()
if(0>=a2.length)return A.a(a2,0)
a1.a=a2[0]
a3[0]=a4.l()
a1.b=a2[0]
a3[0]=a4.l()
a1.c=a2[0]
a3[0]=a4.l()
a2=a2[0]
a1.d=a2
a3=a1.b
a3.toString
a1.e=a2-a3
a3=a1.c
a2=a1.a
a2.toString
a1.f=a3-a2
a1.as=t.cf.a(A.i([],t.mS))
s=a4.m()
for(r=0;r<s;++r){a2=a4.m()
a3=$.at()
a3.$flags&2&&A.b(a3)
a3[0]=a2
a2=$.aG()
if(0>=a2.length)return A.a(a2,0)
q=a2[0]
a4.l()
B.c.B(a1.as,new A.cW(q))}p=a4.l()
if(p!==943868237)throw A.h(A.l("Invalid PSD layer signature: "+B.a.dA(p,16)))
a1.r=a4.l()
a1.w=a4.G()
a4.G()
a1.y=a4.G()
if(a4.G()!==0)throw A.h(A.l("Invalid PSD layer data"))
o=a4.l()
n=a4.aa(o)
if(o>0){o=n.l()
if(o>0){m=n.aa(o)
a2=m.d
m.l()
m.l()
m.l()
m.l()
m.G()
m.G()
if(m.c-a2===20)m.d+=2
else{m.G()
m.G()
m.l()
m.l()
m.l()
m.l()}}o=n.l()
if(o>0)new A.kH().ic(n.aa(o))
o=n.G()
n.al(o)
l=4-B.a.V(o,4)-1
if(l>0)n.d+=l
for(a2=n.c,a3=a1.ay,k=a1.cy,j=t.t,i=t.dw;n.d<a2;){p=n.l()
if(p!==943868237)throw A.h(A.l("PSD invalid signature for layer additional data: "+B.a.dA(p,16)))
h=n.al(4)
o=n.l()
g=n.aE(o)
f=n.d+(g.c-g.d)
n.d=f
if((o&1)===1)n.d=f+1
a3.i(0,h,A.tR(h,g))
if(h==="lrFX"){e=A.x(i.a(a3.k(0,"lrFX")).b,null,0)
e.m()
d=e.m()
for(c=0;c<d;++c){e.al(4)
b=e.al(4)
a=e.l()
if(b==="dsdw"){a0=new A.ik()
B.c.B(k,a0)
a0.a=e.l()
e.l()
e.l()
e.l()
e.l()
a0.sbG(A.i([e.m(),e.m(),e.m(),e.m(),e.m()],j))
e.al(8)
J.d(e.a,e.d++)
J.d(e.a,e.d++)
J.d(e.a,e.d++)
a0.sbL(A.i([e.m(),e.m(),e.m(),e.m(),e.m()],j))}else if(b==="isdw"){a0=new A.ip()
B.c.B(k,a0)
a0.a=e.l()
e.l()
e.l()
e.l()
e.l()
a0.sbG(A.i([e.m(),e.m(),e.m(),e.m(),e.m()],j))
e.al(8)
J.d(e.a,e.d++)
J.d(e.a,e.d++)
J.d(e.a,e.d++)
a0.sbL(A.i([e.m(),e.m(),e.m(),e.m(),e.m()],j))}else if(b==="oglw"){a0=new A.is()
B.c.B(k,a0)
a0.a=e.l()
e.l()
e.l()
a0.sbG(A.i([e.m(),e.m(),e.m(),e.m(),e.m()],j))
e.al(8)
J.d(e.a,e.d++)
J.d(e.a,e.d++)
if(a0.a===2)a0.sbL(A.i([e.m(),e.m(),e.m(),e.m(),e.m()],j))}else if(b==="iglw"){a0=new A.io()
B.c.B(k,a0)
a0.a=e.l()
e.l()
e.l()
a0.sbG(A.i([e.m(),e.m(),e.m(),e.m(),e.m()],j))
e.al(8)
J.d(e.a,e.d++)
J.d(e.a,e.d++)
if(a0.a===2){J.d(e.a,e.d++)
a0.sbL(A.i([e.m(),e.m(),e.m(),e.m(),e.m()],j))}}else if(b==="bevl"){a0=new A.ij()
B.c.B(k,a0)
a0.a=e.l()
e.l()
e.l()
e.l()
e.al(8)
e.al(8)
a0.slE(A.i([e.m(),e.m(),e.m(),e.m(),e.m()],j))
a0.shP(A.i([e.m(),e.m(),e.m(),e.m(),e.m()],j))
J.d(e.a,e.d++)
J.d(e.a,e.d++)
J.d(e.a,e.d++)
J.d(e.a,e.d++)
J.d(e.a,e.d++)
J.d(e.a,e.d++)
if(a0.a===2){a0.sm_(A.i([e.m(),e.m(),e.m(),e.m(),e.m()],j))
a0.sm0(A.i([e.m(),e.m(),e.m(),e.m(),e.m()],j))}}else if(b==="sofi"){a0=new A.it()
B.c.B(k,a0)
a0.a=e.l()
e.al(4)
a0.sbG(A.i([e.m(),e.m(),e.m(),e.m(),e.m()],j))
J.d(e.a,e.d++)
J.d(e.a,e.d++)
a0.sbL(A.i([e.m(),e.m(),e.m(),e.m(),e.m()],j))}else e.d+=a}}}}},
lT(a,b){var s,r,q,p,o,n=this,m=0
for(;;){s=n.as
s===$&&A.c()
if(!(m<s.length))break
s=s[m]
r=n.e
r===$&&A.c()
q=n.f
q===$&&A.c()
s.lX(a,r,q,b.f);++m}r=b.r
q=b.f
p=n.e
p===$&&A.c()
o=n.f
o===$&&A.c()
n.cx=A.pM(r,q,p,o,s)}}
A.dZ.prototype={}
A.kI.prototype={
aJ(a){var s,r
try{s=A.pL(a,null).c
return s===943870035}catch(r){return!1}},
aL(a){return A.M(new A.kK(this,a,null),t.H)},
kj(a,b){var s,r,q,p=this
if(p.aq(a)==null)return null
s=p.a==null?null:1
if(s==null)s=0
if(s===1)return p.ai(0)
for(r=null,q=0;q<s;++q){b=p.ai(q)
if(b==null)continue
if(r==null){b.w=B.be
r=b}else r.aQ(b)}return r},
aq(a){return A.M(new A.kL(this,a),t._)},
ai(a){return A.M(new A.kJ(this,a),t.H)}}
A.kK.prototype={
$0(){return this.a.kj(this.b,this.c)},
$S:1}
A.kL.prototype={
$0(){var s=this.a
return s.a=A.pL(this.b,s.b)},
$S:5}
A.kJ.prototype={
$0(){var s=this.a.a
return s==null?null:s.lp()},
$S:1}
A.iu.prototype={}
A.e0.prototype={}
A.aB.prototype={
an(a,b){var s=this
return new A.aB(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)}}
A.e_.prototype={$iH:1,
gR(){return this.a},
gN(){return this.b}}
A.cX.prototype={$iH:1,
gN(){return this.f},
gR(){return this.r}}
A.fu.prototype={$iH:1,
gR(){return this.a},
gN(){return this.b}}
A.b0.prototype={
scD(a){var s=this.a,r=this.b+1
s.$flags&2&&A.b(s)
if(!(r<s.length))return A.a(s,r)
s[r]=a},
cO(){var s,r=this.e,q=this.d
if(r){s=q>>>9
if(!(s<32))return A.a(B.t,s)
return new A.e0(B.t[s],B.t[q>>>4&31],B.x[q&15])}else return new A.e0(B.x[q>>>7&15],B.x[q>>>3&15],B.at[q&7])},
cQ(){var s,r=this.e,q=this.d
if(r){s=q>>>9
if(!(s<32))return A.a(B.t,s)
return new A.aB(B.t[s],B.t[q>>>4&31],B.x[q&15],255)}else return new A.aB(B.x[q>>>7&15],B.x[q>>>3&15],B.at[q&7],B.at[q>>>11&7])},
cP(){var s,r=this.r,q=this.f
if(r){s=q>>>10
if(!(s<32))return A.a(B.t,s)
return new A.e0(B.t[s],B.t[q>>>5&31],B.t[q&31])}else return new A.e0(B.x[q>>>8&15],B.x[q>>>4&15],B.x[q&15])},
cR(){var s,r=this.r,q=this.f
if(r){s=q>>>10
if(!(s<32))return A.a(B.t,s)
return new A.aB(B.t[s],B.t[q>>>5&31],B.t[q&31],255)}else return new A.aB(B.x[q>>>8&15],B.x[q>>>4&15],B.x[q&15],B.at[q>>>12&7])},
cs(){var s=this,r=s.c?1:0,q=s.d,p=s.e?1:0,o=s.f,n=s.r?1:0
return(r|(q&16383)<<1|p<<15|(o&32767)<<16|n<<31)>>>0},
by(){var s,r=this,q=r.a,p=r.b+1
if(!(p<q.length))return A.a(q,p)
s=q[p]
r.c=(s&1)===1
r.scD(r.cs())
r.d=s>>>1&16383
r.scD(r.cs())
r.e=(s>>>15&1)===1
r.scD(r.cs())
r.f=s>>>16&32767
r.scD(r.cs())
r.r=(s>>>31&1)===1
r.scD(r.cs())}}
A.kP.prototype={
aJ(a){var s,r
try{s=this.aq(a)
return s!=null}catch(r){return!1}},
aq(a){return A.M(new A.kS(this,a),t._)},
kU(a){var s,r=this,q=a.length,p=q-(q>>>1&1431655765)>>>0
p=(p&858993459)+(p>>>2&858993459)
if((p+(p>>>4)>>>0&252645135)*16843009>>>0>>>24===1){s=r.iP(a)
if(s!=null){r.a=a
return r.b=s}}s=r.j5(a)
if(s!=null){r.a=a
return r.b=s}s=r.j3(a)
if(s!=null){r.a=a
return r.b=s}return null},
j5(a){var s,r,q=A.v(a,!1,null,0)
if(q.c-q.d<52)return null
if(q.l()!==55727696)return null
s=A.i([0,0,0,0],t.t)
r=new A.cX(s)
q.l()
r.b=q.l()
B.c.i(s,0,q.G())
B.c.i(s,1,q.G())
B.c.i(s,2,q.G())
B.c.i(s,3,q.G())
q.l()
q.l()
r.f=q.l()
r.r=q.l()
q.l()
q.l()
q.l()
q.l()
r.Q=q.l()
return r},
j3(a){var s,r,q=A.v(a,!1,null,0)
if(q.l()!==52)return null
s=new A.e_()
s.b=q.l()
s.a=q.l()
q.l()
s.d=q.l()
q.l()
s.f=q.l()
q.l()
q.l()
q.l()
s.y=q.l()
r=q.l()
s.z=r
s.Q=q.l()
if(r!==559044176)return null
return s},
iP(a){var s,r,q,p,o,n,m=null,l=a.length,k=A.v(a,!1,m,0)
if(k.l()!==0)return m
s=new A.fu()
s.b=k.l()
s.a=k.l()
k.l()
k.l()
k.l()
k.l()
k.l()
k.l()
k.l()
r=k.l()
s.y=r
if(r===559044176)return m
q=0
p=8
if(!(l===32)){o=0
for(;;){if(!(o<10)){q=1
break}n=o<<1>>>0
if((B.a.P(64,n)&l)>>>0!==0){p=B.a.P(16,o)
q=1
break}if((B.a.P(128,n)&l)>>>0!==0){p=B.a.P(16,o)
break}++o}if(o===10)return m}if((q+1)*2===4)return m
s.b=s.a=p
return s},
ai(a){return A.M(new A.kQ(this,a),t.H)},
iZ(a){var s,r,q=this,p=q.b
if(p==null||q.a==null)return null
A.as(p.gR(),q.b.gN(),q.c,!1)
p=q.b
if(p instanceof A.fu){p=p.a
s=q.b.gN()
r=q.a
r.toString
return q.dR(p,s,r)}else if(p instanceof A.e_){p=q.a
p.toString
return q.j2(p)}else if(p instanceof A.cX){p=q.a
p.toString
return q.j4(p)}return null},
aL(a){return A.M(new A.kR(this,a,null),t.H)},
iJ(a,b){if(this.aq(a)==null)return null
return this.ai(0)},
j2(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=a.length
if(e<52||g.b==null)return f
s=g.b
s.toString
t.fF.a(s)
r=A.v(a,!1,f,0)
r.d+=52
q=s.Q
if(q<1)q=(s.d&4096)!==0?6:1
if(q!==1)return f
p=s.a
o=s.b
if(p*o*s.f/8>e-52)return f
switch(s.d&255){case 16:n=A.W(f,f,B.f,0,B.i,o,f,0,4,f,B.f,p,!1)
for(s=n.a,s=s.gE(s);s.D();){m=s.gJ()
l=J.d(r.a,r.d++)
k=J.d(r.a,r.d++)
m.sq(k&240)
m.sv((k&15)<<4)
m.su(l&240)
m.sA((l&15)<<4)}return n
case 17:n=A.W(f,f,B.f,0,B.i,o,f,0,4,f,B.f,p,!1)
for(s=n.a,s=s.gE(s);s.D();){m=s.gJ()
j=r.m()
i=(j&1)!==0?255:0
m.sq(j>>>8&248)
m.sv(j>>>3&248)
m.su((j&62)<<2)
m.sA(i)}return n
case 18:n=A.W(f,f,B.f,0,B.i,o,f,0,4,f,B.f,p,!1)
for(s=n.a,s=s.gE(s);s.D();){m=s.gJ()
m.sq(J.d(r.a,r.d++))
m.sv(J.d(r.a,r.d++))
m.su(J.d(r.a,r.d++))
m.sA(J.d(r.a,r.d++))}return n
case 19:n=A.W(f,f,B.f,0,B.i,o,f,0,3,f,B.f,p,!1)
for(s=n.a,s=s.gE(s);s.D();){m=s.gJ()
j=r.m()
m.sq(j>>>8&248)
m.sv(j>>>3&252)
m.su((j&31)<<3)}return n
case 20:n=A.W(f,f,B.f,0,B.i,o,f,0,3,f,B.f,p,!1)
for(s=n.a,s=s.gE(s);s.D();){m=s.gJ()
j=r.m()
m.sq((j&31)<<3)
m.sv(j>>>2&248)
m.su(j>>>7&248)}return n
case 21:n=A.W(f,f,B.f,0,B.i,o,f,0,3,f,B.f,p,!1)
for(s=n.a,s=s.gE(s);s.D();){m=s.gJ()
m.sq(J.d(r.a,r.d++))
m.sv(J.d(r.a,r.d++))
m.su(J.d(r.a,r.d++))}return n
case 22:n=A.W(f,f,B.f,0,B.i,o,f,0,1,f,B.f,p,!1)
for(s=n.a,s=s.gE(s);s.D();)s.gJ().sq(J.d(r.a,r.d++))
return n
case 23:n=A.W(f,f,B.f,0,B.i,o,f,0,4,f,B.f,p,!1)
for(s=n.a,s=s.gE(s);s.D();){m=s.gJ()
i=J.d(r.a,r.d++)
h=J.d(r.a,r.d++)
m.sq(h)
m.sv(h)
m.su(h)
m.sA(i)}return n
case 24:return f
case 25:return s.y===0?g.f2(p,o,r.Z()):g.dR(p,o,r.Z())}return f},
j4(a){var s,r,q,p=this
if(!(p.b instanceof A.cX))return null
s=A.v(a,!1,null,0)
r=s.d+=52
q=t.gH.a(p.b)
s.d=r+q.Q
if(q.c[0]===0)switch(q.b){case 2:return p.f2(q.r,q.f,s.Z())
case 3:return p.dR(q.r,q.f,s.Z())}return null},
f2(c6,c7,c8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=A.W(b6,b6,B.f,0,B.i,c7,b6,0,3,b6,B.f,c6,!1),b8=c6/4|0,b9=b8-1,c0=J.aI(B.d.gt(c8),0,null),c1=new A.b0(c0),c2=new A.b0(J.aI(B.d.gt(c8),0,null)),c3=new A.b0(J.aI(B.d.gt(c8),0,null)),c4=new A.b0(J.aI(B.d.gt(c8),0,null)),c5=new A.b0(J.aI(B.d.gt(c8),0,null))
for(s=c0.length,r=0,q=0;r<b8;++r,q+=4)for(p=0,o=0;p<b8;++p,o+=4){c1.b=A.bK(p,r)<<1>>>0
c1.by()
n=c1.b
if(!(n<s))return A.a(c0,n)
m=c0[n]
l=c1.c?4:0
for(k=0,j=0;j<4;++j){i=(r+(j<2?-1:0)&b9)>>>0
h=(i+1&b9)>>>0
for(n=j+q,g=0;g<4;++g){f=(p+(g<2?-1:0)&b9)>>>0
e=(f+1&b9)>>>0
c2.b=A.bK(f,i)<<1>>>0
c2.by()
c3.b=A.bK(e,i)<<1>>>0
c3.by()
c4.b=A.bK(f,h)<<1>>>0
c4.by()
c5.b=A.bK(e,h)<<1>>>0
c5.by()
d=c2.cO()
if(!(k>=0&&k<16))return A.a(B.p,k)
c=B.p[k][0]
b=c3.cO()
a=B.p[k][1]
a0=c4.cO()
a1=B.p[k][2]
a2=c5.cO()
a3=B.p[k][3]
a4=c2.cP()
a5=B.p[k][0]
a6=c3.cP()
a7=B.p[k][1]
a8=c4.cP()
a9=B.p[k][2]
b0=c5.cP()
b1=B.p[k][3]
b2=B.bT[l+m&3]
b3=b2[0]
b4=b2[1]
b5=b7.a
if(b5!=null)b5.aH(g+o,n,(d.a*c+b.a*a+a0.a*a1+a2.a*a3)*b3+(a4.a*a5+a6.a*a7+a8.a*a9+b0.a*b1)*b4>>>7,(d.b*c+b.b*a+a0.b*a1+a2.b*a3)*b3+(a4.b*a5+a6.b*a7+a8.b*a9+b0.b*b1)*b4>>>7,(d.c*c+b.c*a+a0.c*a1+a2.c*a3)*b3+(a4.c*a5+a6.c*a7+a8.c*a9+b0.c*b1)*b4>>>7)
m=m>>>2;++k}}}return b7},
dR(b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null,a5=A.W(a4,a4,B.f,0,B.i,b5,a4,0,4,a4,B.f,b4,!1),a6=b4/4|0,a7=a6-1,a8=J.aI(B.d.gt(b6),0,null),a9=new A.b0(a8),b0=new A.b0(J.aI(B.d.gt(b6),0,null)),b1=new A.b0(J.aI(B.d.gt(b6),0,null)),b2=new A.b0(J.aI(B.d.gt(b6),0,null)),b3=new A.b0(J.aI(B.d.gt(b6),0,null))
for(s=a8.length,r=0,q=0;r<a6;++r,q+=4)for(p=0,o=0;p<a6;++p,o+=4){a9.b=A.bK(p,r)<<1>>>0
a9.by()
n=a9.b
if(!(n<s))return A.a(a8,n)
m=a8[n]
l=a9.c?4:0
for(k=0,j=0;j<4;++j){i=(r+(j<2?-1:0)&a7)>>>0
h=(i+1&a7)>>>0
for(n=j+q,g=0;g<4;++g){f=(p+(g<2?-1:0)&a7)>>>0
e=(f+1&a7)>>>0
b0.b=A.bK(f,i)<<1>>>0
b0.by()
b1.b=A.bK(e,i)<<1>>>0
b1.by()
b2.b=A.bK(f,h)<<1>>>0
b2.by()
b3.b=A.bK(e,h)<<1>>>0
b3.by()
d=b0.cQ()
if(!(k>=0&&k<16))return A.a(B.p,k)
c=B.p[k][0]
b=b1.cQ()
a=B.p[k][1]
a=new A.aB(d.a*c,d.b*c,d.c*c,d.d*c).an(0,new A.aB(b.a*a,b.b*a,b.c*a,b.d*a))
b=b2.cQ()
c=B.p[k][2]
c=a.an(0,new A.aB(b.a*c,b.b*c,b.c*c,b.d*c))
b=b3.cQ()
a=B.p[k][3]
a0=c.an(0,new A.aB(b.a*a,b.b*a,b.c*a,b.d*a))
a=b0.cR()
b=B.p[k][0]
c=b1.cR()
d=B.p[k][1]
d=new A.aB(a.a*b,a.b*b,a.c*b,a.d*b).an(0,new A.aB(c.a*d,c.b*d,c.c*d,c.d*d))
c=b2.cR()
b=B.p[k][2]
b=d.an(0,new A.aB(c.a*b,c.b*b,c.c*b,c.d*b))
c=b3.cR()
d=B.p[k][3]
a1=b.an(0,new A.aB(c.a*d,c.b*d,c.c*d,c.d*d))
a2=B.bT[l+m&3]
d=a2[0]
c=a2[1]
b=a2[2]
a=a2[3]
a3=a5.a
if(a3!=null)a3.az(g+o,n,a0.a*d+a1.a*c>>>7,a0.b*d+a1.b*c>>>7,a0.c*d+a1.c*c>>>7,a0.d*b+a1.d*a>>>7)
m=m>>>2;++k}}}return a5}}
A.kS.prototype={
$0(){return this.a.kU(this.b)},
$S:5}
A.kQ.prototype={
$0(){return this.a.iZ(this.b)},
$S:1}
A.kR.prototype={
$0(){return this.a.iJ(this.b,this.c)},
$S:1}
A.fA.prototype={
bM(a){var s,r,q=this
if(a.c-a.d<18)return
q.a=a.G()
q.b=a.G()
s=a.G()
if(s<12){if(!(s>=0))return A.a(B.bR,s)
r=B.bR[s]}else r=B.au
q.c=r
a.m()
q.e=a.m()
q.f=a.G()
a.m()
a.m()
q.x=a.m()
q.y=a.m()
q.z=a.G()
q.Q=a.G()},
hi(){var s=this,r=s.z
if(r!==8&&r!==16&&r!==24&&r!==32)return!1
r=s.c
if(r===B.K||r===B.L){if(s.e>256||s.b!==1)return!1
r=s.f
if(r!==16&&r!==24&&r!==32)return!1}else if(s.b===1)return!1
return!0},
$iH:1,
gR(){return this.x},
gN(){return this.y}}
A.aD.prototype={
a7(){return"TgaImageType."+this.b}}
A.l_.prototype={
aL(a){return A.M(new A.l1(this,a,null),t.H)},
kW(a,b){if(this.aq(a)==null)return null
return this.ai(0)},
aq(a){return A.M(new A.l2(this,a),t._)},
kY(a){var s,r,q,p,o=this
o.a=new A.fA(B.au)
s=A.v(a,!1,null,0)
o.b=s
r=s.aa(18)
o.a.bM(r)
s=o.a
if(!s.hi()||s.x<1||s.y<1)return null
q=o.b
q.d+=s.a
p=s.c
if(p===B.K||p===B.L)s.as=q.aa(s.e*B.a.j(s.f,3)).Z()
s=o.a
s.ax=o.b.d
return s},
ai(a){return A.M(new A.l0(this,a),t.H)},
kX(a){var s=this,r=s.a
if(r==null)return null
A.as(r.x,r.y,s.c,!1)
r=s.a.c
if(r===B.cl)return s.f1()
else if(r===B.ck||r===B.L)return s.j7()
else if(r===B.K)return s.f1()
return null},
eX(a,b){var s,r,q,p,o,n,m,l=this,k=A.v(a,!1,null,0),j=l.a.f
if(j===16){j=l.b
j===$&&A.c()
s=j.m()
r=s>>>7&248
q=s>>>2&248
p=(s&31)<<3
o=(s&32768)!==0?0:255
for(n=0;n<l.a.e;++n){b.bw(n,r)
b.bv(n,q)
b.bu(n,p)
b.bt(n,o)}}else{m=j===32
for(n=0;n<l.a.e;++n){p=J.d(k.a,k.d++)
q=J.d(k.a,k.d++)
r=J.d(k.a,k.d++)
o=m?J.d(k.a,k.d++):255
b.bw(n,r)
b.bv(n,q)
b.bu(n,p)
b.bt(n,o)}}},
j7(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=e.a,b=c.z,a=b===16,a0=a||b===32,a1=c.x,a2=c.y,a3=a0?4:3
c=c.c
s=A.W(d,d,B.f,0,B.i,a2,d,0,a3,d,B.f,a1,c===B.K||c===B.L)
c=s.a
if((c==null?d:c.gU())!=null){c=e.a.as
c.toString
a1=s.a
a1=a1==null?d:a1.gU()
a1.toString
e.eX(c,a1)}r=s.gR()
q=s.gN()-1
c=b===8
p=0
for(;;){a1=e.b
a1===$&&A.c()
a2=a1.d
if(!(a2<a1.c&&q>=0))break
a3=a1.a
a1.d=a2+1
o=J.d(a3,a2)
n=(o&127)+1
m=0
if((o&128)!==0)if(c){a1=e.b
l=J.d(a1.a,a1.d++)
for(k=0;k<n;++k){j=p+1
a1=s.a
if(a1!=null)a1.aP(p,q,l)
if(j>=r){--q
if(q<0){p=m
break}p=0}else p=j}}else{a1=e.b
if(a){i=a1.m()
l=i>>>7&248
h=i>>>2&248
g=(i&31)<<3
f=(i&32768)!==0?0:255
for(k=0;k<n;++k){j=p+1
a1=s.a
if(a1!=null)a1.az(p,q,l,h,g,f)
if(j>=r){--q
if(q<0){p=m
break}p=0}else p=j}}else{g=J.d(a1.a,a1.d++)
a1=e.b
h=J.d(a1.a,a1.d++)
a1=e.b
l=J.d(a1.a,a1.d++)
if(a0){a1=e.b
f=J.d(a1.a,a1.d++)}else f=255
for(k=0;k<n;++k){j=p+1
a1=s.a
if(a1!=null)a1.az(p,q,l,h,g,f)
if(j>=r){--q
if(q<0){p=m
break}p=0}else p=j}}}else if(c)for(k=0;k<n;++k){a1=e.b
l=J.d(a1.a,a1.d++)
j=p+1
a1=s.a
if(a1!=null)a1.aP(p,q,l)
if(j>=r){--q
if(q<0){p=m
break}p=0}else p=j}else if(a)for(k=0;k<n;++k){i=e.b.m()
f=(i&32768)!==0?0:255
j=p+1
a1=s.a
if(a1!=null)a1.az(p,q,i>>>7&248,i>>>2&248,(i&31)<<3,f)
a1=e.b
if(a1.d>=a1.c){p=j
break}if(j>=r){--q
if(q<0){p=m
break}p=0}else p=j}else for(k=0;k<n;++k){a1=e.b
g=J.d(a1.a,a1.d++)
a1=e.b
h=J.d(a1.a,a1.d++)
a1=e.b
l=J.d(a1.a,a1.d++)
if(a0){a1=e.b
f=J.d(a1.a,a1.d++)}else f=255
j=p+1
a1=s.a
if(a1!=null)a1.az(p,q,l,h,g,f)
if(j>=r){--q
if(q<0){p=m
break}p=0}else p=j}if(p>=r){--q
if(q<0)break
p=0}}return s},
f1(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.b
b===$&&A.c()
s=d.a
b.d=s.ax
r=s.z
b=r===16
q=!0
if(!b)if(r!==32){p=s.c
if(p===B.K||p===B.L){p=s.f
p=p===16||p===32}else p=!1
q=p}p=s.x
o=s.y
n=q?4:3
s=s.c
m=A.W(c,c,B.f,0,B.i,o,c,0,n,c,B.f,p,s===B.K||s===B.L)
s=d.a
p=s.c
if(p===B.K||p===B.L){s=s.as
s.toString
p=m.a
p=p==null?c:p.gU()
p.toString
d.eX(s,p)}if(r===8)for(l=m.gN()-1;l>=0;--l){k=0
for(;;){b=m.a
b=b==null?c:b.a
if(!(k<(b==null?0:b)))break
b=d.b
j=J.d(b.a,b.d++)
b=m.a
if(b!=null)b.aP(k,l,j);++k}}else if(b)for(l=m.gN()-1;l>=0;--l){k=0
for(;;){b=m.a
b=b==null?c:b.a
if(!(k<(b==null?0:b)))break
i=d.b.m()
h=(i&32768)!==0?0:255
b=m.a
if(b!=null)b.az(k,l,i>>>7&248,i>>>2&248,(i&31)<<3,h);++k}}else for(l=m.gN()-1;l>=0;--l){k=0
for(;;){b=m.a
b=b==null?c:b.a
if(!(k<(b==null?0:b)))break
b=d.b
g=J.d(b.a,b.d++)
b=d.b
f=J.d(b.a,b.d++)
b=d.b
e=J.d(b.a,b.d++)
if(q){b=d.b
h=J.d(b.a,b.d++)}else h=255
b=m.a
if(b!=null)b.az(k,l,e,f,g,h);++k}}return m}}
A.l1.prototype={
$0(){return this.a.kW(this.b,this.c)},
$S:1}
A.l2.prototype={
$0(){return this.a.kY(this.b)},
$S:5}
A.l0.prototype={
$0(){return this.a.kX(this.b)},
$S:1}
A.l3.prototype={
ak(a){var s,r,q,p,o,n=this
if(a===0)return 0
if(n.c===0){n.c=8
n.b=n.a.G()}for(s=n.a,r=0;q=n.c,a>q;){p=B.a.Y(r,q)
o=n.b
if(!(q>=0&&q<9))return A.a(B.D,q)
r=p+(o&B.D[q])
a-=q
n.c=8
n.b=J.d(s.a,s.d++)}if(a>0){if(q===0){n.c=8
n.b=s.G()}s=B.a.Y(r,a)
q=n.b
p=n.c-a
q=B.a.ba(q,p)
if(!(a<9))return A.a(B.D,a)
r=s+(q&B.D[a])
n.c=p}return r}}
A.iB.prototype={
C(a){var s=this,r=s.a,q=$.oS().k(0,r)
if(q!=null)return q.a+": "+s.b.C(0)+" "+s.c
return"<"+r+">: "+s.b.C(0)+" "+s.c},
bl(){var s,r,q,p,o,n,m=this,l=m.e
if(l!=null)return l
l=m.f
s=m.d
l.d=s
r=m.c
q=m.b
p=q!==B.e
if(p){o=q.a
if(!(o<14))return A.a(B.U,o)
o=B.U[o]}else o=0
if(r*o>l.c-s)throw A.h(A.l("Invalid TIFF tag "+m.a+" count: "+r))
if(p){s=q.a
if(!(s<14))return A.a(B.U,s)
s=B.U[s]}else s=0
n=l.aa(r*s)
switch(q.a){case 1:return m.e=new A.bG(new Uint8Array(A.q(n.aa(r).Z())))
case 2:return m.e=new A.cs(r===0?"":n.al(r-1))
case 7:return m.e=new A.bG(new Uint8Array(A.q(n.aa(r).Z())))
case 3:return m.e=A.pl(n,r)
case 4:return m.e=A.pg(n,r)
case 5:return m.e=A.ph(n,r)
case 11:return m.e=A.pm(n,r)
case 12:return m.e=A.pf(n,r)
case 6:return m.e=new A.c3(new Int8Array(A.q(J.nC(B.d.gt(n.Z()),0,r))))
case 8:return m.e=A.pk(n,r)
case 9:return m.e=A.pi(n,r)
case 10:return m.e=A.pj(n,r)
case 13:case 0:return null}}}
A.l8.prototype={
ll(a,b,c,d){var s,r,q,p=this
p.r=b
p.x=p.w=0
s=B.a.K(p.a+7,8)
for(r=0,q=0;q<d;++q){p.dP(a,r,c)
r+=s}},
dP(a,b,c){var s,r,q,p,o,n,m,l,k=this
k.d=0
for(s=k.a,r=!0;c<s;){while(r){q=k.bR(10)
if(!(q<1024))return A.a(B.an,q)
p=B.an[q]
o=B.a.j(p,1)&15
if(o===12){q=(q<<2&12|k.b1(2))>>>0
if(!(q<16))return A.a(B.J,q)
p=B.J[q]
n=B.a.j(p,1)
c+=B.a.j(p,4)&4095
k.aG(4-(n&7))}else if(o===0)throw A.h(A.l("TIFFFaxDecoder0"))
else if(o===15)throw A.h(A.l("TIFFFaxDecoder1"))
else{c+=B.a.j(p,5)&2047
k.aG(10-o)
if((p&1)===0){B.c.i(k.f,k.d++,c)
r=!1}}}if(c===s){if(k.z===2)if(k.w!==0){s=k.x
s.toString
k.x=s+1
k.w=0}break}while(!r){q=k.b1(4)
if(!(q<16))return A.a(B.ag,q)
p=B.ag[q]
m=p>>>5&2047
l=!0
if(m===100){q=k.bR(9)
if(!(q<512))return A.a(B.ai,q)
p=B.ai[q]
o=B.a.j(p,1)&15
m=B.a.j(p,5)&2047
if(o===12){k.aG(5)
q=k.b1(4)
if(!(q<16))return A.a(B.J,q)
p=B.J[q]
n=B.a.j(p,1)
m=B.a.j(p,4)&4095
k.bb(a,b,c,m)
c+=m
k.aG(4-(n&7))}else if(o===15)throw A.h(A.l("TIFFFaxDecoder2"))
else{k.bb(a,b,c,m)
c+=m
k.aG(9-o)
if((p&1)===0){B.c.i(k.f,k.d++,c)
r=l}}}else{if(m===200){q=k.b1(2)
if(!(q<4))return A.a(B.af,q)
p=B.af[q]
m=p>>>5&2047
k.bb(a,b,c,m)
c+=m
k.aG(2-(p>>>1&15))
B.c.i(k.f,k.d++,c)}else{k.bb(a,b,c,m)
c+=m
k.aG(4-(p>>>1&15))
B.c.i(k.f,k.d++,c)}r=l}}if(c===s){if(k.z===2)if(k.w!==0){s=k.x
s.toString
k.x=s+1
k.w=0}break}}B.c.i(k.f,k.d++,c)},
lm(a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this
a0.r=a2
a0.z=3
a0.x=a0.w=0
s=a0.a
r=B.a.K(s+7,8)
q=A.ae(2,null,!1,t.I)
a0.at=a5&1
a0.as=a5>>>2&1
if(a0.fp()!==1)throw A.h(A.l("TIFFFaxDecoder3"))
a0.dP(a1,0,a3)
for(p=r,o=1;o<a4;++o){if(a0.fp()===0){n=a0.e
a0.e=a0.f
a0.f=n
a0.y=0
m=a3
l=-1
k=!0
j=0
for(;;){m.toString
if(!(m<s))break
a0.fa(l,k,q)
i=q[0]
h=q[1]
g=a0.b1(7)
if(!(g<128))return A.a(B.al,g)
g=B.al[g]&255
f=g>>>3&15
e=g&7
if(f===0){if(!k){h.toString
a0.bb(a1,p,m,h-m)}a0.aG(7-e)
m=h
l=m}else if(f===1){a0.aG(7-e)
d=j+1
c=d+1
if(k){m+=a0.d_()
B.c.i(a0.f,j,m)
b=a0.cZ()
a0.bb(a1,p,m,b)
m+=b
B.c.i(a0.f,d,m)}else{b=a0.cZ()
a0.bb(a1,p,m,b)
m+=b
B.c.i(a0.f,j,m)
m+=a0.d_()
B.c.i(a0.f,d,m)}j=c
l=m}else{if(f<=8){i.toString
a=i+(f-5)
d=j+1
B.c.i(a0.f,j,a)
k=!k
if(k)a0.bb(a1,p,m,a-m)
a0.aG(7-e)}else throw A.h(A.l("TIFFFaxDecoder4"))
m=a
j=d
l=m}}B.c.i(a0.f,j,m)
a0.d=j+1}else a0.dP(a1,p,a3)
p+=r}},
ls(a5,a6,a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this
a4.r=a6
a4.z=4
a4.x=a4.w=0
s=a4.a
r=B.a.K(s+7,8)
q=A.ae(2,null,!1,t.I)
p=a4.f
a4.d=0
a4.d=1
B.c.i(p,0,s)
B.c.i(p,a4.d++,s)
for(o=0,n=0;n<a8;++n){m=a4.e
a4.e=a4.f
a4.f=m
a4.y=0
l=a7
k=-1
j=!0
i=0
for(;;){l.toString
if(!(l<s))break
a4.fa(k,j,q)
h=q[0]
g=q[1]
f=a4.b1(7)
if(!(f<128))return A.a(B.al,f)
f=B.al[f]&255
e=f>>>3&15
d=f&7
if(e===0){if(!j){g.toString
a4.bb(a5,o,l,g-l)}a4.aG(7-d)
l=g
k=l}else if(e===1){a4.aG(7-d)
c=i+1
b=c+1
if(j){l+=a4.d_()
B.c.i(m,i,l)
a=a4.cZ()
a4.bb(a5,o,l,a)
l+=a
B.c.i(m,c,l)}else{a=a4.cZ()
a4.bb(a5,o,l,a)
l+=a
B.c.i(m,i,l)
l+=a4.d_()
B.c.i(m,c,l)}i=b
k=l}else if(e<=8){h.toString
a0=h+(e-5)
c=i+1
B.c.i(m,i,a0)
j=!j
if(j)a4.bb(a5,o,l,a0-l)
a4.aG(7-d)
l=a0
i=c
k=l}else if(e===11){if(a4.b1(3)!==7)throw A.h(A.l("TIFFFaxDecoder5"))
for(a1=0,a2=!1;!a2;j=a3){while(a4.b1(1)!==1)++a1
if(a1>5){a1-=6
if(!j&&a1>0){c=i+1
B.c.i(m,i,l)
i=c}l+=a1
if(a1>0)j=!0
a3=a4.b1(1)===0
if(a3){if(!j){c=i+1
B.c.i(m,i,l)
i=c}}else if(j){c=i+1
B.c.i(m,i,l)
i=c}j=a3
a2=!0}a3=a1===5
if(a3){if(!j){c=i+1
B.c.i(m,i,l)
i=c}l+=a1}else{l+=a1
c=i+1
B.c.i(m,i,l)
a4.bb(a5,o,l,1);++l
i=c}}}else throw A.h(A.l("TIFFFaxDecoder5 "+e))}B.c.i(m,i,l)
a4.d=i+1
o+=r}},
d_(){var s,r,q,p,o,n,m=this
for(s=0,r=!0;r;){q=m.bR(10)
if(!(q<1024))return A.a(B.an,q)
p=B.an[q]
o=B.a.j(p,1)&15
if(o===12){q=(q<<2&12|m.b1(2))>>>0
if(!(q<16))return A.a(B.J,q)
p=B.J[q]
n=B.a.j(p,1)
s+=B.a.j(p,4)&4095
m.aG(4-(n&7))}else if(o===0)throw A.h(A.l("TIFFFaxDecoder0"))
else if(o===15)throw A.h(A.l("TIFFFaxDecoder1"))
else{s+=B.a.j(p,5)&2047
m.aG(10-o)
if((p&1)===0)r=!1}}return s},
cZ(){var s,r,q,p,o,n,m,l=this
for(s=0,r=!1;!r;){q=l.b1(4)
if(!(q<16))return A.a(B.ag,q)
p=B.ag[q]
o=p>>>5&2047
if(o===100){q=l.bR(9)
if(!(q<512))return A.a(B.ai,q)
p=B.ai[q]
n=B.a.j(p,1)&15
m=B.a.j(p,5)
if(n===12){l.aG(5)
q=l.b1(4)
if(!(q<16))return A.a(B.J,q)
p=B.J[q]
m=B.a.j(p,1)
s+=B.a.j(p,4)&4095
l.aG(4-(m&7))}else if(n===15)throw A.h(A.l("TIFFFaxDecoder2"))
else{s+=m&2047
l.aG(9-n)
if((p&1)===0)r=!0}}else{if(o===200){q=l.b1(2)
if(!(q<4))return A.a(B.af,q)
p=B.af[q]
s+=p>>>5&2047
l.aG(2-(p>>>1&15))}else{s+=o
l.aG(4-(p>>>1&15))}r=!0}}return s},
fp(){var s,r,q=this,p="TIFFFaxDecoder8",o=q.as
if(o===0){if(q.bR(12)!==1)throw A.h(A.l("TIFFFaxDecoder6"))}else if(o===1){o=q.w
o.toString
s=8-o
if(q.bR(s)!==0)throw A.h(A.l(p))
if(s<4)if(q.bR(8)!==0)throw A.h(A.l(p))
while(r=q.bR(8),r!==1)if(r!==0)throw A.h(A.l(p))}if(q.at===0)return 1
else return q.b1(1)},
fa(a,b,c){var s,r,q,p,o,n,m=this
t.dW.a(c)
s=m.e
r=m.d
q=m.y
p=q>0?q-1:0
p=b?(p&4294967294)>>>0:(p|1)>>>0
for(q=s.length,o=p;o<r;o+=2){if(!(o<q))return A.a(s,o)
n=s[o]
n.toString
a.toString
if(n>a){m.y=o
B.c.i(c,0,n)
break}}n=o+1
if(n<r){if(!(n<q))return A.a(s,n)
B.c.i(c,1,s[n])}},
bb(a,b,c,d){var s,r,q,p,o,n=8*b+A.p(c),m=n+d,l=B.a.j(n,3),k=n&7
if(k>0){s=B.a.Y(1,7-k)
r=J.d(a.a,a.d+l)
for(;;){if(!(s>0&&n<m))break
r=(r|s)>>>0
s=s>>>1;++n}a.i(0,l,r)}l=B.a.j(n,3)
for(q=m-7;n<q;l=p){p=l+1
J.a2(a.a,a.d+l,255)
n+=8}while(n<m){l=B.a.j(n,3)
q=J.d(a.a,a.d+l)
o=B.a.Y(1,7-(n&7))
J.a2(a.a,a.d+l,(q|o)>>>0);++n}},
bR(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.r
e===$&&A.c()
s=e.d
r=e.c-s-1
q=f.x
p=f.c
o=0
n=0
if(p===1){q.toString
m=J.d(e.a,s+q)
if(!(q===r)){e=q+1
s=f.r
p=s.a
s=s.d
if(e===r)o=J.d(p,s+e)
else{o=J.d(p,s+e)
e=f.r
n=J.d(e.a,e.d+(q+2))}}}else if(p===2){q.toString
m=B.Y[J.d(e.a,s+q)&255]
if(!(q===r)){e=q+1
s=f.r
p=s.a
s=s.d
if(e===r)o=B.Y[J.d(p,s+e)&255]
else{o=B.Y[J.d(p,s+e)&255]
e=f.r
n=B.Y[J.d(e.a,e.d+(q+2))&255]}}}else throw A.h(A.l("TIFFFaxDecoder7"))
e=f.w
e.toString
l=8-e
k=a-l
if(k>8){j=k-8
i=8}else{i=k
j=0}e=f.x
e.toString
e=f.x=e+1
if(!(l>=0&&l<9))return A.a(B.D,l)
h=B.a.Y(m&B.D[l],k)
if(!(i>=0))return A.a(B.W,i)
g=B.a.a3(o&B.W[i],8-i)
if(j!==0){g=B.a.Y(g,j)
if(!(j<9))return A.a(B.W,j)
g|=B.a.a3(n&B.W[j],8-j)
f.x=e+1
f.w=j}else if(i===8){f.w=0
f.x=e+1}else f.w=i
return(h|g)>>>0},
b1(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.r
h===$&&A.c()
s=h.d
r=h.c-s-1
q=i.x
p=i.c
o=0
if(p===1){q.toString
n=J.d(h.a,s+q)
if(!(q===r)){h=i.r
o=J.d(h.a,h.d+(q+1))}}else if(p===2){q.toString
n=B.Y[J.d(h.a,s+q)&255]
if(!(q===r)){h=i.r
o=B.Y[J.d(h.a,h.d+(q+1))&255]}}else throw A.h(A.l("TIFFFaxDecoder7"))
h=i.w
h.toString
m=8-h
l=a-m
k=m-a
if(k>=0){if(!(m>=0&&m<9))return A.a(B.D,m)
j=B.a.a3(n&B.D[m],k)
h+=a
i.w=h
if(h===8){i.w=0
h=i.x
h.toString
i.x=h+1}}else{if(!(m>=0&&m<9))return A.a(B.D,m)
j=B.a.Y(n&B.D[m],-k)
if(!(l>=0&&l<9))return A.a(B.W,l)
j=(j|B.a.a3(o&B.W[l],8-l))>>>0
h=i.x
h.toString
i.x=h+1
i.w=l}return j},
aG(a){var s,r=this,q=r.w
q.toString
s=q-a
if(s<0){q=r.x
q.toString
r.x=q-1
r.w=8+s}else r.w=s}}
A.iC.prototype={
ih(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=A.x(a0,c,0),a=a0.m()
for(s=d.a,r=0;r<a;++r){q=a0.m()
p=a0.m()
o=a0.l()
if(p>13){a0.d+=4
continue}n=B.bN[p]
if(o*B.U[p]>4)m=a0.l()
else{m=a0.d
a0.d=m+4}l=new A.iB(q,n,o,m,b)
s.i(0,q,l)
if(q===256){k=l.bl()
k=k==null?c:k.h(0)
d.b=k==null?0:k}else if(q===257){k=l.bl()
k=k==null?c:k.h(0)
d.c=k==null?0:k}else if(q===262){j=l.bl()
i=j==null?c:j.h(0)
if(i==null)i=17
if(i<17){if(!(i>=0))return A.a(B.bH,i)
d.d=B.bH[i]}else d.d=B.aV}else if(q===259){k=l.bl()
k=k==null?c:k.h(0)
d.e=k==null?0:k}else if(q===258){k=l.bl()
k=k==null?c:k.h(0)
d.f=k==null?0:k}else if(q===277){k=l.bl()
k=k==null?c:k.h(0)
d.r=k==null?0:k}else if(q===317){k=l.bl()
k=k==null?c:k.h(0)
d.Q=k==null?0:k}else if(q===339){k=l.bl()
j=k==null?c:k.h(0)
if(j==null)j=0
if(!(j>=0&&j<4))return A.a(B.bL,j)
d.x=B.bL[j]}else if(q===320){j=l.bl()
if(j!=null){k=J.rw(B.d.gt(j.bn()))
d.id=k
d.k1=0
k=k.length/3|0
d.k2=k
d.k3=k*2}}}k=d.id
h=k!=null
if(h&&d.d===B.aW)d.r=1
if(d.b===0||d.c===0)return
if(h&&d.f===8){g=k.length
for(h=k.$flags|0,r=0;r<g;++r){f=k[r]
h&2&&A.b(k)
k[r]=f>>>8}}if(d.d===B.aU)d.z=!0
d.w=d.r
if(s.aN(324)){d.ay=d.ce(322)
d.ch=d.ce(323)
d.CW=d.da(324)
d.cx=d.da(325)}else{d.ay=d.d9(322,d.b)
if(!s.aN(278))k=d.ch=d.d9(323,d.c)
else{e=d.ce(278)
if(e===-1){k=d.c
d.ch=k}else{d.ch=e
k=e}}h=d.c
if(k>h)d.ch=h
d.CW=d.da(273)
d.cx=d.da(279)}k=d.b
h=d.ay
d.cy=B.a.a1(k+h-1,h)
h=d.c
k=d.ch
d.db=B.a.a1(h+k-1,k)
d.dy=d.d9(266,1)
d.fr=d.ce(292)
d.fx=d.ce(293)
d.ce(338)
switch(d.d.a){case 0:case 1:s=d.f
if(s===1&&d.r===1)d.y=B.aT
else if(s===4&&d.r===1)d.y=B.kk
else if(B.a.V(s,8)===0){s=d.r
if(s===1)d.y=B.kl
else if(s===2)d.y=B.km
else d.y=B.a6}break
case 2:if(B.a.V(d.f,8)===0){s=d.r
if(s===3)d.y=B.cn
else if(s===4)d.y=B.ko
else d.y=B.a6}break
case 3:s=!1
if(d.r===1)if(d.id!=null){s=d.f
s=s===4||s===8||s===16}if(s)d.y=B.kn
break
case 4:if(d.f===1&&d.r===1)d.y=B.aT
break
case 6:if(d.e===7&&d.f===8&&d.r===3)d.y=B.cn
else{if(s.aN(530)){j=s.k(0,530).bl()
d.as=j.h(0)
s=d.at=j.ac(0,1)}else s=d.at=d.as=2
k=d.as
k===$&&A.c()
if(k*s===1)d.y=B.a6
else if(d.f===8&&d.r===3)d.y=B.kp}break
case 5:if(B.a.V(d.f,8)===0)d.y=B.a6
s=d.r
if(s===4)d.w=3
else if(s===5)d.w=4
break
default:if(B.a.V(d.f,8)===0)d.y=B.a6
break}},
aL(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.x,a1=a0===B.a5,a2=a0===B.h
a0=b.f
if(a0===1)s=B.v
else if(a0===2)s=B.y
else{if(a0===4)a0=B.z
else if(a1&&a0===16)a0=B.C
else if(a1&&a0===32)a0=B.F
else if(a1&&a0===64)a0=B.H
else if(a2&&a0===8)a0=B.M
else if(a2&&a0===16)a0=B.N
else if(a2&&a0===32)a0=B.O
else if(a0===16)a0=B.o
else a0=a0===32?B.I:B.f
s=a0}r=b.id!=null&&b.d===B.aW
q=r?3:b.w
a0=b.b
p=A.W(a,a,s,0,B.i,b.c,a,0,q,a,s,a0,r)
if(r){a0=p.a
a0=a0==null?a:a0.gU()
a0.toString
o=b.id
n=o.length
m=n/3|0
l=b.k1
l===$&&A.c()
k=b.k2
k===$&&A.c()
j=b.k3
j===$&&A.c()
for(i=j,h=k,g=l,f=0;f<m;++f,++g,++h,++i){if(i>=n)break
if(!(g<n))return A.a(o,g)
l=o[g]
if(!(h<n))return A.a(o,h)
a0.b9(f,l,o[h],o[i])}}e=0
d=0
for(;;){a0=b.db
a0===$&&A.c()
if(!(e<a0))break
c=0
for(;;){a0=b.cy
a0===$&&A.c()
if(!(c<a0))break
b.j8(a3,p,c,e);++c;++d}++e}return p},
j8(b5,b6,b7,b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null
if(b3.y===B.aT){b3.iU(b5,b6,b7,b8)
return}p=b3.cy
p===$&&A.c()
o=b8*p+b7
p=b3.CW
if(!(o>=0&&o<p.length))return A.a(p,o)
b5.d=p[o]
p=b3.ay
n=b7*p
m=b3.ch
l=b8*m
k=b3.cx
if(!(o<k.length))return A.a(k,o)
s=k[o]
j=p*m*b3.r
p=b3.f
m=p===16
if(m)j*=2
else if(p===32)j*=4
r=null
if(p===8||m||p===32||p===64){p=b3.e
if(p===1)r=b5
else if(p===5){r=A.v(new Uint8Array(j),!1,b4,0)
q=A.py()
try{q.hc(A.x(b5,s,0),r.a)}catch(i){}if(b3.Q===2)for(h=0;h<b3.ch;++h){g=b3.r
p=b3.ay
f=g*(h*p+1)
e=p*g
for(;g<e;++g){p=r
m=J.d(p.a,p.d+f)
k=r
d=b3.r
d=J.d(k.a,k.d+(f-d))
J.a2(p.a,p.d+f,m+d);++f}}}else if(p===32773){r=A.v(new Uint8Array(j),!1,b4,0)
b3.f0(b5,j,r.a)}else if(p===32946||p===8){c=b5.eo(0,0,s)
p=b3.f
b=p<8?1:B.a.j(p+7,3)
r=A.v(A.nb(c,b3.ay*b3.ch*b3.r*b),!1,b4,0)}else if(p===6||p===7){c=b5.eo(0,0,s)
a=A.pu().aL(t.D.a(c))
if(a!=null)b3.jO(a,b6,n,l,b3.ay,b3.ch)
return}else throw A.h(A.l("Unsupported Compression Type: "+p))
a0=A.i([0,0,0],t.t)
for(a1=l,a2=0;a2<b3.ch;++a2,++a1)for(a3=n,a4=0;a4<b3.ay;++a4,++a3){p=r
if(p.d>=p.c||a3>=b3.b||a1>=b3.c)break
p=b3.r
if(p===1){p=b3.x
if(p===B.a5){p=b3.f
if(p===32){p=r.l()
m=$.S()
m.$flags&2&&A.b(m)
m[0]=p
p=$.ck()
if(0>=p.length)return A.a(p,0)
a5=p[0]}else if(p===64)a5=r.dz()
else if(p===16){p=r.m()
m=$.L
m=m!=null?m:A.R()
if(!(p<m.length))return A.a(m,p)
a5=m[p]}else a5=0
if(a3<b3.b&&a1<b3.c){p=b6.a
if(p!=null)p.aP(a3,a1,a5)}}else{m=b3.f
if(m===8)if(p===B.h){p=r
p=J.d(p.a,p.d++)
m=$.au()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aH()
if(0>=p.length)return A.a(p,0)
a5=p[0]}else{p=r
a5=J.d(p.a,p.d++)}else if(m===16)if(p===B.h){p=r.m()
m=$.at()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aG()
if(0>=p.length)return A.a(p,0)
a5=p[0]}else a5=r.m()
else if(m===32)if(p===B.h){p=r.l()
m=$.S()
m.$flags&2&&A.b(m)
m[0]=p
p=$.ac()
if(0>=p.length)return A.a(p,0)
a5=p[0]}else a5=r.l()
else a5=0
if(b3.d===B.aU){p=b6.a
a6=p==null?b4:p.gF()
a5=(a6==null?0:a6)-a5}if(a3<b3.b&&a1<b3.c){p=b6.a
if(p!=null)p.aP(a3,a1,a5)}}}else if(p===2){p=b3.f
if(p===8){if(b3.x===B.h){p=r
p=J.d(p.a,p.d++)
m=$.au()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aH()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else{p=r
a7=J.d(p.a,p.d++)}if(b3.x===B.h){p=r
p=J.d(p.a,p.d++)
m=$.au()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aH()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else{p=r
a8=J.d(p.a,p.d++)}}else if(p===16){if(b3.x===B.h){p=r.m()
m=$.at()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aG()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else a7=r.m()
if(b3.x===B.h){p=r.m()
m=$.at()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aG()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else a8=r.m()}else if(p===32){if(b3.x===B.h){p=r.l()
m=$.S()
m.$flags&2&&A.b(m)
m[0]=p
p=$.ac()
if(0>=p.length)return A.a(p,0)
a7=p[0]}else a7=r.l()
if(b3.x===B.h){p=r.l()
m=$.S()
m.$flags&2&&A.b(m)
m[0]=p
p=$.ac()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else a8=r.l()}else{a7=0
a8=0}if(a3<b3.b&&a1<b3.c){p=b6.a
if(p!=null)p.az(a3,a1,a7,0,0,a8)}}else if(p===3){p=b3.x
if(p===B.a5){p=b3.f
if(p===32){p=r.l()
m=$.S()
m.$flags&2&&A.b(m)
m[0]=p
p=$.ck()
if(0>=p.length)return A.a(p,0)
a9=p[0]
m[0]=r.l()
b0=p[0]
m[0]=r.l()
b1=p[0]}else{b0=0
b1=0
if(p===64)a9=r.dz()
else if(p===16){p=r.m()
m=$.L
m=m!=null?m:A.R()
if(!(p<m.length))return A.a(m,p)
a9=m[p]
p=r.m()
m=$.L
m=m!=null?m:A.R()
if(!(p<m.length))return A.a(m,p)
b0=m[p]
p=r.m()
m=$.L
m=m!=null?m:A.R()
if(!(p<m.length))return A.a(m,p)
b1=m[p]}else a9=0}if(a3<b3.b&&a1<b3.c){p=b6.a
if(p!=null)p.aH(a3,a1,a9,b0,b1)}}else{m=b3.f
if(m===8){if(p===B.h){p=r
p=J.d(p.a,p.d++)
m=$.au()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aH()
if(0>=p.length)return A.a(p,0)
a9=p[0]}else{p=r
a9=J.d(p.a,p.d++)}if(b3.x===B.h){p=r
p=J.d(p.a,p.d++)
m=$.au()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aH()
if(0>=p.length)return A.a(p,0)
b0=p[0]}else{p=r
b0=J.d(p.a,p.d++)}if(b3.x===B.h){p=r
p=J.d(p.a,p.d++)
m=$.au()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aH()
if(0>=p.length)return A.a(p,0)
b1=p[0]}else{p=r
b1=J.d(p.a,p.d++)}}else if(m===16){if(p===B.h){p=r.m()
m=$.at()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aG()
if(0>=p.length)return A.a(p,0)
a9=p[0]}else a9=r.m()
if(b3.x===B.h){p=r.m()
m=$.at()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aG()
if(0>=p.length)return A.a(p,0)
b0=p[0]}else b0=r.m()
if(b3.x===B.h){p=r.m()
m=$.at()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aG()
if(0>=p.length)return A.a(p,0)
b1=p[0]}else b1=r.m()}else if(m===32){if(p===B.h){p=r.l()
m=$.S()
m.$flags&2&&A.b(m)
m[0]=p
p=$.ac()
if(0>=p.length)return A.a(p,0)
a9=p[0]}else a9=r.l()
if(b3.x===B.h){p=r.l()
m=$.S()
m.$flags&2&&A.b(m)
m[0]=p
p=$.ac()
if(0>=p.length)return A.a(p,0)
b0=p[0]}else b0=r.l()
if(b3.x===B.h){p=r.l()
m=$.S()
m.$flags&2&&A.b(m)
m[0]=p
p=$.ac()
if(0>=p.length)return A.a(p,0)
b1=p[0]}else b1=r.l()}else{a9=0
b0=0
b1=0}if(a3<b3.b&&a1<b3.c){p=b6.a
if(p!=null)p.aH(a3,a1,a9,b0,b1)}}}else if(p>=4)if(b3.x===B.a5){p=b3.f
if(p===32){p=r.l()
m=$.S()
m.$flags&2&&A.b(m)
m[0]=p
p=$.ck()
if(0>=p.length)return A.a(p,0)
a9=p[0]
m[0]=r.l()
b0=p[0]
m[0]=r.l()
b1=p[0]
m[0]=r.l()
b2=p[0]}else{b0=0
b1=0
b2=0
if(p===64)a9=r.dz()
else if(p===16){p=r.m()
m=$.L
m=m!=null?m:A.R()
if(!(p<m.length))return A.a(m,p)
a9=m[p]
p=r.m()
m=$.L
m=m!=null?m:A.R()
if(!(p<m.length))return A.a(m,p)
b0=m[p]
p=r.m()
m=$.L
m=m!=null?m:A.R()
if(!(p<m.length))return A.a(m,p)
b1=m[p]
p=r.m()
m=$.L
m=m!=null?m:A.R()
if(!(p<m.length))return A.a(m,p)
b2=m[p]}else a9=0}if(a3<b3.b&&a1<b3.c){p=b6.a
if(p!=null)p.az(a3,a1,a9,b0,b1,b2)}}else{p=b6.a
a8=p==null?b4:p.gF()
if(a8==null)a8=0
p=b3.f
if(p===8){if(b3.x===B.h){p=r
p=J.d(p.a,p.d++)
m=$.au()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aH()
if(0>=p.length)return A.a(p,0)
a9=p[0]}else{p=r
a9=J.d(p.a,p.d++)}if(b3.x===B.h){p=r
p=J.d(p.a,p.d++)
m=$.au()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aH()
if(0>=p.length)return A.a(p,0)
b0=p[0]}else{p=r
b0=J.d(p.a,p.d++)}if(b3.x===B.h){p=r
p=J.d(p.a,p.d++)
m=$.au()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aH()
if(0>=p.length)return A.a(p,0)
b1=p[0]}else{p=r
b1=J.d(p.a,p.d++)}if(b3.x===B.h){p=r
p=J.d(p.a,p.d++)
m=$.au()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aH()
if(0>=p.length)return A.a(p,0)
b2=p[0]}else{p=r
b2=J.d(p.a,p.d++)}if(b3.r===5)if(b3.x===B.h){p=r
p=J.d(p.a,p.d++)
m=$.au()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aH()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else{p=r
a8=J.d(p.a,p.d++)}}else if(p===16){if(b3.x===B.h){p=r.m()
m=$.at()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aG()
if(0>=p.length)return A.a(p,0)
a9=p[0]}else a9=r.m()
if(b3.x===B.h){p=r.m()
m=$.at()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aG()
if(0>=p.length)return A.a(p,0)
b0=p[0]}else b0=r.m()
if(b3.x===B.h){p=r.m()
m=$.at()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aG()
if(0>=p.length)return A.a(p,0)
b1=p[0]}else b1=r.m()
if(b3.x===B.h){p=r.m()
m=$.at()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aG()
if(0>=p.length)return A.a(p,0)
b2=p[0]}else b2=r.m()
if(b3.r===5)if(b3.x===B.h){p=r.m()
m=$.at()
m.$flags&2&&A.b(m)
m[0]=p
p=$.aG()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else a8=r.m()}else if(p===32){if(b3.x===B.h){p=r.l()
m=$.S()
m.$flags&2&&A.b(m)
m[0]=p
p=$.ac()
if(0>=p.length)return A.a(p,0)
a9=p[0]}else a9=r.l()
if(b3.x===B.h){p=r.l()
m=$.S()
m.$flags&2&&A.b(m)
m[0]=p
p=$.ac()
if(0>=p.length)return A.a(p,0)
b0=p[0]}else b0=r.l()
if(b3.x===B.h){p=r.l()
m=$.S()
m.$flags&2&&A.b(m)
m[0]=p
p=$.ac()
if(0>=p.length)return A.a(p,0)
b1=p[0]}else b1=r.l()
if(b3.x===B.h){p=r.l()
m=$.S()
m.$flags&2&&A.b(m)
m[0]=p
p=$.ac()
if(0>=p.length)return A.a(p,0)
b2=p[0]}else b2=r.l()
if(b3.r===5)if(b3.x===B.h){p=r.l()
m=$.S()
m.$flags&2&&A.b(m)
m[0]=p
p=$.ac()
if(0>=p.length)return A.a(p,0)
a8=p[0]}else a8=r.l()}else{a9=0
b0=0
b1=0
b2=0}if(b3.d===B.co){A.qD(a9,b0,b1,b2,a0)
a9=a0[0]
b0=a0[1]
b1=a0[2]
b2=a8}if(a3<b3.b&&a1<b3.c){p=b6.a
if(p!=null)p.az(a3,a1,a9,b0,b1,b2)}}}}else throw A.h(A.l("Unsupported bitsPerSample: "+p))},
jO(a,b,c,d,e,f){var s,r,q,p
for(s=0;s<f;++s)for(r=s+d,q=0;q<e;++q){p=a.a
p=p==null?null:p.a0(q,s,null)
if(p==null)p=new A.J()
b.c6(q+c,r,p)}},
iU(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=a2.cy
a4===$&&A.c()
r=a8*a4+a7
a4=a2.CW
if(!(r>=0&&r<a4.length))return A.a(a4,r)
a5.d=a4[r]
a4=a2.ay
q=a7*a4
p=a2.ch
o=a8*p
n=a2.cx
if(!(r<n.length))return A.a(n,r)
m=n[r]
s=null
n=a2.e
if(n===32773){l=B.a.V(a4,8)===0?B.a.K(a4,8)*p:(B.a.K(a4,8)+1)*p
s=A.v(new Uint8Array(a4*p),!1,a3,0)
a2.f0(a5,l,s.a)}else if(n===5){s=A.v(new Uint8Array(a4*p),!1,a3,0)
A.py().hc(A.x(a5,m,0),s.a)
if(a2.Q===2)for(k=0;k<a2.c;++k){j=a2.r
i=j*(k*a2.b+1)
for(;j<a2.b*a2.r;++j){a4=s
p=J.d(a4.a,a4.d+i)
n=s
h=a2.r
h=J.d(n.a,n.d+(i-h))
J.a2(a4.a,a4.d+i,p+h);++i}}}else if(n===2){s=A.v(new Uint8Array(a4*p),!1,a3,0)
try{A.oa(a2.dy,a2.ay,a2.ch).ll(s,a5,0,a2.ch)}catch(g){}}else if(n===3){s=A.v(new Uint8Array(a4*p),!1,a3,0)
try{A.oa(a2.dy,a2.ay,a2.ch).lm(s,a5,0,a2.ch,a2.fr)}catch(g){}}else if(n===4){s=A.v(new Uint8Array(a4*p),!1,a3,0)
try{A.oa(a2.dy,a2.ay,a2.ch).ls(s,a5,0,a2.ch,a2.fx)}catch(g){}}else if(n===8||n===32946)s=A.v(A.nb(a5.eo(0,0,m),B.a.j(a2.ay+7,3)*a2.ch),!1,a3,0)
else if(n===1)s=a5
else throw A.h(A.l("Unsupported Compression Type: "+n))
f=new A.l3(s)
e=a6.gF()
a4=a2.z
d=a4?e:0
c=a4?0:e
for(b=o,a=0;a<a2.ch;++a,++b){for(a0=q,a1=0;a1<a2.ay;++a1,++a0){a4=a6.a
p=a4==null
n=p?a3:a4.b
if(b<(n==null?0:n)){a4=p?a3:a4.a
a4=a0>=(a4==null?0:a4)}else a4=!0
if(a4)break
a4=f.ak(1)
p=a6.a
if(a4===0){if(p!=null)p.aH(a0,b,d,0,0)}else if(p!=null)p.aH(a0,b,c,0,0)}f.c=0}},
f0(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.L.a(c)
for(s=J.aF(c),r=0,q=0;q<b;){p=r+1
o=J.d(a.a,a.d+r)
n=$.au()
n.$flags&2&&A.b(n)
n[0]=o
o=$.aH()
if(0>=o.length)return A.a(o,0)
m=o[0]
if(m>=0&&m<=127)for(o=m+1,r=p,l=0;l<o;++l,q=k,r=p){k=q+1
p=r+1
s.i(c,q,J.d(a.a,a.d+r))}else{o=m<=-1&&m>=-127
r=p+1
if(o){j=J.d(a.a,a.d+p)
for(o=-m+1,l=0;l<o;++l,q=k){k=q+1
s.i(c,q,j)}}}}},
d9(a,b){var s=this.a
if(!s.aN(a))return b
s=s.k(0,a).bl()
s=s==null?null:s.h(0)
return s==null?0:s},
ce(a){return this.d9(a,0)},
da(a){var s,r=this.a
if(!r.aN(a))return null
s=r.k(0,a)
r=s.bl()
r.toString
return A.nR(s.c,r.gbC(r),t.p)}}
A.cZ.prototype={
a7(){return"TiffFormat."+this.b}}
A.af.prototype={
a7(){return"TiffPhotometricType."+this.b}}
A.b3.prototype={
a7(){return"TiffImageType."+this.b}}
A.d_.prototype={$iH:1,
gR(){return this.a},
gN(){return this.b}}
A.kj.prototype={
hc(a,b){var s,r,q,p,o,n,m,l,k=this
t.L.a(b)
k.r=b
s=J.bW(b)
k.w=0
r=t.D.a(a.a)
k.e=r
q=k.f=r.length
k.b=a.d
if(0>=q)return A.a(r,0)
if(r[0]===0){if(1>=q)return A.a(r,1)
r=r[1]===1}else r=!1
if(r)throw A.h(A.l("Invalid LZW Data"))
k.fi()
k.d=k.c=0
p=k.dZ()
r=k.x
o=0
for(;;){if(!(p!==257&&k.w<s))break
if(p===256){k.fi()
p=k.dZ()
k.as=0
if(p===257)break
J.a2(k.r,k.w++,p)
o=p}else{q=k.Q
q.toString
if(p<q){k.fd(p)
q=k.as
q===$&&A.c()
n=q-1
for(;n>=0;--n){q=k.r
m=k.w++
if(!(n<4096))return A.a(r,n)
J.a2(q,m,r[n])}q=k.as-1
if(!(q>=0&&q<4096))return A.a(r,q)
k.eG(o,r[q])}else{k.fd(o)
q=k.as
q===$&&A.c()
n=q-1
for(;n>=0;--n){q=k.r
m=k.w++
if(!(n<4096))return A.a(r,n)
J.a2(q,m,r[n])}q=k.r
m=k.w++
l=k.as-1
if(!(l>=0&&l<4096))return A.a(r,l)
J.a2(q,m,r[l])
l=k.as-1
if(!(l>=0&&l<4096))return A.a(r,l)
k.eG(o,r[l])}o=p}p=k.dZ()}},
eG(a,b){var s,r=this,q=r.y
q===$&&A.c()
s=r.Q
s.toString
q.$flags&2&&A.b(q)
if(!(s<4096))return A.a(q,s)
q[s]=b
q=r.z
q===$&&A.c()
q.$flags&2&&A.b(q)
q[s]=a
s=r.Q=s+1
if(s===511)r.a=10
else if(s===1023)r.a=11
else if(s===2047)r.a=12},
fd(a){var s,r,q,p,o,n,m,l=this
l.as=0
s=l.x
l.as=1
r=l.y
r===$&&A.c()
if(!(a<4096))return A.a(r,a)
q=r[a]
s.$flags&2&&A.b(s)
s[0]=q
q=l.z
q===$&&A.c()
p=q[a]
for(o=1;p!==4098;o=n){n=o+1
l.as=n
if(!(p>=0&&p<4096))return A.a(r,p)
m=r[p]
if(!(o<4096))return A.a(s,o)
s[o]=m
p=q[p]}},
dZ(){var s,r,q,p,o=this,n=o.b,m=o.f
m===$&&A.c()
if(n>=m)return 257
for(;s=o.d,r=o.a,s<r;n=p){if(n>=m)return 257
r=o.c
q=o.e
q===$&&A.c()
p=n+1
o.b=p
if(!(n>=0&&n<q.length))return A.a(q,n)
o.c=(r<<8>>>0)+q[n]>>>0
o.d=s+8}n=s-r
o.d=n
n=B.a.a3(o.c,n)
r-=9
if(!(r>=0&&r<4))return A.a(B.bt,r)
return n&B.bt[r]},
fi(){var s,r,q=this
q.y=new Uint8Array(4096)
s=new Uint32Array(4096)
q.z=s
B.n.O(s,0,4096,4098)
for(s=q.y,r=0;r<256;++r){s.$flags&2&&A.b(s)
s[r]=r}q.a=9
q.Q=258}}
A.l4.prototype={
aq(a){return A.M(new A.l7(this,a),t.in)},
ai(a){return A.M(new A.l5(this,a),t.H)},
l_(a){var s,r,q=this,p=q.a
if(p==null)return null
p=p.f
if(!(a<p.length))return A.a(p,a)
s=p[a]
p=q.d
A.as(s.b,s.c,p,!1)
A.as(s.ay,s.ch,p,!1)
p=q.c
p===$&&A.c()
r=s.aL(p)
p=q.b
if(p!=null)r.e=p
return r},
aL(a){return A.M(new A.l6(this,a,null),t.H)},
kZ(a,b){var s,r,q,p,o,n,m=this,l=null,k=A.v(a,!1,l,0)
m.c=k
k=m.a=m.ft(k)
if(k==null)return l
k=k.f
s=k.length
r=new A.bJ(m.d)
for(q=0;q<k.length;k.length===s||(0,A.P)(k),++q){p=k[q]
r.c2(0,p.b,p.c)}o=m.ai(0)
if(o==null)return l
o.e=A.jA(A.v(a,!1,l,0))
o.w=B.be
for(n=1;n<s;++n)o.aQ(m.ai(n))
return o},
fu(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=A.i([],t.fZ),e=new A.d_(f),d=a.c
if(d-a.d<8)return g
q=a.m()
if(q!==18761&&q!==19789)return g
if(q===19789)a.e=!0
else a.e=!1
p=a.m()
e.d=p
if(p!==42)return g
o=a.l()
n=A.x(a,g,0)
n.d=o
s=n
p=t.p
m=A.nP(p)
l=t.e8
for(;;){if(!(o!==0&&o<d&&f.length<1024&&m.B(0,o)))break
r=null
try{k=new A.iC(A.F(p,l),B.aV,B.cm,B.kq)
k.ih(s)
r=k
j=r
if(!(j.b!==0&&j.c!==0))break}catch(i){break}B.c.B(f,r)
j=f.length
if(j===1){if(0>=j)return A.a(f,0)
h=f[0]
e.a=h.b
if(0>=j)return A.a(f,0)
e.b=h.c}if(b)break
o=s.l()
if(o!==0)s.d=o}return f.length!==0?e:g},
ft(a){return this.fu(a,!1)}}
A.l7.prototype={
$0(){var s=this.a,r=this.b,q=A.v(r,!1,null,0)
s.c=q
q=s.ft(q)
s.a=q
if(q!=null)s.b=A.jA(A.v(r,!1,null,0))
return s.a},
$S:65}
A.l5.prototype={
$0(){return this.a.l_(this.b)},
$S:1}
A.l6.prototype={
$0(){return this.a.kZ(this.b,this.c)},
$S:1}
A.lc.prototype={
cE(){var s,r=this.a,q=r.bm()
if((q&1)!==0)return!1
if((q>>>1&7)>3)return!1
if((q>>>4&1)===0)return!1
this.f.d=q>>>5
if(r.bm()!==2752925)return!1
s=this.b
s.a=r.m()
s.b=r.m()
return!0},
bI(){var s,r,q,p,o=this,n=null
if(!o.jz())return n
s=o.b
r=s.a
o.d=A.W(n,n,B.f,0,B.i,s.b,n,0,4,n,B.f,r,!1)
o.jJ()
if(!o.jX())return n
r=s.w
if(r.length!==0){q=A.v(new A.aw(r),!1,n,0)
r=o.d
r.toString
r.e=A.jA(q)}p=s.r
if(p!=null)o.d.c=new A.bF("ICC_PROFILE",B.ae,p)
return o.d},
jz(){var s,r,q,p,o=this
if(!o.cE())return!1
o.fr=A.uH()
for(s=o.dy,r=0;r<4;++r){q=new Int32Array(2)
p=new Int32Array(2)
B.c.i(s,r,new A.iJ(q,p,new Int32Array(2)))}o.y=o.Q=0
s=o.b
q=s.a
o.z=q
s=s.b
o.as=s
o.at=q+15>>>4
o.ax=s+15>>>4
o.k1=0
s=o.a
q=o.f
p=q.d
p===$&&A.c()
p=A.pW(s.aE(p))
o.c=p
s.d+=q.d
p.a4(1)
o.c.a4(1)
o.k6(o.x,o.fr)
o.jW()
if(!o.jZ(s))return!1
o.k0()
o.c.a4(1)
o.k_()
return!0},
k6(a,b){var s,r,q,p=this,o=p.c
o===$&&A.c()
o=o.a4(1)!==0
a.a=o
if(o){a.b=p.c.a4(1)!==0
if(p.c.a4(1)!==0){a.c=p.c.a4(1)!==0
for(o=a.d,s=0;s<4;++s){if(p.c.a4(1)!==0){r=p.c
q=r.a4(7)
r=r.a4(1)===1?-q:q}else r=0
o.$flags&2&&A.b(o)
o[s]=r}for(o=a.e,s=0;s<4;++s){if(p.c.a4(1)!==0){r=p.c
q=r.a4(6)
r=r.a4(1)===1?-q:q}else r=0
o.$flags&2&&A.b(o)
o[s]=r}}if(a.b)for(s=0;s<3;++s){o=b.a
r=p.c.a4(1)!==0?p.c.a4(8):255
o.$flags&2&&A.b(o)
o[s]=r}}else a.b=!1
return!0},
jW(){var s,r,q,p=this,o=p.w,n=p.c
n===$&&A.c()
o.a=n.a4(1)!==0
o.b=p.c.a4(6)
o.c=p.c.a4(3)
n=p.c.a4(1)!==0
o.d=n
if(n)if(p.c.a4(1)!==0){for(n=o.e,s=0;s<4;++s)if(p.c.a4(1)!==0){r=p.c
q=r.a4(6)
r=r.a4(1)===1?-q:q
n.$flags&2&&A.b(n)
n[s]=r}for(n=o.f,s=0;s<4;++s)if(p.c.a4(1)!==0){r=p.c
q=r.a4(6)
r=r.a4(1)===1?-q:q
n.$flags&2&&A.b(n)
n[s]=r}}if(o.b===0)n=0
else n=o.a?1:2
p.aI=n
return!0},
jZ(a){var s,r,q,p,o,n,m,l=a.c-a.d,k=this.c
k===$&&A.c()
k=B.a.P(1,k.a4(2))
this.cy=k
s=k-1
r=s*3
if(l<r)return!1
for(k=this.db,q=0,p=0;p<s;++p,r=n){o=a.cU(3,q)
n=r+((J.d(o.a,o.d)|J.d(o.a,o.d+1)<<8|J.d(o.a,o.d+2)<<16)>>>0)
if(n>l)n=l
m=new A.fD(a.bX(n-r,r))
m.b=254
m.c=0
m.d=-8
B.c.i(k,p,m)
q+=3}B.c.i(k,s,A.pW(a.bX(l-r,a.d-a.b+r)))
return r<l},
k0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.c
e===$&&A.c()
s=e.a4(7)
r=f.c.a4(1)!==0?f.c.co(4):0
q=f.c.a4(1)!==0?f.c.co(4):0
p=f.c.a4(1)!==0?f.c.co(4):0
o=f.c.a4(1)!==0?f.c.co(4):0
n=f.c.a4(1)!==0?f.c.co(4):0
m=f.x
for(e=f.dy,l=m.d,k=0;k<4;++k){if(m.a){j=l[k]
if(!m.c)j+=s}else{if(k>0){i=e[0]
if(!(k>=0&&k<4))return A.a(e,k)
e[k]=i
continue}j=s}h=e[k]
i=h.a
g=j+r
if(g<0)g=0
else if(g>127)g=127
g=B.aJ[g]
i.$flags&2&&A.b(i)
i[0]=g
if(j<0)g=0
else g=j>127?127:j
i[1]=B.aK[g]
g=h.b
i=j+q
if(i<0)i=0
else if(i>127)i=127
i=B.aJ[i]
g.$flags&2&&A.b(g)
g[0]=i*2
i=j+p
if(i<0)i=0
else if(i>127)i=127
g[1]=B.aK[i]*101581>>>16
if(g[1]<8)g[1]=8
i=h.c
g=j+o
if(g<0)g=0
else if(g>117)g=117
g=B.aJ[g]
i.$flags&2&&A.b(i)
i[0]=g
g=j+n
if(g<0)g=0
else if(g>127)g=127
i[1]=B.aK[g]}},
k_(){var s,r,q,p,o,n,m=this,l=m.fr
for(s=0;s<4;++s)for(r=0;r<8;++r)for(q=0;q<3;++q)for(p=0;p<11;++p){o=m.c
o===$&&A.c()
n=o.ae(B.j1[s][r][q][p])!==0?m.c.a4(8):B.ed[s][r][q][p]
o=l.b
if(!(s<o.length))return A.a(o,s)
o=o[s]
if(!(r<o.length))return A.a(o,r)
o=o[r].a
if(!(q<o.length))return A.a(o,q)
o=o[q]
o.$flags&2&&A.b(o)
o[p]=n}o=m.c
o===$&&A.c()
o=o.a4(1)!==0
m.fx=o
if(o)m.fy=m.c.a4(8)},
ke(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.aI
f.toString
if(f>0){s=g.w
for(f=s.e,r=s.f,q=g.x,p=q.e,o=0;o<4;++o){if(q.a){n=p[o]
if(!q.c){m=s.b
m.toString
n+=m}}else n=s.b
for(l=0;l<=1;++l){m=g.bA
m===$&&A.c()
if(!(o<m.length))return A.a(m,o)
k=m[o][l]
m=s.d
m===$&&A.c()
if(m){n.toString
j=n+f[0]
if(l!==0)j+=r[0]}else j=n
j.toString
if(j<0)j=0
else if(j>63)j=63
if(j>0){m=s.c
m===$&&A.c()
if(m>0){i=m>4?B.a.j(j,2):B.a.j(j,1)
h=9-m
if(i>h)i=h}else i=j
if(i<1)i=1
k.b=i
k.a=2*j+i
if(j>=40)m=2
else m=j>=15?1:0
k.d=m}else k.a=0
k.c=l!==0}}}},
jJ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.b,c=d.at
if(c!=null)f.bJ=c
c=t.jz
s=J.ay(4,c)
for(r=t.by,q=0;q<4;++q)s[q]=A.i([new A.bR(),new A.bR()],r)
f.bA=t.mL.a(s)
r=f.at
r.toString
s=J.ay(r,t.ij)
for(p=0;p<r;++p){o=new Uint8Array(16)
n=new Uint8Array(8)
s[p]=new A.fH(o,n,new Uint8Array(8))}f.k2=t.f4.a(s)
f.ok=new Uint8Array(832)
r=f.at
r.toString
f.go=new Uint8Array(4*r)
o=f.p4=16*r
r=8*r
f.R8=r
n=f.aI
n.toString
if(!(n<3))return A.a(B.T,n)
m=B.T[n]
l=m*o
k=(m/2|0)*r
f.p1=A.v(new Uint8Array(16*o+l),!1,e,l)
r=f.R8
r.toString
f.p2=A.v(new Uint8Array(8*r+k),!1,e,k)
r=f.R8
r.toString
f.p3=A.v(new Uint8Array(8*r+k),!1,e,k)
r=d.a
f.RG=A.v(new Uint8Array(r),!1,e,0)
j=d.a+1>>>1
f.rx=A.v(new Uint8Array(j),!1,e,0)
f.ry=A.v(new Uint8Array(j),!1,e,0)
d=f.aI
d.toString
if(!(d<3))return A.a(B.T,d)
i=B.T[d]
if(d===2)f.ch=f.ay=0
else{d=B.a.K(f.y-i,16)
f.ay=d
r=B.a.K(f.Q-i,16)
f.ch=r
if(d<0)f.ay=0
if(r<0)f.ch=0}d=B.a.K(f.as+15+i,16)
f.cx=d
r=B.a.K(f.z+15+i,16)
f.CW=r
o=f.at
o.toString
if(r>o)f.CW=o
r=f.ax
r.toString
if(d>r)f.cx=r
h=o+1
s=J.ay(h,t.f_)
for(p=0;p<h;++p)s[p]=new A.fF()
f.k3=t.jt.a(s)
d=f.at
d.toString
s=J.ay(d,t.h2)
for(p=0;p<d;++p){r=new Int16Array(384)
s[p]=new A.fG(r,new Uint8Array(16))}f.bz=t.as.a(s)
d=f.at
d.toString
s=J.ay(d,t.nC)
for(p=0;p<d;++p)s[p]=new A.bR()
f.k4=c.a(s)
f.ke()
d=$.oI()
c=$.oJ()
r=$.oK()
o=$.oL()
n=$.nA()
g=new Int32Array(16)
A.u7()
f.e=new A.ld(d,c,r,o,n,g)
return!0},
jX(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
e.y2=0
s=e.id
r=e.x
q=e.db
p=0
for(;;){o=e.cx
o.toString
if(!(p<o))break
o=e.cy
o===$&&A.c()
o=(p&o-1)>>>0
if(!(o>=0&&o<8))return A.a(q,o)
n=q[o]
for(;;){p=e.y1
o=e.at
o.toString
if(!(p<o))break
o=e.k3
o===$&&A.c()
m=o.length
if(0>=m)return A.a(o,0)
l=o[0]
k=1+p
if(!(k<m))return A.a(o,k)
j=o[k]
k=e.bz
k===$&&A.c()
if(!(p<k.length))return A.a(k,p)
i=k[p]
if(r.b){p=e.c
p===$&&A.c()
p=p.ae(e.fr.a[0])
o=e.c
m=e.fr
e.k1=p===0?o.ae(m.a[1]):2+o.ae(m.a[2])}p=e.fx
p===$&&A.c()
if(p){p=e.c
p===$&&A.c()
o=e.fy
o===$&&A.c()
h=p.ae(o)!==0}else h=!1
e.jY()
if(!h)h=e.k5(j,n)
else{l.a=j.a=0
p=i.b
p===$&&A.c()
if(!p)l.b=j.b=0
i.f=i.e=0}p=e.aI
p.toString
if(p>0){p=e.bA
p===$&&A.c()
o=e.k1
o===$&&A.c()
if(!(o<p.length))return A.a(p,o)
o=p[o]
p=i.b
p===$&&A.c()
g=o[p?1:0]
o=e.k4
o===$&&A.c()
m=e.y1
if(!(m<o.length))return A.a(o,m)
m=o[m]
m.a=g.a
m.b=g.b
m.d=g.d
m.c=g.c||!h}++e.y1}p=e.k3
p===$&&A.c()
if(0>=p.length)return A.a(p,0)
p=p[0]
p.b=p.a=0
B.d.O(s,0,4,0)
e.y1=0
e.kL()
p=e.aI
p.toString
f=!1
if(p>0){p=e.y2
o=e.ch
o===$&&A.c()
if(p>=o){o=e.cx
o.toString
o=p<=o
f=o}}if(!e.ju(f))return!1
p=++e.y2}return!0},
kL(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=a9.y2,b2=a9.ok
b2===$&&A.c()
s=A.v(b2,!1,b0,40)
r=A.v(b2,!1,b0,584)
q=A.v(b2,!1,b0,600)
p=a9.p1
p===$&&A.c()
o=t.D
n=o.a(p.a)
p=a9.p2
p===$&&A.c()
m=o.a(p.a)
p=a9.p3
p===$&&A.c()
l=o.a(p.a)
p=a9.p4
p.toString
o=a9.R8
o.toString
k=b1>0
j=b2.$flags|0
i=0
for(;;){h=a9.at
h.toString
if(!(i<h))break
h=a9.bz
h===$&&A.c()
if(!(i<h.length))return A.a(h,i)
g=h[i]
if(i>0){for(f=-1;f<16;++f){h=40+f*32
A.aE(b2,h-4,b2,h+12,4)}for(f=-1;f<8;++f){h=f*32
e=584+h
A.aE(b2,e-4,b2,e+4,4)
h=600+h
A.aE(b2,h-4,b2,h+4,4)}}else{for(f=0;f<16;++f){h=40+f*32-1
j&2&&A.b(b2)
if(!(h<832))return A.a(b2,h)
b2[h]=129}for(f=0;f<8;++f){h=f*32
e=584+h-1
j&2&&A.b(b2)
if(!(e<832))return A.a(b2,e)
b2[e]=129
h=600+h-1
if(!(h<832))return A.a(b2,h)
b2[h]=129}if(k){j&2&&A.b(b2)
b2[567]=129
b2[551]=129
b2[7]=129}}h=a9.k2
h===$&&A.c()
if(!(i<h.length))return A.a(h,i)
d=h[i]
c=g.a
b=g.e
if(k){A.aE(b2,8,d.a,0,16)
A.aE(b2,552,d.b,0,8)
A.aE(b2,568,d.c,0,8)}else if(i===0){B.d.O(b2,7,28,127)
B.d.O(b2,551,560,127)
B.d.O(b2,567,576,127)}h=g.b
h===$&&A.c()
if(h){if(k){h=a9.at
h.toString
if(i>=h-1)B.d.O(b2,24,28,d.a[15])
else{h=a9.k2
e=i+1
if(!(e<h.length))return A.a(h,e)
A.aE(b2,24,h[e].a,0,4)}}A.aE(b2,152,b2,24,4)
A.aE(b2,280,b2,24,4)
A.aE(b2,408,b2,24,4)
for(h=g.c,a=0;a<16;++a,b=b<<2>>>0){a0=A.x(s,b0,B.c2[a])
e=h[a]
if(!(e<10))return A.a(B.bS,e)
B.bS[e].$1(a0)
b.toString
e=a*16
a9.f3(b,new A.ai(c,e,Math.min(384,384),e,!1),a0)}}else{h=A.pY(i,b1,g.c[0])
h.toString
if(!(h<7))return A.a(B.c1,h)
B.c1[h].$1(s)
if(b!==0)for(a=0;a<16;++a,b=b<<2>>>0){a0=A.x(s,b0,B.c2[a])
b.toString
h=a*16
a9.f3(b,new A.ai(c,h,Math.min(384,384),h,!1),a0)}}h=g.f
h===$&&A.c()
e=A.pY(i,b1,g.d)
e.toString
if(!(e<7))return A.a(B.aM,e)
B.aM[e].$1(r)
B.aM[e].$1(q)
e=Math.min(384,384)
a1=new A.ai(c,256,e,256,!1)
if((h&255)!==0){a2=a9.e
if((h&170)!==0){a2===$&&A.c()
a2.bD(a1,r)
a2.bD(A.x(a1,b0,16),A.x(r,b0,4))
a3=A.x(a1,b0,32)
a4=A.x(r,b0,128)
a2.bD(a3,a4)
a2.bD(A.x(a3,b0,16),A.x(a4,b0,4))}else{a2===$&&A.c()
a2.hC(a1,r)}}a5=new A.ai(c,320,e,320,!1)
h=h>>>8
if((h&255)!==0){e=a9.e
if((h&170)!==0){e===$&&A.c()
e.bD(a5,q)
e.bD(A.x(a5,b0,16),A.x(q,b0,4))
h=A.x(a5,b0,32)
a2=A.x(q,b0,128)
e.bD(h,a2)
e.bD(A.x(h,b0,16),A.x(a2,b0,4))}else{e===$&&A.c()
e.hC(a5,q)}}h=a9.ax
h.toString
if(b1<h-1){A.aE(d.a,0,b2,520,16)
A.aE(d.b,0,b2,808,8)
A.aE(d.c,0,b2,824,8)}a6=a9.p1.d+i*16
h=i*8
a7=a9.p2.d+h
a8=a9.p3.d+h
for(f=0;f<16;++f)A.aE(n,a6+f*p,b2,40+f*32,16)
for(f=0;f<8;++f){h=f*o
e=f*32
A.aE(m,a7+h,b2,584+e,8)
A.aE(l,a8+h,b2,600+e,8)}++i}},
f3(a,b,c){var s,r,q,p,o,n
switch(a>>>30){case 3:s=this.e
s===$&&A.c()
s.m8(b,c,!1)
break
case 2:this.e===$&&A.c()
r=J.d(b.a,b.d)+4
q=A.lf(J.d(b.a,b.d+4),35468)
p=A.lf(J.d(b.a,b.d+4),85627)
o=A.lf(J.d(b.a,b.d+1),35468)
n=A.lf(J.d(b.a,b.d+1),85627)
A.lh(c,0,r+p,n,o)
A.lh(c,1,r+q,n,o)
A.lh(c,2,r-q,n,o)
A.lh(c,3,r-p,n,o)
break
case 1:s=this.e
s===$&&A.c()
s.cN(b,c)
break
default:break}},
jh(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.p4
d.toString
s=e.k4
s===$&&A.c()
if(!(a>=0&&a<s.length))return A.a(s,a)
r=s[a]
s=e.p1
s===$&&A.c()
q=t.D
p=q.a(s.a)
o=s.d+a*16
n=r.a
if(n===0)return
if(e.aI===1){if(a>0){s=e.e
s===$&&A.c()
s.ex(p,o,d,n+4)}if(r.c){s=e.e
s===$&&A.c()
s.hQ(p,o,d,n)}if(b>0){s=e.e
s===$&&A.c()
s.ey(p,o,d,n+4)}if(r.c){s=e.e
s===$&&A.c()
s.hR(p,o,d,n)}}else{m=r.b
s=e.R8
s.toString
l=e.p2
l===$&&A.c()
k=q.a(l.a)
j=a*8
i=l.d+j
l=e.p3
l===$&&A.c()
h=q.a(l.a)
g=l.d+j
f=r.d
if(a>0){q=e.e
q===$&&A.c()
l=n+4
q.cb(p,o,1,d,16,l,m,f)
q.cb(k,i,1,s,8,l,m,f)
q.cb(h,g,1,s,8,l,m,f)}if(r.c){q=e.e
q===$&&A.c()
q.lC(p,o,d,n,m,f)
q.ca(k,i+4,1,s,8,n,m,f)
q.ca(h,g+4,1,s,8,n,m,f)}if(b>0){q=e.e
q===$&&A.c()
l=n+4
q.cb(p,o,d,1,16,l,m,f)
q.cb(k,i,s,1,8,l,m,f)
q.cb(h,g,s,1,8,l,m,f)}if(r.c){q=e.e
q===$&&A.c()
q.mc(p,o,d,n,m,f)
d=4*s
q.ca(k,i+d,s,1,8,n,m,f)
q.ca(h,g+d,s,1,8,n,m,f)}}},
js(){var s,r=this,q=r.ay
q===$&&A.c()
s=q
for(;;){q=r.CW
q.toString
if(!(s<q))break
r.jh(s,r.y2);++s}},
ju(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.aI
a1.toString
if(!(a1<3))return A.a(B.T,a1)
s=B.T[a1]
a1=a.p4
a1.toString
r=s*a1
a1=a.R8
a1.toString
q=(s/2|0)*a1
a1=a.p1
a1===$&&A.c()
p=-r
o=A.x(a1,a0,p)
a1=a.p2
a1===$&&A.c()
n=-q
m=A.x(a1,a0,n)
a1=a.p3
a1===$&&A.c()
l=A.x(a1,a0,n)
k=a.y2
a1=a.cx
a1.toString
j=k*16
i=(k+1)*16
if(a2)a.js()
if(k!==0){j-=s
a.to=A.x(o,a0,0)
a.x1=A.x(m,a0,0)
a.x2=A.x(l,a0,0)}else{a.to=A.x(a.p1,a0,0)
a.x1=A.x(a.p2,a0,0)
a.x2=A.x(a.p3,a0,0)}a1=k<a1-1
if(a1)i-=s
h=a.as
if(i>h)i=h
a.xr=null
if(a.bJ!=null&&j<i){g=a.xr=a.j9(j,i-j)
if(g==null)return!1}else g=a0
f=a.Q
if(j<f){e=f-j
d=a.to
d===$&&A.c()
c=d.d
b=a.p4
b.toString
d.d=c+b*e
b=a.x1
b===$&&A.c()
c=b.d
d=a.R8
d.toString
d*=B.a.j(e,1)
b.d=c+d
c=a.x2
c===$&&A.c()
c.d+=d
if(g!=null)g.d=g.d+a.b.a*e
j=f}if(j<i){d=a.to
d===$&&A.c()
c=d.d
b=a.y
d.d=c+b
c=a.x1
c===$&&A.c()
d=b>>>1
c.d=c.d+d
c=a.x2
c===$&&A.c()
c.d+=d
if(g!=null)g.d+=b
a.kl(j-f,a.z-b,i-j)}if(a1){a1=a.p1
g=a.p4
g.toString
a1.ck(p,r,o,16*g)
g=a.p2
p=a.R8
p.toString
g.ck(n,q,m,8*p)
p=a.p3
g=a.R8
g.toString
p.ck(n,q,l,8*g)}return!0},
kl(a,b,c){if(b<=0||c<=0)return!1
this.jj(a,b,c)
this.ji(a,b,c)
return!0},
dM(a){var s
if((a&-4194304)>>>0===0)s=B.a.j(a,14)
else s=a<0?0:255
return s},
bT(a,b,c,d,e){var s,r,q,p
t.D.a(d)
s=19077*a
r=this.dM(s+26149*c+-3644112)
d.$flags&2&&A.b(d)
q=d.length
if(!(e>=0&&e<q))return A.a(d,e)
d[e]=r
r=e+1
p=this.dM(s-6419*b-13320*c+2229552)
if(!(r<q))return A.a(d,r)
d[r]=p
p=e+2
s=this.dM(s+33050*b+-4527440)
if(!(p<q))return A.a(d,p)
d[p]=s
s=e+3
if(!(s<q))return A.a(d,s)
d[s]=255},
df(c2,c3,c4,c5,c6,c7,c8,c9,d0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this,a5=null,a6=t.D,a7=a6.a(c2.a),a8=c2.d,a9=a6.a(c4.a),b0=c4.d,b1=a6.a(c5.a),b2=c5.d,b3=a6.a(c6.a),b4=c6.d,b5=a6.a(c7.a),b6=c7.d,b7=a6.a(c8.a),b8=c8.d,b9=c3==null,c0=b9?a5:a6.a(c3.a),c1=b9?a5:c3.d
if(c1==null)c1=0
b9=c9==null
s=b9?a5:a6.a(c9.a)
r=b9?a5:c9.d
if(r==null)r=0
a6=d0-1
q=B.a.j(a6,1)
b9=a9.length
if(!(b0>=0&&b0<b9))return A.a(a9,b0)
p=a9[b0]
o=b1.length
if(!(b2>=0&&b2<o))return A.a(b1,b2)
n=(p|b1[b2]<<16)>>>0
p=b3.length
if(!(b4>=0&&b4<p))return A.a(b3,b4)
m=b3[b4]
l=b5.length
if(!(b6>=0&&b6<l))return A.a(b5,b6)
k=(m|b5[b6]<<16)>>>0
j=3*n+k+131074>>>2
m=a7.length
if(!(a8>=0&&a8<m))return A.a(a7,a8)
a4.bT(a7[a8],j&255,j>>>16,b7,b8)
i=c0!=null
if(i){j=3*k+n+131074>>>2
if(!(c1>=0&&c1<c0.length))return A.a(c0,c1)
h=c0[c1]
s.toString
a4.bT(h,j&255,j>>>16,s,r)}for(g=1;g<=q;++g,k=d,n=e){h=b0+g
if(!(h<b9))return A.a(a9,h)
h=a9[h]
f=b2+g
if(!(f<o))return A.a(b1,f)
e=(h|b1[f]<<16)>>>0
f=b4+g
if(!(f<p))return A.a(b3,f)
f=b3[f]
h=b6+g
if(!(h<l))return A.a(b5,h)
d=(f|b5[h]<<16)>>>0
c=n+e+k+d+524296
b=c+2*(e+k)>>>3
a=c+2*(n+d)>>>3
j=b+n>>>1
a0=a+e>>>1
h=2*g
f=a8+h
a1=f-1
if(!(a1>=0&&a1<m))return A.a(a7,a1)
a2=(h-1)*4
a4.bT(a7[a1],j&255,j>>>16,b7,b8+a2)
if(!(f<m))return A.a(a7,f)
a1=h*4
a4.bT(a7[f],a0&255,a0>>>16,b7,b8+a1)
if(i){j=a+k>>>1
a0=b+d>>>1
h=c1+h
f=h-1
a3=c0.length
if(!(f>=0&&f<a3))return A.a(c0,f)
f=c0[f]
s.toString
a4.bT(f,j&255,j>>>16,s,r+a2)
if(!(h>=0&&h<a3))return A.a(c0,h)
a4.bT(c0[h],a0&255,a0>>>16,s,r+a1)}}if((d0&1)===0){j=3*n+k+131074>>>2
b9=a8+d0-1
if(!(b9>=0&&b9<m))return A.a(a7,b9)
a6*=4
a4.bT(a7[b9],j&255,j>>>16,b7,b8+a6)
if(i){j=3*k+n+131074>>>2
b9=c1+d0-1
if(!(b9>=0&&b9<c0.length))return A.a(c0,b9)
b9=c0[b9]
s.toString
a4.bT(b9,j&255,j>>>16,s,r+a6)}}},
ji(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.xr
if(f==null)return
s=t.D.a(f.a)
r=f.d
if(a===0){q=c-1
p=a}else{p=a-1
r-=g.b.a
q=c}f=g.Q
o=g.as
if(f+a+c===o)q=o-f-p
n=g.d.Z()
m=g.d.gR()*4
for(f=g.b.a,o=s.length,l=n.$flags|0,k=0;k<q;++k){j=(k+p)*m+3
for(i=0;i<b;++i,j+=4){h=r+i
if(!(h>=0&&h<o))return A.a(s,h)
h=s[h]
l&2&&A.b(n)
if(!(j>=0&&j<n.length))return A.a(n,j)
n[j]=h}r+=f}},
jj(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.b,d=A.v(J.Q(g.d.gt(0),0,null),!1,f,a*e.a*4),c=g.to
c===$&&A.c()
s=A.x(c,f,0)
c=g.x1
c===$&&A.c()
r=A.x(c,f,0)
c=g.x2
c===$&&A.c()
q=A.x(c,f,0)
p=a+a0
o=B.a.j(b+1,1)
n=e.a*4
e=g.rx
e===$&&A.c()
m=A.x(e,f,0)
e=g.ry
e===$&&A.c()
l=A.x(e,f,0)
if(a===0){g.df(s,f,r,q,r,q,d,f,b)
k=a0}else{e=g.RG
e===$&&A.c()
g.df(e,s,m,l,r,q,A.x(d,f,-n),d,b)
k=a0+1}m.st(0,r.a)
l.st(0,q.a)
for(e=2*n,c=-n,j=a;j+=2,j<p;){m.d=r.d
l.d=q.d
i=r.d
h=g.R8
h.toString
r.d=i+h
q.d+=h
d.d+=e
h=s.d
i=g.p4
i.toString
s.d=h+2*i
g.df(A.x(s,f,-i),s,m,l,r,q,A.x(d,f,c),d,b)}e=s.d
c=g.p4
c.toString
s.d=e+c
if(g.Q+p<g.as){e=g.RG
e===$&&A.c()
e.dr(0,b,s)
g.rx.dr(0,o,r)
g.ry.dr(0,o,q);--k}else if((p&1)===0)g.df(s,f,r,q,r,q,A.x(d,f,n),f,b)
return k},
j9(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.b,h=i.a,g=i.b
if(a<0||b<=0||a+b>g)return null
if(a===0){i=h*g
j.aO=new Uint8Array(i)
s=j.bJ
r=new A.lq(s,h,g)
q=s.G()
p=r.d=q&3
r.e=B.a.j(q,2)&3
r.f=B.a.j(q,4)&3
r.r=B.a.j(q,6)&3
if(r.ghh())if(p===0){if(s.c-s.d<i)r.r=1}else if(p===1){o=new A.bT(B.a7,A.i([],t.J))
o.a=h
o.b=g
i=A.i([],t.d)
p=A.i([],t.ip)
n=new Uint32Array(2)
m=new A.iH(s,n)
n=m.e=J.Q(B.n.gt(n),0,null)
l=s.G()
n.$flags&2&&A.b(n)
if(0>=n.length)return A.a(n,0)
n[0]=l
l=s.G()
n.$flags&2&&A.b(n)
if(1>=n.length)return A.a(n,1)
n[1]=l
l=s.G()
n.$flags&2&&A.b(n)
if(2>=n.length)return A.a(n,2)
n[2]=l
l=s.G()
n.$flags&2&&A.b(n)
if(3>=n.length)return A.a(n,3)
n[3]=l
l=s.G()
n.$flags&2&&A.b(n)
if(4>=n.length)return A.a(n,4)
n[4]=l
l=s.G()
n.$flags&2&&A.b(n)
if(5>=n.length)return A.a(n,5)
n[5]=l
l=s.G()
n.$flags&2&&A.b(n)
if(6>=n.length)return A.a(n,6)
n[6]=l
s=s.G()
n.$flags&2&&A.b(n)
if(7>=n.length)return A.a(n,7)
n[7]=s
m.b=!1
p=new A.hU(m,o,i,p)
p.dy=h
p.fr=g
r.x=p
p.cr(h,g,!0)
i=r.x
s=i.ch
p=s.length
if(p===1){if(0>=p)return A.a(s,0)
i=s[0].a===B.cq&&i.jN()}else i=!1
if(i){r.y=!0
i=r.x
s=i.c
k=s.a*s.b
i.db=0
s=B.a.V(k,4)
s=new Uint8Array(k+(4-s))
i.cy=s
i.cx=J.aI(B.d.gt(s),0,null)}else{r.y=!1
r.x.eH(h)}}else r.r=1
j.c4=r}i=j.c4
if(i!=null)if(!i.w){s=j.aO
s===$&&A.c()
if(!i.lk(a,b,s))return null}i=j.aO
i===$&&A.c()
return A.v(i,!1,null,a*h)},
k5(a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.fr.b,a4=a2.dy,a5=a2.k1
a5===$&&A.c()
if(!(a5<4))return A.a(a4,a5)
s=a4[a5]
a5=a2.bz
a5===$&&A.c()
a4=a2.y1
if(!(a4<a5.length))return A.a(a5,a4)
r=a5[a4]
q=A.v(r.a,!1,null,0)
a4=a2.k3
a4===$&&A.c()
if(0>=a4.length)return A.a(a4,0)
p=a4[0]
q.lM(0,q.c-q.d,0)
a4=r.b
a4===$&&A.c()
if(!a4){o=A.v(new Int16Array(16),!1,null,0)
a4=a6.b
a5=p.b
if(1>=a3.length)return A.a(a3,1)
n=a2.dY(a7,a3[1],a4+a5,s.b,0,o)
a6.b=p.b=n>0?1:0
if(n>1)a2.l0(o,q)
else{m=B.a.j(J.d(o.a,o.d)+3,3)
for(l=0;l<256;l+=16)J.a2(q.a,q.d+l,m)}k=a3[0]
j=1}else{if(3>=a3.length)return A.a(a3,3)
k=a3[3]
j=0}i=a6.a&15
h=p.a&15
for(g=0,f=0;f<4;++f){e=h&1
for(d=0,c=0;c<4;++c){n=a2.dY(a7,k,e+(i&1),s.a,j,q)
e=n>j?1:0
i=i>>>1|e<<7
a4=J.d(q.a,q.d)!==0?1:0
if(n>3)a4=3
else if(n>1)a4=2
d=d<<2|a4
q.d+=16}i=i>>>4
h=h>>>1|e<<7
g=(g<<8|d)>>>0}b=h>>>4
for(a4=a3.length,a=i,a0=0,a1=0;a1<4;a1+=2){a5=4+a1
i=B.a.a9(a6.a,a5)
h=B.a.a9(p.a,a5)
for(d=0,f=0;f<2;++f){e=h&1
for(c=0;c<2;++c){if(2>=a4)return A.a(a3,2)
n=a2.dY(a7,a3[2],e+(i&1),s.c,0,q)
e=n>0?1:0
i=i>>>1|e<<3
a5=J.d(q.a,q.d)!==0?1:0
if(n>3)a5=3
else if(n>1)a5=2
d=(d<<2|a5)>>>0
q.d+=16}i=i>>>2
h=h>>>1|e<<5}a0=(a0|B.a.P(d,4*a1))>>>0
a=(a|B.a.P(i<<4>>>0,a1))>>>0
b=(b|B.a.P(h&240,a1))>>>0}a6.a=a
p.a=b
r.e=g
r.f=a0
if((a0&43690)===0)s.toString
return(g|a0)>>>0===0},
l0(a,b){var s,r,q,p,o,n,m,l,k,j,i=new Int32Array(16)
for(s=0;s<4;++s){r=12+s
q=J.d(a.a,a.d+s)+J.d(a.a,a.d+r)
p=4+s
o=8+s
n=J.d(a.a,a.d+p)+J.d(a.a,a.d+o)
m=J.d(a.a,a.d+p)-J.d(a.a,a.d+o)
l=J.d(a.a,a.d+s)-J.d(a.a,a.d+r)
if(!(s<16))return A.a(i,s)
i[s]=q+n
if(!(o<16))return A.a(i,o)
i[o]=q-n
i[p]=l+m
if(!(r<16))return A.a(i,r)
i[r]=l-m}for(k=0,s=0;s<4;++s){r=s*4
if(!(r<16))return A.a(i,r)
j=i[r]+3
p=3+r
if(!(p<16))return A.a(i,p)
p=i[p]
q=j+p
o=1+r
if(!(o<16))return A.a(i,o)
o=i[o]
r=2+r
if(!(r<16))return A.a(i,r)
r=i[r]
n=o+r
m=o-r
l=j-p
p=B.a.j(q+n,3)
J.a2(b.a,b.d+k,p)
p=B.a.j(l+m,3)
J.a2(b.a,b.d+(k+16),p)
p=B.a.j(q-n,3)
J.a2(b.a,b.d+(k+32),p)
p=B.a.j(l-m,3)
J.a2(b.a,b.d+(k+48),p)
k+=64}},
jA(a,b){var s,r,q,p,o,n,m
t.L.a(b)
if(a.ae(b[3])===0)s=a.ae(b[4])===0?2:3+a.ae(b[5])
else if(a.ae(b[6])===0)s=a.ae(b[7])===0?5+a.ae(159):7+2*a.ae(165)+a.ae(145)
else{r=a.ae(b[8])
q=9+r
if(!(q<11))return A.a(b,q)
p=2*r+a.ae(b[q])
if(!(p<4))return A.a(B.bv,p)
o=B.bv[p]
n=o.length
for(s=0,m=0;m<n;++m)s+=s+a.ae(o[m])
s+=3+B.a.P(8,p)}return s},
dY(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j
t.ac.a(b)
t.L.a(d)
s=b.length
if(!(e<s))return A.a(b,e)
r=b[e].a
if(!(c<r.length))return A.a(r,c)
q=r[c]
for(;e<16;e=p){if(a.ae(q[0])===0)return e
while(a.ae(q[1])===0){++e
if(!(e>=0&&e<17))return A.a(B.ap,e)
r=B.ap[e]
if(!(r<s))return A.a(b,r)
r=b[r].a
if(0>=r.length)return A.a(r,0)
q=r[0]
if(e===16)return 16}p=e+1
if(!(p>=0&&p<17))return A.a(B.ap,p)
r=B.ap[p]
if(!(r<s))return A.a(b,r)
o=b[r].a
r=o.length
if(a.ae(q[2])===0){if(1>=r)return A.a(o,1)
q=o[1]
n=1}else{n=this.jA(a,q)
if(2>=r)return A.a(o,2)
q=o[2]}if(!(e>=0&&e<16))return A.a(B.bO,e)
r=B.bO[e]
m=a.b
m===$&&A.c()
l=a.eL(B.a.j(m,1))
m=a.b
if(m>>>0!==m||m>=128)return A.a(B.am,m)
k=B.am[m]
a.b=B.bU[m]
m=a.d
m===$&&A.c()
a.d=m-k
m=l!==0?-n:n
j=d[e>0?1:0]
J.a2(f.a,f.d+r,m*j)}return 16},
jY(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.y1,g=4*h,f=i.go,e=i.id,d=i.bz
d===$&&A.c()
if(!(h<d.length))return A.a(d,h)
s=d[h]
h=i.c
h===$&&A.c()
h=h.ae(145)===0
s.b=h
if(!h){if(i.c.ae(156)!==0)r=i.c.ae(128)!==0?1:3
else r=i.c.ae(163)!==0?2:0
h=s.c
h.$flags&2&&A.b(h)
h[0]=r
f.toString
B.d.O(f,g,g+4,r)
B.d.O(e,0,4,r)}else{q=s.c
for(p=0,o=0;o<4;++o,p=j){r=e[o]
for(n=0;n<4;++n){h=g+n
if(!(h<f.length))return A.a(f,h)
d=f[h]
if(!(d<10))return A.a(B.bQ,d)
d=B.bQ[d]
if(!(r>=0&&r<10))return A.a(d,r)
m=d[r]
l=i.c.ae(m[0])
if(!(l<18))return A.a(B.ak,l)
k=B.ak[l]
while(k>0){d=i.c
if(!(k<9))return A.a(m,k)
d=2*k+d.ae(m[k])
if(!(d>=0&&d<18))return A.a(B.ak,d)
k=B.ak[d]}r=-k
f.$flags&2&&A.b(f)
f[h]=r}j=p+4
f.toString
B.d.a6(q,p,j,f,g)
e.$flags&2&&A.b(e)
if(!(o<4))return A.a(e,o)
e[o]=r}}if(i.c.ae(142)===0)h=0
else if(i.c.ae(114)===0)h=2
else h=i.c.ae(183)!==0?1:3
s.d=h}}
A.fD.prototype={
a4(a){var s,r
for(s=0;r=a-1,a>0;a=r)s=(s|B.a.Y(this.ae(128),r))>>>0
return s},
co(a){var s=this.a4(a)
return this.a4(1)===1?-s:s},
ae(a){var s,r=this,q=r.b
q===$&&A.c()
s=r.eL(B.a.j(q*a,8))
if(r.b<=126)r.kR()
return s},
eL(a){var s,r,q,p,o,n=this,m=n.d
m===$&&A.c()
if(m<0){s=n.a
r=s.c
q=s.d
if(r-q>=1){p=s.G()
m=n.c
m===$&&A.c()
n.c=(p|m<<8)>>>0
m=n.d+8
n.d=m
o=m}else{if(q<r){m=s.G()
s=n.c
s===$&&A.c()
n.c=(m|s<<8)>>>0
s=n.d+8
n.d=s
m=s}else if(!n.e){s=n.c
s===$&&A.c()
n.c=s<<8>>>0
m+=8
n.d=m
n.e=!0}o=m}}else o=m
m=n.c
m===$&&A.c()
if(B.a.ba(m,o)>a){s=n.b
s===$&&A.c()
r=a+1
n.b=s-r
n.c=m-B.a.Y(r,o)
return 1}else{n.b=a
return 0}},
kR(){var s,r=this,q=r.b
q===$&&A.c()
if(!(q>=0&&q<128))return A.a(B.am,q)
s=B.am[q]
r.b=B.bU[q]
q=r.d
q===$&&A.c()
r.d=q-s}}
A.ld.prototype={
ey(a,b,c,d){var s,r
t.D.a(a)
for(s=0;s<16;++s){r=b+s
if(this.fk(a,r,c,d))this.d0(a,r,c)}},
ex(a,b,c,d){var s,r
t.D.a(a)
for(s=0;s<16;++s){r=b+s*c
if(this.fk(a,r,1,d))this.d0(a,r,1)}},
hR(a,b,c,d){var s
t.D.a(a)
for(s=1;s<=3;++s)this.ey(a,b+4*s*c,c,d)},
hQ(a,b,c,d){var s
t.D.a(a)
for(s=1;s<=3;++s)this.ex(a,b+4*s,c,d)},
mc(a,b,c,d,e,f){var s
t.D.a(a)
for(s=1;s<=3;++s)this.ca(a,b+4*s*c,c,1,16,d,e,f)},
lC(a,b,c,d,e,f){var s
t.D.a(a)
for(s=1;s<=3;++s)this.ca(a,b+4*s,1,c,16,d,e,f)},
cb(a5,a6,a7,a8,a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=this
t.D.a(a5)
for(s=3*a7,r=a5.length,q=2*a7,p=a4.c,o=a4.e,n=a5.$flags|0,m=0;m<a9;++m,a6+=a8)if(a4.fl(a5,a6,a7,b0,b1))if(a4.ff(a5,a6,a7,b2))a4.d0(a5,a6,a7)
else{l=a6-s
if(!(l>=0&&l<r))return A.a(a5,l)
k=a5[l]
j=a6-q
if(!(j>=0&&j<r))return A.a(a5,j)
i=a5[j]
h=a6-a7
if(!(h>=0&&h<r))return A.a(a5,h)
g=a5[h]
if(!(a6>=0&&a6<r))return A.a(a5,a6)
f=a5[a6]
e=a6+a7
if(!(e<r))return A.a(a5,e)
d=a5[e]
c=a6+q
if(!(c<r))return A.a(a5,c)
b=a5[c]
a=1020+i-d
if(!(a>=0&&a<2041))return A.a(p,a)
a=1020+3*(f-g)+p[a]
if(!(a>=0&&a<2041))return A.a(p,a)
a0=p[a]
a1=B.a.j(27*a0+63+3456,7)-27
a2=B.a.j(18*a0+63+2304,7)-18
a3=B.a.j(9*a0+63+1152,7)-9
a=255+k+a3
if(!(a<766))return A.a(o,a)
a=o[a]
n&2&&A.b(a5)
a5[l]=a
a=255+i+a2
if(!(a<766))return A.a(o,a)
a5[j]=o[a]
a=255+g+a1
if(!(a<766))return A.a(o,a)
a5[h]=o[a]
a=255+f-a1
if(!(a>=0&&a<766))return A.a(o,a)
a5[a6]=o[a]
a=255+d-a2
if(!(a>=0&&a<766))return A.a(o,a)
a5[e]=o[a]
a=255+b-a3
if(!(a>=0&&a<766))return A.a(o,a)
a5[c]=o[a]}},
ca(a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
t.D.a(a0)
for(s=2*a2,r=a0.length,q=a.d,p=a.e,o=a0.$flags|0,n=0;n<a4;++n,a1+=a3)if(a.fl(a0,a1,a2,a5,a6))if(a.ff(a0,a1,a2,a7))a.d0(a0,a1,a2)
else{m=a1-s
if(!(m>=0&&m<r))return A.a(a0,m)
l=a0[m]
k=a1-a2
if(!(k>=0&&k<r))return A.a(a0,k)
j=a0[k]
if(!(a1>=0&&a1<r))return A.a(a0,a1)
i=a0[a1]
h=a1+a2
if(!(h<r))return A.a(a0,h)
g=a0[h]
f=3*(i-j)
e=B.a.j(f+4+1024,3)-128+112
if(!(e>=0&&e<225))return A.a(q,e)
d=q[e]
e=B.a.j(f+3+1024,3)-128+112
if(!(e>=0&&e<225))return A.a(q,e)
c=q[e]
b=B.a.j(d+1+16,1)-8
e=255+l+b
if(!(e<766))return A.a(p,e)
e=p[e]
o&2&&A.b(a0)
a0[m]=e
e=255+j+c
if(!(e>=0&&e<766))return A.a(p,e)
a0[k]=p[e]
e=255+i-d
if(!(e>=0&&e<766))return A.a(p,e)
a0[a1]=p[e]
e=255+g-b
if(!(e>=0&&e<766))return A.a(p,e)
a0[h]=p[e]}},
d0(a,b,c){var s,r,q,p,o,n,m,l,k
t.D.a(a)
s=b-2*c
r=a.length
if(!(s>=0&&s<r))return A.a(a,s)
q=a[s]
s=b-c
if(!(s>=0&&s<r))return A.a(a,s)
p=a[s]
if(!(b>=0&&b<r))return A.a(a,b)
o=a[b]
n=b+c
if(!(n<r))return A.a(a,n)
r=this.c
n=1020+q-a[n]
if(!(n>=0&&n<2041))return A.a(r,n)
m=3*(o-p)+r[n]
n=this.d
r=B.a.j(m+4+1024,3)-128+112
if(!(r>=0&&r<225))return A.a(n,r)
l=n[r]
r=B.a.j(m+3+1024,3)-128+112
if(!(r>=0&&r<225))return A.a(n,r)
k=this.e
r=255+p+n[r]
if(!(r>=0&&r<766))return A.a(k,r)
r=k[r]
a.$flags&2&&A.b(a)
a[s]=r
r=255+o-l
if(!(r>=0&&r<766))return A.a(k,r)
a[b]=k[r]},
ff(a,b,c,d){var s,r,q,p,o,n
t.D.a(a)
s=b-2*c
r=a.length
if(!(s>=0&&s<r))return A.a(a,s)
q=a[s]
s=b-c
if(!(s>=0&&s<r))return A.a(a,s)
p=a[s]
if(!(b>=0&&b<r))return A.a(a,b)
o=a[b]
s=b+c
if(!(s<r))return A.a(a,s)
n=a[s]
s=this.a
r=255+q-p
if(!(r>=0&&r<511))return A.a(s,r)
if(s[r]<=d){r=255+n-o
if(!(r>=0&&r<511))return A.a(s,r)
r=s[r]>d
s=r}else s=!0
return s},
fk(a,b,c,d){var s,r,q,p,o,n,m
t.D.a(a)
s=b-2*c
r=a.length
if(!(s>=0&&s<r))return A.a(a,s)
q=a[s]
s=b-c
if(!(s>=0&&s<r))return A.a(a,s)
p=a[s]
if(!(b>=0&&b<r))return A.a(a,b)
o=a[b]
s=b+c
if(!(s<r))return A.a(a,s)
n=a[s]
s=this.a
r=255+p-o
if(!(r>=0&&r<511))return A.a(s,r)
r=s[r]
s=this.b
m=255+q-n
if(!(m>=0&&m<511))return A.a(s,m)
return 2*r+s[m]<=d},
fl(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h,g
t.D.a(a)
s=b-4*c
r=a.length
if(!(s>=0&&s<r))return A.a(a,s)
q=a[s]
s=3*c
p=b-s
if(!(p>=0&&p<r))return A.a(a,p)
o=a[p]
p=2*c
n=b-p
if(!(n>=0&&n<r))return A.a(a,n)
m=a[n]
n=b-c
if(!(n>=0&&n<r))return A.a(a,n)
l=a[n]
if(!(b>=0&&b<r))return A.a(a,b)
k=a[b]
n=b+c
if(!(n<r))return A.a(a,n)
j=a[n]
p=b+p
if(!(p<r))return A.a(a,p)
i=a[p]
s=b+s
if(!(s<r))return A.a(a,s)
h=a[s]
s=this.a
r=255+l-k
if(!(r>=0&&r<511))return A.a(s,r)
r=s[r]
p=this.b
n=255+m
g=n-j
if(!(g>=0&&g<511))return A.a(p,g)
if(2*r+p[g]>d)return!1
r=255+q-o
if(!(r>=0&&r<511))return A.a(s,r)
p=!1
if(s[r]<=e){r=255+o-m
if(!(r>=0&&r<511))return A.a(s,r)
if(s[r]<=e){r=n-l
if(!(r>=0&&r<511))return A.a(s,r)
if(s[r]<=e){r=255+h-i
if(!(r>=0&&r<511))return A.a(s,r)
if(s[r]<=e){r=255+i-j
if(!(r>=0&&r<511))return A.a(s,r)
if(s[r]<=e){r=255+j-k
if(!(r>=0&&r<511))return A.a(s,r)
r=s[r]<=e
s=r}else s=p}else s=p}else s=p}else s=p}else s=p
return s},
bD(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=t.m6.a(a.a),d=t.D.a(a0.a),c=this.f,b=a.d
for(s=e.length,r=c.$flags|0,q=0,p=0;p<4;++p){if(!(b>=0&&b<s))return A.a(e,b)
o=e[b]
n=b+8
if(!(n<s))return A.a(e,n)
n=e[n]
m=o+n
l=o-n
n=b+4
if(!(n<s))return A.a(e,n)
n=e[n]
o=B.a.j(n*35468+1073741824,16)
k=b+12
if(!(k<s))return A.a(e,k)
k=e[k]
j=o-16384-(B.a.j(k*85627+1073741824,16)-16384)
i=B.a.j(n*85627+1073741824,16)-16384+(B.a.j(k*35468+1073741824,16)-16384)
h=q+1
r&2&&A.b(c)
if(!(q<16))return A.a(c,q)
c[q]=m+i
q=h+1
if(!(h<16))return A.a(c,h)
c[h]=l+j
h=q+1
if(!(q<16))return A.a(c,q)
c[q]=l-j
q=h+1
if(!(h<16))return A.a(c,h)
c[h]=m-i;++b}g=a0.d
for(s=d.$flags|0,r=d.length,q=0,p=0;p<4;++p){if(!(q<16))return A.a(c,q)
f=c[q]+4
o=q+8
if(!(o<16))return A.a(c,o)
o=c[o]
m=f+o
l=f-o
o=q+4
if(!(o<16))return A.a(c,o)
o=c[o]
n=B.a.j(o*35468+1073741824,16)
k=q+12
if(!(k<16))return A.a(c,k)
k=c[k]
j=n-16384-(B.a.j(k*85627+1073741824,16)-16384)
i=B.a.j(o*85627+1073741824,16)-16384+(B.a.j(k*35468+1073741824,16)-16384)
if(!(g>=0&&g<r))return A.a(d,g)
k=d[g]+(B.a.j(m+i+65536,3)-8192)
if((k&-256)>>>0===0)o=k
else o=k<0?0:255
s&2&&A.b(d)
d[g]=o
o=g+1
if(!(o<r))return A.a(d,o)
n=d[o]+(B.a.j(l+j+65536,3)-8192)
if(!((n&-256)>>>0===0))n=n<0?0:255
d[o]=n
n=g+2
if(!(n<r))return A.a(d,n)
o=d[n]+(B.a.j(l-j+65536,3)-8192)
if(!((o&-256)>>>0===0))o=o<0?0:255
d[n]=o
o=g+3
if(!(o<r))return A.a(d,o)
n=d[o]+(B.a.j(m-i+65536,3)-8192)
if(!((n&-256)>>>0===0))n=n<0?0:255
d[o]=n;++q
g+=32}},
m8(a,b,c){this.bD(a,b)
if(c)this.bD(A.x(a,null,16),A.x(b,null,4))},
cN(a,b){var s,r,q,p,o,n
for(s=J.d(a.a,a.d)+4+65536,r=0;r<4;++r)for(q=r*32,p=0;p<4;++p){o=p+q
n=J.d(b.a,b.d+o)+(B.a.j(s,3)-8192)
if(!((n&-256)>>>0===0))n=n<0?0:255
J.a2(b.a,b.d+o,n)}},
hC(a,b){var s=this,r=null
if(J.d(a.a,a.d)!==0)s.cN(a,b)
if(J.d(a.a,a.d+16)!==0)s.cN(A.x(a,r,16),A.x(b,r,4))
if(J.d(a.a,a.d+32)!==0)s.cN(A.x(a,r,32),A.x(b,r,128))
if(J.d(a.a,a.d+48)!==0)s.cN(A.x(a,r,48),A.x(b,r,132))}}
A.lk.prototype={}
A.ln.prototype={}
A.lp.prototype={}
A.fC.prototype={}
A.lo.prototype={}
A.le.prototype={}
A.bR.prototype={}
A.fF.prototype={}
A.iJ.prototype={}
A.fG.prototype={}
A.fH.prototype={}
A.fE.prototype={
cE(){var s,r,q,p,o=this,n=o.b
if(n.ak(8)!==47)return!1
s=n.ak(14)+1
r=n.ak(14)+1
q=n.ak(1)
o.dy=s
o.fr=r
p=o.c
p.f=B.av
p.a=s
p.b=r
p.d=q!==0
if(n.ak(3)!==0)return!1
return!0},
bI(){var s,r,q,p,o,n,m=this,l=null
m.f=0
if(!m.cE())return l
m.cr(m.dy,m.fr,!0)
m.eH(m.dy)
s=m.dy
m.d=A.W(l,l,B.f,0,B.i,m.fr,l,0,4,l,B.f,s,!1)
s=m.cx
s.toString
r=m.c
q=r.a
p=r.b
if(!m.dO(s,q,p,p,m.gkh()))return l
s=r.w
if(s.length!==0){o=A.v(new A.aw(s),!1,l,0)
s=m.d
s.toString
s.e=A.jA(o)}n=r.r
if(n!=null)m.d.c=new A.bF("ICC_PROFILE",B.ae,n)
return m.d},
eH(a){var s,r=this,q=r.c
q=q.a*q.b+a
s=new Uint32Array(q+a*16)
r.cx=s
r.cy=J.Q(B.n.gt(s),0,null)
r.db=q
return!0},
kK(a){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=l.b
r=s.ak(2)
q=l.CW
p=B.a.P(1,r)
if((q&p)>>>0!==0)return!1
l.CW=(q|p)>>>0
o=new A.iI(B.cp)
B.c.B(l.ch,o)
if(!(r<4))return A.a(B.bZ,r)
q=B.bZ[r]
o.a=q
o.b=a[0]
o.c=a[1]
switch(q.a){case 0:case 1:s=s.ak(3)+2
o.e=s
o.d=l.cr(A.cd(o.b,s),A.cd(o.c,o.e),!1)
break
case 3:n=s.ak(8)+1
if(n>16)m=0
else if(n>4)m=1
else{s=n>2?2:3
m=s}B.c.i(a,0,A.cd(o.b,m))
o.e=m
o.d=l.cr(n,1,!1)
l.jm(n,o)
break
case 2:break}return!0},
cr(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(c)for(s=k.b,r=t.t,q=b,p=a;s.ak(1)!==0;){o=A.i([p,q],r)
if(!k.kK(o))throw A.h(A.l("Invalid Transform"))
p=o[0]
q=o[1]}else{q=b
p=a}s=k.b
if(s.ak(1)!==0){n=s.ak(4)
if(!(n>=1&&n<=11))throw A.h(A.l("Invalid Color Cache"))}else n=0
if(!k.kx(p,q,n,c))throw A.h(A.l("Invalid Huffman Codes"))
if(n>0){s=B.a.P(1,n)
k.w=s
k.x=new A.ll(new Uint32Array(s),32-n)}else k.w=0
s=k.c
s.a=p
s.b=q
m=k.z
k.Q=A.cd(p,m)
k.y=m===0?4294967295:B.a.P(1,m)-1
if(c){k.f=0
return null}l=new Uint32Array(p*q)
if(!k.dO(l,p,q,q,null))throw A.h(A.l("Failed to decode image data."))
k.f=0
return l},
dO(b6,b7,b8,b9,c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=506832829
t.ec.a(c0)
s=b4.f
r=B.a.a1(s,b7)
q=B.a.V(s,b7)
p=b7*b8
o=b7*b9
if(s>=o){if(c0!=null)c0.$2(b9,!1)
return!0}n=b4.f7(q,r)
m=b4.w
l=280+m
k=m>0?b4.x:null
j=b4.y
for(m=b6.length,i=b4.b,h=c0!=null,g=b6.$flags|0,f=s;f<o;){if((q&j)>>>0===0){e=b4.ct(b4.as,b4.Q,b4.z,q,r)
d=b4.ax
if(!(e<d.length))return A.a(d,e)
n=d[e]}c=0
if(n.d){d=n.c
g&2&&A.b(b6)
if(!(f>=0&&f<m))return A.a(b6,f)
b6[f]=d;++f;++q
if(q>=b7){++r
if(h&&r<=b9)c0.$2(r,!0)
if(k!=null)for(d=k.a,b=k.b,a=d.$flags|0;s<f;){if(!(s>=0&&s<m))return A.a(b6,s)
a0=b6[s]
a1=B.a.a3(A.hb(a0,b5),b)
a&2&&A.b(d)
if(!(a1<d.length))return A.a(d,a1)
d[a1]=a0;++s}q=c}continue}if(i.a>=32)i.c1()
if(n.e){a2=i.cK()&63
d=n.f
if(!(a2<d.length))return A.a(d,a2)
a3=d[a2]
d=a3.a
b=i.a
if(d<256){i.a=b+d
d=a3.b
g&2&&A.b(b6)
if(!(f>=0&&f<m))return A.a(b6,f)
b6[f]=d
a4=0}else{i.a=b+(d-256)
a4=a3.b}if(i.b)break
if(a4===0){++f;++q
if(q>=b7){++r
if(h&&r<=b9)c0.$2(r,!0)
if(k!=null)for(d=k.a,b=k.b,a=d.$flags|0;s<f;){if(!(s>=0&&s<m))return A.a(b6,s)
a0=b6[s]
a1=B.a.a3(A.hb(a0,b5),b)
a&2&&A.b(d)
if(!(a1<d.length))return A.a(d,a1)
d[a1]=a0;++s}q=c}continue}}else a4=n.c5(0,i)
if(a4<256){if(n.b){d=n.c
g&2&&A.b(b6)
if(!(f>=0&&f<m))return A.a(b6,f)
b6[f]=(d|a4<<8)>>>0}else{a5=n.c5(1,i)
if(i.a>=32)i.c1()
a6=A.qS(n.c5(2,i),a4,a5,n.c5(3,i))
g&2&&A.b(b6)
if(!(f>=0&&f<m))return A.a(b6,f)
b6[f]=a6}++f;++q
if(q>=b7){++r
if(h&&r<=b9)c0.$2(r,!0)
if(k!=null)for(d=k.a,b=k.b,a=d.$flags|0;s<f;){if(!(s>=0&&s<m))return A.a(b6,s)
a0=b6[s]
a1=B.a.a3(A.hb(a0,b5),b)
a&2&&A.b(d)
if(!(a1<d.length))return A.a(d,a1)
d[a1]=a0;++s}q=c}}else if(a4<280){a7=b4.d5(a4-256)
a8=n.c5(4,i)
if(i.a>=32)i.c1()
a9=b4.fm(b7,b4.d5(a8))
if(f<a9||p-f<a7)return!1
else{b0=f-a9
for(b1=0;b1<a7;++b1){d=f+b1
b=b0+b1
if(!(b>=0&&b<m))return A.a(b6,b)
b=b6[b]
g&2&&A.b(b6)
if(!(d>=0&&d<m))return A.a(b6,d)
b6[d]=b}}f+=a7
q+=a7
while(q>=b7){q-=b7;++r
if(h&&r<=b9)c0.$2(r,!0)}if((q&j)>>>0!==0){e=b4.ct(b4.as,b4.Q,b4.z,q,r)
d=b4.ax
if(!(e<d.length))return A.a(d,e)
n=d[e]}if(k!=null)for(d=k.a,b=k.b,a=d.$flags|0;s<f;){if(!(s>=0&&s<m))return A.a(b6,s)
a0=b6[s]
a1=B.a.a3(A.hb(a0,b5),b)
a&2&&A.b(d)
if(!(a1<d.length))return A.a(d,a1)
d[a1]=a0;++s}}else if(a4<l){b2=a4-280
while(s<f){k.toString
if(!(s>=0&&s<m))return A.a(b6,s)
d=b6[s]
b=k.a
a=B.a.a3(A.hb(d,b5),k.b)
b.$flags&2&&A.b(b)
if(!(a<b.length))return A.a(b,a)
b[a]=d;++s}d=k.a
b=d.length
if(!(b2<b))return A.a(d,b2)
a=d[b2]
g&2&&A.b(b6)
if(!(f>=0&&f<m))return A.a(b6,f)
b6[f]=a;++f;++q
if(q>=b7){++r
if(h&&r<=b9)c0.$2(r,!0)
for(a=k.b,a0=d.$flags|0;s<f;){if(!(s>=0&&s<m))return A.a(b6,s)
a1=b6[s]
b3=B.a.a3(A.hb(a1,b5),a)
a0&2&&A.b(d)
if(!(b3<b))return A.a(d,b3)
d[b3]=a1;++s}q=c}}else return!1}if(h)c0.$2(r>b9?b9:r,!1)
b4.f=f
return!0},
jN(){var s,r,q,p,o,n,m,l
if(this.w>0)return!1
for(s=this.at,r=this.ax,q=r.length,p=0;p<s;++p){if(!(p<q))return A.a(r,p)
o=r[p].a
n=o.length
if(1>=n)return A.a(o,1)
m=o[1]
l=m.a
m=m.b
if(!(m<l.length))return A.a(l,m)
if(l[m].a>0)return!1
if(2>=n)return A.a(o,2)
m=o[2]
l=m.a
m=m.b
if(!(m<l.length))return A.a(l,m)
if(l[m].a>0)return!1
if(3>=n)return A.a(o,3)
n=o[3]
m=n.a
n=n.b
if(!(n<m.length))return A.a(m,n)
if(m[n].a>0)return!1}return!0},
jp(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
if(b&&B.a.V(a,16)!==0)return
s=g.r
r=a-s
q=g.dy
p=q*s
while(r>0){o=r>16?16:r
n=q*o
m=q*s
l=g.db
g.eI(s,o,p)
for(q=g.dx,k=g.cx,j=0;j<n;++j){q.toString
i=m+j
h=l+j
if(!(h<k.length))return A.a(k,h)
h=k[h]
q.$flags&2&&A.b(q)
if(!(i>=0&&i<q.length))return A.a(q,i)
q[i]=h>>>8&255}r-=o
q=g.dy
p+=o*q
s+=o}g.r=a},
iO(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.f,d=B.a.a1(e,a0),c=B.a.V(e,a0),b=a0*a1,a=a0*a2
if(e>=a){f.d2(d)
return!0}s=f.f7(c,d)
r=f.y
q=f.b
for(;;){if(!(!q.b&&e<a))break
if((c&r)>>>0===0){p=f.ct(f.as,f.Q,f.z,c,d)
o=f.ax
if(!(p<o.length))return A.a(o,p)
s=o[p]}if(q.a>=32)q.c1()
n=s.c5(0,q)
if(n<256){o=f.cy
o===$&&A.c()
o.$flags&2&&A.b(o)
if(!(e>=0&&e<o.length))return A.a(o,e)
o[e]=n;++e;++c
if(c>=a0){++d
if(B.a.V(d,16)===0)f.d2(d)
c=0}}else if(n<280){m=f.d5(n-256)
l=s.c5(4,q)
if(q.a>=32)q.c1()
k=f.fm(a0,f.d5(l))
if(e>=k&&b-e>=m)for(o=f.cy,j=0;j<m;++j){o===$&&A.c()
i=e+j
h=i-k
g=o.length
if(!(h>=0&&h<g))return A.a(o,h)
h=o[h]
o.$flags&2&&A.b(o)
if(!(i>=0&&i<g))return A.a(o,i)
o[i]=h}else{f.f=e
return!0}e+=m
c+=m
while(c>=a0){c-=a0;++d
if(B.a.V(d,16)===0)f.d2(d)}if(e<a&&(c&r)>>>0!==0){p=f.ct(f.as,f.Q,f.z,c,d)
o=f.ax
if(!(p<o.length))return A.a(o,p)
s=o[p]}}else return!1}f.d2(d)
f.f=e
return!0},
d2(a){var s,r,q,p=this,o=p.r,n=a-o,m=p.cy
m===$&&A.c()
s=A.v(m,!1,null,p.c.a*o)
if(n>0){r=p.r
o=p.dx
o.toString
q=A.v(o,!1,null,p.dy*r)
o=p.ch
if(0>=o.length)return A.a(o,0)
o[0].lc(r,r+n,s,q)}p.r=a},
ki(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c.a,f=h.r
if(b)if(B.a.V(a,16)!==0)return
s=a-f
if(s<=0){h.r=a
return}h.eI(f,s,g*f)
g=h.cx
g.toString
r=h.d.Z()
f=h.r
q=h.dy
p=f*q*4
for(o=h.db,f=g.length,n=r.$flags|0,m=0;m<s;++m)for(l=0;l<q;++l,++o){if(!(o>=0&&o<f))return A.a(g,o)
k=g[o]
j=p+1
n&2&&A.b(r)
i=r.length
if(!(p>=0&&p<i))return A.a(r,p)
r[p]=k>>>16&255
p=j+1
if(!(j>=0&&j<i))return A.a(r,j)
r[j]=k>>>8&255
j=p+1
if(!(p>=0&&p<i))return A.a(r,p)
r[p]=k&255
p=j+1
if(!(j>=0&&j<i))return A.a(r,j)
r[j]=k>>>24&255}h.r=a},
eI(a,b,c){var s,r=this,q=r.ch,p=q.length,o=r.c.a,n=a+b,m=r.db,l=r.cx
l.toString
B.n.a6(l,m,m+o*b,l,c)
for(;s=p-1,p>0;p=s){if(!(s>=0&&s<q.length))return A.a(q,s)
o=q[s]
l=r.cx
l.toString
o.lJ(a,n,l,m,l,m)}},
kx(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=1,c=null
if(a1&&e.b.ak(1)!==0){s=2+e.b.ak(3)
r=A.cd(a,s)
q=A.cd(b,s)
p=r*q
o=e.cr(r,q,!1)
if(o==null)return!1
e.z=s
for(n=o.length,m=o.$flags|0,l=d,k=0;k<p;++k){if(!(k<n))return A.a(o,k)
j=o[k]>>>8&65535
m&2&&A.b(o)
o[k]=j
if(j>=l)l=j+1}if(l>1000||l>a*b){c=new Int32Array(1)
B.l.O(c,0,1,255)
for(d=0,k=0;k<p;++k){if(!(k<n))return A.a(o,k)
i=o[k]
if(!(i<1))return A.a(c,i)
if(c[i]===-1){h=d+1
c[i]=d
d=h}g=c[i]
m&2&&A.b(o)
o[k]=g}}else d=l}else{o=null
l=1}if(e.b.b)return!1
f=e.ky(a0,d,l,c)
if(f==null)return!1
e.as=o
e.at=d
e.ax=f
return!0},
ea(a,b,c,d,e,f){var s,r=a.a,q=a.b,p=d
do{p-=c
s=q+(b+p)
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
s.a=e
s.b=f}while(p>0)},
jS(a,b,c){var s=B.a.Y(1,b-c)
while(b<15){s-=a[b]
if(s<=0)break;++b
s=s<<1>>>0}return b-c},
fb(a,b){var s=B.a.Y(1,b-1)
while((a&s)>>>0!==0)s=s>>>1
return s!==0?((a&s-1)>>>0)+s:a},
eN(a5,a6,a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=B.a.P(1,a6),a3=new Int32Array(16),a4=new Int32Array(16)
for(s=a7.length,r=0;r<a8;++r){if(!(r<s))return A.a(a7,r)
q=a7[r]
if(q>15)return 0
if(!(q>=0))return A.a(a3,q)
a3[q]=a3[q]+1}if(a3[0]===a8)return 0
a4[1]=0
for(p=1;p<15;p=o){q=a3[p]
if(q>B.a.P(1,p))return 0
o=p+1
a4[o]=a4[p]+q}for(q=a9!=null,r=0;r<a8;++r){if(!(r<s))return A.a(a7,r)
n=a7[r]
if(n>0)if(q){if(!(n<16))return A.a(a4,n)
m=a4[n]
if(m>=a8)return 0
a4[n]=m+1
a9.$flags&2&&A.b(a9)
if(!(m>=0&&m<a9.length))return A.a(a9,m)
a9[m]=r}else{if(!(n<16))return A.a(a4,n)
a4[n]=a4[n]+1}}if(a4[15]===1){if(q){a5.toString
if(0>=a9.length)return A.a(a9,0)
a1.ea(a5,0,1,a2,0,a9[0])}return a2}l=a2-1
for(s=a5==null,k=0,j=1,i=1,r=0,p=1,h=2;p<=a6;++p,h=h<<1>>>0){i=i<<1>>>0
j+=i
if(!(p<16))return A.a(a3,p)
i-=a3[p]
if(i<0)return 0
if(s)continue
for(g=p&255;a3[p]>0;a3[p]=a3[p]-1,r=f){f=r+1
if(!(r>=0&&r<a9.length))return A.a(a9,r)
a1.ea(a5,k,h,a2,g,a9[r])
k=a1.fb(k,p)}}for(p=a6+1,s=!s,e=a2,d=0,c=4294967295,h=2;p<=15;++p,h=h<<1>>>0){i=i<<1>>>0
j+=i
i-=a3[p]
if(i<0)return 0
for(g=p-a6&255;a3[p]>0;a3[p]=a3[p]-1){b=(k&l)>>>0
if(b!==c){if(s)d+=e
a=a1.jS(a3,p,a6)
e=B.a.Y(1,a)
a2+=e
if(s){q=a5.a
m=a5.b+b
if(!(m>=0&&m<q.length))return A.a(q,m)
m=q[m]
m.a=a+a6&255
m.b=d-b}c=b}if(s){f=r+1
if(!(r>=0&&r<a9.length))return A.a(a9,r)
a0=a9[r]
a1.ea(a5,d+B.a.a9(k,a6),h,e,g,a0)
r=f}k=a1.fb(k,p)}}if(j!==2*a4[15]-1)return 0
return a2},
fQ(a,b,c,d){var s,r,q,p,o,n,m=this.eN(null,b,c,d,null)
if(m===0||a==null)return m
s=a.b
r=s.d
q=s.e
if(r+m>=q){p=new A.eM()
if(m>q)q=m
o=A.nJ(q)
p.e=q
p.b=p.a=o
a.b=p
s=p}n=new Uint16Array(d)
this.eN(s.b,b,c,d,n)
return m},
kw(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new A.hC(new A.eM())
c.eE(128)
if(this.fQ(c,7,a,19)===0)return!1
s=this.b
if(s.ak(1)!==0){r=2+s.ak(2+2*s.ak(3))
if(r>b)return!1}else r=b
for(q=8,p=0;p<b;r=o){o=r-1
if(r===0)break
if(s.a>=32)s.c1()
n=c.b.a
n.toString
m=n.a
n=n.b+(s.cK()&127)
if(!(n<m.length))return A.a(m,n)
l=m[n]
s.a=s.a+l.a
k=l.b
if(k<16){j=p+1
a0.$flags&2&&A.b(a0)
if(!(p>=0&&p<a0.length))return A.a(a0,p)
a0[p]=k
if(k!==0)q=k
p=j}else{i=k-16
if(!(i<3))return A.a(B.br,i)
h=B.br[i]
g=B.dX[i]
f=s.ak(h)+g
if(p+f>b)return!1
e=k===16?q:0
for(n=a0.$flags|0;d=f-1,f>0;f=d,p=j){j=p+1
n&2&&A.b(a0)
if(!(p>=0&&p<a0.length))return A.a(a0,p)
a0[p]=e}}}return!0},
fv(a,b,c){var s,r,q,p,o,n,m,l=this.b,k=l.ak(1)
B.l.O(b,0,a,0)
if(k!==0){s=l.ak(1)
r=l.ak(l.ak(1)===0?1:8)
b.$flags&2&&A.b(b)
q=b.length
if(!(r<q))return A.a(b,r)
b[r]=1
if(s+1===2){r=l.ak(8)
if(!(r<q))return A.a(b,r)
b[r]=1}p=!0}else{o=new Int32Array(19)
n=l.ak(4)+4
for(m=0;m<n;++m){if(!(m<19))return A.a(B.bM,m)
s=B.bM[m]
q=l.ak(3)
if(!(s<19))return A.a(o,s)
o[s]=q}p=this.kw(o,a,b)}return p&&!l.b?this.fQ(c,8,b,a):0},
cV(a,b,c){var s=c.a,r=a.a
c.a=s+r
c.b=(c.b|B.a.P(a.b,b))>>>0
return r},
iy(a){var s,r,q,p,o,n,m,l,k,j,i=this
for(s=a.a,r=s.length,q=a.f,p=q.length,o=0;o<64;++o){if(!(o<p))return A.a(q,o)
n=q[o]
if(0>=r)return A.a(s,0)
m=s[0]
l=m.a
m=m.b+o
if(!(m<l.length))return A.a(l,m)
k=l[m]
m=k.b
if(m>=256){n.a=k.a+256
n.b=m}else{n.b=n.a=0
j=B.a.a9(o,i.cV(k,8,n))
if(1>=r)return A.a(s,1)
m=s[1]
l=m.a
m=m.b+j
if(!(m<l.length))return A.a(l,m)
j=B.a.a9(j,i.cV(l[m],16,n))
if(2>=r)return A.a(s,2)
m=s[2]
l=m.a
m=m.b+j
if(!(m<l.length))return A.a(l,m)
j=B.a.a9(j,i.cV(l[m],0,n))
if(3>=r)return A.a(s,3)
m=s[3]
l=m.a
m=m.b+j
if(!(m<l.length))return A.a(l,m)
B.a.a9(j,i.cV(l[m],24,n))}}},
ky(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a9>0,a8=280+(a7?B.a.P(1,a9):0)
if(!(a9<12))return A.a(B.by,a9)
s=B.by[a9]
r=b2==null
if(r&&b0!==b1)return a6
q=new Int32Array(a8)
p=J.ay(b0,t.co)
for(o=0;o<b0;++o)p[o]=A.t9()
n=new A.hC(new A.eM())
n.eE(b0*s)
a5.ay=n
for(n=!r,m=0;m<b1;++m){if(n){if(!(m<b2.length))return A.a(b2,m)
l=b2[m]===-1}else l=!1
if(l)for(k=0;k<5;++k){j=B.bA[k]
if(a5.fv(k===0&&a7?j+B.a.P(1,a9):j,q,a6)===0)return a6}else{if(r)l=m
else{if(!(m<b2.length))return A.a(b2,m)
l=b2[m]}if(!(l>=0&&l<b0))return A.a(p,l)
i=p[l]
h=i.a
for(l=h.length,g=0,f=!0,e=0,k=0;k<5;++k){j=B.bA[k]
if(k===0&&a7)j+=B.a.P(1,a9)
d=a5.fv(j,q,a5.ay)
c=a5.ay.b.b
c.toString
B.c.i(h,k,c)
if(d===0)return a6
if(f&&B.hN[k]===1){if(!(k<l))return A.a(h,k)
c=h[k]
b=c.a
c=c.b
if(!(c<b.length))return A.a(b,c)
f=b[c].a===0}if(!(k<l))return A.a(h,k)
c=h[k]
b=c.a
c=c.b
if(!(c<b.length))return A.a(b,c)
e+=b[c].a
c=a5.ay.b
c.d+=d
b=c.b
c.b=new A.eL(b.a,b.b+d)
if(k<=3){a=q[0]
for(a0=1;a0<j;++a0){if(!(a0<a8))return A.a(q,a0)
a1=q[a0]
if(a1>a)a=a1}g+=a}}i.b=f
i.d=!1
c=!1
if(f){if(1>=l)return A.a(h,1)
b=h[1]
a2=b.a
b=b.b
if(!(b<a2.length))return A.a(a2,b)
a3=a2[b].b
if(2>=l)return A.a(h,2)
b=h[2]
a2=b.a
b=b.b
if(!(b<a2.length))return A.a(a2,b)
a4=a2[b].b
if(3>=l)return A.a(h,3)
l=h[3]
b=l.a
l=l.b
if(!(l<b.length))return A.a(b,l)
l=(b[l].b<<24|a3<<16|a4)>>>0
i.c=l
if(e===0){c=h[0]
b=c.a
c=c.b
if(!(c<b.length))return A.a(b,c)
c=b[c].b<256}if(c){i.d=!0
b=h[0]
a2=b.a
b=b.b
if(!(b<a2.length))return A.a(a2,b)
i.c=(l|a2[b].b<<8)>>>0}l=c}else l=c
l=!l&&g<6
i.e=l
if(l)a5.iy(i)}}return p},
d5(a){var s
if(a<4)return a+1
s=B.a.j(a-2,1)
return B.a.P(2+(a&1),s)+this.b.ak(s)+1},
fm(a,b){var s,r,q
if(b>120)return b-120
else{s=b-1
if(!(s>=0))return A.a(B.bC,s)
r=B.bC[s]
q=(r>>>4)*a+(8-(r&15))
return q>=1?q:1}},
jm(a,b){var s,r,q,p,o,n,m,l,k=B.a.P(1,B.a.a9(8,b.e)),j=new Uint32Array(k),i=b.d
i.toString
s=J.Q(B.n.gt(i),0,null)
r=J.Q(B.n.gt(j),0,null)
i=b.d
if(0>=i.length)return A.a(i,0)
i=i[0]
if(0>=k)return A.a(j,0)
j[0]=i
q=4*a
for(i=s.length,p=r.length,o=r.$flags|0,n=4;n<q;++n){if(!(n<i))return A.a(s,n)
m=s[n]
l=n-4
if(!(l<p))return A.a(r,l)
l=r[l]
o&2&&A.b(r)
if(!(n<p))return A.a(r,n)
r[n]=m+l&255}for(q=4*k;n<q;++n){o&2&&A.b(r)
if(!(n<p))return A.a(r,n)
r[n]=0}b.d=j
return!0},
ct(a,b,c,d,e){var s
if(c===0||a==null)return 0
s=b*B.a.j(e,c)+B.a.j(d,c)
if(!(s<a.length))return A.a(a,s)
return a[s]},
f7(a,b){var s=this,r=s.ct(s.as,s.Q,s.z,a,b),q=s.ax
if(!(r<q.length))return A.a(q,r)
return q[r]}}
A.hU.prototype={
lx(a,b){return this.jp(a,b)}}
A.iH.prototype={
cK(){var s,r,q,p=this.a
if(p<32){s=this.d
r=B.a.a3(s[0],p)
s=s[1]
if(!(p>=0))return A.a(B.a3,p)
q=r+((s&B.a3[p])>>>0)*(B.a3[32-p]+1)}else{s=this.d
q=p===32?s[1]:B.a.a3(s[1],p-32)}return q},
ak(a){var s,r,q=this
if(!q.b&&a<25){s=q.cK()
if(!(a<33))return A.a(B.a3,a)
r=B.a3[a]
q.a+=a
q.c1()
return(s&r)>>>0}else{q.b=!0
throw A.h(A.l("Not enough data in input."))}},
c1(){var s,r,q,p=this,o=p.c,n=p.d,m=n.$flags|0,l=o.c
for(;;){if(!(p.a>=8&&o.d<l))break
s=J.d(o.a,o.d++)
r=n[0]
q=n[1]
m&2&&A.b(n)
n[0]=(r>>>8)+(q&255)*16777216
n[1]=q>>>8
n[1]=(n[1]|s*16777216)>>>0
p.a-=8}}}
A.ll.prototype={}
A.d0.prototype={
a7(){return"VP8LImageTransformType."+this.b}}
A.iI.prototype={
lJ(a,b,c,d,e,f){var s,r,q,p,o=this,n=o.b
switch(o.a.a){case 2:o.l5(e,f,(b-a)*n)
break
case 0:o.lR(a,b,c,d,e,f)
if(b!==o.c){s=f-n
B.n.a6(e,s,s+n,c,f+(b-a-1)*n)}break
case 1:o.ld(a,b,c,d,e,f)
break
case 3:if(d===f&&o.e>0){r=b-a
q=r*A.cd(n,o.e)
p=f+r*n-q
B.n.a6(e,p,p+q,c,f)
o.h8(a,b,c,p,e,f)}else o.h8(a,b,c,d,e,f)
break}},
lc(a,b,c,d){var s,r,q,p,o,n,m=this.e,l=B.a.a9(8,m),k=this.b,j=this.d
if(l<8){s=B.a.P(1,m)-1
r=B.a.P(1,l)-1
for(q=a;q<b;++q)for(p=0,o=0;o<k;++o){if((o&s)>>>0===0){p=J.d(c.a,c.d);++c.d}m=(p&r)>>>0
if(!(m>=0&&m<j.length))return A.a(j,m)
m=j[m]
J.a2(d.a,d.d,m>>>8&255);++d.d
p=B.a.j(p,l)}}else for(q=a;q<b;++q)for(o=0;o<k;++o){n=J.d(c.a,c.d);++c.d
if(!(n>=0&&n<j.length))return A.a(j,n)
m=j[n]
J.a2(d.a,d.d,m>>>8&255);++d.d}},
h8(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=this.e,i=B.a.a9(8,j),h=this.b,g=this.d
if(i<8){s=B.a.P(1,j)-1
r=B.a.P(1,i)-1
for(j=e.$flags|0,q=c.length,p=a;p<b;++p)for(o=0,n=0;n<h;++n,f=l){if((n&s)>>>0===0){m=d+1
if(!(d>=0&&d<q))return A.a(c,d)
o=c[d]>>>8&255
d=m}l=f+1
k=o&r
if(!(k>=0&&k<g.length))return A.a(g,k)
k=g[k]
j&2&&A.b(e)
if(!(f>=0&&f<e.length))return A.a(e,f)
e[f]=k
o=B.a.a9(o,i)}}else for(j=c.length,q=e.$flags|0,p=a;p<b;++p)for(n=0;n<h;++n,f=l,d=m){l=f+1
g.toString
m=d+1
if(!(d>=0&&d<j))return A.a(c,d)
k=c[d]>>>8&255
if(!(k<g.length))return A.a(g,k)
k=g[k]
q&2&&A.b(e)
if(!(f>=0&&f<e.length))return A.a(e,f)
e[f]=k}},
ld(a5,a6,a7,a8,a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.b,a1=a.e,a2=B.a.P(1,a1)-1,a3=A.cd(a0,a1),a4=B.a.j(a5,a.e)*a3
for(a1=a7.length,s=a9.$flags|0,r=a5;r<a6;){q=new Uint8Array(3)
for(p=a4,o=0;o<a0;++o){if((o&a2)>>>0===0){n=a.d
m=p+1
if(!(p<n.length))return A.a(n,p)
n=n[p]
q[0]=n&255
q[1]=n>>>8&255
q[2]=n>>>16&255
p=m}n=b0+o
l=a8+o
if(!(l<a1))return A.a(a7,l)
l=a7[l]
k=l>>>8&255
j=q[0]
i=$.au()
i.$flags&2&&A.b(i)
i[0]=j
j=$.aH()
if(0>=j.length)return A.a(j,0)
h=j[0]
i[0]=k
g=j[0]
f=$.oO()
f.$flags&2&&A.b(f)
f[0]=h*g
e=$.rj()
if(0>=e.length)return A.a(e,0)
d=(l>>>16&255)+(e[0]>>>5)>>>0&255
i[0]=q[1]
h=j[0]
i[0]=k
f[0]=h*j[0]
c=e[0]
i[0]=q[2]
h=j[0]
i[0]=d
f[0]=h*j[0]
b=e[0]
s&2&&A.b(a9)
if(!(n<a9.length))return A.a(a9,n)
a9[n]=(l&4278255360|d<<16|((l&255)+(c>>>5)>>>0)+(b>>>5)>>>0&255)>>>0}b0+=a0
a8+=a0;++r
if((r&a2)>>>0===0)a4+=a3}},
c7(a,b){return(((a&4278255360)>>>0)+((b&4278255360)>>>0)&4278255360|(a&16711935)+(b&16711935)&16711935)>>>0},
lR(b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=4278190080,b0=a8.b
if(b1===0){s=b3.length
if(!(b4<s))return A.a(b3,b4)
r=a8.c7(b3[b4],a9)
b5.$flags&2&&A.b(b5)
q=b5.length
if(!(b6<q))return A.a(b5,b6)
b5[b6]=r
p=b4+1
o=b6+1
n=b0-1
m=b5[b6]
for(r=b5.$flags|0,l=0;l<n;++l){k=p+l
if(!(k<s))return A.a(b3,k)
m=a8.c7(b3[k],m)
k=o+l
r&2&&A.b(b5)
if(!(k<q))return A.a(b5,k)
b5[k]=m}b4+=b0
b6+=b0;++b1}s=a8.e
j=B.a.P(1,s)
i=j-1
h=A.cd(b0,s)
g=B.a.j(b1,a8.e)*h
for(s=b3.length,r=~i,q=b5.length,f=b1;f<b2;){k=b6-b0
if(!(k>=0&&k<q))return A.a(b5,k)
e=b5[k]
if(!(b4<s))return A.a(b3,b4)
k=a8.c7(b3[b4],e)
b5.$flags&2&&A.b(b5)
if(!(b6<q))return A.a(b5,b6)
b5[b6]=k
for(d=g,c=1;c<b0;c=a1,d=b){k=a8.d
b=d+1
if(!(d<k.length))return A.a(k,d)
a=k[d]>>>8&15
a0=$.uG[a]
a1=((c&r)>>>0)+j
if(a1>b0)a1=b0
a2=b4+c
k=b6+c
a3=k-b0
a4=a1-c
if(a===0)for(a5=b5.$flags|0,l=0;l<a4;++l){a6=k+l
a7=a2+l
if(!(a7>=0&&a7<s))return A.a(b3,a7)
a7=a8.c7(b3[a7],a9)
a5&2&&A.b(b5)
if(!(a6>=0&&a6<q))return A.a(b5,a6)
b5[a6]=a7}else if(a===1){a5=k-1
if(!(a5>=0&&a5<q))return A.a(b5,a5)
m=b5[a5]
for(a5=b5.$flags|0,l=0;l<a4;++l){a6=a2+l
if(!(a6>=0&&a6<s))return A.a(b3,a6)
m=a8.c7(b3[a6],m)
a6=k+l
a5&2&&A.b(b5)
if(!(a6>=0&&a6<q))return A.a(b5,a6)
b5[a6]=m}}else for(l=0;l<a4;++l){a5=k+l
a6=a5-1
if(!(a6>=0&&a6<q))return A.a(b5,a6)
e=a0.$3(b5[a6],b5,a3+l)
a6=a2+l
if(!(a6>=0&&a6<s))return A.a(b3,a6)
a6=a8.c7(b3[a6],e)
b5.$flags&2&&A.b(b5)
if(!(a5>=0&&a5<q))return A.a(b5,a5)
b5[a5]=a6}}b4+=b0
b6+=b0;++f
if((f&i)>>>0===0)g+=h}},
l5(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=a.$flags|0,q=0;q<c;++q){p=b+q
if(!(p<s))return A.a(a,p)
o=a[p]
n=o>>>8&255
r&2&&A.b(a)
a[p]=(o&4278255360|(o&16711935)+(n<<16|n)&16711935)>>>0}}}
A.lq.prototype={
ghh(){var s=this,r=s.d
if(r>1||s.e>=4||s.f>1||s.r!==0)return!1
return!0},
lk(a,b,c){var s,r,q,p,o,n,m=this
if(!m.ghh())return!1
s=m.e
if(!(s<4))return A.a(B.c3,s)
r=B.c3[s]
if(m.d===0){s=m.b
q=a*s
p=m.a
B.d.a6(c,q,q+b*s,p.a,p.d-p.b+q)}else{s=a+b
p=m.x
p===$&&A.c()
p.dx=c
o=p.c
if(m.y)s=p.iO(o.a,o.b,s)
else{n=p.cx
n.toString
p=p.dO(n,o.a,o.b,s,t.kX.a(p.glw()))
s=p}if(!s)return!1}if(r!=null){s=m.b
r.$6(s,m.c,s,a,b,c)}if(m.f===1)if(!m.jg(c,m.b,m.c,a,b))return!1
if(a+b>=m.c)m.w=!0
return!0},
jg(a,b,c,d,e){if(b<=0||c<=0||d<0||e<0||d+e>c)return!1
return!0}}
A.fI.prototype={
ii(a,b){var s=this,r=a.G()
s.w=0
s.f=(r&1)!==0
s.r=(r&2)===0
s.x=a.d-a.b
s.y=b-16}}
A.hV.prototype={}
A.hz.prototype={}
A.hA.prototype={}
A.eL.prototype={
gp(a){return this.a.length-this.b}}
A.eK.prototype={
c5(a,b){var s,r,q,p,o,n=b.cK()&255,m=this.a
if(!(a<m.length))return A.a(m,a)
s=m[a]
r=s.a
q=s.b+n
if(!(q<r.length))return A.a(r,q)
p=r[q].a-8
if(p>0){b.a+=8
o=b.cK()
m=m[a]
s=m.a
r=m.b+n
if(!(r<s.length))return A.a(s,r)
n=n+s[r].b+((o&B.a.Y(1,p)-1)>>>0)}else m=s
s=b.a
r=m.a
m=m.b+n
if(!(m>=0&&m<r.length))return A.a(r,m)
m=r[m]
b.a=s+m.a
return m.b}}
A.eM.prototype={}
A.hC.prototype={
eE(a){var s=this.b=this.a,r=A.nJ(a)
s.e=a
s.b=s.a=r}}
A.ea.prototype={
a7(){return"WebPFormat."+this.b}}
A.bT.prototype={$iH:1,
gR(){return this.a},
gN(){return this.b}}
A.eZ.prototype={}
A.lr.prototype={
aJ(a){var s,r=A.v(t.L.a(a),!1,null,0)
this.c=r
try{r=this.f6(r)
return r}catch(s){return!1}},
aq(a){return A.M(new A.lu(this,t.L.a(a)),t.b0)},
l3(a){var s,r,q,p,o=this,n=null,m=A.v(t.L.a(a),!1,n,0)
o.c=m
if(!o.f6(m))return n
m=new A.eZ(B.a7,A.i([],t.J))
o.a=m
s=o.c
s.toString
if(!o.f8(s,m))return n
m=o.a
switch(m.f.a){case 3:s=o.b
A.as(m.a,m.b,s,!1)
for(m=o.a.z,r=m.length,q=0;q<m.length;m.length===r||(0,A.P)(m),++q){p=m[q]
A.as(p.c,p.d,s,!1)}m=o.a
m.as=m.z.length
return m
case 2:s=o.c
s.toString
s.d=m.ay
if(!A.oe(s,m).cE())return n
m=o.a
A.as(m.a,m.b,o.b,!1)
m=o.a
m.as=m.z.length
return m
case 1:s=o.c
s.toString
s.d=m.ay
if(!A.oc(s,m).cE())return n
m=o.a
A.as(m.a,m.b,o.b,!1)
m=o.a
m.as=m.z.length
return m
case 0:throw A.h(A.l("Unknown format for WebP"))}},
ai(a){return A.M(new A.ls(this,a),t.H)},
j_(a){var s,r,q,p,o=this,n=o.c
if(n==null||o.a==null)return null
s=o.a
if(s.e){s=s.z
r=s.length
if(a>=r)return null
if(!(a<r))return A.a(s,a)
q=s[a]
s=q.y
s===$&&A.c()
r=q.x
r===$&&A.c()
return o.fR(n.bX(s,r),a)}r=s.f
if(r===B.av){p=n.bX(s.ch,s.ay)
n=o.a
n.toString
return A.oe(p,n).bI()}else if(r===B.aY){p=n.bX(s.ch,s.ay)
n=o.a
n.toString
return A.oc(p,n).bI()}return null},
aL(a){return A.M(new A.lt(this,t.L.a(a),null),t.H)},
l2(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=null
if(a1.aq(t.L.a(a3))==null)return a2
s=a1.a
r=s.e
if(!r)return a1.ai(0)
new A.bJ(a1.b).c2(0,s.a*s.as,s.b)
for(s=t.N,r=t.P,q=a2,p=q,o=p,n=0;m=a1.a,n<m.as;++n){m=m.z
if(!(n<m.length))return A.a(m,n)
a4=m[n]
l=a1.ai(n)
if(l==null)continue
m=a4.e
l.y=m
if(o==null||p==null){k=a1.a
j=k.a
k=k.b
i=l.gbe()
h=l.a
h=h==null?a2:h.gL()
if(h==null)h=B.f
g=l.y
f=a1.a
e=f.y
d=f.c
f=f.w
if(f.length===0)f=a2
else{f=new A.aw(f)
c=f.gp(0)
b=f.gp(0)
a=new A.bZ(A.F(s,r))
a.bM(new A.ai(f,0,Math.min(c,b),0,!1))
f=a}a0=a1.a.r
o=A.W(d,f,h,g,B.i,k,a0==null?a2:new A.bF("ICC_PROFILE",B.ae,a0),e,i,a2,B.f,j,!1)
p=o}else{p=A.bc(p,!1,!1)
if(q!=null){k=q.f
k===$&&A.c()}else k=!1
if(k){k=q.a
j=q.b
i=q.c
h=q.d
A.qF(p,!1,$.rb(),k,k+i-1,j,j+h-1)}}p.y=m
m=a4.r
m===$&&A.c()
m=m?B.ax:B.a9
A.ow(p,l,m,a2,a2,a4.a,a4.b,a2,a2,a2,a2)
if(p!==o)o.aQ(p)
q=a4}return o},
fR(a,b){var s,r,q,p=null,o=A.i([],t.J),n=new A.eZ(B.a7,o)
if(!this.f8(a,n))return p
if(n.f===B.a7)return p
n.as=this.a.as
if(n.e){s=o.length
if(b>=s)return p
if(!(b<s))return A.a(o,b)
r=o[b]
o=r.y
o===$&&A.c()
s=r.x
s===$&&A.c()
return this.fR(a.bX(o,s),b)}else{q=a.bX(n.ch,n.ay)
o=n.f
if(o===B.av)return A.oe(q,n).bI()
else if(o===B.aY)return A.oc(q,n).bI()}return p},
f6(a){if(a.al(4)!=="RIFF")return!1
a.l()
if(a.al(4)!=="WEBP")return!1
return!0},
f8(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
for(s=a.c,r=a.b;a.d<s;){q=a.al(4)
p=a.l()
o=p+1>>>1<<1>>>0
n=a.d
m=n-r
switch(q){case"VP8X":if(!this.jB(a,b))return!1
break
case"VP8 ":b.ay=m
b.ch=p
b.f=B.aY
break
case"VP8L":b.ay=m
b.ch=p
b.f=B.av
break
case"ALPH":b.toString
n=a.a
l=a.e
k=J.a6(n)
j=k.gp(n)
k=k.gp(n)
n=new A.ai(n,0,Math.min(j,k),0,l)
b.at=n
n.d=a.d
a.d+=o
break
case"ANIM":b.f=B.kV
i=a.l()
n=new Uint8Array(4)
n[0]=i>>>16&255
n[1]=i>>>8&255
n[2]=i&255
n[3]=i>>>24&255
b.c=new A.cl(n)
b.y=a.m()
break
case"ANMF":if(!this.jx(a,b,p))return!1
break
case"ICCP":b.toString
h=a.aE(p)
a.d=a.d+(h.c-h.d)
b.r=h.Z()
break
case"EXIF":b.toString
b.w=a.al(p)
break
case"XMP ":b.toString
a.al(p)
break
default:a.d=n+o
break}n=a.d
g=o-(n-r-m)
if(g>0)a.d=n+g}if(!b.d)b.d=b.at!=null
return b.f!==B.a7},
jB(a,b){var s,r,q,p,o=a.G()
if((o&192)!==0)return!1
s=B.a.j(o,4)
r=B.a.j(o,1)
if((o&1)!==0)return!1
if(a.bm()!==0)return!1
q=a.bm()
p=a.bm()
b.a=q+1
b.b=p+1
b.e=(r&1)!==0
b.d=(s&1)!==0
return!0},
jx(a,b,c){var s=new A.hV(a.bm()*2,a.bm()*2,a.bm()+1,a.bm()+1,a.bm())
s.ii(a,c)
if(s.w!==0)return!1
B.c.B(b.z,s)
return!0}}
A.lu.prototype={
$0(){return this.a.l3(this.b)},
$S:67}
A.ls.prototype={
$0(){return this.a.j_(this.b)},
$S:1}
A.lt.prototype={
$0(){return this.a.l2(this.b,this.c)},
$S:1}
A.hD.prototype={
a7(){return"IccProfileCompression."+this.b}}
A.bF.prototype={
le(){var s,r=this
if(r.b===B.aD)return r.c
s=B.b6.he(t.L.a(r.c),null)
r.c=s
r.b=B.aD
return s}}
A.hx.prototype={
a7(){return"FrameType."+this.b}}
A.ax.prototype={
gaw(){var s=this.x
return s===$?this.x=A.i([],t.g):s},
i9(a,b,c,d){var s,r,q,p=this,o=a.gL(),n=a.gbe(),m=a.a
p.eW(d,b,o,n,m==null?null:m.gU())
o=a.b
if(o!=null)p.b=A.i6(o,t.N,t.w)
o=a.d
if(o!=null){n=t.N
p.d=A.i6(o,n,n)}B.c.B(p.gaw(),p)
if(!c){s=a.gaw().length
for(o=t.g,r=1;r<s;++r){q=a.x
if(q===$)q=a.x=A.i([],o)
if(!(r<q.length))return A.a(q,r)
p.aQ(A.jY(q[r],b,!1,d))}}},
i7(a,b,c){var s,r,q,p,o=this,n=a.b
if(n!=null)o.b=A.i6(n,t.N,t.w)
n=a.d
if(n!=null){s=t.N
o.d=A.i6(n,s,s)}B.c.B(o.gaw(),o)
if(!b&&a.gaw().length>1){r=a.gaw().length
for(n=t.g,q=1;q<r;++q){p=a.x
if(p===$)p=a.x=A.i([],n)
if(!(q<p.length))return A.a(p,q)
o.aQ(A.bc(p[q],!1,!1))}}},
i8(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
B.c.B(c.gaw(),c)
if(a9>4)throw A.h(A.l("An Image can only have 1-4 channels."))
if(a9===1)b0=B.cQ
else if(a9===2)b0=B.cP
else if(a9===3){if(b0!==B.b7&&b0!==B.aC)b0=B.b7}else if(a9===4)if(b0!==B.ac&&b0!==B.ab&&b0!==B.aB&&b0!==B.ad)b0=B.ab
c.fh(b5,a6,a1,a2,a7,a9,b1,b2,!1)
s=c.a
if(s==null)return
r=J.D(s.gt(s))
q=J.Q(b,a0,null)
if(a2===B.v)b3=B.b.ab(b5*a9/8)
else if(a2===B.y){s=B.b.ab(b5*a9/4)
b3=s}else{s=b5*a9
if(a2===B.z)s=B.b.ab(s/2)
else{p=B.jW.k(0,a2)
p.toString
p=s*p
s=p}b3=s}o=c.a.gaD()
n=Math.min(b3,o)
for(m=0,l=0,k=0;k<a6;++k,l+=b3,m+=o){j=q.BYTES_PER_ELEMENT
i=A.b1(l,l+n,B.a.a1(q.byteLength,j))
B.d.ap(r,m,m+n,J.Q(B.d.gt(q),q.byteOffset+l*j,(i-l)*j))}if(a9===3&&b0===B.aC)for(s=c.a,s=s.gE(s);s.D();){h=s.gJ()
g=h.gq()
h.sq(h.gu())
h.su(g)}else{s=a9===4
if(s&&b0===B.aB)for(s=c.a,s=s.gE(s);s.D();){h=s.gJ()
g=h.gq()
f=h.gv()
e=h.gu()
h.sq(h.gA())
h.sv(e)
h.su(f)
h.sA(g)}else if(s&&b0===B.ad)for(s=c.a,s=s.gE(s);s.D();){h=s.gJ()
g=h.gq()
f=h.gv()
e=h.gu()
h.sq(h.gA())
h.sv(g)
h.su(f)
h.sA(e)}else if(s&&b0===B.ac)for(s=c.a,s=s.gE(s);s.D();){h=s.gJ()
g=h.gq()
f=h.gv()
e=h.gu()
d=h.gA()
h.sq(e)
h.sv(f)
h.su(g)
h.sA(d)}}},
aQ(a){var s=this
if(a==null)a=A.bc(s,!0,!0)
a.z=s.gaw().length
if(s.gaw().length===0||B.c.gdq(s.gaw())!==a)B.c.B(s.gaw(),a)
return a},
dg(){return this.aQ(null)},
fh(a,b,c,d,e,f,g,h,i){var s,r=this
if(a<0||b<0)throw A.h(A.av("Invalid image dimensions "+a+"x"+b,null))
r.c=e
if(c!=null)r.e=A.eB(c)
s=!1
if(g==null)if(i)s=r.gL()===B.v||r.gL()===B.y||r.gL()===B.z||r.gL()===B.f||r.gL()===B.o
r.eW(a,b,d,f,s?r.iI(d,h,f):g)},
eW(a,b,c,d,e){var s,r,q=this,p=null
switch(c.a){case 0:if(e==null){s=B.b.ab(a*d/8)
r=new A.dJ($,s,p,a,b,d)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}else{s=B.b.ab(a/8)
r=new A.dJ($,s,e,a,b,1)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}break
case 1:if(e==null){s=B.b.ab(a*(d<<1>>>0)/8)
r=new A.dK($,s,p,a,b,d)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}else{s=B.b.ab(a/4)
r=new A.dK($,s,e,a,b,1)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}break
case 2:if(e==null){if(d===2)s=a
else if(d===4)s=a*2
else s=d===3?B.b.ab(a*1.5):B.b.ab(a/2)
r=new A.dM($,s,p,a,b,d)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}else{s=B.b.ab(a/2)
r=new A.dM($,s,e,a,b,1)
s=Math.max(s*b,1)
r.d=new Uint8Array(s)
q.a=r}break
case 3:if(e==null)q.a=A.pn(a,b,d)
else q.a=new A.dN(new Uint8Array(a*b),e,a,b,1)
break
case 4:s=a*b
if(e==null)q.a=new A.cy(new Uint16Array(s*d),p,a,b,d)
else q.a=new A.cy(new Uint16Array(s),e,a,b,1)
break
case 5:q.a=A.td(a,b,d)
break
case 6:q.a=new A.eQ(new Int8Array(a*b*d),a,b,d)
break
case 7:q.a=new A.eO(new Int16Array(a*b*d),a,b,d)
break
case 8:q.a=new A.eP(new Int32Array(a*b*d),a,b,d)
break
case 9:q.a=A.tb(a,b,d)
break
case 10:q.a=A.tc(a,b,d)
break
case 11:q.a=new A.eN(new Float64Array(a*b*4*d),a,b,d)
break}},
C(a){var s=this
return"Image("+s.gR()+", "+s.gN()+", "+s.gL().b+", "+s.gbe()+")"},
gR(){var s=this.a
s=s==null?null:s.a
return s==null?0:s},
gN(){var s=this.a
s=s==null?null:s.b
return s==null?0:s},
gL(){var s=this.a
s=s==null?null:s.gL()
return s==null?B.f:s},
gcj(){var s=this.e
return s==null?this.e=new A.bZ(A.F(t.N,t.P)):s},
hO(a,b){var s=this,r=s.b;(r==null?s.b=A.F(t.N,t.w):r).i(0,a,b)
if(s.b.a===0)s.b=null},
gE(a){var s=this.a
return s.gE(s)},
gt(a){var s=this.a
s=s==null?null:s.gt(s)
if(s==null)s=B.d.gt(new Uint8Array(0))
return s},
Z(){var s=this.a
s=s==null?null:J.D(s.gt(s))
return s==null?J.D(this.gt(0)):s},
gbe(){var s=this.a
s=s==null?null:s.gU()
s=s==null?null:s.b
if(s==null){s=this.a
s=s==null?null:s.c}return s==null?0:s},
gbj(){var s=this.a
return(s==null?null:s.gU())!=null},
gaK(){var s=this.a
s=s==null?null:s.gaK()
return s==null?0:s},
hg(a,b){return a>=0&&b>=0&&a<this.gR()&&b<this.gN()},
aV(a,b,c,d){var s=this.a
s=s==null?null:s.aV(a,b,c,d)
if(s==null)s=new A.b9(new Uint8Array(0))
return s},
a0(a,b,c){var s=this.a
s=s==null?null:s.a0(a,b,c)
return s==null?new A.J():s},
es(a,b){return this.a0(a,b,null)},
aB(a,b){if(a<0||a>=this.gR()||b<0||b>=this.gN())return new A.J()
return this.a0(a,b,null)},
hK(a,b,c){switch(c.a){case 0:return this.aB(B.b.h(a),B.b.h(b))
case 1:case 3:return this.hL(a,b)
case 2:return this.hJ(a,b)}},
hL(a,b){var s,r,q,p,o,n,m=this,l=B.b.h(a),k=l-(a>=0?0:1),j=k+1
l=B.b.h(b)
s=l-(b>=0?0:1)
r=s+1
l=new A.k_(a-k,b-s)
q=m.aB(k,s)
p=r>=m.gN()?q:m.aB(k,r)
o=j>=m.gR()?q:m.aB(j,s)
n=j>=m.gR()||r>=m.gN()?q:m.aB(j,r)
return m.aV(l.$4(q.gq(),o.gq(),p.gq(),n.gq()),l.$4(q.gv(),o.gv(),p.gv(),n.gv()),l.$4(q.gu(),o.gu(),p.gu(),n.gu()),l.$4(q.gA(),o.gA(),p.gA(),n.gA()))},
hJ(c8,c9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2=this,c3=B.b.h(c8),c4=c3-(c8>=0?0:1),c5=c4-1,c6=c4+1,c7=c4+2
c3=B.b.h(c9)
s=c3-(c9>=0?0:1)
r=s-1
q=s+1
p=s+2
o=c8-c4
n=c9-s
c3=new A.jZ()
m=c2.aB(c4,s)
l=c5<0
k=!l
j=!k||r<0?m:c2.aB(c5,r)
i=r<0
h=i?m:c2.aB(c4,r)
g=i||c6>=c2.gR()?m:c2.aB(c6,r)
f=c7>=c2.gR()||i?m:c2.aB(c7,r)
e=c3.$5(o,j.gq(),h.gq(),g.gq(),f.gq())
d=c3.$5(o,j.gv(),h.gv(),g.gv(),f.gv())
c=c3.$5(o,j.gu(),h.gu(),g.gu(),f.gu())
b=c3.$5(o,j.gA(),h.gA(),g.gA(),f.gA())
a=l?m:c2.aB(c5,s)
a0=c6>=c2.gR()?m:c2.aB(c6,s)
a1=c7>=c2.gR()?m:c2.aB(c7,s)
a2=c3.$5(o,a.gq(),m.gq(),a0.gq(),a1.gq())
a3=c3.$5(o,a.gv(),m.gv(),a0.gv(),a1.gv())
a4=c3.$5(o,a.gu(),m.gu(),a0.gu(),a1.gu())
a5=c3.$5(o,a.gA(),m.gA(),a0.gA(),a1.gA())
a6=!k||q>=c2.gN()?m:c2.aB(c5,q)
a7=q>=c2.gN()?m:c2.aB(c4,q)
a8=c6>=c2.gR()||q>=c2.gN()?m:c2.aB(c6,q)
a9=c7>=c2.gR()||q>=c2.gN()?m:c2.aB(c7,q)
b0=c3.$5(o,a6.gq(),a7.gq(),a8.gq(),a9.gq())
b1=c3.$5(o,a6.gv(),a7.gv(),a8.gv(),a9.gv())
b2=c3.$5(o,a6.gu(),a7.gu(),a8.gu(),a9.gu())
b3=c3.$5(o,a6.gA(),a7.gA(),a8.gA(),a9.gA())
b4=!k||p>=c2.gN()?m:c2.aB(c5,p)
b5=p>=c2.gN()?m:c2.aB(c4,p)
b6=c6>=c2.gR()||p>=c2.gN()?m:c2.aB(c6,p)
b7=c7>=c2.gR()||p>=c2.gN()?m:c2.aB(c7,p)
b8=c3.$5(o,b4.gq(),b5.gq(),b6.gq(),b7.gq())
b9=c3.$5(o,b4.gv(),b5.gv(),b6.gv(),b7.gv())
c0=c3.$5(o,b4.gu(),b5.gu(),b6.gu(),b7.gu())
c1=c3.$5(o,b4.gA(),b5.gA(),b6.gA(),b7.gA())
return c2.aV(c3.$5(n,e,a2,b0,b8),c3.$5(n,d,a3,b1,b9),c3.$5(n,c,a4,b2,c0),c3.$5(n,b,a5,b3,c1))},
c6(a,b,c){var s
if(t.mK.b(c))if(c.gbd().gU()!=null)if(this.gbj()){s=this.a
if(s!=null)s.aH(a,b,c.gS(),0,0)
return}s=this.a
if(s!=null)s.az(a,b,c.gq(),c.gv(),c.gu(),c.gA())},
gF(){var s=this.a
s=s==null?null:s.gF()
return s==null?0:s},
aZ(a,b){var s=this.a
return s==null?null:s.aZ(0,b)},
aR(a){return this.aZ(0,null)},
dj(a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=null
if(a8==null)a8=a5.gL()
if(a9==null)a9=a5.gbe()
a7=B.c6.k(0,a8)
s=!1
if(a8===a5.gL())if(a9===a5.gbe()){r=a5.a
s=(r==null?a6:r.gU())==null}if(s){q=A.bc(a5,!1,!1)
return q}for(s=a5.gaw(),r=s.length,p=t.N,o=t.p,n=a6,m=0;m<s.length;s.length===r||(0,A.P)(s),++m,n=d){l=s[m]
k=l.a
j=k==null
i=j?a6:k.a
if(i==null)i=0
k=j?a6:k.b
if(k==null)k=0
j=l.e
j=j==null?a6:A.eB(j)
h=l.c
if(h==null)h=a6
else{g=h.a
f=h.b
h=h.c
h=new A.bF(g,f,new Uint8Array(h.subarray(0,A.j0(0,a6,h.length))))}g=l.f
g=g==null?a6:new A.b9(new Uint8Array(A.q(g.a)))
f=l.w
e=l.r
q=A.W(g,j,a8,l.y,f,k,h,e,a9,a6,B.f,i,!1)
k=l.d
q.sm5(k!=null?A.i6(k,p,p):a6)
if(n!=null){n.aQ(q)
d=n}else d=q
k=q.a
c=k==null?a6:k.gU()
k=q.a
k=k==null?a6:k.gU()
b=k==null?a6:k.gL()
if(b==null)b=a8
k=l.a
if(c!=null){a=A.F(o,o)
a0=k==null?a6:k.a0(0,0,a6)
if(a0==null)a0=new A.J()
for(k=q.a,k=k.gE(k),a1=0;k.D();){a2=k.gJ()
a3=A.qS(B.b.a2(a0.gag()*255),B.b.a2(a0.gad()*255),B.b.a2(a0.gaf()*255),0)
if(a.aN(a3)){j=a.k(0,a3)
j.toString
a2.sS(j)}else{a.i(0,a3,a1)
a2.sS(a1)
a4=A.ox(a0,a7,b,a9,a6)
c.b9(a1,a4.gq(),a4.gv(),a4.gu());++a1}a0.D()}}else{a0=k==null?a6:k.a0(0,0,a6)
if(a0==null)a0=new A.J()
for(k=q.a,k=k.gE(k);k.D();){A.ox(a0,a7,a6,a6,k.gJ())
a0.D()}}}n.toString
return n},
lh(a,b){return this.dj(null,a,b)},
lg(a,b){return this.dj(a,null,b)},
ha(a){return this.dj(null,null,a)},
lf(a){return this.dj(null,a,null)},
l6(a){var s,r,q,p
t.je.a(a)
if(this.d==null){s=t.N
this.d=A.F(s,s)}for(s=new A.ad(a,a.r,a.e,A.n(a).n("ad<1>"));s.D();){r=s.d
q=this.d
q.toString
p=a.k(0,r)
p.toString
q.i(0,r,p)}},
iI(a,b,c){var s,r=65536
switch(b.a){case 0:return null
case 1:return null
case 2:return null
case 3:s=a===B.o?r:256
return new A.b_(new Uint8Array(s*c),s,c)
case 4:s=a===B.o?r:256
return new A.fm(new Uint16Array(s*c),s,c)
case 5:s=a===B.o?r:256
return new A.dW(new Uint32Array(s*c),s,c)
case 6:s=a===B.o?r:256
return new A.fl(new Int8Array(s*c),s,c)
case 7:s=a===B.o?r:256
return new A.fj(new Int16Array(s*c),s,c)
case 8:s=a===B.o?r:256
return new A.fk(new Int32Array(s*c),s,c)
case 9:s=a===B.o?r:256
return new A.fg(new Uint16Array(s*c),s,c)
case 10:s=a===B.o?r:256
return new A.fh(new Float32Array(s*c),s,c)
case 11:s=a===B.o?r:256
return new A.fi(new Float64Array(s*c),s,c)}},
sm5(a){this.d=t.lG.a(a)}}
A.k_.prototype={
$4(a,b,c,d){var s=this.b
return a+this.a*(b-a+s*(a+d-c-b))+s*(c-a)},
$S:68}
A.jZ.prototype={
$5(a,b,c,d,e){var s=-b,r=a*a
return c+0.5*(a*(s+d)+r*(2*b-5*c+4*d-e)+r*a*(s+3*c-3*d+e))},
$S:69}
A.an.prototype={
gU(){return null},
hH(a,b){var s,r,q,p,o,n,m,l=this
if(b==null)return J.D(l.gt(l))
s=l.c
if(s===4){s=b===B.aB
if(s||b===B.ad||b===B.ac){r=a?l:l.M()
if(s)for(s=r.gE(r);s.D();){q=s.gJ()
p=q.gq()
o=q.gv()
n=q.gu()
q.sq(q.gA())
q.sv(n)
q.su(o)
q.sA(p)}else if(b===B.ad)for(s=r.gE(r);s.D();){q=s.gJ()
p=q.gq()
o=q.gv()
n=q.gu()
q.sq(q.gA())
q.sv(p)
q.su(o)
q.sA(n)}else if(b===B.ac)for(s=r.gE(r);s.D();){q=s.gJ()
p=q.gq()
o=q.gv()
n=q.gu()
m=q.gA()
q.sq(n)
q.sv(o)
q.su(p)
q.sA(m)}return J.D(r.gt(r))}}else if(s===3)if(b===B.aC){r=a?l:l.M()
for(s=r.gE(r);s.D();){q=s.gJ()
p=q.gq()
q.sq(q.gu())
q.su(p)}return J.D(r.gt(r))}return J.D(l.gt(l))}}
A.dH.prototype={
ao(a){var s=this,r=s.d
if(a)r=new Uint16Array(r.length)
else r=new Uint16Array(A.q(r))
return new A.dH(r,s.a,s.b,s.c)},
M(){return this.ao(!1)},
gL(){return B.C},
gt(a){return B.q.gt(this.d)},
gaK(){return 16},
gaD(){return this.a*this.c*2},
gE(a){return A.nT(this)},
bf(a,b,c,d,e){return A.bg(A.nT(this),b,c,d,e)},
gp(a){return this.d.byteLength},
gF(){return 1},
gbk(){return!0},
aV(a,b,c,d){var s=new Uint16Array(4),r=new A.dn(s)
s[0]=A.N(a)
s[1]=A.N(b)
s[2]=A.N(c)
s[3]=A.N(d)
s=r
return s},
a0(a,b,c){if(c==null||!(c instanceof A.cK)||c.d!==this)c=A.nT(this)
c.a5(a,b)
return c},
aP(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=A.N(c)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
aH(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=A.N(c)
p.$flags&2&&A.b(p)
s=p.length
if(!(q>=0&&q<s))return A.a(p,q)
p[q]=o
if(r>2){r=q+1
o=A.N(d)
if(!(r<s))return A.a(p,r)
p[r]=o
o=q+2
r=A.N(e)
if(!(o<s))return A.a(p,o)
p[o]=r}},
az(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=A.N(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q===2){q=p+1
n=A.N(f)
if(!(q<s))return A.a(o,q)
o[q]=n}else if(q>2){n=p+1
r=A.N(d)
if(!(n<s))return A.a(o,n)
o[n]=r
r=p+2
n=A.N(e)
if(!(r<s))return A.a(o,r)
o[r]=n
if(q>3){q=p+3
n=A.N(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
C(a){return"ImageDataFloat16("+this.a+", "+this.b+", "+this.c+")"},
aZ(a,b){}}
A.dI.prototype={
ao(a){var s=this,r=s.d
if(a)r=new Float32Array(r.length)
else r=new Float32Array(A.q(r))
return new A.dI(r,s.a,s.b,s.c)},
M(){return this.ao(!1)},
gL(){return B.F},
gt(a){return B.P.gt(this.d)},
gaK(){return 32},
gE(a){return A.nU(this)},
bf(a,b,c,d,e){return A.bg(A.nU(this),b,c,d,e)},
gp(a){return this.d.byteLength},
gF(){return 1},
gaD(){return this.a*this.c*4},
gbk(){return!0},
aV(a,b,c,d){var s=new Float32Array(4),r=new A.dp(s)
s[0]=a
s[1]=b
s[2]=c
s[3]=d
s=r
return s},
a0(a,b,c){if(c==null||!(c instanceof A.cL)||c.d!==this)c=A.nU(this)
c.a5(a,b)
return c},
aP(a,b,c){var s=this.c,r=b*this.a*s+a*s
s=this.d
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=c},
aH(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d
p.$flags&2&&A.b(p)
s=p.length
if(!(q>=0&&q<s))return A.a(p,q)
p[q]=c
if(r>2){r=q+1
if(!(r<s))return A.a(p,r)
p[r]=d
r=q+2
if(!(r<s))return A.a(p,r)
p[r]=e}},
az(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=c
if(q===2){q=p+1
if(!(q<s))return A.a(o,q)
o[q]=f}else if(q>2){r=p+1
if(!(r<s))return A.a(o,r)
o[r]=d
r=p+2
if(!(r<s))return A.a(o,r)
o[r]=e
if(q>3){q=p+3
if(!(q<s))return A.a(o,q)
o[q]=f}}},
C(a){return"ImageDataFloat32("+this.a+", "+this.b+", "+this.c+")"},
aZ(a,b){}}
A.eN.prototype={
ao(a){var s=this,r=s.d
if(a)r=new Float64Array(r.length)
else r=new Float64Array(A.q(r))
return new A.eN(r,s.a,s.b,s.c)},
M(){return this.ao(!1)},
gL(){return B.H},
gt(a){return B.k.gt(this.d)},
gp(a){return this.d.byteLength},
gaK(){return 64},
gE(a){return A.nV(this)},
bf(a,b,c,d,e){return A.bg(A.nV(this),b,c,d,e)},
gF(){return 1},
gaD(){return this.a*this.c*8},
gbk(){return!0},
aV(a,b,c,d){var s=new Float64Array(4),r=new A.dq(s)
s[0]=a
s[1]=b
s[2]=c
s[3]=d
s=r
return s},
a0(a,b,c){if(c==null||!(c instanceof A.cM)||c.d!==this)c=A.nV(this)
c.a5(a,b)
return c},
aP(a,b,c){var s=this.c,r=b*this.a*s+a*s
s=this.d
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=c},
aH(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d
p.$flags&2&&A.b(p)
s=p.length
if(!(q>=0&&q<s))return A.a(p,q)
p[q]=c
if(r>2){r=q+1
if(!(r<s))return A.a(p,r)
p[r]=d
r=q+2
if(!(r<s))return A.a(p,r)
p[r]=e}},
az(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=c
if(q===2){q=p+1
if(!(q<s))return A.a(o,q)
o[q]=f}else if(q>2){r=p+1
if(!(r<s))return A.a(o,r)
o[r]=d
r=p+2
if(!(r<s))return A.a(o,r)
o[r]=e
if(q>3){q=p+3
if(!(q<s))return A.a(o,q)
o[q]=f}}},
C(a){return"ImageDataFloat64("+this.a+", "+this.b+", "+this.c+")"},
aZ(a,b){}}
A.eO.prototype={
ao(a){var s=this,r=s.d
if(a)r=new Int16Array(r.length)
else r=new Int16Array(A.q(r))
return new A.eO(r,s.a,s.b,s.c)},
M(){return this.ao(!1)},
gL(){return B.N},
gt(a){return B.Q.gt(this.d)},
gE(a){return A.nW(this)},
bf(a,b,c,d,e){return A.bg(A.nW(this),b,c,d,e)},
gp(a){return this.d.byteLength},
gF(){return 32767},
gbk(){return!0},
gaK(){return 16},
gaD(){return this.a*this.c*2},
aV(a,b,c,d){var s=B.b.h(a),r=B.b.h(b),q=B.b.h(c),p=B.b.h(d),o=new Int16Array(4),n=new A.dr(o)
o[0]=s
o[1]=r
o[2]=q
o[3]=p
s=n
return s},
a0(a,b,c){if(c==null||!(c instanceof A.cN)||c.d!==this)c=A.nW(this)
c.a5(a,b)
return c},
aP(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=B.b.h(c)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
aH(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.h(c)
p.$flags&2&&A.b(p)
s=p.length
if(!(q>=0&&q<s))return A.a(p,q)
p[q]=o
if(r>2){r=q+1
o=B.b.h(d)
if(!(r<s))return A.a(p,r)
p[r]=o
o=q+2
r=B.b.h(e)
if(!(o<s))return A.a(p,o)
p[o]=r}},
az(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.h(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q===2){q=p+1
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}else if(q>2){n=p+1
r=B.b.h(d)
if(!(n<s))return A.a(o,n)
o[n]=r
r=p+2
n=B.b.h(e)
if(!(r<s))return A.a(o,r)
o[r]=n
if(q>3){q=p+3
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
C(a){return"ImageDataInt16("+this.a+", "+this.b+", "+this.c+")"},
aZ(a,b){}}
A.eP.prototype={
ao(a){var s=this,r=s.d
if(a)r=new Int32Array(r.length)
else r=new Int32Array(A.q(r))
return new A.eP(r,s.a,s.b,s.c)},
M(){return this.ao(!1)},
gL(){return B.O},
gt(a){return B.l.gt(this.d)},
gaK(){return 32},
gaD(){return this.a*this.c*4},
gE(a){return A.nX(this)},
bf(a,b,c,d,e){return A.bg(A.nX(this),b,c,d,e)},
gp(a){return this.d.byteLength},
gF(){return 2147483647},
gbk(){return!0},
aV(a,b,c,d){var s=B.b.h(a),r=B.b.h(b),q=B.b.h(c),p=B.b.h(d),o=new Int32Array(4),n=new A.ds(o)
o[0]=s
o[1]=r
o[2]=q
o[3]=p
s=n
return s},
a0(a,b,c){if(c==null||!(c instanceof A.cO)||c.d!==this)c=A.nX(this)
c.a5(a,b)
return c},
aP(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=B.b.h(c)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
aH(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.h(c)
p.$flags&2&&A.b(p)
s=p.length
if(!(q>=0&&q<s))return A.a(p,q)
p[q]=o
if(r>2){r=q+1
o=B.b.h(d)
if(!(r<s))return A.a(p,r)
p[r]=o
o=q+2
r=B.b.h(e)
if(!(o<s))return A.a(p,o)
p[o]=r}},
az(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.h(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q===2){q=p+1
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}else if(q>2){n=p+1
r=B.b.h(d)
if(!(n<s))return A.a(o,n)
o[n]=r
r=p+2
n=B.b.h(e)
if(!(r<s))return A.a(o,r)
o[r]=n
if(q>3){q=p+3
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
C(a){return"ImageDataInt32("+this.a+", "+this.b+", "+this.c+")"},
aZ(a,b){}}
A.eQ.prototype={
ao(a){var s=this,r=s.d
if(a)r=new Int8Array(r.length)
else r=new Int8Array(A.q(r))
return new A.eQ(r,s.a,s.b,s.c)},
M(){return this.ao(!1)},
gL(){return B.M},
gt(a){return B.Z.gt(this.d)},
gaD(){return this.a*this.c},
gE(a){return A.nY(this)},
bf(a,b,c,d,e){return A.bg(A.nY(this),b,c,d,e)},
gp(a){return this.d.byteLength},
gF(){return 127},
gbk(){return!0},
gaK(){return 8},
aV(a,b,c,d){var s=B.b.h(a),r=B.b.h(b),q=B.b.h(c),p=B.b.h(d),o=new Int8Array(4),n=new A.dt(o)
o[0]=s
o[1]=r
o[2]=q
o[3]=p
s=n
return s},
a0(a,b,c){if(c==null||!(c instanceof A.cP)||c.d!==this)c=A.nY(this)
c.a5(a,b)
return c},
aP(a,b,c){var s,r=this.c,q=b*(this.a*r)+a*r
r=this.d
s=B.b.h(c)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
aH(a,b,c,d,e){var s,r=this.c,q=b*(this.a*r)+a*r,p=this.d,o=B.b.h(c)
p.$flags&2&&A.b(p)
s=p.length
if(!(q>=0&&q<s))return A.a(p,q)
p[q]=o
if(r>2){r=q+1
o=B.b.h(d)
if(!(r<s))return A.a(p,r)
p[r]=o
o=q+2
r=B.b.h(e)
if(!(o<s))return A.a(p,o)
p[o]=r}},
az(a,b,c,d,e,f){var s,r,q=this.c,p=b*(this.a*q)+a*q,o=this.d,n=B.b.h(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q===2){q=p+1
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}else if(q>2){n=p+1
r=B.b.h(d)
if(!(n<s))return A.a(o,n)
o[n]=r
r=p+2
n=B.b.h(e)
if(!(r<s))return A.a(o,r)
o[r]=n
if(q>3){q=p+3
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
C(a){return"ImageDataInt8("+this.a+", "+this.b+", "+this.c+")"},
aZ(a,b){}}
A.dJ.prototype={
mf(a,b,c){var s=Math.max(this.e*b,1)
s=new Uint8Array(s)
this.d!==$&&A.U()
this.d=s},
ao(a){var s,r=this,q=r.d
if(a){q===$&&A.c()
q=new Uint8Array(q.length)}else{q===$&&A.c()
q=new Uint8Array(A.q(q))}s=r.f
s=s==null?null:s.M()
return new A.dJ(q,r.e,s,r.a,r.b,r.c)},
M(){return this.ao(!1)},
gL(){return B.v},
gp(a){var s=this.d
s===$&&A.c()
return s.byteLength},
gF(){var s=this.f
s=s==null?null:s.gF()
return s==null?1:s},
gbk(){return!1},
gt(a){var s=this.d
s===$&&A.c()
return B.d.gt(s)},
gaK(){return 1},
gE(a){return A.fn(this)},
bf(a,b,c,d,e){return A.bg(A.fn(this),b,c,d,e)},
aV(a,b,c,d){var s=new A.du(4,0)
s.aj(B.b.h(a),B.b.h(b),B.b.h(c),B.b.h(d))
return s},
a0(a,b,c){if(c==null||!(c instanceof A.cQ)||c.f!==this)c=A.fn(this)
c.a5(a,b)
return c},
aP(a,b,c){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.fn(r):s).a5(a,b)
r.r.ar(0,c)},
aH(a,b,c,d,e){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.fn(r):s).a5(a,b)
r.r.aC(c,d,e)},
az(a,b,c,d,e,f){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.fn(r):s).a5(a,b)
r.r.aj(c,d,e,f)},
C(a){return"ImageDataUint1("+this.a+", "+this.b+", "+this.c+")"},
aZ(a,b){},
gaD(){return this.e},
gU(){return this.f}}
A.cy.prototype={
ao(a){var s,r=this,q=r.d
if(a)q=new Uint16Array(q.length)
else q=new Uint16Array(A.q(q))
s=r.e
s=s==null?null:s.M()
return new A.cy(q,s,r.a,r.b,r.c)},
M(){return this.ao(!1)},
gL(){return B.o},
gt(a){return B.q.gt(this.d)},
gaK(){return 16},
gF(){var s=this.e
s=s==null?null:s.gF()
return s==null?65535:s},
gaD(){return this.a*this.c*2},
gE(a){return A.nZ(this)},
bf(a,b,c,d,e){return A.bg(A.nZ(this),b,c,d,e)},
gp(a){return this.d.byteLength},
gbk(){return!0},
aV(a,b,c,d){var s=B.b.h(a),r=B.b.h(b),q=B.b.h(c),p=B.b.h(d),o=new Uint16Array(4),n=new A.dv(o)
o[0]=s
o[1]=r
o[2]=q
o[3]=p
s=n
return s},
a0(a,b,c){if(c==null||!(c instanceof A.cR)||c.d!==this)c=A.nZ(this)
c.a5(a,b)
return c},
aP(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=B.b.h(c)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
aH(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.h(c)
p.$flags&2&&A.b(p)
s=p.length
if(!(q>=0&&q<s))return A.a(p,q)
p[q]=o
if(r>2){r=q+1
o=B.b.h(d)
if(!(r<s))return A.a(p,r)
p[r]=o
o=q+2
r=B.b.h(e)
if(!(o<s))return A.a(p,o)
p[o]=r}},
az(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.h(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q===2){q=p+1
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}else if(q>2){n=p+1
r=B.b.h(d)
if(!(n<s))return A.a(o,n)
o[n]=r
r=p+2
n=B.b.h(e)
if(!(r<s))return A.a(o,r)
o[r]=n
if(q>3){q=p+3
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
C(a){return"ImageDataUint16("+this.a+", "+this.b+", "+this.c+")"},
aZ(a,b){},
gU(){return this.e}}
A.dK.prototype={
mg(a,b,c){var s=Math.max(this.e*b,1)
s=new Uint8Array(s)
this.d!==$&&A.U()
this.d=s},
ao(a){var s,r=this,q=r.d
if(a){q===$&&A.c()
q=new Uint8Array(q.length)}else{q===$&&A.c()
q=new Uint8Array(A.q(q))}s=r.f
s=s==null?null:s.M()
return new A.dK(q,r.e,s,r.a,r.b,r.c)},
M(){return this.ao(!1)},
gL(){return B.y},
gaK(){return 2},
gt(a){var s=this.d
s===$&&A.c()
return B.d.gt(s)},
gE(a){return A.fo(this)},
bf(a,b,c,d,e){return A.bg(A.fo(this),b,c,d,e)},
gp(a){var s=this.d
s===$&&A.c()
return s.byteLength},
gF(){var s=this.f
s=s==null?null:s.gF()
return s==null?3:s},
gbk(){return!1},
aV(a,b,c,d){var s=new A.dw(4,0)
s.aj(B.b.h(a),B.b.h(b),B.b.h(c),B.b.h(d))
return s},
a0(a,b,c){if(c==null||!(c instanceof A.cS)||c.f!==this)c=A.fo(this)
c.a5(a,b)
return c},
aP(a,b,c){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.fo(r):s).a5(a,b)
r.r.au(0,c)},
aH(a,b,c,d,e){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.fo(r):s).a5(a,b)
r.r.aC(c,d,e)},
az(a,b,c,d,e,f){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.fo(r):s).a5(a,b)
r.r.aj(c,d,e,f)},
C(a){return"ImageDataUint2("+this.a+", "+this.b+", "+this.c+")"},
aZ(a,b){},
gaD(){return this.e},
gU(){return this.f}}
A.dL.prototype={
ao(a){var s=this,r=s.d
if(a)r=new Uint32Array(r.length)
else r=new Uint32Array(A.q(r))
return new A.dL(r,s.a,s.b,s.c)},
M(){return this.ao(!1)},
gL(){return B.I},
gt(a){return B.n.gt(this.d)},
gaD(){return this.a*this.c*4},
gaK(){return 32},
gF(){return 4294967295},
gE(a){return A.o_(this)},
bf(a,b,c,d,e){return A.bg(A.o_(this),b,c,d,e)},
gp(a){return this.d.byteLength},
gbk(){return!0},
aV(a,b,c,d){var s=B.b.h(a),r=B.b.h(b),q=B.b.h(c),p=B.b.h(d),o=new Uint32Array(4),n=new A.dx(o)
o[0]=s
o[1]=r
o[2]=q
o[3]=p
s=n
return s},
a0(a,b,c){if(c==null||!(c instanceof A.cT)||c.d!==this)c=A.o_(this)
c.a5(a,b)
return c},
aP(a,b,c){var s,r=this.c,q=b*this.a*r+a*r
r=this.d
s=B.b.h(c)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
aH(a,b,c,d,e){var s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.b.h(c)
p.$flags&2&&A.b(p)
s=p.length
if(!(q>=0&&q<s))return A.a(p,q)
p[q]=o
if(r>2){r=q+1
o=B.b.h(d)
if(!(r<s))return A.a(p,r)
p[r]=o
o=q+2
r=B.b.h(e)
if(!(o<s))return A.a(p,o)
p[o]=r}},
az(a,b,c,d,e,f){var s,r,q=this.c,p=b*this.a*q+a*q,o=this.d,n=B.b.h(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q===2){q=p+1
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}else if(q>2){n=p+1
r=B.b.h(d)
if(!(n<s))return A.a(o,n)
o[n]=r
r=p+2
n=B.b.h(e)
if(!(r<s))return A.a(o,r)
o[r]=n
if(q>3){q=p+3
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
C(a){return"ImageDataUint32("+this.a+", "+this.b+", "+this.c+")"},
aZ(a,b){}}
A.dM.prototype={
mh(a,b,c){var s=Math.max(this.e*b,1)
s=new Uint8Array(s)
this.d!==$&&A.U()
this.d=s},
ao(a){var s,r=this,q=r.d
if(a){q===$&&A.c()
q=new Uint8Array(q.length)}else{q===$&&A.c()
q=new Uint8Array(A.q(q))}s=r.f
s=s==null?null:s.M()
return new A.dM(q,r.e,s,r.a,r.b,r.c)},
M(){return this.ao(!1)},
gL(){return B.z},
gt(a){var s=this.d
s===$&&A.c()
return B.d.gt(s)},
gE(a){return A.fp(this)},
bf(a,b,c,d,e){return A.bg(A.fp(this),b,c,d,e)},
gp(a){var s=this.d
s===$&&A.c()
return s.byteLength},
gF(){var s=this.f
s=s==null?null:s.gF()
return s==null?15:s},
gbk(){return!1},
gaK(){return 4},
aV(a,b,c,d){var s=B.b.h(a),r=B.b.h(b),q=B.b.h(c),p=B.b.h(d),o=new A.dy(4,new Uint8Array(2))
o.aj(s,r,q,p)
s=o
return s},
a0(a,b,c){if(c==null||!(c instanceof A.cU)||c.e!==this)c=A.fp(this)
c.a5(a,b)
return c},
aP(a,b,c){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.fp(r):s).a5(a,b)
r.r.av(0,c)},
aH(a,b,c,d,e){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.fp(r):s).a5(a,b)
r.r.aC(c,d,e)},
az(a,b,c,d,e,f){var s,r=this
if(r.c<1)return
s=r.r;(s==null?r.r=A.fp(r):s).a5(a,b)
r.r.aj(c,d,e,f)},
C(a){return"ImageDataUint4("+this.a+", "+this.b+", "+this.c+")"},
aZ(a,b){},
gaD(){return this.e},
gU(){return this.f}}
A.dN.prototype={
ao(a){var s,r=this,q=r.d
if(a)q=new Uint8Array(q.length)
else q=new Uint8Array(A.q(q))
s=r.e
s=s==null?null:s.M()
return new A.dN(q,s,r.a,r.b,r.c)},
M(){return this.ao(!1)},
gL(){return B.f},
gt(a){return B.d.gt(this.d)},
gaD(){return this.a*this.c},
gaK(){return 8},
gE(a){return A.kq(this)},
bf(a,b,c,d,e){return A.bg(A.kq(this),b,c,d,e)},
gp(a){return this.d.byteLength},
gF(){var s=this.e
s=s==null?null:s.gF()
return s==null?255:s},
gbk(){return!1},
aV(a,b,c,d){var s=A.p5(B.b.h(B.b.H(a,0,255)),B.b.h(B.b.H(b,0,255)),B.b.h(B.b.H(c,0,255)),B.b.h(B.b.H(d,0,255)))
return s},
a0(a,b,c){if(c==null||!(c instanceof A.cV)||c.d!==this)c=A.kq(this)
c.a5(a,b)
return c},
aP(a,b,c){var s,r=this.c,q=b*(this.a*r)+a*r
r=this.d
s=B.b.h(c)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s},
aH(a,b,c,d,e){var s,r=this.c,q=b*(this.a*r)+a*r,p=this.d,o=B.b.h(c)
p.$flags&2&&A.b(p)
s=p.length
if(!(q>=0&&q<s))return A.a(p,q)
p[q]=o
if(r>2){r=q+1
o=B.b.h(d)
if(!(r<s))return A.a(p,r)
p[r]=o
o=q+2
r=B.b.h(e)
if(!(o<s))return A.a(p,o)
p[o]=r}},
az(a,b,c,d,e,f){var s,r,q=this.c,p=b*(this.a*q)+a*q,o=this.d,n=B.b.h(c)
o.$flags&2&&A.b(o)
s=o.length
if(!(p>=0&&p<s))return A.a(o,p)
o[p]=n
if(q===2){q=p+1
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}else if(q>2){n=p+1
r=B.b.h(d)
if(!(n<s))return A.a(o,n)
o[n]=r
r=p+2
n=B.b.h(e)
if(!(r<s))return A.a(o,r)
o[r]=n
if(q>3){q=p+3
n=B.b.h(f)
if(!(q<s))return A.a(o,q)
o[q]=n}}},
C(a){return"ImageDataUint8("+this.a+", "+this.b+", "+this.c+")"},
aZ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=b==null?g:A.ox(b,g,B.f,g,g),e=h.c
if(e===1){s=f==null?0:B.a.H(A.p(f.gq()),0,255)
e=h.d
B.d.O(e,0,e.length,s)}else if(e===2){e=f==null
s=e?0:B.a.H(A.p(f.gq()),0,255)
r=e?0:B.a.H(A.p(f.gA()),0,255)
q=J.rx(B.d.gt(h.d),0,null)
B.q.O(q,0,q.length,(r<<8|s)>>>0)}else if(e===4){e=f==null
s=e?0:B.a.H(A.p(f.gq()),0,255)
p=e?0:B.a.H(A.p(f.gv()),0,255)
o=e?0:B.a.H(A.p(f.gu()),0,255)
r=e?0:B.a.H(A.p(f.gA()),0,255)
n=J.aI(B.d.gt(h.d),0,null)
B.n.O(n,0,n.length,(r<<24|o<<16|p<<8|s)>>>0)}else{e=f==null
s=e?0:B.a.H(A.p(f.gq()),0,255)
p=e?0:B.a.H(A.p(f.gv()),0,255)
o=e?0:B.a.H(A.p(f.gu()),0,255)
for(m=A.kq(h),e=m.d,l=e.c>0,e=e.d,k=e.$flags|0;m.D();){if(l){j=m.c
i=B.b.h(B.a.H(s,0,255))
k&2&&A.b(e)
if(!(j>=0&&j<e.length))return A.a(e,j)
e[j]=i}m.sv(p)
m.su(o)}}},
gU(){return this.e}}
A.hW.prototype={
a7(){return"Interpolation."+this.b}}
A.aZ.prototype={}
A.fg.prototype={
M(){return new A.fg(new Uint16Array(A.q(this.c)),this.a,this.b)},
gt(a){return B.q.gt(this.c)},
gL(){return B.C},
gF(){return 1},
X(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=A.N(c)
s.$flags&2&&A.b(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
b9(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=A.N(b)
s.$flags&2&&A.b(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=A.N(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=A.N(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
b8(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.L
s=s!=null?s:A.R()
if(!(r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aX(a){var s,r
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
s=s[a]
r=$.L
r=r!=null?r:A.R()
if(!(s<r.length))return A.a(r,s)
return r[s]},
aW(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.L
s=s!=null?s:A.R()
if(!(r<s.length))return A.a(s,r)
return s[r]},
aU(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.L
s=s!=null?s:A.R()
if(!(r<s.length))return A.a(s,r)
return s[r]},
aT(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.L
s=s!=null?s:A.R()
if(!(r<s.length))return A.a(s,r)
return s[r]},
bw(a,b){return this.X(a,0,b)},
bv(a,b){return this.X(a,1,b)},
bu(a,b){return this.X(a,2,b)},
bt(a,b){return this.X(a,3,b)}}
A.fh.prototype={
M(){return new A.fh(new Float32Array(A.q(this.c)),this.a,this.b)},
gt(a){return B.P.gt(this.c)},
gL(){return B.F},
gF(){return 1},
X(a,b,c){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=c}},
b9(a,b,c,d){var s,r,q,p=this.b
a*=p
s=this.c
s.$flags&2&&A.b(s)
r=s.length
if(!(a>=0&&a<r))return A.a(s,a)
s[a]=b
if(p>1){q=a+1
if(!(q<r))return A.a(s,q)
s[q]=c
if(p>2){p=a+2
if(!(p<r))return A.a(s,p)
s[p]=d}}},
b8(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aX(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aW(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aU(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aT(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bw(a,b){return this.X(a,0,b)},
bv(a,b){return this.X(a,1,b)},
bu(a,b){return this.X(a,2,b)},
bt(a,b){return this.X(a,3,b)}}
A.fi.prototype={
M(){return new A.fi(new Float64Array(A.q(this.c)),this.a,this.b)},
gt(a){return B.k.gt(this.c)},
gL(){return B.H},
gF(){return 1},
X(a,b,c){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=c}},
b9(a,b,c,d){var s,r,q,p=this.b
a*=p
s=this.c
s.$flags&2&&A.b(s)
r=s.length
if(!(a>=0&&a<r))return A.a(s,a)
s[a]=b
if(p>1){q=a+1
if(!(q<r))return A.a(s,q)
s[q]=c
if(p>2){p=a+2
if(!(p<r))return A.a(s,p)
s[p]=d}}},
b8(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aX(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aW(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aU(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aT(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bw(a,b){return this.X(a,0,b)},
bv(a,b){return this.X(a,1,b)},
bu(a,b){return this.X(a,2,b)},
bt(a,b){return this.X(a,3,b)}}
A.fj.prototype={
M(){return new A.fj(new Int16Array(A.q(this.c)),this.a,this.b)},
gt(a){return B.Q.gt(this.c)},
gL(){return B.N},
gF(){return 32767},
X(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.h(c)
s.$flags&2&&A.b(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
b9(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.h(b)
s.$flags&2&&A.b(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.h(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.h(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
b8(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aX(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aW(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aU(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aT(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bw(a,b){return this.X(a,0,b)},
bv(a,b){return this.X(a,1,b)},
bu(a,b){return this.X(a,2,b)},
bt(a,b){return this.X(a,3,b)}}
A.fk.prototype={
M(){return new A.fk(new Int32Array(A.q(this.c)),this.a,this.b)},
gt(a){return B.l.gt(this.c)},
gL(){return B.O},
gF(){return 2147483647},
X(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.h(c)
s.$flags&2&&A.b(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
b9(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.h(b)
s.$flags&2&&A.b(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.h(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.h(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
b8(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aX(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aW(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aU(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aT(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bw(a,b){return this.X(a,0,b)},
bv(a,b){return this.X(a,1,b)},
bu(a,b){return this.X(a,2,b)},
bt(a,b){return this.X(a,3,b)}}
A.fl.prototype={
M(){return new A.fl(new Int8Array(A.q(this.c)),this.a,this.b)},
gt(a){return B.Z.gt(this.c)},
gL(){return B.M},
gF(){return 127},
X(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.h(c)
s.$flags&2&&A.b(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
b9(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.h(b)
s.$flags&2&&A.b(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.h(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.h(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
b8(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aX(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aW(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aU(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aT(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bw(a,b){return this.X(a,0,b)},
bv(a,b){return this.X(a,1,b)},
bu(a,b){return this.X(a,2,b)},
bt(a,b){return this.X(a,3,b)}}
A.fm.prototype={
M(){return new A.fm(new Uint16Array(A.q(this.c)),this.a,this.b)},
gt(a){return B.q.gt(this.c)},
gL(){return B.o},
gF(){return 65535},
X(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.h(c)
s.$flags&2&&A.b(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
b9(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.h(b)
s.$flags&2&&A.b(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.h(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.h(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
b8(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aX(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aW(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aU(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aT(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bw(a,b){return this.X(a,0,b)},
bv(a,b){return this.X(a,1,b)},
bu(a,b){return this.X(a,2,b)},
bt(a,b){return this.X(a,3,b)}}
A.dW.prototype={
M(){return new A.dW(new Uint32Array(A.q(this.c)),this.a,this.b)},
gt(a){return B.n.gt(this.c)},
gL(){return B.I},
gF(){return 4294967295},
X(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.h(c)
s.$flags&2&&A.b(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
b9(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.h(b)
s.$flags&2&&A.b(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.h(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.h(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
b8(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aX(a){var s
a*=this.b
s=this.c
if(!(a>=0&&a<s.length))return A.a(s,a)
return s[a]},
aW(a){var s,r=this.b
if(r<2)return 0
s=this.c
r=a*r+1
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aU(a){var s,r=this.b
if(r<3)return 0
s=this.c
r=a*r+2
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
aT(a){var s,r=this.b
if(r<4)return 0
s=this.c
r=a*r+3
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
bw(a,b){return this.X(a,0,b)},
bv(a,b){return this.X(a,1,b)},
bu(a,b){return this.X(a,2,b)},
bt(a,b){return this.X(a,3,b)}}
A.b_.prototype={
M(){return A.pD(this)},
gt(a){return B.d.gt(this.c)},
gL(){return B.f},
gF(){return 255},
X(a,b,c){var s,r,q=this.b
if(b<q){s=this.c
q=a*q+b
r=B.a.h(c)
s.$flags&2&&A.b(s)
if(!(q>=0&&q<s.length))return A.a(s,q)
s[q]=r}},
b9(a,b,c,d){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.b.h(b)
s.$flags&2&&A.b(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.b.h(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){o=a+2
r=B.b.h(d)
if(!(o<q))return A.a(s,o)
s[o]=r}}},
cT(a,b,c,d,e){var s,r,q,p,o=this.b
a*=o
s=this.c
r=B.a.h(b)
s.$flags&2&&A.b(s)
q=s.length
if(!(a>=0&&a<q))return A.a(s,a)
s[a]=r
if(o>1){r=a+1
p=B.a.h(c)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>2){r=a+2
p=B.a.h(d)
if(!(r<q))return A.a(s,r)
s[r]=p
if(o>3){o=a+3
r=B.a.h(e)
if(!(o<q))return A.a(s,o)
s[o]=r}}}},
b8(a,b){var s,r=this.b
if(b<r){s=this.c
r=a*r+b
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]}else r=0
return r},
aX(a){var s,r
a*=this.b
s=this.c
r=s.length
if(a>=r)return 0
if(!(a>=0))return A.a(s,a)
return s[a]},
aW(a){var s,r,q=this.b
if(q<2)return 0
a*=q
q=this.c
s=q.length
if(a>=s)return 0
r=a+1
if(!(r>=0&&r<s))return A.a(q,r)
return q[r]},
aU(a){var s,r,q=this.b
if(q<3)return 0
a*=q
q=this.c
s=q.length
if(a>=s)return 0
r=a+2
if(!(r>=0&&r<s))return A.a(q,r)
return q[r]},
aT(a){var s,r,q=this.b
if(q<4)return 255
a*=q
q=this.c
s=q.length
if(a>=s)return 0
r=a+3
if(!(r>=0&&r<s))return A.a(q,r)
return q[r]},
bw(a,b){return this.X(a,0,b)},
bv(a,b){return this.X(a,1,b)},
bu(a,b){return this.X(a,2,b)},
bt(a,b){return this.X(a,3,b)}}
A.cK.prototype={
M(){var s=this
return new A.cK(s.a,s.b,s.c,s.d)},
gL(){return B.C},
gp(a){return this.d.c},
gU(){return null},
gF(){return 1},
gb7(){return this.a},
gb0(){return this.b},
a5(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gJ(){return this},
D(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
k(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.L
r=r!=null?r:A.R()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
i(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=A.N(c)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gS(){return this.gq()},
sS(a){this.sq(a)},
gq(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=$.L
r=r!=null?r:A.R()
if(!(s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=A.N(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.L
s=s!=null?s:A.R()
if(!(r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>1){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.L
s=s!=null?s:A.R()
if(!(r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
sv(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=A.N(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>1){r=r.d
q=this.c+1
s=A.N(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gu(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.L
s=s!=null?s:A.R()
if(!(r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>2){s=s.d
r=this.c+2
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.L
s=s!=null?s:A.R()
if(!(r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
su(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=A.N(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>2){r=r.d
q=this.c+2
s=A.N(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gA(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.L
s=s!=null?s:A.R()
if(!(r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>3){s=s.d
r=this.c+3
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=$.L
s=s!=null?s:A.R()
if(!(r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=1
return s},
sA(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c+1
s=A.N(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>3){r=r.d
q=this.c+3
s=A.N(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gag(){return this.gq()/1},
sag(a){this.sq(a)},
gad(){return this.gv()/1},
sad(a){this.sv(a)},
gaf(){return this.gu()/1},
saf(a){this.su(a)},
gah(){return this.gA()/1},
sah(a){this.sA(a)},
gam(){return this.d.c===2?this.gq():A.a7(this)},
aY(a){var s=this
if(s.d.c>0){s.sq(a.gq())
s.sv(a.gv())
s.su(a.gu())
s.sA(a.gA())}},
aC(a,b,c){var s,r,q,p=this,o=p.d,n=o.c
if(n>0){o=o.d
s=p.c
r=A.N(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n>2){n=p.c+1
s=A.N(b)
if(!(n>=0&&n<q))return A.a(o,n)
o[n]=s
s=p.c+2
n=A.N(c)
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=n}}},
aj(a,b,c,d){var s,r,q,p=this,o=p.d,n=o.c
if(n>0){o=o.d
s=p.c
r=A.N(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n===2){n=p.c+1
s=A.N(d)
if(!(n>=0&&n<q))return A.a(o,n)
o[n]=s}else if(n>2){s=p.c+1
r=A.N(b)
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
r=p.c+2
s=A.N(c)
if(!(r>=0&&r<q))return A.a(o,r)
o[r]=s
if(n>3){n=p.c+3
s=A.N(d)
if(!(n>=0&&n<q))return A.a(o,n)
o[n]=s}}}},
gE(a){return new A.V(this)},
T(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cK){s=A.w(n,A.n(n).n("f.E"))
s=A.o(s)
r=A.w(b,A.n(b).n("f.E"))
return s===A.o(r)}if(t.L.b(b)){s=J.a6(b)
r=n.d
q=r.c
if(s.gp(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.k(b,3))return!1}}}return!0}return!1},
gI(a){var s=A.w(this,A.n(this).n("f.E"))
return A.o(s)},
$iz:1,
$iB:1,
$iu:1,
gbd(){return this.d}}
A.cL.prototype={
M(){var s=this
return new A.cL(s.a,s.b,s.c,s.d)},
gp(a){return this.d.c},
gU(){return null},
gF(){return 1},
gL(){return B.F},
gb7(){return this.a},
gb0(){return this.b},
a5(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gJ(){return this},
D(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
k(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
i(a,b,c){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
r.$flags&2&&A.b(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=c}},
gS(){return this.gq()},
sS(a){this.sq(a)},
gq(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
r.$flags&2&&A.b(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gv(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>1){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
sv(a){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a}else if(r>1){s=s.d
r=this.c+1
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a}},
gu(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>2){s=s.d
r=this.c+2
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
su(a){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a}else if(r>2){s=s.d
r=this.c+2
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a}},
gA(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>3){s=s.d
r=this.c+3
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=1
return s},
sA(a){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c+1
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a}else if(r>3){s=s.d
r=this.c+3
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a}},
gag(){return this.gq()/1},
sag(a){this.sq(a)},
gad(){return this.gv()/1},
sad(a){this.sv(a)},
gaf(){return this.gu()/1},
saf(a){this.su(a)},
gah(){return this.gA()/1},
sah(a){this.sA(a)},
gam(){return this.d.c===2?this.gq():A.a7(this)},
aY(a){var s=this
s.sq(a.gq())
s.sv(a.gv())
s.su(a.gu())
s.sA(a.gA())},
aC(a,b,c){var s,r=this.d,q=r.d,p=this.c
q.$flags&2&&A.b(q)
s=q.length
if(!(p>=0&&p<s))return A.a(q,p)
q[p]=a
if(r.c>2){r=p+1
if(!(r<s))return A.a(q,r)
q[r]=b
p+=2
if(!(p<s))return A.a(q,p)
q[p]=c}},
aj(a,b,c,d){var s,r,q=this.d,p=q.d,o=this.c
p.$flags&2&&A.b(p)
s=p.length
if(!(o>=0&&o<s))return A.a(p,o)
p[o]=a
q=q.c
if(q===2){q=o+1
if(!(q<s))return A.a(p,q)
p[q]=d}else if(q>2){r=o+1
if(!(r<s))return A.a(p,r)
p[r]=b
r=o+2
if(!(r<s))return A.a(p,r)
p[r]=c
if(q>3){q=o+3
if(!(q<s))return A.a(p,q)
p[q]=d}}},
gE(a){return new A.V(this)},
T(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cL){s=A.w(n,A.n(n).n("f.E"))
s=A.o(s)
r=A.w(b,A.n(b).n("f.E"))
return s===A.o(r)}if(t.L.b(b)){s=J.a6(b)
r=n.d
q=r.c
if(s.gp(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.k(b,3))return!1}}}return!0}return!1},
gI(a){var s=A.w(this,A.n(this).n("f.E"))
return A.o(s)},
$iz:1,
$iB:1,
$iu:1,
gbd(){return this.d}}
A.cM.prototype={
M(){var s=this
return new A.cM(s.a,s.b,s.c,s.d)},
gp(a){return this.d.c},
gU(){return null},
gF(){return 1},
gL(){return B.H},
gb7(){return this.a},
gb0(){return this.b},
a5(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gJ(){return this},
D(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
k(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
i(a,b,c){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
r.$flags&2&&A.b(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=c}},
gS(){return this.gq()},
sS(a){this.sq(a)},
gq(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
r.$flags&2&&A.b(r)
if(!(s>=0&&s<r.length))return A.a(r,s)
r[s]=a}},
gv(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>1){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
sv(a){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a}else if(r>1){s=s.d
r=this.c+1
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a}},
gu(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>2){s=s.d
r=this.c+2
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
su(a){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a}else if(r>2){s=s.d
r=this.c+2
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a}},
gA(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>3){s=s.d
r=this.c+3
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=1
return s},
sA(a){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c+1
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a}else if(r>3){s=s.d
r=this.c+3
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=a}},
gag(){return this.gq()/1},
sag(a){this.sq(a)},
gad(){return this.gv()/1},
sad(a){this.sv(a)},
gaf(){return this.gu()/1},
saf(a){this.su(a)},
gah(){return this.gA()/1},
sah(a){this.sA(a)},
gam(){return this.d.c===2?this.gq():A.a7(this)},
aY(a){var s=this
s.sq(a.gq())
s.sv(a.gv())
s.su(a.gu())
s.sA(a.gA())},
aC(a,b,c){var s,r=this.d,q=r.d,p=this.c
q.$flags&2&&A.b(q)
s=q.length
if(!(p>=0&&p<s))return A.a(q,p)
q[p]=a
if(r.c>2){r=p+1
if(!(r<s))return A.a(q,r)
q[r]=b
p+=2
if(!(p<s))return A.a(q,p)
q[p]=c}},
aj(a,b,c,d){var s,r,q=this.d,p=q.d,o=this.c
p.$flags&2&&A.b(p)
s=p.length
if(!(o>=0&&o<s))return A.a(p,o)
p[o]=a
q=q.c
if(q===2){q=o+1
if(!(q<s))return A.a(p,q)
p[q]=d}else if(q>2){r=o+1
if(!(r<s))return A.a(p,r)
p[r]=b
r=o+2
if(!(r<s))return A.a(p,r)
p[r]=c
if(q>3){q=o+3
if(!(q<s))return A.a(p,q)
p[q]=d}}},
gE(a){return new A.V(this)},
T(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cM){s=A.w(n,A.n(n).n("f.E"))
s=A.o(s)
r=A.w(b,A.n(b).n("f.E"))
return s===A.o(r)}if(t.L.b(b)){s=J.a6(b)
r=n.d
q=r.c
if(s.gp(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.k(b,3))return!1}}}return!0}return!1},
gI(a){var s=A.w(this,A.n(this).n("f.E"))
return A.o(s)},
$iz:1,
$iB:1,
$iu:1,
gbd(){return this.d}}
A.cN.prototype={
M(){var s=this
return new A.cN(s.a,s.b,s.c,s.d)},
gp(a){return this.d.c},
gU(){return null},
gF(){return 32767},
gL(){return B.N},
gb7(){return this.a},
gb0(){return this.b},
a5(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gJ(){return this},
D(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
k(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
i(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.h(c)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gS(){return this.gq()},
sS(a){this.sq(a)},
gq(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.h(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>1){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
sv(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>1){r=r.d
q=this.c+1
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gu(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>2){s=s.d
r=this.c+2
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
su(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>2){r=r.d
q=this.c+2
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gA(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>3){s=s.d
r=this.c+3
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=32767
return s},
sA(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c+1
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>3){r=r.d
q=this.c+3
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gag(){return this.gq()/32767},
sag(a){this.sq(a*32767)},
gad(){return this.gv()/32767},
sad(a){this.sv(a*32767)},
gaf(){return this.gu()/32767},
saf(a){this.su(a*32767)},
gah(){return this.gA()/32767},
sah(a){this.sA(a*32767)},
gam(){return this.d.c===2?this.gq():A.a7(this)},
aY(a){var s=this
s.sq(a.gq())
s.sv(a.gv())
s.su(a.gu())
s.sA(a.gA())},
aC(a,b,c){var s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
s=this.c
r=B.a.h(a)
p.$flags&2&&A.b(p)
q=p.length
if(!(s>=0&&s<q))return A.a(p,s)
p[s]=r
if(o>2){o=s+1
r=B.a.h(b)
if(!(o<q))return A.a(p,o)
p[o]=r
s+=2
r=B.a.h(c)
if(!(s<q))return A.a(p,s)
p[s]=r}}},
aj(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.h(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n===2){n=s+1
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}else if(n>2){r=s+1
p=B.a.h(b)
if(!(r<q))return A.a(o,r)
o[r]=p
p=s+2
r=B.a.h(c)
if(!(p<q))return A.a(o,p)
o[p]=r
if(n>3){n=s+3
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
gE(a){return new A.V(this)},
T(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cN){s=A.w(n,A.n(n).n("f.E"))
s=A.o(s)
r=A.w(b,A.n(b).n("f.E"))
return s===A.o(r)}if(t.L.b(b)){s=J.a6(b)
r=n.d
q=r.c
if(s.gp(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.k(b,3))return!1}}}return!0}return!1},
gI(a){var s=A.w(this,A.n(this).n("f.E"))
return A.o(s)},
$iz:1,
$iB:1,
$iu:1,
gbd(){return this.d}}
A.cO.prototype={
M(){var s=this
return new A.cO(s.a,s.b,s.c,s.d)},
gp(a){return this.d.c},
gU(){return null},
gF(){return 2147483647},
gL(){return B.O},
gb7(){return this.a},
gb0(){return this.b},
a5(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gJ(){return this},
D(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
k(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
i(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.h(c)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gS(){return this.gq()},
sS(a){this.sq(a)},
gq(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.h(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>1){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
sv(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>1){r=r.d
q=this.c+1
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gu(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>2){s=s.d
r=this.c+2
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
su(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>2){r=r.d
q=this.c+2
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gA(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>3){s=s.d
r=this.c+3
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=2147483647
return s},
sA(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c+1
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>3){r=r.d
q=this.c+3
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gag(){return this.gq()/2147483647},
sag(a){this.sq(a*2147483647)},
gad(){return this.gv()/2147483647},
sad(a){this.sv(a*2147483647)},
gaf(){return this.gu()/2147483647},
saf(a){this.su(a*2147483647)},
gah(){return this.gA()/2147483647},
sah(a){this.sA(a*2147483647)},
gam(){return this.d.c===2?this.gq():A.a7(this)},
aY(a){var s=this
s.sq(a.gq())
s.sv(a.gv())
s.su(a.gu())
s.sA(a.gA())},
aC(a,b,c){var s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
s=this.c
r=B.a.h(a)
p.$flags&2&&A.b(p)
q=p.length
if(!(s>=0&&s<q))return A.a(p,s)
p[s]=r
if(o>2){o=s+1
r=B.a.h(b)
if(!(o<q))return A.a(p,o)
p[o]=r
s+=2
r=B.a.h(c)
if(!(s<q))return A.a(p,s)
p[s]=r}}},
aj(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.h(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n===2){n=s+1
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}else if(n>2){r=s+1
p=B.a.h(b)
if(!(r<q))return A.a(o,r)
o[r]=p
p=s+2
r=B.a.h(c)
if(!(p<q))return A.a(o,p)
o[p]=r
if(n>3){n=s+3
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
gE(a){return new A.V(this)},
T(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cO){s=A.w(n,A.n(n).n("f.E"))
s=A.o(s)
r=A.w(b,A.n(b).n("f.E"))
return s===A.o(r)}if(t.L.b(b)){s=J.a6(b)
r=n.d
q=r.c
if(s.gp(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.k(b,3))return!1}}}return!0}return!1},
gI(a){var s=A.w(this,A.n(this).n("f.E"))
return A.o(s)},
$iz:1,
$iB:1,
$iu:1,
gbd(){return this.d}}
A.cP.prototype={
M(){var s=this
return new A.cP(s.a,s.b,s.c,s.d)},
gp(a){return this.d.c},
gU(){return null},
gF(){return 127},
gL(){return B.M},
gb7(){return this.a},
gb0(){return this.b},
a5(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gJ(){return this},
D(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
k(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
i(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.h(c)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gS(){return this.gq()},
sS(a){this.sq(a)},
gq(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.h(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>1){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
sv(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>1){r=r.d
q=this.c+1
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gu(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>2){s=s.d
r=this.c+2
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
su(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>2){r=r.d
q=this.c+2
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gA(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>3){s=s.d
r=this.c+3
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=127
return s},
sA(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c+1
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>3){r=r.d
q=this.c+3
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gag(){return this.gq()/127},
sag(a){this.sq(a*127)},
gad(){return this.gv()/127},
sad(a){this.sv(a*127)},
gaf(){return this.gu()/127},
saf(a){this.su(a*127)},
gah(){return this.gA()/127},
sah(a){this.sA(a*127)},
gam(){return this.d.c===2?this.gq():A.a7(this)},
aY(a){var s=this
s.sq(a.gq())
s.sv(a.gv())
s.su(a.gu())
s.sA(a.gA())},
aC(a,b,c){var s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
s=this.c
r=B.a.h(a)
p.$flags&2&&A.b(p)
q=p.length
if(!(s>=0&&s<q))return A.a(p,s)
p[s]=r
if(o>2){o=s+1
r=B.a.h(b)
if(!(o<q))return A.a(p,o)
p[o]=r
s+=2
r=B.a.h(c)
if(!(s<q))return A.a(p,s)
p[s]=r}}},
aj(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.h(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n===2){n=s+1
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}else if(n>2){r=s+1
p=B.a.h(b)
if(!(r<q))return A.a(o,r)
o[r]=p
p=s+2
r=B.a.h(c)
if(!(p<q))return A.a(o,p)
o[p]=r
if(n>3){n=s+3
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
gE(a){return new A.V(this)},
T(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cP){s=A.w(n,A.n(n).n("f.E"))
s=A.o(s)
r=A.w(b,A.n(b).n("f.E"))
return s===A.o(r)}if(t.L.b(b)){s=J.a6(b)
r=n.d
q=r.c
if(s.gp(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.k(b,3))return!1}}}return!0}return!1},
gI(a){var s=A.w(this,A.n(this).n("f.E"))
return A.o(s)},
$iz:1,
$iB:1,
$iu:1,
gbd(){return this.d}}
A.id.prototype={
D(){var s=this,r=s.a
if(r.gb7()+1>s.d){r.a5(s.b,r.gb0()+1)
return r.gb0()<=s.e}return r.D()},
gJ(){return this.a},
$iz:1}
A.cQ.prototype={
M(){var s=this
return new A.cQ(s.a,s.b,s.c,s.d,s.e,s.f)},
gp(a){var s=this.f,r=s.f
r=r==null?null:r.b
return r==null?s.c:r},
gU(){return this.f.f},
gF(){return this.f.gF()},
gL(){return B.v},
gb7(){return this.a},
gb0(){return this.b},
a5(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.f
r=b*s.e
q.e=r
s=a*s.c
q.c=r+B.a.j(s,3)
q.d=s&7},
gJ(){return this},
D(){var s,r=this,q=++r.a,p=r.f
if(q===p.a){r.a=0
q=++r.b
r.d=0;++r.c
r.e=r.e+p.e
return q<p.b}s=p.c
if(p.f!=null||s===1){if(++r.d>7){r.d=0;++r.c}}else{q*=s
r.d=q&7
r.c=r.e+B.a.j(q,3)}q=r.c
p=p.d
p===$&&A.c()
return q<p.byteLength},
e4(a){var s,r,q=this.c,p=7-(this.d+a)
if(p<0){p+=8;++q}s=this.f.d
s===$&&A.c()
r=s.length
if(q>=r)return 0
if(!(q>=0))return A.a(s,q)
return B.a.a3(s[q],p)&1},
b2(a){var s=this.f,r=s.f
if(r==null)s=s.c>a?this.e4(a):0
else s=r.b8(this.e4(0),a)
return s},
ar(a,b){var s,r,q,p,o,n,m=this.f
if(a>=m.c)return
s=this.c
r=7-(this.d+a)
if(r<0){++s
r+=8}q=m.d
q===$&&A.c()
if(!(s>=0&&s<q.length))return A.a(q,s)
p=q[s]
o=B.a.H(B.b.h(b),0,1)
if(!(r>=0&&r<8))return A.a(B.bE,r)
n=B.bE[r]
q=B.a.Y(o,r)
m=m.d
m.$flags&2&&A.b(m)
if(!(s<m.length))return A.a(m,s)
m[s]=(p&n|q)>>>0},
k(a,b){return this.b2(b)},
i(a,b,c){return this.ar(b,c)},
gS(){return this.e4(0)},
sS(a){this.ar(0,a)},
gq(){return this.b2(0)},
sq(a){this.ar(0,a)},
gv(){return this.f.c===2?this.b2(0):this.b2(1)},
sv(a){this.ar(this.f.c===2?0:1,a)},
gu(){return this.f.c===2?this.b2(0):this.b2(2)},
su(a){this.ar(this.f.c===2?0:2,a)},
gA(){var s=this.f,r=s.f==null
if(r&&s.c===2)s=this.b2(1)
else s=r&&s.c<4?s.gF():this.b2(3)
return s},
sA(a){this.ar(this.f.c===2?1:3,a)},
gag(){return this.b2(0)/this.f.gF()},
sag(a){this.ar(0,a*this.f.gF())},
gad(){return this.gv()/this.f.gF()},
sad(a){var s=this.f,r=s.gF()
s=s.c===2?0:1
this.ar(s,a*r)},
gaf(){return this.gu()/this.f.gF()},
saf(a){var s=this.f,r=s.gF()
s=s.c===2?0:2
this.ar(s,a*r)},
gah(){return this.gA()/this.f.gF()},
sah(a){var s=this.f,r=s.gF()
s=s.c===2?1:3
this.ar(s,a*r)},
gam(){return this.f.c===2?this.b2(0):A.a7(this)},
aY(a){var s,r,q=this
q.ar(0,a.gq())
s=a.gv()
r=q.f.c===2
q.ar(r?0:1,s)
s=a.gu()
q.ar(r?0:2,s)
s=a.gA()
q.ar(r?1:3,s)},
aC(a,b,c){var s=this,r=s.f.c
if(r>0){s.ar(0,a)
if(r>2){s.ar(1,b)
s.ar(2,c)}}},
aj(a,b,c,d){var s=this,r=s.f.c
if(r>0){s.ar(0,a)
if(r===2)s.ar(1,d)
else if(r>2){s.ar(1,b)
s.ar(2,c)
if(r>3)s.ar(3,d)}}},
gE(a){return new A.V(this)},
T(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.cQ){s=A.w(p,A.n(p).n("f.E"))
s=A.o(s)
r=A.w(b,A.n(b).n("f.E"))
return s===A.o(r)}if(t.L.b(b)){s=p.f
r=s.f
q=r!=null?r.b:s.c
s=J.a6(b)
if(s.gp(b)!==q)return!1
if(p.b2(0)!==s.k(b,0))return!1
if(q>1){if(p.b2(1)!==s.k(b,1))return!1
if(q>2){if(p.b2(2)!==s.k(b,2))return!1
if(q>3)if(p.b2(3)!==s.k(b,3))return!1}}return!0}return!1},
gI(a){var s=A.w(this,A.n(this).n("f.E"))
return A.o(s)},
$iz:1,
$iB:1,
$iu:1,
gbd(){return this.f}}
A.cR.prototype={
M(){var s=this
return new A.cR(s.a,s.b,s.c,s.d)},
gp(a){var s=this.d,r=s.e
r=r==null?null:r.b
return r==null?s.c:r},
gU(){return this.d.e},
gF(){return this.d.gF()},
gL(){return B.o},
gb7(){return this.a},
gb0(){return this.b},
a5(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gJ(){return this},
D(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c
s+=q.e==null?q.c:1
r.c=s
return s<q.d.length},
bp(a){var s,r=this.d,q=r.e
if(q!=null){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.b8(r[s],a)
r=s}else if(a<r.c){r=r.d
q=this.c+a
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
return r},
k(a,b){return this.bp(b)},
i(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.h(c)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gS(){return this.gq()},
sS(a){this.sq(a)},
gq(){var s,r=this.d,q=r.e
if(q==null)if(r.c>0){r=r.d
q=this.c
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
else{r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.aX(r[s])
r=s}return r},
sq(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.h(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(){var s,r=this,q=r.d,p=q.e
if(p==null){p=q.c
if(p===2){q=q.d
p=r.c
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else if(p>1){q=q.d
p=r.c+1
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else q=0}else{q=q.d
s=r.c
if(!(s>=0&&s<q.length))return A.a(q,s)
s=p.aW(q[s])
q=s}return q},
sv(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>1){r=r.d
q=this.c+1
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gu(){var s,r=this,q=r.d,p=q.e
if(p==null){p=q.c
if(p===2){q=q.d
p=r.c
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else if(p>2){q=q.d
p=r.c+2
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else q=0}else{q=q.d
s=r.c
if(!(s>=0&&s<q.length))return A.a(q,s)
s=p.aU(q[s])
q=s}return q},
su(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>2){r=r.d
q=this.c+2
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gA(){var s,r=this,q=r.d,p=q.e
if(p==null){p=q.c
if(p===2){q=q.d
p=r.c+1
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else if(p>3){q=q.d
p=r.c+3
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else q=q.gF()}else{q=q.d
s=r.c
if(!(s>=0&&s<q.length))return A.a(q,s)
s=p.aT(q[s])
q=s}return q},
sA(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c+1
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>3){r=r.d
q=this.c+3
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gag(){return this.gq()/this.d.gF()},
sag(a){this.sq(a*this.d.gF())},
gad(){return this.gv()/this.d.gF()},
sad(a){this.sv(a*this.d.gF())},
gaf(){return this.gu()/this.d.gF()},
saf(a){this.su(a*this.d.gF())},
gah(){return this.gA()/this.d.gF()},
sah(a){this.sA(a*this.d.gF())},
gam(){return this.d.c===2?this.gq():A.a7(this)},
aY(a){var s=this
s.sq(a.gq())
s.sv(a.gv())
s.su(a.gu())
s.sA(a.gA())},
aC(a,b,c){var s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
s=this.c
r=B.a.h(a)
p.$flags&2&&A.b(p)
q=p.length
if(!(s>=0&&s<q))return A.a(p,s)
p[s]=r
if(o>2){o=s+1
r=B.a.h(b)
if(!(o<q))return A.a(p,o)
p[o]=r
s+=2
r=B.a.h(c)
if(!(s<q))return A.a(p,s)
p[s]=r}}},
aj(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.h(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n===2){n=s+1
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}else if(n>2){r=s+1
p=B.a.h(b)
if(!(r<q))return A.a(o,r)
o[r]=p
p=s+2
r=B.a.h(c)
if(!(p<q))return A.a(o,p)
o[p]=r
if(n>3){n=s+3
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
gE(a){return new A.V(this)},
T(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.cR){s=A.w(p,A.n(p).n("f.E"))
s=A.o(s)
r=A.w(b,A.n(b).n("f.E"))
return s===A.o(r)}if(t.L.b(b)){s=p.d
r=s.e
q=r!=null?r.b:s.c
s=J.a6(b)
if(s.gp(b)!==q)return!1
if(p.bp(0)!==s.k(b,0))return!1
if(q>1){if(p.bp(1)!==s.k(b,1))return!1
if(q>2){if(p.bp(2)!==s.k(b,2))return!1
if(q>3)if(p.bp(3)!==s.k(b,3))return!1}}return!0}return!1},
gI(a){var s=A.w(this,A.n(this).n("f.E"))
return A.o(s)},
$iz:1,
$iB:1,
$iu:1,
gbd(){return this.d}}
A.cS.prototype={
M(){var s=this
return new A.cS(s.a,s.b,s.c,s.d,s.e,s.f)},
gp(a){var s=this.f,r=s.f
r=r==null?null:r.b
return r==null?s.c:r},
gU(){return this.f.f},
gF(){return this.f.gF()},
gL(){return B.y},
gh5(){var s=this.f
return s.f!=null?2:s.c<<1>>>0},
gb7(){return this.a},
gb0(){return this.b},
a5(a,b){var s,r,q,p=this
p.a=a
p.b=b
s=p.gh5()
r=b*p.f.e
p.e=r
q=a*s
p.c=r+B.a.j(q,3)
p.d=q&7},
gJ(){return this},
D(){var s=this,r=++s.a,q=s.f
if(r===q.a){s.a=0
r=++s.b
s.d=0;++s.c
s.e=s.e+q.e
return r<q.b}if(q.f!=null||q.c===1){if((s.d+=2)>7){s.d=0;++s.c}}else{r*=s.gh5()
s.d=r&7
s.c=s.e+B.a.j(r,3)}r=s.c
q=q.d
q===$&&A.c()
return r<q.length},
e5(a){var s,r=this.c,q=6-(this.d+(a<<1>>>0))
if(q<0){q+=8;++r}s=this.f.d
s===$&&A.c()
if(!(r>=0&&r<s.length))return A.a(s,r)
return B.a.a3(s[r],q)&3},
b3(a){var s=this.f,r=s.f
if(r==null)s=s.c>a?this.e5(a):0
else s=r.b8(this.e5(0),a)
return s},
au(a,b){var s,r,q,p,o,n,m=this.f
if(a>=m.c)return
s=this.c
r=6-(this.d+(a<<1>>>0))
if(r<0){++s
r+=8}q=m.d
q===$&&A.c()
if(!(s>=0&&s<q.length))return A.a(q,s)
p=q[s]
o=B.a.H(B.b.h(b),0,3)
q=B.a.j(r,1)
if(!(q<4))return A.a(B.bp,q)
n=B.bp[q]
q=B.a.Y(o,r)
m=m.d
m.$flags&2&&A.b(m)
if(!(s<m.length))return A.a(m,s)
m[s]=(p&n|q)>>>0},
k(a,b){return this.b3(b)},
i(a,b,c){return this.au(b,c)},
gS(){return this.e5(0)},
sS(a){this.au(0,a)},
gq(){return this.b3(0)},
sq(a){this.au(0,a)},
gv(){return this.f.c===2?this.b3(0):this.b3(1)},
sv(a){this.au(this.f.c===2?0:1,a)},
gu(){return this.f.c===2?this.b3(0):this.b3(2)},
su(a){this.au(this.f.c===2?0:2,a)},
gA(){var s=this.f,r=s.f==null
if(r&&s.c===2)s=this.b3(1)
else s=r&&s.c<4?s.gF():this.b3(3)
return s},
sA(a){this.au(this.f.c===2?1:3,a)},
gag(){return this.b3(0)/this.f.gF()},
sag(a){this.au(0,a*this.f.gF())},
gad(){return this.gv()/this.f.gF()},
sad(a){var s=this.f,r=s.gF()
s=s.c===2?0:1
this.au(s,a*r)},
gaf(){return this.gu()/this.f.gF()},
saf(a){var s=this.f,r=s.gF()
s=s.c===2?0:2
this.au(s,a*r)},
gah(){return this.gA()/this.f.gF()},
sah(a){var s=this.f,r=s.gF()
s=s.c===2?1:3
this.au(s,a*r)},
gam(){return this.f.c===2?this.b3(0):A.a7(this)},
aY(a){var s,r,q=this
q.au(0,a.gq())
s=a.gv()
r=q.f.c===2
q.au(r?0:1,s)
s=a.gu()
q.au(r?0:2,s)
s=a.gA()
q.au(r?1:3,s)},
aC(a,b,c){var s=this,r=s.f.c
if(r>0){s.au(0,a)
if(r>2){s.au(1,b)
s.au(2,c)}}},
aj(a,b,c,d){var s=this,r=s.f.c
if(r>0){s.au(0,a)
if(r===2)s.au(1,d)
else if(r>2){s.au(1,b)
s.au(2,c)
if(r>3)s.au(3,d)}}},
gE(a){return new A.V(this)},
T(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.cS){s=A.w(p,A.n(p).n("f.E"))
s=A.o(s)
r=A.w(b,A.n(b).n("f.E"))
return s===A.o(r)}if(t.L.b(b)){s=p.f
r=s.f
q=r!=null?r.b:s.c
s=J.a6(b)
if(s.gp(b)!==q)return!1
if(p.b3(0)!==s.k(b,0))return!1
if(q>1){if(p.b3(1)!==s.k(b,1))return!1
if(q>2){if(p.b3(2)!==s.k(b,2))return!1
if(q>3)if(p.b3(3)!==s.k(b,3))return!1}}return!0}return!1},
gI(a){var s=A.w(this,A.n(this).n("f.E"))
return A.o(s)},
$iz:1,
$iB:1,
$iu:1,
gbd(){return this.f}}
A.cT.prototype={
M(){var s=this
return new A.cT(s.a,s.b,s.c,s.d)},
gp(a){return this.d.c},
gU(){return null},
gF(){return 4294967295},
gL(){return B.I},
gb7(){return this.a},
gb0(){return this.b},
a5(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gJ(){return this},
D(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c+q.c
r.c=s
return s<q.d.length},
k(a,b){var s,r=this.d
if(b<r.c){r=r.d
s=this.c+b
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
i(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.h(c)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gS(){return this.gq()},
sS(a){this.sq(a)},
gq(){var s,r=this.d
if(r.c>0){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=r[s]
r=s}else r=0
return r},
sq(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.h(a)
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>1){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
sv(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>1){r=r.d
q=this.c+1
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gu(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>2){s=s.d
r=this.c+2
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
su(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>2){r=r.d
q=this.c+2
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gA(){var s=this.d,r=s.c
if(r===2){s=s.d
r=this.c+1
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else if(r>3){s=s.d
r=this.c+3
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=4294967295
return s},
sA(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c+1
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>3){r=r.d
q=this.c+3
s=B.b.h(a)
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gag(){return this.gq()/4294967295},
sag(a){this.sq(a*4294967295)},
gad(){return this.gv()/4294967295},
sad(a){this.sv(a*4294967295)},
gaf(){return this.gu()/4294967295},
saf(a){this.su(a*4294967295)},
gah(){return this.gA()/4294967295},
sah(a){this.sA(a*4294967295)},
gam(){return this.d.c===2?this.gq():A.a7(this)},
aY(a){var s=this
s.sq(a.gq())
s.sv(a.gv())
s.su(a.gu())
s.sA(a.gA())},
aC(a,b,c){var s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
s=this.c
r=B.a.h(a)
p.$flags&2&&A.b(p)
q=p.length
if(!(s>=0&&s<q))return A.a(p,s)
p[s]=r
if(o>2){o=s+1
r=B.a.h(b)
if(!(o<q))return A.a(p,o)
p[o]=r
s+=2
r=B.a.h(c)
if(!(s<q))return A.a(p,s)
p[s]=r}}},
aj(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.h(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n===2){n=s+1
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}else if(n>2){r=s+1
p=B.a.h(b)
if(!(r<q))return A.a(o,r)
o[r]=p
p=s+2
r=B.a.h(c)
if(!(p<q))return A.a(o,p)
o[p]=r
if(n>3){n=s+3
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
gE(a){return new A.V(this)},
T(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(b instanceof A.cT){s=A.w(n,A.n(n).n("f.E"))
s=A.o(s)
r=A.w(b,A.n(b).n("f.E"))
return s===A.o(r)}if(t.L.b(b)){s=J.a6(b)
r=n.d
q=r.c
if(s.gp(b)!==q)return!1
r=r.d
p=n.c
o=r.length
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,0))return!1
if(q>1){p=n.c+1
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,1))return!1
if(q>2){p=n.c+2
if(!(p>=0&&p<o))return A.a(r,p)
if(r[p]!==s.k(b,2))return!1
if(q>3){q=n.c+3
if(!(q>=0&&q<o))return A.a(r,q)
if(r[q]!==s.k(b,3))return!1}}}return!0}return!1},
gI(a){var s=A.w(this,A.n(this).n("f.E"))
return A.o(s)},
$iz:1,
$iB:1,
$iu:1,
gbd(){return this.d}}
A.cU.prototype={
M(){var s=this
return new A.cU(s.a,s.b,s.c,s.d,s.e)},
gp(a){var s=this.e,r=s.f
r=r==null?null:r.b
return r==null?s.c:r},
gU(){return this.e.f},
gF(){return this.e.gF()},
gL(){return B.z},
gb7(){return this.a},
gb0(){return this.b},
a5(a,b){var s,r,q,p=this
p.a=a
p.b=b
s=p.e
r=s.c*4
q=s.e
if(r===4)s=b*q+B.a.j(a,1)
else if(r===8)s=b*s.a+a
else{s=b*q
s=r===16?s+(a<<1>>>0):s+B.a.j(a*r,3)}p.c=s
s=a*r
p.d=r>7?s&4:s&7},
gJ(){return this},
D(){var s,r,q,p=this,o=p.e
if(++p.a===o.a){p.a=0
s=++p.b
p.d=0
p.c=s*o.e
return s<o.b}r=o.c
s=o.f!=null||r===1
q=p.d
if(s){s=q+4
p.d=s
if(s>7){p.d=0;++p.c}}else{s=p.d=q+(r<<2>>>0)
while(s>7){s-=8
p.d=s;++p.c}}s=p.c
o=o.d
o===$&&A.c()
return s<o.length},
dX(a){var s,r=this.c,q=4-(this.d+(a<<2>>>0))
if(q<0){q+=8;++r}s=this.e.d
s===$&&A.c()
if(!(r>=0&&r<s.length))return A.a(s,r)
return B.a.a3(s[r],q)&15},
b4(a){var s=this.e,r=s.f
if(r==null)s=s.c>a?this.dX(a):0
else s=r.b8(this.dX(0),a)
return s},
av(a,b){var s,r,q,p,o,n,m=this.e
if(a>=m.c)return
s=this.c
r=4-(this.d+(a<<2>>>0))
if(r<0){r+=8;++s}q=m.d
q===$&&A.c()
if(!(s>=0&&s<q.length))return A.a(q,s)
p=q[s]
o=B.a.H(B.b.h(b),0,15)
n=r===4?15:240
q=B.a.Y(o,r)
m=m.d
m.$flags&2&&A.b(m)
if(!(s<m.length))return A.a(m,s)
m[s]=(p&n|q)>>>0},
k(a,b){return this.b4(b)},
i(a,b,c){return this.av(b,c)},
gS(){return this.dX(0)},
sS(a){this.av(0,a)},
gq(){return this.b4(0)},
sq(a){this.av(0,a)},
gv(){return this.e.c===2?this.b4(0):this.b4(1)},
sv(a){this.av(this.e.c===2?0:1,a)},
gu(){return this.e.c===2?this.b4(0):this.b4(2)},
su(a){this.av(this.e.c===2?0:2,a)},
gA(){var s=this.e,r=s.f==null
if(r&&s.c===2)s=this.b4(1)
else s=r&&s.c<4?s.gF():this.b4(3)
return s},
sA(a){this.av(this.e.c===2?1:3,a)},
gag(){return this.b4(0)/this.e.gF()},
sag(a){this.av(0,a*this.e.gF())},
gad(){return this.gv()/this.e.gF()},
sad(a){var s=this.e,r=s.gF()
s=s.c===2?0:1
this.av(s,a*r)},
gaf(){return this.gu()/this.e.gF()},
saf(a){var s=this.e,r=s.gF()
s=s.c===2?0:2
this.av(s,a*r)},
gah(){return this.gA()/this.e.gF()},
sah(a){var s=this.e,r=s.gF()
s=s.c===2?1:3
this.av(s,a*r)},
gam(){return this.e.c===2?this.b4(0):A.a7(this)},
aY(a){var s,r,q=this
q.av(0,a.gq())
s=a.gv()
r=q.e.c===2
q.av(r?0:1,s)
s=a.gu()
q.av(r?0:2,s)
s=a.gA()
q.av(r?1:3,s)},
aC(a,b,c){var s=this,r=s.e.c
if(r>0){s.av(0,a)
if(r>2){s.av(1,b)
s.av(2,c)}}},
aj(a,b,c,d){var s=this,r=s.e.c
if(r>0){s.av(0,a)
if(r===2)s.av(1,d)
else if(r>2){s.av(1,b)
s.av(2,c)
if(r>3)s.av(3,d)}}},
gE(a){return new A.V(this)},
T(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.cU){s=A.w(p,A.n(p).n("f.E"))
s=A.o(s)
r=A.w(b,A.n(b).n("f.E"))
return s===A.o(r)}if(t.L.b(b)){q=p.e.c
s=J.a6(b)
if(s.gp(b)!==q)return!1
if(p.b4(0)!==s.k(b,0))return!1
if(q>1){if(p.b4(1)!==s.k(b,1))return!1
if(q>2){if(p.b4(2)!==s.k(b,2))return!1
if(q>3)if(p.b4(3)!==s.k(b,3))return!1}}return!0}return!1},
gI(a){var s=A.w(this,A.n(this).n("f.E"))
return A.o(s)},
$iz:1,
$iB:1,
$iu:1,
gbd(){return this.e}}
A.cV.prototype={
M(){var s=this
return new A.cV(s.a,s.b,s.c,s.d)},
gp(a){var s=this.d,r=s.e
r=r==null?null:r.b
return r==null?s.c:r},
gU(){return this.d.e},
gF(){return this.d.gF()},
gL(){return B.f},
gb7(){return this.a},
gb0(){return this.b},
a5(a,b){var s,r,q=this
q.a=a
q.b=b
s=q.d
r=s.c
q.c=b*s.a*r+a*r},
gJ(){return this},
D(){var s,r=this,q=r.d
if(++r.a===q.a){r.a=0
if(++r.b===q.b)return!1}s=r.c
s+=q.e==null?q.c:1
r.c=s
return s<q.d.length},
bp(a){var s,r=this.d,q=r.e
if(q!=null){r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.b8(r[s],a)
r=s}else if(a<r.c){r=r.d
q=this.c+a
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
return r},
k(a,b){return this.bp(b)},
i(a,b,c){var s,r,q=this.d
if(b<q.c){q=q.d
s=this.c+b
r=B.b.h(B.b.H(c,0,255))
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gS(){var s=this.d.d,r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
return s[r]},
sS(a){var s=this.d.d,r=this.c,q=B.b.h(B.b.H(a,0,255))
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=q},
gq(){var s,r=this.d,q=r.e
if(q==null)if(r.c>0){r=r.d
q=this.c
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
else{r=r.d
s=this.c
if(!(s>=0&&s<r.length))return A.a(r,s)
s=q.aX(r[s])
r=s}return r},
sq(a){var s,r,q=this.d
if(q.c>0){q=q.d
s=this.c
r=B.b.h(B.b.H(a,0,255))
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=r}},
gv(){var s,r=this,q=r.d,p=q.e
if(p==null){p=q.c
if(p===2){q=q.d
p=r.c
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else if(p>1){q=q.d
p=r.c+1
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else q=0}else{q=q.d
s=r.c
if(!(s>=0&&s<q.length))return A.a(q,s)
s=p.aW(q[s])
q=s}return q},
sv(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.h(B.b.H(a,0,255))
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>1){r=r.d
q=this.c+1
s=B.b.h(B.b.H(a,0,255))
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gu(){var s,r=this,q=r.d,p=q.e
if(p==null){p=q.c
if(p===2){q=q.d
p=r.c
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else if(p>2){q=q.d
p=r.c+2
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else q=0}else{q=q.d
s=r.c
if(!(s>=0&&s<q.length))return A.a(q,s)
s=p.aU(q[s])
q=s}return q},
su(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c
s=B.b.h(B.b.H(a,0,255))
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>2){r=r.d
q=this.c+2
s=B.b.h(B.b.H(a,0,255))
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gA(){var s,r=this,q=r.d,p=q.e
if(p==null){p=q.c
if(p===2){q=q.d
p=r.c+1
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else if(p>3){q=q.d
p=r.c+3
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else q=255}else{q=q.d
s=r.c
if(!(s>=0&&s<q.length))return A.a(q,s)
s=p.aT(q[s])
q=s}return q},
sA(a){var s,r=this.d,q=r.c
if(q===2){r=r.d
q=this.c+1
s=B.b.h(B.b.H(a,0,255))
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}else if(q>3){r=r.d
q=this.c+3
s=B.b.h(B.b.H(a,0,255))
r.$flags&2&&A.b(r)
if(!(q>=0&&q<r.length))return A.a(r,q)
r[q]=s}},
gag(){return this.gq()/this.d.gF()},
sag(a){this.sq(a*this.d.gF())},
gad(){return this.gv()/this.d.gF()},
sad(a){this.sv(a*this.d.gF())},
gaf(){return this.gu()/this.d.gF()},
saf(a){this.su(a*this.d.gF())},
gah(){return this.gA()/this.d.gF()},
sah(a){this.sA(a*this.d.gF())},
gam(){return this.d.c===2?this.gq():A.a7(this)},
aY(a){var s=this
if(s.d.e!=null)s.sS(a.gS())
else{s.sq(a.gq())
s.sv(a.gv())
s.su(a.gu())
s.sA(a.gA())}},
aC(a,b,c){var s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
s=this.c
r=B.a.h(a)
p.$flags&2&&A.b(p)
q=p.length
if(!(s>=0&&s<q))return A.a(p,s)
p[s]=r
if(o>2){o=s+1
r=B.a.h(b)
if(!(o<q))return A.a(p,o)
p[o]=r
s+=2
r=B.a.h(c)
if(!(s<q))return A.a(p,s)
p[s]=r}}},
aj(a,b,c,d){var s,r,q,p,o=this.d,n=o.c
if(n>0){o=o.d
s=this.c
r=B.a.h(a)
o.$flags&2&&A.b(o)
q=o.length
if(!(s>=0&&s<q))return A.a(o,s)
o[s]=r
if(n===2){n=s+1
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}else if(n>2){r=s+1
p=B.a.h(b)
if(!(r<q))return A.a(o,r)
o[r]=p
p=s+2
r=B.a.h(c)
if(!(p<q))return A.a(o,p)
o[p]=r
if(n>3){n=s+3
s=B.a.h(d)
if(!(n<q))return A.a(o,n)
o[n]=s}}}},
gE(a){return new A.V(this)},
T(a,b){var s,r,q,p=this
if(b==null)return!1
if(b instanceof A.cV){s=A.w(p,A.n(p).n("f.E"))
s=A.o(s)
r=A.w(b,A.n(b).n("f.E"))
return s===A.o(r)}if(t.L.b(b)){s=p.d
r=s.e
q=r!=null?r.b:s.c
s=J.a6(b)
if(s.gp(b)!==q)return!1
if(p.bp(0)!==s.k(b,0))return!1
if(q>1){if(p.bp(1)!==s.k(b,1))return!1
if(q>2){if(p.bp(2)!==s.k(b,2))return!1
if(q>3)if(p.bp(3)!==s.k(b,3))return!1}}return!0}return!1},
gI(a){var s=A.w(this,A.n(this).n("f.E"))
return A.o(s)},
$iz:1,
$iB:1,
$iu:1,
gbd(){return this.d}}
A.J.prototype={
M(){return new A.J()},
gbd(){return $.r0()},
gb7(){return 0},
gb0(){return 0},
gp(a){return 0},
gF(){return 0},
gL(){return B.f},
gU(){return null},
k(a,b){return 0},
i(a,b,c){},
gS(){return 0},
sS(a){},
gq(){return 0},
sq(a){},
gv(){return 0},
sv(a){},
gu(){return 0},
su(a){},
gA(){return 0},
sA(a){},
gag(){return 0},
sag(a){},
gad(){return 0},
sad(a){},
gaf(){return 0},
saf(a){},
gah(){return 0},
sah(a){},
gam(){return 0},
aY(a){},
aC(a,b,c){},
aj(a,b,c,d){},
a5(a,b){},
gJ(){return this},
D(){return!1},
T(a,b){if(b==null)return!1
return b instanceof A.J},
gI(a){return 0},
gE(a){return new A.V(this)},
$iz:1,
$iB:1,
$iu:1}
A.jI.prototype={
a7(){return"FlipDirection."+this.b}}
A.eR.prototype={
C(a){return"ImageException: "+this.a}}
A.ai.prototype={
gp(a){return this.c-this.d},
i(a,b,c){J.a2(this.a,this.d+b,c)
return c},
ck(a,b,c,d){var s=this.a,r=J.aF(s),q=this.d+a
if(c instanceof A.ai)r.a6(s,q,q+b,c.a,c.d+d)
else r.a6(s,q,q+b,t.L.a(c),d)},
dr(a,b,c){return this.ck(a,b,c,0)},
lM(a,b,c){var s=this.a,r=this.d+a
J.eq(s,r,r+b,c)},
dG(a,b,c){var s=this,r=c!=null?s.b+c:s.d
return A.v(s.a,s.e,a,r+b)},
aE(a){return this.dG(a,0,null)},
bX(a,b){return this.dG(a,0,b)},
cU(a,b){return this.dG(a,b,null)},
G(){return J.d(this.a,this.d++)},
aa(a){var s=this.aE(a)
this.d=this.d+(s.c-s.d)
return s},
al(a){var s,r,q,p,o,n=this
if(a==null){s=A.i([],t.t)
for(r=n.c;q=n.d,q<r;){p=n.a
n.d=q+1
o=J.d(p,q)
if(o===0)return A.e5(s,0,null)
B.c.B(s,o)}throw A.h(A.l("EOF reached without finding string terminator (length: "+A.y(a)+")"))}return A.e5(n.aa(a).Z(),0,null)},
cL(){return this.al(null)},
hu(a){var s,r,q,p,o=this,n=A.i([],t.t)
for(s=o.c;r=o.d,r<s;){q=o.a
o.d=r+1
p=J.d(q,r)
B.c.B(n,p)
if(p===10||n.length>=a)return A.e5(n,0,null)}return A.e5(n,0,null)},
lY(){return this.hu(256)},
lZ(){var s,r,q,p,o=this,n=A.i([],t.t)
for(s=o.c;r=o.d,r<s;){q=o.a
o.d=r+1
p=J.d(q,r)
if(p===0){t.L.a(n)
return new A.j_(!0).eV(n,0,null,!0)}B.c.B(n,p)}return B.cN.lj(n,!0)},
m(){var s=this,r=J.d(s.a,s.d++)&255,q=J.d(s.a,s.d++)&255
if(s.e)return r<<8|q
return q<<8|r},
bm(){var s=this,r=J.d(s.a,s.d++)&255,q=J.d(s.a,s.d++)&255,p=J.d(s.a,s.d++)&255
if(s.e)return p|q<<8|r<<16
return r|q<<8|p<<16},
l(){var s=this,r=J.d(s.a,s.d++)&255,q=J.d(s.a,s.d++)&255,p=J.d(s.a,s.d++)&255,o=J.d(s.a,s.d++)&255
if(s.e)return(r<<24|q<<16|p<<8|o)>>>0
return(o<<24|p<<16|q<<8|r)>>>0},
dz(){return A.xp(this.el())},
el(){var s=this,r=J.d(s.a,s.d++)&255,q=J.d(s.a,s.d++)&255,p=J.d(s.a,s.d++)&255,o=J.d(s.a,s.d++)&255,n=J.d(s.a,s.d++)&255,m=J.d(s.a,s.d++)&255,l=J.d(s.a,s.d++)&255,k=J.d(s.a,s.d++)&255
if(s.e)return(B.a.P(r,56)|B.a.P(q,48)|B.a.P(p,40)|B.a.P(o,32)|n<<24|m<<16|l<<8|k)>>>0
return(B.a.P(k,56)|B.a.P(l,48)|B.a.P(m,40)|B.a.P(n,32)|o<<24|p<<16|q<<8|r)>>>0},
eo(a,b,c){var s,r=this,q=r.a
if(t.D.b(q))return r.hB(b,c)
s=r.b+r.d+b
return J.nE(q,s,c<=0?r.c:s+c)},
hB(a,b){var s,r=this,q=b==null?r.c-r.d-a:b,p=r.a
if(t.D.b(p))return J.Q(B.d.gt(p),p.byteOffset+r.d+a,q)
s=r.d+a
s=new Uint8Array(A.q(J.nE(p,s,s+q)))
return s},
Z(){return this.hB(0,null)},
dB(){var s=this.a
if(t.D.b(s))return J.aI(B.d.gt(s),s.byteOffset+this.d,null)
return J.aI(B.d.gt(this.Z()),0,null)},
st(a,b){this.a=t.L.a(b)}}
A.i8.prototype={
fU(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.jQ(a)
i.jv()
i.jL()
i.iH()
B.l.O(i.ax,0,65536,0)
s=i.c
r=s*4
q=i.at=new Int32Array(r)
for(p=i.Q,o=0;o<s;++o)for(n=o*4,m=0;m<4;++m){l=n+m
p===$&&A.c()
k=p.b
if(m<k){j=p.c
k=o*k+m
if(!(k>=0&&k<j.length))return A.a(j,k)
k=j[k]}else k=0
k=B.a.h(k)
if(!(l<r))return A.a(q,l)
q[l]=k}},
jR(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c=Math.max(a,4)
g.f=f-g.d
g.r=f-1
s=B.b.K(f,8)
g.w=s
g.x=s*256
g.Q=new A.dW(new Uint32Array(1024),256,4)
g.a=new A.b_(new Uint8Array(768),256,3)
g.d=3
g.e=2
s=B.b.j(f,3)
g.y=new Int32Array(s)
s=g.z=new Float64Array(f*3)
r=g.ch=new Float64Array(f)
q=g.CW=new Float64Array(f)
p=s.length
if(0>=p)return A.a(s,0)
s[0]=0
if(1>=p)return A.a(s,1)
s[1]=0
if(2>=p)return A.a(s,2)
s[2]=0
if(3>=p)return A.a(s,3)
s[3]=255
if(4>=p)return A.a(s,4)
s[4]=255
if(5>=p)return A.a(s,5)
s[5]=255
o=1/f
for(n=q.length,m=r.length,l=0;l<3;++l){if(!(l<n))return A.a(q,l)
q[l]=o
if(!(l<m))return A.a(r,l)
r[l]=0}for(k=3*3,j=g.f,l=3;l<f;++l,k=i){i=k+1
h=255*(l-3)/j
if(!(k<p))return A.a(s,k)
s[k]=h
k=i+1
if(!(i<p))return A.a(s,i)
s[i]=h
i=k+1
if(!(k<p))return A.a(s,k)
s[k]=h
if(!(l<n))return A.a(q,l)
q[l]=o
if(!(l<m))return A.a(r,l)
r[l]=0}},
iH(){var s,r,q,p,o,n,m
for(s=0;s<this.c;++s){r=this.a
r===$&&A.c()
q=this.Q
q===$&&A.c()
p=q.b
if(2<p){o=q.c
n=s*p+2
if(!(n>=0&&n<o.length))return A.a(o,n)
n=o[n]
o=n}else o=0
if(1<p){n=q.c
m=s*p+1
if(!(m>=0&&m<n.length))return A.a(n,m)
m=n[m]
n=m}else n=0
if(0<p){q=q.c
p=s*p
if(!(p>=0&&p<q.length))return A.a(q,p)
p=q[p]
q=p}else q=0
r.b9(s,Math.abs(o),Math.abs(n),Math.abs(q))}},
jM(a,b,c){var s,r,q,p,o,n,m,l,k,j=this.at,i=this.as
if(!(b>=0&&b<256))return A.a(i,b)
s=i[b]
r=s-1
q=this.c
i=j.length
p=1000
o=-1
for(;;){n=s<q
if(!(n||r>=0))break
if(n){n=s*4
m=n+1
if(!(m>=0&&m<i))return A.a(j,m)
l=j[m]-b
if(l>=p)s=q
else{if(l<0)l=-l
if(!(n>=0&&n<i))return A.a(j,n)
k=j[n]-a
l+=k<0?-k:k
if(l<p){n+=2
if(!(n<i))return A.a(j,n)
k=j[n]-c
l+=k<0?-k:k
if(l<p){o=s
p=l}}++s}}if(r>=0){n=r*4
m=n+1
if(!(m>=0&&m<i))return A.a(j,m)
l=b-j[m]
if(l>=p)r=-1
else{if(l<0)l=-l
if(!(n>=0&&n<i))return A.a(j,n)
k=j[n]-a
l+=k<0?-k:k
if(l<p){n+=2
if(!(n<i))return A.a(j,n)
k=j[n]-c
l+=k<0?-k:k
if(l<p){o=r
p=l}}--r}}}return o},
jv(){var s,r,q,p,o,n,m,l=this
for(s=0,r=0;s<l.c;++s){for(q=0;q<3;++q,++r){p=l.z
p===$&&A.c()
if(!(r>=0&&r<p.length))return A.a(p,r)
o=B.a.H(B.b.h(0.5+p[r]),0,255)
p=l.Q
p===$&&A.c()
n=p.b
if(q<n){p=p.c
n=s*n+q
m=B.a.h(o)
p.$flags&2&&A.b(p)
if(!(n>=0&&n<p.length))return A.a(p,n)
p[n]=m}}p=l.Q
p===$&&A.c()
n=p.b
if(3<n){p=p.c
n=s*n+3
m=B.a.h(s)
p.$flags&2&&A.b(p)
if(!(n>=0&&n<p.length))return A.a(p,n)
p[n]=m}}},
jL(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
for(s=b.c,r=b.Q,q=b.as,p=q.$flags|0,o=0,n=0,m=0;m<s;m=g){r===$&&A.c()
l=r.b
k=1<l
if(k){j=r.c
i=m*l+1
if(!(i>=0&&i<j.length))return A.a(j,i)
h=j[i]}else h=0
for(g=m+1,f=g,e=m;f<s;++f){if(k){j=r.c
i=f*l+1
if(!(i>=0&&i<j.length))return A.a(j,i)
i=j[i]
j=i}else j=0
if(j<h){if(k){j=r.c
i=f*l+1
if(!(i>=0&&i<j.length))return A.a(j,i)
h=j[i]}else h=0
e=f}}if(m!==e){j=0<l
if(j){i=r.c
d=e*l
if(!(d>=0&&d<i.length))return A.a(i,d)
f=i[d]}else f=0
if(j){i=r.c
d=m*l
if(!(d>=0&&d<i.length))return A.a(i,d)
d=i[d]
i=d}else i=0
if(j){c=e*l
d=r.c
i=B.a.h(i)
d.$flags&2&&A.b(d)
if(!(c>=0&&c<d.length))return A.a(d,c)
d[c]=i}if(j){c=m*l
j=r.c
i=B.a.h(f)
j.$flags&2&&A.b(j)
if(!(c>=0&&c<j.length))return A.a(j,c)
j[c]=i}if(k){j=r.c
i=e*l+1
if(!(i>=0&&i<j.length))return A.a(j,i)
f=j[i]}else f=0
if(k){j=r.c
i=m*l+1
if(!(i>=0&&i<j.length))return A.a(j,i)
i=j[i]
j=i}else j=0
if(k){i=r.c
d=e*l+1
j=B.a.h(j)
i.$flags&2&&A.b(i)
if(!(d>=0&&d<i.length))return A.a(i,d)
i[d]=j}if(k){k=r.c
j=m*l+1
i=B.a.h(f)
k.$flags&2&&A.b(k)
if(!(j>=0&&j<k.length))return A.a(k,j)
k[j]=i}k=2<l
if(k){j=r.c
i=e*l+2
if(!(i>=0&&i<j.length))return A.a(j,i)
f=j[i]}else f=0
if(k){j=r.c
i=m*l+2
if(!(i>=0&&i<j.length))return A.a(j,i)
i=j[i]
j=i}else j=0
if(k){i=r.c
d=e*l+2
j=B.a.h(j)
i.$flags&2&&A.b(i)
if(!(d>=0&&d<i.length))return A.a(i,d)
i[d]=j}if(k){k=r.c
j=m*l+2
i=B.a.h(f)
k.$flags&2&&A.b(k)
if(!(j>=0&&j<k.length))return A.a(k,j)
k[j]=i}k=3<l
if(k){j=r.c
i=e*l+3
if(!(i>=0&&i<j.length))return A.a(j,i)
f=j[i]}else f=0
if(k){j=r.c
i=m*l+3
if(!(i>=0&&i<j.length))return A.a(j,i)
i=j[i]
j=i}else j=0
if(k){i=r.c
d=e*l+3
j=B.a.h(j)
i.$flags&2&&A.b(i)
if(!(d>=0&&d<i.length))return A.a(i,d)
i[d]=j}if(k){k=r.c
l=m*l+3
j=B.a.h(f)
k.$flags&2&&A.b(k)
if(!(l>=0&&l<k.length))return A.a(k,l)
k[l]=j}}if(h!==o){p&2&&A.b(q)
if(!(o>=0&&o<256))return A.a(q,o)
q[o]=n+m>>>1
for(f=o+1;f<h;++f){if(!(f<256))return A.a(q,f)
q[f]=m}n=m
o=h}}s=b.r
s.toString
r=B.a.j(n+s,1)
p&2&&A.b(q)
if(!(o>=0&&o<256))return A.a(q,o)
q[o]=r
for(g=o+1;g<256;++g)q[g]=s},
fO(a,b){var s,r,q,p
for(s=this.y,r=a*a,q=0;q<a;++q){s===$&&A.c()
p=B.b.h(b*((r-q*q)*256/r))
s.$flags&2&&A.b(s)
if(!(q<s.length))return A.a(s,q)
s[q]=p}},
jQ(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.x
a6===$&&A.c()
s=a5.b
r=30+B.a.K(s-1,3)
q=a7.gR()*a7.gN()
p=B.a.a1(q,s)
o=Math.max(B.a.K(p,100),1)
if(o===0)o=1
n=B.a.j(a6,8)
if(n<=1)n=0
a5.fO(n,1024)
if(q<1509)m=a5.b=1
else if(B.a.V(q,499)!==0)m=499
else if(B.a.V(q,491)!==0)m=491
else m=B.a.V(q,487)!==0?487:503
l=a7.gR()
k=a7.gN()
for(j=a6,i=1024,h=0,g=0,f=0,e=0,d=null;e<p;){a6=a7.a
d=a6==null?null:a6.a0(g,f,d)
if(d==null)d=new A.J()
c=d.gq()
b=d.gv()
a=d.gu()
if(e===0){a6=a5.z
a6===$&&A.c()
s=a5.e
s===$&&A.c()
s*=3
a6.$flags&2&&A.b(a6)
a0=a6.length
if(!(s>=0&&s<a0))return A.a(a6,s)
a6[s]=a
a1=s+1
if(!(a1<a0))return A.a(a6,a1)
a6[a1]=b
s+=2
if(!(s<a0))return A.a(a6,s)
a6[s]=c}a2=a5.kS(a,b,c)
if(a2<0)a2=a5.iF(a,b,c)
if(a2>=a5.d){a3=i/1024
a4=a2*3
a6=a5.z
a6===$&&A.c()
s=a6.length
if(!(a4>=0&&a4<s))return A.a(a6,a4)
a0=a6[a4]
a6.$flags&2&&A.b(a6)
a6[a4]=a0-a3*(a0-a)
a0=a4+1
if(!(a0<s))return A.a(a6,a0)
a1=a6[a0]
a6[a0]=a1-a3*(a1-b)
a1=a4+2
if(!(a1<s))return A.a(a6,a1)
s=a6[a1]
a6[a1]=s-a3*(s-c)
if(n>0)a5.io(a3,n,a2,a,b,c)}h+=m
g+=m
while(g>l){g-=l;++f}while(h>=q){h-=q
f-=k}++e
if(B.a.V(e,o)===0){i-=B.a.a1(i,r)
j-=B.a.K(j,30)
n=B.a.j(j,8)
if(n<=1)n=0
a5.fO(n,i)}}},
io(a,b,c,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=c-b,d=f.d-1
if(e<d)e=d
s=c+b
r=f.c
if(s>r)s=r
q=c+1
p=c-1
o=f.y
n=f.z
m=1
for(;;){l=q<s
if(!(l||p>e))break
o===$&&A.c()
k=m+1
if(!(m<o.length))return A.a(o,m)
j=o[m]
if(l){i=q*3
n===$&&A.c()
l=n.length
if(!(i>=0&&i<l))return A.a(n,i)
h=n[i]
n.$flags&2&&A.b(n)
n[i]=h-j*(h-a0)/262144
h=i+1
if(!(h<l))return A.a(n,h)
g=n[h]
n[h]=g-j*(g-a1)/262144
g=i+2
if(!(g<l))return A.a(n,g)
l=n[g]
n[g]=l-j*(l-a2)/262144;++q}if(p>e){i=p*3
n===$&&A.c()
l=n.length
if(!(i>=0&&i<l))return A.a(n,i)
h=n[i]
n.$flags&2&&A.b(n)
n[i]=h-j*(h-a0)/262144
h=i+1
if(!(h<l))return A.a(n,h)
g=n[h]
n[h]=g-j*(g-a1)/262144
g=i+2
if(!(g<l))return A.a(n,g)
l=n[g]
n[g]=l-j*(l-a2)/262144;--p}m=k}},
iF(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=1e30
for(s=b.d,r=s*3,q=b.c,p=b.CW,o=b.ch,n=b.z,m=a,l=m,k=-1,j=-1;s<q;++s,r=i){n===$&&A.c()
i=r+1
h=n.length
if(!(r<h))return A.a(n,r)
g=n[r]-a0
if(g<0)g=-g
r=i+1
if(!(i<h))return A.a(n,i)
f=n[i]-a1
if(f<0)f=-f
i=r+1
if(!(r<h))return A.a(n,r)
e=n[r]-a2
if(e<0)e=-e
g=g+f+e
if(g<l){k=s
l=g}o===$&&A.c()
if(!(s<o.length))return A.a(o,s)
d=g-o[s]
if(d<m){j=s
m=d}p===$&&A.c()
if(!(s<p.length))return A.a(p,s)
h=p[s]
p.$flags&2&&A.b(p)
p[s]=h-0.0009765625*h
h=o[s]
c=p[s]
o.$flags&2&&A.b(o)
o[s]=h+c}p===$&&A.c()
if(!(k>=0&&k<p.length))return A.a(p,k)
q=p[k]
p.$flags&2&&A.b(p)
p[k]=q+0.0009765625
o===$&&A.c()
if(!(k<o.length))return A.a(o,k)
q=o[k]
o.$flags&2&&A.b(o)
o[k]=q-1
return j},
kS(a,b,c){var s,r,q,p,o,n,m
for(s=this.d,r=this.z,q=0,p=0;q<s;++q){r===$&&A.c()
o=p+1
n=r.length
if(!(p<n))return A.a(r,p)
m=!1
if(r[p]===a){p=o+1
if(!(o<n))return A.a(r,o)
if(r[o]===b){o=p+1
if(!(p<n))return A.a(r,p)
n=r[p]===c
p=o}else n=m}else{n=m
p=o}if(n)return q}return-1}}
A.ib.prototype={
a_(a){var s,r=this,q=r.a
if(q===r.c.length)r.f4(q+1)
q=r.c
s=r.a++
q.$flags&2&&A.b(q)
if(!(s>=0&&s<q.length))return A.a(q,s)
q[s]=a&255},
bE(a){var s,r,q,p=this
t.L.a(a)
s=J.bW(a)
r=p.a+s
if(r>p.c.length)p.f4(r)
r=p.c
q=p.a
B.d.ap(r,q,q+s,a)
p.a+=s},
dC(a){var s=this
if(s.b){s.a_(B.a.j(a,8)&255)
s.a_(a&255)
return}s.a_(a&255)
s.a_(B.a.j(a,8)&255)},
b_(a){var s=this
if(s.b){s.a_(B.a.j(a,24)&255)
s.a_(B.a.j(a,16)&255)
s.a_(B.a.j(a,8)&255)
s.a_(a&255)
return}s.a_(a&255)
s.a_(B.a.j(a,8)&255)
s.a_(B.a.j(a,16)&255)
s.a_(B.a.j(a,24)&255)},
f4(a){var s=this.c,r=Math.max(s.length*3,a+8192),q=new Uint8Array(r)
B.d.ap(q,0,this.a,s)
this.c=q},
gp(a){return this.a}}
A.iv.prototype={
hI(a){var s,r,q,p,o,n,m=a.gR(),l=a.gN(),k=this.a
k===$&&A.c()
s=A.W(null,null,B.f,0,B.i,l,null,0,1,k,B.f,m,!1)
m=s.a
r=m.gE(m)
r.D()
s.z=a.z
s.w=a.w
s.y=a.y
for(m=a.a,m=m.gE(m);m.D();){q=m.gJ()
p=r.gJ()
o=B.b.h(q.gq())
n=B.b.h(q.gv())
p.i(0,0,this.jM(B.b.h(q.gu()),n,o))
r.D()}return s}}
A.e2.prototype={
h(a){var s=this.b
return s===0?0:B.a.a1(this.a,s)},
T(a,b){if(b==null)return!1
return b instanceof A.e2&&this.a===b.a&&this.b===b.b},
gI(a){return A.dV(this.a,this.b,B.E,B.E)},
C(a){return""+this.a+"/"+this.b}}
A.hH.prototype={
C(a){return"ImageDecodeException: "+this.a}}
A.bu.prototype={
a7(){return"ImageFormat."+this.b}}
A.nx.prototype={
$2(a,b){var s,r,q,p,o
t.L.a(b)
s=this.a
r=s.length
q=b.length
if(r<a+q)return!1
for(p=0;p<q;++p){o=a+p
if(!(o<r))return A.a(s,o)
if(s[o]!==b[p])return!1}return!0},
$S:70}
A.nw.prototype={
$2(a,b){var s=this.a,r=a+b
return s.length<r?"":A.e5(B.d.bW(s,a,r),0,null)},
$S:71};(function aliases(){var s=J.c5.prototype
s.hU=s.C
s=A.C.prototype
s.eC=s.a6})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_2u,m=hunkHelpers.installStaticTearOff
s(J,"vH","tg",21)
r(A,"vU","tL",13)
q(A,"wm","uP",19)
q(A,"wn","uQ",19)
q(A,"wo","uR",19)
r(A,"qC","wc",2)
s(A,"ww","tm",21)
q(A,"wr","mY",74)
p(A.aa.prototype,"gbC",1,0,null,["$1","$0"],["ac","h"],4,0,0)
p(A.bG.prototype,"gbC",1,0,null,["$1","$0"],["ac","h"],4,0,0)
p(A.cx.prototype,"gbC",1,0,null,["$1","$0"],["ac","h"],4,0,0)
p(A.c2.prototype,"gbC",1,0,null,["$1","$0"],["ac","h"],4,0,0)
p(A.ct.prototype,"gbC",1,0,null,["$1","$0"],["ac","h"],4,0,0)
p(A.c3.prototype,"gbC",1,0,null,["$1","$0"],["ac","h"],4,0,0)
p(A.cw.prototype,"gbC",1,0,null,["$1","$0"],["ac","h"],4,0,0)
p(A.cu.prototype,"gbC",1,0,null,["$1","$0"],["ac","h"],4,0,0)
p(A.cv.prototype,"gbC",1,0,null,["$1","$0"],["ac","h"],4,0,0)
p(A.dE.prototype,"gbC",1,0,null,["$1","$0"],["ac","h"],4,0,0)
o(A.i0.prototype,"giQ","iR",11)
var l
p(l=A.i3.prototype,"giS",0,3,null,["$3"],["iT"],10,0,0)
p(l,"giV",0,3,null,["$3"],["iW"],10,0,0)
p(l,"giX",0,3,null,["$3"],["iY"],10,0,0)
p(l,"giK",0,3,null,["$3"],["iL"],10,0,0)
p(l,"giM",0,3,null,["$3"],["iN"],10,0,0)
q(A,"xz","ud",0)
q(A,"xs","u5",0)
q(A,"xq","u3",0)
q(A,"xx","ub",0)
q(A,"xy","uc",0)
q(A,"xw","ua",0)
q(A,"xv","u9",0)
q(A,"xu","u8",0)
q(A,"xB","uf",0)
q(A,"xA","ue",0)
q(A,"xt","u6",0)
q(A,"xr","u4",0)
q(A,"xM","uq",0)
q(A,"xK","uo",0)
q(A,"xC","ug",0)
q(A,"xE","ui",0)
q(A,"xD","uh",0)
q(A,"xF","uj",0)
q(A,"xN","ur",0)
q(A,"xL","up",0)
q(A,"xG","uk",0)
q(A,"xH","ul",0)
q(A,"xI","um",0)
q(A,"xJ","un",0)
n(A.fE.prototype,"gkh","ki",29)
n(A.hU.prototype,"glw","lx",29)
m(A,"oG",3,null,["$3"],["us"],3,0)
m(A,"xO",3,null,["$3"],["ut"],3,0)
m(A,"xT",3,null,["$3"],["uy"],3,0)
m(A,"xU",3,null,["$3"],["uz"],3,0)
m(A,"xV",3,null,["$3"],["uA"],3,0)
m(A,"xW",3,null,["$3"],["uB"],3,0)
m(A,"xX",3,null,["$3"],["uC"],3,0)
m(A,"xY",3,null,["$3"],["uD"],3,0)
m(A,"xZ",3,null,["$3"],["uE"],3,0)
m(A,"y_",3,null,["$3"],["uF"],3,0)
m(A,"xP",3,null,["$3"],["uu"],3,0)
m(A,"xQ",3,null,["$3"],["uv"],3,0)
m(A,"xR",3,null,["$3"],["uw"],3,0)
m(A,"xS",3,null,["$3"],["ux"],3,0)
m(A,"y1",6,null,["$6"],["uM"],18,0)
m(A,"y2",6,null,["$6"],["uN"],18,0)
m(A,"y0",6,null,["$6"],["uL"],18,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.I,null)
q(A.I,[A.nM,J.hL,A.fv,J.es,A.Y,A.C,A.kX,A.f,A.cF,A.f5,A.fK,A.fw,A.ey,A.a1,A.bx,A.ar,A.eu,A.d4,A.bL,A.bX,A.l9,A.ko,A.eA,A.h_,A.dT,A.kg,A.ad,A.be,A.f3,A.lB,A.m3,A.bj,A.iS,A.iZ,A.lZ,A.iM,A.h0,A.aO,A.iO,A.d2,A.a5,A.iN,A.iW,A.h6,A.iT,A.d5,A.fO,A.hp,A.dm,A.j_,A.cm,A.lC,A.ia,A.fx,A.lD,A.eG,A.aA,A.ab,A.iX,A.cY,A.fy,A.hs,A.kn,A.fU,A.jQ,A.eS,A.lw,A.jn,A.b4,A.lR,A.lY,A.k1,A.eW,A.ff,A.jy,A.jq,A.cz,A.jB,A.ez,A.ji,A.jj,A.jc,A.jH,A.dk,A.jb,A.kW,A.fM,A.er,A.fe,A.kE,A.lW,A.bC,A.kT,A.km,A.lP,A.lQ,A.lT,A.iy,A.f2,A.i9,A.jJ,A.b2,A.kp,A.ee,A.hy,A.iK,A.V,A.bH,A.iR,A.hr,A.bt,A.aa,A.bJ,A.jh,A.aY,A.jm,A.H,A.jp,A.ht,A.bE,A.hu,A.hv,A.hw,A.eC,A.fT,A.eI,A.eJ,A.c0,A.hF,A.hG,A.hn,A.c1,A.ka,A.k5,A.c4,A.i0,A.ec,A.iU,A.i1,A.i2,A.kb,A.i3,A.kv,A.fr,A.ih,A.iY,A.bw,A.dZ,A.kH,A.cW,A.il,A.im,A.iq,A.iu,A.e_,A.cX,A.fu,A.b0,A.fA,A.l3,A.iB,A.l8,A.iC,A.d_,A.kj,A.lc,A.fD,A.ld,A.lk,A.ln,A.lp,A.fC,A.lo,A.le,A.bR,A.fF,A.iJ,A.fG,A.fH,A.fE,A.iH,A.ll,A.iI,A.lq,A.fI,A.hz,A.hA,A.eL,A.eK,A.eM,A.hC,A.bT,A.bF,A.aZ,A.id,A.eR,A.ai,A.iv,A.ib,A.e2,A.hH])
q(J.hL,[J.hZ,J.f0,J.f1,J.dQ,J.dR,J.dP,J.cB])
q(J.f1,[J.c5,J.t,A.c6,A.f9])
q(J.c5,[J.ie,J.e7,J.bI])
r(J.hX,A.fv)
r(J.k4,J.t)
q(J.dP,[J.f_,J.i_])
q(A.Y,[A.dS,A.bO,A.i4,A.iE,A.iw,A.iQ,A.he,A.b8,A.fB,A.iD,A.e4,A.ho])
r(A.e8,A.C)
r(A.aw,A.e8)
q(A.f,[A.A,A.cG,A.fJ,A.bM,A.eg,A.dn,A.dp,A.dq,A.dr,A.ds,A.dt,A.du,A.dv,A.dw,A.dx,A.dy,A.b9,A.ax,A.an,A.cK,A.cL,A.cM,A.cN,A.cO,A.cP,A.cQ,A.cR,A.cS,A.cT,A.cU,A.cV,A.J])
q(A.A,[A.bv,A.ex,A.az,A.kh,A.cD])
q(A.bv,[A.fz,A.f4])
r(A.ew,A.cG)
r(A.dA,A.bM)
q(A.ar,[A.d7,A.d8,A.ce])
q(A.d7,[A.K,A.fV])
q(A.d8,[A.bk,A.fW])
q(A.ce,[A.fX,A.fY,A.ed])
r(A.c_,A.eu)
q(A.bL,[A.dz,A.fZ])
q(A.dz,[A.ev,A.eH])
q(A.bX,[A.hk,A.hl,A.iA,A.nc,A.ne,A.ly,A.lx,A.mb,A.lN,A.kk,A.ni,A.nj,A.nt,A.nr,A.ns,A.my,A.nm,A.nq,A.mr,A.mh,A.mk,A.mg,A.mZ,A.mQ,A.nh,A.mz,A.mC,A.mD,A.mE,A.mq,A.nl,A.nk,A.mu,A.mv,A.mO,A.mU,A.nv,A.mM,A.mL,A.ml,A.mm,A.mn,A.mo,A.n3,A.mw,A.jd,A.jG,A.kx,A.kA,A.k_,A.jZ])
q(A.hk,[A.kF,A.lz,A.lA,A.m_,A.jL,A.jK,A.lE,A.lJ,A.lI,A.lG,A.lF,A.lM,A.lL,A.lK,A.lV,A.ms,A.m5,A.m4,A.nz,A.jx,A.jw,A.jt,A.ju,A.jv,A.n6,A.me,A.m9,A.ma,A.md,A.mV,A.mF,A.mG,A.jg,A.je,A.jf,A.jF,A.jD,A.jE,A.jP,A.jN,A.jO,A.jU,A.jT,A.jS,A.k9,A.k8,A.ku,A.ks,A.kt,A.ky,A.kC,A.kD,A.kB,A.kK,A.kL,A.kJ,A.kS,A.kQ,A.kR,A.l1,A.l2,A.l0,A.l7,A.l5,A.l6,A.lu,A.ls,A.lt])
r(A.fd,A.bO)
q(A.iA,[A.iz,A.dl])
r(A.bd,A.dT)
q(A.hl,[A.kc,A.nd,A.mc,A.mH,A.lO,A.ki,A.kl,A.jr,A.js,A.no,A.np,A.nn,A.n5,A.n_,A.n1,A.n0,A.mx,A.mB,A.mA,A.lX,A.kU,A.kV,A.mR,A.mS,A.mT,A.mN,A.nu,A.mI,A.mJ,A.mK,A.na,A.jV,A.jW,A.jX,A.nx,A.nw])
r(A.cC,A.bd)
r(A.dU,A.c6)
q(A.f9,[A.i7,A.aj])
q(A.aj,[A.fP,A.fR])
r(A.fQ,A.fP)
r(A.c7,A.fQ)
r(A.fS,A.fR)
r(A.aT,A.fS)
q(A.c7,[A.cH,A.f6])
q(A.aT,[A.f7,A.cI,A.f8,A.fa,A.fb,A.cJ,A.c8])
r(A.h1,A.iQ)
r(A.fL,A.iO)
r(A.iV,A.h6)
r(A.fN,A.fZ)
q(A.hp,[A.m1,A.m0,A.iG])
r(A.hq,A.dm)
q(A.hq,[A.i5,A.iF])
r(A.kf,A.m1)
r(A.ke,A.m0)
q(A.b8,[A.e1,A.hJ])
q(A.lC,[A.eT,A.ef,A.eb,A.et,A.hh,A.cn,A.bD,A.jl,A.bq,A.ap,A.hg,A.am,A.al,A.cp,A.co,A.bb,A.dC,A.dX,A.fq,A.c9,A.ig,A.ca,A.bh,A.aD,A.cZ,A.af,A.b3,A.d0,A.ea,A.hD,A.hx,A.hW,A.jI,A.bu])
r(A.m7,A.lw)
r(A.hd,A.eG)
q(A.eW,[A.eU,A.eV])
q(A.ff,[A.iP,A.ic])
r(A.hj,A.cz)
q(A.b9,[A.hm,A.cl])
r(A.bZ,A.bH)
q(A.aa,[A.bG,A.cs,A.cx,A.c2,A.ct,A.c3,A.cw,A.cu,A.cv,A.dF,A.dD,A.dG,A.dE])
q(A.jm,[A.hi,A.jC,A.jM,A.jR,A.k7,A.kr,A.kz,A.kI,A.kP,A.l_,A.l4,A.lr])
r(A.jo,A.hi)
r(A.hM,A.bE)
q(A.hM,[A.eX,A.hO,A.hP,A.hQ,A.eY])
r(A.hN,A.eC)
r(A.hR,A.eJ)
r(A.hE,A.aY)
q(A.c1,[A.cr,A.dB])
r(A.hS,A.fr)
r(A.hT,A.ih)
r(A.kw,A.jp)
r(A.cb,A.H)
q(A.bw,[A.ij,A.ik,A.io,A.ip,A.is,A.it])
q(A.dZ,[A.ft,A.ir])
q(A.iu,[A.e0,A.aB])
r(A.hU,A.fE)
r(A.hV,A.fI)
r(A.eZ,A.bT)
q(A.an,[A.dH,A.dI,A.eN,A.eO,A.eP,A.eQ,A.dJ,A.cy,A.dK,A.dL,A.dM,A.dN])
q(A.aZ,[A.fg,A.fh,A.fi,A.fj,A.fk,A.fl,A.fm,A.dW,A.b_])
r(A.i8,A.iv)
s(A.e8,A.bx)
s(A.fP,A.C)
s(A.fQ,A.a1)
s(A.fR,A.C)
s(A.fS,A.a1)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{e:"int",k:"double",m:"num",T:"String",a3:"bool",ab:"Null",r:"List",I:"Object",aS:"Map",X:"JSObject"},mangledNames:{},types:["~(ai)","ax?()","~()","e(e,bQ,e)","e([e])","H?()","e(e,e)","~(e,e)","k(e)","~(e,bC)","~(c4,cA,e)","~(e)","~(@)","e()","e(e)","~(e,e,e)","r<e>()","aL()","~(e,e,e,e,e,aL)","~(~())","a3(e,e)","e(@,@)","ab(@)","e(e,e,e)","ab()","~(k,k,e)","k(e,e)","~(T,bt)","@()","~(e,a3)","+(e,e)(e,e,e)","e(k,k,k)","k()","~(k,k)","e(e,k,dO)","@(@)","@(@,T)","ab(@,cc)","~(I?,I?)","+(dk,e)()","~(e,@)","k(k,k,k,k,k,k)","~(e,bs,bs,bs,bs)","@(T)","~(e,k,e)","ab(I,cc)","k(e,e,bC)","k(eF,e,e)","~(@,@)","~(~(e,e))","ee(e)","e(k,k,e)","aJ<ab>()","~(e,aa)","e(k,k)","aY?()","ax()","r<k>(r<k>,r<k>)","X()","bQ(e)","ab(X)","c0?()","~(I?)","~(aL)","a3(T)","d_?()","ab(~())","bT?()","m(m,m,m,m)","m(m,m,m,m,m)","a3(e,r<e>)","T(e,e)","a3(k,k,k,k)","~(I)","aJ<+heic,image(a3,b2)>(cz)","aJ<b2>()","~(m,m,m,m)","+(r<k>,r<k>)(k,k)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.K&&a.b(c.a)&&b.b(c.b),"2;heic,image":(a,b)=>c=>c instanceof A.fV&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.bk&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;colors,splits,warmth":(a,b,c)=>d=>d instanceof A.fW&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.fX&&A.oD(a,b.a),"4;minorXs,minorYs,xs,ys":a=>b=>b instanceof A.fY&&A.oD(a,b.a),"5;brush,colors,edges,stop,variation":a=>b=>b instanceof A.ed&&A.oD(a,b.a)}}
A.v9(v.typeUniverse,JSON.parse('{"bI":"c5","ie":"c5","e7":"c5","y9":"c6","t":{"r":["1"],"A":["1"],"X":[],"f":["1"],"ao":["1"]},"hZ":{"a3":[],"O":[]},"f0":{"ab":[],"O":[]},"f1":{"X":[]},"c5":{"X":[]},"hX":{"fv":[]},"k4":{"t":["1"],"r":["1"],"A":["1"],"X":[],"f":["1"],"ao":["1"]},"es":{"z":["1"]},"dP":{"k":[],"m":[],"ba":["m"]},"f_":{"k":[],"e":[],"m":[],"ba":["m"],"O":[]},"i_":{"k":[],"m":[],"ba":["m"],"O":[]},"cB":{"T":[],"ba":["T"],"pE":[],"ao":["@"],"O":[]},"dS":{"Y":[]},"aw":{"C":["e"],"bx":["e"],"r":["e"],"A":["e"],"f":["e"],"C.E":"e","bx.E":"e"},"A":{"f":["1"]},"bv":{"A":["1"],"f":["1"]},"fz":{"bv":["1"],"A":["1"],"f":["1"],"f.E":"1","bv.E":"1"},"cF":{"z":["1"]},"cG":{"f":["2"],"f.E":"2"},"ew":{"cG":["1","2"],"A":["2"],"f":["2"],"f.E":"2"},"f5":{"z":["2"]},"fJ":{"f":["1"],"f.E":"1"},"fK":{"z":["1"]},"bM":{"f":["1"],"f.E":"1"},"dA":{"bM":["1"],"A":["1"],"f":["1"],"f.E":"1"},"fw":{"z":["1"]},"ex":{"A":["1"],"f":["1"],"f.E":"1"},"ey":{"z":["1"]},"e8":{"C":["1"],"bx":["1"],"r":["1"],"A":["1"],"f":["1"]},"K":{"d7":[],"ar":[]},"fV":{"d7":[],"ar":[]},"bk":{"d8":[],"ar":[]},"fW":{"d8":[],"ar":[]},"fX":{"ce":[],"ar":[]},"fY":{"ce":[],"ar":[]},"ed":{"ce":[],"ar":[]},"eu":{"aS":["1","2"]},"d4":{"z":["1"]},"c_":{"eu":["1","2"],"aS":["1","2"]},"dz":{"bL":["1"],"A":["1"],"f":["1"]},"ev":{"dz":["1"],"bL":["1"],"A":["1"],"f":["1"]},"eH":{"dz":["1"],"bL":["1"],"A":["1"],"f":["1"]},"fd":{"bO":[],"Y":[]},"i4":{"Y":[]},"iE":{"Y":[]},"h_":{"cc":[]},"bX":{"cq":[]},"hk":{"cq":[]},"hl":{"cq":[]},"iA":{"cq":[]},"iz":{"cq":[]},"dl":{"cq":[]},"iw":{"Y":[]},"bd":{"dT":["1","2"],"nO":["1","2"],"aS":["1","2"]},"az":{"A":["1"],"f":["1"],"f.E":"1"},"ad":{"z":["1"]},"kh":{"A":["1"],"f":["1"],"f.E":"1"},"be":{"z":["1"]},"cD":{"A":["aA<1,2>"],"f":["aA<1,2>"],"f.E":"aA<1,2>"},"f3":{"z":["aA<1,2>"]},"cC":{"bd":["1","2"],"dT":["1","2"],"nO":["1","2"],"aS":["1","2"]},"d7":{"ar":[]},"d8":{"ar":[]},"ce":{"ar":[]},"dU":{"c6":[],"X":[],"O":[]},"cJ":{"aT":[],"C":["e"],"aj":["e"],"r":["e"],"aR":["e"],"A":["e"],"X":[],"a4":[],"ao":["e"],"f":["e"],"a1":["e"],"O":[],"C.E":"e","a1.E":"e"},"c8":{"aT":[],"aL":[],"C":["e"],"aj":["e"],"r":["e"],"aR":["e"],"A":["e"],"X":[],"a4":[],"ao":["e"],"f":["e"],"a1":["e"],"O":[],"C.E":"e","a1.E":"e"},"c6":{"X":[],"O":[]},"f9":{"X":[],"a4":[]},"i7":{"X":[],"a4":[],"O":[]},"aj":{"aR":["1"],"X":[],"a4":[],"ao":["1"]},"c7":{"C":["k"],"aj":["k"],"r":["k"],"aR":["k"],"A":["k"],"X":[],"a4":[],"ao":["k"],"f":["k"],"a1":["k"]},"aT":{"C":["e"],"aj":["e"],"r":["e"],"aR":["e"],"A":["e"],"X":[],"a4":[],"ao":["e"],"f":["e"],"a1":["e"]},"cH":{"c7":[],"eF":[],"C":["k"],"aj":["k"],"r":["k"],"aR":["k"],"A":["k"],"X":[],"a4":[],"ao":["k"],"f":["k"],"a1":["k"],"O":[],"C.E":"k","a1.E":"k"},"f6":{"c7":[],"bs":[],"C":["k"],"aj":["k"],"r":["k"],"aR":["k"],"A":["k"],"X":[],"a4":[],"ao":["k"],"f":["k"],"a1":["k"],"O":[],"C.E":"k","a1.E":"k"},"f7":{"aT":[],"cA":[],"C":["e"],"aj":["e"],"r":["e"],"aR":["e"],"A":["e"],"X":[],"a4":[],"ao":["e"],"f":["e"],"a1":["e"],"O":[],"C.E":"e","a1.E":"e"},"cI":{"aT":[],"dO":[],"C":["e"],"aj":["e"],"r":["e"],"aR":["e"],"A":["e"],"X":[],"a4":[],"ao":["e"],"f":["e"],"a1":["e"],"O":[],"C.E":"e","a1.E":"e"},"f8":{"aT":[],"nK":[],"C":["e"],"aj":["e"],"r":["e"],"aR":["e"],"A":["e"],"X":[],"a4":[],"ao":["e"],"f":["e"],"a1":["e"],"O":[],"C.E":"e","a1.E":"e"},"fa":{"aT":[],"lb":[],"C":["e"],"aj":["e"],"r":["e"],"aR":["e"],"A":["e"],"X":[],"a4":[],"ao":["e"],"f":["e"],"a1":["e"],"O":[],"C.E":"e","a1.E":"e"},"fb":{"aT":[],"bQ":[],"C":["e"],"aj":["e"],"r":["e"],"aR":["e"],"A":["e"],"X":[],"a4":[],"ao":["e"],"f":["e"],"a1":["e"],"O":[],"C.E":"e","a1.E":"e"},"iQ":{"Y":[]},"h1":{"bO":[],"Y":[]},"h0":{"z":["1"]},"eg":{"f":["1"],"f.E":"1"},"aO":{"Y":[]},"fL":{"iO":["1"]},"a5":{"aJ":["1"]},"h6":{"q_":[]},"iV":{"h6":[],"q_":[]},"fN":{"bL":["1"],"A":["1"],"f":["1"]},"d5":{"z":["1"]},"C":{"r":["1"],"A":["1"],"f":["1"]},"dT":{"aS":["1","2"]},"f4":{"tS":["1"],"bv":["1"],"A":["1"],"f":["1"],"f.E":"1","bv.E":"1"},"fO":{"z":["1"]},"bL":{"A":["1"],"f":["1"]},"fZ":{"bL":["1"],"A":["1"],"f":["1"]},"hq":{"dm":["T","r<e>"]},"i5":{"dm":["T","r<e>"]},"iF":{"dm":["T","r<e>"]},"k":{"m":[],"ba":["m"]},"cm":{"ba":["cm"]},"e":{"m":[],"ba":["m"]},"r":{"A":["1"],"f":["1"]},"m":{"ba":["m"]},"T":{"ba":["T"],"pE":[]},"he":{"Y":[]},"bO":{"Y":[]},"b8":{"Y":[]},"e1":{"Y":[]},"hJ":{"Y":[]},"fB":{"Y":[]},"iD":{"Y":[]},"e4":{"Y":[]},"ho":{"Y":[]},"ia":{"Y":[]},"fx":{"Y":[]},"iX":{"cc":[]},"eS":{"rJ":[]},"eU":{"eW":[]},"iP":{"ff":[]},"eV":{"eW":[]},"ic":{"ff":[]},"hj":{"cz":[]},"er":{"jk":[]},"fe":{"jk":[]},"V":{"z":["m"]},"dn":{"B":[],"f":["m"],"f.E":"m"},"dp":{"B":[],"f":["m"],"f.E":"m"},"dq":{"B":[],"f":["m"],"f.E":"m"},"dr":{"B":[],"f":["m"],"f.E":"m"},"ds":{"B":[],"f":["m"],"f.E":"m"},"dt":{"B":[],"f":["m"],"f.E":"m"},"du":{"B":[],"f":["m"],"f.E":"m"},"dv":{"B":[],"f":["m"],"f.E":"m"},"dw":{"B":[],"f":["m"],"f.E":"m"},"dx":{"B":[],"f":["m"],"f.E":"m"},"dy":{"B":[],"f":["m"],"f.E":"m"},"b9":{"B":[],"f":["m"],"f.E":"m"},"hm":{"B":[],"f":["m"],"f.E":"m"},"cl":{"B":[],"f":["m"],"f.E":"m"},"bZ":{"bH":[]},"bG":{"aa":[]},"cs":{"aa":[]},"cx":{"aa":[]},"c2":{"aa":[]},"ct":{"aa":[]},"c3":{"aa":[]},"cw":{"aa":[]},"cu":{"aa":[]},"cv":{"aa":[]},"dF":{"aa":[]},"dD":{"aa":[]},"dG":{"aa":[]},"dE":{"aa":[]},"aY":{"H":[]},"eX":{"bE":[]},"hM":{"bE":[]},"hw":{"H":[]},"hN":{"eC":[]},"hO":{"bE":[]},"hP":{"bE":[]},"hQ":{"bE":[]},"eY":{"bE":[]},"hR":{"eJ":[]},"c0":{"H":[]},"hF":{"H":[]},"hE":{"aY":[],"H":[]},"cr":{"c1":[]},"dB":{"c1":[]},"i2":{"H":[]},"hS":{"fr":[]},"ih":{"H":[]},"hT":{"H":[]},"cb":{"H":[]},"ij":{"bw":[]},"ik":{"bw":[]},"io":{"bw":[]},"ip":{"bw":[]},"is":{"bw":[]},"it":{"bw":[]},"ft":{"dZ":[]},"ir":{"dZ":[]},"il":{"H":[]},"e_":{"H":[]},"cX":{"H":[]},"fu":{"H":[]},"fA":{"H":[]},"d_":{"H":[]},"hV":{"fI":[]},"bT":{"H":[]},"eZ":{"bT":[],"H":[]},"ax":{"f":["u"],"f.E":"u"},"an":{"f":["u"]},"dH":{"an":[],"f":["u"],"f.E":"u"},"dI":{"an":[],"f":["u"],"f.E":"u"},"eN":{"an":[],"f":["u"],"f.E":"u"},"eO":{"an":[],"f":["u"],"f.E":"u"},"eP":{"an":[],"f":["u"],"f.E":"u"},"eQ":{"an":[],"f":["u"],"f.E":"u"},"dJ":{"an":[],"f":["u"],"f.E":"u"},"cy":{"an":[],"f":["u"],"f.E":"u"},"dK":{"an":[],"f":["u"],"f.E":"u"},"dL":{"an":[],"f":["u"],"f.E":"u"},"dM":{"an":[],"f":["u"],"f.E":"u"},"dN":{"an":[],"f":["u"],"f.E":"u"},"fg":{"aZ":[]},"fh":{"aZ":[]},"fi":{"aZ":[]},"fj":{"aZ":[]},"fk":{"aZ":[]},"fl":{"aZ":[]},"fm":{"aZ":[]},"dW":{"aZ":[]},"b_":{"aZ":[]},"cK":{"u":[],"B":[],"f":["m"],"z":["u"],"f.E":"m"},"cL":{"u":[],"B":[],"f":["m"],"z":["u"],"f.E":"m"},"cM":{"u":[],"B":[],"f":["m"],"z":["u"],"f.E":"m"},"cN":{"u":[],"B":[],"f":["m"],"z":["u"],"f.E":"m"},"cO":{"u":[],"B":[],"f":["m"],"z":["u"],"f.E":"m"},"cP":{"u":[],"B":[],"f":["m"],"z":["u"],"f.E":"m"},"id":{"z":["u"]},"cQ":{"u":[],"B":[],"f":["m"],"z":["u"],"f.E":"m"},"cR":{"u":[],"B":[],"f":["m"],"z":["u"],"f.E":"m"},"cS":{"u":[],"B":[],"f":["m"],"z":["u"],"f.E":"m"},"cT":{"u":[],"B":[],"f":["m"],"z":["u"],"f.E":"m"},"cU":{"u":[],"B":[],"f":["m"],"z":["u"],"f.E":"m"},"cV":{"u":[],"B":[],"f":["m"],"z":["u"],"f.E":"m"},"J":{"u":[],"B":[],"f":["m"],"z":["u"],"f.E":"m"},"i8":{"iv":[]},"rI":{"a4":[]},"nK":{"r":["e"],"A":["e"],"a4":[],"f":["e"]},"aL":{"r":["e"],"A":["e"],"a4":[],"f":["e"]},"u0":{"r":["e"],"A":["e"],"a4":[],"f":["e"]},"cA":{"r":["e"],"A":["e"],"a4":[],"f":["e"]},"lb":{"r":["e"],"A":["e"],"a4":[],"f":["e"]},"dO":{"r":["e"],"A":["e"],"a4":[],"f":["e"]},"bQ":{"r":["e"],"A":["e"],"a4":[],"f":["e"]},"eF":{"r":["k"],"A":["k"],"a4":[],"f":["k"]},"bs":{"r":["k"],"A":["k"],"a4":[],"f":["k"]},"u":{"B":[],"z":["u"],"f":["m"]}}'))
A.v8(v.typeUniverse,JSON.parse('{"e8":1,"aj":1,"fZ":1,"hp":2,"iu":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.a_
return{u:s("aO"),C:s("bC"),aO:s("et"),G:s("B"),V:s("ba<@>"),jS:s("cm"),W:s("A<@>"),Q:s("Y"),iW:s("ht"),oD:s("cp"),ho:s("hv"),pk:s("eF"),Z:s("cq"),Y:s("c_<ap,e>"),co:s("eK"),a6:s("hz"),lq:s("hA"),lJ:s("eL"),aw:s("hG"),P:s("bt"),r:s("aa"),mo:s("ax"),w:s("an"),iI:s("cy"),bC:s("cz"),m6:s("cA"),bW:s("dO"),id:s("f<k>"),e7:s("f<@>"),fm:s("f<e>"),an:s("t<hn>"),a_:s("t<hu>"),lv:s("t<eC>"),b:s("t<eJ>"),d:s("t<eK>"),g:s("t<ax>"),ns:s("t<c4>"),e:s("t<r<r<r<e>>>>"),o:s("t<r<r<e>>>"),hg:s("t<r<aL>>"),S:s("t<r<e>>"),aA:s("t<c8>"),fi:s("t<fr>"),mS:s("t<cW>"),na:s("t<bw>"),k9:s("t<iq>"),s:s("t<T>"),fZ:s("t<iC>"),h:s("t<aL>"),by:s("t<bR>"),ip:s("t<iI>"),J:s("t<fI>"),bf:s("t<fM>"),n0:s("t<iR>"),kv:s("t<ec>"),df:s("t<a3>"),n:s("t<k>"),dG:s("t<@>"),t:s("t<e>"),gU:s("t<i1?>"),dM:s("t<I?>"),mD:s("t<bQ?>"),f7:s("t<~()>"),A:s("t<~(ai)>"),iy:s("ao<@>"),v:s("f0"),m:s("X"),O:s("bI"),dX:s("aR<@>"),fg:s("c4"),p8:s("f4<T>"),mL:s("r<r<bR>>"),cf:s("r<cW>"),ac:s("r<fC>"),jz:s("r<bR>"),jt:s("r<fF>"),as:s("r<fG>"),f4:s("r<fH>"),bd:s("r<k>"),j:s("r<@>"),L:s("r<e>"),hQ:s("r<c1?>"),bi:s("r<aL?>"),a3:s("r<fT?>"),dW:s("r<e?>"),je:s("aS<T,T>"),f:s("aS<@,@>"),nu:s("aS<e,bC>"),l3:s("aS<e,r<e>>"),eb:s("dU"),gz:s("cH"),da:s("cI"),dQ:s("c7"),aj:s("aT"),dO:s("aj<@>"),mR:s("cJ"),hD:s("c8"),a:s("ab"),K:s("I"),mK:s("u"),dS:s("cW"),ok:s("im"),dw:s("ft"),mi:s("dZ"),fF:s("e_"),gH:s("cX"),k:s("e2"),lZ:s("yb"),aK:s("+()"),fb:s("+(dk,e)"),mO:s("+(dO,e)"),bk:s("+(b2,e)"),bM:s("+heic,image(a3,b2)"),aL:s("+(k,k)"),hI:s("+(b2,a3,e)"),cc:s("+(e,cn,bD)"),bD:s("+brush,colors,edges,stop,variation(a3,bD,cn,e,a3)"),B:s("b2"),l:s("cc"),N:s("T"),e8:s("iB"),aJ:s("O"),do:s("bO"),mC:s("bQ"),D:s("aL"),cx:s("e7"),e5:s("fC"),nC:s("bR"),f_:s("fF"),h2:s("fG"),ij:s("fH"),hh:s("iK"),cF:s("fJ<T>"),c:s("a5<@>"),nA:s("fT"),l_:s("ee"),y:s("a3"),nU:s("a3(I)"),gS:s("a3(T)"),i:s("k"),z:s("@"),mY:s("@()"),x:s("@(I)"),R:s("@(I,cc)"),p:s("e"),bL:s("aY?"),b3:s("jk?"),_:s("H?"),gK:s("aJ<ab>?"),bT:s("c0?"),er:s("c1?"),H:s("ax?"),jH:s("cA?"),mU:s("X?"),lH:s("r<@>?"),T:s("r<e>?"),iM:s("r<c1?>?"),gy:s("r<e?>?"),lG:s("aS<T,T>?"),eO:s("aS<@,@>?"),X:s("I?"),jv:s("T?"),in:s("d_?"),nh:s("aL?"),nX:s("fD?"),nk:s("iJ?"),b0:s("bT?"),F:s("d2<@,@>?"),nF:s("iT?"),fU:s("a3?"),jX:s("k?"),I:s("e?"),jh:s("m?"),bZ:s("~(e)?"),ec:s("~(e,a3)?"),U:s("m"),q:s("~"),M:s("~()"),E:s("~(c4,cA,e)"),kk:s("~(k,k,e)"),kX:s("~(e,a3)"),e0:s("~(e,e)"),jO:s("~(m,m,m,m)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.dl=J.hL.prototype
B.c=J.t.prototype
B.a=J.f_.prototype
B.b=J.dP.prototype
B.G=J.cB.prototype
B.dn=J.bI.prototype
B.dp=J.f1.prototype
B.P=A.cH.prototype
B.k=A.f6.prototype
B.Q=A.f7.prototype
B.l=A.cI.prototype
B.Z=A.f8.prototype
B.q=A.fa.prototype
B.n=A.fb.prototype
B.d=A.c8.prototype
B.c7=J.ie.prototype
B.aX=J.e7.prototype
B.a9=new A.hg(0,"direct")
B.ax=new A.hg(1,"alpha")
B.b_=new A.hh(0,"cluster")
B.cs=new A.hh(1,"superpixel")
B.b0=new A.al(0,"none")
B.ay=new A.al(3,"bitfields")
B.az=new A.al(6,"alphaBitfields")
B.R=new A.et(0,"littleEndian")
B.a_=new A.et(1,"bigEndian")
B.cE=new A.jc()
B.aA=new A.cm()
B.cF=new A.ey(A.a_("ey<0&>"))
B.b1=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.cG=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.cL=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.cH=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.cK=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.cJ=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.cI=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.b2=function(hooks) { return hooks; }

B.b3=new A.i5()
B.b4=new A.kf()
B.cM=new A.ia()
B.E=new A.kX()
B.cN=new A.iF()
B.cO=new A.iU()
B.B=new A.iV()
B.aa=new A.iX()
B.b5=new A.iY()
B.b6=new A.m7()
B.ab=new A.bq(0,"rgba")
B.ac=new A.bq(1,"bgra")
B.aB=new A.bq(2,"abgr")
B.ad=new A.bq(3,"argb")
B.b7=new A.bq(4,"rgb")
B.aC=new A.bq(5,"bgr")
B.cP=new A.bq(6,"grayAlpha")
B.cQ=new A.bq(7,"red")
B.b8=new A.jl(4,"luminance")
B.b9=new A.bD(2,"mode")
B.cU=new A.cn(0,"angular")
B.cW=new A.ez("HEIC photos open in Safari (iPhone, iPad and Mac). In other browsers, save the photo as a JPEG first.")
B.a0=new A.ez("Not built yet")
B.ba=new A.ez("No image open")
B.cX=new A.jy(3,2)
B.cY=new A.co(0,"red")
B.cZ=new A.co(1,"green")
B.d_=new A.co(2,"blue")
B.d0=new A.co(3,"alpha")
B.d1=new A.co(4,"other")
B.bb=new A.cp(1,"half")
B.bc=new A.cp(2,"float")
B.bd=new A.bb(0,"none")
B.da=new A.jI(2,"both")
B.v=new A.ap(0,"uint1")
B.y=new A.ap(1,"uint2")
B.F=new A.ap(10,"float32")
B.H=new A.ap(11,"float64")
B.z=new A.ap(2,"uint4")
B.f=new A.ap(3,"uint8")
B.o=new A.ap(4,"uint16")
B.I=new A.ap(5,"uint32")
B.M=new A.ap(6,"int8")
B.N=new A.ap(7,"int16")
B.O=new A.ap(8,"int32")
B.C=new A.ap(9,"float16")
B.be=new A.hx(1,"page")
B.i=new A.hx(2,"sequence")
B.ae=new A.hD(0,"none")
B.aD=new A.hD(1,"deflate")
B.bf=new A.dC(2,"cur")
B.e=new A.am(0,"none")
B.bg=new A.am(1,"byte")
B.bh=new A.am(10,"sRational")
B.bi=new A.am(11,"single")
B.bj=new A.am(12,"double")
B.bk=new A.am(13,"ifd")
B.m=new A.am(2,"ascii")
B.j=new A.am(3,"short")
B.r=new A.am(4,"long")
B.u=new A.am(5,"rational")
B.bl=new A.am(6,"sByte")
B.S=new A.am(7,"undefined")
B.bm=new A.am(8,"sShort")
B.bn=new A.am(9,"sLong")
B.dd=new A.bu(0,"jpeg")
B.de=new A.bu(1,"png")
B.df=new A.bu(2,"gif")
B.dg=new A.bu(3,"webp")
B.dh=new A.bu(4,"bmp")
B.di=new A.bu(5,"tiff")
B.aE=new A.bu(6,"heif")
B.dj=new A.bu(7,"unknown")
B.aF=new A.eT(0,"gzip")
B.a1=new A.eT(1,"zlib")
B.dk=new A.eT(2,"raw")
B.dm=new A.hW(0,"nearest")
B.l_=new A.hW(1,"linear")
B.dq=new A.ke(!1)
B.T=s([0,2,8],t.t)
B.dr=s([0,4,2,1],t.t)
B.db=new A.dC(0,"invalid")
B.dc=new A.dC(1,"ico")
B.dt=s([B.db,B.dc,B.bf],A.a_("t<dC>"))
B.aG=s([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],t.t)
B.bp=s([252,243,207,63],t.t)
B.dK=s([255,216,255],t.t)
B.jY=new A.dX(0,"none")
B.ca=new A.dX(1,"background")
B.cb=new A.dX(2,"previous")
B.bq=s([B.jY,B.ca,B.cb],A.a_("t<dX>"))
B.af=s([292,260,226,226],t.t)
B.dM=s([0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],t.t)
B.br=s([2,3,7],t.t)
B.ag=s([3226,6412,200,168,38,38,134,134,100,100,100,100,68,68,68,68],t.t)
B.dP=s([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],t.t)
B.dX=s([3,3,11],t.t)
B.aN=s([128,128,128,128,128,128,128,128,128,128,128],t.t)
B.bw=s([B.aN,B.aN,B.aN],t.S)
B.eI=s([253,136,254,255,228,219,128,128,128,128,128],t.t)
B.fD=s([189,129,242,255,227,213,255,219,128,128,128],t.t)
B.fI=s([106,126,227,252,214,209,255,255,128,128,128],t.t)
B.i3=s([B.eI,B.fD,B.fI],t.S)
B.i9=s([1,98,248,255,236,226,255,255,128,128,128],t.t)
B.e2=s([181,133,238,254,221,234,255,154,128,128,128],t.t)
B.e0=s([78,134,202,247,198,180,255,219,128,128,128],t.t)
B.iy=s([B.i9,B.e2,B.e0],t.S)
B.eD=s([1,185,249,255,243,255,128,128,128,128,128],t.t)
B.i7=s([184,150,247,255,236,224,128,128,128,128,128],t.t)
B.jk=s([77,110,216,255,236,230,128,128,128,128,128],t.t)
B.hA=s([B.eD,B.i7,B.jk],t.S)
B.hI=s([1,101,251,255,241,255,128,128,128,128,128],t.t)
B.eG=s([170,139,241,252,236,209,255,255,128,128,128],t.t)
B.hO=s([37,116,196,243,228,255,255,255,128,128,128],t.t)
B.eo=s([B.hI,B.eG,B.hO],t.S)
B.fU=s([1,204,254,255,245,255,128,128,128,128,128],t.t)
B.jz=s([207,160,250,255,238,128,128,128,128,128,128],t.t)
B.jy=s([102,103,231,255,211,171,128,128,128,128,128],t.t)
B.f4=s([B.fU,B.jz,B.jy],t.S)
B.eh=s([1,152,252,255,240,255,128,128,128,128,128],t.t)
B.jE=s([177,135,243,255,234,225,128,128,128,128,128],t.t)
B.hv=s([80,129,211,255,194,224,128,128,128,128,128],t.t)
B.i2=s([B.eh,B.jE,B.hv],t.S)
B.bz=s([1,1,255,128,128,128,128,128,128,128,128],t.t)
B.iq=s([246,1,255,128,128,128,128,128,128,128,128],t.t)
B.hg=s([255,128,128,128,128,128,128,128,128,128,128],t.t)
B.jO=s([B.bz,B.iq,B.hg],t.S)
B.eZ=s([B.bw,B.i3,B.iy,B.hA,B.eo,B.f4,B.i2,B.jO],t.o)
B.jm=s([198,35,237,223,193,187,162,160,145,155,62],t.t)
B.eH=s([131,45,198,221,172,176,220,157,252,221,1],t.t)
B.jl=s([68,47,146,208,149,167,221,162,255,223,128],t.t)
B.h2=s([B.jm,B.eH,B.jl],t.S)
B.iz=s([1,149,241,255,221,224,255,255,128,128,128],t.t)
B.iO=s([184,141,234,253,222,220,255,199,128,128,128],t.t)
B.hc=s([81,99,181,242,176,190,249,202,255,255,128],t.t)
B.j9=s([B.iz,B.iO,B.hc],t.S)
B.j0=s([1,129,232,253,214,197,242,196,255,255,128],t.t)
B.jw=s([99,121,210,250,201,198,255,202,128,128,128],t.t)
B.i4=s([23,91,163,242,170,187,247,210,255,255,128],t.t)
B.hi=s([B.j0,B.jw,B.i4],t.S)
B.fj=s([1,200,246,255,234,255,128,128,128,128,128],t.t)
B.iY=s([109,178,241,255,231,245,255,255,128,128,128],t.t)
B.dL=s([44,130,201,253,205,192,255,255,128,128,128],t.t)
B.jd=s([B.fj,B.iY,B.dL],t.S)
B.eb=s([1,132,239,251,219,209,255,165,128,128,128],t.t)
B.du=s([94,136,225,251,218,190,255,255,128,128,128],t.t)
B.j2=s([22,100,174,245,186,161,255,199,128,128,128],t.t)
B.hG=s([B.eb,B.du,B.j2],t.S)
B.iN=s([1,182,249,255,232,235,128,128,128,128,128],t.t)
B.hX=s([124,143,241,255,227,234,128,128,128,128,128],t.t)
B.fA=s([35,77,181,251,193,211,255,205,128,128,128],t.t)
B.fK=s([B.iN,B.hX,B.fA],t.S)
B.jP=s([1,157,247,255,236,231,255,255,128,128,128],t.t)
B.eY=s([121,141,235,255,225,227,255,255,128,128,128],t.t)
B.iZ=s([45,99,188,251,195,217,255,224,128,128,128],t.t)
B.en=s([B.jP,B.eY,B.iZ],t.S)
B.dv=s([1,1,251,255,213,255,128,128,128,128,128],t.t)
B.dR=s([203,1,248,255,255,128,128,128,128,128,128],t.t)
B.iP=s([137,1,177,255,224,255,128,128,128,128,128],t.t)
B.ei=s([B.dv,B.dR,B.iP],t.S)
B.iG=s([B.h2,B.j9,B.hi,B.jd,B.hG,B.fK,B.en,B.ei],t.o)
B.f8=s([253,9,248,251,207,208,255,192,128,128,128],t.t)
B.ir=s([175,13,224,243,193,185,249,198,255,255,128],t.t)
B.jN=s([73,17,171,221,161,179,236,167,255,234,128],t.t)
B.ii=s([B.f8,B.ir,B.jN],t.S)
B.iD=s([1,95,247,253,212,183,255,255,128,128,128],t.t)
B.ho=s([239,90,244,250,211,209,255,255,128,128,128],t.t)
B.jj=s([155,77,195,248,188,195,255,255,128,128,128],t.t)
B.iM=s([B.iD,B.ho,B.jj],t.S)
B.fW=s([1,24,239,251,218,219,255,205,128,128,128],t.t)
B.it=s([201,51,219,255,196,186,128,128,128,128,128],t.t)
B.hn=s([69,46,190,239,201,218,255,228,128,128,128],t.t)
B.iB=s([B.fW,B.it,B.hn],t.S)
B.fG=s([1,191,251,255,255,128,128,128,128,128,128],t.t)
B.hM=s([223,165,249,255,213,255,128,128,128,128,128],t.t)
B.i8=s([141,124,248,255,255,128,128,128,128,128,128],t.t)
B.j_=s([B.fG,B.hM,B.i8],t.S)
B.h4=s([1,16,248,255,255,128,128,128,128,128,128],t.t)
B.eW=s([190,36,230,255,236,255,128,128,128,128,128],t.t)
B.eJ=s([149,1,255,128,128,128,128,128,128,128,128],t.t)
B.ec=s([B.h4,B.eW,B.eJ],t.S)
B.i6=s([1,226,255,128,128,128,128,128,128,128,128],t.t)
B.il=s([247,192,255,128,128,128,128,128,128,128,128],t.t)
B.ji=s([240,128,255,128,128,128,128,128,128,128,128],t.t)
B.dT=s([B.i6,B.il,B.ji],t.S)
B.jc=s([1,134,252,255,255,128,128,128,128,128,128],t.t)
B.hW=s([213,62,250,255,255,128,128,128,128,128,128],t.t)
B.jC=s([55,93,255,128,128,128,128,128,128,128,128],t.t)
B.i5=s([B.jc,B.hW,B.jC],t.S)
B.ez=s([B.ii,B.iM,B.iB,B.j_,B.ec,B.dT,B.i5,B.bw],t.o)
B.hY=s([202,24,213,235,186,191,220,160,240,175,255],t.t)
B.eF=s([126,38,182,232,169,184,228,174,255,187,128],t.t)
B.ee=s([61,46,138,219,151,178,240,170,255,216,128],t.t)
B.iK=s([B.hY,B.eF,B.ee],t.S)
B.hu=s([1,112,230,250,199,191,247,159,255,255,128],t.t)
B.em=s([166,109,228,252,211,215,255,174,128,128,128],t.t)
B.hK=s([39,77,162,232,172,180,245,178,255,255,128],t.t)
B.iI=s([B.hu,B.em,B.hK],t.S)
B.hw=s([1,52,220,246,198,199,249,220,255,255,128],t.t)
B.f2=s([124,74,191,243,183,193,250,221,255,255,128],t.t)
B.fz=s([24,71,130,219,154,170,243,182,255,255,128],t.t)
B.iH=s([B.hw,B.f2,B.fz],t.S)
B.fx=s([1,182,225,249,219,240,255,224,128,128,128],t.t)
B.jB=s([149,150,226,252,216,205,255,171,128,128,128],t.t)
B.jT=s([28,108,170,242,183,194,254,223,255,255,128],t.t)
B.jt=s([B.fx,B.jB,B.jT],t.S)
B.jU=s([1,81,230,252,204,203,255,192,128,128,128],t.t)
B.iV=s([123,102,209,247,188,196,255,233,128,128,128],t.t)
B.jg=s([20,95,153,243,164,173,255,203,128,128,128],t.t)
B.iW=s([B.jU,B.iV,B.jg],t.S)
B.h9=s([1,222,248,255,216,213,128,128,128,128,128],t.t)
B.hV=s([168,175,246,252,235,205,255,255,128,128,128],t.t)
B.fC=s([47,116,215,255,211,212,255,255,128,128,128],t.t)
B.eR=s([B.h9,B.hV,B.fC],t.S)
B.h8=s([1,121,236,253,212,214,255,255,128,128,128],t.t)
B.hx=s([141,84,213,252,201,202,255,219,128,128,128],t.t)
B.ig=s([42,80,160,240,162,185,255,205,128,128,128],t.t)
B.fM=s([B.h8,B.hx,B.ig],t.S)
B.jI=s([244,1,255,128,128,128,128,128,128,128,128],t.t)
B.ds=s([238,1,255,128,128,128,128,128,128,128,128],t.t)
B.im=s([B.bz,B.jI,B.ds],t.S)
B.dI=s([B.iK,B.iI,B.iH,B.jt,B.iW,B.eR,B.fM,B.im],t.o)
B.ed=s([B.eZ,B.iG,B.ez,B.dI],t.e)
B.bt=s([511,1023,2047,4095],t.t)
B.bu=s([63,207,243,252],t.t)
B.ew=s([73,73,42,0],t.t)
B.ex=s([77,77,0,42],t.t)
B.eL=s([8,8,4,2],t.t)
B.dE=s([173,148,140],t.t)
B.dF=s([176,155,140,135],t.t)
B.dC=s([180,157,141,134,130],t.t)
B.dQ=s([254,254,243,230,196,177,153,140,133,130,129],t.t)
B.bv=s([B.dE,B.dF,B.dC,B.dQ],t.S)
B.eN=s([0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],t.t)
B.eT=s([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],t.t)
B.bx=s([0,1,3,7,15,31,63,127,255,511,1023,2047,4095],t.t)
B.ah=s([0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29],t.t)
B.U=s([0,1,1,2,4,8,1,1,2,4,8,4,8,4],t.t)
B.by=s([2954,2956,2958,2962,2970,2986,3018,3082,3212,3468,3980,5004],t.t)
B.bA=s([280,256,256,256,40],t.t)
B.cV=new A.cn(1,"organic")
B.bB=s([B.cU,B.cV],A.a_("t<cn>"))
B.ai=s([62,62,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,3225,588,588,588,588,588,588,588,588,1680,1680,20499,22547,24595,26643,1776,1776,1808,1808,-24557,-22509,-20461,-18413,1904,1904,1936,1936,-16365,-14317,782,782,782,782,814,814,814,814,-12269,-10221,10257,10257,12305,12305,14353,14353,16403,18451,1712,1712,1744,1744,28691,30739,-32749,-30701,-28653,-26605,2061,2061,2061,2061,2061,2061,2061,2061,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,424,750,750,750,750,1616,1616,1648,1648,1424,1424,1456,1456,1488,1488,1520,1520,1840,1840,1872,1872,1968,1968,8209,8209,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,1552,1552,1584,1584,2000,2000,2032,2032,976,976,1008,1008,1040,1040,1072,1072,1296,1296,1328,1328,718,718,718,718,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,456,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,326,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,358,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,490,4113,4113,6161,6161,848,848,880,880,912,912,944,944,622,622,622,622,654,654,654,654,1104,1104,1136,1136,1168,1168,1200,1200,1232,1232,1264,1264,686,686,686,686,1360,1360,1392,1392,12,12,12,12,12,12,12,12,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390,390],t.t)
B.aJ=s([4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],t.t)
B.bC=s([24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],t.t)
B.aK=s([4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],t.t)
B.aL=s([0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28],t.t)
B.d2=new A.cp(0,"uint")
B.bD=s([B.d2,B.bb,B.bc],A.a_("t<cp>"))
B.a2=s([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],t.t)
B.bE=s([254,253,251,247,239,223,191,127],t.t)
B.aj=s([12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8],t.t)
B.aM=s([A.xG(),A.xy(),A.xN(),A.xL(),A.xI(),A.xH(),A.xJ()],t.A)
B.bF=s([0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5],t.t)
B.aU=new A.af(0,"whiteIsZero")
B.kr=new A.af(1,"blackIsZero")
B.ky=new A.af(2,"rgb")
B.aW=new A.af(3,"palette")
B.kz=new A.af(4,"transparencyMask")
B.co=new A.af(5,"cmyk")
B.kA=new A.af(6,"yCbCr")
B.kB=new A.af(7,"reserved7")
B.kC=new A.af(8,"cieLab")
B.kD=new A.af(9,"iccLab")
B.ks=new A.af(10,"ituLab")
B.kt=new A.af(11,"logL")
B.ku=new A.af(12,"logLuv")
B.kv=new A.af(13,"colorFilterArray")
B.kw=new A.af(14,"linearRaw")
B.kx=new A.af(15,"depth")
B.aV=new A.af(16,"unknown")
B.bH=s([B.aU,B.kr,B.ky,B.aW,B.kz,B.co,B.kA,B.kB,B.kC,B.kD,B.ks,B.kt,B.ku,B.kv,B.kw,B.kx,B.aV],A.a_("t<af>"))
B.cR=new A.bD(0,"mean")
B.cS=new A.bD(1,"median")
B.cT=new A.bD(3,"chromaPreserving")
B.bJ=s([B.cR,B.cS,B.b9,B.cT],A.a_("t<bD>"))
B.c8=new A.fq(0,"source")
B.c9=new A.fq(1,"over")
B.bK=s([B.c8,B.c9],A.a_("t<fq>"))
B.kj=new A.cZ(0,"invalid")
B.cm=new A.cZ(1,"uint")
B.h=new A.cZ(2,"int")
B.a5=new A.cZ(3,"float")
B.bL=s([B.kj,B.cm,B.h,B.a5],A.a_("t<cZ>"))
B.bM=s([17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],t.t)
B.ak=s([-0.0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],t.t)
B.bN=s([B.e,B.bg,B.m,B.j,B.r,B.u,B.bl,B.S,B.bm,B.bn,B.bh,B.bi,B.bj,B.bk],A.a_("t<am>"))
B.bO=s([0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],t.t)
B.d3=new A.bb(1,"rle")
B.d4=new A.bb(2,"zips")
B.d5=new A.bb(3,"zip")
B.d6=new A.bb(4,"piz")
B.d7=new A.bb(5,"pxr24")
B.d8=new A.bb(6,"b44")
B.d9=new A.bb(7,"b44a")
B.bP=s([B.bd,B.d3,B.d4,B.d5,B.d6,B.d7,B.d8,B.d9],A.a_("t<bb>"))
B.ic=s([231,120,48,89,115,113,120,152,112],t.t)
B.dJ=s([152,179,64,126,170,118,46,70,95],t.t)
B.hm=s([175,69,143,80,85,82,72,155,103],t.t)
B.e5=s([56,58,10,171,218,189,17,13,152],t.t)
B.hJ=s([114,26,17,163,44,195,21,10,173],t.t)
B.hU=s([121,24,80,195,26,62,44,64,85],t.t)
B.hF=s([144,71,10,38,171,213,144,34,26],t.t)
B.j4=s([170,46,55,19,136,160,33,206,71],t.t)
B.fk=s([63,20,8,114,114,208,12,9,226],t.t)
B.fV=s([81,40,11,96,182,84,29,16,36],t.t)
B.dw=s([B.ic,B.dJ,B.hm,B.e5,B.hJ,B.hU,B.hF,B.j4,B.fk,B.fV],t.S)
B.eV=s([134,183,89,137,98,101,106,165,148],t.t)
B.iR=s([72,187,100,130,157,111,32,75,80],t.t)
B.i0=s([66,102,167,99,74,62,40,234,128],t.t)
B.dS=s([41,53,9,178,241,141,26,8,107],t.t)
B.fR=s([74,43,26,146,73,166,49,23,157],t.t)
B.fs=s([65,38,105,160,51,52,31,115,128],t.t)
B.fv=s([104,79,12,27,217,255,87,17,7],t.t)
B.hk=s([87,68,71,44,114,51,15,186,23],t.t)
B.iJ=s([47,41,14,110,182,183,21,17,194],t.t)
B.ip=s([66,45,25,102,197,189,23,18,22],t.t)
B.jh=s([B.eV,B.iR,B.i0,B.dS,B.fR,B.fs,B.fv,B.hk,B.iJ,B.ip],t.S)
B.ib=s([88,88,147,150,42,46,45,196,205],t.t)
B.hL=s([43,97,183,117,85,38,35,179,61],t.t)
B.fB=s([39,53,200,87,26,21,43,232,171],t.t)
B.hf=s([56,34,51,104,114,102,29,93,77],t.t)
B.hB=s([39,28,85,171,58,165,90,98,64],t.t)
B.fo=s([34,22,116,206,23,34,43,166,73],t.t)
B.dx=s([107,54,32,26,51,1,81,43,31],t.t)
B.j7=s([68,25,106,22,64,171,36,225,114],t.t)
B.eU=s([34,19,21,102,132,188,16,76,124],t.t)
B.jq=s([62,18,78,95,85,57,50,48,51],t.t)
B.f6=s([B.ib,B.hL,B.fB,B.hf,B.hB,B.fo,B.dx,B.j7,B.eU,B.jq],t.S)
B.hy=s([193,101,35,159,215,111,89,46,111],t.t)
B.ey=s([60,148,31,172,219,228,21,18,111],t.t)
B.ea=s([112,113,77,85,179,255,38,120,114],t.t)
B.jn=s([40,42,1,196,245,209,10,25,109],t.t)
B.h6=s([88,43,29,140,166,213,37,43,154],t.t)
B.fq=s([61,63,30,155,67,45,68,1,209],t.t)
B.fH=s([100,80,8,43,154,1,51,26,71],t.t)
B.dV=s([142,78,78,16,255,128,34,197,171],t.t)
B.ht=s([41,40,5,102,211,183,4,1,221],t.t)
B.fc=s([51,50,17,168,209,192,23,25,82],t.t)
B.f5=s([B.hy,B.ey,B.ea,B.jn,B.h6,B.fq,B.fH,B.dV,B.ht,B.fc],t.S)
B.fy=s([138,31,36,171,27,166,38,44,229],t.t)
B.f3=s([67,87,58,169,82,115,26,59,179],t.t)
B.ix=s([63,59,90,180,59,166,93,73,154],t.t)
B.je=s([40,40,21,116,143,209,34,39,175],t.t)
B.e_=s([47,15,16,183,34,223,49,45,183],t.t)
B.eE=s([46,17,33,183,6,98,15,32,183],t.t)
B.jV=s([57,46,22,24,128,1,54,17,37],t.t)
B.fJ=s([65,32,73,115,28,128,23,128,205],t.t)
B.i_=s([40,3,9,115,51,192,18,6,223],t.t)
B.fP=s([87,37,9,115,59,77,64,21,47],t.t)
B.hs=s([B.fy,B.f3,B.ix,B.je,B.e_,B.eE,B.jV,B.fJ,B.i_,B.fP],t.S)
B.jH=s([104,55,44,218,9,54,53,130,226],t.t)
B.el=s([64,90,70,205,40,41,23,26,57],t.t)
B.iw=s([54,57,112,184,5,41,38,166,213],t.t)
B.fp=s([30,34,26,133,152,116,10,32,134],t.t)
B.ij=s([39,19,53,221,26,114,32,73,255],t.t)
B.fa=s([31,9,65,234,2,15,1,118,73],t.t)
B.hr=s([75,32,12,51,192,255,160,43,51],t.t)
B.fr=s([88,31,35,67,102,85,55,186,85],t.t)
B.h_=s([56,21,23,111,59,205,45,37,192],t.t)
B.h0=s([55,38,70,124,73,102,1,34,98],t.t)
B.jL=s([B.jH,B.el,B.iw,B.fp,B.ij,B.fa,B.hr,B.fr,B.h_,B.h0],t.S)
B.fZ=s([125,98,42,88,104,85,117,175,82],t.t)
B.fu=s([95,84,53,89,128,100,113,101,45],t.t)
B.hP=s([75,79,123,47,51,128,81,171,1],t.t)
B.ej=s([57,17,5,71,102,57,53,41,49],t.t)
B.is=s([38,33,13,121,57,73,26,1,85],t.t)
B.jA=s([41,10,67,138,77,110,90,47,114],t.t)
B.hp=s([115,21,2,10,102,255,166,23,6],t.t)
B.eX=s([101,29,16,10,85,128,101,196,26],t.t)
B.fF=s([57,18,10,102,102,213,34,20,43],t.t)
B.h5=s([117,20,15,36,163,128,68,1,26],t.t)
B.hj=s([B.fZ,B.fu,B.hP,B.ej,B.is,B.jA,B.hp,B.eX,B.fF,B.h5],t.S)
B.fN=s([102,61,71,37,34,53,31,243,192],t.t)
B.jx=s([69,60,71,38,73,119,28,222,37],t.t)
B.fQ=s([68,45,128,34,1,47,11,245,171],t.t)
B.dB=s([62,17,19,70,146,85,55,62,70],t.t)
B.jR=s([37,43,37,154,100,163,85,160,1],t.t)
B.ju=s([63,9,92,136,28,64,32,201,85],t.t)
B.iU=s([75,15,9,9,64,255,184,119,16],t.t)
B.f1=s([86,6,28,5,64,255,25,248,1],t.t)
B.io=s([56,8,17,132,137,255,55,116,128],t.t)
B.ef=s([58,15,20,82,135,57,26,121,40],t.t)
B.hE=s([B.fN,B.jx,B.fQ,B.dB,B.jR,B.ju,B.iU,B.f1,B.io,B.ef],t.S)
B.hS=s([164,50,31,137,154,133,25,35,218],t.t)
B.f0=s([51,103,44,131,131,123,31,6,158],t.t)
B.js=s([86,40,64,135,148,224,45,183,128],t.t)
B.hl=s([22,26,17,131,240,154,14,1,209],t.t)
B.eB=s([45,16,21,91,64,222,7,1,197],t.t)
B.jf=s([56,21,39,155,60,138,23,102,213],t.t)
B.jK=s([83,12,13,54,192,255,68,47,28],t.t)
B.i1=s([85,26,85,85,128,128,32,146,171],t.t)
B.hh=s([18,11,7,63,144,171,4,4,246],t.t)
B.f7=s([35,27,10,146,174,171,12,26,128],t.t)
B.ha=s([B.hS,B.f0,B.js,B.hl,B.eB,B.jf,B.jK,B.i1,B.hh,B.f7],t.S)
B.iF=s([190,80,35,99,180,80,126,54,45],t.t)
B.j3=s([85,126,47,87,176,51,41,20,32],t.t)
B.iu=s([101,75,128,139,118,146,116,128,85],t.t)
B.iQ=s([56,41,15,176,236,85,37,9,62],t.t)
B.eg=s([71,30,17,119,118,255,17,18,138],t.t)
B.hD=s([101,38,60,138,55,70,43,26,142],t.t)
B.hd=s([146,36,19,30,171,255,97,27,20],t.t)
B.ia=s([138,45,61,62,219,1,81,188,64],t.t)
B.jo=s([32,41,20,117,151,142,20,21,163],t.t)
B.j5=s([112,19,12,61,195,128,48,4,24],t.t)
B.iA=s([B.iF,B.j3,B.iu,B.iQ,B.eg,B.hD,B.hd,B.ia,B.jo,B.j5],t.S)
B.bQ=s([B.dw,B.jh,B.f6,B.f5,B.hs,B.jL,B.hj,B.hE,B.ha,B.iA],t.o)
B.au=new A.aD(0,"none")
B.K=new A.aD(1,"palette")
B.cl=new A.aD(2,"rgb")
B.kd=new A.aD(3,"gray")
B.ke=new A.aD(4,"reserved4")
B.kf=new A.aD(5,"reserved5")
B.kg=new A.aD(6,"reserved6")
B.kh=new A.aD(7,"reserved7")
B.ki=new A.aD(8,"reserved8")
B.L=new A.aD(9,"paletteRle")
B.ck=new A.aD(10,"rgbRle")
B.kc=new A.aD(11,"grayRle")
B.bR=s([B.au,B.K,B.cl,B.kd,B.ke,B.kf,B.kg,B.kh,B.ki,B.L,B.ck,B.kc],A.a_("t<aD>"))
B.hN=s([0,1,1,1,0],t.t)
B.bS=s([A.xq(),A.xx(),A.xz(),A.xs(),A.xv(),A.xB(),A.xu(),A.xA(),A.xr(),A.xt()],t.A)
B.aI=s([8,0,8,0],t.t)
B.ek=s([5,3,5,3],t.t)
B.dY=s([3,5,3,5],t.t)
B.bo=s([0,8,0,8],t.t)
B.bs=s([4,4,4,4],t.t)
B.e9=s([4,4,0,0],t.t)
B.bT=s([B.aI,B.ek,B.dY,B.bo,B.aI,B.bs,B.e9,B.bo],t.S)
B.al=s([80,88,23,71,30,30,62,62,4,4,4,4,4,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41],t.t)
B.V=s([0,1,4,5,16,17,20,21,64,65,68,69,80,81,84,85,256,257,260,261,272,273,276,277,320,321,324,325,336,337,340,341,1024,1025,1028,1029,1040,1041,1044,1045,1088,1089,1092,1093,1104,1105,1108,1109,1280,1281,1284,1285,1296,1297,1300,1301,1344,1345,1348,1349,1360,1361,1364,1365,4096,4097,4100,4101,4112,4113,4116,4117,4160,4161,4164,4165,4176,4177,4180,4181,4352,4353,4356,4357,4368,4369,4372,4373,4416,4417,4420,4421,4432,4433,4436,4437,5120,5121,5124,5125,5136,5137,5140,5141,5184,5185,5188,5189,5200,5201,5204,5205,5376,5377,5380,5381,5392,5393,5396,5397,5440,5441,5444,5445,5456,5457,5460,5461,16384,16385,16388,16389,16400,16401,16404,16405,16448,16449,16452,16453,16464,16465,16468,16469,16640,16641,16644,16645,16656,16657,16660,16661,16704,16705,16708,16709,16720,16721,16724,16725,17408,17409,17412,17413,17424,17425,17428,17429,17472,17473,17476,17477,17488,17489,17492,17493,17664,17665,17668,17669,17680,17681,17684,17685,17728,17729,17732,17733,17744,17745,17748,17749,20480,20481,20484,20485,20496,20497,20500,20501,20544,20545,20548,20549,20560,20561,20564,20565,20736,20737,20740,20741,20752,20753,20756,20757,20800,20801,20804,20805,20816,20817,20820,20821,21504,21505,21508,21509,21520,21521,21524,21525,21568,21569,21572,21573,21584,21585,21588,21589,21760,21761,21764,21765,21776,21777,21780,21781,21824,21825,21828,21829,21840,21841,21844,21845],t.t)
B.bU=s([127,127,191,127,159,191,223,127,143,159,175,191,207,223,239,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,127,131,135,139,143,147,151,155,159,163,167,171,175,179,183,187,191,195,199,203,207,211,215,219,223,227,231,235,239,243,247,251,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199,201,203,205,207,209,211,213,215,217,219,221,223,225,227,229,231,233,235,237,239,241,243,245,247,249,251,253,127],t.t)
B.am=s([7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],t.t)
B.J=s([28679,28679,31752,-32759,-31735,-30711,-29687,-28663,29703,29703,30727,30727,-27639,-26615,-25591,-24567],t.t)
B.an=s([6430,6400,6400,6400,3225,3225,3225,3225,944,944,944,944,976,976,976,976,1456,1456,1456,1456,1488,1488,1488,1488,718,718,718,718,718,718,718,718,750,750,750,750,750,750,750,750,1520,1520,1520,1520,1552,1552,1552,1552,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,428,654,654,654,654,654,654,654,654,1072,1072,1072,1072,1104,1104,1104,1104,1136,1136,1136,1136,1168,1168,1168,1168,1200,1200,1200,1200,1232,1232,1232,1232,622,622,622,622,622,622,622,622,1008,1008,1008,1008,1040,1040,1040,1040,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,44,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,396,1712,1712,1712,1712,1744,1744,1744,1744,846,846,846,846,846,846,846,846,1264,1264,1264,1264,1296,1296,1296,1296,1328,1328,1328,1328,1360,1360,1360,1360,1392,1392,1392,1392,1424,1424,1424,1424,686,686,686,686,686,686,686,686,910,910,910,910,910,910,910,910,1968,1968,1968,1968,2000,2000,2000,2000,2032,2032,2032,2032,16,16,16,16,10257,10257,10257,10257,12305,12305,12305,12305,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,330,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,362,878,878,878,878,878,878,878,878,1904,1904,1904,1904,1936,1936,1936,1936,-18413,-18413,-16365,-16365,-14317,-14317,-10221,-10221,590,590,590,590,590,590,590,590,782,782,782,782,782,782,782,782,1584,1584,1584,1584,1616,1616,1616,1616,1648,1648,1648,1648,1680,1680,1680,1680,814,814,814,814,814,814,814,814,1776,1776,1776,1776,1808,1808,1808,1808,1840,1840,1840,1840,1872,1872,1872,1872,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,6157,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,-12275,14353,14353,14353,14353,16401,16401,16401,16401,22547,22547,24595,24595,20497,20497,20497,20497,18449,18449,18449,18449,26643,26643,28691,28691,30739,30739,-32749,-32749,-30701,-30701,-28653,-28653,-26605,-26605,-24557,-24557,-22509,-22509,-20461,-20461,8207,8207,8207,8207,8207,8207,8207,8207,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,72,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,104,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,4107,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,266,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,298,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,524,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,556,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,136,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,492,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,2059,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232,232],t.t)
B.ap=s([0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],t.t)
B.jZ=new A.c9(0,"none")
B.k_=new A.c9(1,"sub")
B.k0=new A.c9(2,"up")
B.k1=new A.c9(3,"average")
B.k2=new A.c9(4,"paeth")
B.aq=s([B.jZ,B.k_,B.k0,B.k1,B.k2],A.a_("t<c9>"))
B.A=s([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],t.t)
B.D=s([0,1,3,7,15,31,63,127,255],t.t)
B.ar=s([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],t.t)
B.w=s([255,255,255,255,255,255,255,255,255,255,255],t.t)
B.X=s([B.w,B.w,B.w],t.S)
B.he=s([176,246,255,255,255,255,255,255,255,255,255],t.t)
B.jD=s([223,241,252,255,255,255,255,255,255,255,255],t.t)
B.eQ=s([249,253,253,255,255,255,255,255,255,255,255],t.t)
B.hq=s([B.he,B.jD,B.eQ],t.S)
B.fX=s([255,244,252,255,255,255,255,255,255,255,255],t.t)
B.fL=s([234,254,254,255,255,255,255,255,255,255,255],t.t)
B.bY=s([253,255,255,255,255,255,255,255,255,255,255],t.t)
B.f_=s([B.fX,B.fL,B.bY],t.S)
B.jr=s([255,246,254,255,255,255,255,255,255,255,255],t.t)
B.ik=s([239,253,254,255,255,255,255,255,255,255,255],t.t)
B.bV=s([254,255,254,255,255,255,255,255,255,255,255],t.t)
B.iS=s([B.jr,B.ik,B.bV],t.S)
B.bG=s([255,248,254,255,255,255,255,255,255,255,255],t.t)
B.fg=s([251,255,254,255,255,255,255,255,255,255,255],t.t)
B.hT=s([B.bG,B.fg,B.w],t.S)
B.aH=s([255,253,254,255,255,255,255,255,255,255,255],t.t)
B.hR=s([251,254,254,255,255,255,255,255,255,255,255],t.t)
B.fn=s([B.aH,B.hR,B.bV],t.S)
B.e3=s([255,254,253,255,254,255,255,255,255,255,255],t.t)
B.fT=s([250,255,254,255,254,255,255,255,255,255,255],t.t)
B.ao=s([254,255,255,255,255,255,255,255,255,255,255],t.t)
B.h7=s([B.e3,B.fT,B.ao],t.S)
B.fE=s([B.X,B.hq,B.f_,B.iS,B.hT,B.fn,B.h7,B.X],t.o)
B.dH=s([217,255,255,255,255,255,255,255,255,255,255],t.t)
B.hb=s([225,252,241,253,255,255,254,255,255,255,255],t.t)
B.iv=s([234,250,241,250,253,255,253,254,255,255,255],t.t)
B.j6=s([B.dH,B.hb,B.iv],t.S)
B.aP=s([255,254,255,255,255,255,255,255,255,255,255],t.t)
B.eS=s([223,254,254,255,255,255,255,255,255,255,255],t.t)
B.eC=s([238,253,254,254,255,255,255,255,255,255,255],t.t)
B.ih=s([B.aP,B.eS,B.eC],t.S)
B.fO=s([249,254,255,255,255,255,255,255,255,255,255],t.t)
B.jp=s([B.bG,B.fO,B.w],t.S)
B.j8=s([255,253,255,255,255,255,255,255,255,255,255],t.t)
B.hQ=s([247,254,255,255,255,255,255,255,255,255,255],t.t)
B.hH=s([B.j8,B.hQ,B.w],t.S)
B.ev=s([252,255,255,255,255,255,255,255,255,255,255],t.t)
B.dU=s([B.aH,B.ev,B.w],t.S)
B.c_=s([255,254,254,255,255,255,255,255,255,255,255],t.t)
B.eA=s([B.c_,B.bY,B.w],t.S)
B.ie=s([255,254,253,255,255,255,255,255,255,255,255],t.t)
B.bI=s([250,255,255,255,255,255,255,255,255,255,255],t.t)
B.eu=s([B.ie,B.bI,B.ao],t.S)
B.e6=s([B.j6,B.ih,B.jp,B.hH,B.dU,B.eA,B.eu,B.X],t.o)
B.iC=s([186,251,250,255,255,255,255,255,255,255,255],t.t)
B.fd=s([234,251,244,254,255,255,255,255,255,255,255],t.t)
B.iT=s([251,251,243,253,254,255,254,255,255,255,255],t.t)
B.fl=s([B.iC,B.fd,B.iT],t.S)
B.fi=s([236,253,254,255,255,255,255,255,255,255,255],t.t)
B.id=s([251,253,253,254,254,255,255,255,255,255,255],t.t)
B.h1=s([B.aH,B.fi,B.id],t.S)
B.iE=s([254,254,254,255,255,255,255,255,255,255,255],t.t)
B.fe=s([B.c_,B.iE,B.w],t.S)
B.iX=s([254,254,255,255,255,255,255,255,255,255,255],t.t)
B.fh=s([B.aP,B.iX,B.ao],t.S)
B.c0=s([B.w,B.ao,B.w],t.S)
B.e4=s([B.fl,B.h1,B.fe,B.fh,B.c0,B.X,B.X,B.X],t.o)
B.fS=s([248,255,255,255,255,255,255,255,255,255,255],t.t)
B.ft=s([250,254,252,254,255,255,255,255,255,255,255],t.t)
B.fb=s([248,254,249,253,255,255,255,255,255,255,255],t.t)
B.h3=s([B.fS,B.ft,B.fb],t.S)
B.e1=s([255,253,253,255,255,255,255,255,255,255,255],t.t)
B.jb=s([246,253,253,255,255,255,255,255,255,255,255],t.t)
B.fm=s([252,254,251,254,254,255,255,255,255,255,255],t.t)
B.ja=s([B.e1,B.jb,B.fm],t.S)
B.jQ=s([255,254,252,255,255,255,255,255,255,255,255],t.t)
B.f9=s([248,254,253,255,255,255,255,255,255,255,255],t.t)
B.et=s([253,255,254,254,255,255,255,255,255,255,255],t.t)
B.hZ=s([B.jQ,B.f9,B.et],t.S)
B.jJ=s([255,251,254,255,255,255,255,255,255,255,255],t.t)
B.hz=s([245,251,254,255,255,255,255,255,255,255,255],t.t)
B.hC=s([253,253,254,255,255,255,255,255,255,255,255],t.t)
B.eM=s([B.jJ,B.hz,B.hC],t.S)
B.eO=s([255,251,253,255,255,255,255,255,255,255,255],t.t)
B.fY=s([252,253,254,255,255,255,255,255,255,255,255],t.t)
B.iL=s([B.eO,B.fY,B.aP],t.S)
B.ep=s([255,252,255,255,255,255,255,255,255,255,255],t.t)
B.jG=s([249,255,254,255,255,255,255,255,255,255,255],t.t)
B.fw=s([255,255,254,255,255,255,255,255,255,255,255],t.t)
B.dA=s([B.ep,B.jG,B.fw],t.S)
B.jS=s([255,255,253,255,255,255,255,255,255,255,255],t.t)
B.ff=s([B.jS,B.bI,B.w],t.S)
B.es=s([B.h3,B.ja,B.hZ,B.eM,B.iL,B.dA,B.ff,B.c0],t.o)
B.j1=s([B.fE,B.e6,B.e4,B.es],t.e)
B.ct=new A.al(1,"rle8")
B.cy=new A.al(2,"rle4")
B.cz=new A.al(4,"jpeg")
B.cA=new A.al(5,"png")
B.cB=new A.al(7,"reserved7")
B.cC=new A.al(8,"reserved8")
B.cD=new A.al(9,"reserved9")
B.cu=new A.al(10,"reserved10")
B.cv=new A.al(11,"cmyk")
B.cw=new A.al(12,"cmykRle8")
B.cx=new A.al(13,"cmykRle4")
B.as=s([B.b0,B.ct,B.cy,B.ay,B.cz,B.cA,B.az,B.cB,B.cC,B.cD,B.cu,B.cv,B.cw,B.cx],A.a_("t<al>"))
B.W=s([0,128,192,224,240,248,252,254,255],t.t)
B.aO=s([137,80,78,71,13,10,26,10],t.t)
B.a3=s([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215,33554431,67108863,134217727,268435455,536870911,1073741823,2147483647,4294967295],t.t)
B.bW=s([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],t.t)
B.bX=s([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],t.t)
B.cp=new A.d0(0,"predictor")
B.kT=new A.d0(1,"crossColor")
B.kU=new A.d0(2,"subtractGreen")
B.cq=new A.d0(3,"colorIndexing")
B.bZ=s([B.cp,B.kT,B.kU,B.cq],A.a_("t<d0>"))
B.x=s([0,17,34,51,68,85,102,119,136,153,170,187,204,221,238,255],t.t)
B.jv=s([73,67,67,95,80,82,79,70,73,76,69,0],t.t)
B.c1=s([A.xC(),A.xw(),A.xM(),A.xK(),A.xE(),A.xD(),A.xF()],t.A)
B.c2=s([0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],t.t)
B.c3=s([null,A.y1(),A.y2(),A.y0()],A.a_("t<~(e,e,e,e,e,aL)?>"))
B.at=s([0,36,72,109,145,182,218,255],t.t)
B.t=s([0,8,16,24,32,41,49,57,65,74,82,90,98,106,115,123,131,139,148,156,164,172,180,189,197,205,213,222,230,238,246,255],t.t)
B.jF=s([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8],t.t)
B.k5=new A.bh(0,"bitmap")
B.cf=new A.bh(1,"grayscale")
B.k6=new A.bh(2,"indexed")
B.cg=new A.bh(3,"rgb")
B.ch=new A.bh(4,"cmyk")
B.k7=new A.bh(5,"multiChannel")
B.k8=new A.bh(6,"duoTone")
B.ci=new A.bh(7,"lab")
B.c4=s([B.k5,B.cf,B.k6,B.cg,B.ch,B.k7,B.k8,B.ci],A.a_("t<bh>"))
B.jM=s([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],t.t)
B.dO=s([2,6,2,6],t.t)
B.eq=s([6,2,6,2],t.t)
B.dN=s([2,2,6,6],t.t)
B.dG=s([1,3,3,9],t.t)
B.e7=s([4,0,12,0],t.t)
B.dW=s([3,1,9,3],t.t)
B.eK=s([8,8,0,0],t.t)
B.e8=s([4,12,0,0],t.t)
B.dD=s([16,0,0,0],t.t)
B.dz=s([12,4,0,0],t.t)
B.er=s([6,6,2,2],t.t)
B.dZ=s([3,9,1,3],t.t)
B.dy=s([12,0,4,0],t.t)
B.eP=s([9,3,3,1],t.t)
B.p=s([B.bs,B.dO,B.aI,B.eq,B.dN,B.dG,B.e7,B.dW,B.eK,B.e8,B.dD,B.dz,B.er,B.dZ,B.dy,B.eP],t.S)
B.Y=s([0,-128,64,-64,32,-96,96,-32,16,-112,80,-48,48,-80,112,-16,8,-120,72,-56,40,-88,104,-24,24,-104,88,-40,56,-72,120,-8,4,-124,68,-60,36,-92,100,-28,20,-108,84,-44,52,-76,116,-12,12,-116,76,-52,44,-84,108,-20,28,-100,92,-36,60,-68,124,-4,2,-126,66,-62,34,-94,98,-30,18,-110,82,-46,50,-78,114,-14,10,-118,74,-54,42,-86,106,-22,26,-102,90,-38,58,-70,122,-6,6,-122,70,-58,38,-90,102,-26,22,-106,86,-42,54,-74,118,-10,14,-114,78,-50,46,-82,110,-18,30,-98,94,-34,62,-66,126,-2,1,-127,65,-63,33,-95,97,-31,17,-111,81,-47,49,-79,113,-15,9,-119,73,-55,41,-87,105,-23,25,-103,89,-39,57,-71,121,-7,5,-123,69,-59,37,-91,101,-27,21,-107,85,-43,53,-75,117,-11,13,-115,77,-51,45,-83,109,-19,29,-99,93,-35,61,-67,125,-3,3,-125,67,-61,35,-93,99,-29,19,-109,83,-45,51,-77,115,-13,11,-117,75,-53,43,-85,107,-21,27,-101,91,-37,59,-69,123,-5,7,-121,71,-57,39,-89,103,-25,23,-105,87,-41,55,-73,119,-9,15,-113,79,-49,47,-81,111,-17,31,-97,95,-33,63,-65,127,-1],t.t)
B.c5=new A.c_([34665,"exif",40965,"interop",34853,"gps"],A.a_("c_<e,T>"))
B.c6=new A.c_([B.v,1,B.y,3,B.z,15,B.f,255,B.o,65535,B.I,4294967295,B.M,127,B.N,32767,B.O,2147483647,B.C,1,B.F,1,B.H,1],t.Y)
B.jW=new A.c_([B.v,1,B.y,1,B.z,1,B.f,1,B.o,2,B.I,4,B.M,1,B.N,2,B.O,4,B.C,2,B.F,4,B.H,8],t.Y)
B.k3=new A.ig(0,"none")
B.k4=new A.ig(4,"paeth")
B.a4=new A.ca(0,"invalid")
B.cc=new A.ca(1,"pbm")
B.cd=new A.ca(2,"pgm2")
B.aQ=new A.ca(3,"pgm5")
B.ce=new A.ca(4,"ppm3")
B.aR=new A.ca(5,"ppm6")
B.cj=new A.K(0,1)
B.k9=new A.K(0,0.5)
B.aS=new A.K(-0.5,0.5)
B.jX={heic:0,heix:1,hevc:2,hevx:3,heim:4,heis:5,hevm:6,hevs:7,mif1:8,msf1:9}
B.ka=new A.ev(B.jX,10,A.a_("ev<T>"))
B.kb=new A.eH([B.C,B.F,B.H],A.a_("eH<ap>"))
B.aT=new A.b3(0,"bilevel")
B.kk=new A.b3(1,"gray4bit")
B.kl=new A.b3(2,"gray")
B.km=new A.b3(3,"grayAlpha")
B.kn=new A.b3(4,"palette")
B.cn=new A.b3(5,"rgb")
B.ko=new A.b3(6,"rgba")
B.kp=new A.b3(7,"yCbCrSub")
B.a6=new A.b3(8,"generic")
B.kq=new A.b3(9,"invalid")
B.kE=A.b6("y3")
B.kF=A.b6("rI")
B.kG=A.b6("eF")
B.kH=A.b6("bs")
B.kI=A.b6("cA")
B.kJ=A.b6("dO")
B.kK=A.b6("nK")
B.kL=A.b6("X")
B.kM=A.b6("I")
B.kN=A.b6("lb")
B.kO=A.b6("bQ")
B.kP=A.b6("u0")
B.kQ=A.b6("aL")
B.kR=new A.iG(!1)
B.kS=new A.iG(!0)
B.a7=new A.ea(0,"undefined")
B.aY=new A.ea(1,"lossy")
B.av=new A.ea(2,"lossless")
B.kV=new A.ea(3,"animated")
B.aw=new A.eb(0,"none")
B.kW=new A.eb(1,"partial")
B.kX=new A.eb(2,"full")
B.a8=new A.eb(3,"finish")
B.aZ=new A.ef(0,"header")
B.kY=new A.ef(1,"blocks")
B.kZ=new A.ef(2,"trailer")
B.cr=new A.ef(3,"done")})();(function staticFields(){$.lS=null
$.aW=A.i([],A.a_("t<I>"))
$.pH=null
$.kG=0
$.o0=A.vU()
$.p2=null
$.p1=null
$.qJ=null
$.qA=null
$.qO=null
$.n2=null
$.nf=null
$.oz=null
$.lU=A.i([],A.a_("t<r<I>?>"))
$.ei=null
$.h8=null
$.h9=null
$.oq=!1
$.Z=B.B
$.bY=A.q0()
$.on=null
$.pX=!1
$.uG=A.i([A.oG(),A.xO(),A.xT(),A.xU(),A.xV(),A.xW(),A.xX(),A.xY(),A.xZ(),A.y_(),A.xP(),A.xQ(),A.xR(),A.xS(),A.oG(),A.oG()],A.a_("t<e(e,bQ,e)>"))
$.L=null
$.pa=A.q0()})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"y5","qY",()=>A.n8("_$dart_dartClosure"))
s($,"y4","oH",()=>A.n8("_$dart_dartClosure_dartJSInterop"))
s($,"yU","ro",()=>A.i([new J.hX()],A.a_("t<fv>")))
s($,"ye","r1",()=>A.bP(A.la({
toString:function(){return"$receiver$"}})))
s($,"yf","r2",()=>A.bP(A.la({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"yg","r3",()=>A.bP(A.la(null)))
s($,"yh","r4",()=>A.bP(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"yk","r7",()=>A.bP(A.la(void 0)))
s($,"yl","r8",()=>A.bP(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"yj","r6",()=>A.bP(A.pT(null)))
s($,"yi","r5",()=>A.bP(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"yn","ra",()=>A.bP(A.pT(void 0)))
s($,"ym","r9",()=>A.bP(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"yu","oM",()=>A.uO())
s($,"yA","rh",()=>A.fc(4096))
s($,"yy","rf",()=>new A.m5().$0())
s($,"yz","rg",()=>new A.m4().$0())
s($,"yS","j7",()=>A.oC(B.kM))
s($,"yc","ep",()=>{A.tN()
return $.kG})
s($,"yx","re",()=>A.oh(B.aj,B.aG,257,286,15))
s($,"yw","rd",()=>A.oh(B.bF,B.a2,0,30,15))
s($,"yv","rc",()=>A.oh(null,B.dP,0,19,7))
s($,"y7","r_",()=>A.hB(B.jF))
s($,"y6","qZ",()=>A.hB(B.eT))
s($,"yR","rm",()=>A.vm())
s($,"z0","j8",()=>{var q,p=J.aQ(256,t.i)
for(q=0;q<256;++q)p[q]=A.bB(q/255)
return A.pz(p)})
s($,"yQ","oR",()=>{var q,p=J.aQ(255,t.i)
for(q=0;q<255;++q)p[q]=A.bB((q+0.5)/255)
return A.pz(p)})
s($,"yP","rl",()=>new A.md().$0())
s($,"yW","rq",()=>A.wC(1.0471975511965976))
s($,"yX","rr",()=>A.xk(1.0471975511965976))
s($,"yV","rp",()=>new A.mF().$0())
s($,"yY","rs",()=>new A.mG().$0())
s($,"z_","oS",()=>{var q=null,p="ISOSpeed"
return A.cE([11,A.j("ProcessingSoftware",B.m,q),254,A.j("SubfileType",B.r,1),255,A.j("OldSubfileType",B.r,1),256,A.j("ImageWidth",B.r,1),257,A.j("ImageLength",B.r,1),258,A.j("BitsPerSample",B.j,1),259,A.j("Compression",B.j,1),262,A.j("PhotometricInterpretation",B.j,1),263,A.j("Thresholding",B.j,1),264,A.j("CellWidth",B.j,1),265,A.j("CellLength",B.j,1),266,A.j("FillOrder",B.j,1),269,A.j("DocumentName",B.m,q),270,A.j("ImageDescription",B.m,q),271,A.j("Make",B.m,q),272,A.j("Model",B.m,q),273,A.j("StripOffsets",B.r,q),274,A.j("Orientation",B.j,1),277,A.j("SamplesPerPixel",B.j,1),278,A.j("RowsPerStrip",B.r,1),279,A.j("StripByteCounts",B.r,1),280,A.j("MinSampleValue",B.j,1),281,A.j("MaxSampleValue",B.j,1),282,A.j("XResolution",B.u,1),283,A.j("YResolution",B.u,1),284,A.j("PlanarConfiguration",B.j,1),285,A.j("PageName",B.m,q),286,A.j("XPosition",B.u,1),287,A.j("YPosition",B.u,1),290,A.j("GrayResponseUnit",B.j,1),291,A.j("GrayResponseCurve",B.e,q),292,A.j("T4Options",B.e,q),293,A.j("T6Options",B.e,q),296,A.j("ResolutionUnit",B.j,1),297,A.j("PageNumber",B.j,2),300,A.j("ColorResponseUnit",B.e,q),301,A.j("TransferFunction",B.j,768),305,A.j("Software",B.m,q),306,A.j("DateTime",B.m,q),315,A.j("Artist",B.m,q),316,A.j("HostComputer",B.m,q),317,A.j("Predictor",B.j,1),318,A.j("WhitePoint",B.u,2),319,A.j("PrimaryChromaticities",B.u,6),320,A.j("ColorMap",B.j,q),321,A.j("HalftoneHints",B.j,2),322,A.j("TileWidth",B.r,1),323,A.j("TileLength",B.r,1),324,A.j("TileOffsets",B.r,q),325,A.j("TileByteCounts",B.e,q),326,A.j("BadFaxLines",B.e,q),327,A.j("CleanFaxData",B.e,q),328,A.j("ConsecutiveBadFaxLines",B.e,q),332,A.j("InkSet",B.e,q),333,A.j("InkNames",B.e,q),334,A.j("NumberofInks",B.e,q),336,A.j("DotRange",B.e,q),337,A.j("TargetPrinter",B.m,q),338,A.j("ExtraSamples",B.e,q),339,A.j("SampleFormat",B.j,1),340,A.j("SMinSampleValue",B.e,q),341,A.j("SMaxSampleValue",B.e,q),342,A.j("TransferRange",B.e,q),343,A.j("ClipPath",B.e,q),512,A.j("JPEGProc",B.e,q),513,A.j("JPEGInterchangeFormat",B.e,q),514,A.j("JPEGInterchangeFormatLength",B.e,q),529,A.j("YCbCrCoefficients",B.u,3),530,A.j("YCbCrSubSampling",B.j,1),531,A.j("YCbCrPositioning",B.j,1),532,A.j("ReferenceBlackWhite",B.u,6),700,A.j("ApplicationNotes",B.j,1),18246,A.j("Rating",B.j,1),33421,A.j("CFARepeatPatternDim",B.e,q),33422,A.j("CFAPattern",B.e,q),33423,A.j("BatteryLevel",B.e,q),33432,A.j("Copyright",B.m,q),33434,A.j("ExposureTime",B.u,1),33437,A.j("FNumber",B.u,q),33723,A.j("IPTC-NAA",B.r,1),34665,A.j("ExifOffset",B.e,q),34675,A.j("InterColorProfile",B.e,q),34850,A.j("ExposureProgram",B.j,1),34852,A.j("SpectralSensitivity",B.m,q),34853,A.j("GPSOffset",B.e,q),34855,A.j(p,B.r,1),34856,A.j("OECF",B.e,q),34864,A.j("SensitivityType",B.j,1),34866,A.j("RecommendedExposureIndex",B.r,1),34867,A.j(p,B.r,1),36864,A.j("ExifVersion",B.S,q),36867,A.j("DateTimeOriginal",B.m,q),36868,A.j("DateTimeDigitized",B.m,q),36880,A.j("OffsetTime",B.m,q),36881,A.j("OffsetTimeOriginal",B.m,q),36882,A.j("OffsetTimeDigitized",B.m,q),37121,A.j("ComponentsConfiguration",B.S,q),37122,A.j("CompressedBitsPerPixel",B.e,q),37377,A.j("ShutterSpeedValue",B.e,q),37378,A.j("ApertureValue",B.e,q),37379,A.j("BrightnessValue",B.e,q),37380,A.j("ExposureBiasValue",B.e,q),37381,A.j("MaxApertureValue",B.e,q),37382,A.j("SubjectDistance",B.e,q),37383,A.j("MeteringMode",B.e,q),37384,A.j("LightSource",B.e,q),37385,A.j("Flash",B.e,q),37386,A.j("FocalLength",B.e,q),37396,A.j("SubjectArea",B.e,q),37500,A.j("MakerNote",B.S,q),37510,A.j("UserComment",B.S,q),37520,A.j("SubSecTime",B.e,q),37521,A.j("SubSecTimeOriginal",B.e,q),37522,A.j("SubSecTimeDigitized",B.e,q),40091,A.j("XPTitle",B.e,q),40092,A.j("XPComment",B.e,q),40093,A.j("XPAuthor",B.e,q),40094,A.j("XPKeywords",B.e,q),40095,A.j("XPSubject",B.e,q),40960,A.j("FlashPixVersion",B.e,q),40961,A.j("ColorSpace",B.j,1),40962,A.j("ExifImageWidth",B.j,1),40963,A.j("ExifImageLength",B.j,1),40964,A.j("RelatedSoundFile",B.e,q),40965,A.j("InteroperabilityOffset",B.e,q),41483,A.j("FlashEnergy",B.e,q),41484,A.j("SpatialFrequencyResponse",B.e,q),41486,A.j("FocalPlaneXResolution",B.e,q),41487,A.j("FocalPlaneYResolution",B.e,q),41488,A.j("FocalPlaneResolutionUnit",B.e,q),41492,A.j("SubjectLocation",B.e,q),41493,A.j("ExposureIndex",B.e,q),41495,A.j("SensingMethod",B.e,q),41728,A.j("FileSource",B.e,q),41729,A.j("SceneType",B.e,q),41730,A.j("CVAPattern",B.e,q),41985,A.j("CustomRendered",B.e,q),41986,A.j("ExposureMode",B.e,q),41987,A.j("WhiteBalance",B.e,q),41988,A.j("DigitalZoomRatio",B.e,q),41989,A.j("FocalLengthIn35mmFilm",B.e,q),41990,A.j("SceneCaptureType",B.e,q),41991,A.j("GainControl",B.e,q),41992,A.j("Contrast",B.e,q),41993,A.j("Saturation",B.e,q),41994,A.j("Sharpness",B.e,q),41995,A.j("DeviceSettingDescription",B.e,q),41996,A.j("SubjectDistanceRange",B.e,q),42016,A.j("ImageUniqueID",B.e,q),42032,A.j("CameraOwnerName",B.m,q),42033,A.j("BodySerialNumber",B.m,q),42034,A.j("LensSpecification",B.e,q),42035,A.j("LensMake",B.m,q),42036,A.j("LensModel",B.m,q),42037,A.j("LensSerialNumber",B.m,q),42240,A.j("Gamma",B.u,1),50341,A.j("PrintIM",B.e,q),59932,A.j("Padding",B.e,q),59933,A.j("OffsetSchema",B.e,q),65e3,A.j("OwnerName",B.m,q),65001,A.j("SerialNumber",B.m,q)],t.p,A.a_("hr"))})
s($,"yT","rn",()=>new A.hs(new WeakMap(),A.a_("hs<lb>")))
s($,"yO","oQ",()=>{var q,p=A.fc(768),o=J.aQ(256,t.p)
for(q=0;q<256;++q)o[q]=q
B.d.ap(p,256,512,o)
B.d.O(p,512,768,255)
return p})
s($,"y8","j6",()=>A.tD(A.i([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63],t.t)))
r($,"yo","oI",()=>A.fc(511))
r($,"yp","oJ",()=>A.fc(511))
r($,"yr","oK",()=>A.pA(2041))
r($,"ys","oL",()=>A.pA(225))
r($,"yq","nA",()=>A.fc(766))
s($,"yt","rb",()=>A.p5(0,0,0,0))
s($,"ya","r0",()=>A.pn(0,0,0))
s($,"yM","au",()=>A.fc(1))
s($,"yN","aH",()=>A.te(B.d.gt($.au()),0,null))
s($,"yF","at",()=>A.ty(1))
s($,"yG","aG",()=>J.rv(B.q.gt($.at()),0,null))
s($,"yH","S",()=>A.tA(1))
s($,"yJ","ac",()=>J.oU(B.n.gt($.S()),0,null))
s($,"yI","ck",()=>A.t3(B.n.gt($.S())))
s($,"yD","oO",()=>A.tv(1))
s($,"yE","rj",()=>A.pU(B.l.gt($.oO()),0))
s($,"yB","oN",()=>A.tr(1))
s($,"yC","ri",()=>A.pU(B.P.gt($.oN()),0))
s($,"yK","oP",()=>A.u_(1))
s($,"yL","rk",()=>{var q=$.oP()
return A.t4(q.gt(q))})})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.c6,ArrayBuffer:A.dU,ArrayBufferView:A.f9,DataView:A.i7,Float32Array:A.cH,Float64Array:A.f6,Int16Array:A.f7,Int32Array:A.cI,Int8Array:A.f8,Uint16Array:A.fa,Uint32Array:A.fb,Uint8ClampedArray:A.cJ,CanvasPixelArray:A.cJ,Uint8Array:A.c8})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aj.$nativeSuperclassTag="ArrayBufferView"
A.fP.$nativeSuperclassTag="ArrayBufferView"
A.fQ.$nativeSuperclassTag="ArrayBufferView"
A.c7.$nativeSuperclassTag="ArrayBufferView"
A.fR.$nativeSuperclassTag="ArrayBufferView"
A.fS.$nativeSuperclassTag="ArrayBufferView"
A.aT.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.x9
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()