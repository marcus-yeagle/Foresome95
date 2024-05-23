(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xf={exports:{}},ho={},Zf={exports:{}},fe={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Fc=Object.getOwnPropertySymbols,wv=Object.prototype.hasOwnProperty,bv=Object.prototype.propertyIsEnumerable;function Av(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function kv(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(i){return t[i]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(i){o[i]=i}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var ep=kv()?Object.assign:function(e,t){for(var n,r=Av(e),o,i=1;i<arguments.length;i++){n=Object(arguments[i]);for(var a in n)wv.call(n,a)&&(r[a]=n[a]);if(Fc){o=Fc(n);for(var l=0;l<o.length;l++)bv.call(n,o[l])&&(r[o[l]]=n[o[l]])}}return r};/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tu=ep,kt=typeof Symbol=="function"&&Symbol.for,mo=kt?Symbol.for("react.element"):60103,Sv=kt?Symbol.for("react.portal"):60106,Ev=kt?Symbol.for("react.fragment"):60107,Tv=kt?Symbol.for("react.strict_mode"):60108,Cv=kt?Symbol.for("react.profiler"):60114,$v=kt?Symbol.for("react.provider"):60109,Pv=kt?Symbol.for("react.context"):60110,Rv=kt?Symbol.for("react.forward_ref"):60112,Ov=kt?Symbol.for("react.suspense"):60113,Dv=kt?Symbol.for("react.memo"):60115,Iv=kt?Symbol.for("react.lazy"):60116,Mc=typeof Symbol=="function"&&Symbol.iterator;function vo(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},np={};function Ar(e,t,n){this.props=e,this.context=t,this.refs=np,this.updater=n||tp}Ar.prototype.isReactComponent={};Ar.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(vo(85));this.updater.enqueueSetState(this,e,t,"setState")};Ar.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function rp(){}rp.prototype=Ar.prototype;function nu(e,t,n){this.props=e,this.context=t,this.refs=np,this.updater=n||tp}var ru=nu.prototype=new rp;ru.constructor=nu;tu(ru,Ar.prototype);ru.isPureReactComponent=!0;var ou={current:null},op=Object.prototype.hasOwnProperty,ip={key:!0,ref:!0,__self:!0,__source:!0};function ap(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)op.call(t,r)&&!ip.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:mo,type:e,key:i,ref:a,props:o,_owner:ou.current}}function Nv(e,t){return{$$typeof:mo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function iu(e){return typeof e=="object"&&e!==null&&e.$$typeof===mo}function jv(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(n){return t[n]})}var lp=/\/+/g,pi=[];function sp(e,t,n,r){if(pi.length){var o=pi.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function up(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>pi.length&&pi.push(e)}function zl(e,t,n,r){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case mo:case Sv:i=!0}}if(i)return n(r,e,t===""?"."+al(e,0):t),1;if(i=0,t=t===""?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){o=e[a];var l=t+al(o,a);i+=zl(o,l,n,r)}else if(e===null||typeof e!="object"?l=null:(l=Mc&&e[Mc]||e["@@iterator"],l=typeof l=="function"?l:null),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=t+al(o,a++),i+=zl(o,l,n,r);else if(o==="object")throw n=""+e,Error(vo(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return i}function Ul(e,t,n){return e==null?0:zl(e,"",t,n)}function al(e,t){return typeof e=="object"&&e!==null&&e.key!=null?jv(e.key):t.toString(36)}function Lv(e,t){e.func.call(e.context,t,e.count++)}function _v(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?Hl(e,r,n,function(i){return i}):e!=null&&(iu(e)&&(e=Nv(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(lp,"$&/")+"/")+n)),r.push(e))}function Hl(e,t,n,r,o){var i="";n!=null&&(i=(""+n).replace(lp,"$&/")+"/"),t=sp(t,i,r,o),Ul(e,_v,t),up(t)}var cp={current:null};function Gt(){var e=cp.current;if(e===null)throw Error(vo(321));return e}var Fv={ReactCurrentDispatcher:cp,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:ou,IsSomeRendererActing:{current:!1},assign:tu};fe.Children={map:function(e,t,n){if(e==null)return e;var r=[];return Hl(e,r,null,t,n),r},forEach:function(e,t,n){if(e==null)return e;t=sp(null,null,t,n),Ul(e,Lv,t),up(t)},count:function(e){return Ul(e,function(){return null},null)},toArray:function(e){var t=[];return Hl(e,t,null,function(n){return n}),t},only:function(e){if(!iu(e))throw Error(vo(143));return e}};fe.Component=Ar;fe.Fragment=Ev;fe.Profiler=Cv;fe.PureComponent=nu;fe.StrictMode=Tv;fe.Suspense=Ov;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fv;fe.cloneElement=function(e,t,n){if(e==null)throw Error(vo(267,e));var r=tu({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=ou.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)op.call(t,s)&&!ip.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:mo,type:e.type,key:o,ref:i,props:r,_owner:a}};fe.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:Pv,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:$v,_context:e},e.Consumer=e};fe.createElement=ap;fe.createFactory=function(e){var t=ap.bind(null,e);return t.type=e,t};fe.createRef=function(){return{current:null}};fe.forwardRef=function(e){return{$$typeof:Rv,render:e}};fe.isValidElement=iu;fe.lazy=function(e){return{$$typeof:Iv,_ctor:e,_status:-1,_result:null}};fe.memo=function(e,t){return{$$typeof:Dv,type:e,compare:t===void 0?null:t}};fe.useCallback=function(e,t){return Gt().useCallback(e,t)};fe.useContext=function(e,t){return Gt().useContext(e,t)};fe.useDebugValue=function(){};fe.useEffect=function(e,t){return Gt().useEffect(e,t)};fe.useImperativeHandle=function(e,t,n){return Gt().useImperativeHandle(e,t,n)};fe.useLayoutEffect=function(e,t){return Gt().useLayoutEffect(e,t)};fe.useMemo=function(e,t){return Gt().useMemo(e,t)};fe.useReducer=function(e,t,n){return Gt().useReducer(e,t,n)};fe.useRef=function(e){return Gt().useRef(e)};fe.useState=function(e){return Gt().useState(e)};fe.version="16.14.0";Zf.exports=fe;var E=Zf.exports;const k=Fe(E);/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv=E,dp=60103;ho.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var Bc=Symbol.for;dp=Bc("react.element"),ho.Fragment=Bc("react.fragment")}var Bv=Mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zv=Object.prototype.hasOwnProperty,Uv={key:!0,ref:!0,__self:!0,__source:!0};function fp(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)zv.call(t,r)&&!Uv.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:dp,type:e,key:i,ref:a,props:o,_owner:Bv.current}}ho.jsx=fp;ho.jsxs=fp;Xf.exports=ho;var h=Xf.exports,pp={exports:{}},pt={},hp={exports:{}},mp={};/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){var t,n,r,o,i;if(typeof window>"u"||typeof MessageChannel!="function"){var a=null,l=null,s=function(){if(a!==null)try{var b=e.unstable_now();a(!0,b),a=null}catch(P){throw setTimeout(s,0),P}},u=Date.now();e.unstable_now=function(){return Date.now()-u},t=function(b){a!==null?setTimeout(t,0,b):(a=b,setTimeout(s,0))},n=function(b,P){l=setTimeout(b,P)},r=function(){clearTimeout(l)},o=function(){return!1},i=e.unstable_forceFrameRate=function(){}}else{var d=window.performance,c=window.Date,v=window.setTimeout,A=window.clearTimeout;if(typeof console<"u"){var g=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),typeof g!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if(typeof d=="object"&&typeof d.now=="function")e.unstable_now=function(){return d.now()};else{var w=c.now();e.unstable_now=function(){return c.now()-w}}var f=!1,p=null,m=-1,x=5,S=0;o=function(){return e.unstable_now()>=S},i=function(){},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):x=0<b?Math.floor(1e3/b):5};var T=new MessageChannel,$=T.port2;T.port1.onmessage=function(){if(p!==null){var b=e.unstable_now();S=b+x;try{p(!0,b)?$.postMessage(null):(f=!1,p=null)}catch(P){throw $.postMessage(null),P}}else f=!1},t=function(b){p=b,f||(f=!0,$.postMessage(null))},n=function(b,P){m=v(function(){b(e.unstable_now())},P)},r=function(){A(m),m=-1}}function O(b,P){var y=b.length;b.push(P);e:for(;;){var F=y-1>>>1,I=b[F];if(I!==void 0&&0<q(I,P))b[F]=P,b[y]=I,y=F;else break e}}function _(b){return b=b[0],b===void 0?null:b}function N(b){var P=b[0];if(P!==void 0){var y=b.pop();if(y!==P){b[0]=y;e:for(var F=0,I=b.length;F<I;){var L=2*(F+1)-1,H=b[L],K=L+1,G=b[K];if(H!==void 0&&0>q(H,y))G!==void 0&&0>q(G,H)?(b[F]=G,b[K]=y,F=K):(b[F]=H,b[L]=y,F=L);else if(G!==void 0&&0>q(G,y))b[F]=G,b[K]=y,F=K;else break e}}return P}return null}function q(b,P){var y=b.sortIndex-P.sortIndex;return y!==0?y:b.id-P.id}var J=[],X=[],ae=1,Y=null,V=3,se=!1,te=!1,U=!1;function z(b){for(var P=_(X);P!==null;){if(P.callback===null)N(X);else if(P.startTime<=b)N(X),P.sortIndex=P.expirationTime,O(J,P);else break;P=_(X)}}function B(b){if(U=!1,z(b),!te)if(_(J)!==null)te=!0,t(Q);else{var P=_(X);P!==null&&n(B,P.startTime-b)}}function Q(b,P){te=!1,U&&(U=!1,r()),se=!0;var y=V;try{for(z(P),Y=_(J);Y!==null&&(!(Y.expirationTime>P)||b&&!o());){var F=Y.callback;if(F!==null){Y.callback=null,V=Y.priorityLevel;var I=F(Y.expirationTime<=P);P=e.unstable_now(),typeof I=="function"?Y.callback=I:Y===_(J)&&N(J),z(P)}else N(J);Y=_(J)}if(Y!==null)var L=!0;else{var H=_(X);H!==null&&n(B,H.startTime-P),L=!1}return L}finally{Y=null,V=y,se=!1}}function D(b){switch(b){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var R=i;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){te||se||(te=!0,t(Q))},e.unstable_getCurrentPriorityLevel=function(){return V},e.unstable_getFirstCallbackNode=function(){return _(J)},e.unstable_next=function(b){switch(V){case 1:case 2:case 3:var P=3;break;default:P=V}var y=V;V=P;try{return b()}finally{V=y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=R,e.unstable_runWithPriority=function(b,P){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var y=V;V=b;try{return P()}finally{V=y}},e.unstable_scheduleCallback=function(b,P,y){var F=e.unstable_now();if(typeof y=="object"&&y!==null){var I=y.delay;I=typeof I=="number"&&0<I?F+I:F,y=typeof y.timeout=="number"?y.timeout:D(b)}else y=D(b),I=F;return y=I+y,b={id:ae++,callback:P,priorityLevel:b,startTime:I,expirationTime:y,sortIndex:-1},I>F?(b.sortIndex=I,O(X,b),_(J)===null&&b===_(X)&&(U?r():U=!0,n(B,I-F))):(b.sortIndex=y,O(J,b),te||se||(te=!0,t(Q))),b},e.unstable_shouldYield=function(){var b=e.unstable_now();z(b);var P=_(J);return P!==Y&&Y!==null&&P!==null&&P.callback!==null&&P.startTime<=b&&P.expirationTime<Y.expirationTime||o()},e.unstable_wrapCallback=function(b){var P=V;return function(){var y=V;V=P;try{return b.apply(this,arguments)}finally{V=y}}}})(mp);hp.exports=mp;var Hv=hp.exports;/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ji=E,Ue=ep,Le=Hv;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!Ji)throw Error(M(227));function Wv(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Ur=!1,hi=null,mi=!1,Wl=null,Vv={onError:function(e){Ur=!0,hi=e}};function Qv(e,t,n,r,o,i,a,l,s){Ur=!1,hi=null,Wv.apply(Vv,arguments)}function Gv(e,t,n,r,o,i,a,l,s){if(Qv.apply(this,arguments),Ur){if(Ur){var u=hi;Ur=!1,hi=null}else throw Error(M(198));mi||(mi=!0,Wl=u)}}var au=null,vp=null,gp=null;function zc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=gp(n),Gv(r,t,void 0,e),e.currentTarget=null}var vi=null,Kn={};function yp(){if(vi)for(var e in Kn){var t=Kn[e],n=vi.indexOf(e);if(!(-1<n))throw Error(M(96,e));if(!gi[n]){if(!t.extractEvents)throw Error(M(97,e));gi[n]=t,n=t.eventTypes;for(var r in n){var o=void 0,i=n[r],a=t,l=r;if(Vl.hasOwnProperty(l))throw Error(M(99,l));Vl[l]=i;var s=i.phasedRegistrationNames;if(s){for(o in s)s.hasOwnProperty(o)&&Uc(s[o],a,l);o=!0}else i.registrationName?(Uc(i.registrationName,a,l),o=!0):o=!1;if(!o)throw Error(M(98,r,e))}}}}function Uc(e,t,n){if(dr[e])throw Error(M(100,e));dr[e]=t,lu[e]=t.eventTypes[n].dependencies}var gi=[],Vl={},dr={},lu={};function xp(e){var t=!1,n;for(n in e)if(e.hasOwnProperty(n)){var r=e[n];if(!Kn.hasOwnProperty(n)||Kn[n]!==r){if(Kn[n])throw Error(M(102,n));Kn[n]=r,t=!0}}t&&yp()}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ql=null,rr=null,or=null;function Hc(e){if(e=vp(e)){if(typeof Ql!="function")throw Error(M(280));var t=e.stateNode;t&&(t=au(t),Ql(e.stateNode,e.type,t))}}function wp(e){rr?or?or.push(e):or=[e]:rr=e}function bp(){if(rr){var e=rr,t=or;if(or=rr=null,Hc(e),t)for(e=0;e<t.length;e++)Hc(t[e])}}function su(e,t){return e(t)}function Ap(e,t,n,r,o){return e(t,n,r,o)}function uu(){}var kp=su,Tn=!1,ll=!1;function cu(){(rr!==null||or!==null)&&(uu(),bp())}function Sp(e,t,n){if(ll)return e(t,n);ll=!0;try{return kp(e,t,n)}finally{ll=!1,cu()}}var Kv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wc=Object.prototype.hasOwnProperty,Vc={},Qc={};function qv(e){return Wc.call(Qc,e)?!0:Wc.call(Vc,e)?!1:Kv.test(e)?Qc[e]=!0:(Vc[e]=!0,!1)}function Jv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Yv(e,t,n,r){if(t===null||typeof t>"u"||Jv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function He(e,t,n,r,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_e[e]=new He(e,0,!1,e,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_e[t]=new He(t,1,!1,e[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new He(e,2,!1,e.toLowerCase(),null,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new He(e,2,!1,e,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_e[e]=new He(e,3,!1,e.toLowerCase(),null,!1)});["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new He(e,3,!0,e,null,!1)});["capture","download"].forEach(function(e){_e[e]=new He(e,4,!1,e,null,!1)});["cols","rows","size","span"].forEach(function(e){_e[e]=new He(e,6,!1,e,null,!1)});["rowSpan","start"].forEach(function(e){_e[e]=new He(e,5,!1,e.toLowerCase(),null,!1)});var du=/[\-:]([a-z])/g;function fu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(du,fu);_e[t]=new He(t,1,!1,e,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(du,fu);_e[t]=new He(t,1,!1,e,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(du,fu);_e[t]=new He(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new He(e,1,!1,e.toLowerCase(),null,!1)});_e.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(e){_e[e]=new He(e,1,!1,e.toLowerCase(),null,!0)});var xt=Ji.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;xt.hasOwnProperty("ReactCurrentDispatcher")||(xt.ReactCurrentDispatcher={current:null});xt.hasOwnProperty("ReactCurrentBatchConfig")||(xt.ReactCurrentBatchConfig={suspense:null});function pu(e,t,n,r){var o=_e.hasOwnProperty(t)?_e[t]:null,i=o!==null?o.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");i||(Yv(t,n,o,r)&&(n=null),r||o===null?qv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xv=/^(.*)[\\\/]/,Je=typeof Symbol=="function"&&Symbol.for,Do=Je?Symbol.for("react.element"):60103,qn=Je?Symbol.for("react.portal"):60106,En=Je?Symbol.for("react.fragment"):60107,Ep=Je?Symbol.for("react.strict_mode"):60108,qo=Je?Symbol.for("react.profiler"):60114,Tp=Je?Symbol.for("react.provider"):60109,Cp=Je?Symbol.for("react.context"):60110,Zv=Je?Symbol.for("react.concurrent_mode"):60111,hu=Je?Symbol.for("react.forward_ref"):60112,Jo=Je?Symbol.for("react.suspense"):60113,Gl=Je?Symbol.for("react.suspense_list"):60120,mu=Je?Symbol.for("react.memo"):60115,$p=Je?Symbol.for("react.lazy"):60116,Pp=Je?Symbol.for("react.block"):60121,Gc=typeof Symbol=="function"&&Symbol.iterator;function $r(e){return e===null||typeof e!="object"?null:(e=Gc&&e[Gc]||e["@@iterator"],typeof e=="function"?e:null)}function eg(e){if(e._status===-1){e._status=0;var t=e._ctor;t=t(),e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}}function Vt(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case En:return"Fragment";case qn:return"Portal";case qo:return"Profiler";case Ep:return"StrictMode";case Jo:return"Suspense";case Gl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cp:return"Context.Consumer";case Tp:return"Context.Provider";case hu:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case mu:return Vt(e.type);case Pp:return Vt(e.render);case $p:if(e=e._status===1?e._result:null)return Vt(e)}return null}function vu(e){var t="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n="";break e;default:var r=e._debugOwner,o=e._debugSource,i=Vt(e.type);n=null,r&&(n=Vt(r.type)),r=i,i="",o?i=" (at "+o.fileName.replace(Xv,"")+":"+o.lineNumber+")":n&&(i=" (created by "+n+")"),n=`
    in `+(r||"Unknown")+i}t+=n,e=e.return}while(e);return t}function pn(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Rp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function tg(e){var t=Rp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Io(e){e._valueTracker||(e._valueTracker=tg(e))}function Op(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Rp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Kl(e,t){var n=t.checked;return Ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Kc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Dp(e,t){t=t.checked,t!=null&&pu(e,"checked",t,!1)}function ql(e,t){Dp(e,t);var n=pn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Jl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Jl(e,t.type,pn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function qc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Jl(e,t,n){(t!=="number"||e.ownerDocument.activeElement!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function ng(e){var t="";return Ji.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function Yl(e,t){return e=Ue({children:void 0},t),(t=ng(t.children))&&(e.children=t),e}function ir(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Xl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return Ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Jc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pn(n)}}function Ip(e,t){var n=pn(t.value),r=pn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Yc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var Np={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function jp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var No,Lp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!==Np.svg||"innerHTML"in e)e.innerHTML=t;else{for(No=No||document.createElement("div"),No.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=No.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}function jo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jn={animationend:jo("Animation","AnimationEnd"),animationiteration:jo("Animation","AnimationIteration"),animationstart:jo("Animation","AnimationStart"),transitionend:jo("Transition","TransitionEnd")},sl={},_p={};xn&&(_p=document.createElement("div").style,"AnimationEvent"in window||(delete Jn.animationend.animation,delete Jn.animationiteration.animation,delete Jn.animationstart.animation),"TransitionEvent"in window||delete Jn.transitionend.transition);function Yi(e){if(sl[e])return sl[e];if(!Jn[e])return e;var t=Jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _p)return sl[e]=t[n];return e}var Fp=Yi("animationend"),Mp=Yi("animationiteration"),Bp=Yi("animationstart"),zp=Yi("transitionend"),Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xc=new(typeof WeakMap=="function"?WeakMap:Map);function gu(e){var t=Xc.get(e);return t===void 0&&(t=new Map,Xc.set(e,t)),t}function Vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.effectTag&1026&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Up(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zc(e){if(Vn(e)!==e)throw Error(M(188))}function rg(e){var t=e.alternate;if(!t){if(t=Vn(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Zc(o),e;if(i===r)return Zc(o),t;i=i.sibling}throw Error(M(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function Hp(e){if(e=rg(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function fr(e,t){if(t==null)throw Error(M(30));return e==null?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}function yu(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}var Pr=null;function og(e){if(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(t))for(var r=0;r<t.length&&!e.isPropagationStopped();r++)zc(e,t[r],n[r]);else t&&zc(e,t,n);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}function Xi(e){if(e!==null&&(Pr=fr(Pr,e)),e=Pr,Pr=null,e){if(yu(e,og),Pr)throw Error(M(95));if(mi)throw e=Wl,mi=!1,Wl=null,e}}function xu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}function Wp(e){if(!xn)return!1;e="on"+e;var t=e in document;return t||(t=document.createElement("div"),t.setAttribute(e,"return;"),t=typeof t[e]=="function"),t}var yi=[];function Vp(e){e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>yi.length&&yi.push(e)}function Qp(e,t,n,r){if(yi.length){var o=yi.pop();return o.topLevelType=e,o.eventSystemFlags=r,o.nativeEvent=t,o.targetInst=n,o}return{topLevelType:e,eventSystemFlags:r,nativeEvent:t,targetInst:n,ancestors:[]}}function Gp(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var r=n;if(r.tag===3)r=r.stateNode.containerInfo;else{for(;r.return;)r=r.return;r=r.tag!==3?null:r.stateNode.containerInfo}if(!r)break;t=n.tag,t!==5&&t!==6||e.ancestors.push(n),n=yo(r)}while(n);for(n=0;n<e.ancestors.length;n++){t=e.ancestors[n];var o=xu(e.nativeEvent);r=e.topLevelType;var i=e.nativeEvent,a=e.eventSystemFlags;n===0&&(a|=64);for(var l=null,s=0;s<gi.length;s++){var u=gi[s];u&&(u=u.extractEvents(r,t,i,o,a))&&(l=fr(l,u))}Xi(l)}}function es(e,t,n){if(!n.has(e)){switch(e){case"scroll":Mr(t,"scroll",!0);break;case"focus":case"blur":Mr(t,"focus",!0),Mr(t,"blur",!0),n.set("blur",null),n.set("focus",null);break;case"cancel":case"close":Wp(e)&&Mr(t,e,!0);break;case"invalid":case"submit":case"reset":break;default:Fr.indexOf(e)===-1&&xe(e,t)}n.set(e,null)}}var Kp,wu,qp,ts=!1,Tt=[],on=null,an=null,ln=null,Zr=new Map,eo=new Map,Rr=[],ns="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),ig="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");function ag(e,t){var n=gu(t);ns.forEach(function(r){es(r,t,n)}),ig.forEach(function(r){es(r,t,n)})}function rs(e,t,n,r,o){return{blockedOn:e,topLevelType:t,eventSystemFlags:n|32,nativeEvent:o,container:r}}function ed(e,t){switch(e){case"focus":case"blur":on=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":Zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(t.pointerId)}}function Or(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e=rs(t,n,r,o,i),t!==null&&(t=xo(t),t!==null&&wu(t)),e):(e.eventSystemFlags|=r,e)}function lg(e,t,n,r,o){switch(t){case"focus":return on=Or(on,e,t,n,r,o),!0;case"dragenter":return an=Or(an,e,t,n,r,o),!0;case"mouseover":return ln=Or(ln,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Zr.set(i,Or(Zr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,eo.set(i,Or(eo.get(i)||null,e,t,n,r,o)),!0}return!1}function sg(e){var t=yo(e.target);if(t!==null){var n=Vn(t);if(n!==null){if(t=n.tag,t===13){if(t=Up(n),t!==null){e.blockedOn=t,Le.unstable_runWithPriority(e.priority,function(){qp(n)});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yo(e){if(e.blockedOn!==null)return!1;var t=ku(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);if(t!==null){var n=xo(t);return n!==null&&wu(n),e.blockedOn=t,!1}return!0}function td(e,t,n){Yo(e)&&n.delete(t)}function ug(){for(ts=!1;0<Tt.length;){var e=Tt[0];if(e.blockedOn!==null){e=xo(e.blockedOn),e!==null&&Kp(e);break}var t=ku(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);t!==null?e.blockedOn=t:Tt.shift()}on!==null&&Yo(on)&&(on=null),an!==null&&Yo(an)&&(an=null),ln!==null&&Yo(ln)&&(ln=null),Zr.forEach(td),eo.forEach(td)}function Dr(e,t){e.blockedOn===t&&(e.blockedOn=null,ts||(ts=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,ug)))}function Jp(e){function t(o){return Dr(o,e)}if(0<Tt.length){Dr(Tt[0],e);for(var n=1;n<Tt.length;n++){var r=Tt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(on!==null&&Dr(on,e),an!==null&&Dr(an,e),ln!==null&&Dr(ln,e),Zr.forEach(t),eo.forEach(t),n=0;n<Rr.length;n++)r=Rr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rr.length&&(n=Rr[0],n.blockedOn===null);)sg(n),n.blockedOn===null&&Rr.shift()}var Yp={},Xp=new Map,bu=new Map,cg=["abort","abort",Fp,"animationEnd",Mp,"animationIteration",Bp,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",zp,"transitionEnd","waiting","waiting"];function Au(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],o=e[n+1],i="on"+(o[0].toUpperCase()+o.slice(1));i={phasedRegistrationNames:{bubbled:i,captured:i+"Capture"},dependencies:[r],eventPriority:t},bu.set(r,t),Xp.set(r,i),Yp[o]=i}}Au("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);Au("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Au(cg,2);for(var nd="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),ul=0;ul<nd.length;ul++)bu.set(nd[ul],0);var dg=Le.unstable_UserBlockingPriority,fg=Le.unstable_runWithPriority,Xo=!0;function xe(e,t){Mr(t,e,!1)}function Mr(e,t,n){var r=bu.get(t);switch(r===void 0?2:r){case 0:r=pg.bind(null,t,1,e);break;case 1:r=hg.bind(null,t,1,e);break;default:r=Zi.bind(null,t,1,e)}n?e.addEventListener(t,r,!0):e.addEventListener(t,r,!1)}function pg(e,t,n,r){Tn||uu();var o=Zi,i=Tn;Tn=!0;try{Ap(o,e,t,n,r)}finally{(Tn=i)||cu()}}function hg(e,t,n,r){fg(dg,Zi.bind(null,e,t,n,r))}function Zi(e,t,n,r){if(Xo)if(0<Tt.length&&-1<ns.indexOf(e))e=rs(null,e,t,n,r),Tt.push(e);else{var o=ku(e,t,n,r);if(o===null)ed(e,r);else if(-1<ns.indexOf(e))e=rs(o,e,t,n,r),Tt.push(e);else if(!lg(o,e,t,n,r)){ed(e,r),e=Qp(e,r,null,t);try{Sp(Gp,e)}finally{Vp(e)}}}}function ku(e,t,n,r){if(n=xu(r),n=yo(n),n!==null){var o=Vn(n);if(o===null)n=null;else{var i=o.tag;if(i===13){if(n=Up(o),n!==null)return n;n=null}else if(i===3){if(o.stateNode.hydrate)return o.tag===3?o.stateNode.containerInfo:null;n=null}else o!==n&&(n=null)}}e=Qp(e,r,n,t);try{Sp(Gp,e)}finally{Vp(e)}return null}var Hr={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mg=["Webkit","ms","Moz","O"];Object.keys(Hr).forEach(function(e){mg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Hr[t]=Hr[e]})});function Zp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Hr.hasOwnProperty(e)&&Hr[e]?(""+t).trim():t+"px"}function eh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Zp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var vg=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function os(e,t){if(t){if(vg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e,""));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62,""))}}function is(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rd=Np.html;function Mt(e,t){e=e.nodeType===9||e.nodeType===11?e:e.ownerDocument;var n=gu(e);t=lu[t];for(var r=0;r<t.length;r++)es(t[r],e,n)}function xi(){}function as(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function od(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function id(e,t){var n=od(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=od(n)}}function th(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?th(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ad(){for(var e=window,t=as();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=as(e.document)}return t}function ls(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var nh="$",rh="/$",Su="$?",Eu="$!",cl=null,dl=null;function oh(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function ss(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fl=typeof setTimeout=="function"?setTimeout:void 0,gg=typeof clearTimeout=="function"?clearTimeout:void 0;function ar(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function ld(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===nh||n===Eu||n===Su){if(t===0)return e;t--}else n===rh&&t++}e=e.previousSibling}return null}var Tu=Math.random().toString(36).slice(2),Xt="__reactInternalInstance$"+Tu,wi="__reactEventHandlers$"+Tu,go="__reactContainere$"+Tu;function yo(e){var t=e[Xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[go]||n[Xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ld(e);e!==null;){if(n=e[Xt])return n;e=ld(e)}return t}e=n,n=e.parentNode}return null}function xo(e){return e=e[Xt]||e[go],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function Cu(e){return e[wi]||null}function Bt(e){do e=e.return;while(e&&e.tag!==5);return e||null}function ih(e,t){var n=e.stateNode;if(!n)return null;var r=au(n);if(!r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}function sd(e,t,n){(t=ih(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=fr(n._dispatchListeners,t),n._dispatchInstances=fr(n._dispatchInstances,e))}function yg(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,n=[];t;)n.push(t),t=Bt(t);for(t=n.length;0<t--;)sd(n[t],"captured",e);for(t=0;t<n.length;t++)sd(n[t],"bubbled",e)}}function us(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=ih(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=fr(n._dispatchListeners,t),n._dispatchInstances=fr(n._dispatchInstances,e))}function xg(e){e&&e.dispatchConfig.registrationName&&us(e._targetInst,null,e)}function pr(e){yu(e,yg)}var Zt=null,$u=null,Zo=null;function ah(){if(Zo)return Zo;var e,t=$u,n=t.length,r,o="value"in Zt?Zt.value:Zt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Zo=o.slice(e,1<r?1-r:void 0)}function ei(){return!0}function bi(){return!1}function nt(e,t,n,r){this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface;for(var o in e)e.hasOwnProperty(o)&&((t=e[o])?this[o]=t(n):o==="target"?this.target=r:this[o]=n[o]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?ei:bi,this.isPropagationStopped=bi,this}Ue(nt.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=ei)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=ei)},persist:function(){this.isPersistent=ei},isPersistent:bi,destructor:function(){var e=this.constructor.Interface,t;for(t in e)this[t]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=bi,this._dispatchInstances=this._dispatchListeners=null}});nt.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};nt.extend=function(e){function t(){}function n(){return r.apply(this,arguments)}var r=this;t.prototype=r.prototype;var o=new t;return Ue(o,n.prototype),n.prototype=o,n.prototype.constructor=n,n.Interface=Ue({},r.Interface,e),n.extend=r.extend,lh(n),n};lh(nt);function wg(e,t,n,r){if(this.eventPool.length){var o=this.eventPool.pop();return this.call(o,e,t,n,r),o}return new this(e,t,n,r)}function bg(e){if(!(e instanceof this))throw Error(M(279));e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function lh(e){e.eventPool=[],e.getPooled=wg,e.release=bg}var Ag=nt.extend({data:null}),kg=nt.extend({data:null}),Sg=[9,13,27,32],Pu=xn&&"CompositionEvent"in window,Wr=null;xn&&"documentMode"in document&&(Wr=document.documentMode);var Eg=xn&&"TextEvent"in window&&!Wr,sh=xn&&(!Pu||Wr&&8<Wr&&11>=Wr),ud=" ",_t={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},cd=!1;function uh(e,t){switch(e){case"keyup":return Sg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function ch(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function Tg(e,t){switch(e){case"compositionend":return ch(t);case"keypress":return t.which!==32?null:(cd=!0,ud);case"textInput":return e=t.data,e===ud&&cd?null:e;default:return null}}function Cg(e,t){if(Yn)return e==="compositionend"||!Pu&&uh(e,t)?(e=ah(),Zo=$u=Zt=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sh&&t.locale!=="ko"?null:t.data;default:return null}}var $g={eventTypes:_t,extractEvents:function(e,t,n,r){var o;if(Pu)e:{switch(e){case"compositionstart":var i=_t.compositionStart;break e;case"compositionend":i=_t.compositionEnd;break e;case"compositionupdate":i=_t.compositionUpdate;break e}i=void 0}else Yn?uh(e,n)&&(i=_t.compositionEnd):e==="keydown"&&n.keyCode===229&&(i=_t.compositionStart);return i?(sh&&n.locale!=="ko"&&(Yn||i!==_t.compositionStart?i===_t.compositionEnd&&Yn&&(o=ah()):(Zt=r,$u="value"in Zt?Zt.value:Zt.textContent,Yn=!0)),i=Ag.getPooled(i,t,n,r),o?i.data=o:(o=ch(n),o!==null&&(i.data=o)),pr(i),o=i):o=null,(e=Eg?Tg(e,n):Cg(e,n))?(t=kg.getPooled(_t.beforeInput,t,n,r),t.data=e,pr(t)):t=null,o===null?t:t===null?o:[o,t]}},Pg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pg[e.type]:t==="textarea"}var fh={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function ph(e,t,n){return e=nt.getPooled(fh.change,e,t,n),e.type="change",wp(n),pr(e),e}var Vr=null,to=null;function Rg(e){Xi(e)}function ea(e){var t=Fn(e);if(Op(t))return e}function Og(e,t){if(e==="change")return t}var cs=!1;xn&&(cs=Wp("input")&&(!document.documentMode||9<document.documentMode));function dd(){Vr&&(Vr.detachEvent("onpropertychange",hh),to=Vr=null)}function hh(e){if(e.propertyName==="value"&&ea(to))if(e=ph(to,e,xu(e)),Tn)Xi(e);else{Tn=!0;try{su(Rg,e)}finally{Tn=!1,cu()}}}function Dg(e,t,n){e==="focus"?(dd(),Vr=t,to=n,Vr.attachEvent("onpropertychange",hh)):e==="blur"&&dd()}function Ig(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ea(to)}function Ng(e,t){if(e==="click")return ea(t)}function jg(e,t){if(e==="input"||e==="change")return ea(t)}var Lg={eventTypes:fh,_isInputEventSupported:cs,extractEvents:function(e,t,n,r){var o=t?Fn(t):window,i=o.nodeName&&o.nodeName.toLowerCase();if(i==="select"||i==="input"&&o.type==="file")var a=Og;else if(dh(o))if(cs)a=jg;else{a=Ig;var l=Dg}else(i=o.nodeName)&&i.toLowerCase()==="input"&&(o.type==="checkbox"||o.type==="radio")&&(a=Ng);if(a&&(a=a(e,t)))return ph(a,n,r);l&&l(e,o,t),e==="blur"&&(e=o._wrapperState)&&e.controlled&&o.type==="number"&&Jl(o,"number",o.value)}},wo=nt.extend({view:null,detail:null}),_g={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_g[e])?!!t[e]:!1}function Ru(){return Fg}var fd=0,pd=0,hd=!1,md=!1,bo=wo.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Ru,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var t=fd;return fd=e.screenX,hd?e.type==="mousemove"?e.screenX-t:0:(hd=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var t=pd;return pd=e.screenY,md?e.type==="mousemove"?e.screenY-t:0:(md=!0,0)}}),mh=bo.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Ir={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},Mg={eventTypes:Ir,extractEvents:function(e,t,n,r,o){var i=e==="mouseover"||e==="pointerover",a=e==="mouseout"||e==="pointerout";if(i&&!(o&32)&&(n.relatedTarget||n.fromElement)||!a&&!i)return null;if(i=r.window===r?r:(i=r.ownerDocument)?i.defaultView||i.parentWindow:window,a){if(a=t,t=(t=n.relatedTarget||n.toElement)?yo(t):null,t!==null){var l=Vn(t);(t!==l||t.tag!==5&&t.tag!==6)&&(t=null)}}else a=null;if(a===t)return null;if(e==="mouseout"||e==="mouseover")var s=bo,u=Ir.mouseLeave,d=Ir.mouseEnter,c="mouse";else(e==="pointerout"||e==="pointerover")&&(s=mh,u=Ir.pointerLeave,d=Ir.pointerEnter,c="pointer");if(e=a==null?i:Fn(a),i=t==null?i:Fn(t),u=s.getPooled(u,a,n,r),u.type=c+"leave",u.target=e,u.relatedTarget=i,n=s.getPooled(d,t,n,r),n.type=c+"enter",n.target=i,n.relatedTarget=e,r=a,c=t,r&&c)e:{for(s=r,d=c,a=0,e=s;e;e=Bt(e))a++;for(e=0,t=d;t;t=Bt(t))e++;for(;0<a-e;)s=Bt(s),a--;for(;0<e-a;)d=Bt(d),e--;for(;a--;){if(s===d||s===d.alternate)break e;s=Bt(s),d=Bt(d)}s=null}else s=null;for(d=s,s=[];r&&r!==d&&(a=r.alternate,!(a!==null&&a===d));)s.push(r),r=Bt(r);for(r=[];c&&c!==d&&(a=c.alternate,!(a!==null&&a===d));)r.push(c),c=Bt(c);for(c=0;c<s.length;c++)us(s[c],"bubbled",u);for(c=r.length;0<c--;)us(r[c],"captured",n);return o&64?[u,n]:[u]}};function Bg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mn=typeof Object.is=="function"?Object.is:Bg,zg=Object.prototype.hasOwnProperty;function no(e,t){if(Mn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!zg.call(t,n[r])||!Mn(e[n[r]],t[n[r]]))return!1;return!0}var Ug=xn&&"documentMode"in document&&11>=document.documentMode,vh={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Xn=null,ds=null,Qr=null,fs=!1;function vd(e,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;return fs||Xn==null||Xn!==as(n)?null:(n=Xn,"selectionStart"in n&&ls(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Qr&&no(Qr,n)?null:(Qr=n,e=nt.getPooled(vh.select,ds,e,t),e.type="select",e.target=Xn,pr(e),e))}var Hg={eventTypes:vh,extractEvents:function(e,t,n,r,o,i){if(o=i||(r.window===r?r.document:r.nodeType===9?r:r.ownerDocument),!(i=!o)){e:{o=gu(o),i=lu.onSelect;for(var a=0;a<i.length;a++)if(!o.has(i[a])){o=!1;break e}o=!0}i=!o}if(i)return null;switch(o=t?Fn(t):window,e){case"focus":(dh(o)||o.contentEditable==="true")&&(Xn=o,ds=t,Qr=null);break;case"blur":Qr=ds=Xn=null;break;case"mousedown":fs=!0;break;case"contextmenu":case"mouseup":case"dragend":return fs=!1,vd(n,r);case"selectionchange":if(Ug)break;case"keydown":case"keyup":return vd(n,r)}return null}},Wg=nt.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Vg=nt.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qg=wo.extend({relatedTarget:null});function ti(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}var Gg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qg=wo.extend({key:function(e){if(e.key){var t=Gg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kg[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Ru,charCode:function(e){return e.type==="keypress"?ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jg=bo.extend({dataTransfer:null}),Yg=wo.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Ru}),Xg=nt.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Zg=bo.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),ey={eventTypes:Yp,extractEvents:function(e,t,n,r){var o=Xp.get(e);if(!o)return null;switch(e){case"keypress":if(ti(n)===0)return null;case"keydown":case"keyup":e=qg;break;case"blur":case"focus":e=Qg;break;case"click":if(n.button===2)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=bo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=Jg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=Yg;break;case Fp:case Mp:case Bp:e=Wg;break;case zp:e=Xg;break;case"scroll":e=wo;break;case"wheel":e=Zg;break;case"copy":case"cut":case"paste":e=Vg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=mh;break;default:e=nt}return t=e.getPooled(o,t,n,r),pr(t),t}};if(vi)throw Error(M(101));vi=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));yp();var ty=xo;au=Cu;vp=ty;gp=Fn;xp({SimpleEventPlugin:ey,EnterLeaveEventPlugin:Mg,ChangeEventPlugin:Lg,SelectEventPlugin:Hg,BeforeInputEventPlugin:$g});var ps=[],Zn=-1;function ye(e){0>Zn||(e.current=ps[Zn],ps[Zn]=null,Zn--)}function Ee(e,t){Zn++,ps[Zn]=e.current,e.current=t}var hn={},ze={current:hn},Ge={current:!1},Bn=hn;function hr(e,t){var n=e.type.contextTypes;if(!n)return hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ke(e){return e=e.childContextTypes,e!=null}function Ai(){ye(Ge),ye(ze)}function gd(e,t,n){if(ze.current!==hn)throw Error(M(168));Ee(ze,t),Ee(Ge,n)}function gh(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in e))throw Error(M(108,Vt(t)||"Unknown",o));return Ue({},n,{},r)}function ni(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||hn,Bn=ze.current,Ee(ze,e),Ee(Ge,Ge.current),!0}function yd(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=gh(e,t,Bn),r.__reactInternalMemoizedMergedChildContext=e,ye(Ge),ye(ze),Ee(ze,e)):ye(Ge),Ee(Ge,n)}var ny=Le.unstable_runWithPriority,Ou=Le.unstable_scheduleCallback,yh=Le.unstable_cancelCallback,xd=Le.unstable_requestPaint,hs=Le.unstable_now,ry=Le.unstable_getCurrentPriorityLevel,ta=Le.unstable_ImmediatePriority,xh=Le.unstable_UserBlockingPriority,wh=Le.unstable_NormalPriority,bh=Le.unstable_LowPriority,Ah=Le.unstable_IdlePriority,kh={},oy=Le.unstable_shouldYield,iy=xd!==void 0?xd:function(){},zt=null,ri=null,pl=!1,wd=hs(),lt=1e4>wd?hs:function(){return hs()-wd};function na(){switch(ry()){case ta:return 99;case xh:return 98;case wh:return 97;case bh:return 96;case Ah:return 95;default:throw Error(M(332))}}function Sh(e){switch(e){case 99:return ta;case 98:return xh;case 97:return wh;case 96:return bh;case 95:return Ah;default:throw Error(M(332))}}function mn(e,t){return e=Sh(e),ny(e,t)}function Eh(e,t,n){return e=Sh(e),Ou(e,t,n)}function bd(e){return zt===null?(zt=[e],ri=Ou(ta,Th)):zt.push(e),kh}function Nt(){if(ri!==null){var e=ri;ri=null,yh(e)}Th()}function Th(){if(!pl&&zt!==null){pl=!0;var e=0;try{var t=zt;mn(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),zt=null}catch(n){throw zt!==null&&(zt=zt.slice(e+1)),Ou(ta,Nt),n}finally{pl=!1}}}function oi(e,t,n){return n/=10,1073741821-(((1073741821-e+t/10)/n|0)+1)*n}function gt(e,t){if(e&&e.defaultProps){t=Ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n])}return t}var ki={current:null},Si=null,er=null,Ei=null;function Du(){Ei=er=Si=null}function Iu(e){var t=ki.current;ye(ki),e.type._context._currentValue=t}function Ch(e,t){for(;e!==null;){var n=e.alternate;if(e.childExpirationTime<t)e.childExpirationTime=t,n!==null&&n.childExpirationTime<t&&(n.childExpirationTime=t);else if(n!==null&&n.childExpirationTime<t)n.childExpirationTime=t;else break;e=e.return}}function lr(e,t){Si=e,Ei=er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.expirationTime>=t&&(Ct=!0),e.firstContext=null)}function dt(e,t){if(Ei!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(Ei=e,t=1073741823),t={context:e,observedBits:t,next:null},er===null){if(Si===null)throw Error(M(308));er=t,Si.dependencies={expirationTime:0,firstContext:t,responders:null}}else er=er.next=t;return e._currentValue}var Yt=!1;function Nu(e){e.updateQueue={baseState:e.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}function ju(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,baseQueue:e.baseQueue,shared:e.shared,effects:e.effects})}function sn(e,t){return e={expirationTime:e,suspenseConfig:t,tag:0,payload:null,callback:null,next:null},e.next=e}function un(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function Ad(e,t){var n=e.alternate;n!==null&&ju(n,e),e=e.updateQueue,n=e.baseQueue,n===null?(e.baseQueue=t.next=t,t.next=t):(t.next=n.next,n.next=t)}function ro(e,t,n,r){var o=e.updateQueue;Yt=!1;var i=o.baseQueue,a=o.shared.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}i=a,o.shared.pending=null,l=e.alternate,l!==null&&(l=l.updateQueue,l!==null&&(l.baseQueue=a))}if(i!==null){l=i.next;var s=o.baseState,u=0,d=null,c=null,v=null;if(l!==null){var A=l;do{if(a=A.expirationTime,a<r){var g={expirationTime:A.expirationTime,suspenseConfig:A.suspenseConfig,tag:A.tag,payload:A.payload,callback:A.callback,next:null};v===null?(c=v=g,d=s):v=v.next=g,a>u&&(u=a)}else{v!==null&&(v=v.next={expirationTime:1073741823,suspenseConfig:A.suspenseConfig,tag:A.tag,payload:A.payload,callback:A.callback,next:null}),rm(a,A.suspenseConfig);e:{var w=e,f=A;switch(a=t,g=n,f.tag){case 1:if(w=f.payload,typeof w=="function"){s=w.call(g,s,a);break e}s=w;break e;case 3:w.effectTag=w.effectTag&-4097|64;case 0:if(w=f.payload,a=typeof w=="function"?w.call(g,s,a):w,a==null)break e;s=Ue({},s,a);break e;case 2:Yt=!0}}A.callback!==null&&(e.effectTag|=32,a=o.effects,a===null?o.effects=[A]:a.push(A))}if(A=A.next,A===null||A===l){if(a=o.shared.pending,a===null)break;A=i.next=a.next,a.next=l,o.baseQueue=i=a,o.shared.pending=null}}while(!0)}v===null?d=s:v.next=c,o.baseState=d,o.baseQueue=v,la(u),e.expirationTime=u,e.memoizedState=s}}function kd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=o,o=n,typeof r!="function")throw Error(M(191,r));r.call(o)}}}var Gr=xt.ReactCurrentBatchConfig,$h=new Ji.Component().refs;function Ti(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ue({},t,n),e.memoizedState=n,e.expirationTime===0&&(e.updateQueue.baseState=n)}var ra={isMounted:function(e){return(e=e._reactInternalFiber)?Vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternalFiber;var r=Ot(),o=Gr.suspense;r=jn(r,e,o),o=sn(r,o),o.payload=t,n!=null&&(o.callback=n),un(e,o),dn(e,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternalFiber;var r=Ot(),o=Gr.suspense;r=jn(r,e,o),o=sn(r,o),o.tag=1,o.payload=t,n!=null&&(o.callback=n),un(e,o),dn(e,r)},enqueueForceUpdate:function(e,t){e=e._reactInternalFiber;var n=Ot(),r=Gr.suspense;n=jn(n,e,r),r=sn(n,r),r.tag=2,t!=null&&(r.callback=t),un(e,r),dn(e,n)}};function Sd(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!no(n,r)||!no(o,i):!0}function Ph(e,t,n){var r=!1,o=hn,i=t.contextType;return typeof i=="object"&&i!==null?i=dt(i):(o=Ke(t)?Bn:ze.current,r=t.contextTypes,i=(r=r!=null)?hr(e,o):hn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ra,e.stateNode=t,t._reactInternalFiber=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ed(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ra.enqueueReplaceState(t,t.state,null)}function ms(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=$h,Nu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=dt(i):(i=Ke(t)?Bn:ze.current,o.context=hr(e,i)),ro(e,n,o,r),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ti(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ra.enqueueReplaceState(o,o.state,null),ro(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.effectTag|=4)}var Lo=Array.isArray;function Nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var a=r.refs;a===$h&&(a=r.refs={}),i===null?delete a[o]:a[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function _o(e,t){if(e.type!=="textarea")throw Error(M(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t,""))}function Rh(e){function t(f,p){if(e){var m=f.lastEffect;m!==null?(m.nextEffect=p,f.lastEffect=p):f.firstEffect=f.lastEffect=p,p.nextEffect=null,p.effectTag=8}}function n(f,p){if(!e)return null;for(;p!==null;)t(f,p),p=p.sibling;return null}function r(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function o(f,p){return f=zn(f,p),f.index=0,f.sibling=null,f}function i(f,p,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<p?(f.effectTag=2,p):m):(f.effectTag=2,p)):p}function a(f){return e&&f.alternate===null&&(f.effectTag=2),f}function l(f,p,m,x){return p===null||p.tag!==6?(p=xl(m,f.mode,x),p.return=f,p):(p=o(p,m),p.return=f,p)}function s(f,p,m,x){return p!==null&&p.elementType===m.type?(x=o(p,m.props),x.ref=Nr(f,p,m),x.return=f,x):(x=si(m.type,m.key,m.props,null,f.mode,x),x.ref=Nr(f,p,m),x.return=f,x)}function u(f,p,m,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=wl(m,f.mode,x),p.return=f,p):(p=o(p,m.children||[]),p.return=f,p)}function d(f,p,m,x,S){return p===null||p.tag!==7?(p=nn(m,f.mode,x,S),p.return=f,p):(p=o(p,m),p.return=f,p)}function c(f,p,m){if(typeof p=="string"||typeof p=="number")return p=xl(""+p,f.mode,m),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Do:return m=si(p.type,p.key,p.props,null,f.mode,m),m.ref=Nr(f,null,p),m.return=f,m;case qn:return p=wl(p,f.mode,m),p.return=f,p}if(Lo(p)||$r(p))return p=nn(p,f.mode,m,null),p.return=f,p;_o(f,p)}return null}function v(f,p,m,x){var S=p!==null?p.key:null;if(typeof m=="string"||typeof m=="number")return S!==null?null:l(f,p,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Do:return m.key===S?m.type===En?d(f,p,m.props.children,x,S):s(f,p,m,x):null;case qn:return m.key===S?u(f,p,m,x):null}if(Lo(m)||$r(m))return S!==null?null:d(f,p,m,x,null);_o(f,m)}return null}function A(f,p,m,x,S){if(typeof x=="string"||typeof x=="number")return f=f.get(m)||null,l(p,f,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Do:return f=f.get(x.key===null?m:x.key)||null,x.type===En?d(p,f,x.props.children,S,x.key):s(p,f,x,S);case qn:return f=f.get(x.key===null?m:x.key)||null,u(p,f,x,S)}if(Lo(x)||$r(x))return f=f.get(m)||null,d(p,f,x,S,null);_o(p,x)}return null}function g(f,p,m,x){for(var S=null,T=null,$=p,O=p=0,_=null;$!==null&&O<m.length;O++){$.index>O?(_=$,$=null):_=$.sibling;var N=v(f,$,m[O],x);if(N===null){$===null&&($=_);break}e&&$&&N.alternate===null&&t(f,$),p=i(N,p,O),T===null?S=N:T.sibling=N,T=N,$=_}if(O===m.length)return n(f,$),S;if($===null){for(;O<m.length;O++)$=c(f,m[O],x),$!==null&&(p=i($,p,O),T===null?S=$:T.sibling=$,T=$);return S}for($=r(f,$);O<m.length;O++)_=A($,f,O,m[O],x),_!==null&&(e&&_.alternate!==null&&$.delete(_.key===null?O:_.key),p=i(_,p,O),T===null?S=_:T.sibling=_,T=_);return e&&$.forEach(function(q){return t(f,q)}),S}function w(f,p,m,x){var S=$r(m);if(typeof S!="function")throw Error(M(150));if(m=S.call(m),m==null)throw Error(M(151));for(var T=S=null,$=p,O=p=0,_=null,N=m.next();$!==null&&!N.done;O++,N=m.next()){$.index>O?(_=$,$=null):_=$.sibling;var q=v(f,$,N.value,x);if(q===null){$===null&&($=_);break}e&&$&&q.alternate===null&&t(f,$),p=i(q,p,O),T===null?S=q:T.sibling=q,T=q,$=_}if(N.done)return n(f,$),S;if($===null){for(;!N.done;O++,N=m.next())N=c(f,N.value,x),N!==null&&(p=i(N,p,O),T===null?S=N:T.sibling=N,T=N);return S}for($=r(f,$);!N.done;O++,N=m.next())N=A($,f,O,N.value,x),N!==null&&(e&&N.alternate!==null&&$.delete(N.key===null?O:N.key),p=i(N,p,O),T===null?S=N:T.sibling=N,T=N);return e&&$.forEach(function(J){return t(f,J)}),S}return function(f,p,m,x){var S=typeof m=="object"&&m!==null&&m.type===En&&m.key===null;S&&(m=m.props.children);var T=typeof m=="object"&&m!==null;if(T)switch(m.$$typeof){case Do:e:{for(T=m.key,S=p;S!==null;){if(S.key===T){switch(S.tag){case 7:if(m.type===En){n(f,S.sibling),p=o(S,m.props.children),p.return=f,f=p;break e}break;default:if(S.elementType===m.type){n(f,S.sibling),p=o(S,m.props),p.ref=Nr(f,S,m),p.return=f,f=p;break e}}n(f,S);break}else t(f,S);S=S.sibling}m.type===En?(p=nn(m.props.children,f.mode,x,m.key),p.return=f,f=p):(x=si(m.type,m.key,m.props,null,f.mode,x),x.ref=Nr(f,p,m),x.return=f,f=x)}return a(f);case qn:e:{for(S=m.key;p!==null;){if(p.key===S)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(f,p.sibling),p=o(p,m.children||[]),p.return=f,f=p;break e}else{n(f,p);break}else t(f,p);p=p.sibling}p=wl(m,f.mode,x),p.return=f,f=p}return a(f)}if(typeof m=="string"||typeof m=="number")return m=""+m,p!==null&&p.tag===6?(n(f,p.sibling),p=o(p,m),p.return=f,f=p):(n(f,p),p=xl(m,f.mode,x),p.return=f,f=p),a(f);if(Lo(m))return g(f,p,m,x);if($r(m))return w(f,p,m,x);if(T&&_o(f,m),typeof m>"u"&&!S)switch(f.tag){case 1:case 0:throw f=f.type,Error(M(152,f.displayName||f.name||"Component"))}return n(f,p)}}var mr=Rh(!0),Lu=Rh(!1),Ao={},Rt={current:Ao},oo={current:Ao},io={current:Ao};function Cn(e){if(e===Ao)throw Error(M(174));return e}function vs(e,t){switch(Ee(io,t),Ee(oo,e),Ee(Rt,Ao),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zl(t,e)}ye(Rt),Ee(Rt,t)}function vr(){ye(Rt),ye(oo),ye(io)}function Td(e){Cn(io.current);var t=Cn(Rt.current),n=Zl(t,e.type);t!==n&&(Ee(oo,e),Ee(Rt,n))}function _u(e){oo.current===e&&(ye(Rt),ye(oo))}var be={current:0};function Ci(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===Su||n.data===Eu))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.effectTag&64)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Fu(e,t){return{responder:e,props:t}}var ii=xt.ReactCurrentDispatcher,st=xt.ReactCurrentBatchConfig,en=0,$e=null,Me=null,Be=null,$i=!1;function Ye(){throw Error(M(321))}function Mu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mn(e[n],t[n]))return!1;return!0}function Bu(e,t,n,r,o,i){if(en=i,$e=t,t.memoizedState=null,t.updateQueue=null,t.expirationTime=0,ii.current=e===null||e.memoizedState===null?ay:ly,e=n(r,o),t.expirationTime===en){i=0;do{if(t.expirationTime=0,!(25>i))throw Error(M(301));i+=1,Be=Me=null,t.updateQueue=null,ii.current=sy,e=n(r,o)}while(t.expirationTime===en)}if(ii.current=Oi,t=Me!==null&&Me.next!==null,en=0,Be=Me=$e=null,$i=!1,t)throw Error(M(300));return e}function sr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?$e.memoizedState=Be=e:Be=Be.next=e,Be}function kr(){if(Me===null){var e=$e.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Be===null?$e.memoizedState:Be.next;if(t!==null)Be=t,Me=e;else{if(e===null)throw Error(M(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Be===null?$e.memoizedState=Be=e:Be=Be.next=e}return Be}function Dn(e,t){return typeof t=="function"?t(e):t}function Fo(e){var t=kr(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=Me,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){o=o.next,r=r.baseState;var l=a=i=null,s=o;do{var u=s.expirationTime;if(u<en){var d={expirationTime:s.expirationTime,suspenseConfig:s.suspenseConfig,action:s.action,eagerReducer:s.eagerReducer,eagerState:s.eagerState,next:null};l===null?(a=l=d,i=r):l=l.next=d,u>$e.expirationTime&&($e.expirationTime=u,la(u))}else l!==null&&(l=l.next={expirationTime:1073741823,suspenseConfig:s.suspenseConfig,action:s.action,eagerReducer:s.eagerReducer,eagerState:s.eagerState,next:null}),rm(u,s.suspenseConfig),r=s.eagerReducer===e?s.eagerState:e(r,s.action);s=s.next}while(s!==null&&s!==o);l===null?i=r:l.next=a,Mn(r,t.memoizedState)||(Ct=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=l,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function Mo(e){var t=kr(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Mn(i,t.memoizedState)||(Ct=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function hl(e){var t=sr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Dn,lastRenderedState:e},e=e.dispatch=Lh.bind(null,$e,e),[t.memoizedState,e]}function gs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$e.updateQueue,t===null?(t={lastEffect:null},$e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Oh(){return kr().memoizedState}function ys(e,t,n,r){var o=sr();$e.effectTag|=e,o.memoizedState=gs(1|t,n,void 0,r===void 0?null:r)}function zu(e,t,n,r){var o=kr();r=r===void 0?null:r;var i=void 0;if(Me!==null){var a=Me.memoizedState;if(i=a.destroy,r!==null&&Mu(r,a.deps)){gs(t,n,i,r);return}}$e.effectTag|=e,o.memoizedState=gs(1|t,n,i,r)}function Cd(e,t){return ys(516,4,e,t)}function Pi(e,t){return zu(516,4,e,t)}function Dh(e,t){return zu(4,2,e,t)}function Ih(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nh(e,t,n){return n=n!=null?n.concat([e]):null,zu(4,2,Ih.bind(null,t,e),n)}function Uu(){}function $d(e,t){return sr().memoizedState=[e,t===void 0?null:t],e}function Ri(e,t){var n=kr();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function jh(e,t){var n=kr();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Hu(e,t,n){var r=na();mn(98>r?98:r,function(){e(!0)}),mn(97<r?97:r,function(){var o=st.suspense;st.suspense=t===void 0?null:t;try{e(!1),n()}finally{st.suspense=o}})}function Lh(e,t,n){var r=Ot(),o=Gr.suspense;r=jn(r,e,o),o={expirationTime:r,suspenseConfig:o,action:n,eagerReducer:null,eagerState:null,next:null};var i=t.pending;if(i===null?o.next=o:(o.next=i.next,i.next=o),t.pending=o,i=e.alternate,e===$e||i!==null&&i===$e)$i=!0,o.expirationTime=en,$e.expirationTime=en;else{if(e.expirationTime===0&&(i===null||i.expirationTime===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.eagerReducer=i,o.eagerState=l,Mn(l,a))return}catch{}finally{}dn(e,r)}}var Oi={readContext:dt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useResponder:Ye,useDeferredValue:Ye,useTransition:Ye},ay={readContext:dt,useCallback:$d,useContext:dt,useEffect:Cd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ys(4,2,Ih.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ys(4,2,e,t)},useMemo:function(e,t){var n=sr();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=sr();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=Lh.bind(null,$e,e),[r.memoizedState,e]},useRef:function(e){var t=sr();return e={current:e},t.memoizedState=e},useState:hl,useDebugValue:Uu,useResponder:Fu,useDeferredValue:function(e,t){var n=hl(e),r=n[0],o=n[1];return Cd(function(){var i=st.suspense;st.suspense=t===void 0?null:t;try{o(e)}finally{st.suspense=i}},[e,t]),r},useTransition:function(e){var t=hl(!1),n=t[0];return t=t[1],[$d(Hu.bind(null,t,e),[t,e]),n]}},ly={readContext:dt,useCallback:Ri,useContext:dt,useEffect:Pi,useImperativeHandle:Nh,useLayoutEffect:Dh,useMemo:jh,useReducer:Fo,useRef:Oh,useState:function(){return Fo(Dn)},useDebugValue:Uu,useResponder:Fu,useDeferredValue:function(e,t){var n=Fo(Dn),r=n[0],o=n[1];return Pi(function(){var i=st.suspense;st.suspense=t===void 0?null:t;try{o(e)}finally{st.suspense=i}},[e,t]),r},useTransition:function(e){var t=Fo(Dn),n=t[0];return t=t[1],[Ri(Hu.bind(null,t,e),[t,e]),n]}},sy={readContext:dt,useCallback:Ri,useContext:dt,useEffect:Pi,useImperativeHandle:Nh,useLayoutEffect:Dh,useMemo:jh,useReducer:Mo,useRef:Oh,useState:function(){return Mo(Dn)},useDebugValue:Uu,useResponder:Fu,useDeferredValue:function(e,t){var n=Mo(Dn),r=n[0],o=n[1];return Pi(function(){var i=st.suspense;st.suspense=t===void 0?null:t;try{o(e)}finally{st.suspense=i}},[e,t]),r},useTransition:function(e){var t=Mo(Dn),n=t[0];return t=t[1],[Ri(Hu.bind(null,t,e),[t,e]),n]}},Ht=null,tn=null,In=!1;function _h(e,t){var n=$t(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function Pd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function xs(e){if(In){var t=tn;if(t){var n=t;if(!Pd(e,t)){if(t=ar(n.nextSibling),!t||!Pd(e,t)){e.effectTag=e.effectTag&-1025|2,In=!1,Ht=e;return}_h(Ht,n)}Ht=e,tn=ar(t.firstChild)}else e.effectTag=e.effectTag&-1025|2,In=!1,Ht=e}}function Rd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ht=e}function Bo(e){if(e!==Ht)return!1;if(!In)return Rd(e),In=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!ss(t,e.memoizedProps))for(t=tn;t;)_h(e,t),t=ar(t.nextSibling);if(Rd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===rh){if(t===0){tn=ar(e.nextSibling);break e}t--}else n!==nh&&n!==Eu&&n!==Su||t++}e=e.nextSibling}tn=null}}else tn=Ht?ar(e.stateNode.nextSibling):null;return!0}function ml(){tn=Ht=null,In=!1}var uy=xt.ReactCurrentOwner,Ct=!1;function Xe(e,t,n,r){t.child=e===null?Lu(t,null,n,r):mr(t,e.child,n,r)}function Od(e,t,n,r,o){n=n.render;var i=t.ref;return lr(t,o),r=Bu(e,t,n,r,i,o),e!==null&&!Ct?(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=o&&(e.expirationTime=0),Wt(e,t,o)):(t.effectTag|=1,Xe(e,t,r,o),t.child)}function Dd(e,t,n,r,o,i){if(e===null){var a=n.type;return typeof a=="function"&&!Ku(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Fh(e,t,a,r,o,i)):(e=si(n.type,null,r,null,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}return a=e.child,o<i&&(o=a.memoizedProps,n=n.compare,n=n!==null?n:no,n(o,r)&&e.ref===t.ref)?Wt(e,t,i):(t.effectTag|=1,e=zn(a,r),e.ref=t.ref,e.return=t,t.child=e)}function Fh(e,t,n,r,o,i){return e!==null&&no(e.memoizedProps,r)&&e.ref===t.ref&&(Ct=!1,o<i)?(t.expirationTime=e.expirationTime,Wt(e,t,i)):ws(e,t,n,r,i)}function Mh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.effectTag|=128)}function ws(e,t,n,r,o){var i=Ke(n)?Bn:ze.current;return i=hr(t,i),lr(t,o),n=Bu(e,t,n,r,i,o),e!==null&&!Ct?(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=o&&(e.expirationTime=0),Wt(e,t,o)):(t.effectTag|=1,Xe(e,t,n,o),t.child)}function Id(e,t,n,r,o){if(Ke(n)){var i=!0;ni(t)}else i=!1;if(lr(t,o),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),Ph(t,n,r),ms(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=dt(u):(u=Ke(n)?Bn:ze.current,u=hr(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Ed(t,a,r,u),Yt=!1;var v=t.memoizedState;a.state=v,ro(t,r,a,o),s=t.memoizedState,l!==r||v!==s||Ge.current||Yt?(typeof d=="function"&&(Ti(t,n,d,r),s=t.memoizedState),(l=Yt||Sd(t,n,l,r,v,s,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.effectTag|=4)):(typeof a.componentDidMount=="function"&&(t.effectTag|=4),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.effectTag|=4),r=!1)}else a=t.stateNode,ju(e,t),l=t.memoizedProps,a.props=t.type===t.elementType?l:gt(t.type,l),s=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=dt(u):(u=Ke(n)?Bn:ze.current,u=hr(t,u)),d=n.getDerivedStateFromProps,(c=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Ed(t,a,r,u),Yt=!1,s=t.memoizedState,a.state=s,ro(t,r,a,o),v=t.memoizedState,l!==r||s!==v||Ge.current||Yt?(typeof d=="function"&&(Ti(t,n,d,r),v=t.memoizedState),(d=Yt||Sd(t,n,l,r,s,v,u))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,u)),typeof a.componentDidUpdate=="function"&&(t.effectTag|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.effectTag|=256)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&s===e.memoizedState||(t.effectTag|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&s===e.memoizedState||(t.effectTag|=256),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&s===e.memoizedState||(t.effectTag|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&s===e.memoizedState||(t.effectTag|=256),r=!1);return bs(e,t,n,r,i,o)}function bs(e,t,n,r,o,i){Mh(e,t);var a=(t.effectTag&64)!==0;if(!r&&!a)return o&&yd(t,n,!1),Wt(e,t,i);r=t.stateNode,uy.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.effectTag|=1,e!==null&&a?(t.child=mr(t,e.child,null,i),t.child=mr(t,null,l,i)):Xe(e,t,l,i),t.memoizedState=r.state,o&&yd(t,n,!0),t.child}function Nd(e){var t=e.stateNode;t.pendingContext?gd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&gd(e,t.context,!1),vs(e,t.containerInfo)}var vl={dehydrated:null,retryTime:0};function jd(e,t,n){var r=t.mode,o=t.pendingProps,i=be.current,a=!1,l;if((l=(t.effectTag&64)!==0)||(l=(i&2)!==0&&(e===null||e.memoizedState!==null)),l?(a=!0,t.effectTag&=-65):e!==null&&e.memoizedState===null||o.fallback===void 0||o.unstable_avoidThisFallback===!0||(i|=1),Ee(be,i&1),e===null){if(o.fallback!==void 0&&xs(t),a){if(a=o.fallback,o=nn(null,r,0,null),o.return=t,!(t.mode&2))for(e=t.memoizedState!==null?t.child.child:t.child,o.child=e;e!==null;)e.return=o,e=e.sibling;return n=nn(a,r,n,null),n.return=t,o.sibling=n,t.memoizedState=vl,t.child=o,n}return r=o.children,t.memoizedState=null,t.child=Lu(t,null,r,n)}if(e.memoizedState!==null){if(e=e.child,r=e.sibling,a){if(o=o.fallback,n=zn(e,e.pendingProps),n.return=t,!(t.mode&2)&&(a=t.memoizedState!==null?t.child.child:t.child,a!==e.child))for(n.child=a;a!==null;)a.return=n,a=a.sibling;return r=zn(r,o),r.return=t,n.sibling=r,n.childExpirationTime=0,t.memoizedState=vl,t.child=n,r}return n=mr(t,e.child,o.children,n),t.memoizedState=null,t.child=n}if(e=e.child,a){if(a=o.fallback,o=nn(null,r,0,null),o.return=t,o.child=e,e!==null&&(e.return=o),!(t.mode&2))for(e=t.memoizedState!==null?t.child.child:t.child,o.child=e;e!==null;)e.return=o,e=e.sibling;return n=nn(a,r,n,null),n.return=t,o.sibling=n,n.effectTag|=2,o.childExpirationTime=0,t.memoizedState=vl,t.child=o,n}return t.memoizedState=null,t.child=mr(t,e,o.children,n)}function Ld(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;n!==null&&n.expirationTime<t&&(n.expirationTime=t),Ch(e.return,t)}function gl(e,t,n,r,o,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailExpiration:0,tailMode:o,lastEffect:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailExpiration=0,a.tailMode=o,a.lastEffect=i)}function _d(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Xe(e,t,r.children,n),r=be.current,r&2)r=r&1|2,t.effectTag|=64;else{if(e!==null&&e.effectTag&64)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ld(e,n);else if(e.tag===19)Ld(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ee(be,r),!(t.mode&2))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ci(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),gl(t,!1,o,n,i,t.lastEffect);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ci(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}gl(t,!0,n,null,i,t.lastEffect);break;case"together":gl(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function Wt(e,t,n){e!==null&&(t.dependencies=e.dependencies);var r=t.expirationTime;if(r!==0&&la(r),t.childExpirationTime<n)return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=zn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}var Bh,As,zh,Uh;Bh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};As=function(){};zh=function(e,t,n,r,o){var i=e.memoizedProps;if(i!==r){var a=t.stateNode;switch(Cn(Rt.current),e=null,n){case"input":i=Kl(a,i),r=Kl(a,r),e=[];break;case"option":i=Yl(a,i),r=Yl(a,r),e=[];break;case"select":i=Ue({},i,{value:void 0}),r=Ue({},r,{value:void 0}),e=[];break;case"textarea":i=Xl(a,i),r=Xl(a,r),e=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(a.onclick=xi)}os(n,r);var l,s;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style")for(s in a=i[l],a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="");else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(dr.hasOwnProperty(l)?e||(e=[]):(e=e||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(e||(e=[]),e.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(e=e||[]).push(l,u)):l==="children"?a===u||typeof u!="string"&&typeof u!="number"||(e=e||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(dr.hasOwnProperty(l)?(u!=null&&Mt(o,l),e||a===u||(e=[])):(e=e||[]).push(l,u))}n&&(e=e||[]).push("style",n),o=e,(t.updateQueue=o)&&(t.effectTag|=4)}};Uh=function(e,t,n,r){n!==r&&(t.effectTag|=4)};function zo(e,t){switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function cy(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ke(t.type)&&Ai(),null;case 3:return vr(),ye(Ge),ye(ze),n=t.stateNode,n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),e!==null&&e.child!==null||!Bo(t)||(t.effectTag|=4),As(t),null;case 5:_u(t),n=Cn(io.current);var o=t.type;if(e!==null&&t.stateNode!=null)zh(e,t,o,r,n),e.ref!==t.ref&&(t.effectTag|=128);else{if(!r){if(t.stateNode===null)throw Error(M(166));return null}if(e=Cn(Rt.current),Bo(t)){r=t.stateNode,o=t.type;var i=t.memoizedProps;switch(r[Xt]=t,r[wi]=i,o){case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(e=0;e<Fr.length;e++)xe(Fr[e],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"form":xe("reset",r),xe("submit",r);break;case"details":xe("toggle",r);break;case"input":Kc(r,i),xe("invalid",r),Mt(n,"onChange");break;case"select":r._wrapperState={wasMultiple:!!i.multiple},xe("invalid",r),Mt(n,"onChange");break;case"textarea":Jc(r,i),xe("invalid",r),Mt(n,"onChange")}os(o,i),e=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(e=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(e=["children",""+l]):dr.hasOwnProperty(a)&&l!=null&&Mt(n,a)}switch(o){case"input":Io(r),qc(r,i,!0);break;case"textarea":Io(r),Yc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=xi)}n=e,t.updateQueue=n,n!==null&&(t.effectTag|=4)}else{switch(a=n.nodeType===9?n:n.ownerDocument,e===rd&&(e=jp(o)),e===rd?o==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(o,{is:r.is}):(e=a.createElement(o),o==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,o),e[Xt]=t,e[wi]=r,Bh(e,t,!1,!1),t.stateNode=e,a=is(o,r),o){case"iframe":case"object":case"embed":xe("load",e),l=r;break;case"video":case"audio":for(l=0;l<Fr.length;l++)xe(Fr[l],e);l=r;break;case"source":xe("error",e),l=r;break;case"img":case"image":case"link":xe("error",e),xe("load",e),l=r;break;case"form":xe("reset",e),xe("submit",e),l=r;break;case"details":xe("toggle",e),l=r;break;case"input":Kc(e,r),l=Kl(e,r),xe("invalid",e),Mt(n,"onChange");break;case"option":l=Yl(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Ue({},r,{value:void 0}),xe("invalid",e),Mt(n,"onChange");break;case"textarea":Jc(e,r),l=Xl(e,r),xe("invalid",e),Mt(n,"onChange");break;default:l=r}os(o,l);var s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?eh(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Lp(e,u)):i==="children"?typeof u=="string"?(o!=="textarea"||u!=="")&&Xr(e,u):typeof u=="number"&&Xr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(dr.hasOwnProperty(i)?u!=null&&Mt(n,i):u!=null&&pu(e,i,u,a))}switch(o){case"input":Io(e),qc(e,r,!1);break;case"textarea":Io(e),Yc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pn(r.value));break;case"select":e.multiple=!!r.multiple,n=r.value,n!=null?ir(e,!!r.multiple,n,!1):r.defaultValue!=null&&ir(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=xi)}oh(o,r)&&(t.effectTag|=4)}t.ref!==null&&(t.effectTag|=128)}return null;case 6:if(e&&t.stateNode!=null)Uh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));n=Cn(io.current),Cn(Rt.current),Bo(t)?(n=t.stateNode,r=t.memoizedProps,n[Xt]=t,n.nodeValue!==r&&(t.effectTag|=4)):(n=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),n[Xt]=t,t.stateNode=n)}return null;case 13:return ye(be),r=t.memoizedState,t.effectTag&64?(t.expirationTime=n,t):(n=r!==null,r=!1,e===null?t.memoizedProps.fallback!==void 0&&Bo(t):(o=e.memoizedState,r=o!==null,n||o===null||(o=e.child.sibling,o!==null&&(i=t.firstEffect,i!==null?(t.firstEffect=o,o.nextEffect=i):(t.firstEffect=t.lastEffect=o,o.nextEffect=null),o.effectTag=8))),n&&!r&&t.mode&2&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||be.current&1?Pe===Nn&&(Pe=Ni):((Pe===Nn||Pe===Ni)&&(Pe=oa),lo!==0&&et!==null&&(Rn(et,qe),sm(et,lo)))),(n||r)&&(t.effectTag|=4),null);case 4:return vr(),As(t),null;case 10:return Iu(t),null;case 17:return Ke(t.type)&&Ai(),null;case 19:if(ye(be),r=t.memoizedState,r===null)return null;if(o=(t.effectTag&64)!==0,i=r.rendering,i===null){if(o)zo(r,!1);else if(Pe!==Nn||e!==null&&e.effectTag&64)for(i=t.child;i!==null;){if(e=Ci(i),e!==null){for(t.effectTag|=64,zo(r,!1),o=e.updateQueue,o!==null&&(t.updateQueue=o,t.effectTag|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=t.child;r!==null;)o=r,i=n,o.effectTag&=2,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null,e=o.alternate,e===null?(o.childExpirationTime=0,o.expirationTime=i,o.child=null,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null):(o.childExpirationTime=e.childExpirationTime,o.expirationTime=e.expirationTime,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,i=e.dependencies,o.dependencies=i===null?null:{expirationTime:i.expirationTime,firstContext:i.firstContext,responders:i.responders}),r=r.sibling;return Ee(be,be.current&1|2),t.child}i=i.sibling}}else{if(!o)if(e=Ci(i),e!==null){if(t.effectTag|=64,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.effectTag|=4),zo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!i.alternate)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*lt()-r.renderingStartTime>r.tailExpiration&&1<n&&(t.effectTag|=64,o=!0,zo(r,!1),t.expirationTime=t.childExpirationTime=n-1);r.isBackwards?(i.sibling=t.child,t.child=i):(n=r.last,n!==null?n.sibling=i:t.child=i,r.last=i)}return r.tail!==null?(r.tailExpiration===0&&(r.tailExpiration=lt()+500),n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=lt(),n.sibling=null,t=be.current,Ee(be,o?t&1|2:t&1),n):null}throw Error(M(156,t.tag))}function dy(e){switch(e.tag){case 1:Ke(e.type)&&Ai();var t=e.effectTag;return t&4096?(e.effectTag=t&-4097|64,e):null;case 3:if(vr(),ye(Ge),ye(ze),t=e.effectTag,t&64)throw Error(M(285));return e.effectTag=t&-4097|64,e;case 5:return _u(e),null;case 13:return ye(be),t=e.effectTag,t&4096?(e.effectTag=t&-4097|64,e):null;case 19:return ye(be),null;case 4:return vr(),null;case 10:return Iu(e),null;default:return null}}function Wu(e,t){return{value:e,source:t,stack:vu(t)}}var fy=typeof WeakSet=="function"?WeakSet:Set;function ks(e,t){var n=t.source,r=t.stack;r===null&&n!==null&&(r=vu(n)),n!==null&&Vt(n.type),t=t.value,e!==null&&e.tag===1&&Vt(e.type);try{console.error(t)}catch(o){setTimeout(function(){throw o})}}function py(e,t){try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(n){Ln(e,n)}}function Fd(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){Ln(e,n)}else t.current=null}function hy(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.effectTag&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:gt(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(M(163))}function Hh(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.destroy;n.destroy=void 0,r!==void 0&&r()}n=n.next}while(n!==t)}}function Wh(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function my(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:Wh(3,n);return;case 1:if(e=n.stateNode,n.effectTag&4)if(t===null)e.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:gt(n.type,t.memoizedProps);e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}t=n.updateQueue,t!==null&&kd(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}kd(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.effectTag&4&&oh(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Jp(n))));return;case 19:case 17:case 20:case 21:return}throw Error(M(163))}function Md(e,t,n){switch(typeof Os=="function"&&Os(t),t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var r=e.next;mn(97<n?97:n,function(){var o=r;do{var i=o.destroy;if(i!==void 0){var a=t;try{i()}catch(l){Ln(a,l)}}o=o.next}while(o!==r)})}break;case 1:Fd(t),n=t.stateNode,typeof n.componentWillUnmount=="function"&&py(t,n);break;case 5:Fd(t);break;case 4:Qh(e,t,n)}}function Vh(e){var t=e.alternate;e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.alternate=null,e.firstEffect=null,e.lastEffect=null,e.pendingProps=null,e.memoizedProps=null,e.stateNode=null,t!==null&&Vh(t)}function Bd(e){return e.tag===5||e.tag===3||e.tag===4}function zd(e){e:{for(var t=e.return;t!==null;){if(Bd(t)){var n=t;break e}t=t.return}throw Error(M(160))}switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(M(161))}n.effectTag&16&&(Xr(t,""),n.effectTag&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||Bd(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.effectTag&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.effectTag&2)){n=n.stateNode;break e}}r?Ss(e,n,t):Es(e,n,t)}function Ss(e,t,n){var r=e.tag,o=r===5||r===6;if(o)e=o?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xi));else if(r!==4&&(e=e.child,e!==null))for(Ss(e,t,n),e=e.sibling;e!==null;)Ss(e,t,n),e=e.sibling}function Es(e,t,n){var r=e.tag,o=r===5||r===6;if(o)e=o?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Es(e,t,n),e=e.sibling;e!==null;)Es(e,t,n),e=e.sibling}function Qh(e,t,n){for(var r=t,o=!1,i,a;;){if(!o){o=r.return;e:for(;;){if(o===null)throw Error(M(160));switch(i=o.stateNode,o.tag){case 5:a=!1;break e;case 3:i=i.containerInfo,a=!0;break e;case 4:i=i.containerInfo,a=!0;break e}o=o.return}o=!0}if(r.tag===5||r.tag===6){e:for(var l=e,s=r,u=n,d=s;;)if(Md(l,d,u),d.child!==null&&d.tag!==4)d.child.return=d,d=d.child;else{if(d===s)break e;for(;d.sibling===null;){if(d.return===null||d.return===s)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}a?(l=i,s=r.stateNode,l.nodeType===8?l.parentNode.removeChild(s):l.removeChild(s)):i.removeChild(r.stateNode)}else if(r.tag===4){if(r.child!==null){i=r.stateNode.containerInfo,a=!0,r.child.return=r,r=r.child;continue}}else if(Md(e,r,n),r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return,r.tag===4&&(o=!1)}r.sibling.return=r.return,r=r.sibling}}function yl(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:Hh(3,t);return;case 1:return;case 5:var n=t.stateNode;if(n!=null){var r=t.memoizedProps,o=e!==null?e.memoizedProps:r;e=t.type;var i=t.updateQueue;if(t.updateQueue=null,i!==null){for(n[wi]=r,e==="input"&&r.type==="radio"&&r.name!=null&&Dp(n,r),is(e,o),t=is(e,r),o=0;o<i.length;o+=2){var a=i[o],l=i[o+1];a==="style"?eh(n,l):a==="dangerouslySetInnerHTML"?Lp(n,l):a==="children"?Xr(n,l):pu(n,a,l,t)}switch(e){case"input":ql(n,r);break;case"textarea":Ip(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,e=r.value,e!=null?ir(n,!!r.multiple,e,!1):t!==!!r.multiple&&(r.defaultValue!=null?ir(n,!!r.multiple,r.defaultValue,!0):ir(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(M(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:t=t.stateNode,t.hydrate&&(t.hydrate=!1,Jp(t.containerInfo));return;case 12:return;case 13:if(n=t,t.memoizedState===null?r=!1:(r=!0,n=t.child,Gu=lt()),n!==null)e:for(e=n;;){if(e.tag===5)i=e.stateNode,r?(i=i.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(i=e.stateNode,o=e.memoizedProps.style,o=o!=null&&o.hasOwnProperty("display")?o.display:null,i.style.display=Zp("display",o));else if(e.tag===6)e.stateNode.nodeValue=r?"":e.memoizedProps;else if(e.tag===13&&e.memoizedState!==null&&e.memoizedState.dehydrated===null){i=e.child.sibling,i.return=e,e=i;continue}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}Ud(t);return;case 19:Ud(t);return;case 17:return}throw Error(M(163))}function Ud(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new fy),t.forEach(function(r){var o=Ey.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}var vy=typeof WeakMap=="function"?WeakMap:Map;function Gh(e,t,n){n=sn(n,null),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_i||(_i=!0,Ts=r),ks(e,t)},n}function Kh(e,t,n){n=sn(n,null),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return ks(e,t),r(o)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this),ks(e,t));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}var gy=Math.ceil,Di=xt.ReactCurrentDispatcher,qh=xt.ReactCurrentOwner,Re=0,Vu=8,wt=16,Dt=32,Nn=0,Ii=1,Jh=2,Ni=3,oa=4,Qu=5,re=Re,et=null,ie=null,qe=0,Pe=Nn,ia=null,Ut=1073741823,ao=1073741823,ji=null,lo=0,Li=!1,Gu=0,Yh=500,Z=null,_i=!1,Ts=null,cn=null,Fi=!1,Kr=null,Br=90,$n=null,qr=0,Cs=null,ai=0;function Ot(){return(re&(wt|Dt))!==Re?1073741821-(lt()/10|0):ai!==0?ai:ai=1073741821-(lt()/10|0)}function jn(e,t,n){if(t=t.mode,!(t&2))return 1073741823;var r=na();if(!(t&4))return r===99?1073741823:1073741822;if((re&wt)!==Re)return qe;if(n!==null)e=oi(e,n.timeoutMs|0||5e3,250);else switch(r){case 99:e=1073741823;break;case 98:e=oi(e,150,100);break;case 97:case 96:e=oi(e,5e3,250);break;case 95:e=2;break;default:throw Error(M(326))}return et!==null&&e===qe&&--e,e}function dn(e,t){if(50<qr)throw qr=0,Cs=null,Error(M(185));if(e=aa(e,t),e!==null){var n=na();t===1073741823?(re&Vu)!==Re&&(re&(wt|Dt))===Re?$s(e):(tt(e),re===Re&&Nt()):tt(e),(re&4)===Re||n!==98&&n!==99||($n===null?$n=new Map([[e,t]]):(n=$n.get(e),(n===void 0||n>t)&&$n.set(e,t)))}}function aa(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;n!==null&&n.expirationTime<t&&(n.expirationTime=t);var r=e.return,o=null;if(r===null&&e.tag===3)o=e.stateNode;else for(;r!==null;){if(n=r.alternate,r.childExpirationTime<t&&(r.childExpirationTime=t),n!==null&&n.childExpirationTime<t&&(n.childExpirationTime=t),r.return===null&&r.tag===3){o=r.stateNode;break}r=r.return}return o!==null&&(et===o&&(la(t),Pe===oa&&Rn(o,qe)),sm(o,t)),o}function li(e){var t=e.lastExpiredTime;if(t!==0||(t=e.firstPendingTime,!lm(e,t)))return t;var n=e.lastPingedTime;return e=e.nextKnownPendingLevel,e=n>e?n:e,2>=e&&t!==e?0:e}function tt(e){if(e.lastExpiredTime!==0)e.callbackExpirationTime=1073741823,e.callbackPriority=99,e.callbackNode=bd($s.bind(null,e));else{var t=li(e),n=e.callbackNode;if(t===0)n!==null&&(e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90);else{var r=Ot();if(t===1073741823?r=99:t===1||t===2?r=95:(r=10*(1073741821-t)-10*(1073741821-r),r=0>=r?99:250>=r?98:5250>=r?97:95),n!==null){var o=e.callbackPriority;if(e.callbackExpirationTime===t&&o>=r)return;n!==kh&&yh(n)}e.callbackExpirationTime=t,e.callbackPriority=r,t=t===1073741823?bd($s.bind(null,e)):Eh(r,Xh.bind(null,e),{timeout:10*(1073741821-t)-lt()}),e.callbackNode=t}}}function Xh(e,t){if(ai=0,t)return t=Ot(),Ds(e,t),tt(e),null;var n=li(e);if(n!==0){if(t=e.callbackNode,(re&(wt|Dt))!==Re)throw Error(M(327));if(Sr(),e===et&&n===qe||Pn(e,n),ie!==null){var r=re;re|=wt;var o=nm();do try{wy();break}catch(l){tm(e,l)}while(!0);if(Du(),re=r,Di.current=o,Pe===Ii)throw t=ia,Pn(e,n),Rn(e,n),tt(e),t;if(ie===null)switch(o=e.finishedWork=e.current.alternate,e.finishedExpirationTime=n,r=Pe,et=null,r){case Nn:case Ii:throw Error(M(345));case Jh:Ds(e,2<n?2:n);break;case Ni:if(Rn(e,n),r=e.lastSuspendedTime,n===r&&(e.nextKnownPendingLevel=Ps(o)),Ut===1073741823&&(o=Gu+Yh-lt(),10<o)){if(Li){var i=e.lastPingedTime;if(i===0||i>=n){e.lastPingedTime=n,Pn(e,n);break}}if(i=li(e),i!==0&&i!==n)break;if(r!==0&&r!==n){e.lastPingedTime=r;break}e.timeoutHandle=fl(Sn.bind(null,e),o);break}Sn(e);break;case oa:if(Rn(e,n),r=e.lastSuspendedTime,n===r&&(e.nextKnownPendingLevel=Ps(o)),Li&&(o=e.lastPingedTime,o===0||o>=n)){e.lastPingedTime=n,Pn(e,n);break}if(o=li(e),o!==0&&o!==n)break;if(r!==0&&r!==n){e.lastPingedTime=r;break}if(ao!==1073741823?r=10*(1073741821-ao)-lt():Ut===1073741823?r=0:(r=10*(1073741821-Ut)-5e3,o=lt(),n=10*(1073741821-n)-o,r=o-r,0>r&&(r=0),r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gy(r/1960))-r,n<r&&(r=n)),10<r){e.timeoutHandle=fl(Sn.bind(null,e),r);break}Sn(e);break;case Qu:if(Ut!==1073741823&&ji!==null){i=Ut;var a=ji;if(r=a.busyMinDurationMs|0,0>=r?r=0:(o=a.busyDelayMs|0,i=lt()-(10*(1073741821-i)-(a.timeoutMs|0||5e3)),r=i<=o?0:o+r-i),10<r){Rn(e,n),e.timeoutHandle=fl(Sn.bind(null,e),r);break}}Sn(e);break;default:throw Error(M(329))}if(tt(e),e.callbackNode===t)return Xh.bind(null,e)}}return null}function $s(e){var t=e.lastExpiredTime;if(t=t!==0?t:1073741823,(re&(wt|Dt))!==Re)throw Error(M(327));if(Sr(),e===et&&t===qe||Pn(e,t),ie!==null){var n=re;re|=wt;var r=nm();do try{xy();break}catch(o){tm(e,o)}while(!0);if(Du(),re=n,Di.current=r,Pe===Ii)throw n=ia,Pn(e,t),Rn(e,t),tt(e),n;if(ie!==null)throw Error(M(261));e.finishedWork=e.current.alternate,e.finishedExpirationTime=t,et=null,Sn(e),tt(e)}return null}function yy(){if($n!==null){var e=$n;$n=null,e.forEach(function(t,n){Ds(n,t),tt(n)}),Nt()}}function Zh(e,t){var n=re;re|=1;try{return e(t)}finally{re=n,re===Re&&Nt()}}function em(e,t){var n=re;re&=-2,re|=Vu;try{return e(t)}finally{re=n,re===Re&&Nt()}}function Pn(e,t){e.finishedWork=null,e.finishedExpirationTime=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gg(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ai();break;case 3:vr(),ye(Ge),ye(ze);break;case 5:_u(r);break;case 4:vr();break;case 13:ye(be);break;case 19:ye(be);break;case 10:Iu(r)}n=n.return}et=e,ie=zn(e.current,null),qe=t,Pe=Nn,ia=null,ao=Ut=1073741823,ji=null,lo=0,Li=!1}function tm(e,t){do{try{if(Du(),ii.current=Oi,$i)for(var n=$e.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}if(en=0,Be=Me=$e=null,$i=!1,ie===null||ie.return===null)return Pe=Ii,ia=t,ie=null;e:{var o=e,i=ie.return,a=ie,l=t;if(t=qe,a.effectTag|=2048,a.firstEffect=a.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var s=l;if(!(a.mode&2)){var u=a.alternate;u?(a.updateQueue=u.updateQueue,a.memoizedState=u.memoizedState,a.expirationTime=u.expirationTime):(a.updateQueue=null,a.memoizedState=null)}var d=(be.current&1)!==0,c=i;do{var v;if(v=c.tag===13){var A=c.memoizedState;if(A!==null)v=A.dehydrated!==null;else{var g=c.memoizedProps;v=g.fallback===void 0?!1:g.unstable_avoidThisFallback!==!0?!0:!d}}if(v){var w=c.updateQueue;if(w===null){var f=new Set;f.add(s),c.updateQueue=f}else w.add(s);if(!(c.mode&2)){if(c.effectTag|=64,a.effectTag&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var p=sn(1073741823,null);p.tag=2,un(a,p)}a.expirationTime=1073741823;break e}l=void 0,a=t;var m=o.pingCache;if(m===null?(m=o.pingCache=new vy,l=new Set,m.set(s,l)):(l=m.get(s),l===void 0&&(l=new Set,m.set(s,l))),!l.has(a)){l.add(a);var x=Sy.bind(null,o,s,a);s.then(x,x)}c.effectTag|=4096,c.expirationTime=t;break e}c=c.return}while(c!==null);l=Error((Vt(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`+vu(a))}Pe!==Qu&&(Pe=Jh),l=Wu(l,a),c=i;do{switch(c.tag){case 3:s=l,c.effectTag|=4096,c.expirationTime=t;var S=Gh(c,s,t);Ad(c,S);break e;case 1:s=l;var T=c.type,$=c.stateNode;if(!(c.effectTag&64)&&(typeof T.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(cn===null||!cn.has($)))){c.effectTag|=4096,c.expirationTime=t;var O=Kh(c,s,t);Ad(c,O);break e}}c=c.return}while(c!==null)}ie=im(ie)}catch(_){t=_;continue}break}while(!0)}function nm(){var e=Di.current;return Di.current=Oi,e===null?Oi:e}function rm(e,t){e<Ut&&2<e&&(Ut=e),t!==null&&e<ao&&2<e&&(ao=e,ji=t)}function la(e){e>lo&&(lo=e)}function xy(){for(;ie!==null;)ie=om(ie)}function wy(){for(;ie!==null&&!oy();)ie=om(ie)}function om(e){var t=am(e.alternate,e,qe);return e.memoizedProps=e.pendingProps,t===null&&(t=im(e)),qh.current=null,t}function im(e){ie=e;do{var t=ie.alternate;if(e=ie.return,ie.effectTag&2048){if(t=dy(ie),t!==null)return t.effectTag&=2047,t;e!==null&&(e.firstEffect=e.lastEffect=null,e.effectTag|=2048)}else{if(t=cy(t,ie,qe),qe===1||ie.childExpirationTime!==1){for(var n=0,r=ie.child;r!==null;){var o=r.expirationTime,i=r.childExpirationTime;o>n&&(n=o),i>n&&(n=i),r=r.sibling}ie.childExpirationTime=n}if(t!==null)return t;e!==null&&!(e.effectTag&2048)&&(e.firstEffect===null&&(e.firstEffect=ie.firstEffect),ie.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=ie.firstEffect),e.lastEffect=ie.lastEffect),1<ie.effectTag&&(e.lastEffect!==null?e.lastEffect.nextEffect=ie:e.firstEffect=ie,e.lastEffect=ie))}if(t=ie.sibling,t!==null)return t;ie=e}while(ie!==null);return Pe===Nn&&(Pe=Qu),null}function Ps(e){var t=e.expirationTime;return e=e.childExpirationTime,t>e?t:e}function Sn(e){var t=na();return mn(99,by.bind(null,e,t)),null}function by(e,t){do Sr();while(Kr!==null);if((re&(wt|Dt))!==Re)throw Error(M(327));var n=e.finishedWork,r=e.finishedExpirationTime;if(n===null)return null;if(e.finishedWork=null,e.finishedExpirationTime=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90,e.nextKnownPendingLevel=0;var o=Ps(n);if(e.firstPendingTime=o,r<=e.lastSuspendedTime?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:r<=e.firstSuspendedTime&&(e.firstSuspendedTime=r-1),r<=e.lastPingedTime&&(e.lastPingedTime=0),r<=e.lastExpiredTime&&(e.lastExpiredTime=0),e===et&&(ie=et=null,qe=0),1<n.effectTag?n.lastEffect!==null?(n.lastEffect.nextEffect=n,o=n.firstEffect):o=n:o=n.firstEffect,o!==null){var i=re;re|=Dt,qh.current=null,cl=Xo;var a=ad();if(ls(a)){if("selectionStart"in a)var l={start:a.selectionStart,end:a.selectionEnd};else e:{l=(l=a.ownerDocument)&&l.defaultView||window;var s=l.getSelection&&l.getSelection();if(s&&s.rangeCount!==0){l=s.anchorNode;var u=s.anchorOffset,d=s.focusNode;s=s.focusOffset;try{l.nodeType,d.nodeType}catch{l=null;break e}var c=0,v=-1,A=-1,g=0,w=0,f=a,p=null;t:for(;;){for(var m;f!==l||u!==0&&f.nodeType!==3||(v=c+u),f!==d||s!==0&&f.nodeType!==3||(A=c+s),f.nodeType===3&&(c+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===a)break t;if(p===l&&++g===u&&(v=c),p===d&&++w===s&&(A=c),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}l=v===-1||A===-1?null:{start:v,end:A}}else l=null}l=l||{start:0,end:0}}else l=null;dl={activeElementDetached:null,focusedElem:a,selectionRange:l},Xo=!1,Z=o;do try{Ay()}catch(N){if(Z===null)throw Error(M(330));Ln(Z,N),Z=Z.nextEffect}while(Z!==null);Z=o;do try{for(a=e,l=t;Z!==null;){var x=Z.effectTag;if(x&16&&Xr(Z.stateNode,""),x&128){var S=Z.alternate;if(S!==null){var T=S.ref;T!==null&&(typeof T=="function"?T(null):T.current=null)}}switch(x&1038){case 2:zd(Z),Z.effectTag&=-3;break;case 6:zd(Z),Z.effectTag&=-3,yl(Z.alternate,Z);break;case 1024:Z.effectTag&=-1025;break;case 1028:Z.effectTag&=-1025,yl(Z.alternate,Z);break;case 4:yl(Z.alternate,Z);break;case 8:u=Z,Qh(a,u,l),Vh(u)}Z=Z.nextEffect}}catch(N){if(Z===null)throw Error(M(330));Ln(Z,N),Z=Z.nextEffect}while(Z!==null);if(T=dl,S=ad(),x=T.focusedElem,l=T.selectionRange,S!==x&&x&&x.ownerDocument&&th(x.ownerDocument.documentElement,x)){for(l!==null&&ls(x)&&(S=l.start,T=l.end,T===void 0&&(T=S),"selectionStart"in x?(x.selectionStart=S,x.selectionEnd=Math.min(T,x.value.length)):(T=(S=x.ownerDocument||document)&&S.defaultView||window,T.getSelection&&(T=T.getSelection(),u=x.textContent.length,a=Math.min(l.start,u),l=l.end===void 0?a:Math.min(l.end,u),!T.extend&&a>l&&(u=l,l=a,a=u),u=id(x,a),d=id(x,l),u&&d&&(T.rangeCount!==1||T.anchorNode!==u.node||T.anchorOffset!==u.offset||T.focusNode!==d.node||T.focusOffset!==d.offset)&&(S=S.createRange(),S.setStart(u.node,u.offset),T.removeAllRanges(),a>l?(T.addRange(S),T.extend(d.node,d.offset)):(S.setEnd(d.node,d.offset),T.addRange(S)))))),S=[],T=x;T=T.parentNode;)T.nodeType===1&&S.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<S.length;x++)T=S[x],T.element.scrollLeft=T.left,T.element.scrollTop=T.top}Xo=!!cl,dl=cl=null,e.current=n,Z=o;do try{for(x=e;Z!==null;){var $=Z.effectTag;if($&36&&my(x,Z.alternate,Z),$&128){S=void 0;var O=Z.ref;if(O!==null){var _=Z.stateNode;switch(Z.tag){case 5:S=_;break;default:S=_}typeof O=="function"?O(S):O.current=S}}Z=Z.nextEffect}}catch(N){if(Z===null)throw Error(M(330));Ln(Z,N),Z=Z.nextEffect}while(Z!==null);Z=null,iy(),re=i}else e.current=n;if(Fi)Fi=!1,Kr=e,Br=t;else for(Z=o;Z!==null;)t=Z.nextEffect,Z.nextEffect=null,Z=t;if(t=e.firstPendingTime,t===0&&(cn=null),t===1073741823?e===Cs?qr++:(qr=0,Cs=e):qr=0,typeof Rs=="function"&&Rs(n.stateNode,r),tt(e),_i)throw _i=!1,e=Ts,Ts=null,e;return(re&Vu)!==Re||Nt(),null}function Ay(){for(;Z!==null;){var e=Z.effectTag;e&256&&hy(Z.alternate,Z),!(e&512)||Fi||(Fi=!0,Eh(97,function(){return Sr(),null})),Z=Z.nextEffect}}function Sr(){if(Br!==90){var e=97<Br?97:Br;return Br=90,mn(e,ky)}}function ky(){if(Kr===null)return!1;var e=Kr;if(Kr=null,(re&(wt|Dt))!==Re)throw Error(M(331));var t=re;for(re|=Dt,e=e.current.firstEffect;e!==null;){try{var n=e;if(n.effectTag&512)switch(n.tag){case 0:case 11:case 15:case 22:Hh(5,n),Wh(5,n)}}catch(r){if(e===null)throw Error(M(330));Ln(e,r)}n=e.nextEffect,e.nextEffect=null,e=n}return re=t,Nt(),!0}function Hd(e,t,n){t=Wu(n,t),t=Gh(e,t,1073741823),un(e,t),e=aa(e,1073741823),e!==null&&tt(e)}function Ln(e,t){if(e.tag===3)Hd(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){Hd(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){e=Wu(t,e),e=Kh(n,e,1073741823),un(n,e),n=aa(n,1073741823),n!==null&&tt(n);break}}n=n.return}}function Sy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),et===e&&qe===n?Pe===oa||Pe===Ni&&Ut===1073741823&&lt()-Gu<Yh?Pn(e,qe):Li=!0:lm(e,n)&&(t=e.lastPingedTime,t!==0&&t<n||(e.lastPingedTime=n,tt(e)))}function Ey(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=Ot(),t=jn(t,e,null)),e=aa(e,t),e!==null&&tt(e)}var am;am=function(e,t,n){var r=t.expirationTime;if(e!==null){var o=t.pendingProps;if(e.memoizedProps!==o||Ge.current)Ct=!0;else{if(r<n){switch(Ct=!1,t.tag){case 3:Nd(t),ml();break;case 5:if(Td(t),t.mode&4&&n!==1&&o.hidden)return t.expirationTime=t.childExpirationTime=1,null;break;case 1:Ke(t.type)&&ni(t);break;case 4:vs(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value,o=t.type._context,Ee(ki,o._currentValue),o._currentValue=r;break;case 13:if(t.memoizedState!==null)return r=t.child.childExpirationTime,r!==0&&r>=n?jd(e,t,n):(Ee(be,be.current&1),t=Wt(e,t,n),t!==null?t.sibling:null);Ee(be,be.current&1);break;case 19:if(r=t.childExpirationTime>=n,e.effectTag&64){if(r)return _d(e,t,n);t.effectTag|=64}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null),Ee(be,be.current),!r)return null}return Wt(e,t,n)}Ct=!1}}else Ct=!1;switch(t.expirationTime=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,o=hr(t,ze.current),lr(t,n),o=Bu(null,t,r,e,o,n),t.effectTag|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(r)){var i=!0;ni(t)}else i=!1;t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Nu(t);var a=r.getDerivedStateFromProps;typeof a=="function"&&Ti(t,r,a,e),o.updater=ra,t.stateNode=o,o._reactInternalFiber=t,ms(t,r,e,n),t=bs(null,t,r,!0,i,n)}else t.tag=0,Xe(null,t,o,n),t=t.child;return t;case 16:e:{if(o=t.elementType,e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,eg(o),o._status!==1)throw o._result;switch(o=o._result,t.type=o,i=t.tag=$y(o),e=gt(o,e),i){case 0:t=ws(null,t,o,e,n);break e;case 1:t=Id(null,t,o,e,n);break e;case 11:t=Od(null,t,o,e,n);break e;case 14:t=Dd(null,t,o,gt(o.type,e),r,n);break e}throw Error(M(306,o,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),ws(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),Id(e,t,r,o,n);case 3:if(Nd(t),r=t.updateQueue,e===null||r===null)throw Error(M(282));if(r=t.pendingProps,o=t.memoizedState,o=o!==null?o.element:null,ju(e,t),ro(t,r,null,n),r=t.memoizedState.element,r===o)ml(),t=Wt(e,t,n);else{if((o=t.stateNode.hydrate)&&(tn=ar(t.stateNode.containerInfo.firstChild),Ht=t,o=In=!0),o)for(n=Lu(t,null,r,n),t.child=n;n;)n.effectTag=n.effectTag&-3|1024,n=n.sibling;else Xe(e,t,r,n),ml();t=t.child}return t;case 5:return Td(t),e===null&&xs(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,ss(r,o)?a=null:i!==null&&ss(r,i)&&(t.effectTag|=16),Mh(e,t),t.mode&4&&n!==1&&o.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):(Xe(e,t,a,n),t=t.child),t;case 6:return e===null&&xs(t),null;case 13:return jd(e,t,n);case 4:return vs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mr(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),Od(e,t,r,o,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value;var l=t.type._context;if(Ee(ki,l._currentValue),l._currentValue=i,a!==null)if(l=a.value,i=Mn(l,i)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(l,i):1073741823)|0,i===0){if(a.children===o.children&&!Ge.current){t=Wt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){a=l.child;for(var u=s.firstContext;u!==null;){if(u.context===r&&u.observedBits&i){l.tag===1&&(u=sn(n,null),u.tag=2,un(l,u)),l.expirationTime<n&&(l.expirationTime=n),u=l.alternate,u!==null&&u.expirationTime<n&&(u.expirationTime=n),Ch(l.return,n),s.expirationTime<n&&(s.expirationTime=n);break}u=u.next}}else a=l.tag===10&&l.type===t.type?null:l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}Xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,i=t.pendingProps,r=i.children,lr(t,n),o=dt(o,i.unstable_observedBits),r=r(o),t.effectTag|=1,Xe(e,t,r,n),t.child;case 14:return o=t.type,i=gt(o,t.pendingProps),i=gt(o.type,i),Dd(e,t,o,i,r,n);case 15:return Fh(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,Ke(r)?(e=!0,ni(t)):e=!1,lr(t,n),Ph(t,r,o),ms(t,r,o,n),bs(null,t,r,!0,e,n);case 19:return _d(e,t,n)}throw Error(M(156,t.tag))};var Rs=null,Os=null;function Ty(e){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);Rs=function(r){try{t.onCommitFiberRoot(n,r,void 0,(r.current.effectTag&64)===64)}catch{}},Os=function(r){try{t.onCommitFiberUnmount(n,r)}catch{}}}catch{}return!0}function Cy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function $t(e,t,n,r){return new Cy(e,t,n,r)}function Ku(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $y(e){if(typeof e=="function")return Ku(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hu)return 11;if(e===mu)return 14}return 2}function zn(e,t){var n=e.alternate;return n===null?(n=$t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=e.childExpirationTime,n.expirationTime=e.expirationTime,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{expirationTime:t.expirationTime,firstContext:t.firstContext,responders:t.responders},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function si(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Ku(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case En:return nn(n.children,o,i,t);case Zv:a=8,o|=7;break;case Ep:a=8,o|=1;break;case qo:return e=$t(12,n,t,o|8),e.elementType=qo,e.type=qo,e.expirationTime=i,e;case Jo:return e=$t(13,n,t,o),e.type=Jo,e.elementType=Jo,e.expirationTime=i,e;case Gl:return e=$t(19,n,t,o),e.elementType=Gl,e.expirationTime=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Tp:a=10;break e;case Cp:a=9;break e;case hu:a=11;break e;case mu:a=14;break e;case $p:a=16,r=null;break e;case Pp:a=22;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=$t(a,n,t,o),t.elementType=e,t.type=r,t.expirationTime=i,t}function nn(e,t,n,r){return e=$t(7,e,r,t),e.expirationTime=n,e}function xl(e,t,n){return e=$t(6,e,null,t),e.expirationTime=n,e}function wl(e,t,n){return t=$t(4,e.children!==null?e.children:[],e.key,t),t.expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Py(e,t,n){this.tag=t,this.current=null,this.containerInfo=e,this.pingCache=this.pendingChildren=null,this.finishedExpirationTime=0,this.finishedWork=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=90,this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}function lm(e,t){var n=e.firstSuspendedTime;return e=e.lastSuspendedTime,n!==0&&n>=t&&e<=t}function Rn(e,t){var n=e.firstSuspendedTime,r=e.lastSuspendedTime;n<t&&(e.firstSuspendedTime=t),(r>t||n===0)&&(e.lastSuspendedTime=t),t<=e.lastPingedTime&&(e.lastPingedTime=0),t<=e.lastExpiredTime&&(e.lastExpiredTime=0)}function sm(e,t){t>e.firstPendingTime&&(e.firstPendingTime=t);var n=e.firstSuspendedTime;n!==0&&(t>=n?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:t>=e.lastSuspendedTime&&(e.lastSuspendedTime=t+1),t>e.nextKnownPendingLevel&&(e.nextKnownPendingLevel=t))}function Ds(e,t){var n=e.lastExpiredTime;(n===0||n>t)&&(e.lastExpiredTime=t)}function Mi(e,t,n,r){var o=t.current,i=Ot(),a=Gr.suspense;i=jn(i,o,a);e:if(n){n=n._reactInternalFiber;t:{if(Vn(n)!==n||n.tag!==1)throw Error(M(170));var l=n;do{switch(l.tag){case 3:l=l.stateNode.context;break t;case 1:if(Ke(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break t}}l=l.return}while(l!==null);throw Error(M(171))}if(n.tag===1){var s=n.type;if(Ke(s)){n=gh(n,s,l);break e}}n=l}else n=hn;return t.context===null?t.context=n:t.pendingContext=n,t=sn(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),un(o,t),dn(o,i),i}function bl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wd(e,t){e=e.memoizedState,e!==null&&e.dehydrated!==null&&e.retryTime<t&&(e.retryTime=t)}function qu(e,t){Wd(e,t),(e=e.alternate)&&Wd(e,t)}function Ju(e,t,n){n=n!=null&&n.hydrate===!0;var r=new Py(e,t,n),o=$t(3,null,null,t===2?7:t===1?3:0);r.current=o,o.stateNode=r,Nu(o),e[go]=r.current,n&&t!==0&&ag(e,e.nodeType===9?e:e.ownerDocument),this._internalRoot=r}Ju.prototype.render=function(e){Mi(e,this._internalRoot,null,null)};Ju.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Mi(null,e,null,function(){t[go]=null})};function ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ry(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Ju(e,0,t?{hydrate:!0}:void 0)}function sa(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i._internalRoot;if(typeof o=="function"){var l=o;o=function(){var u=bl(a);l.call(u)}}Mi(t,a,e,o)}else{if(i=n._reactRootContainer=Ry(n,r),a=i._internalRoot,typeof o=="function"){var s=o;o=function(){var u=bl(a);s.call(u)}}em(function(){Mi(t,a,e,o)})}return bl(a)}function Oy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}Kp=function(e){if(e.tag===13){var t=oi(Ot(),150,100);dn(e,t),qu(e,t)}};wu=function(e){e.tag===13&&(dn(e,3),qu(e,3))};qp=function(e){if(e.tag===13){var t=Ot();t=jn(t,e,null),dn(e,t),qu(e,t)}};Ql=function(e,t,n){switch(t){case"input":if(ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Cu(r);if(!o)throw Error(M(90));Op(r),ql(r,o)}}}break;case"textarea":Ip(e,n);break;case"select":t=n.value,t!=null&&ir(e,!!n.multiple,t,!1)}};su=Zh;Ap=function(e,t,n,r,o){var i=re;re|=4;try{return mn(98,e.bind(null,t,n,r,o))}finally{re=i,re===Re&&Nt()}};uu=function(){(re&(1|wt|Dt))===Re&&(yy(),Sr())};kp=function(e,t){var n=re;re|=2;try{return e(t)}finally{re=n,re===Re&&Nt()}};function um(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ko(t))throw Error(M(200));return Oy(e,t,null,n)}var Dy={Events:[xo,Fn,Cu,xp,Vl,pr,function(e){yu(e,xg)},wp,bp,Zi,Xi,Sr,{current:!1}]};(function(e){var t=e.findFiberByHostInstance;return Ty(Ue({},e,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Hp(n),n===null?null:n.stateNode},findFiberByHostInstance:function(n){return t?t(n):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:yo,bundleType:0,version:"16.14.0",rendererPackageName:"react-dom"});pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dy;pt.createPortal=um;pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternalFiber;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):Error(M(268,Object.keys(e)));return e=Hp(t),e=e===null?null:e.stateNode,e};pt.flushSync=function(e,t){if((re&(wt|Dt))!==Re)throw Error(M(187));var n=re;re|=1;try{return mn(99,e.bind(null,t))}finally{re=n,Nt()}};pt.hydrate=function(e,t,n){if(!ko(t))throw Error(M(200));return sa(null,e,t,!0,n)};pt.render=function(e,t,n){if(!ko(t))throw Error(M(200));return sa(null,e,t,!1,n)};pt.unmountComponentAtNode=function(e){if(!ko(e))throw Error(M(40));return e._reactRootContainer?(em(function(){sa(null,null,e,!1,function(){e._reactRootContainer=null,e[go]=null})}),!0):!1};pt.unstable_batchedUpdates=Zh;pt.unstable_createPortal=function(e,t){return um(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};pt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ko(n))throw Error(M(200));if(e==null||e._reactInternalFiber===void 0)throw Error(M(38));return sa(e,t,n,!1,r)};pt.version="16.14.0";function cm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cm)}catch(e){console.error(e)}}cm(),pp.exports=pt;var dm=pp.exports;const Iy=Fe(dm);function Is(e,t){return Is=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Is(e,t)}function ft(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Is(e,t)}var fm={exports:{}},Ny="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",jy=Ny,Ly=jy;function pm(){}function hm(){}hm.resetWarningCache=pm;var _y=function(){function e(r,o,i,a,l,s){if(s!==Ly){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:hm,resetWarningCache:pm};return n.PropTypes=n,n};fm.exports=_y();var Fy=fm.exports;const Et=Fe(Fy);function Ce(){return Ce=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ce.apply(this,arguments)}function Uo(e){return e.charAt(0)==="/"}function Al(e,t){for(var n=t,r=n+1,o=e.length;r<o;n+=1,r+=1)e[n]=e[r];e.pop()}function My(e,t){t===void 0&&(t="");var n=e&&e.split("/")||[],r=t&&t.split("/")||[],o=e&&Uo(e),i=t&&Uo(t),a=o||i;if(e&&Uo(e)?r=n:n.length&&(r.pop(),r=r.concat(n)),!r.length)return"/";var l;if(r.length){var s=r[r.length-1];l=s==="."||s===".."||s===""}else l=!1;for(var u=0,d=r.length;d>=0;d--){var c=r[d];c==="."?Al(r,d):c===".."?(Al(r,d),u++):u&&(Al(r,d),u--)}if(!a)for(;u--;u)r.unshift("..");a&&r[0]!==""&&(!r[0]||!Uo(r[0]))&&r.unshift("");var v=r.join("/");return l&&v.substr(-1)!=="/"&&(v+="/"),v}var By="Invariant failed";function wn(e,t){throw new Error(By)}function Jr(e){return e.charAt(0)==="/"?e:"/"+e}function Vd(e){return e.charAt(0)==="/"?e.substr(1):e}function zy(e,t){return e.toLowerCase().indexOf(t.toLowerCase())===0&&"/?#".indexOf(e.charAt(t.length))!==-1}function mm(e,t){return zy(e,t)?e.substr(t.length):e}function vm(e){return e.charAt(e.length-1)==="/"?e.slice(0,-1):e}function Uy(e){var t=e||"/",n="",r="",o=t.indexOf("#");o!==-1&&(r=t.substr(o),t=t.substr(0,o));var i=t.indexOf("?");return i!==-1&&(n=t.substr(i),t=t.substr(0,i)),{pathname:t,search:n==="?"?"":n,hash:r==="#"?"":r}}function Qe(e){var t=e.pathname,n=e.search,r=e.hash,o=t||"/";return n&&n!=="?"&&(o+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(o+=r.charAt(0)==="#"?r:"#"+r),o}function Ze(e,t,n,r){var o;typeof e=="string"?(o=Uy(e),o.state=t):(o=Ce({},e),o.pathname===void 0&&(o.pathname=""),o.search?o.search.charAt(0)!=="?"&&(o.search="?"+o.search):o.search="",o.hash?o.hash.charAt(0)!=="#"&&(o.hash="#"+o.hash):o.hash="",t!==void 0&&o.state===void 0&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(i){throw i instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):i}return n&&(o.key=n),r?o.pathname?o.pathname.charAt(0)!=="/"&&(o.pathname=My(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function Yu(){var e=null;function t(a){return e=a,function(){e===a&&(e=null)}}function n(a,l,s,u){if(e!=null){var d=typeof e=="function"?e(a,l):e;typeof d=="string"?typeof s=="function"?s(d,u):u(!0):u(d!==!1)}else u(!0)}var r=[];function o(a){var l=!0;function s(){l&&a.apply(void 0,arguments)}return r.push(s),function(){l=!1,r=r.filter(function(u){return u!==s})}}function i(){for(var a=arguments.length,l=new Array(a),s=0;s<a;s++)l[s]=arguments[s];r.forEach(function(u){return u.apply(void 0,l)})}return{setPrompt:t,confirmTransitionTo:n,appendListener:o,notifyListeners:i}}var gm=!!(typeof window<"u"&&window.document&&window.document.createElement);function ym(e,t){t(window.confirm(e))}function Hy(){var e=window.navigator.userAgent;return(e.indexOf("Android 2.")!==-1||e.indexOf("Android 4.0")!==-1)&&e.indexOf("Mobile Safari")!==-1&&e.indexOf("Chrome")===-1&&e.indexOf("Windows Phone")===-1?!1:window.history&&"pushState"in window.history}function Wy(){return window.navigator.userAgent.indexOf("Trident")===-1}function Vy(){return window.navigator.userAgent.indexOf("Firefox")===-1}function Qy(e){return e.state===void 0&&navigator.userAgent.indexOf("CriOS")===-1}var Qd="popstate",Gd="hashchange";function Kd(){try{return window.history.state||{}}catch{return{}}}function Gy(e){e===void 0&&(e={}),gm||wn();var t=window.history,n=Hy(),r=!Wy(),o=e,i=o.forceRefresh,a=i===void 0?!1:i,l=o.getUserConfirmation,s=l===void 0?ym:l,u=o.keyLength,d=u===void 0?6:u,c=e.basename?vm(Jr(e.basename)):"";function v(z){var B=z||{},Q=B.key,D=B.state,R=window.location,b=R.pathname,P=R.search,y=R.hash,F=b+P+y;return c&&(F=mm(F,c)),Ze(F,D,Q)}function A(){return Math.random().toString(36).substr(2,d)}var g=Yu();function w(z){Ce(U,z),U.length=t.length,g.notifyListeners(U.location,U.action)}function f(z){Qy(z)||x(v(z.state))}function p(){x(v(Kd()))}var m=!1;function x(z){if(m)m=!1,w();else{var B="POP";g.confirmTransitionTo(z,B,s,function(Q){Q?w({action:B,location:z}):S(z)})}}function S(z){var B=U.location,Q=$.indexOf(B.key);Q===-1&&(Q=0);var D=$.indexOf(z.key);D===-1&&(D=0);var R=Q-D;R&&(m=!0,q(R))}var T=v(Kd()),$=[T.key];function O(z){return c+Qe(z)}function _(z,B){var Q="PUSH",D=Ze(z,B,A(),U.location);g.confirmTransitionTo(D,Q,s,function(R){if(R){var b=O(D),P=D.key,y=D.state;if(n)if(t.pushState({key:P,state:y},null,b),a)window.location.href=b;else{var F=$.indexOf(U.location.key),I=$.slice(0,F+1);I.push(D.key),$=I,w({action:Q,location:D})}else window.location.href=b}})}function N(z,B){var Q="REPLACE",D=Ze(z,B,A(),U.location);g.confirmTransitionTo(D,Q,s,function(R){if(R){var b=O(D),P=D.key,y=D.state;if(n)if(t.replaceState({key:P,state:y},null,b),a)window.location.replace(b);else{var F=$.indexOf(U.location.key);F!==-1&&($[F]=D.key),w({action:Q,location:D})}else window.location.replace(b)}})}function q(z){t.go(z)}function J(){q(-1)}function X(){q(1)}var ae=0;function Y(z){ae+=z,ae===1&&z===1?(window.addEventListener(Qd,f),r&&window.addEventListener(Gd,p)):ae===0&&(window.removeEventListener(Qd,f),r&&window.removeEventListener(Gd,p))}var V=!1;function se(z){z===void 0&&(z=!1);var B=g.setPrompt(z);return V||(Y(1),V=!0),function(){return V&&(V=!1,Y(-1)),B()}}function te(z){var B=g.appendListener(z);return Y(1),function(){Y(-1),B()}}var U={length:t.length,action:"POP",location:T,createHref:O,push:_,replace:N,go:q,goBack:J,goForward:X,block:se,listen:te};return U}var qd="hashchange",Ky={hashbang:{encodePath:function(t){return t.charAt(0)==="!"?t:"!/"+Vd(t)},decodePath:function(t){return t.charAt(0)==="!"?t.substr(1):t}},noslash:{encodePath:Vd,decodePath:Jr},slash:{encodePath:Jr,decodePath:Jr}};function xm(e){var t=e.indexOf("#");return t===-1?e:e.slice(0,t)}function jr(){var e=window.location.href,t=e.indexOf("#");return t===-1?"":e.substring(t+1)}function qy(e){window.location.hash=e}function kl(e){window.location.replace(xm(window.location.href)+"#"+e)}function Jy(e){e===void 0&&(e={}),gm||wn();var t=window.history;Vy();var n=e,r=n.getUserConfirmation,o=r===void 0?ym:r,i=n.hashType,a=i===void 0?"slash":i,l=e.basename?vm(Jr(e.basename)):"",s=Ky[a],u=s.encodePath,d=s.decodePath;function c(){var B=d(jr());return l&&(B=mm(B,l)),Ze(B)}var v=Yu();function A(B){Ce(z,B),z.length=t.length,v.notifyListeners(z.location,z.action)}var g=!1,w=null;function f(B,Q){return B.pathname===Q.pathname&&B.search===Q.search&&B.hash===Q.hash}function p(){var B=jr(),Q=u(B);if(B!==Q)kl(Q);else{var D=c(),R=z.location;if(!g&&f(R,D)||w===Qe(D))return;w=null,m(D)}}function m(B){if(g)g=!1,A();else{var Q="POP";v.confirmTransitionTo(B,Q,o,function(D){D?A({action:Q,location:B}):x(B)})}}function x(B){var Q=z.location,D=O.lastIndexOf(Qe(Q));D===-1&&(D=0);var R=O.lastIndexOf(Qe(B));R===-1&&(R=0);var b=D-R;b&&(g=!0,J(b))}var S=jr(),T=u(S);S!==T&&kl(T);var $=c(),O=[Qe($)];function _(B){var Q=document.querySelector("base"),D="";return Q&&Q.getAttribute("href")&&(D=xm(window.location.href)),D+"#"+u(l+Qe(B))}function N(B,Q){var D="PUSH",R=Ze(B,void 0,void 0,z.location);v.confirmTransitionTo(R,D,o,function(b){if(b){var P=Qe(R),y=u(l+P),F=jr()!==y;if(F){w=P,qy(y);var I=O.lastIndexOf(Qe(z.location)),L=O.slice(0,I+1);L.push(P),O=L,A({action:D,location:R})}else A()}})}function q(B,Q){var D="REPLACE",R=Ze(B,void 0,void 0,z.location);v.confirmTransitionTo(R,D,o,function(b){if(b){var P=Qe(R),y=u(l+P),F=jr()!==y;F&&(w=P,kl(y));var I=O.indexOf(Qe(z.location));I!==-1&&(O[I]=P),A({action:D,location:R})}})}function J(B){t.go(B)}function X(){J(-1)}function ae(){J(1)}var Y=0;function V(B){Y+=B,Y===1&&B===1?window.addEventListener(qd,p):Y===0&&window.removeEventListener(qd,p)}var se=!1;function te(B){B===void 0&&(B=!1);var Q=v.setPrompt(B);return se||(V(1),se=!0),function(){return se&&(se=!1,V(-1)),Q()}}function U(B){var Q=v.appendListener(B);return V(1),function(){V(-1),Q()}}var z={length:t.length,action:"POP",location:$,createHref:_,push:N,replace:q,go:J,goBack:X,goForward:ae,block:te,listen:U};return z}function Jd(e,t,n){return Math.min(Math.max(e,t),n)}function Yy(e){e===void 0&&(e={});var t=e,n=t.getUserConfirmation,r=t.initialEntries,o=r===void 0?["/"]:r,i=t.initialIndex,a=i===void 0?0:i,l=t.keyLength,s=l===void 0?6:l,u=Yu();function d(_){Ce(O,_),O.length=O.entries.length,u.notifyListeners(O.location,O.action)}function c(){return Math.random().toString(36).substr(2,s)}var v=Jd(a,0,o.length-1),A=o.map(function(_){return typeof _=="string"?Ze(_,void 0,c()):Ze(_,void 0,_.key||c())}),g=Qe;function w(_,N){var q="PUSH",J=Ze(_,N,c(),O.location);u.confirmTransitionTo(J,q,n,function(X){if(X){var ae=O.index,Y=ae+1,V=O.entries.slice(0);V.length>Y?V.splice(Y,V.length-Y,J):V.push(J),d({action:q,location:J,index:Y,entries:V})}})}function f(_,N){var q="REPLACE",J=Ze(_,N,c(),O.location);u.confirmTransitionTo(J,q,n,function(X){X&&(O.entries[O.index]=J,d({action:q,location:J}))})}function p(_){var N=Jd(O.index+_,0,O.entries.length-1),q="POP",J=O.entries[N];u.confirmTransitionTo(J,q,n,function(X){X?d({action:q,location:J,index:N}):d()})}function m(){p(-1)}function x(){p(1)}function S(_){var N=O.index+_;return N>=0&&N<O.entries.length}function T(_){return _===void 0&&(_=!1),u.setPrompt(_)}function $(_){return u.appendListener(_)}var O={length:A.length,action:"POP",location:A[v],index:v,entries:A,createHref:g,push:w,replace:f,go:p,goBack:m,goForward:x,canGo:S,block:T,listen:$};return O}var Er={exports:{}},Xy=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},Bi=Xy;Er.exports=Am;Er.exports.parse=Xu;Er.exports.compile=e1;Er.exports.tokensToFunction=wm;Er.exports.tokensToRegExp=bm;var Zy=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function Xu(e,t){for(var n=[],r=0,o=0,i="",a=t&&t.delimiter||"/",l;(l=Zy.exec(e))!=null;){var s=l[0],u=l[1],d=l.index;if(i+=e.slice(o,d),o=d+s.length,u){i+=u[1];continue}var c=e[o],v=l[2],A=l[3],g=l[4],w=l[5],f=l[6],p=l[7];i&&(n.push(i),i="");var m=v!=null&&c!=null&&c!==v,x=f==="+"||f==="*",S=f==="?"||f==="*",T=l[2]||a,$=g||w;n.push({name:A||r++,prefix:v||"",delimiter:T,optional:S,repeat:x,partial:m,asterisk:!!p,pattern:$?r1($):p?".*":"[^"+ui(T)+"]+?"})}return o<e.length&&(i+=e.substr(o)),i&&n.push(i),n}function e1(e,t){return wm(Xu(e,t),t)}function t1(e){return encodeURI(e).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function n1(e){return encodeURI(e).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function wm(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)typeof e[r]=="object"&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",ec(t)));return function(o,i){for(var a="",l=o||{},s=i||{},u=s.pretty?t1:encodeURIComponent,d=0;d<e.length;d++){var c=e[d];if(typeof c=="string"){a+=c;continue}var v=l[c.name],A;if(v==null)if(c.optional){c.partial&&(a+=c.prefix);continue}else throw new TypeError('Expected "'+c.name+'" to be defined');if(Bi(v)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(v)+"`");if(v.length===0){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var g=0;g<v.length;g++){if(A=u(v[g]),!n[d].test(A))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(A)+"`");a+=(g===0?c.prefix:c.delimiter)+A}continue}if(A=c.asterisk?n1(v):u(v),!n[d].test(A))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+A+'"');a+=c.prefix+A}return a}}function ui(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function r1(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function Zu(e,t){return e.keys=t,e}function ec(e){return e&&e.sensitive?"":"i"}function o1(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return Zu(e,t)}function i1(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(Am(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",ec(n));return Zu(i,t)}function a1(e,t,n){return bm(Xu(e,n),t,n)}function bm(e,t,n){Bi(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",a=0;a<e.length;a++){var l=e[a];if(typeof l=="string")i+=ui(l);else{var s=ui(l.prefix),u="(?:"+l.pattern+")";t.push(l),l.repeat&&(u+="(?:"+s+u+")*"),l.optional?l.partial?u=s+"("+u+")?":u="(?:"+s+"("+u+"))?":u=s+"("+u+")",i+=u}}var d=ui(n.delimiter||"/"),c=i.slice(-d.length)===d;return r||(i=(c?i.slice(0,-d.length):i)+"(?:"+d+"(?=$))?"),o?i+="$":i+=r&&c?"":"(?="+d+"|$)",Zu(new RegExp("^"+i,ec(n)),t)}function Am(e,t,n){return Bi(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?o1(e,t):Bi(e)?i1(e,t,n):a1(e,t,n)}var l1=Er.exports;const s1=Fe(l1);var ve={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oe=typeof Symbol=="function"&&Symbol.for,tc=Oe?Symbol.for("react.element"):60103,nc=Oe?Symbol.for("react.portal"):60106,ua=Oe?Symbol.for("react.fragment"):60107,ca=Oe?Symbol.for("react.strict_mode"):60108,da=Oe?Symbol.for("react.profiler"):60114,fa=Oe?Symbol.for("react.provider"):60109,pa=Oe?Symbol.for("react.context"):60110,rc=Oe?Symbol.for("react.async_mode"):60111,ha=Oe?Symbol.for("react.concurrent_mode"):60111,ma=Oe?Symbol.for("react.forward_ref"):60112,va=Oe?Symbol.for("react.suspense"):60113,u1=Oe?Symbol.for("react.suspense_list"):60120,ga=Oe?Symbol.for("react.memo"):60115,ya=Oe?Symbol.for("react.lazy"):60116,c1=Oe?Symbol.for("react.block"):60121,d1=Oe?Symbol.for("react.fundamental"):60117,f1=Oe?Symbol.for("react.responder"):60118,p1=Oe?Symbol.for("react.scope"):60119;function rt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case tc:switch(e=e.type,e){case rc:case ha:case ua:case da:case ca:case va:return e;default:switch(e=e&&e.$$typeof,e){case pa:case ma:case ya:case ga:case fa:return e;default:return t}}case nc:return t}}}function km(e){return rt(e)===ha}ve.AsyncMode=rc;ve.ConcurrentMode=ha;ve.ContextConsumer=pa;ve.ContextProvider=fa;ve.Element=tc;ve.ForwardRef=ma;ve.Fragment=ua;ve.Lazy=ya;ve.Memo=ga;ve.Portal=nc;ve.Profiler=da;ve.StrictMode=ca;ve.Suspense=va;ve.isAsyncMode=function(e){return km(e)||rt(e)===rc};ve.isConcurrentMode=km;ve.isContextConsumer=function(e){return rt(e)===pa};ve.isContextProvider=function(e){return rt(e)===fa};ve.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===tc};ve.isForwardRef=function(e){return rt(e)===ma};ve.isFragment=function(e){return rt(e)===ua};ve.isLazy=function(e){return rt(e)===ya};ve.isMemo=function(e){return rt(e)===ga};ve.isPortal=function(e){return rt(e)===nc};ve.isProfiler=function(e){return rt(e)===da};ve.isStrictMode=function(e){return rt(e)===ca};ve.isSuspense=function(e){return rt(e)===va};ve.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ua||e===ha||e===da||e===ca||e===va||e===u1||typeof e=="object"&&e!==null&&(e.$$typeof===ya||e.$$typeof===ga||e.$$typeof===fa||e.$$typeof===pa||e.$$typeof===ma||e.$$typeof===d1||e.$$typeof===f1||e.$$typeof===p1||e.$$typeof===c1)};ve.typeOf=rt;function bn(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var Sm={exports:{}},pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var De=typeof Symbol=="function"&&Symbol.for,oc=De?Symbol.for("react.element"):60103,ic=De?Symbol.for("react.portal"):60106,xa=De?Symbol.for("react.fragment"):60107,wa=De?Symbol.for("react.strict_mode"):60108,ba=De?Symbol.for("react.profiler"):60114,Aa=De?Symbol.for("react.provider"):60109,ka=De?Symbol.for("react.context"):60110,ac=De?Symbol.for("react.async_mode"):60111,Sa=De?Symbol.for("react.concurrent_mode"):60111,Ea=De?Symbol.for("react.forward_ref"):60112,Ta=De?Symbol.for("react.suspense"):60113,h1=De?Symbol.for("react.suspense_list"):60120,Ca=De?Symbol.for("react.memo"):60115,$a=De?Symbol.for("react.lazy"):60116,m1=De?Symbol.for("react.block"):60121,v1=De?Symbol.for("react.fundamental"):60117,g1=De?Symbol.for("react.responder"):60118,y1=De?Symbol.for("react.scope"):60119;function ot(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case oc:switch(e=e.type,e){case ac:case Sa:case xa:case ba:case wa:case Ta:return e;default:switch(e=e&&e.$$typeof,e){case ka:case Ea:case $a:case Ca:case Aa:return e;default:return t}}case ic:return t}}}function Em(e){return ot(e)===Sa}pe.AsyncMode=ac;pe.ConcurrentMode=Sa;pe.ContextConsumer=ka;pe.ContextProvider=Aa;pe.Element=oc;pe.ForwardRef=Ea;pe.Fragment=xa;pe.Lazy=$a;pe.Memo=Ca;pe.Portal=ic;pe.Profiler=ba;pe.StrictMode=wa;pe.Suspense=Ta;pe.isAsyncMode=function(e){return Em(e)||ot(e)===ac};pe.isConcurrentMode=Em;pe.isContextConsumer=function(e){return ot(e)===ka};pe.isContextProvider=function(e){return ot(e)===Aa};pe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===oc};pe.isForwardRef=function(e){return ot(e)===Ea};pe.isFragment=function(e){return ot(e)===xa};pe.isLazy=function(e){return ot(e)===$a};pe.isMemo=function(e){return ot(e)===Ca};pe.isPortal=function(e){return ot(e)===ic};pe.isProfiler=function(e){return ot(e)===ba};pe.isStrictMode=function(e){return ot(e)===wa};pe.isSuspense=function(e){return ot(e)===Ta};pe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===xa||e===Sa||e===ba||e===wa||e===Ta||e===h1||typeof e=="object"&&e!==null&&(e.$$typeof===$a||e.$$typeof===Ca||e.$$typeof===Aa||e.$$typeof===ka||e.$$typeof===Ea||e.$$typeof===v1||e.$$typeof===g1||e.$$typeof===y1||e.$$typeof===m1)};pe.typeOf=ot;Sm.exports=pe;var x1=Sm.exports,lc=x1,w1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},b1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},A1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sc={};sc[lc.ForwardRef]=A1;sc[lc.Memo]=Tm;function Yd(e){return lc.isMemo(e)?Tm:sc[e.$$typeof]||w1}var k1=Object.defineProperty,S1=Object.getOwnPropertyNames,Xd=Object.getOwnPropertySymbols,E1=Object.getOwnPropertyDescriptor,T1=Object.getPrototypeOf,Zd=Object.prototype;function Cm(e,t,n){if(typeof t!="string"){if(Zd){var r=T1(t);r&&r!==Zd&&Cm(e,r,n)}var o=S1(t);Xd&&(o=o.concat(Xd(t)));for(var i=Yd(e),a=Yd(t),l=0;l<o.length;++l){var s=o[l];if(!b1[s]&&!(n&&n[s])&&!(a&&a[s])&&!(i&&i[s])){var u=E1(t,s);try{k1(e,s,u)}catch{}}}}return e}var C1=Cm;const zi=Fe(C1);var Sl=1073741823,ef=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{};function $1(){var e="__global_unique_id__";return ef[e]=(ef[e]||0)+1}function P1(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function R1(e){var t=[];return{on:function(r){t.push(r)},off:function(r){t=t.filter(function(o){return o!==r})},get:function(){return e},set:function(r,o){e=r,t.forEach(function(i){return i(e,o)})}}}function O1(e){return Array.isArray(e)?e[0]:e}function D1(e,t){var n,r,o="__create-react-context-"+$1()+"__",i=function(l){ft(s,l);function s(){for(var d,c=arguments.length,v=new Array(c),A=0;A<c;A++)v[A]=arguments[A];return d=l.call.apply(l,[this].concat(v))||this,d.emitter=R1(d.props.value),d}var u=s.prototype;return u.getChildContext=function(){var c;return c={},c[o]=this.emitter,c},u.componentWillReceiveProps=function(c){if(this.props.value!==c.value){var v=this.props.value,A=c.value,g;P1(v,A)?g=0:(g=typeof t=="function"?t(v,A):Sl,g|=0,g!==0&&this.emitter.set(c.value,g))}},u.render=function(){return this.props.children},s}(k.Component);i.childContextTypes=(n={},n[o]=Et.object.isRequired,n);var a=function(l){ft(s,l);function s(){for(var d,c=arguments.length,v=new Array(c),A=0;A<c;A++)v[A]=arguments[A];return d=l.call.apply(l,[this].concat(v))||this,d.observedBits=void 0,d.state={value:d.getValue()},d.onUpdate=function(g,w){var f=d.observedBits|0;f&w&&d.setState({value:d.getValue()})},d}var u=s.prototype;return u.componentWillReceiveProps=function(c){var v=c.observedBits;this.observedBits=v??Sl},u.componentDidMount=function(){this.context[o]&&this.context[o].on(this.onUpdate);var c=this.props.observedBits;this.observedBits=c??Sl},u.componentWillUnmount=function(){this.context[o]&&this.context[o].off(this.onUpdate)},u.getValue=function(){return this.context[o]?this.context[o].get():e},u.render=function(){return O1(this.props.children)(this.state.value)},s}(k.Component);return a.contextTypes=(r={},r[o]=Et.object,r),{Provider:i,Consumer:a}}var I1=k.createContext||D1,$m=function(t){var n=I1();return n.displayName=t,n},N1=$m("Router-History"),vn=$m("Router"),Pa=function(e){ft(t,e),t.computeRootMatch=function(o){return{path:"/",url:"/",params:{},isExact:o==="/"}};function t(r){var o;return o=e.call(this,r)||this,o.state={location:r.history.location},o._isMounted=!1,o._pendingLocation=null,r.staticContext||(o.unlisten=r.history.listen(function(i){o._pendingLocation=i})),o}var n=t.prototype;return n.componentDidMount=function(){var o=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen(function(i){o._isMounted&&o.setState({location:i})})),this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},n.render=function(){return k.createElement(vn.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},k.createElement(N1.Provider,{children:this.props.children||null,value:this.props.history}))},t}(k.Component);k.Component;k.Component;var tf={},j1=1e4,nf=0;function L1(e,t){var n=""+t.end+t.strict+t.sensitive,r=tf[n]||(tf[n]={});if(r[e])return r[e];var o=[],i=s1(e,o,t),a={regexp:i,keys:o};return nf<j1&&(r[e]=a,nf++),a}function uc(e,t){t===void 0&&(t={}),(typeof t=="string"||Array.isArray(t))&&(t={path:t});var n=t,r=n.path,o=n.exact,i=o===void 0?!1:o,a=n.strict,l=a===void 0?!1:a,s=n.sensitive,u=s===void 0?!1:s,d=[].concat(r);return d.reduce(function(c,v){if(!v&&v!=="")return null;if(c)return c;var A=L1(v,{end:i,strict:l,sensitive:u}),g=A.regexp,w=A.keys,f=g.exec(e);if(!f)return null;var p=f[0],m=f.slice(1),x=e===p;return i&&!x?null:{path:v,url:v==="/"&&p===""?"/":p,isExact:x,params:w.reduce(function(S,T,$){return S[T.name]=m[$],S},{})}},null)}function _1(e){return k.Children.count(e)===0}var An=function(e){ft(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.render=function(){var o=this;return k.createElement(vn.Consumer,null,function(i){i||wn();var a=o.props.location||i.location,l=o.props.computedMatch?o.props.computedMatch:o.props.path?uc(a.pathname,o.props):i.match,s=Ce({},i,{location:a,match:l}),u=o.props,d=u.children,c=u.component,v=u.render;return Array.isArray(d)&&_1(d)&&(d=null),k.createElement(vn.Provider,{value:s},s.match?d?typeof d=="function"?d(s):d:c?k.createElement(c,s):v?v(s):null:typeof d=="function"?d(s):null)})},t}(k.Component);function cc(e){return e.charAt(0)==="/"?e:"/"+e}function F1(e,t){return e?Ce({},t,{pathname:cc(e)+t.pathname}):t}function M1(e,t){if(!e)return t;var n=cc(e);return t.pathname.indexOf(n)!==0?t:Ce({},t,{pathname:t.pathname.substr(n.length)})}function rf(e){return typeof e=="string"?e:Qe(e)}function El(e){return function(){wn()}}function of(){}k.Component;var af=function(e){ft(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.render=function(){var o=this;return k.createElement(vn.Consumer,null,function(i){i||wn();var a=o.props.location||i.location,l,s;return k.Children.forEach(o.props.children,function(u){if(s==null&&k.isValidElement(u)){l=u;var d=u.props.path||u.props.from;s=d?uc(a.pathname,Ce({},u.props,{path:d})):i.match}}),s?k.cloneElement(l,{location:a,computedMatch:s}):null})},t}(k.Component);function So(e){var t="withRouter("+(e.displayName||e.name)+")",n=function(o){var i=o.wrappedComponentRef,a=bn(o,["wrappedComponentRef"]);return k.createElement(vn.Consumer,null,function(l){return l||wn(),k.createElement(e,Ce({},a,l,{ref:i}))})};return n.displayName=t,n.WrappedComponent=e,zi(n,e)}var B1=k.useContext;function Pm(){return B1(vn).location}var z1=function(e){ft(t,e);function t(){for(var r,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=e.call.apply(e,[this].concat(i))||this,r.history=Gy(r.props),r}var n=t.prototype;return n.render=function(){return k.createElement(Pa,{history:this.history,children:this.props.children})},t}(k.Component);k.Component;var Ns=function(t,n){return typeof t=="function"?t(n):t},js=function(t,n){return typeof t=="string"?Ze(t,null,null,n):t},dc=function(t){return t},gr=k.forwardRef;typeof gr>"u"&&(gr=dc);function U1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}var H1=gr(function(e,t){var n=e.innerRef,r=e.navigate,o=e.onClick,i=bn(e,["innerRef","navigate","onClick"]),a=i.target,l=Ce({},i,{onClick:function(u){try{o&&o(u)}catch(d){throw u.preventDefault(),d}!u.defaultPrevented&&u.button===0&&(!a||a==="_self")&&!U1(u)&&(u.preventDefault(),r())}});return dc!==gr?l.ref=t||n:l.ref=n,k.createElement("a",l)}),W1=gr(function(e,t){var n=e.component,r=n===void 0?H1:n,o=e.replace,i=e.to,a=e.innerRef,l=bn(e,["component","replace","to","innerRef"]);return k.createElement(vn.Consumer,null,function(s){s||wn();var u=s.history,d=js(Ns(i,s.location),s.location),c=d?u.createHref(d):"",v=Ce({},l,{href:c,navigate:function(){var g=Ns(i,s.location),w=Qe(s.location)===Qe(js(g)),f=o||w?u.replace:u.push;f(g)}});return dc!==gr?v.ref=t||a:v.innerRef=a,k.createElement(r,v)})}),Rm=function(t){return t},Ui=k.forwardRef;typeof Ui>"u"&&(Ui=Rm);function V1(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(function(r){return r}).join(" ")}Ui(function(e,t){var n=e["aria-current"],r=n===void 0?"page":n,o=e.activeClassName,i=o===void 0?"active":o,a=e.activeStyle,l=e.className,s=e.exact,u=e.isActive,d=e.location,c=e.sensitive,v=e.strict,A=e.style,g=e.to,w=e.innerRef,f=bn(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return k.createElement(vn.Consumer,null,function(p){p||wn();var m=d||p.location,x=js(Ns(g,m),m),S=x.pathname,T=S&&S.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),$=T?uc(m.pathname,{path:T,exact:s,sensitive:c,strict:v}):null,O=!!(u?u($,m):$),_=typeof l=="function"?l(O):l,N=typeof A=="function"?A(O):A;O&&(_=V1(_,i),N=Ce({},N,a));var q=Ce({"aria-current":O&&r||null,className:_,style:N,to:x},f);return Rm!==Ui?q.ref=t||w:q.innerRef=w,k.createElement(W1,q)})});var Om=k.createContext(null),Dm=function(e){ft(t,e);function t(r){var o;o=e.call(this,r)||this;var i=r.store;return o.state={storeState:i.getState(),store:i},o}var n=t.prototype;return n.componentDidMount=function(){this._isMounted=!0,this.subscribe()},n.componentWillUnmount=function(){this.unsubscribe&&this.unsubscribe(),this._isMounted=!1},n.componentDidUpdate=function(o){this.props.store!==o.store&&(this.unsubscribe&&this.unsubscribe(),this.subscribe())},n.subscribe=function(){var o=this,i=this.props.store;this.unsubscribe=i.subscribe(function(){var l=i.getState();o._isMounted&&o.setState(function(s){return s.storeState===l?null:{storeState:l}})});var a=i.getState();a!==this.state.storeState&&this.setState({storeState:a})},n.render=function(){var o=this.props.context||Om;return k.createElement(o.Provider,{value:this.state},this.props.children)},t}(E.Component);Dm.propTypes={store:Et.shape({subscribe:Et.func.isRequired,dispatch:Et.func.isRequired,getState:Et.func.isRequired}),context:Et.object,children:Et.any};function Q1(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var G1=function(e,t,n,r,o,i,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,a,l],d=0;s=new Error(t.replace(/%s/g,function(){return u[d++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}},K1=G1;const Lr=Fe(K1);var Im={exports:{}},he={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ie=typeof Symbol=="function"&&Symbol.for,fc=Ie?Symbol.for("react.element"):60103,pc=Ie?Symbol.for("react.portal"):60106,Ra=Ie?Symbol.for("react.fragment"):60107,Oa=Ie?Symbol.for("react.strict_mode"):60108,Da=Ie?Symbol.for("react.profiler"):60114,Ia=Ie?Symbol.for("react.provider"):60109,Na=Ie?Symbol.for("react.context"):60110,hc=Ie?Symbol.for("react.async_mode"):60111,ja=Ie?Symbol.for("react.concurrent_mode"):60111,La=Ie?Symbol.for("react.forward_ref"):60112,_a=Ie?Symbol.for("react.suspense"):60113,q1=Ie?Symbol.for("react.suspense_list"):60120,Fa=Ie?Symbol.for("react.memo"):60115,Ma=Ie?Symbol.for("react.lazy"):60116,J1=Ie?Symbol.for("react.block"):60121,Y1=Ie?Symbol.for("react.fundamental"):60117,X1=Ie?Symbol.for("react.responder"):60118,Z1=Ie?Symbol.for("react.scope"):60119;function it(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case fc:switch(e=e.type,e){case hc:case ja:case Ra:case Da:case Oa:case _a:return e;default:switch(e=e&&e.$$typeof,e){case Na:case La:case Ma:case Fa:case Ia:return e;default:return t}}case pc:return t}}}function Nm(e){return it(e)===ja}he.AsyncMode=hc;he.ConcurrentMode=ja;he.ContextConsumer=Na;he.ContextProvider=Ia;he.Element=fc;he.ForwardRef=La;he.Fragment=Ra;he.Lazy=Ma;he.Memo=Fa;he.Portal=pc;he.Profiler=Da;he.StrictMode=Oa;he.Suspense=_a;he.isAsyncMode=function(e){return Nm(e)||it(e)===hc};he.isConcurrentMode=Nm;he.isContextConsumer=function(e){return it(e)===Na};he.isContextProvider=function(e){return it(e)===Ia};he.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===fc};he.isForwardRef=function(e){return it(e)===La};he.isFragment=function(e){return it(e)===Ra};he.isLazy=function(e){return it(e)===Ma};he.isMemo=function(e){return it(e)===Fa};he.isPortal=function(e){return it(e)===pc};he.isProfiler=function(e){return it(e)===Da};he.isStrictMode=function(e){return it(e)===Oa};he.isSuspense=function(e){return it(e)===_a};he.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ra||e===ja||e===Da||e===Oa||e===_a||e===q1||typeof e=="object"&&e!==null&&(e.$$typeof===Ma||e.$$typeof===Fa||e.$$typeof===Ia||e.$$typeof===Na||e.$$typeof===La||e.$$typeof===Y1||e.$$typeof===X1||e.$$typeof===Z1||e.$$typeof===J1)};he.typeOf=it;Im.exports=he;var ex=Im.exports;function tx(e,t){t===void 0&&(t={});var n=t,r=n.getDisplayName,o=r===void 0?function($){return"ConnectAdvanced("+$+")"}:r,i=n.methodName,a=i===void 0?"connectAdvanced":i,l=n.renderCountProp,s=l===void 0?void 0:l,u=n.shouldHandleStateChanges,d=u===void 0?!0:u,c=n.storeKey,v=c===void 0?"store":c,A=n.withRef,g=A===void 0?!1:A,w=n.forwardRef,f=w===void 0?!1:w,p=n.context,m=p===void 0?Om:p,x=bn(n,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]);Lr(s===void 0,"renderCountProp is removed. render counting is built into the latest React dev tools profiling extension"),Lr(!g,"withRef is removed. To access the wrapped instance, use a ref on the connected component");var S="To use a custom Redux store for specific components,  create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like:  <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect";Lr(v==="store","storeKey has been removed and does not do anything. "+S);var T=m;return function(O){var _=O.displayName||O.name||"Component",N=o(_),q=Ce({},x,{getDisplayName:o,methodName:a,renderCountProp:s,shouldHandleStateChanges:d,storeKey:v,displayName:N,wrappedComponentName:_,WrappedComponent:O}),J=x.pure,X=E.Component;J&&(X=E.PureComponent);function ae(){var te,U,z,B,Q,D;return function(b,P,y,F){if(J&&te===P&&U===b)return z;(y!==B||Q!==F)&&(B=y,Q=F,D=e(y.dispatch,F)),te=P,U=b;var I=D(b,P);return z=I,z}}function Y(){var te,U,z,B;return function(D,R,b){return(R!==te||b!==U||B!==D)&&(te=R,U=b,B=D,z=k.createElement(D,Ce({},R,{ref:b}))),z}}var V=function(te){ft(U,te);function U(B){var Q;return Q=te.call(this,B)||this,Lr(f?!B.wrapperProps[v]:!B[v],"Passing redux store in props has been removed and does not do anything. "+S),Q.selectDerivedProps=ae(),Q.selectChildElement=Y(),Q.indirectRenderWrappedComponent=Q.indirectRenderWrappedComponent.bind(Q1(Q)),Q}var z=U.prototype;return z.indirectRenderWrappedComponent=function(Q){return this.renderWrappedComponent(Q)},z.renderWrappedComponent=function(Q){Lr(Q,'Could not find "store" in the context of '+('"'+N+'". Either wrap the root component in a <Provider>, ')+"or pass a custom React context provider to <Provider> and the corresponding "+("React context consumer to "+N+" in connect options."));var D=Q.storeState,R=Q.store,b=this.props,P;f&&(b=this.props.wrapperProps,P=this.props.forwardedRef);var y=this.selectDerivedProps(D,b,R,q);return this.selectChildElement(O,y,P)},z.render=function(){var Q=this.props.context&&this.props.context.Consumer&&ex.isContextConsumer(k.createElement(this.props.context.Consumer,null))?this.props.context:T;return k.createElement(Q.Consumer,null,this.indirectRenderWrappedComponent)},U}(X);if(V.WrappedComponent=O,V.displayName=N,f){var se=k.forwardRef(function(U,z){return k.createElement(V,{wrapperProps:U,forwardedRef:z})});return se.displayName=N,se.WrappedComponent=O,zi(se,O)}return zi(V,O)}}var nx=Object.prototype.hasOwnProperty;function lf(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function Tl(e,t){if(lf(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!nx.call(t,n[o])||!lf(e[n[o]],t[n[o]]))return!1;return!0}function so(e){"@babel/helpers - typeof";return so=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},so(e)}function rx(e,t){if(so(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(so(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ox(e){var t=rx(e,"string");return so(t)=="symbol"?t:t+""}function ix(e,t,n){return t=ox(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function uf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sf(Object(n),!0).forEach(function(r){ix(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ne(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var cf=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Cl=function(){return Math.random().toString(36).substring(7).split("").join(".")},Hi={INIT:"@@redux/INIT"+Cl(),REPLACE:"@@redux/REPLACE"+Cl(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Cl()}};function ax(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function jm(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ne(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ne(1));return n(jm)(e,t)}if(typeof e!="function")throw new Error(Ne(2));var o=e,i=t,a=[],l=a,s=!1;function u(){l===a&&(l=a.slice())}function d(){if(s)throw new Error(Ne(3));return i}function c(w){if(typeof w!="function")throw new Error(Ne(4));if(s)throw new Error(Ne(5));var f=!0;return u(),l.push(w),function(){if(f){if(s)throw new Error(Ne(6));f=!1,u();var m=l.indexOf(w);l.splice(m,1),a=null}}}function v(w){if(!ax(w))throw new Error(Ne(7));if(typeof w.type>"u")throw new Error(Ne(8));if(s)throw new Error(Ne(9));try{s=!0,i=o(i,w)}finally{s=!1}for(var f=a=l,p=0;p<f.length;p++){var m=f[p];m()}return w}function A(w){if(typeof w!="function")throw new Error(Ne(10));o=w,v({type:Hi.REPLACE})}function g(){var w,f=c;return w={subscribe:function(m){if(typeof m!="object"||m===null)throw new Error(Ne(11));function x(){m.next&&m.next(d())}x();var S=f(x);return{unsubscribe:S}}},w[cf]=function(){return this},w}return v({type:Hi.INIT}),r={dispatch:v,subscribe:c,getState:d,replaceReducer:A},r[cf]=g,r}var lx=jm;function sx(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Hi.INIT});if(typeof r>"u")throw new Error(Ne(12));if(typeof n(void 0,{type:Hi.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ne(13))})}function ux(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];typeof e[o]=="function"&&(n[o]=e[o])}var i=Object.keys(n),a;try{sx(n)}catch(l){a=l}return function(s,u){if(s===void 0&&(s={}),a)throw a;for(var d=!1,c={},v=0;v<i.length;v++){var A=i[v],g=n[A],w=s[A],f=g(w,u);if(typeof f>"u")throw u&&u.type,new Error(Ne(14));c[A]=f,d=d||f!==w}return d=d||i.length!==Object.keys(s).length,d?c:s}}function df(e,t){return function(){return t(e.apply(this,arguments))}}function cx(e,t){if(typeof e=="function")return df(e,t);if(typeof e!="object"||e===null)throw new Error(Ne(16));var n={};for(var r in e){var o=e[r];typeof o=="function"&&(n[r]=df(o,t))}return n}function dx(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,o){return function(){return r(o.apply(void 0,arguments))}})}function fx(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var o=r.apply(void 0,arguments),i=function(){throw new Error(Ne(15))},a={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},l=t.map(function(s){return s(a)});return i=dx.apply(void 0,l)(o.dispatch),uf(uf({},o),{},{dispatch:i})}}}function mc(e){return function(n,r){var o=e(n,r);function i(){return o}return i.dependsOnOwnProps=!1,i}}function ff(e){return e.dependsOnOwnProps!==null&&e.dependsOnOwnProps!==void 0?!!e.dependsOnOwnProps:e.length!==1}function Lm(e,t){return function(r,o){o.displayName;var i=function(l,s){return i.dependsOnOwnProps?i.mapToProps(l,s):i.mapToProps(l)};return i.dependsOnOwnProps=!0,i.mapToProps=function(l,s){i.mapToProps=e,i.dependsOnOwnProps=ff(e);var u=i(l,s);return typeof u=="function"&&(i.mapToProps=u,i.dependsOnOwnProps=ff(u),u=i(l,s)),u},i}}function px(e){return typeof e=="function"?Lm(e):void 0}function hx(e){return e?void 0:mc(function(t){return{dispatch:t}})}function mx(e){return e&&typeof e=="object"?mc(function(t){return cx(e,t)}):void 0}const vx=[px,hx,mx];function gx(e){return typeof e=="function"?Lm(e):void 0}function yx(e){return e?void 0:mc(function(){return{}})}const xx=[gx,yx];function wx(e,t,n){return Ce({},n,e,t)}function bx(e){return function(n,r){r.displayName;var o=r.pure,i=r.areMergedPropsEqual,a=!1,l;return function(u,d,c){var v=e(u,d,c);return a?(!o||!i(v,l))&&(l=v):(a=!0,l=v),l}}}function Ax(e){return typeof e=="function"?bx(e):void 0}function kx(e){return e?void 0:function(){return wx}}const Sx=[Ax,kx];function Ex(e,t,n,r){return function(i,a){return n(e(i,a),t(r,a),a)}}function Tx(e,t,n,r,o){var i=o.areStatesEqual,a=o.areOwnPropsEqual,l=o.areStatePropsEqual,s=!1,u,d,c,v,A;function g(x,S){return u=x,d=S,c=e(u,d),v=t(r,d),A=n(c,v,d),s=!0,A}function w(){return c=e(u,d),t.dependsOnOwnProps&&(v=t(r,d)),A=n(c,v,d),A}function f(){return e.dependsOnOwnProps&&(c=e(u,d)),t.dependsOnOwnProps&&(v=t(r,d)),A=n(c,v,d),A}function p(){var x=e(u,d),S=!l(x,c);return c=x,S&&(A=n(c,v,d)),A}function m(x,S){var T=!a(S,d),$=!i(x,u);return u=x,d=S,T&&$?w():T?f():$?p():A}return function(S,T){return s?m(S,T):g(S,T)}}function Cx(e,t){var n=t.initMapStateToProps,r=t.initMapDispatchToProps,o=t.initMergeProps,i=bn(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),a=n(e,i),l=r(e,i),s=o(e,i),u=i.pure?Tx:Ex;return u(a,l,s,e,i)}function $l(e,t,n){for(var r=t.length-1;r>=0;r--){var o=t[r](e);if(o)return o}return function(i,a){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+a.wrappedComponentName+".")}}function $x(e,t){return e===t}function Px(e){var t={},n=t.connectHOC,r=n===void 0?tx:n,o=t.mapStateToPropsFactories,i=o===void 0?xx:o,a=t.mapDispatchToPropsFactories,l=a===void 0?vx:a,s=t.mergePropsFactories,u=s===void 0?Sx:s,d=t.selectorFactory,c=d===void 0?Cx:d;return function(A,g,w,f){f===void 0&&(f={});var p=f,m=p.pure,x=m===void 0?!0:m,S=p.areStatesEqual,T=S===void 0?$x:S,$=p.areOwnPropsEqual,O=$===void 0?Tl:$,_=p.areStatePropsEqual,N=_===void 0?Tl:_,q=p.areMergedPropsEqual,J=q===void 0?Tl:q,X=bn(p,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),ae=$l(A,i,"mapStateToProps"),Y=$l(g,l,"mapDispatchToProps"),V=$l(w,u,"mergeProps");return r(c,Ce({methodName:"connect",getDisplayName:function(te){return"Connect("+te+")"},shouldHandleStateChanges:!!A,initMapStateToProps:ae,initMapDispatchToProps:Y,initMergeProps:V,pure:x,areStatesEqual:T,areOwnPropsEqual:O,areStatePropsEqual:N,areMergedPropsEqual:J},X))}}const Ba=Px();var _m={exports:{}},me={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vc=Symbol.for("react.element"),gc=Symbol.for("react.portal"),za=Symbol.for("react.fragment"),Ua=Symbol.for("react.strict_mode"),Ha=Symbol.for("react.profiler"),Wa=Symbol.for("react.provider"),Va=Symbol.for("react.context"),Rx=Symbol.for("react.server_context"),Qa=Symbol.for("react.forward_ref"),Ga=Symbol.for("react.suspense"),Ka=Symbol.for("react.suspense_list"),qa=Symbol.for("react.memo"),Ja=Symbol.for("react.lazy"),Ox=Symbol.for("react.offscreen"),Fm;Fm=Symbol.for("react.module.reference");function ht(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case vc:switch(e=e.type,e){case za:case Ha:case Ua:case Ga:case Ka:return e;default:switch(e=e&&e.$$typeof,e){case Rx:case Va:case Qa:case Ja:case qa:case Wa:return e;default:return t}}case gc:return t}}}me.ContextConsumer=Va;me.ContextProvider=Wa;me.Element=vc;me.ForwardRef=Qa;me.Fragment=za;me.Lazy=Ja;me.Memo=qa;me.Portal=gc;me.Profiler=Ha;me.StrictMode=Ua;me.Suspense=Ga;me.SuspenseList=Ka;me.isAsyncMode=function(){return!1};me.isConcurrentMode=function(){return!1};me.isContextConsumer=function(e){return ht(e)===Va};me.isContextProvider=function(e){return ht(e)===Wa};me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===vc};me.isForwardRef=function(e){return ht(e)===Qa};me.isFragment=function(e){return ht(e)===za};me.isLazy=function(e){return ht(e)===Ja};me.isMemo=function(e){return ht(e)===qa};me.isPortal=function(e){return ht(e)===gc};me.isProfiler=function(e){return ht(e)===Ha};me.isStrictMode=function(e){return ht(e)===Ua};me.isSuspense=function(e){return ht(e)===Ga};me.isSuspenseList=function(e){return ht(e)===Ka};me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===za||e===Ha||e===Ua||e===Ga||e===Ka||e===Ox||typeof e=="object"&&e!==null&&(e.$$typeof===Ja||e.$$typeof===qa||e.$$typeof===Wa||e.$$typeof===Va||e.$$typeof===Qa||e.$$typeof===Fm||e.getModuleId!==void 0)};me.typeOf=ht;_m.exports=me;var Mm=_m.exports;function Dx(e){function t(D,R,b,P,y){for(var F=0,I=0,L=0,H=0,K,G,oe=0,ce=0,ee,de=ee=K=0,le=0,ge=0,We=0,ke=0,Kt=b.length,mt=Kt-1,Ve,ne="",Se="",ol="",il="",qt;le<Kt;){if(G=b.charCodeAt(le),le===mt&&I+H+L+F!==0&&(I!==0&&(G=I===47?10:47),H=L=F=0,Kt++,mt++),I+H+L+F===0){if(le===mt&&(0<ge&&(ne=ne.replace(v,"")),0<ne.trim().length)){switch(G){case 32:case 9:case 59:case 13:case 10:break;default:ne+=b.charAt(le)}G=59}switch(G){case 123:for(ne=ne.trim(),K=ne.charCodeAt(0),ee=1,ke=++le;le<Kt;){switch(G=b.charCodeAt(le)){case 123:ee++;break;case 125:ee--;break;case 47:switch(G=b.charCodeAt(le+1)){case 42:case 47:e:{for(de=le+1;de<mt;++de)switch(b.charCodeAt(de)){case 47:if(G===42&&b.charCodeAt(de-1)===42&&le+2!==de){le=de+1;break e}break;case 10:if(G===47){le=de+1;break e}}le=de}}break;case 91:G++;case 40:G++;case 34:case 39:for(;le++<mt&&b.charCodeAt(le)!==G;);}if(ee===0)break;le++}switch(ee=b.substring(ke,le),K===0&&(K=(ne=ne.replace(c,"").trim()).charCodeAt(0)),K){case 64:switch(0<ge&&(ne=ne.replace(v,"")),G=ne.charCodeAt(1),G){case 100:case 109:case 115:case 45:ge=R;break;default:ge=se}if(ee=t(R,ge,ee,G,y+1),ke=ee.length,0<U&&(ge=n(se,ne,We),qt=l(3,ee,ge,R,ae,X,ke,G,y,P),ne=ge.join(""),qt!==void 0&&(ke=(ee=qt.trim()).length)===0&&(G=0,ee="")),0<ke)switch(G){case 115:ne=ne.replace($,a);case 100:case 109:case 45:ee=ne+"{"+ee+"}";break;case 107:ne=ne.replace(m,"$1 $2"),ee=ne+"{"+ee+"}",ee=V===1||V===2&&i("@"+ee,3)?"@-webkit-"+ee+"@"+ee:"@"+ee;break;default:ee=ne+ee,P===112&&(ee=(Se+=ee,""))}else ee="";break;default:ee=t(R,n(R,ne,We),ee,P,y+1)}ol+=ee,ee=We=ge=de=K=0,ne="",G=b.charCodeAt(++le);break;case 125:case 59:if(ne=(0<ge?ne.replace(v,""):ne).trim(),1<(ke=ne.length))switch(de===0&&(K=ne.charCodeAt(0),K===45||96<K&&123>K)&&(ke=(ne=ne.replace(" ",":")).length),0<U&&(qt=l(1,ne,R,D,ae,X,Se.length,P,y,P))!==void 0&&(ke=(ne=qt.trim()).length)===0&&(ne="\0\0"),K=ne.charCodeAt(0),G=ne.charCodeAt(1),K){case 0:break;case 64:if(G===105||G===99){il+=ne+b.charAt(le);break}default:ne.charCodeAt(ke-1)!==58&&(Se+=o(ne,K,G,ne.charCodeAt(2)))}We=ge=de=K=0,ne="",G=b.charCodeAt(++le)}}switch(G){case 13:case 10:I===47?I=0:1+K===0&&P!==107&&0<ne.length&&(ge=1,ne+="\0"),0<U*B&&l(0,ne,R,D,ae,X,Se.length,P,y,P),X=1,ae++;break;case 59:case 125:if(I+H+L+F===0){X++;break}default:switch(X++,Ve=b.charAt(le),G){case 9:case 32:if(H+F+I===0)switch(oe){case 44:case 58:case 9:case 32:Ve="";break;default:G!==32&&(Ve=" ")}break;case 0:Ve="\\0";break;case 12:Ve="\\f";break;case 11:Ve="\\v";break;case 38:H+I+F===0&&(ge=We=1,Ve="\f"+Ve);break;case 108:if(H+I+F+Y===0&&0<de)switch(le-de){case 2:oe===112&&b.charCodeAt(le-3)===58&&(Y=oe);case 8:ce===111&&(Y=ce)}break;case 58:H+I+F===0&&(de=le);break;case 44:I+L+H+F===0&&(ge=1,Ve+="\r");break;case 34:case 39:I===0&&(H=H===G?0:H===0?G:H);break;case 91:H+I+L===0&&F++;break;case 93:H+I+L===0&&F--;break;case 41:H+I+F===0&&L--;break;case 40:if(H+I+F===0){if(K===0)switch(2*oe+3*ce){case 533:break;default:K=1}L++}break;case 64:I+L+H+F+de+ee===0&&(ee=1);break;case 42:case 47:if(!(0<H+F+L))switch(I){case 0:switch(2*G+3*b.charCodeAt(le+1)){case 235:I=47;break;case 220:ke=le,I=42}break;case 42:G===47&&oe===42&&ke+2!==le&&(b.charCodeAt(ke+2)===33&&(Se+=b.substring(ke,le+1)),Ve="",I=0)}}I===0&&(ne+=Ve)}ce=oe,oe=G,le++}if(ke=Se.length,0<ke){if(ge=R,0<U&&(qt=l(2,Se,ge,D,ae,X,ke,P,y,P),qt!==void 0&&(Se=qt).length===0))return il+Se+ol;if(Se=ge.join(",")+"{"+Se+"}",V*Y!==0){switch(V!==2||i(Se,2)||(Y=0),Y){case 111:Se=Se.replace(S,":-moz-$1")+Se;break;case 112:Se=Se.replace(x,"::-webkit-input-$1")+Se.replace(x,"::-moz-$1")+Se.replace(x,":-ms-input-$1")+Se}Y=0}}return il+Se+ol}function n(D,R,b){var P=R.trim().split(f);R=P;var y=P.length,F=D.length;switch(F){case 0:case 1:var I=0;for(D=F===0?"":D[0]+" ";I<y;++I)R[I]=r(D,R[I],b).trim();break;default:var L=I=0;for(R=[];I<y;++I)for(var H=0;H<F;++H)R[L++]=r(D[H]+" ",P[I],b).trim()}return R}function r(D,R,b){var P=R.charCodeAt(0);switch(33>P&&(P=(R=R.trim()).charCodeAt(0)),P){case 38:return R.replace(p,"$1"+D.trim());case 58:return D.trim()+R.replace(p,"$1"+D.trim());default:if(0<1*b&&0<R.indexOf("\f"))return R.replace(p,(D.charCodeAt(0)===58?"":"$1")+D.trim())}return D+R}function o(D,R,b,P){var y=D+";",F=2*R+3*b+4*P;if(F===944){D=y.indexOf(":",9)+1;var I=y.substring(D,y.length-1).trim();return I=y.substring(0,D).trim()+I+";",V===1||V===2&&i(I,1)?"-webkit-"+I+I:I}if(V===0||V===2&&!i(y,1))return y;switch(F){case 1015:return y.charCodeAt(10)===97?"-webkit-"+y+y:y;case 951:return y.charCodeAt(3)===116?"-webkit-"+y+y:y;case 963:return y.charCodeAt(5)===110?"-webkit-"+y+y:y;case 1009:if(y.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+y+y;case 978:return"-webkit-"+y+"-moz-"+y+y;case 1019:case 983:return"-webkit-"+y+"-moz-"+y+"-ms-"+y+y;case 883:if(y.charCodeAt(8)===45)return"-webkit-"+y+y;if(0<y.indexOf("image-set(",11))return y.replace(J,"$1-webkit-$2")+y;break;case 932:if(y.charCodeAt(4)===45)switch(y.charCodeAt(5)){case 103:return"-webkit-box-"+y.replace("-grow","")+"-webkit-"+y+"-ms-"+y.replace("grow","positive")+y;case 115:return"-webkit-"+y+"-ms-"+y.replace("shrink","negative")+y;case 98:return"-webkit-"+y+"-ms-"+y.replace("basis","preferred-size")+y}return"-webkit-"+y+"-ms-"+y+y;case 964:return"-webkit-"+y+"-ms-flex-"+y+y;case 1023:if(y.charCodeAt(8)!==99)break;return I=y.substring(y.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+I+"-webkit-"+y+"-ms-flex-pack"+I+y;case 1005:return g.test(y)?y.replace(A,":-webkit-")+y.replace(A,":-moz-")+y:y;case 1e3:switch(I=y.substring(13).trim(),R=I.indexOf("-")+1,I.charCodeAt(0)+I.charCodeAt(R)){case 226:I=y.replace(T,"tb");break;case 232:I=y.replace(T,"tb-rl");break;case 220:I=y.replace(T,"lr");break;default:return y}return"-webkit-"+y+"-ms-"+I+y;case 1017:if(y.indexOf("sticky",9)===-1)break;case 975:switch(R=(y=D).length-10,I=(y.charCodeAt(R)===33?y.substring(0,R):y).substring(D.indexOf(":",7)+1).trim(),F=I.charCodeAt(0)+(I.charCodeAt(7)|0)){case 203:if(111>I.charCodeAt(8))break;case 115:y=y.replace(I,"-webkit-"+I)+";"+y;break;case 207:case 102:y=y.replace(I,"-webkit-"+(102<F?"inline-":"")+"box")+";"+y.replace(I,"-webkit-"+I)+";"+y.replace(I,"-ms-"+I+"box")+";"+y}return y+";";case 938:if(y.charCodeAt(5)===45)switch(y.charCodeAt(6)){case 105:return I=y.replace("-items",""),"-webkit-"+y+"-webkit-box-"+I+"-ms-flex-"+I+y;case 115:return"-webkit-"+y+"-ms-flex-item-"+y.replace(_,"")+y;default:return"-webkit-"+y+"-ms-flex-line-pack"+y.replace("align-content","").replace(_,"")+y}break;case 973:case 989:if(y.charCodeAt(3)!==45||y.charCodeAt(4)===122)break;case 931:case 953:if(q.test(D)===!0)return(I=D.substring(D.indexOf(":")+1)).charCodeAt(0)===115?o(D.replace("stretch","fill-available"),R,b,P).replace(":fill-available",":stretch"):y.replace(I,"-webkit-"+I)+y.replace(I,"-moz-"+I.replace("fill-",""))+y;break;case 962:if(y="-webkit-"+y+(y.charCodeAt(5)===102?"-ms-"+y:"")+y,b+P===211&&y.charCodeAt(13)===105&&0<y.indexOf("transform",10))return y.substring(0,y.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+y}return y}function i(D,R){var b=D.indexOf(R===1?":":"{"),P=D.substring(0,R!==3?b:10);return b=D.substring(b+1,D.length-1),z(R!==2?P:P.replace(N,"$1"),b,R)}function a(D,R){var b=o(R,R.charCodeAt(0),R.charCodeAt(1),R.charCodeAt(2));return b!==R+";"?b.replace(O," or ($1)").substring(4):"("+R+")"}function l(D,R,b,P,y,F,I,L,H,K){for(var G=0,oe=R,ce;G<U;++G)switch(ce=te[G].call(d,D,oe,b,P,y,F,I,L,H,K)){case void 0:case!1:case!0:case null:break;default:oe=ce}if(oe!==R)return oe}function s(D){switch(D){case void 0:case null:U=te.length=0;break;default:if(typeof D=="function")te[U++]=D;else if(typeof D=="object")for(var R=0,b=D.length;R<b;++R)s(D[R]);else B=!!D|0}return s}function u(D){return D=D.prefix,D!==void 0&&(z=null,D?typeof D!="function"?V=1:(V=2,z=D):V=0),u}function d(D,R){var b=D;if(33>b.charCodeAt(0)&&(b=b.trim()),Q=b,b=[Q],0<U){var P=l(-1,R,b,b,ae,X,0,0,0,0);P!==void 0&&typeof P=="string"&&(R=P)}var y=t(se,b,R,0,0);return 0<U&&(P=l(-2,y,b,b,ae,X,y.length,0,0,0),P!==void 0&&(y=P)),Q="",Y=0,X=ae=1,y}var c=/^\0+/g,v=/[\0\r\f]/g,A=/: */g,g=/zoo|gra/,w=/([,: ])(transform)/g,f=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,m=/@(k\w+)\s*(\S*)\s*/,x=/::(place)/g,S=/:(read-only)/g,T=/[svh]\w+-[tblr]{2}/,$=/\(\s*(.*)\s*\)/g,O=/([\s\S]*?);/g,_=/-self|flex-/g,N=/[^]*?(:[rp][el]a[\w-]+)[^]*/,q=/stretch|:\s*\w+\-(?:conte|avail)/,J=/([^-])(image-set\()/,X=1,ae=1,Y=0,V=1,se=[],te=[],U=0,z=null,B=0,Q="";return d.use=s,d.set=u,e!==void 0&&u(e),d}var Ix={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Nx(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var jx=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,pf=Nx(function(e){return jx.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),at={};function yt(){return(yt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var hf=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},Ls=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Mm.typeOf(e)},Wi=Object.freeze([]),fn=Object.freeze({});function yr(e){return typeof e=="function"}function mf(e){return e.displayName||e.name||"Component"}function yc(e){return e&&typeof e.styledComponentId=="string"}var xr=typeof process<"u"&&at!==void 0&&(at.REACT_APP_SC_ATTR||at.SC_ATTR)||"data-styled",xc=typeof window<"u"&&"HTMLElement"in window,Lx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&at!==void 0&&(at.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&at.REACT_APP_SC_DISABLE_SPEEDY!==""?at.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&at.REACT_APP_SC_DISABLE_SPEEDY:at.SC_DISABLE_SPEEDY!==void 0&&at.SC_DISABLE_SPEEDY!==""&&at.SC_DISABLE_SPEEDY!=="false"&&at.SC_DISABLE_SPEEDY)),_x={};function Un(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Fx=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,a=i;n>=a;)(a<<=1)<0&&Un(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var l=i;l<a;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),u=0,d=r.length;u<d;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var a=o;a<i;a++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o,l=i;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),ci=new Map,Vi=new Map,Yr=1,Ho=function(e){if(ci.has(e))return ci.get(e);for(;Vi.has(Yr);)Yr++;var t=Yr++;return ci.set(e,t),Vi.set(t,e),t},Mx=function(e){return Vi.get(e)},Bx=function(e,t){t>=Yr&&(Yr=t+1),ci.set(e,t),Vi.set(t,e)},zx="style["+xr+'][data-styled-version="5.3.11"]',Ux=new RegExp("^"+xr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Hx=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},Wx=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var a=n[o].trim();if(a){var l=a.match(Ux);if(l){var s=0|parseInt(l[1],10),u=l[2];s!==0&&(Bx(u,s),Hx(e,u,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(a)}}},Vx=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Bm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){for(var s=l.childNodes,u=s.length;u>=0;u--){var d=s[u];if(d&&d.nodeType===1&&d.hasAttribute(xr))return d}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(xr,"active"),r.setAttribute("data-styled-version","5.3.11");var a=Vx();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},Qx=function(){function e(n){var r=this.element=Bm(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,l=i.length;a<l;a++){var s=i[a];if(s.ownerNode===o)return s}Un(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Gx=function(){function e(n){var r=this.element=Bm(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Kx=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),vf=xc,qx={isServer:!xc,useCSSOMInjection:!Lx},Qi=function(){function e(n,r,o){n===void 0&&(n=fn),r===void 0&&(r={}),this.options=yt({},qx,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&xc&&vf&&(vf=!1,function(i){for(var a=document.querySelectorAll(zx),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(xr)!=="active"&&(Wx(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Ho(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(yt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,a=r.target,n=o?new Kx(a):i?new Qx(a):new Gx(a),new Fx(n)));var n,r,o,i,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ho(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(Ho(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ho(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",a=0;a<o;a++){var l=Mx(a);if(l!==void 0){var s=n.names.get(l),u=r.getGroup(a);if(s&&u&&s.size){var d=xr+".g"+a+'[id="'+l+'"]',c="";s!==void 0&&s.forEach(function(v){v.length>0&&(c+=v+",")}),i+=""+u+d+'{content:"'+c+`"}/*!sc*/
`}}}return i}(this)},e}(),Jx=/(a)(d)/gi,gf=function(e){return String.fromCharCode(e+(e>25?39:97))};function _s(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=gf(t%52)+n;return(gf(t%52)+n).replace(Jx,"$1-$2")}var tr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},zm=function(e){return tr(5381,e)};function Um(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(yr(n)&&!yc(n))return!1}return!0}var Yx=zm("5.3.11"),Xx=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Um(t),this.componentId=n,this.baseHash=tr(Yx,n),this.baseStyle=r,Qi.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var a=Hn(this.rules,t,n,r).join(""),l=_s(tr(this.baseHash,a)>>>0);if(!n.hasNameForId(o,l)){var s=r(a,"."+l,void 0,o);n.insertRules(o,l,s)}i.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,d=tr(this.baseHash,r.hash),c="",v=0;v<u;v++){var A=this.rules[v];if(typeof A=="string")c+=A;else if(A){var g=Hn(A,t,n,r),w=Array.isArray(g)?g.join(""):g;d=tr(d,w+v),c+=w}}if(c){var f=_s(d>>>0);if(!n.hasNameForId(o,f)){var p=r(c,"."+f,void 0,o);n.insertRules(o,f,p)}i.push(f)}}return i.join(" ")},e}(),Zx=/^\s*\/\/.*$/gm,ew=[":","[",".","#"];function tw(e){var t,n,r,o,i=fn,a=i.options,l=a===void 0?fn:a,s=i.plugins,u=s===void 0?Wi:s,d=new Dx(l),c=[],v=function(w){function f(p){if(p)try{w(p+"}")}catch{}}return function(p,m,x,S,T,$,O,_,N,q){switch(p){case 1:if(N===0&&m.charCodeAt(0)===64)return w(m+";"),"";break;case 2:if(_===0)return m+"/*|*/";break;case 3:switch(_){case 102:case 112:return w(x[0]+m),"";default:return m+(q===0?"/*|*/":"")}case-2:m.split("/*|*/}").forEach(f)}}}(function(w){c.push(w)}),A=function(w,f,p){return f===0&&ew.indexOf(p[n.length])!==-1||p.match(o)?w:"."+t};function g(w,f,p,m){m===void 0&&(m="&");var x=w.replace(Zx,""),S=f&&p?p+" "+f+" { "+x+" }":x;return t=m,n=f,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),d(p||!f?"":f,S)}return d.use([].concat(u,[function(w,f,p){w===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,A))},v,function(w){if(w===-2){var f=c;return c=[],f}}])),g.hash=u.length?u.reduce(function(w,f){return f.name||Un(15),tr(w,f.name)},5381).toString():"",g}var Hm=k.createContext();Hm.Consumer;var Wm=k.createContext(),nw=(Wm.Consumer,new Qi),Fs=tw();function Vm(){return E.useContext(Hm)||nw}function Qm(){return E.useContext(Wm)||Fs}var rw=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Fs);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.toString=function(){return Un(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Fs),this.name+t.hash},e}(),ow=/([A-Z])/,iw=/([A-Z])/g,aw=/^ms-/,lw=function(e){return"-"+e.toLowerCase()};function yf(e){return ow.test(e)?e.replace(iw,lw).replace(aw,"-ms-"):e}var xf=function(e){return e==null||e===!1||e===""};function Hn(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],a=0,l=e.length;a<l;a+=1)(o=Hn(e[a],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(xf(e))return"";if(yc(e))return"."+e.styledComponentId;if(yr(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return Hn(s,t,n,r)}var u;return e instanceof rw?n?(e.inject(n,r),e.getName(r)):e:Ls(e)?function d(c,v){var A,g,w=[];for(var f in c)c.hasOwnProperty(f)&&!xf(c[f])&&(Array.isArray(c[f])&&c[f].isCss||yr(c[f])?w.push(yf(f)+":",c[f],";"):Ls(c[f])?w.push.apply(w,d(c[f],f)):w.push(yf(f)+": "+(A=f,(g=c[f])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||A in Ix||A.startsWith("--")?String(g).trim():g+"px")+";"));return v?[v+" {"].concat(w,["}"]):w}(e):e.toString()}var wf=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function W(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return yr(e)||Ls(e)?wf(Hn(hf(Wi,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:wf(Hn(hf(e,n)))}var Gm=function(e,t,n){return n===void 0&&(n=fn),e.theme!==n.theme&&e.theme||t||n.theme},sw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,uw=/(^-|-$)/g;function Pl(e){return e.replace(sw,"-").replace(uw,"")}var Km=function(e){return _s(zm(e)>>>0)};function Wo(e){return typeof e=="string"&&!0}var Ms=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},cw=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function dw(e,t,n){var r=e[n];Ms(t)&&Ms(r)?qm(r,t):e[n]=t}function qm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var a=i[o];if(Ms(a))for(var l in a)cw(l)&&dw(e,a[l],l)}return e}var uo=k.createContext();uo.Consumer;function Jm(e){var t=E.useContext(uo),n=E.useMemo(function(){return function(r,o){if(!r)return Un(14);if(yr(r)){var i=r(o);return i}return Array.isArray(r)||typeof r!="object"?Un(8):o?yt({},o,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?k.createElement(uo.Provider,{value:n},e.children):null}var Rl={};function Ym(e,t,n){var r=yc(e),o=!Wo(e),i=t.attrs,a=i===void 0?Wi:i,l=t.componentId,s=l===void 0?function(m,x){var S=typeof m!="string"?"sc":Pl(m);Rl[S]=(Rl[S]||0)+1;var T=S+"-"+Km("5.3.11"+S+Rl[S]);return x?x+"-"+T:T}(t.displayName,t.parentComponentId):l,u=t.displayName,d=u===void 0?function(m){return Wo(m)?"styled."+m:"Styled("+mf(m)+")"}(e):u,c=t.displayName&&t.componentId?Pl(t.displayName)+"-"+t.componentId:t.componentId||s,v=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,A=t.shouldForwardProp;r&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(m,x,S){return e.shouldForwardProp(m,x,S)&&t.shouldForwardProp(m,x,S)}:e.shouldForwardProp);var g,w=new Xx(n,c,r?e.componentStyle:void 0),f=w.isStatic&&a.length===0,p=function(m,x){return function(S,T,$,O){var _=S.attrs,N=S.componentStyle,q=S.defaultProps,J=S.foldedComponentIds,X=S.shouldForwardProp,ae=S.styledComponentId,Y=S.target,V=function(P,y,F){P===void 0&&(P=fn);var I=yt({},y,{theme:P}),L={};return F.forEach(function(H){var K,G,oe,ce=H;for(K in yr(ce)&&(ce=ce(I)),ce)I[K]=L[K]=K==="className"?(G=L[K],oe=ce[K],G&&oe?G+" "+oe:G||oe):ce[K]}),[I,L]}(Gm(T,E.useContext(uo),q)||fn,T,_),se=V[0],te=V[1],U=function(P,y,F,I){var L=Vm(),H=Qm(),K=y?P.generateAndInjectStyles(fn,L,H):P.generateAndInjectStyles(F,L,H);return K}(N,O,se),z=$,B=te.$as||T.$as||te.as||T.as||Y,Q=Wo(B),D=te!==T?yt({},T,{},te):T,R={};for(var b in D)b[0]!=="$"&&b!=="as"&&(b==="forwardedAs"?R.as=D[b]:(X?X(b,pf,B):!Q||pf(b))&&(R[b]=D[b]));return T.style&&te.style!==T.style&&(R.style=yt({},T.style,{},te.style)),R.className=Array.prototype.concat(J,ae,U!==ae?U:null,T.className,te.className).filter(Boolean).join(" "),R.ref=z,E.createElement(B,R)}(g,m,x,f)};return p.displayName=d,(g=k.forwardRef(p)).attrs=v,g.componentStyle=w,g.displayName=d,g.shouldForwardProp=A,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Wi,g.styledComponentId=c,g.target=r?e.target:e,g.withComponent=function(m){var x=t.componentId,S=function($,O){if($==null)return{};var _,N,q={},J=Object.keys($);for(N=0;N<J.length;N++)_=J[N],O.indexOf(_)>=0||(q[_]=$[_]);return q}(t,["componentId"]),T=x&&x+"-"+(Wo(m)?m:Pl(mf(m)));return Ym(m,yt({},S,{attrs:v,componentId:T}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?qm({},e.defaultProps,m):m}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),o&&zi(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var C=function(e){return function t(n,r,o){if(o===void 0&&(o=fn),!Mm.isValidElementType(r))return Un(1,String(r));var i=function(){return n(r,o,W.apply(void 0,arguments))};return i.withConfig=function(a){return t(n,r,yt({},o,{},a))},i.attrs=function(a){return t(n,r,yt({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i}(Ym,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){C[e]=C(e)});var fw=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Um(n),Qi.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,o,i){var a=i(Hn(this.rules,r,o,i).join(""),""),l=this.componentId+n;o.insertRules(l,l,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,o,i){n>2&&Qi.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,r,o,i)},e}();function pw(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=W.apply(void 0,[e].concat(n)),i="sc-global-"+Km(JSON.stringify(o)),a=new fw(o,i);function l(u){var d=Vm(),c=Qm(),v=E.useContext(uo),A=E.useRef(d.allocateGSInstance(i)).current;return d.server&&s(A,u,d,v,c),E.useLayoutEffect(function(){if(!d.server)return s(A,u,d,v,c),function(){return a.removeStyles(A,d)}},[A,u,d,v,c]),null}function s(u,d,c,v,A){if(a.isStatic)a.renderStyles(u,_x,c,A);else{var g=yt({},d,{theme:Gm(d,v,l.defaultProps)});a.renderStyles(u,g,c,A)}}return k.memo(l)}var hw=`
  html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1.5;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
ul,
li {
  list-style-type: none;
}
button {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: black;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

`;const wc="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",bc="inset 2px 2px 3px rgba(0,0,0,0.2)",bt=()=>W`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,At=({background:e="material",color:t="materialText"}={})=>W`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:n})=>n[e]};
  color: ${({theme:n})=>n[t]};
`,Eo=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:n=2})=>W`
  background-image: ${[`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`,`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`].join(",")};
  background-color: ${t};
  background-size: ${`${n*2}px ${n*2}px`};
  background-position: 0 0, ${`${n}px ${n}px`};
`,Wn=()=>W`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,Gn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},mw=({theme:e,topLeftInner:t,bottomRightInner:n,hasShadow:r=!1,hasInsetShadow:o=!1})=>[r?wc:!1,o?bc:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,n!==null?`inset -1px -1px 0 1px ${e[n]}`:!1].filter(Boolean).join(", "),Ae=({invert:e=!1,style:t="button"}={})=>{const n={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return W`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[Gn[t][n.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[Gn[t][n.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[Gn[t][n.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[Gn[t][n.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:o})=>mw({theme:r,topLeftInner:Gn[t][n.topLeftInner],bottomRightInner:Gn[t][n.bottomRightInner],hasShadow:o})};
  `},wr=()=>W`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,vw=e=>Buffer.from(e).toString("base64"),gw=typeof btoa<"u"?btoa:vw,Vo=(e,t=0)=>{const n=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${gw(n)})`},Ac=(e="default")=>W`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>Eo({mainColor:e==="flat"?t.flatLight:t.material,secondaryColor:e==="flat"?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${At()}
    ${e==="flat"?Wn():Ae({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:t})=>t.material};
  }
  ::-webkit-scrollbar-button {
    ${At()}
    ${e==="flat"?Wn():Ae({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${e==="default"?Ae({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:t})=>Vo(t.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:t})=>Vo(t.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:t})=>Vo(t.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:t})=>Vo(t.materialText,0)};
  }
`,yw=C.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,xw=E.forwardRef(({children:e,underline:t=!0,...n},r)=>k.createElement(yw,{ref:r,underline:t,...n},e));xw.displayName="Anchor";const ww=C.header`
  ${Ae()};
  ${At()};

  position: ${e=>{var t;return(t=e.position)!==null&&t!==void 0?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,Xm=E.forwardRef(({children:e,fixed:t=!0,position:n="fixed",...r},o)=>k.createElement(ww,{fixed:t,position:t!==!1?n:void 0,ref:o,...r},e));Xm.displayName="AppBar";const Qn=()=>{};function On(e,t,n){return n!==null&&e>n?n:t!==null&&e<t?t:e}function bw(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function bf(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(bw(t)))}function gn(e){return typeof e=="number"?`${e}px`:e}const Aw=C.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:e})=>`
    height: ${e};
    width: ${e};
    `}
  border-radius: ${({square:e})=>e?0:"50%"};
  overflow: hidden;
  ${({noBorder:e,theme:t})=>!e&&`
    border-top: 2px solid ${t.borderDark};
    border-left: 2px solid ${t.borderDark};
    border-bottom: 2px solid ${t.borderLightest};
    border-right: 2px solid ${t.borderLightest};
    background: ${t.material};
  `}
  ${({src:e})=>!e&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,kw=C.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,Bs=E.forwardRef(({alt:e="",children:t,noBorder:n=!1,size:r=35,square:o=!1,src:i,...a},l)=>k.createElement(Aw,{noBorder:n,ref:l,size:gn(r),square:o,src:i,...a},i?k.createElement(kw,{src:i,alt:e}):t));Bs.displayName="Avatar";const je={sm:"28px",md:"36px",lg:"44px"},Sw=W`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:e="md"})=>je[e]};
  width: ${({fullWidth:e,size:t="md",square:n})=>e?"100%":n?je[t]:"auto"};
  padding: ${({square:e})=>e?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:e})=>!e&&"2px"};
  }
  padding-top: ${({active:e,disabled:t})=>e&&!t&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,Ya=C.button`
  ${({active:e,disabled:t,primary:n,theme:r,variant:o})=>o==="flat"?W`
          ${Wn()}
          ${n?`
          border: 2px solid ${r.checkmark};
            outline: 2px solid ${r.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${r.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!e&&!t&&wr}
            outline-offset: -4px;
          }
        `:o==="menu"||o==="thin"?W`
          ${At()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!t&&!e&&Ae({style:"buttonThin"})}
          }
          &:active {
            ${!t&&Ae({style:"buttonThinPressed"})}
          }
          ${e&&Ae({style:"buttonThinPressed"})}
          ${t&&bt()}
        `:W`
          ${At()};
          border: none;
          ${t&&bt()}
          ${e?Eo({mainColor:r.material,secondaryColor:r.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${n?W`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${r.borderDarkest};
                `:W`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${Ae(e?{style:o==="raised"?"window":"button",invert:!0}:{style:o==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!t&&Ae({style:o==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!e&&!t&&wr}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${Sw}
`,we=E.forwardRef(({onClick:e,disabled:t=!1,children:n,type:r="button",fullWidth:o=!1,size:i="md",square:a=!1,active:l=!1,onTouchStart:s=Qn,primary:u=!1,variant:d="default",...c},v)=>k.createElement(Ya,{active:l,disabled:t,$disabled:t,fullWidth:o,onClick:t?void 0:e,onTouchStart:s,primary:u,ref:v,size:i,square:a,type:r,variant:d,...c},n));we.displayName="Button";function yn({defaultValue:e,onChange:t,onChangePropName:n="onChange",readOnly:r,value:o,valuePropName:i="value"}){const a=o!==void 0,[l,s]=E.useState(e),u=E.useCallback(d=>{a||s(d)},[a]);if(a&&typeof t!="function"&&!r){const d=`Warning: You provided a \`${i}\` prop to a component without an \`${n}\` handler.${i==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${n}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${n}\` function that updates \`${i}\`.`}`;console.warn(d)}return[a?o:l,u]}const zs=C.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>je[e.size]};
  width: ${e=>e.square?je[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>je[e.size]};
  color: ${({theme:e})=>e.materialText};
  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
  font-weight: ${({primary:e})=>e?"bold":"normal"};
  &:hover {
    ${({theme:e,$disabled:t})=>!t&&`
        color: ${e.materialTextInvert};
        background: ${e.hoverBackground};
      `}

    cursor: default;
  }
  ${e=>e.$disabled&&bt()}
`,Ew=E.forwardRef(({size:e="lg",disabled:t,square:n,children:r,onClick:o,primary:i,...a},l)=>k.createElement(zs,{$disabled:t,size:e,square:n,onClick:t?void 0:o,primary:i,role:"menuitem",ref:l,"aria-disabled":t,...a},r));Ew.displayName="MenuListItem";const Tw=C.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${Ae({style:"window"})}
  ${At()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;Tw.displayName="MenuList";const It=20,Gi=C.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${It}px;
  height: ${It}px;
  opacity: 0;
  z-index: -1;
`,kc=C.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&bt()}

  ${zs} & {
    margin: 0;
    height: 100%;
  }
  ${zs}:hover & {
    ${({$disabled:e,theme:t})=>!e&&W`
        color: ${t.materialTextInvert};
      `};
  }
`,Sc=C.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Gi}:focus ~ & {
    ${wr}
  }
  ${Gi}:not(:disabled) ~ &:active {
    ${wr}
  }
`,jt=C.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:e})=>e.borderDark};
  border-top-color: ${({theme:e})=>e.borderDark};
  border-right-color: ${({theme:e})=>e.borderLightest};
  border-bottom-color: ${({theme:e})=>e.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:e})=>e.borderDarkest};
    border-top-color: ${({theme:e})=>e.borderDarkest};
    border-right-color: ${({theme:e})=>e.borderLight};
    border-bottom-color: ${({theme:e})=>e.borderLight};

    pointer-events: none;
    ${e=>e.shadow&&`box-shadow:${bc};`}
  }
`,Cw=C.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${Ac()}
`,Zm=E.forwardRef(({children:e,shadow:t=!0,...n},r)=>k.createElement(jt,{ref:r,shadow:t,...n},k.createElement(Cw,null,e)));Zm.displayName="ScrollView";const e0=W`
  width: ${It}px;
  height: ${It}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,$w=C(jt)`
  ${e0}
  width: ${It}px;
  height: ${It}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,Pw=C.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${e0}
  width: ${It-4}px;
  height: ${It-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,Rw=C.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:e,theme:t})=>e?t.checkmarkDisabled:t.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
  }
`,Ow=C.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:t})=>Eo({mainColor:e?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,Dw={flat:Pw,default:$w},Us=E.forwardRef(({checked:e,className:t="",defaultChecked:n=!1,disabled:r=!1,indeterminate:o=!1,label:i="",onChange:a=Qn,style:l={},value:s,variant:u="default",...d},c)=>{var v;const[A,g]=yn({defaultValue:n,onChange:a,readOnly:(v=d.readOnly)!==null&&v!==void 0?v:r,value:e}),w=E.useCallback(m=>{const x=m.target.checked;g(x),a(m)},[a,g]),f=Dw[u];let p=null;return o?p=Ow:A&&(p=Rw),k.createElement(kc,{$disabled:r,className:t,style:l},k.createElement(Gi,{disabled:r,onChange:r?void 0:w,readOnly:r,type:"checkbox",value:s,checked:A,"data-indeterminate":o,ref:c,...d}),k.createElement(f,{$disabled:r,role:"presentation"},p&&k.createElement(p,{$disabled:r,variant:u})),i&&k.createElement(Sc,null,i))});Us.displayName="Checkbox";const Ec=C.div`
  ${({orientation:e,theme:t,size:n="100%"})=>e==="vertical"?`
    height: ${gn(n)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `:`
    width: ${gn(n)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;Ec.displayName="Separator";const Iw=C(Ya)`
  padding-left: 8px;
`,Nw=C(Ec)`
  height: 21px;
  position: relative;
  top: 0;
`,t0=C.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,jw=C.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:e})=>e};

  ${({$disabled:e})=>e?W`
          border: 2px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:W`
          border: 2px solid ${({theme:t})=>t.materialText};
        `}
  ${t0}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${wr}
    outline-offset: -8px;
  }
`,Lw=C.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:e})=>e?W`
          border-top: 6px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:W`
          border-top: 6px solid ${({theme:t})=>t.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:e})=>e==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,n0=E.forwardRef(({value:e,defaultValue:t,onChange:n=Qn,disabled:r=!1,variant:o="default",...i},a)=>{var l;const[s,u]=yn({defaultValue:t,onChange:n,readOnly:(l=i.readOnly)!==null&&l!==void 0?l:r,value:e}),d=c=>{const v=c.target.value;u(v),n(c)};return k.createElement(Iw,{disabled:r,as:"div",variant:o,size:"md"},k.createElement(t0,{onChange:d,readOnly:r,disabled:r,value:s??"#008080",type:"color",ref:a,...i}),k.createElement(jw,{$disabled:r,color:s??"#008080",role:"presentation"}),o==="default"&&k.createElement(Nw,{orientation:"vertical"}),k.createElement(Lw,{$disabled:r,variant:o}))});n0.displayName="ColorInput";const _w=C.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:e})=>W`
    width: ${11*e}px;
    height: ${21*e}px;
    margin: ${e}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${Eo({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${e}px;
      width: ${9*e}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${e}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${e*2}px);
      top: ${2*e}px;
      left: ${e}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${e}px;
      width: ${9*e}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${e}px;
    }
    span.center:after {
      bottom: ${e}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${e}px;
      border-top: ${e}px solid var(--react95-digit-bg-color);
      border-bottom: ${e}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*e}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${e}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${e*2}px);
      top: ${e}px;
      left: ${e*2}px;
    }
  `}
`,Af=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Fw=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Mw({digit:e=0,pixelSize:t=2,...n}){const r=Fw[Number(e)].map((o,i)=>o?`${Af[i]} active`:Af[i]);return k.createElement(_w,{pixelSize:t,...n},r.map((o,i)=>k.createElement("span",{className:o,key:i})))}const Bw=C.div`
  ${Ae({style:"status"})}
  display: inline-flex;
  background: #000000;
`,zw={sm:1,md:2,lg:3,xl:4},Uw=E.forwardRef(({value:e=0,minLength:t=3,size:n="md",...r},o)=>{const i=E.useMemo(()=>e.toString().padStart(t,"0").split(""),[t,e]);return k.createElement(Bw,{ref:o,...r},i.map((a,l)=>k.createElement(Mw,{digit:a,pixelSize:zw[n],key:l})))});Uw.displayName="Counter";const r0=W`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${je.md};
`,Hw=C(jt).attrs({"data-testid":"variant-default"})`
  ${r0}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,Ww=C.div.attrs({"data-testid":"variant-flat"})`
  ${Wn()}
  ${r0}
  position: relative;
`,o0=W`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:e})=>e.canvasText};
  ${({disabled:e,variant:t})=>t!=="flat"&&e&&bt()}
`,Vw=C.input`
  ${o0}
  padding: 0 8px;
`,Qw=C.textarea`
  ${o0}
  padding: 8px;
  resize: none;
  ${({variant:e})=>Ac(e)}
`,To=E.forwardRef(({className:e,disabled:t=!1,fullWidth:n,onChange:r=Qn,shadow:o=!0,style:i,variant:a="default",...l},s)=>{const u=a==="flat"?Ww:Hw,d=E.useMemo(()=>{var c;return l.multiline?k.createElement(Qw,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,variant:a,...l}):k.createElement(Vw,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,type:(c=l.type)!==null&&c!==void 0?c:"text",variant:a,...l})},[t,r,l,s,a]);return k.createElement(u,{className:e,fullWidth:n,$disabled:t,shadow:o,style:i},d)});To.displayName="TextInput";const Gw=C.div`
  display: inline-flex;
  align-items: center;
`,Hs=C(we)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?W`
          height: calc(50% - 1px);
        `:W`
          height: 50%;
        `}
`,Kw=C.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>e==="flat"?W`
          height: calc(${je.md} - 4px);
        `:W`
          height: ${je.md};
          margin-left: 2px;
        `}
`,kf=C.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:e})=>e?W`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:t})=>t.materialText};
        `:W`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:t})=>t.materialText};
        `}
  ${Hs}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?W`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:W`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,Tc=E.forwardRef(({className:e,defaultValue:t,disabled:n=!1,max:r,min:o,onChange:i,readOnly:a,step:l=1,style:s,value:u,variant:d="default",width:c,...v},A)=>{const[g,w]=yn({defaultValue:t,onChange:i,readOnly:a,value:u}),f=E.useCallback($=>{const O=parseFloat($.target.value);w(O)},[w]),p=E.useCallback($=>{const O=On(parseFloat(((g??0)+$).toFixed(2)),o??null,r??null);w(O),i==null||i(O)},[r,o,i,w,g]),m=E.useCallback(()=>{g!==void 0&&(i==null||i(g))},[i,g]),x=E.useCallback(()=>{p(l)},[p,l]),S=E.useCallback(()=>{p(-l)},[p,l]),T=d==="flat"?"flat":"raised";return k.createElement(Gw,{className:e,style:{...s,width:c!==void 0?gn(c):"auto"},...v},k.createElement(To,{value:g,variant:d,onChange:f,disabled:n,type:"number",readOnly:a,ref:A,fullWidth:!0,onBlur:m}),k.createElement(Kw,{variant:d},k.createElement(Hs,{"data-testid":"increment",variant:T,disabled:n||a,onClick:x},k.createElement(kf,{invert:!0})),k.createElement(Hs,{"data-testid":"decrement",variant:T,disabled:n||a,onClick:S},k.createElement(kf,null))))});Tc.displayName="NumberInput";function qw(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<10;n+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const i0=e=>E.useMemo(()=>qw(),[e]),a0=W`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,l0=W`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,Cc=C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,Jw=C.div`
  ${a0}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${Cc}:focus & {
    ${l0}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,s0=W`
  height: ${je.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?bt():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,Yw=C(jt)`
  ${s0}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,Xw=C.div`
  ${Wn()}
  ${s0}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,Zw=C.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${a0}
  cursor: pointer;
  &:disabled {
    ${bt()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,u0=C(Ya).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:e="default"})=>e==="flat"?W`
          height: 100%;
          margin-right: 0;
        `:W`
          height: 100%;
        `}
  ${({native:e=!1,variant:t="default"})=>e&&(t==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:e=!1,native:t=!1})=>e||t?"none":"auto"}
`,eb=C.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:e=!1,theme:t})=>e?t.materialTextDisabled:t.materialText};
  ${({$disabled:e=!1,theme:t})=>e&&`
    filter: drop-shadow(1px 1px 0px ${t.materialTextDisabledShadow});
    border-top-color: ${t.materialTextDisabled};
    `}
  ${u0}:active & {
    margin-top: 2px;
  }
`,tb=C.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:e})=>e.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${wc};
  ${({variant:e="default"})=>e==="flat"?W`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:W`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:e="default"})=>Ac(e)}
`,nb=C.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${je.md} - 4px);
  line-height: calc(${je.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:e})=>e?l0:""}
  user-select: none;
`,rb=[],c0=({className:e,defaultValue:t,disabled:n,native:r,onChange:o,options:i=rb,readOnly:a,style:l,value:s,variant:u,width:d})=>{var c;const v=E.useMemo(()=>i.filter(Boolean),[i]),[A,g]=yn({defaultValue:t??((c=v==null?void 0:v[0])===null||c===void 0?void 0:c.value),onChange:o,readOnly:a,value:s}),w=!(n||a),f=E.useMemo(()=>({className:e,style:{...l,width:d}}),[e,l,d]),p=E.useMemo(()=>k.createElement(u0,{as:"div","data-testid":"select-button",$disabled:n,native:r,tabIndex:-1,variant:u==="flat"?"flat":"raised"},k.createElement(eb,{"data-testid":"select-icon",$disabled:n})),[n,r,u]),m=E.useMemo(()=>u==="flat"?Xw:Yw,[u]);return E.useMemo(()=>({isEnabled:w,options:v,value:A,setValue:g,wrapperProps:f,DropdownButton:p,Wrapper:m}),[p,m,w,v,g,A,f])},ob={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},ib=1e3,ab=({onBlur:e,onChange:t,onClose:n,onFocus:r,onKeyDown:o,onMouseDown:i,onOpen:a,open:l,options:s,readOnly:u,value:d,selectRef:c,setValue:v,wrapperRef:A})=>{const g=E.useRef(null),w=E.useRef([]),f=E.useRef(0),p=E.useRef(0),m=E.useRef(),x=E.useRef("search"),S=E.useRef(""),T=E.useRef(),[$,O]=yn({defaultValue:!1,onChange:a,onChangePropName:"onOpen",readOnly:u,value:l,valuePropName:"open"}),_=E.useMemo(()=>{const L=s.findIndex(H=>H.value===d);return f.current=On(L,0,null),s[L]},[s,d]),[N,q]=E.useState(s[0]),J=E.useCallback(L=>{const H=g.current,K=w.current[L];if(!K||!H){m.current=L;return}m.current=void 0;const G=H.clientHeight,oe=H.scrollTop,ce=H.scrollTop+G,ee=K.offsetTop,de=K.offsetHeight,le=K.offsetTop+K.offsetHeight;ee<oe&&H.scrollTo(0,ee),le>ce&&H.scrollTo(0,ee-G+de),K.focus({preventScroll:!0})},[g]),X=E.useCallback((L,{scroll:H}={})=>{var K;const G=s.length-1;let oe;switch(L){case"first":{oe=0;break}case"last":{oe=G;break}case"next":{oe=On(p.current+1,0,G);break}case"previous":{oe=On(p.current-1,0,G);break}case"selected":{oe=On((K=f.current)!==null&&K!==void 0?K:0,0,G);break}default:oe=L}p.current=oe,q(s[oe]),H&&J(oe)},[p,s,J]),ae=E.useCallback(({fromEvent:L})=>{O(!0),X("selected",{scroll:!0}),a==null||a({fromEvent:L})},[X,a,O]),Y=E.useCallback(()=>{x.current="search",S.current="",clearTimeout(T.current)},[]),V=E.useCallback(({focusSelect:L,fromEvent:H})=>{var K;n==null||n({fromEvent:H}),O(!1),q(s[0]),Y(),m.current=void 0,L&&((K=c.current)===null||K===void 0||K.focus())},[Y,n,s,c,O]),se=E.useCallback(({fromEvent:L})=>{$?V({focusSelect:!1,fromEvent:L}):ae({fromEvent:L})},[V,ae,$]),te=E.useCallback((L,{fromEvent:H})=>{f.current!==L&&(f.current=L,v(s[L].value),t==null||t(s[L],{fromEvent:H}))},[t,s,v]),U=E.useCallback(({focusSelect:L,fromEvent:H})=>{te(p.current,{fromEvent:H}),V({focusSelect:L,fromEvent:H})},[V,te]),z=E.useCallback((L,{fromEvent:H,select:K})=>{var G;switch(x.current==="cycleFirstLetter"&&L!==S.current&&(x.current="search"),L===S.current?x.current="cycleFirstLetter":S.current+=L,x.current){case"search":{let oe=s.findIndex(ce=>{var ee;return((ee=ce.label)===null||ee===void 0?void 0:ee.toLocaleUpperCase().indexOf(S.current))===0});oe<0&&(oe=s.findIndex(ce=>{var ee;return((ee=ce.label)===null||ee===void 0?void 0:ee.toLocaleUpperCase().indexOf(L))===0}),S.current=L),oe>=0&&(K?te(oe,{fromEvent:H}):X(oe,{scroll:!0}));break}case"cycleFirstLetter":{const oe=K?(G=f.current)!==null&&G!==void 0?G:-1:p.current;let ce=s.findIndex((ee,de)=>{var le;return de>oe&&((le=ee.label)===null||le===void 0?void 0:le.toLocaleUpperCase().indexOf(L))===0});ce<0&&(ce=s.findIndex(ee=>{var de;return((de=ee.label)===null||de===void 0?void 0:de.toLocaleUpperCase().indexOf(L))===0})),ce>=0&&(K?te(ce,{fromEvent:H}):X(ce,{scroll:!0}));break}}clearTimeout(T.current),T.current=setTimeout(()=>{x.current==="search"&&(S.current="")},ib)},[X,s,te]),B=E.useCallback(L=>{var H;L.button===0&&(L.preventDefault(),(H=c.current)===null||H===void 0||H.focus(),se({fromEvent:L}),i==null||i(L))},[i,c,se]),Q=E.useCallback(L=>{U({focusSelect:!0,fromEvent:L})},[U]),D=E.useCallback(L=>{const{altKey:H,code:K,ctrlKey:G,metaKey:oe,shiftKey:ce}=L,{ARROW_DOWN:ee,ARROW_UP:de,END:le,ENTER:ge,ESC:We,HOME:ke,SPACE:Kt,TAB:mt}=ob,Ve=H||G||oe||ce;if(!(K===mt&&(H||G||oe)||K!==mt&&Ve))switch(K){case ee:{if(L.preventDefault(),!$){ae({fromEvent:L});return}X("next",{scroll:!0});break}case de:{if(L.preventDefault(),!$){ae({fromEvent:L});return}X("previous",{scroll:!0});break}case le:{if(L.preventDefault(),!$){ae({fromEvent:L});return}X("last",{scroll:!0});break}case ge:{if(!$)return;L.preventDefault(),U({focusSelect:!0,fromEvent:L});break}case We:{if(!$)return;L.preventDefault(),V({focusSelect:!0,fromEvent:L});break}case ke:{if(L.preventDefault(),!$){ae({fromEvent:L});return}X("first",{scroll:!0});break}case Kt:{L.preventDefault(),$?U({focusSelect:!0,fromEvent:L}):ae({fromEvent:L});break}case mt:{if(!$)return;ce||L.preventDefault(),U({focusSelect:!ce,fromEvent:L});break}default:!Ve&&K.match(/^Key/)&&(L.preventDefault(),L.stopPropagation(),z(K.replace(/^Key/,""),{select:!$,fromEvent:L}))}},[X,V,$,ae,z,U]),R=E.useCallback(L=>{D(L),o==null||o(L)},[D,o]),b=E.useCallback(L=>{X(L)},[X]),P=E.useCallback(L=>{$||(Y(),e==null||e(L))},[Y,e,$]),y=E.useCallback(L=>{Y(),r==null||r(L)},[Y,r]),F=E.useCallback(L=>{g.current=L,m.current!==void 0&&J(m.current)},[J]),I=E.useCallback((L,H)=>{w.current[H]=L,m.current===H&&J(m.current)},[J]);return E.useEffect(()=>{if(!$)return()=>{};const L=H=>{var K;const G=H.target;!((K=A.current)===null||K===void 0)&&K.contains(G)||(H.preventDefault(),V({focusSelect:!1,fromEvent:H}))};return document.addEventListener("mousedown",L),()=>{document.removeEventListener("mousedown",L)}},[V,$,A]),E.useMemo(()=>({activeOption:N,handleActivateOptionIndex:b,handleBlur:P,handleButtonKeyDown:R,handleDropdownKeyDown:D,handleFocus:y,handleMouseDown:B,handleOptionClick:Q,handleSetDropdownRef:F,handleSetOptionRef:I,open:$,selectedOption:_}),[N,b,P,R,y,D,B,Q,F,I,$,_])},lb=E.forwardRef(({className:e,defaultValue:t,disabled:n,onChange:r,options:o,readOnly:i,style:a,value:l,variant:s,width:u,...d},c)=>{const{isEnabled:v,options:A,setValue:g,value:w,DropdownButton:f,Wrapper:p}=c0({defaultValue:t,disabled:n,native:!0,onChange:r,options:o,readOnly:i,value:l,variant:s}),m=E.useCallback(x=>{const S=A.find(T=>T.value===x.target.value);S&&(g(S.value),r==null||r(S,{fromEvent:x}))},[r,A,g]);return k.createElement(p,{className:e,style:{...a,width:u}},k.createElement(Cc,null,k.createElement(Zw,{...d,disabled:n,onChange:v?m:Qn,ref:c,value:w},A.map((x,S)=>{var T;return k.createElement("option",{key:`${x.value}-${S}`,value:x.value},(T=x.label)!==null&&T!==void 0?T:x.value)})),f))});lb.displayName="SelectNative";function sb({activateOptionIndex:e,active:t,index:n,onClick:r,option:o,selected:i,setRef:a}){const l=E.useCallback(()=>{e(n)},[e,n]),s=E.useCallback(d=>{a(d,n)},[n,a]),u=i0();return k.createElement(nb,{active:t,"aria-selected":i?"true":void 0,"data-value":o.value,id:u,onClick:r,onMouseEnter:l,ref:s,role:"option",tabIndex:0},o.label)}function ub({"aria-label":e,"aria-labelledby":t,className:n,defaultValue:r,disabled:o=!1,formatDisplay:i,inputProps:a,labelId:l,menuMaxHeight:s,name:u,onBlur:d,onChange:c,onClose:v,onFocus:A,onKeyDown:g,onMouseDown:w,onOpen:f,open:p,options:m,readOnly:x,shadow:S=!0,style:T,variant:$="default",value:O,width:_="auto",...N},q){const{isEnabled:J,options:X,setValue:ae,value:Y,wrapperProps:V,DropdownButton:se,Wrapper:te}=c0({className:n,defaultValue:r,disabled:o,native:!1,onChange:c,options:m,style:T,readOnly:x,value:O,variant:$,width:_}),U=E.useRef(null),z=E.useRef(null),B=E.useRef(null),{activeOption:Q,handleActivateOptionIndex:D,handleBlur:R,handleButtonKeyDown:b,handleDropdownKeyDown:P,handleFocus:y,handleMouseDown:F,handleOptionClick:I,handleSetDropdownRef:L,handleSetOptionRef:H,open:K,selectedOption:G}=ab({onBlur:d,onChange:c,onClose:v,onFocus:A,onKeyDown:g,onMouseDown:w,onOpen:f,open:p,options:X,value:Y,selectRef:z,setValue:ae,wrapperRef:B});E.useImperativeHandle(q,()=>({focus:ge=>{var We;(We=z.current)===null||We===void 0||We.focus(ge)},node:U.current,value:String(Y)}),[Y]);const oe=E.useMemo(()=>G?typeof i=="function"?i(G):G.label:"",[i,G]),ce=J?1:void 0,ee=E.useMemo(()=>s?{overflow:"auto",maxHeight:s}:void 0,[s]),de=i0(),le=E.useMemo(()=>X.map((ge,We)=>{const ke=`${Y}-${We}`,Kt=ge===Q,mt=ge===G;return k.createElement(sb,{activateOptionIndex:D,active:Kt,index:We,key:ke,onClick:I,option:ge,selected:mt,setRef:H})}),[Q,D,I,H,X,G,Y]);return k.createElement(te,{...V,$disabled:o,ref:B,shadow:S,style:{...T,width:_}},k.createElement("input",{name:u,ref:U,type:"hidden",value:String(Y),...a}),k.createElement(Cc,{"aria-disabled":o,"aria-expanded":K,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t??l,"aria-owns":J&&K?de:void 0,onBlur:R,onFocus:y,onKeyDown:b,onMouseDown:J?F:w,ref:z,role:"button",tabIndex:ce,...N},k.createElement(Jw,null,oe),se),J&&K&&k.createElement(tb,{id:de,onKeyDown:P,ref:L,role:"listbox",style:ee,tabIndex:0,variant:$},le))}const co=E.forwardRef(ub);co.displayName="Select";const cb=C.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,Qt=E.forwardRef(function({children:t,noPadding:n=!1,...r},o){return k.createElement(cb,{noPadding:n,ref:o,...r},t)});Qt.displayName="Toolbar";const db=C.div`
  padding: 16px;
`,Tr=E.forwardRef(function({children:t,...n},r){return k.createElement(db,{ref:r,...n},t)});Tr.displayName="WindowContent";const fb=C.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:e})=>e.material};
  ${({active:e})=>e===!1?W`
          background: ${({theme:t})=>t.headerNotActiveBackground};
          color: ${({theme:t})=>t.headerNotActiveText};
        `:W`
          background: ${({theme:t})=>t.headerBackground};
          color: ${({theme:t})=>t.headerText};
        `}

  ${Ya} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,$c=E.forwardRef(function({active:t=!0,children:n,...r},o){return k.createElement(fb,{active:t,ref:o,...r},n)});$c.displayName="WindowHeader";const pb=C.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Ae({style:"window"})}
  ${At()}
`,hb=C.span`
  ${({theme:e})=>W`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${e.borderLightest} 16.67%,
      ${e.material} 16.67%,
      ${e.material} 33.33%,
      ${e.borderDark} 33.33%,
      ${e.borderDark} 50%,
      ${e.borderLightest} 50%,
      ${e.borderLightest} 66.67%,
      ${e.material} 66.67%,
      ${e.material} 83.33%,
      ${e.borderDark} 83.33%,
      ${e.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,Xa=E.forwardRef(({children:e,resizable:t=!1,resizeRef:n,shadow:r=!0,...o},i)=>k.createElement(pb,{ref:i,shadow:r,...o},e,t&&k.createElement(hb,{"data-testid":"resizeHandle",ref:n})));Xa.displayName="Window";const mb=C(Zm)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,vb=C.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,gb=C.div`
  display: flex;
  flex-wrap: wrap;
`,Ft=C.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,yb=C.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,xb=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function wb(e,t){return new Date(e,t+1,0).getDate()}function bb(e,t,n){return new Date(e,t,n).getDay()}function Ab(e){const t=new Date(Date.parse(e)),n=t.getUTCDate(),r=t.getUTCMonth(),o=t.getUTCFullYear();return{day:n,month:r,year:o}}const kb=E.forwardRef(({className:e,date:t=new Date().toISOString(),onAccept:n,onCancel:r,shadow:o=!0},i)=>{const[a,l]=E.useState(()=>Ab(t)),{year:s,month:u,day:d}=a,c=E.useCallback(({value:f})=>{l(p=>({...p,month:f}))},[]),v=E.useCallback(f=>{l(p=>({...p,year:f}))},[]),A=E.useCallback(f=>{l(p=>({...p,day:f}))},[]),g=E.useCallback(()=>{const f=[a.year,a.month+1,a.day].map(p=>String(p).padStart(2,"0")).join("-");n==null||n(f)},[a.day,a.month,a.year,n]),w=E.useMemo(()=>{const f=Array.from({length:42}),p=bb(s,u,1);let m=d;const x=wb(s,u);return m=m<x?m:x,f.forEach((S,T)=>{if(T>=p&&T<x+p){const $=T-p+1;f[T]=k.createElement(Ft,{key:T,onClick:()=>{A($)}},k.createElement(yb,{active:$===m},$))}else f[T]=k.createElement(Ft,{key:T})}),f},[d,A,u,s]);return k.createElement(Xa,{className:e,ref:i,shadow:o,style:{margin:20}},k.createElement($c,null,k.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),k.createElement(Tr,null,k.createElement(Qt,{noPadding:!0,style:{justifyContent:"space-between"}},k.createElement(co,{options:xb,value:u,onChange:c,width:128,menuMaxHeight:200}),k.createElement(Tc,{value:s,onChange:v,width:100})),k.createElement(mb,null,k.createElement(vb,null,k.createElement(Ft,null,"S"),k.createElement(Ft,null,"M"),k.createElement(Ft,null,"T"),k.createElement(Ft,null,"W"),k.createElement(Ft,null,"T"),k.createElement(Ft,null,"F"),k.createElement(Ft,null,"S")),k.createElement(gb,null,w)),k.createElement(Qt,{noPadding:!0,style:{justifyContent:"space-between"}},k.createElement(we,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),k.createElement(we,{fullWidth:!0,onClick:n?g:void 0,disabled:!n},"OK"))))});kb.displayName="DatePicker";const Sb=e=>{switch(e){case"status":case"well":return W`
        ${Ae({style:"status"})}
      `;case"window":case"outside":return W`
        ${Ae({style:"window"})}
      `;case"field":return W`
        ${Ae({style:"field"})}
      `;default:return W`
        ${Ae()}
      `}},Eb=C.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>Sb(e)}
  ${({variant:e})=>At(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Tb=E.forwardRef(({children:e,shadow:t=!1,variant:n="window",...r},o)=>k.createElement(Eb,{ref:o,shadow:t,variant:n,...r},e));Tb.displayName="Frame";const Cb=C.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:e,variant:t})=>t==="flat"?e.flatDark:e.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${({variant:e})=>e!=="flat"&&W`
      box-shadow: -1px -1px 0 1px ${({theme:t})=>t.borderDark},
        inset -1px -1px 0 1px ${({theme:t})=>t.borderDark};
    `}
  ${e=>e.$disabled&&bt()}
`,$b=C.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,rn=E.forwardRef(({label:e,disabled:t=!1,variant:n="default",children:r,...o},i)=>k.createElement(Cb,{"aria-disabled":t,$disabled:t,variant:n,ref:i,...o},e&&k.createElement($b,{variant:n},e),r));rn.displayName="GroupBox";const Pb=C.div`
  ${({theme:e,size:t="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${gn(t)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;Pb.displayName="Handle";const Rb="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Ob=C.div`
  display: inline-block;
  height: ${({size:e})=>gn(e)};
  width: ${({size:e})=>gn(e)};
`,Db=C.span`
  display: block;
  background: ${Rb};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Ib=E.forwardRef(({size:e=30,...t},n)=>k.createElement(Ob,{size:e,ref:n,...t},k.createElement(Db,null)));Ib.displayName="Hourglass";const Nb=C.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,jb=C.div`
  position: relative;
`,Lb=C.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:e})=>e.material};
  border-top: 4px solid ${({theme:e})=>e.borderLightest};
  border-left: 4px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 4px solid ${({theme:e})=>e.borderDark};
  border-right: 4px solid ${({theme:e})=>e.borderDark};

  outline: 1px dotted ${({theme:e})=>e.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:e})=>e.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:e})=>e.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,_b=C(jt).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Fb=C.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:e})=>e.material};
  border-left: 2px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 2px solid ${({theme:e})=>e.borderDarkest};
  border-right: 2px solid ${({theme:e})=>e.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:e})=>e.material};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:e})=>e.material};
    border: 2px solid ${({theme:e})=>e.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:e})=>e.borderLightest},
      1px 1px 0 1px ${({theme:e})=>e.borderDarkest};
  }
`,d0=E.forwardRef(({backgroundStyles:e,children:t,...n},r)=>k.createElement(Nb,{ref:r,...n},k.createElement(jb,null,k.createElement(Lb,null,k.createElement(_b,{style:e},t)),k.createElement(Fb,null))));d0.displayName="Monitor";const Mb=C.div`
  display: inline-block;
  height: ${je.md};
  width: 100%;
`,Bb=C(jt)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,f0=W`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,zb=C.div`
  position: relative;
  top: 4px;
  ${f0}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,Ub=C.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${f0}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Hb=C.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,p0=17,Wb=C.span`
  display: inline-block;
  width: ${p0}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,Vb=E.forwardRef(({hideValue:e=!1,shadow:t=!0,value:n,variant:r="default",...o},i)=>{const a=e?null:`${n}%`,l=E.useRef(null),[s,u]=E.useState([]),d=E.useCallback(()=>{if(!l.current||n===void 0)return;const c=l.current.getBoundingClientRect().width,v=Math.round(n/100*c/p0);u(Array.from({length:v}))},[n]);return E.useEffect(()=>(d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)),[d]),k.createElement(Mb,{"aria-valuenow":n!==void 0?Math.round(n):void 0,ref:i,role:"progressbar",variant:r,...o},k.createElement(Bb,{variant:r,shadow:t},r==="default"?k.createElement(k.Fragment,null,k.createElement(zb,{"data-testid":"defaultProgress1"},a),k.createElement(Ub,{"data-testid":"defaultProgress2",value:n},a)):k.createElement(Hb,{ref:l,"data-testid":"tileProgress"},s.map((c,v)=>k.createElement(Wb,{key:v})))))});Vb.displayName="ProgressBar";const h0=W`
  width: ${It}px;
  height: ${It}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Qb=C(jt)`
  ${h0}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,Gb=C.div`
  ${Wn()}
  ${h0}
  outline: none;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:e})=>e.flatDark};
    border-radius: 50%;
  }
`,Kb=C.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
`,qb={flat:Gb,default:Qb},vt=E.forwardRef(({checked:e,className:t="",disabled:n=!1,label:r="",onChange:o,style:i={},variant:a="default",...l},s)=>{const u=qb[a];return k.createElement(kc,{$disabled:n,className:t,style:i},k.createElement(u,{$disabled:n,role:"presentation"},e&&k.createElement(Kb,{$disabled:n,variant:a})),k.createElement(Gi,{disabled:n,onChange:n?void 0:o,readOnly:n,type:"radio",checked:e,ref:s,...l}),r&&k.createElement(Sc,null,r))});vt.displayName="Radio";const Jb=typeof window<"u"?E.useLayoutEffect:E.useEffect;function kn(e){const t=E.useRef(e);return Jb(()=>{t.current=e}),E.useCallback((...n)=>(0,t.current)(...n),[])}function Sf(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Ef(e,t){return E.useMemo(()=>e==null&&t==null?null:n=>{Sf(e,n),Sf(t,n)},[e,t])}let Za=!0,Ws=!1,Tf;const Yb={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Xb(e){if("type"in e){const{type:t,tagName:n}=e;if(n==="INPUT"&&Yb[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function Zb(e){e.metaKey||e.altKey||e.ctrlKey||(Za=!0)}function Ol(){Za=!1}function eA(){this.visibilityState==="hidden"&&Ws&&(Za=!0)}function tA(e){e.addEventListener("keydown",Zb,!0),e.addEventListener("mousedown",Ol,!0),e.addEventListener("pointerdown",Ol,!0),e.addEventListener("touchstart",Ol,!0),e.addEventListener("visibilitychange",eA,!0)}function nA(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Za||Xb(t)}function rA(){Ws=!0,window.clearTimeout(Tf),Tf=window.setTimeout(()=>{Ws=!1},100)}function oA(){const e=E.useCallback(t=>{const n=dm.findDOMNode(t);n!=null&&tA(n.ownerDocument)},[]);return{isFocusVisible:nA,onBlurVisible:rA,ref:e}}function iA(e,t,n){return(n-t)*e+t}function Qo(e,t){if(t!==void 0&&"changedTouches"in e){for(let n=0;n<e.changedTouches.length;n+=1){const r=e.changedTouches[n];if(r.identifier===t)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function Go(e){return e&&e.ownerDocument||document}function aA(e,t){var n;const{index:r}=(n=e.reduce((o,i,a)=>{const l=Math.abs(t-i);return o===null||l<o.distance||l===o.distance?{distance:l,index:a}:o},null))!==null&&n!==void 0?n:{};return r??-1}const lA=C.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:e})=>e?"41px":"39px"};
    ${({isFocused:e,theme:t})=>e&&`
        outline: 2px dotted ${t.materialText};
        `}
  }

  ${({orientation:e,size:t})=>e==="vertical"?W`
          height: ${t};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `:W`
          width: ${t};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
`,m0=()=>W`
  position: absolute;
  ${({orientation:e})=>e==="vertical"?W`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:W`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,sA=C(jt)`
  ${m0()}
`,uA=C(jt)`
  ${m0()}

  border-left-color: ${({theme:e})=>e.flatLight};
  border-top-color: ${({theme:e})=>e.flatLight};
  border-right-color: ${({theme:e})=>e.canvas};
  border-bottom-color: ${({theme:e})=>e.canvas};
  &:before {
    border-left-color: ${({theme:e})=>e.flatDark};
    border-top-color: ${({theme:e})=>e.flatDark};
    border-right-color: ${({theme:e})=>e.flatLight};
    border-bottom-color: ${({theme:e})=>e.flatLight};
  }
`,cA=C.span`
  position: relative;
  ${({orientation:e})=>e==="vertical"?W`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:W`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:e})=>e==="flat"?W`
          ${Wn()}
          outline: 2px solid ${({theme:t})=>t.flatDark};
          background: ${({theme:t})=>t.flatLight};
        `:W`
          ${At()}
          ${Ae()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&Eo({mainColor:t.material,secondaryColor:t.borderLightest})}
`,nr=6,dA=C.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>e==="vertical"?W`
          right: ${-nr-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${nr}px;
          border-bottom: 2px solid ${({theme:t})=>t.materialText};
        `:W`
          bottom: ${-nr}px;
          height: ${nr}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:t})=>t.materialText};
          border-right: 1px solid ${({theme:t})=>t.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:t})=>e&&W`
      ${bt()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,fA=C.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>e==="vertical"?W`
          transform: translate(${nr+2}px, ${nr+1}px);
        `:W`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,Ki=E.forwardRef(({defaultValue:e,disabled:t=!1,marks:n=!1,max:r=100,min:o=0,name:i,onChange:a,onChangeCommitted:l,onMouseDown:s,orientation:u="horizontal",size:d="100%",step:c=1,value:v,variant:A="default",...g},w)=>{const f=A==="flat"?uA:sA,p=u==="vertical",[m=o,x]=yn({defaultValue:e,onChange:a??l,value:v}),{isFocusVisible:S,onBlurVisible:T,ref:$}=oA(),[O,_]=E.useState(!1),N=E.useRef(),q=E.useRef(null),J=Ef($,N),X=Ef(w,J),ae=kn(R=>{S(R)&&_(!0)}),Y=kn(()=>{O!==!1&&(_(!1),T())}),V=E.useRef(),se=E.useMemo(()=>n===!0&&Number.isFinite(c)?[...Array(Math.round((r-o)/c)+1)].map((R,b)=>({label:void 0,value:o+c*b})):Array.isArray(n)?n:[],[n,r,o,c]),te=kn(R=>{const b=(r-o)/10,P=se.map(I=>I.value),y=P.indexOf(m);let F=0;switch(R.key){case"Home":F=o;break;case"End":F=r;break;case"PageUp":c&&(F=m+b);break;case"PageDown":c&&(F=m-b);break;case"ArrowRight":case"ArrowUp":c?F=m+c:F=P[y+1]||P[P.length-1];break;case"ArrowLeft":case"ArrowDown":c?F=m-c:F=P[y-1]||P[0];break;default:return}R.preventDefault(),c&&(F=bf(F,c,o)),F=On(F,o,r),x(F),_(!0),a==null||a(F),l==null||l(F)}),U=E.useCallback(R=>{if(!N.current)return 0;const b=N.current.getBoundingClientRect();let P;p?P=(b.bottom-R.y)/b.height:P=(R.x-b.left)/b.width;let y;if(y=iA(P,o,r),c)y=bf(y,c,o);else{const F=se.map(L=>L.value),I=aA(F,y);y=F[I]}return y=On(y,o,r),y},[se,r,o,c,p]),z=kn(R=>{var b;const P=Qo(R,V.current);if(!P)return;const y=U(P);(b=q.current)===null||b===void 0||b.focus(),x(y),_(!0),a==null||a(y)}),B=kn(R=>{const b=Qo(R,V.current);if(!b)return;const P=U(b);l==null||l(P),V.current=void 0;const y=Go(N.current);y.removeEventListener("mousemove",z),y.removeEventListener("mouseup",B),y.removeEventListener("touchmove",z),y.removeEventListener("touchend",B)}),Q=kn(R=>{var b;s==null||s(R),R.preventDefault(),(b=q.current)===null||b===void 0||b.focus(),_(!0);const P=Qo(R,V.current);if(P){const F=U(P);x(F),a==null||a(F)}const y=Go(N.current);y.addEventListener("mousemove",z),y.addEventListener("mouseup",B)}),D=kn(R=>{var b;R.preventDefault();const P=R.changedTouches[0];P!=null&&(V.current=P.identifier),(b=q.current)===null||b===void 0||b.focus(),_(!0);const y=Qo(R,V.current);if(y){const I=U(y);x(I),a==null||a(I)}const F=Go(N.current);F.addEventListener("touchmove",z),F.addEventListener("touchend",B)});return E.useEffect(()=>{const{current:R}=N;R==null||R.addEventListener("touchstart",D);const b=Go(R);return()=>{R==null||R.removeEventListener("touchstart",D),b.removeEventListener("mousemove",z),b.removeEventListener("mouseup",B),b.removeEventListener("touchmove",z),b.removeEventListener("touchend",B)}},[B,z,D]),k.createElement(lA,{$disabled:t,hasMarks:!!se.length,isFocused:O,onMouseDown:Q,orientation:u,ref:X,size:gn(d),...g},k.createElement("input",{disabled:t,name:i,type:"hidden",value:m??0}),se&&se.map(R=>k.createElement(dA,{$disabled:t,"data-testid":"tick",key:R.value/(r-o)*100,orientation:u,style:{[p?"bottom":"left"]:`${(R.value-o)/(r-o)*100}%`}},R.label&&k.createElement(fA,{"aria-hidden":!0,"data-testid":"mark",orientation:u},R.label))),k.createElement(f,{orientation:u,variant:A}),k.createElement(cA,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":u,"aria-valuemax":r,"aria-valuemin":o,"aria-valuenow":m,onBlur:Y,onFocus:ae,onKeyDown:te,orientation:u,ref:q,role:"slider",style:{[p?"bottom":"left"]:`${(p?-100:0)+100*(m-o)/(r-o)}%`},tabIndex:t?void 0:0,variant:A}))});Ki.displayName="Slider";const pA=C.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${bc};
  overflow-y: auto;
`,Pc=E.forwardRef(function({children:t,...n},r){return k.createElement(pA,{ref:r,...n},t)});Pc.displayName="TableBody";const hA=C.td`
  padding: 0 8px;
`,St=E.forwardRef(function({children:t,...n},r){return k.createElement(hA,{ref:r,...n},t)});St.displayName="TableDataCell";const mA=C.thead`
  display: table-header-group;
`,Rc=E.forwardRef(function({children:t,...n},r){return k.createElement(mA,{ref:r,...n},t)});Rc.displayName="TableHead";const vA=C.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:e})=>e.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Ae()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:e})=>!e&&W`
      &:active {
        &:before {
          ${Ae({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:e})=>e.materialText};
  ${({$disabled:e})=>e&&bt()}
  &:hover {
    color: ${({theme:e})=>e.materialText};
    ${({$disabled:e})=>e&&bt()}
  }
`,ur=E.forwardRef(function({disabled:t=!1,children:n,onClick:r,onTouchStart:o=Qn,sort:i,...a},l){const s=i==="asc"?"ascending":i==="desc"?"descending":void 0;return k.createElement(vA,{$disabled:t,"aria-disabled":t,"aria-sort":s,onClick:t?void 0:r,onTouchStart:t?void 0:o,ref:l,...a},k.createElement("div",null,n))});ur.displayName="TableHeadCell";const gA=C.tr`
  color: inherit;
  display: table-row;
  height: calc(${je.md} - 2px);
  line-height: calc(${je.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:e})=>e.canvasText};
  &:hover {
    background: ${({theme:e})=>e.hoverBackground};
    color: ${({theme:e})=>e.canvasTextInvert};
  }
`,cr=E.forwardRef(function({children:t,...n},r){return k.createElement(gA,{ref:r,...n},t)});cr.displayName="TableRow";const yA=C.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,xA=C(jt)`
  &:before {
    box-shadow: none;
  }
`,v0=E.forwardRef(({children:e,...t},n)=>k.createElement(xA,null,k.createElement(yA,{ref:n,...t},e)));v0.displayName="Table";const wA=C.button`
  ${At()}
  ${Ae()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${je.md};
  line-height: ${je.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${wr}
    outline-offset: -6px;
  }
  ${e=>e.selected&&`
    z-index: 1;
    height: calc(${je.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:e})=>e.material};
    bottom: -4px;
    left: 2px;
  }
`,zr=E.forwardRef(({value:e,onClick:t,selected:n=!1,children:r,...o},i)=>k.createElement(wA,{"aria-selected":n,selected:n,onClick:a=>t==null?void 0:t(e,a),ref:i,role:"tab",...o},r));zr.displayName="Tab";const bA=C.div`
  ${At()}
  ${Ae()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,g0=E.forwardRef(({children:e,...t},n)=>k.createElement(bA,{ref:n,...t},e));g0.displayName="TabBody";const AA=C.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,kA=C.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
  }
`;function SA(e,t){const n=[];for(let r=t;r>0;r-=1)n.push(e.splice(0,Math.ceil(e.length/r)));return n}const y0=E.forwardRef(({value:e,onChange:t=Qn,children:n,rows:r=1,...o},i)=>{const a=E.useMemo(()=>{var l;const s=(l=k.Children.map(n,c=>{if(!k.isValidElement(c))return null;const v={selected:c.props.value===e,onClick:t};return k.cloneElement(c,v)}))!==null&&l!==void 0?l:[],u=SA(s,r).map((c,v)=>({key:v,tabs:c})),d=u.findIndex(c=>c.tabs.some(v=>v.props.selected));return u.push(u.splice(d,1)[0]),u},[n,t,r,e]);return k.createElement(AA,{...o,isMultiRow:r>1,role:"tablist",ref:i},a.map(l=>k.createElement(kA,{key:l.key},l.tabs)))});y0.displayName="Tabs";const EA=["blur","focus"],TA=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function Cf(e){return"nativeEvent"in e&&EA.includes(e.type)}function $f(e){return"nativeEvent"in e&&TA.includes(e.type)}const CA={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},$A=C.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${wc};
  text-align: center;
  font-size: 1rem;
  ${e=>CA[e.position]}
`,PA=C.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,RA=E.forwardRef(({className:e,children:t,disableFocusListener:n=!1,disableMouseListener:r=!1,enterDelay:o=1e3,leaveDelay:i=0,onBlur:a,onClose:l,onFocus:s,onMouseEnter:u,onMouseLeave:d,onOpen:c,style:v,text:A,position:g="top",...w},f)=>{const[p,m]=E.useState(!1),[x,S]=E.useState(),[T,$]=E.useState(),O=!n,_=!r,N=U=>{window.clearTimeout(x),window.clearTimeout(T);const z=window.setTimeout(()=>{m(!0),c==null||c(U)},o);S(z)},q=U=>{U.persist(),Cf(U)?s==null||s(U):$f(U)&&(u==null||u(U)),N(U)},J=U=>{window.clearTimeout(x),window.clearTimeout(T);const z=window.setTimeout(()=>{m(!1),l==null||l(U)},i);$(z)},X=U=>{U.persist(),Cf(U)?a==null||a(U):$f(U)&&(d==null||d(U)),J(U)},ae=O?X:void 0,Y=O?q:void 0,V=_?q:void 0,se=_?X:void 0,te=O?0:void 0;return k.createElement(PA,{"data-testid":"tooltip-wrapper",onBlur:ae,onFocus:Y,onMouseEnter:V,onMouseLeave:se,tabIndex:te},k.createElement($A,{className:e,"data-testid":"tooltip",position:g,ref:f,show:p,style:v,...w},A),t)});RA.displayName="Tooltip";const Vs=C(Sc)`
  white-space: nowrap;
`,x0=W`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":W`
          cursor: pointer;

          :focus {
            ${Vs} {
              background: ${({theme:t})=>t.hoverBackground};
              color: ${({theme:t})=>t.materialTextInvert};
              outline: 2px dotted ${({theme:t})=>t.focusSecondary};
            }
          }
        `}
`,OA=C.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:e})=>e&&W`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:t})=>t.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:e})=>e.borderDark};
      font-size: 12px;
    }
  }
`,DA=C.li`
  position: relative;
  padding-left: ${({hasItems:e})=>e?"0":"13px"};

  ${({isRootLevel:e})=>e?W`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:t})=>t.material};
            }
          }
        `:W`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:t})=>t.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:e})=>e.borderDark};
    }
  }
`,IA=C.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,NA=C.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${x0};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,Pf=C(kc)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${x0};
`,jA=C.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function Rf(e,t){return e.includes(t)?e.filter(n=>n!==t):[...e,t]}function Of(e){e.preventDefault()}function w0({className:e,disabled:t,expanded:n,innerRef:r,level:o,select:i,selected:a,style:l,tree:s=[]}){const u=o===0,d=E.useCallback(c=>{var v,A;const g=!!(c.items&&c.items.length>0),w=n.includes(c.id),f=(v=t||c.disabled)!==null&&v!==void 0?v:!1,p=f?Of:T=>i(T,c),m=f?Of:T=>i(T,c),x=a===c.id,S=k.createElement(jA,{"aria-hidden":!0},c.icon);return k.createElement(DA,{key:c.label,isRootLevel:u,role:"treeitem","aria-expanded":w,"aria-selected":x,hasItems:g},g?k.createElement(IA,{open:w},k.createElement(NA,{onClick:p,$disabled:f},k.createElement(Pf,{$disabled:f},S,k.createElement(Vs,null,c.label))),w&&k.createElement(w0,{className:e,disabled:f,expanded:n,level:o+1,select:i,selected:a,style:l,tree:(A=c.items)!==null&&A!==void 0?A:[]})):k.createElement(Pf,{as:"button",$disabled:f,onClick:m},S,k.createElement(Vs,null,c.label)))},[e,t,n,u,o,i,a,l]);return k.createElement(OA,{className:u?e:void 0,style:u?l:void 0,ref:u?r:void 0,role:u?"tree":"group",isRootLevel:u},s.map(d))}function LA({className:e,defaultExpanded:t=[],defaultSelected:n,disabled:r=!1,expanded:o,onNodeSelect:i,onNodeToggle:a,selected:l,style:s,tree:u=[]},d){const[c,v]=yn({defaultValue:t,onChange:a,onChangePropName:"onNodeToggle",value:o,valuePropName:"expanded"}),[A,g]=yn({defaultValue:n,onChange:i,onChangePropName:"onNodeSelect",value:l,valuePropName:"selected"}),w=E.useCallback((m,x)=>{if(a){const S=Rf(c,x);a(m,S)}v(S=>Rf(S,x))},[c,a,v]),f=E.useCallback((m,x)=>{g(x),i&&i(m,x)},[i,g]),p=E.useCallback((m,x)=>{m.preventDefault(),f(m,x.id),x.items&&x.items.length&&w(m,x.id)},[f,w]);return k.createElement(w0,{className:e,disabled:r,expanded:c,level:0,innerRef:d,select:p,selected:A,style:s,tree:u})}const _A=E.forwardRef(LA);_A.displayName="TreeView";const FA=d0;var MA={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"},BA=MA;const b0=Fe(BA);var zA={name:"rose",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#8a5b68",borderDarkest:"#26030b",borderLight:"#e5bec8",borderLightest:"#f1d4dc",canvas:"#ffffff",canvasText:"#050608",canvasTextDisabled:"#8a5b68",canvasTextDisabledShadow:"#f1d4dc",canvasTextInvert:"#ffffff",checkmark:"#050608",checkmarkDisabled:"#8a5b68",desktopBackground:"#808080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#ab5a71",headerNotActiveBackground:"#a19fa5",headerNotActiveText:"#615f68",headerText:"#ffffff",hoverBackground:"#ab5a71",material:"#d6adb8",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#8a5b68",materialTextDisabledShadow:"#f1d4dc",materialTextInvert:"#ffffff",progress:"#ab5a71",tooltip:"#fefbcc"},UA=zA;const HA=Fe(UA);var WA={name:"rainyDay",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#3d5367",borderDarkest:"#16233b",borderLight:"#91abc2",borderLightest:"#b7cee5",canvas:"#ffffff",canvasText:"#050608",canvasTextDisabled:"#3d5367",canvasTextDisabledShadow:"#b7cee5",canvasTextInvert:"#ffffff",checkmark:"#050608",checkmarkDisabled:"#3d5367",desktopBackground:"#000000",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#4b6480",headerNotActiveBackground:"#7f7f81",headerNotActiveText:"#ced0d9",headerText:"#ffffff",hoverBackground:"#4b6480",material:"#7a99b3",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#3d5367",materialTextDisabledShadow:"#b7cee5",materialTextInvert:"#ffffff",progress:"#4b6480",tooltip:"#fefbcc"},VA=WA;const QA=Fe(VA);var GA={name:"travel",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#695f50",borderDarkest:"#28251e",borderLight:"#9d8f80",borderLightest:"#baae9f",canvas:"#d8d0c8",canvasText:"#28251e",canvasTextDisabled:"#695f50",canvasTextDisabledShadow:"#baae9f",canvasTextInvert:"#ffffff",checkmark:"#28251e",checkmarkDisabled:"#695f50",desktopBackground:"#7c654c",flatDark:"#695f50",flatLight:"#9d8f80",focusSecondary:"#fefe03",headerBackground:"#404878",headerNotActiveBackground:"#605848",headerNotActiveText:"#908070",headerText:"#d8d0c8",hoverBackground:"#48604f",material:"#908070",materialDark:"#9a9e9c",materialText:"#28251e",materialTextDisabled:"#695f50",materialTextDisabledShadow:"#baae9f",materialTextInvert:"#ffffff",progress:"#48604f",tooltip:"#fefbcc"},KA=GA;const qA=Fe(KA);var JA={name:"marine",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#3c8d88",borderDarkest:"#050608",borderLight:"#98d2cb",borderLightest:"#b1dfdf",canvas:"#c3e2da",canvasText:"#050608",canvasTextDisabled:"#3c8d88",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",checkmark:"#050608",checkmarkDisabled:"#3c8d88",desktopBackground:"#2c4e47",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#000080",headerNotActiveBackground:"#7f7f7f",headerNotActiveText:"#ced0cf",headerText:"#ffffff",hoverBackground:"#000080",material:"#75c1ba",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#3c8d88",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#000080",tooltip:"#fefbcc"},YA=JA;const XA=Fe(YA);var ZA={name:"olive",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#4f4c02",borderDarkest:"#000000",borderLight:"#9d9d11",borderLightest:"#fcfd3e",canvas:"#ffffff",canvasText:"#000000",canvasTextDisabled:"#4f4c02",canvasTextDisabledShadow:"#fcfd3e",canvasTextInvert:"#000000",checkmark:"#000000",checkmarkDisabled:"#4f4c02",desktopBackground:"#666633",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#000000",headerBackground:"#F3DE2C",headerNotActiveBackground:"#4f4c02",headerNotActiveText:"#807f00",headerText:"#000000",hoverBackground:"#F3DE2C",material:"#807f00",materialDark:"#4f4c02",materialText:"#000000",materialTextDisabled:"#4f4c02",materialTextDisabledShadow:"#fcfd3e",materialTextInvert:"#000000",progress:"#F3DE2C",tooltip:"#fefbcc"},ek=ZA;const tk=Fe(ek);var nk={name:"theSixtiesUSA",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#6c1f71",borderDarkest:"#010001",borderLight:"#d982de",borderLightest:"#df9be7",canvas:"#ffffff",canvasText:"#010001",canvasTextDisabled:"#6c1f71",canvasTextDisabledShadow:"#df9be7",canvasTextInvert:"#010001",checkmark:"#010001",checkmarkDisabled:"#6c1f71",desktopBackground:"#92458a",flatDark:"#d067d7",flatLight:"#df9be7",focusSecondary:"#fefe03",headerBackground:"#050080",headerNotActiveBackground:"#a130a9",headerNotActiveText:"#df9be7",headerText:"#ffffff",hoverBackground:"#0f0",material:"#d067d7",materialDark:"#9a9e9c",materialText:"#010001",materialTextDisabled:"#6c1f71",materialTextDisabledShadow:"#df9be7",materialTextInvert:"#010001",progress:"#0f0",tooltip:"#fefbcc"},rk=nk;const ok=Fe(rk);var ik={name:"candy",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#d1579e",borderDarkest:"#44132f",borderLight:"#f1acd5",borderLightest:"#EFF1F3",canvas:"#EFF1F3",canvasText:"#000000",canvasTextDisabled:"#d1579e",canvasTextDisabledShadow:"#EFF1F3",canvasTextInvert:"#EFF1F3",checkmark:"#000000",checkmarkDisabled:"#d1579e",desktopBackground:"#b477bd",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#87255B",headerNotActiveBackground:"#a08796",headerNotActiveText:"#EBD2BE",headerText:"#EFF1F3",hoverBackground:"#256EFF",material:"#E5A4CB",materialDark:"#9a9e9c",materialText:"#000000",materialTextDisabled:"#d1579e",materialTextDisabledShadow:"#EFF1F3",materialTextInvert:"#EFF1F3",progress:"#256EFF",tooltip:"#fefbcc"},ak=ik;const lk=Fe(ak);var sk={name:"tokyoDark",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#1f2223",borderDarkest:"#070809",borderLight:"#5e696a",borderLightest:"#93a0a1",canvas:"#2f3435",canvasText:"#F4F4ED",canvasTextDisabled:"#1f2223",canvasTextDisabledShadow:"#93a0a1",canvasTextInvert:"#ffffff",checkmark:"#F4F4ED",checkmarkDisabled:"#1f2223",desktopBackground:"#181a1b",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#20FC8F",headerBackground:"#1f2223",headerNotActiveBackground:"#5e696a",headerNotActiveText:"#F4F4ED",headerText:"#F4F4ED",hoverBackground:"#F61067",material:"#465051",materialDark:"#1f2223",materialText:"#F4F4ED",materialTextDisabled:"#1f2223",materialTextDisabledShadow:"#93a0a1",materialTextInvert:"#ffffff",progress:"#F61067",tooltip:"#fefbcc"},uk=sk;const ck=Fe(uk);var dk={name:"vaporTeal",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#00706f",borderDarkest:"#000000",borderLight:"#2fcecd",borderLightest:"#58ffff",canvas:"#98DFEA",canvasText:"#000000",canvasTextDisabled:"#00706f",canvasTextDisabledShadow:"#58ffff",canvasTextInvert:"#000000",checkmark:"#000000",checkmarkDisabled:"#00706f",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#FCF6BD",headerBackground:"#246A73",headerNotActiveBackground:"#2fcecd",headerNotActiveText:"#246A73",headerText:"#58ffff",hoverBackground:"#FF99C8",material:"#01a8a8",materialDark:"#246A73",materialText:"#000000",materialTextDisabled:"#00706f",materialTextDisabledShadow:"#58ffff",materialTextInvert:"#000000",progress:"#FF99C8",tooltip:"#fefbcc"},fk=dk;const pk=Fe(fk),hk={original:b0,rose:HA,rainyDay:QA,travel:qA,marine:XA,olive:tk,theSixtiesUSA:ok,candy:lk,tokyoDark:ck,vaporTeal:pk},mk="/assets/ms_sans_serif-Du8rjN1q.woff2",vk="/assets/ms_sans_serif_bold-D5dpRRHG.woff2",gk="FETCH_COINS_INFO_REQUEST",A0="FETCH_COINS_INFO_SUCCESS",yk="FETCH_COINS_INFO_ERROR",xk="FETCH_COINS_DATA_REQUEST",k0="FETCH_COINS_DATA_SUCCESS",wk="FETCH_COINS_DATA_ERROR",bk="FETCH_EVENTS_SUCCESS",Ak="SET_EVENT_SEEN",kk="FETCH_NEWS_SUCCESS",S0="FOLLOW_COIN",E0="UNFOLLOW_COIN",T0="SET_THEME",C0="SET_BACKGROUND",$0="SET_CUSTOM_BACKGROUND",P0="TOGGLE_VINTAGE_FONT",R0="SET_FONT_SIZE",Sk="SET_USER_HOLDINGS",Ek="SET_USER_CURRENCY",Tk="DELETE_USER_HOLDINGS",Ck="SORT_USER_HOLDINGS",O0="TOGGLE_SCAN_LINES",D0="SET_SCAN_LINES_INTENSITY";var Oc={};Object.defineProperty(Oc,"__esModule",{value:!0});function I0(e,t){if(t)return e;throw new Error("Unhandled discriminated union member: "+JSON.stringify(e))}Oc.assertNever=I0;var $k=Oc.default=I0;function N0(e,t){return function(){return e.apply(t,arguments)}}const{toString:Pk}=Object.prototype,{getPrototypeOf:Dc}=Object,el=(e=>t=>{const n=Pk.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Lt=e=>(e=e.toLowerCase(),t=>el(t)===e),tl=e=>t=>typeof t===e,{isArray:Cr}=Array,fo=tl("undefined");function Rk(e){return e!==null&&!fo(e)&&e.constructor!==null&&!fo(e.constructor)&&ut(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const j0=Lt("ArrayBuffer");function Ok(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&j0(e.buffer),t}const Dk=tl("string"),ut=tl("function"),L0=tl("number"),nl=e=>e!==null&&typeof e=="object",Ik=e=>e===!0||e===!1,di=e=>{if(el(e)!=="object")return!1;const t=Dc(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Nk=Lt("Date"),jk=Lt("File"),Lk=Lt("Blob"),_k=Lt("FileList"),Fk=e=>nl(e)&&ut(e.pipe),Mk=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||ut(e.append)&&((t=el(e))==="formdata"||t==="object"&&ut(e.toString)&&e.toString()==="[object FormData]"))},Bk=Lt("URLSearchParams"),zk=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Co(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Cr(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let l;for(r=0;r<a;r++)l=i[r],t.call(null,e[l],l,e)}}function _0(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const F0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,M0=e=>!fo(e)&&e!==F0;function Qs(){const{caseless:e}=M0(this)&&this||{},t={},n=(r,o)=>{const i=e&&_0(t,o)||o;di(t[i])&&di(r)?t[i]=Qs(t[i],r):di(r)?t[i]=Qs({},r):Cr(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&Co(arguments[r],n);return t}const Uk=(e,t,n,{allOwnKeys:r}={})=>(Co(t,(o,i)=>{n&&ut(o)?e[i]=N0(o,n):e[i]=o},{allOwnKeys:r}),e),Hk=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Wk=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Vk=(e,t,n,r)=>{let o,i,a;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],(!r||r(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=n!==!1&&Dc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Qk=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Gk=e=>{if(!e)return null;if(Cr(e))return e;let t=e.length;if(!L0(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Kk=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Dc(Uint8Array)),qk=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},Jk=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Yk=Lt("HTMLFormElement"),Xk=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Df=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Zk=Lt("RegExp"),B0=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Co(n,(o,i)=>{let a;(a=t(o,i,e))!==!1&&(r[i]=a||o)}),Object.defineProperties(e,r)},eS=e=>{B0(e,(t,n)=>{if(ut(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(ut(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},tS=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Cr(e)?r(e):r(String(e).split(t)),n},nS=()=>{},rS=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Dl="abcdefghijklmnopqrstuvwxyz",If="0123456789",z0={DIGIT:If,ALPHA:Dl,ALPHA_DIGIT:Dl+Dl.toUpperCase()+If},oS=(e=16,t=z0.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function iS(e){return!!(e&&ut(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const aS=e=>{const t=new Array(10),n=(r,o)=>{if(nl(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=Cr(r)?[]:{};return Co(r,(a,l)=>{const s=n(a,o+1);!fo(s)&&(i[l]=s)}),t[o]=void 0,i}}return r};return n(e,0)},lS=Lt("AsyncFunction"),sS=e=>e&&(nl(e)||ut(e))&&ut(e.then)&&ut(e.catch),j={isArray:Cr,isArrayBuffer:j0,isBuffer:Rk,isFormData:Mk,isArrayBufferView:Ok,isString:Dk,isNumber:L0,isBoolean:Ik,isObject:nl,isPlainObject:di,isUndefined:fo,isDate:Nk,isFile:jk,isBlob:Lk,isRegExp:Zk,isFunction:ut,isStream:Fk,isURLSearchParams:Bk,isTypedArray:Kk,isFileList:_k,forEach:Co,merge:Qs,extend:Uk,trim:zk,stripBOM:Hk,inherits:Wk,toFlatObject:Vk,kindOf:el,kindOfTest:Lt,endsWith:Qk,toArray:Gk,forEachEntry:qk,matchAll:Jk,isHTMLForm:Yk,hasOwnProperty:Df,hasOwnProp:Df,reduceDescriptors:B0,freezeMethods:eS,toObjectSet:tS,toCamelCase:Xk,noop:nS,toFiniteNumber:rS,findKey:_0,global:F0,isContextDefined:M0,ALPHABET:z0,generateString:oS,isSpecCompliantForm:iS,toJSONObject:aS,isAsyncFn:lS,isThenable:sS};function ue(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}j.inherits(ue,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:j.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const U0=ue.prototype,H0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{H0[e]={value:e}});Object.defineProperties(ue,H0);Object.defineProperty(U0,"isAxiosError",{value:!0});ue.from=(e,t,n,r,o,i)=>{const a=Object.create(U0);return j.toFlatObject(e,a,function(s){return s!==Error.prototype},l=>l!=="isAxiosError"),ue.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const uS=null;function Gs(e){return j.isPlainObject(e)||j.isArray(e)}function W0(e){return j.endsWith(e,"[]")?e.slice(0,-2):e}function Nf(e,t,n){return e?e.concat(t).map(function(o,i){return o=W0(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function cS(e){return j.isArray(e)&&!e.some(Gs)}const dS=j.toFlatObject(j,{},null,function(t){return/^is[A-Z]/.test(t)});function rl(e,t,n){if(!j.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=j.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,f){return!j.isUndefined(f[w])});const r=n.metaTokens,o=n.visitor||d,i=n.dots,a=n.indexes,s=(n.Blob||typeof Blob<"u"&&Blob)&&j.isSpecCompliantForm(t);if(!j.isFunction(o))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(j.isDate(g))return g.toISOString();if(!s&&j.isBlob(g))throw new ue("Blob is not supported. Use a Buffer instead.");return j.isArrayBuffer(g)||j.isTypedArray(g)?s&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function d(g,w,f){let p=g;if(g&&!f&&typeof g=="object"){if(j.endsWith(w,"{}"))w=r?w:w.slice(0,-2),g=JSON.stringify(g);else if(j.isArray(g)&&cS(g)||(j.isFileList(g)||j.endsWith(w,"[]"))&&(p=j.toArray(g)))return w=W0(w),p.forEach(function(x,S){!(j.isUndefined(x)||x===null)&&t.append(a===!0?Nf([w],S,i):a===null?w:w+"[]",u(x))}),!1}return Gs(g)?!0:(t.append(Nf(f,w,i),u(g)),!1)}const c=[],v=Object.assign(dS,{defaultVisitor:d,convertValue:u,isVisitable:Gs});function A(g,w){if(!j.isUndefined(g)){if(c.indexOf(g)!==-1)throw Error("Circular reference detected in "+w.join("."));c.push(g),j.forEach(g,function(p,m){(!(j.isUndefined(p)||p===null)&&o.call(t,p,j.isString(m)?m.trim():m,w,v))===!0&&A(p,w?w.concat(m):[m])}),c.pop()}}if(!j.isObject(e))throw new TypeError("data must be an object");return A(e),t}function jf(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Ic(e,t){this._pairs=[],e&&rl(e,this,t)}const V0=Ic.prototype;V0.append=function(t,n){this._pairs.push([t,n])};V0.toString=function(t){const n=t?function(r){return t.call(this,r,jf)}:jf;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function fS(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Q0(e,t,n){if(!t)return e;const r=n&&n.encode||fS,o=n&&n.serialize;let i;if(o?i=o(t,n):i=j.isURLSearchParams(t)?t.toString():new Ic(t,n).toString(r),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Lf{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){j.forEach(this.handlers,function(r){r!==null&&t(r)})}}const G0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},pS=typeof URLSearchParams<"u"?URLSearchParams:Ic,hS=typeof FormData<"u"?FormData:null,mS=typeof Blob<"u"?Blob:null,vS={isBrowser:!0,classes:{URLSearchParams:pS,FormData:hS,Blob:mS},protocols:["http","https","file","blob","url","data"]},K0=typeof window<"u"&&typeof document<"u",gS=(e=>K0&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),yS=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",xS=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:K0,hasStandardBrowserEnv:gS,hasStandardBrowserWebWorkerEnv:yS},Symbol.toStringTag,{value:"Module"})),Pt={...xS,...vS};function wS(e,t){return rl(e,new Pt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return Pt.isNode&&j.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function bS(e){return j.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function AS(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function q0(e){function t(n,r,o,i){let a=n[i++];if(a==="__proto__")return!0;const l=Number.isFinite(+a),s=i>=n.length;return a=!a&&j.isArray(o)?o.length:a,s?(j.hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!l):((!o[a]||!j.isObject(o[a]))&&(o[a]=[]),t(n,r,o[a],i)&&j.isArray(o[a])&&(o[a]=AS(o[a])),!l)}if(j.isFormData(e)&&j.isFunction(e.entries)){const n={};return j.forEachEntry(e,(r,o)=>{t(bS(r),o,n,0)}),n}return null}function kS(e,t,n){if(j.isString(e))try{return(t||JSON.parse)(e),j.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const $o={transitional:G0,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=j.isObject(t);if(i&&j.isHTMLForm(t)&&(t=new FormData(t)),j.isFormData(t))return o?JSON.stringify(q0(t)):t;if(j.isArrayBuffer(t)||j.isBuffer(t)||j.isStream(t)||j.isFile(t)||j.isBlob(t))return t;if(j.isArrayBufferView(t))return t.buffer;if(j.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return wS(t,this.formSerializer).toString();if((l=j.isFileList(t))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return rl(l?{"files[]":t}:t,s&&new s,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),kS(t)):t}],transformResponse:[function(t){const n=this.transitional||$o.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&j.isString(t)&&(r&&!this.responseType||o)){const a=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(a)throw l.name==="SyntaxError"?ue.from(l,ue.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Pt.classes.FormData,Blob:Pt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};j.forEach(["delete","get","head","post","put","patch"],e=>{$o.headers[e]={}});const SS=j.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ES=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),n=a.substring(0,o).trim().toLowerCase(),r=a.substring(o+1).trim(),!(!n||t[n]&&SS[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},_f=Symbol("internals");function _r(e){return e&&String(e).trim().toLowerCase()}function fi(e){return e===!1||e==null?e:j.isArray(e)?e.map(fi):String(e)}function TS(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const CS=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Il(e,t,n,r,o){if(j.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!j.isString(t)){if(j.isString(r))return t.indexOf(r)!==-1;if(j.isRegExp(r))return r.test(t)}}function $S(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function PS(e,t){const n=j.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,a){return this[r].call(this,t,o,i,a)},configurable:!0})})}class ct{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(l,s,u){const d=_r(s);if(!d)throw new Error("header name must be a non-empty string");const c=j.findKey(o,d);(!c||o[c]===void 0||u===!0||u===void 0&&o[c]!==!1)&&(o[c||s]=fi(l))}const a=(l,s)=>j.forEach(l,(u,d)=>i(u,d,s));return j.isPlainObject(t)||t instanceof this.constructor?a(t,n):j.isString(t)&&(t=t.trim())&&!CS(t)?a(ES(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=_r(t),t){const r=j.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return TS(o);if(j.isFunction(n))return n.call(this,o,r);if(j.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=_r(t),t){const r=j.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Il(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(a){if(a=_r(a),a){const l=j.findKey(r,a);l&&(!n||Il(r,r[l],l,n))&&(delete r[l],o=!0)}}return j.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||Il(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return j.forEach(this,(o,i)=>{const a=j.findKey(r,i);if(a){n[a]=fi(o),delete n[i];return}const l=t?$S(i):String(i).trim();l!==i&&delete n[i],n[l]=fi(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return j.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&j.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[_f]=this[_f]={accessors:{}}).accessors,o=this.prototype;function i(a){const l=_r(a);r[l]||(PS(o,a),r[l]=!0)}return j.isArray(t)?t.forEach(i):i(t),this}}ct.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);j.reduceDescriptors(ct.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});j.freezeMethods(ct);function Nl(e,t){const n=this||$o,r=t||n,o=ct.from(r.headers);let i=r.data;return j.forEach(e,function(l){i=l.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function J0(e){return!!(e&&e.__CANCEL__)}function Po(e,t,n){ue.call(this,e??"canceled",ue.ERR_CANCELED,t,n),this.name="CanceledError"}j.inherits(Po,ue,{__CANCEL__:!0});function RS(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ue("Request failed with status code "+n.status,[ue.ERR_BAD_REQUEST,ue.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const OS=Pt.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const a=[e+"="+encodeURIComponent(t)];j.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),j.isString(r)&&a.push("path="+r),j.isString(o)&&a.push("domain="+o),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function DS(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function IS(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Y0(e,t){return e&&!DS(t)?IS(e,t):t}const NS=Pt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let a=i;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(a){const l=j.isString(a)?o(a):a;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function jS(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function LS(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,a;return t=t!==void 0?t:1e3,function(s){const u=Date.now(),d=r[i];a||(a=u),n[o]=s,r[o]=u;let c=i,v=0;for(;c!==o;)v+=n[c++],c=c%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-a<t)return;const A=d&&u-d;return A?Math.round(v*1e3/A):void 0}}function Ff(e,t){let n=0;const r=LS(50,250);return o=>{const i=o.loaded,a=o.lengthComputable?o.total:void 0,l=i-n,s=r(l),u=i<=a;n=i;const d={loaded:i,total:a,progress:a?i/a:void 0,bytes:l,rate:s||void 0,estimated:s&&a&&u?(a-i)/s:void 0,event:o};d[t?"download":"upload"]=!0,e(d)}}const _S=typeof XMLHttpRequest<"u",FS=_S&&function(e){return new Promise(function(n,r){let o=e.data;const i=ct.from(e.headers).normalize();let{responseType:a,withXSRFToken:l}=e,s;function u(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}let d;if(j.isFormData(o)){if(Pt.hasStandardBrowserEnv||Pt.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((d=i.getContentType())!==!1){const[w,...f]=d?d.split(";").map(p=>p.trim()).filter(Boolean):[];i.setContentType([w||"multipart/form-data",...f].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const w=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(w+":"+f))}const v=Y0(e.baseURL,e.url);c.open(e.method.toUpperCase(),Q0(v,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function A(){if(!c)return;const w=ct.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),p={data:!a||a==="text"||a==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:w,config:e,request:c};RS(function(x){n(x),u()},function(x){r(x),u()},p),c=null}if("onloadend"in c?c.onloadend=A:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(A)},c.onabort=function(){c&&(r(new ue("Request aborted",ue.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new ue("Network Error",ue.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const p=e.transitional||G0;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new ue(f,p.clarifyTimeoutError?ue.ETIMEDOUT:ue.ECONNABORTED,e,c)),c=null},Pt.hasStandardBrowserEnv&&(l&&j.isFunction(l)&&(l=l(e)),l||l!==!1&&NS(v))){const w=e.xsrfHeaderName&&e.xsrfCookieName&&OS.read(e.xsrfCookieName);w&&i.set(e.xsrfHeaderName,w)}o===void 0&&i.setContentType(null),"setRequestHeader"in c&&j.forEach(i.toJSON(),function(f,p){c.setRequestHeader(p,f)}),j.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),a&&a!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Ff(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Ff(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=w=>{c&&(r(!w||w.type?new Po(null,e,c):w),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const g=jS(v);if(g&&Pt.protocols.indexOf(g)===-1){r(new ue("Unsupported protocol "+g+":",ue.ERR_BAD_REQUEST,e));return}c.send(o||null)})},Ks={http:uS,xhr:FS};j.forEach(Ks,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Mf=e=>`- ${e}`,MS=e=>j.isFunction(e)||e===null||e===!1,X0={getAdapter:e=>{e=j.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let a;if(r=n,!MS(n)&&(r=Ks[(a=String(n)).toLowerCase()],r===void 0))throw new ue(`Unknown adapter '${a}'`);if(r)break;o[a||"#"+i]=r}if(!r){const i=Object.entries(o).map(([l,s])=>`adapter ${l} `+(s===!1?"is not supported by the environment":"is not available in the build"));let a=t?i.length>1?`since :
`+i.map(Mf).join(`
`):" "+Mf(i[0]):"as no adapter specified";throw new ue("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:Ks};function jl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Po(null,e)}function Bf(e){return jl(e),e.headers=ct.from(e.headers),e.data=Nl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),X0.getAdapter(e.adapter||$o.adapter)(e).then(function(r){return jl(e),r.data=Nl.call(e,e.transformResponse,r),r.headers=ct.from(r.headers),r},function(r){return J0(r)||(jl(e),r&&r.response&&(r.response.data=Nl.call(e,e.transformResponse,r.response),r.response.headers=ct.from(r.response.headers))),Promise.reject(r)})}const zf=e=>e instanceof ct?{...e}:e;function br(e,t){t=t||{};const n={};function r(u,d,c){return j.isPlainObject(u)&&j.isPlainObject(d)?j.merge.call({caseless:c},u,d):j.isPlainObject(d)?j.merge({},d):j.isArray(d)?d.slice():d}function o(u,d,c){if(j.isUndefined(d)){if(!j.isUndefined(u))return r(void 0,u,c)}else return r(u,d,c)}function i(u,d){if(!j.isUndefined(d))return r(void 0,d)}function a(u,d){if(j.isUndefined(d)){if(!j.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function l(u,d,c){if(c in t)return r(u,d);if(c in e)return r(void 0,u)}const s={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(u,d)=>o(zf(u),zf(d),!0)};return j.forEach(Object.keys(Object.assign({},e,t)),function(d){const c=s[d]||o,v=c(e[d],t[d],d);j.isUndefined(v)&&c!==l||(n[d]=v)}),n}const Z0="1.6.8",Nc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Nc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Uf={};Nc.transitional=function(t,n,r){function o(i,a){return"[Axios v"+Z0+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,l)=>{if(t===!1)throw new ue(o(a," has been removed"+(n?" in "+n:"")),ue.ERR_DEPRECATED);return n&&!Uf[a]&&(Uf[a]=!0,console.warn(o(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,a,l):!0}};function BS(e,t,n){if(typeof e!="object")throw new ue("options must be an object",ue.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const l=e[i],s=l===void 0||a(l,i,e);if(s!==!0)throw new ue("option "+i+" must be "+s,ue.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ue("Unknown option "+i,ue.ERR_BAD_OPTION)}}const qs={assertOptions:BS,validators:Nc},Jt=qs.validators;class _n{constructor(t){this.defaults=t,this.interceptors={request:new Lf,response:new Lf}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=br(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&qs.assertOptions(r,{silentJSONParsing:Jt.transitional(Jt.boolean),forcedJSONParsing:Jt.transitional(Jt.boolean),clarifyTimeoutError:Jt.transitional(Jt.boolean)},!1),o!=null&&(j.isFunction(o)?n.paramsSerializer={serialize:o}:qs.assertOptions(o,{encode:Jt.function,serialize:Jt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=i&&j.merge(i.common,i[n.method]);i&&j.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=ct.concat(a,i);const l=[];let s=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(s=s&&w.synchronous,l.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let d,c=0,v;if(!s){const g=[Bf.bind(this),void 0];for(g.unshift.apply(g,l),g.push.apply(g,u),v=g.length,d=Promise.resolve(n);c<v;)d=d.then(g[c++],g[c++]);return d}v=l.length;let A=n;for(c=0;c<v;){const g=l[c++],w=l[c++];try{A=g(A)}catch(f){w.call(this,f);break}}try{d=Bf.call(this,A)}catch(g){return Promise.reject(g)}for(c=0,v=u.length;c<v;)d=d.then(u[c++],u[c++]);return d}getUri(t){t=br(this.defaults,t);const n=Y0(t.baseURL,t.url);return Q0(n,t.params,t.paramsSerializer)}}j.forEach(["delete","get","head","options"],function(t){_n.prototype[t]=function(n,r){return this.request(br(r||{},{method:t,url:n,data:(r||{}).data}))}});j.forEach(["post","put","patch"],function(t){function n(r){return function(i,a,l){return this.request(br(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}_n.prototype[t]=n(),_n.prototype[t+"Form"]=n(!0)});class jc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(l=>{r.subscribe(l),i=l}).then(o);return a.cancel=function(){r.unsubscribe(i)},a},t(function(i,a,l){r.reason||(r.reason=new Po(i,a,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new jc(function(o){t=o}),cancel:t}}}function zS(e){return function(n){return e.apply(null,n)}}function US(e){return j.isObject(e)&&e.isAxiosError===!0}const Js={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Js).forEach(([e,t])=>{Js[t]=e});function ev(e){const t=new _n(e),n=N0(_n.prototype.request,t);return j.extend(n,_n.prototype,t,{allOwnKeys:!0}),j.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return ev(br(e,o))},n}const Te=ev($o);Te.Axios=_n;Te.CanceledError=Po;Te.CancelToken=jc;Te.isCancel=J0;Te.VERSION=Z0;Te.toFormData=rl;Te.AxiosError=ue;Te.Cancel=Te.CanceledError;Te.all=function(t){return Promise.all(t)};Te.spread=zS;Te.isAxiosError=US;Te.mergeConfig=br;Te.AxiosHeaders=ct;Te.formToJSON=e=>q0(j.isHTMLForm(e)?new FormData(e):e);Te.getAdapter=X0.getAdapter;Te.HttpStatusCode=Js;Te.default=Te;const Ll="https://www.cryptocompare.com";class HS{constructor(){this.fetchEvents=async()=>{const r=(await Te.get("https://api.coingecko.com/api/v3/events?upcoming_events_only=true")).data.data;return r.forEach(o=>o.id=o.organizer+o.title),r},this.fetchNews=async({timestamp:t,sortOrder:n="latest",limit:r=15})=>(await this.axios.get("/data/v2/news/",{params:{lTs:t,sortOrder:n,lang:"EN"}})).data.Data.splice(0,r),this.fetchTopList=async(t=30,n="EUR")=>(await this.axios.get("/data/top/totalvolfull",{params:{limit:t,tsym:n}})).data.Data.map(l=>l.CoinInfo.Name),this.fetchCoinsInfo=async()=>{const r=(await this.axios.get("/data/all/coinlist")).data.Data,o={};return Object.keys(r).sort((a,l)=>parseInt(r[a].SortOrder)-parseInt(r[l].SortOrder)).forEach(a=>{const l=r[a];o[a]={name:l.Name,symbol:l.Symbol,fullName:l.FullName.split(" ").join("_"),coinName:l.CoinName.split(" ").join("_"),imageURL:Ll+l.ImageUrl,totalCoinSupply:l.TotalCoinSupply,totalCoinsMined:l.TotalCoinsMined,sortOrder:parseInt(l.SortOrder)}}),o},this.fetchCoinsData=async(t,n="EUR")=>{const r=await this.axios.get("data/pricemultifull",{params:{fsyms:t.join(","),tsyms:n}}),o={},i=r.data.RAW;return Object.keys(i).forEach(a=>{o[a]={...i[a][n],imageURL:Ll+i[a][n].IMAGEURL}}),o},this.fetchCoinsDisplayData=async(t,n="EUR")=>{const r=await this.axios.get("data/pricemultifull",{params:{fsyms:t.join(","),tsyms:n}}),o={},i=r.data.DISPLAY;return Object.keys(i).forEach(a=>{o[a]={...i[a][n],imageURL:Ll+i[a][n].IMAGEURL}}),o},this.fetchCoinsHistoricalData=async(t,n,r="EUR")=>{let i,a,l;switch(n){case"1H":a=60,i=`https://min-api.cryptocompare.com/data/histominute?fsym=${t}&tsym=${r}&limit=${a}`;break;case"24H":a=24*60,l=a/180,i=`https://min-api.cryptocompare.com/data/histominute?fsym=${t}&tsym=${r}&limit=180&aggregate=${l}`;break;case"1M":a=30*24,l=a/180,i=`https://min-api.cryptocompare.com/data/histohour?fsym=${t}&tsym=${r}&limit=180&aggregate=${l}`;break;case"3M":a=90,i=`https://min-api.cryptocompare.com/data/histoday?fsym=${t}&tsym=${r}&limit=180`;break;case"1Y":a=360,l=a/180,i=`https://min-api.cryptocompare.com/data/histoday?fsym=${t}&tsym=EUR&limit=180&aggregate=${l}`;break;default:$k(n)}return(await this.axios.get(i)).data.Data},this.axios=Te.create({baseURL:"https://min-api.cryptocompare.com"})}}const Ys=new HS,WS=e=>({type:A0,payload:e}),tv=()=>async e=>{e({type:gk});try{const t=await Ys.fetchCoinsInfo(),n=await Ys.fetchTopList();e(WS({top:n,info:t}))}catch{e({type:yk})}},VS=e=>({type:k0,payload:e}),QS=()=>async(e,t)=>{e({type:xk});try{const n=t(),r=n.user.currency,o=Object.keys(n.user.wallet),i=n.user.followed,a=n.coins.top,l=[...new Set([...i,...a||[],...o||[]])],s=await Ys.fetchCoinsData(l,r);e(VS(s))}catch{e({type:wk})}},GS="foresome95",KS="0.0.1",qS=["Artur Bień","Marcus Yeagle"],JS="Golf app",YS=["react","styled-components","windows95","vaporwave"],XS={dev:"vite",build:"tsc && vite build",lint:"eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",preview:"vite preview"},ZS={"@vitejs/plugin-react":"^4.2.1","array-move":"^2.1.0","assert-never":"^1.2.1",axios:"^1.6.8","lodash.throttle":"^4.1.1","prop-types":"^15.6.2",react:"^16.7.0","react-dom":"^16.7.0","react-redux":"^6.0.0","react-router":"^5.2.0","react-router-dom":"^5.2.0","react-sortable-hoc":"^1.11.0",react95:"^4.0.0",recharts:"^2.1.15",redux:"^4.0.1","redux-thunk":"^2.3.0","styled-components":"^5.3.3"},eE={"@babel/core":"^7.2.2","@types/lodash.throttle":"^4.1.7","@types/react":"^17.0.3","@types/react-dom":"^17.0.2","@types/react-redux":"^7.1.16","@types/react-router-dom":"^5.1.7","@types/styled-components":"^5.1.9",typescript:"^4.7.3",vite:"^5.2.0"},tE={extends:"react-app"},nE=[">0.2%","not dead","not ie <= 11","not op_mini all"],rE={name:GS,version:KS,authors:qS,description:JS,keywords:YS,scripts:XS,dependencies:ZS,devDependencies:eE,eslintConfig:tE,browserslist:nE},oE=C.span`
  position: relative;
  display: inline-block;
  height: ${({height:e})=>e||24}px;
  width: ${({height:e})=>e?Math.round(.83*e):20}px;
  border-bottom: 2px solid #050608;
  border-right: 2px solid #050608;
  border-left: 2px solid #ced0cf;
  border-top: 2px solid #ced0cf;
  flex-shrink: 0;
  clip-path: polygon(17px 0, 100% 6px, 100% 100%, 0 100%, 0 0);
  background: #fff;
  :before,
  :after {
    content: "";
    position: absolute;
    right: -2px;
    top: -2px;
  }
  &:before {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-left: 2px solid black;
    border-bottom: 2px solid black;
    background: #fff;
    z-index: 1;
  }
  &:after {
    content: "";
    position: absolute;
    right: -2px;
    top: 0px;
    width: 7px;
    border-top: 2px solid #ced0cf;
    transform: rotate(45deg);
    z-index: 2;
  }
`,iE=C.img.attrs(()=>({loading:"lazy"}))`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  transition: 0.2s all ease-out;
`,nv=({imageURL:e,height:t,...n})=>h.jsx(oE,{...n,height:t,children:e&&h.jsx(iE,{src:e,alt:"icon"})});nv.propTypes={imageURL:Et.string};const aE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAARVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADc6ur3AAAAFnRSTlMAjNzYiLSwDnlOOhR07McoJPCgnG5kHZE9igAAATtJREFUeNrt28tOwzAQQNEpbZP0kUAh8f9/KqwQA8UlNBUSPWc/lu5uLNkBAAAAAAAAAABwxvSwoCn+TlcWdIwfEyJESJ0QIULqhAgRUifk3dQl42ZBY5dMcUsPJdnEglYlWccHQoQIESJEiJA3QoQIuXXIIRv6pIuqNg+3UdX1yXDI4ir7kj3FHNuSNDHHY8n2QoQIESJEiBAhQoQIOW/cJqtd1kZNu836kvTb7MJhu2yVh8eoey7JEHMcyixtzDGU5EWIECFChAgRIkSIkGtDxiaZucY32ec1vslmrvFNMt7LxUqIECFChAgRIkSIkLsNiTYbTkl3aTiLqu6UDG3m4ZkQIUKECBEiRIgQIb8zHZNxtaDxmExR5xu4ECHfEyJESJ0QIULqhPz7kGm9oCkAAAAAAAAAAAC+egX+heiUR07piAAAAABJRU5ErkJggg==",rv=C(v0)`
  display: flex;
  flex-direction: column;
  height: 100%;
  -webkit-overflow-scrolling: touch;

  thead,
  tbody,
  tr,
  th,
  td {
    display: block;
  }

  thead {
    flex-shrink: 0;
  }
  tbody {
    height: 100%;
    overflow-y: scroll;
  }

  tr {
    display: flex;
    border-bottom: 1px solid ${({theme:e})=>e.borderLight};
  }
  tr:hover th {
    color: ${({theme:e})=>e.materialText};
  }
  th,
  td {
    flex-shrink: 0 !important;
    box-sizing: border-box;
  }
  td:not(:last-child) {
    border-right: 1px solid ${({theme:e})=>e.borderLight};
  }
  td {
    cursor: pointer;
  }
`,Xs=[{id:1,date:"2024-11-17",betType:"Matchup",players:[{name:"Hiers, Paul",indx:3,tee:"black"},{name:"Sickles, Corey",indx:11,tee:"blue"}],score:null,action:null,sides:[{side:"Hiers",action:0},{side:"Sickles",action:-2.5}],prop:""},{id:2,date:"2024-11-17",betType:"Gross Score",players:[{name:"Atkinson, John",indx:3,tee:"blue"}],score:80,action:null,sides:[{side:"Over",action:-110},{side:"Under",action:-110}],prop:""},{id:3,date:"2024-11-17",betType:"Gross Score",players:[{name:"Taylor, Troy",indx:-2,tee:"black"}],score:68.5,action:null,sides:[{side:"Over",action:-110},{side:"Under",action:-110}],prop:""},{id:4,date:"2024-11-17",betType:"Group Net Winner",players:[{name:"Weiss, Frank",indx:9,tee:"blue"}],score:null,action:150,sides:null,prop:""},{id:5,date:"2024-11-17",betType:"Group Net Winner",players:[{name:"Steele, Matt",indx:9,tee:"blue"}],score:null,action:150,sides:null,prop:""},{id:6,date:"2024-11-17",betType:"Group Net Winner",players:[{name:"Westerheide, Pete",indx:9,tee:"blue"}],score:null,action:150,sides:null,prop:""},{id:7,date:"2024-11-17",betType:"Group Net Winner",players:[{name:"Yeagle, Marcus",indx:10,tee:"blue"}],score:null,action:150,sides:null,prop:""},{id:8,date:"2024-11-17",betType:"Proposition",players:[],score:null,action:150,sides:[{side:"Yes",action:-110},{side:"No",action:-110}],prop:"Gross Birdie on any 3 of the 5 par 3s"}],lE=({detailData:e,setIsOpened:t,isOpened:n})=>{console.log(e);function r(){return e.betType==="Gross Score"?`${e.score} - ${e.betType}`:e.betType}function o(){return h.jsx(h.Fragment,{children:h.jsx("ul",{children:e.players.map((i,a)=>h.jsxs("li",{children:[i.name," (",i.indx,")"]},i+a))})})}return h.jsx(Jm,{theme:b0,children:n&&h.jsx(sE,{onClick:()=>t(!1),children:h.jsx(uE,{onClick:i=>i.stopPropagation(),children:h.jsx("div",{style:{minWidth:"250px"},children:h.jsxs(rn,{variant:"flat",label:r(),children:[o(),e.betType==="Group Net Winner"?h.jsxs("div",{children:[h.jsxs("p",{children:["+",e.action]}),h.jsx("br",{}),h.jsxs(rn,{variant:"flat",label:"Group",children:[h.jsx("p",{children:"Steele, Matt"}),h.jsx("p",{children:"Weiss, Frank"}),h.jsx("p",{children:"Palm, Bryce"})]})]}):h.jsx(h.Fragment,{}),e.betType==="Gross Score"?h.jsx("div",{style:{paddingTop:"2.5rem"},children:e.sides.map((i,a)=>h.jsxs(we,{primary:i.action<0,disabled:!0,variant:"flat",style:{marginRight:"0.5rem"},children:[i.side," ",i.action]},a))}):h.jsx(h.Fragment,{}),e.betType==="Matchup"?h.jsx("div",{style:{paddingTop:"2.5rem"},children:e.sides.map((i,a)=>h.jsxs(we,{primary:i.action<0,disabled:!0,variant:"flat",style:{marginRight:"0.5rem"},children:[i.side," ",i.action]},a))}):h.jsx(h.Fragment,{}),e.betType==="Proposition"?h.jsxs("div",{children:[h.jsx("p",{style:{lineHeight:"1.5",margin:"1rem 0 2rem"},children:e.prop}),e.sides.map(i=>h.jsxs(we,{primary:i.action<0,disabled:!0,variant:"flat",style:{marginRight:"0.5rem"},children:[i.side," ",i.action]}))]}):h.jsx(h.Fragment,{})]})})})})})},sE=C.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  /* align-items: flex-end; */
  justify-content: space-around;
  top: 0;
  /* bottom: var(--safe-area-inset-bottom) + 1000; */
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem 2rem 0 2rem;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  z-index: 999;
`,uE=C.div`
  /* position: relative; */
  height: 210px;
  padding: 1rem;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  color: ${({theme:e})=>e.materialText};

  border-radius: 0.5rem;
  background: ${({theme:e})=>e.tooltip};
  filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.55));

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-100%, 100%);
    width: 1.5rem;
    height: 1.5rem;
    clip-path: polygon(0.5rem 0, 100% 0, 100% 100%);

    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    background: ${({theme:e})=>e.tooltip};
  }
`,ov=({history:e,data:t,location:n})=>{const[r,o]=E.useState(!1),[i,a]=E.useState(void 0),l=g=>{const w=new URLSearchParams(e.location.search),f=w.get("orderBy");let p;f===g?p=w.get("desc")!=="true":p=g!=="name";const m={pathname:e.location.pathname,search:`?orderBy=${g}&desc=${p}`,hash:e.location.hash};e.push(m)},s=new URLSearchParams(n.search);let u=s.get("orderBy"),d=s.get("desc")==="false"?-1:1;n.search.includes("orderBy")||(u="price",d=1);const c={price:"PRICE",change:"CHANGEPCT24HOUR",name:"coinName"};if(t){t=t.map(f=>({...f,PRICE:f.PRICE||0,CHANGEPCT24HOUR:f.CHANGEPCT24HOUR||0}));let g=c[u];d=g===c.name?-d:d,t.sort((f,p)=>(p[g]>f[g]?1:-1)*d).map((f,p)=>{const{name:m,coinName:x,symbol:S,imageURL:T,PRICE:$=0,CHANGEPCT24HOUR:O=0}=f;return h.jsxs(cr,{onClick:()=>e.push(`/coins/${S}`),children:[h.jsxs(St,{children:[h.jsx(dE,{height:22,imageURL:T}),h.jsx(fE,{children:`${x.toLowerCase()}.${m.toLowerCase()}`})]}),h.jsx(St,{}),h.jsx(St,{style:{textAlign:"right"},children:$.toFixed(2)}),h.jsxs(St,{style:{textAlign:"right"},children:[O.toFixed(2),"%"]})]},p)})}function v(g,w){console.log(g,w),o(!0),a(g)}console.log(Xs);let A=Xs.map((g,w)=>h.jsxs(cr,{onClick:()=>{},children:[h.jsx(St,{children:g.betType==="Gross Score"?`${g.betType} (${g.score})`:g.betType}),h.jsx(St,{children:g.betType==="Proposition"?"All":g.players.map(f=>f.name.substring(0,f.name.indexOf(","))+(g.players.length>1?"/":""))}),h.jsx(St,{style:{textAlign:"right"},children:h.jsx("img",{src:aE,style:{height:24,padding:"0.5rem"},onClick:()=>{v(g,w)}})})]},w));return h.jsxs(h.Fragment,{children:[h.jsxs(pE,{children:[h.jsx(Rc,{children:h.jsxs(cr,{children:[h.jsx(ur,{onClick:()=>l("name"),children:"Type"}),h.jsx(ur,{onClick:()=>l("name"),children:"Player(s)"}),h.jsx(ur,{onClick:()=>l("price"),children:"View"})]})}),h.jsx(Pc,{children:A})]}),h.jsx(lE,{isOpened:r,setIsOpened:g=>o(g),detailData:i})]})};ov.propTypes={data:Et.array};const cE=So(ov),dE=C(nv)`
  margin-right: 6px;
`,fE=C.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,pE=C(rv)`
  th:nth-child(1),
  td:nth-child(1) {
    flex: 4;
  }
  td:nth-child(1) {
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  th:nth-child(2),
  td:nth-child(2) {
    flex: 4;
  }

  th:nth-child(3),
  td:nth-child(3) {
    flex: 1;
  }
  th:nth-child(4),
  td:nth-child(4) {
    flex: 1;
  }
`;let hE=C(Xa)`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  height: calc(100% - var(--safe-area-inset-bottom));
  padding-bottom: 43px;
`,mE=C(Tr)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 4px;
  padding-left: 4px;
  padding-right: 4px;
  height: 100%;
`;const iv=({children:e,...t})=>h.jsx(hE,{children:h.jsx(mE,{...t,children:e})}),vE=({buttons:e,size:t="sm",...n})=>h.jsx(gE,{...n,children:e.map((r,o)=>h.jsx(yE,{onClick:r.onClick,active:r.active,size:t,fullWidth:!0,children:r.label},o))});let gE=C.nav`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem -1px;
  flex-shrink: 0;
`,yE=C(we)`
  margin: 0 1px;
`;function Ro(){const e=document.getElementById("root");E.useLayoutEffect(()=>{const t=window.pageYOffset;window.scrollTo(0,0);const{position:n}=window.getComputedStyle(e);return document.body.style.overflow="hidden",e.style.overflow="hidden",e.style.position="fixed",e.style.width="100%",e.style.height="100%",()=>{document.body.style.overflow="",e.style.overflow="",e.style.position=n,e.style.width="",e.style.height="",e.scrollTo(0,0),window.scrollTo(0,t)}},[e])}const xE="/assets/money-trans-C6TYdGmC.png",wE=({data:e,showingFollowing:t,showFollowing:n,showTop:r})=>{Ro();const o=Pm();return o.pathname+o.search,h.jsxs(iv,{children:[h.jsxs(bE,{children:[h.jsx("img",{style:{height:52,opacity:.9,padding:"5px 0 0 5px"},src:xE,alt:"icon"}),h.jsxs("h1",{children:["Sunday",h.jsx("span",{children:"Sides"}),h.jsxs("small",{children:["v",rE.version]})]})]}),h.jsx(AE,{children:h.jsx(cE,{data:e})}),h.jsx(vE,{size:"md",buttons:[{label:"Current",onClick:r,active:!t},{label:"Historical ",onClick:n,active:t}]})]})};let bE=C.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 5px;
  margin-bottom: 0.5rem;
  /* background: rgb(128, 128, 128); */

  h1 {
    /* background: -webkit-linear-gradient(transparent, black); */
    /* -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
    font-size: 1.8rem;
    font-weight: bold;
    /* font-family: arial; */
    font-style: italic;
    color: ${({theme:e})=>e.borderDark};
    text-shadow: 2px 2px white;
    span {
      /* font-weight: 100; */
    }
    small {
      font-size: 0.6em;
      color: black;
      font-weight: 100;
      text-shadow: 1px 1px white;

      color: ${({theme:e})=>e.borderDark};
      text-decoration: none;
      /* font-style: normal; */
      margin-left: 0.5rem;
    }
  }
`,AE=C.div`
  flex: 1;
  overflow: hidden;
  & > div {
    height: 100%;
  }
`;const kE=({topList:e,followed:t,coinsData:n,info:r,fetchCoinsInfo:o,fetchCoinsData:i})=>{const[a,l]=E.useState(!1);E.useEffect(()=>{r?i():o()},[r,o,e,i]);let s;return!r||!n?s=null:s=(a?t:e||[]).map(u=>({...r[u],...n[u]})),h.jsx(wE,{data:s,showingFollowing:a,showFollowing:()=>l(!0),showTop:()=>l(!1)})},SE=e=>({followed:e.user.followed,walletCoinsList:Object.keys(e.user.wallet),topList:e.coins.top,currency:e.user.currency,info:e.coins.info,coinsData:e.coins.coinsData}),EE=e=>({fetchCoinsInfo:()=>e(tv()),fetchCoinsData:()=>e(QS())}),TE=Ba(SE,EE),CE=TE(kE),$E=(e,t)=>({type:t?S0:E0,payload:e}),PE=e=>({type:T0,payload:e}),RE=e=>({type:C0,payload:e}),OE=e=>({type:$0,payload:e}),DE=e=>({type:P0,payload:e}),IE=e=>({type:O0,payload:e}),NE=e=>({type:D0,payload:e}),jE=e=>({type:R0,payload:e}),av=C(Xa)`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  
  height: 100%;
  height: calc(100% - var(--safe-area-inset-bottom));
`,lv=C($c)`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 4px;
`,Lc=C.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-left: -1px;
  margin-top: -1px;
  transform: rotateZ(45deg);
  position: relative;
  :before,
  :after {
    content: "";
    position: absolute;
    background: ${({theme:e})=>e.materialText};
  }
  :before {
    height: 100%;
    width: 3px;
    left: 50%;
    transform: translateX(-50%);
  }
  :after {
    height: 3px;
    width: 100%;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`,LE=({goBack:e,to:t,history:n,children:r,...o})=>{const i=Pm(),a=i.state?i.state.from:"/",l=()=>e?n.push(a):t?n.push(t):()=>{};return h.jsx(we,{onClick:l,...o,children:r})},_E=So(LE),sv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAGFBMVEUAAAD///8AAADAwMCAgIAA//8AAP8AAIBUAk3vAAAAAXRSTlMAQObYZgAAAGNJREFUCNc1yEEKgCAQheEhvMBU0lamoLVJ+8ouUIIHMPAG3r9hrLd5Hz+AOnkADETsth/9h5YM47CcGPs1CpTWixVc4a7Qay3gw+QFiny2AhziI3CuZMdoiOaYDMhKkuNq4AX1VQ75vyoE2wAAAABJRU5ErkJggg==",po=C.div`
  position: relative;
  padding: 0 0.25rem;
  height: 27px;
  line-height: 27px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  border-top: 2px solid ${({theme:e})=>e.borderDark};
  border-left: 2px solid ${({theme:e})=>e.borderDark};
  border-bottom: 2px solid ${({theme:e})=>e.borderLightest};
  border-right: 2px solid ${({theme:e})=>e.borderLightest};

  ${({draggable:e})=>e&&W`
      flex-shrink: 0;
      min-width: 4.75rem;
      &:after {
        content: "";
        position: absolute;
        width: 2rem;
        bottom: -2px;
        right: -2px;
        width: 25px;
        height: 25px;
        border: 2px solid ${({theme:t})=>t.material};
        background-image: linear-gradient(
          135deg,
          ${({theme:t})=>t.borderLightest} 16.67%,
          ${({theme:t})=>t.material} 16.67%,
          ${({theme:t})=>t.material} 33.33%,
          ${({theme:t})=>t.borderDark} 33.33%,
          ${({theme:t})=>t.borderDark} 50%,
          ${({theme:t})=>t.borderLightest} 50%,
          ${({theme:t})=>t.borderLightest} 66.67%,
          ${({theme:t})=>t.material} 66.67%,
          ${({theme:t})=>t.material} 83.33%,
          ${({theme:t})=>t.borderDark} 83.33%,
          ${({theme:t})=>t.borderDark} 100%
        );
        background-size: 8.49px 8.49px;
        clip-path: polygon(100% 0, 0 100%, 100% 100%);
      }
    `}
`,uv=C.div`
  display: flex;
  flex-wrap: no-wrap;
  ${po}:not(:last-child) {
    width: 100%;
    margin-right: 2px;
  }
`,Hf=[{value:"169",name:"Albertson, John"},{value:"192",name:"Arganbright, Marty"},{value:"121",name:"Atkinson, John"},{value:"31",name:"Banker, Jeff"},{value:"51",name:"Banner, John"},{value:"139",name:"Barker, Thomas"},{value:"176",name:"Bates, Mike"},{value:"235",name:"Beck , Riley"},{value:"259",name:"Benevento, Marc"},{value:"123",name:"Brady, Kenny"},{value:"195",name:"Braydich, Nick"},{value:"201",name:"Brooks, Bill"},{value:"155",name:"Bujnak, Pete"},{value:"101",name:"Burghardt, Jeff"},{value:"168",name:"Butch, Kevin"},{value:"207",name:"Caminiti, Dom"},{value:"203",name:"Clark, Greg"},{value:"150",name:"Coakley, Rob"},{value:"242",name:"Comisar, Jason"},{value:"109",name:"Coon, Tom"},{value:"152",name:"Crawford , Dave"},{value:"33",name:"Cron, Tim"},{value:"153",name:"DeMattio , Don"},{value:"6",name:"Dennison, Allen"},{value:"243",name:"Dietz, Andy"},{value:"115",name:"Dietz, Chris"},{value:"228",name:"Dillon, Mike"},{value:"12",name:"Dippolito, John"},{value:"231",name:"Dwyer, Timothy"},{value:"17",name:"Edwards, Spencer"},{value:"260",name:"Emmenegger, Dan"},{value:"174",name:"English, Dennis"},{value:"125",name:"English, Denny"},{value:"196",name:"Erickson, Aunders"},{value:"159",name:"Evans, Danny"},{value:"130",name:"Ewald, Shane"},{value:"133",name:"Eyen, Bob"},{value:"241",name:"Ferguson, Mike"},{value:"32",name:"Fields, Brandon"},{value:"18",name:"Fitori, Jim"},{value:"40",name:"Fitzpatrick, Sean"},{value:"28",name:"Fitzsimmons, Greg"},{value:"118",name:"Flaherty, Kevin"},{value:"55",name:"Francisco, Jim"},{value:"220",name:"Gearhiser, Kurt"},{value:"175",name:"gerber, john"},{value:"128",name:"Gimeson, Curran"},{value:"127",name:"Gimeson, Jim"},{value:"211",name:"Gimeson, Paul"},{value:"154",name:"Gleaves, Greg"},{value:"178",name:"Glick, Jordan"},{value:"23",name:"Goetz, Nick"},{value:"160",name:"Goldsberry, Craig"},{value:"258",name:"Graham, Carl"},{value:"35",name:"Grim, Chris"},{value:"26",name:"Grim, Mark"},{value:"186",name:"Hall, Tim"},{value:"234",name:"Hanks, David"},{value:"189",name:"Hart, Chuck"},{value:"190",name:"Heath, Joe"},{value:"194",name:"Heis, Adam"},{value:"138",name:"Herrick, Mike"},{value:"43",name:"Hickman, Tim"},{value:"219",name:"Hiers, Kyle"},{value:"48",name:"Hiers, Paul"},{value:"206",name:"Hiers, Wes"},{value:"248",name:"Hitch, David"},{value:"183",name:"Hocking, Kyle"},{value:"167",name:"Hook, Shane"},{value:"144",name:"Huss, Kyle"},{value:"265",name:"Janice, Rob"},{value:"218",name:"Johnson, Glenn"},{value:"84",name:"Jozefczyk, Harrison"},{value:"54",name:"Kauffman , Randy"},{value:"221",name:"Keener, Mike"},{value:"9",name:"Kendig, Shawn"},{value:"177",name:"Kennedy , Don"},{value:"36",name:"King, Mitch"},{value:"158",name:"Koehl, Kiki"},{value:"20",name:"Kramer, Brad"},{value:"187",name:"Kraynak, Michael"},{value:"19",name:"Kristoff, Jeff"},{value:"253",name:"Lacko, Alan"},{value:"15",name:"LaLonde, Brent"},{value:"81",name:"LaLonde, David"},{value:"205",name:"LeCrone, Brian"},{value:"129",name:"Lewis, Andy"},{value:"222",name:"M, I"},{value:"233",name:"Marbry, chris"},{value:"210",name:"Marton, Tyler"},{value:"156",name:"Matter, Kristen"},{value:"98",name:"Maunz, Brandon"},{value:"197",name:"McAninch, Sam"},{value:"151",name:"McCaffrey, Patrick"},{value:"198",name:"McCandless, Mike"},{value:"11",name:"McClure, Todd"},{value:"13",name:"McDaniel, Jay"},{value:"46",name:"Meikrantz, Dave"},{value:"85",name:"Meikrantz , Shelby"},{value:"142",name:"Mills, jeffrey"},{value:"100",name:"Minnie, Chris"},{value:"254",name:"Montello, Ben"},{value:"104",name:"Murphy, Spencer"},{value:"199",name:"Novosel, Todd"},{value:"16",name:"Padro, Rick"},{value:"208",name:'Palm, Bryce "plant"'},{value:"141",name:"Pappas, Peter"},{value:"204",name:"Parks, Guy"},{value:"149",name:"Parton, Kelly"},{value:"264",name:"Partridge, David"},{value:"202",name:"Peck, Nick"},{value:"200",name:"Peck, Steve"},{value:"172",name:"Perry, Justin"},{value:"8",name:"Pi, Mark"},{value:"99",name:"Politte, Jeffrey"},{value:"163",name:"Pratt, Lind"},{value:"261",name:"Proakis, Jake"},{value:"96",name:"Promenschenkel, George"},{value:"147",name:"Raines, Leila"},{value:"251",name:"Rath, Dave"},{value:"10",name:"Reda, Rob"},{value:"193",name:"Rice, Ryan"},{value:"266",name:"Riddle, Gary"},{value:"263",name:"Riley, Wes"},{value:"268",name:"Rini, Bill"},{value:"224",name:"Rubicky, Rob"},{value:"267",name:"Rumizen, Max"},{value:"238",name:"Russo, Bryan"},{value:"164",name:"Rutkoski, Jason"},{value:"27",name:"Salata, Parker"},{value:"227",name:"Salva, Heath"},{value:"225",name:"Santini, Jim"},{value:"116",name:"Savage, Sean"},{value:"97",name:"Schaffner, Jeff"},{value:"105",name:"Schmidt, Dustin"},{value:"214",name:"Sears, Rick"},{value:"182",name:"Secrest, Chad"},{value:"145",name:"Sever, Jeff"},{value:"108",name:"Sewell, Jon"},{value:"223",name:"Shannon, Derek"},{value:"173",name:"Sickles, Corey"},{value:"7",name:"Smith, Keith"},{value:"122",name:"Smith, Nick"},{value:"244",name:"Spitzer, Ryan"},{value:"44",name:"Sprankle, Fred"},{value:"45",name:"Sprankle , Scott"},{value:"226",name:"Stacey, Larry"},{value:"50",name:"Staley, Mike"},{value:"135",name:"Staley, Scott"},{value:"4",name:"Steele, Alan"},{value:"2",name:"Steele, Chad"},{value:"1",name:"Steele, Matt"},{value:"38",name:"Steele, Spencer"},{value:"171",name:"Steininger, Aaron"},{value:"29",name:"Stevenson, Dan"},{value:"47",name:"Struewing, Ben"},{value:"239",name:"Taronto, Drew"},{value:"229",name:"Taylor , Layla"},{value:"134",name:"Taylor, Troy"},{value:"148",name:"Tepe, David"},{value:"137",name:"Thieman, Josh"},{value:"136",name:"Thieman, Mike"},{value:"240",name:"Toranato, Drew"},{value:"170",name:"Towel, Rick"},{value:"140",name:"Trabue, Hugh"},{value:"252",name:"Uehlein, Pat"},{value:"53",name:"Valentine , Travis"},{value:"107",name:"VanHala, Andrew"},{value:"165",name:"VanLandingham, Tyler"},{value:"236",name:"Vincent, Denny"},{value:"162",name:"Vosler, Will"},{value:"262",name:"Walden, Jon"},{value:"117",name:"Walter, Dave"},{value:"21",name:"Watson, Brian"},{value:"102",name:"Weiss, Frank"},{value:"209",name:"Weiss, PJ"},{value:"34",name:"Welch, Dustin"},{value:"14",name:"West, Zach"},{value:"110",name:"Westerheide, Pete"},{value:"157",name:"White, Emily"},{value:"30",name:"Williamson, J"},{value:"5",name:"Wilson, Todd"},{value:"3",name:"Winhoven, Jason"},{value:"185",name:"Wissinger , Jared"},{value:"249",name:"Wolf, Josh"},{value:"103",name:"Wolff, Brett"},{value:"82",name:"Yeagle, Marcus"},{value:"181",name:"Zeller, Aaron"},{value:"146",name:"Zeller, Rod"},{value:"180",name:"Zeller, Rodd"}];class FE extends k.Component{constructor(t){super(t),this.handleChangeOrder=n=>{n===this.state.orderBy?this.setState(r=>({desc:!r.desc})):this.setState({orderBy:n,desc:!0})},this.state={orderBy:"rank",desc:!1}}render(){let{data:t,onFollow:n,searchPhrase:r}=this.props;r=r.toLowerCase();const o=Hf.filter(i=>r?i.name.toUpperCase().includes(r.toUpperCase()):!0).map((i,a)=>h.jsxs(cr,{onClick:l=>{n(i.name)},children:[h.jsx(St,{children:i.name}),h.jsx(St,{style:{textAlign:"right"},onClick:void 0,children:i.value})]},a));return h.jsxs(h.Fragment,{children:[h.jsx(BE,{children:h.jsxs(zE,{children:[h.jsx(Rc,{children:h.jsxs(cr,{children:[h.jsx(ur,{onClick:()=>this.handleChangeOrder("name"),children:"Name"}),h.jsx(ur,{onClick:()=>this.handleChangeOrder("indx"),children:"ID"})]})}),h.jsx(Pc,{children:o})]})}),h.jsx(ME,{children:h.jsxs(uv,{children:[h.jsx(po,{children:t?`Showing ${o?o.length:0} player(s) of ${Hf.length} total`:"Loading..."}),h.jsx(po,{draggable:!0})]})})]})}}const cv=So(FE);let ME=C.footer`
  margin-top: 0.5rem;
  margin-bottom: 2px;
  flex-shrink: 0;
`,BE=C.div`
  height: 40vh;
  flex: 1;
  margin-top: 0.5rem;
  overflow: hidden;
  & > div {
    height: 100%;
  }
`;const zE=C(rv)`
  th:nth-child(1),
  td:nth-child(1) {
    flex: 1;
  }
  td:nth-child(1) {
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  th:nth-child(2),
  td:nth-child(2) {
    width: 60px;
    text-align: center;
  }
  th:nth-child(3),
  td:nth-child(3) {
    width: 60px;
  }
  td:nth-child(3) {
    position: relative;
    text-align: center;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`,UE=({data:e,onFollow:t})=>{const[n,r]=E.useState(""),o=i=>{r(i.target.value)};return Ro(),h.jsxs(av,{style:{position:"absolute",top:"0"},children:[h.jsxs(lv,{children:[h.jsx("img",{alt:"Search icon",src:sv,style:{height:27,marginTop:2,marginRight:"0.5rem",imageRendering:"pixelated"}}),"Search",h.jsx(_E,{square:!0,size:"sm",style:{position:"absolute",right:2,top:3,fontWeight:"bold"},goBack:!0,children:h.jsx(Lc,{})})]}),h.jsxs(WE,{children:[h.jsxs(VE,{children:[h.jsx(To,{placeholder:"Search...",value:n,onChange:o,width:"100%",style:{marginRight:"4px",width:"100%"}}),h.jsx(we,{disabled:n==="",onClick:()=>r(""),children:"Clear"})]}),h.jsx(cv,{searchPhrase:n,data:e,onFollow:t})]})]})},HE=So(UE);let WE=C(Tr)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-top: 4px;
  padding-bottom: 37px;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
`;const VE=C(Qt)`
  margin: 0 -4px;
`,QE=({data:e,fetchCoinsInfo:t,setFollowedCoin:n})=>(E.useEffect(()=>{e||t()},[e,t]),h.jsx(HE,{data:e,onFollow:n})),GE=e=>{if(e.coins.info===null)return{data:null};{let t=e.coins.info;return{data:Object.keys(e.coins.info).map(n=>({...t[n],isFollowed:e.user.followed.includes(n)}))}}},KE=e=>({fetchCoinsInfo:()=>e(tv()),setFollowedCoin:(t,n)=>e($E(t,n))}),qE=Ba(GE,KE)(QE);var _c={exports:{}};const dv=(e,t,n)=>{const r=n<0?e.length+n:n,o=e.splice(t,1)[0];e.splice(r,0,o)},fv=(e,t,n)=>(e=e.slice(),dv(e,t,n),e);_c.exports=fv;_c.exports.default=fv;_c.exports.mutate=dv;const Zs=(e,t)=>e.toLocaleString("en-US",{style:"currency",currency:t}),pv=(e="top")=>W`
  position: relative;
  box-sizing: border-box;
  /* width: 100%;
  padding: 0.5rem; */
  background: ${({theme:t})=>t.material};
  border-top: ${({theme:t})=>["top","full"].includes(e)?`2px solid ${t.borderLight}`:"none"};
  padding: 2px;
  border-bottom: ${({theme:t})=>e==="top"?"none":`2px solid ${t.borderDarkest}`};
  border-left: 2px solid ${({theme:t})=>t.borderLight};
  border-right: 2px solid ${({theme:t})=>t.borderDarkest};
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: calc(100% - 4px);
    height: calc(100% - ${e==="full"?"4px":"2px"});
    ${["top","full"].includes(e)?"bottom: 0px":"top: 0px"};
    left: 0;
    pointer-events: none;
    border-left: 2px solid ${({theme:t})=>t.borderLightest};
    border-right: 2px solid ${({theme:t})=>t.borderDark};
    border-top: ${({theme:t})=>["top","full"].includes(e)?`2px solid ${t.borderLightest}`:"none"};
    border-bottom: ${({theme:t})=>e==="top"?"none":`2px solid ${t.borderDark}`};
  }
`,hv=()=>W`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
`,eu=({data:e,onPlayerSelect:t,onPlayerClear:n})=>{const[r,o]=E.useState(""),[i,a]=E.useState(!1),l=s=>{o(s.target.value)};return Ro(),h.jsxs("div",{children:[h.jsxs(JE,{children:[h.jsx("img",{alt:"Search icon",src:sv,style:{height:27,marginTop:2,marginRight:"0.5rem",imageRendering:"pixelated"}}),h.jsx(To,{placeholder:"Search Player...",value:r,onChange:l,width:"100%",style:{marginRight:"4px",width:"100%"}}),h.jsx(we,{disabled:r==="",onClick:()=>{o(""),a(!1),n()},children:"Clear"})]}),r&&!i&&h.jsx("div",{children:h.jsx(cv,{data:["foo","bar"],onFollow:s=>{t(s),a(!0)},searchPhrase:r})})]})};C(Tr)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-top: 4px;
  padding-bottom: 37px;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
`;const JE=C(Qt)`
  margin: 0 -4px;
`,YE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADNQTFRFAAAAgICAAAAA//////8A/wD/AP8AAIAA////////////wMDA////////////////////Rk6/PwAAABF0Uk5TAP////////93gmH/eVSDYFOVpFjCAAAAdUlEQVR4nFXOWQ6AMAgEUAaXqDHe/5waUxMjdaS48UVe6QDEC5CcS1dAAbMfqLzg4/r5oorDnpwLKnHQGrt5RoxrIw5ACyRYPEC0TwNWZIuLeEKXRiy3XKGUaeYKMV7joZR+Y8NoB0r536UABhd5gBujbnjrBAaVMBFmsr+JAAAAAElFTkSuQmCC",mv=({player:e,onClose:t})=>{E.useState("");const[n,r]=E.useState(void 0),[o,i]=E.useState(5);return Ro(),h.jsxs(av,{style:{position:"absolute",top:"0"},children:[h.jsxs(lv,{children:[h.jsx("img",{alt:"Juggle icon",src:YE,style:{height:27,marginTop:2,marginRight:"0.5rem",imageRendering:"pixelated"}}),"Place Bet",h.jsx(we,{square:!0,onClick:t,size:"sm",style:{position:"absolute",right:2,top:3,fontWeight:"bold"},children:h.jsx(Lc,{})})]}),h.jsxs(XE,{children:[h.jsxs("div",{children:[h.jsx("small",{children:"Select Side"}),h.jsx(co,{style:{flexShrink:0},width:"100%",onChange:a=>{console.log(a),r(a.value)},value:n,options:[...Xs.map(a=>({label:`${a.betType} - ${a.betType!=="Proposition"?a.players.map(l=>l.name):a.prop}${a.betType==="Gross Score"?`: ${a.score}`:""}`,value:a}))]})]}),(n==null?void 0:n.betType)==="Matchup"&&h.jsxs("div",{style:{display:"flex",justifyContent:"space-around",padding:"1rem"},children:[h.jsx("div",{children:h.jsx(we,{style:{padding:"0.75rem",minWidth:"100px"},size:"lg",children:n==null?void 0:n.sides[0].side})}),h.jsx("div",{children:h.jsxs(we,{style:{padding:"0.75rem",minWidth:"100px"},size:"lg",children:[n==null?void 0:n.sides[1].side,n==null?void 0:n.sides[1].action]})})]}),(n==null?void 0:n.betType)==="Proposition"&&h.jsxs("div",{style:{display:"flex",justifyContent:"space-around",padding:"1rem"},children:[h.jsx("div",{children:h.jsx(we,{style:{padding:"0.75rem",minWidth:"100px"},size:"lg",children:"Yes"})}),h.jsx("div",{children:h.jsx(we,{style:{padding:"0.75rem",minWidth:"100px"},size:"lg",children:"No"})})]}),(n==null?void 0:n.betType)==="Gross Score"&&h.jsxs("div",{style:{display:"flex",justifyContent:"space-around",padding:"0.65rem"},children:[h.jsx("div",{children:h.jsx(we,{style:{padding:"0.75rem",minWidth:"100px"},size:"lg",children:"Over"})}),h.jsx("div",{children:h.jsx(we,{style:{padding:"0.75rem",minWidth:"100px"},size:"lg",children:"Under"})})]}),h.jsxs("div",{style:{display:"flex"},children:[h.jsx("div",{style:{padding:"1.5rem 1rem 1rem 2rem"},children:h.jsx(Ki,{size:"300px",min:1,max:20,step:1,defaultValue:o,onChange:a=>i(a),marks:[{value:1,label:"$1"},{value:2,label:"$2"},{value:3,label:""},{value:4,label:""},{value:5,label:"$5"},{value:6,label:""},{value:7,label:""},{value:8,label:"$8"},{value:9,label:""},{value:10,label:"$10"},{value:11,label:""},{value:12,label:"$12"},{value:13,label:""},{value:14,label:"$14"},{value:15,label:""},{value:16,label:"$16"},{value:17,label:""},{value:18,label:"$18"},{value:19,label:""},{value:20,label:"$20"}],orientation:"vertical"})}),h.jsx("div",{style:{width:"100%",paddingTop:"1.5rem",paddingLeft:"1rem"},children:h.jsxs(rn,{label:n==null?void 0:n.betType,children:[(n==null?void 0:n.betType)==="Group Net Winner"&&h.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[h.jsx("h1",{style:{fontSize:"1.2rem",fontWeight:"bold",fontStyle:"italic"},children:`${n==null?void 0:n.players[0].name} (${n==null?void 0:n.players[0].indx})`}),h.jsxs("h1",{style:{fontSize:"1.2rem",fontWeight:"bold",fontStyle:"italic"},children:[(n==null?void 0:n.action)>0?"+":"",n==null?void 0:n.action]})]}),h.jsx("hr",{}),h.jsx("small",{children:"Wager:"}),h.jsx(Wf,{children:Zs(o,"USD")}),h.jsx("small",{children:"To Win:"}),h.jsx(Wf,{children:Zs(.9*o,"USD")})]})})]}),h.jsx(we,{style:{marginTop:"1.25rem"},size:"lg",primary:!0,fullWidth:!0,children:"Submit"})]})]})};let XE=C(Tr)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-top: 4px;
  padding-bottom: 37px;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
`;C(Qt)`
  margin: 0 -4px;
`;const Wf=C.div`
  height: 32px;
  font-size: 2rem;
  margin-right: 0.5rem;
  margin-bottom: 0.75rem;
  text-align: right;
`,ZE=({data:e,currency:t,sortUserHoldings:n,match:r,location:o})=>{e&&Math.round(e.map(w=>w.PRICE*w._amount).reduce((w,f)=>w+f,0)*100)/100;const[i,a]=E.useState(""),[l,s]=E.useState(""),[u,d]=E.useState(0);E.useState(0);const[c,v]=E.useState(!1);function A(w){s(w)}function g(){s("")}return h.jsxs(h.Fragment,{children:[h.jsx(eT,{children:h.jsxs(tT,{children:[h.jsxs("div",{children:[h.jsx("header",{children:h.jsx("a",{href:"",children:l})}),h.jsx(Ec,{}),h.jsxs("section",{children:[h.jsxs("div",{children:[h.jsx(nT,{children:l?h.jsx(Bs,{size:70,style:{background:"#008080"},children:l.split(",")[1].charAt(1)+l.split(",")[0].charAt(0)}):h.jsx(Bs,{size:70})}),l&&h.jsx(we,{style:{marginTop:"-30px"},square:!0,size:"sm",onClick:()=>{s(""),a("")},children:h.jsx(Lc,{})})]}),h.jsxs("div",{children:[h.jsx("small",{children:"Total at Risk"}),h.jsx(rT,{children:Zs(u,"USD")}),h.jsx("div",{children:h.jsx(Qt,{children:h.jsx(we,{disabled:!l,onClick:()=>v(!0),children:"Place Bet"})})})]})]}),h.jsx("div",{style:{paddingLeft:"0.5rem",fontSize:"0.9rem",lineHeight:"1.5"}})]}),h.jsx("div",{children:h.jsxs(uv,{children:[h.jsx(po,{children:new Date().toLocaleDateString()}),h.jsx(po,{style:{flexShrink:0,minWidth:65,textAlign:"center"},children:"0 bets(s)"})]})}),h.jsx(eu,{onPlayerSelect:A,onPlayerClear:g})]})}),c&&h.jsx(mv,{player:l,onClose:()=>{v(!1),setTimeout(()=>{document.getElementById("root").style.position=null},0)}})]})},eT=C.div`
  padding-bottom: 100px;
`,tT=C.div`
  ${pv("full")}
  box-shadow: rgba(0, 0, 0, 0.35) 4px 4px 10px 0px;
  margin-bottom: 4rem;
  padding-right: 2px;
  & > div {
    padding: 0.125rem 0.25rem;
  }
  & > div:first-child {
    margin-bottom: 0.5rem;
  }
  & > div:last-child {
    padding-bottom: 6px;
  }
  header {
    text-align: center;
    font-weight: bold;
    /* font-size: 1.1rem; */
    padding: 12px;
    min-height: 21px;
  }
  section {
    padding: 0.625rem 0;
    display: flex;
    justify-content: space-between;
    & > div {
      /*width: 100%;*/
      padding-left: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`,nT=C.div`
  margin-left: 0.25rem;
  display: inline-block;
  object-fit: cover;
  height: 85px;
  width: 85px;
  border-radius: 50%;
  flex-shrink: 0;
`,rT=C.div`
  height: 32px;
  font-size: 2rem;
  margin-right: 0.5rem;
  margin-bottom: 0.75rem;
  text-align: right;
`;C.section`
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
`;C.img`
  display: inline-block;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  object-fit: contain;
`;C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  ${pv("full")}
  padding: 0.75rem 0.5rem;
  line-height: 1;
`;C.header`
  display: flex;
  align-items: center;

  h4 {
    margin-left: 10px;
    margin-top: 2px;
  }
`;C.div`
  display: flex;
  align-items: center;
`;C.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 5px;
  data:last-child {
    color: ${({theme:e})=>e.borderDark};
    margin-top: 4px;
  }
`;C.div`
  display: flex;
  align-items: center;
`;C(Qt)`
  margin: 0 -4px;
`;var vv="Expected a function",Vf=NaN,oT="[object Symbol]",iT=/^\s+|\s+$/g,aT=/^[-+]0x[0-9a-f]+$/i,lT=/^0b[01]+$/i,sT=/^0o[0-7]+$/i,uT=parseInt,cT=typeof Oo=="object"&&Oo&&Oo.Object===Object&&Oo,dT=typeof self=="object"&&self&&self.Object===Object&&self,fT=cT||dT||Function("return this")(),pT=Object.prototype,hT=pT.toString,mT=Math.max,vT=Math.min,_l=function(){return fT.Date.now()};function gT(e,t,n){var r,o,i,a,l,s,u=0,d=!1,c=!1,v=!0;if(typeof e!="function")throw new TypeError(vv);t=Qf(t)||0,qi(n)&&(d=!!n.leading,c="maxWait"in n,i=c?mT(Qf(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v);function A($){var O=r,_=o;return r=o=void 0,u=$,a=e.apply(_,O),a}function g($){return u=$,l=setTimeout(p,t),d?A($):a}function w($){var O=$-s,_=$-u,N=t-O;return c?vT(N,i-_):N}function f($){var O=$-s,_=$-u;return s===void 0||O>=t||O<0||c&&_>=i}function p(){var $=_l();if(f($))return m($);l=setTimeout(p,w($))}function m($){return l=void 0,v&&r?A($):(r=o=void 0,a)}function x(){l!==void 0&&clearTimeout(l),u=0,r=s=o=l=void 0}function S(){return l===void 0?a:m(_l())}function T(){var $=_l(),O=f($);if(r=arguments,o=this,s=$,O){if(l===void 0)return g(s);if(c)return l=setTimeout(p,t),A(s)}return l===void 0&&(l=setTimeout(p,t)),a}return T.cancel=x,T.flush=S,T}function yT(e,t,n){var r=!0,o=!0;if(typeof e!="function")throw new TypeError(vv);return qi(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),gT(e,t,{leading:r,maxWait:t,trailing:o})}function qi(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function xT(e){return!!e&&typeof e=="object"}function wT(e){return typeof e=="symbol"||xT(e)&&hT.call(e)==oT}function Qf(e){if(typeof e=="number")return e;if(wT(e))return Vf;if(qi(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=qi(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(iT,"");var n=lT.test(e);return n||sT.test(e)?uT(e.slice(2),n?2:8):aT.test(e)?Vf:+e}var bT=yT;const AT=Fe(bT),Gf=document.querySelector('meta[name="theme-color"]'),Fl=e=>{Gf?Gf.setAttribute("content",e):console.warn('meta[name="theme-color"] not found')},kT=({value:e,onChange:t,disabled:n})=>{const r=k.useCallback(a=>{Fl(a),t(a)},[t]),o=k.useMemo(()=>AT(r,100),[r]),i=k.useCallback(a=>{o(a.target.value)},[o]);return h.jsx(n0,{value:e,onChange:i,disabled:n,onFocus:()=>Fl(e),onBlur:()=>Fl("#000000")})},ST=({theme:e,setTheme:t,background:n,backgrounds:r,setBackground:o,setCustomBackground:i,scanLines:a,toggleScanLines:l,setScanLinesIntensity:s,scanLinesIntensity:u,vintageFont:d,toggleVintageFont:c,fontSize:v,setFontSize:A})=>{const[g,w]=E.useState(0),[f,p]=E.useState(""),[m,x]=E.useState(),[S,T]=E.useState([]),$=N=>w(N),O=N=>{const q=r.find(J=>J.value===N.value);q&&o(q)};Ro();const _=k.useCallback(N=>i(N),[i]);return h.jsxs(iv,{style:{paddingTop:"0.5rem"},children:[h.jsxs(y0,{value:g,onChange:$,children:[h.jsx(zr,{value:0,children:"Background"}),h.jsx(zr,{value:1,children:"Appearance"}),h.jsx(zr,{value:2,children:"System"}),h.jsx(zr,{value:3,children:"Admin"})]}),h.jsxs(g0,{children:[g===0&&h.jsxs(h.Fragment,{children:[h.jsx(PT,{backgroundStyles:{background:n.value}}),h.jsxs(rn,{label:"Wallpaper:",style:{marginTop:20},children:[h.jsx(co,{width:"100%",onChange:O,menuMaxHeight:300,options:r,value:n.value}),h.jsxs($T,{isDisabled:r[0].value!==n.value,children:[h.jsx("label",{children:"Custom color:"}),h.jsx(kT,{value:r[0].value,disabled:r[0].value!==n.value,onChange:_})]})]})]}),g===1&&h.jsx(Ko,{children:h.jsxs(rn,{label:"Theme:",children:[h.jsx(vt,{value:"original",onChange:()=>t("original"),checked:e==="original",label:"original"}),h.jsx("br",{}),h.jsx(vt,{value:"rose",onChange:()=>t("rose"),checked:e==="rose",label:"🌹 Rose"}),h.jsx("br",{}),h.jsx(vt,{value:"rainyDay",onChange:()=>t("rainyDay"),checked:e==="rainyDay",label:"☔️ Rainy Day"}),h.jsx("br",{}),h.jsx(vt,{value:"travel",onChange:()=>t("travel"),checked:e==="travel",label:"🧳 Travel"}),h.jsx("br",{}),h.jsx(vt,{value:"marine",onChange:()=>t("marine"),checked:e==="marine",label:"🛳 Marine"}),h.jsx("br",{}),h.jsx(vt,{value:"olive",onChange:()=>t("olive"),checked:e==="olive",label:"🍸 Olive"}),h.jsx("br",{}),h.jsx(vt,{value:"theSixtiesUSA",onChange:()=>t("theSixtiesUSA"),checked:e==="theSixtiesUSA",label:"🌷 The 60's USA"}),h.jsx("br",{}),h.jsx(vt,{value:"candy",onChange:()=>t("candy"),checked:e==="candy",label:"🍭 Candy"}),h.jsx("br",{}),h.jsx(vt,{value:"tokyoDark",onChange:()=>t("tokyoDark"),checked:e==="tokyoDark",label:"📟 Tokyo Dark"}),h.jsx("br",{}),h.jsx(vt,{value:"vaporTeal",onChange:()=>t("vaporTeal"),checked:e==="vaporTeal",label:"💨 Vapor Teal"})]})}),g===2&&h.jsxs(h.Fragment,{children:[h.jsx(Ko,{children:h.jsxs(rn,{label:"Font:",children:[h.jsx(Us,{name:"vintageFont",value:"vintageFont",label:"Vintage font",onChange:()=>c(!d),checked:d}),h.jsxs(qf,{children:[h.jsx(Kf,{children:"Size:"}),h.jsx(Ki,{min:.8,max:1.2,step:null,value:v,onChange:N=>A(N),marks:[{value:.8,label:"0.8"},{value:.9,label:"0.9"},{value:1,label:"1"},{value:1.1,label:"1.1"},{value:1.2,label:"1.2"}]})]})]})}),h.jsx(Ko,{}),h.jsx(Ko,{children:h.jsx(rn,{label:h.jsx(Us,{style:{},name:"scanLines",value:"scanLines",label:"Scan lines",onChange:()=>l(!a),checked:a}),children:h.jsxs(qf,{children:[h.jsx(Kf,{isDisabled:!a,children:"Intensity:"}),h.jsx(Ki,{disabled:!a,step:10,min:0,max:100,marks:[{value:0,label:"min"},{value:100,label:"max"}],value:u,onChange:N=>s(N)})]})})})]}),g===3&&h.jsx(h.Fragment,{children:h.jsxs("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"},children:[h.jsxs("div",{children:[h.jsx("small",{children:"Bet Type"}),h.jsx(co,{style:{flexShrink:0},width:"100%",onChange:N=>p(N.value),value:f,options:[{value:"Matchup",label:"Matchup"},{value:"Gross Score",label:"Gross Score"},{value:"Group Net Winner",label:"Group Net Winner"},{value:"Proposition",label:"Prop"}]})]}),f&&f!=="Proposition"&&h.jsxs(h.Fragment,{children:[h.jsx("div",{children:S.length>0&&h.jsx("ul",{children:S.map((N,q)=>h.jsx("li",{children:`Player ${q+1}: ${N}`},q))})}),h.jsx("div",{children:h.jsx(eu,{onPlayerSelect:N=>{console.log(N),T([...S,N])}})})]}),f&&f==="Matchup"&&h.jsx("div",{children:h.jsx(eu,{onPlayerSelect:N=>{console.log(N)}})}),f==="Proposition"&&h.jsx("div",{children:h.jsx(To,{multiline:!0,rows:4,value:m,fullWidth:!0})}),h.jsxs("div",{style:{marginTop:"0.75rem"},children:[h.jsx("small",{children:"Action"}),h.jsx("br",{}),h.jsx(Tc,{defaultValue:-110,step:10,min:-1e3,max:1e3,width:"130"})]}),h.jsx("div",{style:{marginTop:"0.75rem"},children:h.jsx(we,{disabled:!f,fullWidth:!0,children:"Add Bet"})})]})})]})]})},ET=e=>({theme:e.user.theme,background:e.user.background,backgrounds:e.user.backgrounds,vintageFont:e.user.vintageFont,scanLines:e.user.scanLines,scanLinesIntensity:e.user.scanLinesIntensity,fontSize:e.user.fontSize}),TT=e=>({setTheme:t=>e(PE(t)),toggleVintageFont:t=>e(DE(t)),setFontSize:t=>e(jE(t)),toggleScanLines:t=>e(IE(t)),setScanLinesIntensity:t=>e(NE(t)),setBackground:t=>e(RE(t)),setCustomBackground:t=>e(OE(t))}),CT=Ba(ET,TT)(ST),$T=C.div`
  float: right;
  margin-right: 0px;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  label {
    font-size: 1rem;
    padding-right: 1rem;
    ${({isDisabled:e})=>e&&W`
        ${hv()}
      `}
  }
`,Ko=C.div`
  margin-bottom: 30px;
`,Kf=C.label`
  display: inline-block;
  margin-bottom: 0.5rem;
  margin-left: -1rem;
  ${({isDisabled:e})=>e&&W`
      ${hv()}
    `}
`,qf=C.div`
  padding: 8px 16px;
`,PT=C(FA)`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`,Jf=()=>({width:window.innerWidth,height:window.innerHeight});function RT(){const[e,t]=E.useState(Jf());return E.useEffect(()=>{const n=()=>t(Jf());return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)}),[e.width,e.height]}const OT="/assets/iphone-Db91Bbd8.png",DT=({children:e,maxWidth:t=450,maxHeight:n=896})=>{const[r,o]=RT();return r>t||o>n?h.jsx(IT,{maxWidth:t,maxHeight:n,id:"device",children:h.jsx(NT,{children:e})}):h.jsxs(h.Fragment,{children:[e,h.jsx(jT,{})]})},IT=C.div`
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: ${({maxHeight:e})=>e}px;
  width: ${({maxWidth:e})=>e}px;

  @media only screen and (min-width: 450px) and (min-height: 600px) {
    height: 680px;
    width: 400px;
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      pointer-events: none;
    }
    &:before {
      box-sizing: content-box;
      border-bottom: 70px solid black;
      border-top: 70px solid black;
      height: 100%;
      width: 100%;
      border-radius: 56px;
      box-shadow: 14px 4px 24px 18px rgba(0, 0, 0, 0.5);
    }
    &:after {
      z-index: 99999;
      transform: translate(-50%, -50%);
      height: 852px;
      width: 461px;
      background: url(${OT});
      background-size: cover;
    }
  }
  max-height: 100%;
  max-width: 100%;

  overflow: hidden;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.35);

  overflow: visible;
`,NT=C.div`
  height: 100%;
  width: 100%;
  overflow: auto;
`,jT=C.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0;
  background: black;
  z-index: 999;
  height: 0;
  height: var(--safe-area-inset-bottom);
`,LT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAAAAADAwMD///+AgID//wCAgACAAID0UdedAAAAAXRSTlMAQObYZgAAAMZJREFUKM+dz92twyAMBeB4Aw4Q7jMoCyRXDECVBSpPkP2X6ClOS/pW1UJGfPKPmL4M4PMt/8V9wm25gjhp0ckgn7Ht8HlAydvONFYY4ALPlgHsXrc9+HyKlNIreDkDcB56OoHzeoTt3AMuKDyxtAkmefdZEdGgvSv+RZ9rDUur1QACBCXovQO/Fdu8hoWJ0APQQFgVp8y19gpe7wqFJYPUqkVqBgK9B54+w2ROR00Ht7ygHYemFC/gAMiACfy2Y76EcOBv8QA5diEJAFLjpgAAAABJRU5ErkJggg==",_T="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAMAAABEH1h2AAAB4FBMVEUAAACen56zs7OfoJ+hoaGXmZdTU1NTU1Obm5ugoKCioqK/wL+ZmZm5ubmoqaidnp2en56rq6udnp2fn5+lpaWfoJ+cnpyMjo21tbWpqamenp5zc3OoqKidnZ2oqKhiY2KcnJyTlJN+f36pqalZWVmjpKOpqamfoZ9TU1NeXl5UVFSpqam+vr5UVFRnZ2e0uLWMjIyGh4aoqKioqKh9fX11dXVUVFTAwsC/v7/AwMBUVFS/v78AAADr5uu1sbW3s7c8PTzBwsFHR0fTztPo4+c6OjvW0dbIw8jFwcXAvMDj3+NOTk7g2+C7t7sfHh83ODcsLCy/wL+qqaqYlpk0MzXQzdHNyM3Lx8vb19spKCknJScLCwza1trQzM+Ihom5tblcXFwyMjLPys92dHdwb3AYGBhraWsiIiKjn6N+fH9FREUUFBRqZ2qopqiVk5ViYWOPjY96eHpnZmdTUlNJSkpAQEDd2N3CvsKKh4ovLy8RERHKxsqvq66TkJOBgIKFhIaDgYQFBQXY09ihoaGem56am5qLiowQDw8ICAnX19fU1NS9ub2PkI9tbW5mZGZfXl9XVVccHBzl4eXZ2dmytLOdnp1zcXRMS0wlJCWysrKxrbF7eXtaWVqlo6WAfYBzcnNXwFgbAAAAPHRSTlMAqgyUXhz112dPRzs4BK6hiYR4cGlVQS8q+vnx34A89dbS0snGup2cmJGOd3ZiSCL29vTt6cixq5+GeWD0SjRQAAAF90lEQVRIx+3W51vaQBwH8BZHa/fee++9Gy7WhCQEQikbBCLDgCAbRBTBiah1to6qrf9qL6MCBuvju77o7/F5znD5kLv7XhL2/K+61fRgX3Oqed/9JvHQsNG879abew8+PH785IliZ34VEarvoni4+BnZrLYrO+qDM+Kp4xsHheOxan5gB6w4boiF+/jSTRuOKyQ+NB4Ojw/tzM+m0ukOv1DT6+n0+lmRB2KD7tlOyE//nV9sR5A5AFAAQCSNIPOv9ih4/nlk4pvRAXnj3+ftFzmQeGdX00GBRyYmojvxUxdGOIdufs5ojBqNxrhmfj63MTJS0ENu+DY5sAL5qe31IU0mM+dLJDpahcrEfImlVCbj6YP8pzT4h9vzG3BtliMAzErBcQCMtgr/wrlP7sQfrck4+oebRiYnhbkf327k143TJocj5Y6XYiaPR+9w5Gbi8ULa4dC1V/GG+nq/xmRKJQYHecoZDJFoYbAr5fG0JguDnEPgE8Lg79TnzwMIkhkFoBteyo8rcYsUnA+AAVPV0h2pn3dxC/cCVOKowCPfJqJ8cLfrjfxZyZ/xeDRw8MlQprXX1tPjoiiWy8HBF4u+dM6jcS+OcZ2Q36yXt93ethaPd3scjlieZRm1Ootptc58iV86e6u/FPeFcjldGfJLcn6d31YDACzBr4/ZlEozACimVOJWMffALwDcdumGPS/P+2sO8miFYygqcVTgBRTd5IatI79R8C+rVBr/WqI7tbxcdDmdZpIkzU6n00uSgFOp2pJra1xapbK38/xwjT6p0elaE0bjkkenW1+lqCwzpXbRNO1lprIYTQ+vRo2FDH9K1NjdyXNFDb+gQhB9LwBdMLg5Cxw4C1CXkg8OMIRSSZNi7rlegHbpeH6uWn8cq+IpgaMiR1GRo0Lu+hIq8XcVfPa1bzoVCmlm/P7u2fX1IkUQmNVqdREEYYatGbZeq3WVE0+JLYdCc37fxSZJP02FwzlfMPjLFA5rVjGMZBjGQi8smFmGwRYWaCvLZImFhWEQDHbBUzLuYHB6JRy+L/EjISlUPRyVWqkkGIBa8Jrcp5xKpZYCMDghW3QpjCD7JB7ZwocZFPJK7hYUFTkqcVTgzaI+zPNw28zMTDKZdKsxDPNaLC7YmC1i67JYvGaxzXMazVwsmczA7FPS1Q2QI0Pl9laDVotNoayVxnG48qwLx/krMwSOa0mUzdpw3MkaDAlHuX0IiubK3IVSAaXSpgZoP103dzXcxz1ZIXdYlbmfq+GowAl57iJHN/m9zdxvzWrmEcQz6jLz5XK5zMFYR0e3z+fr7uiY5Xy+wVXxY77iK3ClU7NX+dylerso7TqSFoODT5vqChiF4AClVSqDdn7XvRehNP7FzwJHeT4s5zqRoxX+tJorxnheYllSi+PDapbleF4uD/ElcH71WZbqwXGRK6r5Yf7qpiDM2mvx8lknIPckOY5LcjG4m+aLFq8XgwW74yvy+31RJa68c0oMzj2OIB1fvnyCf0DDP2ml4NQAiHfcHtn9Xp27u4/nn/j6LnK0krucX4P8cx5uqyzDWOH8iyL/8ocnGIZy4riNYpjCNtxj7Ld6MfFe97VLV/8icF0JfmwRuwdW5Py2LHeBU5D/0Mhyl/G98tyluUMuy132nD8KeS6uVvf30DSRVaunt/AoTfeQajXppOnROryBz/2n04n1k6SXcDq7/nAxuPkCSVox2G0lyd4A5C9q+TFZ7gLfNveXtfzybnKXvyJPQG6CTxsCTtBi02oHx2t5F5w3Ad+2sLsYkPOTfO5RirIM22wYSVEbleCE3OM2G2GlKCthsxkd8vf7/l3mfqSWN+4y9zu1/DTkgaTbPRDJ54Mlt1tTRpDQV6GKKjh3fz4fGYDdP/P5hE7+u64FntOus9tzHpPJo7fr4UsYCeuFssMQygGTyaS32/Ww21GW/6Y9APkuqq2llp/ZJT9Xy6/EWiulkrVba1pRyxVXzpw5c+BAS8vp042NjftPnTx54sTly8eONTQ03D16dK9UR+82HDuxv+VQ0+E9/0L9BsIFFzjCGiw3AAAAAElFTkSuQmCC",FT="/assets/shake-CaDFd7xV.png",MT=e=>{const t=e.location.pathname;return h.jsx(zT,{position:"fixed",children:h.jsxs(UT,{children:[h.jsx(Bl,{active:t==="/",onClick:()=>e.history.push("/"),fullWidth:!0,size:"lg",children:h.jsx(Ml,{src:_T,alt:"icon"})}),h.jsx(Bl,{active:t.startsWith("/wallet"),onClick:()=>e.history.push("/wallet"),fullWidth:!0,size:"lg",children:h.jsx(Ml,{style:{height:21,opacity:.9},src:FT,alt:"icon"})}),h.jsx(Bl,{active:t==="/settings",onClick:()=>e.history.push("/settings"),fullWidth:!0,size:"lg",children:h.jsx(Ml,{src:LT,alt:"icon",style:{height:30}})})]})})},BT=So(MT),zT=C(Xm)`
  top: auto;
  bottom: 0;
  z-index: 2;
  bottom: var(--safe-area-inset-bottom);
`,Ml=C.img`
  /* image-rendering: pixelated; */
  filter: grayscale(1);
  height: 24px;
`,Bl=C(we)`
  margin: 0 1px;
`,UT=C(Qt)`
  margin: 0 -1px;
`,HT=pw`
  ${hw}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${mk}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${vk}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  html {
    font-size: ${({fontSize:e})=>`${e*14}px`};
  }
  html, body, #root {
    height: 100%;
    font-family: ${({vintageFont:e})=>e?"ms_sans_serif":"sans-serif"};
  }
  body {
    color: ${({theme:e})=>e.materialText};
    --safe-area-inset-bottom: constant(safe-area-inset-bottom); 
    --safe-area-inset-bottom: env(safe-area-inset-bottom);
    &:before {
      content: '';
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: var(--safe-area-inset-bottom);
      background: black;
      z-index: 9999999;
    }
    ${({scanLines:e,scanLinesIntensity:t})=>e&&W`
        &:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 99999;
          opacity: 0.7;
          filter: alpha(opacity=70);
          position: fixed;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          background-image: radial-gradient(
              ellipse at center,
              transparent 0,
              transparent 60%,
              rgba(0, 0, 0, ${.15*t/100}) 100%
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 1px,
              rgba(0, 0, 0, ${.35*t/100}) 3px
            );
          background-size: 100% 100%, 100% 6px;
          -webkit-animation: flicker 0.3s linear infinite;
          animation: flicker 0.3s linear infinite;
        }
      `} 
  }
  #background {
    position: fixed;
    z-index: -1;
    top: 0;
    bottom: 0;
    left:0;
    right: 0;
    height: 100vh;
    width: 100vw;
    background: ${({background:e})=>e};
    background-attachment: fixed;
    background-repeat: repeat;
  }
  * {
      font-family: ${({vintageFont:e})=>e?"ms_sans_serif":"sans-serif"};
  }
  #root input {
      font-family: ${({vintageFont:e})=>e?"ms_sans_serif":"sans-serif"};
  }

  * {
    scrollbar-width: none
  }
  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
`,WT=e=>({theme:e.user.theme,background:e.user.background,vintageFont:e.user.vintageFont,fontSize:e.user.fontSize,scanLines:e.user.scanLines,scanLinesIntensity:e.user.scanLinesIntensity}),VT=({theme:e,background:t,vintageFont:n,fontSize:r,scanLines:o,scanLinesIntensity:i})=>h.jsx(DT,{children:h.jsx(Jm,{theme:hk[e],children:h.jsxs(h.Fragment,{children:[h.jsx(HT,{vintageFont:n,fontSize:r,scanLines:o,scanLinesIntensity:i,background:t.value}),h.jsx(z1,{children:h.jsxs(h.Fragment,{children:[h.jsxs(af,{children:[h.jsx(An,{exact:!0,path:"/coins/:coin",component:void 0}),h.jsx(An,{exact:!0,path:"/search",component:void 0}),h.jsx(BT,{})]}),h.jsxs(af,{children:[h.jsx(An,{exact:!0,path:"/",component:CE}),h.jsx(An,{exact:!0,path:"/search",component:qE}),h.jsx(An,{exact:!0,path:"/add/bet",component:mv}),h.jsx(An,{path:"/wallet/",component:ZE}),h.jsx(An,{exact:!0,path:"/settings",component:CT})]})]})})]})})}),QT=Ba(WT)(VT);window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/);function GT(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}function gv(e){var t=function(r){var o=r.dispatch,i=r.getState;return function(a){return function(l){return typeof l=="function"?l(o,i,e):a(l)}}};return t}var yv=gv();yv.withExtraArgument=gv;const KT={top:null,info:null,coinsData:null},qT=(e=KT,t)=>{switch(t.type){case A0:const{top:n,info:r}=t.payload;return{...e,top:n,info:r};case k0:return{...e,coinsData:t.payload};default:return e}},JT=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch{return}},YT=(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch{}},XT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAACVBMVEUAgIAA//8AAABML0eVAAAAHUlEQVQY02MgDTA6QDADiwIEIxhMDWBMLTBIHAYAXSQELXns9OsAAAAASUVORK5CYII=",ZT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAD1BMVEUAgICAAIAAAIAAAAD/AP/xWXoLAAAAWElEQVQoz2NAAEZFRWUGZMAiJCQMpMhSIQIDMBWOilAAUyEEA5SpMIYBmAoDmFtgKuACA6dCRASmggUcKAxgP4AFGMFMoAlwFWAmOSrAwQBTIWxsTI24BQDnDRqxaEeFJwAAAABJRU5ErkJggg==",eC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAADFBMVEWAAIAAAAD/AP+AgIC+5PyhAAAAIElEQVQY02MgCuwGgZ1AxgEQjxGIG8CMISoSCgZE+RwAhEEUNc/zGIcAAAAASUVORK5CYII=",tC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAuAgMAAABG0ZGhAAAADFBMVEXAwMD//wD///+AgAD5TC6AAAAAg0lEQVQY07WQsQ2DUAxEbwXTpYgySpqTSBFljujPwQKMALOwACOwgyVa7hCIFgosW/K76tkg2QwkIqIdIy5w1U4rFxZz1blh0ED7WwEK6zlZIHQA1umGIDTQTgV4heuBL10fPG/i38p/+4X8Nt/DPwVyhlx7OcvPmLvv4e97tn/k+f8tsA9WQ4HgaDkAAAAASUVORK5CYII=",nC="/assets/water-CLT8T8g9.gif",rC="/assets/noise-Q2HaBj8G.gif",xv="user",oC=JT(xv)||{},Yf=[{value:"#008080",label:"(Custom)"},{value:`url(${XT})`,label:"Rivets"},{value:`url(${ZT})`,label:"Zig-zag"},{value:`url(${eC})`,label:"Purple squares"},{value:`url(${tC})`,label:"Honey"},{value:`url(${nC})`,label:"Water"},{value:`url(${rC})`,label:"Noise"}],iC={followed:[],wallet:{},seenEvents:[],currency:"EUR",vintageFont:!0,theme:"original",backgrounds:Yf,background:Yf[0],fontSize:1,scanLines:!1,scanLinesIntensity:0,...oC},aC=(e=iC,t)=>{const n=function(){switch(t.type){case S0:{const g=[...new Set([...e.followed,t.payload])];return{...e,followed:g}}case E0:{const g=e.followed.filter(w=>w!==t.payload);return{...e,followed:g}}case T0:return{...e,theme:t.payload};case C0:return{...e,background:t.payload};case $0:const[r,...o]=e.backgrounds,i={...r,value:t.payload},a=[i,...o];return{...e,backgrounds:a,background:i};case P0:return{...e,vintageFont:t.payload};case R0:return{...e,fontSize:t.payload};case O0:return{...e,scanLines:t.payload};case D0:return{...e,scanLinesIntensity:t.payload};case Ak:const l=t.payload,s=[...e.seenEvents,l];return{...e,seenEvents:s};case Sk:const{amount:u,coin:d}=t.payload,c={...e.wallet},v=Object.keys(c).length,A=c[d]?c[d].order:v;return c[d]={symbol:d,amount:u,order:A},{...e,wallet:c};case Tk:{const g={...e.wallet};return g[t.payload]&&delete g[t.payload],{...e,wallet:g}}case Ck:{const w=t.payload.reduce((f,p)=>({...f,[p]:e.wallet[p]}),{});return{...e,wallet:w}}case Ek:return{...e,currency:t.payload};default:return e}}();return YT(xv,n),n},lC=null,sC=(e=lC,t)=>{switch(t.type){case kk:let n;const r=t.payload.news;if(t.payload.extend){let o=[];n=[...e||[],...r],n=n.filter(i=>o.includes(i.id)?!1:(o.push(i.id),!0))}else n=r;return n;default:return e}},uC=null,cC=(e=uC,t)=>{switch(t.type){case bk:return t.payload;default:return e}},dC=ux({coins:qT,user:aC,news:sC,events:cC}),fC=lx(dC,fx(yv));Iy.render(h.jsx(Dm,{store:fC,children:h.jsx(QT,{})}),document.getElementById("root"));GT();
