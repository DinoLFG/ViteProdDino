import{e as ne}from"./events.1ce70653.js";import{c as O,a as ve}from"./index.cc4c33e3.js";const _e="PARSE_ERROR",be="INVALID_REQUEST",me="METHOD_NOT_FOUND",we="INVALID_PARAMS",oe="INTERNAL_ERROR",z="SERVER_ERROR",ge=[-32700,-32600,-32601,-32602,-32603],U={[_e]:{code:-32700,message:"Parse error"},[be]:{code:-32600,message:"Invalid Request"},[me]:{code:-32601,message:"Method not found"},[we]:{code:-32602,message:"Invalid params"},[oe]:{code:-32603,message:"Internal error"},[z]:{code:-32e3,message:"Server error"}},ie=z;function Ee(n){return ge.includes(n)}function Q(n){return Object.keys(U).includes(n)?U[n]:U[ie]}function Re(n){const r=Object.values(U).find(c=>c.code===n);return r||U[ie]}function Oe(n,r,c){return n.message.includes("getaddrinfo ENOTFOUND")||n.message.includes("connect ECONNREFUSED")?new Error(`Unavailable ${c} RPC url at ${r}`):n}var Ae={},se={exports:{}};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */(function(n){var r,c,y,_,h,b,g,L,M,P,R,F,S,v,j,x,N,H,J,C,I,q,V;(function(d){var D=typeof O=="object"?O:typeof self=="object"?self:typeof this=="object"?this:{};d(o(D,o(n.exports)));function o(i,s){return i!==D&&(typeof Object.create=="function"?Object.defineProperty(i,"__esModule",{value:!0}):i.__esModule=!0),function(u,e){return i[u]=s?s(u,e):e}}})(function(d){var D=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,i){o.__proto__=i}||function(o,i){for(var s in i)i.hasOwnProperty(s)&&(o[s]=i[s])};r=function(o,i){D(o,i);function s(){this.constructor=o}o.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)},c=Object.assign||function(o){for(var i,s=1,u=arguments.length;s<u;s++){i=arguments[s];for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&(o[e]=i[e])}return o},y=function(o,i){var s={};for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&i.indexOf(u)<0&&(s[u]=o[u]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,u=Object.getOwnPropertySymbols(o);e<u.length;e++)i.indexOf(u[e])<0&&Object.prototype.propertyIsEnumerable.call(o,u[e])&&(s[u[e]]=o[u[e]]);return s},_=function(o,i,s,u){var e=arguments.length,t=e<3?i:u===null?u=Object.getOwnPropertyDescriptor(i,s):u,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,i,s,u);else for(var l=o.length-1;l>=0;l--)(a=o[l])&&(t=(e<3?a(t):e>3?a(i,s,t):a(i,s))||t);return e>3&&t&&Object.defineProperty(i,s,t),t},h=function(o,i){return function(s,u){i(s,u,o)}},b=function(o,i){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,i)},g=function(o,i,s,u){function e(t){return t instanceof s?t:new s(function(a){a(t)})}return new(s||(s=Promise))(function(t,a){function l(w){try{f(u.next(w))}catch(E){a(E)}}function p(w){try{f(u.throw(w))}catch(E){a(E)}}function f(w){w.done?t(w.value):e(w.value).then(l,p)}f((u=u.apply(o,i||[])).next())})},L=function(o,i){var s={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},u,e,t,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(f){return function(w){return p([f,w])}}function p(f){if(u)throw new TypeError("Generator is already executing.");for(;s;)try{if(u=1,e&&(t=f[0]&2?e.return:f[0]?e.throw||((t=e.return)&&t.call(e),0):e.next)&&!(t=t.call(e,f[1])).done)return t;switch(e=0,t&&(f=[f[0]&2,t.value]),f[0]){case 0:case 1:t=f;break;case 4:return s.label++,{value:f[1],done:!1};case 5:s.label++,e=f[1],f=[0];continue;case 7:f=s.ops.pop(),s.trys.pop();continue;default:if(t=s.trys,!(t=t.length>0&&t[t.length-1])&&(f[0]===6||f[0]===2)){s=0;continue}if(f[0]===3&&(!t||f[1]>t[0]&&f[1]<t[3])){s.label=f[1];break}if(f[0]===6&&s.label<t[1]){s.label=t[1],t=f;break}if(t&&s.label<t[2]){s.label=t[2],s.ops.push(f);break}t[2]&&s.ops.pop(),s.trys.pop();continue}f=i.call(o,s)}catch(w){f=[6,w],e=0}finally{u=t=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}},V=function(o,i,s,u){u===void 0&&(u=s),o[u]=i[s]},M=function(o,i){for(var s in o)s!=="default"&&!i.hasOwnProperty(s)&&(i[s]=o[s])},P=function(o){var i=typeof Symbol=="function"&&Symbol.iterator,s=i&&o[i],u=0;if(s)return s.call(o);if(o&&typeof o.length=="number")return{next:function(){return o&&u>=o.length&&(o=void 0),{value:o&&o[u++],done:!o}}};throw new TypeError(i?"Object is not iterable.":"Symbol.iterator is not defined.")},R=function(o,i){var s=typeof Symbol=="function"&&o[Symbol.iterator];if(!s)return o;var u=s.call(o),e,t=[],a;try{for(;(i===void 0||i-- >0)&&!(e=u.next()).done;)t.push(e.value)}catch(l){a={error:l}}finally{try{e&&!e.done&&(s=u.return)&&s.call(u)}finally{if(a)throw a.error}}return t},F=function(){for(var o=[],i=0;i<arguments.length;i++)o=o.concat(R(arguments[i]));return o},S=function(){for(var o=0,i=0,s=arguments.length;i<s;i++)o+=arguments[i].length;for(var u=Array(o),e=0,i=0;i<s;i++)for(var t=arguments[i],a=0,l=t.length;a<l;a++,e++)u[e]=t[a];return u},v=function(o){return this instanceof v?(this.v=o,this):new v(o)},j=function(o,i,s){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var u=s.apply(o,i||[]),e,t=[];return e={},a("next"),a("throw"),a("return"),e[Symbol.asyncIterator]=function(){return this},e;function a(m){u[m]&&(e[m]=function(B){return new Promise(function(G,pe){t.push([m,B,G,pe])>1||l(m,B)})})}function l(m,B){try{p(u[m](B))}catch(G){E(t[0][3],G)}}function p(m){m.value instanceof v?Promise.resolve(m.value.v).then(f,w):E(t[0][2],m)}function f(m){l("next",m)}function w(m){l("throw",m)}function E(m,B){m(B),t.shift(),t.length&&l(t[0][0],t[0][1])}},x=function(o){var i,s;return i={},u("next"),u("throw",function(e){throw e}),u("return"),i[Symbol.iterator]=function(){return this},i;function u(e,t){i[e]=o[e]?function(a){return(s=!s)?{value:v(o[e](a)),done:e==="return"}:t?t(a):a}:t}},N=function(o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=o[Symbol.asyncIterator],s;return i?i.call(o):(o=typeof P=="function"?P(o):o[Symbol.iterator](),s={},u("next"),u("throw"),u("return"),s[Symbol.asyncIterator]=function(){return this},s);function u(t){s[t]=o[t]&&function(a){return new Promise(function(l,p){a=o[t](a),e(l,p,a.done,a.value)})}}function e(t,a,l,p){Promise.resolve(p).then(function(f){t({value:f,done:l})},a)}},H=function(o,i){return Object.defineProperty?Object.defineProperty(o,"raw",{value:i}):o.raw=i,o},J=function(o){if(o&&o.__esModule)return o;var i={};if(o!=null)for(var s in o)Object.hasOwnProperty.call(o,s)&&(i[s]=o[s]);return i.default=o,i},C=function(o){return o&&o.__esModule?o:{default:o}},I=function(o,i){if(!i.has(o))throw new TypeError("attempted to get private field on non-instance");return i.get(o)},q=function(o,i,s){if(!i.has(o))throw new TypeError("attempted to set private field on non-instance");return i.set(o,s),s},d("__extends",r),d("__assign",c),d("__rest",y),d("__decorate",_),d("__param",h),d("__metadata",b),d("__awaiter",g),d("__generator",L),d("__exportStar",M),d("__createBinding",V),d("__values",P),d("__read",R),d("__spread",F),d("__spreadArrays",S),d("__await",v),d("__asyncGenerator",j),d("__asyncDelegator",x),d("__asyncValues",N),d("__makeTemplateObject",H),d("__importStar",J),d("__importDefault",C),d("__classPrivateFieldGet",I),d("__classPrivateFieldSet",q)})})(se);var A={};Object.defineProperty(A,"__esModule",{value:!0});A.isBrowserCryptoAvailable=A.getSubtleCrypto=A.getBrowerCrypto=void 0;function k(){return(O===null||O===void 0?void 0:O.crypto)||(O===null||O===void 0?void 0:O.msCrypto)||{}}A.getBrowerCrypto=k;function ae(){const n=k();return n.subtle||n.webkitSubtle}A.getSubtleCrypto=ae;function Te(){return!!k()&&!!ae()}A.isBrowserCryptoAvailable=Te;var T={};Object.defineProperty(T,"__esModule",{value:!0});T.isBrowser=T.isNode=T.isReactNative=void 0;function ce(){return typeof document=="undefined"&&typeof navigator!="undefined"&&navigator.product==="ReactNative"}T.isReactNative=ce;function fe(){return typeof process!="undefined"&&typeof process.versions!="undefined"&&typeof process.versions.node!="undefined"}T.isNode=fe;function Pe(){return!ce()&&!fe()}T.isBrowser=Pe;(function(n){Object.defineProperty(n,"__esModule",{value:!0});const r=se.exports;r.__exportStar(A,n),r.__exportStar(T,n)})(Ae);function Se(){const n=Date.now()*Math.pow(10,3),r=Math.floor(Math.random()*Math.pow(10,3));return n+r}function je(n,r,c){return{id:c||Se(),jsonrpc:"2.0",method:n,params:r}}function Xe(n,r){return{id:n,jsonrpc:"2.0",result:r}}function De(n,r,c){return{id:n,jsonrpc:"2.0",error:Be(r,c)}}function Be(n,r){return typeof n=="undefined"?Q(oe):(typeof n=="string"&&(n=Object.assign(Object.assign({},Q(z)),{message:n})),typeof r!="undefined"&&(n.data=r),Ee(n.code)&&(n=Re(n.code)),n)}class ue{}class ze extends ue{constructor(r){super()}}class Fe extends ue{constructor(){super()}}class xe extends Fe{constructor(r){super()}}const Ce="^https?:",Ie="^wss?:";function Ue(n){const r=n.match(new RegExp(/^\w+:/,"gi"));if(!(!r||!r.length))return r[0]}function le(n,r){const c=Ue(n);return typeof c=="undefined"?!1:new RegExp(r).test(c)}function W(n){return le(n,Ce)}function ke(n){return le(n,Ie)}function Qe(n){return new RegExp("wss?://localhost(:d{2,5})?").test(n)}function he(n){return typeof n=="object"&&"id"in n&&"jsonrpc"in n&&n.jsonrpc==="2.0"}function We(n){return he(n)&&"method"in n}function Le(n){return he(n)&&(Me(n)||de(n))}function Me(n){return"result"in n}function de(n){return"error"in n}class Ke extends xe{constructor(r){super(r),this.events=new ne.exports.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(r),this.connection.connected&&this.registerEventListeners()}async connect(r=this.connection){await this.open(r)}async disconnect(){await this.close()}on(r,c){this.events.on(r,c)}once(r,c){this.events.once(r,c)}off(r,c){this.events.off(r,c)}removeListener(r,c){this.events.removeListener(r,c)}async request(r,c){return this.requestStrict(je(r.method,r.params||[]),c)}async requestStrict(r,c){return new Promise(async(y,_)=>{if(!this.connection.connected)try{await this.open()}catch(h){_(h)}this.events.on(`${r.id}`,h=>{de(h)?_(h.error):y(h.result)});try{await this.connection.send(r,c)}catch(h){_(h)}})}setConnection(r=this.connection){return r}onPayload(r){this.events.emit("payload",r),Le(r)?this.events.emit(`${r.id}`,r):this.events.emit("message",{type:r.method,data:r.params})}async open(r=this.connection){this.connection===r&&this.connection.connected||(this.connection.connected&&this.close(),typeof r=="string"&&(await this.connection.open(r),r=this.connection),this.connection=this.setConnection(r),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",r=>this.onPayload(r)),this.connection.on("close",()=>this.events.emit("disconnect")),this.connection.on("error",r=>this.events.emit("error",r)),this.hasRegisteredEventListeners=!0)}}var $={exports:{}};(function(n,r){var c=typeof self!="undefined"?self:O,y=function(){function h(){this.fetch=!1,this.DOMException=c.DOMException}return h.prototype=c,new h}();(function(h){(function(b){var g={searchParams:"URLSearchParams"in h,iterable:"Symbol"in h&&"iterator"in Symbol,blob:"FileReader"in h&&"Blob"in h&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in h,arrayBuffer:"ArrayBuffer"in h};function L(e){return e&&DataView.prototype.isPrototypeOf(e)}if(g.arrayBuffer)var M=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],P=ArrayBuffer.isView||function(e){return e&&M.indexOf(Object.prototype.toString.call(e))>-1};function R(e){if(typeof e!="string"&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function F(e){return typeof e!="string"&&(e=String(e)),e}function S(e){var t={next:function(){var a=e.shift();return{done:a===void 0,value:a}}};return g.iterable&&(t[Symbol.iterator]=function(){return t}),t}function v(e){this.map={},e instanceof v?e.forEach(function(t,a){this.append(a,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}v.prototype.append=function(e,t){e=R(e),t=F(t);var a=this.map[e];this.map[e]=a?a+", "+t:t},v.prototype.delete=function(e){delete this.map[R(e)]},v.prototype.get=function(e){return e=R(e),this.has(e)?this.map[e]:null},v.prototype.has=function(e){return this.map.hasOwnProperty(R(e))},v.prototype.set=function(e,t){this.map[R(e)]=F(t)},v.prototype.forEach=function(e,t){for(var a in this.map)this.map.hasOwnProperty(a)&&e.call(t,this.map[a],a,this)},v.prototype.keys=function(){var e=[];return this.forEach(function(t,a){e.push(a)}),S(e)},v.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),S(e)},v.prototype.entries=function(){var e=[];return this.forEach(function(t,a){e.push([a,t])}),S(e)},g.iterable&&(v.prototype[Symbol.iterator]=v.prototype.entries);function j(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function x(e){return new Promise(function(t,a){e.onload=function(){t(e.result)},e.onerror=function(){a(e.error)}})}function N(e){var t=new FileReader,a=x(t);return t.readAsArrayBuffer(e),a}function H(e){var t=new FileReader,a=x(t);return t.readAsText(e),a}function J(e){for(var t=new Uint8Array(e),a=new Array(t.length),l=0;l<t.length;l++)a[l]=String.fromCharCode(t[l]);return a.join("")}function C(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function I(){return this.bodyUsed=!1,this._initBody=function(e){this._bodyInit=e,e?typeof e=="string"?this._bodyText=e:g.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:g.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:g.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():g.arrayBuffer&&g.blob&&L(e)?(this._bodyArrayBuffer=C(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):g.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||P(e))?this._bodyArrayBuffer=C(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||(typeof e=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):g.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},g.blob&&(this.blob=function(){var e=j(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?j(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(N)}),this.text=function(){var e=j(this);if(e)return e;if(this._bodyBlob)return H(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(J(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},g.formData&&(this.formData=function(){return this.text().then(D)}),this.json=function(){return this.text().then(JSON.parse)},this}var q=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function V(e){var t=e.toUpperCase();return q.indexOf(t)>-1?t:e}function d(e,t){t=t||{};var a=t.body;if(e instanceof d){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new v(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,!a&&e._bodyInit!=null&&(a=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",(t.headers||!this.headers)&&(this.headers=new v(t.headers)),this.method=V(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&a)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(a)}d.prototype.clone=function(){return new d(this,{body:this._bodyInit})};function D(e){var t=new FormData;return e.trim().split("&").forEach(function(a){if(a){var l=a.split("="),p=l.shift().replace(/\+/g," "),f=l.join("=").replace(/\+/g," ");t.append(decodeURIComponent(p),decodeURIComponent(f))}}),t}function o(e){var t=new v,a=e.replace(/\r?\n[\t ]+/g," ");return a.split(/\r?\n/).forEach(function(l){var p=l.split(":"),f=p.shift().trim();if(f){var w=p.join(":").trim();t.append(f,w)}}),t}I.call(d.prototype);function i(e,t){t||(t={}),this.type="default",this.status=t.status===void 0?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new v(t.headers),this.url=t.url||"",this._initBody(e)}I.call(i.prototype),i.prototype.clone=function(){return new i(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new v(this.headers),url:this.url})},i.error=function(){var e=new i(null,{status:0,statusText:""});return e.type="error",e};var s=[301,302,303,307,308];i.redirect=function(e,t){if(s.indexOf(t)===-1)throw new RangeError("Invalid status code");return new i(null,{status:t,headers:{location:e}})},b.DOMException=h.DOMException;try{new b.DOMException}catch{b.DOMException=function(t,a){this.message=t,this.name=a;var l=Error(t);this.stack=l.stack},b.DOMException.prototype=Object.create(Error.prototype),b.DOMException.prototype.constructor=b.DOMException}function u(e,t){return new Promise(function(a,l){var p=new d(e,t);if(p.signal&&p.signal.aborted)return l(new b.DOMException("Aborted","AbortError"));var f=new XMLHttpRequest;function w(){f.abort()}f.onload=function(){var E={status:f.status,statusText:f.statusText,headers:o(f.getAllResponseHeaders()||"")};E.url="responseURL"in f?f.responseURL:E.headers.get("X-Request-URL");var m="response"in f?f.response:f.responseText;a(new i(m,E))},f.onerror=function(){l(new TypeError("Network request failed"))},f.ontimeout=function(){l(new TypeError("Network request failed"))},f.onabort=function(){l(new b.DOMException("Aborted","AbortError"))},f.open(p.method,p.url,!0),p.credentials==="include"?f.withCredentials=!0:p.credentials==="omit"&&(f.withCredentials=!1),"responseType"in f&&g.blob&&(f.responseType="blob"),p.headers.forEach(function(E,m){f.setRequestHeader(m,E)}),p.signal&&(p.signal.addEventListener("abort",w),f.onreadystatechange=function(){f.readyState===4&&p.signal.removeEventListener("abort",w)}),f.send(typeof p._bodyInit=="undefined"?null:p._bodyInit)})}return u.polyfill=!0,h.fetch||(h.fetch=u,h.Headers=v,h.Request=d,h.Response=i),b.Headers=v,b.Request=d,b.Response=i,b.fetch=u,Object.defineProperty(b,"__esModule",{value:!0}),b})({})})(y),y.fetch.ponyfill=!0,delete y.fetch.polyfill;var _=y;r=_.fetch,r.default=_.fetch,r.fetch=_.fetch,r.Headers=_.Headers,r.Request=_.Request,r.Response=_.Response,n.exports=r})($,$.exports);var K=ve($.exports);function Ne(n){if(typeof n!="string")throw new Error(`Cannot safe json parse value of type ${typeof n}`);try{return JSON.parse(n)}catch{return n}}function Y(n){return typeof n=="string"?n:JSON.stringify(n)}const He={Accept:"application/json","Content-Type":"application/json"},Je="POST",Z={headers:He,method:Je},ee=10;class Ye{constructor(r){if(this.url=r,this.events=new ne.exports.EventEmitter,this.isAvailable=!1,this.registering=!1,!W(r))throw new Error(`Provided URL is not compatible with HTTP connection: ${r}`);this.url=r}get connected(){return this.isAvailable}get connecting(){return this.registering}on(r,c){this.events.on(r,c)}once(r,c){this.events.once(r,c)}off(r,c){this.events.off(r,c)}removeListener(r,c){this.events.removeListener(r,c)}async open(r=this.url){await this.register(r)}async close(){if(!this.isAvailable)throw new Error("Connection already closed");this.onClose()}async send(r,c){this.isAvailable||await this.register();try{const y=Y(r),h=await(await K(this.url,Object.assign(Object.assign({},Z),{body:y}))).json();this.onPayload({data:h})}catch(y){this.onError(r.id,y)}}async register(r=this.url){if(!W(r))throw new Error(`Provided URL is not compatible with HTTP connection: ${r}`);if(this.registering){const c=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=c||this.events.listenerCount("open")>=c)&&this.events.setMaxListeners(c+1),new Promise((y,_)=>{this.events.once("register_error",h=>{this.resetMaxListeners(),_(h)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.isAvailable=="undefined")return _(new Error("HTTP connection is missing or invalid"));y()})})}this.url=r,this.registering=!0;try{const c=Y({id:1,jsonrpc:"2.0",method:"test",params:[]});await K(r,Object.assign(Object.assign({},Z),{body:c})),this.onOpen()}catch(c){const y=this.parseError(c);throw this.events.emit("register_error",y),this.onClose(),y}}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(r){if(typeof r.data=="undefined")return;const c=typeof r.data=="string"?Ne(r.data):r.data;this.events.emit("payload",c)}onError(r,c){const y=this.parseError(c),_=y.message||y.toString(),h=De(r,_);this.events.emit("payload",h)}parseError(r,c=this.url){return Oe(r,c,"HTTP")}resetMaxListeners(){this.events.getMaxListeners()>ee&&this.events.setMaxListeners(ee)}}var Ze=n=>encodeURIComponent(n).replace(/[!'()*]/g,r=>`%${r.charCodeAt(0).toString(16).toUpperCase()}`),ye="%[a-f0-9]{2}",te=new RegExp("("+ye+")|([^%]+?)","gi"),re=new RegExp("("+ye+")+","gi");function X(n,r){try{return[decodeURIComponent(n.join(""))]}catch{}if(n.length===1)return n;r=r||1;var c=n.slice(0,r),y=n.slice(r);return Array.prototype.concat.call([],X(c),X(y))}function qe(n){try{return decodeURIComponent(n)}catch{for(var r=n.match(te)||[],c=1;c<r.length;c++)n=X(r,c).join(""),r=n.match(te)||[];return n}}function Ve(n){for(var r={"%FE%FF":"\uFFFD\uFFFD","%FF%FE":"\uFFFD\uFFFD"},c=re.exec(n);c;){try{r[c[0]]=decodeURIComponent(c[0])}catch{var y=qe(c[0]);y!==c[0]&&(r[c[0]]=y)}c=re.exec(n)}r["%C2"]="\uFFFD";for(var _=Object.keys(r),h=0;h<_.length;h++){var b=_[h];n=n.replace(new RegExp(b,"g"),r[b])}return n}var et=function(n){if(typeof n!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof n+"`");try{return n=n.replace(/\+/g," "),decodeURIComponent(n)}catch{return Ve(n)}},tt=(n,r)=>{if(!(typeof n=="string"&&typeof r=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(r==="")return[n];const c=n.indexOf(r);return c===-1?[n]:[n.slice(0,c),n.slice(c+r.length)]};export{Ye as H,ze as I,Ke as J,Ze as a,Y as b,Ae as c,et as d,Qe as e,De as f,Ne as g,Oe as h,ke as i,We as j,Xe as k,Me as l,de as m,Le as n,je as o,Se as p,tt as s};
