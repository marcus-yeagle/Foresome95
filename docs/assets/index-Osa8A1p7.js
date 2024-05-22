(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Jf={exports:{}},ho={},Yf={exports:{}},fe={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var _c=Object.getOwnPropertySymbols,yv=Object.prototype.hasOwnProperty,xv=Object.prototype.propertyIsEnumerable;function wv(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function bv(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(i){return t[i]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(i){o[i]=i}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Xf=bv()?Object.assign:function(e,t){for(var n,r=wv(e),o,i=1;i<arguments.length;i++){n=Object(arguments[i]);for(var a in n)yv.call(n,a)&&(r[a]=n[a]);if(_c){o=_c(n);for(var l=0;l<o.length;l++)xv.call(n,o[l])&&(r[o[l]]=n[o[l]])}}return r};/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eu=Xf,St=typeof Symbol=="function"&&Symbol.for,mo=St?Symbol.for("react.element"):60103,Av=St?Symbol.for("react.portal"):60106,Sv=St?Symbol.for("react.fragment"):60107,kv=St?Symbol.for("react.strict_mode"):60108,Ev=St?Symbol.for("react.profiler"):60114,Tv=St?Symbol.for("react.provider"):60109,Cv=St?Symbol.for("react.context"):60110,$v=St?Symbol.for("react.forward_ref"):60112,Pv=St?Symbol.for("react.suspense"):60113,Rv=St?Symbol.for("react.memo"):60115,Ov=St?Symbol.for("react.lazy"):60116,Fc=typeof Symbol=="function"&&Symbol.iterator;function vo(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ep={};function Ar(e,t,n){this.props=e,this.context=t,this.refs=ep,this.updater=n||Zf}Ar.prototype.isReactComponent={};Ar.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(vo(85));this.updater.enqueueSetState(this,e,t,"setState")};Ar.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function tp(){}tp.prototype=Ar.prototype;function tu(e,t,n){this.props=e,this.context=t,this.refs=ep,this.updater=n||Zf}var nu=tu.prototype=new tp;nu.constructor=tu;eu(nu,Ar.prototype);nu.isPureReactComponent=!0;var ru={current:null},np=Object.prototype.hasOwnProperty,rp={key:!0,ref:!0,__self:!0,__source:!0};function op(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)np.call(t,r)&&!rp.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:mo,type:e,key:i,ref:a,props:o,_owner:ru.current}}function Dv(e,t){return{$$typeof:mo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ou(e){return typeof e=="object"&&e!==null&&e.$$typeof===mo}function Iv(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(n){return t[n]})}var ip=/\/+/g,pi=[];function ap(e,t,n,r){if(pi.length){var o=pi.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function lp(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>pi.length&&pi.push(e)}function zl(e,t,n,r){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case mo:case Av:i=!0}}if(i)return n(r,e,t===""?"."+al(e,0):t),1;if(i=0,t=t===""?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){o=e[a];var l=t+al(o,a);i+=zl(o,l,n,r)}else if(e===null||typeof e!="object"?l=null:(l=Fc&&e[Fc]||e["@@iterator"],l=typeof l=="function"?l:null),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=t+al(o,a++),i+=zl(o,l,n,r);else if(o==="object")throw n=""+e,Error(vo(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return i}function Ul(e,t,n){return e==null?0:zl(e,"",t,n)}function al(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Iv(e.key):t.toString(36)}function Nv(e,t){e.func.call(e.context,t,e.count++)}function jv(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?Hl(e,r,n,function(i){return i}):e!=null&&(ou(e)&&(e=Dv(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(ip,"$&/")+"/")+n)),r.push(e))}function Hl(e,t,n,r,o){var i="";n!=null&&(i=(""+n).replace(ip,"$&/")+"/"),t=ap(t,i,r,o),Ul(e,jv,t),lp(t)}var sp={current:null};function Gt(){var e=sp.current;if(e===null)throw Error(vo(321));return e}var Lv={ReactCurrentDispatcher:sp,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:ru,IsSomeRendererActing:{current:!1},assign:eu};fe.Children={map:function(e,t,n){if(e==null)return e;var r=[];return Hl(e,r,null,t,n),r},forEach:function(e,t,n){if(e==null)return e;t=ap(null,null,t,n),Ul(e,Nv,t),lp(t)},count:function(e){return Ul(e,function(){return null},null)},toArray:function(e){var t=[];return Hl(e,t,null,function(n){return n}),t},only:function(e){if(!ou(e))throw Error(vo(143));return e}};fe.Component=Ar;fe.Fragment=Sv;fe.Profiler=Ev;fe.PureComponent=tu;fe.StrictMode=kv;fe.Suspense=Pv;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lv;fe.cloneElement=function(e,t,n){if(e==null)throw Error(vo(267,e));var r=eu({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=ru.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)np.call(t,s)&&!rp.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:mo,type:e.type,key:o,ref:i,props:r,_owner:a}};fe.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:Cv,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:Tv,_context:e},e.Consumer=e};fe.createElement=op;fe.createFactory=function(e){var t=op.bind(null,e);return t.type=e,t};fe.createRef=function(){return{current:null}};fe.forwardRef=function(e){return{$$typeof:$v,render:e}};fe.isValidElement=ou;fe.lazy=function(e){return{$$typeof:Ov,_ctor:e,_status:-1,_result:null}};fe.memo=function(e,t){return{$$typeof:Rv,type:e,compare:t===void 0?null:t}};fe.useCallback=function(e,t){return Gt().useCallback(e,t)};fe.useContext=function(e,t){return Gt().useContext(e,t)};fe.useDebugValue=function(){};fe.useEffect=function(e,t){return Gt().useEffect(e,t)};fe.useImperativeHandle=function(e,t,n){return Gt().useImperativeHandle(e,t,n)};fe.useLayoutEffect=function(e,t){return Gt().useLayoutEffect(e,t)};fe.useMemo=function(e,t){return Gt().useMemo(e,t)};fe.useReducer=function(e,t,n){return Gt().useReducer(e,t,n)};fe.useRef=function(e){return Gt().useRef(e)};fe.useState=function(e){return Gt().useState(e)};fe.version="16.14.0";Yf.exports=fe;var E=Yf.exports;const S=Fe(E);/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v=E,up=60103;ho.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var Mc=Symbol.for;up=Mc("react.element"),ho.Fragment=Mc("react.fragment")}var Fv=_v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mv=Object.prototype.hasOwnProperty,Bv={key:!0,ref:!0,__self:!0,__source:!0};function cp(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Mv.call(t,r)&&!Bv.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:up,type:e,key:i,ref:a,props:o,_owner:Fv.current}}ho.jsx=cp;ho.jsxs=cp;Jf.exports=ho;var h=Jf.exports,dp={exports:{}},pt={},fp={exports:{}},pp={};/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){var t,n,r,o,i;if(typeof window>"u"||typeof MessageChannel!="function"){var a=null,l=null,s=function(){if(a!==null)try{var b=e.unstable_now();a(!0,b),a=null}catch(P){throw setTimeout(s,0),P}},u=Date.now();e.unstable_now=function(){return Date.now()-u},t=function(b){a!==null?setTimeout(t,0,b):(a=b,setTimeout(s,0))},n=function(b,P){l=setTimeout(b,P)},r=function(){clearTimeout(l)},o=function(){return!1},i=e.unstable_forceFrameRate=function(){}}else{var d=window.performance,c=window.Date,v=window.setTimeout,A=window.clearTimeout;if(typeof console<"u"){var g=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),typeof g!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if(typeof d=="object"&&typeof d.now=="function")e.unstable_now=function(){return d.now()};else{var w=c.now();e.unstable_now=function(){return c.now()-w}}var f=!1,p=null,m=-1,x=5,k=0;o=function(){return e.unstable_now()>=k},i=function(){},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):x=0<b?Math.floor(1e3/b):5};var T=new MessageChannel,C=T.port2;T.port1.onmessage=function(){if(p!==null){var b=e.unstable_now();k=b+x;try{p(!0,b)?C.postMessage(null):(f=!1,p=null)}catch(P){throw C.postMessage(null),P}}else f=!1},t=function(b){p=b,f||(f=!0,C.postMessage(null))},n=function(b,P){m=v(function(){b(e.unstable_now())},P)},r=function(){A(m),m=-1}}function O(b,P){var y=b.length;b.push(P);e:for(;;){var F=y-1>>>1,I=b[F];if(I!==void 0&&0<q(I,P))b[F]=P,b[y]=I,y=F;else break e}}function _(b){return b=b[0],b===void 0?null:b}function N(b){var P=b[0];if(P!==void 0){var y=b.pop();if(y!==P){b[0]=y;e:for(var F=0,I=b.length;F<I;){var L=2*(F+1)-1,H=b[L],K=L+1,G=b[K];if(H!==void 0&&0>q(H,y))G!==void 0&&0>q(G,H)?(b[F]=G,b[K]=y,F=K):(b[F]=H,b[L]=y,F=L);else if(G!==void 0&&0>q(G,y))b[F]=G,b[K]=y,F=K;else break e}}return P}return null}function q(b,P){var y=b.sortIndex-P.sortIndex;return y!==0?y:b.id-P.id}var J=[],X=[],ae=1,Y=null,V=3,se=!1,te=!1,U=!1;function z(b){for(var P=_(X);P!==null;){if(P.callback===null)N(X);else if(P.startTime<=b)N(X),P.sortIndex=P.expirationTime,O(J,P);else break;P=_(X)}}function B(b){if(U=!1,z(b),!te)if(_(J)!==null)te=!0,t(Q);else{var P=_(X);P!==null&&n(B,P.startTime-b)}}function Q(b,P){te=!1,U&&(U=!1,r()),se=!0;var y=V;try{for(z(P),Y=_(J);Y!==null&&(!(Y.expirationTime>P)||b&&!o());){var F=Y.callback;if(F!==null){Y.callback=null,V=Y.priorityLevel;var I=F(Y.expirationTime<=P);P=e.unstable_now(),typeof I=="function"?Y.callback=I:Y===_(J)&&N(J),z(P)}else N(J);Y=_(J)}if(Y!==null)var L=!0;else{var H=_(X);H!==null&&n(B,H.startTime-P),L=!1}return L}finally{Y=null,V=y,se=!1}}function D(b){switch(b){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var R=i;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){te||se||(te=!0,t(Q))},e.unstable_getCurrentPriorityLevel=function(){return V},e.unstable_getFirstCallbackNode=function(){return _(J)},e.unstable_next=function(b){switch(V){case 1:case 2:case 3:var P=3;break;default:P=V}var y=V;V=P;try{return b()}finally{V=y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=R,e.unstable_runWithPriority=function(b,P){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var y=V;V=b;try{return P()}finally{V=y}},e.unstable_scheduleCallback=function(b,P,y){var F=e.unstable_now();if(typeof y=="object"&&y!==null){var I=y.delay;I=typeof I=="number"&&0<I?F+I:F,y=typeof y.timeout=="number"?y.timeout:D(b)}else y=D(b),I=F;return y=I+y,b={id:ae++,callback:P,priorityLevel:b,startTime:I,expirationTime:y,sortIndex:-1},I>F?(b.sortIndex=I,O(X,b),_(J)===null&&b===_(X)&&(U?r():U=!0,n(B,I-F))):(b.sortIndex=y,O(J,b),te||se||(te=!0,t(Q))),b},e.unstable_shouldYield=function(){var b=e.unstable_now();z(b);var P=_(J);return P!==Y&&Y!==null&&P!==null&&P.callback!==null&&P.startTime<=b&&P.expirationTime<Y.expirationTime||o()},e.unstable_wrapCallback=function(b){var P=V;return function(){var y=V;V=P;try{return b.apply(this,arguments)}finally{V=y}}}})(pp);fp.exports=pp;var zv=fp.exports;/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ji=E,Ue=Xf,Le=zv;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!Ji)throw Error(M(227));function Uv(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Ur=!1,hi=null,mi=!1,Wl=null,Hv={onError:function(e){Ur=!0,hi=e}};function Wv(e,t,n,r,o,i,a,l,s){Ur=!1,hi=null,Uv.apply(Hv,arguments)}function Vv(e,t,n,r,o,i,a,l,s){if(Wv.apply(this,arguments),Ur){if(Ur){var u=hi;Ur=!1,hi=null}else throw Error(M(198));mi||(mi=!0,Wl=u)}}var iu=null,hp=null,mp=null;function Bc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=mp(n),Vv(r,t,void 0,e),e.currentTarget=null}var vi=null,Kn={};function vp(){if(vi)for(var e in Kn){var t=Kn[e],n=vi.indexOf(e);if(!(-1<n))throw Error(M(96,e));if(!gi[n]){if(!t.extractEvents)throw Error(M(97,e));gi[n]=t,n=t.eventTypes;for(var r in n){var o=void 0,i=n[r],a=t,l=r;if(Vl.hasOwnProperty(l))throw Error(M(99,l));Vl[l]=i;var s=i.phasedRegistrationNames;if(s){for(o in s)s.hasOwnProperty(o)&&zc(s[o],a,l);o=!0}else i.registrationName?(zc(i.registrationName,a,l),o=!0):o=!1;if(!o)throw Error(M(98,r,e))}}}}function zc(e,t,n){if(dr[e])throw Error(M(100,e));dr[e]=t,au[e]=t.eventTypes[n].dependencies}var gi=[],Vl={},dr={},au={};function gp(e){var t=!1,n;for(n in e)if(e.hasOwnProperty(n)){var r=e[n];if(!Kn.hasOwnProperty(n)||Kn[n]!==r){if(Kn[n])throw Error(M(102,n));Kn[n]=r,t=!0}}t&&vp()}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ql=null,rr=null,or=null;function Uc(e){if(e=hp(e)){if(typeof Ql!="function")throw Error(M(280));var t=e.stateNode;t&&(t=iu(t),Ql(e.stateNode,e.type,t))}}function yp(e){rr?or?or.push(e):or=[e]:rr=e}function xp(){if(rr){var e=rr,t=or;if(or=rr=null,Uc(e),t)for(e=0;e<t.length;e++)Uc(t[e])}}function lu(e,t){return e(t)}function wp(e,t,n,r,o){return e(t,n,r,o)}function su(){}var bp=lu,En=!1,ll=!1;function uu(){(rr!==null||or!==null)&&(su(),xp())}function Ap(e,t,n){if(ll)return e(t,n);ll=!0;try{return bp(e,t,n)}finally{ll=!1,uu()}}var Qv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hc=Object.prototype.hasOwnProperty,Wc={},Vc={};function Gv(e){return Hc.call(Vc,e)?!0:Hc.call(Wc,e)?!1:Qv.test(e)?Vc[e]=!0:(Wc[e]=!0,!1)}function Kv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qv(e,t,n,r){if(t===null||typeof t>"u"||Kv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function He(e,t,n,r,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_e[e]=new He(e,0,!1,e,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_e[t]=new He(t,1,!1,e[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new He(e,2,!1,e.toLowerCase(),null,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new He(e,2,!1,e,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_e[e]=new He(e,3,!1,e.toLowerCase(),null,!1)});["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new He(e,3,!0,e,null,!1)});["capture","download"].forEach(function(e){_e[e]=new He(e,4,!1,e,null,!1)});["cols","rows","size","span"].forEach(function(e){_e[e]=new He(e,6,!1,e,null,!1)});["rowSpan","start"].forEach(function(e){_e[e]=new He(e,5,!1,e.toLowerCase(),null,!1)});var cu=/[\-:]([a-z])/g;function du(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(cu,du);_e[t]=new He(t,1,!1,e,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(cu,du);_e[t]=new He(t,1,!1,e,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(cu,du);_e[t]=new He(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new He(e,1,!1,e.toLowerCase(),null,!1)});_e.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(e){_e[e]=new He(e,1,!1,e.toLowerCase(),null,!0)});var xt=Ji.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;xt.hasOwnProperty("ReactCurrentDispatcher")||(xt.ReactCurrentDispatcher={current:null});xt.hasOwnProperty("ReactCurrentBatchConfig")||(xt.ReactCurrentBatchConfig={suspense:null});function fu(e,t,n,r){var o=_e.hasOwnProperty(t)?_e[t]:null,i=o!==null?o.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");i||(qv(t,n,o,r)&&(n=null),r||o===null?Gv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Jv=/^(.*)[\\\/]/,Je=typeof Symbol=="function"&&Symbol.for,Do=Je?Symbol.for("react.element"):60103,qn=Je?Symbol.for("react.portal"):60106,kn=Je?Symbol.for("react.fragment"):60107,Sp=Je?Symbol.for("react.strict_mode"):60108,qo=Je?Symbol.for("react.profiler"):60114,kp=Je?Symbol.for("react.provider"):60109,Ep=Je?Symbol.for("react.context"):60110,Yv=Je?Symbol.for("react.concurrent_mode"):60111,pu=Je?Symbol.for("react.forward_ref"):60112,Jo=Je?Symbol.for("react.suspense"):60113,Gl=Je?Symbol.for("react.suspense_list"):60120,hu=Je?Symbol.for("react.memo"):60115,Tp=Je?Symbol.for("react.lazy"):60116,Cp=Je?Symbol.for("react.block"):60121,Qc=typeof Symbol=="function"&&Symbol.iterator;function $r(e){return e===null||typeof e!="object"?null:(e=Qc&&e[Qc]||e["@@iterator"],typeof e=="function"?e:null)}function Xv(e){if(e._status===-1){e._status=0;var t=e._ctor;t=t(),e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}}function Vt(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kn:return"Fragment";case qn:return"Portal";case qo:return"Profiler";case Sp:return"StrictMode";case Jo:return"Suspense";case Gl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ep:return"Context.Consumer";case kp:return"Context.Provider";case pu:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case hu:return Vt(e.type);case Cp:return Vt(e.render);case Tp:if(e=e._status===1?e._result:null)return Vt(e)}return null}function mu(e){var t="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n="";break e;default:var r=e._debugOwner,o=e._debugSource,i=Vt(e.type);n=null,r&&(n=Vt(r.type)),r=i,i="",o?i=" (at "+o.fileName.replace(Jv,"")+":"+o.lineNumber+")":n&&(i=" (created by "+n+")"),n=`
    in `+(r||"Unknown")+i}t+=n,e=e.return}while(e);return t}function fn(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function $p(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zv(e){var t=$p(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Io(e){e._valueTracker||(e._valueTracker=Zv(e))}function Pp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$p(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Kl(e,t){var n=t.checked;return Ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Gc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=fn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Rp(e,t){t=t.checked,t!=null&&fu(e,"checked",t,!1)}function ql(e,t){Rp(e,t);var n=fn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Jl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Jl(e,t.type,fn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Kc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Jl(e,t,n){(t!=="number"||e.ownerDocument.activeElement!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function eg(e){var t="";return Ji.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function Yl(e,t){return e=Ue({children:void 0},t),(t=eg(t.children))&&(e.children=t),e}function ir(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+fn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Xl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return Ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:fn(n)}}function Op(e,t){var n=fn(t.value),r=fn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Jc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var Dp={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Ip(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ip(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var No,Np=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!==Dp.svg||"innerHTML"in e)e.innerHTML=t;else{for(No=No||document.createElement("div"),No.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=No.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}function jo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jn={animationend:jo("Animation","AnimationEnd"),animationiteration:jo("Animation","AnimationIteration"),animationstart:jo("Animation","AnimationStart"),transitionend:jo("Transition","TransitionEnd")},sl={},jp={};yn&&(jp=document.createElement("div").style,"AnimationEvent"in window||(delete Jn.animationend.animation,delete Jn.animationiteration.animation,delete Jn.animationstart.animation),"TransitionEvent"in window||delete Jn.transitionend.transition);function Yi(e){if(sl[e])return sl[e];if(!Jn[e])return e;var t=Jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jp)return sl[e]=t[n];return e}var Lp=Yi("animationend"),_p=Yi("animationiteration"),Fp=Yi("animationstart"),Mp=Yi("transitionend"),Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yc=new(typeof WeakMap=="function"?WeakMap:Map);function vu(e){var t=Yc.get(e);return t===void 0&&(t=new Map,Yc.set(e,t)),t}function Vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.effectTag&1026&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Bp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xc(e){if(Vn(e)!==e)throw Error(M(188))}function tg(e){var t=e.alternate;if(!t){if(t=Vn(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Xc(o),e;if(i===r)return Xc(o),t;i=i.sibling}throw Error(M(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function zp(e){if(e=tg(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function fr(e,t){if(t==null)throw Error(M(30));return e==null?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}function gu(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}var Pr=null;function ng(e){if(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(t))for(var r=0;r<t.length&&!e.isPropagationStopped();r++)Bc(e,t[r],n[r]);else t&&Bc(e,t,n);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}function Xi(e){if(e!==null&&(Pr=fr(Pr,e)),e=Pr,Pr=null,e){if(gu(e,ng),Pr)throw Error(M(95));if(mi)throw e=Wl,mi=!1,Wl=null,e}}function yu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}function Up(e){if(!yn)return!1;e="on"+e;var t=e in document;return t||(t=document.createElement("div"),t.setAttribute(e,"return;"),t=typeof t[e]=="function"),t}var yi=[];function Hp(e){e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>yi.length&&yi.push(e)}function Wp(e,t,n,r){if(yi.length){var o=yi.pop();return o.topLevelType=e,o.eventSystemFlags=r,o.nativeEvent=t,o.targetInst=n,o}return{topLevelType:e,eventSystemFlags:r,nativeEvent:t,targetInst:n,ancestors:[]}}function Vp(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var r=n;if(r.tag===3)r=r.stateNode.containerInfo;else{for(;r.return;)r=r.return;r=r.tag!==3?null:r.stateNode.containerInfo}if(!r)break;t=n.tag,t!==5&&t!==6||e.ancestors.push(n),n=yo(r)}while(n);for(n=0;n<e.ancestors.length;n++){t=e.ancestors[n];var o=yu(e.nativeEvent);r=e.topLevelType;var i=e.nativeEvent,a=e.eventSystemFlags;n===0&&(a|=64);for(var l=null,s=0;s<gi.length;s++){var u=gi[s];u&&(u=u.extractEvents(r,t,i,o,a))&&(l=fr(l,u))}Xi(l)}}function es(e,t,n){if(!n.has(e)){switch(e){case"scroll":Mr(t,"scroll",!0);break;case"focus":case"blur":Mr(t,"focus",!0),Mr(t,"blur",!0),n.set("blur",null),n.set("focus",null);break;case"cancel":case"close":Up(e)&&Mr(t,e,!0);break;case"invalid":case"submit":case"reset":break;default:Fr.indexOf(e)===-1&&xe(e,t)}n.set(e,null)}}var Qp,xu,Gp,ts=!1,Tt=[],rn=null,on=null,an=null,Zr=new Map,eo=new Map,Rr=[],ns="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),rg="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");function og(e,t){var n=vu(t);ns.forEach(function(r){es(r,t,n)}),rg.forEach(function(r){es(r,t,n)})}function rs(e,t,n,r,o){return{blockedOn:e,topLevelType:t,eventSystemFlags:n|32,nativeEvent:o,container:r}}function Zc(e,t){switch(e){case"focus":case"blur":rn=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":Zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(t.pointerId)}}function Or(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e=rs(t,n,r,o,i),t!==null&&(t=xo(t),t!==null&&xu(t)),e):(e.eventSystemFlags|=r,e)}function ig(e,t,n,r,o){switch(t){case"focus":return rn=Or(rn,e,t,n,r,o),!0;case"dragenter":return on=Or(on,e,t,n,r,o),!0;case"mouseover":return an=Or(an,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Zr.set(i,Or(Zr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,eo.set(i,Or(eo.get(i)||null,e,t,n,r,o)),!0}return!1}function ag(e){var t=yo(e.target);if(t!==null){var n=Vn(t);if(n!==null){if(t=n.tag,t===13){if(t=Bp(n),t!==null){e.blockedOn=t,Le.unstable_runWithPriority(e.priority,function(){Gp(n)});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yo(e){if(e.blockedOn!==null)return!1;var t=Au(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);if(t!==null){var n=xo(t);return n!==null&&xu(n),e.blockedOn=t,!1}return!0}function ed(e,t,n){Yo(e)&&n.delete(t)}function lg(){for(ts=!1;0<Tt.length;){var e=Tt[0];if(e.blockedOn!==null){e=xo(e.blockedOn),e!==null&&Qp(e);break}var t=Au(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);t!==null?e.blockedOn=t:Tt.shift()}rn!==null&&Yo(rn)&&(rn=null),on!==null&&Yo(on)&&(on=null),an!==null&&Yo(an)&&(an=null),Zr.forEach(ed),eo.forEach(ed)}function Dr(e,t){e.blockedOn===t&&(e.blockedOn=null,ts||(ts=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,lg)))}function Kp(e){function t(o){return Dr(o,e)}if(0<Tt.length){Dr(Tt[0],e);for(var n=1;n<Tt.length;n++){var r=Tt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&Dr(rn,e),on!==null&&Dr(on,e),an!==null&&Dr(an,e),Zr.forEach(t),eo.forEach(t),n=0;n<Rr.length;n++)r=Rr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rr.length&&(n=Rr[0],n.blockedOn===null);)ag(n),n.blockedOn===null&&Rr.shift()}var qp={},Jp=new Map,wu=new Map,sg=["abort","abort",Lp,"animationEnd",_p,"animationIteration",Fp,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Mp,"transitionEnd","waiting","waiting"];function bu(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],o=e[n+1],i="on"+(o[0].toUpperCase()+o.slice(1));i={phasedRegistrationNames:{bubbled:i,captured:i+"Capture"},dependencies:[r],eventPriority:t},wu.set(r,t),Jp.set(r,i),qp[o]=i}}bu("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);bu("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);bu(sg,2);for(var td="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),ul=0;ul<td.length;ul++)wu.set(td[ul],0);var ug=Le.unstable_UserBlockingPriority,cg=Le.unstable_runWithPriority,Xo=!0;function xe(e,t){Mr(t,e,!1)}function Mr(e,t,n){var r=wu.get(t);switch(r===void 0?2:r){case 0:r=dg.bind(null,t,1,e);break;case 1:r=fg.bind(null,t,1,e);break;default:r=Zi.bind(null,t,1,e)}n?e.addEventListener(t,r,!0):e.addEventListener(t,r,!1)}function dg(e,t,n,r){En||su();var o=Zi,i=En;En=!0;try{wp(o,e,t,n,r)}finally{(En=i)||uu()}}function fg(e,t,n,r){cg(ug,Zi.bind(null,e,t,n,r))}function Zi(e,t,n,r){if(Xo)if(0<Tt.length&&-1<ns.indexOf(e))e=rs(null,e,t,n,r),Tt.push(e);else{var o=Au(e,t,n,r);if(o===null)Zc(e,r);else if(-1<ns.indexOf(e))e=rs(o,e,t,n,r),Tt.push(e);else if(!ig(o,e,t,n,r)){Zc(e,r),e=Wp(e,r,null,t);try{Ap(Vp,e)}finally{Hp(e)}}}}function Au(e,t,n,r){if(n=yu(r),n=yo(n),n!==null){var o=Vn(n);if(o===null)n=null;else{var i=o.tag;if(i===13){if(n=Bp(o),n!==null)return n;n=null}else if(i===3){if(o.stateNode.hydrate)return o.tag===3?o.stateNode.containerInfo:null;n=null}else o!==n&&(n=null)}}e=Wp(e,r,n,t);try{Ap(Vp,e)}finally{Hp(e)}return null}var Hr={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pg=["Webkit","ms","Moz","O"];Object.keys(Hr).forEach(function(e){pg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Hr[t]=Hr[e]})});function Yp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Hr.hasOwnProperty(e)&&Hr[e]?(""+t).trim():t+"px"}function Xp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Yp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var hg=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function os(e,t){if(t){if(hg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e,""));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62,""))}}function is(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nd=Dp.html;function Mt(e,t){e=e.nodeType===9||e.nodeType===11?e:e.ownerDocument;var n=vu(e);t=au[t];for(var r=0;r<t.length;r++)es(t[r],e,n)}function xi(){}function as(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function rd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function od(e,t){var n=rd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rd(n)}}function Zp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function id(){for(var e=window,t=as();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=as(e.document)}return t}function ls(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var eh="$",th="/$",Su="$?",ku="$!",cl=null,dl=null;function nh(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function ss(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fl=typeof setTimeout=="function"?setTimeout:void 0,mg=typeof clearTimeout=="function"?clearTimeout:void 0;function ar(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function ad(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===eh||n===ku||n===Su){if(t===0)return e;t--}else n===th&&t++}e=e.previousSibling}return null}var Eu=Math.random().toString(36).slice(2),Xt="__reactInternalInstance$"+Eu,wi="__reactEventHandlers$"+Eu,go="__reactContainere$"+Eu;function yo(e){var t=e[Xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[go]||n[Xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ad(e);e!==null;){if(n=e[Xt])return n;e=ad(e)}return t}e=n,n=e.parentNode}return null}function xo(e){return e=e[Xt]||e[go],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function Tu(e){return e[wi]||null}function Bt(e){do e=e.return;while(e&&e.tag!==5);return e||null}function rh(e,t){var n=e.stateNode;if(!n)return null;var r=iu(n);if(!r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}function ld(e,t,n){(t=rh(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=fr(n._dispatchListeners,t),n._dispatchInstances=fr(n._dispatchInstances,e))}function vg(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,n=[];t;)n.push(t),t=Bt(t);for(t=n.length;0<t--;)ld(n[t],"captured",e);for(t=0;t<n.length;t++)ld(n[t],"bubbled",e)}}function us(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=rh(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=fr(n._dispatchListeners,t),n._dispatchInstances=fr(n._dispatchInstances,e))}function gg(e){e&&e.dispatchConfig.registrationName&&us(e._targetInst,null,e)}function pr(e){gu(e,vg)}var Zt=null,Cu=null,Zo=null;function oh(){if(Zo)return Zo;var e,t=Cu,n=t.length,r,o="value"in Zt?Zt.value:Zt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Zo=o.slice(e,1<r?1-r:void 0)}function ei(){return!0}function bi(){return!1}function nt(e,t,n,r){this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface;for(var o in e)e.hasOwnProperty(o)&&((t=e[o])?this[o]=t(n):o==="target"?this.target=r:this[o]=n[o]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?ei:bi,this.isPropagationStopped=bi,this}Ue(nt.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=ei)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=ei)},persist:function(){this.isPersistent=ei},isPersistent:bi,destructor:function(){var e=this.constructor.Interface,t;for(t in e)this[t]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=bi,this._dispatchInstances=this._dispatchListeners=null}});nt.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};nt.extend=function(e){function t(){}function n(){return r.apply(this,arguments)}var r=this;t.prototype=r.prototype;var o=new t;return Ue(o,n.prototype),n.prototype=o,n.prototype.constructor=n,n.Interface=Ue({},r.Interface,e),n.extend=r.extend,ih(n),n};ih(nt);function yg(e,t,n,r){if(this.eventPool.length){var o=this.eventPool.pop();return this.call(o,e,t,n,r),o}return new this(e,t,n,r)}function xg(e){if(!(e instanceof this))throw Error(M(279));e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function ih(e){e.eventPool=[],e.getPooled=yg,e.release=xg}var wg=nt.extend({data:null}),bg=nt.extend({data:null}),Ag=[9,13,27,32],$u=yn&&"CompositionEvent"in window,Wr=null;yn&&"documentMode"in document&&(Wr=document.documentMode);var Sg=yn&&"TextEvent"in window&&!Wr,ah=yn&&(!$u||Wr&&8<Wr&&11>=Wr),sd=" ",_t={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},ud=!1;function lh(e,t){switch(e){case"keyup":return Ag.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function sh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function kg(e,t){switch(e){case"compositionend":return sh(t);case"keypress":return t.which!==32?null:(ud=!0,sd);case"textInput":return e=t.data,e===sd&&ud?null:e;default:return null}}function Eg(e,t){if(Yn)return e==="compositionend"||!$u&&lh(e,t)?(e=oh(),Zo=Cu=Zt=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ah&&t.locale!=="ko"?null:t.data;default:return null}}var Tg={eventTypes:_t,extractEvents:function(e,t,n,r){var o;if($u)e:{switch(e){case"compositionstart":var i=_t.compositionStart;break e;case"compositionend":i=_t.compositionEnd;break e;case"compositionupdate":i=_t.compositionUpdate;break e}i=void 0}else Yn?lh(e,n)&&(i=_t.compositionEnd):e==="keydown"&&n.keyCode===229&&(i=_t.compositionStart);return i?(ah&&n.locale!=="ko"&&(Yn||i!==_t.compositionStart?i===_t.compositionEnd&&Yn&&(o=oh()):(Zt=r,Cu="value"in Zt?Zt.value:Zt.textContent,Yn=!0)),i=wg.getPooled(i,t,n,r),o?i.data=o:(o=sh(n),o!==null&&(i.data=o)),pr(i),o=i):o=null,(e=Sg?kg(e,n):Eg(e,n))?(t=bg.getPooled(_t.beforeInput,t,n,r),t.data=e,pr(t)):t=null,o===null?t:t===null?o:[o,t]}},Cg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cg[e.type]:t==="textarea"}var ch={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function dh(e,t,n){return e=nt.getPooled(ch.change,e,t,n),e.type="change",yp(n),pr(e),e}var Vr=null,to=null;function $g(e){Xi(e)}function ea(e){var t=Fn(e);if(Pp(t))return e}function Pg(e,t){if(e==="change")return t}var cs=!1;yn&&(cs=Up("input")&&(!document.documentMode||9<document.documentMode));function cd(){Vr&&(Vr.detachEvent("onpropertychange",fh),to=Vr=null)}function fh(e){if(e.propertyName==="value"&&ea(to))if(e=dh(to,e,yu(e)),En)Xi(e);else{En=!0;try{lu($g,e)}finally{En=!1,uu()}}}function Rg(e,t,n){e==="focus"?(cd(),Vr=t,to=n,Vr.attachEvent("onpropertychange",fh)):e==="blur"&&cd()}function Og(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ea(to)}function Dg(e,t){if(e==="click")return ea(t)}function Ig(e,t){if(e==="input"||e==="change")return ea(t)}var Ng={eventTypes:ch,_isInputEventSupported:cs,extractEvents:function(e,t,n,r){var o=t?Fn(t):window,i=o.nodeName&&o.nodeName.toLowerCase();if(i==="select"||i==="input"&&o.type==="file")var a=Pg;else if(uh(o))if(cs)a=Ig;else{a=Og;var l=Rg}else(i=o.nodeName)&&i.toLowerCase()==="input"&&(o.type==="checkbox"||o.type==="radio")&&(a=Dg);if(a&&(a=a(e,t)))return dh(a,n,r);l&&l(e,o,t),e==="blur"&&(e=o._wrapperState)&&e.controlled&&o.type==="number"&&Jl(o,"number",o.value)}},wo=nt.extend({view:null,detail:null}),jg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jg[e])?!!t[e]:!1}function Pu(){return Lg}var dd=0,fd=0,pd=!1,hd=!1,bo=wo.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Pu,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var t=dd;return dd=e.screenX,pd?e.type==="mousemove"?e.screenX-t:0:(pd=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var t=fd;return fd=e.screenY,hd?e.type==="mousemove"?e.screenY-t:0:(hd=!0,0)}}),ph=bo.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Ir={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},_g={eventTypes:Ir,extractEvents:function(e,t,n,r,o){var i=e==="mouseover"||e==="pointerover",a=e==="mouseout"||e==="pointerout";if(i&&!(o&32)&&(n.relatedTarget||n.fromElement)||!a&&!i)return null;if(i=r.window===r?r:(i=r.ownerDocument)?i.defaultView||i.parentWindow:window,a){if(a=t,t=(t=n.relatedTarget||n.toElement)?yo(t):null,t!==null){var l=Vn(t);(t!==l||t.tag!==5&&t.tag!==6)&&(t=null)}}else a=null;if(a===t)return null;if(e==="mouseout"||e==="mouseover")var s=bo,u=Ir.mouseLeave,d=Ir.mouseEnter,c="mouse";else(e==="pointerout"||e==="pointerover")&&(s=ph,u=Ir.pointerLeave,d=Ir.pointerEnter,c="pointer");if(e=a==null?i:Fn(a),i=t==null?i:Fn(t),u=s.getPooled(u,a,n,r),u.type=c+"leave",u.target=e,u.relatedTarget=i,n=s.getPooled(d,t,n,r),n.type=c+"enter",n.target=i,n.relatedTarget=e,r=a,c=t,r&&c)e:{for(s=r,d=c,a=0,e=s;e;e=Bt(e))a++;for(e=0,t=d;t;t=Bt(t))e++;for(;0<a-e;)s=Bt(s),a--;for(;0<e-a;)d=Bt(d),e--;for(;a--;){if(s===d||s===d.alternate)break e;s=Bt(s),d=Bt(d)}s=null}else s=null;for(d=s,s=[];r&&r!==d&&(a=r.alternate,!(a!==null&&a===d));)s.push(r),r=Bt(r);for(r=[];c&&c!==d&&(a=c.alternate,!(a!==null&&a===d));)r.push(c),c=Bt(c);for(c=0;c<s.length;c++)us(s[c],"bubbled",u);for(c=r.length;0<c--;)us(r[c],"captured",n);return o&64?[u,n]:[u]}};function Fg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mn=typeof Object.is=="function"?Object.is:Fg,Mg=Object.prototype.hasOwnProperty;function no(e,t){if(Mn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Mg.call(t,n[r])||!Mn(e[n[r]],t[n[r]]))return!1;return!0}var Bg=yn&&"documentMode"in document&&11>=document.documentMode,hh={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Xn=null,ds=null,Qr=null,fs=!1;function md(e,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;return fs||Xn==null||Xn!==as(n)?null:(n=Xn,"selectionStart"in n&&ls(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Qr&&no(Qr,n)?null:(Qr=n,e=nt.getPooled(hh.select,ds,e,t),e.type="select",e.target=Xn,pr(e),e))}var zg={eventTypes:hh,extractEvents:function(e,t,n,r,o,i){if(o=i||(r.window===r?r.document:r.nodeType===9?r:r.ownerDocument),!(i=!o)){e:{o=vu(o),i=au.onSelect;for(var a=0;a<i.length;a++)if(!o.has(i[a])){o=!1;break e}o=!0}i=!o}if(i)return null;switch(o=t?Fn(t):window,e){case"focus":(uh(o)||o.contentEditable==="true")&&(Xn=o,ds=t,Qr=null);break;case"blur":Qr=ds=Xn=null;break;case"mousedown":fs=!0;break;case"contextmenu":case"mouseup":case"dragend":return fs=!1,md(n,r);case"selectionchange":if(Bg)break;case"keydown":case"keyup":return md(n,r)}return null}},Ug=nt.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Hg=nt.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wg=wo.extend({relatedTarget:null});function ti(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}var Vg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gg=wo.extend({key:function(e){if(e.key){var t=Vg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qg[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Pu,charCode:function(e){return e.type==="keypress"?ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kg=bo.extend({dataTransfer:null}),qg=wo.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Pu}),Jg=nt.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Yg=bo.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),Xg={eventTypes:qp,extractEvents:function(e,t,n,r){var o=Jp.get(e);if(!o)return null;switch(e){case"keypress":if(ti(n)===0)return null;case"keydown":case"keyup":e=Gg;break;case"blur":case"focus":e=Wg;break;case"click":if(n.button===2)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=bo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=Kg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=qg;break;case Lp:case _p:case Fp:e=Ug;break;case Mp:e=Jg;break;case"scroll":e=wo;break;case"wheel":e=Yg;break;case"copy":case"cut":case"paste":e=Hg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=ph;break;default:e=nt}return t=e.getPooled(o,t,n,r),pr(t),t}};if(vi)throw Error(M(101));vi=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));vp();var Zg=xo;iu=Tu;hp=Zg;mp=Fn;gp({SimpleEventPlugin:Xg,EnterLeaveEventPlugin:_g,ChangeEventPlugin:Ng,SelectEventPlugin:zg,BeforeInputEventPlugin:Tg});var ps=[],Zn=-1;function ye(e){0>Zn||(e.current=ps[Zn],ps[Zn]=null,Zn--)}function Ee(e,t){Zn++,ps[Zn]=e.current,e.current=t}var pn={},ze={current:pn},Ge={current:!1},Bn=pn;function hr(e,t){var n=e.type.contextTypes;if(!n)return pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ke(e){return e=e.childContextTypes,e!=null}function Ai(){ye(Ge),ye(ze)}function vd(e,t,n){if(ze.current!==pn)throw Error(M(168));Ee(ze,t),Ee(Ge,n)}function mh(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in e))throw Error(M(108,Vt(t)||"Unknown",o));return Ue({},n,{},r)}function ni(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pn,Bn=ze.current,Ee(ze,e),Ee(Ge,Ge.current),!0}function gd(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=mh(e,t,Bn),r.__reactInternalMemoizedMergedChildContext=e,ye(Ge),ye(ze),Ee(ze,e)):ye(Ge),Ee(Ge,n)}var ey=Le.unstable_runWithPriority,Ru=Le.unstable_scheduleCallback,vh=Le.unstable_cancelCallback,yd=Le.unstable_requestPaint,hs=Le.unstable_now,ty=Le.unstable_getCurrentPriorityLevel,ta=Le.unstable_ImmediatePriority,gh=Le.unstable_UserBlockingPriority,yh=Le.unstable_NormalPriority,xh=Le.unstable_LowPriority,wh=Le.unstable_IdlePriority,bh={},ny=Le.unstable_shouldYield,ry=yd!==void 0?yd:function(){},zt=null,ri=null,pl=!1,xd=hs(),lt=1e4>xd?hs:function(){return hs()-xd};function na(){switch(ty()){case ta:return 99;case gh:return 98;case yh:return 97;case xh:return 96;case wh:return 95;default:throw Error(M(332))}}function Ah(e){switch(e){case 99:return ta;case 98:return gh;case 97:return yh;case 96:return xh;case 95:return wh;default:throw Error(M(332))}}function hn(e,t){return e=Ah(e),ey(e,t)}function Sh(e,t,n){return e=Ah(e),Ru(e,t,n)}function wd(e){return zt===null?(zt=[e],ri=Ru(ta,kh)):zt.push(e),bh}function Nt(){if(ri!==null){var e=ri;ri=null,vh(e)}kh()}function kh(){if(!pl&&zt!==null){pl=!0;var e=0;try{var t=zt;hn(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),zt=null}catch(n){throw zt!==null&&(zt=zt.slice(e+1)),Ru(ta,Nt),n}finally{pl=!1}}}function oi(e,t,n){return n/=10,1073741821-(((1073741821-e+t/10)/n|0)+1)*n}function gt(e,t){if(e&&e.defaultProps){t=Ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n])}return t}var Si={current:null},ki=null,er=null,Ei=null;function Ou(){Ei=er=ki=null}function Du(e){var t=Si.current;ye(Si),e.type._context._currentValue=t}function Eh(e,t){for(;e!==null;){var n=e.alternate;if(e.childExpirationTime<t)e.childExpirationTime=t,n!==null&&n.childExpirationTime<t&&(n.childExpirationTime=t);else if(n!==null&&n.childExpirationTime<t)n.childExpirationTime=t;else break;e=e.return}}function lr(e,t){ki=e,Ei=er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.expirationTime>=t&&(Ct=!0),e.firstContext=null)}function dt(e,t){if(Ei!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(Ei=e,t=1073741823),t={context:e,observedBits:t,next:null},er===null){if(ki===null)throw Error(M(308));er=t,ki.dependencies={expirationTime:0,firstContext:t,responders:null}}else er=er.next=t;return e._currentValue}var Yt=!1;function Iu(e){e.updateQueue={baseState:e.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}function Nu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,baseQueue:e.baseQueue,shared:e.shared,effects:e.effects})}function ln(e,t){return e={expirationTime:e,suspenseConfig:t,tag:0,payload:null,callback:null,next:null},e.next=e}function sn(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function bd(e,t){var n=e.alternate;n!==null&&Nu(n,e),e=e.updateQueue,n=e.baseQueue,n===null?(e.baseQueue=t.next=t,t.next=t):(t.next=n.next,n.next=t)}function ro(e,t,n,r){var o=e.updateQueue;Yt=!1;var i=o.baseQueue,a=o.shared.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}i=a,o.shared.pending=null,l=e.alternate,l!==null&&(l=l.updateQueue,l!==null&&(l.baseQueue=a))}if(i!==null){l=i.next;var s=o.baseState,u=0,d=null,c=null,v=null;if(l!==null){var A=l;do{if(a=A.expirationTime,a<r){var g={expirationTime:A.expirationTime,suspenseConfig:A.suspenseConfig,tag:A.tag,payload:A.payload,callback:A.callback,next:null};v===null?(c=v=g,d=s):v=v.next=g,a>u&&(u=a)}else{v!==null&&(v=v.next={expirationTime:1073741823,suspenseConfig:A.suspenseConfig,tag:A.tag,payload:A.payload,callback:A.callback,next:null}),tm(a,A.suspenseConfig);e:{var w=e,f=A;switch(a=t,g=n,f.tag){case 1:if(w=f.payload,typeof w=="function"){s=w.call(g,s,a);break e}s=w;break e;case 3:w.effectTag=w.effectTag&-4097|64;case 0:if(w=f.payload,a=typeof w=="function"?w.call(g,s,a):w,a==null)break e;s=Ue({},s,a);break e;case 2:Yt=!0}}A.callback!==null&&(e.effectTag|=32,a=o.effects,a===null?o.effects=[A]:a.push(A))}if(A=A.next,A===null||A===l){if(a=o.shared.pending,a===null)break;A=i.next=a.next,a.next=l,o.baseQueue=i=a,o.shared.pending=null}}while(!0)}v===null?d=s:v.next=c,o.baseState=d,o.baseQueue=v,la(u),e.expirationTime=u,e.memoizedState=s}}function Ad(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=o,o=n,typeof r!="function")throw Error(M(191,r));r.call(o)}}}var Gr=xt.ReactCurrentBatchConfig,Th=new Ji.Component().refs;function Ti(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ue({},t,n),e.memoizedState=n,e.expirationTime===0&&(e.updateQueue.baseState=n)}var ra={isMounted:function(e){return(e=e._reactInternalFiber)?Vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternalFiber;var r=Ot(),o=Gr.suspense;r=jn(r,e,o),o=ln(r,o),o.payload=t,n!=null&&(o.callback=n),sn(e,o),cn(e,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternalFiber;var r=Ot(),o=Gr.suspense;r=jn(r,e,o),o=ln(r,o),o.tag=1,o.payload=t,n!=null&&(o.callback=n),sn(e,o),cn(e,r)},enqueueForceUpdate:function(e,t){e=e._reactInternalFiber;var n=Ot(),r=Gr.suspense;n=jn(n,e,r),r=ln(n,r),r.tag=2,t!=null&&(r.callback=t),sn(e,r),cn(e,n)}};function Sd(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!no(n,r)||!no(o,i):!0}function Ch(e,t,n){var r=!1,o=pn,i=t.contextType;return typeof i=="object"&&i!==null?i=dt(i):(o=Ke(t)?Bn:ze.current,r=t.contextTypes,i=(r=r!=null)?hr(e,o):pn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ra,e.stateNode=t,t._reactInternalFiber=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function kd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ra.enqueueReplaceState(t,t.state,null)}function ms(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Th,Iu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=dt(i):(i=Ke(t)?Bn:ze.current,o.context=hr(e,i)),ro(e,n,o,r),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ti(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ra.enqueueReplaceState(o,o.state,null),ro(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.effectTag|=4)}var Lo=Array.isArray;function Nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var a=r.refs;a===Th&&(a=r.refs={}),i===null?delete a[o]:a[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function _o(e,t){if(e.type!=="textarea")throw Error(M(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t,""))}function $h(e){function t(f,p){if(e){var m=f.lastEffect;m!==null?(m.nextEffect=p,f.lastEffect=p):f.firstEffect=f.lastEffect=p,p.nextEffect=null,p.effectTag=8}}function n(f,p){if(!e)return null;for(;p!==null;)t(f,p),p=p.sibling;return null}function r(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function o(f,p){return f=zn(f,p),f.index=0,f.sibling=null,f}function i(f,p,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<p?(f.effectTag=2,p):m):(f.effectTag=2,p)):p}function a(f){return e&&f.alternate===null&&(f.effectTag=2),f}function l(f,p,m,x){return p===null||p.tag!==6?(p=xl(m,f.mode,x),p.return=f,p):(p=o(p,m),p.return=f,p)}function s(f,p,m,x){return p!==null&&p.elementType===m.type?(x=o(p,m.props),x.ref=Nr(f,p,m),x.return=f,x):(x=si(m.type,m.key,m.props,null,f.mode,x),x.ref=Nr(f,p,m),x.return=f,x)}function u(f,p,m,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=wl(m,f.mode,x),p.return=f,p):(p=o(p,m.children||[]),p.return=f,p)}function d(f,p,m,x,k){return p===null||p.tag!==7?(p=nn(m,f.mode,x,k),p.return=f,p):(p=o(p,m),p.return=f,p)}function c(f,p,m){if(typeof p=="string"||typeof p=="number")return p=xl(""+p,f.mode,m),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Do:return m=si(p.type,p.key,p.props,null,f.mode,m),m.ref=Nr(f,null,p),m.return=f,m;case qn:return p=wl(p,f.mode,m),p.return=f,p}if(Lo(p)||$r(p))return p=nn(p,f.mode,m,null),p.return=f,p;_o(f,p)}return null}function v(f,p,m,x){var k=p!==null?p.key:null;if(typeof m=="string"||typeof m=="number")return k!==null?null:l(f,p,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Do:return m.key===k?m.type===kn?d(f,p,m.props.children,x,k):s(f,p,m,x):null;case qn:return m.key===k?u(f,p,m,x):null}if(Lo(m)||$r(m))return k!==null?null:d(f,p,m,x,null);_o(f,m)}return null}function A(f,p,m,x,k){if(typeof x=="string"||typeof x=="number")return f=f.get(m)||null,l(p,f,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Do:return f=f.get(x.key===null?m:x.key)||null,x.type===kn?d(p,f,x.props.children,k,x.key):s(p,f,x,k);case qn:return f=f.get(x.key===null?m:x.key)||null,u(p,f,x,k)}if(Lo(x)||$r(x))return f=f.get(m)||null,d(p,f,x,k,null);_o(p,x)}return null}function g(f,p,m,x){for(var k=null,T=null,C=p,O=p=0,_=null;C!==null&&O<m.length;O++){C.index>O?(_=C,C=null):_=C.sibling;var N=v(f,C,m[O],x);if(N===null){C===null&&(C=_);break}e&&C&&N.alternate===null&&t(f,C),p=i(N,p,O),T===null?k=N:T.sibling=N,T=N,C=_}if(O===m.length)return n(f,C),k;if(C===null){for(;O<m.length;O++)C=c(f,m[O],x),C!==null&&(p=i(C,p,O),T===null?k=C:T.sibling=C,T=C);return k}for(C=r(f,C);O<m.length;O++)_=A(C,f,O,m[O],x),_!==null&&(e&&_.alternate!==null&&C.delete(_.key===null?O:_.key),p=i(_,p,O),T===null?k=_:T.sibling=_,T=_);return e&&C.forEach(function(q){return t(f,q)}),k}function w(f,p,m,x){var k=$r(m);if(typeof k!="function")throw Error(M(150));if(m=k.call(m),m==null)throw Error(M(151));for(var T=k=null,C=p,O=p=0,_=null,N=m.next();C!==null&&!N.done;O++,N=m.next()){C.index>O?(_=C,C=null):_=C.sibling;var q=v(f,C,N.value,x);if(q===null){C===null&&(C=_);break}e&&C&&q.alternate===null&&t(f,C),p=i(q,p,O),T===null?k=q:T.sibling=q,T=q,C=_}if(N.done)return n(f,C),k;if(C===null){for(;!N.done;O++,N=m.next())N=c(f,N.value,x),N!==null&&(p=i(N,p,O),T===null?k=N:T.sibling=N,T=N);return k}for(C=r(f,C);!N.done;O++,N=m.next())N=A(C,f,O,N.value,x),N!==null&&(e&&N.alternate!==null&&C.delete(N.key===null?O:N.key),p=i(N,p,O),T===null?k=N:T.sibling=N,T=N);return e&&C.forEach(function(J){return t(f,J)}),k}return function(f,p,m,x){var k=typeof m=="object"&&m!==null&&m.type===kn&&m.key===null;k&&(m=m.props.children);var T=typeof m=="object"&&m!==null;if(T)switch(m.$$typeof){case Do:e:{for(T=m.key,k=p;k!==null;){if(k.key===T){switch(k.tag){case 7:if(m.type===kn){n(f,k.sibling),p=o(k,m.props.children),p.return=f,f=p;break e}break;default:if(k.elementType===m.type){n(f,k.sibling),p=o(k,m.props),p.ref=Nr(f,k,m),p.return=f,f=p;break e}}n(f,k);break}else t(f,k);k=k.sibling}m.type===kn?(p=nn(m.props.children,f.mode,x,m.key),p.return=f,f=p):(x=si(m.type,m.key,m.props,null,f.mode,x),x.ref=Nr(f,p,m),x.return=f,f=x)}return a(f);case qn:e:{for(k=m.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(f,p.sibling),p=o(p,m.children||[]),p.return=f,f=p;break e}else{n(f,p);break}else t(f,p);p=p.sibling}p=wl(m,f.mode,x),p.return=f,f=p}return a(f)}if(typeof m=="string"||typeof m=="number")return m=""+m,p!==null&&p.tag===6?(n(f,p.sibling),p=o(p,m),p.return=f,f=p):(n(f,p),p=xl(m,f.mode,x),p.return=f,f=p),a(f);if(Lo(m))return g(f,p,m,x);if($r(m))return w(f,p,m,x);if(T&&_o(f,m),typeof m>"u"&&!k)switch(f.tag){case 1:case 0:throw f=f.type,Error(M(152,f.displayName||f.name||"Component"))}return n(f,p)}}var mr=$h(!0),ju=$h(!1),Ao={},Rt={current:Ao},oo={current:Ao},io={current:Ao};function Tn(e){if(e===Ao)throw Error(M(174));return e}function vs(e,t){switch(Ee(io,t),Ee(oo,e),Ee(Rt,Ao),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zl(t,e)}ye(Rt),Ee(Rt,t)}function vr(){ye(Rt),ye(oo),ye(io)}function Ed(e){Tn(io.current);var t=Tn(Rt.current),n=Zl(t,e.type);t!==n&&(Ee(oo,e),Ee(Rt,n))}function Lu(e){oo.current===e&&(ye(Rt),ye(oo))}var be={current:0};function Ci(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===Su||n.data===ku))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.effectTag&64)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function _u(e,t){return{responder:e,props:t}}var ii=xt.ReactCurrentDispatcher,st=xt.ReactCurrentBatchConfig,en=0,$e=null,Me=null,Be=null,$i=!1;function Ye(){throw Error(M(321))}function Fu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mn(e[n],t[n]))return!1;return!0}function Mu(e,t,n,r,o,i){if(en=i,$e=t,t.memoizedState=null,t.updateQueue=null,t.expirationTime=0,ii.current=e===null||e.memoizedState===null?oy:iy,e=n(r,o),t.expirationTime===en){i=0;do{if(t.expirationTime=0,!(25>i))throw Error(M(301));i+=1,Be=Me=null,t.updateQueue=null,ii.current=ay,e=n(r,o)}while(t.expirationTime===en)}if(ii.current=Oi,t=Me!==null&&Me.next!==null,en=0,Be=Me=$e=null,$i=!1,t)throw Error(M(300));return e}function sr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?$e.memoizedState=Be=e:Be=Be.next=e,Be}function Sr(){if(Me===null){var e=$e.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Be===null?$e.memoizedState:Be.next;if(t!==null)Be=t,Me=e;else{if(e===null)throw Error(M(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Be===null?$e.memoizedState=Be=e:Be=Be.next=e}return Be}function Dn(e,t){return typeof t=="function"?t(e):t}function Fo(e){var t=Sr(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=Me,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){o=o.next,r=r.baseState;var l=a=i=null,s=o;do{var u=s.expirationTime;if(u<en){var d={expirationTime:s.expirationTime,suspenseConfig:s.suspenseConfig,action:s.action,eagerReducer:s.eagerReducer,eagerState:s.eagerState,next:null};l===null?(a=l=d,i=r):l=l.next=d,u>$e.expirationTime&&($e.expirationTime=u,la(u))}else l!==null&&(l=l.next={expirationTime:1073741823,suspenseConfig:s.suspenseConfig,action:s.action,eagerReducer:s.eagerReducer,eagerState:s.eagerState,next:null}),tm(u,s.suspenseConfig),r=s.eagerReducer===e?s.eagerState:e(r,s.action);s=s.next}while(s!==null&&s!==o);l===null?i=r:l.next=a,Mn(r,t.memoizedState)||(Ct=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=l,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function Mo(e){var t=Sr(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Mn(i,t.memoizedState)||(Ct=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function hl(e){var t=sr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Dn,lastRenderedState:e},e=e.dispatch=Nh.bind(null,$e,e),[t.memoizedState,e]}function gs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$e.updateQueue,t===null?(t={lastEffect:null},$e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ph(){return Sr().memoizedState}function ys(e,t,n,r){var o=sr();$e.effectTag|=e,o.memoizedState=gs(1|t,n,void 0,r===void 0?null:r)}function Bu(e,t,n,r){var o=Sr();r=r===void 0?null:r;var i=void 0;if(Me!==null){var a=Me.memoizedState;if(i=a.destroy,r!==null&&Fu(r,a.deps)){gs(t,n,i,r);return}}$e.effectTag|=e,o.memoizedState=gs(1|t,n,i,r)}function Td(e,t){return ys(516,4,e,t)}function Pi(e,t){return Bu(516,4,e,t)}function Rh(e,t){return Bu(4,2,e,t)}function Oh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Dh(e,t,n){return n=n!=null?n.concat([e]):null,Bu(4,2,Oh.bind(null,t,e),n)}function zu(){}function Cd(e,t){return sr().memoizedState=[e,t===void 0?null:t],e}function Ri(e,t){var n=Sr();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ih(e,t){var n=Sr();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Uu(e,t,n){var r=na();hn(98>r?98:r,function(){e(!0)}),hn(97<r?97:r,function(){var o=st.suspense;st.suspense=t===void 0?null:t;try{e(!1),n()}finally{st.suspense=o}})}function Nh(e,t,n){var r=Ot(),o=Gr.suspense;r=jn(r,e,o),o={expirationTime:r,suspenseConfig:o,action:n,eagerReducer:null,eagerState:null,next:null};var i=t.pending;if(i===null?o.next=o:(o.next=i.next,i.next=o),t.pending=o,i=e.alternate,e===$e||i!==null&&i===$e)$i=!0,o.expirationTime=en,$e.expirationTime=en;else{if(e.expirationTime===0&&(i===null||i.expirationTime===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.eagerReducer=i,o.eagerState=l,Mn(l,a))return}catch{}finally{}cn(e,r)}}var Oi={readContext:dt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useResponder:Ye,useDeferredValue:Ye,useTransition:Ye},oy={readContext:dt,useCallback:Cd,useContext:dt,useEffect:Td,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ys(4,2,Oh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ys(4,2,e,t)},useMemo:function(e,t){var n=sr();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=sr();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=Nh.bind(null,$e,e),[r.memoizedState,e]},useRef:function(e){var t=sr();return e={current:e},t.memoizedState=e},useState:hl,useDebugValue:zu,useResponder:_u,useDeferredValue:function(e,t){var n=hl(e),r=n[0],o=n[1];return Td(function(){var i=st.suspense;st.suspense=t===void 0?null:t;try{o(e)}finally{st.suspense=i}},[e,t]),r},useTransition:function(e){var t=hl(!1),n=t[0];return t=t[1],[Cd(Uu.bind(null,t,e),[t,e]),n]}},iy={readContext:dt,useCallback:Ri,useContext:dt,useEffect:Pi,useImperativeHandle:Dh,useLayoutEffect:Rh,useMemo:Ih,useReducer:Fo,useRef:Ph,useState:function(){return Fo(Dn)},useDebugValue:zu,useResponder:_u,useDeferredValue:function(e,t){var n=Fo(Dn),r=n[0],o=n[1];return Pi(function(){var i=st.suspense;st.suspense=t===void 0?null:t;try{o(e)}finally{st.suspense=i}},[e,t]),r},useTransition:function(e){var t=Fo(Dn),n=t[0];return t=t[1],[Ri(Uu.bind(null,t,e),[t,e]),n]}},ay={readContext:dt,useCallback:Ri,useContext:dt,useEffect:Pi,useImperativeHandle:Dh,useLayoutEffect:Rh,useMemo:Ih,useReducer:Mo,useRef:Ph,useState:function(){return Mo(Dn)},useDebugValue:zu,useResponder:_u,useDeferredValue:function(e,t){var n=Mo(Dn),r=n[0],o=n[1];return Pi(function(){var i=st.suspense;st.suspense=t===void 0?null:t;try{o(e)}finally{st.suspense=i}},[e,t]),r},useTransition:function(e){var t=Mo(Dn),n=t[0];return t=t[1],[Ri(Uu.bind(null,t,e),[t,e]),n]}},Ht=null,tn=null,In=!1;function jh(e,t){var n=$t(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function $d(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function xs(e){if(In){var t=tn;if(t){var n=t;if(!$d(e,t)){if(t=ar(n.nextSibling),!t||!$d(e,t)){e.effectTag=e.effectTag&-1025|2,In=!1,Ht=e;return}jh(Ht,n)}Ht=e,tn=ar(t.firstChild)}else e.effectTag=e.effectTag&-1025|2,In=!1,Ht=e}}function Pd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ht=e}function Bo(e){if(e!==Ht)return!1;if(!In)return Pd(e),In=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!ss(t,e.memoizedProps))for(t=tn;t;)jh(e,t),t=ar(t.nextSibling);if(Pd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===th){if(t===0){tn=ar(e.nextSibling);break e}t--}else n!==eh&&n!==ku&&n!==Su||t++}e=e.nextSibling}tn=null}}else tn=Ht?ar(e.stateNode.nextSibling):null;return!0}function ml(){tn=Ht=null,In=!1}var ly=xt.ReactCurrentOwner,Ct=!1;function Xe(e,t,n,r){t.child=e===null?ju(t,null,n,r):mr(t,e.child,n,r)}function Rd(e,t,n,r,o){n=n.render;var i=t.ref;return lr(t,o),r=Mu(e,t,n,r,i,o),e!==null&&!Ct?(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=o&&(e.expirationTime=0),Wt(e,t,o)):(t.effectTag|=1,Xe(e,t,r,o),t.child)}function Od(e,t,n,r,o,i){if(e===null){var a=n.type;return typeof a=="function"&&!Gu(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Lh(e,t,a,r,o,i)):(e=si(n.type,null,r,null,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}return a=e.child,o<i&&(o=a.memoizedProps,n=n.compare,n=n!==null?n:no,n(o,r)&&e.ref===t.ref)?Wt(e,t,i):(t.effectTag|=1,e=zn(a,r),e.ref=t.ref,e.return=t,t.child=e)}function Lh(e,t,n,r,o,i){return e!==null&&no(e.memoizedProps,r)&&e.ref===t.ref&&(Ct=!1,o<i)?(t.expirationTime=e.expirationTime,Wt(e,t,i)):ws(e,t,n,r,i)}function _h(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.effectTag|=128)}function ws(e,t,n,r,o){var i=Ke(n)?Bn:ze.current;return i=hr(t,i),lr(t,o),n=Mu(e,t,n,r,i,o),e!==null&&!Ct?(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=o&&(e.expirationTime=0),Wt(e,t,o)):(t.effectTag|=1,Xe(e,t,n,o),t.child)}function Dd(e,t,n,r,o){if(Ke(n)){var i=!0;ni(t)}else i=!1;if(lr(t,o),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),Ch(t,n,r),ms(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=dt(u):(u=Ke(n)?Bn:ze.current,u=hr(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&kd(t,a,r,u),Yt=!1;var v=t.memoizedState;a.state=v,ro(t,r,a,o),s=t.memoizedState,l!==r||v!==s||Ge.current||Yt?(typeof d=="function"&&(Ti(t,n,d,r),s=t.memoizedState),(l=Yt||Sd(t,n,l,r,v,s,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.effectTag|=4)):(typeof a.componentDidMount=="function"&&(t.effectTag|=4),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.effectTag|=4),r=!1)}else a=t.stateNode,Nu(e,t),l=t.memoizedProps,a.props=t.type===t.elementType?l:gt(t.type,l),s=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=dt(u):(u=Ke(n)?Bn:ze.current,u=hr(t,u)),d=n.getDerivedStateFromProps,(c=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&kd(t,a,r,u),Yt=!1,s=t.memoizedState,a.state=s,ro(t,r,a,o),v=t.memoizedState,l!==r||s!==v||Ge.current||Yt?(typeof d=="function"&&(Ti(t,n,d,r),v=t.memoizedState),(d=Yt||Sd(t,n,l,r,s,v,u))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,u)),typeof a.componentDidUpdate=="function"&&(t.effectTag|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.effectTag|=256)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&s===e.memoizedState||(t.effectTag|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&s===e.memoizedState||(t.effectTag|=256),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&s===e.memoizedState||(t.effectTag|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&s===e.memoizedState||(t.effectTag|=256),r=!1);return bs(e,t,n,r,i,o)}function bs(e,t,n,r,o,i){_h(e,t);var a=(t.effectTag&64)!==0;if(!r&&!a)return o&&gd(t,n,!1),Wt(e,t,i);r=t.stateNode,ly.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.effectTag|=1,e!==null&&a?(t.child=mr(t,e.child,null,i),t.child=mr(t,null,l,i)):Xe(e,t,l,i),t.memoizedState=r.state,o&&gd(t,n,!0),t.child}function Id(e){var t=e.stateNode;t.pendingContext?vd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vd(e,t.context,!1),vs(e,t.containerInfo)}var vl={dehydrated:null,retryTime:0};function Nd(e,t,n){var r=t.mode,o=t.pendingProps,i=be.current,a=!1,l;if((l=(t.effectTag&64)!==0)||(l=(i&2)!==0&&(e===null||e.memoizedState!==null)),l?(a=!0,t.effectTag&=-65):e!==null&&e.memoizedState===null||o.fallback===void 0||o.unstable_avoidThisFallback===!0||(i|=1),Ee(be,i&1),e===null){if(o.fallback!==void 0&&xs(t),a){if(a=o.fallback,o=nn(null,r,0,null),o.return=t,!(t.mode&2))for(e=t.memoizedState!==null?t.child.child:t.child,o.child=e;e!==null;)e.return=o,e=e.sibling;return n=nn(a,r,n,null),n.return=t,o.sibling=n,t.memoizedState=vl,t.child=o,n}return r=o.children,t.memoizedState=null,t.child=ju(t,null,r,n)}if(e.memoizedState!==null){if(e=e.child,r=e.sibling,a){if(o=o.fallback,n=zn(e,e.pendingProps),n.return=t,!(t.mode&2)&&(a=t.memoizedState!==null?t.child.child:t.child,a!==e.child))for(n.child=a;a!==null;)a.return=n,a=a.sibling;return r=zn(r,o),r.return=t,n.sibling=r,n.childExpirationTime=0,t.memoizedState=vl,t.child=n,r}return n=mr(t,e.child,o.children,n),t.memoizedState=null,t.child=n}if(e=e.child,a){if(a=o.fallback,o=nn(null,r,0,null),o.return=t,o.child=e,e!==null&&(e.return=o),!(t.mode&2))for(e=t.memoizedState!==null?t.child.child:t.child,o.child=e;e!==null;)e.return=o,e=e.sibling;return n=nn(a,r,n,null),n.return=t,o.sibling=n,n.effectTag|=2,o.childExpirationTime=0,t.memoizedState=vl,t.child=o,n}return t.memoizedState=null,t.child=mr(t,e,o.children,n)}function jd(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;n!==null&&n.expirationTime<t&&(n.expirationTime=t),Eh(e.return,t)}function gl(e,t,n,r,o,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailExpiration:0,tailMode:o,lastEffect:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailExpiration=0,a.tailMode=o,a.lastEffect=i)}function Ld(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Xe(e,t,r.children,n),r=be.current,r&2)r=r&1|2,t.effectTag|=64;else{if(e!==null&&e.effectTag&64)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jd(e,n);else if(e.tag===19)jd(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ee(be,r),!(t.mode&2))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ci(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),gl(t,!1,o,n,i,t.lastEffect);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ci(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}gl(t,!0,n,null,i,t.lastEffect);break;case"together":gl(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function Wt(e,t,n){e!==null&&(t.dependencies=e.dependencies);var r=t.expirationTime;if(r!==0&&la(r),t.childExpirationTime<n)return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=zn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}var Fh,As,Mh,Bh;Fh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};As=function(){};Mh=function(e,t,n,r,o){var i=e.memoizedProps;if(i!==r){var a=t.stateNode;switch(Tn(Rt.current),e=null,n){case"input":i=Kl(a,i),r=Kl(a,r),e=[];break;case"option":i=Yl(a,i),r=Yl(a,r),e=[];break;case"select":i=Ue({},i,{value:void 0}),r=Ue({},r,{value:void 0}),e=[];break;case"textarea":i=Xl(a,i),r=Xl(a,r),e=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(a.onclick=xi)}os(n,r);var l,s;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style")for(s in a=i[l],a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="");else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(dr.hasOwnProperty(l)?e||(e=[]):(e=e||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(e||(e=[]),e.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(e=e||[]).push(l,u)):l==="children"?a===u||typeof u!="string"&&typeof u!="number"||(e=e||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(dr.hasOwnProperty(l)?(u!=null&&Mt(o,l),e||a===u||(e=[])):(e=e||[]).push(l,u))}n&&(e=e||[]).push("style",n),o=e,(t.updateQueue=o)&&(t.effectTag|=4)}};Bh=function(e,t,n,r){n!==r&&(t.effectTag|=4)};function zo(e,t){switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function sy(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ke(t.type)&&Ai(),null;case 3:return vr(),ye(Ge),ye(ze),n=t.stateNode,n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),e!==null&&e.child!==null||!Bo(t)||(t.effectTag|=4),As(t),null;case 5:Lu(t),n=Tn(io.current);var o=t.type;if(e!==null&&t.stateNode!=null)Mh(e,t,o,r,n),e.ref!==t.ref&&(t.effectTag|=128);else{if(!r){if(t.stateNode===null)throw Error(M(166));return null}if(e=Tn(Rt.current),Bo(t)){r=t.stateNode,o=t.type;var i=t.memoizedProps;switch(r[Xt]=t,r[wi]=i,o){case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(e=0;e<Fr.length;e++)xe(Fr[e],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"form":xe("reset",r),xe("submit",r);break;case"details":xe("toggle",r);break;case"input":Gc(r,i),xe("invalid",r),Mt(n,"onChange");break;case"select":r._wrapperState={wasMultiple:!!i.multiple},xe("invalid",r),Mt(n,"onChange");break;case"textarea":qc(r,i),xe("invalid",r),Mt(n,"onChange")}os(o,i),e=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(e=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(e=["children",""+l]):dr.hasOwnProperty(a)&&l!=null&&Mt(n,a)}switch(o){case"input":Io(r),Kc(r,i,!0);break;case"textarea":Io(r),Jc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=xi)}n=e,t.updateQueue=n,n!==null&&(t.effectTag|=4)}else{switch(a=n.nodeType===9?n:n.ownerDocument,e===nd&&(e=Ip(o)),e===nd?o==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(o,{is:r.is}):(e=a.createElement(o),o==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,o),e[Xt]=t,e[wi]=r,Fh(e,t,!1,!1),t.stateNode=e,a=is(o,r),o){case"iframe":case"object":case"embed":xe("load",e),l=r;break;case"video":case"audio":for(l=0;l<Fr.length;l++)xe(Fr[l],e);l=r;break;case"source":xe("error",e),l=r;break;case"img":case"image":case"link":xe("error",e),xe("load",e),l=r;break;case"form":xe("reset",e),xe("submit",e),l=r;break;case"details":xe("toggle",e),l=r;break;case"input":Gc(e,r),l=Kl(e,r),xe("invalid",e),Mt(n,"onChange");break;case"option":l=Yl(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Ue({},r,{value:void 0}),xe("invalid",e),Mt(n,"onChange");break;case"textarea":qc(e,r),l=Xl(e,r),xe("invalid",e),Mt(n,"onChange");break;default:l=r}os(o,l);var s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Xp(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Np(e,u)):i==="children"?typeof u=="string"?(o!=="textarea"||u!=="")&&Xr(e,u):typeof u=="number"&&Xr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(dr.hasOwnProperty(i)?u!=null&&Mt(n,i):u!=null&&fu(e,i,u,a))}switch(o){case"input":Io(e),Kc(e,r,!1);break;case"textarea":Io(e),Jc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fn(r.value));break;case"select":e.multiple=!!r.multiple,n=r.value,n!=null?ir(e,!!r.multiple,n,!1):r.defaultValue!=null&&ir(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=xi)}nh(o,r)&&(t.effectTag|=4)}t.ref!==null&&(t.effectTag|=128)}return null;case 6:if(e&&t.stateNode!=null)Bh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));n=Tn(io.current),Tn(Rt.current),Bo(t)?(n=t.stateNode,r=t.memoizedProps,n[Xt]=t,n.nodeValue!==r&&(t.effectTag|=4)):(n=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),n[Xt]=t,t.stateNode=n)}return null;case 13:return ye(be),r=t.memoizedState,t.effectTag&64?(t.expirationTime=n,t):(n=r!==null,r=!1,e===null?t.memoizedProps.fallback!==void 0&&Bo(t):(o=e.memoizedState,r=o!==null,n||o===null||(o=e.child.sibling,o!==null&&(i=t.firstEffect,i!==null?(t.firstEffect=o,o.nextEffect=i):(t.firstEffect=t.lastEffect=o,o.nextEffect=null),o.effectTag=8))),n&&!r&&t.mode&2&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||be.current&1?Pe===Nn&&(Pe=Ni):((Pe===Nn||Pe===Ni)&&(Pe=oa),lo!==0&&et!==null&&(Pn(et,qe),am(et,lo)))),(n||r)&&(t.effectTag|=4),null);case 4:return vr(),As(t),null;case 10:return Du(t),null;case 17:return Ke(t.type)&&Ai(),null;case 19:if(ye(be),r=t.memoizedState,r===null)return null;if(o=(t.effectTag&64)!==0,i=r.rendering,i===null){if(o)zo(r,!1);else if(Pe!==Nn||e!==null&&e.effectTag&64)for(i=t.child;i!==null;){if(e=Ci(i),e!==null){for(t.effectTag|=64,zo(r,!1),o=e.updateQueue,o!==null&&(t.updateQueue=o,t.effectTag|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=t.child;r!==null;)o=r,i=n,o.effectTag&=2,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null,e=o.alternate,e===null?(o.childExpirationTime=0,o.expirationTime=i,o.child=null,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null):(o.childExpirationTime=e.childExpirationTime,o.expirationTime=e.expirationTime,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,i=e.dependencies,o.dependencies=i===null?null:{expirationTime:i.expirationTime,firstContext:i.firstContext,responders:i.responders}),r=r.sibling;return Ee(be,be.current&1|2),t.child}i=i.sibling}}else{if(!o)if(e=Ci(i),e!==null){if(t.effectTag|=64,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.effectTag|=4),zo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!i.alternate)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*lt()-r.renderingStartTime>r.tailExpiration&&1<n&&(t.effectTag|=64,o=!0,zo(r,!1),t.expirationTime=t.childExpirationTime=n-1);r.isBackwards?(i.sibling=t.child,t.child=i):(n=r.last,n!==null?n.sibling=i:t.child=i,r.last=i)}return r.tail!==null?(r.tailExpiration===0&&(r.tailExpiration=lt()+500),n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=lt(),n.sibling=null,t=be.current,Ee(be,o?t&1|2:t&1),n):null}throw Error(M(156,t.tag))}function uy(e){switch(e.tag){case 1:Ke(e.type)&&Ai();var t=e.effectTag;return t&4096?(e.effectTag=t&-4097|64,e):null;case 3:if(vr(),ye(Ge),ye(ze),t=e.effectTag,t&64)throw Error(M(285));return e.effectTag=t&-4097|64,e;case 5:return Lu(e),null;case 13:return ye(be),t=e.effectTag,t&4096?(e.effectTag=t&-4097|64,e):null;case 19:return ye(be),null;case 4:return vr(),null;case 10:return Du(e),null;default:return null}}function Hu(e,t){return{value:e,source:t,stack:mu(t)}}var cy=typeof WeakSet=="function"?WeakSet:Set;function Ss(e,t){var n=t.source,r=t.stack;r===null&&n!==null&&(r=mu(n)),n!==null&&Vt(n.type),t=t.value,e!==null&&e.tag===1&&Vt(e.type);try{console.error(t)}catch(o){setTimeout(function(){throw o})}}function dy(e,t){try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(n){Ln(e,n)}}function _d(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){Ln(e,n)}else t.current=null}function fy(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.effectTag&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:gt(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(M(163))}function zh(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.destroy;n.destroy=void 0,r!==void 0&&r()}n=n.next}while(n!==t)}}function Uh(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function py(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:Uh(3,n);return;case 1:if(e=n.stateNode,n.effectTag&4)if(t===null)e.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:gt(n.type,t.memoizedProps);e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}t=n.updateQueue,t!==null&&Ad(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}Ad(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.effectTag&4&&nh(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Kp(n))));return;case 19:case 17:case 20:case 21:return}throw Error(M(163))}function Fd(e,t,n){switch(typeof Os=="function"&&Os(t),t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var r=e.next;hn(97<n?97:n,function(){var o=r;do{var i=o.destroy;if(i!==void 0){var a=t;try{i()}catch(l){Ln(a,l)}}o=o.next}while(o!==r)})}break;case 1:_d(t),n=t.stateNode,typeof n.componentWillUnmount=="function"&&dy(t,n);break;case 5:_d(t);break;case 4:Wh(e,t,n)}}function Hh(e){var t=e.alternate;e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.alternate=null,e.firstEffect=null,e.lastEffect=null,e.pendingProps=null,e.memoizedProps=null,e.stateNode=null,t!==null&&Hh(t)}function Md(e){return e.tag===5||e.tag===3||e.tag===4}function Bd(e){e:{for(var t=e.return;t!==null;){if(Md(t)){var n=t;break e}t=t.return}throw Error(M(160))}switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(M(161))}n.effectTag&16&&(Xr(t,""),n.effectTag&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||Md(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.effectTag&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.effectTag&2)){n=n.stateNode;break e}}r?ks(e,n,t):Es(e,n,t)}function ks(e,t,n){var r=e.tag,o=r===5||r===6;if(o)e=o?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xi));else if(r!==4&&(e=e.child,e!==null))for(ks(e,t,n),e=e.sibling;e!==null;)ks(e,t,n),e=e.sibling}function Es(e,t,n){var r=e.tag,o=r===5||r===6;if(o)e=o?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Es(e,t,n),e=e.sibling;e!==null;)Es(e,t,n),e=e.sibling}function Wh(e,t,n){for(var r=t,o=!1,i,a;;){if(!o){o=r.return;e:for(;;){if(o===null)throw Error(M(160));switch(i=o.stateNode,o.tag){case 5:a=!1;break e;case 3:i=i.containerInfo,a=!0;break e;case 4:i=i.containerInfo,a=!0;break e}o=o.return}o=!0}if(r.tag===5||r.tag===6){e:for(var l=e,s=r,u=n,d=s;;)if(Fd(l,d,u),d.child!==null&&d.tag!==4)d.child.return=d,d=d.child;else{if(d===s)break e;for(;d.sibling===null;){if(d.return===null||d.return===s)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}a?(l=i,s=r.stateNode,l.nodeType===8?l.parentNode.removeChild(s):l.removeChild(s)):i.removeChild(r.stateNode)}else if(r.tag===4){if(r.child!==null){i=r.stateNode.containerInfo,a=!0,r.child.return=r,r=r.child;continue}}else if(Fd(e,r,n),r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return,r.tag===4&&(o=!1)}r.sibling.return=r.return,r=r.sibling}}function yl(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:zh(3,t);return;case 1:return;case 5:var n=t.stateNode;if(n!=null){var r=t.memoizedProps,o=e!==null?e.memoizedProps:r;e=t.type;var i=t.updateQueue;if(t.updateQueue=null,i!==null){for(n[wi]=r,e==="input"&&r.type==="radio"&&r.name!=null&&Rp(n,r),is(e,o),t=is(e,r),o=0;o<i.length;o+=2){var a=i[o],l=i[o+1];a==="style"?Xp(n,l):a==="dangerouslySetInnerHTML"?Np(n,l):a==="children"?Xr(n,l):fu(n,a,l,t)}switch(e){case"input":ql(n,r);break;case"textarea":Op(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,e=r.value,e!=null?ir(n,!!r.multiple,e,!1):t!==!!r.multiple&&(r.defaultValue!=null?ir(n,!!r.multiple,r.defaultValue,!0):ir(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(M(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:t=t.stateNode,t.hydrate&&(t.hydrate=!1,Kp(t.containerInfo));return;case 12:return;case 13:if(n=t,t.memoizedState===null?r=!1:(r=!0,n=t.child,Qu=lt()),n!==null)e:for(e=n;;){if(e.tag===5)i=e.stateNode,r?(i=i.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(i=e.stateNode,o=e.memoizedProps.style,o=o!=null&&o.hasOwnProperty("display")?o.display:null,i.style.display=Yp("display",o));else if(e.tag===6)e.stateNode.nodeValue=r?"":e.memoizedProps;else if(e.tag===13&&e.memoizedState!==null&&e.memoizedState.dehydrated===null){i=e.child.sibling,i.return=e,e=i;continue}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}zd(t);return;case 19:zd(t);return;case 17:return}throw Error(M(163))}function zd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new cy),t.forEach(function(r){var o=Sy.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}var hy=typeof WeakMap=="function"?WeakMap:Map;function Vh(e,t,n){n=ln(n,null),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_i||(_i=!0,Ts=r),Ss(e,t)},n}function Qh(e,t,n){n=ln(n,null),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return Ss(e,t),r(o)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(un===null?un=new Set([this]):un.add(this),Ss(e,t));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}var my=Math.ceil,Di=xt.ReactCurrentDispatcher,Gh=xt.ReactCurrentOwner,Re=0,Wu=8,wt=16,Dt=32,Nn=0,Ii=1,Kh=2,Ni=3,oa=4,Vu=5,re=Re,et=null,ie=null,qe=0,Pe=Nn,ia=null,Ut=1073741823,ao=1073741823,ji=null,lo=0,Li=!1,Qu=0,qh=500,Z=null,_i=!1,Ts=null,un=null,Fi=!1,Kr=null,Br=90,Cn=null,qr=0,Cs=null,ai=0;function Ot(){return(re&(wt|Dt))!==Re?1073741821-(lt()/10|0):ai!==0?ai:ai=1073741821-(lt()/10|0)}function jn(e,t,n){if(t=t.mode,!(t&2))return 1073741823;var r=na();if(!(t&4))return r===99?1073741823:1073741822;if((re&wt)!==Re)return qe;if(n!==null)e=oi(e,n.timeoutMs|0||5e3,250);else switch(r){case 99:e=1073741823;break;case 98:e=oi(e,150,100);break;case 97:case 96:e=oi(e,5e3,250);break;case 95:e=2;break;default:throw Error(M(326))}return et!==null&&e===qe&&--e,e}function cn(e,t){if(50<qr)throw qr=0,Cs=null,Error(M(185));if(e=aa(e,t),e!==null){var n=na();t===1073741823?(re&Wu)!==Re&&(re&(wt|Dt))===Re?$s(e):(tt(e),re===Re&&Nt()):tt(e),(re&4)===Re||n!==98&&n!==99||(Cn===null?Cn=new Map([[e,t]]):(n=Cn.get(e),(n===void 0||n>t)&&Cn.set(e,t)))}}function aa(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;n!==null&&n.expirationTime<t&&(n.expirationTime=t);var r=e.return,o=null;if(r===null&&e.tag===3)o=e.stateNode;else for(;r!==null;){if(n=r.alternate,r.childExpirationTime<t&&(r.childExpirationTime=t),n!==null&&n.childExpirationTime<t&&(n.childExpirationTime=t),r.return===null&&r.tag===3){o=r.stateNode;break}r=r.return}return o!==null&&(et===o&&(la(t),Pe===oa&&Pn(o,qe)),am(o,t)),o}function li(e){var t=e.lastExpiredTime;if(t!==0||(t=e.firstPendingTime,!im(e,t)))return t;var n=e.lastPingedTime;return e=e.nextKnownPendingLevel,e=n>e?n:e,2>=e&&t!==e?0:e}function tt(e){if(e.lastExpiredTime!==0)e.callbackExpirationTime=1073741823,e.callbackPriority=99,e.callbackNode=wd($s.bind(null,e));else{var t=li(e),n=e.callbackNode;if(t===0)n!==null&&(e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90);else{var r=Ot();if(t===1073741823?r=99:t===1||t===2?r=95:(r=10*(1073741821-t)-10*(1073741821-r),r=0>=r?99:250>=r?98:5250>=r?97:95),n!==null){var o=e.callbackPriority;if(e.callbackExpirationTime===t&&o>=r)return;n!==bh&&vh(n)}e.callbackExpirationTime=t,e.callbackPriority=r,t=t===1073741823?wd($s.bind(null,e)):Sh(r,Jh.bind(null,e),{timeout:10*(1073741821-t)-lt()}),e.callbackNode=t}}}function Jh(e,t){if(ai=0,t)return t=Ot(),Ds(e,t),tt(e),null;var n=li(e);if(n!==0){if(t=e.callbackNode,(re&(wt|Dt))!==Re)throw Error(M(327));if(kr(),e===et&&n===qe||$n(e,n),ie!==null){var r=re;re|=wt;var o=em();do try{yy();break}catch(l){Zh(e,l)}while(!0);if(Ou(),re=r,Di.current=o,Pe===Ii)throw t=ia,$n(e,n),Pn(e,n),tt(e),t;if(ie===null)switch(o=e.finishedWork=e.current.alternate,e.finishedExpirationTime=n,r=Pe,et=null,r){case Nn:case Ii:throw Error(M(345));case Kh:Ds(e,2<n?2:n);break;case Ni:if(Pn(e,n),r=e.lastSuspendedTime,n===r&&(e.nextKnownPendingLevel=Ps(o)),Ut===1073741823&&(o=Qu+qh-lt(),10<o)){if(Li){var i=e.lastPingedTime;if(i===0||i>=n){e.lastPingedTime=n,$n(e,n);break}}if(i=li(e),i!==0&&i!==n)break;if(r!==0&&r!==n){e.lastPingedTime=r;break}e.timeoutHandle=fl(Sn.bind(null,e),o);break}Sn(e);break;case oa:if(Pn(e,n),r=e.lastSuspendedTime,n===r&&(e.nextKnownPendingLevel=Ps(o)),Li&&(o=e.lastPingedTime,o===0||o>=n)){e.lastPingedTime=n,$n(e,n);break}if(o=li(e),o!==0&&o!==n)break;if(r!==0&&r!==n){e.lastPingedTime=r;break}if(ao!==1073741823?r=10*(1073741821-ao)-lt():Ut===1073741823?r=0:(r=10*(1073741821-Ut)-5e3,o=lt(),n=10*(1073741821-n)-o,r=o-r,0>r&&(r=0),r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*my(r/1960))-r,n<r&&(r=n)),10<r){e.timeoutHandle=fl(Sn.bind(null,e),r);break}Sn(e);break;case Vu:if(Ut!==1073741823&&ji!==null){i=Ut;var a=ji;if(r=a.busyMinDurationMs|0,0>=r?r=0:(o=a.busyDelayMs|0,i=lt()-(10*(1073741821-i)-(a.timeoutMs|0||5e3)),r=i<=o?0:o+r-i),10<r){Pn(e,n),e.timeoutHandle=fl(Sn.bind(null,e),r);break}}Sn(e);break;default:throw Error(M(329))}if(tt(e),e.callbackNode===t)return Jh.bind(null,e)}}return null}function $s(e){var t=e.lastExpiredTime;if(t=t!==0?t:1073741823,(re&(wt|Dt))!==Re)throw Error(M(327));if(kr(),e===et&&t===qe||$n(e,t),ie!==null){var n=re;re|=wt;var r=em();do try{gy();break}catch(o){Zh(e,o)}while(!0);if(Ou(),re=n,Di.current=r,Pe===Ii)throw n=ia,$n(e,t),Pn(e,t),tt(e),n;if(ie!==null)throw Error(M(261));e.finishedWork=e.current.alternate,e.finishedExpirationTime=t,et=null,Sn(e),tt(e)}return null}function vy(){if(Cn!==null){var e=Cn;Cn=null,e.forEach(function(t,n){Ds(n,t),tt(n)}),Nt()}}function Yh(e,t){var n=re;re|=1;try{return e(t)}finally{re=n,re===Re&&Nt()}}function Xh(e,t){var n=re;re&=-2,re|=Wu;try{return e(t)}finally{re=n,re===Re&&Nt()}}function $n(e,t){e.finishedWork=null,e.finishedExpirationTime=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,mg(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ai();break;case 3:vr(),ye(Ge),ye(ze);break;case 5:Lu(r);break;case 4:vr();break;case 13:ye(be);break;case 19:ye(be);break;case 10:Du(r)}n=n.return}et=e,ie=zn(e.current,null),qe=t,Pe=Nn,ia=null,ao=Ut=1073741823,ji=null,lo=0,Li=!1}function Zh(e,t){do{try{if(Ou(),ii.current=Oi,$i)for(var n=$e.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}if(en=0,Be=Me=$e=null,$i=!1,ie===null||ie.return===null)return Pe=Ii,ia=t,ie=null;e:{var o=e,i=ie.return,a=ie,l=t;if(t=qe,a.effectTag|=2048,a.firstEffect=a.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var s=l;if(!(a.mode&2)){var u=a.alternate;u?(a.updateQueue=u.updateQueue,a.memoizedState=u.memoizedState,a.expirationTime=u.expirationTime):(a.updateQueue=null,a.memoizedState=null)}var d=(be.current&1)!==0,c=i;do{var v;if(v=c.tag===13){var A=c.memoizedState;if(A!==null)v=A.dehydrated!==null;else{var g=c.memoizedProps;v=g.fallback===void 0?!1:g.unstable_avoidThisFallback!==!0?!0:!d}}if(v){var w=c.updateQueue;if(w===null){var f=new Set;f.add(s),c.updateQueue=f}else w.add(s);if(!(c.mode&2)){if(c.effectTag|=64,a.effectTag&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var p=ln(1073741823,null);p.tag=2,sn(a,p)}a.expirationTime=1073741823;break e}l=void 0,a=t;var m=o.pingCache;if(m===null?(m=o.pingCache=new hy,l=new Set,m.set(s,l)):(l=m.get(s),l===void 0&&(l=new Set,m.set(s,l))),!l.has(a)){l.add(a);var x=Ay.bind(null,o,s,a);s.then(x,x)}c.effectTag|=4096,c.expirationTime=t;break e}c=c.return}while(c!==null);l=Error((Vt(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`+mu(a))}Pe!==Vu&&(Pe=Kh),l=Hu(l,a),c=i;do{switch(c.tag){case 3:s=l,c.effectTag|=4096,c.expirationTime=t;var k=Vh(c,s,t);bd(c,k);break e;case 1:s=l;var T=c.type,C=c.stateNode;if(!(c.effectTag&64)&&(typeof T.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(un===null||!un.has(C)))){c.effectTag|=4096,c.expirationTime=t;var O=Qh(c,s,t);bd(c,O);break e}}c=c.return}while(c!==null)}ie=rm(ie)}catch(_){t=_;continue}break}while(!0)}function em(){var e=Di.current;return Di.current=Oi,e===null?Oi:e}function tm(e,t){e<Ut&&2<e&&(Ut=e),t!==null&&e<ao&&2<e&&(ao=e,ji=t)}function la(e){e>lo&&(lo=e)}function gy(){for(;ie!==null;)ie=nm(ie)}function yy(){for(;ie!==null&&!ny();)ie=nm(ie)}function nm(e){var t=om(e.alternate,e,qe);return e.memoizedProps=e.pendingProps,t===null&&(t=rm(e)),Gh.current=null,t}function rm(e){ie=e;do{var t=ie.alternate;if(e=ie.return,ie.effectTag&2048){if(t=uy(ie),t!==null)return t.effectTag&=2047,t;e!==null&&(e.firstEffect=e.lastEffect=null,e.effectTag|=2048)}else{if(t=sy(t,ie,qe),qe===1||ie.childExpirationTime!==1){for(var n=0,r=ie.child;r!==null;){var o=r.expirationTime,i=r.childExpirationTime;o>n&&(n=o),i>n&&(n=i),r=r.sibling}ie.childExpirationTime=n}if(t!==null)return t;e!==null&&!(e.effectTag&2048)&&(e.firstEffect===null&&(e.firstEffect=ie.firstEffect),ie.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=ie.firstEffect),e.lastEffect=ie.lastEffect),1<ie.effectTag&&(e.lastEffect!==null?e.lastEffect.nextEffect=ie:e.firstEffect=ie,e.lastEffect=ie))}if(t=ie.sibling,t!==null)return t;ie=e}while(ie!==null);return Pe===Nn&&(Pe=Vu),null}function Ps(e){var t=e.expirationTime;return e=e.childExpirationTime,t>e?t:e}function Sn(e){var t=na();return hn(99,xy.bind(null,e,t)),null}function xy(e,t){do kr();while(Kr!==null);if((re&(wt|Dt))!==Re)throw Error(M(327));var n=e.finishedWork,r=e.finishedExpirationTime;if(n===null)return null;if(e.finishedWork=null,e.finishedExpirationTime=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90,e.nextKnownPendingLevel=0;var o=Ps(n);if(e.firstPendingTime=o,r<=e.lastSuspendedTime?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:r<=e.firstSuspendedTime&&(e.firstSuspendedTime=r-1),r<=e.lastPingedTime&&(e.lastPingedTime=0),r<=e.lastExpiredTime&&(e.lastExpiredTime=0),e===et&&(ie=et=null,qe=0),1<n.effectTag?n.lastEffect!==null?(n.lastEffect.nextEffect=n,o=n.firstEffect):o=n:o=n.firstEffect,o!==null){var i=re;re|=Dt,Gh.current=null,cl=Xo;var a=id();if(ls(a)){if("selectionStart"in a)var l={start:a.selectionStart,end:a.selectionEnd};else e:{l=(l=a.ownerDocument)&&l.defaultView||window;var s=l.getSelection&&l.getSelection();if(s&&s.rangeCount!==0){l=s.anchorNode;var u=s.anchorOffset,d=s.focusNode;s=s.focusOffset;try{l.nodeType,d.nodeType}catch{l=null;break e}var c=0,v=-1,A=-1,g=0,w=0,f=a,p=null;t:for(;;){for(var m;f!==l||u!==0&&f.nodeType!==3||(v=c+u),f!==d||s!==0&&f.nodeType!==3||(A=c+s),f.nodeType===3&&(c+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===a)break t;if(p===l&&++g===u&&(v=c),p===d&&++w===s&&(A=c),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}l=v===-1||A===-1?null:{start:v,end:A}}else l=null}l=l||{start:0,end:0}}else l=null;dl={activeElementDetached:null,focusedElem:a,selectionRange:l},Xo=!1,Z=o;do try{wy()}catch(N){if(Z===null)throw Error(M(330));Ln(Z,N),Z=Z.nextEffect}while(Z!==null);Z=o;do try{for(a=e,l=t;Z!==null;){var x=Z.effectTag;if(x&16&&Xr(Z.stateNode,""),x&128){var k=Z.alternate;if(k!==null){var T=k.ref;T!==null&&(typeof T=="function"?T(null):T.current=null)}}switch(x&1038){case 2:Bd(Z),Z.effectTag&=-3;break;case 6:Bd(Z),Z.effectTag&=-3,yl(Z.alternate,Z);break;case 1024:Z.effectTag&=-1025;break;case 1028:Z.effectTag&=-1025,yl(Z.alternate,Z);break;case 4:yl(Z.alternate,Z);break;case 8:u=Z,Wh(a,u,l),Hh(u)}Z=Z.nextEffect}}catch(N){if(Z===null)throw Error(M(330));Ln(Z,N),Z=Z.nextEffect}while(Z!==null);if(T=dl,k=id(),x=T.focusedElem,l=T.selectionRange,k!==x&&x&&x.ownerDocument&&Zp(x.ownerDocument.documentElement,x)){for(l!==null&&ls(x)&&(k=l.start,T=l.end,T===void 0&&(T=k),"selectionStart"in x?(x.selectionStart=k,x.selectionEnd=Math.min(T,x.value.length)):(T=(k=x.ownerDocument||document)&&k.defaultView||window,T.getSelection&&(T=T.getSelection(),u=x.textContent.length,a=Math.min(l.start,u),l=l.end===void 0?a:Math.min(l.end,u),!T.extend&&a>l&&(u=l,l=a,a=u),u=od(x,a),d=od(x,l),u&&d&&(T.rangeCount!==1||T.anchorNode!==u.node||T.anchorOffset!==u.offset||T.focusNode!==d.node||T.focusOffset!==d.offset)&&(k=k.createRange(),k.setStart(u.node,u.offset),T.removeAllRanges(),a>l?(T.addRange(k),T.extend(d.node,d.offset)):(k.setEnd(d.node,d.offset),T.addRange(k)))))),k=[],T=x;T=T.parentNode;)T.nodeType===1&&k.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<k.length;x++)T=k[x],T.element.scrollLeft=T.left,T.element.scrollTop=T.top}Xo=!!cl,dl=cl=null,e.current=n,Z=o;do try{for(x=e;Z!==null;){var C=Z.effectTag;if(C&36&&py(x,Z.alternate,Z),C&128){k=void 0;var O=Z.ref;if(O!==null){var _=Z.stateNode;switch(Z.tag){case 5:k=_;break;default:k=_}typeof O=="function"?O(k):O.current=k}}Z=Z.nextEffect}}catch(N){if(Z===null)throw Error(M(330));Ln(Z,N),Z=Z.nextEffect}while(Z!==null);Z=null,ry(),re=i}else e.current=n;if(Fi)Fi=!1,Kr=e,Br=t;else for(Z=o;Z!==null;)t=Z.nextEffect,Z.nextEffect=null,Z=t;if(t=e.firstPendingTime,t===0&&(un=null),t===1073741823?e===Cs?qr++:(qr=0,Cs=e):qr=0,typeof Rs=="function"&&Rs(n.stateNode,r),tt(e),_i)throw _i=!1,e=Ts,Ts=null,e;return(re&Wu)!==Re||Nt(),null}function wy(){for(;Z!==null;){var e=Z.effectTag;e&256&&fy(Z.alternate,Z),!(e&512)||Fi||(Fi=!0,Sh(97,function(){return kr(),null})),Z=Z.nextEffect}}function kr(){if(Br!==90){var e=97<Br?97:Br;return Br=90,hn(e,by)}}function by(){if(Kr===null)return!1;var e=Kr;if(Kr=null,(re&(wt|Dt))!==Re)throw Error(M(331));var t=re;for(re|=Dt,e=e.current.firstEffect;e!==null;){try{var n=e;if(n.effectTag&512)switch(n.tag){case 0:case 11:case 15:case 22:zh(5,n),Uh(5,n)}}catch(r){if(e===null)throw Error(M(330));Ln(e,r)}n=e.nextEffect,e.nextEffect=null,e=n}return re=t,Nt(),!0}function Ud(e,t,n){t=Hu(n,t),t=Vh(e,t,1073741823),sn(e,t),e=aa(e,1073741823),e!==null&&tt(e)}function Ln(e,t){if(e.tag===3)Ud(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){Ud(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(un===null||!un.has(r))){e=Hu(t,e),e=Qh(n,e,1073741823),sn(n,e),n=aa(n,1073741823),n!==null&&tt(n);break}}n=n.return}}function Ay(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),et===e&&qe===n?Pe===oa||Pe===Ni&&Ut===1073741823&&lt()-Qu<qh?$n(e,qe):Li=!0:im(e,n)&&(t=e.lastPingedTime,t!==0&&t<n||(e.lastPingedTime=n,tt(e)))}function Sy(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=Ot(),t=jn(t,e,null)),e=aa(e,t),e!==null&&tt(e)}var om;om=function(e,t,n){var r=t.expirationTime;if(e!==null){var o=t.pendingProps;if(e.memoizedProps!==o||Ge.current)Ct=!0;else{if(r<n){switch(Ct=!1,t.tag){case 3:Id(t),ml();break;case 5:if(Ed(t),t.mode&4&&n!==1&&o.hidden)return t.expirationTime=t.childExpirationTime=1,null;break;case 1:Ke(t.type)&&ni(t);break;case 4:vs(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value,o=t.type._context,Ee(Si,o._currentValue),o._currentValue=r;break;case 13:if(t.memoizedState!==null)return r=t.child.childExpirationTime,r!==0&&r>=n?Nd(e,t,n):(Ee(be,be.current&1),t=Wt(e,t,n),t!==null?t.sibling:null);Ee(be,be.current&1);break;case 19:if(r=t.childExpirationTime>=n,e.effectTag&64){if(r)return Ld(e,t,n);t.effectTag|=64}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null),Ee(be,be.current),!r)return null}return Wt(e,t,n)}Ct=!1}}else Ct=!1;switch(t.expirationTime=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,o=hr(t,ze.current),lr(t,n),o=Mu(null,t,r,e,o,n),t.effectTag|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(r)){var i=!0;ni(t)}else i=!1;t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Iu(t);var a=r.getDerivedStateFromProps;typeof a=="function"&&Ti(t,r,a,e),o.updater=ra,t.stateNode=o,o._reactInternalFiber=t,ms(t,r,e,n),t=bs(null,t,r,!0,i,n)}else t.tag=0,Xe(null,t,o,n),t=t.child;return t;case 16:e:{if(o=t.elementType,e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,Xv(o),o._status!==1)throw o._result;switch(o=o._result,t.type=o,i=t.tag=Ty(o),e=gt(o,e),i){case 0:t=ws(null,t,o,e,n);break e;case 1:t=Dd(null,t,o,e,n);break e;case 11:t=Rd(null,t,o,e,n);break e;case 14:t=Od(null,t,o,gt(o.type,e),r,n);break e}throw Error(M(306,o,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),ws(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),Dd(e,t,r,o,n);case 3:if(Id(t),r=t.updateQueue,e===null||r===null)throw Error(M(282));if(r=t.pendingProps,o=t.memoizedState,o=o!==null?o.element:null,Nu(e,t),ro(t,r,null,n),r=t.memoizedState.element,r===o)ml(),t=Wt(e,t,n);else{if((o=t.stateNode.hydrate)&&(tn=ar(t.stateNode.containerInfo.firstChild),Ht=t,o=In=!0),o)for(n=ju(t,null,r,n),t.child=n;n;)n.effectTag=n.effectTag&-3|1024,n=n.sibling;else Xe(e,t,r,n),ml();t=t.child}return t;case 5:return Ed(t),e===null&&xs(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,ss(r,o)?a=null:i!==null&&ss(r,i)&&(t.effectTag|=16),_h(e,t),t.mode&4&&n!==1&&o.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):(Xe(e,t,a,n),t=t.child),t;case 6:return e===null&&xs(t),null;case 13:return Nd(e,t,n);case 4:return vs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mr(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),Rd(e,t,r,o,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value;var l=t.type._context;if(Ee(Si,l._currentValue),l._currentValue=i,a!==null)if(l=a.value,i=Mn(l,i)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(l,i):1073741823)|0,i===0){if(a.children===o.children&&!Ge.current){t=Wt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){a=l.child;for(var u=s.firstContext;u!==null;){if(u.context===r&&u.observedBits&i){l.tag===1&&(u=ln(n,null),u.tag=2,sn(l,u)),l.expirationTime<n&&(l.expirationTime=n),u=l.alternate,u!==null&&u.expirationTime<n&&(u.expirationTime=n),Eh(l.return,n),s.expirationTime<n&&(s.expirationTime=n);break}u=u.next}}else a=l.tag===10&&l.type===t.type?null:l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}Xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,i=t.pendingProps,r=i.children,lr(t,n),o=dt(o,i.unstable_observedBits),r=r(o),t.effectTag|=1,Xe(e,t,r,n),t.child;case 14:return o=t.type,i=gt(o,t.pendingProps),i=gt(o.type,i),Od(e,t,o,i,r,n);case 15:return Lh(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,Ke(r)?(e=!0,ni(t)):e=!1,lr(t,n),Ch(t,r,o),ms(t,r,o,n),bs(null,t,r,!0,e,n);case 19:return Ld(e,t,n)}throw Error(M(156,t.tag))};var Rs=null,Os=null;function ky(e){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);Rs=function(r){try{t.onCommitFiberRoot(n,r,void 0,(r.current.effectTag&64)===64)}catch{}},Os=function(r){try{t.onCommitFiberUnmount(n,r)}catch{}}}catch{}return!0}function Ey(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function $t(e,t,n,r){return new Ey(e,t,n,r)}function Gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ty(e){if(typeof e=="function")return Gu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pu)return 11;if(e===hu)return 14}return 2}function zn(e,t){var n=e.alternate;return n===null?(n=$t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=e.childExpirationTime,n.expirationTime=e.expirationTime,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{expirationTime:t.expirationTime,firstContext:t.firstContext,responders:t.responders},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function si(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Gu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case kn:return nn(n.children,o,i,t);case Yv:a=8,o|=7;break;case Sp:a=8,o|=1;break;case qo:return e=$t(12,n,t,o|8),e.elementType=qo,e.type=qo,e.expirationTime=i,e;case Jo:return e=$t(13,n,t,o),e.type=Jo,e.elementType=Jo,e.expirationTime=i,e;case Gl:return e=$t(19,n,t,o),e.elementType=Gl,e.expirationTime=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case kp:a=10;break e;case Ep:a=9;break e;case pu:a=11;break e;case hu:a=14;break e;case Tp:a=16,r=null;break e;case Cp:a=22;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=$t(a,n,t,o),t.elementType=e,t.type=r,t.expirationTime=i,t}function nn(e,t,n,r){return e=$t(7,e,r,t),e.expirationTime=n,e}function xl(e,t,n){return e=$t(6,e,null,t),e.expirationTime=n,e}function wl(e,t,n){return t=$t(4,e.children!==null?e.children:[],e.key,t),t.expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cy(e,t,n){this.tag=t,this.current=null,this.containerInfo=e,this.pingCache=this.pendingChildren=null,this.finishedExpirationTime=0,this.finishedWork=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=90,this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}function im(e,t){var n=e.firstSuspendedTime;return e=e.lastSuspendedTime,n!==0&&n>=t&&e<=t}function Pn(e,t){var n=e.firstSuspendedTime,r=e.lastSuspendedTime;n<t&&(e.firstSuspendedTime=t),(r>t||n===0)&&(e.lastSuspendedTime=t),t<=e.lastPingedTime&&(e.lastPingedTime=0),t<=e.lastExpiredTime&&(e.lastExpiredTime=0)}function am(e,t){t>e.firstPendingTime&&(e.firstPendingTime=t);var n=e.firstSuspendedTime;n!==0&&(t>=n?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:t>=e.lastSuspendedTime&&(e.lastSuspendedTime=t+1),t>e.nextKnownPendingLevel&&(e.nextKnownPendingLevel=t))}function Ds(e,t){var n=e.lastExpiredTime;(n===0||n>t)&&(e.lastExpiredTime=t)}function Mi(e,t,n,r){var o=t.current,i=Ot(),a=Gr.suspense;i=jn(i,o,a);e:if(n){n=n._reactInternalFiber;t:{if(Vn(n)!==n||n.tag!==1)throw Error(M(170));var l=n;do{switch(l.tag){case 3:l=l.stateNode.context;break t;case 1:if(Ke(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break t}}l=l.return}while(l!==null);throw Error(M(171))}if(n.tag===1){var s=n.type;if(Ke(s)){n=mh(n,s,l);break e}}n=l}else n=pn;return t.context===null?t.context=n:t.pendingContext=n,t=ln(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),sn(o,t),cn(o,i),i}function bl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hd(e,t){e=e.memoizedState,e!==null&&e.dehydrated!==null&&e.retryTime<t&&(e.retryTime=t)}function Ku(e,t){Hd(e,t),(e=e.alternate)&&Hd(e,t)}function qu(e,t,n){n=n!=null&&n.hydrate===!0;var r=new Cy(e,t,n),o=$t(3,null,null,t===2?7:t===1?3:0);r.current=o,o.stateNode=r,Iu(o),e[go]=r.current,n&&t!==0&&og(e,e.nodeType===9?e:e.ownerDocument),this._internalRoot=r}qu.prototype.render=function(e){Mi(e,this._internalRoot,null,null)};qu.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Mi(null,e,null,function(){t[go]=null})};function So(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $y(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new qu(e,0,t?{hydrate:!0}:void 0)}function sa(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i._internalRoot;if(typeof o=="function"){var l=o;o=function(){var u=bl(a);l.call(u)}}Mi(t,a,e,o)}else{if(i=n._reactRootContainer=$y(n,r),a=i._internalRoot,typeof o=="function"){var s=o;o=function(){var u=bl(a);s.call(u)}}Xh(function(){Mi(t,a,e,o)})}return bl(a)}function Py(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}Qp=function(e){if(e.tag===13){var t=oi(Ot(),150,100);cn(e,t),Ku(e,t)}};xu=function(e){e.tag===13&&(cn(e,3),Ku(e,3))};Gp=function(e){if(e.tag===13){var t=Ot();t=jn(t,e,null),cn(e,t),Ku(e,t)}};Ql=function(e,t,n){switch(t){case"input":if(ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Tu(r);if(!o)throw Error(M(90));Pp(r),ql(r,o)}}}break;case"textarea":Op(e,n);break;case"select":t=n.value,t!=null&&ir(e,!!n.multiple,t,!1)}};lu=Yh;wp=function(e,t,n,r,o){var i=re;re|=4;try{return hn(98,e.bind(null,t,n,r,o))}finally{re=i,re===Re&&Nt()}};su=function(){(re&(1|wt|Dt))===Re&&(vy(),kr())};bp=function(e,t){var n=re;re|=2;try{return e(t)}finally{re=n,re===Re&&Nt()}};function lm(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!So(t))throw Error(M(200));return Py(e,t,null,n)}var Ry={Events:[xo,Fn,Tu,gp,Vl,pr,function(e){gu(e,gg)},yp,xp,Zi,Xi,kr,{current:!1}]};(function(e){var t=e.findFiberByHostInstance;return ky(Ue({},e,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=zp(n),n===null?null:n.stateNode},findFiberByHostInstance:function(n){return t?t(n):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:yo,bundleType:0,version:"16.14.0",rendererPackageName:"react-dom"});pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ry;pt.createPortal=lm;pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternalFiber;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):Error(M(268,Object.keys(e)));return e=zp(t),e=e===null?null:e.stateNode,e};pt.flushSync=function(e,t){if((re&(wt|Dt))!==Re)throw Error(M(187));var n=re;re|=1;try{return hn(99,e.bind(null,t))}finally{re=n,Nt()}};pt.hydrate=function(e,t,n){if(!So(t))throw Error(M(200));return sa(null,e,t,!0,n)};pt.render=function(e,t,n){if(!So(t))throw Error(M(200));return sa(null,e,t,!1,n)};pt.unmountComponentAtNode=function(e){if(!So(e))throw Error(M(40));return e._reactRootContainer?(Xh(function(){sa(null,null,e,!1,function(){e._reactRootContainer=null,e[go]=null})}),!0):!1};pt.unstable_batchedUpdates=Yh;pt.unstable_createPortal=function(e,t){return lm(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};pt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!So(n))throw Error(M(200));if(e==null||e._reactInternalFiber===void 0)throw Error(M(38));return sa(e,t,n,!1,r)};pt.version="16.14.0";function sm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sm)}catch(e){console.error(e)}}sm(),dp.exports=pt;var um=dp.exports;const Oy=Fe(um);function Is(e,t){return Is=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Is(e,t)}function ft(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Is(e,t)}var cm={exports:{}},Dy="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Iy=Dy,Ny=Iy;function dm(){}function fm(){}fm.resetWarningCache=dm;var jy=function(){function e(r,o,i,a,l,s){if(s!==Ny){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:fm,resetWarningCache:dm};return n.PropTypes=n,n};cm.exports=jy();var Ly=cm.exports;const Et=Fe(Ly);function Ce(){return Ce=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ce.apply(this,arguments)}function Uo(e){return e.charAt(0)==="/"}function Al(e,t){for(var n=t,r=n+1,o=e.length;r<o;n+=1,r+=1)e[n]=e[r];e.pop()}function _y(e,t){t===void 0&&(t="");var n=e&&e.split("/")||[],r=t&&t.split("/")||[],o=e&&Uo(e),i=t&&Uo(t),a=o||i;if(e&&Uo(e)?r=n:n.length&&(r.pop(),r=r.concat(n)),!r.length)return"/";var l;if(r.length){var s=r[r.length-1];l=s==="."||s===".."||s===""}else l=!1;for(var u=0,d=r.length;d>=0;d--){var c=r[d];c==="."?Al(r,d):c===".."?(Al(r,d),u++):u&&(Al(r,d),u--)}if(!a)for(;u--;u)r.unshift("..");a&&r[0]!==""&&(!r[0]||!Uo(r[0]))&&r.unshift("");var v=r.join("/");return l&&v.substr(-1)!=="/"&&(v+="/"),v}var Fy="Invariant failed";function xn(e,t){throw new Error(Fy)}function Jr(e){return e.charAt(0)==="/"?e:"/"+e}function Wd(e){return e.charAt(0)==="/"?e.substr(1):e}function My(e,t){return e.toLowerCase().indexOf(t.toLowerCase())===0&&"/?#".indexOf(e.charAt(t.length))!==-1}function pm(e,t){return My(e,t)?e.substr(t.length):e}function hm(e){return e.charAt(e.length-1)==="/"?e.slice(0,-1):e}function By(e){var t=e||"/",n="",r="",o=t.indexOf("#");o!==-1&&(r=t.substr(o),t=t.substr(0,o));var i=t.indexOf("?");return i!==-1&&(n=t.substr(i),t=t.substr(0,i)),{pathname:t,search:n==="?"?"":n,hash:r==="#"?"":r}}function Qe(e){var t=e.pathname,n=e.search,r=e.hash,o=t||"/";return n&&n!=="?"&&(o+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(o+=r.charAt(0)==="#"?r:"#"+r),o}function Ze(e,t,n,r){var o;typeof e=="string"?(o=By(e),o.state=t):(o=Ce({},e),o.pathname===void 0&&(o.pathname=""),o.search?o.search.charAt(0)!=="?"&&(o.search="?"+o.search):o.search="",o.hash?o.hash.charAt(0)!=="#"&&(o.hash="#"+o.hash):o.hash="",t!==void 0&&o.state===void 0&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(i){throw i instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):i}return n&&(o.key=n),r?o.pathname?o.pathname.charAt(0)!=="/"&&(o.pathname=_y(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function Ju(){var e=null;function t(a){return e=a,function(){e===a&&(e=null)}}function n(a,l,s,u){if(e!=null){var d=typeof e=="function"?e(a,l):e;typeof d=="string"?typeof s=="function"?s(d,u):u(!0):u(d!==!1)}else u(!0)}var r=[];function o(a){var l=!0;function s(){l&&a.apply(void 0,arguments)}return r.push(s),function(){l=!1,r=r.filter(function(u){return u!==s})}}function i(){for(var a=arguments.length,l=new Array(a),s=0;s<a;s++)l[s]=arguments[s];r.forEach(function(u){return u.apply(void 0,l)})}return{setPrompt:t,confirmTransitionTo:n,appendListener:o,notifyListeners:i}}var mm=!!(typeof window<"u"&&window.document&&window.document.createElement);function vm(e,t){t(window.confirm(e))}function zy(){var e=window.navigator.userAgent;return(e.indexOf("Android 2.")!==-1||e.indexOf("Android 4.0")!==-1)&&e.indexOf("Mobile Safari")!==-1&&e.indexOf("Chrome")===-1&&e.indexOf("Windows Phone")===-1?!1:window.history&&"pushState"in window.history}function Uy(){return window.navigator.userAgent.indexOf("Trident")===-1}function Hy(){return window.navigator.userAgent.indexOf("Firefox")===-1}function Wy(e){return e.state===void 0&&navigator.userAgent.indexOf("CriOS")===-1}var Vd="popstate",Qd="hashchange";function Gd(){try{return window.history.state||{}}catch{return{}}}function Vy(e){e===void 0&&(e={}),mm||xn();var t=window.history,n=zy(),r=!Uy(),o=e,i=o.forceRefresh,a=i===void 0?!1:i,l=o.getUserConfirmation,s=l===void 0?vm:l,u=o.keyLength,d=u===void 0?6:u,c=e.basename?hm(Jr(e.basename)):"";function v(z){var B=z||{},Q=B.key,D=B.state,R=window.location,b=R.pathname,P=R.search,y=R.hash,F=b+P+y;return c&&(F=pm(F,c)),Ze(F,D,Q)}function A(){return Math.random().toString(36).substr(2,d)}var g=Ju();function w(z){Ce(U,z),U.length=t.length,g.notifyListeners(U.location,U.action)}function f(z){Wy(z)||x(v(z.state))}function p(){x(v(Gd()))}var m=!1;function x(z){if(m)m=!1,w();else{var B="POP";g.confirmTransitionTo(z,B,s,function(Q){Q?w({action:B,location:z}):k(z)})}}function k(z){var B=U.location,Q=C.indexOf(B.key);Q===-1&&(Q=0);var D=C.indexOf(z.key);D===-1&&(D=0);var R=Q-D;R&&(m=!0,q(R))}var T=v(Gd()),C=[T.key];function O(z){return c+Qe(z)}function _(z,B){var Q="PUSH",D=Ze(z,B,A(),U.location);g.confirmTransitionTo(D,Q,s,function(R){if(R){var b=O(D),P=D.key,y=D.state;if(n)if(t.pushState({key:P,state:y},null,b),a)window.location.href=b;else{var F=C.indexOf(U.location.key),I=C.slice(0,F+1);I.push(D.key),C=I,w({action:Q,location:D})}else window.location.href=b}})}function N(z,B){var Q="REPLACE",D=Ze(z,B,A(),U.location);g.confirmTransitionTo(D,Q,s,function(R){if(R){var b=O(D),P=D.key,y=D.state;if(n)if(t.replaceState({key:P,state:y},null,b),a)window.location.replace(b);else{var F=C.indexOf(U.location.key);F!==-1&&(C[F]=D.key),w({action:Q,location:D})}else window.location.replace(b)}})}function q(z){t.go(z)}function J(){q(-1)}function X(){q(1)}var ae=0;function Y(z){ae+=z,ae===1&&z===1?(window.addEventListener(Vd,f),r&&window.addEventListener(Qd,p)):ae===0&&(window.removeEventListener(Vd,f),r&&window.removeEventListener(Qd,p))}var V=!1;function se(z){z===void 0&&(z=!1);var B=g.setPrompt(z);return V||(Y(1),V=!0),function(){return V&&(V=!1,Y(-1)),B()}}function te(z){var B=g.appendListener(z);return Y(1),function(){Y(-1),B()}}var U={length:t.length,action:"POP",location:T,createHref:O,push:_,replace:N,go:q,goBack:J,goForward:X,block:se,listen:te};return U}var Kd="hashchange",Qy={hashbang:{encodePath:function(t){return t.charAt(0)==="!"?t:"!/"+Wd(t)},decodePath:function(t){return t.charAt(0)==="!"?t.substr(1):t}},noslash:{encodePath:Wd,decodePath:Jr},slash:{encodePath:Jr,decodePath:Jr}};function gm(e){var t=e.indexOf("#");return t===-1?e:e.slice(0,t)}function jr(){var e=window.location.href,t=e.indexOf("#");return t===-1?"":e.substring(t+1)}function Gy(e){window.location.hash=e}function Sl(e){window.location.replace(gm(window.location.href)+"#"+e)}function Ky(e){e===void 0&&(e={}),mm||xn();var t=window.history;Hy();var n=e,r=n.getUserConfirmation,o=r===void 0?vm:r,i=n.hashType,a=i===void 0?"slash":i,l=e.basename?hm(Jr(e.basename)):"",s=Qy[a],u=s.encodePath,d=s.decodePath;function c(){var B=d(jr());return l&&(B=pm(B,l)),Ze(B)}var v=Ju();function A(B){Ce(z,B),z.length=t.length,v.notifyListeners(z.location,z.action)}var g=!1,w=null;function f(B,Q){return B.pathname===Q.pathname&&B.search===Q.search&&B.hash===Q.hash}function p(){var B=jr(),Q=u(B);if(B!==Q)Sl(Q);else{var D=c(),R=z.location;if(!g&&f(R,D)||w===Qe(D))return;w=null,m(D)}}function m(B){if(g)g=!1,A();else{var Q="POP";v.confirmTransitionTo(B,Q,o,function(D){D?A({action:Q,location:B}):x(B)})}}function x(B){var Q=z.location,D=O.lastIndexOf(Qe(Q));D===-1&&(D=0);var R=O.lastIndexOf(Qe(B));R===-1&&(R=0);var b=D-R;b&&(g=!0,J(b))}var k=jr(),T=u(k);k!==T&&Sl(T);var C=c(),O=[Qe(C)];function _(B){var Q=document.querySelector("base"),D="";return Q&&Q.getAttribute("href")&&(D=gm(window.location.href)),D+"#"+u(l+Qe(B))}function N(B,Q){var D="PUSH",R=Ze(B,void 0,void 0,z.location);v.confirmTransitionTo(R,D,o,function(b){if(b){var P=Qe(R),y=u(l+P),F=jr()!==y;if(F){w=P,Gy(y);var I=O.lastIndexOf(Qe(z.location)),L=O.slice(0,I+1);L.push(P),O=L,A({action:D,location:R})}else A()}})}function q(B,Q){var D="REPLACE",R=Ze(B,void 0,void 0,z.location);v.confirmTransitionTo(R,D,o,function(b){if(b){var P=Qe(R),y=u(l+P),F=jr()!==y;F&&(w=P,Sl(y));var I=O.indexOf(Qe(z.location));I!==-1&&(O[I]=P),A({action:D,location:R})}})}function J(B){t.go(B)}function X(){J(-1)}function ae(){J(1)}var Y=0;function V(B){Y+=B,Y===1&&B===1?window.addEventListener(Kd,p):Y===0&&window.removeEventListener(Kd,p)}var se=!1;function te(B){B===void 0&&(B=!1);var Q=v.setPrompt(B);return se||(V(1),se=!0),function(){return se&&(se=!1,V(-1)),Q()}}function U(B){var Q=v.appendListener(B);return V(1),function(){V(-1),Q()}}var z={length:t.length,action:"POP",location:C,createHref:_,push:N,replace:q,go:J,goBack:X,goForward:ae,block:te,listen:U};return z}function qd(e,t,n){return Math.min(Math.max(e,t),n)}function qy(e){e===void 0&&(e={});var t=e,n=t.getUserConfirmation,r=t.initialEntries,o=r===void 0?["/"]:r,i=t.initialIndex,a=i===void 0?0:i,l=t.keyLength,s=l===void 0?6:l,u=Ju();function d(_){Ce(O,_),O.length=O.entries.length,u.notifyListeners(O.location,O.action)}function c(){return Math.random().toString(36).substr(2,s)}var v=qd(a,0,o.length-1),A=o.map(function(_){return typeof _=="string"?Ze(_,void 0,c()):Ze(_,void 0,_.key||c())}),g=Qe;function w(_,N){var q="PUSH",J=Ze(_,N,c(),O.location);u.confirmTransitionTo(J,q,n,function(X){if(X){var ae=O.index,Y=ae+1,V=O.entries.slice(0);V.length>Y?V.splice(Y,V.length-Y,J):V.push(J),d({action:q,location:J,index:Y,entries:V})}})}function f(_,N){var q="REPLACE",J=Ze(_,N,c(),O.location);u.confirmTransitionTo(J,q,n,function(X){X&&(O.entries[O.index]=J,d({action:q,location:J}))})}function p(_){var N=qd(O.index+_,0,O.entries.length-1),q="POP",J=O.entries[N];u.confirmTransitionTo(J,q,n,function(X){X?d({action:q,location:J,index:N}):d()})}function m(){p(-1)}function x(){p(1)}function k(_){var N=O.index+_;return N>=0&&N<O.entries.length}function T(_){return _===void 0&&(_=!1),u.setPrompt(_)}function C(_){return u.appendListener(_)}var O={length:A.length,action:"POP",location:A[v],index:v,entries:A,createHref:g,push:w,replace:f,go:p,goBack:m,goForward:x,canGo:k,block:T,listen:C};return O}var Er={exports:{}},Jy=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},Bi=Jy;Er.exports=wm;Er.exports.parse=Yu;Er.exports.compile=Xy;Er.exports.tokensToFunction=ym;Er.exports.tokensToRegExp=xm;var Yy=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function Yu(e,t){for(var n=[],r=0,o=0,i="",a=t&&t.delimiter||"/",l;(l=Yy.exec(e))!=null;){var s=l[0],u=l[1],d=l.index;if(i+=e.slice(o,d),o=d+s.length,u){i+=u[1];continue}var c=e[o],v=l[2],A=l[3],g=l[4],w=l[5],f=l[6],p=l[7];i&&(n.push(i),i="");var m=v!=null&&c!=null&&c!==v,x=f==="+"||f==="*",k=f==="?"||f==="*",T=l[2]||a,C=g||w;n.push({name:A||r++,prefix:v||"",delimiter:T,optional:k,repeat:x,partial:m,asterisk:!!p,pattern:C?t1(C):p?".*":"[^"+ui(T)+"]+?"})}return o<e.length&&(i+=e.substr(o)),i&&n.push(i),n}function Xy(e,t){return ym(Yu(e,t),t)}function Zy(e){return encodeURI(e).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function e1(e){return encodeURI(e).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function ym(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)typeof e[r]=="object"&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",Zu(t)));return function(o,i){for(var a="",l=o||{},s=i||{},u=s.pretty?Zy:encodeURIComponent,d=0;d<e.length;d++){var c=e[d];if(typeof c=="string"){a+=c;continue}var v=l[c.name],A;if(v==null)if(c.optional){c.partial&&(a+=c.prefix);continue}else throw new TypeError('Expected "'+c.name+'" to be defined');if(Bi(v)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(v)+"`");if(v.length===0){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var g=0;g<v.length;g++){if(A=u(v[g]),!n[d].test(A))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(A)+"`");a+=(g===0?c.prefix:c.delimiter)+A}continue}if(A=c.asterisk?e1(v):u(v),!n[d].test(A))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+A+'"');a+=c.prefix+A}return a}}function ui(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function t1(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function Xu(e,t){return e.keys=t,e}function Zu(e){return e&&e.sensitive?"":"i"}function n1(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return Xu(e,t)}function r1(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(wm(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",Zu(n));return Xu(i,t)}function o1(e,t,n){return xm(Yu(e,n),t,n)}function xm(e,t,n){Bi(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",a=0;a<e.length;a++){var l=e[a];if(typeof l=="string")i+=ui(l);else{var s=ui(l.prefix),u="(?:"+l.pattern+")";t.push(l),l.repeat&&(u+="(?:"+s+u+")*"),l.optional?l.partial?u=s+"("+u+")?":u="(?:"+s+"("+u+"))?":u=s+"("+u+")",i+=u}}var d=ui(n.delimiter||"/"),c=i.slice(-d.length)===d;return r||(i=(c?i.slice(0,-d.length):i)+"(?:"+d+"(?=$))?"),o?i+="$":i+=r&&c?"":"(?="+d+"|$)",Xu(new RegExp("^"+i,Zu(n)),t)}function wm(e,t,n){return Bi(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?n1(e,t):Bi(e)?r1(e,t,n):o1(e,t,n)}var i1=Er.exports;const a1=Fe(i1);var ve={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oe=typeof Symbol=="function"&&Symbol.for,ec=Oe?Symbol.for("react.element"):60103,tc=Oe?Symbol.for("react.portal"):60106,ua=Oe?Symbol.for("react.fragment"):60107,ca=Oe?Symbol.for("react.strict_mode"):60108,da=Oe?Symbol.for("react.profiler"):60114,fa=Oe?Symbol.for("react.provider"):60109,pa=Oe?Symbol.for("react.context"):60110,nc=Oe?Symbol.for("react.async_mode"):60111,ha=Oe?Symbol.for("react.concurrent_mode"):60111,ma=Oe?Symbol.for("react.forward_ref"):60112,va=Oe?Symbol.for("react.suspense"):60113,l1=Oe?Symbol.for("react.suspense_list"):60120,ga=Oe?Symbol.for("react.memo"):60115,ya=Oe?Symbol.for("react.lazy"):60116,s1=Oe?Symbol.for("react.block"):60121,u1=Oe?Symbol.for("react.fundamental"):60117,c1=Oe?Symbol.for("react.responder"):60118,d1=Oe?Symbol.for("react.scope"):60119;function rt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ec:switch(e=e.type,e){case nc:case ha:case ua:case da:case ca:case va:return e;default:switch(e=e&&e.$$typeof,e){case pa:case ma:case ya:case ga:case fa:return e;default:return t}}case tc:return t}}}function bm(e){return rt(e)===ha}ve.AsyncMode=nc;ve.ConcurrentMode=ha;ve.ContextConsumer=pa;ve.ContextProvider=fa;ve.Element=ec;ve.ForwardRef=ma;ve.Fragment=ua;ve.Lazy=ya;ve.Memo=ga;ve.Portal=tc;ve.Profiler=da;ve.StrictMode=ca;ve.Suspense=va;ve.isAsyncMode=function(e){return bm(e)||rt(e)===nc};ve.isConcurrentMode=bm;ve.isContextConsumer=function(e){return rt(e)===pa};ve.isContextProvider=function(e){return rt(e)===fa};ve.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ec};ve.isForwardRef=function(e){return rt(e)===ma};ve.isFragment=function(e){return rt(e)===ua};ve.isLazy=function(e){return rt(e)===ya};ve.isMemo=function(e){return rt(e)===ga};ve.isPortal=function(e){return rt(e)===tc};ve.isProfiler=function(e){return rt(e)===da};ve.isStrictMode=function(e){return rt(e)===ca};ve.isSuspense=function(e){return rt(e)===va};ve.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ua||e===ha||e===da||e===ca||e===va||e===l1||typeof e=="object"&&e!==null&&(e.$$typeof===ya||e.$$typeof===ga||e.$$typeof===fa||e.$$typeof===pa||e.$$typeof===ma||e.$$typeof===u1||e.$$typeof===c1||e.$$typeof===d1||e.$$typeof===s1)};ve.typeOf=rt;function wn(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var Am={exports:{}},pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var De=typeof Symbol=="function"&&Symbol.for,rc=De?Symbol.for("react.element"):60103,oc=De?Symbol.for("react.portal"):60106,xa=De?Symbol.for("react.fragment"):60107,wa=De?Symbol.for("react.strict_mode"):60108,ba=De?Symbol.for("react.profiler"):60114,Aa=De?Symbol.for("react.provider"):60109,Sa=De?Symbol.for("react.context"):60110,ic=De?Symbol.for("react.async_mode"):60111,ka=De?Symbol.for("react.concurrent_mode"):60111,Ea=De?Symbol.for("react.forward_ref"):60112,Ta=De?Symbol.for("react.suspense"):60113,f1=De?Symbol.for("react.suspense_list"):60120,Ca=De?Symbol.for("react.memo"):60115,$a=De?Symbol.for("react.lazy"):60116,p1=De?Symbol.for("react.block"):60121,h1=De?Symbol.for("react.fundamental"):60117,m1=De?Symbol.for("react.responder"):60118,v1=De?Symbol.for("react.scope"):60119;function ot(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case rc:switch(e=e.type,e){case ic:case ka:case xa:case ba:case wa:case Ta:return e;default:switch(e=e&&e.$$typeof,e){case Sa:case Ea:case $a:case Ca:case Aa:return e;default:return t}}case oc:return t}}}function Sm(e){return ot(e)===ka}pe.AsyncMode=ic;pe.ConcurrentMode=ka;pe.ContextConsumer=Sa;pe.ContextProvider=Aa;pe.Element=rc;pe.ForwardRef=Ea;pe.Fragment=xa;pe.Lazy=$a;pe.Memo=Ca;pe.Portal=oc;pe.Profiler=ba;pe.StrictMode=wa;pe.Suspense=Ta;pe.isAsyncMode=function(e){return Sm(e)||ot(e)===ic};pe.isConcurrentMode=Sm;pe.isContextConsumer=function(e){return ot(e)===Sa};pe.isContextProvider=function(e){return ot(e)===Aa};pe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===rc};pe.isForwardRef=function(e){return ot(e)===Ea};pe.isFragment=function(e){return ot(e)===xa};pe.isLazy=function(e){return ot(e)===$a};pe.isMemo=function(e){return ot(e)===Ca};pe.isPortal=function(e){return ot(e)===oc};pe.isProfiler=function(e){return ot(e)===ba};pe.isStrictMode=function(e){return ot(e)===wa};pe.isSuspense=function(e){return ot(e)===Ta};pe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===xa||e===ka||e===ba||e===wa||e===Ta||e===f1||typeof e=="object"&&e!==null&&(e.$$typeof===$a||e.$$typeof===Ca||e.$$typeof===Aa||e.$$typeof===Sa||e.$$typeof===Ea||e.$$typeof===h1||e.$$typeof===m1||e.$$typeof===v1||e.$$typeof===p1)};pe.typeOf=ot;Am.exports=pe;var g1=Am.exports,ac=g1,y1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},x1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},w1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},km={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lc={};lc[ac.ForwardRef]=w1;lc[ac.Memo]=km;function Jd(e){return ac.isMemo(e)?km:lc[e.$$typeof]||y1}var b1=Object.defineProperty,A1=Object.getOwnPropertyNames,Yd=Object.getOwnPropertySymbols,S1=Object.getOwnPropertyDescriptor,k1=Object.getPrototypeOf,Xd=Object.prototype;function Em(e,t,n){if(typeof t!="string"){if(Xd){var r=k1(t);r&&r!==Xd&&Em(e,r,n)}var o=A1(t);Yd&&(o=o.concat(Yd(t)));for(var i=Jd(e),a=Jd(t),l=0;l<o.length;++l){var s=o[l];if(!x1[s]&&!(n&&n[s])&&!(a&&a[s])&&!(i&&i[s])){var u=S1(t,s);try{b1(e,s,u)}catch{}}}}return e}var E1=Em;const zi=Fe(E1);var kl=1073741823,Zd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{};function T1(){var e="__global_unique_id__";return Zd[e]=(Zd[e]||0)+1}function C1(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function $1(e){var t=[];return{on:function(r){t.push(r)},off:function(r){t=t.filter(function(o){return o!==r})},get:function(){return e},set:function(r,o){e=r,t.forEach(function(i){return i(e,o)})}}}function P1(e){return Array.isArray(e)?e[0]:e}function R1(e,t){var n,r,o="__create-react-context-"+T1()+"__",i=function(l){ft(s,l);function s(){for(var d,c=arguments.length,v=new Array(c),A=0;A<c;A++)v[A]=arguments[A];return d=l.call.apply(l,[this].concat(v))||this,d.emitter=$1(d.props.value),d}var u=s.prototype;return u.getChildContext=function(){var c;return c={},c[o]=this.emitter,c},u.componentWillReceiveProps=function(c){if(this.props.value!==c.value){var v=this.props.value,A=c.value,g;C1(v,A)?g=0:(g=typeof t=="function"?t(v,A):kl,g|=0,g!==0&&this.emitter.set(c.value,g))}},u.render=function(){return this.props.children},s}(S.Component);i.childContextTypes=(n={},n[o]=Et.object.isRequired,n);var a=function(l){ft(s,l);function s(){for(var d,c=arguments.length,v=new Array(c),A=0;A<c;A++)v[A]=arguments[A];return d=l.call.apply(l,[this].concat(v))||this,d.observedBits=void 0,d.state={value:d.getValue()},d.onUpdate=function(g,w){var f=d.observedBits|0;f&w&&d.setState({value:d.getValue()})},d}var u=s.prototype;return u.componentWillReceiveProps=function(c){var v=c.observedBits;this.observedBits=v??kl},u.componentDidMount=function(){this.context[o]&&this.context[o].on(this.onUpdate);var c=this.props.observedBits;this.observedBits=c??kl},u.componentWillUnmount=function(){this.context[o]&&this.context[o].off(this.onUpdate)},u.getValue=function(){return this.context[o]?this.context[o].get():e},u.render=function(){return P1(this.props.children)(this.state.value)},s}(S.Component);return a.contextTypes=(r={},r[o]=Et.object,r),{Provider:i,Consumer:a}}var O1=S.createContext||R1,Tm=function(t){var n=O1();return n.displayName=t,n},D1=Tm("Router-History"),mn=Tm("Router"),Pa=function(e){ft(t,e),t.computeRootMatch=function(o){return{path:"/",url:"/",params:{},isExact:o==="/"}};function t(r){var o;return o=e.call(this,r)||this,o.state={location:r.history.location},o._isMounted=!1,o._pendingLocation=null,r.staticContext||(o.unlisten=r.history.listen(function(i){o._pendingLocation=i})),o}var n=t.prototype;return n.componentDidMount=function(){var o=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen(function(i){o._isMounted&&o.setState({location:i})})),this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},n.render=function(){return S.createElement(mn.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},S.createElement(D1.Provider,{children:this.props.children||null,value:this.props.history}))},t}(S.Component);S.Component;S.Component;var ef={},I1=1e4,tf=0;function N1(e,t){var n=""+t.end+t.strict+t.sensitive,r=ef[n]||(ef[n]={});if(r[e])return r[e];var o=[],i=a1(e,o,t),a={regexp:i,keys:o};return tf<I1&&(r[e]=a,tf++),a}function sc(e,t){t===void 0&&(t={}),(typeof t=="string"||Array.isArray(t))&&(t={path:t});var n=t,r=n.path,o=n.exact,i=o===void 0?!1:o,a=n.strict,l=a===void 0?!1:a,s=n.sensitive,u=s===void 0?!1:s,d=[].concat(r);return d.reduce(function(c,v){if(!v&&v!=="")return null;if(c)return c;var A=N1(v,{end:i,strict:l,sensitive:u}),g=A.regexp,w=A.keys,f=g.exec(e);if(!f)return null;var p=f[0],m=f.slice(1),x=e===p;return i&&!x?null:{path:v,url:v==="/"&&p===""?"/":p,isExact:x,params:w.reduce(function(k,T,C){return k[T.name]=m[C],k},{})}},null)}function j1(e){return S.Children.count(e)===0}var bn=function(e){ft(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.render=function(){var o=this;return S.createElement(mn.Consumer,null,function(i){i||xn();var a=o.props.location||i.location,l=o.props.computedMatch?o.props.computedMatch:o.props.path?sc(a.pathname,o.props):i.match,s=Ce({},i,{location:a,match:l}),u=o.props,d=u.children,c=u.component,v=u.render;return Array.isArray(d)&&j1(d)&&(d=null),S.createElement(mn.Provider,{value:s},s.match?d?typeof d=="function"?d(s):d:c?S.createElement(c,s):v?v(s):null:typeof d=="function"?d(s):null)})},t}(S.Component);function uc(e){return e.charAt(0)==="/"?e:"/"+e}function L1(e,t){return e?Ce({},t,{pathname:uc(e)+t.pathname}):t}function _1(e,t){if(!e)return t;var n=uc(e);return t.pathname.indexOf(n)!==0?t:Ce({},t,{pathname:t.pathname.substr(n.length)})}function nf(e){return typeof e=="string"?e:Qe(e)}function El(e){return function(){xn()}}function rf(){}S.Component;var of=function(e){ft(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.render=function(){var o=this;return S.createElement(mn.Consumer,null,function(i){i||xn();var a=o.props.location||i.location,l,s;return S.Children.forEach(o.props.children,function(u){if(s==null&&S.isValidElement(u)){l=u;var d=u.props.path||u.props.from;s=d?sc(a.pathname,Ce({},u.props,{path:d})):i.match}}),s?S.cloneElement(l,{location:a,computedMatch:s}):null})},t}(S.Component);function ko(e){var t="withRouter("+(e.displayName||e.name)+")",n=function(o){var i=o.wrappedComponentRef,a=wn(o,["wrappedComponentRef"]);return S.createElement(mn.Consumer,null,function(l){return l||xn(),S.createElement(e,Ce({},a,l,{ref:i}))})};return n.displayName=t,n.WrappedComponent=e,zi(n,e)}var F1=S.useContext;function Cm(){return F1(mn).location}var M1=function(e){ft(t,e);function t(){for(var r,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=e.call.apply(e,[this].concat(i))||this,r.history=Vy(r.props),r}var n=t.prototype;return n.render=function(){return S.createElement(Pa,{history:this.history,children:this.props.children})},t}(S.Component);S.Component;var Ns=function(t,n){return typeof t=="function"?t(n):t},js=function(t,n){return typeof t=="string"?Ze(t,null,null,n):t},cc=function(t){return t},gr=S.forwardRef;typeof gr>"u"&&(gr=cc);function B1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}var z1=gr(function(e,t){var n=e.innerRef,r=e.navigate,o=e.onClick,i=wn(e,["innerRef","navigate","onClick"]),a=i.target,l=Ce({},i,{onClick:function(u){try{o&&o(u)}catch(d){throw u.preventDefault(),d}!u.defaultPrevented&&u.button===0&&(!a||a==="_self")&&!B1(u)&&(u.preventDefault(),r())}});return cc!==gr?l.ref=t||n:l.ref=n,S.createElement("a",l)}),U1=gr(function(e,t){var n=e.component,r=n===void 0?z1:n,o=e.replace,i=e.to,a=e.innerRef,l=wn(e,["component","replace","to","innerRef"]);return S.createElement(mn.Consumer,null,function(s){s||xn();var u=s.history,d=js(Ns(i,s.location),s.location),c=d?u.createHref(d):"",v=Ce({},l,{href:c,navigate:function(){var g=Ns(i,s.location),w=Qe(s.location)===Qe(js(g)),f=o||w?u.replace:u.push;f(g)}});return cc!==gr?v.ref=t||a:v.innerRef=a,S.createElement(r,v)})}),$m=function(t){return t},Ui=S.forwardRef;typeof Ui>"u"&&(Ui=$m);function H1(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(function(r){return r}).join(" ")}Ui(function(e,t){var n=e["aria-current"],r=n===void 0?"page":n,o=e.activeClassName,i=o===void 0?"active":o,a=e.activeStyle,l=e.className,s=e.exact,u=e.isActive,d=e.location,c=e.sensitive,v=e.strict,A=e.style,g=e.to,w=e.innerRef,f=wn(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return S.createElement(mn.Consumer,null,function(p){p||xn();var m=d||p.location,x=js(Ns(g,m),m),k=x.pathname,T=k&&k.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),C=T?sc(m.pathname,{path:T,exact:s,sensitive:c,strict:v}):null,O=!!(u?u(C,m):C),_=typeof l=="function"?l(O):l,N=typeof A=="function"?A(O):A;O&&(_=H1(_,i),N=Ce({},N,a));var q=Ce({"aria-current":O&&r||null,className:_,style:N,to:x},f);return $m!==Ui?q.ref=t||w:q.innerRef=w,S.createElement(U1,q)})});var Pm=S.createContext(null),Rm=function(e){ft(t,e);function t(r){var o;o=e.call(this,r)||this;var i=r.store;return o.state={storeState:i.getState(),store:i},o}var n=t.prototype;return n.componentDidMount=function(){this._isMounted=!0,this.subscribe()},n.componentWillUnmount=function(){this.unsubscribe&&this.unsubscribe(),this._isMounted=!1},n.componentDidUpdate=function(o){this.props.store!==o.store&&(this.unsubscribe&&this.unsubscribe(),this.subscribe())},n.subscribe=function(){var o=this,i=this.props.store;this.unsubscribe=i.subscribe(function(){var l=i.getState();o._isMounted&&o.setState(function(s){return s.storeState===l?null:{storeState:l}})});var a=i.getState();a!==this.state.storeState&&this.setState({storeState:a})},n.render=function(){var o=this.props.context||Pm;return S.createElement(o.Provider,{value:this.state},this.props.children)},t}(E.Component);Rm.propTypes={store:Et.shape({subscribe:Et.func.isRequired,dispatch:Et.func.isRequired,getState:Et.func.isRequired}),context:Et.object,children:Et.any};function W1(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var V1=function(e,t,n,r,o,i,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,a,l],d=0;s=new Error(t.replace(/%s/g,function(){return u[d++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}},Q1=V1;const Lr=Fe(Q1);var Om={exports:{}},he={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ie=typeof Symbol=="function"&&Symbol.for,dc=Ie?Symbol.for("react.element"):60103,fc=Ie?Symbol.for("react.portal"):60106,Ra=Ie?Symbol.for("react.fragment"):60107,Oa=Ie?Symbol.for("react.strict_mode"):60108,Da=Ie?Symbol.for("react.profiler"):60114,Ia=Ie?Symbol.for("react.provider"):60109,Na=Ie?Symbol.for("react.context"):60110,pc=Ie?Symbol.for("react.async_mode"):60111,ja=Ie?Symbol.for("react.concurrent_mode"):60111,La=Ie?Symbol.for("react.forward_ref"):60112,_a=Ie?Symbol.for("react.suspense"):60113,G1=Ie?Symbol.for("react.suspense_list"):60120,Fa=Ie?Symbol.for("react.memo"):60115,Ma=Ie?Symbol.for("react.lazy"):60116,K1=Ie?Symbol.for("react.block"):60121,q1=Ie?Symbol.for("react.fundamental"):60117,J1=Ie?Symbol.for("react.responder"):60118,Y1=Ie?Symbol.for("react.scope"):60119;function it(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case dc:switch(e=e.type,e){case pc:case ja:case Ra:case Da:case Oa:case _a:return e;default:switch(e=e&&e.$$typeof,e){case Na:case La:case Ma:case Fa:case Ia:return e;default:return t}}case fc:return t}}}function Dm(e){return it(e)===ja}he.AsyncMode=pc;he.ConcurrentMode=ja;he.ContextConsumer=Na;he.ContextProvider=Ia;he.Element=dc;he.ForwardRef=La;he.Fragment=Ra;he.Lazy=Ma;he.Memo=Fa;he.Portal=fc;he.Profiler=Da;he.StrictMode=Oa;he.Suspense=_a;he.isAsyncMode=function(e){return Dm(e)||it(e)===pc};he.isConcurrentMode=Dm;he.isContextConsumer=function(e){return it(e)===Na};he.isContextProvider=function(e){return it(e)===Ia};he.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===dc};he.isForwardRef=function(e){return it(e)===La};he.isFragment=function(e){return it(e)===Ra};he.isLazy=function(e){return it(e)===Ma};he.isMemo=function(e){return it(e)===Fa};he.isPortal=function(e){return it(e)===fc};he.isProfiler=function(e){return it(e)===Da};he.isStrictMode=function(e){return it(e)===Oa};he.isSuspense=function(e){return it(e)===_a};he.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ra||e===ja||e===Da||e===Oa||e===_a||e===G1||typeof e=="object"&&e!==null&&(e.$$typeof===Ma||e.$$typeof===Fa||e.$$typeof===Ia||e.$$typeof===Na||e.$$typeof===La||e.$$typeof===q1||e.$$typeof===J1||e.$$typeof===Y1||e.$$typeof===K1)};he.typeOf=it;Om.exports=he;var X1=Om.exports;function Z1(e,t){t===void 0&&(t={});var n=t,r=n.getDisplayName,o=r===void 0?function(C){return"ConnectAdvanced("+C+")"}:r,i=n.methodName,a=i===void 0?"connectAdvanced":i,l=n.renderCountProp,s=l===void 0?void 0:l,u=n.shouldHandleStateChanges,d=u===void 0?!0:u,c=n.storeKey,v=c===void 0?"store":c,A=n.withRef,g=A===void 0?!1:A,w=n.forwardRef,f=w===void 0?!1:w,p=n.context,m=p===void 0?Pm:p,x=wn(n,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]);Lr(s===void 0,"renderCountProp is removed. render counting is built into the latest React dev tools profiling extension"),Lr(!g,"withRef is removed. To access the wrapped instance, use a ref on the connected component");var k="To use a custom Redux store for specific components,  create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like:  <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect";Lr(v==="store","storeKey has been removed and does not do anything. "+k);var T=m;return function(O){var _=O.displayName||O.name||"Component",N=o(_),q=Ce({},x,{getDisplayName:o,methodName:a,renderCountProp:s,shouldHandleStateChanges:d,storeKey:v,displayName:N,wrappedComponentName:_,WrappedComponent:O}),J=x.pure,X=E.Component;J&&(X=E.PureComponent);function ae(){var te,U,z,B,Q,D;return function(b,P,y,F){if(J&&te===P&&U===b)return z;(y!==B||Q!==F)&&(B=y,Q=F,D=e(y.dispatch,F)),te=P,U=b;var I=D(b,P);return z=I,z}}function Y(){var te,U,z,B;return function(D,R,b){return(R!==te||b!==U||B!==D)&&(te=R,U=b,B=D,z=S.createElement(D,Ce({},R,{ref:b}))),z}}var V=function(te){ft(U,te);function U(B){var Q;return Q=te.call(this,B)||this,Lr(f?!B.wrapperProps[v]:!B[v],"Passing redux store in props has been removed and does not do anything. "+k),Q.selectDerivedProps=ae(),Q.selectChildElement=Y(),Q.indirectRenderWrappedComponent=Q.indirectRenderWrappedComponent.bind(W1(Q)),Q}var z=U.prototype;return z.indirectRenderWrappedComponent=function(Q){return this.renderWrappedComponent(Q)},z.renderWrappedComponent=function(Q){Lr(Q,'Could not find "store" in the context of '+('"'+N+'". Either wrap the root component in a <Provider>, ')+"or pass a custom React context provider to <Provider> and the corresponding "+("React context consumer to "+N+" in connect options."));var D=Q.storeState,R=Q.store,b=this.props,P;f&&(b=this.props.wrapperProps,P=this.props.forwardedRef);var y=this.selectDerivedProps(D,b,R,q);return this.selectChildElement(O,y,P)},z.render=function(){var Q=this.props.context&&this.props.context.Consumer&&X1.isContextConsumer(S.createElement(this.props.context.Consumer,null))?this.props.context:T;return S.createElement(Q.Consumer,null,this.indirectRenderWrappedComponent)},U}(X);if(V.WrappedComponent=O,V.displayName=N,f){var se=S.forwardRef(function(U,z){return S.createElement(V,{wrapperProps:U,forwardedRef:z})});return se.displayName=N,se.WrappedComponent=O,zi(se,O)}return zi(V,O)}}var ex=Object.prototype.hasOwnProperty;function af(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function Tl(e,t){if(af(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!ex.call(t,n[o])||!af(e[n[o]],t[n[o]]))return!1;return!0}function so(e){"@babel/helpers - typeof";return so=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},so(e)}function tx(e,t){if(so(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(so(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function nx(e){var t=tx(e,"string");return so(t)=="symbol"?t:t+""}function rx(e,t,n){return t=nx(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function sf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lf(Object(n),!0).forEach(function(r){rx(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ne(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var uf=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Cl=function(){return Math.random().toString(36).substring(7).split("").join(".")},Hi={INIT:"@@redux/INIT"+Cl(),REPLACE:"@@redux/REPLACE"+Cl(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Cl()}};function ox(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Im(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ne(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ne(1));return n(Im)(e,t)}if(typeof e!="function")throw new Error(Ne(2));var o=e,i=t,a=[],l=a,s=!1;function u(){l===a&&(l=a.slice())}function d(){if(s)throw new Error(Ne(3));return i}function c(w){if(typeof w!="function")throw new Error(Ne(4));if(s)throw new Error(Ne(5));var f=!0;return u(),l.push(w),function(){if(f){if(s)throw new Error(Ne(6));f=!1,u();var m=l.indexOf(w);l.splice(m,1),a=null}}}function v(w){if(!ox(w))throw new Error(Ne(7));if(typeof w.type>"u")throw new Error(Ne(8));if(s)throw new Error(Ne(9));try{s=!0,i=o(i,w)}finally{s=!1}for(var f=a=l,p=0;p<f.length;p++){var m=f[p];m()}return w}function A(w){if(typeof w!="function")throw new Error(Ne(10));o=w,v({type:Hi.REPLACE})}function g(){var w,f=c;return w={subscribe:function(m){if(typeof m!="object"||m===null)throw new Error(Ne(11));function x(){m.next&&m.next(d())}x();var k=f(x);return{unsubscribe:k}}},w[uf]=function(){return this},w}return v({type:Hi.INIT}),r={dispatch:v,subscribe:c,getState:d,replaceReducer:A},r[uf]=g,r}var ix=Im;function ax(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Hi.INIT});if(typeof r>"u")throw new Error(Ne(12));if(typeof n(void 0,{type:Hi.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ne(13))})}function lx(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];typeof e[o]=="function"&&(n[o]=e[o])}var i=Object.keys(n),a;try{ax(n)}catch(l){a=l}return function(s,u){if(s===void 0&&(s={}),a)throw a;for(var d=!1,c={},v=0;v<i.length;v++){var A=i[v],g=n[A],w=s[A],f=g(w,u);if(typeof f>"u")throw u&&u.type,new Error(Ne(14));c[A]=f,d=d||f!==w}return d=d||i.length!==Object.keys(s).length,d?c:s}}function cf(e,t){return function(){return t(e.apply(this,arguments))}}function sx(e,t){if(typeof e=="function")return cf(e,t);if(typeof e!="object"||e===null)throw new Error(Ne(16));var n={};for(var r in e){var o=e[r];typeof o=="function"&&(n[r]=cf(o,t))}return n}function ux(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,o){return function(){return r(o.apply(void 0,arguments))}})}function cx(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var o=r.apply(void 0,arguments),i=function(){throw new Error(Ne(15))},a={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},l=t.map(function(s){return s(a)});return i=ux.apply(void 0,l)(o.dispatch),sf(sf({},o),{},{dispatch:i})}}}function hc(e){return function(n,r){var o=e(n,r);function i(){return o}return i.dependsOnOwnProps=!1,i}}function df(e){return e.dependsOnOwnProps!==null&&e.dependsOnOwnProps!==void 0?!!e.dependsOnOwnProps:e.length!==1}function Nm(e,t){return function(r,o){o.displayName;var i=function(l,s){return i.dependsOnOwnProps?i.mapToProps(l,s):i.mapToProps(l)};return i.dependsOnOwnProps=!0,i.mapToProps=function(l,s){i.mapToProps=e,i.dependsOnOwnProps=df(e);var u=i(l,s);return typeof u=="function"&&(i.mapToProps=u,i.dependsOnOwnProps=df(u),u=i(l,s)),u},i}}function dx(e){return typeof e=="function"?Nm(e):void 0}function fx(e){return e?void 0:hc(function(t){return{dispatch:t}})}function px(e){return e&&typeof e=="object"?hc(function(t){return sx(e,t)}):void 0}const hx=[dx,fx,px];function mx(e){return typeof e=="function"?Nm(e):void 0}function vx(e){return e?void 0:hc(function(){return{}})}const gx=[mx,vx];function yx(e,t,n){return Ce({},n,e,t)}function xx(e){return function(n,r){r.displayName;var o=r.pure,i=r.areMergedPropsEqual,a=!1,l;return function(u,d,c){var v=e(u,d,c);return a?(!o||!i(v,l))&&(l=v):(a=!0,l=v),l}}}function wx(e){return typeof e=="function"?xx(e):void 0}function bx(e){return e?void 0:function(){return yx}}const Ax=[wx,bx];function Sx(e,t,n,r){return function(i,a){return n(e(i,a),t(r,a),a)}}function kx(e,t,n,r,o){var i=o.areStatesEqual,a=o.areOwnPropsEqual,l=o.areStatePropsEqual,s=!1,u,d,c,v,A;function g(x,k){return u=x,d=k,c=e(u,d),v=t(r,d),A=n(c,v,d),s=!0,A}function w(){return c=e(u,d),t.dependsOnOwnProps&&(v=t(r,d)),A=n(c,v,d),A}function f(){return e.dependsOnOwnProps&&(c=e(u,d)),t.dependsOnOwnProps&&(v=t(r,d)),A=n(c,v,d),A}function p(){var x=e(u,d),k=!l(x,c);return c=x,k&&(A=n(c,v,d)),A}function m(x,k){var T=!a(k,d),C=!i(x,u);return u=x,d=k,T&&C?w():T?f():C?p():A}return function(k,T){return s?m(k,T):g(k,T)}}function Ex(e,t){var n=t.initMapStateToProps,r=t.initMapDispatchToProps,o=t.initMergeProps,i=wn(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),a=n(e,i),l=r(e,i),s=o(e,i),u=i.pure?kx:Sx;return u(a,l,s,e,i)}function $l(e,t,n){for(var r=t.length-1;r>=0;r--){var o=t[r](e);if(o)return o}return function(i,a){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+a.wrappedComponentName+".")}}function Tx(e,t){return e===t}function Cx(e){var t={},n=t.connectHOC,r=n===void 0?Z1:n,o=t.mapStateToPropsFactories,i=o===void 0?gx:o,a=t.mapDispatchToPropsFactories,l=a===void 0?hx:a,s=t.mergePropsFactories,u=s===void 0?Ax:s,d=t.selectorFactory,c=d===void 0?Ex:d;return function(A,g,w,f){f===void 0&&(f={});var p=f,m=p.pure,x=m===void 0?!0:m,k=p.areStatesEqual,T=k===void 0?Tx:k,C=p.areOwnPropsEqual,O=C===void 0?Tl:C,_=p.areStatePropsEqual,N=_===void 0?Tl:_,q=p.areMergedPropsEqual,J=q===void 0?Tl:q,X=wn(p,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),ae=$l(A,i,"mapStateToProps"),Y=$l(g,l,"mapDispatchToProps"),V=$l(w,u,"mergeProps");return r(c,Ce({methodName:"connect",getDisplayName:function(te){return"Connect("+te+")"},shouldHandleStateChanges:!!A,initMapStateToProps:ae,initMapDispatchToProps:Y,initMergeProps:V,pure:x,areStatesEqual:T,areOwnPropsEqual:O,areStatePropsEqual:N,areMergedPropsEqual:J},X))}}const Ba=Cx();var jm={exports:{}},me={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mc=Symbol.for("react.element"),vc=Symbol.for("react.portal"),za=Symbol.for("react.fragment"),Ua=Symbol.for("react.strict_mode"),Ha=Symbol.for("react.profiler"),Wa=Symbol.for("react.provider"),Va=Symbol.for("react.context"),$x=Symbol.for("react.server_context"),Qa=Symbol.for("react.forward_ref"),Ga=Symbol.for("react.suspense"),Ka=Symbol.for("react.suspense_list"),qa=Symbol.for("react.memo"),Ja=Symbol.for("react.lazy"),Px=Symbol.for("react.offscreen"),Lm;Lm=Symbol.for("react.module.reference");function ht(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case mc:switch(e=e.type,e){case za:case Ha:case Ua:case Ga:case Ka:return e;default:switch(e=e&&e.$$typeof,e){case $x:case Va:case Qa:case Ja:case qa:case Wa:return e;default:return t}}case vc:return t}}}me.ContextConsumer=Va;me.ContextProvider=Wa;me.Element=mc;me.ForwardRef=Qa;me.Fragment=za;me.Lazy=Ja;me.Memo=qa;me.Portal=vc;me.Profiler=Ha;me.StrictMode=Ua;me.Suspense=Ga;me.SuspenseList=Ka;me.isAsyncMode=function(){return!1};me.isConcurrentMode=function(){return!1};me.isContextConsumer=function(e){return ht(e)===Va};me.isContextProvider=function(e){return ht(e)===Wa};me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===mc};me.isForwardRef=function(e){return ht(e)===Qa};me.isFragment=function(e){return ht(e)===za};me.isLazy=function(e){return ht(e)===Ja};me.isMemo=function(e){return ht(e)===qa};me.isPortal=function(e){return ht(e)===vc};me.isProfiler=function(e){return ht(e)===Ha};me.isStrictMode=function(e){return ht(e)===Ua};me.isSuspense=function(e){return ht(e)===Ga};me.isSuspenseList=function(e){return ht(e)===Ka};me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===za||e===Ha||e===Ua||e===Ga||e===Ka||e===Px||typeof e=="object"&&e!==null&&(e.$$typeof===Ja||e.$$typeof===qa||e.$$typeof===Wa||e.$$typeof===Va||e.$$typeof===Qa||e.$$typeof===Lm||e.getModuleId!==void 0)};me.typeOf=ht;jm.exports=me;var _m=jm.exports;function Rx(e){function t(D,R,b,P,y){for(var F=0,I=0,L=0,H=0,K,G,oe=0,ce=0,ee,de=ee=K=0,le=0,ge=0,We=0,Se=0,Kt=b.length,mt=Kt-1,Ve,ne="",ke="",ol="",il="",qt;le<Kt;){if(G=b.charCodeAt(le),le===mt&&I+H+L+F!==0&&(I!==0&&(G=I===47?10:47),H=L=F=0,Kt++,mt++),I+H+L+F===0){if(le===mt&&(0<ge&&(ne=ne.replace(v,"")),0<ne.trim().length)){switch(G){case 32:case 9:case 59:case 13:case 10:break;default:ne+=b.charAt(le)}G=59}switch(G){case 123:for(ne=ne.trim(),K=ne.charCodeAt(0),ee=1,Se=++le;le<Kt;){switch(G=b.charCodeAt(le)){case 123:ee++;break;case 125:ee--;break;case 47:switch(G=b.charCodeAt(le+1)){case 42:case 47:e:{for(de=le+1;de<mt;++de)switch(b.charCodeAt(de)){case 47:if(G===42&&b.charCodeAt(de-1)===42&&le+2!==de){le=de+1;break e}break;case 10:if(G===47){le=de+1;break e}}le=de}}break;case 91:G++;case 40:G++;case 34:case 39:for(;le++<mt&&b.charCodeAt(le)!==G;);}if(ee===0)break;le++}switch(ee=b.substring(Se,le),K===0&&(K=(ne=ne.replace(c,"").trim()).charCodeAt(0)),K){case 64:switch(0<ge&&(ne=ne.replace(v,"")),G=ne.charCodeAt(1),G){case 100:case 109:case 115:case 45:ge=R;break;default:ge=se}if(ee=t(R,ge,ee,G,y+1),Se=ee.length,0<U&&(ge=n(se,ne,We),qt=l(3,ee,ge,R,ae,X,Se,G,y,P),ne=ge.join(""),qt!==void 0&&(Se=(ee=qt.trim()).length)===0&&(G=0,ee="")),0<Se)switch(G){case 115:ne=ne.replace(C,a);case 100:case 109:case 45:ee=ne+"{"+ee+"}";break;case 107:ne=ne.replace(m,"$1 $2"),ee=ne+"{"+ee+"}",ee=V===1||V===2&&i("@"+ee,3)?"@-webkit-"+ee+"@"+ee:"@"+ee;break;default:ee=ne+ee,P===112&&(ee=(ke+=ee,""))}else ee="";break;default:ee=t(R,n(R,ne,We),ee,P,y+1)}ol+=ee,ee=We=ge=de=K=0,ne="",G=b.charCodeAt(++le);break;case 125:case 59:if(ne=(0<ge?ne.replace(v,""):ne).trim(),1<(Se=ne.length))switch(de===0&&(K=ne.charCodeAt(0),K===45||96<K&&123>K)&&(Se=(ne=ne.replace(" ",":")).length),0<U&&(qt=l(1,ne,R,D,ae,X,ke.length,P,y,P))!==void 0&&(Se=(ne=qt.trim()).length)===0&&(ne="\0\0"),K=ne.charCodeAt(0),G=ne.charCodeAt(1),K){case 0:break;case 64:if(G===105||G===99){il+=ne+b.charAt(le);break}default:ne.charCodeAt(Se-1)!==58&&(ke+=o(ne,K,G,ne.charCodeAt(2)))}We=ge=de=K=0,ne="",G=b.charCodeAt(++le)}}switch(G){case 13:case 10:I===47?I=0:1+K===0&&P!==107&&0<ne.length&&(ge=1,ne+="\0"),0<U*B&&l(0,ne,R,D,ae,X,ke.length,P,y,P),X=1,ae++;break;case 59:case 125:if(I+H+L+F===0){X++;break}default:switch(X++,Ve=b.charAt(le),G){case 9:case 32:if(H+F+I===0)switch(oe){case 44:case 58:case 9:case 32:Ve="";break;default:G!==32&&(Ve=" ")}break;case 0:Ve="\\0";break;case 12:Ve="\\f";break;case 11:Ve="\\v";break;case 38:H+I+F===0&&(ge=We=1,Ve="\f"+Ve);break;case 108:if(H+I+F+Y===0&&0<de)switch(le-de){case 2:oe===112&&b.charCodeAt(le-3)===58&&(Y=oe);case 8:ce===111&&(Y=ce)}break;case 58:H+I+F===0&&(de=le);break;case 44:I+L+H+F===0&&(ge=1,Ve+="\r");break;case 34:case 39:I===0&&(H=H===G?0:H===0?G:H);break;case 91:H+I+L===0&&F++;break;case 93:H+I+L===0&&F--;break;case 41:H+I+F===0&&L--;break;case 40:if(H+I+F===0){if(K===0)switch(2*oe+3*ce){case 533:break;default:K=1}L++}break;case 64:I+L+H+F+de+ee===0&&(ee=1);break;case 42:case 47:if(!(0<H+F+L))switch(I){case 0:switch(2*G+3*b.charCodeAt(le+1)){case 235:I=47;break;case 220:Se=le,I=42}break;case 42:G===47&&oe===42&&Se+2!==le&&(b.charCodeAt(Se+2)===33&&(ke+=b.substring(Se,le+1)),Ve="",I=0)}}I===0&&(ne+=Ve)}ce=oe,oe=G,le++}if(Se=ke.length,0<Se){if(ge=R,0<U&&(qt=l(2,ke,ge,D,ae,X,Se,P,y,P),qt!==void 0&&(ke=qt).length===0))return il+ke+ol;if(ke=ge.join(",")+"{"+ke+"}",V*Y!==0){switch(V!==2||i(ke,2)||(Y=0),Y){case 111:ke=ke.replace(k,":-moz-$1")+ke;break;case 112:ke=ke.replace(x,"::-webkit-input-$1")+ke.replace(x,"::-moz-$1")+ke.replace(x,":-ms-input-$1")+ke}Y=0}}return il+ke+ol}function n(D,R,b){var P=R.trim().split(f);R=P;var y=P.length,F=D.length;switch(F){case 0:case 1:var I=0;for(D=F===0?"":D[0]+" ";I<y;++I)R[I]=r(D,R[I],b).trim();break;default:var L=I=0;for(R=[];I<y;++I)for(var H=0;H<F;++H)R[L++]=r(D[H]+" ",P[I],b).trim()}return R}function r(D,R,b){var P=R.charCodeAt(0);switch(33>P&&(P=(R=R.trim()).charCodeAt(0)),P){case 38:return R.replace(p,"$1"+D.trim());case 58:return D.trim()+R.replace(p,"$1"+D.trim());default:if(0<1*b&&0<R.indexOf("\f"))return R.replace(p,(D.charCodeAt(0)===58?"":"$1")+D.trim())}return D+R}function o(D,R,b,P){var y=D+";",F=2*R+3*b+4*P;if(F===944){D=y.indexOf(":",9)+1;var I=y.substring(D,y.length-1).trim();return I=y.substring(0,D).trim()+I+";",V===1||V===2&&i(I,1)?"-webkit-"+I+I:I}if(V===0||V===2&&!i(y,1))return y;switch(F){case 1015:return y.charCodeAt(10)===97?"-webkit-"+y+y:y;case 951:return y.charCodeAt(3)===116?"-webkit-"+y+y:y;case 963:return y.charCodeAt(5)===110?"-webkit-"+y+y:y;case 1009:if(y.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+y+y;case 978:return"-webkit-"+y+"-moz-"+y+y;case 1019:case 983:return"-webkit-"+y+"-moz-"+y+"-ms-"+y+y;case 883:if(y.charCodeAt(8)===45)return"-webkit-"+y+y;if(0<y.indexOf("image-set(",11))return y.replace(J,"$1-webkit-$2")+y;break;case 932:if(y.charCodeAt(4)===45)switch(y.charCodeAt(5)){case 103:return"-webkit-box-"+y.replace("-grow","")+"-webkit-"+y+"-ms-"+y.replace("grow","positive")+y;case 115:return"-webkit-"+y+"-ms-"+y.replace("shrink","negative")+y;case 98:return"-webkit-"+y+"-ms-"+y.replace("basis","preferred-size")+y}return"-webkit-"+y+"-ms-"+y+y;case 964:return"-webkit-"+y+"-ms-flex-"+y+y;case 1023:if(y.charCodeAt(8)!==99)break;return I=y.substring(y.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+I+"-webkit-"+y+"-ms-flex-pack"+I+y;case 1005:return g.test(y)?y.replace(A,":-webkit-")+y.replace(A,":-moz-")+y:y;case 1e3:switch(I=y.substring(13).trim(),R=I.indexOf("-")+1,I.charCodeAt(0)+I.charCodeAt(R)){case 226:I=y.replace(T,"tb");break;case 232:I=y.replace(T,"tb-rl");break;case 220:I=y.replace(T,"lr");break;default:return y}return"-webkit-"+y+"-ms-"+I+y;case 1017:if(y.indexOf("sticky",9)===-1)break;case 975:switch(R=(y=D).length-10,I=(y.charCodeAt(R)===33?y.substring(0,R):y).substring(D.indexOf(":",7)+1).trim(),F=I.charCodeAt(0)+(I.charCodeAt(7)|0)){case 203:if(111>I.charCodeAt(8))break;case 115:y=y.replace(I,"-webkit-"+I)+";"+y;break;case 207:case 102:y=y.replace(I,"-webkit-"+(102<F?"inline-":"")+"box")+";"+y.replace(I,"-webkit-"+I)+";"+y.replace(I,"-ms-"+I+"box")+";"+y}return y+";";case 938:if(y.charCodeAt(5)===45)switch(y.charCodeAt(6)){case 105:return I=y.replace("-items",""),"-webkit-"+y+"-webkit-box-"+I+"-ms-flex-"+I+y;case 115:return"-webkit-"+y+"-ms-flex-item-"+y.replace(_,"")+y;default:return"-webkit-"+y+"-ms-flex-line-pack"+y.replace("align-content","").replace(_,"")+y}break;case 973:case 989:if(y.charCodeAt(3)!==45||y.charCodeAt(4)===122)break;case 931:case 953:if(q.test(D)===!0)return(I=D.substring(D.indexOf(":")+1)).charCodeAt(0)===115?o(D.replace("stretch","fill-available"),R,b,P).replace(":fill-available",":stretch"):y.replace(I,"-webkit-"+I)+y.replace(I,"-moz-"+I.replace("fill-",""))+y;break;case 962:if(y="-webkit-"+y+(y.charCodeAt(5)===102?"-ms-"+y:"")+y,b+P===211&&y.charCodeAt(13)===105&&0<y.indexOf("transform",10))return y.substring(0,y.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+y}return y}function i(D,R){var b=D.indexOf(R===1?":":"{"),P=D.substring(0,R!==3?b:10);return b=D.substring(b+1,D.length-1),z(R!==2?P:P.replace(N,"$1"),b,R)}function a(D,R){var b=o(R,R.charCodeAt(0),R.charCodeAt(1),R.charCodeAt(2));return b!==R+";"?b.replace(O," or ($1)").substring(4):"("+R+")"}function l(D,R,b,P,y,F,I,L,H,K){for(var G=0,oe=R,ce;G<U;++G)switch(ce=te[G].call(d,D,oe,b,P,y,F,I,L,H,K)){case void 0:case!1:case!0:case null:break;default:oe=ce}if(oe!==R)return oe}function s(D){switch(D){case void 0:case null:U=te.length=0;break;default:if(typeof D=="function")te[U++]=D;else if(typeof D=="object")for(var R=0,b=D.length;R<b;++R)s(D[R]);else B=!!D|0}return s}function u(D){return D=D.prefix,D!==void 0&&(z=null,D?typeof D!="function"?V=1:(V=2,z=D):V=0),u}function d(D,R){var b=D;if(33>b.charCodeAt(0)&&(b=b.trim()),Q=b,b=[Q],0<U){var P=l(-1,R,b,b,ae,X,0,0,0,0);P!==void 0&&typeof P=="string"&&(R=P)}var y=t(se,b,R,0,0);return 0<U&&(P=l(-2,y,b,b,ae,X,y.length,0,0,0),P!==void 0&&(y=P)),Q="",Y=0,X=ae=1,y}var c=/^\0+/g,v=/[\0\r\f]/g,A=/: */g,g=/zoo|gra/,w=/([,: ])(transform)/g,f=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,m=/@(k\w+)\s*(\S*)\s*/,x=/::(place)/g,k=/:(read-only)/g,T=/[svh]\w+-[tblr]{2}/,C=/\(\s*(.*)\s*\)/g,O=/([\s\S]*?);/g,_=/-self|flex-/g,N=/[^]*?(:[rp][el]a[\w-]+)[^]*/,q=/stretch|:\s*\w+\-(?:conte|avail)/,J=/([^-])(image-set\()/,X=1,ae=1,Y=0,V=1,se=[],te=[],U=0,z=null,B=0,Q="";return d.use=s,d.set=u,e!==void 0&&u(e),d}var Ox={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Dx(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Ix=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ff=Dx(function(e){return Ix.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),at={};function yt(){return(yt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var pf=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},Ls=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!_m.typeOf(e)},Wi=Object.freeze([]),dn=Object.freeze({});function yr(e){return typeof e=="function"}function hf(e){return e.displayName||e.name||"Component"}function gc(e){return e&&typeof e.styledComponentId=="string"}var xr=typeof process<"u"&&at!==void 0&&(at.REACT_APP_SC_ATTR||at.SC_ATTR)||"data-styled",yc=typeof window<"u"&&"HTMLElement"in window,Nx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&at!==void 0&&(at.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&at.REACT_APP_SC_DISABLE_SPEEDY!==""?at.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&at.REACT_APP_SC_DISABLE_SPEEDY:at.SC_DISABLE_SPEEDY!==void 0&&at.SC_DISABLE_SPEEDY!==""&&at.SC_DISABLE_SPEEDY!=="false"&&at.SC_DISABLE_SPEEDY)),jx={};function Un(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Lx=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,a=i;n>=a;)(a<<=1)<0&&Un(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var l=i;l<a;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),u=0,d=r.length;u<d;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var a=o;a<i;a++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o,l=i;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),ci=new Map,Vi=new Map,Yr=1,Ho=function(e){if(ci.has(e))return ci.get(e);for(;Vi.has(Yr);)Yr++;var t=Yr++;return ci.set(e,t),Vi.set(t,e),t},_x=function(e){return Vi.get(e)},Fx=function(e,t){t>=Yr&&(Yr=t+1),ci.set(e,t),Vi.set(t,e)},Mx="style["+xr+'][data-styled-version="5.3.11"]',Bx=new RegExp("^"+xr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),zx=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},Ux=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var a=n[o].trim();if(a){var l=a.match(Bx);if(l){var s=0|parseInt(l[1],10),u=l[2];s!==0&&(Fx(u,s),zx(e,u,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(a)}}},Hx=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Fm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){for(var s=l.childNodes,u=s.length;u>=0;u--){var d=s[u];if(d&&d.nodeType===1&&d.hasAttribute(xr))return d}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(xr,"active"),r.setAttribute("data-styled-version","5.3.11");var a=Hx();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},Wx=function(){function e(n){var r=this.element=Fm(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,l=i.length;a<l;a++){var s=i[a];if(s.ownerNode===o)return s}Un(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Vx=function(){function e(n){var r=this.element=Fm(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Qx=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),mf=yc,Gx={isServer:!yc,useCSSOMInjection:!Nx},Qi=function(){function e(n,r,o){n===void 0&&(n=dn),r===void 0&&(r={}),this.options=yt({},Gx,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&yc&&mf&&(mf=!1,function(i){for(var a=document.querySelectorAll(Mx),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(xr)!=="active"&&(Ux(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Ho(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(yt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,a=r.target,n=o?new Qx(a):i?new Wx(a):new Vx(a),new Lx(n)));var n,r,o,i,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ho(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(Ho(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ho(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",a=0;a<o;a++){var l=_x(a);if(l!==void 0){var s=n.names.get(l),u=r.getGroup(a);if(s&&u&&s.size){var d=xr+".g"+a+'[id="'+l+'"]',c="";s!==void 0&&s.forEach(function(v){v.length>0&&(c+=v+",")}),i+=""+u+d+'{content:"'+c+`"}/*!sc*/
`}}}return i}(this)},e}(),Kx=/(a)(d)/gi,vf=function(e){return String.fromCharCode(e+(e>25?39:97))};function _s(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=vf(t%52)+n;return(vf(t%52)+n).replace(Kx,"$1-$2")}var tr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Mm=function(e){return tr(5381,e)};function Bm(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(yr(n)&&!gc(n))return!1}return!0}var qx=Mm("5.3.11"),Jx=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Bm(t),this.componentId=n,this.baseHash=tr(qx,n),this.baseStyle=r,Qi.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var a=Hn(this.rules,t,n,r).join(""),l=_s(tr(this.baseHash,a)>>>0);if(!n.hasNameForId(o,l)){var s=r(a,"."+l,void 0,o);n.insertRules(o,l,s)}i.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,d=tr(this.baseHash,r.hash),c="",v=0;v<u;v++){var A=this.rules[v];if(typeof A=="string")c+=A;else if(A){var g=Hn(A,t,n,r),w=Array.isArray(g)?g.join(""):g;d=tr(d,w+v),c+=w}}if(c){var f=_s(d>>>0);if(!n.hasNameForId(o,f)){var p=r(c,"."+f,void 0,o);n.insertRules(o,f,p)}i.push(f)}}return i.join(" ")},e}(),Yx=/^\s*\/\/.*$/gm,Xx=[":","[",".","#"];function Zx(e){var t,n,r,o,i=dn,a=i.options,l=a===void 0?dn:a,s=i.plugins,u=s===void 0?Wi:s,d=new Rx(l),c=[],v=function(w){function f(p){if(p)try{w(p+"}")}catch{}}return function(p,m,x,k,T,C,O,_,N,q){switch(p){case 1:if(N===0&&m.charCodeAt(0)===64)return w(m+";"),"";break;case 2:if(_===0)return m+"/*|*/";break;case 3:switch(_){case 102:case 112:return w(x[0]+m),"";default:return m+(q===0?"/*|*/":"")}case-2:m.split("/*|*/}").forEach(f)}}}(function(w){c.push(w)}),A=function(w,f,p){return f===0&&Xx.indexOf(p[n.length])!==-1||p.match(o)?w:"."+t};function g(w,f,p,m){m===void 0&&(m="&");var x=w.replace(Yx,""),k=f&&p?p+" "+f+" { "+x+" }":x;return t=m,n=f,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),d(p||!f?"":f,k)}return d.use([].concat(u,[function(w,f,p){w===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,A))},v,function(w){if(w===-2){var f=c;return c=[],f}}])),g.hash=u.length?u.reduce(function(w,f){return f.name||Un(15),tr(w,f.name)},5381).toString():"",g}var zm=S.createContext();zm.Consumer;var Um=S.createContext(),ew=(Um.Consumer,new Qi),Fs=Zx();function Hm(){return E.useContext(zm)||ew}function Wm(){return E.useContext(Um)||Fs}var tw=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Fs);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.toString=function(){return Un(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Fs),this.name+t.hash},e}(),nw=/([A-Z])/,rw=/([A-Z])/g,ow=/^ms-/,iw=function(e){return"-"+e.toLowerCase()};function gf(e){return nw.test(e)?e.replace(rw,iw).replace(ow,"-ms-"):e}var yf=function(e){return e==null||e===!1||e===""};function Hn(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],a=0,l=e.length;a<l;a+=1)(o=Hn(e[a],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(yf(e))return"";if(gc(e))return"."+e.styledComponentId;if(yr(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return Hn(s,t,n,r)}var u;return e instanceof tw?n?(e.inject(n,r),e.getName(r)):e:Ls(e)?function d(c,v){var A,g,w=[];for(var f in c)c.hasOwnProperty(f)&&!yf(c[f])&&(Array.isArray(c[f])&&c[f].isCss||yr(c[f])?w.push(gf(f)+":",c[f],";"):Ls(c[f])?w.push.apply(w,d(c[f],f)):w.push(gf(f)+": "+(A=f,(g=c[f])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||A in Ox||A.startsWith("--")?String(g).trim():g+"px")+";"));return v?[v+" {"].concat(w,["}"]):w}(e):e.toString()}var xf=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function W(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return yr(e)||Ls(e)?xf(Hn(pf(Wi,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:xf(Hn(pf(e,n)))}var Vm=function(e,t,n){return n===void 0&&(n=dn),e.theme!==n.theme&&e.theme||t||n.theme},aw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,lw=/(^-|-$)/g;function Pl(e){return e.replace(aw,"-").replace(lw,"")}var Qm=function(e){return _s(Mm(e)>>>0)};function Wo(e){return typeof e=="string"&&!0}var Ms=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},sw=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function uw(e,t,n){var r=e[n];Ms(t)&&Ms(r)?Gm(r,t):e[n]=t}function Gm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var a=i[o];if(Ms(a))for(var l in a)sw(l)&&uw(e,a[l],l)}return e}var uo=S.createContext();uo.Consumer;function Km(e){var t=E.useContext(uo),n=E.useMemo(function(){return function(r,o){if(!r)return Un(14);if(yr(r)){var i=r(o);return i}return Array.isArray(r)||typeof r!="object"?Un(8):o?yt({},o,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?S.createElement(uo.Provider,{value:n},e.children):null}var Rl={};function qm(e,t,n){var r=gc(e),o=!Wo(e),i=t.attrs,a=i===void 0?Wi:i,l=t.componentId,s=l===void 0?function(m,x){var k=typeof m!="string"?"sc":Pl(m);Rl[k]=(Rl[k]||0)+1;var T=k+"-"+Qm("5.3.11"+k+Rl[k]);return x?x+"-"+T:T}(t.displayName,t.parentComponentId):l,u=t.displayName,d=u===void 0?function(m){return Wo(m)?"styled."+m:"Styled("+hf(m)+")"}(e):u,c=t.displayName&&t.componentId?Pl(t.displayName)+"-"+t.componentId:t.componentId||s,v=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,A=t.shouldForwardProp;r&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(m,x,k){return e.shouldForwardProp(m,x,k)&&t.shouldForwardProp(m,x,k)}:e.shouldForwardProp);var g,w=new Jx(n,c,r?e.componentStyle:void 0),f=w.isStatic&&a.length===0,p=function(m,x){return function(k,T,C,O){var _=k.attrs,N=k.componentStyle,q=k.defaultProps,J=k.foldedComponentIds,X=k.shouldForwardProp,ae=k.styledComponentId,Y=k.target,V=function(P,y,F){P===void 0&&(P=dn);var I=yt({},y,{theme:P}),L={};return F.forEach(function(H){var K,G,oe,ce=H;for(K in yr(ce)&&(ce=ce(I)),ce)I[K]=L[K]=K==="className"?(G=L[K],oe=ce[K],G&&oe?G+" "+oe:G||oe):ce[K]}),[I,L]}(Vm(T,E.useContext(uo),q)||dn,T,_),se=V[0],te=V[1],U=function(P,y,F,I){var L=Hm(),H=Wm(),K=y?P.generateAndInjectStyles(dn,L,H):P.generateAndInjectStyles(F,L,H);return K}(N,O,se),z=C,B=te.$as||T.$as||te.as||T.as||Y,Q=Wo(B),D=te!==T?yt({},T,{},te):T,R={};for(var b in D)b[0]!=="$"&&b!=="as"&&(b==="forwardedAs"?R.as=D[b]:(X?X(b,ff,B):!Q||ff(b))&&(R[b]=D[b]));return T.style&&te.style!==T.style&&(R.style=yt({},T.style,{},te.style)),R.className=Array.prototype.concat(J,ae,U!==ae?U:null,T.className,te.className).filter(Boolean).join(" "),R.ref=z,E.createElement(B,R)}(g,m,x,f)};return p.displayName=d,(g=S.forwardRef(p)).attrs=v,g.componentStyle=w,g.displayName=d,g.shouldForwardProp=A,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Wi,g.styledComponentId=c,g.target=r?e.target:e,g.withComponent=function(m){var x=t.componentId,k=function(C,O){if(C==null)return{};var _,N,q={},J=Object.keys(C);for(N=0;N<J.length;N++)_=J[N],O.indexOf(_)>=0||(q[_]=C[_]);return q}(t,["componentId"]),T=x&&x+"-"+(Wo(m)?m:Pl(hf(m)));return qm(m,yt({},k,{attrs:v,componentId:T}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?Gm({},e.defaultProps,m):m}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),o&&zi(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var $=function(e){return function t(n,r,o){if(o===void 0&&(o=dn),!_m.isValidElementType(r))return Un(1,String(r));var i=function(){return n(r,o,W.apply(void 0,arguments))};return i.withConfig=function(a){return t(n,r,yt({},o,{},a))},i.attrs=function(a){return t(n,r,yt({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i}(qm,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){$[e]=$(e)});var cw=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Bm(n),Qi.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,o,i){var a=i(Hn(this.rules,r,o,i).join(""),""),l=this.componentId+n;o.insertRules(l,l,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,o,i){n>2&&Qi.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,r,o,i)},e}();function dw(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=W.apply(void 0,[e].concat(n)),i="sc-global-"+Qm(JSON.stringify(o)),a=new cw(o,i);function l(u){var d=Hm(),c=Wm(),v=E.useContext(uo),A=E.useRef(d.allocateGSInstance(i)).current;return d.server&&s(A,u,d,v,c),E.useLayoutEffect(function(){if(!d.server)return s(A,u,d,v,c),function(){return a.removeStyles(A,d)}},[A,u,d,v,c]),null}function s(u,d,c,v,A){if(a.isStatic)a.renderStyles(u,jx,c,A);else{var g=yt({},d,{theme:Vm(d,v,l.defaultProps)});a.renderStyles(u,g,c,A)}}return S.memo(l)}var fw=`
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

`;const xc="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",wc="inset 2px 2px 3px rgba(0,0,0,0.2)",bt=()=>W`
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
`,Gn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},pw=({theme:e,topLeftInner:t,bottomRightInner:n,hasShadow:r=!1,hasInsetShadow:o=!1})=>[r?xc:!1,o?wc:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,n!==null?`inset -1px -1px 0 1px ${e[n]}`:!1].filter(Boolean).join(", "),Ae=({invert:e=!1,style:t="button"}={})=>{const n={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return W`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[Gn[t][n.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[Gn[t][n.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[Gn[t][n.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[Gn[t][n.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:o})=>pw({theme:r,topLeftInner:Gn[t][n.topLeftInner],bottomRightInner:Gn[t][n.bottomRightInner],hasShadow:o})};
  `},wr=()=>W`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,hw=e=>Buffer.from(e).toString("base64"),mw=typeof btoa<"u"?btoa:hw,Vo=(e,t=0)=>{const n=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${mw(n)})`},bc=(e="default")=>W`
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
`,vw=$.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,gw=E.forwardRef(({children:e,underline:t=!0,...n},r)=>S.createElement(vw,{ref:r,underline:t,...n},e));gw.displayName="Anchor";const yw=$.header`
  ${Ae()};
  ${At()};

  position: ${e=>{var t;return(t=e.position)!==null&&t!==void 0?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,Jm=E.forwardRef(({children:e,fixed:t=!0,position:n="fixed",...r},o)=>S.createElement(yw,{fixed:t,position:t!==!1?n:void 0,ref:o,...r},e));Jm.displayName="AppBar";const Qn=()=>{};function Rn(e,t,n){return n!==null&&e>n?n:t!==null&&e<t?t:e}function xw(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function wf(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(xw(t)))}function vn(e){return typeof e=="number"?`${e}px`:e}const ww=$.div`
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
`,bw=$.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,Bs=E.forwardRef(({alt:e="",children:t,noBorder:n=!1,size:r=35,square:o=!1,src:i,...a},l)=>S.createElement(ww,{noBorder:n,ref:l,size:vn(r),square:o,src:i,...a},i?S.createElement(bw,{src:i,alt:e}):t));Bs.displayName="Avatar";const je={sm:"28px",md:"36px",lg:"44px"},Aw=W`
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
`,Ya=$.button`
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
  ${Aw}
`,we=E.forwardRef(({onClick:e,disabled:t=!1,children:n,type:r="button",fullWidth:o=!1,size:i="md",square:a=!1,active:l=!1,onTouchStart:s=Qn,primary:u=!1,variant:d="default",...c},v)=>S.createElement(Ya,{active:l,disabled:t,$disabled:t,fullWidth:o,onClick:t?void 0:e,onTouchStart:s,primary:u,ref:v,size:i,square:a,type:r,variant:d,...c},n));we.displayName="Button";function gn({defaultValue:e,onChange:t,onChangePropName:n="onChange",readOnly:r,value:o,valuePropName:i="value"}){const a=o!==void 0,[l,s]=E.useState(e),u=E.useCallback(d=>{a||s(d)},[a]);if(a&&typeof t!="function"&&!r){const d=`Warning: You provided a \`${i}\` prop to a component without an \`${n}\` handler.${i==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${n}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${n}\` function that updates \`${i}\`.`}`;console.warn(d)}return[a?o:l,u]}const zs=$.li`
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
`,Sw=E.forwardRef(({size:e="lg",disabled:t,square:n,children:r,onClick:o,primary:i,...a},l)=>S.createElement(zs,{$disabled:t,size:e,square:n,onClick:t?void 0:o,primary:i,role:"menuitem",ref:l,"aria-disabled":t,...a},r));Sw.displayName="MenuListItem";const kw=$.ul.attrs(()=>({role:"menu"}))`
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
`;kw.displayName="MenuList";const It=20,Gi=$.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${It}px;
  height: ${It}px;
  opacity: 0;
  z-index: -1;
`,Ac=$.label`
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
`,Sc=$.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Gi}:focus ~ & {
    ${wr}
  }
  ${Gi}:not(:disabled) ~ &:active {
    ${wr}
  }
`,jt=$.div`
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
    ${e=>e.shadow&&`box-shadow:${wc};`}
  }
`,Ew=$.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${bc()}
`,Ym=E.forwardRef(({children:e,shadow:t=!0,...n},r)=>S.createElement(jt,{ref:r,shadow:t,...n},S.createElement(Ew,null,e)));Ym.displayName="ScrollView";const Xm=W`
  width: ${It}px;
  height: ${It}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Tw=$(jt)`
  ${Xm}
  width: ${It}px;
  height: ${It}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,Cw=$.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${Xm}
  width: ${It-4}px;
  height: ${It-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,$w=$.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Pw=$.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
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
`,Rw={flat:Cw,default:Tw},Us=E.forwardRef(({checked:e,className:t="",defaultChecked:n=!1,disabled:r=!1,indeterminate:o=!1,label:i="",onChange:a=Qn,style:l={},value:s,variant:u="default",...d},c)=>{var v;const[A,g]=gn({defaultValue:n,onChange:a,readOnly:(v=d.readOnly)!==null&&v!==void 0?v:r,value:e}),w=E.useCallback(m=>{const x=m.target.checked;g(x),a(m)},[a,g]),f=Rw[u];let p=null;return o?p=Pw:A&&(p=$w),S.createElement(Ac,{$disabled:r,className:t,style:l},S.createElement(Gi,{disabled:r,onChange:r?void 0:w,readOnly:r,type:"checkbox",value:s,checked:A,"data-indeterminate":o,ref:c,...d}),S.createElement(f,{$disabled:r,role:"presentation"},p&&S.createElement(p,{$disabled:r,variant:u})),i&&S.createElement(Sc,null,i))});Us.displayName="Checkbox";const kc=$.div`
  ${({orientation:e,theme:t,size:n="100%"})=>e==="vertical"?`
    height: ${vn(n)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `:`
    width: ${vn(n)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;kc.displayName="Separator";const Ow=$(Ya)`
  padding-left: 8px;
`,Dw=$(kc)`
  height: 21px;
  position: relative;
  top: 0;
`,Zm=$.input`
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
`,Iw=$.div`
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
  ${Zm}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${wr}
    outline-offset: -8px;
  }
`,Nw=$.span`
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
`,e0=E.forwardRef(({value:e,defaultValue:t,onChange:n=Qn,disabled:r=!1,variant:o="default",...i},a)=>{var l;const[s,u]=gn({defaultValue:t,onChange:n,readOnly:(l=i.readOnly)!==null&&l!==void 0?l:r,value:e}),d=c=>{const v=c.target.value;u(v),n(c)};return S.createElement(Ow,{disabled:r,as:"div",variant:o,size:"md"},S.createElement(Zm,{onChange:d,readOnly:r,disabled:r,value:s??"#008080",type:"color",ref:a,...i}),S.createElement(Iw,{$disabled:r,color:s??"#008080",role:"presentation"}),o==="default"&&S.createElement(Dw,{orientation:"vertical"}),S.createElement(Nw,{$disabled:r,variant:o}))});e0.displayName="ColorInput";const jw=$.div`
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
`,bf=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Lw=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function _w({digit:e=0,pixelSize:t=2,...n}){const r=Lw[Number(e)].map((o,i)=>o?`${bf[i]} active`:bf[i]);return S.createElement(jw,{pixelSize:t,...n},r.map((o,i)=>S.createElement("span",{className:o,key:i})))}const Fw=$.div`
  ${Ae({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Mw={sm:1,md:2,lg:3,xl:4},Bw=E.forwardRef(({value:e=0,minLength:t=3,size:n="md",...r},o)=>{const i=E.useMemo(()=>e.toString().padStart(t,"0").split(""),[t,e]);return S.createElement(Fw,{ref:o,...r},i.map((a,l)=>S.createElement(_w,{digit:a,pixelSize:Mw[n],key:l})))});Bw.displayName="Counter";const t0=W`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${je.md};
`,zw=$(jt).attrs({"data-testid":"variant-default"})`
  ${t0}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,Uw=$.div.attrs({"data-testid":"variant-flat"})`
  ${Wn()}
  ${t0}
  position: relative;
`,n0=W`
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
`,Hw=$.input`
  ${n0}
  padding: 0 8px;
`,Ww=$.textarea`
  ${n0}
  padding: 8px;
  resize: none;
  ${({variant:e})=>bc(e)}
`,To=E.forwardRef(({className:e,disabled:t=!1,fullWidth:n,onChange:r=Qn,shadow:o=!0,style:i,variant:a="default",...l},s)=>{const u=a==="flat"?Uw:zw,d=E.useMemo(()=>{var c;return l.multiline?S.createElement(Ww,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,variant:a,...l}):S.createElement(Hw,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,type:(c=l.type)!==null&&c!==void 0?c:"text",variant:a,...l})},[t,r,l,s,a]);return S.createElement(u,{className:e,fullWidth:n,$disabled:t,shadow:o,style:i},d)});To.displayName="TextInput";const Vw=$.div`
  display: inline-flex;
  align-items: center;
`,Hs=$(we)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?W`
          height: calc(50% - 1px);
        `:W`
          height: 50%;
        `}
`,Qw=$.div`
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
`,Af=$.span`
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
`,Ec=E.forwardRef(({className:e,defaultValue:t,disabled:n=!1,max:r,min:o,onChange:i,readOnly:a,step:l=1,style:s,value:u,variant:d="default",width:c,...v},A)=>{const[g,w]=gn({defaultValue:t,onChange:i,readOnly:a,value:u}),f=E.useCallback(C=>{const O=parseFloat(C.target.value);w(O)},[w]),p=E.useCallback(C=>{const O=Rn(parseFloat(((g??0)+C).toFixed(2)),o??null,r??null);w(O),i==null||i(O)},[r,o,i,w,g]),m=E.useCallback(()=>{g!==void 0&&(i==null||i(g))},[i,g]),x=E.useCallback(()=>{p(l)},[p,l]),k=E.useCallback(()=>{p(-l)},[p,l]),T=d==="flat"?"flat":"raised";return S.createElement(Vw,{className:e,style:{...s,width:c!==void 0?vn(c):"auto"},...v},S.createElement(To,{value:g,variant:d,onChange:f,disabled:n,type:"number",readOnly:a,ref:A,fullWidth:!0,onBlur:m}),S.createElement(Qw,{variant:d},S.createElement(Hs,{"data-testid":"increment",variant:T,disabled:n||a,onClick:x},S.createElement(Af,{invert:!0})),S.createElement(Hs,{"data-testid":"decrement",variant:T,disabled:n||a,onClick:k},S.createElement(Af,null))))});Ec.displayName="NumberInput";function Gw(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<10;n+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const r0=e=>E.useMemo(()=>Gw(),[e]),o0=W`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,i0=W`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,Tc=$.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,Kw=$.div`
  ${o0}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${Tc}:focus & {
    ${i0}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,a0=W`
  height: ${je.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?bt():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,qw=$(jt)`
  ${a0}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,Jw=$.div`
  ${Wn()}
  ${a0}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,Yw=$.select`
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
  ${o0}
  cursor: pointer;
  &:disabled {
    ${bt()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,l0=$(Ya).attrs(()=>({"aria-hidden":"true"}))`
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
`,Xw=$.span`
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
  ${l0}:active & {
    margin-top: 2px;
  }
`,Zw=$.ul`
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
  box-shadow: ${xc};
  ${({variant:e="default"})=>e==="flat"?W`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:W`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:e="default"})=>bc(e)}
`,eb=$.li`
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
  ${({active:e})=>e?i0:""}
  user-select: none;
`,tb=[],s0=({className:e,defaultValue:t,disabled:n,native:r,onChange:o,options:i=tb,readOnly:a,style:l,value:s,variant:u,width:d})=>{var c;const v=E.useMemo(()=>i.filter(Boolean),[i]),[A,g]=gn({defaultValue:t??((c=v==null?void 0:v[0])===null||c===void 0?void 0:c.value),onChange:o,readOnly:a,value:s}),w=!(n||a),f=E.useMemo(()=>({className:e,style:{...l,width:d}}),[e,l,d]),p=E.useMemo(()=>S.createElement(l0,{as:"div","data-testid":"select-button",$disabled:n,native:r,tabIndex:-1,variant:u==="flat"?"flat":"raised"},S.createElement(Xw,{"data-testid":"select-icon",$disabled:n})),[n,r,u]),m=E.useMemo(()=>u==="flat"?Jw:qw,[u]);return E.useMemo(()=>({isEnabled:w,options:v,value:A,setValue:g,wrapperProps:f,DropdownButton:p,Wrapper:m}),[p,m,w,v,g,A,f])},nb={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},rb=1e3,ob=({onBlur:e,onChange:t,onClose:n,onFocus:r,onKeyDown:o,onMouseDown:i,onOpen:a,open:l,options:s,readOnly:u,value:d,selectRef:c,setValue:v,wrapperRef:A})=>{const g=E.useRef(null),w=E.useRef([]),f=E.useRef(0),p=E.useRef(0),m=E.useRef(),x=E.useRef("search"),k=E.useRef(""),T=E.useRef(),[C,O]=gn({defaultValue:!1,onChange:a,onChangePropName:"onOpen",readOnly:u,value:l,valuePropName:"open"}),_=E.useMemo(()=>{const L=s.findIndex(H=>H.value===d);return f.current=Rn(L,0,null),s[L]},[s,d]),[N,q]=E.useState(s[0]),J=E.useCallback(L=>{const H=g.current,K=w.current[L];if(!K||!H){m.current=L;return}m.current=void 0;const G=H.clientHeight,oe=H.scrollTop,ce=H.scrollTop+G,ee=K.offsetTop,de=K.offsetHeight,le=K.offsetTop+K.offsetHeight;ee<oe&&H.scrollTo(0,ee),le>ce&&H.scrollTo(0,ee-G+de),K.focus({preventScroll:!0})},[g]),X=E.useCallback((L,{scroll:H}={})=>{var K;const G=s.length-1;let oe;switch(L){case"first":{oe=0;break}case"last":{oe=G;break}case"next":{oe=Rn(p.current+1,0,G);break}case"previous":{oe=Rn(p.current-1,0,G);break}case"selected":{oe=Rn((K=f.current)!==null&&K!==void 0?K:0,0,G);break}default:oe=L}p.current=oe,q(s[oe]),H&&J(oe)},[p,s,J]),ae=E.useCallback(({fromEvent:L})=>{O(!0),X("selected",{scroll:!0}),a==null||a({fromEvent:L})},[X,a,O]),Y=E.useCallback(()=>{x.current="search",k.current="",clearTimeout(T.current)},[]),V=E.useCallback(({focusSelect:L,fromEvent:H})=>{var K;n==null||n({fromEvent:H}),O(!1),q(s[0]),Y(),m.current=void 0,L&&((K=c.current)===null||K===void 0||K.focus())},[Y,n,s,c,O]),se=E.useCallback(({fromEvent:L})=>{C?V({focusSelect:!1,fromEvent:L}):ae({fromEvent:L})},[V,ae,C]),te=E.useCallback((L,{fromEvent:H})=>{f.current!==L&&(f.current=L,v(s[L].value),t==null||t(s[L],{fromEvent:H}))},[t,s,v]),U=E.useCallback(({focusSelect:L,fromEvent:H})=>{te(p.current,{fromEvent:H}),V({focusSelect:L,fromEvent:H})},[V,te]),z=E.useCallback((L,{fromEvent:H,select:K})=>{var G;switch(x.current==="cycleFirstLetter"&&L!==k.current&&(x.current="search"),L===k.current?x.current="cycleFirstLetter":k.current+=L,x.current){case"search":{let oe=s.findIndex(ce=>{var ee;return((ee=ce.label)===null||ee===void 0?void 0:ee.toLocaleUpperCase().indexOf(k.current))===0});oe<0&&(oe=s.findIndex(ce=>{var ee;return((ee=ce.label)===null||ee===void 0?void 0:ee.toLocaleUpperCase().indexOf(L))===0}),k.current=L),oe>=0&&(K?te(oe,{fromEvent:H}):X(oe,{scroll:!0}));break}case"cycleFirstLetter":{const oe=K?(G=f.current)!==null&&G!==void 0?G:-1:p.current;let ce=s.findIndex((ee,de)=>{var le;return de>oe&&((le=ee.label)===null||le===void 0?void 0:le.toLocaleUpperCase().indexOf(L))===0});ce<0&&(ce=s.findIndex(ee=>{var de;return((de=ee.label)===null||de===void 0?void 0:de.toLocaleUpperCase().indexOf(L))===0})),ce>=0&&(K?te(ce,{fromEvent:H}):X(ce,{scroll:!0}));break}}clearTimeout(T.current),T.current=setTimeout(()=>{x.current==="search"&&(k.current="")},rb)},[X,s,te]),B=E.useCallback(L=>{var H;L.button===0&&(L.preventDefault(),(H=c.current)===null||H===void 0||H.focus(),se({fromEvent:L}),i==null||i(L))},[i,c,se]),Q=E.useCallback(L=>{U({focusSelect:!0,fromEvent:L})},[U]),D=E.useCallback(L=>{const{altKey:H,code:K,ctrlKey:G,metaKey:oe,shiftKey:ce}=L,{ARROW_DOWN:ee,ARROW_UP:de,END:le,ENTER:ge,ESC:We,HOME:Se,SPACE:Kt,TAB:mt}=nb,Ve=H||G||oe||ce;if(!(K===mt&&(H||G||oe)||K!==mt&&Ve))switch(K){case ee:{if(L.preventDefault(),!C){ae({fromEvent:L});return}X("next",{scroll:!0});break}case de:{if(L.preventDefault(),!C){ae({fromEvent:L});return}X("previous",{scroll:!0});break}case le:{if(L.preventDefault(),!C){ae({fromEvent:L});return}X("last",{scroll:!0});break}case ge:{if(!C)return;L.preventDefault(),U({focusSelect:!0,fromEvent:L});break}case We:{if(!C)return;L.preventDefault(),V({focusSelect:!0,fromEvent:L});break}case Se:{if(L.preventDefault(),!C){ae({fromEvent:L});return}X("first",{scroll:!0});break}case Kt:{L.preventDefault(),C?U({focusSelect:!0,fromEvent:L}):ae({fromEvent:L});break}case mt:{if(!C)return;ce||L.preventDefault(),U({focusSelect:!ce,fromEvent:L});break}default:!Ve&&K.match(/^Key/)&&(L.preventDefault(),L.stopPropagation(),z(K.replace(/^Key/,""),{select:!C,fromEvent:L}))}},[X,V,C,ae,z,U]),R=E.useCallback(L=>{D(L),o==null||o(L)},[D,o]),b=E.useCallback(L=>{X(L)},[X]),P=E.useCallback(L=>{C||(Y(),e==null||e(L))},[Y,e,C]),y=E.useCallback(L=>{Y(),r==null||r(L)},[Y,r]),F=E.useCallback(L=>{g.current=L,m.current!==void 0&&J(m.current)},[J]),I=E.useCallback((L,H)=>{w.current[H]=L,m.current===H&&J(m.current)},[J]);return E.useEffect(()=>{if(!C)return()=>{};const L=H=>{var K;const G=H.target;!((K=A.current)===null||K===void 0)&&K.contains(G)||(H.preventDefault(),V({focusSelect:!1,fromEvent:H}))};return document.addEventListener("mousedown",L),()=>{document.removeEventListener("mousedown",L)}},[V,C,A]),E.useMemo(()=>({activeOption:N,handleActivateOptionIndex:b,handleBlur:P,handleButtonKeyDown:R,handleDropdownKeyDown:D,handleFocus:y,handleMouseDown:B,handleOptionClick:Q,handleSetDropdownRef:F,handleSetOptionRef:I,open:C,selectedOption:_}),[N,b,P,R,y,D,B,Q,F,I,C,_])},ib=E.forwardRef(({className:e,defaultValue:t,disabled:n,onChange:r,options:o,readOnly:i,style:a,value:l,variant:s,width:u,...d},c)=>{const{isEnabled:v,options:A,setValue:g,value:w,DropdownButton:f,Wrapper:p}=s0({defaultValue:t,disabled:n,native:!0,onChange:r,options:o,readOnly:i,value:l,variant:s}),m=E.useCallback(x=>{const k=A.find(T=>T.value===x.target.value);k&&(g(k.value),r==null||r(k,{fromEvent:x}))},[r,A,g]);return S.createElement(p,{className:e,style:{...a,width:u}},S.createElement(Tc,null,S.createElement(Yw,{...d,disabled:n,onChange:v?m:Qn,ref:c,value:w},A.map((x,k)=>{var T;return S.createElement("option",{key:`${x.value}-${k}`,value:x.value},(T=x.label)!==null&&T!==void 0?T:x.value)})),f))});ib.displayName="SelectNative";function ab({activateOptionIndex:e,active:t,index:n,onClick:r,option:o,selected:i,setRef:a}){const l=E.useCallback(()=>{e(n)},[e,n]),s=E.useCallback(d=>{a(d,n)},[n,a]),u=r0();return S.createElement(eb,{active:t,"aria-selected":i?"true":void 0,"data-value":o.value,id:u,onClick:r,onMouseEnter:l,ref:s,role:"option",tabIndex:0},o.label)}function lb({"aria-label":e,"aria-labelledby":t,className:n,defaultValue:r,disabled:o=!1,formatDisplay:i,inputProps:a,labelId:l,menuMaxHeight:s,name:u,onBlur:d,onChange:c,onClose:v,onFocus:A,onKeyDown:g,onMouseDown:w,onOpen:f,open:p,options:m,readOnly:x,shadow:k=!0,style:T,variant:C="default",value:O,width:_="auto",...N},q){const{isEnabled:J,options:X,setValue:ae,value:Y,wrapperProps:V,DropdownButton:se,Wrapper:te}=s0({className:n,defaultValue:r,disabled:o,native:!1,onChange:c,options:m,style:T,readOnly:x,value:O,variant:C,width:_}),U=E.useRef(null),z=E.useRef(null),B=E.useRef(null),{activeOption:Q,handleActivateOptionIndex:D,handleBlur:R,handleButtonKeyDown:b,handleDropdownKeyDown:P,handleFocus:y,handleMouseDown:F,handleOptionClick:I,handleSetDropdownRef:L,handleSetOptionRef:H,open:K,selectedOption:G}=ob({onBlur:d,onChange:c,onClose:v,onFocus:A,onKeyDown:g,onMouseDown:w,onOpen:f,open:p,options:X,value:Y,selectRef:z,setValue:ae,wrapperRef:B});E.useImperativeHandle(q,()=>({focus:ge=>{var We;(We=z.current)===null||We===void 0||We.focus(ge)},node:U.current,value:String(Y)}),[Y]);const oe=E.useMemo(()=>G?typeof i=="function"?i(G):G.label:"",[i,G]),ce=J?1:void 0,ee=E.useMemo(()=>s?{overflow:"auto",maxHeight:s}:void 0,[s]),de=r0(),le=E.useMemo(()=>X.map((ge,We)=>{const Se=`${Y}-${We}`,Kt=ge===Q,mt=ge===G;return S.createElement(ab,{activateOptionIndex:D,active:Kt,index:We,key:Se,onClick:I,option:ge,selected:mt,setRef:H})}),[Q,D,I,H,X,G,Y]);return S.createElement(te,{...V,$disabled:o,ref:B,shadow:k,style:{...T,width:_}},S.createElement("input",{name:u,ref:U,type:"hidden",value:String(Y),...a}),S.createElement(Tc,{"aria-disabled":o,"aria-expanded":K,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t??l,"aria-owns":J&&K?de:void 0,onBlur:R,onFocus:y,onKeyDown:b,onMouseDown:J?F:w,ref:z,role:"button",tabIndex:ce,...N},S.createElement(Kw,null,oe),se),J&&K&&S.createElement(Zw,{id:de,onKeyDown:P,ref:L,role:"listbox",style:ee,tabIndex:0,variant:C},le))}const co=E.forwardRef(lb);co.displayName="Select";const sb=$.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,Qt=E.forwardRef(function({children:t,noPadding:n=!1,...r},o){return S.createElement(sb,{noPadding:n,ref:o,...r},t)});Qt.displayName="Toolbar";const ub=$.div`
  padding: 16px;
`,Tr=E.forwardRef(function({children:t,...n},r){return S.createElement(ub,{ref:r,...n},t)});Tr.displayName="WindowContent";const cb=$.div`
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
`,Cc=E.forwardRef(function({active:t=!0,children:n,...r},o){return S.createElement(cb,{active:t,ref:o,...r},n)});Cc.displayName="WindowHeader";const db=$.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Ae({style:"window"})}
  ${At()}
`,fb=$.span`
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
`,Xa=E.forwardRef(({children:e,resizable:t=!1,resizeRef:n,shadow:r=!0,...o},i)=>S.createElement(db,{ref:i,shadow:r,...o},e,t&&S.createElement(fb,{"data-testid":"resizeHandle",ref:n})));Xa.displayName="Window";const pb=$(Ym)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,hb=$.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,mb=$.div`
  display: flex;
  flex-wrap: wrap;
`,Ft=$.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,vb=$.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,gb=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function yb(e,t){return new Date(e,t+1,0).getDate()}function xb(e,t,n){return new Date(e,t,n).getDay()}function wb(e){const t=new Date(Date.parse(e)),n=t.getUTCDate(),r=t.getUTCMonth(),o=t.getUTCFullYear();return{day:n,month:r,year:o}}const bb=E.forwardRef(({className:e,date:t=new Date().toISOString(),onAccept:n,onCancel:r,shadow:o=!0},i)=>{const[a,l]=E.useState(()=>wb(t)),{year:s,month:u,day:d}=a,c=E.useCallback(({value:f})=>{l(p=>({...p,month:f}))},[]),v=E.useCallback(f=>{l(p=>({...p,year:f}))},[]),A=E.useCallback(f=>{l(p=>({...p,day:f}))},[]),g=E.useCallback(()=>{const f=[a.year,a.month+1,a.day].map(p=>String(p).padStart(2,"0")).join("-");n==null||n(f)},[a.day,a.month,a.year,n]),w=E.useMemo(()=>{const f=Array.from({length:42}),p=xb(s,u,1);let m=d;const x=yb(s,u);return m=m<x?m:x,f.forEach((k,T)=>{if(T>=p&&T<x+p){const C=T-p+1;f[T]=S.createElement(Ft,{key:T,onClick:()=>{A(C)}},S.createElement(vb,{active:C===m},C))}else f[T]=S.createElement(Ft,{key:T})}),f},[d,A,u,s]);return S.createElement(Xa,{className:e,ref:i,shadow:o,style:{margin:20}},S.createElement(Cc,null,S.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),S.createElement(Tr,null,S.createElement(Qt,{noPadding:!0,style:{justifyContent:"space-between"}},S.createElement(co,{options:gb,value:u,onChange:c,width:128,menuMaxHeight:200}),S.createElement(Ec,{value:s,onChange:v,width:100})),S.createElement(pb,null,S.createElement(hb,null,S.createElement(Ft,null,"S"),S.createElement(Ft,null,"M"),S.createElement(Ft,null,"T"),S.createElement(Ft,null,"W"),S.createElement(Ft,null,"T"),S.createElement(Ft,null,"F"),S.createElement(Ft,null,"S")),S.createElement(mb,null,w)),S.createElement(Qt,{noPadding:!0,style:{justifyContent:"space-between"}},S.createElement(we,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),S.createElement(we,{fullWidth:!0,onClick:n?g:void 0,disabled:!n},"OK"))))});bb.displayName="DatePicker";const Ab=e=>{switch(e){case"status":case"well":return W`
        ${Ae({style:"status"})}
      `;case"window":case"outside":return W`
        ${Ae({style:"window"})}
      `;case"field":return W`
        ${Ae({style:"field"})}
      `;default:return W`
        ${Ae()}
      `}},Sb=$.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>Ab(e)}
  ${({variant:e})=>At(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,kb=E.forwardRef(({children:e,shadow:t=!1,variant:n="window",...r},o)=>S.createElement(Sb,{ref:o,shadow:t,variant:n,...r},e));kb.displayName="Frame";const Eb=$.fieldset`
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
`,Tb=$.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,On=E.forwardRef(({label:e,disabled:t=!1,variant:n="default",children:r,...o},i)=>S.createElement(Eb,{"aria-disabled":t,$disabled:t,variant:n,ref:i,...o},e&&S.createElement(Tb,{variant:n},e),r));On.displayName="GroupBox";const Cb=$.div`
  ${({theme:e,size:t="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${vn(t)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;Cb.displayName="Handle";const $b="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Pb=$.div`
  display: inline-block;
  height: ${({size:e})=>vn(e)};
  width: ${({size:e})=>vn(e)};
`,Rb=$.span`
  display: block;
  background: ${$b};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Ob=E.forwardRef(({size:e=30,...t},n)=>S.createElement(Pb,{size:e,ref:n,...t},S.createElement(Rb,null)));Ob.displayName="Hourglass";const Db=$.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Ib=$.div`
  position: relative;
`,Nb=$.div`
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
`,jb=$(jt).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Lb=$.div`
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
`,u0=E.forwardRef(({backgroundStyles:e,children:t,...n},r)=>S.createElement(Db,{ref:r,...n},S.createElement(Ib,null,S.createElement(Nb,null,S.createElement(jb,{style:e},t)),S.createElement(Lb,null))));u0.displayName="Monitor";const _b=$.div`
  display: inline-block;
  height: ${je.md};
  width: 100%;
`,Fb=$(jt)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,c0=W`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Mb=$.div`
  position: relative;
  top: 4px;
  ${c0}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,Bb=$.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${c0}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,zb=$.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,d0=17,Ub=$.span`
  display: inline-block;
  width: ${d0}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,Hb=E.forwardRef(({hideValue:e=!1,shadow:t=!0,value:n,variant:r="default",...o},i)=>{const a=e?null:`${n}%`,l=E.useRef(null),[s,u]=E.useState([]),d=E.useCallback(()=>{if(!l.current||n===void 0)return;const c=l.current.getBoundingClientRect().width,v=Math.round(n/100*c/d0);u(Array.from({length:v}))},[n]);return E.useEffect(()=>(d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)),[d]),S.createElement(_b,{"aria-valuenow":n!==void 0?Math.round(n):void 0,ref:i,role:"progressbar",variant:r,...o},S.createElement(Fb,{variant:r,shadow:t},r==="default"?S.createElement(S.Fragment,null,S.createElement(Mb,{"data-testid":"defaultProgress1"},a),S.createElement(Bb,{"data-testid":"defaultProgress2",value:n},a)):S.createElement(zb,{ref:l,"data-testid":"tileProgress"},s.map((c,v)=>S.createElement(Ub,{key:v})))))});Hb.displayName="ProgressBar";const f0=W`
  width: ${It}px;
  height: ${It}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Wb=$(jt)`
  ${f0}
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
`,Vb=$.div`
  ${Wn()}
  ${f0}
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
`,Qb=$.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Gb={flat:Vb,default:Wb},vt=E.forwardRef(({checked:e,className:t="",disabled:n=!1,label:r="",onChange:o,style:i={},variant:a="default",...l},s)=>{const u=Gb[a];return S.createElement(Ac,{$disabled:n,className:t,style:i},S.createElement(u,{$disabled:n,role:"presentation"},e&&S.createElement(Qb,{$disabled:n,variant:a})),S.createElement(Gi,{disabled:n,onChange:n?void 0:o,readOnly:n,type:"radio",checked:e,ref:s,...l}),r&&S.createElement(Sc,null,r))});vt.displayName="Radio";const Kb=typeof window<"u"?E.useLayoutEffect:E.useEffect;function An(e){const t=E.useRef(e);return Kb(()=>{t.current=e}),E.useCallback((...n)=>(0,t.current)(...n),[])}function Sf(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function kf(e,t){return E.useMemo(()=>e==null&&t==null?null:n=>{Sf(e,n),Sf(t,n)},[e,t])}let Za=!0,Ws=!1,Ef;const qb={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Jb(e){if("type"in e){const{type:t,tagName:n}=e;if(n==="INPUT"&&qb[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function Yb(e){e.metaKey||e.altKey||e.ctrlKey||(Za=!0)}function Ol(){Za=!1}function Xb(){this.visibilityState==="hidden"&&Ws&&(Za=!0)}function Zb(e){e.addEventListener("keydown",Yb,!0),e.addEventListener("mousedown",Ol,!0),e.addEventListener("pointerdown",Ol,!0),e.addEventListener("touchstart",Ol,!0),e.addEventListener("visibilitychange",Xb,!0)}function eA(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Za||Jb(t)}function tA(){Ws=!0,window.clearTimeout(Ef),Ef=window.setTimeout(()=>{Ws=!1},100)}function nA(){const e=E.useCallback(t=>{const n=um.findDOMNode(t);n!=null&&Zb(n.ownerDocument)},[]);return{isFocusVisible:eA,onBlurVisible:tA,ref:e}}function rA(e,t,n){return(n-t)*e+t}function Qo(e,t){if(t!==void 0&&"changedTouches"in e){for(let n=0;n<e.changedTouches.length;n+=1){const r=e.changedTouches[n];if(r.identifier===t)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function Go(e){return e&&e.ownerDocument||document}function oA(e,t){var n;const{index:r}=(n=e.reduce((o,i,a)=>{const l=Math.abs(t-i);return o===null||l<o.distance||l===o.distance?{distance:l,index:a}:o},null))!==null&&n!==void 0?n:{};return r??-1}const iA=$.div`
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
`,p0=()=>W`
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
`,aA=$(jt)`
  ${p0()}
`,lA=$(jt)`
  ${p0()}

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
`,sA=$.span`
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
`,nr=6,uA=$.span`
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
`,cA=$.div`
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
`,Ki=E.forwardRef(({defaultValue:e,disabled:t=!1,marks:n=!1,max:r=100,min:o=0,name:i,onChange:a,onChangeCommitted:l,onMouseDown:s,orientation:u="horizontal",size:d="100%",step:c=1,value:v,variant:A="default",...g},w)=>{const f=A==="flat"?lA:aA,p=u==="vertical",[m=o,x]=gn({defaultValue:e,onChange:a??l,value:v}),{isFocusVisible:k,onBlurVisible:T,ref:C}=nA(),[O,_]=E.useState(!1),N=E.useRef(),q=E.useRef(null),J=kf(C,N),X=kf(w,J),ae=An(R=>{k(R)&&_(!0)}),Y=An(()=>{O!==!1&&(_(!1),T())}),V=E.useRef(),se=E.useMemo(()=>n===!0&&Number.isFinite(c)?[...Array(Math.round((r-o)/c)+1)].map((R,b)=>({label:void 0,value:o+c*b})):Array.isArray(n)?n:[],[n,r,o,c]),te=An(R=>{const b=(r-o)/10,P=se.map(I=>I.value),y=P.indexOf(m);let F=0;switch(R.key){case"Home":F=o;break;case"End":F=r;break;case"PageUp":c&&(F=m+b);break;case"PageDown":c&&(F=m-b);break;case"ArrowRight":case"ArrowUp":c?F=m+c:F=P[y+1]||P[P.length-1];break;case"ArrowLeft":case"ArrowDown":c?F=m-c:F=P[y-1]||P[0];break;default:return}R.preventDefault(),c&&(F=wf(F,c,o)),F=Rn(F,o,r),x(F),_(!0),a==null||a(F),l==null||l(F)}),U=E.useCallback(R=>{if(!N.current)return 0;const b=N.current.getBoundingClientRect();let P;p?P=(b.bottom-R.y)/b.height:P=(R.x-b.left)/b.width;let y;if(y=rA(P,o,r),c)y=wf(y,c,o);else{const F=se.map(L=>L.value),I=oA(F,y);y=F[I]}return y=Rn(y,o,r),y},[se,r,o,c,p]),z=An(R=>{var b;const P=Qo(R,V.current);if(!P)return;const y=U(P);(b=q.current)===null||b===void 0||b.focus(),x(y),_(!0),a==null||a(y)}),B=An(R=>{const b=Qo(R,V.current);if(!b)return;const P=U(b);l==null||l(P),V.current=void 0;const y=Go(N.current);y.removeEventListener("mousemove",z),y.removeEventListener("mouseup",B),y.removeEventListener("touchmove",z),y.removeEventListener("touchend",B)}),Q=An(R=>{var b;s==null||s(R),R.preventDefault(),(b=q.current)===null||b===void 0||b.focus(),_(!0);const P=Qo(R,V.current);if(P){const F=U(P);x(F),a==null||a(F)}const y=Go(N.current);y.addEventListener("mousemove",z),y.addEventListener("mouseup",B)}),D=An(R=>{var b;R.preventDefault();const P=R.changedTouches[0];P!=null&&(V.current=P.identifier),(b=q.current)===null||b===void 0||b.focus(),_(!0);const y=Qo(R,V.current);if(y){const I=U(y);x(I),a==null||a(I)}const F=Go(N.current);F.addEventListener("touchmove",z),F.addEventListener("touchend",B)});return E.useEffect(()=>{const{current:R}=N;R==null||R.addEventListener("touchstart",D);const b=Go(R);return()=>{R==null||R.removeEventListener("touchstart",D),b.removeEventListener("mousemove",z),b.removeEventListener("mouseup",B),b.removeEventListener("touchmove",z),b.removeEventListener("touchend",B)}},[B,z,D]),S.createElement(iA,{$disabled:t,hasMarks:!!se.length,isFocused:O,onMouseDown:Q,orientation:u,ref:X,size:vn(d),...g},S.createElement("input",{disabled:t,name:i,type:"hidden",value:m??0}),se&&se.map(R=>S.createElement(uA,{$disabled:t,"data-testid":"tick",key:R.value/(r-o)*100,orientation:u,style:{[p?"bottom":"left"]:`${(R.value-o)/(r-o)*100}%`}},R.label&&S.createElement(cA,{"aria-hidden":!0,"data-testid":"mark",orientation:u},R.label))),S.createElement(f,{orientation:u,variant:A}),S.createElement(sA,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":u,"aria-valuemax":r,"aria-valuemin":o,"aria-valuenow":m,onBlur:Y,onFocus:ae,onKeyDown:te,orientation:u,ref:q,role:"slider",style:{[p?"bottom":"left"]:`${(p?-100:0)+100*(m-o)/(r-o)}%`},tabIndex:t?void 0:0,variant:A}))});Ki.displayName="Slider";const dA=$.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${wc};
  overflow-y: auto;
`,$c=E.forwardRef(function({children:t,...n},r){return S.createElement(dA,{ref:r,...n},t)});$c.displayName="TableBody";const fA=$.td`
  padding: 0 8px;
`,kt=E.forwardRef(function({children:t,...n},r){return S.createElement(fA,{ref:r,...n},t)});kt.displayName="TableDataCell";const pA=$.thead`
  display: table-header-group;
`,Pc=E.forwardRef(function({children:t,...n},r){return S.createElement(pA,{ref:r,...n},t)});Pc.displayName="TableHead";const hA=$.th`
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
`,ur=E.forwardRef(function({disabled:t=!1,children:n,onClick:r,onTouchStart:o=Qn,sort:i,...a},l){const s=i==="asc"?"ascending":i==="desc"?"descending":void 0;return S.createElement(hA,{$disabled:t,"aria-disabled":t,"aria-sort":s,onClick:t?void 0:r,onTouchStart:t?void 0:o,ref:l,...a},S.createElement("div",null,n))});ur.displayName="TableHeadCell";const mA=$.tr`
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
`,cr=E.forwardRef(function({children:t,...n},r){return S.createElement(mA,{ref:r,...n},t)});cr.displayName="TableRow";const vA=$.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,gA=$(jt)`
  &:before {
    box-shadow: none;
  }
`,h0=E.forwardRef(({children:e,...t},n)=>S.createElement(gA,null,S.createElement(vA,{ref:n,...t},e)));h0.displayName="Table";const yA=$.button`
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
`,zr=E.forwardRef(({value:e,onClick:t,selected:n=!1,children:r,...o},i)=>S.createElement(yA,{"aria-selected":n,selected:n,onClick:a=>t==null?void 0:t(e,a),ref:i,role:"tab",...o},r));zr.displayName="Tab";const xA=$.div`
  ${At()}
  ${Ae()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,m0=E.forwardRef(({children:e,...t},n)=>S.createElement(xA,{ref:n,...t},e));m0.displayName="TabBody";const wA=$.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,bA=$.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;function AA(e,t){const n=[];for(let r=t;r>0;r-=1)n.push(e.splice(0,Math.ceil(e.length/r)));return n}const v0=E.forwardRef(({value:e,onChange:t=Qn,children:n,rows:r=1,...o},i)=>{const a=E.useMemo(()=>{var l;const s=(l=S.Children.map(n,c=>{if(!S.isValidElement(c))return null;const v={selected:c.props.value===e,onClick:t};return S.cloneElement(c,v)}))!==null&&l!==void 0?l:[],u=AA(s,r).map((c,v)=>({key:v,tabs:c})),d=u.findIndex(c=>c.tabs.some(v=>v.props.selected));return u.push(u.splice(d,1)[0]),u},[n,t,r,e]);return S.createElement(wA,{...o,isMultiRow:r>1,role:"tablist",ref:i},a.map(l=>S.createElement(bA,{key:l.key},l.tabs)))});v0.displayName="Tabs";const SA=["blur","focus"],kA=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function Tf(e){return"nativeEvent"in e&&SA.includes(e.type)}function Cf(e){return"nativeEvent"in e&&kA.includes(e.type)}const EA={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},TA=$.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${xc};
  text-align: center;
  font-size: 1rem;
  ${e=>EA[e.position]}
`,CA=$.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,$A=E.forwardRef(({className:e,children:t,disableFocusListener:n=!1,disableMouseListener:r=!1,enterDelay:o=1e3,leaveDelay:i=0,onBlur:a,onClose:l,onFocus:s,onMouseEnter:u,onMouseLeave:d,onOpen:c,style:v,text:A,position:g="top",...w},f)=>{const[p,m]=E.useState(!1),[x,k]=E.useState(),[T,C]=E.useState(),O=!n,_=!r,N=U=>{window.clearTimeout(x),window.clearTimeout(T);const z=window.setTimeout(()=>{m(!0),c==null||c(U)},o);k(z)},q=U=>{U.persist(),Tf(U)?s==null||s(U):Cf(U)&&(u==null||u(U)),N(U)},J=U=>{window.clearTimeout(x),window.clearTimeout(T);const z=window.setTimeout(()=>{m(!1),l==null||l(U)},i);C(z)},X=U=>{U.persist(),Tf(U)?a==null||a(U):Cf(U)&&(d==null||d(U)),J(U)},ae=O?X:void 0,Y=O?q:void 0,V=_?q:void 0,se=_?X:void 0,te=O?0:void 0;return S.createElement(CA,{"data-testid":"tooltip-wrapper",onBlur:ae,onFocus:Y,onMouseEnter:V,onMouseLeave:se,tabIndex:te},S.createElement(TA,{className:e,"data-testid":"tooltip",position:g,ref:f,show:p,style:v,...w},A),t)});$A.displayName="Tooltip";const Vs=$(Sc)`
  white-space: nowrap;
`,g0=W`
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
`,PA=$.ul`
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
`,RA=$.li`
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
`,OA=$.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,DA=$.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${g0};

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
`,$f=$(Ac)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${g0};
`,IA=$.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function Pf(e,t){return e.includes(t)?e.filter(n=>n!==t):[...e,t]}function Rf(e){e.preventDefault()}function y0({className:e,disabled:t,expanded:n,innerRef:r,level:o,select:i,selected:a,style:l,tree:s=[]}){const u=o===0,d=E.useCallback(c=>{var v,A;const g=!!(c.items&&c.items.length>0),w=n.includes(c.id),f=(v=t||c.disabled)!==null&&v!==void 0?v:!1,p=f?Rf:T=>i(T,c),m=f?Rf:T=>i(T,c),x=a===c.id,k=S.createElement(IA,{"aria-hidden":!0},c.icon);return S.createElement(RA,{key:c.label,isRootLevel:u,role:"treeitem","aria-expanded":w,"aria-selected":x,hasItems:g},g?S.createElement(OA,{open:w},S.createElement(DA,{onClick:p,$disabled:f},S.createElement($f,{$disabled:f},k,S.createElement(Vs,null,c.label))),w&&S.createElement(y0,{className:e,disabled:f,expanded:n,level:o+1,select:i,selected:a,style:l,tree:(A=c.items)!==null&&A!==void 0?A:[]})):S.createElement($f,{as:"button",$disabled:f,onClick:m},k,S.createElement(Vs,null,c.label)))},[e,t,n,u,o,i,a,l]);return S.createElement(PA,{className:u?e:void 0,style:u?l:void 0,ref:u?r:void 0,role:u?"tree":"group",isRootLevel:u},s.map(d))}function NA({className:e,defaultExpanded:t=[],defaultSelected:n,disabled:r=!1,expanded:o,onNodeSelect:i,onNodeToggle:a,selected:l,style:s,tree:u=[]},d){const[c,v]=gn({defaultValue:t,onChange:a,onChangePropName:"onNodeToggle",value:o,valuePropName:"expanded"}),[A,g]=gn({defaultValue:n,onChange:i,onChangePropName:"onNodeSelect",value:l,valuePropName:"selected"}),w=E.useCallback((m,x)=>{if(a){const k=Pf(c,x);a(m,k)}v(k=>Pf(k,x))},[c,a,v]),f=E.useCallback((m,x)=>{g(x),i&&i(m,x)},[i,g]),p=E.useCallback((m,x)=>{m.preventDefault(),f(m,x.id),x.items&&x.items.length&&w(m,x.id)},[f,w]);return S.createElement(y0,{className:e,disabled:r,expanded:c,level:0,innerRef:d,select:p,selected:A,style:s,tree:u})}const jA=E.forwardRef(NA);jA.displayName="TreeView";const LA=u0;var _A={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"},FA=_A;const x0=Fe(FA);var MA={name:"rose",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#8a5b68",borderDarkest:"#26030b",borderLight:"#e5bec8",borderLightest:"#f1d4dc",canvas:"#ffffff",canvasText:"#050608",canvasTextDisabled:"#8a5b68",canvasTextDisabledShadow:"#f1d4dc",canvasTextInvert:"#ffffff",checkmark:"#050608",checkmarkDisabled:"#8a5b68",desktopBackground:"#808080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#ab5a71",headerNotActiveBackground:"#a19fa5",headerNotActiveText:"#615f68",headerText:"#ffffff",hoverBackground:"#ab5a71",material:"#d6adb8",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#8a5b68",materialTextDisabledShadow:"#f1d4dc",materialTextInvert:"#ffffff",progress:"#ab5a71",tooltip:"#fefbcc"},BA=MA;const zA=Fe(BA);var UA={name:"rainyDay",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#3d5367",borderDarkest:"#16233b",borderLight:"#91abc2",borderLightest:"#b7cee5",canvas:"#ffffff",canvasText:"#050608",canvasTextDisabled:"#3d5367",canvasTextDisabledShadow:"#b7cee5",canvasTextInvert:"#ffffff",checkmark:"#050608",checkmarkDisabled:"#3d5367",desktopBackground:"#000000",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#4b6480",headerNotActiveBackground:"#7f7f81",headerNotActiveText:"#ced0d9",headerText:"#ffffff",hoverBackground:"#4b6480",material:"#7a99b3",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#3d5367",materialTextDisabledShadow:"#b7cee5",materialTextInvert:"#ffffff",progress:"#4b6480",tooltip:"#fefbcc"},HA=UA;const WA=Fe(HA);var VA={name:"travel",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#695f50",borderDarkest:"#28251e",borderLight:"#9d8f80",borderLightest:"#baae9f",canvas:"#d8d0c8",canvasText:"#28251e",canvasTextDisabled:"#695f50",canvasTextDisabledShadow:"#baae9f",canvasTextInvert:"#ffffff",checkmark:"#28251e",checkmarkDisabled:"#695f50",desktopBackground:"#7c654c",flatDark:"#695f50",flatLight:"#9d8f80",focusSecondary:"#fefe03",headerBackground:"#404878",headerNotActiveBackground:"#605848",headerNotActiveText:"#908070",headerText:"#d8d0c8",hoverBackground:"#48604f",material:"#908070",materialDark:"#9a9e9c",materialText:"#28251e",materialTextDisabled:"#695f50",materialTextDisabledShadow:"#baae9f",materialTextInvert:"#ffffff",progress:"#48604f",tooltip:"#fefbcc"},QA=VA;const GA=Fe(QA);var KA={name:"marine",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#3c8d88",borderDarkest:"#050608",borderLight:"#98d2cb",borderLightest:"#b1dfdf",canvas:"#c3e2da",canvasText:"#050608",canvasTextDisabled:"#3c8d88",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",checkmark:"#050608",checkmarkDisabled:"#3c8d88",desktopBackground:"#2c4e47",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#000080",headerNotActiveBackground:"#7f7f7f",headerNotActiveText:"#ced0cf",headerText:"#ffffff",hoverBackground:"#000080",material:"#75c1ba",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#3c8d88",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#000080",tooltip:"#fefbcc"},qA=KA;const JA=Fe(qA);var YA={name:"olive",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#4f4c02",borderDarkest:"#000000",borderLight:"#9d9d11",borderLightest:"#fcfd3e",canvas:"#ffffff",canvasText:"#000000",canvasTextDisabled:"#4f4c02",canvasTextDisabledShadow:"#fcfd3e",canvasTextInvert:"#000000",checkmark:"#000000",checkmarkDisabled:"#4f4c02",desktopBackground:"#666633",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#000000",headerBackground:"#F3DE2C",headerNotActiveBackground:"#4f4c02",headerNotActiveText:"#807f00",headerText:"#000000",hoverBackground:"#F3DE2C",material:"#807f00",materialDark:"#4f4c02",materialText:"#000000",materialTextDisabled:"#4f4c02",materialTextDisabledShadow:"#fcfd3e",materialTextInvert:"#000000",progress:"#F3DE2C",tooltip:"#fefbcc"},XA=YA;const ZA=Fe(XA);var eS={name:"theSixtiesUSA",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#6c1f71",borderDarkest:"#010001",borderLight:"#d982de",borderLightest:"#df9be7",canvas:"#ffffff",canvasText:"#010001",canvasTextDisabled:"#6c1f71",canvasTextDisabledShadow:"#df9be7",canvasTextInvert:"#010001",checkmark:"#010001",checkmarkDisabled:"#6c1f71",desktopBackground:"#92458a",flatDark:"#d067d7",flatLight:"#df9be7",focusSecondary:"#fefe03",headerBackground:"#050080",headerNotActiveBackground:"#a130a9",headerNotActiveText:"#df9be7",headerText:"#ffffff",hoverBackground:"#0f0",material:"#d067d7",materialDark:"#9a9e9c",materialText:"#010001",materialTextDisabled:"#6c1f71",materialTextDisabledShadow:"#df9be7",materialTextInvert:"#010001",progress:"#0f0",tooltip:"#fefbcc"},tS=eS;const nS=Fe(tS);var rS={name:"candy",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#d1579e",borderDarkest:"#44132f",borderLight:"#f1acd5",borderLightest:"#EFF1F3",canvas:"#EFF1F3",canvasText:"#000000",canvasTextDisabled:"#d1579e",canvasTextDisabledShadow:"#EFF1F3",canvasTextInvert:"#EFF1F3",checkmark:"#000000",checkmarkDisabled:"#d1579e",desktopBackground:"#b477bd",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#87255B",headerNotActiveBackground:"#a08796",headerNotActiveText:"#EBD2BE",headerText:"#EFF1F3",hoverBackground:"#256EFF",material:"#E5A4CB",materialDark:"#9a9e9c",materialText:"#000000",materialTextDisabled:"#d1579e",materialTextDisabledShadow:"#EFF1F3",materialTextInvert:"#EFF1F3",progress:"#256EFF",tooltip:"#fefbcc"},oS=rS;const iS=Fe(oS);var aS={name:"tokyoDark",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#1f2223",borderDarkest:"#070809",borderLight:"#5e696a",borderLightest:"#93a0a1",canvas:"#2f3435",canvasText:"#F4F4ED",canvasTextDisabled:"#1f2223",canvasTextDisabledShadow:"#93a0a1",canvasTextInvert:"#ffffff",checkmark:"#F4F4ED",checkmarkDisabled:"#1f2223",desktopBackground:"#181a1b",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#20FC8F",headerBackground:"#1f2223",headerNotActiveBackground:"#5e696a",headerNotActiveText:"#F4F4ED",headerText:"#F4F4ED",hoverBackground:"#F61067",material:"#465051",materialDark:"#1f2223",materialText:"#F4F4ED",materialTextDisabled:"#1f2223",materialTextDisabledShadow:"#93a0a1",materialTextInvert:"#ffffff",progress:"#F61067",tooltip:"#fefbcc"},lS=aS;const sS=Fe(lS);var uS={name:"vaporTeal",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#00706f",borderDarkest:"#000000",borderLight:"#2fcecd",borderLightest:"#58ffff",canvas:"#98DFEA",canvasText:"#000000",canvasTextDisabled:"#00706f",canvasTextDisabledShadow:"#58ffff",canvasTextInvert:"#000000",checkmark:"#000000",checkmarkDisabled:"#00706f",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#FCF6BD",headerBackground:"#246A73",headerNotActiveBackground:"#2fcecd",headerNotActiveText:"#246A73",headerText:"#58ffff",hoverBackground:"#FF99C8",material:"#01a8a8",materialDark:"#246A73",materialText:"#000000",materialTextDisabled:"#00706f",materialTextDisabledShadow:"#58ffff",materialTextInvert:"#000000",progress:"#FF99C8",tooltip:"#fefbcc"},cS=uS;const dS=Fe(cS),fS={original:x0,rose:zA,rainyDay:WA,travel:GA,marine:JA,olive:ZA,theSixtiesUSA:nS,candy:iS,tokyoDark:sS,vaporTeal:dS},pS="/assets/ms_sans_serif-Du8rjN1q.woff2",hS="/assets/ms_sans_serif_bold-D5dpRRHG.woff2",mS="FETCH_COINS_INFO_REQUEST",w0="FETCH_COINS_INFO_SUCCESS",vS="FETCH_COINS_INFO_ERROR",gS="FETCH_COINS_DATA_REQUEST",b0="FETCH_COINS_DATA_SUCCESS",yS="FETCH_COINS_DATA_ERROR",xS="FETCH_EVENTS_SUCCESS",wS="SET_EVENT_SEEN",bS="FETCH_NEWS_SUCCESS",A0="FOLLOW_COIN",S0="UNFOLLOW_COIN",k0="SET_THEME",E0="SET_BACKGROUND",T0="SET_CUSTOM_BACKGROUND",C0="TOGGLE_VINTAGE_FONT",$0="SET_FONT_SIZE",AS="SET_USER_HOLDINGS",SS="SET_USER_CURRENCY",kS="DELETE_USER_HOLDINGS",ES="SORT_USER_HOLDINGS",P0="TOGGLE_SCAN_LINES",R0="SET_SCAN_LINES_INTENSITY";var Rc={};Object.defineProperty(Rc,"__esModule",{value:!0});function O0(e,t){if(t)return e;throw new Error("Unhandled discriminated union member: "+JSON.stringify(e))}Rc.assertNever=O0;var TS=Rc.default=O0;function D0(e,t){return function(){return e.apply(t,arguments)}}const{toString:CS}=Object.prototype,{getPrototypeOf:Oc}=Object,el=(e=>t=>{const n=CS.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Lt=e=>(e=e.toLowerCase(),t=>el(t)===e),tl=e=>t=>typeof t===e,{isArray:Cr}=Array,fo=tl("undefined");function $S(e){return e!==null&&!fo(e)&&e.constructor!==null&&!fo(e.constructor)&&ut(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const I0=Lt("ArrayBuffer");function PS(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&I0(e.buffer),t}const RS=tl("string"),ut=tl("function"),N0=tl("number"),nl=e=>e!==null&&typeof e=="object",OS=e=>e===!0||e===!1,di=e=>{if(el(e)!=="object")return!1;const t=Oc(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},DS=Lt("Date"),IS=Lt("File"),NS=Lt("Blob"),jS=Lt("FileList"),LS=e=>nl(e)&&ut(e.pipe),_S=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||ut(e.append)&&((t=el(e))==="formdata"||t==="object"&&ut(e.toString)&&e.toString()==="[object FormData]"))},FS=Lt("URLSearchParams"),MS=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Co(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Cr(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let l;for(r=0;r<a;r++)l=i[r],t.call(null,e[l],l,e)}}function j0(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const L0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,_0=e=>!fo(e)&&e!==L0;function Qs(){const{caseless:e}=_0(this)&&this||{},t={},n=(r,o)=>{const i=e&&j0(t,o)||o;di(t[i])&&di(r)?t[i]=Qs(t[i],r):di(r)?t[i]=Qs({},r):Cr(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&Co(arguments[r],n);return t}const BS=(e,t,n,{allOwnKeys:r}={})=>(Co(t,(o,i)=>{n&&ut(o)?e[i]=D0(o,n):e[i]=o},{allOwnKeys:r}),e),zS=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),US=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},HS=(e,t,n,r)=>{let o,i,a;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],(!r||r(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=n!==!1&&Oc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},WS=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},VS=e=>{if(!e)return null;if(Cr(e))return e;let t=e.length;if(!N0(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},QS=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Oc(Uint8Array)),GS=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},KS=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},qS=Lt("HTMLFormElement"),JS=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Of=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),YS=Lt("RegExp"),F0=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Co(n,(o,i)=>{let a;(a=t(o,i,e))!==!1&&(r[i]=a||o)}),Object.defineProperties(e,r)},XS=e=>{F0(e,(t,n)=>{if(ut(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(ut(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ZS=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Cr(e)?r(e):r(String(e).split(t)),n},ek=()=>{},tk=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Dl="abcdefghijklmnopqrstuvwxyz",Df="0123456789",M0={DIGIT:Df,ALPHA:Dl,ALPHA_DIGIT:Dl+Dl.toUpperCase()+Df},nk=(e=16,t=M0.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function rk(e){return!!(e&&ut(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const ok=e=>{const t=new Array(10),n=(r,o)=>{if(nl(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=Cr(r)?[]:{};return Co(r,(a,l)=>{const s=n(a,o+1);!fo(s)&&(i[l]=s)}),t[o]=void 0,i}}return r};return n(e,0)},ik=Lt("AsyncFunction"),ak=e=>e&&(nl(e)||ut(e))&&ut(e.then)&&ut(e.catch),j={isArray:Cr,isArrayBuffer:I0,isBuffer:$S,isFormData:_S,isArrayBufferView:PS,isString:RS,isNumber:N0,isBoolean:OS,isObject:nl,isPlainObject:di,isUndefined:fo,isDate:DS,isFile:IS,isBlob:NS,isRegExp:YS,isFunction:ut,isStream:LS,isURLSearchParams:FS,isTypedArray:QS,isFileList:jS,forEach:Co,merge:Qs,extend:BS,trim:MS,stripBOM:zS,inherits:US,toFlatObject:HS,kindOf:el,kindOfTest:Lt,endsWith:WS,toArray:VS,forEachEntry:GS,matchAll:KS,isHTMLForm:qS,hasOwnProperty:Of,hasOwnProp:Of,reduceDescriptors:F0,freezeMethods:XS,toObjectSet:ZS,toCamelCase:JS,noop:ek,toFiniteNumber:tk,findKey:j0,global:L0,isContextDefined:_0,ALPHABET:M0,generateString:nk,isSpecCompliantForm:rk,toJSONObject:ok,isAsyncFn:ik,isThenable:ak};function ue(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}j.inherits(ue,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:j.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const B0=ue.prototype,z0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{z0[e]={value:e}});Object.defineProperties(ue,z0);Object.defineProperty(B0,"isAxiosError",{value:!0});ue.from=(e,t,n,r,o,i)=>{const a=Object.create(B0);return j.toFlatObject(e,a,function(s){return s!==Error.prototype},l=>l!=="isAxiosError"),ue.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const lk=null;function Gs(e){return j.isPlainObject(e)||j.isArray(e)}function U0(e){return j.endsWith(e,"[]")?e.slice(0,-2):e}function If(e,t,n){return e?e.concat(t).map(function(o,i){return o=U0(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function sk(e){return j.isArray(e)&&!e.some(Gs)}const uk=j.toFlatObject(j,{},null,function(t){return/^is[A-Z]/.test(t)});function rl(e,t,n){if(!j.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=j.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,f){return!j.isUndefined(f[w])});const r=n.metaTokens,o=n.visitor||d,i=n.dots,a=n.indexes,s=(n.Blob||typeof Blob<"u"&&Blob)&&j.isSpecCompliantForm(t);if(!j.isFunction(o))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(j.isDate(g))return g.toISOString();if(!s&&j.isBlob(g))throw new ue("Blob is not supported. Use a Buffer instead.");return j.isArrayBuffer(g)||j.isTypedArray(g)?s&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function d(g,w,f){let p=g;if(g&&!f&&typeof g=="object"){if(j.endsWith(w,"{}"))w=r?w:w.slice(0,-2),g=JSON.stringify(g);else if(j.isArray(g)&&sk(g)||(j.isFileList(g)||j.endsWith(w,"[]"))&&(p=j.toArray(g)))return w=U0(w),p.forEach(function(x,k){!(j.isUndefined(x)||x===null)&&t.append(a===!0?If([w],k,i):a===null?w:w+"[]",u(x))}),!1}return Gs(g)?!0:(t.append(If(f,w,i),u(g)),!1)}const c=[],v=Object.assign(uk,{defaultVisitor:d,convertValue:u,isVisitable:Gs});function A(g,w){if(!j.isUndefined(g)){if(c.indexOf(g)!==-1)throw Error("Circular reference detected in "+w.join("."));c.push(g),j.forEach(g,function(p,m){(!(j.isUndefined(p)||p===null)&&o.call(t,p,j.isString(m)?m.trim():m,w,v))===!0&&A(p,w?w.concat(m):[m])}),c.pop()}}if(!j.isObject(e))throw new TypeError("data must be an object");return A(e),t}function Nf(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Dc(e,t){this._pairs=[],e&&rl(e,this,t)}const H0=Dc.prototype;H0.append=function(t,n){this._pairs.push([t,n])};H0.toString=function(t){const n=t?function(r){return t.call(this,r,Nf)}:Nf;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function ck(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function W0(e,t,n){if(!t)return e;const r=n&&n.encode||ck,o=n&&n.serialize;let i;if(o?i=o(t,n):i=j.isURLSearchParams(t)?t.toString():new Dc(t,n).toString(r),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class jf{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){j.forEach(this.handlers,function(r){r!==null&&t(r)})}}const V0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},dk=typeof URLSearchParams<"u"?URLSearchParams:Dc,fk=typeof FormData<"u"?FormData:null,pk=typeof Blob<"u"?Blob:null,hk={isBrowser:!0,classes:{URLSearchParams:dk,FormData:fk,Blob:pk},protocols:["http","https","file","blob","url","data"]},Q0=typeof window<"u"&&typeof document<"u",mk=(e=>Q0&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),vk=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",gk=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Q0,hasStandardBrowserEnv:mk,hasStandardBrowserWebWorkerEnv:vk},Symbol.toStringTag,{value:"Module"})),Pt={...gk,...hk};function yk(e,t){return rl(e,new Pt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return Pt.isNode&&j.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function xk(e){return j.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function wk(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function G0(e){function t(n,r,o,i){let a=n[i++];if(a==="__proto__")return!0;const l=Number.isFinite(+a),s=i>=n.length;return a=!a&&j.isArray(o)?o.length:a,s?(j.hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!l):((!o[a]||!j.isObject(o[a]))&&(o[a]=[]),t(n,r,o[a],i)&&j.isArray(o[a])&&(o[a]=wk(o[a])),!l)}if(j.isFormData(e)&&j.isFunction(e.entries)){const n={};return j.forEachEntry(e,(r,o)=>{t(xk(r),o,n,0)}),n}return null}function bk(e,t,n){if(j.isString(e))try{return(t||JSON.parse)(e),j.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const $o={transitional:V0,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=j.isObject(t);if(i&&j.isHTMLForm(t)&&(t=new FormData(t)),j.isFormData(t))return o?JSON.stringify(G0(t)):t;if(j.isArrayBuffer(t)||j.isBuffer(t)||j.isStream(t)||j.isFile(t)||j.isBlob(t))return t;if(j.isArrayBufferView(t))return t.buffer;if(j.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return yk(t,this.formSerializer).toString();if((l=j.isFileList(t))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return rl(l?{"files[]":t}:t,s&&new s,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),bk(t)):t}],transformResponse:[function(t){const n=this.transitional||$o.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&j.isString(t)&&(r&&!this.responseType||o)){const a=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(a)throw l.name==="SyntaxError"?ue.from(l,ue.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Pt.classes.FormData,Blob:Pt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};j.forEach(["delete","get","head","post","put","patch"],e=>{$o.headers[e]={}});const Ak=j.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Sk=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),n=a.substring(0,o).trim().toLowerCase(),r=a.substring(o+1).trim(),!(!n||t[n]&&Ak[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Lf=Symbol("internals");function _r(e){return e&&String(e).trim().toLowerCase()}function fi(e){return e===!1||e==null?e:j.isArray(e)?e.map(fi):String(e)}function kk(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Ek=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Il(e,t,n,r,o){if(j.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!j.isString(t)){if(j.isString(r))return t.indexOf(r)!==-1;if(j.isRegExp(r))return r.test(t)}}function Tk(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Ck(e,t){const n=j.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,a){return this[r].call(this,t,o,i,a)},configurable:!0})})}class ct{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(l,s,u){const d=_r(s);if(!d)throw new Error("header name must be a non-empty string");const c=j.findKey(o,d);(!c||o[c]===void 0||u===!0||u===void 0&&o[c]!==!1)&&(o[c||s]=fi(l))}const a=(l,s)=>j.forEach(l,(u,d)=>i(u,d,s));return j.isPlainObject(t)||t instanceof this.constructor?a(t,n):j.isString(t)&&(t=t.trim())&&!Ek(t)?a(Sk(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=_r(t),t){const r=j.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return kk(o);if(j.isFunction(n))return n.call(this,o,r);if(j.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=_r(t),t){const r=j.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Il(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(a){if(a=_r(a),a){const l=j.findKey(r,a);l&&(!n||Il(r,r[l],l,n))&&(delete r[l],o=!0)}}return j.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||Il(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return j.forEach(this,(o,i)=>{const a=j.findKey(r,i);if(a){n[a]=fi(o),delete n[i];return}const l=t?Tk(i):String(i).trim();l!==i&&delete n[i],n[l]=fi(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return j.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&j.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Lf]=this[Lf]={accessors:{}}).accessors,o=this.prototype;function i(a){const l=_r(a);r[l]||(Ck(o,a),r[l]=!0)}return j.isArray(t)?t.forEach(i):i(t),this}}ct.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);j.reduceDescriptors(ct.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});j.freezeMethods(ct);function Nl(e,t){const n=this||$o,r=t||n,o=ct.from(r.headers);let i=r.data;return j.forEach(e,function(l){i=l.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function K0(e){return!!(e&&e.__CANCEL__)}function Po(e,t,n){ue.call(this,e??"canceled",ue.ERR_CANCELED,t,n),this.name="CanceledError"}j.inherits(Po,ue,{__CANCEL__:!0});function $k(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ue("Request failed with status code "+n.status,[ue.ERR_BAD_REQUEST,ue.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Pk=Pt.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const a=[e+"="+encodeURIComponent(t)];j.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),j.isString(r)&&a.push("path="+r),j.isString(o)&&a.push("domain="+o),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Rk(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Ok(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function q0(e,t){return e&&!Rk(t)?Ok(e,t):t}const Dk=Pt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let a=i;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(a){const l=j.isString(a)?o(a):a;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function Ik(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Nk(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,a;return t=t!==void 0?t:1e3,function(s){const u=Date.now(),d=r[i];a||(a=u),n[o]=s,r[o]=u;let c=i,v=0;for(;c!==o;)v+=n[c++],c=c%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-a<t)return;const A=d&&u-d;return A?Math.round(v*1e3/A):void 0}}function _f(e,t){let n=0;const r=Nk(50,250);return o=>{const i=o.loaded,a=o.lengthComputable?o.total:void 0,l=i-n,s=r(l),u=i<=a;n=i;const d={loaded:i,total:a,progress:a?i/a:void 0,bytes:l,rate:s||void 0,estimated:s&&a&&u?(a-i)/s:void 0,event:o};d[t?"download":"upload"]=!0,e(d)}}const jk=typeof XMLHttpRequest<"u",Lk=jk&&function(e){return new Promise(function(n,r){let o=e.data;const i=ct.from(e.headers).normalize();let{responseType:a,withXSRFToken:l}=e,s;function u(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}let d;if(j.isFormData(o)){if(Pt.hasStandardBrowserEnv||Pt.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((d=i.getContentType())!==!1){const[w,...f]=d?d.split(";").map(p=>p.trim()).filter(Boolean):[];i.setContentType([w||"multipart/form-data",...f].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const w=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(w+":"+f))}const v=q0(e.baseURL,e.url);c.open(e.method.toUpperCase(),W0(v,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function A(){if(!c)return;const w=ct.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),p={data:!a||a==="text"||a==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:w,config:e,request:c};$k(function(x){n(x),u()},function(x){r(x),u()},p),c=null}if("onloadend"in c?c.onloadend=A:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(A)},c.onabort=function(){c&&(r(new ue("Request aborted",ue.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new ue("Network Error",ue.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const p=e.transitional||V0;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new ue(f,p.clarifyTimeoutError?ue.ETIMEDOUT:ue.ECONNABORTED,e,c)),c=null},Pt.hasStandardBrowserEnv&&(l&&j.isFunction(l)&&(l=l(e)),l||l!==!1&&Dk(v))){const w=e.xsrfHeaderName&&e.xsrfCookieName&&Pk.read(e.xsrfCookieName);w&&i.set(e.xsrfHeaderName,w)}o===void 0&&i.setContentType(null),"setRequestHeader"in c&&j.forEach(i.toJSON(),function(f,p){c.setRequestHeader(p,f)}),j.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),a&&a!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",_f(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",_f(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=w=>{c&&(r(!w||w.type?new Po(null,e,c):w),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const g=Ik(v);if(g&&Pt.protocols.indexOf(g)===-1){r(new ue("Unsupported protocol "+g+":",ue.ERR_BAD_REQUEST,e));return}c.send(o||null)})},Ks={http:lk,xhr:Lk};j.forEach(Ks,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ff=e=>`- ${e}`,_k=e=>j.isFunction(e)||e===null||e===!1,J0={getAdapter:e=>{e=j.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let a;if(r=n,!_k(n)&&(r=Ks[(a=String(n)).toLowerCase()],r===void 0))throw new ue(`Unknown adapter '${a}'`);if(r)break;o[a||"#"+i]=r}if(!r){const i=Object.entries(o).map(([l,s])=>`adapter ${l} `+(s===!1?"is not supported by the environment":"is not available in the build"));let a=t?i.length>1?`since :
`+i.map(Ff).join(`
`):" "+Ff(i[0]):"as no adapter specified";throw new ue("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:Ks};function jl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Po(null,e)}function Mf(e){return jl(e),e.headers=ct.from(e.headers),e.data=Nl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),J0.getAdapter(e.adapter||$o.adapter)(e).then(function(r){return jl(e),r.data=Nl.call(e,e.transformResponse,r),r.headers=ct.from(r.headers),r},function(r){return K0(r)||(jl(e),r&&r.response&&(r.response.data=Nl.call(e,e.transformResponse,r.response),r.response.headers=ct.from(r.response.headers))),Promise.reject(r)})}const Bf=e=>e instanceof ct?{...e}:e;function br(e,t){t=t||{};const n={};function r(u,d,c){return j.isPlainObject(u)&&j.isPlainObject(d)?j.merge.call({caseless:c},u,d):j.isPlainObject(d)?j.merge({},d):j.isArray(d)?d.slice():d}function o(u,d,c){if(j.isUndefined(d)){if(!j.isUndefined(u))return r(void 0,u,c)}else return r(u,d,c)}function i(u,d){if(!j.isUndefined(d))return r(void 0,d)}function a(u,d){if(j.isUndefined(d)){if(!j.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function l(u,d,c){if(c in t)return r(u,d);if(c in e)return r(void 0,u)}const s={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(u,d)=>o(Bf(u),Bf(d),!0)};return j.forEach(Object.keys(Object.assign({},e,t)),function(d){const c=s[d]||o,v=c(e[d],t[d],d);j.isUndefined(v)&&c!==l||(n[d]=v)}),n}const Y0="1.6.8",Ic={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ic[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const zf={};Ic.transitional=function(t,n,r){function o(i,a){return"[Axios v"+Y0+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,l)=>{if(t===!1)throw new ue(o(a," has been removed"+(n?" in "+n:"")),ue.ERR_DEPRECATED);return n&&!zf[a]&&(zf[a]=!0,console.warn(o(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,a,l):!0}};function Fk(e,t,n){if(typeof e!="object")throw new ue("options must be an object",ue.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const l=e[i],s=l===void 0||a(l,i,e);if(s!==!0)throw new ue("option "+i+" must be "+s,ue.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ue("Unknown option "+i,ue.ERR_BAD_OPTION)}}const qs={assertOptions:Fk,validators:Ic},Jt=qs.validators;class _n{constructor(t){this.defaults=t,this.interceptors={request:new jf,response:new jf}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=br(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&qs.assertOptions(r,{silentJSONParsing:Jt.transitional(Jt.boolean),forcedJSONParsing:Jt.transitional(Jt.boolean),clarifyTimeoutError:Jt.transitional(Jt.boolean)},!1),o!=null&&(j.isFunction(o)?n.paramsSerializer={serialize:o}:qs.assertOptions(o,{encode:Jt.function,serialize:Jt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=i&&j.merge(i.common,i[n.method]);i&&j.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=ct.concat(a,i);const l=[];let s=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(s=s&&w.synchronous,l.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let d,c=0,v;if(!s){const g=[Mf.bind(this),void 0];for(g.unshift.apply(g,l),g.push.apply(g,u),v=g.length,d=Promise.resolve(n);c<v;)d=d.then(g[c++],g[c++]);return d}v=l.length;let A=n;for(c=0;c<v;){const g=l[c++],w=l[c++];try{A=g(A)}catch(f){w.call(this,f);break}}try{d=Mf.call(this,A)}catch(g){return Promise.reject(g)}for(c=0,v=u.length;c<v;)d=d.then(u[c++],u[c++]);return d}getUri(t){t=br(this.defaults,t);const n=q0(t.baseURL,t.url);return W0(n,t.params,t.paramsSerializer)}}j.forEach(["delete","get","head","options"],function(t){_n.prototype[t]=function(n,r){return this.request(br(r||{},{method:t,url:n,data:(r||{}).data}))}});j.forEach(["post","put","patch"],function(t){function n(r){return function(i,a,l){return this.request(br(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}_n.prototype[t]=n(),_n.prototype[t+"Form"]=n(!0)});class Nc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(l=>{r.subscribe(l),i=l}).then(o);return a.cancel=function(){r.unsubscribe(i)},a},t(function(i,a,l){r.reason||(r.reason=new Po(i,a,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Nc(function(o){t=o}),cancel:t}}}function Mk(e){return function(n){return e.apply(null,n)}}function Bk(e){return j.isObject(e)&&e.isAxiosError===!0}const Js={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Js).forEach(([e,t])=>{Js[t]=e});function X0(e){const t=new _n(e),n=D0(_n.prototype.request,t);return j.extend(n,_n.prototype,t,{allOwnKeys:!0}),j.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return X0(br(e,o))},n}const Te=X0($o);Te.Axios=_n;Te.CanceledError=Po;Te.CancelToken=Nc;Te.isCancel=K0;Te.VERSION=Y0;Te.toFormData=rl;Te.AxiosError=ue;Te.Cancel=Te.CanceledError;Te.all=function(t){return Promise.all(t)};Te.spread=Mk;Te.isAxiosError=Bk;Te.mergeConfig=br;Te.AxiosHeaders=ct;Te.formToJSON=e=>G0(j.isHTMLForm(e)?new FormData(e):e);Te.getAdapter=J0.getAdapter;Te.HttpStatusCode=Js;Te.default=Te;const Ll="https://www.cryptocompare.com";class zk{constructor(){this.fetchEvents=async()=>{const r=(await Te.get("https://api.coingecko.com/api/v3/events?upcoming_events_only=true")).data.data;return r.forEach(o=>o.id=o.organizer+o.title),r},this.fetchNews=async({timestamp:t,sortOrder:n="latest",limit:r=15})=>(await this.axios.get("/data/v2/news/",{params:{lTs:t,sortOrder:n,lang:"EN"}})).data.Data.splice(0,r),this.fetchTopList=async(t=30,n="EUR")=>(await this.axios.get("/data/top/totalvolfull",{params:{limit:t,tsym:n}})).data.Data.map(l=>l.CoinInfo.Name),this.fetchCoinsInfo=async()=>{const r=(await this.axios.get("/data/all/coinlist")).data.Data,o={};return Object.keys(r).sort((a,l)=>parseInt(r[a].SortOrder)-parseInt(r[l].SortOrder)).forEach(a=>{const l=r[a];o[a]={name:l.Name,symbol:l.Symbol,fullName:l.FullName.split(" ").join("_"),coinName:l.CoinName.split(" ").join("_"),imageURL:Ll+l.ImageUrl,totalCoinSupply:l.TotalCoinSupply,totalCoinsMined:l.TotalCoinsMined,sortOrder:parseInt(l.SortOrder)}}),o},this.fetchCoinsData=async(t,n="EUR")=>{const r=await this.axios.get("data/pricemultifull",{params:{fsyms:t.join(","),tsyms:n}}),o={},i=r.data.RAW;return Object.keys(i).forEach(a=>{o[a]={...i[a][n],imageURL:Ll+i[a][n].IMAGEURL}}),o},this.fetchCoinsDisplayData=async(t,n="EUR")=>{const r=await this.axios.get("data/pricemultifull",{params:{fsyms:t.join(","),tsyms:n}}),o={},i=r.data.DISPLAY;return Object.keys(i).forEach(a=>{o[a]={...i[a][n],imageURL:Ll+i[a][n].IMAGEURL}}),o},this.fetchCoinsHistoricalData=async(t,n,r="EUR")=>{let i,a,l;switch(n){case"1H":a=60,i=`https://min-api.cryptocompare.com/data/histominute?fsym=${t}&tsym=${r}&limit=${a}`;break;case"24H":a=24*60,l=a/180,i=`https://min-api.cryptocompare.com/data/histominute?fsym=${t}&tsym=${r}&limit=180&aggregate=${l}`;break;case"1M":a=30*24,l=a/180,i=`https://min-api.cryptocompare.com/data/histohour?fsym=${t}&tsym=${r}&limit=180&aggregate=${l}`;break;case"3M":a=90,i=`https://min-api.cryptocompare.com/data/histoday?fsym=${t}&tsym=${r}&limit=180`;break;case"1Y":a=360,l=a/180,i=`https://min-api.cryptocompare.com/data/histoday?fsym=${t}&tsym=EUR&limit=180&aggregate=${l}`;break;default:TS(n)}return(await this.axios.get(i)).data.Data},this.axios=Te.create({baseURL:"https://min-api.cryptocompare.com"})}}const Ys=new zk,Uk=e=>({type:w0,payload:e}),Z0=()=>async e=>{e({type:mS});try{const t=await Ys.fetchCoinsInfo(),n=await Ys.fetchTopList();e(Uk({top:n,info:t}))}catch{e({type:vS})}},Hk=e=>({type:b0,payload:e}),Wk=()=>async(e,t)=>{e({type:gS});try{const n=t(),r=n.user.currency,o=Object.keys(n.user.wallet),i=n.user.followed,a=n.coins.top,l=[...new Set([...i,...a||[],...o||[]])],s=await Ys.fetchCoinsData(l,r);e(Hk(s))}catch{e({type:yS})}},Vk="foresome95",Qk="0.0.1",Gk=["Artur Bień","Marcus Yeagle"],Kk="Golf app",qk=["react","styled-components","windows95","vaporwave"],Jk={dev:"vite",build:"tsc && vite build",lint:"eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",preview:"vite preview"},Yk={"@vitejs/plugin-react":"^4.2.1","array-move":"^2.1.0","assert-never":"^1.2.1",axios:"^1.6.8","lodash.throttle":"^4.1.1","prop-types":"^15.6.2",react:"^16.7.0","react-dom":"^16.7.0","react-redux":"^6.0.0","react-router":"^5.2.0","react-router-dom":"^5.2.0","react-sortable-hoc":"^1.11.0",react95:"^4.0.0",recharts:"^2.1.15",redux:"^4.0.1","redux-thunk":"^2.3.0","styled-components":"^5.3.3"},Xk={"@babel/core":"^7.2.2","@types/lodash.throttle":"^4.1.7","@types/react":"^17.0.3","@types/react-dom":"^17.0.2","@types/react-redux":"^7.1.16","@types/react-router-dom":"^5.1.7","@types/styled-components":"^5.1.9",typescript:"^4.7.3",vite:"^5.2.0"},Zk={extends:"react-app"},eE=[">0.2%","not dead","not ie <= 11","not op_mini all"],tE={name:Vk,version:Qk,authors:Gk,description:Kk,keywords:qk,scripts:Jk,dependencies:Yk,devDependencies:Xk,eslintConfig:Zk,browserslist:eE},nE=$.span`
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
`,rE=$.img.attrs(()=>({loading:"lazy"}))`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  transition: 0.2s all ease-out;
`,ev=({imageURL:e,height:t,...n})=>h.jsx(nE,{...n,height:t,children:e&&h.jsx(rE,{src:e,alt:"icon"})});ev.propTypes={imageURL:Et.string};const oE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAARVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADc6ur3AAAAFnRSTlMAjNzYiLSwDnlOOhR07McoJPCgnG5kHZE9igAAATtJREFUeNrt28tOwzAQQNEpbZP0kUAh8f9/KqwQA8UlNBUSPWc/lu5uLNkBAAAAAAAAAABwxvSwoCn+TlcWdIwfEyJESJ0QIULqhAgRUifk3dQl42ZBY5dMcUsPJdnEglYlWccHQoQIESJEiJA3QoQIuXXIIRv6pIuqNg+3UdX1yXDI4ir7kj3FHNuSNDHHY8n2QoQIESJEiBAhQoQIOW/cJqtd1kZNu836kvTb7MJhu2yVh8eoey7JEHMcyixtzDGU5EWIECFChAgRIkSIkGtDxiaZucY32ec1vslmrvFNMt7LxUqIECFChAgRIkSIkLsNiTYbTkl3aTiLqu6UDG3m4ZkQIUKECBEiRIgQIb8zHZNxtaDxmExR5xu4ECHfEyJESJ0QIULqhPz7kGm9oCkAAAAAAAAAAAC+egX+heiUR07piAAAAABJRU5ErkJggg==",tv=$(h0)`
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
`,Xs=[{id:1,date:"2024-11-17",betType:"Matchup",players:[{name:"Hiers, Paul",indx:3,tee:"black"},{name:"Sickles, Corey",indx:11,tee:"blue"}],score:null,action:null,sides:[{side:"Hiers",action:0},{side:"Sickles",action:-2.5}],prop:""},{id:2,date:"2024-11-17",betType:"Gross Score",players:[{name:"Atkinson, John",indx:3,tee:"blue"}],score:80,action:null,sides:[{side:"Over",action:-110},{side:"Under",action:-110}],prop:""},{id:3,date:"2024-11-17",betType:"Gross Score",players:[{name:"Taylor, Troy",indx:-2,tee:"black"}],score:68.5,action:null,sides:[{side:"Over",action:-110},{side:"Under",action:-110}],prop:""},{id:4,date:"2024-11-17",betType:"Group Net Winner",players:[{name:"Weiss, Frank",indx:9,tee:"blue"}],score:null,action:150,sides:null,prop:""},{id:5,date:"2024-11-17",betType:"Group Net Winner",players:[{name:"Steele, Matt",indx:9,tee:"blue"}],score:null,action:150,sides:null,prop:""},{id:6,date:"2024-11-17",betType:"Group Net Winner",players:[{name:"Westerheide, Pete",indx:9,tee:"blue"}],score:null,action:150,sides:null,prop:""},{id:7,date:"2024-11-17",betType:"Group Net Winner",players:[{name:"Yeagle, Marcus",indx:10,tee:"blue"}],score:null,action:150,sides:null,prop:""},{id:8,date:"2024-11-17",betType:"Proposition",players:[],score:null,action:150,sides:[{side:"Yes",action:-110},{side:"No",action:-110}],prop:"Gross Birdie on any 3 of the 5 par 3s"}],iE=({detailData:e,setIsOpened:t,isOpened:n})=>{console.log(e);function r(){return e.betType==="Gross Score"?`${e.score} - ${e.betType}`:e.betType}function o(){return h.jsx(h.Fragment,{children:h.jsx("ul",{children:e.players.map((i,a)=>h.jsxs("li",{children:[i.name," (",i.indx,")"]},i+a))})})}return h.jsx(Km,{theme:x0,children:n&&h.jsx(aE,{onClick:()=>t(!1),children:h.jsx(lE,{onClick:i=>i.stopPropagation(),children:h.jsx("div",{style:{minWidth:"250px"},children:h.jsxs(On,{variant:"flat",label:r(),children:[o(),e.betType==="Group Net Winner"?h.jsxs("div",{children:[h.jsxs("p",{children:["+",e.action]}),h.jsx("br",{}),h.jsxs(On,{variant:"flat",label:"Group",children:[h.jsx("p",{children:"Steele, Matt"}),h.jsx("p",{children:"Weiss, Frank"}),h.jsx("p",{children:"Palm, Bryce"})]})]}):h.jsx(h.Fragment,{}),e.betType==="Gross Score"?h.jsx("div",{style:{paddingTop:"2.5rem"},children:e.sides.map((i,a)=>h.jsxs(we,{primary:i.action<0,disabled:!0,variant:"flat",style:{marginRight:"0.5rem"},children:[i.side," ",i.action]},a))}):h.jsx(h.Fragment,{}),e.betType==="Matchup"?h.jsx("div",{style:{paddingTop:"2.5rem"},children:e.sides.map((i,a)=>h.jsxs(we,{primary:i.action<0,disabled:!0,variant:"flat",style:{marginRight:"0.5rem"},children:[i.side," ",i.action]},a))}):h.jsx(h.Fragment,{}),e.betType==="Proposition"?h.jsxs("div",{children:[h.jsx("p",{style:{lineHeight:"1.5",margin:"1rem 0 2rem"},children:e.prop}),e.sides.map(i=>h.jsxs(we,{primary:i.action<0,disabled:!0,variant:"flat",style:{marginRight:"0.5rem"},children:[i.side," ",i.action]}))]}):h.jsx(h.Fragment,{})]})})})})})},aE=$.div`
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
`,lE=$.div`
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
`,nv=({history:e,data:t,location:n})=>{const[r,o]=E.useState(!1),[i,a]=E.useState(void 0),l=g=>{const w=new URLSearchParams(e.location.search),f=w.get("orderBy");let p;f===g?p=w.get("desc")!=="true":p=g!=="name";const m={pathname:e.location.pathname,search:`?orderBy=${g}&desc=${p}`,hash:e.location.hash};e.push(m)},s=new URLSearchParams(n.search);let u=s.get("orderBy"),d=s.get("desc")==="false"?-1:1;n.search.includes("orderBy")||(u="price",d=1);const c={price:"PRICE",change:"CHANGEPCT24HOUR",name:"coinName"};if(t){t=t.map(f=>({...f,PRICE:f.PRICE||0,CHANGEPCT24HOUR:f.CHANGEPCT24HOUR||0}));let g=c[u];d=g===c.name?-d:d,t.sort((f,p)=>(p[g]>f[g]?1:-1)*d).map((f,p)=>{const{name:m,coinName:x,symbol:k,imageURL:T,PRICE:C=0,CHANGEPCT24HOUR:O=0}=f;return h.jsxs(cr,{onClick:()=>e.push(`/coins/${k}`),children:[h.jsxs(kt,{children:[h.jsx(uE,{height:22,imageURL:T}),h.jsx(cE,{children:`${x.toLowerCase()}.${m.toLowerCase()}`})]}),h.jsx(kt,{}),h.jsx(kt,{style:{textAlign:"right"},children:C.toFixed(2)}),h.jsxs(kt,{style:{textAlign:"right"},children:[O.toFixed(2),"%"]})]},p)})}function v(g,w){console.log(g,w),o(!0),a(g)}console.log(Xs);let A=Xs.map((g,w)=>h.jsxs(cr,{onClick:()=>{},children:[h.jsx(kt,{children:g.betType==="Gross Score"?`${g.betType} (${g.score})`:g.betType}),h.jsx(kt,{children:g.betType==="Proposition"?"All":g.players.map(f=>f.name.substring(0,f.name.indexOf(","))+(g.players.length>1?"/":""))}),h.jsx(kt,{style:{textAlign:"right"},children:h.jsx("img",{src:oE,style:{height:24,padding:"0.5rem"},onClick:()=>{v(g,w)}})})]},w));return h.jsxs(h.Fragment,{children:[h.jsxs(dE,{children:[h.jsx(Pc,{children:h.jsxs(cr,{children:[h.jsx(ur,{onClick:()=>l("name"),children:"Type"}),h.jsx(ur,{onClick:()=>l("name"),children:"Player(s)"}),h.jsx(ur,{onClick:()=>l("price"),children:"View"})]})}),h.jsx($c,{children:A})]}),h.jsx(iE,{isOpened:r,setIsOpened:g=>o(g),detailData:i})]})};nv.propTypes={data:Et.array};const sE=ko(nv),uE=$(ev)`
  margin-right: 6px;
`,cE=$.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,dE=$(tv)`
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
`;let fE=$(Xa)`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  height: calc(100% - var(--safe-area-inset-bottom));
  padding-bottom: 43px;
`,pE=$(Tr)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 4px;
  padding-left: 4px;
  padding-right: 4px;
  height: 100%;
`;const rv=({children:e,...t})=>h.jsx(fE,{children:h.jsx(pE,{...t,children:e})}),hE=({buttons:e,size:t="sm",...n})=>h.jsx(mE,{...n,children:e.map((r,o)=>h.jsx(vE,{onClick:r.onClick,active:r.active,size:t,fullWidth:!0,children:r.label},o))});let mE=$.nav`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem -1px;
  flex-shrink: 0;
`,vE=$(we)`
  margin: 0 1px;
`;function Ro(){const e=document.getElementById("root");E.useLayoutEffect(()=>{const t=window.pageYOffset;window.scrollTo(0,0);const{position:n}=window.getComputedStyle(e);return document.body.style.overflow="hidden",e.style.overflow="hidden",e.style.position="fixed",e.style.width="100%",e.style.height="100%",()=>{document.body.style.overflow="",e.style.overflow="",e.style.position=n,e.style.width="",e.style.height="",e.scrollTo(0,0),window.scrollTo(0,t)}},[e])}const gE="/assets/money-trans-C6TYdGmC.png",yE=({data:e,showingFollowing:t,showFollowing:n,showTop:r})=>{Ro();const o=Cm();return o.pathname+o.search,h.jsxs(rv,{children:[h.jsxs(xE,{children:[h.jsx("img",{style:{height:52,opacity:.9,padding:"5px 0 0 5px"},src:gE,alt:"icon"}),h.jsxs("h1",{children:["Sunday",h.jsx("span",{children:"Sides"}),h.jsxs("small",{children:["v",tE.version]})]})]}),h.jsx(wE,{children:h.jsx(sE,{data:e})}),h.jsx(hE,{size:"md",buttons:[{label:"Current",onClick:r,active:!t},{label:"Historical ",onClick:n,active:t}]})]})};let xE=$.header`
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
`,wE=$.div`
  flex: 1;
  overflow: hidden;
  & > div {
    height: 100%;
  }
`;const bE=({topList:e,followed:t,coinsData:n,info:r,fetchCoinsInfo:o,fetchCoinsData:i})=>{const[a,l]=E.useState(!1);E.useEffect(()=>{r?i():o()},[r,o,e,i]);let s;return!r||!n?s=null:s=(a?t:e||[]).map(u=>({...r[u],...n[u]})),h.jsx(yE,{data:s,showingFollowing:a,showFollowing:()=>l(!0),showTop:()=>l(!1)})},AE=e=>({followed:e.user.followed,walletCoinsList:Object.keys(e.user.wallet),topList:e.coins.top,currency:e.user.currency,info:e.coins.info,coinsData:e.coins.coinsData}),SE=e=>({fetchCoinsInfo:()=>e(Z0()),fetchCoinsData:()=>e(Wk())}),kE=Ba(AE,SE),EE=kE(bE),TE=(e,t)=>({type:t?A0:S0,payload:e}),CE=e=>({type:k0,payload:e}),$E=e=>({type:E0,payload:e}),PE=e=>({type:T0,payload:e}),RE=e=>({type:C0,payload:e}),OE=e=>({type:P0,payload:e}),DE=e=>({type:R0,payload:e}),IE=e=>({type:$0,payload:e}),ov=$(Xa)`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  
  height: 100%;
  height: calc(100% - var(--safe-area-inset-bottom));
`,iv=$(Cc)`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 4px;
`,jc=$.div`
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
`,NE=({goBack:e,to:t,history:n,children:r,...o})=>{const i=Cm(),a=i.state?i.state.from:"/",l=()=>e?n.push(a):t?n.push(t):()=>{};return h.jsx(we,{onClick:l,...o,children:r})},jE=ko(NE),av="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAGFBMVEUAAAD///8AAADAwMCAgIAA//8AAP8AAIBUAk3vAAAAAXRSTlMAQObYZgAAAGNJREFUCNc1yEEKgCAQheEhvMBU0lamoLVJ+8ouUIIHMPAG3r9hrLd5Hz+AOnkADETsth/9h5YM47CcGPs1CpTWixVc4a7Qay3gw+QFiny2AhziI3CuZMdoiOaYDMhKkuNq4AX1VQ75vyoE2wAAAABJRU5ErkJggg==",po=$.div`
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
`,lv=$.div`
  display: flex;
  flex-wrap: no-wrap;
  ${po}:not(:last-child) {
    width: 100%;
    margin-right: 2px;
  }
`,Uf=[{value:"169",name:"Albertson, John"},{value:"192",name:"Arganbright, Marty"},{value:"121",name:"Atkinson, John"},{value:"31",name:"Banker, Jeff"},{value:"51",name:"Banner, John"},{value:"139",name:"Barker, Thomas"},{value:"176",name:"Bates, Mike"},{value:"235",name:"Beck , Riley"},{value:"259",name:"Benevento, Marc"},{value:"123",name:"Brady, Kenny"},{value:"195",name:"Braydich, Nick"},{value:"201",name:"Brooks, Bill"},{value:"155",name:"Bujnak, Pete"},{value:"101",name:"Burghardt, Jeff"},{value:"168",name:"Butch, Kevin"},{value:"207",name:"Caminiti, Dom"},{value:"203",name:"Clark, Greg"},{value:"150",name:"Coakley, Rob"},{value:"242",name:"Comisar, Jason"},{value:"109",name:"Coon, Tom"},{value:"152",name:"Crawford , Dave"},{value:"33",name:"Cron, Tim"},{value:"153",name:"DeMattio , Don"},{value:"6",name:"Dennison, Allen"},{value:"243",name:"Dietz, Andy"},{value:"115",name:"Dietz, Chris"},{value:"228",name:"Dillon, Mike"},{value:"12",name:"Dippolito, John"},{value:"231",name:"Dwyer, Timothy"},{value:"17",name:"Edwards, Spencer"},{value:"260",name:"Emmenegger, Dan"},{value:"174",name:"English, Dennis"},{value:"125",name:"English, Denny"},{value:"196",name:"Erickson, Aunders"},{value:"159",name:"Evans, Danny"},{value:"130",name:"Ewald, Shane"},{value:"133",name:"Eyen, Bob"},{value:"241",name:"Ferguson, Mike"},{value:"32",name:"Fields, Brandon"},{value:"18",name:"Fitori, Jim"},{value:"40",name:"Fitzpatrick, Sean"},{value:"28",name:"Fitzsimmons, Greg"},{value:"118",name:"Flaherty, Kevin"},{value:"55",name:"Francisco, Jim"},{value:"220",name:"Gearhiser, Kurt"},{value:"175",name:"gerber, john"},{value:"128",name:"Gimeson, Curran"},{value:"127",name:"Gimeson, Jim"},{value:"211",name:"Gimeson, Paul"},{value:"154",name:"Gleaves, Greg"},{value:"178",name:"Glick, Jordan"},{value:"23",name:"Goetz, Nick"},{value:"160",name:"Goldsberry, Craig"},{value:"258",name:"Graham, Carl"},{value:"35",name:"Grim, Chris"},{value:"26",name:"Grim, Mark"},{value:"186",name:"Hall, Tim"},{value:"234",name:"Hanks, David"},{value:"189",name:"Hart, Chuck"},{value:"190",name:"Heath, Joe"},{value:"194",name:"Heis, Adam"},{value:"138",name:"Herrick, Mike"},{value:"43",name:"Hickman, Tim"},{value:"219",name:"Hiers, Kyle"},{value:"48",name:"Hiers, Paul"},{value:"206",name:"Hiers, Wes"},{value:"248",name:"Hitch, David"},{value:"183",name:"Hocking, Kyle"},{value:"167",name:"Hook, Shane"},{value:"144",name:"Huss, Kyle"},{value:"265",name:"Janice, Rob"},{value:"218",name:"Johnson, Glenn"},{value:"84",name:"Jozefczyk, Harrison"},{value:"54",name:"Kauffman , Randy"},{value:"221",name:"Keener, Mike"},{value:"9",name:"Kendig, Shawn"},{value:"177",name:"Kennedy , Don"},{value:"36",name:"King, Mitch"},{value:"158",name:"Koehl, Kiki"},{value:"20",name:"Kramer, Brad"},{value:"187",name:"Kraynak, Michael"},{value:"19",name:"Kristoff, Jeff"},{value:"253",name:"Lacko, Alan"},{value:"15",name:"LaLonde, Brent"},{value:"81",name:"LaLonde, David"},{value:"205",name:"LeCrone, Brian"},{value:"129",name:"Lewis, Andy"},{value:"222",name:"M, I"},{value:"233",name:"Marbry, chris"},{value:"210",name:"Marton, Tyler"},{value:"156",name:"Matter, Kristen"},{value:"98",name:"Maunz, Brandon"},{value:"197",name:"McAninch, Sam"},{value:"151",name:"McCaffrey, Patrick"},{value:"198",name:"McCandless, Mike"},{value:"11",name:"McClure, Todd"},{value:"13",name:"McDaniel, Jay"},{value:"46",name:"Meikrantz, Dave"},{value:"85",name:"Meikrantz , Shelby"},{value:"142",name:"Mills, jeffrey"},{value:"100",name:"Minnie, Chris"},{value:"254",name:"Montello, Ben"},{value:"104",name:"Murphy, Spencer"},{value:"199",name:"Novosel, Todd"},{value:"16",name:"Padro, Rick"},{value:"208",name:'Palm, Bryce "plant"'},{value:"141",name:"Pappas, Peter"},{value:"204",name:"Parks, Guy"},{value:"149",name:"Parton, Kelly"},{value:"264",name:"Partridge, David"},{value:"202",name:"Peck, Nick"},{value:"200",name:"Peck, Steve"},{value:"172",name:"Perry, Justin"},{value:"8",name:"Pi, Mark"},{value:"99",name:"Politte, Jeffrey"},{value:"163",name:"Pratt, Lind"},{value:"261",name:"Proakis, Jake"},{value:"96",name:"Promenschenkel, George"},{value:"147",name:"Raines, Leila"},{value:"251",name:"Rath, Dave"},{value:"10",name:"Reda, Rob"},{value:"193",name:"Rice, Ryan"},{value:"266",name:"Riddle, Gary"},{value:"263",name:"Riley, Wes"},{value:"268",name:"Rini, Bill"},{value:"224",name:"Rubicky, Rob"},{value:"267",name:"Rumizen, Max"},{value:"238",name:"Russo, Bryan"},{value:"164",name:"Rutkoski, Jason"},{value:"27",name:"Salata, Parker"},{value:"227",name:"Salva, Heath"},{value:"225",name:"Santini, Jim"},{value:"116",name:"Savage, Sean"},{value:"97",name:"Schaffner, Jeff"},{value:"105",name:"Schmidt, Dustin"},{value:"214",name:"Sears, Rick"},{value:"182",name:"Secrest, Chad"},{value:"145",name:"Sever, Jeff"},{value:"108",name:"Sewell, Jon"},{value:"223",name:"Shannon, Derek"},{value:"173",name:"Sickles, Corey"},{value:"7",name:"Smith, Keith"},{value:"122",name:"Smith, Nick"},{value:"244",name:"Spitzer, Ryan"},{value:"44",name:"Sprankle, Fred"},{value:"45",name:"Sprankle , Scott"},{value:"226",name:"Stacey, Larry"},{value:"50",name:"Staley, Mike"},{value:"135",name:"Staley, Scott"},{value:"4",name:"Steele, Alan"},{value:"2",name:"Steele, Chad"},{value:"1",name:"Steele, Matt"},{value:"38",name:"Steele, Spencer"},{value:"171",name:"Steininger, Aaron"},{value:"29",name:"Stevenson, Dan"},{value:"47",name:"Struewing, Ben"},{value:"239",name:"Taronto, Drew"},{value:"229",name:"Taylor , Layla"},{value:"134",name:"Taylor, Troy"},{value:"148",name:"Tepe, David"},{value:"137",name:"Thieman, Josh"},{value:"136",name:"Thieman, Mike"},{value:"240",name:"Toranato, Drew"},{value:"170",name:"Towel, Rick"},{value:"140",name:"Trabue, Hugh"},{value:"252",name:"Uehlein, Pat"},{value:"53",name:"Valentine , Travis"},{value:"107",name:"VanHala, Andrew"},{value:"165",name:"VanLandingham, Tyler"},{value:"236",name:"Vincent, Denny"},{value:"162",name:"Vosler, Will"},{value:"262",name:"Walden, Jon"},{value:"117",name:"Walter, Dave"},{value:"21",name:"Watson, Brian"},{value:"102",name:"Weiss, Frank"},{value:"209",name:"Weiss, PJ"},{value:"34",name:"Welch, Dustin"},{value:"14",name:"West, Zach"},{value:"110",name:"Westerheide, Pete"},{value:"157",name:"White, Emily"},{value:"30",name:"Williamson, J"},{value:"5",name:"Wilson, Todd"},{value:"3",name:"Winhoven, Jason"},{value:"185",name:"Wissinger , Jared"},{value:"249",name:"Wolf, Josh"},{value:"103",name:"Wolff, Brett"},{value:"82",name:"Yeagle, Marcus"},{value:"181",name:"Zeller, Aaron"},{value:"146",name:"Zeller, Rod"},{value:"180",name:"Zeller, Rodd"}];class LE extends S.Component{constructor(t){super(t),this.handleChangeOrder=n=>{n===this.state.orderBy?this.setState(r=>({desc:!r.desc})):this.setState({orderBy:n,desc:!0})},this.state={orderBy:"rank",desc:!1}}render(){let{data:t,onFollow:n,searchPhrase:r}=this.props;r=r.toLowerCase();const o=Uf.filter(i=>r?i.name.toUpperCase().includes(r.toUpperCase()):!0).map((i,a)=>h.jsxs(cr,{onClick:l=>{n(i.name)},children:[h.jsx(kt,{children:i.name}),h.jsx(kt,{style:{textAlign:"right"},onClick:void 0,children:i.value})]},a));return h.jsxs(h.Fragment,{children:[h.jsx(FE,{children:h.jsxs(ME,{children:[h.jsx(Pc,{children:h.jsxs(cr,{children:[h.jsx(ur,{onClick:()=>this.handleChangeOrder("name"),children:"Name"}),h.jsx(ur,{onClick:()=>this.handleChangeOrder("indx"),children:"ID"})]})}),h.jsx($c,{children:o})]})}),h.jsx(_E,{children:h.jsxs(lv,{children:[h.jsx(po,{children:t?`Showing ${o?o.length:0} player(s) of ${Uf.length} total`:"Loading..."}),h.jsx(po,{draggable:!0})]})})]})}}const sv=ko(LE);let _E=$.footer`
  margin-top: 0.5rem;
  margin-bottom: 2px;
  flex-shrink: 0;
`,FE=$.div`
  height: 40vh;
  flex: 1;
  margin-top: 0.5rem;
  overflow: hidden;
  & > div {
    height: 100%;
  }
`;const ME=$(tv)`
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
`,BE=({data:e,onFollow:t})=>{const[n,r]=E.useState(""),o=i=>{r(i.target.value)};return Ro(),h.jsxs(ov,{style:{position:"absolute",top:"0"},children:[h.jsxs(iv,{children:[h.jsx("img",{alt:"Search icon",src:av,style:{height:27,marginTop:2,marginRight:"0.5rem",imageRendering:"pixelated"}}),"Search",h.jsx(jE,{square:!0,size:"sm",style:{position:"absolute",right:2,top:3,fontWeight:"bold"},goBack:!0,children:h.jsx(jc,{})})]}),h.jsxs(UE,{children:[h.jsxs(HE,{children:[h.jsx(To,{placeholder:"Search...",value:n,onChange:o,width:"100%",style:{marginRight:"4px",width:"100%"}}),h.jsx(we,{disabled:n==="",onClick:()=>r(""),children:"Clear"})]}),h.jsx(sv,{searchPhrase:n,data:e,onFollow:t})]})]})},zE=ko(BE);let UE=$(Tr)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-top: 4px;
  padding-bottom: 37px;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
`;const HE=$(Qt)`
  margin: 0 -4px;
`,WE=({data:e,fetchCoinsInfo:t,setFollowedCoin:n})=>(E.useEffect(()=>{e||t()},[e,t]),h.jsx(zE,{data:e,onFollow:n})),VE=e=>{if(e.coins.info===null)return{data:null};{let t=e.coins.info;return{data:Object.keys(e.coins.info).map(n=>({...t[n],isFollowed:e.user.followed.includes(n)}))}}},QE=e=>({fetchCoinsInfo:()=>e(Z0()),setFollowedCoin:(t,n)=>e(TE(t,n))}),GE=Ba(VE,QE)(WE);var Lc={exports:{}};const uv=(e,t,n)=>{const r=n<0?e.length+n:n,o=e.splice(t,1)[0];e.splice(r,0,o)},cv=(e,t,n)=>(e=e.slice(),uv(e,t,n),e);Lc.exports=cv;Lc.exports.default=cv;Lc.exports.mutate=uv;const KE=(e,t)=>e.toLocaleString("en-US",{style:"currency",currency:t}),dv=(e="top")=>W`
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
`,fv=()=>W`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
`,Zs=({data:e,onPlayerSelect:t,onPlayerClear:n})=>{const[r,o]=E.useState(""),[i,a]=E.useState(!1),l=s=>{o(s.target.value)};return Ro(),h.jsxs("div",{children:[h.jsxs(qE,{children:[h.jsx("img",{alt:"Search icon",src:av,style:{height:27,marginTop:2,marginRight:"0.5rem",imageRendering:"pixelated"}}),h.jsx(To,{placeholder:"Search Player...",value:r,onChange:l,width:"100%",style:{marginRight:"4px",width:"100%"}}),h.jsx(we,{disabled:r==="",onClick:()=>{o(""),a(!1),n()},children:"Clear"})]}),r&&!i&&h.jsx("div",{children:h.jsx(sv,{data:["foo","bar"],onFollow:s=>{t(s),a(!0)},searchPhrase:r})})]})};$(Tr)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-top: 4px;
  padding-bottom: 37px;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
`;const qE=$(Qt)`
  margin: 0 -4px;
`,JE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADNQTFRFAAAAgICAAAAA//////8A/wD/AP8AAIAA////////////wMDA////////////////////Rk6/PwAAABF0Uk5TAP////////93gmH/eVSDYFOVpFjCAAAAdUlEQVR4nFXOWQ6AMAgEUAaXqDHe/5waUxMjdaS48UVe6QDEC5CcS1dAAbMfqLzg4/r5oorDnpwLKnHQGrt5RoxrIw5ACyRYPEC0TwNWZIuLeEKXRiy3XKGUaeYKMV7joZR+Y8NoB0r536UABhd5gBujbnjrBAaVMBFmsr+JAAAAAElFTkSuQmCC",pv=({player:e,onClose:t})=>{E.useState("");const[n,r]=E.useState(void 0);return Ro(),h.jsxs(ov,{style:{position:"absolute",top:"0"},children:[h.jsxs(iv,{children:[h.jsx("img",{alt:"Juggle icon",src:JE,style:{height:27,marginTop:2,marginRight:"0.5rem",imageRendering:"pixelated"}}),"Place Bet",h.jsx(we,{square:!0,onClick:t,size:"sm",style:{position:"absolute",right:2,top:3,fontWeight:"bold"},children:h.jsx(jc,{})})]}),h.jsxs(YE,{children:[h.jsxs("div",{children:[h.jsx("small",{children:"Select Side"}),h.jsx(co,{style:{flexShrink:0},width:"100%",onChange:o=>{console.log(o),r(o.value)},value:n,options:[...Xs.map(o=>({label:`${o.betType} - ${o.betType!=="Proposition"?o.players.map(i=>i.name):o.prop}${o.betType==="Gross Score"?`: ${o.score}`:""}`,value:o}))]})]}),(n==null?void 0:n.betType)==="Matchup"&&h.jsxs("div",{style:{display:"flex",justifyContent:"space-around",padding:"1rem"},children:[h.jsx("div",{children:h.jsx(we,{style:{padding:"0.75rem",minWidth:"100px"},size:"lg",children:n==null?void 0:n.sides[0].side})}),h.jsx("div",{children:h.jsxs(we,{style:{padding:"0.75rem",minWidth:"100px"},size:"lg",children:[n==null?void 0:n.sides[1].side,n==null?void 0:n.sides[1].action]})})]}),(n==null?void 0:n.betType)==="Proposition"&&h.jsxs("div",{style:{display:"flex",justifyContent:"space-around",padding:"1rem"},children:[h.jsx("div",{children:h.jsx(we,{style:{padding:"0.75rem",minWidth:"100px"},size:"lg",children:"Yes"})}),h.jsx("div",{children:h.jsx(we,{style:{padding:"0.75rem",minWidth:"100px"},size:"lg",children:"No"})})]}),(n==null?void 0:n.betType)==="Gross Score"&&h.jsxs("div",{style:{display:"flex",justifyContent:"space-around",padding:"1rem"},children:[h.jsx("div",{children:h.jsx(we,{style:{padding:"0.75rem",minWidth:"100px"},size:"lg",children:"Over"})}),h.jsx("div",{children:h.jsx(we,{style:{padding:"0.75rem",minWidth:"100px"},size:"lg",children:"Under"})})]}),h.jsxs("div",{style:{display:"flex"},children:[h.jsx("div",{style:{padding:"2rem 1rem 1rem 2rem"},children:h.jsx(Ki,{size:"300px",min:1,max:20,step:1,defaultValue:5,marks:[{value:1,label:"$1"},{value:2,label:"$2"},{value:3,label:""},{value:4,label:""},{value:5,label:"$5"},{value:6,label:""},{value:7,label:""},{value:8,label:"$8"},{value:9,label:""},{value:10,label:"$10"},{value:11,label:""},{value:12,label:"$12"},{value:13,label:""},{value:14,label:"$14"},{value:15,label:""},{value:16,label:"$16"},{value:17,label:""},{value:18,label:"$18"},{value:19,label:""},{value:20,label:"$20"}],orientation:"vertical"})}),h.jsx(we,{style:{marginTop:"auto"},size:"lg",primary:!0,fullWidth:!0,children:"Submit"})]}),h.jsx("small",{children:e.name})]})]})};let YE=$(Tr)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-top: 4px;
  padding-bottom: 37px;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
`;$(Qt)`
  margin: 0 -4px;
`;const XE=({data:e,currency:t,sortUserHoldings:n,match:r,location:o})=>{e&&Math.round(e.map(w=>w.PRICE*w._amount).reduce((w,f)=>w+f,0)*100)/100;const[i,a]=E.useState(""),[l,s]=E.useState(""),[u,d]=E.useState(0);E.useState(0);const[c,v]=E.useState(!1);function A(w){s(w)}function g(){s("")}return h.jsxs(h.Fragment,{children:[h.jsx(ZE,{children:h.jsxs(eT,{children:[h.jsxs("div",{children:[h.jsx("header",{children:h.jsx("a",{href:"",children:l})}),h.jsx(kc,{}),h.jsxs("section",{children:[h.jsxs("div",{children:[h.jsx(tT,{children:l?h.jsx(Bs,{size:70,style:{background:"#008080"},children:l.split(",")[1].charAt(1)+l.split(",")[0].charAt(0)}):h.jsx(Bs,{size:70})}),l&&h.jsx(we,{style:{marginTop:"-30px"},square:!0,size:"sm",onClick:()=>{s(""),a("")},children:h.jsx(jc,{})})]}),h.jsxs("div",{children:[h.jsx("small",{children:"Total at Risk"}),h.jsx(nT,{children:KE(u,"USD")}),h.jsx("div",{children:h.jsx(Qt,{children:h.jsx(we,{disabled:!l,onClick:()=>v(!0),children:"Place Bet"})})})]})]}),h.jsx("div",{style:{paddingLeft:"0.5rem",fontSize:"0.9rem",lineHeight:"1.5"}})]}),h.jsx("div",{children:h.jsxs(lv,{children:[h.jsx(po,{children:new Date().toLocaleDateString()}),h.jsx(po,{style:{flexShrink:0,minWidth:65,textAlign:"center"},children:"0 bets(s)"})]})}),h.jsx(Zs,{onPlayerSelect:A,onPlayerClear:g})]})}),c&&h.jsx(pv,{player:l,onClose:()=>{v(!1),setTimeout(()=>{document.getElementById("root").style.position=null},0)}})]})},ZE=$.div`
  padding-bottom: 100px;
`,eT=$.div`
  ${dv("full")}
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
`,tT=$.div`
  margin-left: 0.25rem;
  display: inline-block;
  object-fit: cover;
  height: 85px;
  width: 85px;
  border-radius: 50%;
  flex-shrink: 0;
`,nT=$.div`
  height: 32px;
  font-size: 2rem;
  margin-right: 0.5rem;
  margin-bottom: 0.75rem;
  text-align: right;
`;$.section`
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
`;$.img`
  display: inline-block;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  object-fit: contain;
`;$.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  ${dv("full")}
  padding: 0.75rem 0.5rem;
  line-height: 1;
`;$.header`
  display: flex;
  align-items: center;

  h4 {
    margin-left: 10px;
    margin-top: 2px;
  }
`;$.div`
  display: flex;
  align-items: center;
`;$.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 5px;
  data:last-child {
    color: ${({theme:e})=>e.borderDark};
    margin-top: 4px;
  }
`;$.div`
  display: flex;
  align-items: center;
`;$(Qt)`
  margin: 0 -4px;
`;var hv="Expected a function",Hf=NaN,rT="[object Symbol]",oT=/^\s+|\s+$/g,iT=/^[-+]0x[0-9a-f]+$/i,aT=/^0b[01]+$/i,lT=/^0o[0-7]+$/i,sT=parseInt,uT=typeof Oo=="object"&&Oo&&Oo.Object===Object&&Oo,cT=typeof self=="object"&&self&&self.Object===Object&&self,dT=uT||cT||Function("return this")(),fT=Object.prototype,pT=fT.toString,hT=Math.max,mT=Math.min,_l=function(){return dT.Date.now()};function vT(e,t,n){var r,o,i,a,l,s,u=0,d=!1,c=!1,v=!0;if(typeof e!="function")throw new TypeError(hv);t=Wf(t)||0,qi(n)&&(d=!!n.leading,c="maxWait"in n,i=c?hT(Wf(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v);function A(C){var O=r,_=o;return r=o=void 0,u=C,a=e.apply(_,O),a}function g(C){return u=C,l=setTimeout(p,t),d?A(C):a}function w(C){var O=C-s,_=C-u,N=t-O;return c?mT(N,i-_):N}function f(C){var O=C-s,_=C-u;return s===void 0||O>=t||O<0||c&&_>=i}function p(){var C=_l();if(f(C))return m(C);l=setTimeout(p,w(C))}function m(C){return l=void 0,v&&r?A(C):(r=o=void 0,a)}function x(){l!==void 0&&clearTimeout(l),u=0,r=s=o=l=void 0}function k(){return l===void 0?a:m(_l())}function T(){var C=_l(),O=f(C);if(r=arguments,o=this,s=C,O){if(l===void 0)return g(s);if(c)return l=setTimeout(p,t),A(s)}return l===void 0&&(l=setTimeout(p,t)),a}return T.cancel=x,T.flush=k,T}function gT(e,t,n){var r=!0,o=!0;if(typeof e!="function")throw new TypeError(hv);return qi(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),vT(e,t,{leading:r,maxWait:t,trailing:o})}function qi(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function yT(e){return!!e&&typeof e=="object"}function xT(e){return typeof e=="symbol"||yT(e)&&pT.call(e)==rT}function Wf(e){if(typeof e=="number")return e;if(xT(e))return Hf;if(qi(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=qi(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(oT,"");var n=aT.test(e);return n||lT.test(e)?sT(e.slice(2),n?2:8):iT.test(e)?Hf:+e}var wT=gT;const bT=Fe(wT),Vf=document.querySelector('meta[name="theme-color"]'),Fl=e=>{Vf?Vf.setAttribute("content",e):console.warn('meta[name="theme-color"] not found')},AT=({value:e,onChange:t,disabled:n})=>{const r=S.useCallback(a=>{Fl(a),t(a)},[t]),o=S.useMemo(()=>bT(r,100),[r]),i=S.useCallback(a=>{o(a.target.value)},[o]);return h.jsx(e0,{value:e,onChange:i,disabled:n,onFocus:()=>Fl(e),onBlur:()=>Fl("#000000")})},ST=({theme:e,setTheme:t,background:n,backgrounds:r,setBackground:o,setCustomBackground:i,scanLines:a,toggleScanLines:l,setScanLinesIntensity:s,scanLinesIntensity:u,vintageFont:d,toggleVintageFont:c,fontSize:v,setFontSize:A})=>{const[g,w]=E.useState(0),[f,p]=E.useState(""),[m,x]=E.useState(),[k,T]=E.useState([]),C=N=>w(N),O=N=>{const q=r.find(J=>J.value===N.value);q&&o(q)};Ro();const _=S.useCallback(N=>i(N),[i]);return h.jsxs(rv,{style:{paddingTop:"0.5rem"},children:[h.jsxs(v0,{value:g,onChange:C,children:[h.jsx(zr,{value:0,children:"Background"}),h.jsx(zr,{value:1,children:"Appearance"}),h.jsx(zr,{value:2,children:"System"}),h.jsx(zr,{value:3,children:"Admin"})]}),h.jsxs(m0,{children:[g===0&&h.jsxs(h.Fragment,{children:[h.jsx($T,{backgroundStyles:{background:n.value}}),h.jsxs(On,{label:"Wallpaper:",style:{marginTop:20},children:[h.jsx(co,{width:"100%",onChange:O,menuMaxHeight:300,options:r,value:n.value}),h.jsxs(CT,{isDisabled:r[0].value!==n.value,children:[h.jsx("label",{children:"Custom color:"}),h.jsx(AT,{value:r[0].value,disabled:r[0].value!==n.value,onChange:_})]})]})]}),g===1&&h.jsx(Ko,{children:h.jsxs(On,{label:"Theme:",children:[h.jsx(vt,{value:"original",onChange:()=>t("original"),checked:e==="original",label:"original"}),h.jsx("br",{}),h.jsx(vt,{value:"rose",onChange:()=>t("rose"),checked:e==="rose",label:"🌹 Rose"}),h.jsx("br",{}),h.jsx(vt,{value:"rainyDay",onChange:()=>t("rainyDay"),checked:e==="rainyDay",label:"☔️ Rainy Day"}),h.jsx("br",{}),h.jsx(vt,{value:"travel",onChange:()=>t("travel"),checked:e==="travel",label:"🧳 Travel"}),h.jsx("br",{}),h.jsx(vt,{value:"marine",onChange:()=>t("marine"),checked:e==="marine",label:"🛳 Marine"}),h.jsx("br",{}),h.jsx(vt,{value:"olive",onChange:()=>t("olive"),checked:e==="olive",label:"🍸 Olive"}),h.jsx("br",{}),h.jsx(vt,{value:"theSixtiesUSA",onChange:()=>t("theSixtiesUSA"),checked:e==="theSixtiesUSA",label:"🌷 The 60's USA"}),h.jsx("br",{}),h.jsx(vt,{value:"candy",onChange:()=>t("candy"),checked:e==="candy",label:"🍭 Candy"}),h.jsx("br",{}),h.jsx(vt,{value:"tokyoDark",onChange:()=>t("tokyoDark"),checked:e==="tokyoDark",label:"📟 Tokyo Dark"}),h.jsx("br",{}),h.jsx(vt,{value:"vaporTeal",onChange:()=>t("vaporTeal"),checked:e==="vaporTeal",label:"💨 Vapor Teal"})]})}),g===2&&h.jsxs(h.Fragment,{children:[h.jsx(Ko,{children:h.jsxs(On,{label:"Font:",children:[h.jsx(Us,{name:"vintageFont",value:"vintageFont",label:"Vintage font",onChange:()=>c(!d),checked:d}),h.jsxs(Gf,{children:[h.jsx(Qf,{children:"Size:"}),h.jsx(Ki,{min:.8,max:1.2,step:null,value:v,onChange:N=>A(N),marks:[{value:.8,label:"0.8"},{value:.9,label:"0.9"},{value:1,label:"1"},{value:1.1,label:"1.1"},{value:1.2,label:"1.2"}]})]})]})}),h.jsx(Ko,{}),h.jsx(Ko,{children:h.jsx(On,{label:h.jsx(Us,{style:{},name:"scanLines",value:"scanLines",label:"Scan lines",onChange:()=>l(!a),checked:a}),children:h.jsxs(Gf,{children:[h.jsx(Qf,{isDisabled:!a,children:"Intensity:"}),h.jsx(Ki,{disabled:!a,step:10,min:0,max:100,marks:[{value:0,label:"min"},{value:100,label:"max"}],value:u,onChange:N=>s(N)})]})})})]}),g===3&&h.jsx(h.Fragment,{children:h.jsxs("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"},children:[h.jsxs("div",{children:[h.jsx("small",{children:"Bet Type"}),h.jsx(co,{style:{flexShrink:0},width:"100%",onChange:N=>p(N.value),value:f,options:[{value:"Matchup",label:"Matchup"},{value:"Gross Score",label:"Gross Score"},{value:"Group Net Winner",label:"Group Net Winner"},{value:"Proposition",label:"Prop"}]})]}),f&&f!=="Proposition"&&h.jsxs(h.Fragment,{children:[h.jsx("div",{children:k.length>0&&h.jsx("ul",{children:k.map((N,q)=>h.jsx("li",{children:`Player ${q+1}: ${N}`},q))})}),h.jsx("div",{children:h.jsx(Zs,{onPlayerSelect:N=>{console.log(N),T([...k,N])}})})]}),f&&f==="Matchup"&&h.jsx("div",{children:h.jsx(Zs,{onPlayerSelect:N=>{console.log(N)}})}),f==="Proposition"&&h.jsx("div",{children:h.jsx(To,{multiline:!0,rows:4,value:m,fullWidth:!0})}),h.jsxs("div",{style:{marginTop:"0.75rem"},children:[h.jsx("small",{children:"Action"}),h.jsx("br",{}),h.jsx(Ec,{defaultValue:-110,step:10,min:-1e3,max:1e3,width:"130"})]}),h.jsx("div",{style:{marginTop:"0.75rem"},children:h.jsx(we,{disabled:!f,fullWidth:!0,children:"Add Bet"})})]})})]})]})},kT=e=>({theme:e.user.theme,background:e.user.background,backgrounds:e.user.backgrounds,vintageFont:e.user.vintageFont,scanLines:e.user.scanLines,scanLinesIntensity:e.user.scanLinesIntensity,fontSize:e.user.fontSize}),ET=e=>({setTheme:t=>e(CE(t)),toggleVintageFont:t=>e(RE(t)),setFontSize:t=>e(IE(t)),toggleScanLines:t=>e(OE(t)),setScanLinesIntensity:t=>e(DE(t)),setBackground:t=>e($E(t)),setCustomBackground:t=>e(PE(t))}),TT=Ba(kT,ET)(ST),CT=$.div`
  float: right;
  margin-right: 0px;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  label {
    font-size: 1rem;
    padding-right: 1rem;
    ${({isDisabled:e})=>e&&W`
        ${fv()}
      `}
  }
`,Ko=$.div`
  margin-bottom: 30px;
`,Qf=$.label`
  display: inline-block;
  margin-bottom: 0.5rem;
  margin-left: -1rem;
  ${({isDisabled:e})=>e&&W`
      ${fv()}
    `}
`,Gf=$.div`
  padding: 8px 16px;
`,$T=$(LA)`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`,Kf=()=>({width:window.innerWidth,height:window.innerHeight});function PT(){const[e,t]=E.useState(Kf());return E.useEffect(()=>{const n=()=>t(Kf());return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)}),[e.width,e.height]}const RT="/assets/iphone-Db91Bbd8.png",OT=({children:e,maxWidth:t=450,maxHeight:n=896})=>{const[r,o]=PT();return r>t||o>n?h.jsx(DT,{maxWidth:t,maxHeight:n,id:"device",children:h.jsx(IT,{children:e})}):h.jsxs(h.Fragment,{children:[e,h.jsx(NT,{})]})},DT=$.div`
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
      background: url(${RT});
      background-size: cover;
    }
  }
  max-height: 100%;
  max-width: 100%;

  overflow: hidden;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.35);

  overflow: visible;
`,IT=$.div`
  height: 100%;
  width: 100%;
  overflow: auto;
`,NT=$.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0;
  background: black;
  z-index: 999;
  height: 0;
  height: var(--safe-area-inset-bottom);
`,jT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAAAAADAwMD///+AgID//wCAgACAAID0UdedAAAAAXRSTlMAQObYZgAAAMZJREFUKM+dz92twyAMBeB4Aw4Q7jMoCyRXDECVBSpPkP2X6ClOS/pW1UJGfPKPmL4M4PMt/8V9wm25gjhp0ckgn7Ht8HlAydvONFYY4ALPlgHsXrc9+HyKlNIreDkDcB56OoHzeoTt3AMuKDyxtAkmefdZEdGgvSv+RZ9rDUur1QACBCXovQO/Fdu8hoWJ0APQQFgVp8y19gpe7wqFJYPUqkVqBgK9B54+w2ROR00Ht7ygHYemFC/gAMiACfy2Y76EcOBv8QA5diEJAFLjpgAAAABJRU5ErkJggg==",LT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAMAAABEH1h2AAAB4FBMVEUAAACen56zs7OfoJ+hoaGXmZdTU1NTU1Obm5ugoKCioqK/wL+ZmZm5ubmoqaidnp2en56rq6udnp2fn5+lpaWfoJ+cnpyMjo21tbWpqamenp5zc3OoqKidnZ2oqKhiY2KcnJyTlJN+f36pqalZWVmjpKOpqamfoZ9TU1NeXl5UVFSpqam+vr5UVFRnZ2e0uLWMjIyGh4aoqKioqKh9fX11dXVUVFTAwsC/v7/AwMBUVFS/v78AAADr5uu1sbW3s7c8PTzBwsFHR0fTztPo4+c6OjvW0dbIw8jFwcXAvMDj3+NOTk7g2+C7t7sfHh83ODcsLCy/wL+qqaqYlpk0MzXQzdHNyM3Lx8vb19spKCknJScLCwza1trQzM+Ihom5tblcXFwyMjLPys92dHdwb3AYGBhraWsiIiKjn6N+fH9FREUUFBRqZ2qopqiVk5ViYWOPjY96eHpnZmdTUlNJSkpAQEDd2N3CvsKKh4ovLy8RERHKxsqvq66TkJOBgIKFhIaDgYQFBQXY09ihoaGem56am5qLiowQDw8ICAnX19fU1NS9ub2PkI9tbW5mZGZfXl9XVVccHBzl4eXZ2dmytLOdnp1zcXRMS0wlJCWysrKxrbF7eXtaWVqlo6WAfYBzcnNXwFgbAAAAPHRSTlMAqgyUXhz112dPRzs4BK6hiYR4cGlVQS8q+vnx34A89dbS0snGup2cmJGOd3ZiSCL29vTt6cixq5+GeWD0SjRQAAAF90lEQVRIx+3W51vaQBwH8BZHa/fee++9Gy7WhCQEQikbBCLDgCAbRBTBiah1to6qrf9qL6MCBuvju77o7/F5znD5kLv7XhL2/K+61fRgX3Oqed/9JvHQsNG879abew8+PH785IliZ34VEarvoni4+BnZrLYrO+qDM+Kp4xsHheOxan5gB6w4boiF+/jSTRuOKyQ+NB4Ojw/tzM+m0ukOv1DT6+n0+lmRB2KD7tlOyE//nV9sR5A5AFAAQCSNIPOv9ih4/nlk4pvRAXnj3+ftFzmQeGdX00GBRyYmojvxUxdGOIdufs5ojBqNxrhmfj63MTJS0ENu+DY5sAL5qe31IU0mM+dLJDpahcrEfImlVCbj6YP8pzT4h9vzG3BtliMAzErBcQCMtgr/wrlP7sQfrck4+oebRiYnhbkf327k143TJocj5Y6XYiaPR+9w5Gbi8ULa4dC1V/GG+nq/xmRKJQYHecoZDJFoYbAr5fG0JguDnEPgE8Lg79TnzwMIkhkFoBteyo8rcYsUnA+AAVPV0h2pn3dxC/cCVOKowCPfJqJ8cLfrjfxZyZ/xeDRw8MlQprXX1tPjoiiWy8HBF4u+dM6jcS+OcZ2Q36yXt93ethaPd3scjlieZRm1Ootptc58iV86e6u/FPeFcjldGfJLcn6d31YDACzBr4/ZlEozACimVOJWMffALwDcdumGPS/P+2sO8miFYygqcVTgBRTd5IatI79R8C+rVBr/WqI7tbxcdDmdZpIkzU6n00uSgFOp2pJra1xapbK38/xwjT6p0elaE0bjkkenW1+lqCwzpXbRNO1lprIYTQ+vRo2FDH9K1NjdyXNFDb+gQhB9LwBdMLg5Cxw4C1CXkg8OMIRSSZNi7rlegHbpeH6uWn8cq+IpgaMiR1GRo0Lu+hIq8XcVfPa1bzoVCmlm/P7u2fX1IkUQmNVqdREEYYatGbZeq3WVE0+JLYdCc37fxSZJP02FwzlfMPjLFA5rVjGMZBjGQi8smFmGwRYWaCvLZImFhWEQDHbBUzLuYHB6JRy+L/EjISlUPRyVWqkkGIBa8Jrcp5xKpZYCMDghW3QpjCD7JB7ZwocZFPJK7hYUFTkqcVTgzaI+zPNw28zMTDKZdKsxDPNaLC7YmC1i67JYvGaxzXMazVwsmczA7FPS1Q2QI0Pl9laDVotNoayVxnG48qwLx/krMwSOa0mUzdpw3MkaDAlHuX0IiubK3IVSAaXSpgZoP103dzXcxz1ZIXdYlbmfq+GowAl57iJHN/m9zdxvzWrmEcQz6jLz5XK5zMFYR0e3z+fr7uiY5Xy+wVXxY77iK3ClU7NX+dylerso7TqSFoODT5vqChiF4AClVSqDdn7XvRehNP7FzwJHeT4s5zqRoxX+tJorxnheYllSi+PDapbleF4uD/ElcH71WZbqwXGRK6r5Yf7qpiDM2mvx8lknIPckOY5LcjG4m+aLFq8XgwW74yvy+31RJa68c0oMzj2OIB1fvnyCf0DDP2ml4NQAiHfcHtn9Xp27u4/nn/j6LnK0krucX4P8cx5uqyzDWOH8iyL/8ocnGIZy4riNYpjCNtxj7Ld6MfFe97VLV/8icF0JfmwRuwdW5Py2LHeBU5D/0Mhyl/G98tyluUMuy132nD8KeS6uVvf30DSRVaunt/AoTfeQajXppOnROryBz/2n04n1k6SXcDq7/nAxuPkCSVox2G0lyd4A5C9q+TFZ7gLfNveXtfzybnKXvyJPQG6CTxsCTtBi02oHx2t5F5w3Ad+2sLsYkPOTfO5RirIM22wYSVEbleCE3OM2G2GlKCthsxkd8vf7/l3mfqSWN+4y9zu1/DTkgaTbPRDJ54Mlt1tTRpDQV6GKKjh3fz4fGYDdP/P5hE7+u64FntOus9tzHpPJo7fr4UsYCeuFssMQygGTyaS32/Ww21GW/6Y9APkuqq2llp/ZJT9Xy6/EWiulkrVba1pRyxVXzpw5c+BAS8vp042NjftPnTx54sTly8eONTQ03D16dK9UR+82HDuxv+VQ0+E9/0L9BsIFFzjCGiw3AAAAAElFTkSuQmCC",_T="/assets/shake-CaDFd7xV.png",FT=e=>{const t=e.location.pathname;return h.jsx(BT,{position:"fixed",children:h.jsxs(zT,{children:[h.jsx(Bl,{active:t==="/",onClick:()=>e.history.push("/"),fullWidth:!0,size:"lg",children:h.jsx(Ml,{src:LT,alt:"icon"})}),h.jsx(Bl,{active:t.startsWith("/wallet"),onClick:()=>e.history.push("/wallet"),fullWidth:!0,size:"lg",children:h.jsx(Ml,{style:{height:21,opacity:.9},src:_T,alt:"icon"})}),h.jsx(Bl,{active:t==="/settings",onClick:()=>e.history.push("/settings"),fullWidth:!0,size:"lg",children:h.jsx(Ml,{src:jT,alt:"icon",style:{height:30}})})]})})},MT=ko(FT),BT=$(Jm)`
  top: auto;
  bottom: 0;
  z-index: 2;
  bottom: var(--safe-area-inset-bottom);
`,Ml=$.img`
  /* image-rendering: pixelated; */
  filter: grayscale(1);
  height: 24px;
`,Bl=$(we)`
  margin: 0 1px;
`,zT=$(Qt)`
  margin: 0 -1px;
`,UT=dw`
  ${fw}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${pS}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${hS}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  html {
    font-size: ${({fontSize:e})=>`${e*16}px`};
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
`,HT=e=>({theme:e.user.theme,background:e.user.background,vintageFont:e.user.vintageFont,fontSize:e.user.fontSize,scanLines:e.user.scanLines,scanLinesIntensity:e.user.scanLinesIntensity}),WT=({theme:e,background:t,vintageFont:n,fontSize:r,scanLines:o,scanLinesIntensity:i})=>h.jsx(OT,{children:h.jsx(Km,{theme:fS[e],children:h.jsxs(h.Fragment,{children:[h.jsx(UT,{vintageFont:n,fontSize:r,scanLines:o,scanLinesIntensity:i,background:t.value}),h.jsx(M1,{children:h.jsxs(h.Fragment,{children:[h.jsxs(of,{children:[h.jsx(bn,{exact:!0,path:"/coins/:coin",component:void 0}),h.jsx(bn,{exact:!0,path:"/search",component:void 0}),h.jsx(MT,{})]}),h.jsxs(of,{children:[h.jsx(bn,{exact:!0,path:"/",component:EE}),h.jsx(bn,{exact:!0,path:"/search",component:GE}),h.jsx(bn,{exact:!0,path:"/add/bet",component:pv}),h.jsx(bn,{path:"/wallet/",component:XE}),h.jsx(bn,{exact:!0,path:"/settings",component:TT})]})]})})]})})}),VT=Ba(HT)(WT);window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/);function QT(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}function mv(e){var t=function(r){var o=r.dispatch,i=r.getState;return function(a){return function(l){return typeof l=="function"?l(o,i,e):a(l)}}};return t}var vv=mv();vv.withExtraArgument=mv;const GT={top:null,info:null,coinsData:null},KT=(e=GT,t)=>{switch(t.type){case w0:const{top:n,info:r}=t.payload;return{...e,top:n,info:r};case b0:return{...e,coinsData:t.payload};default:return e}},qT=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch{return}},JT=(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch{}},YT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAACVBMVEUAgIAA//8AAABML0eVAAAAHUlEQVQY02MgDTA6QDADiwIEIxhMDWBMLTBIHAYAXSQELXns9OsAAAAASUVORK5CYII=",XT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAD1BMVEUAgICAAIAAAIAAAAD/AP/xWXoLAAAAWElEQVQoz2NAAEZFRWUGZMAiJCQMpMhSIQIDMBWOilAAUyEEA5SpMIYBmAoDmFtgKuACA6dCRASmggUcKAxgP4AFGMFMoAlwFWAmOSrAwQBTIWxsTI24BQDnDRqxaEeFJwAAAABJRU5ErkJggg==",ZT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAADFBMVEWAAIAAAAD/AP+AgIC+5PyhAAAAIElEQVQY02MgCuwGgZ1AxgEQjxGIG8CMISoSCgZE+RwAhEEUNc/zGIcAAAAASUVORK5CYII=",eC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAuAgMAAABG0ZGhAAAADFBMVEXAwMD//wD///+AgAD5TC6AAAAAg0lEQVQY07WQsQ2DUAxEbwXTpYgySpqTSBFljujPwQKMALOwACOwgyVa7hCIFgosW/K76tkg2QwkIqIdIy5w1U4rFxZz1blh0ED7WwEK6zlZIHQA1umGIDTQTgV4heuBL10fPG/i38p/+4X8Nt/DPwVyhlx7OcvPmLvv4e97tn/k+f8tsA9WQ4HgaDkAAAAASUVORK5CYII=",tC="/assets/water-CLT8T8g9.gif",nC="/assets/noise-Q2HaBj8G.gif",gv="user",rC=qT(gv)||{},qf=[{value:"#008080",label:"(Custom)"},{value:`url(${YT})`,label:"Rivets"},{value:`url(${XT})`,label:"Zig-zag"},{value:`url(${ZT})`,label:"Purple squares"},{value:`url(${eC})`,label:"Honey"},{value:`url(${tC})`,label:"Water"},{value:`url(${nC})`,label:"Noise"}],oC={followed:[],wallet:{},seenEvents:[],currency:"EUR",vintageFont:!0,theme:"original",backgrounds:qf,background:qf[0],fontSize:1,scanLines:!1,scanLinesIntensity:0,...rC},iC=(e=oC,t)=>{const n=function(){switch(t.type){case A0:{const g=[...new Set([...e.followed,t.payload])];return{...e,followed:g}}case S0:{const g=e.followed.filter(w=>w!==t.payload);return{...e,followed:g}}case k0:return{...e,theme:t.payload};case E0:return{...e,background:t.payload};case T0:const[r,...o]=e.backgrounds,i={...r,value:t.payload},a=[i,...o];return{...e,backgrounds:a,background:i};case C0:return{...e,vintageFont:t.payload};case $0:return{...e,fontSize:t.payload};case P0:return{...e,scanLines:t.payload};case R0:return{...e,scanLinesIntensity:t.payload};case wS:const l=t.payload,s=[...e.seenEvents,l];return{...e,seenEvents:s};case AS:const{amount:u,coin:d}=t.payload,c={...e.wallet},v=Object.keys(c).length,A=c[d]?c[d].order:v;return c[d]={symbol:d,amount:u,order:A},{...e,wallet:c};case kS:{const g={...e.wallet};return g[t.payload]&&delete g[t.payload],{...e,wallet:g}}case ES:{const w=t.payload.reduce((f,p)=>({...f,[p]:e.wallet[p]}),{});return{...e,wallet:w}}case SS:return{...e,currency:t.payload};default:return e}}();return JT(gv,n),n},aC=null,lC=(e=aC,t)=>{switch(t.type){case bS:let n;const r=t.payload.news;if(t.payload.extend){let o=[];n=[...e||[],...r],n=n.filter(i=>o.includes(i.id)?!1:(o.push(i.id),!0))}else n=r;return n;default:return e}},sC=null,uC=(e=sC,t)=>{switch(t.type){case xS:return t.payload;default:return e}},cC=lx({coins:KT,user:iC,news:lC,events:uC}),dC=ix(cC,cx(vv));Oy.render(h.jsx(Rm,{store:dC,children:h.jsx(VT,{})}),document.getElementById("root"));QT();
