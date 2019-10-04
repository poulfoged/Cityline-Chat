/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"client": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + "41241f91c30446689a09" + "." + ({"vendors~platform":"vendors~platform"}[chunkId]||chunkId) + ".bundle.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/client/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@ungap/event-target/esm/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@ungap/event-target/esm/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*! (c) Andrea Giammarchi - ISC */
var self = undefined || /* istanbul ignore next */ {};
try {
  self.EventTarget = (new EventTarget).constructor;
} catch(EventTarget) {
  (function (Object, wm) {
    var create = Object.create;
    var defineProperty = Object.defineProperty;
    var proto = EventTarget.prototype;
    define(proto, 'addEventListener', function (type, listener, options) {
      for (var
        secret = wm.get(this),
        listeners = secret[type] || (secret[type] = []),
        i = 0, length = listeners.length; i < length; i++
      ) {
        if (listeners[i].listener === listener)
          return;
      }
      listeners.push({target: this, listener: listener, options: options});
    });
    define(proto, 'dispatchEvent', function (event) {
      var secret = wm.get(this);
      var listeners = secret[event.type];
      if (listeners) {
        define(event, 'target', this);
        define(event, 'currentTarget', this);
        listeners.slice(0).forEach(dispatch, event);
        delete event.currentTarget;
        delete event.target;
      }
      return true;
    });
    define(proto, 'removeEventListener', function (type, listener) {
      for (var
        secret = wm.get(this),
        listeners = secret[type] || (secret[type] = []),
        i = 0, length = listeners.length; i < length; i++
      ) {
        if (listeners[i].listener === listener) {
          listeners.splice(i, 1);
          return;
        }
      }
    });
    self.EventTarget = EventTarget;
    function EventTarget() {'use strict';
      wm.set(this, create(null));
    }
    function define(target, name, value) {
      defineProperty(
        target,
        name,
        {
          configurable: true,
          writable: true,
          value: value
        }
      );
    }
    function dispatch(info) {
      var options = info.options;
      if (options && options.once)
        info.target.removeEventListener(this.type, info.listener);
      if (typeof info.listener === 'function')
        info.listener.call(info.target, this);
      else
        info.listener.handleEvent(this);
    }
  }(Object, new WeakMap));
}
/* harmony default export */ __webpack_exports__["default"] = (self.EventTarget);


/***/ }),

/***/ "./node_modules/cityline-client/dist/CitylineClient.js":
/*!*************************************************************!*\
  !*** ./node_modules/cityline-client/dist/CitylineClient.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";r.r(t);
/*! (c) Andrea Giammarchi - ISC */
var n={};try{n.EventTarget=(new EventTarget).constructor}catch(e){!function(e,t){var r=e.create,i=e.defineProperty,s=a.prototype;function a(){t.set(this,r(null))}function o(e,t,r){i(e,t,{configurable:!0,writable:!0,value:r})}function c(e){var t=e.options;t&&t.once&&e.target.removeEventListener(this.type,e.listener),"function"==typeof e.listener?e.listener.call(e.target,this):e.listener.handleEvent(this)}o(s,"addEventListener",function(e,r,n){for(var i=t.get(this),s=i[e]||(i[e]=[]),a=0,o=s.length;a<o;a++)if(s[a].listener===r)return;s.push({target:this,listener:r,options:n})}),o(s,"dispatchEvent",function(e){var r=t.get(this)[e.type];return r&&(o(e,"target",this),o(e,"currentTarget",this),r.slice(0).forEach(c,e),delete e.currentTarget,delete e.target),!0}),o(s,"removeEventListener",function(e,r){for(var n=t.get(this),i=n[e]||(n[e]=[]),s=0,a=i.length;s<a;s++)if(i[s].listener===r)return void i.splice(s,1)}),n.EventTarget=a}(Object,new WeakMap)}var i=n.EventTarget;r.d(t,"CitylineClient",function(){return s});class s{constructor(e,t=(()=>Promise.resolve({}))){this.url=e,this.requestFactory=t,this.eventTarget=new i,this._frames={},this._idCache={},this.startListener=async()=>{try{const e=new TextDecoder,t=(await fetch(this.url,await this.buildRequest())).body.getReader(),r=new a;for(;;){const n=await t.read();if(n.done)throw new Error("Stream should never complete");for(r.add(e.decode(n.value));r.hasTerminator();){const e=r.take(),t=this.parseFrame(e);this.addFrame(t)}}}catch(e){this.eventTarget.dispatchEvent(new CustomEvent("error",{detail:e}))}finally{setTimeout(this.startListener,1e3)}},setTimeout(async()=>{await this.startListener()})}addEventListener(e,t,r){return this.eventTarget.addEventListener(e,t,r)}removeEventListener(e,t,r){this.eventTarget.removeEventListener(e,t,r)}async getFrames(...e){const t=e.map(e=>this._frames[e]?Promise.resolve(this._frames[e]):new Promise(t=>{const r=n=>{this.removeEventListener(e,r),t(n.detail)};this.addEventListener(e,r)}));return await Promise.all(t)}async getFrame(e){return this._frames[e]?this._frames[e].data:new Promise(t=>{const r=n=>{this.removeEventListener(e,r),t(n.detail)};this.addEventListener(e,r)})}async buildRequest(){const e=await this.requestFactory(),t=new Headers(e.headers);t.set("Content-Type","application/json");const r={tickets:this._idCache};return{...e,body:JSON.stringify(r),method:"post",headers:t}}addFrame(e){e&&e.event&&(e.id&&(this._idCache[e.event]=e.id),this._frames[e.event]=e,setTimeout(()=>{this.eventTarget.dispatchEvent(new CustomEvent(e.event,{detail:e.data})),this.eventTarget.dispatchEvent(new CustomEvent("frame-received",{detail:e}))}))}parseFrame(e){const t={data:void 0};return e.forEach(e=>{const r=e.split(": ");if(2===r.length)switch(r[0]){case"data":t[r[0]]=JSON.parse(r[1]);break;default:t[r[0]]=r[1].trim()}}),t}}class a{constructor(){this._buffer=[]}add(e){this._buffer=this._buffer.concat(e.split("\n"))}hasTerminator(){return-1!==this._buffer.indexOf("")}take(){const e=this._buffer.indexOf(""),t=this._buffer.slice(0,e);return this._buffer=this._buffer.slice(e+1),t}clear(){this._buffer.length=0}}}])});
//# sourceMappingURL=CitylineClient.js.map

/***/ }),

/***/ "./node_modules/document-register-element/build/document-register-element.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/document-register-element/build/document-register-element.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! (C) Andrea Giammarchi - @WebReflection - Mit Style License */
(function(e,t){"use strict";function Ht(){var e=wt.splice(0,wt.length);Et=0;while(e.length)e.shift().call(null,e.shift())}function Bt(e,t){for(var n=0,r=e.length;n<r;n++)Jt(e[n],t)}function jt(e){for(var t=0,n=e.length,r;t<n;t++)r=e[t],Pt(r,A[It(r)])}function Ft(e){return function(t){ut(t)&&(Jt(t,e),O.length&&Bt(t.querySelectorAll(O),e))}}function It(e){var t=ht.call(e,"is"),n=e.nodeName.toUpperCase(),r=_.call(L,t?N+t.toUpperCase():T+n);return t&&-1<r&&!qt(n,t)?-1:r}function qt(e,t){return-1<O.indexOf(e+'[is="'+t+'"]')}function Rt(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,i=e.target,s=e[y]||2,o=e[w]||3;kt&&(!i||i===t)&&t[h]&&r!=="style"&&(e.prevValue!==e.newValue||e.newValue===""&&(n===s||n===o))&&t[h](r,n===s?null:e.prevValue,n===o?null:e.newValue)}function Ut(e){var t=Ft(e);return function(e){wt.push(t,e.target),Et&&clearTimeout(Et),Et=setTimeout(Ht,1)}}function zt(e){Ct&&(Ct=!1,e.currentTarget.removeEventListener(S,zt)),O.length&&Bt((e.target||n).querySelectorAll(O),e.detail===l?l:a),st&&Vt()}function Wt(e,t){var n=this;vt.call(n,e,t),Lt.call(n,{target:n})}function Xt(e,t){nt(e,t),Mt?Mt.observe(e,yt):(Nt&&(e.setAttribute=Wt,e[o]=Ot(e),e[u](x,Lt)),e[u](E,Rt)),e[m]&&kt&&(e.created=!0,e[m](),e.created=!1)}function Vt(){for(var e,t=0,n=at.length;t<n;t++)e=at[t],M.contains(e)||(n--,at.splice(t--,1),Jt(e,l))}function $t(e){throw new Error("A "+e+" type is already registered")}function Jt(e,t){var n,r=It(e),i;-1<r&&(Dt(e,A[r]),r=0,t===a&&!e[a]?(e[l]=!1,e[a]=!0,i="connected",r=1,st&&_.call(at,e)<0&&at.push(e)):t===l&&!e[l]&&(e[a]=!1,e[l]=!0,i="disconnected",r=1),r&&(n=e[t+f]||e[i+f])&&n.call(e))}function Kt(){}function Qt(e,t,r){var i=r&&r[c]||"",o=t.prototype,u=tt(o),a=t.observedAttributes||j,f={prototype:u};ot(u,m,{value:function(){if(Q)Q=!1;else if(!this[W]){this[W]=!0,new t(this),o[m]&&o[m].call(this);var e=G[Z.get(t)];(!V||e.create.length>1)&&Zt(this)}}}),ot(u,h,{value:function(e){-1<_.call(a,e)&&o[h].apply(this,arguments)}}),o[d]&&ot(u,p,{value:o[d]}),o[v]&&ot(u,g,{value:o[v]}),i&&(f[c]=i),e=e.toUpperCase(),G[e]={constructor:t,create:i?[i,et(e)]:[e]},Z.set(t,e),n[s](e.toLowerCase(),f),en(e),Y[e].r()}function Gt(e){var t=G[e.toUpperCase()];return t&&t.constructor}function Yt(e){return typeof e=="string"?e:e&&e.is||""}function Zt(e){var t=e[h],n=t?e.attributes:j,r=n.length,i;while(r--)i=n[r],t.call(e,i.name||i.nodeName,null,i.value||i.nodeValue)}function en(e){return e=e.toUpperCase(),e in Y||(Y[e]={},Y[e].p=new K(function(t){Y[e].r=t})),Y[e].p}function tn(){X&&delete e.customElements,B(e,"customElements",{configurable:!0,value:new Kt}),B(e,"CustomElementRegistry",{configurable:!0,value:Kt});for(var t=function(t){var r=e[t];if(r){e[t]=function(t){var i,s;return t||(t=this),t[W]||(Q=!0,i=G[Z.get(t.constructor)],s=V&&i.create.length===1,t=s?Reflect.construct(r,j,i.constructor):n.createElement.apply(n,i.create),t[W]=!0,Q=!1,s||Zt(t)),t},e[t].prototype=r.prototype;try{r.prototype.constructor=e[t]}catch(i){z=!0,B(r,W,{value:e[t]})}}},r=i.get(/^HTML[A-Z]*[a-z]/),o=r.length;o--;t(r[o]));n.createElement=function(e,t){var n=Yt(t);return n?gt.call(this,e,et(n)):gt.call(this,e)},St||(Tt=!0,n[s](""))}var n=e.document,r=e.Object,i=function(e){var t=/^[A-Z]+[a-z]/,n=function(e){var t=[],n;for(n in s)e.test(n)&&t.push(n);return t},i=function(e,t){t=t.toLowerCase(),t in s||(s[e]=(s[e]||[]).concat(t),s[t]=s[t.toUpperCase()]=e)},s=(r.create||r)(null),o={},u,a,f,l;for(a in e)for(l in e[a]){f=e[a][l],s[l]=f;for(u=0;u<f.length;u++)s[f[u].toLowerCase()]=s[f[u].toUpperCase()]=l}return o.get=function(r){return typeof r=="string"?s[r]||(t.test(r)?[]:""):n(r)},o.set=function(n,r){return t.test(n)?i(n,r):i(r,n),o},o}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:["element","abbr","address","article","aside","b","bdi","bdo","cite","code","command","dd","dfn","dt","em","figcaption","figure","footer","header","i","kbd","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],HTMLHeadElement:["head"],HTMLHeadingElement:["h1","h2","h3","h4","h5","h6"],HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}});typeof t!="object"&&(t={type:t||"auto"});var s="registerElement",o="__"+s+(e.Math.random()*1e5>>0),u="addEventListener",a="attached",f="Callback",l="detached",c="extends",h="attributeChanged"+f,p=a+f,d="connected"+f,v="disconnected"+f,m="created"+f,g=l+f,y="ADDITION",b="MODIFICATION",w="REMOVAL",E="DOMAttrModified",S="DOMContentLoaded",x="DOMSubtreeModified",T="<",N="=",C=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,k=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],L=[],A=[],O="",M=n.documentElement,_=L.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},D=r.prototype,P=D.hasOwnProperty,H=D.isPrototypeOf,B=r.defineProperty,j=[],F=r.getOwnPropertyDescriptor,I=r.getOwnPropertyNames,q=r.getPrototypeOf,R=r.setPrototypeOf,U=!!r.__proto__,z=!1,W="__dreCEv1",X=e.customElements,V=!/^force/.test(t.type)&&!!(X&&X.define&&X.get&&X.whenDefined),$=r.create||r,J=e.Map||function(){var t=[],n=[],r;return{get:function(e){return n[_.call(t,e)]},set:function(e,i){r=_.call(t,e),r<0?n[t.push(e)-1]=i:n[r]=i}}},K=e.Promise||function(e){function i(e){n=!0;while(t.length)t.shift()(e)}var t=[],n=!1,r={"catch":function(){return r},then:function(e){return t.push(e),n&&setTimeout(i,1),r}};return e(i),r},Q=!1,G=$(null),Y=$(null),Z=new J,et=function(e){return e.toLowerCase()},tt=r.create||function sn(e){return e?(sn.prototype=e,new sn):this},nt=R||(U?function(e,t){return e.__proto__=t,e}:I&&F?function(){function e(e,t){for(var n,r=I(t),i=0,s=r.length;i<s;i++)n=r[i],P.call(e,n)||B(e,n,F(t,n))}return function(t,n){do e(t,n);while((n=q(n))&&!H.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),rt=e.MutationObserver||e.WebKitMutationObserver,it=(e.HTMLElement||e.Element||e.Node).prototype,st=!H.call(it,M),ot=st?function(e,t,n){return e[t]=n.value,e}:B,ut=st?function(e){return e.nodeType===1}:function(e){return H.call(it,e)},at=st&&[],ft=it.attachShadow,lt=it.cloneNode,ct=it.dispatchEvent,ht=it.getAttribute,pt=it.hasAttribute,dt=it.removeAttribute,vt=it.setAttribute,mt=n.createElement,gt=mt,yt=rt&&{attributes:!0,characterData:!0,attributeOldValue:!0},bt=rt||function(e){Nt=!1,M.removeEventListener(E,bt)},wt,Et=0,St=s in n&&!/^force-all/.test(t.type),xt=!0,Tt=!1,Nt=!0,Ct=!0,kt=!0,Lt,At,Ot,Mt,_t,Dt,Pt;St||(R||U?(Dt=function(e,t){H.call(t,e)||Xt(e,t)},Pt=Xt):(Dt=function(e,t){e[o]||(e[o]=r(!0),Xt(e,t))},Pt=Dt),st?(Nt=!1,function(){var e=F(it,u),t=e.value,n=function(e){var t=new CustomEvent(E,{bubbles:!0});t.attrName=e,t.prevValue=ht.call(this,e),t.newValue=null,t[w]=t.attrChange=2,dt.call(this,e),ct.call(this,t)},r=function(e,t){var n=pt.call(this,e),r=n&&ht.call(this,e),i=new CustomEvent(E,{bubbles:!0});vt.call(this,e,t),i.attrName=e,i.prevValue=n?r:null,i.newValue=t,n?i[b]=i.attrChange=1:i[y]=i.attrChange=0,ct.call(this,i)},i=function(e){var t=e.currentTarget,n=t[o],r=e.propertyName,i;n.hasOwnProperty(r)&&(n=n[r],i=new CustomEvent(E,{bubbles:!0}),i.attrName=n.name,i.prevValue=n.value||null,i.newValue=n.value=t[r]||null,i.prevValue==null?i[y]=i.attrChange=0:i[b]=i.attrChange=1,ct.call(t,i))};e.value=function(e,s,u){e===E&&this[h]&&this.setAttribute!==r&&(this[o]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",i)),t.call(this,e,s,u)},B(it,u,e)}()):rt||(M[u](E,bt),M.setAttribute(o,1),M.removeAttribute(o),Nt&&(Lt=function(e){var t=this,n,r,i;if(t===e.target){n=t[o],t[o]=r=Ot(t);for(i in r){if(!(i in n))return At(0,t,i,n[i],r[i],y);if(r[i]!==n[i])return At(1,t,i,n[i],r[i],b)}for(i in n)if(!(i in r))return At(2,t,i,n[i],r[i],w)}},At=function(e,t,n,r,i,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};o[s]=e,Rt(o)},Ot=function(e){for(var t,n,r={},i=e.attributes,s=0,o=i.length;s<o;s++)t=i[s],n=t.name,n!=="setAttribute"&&(r[n]=t.value);return r})),n[s]=function(t,r){p=t.toUpperCase(),xt&&(xt=!1,rt?(Mt=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new rt(function(r){for(var i,s,o,u=0,a=r.length;u<a;u++)i=r[u],i.type==="childList"?(n(i.addedNodes,e),n(i.removedNodes,t)):(s=i.target,kt&&s[h]&&i.attributeName!=="style"&&(o=ht.call(s,i.attributeName),o!==i.oldValue&&s[h](i.attributeName,i.oldValue,o)))})}(Ft(a),Ft(l)),_t=function(e){return Mt.observe(e,{childList:!0,subtree:!0}),e},_t(n),ft&&(it.attachShadow=function(){return _t(ft.apply(this,arguments))})):(wt=[],n[u]("DOMNodeInserted",Ut(a)),n[u]("DOMNodeRemoved",Ut(l))),n[u](S,zt),n[u]("readystatechange",zt),it.cloneNode=function(e){var t=lt.call(this,!!e),n=It(t);return-1<n&&Pt(t,A[n]),e&&O.length&&jt(t.querySelectorAll(O)),t});if(Tt)return Tt=!1;-2<_.call(L,N+p)+_.call(L,T+p)&&$t(t);if(!C.test(p)||-1<_.call(k,p))throw new Error("The type "+t+" is invalid");var i=function(){return o?n.createElement(f,p):n.createElement(f)},s=r||D,o=P.call(s,c),f=o?r[c].toUpperCase():p,p,d;return o&&-1<_.call(L,T+f)&&$t(f),d=L.push((o?N:T)+p)-1,O=O.concat(O.length?",":"",o?f+'[is="'+t.toLowerCase()+'"]':f),i.prototype=A[d]=P.call(s,"prototype")?s.prototype:tt(it),O.length&&Bt(n.querySelectorAll(O),a),i},n.createElement=gt=function(e,t){var r=Yt(t),i=r?mt.call(n,e,et(r)):mt.call(n,e),s=""+e,o=_.call(L,(r?N:T)+(r||s).toUpperCase()),u=-1<o;return r&&(i.setAttribute("is",r=r.toLowerCase()),u&&(u=qt(s.toUpperCase(),r))),kt=!n.createElement.innerHTMLHelper,u&&Pt(i,A[o]),i}),Kt.prototype={constructor:Kt,define:V?function(e,t,n){if(n)Qt(e,t,n);else{var r=e.toUpperCase();G[r]={constructor:t,create:[r]},Z.set(t,r),X.define(e,t)}}:Qt,get:V?function(e){return X.get(e)||Gt(e)}:Gt,whenDefined:V?function(e){return K.race([X.whenDefined(e),en(e)])}:en};if(!X||/^force/.test(t.type))tn();else if(!t.noBuiltIn)try{(function(t,r,i){r[c]="a",t.prototype=tt(HTMLAnchorElement.prototype),t.prototype.constructor=t,e.customElements.define(i,t,r);if(ht.call(n.createElement("a",{is:i}),"is")!==i||V&&ht.call(new t,"is")!==i)throw r})(function on(){return Reflect.construct(HTMLAnchorElement,[],on)},{},"document-register-element-a")}catch(nn){tn()}if(!t.noBuiltIn)try{mt.call(n,"a","a")}catch(rn){et=function(e){return{is:e.toLowerCase()}}}})(window);

/***/ }),

/***/ "./node_modules/es6-promise/auto.js":
/*!******************************************!*\
  !*** ./node_modules/es6-promise/auto.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// This file can be required in Browserify and Node.js for automatic polyfill
// To use it:  require('es6-promise/auto');

module.exports = __webpack_require__(/*! ./ */ "./node_modules/es6-promise/dist/es6-promise.js").polyfill();


/***/ }),

/***/ "./node_modules/es6-promise/dist/es6-promise.js":
/*!******************************************************!*\
  !*** ./node_modules/es6-promise/dist/es6-promise.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.5+7f2b526d
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var TRY_CATCH_ERROR = { error: null };

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    TRY_CATCH_ERROR.error = error;
    return TRY_CATCH_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === TRY_CATCH_ERROR) {
      reject(promise, TRY_CATCH_ERROR.error);
      TRY_CATCH_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = void 0,
      failed = void 0;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (failed) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = getThen(entry);

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        handleMaybeThenable(promise, entry, _then);
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./source/images/back-arrow.svg":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./source/images/back-arrow.svg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"/></svg>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./source/images/compass.svg":
/*!*************************************************************!*\
  !*** ./node_modules/raw-loader!./source/images/compass.svg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg\n    xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\">\n    <path stoke=\"none\" d=\"M12.03 7.25l-.52 2.38-.2 1.03-.38-.25-1.6-1.07 1.08 1.59.27.4-1.05.2-2.38.47 2.38.5 1.05.2-.27.4-1.07 1.6 1.59-1.08.4-.27.2 1.05.5 2.38.46-2.38.2-1.05.41.27 1.6 1.07-1.08-1.59-.26-.39 1.04-.19 2.38-.52-2.38-.46-1.04-.2.26-.41 1.07-1.6-1.59 1.08-.4.27-.2-1.05-.47-2.38z\" />\n    <circle cx=\"12\" cy=\"12\" r=\"8.33\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./source/images/create.svg":
/*!************************************************************!*\
  !*** ./node_modules/raw-loader!./source/images/create.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./source/images/history.svg":
/*!*************************************************************!*\
  !*** ./node_modules/raw-loader!./source/images/history.svg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"><path fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.17 12v.05m7.73 7.82l.15.01m0 0a7.88 7.88 0 0 0 0-15.76A7.88 7.88 0 0 0 4.17 12\" paint-order=\"markers fill stroke\"/><path d=\"M4.2 16.22L2.8 13.8l-1.4-2.42h5.59l-1.4 2.42z\" paint-order=\"markers fill stroke\"/><path fill=\"none\" d=\"M11.64 6.66v5.8l3.3 3.3\"/></svg>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./source/images/me.svg":
/*!********************************************************!*\
  !*** ./node_modules/raw-loader!./source/images/me.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 6.35 6.35\"><g fill=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\".26\" transform=\"translate(0 -290.65)\"><path d=\"M5.26 294.86c0 .81 0 1.5-2.08 1.47-2.07-.03-2.09-.66-2.09-1.47 0-.82.93-1.48 2.09-1.48 1.15 0 2.08.66 2.08 1.48z\" paint-order=\"markers fill stroke\"/><circle cx=\"3.17\" cy=\"292.74\" r=\"1.47\" paint-order=\"markers fill stroke\"/></g></svg>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./source/images/menu-20-v1.svg":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./source/images/menu-20-v1.svg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\">\n  <path d=\"M1 4h18v2H1zm0 5h18v2H1zm0 5h18v2H1z\"/>\n</svg>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./source/images/vouchers.svg":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./source/images/vouchers.svg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 6.35 6.35\"><g stroke-width=\".26\"><g fill=\"none\" transform=\"translate(0 -290.65)\"><rect width=\"4.5\" height=\"2.38\" x=\".93\" y=\"293.69\" stroke-linecap=\"round\" stroke-linejoin=\"round\" paint-order=\"markers stroke fill\" rx=\".5\" ry=\".5\"/><path stroke-dasharray=\".26458332,.26458332\" d=\"M2.22 293.77v2.25\"/><path d=\"M3.27 294.36h1.5M3.27 294.89h1.5\"/></g><g fill=\"none\" transform=\"rotate(-15 -1106.7 148.76)\"><rect width=\"4.5\" height=\"2.38\" x=\".93\" y=\"293.69\" stroke-linecap=\"round\" stroke-linejoin=\"round\" paint-order=\"markers stroke fill\" rx=\".5\" ry=\".5\"/><path stroke-dasharray=\".26458332,.26458332\" d=\"M2.22 293.77v2.25\"/><path d=\"M3.27 294.36h1.5M3.27 294.89h1.5\"/></g><g fill=\"#fff\" paint-order=\"markers fill stroke\" transform=\"translate(0 -290.65)\"><rect width=\"4.5\" height=\"2.38\" x=\".93\" y=\"293.69\" stroke-linecap=\"round\" stroke-linejoin=\"round\" paint-order=\"markers fill stroke\" rx=\".5\" ry=\".5\"/><path stroke-dasharray=\".26458332,.26458332000000001\" d=\"M2.22 293.77v2.25\" paint-order=\"markers fill stroke\"/><path d=\"M3.27 294.36h1.5M3.27 294.89h1.5\" paint-order=\"markers fill stroke\"/></g></g></svg>"

/***/ }),

/***/ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js":
/*!*****************************************************************!*\
  !*** ./node_modules/smoothscroll-polyfill/dist/smoothscroll.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* smoothscroll v0.4.0 - 2018 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {
  'use strict';

  // polyfill
  function polyfill() {
    // aliases
    var w = window;
    var d = document;

    // return if scroll behavior is supported and polyfill is not forced
    if (
      'scrollBehavior' in d.documentElement.style &&
      w.__forceSmoothScrollPolyfill__ !== true
    ) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now =
      w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;

    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (
        firstArg === null ||
        typeof firstArg !== 'object' ||
        firstArg.behavior === undefined ||
        firstArg.behavior === 'auto' ||
        firstArg.behavior === 'instant'
      ) {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError(
        'behavior member of ScrollOptions ' +
          firstArg.behavior +
          ' is not a valid value for enumeration ScrollBehavior.'
      );
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      var isBody;

      do {
        el = el.parentNode;

        isBody = el === d.body;
      } while (isBody === false && isScrollable(el) === false);

      isBody = null;

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object'
              ? arguments[0]
              : w.scrollX || w.pageXOffset,
          // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined
              ? arguments[1]
              : w.scrollY || w.pageYOffset
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : w.scrollX || w.pageXOffset,
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : w.scrollY || w.pageYOffset
      );
    };

    // w.scrollBy
    w.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object' ? arguments[0] : 0,
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined ? arguments[1] : 0
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        ~~arguments[0].left + (w.scrollX || w.pageXOffset),
        ~~arguments[0].top + (w.scrollY || w.pageYOffset)
      );
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(
          this,
          // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined
            ? ~~arguments[0].left
            : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
          // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined
            ? ~~arguments[0].top
            : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
        );

        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        this,
        this,
        typeof left === 'undefined' ? this.scrollLeft : ~~left,
        typeof top === 'undefined' ? this.scrollTop : ~~top
      );
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(
          this,
          arguments[0].left !== undefined
            ? ~~arguments[0].left + this.scrollLeft
            : ~~arguments[0] + this.scrollLeft,
          arguments[0].top !== undefined
            ? ~~arguments[0].top + this.scrollTop
            : ~~arguments[1] + this.scrollTop
        );

        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function() {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(
          this,
          arguments[0] === undefined ? true : arguments[0]
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(
          this,
          scrollableParent,
          scrollableParent.scrollLeft + clientRects.left - parentRects.left,
          scrollableParent.scrollTop + clientRects.top - parentRects.top
        );

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  if (true) {
    // commonjs
    module.exports = { polyfill: polyfill };
  } else {}

}());


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/*! exports provided: Headers, Request, Response, DOMException, fetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
var support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob:
    'FileReader' in self &&
    'Blob' in self &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(':')
    var key = parts.shift().trim()
    if (key) {
      var value = parts.join(':').trim()
      headers.append(key, value)
    }
  })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : 'OK'
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = self.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      resolve(new Response(body, options))
    }

    xhr.onerror = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.ontimeout = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.onabort = function() {
      reject(new DOMException('Aborted', 'AbortError'))
    }

    xhr.open(request.method, request.url, true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob'
    }

    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value)
    })

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!self.fetch) {
  self.fetch = fetch
  self.Headers = Headers
  self.Request = Request
  self.Response = Response
}


/***/ }),

/***/ "./source/features/app-loader/AppLoaderElement-module.less":
/*!*****************************************************************!*\
  !*** ./source/features/app-loader/AppLoaderElement-module.less ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app-loader":"AppLoaderElement-module-app-loader-1ET","appLoader":"AppLoaderElement-module-app-loader-1ET","loading-screen":"AppLoaderElement-module-loading-screen-2SJ","loadingScreen":"AppLoaderElement-module-loading-screen-2SJ"};

/***/ }),

/***/ "./source/features/app-loader/AppLoaderElement.ts":
/*!********************************************************!*\
  !*** ./source/features/app-loader/AppLoaderElement.ts ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AppLoaderElement_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppLoaderElement-module.less */ "./source/features/app-loader/AppLoaderElement-module.less");
/* harmony import */ var _AppLoaderElement_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AppLoaderElement_module_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var features_cityline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! features/cityline */ "./source/features/cityline/index.ts");



var AppLoaderElement = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AppLoaderElement, _super);
    function AppLoaderElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.named = function (name) { return _this.querySelector("[name=" + name + "]"); };
        _this.view = function () { return "\n        <div name=loading-screen class=\"" + _AppLoaderElement_module_less__WEBPACK_IMPORTED_MODULE_1__["loadingScreen"] + "\">chat</div>\n    "; };
        return _this;
    }
    AppLoaderElement.prototype.connectedCallback = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var init, template, element;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.className += " " + _AppLoaderElement_module_less__WEBPACK_IMPORTED_MODULE_1__["appLoader"];
                        this.insertAdjacentHTML("afterbegin", this.view());
                        this.loadingScreen = this.named("loading-screen");
                        return [4 /*yield*/, features_cityline__WEBPACK_IMPORTED_MODULE_2__["cityline"].getFrames("user-account")];
                    case 1:
                        init = _a.sent();
                        template = this.querySelector("template");
                        if (!template.content) {
                            element = (template.firstElementChild.cloneNode(true)); // IE 11
                        }
                        else {
                            element = (template.content.firstElementChild);
                        }
                        this.insertAdjacentElement("beforeend", element);
                        setTimeout(function () {
                            _this.loadingScreen.style.opacity = "0";
                            _this.loadingScreen.style.pointerEvents = "none";
                        }, 1200);
                        return [2 /*return*/];
                }
            });
        });
    };
    return AppLoaderElement;
}(HTMLElement));
customElements.define("app-loader", AppLoaderElement);


/***/ }),

/***/ "./source/features/app-loader/index.ts":
/*!*********************************************!*\
  !*** ./source/features/app-loader/index.ts ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppLoaderElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLoaderElement */ "./source/features/app-loader/AppLoaderElement.ts");



/***/ }),

/***/ "./source/features/app-switcher/AppButtonsElement-style.less":
/*!*******************************************************************!*\
  !*** ./source/features/app-switcher/AppButtonsElement-style.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./source/features/app-switcher/AppButtonsElement.ts":
/*!***********************************************************!*\
  !*** ./source/features/app-switcher/AppButtonsElement.ts ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AppButtonsElement_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppButtonsElement-style */ "./source/features/app-switcher/AppButtonsElement-style.less");
/* harmony import */ var _AppButtonsElement_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AppButtonsElement_style__WEBPACK_IMPORTED_MODULE_1__);

// import { User, AuthenticationStore } from "features/authentication";

var AppButtonsElement = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AppButtonsElement, _super);
    function AppButtonsElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._selected = function () { return _this.getAttribute("selected"); };
        _this.view = function () { return "\n        " + _this.items.map(function (item) { return "\n            <button type=button name=\"" + item.name + "\"" + (item.name === _this._selected() ? " selected" : "") + ">\n                <div class=count></div>\n                " + _this.resolveIcon(item.namedIcon) + "\n                " + item.title + "\n            </button>"; }).join("") + "\n\n        \n    "; };
        return _this;
        // <div name=version title="Linkstacks build ${SettingsStore.instance.version.buildDate}">
        //         ${SettingsStore.instance.version.number()}
        //     </div>
    }
    Object.defineProperty(AppButtonsElement, "observedAttributes", {
        // private user: User;
        get: function () { return ["selected"]; },
        enumerable: true,
        configurable: true
    });
    AppButtonsElement.prototype.attributeChangedCallback = function (attrName, oldVal, newVal) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (attrName === "selected") {
                    this.showSelected(newVal);
                }
                return [2 /*return*/];
            });
        });
    };
    AppButtonsElement.prototype.resolveIcon = function (name) {
        switch (name) {
            case "discover":
                return __webpack_require__(/*! !raw-loader!image/compass.svg */ "./node_modules/raw-loader/index.js!./source/images/compass.svg");
            case "orders":
                return __webpack_require__(/*! !raw-loader!image/history.svg */ "./node_modules/raw-loader/index.js!./source/images/history.svg");
            case "vouchers":
                return __webpack_require__(/*! !raw-loader!image/vouchers.svg */ "./node_modules/raw-loader/index.js!./source/images/vouchers.svg");
            case "me":
                return __webpack_require__(/*! !raw-loader!image/me.svg */ "./node_modules/raw-loader/index.js!./source/images/me.svg");
        }
        return "no icon";
    };
    AppButtonsElement.prototype.showSelected = function (name) {
        var toBeSelected = this.querySelector("[name=" + name + "]");
        if (toBeSelected) {
            var toBeCleared = this.querySelector("[selected]");
            if (toBeCleared && toBeCleared !== toBeSelected)
                toBeCleared.removeAttribute("selected");
            toBeSelected.setAttribute("selected", "");
        }
    };
    AppButtonsElement.prototype.connectedCallback = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var element;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                element = this.querySelector("[type='application/json+tab-items']");
                this.items = JSON.parse(element.innerHTML);
                this.innerHTML = this.view();
                this.addEventListener("click", function (event) {
                    var button = event.target.closest("button");
                    if (!button)
                        return;
                    // search hack
                    if (button.name !== "search")
                        _this.showSelected(button.name);
                    _this.dispatchEvent(new CustomEvent("change-app", { detail: button.name }));
                });
                this.showSelected(this._selected());
                return [2 /*return*/];
            });
        });
    };
    return AppButtonsElement;
}(HTMLElement));
var AppButtonsSide = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AppButtonsSide, _super);
    function AppButtonsSide() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AppButtonsSide;
}(AppButtonsElement));
var AppButtonsBottom = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AppButtonsBottom, _super);
    function AppButtonsBottom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AppButtonsBottom;
}(AppButtonsElement));
customElements.define("app-buttons-side", AppButtonsSide);
customElements.define("app-buttons-bottom", AppButtonsBottom);


/***/ }),

/***/ "./source/features/app-switcher/AppSwitchActivator.ts":
/*!************************************************************!*\
  !*** ./source/features/app-switcher/AppSwitchActivator.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var AppSwitchActivator = /** @class */ (function () {
    function AppSwitchActivator() {
        // on startup ...
    }
    AppSwitchActivator._instance = new AppSwitchActivator();
    return AppSwitchActivator;
}());


/***/ }),

/***/ "./source/features/app-switcher/AppSwitchElement-style.less":
/*!******************************************************************!*\
  !*** ./source/features/app-switcher/AppSwitchElement-style.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./source/features/app-switcher/AppSwitchElement.ts":
/*!**********************************************************!*\
  !*** ./source/features/app-switcher/AppSwitchElement.ts ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AppSwitchElement_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppSwitchElement-style */ "./source/features/app-switcher/AppSwitchElement-style.less");
/* harmony import */ var _AppSwitchElement_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AppSwitchElement_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var features_routing_RoutingStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! features/routing/RoutingStore */ "./source/features/routing/RoutingStore.ts");



var AppSwitchElement = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AppSwitchElement, _super);
    function AppSwitchElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.items = [];
        _this.routeChangeHandler = function (event) {
            var item = _this.appByRoute(event.detail);
            if (item)
                _this.showApp(item);
        };
        _this.changeAppHandler = function (event) {
            var item = _this.items.filter(function (i) { return i.name === event.detail; })[0];
            if (!item)
                return;
            features_routing_RoutingStore__WEBPACK_IMPORTED_MODULE_2__["RoutingStore"].instance.publish(item.defaultPath);
        };
        return _this;
    }
    AppSwitchElement.prototype.connectedCallback = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var defaultItem, match;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.items = [].slice.call(this.querySelectorAll("template")).map(function (template) { return ({
                    name: template.getAttribute("name"),
                    title: template.getAttribute("title"),
                    template: template,
                    isDefault: template.hasAttribute("default"),
                    pathPatterns: template.getAttribute("path-patterns").split(","),
                    defaultPath: template.getAttribute("default-path"),
                    namedIcon: template.getAttribute("named-icon"),
                    hotkey: template.hasAttribute("hot-key") ? JSON.parse(template.getAttribute("hot-key")) : undefined
                }); });
                defaultItem = this.items.filter(function (i) { return i.isDefault; })[0];
                this.insertAdjacentElement("afterbegin", this.sideButtons = this.createAppBar("app-buttons-side"));
                this.contentArea = document.querySelector("app-content");
                if (!this.contentArea) {
                    this.contentArea = document.createElement("app-content");
                    this.insertAdjacentElement("beforeend", this.contentArea);
                }
                else {
                    defaultItem.element = this.contentArea.firstElementChild;
                }
                this.insertAdjacentElement("beforeend", this.bottomButtons = this.createAppBar("app-buttons-bottom"));
                match = this.appByRoute(features_routing_RoutingStore__WEBPACK_IMPORTED_MODULE_2__["RoutingStore"].instance.current);
                // so we server-render defaultItem, hence less work    
                if (match && match !== defaultItem) {
                    this.showApp(match);
                }
                else {
                    this.showSelected(match);
                    this.currentApp = match;
                }
                this.setAttribute("rendered", "");
                features_routing_RoutingStore__WEBPACK_IMPORTED_MODULE_2__["RoutingStore"].instance.onChange(this.routeChangeHandler);
                return [2 /*return*/];
            });
        });
    };
    AppSwitchElement.prototype.appByRoute = function (route) {
        return this.items.filter(function (m) { return m.pathPatterns.filter(function (f) { return features_routing_RoutingStore__WEBPACK_IMPORTED_MODULE_2__["RoutingStore"].isMatch(route, f); }).length > 0; })[0];
    };
    AppSwitchElement.prototype.showApp = function (item, updateRoute) {
        if (updateRoute === void 0) { updateRoute = false; }
        // IE must clone every time!
        if (!item.template.content) {
            item.element = item.template.firstElementChild.cloneNode(true); // IE 11
        }
        else {
            if (!item.element)
                item.element = item.template.content.firstElementChild;
        }
        if (item === this.currentApp)
            return;
        this.currentApp = item;
        // this.contentArea.innerHTML = "";
        // this.contentArea.appendChild(item.element);
        this.showSelected(item);
        if (updateRoute) {
            features_routing_RoutingStore__WEBPACK_IMPORTED_MODULE_2__["RoutingStore"].instance.publish(item.defaultPath);
        }
    };
    AppSwitchElement.prototype.showSelected = function (item) {
        if (!item) {
            document.body.removeAttribute("show-side-menu");
            return;
        }
        this.sideButtons.setAttribute("selected", item.name);
        this.bottomButtons.setAttribute("selected", item.name);
        setTimeout(function () {
            window.dispatchEvent(new CustomEvent("loaded"));
        }, 0);
    };
    AppSwitchElement.prototype.createAppBar = function (tagName) {
        var element = document.createElement(tagName);
        element.addEventListener("change-app", this.changeAppHandler);
        var itemsScript = document.createElement("script");
        itemsScript.setAttribute("type", "application/json+tab-items");
        itemsScript.innerHTML = JSON.stringify(this.items);
        element.appendChild(itemsScript);
        return element;
    };
    AppSwitchElement.ClassName = "AppSwitchElement";
    return AppSwitchElement;
}(HTMLElement));
customElements.define("app-switch", AppSwitchElement);


/***/ }),

/***/ "./source/features/app-switcher/index.ts":
/*!***********************************************!*\
  !*** ./source/features/app-switcher/index.ts ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppSwitchElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppSwitchElement */ "./source/features/app-switcher/AppSwitchElement.ts");
/* harmony import */ var _AppButtonsElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppButtonsElement */ "./source/features/app-switcher/AppButtonsElement.ts");
/* harmony import */ var _AppSwitchActivator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppSwitchActivator */ "./source/features/app-switcher/AppSwitchActivator.ts");
/* harmony import */ var _AppSwitchActivator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AppSwitchActivator__WEBPACK_IMPORTED_MODULE_2__);





/***/ }),

/***/ "./source/features/channel-editor/ChannelEditorElement.ts":
/*!****************************************************************!*\
  !*** ./source/features/channel-editor/ChannelEditorElement.ts ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ChannelStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChannelStore */ "./source/features/channel-editor/ChannelStore.ts");
/* harmony import */ var features_routing_RoutingStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! features/routing/RoutingStore */ "./source/features/routing/RoutingStore.ts");



var ChannelEditorElement = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ChannelEditorElement, _super);
    function ChannelEditorElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clickHandler = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var channel, newChannel;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        channel = {
                            name: this.querySelector("[name=name]").value,
                            isPublic: this.querySelector("[name=name]").checked,
                            allowedUsers: this.querySelector("[name=allowed-users]").value.split("\n"),
                        };
                        return [4 /*yield*/, _ChannelStore__WEBPACK_IMPORTED_MODULE_1__["ChannelStore"].instance.create(channel)];
                    case 1:
                        newChannel = _a.sent();
                        features_routing_RoutingStore__WEBPACK_IMPORTED_MODULE_2__["RoutingStore"].instance.publish("/channel/" + newChannel.id);
                        return [2 /*return*/];
                }
            });
        }); };
        _this.view = function () { return "\n        <label>\n            Name\n            <input type=text name=name>\n        </label>\n\n        <label>\n            Public\n            <input type=checkbox name=isPublic>\n        </label>\n        <label>\n            Allowed member-ids (one per line)\n            <textarea name=allowed-users></textarea>\n        </label>\n\n        <button>Go</button>\n    "; };
        return _this;
    }
    ChannelEditorElement.prototype.connectedCallback = function () {
        this.innerHTML = this.view();
        this.button = this.querySelector("button");
        this.button.addEventListener("click", this.clickHandler);
    };
    ChannelEditorElement.prototype.disconnectedCallback = function () {
        this.button.removeEventListener("click", this.clickHandler);
    };
    return ChannelEditorElement;
}(HTMLElement));
customElements.define("channel-editor", ChannelEditorElement);


/***/ }),

/***/ "./source/features/channel-editor/ChannelStore.ts":
/*!********************************************************!*\
  !*** ./source/features/channel-editor/ChannelStore.ts ***!
  \********************************************************/
/*! exports provided: ChannelStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelStore", function() { return ChannelStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lib_HTTP__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/HTTP */ "./source/library/HTTP.ts");
/* harmony import */ var lib_UrlProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/UrlProvider */ "./source/library/UrlProvider.ts");



var ChannelStore = /** @class */ (function () {
    function ChannelStore() {
    }
    Object.defineProperty(ChannelStore, "instance", {
        get: function () { return ChannelStore._instance; },
        enumerable: true,
        configurable: true
    });
    ChannelStore.prototype.create = function (sentence) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, _a, _b, newChannel;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = fetch;
                        _b = [lib_UrlProvider__WEBPACK_IMPORTED_MODULE_2__["UrlProvider"].APIRoot + "/api/channel"];
                        return [4 /*yield*/, lib_HTTP__WEBPACK_IMPORTED_MODULE_1__["RequestBuilder"].post.authenticated()];
                    case 1: return [4 /*yield*/, _a.apply(void 0, _b.concat([(_c.sent()).setJSON(sentence)]))];
                    case 2:
                        response = _c.sent();
                        newChannel = response.json();
                        return [2 /*return*/, newChannel];
                }
            });
        });
    };
    ChannelStore._instance = new ChannelStore();
    return ChannelStore;
}());



/***/ }),

/***/ "./source/features/channel-editor/index.ts":
/*!*************************************************!*\
  !*** ./source/features/channel-editor/index.ts ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChannelEditorElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChannelEditorElement */ "./source/features/channel-editor/ChannelEditorElement.ts");



/***/ }),

/***/ "./source/features/chat-box/ChatBoxElement-module.less":
/*!*************************************************************!*\
  !*** ./source/features/chat-box/ChatBoxElement-module.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"chat-box":"ChatBoxElement-module-chat-box-3RY","chatBox":"ChatBoxElement-module-chat-box-3RY"};

/***/ }),

/***/ "./source/features/chat-box/ChatBoxElement.ts":
/*!****************************************************!*\
  !*** ./source/features/chat-box/ChatBoxElement.ts ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ChatBoxElement_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatBoxElement-module.less */ "./source/features/chat-box/ChatBoxElement-module.less");
/* harmony import */ var _ChatBoxElement_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ChatBoxElement_module_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var features_chat_viewer_ChatStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! features/chat-viewer/ChatStore */ "./source/features/chat-viewer/ChatStore.ts");



var ChatBoxElement = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ChatBoxElement, _super);
    function ChatBoxElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.channelId = function () { return _this.getAttribute("channel-id"); };
        _this.keyHandler = function (event) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var sentence;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(event.key === "Enter")) return [3 /*break*/, 2];
                        sentence = {
                            text: this.inputBox.value
                        };
                        this.inputBox.value = "";
                        return [4 /*yield*/, features_chat_viewer_ChatStore__WEBPACK_IMPORTED_MODULE_2__["ChatStore"].instance.say(this.channelId(), sentence)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        _this.view = function () { return "\n        <input type=text name=message placeholder=\"Type text here ...\" />\n    "; };
        return _this;
    }
    ChatBoxElement.prototype.connectedCallback = function () {
        this.className += " " + _ChatBoxElement_module_less__WEBPACK_IMPORTED_MODULE_1__["chatBox"];
        this.innerHTML = this.view();
        this.inputBox = this.querySelector("input");
        this.inputBox.addEventListener("keypress", this.keyHandler);
    };
    return ChatBoxElement;
}(HTMLElement));
customElements.define("chat-box", ChatBoxElement);


/***/ }),

/***/ "./source/features/chat-box/index.ts":
/*!*******************************************!*\
  !*** ./source/features/chat-box/index.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatBoxElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatBoxElement */ "./source/features/chat-box/ChatBoxElement.ts");



/***/ }),

/***/ "./source/features/chat-viewer/ChatStore.ts":
/*!**************************************************!*\
  !*** ./source/features/chat-viewer/ChatStore.ts ***!
  \**************************************************/
/*! exports provided: ChatStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatStore", function() { return ChatStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ungap_event_target__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ungap/event-target */ "./node_modules/@ungap/event-target/esm/index.js");
/* harmony import */ var lib_HTTP__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/HTTP */ "./source/library/HTTP.ts");
/* harmony import */ var lib_UrlProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/UrlProvider */ "./source/library/UrlProvider.ts");
/* harmony import */ var features_cityline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! features/cityline */ "./source/features/cityline/index.ts");





var ChatStore = /** @class */ (function () {
    function ChatStore() {
        var _this = this;
        this._sentences = {};
        this.eventTarget = new _ungap_event_target__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.sentenceHandler = function (event) {
            var sentencesPayload = {};
            event.detail.forEach(function (sentence) {
                if (!_this._sentences[sentence.channelId])
                    _this._sentences[sentence.channelId] = [];
                _this._sentences[sentence.channelId].push(sentence);
                if (!sentencesPayload[sentence.channelId])
                    sentencesPayload[sentence.channelId] = [];
                sentencesPayload[sentence.channelId].push(sentence);
            });
            Object.keys(sentencesPayload).forEach(function (key) {
                _this.eventTarget.dispatchEvent(new CustomEvent("message-" + key, { detail: sentencesPayload[key] }));
            });
            //this.emit("chat-store-message", t => new CustomEvent(t, { detail: event.detail }));
        };
        features_cityline__WEBPACK_IMPORTED_MODULE_4__["cityline"].addEventListener("sentences", this.sentenceHandler);
    }
    Object.defineProperty(ChatStore, "instance", {
        get: function () { return ChatStore._chatStore; },
        enumerable: true,
        configurable: true
    });
    ChatStore.prototype.getMessages = function (channelId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, features_cityline__WEBPACK_IMPORTED_MODULE_4__["cityline"].getFrame("sentences")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this._sentences[channelId] || []];
                }
            });
        });
    };
    // private emit<K extends Extract<keyof EventMap, string>>(type: K, ev: (type: K) => EventMap[K]) {
    //     return this.eventTarget.dispatchEvent(ev(type));
    // }
    ChatStore.prototype.addEventListener = function (type, listener, options) {
        return this.eventTarget.addEventListener(type, listener, options);
    };
    ChatStore.prototype.removeEventListener = function (type, listener, options) {
        this.eventTarget.removeEventListener(type, listener, options);
    };
    ChatStore.prototype.say = function (channelId, sentence) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = fetch;
                        _b = [lib_UrlProvider__WEBPACK_IMPORTED_MODULE_3__["UrlProvider"].APIRoot + "/api/chat/" + channelId];
                        return [4 /*yield*/, lib_HTTP__WEBPACK_IMPORTED_MODULE_2__["RequestBuilder"].post.authenticated()];
                    case 1: return [4 /*yield*/, _a.apply(void 0, _b.concat([(_c.sent()).setJSON(sentence)]))];
                    case 2:
                        response = _c.sent();
                        return [2 /*return*/, response.ok];
                }
            });
        });
    };
    ChatStore._chatStore = new ChatStore();
    return ChatStore;
}());



/***/ }),

/***/ "./source/features/chat-viewer/ChatViewerActivator.ts":
/*!************************************************************!*\
  !*** ./source/features/chat-viewer/ChatViewerActivator.ts ***!
  \************************************************************/
/*! exports provided: ChatViewerActivator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatViewerActivator", function() { return ChatViewerActivator; });
/* harmony import */ var features_routing_RoutingStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! features/routing/RoutingStore */ "./source/features/routing/RoutingStore.ts");

var ChatViewerActivator = /** @class */ (function () {
    function ChatViewerActivator() {
        this.routeChangeHandler = function (event) {
            if (features_routing_RoutingStore__WEBPACK_IMPORTED_MODULE_0__["RoutingStore"].isMatch(event.detail, "/channel/*")) {
                var target = document.querySelector("content-target");
                target.innerHTML = "";
                var chatViever = document.createElement("chat-viewer");
                chatViever.setAttribute("channel-id", event.detail.path[1]);
                target.append(chatViever);
            }
        };
        features_routing_RoutingStore__WEBPACK_IMPORTED_MODULE_0__["RoutingStore"].instance.onChange(this.routeChangeHandler);
    }
    ChatViewerActivator._instance = new ChatViewerActivator();
    return ChatViewerActivator;
}());



/***/ }),

/***/ "./source/features/chat-viewer/ChatViewerElement-module.less":
/*!*******************************************************************!*\
  !*** ./source/features/chat-viewer/ChatViewerElement-module.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"chat-viewer":"ChatViewerElement-module-chat-viewer-3h3","chatViewer":"ChatViewerElement-module-chat-viewer-3h3","sentence":"ChatViewerElement-module-sentence-T0G"};

/***/ }),

/***/ "./source/features/chat-viewer/ChatViewerElement.ts":
/*!**********************************************************!*\
  !*** ./source/features/chat-viewer/ChatViewerElement.ts ***!
  \**********************************************************/
/*! exports provided: ChatViewerElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatViewerElement", function() { return ChatViewerElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ChatViewerElement_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatViewerElement-module.less */ "./source/features/chat-viewer/ChatViewerElement-module.less");
/* harmony import */ var _ChatViewerElement_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ChatViewerElement_module_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChatStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatStore */ "./source/features/chat-viewer/ChatStore.ts");
/* harmony import */ var features_top_menu_TopMenuStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! features/top-menu/TopMenuStore */ "./source/features/top-menu/TopMenuStore.ts");
/* harmony import */ var features_user_account_UserStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! features/user-account/UserStore */ "./source/features/user-account/UserStore.ts");





var ChatViewerElement = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ChatViewerElement, _super);
    function ChatViewerElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.channelId = function () { return _this.getAttribute("channel-id"); };
        _this.createChannelHandler = function () {
            _this.replaceWith(document.createElement("channel-editor"));
        };
        _this.sentenceView = function (sentence) { return "\n        <div class=\"" + _ChatViewerElement_module_less__WEBPACK_IMPORTED_MODULE_1__["sentence"] + "\" " + (_this.isSelf(sentence.userId) ? "self" : "") + " user-id=\"" + sentence.userId + "\">\n            <local-date datetime=\"" + sentence.created + "\" use-words></local-date>\n            <div name=user-id>" + (sentence.username || sentence.userId) + "</div>\n            <div name=text><div>" + sentence.text + "</div></div>\n        </div>\n    "; };
        _this.view = function () { return "\n        <div name=messages></div>\n        <chat-box channel-id=" + _this.channelId() + "></chat-box>\n    "; };
        _this.messageHandler = function (event) {
            var sentences = event.detail;
            _this.render(sentences);
        };
        return _this;
    }
    ChatViewerElement.prototype.connectedCallback = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.className += " " + _ChatViewerElement_module_less__WEBPACK_IMPORTED_MODULE_1__["chatViewer"];
                        return [4 /*yield*/, features_user_account_UserStore__WEBPACK_IMPORTED_MODULE_4__["UserStore"].instance.currentUser()];
                    case 1:
                        user = _b.sent();
                        this.isSelf = function (userId) { return userId === user.id; };
                        this.innerHTML = this.view();
                        this.messageView = this.querySelector("[name=messages]");
                        _ChatStore__WEBPACK_IMPORTED_MODULE_2__["ChatStore"].instance.addEventListener("message-" + this.channelId(), this.messageHandler);
                        features_top_menu_TopMenuStore__WEBPACK_IMPORTED_MODULE_3__["TopMenuStore"].instance.setGroup("right", [{ title: "Create channel", name: "create-channel", side: "right", icon: __webpack_require__(/*! !raw-loader!image/create.svg */ "./node_modules/raw-loader/index.js!./source/images/create.svg"), handler: this.createChannelHandler }]);
                        _a = this.render;
                        return [4 /*yield*/, _ChatStore__WEBPACK_IMPORTED_MODULE_2__["ChatStore"].instance.getMessages(this.channelId())];
                    case 2:
                        _a.apply(this, [_b.sent()]);
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatViewerElement.prototype.disconnectedCallback = function () {
        _ChatStore__WEBPACK_IMPORTED_MODULE_2__["ChatStore"].instance.removeEventListener("message-" + this.channelId(), this.messageHandler);
    };
    ChatViewerElement.prototype.render = function (sentences) {
        var _this = this;
        sentences.forEach(function (m) {
            if (m.channelId === _this.channelId())
                _this.messageView.insertAdjacentHTML("beforeend", _this.sentenceView(m));
        });
        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                _this.messageView.scrollTo(0, _this.messageView.scrollHeight);
            });
        });
    };
    return ChatViewerElement;
}(HTMLElement));

customElements.define("chat-viewer", ChatViewerElement);


/***/ }),

/***/ "./source/features/chat-viewer/index.ts":
/*!**********************************************!*\
  !*** ./source/features/chat-viewer/index.ts ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatViewerElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatViewerElement */ "./source/features/chat-viewer/ChatViewerElement.ts");
/* harmony import */ var _ChatViewerActivator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatViewerActivator */ "./source/features/chat-viewer/ChatViewerActivator.ts");




/***/ }),

/***/ "./source/features/cityline/index.ts":
/*!*******************************************!*\
  !*** ./source/features/cityline/index.ts ***!
  \*******************************************/
/*! exports provided: CitylineSingleton, cityline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitylineSingleton", function() { return CitylineSingleton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cityline", function() { return cityline; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var cityline_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cityline-client */ "./node_modules/cityline-client/dist/CitylineClient.js");
/* harmony import */ var cityline_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cityline_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_HTTP__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/HTTP */ "./source/library/HTTP.ts");
var _this = undefined;



var CitylineSingleton = /** @class */ (function () {
    function CitylineSingleton() {
    }
    Object.defineProperty(CitylineSingleton, "client", {
        get: function () {
            return CitylineSingleton._client;
        },
        enumerable: true,
        configurable: true
    });
    CitylineSingleton._client = new cityline_client__WEBPACK_IMPORTED_MODULE_1__["CitylineClient"]("https://localhost:5001/api/cityline", function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, lib_HTTP__WEBPACK_IMPORTED_MODULE_2__["RequestBuilder"].post.authenticated()];
            case 1: return [2 /*return*/, _a.sent()];
        }
    }); }); });
    return CitylineSingleton;
}());

var cityline = CitylineSingleton.client;



/***/ }),

/***/ "./source/features/content-target/ContentTarget-module.less":
/*!******************************************************************!*\
  !*** ./source/features/content-target/ContentTarget-module.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"content-target":"ContentTarget-module-content-target-25D","contentTarget":"ContentTarget-module-content-target-25D"};

/***/ }),

/***/ "./source/features/content-target/ContentTargetElement.ts":
/*!****************************************************************!*\
  !*** ./source/features/content-target/ContentTargetElement.ts ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ContentTarget_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentTarget-module.less */ "./source/features/content-target/ContentTarget-module.less");
/* harmony import */ var _ContentTarget_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ContentTarget_module_less__WEBPACK_IMPORTED_MODULE_1__);


var ContentTargetElement = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContentTargetElement, _super);
    function ContentTargetElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentTargetElement.prototype.connectedCallback = function () {
        this.className += " " + _ContentTarget_module_less__WEBPACK_IMPORTED_MODULE_1__["contentTarget"];
    };
    return ContentTargetElement;
}(HTMLElement));
customElements.define("content-target", ContentTargetElement);


/***/ }),

/***/ "./source/features/content-target/index.ts":
/*!*************************************************!*\
  !*** ./source/features/content-target/index.ts ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContentTargetElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentTargetElement */ "./source/features/content-target/ContentTargetElement.ts");



/***/ }),

/***/ "./source/features/local-date/LocalDateElement.ts":
/*!********************************************************!*\
  !*** ./source/features/local-date/LocalDateElement.ts ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _library_Datetime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../library/Datetime */ "./source/library/Datetime.ts");
/* harmony import */ var _library_Formatting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../library/Formatting */ "./source/library/Formatting.ts");



var LocalDateElement = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LocalDateElement, _super);
    function LocalDateElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.started = false;
        _this.renderAsTextHandler = function () {
            _this.innerText = _this.timeDifference(_this.nowUtc(), _this.utcDate);
        };
        _this.renderAsDateHandler = function () {
            var localDate = _library_Datetime__WEBPACK_IMPORTED_MODULE_1__["DateTime"].UTCToLocal(_this.utcDate);
            _this.innerText = _library_Formatting__WEBPACK_IMPORTED_MODULE_2__["Formatting"].shortDateTime(localDate);
        };
        return _this;
    }
    LocalDateElement.prototype.pad = function (source, wantedLength, symbol) {
        if (source === void 0) { source = ""; }
        if (wantedLength === void 0) { wantedLength = 2; }
        if (symbol === void 0) { symbol = "0"; }
        return source.length >= wantedLength ? source : new Array(wantedLength - source.length + 1).join(symbol) + source;
    };
    LocalDateElement.prototype.connectedCallback = function () {
        var datetime = this.getAttribute("datetime");
        if (datetime) {
            try {
                this.utcDate = new Date(datetime);
            }
            catch (error) {
                console.log("Unable to parse date '" + datetime + "'");
                return;
            }
        }
        if (this.hasAttribute("use-words")) {
            this.renderAsTextHandler();
        }
        else {
            this.renderAsDateHandler();
        }
    };
    LocalDateElement.prototype.nowUtc = function () {
        // const now = new Date();
        // return new Date(now.getTime() + now.getTimezoneOffset() * 60000);
        return new Date();
    };
    LocalDateElement.prototype.timeDifference = function (current, previous) {
        console.log("comparing", current.toISOString(), previous.toISOString());
        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var elapsed = current.getTime() - previous.getTime();
        if (elapsed < msPerMinute) {
            return "lige nu";
        }
        if (elapsed < msPerMinute * 2) {
            return "et minut siden";
        }
        else if (elapsed < msPerHour) {
            return Math.floor(elapsed / msPerMinute) + " minutter siden";
        }
        // Less than 2 hours ago.
        else if (elapsed < msPerHour * 2) {
            return "En time siden";
        }
        else if (elapsed < msPerDay) {
            return Math.floor(elapsed / msPerHour) + " timer siden";
        }
        else if (elapsed < msPerDay * 2) {
            return "i går";
        }
        else if (elapsed < msPerDay * 7) {
            return Math.floor(elapsed / msPerDay) + " dage siden";
        }
        else if (elapsed < msPerDay * 31) {
            var weeks = Math.floor(elapsed / (msPerDay * 7));
            return weeks + " uge" + (weeks > 1 ? "r" : "") + " siden";
        }
        // fall back to date
        this.renderAsDateHandler();
    };
    return LocalDateElement;
}(HTMLElement));
customElements.define("local-date", LocalDateElement);


/***/ }),

/***/ "./source/features/local-date/index.ts":
/*!*********************************************!*\
  !*** ./source/features/local-date/index.ts ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LocalDateElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocalDateElement */ "./source/features/local-date/LocalDateElement.ts");



/***/ }),

/***/ "./source/features/prompt-dialog/PromptDialogElement.ts":
/*!**************************************************************!*\
  !*** ./source/features/prompt-dialog/PromptDialogElement.ts ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _styles_dialog_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/dialog-module.less */ "./source/styles/dialog-module.less");
/* harmony import */ var _styles_dialog_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_dialog_module_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_forms_module_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/forms-module.less */ "./source/styles/forms-module.less");
/* harmony import */ var _styles_forms_module_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_forms_module_less__WEBPACK_IMPORTED_MODULE_2__);



var PromptDialogElement = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PromptDialogElement, _super);
    function PromptDialogElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clickHandler = function (event) {
            if (!(event.target instanceof HTMLElement))
                return;
            var target = event.target;
            var button = target.closest("button");
            if (!button)
                return;
            var optionId = button.getAttribute("option-id");
            if (!optionId)
                return;
            event.preventDefault();
            event.stopPropagation();
            _this.dispatchEvent(new CustomEvent("decided", { bubbles: true, detail: optionId }));
            _this.remove();
        };
        _this.view = function () { return "\n        <div class=\"" + _styles_dialog_module_less__WEBPACK_IMPORTED_MODULE_1__["window"] + "\">\n            <div class=\"" + _styles_dialog_module_less__WEBPACK_IMPORTED_MODULE_1__["text"] + "\">" + _this.getAttribute("text") + "</div>\n            <div class=\"" + _styles_dialog_module_less__WEBPACK_IMPORTED_MODULE_1__["buttons"] + "\">\n                " + _this.options.map(function (option) { return "<button option-id=\"" + option.id + "\" class=\"" + (option.intent === "primary" ? _styles_forms_module_less__WEBPACK_IMPORTED_MODULE_2__["primary"] : _styles_forms_module_less__WEBPACK_IMPORTED_MODULE_2__["secondary"]) + "\">" + option.title + "</button>"; }).join("") + "\n            </div>\n        </div>\n    \n    "; };
        return _this;
        // ${this.secondaryButtons().map(title => `<button class="${formsStyle.secondary}">${title}</button>`).join("")}
        //             ${this.primaryButtons().map(title => `<button class="${formsStyle.primary}">${title}</button>`).join("")}
    }
    PromptDialogElement.prototype.connectedCallback = function () {
        this.className += _styles_dialog_module_less__WEBPACK_IMPORTED_MODULE_1__["frame"];
        this.options = JSON.parse(this.querySelector("script").innerText);
        this.innerHTML = this.view();
        this.addEventListener("click", this.clickHandler);
    };
    return PromptDialogElement;
}(HTMLElement));
customElements.define("prompt-dialog", PromptDialogElement);


/***/ }),

/***/ "./source/features/prompt-dialog/index.ts":
/*!************************************************!*\
  !*** ./source/features/prompt-dialog/index.ts ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PromptDialogElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PromptDialogElement */ "./source/features/prompt-dialog/PromptDialogElement.ts");



/***/ }),

/***/ "./source/features/routing/RoutingActivator.ts":
/*!*****************************************************!*\
  !*** ./source/features/routing/RoutingActivator.ts ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _RoutingStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoutingStore */ "./source/features/routing/RoutingStore.ts");


var RoutingActivator = /** @class */ (function () {
    function RoutingActivator() {
        var _this = this;
        this.clickHandler = function (event) {
            try {
                var target = (event.target || event.currentTarget);
                if (!target)
                    return;
                var route = target.closest("[route]");
                if (route) {
                    var link = void 0;
                    if (route.hasAttribute("href"))
                        link = route;
                    else
                        link = route.querySelector("a[href]");
                    var url = link.getAttribute("href");
                    _RoutingStore__WEBPACK_IMPORTED_MODULE_1__["RoutingStore"].instance.publish(url);
                    event.preventDefault();
                }
            }
            catch (e) {
                console.log(e);
            }
        };
        setTimeout(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                document.addEventListener("click", this.clickHandler);
                return [2 /*return*/];
            });
        }); });
    }
    RoutingActivator._instance = new RoutingActivator();
    return RoutingActivator;
}());


/***/ }),

/***/ "./source/features/routing/RoutingStore.ts":
/*!*************************************************!*\
  !*** ./source/features/routing/RoutingStore.ts ***!
  \*************************************************/
/*! exports provided: RoutingStore, RouteChangeOrigin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingStore", function() { return RoutingStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteChangeOrigin", function() { return RouteChangeOrigin; });
/* harmony import */ var _ungap_event_target__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ungap/event-target */ "./node_modules/@ungap/event-target/esm/index.js");

/*
    Handles routing, click on links etc.
*/
var RoutingStore = /** @class */ (function () {
    function RoutingStore() {
        this.history = [];
        this.isFileProtocol = true; //window.location && window.location.protocol === "file:" || window.location.hostname === "localhost";
        this.eventTarget = new _ungap_event_target__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    Object.defineProperty(RoutingStore, "instance", {
        get: function () { return RoutingStore._instance; },
        enumerable: true,
        configurable: true
    });
    RoutingStore.prototype.emitChange = function (route, requester) {
        if (requester === void 0) { requester = "unknown"; }
        this.eventTarget.dispatchEvent(new CustomEvent("route-change", { detail: route }));
    };
    RoutingStore.prototype.onChange = function (callback) {
        this.eventTarget.addEventListener("route-change", callback);
    };
    RoutingStore.prototype.offChange = function (callback) {
        this.eventTarget.removeEventListener("route-change", callback);
    };
    Object.defineProperty(RoutingStore.prototype, "current", {
        get: function () {
            return this.currentRoute || (this.currentRoute = RoutingStore.parse(location.href));
        },
        enumerable: true,
        configurable: true
    });
    RoutingStore.prototype.set = function (url) {
        this.currentRoute = RoutingStore.parse(url);
        if (!this.isFileProtocol)
            window.history.pushState(url, url, url);
        else {
            this.history.push(this.currentRoute);
            window.location.hash = "";
        }
    };
    RoutingStore.prototype.publish = function (url) {
        this.currentRoute = RoutingStore.parse(url);
        if (!this.isFileProtocol)
            window.history.pushState(url, url, url);
        else {
            this.history.push(this.currentRoute);
            window.location.hash = "";
        }
        this.emitChange(this.currentRoute);
        console.log("Route", this.currentRoute.path.join("/"));
    };
    RoutingStore.prototype.goBack = function () {
        if (this.history.length > 0)
            this.history.pop(); // pop current
        if (this.history.length > 0) {
            var backUrl = this.history[this.history.length - 1]; // previous
            this.currentRoute = backUrl;
            this.emitChange(this.currentRoute);
            return true;
        }
        else {
            return false;
        }
    };
    RoutingStore.parse = function (url) {
        var parsed = new URL(url, "https://not-used");
        if (!parsed)
            console.log("Could not parse", url);
        if (parsed.pathname[0] === "/")
            parsed.pathname = parsed.pathname.substring(1);
        var path = parsed.pathname.split("/").filter(function (i) { return i !== ""; });
        var parameters = {};
        parsed.search.substring(1).split("&").forEach(function (parameter) {
            if (!parameter)
                return;
            var parts = parameter.split("=");
            parameters[parts[0]] = parts.length > 1 ? decodeURIComponent(parts[1].replace(/\+/g, "%20")) : "";
        });
        var result = {
            path: path,
            parameters: parameters,
            hash: parsed.hash
        };
        return result;
    };
    RoutingStore.prototype.matches = function (url) {
        return RoutingStore.isMatch(this.currentRoute, url);
    };
    RoutingStore.isMatch = function (route, url) {
        var parsed = this.parse(url);
        var pos = 0;
        for (var _i = 0, _a = parsed.path; _i < _a.length; _i++) {
            var part = _a[_i];
            var routePart = route.path[pos];
            pos++;
            if (part === "@*" && routePart && routePart[0] === "@")
                continue;
            if (part === "-" && !routePart)
                continue;
            if (part === "*" && routePart)
                continue;
            if (!routePart || part !== routePart)
                return false;
        }
        return true;
    };
    RoutingStore._instance = new RoutingStore();
    return RoutingStore;
}());

var RouteChangeOrigin;
(function (RouteChangeOrigin) {
    RouteChangeOrigin[RouteChangeOrigin["Requested"] = 0] = "Requested";
    RouteChangeOrigin[RouteChangeOrigin["PageLoad"] = 1] = "PageLoad";
    RouteChangeOrigin[RouteChangeOrigin["Popstate"] = 2] = "Popstate";
    RouteChangeOrigin[RouteChangeOrigin["Pushstate"] = 3] = "Pushstate";
})(RouteChangeOrigin || (RouteChangeOrigin = {}));


/***/ }),

/***/ "./source/features/routing/index.ts":
/*!******************************************!*\
  !*** ./source/features/routing/index.ts ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoutingActivator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoutingActivator */ "./source/features/routing/RoutingActivator.ts");



/***/ }),

/***/ "./source/features/side-menu/BaseSideMenuElement-style.less":
/*!******************************************************************!*\
  !*** ./source/features/side-menu/BaseSideMenuElement-style.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./source/features/side-menu/BaseSideMenuElement.ts":
/*!**********************************************************!*\
  !*** ./source/features/side-menu/BaseSideMenuElement.ts ***!
  \**********************************************************/
/*! exports provided: BaseSideMenuElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseSideMenuElement", function() { return BaseSideMenuElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lib_DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/DOM */ "./source/library/DOM.ts");
/* harmony import */ var lib_Formatting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/Formatting */ "./source/library/Formatting.ts");
/* harmony import */ var _BaseSideMenuElement_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseSideMenuElement-style */ "./source/features/side-menu/BaseSideMenuElement-style.less");
/* harmony import */ var _BaseSideMenuElement_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_BaseSideMenuElement_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var features_routing_RoutingStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! features/routing/RoutingStore */ "./source/features/routing/RoutingStore.ts");
/* harmony import */ var features_top_menu_TopMenuStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! features/top-menu/TopMenuStore */ "./source/features/top-menu/TopMenuStore.ts");






var BaseSideMenuElement = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BaseSideMenuElement, _super);
    function BaseSideMenuElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._phoneMediaMatch = window.matchMedia("screen and (max-width: 850px)");
        _this.escape = lib_Formatting__WEBPACK_IMPORTED_MODULE_2__["Formatting"].htmlEscape;
        _this.hideHandler = function () { return document.body.removeAttribute("show-side-menu"); };
        _this.phoneMediaHandler = function (listener) {
            if (listener.matches)
                document.body.removeAttribute("show-side-menu");
            else
                document.body.setAttribute("show-side-menu", "");
        };
        _this.getElement = function (itemId) { return _this.querySelector(".item[id=\"item-" + itemId + "\"]"); };
        _this.refresh = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var selectedEvaluator, _a, _b, draggables, dropTargets;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        selectedEvaluator = function (item) { return item.selected = features_routing_RoutingStore__WEBPACK_IMPORTED_MODULE_4__["RoutingStore"].instance.matches(item.path); };
                        _a = this;
                        _b = this.view;
                        return [4 /*yield*/, this.getMenuCategories(selectedEvaluator)];
                    case 1:
                        _a.innerHTML = _b.apply(this, [_c.sent()]);
                        draggables = [].slice.call(this.querySelectorAll("[draggable]"));
                        draggables.forEach(function (draggable) {
                            draggable.addEventListener("dragstart", function (event) {
                                event.dataTransfer.effectAllowed = "Move";
                                var itemId = draggable.id.substring(5);
                                event.dataTransfer.setData("text", "" + itemId);
                            });
                        });
                        dropTargets = [].slice.call(this.querySelectorAll("[drop-target]"));
                        dropTargets.forEach(function (dropTarget) {
                            var counter = 0;
                            dropTarget.addEventListener("dragenter", function (event) {
                                event.preventDefault();
                                counter++;
                                var item = event.target.closest(".item");
                                var itemId = item.id.substring(5);
                                event.dataTransfer.dropEffect = _this.dragHover(itemId, event.dataTransfer.getData("text"), event.ctrlKey);
                                dropTarget.setAttribute("over", "");
                            });
                            dropTarget.addEventListener("dragleave", function (event) {
                                event.preventDefault();
                                counter--;
                                if (counter <= 0) {
                                    counter = 0;
                                    dropTarget.removeAttribute("over");
                                }
                            });
                            dropTarget.addEventListener("dragover", function (event) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var item, itemId;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    event.preventDefault();
                                    item = event.target.closest(".item");
                                    itemId = item.id.substring(5);
                                    event.dataTransfer.dropEffect = this.dragHover(itemId, event.dataTransfer.getData("text"), event.ctrlKey);
                                    return [2 /*return*/];
                                });
                            }); });
                            dropTarget.addEventListener("drop", function (event) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var item, itemId;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            event.preventDefault();
                                            counter = 0;
                                            dropTarget.removeAttribute("over");
                                            item = event.target.closest(".item");
                                            itemId = item.id.substring(5);
                                            return [4 /*yield*/, this.drop(itemId, event.dataTransfer.getData("text"), event.ctrlKey)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        _this.clickHandler = function (event) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var item, expandable, itemId, parent_1, parentItemId;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        item = event.target.closest(".item");
                        expandable = event.target.closest("[expandable]");
                        if (!expandable) return [3 /*break*/, 1];
                        if (item.hasAttribute("open")) {
                            item.removeAttribute("open");
                            item.removeAttribute("style");
                        }
                        else {
                            this.openExpandable(expandable);
                        }
                        return [3 /*break*/, 7];
                    case 1:
                        if (!item)
                            return [2 /*return*/];
                        itemId = item.id.substring(5);
                        return [4 /*yield*/, this.itemClick(itemId)];
                    case 2:
                        _a.sent();
                        parent_1 = item.parentElement.closest(".item");
                        if (!parent_1) return [3 /*break*/, 4];
                        parentItemId = parent_1.id.substring(5);
                        return [4 /*yield*/, this.rootClick(parentItemId)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.rootClick(itemId)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        if (this._phoneMediaMatch.matches)
                            this.hideHandler();
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        _this.routeChangeHandler = function (event) {
            var route = event.detail;
            var routeItem = _this.querySelector("[href=\"/" + route.path.join("/") + "\"]");
            if (!routeItem)
                return;
            var item = routeItem.closest(".item");
            if (!item)
                return;
            _this.selectElement(item);
        };
        _this.formatCount = function (count) { return count > 99 ? "99+" : count.toString(); };
        _this.itemView = function (item, isChild, allowLazy) {
            if (isChild === void 0) { isChild = false; }
            if (allowLazy === void 0) { allowLazy = true; }
            var routing = _this.escape(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["href=\"", "\" route"], ["href=\"", "\" route"])), item.path);
            return _this.escape(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n        <div id=\"item-", "\" \n             class=item $", " \n             $", "\n             ", " \n             ", " \n             ", "\n             $", ">\n             $", "\n             $", "\n        </div>\n    "], ["\n        <div id=\"item-", "\" \n             class=item $", " \n             $", "\n             ", " \n             ", " \n             ", "\n             $", ">\n             $", "\n             $", "\n        </div>\n    "])), item.id, item.items ? "open-height=\"" + (1 + item.items.length) * 34 + "px\"" : "", item.expandable && item.selected ? "style=\"max-height: " + (1 + item.items.length) * 34 + "px\"" : "", item.draggable ? "draggable=true" : "", item.dropTarget ? "drop-target" : "", item.selected ? (item.expandable ? "open" : "active") : "", item.expandable ? "" : routing, _this.detailsView(item, isChild, (!item.selected && allowLazy)), item.items ? item.items.map(function (c) { return _this.itemView(c, true, !item.selected); }).join("") : "");
        };
        _this.detailsView = function (item, isChild, allowLazy) { return _this.escape(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n        <div class=details>\n            <div class=icon title=\"", "\" ", ">\n                $", "\n                $", "\n            </div>\n            <div class=title title=\"", "\" $", ">\n                ", "\n            </div>\n            <div class=count ", " $", ">\n                $", "\n            </div>\n        </div>\n    "], ["\n        <div class=details>\n            <div class=icon title=\"", "\" ", ">\n                $", "\n                $", "\n            </div>\n            <div class=title title=\"", "\" $", ">\n                ", "\n            </div>\n            <div class=count ", " $", ">\n                $", "\n            </div>\n        </div>\n    "])), item.title, item.expandable ? "expandable" : "", item.svgIcon ? item.svgIcon : "", item.imgIcon ? "<img " + (isChild && allowLazy ? "data-" : "") + "src=\"" + item.imgIcon + "\" />" : "", item.title, item.expandable ? "href=\"" + item.path + "\" route" : "", item.title, item.count && item.count > 0 ? _this.escape(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["title=\"", " items\""], ["title=\"", " items\""])), item.count) : "", item.expandable ? "href=\"" + item.path + "\" route" : "", item.count && item.count > 0 ? _this.formatCount(item.count) : ""); };
        _this.categoryView = function (category) { return _this.escape(templateObject_6 || (templateObject_6 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n        <div>\n            $", "\n            $", "\n        </div>\n    "], ["\n        <div>\n            $", "\n            $", "\n        </div>\n    "])), category.title ? _this.escape(templateObject_5 || (templateObject_5 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["<div class=category>", "</div>"], ["<div class=category>", "</div>"])), category.title) : "", category.items.map(function (c) { return _this.itemView(c); }).join("")); };
        _this.view = function (categories) { return _this.escape(templateObject_7 || (templateObject_7 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n        $", "\n    "], ["\n        $", "\n    "])), categories.map(function (c) { return _this.categoryView(c); }).join("")); };
        return _this;
    }
    BaseSideMenuElement.prototype.dragHover = function (itemId, data, ctrlKey) {
        console.log("dragHover", itemId, data);
        return "none";
    };
    BaseSideMenuElement.prototype.drop = function (itemId, data, ctrlKey) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log("drop", itemId, data);
                return [2 /*return*/];
            });
        });
    };
    BaseSideMenuElement.prototype.ensureOverlay = function () {
        var overlay = document.body.querySelector("[name=body-overlay]");
        if (!overlay) {
            overlay = document.createElement("div");
            overlay.setAttribute("name", "body-overlay");
            document.body.insertAdjacentElement("afterbegin", overlay);
            overlay.addEventListener("click", this.hideHandler);
        }
    };
    BaseSideMenuElement.prototype.ensureOneTimeInit = function () {
        if (BaseSideMenuElement._onetimeInit)
            return;
        BaseSideMenuElement._onetimeInit = true;
        this.ensureOverlay();
        features_top_menu_TopMenuStore__WEBPACK_IMPORTED_MODULE_5__["TopMenuStore"].instance.append("side-menu", {
            name: "side-menu",
            icon: __webpack_require__(/*! !raw-loader!image/menu-20-v1.svg */ "./node_modules/raw-loader/index.js!./source/images/menu-20-v1.svg"),
            title: "Side menu",
            side: "left",
            priority: 0,
            handler: function () { return lib_DOM__WEBPACK_IMPORTED_MODULE_1__["DOM"].toggleAttribute(document.body, "show-side-menu"); }
        });
        this._phoneMediaMatch.addListener(this.phoneMediaHandler);
    };
    BaseSideMenuElement.prototype.connectedCallback = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.classList.add("side-menu");
                        this.ensureOneTimeInit();
                        this.phoneMediaHandler(this._phoneMediaMatch);
                        features_routing_RoutingStore__WEBPACK_IMPORTED_MODULE_4__["RoutingStore"].instance.onChange(this.routeChangeHandler);
                        this.addEventListener("click", this.clickHandler);
                        // if (this.classList.contains("side-menu"))
                        //     return;
                        return [4 /*yield*/, this.refresh()];
                    case 1:
                        // if (this.classList.contains("side-menu"))
                        //     return;
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseSideMenuElement.prototype.disconnectedCallback = function () {
        features_routing_RoutingStore__WEBPACK_IMPORTED_MODULE_4__["RoutingStore"].instance.offChange(this.routeChangeHandler);
        this.removeEventListener("click", this.clickHandler);
    };
    BaseSideMenuElement.prototype.removeItem = function (itemId) {
        var item = this.getElement(itemId);
        if (item)
            item.remove();
    };
    BaseSideMenuElement.prototype.itemClick = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    BaseSideMenuElement.prototype.rootClick = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    BaseSideMenuElement.prototype.selectItem = function (itemId) {
        var element = this.getElement(itemId);
        if (!element)
            return;
        this.selectElement(element);
    };
    BaseSideMenuElement.prototype.selectedElementId = function () {
        var active = this.querySelector(".item[active]");
        return active && active.id;
    };
    BaseSideMenuElement.prototype.selectElementId = function (id) {
        var node = this.querySelector("[id=\"" + id + "\"]");
        if (node)
            this.selectElement(node);
    };
    BaseSideMenuElement.prototype.selectElement = function (item) {
        if (!item.hasAttribute("active")) {
            var previousActive = this.querySelector(".item[active]");
            if (previousActive && previousActive !== item)
                previousActive.removeAttribute("active");
            item.setAttribute("active", "");
        }
        // check if parent is open
        var parent = item.parentElement.closest(".item");
        if (parent && this.contains(parent)) // limit to our element scope
            this.openItem(parent);
    };
    BaseSideMenuElement.prototype.updateItem = function (item) {
        var node = this.querySelector("[id=\"item-" + item.id + "\"]");
        if (node) {
            var oldDetailsElement = node.querySelector(".details");
            node.replaceChild(lib_DOM__WEBPACK_IMPORTED_MODULE_1__["DOM"].parse(this.detailsView(item, false, false)), oldDetailsElement);
        }
    };
    BaseSideMenuElement.prototype.openExpandable = function (expandable) {
        var item = expandable.closest(".item");
        if (item)
            this.openItem(item);
    };
    BaseSideMenuElement.prototype.openItem = function (itemElement) {
        // lazy load child images
        var lazyImages = [].slice.call(itemElement.querySelectorAll("img[data-src]:not([src])"));
        lazyImages.forEach(function (imageElement) {
            imageElement.src = imageElement.getAttribute("data-src");
        });
        var otherOpen = this.querySelector(".item[open]");
        if (otherOpen && otherOpen !== itemElement) {
            otherOpen.removeAttribute("open");
            otherOpen.removeAttribute("style");
        }
        itemElement.setAttribute("open", "");
        itemElement.style.maxHeight = itemElement.getAttribute("open-height");
    };
    BaseSideMenuElement._onetimeInit = false;
    return BaseSideMenuElement;
}(HTMLElement));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;


/***/ }),

/***/ "./source/features/side-menu/ChatSideMenu.ts":
/*!***************************************************!*\
  !*** ./source/features/side-menu/ChatSideMenu.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _BaseSideMenuElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseSideMenuElement */ "./source/features/side-menu/BaseSideMenuElement.ts");
/* harmony import */ var features_cityline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! features/cityline */ "./source/features/cityline/index.ts");



var ChatSideMenuElement = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ChatSideMenuElement, _super);
    function ChatSideMenuElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChatSideMenuElement.prototype.connectedCallback = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.connectedCallback.call(this)];
                    case 1:
                        _a.sent();
                        features_cityline__WEBPACK_IMPORTED_MODULE_2__["cityline"].addEventListener("channels", this.refresh);
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatSideMenuElement.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        features_cityline__WEBPACK_IMPORTED_MODULE_2__["cityline"].removeEventListener("channels", this.refresh);
    };
    ChatSideMenuElement.prototype.getMenuCategories = function (selectedEvaluator) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var channels;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, features_cityline__WEBPACK_IMPORTED_MODULE_2__["cityline"].getFrame("channels")];
                    case 1:
                        channels = _a.sent();
                        return [2 /*return*/, [{
                                    title: "Channels",
                                    items: channels.map(function (channel) { return ({
                                        title: channel.name,
                                        path: "/channel/" + channel.id
                                    }); })
                                }]];
                }
            });
        });
    };
    return ChatSideMenuElement;
}(_BaseSideMenuElement__WEBPACK_IMPORTED_MODULE_1__["BaseSideMenuElement"]));
customElements.define("chat-side-menu", ChatSideMenuElement);


/***/ }),

/***/ "./source/features/side-menu/index.ts":
/*!********************************************!*\
  !*** ./source/features/side-menu/index.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatSideMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatSideMenu */ "./source/features/side-menu/ChatSideMenu.ts");



/***/ }),

/***/ "./source/features/top-menu/TopMenu-module.less":
/*!******************************************************!*\
  !*** ./source/features/top-menu/TopMenu-module.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"top-menu":"TopMenu-module-top-menu-1ND","topMenu":"TopMenu-module-top-menu-1ND"};

/***/ }),

/***/ "./source/features/top-menu/TopMenuElement.ts":
/*!****************************************************!*\
  !*** ./source/features/top-menu/TopMenuElement.ts ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _TopMenu_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopMenu-module.less */ "./source/features/top-menu/TopMenu-module.less");
/* harmony import */ var _TopMenu_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TopMenu_module_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TopMenuStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopMenuStore */ "./source/features/top-menu/TopMenuStore.ts");



var TopMenuElement = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TopMenuElement, _super);
    function TopMenuElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.named = function (name) { return _this.querySelector("[name=" + name + "]"); };
        _this.titleChangeHandler = function (event) {
            _this.centerPart.innerText = event.detail;
        };
        _this.refreshHandler = function () {
            var left = _TopMenuStore__WEBPACK_IMPORTED_MODULE_2__["TopMenuStore"].instance.all().filter(function (m) { return m.side === "left"; });
            _this.leftPart.innerHTML = left.map(function (m) { return _this.buttonView(m); }).join("");
            var right = _TopMenuStore__WEBPACK_IMPORTED_MODULE_2__["TopMenuStore"].instance.all().filter(function (m) { return m.side === "right"; });
            _this.rightPart.innerHTML = right.map(function (m) { return _this.buttonView(m); }).join("");
        };
        _this.clickHandler = function (event) {
            var button = event.target.closest("button");
            if (button)
                _TopMenuStore__WEBPACK_IMPORTED_MODULE_2__["TopMenuStore"].instance.trigger(button.name);
        };
        _this.buttonView = function (item) { return "\n        <button type=button name=\"" + item.name + "\" title=\"" + item.title + "\">" + item.icon + "</button>\n    "; };
        _this.view = function () { return "\n        <div name=left></div>\n        <div name=center>Chat</div>\n        <div name=right></div>\n    "; };
        return _this;
    }
    TopMenuElement.prototype.connectedCallback = function () {
        this.className += " " + _TopMenu_module_less__WEBPACK_IMPORTED_MODULE_1__["topMenu"];
        // inform other components of our height
        document.documentElement.style.setProperty("--top-menu-height", this.offsetHeight + "px");
        this.innerHTML = this.view();
        this.leftPart = this.named("left");
        this.centerPart = this.named("center");
        this.rightPart = this.named("right");
        _TopMenuStore__WEBPACK_IMPORTED_MODULE_2__["TopMenuStore"].instance.onChange(this.refreshHandler);
        _TopMenuStore__WEBPACK_IMPORTED_MODULE_2__["TopMenuStore"].instance.onTitleChange(this.titleChangeHandler);
        this.addEventListener("click", this.clickHandler);
    };
    return TopMenuElement;
}(HTMLElement));
customElements.define("top-menu", TopMenuElement);


/***/ }),

/***/ "./source/features/top-menu/TopMenuStore.ts":
/*!**************************************************!*\
  !*** ./source/features/top-menu/TopMenuStore.ts ***!
  \**************************************************/
/*! exports provided: TopMenuStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMenuStore", function() { return TopMenuStore; });
/* harmony import */ var features_routing_RoutingStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! features/routing/RoutingStore */ "./source/features/routing/RoutingStore.ts");
/* harmony import */ var _ungap_event_target__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ungap/event-target */ "./node_modules/@ungap/event-target/esm/index.js");


var TopMenuStore = /** @class */ (function () {
    function TopMenuStore() {
        this._phoneMediaMatch = window.matchMedia("screen and (max-width: 850px)");
        this.customMenuGroups = {};
        this.eventTarget = new _ungap_event_target__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this._phoneMediaMatch.addListener(this.emitChange);
    }
    Object.defineProperty(TopMenuStore, "instance", {
        get: function () { return TopMenuStore._instance; },
        enumerable: true,
        configurable: true
    });
    TopMenuStore.prototype.emitChange = function () {
        this.eventTarget.dispatchEvent(new CustomEvent("change"));
    };
    TopMenuStore.prototype.onChange = function (callback) {
        this.eventTarget.addEventListener("change", callback);
    };
    TopMenuStore.prototype.offChange = function (callback) {
        this.eventTarget.removeEventListener("change", callback);
    };
    TopMenuStore.prototype.emitTitleChange = function (title) {
        this.eventTarget.dispatchEvent(new CustomEvent("title-change", { detail: title }));
    };
    TopMenuStore.prototype.onTitleChange = function (callback) {
        this.eventTarget.addEventListener("title-change", callback);
    };
    TopMenuStore.prototype.offTitleChange = function (callback) {
        this.eventTarget.removeEventListener("title-change", callback);
    };
    TopMenuStore.prototype.all = function () {
        var allItems = [];
        for (var key in this.customMenuGroups) {
            allItems = allItems.concat(this.customMenuGroups[key]);
        }
        allItems = allItems.filter(function (m) { return m.evaluator === undefined || m.evaluator(); });
        allItems.sort(function (a, b) {
            if (a.priority > b.priority)
                return 1;
            if (a.priority < b.priority)
                return -1;
            return 0;
        });
        return allItems;
    };
    TopMenuStore.prototype.setTitle = function (title) {
        this.title = title;
        this.emitTitleChange(title);
    };
    TopMenuStore.prototype.setGroup = function (name, items) {
        this.customMenuGroups[name] = items;
        this.emitChange();
    };
    TopMenuStore.prototype.append = function (name, item) {
        this.customMenuGroups[name] = this.customMenuGroups[name] || [];
        this.customMenuGroups[name].push(item);
        this.emitChange();
    };
    TopMenuStore.prototype.trigger = function (name) {
        var item = this.all().filter(function (m) { return m.name === name; })[0];
        if (item && item.handler)
            item.handler();
    };
    Object.defineProperty(TopMenuStore, "foundation", {
        get: function () {
            return {
                "back-button": { name: "back", side: "left", icon: __webpack_require__(/*! !raw-loader!image/back-arrow.svg */ "./node_modules/raw-loader/index.js!./source/images/back-arrow.svg"), title: "Back", handler: function () { return features_routing_RoutingStore__WEBPACK_IMPORTED_MODULE_0__["RoutingStore"].instance.goBack(); } }
            };
        },
        enumerable: true,
        configurable: true
    });
    TopMenuStore._instance = new TopMenuStore();
    return TopMenuStore;
}());



/***/ }),

/***/ "./source/features/top-menu/index.ts":
/*!*******************************************!*\
  !*** ./source/features/top-menu/index.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopMenuElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopMenuElement */ "./source/features/top-menu/TopMenuElement.ts");



/***/ }),

/***/ "./source/features/user-account/UserAccountElement-module.less":
/*!*********************************************************************!*\
  !*** ./source/features/user-account/UserAccountElement-module.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"user-account":"UserAccountElement-module-user-account-1ix","userAccount":"UserAccountElement-module-user-account-1ix"};

/***/ }),

/***/ "./source/features/user-account/UserAccountElement.ts":
/*!************************************************************!*\
  !*** ./source/features/user-account/UserAccountElement.ts ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _UserAccountElement_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserAccountElement-module.less */ "./source/features/user-account/UserAccountElement-module.less");
/* harmony import */ var _UserAccountElement_module_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_UserAccountElement_module_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_forms_module_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/forms-module.less */ "./source/styles/forms-module.less");
/* harmony import */ var _styles_forms_module_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_forms_module_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UserStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserStore */ "./source/features/user-account/UserStore.ts");




var UserAccountElement = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserAccountElement, _super);
    function UserAccountElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.goHandler = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var userAccount;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userAccount = {
                            username: this.nameInput.value
                        };
                        return [4 /*yield*/, _UserStore__WEBPACK_IMPORTED_MODULE_3__["UserStore"].instance.change(userAccount)];
                    case 1:
                        _a.sent();
                        this.remove();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.view = function () { return "\n        <div class=\"" + _styles_forms_module_less__WEBPACK_IMPORTED_MODULE_2__["fieldSet"] + "\">\n            <label>Please enter your name</label>\n            <input type=\"text\" name=name />\n        </div>\n\n        <div class=\"" + _styles_forms_module_less__WEBPACK_IMPORTED_MODULE_2__["fieldSet"] + "\">\n            <button class=\"" + _styles_forms_module_less__WEBPACK_IMPORTED_MODULE_2__["primary"] + "\" name=go>GO</button>\n        </div>\n    "; };
        return _this;
    }
    UserAccountElement.prototype.connectedCallback = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var account;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _UserStore__WEBPACK_IMPORTED_MODULE_3__["UserStore"].instance.currentUser()];
                    case 1:
                        account = _a.sent();
                        if (account.username && account.username !== "") {
                            this.remove();
                            return [2 /*return*/];
                        }
                        this.className += " " + _UserAccountElement_module_less__WEBPACK_IMPORTED_MODULE_1__["userAccount"];
                        this.innerHTML = this.view();
                        this.nameInput = this.querySelector("[name=name]");
                        this.goButton = this.querySelector("[name=go]");
                        setTimeout(function () {
                            _this.nameInput.focus();
                        }, 200);
                        this.goButton.addEventListener("click", this.goHandler);
                        return [2 /*return*/];
                }
            });
        });
    };
    return UserAccountElement;
}(HTMLElement));
customElements.define("user-account", UserAccountElement);


/***/ }),

/***/ "./source/features/user-account/UserStore.ts":
/*!***************************************************!*\
  !*** ./source/features/user-account/UserStore.ts ***!
  \***************************************************/
/*! exports provided: UserStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStore", function() { return UserStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ungap_event_target__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ungap/event-target */ "./node_modules/@ungap/event-target/esm/index.js");
/* harmony import */ var lib_HTTP__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/HTTP */ "./source/library/HTTP.ts");
/* harmony import */ var lib_UrlProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/UrlProvider */ "./source/library/UrlProvider.ts");
/* harmony import */ var features_cityline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! features/cityline */ "./source/features/cityline/index.ts");





var UserStore = /** @class */ (function () {
    function UserStore() {
        this.eventTarget = new _ungap_event_target__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    Object.defineProperty(UserStore, "instance", {
        get: function () { return UserStore._instance; },
        enumerable: true,
        configurable: true
    });
    UserStore.prototype.change = function (userAccount) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = fetch;
                        _b = [lib_UrlProvider__WEBPACK_IMPORTED_MODULE_3__["UrlProvider"].APIRoot + "/api/user"];
                        return [4 /*yield*/, lib_HTTP__WEBPACK_IMPORTED_MODULE_2__["RequestBuilder"].post.authenticated()];
                    case 1: return [4 /*yield*/, _a.apply(void 0, _b.concat([(_c.sent()).setJSON(userAccount)]))];
                    case 2:
                        response = _c.sent();
                        return [2 /*return*/, response.ok];
                }
            });
        });
    };
    UserStore.prototype.currentUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, features_cityline__WEBPACK_IMPORTED_MODULE_4__["cityline"].getFrame("user-account")];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UserStore._instance = new UserStore();
    return UserStore;
}());



/***/ }),

/***/ "./source/features/user-account/index.ts":
/*!***********************************************!*\
  !*** ./source/features/user-account/index.ts ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserAccountElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserAccountElement */ "./source/features/user-account/UserAccountElement.ts");



/***/ }),

/***/ "./source/features/user-context/UserContextStore.ts":
/*!**********************************************************!*\
  !*** ./source/features/user-context/UserContextStore.ts ***!
  \**********************************************************/
/*! exports provided: UserContextStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContextStore", function() { return UserContextStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lib_Types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/Types */ "./source/library/Types.ts");


var UserContextStore = /** @class */ (function () {
    function UserContextStore() {
    }
    UserContextStore_1 = UserContextStore;
    Object.defineProperty(UserContextStore, "instance", {
        get: function () { return UserContextStore_1._instance; },
        enumerable: true,
        configurable: true
    });
    UserContextStore.prototype.deviceId = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.initialize();
                return [2 /*return*/, Promise.resolve(this._deviceId)];
            });
        });
    };
    UserContextStore.prototype.initialize = function () {
        if (this._deviceId)
            return;
        this._deviceId = window.localStorage.getItem(UserContextStore_1[lib_Types__WEBPACK_IMPORTED_MODULE_1__["Typename"]] + "-user-id");
        if (!this._deviceId || this._deviceId.length !== 32) {
            this._deviceId = UserContextStore_1.guid();
            window.localStorage.setItem(UserContextStore_1[lib_Types__WEBPACK_IMPORTED_MODULE_1__["Typename"]] + "-user-id", this._deviceId);
        }
    };
    var UserContextStore_1;
    UserContextStore._instance = new UserContextStore_1();
    UserContextStore.guid = function () {
        var s4 = function () { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); };
        return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
    };
    UserContextStore = UserContextStore_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(lib_Types__WEBPACK_IMPORTED_MODULE_1__["ClassTypename"])("UserContextStore")
    ], UserContextStore);
    return UserContextStore;
}());



/***/ }),

/***/ "./source/features/user-context/index.ts":
/*!***********************************************!*\
  !*** ./source/features/user-context/index.ts ***!
  \***********************************************/
/*! exports provided: UserContextStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserContextStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserContextStore */ "./source/features/user-context/UserContextStore.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserContextStore", function() { return _UserContextStore__WEBPACK_IMPORTED_MODULE_0__["UserContextStore"]; });





/***/ }),

/***/ "./source/fonts/index.ts":
/*!*******************************!*\
  !*** ./source/fonts/index.ts ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _open_sans_v16_latin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./open-sans-v16-latin */ "./source/fonts/open-sans-v16-latin/index.ts");



/***/ }),

/***/ "./source/fonts/open-sans-v16-latin/index.ts":
/*!***************************************************!*\
  !*** ./source/fonts/open-sans-v16-latin/index.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _open_sans_v16_latin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./open-sans-v16-latin */ "./source/fonts/open-sans-v16-latin/open-sans-v16-latin.less");
/* harmony import */ var _open_sans_v16_latin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_open_sans_v16_latin__WEBPACK_IMPORTED_MODULE_0__);



/***/ }),

/***/ "./source/fonts/open-sans-v16-latin/open-sans-v16-latin.less":
/*!*******************************************************************!*\
  !*** ./source/fonts/open-sans-v16-latin/open-sans-v16-latin.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./source/index.ts":
/*!*************************!*\
  !*** ./source/index.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fonts */ "./source/fonts/index.ts");
/* harmony import */ var features_content_target__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! features/content-target */ "./source/features/content-target/index.ts");
/* harmony import */ var features_top_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! features/top-menu */ "./source/features/top-menu/index.ts");
/* harmony import */ var style_page_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style/page.less */ "./source/styles/page.less");
/* harmony import */ var style_page_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(style_page_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var features_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! features/routing */ "./source/features/routing/index.ts");
/* harmony import */ var features_prompt_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! features/prompt-dialog */ "./source/features/prompt-dialog/index.ts");
/* harmony import */ var features_app_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! features/app-loader */ "./source/features/app-loader/index.ts");
/* harmony import */ var features_local_date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! features/local-date */ "./source/features/local-date/index.ts");
/* harmony import */ var features_app_switcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! features/app-switcher */ "./source/features/app-switcher/index.ts");
/* harmony import */ var features_chat_viewer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! features/chat-viewer */ "./source/features/chat-viewer/index.ts");
/* harmony import */ var features_chat_box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! features/chat-box */ "./source/features/chat-box/index.ts");
/* harmony import */ var features_channel_editor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! features/channel-editor */ "./source/features/channel-editor/index.ts");
/* harmony import */ var features_side_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! features/side-menu */ "./source/features/side-menu/index.ts");
/* harmony import */ var features_user_account__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! features/user-account */ "./source/features/user-account/index.ts");
















/***/ }),

/***/ "./source/library/Browser.ts":
/*!***********************************!*\
  !*** ./source/library/Browser.ts ***!
  \***********************************/
/*! exports provided: Browser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return Browser; });
var Browser = /** @class */ (function () {
    function Browser() {
    }
    Browser.getQueryParam = function (param) {
        var result = window.location.search.match(new RegExp("(\\?|&)" + param + "(\\[\\])?=([^&]*)"));
        return result ? result[3] : undefined;
    };
    Browser.isMobileLike = function () {
        // this value must follow the value in SidePanelStyle
        return (window.innerWidth <= 850);
    };
    Browser.isApp = function () {
        if (window.plugins)
            return true;
        return false;
    };
    Browser.isIOSApp = function () {
        return window.navigator.userAgent.indexOf("l-i-a") !== -1;
    };
    Browser.isTouch = (("ontouchstart" in window) || (navigator.msMaxTouchPoints > 0));
    return Browser;
}());



/***/ }),

/***/ "./source/library/DOM.ts":
/*!*******************************!*\
  !*** ./source/library/DOM.ts ***!
  \*******************************/
/*! exports provided: DOM, HeightFollower */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM", function() { return DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeightFollower", function() { return HeightFollower; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lib_DOMLite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/DOMLite */ "./source/library/DOMLite.ts");


var DOM = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DOM, _super);
    function DOM() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DOM.serializeInto = function (root, source) {
        DOM.elementsQuery(root).forEach(function (element) {
            var path = element.name.split(".");
            var leaf = source;
            path.forEach(function (pathElement) {
                if (pathElement === path[path.length - 1]) {
                    if (Array.isArray(leaf[pathElement]))
                        leaf[pathElement] = element.value.split(",");
                    else if (element.type === "checkbox") {
                        leaf[pathElement] = element.checked;
                    }
                    else
                        leaf[pathElement] = element.value;
                    return;
                }
                leaf = leaf[pathElement] || {};
            });
        });
    };
    DOM.serialize = function (root) {
        var source = {};
        DOM.elementsQuery(root).forEach(function (element) {
            source[element.name] = element.value;
        });
        return source;
    };
    DOM.deserialize = function (root, source) {
        DOM.elementsQuery(root).forEach(function (element) {
            element.value = source[element.name];
        });
    };
    DOM.toggleAttribute = function (element, name) {
        if (element.hasAttribute(name)) {
            element.removeAttribute(name);
            return false;
        }
        else {
            element.setAttribute(name, "");
            return true;
        }
    };
    DOM.ready = function () {
        return new Promise(function (resolve) {
            if (document.readyState === "complete" ||
                (document.readyState !== "loading" && !document.documentElement.doScroll)) {
                resolve();
            }
            else {
                document.addEventListener("DOMContentLoaded", resolve);
            }
        });
    };
    DOM.getCookie = function (name) {
        var b = document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)");
        return b ? b.pop() : "";
    };
    DOM.removecookie = function (name) {
        document.cookie = name + "=; Path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    };
    ;
    DOM.configurePage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, DOM.ready()];
                    case 1:
                        _a.sent();
                        document.querySelector("html").classList.remove("no-js");
                        return [2 /*return*/];
                }
            });
        });
    };
    DOM.fadeOut = function (element, speed) {
        if (speed === void 0) { speed = .1; }
        return new Promise(function (resolve) {
            element.style.opacity = "1";
            var fade = function () {
                var opacity = parseFloat(element.style.opacity);
                if ((opacity -= speed) < 0) {
                    element.style.display = "none";
                    resolve();
                }
                else {
                    element.style.opacity = opacity.toString();
                    requestAnimationFrame(fade);
                }
            };
            fade();
        });
    };
    DOM.parse = function (html) {
        var element = document.createElement("div");
        element.innerHTML = html;
        return element.firstElementChild;
    };
    DOM.fadeIn = function (element, display, speed) {
        if (display === void 0) { display = "block"; }
        if (speed === void 0) { speed = .1; }
        return new Promise(function (resolve) {
            element.style.opacity = "0";
            element.style.display = display;
            var fade = function () {
                var opacity = parseFloat(element.style.opacity);
                if (!((opacity += speed) > 1)) {
                    element.style.opacity = opacity.toString();
                    requestAnimationFrame(fade);
                }
                else {
                    resolve();
                }
            };
            fade();
        });
    };
    DOM.expand = function (element, speed) {
        if (speed === void 0) { speed = .1; }
        return new Promise(function (resolve) {
            var pos = 0;
            element.style.transformOrigin = "top";
            element.style.transform = "scaleY(0)";
            var f = function () {
                if (!((pos += speed) > 1)) {
                    element.style.transform = "scaleY(" + pos + ")";
                    requestAnimationFrame(f);
                }
                else {
                    resolve();
                }
            };
            f();
        });
    };
    DOM.slideUp = function (element) {
        return new Promise(function (resolve) {
            element.style.transform = "translate(0, 100%)";
            element.style.transition = "0.2s ease-out";
            requestAnimationFrame(function () {
                element.style.transform = "translate(0, 0)";
            });
        });
    };
    DOM.sort = function (elements, comparer) {
        var parent = elements[0].parentElement;
        var sorted = elements.sort(function (a, b) { return comparer(a) > comparer(b) ? 1 : -1; });
        sorted.forEach(function (element) {
            parent.appendChild(element);
        });
    };
    DOM.isElementInViewport = function (element) {
        var rectangle = element.getBoundingClientRect();
        return (rectangle.top >= 0 &&
            rectangle.left >= 0 &&
            rectangle.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
            rectangle.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */);
    };
    DOM.isScrolledToBottom = function (element) {
        return element.scrollTop >= (element.scrollHeight - element.offsetHeight);
    };
    DOM.elementsQuery = function (form) { return [].slice.call(form.querySelectorAll("input, textarea")); };
    return DOM;
}(lib_DOMLite__WEBPACK_IMPORTED_MODULE_1__["DOMLite"]));

DOM.configurePage().catch(console.log);
var HeightFollower = /** @class */ (function () {
    function HeightFollower(source, target, padding) {
        var _this = this;
        this.source = source;
        this.target = target;
        this.padding = padding;
        this.adjustHandler = function () {
            _this.target.style.height = _this.source.clientHeight - _this.padding + "px";
        };
        window.addEventListener("resize", this.adjustHandler, { passive: true });
        this.adjustHandler();
    }
    HeightFollower.prototype.destroy = function () {
        window.removeEventListener("resize", this.adjustHandler);
    };
    return HeightFollower;
}());



/***/ }),

/***/ "./source/library/DOMLite.ts":
/*!***********************************!*\
  !*** ./source/library/DOMLite.ts ***!
  \***********************************/
/*! exports provided: DOMLite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMLite", function() { return DOMLite; });
var DOMLite = /** @class */ (function () {
    function DOMLite() {
    }
    DOMLite.createIsolated = function () {
        var d = document;
        var root = d.createElement("ls-bm");
        d.body.appendChild(root);
        if (root.attachShadow)
            root = root.attachShadow({ mode: "open" });
        root.innerHTML = DOMLite.isolatedElementView();
        return root.querySelector("div");
    };
    DOMLite.isolatedElementView = function () { return "\n            <style>\n                :host {\n                  all: initial;\n                }\n                #ls1289 {\n                    all: initial;\n                    \n                    width:100%;\n                    height:100%;\n                    position:fixed;\n                    top:0;\n                    left:0;\n                    pointer-events:none;\n                    z-index: 2147483648;\n                    font-family: sans-serif;\n        \n                    * {\n                        all: unset;\n                    }\n                }\n            </style>\n            <div id=ls1289></div>\n        "; };
    return DOMLite;
}());



/***/ }),

/***/ "./source/library/Datetime.ts":
/*!************************************!*\
  !*** ./source/library/Datetime.ts ***!
  \************************************/
/*! exports provided: DateTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTime", function() { return DateTime; });
var DateTime = /** @class */ (function () {
    function DateTime() {
    }
    DateTime.UTCToLocal = function (date) {
        var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
        var offset = date.getTimezoneOffset() / 60;
        var hours = date.getHours();
        newDate.setHours(hours - offset);
        return newDate;
    };
    DateTime.LocalToUTC = function (date) {
        var now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
        return new Date(now_utc);
    };
    return DateTime;
}());



/***/ }),

/***/ "./source/library/Formatting.ts":
/*!**************************************!*\
  !*** ./source/library/Formatting.ts ***!
  \**************************************/
/*! exports provided: Formatting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Formatting", function() { return Formatting; });
var Formatting = /** @class */ (function () {
    function Formatting() {
    }
    Formatting.date = function (source) {
        var date = new Date(source);
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return date.getDate() + " " + monthNames[date.getMonth()] + ", " + date.getFullYear();
    };
    Formatting.shortDate = function (source) {
        var date = new Date(source);
        return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    };
    Formatting.shortDateTime = function (date) {
        var day = Formatting.pad(date.getDate().toString());
        var month = Formatting.pad((date.getMonth() + 1).toString());
        var year = date.getFullYear();
        return day + "/" + month + "/" + year + " " + date.getHours() + ":" + Formatting.pad(date.getMinutes().toString());
    };
    Formatting.shortDateNamedMonth = function (source) {
        var date = new Date(source);
        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return monthNames[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear();
    };
    Formatting.pad = function (source, wantedLength, symbol) {
        if (source === void 0) { source = ""; }
        if (wantedLength === void 0) { wantedLength = 2; }
        if (symbol === void 0) { symbol = "0"; }
        return source.length >= wantedLength ? source : new Array(wantedLength - source.length + 1).join(symbol) + source;
    };
    Formatting.slugify = function (text) {
        return text.toString().toLowerCase()
            .replace(/\s+/g, "-") // Replace spaces with -
            .replace(/[^\w\-]+/g, "") // Remove all non-word chars
            .replace(/\-\-+/g, "-") // Replace multiple - with single -
            .replace(/^-+/, "") // Trim - from start of text
            .replace(/-+$/, ""); // Trim - from end of text
    };
    Formatting.mapAny = function (obj) {
        var arr = [];
        for (var key in obj)
            arr.push([key, obj[key]]);
        return arr;
    };
    Formatting.areEqual = function (a1, a2) {
        return a1.length === a2.length && a1.every(function (v, i) { return v === a2[i]; });
    };
    Formatting.capitalize = function (source) {
        return source.charAt(0).toUpperCase() + source.slice(1);
    };
    Formatting.titleize = function (source) {
        var arr = source.split(" ");
        arr = arr.map(function (str) { return Formatting.capitalize(source); });
        return arr.join(" ");
    };
    Formatting.deslugify = function (source) {
        if (!source || source === "")
            return "";
        // all uppercase?
        if (source.toUpperCase() === source)
            source = source.toLowerCase();
        // replace symbols with spaces
        source = source.replace(Formatting.wordSplitRegex, " ");
        // replace uppercase letters with spaces, if no spaces
        if (source.trim().indexOf(" ") === -1)
            source = source.replace(Formatting.uppercase, " $0");
        // single space only
        source = source.replace(Formatting.multipleWhitespace, " ");
        // titielize (this is test -> This Is Test)
        source = source.replace(Formatting.titleizeRegex, "$0".toUpperCase());
        return source.trim();
    };
    Formatting.htmlEscape = function (literals) {
        var placeholders = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            placeholders[_i - 1] = arguments[_i];
        }
        var result = "";
        // interleave the literals with the placeholders
        for (var i = 0; i < placeholders.length; i++) {
            if (literals[i]) {
                if (!literals[i].endsWith("$"))
                    result += literals[i];
                else
                    result += literals[i].substring(0, literals[i].length - 1);
            }
            if (placeholders[i])
                if (Array.isArray(placeholders[i]))
                    result += placeholders[i].join("");
                else if (literals[i].endsWith("$"))
                    result += placeholders[i];
                else if (placeholders[i] && placeholders[i].toLocaleLowerCase && placeholders[i].toLocaleLowerCase().indexOf("<svg") === 0)
                    result += placeholders[i];
                else if (placeholders[i] === undefined)
                    result += "NULL";
                else if (typeof (placeholders[i]) === "number")
                    result += placeholders[i];
                else if (typeof (placeholders[i]) === "boolean")
                    result += placeholders[i].toString();
                else {
                    if (!placeholders[i].replace)
                        throw new Error("Cannot replace on value " + placeholders[i] + ", index " + i + " type is " + typeof (placeholders[i]));
                    else
                        result += placeholders[i]
                            .replace(/&/g, "&amp;")
                            .replace(/"/g, "&quot;")
                            .replace(/'/g, "&#39;")
                            .replace(/</g, "&lt;")
                            .replace(/>/g, "&gt;");
                }
        }
        // add the last literal
        result += literals[literals.length - 1];
        return result;
    };
    Formatting.htmlDecode = function (text) {
        var div = document.createElement("div");
        div.innerHTML = text;
        return div.textContent;
    };
    Formatting.htmlEncode = function (str) {
        var div = document.createElement("div");
        div[("textContent" in div) ? "textContent" : "innerText"] = str;
        return div.innerHTML;
    };
    Formatting.htmlEncode2 = function (str) {
        return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    };
    Formatting.range = function (lowEnd, highEnd) {
        if (highEnd < lowEnd)
            return [];
        var arr = [];
        var c = highEnd - lowEnd + 1;
        while (c--) {
            arr[c] = highEnd--;
        }
        return arr;
    };
    Formatting.wordSplitRegex = new RegExp("[\-_\.]");
    Formatting.uppercase = new RegExp("[A-Z]");
    Formatting.multipleWhitespace = new RegExp("\s{2,}");
    Formatting.titleizeRegex = new RegExp("\b([a-z])");
    Formatting.nameof = function (name) { return name; };
    return Formatting;
}());



/***/ }),

/***/ "./source/library/HTTP.ts":
/*!********************************!*\
  !*** ./source/library/HTTP.ts ***!
  \********************************/
/*! exports provided: RequestBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestBuilder", function() { return RequestBuilder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var features_user_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! features/user-context */ "./source/features/user-context/index.ts");


var RequestBuilder = /** @class */ (function () {
    function RequestBuilder(method) {
        this.method = method;
        this.headers = {};
    }
    Object.defineProperty(RequestBuilder, "delete", {
        get: function () {
            return new RequestBuilder("delete");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestBuilder, "post", {
        get: function () {
            return new RequestBuilder("post");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestBuilder, "get", {
        get: function () {
            return new RequestBuilder("get");
        },
        enumerable: true,
        configurable: true
    });
    RequestBuilder.prototype.authenticated = function () {
        var _this = this;
        return new Promise(function (r) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var deviceId;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, features_user_context__WEBPACK_IMPORTED_MODULE_1__["UserContextStore"].instance.deviceId()];
                    case 1:
                        deviceId = _a.sent();
                        this.headers["device-id"] = deviceId;
                        r(this);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    RequestBuilder.prototype.setJSON = function (obj) {
        this.headers["content-type"] = "application/json";
        this.headers["Accept"] = "application/json";
        this.body = JSON.stringify(obj);
        return this;
    };
    return RequestBuilder;
}());



/***/ }),

/***/ "./source/library/Types.ts":
/*!*********************************!*\
  !*** ./source/library/Types.ts ***!
  \*********************************/
/*! exports provided: Typename, ClassTypename */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Typename", function() { return Typename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassTypename", function() { return ClassTypename; });
// declared on static class via a guid to prevent conflicts with iterators etc.
var Typename = "09fefbcb3ee8"; // in the future this can be a Symbol()
/**
 * Declares a property on a class that is not minified.
 *
 * Used with Typename to get and set:
```typescript
@ClassTypename("MyClass")
class MyClass { }
  
var className = MyClass[Typename];
 * ```
 */
function ClassTypename(typeName) {
    return function (target) {
        target[Typename] = typeName;
    };
}


/***/ }),

/***/ "./source/library/UrlProvider.ts":
/*!***************************************!*\
  !*** ./source/library/UrlProvider.ts ***!
  \***************************************/
/*! exports provided: UrlProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlProvider", function() { return UrlProvider; });
var UrlProvider = /** @class */ (function () {
    function UrlProvider() {
    }
    Object.defineProperty(UrlProvider, "APIRoot", {
        get: function () {
            switch (window.location.hostname) {
                case "poulfoged.github.io": return "http://chat.devchamp.com";
                case "127.0.0.1": return "https://localhost:5001";
            }
        },
        enumerable: true,
        configurable: true
    });
    return UrlProvider;
}());



/***/ }),

/***/ "./source/library/polyfills/RequestAnimationFrame.ts":
/*!***********************************************************!*\
  !*** ./source/library/polyfills/RequestAnimationFrame.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var RequestAnimationFrame = /** @class */ (function () {
    function RequestAnimationFrame() {
        var lastTime = 0;
        // add requestAnimationFrame2
        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function (callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function () { callback(currTime + timeToCall); }, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        // add cancelAnimationFrame
        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function (id) {
                clearTimeout(id);
            };
    }
    return RequestAnimationFrame;
}());
var __ = new RequestAnimationFrame();


/***/ }),

/***/ "./source/library/polyfills/RequestIdleCallback.js":
/*!*********************************************************!*\
  !*** ./source/library/polyfills/RequestIdleCallback.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.requestIdleCallback =
window.requestIdleCallback ||
function (cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
}

window.cancelIdleCallback =
window.cancelIdleCallback ||
function (id) {
  clearTimeout(id);
}

/***/ }),

/***/ "./source/library/polyfills/RequestIdleCallback.ts":
/*!*********************************************************!*\
  !*** ./source/library/polyfills/RequestIdleCallback.ts ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lib_polyfills_RequestIdleCallback_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/polyfills/RequestIdleCallback.js */ "./source/library/polyfills/RequestIdleCallback.js");
/* harmony import */ var lib_polyfills_RequestIdleCallback_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lib_polyfills_RequestIdleCallback_js__WEBPACK_IMPORTED_MODULE_0__);



/***/ }),

/***/ "./source/library/polyfills/classList.js":
/*!***********************************************!*\
  !*** ./source/library/polyfills/classList.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * classList.js: Cross-browser full element.classList implementation.
 * 1.1.20170427
 *
 * By Eli Grey, http://eligrey.com
 * License: Dedicated to the public domain.
 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

if ("document" in window.self) {

    // Full polyfill for browsers with no classList support
    // Including IE < Edge missing SVGElement.classList
    if (!("classList" in document.createElement("_")) 
        || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))) {
    
    (function (view) {
    
    "use strict";
    
    if (!('Element' in view)) return;
    
    var
          classListProp = "classList"
        , protoProp = "prototype"
        , elemCtrProto = view.Element[protoProp]
        , objCtr = Object
        , strTrim = String[protoProp].trim || function () {
            return this.replace(/^\s+|\s+$/g, "");
        }
        , arrIndexOf = Array[protoProp].indexOf || function (item) {
            var
                  i = 0
                , len = this.length
            ;
            for (; i < len; i++) {
                if (i in this && this[i] === item) {
                    return i;
                }
            }
            return -1;
        }
        // Vendors: please allow content code to instantiate DOMExceptions
        , DOMEx = function (type, message) {
            this.name = type;
            this.code = DOMException[type];
            this.message = message;
        }
        , checkTokenAndGetIndex = function (classList, token) {
            if (token === "") {
                throw new DOMEx(
                      "SYNTAX_ERR"
                    , "An invalid or illegal string was specified"
                );
            }
            if (/\s/.test(token)) {
                throw new DOMEx(
                      "INVALID_CHARACTER_ERR"
                    , "String contains an invalid character"
                );
            }
            return arrIndexOf.call(classList, token);
        }
        , ClassList = function (elem) {
            var
                  trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
                , classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
                , i = 0
                , len = classes.length
            ;
            for (; i < len; i++) {
                this.push(classes[i]);
            }
            this._updateClassName = function () {
                elem.setAttribute("class", this.toString());
            };
        }
        , classListProto = ClassList[protoProp] = []
        , classListGetter = function () {
            return new ClassList(this);
        }
    ;
    // Most DOMException implementations don't allow calling DOMException's toString()
    // on non-DOMExceptions. Error's toString() is sufficient here.
    DOMEx[protoProp] = Error[protoProp];
    classListProto.item = function (i) {
        return this[i] || null;
    };
    classListProto.contains = function (token) {
        token += "";
        return checkTokenAndGetIndex(this, token) !== -1;
    };
    classListProto.add = function () {
        var
              tokens = arguments
            , i = 0
            , l = tokens.length
            , token
            , updated = false
        ;
        do {
            token = tokens[i] + "";
            if (checkTokenAndGetIndex(this, token) === -1) {
                this.push(token);
                updated = true;
            }
        }
        while (++i < l);
    
        if (updated) {
            this._updateClassName();
        }
    };
    classListProto.remove = function () {
        var
              tokens = arguments
            , i = 0
            , l = tokens.length
            , token
            , updated = false
            , index
        ;
        do {
            token = tokens[i] + "";
            index = checkTokenAndGetIndex(this, token);
            while (index !== -1) {
                this.splice(index, 1);
                updated = true;
                index = checkTokenAndGetIndex(this, token);
            }
        }
        while (++i < l);
    
        if (updated) {
            this._updateClassName();
        }
    };
    classListProto.toggle = function (token, force) {
        token += "";
    
        var
              result = this.contains(token)
            , method = result ?
                force !== true && "remove"
            :
                force !== false && "add"
        ;
    
        if (method) {
            this[method](token);
        }
    
        if (force === true || force === false) {
            return force;
        } else {
            return !result;
        }
    };
    classListProto.toString = function () {
        return this.join(" ");
    };
    
    if (objCtr.defineProperty) {
        var classListPropDesc = {
              get: classListGetter
            , enumerable: true
            , configurable: true
        };
        try {
            objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
        } catch (ex) { // IE 8 doesn't support enumerable:true
            // adding undefined to fight this issue https://github.com/eligrey/classList.js/issues/36
            // modernie IE8-MSW7 machine has IE8 8.0.6001.18702 and is affected
            if (ex.number === undefined || ex.number === -0x7FF5EC54) {
                classListPropDesc.enumerable = false;
                objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
            }
        }
    } else if (objCtr[protoProp].__defineGetter__) {
        elemCtrProto.__defineGetter__(classListProp, classListGetter);
    }
    
    }(window.self));
    
    }
    
    // There is full or partial native classList support, so just check if we need
    // to normalize the add/remove and toggle APIs.
    
    (function () {
        "use strict";
    
        var testElement = document.createElement("_");
    
        testElement.classList.add("c1", "c2");
    
        // Polyfill for IE 10/11 and Firefox <26, where classList.add and
        // classList.remove exist but support only one argument at a time.
        if (!testElement.classList.contains("c2")) {
            var createMethod = function(method) {
                var original = DOMTokenList.prototype[method];
    
                DOMTokenList.prototype[method] = function(token) {
                    var i, len = arguments.length;
    
                    for (i = 0; i < len; i++) {
                        token = arguments[i];
                        original.call(this, token);
                    }
                };
            };
            createMethod('add');
            createMethod('remove');
        }
    
        testElement.classList.toggle("c3", false);
    
        // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
        // support the second argument.
        if (testElement.classList.contains("c3")) {
            var _toggle = DOMTokenList.prototype.toggle;
    
            DOMTokenList.prototype.toggle = function(token, force) {
                if (1 in arguments && !this.contains(token) === !force) {
                    return force;
                } else {
                    return _toggle.call(this, token);
                }
            };
    
        }
    
        testElement = null;
    }());
    
    }

/***/ }),

/***/ "./source/library/polyfills/custom-elements-es5-adapter.js":
/*!*****************************************************************!*\
  !*** ./source/library/polyfills/custom-elements-es5-adapter.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

/**
 * This shim allows elements written in, or compiled to, ES5 to work on native
 * implementations of Custom Elements v1. It sets new.target to the value of
 * this.constructor so that the native HTMLElement constructor can access the
 * current under-construction element's definition.
 */
(function() {
    if (
      // No Reflect, no classes, no need for shim because native custom elements
      // require ES2015 classes or Reflect.
      window.Reflect === undefined ||
      window.customElements === undefined ||
      // The webcomponentsjs custom elements polyfill doesn't require
      // ES2015-compatible construction (`super()` or `Reflect.construct`).
      window.customElements.hasOwnProperty('polyfillWrapFlushCallback')
    ) {
      return;
    }
    const BuiltInHTMLElement = HTMLElement;
    window.HTMLElement = /** @this {!Object} */ function HTMLElement() {
      return Reflect.construct(
          BuiltInHTMLElement, [], /** @type {!Function} */ (this.constructor));
    };
    HTMLElement.prototype = BuiltInHTMLElement.prototype;
    HTMLElement.prototype.constructor = HTMLElement;
    Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
  })();

/***/ }),

/***/ "./source/library/polyfills/index.ts":
/*!*******************************************!*\
  !*** ./source/library/polyfills/index.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _classList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classList.js */ "./source/library/polyfills/classList.js");
/* harmony import */ var _classList_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_classList_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var es6_promise_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! es6-promise/auto */ "./node_modules/es6-promise/auto.js");
/* harmony import */ var es6_promise_auto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(es6_promise_auto__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/* harmony import */ var _RequestAnimationFrame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RequestAnimationFrame */ "./source/library/polyfills/RequestAnimationFrame.ts");
/* harmony import */ var _RequestAnimationFrame__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_RequestAnimationFrame__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _RequestIdleCallback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RequestIdleCallback */ "./source/library/polyfills/RequestIdleCallback.ts");
/* harmony import */ var lib_DOM__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/DOM */ "./source/library/DOM.ts");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lib_Browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/Browser */ "./source/library/Browser.ts");
/* harmony import */ var _toggleAttribute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./toggleAttribute.js */ "./source/library/polyfills/toggleAttribute.js");
/* harmony import */ var _toggleAttribute_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_toggleAttribute_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _custom_elements_es5_adapter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./custom-elements-es5-adapter.js */ "./source/library/polyfills/custom-elements-es5-adapter.js");
/* harmony import */ var _custom_elements_es5_adapter_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_custom_elements_es5_adapter_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var document_register_element__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! document-register-element */ "./node_modules/document-register-element/build/document-register-element.js");
/* harmony import */ var document_register_element__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(document_register_element__WEBPACK_IMPORTED_MODULE_11__);
var _this = undefined;










// these goes hand in hand with web-components


window.setTimeout(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    var FastClick, handleFirstTab;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, lib_DOM__WEBPACK_IMPORTED_MODULE_6__["DOM"].ready()];
            case 1:
                _a.sent();
                // kick off the polyfill!
                smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_7__["polyfill"]();
                if (!lib_Browser__WEBPACK_IMPORTED_MODULE_8__["Browser"].isIOSApp()) return [3 /*break*/, 3];
                return [4 /*yield*/, __webpack_require__.e(/*! import() | platform */ "vendors~platform").then(__webpack_require__.t.bind(null, /*! fastclick */ "./node_modules/fastclick/lib/fastclick.js", 7))];
            case 2:
                FastClick = _a.sent();
                FastClick.attach(document.body);
                _a.label = 3;
            case 3:
                handleFirstTab = function (e) {
                    if (e.keyCode === 9) { // the "I am a keyboard user" key
                        document.body.classList.add("tabbing");
                        window.removeEventListener("keydown", handleFirstTab);
                    }
                };
                window.addEventListener("keydown", handleFirstTab);
                return [2 /*return*/];
        }
    });
}); });


/***/ }),

/***/ "./source/library/polyfills/toggleAttribute.js":
/*!*****************************************************!*\
  !*** ./source/library/polyfills/toggleAttribute.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!Element.prototype.toggleAttribute) {
    Element.prototype.toggleAttribute = function(name, force) {
      if(force !== void 0) force = !!force 
      
      if (this.getAttribute(name) !== null) {
        if (force) return true;
        
        this.removeAttribute(name);
        return false;
      } else {
        if (force === false) return false;
        
        this.setAttribute(name, "");
        return true;
      }
    };
  }

/***/ }),

/***/ "./source/styles/dialog-module.less":
/*!******************************************!*\
  !*** ./source/styles/dialog-module.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"frame":"dialog-module-frame-2qS","window":"dialog-module-window-1N6","text":"dialog-module-text-2f7","buttons":"dialog-module-buttons-JPb"};

/***/ }),

/***/ "./source/styles/forms-module.less":
/*!*****************************************!*\
  !*** ./source/styles/forms-module.less ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"button":"forms-module-button-3CL","primary":"forms-module-primary-3oj","secondary":"forms-module-secondary-k17","button-panel":"forms-module-button-panel-m9H","buttonPanel":"forms-module-button-panel-m9H","field-set":"forms-module-field-set-1FP","fieldSet":"forms-module-field-set-1FP"};

/***/ }),

/***/ "./source/styles/page.less":
/*!*********************************!*\
  !*** ./source/styles/page.less ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./source/library/polyfills ./source ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./source/library/polyfills */"./source/library/polyfills/index.ts");
module.exports = __webpack_require__(/*! ./source */"./source/index.ts");


/***/ })

/******/ });
//# sourceMappingURL=41241f91c30446689a09.client.bundle.js.map