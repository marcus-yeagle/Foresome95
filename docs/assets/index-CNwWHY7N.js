(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Be(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Kd={exports:{}},Jr={},Yd={exports:{}},ce={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Ku=Object.getOwnPropertySymbols,Gm=Object.prototype.hasOwnProperty,Km=Object.prototype.propertyIsEnumerable;function Ym(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function Jm(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(i){return t[i]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(i){o[i]=i}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Jd=Jm()?Object.assign:function(e,t){for(var n,r=Ym(e),o,i=1;i<arguments.length;i++){n=Object(arguments[i]);for(var a in n)Gm.call(n,a)&&(r[a]=n[a]);if(Ku){o=Ku(n);for(var l=0;l<o.length;l++)Km.call(n,o[l])&&(r[o[l]]=n[o[l]])}}return r};/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ys=Jd,mt=typeof Symbol=="function"&&Symbol.for,Xr=mt?Symbol.for("react.element"):60103,Xm=mt?Symbol.for("react.portal"):60106,qm=mt?Symbol.for("react.fragment"):60107,Zm=mt?Symbol.for("react.strict_mode"):60108,ev=mt?Symbol.for("react.profiler"):60114,tv=mt?Symbol.for("react.provider"):60109,nv=mt?Symbol.for("react.context"):60110,rv=mt?Symbol.for("react.forward_ref"):60112,ov=mt?Symbol.for("react.suspense"):60113,iv=mt?Symbol.for("react.memo"):60115,av=mt?Symbol.for("react.lazy"):60116,Yu=typeof Symbol=="function"&&Symbol.iterator;function qr(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qd={};function dr(e,t,n){this.props=e,this.context=t,this.refs=qd,this.updater=n||Xd}dr.prototype.isReactComponent={};dr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(qr(85));this.updater.enqueueSetState(this,e,t,"setState")};dr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zd(){}Zd.prototype=dr.prototype;function xs(e,t,n){this.props=e,this.context=t,this.refs=qd,this.updater=n||Xd}var ws=xs.prototype=new Zd;ws.constructor=xs;ys(ws,dr.prototype);ws.isPureReactComponent=!0;var bs={current:null},ef=Object.prototype.hasOwnProperty,tf={key:!0,ref:!0,__self:!0,__source:!0};function nf(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)ef.call(t,r)&&!tf.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Xr,type:e,key:i,ref:a,props:o,_owner:bs.current}}function lv(e,t){return{$$typeof:Xr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function As(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xr}function sv(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(n){return t[n]})}var rf=/\/+/g,Xo=[];function of(e,t,n,r){if(Xo.length){var o=Xo.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function af(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>Xo.length&&Xo.push(e)}function ul(e,t,n,r){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Xr:case Xm:i=!0}}if(i)return n(r,e,t===""?"."+ja(e,0):t),1;if(i=0,t=t===""?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){o=e[a];var l=t+ja(o,a);i+=ul(o,l,n,r)}else if(e===null||typeof e!="object"?l=null:(l=Yu&&e[Yu]||e["@@iterator"],l=typeof l=="function"?l:null),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=t+ja(o,a++),i+=ul(o,l,n,r);else if(o==="object")throw n=""+e,Error(qr(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return i}function cl(e,t,n){return e==null?0:ul(e,"",t,n)}function ja(e,t){return typeof e=="object"&&e!==null&&e.key!=null?sv(e.key):t.toString(36)}function uv(e,t){e.func.call(e.context,t,e.count++)}function cv(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?dl(e,r,n,function(i){return i}):e!=null&&(As(e)&&(e=lv(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(rf,"$&/")+"/")+n)),r.push(e))}function dl(e,t,n,r,o){var i="";n!=null&&(i=(""+n).replace(rf,"$&/")+"/"),t=of(t,i,r,o),cl(e,cv,t),af(t)}var lf={current:null};function _t(){var e=lf.current;if(e===null)throw Error(qr(321));return e}var dv={ReactCurrentDispatcher:lf,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:bs,IsSomeRendererActing:{current:!1},assign:ys};ce.Children={map:function(e,t,n){if(e==null)return e;var r=[];return dl(e,r,null,t,n),r},forEach:function(e,t,n){if(e==null)return e;t=of(null,null,t,n),cl(e,uv,t),af(t)},count:function(e){return cl(e,function(){return null},null)},toArray:function(e){var t=[];return dl(e,t,null,function(n){return n}),t},only:function(e){if(!As(e))throw Error(qr(143));return e}};ce.Component=dr;ce.Fragment=qm;ce.Profiler=ev;ce.PureComponent=xs;ce.StrictMode=Zm;ce.Suspense=ov;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dv;ce.cloneElement=function(e,t,n){if(e==null)throw Error(qr(267,e));var r=ys({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=bs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)ef.call(t,u)&&!tf.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var s=0;s<u;s++)l[s]=arguments[s+2];r.children=l}return{$$typeof:Xr,type:e.type,key:o,ref:i,props:r,_owner:a}};ce.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:nv,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:tv,_context:e},e.Consumer=e};ce.createElement=nf;ce.createFactory=function(e){var t=nf.bind(null,e);return t.type=e,t};ce.createRef=function(){return{current:null}};ce.forwardRef=function(e){return{$$typeof:rv,render:e}};ce.isValidElement=As;ce.lazy=function(e){return{$$typeof:av,_ctor:e,_status:-1,_result:null}};ce.memo=function(e,t){return{$$typeof:iv,type:e,compare:t===void 0?null:t}};ce.useCallback=function(e,t){return _t().useCallback(e,t)};ce.useContext=function(e,t){return _t().useContext(e,t)};ce.useDebugValue=function(){};ce.useEffect=function(e,t){return _t().useEffect(e,t)};ce.useImperativeHandle=function(e,t,n){return _t().useImperativeHandle(e,t,n)};ce.useLayoutEffect=function(e,t){return _t().useLayoutEffect(e,t)};ce.useMemo=function(e,t){return _t().useMemo(e,t)};ce.useReducer=function(e,t,n){return _t().useReducer(e,t,n)};ce.useRef=function(e){return _t().useRef(e)};ce.useState=function(e){return _t().useState(e)};ce.version="16.14.0";Yd.exports=ce;var w=Yd.exports;const b=Be(w);/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv=w,sf=60103;Jr.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var Ju=Symbol.for;sf=Ju("react.element"),Jr.Fragment=Ju("react.fragment")}var pv=fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hv=Object.prototype.hasOwnProperty,mv={key:!0,ref:!0,__self:!0,__source:!0};function uf(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)hv.call(t,r)&&!mv.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:sf,type:e,key:i,ref:a,props:o,_owner:pv.current}}Jr.jsx=uf;Jr.jsxs=uf;Kd.exports=Jr;var m=Kd.exports,cf={exports:{}},at={},df={exports:{}},ff={};/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){var t,n,r,o,i;if(typeof window>"u"||typeof MessageChannel!="function"){var a=null,l=null,u=function(){if(a!==null)try{var x=e.unstable_now();a(!0,x),a=null}catch($){throw setTimeout(u,0),$}},s=Date.now();e.unstable_now=function(){return Date.now()-s},t=function(x){a!==null?setTimeout(t,0,x):(a=x,setTimeout(u,0))},n=function(x,$){l=setTimeout(x,$)},r=function(){clearTimeout(l)},o=function(){return!1},i=e.unstable_forceFrameRate=function(){}}else{var c=window.performance,f=window.Date,g=window.setTimeout,k=window.clearTimeout;if(typeof console<"u"){var S=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),typeof S!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if(typeof c=="object"&&typeof c.now=="function")e.unstable_now=function(){return c.now()};else{var C=f.now();e.unstable_now=function(){return f.now()-C}}var d=!1,p=null,h=-1,y=5,A=0;o=function(){return e.unstable_now()>=A},i=function(){},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):y=0<x?Math.floor(1e3/x):5};var E=new MessageChannel,R=E.port2;E.port1.onmessage=function(){if(p!==null){var x=e.unstable_now();A=x+y;try{p(!0,x)?R.postMessage(null):(d=!1,p=null)}catch($){throw R.postMessage(null),$}}else d=!1},t=function(x){p=x,d||(d=!0,R.postMessage(null))},n=function(x,$){h=g(function(){x(e.unstable_now())},$)},r=function(){k(h),h=-1}}function I(x,$){var v=x.length;x.push($);e:for(;;){var L=v-1>>>1,D=x[L];if(D!==void 0&&0<J(D,$))x[L]=$,x[v]=D,v=L;else break e}}function j(x){return x=x[0],x===void 0?null:x}function _(x){var $=x[0];if($!==void 0){var v=x.pop();if(v!==$){x[0]=v;e:for(var L=0,D=x.length;L<D;){var N=2*(L+1)-1,B=x[N],G=N+1,H=x[G];if(B!==void 0&&0>J(B,v))H!==void 0&&0>J(H,B)?(x[L]=H,x[G]=v,L=G):(x[L]=B,x[N]=v,L=N);else if(H!==void 0&&0>J(H,v))x[L]=H,x[G]=v,L=G;else break e}}return $}return null}function J(x,$){var v=x.sortIndex-$.sortIndex;return v!==0?v:x.id-$.id}var K=[],Y=[],oe=1,V=null,z=3,ae=!1,le=!1,Q=!1;function U(x){for(var $=j(Y);$!==null;){if($.callback===null)_(Y);else if($.startTime<=x)_(Y),$.sortIndex=$.expirationTime,I(K,$);else break;$=j(Y)}}function F(x){if(Q=!1,U(x),!le)if(j(K)!==null)le=!0,t(X);else{var $=j(Y);$!==null&&n(F,$.startTime-x)}}function X(x,$){le=!1,Q&&(Q=!1,r()),ae=!0;var v=z;try{for(U($),V=j(K);V!==null&&(!(V.expirationTime>$)||x&&!o());){var L=V.callback;if(L!==null){V.callback=null,z=V.priorityLevel;var D=L(V.expirationTime<=$);$=e.unstable_now(),typeof D=="function"?V.callback=D:V===j(K)&&_(K),U($)}else _(K);V=j(K)}if(V!==null)var N=!0;else{var B=j(Y);B!==null&&n(F,B.startTime-$),N=!1}return N}finally{V=null,z=v,ae=!1}}function O(x){switch(x){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var P=i;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){le||ae||(le=!0,t(X))},e.unstable_getCurrentPriorityLevel=function(){return z},e.unstable_getFirstCallbackNode=function(){return j(K)},e.unstable_next=function(x){switch(z){case 1:case 2:case 3:var $=3;break;default:$=z}var v=z;z=$;try{return x()}finally{z=v}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=P,e.unstable_runWithPriority=function(x,$){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var v=z;z=x;try{return $()}finally{z=v}},e.unstable_scheduleCallback=function(x,$,v){var L=e.unstable_now();if(typeof v=="object"&&v!==null){var D=v.delay;D=typeof D=="number"&&0<D?L+D:L,v=typeof v.timeout=="number"?v.timeout:O(x)}else v=O(x),D=L;return v=D+v,x={id:oe++,callback:$,priorityLevel:x,startTime:D,expirationTime:v,sortIndex:-1},D>L?(x.sortIndex=D,I(Y,x),j(K)===null&&x===j(Y)&&(Q?r():Q=!0,n(F,D-L))):(x.sortIndex=v,I(K,x),le||ae||(le=!0,t(X))),x},e.unstable_shouldYield=function(){var x=e.unstable_now();U(x);var $=j(K);return $!==V&&V!==null&&$!==null&&$.callback!==null&&$.startTime<=x&&$.expirationTime<V.expirationTime||o()},e.unstable_wrapCallback=function(x){var $=z;return function(){var v=z;z=$;try{return x.apply(this,arguments)}finally{z=v}}}})(ff);df.exports=ff;var vv=df.exports;/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ji=w,Fe=Jd,Oe=vv;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!ji)throw Error(M(227));function gv(e,t,n,r,o,i,a,l,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(c){this.onError(c)}}var Tr=!1,qo=null,Zo=!1,fl=null,yv={onError:function(e){Tr=!0,qo=e}};function xv(e,t,n,r,o,i,a,l,u){Tr=!1,qo=null,gv.apply(yv,arguments)}function wv(e,t,n,r,o,i,a,l,u){if(xv.apply(this,arguments),Tr){if(Tr){var s=qo;Tr=!1,qo=null}else throw Error(M(198));Zo||(Zo=!0,fl=s)}}var ks=null,pf=null,hf=null;function Xu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=hf(n),wv(r,t,void 0,e),e.currentTarget=null}var ei=null,_n={};function mf(){if(ei)for(var e in _n){var t=_n[e],n=ei.indexOf(e);if(!(-1<n))throw Error(M(96,e));if(!ti[n]){if(!t.extractEvents)throw Error(M(97,e));ti[n]=t,n=t.eventTypes;for(var r in n){var o=void 0,i=n[r],a=t,l=r;if(pl.hasOwnProperty(l))throw Error(M(99,l));pl[l]=i;var u=i.phasedRegistrationNames;if(u){for(o in u)u.hasOwnProperty(o)&&qu(u[o],a,l);o=!0}else i.registrationName?(qu(i.registrationName,a,l),o=!0):o=!1;if(!o)throw Error(M(98,r,e))}}}}function qu(e,t,n){if(tr[e])throw Error(M(100,e));tr[e]=t,Ss[e]=t.eventTypes[n].dependencies}var ti=[],pl={},tr={},Ss={};function vf(e){var t=!1,n;for(n in e)if(e.hasOwnProperty(n)){var r=e[n];if(!_n.hasOwnProperty(n)||_n[n]!==r){if(_n[n])throw Error(M(102,n));_n[n]=r,t=!0}}t&&mf()}var un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hl=null,Gn=null,Kn=null;function Zu(e){if(e=pf(e)){if(typeof hl!="function")throw Error(M(280));var t=e.stateNode;t&&(t=ks(t),hl(e.stateNode,e.type,t))}}function gf(e){Gn?Kn?Kn.push(e):Kn=[e]:Gn=e}function yf(){if(Gn){var e=Gn,t=Kn;if(Kn=Gn=null,Zu(e),t)for(e=0;e<t.length;e++)Zu(t[e])}}function Es(e,t){return e(t)}function xf(e,t,n,r,o){return e(t,n,r,o)}function Ts(){}var wf=Es,mn=!1,La=!1;function Cs(){(Gn!==null||Kn!==null)&&(Ts(),yf())}function bf(e,t,n){if(La)return e(t,n);La=!0;try{return wf(e,t,n)}finally{La=!1,Cs()}}var bv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ec=Object.prototype.hasOwnProperty,tc={},nc={};function Av(e){return ec.call(nc,e)?!0:ec.call(tc,e)?!1:bv.test(e)?nc[e]=!0:(tc[e]=!0,!1)}function kv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sv(e,t,n,r){if(t===null||typeof t>"u"||kv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,n,r,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new ze(e,0,!1,e,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new ze(t,1,!1,e[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new ze(e,2,!1,e.toLowerCase(),null,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new ze(e,2,!1,e,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new ze(e,3,!1,e.toLowerCase(),null,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new ze(e,3,!0,e,null,!1)});["capture","download"].forEach(function(e){Ne[e]=new ze(e,4,!1,e,null,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new ze(e,6,!1,e,null,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new ze(e,5,!1,e.toLowerCase(),null,!1)});var $s=/[\-:]([a-z])/g;function Ps(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($s,Ps);Ne[t]=new ze(t,1,!1,e,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($s,Ps);Ne[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($s,Ps);Ne[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new ze(e,1,!1,e.toLowerCase(),null,!1)});Ne.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(e){Ne[e]=new ze(e,1,!1,e.toLowerCase(),null,!0)});var dt=ji.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;dt.hasOwnProperty("ReactCurrentDispatcher")||(dt.ReactCurrentDispatcher={current:null});dt.hasOwnProperty("ReactCurrentBatchConfig")||(dt.ReactCurrentBatchConfig={suspense:null});function Rs(e,t,n,r){var o=Ne.hasOwnProperty(t)?Ne[t]:null,i=o!==null?o.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");i||(Sv(t,n,o,r)&&(n=null),r||o===null?Av(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ev=/^(.*)[\\\/]/,Ge=typeof Symbol=="function"&&Symbol.for,yo=Ge?Symbol.for("react.element"):60103,Fn=Ge?Symbol.for("react.portal"):60106,hn=Ge?Symbol.for("react.fragment"):60107,Af=Ge?Symbol.for("react.strict_mode"):60108,jo=Ge?Symbol.for("react.profiler"):60114,kf=Ge?Symbol.for("react.provider"):60109,Sf=Ge?Symbol.for("react.context"):60110,Tv=Ge?Symbol.for("react.concurrent_mode"):60111,Ds=Ge?Symbol.for("react.forward_ref"):60112,Lo=Ge?Symbol.for("react.suspense"):60113,ml=Ge?Symbol.for("react.suspense_list"):60120,Is=Ge?Symbol.for("react.memo"):60115,Ef=Ge?Symbol.for("react.lazy"):60116,Tf=Ge?Symbol.for("react.block"):60121,rc=typeof Symbol=="function"&&Symbol.iterator;function mr(e){return e===null||typeof e!="object"?null:(e=rc&&e[rc]||e["@@iterator"],typeof e=="function"?e:null)}function Cv(e){if(e._status===-1){e._status=0;var t=e._ctor;t=t(),e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}}function jt(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hn:return"Fragment";case Fn:return"Portal";case jo:return"Profiler";case Af:return"StrictMode";case Lo:return"Suspense";case ml:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sf:return"Context.Consumer";case kf:return"Context.Provider";case Ds:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case Is:return jt(e.type);case Tf:return jt(e.render);case Ef:if(e=e._status===1?e._result:null)return jt(e)}return null}function Os(e){var t="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n="";break e;default:var r=e._debugOwner,o=e._debugSource,i=jt(e.type);n=null,r&&(n=jt(r.type)),r=i,i="",o?i=" (at "+o.fileName.replace(Ev,"")+":"+o.lineNumber+")":n&&(i=" (created by "+n+")"),n=`
    in `+(r||"Unknown")+i}t+=n,e=e.return}while(e);return t}function tn(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Cf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $v(e){var t=Cf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xo(e){e._valueTracker||(e._valueTracker=$v(e))}function $f(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Cf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vl(e,t){var n=t.checked;return Fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function oc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=tn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Pf(e,t){t=t.checked,t!=null&&Rs(e,"checked",t,!1)}function gl(e,t){Pf(e,t);var n=tn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yl(e,t.type,n):t.hasOwnProperty("defaultValue")&&yl(e,t.type,tn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ic(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yl(e,t,n){(t!=="number"||e.ownerDocument.activeElement!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function Pv(e){var t="";return ji.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function xl(e,t){return e=Fe({children:void 0},t),(t=Pv(t.children))&&(e.children=t),e}function Yn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+tn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function wl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return Fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ac(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:tn(n)}}function Rf(e,t){var n=tn(t.value),r=tn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var Df={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function If(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?If(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wo,Of=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!==Df.svg||"innerHTML"in e)e.innerHTML=t;else{for(wo=wo||document.createElement("div"),wo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Lr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}function bo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Bn={animationend:bo("Animation","AnimationEnd"),animationiteration:bo("Animation","AnimationIteration"),animationstart:bo("Animation","AnimationStart"),transitionend:bo("Transition","TransitionEnd")},Ma={},Nf={};un&&(Nf=document.createElement("div").style,"AnimationEvent"in window||(delete Bn.animationend.animation,delete Bn.animationiteration.animation,delete Bn.animationstart.animation),"TransitionEvent"in window||delete Bn.transitionend.transition);function Li(e){if(Ma[e])return Ma[e];if(!Bn[e])return e;var t=Bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Nf)return Ma[e]=t[n];return e}var jf=Li("animationend"),Lf=Li("animationiteration"),Mf=Li("animationstart"),_f=Li("transitionend"),kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sc=new(typeof WeakMap=="function"?WeakMap:Map);function Ns(e){var t=sc.get(e);return t===void 0&&(t=new Map,sc.set(e,t)),t}function Nn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.effectTag&1026&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ff(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function uc(e){if(Nn(e)!==e)throw Error(M(188))}function Rv(e){var t=e.alternate;if(!t){if(t=Nn(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return uc(o),e;if(i===r)return uc(o),t;i=i.sibling}throw Error(M(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function Bf(e){if(e=Rv(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function nr(e,t){if(t==null)throw Error(M(30));return e==null?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}function js(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}var vr=null;function Dv(e){if(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(t))for(var r=0;r<t.length&&!e.isPropagationStopped();r++)Xu(e,t[r],n[r]);else t&&Xu(e,t,n);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}function Mi(e){if(e!==null&&(vr=nr(vr,e)),e=vr,vr=null,e){if(js(e,Dv),vr)throw Error(M(95));if(Zo)throw e=fl,Zo=!1,fl=null,e}}function Ls(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}function zf(e){if(!un)return!1;e="on"+e;var t=e in document;return t||(t=document.createElement("div"),t.setAttribute(e,"return;"),t=typeof t[e]=="function"),t}var ni=[];function Uf(e){e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>ni.length&&ni.push(e)}function Hf(e,t,n,r){if(ni.length){var o=ni.pop();return o.topLevelType=e,o.eventSystemFlags=r,o.nativeEvent=t,o.targetInst=n,o}return{topLevelType:e,eventSystemFlags:r,nativeEvent:t,targetInst:n,ancestors:[]}}function Wf(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var r=n;if(r.tag===3)r=r.stateNode.containerInfo;else{for(;r.return;)r=r.return;r=r.tag!==3?null:r.stateNode.containerInfo}if(!r)break;t=n.tag,t!==5&&t!==6||e.ancestors.push(n),n=eo(r)}while(n);for(n=0;n<e.ancestors.length;n++){t=e.ancestors[n];var o=Ls(e.nativeEvent);r=e.topLevelType;var i=e.nativeEvent,a=e.eventSystemFlags;n===0&&(a|=64);for(var l=null,u=0;u<ti.length;u++){var s=ti[u];s&&(s=s.extractEvents(r,t,i,o,a))&&(l=nr(l,s))}Mi(l)}}function Al(e,t,n){if(!n.has(e)){switch(e){case"scroll":Sr(t,"scroll",!0);break;case"focus":case"blur":Sr(t,"focus",!0),Sr(t,"blur",!0),n.set("blur",null),n.set("focus",null);break;case"cancel":case"close":zf(e)&&Sr(t,e,!0);break;case"invalid":case"submit":case"reset":break;default:kr.indexOf(e)===-1&&ye(e,t)}n.set(e,null)}}var Vf,Ms,Qf,kl=!1,gt=[],Gt=null,Kt=null,Yt=null,Mr=new Map,_r=new Map,gr=[],Sl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Iv="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");function Ov(e,t){var n=Ns(t);Sl.forEach(function(r){Al(r,t,n)}),Iv.forEach(function(r){Al(r,t,n)})}function El(e,t,n,r,o){return{blockedOn:e,topLevelType:t,eventSystemFlags:n|32,nativeEvent:o,container:r}}function cc(e,t){switch(e){case"focus":case"blur":Gt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Yt=null;break;case"pointerover":case"pointerout":Mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_r.delete(t.pointerId)}}function yr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e=El(t,n,r,o,i),t!==null&&(t=to(t),t!==null&&Ms(t)),e):(e.eventSystemFlags|=r,e)}function Nv(e,t,n,r,o){switch(t){case"focus":return Gt=yr(Gt,e,t,n,r,o),!0;case"dragenter":return Kt=yr(Kt,e,t,n,r,o),!0;case"mouseover":return Yt=yr(Yt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Mr.set(i,yr(Mr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,_r.set(i,yr(_r.get(i)||null,e,t,n,r,o)),!0}return!1}function jv(e){var t=eo(e.target);if(t!==null){var n=Nn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ff(n),t!==null){e.blockedOn=t,Oe.unstable_runWithPriority(e.priority,function(){Qf(n)});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mo(e){if(e.blockedOn!==null)return!1;var t=Bs(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);if(t!==null){var n=to(t);return n!==null&&Ms(n),e.blockedOn=t,!1}return!0}function dc(e,t,n){Mo(e)&&n.delete(t)}function Lv(){for(kl=!1;0<gt.length;){var e=gt[0];if(e.blockedOn!==null){e=to(e.blockedOn),e!==null&&Vf(e);break}var t=Bs(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);t!==null?e.blockedOn=t:gt.shift()}Gt!==null&&Mo(Gt)&&(Gt=null),Kt!==null&&Mo(Kt)&&(Kt=null),Yt!==null&&Mo(Yt)&&(Yt=null),Mr.forEach(dc),_r.forEach(dc)}function xr(e,t){e.blockedOn===t&&(e.blockedOn=null,kl||(kl=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,Lv)))}function Gf(e){function t(o){return xr(o,e)}if(0<gt.length){xr(gt[0],e);for(var n=1;n<gt.length;n++){var r=gt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Gt!==null&&xr(Gt,e),Kt!==null&&xr(Kt,e),Yt!==null&&xr(Yt,e),Mr.forEach(t),_r.forEach(t),n=0;n<gr.length;n++)r=gr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gr.length&&(n=gr[0],n.blockedOn===null);)jv(n),n.blockedOn===null&&gr.shift()}var Kf={},Yf=new Map,_s=new Map,Mv=["abort","abort",jf,"animationEnd",Lf,"animationIteration",Mf,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",_f,"transitionEnd","waiting","waiting"];function Fs(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],o=e[n+1],i="on"+(o[0].toUpperCase()+o.slice(1));i={phasedRegistrationNames:{bubbled:i,captured:i+"Capture"},dependencies:[r],eventPriority:t},_s.set(r,t),Yf.set(r,i),Kf[o]=i}}Fs("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);Fs("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Fs(Mv,2);for(var fc="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),_a=0;_a<fc.length;_a++)_s.set(fc[_a],0);var _v=Oe.unstable_UserBlockingPriority,Fv=Oe.unstable_runWithPriority,_o=!0;function ye(e,t){Sr(t,e,!1)}function Sr(e,t,n){var r=_s.get(t);switch(r===void 0?2:r){case 0:r=Bv.bind(null,t,1,e);break;case 1:r=zv.bind(null,t,1,e);break;default:r=_i.bind(null,t,1,e)}n?e.addEventListener(t,r,!0):e.addEventListener(t,r,!1)}function Bv(e,t,n,r){mn||Ts();var o=_i,i=mn;mn=!0;try{xf(o,e,t,n,r)}finally{(mn=i)||Cs()}}function zv(e,t,n,r){Fv(_v,_i.bind(null,e,t,n,r))}function _i(e,t,n,r){if(_o)if(0<gt.length&&-1<Sl.indexOf(e))e=El(null,e,t,n,r),gt.push(e);else{var o=Bs(e,t,n,r);if(o===null)cc(e,r);else if(-1<Sl.indexOf(e))e=El(o,e,t,n,r),gt.push(e);else if(!Nv(o,e,t,n,r)){cc(e,r),e=Hf(e,r,null,t);try{bf(Wf,e)}finally{Uf(e)}}}}function Bs(e,t,n,r){if(n=Ls(r),n=eo(n),n!==null){var o=Nn(n);if(o===null)n=null;else{var i=o.tag;if(i===13){if(n=Ff(o),n!==null)return n;n=null}else if(i===3){if(o.stateNode.hydrate)return o.tag===3?o.stateNode.containerInfo:null;n=null}else o!==n&&(n=null)}}e=Hf(e,r,n,t);try{bf(Wf,e)}finally{Uf(e)}return null}var Cr={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uv=["Webkit","ms","Moz","O"];Object.keys(Cr).forEach(function(e){Uv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cr[t]=Cr[e]})});function Jf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cr.hasOwnProperty(e)&&Cr[e]?(""+t).trim():t+"px"}function Xf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Jf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Hv=Fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tl(e,t){if(t){if(Hv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e,""));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62,""))}}function Cl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pc=Df.html;function Pt(e,t){e=e.nodeType===9||e.nodeType===11?e:e.ownerDocument;var n=Ns(e);t=Ss[t];for(var r=0;r<t.length;r++)Al(t[r],e,n)}function ri(){}function $l(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mc(e,t){var n=hc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hc(n)}}function qf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vc(){for(var e=window,t=$l();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$l(e.document)}return t}function Pl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Zf="$",ep="/$",zs="$?",Us="$!",Fa=null,Ba=null;function tp(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Rl(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var za=typeof setTimeout=="function"?setTimeout:void 0,Wv=typeof clearTimeout=="function"?clearTimeout:void 0;function Jn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function gc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===Zf||n===Us||n===zs){if(t===0)return e;t--}else n===ep&&t++}e=e.previousSibling}return null}var Hs=Math.random().toString(36).slice(2),Ut="__reactInternalInstance$"+Hs,oi="__reactEventHandlers$"+Hs,Zr="__reactContainere$"+Hs;function eo(e){var t=e[Ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Zr]||n[Ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=gc(e);e!==null;){if(n=e[Ut])return n;e=gc(e)}return t}e=n,n=e.parentNode}return null}function to(e){return e=e[Ut]||e[Zr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function Ws(e){return e[oi]||null}function Rt(e){do e=e.return;while(e&&e.tag!==5);return e||null}function np(e,t){var n=e.stateNode;if(!n)return null;var r=ks(n);if(!r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}function yc(e,t,n){(t=np(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=nr(n._dispatchListeners,t),n._dispatchInstances=nr(n._dispatchInstances,e))}function Vv(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,n=[];t;)n.push(t),t=Rt(t);for(t=n.length;0<t--;)yc(n[t],"captured",e);for(t=0;t<n.length;t++)yc(n[t],"bubbled",e)}}function Dl(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=np(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=nr(n._dispatchListeners,t),n._dispatchInstances=nr(n._dispatchInstances,e))}function Qv(e){e&&e.dispatchConfig.registrationName&&Dl(e._targetInst,null,e)}function rr(e){js(e,Vv)}var Ht=null,Vs=null,Fo=null;function rp(){if(Fo)return Fo;var e,t=Vs,n=t.length,r,o="value"in Ht?Ht.value:Ht.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Fo=o.slice(e,1<r?1-r:void 0)}function Bo(){return!0}function ii(){return!1}function Ze(e,t,n,r){this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface;for(var o in e)e.hasOwnProperty(o)&&((t=e[o])?this[o]=t(n):o==="target"?this.target=r:this[o]=n[o]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Bo:ii,this.isPropagationStopped=ii,this}Fe(Ze.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Bo)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Bo)},persist:function(){this.isPersistent=Bo},isPersistent:ii,destructor:function(){var e=this.constructor.Interface,t;for(t in e)this[t]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=ii,this._dispatchInstances=this._dispatchListeners=null}});Ze.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};Ze.extend=function(e){function t(){}function n(){return r.apply(this,arguments)}var r=this;t.prototype=r.prototype;var o=new t;return Fe(o,n.prototype),n.prototype=o,n.prototype.constructor=n,n.Interface=Fe({},r.Interface,e),n.extend=r.extend,op(n),n};op(Ze);function Gv(e,t,n,r){if(this.eventPool.length){var o=this.eventPool.pop();return this.call(o,e,t,n,r),o}return new this(e,t,n,r)}function Kv(e){if(!(e instanceof this))throw Error(M(279));e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function op(e){e.eventPool=[],e.getPooled=Gv,e.release=Kv}var Yv=Ze.extend({data:null}),Jv=Ze.extend({data:null}),Xv=[9,13,27,32],Qs=un&&"CompositionEvent"in window,$r=null;un&&"documentMode"in document&&($r=document.documentMode);var qv=un&&"TextEvent"in window&&!$r,ip=un&&(!Qs||$r&&8<$r&&11>=$r),xc=" ",Ct={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},wc=!1;function ap(e,t){switch(e){case"keyup":return Xv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function lp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zn=!1;function Zv(e,t){switch(e){case"compositionend":return lp(t);case"keypress":return t.which!==32?null:(wc=!0,xc);case"textInput":return e=t.data,e===xc&&wc?null:e;default:return null}}function e0(e,t){if(zn)return e==="compositionend"||!Qs&&ap(e,t)?(e=rp(),Fo=Vs=Ht=null,zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ip&&t.locale!=="ko"?null:t.data;default:return null}}var t0={eventTypes:Ct,extractEvents:function(e,t,n,r){var o;if(Qs)e:{switch(e){case"compositionstart":var i=Ct.compositionStart;break e;case"compositionend":i=Ct.compositionEnd;break e;case"compositionupdate":i=Ct.compositionUpdate;break e}i=void 0}else zn?ap(e,n)&&(i=Ct.compositionEnd):e==="keydown"&&n.keyCode===229&&(i=Ct.compositionStart);return i?(ip&&n.locale!=="ko"&&(zn||i!==Ct.compositionStart?i===Ct.compositionEnd&&zn&&(o=rp()):(Ht=r,Vs="value"in Ht?Ht.value:Ht.textContent,zn=!0)),i=Yv.getPooled(i,t,n,r),o?i.data=o:(o=lp(n),o!==null&&(i.data=o)),rr(i),o=i):o=null,(e=qv?Zv(e,n):e0(e,n))?(t=Jv.getPooled(Ct.beforeInput,t,n,r),t.data=e,rr(t)):t=null,o===null?t:t===null?o:[o,t]}},n0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!n0[e.type]:t==="textarea"}var up={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function cp(e,t,n){return e=Ze.getPooled(up.change,e,t,n),e.type="change",gf(n),rr(e),e}var Pr=null,Fr=null;function r0(e){Mi(e)}function Fi(e){var t=Cn(e);if($f(t))return e}function o0(e,t){if(e==="change")return t}var Il=!1;un&&(Il=zf("input")&&(!document.documentMode||9<document.documentMode));function bc(){Pr&&(Pr.detachEvent("onpropertychange",dp),Fr=Pr=null)}function dp(e){if(e.propertyName==="value"&&Fi(Fr))if(e=cp(Fr,e,Ls(e)),mn)Mi(e);else{mn=!0;try{Es(r0,e)}finally{mn=!1,Cs()}}}function i0(e,t,n){e==="focus"?(bc(),Pr=t,Fr=n,Pr.attachEvent("onpropertychange",dp)):e==="blur"&&bc()}function a0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fi(Fr)}function l0(e,t){if(e==="click")return Fi(t)}function s0(e,t){if(e==="input"||e==="change")return Fi(t)}var u0={eventTypes:up,_isInputEventSupported:Il,extractEvents:function(e,t,n,r){var o=t?Cn(t):window,i=o.nodeName&&o.nodeName.toLowerCase();if(i==="select"||i==="input"&&o.type==="file")var a=o0;else if(sp(o))if(Il)a=s0;else{a=a0;var l=i0}else(i=o.nodeName)&&i.toLowerCase()==="input"&&(o.type==="checkbox"||o.type==="radio")&&(a=l0);if(a&&(a=a(e,t)))return cp(a,n,r);l&&l(e,o,t),e==="blur"&&(e=o._wrapperState)&&e.controlled&&o.type==="number"&&yl(o,"number",o.value)}},no=Ze.extend({view:null,detail:null}),c0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=c0[e])?!!t[e]:!1}function Gs(){return d0}var Ac=0,kc=0,Sc=!1,Ec=!1,ro=no.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Gs,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var t=Ac;return Ac=e.screenX,Sc?e.type==="mousemove"?e.screenX-t:0:(Sc=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var t=kc;return kc=e.screenY,Ec?e.type==="mousemove"?e.screenY-t:0:(Ec=!0,0)}}),fp=ro.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),wr={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},f0={eventTypes:wr,extractEvents:function(e,t,n,r,o){var i=e==="mouseover"||e==="pointerover",a=e==="mouseout"||e==="pointerout";if(i&&!(o&32)&&(n.relatedTarget||n.fromElement)||!a&&!i)return null;if(i=r.window===r?r:(i=r.ownerDocument)?i.defaultView||i.parentWindow:window,a){if(a=t,t=(t=n.relatedTarget||n.toElement)?eo(t):null,t!==null){var l=Nn(t);(t!==l||t.tag!==5&&t.tag!==6)&&(t=null)}}else a=null;if(a===t)return null;if(e==="mouseout"||e==="mouseover")var u=ro,s=wr.mouseLeave,c=wr.mouseEnter,f="mouse";else(e==="pointerout"||e==="pointerover")&&(u=fp,s=wr.pointerLeave,c=wr.pointerEnter,f="pointer");if(e=a==null?i:Cn(a),i=t==null?i:Cn(t),s=u.getPooled(s,a,n,r),s.type=f+"leave",s.target=e,s.relatedTarget=i,n=u.getPooled(c,t,n,r),n.type=f+"enter",n.target=i,n.relatedTarget=e,r=a,f=t,r&&f)e:{for(u=r,c=f,a=0,e=u;e;e=Rt(e))a++;for(e=0,t=c;t;t=Rt(t))e++;for(;0<a-e;)u=Rt(u),a--;for(;0<e-a;)c=Rt(c),e--;for(;a--;){if(u===c||u===c.alternate)break e;u=Rt(u),c=Rt(c)}u=null}else u=null;for(c=u,u=[];r&&r!==c&&(a=r.alternate,!(a!==null&&a===c));)u.push(r),r=Rt(r);for(r=[];f&&f!==c&&(a=f.alternate,!(a!==null&&a===c));)r.push(f),f=Rt(f);for(f=0;f<u.length;f++)Dl(u[f],"bubbled",s);for(f=r.length;0<f--;)Dl(r[f],"captured",n);return o&64?[s,n]:[s]}};function p0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $n=typeof Object.is=="function"?Object.is:p0,h0=Object.prototype.hasOwnProperty;function Br(e,t){if($n(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!h0.call(t,n[r])||!$n(e[n[r]],t[n[r]]))return!1;return!0}var m0=un&&"documentMode"in document&&11>=document.documentMode,pp={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Un=null,Ol=null,Rr=null,Nl=!1;function Tc(e,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;return Nl||Un==null||Un!==$l(n)?null:(n=Un,"selectionStart"in n&&Pl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Rr&&Br(Rr,n)?null:(Rr=n,e=Ze.getPooled(pp.select,Ol,e,t),e.type="select",e.target=Un,rr(e),e))}var v0={eventTypes:pp,extractEvents:function(e,t,n,r,o,i){if(o=i||(r.window===r?r.document:r.nodeType===9?r:r.ownerDocument),!(i=!o)){e:{o=Ns(o),i=Ss.onSelect;for(var a=0;a<i.length;a++)if(!o.has(i[a])){o=!1;break e}o=!0}i=!o}if(i)return null;switch(o=t?Cn(t):window,e){case"focus":(sp(o)||o.contentEditable==="true")&&(Un=o,Ol=t,Rr=null);break;case"blur":Rr=Ol=Un=null;break;case"mousedown":Nl=!0;break;case"contextmenu":case"mouseup":case"dragend":return Nl=!1,Tc(n,r);case"selectionchange":if(m0)break;case"keydown":case"keyup":return Tc(n,r)}return null}},g0=Ze.extend({animationName:null,elapsedTime:null,pseudoElement:null}),y0=Ze.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),x0=no.extend({relatedTarget:null});function zo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}var w0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},A0=no.extend({key:function(e){if(e.key){var t=w0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?b0[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Gs,charCode:function(e){return e.type==="keypress"?zo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),k0=ro.extend({dataTransfer:null}),S0=no.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Gs}),E0=Ze.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),T0=ro.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),C0={eventTypes:Kf,extractEvents:function(e,t,n,r){var o=Yf.get(e);if(!o)return null;switch(e){case"keypress":if(zo(n)===0)return null;case"keydown":case"keyup":e=A0;break;case"blur":case"focus":e=x0;break;case"click":if(n.button===2)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=ro;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=k0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=S0;break;case jf:case Lf:case Mf:e=g0;break;case _f:e=E0;break;case"scroll":e=no;break;case"wheel":e=T0;break;case"copy":case"cut":case"paste":e=y0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=fp;break;default:e=Ze}return t=e.getPooled(o,t,n,r),rr(t),t}};if(ei)throw Error(M(101));ei=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));mf();var $0=to;ks=Ws;pf=$0;hf=Cn;vf({SimpleEventPlugin:C0,EnterLeaveEventPlugin:f0,ChangeEventPlugin:u0,SelectEventPlugin:v0,BeforeInputEventPlugin:t0});var jl=[],Hn=-1;function ge(e){0>Hn||(e.current=jl[Hn],jl[Hn]=null,Hn--)}function ke(e,t){Hn++,jl[Hn]=e.current,e.current=t}var nn={},_e={current:nn},We={current:!1},Pn=nn;function or(e,t){var n=e.type.contextTypes;if(!n)return nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ve(e){return e=e.childContextTypes,e!=null}function ai(){ge(We),ge(_e)}function Cc(e,t,n){if(_e.current!==nn)throw Error(M(168));ke(_e,t),ke(We,n)}function hp(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in e))throw Error(M(108,jt(t)||"Unknown",o));return Fe({},n,{},r)}function Uo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nn,Pn=_e.current,ke(_e,e),ke(We,We.current),!0}function $c(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=hp(e,t,Pn),r.__reactInternalMemoizedMergedChildContext=e,ge(We),ge(_e),ke(_e,e)):ge(We),ke(We,n)}var P0=Oe.unstable_runWithPriority,Ks=Oe.unstable_scheduleCallback,mp=Oe.unstable_cancelCallback,Pc=Oe.unstable_requestPaint,Ll=Oe.unstable_now,R0=Oe.unstable_getCurrentPriorityLevel,Bi=Oe.unstable_ImmediatePriority,vp=Oe.unstable_UserBlockingPriority,gp=Oe.unstable_NormalPriority,yp=Oe.unstable_LowPriority,xp=Oe.unstable_IdlePriority,wp={},D0=Oe.unstable_shouldYield,I0=Pc!==void 0?Pc:function(){},Dt=null,Ho=null,Ua=!1,Rc=Ll(),rt=1e4>Rc?Ll:function(){return Ll()-Rc};function zi(){switch(R0()){case Bi:return 99;case vp:return 98;case gp:return 97;case yp:return 96;case xp:return 95;default:throw Error(M(332))}}function bp(e){switch(e){case 99:return Bi;case 98:return vp;case 97:return gp;case 96:return yp;case 95:return xp;default:throw Error(M(332))}}function rn(e,t){return e=bp(e),P0(e,t)}function Ap(e,t,n){return e=bp(e),Ks(e,t,n)}function Dc(e){return Dt===null?(Dt=[e],Ho=Ks(Bi,kp)):Dt.push(e),wp}function Et(){if(Ho!==null){var e=Ho;Ho=null,mp(e)}kp()}function kp(){if(!Ua&&Dt!==null){Ua=!0;var e=0;try{var t=Dt;rn(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),Dt=null}catch(n){throw Dt!==null&&(Dt=Dt.slice(e+1)),Ks(Bi,Et),n}finally{Ua=!1}}}function Wo(e,t,n){return n/=10,1073741821-(((1073741821-e+t/10)/n|0)+1)*n}function ut(e,t){if(e&&e.defaultProps){t=Fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n])}return t}var li={current:null},si=null,Wn=null,ui=null;function Ys(){ui=Wn=si=null}function Js(e){var t=li.current;ge(li),e.type._context._currentValue=t}function Sp(e,t){for(;e!==null;){var n=e.alternate;if(e.childExpirationTime<t)e.childExpirationTime=t,n!==null&&n.childExpirationTime<t&&(n.childExpirationTime=t);else if(n!==null&&n.childExpirationTime<t)n.childExpirationTime=t;else break;e=e.return}}function Xn(e,t){si=e,ui=Wn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.expirationTime>=t&&(yt=!0),e.firstContext=null)}function it(e,t){if(ui!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(ui=e,t=1073741823),t={context:e,observedBits:t,next:null},Wn===null){if(si===null)throw Error(M(308));Wn=t,si.dependencies={expirationTime:0,firstContext:t,responders:null}}else Wn=Wn.next=t;return e._currentValue}var zt=!1;function Xs(e){e.updateQueue={baseState:e.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}function qs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,baseQueue:e.baseQueue,shared:e.shared,effects:e.effects})}function Jt(e,t){return e={expirationTime:e,suspenseConfig:t,tag:0,payload:null,callback:null,next:null},e.next=e}function Xt(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function Ic(e,t){var n=e.alternate;n!==null&&qs(n,e),e=e.updateQueue,n=e.baseQueue,n===null?(e.baseQueue=t.next=t,t.next=t):(t.next=n.next,n.next=t)}function zr(e,t,n,r){var o=e.updateQueue;zt=!1;var i=o.baseQueue,a=o.shared.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}i=a,o.shared.pending=null,l=e.alternate,l!==null&&(l=l.updateQueue,l!==null&&(l.baseQueue=a))}if(i!==null){l=i.next;var u=o.baseState,s=0,c=null,f=null,g=null;if(l!==null){var k=l;do{if(a=k.expirationTime,a<r){var S={expirationTime:k.expirationTime,suspenseConfig:k.suspenseConfig,tag:k.tag,payload:k.payload,callback:k.callback,next:null};g===null?(f=g=S,c=u):g=g.next=S,a>s&&(s=a)}else{g!==null&&(g=g.next={expirationTime:1073741823,suspenseConfig:k.suspenseConfig,tag:k.tag,payload:k.payload,callback:k.callback,next:null}),eh(a,k.suspenseConfig);e:{var C=e,d=k;switch(a=t,S=n,d.tag){case 1:if(C=d.payload,typeof C=="function"){u=C.call(S,u,a);break e}u=C;break e;case 3:C.effectTag=C.effectTag&-4097|64;case 0:if(C=d.payload,a=typeof C=="function"?C.call(S,u,a):C,a==null)break e;u=Fe({},u,a);break e;case 2:zt=!0}}k.callback!==null&&(e.effectTag|=32,a=o.effects,a===null?o.effects=[k]:a.push(k))}if(k=k.next,k===null||k===l){if(a=o.shared.pending,a===null)break;k=i.next=a.next,a.next=l,o.baseQueue=i=a,o.shared.pending=null}}while(!0)}g===null?c=u:g.next=f,o.baseState=c,o.baseQueue=g,Qi(s),e.expirationTime=s,e.memoizedState=u}}function Oc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=o,o=n,typeof r!="function")throw Error(M(191,r));r.call(o)}}}var Dr=dt.ReactCurrentBatchConfig,Ep=new ji.Component().refs;function ci(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Fe({},t,n),e.memoizedState=n,e.expirationTime===0&&(e.updateQueue.baseState=n)}var Ui={isMounted:function(e){return(e=e._reactInternalFiber)?Nn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternalFiber;var r=bt(),o=Dr.suspense;r=Sn(r,e,o),o=Jt(r,o),o.payload=t,n!=null&&(o.callback=n),Xt(e,o),Zt(e,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternalFiber;var r=bt(),o=Dr.suspense;r=Sn(r,e,o),o=Jt(r,o),o.tag=1,o.payload=t,n!=null&&(o.callback=n),Xt(e,o),Zt(e,r)},enqueueForceUpdate:function(e,t){e=e._reactInternalFiber;var n=bt(),r=Dr.suspense;n=Sn(n,e,r),r=Jt(n,r),r.tag=2,t!=null&&(r.callback=t),Xt(e,r),Zt(e,n)}};function Nc(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Br(n,r)||!Br(o,i):!0}function Tp(e,t,n){var r=!1,o=nn,i=t.contextType;return typeof i=="object"&&i!==null?i=it(i):(o=Ve(t)?Pn:_e.current,r=t.contextTypes,i=(r=r!=null)?or(e,o):nn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ui,e.stateNode=t,t._reactInternalFiber=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function jc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ui.enqueueReplaceState(t,t.state,null)}function Ml(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Ep,Xs(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=it(i):(i=Ve(t)?Pn:_e.current,o.context=or(e,i)),zr(e,n,o,r),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ci(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ui.enqueueReplaceState(o,o.state,null),zr(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.effectTag|=4)}var Ao=Array.isArray;function br(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var a=r.refs;a===Ep&&(a=r.refs={}),i===null?delete a[o]:a[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function ko(e,t){if(e.type!=="textarea")throw Error(M(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t,""))}function Cp(e){function t(d,p){if(e){var h=d.lastEffect;h!==null?(h.nextEffect=p,d.lastEffect=p):d.firstEffect=d.lastEffect=p,p.nextEffect=null,p.effectTag=8}}function n(d,p){if(!e)return null;for(;p!==null;)t(d,p),p=p.sibling;return null}function r(d,p){for(d=new Map;p!==null;)p.key!==null?d.set(p.key,p):d.set(p.index,p),p=p.sibling;return d}function o(d,p){return d=Rn(d,p),d.index=0,d.sibling=null,d}function i(d,p,h){return d.index=h,e?(h=d.alternate,h!==null?(h=h.index,h<p?(d.effectTag=2,p):h):(d.effectTag=2,p)):p}function a(d){return e&&d.alternate===null&&(d.effectTag=2),d}function l(d,p,h,y){return p===null||p.tag!==6?(p=Ka(h,d.mode,y),p.return=d,p):(p=o(p,h),p.return=d,p)}function u(d,p,h,y){return p!==null&&p.elementType===h.type?(y=o(p,h.props),y.ref=br(d,p,h),y.return=d,y):(y=Ko(h.type,h.key,h.props,null,d.mode,y),y.ref=br(d,p,h),y.return=d,y)}function s(d,p,h,y){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=Ya(h,d.mode,y),p.return=d,p):(p=o(p,h.children||[]),p.return=d,p)}function c(d,p,h,y,A){return p===null||p.tag!==7?(p=Qt(h,d.mode,y,A),p.return=d,p):(p=o(p,h),p.return=d,p)}function f(d,p,h){if(typeof p=="string"||typeof p=="number")return p=Ka(""+p,d.mode,h),p.return=d,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case yo:return h=Ko(p.type,p.key,p.props,null,d.mode,h),h.ref=br(d,null,p),h.return=d,h;case Fn:return p=Ya(p,d.mode,h),p.return=d,p}if(Ao(p)||mr(p))return p=Qt(p,d.mode,h,null),p.return=d,p;ko(d,p)}return null}function g(d,p,h,y){var A=p!==null?p.key:null;if(typeof h=="string"||typeof h=="number")return A!==null?null:l(d,p,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case yo:return h.key===A?h.type===hn?c(d,p,h.props.children,y,A):u(d,p,h,y):null;case Fn:return h.key===A?s(d,p,h,y):null}if(Ao(h)||mr(h))return A!==null?null:c(d,p,h,y,null);ko(d,h)}return null}function k(d,p,h,y,A){if(typeof y=="string"||typeof y=="number")return d=d.get(h)||null,l(p,d,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case yo:return d=d.get(y.key===null?h:y.key)||null,y.type===hn?c(p,d,y.props.children,A,y.key):u(p,d,y,A);case Fn:return d=d.get(y.key===null?h:y.key)||null,s(p,d,y,A)}if(Ao(y)||mr(y))return d=d.get(h)||null,c(p,d,y,A,null);ko(p,y)}return null}function S(d,p,h,y){for(var A=null,E=null,R=p,I=p=0,j=null;R!==null&&I<h.length;I++){R.index>I?(j=R,R=null):j=R.sibling;var _=g(d,R,h[I],y);if(_===null){R===null&&(R=j);break}e&&R&&_.alternate===null&&t(d,R),p=i(_,p,I),E===null?A=_:E.sibling=_,E=_,R=j}if(I===h.length)return n(d,R),A;if(R===null){for(;I<h.length;I++)R=f(d,h[I],y),R!==null&&(p=i(R,p,I),E===null?A=R:E.sibling=R,E=R);return A}for(R=r(d,R);I<h.length;I++)j=k(R,d,I,h[I],y),j!==null&&(e&&j.alternate!==null&&R.delete(j.key===null?I:j.key),p=i(j,p,I),E===null?A=j:E.sibling=j,E=j);return e&&R.forEach(function(J){return t(d,J)}),A}function C(d,p,h,y){var A=mr(h);if(typeof A!="function")throw Error(M(150));if(h=A.call(h),h==null)throw Error(M(151));for(var E=A=null,R=p,I=p=0,j=null,_=h.next();R!==null&&!_.done;I++,_=h.next()){R.index>I?(j=R,R=null):j=R.sibling;var J=g(d,R,_.value,y);if(J===null){R===null&&(R=j);break}e&&R&&J.alternate===null&&t(d,R),p=i(J,p,I),E===null?A=J:E.sibling=J,E=J,R=j}if(_.done)return n(d,R),A;if(R===null){for(;!_.done;I++,_=h.next())_=f(d,_.value,y),_!==null&&(p=i(_,p,I),E===null?A=_:E.sibling=_,E=_);return A}for(R=r(d,R);!_.done;I++,_=h.next())_=k(R,d,I,_.value,y),_!==null&&(e&&_.alternate!==null&&R.delete(_.key===null?I:_.key),p=i(_,p,I),E===null?A=_:E.sibling=_,E=_);return e&&R.forEach(function(K){return t(d,K)}),A}return function(d,p,h,y){var A=typeof h=="object"&&h!==null&&h.type===hn&&h.key===null;A&&(h=h.props.children);var E=typeof h=="object"&&h!==null;if(E)switch(h.$$typeof){case yo:e:{for(E=h.key,A=p;A!==null;){if(A.key===E){switch(A.tag){case 7:if(h.type===hn){n(d,A.sibling),p=o(A,h.props.children),p.return=d,d=p;break e}break;default:if(A.elementType===h.type){n(d,A.sibling),p=o(A,h.props),p.ref=br(d,A,h),p.return=d,d=p;break e}}n(d,A);break}else t(d,A);A=A.sibling}h.type===hn?(p=Qt(h.props.children,d.mode,y,h.key),p.return=d,d=p):(y=Ko(h.type,h.key,h.props,null,d.mode,y),y.ref=br(d,p,h),y.return=d,d=y)}return a(d);case Fn:e:{for(A=h.key;p!==null;){if(p.key===A)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(d,p.sibling),p=o(p,h.children||[]),p.return=d,d=p;break e}else{n(d,p);break}else t(d,p);p=p.sibling}p=Ya(h,d.mode,y),p.return=d,d=p}return a(d)}if(typeof h=="string"||typeof h=="number")return h=""+h,p!==null&&p.tag===6?(n(d,p.sibling),p=o(p,h),p.return=d,d=p):(n(d,p),p=Ka(h,d.mode,y),p.return=d,d=p),a(d);if(Ao(h))return S(d,p,h,y);if(mr(h))return C(d,p,h,y);if(E&&ko(d,h),typeof h>"u"&&!A)switch(d.tag){case 1:case 0:throw d=d.type,Error(M(152,d.displayName||d.name||"Component"))}return n(d,p)}}var ir=Cp(!0),Zs=Cp(!1),oo={},wt={current:oo},Ur={current:oo},Hr={current:oo};function vn(e){if(e===oo)throw Error(M(174));return e}function _l(e,t){switch(ke(Hr,t),ke(Ur,e),ke(wt,oo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:bl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=bl(t,e)}ge(wt),ke(wt,t)}function ar(){ge(wt),ge(Ur),ge(Hr)}function Lc(e){vn(Hr.current);var t=vn(wt.current),n=bl(t,e.type);t!==n&&(ke(Ur,e),ke(wt,n))}function eu(e){Ur.current===e&&(ge(wt),ge(Ur))}var xe={current:0};function di(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===zs||n.data===Us))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.effectTag&64)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function tu(e,t){return{responder:e,props:t}}var Vo=dt.ReactCurrentDispatcher,ot=dt.ReactCurrentBatchConfig,Wt=0,Ee=null,Le=null,Me=null,fi=!1;function Ke(){throw Error(M(321))}function nu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!$n(e[n],t[n]))return!1;return!0}function ru(e,t,n,r,o,i){if(Wt=i,Ee=t,t.memoizedState=null,t.updateQueue=null,t.expirationTime=0,Vo.current=e===null||e.memoizedState===null?O0:N0,e=n(r,o),t.expirationTime===Wt){i=0;do{if(t.expirationTime=0,!(25>i))throw Error(M(301));i+=1,Me=Le=null,t.updateQueue=null,Vo.current=j0,e=n(r,o)}while(t.expirationTime===Wt)}if(Vo.current=mi,t=Le!==null&&Le.next!==null,Wt=0,Me=Le=Ee=null,fi=!1,t)throw Error(M(300));return e}function qn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?Ee.memoizedState=Me=e:Me=Me.next=e,Me}function fr(){if(Le===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Me===null?Ee.memoizedState:Me.next;if(t!==null)Me=t,Le=e;else{if(e===null)throw Error(M(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Me===null?Ee.memoizedState=Me=e:Me=Me.next=e}return Me}function bn(e,t){return typeof t=="function"?t(e):t}function So(e){var t=fr(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=Le,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){o=o.next,r=r.baseState;var l=a=i=null,u=o;do{var s=u.expirationTime;if(s<Wt){var c={expirationTime:u.expirationTime,suspenseConfig:u.suspenseConfig,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null};l===null?(a=l=c,i=r):l=l.next=c,s>Ee.expirationTime&&(Ee.expirationTime=s,Qi(s))}else l!==null&&(l=l.next={expirationTime:1073741823,suspenseConfig:u.suspenseConfig,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null}),eh(s,u.suspenseConfig),r=u.eagerReducer===e?u.eagerState:e(r,u.action);u=u.next}while(u!==null&&u!==o);l===null?i=r:l.next=a,$n(r,t.memoizedState)||(yt=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=l,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function Eo(e){var t=fr(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);$n(i,t.memoizedState)||(yt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ha(e){var t=qn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:bn,lastRenderedState:e},e=e.dispatch=Op.bind(null,Ee,e),[t.memoizedState,e]}function Fl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $p(){return fr().memoizedState}function Bl(e,t,n,r){var o=qn();Ee.effectTag|=e,o.memoizedState=Fl(1|t,n,void 0,r===void 0?null:r)}function ou(e,t,n,r){var o=fr();r=r===void 0?null:r;var i=void 0;if(Le!==null){var a=Le.memoizedState;if(i=a.destroy,r!==null&&nu(r,a.deps)){Fl(t,n,i,r);return}}Ee.effectTag|=e,o.memoizedState=Fl(1|t,n,i,r)}function Mc(e,t){return Bl(516,4,e,t)}function pi(e,t){return ou(516,4,e,t)}function Pp(e,t){return ou(4,2,e,t)}function Rp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Dp(e,t,n){return n=n!=null?n.concat([e]):null,ou(4,2,Rp.bind(null,t,e),n)}function iu(){}function _c(e,t){return qn().memoizedState=[e,t===void 0?null:t],e}function hi(e,t){var n=fr();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ip(e,t){var n=fr();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function au(e,t,n){var r=zi();rn(98>r?98:r,function(){e(!0)}),rn(97<r?97:r,function(){var o=ot.suspense;ot.suspense=t===void 0?null:t;try{e(!1),n()}finally{ot.suspense=o}})}function Op(e,t,n){var r=bt(),o=Dr.suspense;r=Sn(r,e,o),o={expirationTime:r,suspenseConfig:o,action:n,eagerReducer:null,eagerState:null,next:null};var i=t.pending;if(i===null?o.next=o:(o.next=i.next,i.next=o),t.pending=o,i=e.alternate,e===Ee||i!==null&&i===Ee)fi=!0,o.expirationTime=Wt,Ee.expirationTime=Wt;else{if(e.expirationTime===0&&(i===null||i.expirationTime===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.eagerReducer=i,o.eagerState=l,$n(l,a))return}catch{}finally{}Zt(e,r)}}var mi={readContext:it,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useResponder:Ke,useDeferredValue:Ke,useTransition:Ke},O0={readContext:it,useCallback:_c,useContext:it,useEffect:Mc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Bl(4,2,Rp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Bl(4,2,e,t)},useMemo:function(e,t){var n=qn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=Op.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=qn();return e={current:e},t.memoizedState=e},useState:Ha,useDebugValue:iu,useResponder:tu,useDeferredValue:function(e,t){var n=Ha(e),r=n[0],o=n[1];return Mc(function(){var i=ot.suspense;ot.suspense=t===void 0?null:t;try{o(e)}finally{ot.suspense=i}},[e,t]),r},useTransition:function(e){var t=Ha(!1),n=t[0];return t=t[1],[_c(au.bind(null,t,e),[t,e]),n]}},N0={readContext:it,useCallback:hi,useContext:it,useEffect:pi,useImperativeHandle:Dp,useLayoutEffect:Pp,useMemo:Ip,useReducer:So,useRef:$p,useState:function(){return So(bn)},useDebugValue:iu,useResponder:tu,useDeferredValue:function(e,t){var n=So(bn),r=n[0],o=n[1];return pi(function(){var i=ot.suspense;ot.suspense=t===void 0?null:t;try{o(e)}finally{ot.suspense=i}},[e,t]),r},useTransition:function(e){var t=So(bn),n=t[0];return t=t[1],[hi(au.bind(null,t,e),[t,e]),n]}},j0={readContext:it,useCallback:hi,useContext:it,useEffect:pi,useImperativeHandle:Dp,useLayoutEffect:Pp,useMemo:Ip,useReducer:Eo,useRef:$p,useState:function(){return Eo(bn)},useDebugValue:iu,useResponder:tu,useDeferredValue:function(e,t){var n=Eo(bn),r=n[0],o=n[1];return pi(function(){var i=ot.suspense;ot.suspense=t===void 0?null:t;try{o(e)}finally{ot.suspense=i}},[e,t]),r},useTransition:function(e){var t=Eo(bn),n=t[0];return t=t[1],[hi(au.bind(null,t,e),[t,e]),n]}},Ot=null,Vt=null,An=!1;function Np(e,t){var n=xt(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function Fc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function zl(e){if(An){var t=Vt;if(t){var n=t;if(!Fc(e,t)){if(t=Jn(n.nextSibling),!t||!Fc(e,t)){e.effectTag=e.effectTag&-1025|2,An=!1,Ot=e;return}Np(Ot,n)}Ot=e,Vt=Jn(t.firstChild)}else e.effectTag=e.effectTag&-1025|2,An=!1,Ot=e}}function Bc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ot=e}function To(e){if(e!==Ot)return!1;if(!An)return Bc(e),An=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!Rl(t,e.memoizedProps))for(t=Vt;t;)Np(e,t),t=Jn(t.nextSibling);if(Bc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===ep){if(t===0){Vt=Jn(e.nextSibling);break e}t--}else n!==Zf&&n!==Us&&n!==zs||t++}e=e.nextSibling}Vt=null}}else Vt=Ot?Jn(e.stateNode.nextSibling):null;return!0}function Wa(){Vt=Ot=null,An=!1}var L0=dt.ReactCurrentOwner,yt=!1;function Ye(e,t,n,r){t.child=e===null?Zs(t,null,n,r):ir(t,e.child,n,r)}function zc(e,t,n,r,o){n=n.render;var i=t.ref;return Xn(t,o),r=ru(e,t,n,r,i,o),e!==null&&!yt?(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=o&&(e.expirationTime=0),Nt(e,t,o)):(t.effectTag|=1,Ye(e,t,r,o),t.child)}function Uc(e,t,n,r,o,i){if(e===null){var a=n.type;return typeof a=="function"&&!du(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,jp(e,t,a,r,o,i)):(e=Ko(n.type,null,r,null,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}return a=e.child,o<i&&(o=a.memoizedProps,n=n.compare,n=n!==null?n:Br,n(o,r)&&e.ref===t.ref)?Nt(e,t,i):(t.effectTag|=1,e=Rn(a,r),e.ref=t.ref,e.return=t,t.child=e)}function jp(e,t,n,r,o,i){return e!==null&&Br(e.memoizedProps,r)&&e.ref===t.ref&&(yt=!1,o<i)?(t.expirationTime=e.expirationTime,Nt(e,t,i)):Ul(e,t,n,r,i)}function Lp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.effectTag|=128)}function Ul(e,t,n,r,o){var i=Ve(n)?Pn:_e.current;return i=or(t,i),Xn(t,o),n=ru(e,t,n,r,i,o),e!==null&&!yt?(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=o&&(e.expirationTime=0),Nt(e,t,o)):(t.effectTag|=1,Ye(e,t,n,o),t.child)}function Hc(e,t,n,r,o){if(Ve(n)){var i=!0;Uo(t)}else i=!1;if(Xn(t,o),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),Tp(t,n,r),Ml(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var u=a.context,s=n.contextType;typeof s=="object"&&s!==null?s=it(s):(s=Ve(n)?Pn:_e.current,s=or(t,s));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==s)&&jc(t,a,r,s),zt=!1;var g=t.memoizedState;a.state=g,zr(t,r,a,o),u=t.memoizedState,l!==r||g!==u||We.current||zt?(typeof c=="function"&&(ci(t,n,c,r),u=t.memoizedState),(l=zt||Nc(t,n,l,r,g,u,s))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.effectTag|=4)):(typeof a.componentDidMount=="function"&&(t.effectTag|=4),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=s,r=l):(typeof a.componentDidMount=="function"&&(t.effectTag|=4),r=!1)}else a=t.stateNode,qs(e,t),l=t.memoizedProps,a.props=t.type===t.elementType?l:ut(t.type,l),u=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=it(s):(s=Ve(n)?Pn:_e.current,s=or(t,s)),c=n.getDerivedStateFromProps,(f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==s)&&jc(t,a,r,s),zt=!1,u=t.memoizedState,a.state=u,zr(t,r,a,o),g=t.memoizedState,l!==r||u!==g||We.current||zt?(typeof c=="function"&&(ci(t,n,c,r),g=t.memoizedState),(c=zt||Nc(t,n,l,r,u,g,s))?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,s)),typeof a.componentDidUpdate=="function"&&(t.effectTag|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.effectTag|=256)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&u===e.memoizedState||(t.effectTag|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&u===e.memoizedState||(t.effectTag|=256),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&u===e.memoizedState||(t.effectTag|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&u===e.memoizedState||(t.effectTag|=256),r=!1);return Hl(e,t,n,r,i,o)}function Hl(e,t,n,r,o,i){Lp(e,t);var a=(t.effectTag&64)!==0;if(!r&&!a)return o&&$c(t,n,!1),Nt(e,t,i);r=t.stateNode,L0.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.effectTag|=1,e!==null&&a?(t.child=ir(t,e.child,null,i),t.child=ir(t,null,l,i)):Ye(e,t,l,i),t.memoizedState=r.state,o&&$c(t,n,!0),t.child}function Wc(e){var t=e.stateNode;t.pendingContext?Cc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Cc(e,t.context,!1),_l(e,t.containerInfo)}var Va={dehydrated:null,retryTime:0};function Vc(e,t,n){var r=t.mode,o=t.pendingProps,i=xe.current,a=!1,l;if((l=(t.effectTag&64)!==0)||(l=(i&2)!==0&&(e===null||e.memoizedState!==null)),l?(a=!0,t.effectTag&=-65):e!==null&&e.memoizedState===null||o.fallback===void 0||o.unstable_avoidThisFallback===!0||(i|=1),ke(xe,i&1),e===null){if(o.fallback!==void 0&&zl(t),a){if(a=o.fallback,o=Qt(null,r,0,null),o.return=t,!(t.mode&2))for(e=t.memoizedState!==null?t.child.child:t.child,o.child=e;e!==null;)e.return=o,e=e.sibling;return n=Qt(a,r,n,null),n.return=t,o.sibling=n,t.memoizedState=Va,t.child=o,n}return r=o.children,t.memoizedState=null,t.child=Zs(t,null,r,n)}if(e.memoizedState!==null){if(e=e.child,r=e.sibling,a){if(o=o.fallback,n=Rn(e,e.pendingProps),n.return=t,!(t.mode&2)&&(a=t.memoizedState!==null?t.child.child:t.child,a!==e.child))for(n.child=a;a!==null;)a.return=n,a=a.sibling;return r=Rn(r,o),r.return=t,n.sibling=r,n.childExpirationTime=0,t.memoizedState=Va,t.child=n,r}return n=ir(t,e.child,o.children,n),t.memoizedState=null,t.child=n}if(e=e.child,a){if(a=o.fallback,o=Qt(null,r,0,null),o.return=t,o.child=e,e!==null&&(e.return=o),!(t.mode&2))for(e=t.memoizedState!==null?t.child.child:t.child,o.child=e;e!==null;)e.return=o,e=e.sibling;return n=Qt(a,r,n,null),n.return=t,o.sibling=n,n.effectTag|=2,o.childExpirationTime=0,t.memoizedState=Va,t.child=o,n}return t.memoizedState=null,t.child=ir(t,e,o.children,n)}function Qc(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;n!==null&&n.expirationTime<t&&(n.expirationTime=t),Sp(e.return,t)}function Qa(e,t,n,r,o,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailExpiration:0,tailMode:o,lastEffect:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailExpiration=0,a.tailMode=o,a.lastEffect=i)}function Gc(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ye(e,t,r.children,n),r=xe.current,r&2)r=r&1|2,t.effectTag|=64;else{if(e!==null&&e.effectTag&64)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qc(e,n);else if(e.tag===19)Qc(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ke(xe,r),!(t.mode&2))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&di(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Qa(t,!1,o,n,i,t.lastEffect);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&di(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Qa(t,!0,n,null,i,t.lastEffect);break;case"together":Qa(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function Nt(e,t,n){e!==null&&(t.dependencies=e.dependencies);var r=t.expirationTime;if(r!==0&&Qi(r),t.childExpirationTime<n)return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=Rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}var Mp,Wl,_p,Fp;Mp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wl=function(){};_p=function(e,t,n,r,o){var i=e.memoizedProps;if(i!==r){var a=t.stateNode;switch(vn(wt.current),e=null,n){case"input":i=vl(a,i),r=vl(a,r),e=[];break;case"option":i=xl(a,i),r=xl(a,r),e=[];break;case"select":i=Fe({},i,{value:void 0}),r=Fe({},r,{value:void 0}),e=[];break;case"textarea":i=wl(a,i),r=wl(a,r),e=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(a.onclick=ri)}Tl(n,r);var l,u;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style")for(u in a=i[l],a)a.hasOwnProperty(u)&&(n||(n={}),n[u]="");else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(tr.hasOwnProperty(l)?e||(e=[]):(e=e||[]).push(l,null));for(l in r){var s=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&s!==a&&(s!=null||a!=null))if(l==="style")if(a){for(u in a)!a.hasOwnProperty(u)||s&&s.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in s)s.hasOwnProperty(u)&&a[u]!==s[u]&&(n||(n={}),n[u]=s[u])}else n||(e||(e=[]),e.push(l,n)),n=s;else l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(e=e||[]).push(l,s)):l==="children"?a===s||typeof s!="string"&&typeof s!="number"||(e=e||[]).push(l,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(tr.hasOwnProperty(l)?(s!=null&&Pt(o,l),e||a===s||(e=[])):(e=e||[]).push(l,s))}n&&(e=e||[]).push("style",n),o=e,(t.updateQueue=o)&&(t.effectTag|=4)}};Fp=function(e,t,n,r){n!==r&&(t.effectTag|=4)};function Co(e,t){switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function M0(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ve(t.type)&&ai(),null;case 3:return ar(),ge(We),ge(_e),n=t.stateNode,n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),e!==null&&e.child!==null||!To(t)||(t.effectTag|=4),Wl(t),null;case 5:eu(t),n=vn(Hr.current);var o=t.type;if(e!==null&&t.stateNode!=null)_p(e,t,o,r,n),e.ref!==t.ref&&(t.effectTag|=128);else{if(!r){if(t.stateNode===null)throw Error(M(166));return null}if(e=vn(wt.current),To(t)){r=t.stateNode,o=t.type;var i=t.memoizedProps;switch(r[Ut]=t,r[oi]=i,o){case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(e=0;e<kr.length;e++)ye(kr[e],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"form":ye("reset",r),ye("submit",r);break;case"details":ye("toggle",r);break;case"input":oc(r,i),ye("invalid",r),Pt(n,"onChange");break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ye("invalid",r),Pt(n,"onChange");break;case"textarea":ac(r,i),ye("invalid",r),Pt(n,"onChange")}Tl(o,i),e=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(e=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(e=["children",""+l]):tr.hasOwnProperty(a)&&l!=null&&Pt(n,a)}switch(o){case"input":xo(r),ic(r,i,!0);break;case"textarea":xo(r),lc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ri)}n=e,t.updateQueue=n,n!==null&&(t.effectTag|=4)}else{switch(a=n.nodeType===9?n:n.ownerDocument,e===pc&&(e=If(o)),e===pc?o==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(o,{is:r.is}):(e=a.createElement(o),o==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,o),e[Ut]=t,e[oi]=r,Mp(e,t,!1,!1),t.stateNode=e,a=Cl(o,r),o){case"iframe":case"object":case"embed":ye("load",e),l=r;break;case"video":case"audio":for(l=0;l<kr.length;l++)ye(kr[l],e);l=r;break;case"source":ye("error",e),l=r;break;case"img":case"image":case"link":ye("error",e),ye("load",e),l=r;break;case"form":ye("reset",e),ye("submit",e),l=r;break;case"details":ye("toggle",e),l=r;break;case"input":oc(e,r),l=vl(e,r),ye("invalid",e),Pt(n,"onChange");break;case"option":l=xl(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Fe({},r,{value:void 0}),ye("invalid",e),Pt(n,"onChange");break;case"textarea":ac(e,r),l=wl(e,r),ye("invalid",e),Pt(n,"onChange");break;default:l=r}Tl(o,l);var u=l;for(i in u)if(u.hasOwnProperty(i)){var s=u[i];i==="style"?Xf(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Of(e,s)):i==="children"?typeof s=="string"?(o!=="textarea"||s!=="")&&Lr(e,s):typeof s=="number"&&Lr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(tr.hasOwnProperty(i)?s!=null&&Pt(n,i):s!=null&&Rs(e,i,s,a))}switch(o){case"input":xo(e),ic(e,r,!1);break;case"textarea":xo(e),lc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+tn(r.value));break;case"select":e.multiple=!!r.multiple,n=r.value,n!=null?Yn(e,!!r.multiple,n,!1):r.defaultValue!=null&&Yn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ri)}tp(o,r)&&(t.effectTag|=4)}t.ref!==null&&(t.effectTag|=128)}return null;case 6:if(e&&t.stateNode!=null)Fp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));n=vn(Hr.current),vn(wt.current),To(t)?(n=t.stateNode,r=t.memoizedProps,n[Ut]=t,n.nodeValue!==r&&(t.effectTag|=4)):(n=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),n[Ut]=t,t.stateNode=n)}return null;case 13:return ge(xe),r=t.memoizedState,t.effectTag&64?(t.expirationTime=n,t):(n=r!==null,r=!1,e===null?t.memoizedProps.fallback!==void 0&&To(t):(o=e.memoizedState,r=o!==null,n||o===null||(o=e.child.sibling,o!==null&&(i=t.firstEffect,i!==null?(t.firstEffect=o,o.nextEffect=i):(t.firstEffect=t.lastEffect=o,o.nextEffect=null),o.effectTag=8))),n&&!r&&t.mode&2&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||xe.current&1?Te===kn&&(Te=yi):((Te===kn||Te===yi)&&(Te=Hi),Vr!==0&&Xe!==null&&(xn(Xe,Qe),ih(Xe,Vr)))),(n||r)&&(t.effectTag|=4),null);case 4:return ar(),Wl(t),null;case 10:return Js(t),null;case 17:return Ve(t.type)&&ai(),null;case 19:if(ge(xe),r=t.memoizedState,r===null)return null;if(o=(t.effectTag&64)!==0,i=r.rendering,i===null){if(o)Co(r,!1);else if(Te!==kn||e!==null&&e.effectTag&64)for(i=t.child;i!==null;){if(e=di(i),e!==null){for(t.effectTag|=64,Co(r,!1),o=e.updateQueue,o!==null&&(t.updateQueue=o,t.effectTag|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=t.child;r!==null;)o=r,i=n,o.effectTag&=2,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null,e=o.alternate,e===null?(o.childExpirationTime=0,o.expirationTime=i,o.child=null,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null):(o.childExpirationTime=e.childExpirationTime,o.expirationTime=e.expirationTime,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,i=e.dependencies,o.dependencies=i===null?null:{expirationTime:i.expirationTime,firstContext:i.firstContext,responders:i.responders}),r=r.sibling;return ke(xe,xe.current&1|2),t.child}i=i.sibling}}else{if(!o)if(e=di(i),e!==null){if(t.effectTag|=64,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.effectTag|=4),Co(r,!0),r.tail===null&&r.tailMode==="hidden"&&!i.alternate)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*rt()-r.renderingStartTime>r.tailExpiration&&1<n&&(t.effectTag|=64,o=!0,Co(r,!1),t.expirationTime=t.childExpirationTime=n-1);r.isBackwards?(i.sibling=t.child,t.child=i):(n=r.last,n!==null?n.sibling=i:t.child=i,r.last=i)}return r.tail!==null?(r.tailExpiration===0&&(r.tailExpiration=rt()+500),n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=rt(),n.sibling=null,t=xe.current,ke(xe,o?t&1|2:t&1),n):null}throw Error(M(156,t.tag))}function _0(e){switch(e.tag){case 1:Ve(e.type)&&ai();var t=e.effectTag;return t&4096?(e.effectTag=t&-4097|64,e):null;case 3:if(ar(),ge(We),ge(_e),t=e.effectTag,t&64)throw Error(M(285));return e.effectTag=t&-4097|64,e;case 5:return eu(e),null;case 13:return ge(xe),t=e.effectTag,t&4096?(e.effectTag=t&-4097|64,e):null;case 19:return ge(xe),null;case 4:return ar(),null;case 10:return Js(e),null;default:return null}}function lu(e,t){return{value:e,source:t,stack:Os(t)}}var F0=typeof WeakSet=="function"?WeakSet:Set;function Vl(e,t){var n=t.source,r=t.stack;r===null&&n!==null&&(r=Os(n)),n!==null&&jt(n.type),t=t.value,e!==null&&e.tag===1&&jt(e.type);try{console.error(t)}catch(o){setTimeout(function(){throw o})}}function B0(e,t){try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(n){En(e,n)}}function Kc(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){En(e,n)}else t.current=null}function z0(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.effectTag&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:ut(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(M(163))}function Bp(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.destroy;n.destroy=void 0,r!==void 0&&r()}n=n.next}while(n!==t)}}function zp(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function U0(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:zp(3,n);return;case 1:if(e=n.stateNode,n.effectTag&4)if(t===null)e.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:ut(n.type,t.memoizedProps);e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}t=n.updateQueue,t!==null&&Oc(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}Oc(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.effectTag&4&&tp(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Gf(n))));return;case 19:case 17:case 20:case 21:return}throw Error(M(163))}function Yc(e,t,n){switch(typeof Zl=="function"&&Zl(t),t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var r=e.next;rn(97<n?97:n,function(){var o=r;do{var i=o.destroy;if(i!==void 0){var a=t;try{i()}catch(l){En(a,l)}}o=o.next}while(o!==r)})}break;case 1:Kc(t),n=t.stateNode,typeof n.componentWillUnmount=="function"&&B0(t,n);break;case 5:Kc(t);break;case 4:Hp(e,t,n)}}function Up(e){var t=e.alternate;e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.alternate=null,e.firstEffect=null,e.lastEffect=null,e.pendingProps=null,e.memoizedProps=null,e.stateNode=null,t!==null&&Up(t)}function Jc(e){return e.tag===5||e.tag===3||e.tag===4}function Xc(e){e:{for(var t=e.return;t!==null;){if(Jc(t)){var n=t;break e}t=t.return}throw Error(M(160))}switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(M(161))}n.effectTag&16&&(Lr(t,""),n.effectTag&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||Jc(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.effectTag&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.effectTag&2)){n=n.stateNode;break e}}r?Ql(e,n,t):Gl(e,n,t)}function Ql(e,t,n){var r=e.tag,o=r===5||r===6;if(o)e=o?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ri));else if(r!==4&&(e=e.child,e!==null))for(Ql(e,t,n),e=e.sibling;e!==null;)Ql(e,t,n),e=e.sibling}function Gl(e,t,n){var r=e.tag,o=r===5||r===6;if(o)e=o?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gl(e,t,n),e=e.sibling;e!==null;)Gl(e,t,n),e=e.sibling}function Hp(e,t,n){for(var r=t,o=!1,i,a;;){if(!o){o=r.return;e:for(;;){if(o===null)throw Error(M(160));switch(i=o.stateNode,o.tag){case 5:a=!1;break e;case 3:i=i.containerInfo,a=!0;break e;case 4:i=i.containerInfo,a=!0;break e}o=o.return}o=!0}if(r.tag===5||r.tag===6){e:for(var l=e,u=r,s=n,c=u;;)if(Yc(l,c,s),c.child!==null&&c.tag!==4)c.child.return=c,c=c.child;else{if(c===u)break e;for(;c.sibling===null;){if(c.return===null||c.return===u)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}a?(l=i,u=r.stateNode,l.nodeType===8?l.parentNode.removeChild(u):l.removeChild(u)):i.removeChild(r.stateNode)}else if(r.tag===4){if(r.child!==null){i=r.stateNode.containerInfo,a=!0,r.child.return=r,r=r.child;continue}}else if(Yc(e,r,n),r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return,r.tag===4&&(o=!1)}r.sibling.return=r.return,r=r.sibling}}function Ga(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:Bp(3,t);return;case 1:return;case 5:var n=t.stateNode;if(n!=null){var r=t.memoizedProps,o=e!==null?e.memoizedProps:r;e=t.type;var i=t.updateQueue;if(t.updateQueue=null,i!==null){for(n[oi]=r,e==="input"&&r.type==="radio"&&r.name!=null&&Pf(n,r),Cl(e,o),t=Cl(e,r),o=0;o<i.length;o+=2){var a=i[o],l=i[o+1];a==="style"?Xf(n,l):a==="dangerouslySetInnerHTML"?Of(n,l):a==="children"?Lr(n,l):Rs(n,a,l,t)}switch(e){case"input":gl(n,r);break;case"textarea":Rf(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,e=r.value,e!=null?Yn(n,!!r.multiple,e,!1):t!==!!r.multiple&&(r.defaultValue!=null?Yn(n,!!r.multiple,r.defaultValue,!0):Yn(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(M(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:t=t.stateNode,t.hydrate&&(t.hydrate=!1,Gf(t.containerInfo));return;case 12:return;case 13:if(n=t,t.memoizedState===null?r=!1:(r=!0,n=t.child,cu=rt()),n!==null)e:for(e=n;;){if(e.tag===5)i=e.stateNode,r?(i=i.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(i=e.stateNode,o=e.memoizedProps.style,o=o!=null&&o.hasOwnProperty("display")?o.display:null,i.style.display=Jf("display",o));else if(e.tag===6)e.stateNode.nodeValue=r?"":e.memoizedProps;else if(e.tag===13&&e.memoizedState!==null&&e.memoizedState.dehydrated===null){i=e.child.sibling,i.return=e,e=i;continue}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}qc(t);return;case 19:qc(t);return;case 17:return}throw Error(M(163))}function qc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new F0),t.forEach(function(r){var o=q0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}var H0=typeof WeakMap=="function"?WeakMap:Map;function Wp(e,t,n){n=Jt(n,null),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){bi||(bi=!0,Kl=r),Vl(e,t)},n}function Vp(e,t,n){n=Jt(n,null),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return Vl(e,t),r(o)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(qt===null?qt=new Set([this]):qt.add(this),Vl(e,t));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}var W0=Math.ceil,vi=dt.ReactCurrentDispatcher,Qp=dt.ReactCurrentOwner,Ce=0,su=8,ft=16,At=32,kn=0,gi=1,Gp=2,yi=3,Hi=4,uu=5,ne=Ce,Xe=null,ie=null,Qe=0,Te=kn,Wi=null,It=1073741823,Wr=1073741823,xi=null,Vr=0,wi=!1,cu=0,Kp=500,q=null,bi=!1,Kl=null,qt=null,Ai=!1,Ir=null,Er=90,gn=null,Or=0,Yl=null,Qo=0;function bt(){return(ne&(ft|At))!==Ce?1073741821-(rt()/10|0):Qo!==0?Qo:Qo=1073741821-(rt()/10|0)}function Sn(e,t,n){if(t=t.mode,!(t&2))return 1073741823;var r=zi();if(!(t&4))return r===99?1073741823:1073741822;if((ne&ft)!==Ce)return Qe;if(n!==null)e=Wo(e,n.timeoutMs|0||5e3,250);else switch(r){case 99:e=1073741823;break;case 98:e=Wo(e,150,100);break;case 97:case 96:e=Wo(e,5e3,250);break;case 95:e=2;break;default:throw Error(M(326))}return Xe!==null&&e===Qe&&--e,e}function Zt(e,t){if(50<Or)throw Or=0,Yl=null,Error(M(185));if(e=Vi(e,t),e!==null){var n=zi();t===1073741823?(ne&su)!==Ce&&(ne&(ft|At))===Ce?Jl(e):(qe(e),ne===Ce&&Et()):qe(e),(ne&4)===Ce||n!==98&&n!==99||(gn===null?gn=new Map([[e,t]]):(n=gn.get(e),(n===void 0||n>t)&&gn.set(e,t)))}}function Vi(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;n!==null&&n.expirationTime<t&&(n.expirationTime=t);var r=e.return,o=null;if(r===null&&e.tag===3)o=e.stateNode;else for(;r!==null;){if(n=r.alternate,r.childExpirationTime<t&&(r.childExpirationTime=t),n!==null&&n.childExpirationTime<t&&(n.childExpirationTime=t),r.return===null&&r.tag===3){o=r.stateNode;break}r=r.return}return o!==null&&(Xe===o&&(Qi(t),Te===Hi&&xn(o,Qe)),ih(o,t)),o}function Go(e){var t=e.lastExpiredTime;if(t!==0||(t=e.firstPendingTime,!oh(e,t)))return t;var n=e.lastPingedTime;return e=e.nextKnownPendingLevel,e=n>e?n:e,2>=e&&t!==e?0:e}function qe(e){if(e.lastExpiredTime!==0)e.callbackExpirationTime=1073741823,e.callbackPriority=99,e.callbackNode=Dc(Jl.bind(null,e));else{var t=Go(e),n=e.callbackNode;if(t===0)n!==null&&(e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90);else{var r=bt();if(t===1073741823?r=99:t===1||t===2?r=95:(r=10*(1073741821-t)-10*(1073741821-r),r=0>=r?99:250>=r?98:5250>=r?97:95),n!==null){var o=e.callbackPriority;if(e.callbackExpirationTime===t&&o>=r)return;n!==wp&&mp(n)}e.callbackExpirationTime=t,e.callbackPriority=r,t=t===1073741823?Dc(Jl.bind(null,e)):Ap(r,Yp.bind(null,e),{timeout:10*(1073741821-t)-rt()}),e.callbackNode=t}}}function Yp(e,t){if(Qo=0,t)return t=bt(),es(e,t),qe(e),null;var n=Go(e);if(n!==0){if(t=e.callbackNode,(ne&(ft|At))!==Ce)throw Error(M(327));if(pr(),e===Xe&&n===Qe||yn(e,n),ie!==null){var r=ne;ne|=ft;var o=Zp();do try{G0();break}catch(l){qp(e,l)}while(!0);if(Ys(),ne=r,vi.current=o,Te===gi)throw t=Wi,yn(e,n),xn(e,n),qe(e),t;if(ie===null)switch(o=e.finishedWork=e.current.alternate,e.finishedExpirationTime=n,r=Te,Xe=null,r){case kn:case gi:throw Error(M(345));case Gp:es(e,2<n?2:n);break;case yi:if(xn(e,n),r=e.lastSuspendedTime,n===r&&(e.nextKnownPendingLevel=Xl(o)),It===1073741823&&(o=cu+Kp-rt(),10<o)){if(wi){var i=e.lastPingedTime;if(i===0||i>=n){e.lastPingedTime=n,yn(e,n);break}}if(i=Go(e),i!==0&&i!==n)break;if(r!==0&&r!==n){e.lastPingedTime=r;break}e.timeoutHandle=za(fn.bind(null,e),o);break}fn(e);break;case Hi:if(xn(e,n),r=e.lastSuspendedTime,n===r&&(e.nextKnownPendingLevel=Xl(o)),wi&&(o=e.lastPingedTime,o===0||o>=n)){e.lastPingedTime=n,yn(e,n);break}if(o=Go(e),o!==0&&o!==n)break;if(r!==0&&r!==n){e.lastPingedTime=r;break}if(Wr!==1073741823?r=10*(1073741821-Wr)-rt():It===1073741823?r=0:(r=10*(1073741821-It)-5e3,o=rt(),n=10*(1073741821-n)-o,r=o-r,0>r&&(r=0),r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*W0(r/1960))-r,n<r&&(r=n)),10<r){e.timeoutHandle=za(fn.bind(null,e),r);break}fn(e);break;case uu:if(It!==1073741823&&xi!==null){i=It;var a=xi;if(r=a.busyMinDurationMs|0,0>=r?r=0:(o=a.busyDelayMs|0,i=rt()-(10*(1073741821-i)-(a.timeoutMs|0||5e3)),r=i<=o?0:o+r-i),10<r){xn(e,n),e.timeoutHandle=za(fn.bind(null,e),r);break}}fn(e);break;default:throw Error(M(329))}if(qe(e),e.callbackNode===t)return Yp.bind(null,e)}}return null}function Jl(e){var t=e.lastExpiredTime;if(t=t!==0?t:1073741823,(ne&(ft|At))!==Ce)throw Error(M(327));if(pr(),e===Xe&&t===Qe||yn(e,t),ie!==null){var n=ne;ne|=ft;var r=Zp();do try{Q0();break}catch(o){qp(e,o)}while(!0);if(Ys(),ne=n,vi.current=r,Te===gi)throw n=Wi,yn(e,t),xn(e,t),qe(e),n;if(ie!==null)throw Error(M(261));e.finishedWork=e.current.alternate,e.finishedExpirationTime=t,Xe=null,fn(e),qe(e)}return null}function V0(){if(gn!==null){var e=gn;gn=null,e.forEach(function(t,n){es(n,t),qe(n)}),Et()}}function Jp(e,t){var n=ne;ne|=1;try{return e(t)}finally{ne=n,ne===Ce&&Et()}}function Xp(e,t){var n=ne;ne&=-2,ne|=su;try{return e(t)}finally{ne=n,ne===Ce&&Et()}}function yn(e,t){e.finishedWork=null,e.finishedExpirationTime=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wv(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&ai();break;case 3:ar(),ge(We),ge(_e);break;case 5:eu(r);break;case 4:ar();break;case 13:ge(xe);break;case 19:ge(xe);break;case 10:Js(r)}n=n.return}Xe=e,ie=Rn(e.current,null),Qe=t,Te=kn,Wi=null,Wr=It=1073741823,xi=null,Vr=0,wi=!1}function qp(e,t){do{try{if(Ys(),Vo.current=mi,fi)for(var n=Ee.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}if(Wt=0,Me=Le=Ee=null,fi=!1,ie===null||ie.return===null)return Te=gi,Wi=t,ie=null;e:{var o=e,i=ie.return,a=ie,l=t;if(t=Qe,a.effectTag|=2048,a.firstEffect=a.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l;if(!(a.mode&2)){var s=a.alternate;s?(a.updateQueue=s.updateQueue,a.memoizedState=s.memoizedState,a.expirationTime=s.expirationTime):(a.updateQueue=null,a.memoizedState=null)}var c=(xe.current&1)!==0,f=i;do{var g;if(g=f.tag===13){var k=f.memoizedState;if(k!==null)g=k.dehydrated!==null;else{var S=f.memoizedProps;g=S.fallback===void 0?!1:S.unstable_avoidThisFallback!==!0?!0:!c}}if(g){var C=f.updateQueue;if(C===null){var d=new Set;d.add(u),f.updateQueue=d}else C.add(u);if(!(f.mode&2)){if(f.effectTag|=64,a.effectTag&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var p=Jt(1073741823,null);p.tag=2,Xt(a,p)}a.expirationTime=1073741823;break e}l=void 0,a=t;var h=o.pingCache;if(h===null?(h=o.pingCache=new H0,l=new Set,h.set(u,l)):(l=h.get(u),l===void 0&&(l=new Set,h.set(u,l))),!l.has(a)){l.add(a);var y=X0.bind(null,o,u,a);u.then(y,y)}f.effectTag|=4096,f.expirationTime=t;break e}f=f.return}while(f!==null);l=Error((jt(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`+Os(a))}Te!==uu&&(Te=Gp),l=lu(l,a),f=i;do{switch(f.tag){case 3:u=l,f.effectTag|=4096,f.expirationTime=t;var A=Wp(f,u,t);Ic(f,A);break e;case 1:u=l;var E=f.type,R=f.stateNode;if(!(f.effectTag&64)&&(typeof E.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(qt===null||!qt.has(R)))){f.effectTag|=4096,f.expirationTime=t;var I=Vp(f,u,t);Ic(f,I);break e}}f=f.return}while(f!==null)}ie=nh(ie)}catch(j){t=j;continue}break}while(!0)}function Zp(){var e=vi.current;return vi.current=mi,e===null?mi:e}function eh(e,t){e<It&&2<e&&(It=e),t!==null&&e<Wr&&2<e&&(Wr=e,xi=t)}function Qi(e){e>Vr&&(Vr=e)}function Q0(){for(;ie!==null;)ie=th(ie)}function G0(){for(;ie!==null&&!D0();)ie=th(ie)}function th(e){var t=rh(e.alternate,e,Qe);return e.memoizedProps=e.pendingProps,t===null&&(t=nh(e)),Qp.current=null,t}function nh(e){ie=e;do{var t=ie.alternate;if(e=ie.return,ie.effectTag&2048){if(t=_0(ie),t!==null)return t.effectTag&=2047,t;e!==null&&(e.firstEffect=e.lastEffect=null,e.effectTag|=2048)}else{if(t=M0(t,ie,Qe),Qe===1||ie.childExpirationTime!==1){for(var n=0,r=ie.child;r!==null;){var o=r.expirationTime,i=r.childExpirationTime;o>n&&(n=o),i>n&&(n=i),r=r.sibling}ie.childExpirationTime=n}if(t!==null)return t;e!==null&&!(e.effectTag&2048)&&(e.firstEffect===null&&(e.firstEffect=ie.firstEffect),ie.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=ie.firstEffect),e.lastEffect=ie.lastEffect),1<ie.effectTag&&(e.lastEffect!==null?e.lastEffect.nextEffect=ie:e.firstEffect=ie,e.lastEffect=ie))}if(t=ie.sibling,t!==null)return t;ie=e}while(ie!==null);return Te===kn&&(Te=uu),null}function Xl(e){var t=e.expirationTime;return e=e.childExpirationTime,t>e?t:e}function fn(e){var t=zi();return rn(99,K0.bind(null,e,t)),null}function K0(e,t){do pr();while(Ir!==null);if((ne&(ft|At))!==Ce)throw Error(M(327));var n=e.finishedWork,r=e.finishedExpirationTime;if(n===null)return null;if(e.finishedWork=null,e.finishedExpirationTime=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90,e.nextKnownPendingLevel=0;var o=Xl(n);if(e.firstPendingTime=o,r<=e.lastSuspendedTime?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:r<=e.firstSuspendedTime&&(e.firstSuspendedTime=r-1),r<=e.lastPingedTime&&(e.lastPingedTime=0),r<=e.lastExpiredTime&&(e.lastExpiredTime=0),e===Xe&&(ie=Xe=null,Qe=0),1<n.effectTag?n.lastEffect!==null?(n.lastEffect.nextEffect=n,o=n.firstEffect):o=n:o=n.firstEffect,o!==null){var i=ne;ne|=At,Qp.current=null,Fa=_o;var a=vc();if(Pl(a)){if("selectionStart"in a)var l={start:a.selectionStart,end:a.selectionEnd};else e:{l=(l=a.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var s=u.anchorOffset,c=u.focusNode;u=u.focusOffset;try{l.nodeType,c.nodeType}catch{l=null;break e}var f=0,g=-1,k=-1,S=0,C=0,d=a,p=null;t:for(;;){for(var h;d!==l||s!==0&&d.nodeType!==3||(g=f+s),d!==c||u!==0&&d.nodeType!==3||(k=f+u),d.nodeType===3&&(f+=d.nodeValue.length),(h=d.firstChild)!==null;)p=d,d=h;for(;;){if(d===a)break t;if(p===l&&++S===s&&(g=f),p===c&&++C===u&&(k=f),(h=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=h}l=g===-1||k===-1?null:{start:g,end:k}}else l=null}l=l||{start:0,end:0}}else l=null;Ba={activeElementDetached:null,focusedElem:a,selectionRange:l},_o=!1,q=o;do try{Y0()}catch(_){if(q===null)throw Error(M(330));En(q,_),q=q.nextEffect}while(q!==null);q=o;do try{for(a=e,l=t;q!==null;){var y=q.effectTag;if(y&16&&Lr(q.stateNode,""),y&128){var A=q.alternate;if(A!==null){var E=A.ref;E!==null&&(typeof E=="function"?E(null):E.current=null)}}switch(y&1038){case 2:Xc(q),q.effectTag&=-3;break;case 6:Xc(q),q.effectTag&=-3,Ga(q.alternate,q);break;case 1024:q.effectTag&=-1025;break;case 1028:q.effectTag&=-1025,Ga(q.alternate,q);break;case 4:Ga(q.alternate,q);break;case 8:s=q,Hp(a,s,l),Up(s)}q=q.nextEffect}}catch(_){if(q===null)throw Error(M(330));En(q,_),q=q.nextEffect}while(q!==null);if(E=Ba,A=vc(),y=E.focusedElem,l=E.selectionRange,A!==y&&y&&y.ownerDocument&&qf(y.ownerDocument.documentElement,y)){for(l!==null&&Pl(y)&&(A=l.start,E=l.end,E===void 0&&(E=A),"selectionStart"in y?(y.selectionStart=A,y.selectionEnd=Math.min(E,y.value.length)):(E=(A=y.ownerDocument||document)&&A.defaultView||window,E.getSelection&&(E=E.getSelection(),s=y.textContent.length,a=Math.min(l.start,s),l=l.end===void 0?a:Math.min(l.end,s),!E.extend&&a>l&&(s=l,l=a,a=s),s=mc(y,a),c=mc(y,l),s&&c&&(E.rangeCount!==1||E.anchorNode!==s.node||E.anchorOffset!==s.offset||E.focusNode!==c.node||E.focusOffset!==c.offset)&&(A=A.createRange(),A.setStart(s.node,s.offset),E.removeAllRanges(),a>l?(E.addRange(A),E.extend(c.node,c.offset)):(A.setEnd(c.node,c.offset),E.addRange(A)))))),A=[],E=y;E=E.parentNode;)E.nodeType===1&&A.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<A.length;y++)E=A[y],E.element.scrollLeft=E.left,E.element.scrollTop=E.top}_o=!!Fa,Ba=Fa=null,e.current=n,q=o;do try{for(y=e;q!==null;){var R=q.effectTag;if(R&36&&U0(y,q.alternate,q),R&128){A=void 0;var I=q.ref;if(I!==null){var j=q.stateNode;switch(q.tag){case 5:A=j;break;default:A=j}typeof I=="function"?I(A):I.current=A}}q=q.nextEffect}}catch(_){if(q===null)throw Error(M(330));En(q,_),q=q.nextEffect}while(q!==null);q=null,I0(),ne=i}else e.current=n;if(Ai)Ai=!1,Ir=e,Er=t;else for(q=o;q!==null;)t=q.nextEffect,q.nextEffect=null,q=t;if(t=e.firstPendingTime,t===0&&(qt=null),t===1073741823?e===Yl?Or++:(Or=0,Yl=e):Or=0,typeof ql=="function"&&ql(n.stateNode,r),qe(e),bi)throw bi=!1,e=Kl,Kl=null,e;return(ne&su)!==Ce||Et(),null}function Y0(){for(;q!==null;){var e=q.effectTag;e&256&&z0(q.alternate,q),!(e&512)||Ai||(Ai=!0,Ap(97,function(){return pr(),null})),q=q.nextEffect}}function pr(){if(Er!==90){var e=97<Er?97:Er;return Er=90,rn(e,J0)}}function J0(){if(Ir===null)return!1;var e=Ir;if(Ir=null,(ne&(ft|At))!==Ce)throw Error(M(331));var t=ne;for(ne|=At,e=e.current.firstEffect;e!==null;){try{var n=e;if(n.effectTag&512)switch(n.tag){case 0:case 11:case 15:case 22:Bp(5,n),zp(5,n)}}catch(r){if(e===null)throw Error(M(330));En(e,r)}n=e.nextEffect,e.nextEffect=null,e=n}return ne=t,Et(),!0}function Zc(e,t,n){t=lu(n,t),t=Wp(e,t,1073741823),Xt(e,t),e=Vi(e,1073741823),e!==null&&qe(e)}function En(e,t){if(e.tag===3)Zc(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){Zc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qt===null||!qt.has(r))){e=lu(t,e),e=Vp(n,e,1073741823),Xt(n,e),n=Vi(n,1073741823),n!==null&&qe(n);break}}n=n.return}}function X0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),Xe===e&&Qe===n?Te===Hi||Te===yi&&It===1073741823&&rt()-cu<Kp?yn(e,Qe):wi=!0:oh(e,n)&&(t=e.lastPingedTime,t!==0&&t<n||(e.lastPingedTime=n,qe(e)))}function q0(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=bt(),t=Sn(t,e,null)),e=Vi(e,t),e!==null&&qe(e)}var rh;rh=function(e,t,n){var r=t.expirationTime;if(e!==null){var o=t.pendingProps;if(e.memoizedProps!==o||We.current)yt=!0;else{if(r<n){switch(yt=!1,t.tag){case 3:Wc(t),Wa();break;case 5:if(Lc(t),t.mode&4&&n!==1&&o.hidden)return t.expirationTime=t.childExpirationTime=1,null;break;case 1:Ve(t.type)&&Uo(t);break;case 4:_l(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value,o=t.type._context,ke(li,o._currentValue),o._currentValue=r;break;case 13:if(t.memoizedState!==null)return r=t.child.childExpirationTime,r!==0&&r>=n?Vc(e,t,n):(ke(xe,xe.current&1),t=Nt(e,t,n),t!==null?t.sibling:null);ke(xe,xe.current&1);break;case 19:if(r=t.childExpirationTime>=n,e.effectTag&64){if(r)return Gc(e,t,n);t.effectTag|=64}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null),ke(xe,xe.current),!r)return null}return Nt(e,t,n)}yt=!1}}else yt=!1;switch(t.expirationTime=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,o=or(t,_e.current),Xn(t,n),o=ru(null,t,r,e,o,n),t.effectTag|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)){var i=!0;Uo(t)}else i=!1;t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Xs(t);var a=r.getDerivedStateFromProps;typeof a=="function"&&ci(t,r,a,e),o.updater=Ui,t.stateNode=o,o._reactInternalFiber=t,Ml(t,r,e,n),t=Hl(null,t,r,!0,i,n)}else t.tag=0,Ye(null,t,o,n),t=t.child;return t;case 16:e:{if(o=t.elementType,e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,Cv(o),o._status!==1)throw o._result;switch(o=o._result,t.type=o,i=t.tag=tg(o),e=ut(o,e),i){case 0:t=Ul(null,t,o,e,n);break e;case 1:t=Hc(null,t,o,e,n);break e;case 11:t=zc(null,t,o,e,n);break e;case 14:t=Uc(null,t,o,ut(o.type,e),r,n);break e}throw Error(M(306,o,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),Ul(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),Hc(e,t,r,o,n);case 3:if(Wc(t),r=t.updateQueue,e===null||r===null)throw Error(M(282));if(r=t.pendingProps,o=t.memoizedState,o=o!==null?o.element:null,qs(e,t),zr(t,r,null,n),r=t.memoizedState.element,r===o)Wa(),t=Nt(e,t,n);else{if((o=t.stateNode.hydrate)&&(Vt=Jn(t.stateNode.containerInfo.firstChild),Ot=t,o=An=!0),o)for(n=Zs(t,null,r,n),t.child=n;n;)n.effectTag=n.effectTag&-3|1024,n=n.sibling;else Ye(e,t,r,n),Wa();t=t.child}return t;case 5:return Lc(t),e===null&&zl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Rl(r,o)?a=null:i!==null&&Rl(r,i)&&(t.effectTag|=16),Lp(e,t),t.mode&4&&n!==1&&o.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):(Ye(e,t,a,n),t=t.child),t;case 6:return e===null&&zl(t),null;case 13:return Vc(e,t,n);case 4:return _l(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ir(t,null,r,n):Ye(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),zc(e,t,r,o,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value;var l=t.type._context;if(ke(li,l._currentValue),l._currentValue=i,a!==null)if(l=a.value,i=$n(l,i)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(l,i):1073741823)|0,i===0){if(a.children===o.children&&!We.current){t=Nt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){a=l.child;for(var s=u.firstContext;s!==null;){if(s.context===r&&s.observedBits&i){l.tag===1&&(s=Jt(n,null),s.tag=2,Xt(l,s)),l.expirationTime<n&&(l.expirationTime=n),s=l.alternate,s!==null&&s.expirationTime<n&&(s.expirationTime=n),Sp(l.return,n),u.expirationTime<n&&(u.expirationTime=n);break}s=s.next}}else a=l.tag===10&&l.type===t.type?null:l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}Ye(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,i=t.pendingProps,r=i.children,Xn(t,n),o=it(o,i.unstable_observedBits),r=r(o),t.effectTag|=1,Ye(e,t,r,n),t.child;case 14:return o=t.type,i=ut(o,t.pendingProps),i=ut(o.type,i),Uc(e,t,o,i,r,n);case 15:return jp(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,Ve(r)?(e=!0,Uo(t)):e=!1,Xn(t,n),Tp(t,r,o),Ml(t,r,o,n),Hl(null,t,r,!0,e,n);case 19:return Gc(e,t,n)}throw Error(M(156,t.tag))};var ql=null,Zl=null;function Z0(e){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);ql=function(r){try{t.onCommitFiberRoot(n,r,void 0,(r.current.effectTag&64)===64)}catch{}},Zl=function(r){try{t.onCommitFiberUnmount(n,r)}catch{}}}catch{}return!0}function eg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function xt(e,t,n,r){return new eg(e,t,n,r)}function du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tg(e){if(typeof e=="function")return du(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ds)return 11;if(e===Is)return 14}return 2}function Rn(e,t){var n=e.alternate;return n===null?(n=xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=e.childExpirationTime,n.expirationTime=e.expirationTime,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{expirationTime:t.expirationTime,firstContext:t.firstContext,responders:t.responders},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ko(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")du(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case hn:return Qt(n.children,o,i,t);case Tv:a=8,o|=7;break;case Af:a=8,o|=1;break;case jo:return e=xt(12,n,t,o|8),e.elementType=jo,e.type=jo,e.expirationTime=i,e;case Lo:return e=xt(13,n,t,o),e.type=Lo,e.elementType=Lo,e.expirationTime=i,e;case ml:return e=xt(19,n,t,o),e.elementType=ml,e.expirationTime=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case kf:a=10;break e;case Sf:a=9;break e;case Ds:a=11;break e;case Is:a=14;break e;case Ef:a=16,r=null;break e;case Tf:a=22;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=xt(a,n,t,o),t.elementType=e,t.type=r,t.expirationTime=i,t}function Qt(e,t,n,r){return e=xt(7,e,r,t),e.expirationTime=n,e}function Ka(e,t,n){return e=xt(6,e,null,t),e.expirationTime=n,e}function Ya(e,t,n){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ng(e,t,n){this.tag=t,this.current=null,this.containerInfo=e,this.pingCache=this.pendingChildren=null,this.finishedExpirationTime=0,this.finishedWork=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=90,this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}function oh(e,t){var n=e.firstSuspendedTime;return e=e.lastSuspendedTime,n!==0&&n>=t&&e<=t}function xn(e,t){var n=e.firstSuspendedTime,r=e.lastSuspendedTime;n<t&&(e.firstSuspendedTime=t),(r>t||n===0)&&(e.lastSuspendedTime=t),t<=e.lastPingedTime&&(e.lastPingedTime=0),t<=e.lastExpiredTime&&(e.lastExpiredTime=0)}function ih(e,t){t>e.firstPendingTime&&(e.firstPendingTime=t);var n=e.firstSuspendedTime;n!==0&&(t>=n?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:t>=e.lastSuspendedTime&&(e.lastSuspendedTime=t+1),t>e.nextKnownPendingLevel&&(e.nextKnownPendingLevel=t))}function es(e,t){var n=e.lastExpiredTime;(n===0||n>t)&&(e.lastExpiredTime=t)}function ki(e,t,n,r){var o=t.current,i=bt(),a=Dr.suspense;i=Sn(i,o,a);e:if(n){n=n._reactInternalFiber;t:{if(Nn(n)!==n||n.tag!==1)throw Error(M(170));var l=n;do{switch(l.tag){case 3:l=l.stateNode.context;break t;case 1:if(Ve(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break t}}l=l.return}while(l!==null);throw Error(M(171))}if(n.tag===1){var u=n.type;if(Ve(u)){n=hp(n,u,l);break e}}n=l}else n=nn;return t.context===null?t.context=n:t.pendingContext=n,t=Jt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),Xt(o,t),Zt(o,i),i}function Ja(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ed(e,t){e=e.memoizedState,e!==null&&e.dehydrated!==null&&e.retryTime<t&&(e.retryTime=t)}function fu(e,t){ed(e,t),(e=e.alternate)&&ed(e,t)}function pu(e,t,n){n=n!=null&&n.hydrate===!0;var r=new ng(e,t,n),o=xt(3,null,null,t===2?7:t===1?3:0);r.current=o,o.stateNode=r,Xs(o),e[Zr]=r.current,n&&t!==0&&Ov(e,e.nodeType===9?e:e.ownerDocument),this._internalRoot=r}pu.prototype.render=function(e){ki(e,this._internalRoot,null,null)};pu.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;ki(null,e,null,function(){t[Zr]=null})};function io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rg(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new pu(e,0,t?{hydrate:!0}:void 0)}function Gi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i._internalRoot;if(typeof o=="function"){var l=o;o=function(){var s=Ja(a);l.call(s)}}ki(t,a,e,o)}else{if(i=n._reactRootContainer=rg(n,r),a=i._internalRoot,typeof o=="function"){var u=o;o=function(){var s=Ja(a);u.call(s)}}Xp(function(){ki(t,a,e,o)})}return Ja(a)}function og(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}Vf=function(e){if(e.tag===13){var t=Wo(bt(),150,100);Zt(e,t),fu(e,t)}};Ms=function(e){e.tag===13&&(Zt(e,3),fu(e,3))};Qf=function(e){if(e.tag===13){var t=bt();t=Sn(t,e,null),Zt(e,t),fu(e,t)}};hl=function(e,t,n){switch(t){case"input":if(gl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ws(r);if(!o)throw Error(M(90));$f(r),gl(r,o)}}}break;case"textarea":Rf(e,n);break;case"select":t=n.value,t!=null&&Yn(e,!!n.multiple,t,!1)}};Es=Jp;xf=function(e,t,n,r,o){var i=ne;ne|=4;try{return rn(98,e.bind(null,t,n,r,o))}finally{ne=i,ne===Ce&&Et()}};Ts=function(){(ne&(1|ft|At))===Ce&&(V0(),pr())};wf=function(e,t){var n=ne;ne|=2;try{return e(t)}finally{ne=n,ne===Ce&&Et()}};function ah(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!io(t))throw Error(M(200));return og(e,t,null,n)}var ig={Events:[to,Cn,Ws,vf,pl,rr,function(e){js(e,Qv)},gf,yf,_i,Mi,pr,{current:!1}]};(function(e){var t=e.findFiberByHostInstance;return Z0(Fe({},e,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Bf(n),n===null?null:n.stateNode},findFiberByHostInstance:function(n){return t?t(n):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:eo,bundleType:0,version:"16.14.0",rendererPackageName:"react-dom"});at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ig;at.createPortal=ah;at.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternalFiber;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):Error(M(268,Object.keys(e)));return e=Bf(t),e=e===null?null:e.stateNode,e};at.flushSync=function(e,t){if((ne&(ft|At))!==Ce)throw Error(M(187));var n=ne;ne|=1;try{return rn(99,e.bind(null,t))}finally{ne=n,Et()}};at.hydrate=function(e,t,n){if(!io(t))throw Error(M(200));return Gi(null,e,t,!0,n)};at.render=function(e,t,n){if(!io(t))throw Error(M(200));return Gi(null,e,t,!1,n)};at.unmountComponentAtNode=function(e){if(!io(e))throw Error(M(40));return e._reactRootContainer?(Xp(function(){Gi(null,null,e,!1,function(){e._reactRootContainer=null,e[Zr]=null})}),!0):!1};at.unstable_batchedUpdates=Jp;at.unstable_createPortal=function(e,t){return ah(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};at.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!io(n))throw Error(M(200));if(e==null||e._reactInternalFiber===void 0)throw Error(M(38));return Gi(e,t,n,!1,r)};at.version="16.14.0";function lh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lh)}catch(e){console.error(e)}}lh(),cf.exports=at;var hu=cf.exports;const ag=Be(hu);function ts(e,t){return ts=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},ts(e,t)}function kt(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ts(e,t)}var sh={exports:{}},lg="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",sg=lg,ug=sg;function uh(){}function ch(){}ch.resetWarningCache=uh;var cg=function(){function e(r,o,i,a,l,u){if(u!==ug){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ch,resetWarningCache:uh};return n.PropTypes=n,n};sh.exports=cg();var dg=sh.exports;const ns=Be(dg);function be(){return be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},be.apply(this,arguments)}function $o(e){return e.charAt(0)==="/"}function Xa(e,t){for(var n=t,r=n+1,o=e.length;r<o;n+=1,r+=1)e[n]=e[r];e.pop()}function fg(e,t){t===void 0&&(t="");var n=e&&e.split("/")||[],r=t&&t.split("/")||[],o=e&&$o(e),i=t&&$o(t),a=o||i;if(e&&$o(e)?r=n:n.length&&(r.pop(),r=r.concat(n)),!r.length)return"/";var l;if(r.length){var u=r[r.length-1];l=u==="."||u===".."||u===""}else l=!1;for(var s=0,c=r.length;c>=0;c--){var f=r[c];f==="."?Xa(r,c):f===".."?(Xa(r,c),s++):s&&(Xa(r,c),s--)}if(!a)for(;s--;s)r.unshift("..");a&&r[0]!==""&&(!r[0]||!$o(r[0]))&&r.unshift("");var g=r.join("/");return l&&g.substr(-1)!=="/"&&(g+="/"),g}var pg="Invariant failed";function cn(e,t){throw new Error(pg)}function Nr(e){return e.charAt(0)==="/"?e:"/"+e}function td(e){return e.charAt(0)==="/"?e.substr(1):e}function hg(e,t){return e.toLowerCase().indexOf(t.toLowerCase())===0&&"/?#".indexOf(e.charAt(t.length))!==-1}function dh(e,t){return hg(e,t)?e.substr(t.length):e}function fh(e){return e.charAt(e.length-1)==="/"?e.slice(0,-1):e}function mg(e){var t=e||"/",n="",r="",o=t.indexOf("#");o!==-1&&(r=t.substr(o),t=t.substr(0,o));var i=t.indexOf("?");return i!==-1&&(n=t.substr(i),t=t.substr(0,i)),{pathname:t,search:n==="?"?"":n,hash:r==="#"?"":r}}function He(e){var t=e.pathname,n=e.search,r=e.hash,o=t||"/";return n&&n!=="?"&&(o+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(o+=r.charAt(0)==="#"?r:"#"+r),o}function Je(e,t,n,r){var o;typeof e=="string"?(o=mg(e),o.state=t):(o=be({},e),o.pathname===void 0&&(o.pathname=""),o.search?o.search.charAt(0)!=="?"&&(o.search="?"+o.search):o.search="",o.hash?o.hash.charAt(0)!=="#"&&(o.hash="#"+o.hash):o.hash="",t!==void 0&&o.state===void 0&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(i){throw i instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):i}return n&&(o.key=n),r?o.pathname?o.pathname.charAt(0)!=="/"&&(o.pathname=fg(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function mu(){var e=null;function t(a){return e=a,function(){e===a&&(e=null)}}function n(a,l,u,s){if(e!=null){var c=typeof e=="function"?e(a,l):e;typeof c=="string"?typeof u=="function"?u(c,s):s(!0):s(c!==!1)}else s(!0)}var r=[];function o(a){var l=!0;function u(){l&&a.apply(void 0,arguments)}return r.push(u),function(){l=!1,r=r.filter(function(s){return s!==u})}}function i(){for(var a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];r.forEach(function(s){return s.apply(void 0,l)})}return{setPrompt:t,confirmTransitionTo:n,appendListener:o,notifyListeners:i}}var ph=!!(typeof window<"u"&&window.document&&window.document.createElement);function hh(e,t){t(window.confirm(e))}function vg(){var e=window.navigator.userAgent;return(e.indexOf("Android 2.")!==-1||e.indexOf("Android 4.0")!==-1)&&e.indexOf("Mobile Safari")!==-1&&e.indexOf("Chrome")===-1&&e.indexOf("Windows Phone")===-1?!1:window.history&&"pushState"in window.history}function gg(){return window.navigator.userAgent.indexOf("Trident")===-1}function yg(){return window.navigator.userAgent.indexOf("Firefox")===-1}function xg(e){return e.state===void 0&&navigator.userAgent.indexOf("CriOS")===-1}var nd="popstate",rd="hashchange";function od(){try{return window.history.state||{}}catch{return{}}}function wg(e){e===void 0&&(e={}),ph||cn();var t=window.history,n=vg(),r=!gg(),o=e,i=o.forceRefresh,a=i===void 0?!1:i,l=o.getUserConfirmation,u=l===void 0?hh:l,s=o.keyLength,c=s===void 0?6:s,f=e.basename?fh(Nr(e.basename)):"";function g(U){var F=U||{},X=F.key,O=F.state,P=window.location,x=P.pathname,$=P.search,v=P.hash,L=x+$+v;return f&&(L=dh(L,f)),Je(L,O,X)}function k(){return Math.random().toString(36).substr(2,c)}var S=mu();function C(U){be(Q,U),Q.length=t.length,S.notifyListeners(Q.location,Q.action)}function d(U){xg(U)||y(g(U.state))}function p(){y(g(od()))}var h=!1;function y(U){if(h)h=!1,C();else{var F="POP";S.confirmTransitionTo(U,F,u,function(X){X?C({action:F,location:U}):A(U)})}}function A(U){var F=Q.location,X=R.indexOf(F.key);X===-1&&(X=0);var O=R.indexOf(U.key);O===-1&&(O=0);var P=X-O;P&&(h=!0,J(P))}var E=g(od()),R=[E.key];function I(U){return f+He(U)}function j(U,F){var X="PUSH",O=Je(U,F,k(),Q.location);S.confirmTransitionTo(O,X,u,function(P){if(P){var x=I(O),$=O.key,v=O.state;if(n)if(t.pushState({key:$,state:v},null,x),a)window.location.href=x;else{var L=R.indexOf(Q.location.key),D=R.slice(0,L+1);D.push(O.key),R=D,C({action:X,location:O})}else window.location.href=x}})}function _(U,F){var X="REPLACE",O=Je(U,F,k(),Q.location);S.confirmTransitionTo(O,X,u,function(P){if(P){var x=I(O),$=O.key,v=O.state;if(n)if(t.replaceState({key:$,state:v},null,x),a)window.location.replace(x);else{var L=R.indexOf(Q.location.key);L!==-1&&(R[L]=O.key),C({action:X,location:O})}else window.location.replace(x)}})}function J(U){t.go(U)}function K(){J(-1)}function Y(){J(1)}var oe=0;function V(U){oe+=U,oe===1&&U===1?(window.addEventListener(nd,d),r&&window.addEventListener(rd,p)):oe===0&&(window.removeEventListener(nd,d),r&&window.removeEventListener(rd,p))}var z=!1;function ae(U){U===void 0&&(U=!1);var F=S.setPrompt(U);return z||(V(1),z=!0),function(){return z&&(z=!1,V(-1)),F()}}function le(U){var F=S.appendListener(U);return V(1),function(){V(-1),F()}}var Q={length:t.length,action:"POP",location:E,createHref:I,push:j,replace:_,go:J,goBack:K,goForward:Y,block:ae,listen:le};return Q}var id="hashchange",bg={hashbang:{encodePath:function(t){return t.charAt(0)==="!"?t:"!/"+td(t)},decodePath:function(t){return t.charAt(0)==="!"?t.substr(1):t}},noslash:{encodePath:td,decodePath:Nr},slash:{encodePath:Nr,decodePath:Nr}};function mh(e){var t=e.indexOf("#");return t===-1?e:e.slice(0,t)}function Ar(){var e=window.location.href,t=e.indexOf("#");return t===-1?"":e.substring(t+1)}function Ag(e){window.location.hash=e}function qa(e){window.location.replace(mh(window.location.href)+"#"+e)}function kg(e){e===void 0&&(e={}),ph||cn();var t=window.history;yg();var n=e,r=n.getUserConfirmation,o=r===void 0?hh:r,i=n.hashType,a=i===void 0?"slash":i,l=e.basename?fh(Nr(e.basename)):"",u=bg[a],s=u.encodePath,c=u.decodePath;function f(){var F=c(Ar());return l&&(F=dh(F,l)),Je(F)}var g=mu();function k(F){be(U,F),U.length=t.length,g.notifyListeners(U.location,U.action)}var S=!1,C=null;function d(F,X){return F.pathname===X.pathname&&F.search===X.search&&F.hash===X.hash}function p(){var F=Ar(),X=s(F);if(F!==X)qa(X);else{var O=f(),P=U.location;if(!S&&d(P,O)||C===He(O))return;C=null,h(O)}}function h(F){if(S)S=!1,k();else{var X="POP";g.confirmTransitionTo(F,X,o,function(O){O?k({action:X,location:F}):y(F)})}}function y(F){var X=U.location,O=I.lastIndexOf(He(X));O===-1&&(O=0);var P=I.lastIndexOf(He(F));P===-1&&(P=0);var x=O-P;x&&(S=!0,K(x))}var A=Ar(),E=s(A);A!==E&&qa(E);var R=f(),I=[He(R)];function j(F){var X=document.querySelector("base"),O="";return X&&X.getAttribute("href")&&(O=mh(window.location.href)),O+"#"+s(l+He(F))}function _(F,X){var O="PUSH",P=Je(F,void 0,void 0,U.location);g.confirmTransitionTo(P,O,o,function(x){if(x){var $=He(P),v=s(l+$),L=Ar()!==v;if(L){C=$,Ag(v);var D=I.lastIndexOf(He(U.location)),N=I.slice(0,D+1);N.push($),I=N,k({action:O,location:P})}else k()}})}function J(F,X){var O="REPLACE",P=Je(F,void 0,void 0,U.location);g.confirmTransitionTo(P,O,o,function(x){if(x){var $=He(P),v=s(l+$),L=Ar()!==v;L&&(C=$,qa(v));var D=I.indexOf(He(U.location));D!==-1&&(I[D]=$),k({action:O,location:P})}})}function K(F){t.go(F)}function Y(){K(-1)}function oe(){K(1)}var V=0;function z(F){V+=F,V===1&&F===1?window.addEventListener(id,p):V===0&&window.removeEventListener(id,p)}var ae=!1;function le(F){F===void 0&&(F=!1);var X=g.setPrompt(F);return ae||(z(1),ae=!0),function(){return ae&&(ae=!1,z(-1)),X()}}function Q(F){var X=g.appendListener(F);return z(1),function(){z(-1),X()}}var U={length:t.length,action:"POP",location:R,createHref:j,push:_,replace:J,go:K,goBack:Y,goForward:oe,block:le,listen:Q};return U}function ad(e,t,n){return Math.min(Math.max(e,t),n)}function Sg(e){e===void 0&&(e={});var t=e,n=t.getUserConfirmation,r=t.initialEntries,o=r===void 0?["/"]:r,i=t.initialIndex,a=i===void 0?0:i,l=t.keyLength,u=l===void 0?6:l,s=mu();function c(j){be(I,j),I.length=I.entries.length,s.notifyListeners(I.location,I.action)}function f(){return Math.random().toString(36).substr(2,u)}var g=ad(a,0,o.length-1),k=o.map(function(j){return typeof j=="string"?Je(j,void 0,f()):Je(j,void 0,j.key||f())}),S=He;function C(j,_){var J="PUSH",K=Je(j,_,f(),I.location);s.confirmTransitionTo(K,J,n,function(Y){if(Y){var oe=I.index,V=oe+1,z=I.entries.slice(0);z.length>V?z.splice(V,z.length-V,K):z.push(K),c({action:J,location:K,index:V,entries:z})}})}function d(j,_){var J="REPLACE",K=Je(j,_,f(),I.location);s.confirmTransitionTo(K,J,n,function(Y){Y&&(I.entries[I.index]=K,c({action:J,location:K}))})}function p(j){var _=ad(I.index+j,0,I.entries.length-1),J="POP",K=I.entries[_];s.confirmTransitionTo(K,J,n,function(Y){Y?c({action:J,location:K,index:_}):c()})}function h(){p(-1)}function y(){p(1)}function A(j){var _=I.index+j;return _>=0&&_<I.entries.length}function E(j){return j===void 0&&(j=!1),s.setPrompt(j)}function R(j){return s.appendListener(j)}var I={length:k.length,action:"POP",location:k[g],index:g,entries:k,createHref:S,push:C,replace:d,go:p,goBack:h,goForward:y,canGo:A,block:E,listen:R};return I}var hr={exports:{}},Eg=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},Si=Eg;hr.exports=yh;hr.exports.parse=vu;hr.exports.compile=Cg;hr.exports.tokensToFunction=vh;hr.exports.tokensToRegExp=gh;var Tg=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function vu(e,t){for(var n=[],r=0,o=0,i="",a=t&&t.delimiter||"/",l;(l=Tg.exec(e))!=null;){var u=l[0],s=l[1],c=l.index;if(i+=e.slice(o,c),o=c+u.length,s){i+=s[1];continue}var f=e[o],g=l[2],k=l[3],S=l[4],C=l[5],d=l[6],p=l[7];i&&(n.push(i),i="");var h=g!=null&&f!=null&&f!==g,y=d==="+"||d==="*",A=d==="?"||d==="*",E=l[2]||a,R=S||C;n.push({name:k||r++,prefix:g||"",delimiter:E,optional:A,repeat:y,partial:h,asterisk:!!p,pattern:R?Rg(R):p?".*":"[^"+Yo(E)+"]+?"})}return o<e.length&&(i+=e.substr(o)),i&&n.push(i),n}function Cg(e,t){return vh(vu(e,t),t)}function $g(e){return encodeURI(e).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function Pg(e){return encodeURI(e).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function vh(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)typeof e[r]=="object"&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",yu(t)));return function(o,i){for(var a="",l=o||{},u=i||{},s=u.pretty?$g:encodeURIComponent,c=0;c<e.length;c++){var f=e[c];if(typeof f=="string"){a+=f;continue}var g=l[f.name],k;if(g==null)if(f.optional){f.partial&&(a+=f.prefix);continue}else throw new TypeError('Expected "'+f.name+'" to be defined');if(Si(g)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(g)+"`");if(g.length===0){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var S=0;S<g.length;S++){if(k=s(g[S]),!n[c].test(k))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(k)+"`");a+=(S===0?f.prefix:f.delimiter)+k}continue}if(k=f.asterisk?Pg(g):s(g),!n[c].test(k))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+k+'"');a+=f.prefix+k}return a}}function Yo(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function Rg(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function gu(e,t){return e.keys=t,e}function yu(e){return e&&e.sensitive?"":"i"}function Dg(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return gu(e,t)}function Ig(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(yh(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",yu(n));return gu(i,t)}function Og(e,t,n){return gh(vu(e,n),t,n)}function gh(e,t,n){Si(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",a=0;a<e.length;a++){var l=e[a];if(typeof l=="string")i+=Yo(l);else{var u=Yo(l.prefix),s="(?:"+l.pattern+")";t.push(l),l.repeat&&(s+="(?:"+u+s+")*"),l.optional?l.partial?s=u+"("+s+")?":s="(?:"+u+"("+s+"))?":s=u+"("+s+")",i+=s}}var c=Yo(n.delimiter||"/"),f=i.slice(-c.length)===c;return r||(i=(f?i.slice(0,-c.length):i)+"(?:"+c+"(?=$))?"),o?i+="$":i+=r&&f?"":"(?="+c+"|$)",gu(new RegExp("^"+i,yu(n)),t)}function yh(e,t,n){return Si(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?Dg(e,t):Si(e)?Ig(e,t,n):Og(e,t,n)}var Ng=hr.exports;const jg=Be(Ng);var pe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $e=typeof Symbol=="function"&&Symbol.for,xu=$e?Symbol.for("react.element"):60103,wu=$e?Symbol.for("react.portal"):60106,Ki=$e?Symbol.for("react.fragment"):60107,Yi=$e?Symbol.for("react.strict_mode"):60108,Ji=$e?Symbol.for("react.profiler"):60114,Xi=$e?Symbol.for("react.provider"):60109,qi=$e?Symbol.for("react.context"):60110,bu=$e?Symbol.for("react.async_mode"):60111,Zi=$e?Symbol.for("react.concurrent_mode"):60111,ea=$e?Symbol.for("react.forward_ref"):60112,ta=$e?Symbol.for("react.suspense"):60113,Lg=$e?Symbol.for("react.suspense_list"):60120,na=$e?Symbol.for("react.memo"):60115,ra=$e?Symbol.for("react.lazy"):60116,Mg=$e?Symbol.for("react.block"):60121,_g=$e?Symbol.for("react.fundamental"):60117,Fg=$e?Symbol.for("react.responder"):60118,Bg=$e?Symbol.for("react.scope"):60119;function et(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case xu:switch(e=e.type,e){case bu:case Zi:case Ki:case Ji:case Yi:case ta:return e;default:switch(e=e&&e.$$typeof,e){case qi:case ea:case ra:case na:case Xi:return e;default:return t}}case wu:return t}}}function xh(e){return et(e)===Zi}pe.AsyncMode=bu;pe.ConcurrentMode=Zi;pe.ContextConsumer=qi;pe.ContextProvider=Xi;pe.Element=xu;pe.ForwardRef=ea;pe.Fragment=Ki;pe.Lazy=ra;pe.Memo=na;pe.Portal=wu;pe.Profiler=Ji;pe.StrictMode=Yi;pe.Suspense=ta;pe.isAsyncMode=function(e){return xh(e)||et(e)===bu};pe.isConcurrentMode=xh;pe.isContextConsumer=function(e){return et(e)===qi};pe.isContextProvider=function(e){return et(e)===Xi};pe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===xu};pe.isForwardRef=function(e){return et(e)===ea};pe.isFragment=function(e){return et(e)===Ki};pe.isLazy=function(e){return et(e)===ra};pe.isMemo=function(e){return et(e)===na};pe.isPortal=function(e){return et(e)===wu};pe.isProfiler=function(e){return et(e)===Ji};pe.isStrictMode=function(e){return et(e)===Yi};pe.isSuspense=function(e){return et(e)===ta};pe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ki||e===Zi||e===Ji||e===Yi||e===ta||e===Lg||typeof e=="object"&&e!==null&&(e.$$typeof===ra||e.$$typeof===na||e.$$typeof===Xi||e.$$typeof===qi||e.$$typeof===ea||e.$$typeof===_g||e.$$typeof===Fg||e.$$typeof===Bg||e.$$typeof===Mg)};pe.typeOf=et;function Lt(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}var wh={exports:{}},de={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pe=typeof Symbol=="function"&&Symbol.for,Au=Pe?Symbol.for("react.element"):60103,ku=Pe?Symbol.for("react.portal"):60106,oa=Pe?Symbol.for("react.fragment"):60107,ia=Pe?Symbol.for("react.strict_mode"):60108,aa=Pe?Symbol.for("react.profiler"):60114,la=Pe?Symbol.for("react.provider"):60109,sa=Pe?Symbol.for("react.context"):60110,Su=Pe?Symbol.for("react.async_mode"):60111,ua=Pe?Symbol.for("react.concurrent_mode"):60111,ca=Pe?Symbol.for("react.forward_ref"):60112,da=Pe?Symbol.for("react.suspense"):60113,zg=Pe?Symbol.for("react.suspense_list"):60120,fa=Pe?Symbol.for("react.memo"):60115,pa=Pe?Symbol.for("react.lazy"):60116,Ug=Pe?Symbol.for("react.block"):60121,Hg=Pe?Symbol.for("react.fundamental"):60117,Wg=Pe?Symbol.for("react.responder"):60118,Vg=Pe?Symbol.for("react.scope"):60119;function tt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Au:switch(e=e.type,e){case Su:case ua:case oa:case aa:case ia:case da:return e;default:switch(e=e&&e.$$typeof,e){case sa:case ca:case pa:case fa:case la:return e;default:return t}}case ku:return t}}}function bh(e){return tt(e)===ua}de.AsyncMode=Su;de.ConcurrentMode=ua;de.ContextConsumer=sa;de.ContextProvider=la;de.Element=Au;de.ForwardRef=ca;de.Fragment=oa;de.Lazy=pa;de.Memo=fa;de.Portal=ku;de.Profiler=aa;de.StrictMode=ia;de.Suspense=da;de.isAsyncMode=function(e){return bh(e)||tt(e)===Su};de.isConcurrentMode=bh;de.isContextConsumer=function(e){return tt(e)===sa};de.isContextProvider=function(e){return tt(e)===la};de.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Au};de.isForwardRef=function(e){return tt(e)===ca};de.isFragment=function(e){return tt(e)===oa};de.isLazy=function(e){return tt(e)===pa};de.isMemo=function(e){return tt(e)===fa};de.isPortal=function(e){return tt(e)===ku};de.isProfiler=function(e){return tt(e)===aa};de.isStrictMode=function(e){return tt(e)===ia};de.isSuspense=function(e){return tt(e)===da};de.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===oa||e===ua||e===aa||e===ia||e===da||e===zg||typeof e=="object"&&e!==null&&(e.$$typeof===pa||e.$$typeof===fa||e.$$typeof===la||e.$$typeof===sa||e.$$typeof===ca||e.$$typeof===Hg||e.$$typeof===Wg||e.$$typeof===Vg||e.$$typeof===Ug)};de.typeOf=tt;wh.exports=de;var Qg=wh.exports,Eu=Qg,Gg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Kg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Yg={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ah={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Tu={};Tu[Eu.ForwardRef]=Yg;Tu[Eu.Memo]=Ah;function ld(e){return Eu.isMemo(e)?Ah:Tu[e.$$typeof]||Gg}var Jg=Object.defineProperty,Xg=Object.getOwnPropertyNames,sd=Object.getOwnPropertySymbols,qg=Object.getOwnPropertyDescriptor,Zg=Object.getPrototypeOf,ud=Object.prototype;function kh(e,t,n){if(typeof t!="string"){if(ud){var r=Zg(t);r&&r!==ud&&kh(e,r,n)}var o=Xg(t);sd&&(o=o.concat(sd(t)));for(var i=ld(e),a=ld(t),l=0;l<o.length;++l){var u=o[l];if(!Kg[u]&&!(n&&n[u])&&!(a&&a[u])&&!(i&&i[u])){var s=qg(t,u);try{Jg(e,u,s)}catch{}}}}return e}var ey=kh;const Ei=Be(ey);var Za=1073741823,cd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{};function ty(){var e="__global_unique_id__";return cd[e]=(cd[e]||0)+1}function ny(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function ry(e){var t=[];return{on:function(r){t.push(r)},off:function(r){t=t.filter(function(o){return o!==r})},get:function(){return e},set:function(r,o){e=r,t.forEach(function(i){return i(e,o)})}}}function oy(e){return Array.isArray(e)?e[0]:e}function iy(e,t){var n,r,o="__create-react-context-"+ty()+"__",i=function(l){kt(u,l);function u(){for(var c,f=arguments.length,g=new Array(f),k=0;k<f;k++)g[k]=arguments[k];return c=l.call.apply(l,[this].concat(g))||this,c.emitter=ry(c.props.value),c}var s=u.prototype;return s.getChildContext=function(){var f;return f={},f[o]=this.emitter,f},s.componentWillReceiveProps=function(f){if(this.props.value!==f.value){var g=this.props.value,k=f.value,S;ny(g,k)?S=0:(S=typeof t=="function"?t(g,k):Za,S|=0,S!==0&&this.emitter.set(f.value,S))}},s.render=function(){return this.props.children},u}(b.Component);i.childContextTypes=(n={},n[o]=ns.object.isRequired,n);var a=function(l){kt(u,l);function u(){for(var c,f=arguments.length,g=new Array(f),k=0;k<f;k++)g[k]=arguments[k];return c=l.call.apply(l,[this].concat(g))||this,c.observedBits=void 0,c.state={value:c.getValue()},c.onUpdate=function(S,C){var d=c.observedBits|0;d&C&&c.setState({value:c.getValue()})},c}var s=u.prototype;return s.componentWillReceiveProps=function(f){var g=f.observedBits;this.observedBits=g??Za},s.componentDidMount=function(){this.context[o]&&this.context[o].on(this.onUpdate);var f=this.props.observedBits;this.observedBits=f??Za},s.componentWillUnmount=function(){this.context[o]&&this.context[o].off(this.onUpdate)},s.getValue=function(){return this.context[o]?this.context[o].get():e},s.render=function(){return oy(this.props.children)(this.state.value)},u}(b.Component);return a.contextTypes=(r={},r[o]=ns.object,r),{Provider:i,Consumer:a}}var ay=b.createContext||iy,Sh=function(t){var n=ay();return n.displayName=t,n},ly=Sh("Router-History"),on=Sh("Router"),ha=function(e){kt(t,e),t.computeRootMatch=function(o){return{path:"/",url:"/",params:{},isExact:o==="/"}};function t(r){var o;return o=e.call(this,r)||this,o.state={location:r.history.location},o._isMounted=!1,o._pendingLocation=null,r.staticContext||(o.unlisten=r.history.listen(function(i){o._pendingLocation=i})),o}var n=t.prototype;return n.componentDidMount=function(){var o=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen(function(i){o._isMounted&&o.setState({location:i})})),this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},n.render=function(){return b.createElement(on.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},b.createElement(ly.Provider,{children:this.props.children||null,value:this.props.history}))},t}(b.Component);b.Component;b.Component;var dd={},sy=1e4,fd=0;function uy(e,t){var n=""+t.end+t.strict+t.sensitive,r=dd[n]||(dd[n]={});if(r[e])return r[e];var o=[],i=jg(e,o,t),a={regexp:i,keys:o};return fd<sy&&(r[e]=a,fd++),a}function Cu(e,t){t===void 0&&(t={}),(typeof t=="string"||Array.isArray(t))&&(t={path:t});var n=t,r=n.path,o=n.exact,i=o===void 0?!1:o,a=n.strict,l=a===void 0?!1:a,u=n.sensitive,s=u===void 0?!1:u,c=[].concat(r);return c.reduce(function(f,g){if(!g&&g!=="")return null;if(f)return f;var k=uy(g,{end:i,strict:l,sensitive:s}),S=k.regexp,C=k.keys,d=S.exec(e);if(!d)return null;var p=d[0],h=d.slice(1),y=e===p;return i&&!y?null:{path:g,url:g==="/"&&p===""?"/":p,isExact:y,params:C.reduce(function(A,E,R){return A[E.name]=h[R],A},{})}},null)}function cy(e){return b.Children.count(e)===0}var Ln=function(e){kt(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.render=function(){var o=this;return b.createElement(on.Consumer,null,function(i){i||cn();var a=o.props.location||i.location,l=o.props.computedMatch?o.props.computedMatch:o.props.path?Cu(a.pathname,o.props):i.match,u=be({},i,{location:a,match:l}),s=o.props,c=s.children,f=s.component,g=s.render;return Array.isArray(c)&&cy(c)&&(c=null),b.createElement(on.Provider,{value:u},u.match?c?typeof c=="function"?c(u):c:f?b.createElement(f,u):g?g(u):null:typeof c=="function"?c(u):null)})},t}(b.Component);function $u(e){return e.charAt(0)==="/"?e:"/"+e}function dy(e,t){return e?be({},t,{pathname:$u(e)+t.pathname}):t}function fy(e,t){if(!e)return t;var n=$u(e);return t.pathname.indexOf(n)!==0?t:be({},t,{pathname:t.pathname.substr(n.length)})}function pd(e){return typeof e=="string"?e:He(e)}function el(e){return function(){cn()}}function hd(){}b.Component;var md=function(e){kt(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.render=function(){var o=this;return b.createElement(on.Consumer,null,function(i){i||cn();var a=o.props.location||i.location,l,u;return b.Children.forEach(o.props.children,function(s){if(u==null&&b.isValidElement(s)){l=s;var c=s.props.path||s.props.from;u=c?Cu(a.pathname,be({},s.props,{path:c})):i.match}}),u?b.cloneElement(l,{location:a,computedMatch:u}):null})},t}(b.Component);function Eh(e){var t="withRouter("+(e.displayName||e.name)+")",n=function(o){var i=o.wrappedComponentRef,a=Lt(o,["wrappedComponentRef"]);return b.createElement(on.Consumer,null,function(l){return l||cn(),b.createElement(e,be({},a,l,{ref:i}))})};return n.displayName=t,n.WrappedComponent=e,Ei(n,e)}var py=b.useContext;function hy(){return py(on).location}var my=function(e){kt(t,e);function t(){for(var r,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=e.call.apply(e,[this].concat(i))||this,r.history=wg(r.props),r}var n=t.prototype;return n.render=function(){return b.createElement(ha,{history:this.history,children:this.props.children})},t}(b.Component);b.Component;var rs=function(t,n){return typeof t=="function"?t(n):t},os=function(t,n){return typeof t=="string"?Je(t,null,null,n):t},Pu=function(t){return t},lr=b.forwardRef;typeof lr>"u"&&(lr=Pu);function vy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}var gy=lr(function(e,t){var n=e.innerRef,r=e.navigate,o=e.onClick,i=Lt(e,["innerRef","navigate","onClick"]),a=i.target,l=be({},i,{onClick:function(s){try{o&&o(s)}catch(c){throw s.preventDefault(),c}!s.defaultPrevented&&s.button===0&&(!a||a==="_self")&&!vy(s)&&(s.preventDefault(),r())}});return Pu!==lr?l.ref=t||n:l.ref=n,b.createElement("a",l)}),yy=lr(function(e,t){var n=e.component,r=n===void 0?gy:n,o=e.replace,i=e.to,a=e.innerRef,l=Lt(e,["component","replace","to","innerRef"]);return b.createElement(on.Consumer,null,function(u){u||cn();var s=u.history,c=os(rs(i,u.location),u.location),f=c?s.createHref(c):"",g=be({},l,{href:f,navigate:function(){var S=rs(i,u.location),C=He(u.location)===He(os(S)),d=o||C?s.replace:s.push;d(S)}});return Pu!==lr?g.ref=t||a:g.innerRef=a,b.createElement(r,g)})}),Th=function(t){return t},Ti=b.forwardRef;typeof Ti>"u"&&(Ti=Th);function xy(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(function(r){return r}).join(" ")}Ti(function(e,t){var n=e["aria-current"],r=n===void 0?"page":n,o=e.activeClassName,i=o===void 0?"active":o,a=e.activeStyle,l=e.className,u=e.exact,s=e.isActive,c=e.location,f=e.sensitive,g=e.strict,k=e.style,S=e.to,C=e.innerRef,d=Lt(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return b.createElement(on.Consumer,null,function(p){p||cn();var h=c||p.location,y=os(rs(S,h),h),A=y.pathname,E=A&&A.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),R=E?Cu(h.pathname,{path:E,exact:u,sensitive:f,strict:g}):null,I=!!(s?s(R,h):R),j=typeof l=="function"?l(I):l,_=typeof k=="function"?k(I):k;I&&(j=xy(j,i),_=be({},_,a));var J=be({"aria-current":I&&r||null,className:j,style:_,to:y},d);return Th!==Ti?J.ref=t||C:J.innerRef=C,b.createElement(yy,J)})});var Mt=b.createContext(null);function wy(e){e()}var Ch=wy,by=function(t){return Ch=t},Ay=function(){return Ch};function ky(){var e=Ay(),t=null,n=null;return{clear:function(){t=null,n=null},notify:function(){e(function(){for(var o=t;o;)o.callback(),o=o.next})},get:function(){for(var o=[],i=t;i;)o.push(i),i=i.next;return o},subscribe:function(o){var i=!0,a=n={callback:o,next:null,prev:n};return a.prev?a.prev.next=a:t=a,function(){!i||t===null||(i=!1,a.next?a.next.prev=a.prev:n=a.prev,a.prev?a.prev.next=a.next:t=a.next)}}}}var vd={notify:function(){},get:function(){return[]}};function Ru(e,t){var n,r=vd;function o(f){return u(),r.subscribe(f)}function i(){r.notify()}function a(){c.onStateChange&&c.onStateChange()}function l(){return!!n}function u(){n||(n=t?t.addNestedSub(a):e.subscribe(a),r=ky())}function s(){n&&(n(),n=void 0,r.clear(),r=vd)}var c={addNestedSub:o,notifyNestedSubs:i,handleChangeWrapper:a,isSubscribed:l,trySubscribe:u,tryUnsubscribe:s,getListeners:function(){return r}};return c}var Ci=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?w.useLayoutEffect:w.useEffect;function Sy(e){var t=e.store,n=e.context,r=e.children,o=w.useMemo(function(){var l=Ru(t);return{store:t,subscription:l}},[t]),i=w.useMemo(function(){return t.getState()},[t]);Ci(function(){var l=o.subscription;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),i!==t.getState()&&l.notifyNestedSubs(),function(){l.tryUnsubscribe(),l.onStateChange=null}},[o,i]);var a=n||Mt;return b.createElement(a.Provider,{value:o},r)}var $h={exports:{}},me={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ma=60103,va=60106,ao=60107,lo=60108,so=60114,uo=60109,co=60110,fo=60112,po=60113,Du=60120,ho=60115,mo=60116,Ph=60121,Rh=60122,Dh=60117,Ih=60129,Oh=60131;if(typeof Symbol=="function"&&Symbol.for){var Re=Symbol.for;ma=Re("react.element"),va=Re("react.portal"),ao=Re("react.fragment"),lo=Re("react.strict_mode"),so=Re("react.profiler"),uo=Re("react.provider"),co=Re("react.context"),fo=Re("react.forward_ref"),po=Re("react.suspense"),Du=Re("react.suspense_list"),ho=Re("react.memo"),mo=Re("react.lazy"),Ph=Re("react.block"),Rh=Re("react.server.block"),Dh=Re("react.fundamental"),Ih=Re("react.debug_trace_mode"),Oh=Re("react.legacy_hidden")}function vt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ma:switch(e=e.type,e){case ao:case so:case lo:case po:case Du:return e;default:switch(e=e&&e.$$typeof,e){case co:case fo:case mo:case ho:case uo:return e;default:return t}}case va:return t}}}var Ey=uo,Ty=ma,Cy=fo,$y=ao,Py=mo,Ry=ho,Dy=va,Iy=so,Oy=lo,Ny=po;me.ContextConsumer=co;me.ContextProvider=Ey;me.Element=Ty;me.ForwardRef=Cy;me.Fragment=$y;me.Lazy=Py;me.Memo=Ry;me.Portal=Dy;me.Profiler=Iy;me.StrictMode=Oy;me.Suspense=Ny;me.isAsyncMode=function(){return!1};me.isConcurrentMode=function(){return!1};me.isContextConsumer=function(e){return vt(e)===co};me.isContextProvider=function(e){return vt(e)===uo};me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ma};me.isForwardRef=function(e){return vt(e)===fo};me.isFragment=function(e){return vt(e)===ao};me.isLazy=function(e){return vt(e)===mo};me.isMemo=function(e){return vt(e)===ho};me.isPortal=function(e){return vt(e)===va};me.isProfiler=function(e){return vt(e)===so};me.isStrictMode=function(e){return vt(e)===lo};me.isSuspense=function(e){return vt(e)===po};me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ao||e===so||e===Ih||e===lo||e===po||e===Du||e===Oh||typeof e=="object"&&e!==null&&(e.$$typeof===mo||e.$$typeof===ho||e.$$typeof===uo||e.$$typeof===co||e.$$typeof===fo||e.$$typeof===Dh||e.$$typeof===Ph||e[0]===Rh)};me.typeOf=vt;$h.exports=me;var jy=$h.exports,Ly=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],My=["reactReduxForwardedRef"],_y=[],Fy=[null,null];function By(e,t){var n=e[1];return[t.payload,n+1]}function gd(e,t,n){Ci(function(){return e.apply(void 0,t)},n)}function zy(e,t,n,r,o,i,a){e.current=r,t.current=o,n.current=!1,i.current&&(i.current=null,a())}function Uy(e,t,n,r,o,i,a,l,u,s){if(e){var c=!1,f=null,g=function(){if(!c){var C=t.getState(),d,p;try{d=r(C,o.current)}catch(h){p=h,f=h}p||(f=null),d===i.current?a.current||u():(i.current=d,l.current=d,a.current=!0,s({type:"STORE_UPDATED",payload:{error:p}}))}};n.onStateChange=g,n.trySubscribe(),g();var k=function(){if(c=!0,n.tryUnsubscribe(),n.onStateChange=null,f)throw f};return k}}var Hy=function(){return[null,0]};function Wy(e,t){t===void 0&&(t={});var n=t,r=n.getDisplayName,o=r===void 0?function(y){return"ConnectAdvanced("+y+")"}:r,i=n.methodName,a=i===void 0?"connectAdvanced":i,l=n.renderCountProp,u=l===void 0?void 0:l,s=n.shouldHandleStateChanges,c=s===void 0?!0:s,f=n.storeKey,g=f===void 0?"store":f;n.withRef;var k=n.forwardRef,S=k===void 0?!1:k,C=n.context,d=C===void 0?Mt:C,p=Lt(n,Ly),h=d;return function(A){var E=A.displayName||A.name||"Component",R=o(E),I=be({},p,{getDisplayName:o,methodName:a,renderCountProp:u,shouldHandleStateChanges:c,storeKey:g,displayName:R,wrappedComponentName:E,WrappedComponent:A}),j=p.pure;function _(V){return e(V.dispatch,I)}var J=j?w.useMemo:function(V){return V()};function K(V){var z=w.useMemo(function(){var Se=V.reactReduxForwardedRef,ve=Lt(V,My);return[V.context,Se,ve]},[V]),ae=z[0],le=z[1],Q=z[2],U=w.useMemo(function(){return ae&&ae.Consumer&&jy.isContextConsumer(b.createElement(ae.Consumer,null))?ae:h},[ae,h]),F=w.useContext(U),X=!!V.store&&!!V.store.getState&&!!V.store.dispatch;F&&F.store;var O=X?V.store:F.store,P=w.useMemo(function(){return _(O)},[O]),x=w.useMemo(function(){if(!c)return Fy;var Se=Ru(O,X?null:F.subscription),ve=Se.notifyNestedSubs.bind(Se);return[Se,ve]},[O,X,F]),$=x[0],v=x[1],L=w.useMemo(function(){return X?F:be({},F,{subscription:$})},[X,F,$]),D=w.useReducer(By,_y,Hy),N=D[0],B=N[0],G=D[1];if(B&&B.error)throw B.error;var H=w.useRef(),ee=w.useRef(Q),se=w.useRef(),Z=w.useRef(!1),ue=J(function(){return se.current&&Q===ee.current?se.current:P(O.getState(),Q)},[O,B,Q]);gd(zy,[ee,H,Z,Q,ue,se,v]),gd(Uy,[c,O,$,P,ee,H,Z,se,v,G],[O,$,P]);var re=w.useMemo(function(){return b.createElement(A,be({},ue,{ref:le}))},[le,A,ue]),he=w.useMemo(function(){return c?b.createElement(U.Provider,{value:L},re):re},[U,re,L]);return he}var Y=j?b.memo(K):K;if(Y.WrappedComponent=A,Y.displayName=K.displayName=R,S){var oe=b.forwardRef(function(z,ae){return b.createElement(Y,be({},z,{reactReduxForwardedRef:ae}))});return oe.displayName=R,oe.WrappedComponent=A,Ei(oe,A)}return Ei(Y,A)}}function yd(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function tl(e,t){if(yd(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!Object.prototype.hasOwnProperty.call(t,n[o])||!yd(e[n[o]],t[n[o]]))return!1;return!0}function Vy(e,t){var n={},r=function(a){var l=e[a];typeof l=="function"&&(n[a]=function(){return t(l.apply(void 0,arguments))})};for(var o in e)r(o);return n}function Iu(e){return function(n,r){var o=e(n,r);function i(){return o}return i.dependsOnOwnProps=!1,i}}function xd(e){return e.dependsOnOwnProps!==null&&e.dependsOnOwnProps!==void 0?!!e.dependsOnOwnProps:e.length!==1}function Nh(e,t){return function(r,o){o.displayName;var i=function(l,u){return i.dependsOnOwnProps?i.mapToProps(l,u):i.mapToProps(l)};return i.dependsOnOwnProps=!0,i.mapToProps=function(l,u){i.mapToProps=e,i.dependsOnOwnProps=xd(e);var s=i(l,u);return typeof s=="function"&&(i.mapToProps=s,i.dependsOnOwnProps=xd(s),s=i(l,u)),s},i}}function Qy(e){return typeof e=="function"?Nh(e):void 0}function Gy(e){return e?void 0:Iu(function(t){return{dispatch:t}})}function Ky(e){return e&&typeof e=="object"?Iu(function(t){return Vy(e,t)}):void 0}const Yy=[Qy,Gy,Ky];function Jy(e){return typeof e=="function"?Nh(e):void 0}function Xy(e){return e?void 0:Iu(function(){return{}})}const qy=[Jy,Xy];function Zy(e,t,n){return be({},n,e,t)}function e1(e){return function(n,r){r.displayName;var o=r.pure,i=r.areMergedPropsEqual,a=!1,l;return function(s,c,f){var g=e(s,c,f);return a?(!o||!i(g,l))&&(l=g):(a=!0,l=g),l}}}function t1(e){return typeof e=="function"?e1(e):void 0}function n1(e){return e?void 0:function(){return Zy}}const r1=[t1,n1];var o1=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function i1(e,t,n,r){return function(i,a){return n(e(i,a),t(r,a),a)}}function a1(e,t,n,r,o){var i=o.areStatesEqual,a=o.areOwnPropsEqual,l=o.areStatePropsEqual,u=!1,s,c,f,g,k;function S(y,A){return s=y,c=A,f=e(s,c),g=t(r,c),k=n(f,g,c),u=!0,k}function C(){return f=e(s,c),t.dependsOnOwnProps&&(g=t(r,c)),k=n(f,g,c),k}function d(){return e.dependsOnOwnProps&&(f=e(s,c)),t.dependsOnOwnProps&&(g=t(r,c)),k=n(f,g,c),k}function p(){var y=e(s,c),A=!l(y,f);return f=y,A&&(k=n(f,g,c)),k}function h(y,A){var E=!a(A,c),R=!i(y,s,A,c);return s=y,c=A,E&&R?C():E?d():R?p():k}return function(A,E){return u?h(A,E):S(A,E)}}function l1(e,t){var n=t.initMapStateToProps,r=t.initMapDispatchToProps,o=t.initMergeProps,i=Lt(t,o1),a=n(e,i),l=r(e,i),u=o(e,i),s=i.pure?a1:i1;return s(a,l,u,e,i)}var s1=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function nl(e,t,n){for(var r=t.length-1;r>=0;r--){var o=t[r](e);if(o)return o}return function(i,a){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+a.wrappedComponentName+".")}}function u1(e,t){return e===t}function c1(e){var t={},n=t.connectHOC,r=n===void 0?Wy:n,o=t.mapStateToPropsFactories,i=o===void 0?qy:o,a=t.mapDispatchToPropsFactories,l=a===void 0?Yy:a,u=t.mergePropsFactories,s=u===void 0?r1:u,c=t.selectorFactory,f=c===void 0?l1:c;return function(k,S,C,d){d===void 0&&(d={});var p=d,h=p.pure,y=h===void 0?!0:h,A=p.areStatesEqual,E=A===void 0?u1:A,R=p.areOwnPropsEqual,I=R===void 0?tl:R,j=p.areStatePropsEqual,_=j===void 0?tl:j,J=p.areMergedPropsEqual,K=J===void 0?tl:J,Y=Lt(p,s1),oe=nl(k,i,"mapStateToProps"),V=nl(S,l,"mapDispatchToProps"),z=nl(C,s,"mergeProps");return r(f,be({methodName:"connect",getDisplayName:function(le){return"Connect("+le+")"},shouldHandleStateChanges:!!k,initMapStateToProps:oe,initMapDispatchToProps:V,initMergeProps:z,pure:y,areStatesEqual:E,areOwnPropsEqual:I,areStatePropsEqual:_,areMergedPropsEqual:K},Y))}}const jh=c1();function Lh(){var e=w.useContext(Mt);return e}function Mh(e){e===void 0&&(e=Mt);var t=e===Mt?Lh:function(){return w.useContext(e)};return function(){var r=t(),o=r.store;return o}}var d1=Mh();function f1(e){e===void 0&&(e=Mt);var t=e===Mt?d1:Mh(e);return function(){var r=t();return r.dispatch}}var p1=f1(),h1=function(t,n){return t===n};function m1(e,t,n,r){var o=w.useReducer(function(S){return S+1},0),i=o[1],a=w.useMemo(function(){return Ru(n,r)},[n,r]),l=w.useRef(),u=w.useRef(),s=w.useRef(),c=w.useRef(),f=n.getState(),g;try{if(e!==u.current||f!==s.current||l.current){var k=e(f);c.current===void 0||!t(k,c.current)?g=k:g=c.current}else g=c.current}catch(S){throw l.current&&(S.message+=`
The error may be correlated with this previous error:
`+l.current.stack+`

`),S}return Ci(function(){u.current=e,s.current=f,c.current=g,l.current=void 0}),Ci(function(){function S(){try{var C=n.getState();if(C===s.current)return;var d=u.current(C);if(t(d,c.current))return;c.current=d,s.current=C}catch(p){l.current=p}i()}return a.onStateChange=S,a.trySubscribe(),S(),function(){return a.tryUnsubscribe()}},[n,a]),g}function v1(e){e===void 0&&(e=Mt);var t=e===Mt?Lh:function(){return w.useContext(e)};return function(r,o){o===void 0&&(o=h1);var i=t(),a=i.store,l=i.subscription,u=m1(r,o,a,l);return w.useDebugValue(u),u}}var g1=v1();by(hu.unstable_batchedUpdates);var _h={exports:{}},fe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ou=Symbol.for("react.element"),Nu=Symbol.for("react.portal"),ga=Symbol.for("react.fragment"),ya=Symbol.for("react.strict_mode"),xa=Symbol.for("react.profiler"),wa=Symbol.for("react.provider"),ba=Symbol.for("react.context"),y1=Symbol.for("react.server_context"),Aa=Symbol.for("react.forward_ref"),ka=Symbol.for("react.suspense"),Sa=Symbol.for("react.suspense_list"),Ea=Symbol.for("react.memo"),Ta=Symbol.for("react.lazy"),x1=Symbol.for("react.offscreen"),Fh;Fh=Symbol.for("react.module.reference");function lt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ou:switch(e=e.type,e){case ga:case xa:case ya:case ka:case Sa:return e;default:switch(e=e&&e.$$typeof,e){case y1:case ba:case Aa:case Ta:case Ea:case wa:return e;default:return t}}case Nu:return t}}}fe.ContextConsumer=ba;fe.ContextProvider=wa;fe.Element=Ou;fe.ForwardRef=Aa;fe.Fragment=ga;fe.Lazy=Ta;fe.Memo=Ea;fe.Portal=Nu;fe.Profiler=xa;fe.StrictMode=ya;fe.Suspense=ka;fe.SuspenseList=Sa;fe.isAsyncMode=function(){return!1};fe.isConcurrentMode=function(){return!1};fe.isContextConsumer=function(e){return lt(e)===ba};fe.isContextProvider=function(e){return lt(e)===wa};fe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ou};fe.isForwardRef=function(e){return lt(e)===Aa};fe.isFragment=function(e){return lt(e)===ga};fe.isLazy=function(e){return lt(e)===Ta};fe.isMemo=function(e){return lt(e)===Ea};fe.isPortal=function(e){return lt(e)===Nu};fe.isProfiler=function(e){return lt(e)===xa};fe.isStrictMode=function(e){return lt(e)===ya};fe.isSuspense=function(e){return lt(e)===ka};fe.isSuspenseList=function(e){return lt(e)===Sa};fe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ga||e===xa||e===ya||e===ka||e===Sa||e===x1||typeof e=="object"&&e!==null&&(e.$$typeof===Ta||e.$$typeof===Ea||e.$$typeof===wa||e.$$typeof===ba||e.$$typeof===Aa||e.$$typeof===Fh||e.getModuleId!==void 0)};fe.typeOf=lt;_h.exports=fe;var Bh=_h.exports;function w1(e){function t(O,P,x,$,v){for(var L=0,D=0,N=0,B=0,G,H,ee=0,se=0,Z,ue=Z=G=0,re=0,he=0,Se=0,ve=0,Ft=x.length,st=Ft-1,Ue,te="",Ae="",Oa="",Na="",Bt;re<Ft;){if(H=x.charCodeAt(re),re===st&&D+B+N+L!==0&&(D!==0&&(H=D===47?10:47),B=N=L=0,Ft++,st++),D+B+N+L===0){if(re===st&&(0<he&&(te=te.replace(g,"")),0<te.trim().length)){switch(H){case 32:case 9:case 59:case 13:case 10:break;default:te+=x.charAt(re)}H=59}switch(H){case 123:for(te=te.trim(),G=te.charCodeAt(0),Z=1,ve=++re;re<Ft;){switch(H=x.charCodeAt(re)){case 123:Z++;break;case 125:Z--;break;case 47:switch(H=x.charCodeAt(re+1)){case 42:case 47:e:{for(ue=re+1;ue<st;++ue)switch(x.charCodeAt(ue)){case 47:if(H===42&&x.charCodeAt(ue-1)===42&&re+2!==ue){re=ue+1;break e}break;case 10:if(H===47){re=ue+1;break e}}re=ue}}break;case 91:H++;case 40:H++;case 34:case 39:for(;re++<st&&x.charCodeAt(re)!==H;);}if(Z===0)break;re++}switch(Z=x.substring(ve,re),G===0&&(G=(te=te.replace(f,"").trim()).charCodeAt(0)),G){case 64:switch(0<he&&(te=te.replace(g,"")),H=te.charCodeAt(1),H){case 100:case 109:case 115:case 45:he=P;break;default:he=ae}if(Z=t(P,he,Z,H,v+1),ve=Z.length,0<Q&&(he=n(ae,te,Se),Bt=l(3,Z,he,P,oe,Y,ve,H,v,$),te=he.join(""),Bt!==void 0&&(ve=(Z=Bt.trim()).length)===0&&(H=0,Z="")),0<ve)switch(H){case 115:te=te.replace(R,a);case 100:case 109:case 45:Z=te+"{"+Z+"}";break;case 107:te=te.replace(h,"$1 $2"),Z=te+"{"+Z+"}",Z=z===1||z===2&&i("@"+Z,3)?"@-webkit-"+Z+"@"+Z:"@"+Z;break;default:Z=te+Z,$===112&&(Z=(Ae+=Z,""))}else Z="";break;default:Z=t(P,n(P,te,Se),Z,$,v+1)}Oa+=Z,Z=Se=he=ue=G=0,te="",H=x.charCodeAt(++re);break;case 125:case 59:if(te=(0<he?te.replace(g,""):te).trim(),1<(ve=te.length))switch(ue===0&&(G=te.charCodeAt(0),G===45||96<G&&123>G)&&(ve=(te=te.replace(" ",":")).length),0<Q&&(Bt=l(1,te,P,O,oe,Y,Ae.length,$,v,$))!==void 0&&(ve=(te=Bt.trim()).length)===0&&(te="\0\0"),G=te.charCodeAt(0),H=te.charCodeAt(1),G){case 0:break;case 64:if(H===105||H===99){Na+=te+x.charAt(re);break}default:te.charCodeAt(ve-1)!==58&&(Ae+=o(te,G,H,te.charCodeAt(2)))}Se=he=ue=G=0,te="",H=x.charCodeAt(++re)}}switch(H){case 13:case 10:D===47?D=0:1+G===0&&$!==107&&0<te.length&&(he=1,te+="\0"),0<Q*F&&l(0,te,P,O,oe,Y,Ae.length,$,v,$),Y=1,oe++;break;case 59:case 125:if(D+B+N+L===0){Y++;break}default:switch(Y++,Ue=x.charAt(re),H){case 9:case 32:if(B+L+D===0)switch(ee){case 44:case 58:case 9:case 32:Ue="";break;default:H!==32&&(Ue=" ")}break;case 0:Ue="\\0";break;case 12:Ue="\\f";break;case 11:Ue="\\v";break;case 38:B+D+L===0&&(he=Se=1,Ue="\f"+Ue);break;case 108:if(B+D+L+V===0&&0<ue)switch(re-ue){case 2:ee===112&&x.charCodeAt(re-3)===58&&(V=ee);case 8:se===111&&(V=se)}break;case 58:B+D+L===0&&(ue=re);break;case 44:D+N+B+L===0&&(he=1,Ue+="\r");break;case 34:case 39:D===0&&(B=B===H?0:B===0?H:B);break;case 91:B+D+N===0&&L++;break;case 93:B+D+N===0&&L--;break;case 41:B+D+L===0&&N--;break;case 40:if(B+D+L===0){if(G===0)switch(2*ee+3*se){case 533:break;default:G=1}N++}break;case 64:D+N+B+L+ue+Z===0&&(Z=1);break;case 42:case 47:if(!(0<B+L+N))switch(D){case 0:switch(2*H+3*x.charCodeAt(re+1)){case 235:D=47;break;case 220:ve=re,D=42}break;case 42:H===47&&ee===42&&ve+2!==re&&(x.charCodeAt(ve+2)===33&&(Ae+=x.substring(ve,re+1)),Ue="",D=0)}}D===0&&(te+=Ue)}se=ee,ee=H,re++}if(ve=Ae.length,0<ve){if(he=P,0<Q&&(Bt=l(2,Ae,he,O,oe,Y,ve,$,v,$),Bt!==void 0&&(Ae=Bt).length===0))return Na+Ae+Oa;if(Ae=he.join(",")+"{"+Ae+"}",z*V!==0){switch(z!==2||i(Ae,2)||(V=0),V){case 111:Ae=Ae.replace(A,":-moz-$1")+Ae;break;case 112:Ae=Ae.replace(y,"::-webkit-input-$1")+Ae.replace(y,"::-moz-$1")+Ae.replace(y,":-ms-input-$1")+Ae}V=0}}return Na+Ae+Oa}function n(O,P,x){var $=P.trim().split(d);P=$;var v=$.length,L=O.length;switch(L){case 0:case 1:var D=0;for(O=L===0?"":O[0]+" ";D<v;++D)P[D]=r(O,P[D],x).trim();break;default:var N=D=0;for(P=[];D<v;++D)for(var B=0;B<L;++B)P[N++]=r(O[B]+" ",$[D],x).trim()}return P}function r(O,P,x){var $=P.charCodeAt(0);switch(33>$&&($=(P=P.trim()).charCodeAt(0)),$){case 38:return P.replace(p,"$1"+O.trim());case 58:return O.trim()+P.replace(p,"$1"+O.trim());default:if(0<1*x&&0<P.indexOf("\f"))return P.replace(p,(O.charCodeAt(0)===58?"":"$1")+O.trim())}return O+P}function o(O,P,x,$){var v=O+";",L=2*P+3*x+4*$;if(L===944){O=v.indexOf(":",9)+1;var D=v.substring(O,v.length-1).trim();return D=v.substring(0,O).trim()+D+";",z===1||z===2&&i(D,1)?"-webkit-"+D+D:D}if(z===0||z===2&&!i(v,1))return v;switch(L){case 1015:return v.charCodeAt(10)===97?"-webkit-"+v+v:v;case 951:return v.charCodeAt(3)===116?"-webkit-"+v+v:v;case 963:return v.charCodeAt(5)===110?"-webkit-"+v+v:v;case 1009:if(v.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+v+v;case 978:return"-webkit-"+v+"-moz-"+v+v;case 1019:case 983:return"-webkit-"+v+"-moz-"+v+"-ms-"+v+v;case 883:if(v.charCodeAt(8)===45)return"-webkit-"+v+v;if(0<v.indexOf("image-set(",11))return v.replace(K,"$1-webkit-$2")+v;break;case 932:if(v.charCodeAt(4)===45)switch(v.charCodeAt(5)){case 103:return"-webkit-box-"+v.replace("-grow","")+"-webkit-"+v+"-ms-"+v.replace("grow","positive")+v;case 115:return"-webkit-"+v+"-ms-"+v.replace("shrink","negative")+v;case 98:return"-webkit-"+v+"-ms-"+v.replace("basis","preferred-size")+v}return"-webkit-"+v+"-ms-"+v+v;case 964:return"-webkit-"+v+"-ms-flex-"+v+v;case 1023:if(v.charCodeAt(8)!==99)break;return D=v.substring(v.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+D+"-webkit-"+v+"-ms-flex-pack"+D+v;case 1005:return S.test(v)?v.replace(k,":-webkit-")+v.replace(k,":-moz-")+v:v;case 1e3:switch(D=v.substring(13).trim(),P=D.indexOf("-")+1,D.charCodeAt(0)+D.charCodeAt(P)){case 226:D=v.replace(E,"tb");break;case 232:D=v.replace(E,"tb-rl");break;case 220:D=v.replace(E,"lr");break;default:return v}return"-webkit-"+v+"-ms-"+D+v;case 1017:if(v.indexOf("sticky",9)===-1)break;case 975:switch(P=(v=O).length-10,D=(v.charCodeAt(P)===33?v.substring(0,P):v).substring(O.indexOf(":",7)+1).trim(),L=D.charCodeAt(0)+(D.charCodeAt(7)|0)){case 203:if(111>D.charCodeAt(8))break;case 115:v=v.replace(D,"-webkit-"+D)+";"+v;break;case 207:case 102:v=v.replace(D,"-webkit-"+(102<L?"inline-":"")+"box")+";"+v.replace(D,"-webkit-"+D)+";"+v.replace(D,"-ms-"+D+"box")+";"+v}return v+";";case 938:if(v.charCodeAt(5)===45)switch(v.charCodeAt(6)){case 105:return D=v.replace("-items",""),"-webkit-"+v+"-webkit-box-"+D+"-ms-flex-"+D+v;case 115:return"-webkit-"+v+"-ms-flex-item-"+v.replace(j,"")+v;default:return"-webkit-"+v+"-ms-flex-line-pack"+v.replace("align-content","").replace(j,"")+v}break;case 973:case 989:if(v.charCodeAt(3)!==45||v.charCodeAt(4)===122)break;case 931:case 953:if(J.test(O)===!0)return(D=O.substring(O.indexOf(":")+1)).charCodeAt(0)===115?o(O.replace("stretch","fill-available"),P,x,$).replace(":fill-available",":stretch"):v.replace(D,"-webkit-"+D)+v.replace(D,"-moz-"+D.replace("fill-",""))+v;break;case 962:if(v="-webkit-"+v+(v.charCodeAt(5)===102?"-ms-"+v:"")+v,x+$===211&&v.charCodeAt(13)===105&&0<v.indexOf("transform",10))return v.substring(0,v.indexOf(";",27)+1).replace(C,"$1-webkit-$2")+v}return v}function i(O,P){var x=O.indexOf(P===1?":":"{"),$=O.substring(0,P!==3?x:10);return x=O.substring(x+1,O.length-1),U(P!==2?$:$.replace(_,"$1"),x,P)}function a(O,P){var x=o(P,P.charCodeAt(0),P.charCodeAt(1),P.charCodeAt(2));return x!==P+";"?x.replace(I," or ($1)").substring(4):"("+P+")"}function l(O,P,x,$,v,L,D,N,B,G){for(var H=0,ee=P,se;H<Q;++H)switch(se=le[H].call(c,O,ee,x,$,v,L,D,N,B,G)){case void 0:case!1:case!0:case null:break;default:ee=se}if(ee!==P)return ee}function u(O){switch(O){case void 0:case null:Q=le.length=0;break;default:if(typeof O=="function")le[Q++]=O;else if(typeof O=="object")for(var P=0,x=O.length;P<x;++P)u(O[P]);else F=!!O|0}return u}function s(O){return O=O.prefix,O!==void 0&&(U=null,O?typeof O!="function"?z=1:(z=2,U=O):z=0),s}function c(O,P){var x=O;if(33>x.charCodeAt(0)&&(x=x.trim()),X=x,x=[X],0<Q){var $=l(-1,P,x,x,oe,Y,0,0,0,0);$!==void 0&&typeof $=="string"&&(P=$)}var v=t(ae,x,P,0,0);return 0<Q&&($=l(-2,v,x,x,oe,Y,v.length,0,0,0),$!==void 0&&(v=$)),X="",V=0,Y=oe=1,v}var f=/^\0+/g,g=/[\0\r\f]/g,k=/: */g,S=/zoo|gra/,C=/([,: ])(transform)/g,d=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,h=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,A=/:(read-only)/g,E=/[svh]\w+-[tblr]{2}/,R=/\(\s*(.*)\s*\)/g,I=/([\s\S]*?);/g,j=/-self|flex-/g,_=/[^]*?(:[rp][el]a[\w-]+)[^]*/,J=/stretch|:\s*\w+\-(?:conte|avail)/,K=/([^-])(image-set\()/,Y=1,oe=1,V=0,z=1,ae=[],le=[],Q=0,U=null,F=0,X="";return c.use=u,c.set=s,e!==void 0&&s(e),c}var b1={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function A1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var k1=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,wd=A1(function(e){return k1.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),nt={};function ct(){return(ct=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var bd=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},is=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Bh.typeOf(e)},$i=Object.freeze([]),en=Object.freeze({});function sr(e){return typeof e=="function"}function Ad(e){return e.displayName||e.name||"Component"}function ju(e){return e&&typeof e.styledComponentId=="string"}var ur=typeof process<"u"&&nt!==void 0&&(nt.REACT_APP_SC_ATTR||nt.SC_ATTR)||"data-styled",Lu=typeof window<"u"&&"HTMLElement"in window,S1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&nt!==void 0&&(nt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&nt.REACT_APP_SC_DISABLE_SPEEDY!==""?nt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&nt.REACT_APP_SC_DISABLE_SPEEDY:nt.SC_DISABLE_SPEEDY!==void 0&&nt.SC_DISABLE_SPEEDY!==""&&nt.SC_DISABLE_SPEEDY!=="false"&&nt.SC_DISABLE_SPEEDY)),E1={};function Dn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var T1=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,a=i;n>=a;)(a<<=1)<0&&Dn(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var l=i;l<a;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(n+1),s=0,c=r.length;s<c;s++)this.tag.insertRule(u,r[s])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var a=o;a<i;a++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o,l=i;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),Jo=new Map,Pi=new Map,jr=1,Po=function(e){if(Jo.has(e))return Jo.get(e);for(;Pi.has(jr);)jr++;var t=jr++;return Jo.set(e,t),Pi.set(t,e),t},C1=function(e){return Pi.get(e)},$1=function(e,t){t>=jr&&(jr=t+1),Jo.set(e,t),Pi.set(t,e)},P1="style["+ur+'][data-styled-version="5.3.11"]',R1=new RegExp("^"+ur+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),D1=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},I1=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var a=n[o].trim();if(a){var l=a.match(R1);if(l){var u=0|parseInt(l[1],10),s=l[2];u!==0&&($1(s,u),D1(e,s,l[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(a)}}},O1=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},zh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){for(var u=l.childNodes,s=u.length;s>=0;s--){var c=u[s];if(c&&c.nodeType===1&&c.hasAttribute(ur))return c}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(ur,"active"),r.setAttribute("data-styled-version","5.3.11");var a=O1();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},N1=function(){function e(n){var r=this.element=zh(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,l=i.length;a<l;a++){var u=i[a];if(u.ownerNode===o)return u}Dn(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),j1=function(){function e(n){var r=this.element=zh(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),L1=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),kd=Lu,M1={isServer:!Lu,useCSSOMInjection:!S1},Ri=function(){function e(n,r,o){n===void 0&&(n=en),r===void 0&&(r={}),this.options=ct({},M1,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&Lu&&kd&&(kd=!1,function(i){for(var a=document.querySelectorAll(P1),l=0,u=a.length;l<u;l++){var s=a[l];s&&s.getAttribute(ur)!=="active"&&(I1(i,s),s.parentNode&&s.parentNode.removeChild(s))}}(this))}e.registerId=function(n){return Po(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(ct({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,a=r.target,n=o?new L1(a):i?new N1(a):new j1(a),new T1(n)));var n,r,o,i,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Po(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(Po(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Po(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",a=0;a<o;a++){var l=C1(a);if(l!==void 0){var u=n.names.get(l),s=r.getGroup(a);if(u&&s&&u.size){var c=ur+".g"+a+'[id="'+l+'"]',f="";u!==void 0&&u.forEach(function(g){g.length>0&&(f+=g+",")}),i+=""+s+c+'{content:"'+f+`"}/*!sc*/
`}}}return i}(this)},e}(),_1=/(a)(d)/gi,Sd=function(e){return String.fromCharCode(e+(e>25?39:97))};function as(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Sd(t%52)+n;return(Sd(t%52)+n).replace(_1,"$1-$2")}var Vn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Uh=function(e){return Vn(5381,e)};function Hh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(sr(n)&&!ju(n))return!1}return!0}var F1=Uh("5.3.11"),B1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Hh(t),this.componentId=n,this.baseHash=Vn(F1,n),this.baseStyle=r,Ri.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var a=In(this.rules,t,n,r).join(""),l=as(Vn(this.baseHash,a)>>>0);if(!n.hasNameForId(o,l)){var u=r(a,"."+l,void 0,o);n.insertRules(o,l,u)}i.push(l),this.staticRulesId=l}else{for(var s=this.rules.length,c=Vn(this.baseHash,r.hash),f="",g=0;g<s;g++){var k=this.rules[g];if(typeof k=="string")f+=k;else if(k){var S=In(k,t,n,r),C=Array.isArray(S)?S.join(""):S;c=Vn(c,C+g),f+=C}}if(f){var d=as(c>>>0);if(!n.hasNameForId(o,d)){var p=r(f,"."+d,void 0,o);n.insertRules(o,d,p)}i.push(d)}}return i.join(" ")},e}(),z1=/^\s*\/\/.*$/gm,U1=[":","[",".","#"];function H1(e){var t,n,r,o,i=en,a=i.options,l=a===void 0?en:a,u=i.plugins,s=u===void 0?$i:u,c=new w1(l),f=[],g=function(C){function d(p){if(p)try{C(p+"}")}catch{}}return function(p,h,y,A,E,R,I,j,_,J){switch(p){case 1:if(_===0&&h.charCodeAt(0)===64)return C(h+";"),"";break;case 2:if(j===0)return h+"/*|*/";break;case 3:switch(j){case 102:case 112:return C(y[0]+h),"";default:return h+(J===0?"/*|*/":"")}case-2:h.split("/*|*/}").forEach(d)}}}(function(C){f.push(C)}),k=function(C,d,p){return d===0&&U1.indexOf(p[n.length])!==-1||p.match(o)?C:"."+t};function S(C,d,p,h){h===void 0&&(h="&");var y=C.replace(z1,""),A=d&&p?p+" "+d+" { "+y+" }":y;return t=h,n=d,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),c(p||!d?"":d,A)}return c.use([].concat(s,[function(C,d,p){C===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,k))},g,function(C){if(C===-2){var d=f;return f=[],d}}])),S.hash=s.length?s.reduce(function(C,d){return d.name||Dn(15),Vn(C,d.name)},5381).toString():"",S}var Wh=b.createContext();Wh.Consumer;var Vh=b.createContext(),W1=(Vh.Consumer,new Ri),ls=H1();function Qh(){return w.useContext(Wh)||W1}function Gh(){return w.useContext(Vh)||ls}var V1=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=ls);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.toString=function(){return Dn(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=ls),this.name+t.hash},e}(),Q1=/([A-Z])/,G1=/([A-Z])/g,K1=/^ms-/,Y1=function(e){return"-"+e.toLowerCase()};function Ed(e){return Q1.test(e)?e.replace(G1,Y1).replace(K1,"-ms-"):e}var Td=function(e){return e==null||e===!1||e===""};function In(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],a=0,l=e.length;a<l;a+=1)(o=In(e[a],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(Td(e))return"";if(ju(e))return"."+e.styledComponentId;if(sr(e)){if(typeof(s=e)!="function"||s.prototype&&s.prototype.isReactComponent||!t)return e;var u=e(t);return In(u,t,n,r)}var s;return e instanceof V1?n?(e.inject(n,r),e.getName(r)):e:is(e)?function c(f,g){var k,S,C=[];for(var d in f)f.hasOwnProperty(d)&&!Td(f[d])&&(Array.isArray(f[d])&&f[d].isCss||sr(f[d])?C.push(Ed(d)+":",f[d],";"):is(f[d])?C.push.apply(C,c(f[d],d)):C.push(Ed(d)+": "+(k=d,(S=f[d])==null||typeof S=="boolean"||S===""?"":typeof S!="number"||S===0||k in b1||k.startsWith("--")?String(S).trim():S+"px")+";"));return g?[g+" {"].concat(C,["}"]):C}(e):e.toString()}var Cd=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function W(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return sr(e)||is(e)?Cd(In(bd($i,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Cd(In(bd(e,n)))}var Kh=function(e,t,n){return n===void 0&&(n=en),e.theme!==n.theme&&e.theme||t||n.theme},J1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,X1=/(^-|-$)/g;function rl(e){return e.replace(J1,"-").replace(X1,"")}var Yh=function(e){return as(Uh(e)>>>0)};function Ro(e){return typeof e=="string"&&!0}var ss=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},q1=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Z1(e,t,n){var r=e[n];ss(t)&&ss(r)?Jh(r,t):e[n]=t}function Jh(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var a=i[o];if(ss(a))for(var l in a)q1(l)&&Z1(e,a[l],l)}return e}var Qr=b.createContext();Qr.Consumer;function Xh(e){var t=w.useContext(Qr),n=w.useMemo(function(){return function(r,o){if(!r)return Dn(14);if(sr(r)){var i=r(o);return i}return Array.isArray(r)||typeof r!="object"?Dn(8):o?ct({},o,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?b.createElement(Qr.Provider,{value:n},e.children):null}var ol={};function qh(e,t,n){var r=ju(e),o=!Ro(e),i=t.attrs,a=i===void 0?$i:i,l=t.componentId,u=l===void 0?function(h,y){var A=typeof h!="string"?"sc":rl(h);ol[A]=(ol[A]||0)+1;var E=A+"-"+Yh("5.3.11"+A+ol[A]);return y?y+"-"+E:E}(t.displayName,t.parentComponentId):l,s=t.displayName,c=s===void 0?function(h){return Ro(h)?"styled."+h:"Styled("+Ad(h)+")"}(e):s,f=t.displayName&&t.componentId?rl(t.displayName)+"-"+t.componentId:t.componentId||u,g=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,k=t.shouldForwardProp;r&&e.shouldForwardProp&&(k=t.shouldForwardProp?function(h,y,A){return e.shouldForwardProp(h,y,A)&&t.shouldForwardProp(h,y,A)}:e.shouldForwardProp);var S,C=new B1(n,f,r?e.componentStyle:void 0),d=C.isStatic&&a.length===0,p=function(h,y){return function(A,E,R,I){var j=A.attrs,_=A.componentStyle,J=A.defaultProps,K=A.foldedComponentIds,Y=A.shouldForwardProp,oe=A.styledComponentId,V=A.target,z=function($,v,L){$===void 0&&($=en);var D=ct({},v,{theme:$}),N={};return L.forEach(function(B){var G,H,ee,se=B;for(G in sr(se)&&(se=se(D)),se)D[G]=N[G]=G==="className"?(H=N[G],ee=se[G],H&&ee?H+" "+ee:H||ee):se[G]}),[D,N]}(Kh(E,w.useContext(Qr),J)||en,E,j),ae=z[0],le=z[1],Q=function($,v,L,D){var N=Qh(),B=Gh(),G=v?$.generateAndInjectStyles(en,N,B):$.generateAndInjectStyles(L,N,B);return G}(_,I,ae),U=R,F=le.$as||E.$as||le.as||E.as||V,X=Ro(F),O=le!==E?ct({},E,{},le):E,P={};for(var x in O)x[0]!=="$"&&x!=="as"&&(x==="forwardedAs"?P.as=O[x]:(Y?Y(x,wd,F):!X||wd(x))&&(P[x]=O[x]));return E.style&&le.style!==E.style&&(P.style=ct({},E.style,{},le.style)),P.className=Array.prototype.concat(K,oe,Q!==oe?Q:null,E.className,le.className).filter(Boolean).join(" "),P.ref=U,w.createElement(F,P)}(S,h,y,d)};return p.displayName=c,(S=b.forwardRef(p)).attrs=g,S.componentStyle=C,S.displayName=c,S.shouldForwardProp=k,S.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):$i,S.styledComponentId=f,S.target=r?e.target:e,S.withComponent=function(h){var y=t.componentId,A=function(R,I){if(R==null)return{};var j,_,J={},K=Object.keys(R);for(_=0;_<K.length;_++)j=K[_],I.indexOf(j)>=0||(J[j]=R[j]);return J}(t,["componentId"]),E=y&&y+"-"+(Ro(h)?h:rl(Ad(h)));return qh(h,ct({},A,{attrs:g,componentId:E}),n)},Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(h){this._foldedDefaultProps=r?Jh({},e.defaultProps,h):h}}),Object.defineProperty(S,"toString",{value:function(){return"."+S.styledComponentId}}),o&&Ei(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),S}var T=function(e){return function t(n,r,o){if(o===void 0&&(o=en),!Bh.isValidElementType(r))return Dn(1,String(r));var i=function(){return n(r,o,W.apply(void 0,arguments))};return i.withConfig=function(a){return t(n,r,ct({},o,{},a))},i.attrs=function(a){return t(n,r,ct({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i}(qh,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){T[e]=T(e)});var ex=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Hh(n),Ri.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,o,i){var a=i(In(this.rules,r,o,i).join(""),""),l=this.componentId+n;o.insertRules(l,l,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,o,i){n>2&&Ri.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,r,o,i)},e}();function tx(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=W.apply(void 0,[e].concat(n)),i="sc-global-"+Yh(JSON.stringify(o)),a=new ex(o,i);function l(s){var c=Qh(),f=Gh(),g=w.useContext(Qr),k=w.useRef(c.allocateGSInstance(i)).current;return c.server&&u(k,s,c,g,f),w.useLayoutEffect(function(){if(!c.server)return u(k,s,c,g,f),function(){return a.removeStyles(k,c)}},[k,s,c,g,f]),null}function u(s,c,f,g,k){if(a.isStatic)a.renderStyles(s,E1,f,k);else{var S=ct({},c,{theme:Kh(c,g,l.defaultProps)});a.renderStyles(s,S,f,k)}}return b.memo(l)}var nx=`
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

`;const Mu="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",_u="inset 2px 2px 3px rgba(0,0,0,0.2)",pt=()=>W`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,ht=({background:e="material",color:t="materialText"}={})=>W`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:n})=>n[e]};
  color: ${({theme:n})=>n[t]};
`,vo=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:n=2})=>W`
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
`,On=()=>W`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,Mn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},rx=({theme:e,topLeftInner:t,bottomRightInner:n,hasShadow:r=!1,hasInsetShadow:o=!1})=>[r?Mu:!1,o?_u:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,n!==null?`inset -1px -1px 0 1px ${e[n]}`:!1].filter(Boolean).join(", "),we=({invert:e=!1,style:t="button"}={})=>{const n={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return W`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[Mn[t][n.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[Mn[t][n.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[Mn[t][n.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[Mn[t][n.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:o})=>rx({theme:r,topLeftInner:Mn[t][n.topLeftInner],bottomRightInner:Mn[t][n.bottomRightInner],hasShadow:o})};
  `},cr=()=>W`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,ox=e=>Buffer.from(e).toString("base64"),ix=typeof btoa<"u"?btoa:ox,Do=(e,t=0)=>{const n=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${ix(n)})`},Fu=(e="default")=>W`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>vo({mainColor:e==="flat"?t.flatLight:t.material,secondaryColor:e==="flat"?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${ht()}
    ${e==="flat"?On():we({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:t})=>t.material};
  }
  ::-webkit-scrollbar-button {
    ${ht()}
    ${e==="flat"?On():we({style:"window"})}
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
    ${e==="default"?we({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:t})=>Do(t.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:t})=>Do(t.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:t})=>Do(t.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:t})=>Do(t.materialText,0)};
  }
`,ax=T.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,lx=w.forwardRef(({children:e,underline:t=!0,...n},r)=>b.createElement(ax,{ref:r,underline:t,...n},e));lx.displayName="Anchor";const sx=T.header`
  ${we()};
  ${ht()};

  position: ${e=>{var t;return(t=e.position)!==null&&t!==void 0?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,Zh=w.forwardRef(({children:e,fixed:t=!0,position:n="fixed",...r},o)=>b.createElement(sx,{fixed:t,position:t!==!1?n:void 0,ref:o,...r},e));Zh.displayName="AppBar";const jn=()=>{};function wn(e,t,n){return n!==null&&e>n?n:t!==null&&e<t?t:e}function ux(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function $d(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(ux(t)))}function an(e){return typeof e=="number"?`${e}px`:e}const cx=T.div`
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
`,dx=T.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,us=w.forwardRef(({alt:e="",children:t,noBorder:n=!1,size:r=35,square:o=!1,src:i,...a},l)=>b.createElement(cx,{noBorder:n,ref:l,size:an(r),square:o,src:i,...a},i?b.createElement(dx,{src:i,alt:e}):t));us.displayName="Avatar";const Ie={sm:"28px",md:"36px",lg:"44px"},fx=W`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:e="md"})=>Ie[e]};
  width: ${({fullWidth:e,size:t="md",square:n})=>e?"100%":n?Ie[t]:"auto"};
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
`,Ca=T.button`
  ${({active:e,disabled:t,primary:n,theme:r,variant:o})=>o==="flat"?W`
          ${On()}
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
            ${!e&&!t&&cr}
            outline-offset: -4px;
          }
        `:o==="menu"||o==="thin"?W`
          ${ht()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!t&&!e&&we({style:"buttonThin"})}
          }
          &:active {
            ${!t&&we({style:"buttonThinPressed"})}
          }
          ${e&&we({style:"buttonThinPressed"})}
          ${t&&pt()}
        `:W`
          ${ht()};
          border: none;
          ${t&&pt()}
          ${e?vo({mainColor:r.material,secondaryColor:r.borderLightest}):""}
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

            ${we(e?{style:o==="raised"?"window":"button",invert:!0}:{style:o==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!t&&we({style:o==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!e&&!t&&cr}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${fx}
`,De=w.forwardRef(({onClick:e,disabled:t=!1,children:n,type:r="button",fullWidth:o=!1,size:i="md",square:a=!1,active:l=!1,onTouchStart:u=jn,primary:s=!1,variant:c="default",...f},g)=>b.createElement(Ca,{active:l,disabled:t,$disabled:t,fullWidth:o,onClick:t?void 0:e,onTouchStart:u,primary:s,ref:g,size:i,square:a,type:r,variant:c,...f},n));De.displayName="Button";function ln({defaultValue:e,onChange:t,onChangePropName:n="onChange",readOnly:r,value:o,valuePropName:i="value"}){const a=o!==void 0,[l,u]=w.useState(e),s=w.useCallback(c=>{a||u(c)},[a]);if(a&&typeof t!="function"&&!r){const c=`Warning: You provided a \`${i}\` prop to a component without an \`${n}\` handler.${i==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${n}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${n}\` function that updates \`${i}\`.`}`;console.warn(c)}return[a?o:l,s]}const cs=T.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>Ie[e.size]};
  width: ${e=>e.square?Ie[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>Ie[e.size]};
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
  ${e=>e.$disabled&&pt()}
`,px=w.forwardRef(({size:e="lg",disabled:t,square:n,children:r,onClick:o,primary:i,...a},l)=>b.createElement(cs,{$disabled:t,size:e,square:n,onClick:t?void 0:o,primary:i,role:"menuitem",ref:l,"aria-disabled":t,...a},r));px.displayName="MenuListItem";const hx=T.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${we({style:"window"})}
  ${ht()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;hx.displayName="MenuList";const St=20,Di=T.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${St}px;
  height: ${St}px;
  opacity: 0;
  z-index: -1;
`,Bu=T.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&pt()}

  ${cs} & {
    margin: 0;
    height: 100%;
  }
  ${cs}:hover & {
    ${({$disabled:e,theme:t})=>!e&&W`
        color: ${t.materialTextInvert};
      `};
  }
`,zu=T.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Di}:focus ~ & {
    ${cr}
  }
  ${Di}:not(:disabled) ~ &:active {
    ${cr}
  }
`,Tt=T.div`
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
    ${e=>e.shadow&&`box-shadow:${_u};`}
  }
`,mx=T.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${Fu()}
`,em=w.forwardRef(({children:e,shadow:t=!0,...n},r)=>b.createElement(Tt,{ref:r,shadow:t,...n},b.createElement(mx,null,e)));em.displayName="ScrollView";const tm=W`
  width: ${St}px;
  height: ${St}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,vx=T(Tt)`
  ${tm}
  width: ${St}px;
  height: ${St}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,gx=T.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${tm}
  width: ${St-4}px;
  height: ${St-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,yx=T.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,xx=T.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:t})=>vo({mainColor:e?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,wx={flat:gx,default:vx},ds=w.forwardRef(({checked:e,className:t="",defaultChecked:n=!1,disabled:r=!1,indeterminate:o=!1,label:i="",onChange:a=jn,style:l={},value:u,variant:s="default",...c},f)=>{var g;const[k,S]=ln({defaultValue:n,onChange:a,readOnly:(g=c.readOnly)!==null&&g!==void 0?g:r,value:e}),C=w.useCallback(h=>{const y=h.target.checked;S(y),a(h)},[a,S]),d=wx[s];let p=null;return o?p=xx:k&&(p=yx),b.createElement(Bu,{$disabled:r,className:t,style:l},b.createElement(Di,{disabled:r,onChange:r?void 0:C,readOnly:r,type:"checkbox",value:u,checked:k,"data-indeterminate":o,ref:f,...c}),b.createElement(d,{$disabled:r,role:"presentation"},p&&b.createElement(p,{$disabled:r,variant:s})),i&&b.createElement(zu,null,i))});ds.displayName="Checkbox";const Uu=T.div`
  ${({orientation:e,theme:t,size:n="100%"})=>e==="vertical"?`
    height: ${an(n)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `:`
    width: ${an(n)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;Uu.displayName="Separator";const bx=T(Ca)`
  padding-left: 8px;
`,Ax=T(Uu)`
  height: 21px;
  position: relative;
  top: 0;
`,nm=T.input`
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
`,kx=T.div`
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
  ${nm}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${cr}
    outline-offset: -8px;
  }
`,Sx=T.span`
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
`,Ex=w.forwardRef(({value:e,defaultValue:t,onChange:n=jn,disabled:r=!1,variant:o="default",...i},a)=>{var l;const[u,s]=ln({defaultValue:t,onChange:n,readOnly:(l=i.readOnly)!==null&&l!==void 0?l:r,value:e}),c=f=>{const g=f.target.value;s(g),n(f)};return b.createElement(bx,{disabled:r,as:"div",variant:o,size:"md"},b.createElement(nm,{onChange:c,readOnly:r,disabled:r,value:u??"#008080",type:"color",ref:a,...i}),b.createElement(kx,{$disabled:r,color:u??"#008080",role:"presentation"}),o==="default"&&b.createElement(Ax,{orientation:"vertical"}),b.createElement(Sx,{$disabled:r,variant:o}))});Ex.displayName="ColorInput";const Tx=T.div`
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
      ${vo({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
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
`,Pd=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Cx=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function $x({digit:e=0,pixelSize:t=2,...n}){const r=Cx[Number(e)].map((o,i)=>o?`${Pd[i]} active`:Pd[i]);return b.createElement(Tx,{pixelSize:t,...n},r.map((o,i)=>b.createElement("span",{className:o,key:i})))}const Px=T.div`
  ${we({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Rx={sm:1,md:2,lg:3,xl:4},Dx=w.forwardRef(({value:e=0,minLength:t=3,size:n="md",...r},o)=>{const i=w.useMemo(()=>e.toString().padStart(t,"0").split(""),[t,e]);return b.createElement(Px,{ref:o,...r},i.map((a,l)=>b.createElement($x,{digit:a,pixelSize:Rx[n],key:l})))});Dx.displayName="Counter";const rm=W`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${Ie.md};
`,Ix=T(Tt).attrs({"data-testid":"variant-default"})`
  ${rm}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,Ox=T.div.attrs({"data-testid":"variant-flat"})`
  ${On()}
  ${rm}
  position: relative;
`,om=W`
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
  ${({disabled:e,variant:t})=>t!=="flat"&&e&&pt()}
`,Nx=T.input`
  ${om}
  padding: 0 8px;
`,jx=T.textarea`
  ${om}
  padding: 8px;
  resize: none;
  ${({variant:e})=>Fu(e)}
`,$a=w.forwardRef(({className:e,disabled:t=!1,fullWidth:n,onChange:r=jn,shadow:o=!0,style:i,variant:a="default",...l},u)=>{const s=a==="flat"?Ox:Ix,c=w.useMemo(()=>{var f;return l.multiline?b.createElement(jx,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:u,variant:a,...l}):b.createElement(Nx,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:u,type:(f=l.type)!==null&&f!==void 0?f:"text",variant:a,...l})},[t,r,l,u,a]);return b.createElement(s,{className:e,fullWidth:n,$disabled:t,shadow:o,style:i},c)});$a.displayName="TextInput";const Lx=T.div`
  display: inline-flex;
  align-items: center;
`,fs=T(De)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?W`
          height: calc(50% - 1px);
        `:W`
          height: 50%;
        `}
`,Mx=T.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>e==="flat"?W`
          height: calc(${Ie.md} - 4px);
        `:W`
          height: ${Ie.md};
          margin-left: 2px;
        `}
`,Rd=T.span`
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
  ${fs}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?W`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:W`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,Ii=w.forwardRef(({className:e,defaultValue:t,disabled:n=!1,max:r,min:o,onChange:i,readOnly:a,step:l=1,style:u,value:s,variant:c="default",width:f,...g},k)=>{const[S,C]=ln({defaultValue:t,onChange:i,readOnly:a,value:s}),d=w.useCallback(R=>{const I=parseFloat(R.target.value);C(I)},[C]),p=w.useCallback(R=>{const I=wn(parseFloat(((S??0)+R).toFixed(2)),o??null,r??null);C(I),i==null||i(I)},[r,o,i,C,S]),h=w.useCallback(()=>{S!==void 0&&(i==null||i(S))},[i,S]),y=w.useCallback(()=>{p(l)},[p,l]),A=w.useCallback(()=>{p(-l)},[p,l]),E=c==="flat"?"flat":"raised";return b.createElement(Lx,{className:e,style:{...u,width:f!==void 0?an(f):"auto"},...g},b.createElement($a,{value:S,variant:c,onChange:d,disabled:n,type:"number",readOnly:a,ref:k,fullWidth:!0,onBlur:h}),b.createElement(Mx,{variant:c},b.createElement(fs,{"data-testid":"increment",variant:E,disabled:n||a,onClick:y},b.createElement(Rd,{invert:!0})),b.createElement(fs,{"data-testid":"decrement",variant:E,disabled:n||a,onClick:A},b.createElement(Rd,null))))});Ii.displayName="NumberInput";function _x(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<10;n+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const im=e=>w.useMemo(()=>_x(),[e]),am=W`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,lm=W`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,Hu=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,Fx=T.div`
  ${am}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${Hu}:focus & {
    ${lm}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,sm=W`
  height: ${Ie.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?pt():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,Bx=T(Tt)`
  ${sm}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,zx=T.div`
  ${On()}
  ${sm}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,Ux=T.select`
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
  ${am}
  cursor: pointer;
  &:disabled {
    ${pt()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,um=T(Ca).attrs(()=>({"aria-hidden":"true"}))`
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
`,Hx=T.span`
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
  ${um}:active & {
    margin-top: 2px;
  }
`,Wx=T.ul`
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
  box-shadow: ${Mu};
  ${({variant:e="default"})=>e==="flat"?W`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:W`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:e="default"})=>Fu(e)}
`,Vx=T.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${Ie.md} - 4px);
  line-height: calc(${Ie.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:e})=>e?lm:""}
  user-select: none;
`,Qx=[],cm=({className:e,defaultValue:t,disabled:n,native:r,onChange:o,options:i=Qx,readOnly:a,style:l,value:u,variant:s,width:c})=>{var f;const g=w.useMemo(()=>i.filter(Boolean),[i]),[k,S]=ln({defaultValue:t??((f=g==null?void 0:g[0])===null||f===void 0?void 0:f.value),onChange:o,readOnly:a,value:u}),C=!(n||a),d=w.useMemo(()=>({className:e,style:{...l,width:c}}),[e,l,c]),p=w.useMemo(()=>b.createElement(um,{as:"div","data-testid":"select-button",$disabled:n,native:r,tabIndex:-1,variant:s==="flat"?"flat":"raised"},b.createElement(Hx,{"data-testid":"select-icon",$disabled:n})),[n,r,s]),h=w.useMemo(()=>s==="flat"?zx:Bx,[s]);return w.useMemo(()=>({isEnabled:C,options:g,value:k,setValue:S,wrapperProps:d,DropdownButton:p,Wrapper:h}),[p,h,C,g,S,k,d])},Gx={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},Kx=1e3,Yx=({onBlur:e,onChange:t,onClose:n,onFocus:r,onKeyDown:o,onMouseDown:i,onOpen:a,open:l,options:u,readOnly:s,value:c,selectRef:f,setValue:g,wrapperRef:k})=>{const S=w.useRef(null),C=w.useRef([]),d=w.useRef(0),p=w.useRef(0),h=w.useRef(),y=w.useRef("search"),A=w.useRef(""),E=w.useRef(),[R,I]=ln({defaultValue:!1,onChange:a,onChangePropName:"onOpen",readOnly:s,value:l,valuePropName:"open"}),j=w.useMemo(()=>{const N=u.findIndex(B=>B.value===c);return d.current=wn(N,0,null),u[N]},[u,c]),[_,J]=w.useState(u[0]),K=w.useCallback(N=>{const B=S.current,G=C.current[N];if(!G||!B){h.current=N;return}h.current=void 0;const H=B.clientHeight,ee=B.scrollTop,se=B.scrollTop+H,Z=G.offsetTop,ue=G.offsetHeight,re=G.offsetTop+G.offsetHeight;Z<ee&&B.scrollTo(0,Z),re>se&&B.scrollTo(0,Z-H+ue),G.focus({preventScroll:!0})},[S]),Y=w.useCallback((N,{scroll:B}={})=>{var G;const H=u.length-1;let ee;switch(N){case"first":{ee=0;break}case"last":{ee=H;break}case"next":{ee=wn(p.current+1,0,H);break}case"previous":{ee=wn(p.current-1,0,H);break}case"selected":{ee=wn((G=d.current)!==null&&G!==void 0?G:0,0,H);break}default:ee=N}p.current=ee,J(u[ee]),B&&K(ee)},[p,u,K]),oe=w.useCallback(({fromEvent:N})=>{I(!0),Y("selected",{scroll:!0}),a==null||a({fromEvent:N})},[Y,a,I]),V=w.useCallback(()=>{y.current="search",A.current="",clearTimeout(E.current)},[]),z=w.useCallback(({focusSelect:N,fromEvent:B})=>{var G;n==null||n({fromEvent:B}),I(!1),J(u[0]),V(),h.current=void 0,N&&((G=f.current)===null||G===void 0||G.focus())},[V,n,u,f,I]),ae=w.useCallback(({fromEvent:N})=>{R?z({focusSelect:!1,fromEvent:N}):oe({fromEvent:N})},[z,oe,R]),le=w.useCallback((N,{fromEvent:B})=>{d.current!==N&&(d.current=N,g(u[N].value),t==null||t(u[N],{fromEvent:B}))},[t,u,g]),Q=w.useCallback(({focusSelect:N,fromEvent:B})=>{le(p.current,{fromEvent:B}),z({focusSelect:N,fromEvent:B})},[z,le]),U=w.useCallback((N,{fromEvent:B,select:G})=>{var H;switch(y.current==="cycleFirstLetter"&&N!==A.current&&(y.current="search"),N===A.current?y.current="cycleFirstLetter":A.current+=N,y.current){case"search":{let ee=u.findIndex(se=>{var Z;return((Z=se.label)===null||Z===void 0?void 0:Z.toLocaleUpperCase().indexOf(A.current))===0});ee<0&&(ee=u.findIndex(se=>{var Z;return((Z=se.label)===null||Z===void 0?void 0:Z.toLocaleUpperCase().indexOf(N))===0}),A.current=N),ee>=0&&(G?le(ee,{fromEvent:B}):Y(ee,{scroll:!0}));break}case"cycleFirstLetter":{const ee=G?(H=d.current)!==null&&H!==void 0?H:-1:p.current;let se=u.findIndex((Z,ue)=>{var re;return ue>ee&&((re=Z.label)===null||re===void 0?void 0:re.toLocaleUpperCase().indexOf(N))===0});se<0&&(se=u.findIndex(Z=>{var ue;return((ue=Z.label)===null||ue===void 0?void 0:ue.toLocaleUpperCase().indexOf(N))===0})),se>=0&&(G?le(se,{fromEvent:B}):Y(se,{scroll:!0}));break}}clearTimeout(E.current),E.current=setTimeout(()=>{y.current==="search"&&(A.current="")},Kx)},[Y,u,le]),F=w.useCallback(N=>{var B;N.button===0&&(N.preventDefault(),(B=f.current)===null||B===void 0||B.focus(),ae({fromEvent:N}),i==null||i(N))},[i,f,ae]),X=w.useCallback(N=>{Q({focusSelect:!0,fromEvent:N})},[Q]),O=w.useCallback(N=>{const{altKey:B,code:G,ctrlKey:H,metaKey:ee,shiftKey:se}=N,{ARROW_DOWN:Z,ARROW_UP:ue,END:re,ENTER:he,ESC:Se,HOME:ve,SPACE:Ft,TAB:st}=Gx,Ue=B||H||ee||se;if(!(G===st&&(B||H||ee)||G!==st&&Ue))switch(G){case Z:{if(N.preventDefault(),!R){oe({fromEvent:N});return}Y("next",{scroll:!0});break}case ue:{if(N.preventDefault(),!R){oe({fromEvent:N});return}Y("previous",{scroll:!0});break}case re:{if(N.preventDefault(),!R){oe({fromEvent:N});return}Y("last",{scroll:!0});break}case he:{if(!R)return;N.preventDefault(),Q({focusSelect:!0,fromEvent:N});break}case Se:{if(!R)return;N.preventDefault(),z({focusSelect:!0,fromEvent:N});break}case ve:{if(N.preventDefault(),!R){oe({fromEvent:N});return}Y("first",{scroll:!0});break}case Ft:{N.preventDefault(),R?Q({focusSelect:!0,fromEvent:N}):oe({fromEvent:N});break}case st:{if(!R)return;se||N.preventDefault(),Q({focusSelect:!se,fromEvent:N});break}default:!Ue&&G.match(/^Key/)&&(N.preventDefault(),N.stopPropagation(),U(G.replace(/^Key/,""),{select:!R,fromEvent:N}))}},[Y,z,R,oe,U,Q]),P=w.useCallback(N=>{O(N),o==null||o(N)},[O,o]),x=w.useCallback(N=>{Y(N)},[Y]),$=w.useCallback(N=>{R||(V(),e==null||e(N))},[V,e,R]),v=w.useCallback(N=>{V(),r==null||r(N)},[V,r]),L=w.useCallback(N=>{S.current=N,h.current!==void 0&&K(h.current)},[K]),D=w.useCallback((N,B)=>{C.current[B]=N,h.current===B&&K(h.current)},[K]);return w.useEffect(()=>{if(!R)return()=>{};const N=B=>{var G;const H=B.target;!((G=k.current)===null||G===void 0)&&G.contains(H)||(B.preventDefault(),z({focusSelect:!1,fromEvent:B}))};return document.addEventListener("mousedown",N),()=>{document.removeEventListener("mousedown",N)}},[z,R,k]),w.useMemo(()=>({activeOption:_,handleActivateOptionIndex:x,handleBlur:$,handleButtonKeyDown:P,handleDropdownKeyDown:O,handleFocus:v,handleMouseDown:F,handleOptionClick:X,handleSetDropdownRef:L,handleSetOptionRef:D,open:R,selectedOption:j}),[_,x,$,P,v,O,F,X,L,D,R,j])},Jx=w.forwardRef(({className:e,defaultValue:t,disabled:n,onChange:r,options:o,readOnly:i,style:a,value:l,variant:u,width:s,...c},f)=>{const{isEnabled:g,options:k,setValue:S,value:C,DropdownButton:d,Wrapper:p}=cm({defaultValue:t,disabled:n,native:!0,onChange:r,options:o,readOnly:i,value:l,variant:u}),h=w.useCallback(y=>{const A=k.find(E=>E.value===y.target.value);A&&(S(A.value),r==null||r(A,{fromEvent:y}))},[r,k,S]);return b.createElement(p,{className:e,style:{...a,width:s}},b.createElement(Hu,null,b.createElement(Ux,{...c,disabled:n,onChange:g?h:jn,ref:f,value:C},k.map((y,A)=>{var E;return b.createElement("option",{key:`${y.value}-${A}`,value:y.value},(E=y.label)!==null&&E!==void 0?E:y.value)})),d))});Jx.displayName="SelectNative";function Xx({activateOptionIndex:e,active:t,index:n,onClick:r,option:o,selected:i,setRef:a}){const l=w.useCallback(()=>{e(n)},[e,n]),u=w.useCallback(c=>{a(c,n)},[n,a]),s=im();return b.createElement(Vx,{active:t,"aria-selected":i?"true":void 0,"data-value":o.value,id:s,onClick:r,onMouseEnter:l,ref:u,role:"option",tabIndex:0},o.label)}function qx({"aria-label":e,"aria-labelledby":t,className:n,defaultValue:r,disabled:o=!1,formatDisplay:i,inputProps:a,labelId:l,menuMaxHeight:u,name:s,onBlur:c,onChange:f,onClose:g,onFocus:k,onKeyDown:S,onMouseDown:C,onOpen:d,open:p,options:h,readOnly:y,shadow:A=!0,style:E,variant:R="default",value:I,width:j="auto",..._},J){const{isEnabled:K,options:Y,setValue:oe,value:V,wrapperProps:z,DropdownButton:ae,Wrapper:le}=cm({className:n,defaultValue:r,disabled:o,native:!1,onChange:f,options:h,style:E,readOnly:y,value:I,variant:R,width:j}),Q=w.useRef(null),U=w.useRef(null),F=w.useRef(null),{activeOption:X,handleActivateOptionIndex:O,handleBlur:P,handleButtonKeyDown:x,handleDropdownKeyDown:$,handleFocus:v,handleMouseDown:L,handleOptionClick:D,handleSetDropdownRef:N,handleSetOptionRef:B,open:G,selectedOption:H}=Yx({onBlur:c,onChange:f,onClose:g,onFocus:k,onKeyDown:S,onMouseDown:C,onOpen:d,open:p,options:Y,value:V,selectRef:U,setValue:oe,wrapperRef:F});w.useImperativeHandle(J,()=>({focus:he=>{var Se;(Se=U.current)===null||Se===void 0||Se.focus(he)},node:Q.current,value:String(V)}),[V]);const ee=w.useMemo(()=>H?typeof i=="function"?i(H):H.label:"",[i,H]),se=K?1:void 0,Z=w.useMemo(()=>u?{overflow:"auto",maxHeight:u}:void 0,[u]),ue=im(),re=w.useMemo(()=>Y.map((he,Se)=>{const ve=`${V}-${Se}`,Ft=he===X,st=he===H;return b.createElement(Xx,{activateOptionIndex:O,active:Ft,index:Se,key:ve,onClick:D,option:he,selected:st,setRef:B})}),[X,O,D,B,Y,H,V]);return b.createElement(le,{...z,$disabled:o,ref:F,shadow:A,style:{...E,width:j}},b.createElement("input",{name:s,ref:Q,type:"hidden",value:String(V),...a}),b.createElement(Hu,{"aria-disabled":o,"aria-expanded":G,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t??l,"aria-owns":K&&G?ue:void 0,onBlur:P,onFocus:v,onKeyDown:x,onMouseDown:K?L:C,ref:U,role:"button",tabIndex:se,..._},b.createElement(Fx,null,ee),ae),K&&G&&b.createElement(Wx,{id:ue,onKeyDown:$,ref:N,role:"listbox",style:Z,tabIndex:0,variant:R},re))}const Pa=w.forwardRef(qx);Pa.displayName="Select";const Zx=T.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,sn=w.forwardRef(function({children:t,noPadding:n=!1,...r},o){return b.createElement(Zx,{noPadding:n,ref:o,...r},t)});sn.displayName="Toolbar";const ew=T.div`
  padding: 16px;
`,go=w.forwardRef(function({children:t,...n},r){return b.createElement(ew,{ref:r,...n},t)});go.displayName="WindowContent";const tw=T.div`
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

  ${Ca} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,Wu=w.forwardRef(function({active:t=!0,children:n,...r},o){return b.createElement(tw,{active:t,ref:o,...r},n)});Wu.displayName="WindowHeader";const nw=T.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${we({style:"window"})}
  ${ht()}
`,rw=T.span`
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
`,Ra=w.forwardRef(({children:e,resizable:t=!1,resizeRef:n,shadow:r=!0,...o},i)=>b.createElement(nw,{ref:i,shadow:r,...o},e,t&&b.createElement(rw,{"data-testid":"resizeHandle",ref:n})));Ra.displayName="Window";const ow=T(em)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,iw=T.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,aw=T.div`
  display: flex;
  flex-wrap: wrap;
`,$t=T.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,lw=T.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,sw=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function uw(e,t){return new Date(e,t+1,0).getDate()}function cw(e,t,n){return new Date(e,t,n).getDay()}function dw(e){const t=new Date(Date.parse(e)),n=t.getUTCDate(),r=t.getUTCMonth(),o=t.getUTCFullYear();return{day:n,month:r,year:o}}const fw=w.forwardRef(({className:e,date:t=new Date().toISOString(),onAccept:n,onCancel:r,shadow:o=!0},i)=>{const[a,l]=w.useState(()=>dw(t)),{year:u,month:s,day:c}=a,f=w.useCallback(({value:d})=>{l(p=>({...p,month:d}))},[]),g=w.useCallback(d=>{l(p=>({...p,year:d}))},[]),k=w.useCallback(d=>{l(p=>({...p,day:d}))},[]),S=w.useCallback(()=>{const d=[a.year,a.month+1,a.day].map(p=>String(p).padStart(2,"0")).join("-");n==null||n(d)},[a.day,a.month,a.year,n]),C=w.useMemo(()=>{const d=Array.from({length:42}),p=cw(u,s,1);let h=c;const y=uw(u,s);return h=h<y?h:y,d.forEach((A,E)=>{if(E>=p&&E<y+p){const R=E-p+1;d[E]=b.createElement($t,{key:E,onClick:()=>{k(R)}},b.createElement(lw,{active:R===h},R))}else d[E]=b.createElement($t,{key:E})}),d},[c,k,s,u]);return b.createElement(Ra,{className:e,ref:i,shadow:o,style:{margin:20}},b.createElement(Wu,null,b.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),b.createElement(go,null,b.createElement(sn,{noPadding:!0,style:{justifyContent:"space-between"}},b.createElement(Pa,{options:sw,value:s,onChange:f,width:128,menuMaxHeight:200}),b.createElement(Ii,{value:u,onChange:g,width:100})),b.createElement(ow,null,b.createElement(iw,null,b.createElement($t,null,"S"),b.createElement($t,null,"M"),b.createElement($t,null,"T"),b.createElement($t,null,"W"),b.createElement($t,null,"T"),b.createElement($t,null,"F"),b.createElement($t,null,"S")),b.createElement(aw,null,C)),b.createElement(sn,{noPadding:!0,style:{justifyContent:"space-between"}},b.createElement(De,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),b.createElement(De,{fullWidth:!0,onClick:n?S:void 0,disabled:!n},"OK"))))});fw.displayName="DatePicker";const pw=e=>{switch(e){case"status":case"well":return W`
        ${we({style:"status"})}
      `;case"window":case"outside":return W`
        ${we({style:"window"})}
      `;case"field":return W`
        ${we({style:"field"})}
      `;default:return W`
        ${we()}
      `}},hw=T.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>pw(e)}
  ${({variant:e})=>ht(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,mw=w.forwardRef(({children:e,shadow:t=!1,variant:n="window",...r},o)=>b.createElement(hw,{ref:o,shadow:t,variant:n,...r},e));mw.displayName="Frame";const vw=T.fieldset`
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
  ${e=>e.$disabled&&pt()}
`,gw=T.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,Tn=w.forwardRef(({label:e,disabled:t=!1,variant:n="default",children:r,...o},i)=>b.createElement(vw,{"aria-disabled":t,$disabled:t,variant:n,ref:i,...o},e&&b.createElement(gw,{variant:n},e),r));Tn.displayName="GroupBox";const yw=T.div`
  ${({theme:e,size:t="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${an(t)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;yw.displayName="Handle";const xw="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",ww=T.div`
  display: inline-block;
  height: ${({size:e})=>an(e)};
  width: ${({size:e})=>an(e)};
`,bw=T.span`
  display: block;
  background: ${xw};
  background-size: cover;
  width: 100%;
  height: 100%;
`,dm=w.forwardRef(({size:e=30,...t},n)=>b.createElement(ww,{size:e,ref:n,...t},b.createElement(bw,null)));dm.displayName="Hourglass";const Aw=T.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,kw=T.div`
  position: relative;
`,Sw=T.div`
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
`,Ew=T(Tt).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Tw=T.div`
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
`,fm=w.forwardRef(({backgroundStyles:e,children:t,...n},r)=>b.createElement(Aw,{ref:r,...n},b.createElement(kw,null,b.createElement(Sw,null,b.createElement(Ew,{style:e},t)),b.createElement(Tw,null))));fm.displayName="Monitor";const Cw=T.div`
  display: inline-block;
  height: ${Ie.md};
  width: 100%;
`,$w=T(Tt)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,pm=W`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Pw=T.div`
  position: relative;
  top: 4px;
  ${pm}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,Rw=T.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${pm}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Dw=T.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,hm=17,Iw=T.span`
  display: inline-block;
  width: ${hm}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,Ow=w.forwardRef(({hideValue:e=!1,shadow:t=!0,value:n,variant:r="default",...o},i)=>{const a=e?null:`${n}%`,l=w.useRef(null),[u,s]=w.useState([]),c=w.useCallback(()=>{if(!l.current||n===void 0)return;const f=l.current.getBoundingClientRect().width,g=Math.round(n/100*f/hm);s(Array.from({length:g}))},[n]);return w.useEffect(()=>(c(),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)),[c]),b.createElement(Cw,{"aria-valuenow":n!==void 0?Math.round(n):void 0,ref:i,role:"progressbar",variant:r,...o},b.createElement($w,{variant:r,shadow:t},r==="default"?b.createElement(b.Fragment,null,b.createElement(Pw,{"data-testid":"defaultProgress1"},a),b.createElement(Rw,{"data-testid":"defaultProgress2",value:n},a)):b.createElement(Dw,{ref:l,"data-testid":"tileProgress"},u.map((f,g)=>b.createElement(Iw,{key:g})))))});Ow.displayName="ProgressBar";const mm=W`
  width: ${St}px;
  height: ${St}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Nw=T(Tt)`
  ${mm}
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
`,jw=T.div`
  ${On()}
  ${mm}
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
`,Lw=T.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Mw={flat:jw,default:Nw},pn=w.forwardRef(({checked:e,className:t="",disabled:n=!1,label:r="",onChange:o,style:i={},variant:a="default",...l},u)=>{const s=Mw[a];return b.createElement(Bu,{$disabled:n,className:t,style:i},b.createElement(s,{$disabled:n,role:"presentation"},e&&b.createElement(Lw,{$disabled:n,variant:a})),b.createElement(Di,{disabled:n,onChange:n?void 0:o,readOnly:n,type:"radio",checked:e,ref:u,...l}),r&&b.createElement(zu,null,r))});pn.displayName="Radio";const _w=typeof window<"u"?w.useLayoutEffect:w.useEffect;function dn(e){const t=w.useRef(e);return _w(()=>{t.current=e}),w.useCallback((...n)=>(0,t.current)(...n),[])}function Dd(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Id(e,t){return w.useMemo(()=>e==null&&t==null?null:n=>{Dd(e,n),Dd(t,n)},[e,t])}let Da=!0,ps=!1,Od;const Fw={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Bw(e){if("type"in e){const{type:t,tagName:n}=e;if(n==="INPUT"&&Fw[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function zw(e){e.metaKey||e.altKey||e.ctrlKey||(Da=!0)}function il(){Da=!1}function Uw(){this.visibilityState==="hidden"&&ps&&(Da=!0)}function Hw(e){e.addEventListener("keydown",zw,!0),e.addEventListener("mousedown",il,!0),e.addEventListener("pointerdown",il,!0),e.addEventListener("touchstart",il,!0),e.addEventListener("visibilitychange",Uw,!0)}function Ww(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Da||Bw(t)}function Vw(){ps=!0,window.clearTimeout(Od),Od=window.setTimeout(()=>{ps=!1},100)}function Qw(){const e=w.useCallback(t=>{const n=hu.findDOMNode(t);n!=null&&Hw(n.ownerDocument)},[]);return{isFocusVisible:Ww,onBlurVisible:Vw,ref:e}}function Gw(e,t,n){return(n-t)*e+t}function Io(e,t){if(t!==void 0&&"changedTouches"in e){for(let n=0;n<e.changedTouches.length;n+=1){const r=e.changedTouches[n];if(r.identifier===t)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function Oo(e){return e&&e.ownerDocument||document}function Kw(e,t){var n;const{index:r}=(n=e.reduce((o,i,a)=>{const l=Math.abs(t-i);return o===null||l<o.distance||l===o.distance?{distance:l,index:a}:o},null))!==null&&n!==void 0?n:{};return r??-1}const Yw=T.div`
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
`,vm=()=>W`
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
`,Jw=T(Tt)`
  ${vm()}
`,Xw=T(Tt)`
  ${vm()}

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
`,qw=T.span`
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
          ${On()}
          outline: 2px solid ${({theme:t})=>t.flatDark};
          background: ${({theme:t})=>t.flatLight};
        `:W`
          ${ht()}
          ${we()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&vo({mainColor:t.material,secondaryColor:t.borderLightest})}
`,Qn=6,Zw=T.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>e==="vertical"?W`
          right: ${-Qn-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${Qn}px;
          border-bottom: 2px solid ${({theme:t})=>t.materialText};
        `:W`
          bottom: ${-Qn}px;
          height: ${Qn}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:t})=>t.materialText};
          border-right: 1px solid ${({theme:t})=>t.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:t})=>e&&W`
      ${pt()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,eb=T.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>e==="vertical"?W`
          transform: translate(${Qn+2}px, ${Qn+1}px);
        `:W`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,Oi=w.forwardRef(({defaultValue:e,disabled:t=!1,marks:n=!1,max:r=100,min:o=0,name:i,onChange:a,onChangeCommitted:l,onMouseDown:u,orientation:s="horizontal",size:c="100%",step:f=1,value:g,variant:k="default",...S},C)=>{const d=k==="flat"?Xw:Jw,p=s==="vertical",[h=o,y]=ln({defaultValue:e,onChange:a??l,value:g}),{isFocusVisible:A,onBlurVisible:E,ref:R}=Qw(),[I,j]=w.useState(!1),_=w.useRef(),J=w.useRef(null),K=Id(R,_),Y=Id(C,K),oe=dn(P=>{A(P)&&j(!0)}),V=dn(()=>{I!==!1&&(j(!1),E())}),z=w.useRef(),ae=w.useMemo(()=>n===!0&&Number.isFinite(f)?[...Array(Math.round((r-o)/f)+1)].map((P,x)=>({label:void 0,value:o+f*x})):Array.isArray(n)?n:[],[n,r,o,f]),le=dn(P=>{const x=(r-o)/10,$=ae.map(D=>D.value),v=$.indexOf(h);let L=0;switch(P.key){case"Home":L=o;break;case"End":L=r;break;case"PageUp":f&&(L=h+x);break;case"PageDown":f&&(L=h-x);break;case"ArrowRight":case"ArrowUp":f?L=h+f:L=$[v+1]||$[$.length-1];break;case"ArrowLeft":case"ArrowDown":f?L=h-f:L=$[v-1]||$[0];break;default:return}P.preventDefault(),f&&(L=$d(L,f,o)),L=wn(L,o,r),y(L),j(!0),a==null||a(L),l==null||l(L)}),Q=w.useCallback(P=>{if(!_.current)return 0;const x=_.current.getBoundingClientRect();let $;p?$=(x.bottom-P.y)/x.height:$=(P.x-x.left)/x.width;let v;if(v=Gw($,o,r),f)v=$d(v,f,o);else{const L=ae.map(N=>N.value),D=Kw(L,v);v=L[D]}return v=wn(v,o,r),v},[ae,r,o,f,p]),U=dn(P=>{var x;const $=Io(P,z.current);if(!$)return;const v=Q($);(x=J.current)===null||x===void 0||x.focus(),y(v),j(!0),a==null||a(v)}),F=dn(P=>{const x=Io(P,z.current);if(!x)return;const $=Q(x);l==null||l($),z.current=void 0;const v=Oo(_.current);v.removeEventListener("mousemove",U),v.removeEventListener("mouseup",F),v.removeEventListener("touchmove",U),v.removeEventListener("touchend",F)}),X=dn(P=>{var x;u==null||u(P),P.preventDefault(),(x=J.current)===null||x===void 0||x.focus(),j(!0);const $=Io(P,z.current);if($){const L=Q($);y(L),a==null||a(L)}const v=Oo(_.current);v.addEventListener("mousemove",U),v.addEventListener("mouseup",F)}),O=dn(P=>{var x;P.preventDefault();const $=P.changedTouches[0];$!=null&&(z.current=$.identifier),(x=J.current)===null||x===void 0||x.focus(),j(!0);const v=Io(P,z.current);if(v){const D=Q(v);y(D),a==null||a(D)}const L=Oo(_.current);L.addEventListener("touchmove",U),L.addEventListener("touchend",F)});return w.useEffect(()=>{const{current:P}=_;P==null||P.addEventListener("touchstart",O);const x=Oo(P);return()=>{P==null||P.removeEventListener("touchstart",O),x.removeEventListener("mousemove",U),x.removeEventListener("mouseup",F),x.removeEventListener("touchmove",U),x.removeEventListener("touchend",F)}},[F,U,O]),b.createElement(Yw,{$disabled:t,hasMarks:!!ae.length,isFocused:I,onMouseDown:X,orientation:s,ref:Y,size:an(c),...S},b.createElement("input",{disabled:t,name:i,type:"hidden",value:h??0}),ae&&ae.map(P=>b.createElement(Zw,{$disabled:t,"data-testid":"tick",key:P.value/(r-o)*100,orientation:s,style:{[p?"bottom":"left"]:`${(P.value-o)/(r-o)*100}%`}},P.label&&b.createElement(eb,{"aria-hidden":!0,"data-testid":"mark",orientation:s},P.label))),b.createElement(d,{orientation:s,variant:k}),b.createElement(qw,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":s,"aria-valuemax":r,"aria-valuemin":o,"aria-valuenow":h,onBlur:V,onFocus:oe,onKeyDown:le,orientation:s,ref:J,role:"slider",style:{[p?"bottom":"left"]:`${(p?-100:0)+100*(h-o)/(r-o)}%`},tabIndex:t?void 0:0,variant:k}))});Oi.displayName="Slider";const tb=T.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${_u};
  overflow-y: auto;
`,Vu=w.forwardRef(function({children:t,...n},r){return b.createElement(tb,{ref:r,...n},t)});Vu.displayName="TableBody";const nb=T.td`
  padding: 0 8px;
`,Zn=w.forwardRef(function({children:t,...n},r){return b.createElement(nb,{ref:r,...n},t)});Zn.displayName="TableDataCell";const rb=T.thead`
  display: table-header-group;
`,Qu=w.forwardRef(function({children:t,...n},r){return b.createElement(rb,{ref:r,...n},t)});Qu.displayName="TableHead";const ob=T.th`
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
    ${we()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:e})=>!e&&W`
      &:active {
        &:before {
          ${we({invert:!0,style:"window"})}
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
  ${({$disabled:e})=>e&&pt()}
  &:hover {
    color: ${({theme:e})=>e.materialText};
    ${({$disabled:e})=>e&&pt()}
  }
`,er=w.forwardRef(function({disabled:t=!1,children:n,onClick:r,onTouchStart:o=jn,sort:i,...a},l){const u=i==="asc"?"ascending":i==="desc"?"descending":void 0;return b.createElement(ob,{$disabled:t,"aria-disabled":t,"aria-sort":u,onClick:t?void 0:r,onTouchStart:t?void 0:o,ref:l,...a},b.createElement("div",null,n))});er.displayName="TableHeadCell";const ib=T.tr`
  color: inherit;
  display: table-row;
  height: calc(${Ie.md} - 2px);
  line-height: calc(${Ie.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:e})=>e.canvasText};
  &:hover {
    background: ${({theme:e})=>e.hoverBackground};
    color: ${({theme:e})=>e.canvasTextInvert};
  }
`,Gr=w.forwardRef(function({children:t,...n},r){return b.createElement(ib,{ref:r,...n},t)});Gr.displayName="TableRow";const ab=T.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,lb=T(Tt)`
  &:before {
    box-shadow: none;
  }
`,gm=w.forwardRef(({children:e,...t},n)=>b.createElement(lb,null,b.createElement(ab,{ref:n,...t},e)));gm.displayName="Table";const sb=T.button`
  ${ht()}
  ${we()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${Ie.md};
  line-height: ${Ie.md};
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
    ${cr}
    outline-offset: -6px;
  }
  ${e=>e.selected&&`
    z-index: 1;
    height: calc(${Ie.md} + 4px);
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
`,hs=w.forwardRef(({value:e,onClick:t,selected:n=!1,children:r,...o},i)=>b.createElement(sb,{"aria-selected":n,selected:n,onClick:a=>t==null?void 0:t(e,a),ref:i,role:"tab",...o},r));hs.displayName="Tab";const ub=T.div`
  ${ht()}
  ${we()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,ym=w.forwardRef(({children:e,...t},n)=>b.createElement(ub,{ref:n,...t},e));ym.displayName="TabBody";const cb=T.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,db=T.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;function fb(e,t){const n=[];for(let r=t;r>0;r-=1)n.push(e.splice(0,Math.ceil(e.length/r)));return n}const xm=w.forwardRef(({value:e,onChange:t=jn,children:n,rows:r=1,...o},i)=>{const a=w.useMemo(()=>{var l;const u=(l=b.Children.map(n,f=>{if(!b.isValidElement(f))return null;const g={selected:f.props.value===e,onClick:t};return b.cloneElement(f,g)}))!==null&&l!==void 0?l:[],s=fb(u,r).map((f,g)=>({key:g,tabs:f})),c=s.findIndex(f=>f.tabs.some(g=>g.props.selected));return s.push(s.splice(c,1)[0]),s},[n,t,r,e]);return b.createElement(cb,{...o,isMultiRow:r>1,role:"tablist",ref:i},a.map(l=>b.createElement(db,{key:l.key},l.tabs)))});xm.displayName="Tabs";const pb=["blur","focus"],hb=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function Nd(e){return"nativeEvent"in e&&pb.includes(e.type)}function jd(e){return"nativeEvent"in e&&hb.includes(e.type)}const mb={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},vb=T.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${Mu};
  text-align: center;
  font-size: 1rem;
  ${e=>mb[e.position]}
`,gb=T.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,yb=w.forwardRef(({className:e,children:t,disableFocusListener:n=!1,disableMouseListener:r=!1,enterDelay:o=1e3,leaveDelay:i=0,onBlur:a,onClose:l,onFocus:u,onMouseEnter:s,onMouseLeave:c,onOpen:f,style:g,text:k,position:S="top",...C},d)=>{const[p,h]=w.useState(!1),[y,A]=w.useState(),[E,R]=w.useState(),I=!n,j=!r,_=Q=>{window.clearTimeout(y),window.clearTimeout(E);const U=window.setTimeout(()=>{h(!0),f==null||f(Q)},o);A(U)},J=Q=>{Q.persist(),Nd(Q)?u==null||u(Q):jd(Q)&&(s==null||s(Q)),_(Q)},K=Q=>{window.clearTimeout(y),window.clearTimeout(E);const U=window.setTimeout(()=>{h(!1),l==null||l(Q)},i);R(U)},Y=Q=>{Q.persist(),Nd(Q)?a==null||a(Q):jd(Q)&&(c==null||c(Q)),K(Q)},oe=I?Y:void 0,V=I?J:void 0,z=j?J:void 0,ae=j?Y:void 0,le=I?0:void 0;return b.createElement(gb,{"data-testid":"tooltip-wrapper",onBlur:oe,onFocus:V,onMouseEnter:z,onMouseLeave:ae,tabIndex:le},b.createElement(vb,{className:e,"data-testid":"tooltip",position:S,ref:d,show:p,style:g,...C},k),t)});yb.displayName="Tooltip";const ms=T(zu)`
  white-space: nowrap;
`,wm=W`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":W`
          cursor: pointer;

          :focus {
            ${ms} {
              background: ${({theme:t})=>t.hoverBackground};
              color: ${({theme:t})=>t.materialTextInvert};
              outline: 2px dotted ${({theme:t})=>t.focusSecondary};
            }
          }
        `}
`,xb=T.ul`
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
`,wb=T.li`
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
`,bb=T.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,Ab=T.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${wm};

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
`,Ld=T(Bu)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${wm};
`,kb=T.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function Md(e,t){return e.includes(t)?e.filter(n=>n!==t):[...e,t]}function _d(e){e.preventDefault()}function bm({className:e,disabled:t,expanded:n,innerRef:r,level:o,select:i,selected:a,style:l,tree:u=[]}){const s=o===0,c=w.useCallback(f=>{var g,k;const S=!!(f.items&&f.items.length>0),C=n.includes(f.id),d=(g=t||f.disabled)!==null&&g!==void 0?g:!1,p=d?_d:E=>i(E,f),h=d?_d:E=>i(E,f),y=a===f.id,A=b.createElement(kb,{"aria-hidden":!0},f.icon);return b.createElement(wb,{key:f.label,isRootLevel:s,role:"treeitem","aria-expanded":C,"aria-selected":y,hasItems:S},S?b.createElement(bb,{open:C},b.createElement(Ab,{onClick:p,$disabled:d},b.createElement(Ld,{$disabled:d},A,b.createElement(ms,null,f.label))),C&&b.createElement(bm,{className:e,disabled:d,expanded:n,level:o+1,select:i,selected:a,style:l,tree:(k=f.items)!==null&&k!==void 0?k:[]})):b.createElement(Ld,{as:"button",$disabled:d,onClick:h},A,b.createElement(ms,null,f.label)))},[e,t,n,s,o,i,a,l]);return b.createElement(xb,{className:s?e:void 0,style:s?l:void 0,ref:s?r:void 0,role:s?"tree":"group",isRootLevel:s},u.map(c))}function Sb({className:e,defaultExpanded:t=[],defaultSelected:n,disabled:r=!1,expanded:o,onNodeSelect:i,onNodeToggle:a,selected:l,style:u,tree:s=[]},c){const[f,g]=ln({defaultValue:t,onChange:a,onChangePropName:"onNodeToggle",value:o,valuePropName:"expanded"}),[k,S]=ln({defaultValue:n,onChange:i,onChangePropName:"onNodeSelect",value:l,valuePropName:"selected"}),C=w.useCallback((h,y)=>{if(a){const A=Md(f,y);a(h,A)}g(A=>Md(A,y))},[f,a,g]),d=w.useCallback((h,y)=>{S(y),i&&i(h,y)},[i,S]),p=w.useCallback((h,y)=>{h.preventDefault(),d(h,y.id),y.items&&y.items.length&&C(h,y.id)},[d,C]);return b.createElement(bm,{className:e,disabled:r,expanded:f,level:0,innerRef:c,select:p,selected:k,style:u,tree:s})}const Eb=w.forwardRef(Sb);Eb.displayName="TreeView";const Tb=fm;var Cb={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"},$b=Cb;const Am=Be($b);var Pb={name:"rose",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#8a5b68",borderDarkest:"#26030b",borderLight:"#e5bec8",borderLightest:"#f1d4dc",canvas:"#ffffff",canvasText:"#050608",canvasTextDisabled:"#8a5b68",canvasTextDisabledShadow:"#f1d4dc",canvasTextInvert:"#ffffff",checkmark:"#050608",checkmarkDisabled:"#8a5b68",desktopBackground:"#808080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#ab5a71",headerNotActiveBackground:"#a19fa5",headerNotActiveText:"#615f68",headerText:"#ffffff",hoverBackground:"#ab5a71",material:"#d6adb8",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#8a5b68",materialTextDisabledShadow:"#f1d4dc",materialTextInvert:"#ffffff",progress:"#ab5a71",tooltip:"#fefbcc"},Rb=Pb;const Db=Be(Rb);var Ib={name:"rainyDay",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#3d5367",borderDarkest:"#16233b",borderLight:"#91abc2",borderLightest:"#b7cee5",canvas:"#ffffff",canvasText:"#050608",canvasTextDisabled:"#3d5367",canvasTextDisabledShadow:"#b7cee5",canvasTextInvert:"#ffffff",checkmark:"#050608",checkmarkDisabled:"#3d5367",desktopBackground:"#000000",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#4b6480",headerNotActiveBackground:"#7f7f81",headerNotActiveText:"#ced0d9",headerText:"#ffffff",hoverBackground:"#4b6480",material:"#7a99b3",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#3d5367",materialTextDisabledShadow:"#b7cee5",materialTextInvert:"#ffffff",progress:"#4b6480",tooltip:"#fefbcc"},Ob=Ib;const Nb=Be(Ob);var jb={name:"travel",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#695f50",borderDarkest:"#28251e",borderLight:"#9d8f80",borderLightest:"#baae9f",canvas:"#d8d0c8",canvasText:"#28251e",canvasTextDisabled:"#695f50",canvasTextDisabledShadow:"#baae9f",canvasTextInvert:"#ffffff",checkmark:"#28251e",checkmarkDisabled:"#695f50",desktopBackground:"#7c654c",flatDark:"#695f50",flatLight:"#9d8f80",focusSecondary:"#fefe03",headerBackground:"#404878",headerNotActiveBackground:"#605848",headerNotActiveText:"#908070",headerText:"#d8d0c8",hoverBackground:"#48604f",material:"#908070",materialDark:"#9a9e9c",materialText:"#28251e",materialTextDisabled:"#695f50",materialTextDisabledShadow:"#baae9f",materialTextInvert:"#ffffff",progress:"#48604f",tooltip:"#fefbcc"},Lb=jb;const Mb=Be(Lb);var _b={name:"marine",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#3c8d88",borderDarkest:"#050608",borderLight:"#98d2cb",borderLightest:"#b1dfdf",canvas:"#c3e2da",canvasText:"#050608",canvasTextDisabled:"#3c8d88",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",checkmark:"#050608",checkmarkDisabled:"#3c8d88",desktopBackground:"#2c4e47",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#000080",headerNotActiveBackground:"#7f7f7f",headerNotActiveText:"#ced0cf",headerText:"#ffffff",hoverBackground:"#000080",material:"#75c1ba",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#3c8d88",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#000080",tooltip:"#fefbcc"},Fb=_b;const Bb=Be(Fb);var zb={name:"olive",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#4f4c02",borderDarkest:"#000000",borderLight:"#9d9d11",borderLightest:"#fcfd3e",canvas:"#ffffff",canvasText:"#000000",canvasTextDisabled:"#4f4c02",canvasTextDisabledShadow:"#fcfd3e",canvasTextInvert:"#000000",checkmark:"#000000",checkmarkDisabled:"#4f4c02",desktopBackground:"#666633",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#000000",headerBackground:"#F3DE2C",headerNotActiveBackground:"#4f4c02",headerNotActiveText:"#807f00",headerText:"#000000",hoverBackground:"#F3DE2C",material:"#807f00",materialDark:"#4f4c02",materialText:"#000000",materialTextDisabled:"#4f4c02",materialTextDisabledShadow:"#fcfd3e",materialTextInvert:"#000000",progress:"#F3DE2C",tooltip:"#fefbcc"},Ub=zb;const Hb=Be(Ub);var Wb={name:"theSixtiesUSA",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#6c1f71",borderDarkest:"#010001",borderLight:"#d982de",borderLightest:"#df9be7",canvas:"#ffffff",canvasText:"#010001",canvasTextDisabled:"#6c1f71",canvasTextDisabledShadow:"#df9be7",canvasTextInvert:"#010001",checkmark:"#010001",checkmarkDisabled:"#6c1f71",desktopBackground:"#92458a",flatDark:"#d067d7",flatLight:"#df9be7",focusSecondary:"#fefe03",headerBackground:"#050080",headerNotActiveBackground:"#a130a9",headerNotActiveText:"#df9be7",headerText:"#ffffff",hoverBackground:"#0f0",material:"#d067d7",materialDark:"#9a9e9c",materialText:"#010001",materialTextDisabled:"#6c1f71",materialTextDisabledShadow:"#df9be7",materialTextInvert:"#010001",progress:"#0f0",tooltip:"#fefbcc"},Vb=Wb;const Qb=Be(Vb);var Gb={name:"candy",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#d1579e",borderDarkest:"#44132f",borderLight:"#f1acd5",borderLightest:"#EFF1F3",canvas:"#EFF1F3",canvasText:"#000000",canvasTextDisabled:"#d1579e",canvasTextDisabledShadow:"#EFF1F3",canvasTextInvert:"#EFF1F3",checkmark:"#000000",checkmarkDisabled:"#d1579e",desktopBackground:"#b477bd",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#87255B",headerNotActiveBackground:"#a08796",headerNotActiveText:"#EBD2BE",headerText:"#EFF1F3",hoverBackground:"#256EFF",material:"#E5A4CB",materialDark:"#9a9e9c",materialText:"#000000",materialTextDisabled:"#d1579e",materialTextDisabledShadow:"#EFF1F3",materialTextInvert:"#EFF1F3",progress:"#256EFF",tooltip:"#fefbcc"},Kb=Gb;const Yb=Be(Kb);var Jb={name:"tokyoDark",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#1f2223",borderDarkest:"#070809",borderLight:"#5e696a",borderLightest:"#93a0a1",canvas:"#2f3435",canvasText:"#F4F4ED",canvasTextDisabled:"#1f2223",canvasTextDisabledShadow:"#93a0a1",canvasTextInvert:"#ffffff",checkmark:"#F4F4ED",checkmarkDisabled:"#1f2223",desktopBackground:"#181a1b",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#20FC8F",headerBackground:"#1f2223",headerNotActiveBackground:"#5e696a",headerNotActiveText:"#F4F4ED",headerText:"#F4F4ED",hoverBackground:"#F61067",material:"#465051",materialDark:"#1f2223",materialText:"#F4F4ED",materialTextDisabled:"#1f2223",materialTextDisabledShadow:"#93a0a1",materialTextInvert:"#ffffff",progress:"#F61067",tooltip:"#fefbcc"},Xb=Jb;const qb=Be(Xb);var Zb={name:"vaporTeal",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#00706f",borderDarkest:"#000000",borderLight:"#2fcecd",borderLightest:"#58ffff",canvas:"#98DFEA",canvasText:"#000000",canvasTextDisabled:"#00706f",canvasTextDisabledShadow:"#58ffff",canvasTextInvert:"#000000",checkmark:"#000000",checkmarkDisabled:"#00706f",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#FCF6BD",headerBackground:"#246A73",headerNotActiveBackground:"#2fcecd",headerNotActiveText:"#246A73",headerText:"#58ffff",hoverBackground:"#FF99C8",material:"#01a8a8",materialDark:"#246A73",materialText:"#000000",materialTextDisabled:"#00706f",materialTextDisabledShadow:"#58ffff",materialTextInvert:"#000000",progress:"#FF99C8",tooltip:"#fefbcc"},eA=Zb;const tA=Be(eA),nA={original:Am,rose:Db,rainyDay:Nb,travel:Mb,marine:Bb,olive:Hb,theSixtiesUSA:Qb,candy:Yb,tokyoDark:qb,vaporTeal:tA},rA="/assets/ms_sans_serif-Du8rjN1q.woff2",oA="/assets/ms_sans_serif_bold-D5dpRRHG.woff2",iA="foresome95",aA="0.0.1",lA=["Artur Bień","Marcus Yeagle"],sA="Golf app",uA=["react","styled-components","windows95","vaporwave"],cA={dev:"vite",build:"tsc && vite build",server:"node src/backend/server.js",lint:"eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",preview:"vite preview"},dA={"array-move":"^2.1.0","assert-never":"^1.2.1",cors:"^2.8.5",express:"^4.19.2","lodash.throttle":"^4.1.1","prop-types":"^15.6.2",react:"^16.7.0","react-dom":"^16.7.0","react-redux":"^7.1.1 ","react-router":"^5.2.0","react-router-dom":"^5.2.0","react-sortable-hoc":"^1.11.0",react95:"^4.0.0",recharts:"^2.1.15",redux:"^4.0.1","redux-thunk":"^2.3.0","styled-components":"^5.3.3"},fA={"@babel/core":"^7.2.2","@types/lodash.throttle":"^4.1.7","@types/react":"^17.0.3","@types/react-dom":"^17.0.2","@types/react-redux":"^7.1.16","@types/react-router-dom":"^5.1.7","@types/styled-components":"^5.1.9","@vitejs/plugin-react":"^4.2.1",typescript:"^4.7.3",vite:"^5.2.0"},pA={extends:"react-app"},hA=[">0.2%","not dead","not ie <= 11","not op_mini all"],mA={name:iA,version:aA,authors:lA,description:sA,keywords:uA,scripts:cA,dependencies:dA,devDependencies:fA,eslintConfig:pA,browserslist:hA};let vA=T(Ra)`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  height: calc(100% - var(--safe-area-inset-bottom));
  padding-bottom: 43px;
`,gA=T(go)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 4px;
  padding-left: 4px;
  padding-right: 4px;
  height: 100%;
`;const km=({children:e,...t})=>m.jsx(vA,{children:m.jsx(gA,{...t,children:e})}),yA=({buttons:e,size:t="sm",...n})=>m.jsx(xA,{...n,children:e.map((r,o)=>m.jsx(wA,{onClick:r.onClick,active:r.active,size:t,fullWidth:!0,children:r.label},o))});let xA=T.nav`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem -1px;
  flex-shrink: 0;
`,wA=T(De)`
  margin: 0 1px;
`;function Ia(){const e=document.getElementById("root");w.useLayoutEffect(()=>{const t=window.pageYOffset;window.scrollTo(0,0);const{position:n}=window.getComputedStyle(e);return document.body.style.overflow="hidden",e.style.overflow="hidden",e.style.position="fixed",e.style.width="100%",e.style.height="100%",()=>{document.body.style.overflow="",e.style.overflow="",e.style.position=n,e.style.width="",e.style.height="",e.scrollTo(0,0),window.scrollTo(0,t)}},[e])}const bA="/assets/money-trans-C6TYdGmC.png",AA=T.span`
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
`,kA=T.img.attrs(()=>({loading:"lazy"}))`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  transition: 0.2s all ease-out;
`,Sm=({imageURL:e,height:t,...n})=>m.jsx(AA,{...n,height:t,children:e&&m.jsx(kA,{src:e,alt:"icon"})});Sm.propTypes={imageURL:ns.string};const SA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAARVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADc6ur3AAAAFnRSTlMAjNzYiLSwDnlOOhR07McoJPCgnG5kHZE9igAAATtJREFUeNrt28tOwzAQQNEpbZP0kUAh8f9/KqwQA8UlNBUSPWc/lu5uLNkBAAAAAAAAAABwxvSwoCn+TlcWdIwfEyJESJ0QIULqhAgRUifk3dQl42ZBY5dMcUsPJdnEglYlWccHQoQIESJEiJA3QoQIuXXIIRv6pIuqNg+3UdX1yXDI4ir7kj3FHNuSNDHHY8n2QoQIESJEiBAhQoQIOW/cJqtd1kZNu836kvTb7MJhu2yVh8eoey7JEHMcyixtzDGU5EWIECFChAgRIkSIkGtDxiaZucY32ec1vslmrvFNMt7LxUqIECFChAgRIkSIkLsNiTYbTkl3aTiLqu6UDG3m4ZkQIUKECBEiRIgQIb8zHZNxtaDxmExR5xu4ECHfEyJESJ0QIULqhPz7kGm9oCkAAAAAAAAAAAC+egX+heiUR07piAAAAABJRU5ErkJggg==",Em=T(gm)`
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
`,EA=({detailData:e,setIsOpened:t,isOpened:n})=>{console.log(e);function r(){return e.betType==="Gross Score"?`${e.score} - ${e.betType}`:e.betType}function o(){return m.jsx(m.Fragment,{children:m.jsx("ul",{children:e.players.map((i,a)=>m.jsxs("li",{children:[i.name," (",i.indx,")"]},i+a))})})}return m.jsx(Xh,{theme:Am,children:n&&m.jsx(TA,{onClick:()=>t(!1),children:m.jsx(CA,{onClick:i=>i.stopPropagation(),children:m.jsx("div",{style:{minWidth:"250px"},children:m.jsxs(Tn,{variant:"flat",label:r(),children:[o(),e.betType==="Group Net Winner"?m.jsxs("div",{children:[m.jsxs("p",{children:["+",e.action]}),m.jsx("br",{}),m.jsxs(Tn,{variant:"flat",label:"Group",children:[m.jsx("p",{children:"Steele, Matt"}),m.jsx("p",{children:"Weiss, Frank"}),m.jsx("p",{children:"Palm, Bryce"})]})]}):m.jsx(m.Fragment,{}),e.betType==="Gross Score"?m.jsx("div",{style:{paddingTop:"2.5rem"},children:e.sides.map((i,a)=>m.jsxs(De,{primary:i.action<0,disabled:!0,variant:"flat",style:{marginRight:"0.5rem"},children:[i.side," ",i.action]},a))}):m.jsx(m.Fragment,{}),e.betType==="Matchup"?m.jsx("div",{style:{paddingTop:"2.5rem"},children:e.sides.map((i,a)=>m.jsxs(De,{primary:i.action<0,disabled:!0,variant:"flat",style:{marginRight:"0.5rem"},children:[i.side," ",i.action]},a))}):m.jsx(m.Fragment,{}),e.betType==="Proposition"?m.jsxs("div",{children:[m.jsx("p",{style:{lineHeight:"1.5",margin:"1rem 0 2rem"},children:e.prop}),e.sides.map(i=>m.jsxs(De,{primary:i.action<0,disabled:!0,variant:"flat",style:{marginRight:"0.5rem"},children:[i.side," ",i.action]}))]}):m.jsx(m.Fragment,{})]})})})})})},TA=T.div`
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
`,CA=T.div`
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
`,$A=e=>{var u;const[t,n]=w.useState(!1),[r,o]=w.useState(void 0);console.log(e);const i=s=>{const c=new URLSearchParams;c.get("orderBy")===s&&c.get("desc")},a=new URLSearchParams(location.search);a.get("orderBy"),a.get("desc"),location.search.includes("orderBy");function l(s,c){console.log(s,c),n(!0),o(s)}return m.jsxs(m.Fragment,{children:[m.jsxs(PA,{children:[m.jsx(Qu,{children:m.jsxs(Gr,{children:[m.jsx(er,{onClick:()=>i("name"),children:"Type"}),m.jsx(er,{onClick:()=>i("name"),children:"Player(s)"}),m.jsx(er,{onClick:()=>i("price"),children:"View"})]})}),m.jsx(Vu,{children:(u=e.sides.data)==null?void 0:u.map((s,c)=>m.jsxs(Gr,{onClick:()=>{},children:[m.jsx(Zn,{children:s.betType==="Gross Score"?`${s.betType} (${s.score})`:s.betType}),m.jsx(Zn,{children:s.betType==="Proposition"?"All":s.players.map(f=>f.name.substring(0,f.name.indexOf(","))+(s.players.length>1?"/":""))}),m.jsx(Zn,{style:{textAlign:"right"},children:m.jsx("img",{src:SA,style:{height:24,padding:"0.5rem"},onClick:()=>{l(s,c)}})})]},c))})]}),m.jsx(EA,{isOpened:t,setIsOpened:s=>n(s),detailData:r})]})};T(Sm)`
  margin-right: 6px;
`;T.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;const PA=T(Em)`
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
`,RA=({sides:e,showingFollowing:t,showFollowing:n,showTop:r})=>{Ia();const o=hy();return o.pathname+o.search,m.jsxs(km,{children:[m.jsxs(DA,{children:[m.jsx("img",{style:{height:52,opacity:.9,padding:"5px 0 0 5px"},src:bA,alt:"icon"}),m.jsxs("h1",{children:["Sunday",m.jsx("span",{children:"Sides"}),m.jsxs("small",{children:["v",mA.version]})]})]}),m.jsx(IA,{children:m.jsx($A,{sides:e})}),m.jsx(yA,{size:"md",buttons:[{label:"Current",onClick:r,active:!t},{label:"Historical ",onClick:n,active:t}]})]})};let DA=T.header`
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
`,IA=T.div`
  flex: 1;
  overflow: hidden;
  & > div {
    height: 100%;
  }
`;const OA=()=>{const[e,t]=w.useState(!1),n=g1(r=>r.sides);return console.log(n),n.loading?m.jsx(dm,{size:32,style:{margin:"48%"}}):m.jsx(RA,{sides:n,showingFollowing:e,showFollowing:()=>t(!0),showTop:()=>t(!1)})};var Gu={exports:{}};const Tm=(e,t,n)=>{const r=n<0?e.length+n:n,o=e.splice(t,1)[0];e.splice(r,0,o)},Cm=(e,t,n)=>(e=e.slice(),Tm(e,t,n),e);Gu.exports=Cm;Gu.exports.default=Cm;Gu.exports.mutate=Tm;const vs=(e,t)=>e.toLocaleString("en-US",{style:"currency",currency:t}),$m=(e="top")=>W`
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
`,Pm=()=>W`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
`,Kr=T.div`
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
`,Rm=T.div`
  display: flex;
  flex-wrap: no-wrap;
  ${Kr}:not(:last-child) {
    width: 100%;
    margin-right: 2px;
  }
`,NA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAGFBMVEUAAAD///8AAADAwMCAgIAA//8AAP8AAIBUAk3vAAAAAXRSTlMAQObYZgAAAGNJREFUCNc1yEEKgCAQheEhvMBU0lamoLVJ+8ouUIIHMPAG3r9hrLd5Hz+AOnkADETsth/9h5YM47CcGPs1CpTWixVc4a7Qay3gw+QFiny2AhziI3CuZMdoiOaYDMhKkuNq4AX1VQ75vyoE2wAAAABJRU5ErkJggg==",Fd=[{value:"169",name:"Albertson, John"},{value:"192",name:"Arganbright, Marty"},{value:"121",name:"Atkinson, John"},{value:"31",name:"Banker, Jeff"},{value:"51",name:"Banner, John"},{value:"139",name:"Barker, Thomas"},{value:"176",name:"Bates, Mike"},{value:"235",name:"Beck , Riley"},{value:"259",name:"Benevento, Marc"},{value:"123",name:"Brady, Kenny"},{value:"195",name:"Braydich, Nick"},{value:"201",name:"Brooks, Bill"},{value:"155",name:"Bujnak, Pete"},{value:"101",name:"Burghardt, Jeff"},{value:"168",name:"Butch, Kevin"},{value:"207",name:"Caminiti, Dom"},{value:"203",name:"Clark, Greg"},{value:"150",name:"Coakley, Rob"},{value:"242",name:"Comisar, Jason"},{value:"109",name:"Coon, Tom"},{value:"152",name:"Crawford , Dave"},{value:"33",name:"Cron, Tim"},{value:"153",name:"DeMattio , Don"},{value:"6",name:"Dennison, Allen"},{value:"243",name:"Dietz, Andy"},{value:"115",name:"Dietz, Chris"},{value:"228",name:"Dillon, Mike"},{value:"12",name:"Dippolito, John"},{value:"231",name:"Dwyer, Timothy"},{value:"17",name:"Edwards, Spencer"},{value:"260",name:"Emmenegger, Dan"},{value:"174",name:"English, Dennis"},{value:"125",name:"English, Denny"},{value:"196",name:"Erickson, Aunders"},{value:"159",name:"Evans, Danny"},{value:"130",name:"Ewald, Shane"},{value:"133",name:"Eyen, Bob"},{value:"241",name:"Ferguson, Mike"},{value:"32",name:"Fields, Brandon"},{value:"18",name:"Fitori, Jim"},{value:"40",name:"Fitzpatrick, Sean"},{value:"28",name:"Fitzsimmons, Greg"},{value:"118",name:"Flaherty, Kevin"},{value:"55",name:"Francisco, Jim"},{value:"220",name:"Gearhiser, Kurt"},{value:"175",name:"gerber, john"},{value:"128",name:"Gimeson, Curran"},{value:"127",name:"Gimeson, Jim"},{value:"211",name:"Gimeson, Paul"},{value:"154",name:"Gleaves, Greg"},{value:"178",name:"Glick, Jordan"},{value:"23",name:"Goetz, Nick"},{value:"160",name:"Goldsberry, Craig"},{value:"258",name:"Graham, Carl"},{value:"35",name:"Grim, Chris"},{value:"26",name:"Grim, Mark"},{value:"186",name:"Hall, Tim"},{value:"234",name:"Hanks, David"},{value:"189",name:"Hart, Chuck"},{value:"190",name:"Heath, Joe"},{value:"194",name:"Heis, Adam"},{value:"138",name:"Herrick, Mike"},{value:"43",name:"Hickman, Tim"},{value:"219",name:"Hiers, Kyle"},{value:"48",name:"Hiers, Paul"},{value:"206",name:"Hiers, Wes"},{value:"248",name:"Hitch, David"},{value:"183",name:"Hocking, Kyle"},{value:"167",name:"Hook, Shane"},{value:"144",name:"Huss, Kyle"},{value:"265",name:"Janice, Rob"},{value:"218",name:"Johnson, Glenn"},{value:"84",name:"Jozefczyk, Harrison"},{value:"54",name:"Kauffman , Randy"},{value:"221",name:"Keener, Mike"},{value:"9",name:"Kendig, Shawn"},{value:"177",name:"Kennedy , Don"},{value:"36",name:"King, Mitch"},{value:"158",name:"Koehl, Kiki"},{value:"20",name:"Kramer, Brad"},{value:"187",name:"Kraynak, Michael"},{value:"19",name:"Kristoff, Jeff"},{value:"253",name:"Lacko, Alan"},{value:"15",name:"LaLonde, Brent"},{value:"81",name:"LaLonde, David"},{value:"205",name:"LeCrone, Brian"},{value:"129",name:"Lewis, Andy"},{value:"222",name:"M, I"},{value:"233",name:"Marbry, chris"},{value:"210",name:"Marton, Tyler"},{value:"156",name:"Matter, Kristen"},{value:"98",name:"Maunz, Brandon"},{value:"197",name:"McAninch, Sam"},{value:"151",name:"McCaffrey, Patrick"},{value:"198",name:"McCandless, Mike"},{value:"11",name:"McClure, Todd"},{value:"13",name:"McDaniel, Jay"},{value:"46",name:"Meikrantz, Dave"},{value:"85",name:"Meikrantz , Shelby"},{value:"142",name:"Mills, jeffrey"},{value:"100",name:"Minnie, Chris"},{value:"254",name:"Montello, Ben"},{value:"104",name:"Murphy, Spencer"},{value:"199",name:"Novosel, Todd"},{value:"16",name:"Padro, Rick"},{value:"208",name:'Palm, Bryce "plant"'},{value:"141",name:"Pappas, Peter"},{value:"204",name:"Parks, Guy"},{value:"149",name:"Parton, Kelly"},{value:"264",name:"Partridge, David"},{value:"202",name:"Peck, Nick"},{value:"200",name:"Peck, Steve"},{value:"172",name:"Perry, Justin"},{value:"8",name:"Pi, Mark"},{value:"99",name:"Politte, Jeffrey"},{value:"163",name:"Pratt, Lind"},{value:"261",name:"Proakis, Jake"},{value:"96",name:"Promenschenkel, George"},{value:"147",name:"Raines, Leila"},{value:"251",name:"Rath, Dave"},{value:"10",name:"Reda, Rob"},{value:"193",name:"Rice, Ryan"},{value:"266",name:"Riddle, Gary"},{value:"263",name:"Riley, Wes"},{value:"268",name:"Rini, Bill"},{value:"224",name:"Rubicky, Rob"},{value:"267",name:"Rumizen, Max"},{value:"238",name:"Russo, Bryan"},{value:"164",name:"Rutkoski, Jason"},{value:"27",name:"Salata, Parker"},{value:"227",name:"Salva, Heath"},{value:"225",name:"Santini, Jim"},{value:"116",name:"Savage, Sean"},{value:"97",name:"Schaffner, Jeff"},{value:"105",name:"Schmidt, Dustin"},{value:"214",name:"Sears, Rick"},{value:"182",name:"Secrest, Chad"},{value:"145",name:"Sever, Jeff"},{value:"108",name:"Sewell, Jon"},{value:"223",name:"Shannon, Derek"},{value:"173",name:"Sickles, Corey"},{value:"7",name:"Smith, Keith"},{value:"122",name:"Smith, Nick"},{value:"244",name:"Spitzer, Ryan"},{value:"44",name:"Sprankle, Fred"},{value:"45",name:"Sprankle , Scott"},{value:"226",name:"Stacey, Larry"},{value:"50",name:"Staley, Mike"},{value:"135",name:"Staley, Scott"},{value:"4",name:"Steele, Alan"},{value:"2",name:"Steele, Chad"},{value:"1",name:"Steele, Matt"},{value:"38",name:"Steele, Spencer"},{value:"171",name:"Steininger, Aaron"},{value:"29",name:"Stevenson, Dan"},{value:"47",name:"Struewing, Ben"},{value:"239",name:"Taronto, Drew"},{value:"229",name:"Taylor , Layla"},{value:"134",name:"Taylor, Troy"},{value:"148",name:"Tepe, David"},{value:"137",name:"Thieman, Josh"},{value:"136",name:"Thieman, Mike"},{value:"240",name:"Toranato, Drew"},{value:"170",name:"Towel, Rick"},{value:"140",name:"Trabue, Hugh"},{value:"252",name:"Uehlein, Pat"},{value:"53",name:"Valentine , Travis"},{value:"107",name:"VanHala, Andrew"},{value:"165",name:"VanLandingham, Tyler"},{value:"236",name:"Vincent, Denny"},{value:"162",name:"Vosler, Will"},{value:"262",name:"Walden, Jon"},{value:"117",name:"Walter, Dave"},{value:"21",name:"Watson, Brian"},{value:"102",name:"Weiss, Frank"},{value:"209",name:"Weiss, PJ"},{value:"34",name:"Welch, Dustin"},{value:"14",name:"West, Zach"},{value:"110",name:"Westerheide, Pete"},{value:"157",name:"White, Emily"},{value:"30",name:"Williamson, J"},{value:"5",name:"Wilson, Todd"},{value:"3",name:"Winhoven, Jason"},{value:"185",name:"Wissinger , Jared"},{value:"249",name:"Wolf, Josh"},{value:"103",name:"Wolff, Brett"},{value:"82",name:"Yeagle, Marcus"},{value:"181",name:"Zeller, Aaron"},{value:"146",name:"Zeller, Rod"},{value:"180",name:"Zeller, Rodd"}];class jA extends b.Component{constructor(t){super(t),this.handleChangeOrder=n=>{n===this.state.orderBy?this.setState(r=>({desc:!r.desc})):this.setState({orderBy:n,desc:!0})},this.state={orderBy:"rank",desc:!1}}render(){let{data:t,onFollow:n,searchPhrase:r}=this.props;r=r.toLowerCase();const o=Fd.filter(i=>r?i.name.toUpperCase().includes(r.toUpperCase()):!0).map((i,a)=>m.jsxs(Gr,{onClick:l=>{n(i.name)},children:[m.jsx(Zn,{children:i.name}),m.jsx(Zn,{style:{textAlign:"right"},onClick:void 0,children:i.value})]},a));return m.jsxs(m.Fragment,{children:[m.jsx(_A,{children:m.jsxs(FA,{children:[m.jsx(Qu,{children:m.jsxs(Gr,{children:[m.jsx(er,{onClick:()=>this.handleChangeOrder("name"),children:"Name"}),m.jsx(er,{onClick:()=>this.handleChangeOrder("indx"),children:"ID"})]})}),m.jsx(Vu,{children:o})]})}),m.jsx(MA,{children:m.jsxs(Rm,{children:[m.jsx(Kr,{children:t?`Showing ${o?o.length:0} player(s) of ${Fd.length} total`:"Loading..."}),m.jsx(Kr,{draggable:!0})]})})]})}}const LA=Eh(jA);let MA=T.footer`
  margin-top: 0.5rem;
  margin-bottom: 2px;
  flex-shrink: 0;
`,_A=T.div`
  height: 40vh;
  flex: 1;
  margin-top: 0.5rem;
  overflow: hidden;
  & > div {
    height: 100%;
  }
`;const FA=T(Em)`
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
`,gs=({data:e,onPlayerSelect:t,onPlayerClear:n})=>{const[r,o]=w.useState(""),[i,a]=w.useState(!1),l=u=>{o(u.target.value)};return Ia(),m.jsxs("div",{children:[m.jsxs(BA,{children:[m.jsx("img",{alt:"Search icon",src:NA,style:{height:27,marginTop:2,marginRight:"0.5rem",imageRendering:"pixelated"}}),m.jsx($a,{placeholder:"Search Player...",value:r,onChange:l,width:"100%",style:{marginRight:"4px",width:"100%"}}),m.jsx(De,{disabled:r==="",onClick:()=>{o(""),a(!1),n()},children:"Clear"})]}),r&&!i&&m.jsx("div",{children:m.jsx(LA,{data:["foo","bar"],onFollow:u=>{t(u),a(!0)},searchPhrase:r})})]})};T(go)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-top: 4px;
  padding-bottom: 37px;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
`;const BA=T(sn)`
  margin: 0 -4px;
`,zA=T(Ra)`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  
  height: 100%;
  height: calc(100% - var(--safe-area-inset-bottom));
`,UA=T(Wu)`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 4px;
`,Dm=T.div`
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
`,HA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADNQTFRFAAAAgICAAAAA//////8A/wD/AP8AAIAA////////////wMDA////////////////////Rk6/PwAAABF0Uk5TAP////////93gmH/eVSDYFOVpFjCAAAAdUlEQVR4nFXOWQ6AMAgEUAaXqDHe/5waUxMjdaS48UVe6QDEC5CcS1dAAbMfqLzg4/r5oorDnpwLKnHQGrt5RoxrIw5ACyRYPEC0TwNWZIuLeEKXRiy3XKGUaeYKMV7joZR+Y8NoB0r536UABhd5gBujbnjrBAaVMBFmsr+JAAAAAElFTkSuQmCC",Im=({player:e,onClose:t})=>{w.useState("");const[n,r]=w.useState(void 0),[o,i]=w.useState(void 0),[a,l]=w.useState(5);function u(s){const c=s;return c>0?c/100+1:c<0?100/Math.abs(c)+1:1}return Ia(),m.jsxs(zA,{style:{position:"absolute",top:"0"},children:[m.jsxs(UA,{children:[m.jsx("img",{alt:"Juggle icon",src:HA,style:{height:27,marginTop:2,marginRight:"0.5rem",imageRendering:"pixelated"}}),"Place Bet",m.jsx(De,{square:!0,onClick:t,size:"sm",style:{position:"absolute",right:2,top:3,fontWeight:"bold"},children:m.jsx(Dm,{})})]}),m.jsxs(WA,{children:[m.jsxs("div",{children:[m.jsx("small",{children:"Select Side"}),m.jsx(Pa,{style:{flexShrink:0},width:"100%",onChange:s=>{console.log(s),i(s.value)},value:o,options:[...[].map(s=>({label:`${s.betType} - ${s.betType!=="Proposition"?s.players.map(c=>c.name):s.prop}${s.betType==="Gross Score"?`: ${s.score}`:""}`,value:s}))]})]}),(o==null?void 0:o.betType)!=="Group Net Winner"&&m.jsxs("div",{style:{display:"flex",justifyContent:"space-around",padding:"1rem"},children:[m.jsx("div",{children:m.jsxs(De,{onClick:()=>r(o==null?void 0:o.sides[0]),style:{padding:"0.75rem",minWidth:"100px"},size:"lg",children:[o==null?void 0:o.sides[0].side,"   ",`(${o==null?void 0:o.sides[0].action})`]})}),m.jsx("div",{children:m.jsxs(De,{onClick:()=>r(o==null?void 0:o.sides[1]),style:{padding:"0.75rem",minWidth:"100px"},size:"lg",children:[o==null?void 0:o.sides[1].side,"   ",`(${o==null?void 0:o.sides[1].action})`]})})]}),m.jsxs("div",{style:{display:"flex",flexDirection:"row-reverse"},children:[m.jsx("div",{style:{padding:"1.5rem 1rem 1rem 2rem"},children:m.jsx(Oi,{size:"300px",min:1,max:20,step:1,defaultValue:a,onChange:s=>l(s),marks:[{value:1,label:"$1"},{value:2,label:"$2"},{value:3,label:""},{value:4,label:""},{value:5,label:"$5"},{value:6,label:""},{value:7,label:""},{value:8,label:"$8"},{value:9,label:""},{value:10,label:"$10"},{value:11,label:""},{value:12,label:"$12"},{value:13,label:""},{value:14,label:"$14"},{value:15,label:""},{value:16,label:"$16"},{value:17,label:""},{value:18,label:"$18"},{value:19,label:""},{value:20,label:"$20"}],orientation:"vertical"})}),m.jsx("div",{style:{width:"100%",paddingTop:"1.5rem",paddingLeft:"1rem"},children:m.jsxs(Tn,{label:o==null?void 0:o.betType,children:[["Group Net Winner","Gross Score"].includes(o==null?void 0:o.betType)&&m.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[m.jsx("small",{style:{fontWeight:"bold"},children:o==null?void 0:o.score}),m.jsx("h1",{style:{fontSize:"1.2rem",fontWeight:"bold",fontStyle:"italic"},children:`${o==null?void 0:o.players[0].name} (${o==null?void 0:o.players[0].indx})`}),m.jsxs("h1",{style:{fontSize:"1.2rem",fontWeight:"bold",fontStyle:"italic"},children:[(o==null?void 0:o.action)>0?"+":"",o==null?void 0:o.action]})]}),m.jsx("hr",{}),m.jsx("small",{children:"Wager:"}),m.jsx(Bd,{children:vs(a,"USD")}),m.jsx("small",{children:"To Win:"}),m.jsx(Bd,{children:vs(u((n==null?void 0:n.action)??-110)*a,"USD")??0})]})})]}),m.jsx(De,{style:{marginTop:"1.25rem"},size:"lg",primary:!0,fullWidth:!0,children:"Submit"})]})]})};let WA=T(go)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-top: 4px;
  padding-bottom: 37px;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
`;T(sn)`
  margin: 0 -4px;
`;const Bd=T.div`
  height: 32px;
  font-size: 2rem;
  margin-right: 0.5rem;
  margin-bottom: 0.75rem;
  text-align: right;
`,VA=({data:e,currency:t,sortUserHoldings:n,match:r,location:o})=>{e&&Math.round(e.map(C=>C.PRICE*C._amount).reduce((C,d)=>C+d,0)*100)/100;const[i,a]=w.useState(""),[l,u]=w.useState(""),[s,c]=w.useState(0);w.useState(0);const[f,g]=w.useState(!1);function k(C){u(C)}function S(){u("")}return m.jsxs(m.Fragment,{children:[m.jsx(QA,{children:m.jsxs(GA,{children:[m.jsxs("div",{children:[m.jsx("header",{children:m.jsx("a",{href:"",children:l})}),m.jsx(Uu,{}),m.jsxs("section",{children:[m.jsxs("div",{children:[m.jsx(KA,{children:l?m.jsx(us,{size:70,style:{background:"#008080"},children:l.split(",")[1].charAt(1)+l.split(",")[0].charAt(0)}):m.jsx(us,{size:70})}),l&&m.jsx(De,{style:{marginTop:"-30px"},square:!0,size:"sm",onClick:()=>{u(""),a("")},children:m.jsx(Dm,{})})]}),m.jsxs("div",{children:[m.jsx("small",{children:"Total at Risk"}),m.jsx(YA,{children:vs(s,"USD")}),m.jsx("div",{children:m.jsx(sn,{children:m.jsx(De,{disabled:!l,onClick:()=>g(!0),children:"Place Bet"})})})]})]}),m.jsx("div",{style:{paddingLeft:"0.5rem",fontSize:"0.9rem",lineHeight:"1.5"}})]}),m.jsx("div",{children:m.jsxs(Rm,{children:[m.jsx(Kr,{children:new Date().toLocaleDateString()}),m.jsx(Kr,{style:{flexShrink:0,minWidth:65,textAlign:"center"},children:"0 bets(s)"})]})}),m.jsx(gs,{onPlayerSelect:k,onPlayerClear:S})]})}),f&&m.jsx(Im,{player:l,onClose:()=>{g(!1),setTimeout(()=>{document.getElementById("root").style.position=null},0)}})]})},QA=T.div`
  padding-bottom: 100px;
`,GA=T.div`
  ${$m("full")}
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
`,KA=T.div`
  margin-left: 0.25rem;
  display: inline-block;
  object-fit: cover;
  height: 85px;
  width: 85px;
  border-radius: 50%;
  flex-shrink: 0;
`,YA=T.div`
  height: 32px;
  font-size: 2rem;
  margin-right: 0.5rem;
  margin-bottom: 0.75rem;
  text-align: right;
`;T.section`
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
`;T.img`
  display: inline-block;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  object-fit: contain;
`;T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  ${$m("full")}
  padding: 0.75rem 0.5rem;
  line-height: 1;
`;T.header`
  display: flex;
  align-items: center;

  h4 {
    margin-left: 10px;
    margin-top: 2px;
  }
`;T.div`
  display: flex;
  align-items: center;
`;T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 5px;
  data:last-child {
    color: ${({theme:e})=>e.borderDark};
    margin-top: 4px;
  }
`;T.div`
  display: flex;
  align-items: center;
`;T(sn)`
  margin: 0 -4px;
`;const JA="SET_EVENT_SEEN",XA="FOLLOW_COIN",qA="UNFOLLOW_COIN",Om="SET_THEME",Nm="SET_BACKGROUND",jm="SET_CUSTOM_BACKGROUND",Lm="TOGGLE_VINTAGE_FONT",Mm="SET_FONT_SIZE",ZA="SET_USER_HOLDINGS",ek="SET_USER_CURRENCY",tk="DELETE_USER_HOLDINGS",nk="SORT_USER_HOLDINGS",_m="TOGGLE_SCAN_LINES",Fm="SET_SCAN_LINES_INTENSITY",rk=e=>({type:Om,payload:e}),ok=e=>({type:Nm,payload:e}),ik=e=>({type:jm,payload:e}),ak=e=>({type:Lm,payload:e}),lk=e=>({type:_m,payload:e}),sk=e=>({type:Fm,payload:e}),uk=e=>({type:Mm,payload:e}),ck=({theme:e,setTheme:t,background:n,backgrounds:r,setBackground:o,setCustomBackground:i,scanLines:a,toggleScanLines:l,setScanLinesIntensity:u,scanLinesIntensity:s,vintageFont:c,toggleVintageFont:f,fontSize:g,setFontSize:k})=>{const[S,C]=w.useState(0),[d,p]=w.useState(""),[h,y]=w.useState(),[A,E]=w.useState([]),R=I=>C(I);return Ia(),b.useCallback(I=>i(I),[i]),m.jsxs(km,{style:{paddingTop:"0.5rem"},children:[m.jsxs(xm,{value:S,onChange:R,children:[m.jsx(hs,{value:0,children:"System"}),m.jsx(hs,{value:1,children:"Admin"})]}),m.jsxs(ym,{children:[S===0&&m.jsxs(m.Fragment,{children:[m.jsx(No,{children:m.jsxs(Tn,{label:"Font:",children:[m.jsx(ds,{name:"vintageFont",value:"vintageFont",label:"Vintage font",onChange:()=>f(!c),checked:c}),m.jsxs(Ud,{children:[m.jsx(zd,{children:"Size:"}),m.jsx(Oi,{min:.8,max:1.2,step:null,value:g,onChange:I=>k(I),marks:[{value:.8,label:"0.8"},{value:.9,label:"0.9"},{value:1,label:"1"},{value:1.1,label:"1.1"},{value:1.2,label:"1.2"}]})]})]})}),m.jsx(No,{}),m.jsx(No,{children:m.jsx(Tn,{label:m.jsx(ds,{style:{},name:"scanLines",value:"scanLines",label:"Scan lines",onChange:()=>l(!a),checked:a}),children:m.jsxs(Ud,{children:[m.jsx(zd,{isDisabled:!a,children:"Intensity:"}),m.jsx(Oi,{disabled:!a,step:10,min:0,max:100,marks:[{value:0,label:"min"},{value:100,label:"max"}],value:s,onChange:I=>u(I)})]})})}),m.jsx(No,{children:m.jsxs(Tn,{label:"Theme:",children:[m.jsx(pn,{value:"original",onChange:()=>t("original"),checked:e==="original",label:"original"}),m.jsx("br",{}),m.jsx(pn,{value:"rose",onChange:()=>t("rose"),checked:e==="rose",label:"🌹 Rose"}),m.jsx("br",{}),m.jsx(pn,{value:"olive",onChange:()=>t("olive"),checked:e==="olive",label:"🍸 Olive"}),m.jsx("br",{}),m.jsx(pn,{value:"theSixtiesUSA",onChange:()=>t("theSixtiesUSA"),checked:e==="theSixtiesUSA",label:"🌷 The 60's USA"}),m.jsx("br",{}),m.jsx(pn,{value:"tokyoDark",onChange:()=>t("tokyoDark"),checked:e==="tokyoDark",label:"📟 Tokyo Dark"}),m.jsx("br",{}),m.jsx(pn,{value:"vaporTeal",onChange:()=>t("vaporTeal"),checked:e==="vaporTeal",label:"💨 Vapor Teal"})]})})]}),S===1&&m.jsx(m.Fragment,{children:m.jsxs("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"},children:[m.jsxs("div",{children:[m.jsx("small",{children:"Bet Type"}),m.jsx(Pa,{style:{flexShrink:0},width:"100%",onChange:I=>p(I.value),value:d,options:[{value:"Matchup",label:"Matchup"},{value:"Gross Score",label:"Gross Score"},{value:"Group Net Winner",label:"Group Net Winner"},{value:"Proposition",label:"Prop"}]})]}),d&&d!=="Proposition"&&m.jsxs(m.Fragment,{children:[m.jsx("div",{children:A.length>0&&m.jsx("ul",{children:A.map((I,j)=>m.jsx("li",{children:`Player ${j+1}: ${I}`},j))})}),m.jsx("div",{children:m.jsx(gs,{onPlayerSelect:I=>{console.log(I),E([...A,I])}})})]}),d&&d==="Matchup"&&m.jsx("div",{children:m.jsx(gs,{onPlayerSelect:I=>{console.log(I)}})}),d==="Proposition"&&m.jsx("div",{children:m.jsx($a,{multiline:!0,rows:4,value:h,fullWidth:!0})}),m.jsxs("div",{style:{marginTop:"0.75rem"},children:[m.jsx("small",{children:"Yes/Over Action"}),m.jsx("br",{}),m.jsx(Ii,{defaultValue:-110,step:10,min:-1e3,max:1e3,width:"130"})]}),m.jsxs("div",{style:{marginTop:"0.75rem"},children:[m.jsx("small",{children:"No/Under Action"}),m.jsx("br",{}),m.jsx(Ii,{defaultValue:-110,step:10,min:-1e3,max:1e3,width:"130"})]}),m.jsx("div",{style:{marginTop:"0.75rem"},children:m.jsx(De,{disabled:!d,fullWidth:!0,children:"Add Bet"})})]})})]})]})},dk=e=>({theme:e.user.theme,background:e.user.background,backgrounds:e.user.backgrounds,vintageFont:e.user.vintageFont,scanLines:e.user.scanLines,scanLinesIntensity:e.user.scanLinesIntensity,fontSize:e.user.fontSize}),fk=e=>({setTheme:t=>e(rk(t)),toggleVintageFont:t=>e(ak(t)),setFontSize:t=>e(uk(t)),toggleScanLines:t=>e(lk(t)),setScanLinesIntensity:t=>e(sk(t)),setBackground:t=>e(ok(t)),setCustomBackground:t=>e(ik(t))}),pk=jh(dk,fk)(ck);T.div`
  float: right;
  margin-right: 0px;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  label {
    font-size: 1rem;
    padding-right: 1rem;
    ${({isDisabled:e})=>e&&W`
        ${Pm()}
      `}
  }
`;const No=T.div`
  margin-bottom: 30px;
`,zd=T.label`
  display: inline-block;
  margin-bottom: 0.5rem;
  margin-left: -1rem;
  ${({isDisabled:e})=>e&&W`
      ${Pm()}
    `}
`,Ud=T.div`
  padding: 8px 16px;
`;T(Tb)`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;const Hd=()=>({width:window.innerWidth,height:window.innerHeight});function hk(){const[e,t]=w.useState(Hd());return w.useEffect(()=>{const n=()=>t(Hd());return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)}),[e.width,e.height]}const mk="/assets/iphone-Db91Bbd8.png",vk=({children:e,maxWidth:t=450,maxHeight:n=896})=>{const[r,o]=hk();return r>t||o>n?m.jsx(gk,{maxWidth:t,maxHeight:n,id:"device",children:m.jsx(yk,{children:e})}):m.jsxs(m.Fragment,{children:[e,m.jsx(xk,{})]})},gk=T.div`
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: ${({maxHeight:e})=>e}px;
  width: ${({maxWidth:e})=>e}px;
  background: #008080;
  @media only screen and (min-width: 450px) and (min-height: 600px) {
    height: 680px;
    width: 400px;
    &:before,
    &:after {
      content: '';
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
      background: url(${mk});
      background-size: cover;
    }
  }
  max-height: 100%;
  max-width: 100%;

  overflow: hidden;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.35);

  overflow: visible;
`,yk=T.div`
  height: 100%;
  width: 100%;
  overflow: auto;
`,xk=T.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0;
  background: black;
  z-index: 999;
  height: 0;
  height: var(--safe-area-inset-bottom);
`,wk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAAAAADAwMD///+AgID//wCAgACAAID0UdedAAAAAXRSTlMAQObYZgAAAMZJREFUKM+dz92twyAMBeB4Aw4Q7jMoCyRXDECVBSpPkP2X6ClOS/pW1UJGfPKPmL4M4PMt/8V9wm25gjhp0ckgn7Ht8HlAydvONFYY4ALPlgHsXrc9+HyKlNIreDkDcB56OoHzeoTt3AMuKDyxtAkmefdZEdGgvSv+RZ9rDUur1QACBCXovQO/Fdu8hoWJ0APQQFgVp8y19gpe7wqFJYPUqkVqBgK9B54+w2ROR00Ht7ygHYemFC/gAMiACfy2Y76EcOBv8QA5diEJAFLjpgAAAABJRU5ErkJggg==",bk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAMAAABEH1h2AAAB4FBMVEUAAACen56zs7OfoJ+hoaGXmZdTU1NTU1Obm5ugoKCioqK/wL+ZmZm5ubmoqaidnp2en56rq6udnp2fn5+lpaWfoJ+cnpyMjo21tbWpqamenp5zc3OoqKidnZ2oqKhiY2KcnJyTlJN+f36pqalZWVmjpKOpqamfoZ9TU1NeXl5UVFSpqam+vr5UVFRnZ2e0uLWMjIyGh4aoqKioqKh9fX11dXVUVFTAwsC/v7/AwMBUVFS/v78AAADr5uu1sbW3s7c8PTzBwsFHR0fTztPo4+c6OjvW0dbIw8jFwcXAvMDj3+NOTk7g2+C7t7sfHh83ODcsLCy/wL+qqaqYlpk0MzXQzdHNyM3Lx8vb19spKCknJScLCwza1trQzM+Ihom5tblcXFwyMjLPys92dHdwb3AYGBhraWsiIiKjn6N+fH9FREUUFBRqZ2qopqiVk5ViYWOPjY96eHpnZmdTUlNJSkpAQEDd2N3CvsKKh4ovLy8RERHKxsqvq66TkJOBgIKFhIaDgYQFBQXY09ihoaGem56am5qLiowQDw8ICAnX19fU1NS9ub2PkI9tbW5mZGZfXl9XVVccHBzl4eXZ2dmytLOdnp1zcXRMS0wlJCWysrKxrbF7eXtaWVqlo6WAfYBzcnNXwFgbAAAAPHRSTlMAqgyUXhz112dPRzs4BK6hiYR4cGlVQS8q+vnx34A89dbS0snGup2cmJGOd3ZiSCL29vTt6cixq5+GeWD0SjRQAAAF90lEQVRIx+3W51vaQBwH8BZHa/fee++9Gy7WhCQEQikbBCLDgCAbRBTBiah1to6qrf9qL6MCBuvju77o7/F5znD5kLv7XhL2/K+61fRgX3Oqed/9JvHQsNG879abew8+PH785IliZ34VEarvoni4+BnZrLYrO+qDM+Kp4xsHheOxan5gB6w4boiF+/jSTRuOKyQ+NB4Ojw/tzM+m0ukOv1DT6+n0+lmRB2KD7tlOyE//nV9sR5A5AFAAQCSNIPOv9ih4/nlk4pvRAXnj3+ftFzmQeGdX00GBRyYmojvxUxdGOIdufs5ojBqNxrhmfj63MTJS0ENu+DY5sAL5qe31IU0mM+dLJDpahcrEfImlVCbj6YP8pzT4h9vzG3BtliMAzErBcQCMtgr/wrlP7sQfrck4+oebRiYnhbkf327k143TJocj5Y6XYiaPR+9w5Gbi8ULa4dC1V/GG+nq/xmRKJQYHecoZDJFoYbAr5fG0JguDnEPgE8Lg79TnzwMIkhkFoBteyo8rcYsUnA+AAVPV0h2pn3dxC/cCVOKowCPfJqJ8cLfrjfxZyZ/xeDRw8MlQprXX1tPjoiiWy8HBF4u+dM6jcS+OcZ2Q36yXt93ethaPd3scjlieZRm1Ootptc58iV86e6u/FPeFcjldGfJLcn6d31YDACzBr4/ZlEozACimVOJWMffALwDcdumGPS/P+2sO8miFYygqcVTgBRTd5IatI79R8C+rVBr/WqI7tbxcdDmdZpIkzU6n00uSgFOp2pJra1xapbK38/xwjT6p0elaE0bjkkenW1+lqCwzpXbRNO1lprIYTQ+vRo2FDH9K1NjdyXNFDb+gQhB9LwBdMLg5Cxw4C1CXkg8OMIRSSZNi7rlegHbpeH6uWn8cq+IpgaMiR1GRo0Lu+hIq8XcVfPa1bzoVCmlm/P7u2fX1IkUQmNVqdREEYYatGbZeq3WVE0+JLYdCc37fxSZJP02FwzlfMPjLFA5rVjGMZBjGQi8smFmGwRYWaCvLZImFhWEQDHbBUzLuYHB6JRy+L/EjISlUPRyVWqkkGIBa8Jrcp5xKpZYCMDghW3QpjCD7JB7ZwocZFPJK7hYUFTkqcVTgzaI+zPNw28zMTDKZdKsxDPNaLC7YmC1i67JYvGaxzXMazVwsmczA7FPS1Q2QI0Pl9laDVotNoayVxnG48qwLx/krMwSOa0mUzdpw3MkaDAlHuX0IiubK3IVSAaXSpgZoP103dzXcxz1ZIXdYlbmfq+GowAl57iJHN/m9zdxvzWrmEcQz6jLz5XK5zMFYR0e3z+fr7uiY5Xy+wVXxY77iK3ClU7NX+dylerso7TqSFoODT5vqChiF4AClVSqDdn7XvRehNP7FzwJHeT4s5zqRoxX+tJorxnheYllSi+PDapbleF4uD/ElcH71WZbqwXGRK6r5Yf7qpiDM2mvx8lknIPckOY5LcjG4m+aLFq8XgwW74yvy+31RJa68c0oMzj2OIB1fvnyCf0DDP2ml4NQAiHfcHtn9Xp27u4/nn/j6LnK0krucX4P8cx5uqyzDWOH8iyL/8ocnGIZy4riNYpjCNtxj7Ld6MfFe97VLV/8icF0JfmwRuwdW5Py2LHeBU5D/0Mhyl/G98tyluUMuy132nD8KeS6uVvf30DSRVaunt/AoTfeQajXppOnROryBz/2n04n1k6SXcDq7/nAxuPkCSVox2G0lyd4A5C9q+TFZ7gLfNveXtfzybnKXvyJPQG6CTxsCTtBi02oHx2t5F5w3Ad+2sLsYkPOTfO5RirIM22wYSVEbleCE3OM2G2GlKCthsxkd8vf7/l3mfqSWN+4y9zu1/DTkgaTbPRDJ54Mlt1tTRpDQV6GKKjh3fz4fGYDdP/P5hE7+u64FntOus9tzHpPJo7fr4UsYCeuFssMQygGTyaS32/Ww21GW/6Y9APkuqq2llp/ZJT9Xy6/EWiulkrVba1pRyxVXzpw5c+BAS8vp042NjftPnTx54sTly8eONTQ03D16dK9UR+82HDuxv+VQ0+E9/0L9BsIFFzjCGiw3AAAAAElFTkSuQmCC",Ak="/assets/shake-CaDFd7xV.png",kk=e=>{const t=e.location.pathname;return m.jsx(Ek,{position:"fixed",children:m.jsxs(Tk,{children:[m.jsx(ll,{active:t==="/",onClick:()=>e.history.push("/"),fullWidth:!0,size:"lg",children:m.jsx(al,{src:bk,alt:"icon"})}),m.jsx(ll,{active:t.startsWith("/wallet"),onClick:()=>e.history.push("/wallet"),fullWidth:!0,size:"lg",children:m.jsx(al,{style:{height:21,opacity:.9},src:Ak,alt:"icon"})}),m.jsx(ll,{active:t==="/settings",onClick:()=>e.history.push("/settings"),fullWidth:!0,size:"lg",children:m.jsx(al,{src:wk,alt:"icon",style:{height:30}})})]})})},Sk=Eh(kk),Ek=T(Zh)`
  top: auto;
  bottom: 0;
  z-index: 2;
  bottom: var(--safe-area-inset-bottom);
`,al=T.img`
  /* image-rendering: pixelated; */
  filter: grayscale(1);
  height: 24px;
`,ll=T(De)`
  margin: 0 1px;
`,Tk=T(sn)`
  margin: 0 -1px;
`;async function Ck(){const e=await fetch("/api/sides",{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw alert("Network response was not ok"),new Error("Network response was not ok");return console.log(e),await e.json()}const Bm="FETCH_SIDES_REQUEST",zm="FETCH_SIDES_SUCCESS",Um="FETCH_SIDES_FAILURE",$k=e=>({type:zm,payload:e}),Pk=()=>async(e,t)=>{e({type:Bm});try{const n=await Ck();e($k(n))}catch(n){e({type:Um,error:n.message})}},Rk=tx`
  ${nx}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${rA}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${oA}') format('woff2');
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
`,Dk=e=>({theme:e.user.theme,background:e.user.background,vintageFont:e.user.vintageFont,fontSize:e.user.fontSize,scanLines:e.user.scanLines,scanLinesIntensity:e.user.scanLinesIntensity}),Ik=({theme:e,background:t,vintageFont:n,fontSize:r,scanLines:o,scanLinesIntensity:i})=>(p1()(Pk()),m.jsx(vk,{children:m.jsx(Xh,{theme:nA[e],children:m.jsxs(m.Fragment,{children:[m.jsx(Rk,{vintageFont:n,fontSize:r,scanLines:o,scanLinesIntensity:i,background:t.value}),m.jsx(my,{children:m.jsxs(m.Fragment,{children:[m.jsxs(md,{children:[m.jsx(Ln,{exact:!0,path:"/coins/:coin",component:void 0}),m.jsx(Ln,{exact:!0,path:"/search",component:void 0}),m.jsx(Sk,{})]}),m.jsxs(md,{children:[m.jsx(Ln,{exact:!0,path:"/",component:OA}),m.jsx(Ln,{exact:!0,path:"/add/bet",component:Im}),m.jsx(Ln,{path:"/wallet/",component:VA}),m.jsx(Ln,{exact:!0,path:"/settings",component:pk})]})]})})]})})})),Ok=jh(Dk)(Ik);window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/);function Nk(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}function Yr(e){"@babel/helpers - typeof";return Yr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Yr(e)}function jk(e,t){if(Yr(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Yr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Lk(e){var t=jk(e,"string");return Yr(t)=="symbol"?t:t+""}function Mk(e,t,n){return t=Lk(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Vd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wd(Object(n),!0).forEach(function(r){Mk(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function je(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Qd=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),sl=function(){return Math.random().toString(36).substring(7).split("").join(".")},Ni={INIT:"@@redux/INIT"+sl(),REPLACE:"@@redux/REPLACE"+sl(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+sl()}};function _k(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Hm(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(je(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(je(1));return n(Hm)(e,t)}if(typeof e!="function")throw new Error(je(2));var o=e,i=t,a=[],l=a,u=!1;function s(){l===a&&(l=a.slice())}function c(){if(u)throw new Error(je(3));return i}function f(C){if(typeof C!="function")throw new Error(je(4));if(u)throw new Error(je(5));var d=!0;return s(),l.push(C),function(){if(d){if(u)throw new Error(je(6));d=!1,s();var h=l.indexOf(C);l.splice(h,1),a=null}}}function g(C){if(!_k(C))throw new Error(je(7));if(typeof C.type>"u")throw new Error(je(8));if(u)throw new Error(je(9));try{u=!0,i=o(i,C)}finally{u=!1}for(var d=a=l,p=0;p<d.length;p++){var h=d[p];h()}return C}function k(C){if(typeof C!="function")throw new Error(je(10));o=C,g({type:Ni.REPLACE})}function S(){var C,d=f;return C={subscribe:function(h){if(typeof h!="object"||h===null)throw new Error(je(11));function y(){h.next&&h.next(c())}y();var A=d(y);return{unsubscribe:A}}},C[Qd]=function(){return this},C}return g({type:Ni.INIT}),r={dispatch:g,subscribe:f,getState:c,replaceReducer:k},r[Qd]=S,r}var Fk=Hm;function Bk(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Ni.INIT});if(typeof r>"u")throw new Error(je(12));if(typeof n(void 0,{type:Ni.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(je(13))})}function zk(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];typeof e[o]=="function"&&(n[o]=e[o])}var i=Object.keys(n),a;try{Bk(n)}catch(l){a=l}return function(u,s){if(u===void 0&&(u={}),a)throw a;for(var c=!1,f={},g=0;g<i.length;g++){var k=i[g],S=n[k],C=u[k],d=S(C,s);if(typeof d>"u")throw s&&s.type,new Error(je(14));f[k]=d,c=c||d!==C}return c=c||i.length!==Object.keys(u).length,c?f:u}}function Uk(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,o){return function(){return r(o.apply(void 0,arguments))}})}function Hk(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var o=r.apply(void 0,arguments),i=function(){throw new Error(je(15))},a={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},l=t.map(function(u){return u(a)});return i=Uk.apply(void 0,l)(o.dispatch),Vd(Vd({},o),{},{dispatch:i})}}}function Wm(e){var t=function(r){var o=r.dispatch,i=r.getState;return function(a){return function(l){return typeof l=="function"?l(o,i,e):a(l)}}};return t}var Vm=Wm();Vm.withExtraArgument=Wm;const Wk={loading:!1,data:[],error:null};function Vk(e=Wk,t){switch(t.type){case Bm:return{...e,loading:!0,error:null};case zm:return console.log(t.payload),{...e,loading:!1,data:t.payload};case Um:return{...e,loading:!1,error:t.error};default:return e}}const Qk=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch{return}},Gk=(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch{}},Kk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAACVBMVEUAgIAA//8AAABML0eVAAAAHUlEQVQY02MgDTA6QDADiwIEIxhMDWBMLTBIHAYAXSQELXns9OsAAAAASUVORK5CYII=",Yk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAD1BMVEUAgICAAIAAAIAAAAD/AP/xWXoLAAAAWElEQVQoz2NAAEZFRWUGZMAiJCQMpMhSIQIDMBWOilAAUyEEA5SpMIYBmAoDmFtgKuACA6dCRASmggUcKAxgP4AFGMFMoAlwFWAmOSrAwQBTIWxsTI24BQDnDRqxaEeFJwAAAABJRU5ErkJggg==",Jk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAADFBMVEWAAIAAAAD/AP+AgIC+5PyhAAAAIElEQVQY02MgCuwGgZ1AxgEQjxGIG8CMISoSCgZE+RwAhEEUNc/zGIcAAAAASUVORK5CYII=",Xk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAuAgMAAABG0ZGhAAAADFBMVEXAwMD//wD///+AgAD5TC6AAAAAg0lEQVQY07WQsQ2DUAxEbwXTpYgySpqTSBFljujPwQKMALOwACOwgyVa7hCIFgosW/K76tkg2QwkIqIdIy5w1U4rFxZz1blh0ED7WwEK6zlZIHQA1umGIDTQTgV4heuBL10fPG/i38p/+4X8Nt/DPwVyhlx7OcvPmLvv4e97tn/k+f8tsA9WQ4HgaDkAAAAASUVORK5CYII=",qk="/assets/water-CLT8T8g9.gif",Zk="/assets/noise-Q2HaBj8G.gif",Qm="user",eS=Qk(Qm)||{},Gd=[{value:"#008080",label:"(Custom)"},{value:`url(${Kk})`,label:"Rivets"},{value:`url(${Yk})`,label:"Zig-zag"},{value:`url(${Jk})`,label:"Purple squares"},{value:`url(${Xk})`,label:"Honey"},{value:`url(${qk})`,label:"Water"},{value:`url(${Zk})`,label:"Noise"}],tS={followed:[],wallet:{},seenEvents:[],currency:"EUR",vintageFont:!0,theme:"original",backgrounds:Gd,background:Gd[0],fontSize:1,scanLines:!1,scanLinesIntensity:0,...eS},nS=(e=tS,t)=>{const n=function(){switch(t.type){case XA:{const S=[...new Set([...e.followed,t.payload])];return{...e,followed:S}}case qA:{const S=e.followed.filter(C=>C!==t.payload);return{...e,followed:S}}case Om:return{...e,theme:t.payload};case Nm:return{...e,background:t.payload};case jm:const[r,...o]=e.backgrounds,i={...r,value:t.payload},a=[i,...o];return{...e,backgrounds:a,background:i};case Lm:return{...e,vintageFont:t.payload};case Mm:return{...e,fontSize:t.payload};case _m:return{...e,scanLines:t.payload};case Fm:return{...e,scanLinesIntensity:t.payload};case JA:const l=t.payload,u=[...e.seenEvents,l];return{...e,seenEvents:u};case ZA:const{amount:s,coin:c}=t.payload,f={...e.wallet},g=Object.keys(f).length,k=f[c]?f[c].order:g;return f[c]={symbol:c,amount:s,order:k},{...e,wallet:f};case tk:{const S={...e.wallet};return S[t.payload]&&delete S[t.payload],{...e,wallet:S}}case nk:{const C=t.payload.reduce((d,p)=>({...d,[p]:e.wallet[p]}),{});return{...e,wallet:C}}case ek:return{...e,currency:t.payload};default:return e}}();return Gk(Qm,n),n},rS=zk({sides:Vk,user:nS}),oS=Fk(rS,Hk(Vm));ag.render(m.jsx(Sy,{store:oS,children:m.jsx(Ok,{})}),document.getElementById("root"));Nk();
