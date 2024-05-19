(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function je(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Kf={exports:{}},fo={},qf={exports:{}},fe={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Nc=Object.getOwnPropertySymbols,yv=Object.prototype.hasOwnProperty,xv=Object.prototype.propertyIsEnumerable;function wv(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function bv(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(i){return t[i]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(i){o[i]=i}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Jf=bv()?Object.assign:function(e,t){for(var n,r=wv(e),o,i=1;i<arguments.length;i++){n=Object(arguments[i]);for(var a in n)yv.call(n,a)&&(r[a]=n[a]);if(Nc){o=Nc(n);for(var l=0;l<o.length;l++)xv.call(n,o[l])&&(r[o[l]]=n[o[l]])}}return r};/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xs=Jf,kt=typeof Symbol=="function"&&Symbol.for,po=kt?Symbol.for("react.element"):60103,Av=kt?Symbol.for("react.portal"):60106,kv=kt?Symbol.for("react.fragment"):60107,Sv=kt?Symbol.for("react.strict_mode"):60108,Ev=kt?Symbol.for("react.profiler"):60114,Tv=kt?Symbol.for("react.provider"):60109,Cv=kt?Symbol.for("react.context"):60110,$v=kt?Symbol.for("react.forward_ref"):60112,Pv=kt?Symbol.for("react.suspense"):60113,Rv=kt?Symbol.for("react.memo"):60115,Ov=kt?Symbol.for("react.lazy"):60116,_c=typeof Symbol=="function"&&Symbol.iterator;function ho(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xf={};function Ar(e,t,n){this.props=e,this.context=t,this.refs=Xf,this.updater=n||Yf}Ar.prototype.isReactComponent={};Ar.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(ho(85));this.updater.enqueueSetState(this,e,t,"setState")};Ar.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zf(){}Zf.prototype=Ar.prototype;function Zs(e,t,n){this.props=e,this.context=t,this.refs=Xf,this.updater=n||Yf}var eu=Zs.prototype=new Zf;eu.constructor=Zs;Xs(eu,Ar.prototype);eu.isPureReactComponent=!0;var tu={current:null},ep=Object.prototype.hasOwnProperty,tp={key:!0,ref:!0,__self:!0,__source:!0};function np(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)ep.call(t,r)&&!tp.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:po,type:e,key:i,ref:a,props:o,_owner:tu.current}}function Dv(e,t){return{$$typeof:po,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function nu(e){return typeof e=="object"&&e!==null&&e.$$typeof===po}function Iv(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(n){return t[n]})}var rp=/\/+/g,pi=[];function op(e,t,n,r){if(pi.length){var o=pi.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function ip(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>pi.length&&pi.push(e)}function Bl(e,t,n,r){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case po:case Av:i=!0}}if(i)return n(r,e,t===""?"."+il(e,0):t),1;if(i=0,t=t===""?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){o=e[a];var l=t+il(o,a);i+=Bl(o,l,n,r)}else if(e===null||typeof e!="object"?l=null:(l=_c&&e[_c]||e["@@iterator"],l=typeof l=="function"?l:null),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=t+il(o,a++),i+=Bl(o,l,n,r);else if(o==="object")throw n=""+e,Error(ho(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return i}function zl(e,t,n){return e==null?0:Bl(e,"",t,n)}function il(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Iv(e.key):t.toString(36)}function Nv(e,t){e.func.call(e.context,t,e.count++)}function _v(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?Ul(e,r,n,function(i){return i}):e!=null&&(nu(e)&&(e=Dv(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(rp,"$&/")+"/")+n)),r.push(e))}function Ul(e,t,n,r,o){var i="";n!=null&&(i=(""+n).replace(rp,"$&/")+"/"),t=op(t,i,r,o),zl(e,_v,t),ip(t)}var ap={current:null};function Gt(){var e=ap.current;if(e===null)throw Error(ho(321));return e}var Lv={ReactCurrentDispatcher:ap,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:tu,IsSomeRendererActing:{current:!1},assign:Xs};fe.Children={map:function(e,t,n){if(e==null)return e;var r=[];return Ul(e,r,null,t,n),r},forEach:function(e,t,n){if(e==null)return e;t=op(null,null,t,n),zl(e,Nv,t),ip(t)},count:function(e){return zl(e,function(){return null},null)},toArray:function(e){var t=[];return Ul(e,t,null,function(n){return n}),t},only:function(e){if(!nu(e))throw Error(ho(143));return e}};fe.Component=Ar;fe.Fragment=kv;fe.Profiler=Ev;fe.PureComponent=Zs;fe.StrictMode=Sv;fe.Suspense=Pv;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lv;fe.cloneElement=function(e,t,n){if(e==null)throw Error(ho(267,e));var r=Xs({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=tu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)ep.call(t,s)&&!tp.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:po,type:e.type,key:o,ref:i,props:r,_owner:a}};fe.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:Cv,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:Tv,_context:e},e.Consumer=e};fe.createElement=np;fe.createFactory=function(e){var t=np.bind(null,e);return t.type=e,t};fe.createRef=function(){return{current:null}};fe.forwardRef=function(e){return{$$typeof:$v,render:e}};fe.isValidElement=nu;fe.lazy=function(e){return{$$typeof:Ov,_ctor:e,_status:-1,_result:null}};fe.memo=function(e,t){return{$$typeof:Rv,type:e,compare:t===void 0?null:t}};fe.useCallback=function(e,t){return Gt().useCallback(e,t)};fe.useContext=function(e,t){return Gt().useContext(e,t)};fe.useDebugValue=function(){};fe.useEffect=function(e,t){return Gt().useEffect(e,t)};fe.useImperativeHandle=function(e,t,n){return Gt().useImperativeHandle(e,t,n)};fe.useLayoutEffect=function(e,t){return Gt().useLayoutEffect(e,t)};fe.useMemo=function(e,t){return Gt().useMemo(e,t)};fe.useReducer=function(e,t,n){return Gt().useReducer(e,t,n)};fe.useRef=function(e){return Gt().useRef(e)};fe.useState=function(e){return Gt().useState(e)};fe.version="16.14.0";qf.exports=fe;var T=qf.exports;const A=je(T);/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv=T,lp=60103;fo.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var Lc=Symbol.for;lp=Lc("react.element"),fo.Fragment=Lc("react.fragment")}var Fv=jv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mv=Object.prototype.hasOwnProperty,Bv={key:!0,ref:!0,__self:!0,__source:!0};function sp(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Mv.call(t,r)&&!Bv.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:lp,type:e,key:i,ref:a,props:o,_owner:Fv.current}}fo.jsx=sp;fo.jsxs=sp;Kf.exports=fo;var v=Kf.exports,up={exports:{}},pt={},cp={exports:{}},dp={};/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){var t,n,r,o,i;if(typeof window>"u"||typeof MessageChannel!="function"){var a=null,l=null,s=function(){if(a!==null)try{var w=e.unstable_now();a(!0,w),a=null}catch(P){throw setTimeout(s,0),P}},u=Date.now();e.unstable_now=function(){return Date.now()-u},t=function(w){a!==null?setTimeout(t,0,w):(a=w,setTimeout(s,0))},n=function(w,P){l=setTimeout(w,P)},r=function(){clearTimeout(l)},o=function(){return!1},i=e.unstable_forceFrameRate=function(){}}else{var d=window.performance,c=window.Date,m=window.setTimeout,k=window.clearTimeout;if(typeof console<"u"){var g=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),typeof g!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if(typeof d=="object"&&typeof d.now=="function")e.unstable_now=function(){return d.now()};else{var b=c.now();e.unstable_now=function(){return c.now()-b}}var f=!1,p=null,h=-1,y=5,S=0;o=function(){return e.unstable_now()>=S},i=function(){},e.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):y=0<w?Math.floor(1e3/w):5};var E=new MessageChannel,$=E.port2;E.port1.onmessage=function(){if(p!==null){var w=e.unstable_now();S=w+y;try{p(!0,w)?$.postMessage(null):(f=!1,p=null)}catch(P){throw $.postMessage(null),P}}else f=!1},t=function(w){p=w,f||(f=!0,$.postMessage(null))},n=function(w,P){h=m(function(){w(e.unstable_now())},P)},r=function(){k(h),h=-1}}function O(w,P){var x=w.length;w.push(P);e:for(;;){var F=x-1>>>1,I=w[F];if(I!==void 0&&0<J(I,P))w[F]=P,w[x]=I,x=F;else break e}}function L(w){return w=w[0],w===void 0?null:w}function j(w){var P=w[0];if(P!==void 0){var x=w.pop();if(x!==P){w[0]=x;e:for(var F=0,I=w.length;F<I;){var _=2*(F+1)-1,H=w[_],K=_+1,G=w[K];if(H!==void 0&&0>J(H,x))G!==void 0&&0>J(G,H)?(w[F]=G,w[K]=x,F=K):(w[F]=H,w[_]=x,F=_);else if(G!==void 0&&0>J(G,x))w[F]=G,w[K]=x,F=K;else break e}}return P}return null}function J(w,P){var x=w.sortIndex-P.sortIndex;return x!==0?x:w.id-P.id}var Y=[],X=[],ae=1,q=null,V=3,se=!1,te=!1,U=!1;function z(w){for(var P=L(X);P!==null;){if(P.callback===null)j(X);else if(P.startTime<=w)j(X),P.sortIndex=P.expirationTime,O(Y,P);else break;P=L(X)}}function B(w){if(U=!1,z(w),!te)if(L(Y)!==null)te=!0,t(Q);else{var P=L(X);P!==null&&n(B,P.startTime-w)}}function Q(w,P){te=!1,U&&(U=!1,r()),se=!0;var x=V;try{for(z(P),q=L(Y);q!==null&&(!(q.expirationTime>P)||w&&!o());){var F=q.callback;if(F!==null){q.callback=null,V=q.priorityLevel;var I=F(q.expirationTime<=P);P=e.unstable_now(),typeof I=="function"?q.callback=I:q===L(Y)&&j(Y),z(P)}else j(Y);q=L(Y)}if(q!==null)var _=!0;else{var H=L(X);H!==null&&n(B,H.startTime-P),_=!1}return _}finally{q=null,V=x,se=!1}}function D(w){switch(w){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var R=i;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(w){w.callback=null},e.unstable_continueExecution=function(){te||se||(te=!0,t(Q))},e.unstable_getCurrentPriorityLevel=function(){return V},e.unstable_getFirstCallbackNode=function(){return L(Y)},e.unstable_next=function(w){switch(V){case 1:case 2:case 3:var P=3;break;default:P=V}var x=V;V=P;try{return w()}finally{V=x}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=R,e.unstable_runWithPriority=function(w,P){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var x=V;V=w;try{return P()}finally{V=x}},e.unstable_scheduleCallback=function(w,P,x){var F=e.unstable_now();if(typeof x=="object"&&x!==null){var I=x.delay;I=typeof I=="number"&&0<I?F+I:F,x=typeof x.timeout=="number"?x.timeout:D(w)}else x=D(w),I=F;return x=I+x,w={id:ae++,callback:P,priorityLevel:w,startTime:I,expirationTime:x,sortIndex:-1},I>F?(w.sortIndex=I,O(X,w),L(Y)===null&&w===L(X)&&(U?r():U=!0,n(B,I-F))):(w.sortIndex=x,O(Y,w),te||se||(te=!0,t(Q))),w},e.unstable_shouldYield=function(){var w=e.unstable_now();z(w);var P=L(Y);return P!==q&&q!==null&&P!==null&&P.callback!==null&&P.startTime<=w&&P.expirationTime<q.expirationTime||o()},e.unstable_wrapCallback=function(w){var P=V;return function(){var x=V;V=P;try{return w.apply(this,arguments)}finally{V=x}}}})(dp);cp.exports=dp;var zv=cp.exports;/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qi=T,ze=Jf,_e=zv;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!qi)throw Error(M(227));function Uv(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var zr=!1,hi=null,mi=!1,Hl=null,Hv={onError:function(e){zr=!0,hi=e}};function Wv(e,t,n,r,o,i,a,l,s){zr=!1,hi=null,Uv.apply(Hv,arguments)}function Vv(e,t,n,r,o,i,a,l,s){if(Wv.apply(this,arguments),zr){if(zr){var u=hi;zr=!1,hi=null}else throw Error(M(198));mi||(mi=!0,Hl=u)}}var ru=null,fp=null,pp=null;function jc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=pp(n),Vv(r,t,void 0,e),e.currentTarget=null}var vi=null,Kn={};function hp(){if(vi)for(var e in Kn){var t=Kn[e],n=vi.indexOf(e);if(!(-1<n))throw Error(M(96,e));if(!gi[n]){if(!t.extractEvents)throw Error(M(97,e));gi[n]=t,n=t.eventTypes;for(var r in n){var o=void 0,i=n[r],a=t,l=r;if(Wl.hasOwnProperty(l))throw Error(M(99,l));Wl[l]=i;var s=i.phasedRegistrationNames;if(s){for(o in s)s.hasOwnProperty(o)&&Fc(s[o],a,l);o=!0}else i.registrationName?(Fc(i.registrationName,a,l),o=!0):o=!1;if(!o)throw Error(M(98,r,e))}}}}function Fc(e,t,n){if(dr[e])throw Error(M(100,e));dr[e]=t,ou[e]=t.eventTypes[n].dependencies}var gi=[],Wl={},dr={},ou={};function mp(e){var t=!1,n;for(n in e)if(e.hasOwnProperty(n)){var r=e[n];if(!Kn.hasOwnProperty(n)||Kn[n]!==r){if(Kn[n])throw Error(M(102,n));Kn[n]=r,t=!0}}t&&hp()}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vl=null,rr=null,or=null;function Mc(e){if(e=fp(e)){if(typeof Vl!="function")throw Error(M(280));var t=e.stateNode;t&&(t=ru(t),Vl(e.stateNode,e.type,t))}}function vp(e){rr?or?or.push(e):or=[e]:rr=e}function gp(){if(rr){var e=rr,t=or;if(or=rr=null,Mc(e),t)for(e=0;e<t.length;e++)Mc(t[e])}}function iu(e,t){return e(t)}function yp(e,t,n,r,o){return e(t,n,r,o)}function au(){}var xp=iu,En=!1,al=!1;function lu(){(rr!==null||or!==null)&&(au(),gp())}function wp(e,t,n){if(al)return e(t,n);al=!0;try{return xp(e,t,n)}finally{al=!1,lu()}}var Qv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bc=Object.prototype.hasOwnProperty,zc={},Uc={};function Gv(e){return Bc.call(Uc,e)?!0:Bc.call(zc,e)?!1:Qv.test(e)?Uc[e]=!0:(zc[e]=!0,!1)}function Kv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qv(e,t,n,r){if(t===null||typeof t>"u"||Kv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ue(e,t,n,r,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Le[e]=new Ue(e,0,!1,e,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Le[t]=new Ue(t,1,!1,e[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Le[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Le[e]=new Ue(e,2,!1,e,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Le[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1)});["checked","multiple","muted","selected"].forEach(function(e){Le[e]=new Ue(e,3,!0,e,null,!1)});["capture","download"].forEach(function(e){Le[e]=new Ue(e,4,!1,e,null,!1)});["cols","rows","size","span"].forEach(function(e){Le[e]=new Ue(e,6,!1,e,null,!1)});["rowSpan","start"].forEach(function(e){Le[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1)});var su=/[\-:]([a-z])/g;function uu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(su,uu);Le[t]=new Ue(t,1,!1,e,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(su,uu);Le[t]=new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(su,uu);Le[t]=new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(e){Le[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1)});Le.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(e){Le[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0)});var xt=qi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;xt.hasOwnProperty("ReactCurrentDispatcher")||(xt.ReactCurrentDispatcher={current:null});xt.hasOwnProperty("ReactCurrentBatchConfig")||(xt.ReactCurrentBatchConfig={suspense:null});function cu(e,t,n,r){var o=Le.hasOwnProperty(t)?Le[t]:null,i=o!==null?o.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");i||(qv(t,n,o,r)&&(n=null),r||o===null?Gv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Jv=/^(.*)[\\\/]/,qe=typeof Symbol=="function"&&Symbol.for,Oo=qe?Symbol.for("react.element"):60103,qn=qe?Symbol.for("react.portal"):60106,Sn=qe?Symbol.for("react.fragment"):60107,bp=qe?Symbol.for("react.strict_mode"):60108,Ko=qe?Symbol.for("react.profiler"):60114,Ap=qe?Symbol.for("react.provider"):60109,kp=qe?Symbol.for("react.context"):60110,Yv=qe?Symbol.for("react.concurrent_mode"):60111,du=qe?Symbol.for("react.forward_ref"):60112,qo=qe?Symbol.for("react.suspense"):60113,Ql=qe?Symbol.for("react.suspense_list"):60120,fu=qe?Symbol.for("react.memo"):60115,Sp=qe?Symbol.for("react.lazy"):60116,Ep=qe?Symbol.for("react.block"):60121,Hc=typeof Symbol=="function"&&Symbol.iterator;function $r(e){return e===null||typeof e!="object"?null:(e=Hc&&e[Hc]||e["@@iterator"],typeof e=="function"?e:null)}function Xv(e){if(e._status===-1){e._status=0;var t=e._ctor;t=t(),e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}}function Vt(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case qn:return"Portal";case Ko:return"Profiler";case bp:return"StrictMode";case qo:return"Suspense";case Ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case kp:return"Context.Consumer";case Ap:return"Context.Provider";case du:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case fu:return Vt(e.type);case Ep:return Vt(e.render);case Sp:if(e=e._status===1?e._result:null)return Vt(e)}return null}function pu(e){var t="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n="";break e;default:var r=e._debugOwner,o=e._debugSource,i=Vt(e.type);n=null,r&&(n=Vt(r.type)),r=i,i="",o?i=" (at "+o.fileName.replace(Jv,"")+":"+o.lineNumber+")":n&&(i=" (created by "+n+")"),n=`
    in `+(r||"Unknown")+i}t+=n,e=e.return}while(e);return t}function fn(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Tp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zv(e){var t=Tp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Do(e){e._valueTracker||(e._valueTracker=Zv(e))}function Cp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Tp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Gl(e,t){var n=t.checked;return ze({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Wc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=fn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function $p(e,t){t=t.checked,t!=null&&cu(e,"checked",t,!1)}function Kl(e,t){$p(e,t);var n=fn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ql(e,t.type,n):t.hasOwnProperty("defaultValue")&&ql(e,t.type,fn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ql(e,t,n){(t!=="number"||e.ownerDocument.activeElement!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function eg(e){var t="";return qi.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function Jl(e,t){return e=ze({children:void 0},t),(t=eg(t.children))&&(e.children=t),e}function ir(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+fn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return ze({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:fn(n)}}function Pp(e,t){var n=fn(t.value),r=fn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Gc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var Rp={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Op(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Op(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Io,Dp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!==Rp.svg||"innerHTML"in e)e.innerHTML=t;else{for(Io=Io||document.createElement("div"),Io.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Io.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}function No(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jn={animationend:No("Animation","AnimationEnd"),animationiteration:No("Animation","AnimationIteration"),animationstart:No("Animation","AnimationStart"),transitionend:No("Transition","TransitionEnd")},ll={},Ip={};yn&&(Ip=document.createElement("div").style,"AnimationEvent"in window||(delete Jn.animationend.animation,delete Jn.animationiteration.animation,delete Jn.animationstart.animation),"TransitionEvent"in window||delete Jn.transitionend.transition);function Ji(e){if(ll[e])return ll[e];if(!Jn[e])return e;var t=Jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ip)return ll[e]=t[n];return e}var Np=Ji("animationend"),_p=Ji("animationiteration"),Lp=Ji("animationstart"),jp=Ji("transitionend"),Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kc=new(typeof WeakMap=="function"?WeakMap:Map);function hu(e){var t=Kc.get(e);return t===void 0&&(t=new Map,Kc.set(e,t)),t}function Vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.effectTag&1026&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qc(e){if(Vn(e)!==e)throw Error(M(188))}function tg(e){var t=e.alternate;if(!t){if(t=Vn(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return qc(o),e;if(i===r)return qc(o),t;i=i.sibling}throw Error(M(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function Mp(e){if(e=tg(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function fr(e,t){if(t==null)throw Error(M(30));return e==null?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}function mu(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}var Pr=null;function ng(e){if(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(t))for(var r=0;r<t.length&&!e.isPropagationStopped();r++)jc(e,t[r],n[r]);else t&&jc(e,t,n);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}function Yi(e){if(e!==null&&(Pr=fr(Pr,e)),e=Pr,Pr=null,e){if(mu(e,ng),Pr)throw Error(M(95));if(mi)throw e=Hl,mi=!1,Hl=null,e}}function vu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}function Bp(e){if(!yn)return!1;e="on"+e;var t=e in document;return t||(t=document.createElement("div"),t.setAttribute(e,"return;"),t=typeof t[e]=="function"),t}var yi=[];function zp(e){e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>yi.length&&yi.push(e)}function Up(e,t,n,r){if(yi.length){var o=yi.pop();return o.topLevelType=e,o.eventSystemFlags=r,o.nativeEvent=t,o.targetInst=n,o}return{topLevelType:e,eventSystemFlags:r,nativeEvent:t,targetInst:n,ancestors:[]}}function Hp(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var r=n;if(r.tag===3)r=r.stateNode.containerInfo;else{for(;r.return;)r=r.return;r=r.tag!==3?null:r.stateNode.containerInfo}if(!r)break;t=n.tag,t!==5&&t!==6||e.ancestors.push(n),n=vo(r)}while(n);for(n=0;n<e.ancestors.length;n++){t=e.ancestors[n];var o=vu(e.nativeEvent);r=e.topLevelType;var i=e.nativeEvent,a=e.eventSystemFlags;n===0&&(a|=64);for(var l=null,s=0;s<gi.length;s++){var u=gi[s];u&&(u=u.extractEvents(r,t,i,o,a))&&(l=fr(l,u))}Yi(l)}}function Zl(e,t,n){if(!n.has(e)){switch(e){case"scroll":Mr(t,"scroll",!0);break;case"focus":case"blur":Mr(t,"focus",!0),Mr(t,"blur",!0),n.set("blur",null),n.set("focus",null);break;case"cancel":case"close":Bp(e)&&Mr(t,e,!0);break;case"invalid":case"submit":case"reset":break;default:Fr.indexOf(e)===-1&&xe(e,t)}n.set(e,null)}}var Wp,gu,Vp,es=!1,Tt=[],rn=null,on=null,an=null,Xr=new Map,Zr=new Map,Rr=[],ts="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),rg="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");function og(e,t){var n=hu(t);ts.forEach(function(r){Zl(r,t,n)}),rg.forEach(function(r){Zl(r,t,n)})}function ns(e,t,n,r,o){return{blockedOn:e,topLevelType:t,eventSystemFlags:n|32,nativeEvent:o,container:r}}function Jc(e,t){switch(e){case"focus":case"blur":rn=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":Xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zr.delete(t.pointerId)}}function Or(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e=ns(t,n,r,o,i),t!==null&&(t=go(t),t!==null&&gu(t)),e):(e.eventSystemFlags|=r,e)}function ig(e,t,n,r,o){switch(t){case"focus":return rn=Or(rn,e,t,n,r,o),!0;case"dragenter":return on=Or(on,e,t,n,r,o),!0;case"mouseover":return an=Or(an,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Xr.set(i,Or(Xr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Zr.set(i,Or(Zr.get(i)||null,e,t,n,r,o)),!0}return!1}function ag(e){var t=vo(e.target);if(t!==null){var n=Vn(t);if(n!==null){if(t=n.tag,t===13){if(t=Fp(n),t!==null){e.blockedOn=t,_e.unstable_runWithPriority(e.priority,function(){Vp(n)});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jo(e){if(e.blockedOn!==null)return!1;var t=wu(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);if(t!==null){var n=go(t);return n!==null&&gu(n),e.blockedOn=t,!1}return!0}function Yc(e,t,n){Jo(e)&&n.delete(t)}function lg(){for(es=!1;0<Tt.length;){var e=Tt[0];if(e.blockedOn!==null){e=go(e.blockedOn),e!==null&&Wp(e);break}var t=wu(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);t!==null?e.blockedOn=t:Tt.shift()}rn!==null&&Jo(rn)&&(rn=null),on!==null&&Jo(on)&&(on=null),an!==null&&Jo(an)&&(an=null),Xr.forEach(Yc),Zr.forEach(Yc)}function Dr(e,t){e.blockedOn===t&&(e.blockedOn=null,es||(es=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,lg)))}function Qp(e){function t(o){return Dr(o,e)}if(0<Tt.length){Dr(Tt[0],e);for(var n=1;n<Tt.length;n++){var r=Tt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&Dr(rn,e),on!==null&&Dr(on,e),an!==null&&Dr(an,e),Xr.forEach(t),Zr.forEach(t),n=0;n<Rr.length;n++)r=Rr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rr.length&&(n=Rr[0],n.blockedOn===null);)ag(n),n.blockedOn===null&&Rr.shift()}var Gp={},Kp=new Map,yu=new Map,sg=["abort","abort",Np,"animationEnd",_p,"animationIteration",Lp,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",jp,"transitionEnd","waiting","waiting"];function xu(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],o=e[n+1],i="on"+(o[0].toUpperCase()+o.slice(1));i={phasedRegistrationNames:{bubbled:i,captured:i+"Capture"},dependencies:[r],eventPriority:t},yu.set(r,t),Kp.set(r,i),Gp[o]=i}}xu("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);xu("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);xu(sg,2);for(var Xc="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),sl=0;sl<Xc.length;sl++)yu.set(Xc[sl],0);var ug=_e.unstable_UserBlockingPriority,cg=_e.unstable_runWithPriority,Yo=!0;function xe(e,t){Mr(t,e,!1)}function Mr(e,t,n){var r=yu.get(t);switch(r===void 0?2:r){case 0:r=dg.bind(null,t,1,e);break;case 1:r=fg.bind(null,t,1,e);break;default:r=Xi.bind(null,t,1,e)}n?e.addEventListener(t,r,!0):e.addEventListener(t,r,!1)}function dg(e,t,n,r){En||au();var o=Xi,i=En;En=!0;try{yp(o,e,t,n,r)}finally{(En=i)||lu()}}function fg(e,t,n,r){cg(ug,Xi.bind(null,e,t,n,r))}function Xi(e,t,n,r){if(Yo)if(0<Tt.length&&-1<ts.indexOf(e))e=ns(null,e,t,n,r),Tt.push(e);else{var o=wu(e,t,n,r);if(o===null)Jc(e,r);else if(-1<ts.indexOf(e))e=ns(o,e,t,n,r),Tt.push(e);else if(!ig(o,e,t,n,r)){Jc(e,r),e=Up(e,r,null,t);try{wp(Hp,e)}finally{zp(e)}}}}function wu(e,t,n,r){if(n=vu(r),n=vo(n),n!==null){var o=Vn(n);if(o===null)n=null;else{var i=o.tag;if(i===13){if(n=Fp(o),n!==null)return n;n=null}else if(i===3){if(o.stateNode.hydrate)return o.tag===3?o.stateNode.containerInfo:null;n=null}else o!==n&&(n=null)}}e=Up(e,r,n,t);try{wp(Hp,e)}finally{zp(e)}return null}var Ur={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pg=["Webkit","ms","Moz","O"];Object.keys(Ur).forEach(function(e){pg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ur[t]=Ur[e]})});function qp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ur.hasOwnProperty(e)&&Ur[e]?(""+t).trim():t+"px"}function Jp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=qp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var hg=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rs(e,t){if(t){if(hg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e,""));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62,""))}}function os(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zc=Rp.html;function Mt(e,t){e=e.nodeType===9||e.nodeType===11?e:e.ownerDocument;var n=hu(e);t=ou[t];for(var r=0;r<t.length;r++)Zl(t[r],e,n)}function xi(){}function is(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ed(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function td(e,t){var n=ed(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ed(n)}}function Yp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nd(){for(var e=window,t=is();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=is(e.document)}return t}function as(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Xp="$",Zp="/$",bu="$?",Au="$!",ul=null,cl=null;function eh(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function ls(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var dl=typeof setTimeout=="function"?setTimeout:void 0,mg=typeof clearTimeout=="function"?clearTimeout:void 0;function ar(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function rd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===Xp||n===Au||n===bu){if(t===0)return e;t--}else n===Zp&&t++}e=e.previousSibling}return null}var ku=Math.random().toString(36).slice(2),Xt="__reactInternalInstance$"+ku,wi="__reactEventHandlers$"+ku,mo="__reactContainere$"+ku;function vo(e){var t=e[Xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mo]||n[Xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=rd(e);e!==null;){if(n=e[Xt])return n;e=rd(e)}return t}e=n,n=e.parentNode}return null}function go(e){return e=e[Xt]||e[mo],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function Su(e){return e[wi]||null}function Bt(e){do e=e.return;while(e&&e.tag!==5);return e||null}function th(e,t){var n=e.stateNode;if(!n)return null;var r=ru(n);if(!r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}function od(e,t,n){(t=th(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=fr(n._dispatchListeners,t),n._dispatchInstances=fr(n._dispatchInstances,e))}function vg(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,n=[];t;)n.push(t),t=Bt(t);for(t=n.length;0<t--;)od(n[t],"captured",e);for(t=0;t<n.length;t++)od(n[t],"bubbled",e)}}function ss(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=th(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=fr(n._dispatchListeners,t),n._dispatchInstances=fr(n._dispatchInstances,e))}function gg(e){e&&e.dispatchConfig.registrationName&&ss(e._targetInst,null,e)}function pr(e){mu(e,vg)}var Zt=null,Eu=null,Xo=null;function nh(){if(Xo)return Xo;var e,t=Eu,n=t.length,r,o="value"in Zt?Zt.value:Zt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Xo=o.slice(e,1<r?1-r:void 0)}function Zo(){return!0}function bi(){return!1}function nt(e,t,n,r){this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface;for(var o in e)e.hasOwnProperty(o)&&((t=e[o])?this[o]=t(n):o==="target"?this.target=r:this[o]=n[o]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Zo:bi,this.isPropagationStopped=bi,this}ze(nt.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){this.isPersistent=Zo},isPersistent:bi,destructor:function(){var e=this.constructor.Interface,t;for(t in e)this[t]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=bi,this._dispatchInstances=this._dispatchListeners=null}});nt.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};nt.extend=function(e){function t(){}function n(){return r.apply(this,arguments)}var r=this;t.prototype=r.prototype;var o=new t;return ze(o,n.prototype),n.prototype=o,n.prototype.constructor=n,n.Interface=ze({},r.Interface,e),n.extend=r.extend,rh(n),n};rh(nt);function yg(e,t,n,r){if(this.eventPool.length){var o=this.eventPool.pop();return this.call(o,e,t,n,r),o}return new this(e,t,n,r)}function xg(e){if(!(e instanceof this))throw Error(M(279));e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function rh(e){e.eventPool=[],e.getPooled=yg,e.release=xg}var wg=nt.extend({data:null}),bg=nt.extend({data:null}),Ag=[9,13,27,32],Tu=yn&&"CompositionEvent"in window,Hr=null;yn&&"documentMode"in document&&(Hr=document.documentMode);var kg=yn&&"TextEvent"in window&&!Hr,oh=yn&&(!Tu||Hr&&8<Hr&&11>=Hr),id=" ",jt={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},ad=!1;function ih(e,t){switch(e){case"keyup":return Ag.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function ah(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function Sg(e,t){switch(e){case"compositionend":return ah(t);case"keypress":return t.which!==32?null:(ad=!0,id);case"textInput":return e=t.data,e===id&&ad?null:e;default:return null}}function Eg(e,t){if(Yn)return e==="compositionend"||!Tu&&ih(e,t)?(e=nh(),Xo=Eu=Zt=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return oh&&t.locale!=="ko"?null:t.data;default:return null}}var Tg={eventTypes:jt,extractEvents:function(e,t,n,r){var o;if(Tu)e:{switch(e){case"compositionstart":var i=jt.compositionStart;break e;case"compositionend":i=jt.compositionEnd;break e;case"compositionupdate":i=jt.compositionUpdate;break e}i=void 0}else Yn?ih(e,n)&&(i=jt.compositionEnd):e==="keydown"&&n.keyCode===229&&(i=jt.compositionStart);return i?(oh&&n.locale!=="ko"&&(Yn||i!==jt.compositionStart?i===jt.compositionEnd&&Yn&&(o=nh()):(Zt=r,Eu="value"in Zt?Zt.value:Zt.textContent,Yn=!0)),i=wg.getPooled(i,t,n,r),o?i.data=o:(o=ah(n),o!==null&&(i.data=o)),pr(i),o=i):o=null,(e=kg?Sg(e,n):Eg(e,n))?(t=bg.getPooled(jt.beforeInput,t,n,r),t.data=e,pr(t)):t=null,o===null?t:t===null?o:[o,t]}},Cg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cg[e.type]:t==="textarea"}var sh={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function uh(e,t,n){return e=nt.getPooled(sh.change,e,t,n),e.type="change",vp(n),pr(e),e}var Wr=null,eo=null;function $g(e){Yi(e)}function Zi(e){var t=Fn(e);if(Cp(t))return e}function Pg(e,t){if(e==="change")return t}var us=!1;yn&&(us=Bp("input")&&(!document.documentMode||9<document.documentMode));function ld(){Wr&&(Wr.detachEvent("onpropertychange",ch),eo=Wr=null)}function ch(e){if(e.propertyName==="value"&&Zi(eo))if(e=uh(eo,e,vu(e)),En)Yi(e);else{En=!0;try{iu($g,e)}finally{En=!1,lu()}}}function Rg(e,t,n){e==="focus"?(ld(),Wr=t,eo=n,Wr.attachEvent("onpropertychange",ch)):e==="blur"&&ld()}function Og(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zi(eo)}function Dg(e,t){if(e==="click")return Zi(t)}function Ig(e,t){if(e==="input"||e==="change")return Zi(t)}var Ng={eventTypes:sh,_isInputEventSupported:us,extractEvents:function(e,t,n,r){var o=t?Fn(t):window,i=o.nodeName&&o.nodeName.toLowerCase();if(i==="select"||i==="input"&&o.type==="file")var a=Pg;else if(lh(o))if(us)a=Ig;else{a=Og;var l=Rg}else(i=o.nodeName)&&i.toLowerCase()==="input"&&(o.type==="checkbox"||o.type==="radio")&&(a=Dg);if(a&&(a=a(e,t)))return uh(a,n,r);l&&l(e,o,t),e==="blur"&&(e=o._wrapperState)&&e.controlled&&o.type==="number"&&ql(o,"number",o.value)}},yo=nt.extend({view:null,detail:null}),_g={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_g[e])?!!t[e]:!1}function Cu(){return Lg}var sd=0,ud=0,cd=!1,dd=!1,xo=yo.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Cu,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var t=sd;return sd=e.screenX,cd?e.type==="mousemove"?e.screenX-t:0:(cd=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var t=ud;return ud=e.screenY,dd?e.type==="mousemove"?e.screenY-t:0:(dd=!0,0)}}),dh=xo.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Ir={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},jg={eventTypes:Ir,extractEvents:function(e,t,n,r,o){var i=e==="mouseover"||e==="pointerover",a=e==="mouseout"||e==="pointerout";if(i&&!(o&32)&&(n.relatedTarget||n.fromElement)||!a&&!i)return null;if(i=r.window===r?r:(i=r.ownerDocument)?i.defaultView||i.parentWindow:window,a){if(a=t,t=(t=n.relatedTarget||n.toElement)?vo(t):null,t!==null){var l=Vn(t);(t!==l||t.tag!==5&&t.tag!==6)&&(t=null)}}else a=null;if(a===t)return null;if(e==="mouseout"||e==="mouseover")var s=xo,u=Ir.mouseLeave,d=Ir.mouseEnter,c="mouse";else(e==="pointerout"||e==="pointerover")&&(s=dh,u=Ir.pointerLeave,d=Ir.pointerEnter,c="pointer");if(e=a==null?i:Fn(a),i=t==null?i:Fn(t),u=s.getPooled(u,a,n,r),u.type=c+"leave",u.target=e,u.relatedTarget=i,n=s.getPooled(d,t,n,r),n.type=c+"enter",n.target=i,n.relatedTarget=e,r=a,c=t,r&&c)e:{for(s=r,d=c,a=0,e=s;e;e=Bt(e))a++;for(e=0,t=d;t;t=Bt(t))e++;for(;0<a-e;)s=Bt(s),a--;for(;0<e-a;)d=Bt(d),e--;for(;a--;){if(s===d||s===d.alternate)break e;s=Bt(s),d=Bt(d)}s=null}else s=null;for(d=s,s=[];r&&r!==d&&(a=r.alternate,!(a!==null&&a===d));)s.push(r),r=Bt(r);for(r=[];c&&c!==d&&(a=c.alternate,!(a!==null&&a===d));)r.push(c),c=Bt(c);for(c=0;c<s.length;c++)ss(s[c],"bubbled",u);for(c=r.length;0<c--;)ss(r[c],"captured",n);return o&64?[u,n]:[u]}};function Fg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mn=typeof Object.is=="function"?Object.is:Fg,Mg=Object.prototype.hasOwnProperty;function to(e,t){if(Mn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Mg.call(t,n[r])||!Mn(e[n[r]],t[n[r]]))return!1;return!0}var Bg=yn&&"documentMode"in document&&11>=document.documentMode,fh={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Xn=null,cs=null,Vr=null,ds=!1;function fd(e,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;return ds||Xn==null||Xn!==is(n)?null:(n=Xn,"selectionStart"in n&&as(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Vr&&to(Vr,n)?null:(Vr=n,e=nt.getPooled(fh.select,cs,e,t),e.type="select",e.target=Xn,pr(e),e))}var zg={eventTypes:fh,extractEvents:function(e,t,n,r,o,i){if(o=i||(r.window===r?r.document:r.nodeType===9?r:r.ownerDocument),!(i=!o)){e:{o=hu(o),i=ou.onSelect;for(var a=0;a<i.length;a++)if(!o.has(i[a])){o=!1;break e}o=!0}i=!o}if(i)return null;switch(o=t?Fn(t):window,e){case"focus":(lh(o)||o.contentEditable==="true")&&(Xn=o,cs=t,Vr=null);break;case"blur":Vr=cs=Xn=null;break;case"mousedown":ds=!0;break;case"contextmenu":case"mouseup":case"dragend":return ds=!1,fd(n,r);case"selectionchange":if(Bg)break;case"keydown":case"keyup":return fd(n,r)}return null}},Ug=nt.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Hg=nt.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wg=yo.extend({relatedTarget:null});function ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}var Vg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gg=yo.extend({key:function(e){if(e.key){var t=Vg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qg[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Cu,charCode:function(e){return e.type==="keypress"?ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kg=xo.extend({dataTransfer:null}),qg=yo.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Cu}),Jg=nt.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Yg=xo.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),Xg={eventTypes:Gp,extractEvents:function(e,t,n,r){var o=Kp.get(e);if(!o)return null;switch(e){case"keypress":if(ei(n)===0)return null;case"keydown":case"keyup":e=Gg;break;case"blur":case"focus":e=Wg;break;case"click":if(n.button===2)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=xo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=Kg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=qg;break;case Np:case _p:case Lp:e=Ug;break;case jp:e=Jg;break;case"scroll":e=yo;break;case"wheel":e=Yg;break;case"copy":case"cut":case"paste":e=Hg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=dh;break;default:e=nt}return t=e.getPooled(o,t,n,r),pr(t),t}};if(vi)throw Error(M(101));vi=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));hp();var Zg=go;ru=Su;fp=Zg;pp=Fn;mp({SimpleEventPlugin:Xg,EnterLeaveEventPlugin:jg,ChangeEventPlugin:Ng,SelectEventPlugin:zg,BeforeInputEventPlugin:Tg});var fs=[],Zn=-1;function ye(e){0>Zn||(e.current=fs[Zn],fs[Zn]=null,Zn--)}function Se(e,t){Zn++,fs[Zn]=e.current,e.current=t}var pn={},Be={current:pn},Qe={current:!1},Bn=pn;function hr(e,t){var n=e.type.contextTypes;if(!n)return pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ge(e){return e=e.childContextTypes,e!=null}function Ai(){ye(Qe),ye(Be)}function pd(e,t,n){if(Be.current!==pn)throw Error(M(168));Se(Be,t),Se(Qe,n)}function ph(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in e))throw Error(M(108,Vt(t)||"Unknown",o));return ze({},n,{},r)}function ti(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pn,Bn=Be.current,Se(Be,e),Se(Qe,Qe.current),!0}function hd(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=ph(e,t,Bn),r.__reactInternalMemoizedMergedChildContext=e,ye(Qe),ye(Be),Se(Be,e)):ye(Qe),Se(Qe,n)}var ey=_e.unstable_runWithPriority,$u=_e.unstable_scheduleCallback,hh=_e.unstable_cancelCallback,md=_e.unstable_requestPaint,ps=_e.unstable_now,ty=_e.unstable_getCurrentPriorityLevel,ea=_e.unstable_ImmediatePriority,mh=_e.unstable_UserBlockingPriority,vh=_e.unstable_NormalPriority,gh=_e.unstable_LowPriority,yh=_e.unstable_IdlePriority,xh={},ny=_e.unstable_shouldYield,ry=md!==void 0?md:function(){},zt=null,ni=null,fl=!1,vd=ps(),lt=1e4>vd?ps:function(){return ps()-vd};function ta(){switch(ty()){case ea:return 99;case mh:return 98;case vh:return 97;case gh:return 96;case yh:return 95;default:throw Error(M(332))}}function wh(e){switch(e){case 99:return ea;case 98:return mh;case 97:return vh;case 96:return gh;case 95:return yh;default:throw Error(M(332))}}function hn(e,t){return e=wh(e),ey(e,t)}function bh(e,t,n){return e=wh(e),$u(e,t,n)}function gd(e){return zt===null?(zt=[e],ni=$u(ea,Ah)):zt.push(e),xh}function Nt(){if(ni!==null){var e=ni;ni=null,hh(e)}Ah()}function Ah(){if(!fl&&zt!==null){fl=!0;var e=0;try{var t=zt;hn(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),zt=null}catch(n){throw zt!==null&&(zt=zt.slice(e+1)),$u(ea,Nt),n}finally{fl=!1}}}function ri(e,t,n){return n/=10,1073741821-(((1073741821-e+t/10)/n|0)+1)*n}function gt(e,t){if(e&&e.defaultProps){t=ze({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n])}return t}var ki={current:null},Si=null,er=null,Ei=null;function Pu(){Ei=er=Si=null}function Ru(e){var t=ki.current;ye(ki),e.type._context._currentValue=t}function kh(e,t){for(;e!==null;){var n=e.alternate;if(e.childExpirationTime<t)e.childExpirationTime=t,n!==null&&n.childExpirationTime<t&&(n.childExpirationTime=t);else if(n!==null&&n.childExpirationTime<t)n.childExpirationTime=t;else break;e=e.return}}function lr(e,t){Si=e,Ei=er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.expirationTime>=t&&(Ct=!0),e.firstContext=null)}function dt(e,t){if(Ei!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(Ei=e,t=1073741823),t={context:e,observedBits:t,next:null},er===null){if(Si===null)throw Error(M(308));er=t,Si.dependencies={expirationTime:0,firstContext:t,responders:null}}else er=er.next=t;return e._currentValue}var Yt=!1;function Ou(e){e.updateQueue={baseState:e.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}function Du(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,baseQueue:e.baseQueue,shared:e.shared,effects:e.effects})}function ln(e,t){return e={expirationTime:e,suspenseConfig:t,tag:0,payload:null,callback:null,next:null},e.next=e}function sn(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function yd(e,t){var n=e.alternate;n!==null&&Du(n,e),e=e.updateQueue,n=e.baseQueue,n===null?(e.baseQueue=t.next=t,t.next=t):(t.next=n.next,n.next=t)}function no(e,t,n,r){var o=e.updateQueue;Yt=!1;var i=o.baseQueue,a=o.shared.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}i=a,o.shared.pending=null,l=e.alternate,l!==null&&(l=l.updateQueue,l!==null&&(l.baseQueue=a))}if(i!==null){l=i.next;var s=o.baseState,u=0,d=null,c=null,m=null;if(l!==null){var k=l;do{if(a=k.expirationTime,a<r){var g={expirationTime:k.expirationTime,suspenseConfig:k.suspenseConfig,tag:k.tag,payload:k.payload,callback:k.callback,next:null};m===null?(c=m=g,d=s):m=m.next=g,a>u&&(u=a)}else{m!==null&&(m=m.next={expirationTime:1073741823,suspenseConfig:k.suspenseConfig,tag:k.tag,payload:k.payload,callback:k.callback,next:null}),Zh(a,k.suspenseConfig);e:{var b=e,f=k;switch(a=t,g=n,f.tag){case 1:if(b=f.payload,typeof b=="function"){s=b.call(g,s,a);break e}s=b;break e;case 3:b.effectTag=b.effectTag&-4097|64;case 0:if(b=f.payload,a=typeof b=="function"?b.call(g,s,a):b,a==null)break e;s=ze({},s,a);break e;case 2:Yt=!0}}k.callback!==null&&(e.effectTag|=32,a=o.effects,a===null?o.effects=[k]:a.push(k))}if(k=k.next,k===null||k===l){if(a=o.shared.pending,a===null)break;k=i.next=a.next,a.next=l,o.baseQueue=i=a,o.shared.pending=null}}while(!0)}m===null?d=s:m.next=c,o.baseState=d,o.baseQueue=m,aa(u),e.expirationTime=u,e.memoizedState=s}}function xd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=o,o=n,typeof r!="function")throw Error(M(191,r));r.call(o)}}}var Qr=xt.ReactCurrentBatchConfig,Sh=new qi.Component().refs;function Ti(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ze({},t,n),e.memoizedState=n,e.expirationTime===0&&(e.updateQueue.baseState=n)}var na={isMounted:function(e){return(e=e._reactInternalFiber)?Vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternalFiber;var r=Ot(),o=Qr.suspense;r=_n(r,e,o),o=ln(r,o),o.payload=t,n!=null&&(o.callback=n),sn(e,o),cn(e,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternalFiber;var r=Ot(),o=Qr.suspense;r=_n(r,e,o),o=ln(r,o),o.tag=1,o.payload=t,n!=null&&(o.callback=n),sn(e,o),cn(e,r)},enqueueForceUpdate:function(e,t){e=e._reactInternalFiber;var n=Ot(),r=Qr.suspense;n=_n(n,e,r),r=ln(n,r),r.tag=2,t!=null&&(r.callback=t),sn(e,r),cn(e,n)}};function wd(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!to(n,r)||!to(o,i):!0}function Eh(e,t,n){var r=!1,o=pn,i=t.contextType;return typeof i=="object"&&i!==null?i=dt(i):(o=Ge(t)?Bn:Be.current,r=t.contextTypes,i=(r=r!=null)?hr(e,o):pn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=na,e.stateNode=t,t._reactInternalFiber=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function bd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&na.enqueueReplaceState(t,t.state,null)}function hs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Sh,Ou(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=dt(i):(i=Ge(t)?Bn:Be.current,o.context=hr(e,i)),no(e,n,o,r),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ti(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&na.enqueueReplaceState(o,o.state,null),no(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.effectTag|=4)}var _o=Array.isArray;function Nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var a=r.refs;a===Sh&&(a=r.refs={}),i===null?delete a[o]:a[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function Lo(e,t){if(e.type!=="textarea")throw Error(M(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t,""))}function Th(e){function t(f,p){if(e){var h=f.lastEffect;h!==null?(h.nextEffect=p,f.lastEffect=p):f.firstEffect=f.lastEffect=p,p.nextEffect=null,p.effectTag=8}}function n(f,p){if(!e)return null;for(;p!==null;)t(f,p),p=p.sibling;return null}function r(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function o(f,p){return f=zn(f,p),f.index=0,f.sibling=null,f}function i(f,p,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<p?(f.effectTag=2,p):h):(f.effectTag=2,p)):p}function a(f){return e&&f.alternate===null&&(f.effectTag=2),f}function l(f,p,h,y){return p===null||p.tag!==6?(p=yl(h,f.mode,y),p.return=f,p):(p=o(p,h),p.return=f,p)}function s(f,p,h,y){return p!==null&&p.elementType===h.type?(y=o(p,h.props),y.ref=Nr(f,p,h),y.return=f,y):(y=li(h.type,h.key,h.props,null,f.mode,y),y.ref=Nr(f,p,h),y.return=f,y)}function u(f,p,h,y){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=xl(h,f.mode,y),p.return=f,p):(p=o(p,h.children||[]),p.return=f,p)}function d(f,p,h,y,S){return p===null||p.tag!==7?(p=nn(h,f.mode,y,S),p.return=f,p):(p=o(p,h),p.return=f,p)}function c(f,p,h){if(typeof p=="string"||typeof p=="number")return p=yl(""+p,f.mode,h),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Oo:return h=li(p.type,p.key,p.props,null,f.mode,h),h.ref=Nr(f,null,p),h.return=f,h;case qn:return p=xl(p,f.mode,h),p.return=f,p}if(_o(p)||$r(p))return p=nn(p,f.mode,h,null),p.return=f,p;Lo(f,p)}return null}function m(f,p,h,y){var S=p!==null?p.key:null;if(typeof h=="string"||typeof h=="number")return S!==null?null:l(f,p,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Oo:return h.key===S?h.type===Sn?d(f,p,h.props.children,y,S):s(f,p,h,y):null;case qn:return h.key===S?u(f,p,h,y):null}if(_o(h)||$r(h))return S!==null?null:d(f,p,h,y,null);Lo(f,h)}return null}function k(f,p,h,y,S){if(typeof y=="string"||typeof y=="number")return f=f.get(h)||null,l(p,f,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Oo:return f=f.get(y.key===null?h:y.key)||null,y.type===Sn?d(p,f,y.props.children,S,y.key):s(p,f,y,S);case qn:return f=f.get(y.key===null?h:y.key)||null,u(p,f,y,S)}if(_o(y)||$r(y))return f=f.get(h)||null,d(p,f,y,S,null);Lo(p,y)}return null}function g(f,p,h,y){for(var S=null,E=null,$=p,O=p=0,L=null;$!==null&&O<h.length;O++){$.index>O?(L=$,$=null):L=$.sibling;var j=m(f,$,h[O],y);if(j===null){$===null&&($=L);break}e&&$&&j.alternate===null&&t(f,$),p=i(j,p,O),E===null?S=j:E.sibling=j,E=j,$=L}if(O===h.length)return n(f,$),S;if($===null){for(;O<h.length;O++)$=c(f,h[O],y),$!==null&&(p=i($,p,O),E===null?S=$:E.sibling=$,E=$);return S}for($=r(f,$);O<h.length;O++)L=k($,f,O,h[O],y),L!==null&&(e&&L.alternate!==null&&$.delete(L.key===null?O:L.key),p=i(L,p,O),E===null?S=L:E.sibling=L,E=L);return e&&$.forEach(function(J){return t(f,J)}),S}function b(f,p,h,y){var S=$r(h);if(typeof S!="function")throw Error(M(150));if(h=S.call(h),h==null)throw Error(M(151));for(var E=S=null,$=p,O=p=0,L=null,j=h.next();$!==null&&!j.done;O++,j=h.next()){$.index>O?(L=$,$=null):L=$.sibling;var J=m(f,$,j.value,y);if(J===null){$===null&&($=L);break}e&&$&&J.alternate===null&&t(f,$),p=i(J,p,O),E===null?S=J:E.sibling=J,E=J,$=L}if(j.done)return n(f,$),S;if($===null){for(;!j.done;O++,j=h.next())j=c(f,j.value,y),j!==null&&(p=i(j,p,O),E===null?S=j:E.sibling=j,E=j);return S}for($=r(f,$);!j.done;O++,j=h.next())j=k($,f,O,j.value,y),j!==null&&(e&&j.alternate!==null&&$.delete(j.key===null?O:j.key),p=i(j,p,O),E===null?S=j:E.sibling=j,E=j);return e&&$.forEach(function(Y){return t(f,Y)}),S}return function(f,p,h,y){var S=typeof h=="object"&&h!==null&&h.type===Sn&&h.key===null;S&&(h=h.props.children);var E=typeof h=="object"&&h!==null;if(E)switch(h.$$typeof){case Oo:e:{for(E=h.key,S=p;S!==null;){if(S.key===E){switch(S.tag){case 7:if(h.type===Sn){n(f,S.sibling),p=o(S,h.props.children),p.return=f,f=p;break e}break;default:if(S.elementType===h.type){n(f,S.sibling),p=o(S,h.props),p.ref=Nr(f,S,h),p.return=f,f=p;break e}}n(f,S);break}else t(f,S);S=S.sibling}h.type===Sn?(p=nn(h.props.children,f.mode,y,h.key),p.return=f,f=p):(y=li(h.type,h.key,h.props,null,f.mode,y),y.ref=Nr(f,p,h),y.return=f,f=y)}return a(f);case qn:e:{for(S=h.key;p!==null;){if(p.key===S)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(f,p.sibling),p=o(p,h.children||[]),p.return=f,f=p;break e}else{n(f,p);break}else t(f,p);p=p.sibling}p=xl(h,f.mode,y),p.return=f,f=p}return a(f)}if(typeof h=="string"||typeof h=="number")return h=""+h,p!==null&&p.tag===6?(n(f,p.sibling),p=o(p,h),p.return=f,f=p):(n(f,p),p=yl(h,f.mode,y),p.return=f,f=p),a(f);if(_o(h))return g(f,p,h,y);if($r(h))return b(f,p,h,y);if(E&&Lo(f,h),typeof h>"u"&&!S)switch(f.tag){case 1:case 0:throw f=f.type,Error(M(152,f.displayName||f.name||"Component"))}return n(f,p)}}var mr=Th(!0),Iu=Th(!1),wo={},Rt={current:wo},ro={current:wo},oo={current:wo};function Tn(e){if(e===wo)throw Error(M(174));return e}function ms(e,t){switch(Se(oo,t),Se(ro,e),Se(Rt,wo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Xl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Xl(t,e)}ye(Rt),Se(Rt,t)}function vr(){ye(Rt),ye(ro),ye(oo)}function Ad(e){Tn(oo.current);var t=Tn(Rt.current),n=Xl(t,e.type);t!==n&&(Se(ro,e),Se(Rt,n))}function Nu(e){ro.current===e&&(ye(Rt),ye(ro))}var we={current:0};function Ci(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===bu||n.data===Au))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.effectTag&64)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function _u(e,t){return{responder:e,props:t}}var oi=xt.ReactCurrentDispatcher,st=xt.ReactCurrentBatchConfig,en=0,Ce=null,Fe=null,Me=null,$i=!1;function Je(){throw Error(M(321))}function Lu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mn(e[n],t[n]))return!1;return!0}function ju(e,t,n,r,o,i){if(en=i,Ce=t,t.memoizedState=null,t.updateQueue=null,t.expirationTime=0,oi.current=e===null||e.memoizedState===null?oy:iy,e=n(r,o),t.expirationTime===en){i=0;do{if(t.expirationTime=0,!(25>i))throw Error(M(301));i+=1,Me=Fe=null,t.updateQueue=null,oi.current=ay,e=n(r,o)}while(t.expirationTime===en)}if(oi.current=Oi,t=Fe!==null&&Fe.next!==null,en=0,Me=Fe=Ce=null,$i=!1,t)throw Error(M(300));return e}function sr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?Ce.memoizedState=Me=e:Me=Me.next=e,Me}function kr(){if(Fe===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=Me===null?Ce.memoizedState:Me.next;if(t!==null)Me=t,Fe=e;else{if(e===null)throw Error(M(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Me===null?Ce.memoizedState=Me=e:Me=Me.next=e}return Me}function Dn(e,t){return typeof t=="function"?t(e):t}function jo(e){var t=kr(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=Fe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){o=o.next,r=r.baseState;var l=a=i=null,s=o;do{var u=s.expirationTime;if(u<en){var d={expirationTime:s.expirationTime,suspenseConfig:s.suspenseConfig,action:s.action,eagerReducer:s.eagerReducer,eagerState:s.eagerState,next:null};l===null?(a=l=d,i=r):l=l.next=d,u>Ce.expirationTime&&(Ce.expirationTime=u,aa(u))}else l!==null&&(l=l.next={expirationTime:1073741823,suspenseConfig:s.suspenseConfig,action:s.action,eagerReducer:s.eagerReducer,eagerState:s.eagerState,next:null}),Zh(u,s.suspenseConfig),r=s.eagerReducer===e?s.eagerState:e(r,s.action);s=s.next}while(s!==null&&s!==o);l===null?i=r:l.next=a,Mn(r,t.memoizedState)||(Ct=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=l,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function Fo(e){var t=kr(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Mn(i,t.memoizedState)||(Ct=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function pl(e){var t=sr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Dn,lastRenderedState:e},e=e.dispatch=Dh.bind(null,Ce,e),[t.memoizedState,e]}function vs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null},Ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ch(){return kr().memoizedState}function gs(e,t,n,r){var o=sr();Ce.effectTag|=e,o.memoizedState=vs(1|t,n,void 0,r===void 0?null:r)}function Fu(e,t,n,r){var o=kr();r=r===void 0?null:r;var i=void 0;if(Fe!==null){var a=Fe.memoizedState;if(i=a.destroy,r!==null&&Lu(r,a.deps)){vs(t,n,i,r);return}}Ce.effectTag|=e,o.memoizedState=vs(1|t,n,i,r)}function kd(e,t){return gs(516,4,e,t)}function Pi(e,t){return Fu(516,4,e,t)}function $h(e,t){return Fu(4,2,e,t)}function Ph(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rh(e,t,n){return n=n!=null?n.concat([e]):null,Fu(4,2,Ph.bind(null,t,e),n)}function Mu(){}function Sd(e,t){return sr().memoizedState=[e,t===void 0?null:t],e}function Ri(e,t){var n=kr();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Lu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Oh(e,t){var n=kr();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Lu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Bu(e,t,n){var r=ta();hn(98>r?98:r,function(){e(!0)}),hn(97<r?97:r,function(){var o=st.suspense;st.suspense=t===void 0?null:t;try{e(!1),n()}finally{st.suspense=o}})}function Dh(e,t,n){var r=Ot(),o=Qr.suspense;r=_n(r,e,o),o={expirationTime:r,suspenseConfig:o,action:n,eagerReducer:null,eagerState:null,next:null};var i=t.pending;if(i===null?o.next=o:(o.next=i.next,i.next=o),t.pending=o,i=e.alternate,e===Ce||i!==null&&i===Ce)$i=!0,o.expirationTime=en,Ce.expirationTime=en;else{if(e.expirationTime===0&&(i===null||i.expirationTime===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.eagerReducer=i,o.eagerState=l,Mn(l,a))return}catch{}finally{}cn(e,r)}}var Oi={readContext:dt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useResponder:Je,useDeferredValue:Je,useTransition:Je},oy={readContext:dt,useCallback:Sd,useContext:dt,useEffect:kd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,gs(4,2,Ph.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gs(4,2,e,t)},useMemo:function(e,t){var n=sr();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=sr();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=Dh.bind(null,Ce,e),[r.memoizedState,e]},useRef:function(e){var t=sr();return e={current:e},t.memoizedState=e},useState:pl,useDebugValue:Mu,useResponder:_u,useDeferredValue:function(e,t){var n=pl(e),r=n[0],o=n[1];return kd(function(){var i=st.suspense;st.suspense=t===void 0?null:t;try{o(e)}finally{st.suspense=i}},[e,t]),r},useTransition:function(e){var t=pl(!1),n=t[0];return t=t[1],[Sd(Bu.bind(null,t,e),[t,e]),n]}},iy={readContext:dt,useCallback:Ri,useContext:dt,useEffect:Pi,useImperativeHandle:Rh,useLayoutEffect:$h,useMemo:Oh,useReducer:jo,useRef:Ch,useState:function(){return jo(Dn)},useDebugValue:Mu,useResponder:_u,useDeferredValue:function(e,t){var n=jo(Dn),r=n[0],o=n[1];return Pi(function(){var i=st.suspense;st.suspense=t===void 0?null:t;try{o(e)}finally{st.suspense=i}},[e,t]),r},useTransition:function(e){var t=jo(Dn),n=t[0];return t=t[1],[Ri(Bu.bind(null,t,e),[t,e]),n]}},ay={readContext:dt,useCallback:Ri,useContext:dt,useEffect:Pi,useImperativeHandle:Rh,useLayoutEffect:$h,useMemo:Oh,useReducer:Fo,useRef:Ch,useState:function(){return Fo(Dn)},useDebugValue:Mu,useResponder:_u,useDeferredValue:function(e,t){var n=Fo(Dn),r=n[0],o=n[1];return Pi(function(){var i=st.suspense;st.suspense=t===void 0?null:t;try{o(e)}finally{st.suspense=i}},[e,t]),r},useTransition:function(e){var t=Fo(Dn),n=t[0];return t=t[1],[Ri(Bu.bind(null,t,e),[t,e]),n]}},Ht=null,tn=null,In=!1;function Ih(e,t){var n=$t(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function Ed(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function ys(e){if(In){var t=tn;if(t){var n=t;if(!Ed(e,t)){if(t=ar(n.nextSibling),!t||!Ed(e,t)){e.effectTag=e.effectTag&-1025|2,In=!1,Ht=e;return}Ih(Ht,n)}Ht=e,tn=ar(t.firstChild)}else e.effectTag=e.effectTag&-1025|2,In=!1,Ht=e}}function Td(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ht=e}function Mo(e){if(e!==Ht)return!1;if(!In)return Td(e),In=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!ls(t,e.memoizedProps))for(t=tn;t;)Ih(e,t),t=ar(t.nextSibling);if(Td(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===Zp){if(t===0){tn=ar(e.nextSibling);break e}t--}else n!==Xp&&n!==Au&&n!==bu||t++}e=e.nextSibling}tn=null}}else tn=Ht?ar(e.stateNode.nextSibling):null;return!0}function hl(){tn=Ht=null,In=!1}var ly=xt.ReactCurrentOwner,Ct=!1;function Ye(e,t,n,r){t.child=e===null?Iu(t,null,n,r):mr(t,e.child,n,r)}function Cd(e,t,n,r,o){n=n.render;var i=t.ref;return lr(t,o),r=ju(e,t,n,r,i,o),e!==null&&!Ct?(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=o&&(e.expirationTime=0),Wt(e,t,o)):(t.effectTag|=1,Ye(e,t,r,o),t.child)}function $d(e,t,n,r,o,i){if(e===null){var a=n.type;return typeof a=="function"&&!Vu(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Nh(e,t,a,r,o,i)):(e=li(n.type,null,r,null,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}return a=e.child,o<i&&(o=a.memoizedProps,n=n.compare,n=n!==null?n:to,n(o,r)&&e.ref===t.ref)?Wt(e,t,i):(t.effectTag|=1,e=zn(a,r),e.ref=t.ref,e.return=t,t.child=e)}function Nh(e,t,n,r,o,i){return e!==null&&to(e.memoizedProps,r)&&e.ref===t.ref&&(Ct=!1,o<i)?(t.expirationTime=e.expirationTime,Wt(e,t,i)):xs(e,t,n,r,i)}function _h(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.effectTag|=128)}function xs(e,t,n,r,o){var i=Ge(n)?Bn:Be.current;return i=hr(t,i),lr(t,o),n=ju(e,t,n,r,i,o),e!==null&&!Ct?(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=o&&(e.expirationTime=0),Wt(e,t,o)):(t.effectTag|=1,Ye(e,t,n,o),t.child)}function Pd(e,t,n,r,o){if(Ge(n)){var i=!0;ti(t)}else i=!1;if(lr(t,o),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),Eh(t,n,r),hs(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=dt(u):(u=Ge(n)?Bn:Be.current,u=hr(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&bd(t,a,r,u),Yt=!1;var m=t.memoizedState;a.state=m,no(t,r,a,o),s=t.memoizedState,l!==r||m!==s||Qe.current||Yt?(typeof d=="function"&&(Ti(t,n,d,r),s=t.memoizedState),(l=Yt||wd(t,n,l,r,m,s,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.effectTag|=4)):(typeof a.componentDidMount=="function"&&(t.effectTag|=4),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.effectTag|=4),r=!1)}else a=t.stateNode,Du(e,t),l=t.memoizedProps,a.props=t.type===t.elementType?l:gt(t.type,l),s=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=dt(u):(u=Ge(n)?Bn:Be.current,u=hr(t,u)),d=n.getDerivedStateFromProps,(c=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&bd(t,a,r,u),Yt=!1,s=t.memoizedState,a.state=s,no(t,r,a,o),m=t.memoizedState,l!==r||s!==m||Qe.current||Yt?(typeof d=="function"&&(Ti(t,n,d,r),m=t.memoizedState),(d=Yt||wd(t,n,l,r,s,m,u))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,u)),typeof a.componentDidUpdate=="function"&&(t.effectTag|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.effectTag|=256)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&s===e.memoizedState||(t.effectTag|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&s===e.memoizedState||(t.effectTag|=256),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&s===e.memoizedState||(t.effectTag|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&s===e.memoizedState||(t.effectTag|=256),r=!1);return ws(e,t,n,r,i,o)}function ws(e,t,n,r,o,i){_h(e,t);var a=(t.effectTag&64)!==0;if(!r&&!a)return o&&hd(t,n,!1),Wt(e,t,i);r=t.stateNode,ly.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.effectTag|=1,e!==null&&a?(t.child=mr(t,e.child,null,i),t.child=mr(t,null,l,i)):Ye(e,t,l,i),t.memoizedState=r.state,o&&hd(t,n,!0),t.child}function Rd(e){var t=e.stateNode;t.pendingContext?pd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pd(e,t.context,!1),ms(e,t.containerInfo)}var ml={dehydrated:null,retryTime:0};function Od(e,t,n){var r=t.mode,o=t.pendingProps,i=we.current,a=!1,l;if((l=(t.effectTag&64)!==0)||(l=(i&2)!==0&&(e===null||e.memoizedState!==null)),l?(a=!0,t.effectTag&=-65):e!==null&&e.memoizedState===null||o.fallback===void 0||o.unstable_avoidThisFallback===!0||(i|=1),Se(we,i&1),e===null){if(o.fallback!==void 0&&ys(t),a){if(a=o.fallback,o=nn(null,r,0,null),o.return=t,!(t.mode&2))for(e=t.memoizedState!==null?t.child.child:t.child,o.child=e;e!==null;)e.return=o,e=e.sibling;return n=nn(a,r,n,null),n.return=t,o.sibling=n,t.memoizedState=ml,t.child=o,n}return r=o.children,t.memoizedState=null,t.child=Iu(t,null,r,n)}if(e.memoizedState!==null){if(e=e.child,r=e.sibling,a){if(o=o.fallback,n=zn(e,e.pendingProps),n.return=t,!(t.mode&2)&&(a=t.memoizedState!==null?t.child.child:t.child,a!==e.child))for(n.child=a;a!==null;)a.return=n,a=a.sibling;return r=zn(r,o),r.return=t,n.sibling=r,n.childExpirationTime=0,t.memoizedState=ml,t.child=n,r}return n=mr(t,e.child,o.children,n),t.memoizedState=null,t.child=n}if(e=e.child,a){if(a=o.fallback,o=nn(null,r,0,null),o.return=t,o.child=e,e!==null&&(e.return=o),!(t.mode&2))for(e=t.memoizedState!==null?t.child.child:t.child,o.child=e;e!==null;)e.return=o,e=e.sibling;return n=nn(a,r,n,null),n.return=t,o.sibling=n,n.effectTag|=2,o.childExpirationTime=0,t.memoizedState=ml,t.child=o,n}return t.memoizedState=null,t.child=mr(t,e,o.children,n)}function Dd(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;n!==null&&n.expirationTime<t&&(n.expirationTime=t),kh(e.return,t)}function vl(e,t,n,r,o,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailExpiration:0,tailMode:o,lastEffect:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailExpiration=0,a.tailMode=o,a.lastEffect=i)}function Id(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ye(e,t,r.children,n),r=we.current,r&2)r=r&1|2,t.effectTag|=64;else{if(e!==null&&e.effectTag&64)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dd(e,n);else if(e.tag===19)Dd(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Se(we,r),!(t.mode&2))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ci(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),vl(t,!1,o,n,i,t.lastEffect);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ci(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}vl(t,!0,n,null,i,t.lastEffect);break;case"together":vl(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function Wt(e,t,n){e!==null&&(t.dependencies=e.dependencies);var r=t.expirationTime;if(r!==0&&aa(r),t.childExpirationTime<n)return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=zn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}var Lh,bs,jh,Fh;Lh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bs=function(){};jh=function(e,t,n,r,o){var i=e.memoizedProps;if(i!==r){var a=t.stateNode;switch(Tn(Rt.current),e=null,n){case"input":i=Gl(a,i),r=Gl(a,r),e=[];break;case"option":i=Jl(a,i),r=Jl(a,r),e=[];break;case"select":i=ze({},i,{value:void 0}),r=ze({},r,{value:void 0}),e=[];break;case"textarea":i=Yl(a,i),r=Yl(a,r),e=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(a.onclick=xi)}rs(n,r);var l,s;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style")for(s in a=i[l],a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="");else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(dr.hasOwnProperty(l)?e||(e=[]):(e=e||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(e||(e=[]),e.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(e=e||[]).push(l,u)):l==="children"?a===u||typeof u!="string"&&typeof u!="number"||(e=e||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(dr.hasOwnProperty(l)?(u!=null&&Mt(o,l),e||a===u||(e=[])):(e=e||[]).push(l,u))}n&&(e=e||[]).push("style",n),o=e,(t.updateQueue=o)&&(t.effectTag|=4)}};Fh=function(e,t,n,r){n!==r&&(t.effectTag|=4)};function Bo(e,t){switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function sy(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ge(t.type)&&Ai(),null;case 3:return vr(),ye(Qe),ye(Be),n=t.stateNode,n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),e!==null&&e.child!==null||!Mo(t)||(t.effectTag|=4),bs(t),null;case 5:Nu(t),n=Tn(oo.current);var o=t.type;if(e!==null&&t.stateNode!=null)jh(e,t,o,r,n),e.ref!==t.ref&&(t.effectTag|=128);else{if(!r){if(t.stateNode===null)throw Error(M(166));return null}if(e=Tn(Rt.current),Mo(t)){r=t.stateNode,o=t.type;var i=t.memoizedProps;switch(r[Xt]=t,r[wi]=i,o){case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(e=0;e<Fr.length;e++)xe(Fr[e],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"form":xe("reset",r),xe("submit",r);break;case"details":xe("toggle",r);break;case"input":Wc(r,i),xe("invalid",r),Mt(n,"onChange");break;case"select":r._wrapperState={wasMultiple:!!i.multiple},xe("invalid",r),Mt(n,"onChange");break;case"textarea":Qc(r,i),xe("invalid",r),Mt(n,"onChange")}rs(o,i),e=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(e=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(e=["children",""+l]):dr.hasOwnProperty(a)&&l!=null&&Mt(n,a)}switch(o){case"input":Do(r),Vc(r,i,!0);break;case"textarea":Do(r),Gc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=xi)}n=e,t.updateQueue=n,n!==null&&(t.effectTag|=4)}else{switch(a=n.nodeType===9?n:n.ownerDocument,e===Zc&&(e=Op(o)),e===Zc?o==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(o,{is:r.is}):(e=a.createElement(o),o==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,o),e[Xt]=t,e[wi]=r,Lh(e,t,!1,!1),t.stateNode=e,a=os(o,r),o){case"iframe":case"object":case"embed":xe("load",e),l=r;break;case"video":case"audio":for(l=0;l<Fr.length;l++)xe(Fr[l],e);l=r;break;case"source":xe("error",e),l=r;break;case"img":case"image":case"link":xe("error",e),xe("load",e),l=r;break;case"form":xe("reset",e),xe("submit",e),l=r;break;case"details":xe("toggle",e),l=r;break;case"input":Wc(e,r),l=Gl(e,r),xe("invalid",e),Mt(n,"onChange");break;case"option":l=Jl(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=ze({},r,{value:void 0}),xe("invalid",e),Mt(n,"onChange");break;case"textarea":Qc(e,r),l=Yl(e,r),xe("invalid",e),Mt(n,"onChange");break;default:l=r}rs(o,l);var s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Jp(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Dp(e,u)):i==="children"?typeof u=="string"?(o!=="textarea"||u!=="")&&Yr(e,u):typeof u=="number"&&Yr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(dr.hasOwnProperty(i)?u!=null&&Mt(n,i):u!=null&&cu(e,i,u,a))}switch(o){case"input":Do(e),Vc(e,r,!1);break;case"textarea":Do(e),Gc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fn(r.value));break;case"select":e.multiple=!!r.multiple,n=r.value,n!=null?ir(e,!!r.multiple,n,!1):r.defaultValue!=null&&ir(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=xi)}eh(o,r)&&(t.effectTag|=4)}t.ref!==null&&(t.effectTag|=128)}return null;case 6:if(e&&t.stateNode!=null)Fh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));n=Tn(oo.current),Tn(Rt.current),Mo(t)?(n=t.stateNode,r=t.memoizedProps,n[Xt]=t,n.nodeValue!==r&&(t.effectTag|=4)):(n=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),n[Xt]=t,t.stateNode=n)}return null;case 13:return ye(we),r=t.memoizedState,t.effectTag&64?(t.expirationTime=n,t):(n=r!==null,r=!1,e===null?t.memoizedProps.fallback!==void 0&&Mo(t):(o=e.memoizedState,r=o!==null,n||o===null||(o=e.child.sibling,o!==null&&(i=t.firstEffect,i!==null?(t.firstEffect=o,o.nextEffect=i):(t.firstEffect=t.lastEffect=o,o.nextEffect=null),o.effectTag=8))),n&&!r&&t.mode&2&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||we.current&1?$e===Nn&&($e=Ni):(($e===Nn||$e===Ni)&&($e=ra),ao!==0&&Ze!==null&&(Pn(Ze,Ke),om(Ze,ao)))),(n||r)&&(t.effectTag|=4),null);case 4:return vr(),bs(t),null;case 10:return Ru(t),null;case 17:return Ge(t.type)&&Ai(),null;case 19:if(ye(we),r=t.memoizedState,r===null)return null;if(o=(t.effectTag&64)!==0,i=r.rendering,i===null){if(o)Bo(r,!1);else if($e!==Nn||e!==null&&e.effectTag&64)for(i=t.child;i!==null;){if(e=Ci(i),e!==null){for(t.effectTag|=64,Bo(r,!1),o=e.updateQueue,o!==null&&(t.updateQueue=o,t.effectTag|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=t.child;r!==null;)o=r,i=n,o.effectTag&=2,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null,e=o.alternate,e===null?(o.childExpirationTime=0,o.expirationTime=i,o.child=null,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null):(o.childExpirationTime=e.childExpirationTime,o.expirationTime=e.expirationTime,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,i=e.dependencies,o.dependencies=i===null?null:{expirationTime:i.expirationTime,firstContext:i.firstContext,responders:i.responders}),r=r.sibling;return Se(we,we.current&1|2),t.child}i=i.sibling}}else{if(!o)if(e=Ci(i),e!==null){if(t.effectTag|=64,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.effectTag|=4),Bo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!i.alternate)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*lt()-r.renderingStartTime>r.tailExpiration&&1<n&&(t.effectTag|=64,o=!0,Bo(r,!1),t.expirationTime=t.childExpirationTime=n-1);r.isBackwards?(i.sibling=t.child,t.child=i):(n=r.last,n!==null?n.sibling=i:t.child=i,r.last=i)}return r.tail!==null?(r.tailExpiration===0&&(r.tailExpiration=lt()+500),n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=lt(),n.sibling=null,t=we.current,Se(we,o?t&1|2:t&1),n):null}throw Error(M(156,t.tag))}function uy(e){switch(e.tag){case 1:Ge(e.type)&&Ai();var t=e.effectTag;return t&4096?(e.effectTag=t&-4097|64,e):null;case 3:if(vr(),ye(Qe),ye(Be),t=e.effectTag,t&64)throw Error(M(285));return e.effectTag=t&-4097|64,e;case 5:return Nu(e),null;case 13:return ye(we),t=e.effectTag,t&4096?(e.effectTag=t&-4097|64,e):null;case 19:return ye(we),null;case 4:return vr(),null;case 10:return Ru(e),null;default:return null}}function zu(e,t){return{value:e,source:t,stack:pu(t)}}var cy=typeof WeakSet=="function"?WeakSet:Set;function As(e,t){var n=t.source,r=t.stack;r===null&&n!==null&&(r=pu(n)),n!==null&&Vt(n.type),t=t.value,e!==null&&e.tag===1&&Vt(e.type);try{console.error(t)}catch(o){setTimeout(function(){throw o})}}function dy(e,t){try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(n){Ln(e,n)}}function Nd(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){Ln(e,n)}else t.current=null}function fy(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.effectTag&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:gt(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(M(163))}function Mh(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.destroy;n.destroy=void 0,r!==void 0&&r()}n=n.next}while(n!==t)}}function Bh(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function py(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:Bh(3,n);return;case 1:if(e=n.stateNode,n.effectTag&4)if(t===null)e.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:gt(n.type,t.memoizedProps);e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}t=n.updateQueue,t!==null&&xd(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}xd(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.effectTag&4&&eh(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Qp(n))));return;case 19:case 17:case 20:case 21:return}throw Error(M(163))}function _d(e,t,n){switch(typeof Rs=="function"&&Rs(t),t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var r=e.next;hn(97<n?97:n,function(){var o=r;do{var i=o.destroy;if(i!==void 0){var a=t;try{i()}catch(l){Ln(a,l)}}o=o.next}while(o!==r)})}break;case 1:Nd(t),n=t.stateNode,typeof n.componentWillUnmount=="function"&&dy(t,n);break;case 5:Nd(t);break;case 4:Uh(e,t,n)}}function zh(e){var t=e.alternate;e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.alternate=null,e.firstEffect=null,e.lastEffect=null,e.pendingProps=null,e.memoizedProps=null,e.stateNode=null,t!==null&&zh(t)}function Ld(e){return e.tag===5||e.tag===3||e.tag===4}function jd(e){e:{for(var t=e.return;t!==null;){if(Ld(t)){var n=t;break e}t=t.return}throw Error(M(160))}switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(M(161))}n.effectTag&16&&(Yr(t,""),n.effectTag&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||Ld(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.effectTag&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.effectTag&2)){n=n.stateNode;break e}}r?ks(e,n,t):Ss(e,n,t)}function ks(e,t,n){var r=e.tag,o=r===5||r===6;if(o)e=o?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xi));else if(r!==4&&(e=e.child,e!==null))for(ks(e,t,n),e=e.sibling;e!==null;)ks(e,t,n),e=e.sibling}function Ss(e,t,n){var r=e.tag,o=r===5||r===6;if(o)e=o?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ss(e,t,n),e=e.sibling;e!==null;)Ss(e,t,n),e=e.sibling}function Uh(e,t,n){for(var r=t,o=!1,i,a;;){if(!o){o=r.return;e:for(;;){if(o===null)throw Error(M(160));switch(i=o.stateNode,o.tag){case 5:a=!1;break e;case 3:i=i.containerInfo,a=!0;break e;case 4:i=i.containerInfo,a=!0;break e}o=o.return}o=!0}if(r.tag===5||r.tag===6){e:for(var l=e,s=r,u=n,d=s;;)if(_d(l,d,u),d.child!==null&&d.tag!==4)d.child.return=d,d=d.child;else{if(d===s)break e;for(;d.sibling===null;){if(d.return===null||d.return===s)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}a?(l=i,s=r.stateNode,l.nodeType===8?l.parentNode.removeChild(s):l.removeChild(s)):i.removeChild(r.stateNode)}else if(r.tag===4){if(r.child!==null){i=r.stateNode.containerInfo,a=!0,r.child.return=r,r=r.child;continue}}else if(_d(e,r,n),r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return,r.tag===4&&(o=!1)}r.sibling.return=r.return,r=r.sibling}}function gl(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:Mh(3,t);return;case 1:return;case 5:var n=t.stateNode;if(n!=null){var r=t.memoizedProps,o=e!==null?e.memoizedProps:r;e=t.type;var i=t.updateQueue;if(t.updateQueue=null,i!==null){for(n[wi]=r,e==="input"&&r.type==="radio"&&r.name!=null&&$p(n,r),os(e,o),t=os(e,r),o=0;o<i.length;o+=2){var a=i[o],l=i[o+1];a==="style"?Jp(n,l):a==="dangerouslySetInnerHTML"?Dp(n,l):a==="children"?Yr(n,l):cu(n,a,l,t)}switch(e){case"input":Kl(n,r);break;case"textarea":Pp(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,e=r.value,e!=null?ir(n,!!r.multiple,e,!1):t!==!!r.multiple&&(r.defaultValue!=null?ir(n,!!r.multiple,r.defaultValue,!0):ir(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(M(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:t=t.stateNode,t.hydrate&&(t.hydrate=!1,Qp(t.containerInfo));return;case 12:return;case 13:if(n=t,t.memoizedState===null?r=!1:(r=!0,n=t.child,Wu=lt()),n!==null)e:for(e=n;;){if(e.tag===5)i=e.stateNode,r?(i=i.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(i=e.stateNode,o=e.memoizedProps.style,o=o!=null&&o.hasOwnProperty("display")?o.display:null,i.style.display=qp("display",o));else if(e.tag===6)e.stateNode.nodeValue=r?"":e.memoizedProps;else if(e.tag===13&&e.memoizedState!==null&&e.memoizedState.dehydrated===null){i=e.child.sibling,i.return=e,e=i;continue}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}Fd(t);return;case 19:Fd(t);return;case 17:return}throw Error(M(163))}function Fd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new cy),t.forEach(function(r){var o=ky.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}var hy=typeof WeakMap=="function"?WeakMap:Map;function Hh(e,t,n){n=ln(n,null),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ji||(ji=!0,Es=r),As(e,t)},n}function Wh(e,t,n){n=ln(n,null),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return As(e,t),r(o)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(un===null?un=new Set([this]):un.add(this),As(e,t));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}var my=Math.ceil,Di=xt.ReactCurrentDispatcher,Vh=xt.ReactCurrentOwner,Pe=0,Uu=8,wt=16,Dt=32,Nn=0,Ii=1,Qh=2,Ni=3,ra=4,Hu=5,re=Pe,Ze=null,ie=null,Ke=0,$e=Nn,oa=null,Ut=1073741823,io=1073741823,_i=null,ao=0,Li=!1,Wu=0,Gh=500,Z=null,ji=!1,Es=null,un=null,Fi=!1,Gr=null,Br=90,Cn=null,Kr=0,Ts=null,ii=0;function Ot(){return(re&(wt|Dt))!==Pe?1073741821-(lt()/10|0):ii!==0?ii:ii=1073741821-(lt()/10|0)}function _n(e,t,n){if(t=t.mode,!(t&2))return 1073741823;var r=ta();if(!(t&4))return r===99?1073741823:1073741822;if((re&wt)!==Pe)return Ke;if(n!==null)e=ri(e,n.timeoutMs|0||5e3,250);else switch(r){case 99:e=1073741823;break;case 98:e=ri(e,150,100);break;case 97:case 96:e=ri(e,5e3,250);break;case 95:e=2;break;default:throw Error(M(326))}return Ze!==null&&e===Ke&&--e,e}function cn(e,t){if(50<Kr)throw Kr=0,Ts=null,Error(M(185));if(e=ia(e,t),e!==null){var n=ta();t===1073741823?(re&Uu)!==Pe&&(re&(wt|Dt))===Pe?Cs(e):(et(e),re===Pe&&Nt()):et(e),(re&4)===Pe||n!==98&&n!==99||(Cn===null?Cn=new Map([[e,t]]):(n=Cn.get(e),(n===void 0||n>t)&&Cn.set(e,t)))}}function ia(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;n!==null&&n.expirationTime<t&&(n.expirationTime=t);var r=e.return,o=null;if(r===null&&e.tag===3)o=e.stateNode;else for(;r!==null;){if(n=r.alternate,r.childExpirationTime<t&&(r.childExpirationTime=t),n!==null&&n.childExpirationTime<t&&(n.childExpirationTime=t),r.return===null&&r.tag===3){o=r.stateNode;break}r=r.return}return o!==null&&(Ze===o&&(aa(t),$e===ra&&Pn(o,Ke)),om(o,t)),o}function ai(e){var t=e.lastExpiredTime;if(t!==0||(t=e.firstPendingTime,!rm(e,t)))return t;var n=e.lastPingedTime;return e=e.nextKnownPendingLevel,e=n>e?n:e,2>=e&&t!==e?0:e}function et(e){if(e.lastExpiredTime!==0)e.callbackExpirationTime=1073741823,e.callbackPriority=99,e.callbackNode=gd(Cs.bind(null,e));else{var t=ai(e),n=e.callbackNode;if(t===0)n!==null&&(e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90);else{var r=Ot();if(t===1073741823?r=99:t===1||t===2?r=95:(r=10*(1073741821-t)-10*(1073741821-r),r=0>=r?99:250>=r?98:5250>=r?97:95),n!==null){var o=e.callbackPriority;if(e.callbackExpirationTime===t&&o>=r)return;n!==xh&&hh(n)}e.callbackExpirationTime=t,e.callbackPriority=r,t=t===1073741823?gd(Cs.bind(null,e)):bh(r,Kh.bind(null,e),{timeout:10*(1073741821-t)-lt()}),e.callbackNode=t}}}function Kh(e,t){if(ii=0,t)return t=Ot(),Os(e,t),et(e),null;var n=ai(e);if(n!==0){if(t=e.callbackNode,(re&(wt|Dt))!==Pe)throw Error(M(327));if(Sr(),e===Ze&&n===Ke||$n(e,n),ie!==null){var r=re;re|=wt;var o=Xh();do try{yy();break}catch(l){Yh(e,l)}while(!0);if(Pu(),re=r,Di.current=o,$e===Ii)throw t=oa,$n(e,n),Pn(e,n),et(e),t;if(ie===null)switch(o=e.finishedWork=e.current.alternate,e.finishedExpirationTime=n,r=$e,Ze=null,r){case Nn:case Ii:throw Error(M(345));case Qh:Os(e,2<n?2:n);break;case Ni:if(Pn(e,n),r=e.lastSuspendedTime,n===r&&(e.nextKnownPendingLevel=$s(o)),Ut===1073741823&&(o=Wu+Gh-lt(),10<o)){if(Li){var i=e.lastPingedTime;if(i===0||i>=n){e.lastPingedTime=n,$n(e,n);break}}if(i=ai(e),i!==0&&i!==n)break;if(r!==0&&r!==n){e.lastPingedTime=r;break}e.timeoutHandle=dl(kn.bind(null,e),o);break}kn(e);break;case ra:if(Pn(e,n),r=e.lastSuspendedTime,n===r&&(e.nextKnownPendingLevel=$s(o)),Li&&(o=e.lastPingedTime,o===0||o>=n)){e.lastPingedTime=n,$n(e,n);break}if(o=ai(e),o!==0&&o!==n)break;if(r!==0&&r!==n){e.lastPingedTime=r;break}if(io!==1073741823?r=10*(1073741821-io)-lt():Ut===1073741823?r=0:(r=10*(1073741821-Ut)-5e3,o=lt(),n=10*(1073741821-n)-o,r=o-r,0>r&&(r=0),r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*my(r/1960))-r,n<r&&(r=n)),10<r){e.timeoutHandle=dl(kn.bind(null,e),r);break}kn(e);break;case Hu:if(Ut!==1073741823&&_i!==null){i=Ut;var a=_i;if(r=a.busyMinDurationMs|0,0>=r?r=0:(o=a.busyDelayMs|0,i=lt()-(10*(1073741821-i)-(a.timeoutMs|0||5e3)),r=i<=o?0:o+r-i),10<r){Pn(e,n),e.timeoutHandle=dl(kn.bind(null,e),r);break}}kn(e);break;default:throw Error(M(329))}if(et(e),e.callbackNode===t)return Kh.bind(null,e)}}return null}function Cs(e){var t=e.lastExpiredTime;if(t=t!==0?t:1073741823,(re&(wt|Dt))!==Pe)throw Error(M(327));if(Sr(),e===Ze&&t===Ke||$n(e,t),ie!==null){var n=re;re|=wt;var r=Xh();do try{gy();break}catch(o){Yh(e,o)}while(!0);if(Pu(),re=n,Di.current=r,$e===Ii)throw n=oa,$n(e,t),Pn(e,t),et(e),n;if(ie!==null)throw Error(M(261));e.finishedWork=e.current.alternate,e.finishedExpirationTime=t,Ze=null,kn(e),et(e)}return null}function vy(){if(Cn!==null){var e=Cn;Cn=null,e.forEach(function(t,n){Os(n,t),et(n)}),Nt()}}function qh(e,t){var n=re;re|=1;try{return e(t)}finally{re=n,re===Pe&&Nt()}}function Jh(e,t){var n=re;re&=-2,re|=Uu;try{return e(t)}finally{re=n,re===Pe&&Nt()}}function $n(e,t){e.finishedWork=null,e.finishedExpirationTime=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,mg(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ai();break;case 3:vr(),ye(Qe),ye(Be);break;case 5:Nu(r);break;case 4:vr();break;case 13:ye(we);break;case 19:ye(we);break;case 10:Ru(r)}n=n.return}Ze=e,ie=zn(e.current,null),Ke=t,$e=Nn,oa=null,io=Ut=1073741823,_i=null,ao=0,Li=!1}function Yh(e,t){do{try{if(Pu(),oi.current=Oi,$i)for(var n=Ce.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}if(en=0,Me=Fe=Ce=null,$i=!1,ie===null||ie.return===null)return $e=Ii,oa=t,ie=null;e:{var o=e,i=ie.return,a=ie,l=t;if(t=Ke,a.effectTag|=2048,a.firstEffect=a.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var s=l;if(!(a.mode&2)){var u=a.alternate;u?(a.updateQueue=u.updateQueue,a.memoizedState=u.memoizedState,a.expirationTime=u.expirationTime):(a.updateQueue=null,a.memoizedState=null)}var d=(we.current&1)!==0,c=i;do{var m;if(m=c.tag===13){var k=c.memoizedState;if(k!==null)m=k.dehydrated!==null;else{var g=c.memoizedProps;m=g.fallback===void 0?!1:g.unstable_avoidThisFallback!==!0?!0:!d}}if(m){var b=c.updateQueue;if(b===null){var f=new Set;f.add(s),c.updateQueue=f}else b.add(s);if(!(c.mode&2)){if(c.effectTag|=64,a.effectTag&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var p=ln(1073741823,null);p.tag=2,sn(a,p)}a.expirationTime=1073741823;break e}l=void 0,a=t;var h=o.pingCache;if(h===null?(h=o.pingCache=new hy,l=new Set,h.set(s,l)):(l=h.get(s),l===void 0&&(l=new Set,h.set(s,l))),!l.has(a)){l.add(a);var y=Ay.bind(null,o,s,a);s.then(y,y)}c.effectTag|=4096,c.expirationTime=t;break e}c=c.return}while(c!==null);l=Error((Vt(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`+pu(a))}$e!==Hu&&($e=Qh),l=zu(l,a),c=i;do{switch(c.tag){case 3:s=l,c.effectTag|=4096,c.expirationTime=t;var S=Hh(c,s,t);yd(c,S);break e;case 1:s=l;var E=c.type,$=c.stateNode;if(!(c.effectTag&64)&&(typeof E.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(un===null||!un.has($)))){c.effectTag|=4096,c.expirationTime=t;var O=Wh(c,s,t);yd(c,O);break e}}c=c.return}while(c!==null)}ie=tm(ie)}catch(L){t=L;continue}break}while(!0)}function Xh(){var e=Di.current;return Di.current=Oi,e===null?Oi:e}function Zh(e,t){e<Ut&&2<e&&(Ut=e),t!==null&&e<io&&2<e&&(io=e,_i=t)}function aa(e){e>ao&&(ao=e)}function gy(){for(;ie!==null;)ie=em(ie)}function yy(){for(;ie!==null&&!ny();)ie=em(ie)}function em(e){var t=nm(e.alternate,e,Ke);return e.memoizedProps=e.pendingProps,t===null&&(t=tm(e)),Vh.current=null,t}function tm(e){ie=e;do{var t=ie.alternate;if(e=ie.return,ie.effectTag&2048){if(t=uy(ie),t!==null)return t.effectTag&=2047,t;e!==null&&(e.firstEffect=e.lastEffect=null,e.effectTag|=2048)}else{if(t=sy(t,ie,Ke),Ke===1||ie.childExpirationTime!==1){for(var n=0,r=ie.child;r!==null;){var o=r.expirationTime,i=r.childExpirationTime;o>n&&(n=o),i>n&&(n=i),r=r.sibling}ie.childExpirationTime=n}if(t!==null)return t;e!==null&&!(e.effectTag&2048)&&(e.firstEffect===null&&(e.firstEffect=ie.firstEffect),ie.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=ie.firstEffect),e.lastEffect=ie.lastEffect),1<ie.effectTag&&(e.lastEffect!==null?e.lastEffect.nextEffect=ie:e.firstEffect=ie,e.lastEffect=ie))}if(t=ie.sibling,t!==null)return t;ie=e}while(ie!==null);return $e===Nn&&($e=Hu),null}function $s(e){var t=e.expirationTime;return e=e.childExpirationTime,t>e?t:e}function kn(e){var t=ta();return hn(99,xy.bind(null,e,t)),null}function xy(e,t){do Sr();while(Gr!==null);if((re&(wt|Dt))!==Pe)throw Error(M(327));var n=e.finishedWork,r=e.finishedExpirationTime;if(n===null)return null;if(e.finishedWork=null,e.finishedExpirationTime=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90,e.nextKnownPendingLevel=0;var o=$s(n);if(e.firstPendingTime=o,r<=e.lastSuspendedTime?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:r<=e.firstSuspendedTime&&(e.firstSuspendedTime=r-1),r<=e.lastPingedTime&&(e.lastPingedTime=0),r<=e.lastExpiredTime&&(e.lastExpiredTime=0),e===Ze&&(ie=Ze=null,Ke=0),1<n.effectTag?n.lastEffect!==null?(n.lastEffect.nextEffect=n,o=n.firstEffect):o=n:o=n.firstEffect,o!==null){var i=re;re|=Dt,Vh.current=null,ul=Yo;var a=nd();if(as(a)){if("selectionStart"in a)var l={start:a.selectionStart,end:a.selectionEnd};else e:{l=(l=a.ownerDocument)&&l.defaultView||window;var s=l.getSelection&&l.getSelection();if(s&&s.rangeCount!==0){l=s.anchorNode;var u=s.anchorOffset,d=s.focusNode;s=s.focusOffset;try{l.nodeType,d.nodeType}catch{l=null;break e}var c=0,m=-1,k=-1,g=0,b=0,f=a,p=null;t:for(;;){for(var h;f!==l||u!==0&&f.nodeType!==3||(m=c+u),f!==d||s!==0&&f.nodeType!==3||(k=c+s),f.nodeType===3&&(c+=f.nodeValue.length),(h=f.firstChild)!==null;)p=f,f=h;for(;;){if(f===a)break t;if(p===l&&++g===u&&(m=c),p===d&&++b===s&&(k=c),(h=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=h}l=m===-1||k===-1?null:{start:m,end:k}}else l=null}l=l||{start:0,end:0}}else l=null;cl={activeElementDetached:null,focusedElem:a,selectionRange:l},Yo=!1,Z=o;do try{wy()}catch(j){if(Z===null)throw Error(M(330));Ln(Z,j),Z=Z.nextEffect}while(Z!==null);Z=o;do try{for(a=e,l=t;Z!==null;){var y=Z.effectTag;if(y&16&&Yr(Z.stateNode,""),y&128){var S=Z.alternate;if(S!==null){var E=S.ref;E!==null&&(typeof E=="function"?E(null):E.current=null)}}switch(y&1038){case 2:jd(Z),Z.effectTag&=-3;break;case 6:jd(Z),Z.effectTag&=-3,gl(Z.alternate,Z);break;case 1024:Z.effectTag&=-1025;break;case 1028:Z.effectTag&=-1025,gl(Z.alternate,Z);break;case 4:gl(Z.alternate,Z);break;case 8:u=Z,Uh(a,u,l),zh(u)}Z=Z.nextEffect}}catch(j){if(Z===null)throw Error(M(330));Ln(Z,j),Z=Z.nextEffect}while(Z!==null);if(E=cl,S=nd(),y=E.focusedElem,l=E.selectionRange,S!==y&&y&&y.ownerDocument&&Yp(y.ownerDocument.documentElement,y)){for(l!==null&&as(y)&&(S=l.start,E=l.end,E===void 0&&(E=S),"selectionStart"in y?(y.selectionStart=S,y.selectionEnd=Math.min(E,y.value.length)):(E=(S=y.ownerDocument||document)&&S.defaultView||window,E.getSelection&&(E=E.getSelection(),u=y.textContent.length,a=Math.min(l.start,u),l=l.end===void 0?a:Math.min(l.end,u),!E.extend&&a>l&&(u=l,l=a,a=u),u=td(y,a),d=td(y,l),u&&d&&(E.rangeCount!==1||E.anchorNode!==u.node||E.anchorOffset!==u.offset||E.focusNode!==d.node||E.focusOffset!==d.offset)&&(S=S.createRange(),S.setStart(u.node,u.offset),E.removeAllRanges(),a>l?(E.addRange(S),E.extend(d.node,d.offset)):(S.setEnd(d.node,d.offset),E.addRange(S)))))),S=[],E=y;E=E.parentNode;)E.nodeType===1&&S.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<S.length;y++)E=S[y],E.element.scrollLeft=E.left,E.element.scrollTop=E.top}Yo=!!ul,cl=ul=null,e.current=n,Z=o;do try{for(y=e;Z!==null;){var $=Z.effectTag;if($&36&&py(y,Z.alternate,Z),$&128){S=void 0;var O=Z.ref;if(O!==null){var L=Z.stateNode;switch(Z.tag){case 5:S=L;break;default:S=L}typeof O=="function"?O(S):O.current=S}}Z=Z.nextEffect}}catch(j){if(Z===null)throw Error(M(330));Ln(Z,j),Z=Z.nextEffect}while(Z!==null);Z=null,ry(),re=i}else e.current=n;if(Fi)Fi=!1,Gr=e,Br=t;else for(Z=o;Z!==null;)t=Z.nextEffect,Z.nextEffect=null,Z=t;if(t=e.firstPendingTime,t===0&&(un=null),t===1073741823?e===Ts?Kr++:(Kr=0,Ts=e):Kr=0,typeof Ps=="function"&&Ps(n.stateNode,r),et(e),ji)throw ji=!1,e=Es,Es=null,e;return(re&Uu)!==Pe||Nt(),null}function wy(){for(;Z!==null;){var e=Z.effectTag;e&256&&fy(Z.alternate,Z),!(e&512)||Fi||(Fi=!0,bh(97,function(){return Sr(),null})),Z=Z.nextEffect}}function Sr(){if(Br!==90){var e=97<Br?97:Br;return Br=90,hn(e,by)}}function by(){if(Gr===null)return!1;var e=Gr;if(Gr=null,(re&(wt|Dt))!==Pe)throw Error(M(331));var t=re;for(re|=Dt,e=e.current.firstEffect;e!==null;){try{var n=e;if(n.effectTag&512)switch(n.tag){case 0:case 11:case 15:case 22:Mh(5,n),Bh(5,n)}}catch(r){if(e===null)throw Error(M(330));Ln(e,r)}n=e.nextEffect,e.nextEffect=null,e=n}return re=t,Nt(),!0}function Md(e,t,n){t=zu(n,t),t=Hh(e,t,1073741823),sn(e,t),e=ia(e,1073741823),e!==null&&et(e)}function Ln(e,t){if(e.tag===3)Md(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){Md(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(un===null||!un.has(r))){e=zu(t,e),e=Wh(n,e,1073741823),sn(n,e),n=ia(n,1073741823),n!==null&&et(n);break}}n=n.return}}function Ay(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),Ze===e&&Ke===n?$e===ra||$e===Ni&&Ut===1073741823&&lt()-Wu<Gh?$n(e,Ke):Li=!0:rm(e,n)&&(t=e.lastPingedTime,t!==0&&t<n||(e.lastPingedTime=n,et(e)))}function ky(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=Ot(),t=_n(t,e,null)),e=ia(e,t),e!==null&&et(e)}var nm;nm=function(e,t,n){var r=t.expirationTime;if(e!==null){var o=t.pendingProps;if(e.memoizedProps!==o||Qe.current)Ct=!0;else{if(r<n){switch(Ct=!1,t.tag){case 3:Rd(t),hl();break;case 5:if(Ad(t),t.mode&4&&n!==1&&o.hidden)return t.expirationTime=t.childExpirationTime=1,null;break;case 1:Ge(t.type)&&ti(t);break;case 4:ms(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value,o=t.type._context,Se(ki,o._currentValue),o._currentValue=r;break;case 13:if(t.memoizedState!==null)return r=t.child.childExpirationTime,r!==0&&r>=n?Od(e,t,n):(Se(we,we.current&1),t=Wt(e,t,n),t!==null?t.sibling:null);Se(we,we.current&1);break;case 19:if(r=t.childExpirationTime>=n,e.effectTag&64){if(r)return Id(e,t,n);t.effectTag|=64}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null),Se(we,we.current),!r)return null}return Wt(e,t,n)}Ct=!1}}else Ct=!1;switch(t.expirationTime=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,o=hr(t,Be.current),lr(t,n),o=ju(null,t,r,e,o,n),t.effectTag|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ge(r)){var i=!0;ti(t)}else i=!1;t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ou(t);var a=r.getDerivedStateFromProps;typeof a=="function"&&Ti(t,r,a,e),o.updater=na,t.stateNode=o,o._reactInternalFiber=t,hs(t,r,e,n),t=ws(null,t,r,!0,i,n)}else t.tag=0,Ye(null,t,o,n),t=t.child;return t;case 16:e:{if(o=t.elementType,e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,Xv(o),o._status!==1)throw o._result;switch(o=o._result,t.type=o,i=t.tag=Ty(o),e=gt(o,e),i){case 0:t=xs(null,t,o,e,n);break e;case 1:t=Pd(null,t,o,e,n);break e;case 11:t=Cd(null,t,o,e,n);break e;case 14:t=$d(null,t,o,gt(o.type,e),r,n);break e}throw Error(M(306,o,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),xs(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),Pd(e,t,r,o,n);case 3:if(Rd(t),r=t.updateQueue,e===null||r===null)throw Error(M(282));if(r=t.pendingProps,o=t.memoizedState,o=o!==null?o.element:null,Du(e,t),no(t,r,null,n),r=t.memoizedState.element,r===o)hl(),t=Wt(e,t,n);else{if((o=t.stateNode.hydrate)&&(tn=ar(t.stateNode.containerInfo.firstChild),Ht=t,o=In=!0),o)for(n=Iu(t,null,r,n),t.child=n;n;)n.effectTag=n.effectTag&-3|1024,n=n.sibling;else Ye(e,t,r,n),hl();t=t.child}return t;case 5:return Ad(t),e===null&&ys(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,ls(r,o)?a=null:i!==null&&ls(r,i)&&(t.effectTag|=16),_h(e,t),t.mode&4&&n!==1&&o.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):(Ye(e,t,a,n),t=t.child),t;case 6:return e===null&&ys(t),null;case 13:return Od(e,t,n);case 4:return ms(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mr(t,null,r,n):Ye(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),Cd(e,t,r,o,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value;var l=t.type._context;if(Se(ki,l._currentValue),l._currentValue=i,a!==null)if(l=a.value,i=Mn(l,i)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(l,i):1073741823)|0,i===0){if(a.children===o.children&&!Qe.current){t=Wt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){a=l.child;for(var u=s.firstContext;u!==null;){if(u.context===r&&u.observedBits&i){l.tag===1&&(u=ln(n,null),u.tag=2,sn(l,u)),l.expirationTime<n&&(l.expirationTime=n),u=l.alternate,u!==null&&u.expirationTime<n&&(u.expirationTime=n),kh(l.return,n),s.expirationTime<n&&(s.expirationTime=n);break}u=u.next}}else a=l.tag===10&&l.type===t.type?null:l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}Ye(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,i=t.pendingProps,r=i.children,lr(t,n),o=dt(o,i.unstable_observedBits),r=r(o),t.effectTag|=1,Ye(e,t,r,n),t.child;case 14:return o=t.type,i=gt(o,t.pendingProps),i=gt(o.type,i),$d(e,t,o,i,r,n);case 15:return Nh(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,Ge(r)?(e=!0,ti(t)):e=!1,lr(t,n),Eh(t,r,o),hs(t,r,o,n),ws(null,t,r,!0,e,n);case 19:return Id(e,t,n)}throw Error(M(156,t.tag))};var Ps=null,Rs=null;function Sy(e){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);Ps=function(r){try{t.onCommitFiberRoot(n,r,void 0,(r.current.effectTag&64)===64)}catch{}},Rs=function(r){try{t.onCommitFiberUnmount(n,r)}catch{}}}catch{}return!0}function Ey(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function $t(e,t,n,r){return new Ey(e,t,n,r)}function Vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ty(e){if(typeof e=="function")return Vu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===du)return 11;if(e===fu)return 14}return 2}function zn(e,t){var n=e.alternate;return n===null?(n=$t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=e.childExpirationTime,n.expirationTime=e.expirationTime,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{expirationTime:t.expirationTime,firstContext:t.firstContext,responders:t.responders},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function li(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Vu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Sn:return nn(n.children,o,i,t);case Yv:a=8,o|=7;break;case bp:a=8,o|=1;break;case Ko:return e=$t(12,n,t,o|8),e.elementType=Ko,e.type=Ko,e.expirationTime=i,e;case qo:return e=$t(13,n,t,o),e.type=qo,e.elementType=qo,e.expirationTime=i,e;case Ql:return e=$t(19,n,t,o),e.elementType=Ql,e.expirationTime=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ap:a=10;break e;case kp:a=9;break e;case du:a=11;break e;case fu:a=14;break e;case Sp:a=16,r=null;break e;case Ep:a=22;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=$t(a,n,t,o),t.elementType=e,t.type=r,t.expirationTime=i,t}function nn(e,t,n,r){return e=$t(7,e,r,t),e.expirationTime=n,e}function yl(e,t,n){return e=$t(6,e,null,t),e.expirationTime=n,e}function xl(e,t,n){return t=$t(4,e.children!==null?e.children:[],e.key,t),t.expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cy(e,t,n){this.tag=t,this.current=null,this.containerInfo=e,this.pingCache=this.pendingChildren=null,this.finishedExpirationTime=0,this.finishedWork=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=90,this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}function rm(e,t){var n=e.firstSuspendedTime;return e=e.lastSuspendedTime,n!==0&&n>=t&&e<=t}function Pn(e,t){var n=e.firstSuspendedTime,r=e.lastSuspendedTime;n<t&&(e.firstSuspendedTime=t),(r>t||n===0)&&(e.lastSuspendedTime=t),t<=e.lastPingedTime&&(e.lastPingedTime=0),t<=e.lastExpiredTime&&(e.lastExpiredTime=0)}function om(e,t){t>e.firstPendingTime&&(e.firstPendingTime=t);var n=e.firstSuspendedTime;n!==0&&(t>=n?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:t>=e.lastSuspendedTime&&(e.lastSuspendedTime=t+1),t>e.nextKnownPendingLevel&&(e.nextKnownPendingLevel=t))}function Os(e,t){var n=e.lastExpiredTime;(n===0||n>t)&&(e.lastExpiredTime=t)}function Mi(e,t,n,r){var o=t.current,i=Ot(),a=Qr.suspense;i=_n(i,o,a);e:if(n){n=n._reactInternalFiber;t:{if(Vn(n)!==n||n.tag!==1)throw Error(M(170));var l=n;do{switch(l.tag){case 3:l=l.stateNode.context;break t;case 1:if(Ge(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break t}}l=l.return}while(l!==null);throw Error(M(171))}if(n.tag===1){var s=n.type;if(Ge(s)){n=ph(n,s,l);break e}}n=l}else n=pn;return t.context===null?t.context=n:t.pendingContext=n,t=ln(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),sn(o,t),cn(o,i),i}function wl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bd(e,t){e=e.memoizedState,e!==null&&e.dehydrated!==null&&e.retryTime<t&&(e.retryTime=t)}function Qu(e,t){Bd(e,t),(e=e.alternate)&&Bd(e,t)}function Gu(e,t,n){n=n!=null&&n.hydrate===!0;var r=new Cy(e,t,n),o=$t(3,null,null,t===2?7:t===1?3:0);r.current=o,o.stateNode=r,Ou(o),e[mo]=r.current,n&&t!==0&&og(e,e.nodeType===9?e:e.ownerDocument),this._internalRoot=r}Gu.prototype.render=function(e){Mi(e,this._internalRoot,null,null)};Gu.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Mi(null,e,null,function(){t[mo]=null})};function bo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $y(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Gu(e,0,t?{hydrate:!0}:void 0)}function la(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i._internalRoot;if(typeof o=="function"){var l=o;o=function(){var u=wl(a);l.call(u)}}Mi(t,a,e,o)}else{if(i=n._reactRootContainer=$y(n,r),a=i._internalRoot,typeof o=="function"){var s=o;o=function(){var u=wl(a);s.call(u)}}Jh(function(){Mi(t,a,e,o)})}return wl(a)}function Py(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}Wp=function(e){if(e.tag===13){var t=ri(Ot(),150,100);cn(e,t),Qu(e,t)}};gu=function(e){e.tag===13&&(cn(e,3),Qu(e,3))};Vp=function(e){if(e.tag===13){var t=Ot();t=_n(t,e,null),cn(e,t),Qu(e,t)}};Vl=function(e,t,n){switch(t){case"input":if(Kl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Su(r);if(!o)throw Error(M(90));Cp(r),Kl(r,o)}}}break;case"textarea":Pp(e,n);break;case"select":t=n.value,t!=null&&ir(e,!!n.multiple,t,!1)}};iu=qh;yp=function(e,t,n,r,o){var i=re;re|=4;try{return hn(98,e.bind(null,t,n,r,o))}finally{re=i,re===Pe&&Nt()}};au=function(){(re&(1|wt|Dt))===Pe&&(vy(),Sr())};xp=function(e,t){var n=re;re|=2;try{return e(t)}finally{re=n,re===Pe&&Nt()}};function im(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bo(t))throw Error(M(200));return Py(e,t,null,n)}var Ry={Events:[go,Fn,Su,mp,Wl,pr,function(e){mu(e,gg)},vp,gp,Xi,Yi,Sr,{current:!1}]};(function(e){var t=e.findFiberByHostInstance;return Sy(ze({},e,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Mp(n),n===null?null:n.stateNode},findFiberByHostInstance:function(n){return t?t(n):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:vo,bundleType:0,version:"16.14.0",rendererPackageName:"react-dom"});pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ry;pt.createPortal=im;pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternalFiber;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):Error(M(268,Object.keys(e)));return e=Mp(t),e=e===null?null:e.stateNode,e};pt.flushSync=function(e,t){if((re&(wt|Dt))!==Pe)throw Error(M(187));var n=re;re|=1;try{return hn(99,e.bind(null,t))}finally{re=n,Nt()}};pt.hydrate=function(e,t,n){if(!bo(t))throw Error(M(200));return la(null,e,t,!0,n)};pt.render=function(e,t,n){if(!bo(t))throw Error(M(200));return la(null,e,t,!1,n)};pt.unmountComponentAtNode=function(e){if(!bo(e))throw Error(M(40));return e._reactRootContainer?(Jh(function(){la(null,null,e,!1,function(){e._reactRootContainer=null,e[mo]=null})}),!0):!1};pt.unstable_batchedUpdates=qh;pt.unstable_createPortal=function(e,t){return im(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};pt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bo(n))throw Error(M(200));if(e==null||e._reactInternalFiber===void 0)throw Error(M(38));return la(e,t,n,!1,r)};pt.version="16.14.0";function am(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(am)}catch(e){console.error(e)}}am(),up.exports=pt;var lm=up.exports;const Oy=je(lm);function Ds(e,t){return Ds=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Ds(e,t)}function ft(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Ds(e,t)}var sm={exports:{}},Dy="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Iy=Dy,Ny=Iy;function um(){}function cm(){}cm.resetWarningCache=um;var _y=function(){function e(r,o,i,a,l,s){if(s!==Ny){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:cm,resetWarningCache:um};return n.PropTypes=n,n};sm.exports=_y();var Ly=sm.exports;const Et=je(Ly);function Te(){return Te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Te.apply(this,arguments)}function zo(e){return e.charAt(0)==="/"}function bl(e,t){for(var n=t,r=n+1,o=e.length;r<o;n+=1,r+=1)e[n]=e[r];e.pop()}function jy(e,t){t===void 0&&(t="");var n=e&&e.split("/")||[],r=t&&t.split("/")||[],o=e&&zo(e),i=t&&zo(t),a=o||i;if(e&&zo(e)?r=n:n.length&&(r.pop(),r=r.concat(n)),!r.length)return"/";var l;if(r.length){var s=r[r.length-1];l=s==="."||s===".."||s===""}else l=!1;for(var u=0,d=r.length;d>=0;d--){var c=r[d];c==="."?bl(r,d):c===".."?(bl(r,d),u++):u&&(bl(r,d),u--)}if(!a)for(;u--;u)r.unshift("..");a&&r[0]!==""&&(!r[0]||!zo(r[0]))&&r.unshift("");var m=r.join("/");return l&&m.substr(-1)!=="/"&&(m+="/"),m}var Fy="Invariant failed";function xn(e,t){throw new Error(Fy)}function qr(e){return e.charAt(0)==="/"?e:"/"+e}function zd(e){return e.charAt(0)==="/"?e.substr(1):e}function My(e,t){return e.toLowerCase().indexOf(t.toLowerCase())===0&&"/?#".indexOf(e.charAt(t.length))!==-1}function dm(e,t){return My(e,t)?e.substr(t.length):e}function fm(e){return e.charAt(e.length-1)==="/"?e.slice(0,-1):e}function By(e){var t=e||"/",n="",r="",o=t.indexOf("#");o!==-1&&(r=t.substr(o),t=t.substr(0,o));var i=t.indexOf("?");return i!==-1&&(n=t.substr(i),t=t.substr(0,i)),{pathname:t,search:n==="?"?"":n,hash:r==="#"?"":r}}function Ve(e){var t=e.pathname,n=e.search,r=e.hash,o=t||"/";return n&&n!=="?"&&(o+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(o+=r.charAt(0)==="#"?r:"#"+r),o}function Xe(e,t,n,r){var o;typeof e=="string"?(o=By(e),o.state=t):(o=Te({},e),o.pathname===void 0&&(o.pathname=""),o.search?o.search.charAt(0)!=="?"&&(o.search="?"+o.search):o.search="",o.hash?o.hash.charAt(0)!=="#"&&(o.hash="#"+o.hash):o.hash="",t!==void 0&&o.state===void 0&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(i){throw i instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):i}return n&&(o.key=n),r?o.pathname?o.pathname.charAt(0)!=="/"&&(o.pathname=jy(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function Ku(){var e=null;function t(a){return e=a,function(){e===a&&(e=null)}}function n(a,l,s,u){if(e!=null){var d=typeof e=="function"?e(a,l):e;typeof d=="string"?typeof s=="function"?s(d,u):u(!0):u(d!==!1)}else u(!0)}var r=[];function o(a){var l=!0;function s(){l&&a.apply(void 0,arguments)}return r.push(s),function(){l=!1,r=r.filter(function(u){return u!==s})}}function i(){for(var a=arguments.length,l=new Array(a),s=0;s<a;s++)l[s]=arguments[s];r.forEach(function(u){return u.apply(void 0,l)})}return{setPrompt:t,confirmTransitionTo:n,appendListener:o,notifyListeners:i}}var pm=!!(typeof window<"u"&&window.document&&window.document.createElement);function hm(e,t){t(window.confirm(e))}function zy(){var e=window.navigator.userAgent;return(e.indexOf("Android 2.")!==-1||e.indexOf("Android 4.0")!==-1)&&e.indexOf("Mobile Safari")!==-1&&e.indexOf("Chrome")===-1&&e.indexOf("Windows Phone")===-1?!1:window.history&&"pushState"in window.history}function Uy(){return window.navigator.userAgent.indexOf("Trident")===-1}function Hy(){return window.navigator.userAgent.indexOf("Firefox")===-1}function Wy(e){return e.state===void 0&&navigator.userAgent.indexOf("CriOS")===-1}var Ud="popstate",Hd="hashchange";function Wd(){try{return window.history.state||{}}catch{return{}}}function Vy(e){e===void 0&&(e={}),pm||xn();var t=window.history,n=zy(),r=!Uy(),o=e,i=o.forceRefresh,a=i===void 0?!1:i,l=o.getUserConfirmation,s=l===void 0?hm:l,u=o.keyLength,d=u===void 0?6:u,c=e.basename?fm(qr(e.basename)):"";function m(z){var B=z||{},Q=B.key,D=B.state,R=window.location,w=R.pathname,P=R.search,x=R.hash,F=w+P+x;return c&&(F=dm(F,c)),Xe(F,D,Q)}function k(){return Math.random().toString(36).substr(2,d)}var g=Ku();function b(z){Te(U,z),U.length=t.length,g.notifyListeners(U.location,U.action)}function f(z){Wy(z)||y(m(z.state))}function p(){y(m(Wd()))}var h=!1;function y(z){if(h)h=!1,b();else{var B="POP";g.confirmTransitionTo(z,B,s,function(Q){Q?b({action:B,location:z}):S(z)})}}function S(z){var B=U.location,Q=$.indexOf(B.key);Q===-1&&(Q=0);var D=$.indexOf(z.key);D===-1&&(D=0);var R=Q-D;R&&(h=!0,J(R))}var E=m(Wd()),$=[E.key];function O(z){return c+Ve(z)}function L(z,B){var Q="PUSH",D=Xe(z,B,k(),U.location);g.confirmTransitionTo(D,Q,s,function(R){if(R){var w=O(D),P=D.key,x=D.state;if(n)if(t.pushState({key:P,state:x},null,w),a)window.location.href=w;else{var F=$.indexOf(U.location.key),I=$.slice(0,F+1);I.push(D.key),$=I,b({action:Q,location:D})}else window.location.href=w}})}function j(z,B){var Q="REPLACE",D=Xe(z,B,k(),U.location);g.confirmTransitionTo(D,Q,s,function(R){if(R){var w=O(D),P=D.key,x=D.state;if(n)if(t.replaceState({key:P,state:x},null,w),a)window.location.replace(w);else{var F=$.indexOf(U.location.key);F!==-1&&($[F]=D.key),b({action:Q,location:D})}else window.location.replace(w)}})}function J(z){t.go(z)}function Y(){J(-1)}function X(){J(1)}var ae=0;function q(z){ae+=z,ae===1&&z===1?(window.addEventListener(Ud,f),r&&window.addEventListener(Hd,p)):ae===0&&(window.removeEventListener(Ud,f),r&&window.removeEventListener(Hd,p))}var V=!1;function se(z){z===void 0&&(z=!1);var B=g.setPrompt(z);return V||(q(1),V=!0),function(){return V&&(V=!1,q(-1)),B()}}function te(z){var B=g.appendListener(z);return q(1),function(){q(-1),B()}}var U={length:t.length,action:"POP",location:E,createHref:O,push:L,replace:j,go:J,goBack:Y,goForward:X,block:se,listen:te};return U}var Vd="hashchange",Qy={hashbang:{encodePath:function(t){return t.charAt(0)==="!"?t:"!/"+zd(t)},decodePath:function(t){return t.charAt(0)==="!"?t.substr(1):t}},noslash:{encodePath:zd,decodePath:qr},slash:{encodePath:qr,decodePath:qr}};function mm(e){var t=e.indexOf("#");return t===-1?e:e.slice(0,t)}function _r(){var e=window.location.href,t=e.indexOf("#");return t===-1?"":e.substring(t+1)}function Gy(e){window.location.hash=e}function Al(e){window.location.replace(mm(window.location.href)+"#"+e)}function Ky(e){e===void 0&&(e={}),pm||xn();var t=window.history;Hy();var n=e,r=n.getUserConfirmation,o=r===void 0?hm:r,i=n.hashType,a=i===void 0?"slash":i,l=e.basename?fm(qr(e.basename)):"",s=Qy[a],u=s.encodePath,d=s.decodePath;function c(){var B=d(_r());return l&&(B=dm(B,l)),Xe(B)}var m=Ku();function k(B){Te(z,B),z.length=t.length,m.notifyListeners(z.location,z.action)}var g=!1,b=null;function f(B,Q){return B.pathname===Q.pathname&&B.search===Q.search&&B.hash===Q.hash}function p(){var B=_r(),Q=u(B);if(B!==Q)Al(Q);else{var D=c(),R=z.location;if(!g&&f(R,D)||b===Ve(D))return;b=null,h(D)}}function h(B){if(g)g=!1,k();else{var Q="POP";m.confirmTransitionTo(B,Q,o,function(D){D?k({action:Q,location:B}):y(B)})}}function y(B){var Q=z.location,D=O.lastIndexOf(Ve(Q));D===-1&&(D=0);var R=O.lastIndexOf(Ve(B));R===-1&&(R=0);var w=D-R;w&&(g=!0,Y(w))}var S=_r(),E=u(S);S!==E&&Al(E);var $=c(),O=[Ve($)];function L(B){var Q=document.querySelector("base"),D="";return Q&&Q.getAttribute("href")&&(D=mm(window.location.href)),D+"#"+u(l+Ve(B))}function j(B,Q){var D="PUSH",R=Xe(B,void 0,void 0,z.location);m.confirmTransitionTo(R,D,o,function(w){if(w){var P=Ve(R),x=u(l+P),F=_r()!==x;if(F){b=P,Gy(x);var I=O.lastIndexOf(Ve(z.location)),_=O.slice(0,I+1);_.push(P),O=_,k({action:D,location:R})}else k()}})}function J(B,Q){var D="REPLACE",R=Xe(B,void 0,void 0,z.location);m.confirmTransitionTo(R,D,o,function(w){if(w){var P=Ve(R),x=u(l+P),F=_r()!==x;F&&(b=P,Al(x));var I=O.indexOf(Ve(z.location));I!==-1&&(O[I]=P),k({action:D,location:R})}})}function Y(B){t.go(B)}function X(){Y(-1)}function ae(){Y(1)}var q=0;function V(B){q+=B,q===1&&B===1?window.addEventListener(Vd,p):q===0&&window.removeEventListener(Vd,p)}var se=!1;function te(B){B===void 0&&(B=!1);var Q=m.setPrompt(B);return se||(V(1),se=!0),function(){return se&&(se=!1,V(-1)),Q()}}function U(B){var Q=m.appendListener(B);return V(1),function(){V(-1),Q()}}var z={length:t.length,action:"POP",location:$,createHref:L,push:j,replace:J,go:Y,goBack:X,goForward:ae,block:te,listen:U};return z}function Qd(e,t,n){return Math.min(Math.max(e,t),n)}function qy(e){e===void 0&&(e={});var t=e,n=t.getUserConfirmation,r=t.initialEntries,o=r===void 0?["/"]:r,i=t.initialIndex,a=i===void 0?0:i,l=t.keyLength,s=l===void 0?6:l,u=Ku();function d(L){Te(O,L),O.length=O.entries.length,u.notifyListeners(O.location,O.action)}function c(){return Math.random().toString(36).substr(2,s)}var m=Qd(a,0,o.length-1),k=o.map(function(L){return typeof L=="string"?Xe(L,void 0,c()):Xe(L,void 0,L.key||c())}),g=Ve;function b(L,j){var J="PUSH",Y=Xe(L,j,c(),O.location);u.confirmTransitionTo(Y,J,n,function(X){if(X){var ae=O.index,q=ae+1,V=O.entries.slice(0);V.length>q?V.splice(q,V.length-q,Y):V.push(Y),d({action:J,location:Y,index:q,entries:V})}})}function f(L,j){var J="REPLACE",Y=Xe(L,j,c(),O.location);u.confirmTransitionTo(Y,J,n,function(X){X&&(O.entries[O.index]=Y,d({action:J,location:Y}))})}function p(L){var j=Qd(O.index+L,0,O.entries.length-1),J="POP",Y=O.entries[j];u.confirmTransitionTo(Y,J,n,function(X){X?d({action:J,location:Y,index:j}):d()})}function h(){p(-1)}function y(){p(1)}function S(L){var j=O.index+L;return j>=0&&j<O.entries.length}function E(L){return L===void 0&&(L=!1),u.setPrompt(L)}function $(L){return u.appendListener(L)}var O={length:k.length,action:"POP",location:k[m],index:m,entries:k,createHref:g,push:b,replace:f,go:p,goBack:h,goForward:y,canGo:S,block:E,listen:$};return O}var Er={exports:{}},Jy=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},Bi=Jy;Er.exports=ym;Er.exports.parse=qu;Er.exports.compile=Xy;Er.exports.tokensToFunction=vm;Er.exports.tokensToRegExp=gm;var Yy=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function qu(e,t){for(var n=[],r=0,o=0,i="",a=t&&t.delimiter||"/",l;(l=Yy.exec(e))!=null;){var s=l[0],u=l[1],d=l.index;if(i+=e.slice(o,d),o=d+s.length,u){i+=u[1];continue}var c=e[o],m=l[2],k=l[3],g=l[4],b=l[5],f=l[6],p=l[7];i&&(n.push(i),i="");var h=m!=null&&c!=null&&c!==m,y=f==="+"||f==="*",S=f==="?"||f==="*",E=l[2]||a,$=g||b;n.push({name:k||r++,prefix:m||"",delimiter:E,optional:S,repeat:y,partial:h,asterisk:!!p,pattern:$?t1($):p?".*":"[^"+si(E)+"]+?"})}return o<e.length&&(i+=e.substr(o)),i&&n.push(i),n}function Xy(e,t){return vm(qu(e,t),t)}function Zy(e){return encodeURI(e).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function e1(e){return encodeURI(e).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function vm(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)typeof e[r]=="object"&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",Yu(t)));return function(o,i){for(var a="",l=o||{},s=i||{},u=s.pretty?Zy:encodeURIComponent,d=0;d<e.length;d++){var c=e[d];if(typeof c=="string"){a+=c;continue}var m=l[c.name],k;if(m==null)if(c.optional){c.partial&&(a+=c.prefix);continue}else throw new TypeError('Expected "'+c.name+'" to be defined');if(Bi(m)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(m)+"`");if(m.length===0){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var g=0;g<m.length;g++){if(k=u(m[g]),!n[d].test(k))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(k)+"`");a+=(g===0?c.prefix:c.delimiter)+k}continue}if(k=c.asterisk?e1(m):u(m),!n[d].test(k))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+k+'"');a+=c.prefix+k}return a}}function si(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function t1(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function Ju(e,t){return e.keys=t,e}function Yu(e){return e&&e.sensitive?"":"i"}function n1(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return Ju(e,t)}function r1(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(ym(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",Yu(n));return Ju(i,t)}function o1(e,t,n){return gm(qu(e,n),t,n)}function gm(e,t,n){Bi(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",a=0;a<e.length;a++){var l=e[a];if(typeof l=="string")i+=si(l);else{var s=si(l.prefix),u="(?:"+l.pattern+")";t.push(l),l.repeat&&(u+="(?:"+s+u+")*"),l.optional?l.partial?u=s+"("+u+")?":u="(?:"+s+"("+u+"))?":u=s+"("+u+")",i+=u}}var d=si(n.delimiter||"/"),c=i.slice(-d.length)===d;return r||(i=(c?i.slice(0,-d.length):i)+"(?:"+d+"(?=$))?"),o?i+="$":i+=r&&c?"":"(?="+d+"|$)",Ju(new RegExp("^"+i,Yu(n)),t)}function ym(e,t,n){return Bi(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?n1(e,t):Bi(e)?r1(e,t,n):o1(e,t,n)}var i1=Er.exports;const a1=je(i1);var ve={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Re=typeof Symbol=="function"&&Symbol.for,Xu=Re?Symbol.for("react.element"):60103,Zu=Re?Symbol.for("react.portal"):60106,sa=Re?Symbol.for("react.fragment"):60107,ua=Re?Symbol.for("react.strict_mode"):60108,ca=Re?Symbol.for("react.profiler"):60114,da=Re?Symbol.for("react.provider"):60109,fa=Re?Symbol.for("react.context"):60110,ec=Re?Symbol.for("react.async_mode"):60111,pa=Re?Symbol.for("react.concurrent_mode"):60111,ha=Re?Symbol.for("react.forward_ref"):60112,ma=Re?Symbol.for("react.suspense"):60113,l1=Re?Symbol.for("react.suspense_list"):60120,va=Re?Symbol.for("react.memo"):60115,ga=Re?Symbol.for("react.lazy"):60116,s1=Re?Symbol.for("react.block"):60121,u1=Re?Symbol.for("react.fundamental"):60117,c1=Re?Symbol.for("react.responder"):60118,d1=Re?Symbol.for("react.scope"):60119;function rt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Xu:switch(e=e.type,e){case ec:case pa:case sa:case ca:case ua:case ma:return e;default:switch(e=e&&e.$$typeof,e){case fa:case ha:case ga:case va:case da:return e;default:return t}}case Zu:return t}}}function xm(e){return rt(e)===pa}ve.AsyncMode=ec;ve.ConcurrentMode=pa;ve.ContextConsumer=fa;ve.ContextProvider=da;ve.Element=Xu;ve.ForwardRef=ha;ve.Fragment=sa;ve.Lazy=ga;ve.Memo=va;ve.Portal=Zu;ve.Profiler=ca;ve.StrictMode=ua;ve.Suspense=ma;ve.isAsyncMode=function(e){return xm(e)||rt(e)===ec};ve.isConcurrentMode=xm;ve.isContextConsumer=function(e){return rt(e)===fa};ve.isContextProvider=function(e){return rt(e)===da};ve.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xu};ve.isForwardRef=function(e){return rt(e)===ha};ve.isFragment=function(e){return rt(e)===sa};ve.isLazy=function(e){return rt(e)===ga};ve.isMemo=function(e){return rt(e)===va};ve.isPortal=function(e){return rt(e)===Zu};ve.isProfiler=function(e){return rt(e)===ca};ve.isStrictMode=function(e){return rt(e)===ua};ve.isSuspense=function(e){return rt(e)===ma};ve.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===sa||e===pa||e===ca||e===ua||e===ma||e===l1||typeof e=="object"&&e!==null&&(e.$$typeof===ga||e.$$typeof===va||e.$$typeof===da||e.$$typeof===fa||e.$$typeof===ha||e.$$typeof===u1||e.$$typeof===c1||e.$$typeof===d1||e.$$typeof===s1)};ve.typeOf=rt;function wn(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var wm={exports:{}},pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oe=typeof Symbol=="function"&&Symbol.for,tc=Oe?Symbol.for("react.element"):60103,nc=Oe?Symbol.for("react.portal"):60106,ya=Oe?Symbol.for("react.fragment"):60107,xa=Oe?Symbol.for("react.strict_mode"):60108,wa=Oe?Symbol.for("react.profiler"):60114,ba=Oe?Symbol.for("react.provider"):60109,Aa=Oe?Symbol.for("react.context"):60110,rc=Oe?Symbol.for("react.async_mode"):60111,ka=Oe?Symbol.for("react.concurrent_mode"):60111,Sa=Oe?Symbol.for("react.forward_ref"):60112,Ea=Oe?Symbol.for("react.suspense"):60113,f1=Oe?Symbol.for("react.suspense_list"):60120,Ta=Oe?Symbol.for("react.memo"):60115,Ca=Oe?Symbol.for("react.lazy"):60116,p1=Oe?Symbol.for("react.block"):60121,h1=Oe?Symbol.for("react.fundamental"):60117,m1=Oe?Symbol.for("react.responder"):60118,v1=Oe?Symbol.for("react.scope"):60119;function ot(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case tc:switch(e=e.type,e){case rc:case ka:case ya:case wa:case xa:case Ea:return e;default:switch(e=e&&e.$$typeof,e){case Aa:case Sa:case Ca:case Ta:case ba:return e;default:return t}}case nc:return t}}}function bm(e){return ot(e)===ka}pe.AsyncMode=rc;pe.ConcurrentMode=ka;pe.ContextConsumer=Aa;pe.ContextProvider=ba;pe.Element=tc;pe.ForwardRef=Sa;pe.Fragment=ya;pe.Lazy=Ca;pe.Memo=Ta;pe.Portal=nc;pe.Profiler=wa;pe.StrictMode=xa;pe.Suspense=Ea;pe.isAsyncMode=function(e){return bm(e)||ot(e)===rc};pe.isConcurrentMode=bm;pe.isContextConsumer=function(e){return ot(e)===Aa};pe.isContextProvider=function(e){return ot(e)===ba};pe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===tc};pe.isForwardRef=function(e){return ot(e)===Sa};pe.isFragment=function(e){return ot(e)===ya};pe.isLazy=function(e){return ot(e)===Ca};pe.isMemo=function(e){return ot(e)===Ta};pe.isPortal=function(e){return ot(e)===nc};pe.isProfiler=function(e){return ot(e)===wa};pe.isStrictMode=function(e){return ot(e)===xa};pe.isSuspense=function(e){return ot(e)===Ea};pe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ya||e===ka||e===wa||e===xa||e===Ea||e===f1||typeof e=="object"&&e!==null&&(e.$$typeof===Ca||e.$$typeof===Ta||e.$$typeof===ba||e.$$typeof===Aa||e.$$typeof===Sa||e.$$typeof===h1||e.$$typeof===m1||e.$$typeof===v1||e.$$typeof===p1)};pe.typeOf=ot;wm.exports=pe;var g1=wm.exports,oc=g1,y1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},x1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},w1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Am={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ic={};ic[oc.ForwardRef]=w1;ic[oc.Memo]=Am;function Gd(e){return oc.isMemo(e)?Am:ic[e.$$typeof]||y1}var b1=Object.defineProperty,A1=Object.getOwnPropertyNames,Kd=Object.getOwnPropertySymbols,k1=Object.getOwnPropertyDescriptor,S1=Object.getPrototypeOf,qd=Object.prototype;function km(e,t,n){if(typeof t!="string"){if(qd){var r=S1(t);r&&r!==qd&&km(e,r,n)}var o=A1(t);Kd&&(o=o.concat(Kd(t)));for(var i=Gd(e),a=Gd(t),l=0;l<o.length;++l){var s=o[l];if(!x1[s]&&!(n&&n[s])&&!(a&&a[s])&&!(i&&i[s])){var u=k1(t,s);try{b1(e,s,u)}catch{}}}}return e}var E1=km;const zi=je(E1);var kl=1073741823,Jd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{};function T1(){var e="__global_unique_id__";return Jd[e]=(Jd[e]||0)+1}function C1(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function $1(e){var t=[];return{on:function(r){t.push(r)},off:function(r){t=t.filter(function(o){return o!==r})},get:function(){return e},set:function(r,o){e=r,t.forEach(function(i){return i(e,o)})}}}function P1(e){return Array.isArray(e)?e[0]:e}function R1(e,t){var n,r,o="__create-react-context-"+T1()+"__",i=function(l){ft(s,l);function s(){for(var d,c=arguments.length,m=new Array(c),k=0;k<c;k++)m[k]=arguments[k];return d=l.call.apply(l,[this].concat(m))||this,d.emitter=$1(d.props.value),d}var u=s.prototype;return u.getChildContext=function(){var c;return c={},c[o]=this.emitter,c},u.componentWillReceiveProps=function(c){if(this.props.value!==c.value){var m=this.props.value,k=c.value,g;C1(m,k)?g=0:(g=typeof t=="function"?t(m,k):kl,g|=0,g!==0&&this.emitter.set(c.value,g))}},u.render=function(){return this.props.children},s}(A.Component);i.childContextTypes=(n={},n[o]=Et.object.isRequired,n);var a=function(l){ft(s,l);function s(){for(var d,c=arguments.length,m=new Array(c),k=0;k<c;k++)m[k]=arguments[k];return d=l.call.apply(l,[this].concat(m))||this,d.observedBits=void 0,d.state={value:d.getValue()},d.onUpdate=function(g,b){var f=d.observedBits|0;f&b&&d.setState({value:d.getValue()})},d}var u=s.prototype;return u.componentWillReceiveProps=function(c){var m=c.observedBits;this.observedBits=m??kl},u.componentDidMount=function(){this.context[o]&&this.context[o].on(this.onUpdate);var c=this.props.observedBits;this.observedBits=c??kl},u.componentWillUnmount=function(){this.context[o]&&this.context[o].off(this.onUpdate)},u.getValue=function(){return this.context[o]?this.context[o].get():e},u.render=function(){return P1(this.props.children)(this.state.value)},s}(A.Component);return a.contextTypes=(r={},r[o]=Et.object,r),{Provider:i,Consumer:a}}var O1=A.createContext||R1,Sm=function(t){var n=O1();return n.displayName=t,n},D1=Sm("Router-History"),mn=Sm("Router"),$a=function(e){ft(t,e),t.computeRootMatch=function(o){return{path:"/",url:"/",params:{},isExact:o==="/"}};function t(r){var o;return o=e.call(this,r)||this,o.state={location:r.history.location},o._isMounted=!1,o._pendingLocation=null,r.staticContext||(o.unlisten=r.history.listen(function(i){o._pendingLocation=i})),o}var n=t.prototype;return n.componentDidMount=function(){var o=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen(function(i){o._isMounted&&o.setState({location:i})})),this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},n.render=function(){return A.createElement(mn.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},A.createElement(D1.Provider,{children:this.props.children||null,value:this.props.history}))},t}(A.Component);A.Component;A.Component;var Yd={},I1=1e4,Xd=0;function N1(e,t){var n=""+t.end+t.strict+t.sensitive,r=Yd[n]||(Yd[n]={});if(r[e])return r[e];var o=[],i=a1(e,o,t),a={regexp:i,keys:o};return Xd<I1&&(r[e]=a,Xd++),a}function ac(e,t){t===void 0&&(t={}),(typeof t=="string"||Array.isArray(t))&&(t={path:t});var n=t,r=n.path,o=n.exact,i=o===void 0?!1:o,a=n.strict,l=a===void 0?!1:a,s=n.sensitive,u=s===void 0?!1:s,d=[].concat(r);return d.reduce(function(c,m){if(!m&&m!=="")return null;if(c)return c;var k=N1(m,{end:i,strict:l,sensitive:u}),g=k.regexp,b=k.keys,f=g.exec(e);if(!f)return null;var p=f[0],h=f.slice(1),y=e===p;return i&&!y?null:{path:m,url:m==="/"&&p===""?"/":p,isExact:y,params:b.reduce(function(S,E,$){return S[E.name]=h[$],S},{})}},null)}function _1(e){return A.Children.count(e)===0}var bn=function(e){ft(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.render=function(){var o=this;return A.createElement(mn.Consumer,null,function(i){i||xn();var a=o.props.location||i.location,l=o.props.computedMatch?o.props.computedMatch:o.props.path?ac(a.pathname,o.props):i.match,s=Te({},i,{location:a,match:l}),u=o.props,d=u.children,c=u.component,m=u.render;return Array.isArray(d)&&_1(d)&&(d=null),A.createElement(mn.Provider,{value:s},s.match?d?typeof d=="function"?d(s):d:c?A.createElement(c,s):m?m(s):null:typeof d=="function"?d(s):null)})},t}(A.Component);function lc(e){return e.charAt(0)==="/"?e:"/"+e}function L1(e,t){return e?Te({},t,{pathname:lc(e)+t.pathname}):t}function j1(e,t){if(!e)return t;var n=lc(e);return t.pathname.indexOf(n)!==0?t:Te({},t,{pathname:t.pathname.substr(n.length)})}function Zd(e){return typeof e=="string"?e:Ve(e)}function Sl(e){return function(){xn()}}function ef(){}A.Component;var tf=function(e){ft(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.render=function(){var o=this;return A.createElement(mn.Consumer,null,function(i){i||xn();var a=o.props.location||i.location,l,s;return A.Children.forEach(o.props.children,function(u){if(s==null&&A.isValidElement(u)){l=u;var d=u.props.path||u.props.from;s=d?ac(a.pathname,Te({},u.props,{path:d})):i.match}}),s?A.cloneElement(l,{location:a,computedMatch:s}):null})},t}(A.Component);function Ao(e){var t="withRouter("+(e.displayName||e.name)+")",n=function(o){var i=o.wrappedComponentRef,a=wn(o,["wrappedComponentRef"]);return A.createElement(mn.Consumer,null,function(l){return l||xn(),A.createElement(e,Te({},a,l,{ref:i}))})};return n.displayName=t,n.WrappedComponent=e,zi(n,e)}var F1=A.useContext;function Em(){return F1(mn).location}var M1=function(e){ft(t,e);function t(){for(var r,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=e.call.apply(e,[this].concat(i))||this,r.history=Vy(r.props),r}var n=t.prototype;return n.render=function(){return A.createElement($a,{history:this.history,children:this.props.children})},t}(A.Component);A.Component;var Is=function(t,n){return typeof t=="function"?t(n):t},Ns=function(t,n){return typeof t=="string"?Xe(t,null,null,n):t},sc=function(t){return t},gr=A.forwardRef;typeof gr>"u"&&(gr=sc);function B1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}var z1=gr(function(e,t){var n=e.innerRef,r=e.navigate,o=e.onClick,i=wn(e,["innerRef","navigate","onClick"]),a=i.target,l=Te({},i,{onClick:function(u){try{o&&o(u)}catch(d){throw u.preventDefault(),d}!u.defaultPrevented&&u.button===0&&(!a||a==="_self")&&!B1(u)&&(u.preventDefault(),r())}});return sc!==gr?l.ref=t||n:l.ref=n,A.createElement("a",l)}),U1=gr(function(e,t){var n=e.component,r=n===void 0?z1:n,o=e.replace,i=e.to,a=e.innerRef,l=wn(e,["component","replace","to","innerRef"]);return A.createElement(mn.Consumer,null,function(s){s||xn();var u=s.history,d=Ns(Is(i,s.location),s.location),c=d?u.createHref(d):"",m=Te({},l,{href:c,navigate:function(){var g=Is(i,s.location),b=Ve(s.location)===Ve(Ns(g)),f=o||b?u.replace:u.push;f(g)}});return sc!==gr?m.ref=t||a:m.innerRef=a,A.createElement(r,m)})}),Tm=function(t){return t},Ui=A.forwardRef;typeof Ui>"u"&&(Ui=Tm);function H1(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(function(r){return r}).join(" ")}Ui(function(e,t){var n=e["aria-current"],r=n===void 0?"page":n,o=e.activeClassName,i=o===void 0?"active":o,a=e.activeStyle,l=e.className,s=e.exact,u=e.isActive,d=e.location,c=e.sensitive,m=e.strict,k=e.style,g=e.to,b=e.innerRef,f=wn(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return A.createElement(mn.Consumer,null,function(p){p||xn();var h=d||p.location,y=Ns(Is(g,h),h),S=y.pathname,E=S&&S.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),$=E?ac(h.pathname,{path:E,exact:s,sensitive:c,strict:m}):null,O=!!(u?u($,h):$),L=typeof l=="function"?l(O):l,j=typeof k=="function"?k(O):k;O&&(L=H1(L,i),j=Te({},j,a));var J=Te({"aria-current":O&&r||null,className:L,style:j,to:y},f);return Tm!==Ui?J.ref=t||b:J.innerRef=b,A.createElement(U1,J)})});var Cm=A.createContext(null),$m=function(e){ft(t,e);function t(r){var o;o=e.call(this,r)||this;var i=r.store;return o.state={storeState:i.getState(),store:i},o}var n=t.prototype;return n.componentDidMount=function(){this._isMounted=!0,this.subscribe()},n.componentWillUnmount=function(){this.unsubscribe&&this.unsubscribe(),this._isMounted=!1},n.componentDidUpdate=function(o){this.props.store!==o.store&&(this.unsubscribe&&this.unsubscribe(),this.subscribe())},n.subscribe=function(){var o=this,i=this.props.store;this.unsubscribe=i.subscribe(function(){var l=i.getState();o._isMounted&&o.setState(function(s){return s.storeState===l?null:{storeState:l}})});var a=i.getState();a!==this.state.storeState&&this.setState({storeState:a})},n.render=function(){var o=this.props.context||Cm;return A.createElement(o.Provider,{value:this.state},this.props.children)},t}(T.Component);$m.propTypes={store:Et.shape({subscribe:Et.func.isRequired,dispatch:Et.func.isRequired,getState:Et.func.isRequired}),context:Et.object,children:Et.any};function W1(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var V1=function(e,t,n,r,o,i,a,l){if(!e){var s;if(t===void 0)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,a,l],d=0;s=new Error(t.replace(/%s/g,function(){return u[d++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}},Q1=V1;const Lr=je(Q1);var Pm={exports:{}},he={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var De=typeof Symbol=="function"&&Symbol.for,uc=De?Symbol.for("react.element"):60103,cc=De?Symbol.for("react.portal"):60106,Pa=De?Symbol.for("react.fragment"):60107,Ra=De?Symbol.for("react.strict_mode"):60108,Oa=De?Symbol.for("react.profiler"):60114,Da=De?Symbol.for("react.provider"):60109,Ia=De?Symbol.for("react.context"):60110,dc=De?Symbol.for("react.async_mode"):60111,Na=De?Symbol.for("react.concurrent_mode"):60111,_a=De?Symbol.for("react.forward_ref"):60112,La=De?Symbol.for("react.suspense"):60113,G1=De?Symbol.for("react.suspense_list"):60120,ja=De?Symbol.for("react.memo"):60115,Fa=De?Symbol.for("react.lazy"):60116,K1=De?Symbol.for("react.block"):60121,q1=De?Symbol.for("react.fundamental"):60117,J1=De?Symbol.for("react.responder"):60118,Y1=De?Symbol.for("react.scope"):60119;function it(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case uc:switch(e=e.type,e){case dc:case Na:case Pa:case Oa:case Ra:case La:return e;default:switch(e=e&&e.$$typeof,e){case Ia:case _a:case Fa:case ja:case Da:return e;default:return t}}case cc:return t}}}function Rm(e){return it(e)===Na}he.AsyncMode=dc;he.ConcurrentMode=Na;he.ContextConsumer=Ia;he.ContextProvider=Da;he.Element=uc;he.ForwardRef=_a;he.Fragment=Pa;he.Lazy=Fa;he.Memo=ja;he.Portal=cc;he.Profiler=Oa;he.StrictMode=Ra;he.Suspense=La;he.isAsyncMode=function(e){return Rm(e)||it(e)===dc};he.isConcurrentMode=Rm;he.isContextConsumer=function(e){return it(e)===Ia};he.isContextProvider=function(e){return it(e)===Da};he.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===uc};he.isForwardRef=function(e){return it(e)===_a};he.isFragment=function(e){return it(e)===Pa};he.isLazy=function(e){return it(e)===Fa};he.isMemo=function(e){return it(e)===ja};he.isPortal=function(e){return it(e)===cc};he.isProfiler=function(e){return it(e)===Oa};he.isStrictMode=function(e){return it(e)===Ra};he.isSuspense=function(e){return it(e)===La};he.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Pa||e===Na||e===Oa||e===Ra||e===La||e===G1||typeof e=="object"&&e!==null&&(e.$$typeof===Fa||e.$$typeof===ja||e.$$typeof===Da||e.$$typeof===Ia||e.$$typeof===_a||e.$$typeof===q1||e.$$typeof===J1||e.$$typeof===Y1||e.$$typeof===K1)};he.typeOf=it;Pm.exports=he;var X1=Pm.exports;function Z1(e,t){t===void 0&&(t={});var n=t,r=n.getDisplayName,o=r===void 0?function($){return"ConnectAdvanced("+$+")"}:r,i=n.methodName,a=i===void 0?"connectAdvanced":i,l=n.renderCountProp,s=l===void 0?void 0:l,u=n.shouldHandleStateChanges,d=u===void 0?!0:u,c=n.storeKey,m=c===void 0?"store":c,k=n.withRef,g=k===void 0?!1:k,b=n.forwardRef,f=b===void 0?!1:b,p=n.context,h=p===void 0?Cm:p,y=wn(n,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]);Lr(s===void 0,"renderCountProp is removed. render counting is built into the latest React dev tools profiling extension"),Lr(!g,"withRef is removed. To access the wrapped instance, use a ref on the connected component");var S="To use a custom Redux store for specific components,  create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like:  <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect";Lr(m==="store","storeKey has been removed and does not do anything. "+S);var E=h;return function(O){var L=O.displayName||O.name||"Component",j=o(L),J=Te({},y,{getDisplayName:o,methodName:a,renderCountProp:s,shouldHandleStateChanges:d,storeKey:m,displayName:j,wrappedComponentName:L,WrappedComponent:O}),Y=y.pure,X=T.Component;Y&&(X=T.PureComponent);function ae(){var te,U,z,B,Q,D;return function(w,P,x,F){if(Y&&te===P&&U===w)return z;(x!==B||Q!==F)&&(B=x,Q=F,D=e(x.dispatch,F)),te=P,U=w;var I=D(w,P);return z=I,z}}function q(){var te,U,z,B;return function(D,R,w){return(R!==te||w!==U||B!==D)&&(te=R,U=w,B=D,z=A.createElement(D,Te({},R,{ref:w}))),z}}var V=function(te){ft(U,te);function U(B){var Q;return Q=te.call(this,B)||this,Lr(f?!B.wrapperProps[m]:!B[m],"Passing redux store in props has been removed and does not do anything. "+S),Q.selectDerivedProps=ae(),Q.selectChildElement=q(),Q.indirectRenderWrappedComponent=Q.indirectRenderWrappedComponent.bind(W1(Q)),Q}var z=U.prototype;return z.indirectRenderWrappedComponent=function(Q){return this.renderWrappedComponent(Q)},z.renderWrappedComponent=function(Q){Lr(Q,'Could not find "store" in the context of '+('"'+j+'". Either wrap the root component in a <Provider>, ')+"or pass a custom React context provider to <Provider> and the corresponding "+("React context consumer to "+j+" in connect options."));var D=Q.storeState,R=Q.store,w=this.props,P;f&&(w=this.props.wrapperProps,P=this.props.forwardedRef);var x=this.selectDerivedProps(D,w,R,J);return this.selectChildElement(O,x,P)},z.render=function(){var Q=this.props.context&&this.props.context.Consumer&&X1.isContextConsumer(A.createElement(this.props.context.Consumer,null))?this.props.context:E;return A.createElement(Q.Consumer,null,this.indirectRenderWrappedComponent)},U}(X);if(V.WrappedComponent=O,V.displayName=j,f){var se=A.forwardRef(function(U,z){return A.createElement(V,{wrapperProps:U,forwardedRef:z})});return se.displayName=j,se.WrappedComponent=O,zi(se,O)}return zi(V,O)}}var ex=Object.prototype.hasOwnProperty;function nf(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function El(e,t){if(nf(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!ex.call(t,n[o])||!nf(e[n[o]],t[n[o]]))return!1;return!0}function lo(e){"@babel/helpers - typeof";return lo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lo(e)}function tx(e,t){if(lo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(lo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function nx(e){var t=tx(e,"string");return lo(t)=="symbol"?t:t+""}function rx(e,t,n){return t=nx(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function of(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rf(Object(n),!0).forEach(function(r){rx(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ie(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var af=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Tl=function(){return Math.random().toString(36).substring(7).split("").join(".")},Hi={INIT:"@@redux/INIT"+Tl(),REPLACE:"@@redux/REPLACE"+Tl(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Tl()}};function ox(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Om(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ie(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ie(1));return n(Om)(e,t)}if(typeof e!="function")throw new Error(Ie(2));var o=e,i=t,a=[],l=a,s=!1;function u(){l===a&&(l=a.slice())}function d(){if(s)throw new Error(Ie(3));return i}function c(b){if(typeof b!="function")throw new Error(Ie(4));if(s)throw new Error(Ie(5));var f=!0;return u(),l.push(b),function(){if(f){if(s)throw new Error(Ie(6));f=!1,u();var h=l.indexOf(b);l.splice(h,1),a=null}}}function m(b){if(!ox(b))throw new Error(Ie(7));if(typeof b.type>"u")throw new Error(Ie(8));if(s)throw new Error(Ie(9));try{s=!0,i=o(i,b)}finally{s=!1}for(var f=a=l,p=0;p<f.length;p++){var h=f[p];h()}return b}function k(b){if(typeof b!="function")throw new Error(Ie(10));o=b,m({type:Hi.REPLACE})}function g(){var b,f=c;return b={subscribe:function(h){if(typeof h!="object"||h===null)throw new Error(Ie(11));function y(){h.next&&h.next(d())}y();var S=f(y);return{unsubscribe:S}}},b[af]=function(){return this},b}return m({type:Hi.INIT}),r={dispatch:m,subscribe:c,getState:d,replaceReducer:k},r[af]=g,r}var ix=Om;function ax(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Hi.INIT});if(typeof r>"u")throw new Error(Ie(12));if(typeof n(void 0,{type:Hi.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ie(13))})}function lx(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];typeof e[o]=="function"&&(n[o]=e[o])}var i=Object.keys(n),a;try{ax(n)}catch(l){a=l}return function(s,u){if(s===void 0&&(s={}),a)throw a;for(var d=!1,c={},m=0;m<i.length;m++){var k=i[m],g=n[k],b=s[k],f=g(b,u);if(typeof f>"u")throw u&&u.type,new Error(Ie(14));c[k]=f,d=d||f!==b}return d=d||i.length!==Object.keys(s).length,d?c:s}}function lf(e,t){return function(){return t(e.apply(this,arguments))}}function sx(e,t){if(typeof e=="function")return lf(e,t);if(typeof e!="object"||e===null)throw new Error(Ie(16));var n={};for(var r in e){var o=e[r];typeof o=="function"&&(n[r]=lf(o,t))}return n}function ux(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,o){return function(){return r(o.apply(void 0,arguments))}})}function cx(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var o=r.apply(void 0,arguments),i=function(){throw new Error(Ie(15))},a={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},l=t.map(function(s){return s(a)});return i=ux.apply(void 0,l)(o.dispatch),of(of({},o),{},{dispatch:i})}}}function fc(e){return function(n,r){var o=e(n,r);function i(){return o}return i.dependsOnOwnProps=!1,i}}function sf(e){return e.dependsOnOwnProps!==null&&e.dependsOnOwnProps!==void 0?!!e.dependsOnOwnProps:e.length!==1}function Dm(e,t){return function(r,o){o.displayName;var i=function(l,s){return i.dependsOnOwnProps?i.mapToProps(l,s):i.mapToProps(l)};return i.dependsOnOwnProps=!0,i.mapToProps=function(l,s){i.mapToProps=e,i.dependsOnOwnProps=sf(e);var u=i(l,s);return typeof u=="function"&&(i.mapToProps=u,i.dependsOnOwnProps=sf(u),u=i(l,s)),u},i}}function dx(e){return typeof e=="function"?Dm(e):void 0}function fx(e){return e?void 0:fc(function(t){return{dispatch:t}})}function px(e){return e&&typeof e=="object"?fc(function(t){return sx(e,t)}):void 0}const hx=[dx,fx,px];function mx(e){return typeof e=="function"?Dm(e):void 0}function vx(e){return e?void 0:fc(function(){return{}})}const gx=[mx,vx];function yx(e,t,n){return Te({},n,e,t)}function xx(e){return function(n,r){r.displayName;var o=r.pure,i=r.areMergedPropsEqual,a=!1,l;return function(u,d,c){var m=e(u,d,c);return a?(!o||!i(m,l))&&(l=m):(a=!0,l=m),l}}}function wx(e){return typeof e=="function"?xx(e):void 0}function bx(e){return e?void 0:function(){return yx}}const Ax=[wx,bx];function kx(e,t,n,r){return function(i,a){return n(e(i,a),t(r,a),a)}}function Sx(e,t,n,r,o){var i=o.areStatesEqual,a=o.areOwnPropsEqual,l=o.areStatePropsEqual,s=!1,u,d,c,m,k;function g(y,S){return u=y,d=S,c=e(u,d),m=t(r,d),k=n(c,m,d),s=!0,k}function b(){return c=e(u,d),t.dependsOnOwnProps&&(m=t(r,d)),k=n(c,m,d),k}function f(){return e.dependsOnOwnProps&&(c=e(u,d)),t.dependsOnOwnProps&&(m=t(r,d)),k=n(c,m,d),k}function p(){var y=e(u,d),S=!l(y,c);return c=y,S&&(k=n(c,m,d)),k}function h(y,S){var E=!a(S,d),$=!i(y,u);return u=y,d=S,E&&$?b():E?f():$?p():k}return function(S,E){return s?h(S,E):g(S,E)}}function Ex(e,t){var n=t.initMapStateToProps,r=t.initMapDispatchToProps,o=t.initMergeProps,i=wn(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),a=n(e,i),l=r(e,i),s=o(e,i),u=i.pure?Sx:kx;return u(a,l,s,e,i)}function Cl(e,t,n){for(var r=t.length-1;r>=0;r--){var o=t[r](e);if(o)return o}return function(i,a){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+a.wrappedComponentName+".")}}function Tx(e,t){return e===t}function Cx(e){var t={},n=t.connectHOC,r=n===void 0?Z1:n,o=t.mapStateToPropsFactories,i=o===void 0?gx:o,a=t.mapDispatchToPropsFactories,l=a===void 0?hx:a,s=t.mergePropsFactories,u=s===void 0?Ax:s,d=t.selectorFactory,c=d===void 0?Ex:d;return function(k,g,b,f){f===void 0&&(f={});var p=f,h=p.pure,y=h===void 0?!0:h,S=p.areStatesEqual,E=S===void 0?Tx:S,$=p.areOwnPropsEqual,O=$===void 0?El:$,L=p.areStatePropsEqual,j=L===void 0?El:L,J=p.areMergedPropsEqual,Y=J===void 0?El:J,X=wn(p,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),ae=Cl(k,i,"mapStateToProps"),q=Cl(g,l,"mapDispatchToProps"),V=Cl(b,u,"mergeProps");return r(c,Te({methodName:"connect",getDisplayName:function(te){return"Connect("+te+")"},shouldHandleStateChanges:!!k,initMapStateToProps:ae,initMapDispatchToProps:q,initMergeProps:V,pure:y,areStatesEqual:E,areOwnPropsEqual:O,areStatePropsEqual:j,areMergedPropsEqual:Y},X))}}const ko=Cx();var Im={exports:{}},me={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pc=Symbol.for("react.element"),hc=Symbol.for("react.portal"),Ma=Symbol.for("react.fragment"),Ba=Symbol.for("react.strict_mode"),za=Symbol.for("react.profiler"),Ua=Symbol.for("react.provider"),Ha=Symbol.for("react.context"),$x=Symbol.for("react.server_context"),Wa=Symbol.for("react.forward_ref"),Va=Symbol.for("react.suspense"),Qa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ka=Symbol.for("react.lazy"),Px=Symbol.for("react.offscreen"),Nm;Nm=Symbol.for("react.module.reference");function ht(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case pc:switch(e=e.type,e){case Ma:case za:case Ba:case Va:case Qa:return e;default:switch(e=e&&e.$$typeof,e){case $x:case Ha:case Wa:case Ka:case Ga:case Ua:return e;default:return t}}case hc:return t}}}me.ContextConsumer=Ha;me.ContextProvider=Ua;me.Element=pc;me.ForwardRef=Wa;me.Fragment=Ma;me.Lazy=Ka;me.Memo=Ga;me.Portal=hc;me.Profiler=za;me.StrictMode=Ba;me.Suspense=Va;me.SuspenseList=Qa;me.isAsyncMode=function(){return!1};me.isConcurrentMode=function(){return!1};me.isContextConsumer=function(e){return ht(e)===Ha};me.isContextProvider=function(e){return ht(e)===Ua};me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===pc};me.isForwardRef=function(e){return ht(e)===Wa};me.isFragment=function(e){return ht(e)===Ma};me.isLazy=function(e){return ht(e)===Ka};me.isMemo=function(e){return ht(e)===Ga};me.isPortal=function(e){return ht(e)===hc};me.isProfiler=function(e){return ht(e)===za};me.isStrictMode=function(e){return ht(e)===Ba};me.isSuspense=function(e){return ht(e)===Va};me.isSuspenseList=function(e){return ht(e)===Qa};me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ma||e===za||e===Ba||e===Va||e===Qa||e===Px||typeof e=="object"&&e!==null&&(e.$$typeof===Ka||e.$$typeof===Ga||e.$$typeof===Ua||e.$$typeof===Ha||e.$$typeof===Wa||e.$$typeof===Nm||e.getModuleId!==void 0)};me.typeOf=ht;Im.exports=me;var _m=Im.exports;function Rx(e){function t(D,R,w,P,x){for(var F=0,I=0,_=0,H=0,K,G,oe=0,ce=0,ee,de=ee=K=0,le=0,ge=0,He=0,Ae=0,Kt=w.length,mt=Kt-1,We,ne="",ke="",rl="",ol="",qt;le<Kt;){if(G=w.charCodeAt(le),le===mt&&I+H+_+F!==0&&(I!==0&&(G=I===47?10:47),H=_=F=0,Kt++,mt++),I+H+_+F===0){if(le===mt&&(0<ge&&(ne=ne.replace(m,"")),0<ne.trim().length)){switch(G){case 32:case 9:case 59:case 13:case 10:break;default:ne+=w.charAt(le)}G=59}switch(G){case 123:for(ne=ne.trim(),K=ne.charCodeAt(0),ee=1,Ae=++le;le<Kt;){switch(G=w.charCodeAt(le)){case 123:ee++;break;case 125:ee--;break;case 47:switch(G=w.charCodeAt(le+1)){case 42:case 47:e:{for(de=le+1;de<mt;++de)switch(w.charCodeAt(de)){case 47:if(G===42&&w.charCodeAt(de-1)===42&&le+2!==de){le=de+1;break e}break;case 10:if(G===47){le=de+1;break e}}le=de}}break;case 91:G++;case 40:G++;case 34:case 39:for(;le++<mt&&w.charCodeAt(le)!==G;);}if(ee===0)break;le++}switch(ee=w.substring(Ae,le),K===0&&(K=(ne=ne.replace(c,"").trim()).charCodeAt(0)),K){case 64:switch(0<ge&&(ne=ne.replace(m,"")),G=ne.charCodeAt(1),G){case 100:case 109:case 115:case 45:ge=R;break;default:ge=se}if(ee=t(R,ge,ee,G,x+1),Ae=ee.length,0<U&&(ge=n(se,ne,He),qt=l(3,ee,ge,R,ae,X,Ae,G,x,P),ne=ge.join(""),qt!==void 0&&(Ae=(ee=qt.trim()).length)===0&&(G=0,ee="")),0<Ae)switch(G){case 115:ne=ne.replace($,a);case 100:case 109:case 45:ee=ne+"{"+ee+"}";break;case 107:ne=ne.replace(h,"$1 $2"),ee=ne+"{"+ee+"}",ee=V===1||V===2&&i("@"+ee,3)?"@-webkit-"+ee+"@"+ee:"@"+ee;break;default:ee=ne+ee,P===112&&(ee=(ke+=ee,""))}else ee="";break;default:ee=t(R,n(R,ne,He),ee,P,x+1)}rl+=ee,ee=He=ge=de=K=0,ne="",G=w.charCodeAt(++le);break;case 125:case 59:if(ne=(0<ge?ne.replace(m,""):ne).trim(),1<(Ae=ne.length))switch(de===0&&(K=ne.charCodeAt(0),K===45||96<K&&123>K)&&(Ae=(ne=ne.replace(" ",":")).length),0<U&&(qt=l(1,ne,R,D,ae,X,ke.length,P,x,P))!==void 0&&(Ae=(ne=qt.trim()).length)===0&&(ne="\0\0"),K=ne.charCodeAt(0),G=ne.charCodeAt(1),K){case 0:break;case 64:if(G===105||G===99){ol+=ne+w.charAt(le);break}default:ne.charCodeAt(Ae-1)!==58&&(ke+=o(ne,K,G,ne.charCodeAt(2)))}He=ge=de=K=0,ne="",G=w.charCodeAt(++le)}}switch(G){case 13:case 10:I===47?I=0:1+K===0&&P!==107&&0<ne.length&&(ge=1,ne+="\0"),0<U*B&&l(0,ne,R,D,ae,X,ke.length,P,x,P),X=1,ae++;break;case 59:case 125:if(I+H+_+F===0){X++;break}default:switch(X++,We=w.charAt(le),G){case 9:case 32:if(H+F+I===0)switch(oe){case 44:case 58:case 9:case 32:We="";break;default:G!==32&&(We=" ")}break;case 0:We="\\0";break;case 12:We="\\f";break;case 11:We="\\v";break;case 38:H+I+F===0&&(ge=He=1,We="\f"+We);break;case 108:if(H+I+F+q===0&&0<de)switch(le-de){case 2:oe===112&&w.charCodeAt(le-3)===58&&(q=oe);case 8:ce===111&&(q=ce)}break;case 58:H+I+F===0&&(de=le);break;case 44:I+_+H+F===0&&(ge=1,We+="\r");break;case 34:case 39:I===0&&(H=H===G?0:H===0?G:H);break;case 91:H+I+_===0&&F++;break;case 93:H+I+_===0&&F--;break;case 41:H+I+F===0&&_--;break;case 40:if(H+I+F===0){if(K===0)switch(2*oe+3*ce){case 533:break;default:K=1}_++}break;case 64:I+_+H+F+de+ee===0&&(ee=1);break;case 42:case 47:if(!(0<H+F+_))switch(I){case 0:switch(2*G+3*w.charCodeAt(le+1)){case 235:I=47;break;case 220:Ae=le,I=42}break;case 42:G===47&&oe===42&&Ae+2!==le&&(w.charCodeAt(Ae+2)===33&&(ke+=w.substring(Ae,le+1)),We="",I=0)}}I===0&&(ne+=We)}ce=oe,oe=G,le++}if(Ae=ke.length,0<Ae){if(ge=R,0<U&&(qt=l(2,ke,ge,D,ae,X,Ae,P,x,P),qt!==void 0&&(ke=qt).length===0))return ol+ke+rl;if(ke=ge.join(",")+"{"+ke+"}",V*q!==0){switch(V!==2||i(ke,2)||(q=0),q){case 111:ke=ke.replace(S,":-moz-$1")+ke;break;case 112:ke=ke.replace(y,"::-webkit-input-$1")+ke.replace(y,"::-moz-$1")+ke.replace(y,":-ms-input-$1")+ke}q=0}}return ol+ke+rl}function n(D,R,w){var P=R.trim().split(f);R=P;var x=P.length,F=D.length;switch(F){case 0:case 1:var I=0;for(D=F===0?"":D[0]+" ";I<x;++I)R[I]=r(D,R[I],w).trim();break;default:var _=I=0;for(R=[];I<x;++I)for(var H=0;H<F;++H)R[_++]=r(D[H]+" ",P[I],w).trim()}return R}function r(D,R,w){var P=R.charCodeAt(0);switch(33>P&&(P=(R=R.trim()).charCodeAt(0)),P){case 38:return R.replace(p,"$1"+D.trim());case 58:return D.trim()+R.replace(p,"$1"+D.trim());default:if(0<1*w&&0<R.indexOf("\f"))return R.replace(p,(D.charCodeAt(0)===58?"":"$1")+D.trim())}return D+R}function o(D,R,w,P){var x=D+";",F=2*R+3*w+4*P;if(F===944){D=x.indexOf(":",9)+1;var I=x.substring(D,x.length-1).trim();return I=x.substring(0,D).trim()+I+";",V===1||V===2&&i(I,1)?"-webkit-"+I+I:I}if(V===0||V===2&&!i(x,1))return x;switch(F){case 1015:return x.charCodeAt(10)===97?"-webkit-"+x+x:x;case 951:return x.charCodeAt(3)===116?"-webkit-"+x+x:x;case 963:return x.charCodeAt(5)===110?"-webkit-"+x+x:x;case 1009:if(x.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+x+x;case 978:return"-webkit-"+x+"-moz-"+x+x;case 1019:case 983:return"-webkit-"+x+"-moz-"+x+"-ms-"+x+x;case 883:if(x.charCodeAt(8)===45)return"-webkit-"+x+x;if(0<x.indexOf("image-set(",11))return x.replace(Y,"$1-webkit-$2")+x;break;case 932:if(x.charCodeAt(4)===45)switch(x.charCodeAt(5)){case 103:return"-webkit-box-"+x.replace("-grow","")+"-webkit-"+x+"-ms-"+x.replace("grow","positive")+x;case 115:return"-webkit-"+x+"-ms-"+x.replace("shrink","negative")+x;case 98:return"-webkit-"+x+"-ms-"+x.replace("basis","preferred-size")+x}return"-webkit-"+x+"-ms-"+x+x;case 964:return"-webkit-"+x+"-ms-flex-"+x+x;case 1023:if(x.charCodeAt(8)!==99)break;return I=x.substring(x.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+I+"-webkit-"+x+"-ms-flex-pack"+I+x;case 1005:return g.test(x)?x.replace(k,":-webkit-")+x.replace(k,":-moz-")+x:x;case 1e3:switch(I=x.substring(13).trim(),R=I.indexOf("-")+1,I.charCodeAt(0)+I.charCodeAt(R)){case 226:I=x.replace(E,"tb");break;case 232:I=x.replace(E,"tb-rl");break;case 220:I=x.replace(E,"lr");break;default:return x}return"-webkit-"+x+"-ms-"+I+x;case 1017:if(x.indexOf("sticky",9)===-1)break;case 975:switch(R=(x=D).length-10,I=(x.charCodeAt(R)===33?x.substring(0,R):x).substring(D.indexOf(":",7)+1).trim(),F=I.charCodeAt(0)+(I.charCodeAt(7)|0)){case 203:if(111>I.charCodeAt(8))break;case 115:x=x.replace(I,"-webkit-"+I)+";"+x;break;case 207:case 102:x=x.replace(I,"-webkit-"+(102<F?"inline-":"")+"box")+";"+x.replace(I,"-webkit-"+I)+";"+x.replace(I,"-ms-"+I+"box")+";"+x}return x+";";case 938:if(x.charCodeAt(5)===45)switch(x.charCodeAt(6)){case 105:return I=x.replace("-items",""),"-webkit-"+x+"-webkit-box-"+I+"-ms-flex-"+I+x;case 115:return"-webkit-"+x+"-ms-flex-item-"+x.replace(L,"")+x;default:return"-webkit-"+x+"-ms-flex-line-pack"+x.replace("align-content","").replace(L,"")+x}break;case 973:case 989:if(x.charCodeAt(3)!==45||x.charCodeAt(4)===122)break;case 931:case 953:if(J.test(D)===!0)return(I=D.substring(D.indexOf(":")+1)).charCodeAt(0)===115?o(D.replace("stretch","fill-available"),R,w,P).replace(":fill-available",":stretch"):x.replace(I,"-webkit-"+I)+x.replace(I,"-moz-"+I.replace("fill-",""))+x;break;case 962:if(x="-webkit-"+x+(x.charCodeAt(5)===102?"-ms-"+x:"")+x,w+P===211&&x.charCodeAt(13)===105&&0<x.indexOf("transform",10))return x.substring(0,x.indexOf(";",27)+1).replace(b,"$1-webkit-$2")+x}return x}function i(D,R){var w=D.indexOf(R===1?":":"{"),P=D.substring(0,R!==3?w:10);return w=D.substring(w+1,D.length-1),z(R!==2?P:P.replace(j,"$1"),w,R)}function a(D,R){var w=o(R,R.charCodeAt(0),R.charCodeAt(1),R.charCodeAt(2));return w!==R+";"?w.replace(O," or ($1)").substring(4):"("+R+")"}function l(D,R,w,P,x,F,I,_,H,K){for(var G=0,oe=R,ce;G<U;++G)switch(ce=te[G].call(d,D,oe,w,P,x,F,I,_,H,K)){case void 0:case!1:case!0:case null:break;default:oe=ce}if(oe!==R)return oe}function s(D){switch(D){case void 0:case null:U=te.length=0;break;default:if(typeof D=="function")te[U++]=D;else if(typeof D=="object")for(var R=0,w=D.length;R<w;++R)s(D[R]);else B=!!D|0}return s}function u(D){return D=D.prefix,D!==void 0&&(z=null,D?typeof D!="function"?V=1:(V=2,z=D):V=0),u}function d(D,R){var w=D;if(33>w.charCodeAt(0)&&(w=w.trim()),Q=w,w=[Q],0<U){var P=l(-1,R,w,w,ae,X,0,0,0,0);P!==void 0&&typeof P=="string"&&(R=P)}var x=t(se,w,R,0,0);return 0<U&&(P=l(-2,x,w,w,ae,X,x.length,0,0,0),P!==void 0&&(x=P)),Q="",q=0,X=ae=1,x}var c=/^\0+/g,m=/[\0\r\f]/g,k=/: */g,g=/zoo|gra/,b=/([,: ])(transform)/g,f=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,h=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,S=/:(read-only)/g,E=/[svh]\w+-[tblr]{2}/,$=/\(\s*(.*)\s*\)/g,O=/([\s\S]*?);/g,L=/-self|flex-/g,j=/[^]*?(:[rp][el]a[\w-]+)[^]*/,J=/stretch|:\s*\w+\-(?:conte|avail)/,Y=/([^-])(image-set\()/,X=1,ae=1,q=0,V=1,se=[],te=[],U=0,z=null,B=0,Q="";return d.use=s,d.set=u,e!==void 0&&u(e),d}var Ox={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Dx(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Ix=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,uf=Dx(function(e){return Ix.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),at={};function yt(){return(yt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var cf=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},_s=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!_m.typeOf(e)},Wi=Object.freeze([]),dn=Object.freeze({});function yr(e){return typeof e=="function"}function df(e){return e.displayName||e.name||"Component"}function mc(e){return e&&typeof e.styledComponentId=="string"}var xr=typeof process<"u"&&at!==void 0&&(at.REACT_APP_SC_ATTR||at.SC_ATTR)||"data-styled",vc=typeof window<"u"&&"HTMLElement"in window,Nx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&at!==void 0&&(at.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&at.REACT_APP_SC_DISABLE_SPEEDY!==""?at.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&at.REACT_APP_SC_DISABLE_SPEEDY:at.SC_DISABLE_SPEEDY!==void 0&&at.SC_DISABLE_SPEEDY!==""&&at.SC_DISABLE_SPEEDY!=="false"&&at.SC_DISABLE_SPEEDY)),_x={};function Un(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Lx=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,a=i;n>=a;)(a<<=1)<0&&Un(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var l=i;l<a;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),u=0,d=r.length;u<d;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var a=o;a<i;a++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o,l=i;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),ui=new Map,Vi=new Map,Jr=1,Uo=function(e){if(ui.has(e))return ui.get(e);for(;Vi.has(Jr);)Jr++;var t=Jr++;return ui.set(e,t),Vi.set(t,e),t},jx=function(e){return Vi.get(e)},Fx=function(e,t){t>=Jr&&(Jr=t+1),ui.set(e,t),Vi.set(t,e)},Mx="style["+xr+'][data-styled-version="5.3.11"]',Bx=new RegExp("^"+xr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),zx=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},Ux=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var a=n[o].trim();if(a){var l=a.match(Bx);if(l){var s=0|parseInt(l[1],10),u=l[2];s!==0&&(Fx(u,s),zx(e,u,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(a)}}},Hx=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Lm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){for(var s=l.childNodes,u=s.length;u>=0;u--){var d=s[u];if(d&&d.nodeType===1&&d.hasAttribute(xr))return d}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(xr,"active"),r.setAttribute("data-styled-version","5.3.11");var a=Hx();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},Wx=function(){function e(n){var r=this.element=Lm(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,l=i.length;a<l;a++){var s=i[a];if(s.ownerNode===o)return s}Un(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Vx=function(){function e(n){var r=this.element=Lm(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Qx=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),ff=vc,Gx={isServer:!vc,useCSSOMInjection:!Nx},Qi=function(){function e(n,r,o){n===void 0&&(n=dn),r===void 0&&(r={}),this.options=yt({},Gx,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&vc&&ff&&(ff=!1,function(i){for(var a=document.querySelectorAll(Mx),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(xr)!=="active"&&(Ux(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Uo(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(yt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,a=r.target,n=o?new Qx(a):i?new Wx(a):new Vx(a),new Lx(n)));var n,r,o,i,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Uo(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(Uo(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Uo(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",a=0;a<o;a++){var l=jx(a);if(l!==void 0){var s=n.names.get(l),u=r.getGroup(a);if(s&&u&&s.size){var d=xr+".g"+a+'[id="'+l+'"]',c="";s!==void 0&&s.forEach(function(m){m.length>0&&(c+=m+",")}),i+=""+u+d+'{content:"'+c+`"}/*!sc*/
`}}}return i}(this)},e}(),Kx=/(a)(d)/gi,pf=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ls(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=pf(t%52)+n;return(pf(t%52)+n).replace(Kx,"$1-$2")}var tr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},jm=function(e){return tr(5381,e)};function Fm(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(yr(n)&&!mc(n))return!1}return!0}var qx=jm("5.3.11"),Jx=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Fm(t),this.componentId=n,this.baseHash=tr(qx,n),this.baseStyle=r,Qi.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var a=Hn(this.rules,t,n,r).join(""),l=Ls(tr(this.baseHash,a)>>>0);if(!n.hasNameForId(o,l)){var s=r(a,"."+l,void 0,o);n.insertRules(o,l,s)}i.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,d=tr(this.baseHash,r.hash),c="",m=0;m<u;m++){var k=this.rules[m];if(typeof k=="string")c+=k;else if(k){var g=Hn(k,t,n,r),b=Array.isArray(g)?g.join(""):g;d=tr(d,b+m),c+=b}}if(c){var f=Ls(d>>>0);if(!n.hasNameForId(o,f)){var p=r(c,"."+f,void 0,o);n.insertRules(o,f,p)}i.push(f)}}return i.join(" ")},e}(),Yx=/^\s*\/\/.*$/gm,Xx=[":","[",".","#"];function Zx(e){var t,n,r,o,i=dn,a=i.options,l=a===void 0?dn:a,s=i.plugins,u=s===void 0?Wi:s,d=new Rx(l),c=[],m=function(b){function f(p){if(p)try{b(p+"}")}catch{}}return function(p,h,y,S,E,$,O,L,j,J){switch(p){case 1:if(j===0&&h.charCodeAt(0)===64)return b(h+";"),"";break;case 2:if(L===0)return h+"/*|*/";break;case 3:switch(L){case 102:case 112:return b(y[0]+h),"";default:return h+(J===0?"/*|*/":"")}case-2:h.split("/*|*/}").forEach(f)}}}(function(b){c.push(b)}),k=function(b,f,p){return f===0&&Xx.indexOf(p[n.length])!==-1||p.match(o)?b:"."+t};function g(b,f,p,h){h===void 0&&(h="&");var y=b.replace(Yx,""),S=f&&p?p+" "+f+" { "+y+" }":y;return t=h,n=f,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),d(p||!f?"":f,S)}return d.use([].concat(u,[function(b,f,p){b===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,k))},m,function(b){if(b===-2){var f=c;return c=[],f}}])),g.hash=u.length?u.reduce(function(b,f){return f.name||Un(15),tr(b,f.name)},5381).toString():"",g}var Mm=A.createContext();Mm.Consumer;var Bm=A.createContext(),ew=(Bm.Consumer,new Qi),js=Zx();function zm(){return T.useContext(Mm)||ew}function Um(){return T.useContext(Bm)||js}var tw=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=js);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.toString=function(){return Un(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=js),this.name+t.hash},e}(),nw=/([A-Z])/,rw=/([A-Z])/g,ow=/^ms-/,iw=function(e){return"-"+e.toLowerCase()};function hf(e){return nw.test(e)?e.replace(rw,iw).replace(ow,"-ms-"):e}var mf=function(e){return e==null||e===!1||e===""};function Hn(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],a=0,l=e.length;a<l;a+=1)(o=Hn(e[a],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(mf(e))return"";if(mc(e))return"."+e.styledComponentId;if(yr(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return Hn(s,t,n,r)}var u;return e instanceof tw?n?(e.inject(n,r),e.getName(r)):e:_s(e)?function d(c,m){var k,g,b=[];for(var f in c)c.hasOwnProperty(f)&&!mf(c[f])&&(Array.isArray(c[f])&&c[f].isCss||yr(c[f])?b.push(hf(f)+":",c[f],";"):_s(c[f])?b.push.apply(b,d(c[f],f)):b.push(hf(f)+": "+(k=f,(g=c[f])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||k in Ox||k.startsWith("--")?String(g).trim():g+"px")+";"));return m?[m+" {"].concat(b,["}"]):b}(e):e.toString()}var vf=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function W(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return yr(e)||_s(e)?vf(Hn(cf(Wi,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:vf(Hn(cf(e,n)))}var Hm=function(e,t,n){return n===void 0&&(n=dn),e.theme!==n.theme&&e.theme||t||n.theme},aw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,lw=/(^-|-$)/g;function $l(e){return e.replace(aw,"-").replace(lw,"")}var Wm=function(e){return Ls(jm(e)>>>0)};function Ho(e){return typeof e=="string"&&!0}var Fs=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},sw=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function uw(e,t,n){var r=e[n];Fs(t)&&Fs(r)?Vm(r,t):e[n]=t}function Vm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var a=i[o];if(Fs(a))for(var l in a)sw(l)&&uw(e,a[l],l)}return e}var so=A.createContext();so.Consumer;function Qm(e){var t=T.useContext(so),n=T.useMemo(function(){return function(r,o){if(!r)return Un(14);if(yr(r)){var i=r(o);return i}return Array.isArray(r)||typeof r!="object"?Un(8):o?yt({},o,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?A.createElement(so.Provider,{value:n},e.children):null}var Pl={};function Gm(e,t,n){var r=mc(e),o=!Ho(e),i=t.attrs,a=i===void 0?Wi:i,l=t.componentId,s=l===void 0?function(h,y){var S=typeof h!="string"?"sc":$l(h);Pl[S]=(Pl[S]||0)+1;var E=S+"-"+Wm("5.3.11"+S+Pl[S]);return y?y+"-"+E:E}(t.displayName,t.parentComponentId):l,u=t.displayName,d=u===void 0?function(h){return Ho(h)?"styled."+h:"Styled("+df(h)+")"}(e):u,c=t.displayName&&t.componentId?$l(t.displayName)+"-"+t.componentId:t.componentId||s,m=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,k=t.shouldForwardProp;r&&e.shouldForwardProp&&(k=t.shouldForwardProp?function(h,y,S){return e.shouldForwardProp(h,y,S)&&t.shouldForwardProp(h,y,S)}:e.shouldForwardProp);var g,b=new Jx(n,c,r?e.componentStyle:void 0),f=b.isStatic&&a.length===0,p=function(h,y){return function(S,E,$,O){var L=S.attrs,j=S.componentStyle,J=S.defaultProps,Y=S.foldedComponentIds,X=S.shouldForwardProp,ae=S.styledComponentId,q=S.target,V=function(P,x,F){P===void 0&&(P=dn);var I=yt({},x,{theme:P}),_={};return F.forEach(function(H){var K,G,oe,ce=H;for(K in yr(ce)&&(ce=ce(I)),ce)I[K]=_[K]=K==="className"?(G=_[K],oe=ce[K],G&&oe?G+" "+oe:G||oe):ce[K]}),[I,_]}(Hm(E,T.useContext(so),J)||dn,E,L),se=V[0],te=V[1],U=function(P,x,F,I){var _=zm(),H=Um(),K=x?P.generateAndInjectStyles(dn,_,H):P.generateAndInjectStyles(F,_,H);return K}(j,O,se),z=$,B=te.$as||E.$as||te.as||E.as||q,Q=Ho(B),D=te!==E?yt({},E,{},te):E,R={};for(var w in D)w[0]!=="$"&&w!=="as"&&(w==="forwardedAs"?R.as=D[w]:(X?X(w,uf,B):!Q||uf(w))&&(R[w]=D[w]));return E.style&&te.style!==E.style&&(R.style=yt({},E.style,{},te.style)),R.className=Array.prototype.concat(Y,ae,U!==ae?U:null,E.className,te.className).filter(Boolean).join(" "),R.ref=z,T.createElement(B,R)}(g,h,y,f)};return p.displayName=d,(g=A.forwardRef(p)).attrs=m,g.componentStyle=b,g.displayName=d,g.shouldForwardProp=k,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Wi,g.styledComponentId=c,g.target=r?e.target:e,g.withComponent=function(h){var y=t.componentId,S=function($,O){if($==null)return{};var L,j,J={},Y=Object.keys($);for(j=0;j<Y.length;j++)L=Y[j],O.indexOf(L)>=0||(J[L]=$[L]);return J}(t,["componentId"]),E=y&&y+"-"+(Ho(h)?h:$l(df(h)));return Gm(h,yt({},S,{attrs:m,componentId:E}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(h){this._foldedDefaultProps=r?Vm({},e.defaultProps,h):h}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),o&&zi(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var C=function(e){return function t(n,r,o){if(o===void 0&&(o=dn),!_m.isValidElementType(r))return Un(1,String(r));var i=function(){return n(r,o,W.apply(void 0,arguments))};return i.withConfig=function(a){return t(n,r,yt({},o,{},a))},i.attrs=function(a){return t(n,r,yt({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i}(Gm,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){C[e]=C(e)});var cw=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Fm(n),Qi.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,o,i){var a=i(Hn(this.rules,r,o,i).join(""),""),l=this.componentId+n;o.insertRules(l,l,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,o,i){n>2&&Qi.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,r,o,i)},e}();function dw(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=W.apply(void 0,[e].concat(n)),i="sc-global-"+Wm(JSON.stringify(o)),a=new cw(o,i);function l(u){var d=zm(),c=Um(),m=T.useContext(so),k=T.useRef(d.allocateGSInstance(i)).current;return d.server&&s(k,u,d,m,c),T.useLayoutEffect(function(){if(!d.server)return s(k,u,d,m,c),function(){return a.removeStyles(k,d)}},[k,u,d,m,c]),null}function s(u,d,c,m,k){if(a.isStatic)a.renderStyles(u,_x,c,k);else{var g=yt({},d,{theme:Hm(d,m,l.defaultProps)});a.renderStyles(u,g,c,k)}}return A.memo(l)}var fw=`
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

`;const gc="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",yc="inset 2px 2px 3px rgba(0,0,0,0.2)",bt=()=>W`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,At=({background:e="material",color:t="materialText"}={})=>W`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:n})=>n[e]};
  color: ${({theme:n})=>n[t]};
`,So=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:n=2})=>W`
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
`,Gn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},pw=({theme:e,topLeftInner:t,bottomRightInner:n,hasShadow:r=!1,hasInsetShadow:o=!1})=>[r?gc:!1,o?yc:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,n!==null?`inset -1px -1px 0 1px ${e[n]}`:!1].filter(Boolean).join(", "),be=({invert:e=!1,style:t="button"}={})=>{const n={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return W`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[Gn[t][n.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[Gn[t][n.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[Gn[t][n.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[Gn[t][n.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:o})=>pw({theme:r,topLeftInner:Gn[t][n.topLeftInner],bottomRightInner:Gn[t][n.bottomRightInner],hasShadow:o})};
  `},wr=()=>W`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,hw=e=>Buffer.from(e).toString("base64"),mw=typeof btoa<"u"?btoa:hw,Wo=(e,t=0)=>{const n=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${mw(n)})`},xc=(e="default")=>W`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>So({mainColor:e==="flat"?t.flatLight:t.material,secondaryColor:e==="flat"?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${At()}
    ${e==="flat"?Wn():be({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:t})=>t.material};
  }
  ::-webkit-scrollbar-button {
    ${At()}
    ${e==="flat"?Wn():be({style:"window"})}
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
    ${e==="default"?be({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:t})=>Wo(t.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:t})=>Wo(t.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:t})=>Wo(t.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:t})=>Wo(t.materialText,0)};
  }
`,vw=C.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,gw=T.forwardRef(({children:e,underline:t=!0,...n},r)=>A.createElement(vw,{ref:r,underline:t,...n},e));gw.displayName="Anchor";const yw=C.header`
  ${be()};
  ${At()};

  position: ${e=>{var t;return(t=e.position)!==null&&t!==void 0?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,Km=T.forwardRef(({children:e,fixed:t=!0,position:n="fixed",...r},o)=>A.createElement(yw,{fixed:t,position:t!==!1?n:void 0,ref:o,...r},e));Km.displayName="AppBar";const Qn=()=>{};function Rn(e,t,n){return n!==null&&e>n?n:t!==null&&e<t?t:e}function xw(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function gf(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(xw(t)))}function vn(e){return typeof e=="number"?`${e}px`:e}const ww=C.div`
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
`,bw=C.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,Ms=T.forwardRef(({alt:e="",children:t,noBorder:n=!1,size:r=35,square:o=!1,src:i,...a},l)=>A.createElement(ww,{noBorder:n,ref:l,size:vn(r),square:o,src:i,...a},i?A.createElement(bw,{src:i,alt:e}):t));Ms.displayName="Avatar";const Ne={sm:"28px",md:"36px",lg:"44px"},Aw=W`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:e="md"})=>Ne[e]};
  width: ${({fullWidth:e,size:t="md",square:n})=>e?"100%":n?Ne[t]:"auto"};
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
`,qa=C.button`
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
            ${!t&&!e&&be({style:"buttonThin"})}
          }
          &:active {
            ${!t&&be({style:"buttonThinPressed"})}
          }
          ${e&&be({style:"buttonThinPressed"})}
          ${t&&bt()}
        `:W`
          ${At()};
          border: none;
          ${t&&bt()}
          ${e?So({mainColor:r.material,secondaryColor:r.borderLightest}):""}
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

            ${be(e?{style:o==="raised"?"window":"button",invert:!0}:{style:o==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!t&&be({style:o==="raised"?"window":"button",invert:!0})}
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
`,tt=T.forwardRef(({onClick:e,disabled:t=!1,children:n,type:r="button",fullWidth:o=!1,size:i="md",square:a=!1,active:l=!1,onTouchStart:s=Qn,primary:u=!1,variant:d="default",...c},m)=>A.createElement(qa,{active:l,disabled:t,$disabled:t,fullWidth:o,onClick:t?void 0:e,onTouchStart:s,primary:u,ref:m,size:i,square:a,type:r,variant:d,...c},n));tt.displayName="Button";function gn({defaultValue:e,onChange:t,onChangePropName:n="onChange",readOnly:r,value:o,valuePropName:i="value"}){const a=o!==void 0,[l,s]=T.useState(e),u=T.useCallback(d=>{a||s(d)},[a]);if(a&&typeof t!="function"&&!r){const d=`Warning: You provided a \`${i}\` prop to a component without an \`${n}\` handler.${i==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${n}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${n}\` function that updates \`${i}\`.`}`;console.warn(d)}return[a?o:l,u]}const Bs=C.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>Ne[e.size]};
  width: ${e=>e.square?Ne[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>Ne[e.size]};
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
`,kw=T.forwardRef(({size:e="lg",disabled:t,square:n,children:r,onClick:o,primary:i,...a},l)=>A.createElement(Bs,{$disabled:t,size:e,square:n,onClick:t?void 0:o,primary:i,role:"menuitem",ref:l,"aria-disabled":t,...a},r));kw.displayName="MenuListItem";const Sw=C.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${be({style:"window"})}
  ${At()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;Sw.displayName="MenuList";const It=20,Gi=C.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${It}px;
  height: ${It}px;
  opacity: 0;
  z-index: -1;
`,wc=C.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&bt()}

  ${Bs} & {
    margin: 0;
    height: 100%;
  }
  ${Bs}:hover & {
    ${({$disabled:e,theme:t})=>!e&&W`
        color: ${t.materialTextInvert};
      `};
  }
`,bc=C.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Gi}:focus ~ & {
    ${wr}
  }
  ${Gi}:not(:disabled) ~ &:active {
    ${wr}
  }
`,_t=C.div`
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
    ${e=>e.shadow&&`box-shadow:${yc};`}
  }
`,Ew=C.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${xc()}
`,qm=T.forwardRef(({children:e,shadow:t=!0,...n},r)=>A.createElement(_t,{ref:r,shadow:t,...n},A.createElement(Ew,null,e)));qm.displayName="ScrollView";const Jm=W`
  width: ${It}px;
  height: ${It}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Tw=C(_t)`
  ${Jm}
  width: ${It}px;
  height: ${It}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,Cw=C.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${Jm}
  width: ${It-4}px;
  height: ${It-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,$w=C.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Pw=C.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:t})=>So({mainColor:e?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,Rw={flat:Cw,default:Tw},zs=T.forwardRef(({checked:e,className:t="",defaultChecked:n=!1,disabled:r=!1,indeterminate:o=!1,label:i="",onChange:a=Qn,style:l={},value:s,variant:u="default",...d},c)=>{var m;const[k,g]=gn({defaultValue:n,onChange:a,readOnly:(m=d.readOnly)!==null&&m!==void 0?m:r,value:e}),b=T.useCallback(h=>{const y=h.target.checked;g(y),a(h)},[a,g]),f=Rw[u];let p=null;return o?p=Pw:k&&(p=$w),A.createElement(wc,{$disabled:r,className:t,style:l},A.createElement(Gi,{disabled:r,onChange:r?void 0:b,readOnly:r,type:"checkbox",value:s,checked:k,"data-indeterminate":o,ref:c,...d}),A.createElement(f,{$disabled:r,role:"presentation"},p&&A.createElement(p,{$disabled:r,variant:u})),i&&A.createElement(bc,null,i))});zs.displayName="Checkbox";const Ac=C.div`
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
`;Ac.displayName="Separator";const Ow=C(qa)`
  padding-left: 8px;
`,Dw=C(Ac)`
  height: 21px;
  position: relative;
  top: 0;
`,Ym=C.input`
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
`,Iw=C.div`
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
  ${Ym}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${wr}
    outline-offset: -8px;
  }
`,Nw=C.span`
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
`,Xm=T.forwardRef(({value:e,defaultValue:t,onChange:n=Qn,disabled:r=!1,variant:o="default",...i},a)=>{var l;const[s,u]=gn({defaultValue:t,onChange:n,readOnly:(l=i.readOnly)!==null&&l!==void 0?l:r,value:e}),d=c=>{const m=c.target.value;u(m),n(c)};return A.createElement(Ow,{disabled:r,as:"div",variant:o,size:"md"},A.createElement(Ym,{onChange:d,readOnly:r,disabled:r,value:s??"#008080",type:"color",ref:a,...i}),A.createElement(Iw,{$disabled:r,color:s??"#008080",role:"presentation"}),o==="default"&&A.createElement(Dw,{orientation:"vertical"}),A.createElement(Nw,{$disabled:r,variant:o}))});Xm.displayName="ColorInput";const _w=C.div`
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
      ${So({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
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
`,yf=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Lw=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function jw({digit:e=0,pixelSize:t=2,...n}){const r=Lw[Number(e)].map((o,i)=>o?`${yf[i]} active`:yf[i]);return A.createElement(_w,{pixelSize:t,...n},r.map((o,i)=>A.createElement("span",{className:o,key:i})))}const Fw=C.div`
  ${be({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Mw={sm:1,md:2,lg:3,xl:4},Bw=T.forwardRef(({value:e=0,minLength:t=3,size:n="md",...r},o)=>{const i=T.useMemo(()=>e.toString().padStart(t,"0").split(""),[t,e]);return A.createElement(Fw,{ref:o,...r},i.map((a,l)=>A.createElement(jw,{digit:a,pixelSize:Mw[n],key:l})))});Bw.displayName="Counter";const Zm=W`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${Ne.md};
`,zw=C(_t).attrs({"data-testid":"variant-default"})`
  ${Zm}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,Uw=C.div.attrs({"data-testid":"variant-flat"})`
  ${Wn()}
  ${Zm}
  position: relative;
`,e0=W`
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
`,Hw=C.input`
  ${e0}
  padding: 0 8px;
`,Ww=C.textarea`
  ${e0}
  padding: 8px;
  resize: none;
  ${({variant:e})=>xc(e)}
`,Eo=T.forwardRef(({className:e,disabled:t=!1,fullWidth:n,onChange:r=Qn,shadow:o=!0,style:i,variant:a="default",...l},s)=>{const u=a==="flat"?Uw:zw,d=T.useMemo(()=>{var c;return l.multiline?A.createElement(Ww,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,variant:a,...l}):A.createElement(Hw,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,type:(c=l.type)!==null&&c!==void 0?c:"text",variant:a,...l})},[t,r,l,s,a]);return A.createElement(u,{className:e,fullWidth:n,$disabled:t,shadow:o,style:i},d)});Eo.displayName="TextInput";const Vw=C.div`
  display: inline-flex;
  align-items: center;
`,Us=C(tt)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?W`
          height: calc(50% - 1px);
        `:W`
          height: 50%;
        `}
`,Qw=C.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>e==="flat"?W`
          height: calc(${Ne.md} - 4px);
        `:W`
          height: ${Ne.md};
          margin-left: 2px;
        `}
`,xf=C.span`
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
  ${Us}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?W`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:W`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,t0=T.forwardRef(({className:e,defaultValue:t,disabled:n=!1,max:r,min:o,onChange:i,readOnly:a,step:l=1,style:s,value:u,variant:d="default",width:c,...m},k)=>{const[g,b]=gn({defaultValue:t,onChange:i,readOnly:a,value:u}),f=T.useCallback($=>{const O=parseFloat($.target.value);b(O)},[b]),p=T.useCallback($=>{const O=Rn(parseFloat(((g??0)+$).toFixed(2)),o??null,r??null);b(O),i==null||i(O)},[r,o,i,b,g]),h=T.useCallback(()=>{g!==void 0&&(i==null||i(g))},[i,g]),y=T.useCallback(()=>{p(l)},[p,l]),S=T.useCallback(()=>{p(-l)},[p,l]),E=d==="flat"?"flat":"raised";return A.createElement(Vw,{className:e,style:{...s,width:c!==void 0?vn(c):"auto"},...m},A.createElement(Eo,{value:g,variant:d,onChange:f,disabled:n,type:"number",readOnly:a,ref:k,fullWidth:!0,onBlur:h}),A.createElement(Qw,{variant:d},A.createElement(Us,{"data-testid":"increment",variant:E,disabled:n||a,onClick:y},A.createElement(xf,{invert:!0})),A.createElement(Us,{"data-testid":"decrement",variant:E,disabled:n||a,onClick:S},A.createElement(xf,null))))});t0.displayName="NumberInput";function Gw(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<10;n+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const n0=e=>T.useMemo(()=>Gw(),[e]),r0=W`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,o0=W`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,kc=C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,Kw=C.div`
  ${r0}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${kc}:focus & {
    ${o0}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,i0=W`
  height: ${Ne.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?bt():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,qw=C(_t)`
  ${i0}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,Jw=C.div`
  ${Wn()}
  ${i0}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,Yw=C.select`
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
  ${r0}
  cursor: pointer;
  &:disabled {
    ${bt()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,a0=C(qa).attrs(()=>({"aria-hidden":"true"}))`
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
`,Xw=C.span`
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
  ${a0}:active & {
    margin-top: 2px;
  }
`,Zw=C.ul`
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
  box-shadow: ${gc};
  ${({variant:e="default"})=>e==="flat"?W`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:W`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:e="default"})=>xc(e)}
`,eb=C.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${Ne.md} - 4px);
  line-height: calc(${Ne.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:e})=>e?o0:""}
  user-select: none;
`,tb=[],l0=({className:e,defaultValue:t,disabled:n,native:r,onChange:o,options:i=tb,readOnly:a,style:l,value:s,variant:u,width:d})=>{var c;const m=T.useMemo(()=>i.filter(Boolean),[i]),[k,g]=gn({defaultValue:t??((c=m==null?void 0:m[0])===null||c===void 0?void 0:c.value),onChange:o,readOnly:a,value:s}),b=!(n||a),f=T.useMemo(()=>({className:e,style:{...l,width:d}}),[e,l,d]),p=T.useMemo(()=>A.createElement(a0,{as:"div","data-testid":"select-button",$disabled:n,native:r,tabIndex:-1,variant:u==="flat"?"flat":"raised"},A.createElement(Xw,{"data-testid":"select-icon",$disabled:n})),[n,r,u]),h=T.useMemo(()=>u==="flat"?Jw:qw,[u]);return T.useMemo(()=>({isEnabled:b,options:m,value:k,setValue:g,wrapperProps:f,DropdownButton:p,Wrapper:h}),[p,h,b,m,g,k,f])},nb={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},rb=1e3,ob=({onBlur:e,onChange:t,onClose:n,onFocus:r,onKeyDown:o,onMouseDown:i,onOpen:a,open:l,options:s,readOnly:u,value:d,selectRef:c,setValue:m,wrapperRef:k})=>{const g=T.useRef(null),b=T.useRef([]),f=T.useRef(0),p=T.useRef(0),h=T.useRef(),y=T.useRef("search"),S=T.useRef(""),E=T.useRef(),[$,O]=gn({defaultValue:!1,onChange:a,onChangePropName:"onOpen",readOnly:u,value:l,valuePropName:"open"}),L=T.useMemo(()=>{const _=s.findIndex(H=>H.value===d);return f.current=Rn(_,0,null),s[_]},[s,d]),[j,J]=T.useState(s[0]),Y=T.useCallback(_=>{const H=g.current,K=b.current[_];if(!K||!H){h.current=_;return}h.current=void 0;const G=H.clientHeight,oe=H.scrollTop,ce=H.scrollTop+G,ee=K.offsetTop,de=K.offsetHeight,le=K.offsetTop+K.offsetHeight;ee<oe&&H.scrollTo(0,ee),le>ce&&H.scrollTo(0,ee-G+de),K.focus({preventScroll:!0})},[g]),X=T.useCallback((_,{scroll:H}={})=>{var K;const G=s.length-1;let oe;switch(_){case"first":{oe=0;break}case"last":{oe=G;break}case"next":{oe=Rn(p.current+1,0,G);break}case"previous":{oe=Rn(p.current-1,0,G);break}case"selected":{oe=Rn((K=f.current)!==null&&K!==void 0?K:0,0,G);break}default:oe=_}p.current=oe,J(s[oe]),H&&Y(oe)},[p,s,Y]),ae=T.useCallback(({fromEvent:_})=>{O(!0),X("selected",{scroll:!0}),a==null||a({fromEvent:_})},[X,a,O]),q=T.useCallback(()=>{y.current="search",S.current="",clearTimeout(E.current)},[]),V=T.useCallback(({focusSelect:_,fromEvent:H})=>{var K;n==null||n({fromEvent:H}),O(!1),J(s[0]),q(),h.current=void 0,_&&((K=c.current)===null||K===void 0||K.focus())},[q,n,s,c,O]),se=T.useCallback(({fromEvent:_})=>{$?V({focusSelect:!1,fromEvent:_}):ae({fromEvent:_})},[V,ae,$]),te=T.useCallback((_,{fromEvent:H})=>{f.current!==_&&(f.current=_,m(s[_].value),t==null||t(s[_],{fromEvent:H}))},[t,s,m]),U=T.useCallback(({focusSelect:_,fromEvent:H})=>{te(p.current,{fromEvent:H}),V({focusSelect:_,fromEvent:H})},[V,te]),z=T.useCallback((_,{fromEvent:H,select:K})=>{var G;switch(y.current==="cycleFirstLetter"&&_!==S.current&&(y.current="search"),_===S.current?y.current="cycleFirstLetter":S.current+=_,y.current){case"search":{let oe=s.findIndex(ce=>{var ee;return((ee=ce.label)===null||ee===void 0?void 0:ee.toLocaleUpperCase().indexOf(S.current))===0});oe<0&&(oe=s.findIndex(ce=>{var ee;return((ee=ce.label)===null||ee===void 0?void 0:ee.toLocaleUpperCase().indexOf(_))===0}),S.current=_),oe>=0&&(K?te(oe,{fromEvent:H}):X(oe,{scroll:!0}));break}case"cycleFirstLetter":{const oe=K?(G=f.current)!==null&&G!==void 0?G:-1:p.current;let ce=s.findIndex((ee,de)=>{var le;return de>oe&&((le=ee.label)===null||le===void 0?void 0:le.toLocaleUpperCase().indexOf(_))===0});ce<0&&(ce=s.findIndex(ee=>{var de;return((de=ee.label)===null||de===void 0?void 0:de.toLocaleUpperCase().indexOf(_))===0})),ce>=0&&(K?te(ce,{fromEvent:H}):X(ce,{scroll:!0}));break}}clearTimeout(E.current),E.current=setTimeout(()=>{y.current==="search"&&(S.current="")},rb)},[X,s,te]),B=T.useCallback(_=>{var H;_.button===0&&(_.preventDefault(),(H=c.current)===null||H===void 0||H.focus(),se({fromEvent:_}),i==null||i(_))},[i,c,se]),Q=T.useCallback(_=>{U({focusSelect:!0,fromEvent:_})},[U]),D=T.useCallback(_=>{const{altKey:H,code:K,ctrlKey:G,metaKey:oe,shiftKey:ce}=_,{ARROW_DOWN:ee,ARROW_UP:de,END:le,ENTER:ge,ESC:He,HOME:Ae,SPACE:Kt,TAB:mt}=nb,We=H||G||oe||ce;if(!(K===mt&&(H||G||oe)||K!==mt&&We))switch(K){case ee:{if(_.preventDefault(),!$){ae({fromEvent:_});return}X("next",{scroll:!0});break}case de:{if(_.preventDefault(),!$){ae({fromEvent:_});return}X("previous",{scroll:!0});break}case le:{if(_.preventDefault(),!$){ae({fromEvent:_});return}X("last",{scroll:!0});break}case ge:{if(!$)return;_.preventDefault(),U({focusSelect:!0,fromEvent:_});break}case He:{if(!$)return;_.preventDefault(),V({focusSelect:!0,fromEvent:_});break}case Ae:{if(_.preventDefault(),!$){ae({fromEvent:_});return}X("first",{scroll:!0});break}case Kt:{_.preventDefault(),$?U({focusSelect:!0,fromEvent:_}):ae({fromEvent:_});break}case mt:{if(!$)return;ce||_.preventDefault(),U({focusSelect:!ce,fromEvent:_});break}default:!We&&K.match(/^Key/)&&(_.preventDefault(),_.stopPropagation(),z(K.replace(/^Key/,""),{select:!$,fromEvent:_}))}},[X,V,$,ae,z,U]),R=T.useCallback(_=>{D(_),o==null||o(_)},[D,o]),w=T.useCallback(_=>{X(_)},[X]),P=T.useCallback(_=>{$||(q(),e==null||e(_))},[q,e,$]),x=T.useCallback(_=>{q(),r==null||r(_)},[q,r]),F=T.useCallback(_=>{g.current=_,h.current!==void 0&&Y(h.current)},[Y]),I=T.useCallback((_,H)=>{b.current[H]=_,h.current===H&&Y(h.current)},[Y]);return T.useEffect(()=>{if(!$)return()=>{};const _=H=>{var K;const G=H.target;!((K=k.current)===null||K===void 0)&&K.contains(G)||(H.preventDefault(),V({focusSelect:!1,fromEvent:H}))};return document.addEventListener("mousedown",_),()=>{document.removeEventListener("mousedown",_)}},[V,$,k]),T.useMemo(()=>({activeOption:j,handleActivateOptionIndex:w,handleBlur:P,handleButtonKeyDown:R,handleDropdownKeyDown:D,handleFocus:x,handleMouseDown:B,handleOptionClick:Q,handleSetDropdownRef:F,handleSetOptionRef:I,open:$,selectedOption:L}),[j,w,P,R,x,D,B,Q,F,I,$,L])},ib=T.forwardRef(({className:e,defaultValue:t,disabled:n,onChange:r,options:o,readOnly:i,style:a,value:l,variant:s,width:u,...d},c)=>{const{isEnabled:m,options:k,setValue:g,value:b,DropdownButton:f,Wrapper:p}=l0({defaultValue:t,disabled:n,native:!0,onChange:r,options:o,readOnly:i,value:l,variant:s}),h=T.useCallback(y=>{const S=k.find(E=>E.value===y.target.value);S&&(g(S.value),r==null||r(S,{fromEvent:y}))},[r,k,g]);return A.createElement(p,{className:e,style:{...a,width:u}},A.createElement(kc,null,A.createElement(Yw,{...d,disabled:n,onChange:m?h:Qn,ref:c,value:b},k.map((y,S)=>{var E;return A.createElement("option",{key:`${y.value}-${S}`,value:y.value},(E=y.label)!==null&&E!==void 0?E:y.value)})),f))});ib.displayName="SelectNative";function ab({activateOptionIndex:e,active:t,index:n,onClick:r,option:o,selected:i,setRef:a}){const l=T.useCallback(()=>{e(n)},[e,n]),s=T.useCallback(d=>{a(d,n)},[n,a]),u=n0();return A.createElement(eb,{active:t,"aria-selected":i?"true":void 0,"data-value":o.value,id:u,onClick:r,onMouseEnter:l,ref:s,role:"option",tabIndex:0},o.label)}function lb({"aria-label":e,"aria-labelledby":t,className:n,defaultValue:r,disabled:o=!1,formatDisplay:i,inputProps:a,labelId:l,menuMaxHeight:s,name:u,onBlur:d,onChange:c,onClose:m,onFocus:k,onKeyDown:g,onMouseDown:b,onOpen:f,open:p,options:h,readOnly:y,shadow:S=!0,style:E,variant:$="default",value:O,width:L="auto",...j},J){const{isEnabled:Y,options:X,setValue:ae,value:q,wrapperProps:V,DropdownButton:se,Wrapper:te}=l0({className:n,defaultValue:r,disabled:o,native:!1,onChange:c,options:h,style:E,readOnly:y,value:O,variant:$,width:L}),U=T.useRef(null),z=T.useRef(null),B=T.useRef(null),{activeOption:Q,handleActivateOptionIndex:D,handleBlur:R,handleButtonKeyDown:w,handleDropdownKeyDown:P,handleFocus:x,handleMouseDown:F,handleOptionClick:I,handleSetDropdownRef:_,handleSetOptionRef:H,open:K,selectedOption:G}=ob({onBlur:d,onChange:c,onClose:m,onFocus:k,onKeyDown:g,onMouseDown:b,onOpen:f,open:p,options:X,value:q,selectRef:z,setValue:ae,wrapperRef:B});T.useImperativeHandle(J,()=>({focus:ge=>{var He;(He=z.current)===null||He===void 0||He.focus(ge)},node:U.current,value:String(q)}),[q]);const oe=T.useMemo(()=>G?typeof i=="function"?i(G):G.label:"",[i,G]),ce=Y?1:void 0,ee=T.useMemo(()=>s?{overflow:"auto",maxHeight:s}:void 0,[s]),de=n0(),le=T.useMemo(()=>X.map((ge,He)=>{const Ae=`${q}-${He}`,Kt=ge===Q,mt=ge===G;return A.createElement(ab,{activateOptionIndex:D,active:Kt,index:He,key:Ae,onClick:I,option:ge,selected:mt,setRef:H})}),[Q,D,I,H,X,G,q]);return A.createElement(te,{...V,$disabled:o,ref:B,shadow:S,style:{...E,width:L}},A.createElement("input",{name:u,ref:U,type:"hidden",value:String(q),...a}),A.createElement(kc,{"aria-disabled":o,"aria-expanded":K,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t??l,"aria-owns":Y&&K?de:void 0,onBlur:R,onFocus:x,onKeyDown:w,onMouseDown:Y?F:b,ref:z,role:"button",tabIndex:ce,...j},A.createElement(Kw,null,oe),se),Y&&K&&A.createElement(Zw,{id:de,onKeyDown:P,ref:_,role:"listbox",style:ee,tabIndex:0,variant:$},le))}const Ja=T.forwardRef(lb);Ja.displayName="Select";const sb=C.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,Qt=T.forwardRef(function({children:t,noPadding:n=!1,...r},o){return A.createElement(sb,{noPadding:n,ref:o,...r},t)});Qt.displayName="Toolbar";const ub=C.div`
  padding: 16px;
`,Tr=T.forwardRef(function({children:t,...n},r){return A.createElement(ub,{ref:r,...n},t)});Tr.displayName="WindowContent";const cb=C.div`
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

  ${qa} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,Sc=T.forwardRef(function({active:t=!0,children:n,...r},o){return A.createElement(cb,{active:t,ref:o,...r},n)});Sc.displayName="WindowHeader";const db=C.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${be({style:"window"})}
  ${At()}
`,fb=C.span`
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
`,Ya=T.forwardRef(({children:e,resizable:t=!1,resizeRef:n,shadow:r=!0,...o},i)=>A.createElement(db,{ref:i,shadow:r,...o},e,t&&A.createElement(fb,{"data-testid":"resizeHandle",ref:n})));Ya.displayName="Window";const pb=C(qm)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,hb=C.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,mb=C.div`
  display: flex;
  flex-wrap: wrap;
`,Ft=C.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,vb=C.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,gb=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function yb(e,t){return new Date(e,t+1,0).getDate()}function xb(e,t,n){return new Date(e,t,n).getDay()}function wb(e){const t=new Date(Date.parse(e)),n=t.getUTCDate(),r=t.getUTCMonth(),o=t.getUTCFullYear();return{day:n,month:r,year:o}}const bb=T.forwardRef(({className:e,date:t=new Date().toISOString(),onAccept:n,onCancel:r,shadow:o=!0},i)=>{const[a,l]=T.useState(()=>wb(t)),{year:s,month:u,day:d}=a,c=T.useCallback(({value:f})=>{l(p=>({...p,month:f}))},[]),m=T.useCallback(f=>{l(p=>({...p,year:f}))},[]),k=T.useCallback(f=>{l(p=>({...p,day:f}))},[]),g=T.useCallback(()=>{const f=[a.year,a.month+1,a.day].map(p=>String(p).padStart(2,"0")).join("-");n==null||n(f)},[a.day,a.month,a.year,n]),b=T.useMemo(()=>{const f=Array.from({length:42}),p=xb(s,u,1);let h=d;const y=yb(s,u);return h=h<y?h:y,f.forEach((S,E)=>{if(E>=p&&E<y+p){const $=E-p+1;f[E]=A.createElement(Ft,{key:E,onClick:()=>{k($)}},A.createElement(vb,{active:$===h},$))}else f[E]=A.createElement(Ft,{key:E})}),f},[d,k,u,s]);return A.createElement(Ya,{className:e,ref:i,shadow:o,style:{margin:20}},A.createElement(Sc,null,A.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),A.createElement(Tr,null,A.createElement(Qt,{noPadding:!0,style:{justifyContent:"space-between"}},A.createElement(Ja,{options:gb,value:u,onChange:c,width:128,menuMaxHeight:200}),A.createElement(t0,{value:s,onChange:m,width:100})),A.createElement(pb,null,A.createElement(hb,null,A.createElement(Ft,null,"S"),A.createElement(Ft,null,"M"),A.createElement(Ft,null,"T"),A.createElement(Ft,null,"W"),A.createElement(Ft,null,"T"),A.createElement(Ft,null,"F"),A.createElement(Ft,null,"S")),A.createElement(mb,null,b)),A.createElement(Qt,{noPadding:!0,style:{justifyContent:"space-between"}},A.createElement(tt,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),A.createElement(tt,{fullWidth:!0,onClick:n?g:void 0,disabled:!n},"OK"))))});bb.displayName="DatePicker";const Ab=e=>{switch(e){case"status":case"well":return W`
        ${be({style:"status"})}
      `;case"window":case"outside":return W`
        ${be({style:"window"})}
      `;case"field":return W`
        ${be({style:"field"})}
      `;default:return W`
        ${be()}
      `}},kb=C.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>Ab(e)}
  ${({variant:e})=>At(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Sb=T.forwardRef(({children:e,shadow:t=!1,variant:n="window",...r},o)=>A.createElement(kb,{ref:o,shadow:t,variant:n,...r},e));Sb.displayName="Frame";const Eb=C.fieldset`
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
`,Tb=C.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,On=T.forwardRef(({label:e,disabled:t=!1,variant:n="default",children:r,...o},i)=>A.createElement(Eb,{"aria-disabled":t,$disabled:t,variant:n,ref:i,...o},e&&A.createElement(Tb,{variant:n},e),r));On.displayName="GroupBox";const Cb=C.div`
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
`;Cb.displayName="Handle";const $b="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Pb=C.div`
  display: inline-block;
  height: ${({size:e})=>vn(e)};
  width: ${({size:e})=>vn(e)};
`,Rb=C.span`
  display: block;
  background: ${$b};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Ob=T.forwardRef(({size:e=30,...t},n)=>A.createElement(Pb,{size:e,ref:n,...t},A.createElement(Rb,null)));Ob.displayName="Hourglass";const Db=C.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Ib=C.div`
  position: relative;
`,Nb=C.div`
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
`,_b=C(_t).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Lb=C.div`
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
`,s0=T.forwardRef(({backgroundStyles:e,children:t,...n},r)=>A.createElement(Db,{ref:r,...n},A.createElement(Ib,null,A.createElement(Nb,null,A.createElement(_b,{style:e},t)),A.createElement(Lb,null))));s0.displayName="Monitor";const jb=C.div`
  display: inline-block;
  height: ${Ne.md};
  width: 100%;
`,Fb=C(_t)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,u0=W`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Mb=C.div`
  position: relative;
  top: 4px;
  ${u0}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,Bb=C.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${u0}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,zb=C.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,c0=17,Ub=C.span`
  display: inline-block;
  width: ${c0}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,Hb=T.forwardRef(({hideValue:e=!1,shadow:t=!0,value:n,variant:r="default",...o},i)=>{const a=e?null:`${n}%`,l=T.useRef(null),[s,u]=T.useState([]),d=T.useCallback(()=>{if(!l.current||n===void 0)return;const c=l.current.getBoundingClientRect().width,m=Math.round(n/100*c/c0);u(Array.from({length:m}))},[n]);return T.useEffect(()=>(d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)),[d]),A.createElement(jb,{"aria-valuenow":n!==void 0?Math.round(n):void 0,ref:i,role:"progressbar",variant:r,...o},A.createElement(Fb,{variant:r,shadow:t},r==="default"?A.createElement(A.Fragment,null,A.createElement(Mb,{"data-testid":"defaultProgress1"},a),A.createElement(Bb,{"data-testid":"defaultProgress2",value:n},a)):A.createElement(zb,{ref:l,"data-testid":"tileProgress"},s.map((c,m)=>A.createElement(Ub,{key:m})))))});Hb.displayName="ProgressBar";const d0=W`
  width: ${It}px;
  height: ${It}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Wb=C(_t)`
  ${d0}
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
`,Vb=C.div`
  ${Wn()}
  ${d0}
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
`,Qb=C.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Gb={flat:Vb,default:Wb},vt=T.forwardRef(({checked:e,className:t="",disabled:n=!1,label:r="",onChange:o,style:i={},variant:a="default",...l},s)=>{const u=Gb[a];return A.createElement(wc,{$disabled:n,className:t,style:i},A.createElement(u,{$disabled:n,role:"presentation"},e&&A.createElement(Qb,{$disabled:n,variant:a})),A.createElement(Gi,{disabled:n,onChange:n?void 0:o,readOnly:n,type:"radio",checked:e,ref:s,...l}),r&&A.createElement(bc,null,r))});vt.displayName="Radio";const Kb=typeof window<"u"?T.useLayoutEffect:T.useEffect;function An(e){const t=T.useRef(e);return Kb(()=>{t.current=e}),T.useCallback((...n)=>(0,t.current)(...n),[])}function wf(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function bf(e,t){return T.useMemo(()=>e==null&&t==null?null:n=>{wf(e,n),wf(t,n)},[e,t])}let Xa=!0,Hs=!1,Af;const qb={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Jb(e){if("type"in e){const{type:t,tagName:n}=e;if(n==="INPUT"&&qb[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function Yb(e){e.metaKey||e.altKey||e.ctrlKey||(Xa=!0)}function Rl(){Xa=!1}function Xb(){this.visibilityState==="hidden"&&Hs&&(Xa=!0)}function Zb(e){e.addEventListener("keydown",Yb,!0),e.addEventListener("mousedown",Rl,!0),e.addEventListener("pointerdown",Rl,!0),e.addEventListener("touchstart",Rl,!0),e.addEventListener("visibilitychange",Xb,!0)}function eA(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Xa||Jb(t)}function tA(){Hs=!0,window.clearTimeout(Af),Af=window.setTimeout(()=>{Hs=!1},100)}function nA(){const e=T.useCallback(t=>{const n=lm.findDOMNode(t);n!=null&&Zb(n.ownerDocument)},[]);return{isFocusVisible:eA,onBlurVisible:tA,ref:e}}function rA(e,t,n){return(n-t)*e+t}function Vo(e,t){if(t!==void 0&&"changedTouches"in e){for(let n=0;n<e.changedTouches.length;n+=1){const r=e.changedTouches[n];if(r.identifier===t)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function Qo(e){return e&&e.ownerDocument||document}function oA(e,t){var n;const{index:r}=(n=e.reduce((o,i,a)=>{const l=Math.abs(t-i);return o===null||l<o.distance||l===o.distance?{distance:l,index:a}:o},null))!==null&&n!==void 0?n:{};return r??-1}const iA=C.div`
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
`,f0=()=>W`
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
`,aA=C(_t)`
  ${f0()}
`,lA=C(_t)`
  ${f0()}

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
`,sA=C.span`
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
          ${be()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&So({mainColor:t.material,secondaryColor:t.borderLightest})}
`,nr=6,uA=C.span`
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
`,cA=C.div`
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
`,Ws=T.forwardRef(({defaultValue:e,disabled:t=!1,marks:n=!1,max:r=100,min:o=0,name:i,onChange:a,onChangeCommitted:l,onMouseDown:s,orientation:u="horizontal",size:d="100%",step:c=1,value:m,variant:k="default",...g},b)=>{const f=k==="flat"?lA:aA,p=u==="vertical",[h=o,y]=gn({defaultValue:e,onChange:a??l,value:m}),{isFocusVisible:S,onBlurVisible:E,ref:$}=nA(),[O,L]=T.useState(!1),j=T.useRef(),J=T.useRef(null),Y=bf($,j),X=bf(b,Y),ae=An(R=>{S(R)&&L(!0)}),q=An(()=>{O!==!1&&(L(!1),E())}),V=T.useRef(),se=T.useMemo(()=>n===!0&&Number.isFinite(c)?[...Array(Math.round((r-o)/c)+1)].map((R,w)=>({label:void 0,value:o+c*w})):Array.isArray(n)?n:[],[n,r,o,c]),te=An(R=>{const w=(r-o)/10,P=se.map(I=>I.value),x=P.indexOf(h);let F=0;switch(R.key){case"Home":F=o;break;case"End":F=r;break;case"PageUp":c&&(F=h+w);break;case"PageDown":c&&(F=h-w);break;case"ArrowRight":case"ArrowUp":c?F=h+c:F=P[x+1]||P[P.length-1];break;case"ArrowLeft":case"ArrowDown":c?F=h-c:F=P[x-1]||P[0];break;default:return}R.preventDefault(),c&&(F=gf(F,c,o)),F=Rn(F,o,r),y(F),L(!0),a==null||a(F),l==null||l(F)}),U=T.useCallback(R=>{if(!j.current)return 0;const w=j.current.getBoundingClientRect();let P;p?P=(w.bottom-R.y)/w.height:P=(R.x-w.left)/w.width;let x;if(x=rA(P,o,r),c)x=gf(x,c,o);else{const F=se.map(_=>_.value),I=oA(F,x);x=F[I]}return x=Rn(x,o,r),x},[se,r,o,c,p]),z=An(R=>{var w;const P=Vo(R,V.current);if(!P)return;const x=U(P);(w=J.current)===null||w===void 0||w.focus(),y(x),L(!0),a==null||a(x)}),B=An(R=>{const w=Vo(R,V.current);if(!w)return;const P=U(w);l==null||l(P),V.current=void 0;const x=Qo(j.current);x.removeEventListener("mousemove",z),x.removeEventListener("mouseup",B),x.removeEventListener("touchmove",z),x.removeEventListener("touchend",B)}),Q=An(R=>{var w;s==null||s(R),R.preventDefault(),(w=J.current)===null||w===void 0||w.focus(),L(!0);const P=Vo(R,V.current);if(P){const F=U(P);y(F),a==null||a(F)}const x=Qo(j.current);x.addEventListener("mousemove",z),x.addEventListener("mouseup",B)}),D=An(R=>{var w;R.preventDefault();const P=R.changedTouches[0];P!=null&&(V.current=P.identifier),(w=J.current)===null||w===void 0||w.focus(),L(!0);const x=Vo(R,V.current);if(x){const I=U(x);y(I),a==null||a(I)}const F=Qo(j.current);F.addEventListener("touchmove",z),F.addEventListener("touchend",B)});return T.useEffect(()=>{const{current:R}=j;R==null||R.addEventListener("touchstart",D);const w=Qo(R);return()=>{R==null||R.removeEventListener("touchstart",D),w.removeEventListener("mousemove",z),w.removeEventListener("mouseup",B),w.removeEventListener("touchmove",z),w.removeEventListener("touchend",B)}},[B,z,D]),A.createElement(iA,{$disabled:t,hasMarks:!!se.length,isFocused:O,onMouseDown:Q,orientation:u,ref:X,size:vn(d),...g},A.createElement("input",{disabled:t,name:i,type:"hidden",value:h??0}),se&&se.map(R=>A.createElement(uA,{$disabled:t,"data-testid":"tick",key:R.value/(r-o)*100,orientation:u,style:{[p?"bottom":"left"]:`${(R.value-o)/(r-o)*100}%`}},R.label&&A.createElement(cA,{"aria-hidden":!0,"data-testid":"mark",orientation:u},R.label))),A.createElement(f,{orientation:u,variant:k}),A.createElement(sA,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":u,"aria-valuemax":r,"aria-valuemin":o,"aria-valuenow":h,onBlur:q,onFocus:ae,onKeyDown:te,orientation:u,ref:J,role:"slider",style:{[p?"bottom":"left"]:`${(p?-100:0)+100*(h-o)/(r-o)}%`},tabIndex:t?void 0:0,variant:k}))});Ws.displayName="Slider";const dA=C.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${yc};
  overflow-y: auto;
`,Ec=T.forwardRef(function({children:t,...n},r){return A.createElement(dA,{ref:r,...n},t)});Ec.displayName="TableBody";const fA=C.td`
  padding: 0 8px;
`,St=T.forwardRef(function({children:t,...n},r){return A.createElement(fA,{ref:r,...n},t)});St.displayName="TableDataCell";const pA=C.thead`
  display: table-header-group;
`,Tc=T.forwardRef(function({children:t,...n},r){return A.createElement(pA,{ref:r,...n},t)});Tc.displayName="TableHead";const hA=C.th`
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
    ${be()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:e})=>!e&&W`
      &:active {
        &:before {
          ${be({invert:!0,style:"window"})}
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
`,ur=T.forwardRef(function({disabled:t=!1,children:n,onClick:r,onTouchStart:o=Qn,sort:i,...a},l){const s=i==="asc"?"ascending":i==="desc"?"descending":void 0;return A.createElement(hA,{$disabled:t,"aria-disabled":t,"aria-sort":s,onClick:t?void 0:r,onTouchStart:t?void 0:o,ref:l,...a},A.createElement("div",null,n))});ur.displayName="TableHeadCell";const mA=C.tr`
  color: inherit;
  display: table-row;
  height: calc(${Ne.md} - 2px);
  line-height: calc(${Ne.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:e})=>e.canvasText};
  &:hover {
    background: ${({theme:e})=>e.hoverBackground};
    color: ${({theme:e})=>e.canvasTextInvert};
  }
`,cr=T.forwardRef(function({children:t,...n},r){return A.createElement(mA,{ref:r,...n},t)});cr.displayName="TableRow";const vA=C.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,gA=C(_t)`
  &:before {
    box-shadow: none;
  }
`,p0=T.forwardRef(({children:e,...t},n)=>A.createElement(gA,null,A.createElement(vA,{ref:n,...t},e)));p0.displayName="Table";const yA=C.button`
  ${At()}
  ${be()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${Ne.md};
  line-height: ${Ne.md};
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
    height: calc(${Ne.md} + 4px);
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
`,ci=T.forwardRef(({value:e,onClick:t,selected:n=!1,children:r,...o},i)=>A.createElement(yA,{"aria-selected":n,selected:n,onClick:a=>t==null?void 0:t(e,a),ref:i,role:"tab",...o},r));ci.displayName="Tab";const xA=C.div`
  ${At()}
  ${be()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,h0=T.forwardRef(({children:e,...t},n)=>A.createElement(xA,{ref:n,...t},e));h0.displayName="TabBody";const wA=C.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,bA=C.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;function AA(e,t){const n=[];for(let r=t;r>0;r-=1)n.push(e.splice(0,Math.ceil(e.length/r)));return n}const m0=T.forwardRef(({value:e,onChange:t=Qn,children:n,rows:r=1,...o},i)=>{const a=T.useMemo(()=>{var l;const s=(l=A.Children.map(n,c=>{if(!A.isValidElement(c))return null;const m={selected:c.props.value===e,onClick:t};return A.cloneElement(c,m)}))!==null&&l!==void 0?l:[],u=AA(s,r).map((c,m)=>({key:m,tabs:c})),d=u.findIndex(c=>c.tabs.some(m=>m.props.selected));return u.push(u.splice(d,1)[0]),u},[n,t,r,e]);return A.createElement(wA,{...o,isMultiRow:r>1,role:"tablist",ref:i},a.map(l=>A.createElement(bA,{key:l.key},l.tabs)))});m0.displayName="Tabs";const kA=["blur","focus"],SA=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function kf(e){return"nativeEvent"in e&&kA.includes(e.type)}function Sf(e){return"nativeEvent"in e&&SA.includes(e.type)}const EA={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},TA=C.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${gc};
  text-align: center;
  font-size: 1rem;
  ${e=>EA[e.position]}
`,CA=C.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,$A=T.forwardRef(({className:e,children:t,disableFocusListener:n=!1,disableMouseListener:r=!1,enterDelay:o=1e3,leaveDelay:i=0,onBlur:a,onClose:l,onFocus:s,onMouseEnter:u,onMouseLeave:d,onOpen:c,style:m,text:k,position:g="top",...b},f)=>{const[p,h]=T.useState(!1),[y,S]=T.useState(),[E,$]=T.useState(),O=!n,L=!r,j=U=>{window.clearTimeout(y),window.clearTimeout(E);const z=window.setTimeout(()=>{h(!0),c==null||c(U)},o);S(z)},J=U=>{U.persist(),kf(U)?s==null||s(U):Sf(U)&&(u==null||u(U)),j(U)},Y=U=>{window.clearTimeout(y),window.clearTimeout(E);const z=window.setTimeout(()=>{h(!1),l==null||l(U)},i);$(z)},X=U=>{U.persist(),kf(U)?a==null||a(U):Sf(U)&&(d==null||d(U)),Y(U)},ae=O?X:void 0,q=O?J:void 0,V=L?J:void 0,se=L?X:void 0,te=O?0:void 0;return A.createElement(CA,{"data-testid":"tooltip-wrapper",onBlur:ae,onFocus:q,onMouseEnter:V,onMouseLeave:se,tabIndex:te},A.createElement(TA,{className:e,"data-testid":"tooltip",position:g,ref:f,show:p,style:m,...b},k),t)});$A.displayName="Tooltip";const Vs=C(bc)`
  white-space: nowrap;
`,v0=W`
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
`,PA=C.ul`
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
`,RA=C.li`
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
`,OA=C.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,DA=C.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${v0};

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
`,Ef=C(wc)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${v0};
`,IA=C.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function Tf(e,t){return e.includes(t)?e.filter(n=>n!==t):[...e,t]}function Cf(e){e.preventDefault()}function g0({className:e,disabled:t,expanded:n,innerRef:r,level:o,select:i,selected:a,style:l,tree:s=[]}){const u=o===0,d=T.useCallback(c=>{var m,k;const g=!!(c.items&&c.items.length>0),b=n.includes(c.id),f=(m=t||c.disabled)!==null&&m!==void 0?m:!1,p=f?Cf:E=>i(E,c),h=f?Cf:E=>i(E,c),y=a===c.id,S=A.createElement(IA,{"aria-hidden":!0},c.icon);return A.createElement(RA,{key:c.label,isRootLevel:u,role:"treeitem","aria-expanded":b,"aria-selected":y,hasItems:g},g?A.createElement(OA,{open:b},A.createElement(DA,{onClick:p,$disabled:f},A.createElement(Ef,{$disabled:f},S,A.createElement(Vs,null,c.label))),b&&A.createElement(g0,{className:e,disabled:f,expanded:n,level:o+1,select:i,selected:a,style:l,tree:(k=c.items)!==null&&k!==void 0?k:[]})):A.createElement(Ef,{as:"button",$disabled:f,onClick:h},S,A.createElement(Vs,null,c.label)))},[e,t,n,u,o,i,a,l]);return A.createElement(PA,{className:u?e:void 0,style:u?l:void 0,ref:u?r:void 0,role:u?"tree":"group",isRootLevel:u},s.map(d))}function NA({className:e,defaultExpanded:t=[],defaultSelected:n,disabled:r=!1,expanded:o,onNodeSelect:i,onNodeToggle:a,selected:l,style:s,tree:u=[]},d){const[c,m]=gn({defaultValue:t,onChange:a,onChangePropName:"onNodeToggle",value:o,valuePropName:"expanded"}),[k,g]=gn({defaultValue:n,onChange:i,onChangePropName:"onNodeSelect",value:l,valuePropName:"selected"}),b=T.useCallback((h,y)=>{if(a){const S=Tf(c,y);a(h,S)}m(S=>Tf(S,y))},[c,a,m]),f=T.useCallback((h,y)=>{g(y),i&&i(h,y)},[i,g]),p=T.useCallback((h,y)=>{h.preventDefault(),f(h,y.id),y.items&&y.items.length&&b(h,y.id)},[f,b]);return A.createElement(g0,{className:e,disabled:r,expanded:c,level:0,innerRef:d,select:p,selected:k,style:s,tree:u})}const _A=T.forwardRef(NA);_A.displayName="TreeView";const LA=s0;var jA={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"},FA=jA;const y0=je(FA);var MA={name:"rose",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#8a5b68",borderDarkest:"#26030b",borderLight:"#e5bec8",borderLightest:"#f1d4dc",canvas:"#ffffff",canvasText:"#050608",canvasTextDisabled:"#8a5b68",canvasTextDisabledShadow:"#f1d4dc",canvasTextInvert:"#ffffff",checkmark:"#050608",checkmarkDisabled:"#8a5b68",desktopBackground:"#808080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#ab5a71",headerNotActiveBackground:"#a19fa5",headerNotActiveText:"#615f68",headerText:"#ffffff",hoverBackground:"#ab5a71",material:"#d6adb8",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#8a5b68",materialTextDisabledShadow:"#f1d4dc",materialTextInvert:"#ffffff",progress:"#ab5a71",tooltip:"#fefbcc"},BA=MA;const zA=je(BA);var UA={name:"rainyDay",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#3d5367",borderDarkest:"#16233b",borderLight:"#91abc2",borderLightest:"#b7cee5",canvas:"#ffffff",canvasText:"#050608",canvasTextDisabled:"#3d5367",canvasTextDisabledShadow:"#b7cee5",canvasTextInvert:"#ffffff",checkmark:"#050608",checkmarkDisabled:"#3d5367",desktopBackground:"#000000",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#4b6480",headerNotActiveBackground:"#7f7f81",headerNotActiveText:"#ced0d9",headerText:"#ffffff",hoverBackground:"#4b6480",material:"#7a99b3",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#3d5367",materialTextDisabledShadow:"#b7cee5",materialTextInvert:"#ffffff",progress:"#4b6480",tooltip:"#fefbcc"},HA=UA;const WA=je(HA);var VA={name:"travel",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#695f50",borderDarkest:"#28251e",borderLight:"#9d8f80",borderLightest:"#baae9f",canvas:"#d8d0c8",canvasText:"#28251e",canvasTextDisabled:"#695f50",canvasTextDisabledShadow:"#baae9f",canvasTextInvert:"#ffffff",checkmark:"#28251e",checkmarkDisabled:"#695f50",desktopBackground:"#7c654c",flatDark:"#695f50",flatLight:"#9d8f80",focusSecondary:"#fefe03",headerBackground:"#404878",headerNotActiveBackground:"#605848",headerNotActiveText:"#908070",headerText:"#d8d0c8",hoverBackground:"#48604f",material:"#908070",materialDark:"#9a9e9c",materialText:"#28251e",materialTextDisabled:"#695f50",materialTextDisabledShadow:"#baae9f",materialTextInvert:"#ffffff",progress:"#48604f",tooltip:"#fefbcc"},QA=VA;const GA=je(QA);var KA={name:"marine",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#3c8d88",borderDarkest:"#050608",borderLight:"#98d2cb",borderLightest:"#b1dfdf",canvas:"#c3e2da",canvasText:"#050608",canvasTextDisabled:"#3c8d88",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",checkmark:"#050608",checkmarkDisabled:"#3c8d88",desktopBackground:"#2c4e47",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#000080",headerNotActiveBackground:"#7f7f7f",headerNotActiveText:"#ced0cf",headerText:"#ffffff",hoverBackground:"#000080",material:"#75c1ba",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#3c8d88",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#000080",tooltip:"#fefbcc"},qA=KA;const JA=je(qA);var YA={name:"olive",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#4f4c02",borderDarkest:"#000000",borderLight:"#9d9d11",borderLightest:"#fcfd3e",canvas:"#ffffff",canvasText:"#000000",canvasTextDisabled:"#4f4c02",canvasTextDisabledShadow:"#fcfd3e",canvasTextInvert:"#000000",checkmark:"#000000",checkmarkDisabled:"#4f4c02",desktopBackground:"#666633",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#000000",headerBackground:"#F3DE2C",headerNotActiveBackground:"#4f4c02",headerNotActiveText:"#807f00",headerText:"#000000",hoverBackground:"#F3DE2C",material:"#807f00",materialDark:"#4f4c02",materialText:"#000000",materialTextDisabled:"#4f4c02",materialTextDisabledShadow:"#fcfd3e",materialTextInvert:"#000000",progress:"#F3DE2C",tooltip:"#fefbcc"},XA=YA;const ZA=je(XA);var ek={name:"theSixtiesUSA",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#6c1f71",borderDarkest:"#010001",borderLight:"#d982de",borderLightest:"#df9be7",canvas:"#ffffff",canvasText:"#010001",canvasTextDisabled:"#6c1f71",canvasTextDisabledShadow:"#df9be7",canvasTextInvert:"#010001",checkmark:"#010001",checkmarkDisabled:"#6c1f71",desktopBackground:"#92458a",flatDark:"#d067d7",flatLight:"#df9be7",focusSecondary:"#fefe03",headerBackground:"#050080",headerNotActiveBackground:"#a130a9",headerNotActiveText:"#df9be7",headerText:"#ffffff",hoverBackground:"#0f0",material:"#d067d7",materialDark:"#9a9e9c",materialText:"#010001",materialTextDisabled:"#6c1f71",materialTextDisabledShadow:"#df9be7",materialTextInvert:"#010001",progress:"#0f0",tooltip:"#fefbcc"},tk=ek;const nk=je(tk);var rk={name:"candy",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#d1579e",borderDarkest:"#44132f",borderLight:"#f1acd5",borderLightest:"#EFF1F3",canvas:"#EFF1F3",canvasText:"#000000",canvasTextDisabled:"#d1579e",canvasTextDisabledShadow:"#EFF1F3",canvasTextInvert:"#EFF1F3",checkmark:"#000000",checkmarkDisabled:"#d1579e",desktopBackground:"#b477bd",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#87255B",headerNotActiveBackground:"#a08796",headerNotActiveText:"#EBD2BE",headerText:"#EFF1F3",hoverBackground:"#256EFF",material:"#E5A4CB",materialDark:"#9a9e9c",materialText:"#000000",materialTextDisabled:"#d1579e",materialTextDisabledShadow:"#EFF1F3",materialTextInvert:"#EFF1F3",progress:"#256EFF",tooltip:"#fefbcc"},ok=rk;const ik=je(ok);var ak={name:"tokyoDark",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#1f2223",borderDarkest:"#070809",borderLight:"#5e696a",borderLightest:"#93a0a1",canvas:"#2f3435",canvasText:"#F4F4ED",canvasTextDisabled:"#1f2223",canvasTextDisabledShadow:"#93a0a1",canvasTextInvert:"#ffffff",checkmark:"#F4F4ED",checkmarkDisabled:"#1f2223",desktopBackground:"#181a1b",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#20FC8F",headerBackground:"#1f2223",headerNotActiveBackground:"#5e696a",headerNotActiveText:"#F4F4ED",headerText:"#F4F4ED",hoverBackground:"#F61067",material:"#465051",materialDark:"#1f2223",materialText:"#F4F4ED",materialTextDisabled:"#1f2223",materialTextDisabledShadow:"#93a0a1",materialTextInvert:"#ffffff",progress:"#F61067",tooltip:"#fefbcc"},lk=ak;const sk=je(lk);var uk={name:"vaporTeal",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#00706f",borderDarkest:"#000000",borderLight:"#2fcecd",borderLightest:"#58ffff",canvas:"#98DFEA",canvasText:"#000000",canvasTextDisabled:"#00706f",canvasTextDisabledShadow:"#58ffff",canvasTextInvert:"#000000",checkmark:"#000000",checkmarkDisabled:"#00706f",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#FCF6BD",headerBackground:"#246A73",headerNotActiveBackground:"#2fcecd",headerNotActiveText:"#246A73",headerText:"#58ffff",hoverBackground:"#FF99C8",material:"#01a8a8",materialDark:"#246A73",materialText:"#000000",materialTextDisabled:"#00706f",materialTextDisabledShadow:"#58ffff",materialTextInvert:"#000000",progress:"#FF99C8",tooltip:"#fefbcc"},ck=uk;const dk=je(ck),fk={original:y0,rose:zA,rainyDay:WA,travel:GA,marine:JA,olive:ZA,theSixtiesUSA:nk,candy:ik,tokyoDark:sk,vaporTeal:dk},pk="/assets/ms_sans_serif-Du8rjN1q.woff2",hk="/assets/ms_sans_serif_bold-D5dpRRHG.woff2",mk="FETCH_COINS_INFO_REQUEST",x0="FETCH_COINS_INFO_SUCCESS",vk="FETCH_COINS_INFO_ERROR",gk="FETCH_COINS_DATA_REQUEST",w0="FETCH_COINS_DATA_SUCCESS",yk="FETCH_COINS_DATA_ERROR",xk="FETCH_EVENTS_SUCCESS",wk="SET_EVENT_SEEN",bk="FETCH_NEWS_SUCCESS",b0="FOLLOW_COIN",A0="UNFOLLOW_COIN",k0="SET_THEME",S0="SET_BACKGROUND",E0="SET_CUSTOM_BACKGROUND",T0="TOGGLE_VINTAGE_FONT",C0="SET_FONT_SIZE",Ak="SET_USER_HOLDINGS",$0="SET_USER_CURRENCY",kk="DELETE_USER_HOLDINGS",Sk="SORT_USER_HOLDINGS",P0="TOGGLE_SCAN_LINES",R0="SET_SCAN_LINES_INTENSITY";var Cc={};Object.defineProperty(Cc,"__esModule",{value:!0});function O0(e,t){if(t)return e;throw new Error("Unhandled discriminated union member: "+JSON.stringify(e))}Cc.assertNever=O0;var Ek=Cc.default=O0;function D0(e,t){return function(){return e.apply(t,arguments)}}const{toString:Tk}=Object.prototype,{getPrototypeOf:$c}=Object,Za=(e=>t=>{const n=Tk.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Lt=e=>(e=e.toLowerCase(),t=>Za(t)===e),el=e=>t=>typeof t===e,{isArray:Cr}=Array,uo=el("undefined");function Ck(e){return e!==null&&!uo(e)&&e.constructor!==null&&!uo(e.constructor)&&ut(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const I0=Lt("ArrayBuffer");function $k(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&I0(e.buffer),t}const Pk=el("string"),ut=el("function"),N0=el("number"),tl=e=>e!==null&&typeof e=="object",Rk=e=>e===!0||e===!1,di=e=>{if(Za(e)!=="object")return!1;const t=$c(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ok=Lt("Date"),Dk=Lt("File"),Ik=Lt("Blob"),Nk=Lt("FileList"),_k=e=>tl(e)&&ut(e.pipe),Lk=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||ut(e.append)&&((t=Za(e))==="formdata"||t==="object"&&ut(e.toString)&&e.toString()==="[object FormData]"))},jk=Lt("URLSearchParams"),Fk=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function To(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Cr(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let l;for(r=0;r<a;r++)l=i[r],t.call(null,e[l],l,e)}}function _0(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const L0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,j0=e=>!uo(e)&&e!==L0;function Qs(){const{caseless:e}=j0(this)&&this||{},t={},n=(r,o)=>{const i=e&&_0(t,o)||o;di(t[i])&&di(r)?t[i]=Qs(t[i],r):di(r)?t[i]=Qs({},r):Cr(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&To(arguments[r],n);return t}const Mk=(e,t,n,{allOwnKeys:r}={})=>(To(t,(o,i)=>{n&&ut(o)?e[i]=D0(o,n):e[i]=o},{allOwnKeys:r}),e),Bk=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),zk=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Uk=(e,t,n,r)=>{let o,i,a;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],(!r||r(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=n!==!1&&$c(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Hk=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Wk=e=>{if(!e)return null;if(Cr(e))return e;let t=e.length;if(!N0(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Vk=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&$c(Uint8Array)),Qk=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},Gk=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Kk=Lt("HTMLFormElement"),qk=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),$f=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Jk=Lt("RegExp"),F0=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};To(n,(o,i)=>{let a;(a=t(o,i,e))!==!1&&(r[i]=a||o)}),Object.defineProperties(e,r)},Yk=e=>{F0(e,(t,n)=>{if(ut(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(ut(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Xk=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Cr(e)?r(e):r(String(e).split(t)),n},Zk=()=>{},eS=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Ol="abcdefghijklmnopqrstuvwxyz",Pf="0123456789",M0={DIGIT:Pf,ALPHA:Ol,ALPHA_DIGIT:Ol+Ol.toUpperCase()+Pf},tS=(e=16,t=M0.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function nS(e){return!!(e&&ut(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const rS=e=>{const t=new Array(10),n=(r,o)=>{if(tl(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=Cr(r)?[]:{};return To(r,(a,l)=>{const s=n(a,o+1);!uo(s)&&(i[l]=s)}),t[o]=void 0,i}}return r};return n(e,0)},oS=Lt("AsyncFunction"),iS=e=>e&&(tl(e)||ut(e))&&ut(e.then)&&ut(e.catch),N={isArray:Cr,isArrayBuffer:I0,isBuffer:Ck,isFormData:Lk,isArrayBufferView:$k,isString:Pk,isNumber:N0,isBoolean:Rk,isObject:tl,isPlainObject:di,isUndefined:uo,isDate:Ok,isFile:Dk,isBlob:Ik,isRegExp:Jk,isFunction:ut,isStream:_k,isURLSearchParams:jk,isTypedArray:Vk,isFileList:Nk,forEach:To,merge:Qs,extend:Mk,trim:Fk,stripBOM:Bk,inherits:zk,toFlatObject:Uk,kindOf:Za,kindOfTest:Lt,endsWith:Hk,toArray:Wk,forEachEntry:Qk,matchAll:Gk,isHTMLForm:Kk,hasOwnProperty:$f,hasOwnProp:$f,reduceDescriptors:F0,freezeMethods:Yk,toObjectSet:Xk,toCamelCase:qk,noop:Zk,toFiniteNumber:eS,findKey:_0,global:L0,isContextDefined:j0,ALPHABET:M0,generateString:tS,isSpecCompliantForm:nS,toJSONObject:rS,isAsyncFn:oS,isThenable:iS};function ue(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}N.inherits(ue,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:N.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const B0=ue.prototype,z0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{z0[e]={value:e}});Object.defineProperties(ue,z0);Object.defineProperty(B0,"isAxiosError",{value:!0});ue.from=(e,t,n,r,o,i)=>{const a=Object.create(B0);return N.toFlatObject(e,a,function(s){return s!==Error.prototype},l=>l!=="isAxiosError"),ue.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const aS=null;function Gs(e){return N.isPlainObject(e)||N.isArray(e)}function U0(e){return N.endsWith(e,"[]")?e.slice(0,-2):e}function Rf(e,t,n){return e?e.concat(t).map(function(o,i){return o=U0(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function lS(e){return N.isArray(e)&&!e.some(Gs)}const sS=N.toFlatObject(N,{},null,function(t){return/^is[A-Z]/.test(t)});function nl(e,t,n){if(!N.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=N.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,f){return!N.isUndefined(f[b])});const r=n.metaTokens,o=n.visitor||d,i=n.dots,a=n.indexes,s=(n.Blob||typeof Blob<"u"&&Blob)&&N.isSpecCompliantForm(t);if(!N.isFunction(o))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(N.isDate(g))return g.toISOString();if(!s&&N.isBlob(g))throw new ue("Blob is not supported. Use a Buffer instead.");return N.isArrayBuffer(g)||N.isTypedArray(g)?s&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function d(g,b,f){let p=g;if(g&&!f&&typeof g=="object"){if(N.endsWith(b,"{}"))b=r?b:b.slice(0,-2),g=JSON.stringify(g);else if(N.isArray(g)&&lS(g)||(N.isFileList(g)||N.endsWith(b,"[]"))&&(p=N.toArray(g)))return b=U0(b),p.forEach(function(y,S){!(N.isUndefined(y)||y===null)&&t.append(a===!0?Rf([b],S,i):a===null?b:b+"[]",u(y))}),!1}return Gs(g)?!0:(t.append(Rf(f,b,i),u(g)),!1)}const c=[],m=Object.assign(sS,{defaultVisitor:d,convertValue:u,isVisitable:Gs});function k(g,b){if(!N.isUndefined(g)){if(c.indexOf(g)!==-1)throw Error("Circular reference detected in "+b.join("."));c.push(g),N.forEach(g,function(p,h){(!(N.isUndefined(p)||p===null)&&o.call(t,p,N.isString(h)?h.trim():h,b,m))===!0&&k(p,b?b.concat(h):[h])}),c.pop()}}if(!N.isObject(e))throw new TypeError("data must be an object");return k(e),t}function Of(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Pc(e,t){this._pairs=[],e&&nl(e,this,t)}const H0=Pc.prototype;H0.append=function(t,n){this._pairs.push([t,n])};H0.toString=function(t){const n=t?function(r){return t.call(this,r,Of)}:Of;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function uS(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function W0(e,t,n){if(!t)return e;const r=n&&n.encode||uS,o=n&&n.serialize;let i;if(o?i=o(t,n):i=N.isURLSearchParams(t)?t.toString():new Pc(t,n).toString(r),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Df{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){N.forEach(this.handlers,function(r){r!==null&&t(r)})}}const V0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},cS=typeof URLSearchParams<"u"?URLSearchParams:Pc,dS=typeof FormData<"u"?FormData:null,fS=typeof Blob<"u"?Blob:null,pS={isBrowser:!0,classes:{URLSearchParams:cS,FormData:dS,Blob:fS},protocols:["http","https","file","blob","url","data"]},Q0=typeof window<"u"&&typeof document<"u",hS=(e=>Q0&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),mS=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",vS=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Q0,hasStandardBrowserEnv:hS,hasStandardBrowserWebWorkerEnv:mS},Symbol.toStringTag,{value:"Module"})),Pt={...vS,...pS};function gS(e,t){return nl(e,new Pt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return Pt.isNode&&N.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function yS(e){return N.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function xS(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function G0(e){function t(n,r,o,i){let a=n[i++];if(a==="__proto__")return!0;const l=Number.isFinite(+a),s=i>=n.length;return a=!a&&N.isArray(o)?o.length:a,s?(N.hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!l):((!o[a]||!N.isObject(o[a]))&&(o[a]=[]),t(n,r,o[a],i)&&N.isArray(o[a])&&(o[a]=xS(o[a])),!l)}if(N.isFormData(e)&&N.isFunction(e.entries)){const n={};return N.forEachEntry(e,(r,o)=>{t(yS(r),o,n,0)}),n}return null}function wS(e,t,n){if(N.isString(e))try{return(t||JSON.parse)(e),N.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Co={transitional:V0,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=N.isObject(t);if(i&&N.isHTMLForm(t)&&(t=new FormData(t)),N.isFormData(t))return o?JSON.stringify(G0(t)):t;if(N.isArrayBuffer(t)||N.isBuffer(t)||N.isStream(t)||N.isFile(t)||N.isBlob(t))return t;if(N.isArrayBufferView(t))return t.buffer;if(N.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return gS(t,this.formSerializer).toString();if((l=N.isFileList(t))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return nl(l?{"files[]":t}:t,s&&new s,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),wS(t)):t}],transformResponse:[function(t){const n=this.transitional||Co.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&N.isString(t)&&(r&&!this.responseType||o)){const a=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(a)throw l.name==="SyntaxError"?ue.from(l,ue.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Pt.classes.FormData,Blob:Pt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};N.forEach(["delete","get","head","post","put","patch"],e=>{Co.headers[e]={}});const bS=N.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),AS=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),n=a.substring(0,o).trim().toLowerCase(),r=a.substring(o+1).trim(),!(!n||t[n]&&bS[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},If=Symbol("internals");function jr(e){return e&&String(e).trim().toLowerCase()}function fi(e){return e===!1||e==null?e:N.isArray(e)?e.map(fi):String(e)}function kS(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const SS=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Dl(e,t,n,r,o){if(N.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!N.isString(t)){if(N.isString(r))return t.indexOf(r)!==-1;if(N.isRegExp(r))return r.test(t)}}function ES(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function TS(e,t){const n=N.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,a){return this[r].call(this,t,o,i,a)},configurable:!0})})}class ct{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(l,s,u){const d=jr(s);if(!d)throw new Error("header name must be a non-empty string");const c=N.findKey(o,d);(!c||o[c]===void 0||u===!0||u===void 0&&o[c]!==!1)&&(o[c||s]=fi(l))}const a=(l,s)=>N.forEach(l,(u,d)=>i(u,d,s));return N.isPlainObject(t)||t instanceof this.constructor?a(t,n):N.isString(t)&&(t=t.trim())&&!SS(t)?a(AS(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=jr(t),t){const r=N.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return kS(o);if(N.isFunction(n))return n.call(this,o,r);if(N.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=jr(t),t){const r=N.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Dl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(a){if(a=jr(a),a){const l=N.findKey(r,a);l&&(!n||Dl(r,r[l],l,n))&&(delete r[l],o=!0)}}return N.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||Dl(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return N.forEach(this,(o,i)=>{const a=N.findKey(r,i);if(a){n[a]=fi(o),delete n[i];return}const l=t?ES(i):String(i).trim();l!==i&&delete n[i],n[l]=fi(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return N.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&N.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[If]=this[If]={accessors:{}}).accessors,o=this.prototype;function i(a){const l=jr(a);r[l]||(TS(o,a),r[l]=!0)}return N.isArray(t)?t.forEach(i):i(t),this}}ct.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);N.reduceDescriptors(ct.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});N.freezeMethods(ct);function Il(e,t){const n=this||Co,r=t||n,o=ct.from(r.headers);let i=r.data;return N.forEach(e,function(l){i=l.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function K0(e){return!!(e&&e.__CANCEL__)}function $o(e,t,n){ue.call(this,e??"canceled",ue.ERR_CANCELED,t,n),this.name="CanceledError"}N.inherits($o,ue,{__CANCEL__:!0});function CS(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ue("Request failed with status code "+n.status,[ue.ERR_BAD_REQUEST,ue.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const $S=Pt.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const a=[e+"="+encodeURIComponent(t)];N.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),N.isString(r)&&a.push("path="+r),N.isString(o)&&a.push("domain="+o),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function PS(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function RS(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function q0(e,t){return e&&!PS(t)?RS(e,t):t}const OS=Pt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let a=i;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(a){const l=N.isString(a)?o(a):a;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function DS(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function IS(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,a;return t=t!==void 0?t:1e3,function(s){const u=Date.now(),d=r[i];a||(a=u),n[o]=s,r[o]=u;let c=i,m=0;for(;c!==o;)m+=n[c++],c=c%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-a<t)return;const k=d&&u-d;return k?Math.round(m*1e3/k):void 0}}function Nf(e,t){let n=0;const r=IS(50,250);return o=>{const i=o.loaded,a=o.lengthComputable?o.total:void 0,l=i-n,s=r(l),u=i<=a;n=i;const d={loaded:i,total:a,progress:a?i/a:void 0,bytes:l,rate:s||void 0,estimated:s&&a&&u?(a-i)/s:void 0,event:o};d[t?"download":"upload"]=!0,e(d)}}const NS=typeof XMLHttpRequest<"u",_S=NS&&function(e){return new Promise(function(n,r){let o=e.data;const i=ct.from(e.headers).normalize();let{responseType:a,withXSRFToken:l}=e,s;function u(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}let d;if(N.isFormData(o)){if(Pt.hasStandardBrowserEnv||Pt.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((d=i.getContentType())!==!1){const[b,...f]=d?d.split(";").map(p=>p.trim()).filter(Boolean):[];i.setContentType([b||"multipart/form-data",...f].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const b=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(b+":"+f))}const m=q0(e.baseURL,e.url);c.open(e.method.toUpperCase(),W0(m,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function k(){if(!c)return;const b=ct.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),p={data:!a||a==="text"||a==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:b,config:e,request:c};CS(function(y){n(y),u()},function(y){r(y),u()},p),c=null}if("onloadend"in c?c.onloadend=k:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(k)},c.onabort=function(){c&&(r(new ue("Request aborted",ue.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new ue("Network Error",ue.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const p=e.transitional||V0;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new ue(f,p.clarifyTimeoutError?ue.ETIMEDOUT:ue.ECONNABORTED,e,c)),c=null},Pt.hasStandardBrowserEnv&&(l&&N.isFunction(l)&&(l=l(e)),l||l!==!1&&OS(m))){const b=e.xsrfHeaderName&&e.xsrfCookieName&&$S.read(e.xsrfCookieName);b&&i.set(e.xsrfHeaderName,b)}o===void 0&&i.setContentType(null),"setRequestHeader"in c&&N.forEach(i.toJSON(),function(f,p){c.setRequestHeader(p,f)}),N.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),a&&a!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Nf(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Nf(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=b=>{c&&(r(!b||b.type?new $o(null,e,c):b),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const g=DS(m);if(g&&Pt.protocols.indexOf(g)===-1){r(new ue("Unsupported protocol "+g+":",ue.ERR_BAD_REQUEST,e));return}c.send(o||null)})},Ks={http:aS,xhr:_S};N.forEach(Ks,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const _f=e=>`- ${e}`,LS=e=>N.isFunction(e)||e===null||e===!1,J0={getAdapter:e=>{e=N.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let a;if(r=n,!LS(n)&&(r=Ks[(a=String(n)).toLowerCase()],r===void 0))throw new ue(`Unknown adapter '${a}'`);if(r)break;o[a||"#"+i]=r}if(!r){const i=Object.entries(o).map(([l,s])=>`adapter ${l} `+(s===!1?"is not supported by the environment":"is not available in the build"));let a=t?i.length>1?`since :
`+i.map(_f).join(`
`):" "+_f(i[0]):"as no adapter specified";throw new ue("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:Ks};function Nl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new $o(null,e)}function Lf(e){return Nl(e),e.headers=ct.from(e.headers),e.data=Il.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),J0.getAdapter(e.adapter||Co.adapter)(e).then(function(r){return Nl(e),r.data=Il.call(e,e.transformResponse,r),r.headers=ct.from(r.headers),r},function(r){return K0(r)||(Nl(e),r&&r.response&&(r.response.data=Il.call(e,e.transformResponse,r.response),r.response.headers=ct.from(r.response.headers))),Promise.reject(r)})}const jf=e=>e instanceof ct?{...e}:e;function br(e,t){t=t||{};const n={};function r(u,d,c){return N.isPlainObject(u)&&N.isPlainObject(d)?N.merge.call({caseless:c},u,d):N.isPlainObject(d)?N.merge({},d):N.isArray(d)?d.slice():d}function o(u,d,c){if(N.isUndefined(d)){if(!N.isUndefined(u))return r(void 0,u,c)}else return r(u,d,c)}function i(u,d){if(!N.isUndefined(d))return r(void 0,d)}function a(u,d){if(N.isUndefined(d)){if(!N.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function l(u,d,c){if(c in t)return r(u,d);if(c in e)return r(void 0,u)}const s={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(u,d)=>o(jf(u),jf(d),!0)};return N.forEach(Object.keys(Object.assign({},e,t)),function(d){const c=s[d]||o,m=c(e[d],t[d],d);N.isUndefined(m)&&c!==l||(n[d]=m)}),n}const Y0="1.6.8",Rc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Rc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ff={};Rc.transitional=function(t,n,r){function o(i,a){return"[Axios v"+Y0+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,l)=>{if(t===!1)throw new ue(o(a," has been removed"+(n?" in "+n:"")),ue.ERR_DEPRECATED);return n&&!Ff[a]&&(Ff[a]=!0,console.warn(o(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,a,l):!0}};function jS(e,t,n){if(typeof e!="object")throw new ue("options must be an object",ue.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const l=e[i],s=l===void 0||a(l,i,e);if(s!==!0)throw new ue("option "+i+" must be "+s,ue.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ue("Unknown option "+i,ue.ERR_BAD_OPTION)}}const qs={assertOptions:jS,validators:Rc},Jt=qs.validators;class jn{constructor(t){this.defaults=t,this.interceptors={request:new Df,response:new Df}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=br(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&qs.assertOptions(r,{silentJSONParsing:Jt.transitional(Jt.boolean),forcedJSONParsing:Jt.transitional(Jt.boolean),clarifyTimeoutError:Jt.transitional(Jt.boolean)},!1),o!=null&&(N.isFunction(o)?n.paramsSerializer={serialize:o}:qs.assertOptions(o,{encode:Jt.function,serialize:Jt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=i&&N.merge(i.common,i[n.method]);i&&N.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=ct.concat(a,i);const l=[];let s=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(s=s&&b.synchronous,l.unshift(b.fulfilled,b.rejected))});const u=[];this.interceptors.response.forEach(function(b){u.push(b.fulfilled,b.rejected)});let d,c=0,m;if(!s){const g=[Lf.bind(this),void 0];for(g.unshift.apply(g,l),g.push.apply(g,u),m=g.length,d=Promise.resolve(n);c<m;)d=d.then(g[c++],g[c++]);return d}m=l.length;let k=n;for(c=0;c<m;){const g=l[c++],b=l[c++];try{k=g(k)}catch(f){b.call(this,f);break}}try{d=Lf.call(this,k)}catch(g){return Promise.reject(g)}for(c=0,m=u.length;c<m;)d=d.then(u[c++],u[c++]);return d}getUri(t){t=br(this.defaults,t);const n=q0(t.baseURL,t.url);return W0(n,t.params,t.paramsSerializer)}}N.forEach(["delete","get","head","options"],function(t){jn.prototype[t]=function(n,r){return this.request(br(r||{},{method:t,url:n,data:(r||{}).data}))}});N.forEach(["post","put","patch"],function(t){function n(r){return function(i,a,l){return this.request(br(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}jn.prototype[t]=n(),jn.prototype[t+"Form"]=n(!0)});class Oc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(l=>{r.subscribe(l),i=l}).then(o);return a.cancel=function(){r.unsubscribe(i)},a},t(function(i,a,l){r.reason||(r.reason=new $o(i,a,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Oc(function(o){t=o}),cancel:t}}}function FS(e){return function(n){return e.apply(null,n)}}function MS(e){return N.isObject(e)&&e.isAxiosError===!0}const Js={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Js).forEach(([e,t])=>{Js[t]=e});function X0(e){const t=new jn(e),n=D0(jn.prototype.request,t);return N.extend(n,jn.prototype,t,{allOwnKeys:!0}),N.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return X0(br(e,o))},n}const Ee=X0(Co);Ee.Axios=jn;Ee.CanceledError=$o;Ee.CancelToken=Oc;Ee.isCancel=K0;Ee.VERSION=Y0;Ee.toFormData=nl;Ee.AxiosError=ue;Ee.Cancel=Ee.CanceledError;Ee.all=function(t){return Promise.all(t)};Ee.spread=FS;Ee.isAxiosError=MS;Ee.mergeConfig=br;Ee.AxiosHeaders=ct;Ee.formToJSON=e=>G0(N.isHTMLForm(e)?new FormData(e):e);Ee.getAdapter=J0.getAdapter;Ee.HttpStatusCode=Js;Ee.default=Ee;const _l="https://www.cryptocompare.com";class BS{constructor(){this.fetchEvents=async()=>{const r=(await Ee.get("https://api.coingecko.com/api/v3/events?upcoming_events_only=true")).data.data;return r.forEach(o=>o.id=o.organizer+o.title),r},this.fetchNews=async({timestamp:t,sortOrder:n="latest",limit:r=15})=>(await this.axios.get("/data/v2/news/",{params:{lTs:t,sortOrder:n,lang:"EN"}})).data.Data.splice(0,r),this.fetchTopList=async(t=30,n="EUR")=>(await this.axios.get("/data/top/totalvolfull",{params:{limit:t,tsym:n}})).data.Data.map(l=>l.CoinInfo.Name),this.fetchCoinsInfo=async()=>{const r=(await this.axios.get("/data/all/coinlist")).data.Data,o={};return Object.keys(r).sort((a,l)=>parseInt(r[a].SortOrder)-parseInt(r[l].SortOrder)).forEach(a=>{const l=r[a];o[a]={name:l.Name,symbol:l.Symbol,fullName:l.FullName.split(" ").join("_"),coinName:l.CoinName.split(" ").join("_"),imageURL:_l+l.ImageUrl,totalCoinSupply:l.TotalCoinSupply,totalCoinsMined:l.TotalCoinsMined,sortOrder:parseInt(l.SortOrder)}}),o},this.fetchCoinsData=async(t,n="EUR")=>{const r=await this.axios.get("data/pricemultifull",{params:{fsyms:t.join(","),tsyms:n}}),o={},i=r.data.RAW;return Object.keys(i).forEach(a=>{o[a]={...i[a][n],imageURL:_l+i[a][n].IMAGEURL}}),o},this.fetchCoinsDisplayData=async(t,n="EUR")=>{const r=await this.axios.get("data/pricemultifull",{params:{fsyms:t.join(","),tsyms:n}}),o={},i=r.data.DISPLAY;return Object.keys(i).forEach(a=>{o[a]={...i[a][n],imageURL:_l+i[a][n].IMAGEURL}}),o},this.fetchCoinsHistoricalData=async(t,n,r="EUR")=>{let i,a,l;switch(n){case"1H":a=60,i=`https://min-api.cryptocompare.com/data/histominute?fsym=${t}&tsym=${r}&limit=${a}`;break;case"24H":a=24*60,l=a/180,i=`https://min-api.cryptocompare.com/data/histominute?fsym=${t}&tsym=${r}&limit=180&aggregate=${l}`;break;case"1M":a=30*24,l=a/180,i=`https://min-api.cryptocompare.com/data/histohour?fsym=${t}&tsym=${r}&limit=180&aggregate=${l}`;break;case"3M":a=90,i=`https://min-api.cryptocompare.com/data/histoday?fsym=${t}&tsym=${r}&limit=180`;break;case"1Y":a=360,l=a/180,i=`https://min-api.cryptocompare.com/data/histoday?fsym=${t}&tsym=EUR&limit=180&aggregate=${l}`;break;default:Ek(n)}return(await this.axios.get(i)).data.Data},this.axios=Ee.create({baseURL:"https://min-api.cryptocompare.com"})}}const Ys=new BS,zS=e=>({type:x0,payload:e}),Z0=()=>async e=>{e({type:mk});try{const t=await Ys.fetchCoinsInfo(),n=await Ys.fetchTopList();e(zS({top:n,info:t}))}catch{e({type:vk})}},US=e=>({type:w0,payload:e}),HS=()=>async(e,t)=>{e({type:gk});try{const n=t(),r=n.user.currency,o=Object.keys(n.user.wallet),i=n.user.followed,a=n.coins.top,l=[...new Set([...i,...a||[],...o||[]])],s=await Ys.fetchCoinsData(l,r);e(US(s))}catch{e({type:yk})}},WS="foresome95",VS="0.0.1",QS=["Artur Bień","Marcus Yeagle"],GS="Golf app",KS=["react","styled-components","windows95","vaporwave"],qS={dev:"vite",build:"tsc && vite build",lint:"eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",preview:"vite preview"},JS={"@vitejs/plugin-react":"^4.2.1","array-move":"^2.1.0","assert-never":"^1.2.1",axios:"^1.6.8","lodash.throttle":"^4.1.1","prop-types":"^15.6.2",react:"^16.7.0","react-dom":"^16.7.0","react-redux":"^6.0.0","react-router":"^5.2.0","react-router-dom":"^5.2.0","react-sortable-hoc":"^1.11.0",react95:"^4.0.0",recharts:"^2.1.15",redux:"^4.0.1","redux-thunk":"^2.3.0","styled-components":"^5.3.3"},YS={"@babel/core":"^7.2.2","@types/lodash.throttle":"^4.1.7","@types/react":"^17.0.3","@types/react-dom":"^17.0.2","@types/react-redux":"^7.1.16","@types/react-router-dom":"^5.1.7","@types/styled-components":"^5.1.9",typescript:"^4.7.3",vite:"^5.2.0"},XS={extends:"react-app"},ZS=[">0.2%","not dead","not ie <= 11","not op_mini all"],eE={name:WS,version:VS,authors:QS,description:GS,keywords:KS,scripts:qS,dependencies:JS,devDependencies:YS,eslintConfig:XS,browserslist:ZS},tE=C.span`
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
`,nE=C.img.attrs(()=>({loading:"lazy"}))`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  transition: 0.2s all ease-out;
`,ev=({imageURL:e,height:t,...n})=>v.jsx(tE,{...n,height:t,children:e&&v.jsx(nE,{src:e,alt:"icon"})});ev.propTypes={imageURL:Et.string};const rE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAARVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADc6ur3AAAAFnRSTlMAjNzYiLSwDnlOOhR07McoJPCgnG5kHZE9igAAATtJREFUeNrt28tOwzAQQNEpbZP0kUAh8f9/KqwQA8UlNBUSPWc/lu5uLNkBAAAAAAAAAABwxvSwoCn+TlcWdIwfEyJESJ0QIULqhAgRUifk3dQl42ZBY5dMcUsPJdnEglYlWccHQoQIESJEiJA3QoQIuXXIIRv6pIuqNg+3UdX1yXDI4ir7kj3FHNuSNDHHY8n2QoQIESJEiBAhQoQIOW/cJqtd1kZNu836kvTb7MJhu2yVh8eoey7JEHMcyixtzDGU5EWIECFChAgRIkSIkGtDxiaZucY32ec1vslmrvFNMt7LxUqIECFChAgRIkSIkLsNiTYbTkl3aTiLqu6UDG3m4ZkQIUKECBEiRIgQIb8zHZNxtaDxmExR5xu4ECHfEyJESJ0QIULqhPz7kGm9oCkAAAAAAAAAAAC+egX+heiUR07piAAAAABJRU5ErkJggg==",tv=C(p0)`
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
`,Mf=[{id:1,date:"2024-11-17",betType:"Matchup",players:[{name:"Hiers, Paul",indx:3,tee:"black"},{name:"Sickles, Corey",indx:11,tee:"blue"}],score:null,action:null,sides:[{side:"Hiers",action:0},{side:"Sickles",action:-2.5}],prop:""},{id:2,date:"2024-11-17",betType:"Gross Score",players:[{name:"Atkinson, John",indx:3,tee:"blue"}],score:80,action:null,sides:[{side:"Over",action:-110},{side:"Under",action:-110}],prop:""},{id:3,date:"2024-11-17",betType:"Gross Score",players:[{name:"Taylor, Troy",indx:-2,tee:"black"}],score:68.5,action:null,sides:[{side:"Over",action:-110},{side:"Under",action:-110}],prop:""},{id:4,date:"2024-11-17",betType:"Group Net Winner",players:[{name:"Weiss, Frank",indx:9,tee:"blue"}],score:null,action:150,sides:null,prop:""},{id:5,date:"2024-11-17",betType:"Group Net Winner",players:[{name:"Steele, Matt",indx:9,tee:"blue"}],score:null,action:150,sides:null,prop:""},{id:6,date:"2024-11-17",betType:"Group Net Winner",players:[{name:"Westerheide, Pete",indx:9,tee:"blue"}],score:null,action:150,sides:null,prop:""},{id:7,date:"2024-11-17",betType:"Group Net Winner",players:[{name:"Yeagle, Marcus",indx:10,tee:"blue"}],score:null,action:150,sides:null,prop:""},{id:8,date:"2024-11-17",betType:"Proposition",players:[],score:null,action:150,sides:[{side:"Yes",action:-110},{side:"No",action:-110}],prop:"Gross Birdie on any 3 of the 5 par 3s"}],oE=({detailData:e,setIsOpened:t,isOpened:n})=>{console.log(e);function r(){return e.betType==="Gross Score"?`${e.score} - ${e.betType}`:e.betType}function o(){return v.jsx(v.Fragment,{children:v.jsx("ul",{children:e.players.map((i,a)=>v.jsxs("li",{children:[i.name," (",i.indx,")"]},i+a))})})}return v.jsx(Qm,{theme:y0,children:n&&v.jsx(iE,{onClick:()=>t(!1),children:v.jsx(aE,{onClick:i=>i.stopPropagation(),children:v.jsx("div",{style:{minWidth:"250px"},children:v.jsxs(On,{variant:"flat",label:r(),children:[o(),e.betType==="Group Net Winner"?v.jsxs("div",{children:[v.jsxs("p",{children:["+",e.action]}),v.jsx("br",{}),v.jsxs(On,{variant:"flat",label:"Group",children:[v.jsx("p",{children:"Steele, Matt"}),v.jsx("p",{children:"Weiss, Frank"}),v.jsx("p",{children:"Palm, Bryce"})]})]}):v.jsx(v.Fragment,{}),e.betType==="Gross Score"?v.jsx("div",{style:{paddingTop:"2.5rem"},children:e.sides.map((i,a)=>v.jsxs(tt,{primary:i.action<0,disabled:!0,variant:"flat",style:{marginRight:"0.5rem"},children:[i.side," ",i.action]},a))}):v.jsx(v.Fragment,{}),e.betType==="Matchup"?v.jsx("div",{style:{paddingTop:"2.5rem"},children:e.sides.map((i,a)=>v.jsxs(tt,{primary:i.action<0,disabled:!0,variant:"flat",style:{marginRight:"0.5rem"},children:[i.side," ",i.action]},a))}):v.jsx(v.Fragment,{}),e.betType==="Proposition"?v.jsxs("div",{children:[v.jsx("p",{style:{lineHeight:"1.5",margin:"1rem 0 2rem"},children:e.prop}),e.sides.map(i=>v.jsxs(tt,{primary:i.action<0,disabled:!0,variant:"flat",style:{marginRight:"0.5rem"},children:[i.side," ",i.action]}))]}):v.jsx(v.Fragment,{})]})})})})})},iE=C.div`
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
`,aE=C.div`
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
`,nv=({history:e,data:t,location:n})=>{const[r,o]=T.useState(!1),[i,a]=T.useState(void 0),l=g=>{const b=new URLSearchParams(e.location.search),f=b.get("orderBy");let p;f===g?p=b.get("desc")!=="true":p=g!=="name";const h={pathname:e.location.pathname,search:`?orderBy=${g}&desc=${p}`,hash:e.location.hash};e.push(h)},s=new URLSearchParams(n.search);let u=s.get("orderBy"),d=s.get("desc")==="false"?-1:1;n.search.includes("orderBy")||(u="price",d=1);const c={price:"PRICE",change:"CHANGEPCT24HOUR",name:"coinName"};if(t){t=t.map(f=>({...f,PRICE:f.PRICE||0,CHANGEPCT24HOUR:f.CHANGEPCT24HOUR||0}));let g=c[u];d=g===c.name?-d:d,t.sort((f,p)=>(p[g]>f[g]?1:-1)*d).map((f,p)=>{const{name:h,coinName:y,symbol:S,imageURL:E,PRICE:$=0,CHANGEPCT24HOUR:O=0}=f;return v.jsxs(cr,{onClick:()=>e.push(`/coins/${S}`),children:[v.jsxs(St,{children:[v.jsx(sE,{height:22,imageURL:E}),v.jsx(uE,{children:`${y.toLowerCase()}.${h.toLowerCase()}`})]}),v.jsx(St,{}),v.jsx(St,{style:{textAlign:"right"},children:$.toFixed(2)}),v.jsxs(St,{style:{textAlign:"right"},children:[O.toFixed(2),"%"]})]},p)})}function m(g,b){console.log(g,b),o(!0),a(g)}console.log(Mf);let k=Mf.map((g,b)=>v.jsxs(cr,{onClick:()=>{},children:[v.jsx(St,{children:g.betType==="Gross Score"?`${g.betType} (${g.score})`:g.betType}),v.jsx(St,{children:g.betType==="Proposition"?"All":g.players.map(f=>f.name.substring(0,f.name.indexOf(","))+(g.players.length>1?"/":""))}),v.jsx(St,{style:{textAlign:"right"},children:v.jsx("img",{src:rE,style:{height:24,padding:"0.5rem"},onClick:()=>{m(g,b)}})})]},b));return v.jsxs(v.Fragment,{children:[v.jsxs(cE,{children:[v.jsx(Tc,{children:v.jsxs(cr,{children:[v.jsx(ur,{onClick:()=>l("name"),children:"Type"}),v.jsx(ur,{onClick:()=>l("name"),children:"Player(s)"}),v.jsx(ur,{onClick:()=>l("price"),children:"View"})]})}),v.jsx(Ec,{children:k})]}),v.jsx(oE,{isOpened:r,setIsOpened:g=>o(g),detailData:i})]})};nv.propTypes={data:Et.array};const lE=Ao(nv),sE=C(ev)`
  margin-right: 6px;
`,uE=C.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,cE=C(tv)`
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
`;let dE=C(Ya)`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  height: calc(100% - var(--safe-area-inset-bottom));
  padding-bottom: 43px;
`,fE=C(Tr)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 4px;
  padding-left: 4px;
  padding-right: 4px;
  height: 100%;
`;const rv=({children:e,...t})=>v.jsx(dE,{children:v.jsx(fE,{...t,children:e})}),pE=({buttons:e,size:t="sm",...n})=>v.jsx(hE,{...n,children:e.map((r,o)=>v.jsx(mE,{onClick:r.onClick,active:r.active,size:t,fullWidth:!0,children:r.label},o))});let hE=C.nav`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem -1px;
  flex-shrink: 0;
`,mE=C(tt)`
  margin: 0 1px;
`;function Po(){const e=document.getElementById("root");T.useLayoutEffect(()=>{const t=window.pageYOffset;window.scrollTo(0,0);const{position:n}=window.getComputedStyle(e);return document.body.style.overflow="hidden",e.style.overflow="hidden",e.style.position="fixed",e.style.width="100%",e.style.height="100%",()=>{document.body.style.overflow="",e.style.overflow="",e.style.position=n,e.style.width="",e.style.height="",e.scrollTo(0,0),window.scrollTo(0,t)}},[e])}const vE="/assets/money-trans-C6TYdGmC.png",gE=({data:e,showingFollowing:t,showFollowing:n,showTop:r})=>{Po();const o=Em();return o.pathname+o.search,v.jsxs(rv,{children:[v.jsxs(yE,{children:[v.jsx("img",{style:{height:52,opacity:.9,padding:"5px 0 0 5px"},src:vE,alt:"icon"}),v.jsxs("h1",{children:["Sunday",v.jsx("span",{children:"Sides"}),v.jsxs("small",{children:["v",eE.version]})]})]}),v.jsx(xE,{children:v.jsx(lE,{data:e})}),v.jsx(pE,{size:"md",buttons:[{label:"Current",onClick:r,active:!t},{label:"Historical ",onClick:n,active:t}]})]})};let yE=C.header`
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
`,xE=C.div`
  flex: 1;
  overflow: hidden;
  & > div {
    height: 100%;
  }
`;const wE=({topList:e,followed:t,coinsData:n,info:r,fetchCoinsInfo:o,fetchCoinsData:i})=>{const[a,l]=T.useState(!1);T.useEffect(()=>{r?i():o()},[r,o,e,i]);let s;return!r||!n?s=null:s=(a?t:e||[]).map(u=>({...r[u],...n[u]})),v.jsx(gE,{data:s,showingFollowing:a,showFollowing:()=>l(!0),showTop:()=>l(!1)})},bE=e=>({followed:e.user.followed,walletCoinsList:Object.keys(e.user.wallet),topList:e.coins.top,currency:e.user.currency,info:e.coins.info,coinsData:e.coins.coinsData}),AE=e=>({fetchCoinsInfo:()=>e(Z0()),fetchCoinsData:()=>e(HS())}),kE=ko(bE,AE),SE=kE(wE),EE=e=>({type:$0,payload:e}),TE=(e,t)=>({type:t?b0:A0,payload:e}),CE=e=>({type:k0,payload:e}),$E=e=>({type:S0,payload:e}),PE=e=>({type:E0,payload:e}),RE=e=>({type:T0,payload:e}),OE=e=>({type:P0,payload:e}),DE=e=>({type:R0,payload:e}),IE=e=>({type:C0,payload:e}),ov=C(Ya)`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  
  height: 100%;
  height: calc(100% - var(--safe-area-inset-bottom));
`,iv=C(Sc)`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 4px;
`,av=C.div`
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
`,NE=({goBack:e,to:t,history:n,children:r,...o})=>{const i=Em(),a=i.state?i.state.from:"/",l=()=>e?n.push(a):t?n.push(t):()=>{};return v.jsx(tt,{onClick:l,...o,children:r})},Dc=Ao(NE),lv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAGFBMVEUAAAD///8AAADAwMCAgIAA//8AAP8AAIBUAk3vAAAAAXRSTlMAQObYZgAAAGNJREFUCNc1yEEKgCAQheEhvMBU0lamoLVJ+8ouUIIHMPAG3r9hrLd5Hz+AOnkADETsth/9h5YM47CcGPs1CpTWixVc4a7Qay3gw+QFiny2AhziI3CuZMdoiOaYDMhKkuNq4AX1VQ75vyoE2wAAAABJRU5ErkJggg==",co=C.div`
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
`,sv=C.div`
  display: flex;
  flex-wrap: no-wrap;
  ${co}:not(:last-child) {
    width: 100%;
    margin-right: 2px;
  }
`,Bf=[{value:"169",name:"Albertson, John"},{value:"192",name:"Arganbright, Marty"},{value:"121",name:"Atkinson, John"},{value:"31",name:"Banker, Jeff"},{value:"51",name:"Banner, John"},{value:"139",name:"Barker, Thomas"},{value:"176",name:"Bates, Mike"},{value:"235",name:"Beck , Riley"},{value:"259",name:"Benevento, Marc"},{value:"123",name:"Brady, Kenny"},{value:"195",name:"Braydich, Nick"},{value:"201",name:"Brooks, Bill"},{value:"155",name:"Bujnak, Pete"},{value:"101",name:"Burghardt, Jeff"},{value:"168",name:"Butch, Kevin"},{value:"207",name:"Caminiti, Dom"},{value:"203",name:"Clark, Greg"},{value:"150",name:"Coakley, Rob"},{value:"242",name:"Comisar, Jason"},{value:"109",name:"Coon, Tom"},{value:"152",name:"Crawford , Dave"},{value:"33",name:"Cron, Tim"},{value:"153",name:"DeMattio , Don"},{value:"6",name:"Dennison, Allen"},{value:"243",name:"Dietz, Andy"},{value:"115",name:"Dietz, Chris"},{value:"228",name:"Dillon, Mike"},{value:"12",name:"Dippolito, John"},{value:"231",name:"Dwyer, Timothy"},{value:"17",name:"Edwards, Spencer"},{value:"260",name:"Emmenegger, Dan"},{value:"174",name:"English, Dennis"},{value:"125",name:"English, Denny"},{value:"196",name:"Erickson, Aunders"},{value:"159",name:"Evans, Danny"},{value:"130",name:"Ewald, Shane"},{value:"133",name:"Eyen, Bob"},{value:"241",name:"Ferguson, Mike"},{value:"32",name:"Fields, Brandon"},{value:"18",name:"Fitori, Jim"},{value:"40",name:"Fitzpatrick, Sean"},{value:"28",name:"Fitzsimmons, Greg"},{value:"118",name:"Flaherty, Kevin"},{value:"55",name:"Francisco, Jim"},{value:"220",name:"Gearhiser, Kurt"},{value:"175",name:"gerber, john"},{value:"128",name:"Gimeson, Curran"},{value:"127",name:"Gimeson, Jim"},{value:"211",name:"Gimeson, Paul"},{value:"154",name:"Gleaves, Greg"},{value:"178",name:"Glick, Jordan"},{value:"23",name:"Goetz, Nick"},{value:"160",name:"Goldsberry, Craig"},{value:"258",name:"Graham, Carl"},{value:"35",name:"Grim, Chris"},{value:"26",name:"Grim, Mark"},{value:"186",name:"Hall, Tim"},{value:"234",name:"Hanks, David"},{value:"189",name:"Hart, Chuck"},{value:"190",name:"Heath, Joe"},{value:"194",name:"Heis, Adam"},{value:"138",name:"Herrick, Mike"},{value:"43",name:"Hickman, Tim"},{value:"219",name:"Hiers, Kyle"},{value:"48",name:"Hiers, Paul"},{value:"206",name:"Hiers, Wes"},{value:"248",name:"Hitch, David"},{value:"183",name:"Hocking, Kyle"},{value:"167",name:"Hook, Shane"},{value:"144",name:"Huss, Kyle"},{value:"265",name:"Janice, Rob"},{value:"218",name:"Johnson, Glenn"},{value:"84",name:"Jozefczyk, Harrison"},{value:"54",name:"Kauffman , Randy"},{value:"221",name:"Keener, Mike"},{value:"9",name:"Kendig, Shawn"},{value:"177",name:"Kennedy , Don"},{value:"36",name:"King, Mitch"},{value:"158",name:"Koehl, Kiki"},{value:"20",name:"Kramer, Brad"},{value:"187",name:"Kraynak, Michael"},{value:"19",name:"Kristoff, Jeff"},{value:"253",name:"Lacko, Alan"},{value:"15",name:"LaLonde, Brent"},{value:"81",name:"LaLonde, David"},{value:"205",name:"LeCrone, Brian"},{value:"129",name:"Lewis, Andy"},{value:"222",name:"M, I"},{value:"233",name:"Marbry, chris"},{value:"210",name:"Marton, Tyler"},{value:"156",name:"Matter, Kristen"},{value:"98",name:"Maunz, Brandon"},{value:"197",name:"McAninch, Sam"},{value:"151",name:"McCaffrey, Patrick"},{value:"198",name:"McCandless, Mike"},{value:"11",name:"McClure, Todd"},{value:"13",name:"McDaniel, Jay"},{value:"46",name:"Meikrantz, Dave"},{value:"85",name:"Meikrantz , Shelby"},{value:"142",name:"Mills, jeffrey"},{value:"100",name:"Minnie, Chris"},{value:"254",name:"Montello, Ben"},{value:"104",name:"Murphy, Spencer"},{value:"199",name:"Novosel, Todd"},{value:"16",name:"Padro, Rick"},{value:"208",name:'Palm, Bryce "plant"'},{value:"141",name:"Pappas, Peter"},{value:"204",name:"Parks, Guy"},{value:"149",name:"Parton, Kelly"},{value:"264",name:"Partridge, David"},{value:"202",name:"Peck, Nick"},{value:"200",name:"Peck, Steve"},{value:"172",name:"Perry, Justin"},{value:"8",name:"Pi, Mark"},{value:"99",name:"Politte, Jeffrey"},{value:"163",name:"Pratt, Lind"},{value:"261",name:"Proakis, Jake"},{value:"96",name:"Promenschenkel, George"},{value:"147",name:"Raines, Leila"},{value:"251",name:"Rath, Dave"},{value:"10",name:"Reda, Rob"},{value:"193",name:"Rice, Ryan"},{value:"266",name:"Riddle, Gary"},{value:"263",name:"Riley, Wes"},{value:"268",name:"Rini, Bill"},{value:"224",name:"Rubicky, Rob"},{value:"267",name:"Rumizen, Max"},{value:"238",name:"Russo, Bryan"},{value:"164",name:"Rutkoski, Jason"},{value:"27",name:"Salata, Parker"},{value:"227",name:"Salva, Heath"},{value:"225",name:"Santini, Jim"},{value:"116",name:"Savage, Sean"},{value:"97",name:"Schaffner, Jeff"},{value:"105",name:"Schmidt, Dustin"},{value:"214",name:"Sears, Rick"},{value:"182",name:"Secrest, Chad"},{value:"145",name:"Sever, Jeff"},{value:"108",name:"Sewell, Jon"},{value:"223",name:"Shannon, Derek"},{value:"173",name:"Sickles, Corey"},{value:"7",name:"Smith, Keith"},{value:"122",name:"Smith, Nick"},{value:"244",name:"Spitzer, Ryan"},{value:"44",name:"Sprankle, Fred"},{value:"45",name:"Sprankle , Scott"},{value:"226",name:"Stacey, Larry"},{value:"50",name:"Staley, Mike"},{value:"135",name:"Staley, Scott"},{value:"4",name:"Steele, Alan"},{value:"2",name:"Steele, Chad"},{value:"1",name:"Steele, Matt"},{value:"38",name:"Steele, Spencer"},{value:"171",name:"Steininger, Aaron"},{value:"29",name:"Stevenson, Dan"},{value:"47",name:"Struewing, Ben"},{value:"239",name:"Taronto, Drew"},{value:"229",name:"Taylor , Layla"},{value:"134",name:"Taylor, Troy"},{value:"148",name:"Tepe, David"},{value:"137",name:"Thieman, Josh"},{value:"136",name:"Thieman, Mike"},{value:"240",name:"Toranato, Drew"},{value:"170",name:"Towel, Rick"},{value:"140",name:"Trabue, Hugh"},{value:"252",name:"Uehlein, Pat"},{value:"53",name:"Valentine , Travis"},{value:"107",name:"VanHala, Andrew"},{value:"165",name:"VanLandingham, Tyler"},{value:"236",name:"Vincent, Denny"},{value:"162",name:"Vosler, Will"},{value:"262",name:"Walden, Jon"},{value:"117",name:"Walter, Dave"},{value:"21",name:"Watson, Brian"},{value:"102",name:"Weiss, Frank"},{value:"209",name:"Weiss, PJ"},{value:"34",name:"Welch, Dustin"},{value:"14",name:"West, Zach"},{value:"110",name:"Westerheide, Pete"},{value:"157",name:"White, Emily"},{value:"30",name:"Williamson, J"},{value:"5",name:"Wilson, Todd"},{value:"3",name:"Winhoven, Jason"},{value:"185",name:"Wissinger , Jared"},{value:"249",name:"Wolf, Josh"},{value:"103",name:"Wolff, Brett"},{value:"82",name:"Yeagle, Marcus"},{value:"181",name:"Zeller, Aaron"},{value:"146",name:"Zeller, Rod"},{value:"180",name:"Zeller, Rodd"}];class _E extends A.Component{constructor(t){super(t),this.handleChangeOrder=n=>{n===this.state.orderBy?this.setState(r=>({desc:!r.desc})):this.setState({orderBy:n,desc:!0})},this.state={orderBy:"rank",desc:!1}}render(){let{data:t,onFollow:n,searchPhrase:r}=this.props;r=r.toLowerCase();const o=Bf.filter(i=>r?i.name.toUpperCase().includes(r.toUpperCase()):!0).map((i,a)=>v.jsxs(cr,{onClick:l=>{n(i.name)},children:[v.jsx(St,{children:i.name}),v.jsx(St,{style:{textAlign:"right"},onClick:void 0,children:i.value})]},a));return v.jsxs(v.Fragment,{children:[v.jsx(jE,{children:v.jsxs(FE,{children:[v.jsx(Tc,{children:v.jsxs(cr,{children:[v.jsx(ur,{onClick:()=>this.handleChangeOrder("name"),children:"Name"}),v.jsx(ur,{onClick:()=>this.handleChangeOrder("indx"),children:"ID"})]})}),v.jsx(Ec,{children:o})]})}),v.jsx(LE,{children:v.jsxs(sv,{children:[v.jsx(co,{children:t?`Showing ${o?o.length:0} player(s) of ${Bf.length} total`:"Loading..."}),v.jsx(co,{draggable:!0})]})})]})}}const uv=Ao(_E);let LE=C.footer`
  margin-top: 0.5rem;
  margin-bottom: 2px;
  flex-shrink: 0;
`,jE=C.div`
  height: 40vh;
  flex: 1;
  margin-top: 0.5rem;
  overflow: hidden;
  & > div {
    height: 100%;
  }
`;const FE=C(tv)`
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
`,ME=({data:e,onFollow:t})=>{const[n,r]=T.useState(""),o=i=>{r(i.target.value)};return Po(),v.jsxs(ov,{style:{position:"absolute",top:"0"},children:[v.jsxs(iv,{children:[v.jsx("img",{alt:"Search icon",src:lv,style:{height:27,marginTop:2,marginRight:"0.5rem",imageRendering:"pixelated"}}),"Search",v.jsx(Dc,{square:!0,size:"sm",style:{position:"absolute",right:2,top:3,fontWeight:"bold"},goBack:!0,children:v.jsx(av,{})})]}),v.jsxs(zE,{children:[v.jsxs(UE,{children:[v.jsx(Eo,{placeholder:"Search...",value:n,onChange:o,width:"100%",style:{marginRight:"4px",width:"100%"}}),v.jsx(tt,{disabled:n==="",onClick:()=>r(""),children:"Clear"})]}),v.jsx(uv,{searchPhrase:n,data:e,onFollow:t})]})]})},BE=Ao(ME);let zE=C(Tr)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-top: 4px;
  padding-bottom: 37px;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
`;const UE=C(Qt)`
  margin: 0 -4px;
`,HE=({data:e,fetchCoinsInfo:t,setFollowedCoin:n})=>(T.useEffect(()=>{e||t()},[e,t]),v.jsx(BE,{data:e,onFollow:n})),WE=e=>{if(e.coins.info===null)return{data:null};{let t=e.coins.info;return{data:Object.keys(e.coins.info).map(n=>({...t[n],isFollowed:e.user.followed.includes(n)}))}}},VE=e=>({fetchCoinsInfo:()=>e(Z0()),setFollowedCoin:(t,n)=>e(TE(t,n))}),QE=ko(WE,VE)(HE);var Ic={exports:{}};const cv=(e,t,n)=>{const r=n<0?e.length+n:n,o=e.splice(t,1)[0];e.splice(r,0,o)},dv=(e,t,n)=>(e=e.slice(),cv(e,t,n),e);Ic.exports=dv;Ic.exports.default=dv;Ic.exports.mutate=cv;const GE=(e,t)=>e.toLocaleString("en-US",{style:"currency",currency:t}),fv=(e="top")=>W`
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
`,pv=()=>W`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
`,KE=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch{return}},qE=(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch{}},JE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAACVBMVEUAgIAA//8AAABML0eVAAAAHUlEQVQY02MgDTA6QDADiwIEIxhMDWBMLTBIHAYAXSQELXns9OsAAAAASUVORK5CYII=",YE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAD1BMVEUAgICAAIAAAIAAAAD/AP/xWXoLAAAAWElEQVQoz2NAAEZFRWUGZMAiJCQMpMhSIQIDMBWOilAAUyEEA5SpMIYBmAoDmFtgKuACA6dCRASmggUcKAxgP4AFGMFMoAlwFWAmOSrAwQBTIWxsTI24BQDnDRqxaEeFJwAAAABJRU5ErkJggg==",XE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAADFBMVEWAAIAAAAD/AP+AgIC+5PyhAAAAIElEQVQY02MgCuwGgZ1AxgEQjxGIG8CMISoSCgZE+RwAhEEUNc/zGIcAAAAASUVORK5CYII=",ZE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAuAgMAAABG0ZGhAAAADFBMVEXAwMD//wD///+AgAD5TC6AAAAAg0lEQVQY07WQsQ2DUAxEbwXTpYgySpqTSBFljujPwQKMALOwACOwgyVa7hCIFgosW/K76tkg2QwkIqIdIy5w1U4rFxZz1blh0ED7WwEK6zlZIHQA1umGIDTQTgV4heuBL10fPG/i38p/+4X8Nt/DPwVyhlx7OcvPmLvv4e97tn/k+f8tsA9WQ4HgaDkAAAAASUVORK5CYII=",eT="/assets/water-CLT8T8g9.gif",tT="/assets/noise-Q2HaBj8G.gif",hv="user",nT=KE(hv)||{},zf=[{value:"#008080",label:"(Custom)"},{value:`url(${JE})`,label:"Rivets"},{value:`url(${YE})`,label:"Zig-zag"},{value:`url(${XE})`,label:"Purple squares"},{value:`url(${ZE})`,label:"Honey"},{value:`url(${eT})`,label:"Water"},{value:`url(${tT})`,label:"Noise"}],rT=["USD","EUR","PLN","JPY"],oT={followed:[],wallet:{},seenEvents:[],currency:"EUR",vintageFont:!0,theme:"original",backgrounds:zf,background:zf[0],fontSize:1,scanLines:!1,scanLinesIntensity:0,...nT},iT=(e=oT,t)=>{const n=function(){switch(t.type){case b0:{const g=[...new Set([...e.followed,t.payload])];return{...e,followed:g}}case A0:{const g=e.followed.filter(b=>b!==t.payload);return{...e,followed:g}}case k0:return{...e,theme:t.payload};case S0:return{...e,background:t.payload};case E0:const[r,...o]=e.backgrounds,i={...r,value:t.payload},a=[i,...o];return{...e,backgrounds:a,background:i};case T0:return{...e,vintageFont:t.payload};case C0:return{...e,fontSize:t.payload};case P0:return{...e,scanLines:t.payload};case R0:return{...e,scanLinesIntensity:t.payload};case wk:const l=t.payload,s=[...e.seenEvents,l];return{...e,seenEvents:s};case Ak:const{amount:u,coin:d}=t.payload,c={...e.wallet},m=Object.keys(c).length,k=c[d]?c[d].order:m;return c[d]={symbol:d,amount:u,order:k},{...e,wallet:c};case kk:{const g={...e.wallet};return g[t.payload]&&delete g[t.payload],{...e,wallet:g}}case Sk:{const b=t.payload.reduce((f,p)=>({...f,[p]:e.wallet[p]}),{});return{...e,wallet:b}}case $0:return{...e,currency:t.payload};default:return e}}();return qE(hv,n),n},aT=({selectedCurrency:e,setCurrency:t})=>{const n=rT.map(r=>({value:r,label:r}));return v.jsx(Ja,{style:{flexShrink:0},width:85,onChange:r=>t(r.value),value:e,options:n})},lT=e=>({selectedCurrency:e.user.currency}),sT=e=>({setCurrency:t=>e(EE(t))}),uT=ko(lT,sT)(aT),cT=({data:e,onPlayerSelect:t})=>{const[n,r]=T.useState(""),o=i=>{r(i.target.value)};return Po(),v.jsxs("div",{children:[v.jsxs(dT,{children:[v.jsx("img",{alt:"Search icon",src:lv,style:{height:27,marginTop:2,marginRight:"0.5rem",imageRendering:"pixelated"}}),v.jsx(Eo,{placeholder:"Search Player...",value:n,onChange:o,width:"100%",style:{marginRight:"4px",width:"100%"}}),v.jsx(tt,{disabled:n==="",onClick:()=>r(""),children:"Clear"})]}),v.jsx("div",{children:v.jsx(uv,{data:["foo","bar"],onFollow:i=>{t(i)},searchPhrase:n})})]})};C(Tr)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-top: 4px;
  padding-bottom: 37px;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
`;const dT=C(Qt)`
  margin: 0 -4px;
`,fT=({data:e,currency:t,sortUserHoldings:n,match:r,location:o})=>{e&&Math.round(e.map(d=>d.PRICE*d._amount).reduce((d,c)=>d+c,0)*100)/100,T.useState("");const[i,a]=T.useState(""),[l,s]=T.useState(0);T.useState(0);function u(d){a(d)}return v.jsx(pT,{children:v.jsxs(hT,{children:[v.jsxs("div",{children:[v.jsx("header",{children:v.jsx("a",{href:"",children:i})}),v.jsx(Ac,{}),v.jsxs("section",{children:[v.jsx(mT,{children:i?v.jsx(Ms,{size:70,style:{background:"#008080"},children:i.split(",")[1].charAt(1)+i.split(",")[0].charAt(0)}):v.jsx(Ms,{size:70})}),v.jsxs("div",{children:[v.jsx(vT,{children:GE(l,"USD")}),v.jsx("div",{children:v.jsxs(Qt,{children:[v.jsx(Dc,{disabled:!i,fullWidth:!0,style:{marginRight:8},to:{pathname:"/add/bet",state:{from:o.pathname,player:i}},children:"Make Bet"}),v.jsx(uT,{})]})})]})]}),v.jsx("div",{style:{paddingLeft:"0.5rem",fontSize:"0.9rem",lineHeight:"1.5"}})]}),v.jsx("div",{children:v.jsxs(sv,{children:[v.jsx(co,{children:new Date().toLocaleDateString()}),v.jsx(co,{style:{flexShrink:0,minWidth:65,textAlign:"center"},children:e&&`${e.length} coin(s)`})]})}),v.jsx(cT,{onPlayerSelect:u})]})})},pT=C.div`
  padding-bottom: 100px;
`,hT=C.div`
  ${fv("full")}
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
`,mT=C.div`
  margin-left: 0.25rem;
  display: inline-block;
  object-fit: cover;
  height: 85px;
  width: 85px;
  border-radius: 50%;
  flex-shrink: 0;
`,vT=C.div`
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
  ${fv("full")}
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
`;var mv="Expected a function",Uf=NaN,gT="[object Symbol]",yT=/^\s+|\s+$/g,xT=/^[-+]0x[0-9a-f]+$/i,wT=/^0b[01]+$/i,bT=/^0o[0-7]+$/i,AT=parseInt,kT=typeof Ro=="object"&&Ro&&Ro.Object===Object&&Ro,ST=typeof self=="object"&&self&&self.Object===Object&&self,ET=kT||ST||Function("return this")(),TT=Object.prototype,CT=TT.toString,$T=Math.max,PT=Math.min,Ll=function(){return ET.Date.now()};function RT(e,t,n){var r,o,i,a,l,s,u=0,d=!1,c=!1,m=!0;if(typeof e!="function")throw new TypeError(mv);t=Hf(t)||0,Ki(n)&&(d=!!n.leading,c="maxWait"in n,i=c?$T(Hf(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m);function k($){var O=r,L=o;return r=o=void 0,u=$,a=e.apply(L,O),a}function g($){return u=$,l=setTimeout(p,t),d?k($):a}function b($){var O=$-s,L=$-u,j=t-O;return c?PT(j,i-L):j}function f($){var O=$-s,L=$-u;return s===void 0||O>=t||O<0||c&&L>=i}function p(){var $=Ll();if(f($))return h($);l=setTimeout(p,b($))}function h($){return l=void 0,m&&r?k($):(r=o=void 0,a)}function y(){l!==void 0&&clearTimeout(l),u=0,r=s=o=l=void 0}function S(){return l===void 0?a:h(Ll())}function E(){var $=Ll(),O=f($);if(r=arguments,o=this,s=$,O){if(l===void 0)return g(s);if(c)return l=setTimeout(p,t),k(s)}return l===void 0&&(l=setTimeout(p,t)),a}return E.cancel=y,E.flush=S,E}function OT(e,t,n){var r=!0,o=!0;if(typeof e!="function")throw new TypeError(mv);return Ki(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),RT(e,t,{leading:r,maxWait:t,trailing:o})}function Ki(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function DT(e){return!!e&&typeof e=="object"}function IT(e){return typeof e=="symbol"||DT(e)&&CT.call(e)==gT}function Hf(e){if(typeof e=="number")return e;if(IT(e))return Uf;if(Ki(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Ki(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(yT,"");var n=wT.test(e);return n||bT.test(e)?AT(e.slice(2),n?2:8):xT.test(e)?Uf:+e}var NT=OT;const _T=je(NT),Wf=document.querySelector('meta[name="theme-color"]'),jl=e=>{Wf?Wf.setAttribute("content",e):console.warn('meta[name="theme-color"] not found')},LT=({value:e,onChange:t,disabled:n})=>{const r=A.useCallback(a=>{jl(a),t(a)},[t]),o=A.useMemo(()=>_T(r,100),[r]),i=A.useCallback(a=>{o(a.target.value)},[o]);return v.jsx(Xm,{value:e,onChange:i,disabled:n,onFocus:()=>jl(e),onBlur:()=>jl("#000000")})},jT=({theme:e,setTheme:t,background:n,backgrounds:r,setBackground:o,setCustomBackground:i,scanLines:a,toggleScanLines:l,setScanLinesIntensity:s,scanLinesIntensity:u,vintageFont:d,toggleVintageFont:c,fontSize:m,setFontSize:k})=>{const[g,b]=T.useState(0),f=y=>b(y),p=y=>{const S=r.find(E=>E.value===y.value);S&&o(S)};Po();const h=A.useCallback(y=>i(y),[i]);return v.jsxs(rv,{style:{paddingTop:"0.5rem"},children:[v.jsxs(m0,{value:g,onChange:f,children:[v.jsx(ci,{value:0,children:"Background"}),v.jsx(ci,{value:1,children:"Appearance"}),v.jsx(ci,{value:2,children:"System"})]}),v.jsxs(h0,{style:{height:510},children:[g===0&&v.jsxs(v.Fragment,{children:[v.jsx(UT,{backgroundStyles:{background:n.value}}),v.jsxs(On,{label:"Wallpaper:",style:{marginTop:20},children:[v.jsx(Ja,{width:"100%",onChange:p,menuMaxHeight:300,options:r,value:n.value}),v.jsxs(zT,{isDisabled:r[0].value!==n.value,children:[v.jsx("label",{children:"Custom color:"}),v.jsx(LT,{value:r[0].value,disabled:r[0].value!==n.value,onChange:h})]})]})]}),g===1&&v.jsx(Go,{children:v.jsxs(On,{label:"Theme:",children:[v.jsx(vt,{value:"original",onChange:()=>t("original"),checked:e==="original",label:"original"}),v.jsx("br",{}),v.jsx(vt,{value:"rose",onChange:()=>t("rose"),checked:e==="rose",label:"🌹 Rose"}),v.jsx("br",{}),v.jsx(vt,{value:"rainyDay",onChange:()=>t("rainyDay"),checked:e==="rainyDay",label:"☔️ Rainy Day"}),v.jsx("br",{}),v.jsx(vt,{value:"travel",onChange:()=>t("travel"),checked:e==="travel",label:"🧳 Travel"}),v.jsx("br",{}),v.jsx(vt,{value:"marine",onChange:()=>t("marine"),checked:e==="marine",label:"🛳 Marine"}),v.jsx("br",{}),v.jsx(vt,{value:"olive",onChange:()=>t("olive"),checked:e==="olive",label:"🍸 Olive"}),v.jsx("br",{}),v.jsx(vt,{value:"theSixtiesUSA",onChange:()=>t("theSixtiesUSA"),checked:e==="theSixtiesUSA",label:"🌷 The 60's USA"}),v.jsx("br",{}),v.jsx(vt,{value:"candy",onChange:()=>t("candy"),checked:e==="candy",label:"🍭 Candy"}),v.jsx("br",{}),v.jsx(vt,{value:"tokyoDark",onChange:()=>t("tokyoDark"),checked:e==="tokyoDark",label:"📟 Tokyo Dark"}),v.jsx("br",{}),v.jsx(vt,{value:"vaporTeal",onChange:()=>t("vaporTeal"),checked:e==="vaporTeal",label:"💨 Vapor Teal"})]})}),g===2&&v.jsxs(v.Fragment,{children:[v.jsx(Go,{children:v.jsxs(On,{label:"Font:",children:[v.jsx(zs,{name:"vintageFont",value:"vintageFont",label:"Vintage font",onChange:()=>c(!d),checked:d}),v.jsxs(Qf,{children:[v.jsx(Vf,{children:"Size:"}),v.jsx(Ws,{min:.8,max:1.2,step:null,value:m,onChange:y=>k(y),marks:[{value:.8,label:"0.8"},{value:.9,label:"0.9"},{value:1,label:"1"},{value:1.1,label:"1.1"},{value:1.2,label:"1.2"}]})]})]})}),v.jsx(Go,{}),v.jsx(Go,{children:v.jsx(On,{label:v.jsx(zs,{style:{},name:"scanLines",value:"scanLines",label:"Scan lines",onChange:()=>l(!a),checked:a}),children:v.jsxs(Qf,{children:[v.jsx(Vf,{isDisabled:!a,children:"Intensity:"}),v.jsx(Ws,{disabled:!a,step:10,min:0,max:100,marks:[{value:0,label:"min"},{value:100,label:"max"}],value:u,onChange:y=>s(y)})]})})})]})]})]})},FT=e=>({theme:e.user.theme,background:e.user.background,backgrounds:e.user.backgrounds,vintageFont:e.user.vintageFont,scanLines:e.user.scanLines,scanLinesIntensity:e.user.scanLinesIntensity,fontSize:e.user.fontSize}),MT=e=>({setTheme:t=>e(CE(t)),toggleVintageFont:t=>e(RE(t)),setFontSize:t=>e(IE(t)),toggleScanLines:t=>e(OE(t)),setScanLinesIntensity:t=>e(DE(t)),setBackground:t=>e($E(t)),setCustomBackground:t=>e(PE(t))}),BT=ko(FT,MT)(jT),zT=C.div`
  float: right;
  margin-right: 0px;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  label {
    font-size: 1rem;
    padding-right: 1rem;
    ${({isDisabled:e})=>e&&W`
        ${pv()}
      `}
  }
`,Go=C.div`
  margin-bottom: 30px;
`,Vf=C.label`
  display: inline-block;
  margin-bottom: 0.5rem;
  margin-left: -1rem;
  ${({isDisabled:e})=>e&&W`
      ${pv()}
    `}
`,Qf=C.div`
  padding: 8px 16px;
`,UT=C(LA)`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`,Gf=()=>({width:window.innerWidth,height:window.innerHeight});function HT(){const[e,t]=T.useState(Gf());return T.useEffect(()=>{const n=()=>t(Gf());return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)}),[e.width,e.height]}const WT="/assets/iphone-Db91Bbd8.png",VT=({children:e,maxWidth:t=450,maxHeight:n=896})=>{const[r,o]=HT();return r>t||o>n?v.jsx(QT,{maxWidth:t,maxHeight:n,id:"device",children:v.jsx(GT,{children:e})}):v.jsxs(v.Fragment,{children:[e,v.jsx(KT,{})]})},QT=C.div`
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
      background: url(${WT});
      background-size: cover;
    }
  }
  max-height: 100%;
  max-width: 100%;

  overflow: hidden;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.35);

  overflow: visible;
`,GT=C.div`
  height: 100%;
  width: 100%;
  overflow: auto;
`,KT=C.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0;
  background: black;
  z-index: 999;
  height: 0;
  height: var(--safe-area-inset-bottom);
`,qT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAAAAADAwMD///+AgID//wCAgACAAID0UdedAAAAAXRSTlMAQObYZgAAAMZJREFUKM+dz92twyAMBeB4Aw4Q7jMoCyRXDECVBSpPkP2X6ClOS/pW1UJGfPKPmL4M4PMt/8V9wm25gjhp0ckgn7Ht8HlAydvONFYY4ALPlgHsXrc9+HyKlNIreDkDcB56OoHzeoTt3AMuKDyxtAkmefdZEdGgvSv+RZ9rDUur1QACBCXovQO/Fdu8hoWJ0APQQFgVp8y19gpe7wqFJYPUqkVqBgK9B54+w2ROR00Ht7ygHYemFC/gAMiACfy2Y76EcOBv8QA5diEJAFLjpgAAAABJRU5ErkJggg==",JT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAMAAABEH1h2AAAB4FBMVEUAAACen56zs7OfoJ+hoaGXmZdTU1NTU1Obm5ugoKCioqK/wL+ZmZm5ubmoqaidnp2en56rq6udnp2fn5+lpaWfoJ+cnpyMjo21tbWpqamenp5zc3OoqKidnZ2oqKhiY2KcnJyTlJN+f36pqalZWVmjpKOpqamfoZ9TU1NeXl5UVFSpqam+vr5UVFRnZ2e0uLWMjIyGh4aoqKioqKh9fX11dXVUVFTAwsC/v7/AwMBUVFS/v78AAADr5uu1sbW3s7c8PTzBwsFHR0fTztPo4+c6OjvW0dbIw8jFwcXAvMDj3+NOTk7g2+C7t7sfHh83ODcsLCy/wL+qqaqYlpk0MzXQzdHNyM3Lx8vb19spKCknJScLCwza1trQzM+Ihom5tblcXFwyMjLPys92dHdwb3AYGBhraWsiIiKjn6N+fH9FREUUFBRqZ2qopqiVk5ViYWOPjY96eHpnZmdTUlNJSkpAQEDd2N3CvsKKh4ovLy8RERHKxsqvq66TkJOBgIKFhIaDgYQFBQXY09ihoaGem56am5qLiowQDw8ICAnX19fU1NS9ub2PkI9tbW5mZGZfXl9XVVccHBzl4eXZ2dmytLOdnp1zcXRMS0wlJCWysrKxrbF7eXtaWVqlo6WAfYBzcnNXwFgbAAAAPHRSTlMAqgyUXhz112dPRzs4BK6hiYR4cGlVQS8q+vnx34A89dbS0snGup2cmJGOd3ZiSCL29vTt6cixq5+GeWD0SjRQAAAF90lEQVRIx+3W51vaQBwH8BZHa/fee++9Gy7WhCQEQikbBCLDgCAbRBTBiah1to6qrf9qL6MCBuvju77o7/F5znD5kLv7XhL2/K+61fRgX3Oqed/9JvHQsNG879abew8+PH785IliZ34VEarvoni4+BnZrLYrO+qDM+Kp4xsHheOxan5gB6w4boiF+/jSTRuOKyQ+NB4Ojw/tzM+m0ukOv1DT6+n0+lmRB2KD7tlOyE//nV9sR5A5AFAAQCSNIPOv9ih4/nlk4pvRAXnj3+ftFzmQeGdX00GBRyYmojvxUxdGOIdufs5ojBqNxrhmfj63MTJS0ENu+DY5sAL5qe31IU0mM+dLJDpahcrEfImlVCbj6YP8pzT4h9vzG3BtliMAzErBcQCMtgr/wrlP7sQfrck4+oebRiYnhbkf327k143TJocj5Y6XYiaPR+9w5Gbi8ULa4dC1V/GG+nq/xmRKJQYHecoZDJFoYbAr5fG0JguDnEPgE8Lg79TnzwMIkhkFoBteyo8rcYsUnA+AAVPV0h2pn3dxC/cCVOKowCPfJqJ8cLfrjfxZyZ/xeDRw8MlQprXX1tPjoiiWy8HBF4u+dM6jcS+OcZ2Q36yXt93ethaPd3scjlieZRm1Ootptc58iV86e6u/FPeFcjldGfJLcn6d31YDACzBr4/ZlEozACimVOJWMffALwDcdumGPS/P+2sO8miFYygqcVTgBRTd5IatI79R8C+rVBr/WqI7tbxcdDmdZpIkzU6n00uSgFOp2pJra1xapbK38/xwjT6p0elaE0bjkkenW1+lqCwzpXbRNO1lprIYTQ+vRo2FDH9K1NjdyXNFDb+gQhB9LwBdMLg5Cxw4C1CXkg8OMIRSSZNi7rlegHbpeH6uWn8cq+IpgaMiR1GRo0Lu+hIq8XcVfPa1bzoVCmlm/P7u2fX1IkUQmNVqdREEYYatGbZeq3WVE0+JLYdCc37fxSZJP02FwzlfMPjLFA5rVjGMZBjGQi8smFmGwRYWaCvLZImFhWEQDHbBUzLuYHB6JRy+L/EjISlUPRyVWqkkGIBa8Jrcp5xKpZYCMDghW3QpjCD7JB7ZwocZFPJK7hYUFTkqcVTgzaI+zPNw28zMTDKZdKsxDPNaLC7YmC1i67JYvGaxzXMazVwsmczA7FPS1Q2QI0Pl9laDVotNoayVxnG48qwLx/krMwSOa0mUzdpw3MkaDAlHuX0IiubK3IVSAaXSpgZoP103dzXcxz1ZIXdYlbmfq+GowAl57iJHN/m9zdxvzWrmEcQz6jLz5XK5zMFYR0e3z+fr7uiY5Xy+wVXxY77iK3ClU7NX+dylerso7TqSFoODT5vqChiF4AClVSqDdn7XvRehNP7FzwJHeT4s5zqRoxX+tJorxnheYllSi+PDapbleF4uD/ElcH71WZbqwXGRK6r5Yf7qpiDM2mvx8lknIPckOY5LcjG4m+aLFq8XgwW74yvy+31RJa68c0oMzj2OIB1fvnyCf0DDP2ml4NQAiHfcHtn9Xp27u4/nn/j6LnK0krucX4P8cx5uqyzDWOH8iyL/8ocnGIZy4riNYpjCNtxj7Ld6MfFe97VLV/8icF0JfmwRuwdW5Py2LHeBU5D/0Mhyl/G98tyluUMuy132nD8KeS6uVvf30DSRVaunt/AoTfeQajXppOnROryBz/2n04n1k6SXcDq7/nAxuPkCSVox2G0lyd4A5C9q+TFZ7gLfNveXtfzybnKXvyJPQG6CTxsCTtBi02oHx2t5F5w3Ad+2sLsYkPOTfO5RirIM22wYSVEbleCE3OM2G2GlKCthsxkd8vf7/l3mfqSWN+4y9zu1/DTkgaTbPRDJ54Mlt1tTRpDQV6GKKjh3fz4fGYDdP/P5hE7+u64FntOus9tzHpPJo7fr4UsYCeuFssMQygGTyaS32/Ww21GW/6Y9APkuqq2llp/ZJT9Xy6/EWiulkrVba1pRyxVXzpw5c+BAS8vp042NjftPnTx54sTly8eONTQ03D16dK9UR+82HDuxv+VQ0+E9/0L9BsIFFzjCGiw3AAAAAElFTkSuQmCC",YT="/assets/shake-CaDFd7xV.png",XT=e=>{const t=e.location.pathname;return v.jsx(eC,{position:"fixed",children:v.jsxs(tC,{children:[v.jsx(Ml,{active:t==="/",onClick:()=>e.history.push("/"),fullWidth:!0,size:"lg",children:v.jsx(Fl,{src:JT,alt:"icon"})}),v.jsx(Ml,{active:t.startsWith("/wallet"),onClick:()=>e.history.push("/wallet"),fullWidth:!0,size:"lg",children:v.jsx(Fl,{style:{height:21,opacity:.9},src:YT,alt:"icon"})}),v.jsx(Ml,{active:t==="/settings",onClick:()=>e.history.push("/settings"),fullWidth:!0,size:"lg",children:v.jsx(Fl,{src:qT,alt:"icon",style:{height:30}})})]})})},ZT=Ao(XT),eC=C(Km)`
  top: auto;
  bottom: 0;
  z-index: 2;
  bottom: var(--safe-area-inset-bottom);
`,Fl=C.img`
  /* image-rendering: pixelated; */
  filter: grayscale(1);
  height: 24px;
`,Ml=C(tt)`
  margin: 0 1px;
`,tC=C(Qt)`
  margin: 0 -1px;
`,nC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlklEQVQ4ja2TUQ4CIQwF5xkPXm/Wmz0/VkxZKWuiDz6aAMOUBGgSEQYM+FUvo24BsG1ASP3e2wZwwT+lUb5socY2xzwOfnPBCTAYCwBgjAmm9foGEseIiLXjo3EfejVFebZoWnBmTpBRN+189mf7/5AzrIDe9b0AJMm2yUwkkZmVPjZd2niXYbgymEzq7btsP9OP57/LExGpw8baUBHxAAAAAElFTkSuQmCC",rC=({player:e})=>{const[t,n]=T.useState(""),r=o=>{n(o.target.value)};return Po(),v.jsxs(ov,{style:{position:"absolute",top:"0"},children:[v.jsxs(iv,{children:[v.jsx("img",{alt:"Juggle icon",src:nC,style:{height:27,marginTop:2,marginRight:"0.5rem",imageRendering:"pixelated"}}),"Create Bet",v.jsx(Dc,{square:!0,size:"sm",style:{position:"absolute",right:2,top:3,fontWeight:"bold"},goBack:!0,children:v.jsx(av,{})})]}),v.jsxs(oC,{children:[v.jsxs(iC,{children:[v.jsx(Eo,{placeholder:"Search...",value:t,onChange:r,width:"100%",style:{marginRight:"4px",width:"100%"}}),v.jsx(tt,{disabled:t==="",onClick:()=>n(""),children:"Clear"})]}),v.jsx("h1",{children:"Add Bet"})]})]})};let oC=C(Tr)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-top: 4px;
  padding-bottom: 37px;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
`;const iC=C(Qt)`
  margin: 0 -4px;
`,aC=dw`
  ${fw}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${pk}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${hk}') format('woff2');
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
`,lC=e=>({theme:e.user.theme,background:e.user.background,vintageFont:e.user.vintageFont,fontSize:e.user.fontSize,scanLines:e.user.scanLines,scanLinesIntensity:e.user.scanLinesIntensity}),sC=({theme:e,background:t,vintageFont:n,fontSize:r,scanLines:o,scanLinesIntensity:i})=>v.jsx(VT,{children:v.jsx(Qm,{theme:fk[e],children:v.jsxs(v.Fragment,{children:[v.jsx(aC,{vintageFont:n,fontSize:r,scanLines:o,scanLinesIntensity:i,background:t.value}),v.jsx(M1,{children:v.jsxs(v.Fragment,{children:[v.jsxs(tf,{children:[v.jsx(bn,{exact:!0,path:"/coins/:coin",component:void 0}),v.jsx(bn,{exact:!0,path:"/search",component:void 0}),v.jsx(ZT,{})]}),v.jsxs(tf,{children:[v.jsx(bn,{exact:!0,path:"/",component:SE}),v.jsx(bn,{exact:!0,path:"/search",component:QE}),v.jsx(bn,{exact:!0,path:"/add/bet",component:rC}),v.jsx(bn,{path:"/wallet/",component:fT}),v.jsx(bn,{exact:!0,path:"/settings",component:BT})]})]})})]})})}),uC=ko(lC)(sC);window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/);function cC(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}function vv(e){var t=function(r){var o=r.dispatch,i=r.getState;return function(a){return function(l){return typeof l=="function"?l(o,i,e):a(l)}}};return t}var gv=vv();gv.withExtraArgument=vv;const dC={top:null,info:null,coinsData:null},fC=(e=dC,t)=>{switch(t.type){case x0:const{top:n,info:r}=t.payload;return{...e,top:n,info:r};case w0:return{...e,coinsData:t.payload};default:return e}},pC=null,hC=(e=pC,t)=>{switch(t.type){case bk:let n;const r=t.payload.news;if(t.payload.extend){let o=[];n=[...e||[],...r],n=n.filter(i=>o.includes(i.id)?!1:(o.push(i.id),!0))}else n=r;return n;default:return e}},mC=null,vC=(e=mC,t)=>{switch(t.type){case xk:return t.payload;default:return e}},gC=lx({coins:fC,user:iT,news:hC,events:vC}),yC=ix(gC,cx(gv));Oy.render(v.jsx($m,{store:yC,children:v.jsx(uC,{})}),document.getElementById("root"));cC();
