/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@editorjs/editorjs/dist/editor.js":
/*!********************************************************!*\
  !*** ./node_modules/@editorjs/editorjs/dist/editor.js ***!
  \********************************************************/
/***/ ((module) => {

/*! For license information please see editor.js.LICENSE.txt */
!function(t,e){ true?module.exports=e():0}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=187)}([function(t,e,n){var o=n(10),r=n(17),i=n(27),a=n(21),s=n(31),l=function(t,e,n){var c,u,f,d,p=t&l.F,h=t&l.G,v=t&l.S,g=t&l.P,y=t&l.B,b=h?o:v?o[e]||(o[e]={}):(o[e]||{}).prototype,m=h?r:r[e]||(r[e]={}),k=m.prototype||(m.prototype={});for(c in h&&(n=e),n)f=((u=!p&&b&&void 0!==b[c])?b:n)[c],d=y&&u?s(f,o):g&&"function"==typeof f?s(Function.call,f):f,b&&a(b,c,f,t&l.U),m[c]!=f&&i(m,c,d),g&&k[c]!=f&&(k[c]=f)};o.core=r,l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){var o=n(110);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},function(t,e,n){var o=n(59),r=n(152);t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?r(t):e}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(23),n(371),n(24),n(403),n(14)],void 0===(i="function"==typeof(o=function(t,e,o,r,i,a){"use strict";var s,l=n(1);function c(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"log",o=arguments.length>3?arguments[3]:void 0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"color: inherit";if("console"in window&&window.console[n]){var i=["info","log","warn","error"].includes(n),a=[];switch(c.logLevel){case s.ERROR:if("error"!==n)return;break;case s.WARN:if(!["error","warn"].includes(n))return;break;case s.INFO:if(!i||t)return}o&&a.push(o);var l="Editor.js ".concat("2.24.2"),u="line-height: 1em;\n            color: #006FEA;\n            display: inline-block;\n            font-size: 11px;\n            line-height: 1em;\n            background-color: #fff;\n            padding: 4px 9px;\n            border-radius: 30px;\n            border: 1px solid rgba(56, 138, 229, 0.16);\n            margin: 4px 5px 4px 0;";t&&(i?(a.unshift(u,r),e="%c".concat(l,"%c ").concat(e)):e="( ".concat(l," )").concat(e));try{if(i)if(o){var f;(f=console)[n].apply(f,["".concat(e," %o")].concat(a))}else{var d;(d=console)[n].apply(d,[e].concat(a))}else console[n](e)}catch(t){}}}Object.defineProperty(t,"__esModule",{value:!0}),t.setLogLevel=function(t){c.logLevel=t},t.typeOf=d,t.isFunction=p,t.isObject=h,t.isString=function(t){return"string"===d(t)},t.isBoolean=function(t){return"boolean"===d(t)},t.isNumber=function(t){return"number"===d(t)},t.isUndefined=v,t.isClass=function(t){return p(t)&&/^\s*class\s+/.test(t.toString())},t.isEmpty=function(t){return!t||0===Object.keys(t).length&&t.constructor===Object},t.isPromise=function(t){return Promise.resolve(t)===t},t.isPrintableKey=function(t){return t>47&&t<58||32===t||13===t||229===t||t>64&&t<91||t>95&&t<112||t>185&&t<193||t>218&&t<223},t.sequence=function(t){return g.apply(this,arguments)},t.array=function(t){return Array.prototype.slice.call(t)},t.delay=function(t,e){return function(){var n=this,o=arguments;window.setTimeout((function(){return t.apply(n,o)}),e)}},t.getFileExtension=function(t){return t.name.split(".").pop()},t.isValidMimeType=function(t){return/^[-\w]+\/([-+\w]+|\*)$/.test(t)},t.debounce=function(t,e,n){var o,r=this;return function(){for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];var l=r,c=function(){o=null,n||t.apply(l,a)},u=n&&!o;window.clearTimeout(o),o=window.setTimeout(c,e),u&&t.apply(l,a)}},t.throttle=function(t,e){var n,o,r,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=null,s=0;i||(i={});var l=function(){s=!1===i.leading?0:Date.now(),a=null,r=t.apply(n,o),a||(n=o=null)};return function(){var c=Date.now();s||!1!==i.leading||(s=c);var u=e-(c-s);return n=this,o=arguments,u<=0||u>e?(a&&(clearTimeout(a),a=null),s=c,r=t.apply(n,o),a||(n=o=null)):a||!1===i.trailing||(a=setTimeout(l,u)),r}},t.copyTextToClipboard=function(t){var e=a.default.make("div","codex-editor-clipboard",{innerHTML:t});document.body.appendChild(e);var n=window.getSelection(),o=document.createRange();o.selectNode(e),window.getSelection().removeAllRanges(),n.addRange(o),document.execCommand("copy"),document.body.removeChild(e)},t.getUserOS=y,t.capitalize=function(t){return t[0].toUpperCase()+t.slice(1)},t.deepMerge=function t(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(!r.length)return e;var a=r.shift();if(h(e)&&h(a))for(var s in a)h(a[s])?(e[s]||Object.assign(e,(0,o.default)({},s,{})),t(e[s],a[s])):Object.assign(e,(0,o.default)({},s,a[s]));return t.apply(void 0,[e].concat(r))},t.beautifyShortcut=function(t){var e=y();return t=t.replace(/shift/gi,"???").replace(/backspace/gi,"???").replace(/enter/gi,"???").replace(/up/gi,"???").replace(/left/gi,"???").replace(/down/gi,"???").replace(/right/gi,"???").replace(/escape/gi,"???").replace(/insert/gi,"Ins").replace(/delete/gi,"???").replace(/\+/gi," + "),t=e.mac?t.replace(/ctrl|cmd/gi,"???").replace(/alt/gi,"???"):t.replace(/cmd/gi,"Ctrl").replace(/windows/gi,"WIN")},t.getValidUrl=function(t){try{return new URL(t).href}catch(t){}return"//"===t.substring(0,2)?window.location.protocol+t:window.location.origin+t},t.generateBlockId=function(){return(0,i.nanoid)(10)},t.openTab=function(t){window.open(t,"_blank")},t.generateId=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"".concat(t).concat(Math.floor(1e8*Math.random()).toString(16))},t.deprecationAssert=function(t,e,n){var o="??".concat(e,"?? is deprecated and will be removed in the next major release. Please use the ??").concat(n,"?? instead.");t&&f(o,"warn")},t.cacheable=function(t,e,n){var o=n.value?"value":"get",r=n[o],i="#".concat(e,"Cache");if(n[o]=function(){if(void 0===this[i]){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this[i]=r.apply.apply(r,[this].concat(e))}return this[i]},"get"===o&&n.set){var a=n.set;n.set=function(e){delete t[i],a.apply(this,e)}}return n},t.isMobileScreen=function(){return window.matchMedia("(max-width: 650px)").matches},t.isIosDevice=t.isTouchSupported=t.logLabeled=t.log=t.mouseButtons=t.keyCodes=t.LogLevels=void 0,e=l(e),o=l(o),r=l(r),a=l(a),t.LogLevels=s,function(t){t.VERBOSE="VERBOSE",t.INFO="INFO",t.WARN="WARN",t.ERROR="ERROR"}(s||(t.LogLevels=s={})),t.keyCodes={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,LEFT:37,UP:38,DOWN:40,RIGHT:39,DELETE:46,META:91},t.mouseButtons={LEFT:0,WHEEL:1,RIGHT:2,BACKWARD:3,FORWARD:4},c.logLevel=s.VERBOSE;var u=c.bind(window,!1);t.log=u;var f=c.bind(window,!0);function d(t){return Object.prototype.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function p(t){return"function"===d(t)||"asyncfunction"===d(t)}function h(t){return"object"===d(t)}function v(t){return"undefined"===d(t)}function g(){return(g=(0,r.default)(e.default.mark((function t(n){var o,i,a,s,l=arguments;return e.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=function(){return(s=(0,r.default)(e.default.mark((function t(n,o,r){return e.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.function(n.data);case 3:return t.next=5,o(v(n.data)?{}:n.data);case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),r(v(n.data)?{}:n.data);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)},a=function(t,e,n){return s.apply(this,arguments)},o=l.length>1&&void 0!==l[1]?l[1]:function(){},i=l.length>2&&void 0!==l[2]?l[2]:function(){},t.abrupt("return",n.reduce(function(){var t=(0,r.default)(e.default.mark((function t(n,r){return e.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n;case 2:return t.abrupt("return",a(r,o,i));case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),Promise.resolve()));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(){var t={win:!1,mac:!1,x11:!1,linux:!1},e=Object.keys(t).find((function(t){return-1!==navigator.appVersion.toLowerCase().indexOf(t)}));return e?(t[e]=!0,t):t}t.logLabeled=f;var b="ontouchstart"in document.documentElement;t.isTouchSupported=b;var m="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1);t.isIosDevice=m})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o=n(59);function r(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return r=function(){return t},t}t.exports=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==o(t)&&"function"!=typeof t)return{default:t};var e=r();if(e&&e.has(t))return e.get(t);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var s=i?Object.getOwnPropertyDescriptor(t,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=t[a]}return n.default=t,e&&e.set(t,n),n}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(111)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);function l(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,i=!0,a=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){a=!0,r=t},f:function(){try{i||null==o.return||o.return()}finally{if(a)throw r}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var u=function(){function t(e){var n=this,o=e.config,i=e.eventsDispatcher;if((0,r.default)(this,t),this.nodes={},this.listeners=new a.default,this.readOnlyMutableListeners={on:function(t,e,o){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];n.mutableListenerIds.push(n.listeners.on(t,e,o,r))},clearAll:function(){var t,e=l(n.mutableListenerIds);try{for(e.s();!(t=e.n()).done;){var o=t.value;n.listeners.offById(o)}}catch(t){e.e(t)}finally{e.f()}n.mutableListenerIds=[]}},this.mutableListenerIds=[],(this instanceof t?this.constructor:void 0)===t)throw new TypeError("Constructors for abstract class Module are not allowed.");this.config=o,this.eventsDispatcher=i}return(0,i.default)(t,[{key:"removeAllNodes",value:function(){for(var t in this.nodes){var e=this.nodes[t];e instanceof HTMLElement&&e.remove()}}},{key:"state",set:function(t){this.Editor=t}},{key:"isRtl",get:function(){return"rtl"===this.config.i18n.direction}}]),t}();o.default=u,u.displayName="Module",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var o=n(13);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(42),n(2),n(3),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s){"use strict";var l=n(8),c=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=c(r),i=c(i),a=c(a),s=l(s);var u=function(){function t(){(0,i.default)(this,t)}return(0,a.default)(t,null,[{key:"isSingleTag",value:function(t){return t.tagName&&["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"].includes(t.tagName)}},{key:"isLineBreakTag",value:function(t){return t&&t.tagName&&["BR","WBR"].includes(t.tagName)}},{key:"make",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=document.createElement(t);for(var a in Array.isArray(n)?(e=i.classList).add.apply(e,(0,r.default)(n)):n&&i.classList.add(n),o)Object.prototype.hasOwnProperty.call(o,a)&&(i[a]=o[a]);return i}},{key:"text",value:function(t){return document.createTextNode(t)}},{key:"svg",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:14,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:14,o=document.createElementNS("http://www.w3.org/2000/svg","svg");return o.classList.add("icon","icon--"+t),o.setAttribute("width",e+"px"),o.setAttribute("height",n+"px"),o.innerHTML='<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'.concat(t,'"></use>'),o}},{key:"append",value:function(t,e){Array.isArray(e)?e.forEach((function(e){return t.appendChild(e)})):t.appendChild(e)}},{key:"prepend",value:function(t,e){Array.isArray(e)?(e=e.reverse()).forEach((function(e){return t.prepend(e)})):t.prepend(e)}},{key:"swap",value:function(t,e){var n=document.createElement("div"),o=t.parentNode;o.insertBefore(n,t),o.insertBefore(t,e),o.insertBefore(e,n),o.removeChild(n)}},{key:"find",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=arguments.length>1?arguments[1]:void 0;return t.querySelector(e)}},{key:"get",value:function(t){return document.getElementById(t)}},{key:"findAll",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=arguments.length>1?arguments[1]:void 0;return t.querySelectorAll(e)}},{key:"findAllInputs",value:function(e){return s.array(e.querySelectorAll(t.allInputsSelector)).reduce((function(e,n){return t.isNativeInput(n)||t.containsOnlyInlineElements(n)?[].concat((0,r.default)(e),[n]):[].concat((0,r.default)(e),(0,r.default)(t.getDeepestBlockElements(n)))}),[])}},{key:"getDeepestNode",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=n?"lastChild":"firstChild",r=n?"previousSibling":"nextSibling";if(e&&e.nodeType===Node.ELEMENT_NODE&&e[o]){var i=e[o];if(t.isSingleTag(i)&&!t.isNativeInput(i)&&!t.isLineBreakTag(i))if(i[r])i=i[r];else{if(!i.parentNode[r])return i.parentNode;i=i.parentNode[r]}return this.getDeepestNode(i,n)}return e}},{key:"isElement",value:function(t){return!s.isNumber(t)&&t&&t.nodeType&&t.nodeType===Node.ELEMENT_NODE}},{key:"isFragment",value:function(t){return!s.isNumber(t)&&t&&t.nodeType&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE}},{key:"isContentEditable",value:function(t){return"true"===t.contentEditable}},{key:"isNativeInput",value:function(t){return!(!t||!t.tagName)&&["INPUT","TEXTAREA"].includes(t.tagName)}},{key:"canSetCaret",value:function(e){var n=!0;if(t.isNativeInput(e))switch(e.type){case"file":case"checkbox":case"radio":case"hidden":case"submit":case"button":case"image":case"reset":n=!1}else n=t.isContentEditable(e);return n}},{key:"isNodeEmpty",value:function(t){return!(this.isSingleTag(t)&&!this.isLineBreakTag(t))&&0===(this.isElement(t)&&this.isNativeInput(t)?t.value:t.textContent.replace("???","")).trim().length}},{key:"isLeaf",value:function(t){return!!t&&0===t.childNodes.length}},{key:"isEmpty",value:function(t){t.normalize();for(var e=[t];e.length>0;)if(t=e.shift()){if(this.isLeaf(t)&&!this.isNodeEmpty(t))return!1;t.childNodes&&e.push.apply(e,(0,r.default)(Array.from(t.childNodes)))}return!0}},{key:"isHTMLString",value:function(e){var n=t.make("div");return n.innerHTML=e,n.childElementCount>0}},{key:"getContentLength",value:function(e){return t.isNativeInput(e)?e.value.length:e.nodeType===Node.TEXT_NODE?e.length:e.textContent.length}},{key:"containsOnlyInlineElements",value:function(e){var n;return s.isString(e)?(n=document.createElement("div")).innerHTML=e:n=e,Array.from(n.children).every((function e(n){return!t.blockElements.includes(n.tagName.toLowerCase())&&Array.from(n.children).every(e)}))}},{key:"getDeepestBlockElements",value:function(e){return t.containsOnlyInlineElements(e)?[e]:Array.from(e.children).reduce((function(e,n){return[].concat((0,r.default)(e),(0,r.default)(t.getDeepestBlockElements(n)))}),[])}},{key:"getHolder",value:function(t){return s.isString(t)?document.getElementById(t):t}},{key:"isExtensionNode",value:function(t){return t&&["GRAMMARLY-EXTENSION"].includes(t.nodeName)}},{key:"isAnchor",value:function(t){return"a"===t.tagName.toLowerCase()}},{key:"offset",value:function(t){var e=t.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,o=window.pageYOffset||document.documentElement.scrollTop,r=e.top+o,i=e.left+n;return{top:r,left:i,bottom:r+e.height,right:i+e.width}}},{key:"allInputsSelector",get:function(){return"[contenteditable=true], textarea, input:not([type]), "+["text","password","email","number","search","tel","url"].map((function(t){return'input[type="'.concat(t,'"]')})).join(", ")}},{key:"blockElements",get:function(){return["address","article","aside","blockquote","canvas","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","noscript","ol","output","p","pre","ruby","section","table","tr","tfoot","ul","video"]}}]),t}();o.default=u,u.displayName="Dom",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o=n(69)("wks"),r=n(44),i=n(10).Symbol,a="function"==typeof i;(t.exports=function(t){return o[t]||(o[t]=a&&i[t]||(a?i:r)("Symbol."+t))}).store=o},function(t,e,n){var o=n(33),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},function(t,e){var n=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=n)},function(t,e,n){t.exports=!n(11)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var o=n(12),r=n(116),i=n(40),a=Object.defineProperty;e.f=n(18)?Object.defineProperty:function(t,e,n){if(o(t),e=i(e,!0),o(n),r)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var o=n(38);t.exports=function(t){return Object(o(t))}},function(t,e,n){var o=n(10),r=n(27),i=n(26),a=n(44)("src"),s=n(192),l=(""+s).split("toString");n(17).inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,n,s){var c="function"==typeof n;c&&(i(n,"name")||r(n,"name",e)),t[e]!==n&&(c&&(i(n,a)||r(n,a,t[e]?""+t[e]:l.join(String(e)))),t===o?t[e]=n:s?t[e]?t[e]=n:r(t,e,n):(delete t[e],r(t,e,n)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[a]||s.call(this)}))},function(t,e,n){var o=n(0),r=n(11),i=n(38),a=/"/g,s=function(t,e,n,o){var r=String(i(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(o).replace(a,"&quot;")+'"'),s+">"+r+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(s),o(o.P+o.F*r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},function(t,e,n){t.exports=n(147)},function(t,e){function n(t,e,n,o,r,i,a){try{var s=t[i](a),l=s.value}catch(t){return void n(t)}s.done?e(l):Promise.resolve(l).then(o,r)}t.exports=function(t){return function(){var e=this,o=arguments;return new Promise((function(r,i){var a=t.apply(e,o);function s(t){n(a,r,i,s,l,"next",t)}function l(t){n(a,r,i,s,l,"throw",t)}s(void 0)}))}}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(7),n(14)],void 0===(i="function"==typeof(o=function(o,r,i,a,s){"use strict";var l=n(8),c=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=c(r),i=c(i),a=l(a),s=c(s);var u=function(){function t(){(0,r.default)(this,t),this.instance=null,this.selection=null,this.savedSelectionRange=null,this.isFakeBackgroundEnabled=!1,this.commandBackground="backColor",this.commandRemoveFormat="removeFormat"}return(0,i.default)(t,[{key:"removeFakeBackground",value:function(){this.isFakeBackgroundEnabled&&(this.isFakeBackgroundEnabled=!1,document.execCommand(this.commandRemoveFormat))}},{key:"setFakeBackground",value:function(){document.execCommand(this.commandBackground,!1,"#a8d6ff"),this.isFakeBackgroundEnabled=!0}},{key:"save",value:function(){this.savedSelectionRange=t.range}},{key:"restore",value:function(){if(this.savedSelectionRange){var t=window.getSelection();t.removeAllRanges(),t.addRange(this.savedSelectionRange)}}},{key:"clearSaved",value:function(){this.savedSelectionRange=null}},{key:"collapseToEnd",value:function(){var t=window.getSelection(),e=document.createRange();e.selectNodeContents(t.focusNode),e.collapse(!1),t.removeAllRanges(),t.addRange(e)}},{key:"findParentTag",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,o=window.getSelection(),r=null;if(!o||!o.anchorNode||!o.focusNode)return null;var i=[o.anchorNode,o.focusNode];return i.forEach((function(o){for(var i=n;i>0&&o.parentNode&&(o.tagName!==t||(r=o,e&&o.classList&&!o.classList.contains(e)&&(r=null),!r));)o=o.parentNode,i--})),r}},{key:"expandToTag",value:function(t){var e=window.getSelection();e.removeAllRanges();var n=document.createRange();n.selectNodeContents(t),e.addRange(n)}}],[{key:"isSelectionAtEditor",value:function(e){if(!e)return!1;var n=e.anchorNode||e.focusNode;n&&n.nodeType===Node.TEXT_NODE&&(n=n.parentNode);var o=null;return n&&n instanceof Element&&(o=n.closest(".".concat(t.CSS.editorZone))),!!o&&o.nodeType===Node.ELEMENT_NODE}},{key:"isRangeAtEditor",value:function(e){if(e){var n=e.startContainer;n&&n.nodeType===Node.TEXT_NODE&&(n=n.parentNode);var o=null;return n&&n instanceof Element&&(o=n.closest(".".concat(t.CSS.editorZone))),!!o&&o.nodeType===Node.ELEMENT_NODE}}},{key:"getRangeFromSelection",value:function(t){return t&&t.rangeCount?t.getRangeAt(0):null}},{key:"get",value:function(){return window.getSelection()}},{key:"setCursor",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=document.createRange(),o=window.getSelection();if(s.default.isNativeInput(t)){if(!s.default.canSetCaret(t))return;return t.focus(),t.selectionStart=t.selectionEnd=e,t.getBoundingClientRect()}return n.setStart(t,e),n.setEnd(t,e),o.removeAllRanges(),o.addRange(n),n.getBoundingClientRect()}},{key:"addFakeCursor",value:function(e){var n=t.range,o=s.default.make("span","codex-editor__fake-cursor");o.dataset.mutationFree="true",!n||e&&!e.contains(n.startContainer)||(n.collapse(),n.insertNode(o))}},{key:"removeFakeCursor",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body,e=s.default.find(t,".codex-editor__fake-cursor");e&&e.remove()}},{key:"CSS",get:function(){return{editorWrapper:"codex-editor",editorZone:"codex-editor__redactor"}}},{key:"anchorNode",get:function(){var t=window.getSelection();return t?t.anchorNode:null}},{key:"anchorElement",get:function(){var t=window.getSelection();if(!t)return null;var e=t.anchorNode;return e?s.default.isElement(e)?e:e.parentElement:null}},{key:"anchorOffset",get:function(){var t=window.getSelection();return t?t.anchorOffset:null}},{key:"isCollapsed",get:function(){var t=window.getSelection();return t?t.isCollapsed:null}},{key:"isAtEditor",get:function(){return this.isSelectionAtEditor(t.get())}},{key:"isSelectionExists",get:function(){return!!t.get().anchorNode}},{key:"range",get:function(){return this.getRangeFromSelection(this.get())}},{key:"rect",get:function(){var t,e=document.selection,n={x:0,y:0,width:0,height:0};if(e&&"Control"!==e.type)return t=(e=e).createRange(),n.x=t.boundingLeft,n.y=t.boundingTop,n.width=t.boundingWidth,n.height=t.boundingHeight,n;if(!window.getSelection)return a.log("Method window.getSelection is not supported","warn"),n;if(null===(e=window.getSelection()).rangeCount||isNaN(e.rangeCount))return a.log("Method SelectionUtils.rangeCount is not supported","warn"),n;if(0===e.rangeCount)return n;if((t=e.getRangeAt(0).cloneRange()).getBoundingClientRect&&(n=t.getBoundingClientRect()),0===n.x&&0===n.y){var o=document.createElement("span");if(o.getBoundingClientRect){o.appendChild(document.createTextNode("???")),t.insertNode(o),n=o.getBoundingClientRect();var r=o.parentNode;r.removeChild(o),r.normalize()}}return n}},{key:"text",get:function(){return window.getSelection?window.getSelection().toString():""}}]),t}();o.default=u,u.displayName="SelectionUtils",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var o=n(19),r=n(43);t.exports=n(18)?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var o=n(62),r=n(38);t.exports=function(t){return o(r(t))}},function(t,e,n){"use strict";var o=n(11);t.exports=function(t,e){return!!t&&o((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},function(t,e,n){var o=n(361),r=n(362),i=n(148),a=n(363);t.exports=function(t,e){return o(t)||r(t,e)||i(t,e)||a()}},function(t,e,n){var o=n(32);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e,n){var o=n(63),r=n(43),i=n(28),a=n(40),s=n(26),l=n(116),c=Object.getOwnPropertyDescriptor;e.f=n(18)?c:function(t,e){if(t=i(t),e=a(e,!0),l)try{return c(t,e)}catch(t){}if(s(t,e))return r(!o.f.call(t,e),t[e])}},function(t,e,n){var o=n(0),r=n(17),i=n(11);t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],a={};a[t]=e(n),o(o.S+o.F*i((function(){n(1)})),"Object",a)}},function(t,e,n){var o=n(31),r=n(62),i=n(20),a=n(16),s=n(132);t.exports=function(t,e){var n=1==t,l=2==t,c=3==t,u=4==t,f=6==t,d=5==t||f,p=e||s;return function(e,s,h){for(var v,g,y=i(e),b=r(y),m=o(s,h,3),k=a(b.length),x=0,w=n?p(e,k):l?p(e,0):void 0;k>x;x++)if((d||x in b)&&(g=m(v=b[x],x,y),t))if(n)w[x]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return x;case 2:w.push(v)}else if(u)return!1;return f?-1:c||u?u:w}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){"use strict";if(n(18)){var o=n(45),r=n(10),i=n(11),a=n(0),s=n(80),l=n(109),c=n(31),u=n(57),f=n(43),d=n(27),p=n(58),h=n(33),v=n(16),g=n(143),y=n(47),b=n(40),m=n(26),k=n(64),x=n(13),w=n(20),S=n(101),T=n(48),E=n(50),B=n(49).f,C=n(103),_=n(44),I=n(15),O=n(36),M=n(70),R=n(65),A=n(105),N=n(55),L=n(73),P=n(56),D=n(104),j=n(134),F=n(19),H=n(34),U=F.f,z=H.f,W=r.RangeError,Y=r.TypeError,V=r.Uint8Array,X=Array.prototype,K=l.ArrayBuffer,G=l.DataView,Z=O(0),q=O(2),J=O(3),$=O(4),Q=O(5),tt=O(6),et=M(!0),nt=M(!1),ot=A.values,rt=A.keys,it=A.entries,at=X.lastIndexOf,st=X.reduce,lt=X.reduceRight,ct=X.join,ut=X.sort,ft=X.slice,dt=X.toString,pt=X.toLocaleString,ht=I("iterator"),vt=I("toStringTag"),gt=_("typed_constructor"),yt=_("def_constructor"),bt=s.CONSTR,mt=s.TYPED,kt=s.VIEW,xt=O(1,(function(t,e){return Bt(R(t,t[yt]),e)})),wt=i((function(){return 1===new V(new Uint16Array([1]).buffer)[0]})),St=!!V&&!!V.prototype.set&&i((function(){new V(1).set({})})),Tt=function(t,e){var n=h(t);if(n<0||n%e)throw W("Wrong offset!");return n},Et=function(t){if(x(t)&&mt in t)return t;throw Y(t+" is not a typed array!")},Bt=function(t,e){if(!x(t)||!(gt in t))throw Y("It is not a typed array constructor!");return new t(e)},Ct=function(t,e){return _t(R(t,t[yt]),e)},_t=function(t,e){for(var n=0,o=e.length,r=Bt(t,o);o>n;)r[n]=e[n++];return r},It=function(t,e,n){U(t,e,{get:function(){return this._d[n]}})},Ot=function(t){var e,n,o,r,i,a,s=w(t),l=arguments.length,u=l>1?arguments[1]:void 0,f=void 0!==u,d=C(s);if(null!=d&&!S(d)){for(a=d.call(s),o=[],e=0;!(i=a.next()).done;e++)o.push(i.value);s=o}for(f&&l>2&&(u=c(u,arguments[2],2)),e=0,n=v(s.length),r=Bt(this,n);n>e;e++)r[e]=f?u(s[e],e):s[e];return r},Mt=function(){for(var t=0,e=arguments.length,n=Bt(this,e);e>t;)n[t]=arguments[t++];return n},Rt=!!V&&i((function(){pt.call(new V(1))})),At=function(){return pt.apply(Rt?ft.call(Et(this)):Et(this),arguments)},Nt={copyWithin:function(t,e){return j.call(Et(this),t,e,arguments.length>2?arguments[2]:void 0)},every:function(t){return $(Et(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return D.apply(Et(this),arguments)},filter:function(t){return Ct(this,q(Et(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return Q(Et(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return tt(Et(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){Z(Et(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return nt(Et(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return et(Et(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return ct.apply(Et(this),arguments)},lastIndexOf:function(t){return at.apply(Et(this),arguments)},map:function(t){return xt(Et(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return st.apply(Et(this),arguments)},reduceRight:function(t){return lt.apply(Et(this),arguments)},reverse:function(){for(var t,e=Et(this).length,n=Math.floor(e/2),o=0;o<n;)t=this[o],this[o++]=this[--e],this[e]=t;return this},some:function(t){return J(Et(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return ut.call(Et(this),t)},subarray:function(t,e){var n=Et(this),o=n.length,r=y(t,o);return new(R(n,n[yt]))(n.buffer,n.byteOffset+r*n.BYTES_PER_ELEMENT,v((void 0===e?o:y(e,o))-r))}},Lt=function(t,e){return Ct(this,ft.call(Et(this),t,e))},Pt=function(t){Et(this);var e=Tt(arguments[1],1),n=this.length,o=w(t),r=v(o.length),i=0;if(r+e>n)throw W("Wrong length!");for(;i<r;)this[e+i]=o[i++]},Dt={entries:function(){return it.call(Et(this))},keys:function(){return rt.call(Et(this))},values:function(){return ot.call(Et(this))}},jt=function(t,e){return x(t)&&t[mt]&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},Ft=function(t,e){return jt(t,e=b(e,!0))?f(2,t[e]):z(t,e)},Ht=function(t,e,n){return!(jt(t,e=b(e,!0))&&x(n)&&m(n,"value"))||m(n,"get")||m(n,"set")||n.configurable||m(n,"writable")&&!n.writable||m(n,"enumerable")&&!n.enumerable?U(t,e,n):(t[e]=n.value,t)};bt||(H.f=Ft,F.f=Ht),a(a.S+a.F*!bt,"Object",{getOwnPropertyDescriptor:Ft,defineProperty:Ht}),i((function(){dt.call({})}))&&(dt=pt=function(){return ct.call(this)});var Ut=p({},Nt);p(Ut,Dt),d(Ut,ht,Dt.values),p(Ut,{slice:Lt,set:Pt,constructor:function(){},toString:dt,toLocaleString:At}),It(Ut,"buffer","b"),It(Ut,"byteOffset","o"),It(Ut,"byteLength","l"),It(Ut,"length","e"),U(Ut,vt,{get:function(){return this[mt]}}),t.exports=function(t,e,n,l){var c=t+((l=!!l)?"Clamped":"")+"Array",f="get"+t,p="set"+t,h=r[c],y=h||{},b=h&&E(h),m=!h||!s.ABV,w={},S=h&&h.prototype,C=function(t,n){U(t,n,{get:function(){return function(t,n){var o=t._d;return o.v[f](n*e+o.o,wt)}(this,n)},set:function(t){return function(t,n,o){var r=t._d;l&&(o=(o=Math.round(o))<0?0:o>255?255:255&o),r.v[p](n*e+r.o,o,wt)}(this,n,t)},enumerable:!0})};m?(h=n((function(t,n,o,r){u(t,h,c,"_d");var i,a,s,l,f=0,p=0;if(x(n)){if(!(n instanceof K||"ArrayBuffer"==(l=k(n))||"SharedArrayBuffer"==l))return mt in n?_t(h,n):Ot.call(h,n);i=n,p=Tt(o,e);var y=n.byteLength;if(void 0===r){if(y%e)throw W("Wrong length!");if((a=y-p)<0)throw W("Wrong length!")}else if((a=v(r)*e)+p>y)throw W("Wrong length!");s=a/e}else s=g(n),i=new K(a=s*e);for(d(t,"_d",{b:i,o:p,l:a,e:s,v:new G(i)});f<s;)C(t,f++)})),S=h.prototype=T(Ut),d(S,"constructor",h)):i((function(){h(1)}))&&i((function(){new h(-1)}))&&L((function(t){new h,new h(null),new h(1.5),new h(t)}),!0)||(h=n((function(t,n,o,r){var i;return u(t,h,c),x(n)?n instanceof K||"ArrayBuffer"==(i=k(n))||"SharedArrayBuffer"==i?void 0!==r?new y(n,Tt(o,e),r):void 0!==o?new y(n,Tt(o,e)):new y(n):mt in n?_t(h,n):Ot.call(h,n):new y(g(n))})),Z(b!==Function.prototype?B(y).concat(B(b)):B(y),(function(t){t in h||d(h,t,y[t])})),h.prototype=S,o||(S.constructor=h));var _=S[ht],I=!!_&&("values"==_.name||null==_.name),O=Dt.values;d(h,gt,!0),d(S,mt,c),d(S,kt,!0),d(S,yt,h),(l?new h(1)[vt]==c:vt in S)||U(S,vt,{get:function(){return c}}),w[c]=h,a(a.G+a.W+a.F*(h!=y),w),a(a.S,c,{BYTES_PER_ELEMENT:e}),a(a.S+a.F*i((function(){y.of.call(h,1)})),c,{from:Ot,of:Mt}),"BYTES_PER_ELEMENT"in S||d(S,"BYTES_PER_ELEMENT",e),a(a.P,c,Nt),P(c),a(a.P+a.F*St,c,{set:Pt}),a(a.P+a.F*!I,c,Dt),o||S.toString==dt||(S.toString=dt),a(a.P+a.F*i((function(){new h(1).slice()})),c,{slice:Lt}),a(a.P+a.F*(i((function(){return[1,2].toLocaleString()!=new h([1,2]).toLocaleString()}))||!i((function(){S.toLocaleString.call([1,2])}))),c,{toLocaleString:At}),N[c]=I?_:O,o||I||d(S,ht,O)}}else t.exports=function(){}},function(t,e,n){var o=n(13);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var o=n(44)("meta"),r=n(13),i=n(26),a=n(19).f,s=0,l=Object.isExtensible||function(){return!0},c=!n(11)((function(){return l(Object.preventExtensions({}))})),u=function(t){a(t,o,{value:{i:"O"+ ++s,w:{}}})},f=t.exports={KEY:o,NEED:!1,fastKey:function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,o)){if(!l(t))return"F";if(!e)return"E";u(t)}return t[o].i},getWeak:function(t,e){if(!i(t,o)){if(!l(t))return!0;if(!e)return!1;u(t)}return t[o].w},onFreeze:function(t){return c&&f.NEED&&l(t)&&!i(t,o)&&u(t),t}}},function(t,e,n){var o=n(368),r=n(369),i=n(148),a=n(370);t.exports=function(t){return o(t)||r(t)||i(t)||a()}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e){t.exports=!1},function(t,e,n){var o=n(118),r=n(88);t.exports=Object.keys||function(t){return o(t,r)}},function(t,e,n){var o=n(33),r=Math.max,i=Math.min;t.exports=function(t,e){return(t=o(t))<0?r(t+e,0):i(t,e)}},function(t,e,n){var o=n(12),r=n(119),i=n(88),a=n(87)("IE_PROTO"),s=function(){},l=function(){var t,e=n(85)("iframe"),o=i.length;for(e.style.display="none",n(89).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;o--;)delete l.prototype[i[o]];return l()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=o(t),n=new s,s.prototype=null,n[a]=t):n=l(),void 0===e?n:r(n,e)}},function(t,e,n){var o=n(118),r=n(88).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,r)}},function(t,e,n){var o=n(26),r=n(20),i=n(87)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),o(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){var o=n(15)("unscopables"),r=Array.prototype;null==r[o]&&n(27)(r,o,{}),t.exports=function(t){r[o][t]=!0}},function(t,e,n){var o=n(13);t.exports=function(t,e){if(!o(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},function(t,e,n){var o=n(19).f,r=n(26),i=n(15)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,i)&&o(t,i,{configurable:!0,value:e})}},function(t,e,n){var o=n(0),r=n(38),i=n(11),a=n(91),s="["+a+"]",l=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),u=function(t,e,n){var r={},s=i((function(){return!!a[t]()||"?????"!="?????"[t]()})),l=r[t]=s?e(f):a[t];n&&(r[n]=l),o(o.P+o.F*s,"String",r)},f=u.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(c,"")),t};t.exports=u},function(t,e){t.exports={}},function(t,e,n){"use strict";var o=n(10),r=n(19),i=n(18),a=n(15)("species");t.exports=function(t){var e=o[t];i&&e&&!e[a]&&r.f(e,a,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports=function(t,e,n,o){if(!(t instanceof e)||void 0!==o&&o in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var o=n(21);t.exports=function(t,e,n){for(var r in e)o(t,r,e[r],n);return t}},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(150)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var l=function(){function t(){(0,r.default)(this,t)}return(0,i.default)(t,null,[{key:"ui",value:function(e,n){return t._t(e,n)}},{key:"t",value:function(e,n){return t._t(e,n)}},{key:"setDictionary",value:function(e){t.currentDictionary=e}},{key:"_t",value:function(e,n){var o=t.getNamespace(e);return o&&o[n]?o[n]:n}},{key:"getNamespace",value:function(e){return e.split(".").reduce((function(t,e){return t&&Object.keys(t).length?t[e]:{}}),t.currentDictionary)}}]),t}();o.default=l,l.displayName="I18n",l.currentDictionary=a.default,t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(380),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s){"use strict";var l=n(8),c=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=c(r),i=c(i),a=c(a),s=l(s);var u=function(){function t(e){var n=this;(0,r.default)(this,t),this.iterator=null,this.activated=!1,this.onKeyDown=function(e){if(n.isEventReadyForHandling(e))switch(t.usedKeys.includes(e.keyCode)&&e.preventDefault(),e.keyCode){case s.keyCodes.TAB:n.handleTabPress(e);break;case s.keyCodes.LEFT:case s.keyCodes.UP:n.flipLeft();break;case s.keyCodes.RIGHT:case s.keyCodes.DOWN:n.flipRight();break;case s.keyCodes.ENTER:n.handleEnterPress(e)}},this.iterator=new a.default(e.items,e.focusedItemClass),this.activateCallback=e.activateCallback,this.allowedKeys=e.allowedKeys||t.usedKeys}return(0,i.default)(t,[{key:"activate",value:function(t){this.activated=!0,t&&this.iterator.setItems(t),document.addEventListener("keydown",this.onKeyDown)}},{key:"deactivate",value:function(){this.activated=!1,this.dropCursor(),document.removeEventListener("keydown",this.onKeyDown)}},{key:"focusFirst",value:function(){this.dropCursor(),this.flipRight()}},{key:"flipLeft",value:function(){this.iterator.previous(),this.flipCallback()}},{key:"flipRight",value:function(){this.iterator.next(),this.flipCallback()}},{key:"hasFocus",value:function(){return!!this.iterator.currentItem}},{key:"dropCursor",value:function(){this.iterator.dropCursor()}},{key:"isEventReadyForHandling",value:function(t){return this.activated&&this.allowedKeys.includes(t.keyCode)}},{key:"handleTabPress",value:function(t){switch(t.shiftKey?a.default.directions.LEFT:a.default.directions.RIGHT){case a.default.directions.RIGHT:this.flipRight();break;case a.default.directions.LEFT:this.flipLeft()}}},{key:"handleEnterPress",value:function(t){this.activated&&(this.iterator.currentItem&&this.iterator.currentItem.click(),s.isFunction(this.activateCallback)&&this.activateCallback(this.iterator.currentItem),t.preventDefault(),t.stopPropagation())}},{key:"flipCallback",value:function(){this.iterator.currentItem&&this.iterator.currentItem.scrollIntoViewIfNeeded()}}],[{key:"usedKeys",get:function(){return[s.keyCodes.TAB,s.keyCodes.LEFT,s.keyCodes.RIGHT,s.keyCodes.ENTER,s.keyCodes.UP,s.keyCodes.DOWN]}}]),t}();o.default=u,u.displayName="Flipper",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o=n(37);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var o=n(37),r=n(15)("toStringTag"),i="Arguments"==o(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),r))?n:i?o(e):"Object"==(a=o(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){var o=n(12),r=n(32),i=n(15)("species");t.exports=function(t,e){var n,a=o(t).constructor;return void 0===a||null==(n=o(a)[i])?e:r(n)}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(7),n(378)],void 0===(i="function"==typeof(o=function(t,e,o){"use strict";var r=n(1),i=n(8);function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={tags:e},r=new o.default(n);return r.clean(t)}function s(t,n){return Array.isArray(t)?(i=n,t.map((function(t){return s(t,i)}))):e.isObject(t)?function(t,n){var o,r={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var a=t[i],l=(o=n[i],e.isObject(o)||e.isBoolean(o)||e.isFunction(o)?n[i]:n);r[i]=s(a,l)}return r}(t,n):e.isString(t)?(o=t,r=n,e.isObject(r)?a(o,r):!1===r?a(o,{}):o):t;var o,r,i}Object.defineProperty(t,"__esModule",{value:!0}),t.sanitizeBlocks=function(t,n){return t.map((function(t){var o=e.isFunction(n)?n(t.tool):n;return e.isEmpty(o)||(t.data=s(t.data,o)),t}))},t.clean=a,e=i(e),o=r(o)})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(30),n(23),n(24),n(42),n(2),n(3),n(152),n(114),n(5),n(6),n(4),n(14),n(7),n(112),n(25),n(81)],void 0===(i="function"==typeof(o=function(t,e,o,r,i,a,s,l,c,u,f,d,p,h,v,g,y){"use strict";var b,m=n(8),k=n(1);function x(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.BlockToolAPI=void 0,e=k(e),o=k(o),r=k(r),i=k(i),a=k(a),s=k(s),l=k(l),c=k(c),u=k(u),f=k(f),d=k(d),p=k(p),h=m(h),v=k(v),g=k(g),y=k(y),t.BlockToolAPI=b,function(t){t.APPEND_CALLBACK="appendCallback",t.RENDERED="rendered",t.MOVED="moved",t.UPDATED="updated",t.REMOVED="removed",t.ON_PASTE="onPaste"}(b||(t.BlockToolAPI=b={}));var w=function(t){(0,u.default)(S,t);var n,y,m,k,w=(n=S,function(){var t,e=(0,d.default)(n);if(x()){var o=(0,d.default)(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return(0,f.default)(this,t)});function S(t){var e,n=t.id,o=void 0===n?h.generateBlockId():n,r=t.data,s=t.tool,c=t.api,u=t.readOnly,f=t.tunesData;return(0,a.default)(this,S),(e=w.call(this)).cachedInputs=[],e.tunesInstances=new Map,e.defaultTunesInstances=new Map,e.unavailableTunesData={},e.inputIndex=0,e.modificationDebounceTimer=450,e.didMutated=h.debounce((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=t instanceof InputEvent||!t.some((function(t){var e=t.addedNodes,n=void 0===e?[]:e,o=t.removedNodes;return[].concat((0,i.default)(Array.from(n)),(0,i.default)(Array.from(o))).some((function(t){return p.default.isElement(t)&&"true"===t.dataset.mutationFree}))}));n&&(e.cachedInputs=[],e.updateCurrentInput(),e.call(b.UPDATED),e.emit("didMutated",(0,l.default)(e)))}),e.modificationDebounceTimer),e.handleFocus=function(){e.cachedInputs=[],e.updateCurrentInput()},e.name=s.name,e.id=o,e.settings=s.settings,e.config=s.settings.config||{},e.api=c,e.blockAPI=new v.default((0,l.default)(e)),e.mutationObserver=new MutationObserver(e.didMutated),e.tool=s,e.toolInstance=s.create(r,e.blockAPI,u),e.tunes=s.tunes,e.composeTunes(f),e.holder=e.compose(),e}return(0,s.default)(S,[{key:"call",value:function(t,e){if(h.isFunction(this.toolInstance[t])){t===b.APPEND_CALLBACK&&h.log("`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead","warn");try{this.toolInstance[t].call(this.toolInstance,e)}catch(e){h.log("Error during '".concat(t,"' call: ").concat(e.message),"error")}}}},{key:"mergeWith",value:(k=(0,r.default)(o.default.mark((function t(e){return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.toolInstance.merge(e);case 2:case"end":return t.stop()}}),t,this)}))),function(t){return k.apply(this,arguments)})},{key:"save",value:(m=(0,r.default)(o.default.mark((function t(){var n,r,a,s,l=this;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.toolInstance.save(this.pluginsContent);case 2:return n=t.sent,r=this.unavailableTunesData,[].concat((0,i.default)(this.tunesInstances.entries()),(0,i.default)(this.defaultTunesInstances.entries())).forEach((function(t){var n=(0,e.default)(t,2),o=n[0],i=n[1];if(h.isFunction(i.save))try{r[o]=i.save()}catch(t){h.log("Tune ".concat(i.constructor.name," save method throws an Error %o"),"warn",t)}})),a=window.performance.now(),t.abrupt("return",Promise.resolve(n).then((function(t){return s=window.performance.now(),{id:l.id,tool:l.name,data:t,tunes:r,time:s-a}})).catch((function(t){h.log("Saving proccess for ".concat(l.name," tool failed due to the ").concat(t),"log","red")})));case 7:case"end":return t.stop()}}),t,this)}))),function(){return m.apply(this,arguments)})},{key:"validate",value:(y=(0,r.default)(o.default.mark((function t(e){var n;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!0,!(this.toolInstance.validate instanceof Function)){t.next=5;break}return t.next=4,this.toolInstance.validate(e);case 4:n=t.sent;case 5:return t.abrupt("return",n);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return y.apply(this,arguments)})},{key:"renderTunes",value:function(){var t=document.createDocumentFragment(),e=document.createDocumentFragment();return this.tunesInstances.forEach((function(e){p.default.append(t,e.render())})),this.defaultTunesInstances.forEach((function(t){p.default.append(e,t.render())})),[t,e]}},{key:"updateCurrentInput",value:function(){this.currentInput=p.default.isNativeInput(document.activeElement)||!g.default.anchorNode?document.activeElement:g.default.anchorNode}},{key:"willSelect",value:function(){this.mutationObserver.observe(this.holder.firstElementChild,{childList:!0,subtree:!0,characterData:!0,attributes:!0}),this.addInputEvents()}},{key:"willUnselect",value:function(){this.mutationObserver.disconnect(),this.removeInputEvents()}},{key:"dispatchChange",value:function(){this.didMutated()}},{key:"destroy",value:function(){(0,c.default)((0,d.default)(S.prototype),"destroy",this).call(this),h.isFunction(this.toolInstance.destroy)&&this.toolInstance.destroy()}},{key:"renderSettings",value:function(){if(h.isFunction(this.toolInstance.renderSettings))return this.toolInstance.renderSettings()}},{key:"compose",value:function(){var t=p.default.make("div",S.CSS.wrapper),e=p.default.make("div",S.CSS.content),n=this.toolInstance.render();e.appendChild(n);var o=e;return[].concat((0,i.default)(this.tunesInstances.values()),(0,i.default)(this.defaultTunesInstances.values())).forEach((function(t){if(h.isFunction(t.wrap))try{o=t.wrap(o)}catch(e){h.log("Tune ".concat(t.constructor.name," wrap method throws an Error %o"),"warn",e)}})),t.appendChild(o),t}},{key:"composeTunes",value:function(t){var n=this;Array.from(this.tunes.values()).forEach((function(e){(e.isInternal?n.defaultTunesInstances:n.tunesInstances).set(e.name,e.create(t[e.name],n.blockAPI))})),Object.entries(t).forEach((function(t){var o=(0,e.default)(t,2),r=o[0],i=o[1];n.tunesInstances.has(r)||(n.unavailableTunesData[r]=i)}))}},{key:"addInputEvents",value:function(){var t=this;this.inputs.forEach((function(e){e.addEventListener("focus",t.handleFocus),p.default.isNativeInput(e)&&e.addEventListener("input",t.didMutated)}))}},{key:"removeInputEvents",value:function(){var t=this;this.inputs.forEach((function(e){e.removeEventListener("focus",t.handleFocus),p.default.isNativeInput(e)&&e.removeEventListener("input",t.didMutated)}))}},{key:"inputs",get:function(){if(0!==this.cachedInputs.length)return this.cachedInputs;var t=p.default.findAllInputs(this.holder);return this.inputIndex>t.length-1&&(this.inputIndex=t.length-1),this.cachedInputs=t,t}},{key:"currentInput",get:function(){return this.inputs[this.inputIndex]},set:function(t){var e=this.inputs.findIndex((function(e){return e===t||e.contains(t)}));-1!==e&&(this.inputIndex=e)}},{key:"firstInput",get:function(){return this.inputs[0]}},{key:"lastInput",get:function(){var t=this.inputs;return t[t.length-1]}},{key:"nextInput",get:function(){return this.inputs[this.inputIndex+1]}},{key:"previousInput",get:function(){return this.inputs[this.inputIndex-1]}},{key:"data",get:function(){return this.save().then((function(t){return t&&!h.isEmpty(t.data)?t.data:{}}))}},{key:"sanitize",get:function(){return this.tool.sanitizeConfig}},{key:"mergeable",get:function(){return h.isFunction(this.toolInstance.merge)}},{key:"isEmpty",get:function(){var t=p.default.isEmpty(this.pluginsContent),e=!this.hasMedia;return t&&e}},{key:"hasMedia",get:function(){return!!this.holder.querySelector(["img","iframe","video","audio","source","input","textarea","twitterwidget"].join(","))}},{key:"focused",set:function(t){this.holder.classList.toggle(S.CSS.focused,t)},get:function(){return this.holder.classList.contains(S.CSS.focused)}},{key:"selected",set:function(t){t?(this.holder.classList.add(S.CSS.selected),g.default.addFakeCursor(this.holder)):(this.holder.classList.remove(S.CSS.selected),g.default.removeFakeCursor(this.holder))},get:function(){return this.holder.classList.contains(S.CSS.selected)}},{key:"stretched",set:function(t){this.holder.classList.toggle(S.CSS.wrapperStretched,t)},get:function(){return this.holder.classList.contains(S.CSS.wrapperStretched)}},{key:"dropTarget",set:function(t){this.holder.classList.toggle(S.CSS.dropTarget,t)}},{key:"pluginsContent",get:function(){var t=this.holder.querySelector(".".concat(S.CSS.content));if(t&&t.childNodes.length)for(var e=t.childNodes.length-1;e>=0;e--){var n=t.childNodes[e];if(!p.default.isExtensionNode(n))return n}return null}}],[{key:"CSS",get:function(){return{wrapper:"ce-block",wrapperStretched:"ce-block--stretched",content:"ce-block__content",focused:"ce-block--focused",selected:"ce-block--selected",dropTarget:"ce-block--drop-target"}}}]),S}(y.default);t.default=w,w.displayName="Block"})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(7)],void 0===(i="function"==typeof(o=function(t,e,o,r){"use strict";var i,a,s,l,c,u,f=n(8),d=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.InternalTuneSettings=t.InternalInlineToolSettings=t.InternalBlockToolSettings=t.CommonInternalSettings=t.UserSettings=t.ToolType=void 0,e=d(e),o=d(o),r=f(r),t.ToolType=i,function(t){t[t.Block=0]="Block",t[t.Inline=1]="Inline",t[t.Tune=2]="Tune"}(i||(t.ToolType=i={})),t.UserSettings=a,function(t){t.Shortcut="shortcut",t.Toolbox="toolbox",t.EnabledInlineTools="inlineToolbar",t.EnabledBlockTunes="tunes",t.Config="config"}(a||(t.UserSettings=a={})),t.CommonInternalSettings=s,function(t){t.Shortcut="shortcut",t.SanitizeConfig="sanitize"}(s||(t.CommonInternalSettings=s={})),t.InternalBlockToolSettings=l,function(t){t.IsEnabledLineBreaks="enableLineBreaks",t.Toolbox="toolbox",t.ConversionConfig="conversionConfig",t.IsReadOnlySupported="isReadOnlySupported",t.PasteConfig="pasteConfig"}(l||(t.InternalBlockToolSettings=l={})),t.InternalInlineToolSettings=c,function(t){t.IsInline="isInline",t.Title="title"}(c||(t.InternalInlineToolSettings=c={})),t.InternalTuneSettings=u,function(t){t.IsTune="isTune"}(u||(t.InternalTuneSettings=u={}));var p=function(){function t(n){var o=n.name,r=n.constructable,i=n.config,a=n.api,s=n.isDefault,l=n.isInternal,c=void 0!==l&&l,u=n.defaultPlaceholder;(0,e.default)(this,t),this.api=a,this.name=o,this.constructable=r,this.config=i,this.isDefault=s,this.isInternal=c,this.defaultPlaceholder=u}return(0,o.default)(t,[{key:"reset",value:function(){if(r.isFunction(this.constructable.reset))return this.constructable.reset()}},{key:"prepare",value:function(){if(r.isFunction(this.constructable.prepare))return this.constructable.prepare({toolName:this.name,config:this.settings})}},{key:"isInline",value:function(){return this.type===i.Inline}},{key:"isBlock",value:function(){return this.type===i.Block}},{key:"isTune",value:function(){return this.type===i.Tune}},{key:"settings",get:function(){var t=this.config[a.Config]||{};return this.isDefault&&!("placeholder"in t)&&this.defaultPlaceholder&&(t.placeholder=this.defaultPlaceholder),t}},{key:"shortcut",get:function(){var t=this.constructable[s.Shortcut];return this.config[a.Shortcut]||t}},{key:"sanitizeConfig",get:function(){return this.constructable[s.SanitizeConfig]||{}}}]),t}();t.default=p,p.displayName="BaseTool"})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o=n(17),r=n(10),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:o.version,mode:n(45)?"pure":"global",copyright:"?? 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var o=n(28),r=n(16),i=n(47);t.exports=function(t){return function(e,n,a){var s,l=o(e),c=r(l.length),u=i(a,c);if(t&&n!=n){for(;c>u;)if((s=l[u++])!=s)return!0}else for(;c>u;u++)if((t||u in l)&&l[u]===n)return t||u||0;return!t&&-1}}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var o=n(37);t.exports=Array.isArray||function(t){return"Array"==o(t)}},function(t,e,n){var o=n(15)("iterator"),r=!1;try{var i=[7][o]();i.return=function(){r=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var i=[7],a=i[o]();a.next=function(){return{done:n=!0}},i[o]=function(){return a},t(i)}catch(t){}return n}},function(t,e,n){"use strict";var o=n(12);t.exports=function(){var t=o(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";var o=n(64),r=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==o(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},function(t,e,n){"use strict";n(136);var o=n(21),r=n(27),i=n(11),a=n(38),s=n(15),l=n(106),c=s("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var d=s(t),p=!i((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),h=p?!i((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[c]=function(){return n}),n[d](""),!e})):void 0;if(!p||!h||"replace"===t&&!u||"split"===t&&!f){var v=/./[d],g=n(a,d,""[t],(function(t,e,n,o,r){return e.exec===l?p&&!r?{done:!0,value:v.call(e,n,o)}:{done:!0,value:t.call(n,e,o)}:{done:!1}})),y=g[0],b=g[1];o(String.prototype,t,y),r(RegExp.prototype,d,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},function(t,e,n){var o=n(31),r=n(131),i=n(101),a=n(12),s=n(16),l=n(103),c={},u={};(e=t.exports=function(t,e,n,f,d){var p,h,v,g,y=d?function(){return t}:l(t),b=o(n,f,e?2:1),m=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(i(y)){for(p=s(t.length);p>m;m++)if((g=e?b(a(h=t[m])[0],h[1]):b(t[m]))===c||g===u)return g}else for(v=y.call(t);!(h=v.next()).done;)if((g=r(v,b,h.value,e))===c||g===u)return g}).BREAK=c,e.RETURN=u},function(t,e,n){var o=n(10).navigator;t.exports=o&&o.userAgent||""},function(t,e,n){"use strict";var o=n(10),r=n(0),i=n(21),a=n(58),s=n(41),l=n(77),c=n(57),u=n(13),f=n(11),d=n(73),p=n(53),h=n(92);t.exports=function(t,e,n,v,g,y){var b=o[t],m=b,k=g?"set":"add",x=m&&m.prototype,w={},S=function(t){var e=x[t];i(x,t,"delete"==t||"has"==t?function(t){return!(y&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return y&&!u(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof m&&(y||x.forEach&&!f((function(){(new m).entries().next()})))){var T=new m,E=T[k](y?{}:-0,1)!=T,B=f((function(){T.has(1)})),C=d((function(t){new m(t)})),_=!y&&f((function(){for(var t=new m,e=5;e--;)t[k](e,e);return!t.has(-0)}));C||((m=e((function(e,n){c(e,m,t);var o=h(new b,e,m);return null!=n&&l(n,g,o[k],o),o}))).prototype=x,x.constructor=m),(B||_)&&(S("delete"),S("has"),g&&S("get")),(_||E)&&S(k),y&&x.clear&&delete x.clear}else m=v.getConstructor(e,t,g,k),a(m.prototype,n),s.NEED=!0;return p(m,t),w[t]=m,r(r.G+r.W+r.F*(m!=b),w),y||v.setStrong(m,t,g),m}},function(t,e,n){for(var o,r=n(10),i=n(27),a=n(44),s=a("typed_array"),l=a("view"),c=!(!r.ArrayBuffer||!r.DataView),u=c,f=0,d="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");f<9;)(o=r[d[f++]])?(i(o.prototype,s,!0),i(o.prototype,l,!0)):u=!1;t.exports={ABV:c,CONSTR:u,TYPED:s,VIEW:l}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i);var l=function(){function t(){(0,r.default)(this,t),this.subscribers={}}return(0,i.default)(t,[{key:"on",value:function(t,e){t in this.subscribers||(this.subscribers[t]=[]),this.subscribers[t].push(e)}},{key:"once",value:function(t,e){var n=this;t in this.subscribers||(this.subscribers[t]=[]),this.subscribers[t].push((function o(r){var i=e(r),a=n.subscribers[t].indexOf(o);return-1!==a&&n.subscribers[t].splice(a,1),i}))}},{key:"emit",value:function(t,e){!(0,a.isEmpty)(this.subscribers)&&this.subscribers[t]&&this.subscribers[t].reduce((function(t,e){return e(t)||t}),e)}},{key:"off",value:function(t,e){for(var n=0;n<this.subscribers[t].length;n++)if(this.subscribers[t][n]===e){delete this.subscribers[t][n];break}}},{key:"destroy",value:function(){this.subscribers=null}}]),t}();o.default=l,l.displayName="EventsDispatcher",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),l=u(l);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,l.default)(e);if(f()){var o=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"getMethodsForTool",value:function(t){return Object.assign(this.methods,{i18n:this.Editor.I18nAPI.getMethodsForTool(t)})}},{key:"methods",get:function(){return{blocks:this.Editor.BlocksAPI.methods,caret:this.Editor.CaretAPI.methods,events:this.Editor.EventsAPI.methods,listeners:this.Editor.ListenersAPI.methods,notifier:this.Editor.NotifierAPI.methods,sanitizer:this.Editor.SanitizerAPI.methods,saver:this.Editor.SaverAPI.methods,selection:this.Editor.SelectionAPI.methods,styles:this.Editor.StylesAPI.classes,toolbar:this.Editor.ToolbarAPI.methods,inlineToolbar:this.Editor.InlineToolbarAPI.methods,tooltip:this.Editor.TooltipAPI.methods,i18n:this.Editor.I18nAPI.methods,readOnly:this.Editor.ReadOnlyAPI.methods,ui:this.Editor.UiAPI.methods}}}]),o}((c=u(c)).default);o.default=d,d.displayName="API",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9),n(14),n(7),n(60),n(84),n(113),n(385)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u,f,d,p,h,v){"use strict";var g=n(8),y=n(1);function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=y(r),i=y(i),a=y(a),s=y(s),l=y(l),c=y(c),u=y(u),f=g(f),d=y(d),h=y(h),v=g(v);var m=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,l.default)(e);if(b()){var o=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(t){var e,i=t.config,a=t.eventsDispatcher;return(0,r.default)(this,o),(e=n.call(this,{config:i,eventsDispatcher:a})).tooltip=new h.default,e}return(0,i.default)(o,[{key:"toggleReadOnly",value:function(t){t?(this.destroy(),this.Editor.BlockSettings.destroy(),this.disableModuleBindings()):(this.drawUI(),this.enableModuleBindings())}},{key:"moveAndOpen",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.Editor.BlockManager.currentBlock;if(this.toolboxInstance.close(),this.Editor.BlockSettings.close(),t){this.hoveredBlock=t;var e,n=t.holder,o=this.Editor.UI.isMobile,r=t.pluginsContent,i=window.getComputedStyle(r),a=parseInt(i.paddingTop,10),s=n.offsetHeight;e=o?n.offsetTop+s:n.offsetTop+a,this.nodes.wrapper.style.top="".concat(Math.floor(e),"px"),1===this.Editor.BlockManager.blocks.length&&t.isEmpty?this.blockTunesToggler.hide():this.blockTunesToggler.show(),this.open()}}},{key:"close",value:function(){this.Editor.ReadOnly.isEnabled||(this.nodes.wrapper.classList.remove(this.CSS.toolbarOpened),this.blockActions.hide(),this.toolboxInstance.close(),this.Editor.BlockSettings.close())}},{key:"open",value:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];!(arguments.length>1&&void 0!==arguments[1])||arguments[1],f.delay((function(){t.nodes.wrapper.classList.add(t.CSS.toolbarOpened),e?t.blockActions.show():t.blockActions.hide()}),50)()}},{key:"make",value:function(){var t=this;this.nodes.wrapper=u.default.make("div",this.CSS.toolbar),["content","actions"].forEach((function(e){t.nodes[e]=u.default.make("div",t.CSS[e])})),u.default.append(this.nodes.wrapper,this.nodes.content),u.default.append(this.nodes.content,this.nodes.actions),this.nodes.plusButton=u.default.make("div",this.CSS.plusButton),u.default.append(this.nodes.plusButton,u.default.svg("plus",16,16)),u.default.append(this.nodes.actions,this.nodes.plusButton),this.readOnlyMutableListeners.on(this.nodes.plusButton,"click",(function(){t.tooltip.hide(!0),t.plusButtonClicked()}),!1);var e=u.default.make("div");e.appendChild(document.createTextNode(d.default.ui(p.I18nInternalNS.ui.toolbar.toolbox,"Add"))),e.appendChild(u.default.make("div",this.CSS.plusButtonShortcut,{textContent:"??? Tab"})),this.tooltip.onHover(this.nodes.plusButton,e,{hidingDelay:400}),this.nodes.settingsToggler=u.default.make("span",this.CSS.settingsToggler);var n=u.default.svg("dots",16,16);u.default.append(this.nodes.settingsToggler,n),u.default.append(this.nodes.actions,this.nodes.settingsToggler),this.tooltip.onHover(this.nodes.settingsToggler,d.default.ui(p.I18nInternalNS.ui.blockTunes.toggler,"Click to tune"),{hidingDelay:400}),u.default.append(this.nodes.actions,this.makeToolbox()),u.default.append(this.nodes.actions,this.Editor.BlockSettings.nodes.wrapper),u.default.append(this.Editor.UI.nodes.wrapper,this.nodes.wrapper)}},{key:"makeToolbox",value:function(){var t=this;return this.toolboxInstance=new v.default({api:this.Editor.API.methods,tools:this.Editor.Tools.blockTools,i18nLabels:{filter:d.default.ui(p.I18nInternalNS.ui.toolbar.toolbox,"Filter"),nothingFound:d.default.ui(p.I18nInternalNS.ui.toolbar.toolbox,"Nothing found")}}),this.toolboxInstance.on(v.ToolboxEvent.Opened,(function(){t.Editor.UI.nodes.wrapper.classList.add(t.CSS.openedToolboxHolderModifier)})),this.toolboxInstance.on(v.ToolboxEvent.Closed,(function(){t.Editor.UI.nodes.wrapper.classList.remove(t.CSS.openedToolboxHolderModifier)})),this.toolboxInstance.on(v.ToolboxEvent.BlockAdded,(function(e){var n=e.block,o=t.Editor,r=o.BlockManager,i=o.Caret,a=r.getBlockById(n.id);0===a.inputs.length&&(a===r.lastBlock?(r.insertAtEnd(),i.setToBlock(r.lastBlock)):i.setToBlock(r.nextBlock))})),this.toolboxInstance.make()}},{key:"plusButtonClicked",value:function(){this.Editor.BlockManager.currentBlock=this.hoveredBlock,this.toolboxInstance.toggle()}},{key:"enableModuleBindings",value:function(){var t=this;this.readOnlyMutableListeners.on(this.nodes.settingsToggler,"mousedown",(function(e){e.stopPropagation(),t.settingsTogglerClicked(),t.toolboxInstance.close(),t.tooltip.hide(!0)}),!0),f.isMobileScreen()||this.eventsDispatcher.on(this.Editor.UI.events.blockHovered,(function(e){t.Editor.BlockSettings.opened||t.toolboxInstance.opened||t.moveAndOpen(e.block)}))}},{key:"disableModuleBindings",value:function(){this.readOnlyMutableListeners.clearAll()}},{key:"settingsTogglerClicked",value:function(){this.Editor.BlockManager.currentBlock=this.hoveredBlock,this.Editor.BlockSettings.opened?this.Editor.BlockSettings.close():this.Editor.BlockSettings.open(this.hoveredBlock)}},{key:"drawUI",value:function(){this.Editor.BlockSettings.make(),this.make()}},{key:"destroy",value:function(){this.removeAllNodes(),this.toolboxInstance&&this.toolboxInstance.destroy(),this.tooltip.destroy()}},{key:"CSS",get:function(){return{toolbar:"ce-toolbar",content:"ce-toolbar__content",actions:"ce-toolbar__actions",actionsOpened:"ce-toolbar__actions--opened",toolbarOpened:"ce-toolbar--opened",openedToolboxHolderModifier:"codex-editor--toolbox-opened",plusButton:"ce-toolbar__plus",plusButtonShortcut:"ce-toolbar__plus-shortcut",settingsToggler:"ce-toolbar__settings-btn",settingsTogglerHidden:"ce-toolbar__settings-btn--hidden"}}},{key:"opened",get:function(){return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened)}},{key:"toolbox",get:function(){var t=this;return{opened:this.toolboxInstance.opened,close:function(){t.toolboxInstance.close(),t.Editor.Caret.setToBlock(t.Editor.BlockManager.currentBlock)},open:function(){t.Editor.BlockManager.currentBlock=t.hoveredBlock,t.toolboxInstance.open()},toggle:function(){return t.toolboxInstance.toggle()},hasFocus:function(){return t.toolboxInstance.hasFocus()}}}},{key:"blockActions",get:function(){var t=this;return{hide:function(){t.nodes.actions.classList.remove(t.CSS.actionsOpened)},show:function(){t.nodes.actions.classList.add(t.CSS.actionsOpened)}}}},{key:"blockTunesToggler",get:function(){var t=this;return{hide:function(){return t.nodes.settingsToggler.classList.add(t.CSS.settingsTogglerHidden)},show:function(){return t.nodes.settingsToggler.classList.remove(t.CSS.settingsTogglerHidden)}}}}]),o}(c.default);o.default=m,m.displayName="Toolbar",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(30),n(150),n(7)],void 0===(i="function"==typeof(o=function(t,e,o,r){"use strict";var i=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.I18nInternalNS=void 0,e=i(e);var a=function t(n,o){var i={};return Object.entries(n).forEach((function(n){var a=(0,e.default)(n,2),s=a[0],l=a[1];if((0,r.isObject)(l)){var c=o?"".concat(o,".").concat(s):s,u=Object.values(l).every((function(t){return(0,r.isString)(t)}));i[s]=u?c:t(l,c)}else i[s]=l})),i}((o=i(o)).default);t.I18nInternalNS=a})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o=n(13),r=n(10).document,i=o(r)&&o(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},function(t,e,n){e.f=n(15)},function(t,e,n){var o=n(69)("keys"),r=n(44);t.exports=function(t){return o[t]||(o[t]=r(t))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var o=n(10).document;t.exports=o&&o.documentElement},function(t,e,n){var o=n(13),r=n(12),i=function(t,e){if(r(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{(o=n(31)(Function.call,n(34).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:i}},function(t,e){t.exports="\t\n\v\f\r ??????????????????????????????????????????????????\u2028\u2029\ufeff"},function(t,e,n){var o=n(13),r=n(90).set;t.exports=function(t,e,n){var i,a=e.constructor;return a!==n&&"function"==typeof a&&(i=a.prototype)!==n.prototype&&o(i)&&r&&r(t,i),t}},function(t,e,n){"use strict";var o=n(33),r=n(38);t.exports=function(t){var e=String(r(this)),n="",i=o(t);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,e){var n=Math.expm1;t.exports=!n||n(10)>22025.465794806718||n(10)<22025.465794806718||-2e-17!=n(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:n},function(t,e,n){var o=n(33),r=n(38);t.exports=function(t){return function(e,n){var i,a,s=String(r(e)),l=o(n),c=s.length;return l<0||l>=c?t?"":void 0:(i=s.charCodeAt(l))<55296||i>56319||l+1===c||(a=s.charCodeAt(l+1))<56320||a>57343?t?s.charAt(l):i:t?s.slice(l,l+2):a-56320+(i-55296<<10)+65536}}},function(t,e,n){"use strict";var o=n(45),r=n(0),i=n(21),a=n(27),s=n(55),l=n(130),c=n(53),u=n(50),f=n(15)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,h,v,g,y){l(n,e,h);var b,m,k,x=function(t){if(!d&&t in E)return E[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",S="values"==v,T=!1,E=t.prototype,B=E[f]||E["@@iterator"]||v&&E[v],C=B||x(v),_=v?S?x("entries"):C:void 0,I="Array"==e&&E.entries||B;if(I&&(k=u(I.call(new t)))!==Object.prototype&&k.next&&(c(k,w,!0),o||"function"==typeof k[f]||a(k,f,p)),S&&B&&"values"!==B.name&&(T=!0,C=function(){return B.call(this)}),o&&!y||!d&&!T&&E[f]||a(E,f,C),s[e]=C,s[w]=p,v)if(b={values:S?C:x("values"),keys:g?C:x("keys"),entries:_},y)for(m in b)m in E||i(E,m,b[m]);else r(r.P+r.F*(d||T),e,b);return b}},function(t,e,n){var o=n(99),r=n(38);t.exports=function(t,e,n){if(o(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(t))}},function(t,e,n){var o=n(13),r=n(37),i=n(15)("match");t.exports=function(t){var e;return o(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==r(t))}},function(t,e,n){var o=n(15)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[o]=!1,!"/./"[t](e)}catch(t){}}return!0}},function(t,e,n){var o=n(55),r=n(15)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||i[r]===t)}},function(t,e,n){"use strict";var o=n(19),r=n(43);t.exports=function(t,e,n){e in t?o.f(t,e,r(0,n)):t[e]=n}},function(t,e,n){var o=n(64),r=n(15)("iterator"),i=n(55);t.exports=n(17).getIteratorMethod=function(t){if(null!=t)return t[r]||t["@@iterator"]||i[o(t)]}},function(t,e,n){"use strict";var o=n(20),r=n(47),i=n(16);t.exports=function(t){for(var e=o(this),n=i(e.length),a=arguments.length,s=r(a>1?arguments[1]:void 0,n),l=a>2?arguments[2]:void 0,c=void 0===l?n:r(l,n);c>s;)e[s++]=t;return e}},function(t,e,n){"use strict";var o=n(51),r=n(135),i=n(55),a=n(28);t.exports=n(97)(Array,"Array",(function(t,e){this._t=a(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):r(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e,n){"use strict";var o,r,i=n(74),a=RegExp.prototype.exec,s=String.prototype.replace,l=a,c=(o=/a/,r=/b*/g,a.call(o,"a"),a.call(r,"a"),0!==o.lastIndex||0!==r.lastIndex),u=void 0!==/()??/.exec("")[1];(c||u)&&(l=function(t){var e,n,o,r,l=this;return u&&(n=new RegExp("^"+l.source+"$(?!\\s)",i.call(l))),c&&(e=l.lastIndex),o=a.call(l,t),c&&o&&(l.lastIndex=l.global?o.index+o[0].length:e),u&&o&&o.length>1&&s.call(o[0],n,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(o[r]=void 0)})),o}),t.exports=l},function(t,e,n){"use strict";var o=n(96)(!0);t.exports=function(t,e,n){return e+(n?o(t,e).length:1)}},function(t,e,n){var o,r,i,a=n(31),s=n(124),l=n(89),c=n(85),u=n(10),f=u.process,d=u.setImmediate,p=u.clearImmediate,h=u.MessageChannel,v=u.Dispatch,g=0,y={},b=function(){var t=+this;if(y.hasOwnProperty(t)){var e=y[t];delete y[t],e()}},m=function(t){b.call(t.data)};d&&p||(d=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return y[++g]=function(){s("function"==typeof t?t:Function(t),e)},o(g),g},p=function(t){delete y[t]},"process"==n(37)(f)?o=function(t){f.nextTick(a(b,t,1))}:v&&v.now?o=function(t){v.now(a(b,t,1))}:h?(i=(r=new h).port2,r.port1.onmessage=m,o=a(i.postMessage,i,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(o=function(t){u.postMessage(t+"","*")},u.addEventListener("message",m,!1)):o="onreadystatechange"in c("script")?function(t){l.appendChild(c("script")).onreadystatechange=function(){l.removeChild(this),b.call(t)}}:function(t){setTimeout(a(b,t,1),0)}),t.exports={set:d,clear:p}},function(t,e,n){"use strict";var o=n(10),r=n(18),i=n(45),a=n(80),s=n(27),l=n(58),c=n(11),u=n(57),f=n(33),d=n(16),p=n(143),h=n(49).f,v=n(19).f,g=n(104),y=n(53),b=o.ArrayBuffer,m=o.DataView,k=o.Math,x=o.RangeError,w=o.Infinity,S=b,T=k.abs,E=k.pow,B=k.floor,C=k.log,_=k.LN2,I=r?"_b":"buffer",O=r?"_l":"byteLength",M=r?"_o":"byteOffset";function R(t,e,n){var o,r,i,a=new Array(n),s=8*n-e-1,l=(1<<s)-1,c=l>>1,u=23===e?E(2,-24)-E(2,-77):0,f=0,d=t<0||0===t&&1/t<0?1:0;for((t=T(t))!=t||t===w?(r=t!=t?1:0,o=l):(o=B(C(t)/_),t*(i=E(2,-o))<1&&(o--,i*=2),(t+=o+c>=1?u/i:u*E(2,1-c))*i>=2&&(o++,i/=2),o+c>=l?(r=0,o=l):o+c>=1?(r=(t*i-1)*E(2,e),o+=c):(r=t*E(2,c-1)*E(2,e),o=0));e>=8;a[f++]=255&r,r/=256,e-=8);for(o=o<<e|r,s+=e;s>0;a[f++]=255&o,o/=256,s-=8);return a[--f]|=128*d,a}function A(t,e,n){var o,r=8*n-e-1,i=(1<<r)-1,a=i>>1,s=r-7,l=n-1,c=t[l--],u=127&c;for(c>>=7;s>0;u=256*u+t[l],l--,s-=8);for(o=u&(1<<-s)-1,u>>=-s,s+=e;s>0;o=256*o+t[l],l--,s-=8);if(0===u)u=1-a;else{if(u===i)return o?NaN:c?-w:w;o+=E(2,e),u-=a}return(c?-1:1)*o*E(2,u-e)}function N(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function L(t){return[255&t]}function P(t){return[255&t,t>>8&255]}function D(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function j(t){return R(t,52,8)}function F(t){return R(t,23,4)}function H(t,e,n){v(t.prototype,e,{get:function(){return this[n]}})}function U(t,e,n,o){var r=p(+n);if(r+e>t[O])throw x("Wrong index!");var i=t[I]._b,a=r+t[M],s=i.slice(a,a+e);return o?s:s.reverse()}function z(t,e,n,o,r,i){var a=p(+n);if(a+e>t[O])throw x("Wrong index!");for(var s=t[I]._b,l=a+t[M],c=o(+r),u=0;u<e;u++)s[l+u]=c[i?u:e-u-1]}if(a.ABV){if(!c((function(){b(1)}))||!c((function(){new b(-1)}))||c((function(){return new b,new b(1.5),new b(NaN),"ArrayBuffer"!=b.name}))){for(var W,Y=(b=function(t){return u(this,b),new S(p(t))}).prototype=S.prototype,V=h(S),X=0;V.length>X;)(W=V[X++])in b||s(b,W,S[W]);i||(Y.constructor=b)}var K=new m(new b(2)),G=m.prototype.setInt8;K.setInt8(0,2147483648),K.setInt8(1,2147483649),!K.getInt8(0)&&K.getInt8(1)||l(m.prototype,{setInt8:function(t,e){G.call(this,t,e<<24>>24)},setUint8:function(t,e){G.call(this,t,e<<24>>24)}},!0)}else b=function(t){u(this,b,"ArrayBuffer");var e=p(t);this._b=g.call(new Array(e),0),this[O]=e},m=function(t,e,n){u(this,m,"DataView"),u(t,b,"DataView");var o=t[O],r=f(e);if(r<0||r>o)throw x("Wrong offset!");if(r+(n=void 0===n?o-r:d(n))>o)throw x("Wrong length!");this[I]=t,this[M]=r,this[O]=n},r&&(H(b,"byteLength","_l"),H(m,"buffer","_b"),H(m,"byteLength","_l"),H(m,"byteOffset","_o")),l(m.prototype,{getInt8:function(t){return U(this,1,t)[0]<<24>>24},getUint8:function(t){return U(this,1,t)[0]},getInt16:function(t){var e=U(this,2,t,arguments[1]);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=U(this,2,t,arguments[1]);return e[1]<<8|e[0]},getInt32:function(t){return N(U(this,4,t,arguments[1]))},getUint32:function(t){return N(U(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return A(U(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return A(U(this,8,t,arguments[1]),52,8)},setInt8:function(t,e){z(this,1,t,L,e)},setUint8:function(t,e){z(this,1,t,L,e)},setInt16:function(t,e){z(this,2,t,P,e,arguments[2])},setUint16:function(t,e){z(this,2,t,P,e,arguments[2])},setInt32:function(t,e){z(this,4,t,D,e,arguments[2])},setUint32:function(t,e){z(this,4,t,D,e,arguments[2])},setFloat32:function(t,e){z(this,4,t,F,e,arguments[2])},setFloat64:function(t,e){z(this,8,t,j,e,arguments[2])}});y(b,"ArrayBuffer"),y(m,"DataView"),s(m.prototype,a.VIEW,!0),e.ArrayBuffer=b,e.DataView=m},function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,o)}t.exports=n},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(8),l=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=l(r),i=l(i),a=s(a);var c=function(){function t(){(0,r.default)(this,t),this.allListeners=[]}return(0,i.default)(t,[{key:"on",value:function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=a.generateId("l"),i={id:r,element:t,eventType:e,handler:n,options:o},s=this.findOne(t,e,n);if(!s)return this.allListeners.push(i),t.addEventListener(e,n,o),r}},{key:"off",value:function(t,e,n,o){var r=this,i=this.findAll(t,e,n);i.forEach((function(t,e){var n=r.allListeners.indexOf(i[e]);n>-1&&(r.allListeners.splice(n,1),t.element.removeEventListener(t.eventType,t.handler,t.options))}))}},{key:"offById",value:function(t){var e=this.findById(t);e&&e.element.removeEventListener(e.eventType,e.handler,e.options)}},{key:"findOne",value:function(t,e,n){var o=this.findAll(t,e,n);return o.length>0?o[0]:null}},{key:"findAll",value:function(t,e,n){var o=t?this.findByEventTarget(t):[];return t&&e&&n?o.filter((function(t){return t.eventType===e&&t.handler===n})):t&&e?o.filter((function(t){return t.eventType===e})):o}},{key:"removeAll",value:function(){this.allListeners.map((function(t){t.element.removeEventListener(t.eventType,t.handler,t.options)})),this.allListeners=[]}},{key:"destroy",value:function(){this.removeAll()}},{key:"findByEventTarget",value:function(t){return this.allListeners.filter((function(e){if(e.element===t)return e}))}},{key:"findByType",value:function(t){return this.allListeners.filter((function(e){if(e.eventType===t)return e}))}},{key:"findByHandler",value:function(t){return this.allListeners.filter((function(e){if(e.handler===t)return e}))}},{key:"findById",value:function(t){return this.allListeners.find((function(e){return e.id===t}))}}]),t}();o.default=c,c.displayName="Listeners",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e],void 0===(i="function"==typeof(o=function(n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(t){var e={get id(){return t.id},get name(){return t.name},get config(){return t.config},get holder(){return t.holder},get isEmpty(){return t.isEmpty},get selected(){return t.selected},set stretched(e){t.stretched=e},get stretched(){return t.stretched},call:function(e,n){return t.call(e,n)},save:function(){return t.save()},validate:function(e){return t.validate(e)},dispatchChange:function(){t.dispatchChange()}};Object.setPrototypeOf(this,e)};n.default=o,t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(379)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var l=function(){function t(){(0,r.default)(this,t),this.lib=new a.default}return(0,i.default)(t,[{key:"destroy",value:function(){this.lib.destroy()}},{key:"show",value:function(t,e,n){this.lib.show(t,e,n)}},{key:"hide",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.lib.hide(t)}},{key:"onHover",value:function(t,e,n){this.lib.onHover(t,e,n)}}]),t}();o.default=l,l.displayName="Tooltip",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o=n(381);function r(e,n,i){return"undefined"!=typeof Reflect&&Reflect.get?t.exports=r=Reflect.get:t.exports=r=function(t,e,n){var r=o(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value}},r(e,n,i||e)}t.exports=r},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(42),n(2),n(3),n(384)],void 0===(i="function"==typeof(o=function(o,r,i,a,s){"use strict";var l=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=l(r),i=l(i),a=l(a),s=l(s);var c=function(){function t(){(0,i.default)(this,t),this.registeredShortcuts=new Map}return(0,a.default)(t,[{key:"add",value:function(t){if(this.findShortcut(t.on,t.name))throw Error("Shortcut ".concat(t.name," is already registered for ").concat(t.on,". Please remove it before add a new handler."));var e=new s.default({name:t.name,on:t.on,callback:t.handler}),n=this.registeredShortcuts.get(t.on)||[];this.registeredShortcuts.set(t.on,[].concat((0,r.default)(n),[e]))}},{key:"remove",value:function(t,e){var n=this.findShortcut(t,e);if(n){n.remove();var o=this.registeredShortcuts.get(t);this.registeredShortcuts.set(t,o.filter((function(t){return t!==n})))}}},{key:"findShortcut",value:function(t,e){return(this.registeredShortcuts.get(t)||[]).find((function(t){return t.name===e}))}}]),t}();c.displayName="Shortcuts";var u=new c;o.default=u,t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){t.exports=!n(18)&&!n(11)((function(){return 7!=Object.defineProperty(n(85)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var o=n(10),r=n(17),i=n(45),a=n(86),s=n(19).f;t.exports=function(t){var e=r.Symbol||(r.Symbol=i?{}:o.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)})}},function(t,e,n){var o=n(26),r=n(28),i=n(70)(!1),a=n(87)("IE_PROTO");t.exports=function(t,e){var n,s=r(t),l=0,c=[];for(n in s)n!=a&&o(s,n)&&c.push(n);for(;e.length>l;)o(s,n=e[l++])&&(~i(c,n)||c.push(n));return c}},function(t,e,n){var o=n(19),r=n(12),i=n(46);t.exports=n(18)?Object.defineProperties:function(t,e){r(t);for(var n,a=i(e),s=a.length,l=0;s>l;)o.f(t,n=a[l++],e[n]);return t}},function(t,e,n){var o=n(28),r=n(49).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return r(t)}catch(t){return a.slice()}}(t):r(o(t))}},function(t,e,n){"use strict";var o=n(18),r=n(46),i=n(71),a=n(63),s=n(20),l=n(62),c=Object.assign;t.exports=!c||n(11)((function(){var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach((function(t){e[t]=t})),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=o}))?function(t,e){for(var n=s(t),c=arguments.length,u=1,f=i.f,d=a.f;c>u;)for(var p,h=l(arguments[u++]),v=f?r(h).concat(f(h)):r(h),g=v.length,y=0;g>y;)p=v[y++],o&&!d.call(h,p)||(n[p]=h[p]);return n}:c},function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},function(t,e,n){"use strict";var o=n(32),r=n(13),i=n(124),a=[].slice,s={},l=function(t,e,n){if(!(e in s)){for(var o=[],r=0;r<e;r++)o[r]="a["+r+"]";s[e]=Function("F,a","return new F("+o.join(",")+")")}return s[e](t,n)};t.exports=Function.bind||function(t){var e=o(this),n=a.call(arguments,1),s=function(){var o=n.concat(a.call(arguments));return this instanceof s?l(e,o.length,o):i(e,o,t)};return r(e.prototype)&&(s.prototype=e.prototype),s}},function(t,e){t.exports=function(t,e,n){var o=void 0===n;switch(e.length){case 0:return o?t():t.call(n);case 1:return o?t(e[0]):t.call(n,e[0]);case 2:return o?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return o?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return o?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var o=n(10).parseInt,r=n(54).trim,i=n(91),a=/^[-+]?0[xX]/;t.exports=8!==o(i+"08")||22!==o(i+"0x16")?function(t,e){var n=r(String(t),3);return o(n,e>>>0||(a.test(n)?16:10))}:o},function(t,e,n){var o=n(10).parseFloat,r=n(54).trim;t.exports=1/o(n(91)+"-0")!=-1/0?function(t){var e=r(String(t),3),n=o(e);return 0===n&&"-"==e.charAt(0)?-0:n}:o},function(t,e,n){var o=n(37);t.exports=function(t,e){if("number"!=typeof t&&"Number"!=o(t))throw TypeError(e);return+t}},function(t,e,n){var o=n(13),r=Math.floor;t.exports=function(t){return!o(t)&&isFinite(t)&&r(t)===t}},function(t,e){t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},function(t,e,n){"use strict";var o=n(48),r=n(43),i=n(53),a={};n(27)(a,n(15)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=o(a,{next:r(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var o=n(12);t.exports=function(t,e,n,r){try{return r?e(o(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&o(i.call(t)),e}}},function(t,e,n){var o=n(282);t.exports=function(t,e){return new(o(t))(e)}},function(t,e,n){var o=n(32),r=n(20),i=n(62),a=n(16);t.exports=function(t,e,n,s,l){o(e);var c=r(t),u=i(c),f=a(c.length),d=l?f-1:0,p=l?-1:1;if(n<2)for(;;){if(d in u){s=u[d],d+=p;break}if(d+=p,l?d<0:f<=d)throw TypeError("Reduce of empty array with no initial value")}for(;l?d>=0:f>d;d+=p)d in u&&(s=e(s,u[d],d,c));return s}},function(t,e,n){"use strict";var o=n(20),r=n(47),i=n(16);t.exports=[].copyWithin||function(t,e){var n=o(this),a=i(n.length),s=r(t,a),l=r(e,a),c=arguments.length>2?arguments[2]:void 0,u=Math.min((void 0===c?a:r(c,a))-l,a-s),f=1;for(l<s&&s<l+u&&(f=-1,l+=u-1,s+=u-1);u-- >0;)l in n?n[s]=n[l]:delete n[s],s+=f,l+=f;return n}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var o=n(106);n(0)({target:"RegExp",proto:!0,forced:o!==/./.exec},{exec:o})},function(t,e,n){n(18)&&"g"!=/./g.flags&&n(19).f(RegExp.prototype,"flags",{configurable:!0,get:n(74)})},function(t,e,n){"use strict";var o,r,i,a,s=n(45),l=n(10),c=n(31),u=n(64),f=n(0),d=n(13),p=n(32),h=n(57),v=n(77),g=n(65),y=n(108).set,b=n(302)(),m=n(139),k=n(303),x=n(78),w=n(140),S=l.TypeError,T=l.process,E=T&&T.versions,B=E&&E.v8||"",C=l.Promise,_="process"==u(T),I=function(){},O=r=m.f,M=!!function(){try{var t=C.resolve(1),e=(t.constructor={})[n(15)("species")]=function(t){t(I,I)};return(_||"function"==typeof PromiseRejectionEvent)&&t.then(I)instanceof e&&0!==B.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(t){}}(),R=function(t){var e;return!(!d(t)||"function"!=typeof(e=t.then))&&e},A=function(t,e){if(!t._n){t._n=!0;var n=t._c;b((function(){for(var o=t._v,r=1==t._s,i=0,a=function(e){var n,i,a,s=r?e.ok:e.fail,l=e.resolve,c=e.reject,u=e.domain;try{s?(r||(2==t._h&&P(t),t._h=1),!0===s?n=o:(u&&u.enter(),n=s(o),u&&(u.exit(),a=!0)),n===e.promise?c(S("Promise-chain cycle")):(i=R(n))?i.call(n,l,c):l(n)):c(o)}catch(t){u&&!a&&u.exit(),c(t)}};n.length>i;)a(n[i++]);t._c=[],t._n=!1,e&&!t._h&&N(t)}))}},N=function(t){y.call(l,(function(){var e,n,o,r=t._v,i=L(t);if(i&&(e=k((function(){_?T.emit("unhandledRejection",r,t):(n=l.onunhandledrejection)?n({promise:t,reason:r}):(o=l.console)&&o.error&&o.error("Unhandled promise rejection",r)})),t._h=_||L(t)?2:1),t._a=void 0,i&&e.e)throw e.v}))},L=function(t){return 1!==t._h&&0===(t._a||t._c).length},P=function(t){y.call(l,(function(){var e;_?T.emit("rejectionHandled",t):(e=l.onrejectionhandled)&&e({promise:t,reason:t._v})}))},D=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),A(e,!0))},j=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw S("Promise can't be resolved itself");(e=R(t))?b((function(){var o={_w:n,_d:!1};try{e.call(t,c(j,o,1),c(D,o,1))}catch(t){D.call(o,t)}})):(n._v=t,n._s=1,A(n,!1))}catch(t){D.call({_w:n,_d:!1},t)}}};M||(C=function(t){h(this,C,"Promise","_h"),p(t),o.call(this);try{t(c(j,this,1),c(D,this,1))}catch(t){D.call(this,t)}},(o=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n(58)(C.prototype,{then:function(t,e){var n=O(g(this,C));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=_?T.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&A(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new o;this.promise=t,this.resolve=c(j,t,1),this.reject=c(D,t,1)},m.f=O=function(t){return t===C||t===a?new i(t):r(t)}),f(f.G+f.W+f.F*!M,{Promise:C}),n(53)(C,"Promise"),n(56)("Promise"),a=n(17).Promise,f(f.S+f.F*!M,"Promise",{reject:function(t){var e=O(this);return(0,e.reject)(t),e.promise}}),f(f.S+f.F*(s||!M),"Promise",{resolve:function(t){return w(s&&this===a?C:this,t)}}),f(f.S+f.F*!(M&&n(73)((function(t){C.all(t).catch(I)}))),"Promise",{all:function(t){var e=this,n=O(e),o=n.resolve,r=n.reject,i=k((function(){var n=[],i=0,a=1;v(t,!1,(function(t){var s=i++,l=!1;n.push(void 0),a++,e.resolve(t).then((function(t){l||(l=!0,n[s]=t,--a||o(n))}),r)})),--a||o(n)}));return i.e&&r(i.v),n.promise},race:function(t){var e=this,n=O(e),o=n.reject,r=k((function(){v(t,!1,(function(t){e.resolve(t).then(n.resolve,o)}))}));return r.e&&o(r.v),n.promise}})},function(t,e,n){"use strict";var o=n(32);function r(t){var e,n;this.promise=new t((function(t,o){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=o})),this.resolve=o(e),this.reject=o(n)}t.exports.f=function(t){return new r(t)}},function(t,e,n){var o=n(12),r=n(13),i=n(139);t.exports=function(t,e){if(o(t),r(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){"use strict";var o=n(19).f,r=n(48),i=n(58),a=n(31),s=n(57),l=n(77),c=n(97),u=n(135),f=n(56),d=n(18),p=n(41).fastKey,h=n(52),v=d?"_s":"size",g=function(t,e){var n,o=p(e);if("F"!==o)return t._i[o];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,c){var u=t((function(t,o){s(t,u,e,"_i"),t._t=e,t._i=r(null),t._f=void 0,t._l=void 0,t[v]=0,null!=o&&l(o,n,t[c],t)}));return i(u.prototype,{clear:function(){for(var t=h(this,e),n=t._i,o=t._f;o;o=o.n)o.r=!0,o.p&&(o.p=o.p.n=void 0),delete n[o.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var n=h(this,e),o=g(n,t);if(o){var r=o.n,i=o.p;delete n._i[o.i],o.r=!0,i&&(i.n=r),r&&(r.p=i),n._f==o&&(n._f=r),n._l==o&&(n._l=i),n[v]--}return!!o},forEach:function(t){h(this,e);for(var n,o=a(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(o(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!g(h(this,e),t)}}),d&&o(u.prototype,"size",{get:function(){return h(this,e)[v]}}),u},def:function(t,e,n){var o,r,i=g(t,e);return i?i.v=n:(t._l=i={i:r=p(e,!0),k:e,v:n,p:o=t._l,n:void 0,r:!1},t._f||(t._f=i),o&&(o.n=i),t[v]++,"F"!==r&&(t._i[r]=i)),t},getEntry:g,setStrong:function(t,e,n){c(t,e,(function(t,n){this._t=h(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?u(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,u(1))}),n?"entries":"values",!n,!0),f(e)}}},function(t,e,n){"use strict";var o=n(58),r=n(41).getWeak,i=n(12),a=n(13),s=n(57),l=n(77),c=n(36),u=n(26),f=n(52),d=c(5),p=c(6),h=0,v=function(t){return t._l||(t._l=new g)},g=function(){this.a=[]},y=function(t,e){return d(t.a,(function(t){return t[0]===e}))};g.prototype={get:function(t){var e=y(this,t);if(e)return e[1]},has:function(t){return!!y(this,t)},set:function(t,e){var n=y(this,t);n?n[1]=e:this.a.push([t,e])},delete:function(t){var e=p(this.a,(function(e){return e[0]===t}));return~e&&this.a.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,n,i){var c=t((function(t,o){s(t,c,e,"_i"),t._t=e,t._i=h++,t._l=void 0,null!=o&&l(o,n,t[i],t)}));return o(c.prototype,{delete:function(t){if(!a(t))return!1;var n=r(t);return!0===n?v(f(this,e)).delete(t):n&&u(n,this._i)&&delete n[this._i]},has:function(t){if(!a(t))return!1;var n=r(t);return!0===n?v(f(this,e)).has(t):n&&u(n,this._i)}}),c},def:function(t,e,n){var o=r(i(e),!0);return!0===o?v(t).set(e,n):o[t._i]=n,t},ufstore:v}},function(t,e,n){var o=n(33),r=n(16);t.exports=function(t){if(void 0===t)return 0;var e=o(t),n=r(e);if(e!==n)throw RangeError("Wrong length!");return n}},function(t,e,n){var o=n(49),r=n(71),i=n(12),a=n(10).Reflect;t.exports=a&&a.ownKeys||function(t){var e=o.f(i(t)),n=r.f;return n?e.concat(n(t)):e}},function(t,e,n){var o=n(16),r=n(93),i=n(38);t.exports=function(t,e,n,a){var s=String(i(t)),l=s.length,c=void 0===n?" ":String(n),u=o(e);if(u<=l||""==c)return s;var f=u-l,d=r.call(c,Math.ceil(f/c.length));return d.length>f&&(d=d.slice(0,f)),a?d+s:s+d}},function(t,e,n){var o=n(18),r=n(46),i=n(28),a=n(63).f;t.exports=function(t){return function(e){for(var n,s=i(e),l=r(s),c=l.length,u=0,f=[];c>u;)n=l[u++],o&&!a.call(s,n)||f.push(t?[n,s[n]]:s[n]);return f}}},function(t,e,n){var o=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function s(t,e,n,o){var r=e&&e.prototype instanceof u?e:u,i=Object.create(r.prototype),a=new w(o||[]);return i._invoke=function(t,e,n){var o="suspendedStart";return function(r,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw i;return T()}for(n.method=r,n.arg=i;;){var a=n.delegate;if(a){var s=m(a,n);if(s){if(s===c)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var u=l(t,e,n);if("normal"===u.type){if(o=n.done?"completed":"suspendedYield",u.arg===c)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var c={};function u(){}function f(){}function d(){}var p={};p[r]=function(){return this};var h=Object.getPrototypeOf,v=h&&h(h(S([])));v&&v!==e&&n.call(v,r)&&(p=v);var g=d.prototype=u.prototype=Object.create(p);function y(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function b(t,e){var o;this._invoke=function(r,i){function a(){return new e((function(o,a){!function o(r,i,a,s){var c=l(t[r],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,s)}),(function(t){o("throw",t,a,s)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,s)}))}s(c.arg)}(r,i,o,a)}))}return o=o?o.then(a,a):a()}}function m(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,m(t,e),"throw"===e.method))return c;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,c;var r=o.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,c):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,c)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function w(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function S(t){if(t){var e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:T}}function T(){return{value:void 0,done:!0}}return f.prototype=g.constructor=d,d.constructor=f,d[a]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(b.prototype),b.prototype[i]=function(){return this},t.AsyncIterator=b,t.async=function(e,n,o,r,i){void 0===i&&(i=Promise);var a=new b(s(e,n,o,r),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(g),g[a]="Generator",g[r]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var o=e.pop();if(o in t)return n.value=o,n.done=!1,n}return n.done=!0,n}},t.values=S,w.prototype={constructor:w,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=void 0),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,c):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),c},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),c}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;x(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),c}},t}(t.exports);try{regeneratorRuntime=o}catch(t){Function("r","regeneratorRuntime = r")(o)}},function(t,e,n){var o=n(149);t.exports=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}},function(t){t.exports=JSON.parse('{"ui":{"blockTunes":{"toggler":{"Click to tune":"","or drag to move":""}},"inlineToolbar":{"converter":{"Convert to":""}},"toolbar":{"toolbox":{"Add":"","Filter":"","Nothing found":""}}},"toolNames":{"Text":"","Link":"","Bold":"","Italic":""},"tools":{"link":{"Add a link":""},"stub":{"The block can not be displayed correctly.":""}},"blockTunes":{"delete":{"Delete":""},"moveUp":{"Move up":""},"moveDown":{"Move down":""}}}')},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(5),n(6),n(4),n(153)],void 0===(i="function"==typeof(o=function(t,e,o,r,i,a){"use strict";var s=n(1);function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(t,"__esModule",{value:!0}),t.CriticalError=void 0,e=s(e),o=s(o),r=s(r),i=s(i);var c=function(t){(0,o.default)(s,t);var n,a=(n=s,function(){var t,e=(0,i.default)(n);if(l()){var o=(0,i.default)(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return(0,r.default)(this,t)});function s(){return(0,e.default)(this,s),a.apply(this,arguments)}return s}((0,(a=s(a)).default)(Error));t.CriticalError=c,c.displayName="CriticalError"})?o.apply(e,r):o)||(t.exports=i)},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e,n){var o=n(4),r=n(110),i=n(372),a=n(373);function s(e){var n="function"==typeof Map?new Map:void 0;return t.exports=s=function(t){if(null===t||!i(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return a(t,arguments,o(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r(e,t)},s(e)}t.exports=s},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(112),n(9)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u,f){"use strict";var d=n(8),p=n(1);function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=p(r),i=p(i),a=p(a),s=p(s),l=p(l),c=d(c),u=p(u);var v=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,l.default)(e);if(h()){var o=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).insert=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.config.defaultBlock,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3?arguments[3]:void 0),r=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=t.Editor.BlockManager.insert({tool:e,data:n,index:o,needToFocus:r,replace:i});return new u.default(a)},t.update=function(e,n){var o=t.Editor.BlockManager,r=o.getBlockById(e);if(r){var i=o.getBlockIndex(r);o.insert({id:r.id,tool:r.name,data:n,index:i,replace:!0,tunes:r.tunes})}else c.log("blocks.update(): Block with passed id was not found","warn")},t}return(0,i.default)(o,[{key:"getBlocksCount",value:function(){return this.Editor.BlockManager.blocks.length}},{key:"getCurrentBlockIndex",value:function(){return this.Editor.BlockManager.currentBlockIndex}},{key:"getBlockIndex",value:function(t){var e=this.Editor.BlockManager.getBlockById(t);if(e)return this.Editor.BlockManager.getBlockIndex(e);c.logLabeled("There is no block with id `"+t+"`","warn")}},{key:"getBlockByIndex",value:function(t){var e=this.Editor.BlockManager.getBlockByIndex(t);if(void 0!==e)return new u.default(e);c.logLabeled("There is no block at index `"+t+"`","warn")}},{key:"getById",value:function(t){var e=this.Editor.BlockManager.getBlockById(t);return void 0===e?(c.logLabeled("There is no block with id `"+t+"`","warn"),null):new u.default(e)}},{key:"swap",value:function(t,e){c.log("`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead","info"),this.Editor.BlockManager.swap(t,e)}},{key:"move",value:function(t,e){this.Editor.BlockManager.move(t,e)}},{key:"delete",value:function(t){try{this.Editor.BlockManager.removeBlock(t)}catch(t){return void c.logLabeled(t,"warn")}0===this.Editor.BlockManager.blocks.length&&this.Editor.BlockManager.insert(),this.Editor.BlockManager.currentBlock&&this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock,this.Editor.Caret.positions.END),this.Editor.Toolbar.close()}},{key:"clear",value:function(){this.Editor.BlockManager.clear(!0),this.Editor.InlineToolbar.close()}},{key:"render",value:function(t){return this.Editor.BlockManager.clear(),this.Editor.Renderer.render(t.blocks)}},{key:"renderFromHTML",value:function(t){return this.Editor.BlockManager.clear(),this.Editor.Paste.processText(t,!0)}},{key:"stretchBlock",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];c.deprecationAssert(!0,"blocks.stretchBlock()","BlockAPI");var n=this.Editor.BlockManager.getBlockByIndex(t);n&&(n.stretched=e)}},{key:"insertNewBlock",value:function(){c.log("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.","warn"),this.insert()}},{key:"methods",get:function(){var t=this;return{clear:function(){return t.clear()},render:function(e){return t.render(e)},renderFromHTML:function(e){return t.renderFromHTML(e)},delete:function(e){return t.delete(e)},swap:function(e,n){return t.swap(e,n)},move:function(e,n){return t.move(e,n)},getBlockByIndex:function(e){return t.getBlockByIndex(e)},getById:function(e){return t.getById(e)},getCurrentBlockIndex:function(){return t.getCurrentBlockIndex()},getBlockIndex:function(e){return t.getBlockIndex(e)},getBlocksCount:function(){return t.getBlocksCount()},stretchBlock:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.stretchBlock(e,n)},insertNewBlock:function(){return t.insertNewBlock()},insert:this.insert,update:this.update}}}]),o}((f=p(f)).default);o.default=v,v.displayName="BlocksAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),l=u(l);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,l.default)(e);if(f()){var o=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).setToFirstBlock=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.Editor.Caret.positions.DEFAULT,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return!!t.Editor.BlockManager.firstBlock&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.firstBlock,e,n),!0)},t.setToLastBlock=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.Editor.Caret.positions.DEFAULT,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return!!t.Editor.BlockManager.lastBlock&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.lastBlock,e,n),!0)},t.setToPreviousBlock=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.Editor.Caret.positions.DEFAULT,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return!!t.Editor.BlockManager.previousBlock&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.previousBlock,e,n),!0)},t.setToNextBlock=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.Editor.Caret.positions.DEFAULT,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return!!t.Editor.BlockManager.nextBlock&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.nextBlock,e,n),!0)},t.setToBlock=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.Editor.Caret.positions.DEFAULT,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return!!t.Editor.BlockManager.blocks[e]&&(t.Editor.Caret.setToBlock(t.Editor.BlockManager.blocks[e],n,o),!0)},t.focus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e?t.setToLastBlock(t.Editor.Caret.positions.END):t.setToFirstBlock(t.Editor.Caret.positions.START)},t}return(0,i.default)(o,[{key:"methods",get:function(){return{setToFirstBlock:this.setToFirstBlock,setToLastBlock:this.setToLastBlock,setToPreviousBlock:this.setToPreviousBlock,setToNextBlock:this.setToNextBlock,setToBlock:this.setToBlock,focus:this.focus}}}]),o}((c=u(c)).default);o.default=d,d.displayName="CaretAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),l=u(l);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,l.default)(e);if(f()){var o=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"on",value:function(t,e){this.eventsDispatcher.on(t,e)}},{key:"emit",value:function(t,e){this.eventsDispatcher.emit(t,e)}},{key:"off",value:function(t,e){this.eventsDispatcher.off(t,e)}},{key:"methods",get:function(){var t=this;return{emit:function(e,n){return t.emit(e,n)},off:function(e,n){return t.off(e,n)},on:function(e,n){return t.on(e,n)}}}}]),o}((c=u(c)).default);o.default=d,d.displayName="EventsAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(60),n(7),n(9)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u,f){"use strict";var d=n(1);function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=d(r),i=d(i),a=d(a),s=d(s),l=d(l),c=d(c);var h=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,l.default)(e);if(p()){var o=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"getMethodsForTool",value:function(t){return Object.assign(this.methods,{t:function(e){return c.default.t(o.getNamespace(t),e)}})}},{key:"methods",get:function(){return{t:function(){(0,u.logLabeled)("I18n.t() method can be accessed only from Tools","warn")}}}}],[{key:"getNamespace",value:function(t){return t.isTune()?"blockTunes.".concat(t.name):"tools.".concat(t.name)}}]),o}((f=d(f)).default);o.default=h,h.displayName="I18nAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),l=u(l);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,l.default)(e);if(f()){var o=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"open",value:function(){this.Editor.InlineToolbar.tryToShow()}},{key:"close",value:function(){this.Editor.InlineToolbar.close()}},{key:"methods",get:function(){var t=this;return{close:function(){return t.close()},open:function(){return t.open()}}}}]),o}((c=u(c)).default);o.default=d,d.displayName="InlineToolbarAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),l=u(l);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,l.default)(e);if(f()){var o=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"on",value:function(t,e,n,o){return this.listeners.on(t,e,n,o)}},{key:"off",value:function(t,e,n,o){this.listeners.off(t,e,n,o)}},{key:"offById",value:function(t){this.listeners.offById(t)}},{key:"methods",get:function(){var t=this;return{on:function(e,n,o,r){return t.on(e,n,o,r)},off:function(e,n,o,r){return t.off(e,n,o,r)},offById:function(e){return t.offById(e)}}}}]),o}((c=u(c)).default);o.default=d,d.displayName="ListenersAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(376),n(9)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u){"use strict";var f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=f(r),i=f(i),a=f(a),s=f(s),l=f(l),c=f(c);var p=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,l.default)(e);if(d()){var o=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(t){var e,i=t.config,a=t.eventsDispatcher;return(0,r.default)(this,o),(e=n.call(this,{config:i,eventsDispatcher:a})).notifier=new c.default,e}return(0,i.default)(o,[{key:"show",value:function(t){return this.notifier.show(t)}},{key:"methods",get:function(){var t=this;return{show:function(e){return t.show(e)}}}}]),o}((u=f(u)).default);o.default=p,p.displayName="NotifierAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),l=u(l);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,l.default)(e);if(f()){var o=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"toggle",value:function(t){return this.Editor.ReadOnly.toggle(t)}},{key:"methods",get:function(){var t=this;return{toggle:function(e){return t.toggle(e)},get isEnabled(){return t.isEnabled}}}},{key:"isEnabled",get:function(){return this.Editor.ReadOnly.isEnabled}}]),o}((c=u(c)).default);o.default=d,d.displayName="ReadOnlyAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9),n(66)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u){"use strict";var f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=f(r),i=f(i),a=f(a),s=f(s),l=f(l);var p=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,l.default)(e);if(d()){var o=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"clean",value:function(t,e){return(0,u.clean)(t,e)}},{key:"methods",get:function(){var t=this;return{clean:function(e,n){return t.clean(e,n)}}}}]),o}((c=f(c)).default);o.default=p,p.displayName="SanitizerAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(7),n(9)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u){"use strict";var f=n(8),d=n(1);function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=d(r),i=d(i),a=d(a),s=d(s),l=d(l),c=f(c);var h=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,l.default)(e);if(p()){var o=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"save",value:function(){var t="Editor's content can not be saved in read-only mode";return this.Editor.ReadOnly.isEnabled?(c.logLabeled(t,"warn"),Promise.reject(new Error(t))):this.Editor.Saver.save()}},{key:"methods",get:function(){var t=this;return{save:function(){return t.save()}}}}]),o}((u=d(u)).default);o.default=h,h.displayName="SaverAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(25),n(9)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u){"use strict";var f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=f(r),i=f(i),a=f(a),s=f(s),l=f(l),c=f(c);var p=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,l.default)(e);if(d()){var o=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"findParentTag",value:function(t,e){return(new c.default).findParentTag(t,e)}},{key:"expandToTag",value:function(t){(new c.default).expandToTag(t)}},{key:"methods",get:function(){var t=this;return{findParentTag:function(e,n){return t.findParentTag(e,n)},expandToTag:function(e){return t.expandToTag(e)}}}}]),o}((u=f(u)).default);o.default=p,p.displayName="SelectionAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),l=u(l);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,l.default)(e);if(f()){var o=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"classes",get:function(){return{block:"cdx-block",inlineToolButton:"ce-inline-tool",inlineToolButtonActive:"ce-inline-tool--active",input:"cdx-input",loader:"cdx-loader",button:"cdx-button",settingsButton:"cdx-settings-button",settingsButtonActive:"cdx-settings-button--active"}}}]),o}((c=u(c)).default);o.default=d,d.displayName="StylesAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u){"use strict";var f=n(8),d=n(1);function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=d(r),i=d(i),a=d(a),s=d(s),l=d(l),c=d(c),u=f(u);var h=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,l.default)(e);if(p()){var o=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"open",value:function(){this.Editor.Toolbar.moveAndOpen()}},{key:"close",value:function(){this.Editor.Toolbar.close()}},{key:"toggleBlockSettings",value:function(t){-1!==this.Editor.BlockManager.currentBlockIndex?(null!=t?t:!this.Editor.BlockSettings.opened)?(this.Editor.Toolbar.moveAndOpen(),this.Editor.BlockSettings.open()):this.Editor.BlockSettings.close():u.logLabeled("Could't toggle the Toolbar because there is no block selected ","warn")}},{key:"methods",get:function(){var t=this;return{close:function(){return t.close()},open:function(){return t.open()},toggleBlockSettings:function(e){return t.toggleBlockSettings(e)}}}}]),o}(c.default);o.default=h,h.displayName="ToolbarAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9),n(113)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u){"use strict";var f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=f(r),i=f(i),a=f(a),s=f(s),l=f(l),c=f(c),u=f(u);var p=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,l.default)(e);if(d()){var o=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(t){var e,i=t.config,a=t.eventsDispatcher;return(0,r.default)(this,o),(e=n.call(this,{config:i,eventsDispatcher:a})).tooltip=new u.default,e}return(0,i.default)(o,[{key:"destroy",value:function(){this.tooltip.destroy()}},{key:"show",value:function(t,e,n){this.tooltip.show(t,e,n)}},{key:"hide",value:function(){this.tooltip.hide()}},{key:"onHover",value:function(t,e,n){this.tooltip.onHover(t,e,n)}},{key:"methods",get:function(){var t=this;return{show:function(e,n,o){return t.show(e,n,o)},hide:function(){return t.hide()},onHover:function(e,n,o){return t.onHover(e,n,o)}}}}]),o}(c.default);o.default=p,p.displayName="TooltipAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c){"use strict";var u=n(1);function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),l=u(l);var d=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,l.default)(e);if(f()){var o=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"methods",get:function(){return{nodes:this.editorNodes}}},{key:"editorNodes",get:function(){return{wrapper:this.Editor.UI.nodes.wrapper,redactor:this.Editor.UI.nodes.redactor}}}]),o}((c=u(c)).default);o.default=d,d.displayName="UiAPI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9),n(7),n(25),n(61)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u,f,d){"use strict";var p=n(8),h=n(1);function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=h(r),i=h(i),a=h(a),s=h(s),l=h(l),c=h(c),u=p(u),f=h(f),d=h(d);var g=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,l.default)(e);if(v()){var o=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"keydown",value:function(t){switch(this.beforeKeydownProcessing(t),t.keyCode){case u.keyCodes.BACKSPACE:this.backspace(t);break;case u.keyCodes.ENTER:this.enter(t);break;case u.keyCodes.DOWN:case u.keyCodes.RIGHT:this.arrowRightAndDown(t);break;case u.keyCodes.UP:case u.keyCodes.LEFT:this.arrowLeftAndUp(t);break;case u.keyCodes.TAB:this.tabPressed(t)}}},{key:"beforeKeydownProcessing",value:function(t){this.needToolbarClosing(t)&&u.isPrintableKey(t.keyCode)&&(this.Editor.Toolbar.close(),this.Editor.ConversionToolbar.close(),t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||(this.Editor.BlockManager.clearFocused(),this.Editor.BlockSelection.clearSelection(t)))}},{key:"keyup",value:function(t){t.shiftKey||this.Editor.UI.checkEmptiness()}},{key:"tabPressed",value:function(t){this.Editor.BlockSelection.clearSelection(t);var e=this.Editor,n=e.BlockManager,o=e.InlineToolbar,r=e.ConversionToolbar,i=n.currentBlock;if(i){var a=i.isEmpty,s=i.tool.isDefault&&a,l=!a&&r.opened,c=!a&&!f.default.isCollapsed&&o.opened;s?this.activateToolbox():l||c||this.activateBlockSettings()}}},{key:"dragOver",value:function(t){this.Editor.BlockManager.getBlockByChildNode(t.target).dropTarget=!0}},{key:"dragLeave",value:function(t){this.Editor.BlockManager.getBlockByChildNode(t.target).dropTarget=!1}},{key:"handleCommandC",value:function(t){var e=this.Editor.BlockSelection;e.anyBlockSelected&&e.copySelectedBlocks(t)}},{key:"handleCommandX",value:function(t){var e=this.Editor,n=e.BlockSelection,o=e.BlockManager,r=e.Caret;n.anyBlockSelected&&n.copySelectedBlocks(t).then((function(){var e=o.removeSelectedBlocks(),i=o.insertDefaultBlockAtIndex(e,!0);r.setToBlock(i,r.positions.START),n.clearSelection(t)}))}},{key:"enter",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.UI;if(!n.currentBlock.tool.isLineBreaksEnabled&&!(o.someToolbarOpened&&o.someFlipperButtonFocused||t.shiftKey)){var r=this.Editor.BlockManager.currentBlock;this.Editor.Caret.isAtStart&&!this.Editor.BlockManager.currentBlock.hasMedia?this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex):r=this.Editor.BlockManager.split(),this.Editor.Caret.setToBlock(r),this.Editor.Toolbar.moveAndOpen(r),t.preventDefault()}}},{key:"backspace",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.BlockSelection,r=e.Caret,i=n.currentBlock,a=i.tool;if(i.selected||i.isEmpty&&i.currentInput===i.firstInput){t.preventDefault();var s=n.currentBlockIndex;return n.previousBlock&&0===n.previousBlock.inputs.length?n.removeBlock(s-1):n.removeBlock(),r.setToBlock(n.currentBlock,s?r.positions.END:r.positions.START),this.Editor.Toolbar.close(),void o.clearSelection(t)}if(!a.isLineBreaksEnabled||r.isAtStart){var l=0===n.currentBlockIndex;r.isAtStart&&f.default.isCollapsed&&i.currentInput===i.firstInput&&!l&&(t.preventDefault(),this.mergeBlocks())}}},{key:"mergeBlocks",value:function(){var t=this.Editor,e=t.BlockManager,n=t.Caret,o=t.Toolbar,r=e.previousBlock,i=e.currentBlock;if(i.name!==r.name||!r.mergeable)return 0===r.inputs.length||r.isEmpty?(e.removeBlock(e.currentBlockIndex-1),n.setToBlock(e.currentBlock),void o.close()):void(n.navigatePrevious()&&o.close());n.createShadow(r.pluginsContent),e.mergeBlocks(r,i).then((function(){n.restoreCaret(r.pluginsContent),r.pluginsContent.normalize(),o.close()}))}},{key:"arrowRightAndDown",value:function(t){var e=this,n=d.default.usedKeys.includes(t.keyCode)&&(!t.shiftKey||t.keyCode===u.keyCodes.TAB);if(!this.Editor.UI.someToolbarOpened||!n){this.Editor.BlockManager.clearFocused(),this.Editor.Toolbar.close();var o=this.Editor.Caret.isAtEnd||this.Editor.BlockSelection.anyBlockSelected;t.shiftKey&&t.keyCode===u.keyCodes.DOWN&&o?this.Editor.CrossBlockSelection.toggleBlockSelectedState():((t.keyCode===u.keyCodes.DOWN||t.keyCode===u.keyCodes.RIGHT&&!this.isRtl?this.Editor.Caret.navigateNext():this.Editor.Caret.navigatePrevious())?t.preventDefault():u.delay((function(){e.Editor.BlockManager.currentBlock&&e.Editor.BlockManager.currentBlock.updateCurrentInput()}),20)(),this.Editor.BlockSelection.clearSelection(t))}}},{key:"arrowLeftAndUp",value:function(t){var e=this;if(this.Editor.UI.someToolbarOpened){if(d.default.usedKeys.includes(t.keyCode)&&(!t.shiftKey||t.keyCode===u.keyCodes.TAB))return;this.Editor.UI.closeAllToolbars()}this.Editor.BlockManager.clearFocused(),this.Editor.Toolbar.close();var n=this.Editor.Caret.isAtStart||this.Editor.BlockSelection.anyBlockSelected;t.shiftKey&&t.keyCode===u.keyCodes.UP&&n?this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1):((t.keyCode===u.keyCodes.UP||t.keyCode===u.keyCodes.LEFT&&!this.isRtl?this.Editor.Caret.navigatePrevious():this.Editor.Caret.navigateNext())?t.preventDefault():u.delay((function(){e.Editor.BlockManager.currentBlock&&e.Editor.BlockManager.currentBlock.updateCurrentInput()}),20)(),this.Editor.BlockSelection.clearSelection(t))}},{key:"needToolbarClosing",value:function(t){var e=t.keyCode===u.keyCodes.ENTER&&this.Editor.Toolbar.toolbox.opened,n=t.keyCode===u.keyCodes.ENTER&&this.Editor.BlockSettings.opened,o=t.keyCode===u.keyCodes.ENTER&&this.Editor.InlineToolbar.opened,r=t.keyCode===u.keyCodes.ENTER&&this.Editor.ConversionToolbar.opened,i=t.keyCode===u.keyCodes.TAB;return!(t.shiftKey||i||e||n||o||r)}},{key:"activateToolbox",value:function(){this.Editor.Toolbar.opened||this.Editor.Toolbar.moveAndOpen(),this.Editor.Toolbar.toolbox.open()}},{key:"activateBlockSettings",value:function(){this.Editor.Toolbar.opened||(this.Editor.BlockManager.currentBlock.focused=!0,this.Editor.Toolbar.moveAndOpen()),this.Editor.BlockSettings.opened||this.Editor.BlockSettings.open()}}]),o}(c.default);o.default=g,g.displayName="BlockEvents",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(23),n(24),n(2),n(3),n(5),n(6),n(4),n(67),n(9),n(14),n(7),n(382),n(112),n(383)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u,f,d,p,h,v,g,y){"use strict";var b=n(8),m=n(1);function k(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=m(r),i=m(i),a=m(a),s=m(s),l=m(l),c=m(c),u=m(u),f=b(f),d=m(d),p=m(p),h=b(h),v=m(v),g=m(g);var x=function(t){(0,l.default)(b,t);var e,n,o,d=(e=b,function(){var t,n=(0,u.default)(e);if(k()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,c.default)(this,t)});function b(){var t;return(0,a.default)(this,b),(t=d.apply(this,arguments))._currentBlockIndex=-1,t._blocks=null,t}return(0,s.default)(b,[{key:"prepare",value:function(){var t=this,e=new v.default(this.Editor.UI.nodes.redactor);this._blocks=new Proxy(e,{set:v.default.set,get:v.default.get}),this.listeners.on(document,"copy",(function(e){return t.Editor.BlockEvents.handleCommandC(e)}))}},{key:"toggleReadOnly",value:function(t){t?this.disableModuleBindings():this.enableModuleBindings()}},{key:"composeBlock",value:function(t){var e=t.tool,n=t.data,o=void 0===n?{}:n,r=t.id,i=void 0===r?void 0:r,a=t.tunes,s=void 0===a?{}:a,l=this.Editor.ReadOnly.isEnabled,c=this.Editor.Tools.blockTools.get(e),u=new f.default({id:i,data:o,tool:c,api:this.Editor.API,readOnly:l,tunesData:s});return l||this.bindBlockEvents(u),u}},{key:"insert",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.id,n=void 0===e?void 0:e,o=t.tool,r=void 0===o?this.config.defaultBlock:o,i=t.data,a=void 0===i?{}:i,s=t.index,l=t.needToFocus,c=void 0===l||l,u=t.replace,f=void 0!==u&&u,d=t.tunes,p=void 0===d?{}:d,h=s;void 0===h&&(h=this.currentBlockIndex+(f?0:1));var v=this.composeBlock({id:n,tool:r,data:a,tunes:p});return f&&this.blockDidMutated(y.BlockMutationType.Removed,this.getBlockByIndex(h),{index:h}),this._blocks.insert(h,v,f),this.blockDidMutated(y.BlockMutationType.Added,v,{index:h}),c?this.currentBlockIndex=h:h<=this.currentBlockIndex&&this.currentBlockIndex++,v}},{key:"replace",value:function(t){var e=t.tool,n=void 0===e?this.config.defaultBlock:e,o=t.data,r=void 0===o?{}:o;return this.insert({tool:n,data:r,index:this.currentBlockIndex,replace:!0})}},{key:"paste",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=this.insert({tool:t,replace:n});try{o.call(f.BlockToolAPI.ON_PASTE,e)}catch(e){h.log("".concat(t,": onPaste callback call is failed"),"error",e)}return o}},{key:"insertDefaultBlockAtIndex",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.composeBlock({tool:this.config.defaultBlock});return this._blocks[t]=n,this.blockDidMutated(y.BlockMutationType.Added,n,{index:t}),e?this.currentBlockIndex=t:t<=this.currentBlockIndex&&this.currentBlockIndex++,n}},{key:"insertAtEnd",value:function(){return this.currentBlockIndex=this.blocks.length-1,this.insert()}},{key:"mergeBlocks",value:(o=(0,i.default)(r.default.mark((function t(e,n){var o,i;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=this._blocks.indexOf(n),!n.isEmpty){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,n.data;case 5:if(i=t.sent,h.isEmpty(i)){t.next=9;break}return t.next=9,e.mergeWith(i);case 9:this.removeBlock(o),this.currentBlockIndex=this._blocks.indexOf(e);case 11:case"end":return t.stop()}}),t,this)}))),function(t,e){return o.apply(this,arguments)})},{key:"removeBlock",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentBlockIndex;if(!this.validateIndex(t))throw new Error("Can't find a Block to remove");var e=this._blocks[t];e.destroy(),this._blocks.remove(t),this.blockDidMutated(y.BlockMutationType.Removed,e,{index:t}),this.currentBlockIndex>=t&&this.currentBlockIndex--,this.blocks.length?0===t&&(this.currentBlockIndex=0):(this.currentBlockIndex=-1,this.insert())}},{key:"removeSelectedBlocks",value:function(){for(var t,e=this.blocks.length-1;e>=0;e--)this.blocks[e].selected&&(this.removeBlock(e),t=e);return t}},{key:"removeAllBlocks",value:function(){for(var t=this.blocks.length-1;t>=0;t--)this._blocks.remove(t);this.currentBlockIndex=-1,this.insert(),this.currentBlock.firstInput.focus()}},{key:"split",value:function(){var t=this.Editor.Caret.extractFragmentFromCaretPosition(),e=p.default.make("div");e.appendChild(t);var n={text:p.default.isEmpty(e)?"":e.innerHTML};return this.insert({data:n})}},{key:"getBlockByIndex",value:function(t){return-1===t&&(t=this._blocks.length-1),this._blocks[t]}},{key:"getBlockIndex",value:function(t){return this._blocks.indexOf(t)}},{key:"getBlockById",value:function(t){return this._blocks.array.find((function(e){return e.id===t}))}},{key:"getBlock",value:function(t){p.default.isElement(t)||(t=t.parentNode);var e=this._blocks.nodes,n=t.closest(".".concat(f.default.CSS.wrapper)),o=e.indexOf(n);if(o>=0)return this._blocks[o]}},{key:"highlightCurrentNode",value:function(){this.clearFocused(),this.currentBlock.focused=!0}},{key:"clearFocused",value:function(){this.blocks.forEach((function(t){t.focused=!1}))}},{key:"setCurrentBlockByChildNode",value:function(t){p.default.isElement(t)||(t=t.parentNode);var e=t.closest(".".concat(f.default.CSS.wrapper));if(e){var n=e.closest(".".concat(this.Editor.UI.CSS.editorWrapper));if(null==n?void 0:n.isEqualNode(this.Editor.UI.nodes.wrapper))return this.currentBlockIndex=this._blocks.nodes.indexOf(e),this.currentBlock.updateCurrentInput(),this.currentBlock}}},{key:"getBlockByChildNode",value:function(t){p.default.isElement(t)||(t=t.parentNode);var e=t.closest(".".concat(f.default.CSS.wrapper));return this.blocks.find((function(t){return t.holder===e}))}},{key:"swap",value:function(t,e){this._blocks.swap(t,e),this.currentBlockIndex=e}},{key:"move",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.currentBlockIndex;isNaN(t)||isNaN(e)?h.log("Warning during 'move' call: incorrect indices provided.","warn"):this.validateIndex(t)&&this.validateIndex(e)?(this._blocks.move(t,e),this.currentBlockIndex=t,this.blockDidMutated(y.BlockMutationType.Moved,this.currentBlock,{fromIndex:e,toIndex:t})):h.log("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.","warn")}},{key:"dropPointer",value:function(){this.currentBlockIndex=-1,this.clearFocused()}},{key:"clear",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this._blocks.removeAll(),this.dropPointer(),t&&this.insert(),this.Editor.UI.checkEmptiness()}},{key:"destroy",value:(n=(0,i.default)(r.default.mark((function t(){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(this.blocks.map((function(t){return t.destroy()})));case 2:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"bindBlockEvents",value:function(t){var e=this,n=this.Editor.BlockEvents;this.readOnlyMutableListeners.on(t.holder,"keydown",(function(t){n.keydown(t)})),this.readOnlyMutableListeners.on(t.holder,"keyup",(function(t){n.keyup(t)})),this.readOnlyMutableListeners.on(t.holder,"dragover",(function(t){n.dragOver(t)})),this.readOnlyMutableListeners.on(t.holder,"dragleave",(function(t){n.dragLeave(t)})),t.on("didMutated",(function(t){return e.blockDidMutated(y.BlockMutationType.Changed,t,{index:e.getBlockIndex(t)})}))}},{key:"disableModuleBindings",value:function(){this.readOnlyMutableListeners.clearAll()}},{key:"enableModuleBindings",value:function(){var t=this;this.readOnlyMutableListeners.on(document,"cut",(function(e){return t.Editor.BlockEvents.handleCommandX(e)})),this.blocks.forEach((function(e){t.bindBlockEvents(e)}))}},{key:"validateIndex",value:function(t){return!(t<0||t>=this._blocks.length)}},{key:"blockDidMutated",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=new CustomEvent(t,{detail:Object.assign({target:new g.default(e)},n)});return this.Editor.ModificationsObserver.onChange(o),e}},{key:"currentBlockIndex",get:function(){return this._currentBlockIndex},set:function(t){this._blocks[this._currentBlockIndex]&&this._blocks[this._currentBlockIndex].willUnselect(),this._blocks[t]&&this._blocks[t].willSelect(),this._currentBlockIndex=t}},{key:"firstBlock",get:function(){return this._blocks[0]}},{key:"lastBlock",get:function(){return this._blocks[this._blocks.length-1]}},{key:"currentBlock",get:function(){return this._blocks[this.currentBlockIndex]},set:function(t){this.currentBlockIndex=this.getBlockIndex(t)}},{key:"nextBlock",get:function(){return this.currentBlockIndex===this._blocks.length-1?null:this._blocks[this.currentBlockIndex+1]}},{key:"nextContentfulBlock",get:function(){return this.blocks.slice(this.currentBlockIndex+1).find((function(t){return!!t.inputs.length}))}},{key:"previousContentfulBlock",get:function(){return this.blocks.slice(0,this.currentBlockIndex).reverse().find((function(t){return!!t.inputs.length}))}},{key:"previousBlock",get:function(){return 0===this.currentBlockIndex?null:this._blocks[this.currentBlockIndex-1]}},{key:"blocks",get:function(){return this._blocks.array}},{key:"isEditorEmpty",get:function(){return this.blocks.every((function(t){return t.isEmpty}))}}]),b}(d.default);o.default=x,x.displayName="BlockManager",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9),n(7),n(14),n(115),n(25),n(66)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u,f,d,p,h){"use strict";var v=n(8),g=n(1);function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=g(r),i=g(i),a=g(a),s=g(s),l=g(l),c=g(c),u=v(u),f=g(f),d=g(d),p=g(p);var b=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,l.default)(e);if(y()){var o=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).anyBlockSelectedCache=null,t.needToSelectAll=!1,t.nativeInputSelected=!1,t.readyToBlockSelection=!1,t}return(0,i.default)(o,[{key:"prepare",value:function(){var t=this;this.selection=new p.default,d.default.add({name:"CMD+A",handler:function(e){var n=t.Editor,o=n.BlockManager;if(n.ReadOnly.isEnabled)return e.preventDefault(),void t.selectAllBlocks();o.currentBlock&&t.handleCommandA(e)},on:this.Editor.UI.nodes.redactor})}},{key:"toggleReadOnly",value:function(t){p.default.get().removeAllRanges(),this.allBlocksSelected=!1}},{key:"unSelectBlockByIndex",value:function(t){var e=this.Editor.BlockManager;(isNaN(t)?e.currentBlock:e.getBlockByIndex(t)).selected=!1,this.clearCache()}},{key:"clearSelection",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.Editor,o=n.BlockManager,r=n.Caret,i=n.RectangleSelection;this.needToSelectAll=!1,this.nativeInputSelected=!1,this.readyToBlockSelection=!1;var a=t&&t instanceof KeyboardEvent,s=a&&u.isPrintableKey(t.keyCode);if(this.anyBlockSelected&&a&&s&&!p.default.isSelectionExists){var l=o.removeSelectedBlocks();o.insertDefaultBlockAtIndex(l,!0),r.setToBlock(o.currentBlock),u.delay((function(){var e=t.key;r.insertContentAtCaretPosition(e.length>1?"":e)}),20)()}this.Editor.CrossBlockSelection.clear(t),this.anyBlockSelected&&!i.isRectActivated()?(e&&this.selection.restore(),this.allBlocksSelected=!1):this.Editor.RectangleSelection.clearSelection()}},{key:"copySelectedBlocks",value:function(t){var e=this;t.preventDefault();var n=f.default.make("div");this.selectedBlocks.forEach((function(t){var o=(0,h.clean)(t.holder.innerHTML,e.sanitizerConfig),r=f.default.make("p");r.innerHTML=o,n.appendChild(r)}));var o=Array.from(n.childNodes).map((function(t){return t.textContent})).join("\n\n"),r=n.innerHTML;return t.clipboardData.setData("text/plain",o),t.clipboardData.setData("text/html",r),Promise.all(this.selectedBlocks.map((function(t){return t.save()}))).then((function(n){try{t.clipboardData.setData(e.Editor.Paste.MIME_TYPE,JSON.stringify(n))}catch(t){}}))}},{key:"selectBlockByIndex",value:function(t){var e,n=this.Editor.BlockManager;n.clearFocused(),e=isNaN(t)?n.currentBlock:n.getBlockByIndex(t),this.selection.save(),p.default.get().removeAllRanges(),e.selected=!0,this.clearCache(),this.Editor.InlineToolbar.close()}},{key:"clearCache",value:function(){this.anyBlockSelectedCache=null}},{key:"destroy",value:function(){d.default.remove(this.Editor.UI.nodes.redactor,"CMD+A")}},{key:"handleCommandA",value:function(t){if(this.Editor.RectangleSelection.clearSelection(),!f.default.isNativeInput(t.target)||this.readyToBlockSelection){var e=this.Editor.BlockManager.getBlock(t.target).inputs;e.length>1&&!this.readyToBlockSelection?this.readyToBlockSelection=!0:1!==e.length||this.needToSelectAll?this.needToSelectAll?(t.preventDefault(),this.selectAllBlocks(),this.needToSelectAll=!1,this.readyToBlockSelection=!1,this.Editor.ConversionToolbar.close()):this.readyToBlockSelection&&(t.preventDefault(),this.selectBlockByIndex(),this.needToSelectAll=!0):this.needToSelectAll=!0}else this.readyToBlockSelection=!0}},{key:"selectAllBlocks",value:function(){this.selection.save(),p.default.get().removeAllRanges(),this.allBlocksSelected=!0,this.Editor.InlineToolbar.close()}},{key:"sanitizerConfig",get:function(){return{p:{},h1:{},h2:{},h3:{},h4:{},h5:{},h6:{},ol:{},ul:{},li:{},br:!0,img:{src:!0,width:!0,height:!0},a:{href:!0},b:{},i:{},u:{}}}},{key:"allBlocksSelected",get:function(){return this.Editor.BlockManager.blocks.every((function(t){return!0===t.selected}))},set:function(t){this.Editor.BlockManager.blocks.forEach((function(e){e.selected=t})),this.clearCache()}},{key:"anyBlockSelected",get:function(){var t=this.Editor.BlockManager;return null===this.anyBlockSelectedCache&&(this.anyBlockSelectedCache=t.blocks.some((function(t){return!0===t.selected}))),this.anyBlockSelectedCache}},{key:"selectedBlocks",get:function(){return this.Editor.BlockManager.blocks.filter((function(t){return t.selected}))}}]),o}(c.default);o.default=b,b.displayName="BlockSelection",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(25),n(9),n(14),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u,f,d){"use strict";var p=n(8),h=n(1);function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=h(r),i=h(i),a=h(a),s=h(s),l=h(l),c=h(c),u=h(u),f=h(f),d=p(d);var g=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,l.default)(e);if(v()){var o=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){return(0,r.default)(this,o),n.apply(this,arguments)}return(0,i.default)(o,[{key:"setToBlock",value:function(t){var e,n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.positions.DEFAULT,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=this.Editor.BlockManager;switch(o){case this.positions.START:e=t.firstInput;break;case this.positions.END:e=t.lastInput;break;default:e=t.currentInput}if(e){var a=f.default.getDeepestNode(e,o===this.positions.END),s=f.default.getContentLength(a);switch(!0){case o===this.positions.START:r=0;break;case o===this.positions.END:case r>s:r=s}d.delay((function(){n.set(a,r)}),20)(),i.setCurrentBlockByChildNode(t.holder),i.currentBlock.currentInput=e}}},{key:"setToInput",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.positions.DEFAULT,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=this.Editor.BlockManager.currentBlock,r=f.default.getDeepestNode(t);switch(e){case this.positions.START:this.set(r,0);break;case this.positions.END:this.set(r,f.default.getContentLength(r));break;default:n&&this.set(r,n)}o.currentInput=t}},{key:"set",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=c.default.setCursor(t,e),o=n.top,r=n.bottom,i=window,a=i.innerHeight;o<0&&window.scrollBy(0,o),r>a&&window.scrollBy(0,r-a)}},{key:"setToTheLastBlock",value:function(){var t=this.Editor.BlockManager.lastBlock;if(t)if(t.tool.isDefault&&t.isEmpty)this.setToBlock(t);else{var e=this.Editor.BlockManager.insertAtEnd();this.setToBlock(e)}}},{key:"extractFragmentFromCaretPosition",value:function(){var t=c.default.get();if(t.rangeCount){var e=t.getRangeAt(0),n=this.Editor.BlockManager.currentBlock.currentInput;if(e.deleteContents(),n){if(f.default.isNativeInput(n)){var o=n,r=document.createDocumentFragment(),i=o.value.substring(0,o.selectionStart),a=o.value.substring(o.selectionStart);return r.textContent=a,o.value=i,r}var s=e.cloneRange();return s.selectNodeContents(n),s.setStart(e.endContainer,e.endOffset),s.extractContents()}}}},{key:"navigateNext",value:function(){var t=this.Editor.BlockManager,e=t.currentBlock,n=t.nextContentfulBlock,o=e.nextInput,r=this.isAtEnd,i=n;if(!i&&!o){if(e.tool.isDefault||!r)return!1;i=t.insertAtEnd()}return!!r&&(o?this.setToInput(o,this.positions.START):this.setToBlock(i,this.positions.START),!0)}},{key:"navigatePrevious",value:function(){var t=this.Editor.BlockManager,e=t.currentBlock,n=t.previousContentfulBlock;if(!e)return!1;var o=e.previousInput;return!(!n&&!o||!this.isAtStart||(o?this.setToInput(o,this.positions.END):this.setToBlock(n,this.positions.END),0))}},{key:"createShadow",value:function(t){var e=document.createElement("span");e.classList.add(o.CSS.shadowCaret),t.insertAdjacentElement("beforeend",e)}},{key:"restoreCaret",value:function(t){var e=t.querySelector(".".concat(o.CSS.shadowCaret));e&&((new c.default).expandToTag(e),setTimeout((function(){var t=document.createRange();t.selectNode(e),t.extractContents()}),50))}},{key:"insertContentAtCaretPosition",value:function(t){var e=document.createDocumentFragment(),n=document.createElement("div"),o=c.default.get(),r=c.default.range;n.innerHTML=t,Array.from(n.childNodes).forEach((function(t){return e.appendChild(t)})),0===e.childNodes.length&&e.appendChild(new Text);var i=e.lastChild;r.deleteContents(),r.insertNode(e);var a=document.createRange();a.setStart(i,i.textContent.length),o.removeAllRanges(),o.addRange(a)}},{key:"getHigherLevelSiblings",value:function(t,e){for(var n=t,o=[];n.parentNode&&"true"!==n.parentNode.contentEditable;)n=n.parentNode;for(var r="left"===e?"previousSibling":"nextSibling";n[r];)n=n[r],o.push(n);return o}},{key:"positions",get:function(){return{START:"start",END:"end",DEFAULT:"default"}}},{key:"isAtStart",get:function(){var t=c.default.get(),e=f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput),n=t.focusNode;if(f.default.isNativeInput(e))return 0===e.selectionEnd;if(!t.anchorNode)return!1;var o=n.textContent.search(/\S/);-1===o&&(o=0);var r=t.focusOffset;return n.nodeType!==Node.TEXT_NODE&&n.childNodes.length&&(n.childNodes[r]?(n=n.childNodes[r],r=0):r=(n=n.childNodes[r-1]).textContent.length),!(!f.default.isLineBreakTag(e)&&!f.default.isEmpty(e)||!this.getHigherLevelSiblings(n,"left").every((function(t){var e=f.default.isLineBreakTag(t),n=1===t.children.length&&f.default.isLineBreakTag(t.children[0]),o=e||n;return f.default.isEmpty(t)&&!o}))||r!==o)||(null===e||n===e&&r<=o)}},{key:"isAtEnd",get:function(){var t=c.default.get(),e=t.focusNode,n=f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput,!0);if(f.default.isNativeInput(n))return n.selectionEnd===n.value.length;if(!t.focusNode)return!1;var o=t.focusOffset;if(e.nodeType!==Node.TEXT_NODE&&e.childNodes.length&&(e.childNodes[o-1]?o=(e=e.childNodes[o-1]).textContent.length:(e=e.childNodes[0],o=0)),f.default.isLineBreakTag(n)||f.default.isEmpty(n)){var r=this.getHigherLevelSiblings(e,"right");if(r.every((function(t,e){return e===r.length-1&&f.default.isLineBreakTag(t)||f.default.isEmpty(t)&&!f.default.isLineBreakTag(t)}))&&o===e.textContent.length)return!0}var i=n.textContent.replace(/\s+$/,"");return e===n&&o>=i.length}}],[{key:"CSS",get:function(){return{shadowCaret:"cdx-shadow-caret"}}}]),o}(u.default);o.default=g,g.displayName="Caret",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(23),n(24),n(2),n(3),n(5),n(6),n(4),n(9),n(25),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u,f,d,p){"use strict";var h=n(8),v=n(1);function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=v(r),i=v(i),a=v(a),s=v(s),l=v(l),c=v(c),u=v(u),f=v(f),d=v(d),p=h(p);var y=function(t){(0,l.default)(f,t);var e,n,o=(e=f,function(){var t,n=(0,u.default)(e);if(g()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,c.default)(this,t)});function f(){var t;return(0,a.default)(this,f),(t=o.apply(this,arguments)).onMouseUp=function(){t.listeners.off(document,"mouseover",t.onMouseOver),t.listeners.off(document,"mouseup",t.onMouseUp)},t.onMouseOver=function(e){var n=t.Editor,o=n.BlockManager,r=n.BlockSelection,i=o.getBlockByChildNode(e.relatedTarget)||t.lastSelectedBlock,a=o.getBlockByChildNode(e.target);if(i&&a&&a!==i){if(i===t.firstSelectedBlock)return d.default.get().removeAllRanges(),i.selected=!0,a.selected=!0,void r.clearCache();if(a===t.firstSelectedBlock)return i.selected=!1,a.selected=!1,void r.clearCache();t.Editor.InlineToolbar.close(),t.toggleBlocksSelectedState(i,a),t.lastSelectedBlock=a}},t}return(0,s.default)(f,[{key:"prepare",value:(n=(0,i.default)(r.default.mark((function t(){var e=this;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.listeners.on(document,"mousedown",(function(t){e.enableCrossBlockSelection(t)}));case 1:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"watchSelection",value:function(t){if(t.button===p.mouseButtons.LEFT){var e=this.Editor.BlockManager;this.firstSelectedBlock=e.getBlock(t.target),this.lastSelectedBlock=this.firstSelectedBlock,this.listeners.on(document,"mouseover",this.onMouseOver),this.listeners.on(document,"mouseup",this.onMouseUp)}}},{key:"toggleBlockSelectedState",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this.Editor,n=e.BlockManager,o=e.BlockSelection;this.lastSelectedBlock||(this.lastSelectedBlock=this.firstSelectedBlock=n.currentBlock),this.firstSelectedBlock===this.lastSelectedBlock&&(this.firstSelectedBlock.selected=!0,o.clearCache(),d.default.get().removeAllRanges());var r=n.blocks.indexOf(this.lastSelectedBlock)+(t?1:-1),i=n.blocks[r];i&&(this.lastSelectedBlock.selected!==i.selected?(i.selected=!0,o.clearCache()):(this.lastSelectedBlock.selected=!1,o.clearCache()),this.lastSelectedBlock=i,this.Editor.InlineToolbar.close(),i.holder.scrollIntoView({block:"nearest"}))}},{key:"clear",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.BlockSelection,r=e.Caret,i=n.blocks.indexOf(this.firstSelectedBlock),a=n.blocks.indexOf(this.lastSelectedBlock);if(o.anyBlockSelected&&i>-1&&a>-1)if(t&&t instanceof KeyboardEvent)switch(t.keyCode){case p.keyCodes.DOWN:case p.keyCodes.RIGHT:r.setToBlock(n.blocks[Math.max(i,a)],r.positions.END);break;case p.keyCodes.UP:case p.keyCodes.LEFT:r.setToBlock(n.blocks[Math.min(i,a)],r.positions.START);break;default:r.setToBlock(n.blocks[Math.max(i,a)],r.positions.END)}else r.setToBlock(n.blocks[Math.max(i,a)],r.positions.END);this.firstSelectedBlock=this.lastSelectedBlock=null}},{key:"enableCrossBlockSelection",value:function(t){var e=this.Editor.UI;d.default.isCollapsed||this.Editor.BlockSelection.clearSelection(t),e.nodes.redactor.contains(t.target)?this.watchSelection(t):this.Editor.BlockSelection.clearSelection(t)}},{key:"toggleBlocksSelectedState",value:function(t,e){for(var n=this.Editor,o=n.BlockManager,r=n.BlockSelection,i=o.blocks.indexOf(t),a=o.blocks.indexOf(e),s=t.selected!==e.selected,l=Math.min(i,a);l<=Math.max(i,a);l++){var c=o.blocks[l];c!==this.firstSelectedBlock&&c!==(s?t:e)&&(o.blocks[l].selected=!o.blocks[l].selected,r.clearCache())}}},{key:"isCrossBlockSelectionStarted",get:function(){return!!this.firstSelectedBlock&&!!this.lastSelectedBlock}}]),f}(f.default);o.default=y,y.displayName="CrossBlockSelection",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(23),n(24),n(2),n(3),n(5),n(6),n(4),n(25),n(9)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u,f,d){"use strict";var p=n(1);function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=p(r),i=p(i),a=p(a),s=p(s),l=p(l),c=p(c),u=p(u),f=p(f);var v=function(t){(0,l.default)(d,t);var e,n,o=(e=d,function(){var t,n=(0,u.default)(e);if(h()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,c.default)(this,t)});function d(){var t;return(0,a.default)(this,d),(t=o.apply(this,arguments)).isStartedAtEditor=!1,t}return(0,s.default)(d,[{key:"toggleReadOnly",value:function(t){t?this.disableModuleBindings():this.enableModuleBindings()}},{key:"enableModuleBindings",value:function(){var t=this,e=this.Editor.UI;this.readOnlyMutableListeners.on(e.nodes.holder,"drop",function(){var e=(0,i.default)(r.default.mark((function e(n){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.processDrop(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),!0),this.readOnlyMutableListeners.on(e.nodes.holder,"dragstart",(function(){t.processDragStart()})),this.readOnlyMutableListeners.on(e.nodes.holder,"dragover",(function(e){t.processDragOver(e)}),!0)}},{key:"disableModuleBindings",value:function(){this.readOnlyMutableListeners.clearAll()}},{key:"processDrop",value:(n=(0,i.default)(r.default.mark((function t(e){var n,o,i,a,s,l;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.Editor,o=n.BlockManager,i=n.Caret,a=n.Paste,e.preventDefault(),o.blocks.forEach((function(t){t.dropTarget=!1})),f.default.isAtEditor&&!f.default.isCollapsed&&this.isStartedAtEditor&&document.execCommand("delete"),this.isStartedAtEditor=!1,(s=o.setCurrentBlockByChildNode(e.target))?this.Editor.Caret.setToBlock(s,i.positions.END):(l=o.setCurrentBlockByChildNode(o.lastBlock.holder),this.Editor.Caret.setToBlock(l,i.positions.END)),t.next=9,a.processDataTransfer(e.dataTransfer,!0);case 9:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"processDragStart",value:function(){f.default.isAtEditor&&!f.default.isCollapsed&&(this.isStartedAtEditor=!0),this.Editor.InlineToolbar.close()}},{key:"processDragOver",value:function(t){t.preventDefault()}}]),d}((d=p(d)).default);o.default=v,v.displayName="DragNDrop",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u){"use strict";var f=n(8),d=n(1);function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=d(r),i=d(i),a=d(a),s=d(s),l=d(l),c=d(c),u=f(u);var h=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,l.default)(e);if(p()){var o=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).disabled=!1,t}return(0,i.default)(o,[{key:"enable",value:function(){this.disabled=!1}},{key:"disable",value:function(){this.disabled=!0}},{key:"onChange",value:function(t){!this.disabled&&u.isFunction(this.config.onChange)&&this.config.onChange(this.Editor.API.methods,t)}}]),o}(c.default);o.default=h,h.displayName="ModificationsObserver",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(42),n(30),n(23),n(24),n(2),n(3),n(5),n(6),n(4),n(9),n(14),n(7),n(66)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u,f,d,p,h,v,g){"use strict";var y=n(8),b=n(1);function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=b(r),i=b(i),a=b(a),s=b(s),l=b(l),c=b(c),u=b(u),f=b(f),d=b(d),p=b(p),h=b(h),v=y(v);var k=function(t){(0,u.default)(T,t);var e,n,o,p,y,b,k,x,w,S=(e=T,function(){var t,n=(0,d.default)(e);if(m()){var o=(0,d.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,f.default)(this,t)});function T(){var t;return(0,l.default)(this,T),(t=S.apply(this,arguments)).MIME_TYPE="application/x-editor-js",t.toolsTags={},t.tagsByTool={},t.toolsPatterns=[],t.toolsFiles={},t.exceptionList=[],t.processTool=function(e){try{var n=e.create({},{},!1);if(!1===e.pasteConfig)return void t.exceptionList.push(e.name);if(!v.isFunction(n.onPaste))return;t.getTagsConfig(e),t.getFilesConfig(e),t.getPatternsConfig(e)}catch(t){v.log("Paste handling for ??".concat(e.name,"?? Tool hasn't been set up because of the error"),"warn",t)}},t.handlePasteEvent=function(){var e=(0,s.default)(a.default.mark((function e(n){var o,r,i;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.Editor,r=o.BlockManager,i=o.Toolbar,r.currentBlock&&(!t.isNativeBehaviour(n.target)||n.clipboardData.types.includes("Files"))){e.next=3;break}return e.abrupt("return");case 3:if(!r.currentBlock||!t.exceptionList.includes(r.currentBlock.name)){e.next=5;break}return e.abrupt("return");case 5:n.preventDefault(),t.processDataTransfer(n.clipboardData),r.clearFocused(),i.close();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return(0,c.default)(T,[{key:"prepare",value:(w=(0,s.default)(a.default.mark((function t(){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.processTools();case 1:case"end":return t.stop()}}),t,this)}))),function(){return w.apply(this,arguments)})},{key:"toggleReadOnly",value:function(t){t?this.unsetCallback():this.setCallback()}},{key:"processDataTransfer",value:(x=(0,s.default)(a.default.mark((function t(e){var n,o,r,i,s,l,c,u,f,d=arguments;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=d.length>1&&void 0!==d[1]&&d[1],o=this.Editor.Tools,!((r=e.types).includes?r.includes("Files"):r.contains("Files"))){t.next=8;break}return t.next=7,this.processFiles(e.files);case 7:return t.abrupt("return");case 8:if(i=e.getData(this.MIME_TYPE),s=e.getData("text/plain"),l=e.getData("text/html"),!i){t.next=19;break}return t.prev=12,this.insertEditorJSData(JSON.parse(i)),t.abrupt("return");case 17:t.prev=17,t.t0=t.catch(12);case 19:if(n&&s.trim()&&l.trim()&&(l="<p>"+(l.trim()?l:s)+"</p>"),c=Object.keys(this.toolsTags).reduce((function(t,e){return t[e.toLowerCase()]=!0,t}),{}),u=Object.assign({},c,o.getAllInlineToolsSanitizeConfig(),{br:{}}),(f=(0,g.clean)(l,u)).trim()&&f.trim()!==s&&h.default.isHTMLString(f)){t.next=28;break}return t.next=26,this.processText(s);case 26:t.next=30;break;case 28:return t.next=30,this.processText(f,!0);case 30:case"end":return t.stop()}}),t,this,[[12,17]])}))),function(t){return x.apply(this,arguments)})},{key:"processText",value:(k=(0,s.default)(a.default.mark((function t(e){var n,o,r,i,l,c,u,f=this,d=arguments;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=d.length>1&&void 0!==d[1]&&d[1],o=this.Editor,r=o.Caret,i=o.BlockManager,(l=n?this.processHTML(e):this.processPlain(e)).length){t.next=5;break}return t.abrupt("return");case 5:if(1!==l.length){t.next=8;break}return l[0].isBlock?this.processSingleBlock(l.pop()):this.processInlinePaste(l.pop()),t.abrupt("return");case 8:c=i.currentBlock&&i.currentBlock.tool.isDefault,u=c&&i.currentBlock.isEmpty,l.map(function(){var t=(0,s.default)(a.default.mark((function t(e,n){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f.insertBlock(e,0===n&&u));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),i.currentBlock&&r.setToBlock(i.currentBlock,r.positions.END);case 12:case"end":return t.stop()}}),t,this)}))),function(t){return k.apply(this,arguments)})},{key:"setCallback",value:function(){this.listeners.on(this.Editor.UI.nodes.holder,"paste",this.handlePasteEvent)}},{key:"unsetCallback",value:function(){this.listeners.off(this.Editor.UI.nodes.holder,"paste",this.handlePasteEvent)}},{key:"processTools",value:function(){var t=this.Editor.Tools.blockTools;Array.from(t.values()).forEach(this.processTool)}},{key:"getTagsConfig",value:function(t){var e=this,n=t.pasteConfig.tags||[];n.forEach((function(n){Object.prototype.hasOwnProperty.call(e.toolsTags,n)?v.log("Paste handler for ??".concat(t.name,"?? Tool on ??").concat(n,"?? tag is skipped ")+"because it is already used by ??".concat(e.toolsTags[n].tool.name,"?? Tool."),"warn"):e.toolsTags[n.toUpperCase()]={tool:t}})),this.tagsByTool[t.name]=n.map((function(t){return t.toUpperCase()}))}},{key:"getFilesConfig",value:function(t){var e=t.pasteConfig.files,n=void 0===e?{}:e,o=n.extensions,r=n.mimeTypes;(o||r)&&(o&&!Array.isArray(o)&&(v.log("??extensions?? property of the onDrop config for ??".concat(t.name,"?? Tool should be an array")),o=[]),r&&!Array.isArray(r)&&(v.log("??mimeTypes?? property of the onDrop config for ??".concat(t.name,"?? Tool should be an array")),r=[]),r&&(r=r.filter((function(e){return!!v.isValidMimeType(e)||(v.log("MIME type value ??".concat(e,"?? for the ??").concat(t.name,"?? Tool is not a valid MIME type"),"warn"),!1)}))),this.toolsFiles[t.name]={extensions:o||[],mimeTypes:r||[]})}},{key:"getPatternsConfig",value:function(t){var e=this;t.pasteConfig.patterns&&!v.isEmpty(t.pasteConfig.patterns)&&Object.entries(t.pasteConfig.patterns).forEach((function(n){var o=(0,i.default)(n,2),r=o[0],a=o[1];a instanceof RegExp||v.log("Pattern ".concat(a," for ??").concat(t.name,"?? Tool is skipped because it should be a Regexp instance."),"warn"),e.toolsPatterns.push({key:r,pattern:a,tool:t})}))}},{key:"isNativeBehaviour",value:function(t){return h.default.isNativeInput(t)}},{key:"processFiles",value:(b=(0,s.default)(a.default.mark((function t(e){var n,o,r,i,s=this;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.Editor.BlockManager,t.next=3,Promise.all(Array.from(e).map((function(t){return s.processFile(t)})));case 3:o=(o=t.sent).filter((function(t){return!!t})),r=n.currentBlock.tool.isDefault,i=r&&n.currentBlock.isEmpty,o.forEach((function(t,e){n.paste(t.type,t.event,0===e&&i)}));case 8:case"end":return t.stop()}}),t,this)}))),function(t){return b.apply(this,arguments)})},{key:"processFile",value:(y=(0,s.default)(a.default.mark((function t(e){var n,o,r,s,l;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=v.getFileExtension(e),o=Object.entries(this.toolsFiles).find((function(t){var o=(0,i.default)(t,2),r=(o[0],o[1]),a=r.mimeTypes,s=r.extensions,l=e.type.split("/"),c=(0,i.default)(l,2),u=c[0],f=c[1],d=s.find((function(t){return t.toLowerCase()===n.toLowerCase()})),p=a.find((function(t){var e=t.split("/"),n=(0,i.default)(e,2),o=n[0],r=n[1];return o===u&&(r===f||"*"===r)}));return!!d||!!p}))){t.next=4;break}return t.abrupt("return");case 4:return r=(0,i.default)(o,1),s=r[0],l=this.composePasteEvent("file",{file:e}),t.abrupt("return",{event:l,type:s});case 7:case"end":return t.stop()}}),t,this)}))),function(t){return y.apply(this,arguments)})},{key:"processHTML",value:function(t){var e=this,n=this.Editor.Tools,o=h.default.make("DIV");return o.innerHTML=t,this.getNodes(o).map((function(t){var o,r=n.defaultTool,i=!1;switch(t.nodeType){case Node.DOCUMENT_FRAGMENT_NODE:(o=h.default.make("div")).appendChild(t);break;case Node.ELEMENT_NODE:o=t,i=!0,e.toolsTags[o.tagName]&&(r=e.toolsTags[o.tagName].tool)}var a=r.pasteConfig.tags.reduce((function(t,e){return t[e.toLowerCase()]={},t}),{}),s=Object.assign({},a,r.baseSanitizeConfig);o.innerHTML=(0,g.clean)(o.innerHTML,s);var l=e.composePasteEvent("tag",{data:o});return{content:o,isBlock:i,tool:r.name,event:l}})).filter((function(t){return!h.default.isNodeEmpty(t.content)||h.default.isSingleTag(t.content)}))}},{key:"processPlain",value:function(t){var e=this,n=this.config.defaultBlock;if(!t)return[];var o=n;return t.split(/\r?\n/).filter((function(t){return t.trim()})).map((function(t){var n=h.default.make("div");n.textContent=t;var r=e.composePasteEvent("tag",{data:n});return{content:n,tool:o,isBlock:!1,event:r}}))}},{key:"processSingleBlock",value:(p=(0,s.default)(a.default.mark((function t(e){var n,o,r,i;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.Editor,o=n.Caret,r=n.BlockManager,(i=r.currentBlock)&&e.tool===i.name&&h.default.containsOnlyInlineElements(e.content.innerHTML)){t.next=5;break}return this.insertBlock(e,(null==i?void 0:i.tool.isDefault)&&i.isEmpty),t.abrupt("return");case 5:o.insertContentAtCaretPosition(e.content.innerHTML);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return p.apply(this,arguments)})},{key:"processInlinePaste",value:(o=(0,s.default)(a.default.mark((function t(e){var n,o,r,i,s,l,c,u;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.Editor,o=n.BlockManager,r=n.Caret,i=e.content,!(o.currentBlock&&o.currentBlock.tool.isDefault&&i.textContent.length<T.PATTERN_PROCESSING_MAX_LENGTH)){t.next=12;break}return t.next=6,this.processPattern(i.textContent);case 6:if(!(s=t.sent)){t.next=12;break}return l=o.currentBlock&&o.currentBlock.tool.isDefault&&o.currentBlock.isEmpty,c=o.paste(s.tool,s.event,l),r.setToBlock(c,r.positions.END),t.abrupt("return");case 12:o.currentBlock&&o.currentBlock.currentInput?(u=o.currentBlock.tool.baseSanitizeConfig,document.execCommand("insertHTML",!1,(0,g.clean)(i.innerHTML,u))):this.insertBlock(e);case 13:case"end":return t.stop()}}),t,this)}))),function(t){return o.apply(this,arguments)})},{key:"processPattern",value:(n=(0,s.default)(a.default.mark((function t(e){var n,o;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.toolsPatterns.find((function(t){var n=t.pattern.exec(e);return!!n&&e===n.shift()}))){t.next=3;break}return t.abrupt("return");case 3:return o=this.composePasteEvent("pattern",{key:n.key,data:e}),t.abrupt("return",{event:o,tool:n.tool.name});case 5:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"insertBlock",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=this.Editor,r=o.BlockManager,i=o.Caret,a=r.currentBlock;if(n&&a&&a.isEmpty)return e=r.paste(t.tool,t.event,!0),void i.setToBlock(e,i.positions.END);e=r.paste(t.tool,t.event),i.setToBlock(e,i.positions.END)}},{key:"insertEditorJSData",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.Caret,r=e.Tools;(0,g.sanitizeBlocks)(t,(function(t){return r.blockTools.get(t).sanitizeConfig})).forEach((function(t,e){var r=t.tool,i=t.data,a=!1;0===e&&(a=n.currentBlock&&n.currentBlock.tool.isDefault&&n.currentBlock.isEmpty);var s=n.insert({tool:r,data:i,replace:a});o.setToBlock(s,o.positions.END)}))}},{key:"processElementNode",value:function(t,e,n){var o=Object.keys(this.toolsTags),i=t,a=(this.toolsTags[i.tagName]||{}).tool,s=this.tagsByTool[null==a?void 0:a.name]||[],l=o.includes(i.tagName),c=h.default.blockElements.includes(i.tagName.toLowerCase()),u=Array.from(i.children).some((function(t){var e=t.tagName;return o.includes(e)&&!s.includes(e)})),f=Array.from(i.children).some((function(t){var e=t.tagName;return h.default.blockElements.includes(e.toLowerCase())}));return c||l||u?l&&!u||c&&!f&&!u?[].concat((0,r.default)(e),[n,i]):void 0:(n.appendChild(i),[].concat((0,r.default)(e),[n]))}},{key:"getNodes",value:function(t){var e,n=this;return Array.from(t.childNodes).reduce((function t(o,i){if(h.default.isEmpty(i)&&!h.default.isSingleTag(i))return o;var a=o[o.length-1],s=new DocumentFragment;switch(a&&h.default.isFragment(a)&&(s=o.pop()),i.nodeType){case Node.ELEMENT_NODE:if(e=n.processElementNode(i,o,s))return e;break;case Node.TEXT_NODE:return s.appendChild(i),[].concat((0,r.default)(o),[s]);default:return[].concat((0,r.default)(o),[s])}return[].concat((0,r.default)(o),(0,r.default)(Array.from(i.childNodes).reduce(t,[])))}),[])}},{key:"composePasteEvent",value:function(t,e){return new CustomEvent(t,{detail:e})}}]),T}(p.default);o.default=k,k.displayName="Paste",k.PATTERN_PROCESSING_MAX_LENGTH=450,t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(23),n(30),n(24),n(2),n(3),n(5),n(6),n(4),n(9),n(151)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u,f,d,p){"use strict";var h=n(1);function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=h(r),i=h(i),a=h(a),s=h(s),l=h(l),c=h(c),u=h(u),f=h(f);var g=function(t){(0,c.default)(h,t);var e,n,o,d=(e=h,function(){var t,n=(0,f.default)(e);if(v()){var o=(0,f.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,u.default)(this,t)});function h(){var t;return(0,s.default)(this,h),(t=d.apply(this,arguments)).toolsDontSupportReadOnly=[],t.readOnlyEnabled=!1,t}return(0,l.default)(h,[{key:"prepare",value:(o=(0,a.default)(r.default.mark((function t(){var e,n,o;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.Editor.Tools,n=e.blockTools,o=[],Array.from(n.entries()).forEach((function(t){var e=(0,i.default)(t,2),n=e[0];e[1].isReadOnlySupported||o.push(n)})),this.toolsDontSupportReadOnly=o,this.config.readOnly&&o.length>0&&this.throwCriticalError(),this.toggle(this.config.readOnly);case 7:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},{key:"toggle",value:(n=(0,a.default)(r.default.mark((function t(){var e,n,o,i,a=arguments;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(e=a.length>0&&void 0!==a[0]?a[0]:!this.readOnlyEnabled)&&this.toolsDontSupportReadOnly.length>0&&this.throwCriticalError(),n=this.readOnlyEnabled,this.readOnlyEnabled=e,t.t0=r.default.keys(this.Editor);case 5:if((t.t1=t.t0()).done){t.next=12;break}if(o=t.t1.value,this.Editor[o].toggleReadOnly){t.next=9;break}return t.abrupt("continue",5);case 9:this.Editor[o].toggleReadOnly(e),t.next=5;break;case 12:if(n!==e){t.next=14;break}return t.abrupt("return",this.readOnlyEnabled);case 14:return t.next=16,this.Editor.Saver.save();case 16:return i=t.sent,t.next=19,this.Editor.BlockManager.clear();case 19:return t.next=21,this.Editor.Renderer.render(i.blocks);case 21:return t.abrupt("return",this.readOnlyEnabled);case 22:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"throwCriticalError",value:function(){throw new p.CriticalError("To enable read-only mode all connected tools should support it. Tools ".concat(this.toolsDontSupportReadOnly.join(", ")," don't support read-only mode."))}},{key:"isEnabled",get:function(){return this.readOnlyEnabled}}]),h}((d=h(d)).default);o.default=g,g.displayName="ReadOnly",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(9),n(14),n(25),n(67),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u,f,d,p){"use strict";var h=n(8),v=n(1);function g(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(t){if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(t,e):void 0}}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,i=!0,a=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){a=!0,r=t},f:function(){try{i||null==o.return||o.return()}finally{if(a)throw r}}}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=v(r),i=v(i),a=v(a),s=v(s),l=v(l),c=v(c),u=v(u),f=v(f),d=v(d),p=h(p);var m=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,l.default)(e);if(b()){var o=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).isRectSelectionActivated=!1,t.SCROLL_SPEED=3,t.HEIGHT_OF_SCROLL_ZONE=40,t.BOTTOM_SCROLL_ZONE=1,t.TOP_SCROLL_ZONE=2,t.MAIN_MOUSE_BUTTON=0,t.mousedown=!1,t.isScrolling=!1,t.inScrollZone=null,t.startX=0,t.startY=0,t.mouseX=0,t.mouseY=0,t.stackOfSelected=[],t.listenerIds=[],t}return(0,i.default)(o,[{key:"prepare",value:function(){this.enableModuleBindings()}},{key:"startSelection",value:function(t,e){var n=document.elementFromPoint(t-window.pageXOffset,e-window.pageYOffset);n.closest(".".concat(this.Editor.Toolbar.CSS.toolbar))||(this.Editor.BlockSelection.allBlocksSelected=!1,this.clearSelection(),this.stackOfSelected=[]);var o=[".".concat(d.default.CSS.content),".".concat(this.Editor.Toolbar.CSS.toolbar),".".concat(this.Editor.InlineToolbar.CSS.inlineToolbar)],r=n.closest("."+this.Editor.UI.CSS.editorWrapper),i=o.some((function(t){return!!n.closest(t)}));r&&!i&&(this.mousedown=!0,this.startX=t,this.startY=e)}},{key:"endSelection",value:function(){this.mousedown=!1,this.startX=0,this.startY=0,this.overlayRectangle.style.display="none"}},{key:"isRectActivated",value:function(){return this.isRectSelectionActivated}},{key:"clearSelection",value:function(){this.isRectSelectionActivated=!1}},{key:"enableModuleBindings",value:function(){var t=this,e=this.genHTML().container;this.listeners.on(e,"mousedown",(function(e){t.processMouseDown(e)}),!1),this.listeners.on(document.body,"mousemove",p.throttle((function(e){t.processMouseMove(e)}),10),{passive:!0}),this.listeners.on(document.body,"mouseleave",(function(){t.processMouseLeave()})),this.listeners.on(window,"scroll",p.throttle((function(e){t.processScroll(e)}),10),{passive:!0}),this.listeners.on(document.body,"mouseup",(function(){t.processMouseUp()}),!1)}},{key:"processMouseDown",value:function(t){t.button===this.MAIN_MOUSE_BUTTON&&(null!==t.target.closest(u.default.allInputsSelector)||this.startSelection(t.pageX,t.pageY))}},{key:"processMouseMove",value:function(t){this.changingRectangle(t),this.scrollByZones(t.clientY)}},{key:"processMouseLeave",value:function(){this.clearSelection(),this.endSelection()}},{key:"processScroll",value:function(t){this.changingRectangle(t)}},{key:"processMouseUp",value:function(){this.clearSelection(),this.endSelection()}},{key:"scrollByZones",value:function(t){this.inScrollZone=null,t<=this.HEIGHT_OF_SCROLL_ZONE&&(this.inScrollZone=this.TOP_SCROLL_ZONE),document.documentElement.clientHeight-t<=this.HEIGHT_OF_SCROLL_ZONE&&(this.inScrollZone=this.BOTTOM_SCROLL_ZONE),this.inScrollZone?this.isScrolling||(this.scrollVertical(this.inScrollZone===this.TOP_SCROLL_ZONE?-this.SCROLL_SPEED:this.SCROLL_SPEED),this.isScrolling=!0):this.isScrolling=!1}},{key:"genHTML",value:function(){var t=this.Editor.UI,e=t.nodes.holder.querySelector("."+t.CSS.editorWrapper),n=u.default.make("div",o.CSS.overlay,{}),r=u.default.make("div",o.CSS.overlayContainer,{}),i=u.default.make("div",o.CSS.rect,{});return r.appendChild(i),n.appendChild(r),e.appendChild(n),this.overlayRectangle=i,{container:e,overlay:n}}},{key:"scrollVertical",value:function(t){var e=this;if(this.inScrollZone&&this.mousedown){var n=window.pageYOffset;window.scrollBy(0,t),this.mouseY+=window.pageYOffset-n,setTimeout((function(){e.scrollVertical(t)}),0)}}},{key:"changingRectangle",value:function(t){if(this.mousedown){void 0!==t.pageY&&(this.mouseX=t.pageX,this.mouseY=t.pageY);var e=this.genInfoForMouseSelection(),n=e.rightPos,o=e.leftPos,r=e.index,i=this.startX>n&&this.mouseX>n,a=this.startX<o&&this.mouseX<o;this.rectCrossesBlocks=!(i||a),this.isRectSelectionActivated||(this.rectCrossesBlocks=!1,this.isRectSelectionActivated=!0,this.shrinkRectangleToPoint(),this.overlayRectangle.style.display="block"),this.updateRectangleSize(),this.Editor.Toolbar.close(),void 0!==r&&(this.trySelectNextBlock(r),this.inverseSelection(),f.default.get().removeAllRanges())}}},{key:"shrinkRectangleToPoint",value:function(){this.overlayRectangle.style.left="".concat(this.startX-window.pageXOffset,"px"),this.overlayRectangle.style.top="".concat(this.startY-window.pageYOffset,"px"),this.overlayRectangle.style.bottom="calc(100% - ".concat(this.startY-window.pageYOffset,"px"),this.overlayRectangle.style.right="calc(100% - ".concat(this.startX-window.pageXOffset,"px")}},{key:"inverseSelection",value:function(){var t=this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;if(this.rectCrossesBlocks&&!t){var e,n=g(this.stackOfSelected);try{for(n.s();!(e=n.n()).done;){var o=e.value;this.Editor.BlockSelection.selectBlockByIndex(o)}}catch(t){n.e(t)}finally{n.f()}}if(!this.rectCrossesBlocks&&t){var r,i=g(this.stackOfSelected);try{for(i.s();!(r=i.n()).done;){var a=r.value;this.Editor.BlockSelection.unSelectBlockByIndex(a)}}catch(t){i.e(t)}finally{i.f()}}}},{key:"updateRectangleSize",value:function(){this.mouseY>=this.startY?(this.overlayRectangle.style.top="".concat(this.startY-window.pageYOffset,"px"),this.overlayRectangle.style.bottom="calc(100% - ".concat(this.mouseY-window.pageYOffset,"px")):(this.overlayRectangle.style.bottom="calc(100% - ".concat(this.startY-window.pageYOffset,"px"),this.overlayRectangle.style.top="".concat(this.mouseY-window.pageYOffset,"px")),this.mouseX>=this.startX?(this.overlayRectangle.style.left="".concat(this.startX-window.pageXOffset,"px"),this.overlayRectangle.style.right="calc(100% - ".concat(this.mouseX-window.pageXOffset,"px")):(this.overlayRectangle.style.right="calc(100% - ".concat(this.startX-window.pageXOffset,"px"),this.overlayRectangle.style.left="".concat(this.mouseX-window.pageXOffset,"px"))}},{key:"genInfoForMouseSelection",value:function(){var t,e=document.body.offsetWidth/2,n=this.mouseY-window.pageYOffset,o=document.elementFromPoint(e,n),r=this.Editor.BlockManager.getBlockByChildNode(o);void 0!==r&&(t=this.Editor.BlockManager.blocks.findIndex((function(t){return t.holder===r.holder})));var i=this.Editor.BlockManager.lastBlock.holder.querySelector("."+d.default.CSS.content),a=Number.parseInt(window.getComputedStyle(i).width,10)/2;return{index:t,leftPos:e-a,rightPos:e+a}}},{key:"addBlockInSelection",value:function(t){this.rectCrossesBlocks&&this.Editor.BlockSelection.selectBlockByIndex(t),this.stackOfSelected.push(t)}},{key:"trySelectNextBlock",value:function(t){var e=this,n=this.stackOfSelected[this.stackOfSelected.length-1]===t,o=this.stackOfSelected.length;if(!n){var r=this.stackOfSelected[o-1]-this.stackOfSelected[o-2]>0,i=0;o>1&&(i=r?1:-1);var a=t>this.stackOfSelected[o-1]&&1===i,s=t<this.stackOfSelected[o-1]&&-1===i,l=!(a||s||0===i);if(l||!(t>this.stackOfSelected[o-1]||void 0===this.stackOfSelected[o-1])){if(!l&&t<this.stackOfSelected[o-1])for(var c=this.stackOfSelected[o-1]-1;c>=t;c--)this.addBlockInSelection(c);else if(l){var u,f=o-1;for(u=t>this.stackOfSelected[o-1]?function(){return t>e.stackOfSelected[f]}:function(){return t<e.stackOfSelected[f]};u();)this.rectCrossesBlocks&&this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[f]),this.stackOfSelected.pop(),f--}}else for(var d=this.stackOfSelected[o-1]+1||t;d<=t;d++)this.addBlockInSelection(d)}}}],[{key:"CSS",get:function(){return{overlay:"codex-editor-overlay",overlayContainer:"codex-editor-overlay__container",rect:"codex-editor-overlay__rectangle",topScrollZone:"codex-editor-overlay__scroll-zone--top",bottomScrollZone:"codex-editor-overlay__scroll-zone--bottom"}}}]),o}(c.default);o.default=m,m.displayName="RectangleSelection",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(23),n(24),n(2),n(3),n(5),n(6),n(4),n(9),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u,f,d){"use strict";var p=n(8),h=n(1);function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=h(r),i=h(i),a=h(a),s=h(s),l=h(l),c=h(c),u=h(u),f=h(f),d=p(d);var g=function(t){(0,l.default)(p,t);var e,n,o,f=(e=p,function(){var t,n=(0,u.default)(e);if(v()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,c.default)(this,t)});function p(){return(0,a.default)(this,p),f.apply(this,arguments)}return(0,s.default)(p,[{key:"render",value:(o=(0,i.default)(r.default.mark((function t(e){var n,o,i=this;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.map((function(t){return{function:function(){return i.insertBlock(t)}}})),this.Editor.ModificationsObserver.disable(),t.next=4,d.sequence(n);case 4:return o=t.sent,this.Editor.ModificationsObserver.enable(),this.Editor.UI.checkEmptiness(),t.abrupt("return",o);case 8:case"end":return t.stop()}}),t,this)}))),function(t){return o.apply(this,arguments)})},{key:"insertBlock",value:(n=(0,i.default)(r.default.mark((function t(e){var n,o,i,a,s,l,c,u,f;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.Editor,o=n.Tools,i=n.BlockManager,a=e.type,s=e.data,l=e.tunes,c=e.id,!o.available.has(a)){t.next=13;break}t.prev=3,i.insert({id:c,tool:a,data:s,tunes:l}),t.next=11;break;case 7:throw t.prev=7,t.t0=t.catch(3),d.log("Block ??".concat(a,"?? skipped because of plugins error"),"warn",s),Error(t.t0);case 11:t.next=18;break;case 13:u={savedData:{id:c,type:a,data:s},title:a},o.unavailable.has(a)&&(f=o.unavailable.get(a).toolbox,u.title=(null==f?void 0:f.title)||u.title),i.insert({id:c,tool:o.stubTool,data:u}).stretched=!0,d.log("Tool ??".concat(a,"?? is not found. Check 'tools' property at your initial Editor.js config."),"warn");case 18:case"end":return t.stop()}}),t,this,[[3,7]])}))),function(t){return n.apply(this,arguments)})}]),p}(f.default);o.default=g,g.displayName="Renderer",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(23),n(24),n(2),n(3),n(5),n(6),n(4),n(9),n(7),n(66)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u,f,d,p){"use strict";var h=n(8),v=n(1);function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=v(r),i=v(i),a=v(a),s=v(s),l=v(l),c=v(c),u=v(u),f=v(f),d=h(d);var y=function(t){(0,l.default)(h,t);var e,n,o,f=(e=h,function(){var t,n=(0,u.default)(e);if(g()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,c.default)(this,t)});function h(){return(0,a.default)(this,h),f.apply(this,arguments)}return(0,s.default)(h,[{key:"save",value:(o=(0,i.default)(r.default.mark((function t(){var e,n,o,i,a,s,l,c=this;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.Editor,n=e.BlockManager,o=e.Tools,i=n.blocks,a=[],t.prev=2,i.forEach((function(t){a.push(c.getSavedData(t))})),t.next=6,Promise.all(a);case 6:return s=t.sent,t.next=9,(0,p.sanitizeBlocks)(s,(function(t){return o.blockTools.get(t).sanitizeConfig}));case 9:return l=t.sent,t.abrupt("return",this.makeOutput(l));case 13:t.prev=13,t.t0=t.catch(2),d.logLabeled("Saving failed due to the Error %o","error",t.t0);case 16:case"end":return t.stop()}}),t,this,[[2,13]])}))),function(){return o.apply(this,arguments)})},{key:"getSavedData",value:(n=(0,i.default)(r.default.mark((function t(e){var n,o;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.save();case 2:if(n=t.sent,t.t0=n,!t.t0){t.next=8;break}return t.next=7,e.validate(n.data);case 7:t.t0=t.sent;case 8:return o=t.t0,t.abrupt("return",Object.assign(Object.assign({},n),{isValid:o}));case 10:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)})},{key:"makeOutput",value:function(t){var e=this,n=0,o=[];return d.log("[Editor.js saving]:","groupCollapsed"),t.forEach((function(t){var r=t.id,i=t.tool,a=t.data,s=t.tunes,l=t.time,c=t.isValid;if(n+=l,d.log("".concat(i.charAt(0).toUpperCase()+i.slice(1)),"group"),!c)return d.log("Block ??".concat(i,"?? skipped because saved data is invalid")),void d.log(void 0,"groupEnd");if(d.log(a),d.log(void 0,"groupEnd"),i!==e.Editor.Tools.stubTool){var u=Object.assign({id:r,type:i,data:a},!d.isEmpty(s)&&{tunes:s});o.push(u)}else o.push(a)})),d.log("Total","log",n),d.log(void 0,"groupEnd"),{time:+new Date,blocks:o,version:"2.24.2"}}}]),h}(f.default);o.default=y,y.displayName="Saver",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(30),n(2),n(3),n(5),n(6),n(4),n(9),n(14),n(61),n(7),n(25)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u,f,d,p,h){"use strict";var v=n(8),g=n(1);function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=g(r),i=g(i),a=g(a),s=g(s),l=g(l),c=g(c),u=g(u),f=g(f),d=g(d),p=v(p),h=g(h);var b=function(t){(0,s.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(y()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function o(){var t;return(0,i.default)(this,o),(t=n.apply(this,arguments)).buttons=[],t.flipper=null,t.selection=new h.default,t}return(0,a.default)(o,[{key:"make",value:function(){this.nodes.wrapper=f.default.make("div",this.CSS.wrapper),this.nodes.toolSettings=f.default.make("div",this.CSS.toolSettings),this.nodes.defaultSettings=f.default.make("div",this.CSS.defaultSettings),f.default.append(this.nodes.wrapper,[this.nodes.toolSettings,this.nodes.defaultSettings]),this.enableFlipper()}},{key:"destroy",value:function(){this.flipper&&(this.flipper.deactivate(),this.flipper=null),this.removeAllNodes()}},{key:"open",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.Editor.BlockManager.currentBlock;this.nodes.wrapper.classList.add(this.CSS.wrapperOpened),this.selection.save(),t.selected=!0,this.Editor.BlockSelection.clearCache(),this.addToolSettings(t),this.addTunes(t),this.eventsDispatcher.emit(this.events.opened),this.flipper.activate(this.blockTunesButtons)}},{key:"close",value:function(){this.nodes.wrapper.classList.remove(this.CSS.wrapperOpened),h.default.isAtEditor||this.selection.restore(),this.selection.clearSaved(),!this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted&&this.Editor.BlockManager.currentBlock&&(this.Editor.BlockManager.currentBlock.selected=!1),this.nodes.toolSettings.innerHTML="",this.nodes.defaultSettings.innerHTML="",this.eventsDispatcher.emit(this.events.closed),this.buttons=[],this.flipper.deactivate()}},{key:"addToolSettings",value:function(t){var e=t.renderSettings();e&&f.default.append(this.nodes.toolSettings,e)}},{key:"addTunes",value:function(t){var e=t.renderTunes(),n=(0,r.default)(e,2),o=n[0],i=n[1];f.default.append(this.nodes.toolSettings,o),f.default.append(this.nodes.defaultSettings,i)}},{key:"enableFlipper",value:function(){var t=this;this.flipper=new d.default({focusedItemClass:this.CSS.focusedButton,activateCallback:function(e){e&&f.default.canSetCaret(e)?t.close():p.delay((function(){t.Editor.Caret.setToBlock(t.Editor.BlockManager.currentBlock)}),50)()}})}},{key:"events",get:function(){return{opened:"block-settings-opened",closed:"block-settings-closed"}}},{key:"CSS",get:function(){return{wrapper:"ce-settings",wrapperOpened:"ce-settings--opened",toolSettings:"ce-settings__plugin-zone",defaultSettings:"ce-settings__default-zone",button:"ce-settings__button",focusedButton:"ce-settings__button--focused",focusedButtonAnimated:"ce-settings__button--focused-animated"}}},{key:"opened",get:function(){return this.nodes.wrapper.classList.contains(this.CSS.wrapperOpened)}},{key:"blockTunesButtons",get:function(){var t=this,e=this.Editor.StylesAPI;if(0!==this.buttons.length)return this.buttons;var n=this.nodes.toolSettings.querySelectorAll(".".concat(e.classes.settingsButton,", ").concat(f.default.allInputsSelector)),o=this.nodes.defaultSettings.querySelectorAll(".".concat(this.CSS.button));return n.forEach((function(e){t.buttons.push(e)})),o.forEach((function(e){t.buttons.push(e)})),this.buttons}}]),o}(u.default);o.default=b,b.displayName="BlockSettings",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(30),n(23),n(24),n(42),n(2),n(3),n(5),n(6),n(4),n(9),n(14),n(7),n(61),n(60),n(84),n(66)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u,f,d,p,h,v,g,y,b,m){"use strict";var k=n(8),x=n(1);function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=x(r),i=x(i),a=x(a),s=x(s),l=x(l),c=x(c),u=x(u),f=x(f),d=x(d),p=x(p),h=x(h),v=k(v),g=x(g),y=x(y);var S=function(t){(0,u.default)(p,t);var e,n,o=(e=p,function(){var t,n=(0,d.default)(e);if(w()){var o=(0,d.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,f.default)(this,t)});function p(){var t;return(0,l.default)(this,p),(t=o.apply(this,arguments)).opened=!1,t.tools={},t.flipper=null,t.togglingCallback=null,t}return(0,c.default)(p,[{key:"make",value:function(){this.nodes.wrapper=h.default.make("div",[p.CSS.conversionToolbarWrapper].concat((0,s.default)(this.isRtl?[this.Editor.UI.CSS.editorRtlFix]:[]))),this.nodes.tools=h.default.make("div",p.CSS.conversionToolbarTools);var t=h.default.make("div",p.CSS.conversionToolbarLabel,{textContent:y.default.ui(b.I18nInternalNS.ui.inlineToolbar.converter,"Convert to")});return this.addTools(),this.enableFlipper(),h.default.append(this.nodes.wrapper,t),h.default.append(this.nodes.wrapper,this.nodes.tools),this.nodes.wrapper}},{key:"destroy",value:function(){this.flipper&&(this.flipper.deactivate(),this.flipper=null),this.removeAllNodes()}},{key:"toggle",value:function(t){this.opened?this.close():this.open(),v.isFunction(t)&&(this.togglingCallback=t)}},{key:"open",value:function(){var t=this;this.filterTools(),this.opened=!0,this.nodes.wrapper.classList.add(p.CSS.conversionToolbarShowed),setTimeout((function(){t.flipper.activate(Object.values(t.tools).filter((function(t){return!t.classList.contains(p.CSS.conversionToolHidden)}))),t.flipper.focusFirst(),v.isFunction(t.togglingCallback)&&t.togglingCallback(!0)}),50)}},{key:"close",value:function(){this.opened=!1,this.flipper.deactivate(),this.nodes.wrapper.classList.remove(p.CSS.conversionToolbarShowed),v.isFunction(this.togglingCallback)&&this.togglingCallback(!1)}},{key:"hasTools",value:function(){var t=Object.keys(this.tools);return!(1===t.length&&t.shift()===this.config.defaultBlock)}},{key:"replaceWithBlock",value:(n=(0,a.default)(i.default.mark((function t(e){var n,o,r,a,s,l,c,u,f,d,p=this;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.Editor.BlockManager.currentBlock.tool,o=this.Editor.BlockManager.currentBlock.name,t.next=4,this.Editor.BlockManager.currentBlock.save();case 4:if(r=t.sent,a=r.data,o===e&&(e=this.config.defaultBlock),s=this.Editor.Tools.blockTools.get(e),l="",c=n.conversionConfig.export,!v.isFunction(c)){t.next=14;break}l=c(a),t.next=20;break;case 14:if(!v.isString(c)){t.next=18;break}l=a[c],t.next=20;break;case 18:return v.log("Conversion ??export?? property must be a string or function. String means key of saved data object to export. Function should export processed string to export."),t.abrupt("return");case 20:if(u=(0,m.clean)(l,s.sanitizeConfig),f={},d=s.conversionConfig.import,!v.isFunction(d)){t.next=27;break}f=d(u),t.next=33;break;case 27:if(!v.isString(d)){t.next=31;break}f[d]=u,t.next=33;break;case 31:return v.log("Conversion ??import?? property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."),t.abrupt("return");case 33:this.Editor.BlockManager.replace({tool:e,data:f}),this.Editor.BlockSelection.clearSelection(),this.close(),this.Editor.InlineToolbar.close(),v.delay((function(){p.Editor.Caret.setToBlock(p.Editor.BlockManager.currentBlock)}),10)();case 38:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"addTools",value:function(){var t=this,e=this.Editor.Tools.blockTools;Array.from(e.entries()).forEach((function(e){var n=(0,r.default)(e,2),o=n[0],i=n[1],a=i.toolbox,s=i.conversionConfig;!v.isEmpty(a)&&a.icon&&s&&s.import&&t.addTool(o,a.icon,a.title)}))}},{key:"addTool",value:function(t,e,n){var o=this,r=h.default.make("div",[p.CSS.conversionTool]),s=h.default.make("div",[p.CSS.conversionToolIcon]);r.dataset.tool=t,s.innerHTML=e,h.default.append(r,s),h.default.append(r,h.default.text(y.default.t(b.I18nInternalNS.toolNames,n||v.capitalize(t)))),h.default.append(this.nodes.tools,r),this.tools[t]=r,this.listeners.on(r,"click",(0,a.default)(i.default.mark((function e(){return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.replaceWithBlock(t);case 2:case"end":return e.stop()}}),e)}))))}},{key:"filterTools",value:function(){var t=this.Editor.BlockManager.currentBlock;Object.entries(this.tools).forEach((function(e){var n=(0,r.default)(e,2),o=n[0],i=n[1];i.hidden=!1,i.classList.toggle(p.CSS.conversionToolHidden,o===t.name)}))}},{key:"enableFlipper",value:function(){this.flipper=new g.default({focusedItemClass:p.CSS.conversionToolFocused})}}],[{key:"CSS",get:function(){return{conversionToolbarWrapper:"ce-conversion-toolbar",conversionToolbarShowed:"ce-conversion-toolbar--showed",conversionToolbarTools:"ce-conversion-toolbar__tools",conversionToolbarLabel:"ce-conversion-toolbar__label",conversionTool:"ce-conversion-tool",conversionToolHidden:"ce-conversion-tool--hidden",conversionToolIcon:"ce-conversion-tool__icon",conversionToolFocused:"ce-conversion-tool--focused",conversionToolActive:"ce-conversion-tool--active"}}}]),p}(p.default);o.default=S,S.displayName="ConversionToolbar",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(42),n(30),n(2),n(3),n(5),n(6),n(4),n(9),n(14),n(25),n(7),n(61),n(60),n(84),n(115),n(113),n(68)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u,f,d,p,h,v,g,y,b,m,k){"use strict";var x=n(8),w=n(1);function S(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=w(r),i=w(i),a=w(a),s=w(s),l=w(l),c=w(c),u=w(u),f=w(f),d=w(d),p=w(p),h=x(h),v=w(v),g=w(g),b=w(b),m=w(m);var T=function(t){(0,l.default)(o,t);var e,n=(e=o,function(){var t,n=(0,u.default)(e);if(S()){var o=(0,u.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,c.default)(this,t)});function o(t){var e,r=t.config,i=t.eventsDispatcher;return(0,a.default)(this,o),(e=n.call(this,{config:r,eventsDispatcher:i})).CSS={inlineToolbar:"ce-inline-toolbar",inlineToolbarShowed:"ce-inline-toolbar--showed",inlineToolbarLeftOriented:"ce-inline-toolbar--left-oriented",inlineToolbarRightOriented:"ce-inline-toolbar--right-oriented",inlineToolbarShortcut:"ce-inline-toolbar__shortcut",buttonsWrapper:"ce-inline-toolbar__buttons",actionsWrapper:"ce-inline-toolbar__actions",inlineToolButton:"ce-inline-tool",inputField:"cdx-input",focusedButton:"ce-inline-tool--focused",conversionToggler:"ce-inline-toolbar__dropdown",conversionTogglerHidden:"ce-inline-toolbar__dropdown--hidden",conversionTogglerContent:"ce-inline-toolbar__dropdown-content",togglerAndButtonsWrapper:"ce-inline-toolbar__toggler-and-button-wrapper"},e.opened=!1,e.toolbarVerticalMargin=5,e.buttonsList=null,e.width=0,e.flipper=null,e.tooltip=new m.default,e}return(0,s.default)(o,[{key:"toggleReadOnly",value:function(t){t?(this.destroy(),this.Editor.ConversionToolbar.destroy()):this.make()}},{key:"tryToShow",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.allowedToShow()?(this.move(),this.open(e),this.Editor.Toolbar.close()):t&&this.close()}},{key:"move",value:function(){var t=p.default.rect,e=this.Editor.UI.nodes.wrapper.getBoundingClientRect(),n={x:t.x-e.left,y:t.y+t.height-e.top+this.toolbarVerticalMargin};t.width&&(n.x+=Math.floor(t.width/2));var o=n.x-this.width/2,r=n.x+this.width/2;this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarLeftOriented,o<this.Editor.UI.contentRect.left),this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarRightOriented,r>this.Editor.UI.contentRect.right),this.nodes.wrapper.style.left=Math.floor(n.x)+"px",this.nodes.wrapper.style.top=Math.floor(n.y)+"px"}},{key:"close",value:function(){var t=this;this.opened&&(this.Editor.ReadOnly.isEnabled||(this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed),Array.from(this.toolsInstances.entries()).forEach((function(e){var n=(0,i.default)(e,2),o=n[0],r=n[1],a=t.getToolShortcut(o);a&&b.default.remove(t.Editor.UI.nodes.redactor,a),h.isFunction(r.clear)&&r.clear()})),this.opened=!1,this.flipper.deactivate(),this.Editor.ConversionToolbar.close()))}},{key:"open",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!this.opened){this.addToolsFiltered(),this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed),this.buttonsList=this.nodes.buttons.querySelectorAll(".".concat(this.CSS.inlineToolButton)),this.opened=!0,t&&this.Editor.ConversionToolbar.hasTools()?this.setConversionTogglerContent():this.nodes.conversionToggler.hidden=!0;var e=Array.from(this.buttonsList);e.unshift(this.nodes.conversionToggler),e=e.filter((function(t){return!t.hidden})),this.flipper.activate(e)}}},{key:"containsNode",value:function(t){return this.nodes.wrapper.contains(t)}},{key:"destroy",value:function(){this.flipper&&(this.flipper.deactivate(),this.flipper=null),this.removeAllNodes(),this.tooltip.destroy()}},{key:"make",value:function(){var t=this;this.nodes.wrapper=d.default.make("div",[this.CSS.inlineToolbar].concat((0,r.default)(this.isRtl?[this.Editor.UI.CSS.editorRtlFix]:[]))),this.nodes.togglerAndButtonsWrapper=d.default.make("div",this.CSS.togglerAndButtonsWrapper),this.nodes.buttons=d.default.make("div",this.CSS.buttonsWrapper),this.nodes.actions=d.default.make("div",this.CSS.actionsWrapper),this.listeners.on(this.nodes.wrapper,"mousedown",(function(e){e.target.closest(".".concat(t.CSS.actionsWrapper))||e.preventDefault()})),d.default.append(this.nodes.wrapper,[this.nodes.togglerAndButtonsWrapper,this.nodes.actions]),d.default.append(this.Editor.UI.nodes.wrapper,this.nodes.wrapper),this.addConversionToggler(),d.default.append(this.nodes.togglerAndButtonsWrapper,this.nodes.buttons),this.prepareConversionToolbar(),this.recalculateWidth(),this.enableFlipper()}},{key:"allowedToShow",value:function(){var t=p.default.get(),e=p.default.text;if(!t||!t.anchorNode)return!1;if(t.isCollapsed||e.length<1)return!1;var n=d.default.isElement(t.anchorNode)?t.anchorNode:t.anchorNode.parentElement;if(t&&["IMG","INPUT"].includes(n.tagName))return!1;if(null===n.closest('[contenteditable="true"]'))return!1;var o=this.Editor.BlockManager.getBlock(t.anchorNode);return!!o&&0!==o.tool.inlineTools.size}},{key:"recalculateWidth",value:function(){this.width=this.nodes.wrapper.offsetWidth}},{key:"addConversionToggler",value:function(){var t=this;this.nodes.conversionToggler=d.default.make("div",this.CSS.conversionToggler),this.nodes.conversionTogglerContent=d.default.make("div",this.CSS.conversionTogglerContent);var e=d.default.svg("toggler-down",13,13);this.nodes.conversionToggler.appendChild(this.nodes.conversionTogglerContent),this.nodes.conversionToggler.appendChild(e),this.nodes.togglerAndButtonsWrapper.appendChild(this.nodes.conversionToggler),this.listeners.on(this.nodes.conversionToggler,"click",(function(){t.Editor.ConversionToolbar.toggle((function(e){!e&&t.opened?t.flipper.activate():t.opened&&t.flipper.deactivate()}))})),this.tooltip.onHover(this.nodes.conversionToggler,g.default.ui(y.I18nInternalNS.ui.inlineToolbar.converter,"Convert to"),{placement:"top",hidingDelay:100})}},{key:"setConversionTogglerContent",value:function(){var t=this.Editor.BlockManager.currentBlock,e=t.name,n=t.tool.conversionConfig,o=n&&n.export;this.nodes.conversionToggler.hidden=!o,this.nodes.conversionToggler.classList.toggle(this.CSS.conversionTogglerHidden,!o);var r=t.tool.toolbox||{};this.nodes.conversionTogglerContent.innerHTML=r.icon||r.title||h.capitalize(e)}},{key:"prepareConversionToolbar",value:function(){var t=this.Editor.ConversionToolbar.make();d.default.append(this.nodes.wrapper,t)}},{key:"addToolsFiltered",value:function(){var t=this,e=p.default.get(),n=this.Editor.BlockManager.getBlock(e.anchorNode);this.nodes.buttons.innerHTML="",this.nodes.actions.innerHTML="",this.toolsInstances=new Map,Array.from(n.tool.inlineTools.values()).forEach((function(e){t.addTool(e)})),this.recalculateWidth()}},{key:"addTool",value:function(t){var e=this,n=t.create(),o=n.render();if(o){if(o.dataset.tool=t.name,this.nodes.buttons.appendChild(o),this.toolsInstances.set(t.name,n),h.isFunction(n.renderActions)){var r=n.renderActions();this.nodes.actions.appendChild(r)}this.listeners.on(o,"click",(function(t){e.toolClicked(n),t.preventDefault()}));var i=this.getToolShortcut(t.name);if(i)try{this.enableShortcuts(n,i)}catch(t){}var a=d.default.make("div"),s=g.default.t(y.I18nInternalNS.toolNames,t.title||h.capitalize(t.name));a.appendChild(d.default.text(s)),i&&a.appendChild(d.default.make("div",this.CSS.inlineToolbarShortcut,{textContent:h.beautifyShortcut(i)})),this.tooltip.onHover(o,a,{placement:"top",hidingDelay:100}),n.checkState(p.default.get())}else h.log("Render method must return an instance of Node","warn",t.name)}},{key:"getToolShortcut",value:function(t){var e=this.Editor.Tools,n=e.inlineTools.get(t),o=e.internal.inlineTools;return Array.from(o.keys()).includes(t)?this.inlineTools[t][k.CommonInternalSettings.Shortcut]:n.shortcut}},{key:"enableShortcuts",value:function(t,e){var n=this;b.default.add({name:e,handler:function(e){var o=n.Editor.BlockManager.currentBlock;o&&o.tool.enabledInlineTools&&(e.preventDefault(),n.toolClicked(t))},on:this.Editor.UI.nodes.redactor})}},{key:"toolClicked",value:function(t){var e=p.default.range;t.surround(e),this.checkToolsState()}},{key:"checkToolsState",value:function(){this.toolsInstances.forEach((function(t){t.checkState(p.default.get())}))}},{key:"enableFlipper",value:function(){this.flipper=new v.default({focusedItemClass:this.CSS.focusedButton,allowedKeys:[h.keyCodes.ENTER,h.keyCodes.TAB]})}},{key:"inlineTools",get:function(){var t={};return Array.from(this.Editor.Tools.inlineTools.entries()).forEach((function(e){var n=(0,i.default)(e,2),o=n[0],r=n[1];t[o]=r.create()})),t}}]),o}(f.default);o.default=T,T.displayName="InlineToolbar",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(42),n(30),n(23),n(24),n(2),n(3),n(5),n(6),n(4),n(59),n(389),n(9),n(7),n(390),n(391),n(392),n(393),n(394),n(398),n(399),n(400),n(185)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u,f,d,p,h,v,g,y,b,m,k,x,w,S,T,E){"use strict";var B=n(8),C=n(1);function _(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=C(r),i=C(i),a=C(a),s=C(s),l=C(l),c=C(c),u=C(u),f=C(f),d=C(d),p=C(p),h=C(h),v=C(v),g=B(g),y=C(y),b=C(b),m=C(m),k=C(k),x=C(x),w=C(w),S=C(S),T=C(T),E=C(E);var I=function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===("undefined"==typeof Reflect?"undefined":(0,p.default)(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},O=function(t){(0,u.default)(p,t);var e,n,o=(e=p,function(){var t,n=(0,d.default)(e);if(_()){var o=(0,d.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,f.default)(this,t)});function p(){var t;return(0,l.default)(this,p),(t=o.apply(this,arguments)).stubTool="stub",t.toolsAvailable=new E.default,t.toolsUnavailable=new E.default,t}return(0,c.default)(p,[{key:"prepare",value:(n=(0,s.default)(a.default.mark((function t(){var e,n,o=this;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.validateTools(),this.config.tools=g.deepMerge({},this.internalTools,this.config.tools),Object.prototype.hasOwnProperty.call(this.config,"tools")&&0!==Object.keys(this.config.tools).length){t.next=4;break}throw Error("Can't start without tools");case 4:if(e=this.prepareConfig(),this.factory=new x.default(e,this.config,this.Editor.API),0!==(n=this.getListOfPrepareFunctions(e)).length){t.next=9;break}return t.abrupt("return",Promise.resolve());case 9:return t.next=11,g.sequence(n,(function(t){o.toolPrepareMethodSuccess(t)}),(function(t){o.toolPrepareMethodFallback(t)}));case 11:this.prepareBlockTools();case 12:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"getAllInlineToolsSanitizeConfig",value:function(){var t={};return Array.from(this.inlineTools.values()).forEach((function(e){Object.assign(t,e.sanitizeConfig)})),t}},{key:"destroy",value:function(){Object.values(this.available).forEach(function(){var t=(0,s.default)(a.default.mark((function t(e){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!g.isFunction(e.reset)){t.next=3;break}return t.next=3,e.reset();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"toolPrepareMethodSuccess",value:function(t){var e=this.factory.get(t.toolName);if(e.isInline()){var n=["render","surround","checkState"].filter((function(t){return!e.create()[t]}));if(n.length)return g.log("Incorrect Inline Tool: ".concat(e.name,". Some of required methods is not implemented %o"),"warn",n),void this.toolsUnavailable.set(e.name,e)}this.toolsAvailable.set(e.name,e)}},{key:"toolPrepareMethodFallback",value:function(t){this.toolsUnavailable.set(t.toolName,this.factory.get(t.toolName))}},{key:"getListOfPrepareFunctions",value:function(t){var e=[];return Object.entries(t).forEach((function(t){var n=(0,i.default)(t,2),o=n[0],r=n[1];e.push({function:g.isFunction(r.class.prepare)?r.class.prepare:function(){},data:{toolName:o,config:r.config}})})),e}},{key:"prepareBlockTools",value:function(){var t=this;Array.from(this.blockTools.values()).forEach((function(e){t.assignInlineToolsToBlockTool(e),t.assignBlockTunesToBlockTool(e)}))}},{key:"assignInlineToolsToBlockTool",value:function(t){var e=this;!1!==this.config.inlineToolbar&&(!0!==t.enabledInlineTools?Array.isArray(t.enabledInlineTools)&&(t.inlineTools=new E.default(t.enabledInlineTools.map((function(t){return[t,e.inlineTools.get(t)]})))):t.inlineTools=new E.default(Array.isArray(this.config.inlineToolbar)?this.config.inlineToolbar.map((function(t){return[t,e.inlineTools.get(t)]})):Array.from(this.inlineTools.entries())))}},{key:"assignBlockTunesToBlockTool",value:function(t){var e=this;if(!1!==t.enabledBlockTunes)if(Array.isArray(t.enabledBlockTunes)){var n=new E.default(t.enabledBlockTunes.map((function(t){return[t,e.blockTunes.get(t)]})));t.tunes=new E.default([].concat((0,r.default)(n),(0,r.default)(this.blockTunes.internalTools)))}else if(Array.isArray(this.config.tunes)){var o=new E.default(this.config.tunes.map((function(t){return[t,e.blockTunes.get(t)]})));t.tunes=new E.default([].concat((0,r.default)(o),(0,r.default)(this.blockTunes.internalTools)))}else t.tunes=this.blockTunes.internalTools}},{key:"validateTools",value:function(){for(var t in this.config.tools)if(Object.prototype.hasOwnProperty.call(this.config.tools,t)){if(t in this.internalTools)return;var e=this.config.tools[t];if(!g.isFunction(e)&&!g.isFunction(e.class))throw Error("Tool ??".concat(t,"?? must be a constructor function or an object with function in the ??class?? property"))}}},{key:"prepareConfig",value:function(){var t={};for(var e in this.config.tools)g.isObject(this.config.tools[e])?t[e]=this.config.tools[e]:t[e]={class:this.config.tools[e]};return t}},{key:"available",get:function(){return this.toolsAvailable}},{key:"unavailable",get:function(){return this.toolsUnavailable}},{key:"inlineTools",get:function(){return this.available.inlineTools}},{key:"blockTools",get:function(){return this.available.blockTools}},{key:"blockTunes",get:function(){return this.available.blockTunes}},{key:"defaultTool",get:function(){return this.blockTools.get(this.config.defaultBlock)}},{key:"internal",get:function(){return this.available.internalTools}},{key:"internalTools",get:function(){return{bold:{class:y.default,isInternal:!0},italic:{class:b.default,isInternal:!0},link:{class:m.default,isInternal:!0},paragraph:{class:h.default,inlineToolbar:!0,isInternal:!0},stub:{class:k.default,isInternal:!0},moveUp:{class:T.default,isInternal:!0},delete:{class:S.default,isInternal:!0},moveDown:{class:w.default,isInternal:!0}}}}]),p}(v.default);o.default=O,O.displayName="Tools",I([g.cacheable],O.prototype,"getAllInlineToolsSanitizeConfig",null),t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(30),n(2),n(3),n(5),n(6),n(4),n(153)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u){"use strict";var f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=f(r),i=f(i),a=f(a),s=f(s),l=f(l),c=f(c);var p=function(t){(0,s.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(d()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function o(){return(0,i.default)(this,o),n.apply(this,arguments)}return(0,a.default)(o,[{key:"blockTools",get:function(){return new o(Array.from(this.entries()).filter((function(t){return(0,r.default)(t,2)[1].isBlock()})))}},{key:"inlineTools",get:function(){return new o(Array.from(this.entries()).filter((function(t){return(0,r.default)(t,2)[1].isInline()})))}},{key:"blockTunes",get:function(){return new o(Array.from(this.entries()).filter((function(t){return(0,r.default)(t,2)[1].isTune()})))}},{key:"internalTools",get:function(){return new o(Array.from(this.entries()).filter((function(t){return(0,r.default)(t,2)[1].isInternal})))}},{key:"externalTools",get:function(){return new o(Array.from(this.entries()).filter((function(t){return!(0,r.default)(t,2)[1].isInternal})))}}]),o}((0,(u=f(u)).default)(Map));o.default=p,p.displayName="ToolsCollection",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(30),n(42),n(23),n(24),n(2),n(3),n(5),n(6),n(4),n(401),n(9),n(14),n(7),n(25),n(67),n(61)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u,f,d,p,h,v,g,y,b,m){"use strict";var k=n(8),x=n(1);function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=x(r),i=x(i),a=x(a),s=x(s),l=x(l),c=x(c),u=x(u),f=x(f),d=x(d),p=x(p),h=x(h),v=x(v),g=k(g),y=x(y),b=x(b),m=x(m);var S=function(t){(0,u.default)(k,t);var e,o,h=(e=k,function(){var t,n=(0,d.default)(e);if(w()){var o=(0,d.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,f.default)(this,t)});function k(){var t;return(0,l.default)(this,k),(t=h.apply(this,arguments)).isMobile=!1,t.contentRectCache=void 0,t.resizeDebouncer=g.debounce((function(){t.windowResize()}),200),t}return(0,c.default)(k,[{key:"addLoader",value:function(){this.nodes.loader=v.default.make("div",this.CSS.editorLoader),this.nodes.wrapper.prepend(this.nodes.loader),this.nodes.redactor.classList.add(this.CSS.editorZoneHidden)}},{key:"removeLoader",value:function(){this.nodes.loader.remove(),this.nodes.redactor.classList.remove(this.CSS.editorZoneHidden)}},{key:"prepare",value:(o=(0,s.default)(a.default.mark((function t(){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.checkIsMobile(),this.make(),this.addLoader(),this.appendSVGSprite(),this.loadStyles();case 5:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},{key:"toggleReadOnly",value:function(t){t?this.disableModuleBindings():this.enableModuleBindings()}},{key:"checkEmptiness",value:function(){var t=this.Editor.BlockManager;this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty,t.isEditorEmpty)}},{key:"destroy",value:function(){this.nodes.holder.innerHTML=""}},{key:"closeAllToolbars",value:function(){var t=this.Editor,e=t.Toolbar,n=t.BlockSettings,o=t.InlineToolbar,r=t.ConversionToolbar;n.close(),o.close(),r.close(),e.toolbox.close()}},{key:"checkIsMobile",value:function(){this.isMobile=window.innerWidth<650}},{key:"make",value:function(){this.nodes.holder=v.default.getHolder(this.config.holder),this.nodes.wrapper=v.default.make("div",[this.CSS.editorWrapper].concat((0,i.default)(this.isRtl?[this.CSS.editorRtlFix]:[]))),this.nodes.redactor=v.default.make("div",this.CSS.editorZone),this.nodes.holder.offsetWidth<this.contentRect.width&&this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow),this.nodes.redactor.style.paddingBottom=this.config.minHeight+"px",this.nodes.wrapper.appendChild(this.nodes.redactor),this.nodes.holder.appendChild(this.nodes.wrapper)}},{key:"loadStyles",value:function(){var t=n(402);if(!v.default.get("editor-js-styles")){var e=v.default.make("style",null,{id:"editor-js-styles",textContent:t.toString()});v.default.prepend(document.head,e)}}},{key:"enableModuleBindings",value:function(){var t=this;this.readOnlyMutableListeners.on(this.nodes.redactor,"click",(function(e){t.redactorClicked(e)}),!1),this.readOnlyMutableListeners.on(this.nodes.redactor,"mousedown",(function(e){t.documentTouched(e)}),!0),this.readOnlyMutableListeners.on(this.nodes.redactor,"touchstart",(function(e){t.documentTouched(e)}),!0),this.readOnlyMutableListeners.on(document,"keydown",(function(e){t.documentKeydown(e)}),!0),this.readOnlyMutableListeners.on(document,"mousedown",(function(e){t.documentClicked(e)}),!0),this.readOnlyMutableListeners.on(document,"selectionchange",(function(e){t.selectionChanged(e)}),!0),this.readOnlyMutableListeners.on(window,"resize",(function(){t.resizeDebouncer()}),{passive:!0}),this.watchBlockHoveredEvents()}},{key:"watchBlockHoveredEvents",value:function(){var t,e=this;this.readOnlyMutableListeners.on(this.nodes.redactor,"mousemove",g.throttle((function(n){var o=n.target.closest(".ce-block");e.Editor.BlockSelection.anyBlockSelected||o&&t!==o&&(t=o,e.eventsDispatcher.emit(e.events.blockHovered,{block:e.Editor.BlockManager.getBlockByChildNode(o)}))}),20),{passive:!0})}},{key:"disableModuleBindings",value:function(){this.readOnlyMutableListeners.clearAll()}},{key:"windowResize",value:function(){this.contentRectCache=null,this.checkIsMobile()}},{key:"documentKeydown",value:function(t){switch(t.keyCode){case g.keyCodes.ENTER:this.enterPressed(t);break;case g.keyCodes.BACKSPACE:this.backspacePressed(t);break;case g.keyCodes.ESC:this.escapePressed(t);break;default:this.defaultBehaviour(t)}}},{key:"defaultBehaviour",value:function(t){var e=this.Editor.BlockManager.currentBlock,n=t.target.closest(".".concat(this.CSS.editorWrapper)),o=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;void 0===e||null!==n?n||e&&o||(this.Editor.BlockManager.dropPointer(),this.Editor.Toolbar.close()):this.Editor.BlockEvents.keydown(t)}},{key:"backspacePressed",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.BlockSelection,r=e.Caret;if(o.anyBlockSelected&&!y.default.isSelectionExists){var i=n.removeSelectedBlocks();r.setToBlock(n.insertDefaultBlockAtIndex(i,!0),r.positions.START),o.clearSelection(t),t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation()}}},{key:"escapePressed",value:function(t){this.Editor.BlockSelection.clearSelection(t),this.Editor.Toolbar.toolbox.opened?this.Editor.Toolbar.toolbox.close():this.Editor.BlockSettings.opened?this.Editor.BlockSettings.close():this.Editor.ConversionToolbar.opened?this.Editor.ConversionToolbar.close():this.Editor.InlineToolbar.opened?this.Editor.InlineToolbar.close():this.Editor.Toolbar.close()}},{key:"enterPressed",value:function(t){var e=this.Editor,n=e.BlockManager,o=e.BlockSelection,r=n.currentBlockIndex>=0;if(o.anyBlockSelected&&!y.default.isSelectionExists)return o.clearSelection(t),t.preventDefault(),t.stopImmediatePropagation(),void t.stopPropagation();if(!this.someToolbarOpened&&r&&"BODY"===t.target.tagName){var i=this.Editor.BlockManager.insert();this.Editor.Caret.setToBlock(i),this.Editor.BlockManager.highlightCurrentNode(),this.Editor.Toolbar.moveAndOpen(i)}this.Editor.BlockSelection.clearSelection(t)}},{key:"documentClicked",value:function(t){if(t.isTrusted){var e=t.target;this.nodes.holder.contains(e)||y.default.isAtEditor||(this.Editor.BlockManager.dropPointer(),this.Editor.Toolbar.close());var n=this.Editor.BlockSettings.nodes.wrapper.contains(e),o=this.Editor.Toolbar.nodes.settingsToggler.contains(e),r=n||o;if(this.Editor.BlockSettings.opened&&!r){this.Editor.BlockSettings.close();var i=this.Editor.BlockManager.getBlockByChildNode(e);this.Editor.Toolbar.moveAndOpen(i)}this.Editor.BlockSelection.clearSelection(t)}}},{key:"documentTouched",value:function(t){var e=t.target;if(e===this.nodes.redactor){var n=t instanceof MouseEvent?t.clientX:t.touches[0].clientX,o=t instanceof MouseEvent?t.clientY:t.touches[0].clientY;e=document.elementFromPoint(n,o)}try{this.Editor.BlockManager.setCurrentBlockByChildNode(e),this.Editor.BlockManager.highlightCurrentNode()}catch(t){this.Editor.RectangleSelection.isRectActivated()||this.Editor.Caret.setToTheLastBlock()}this.Editor.Toolbar.moveAndOpen()}},{key:"redactorClicked",value:function(t){var e=this.Editor.BlockSelection;if(y.default.isCollapsed){var n=function(){t.stopImmediatePropagation(),t.stopPropagation()},o=t.target,r=t.metaKey||t.ctrlKey;if(v.default.isAnchor(o)&&r){n();var i=o.getAttribute("href"),a=g.getValidUrl(i);g.openTab(a)}else{var s=this.Editor.BlockManager.getBlockByIndex(-1),l=v.default.offset(s.holder).bottom,c=t.pageY;if(t.target instanceof Element&&t.target.isEqualNode(this.nodes.redactor)&&!e.anyBlockSelected&&l<c){n();var u=this.Editor,f=u.BlockManager,d=u.Caret,p=u.Toolbar;f.lastBlock.tool.isDefault&&f.lastBlock.isEmpty||f.insertAtEnd(),d.setToTheLastBlock(),p.moveAndOpen(f.lastBlock)}}}}},{key:"selectionChanged",value:function(t){var e=this.Editor,n=e.CrossBlockSelection,o=e.BlockSelection,r=y.default.anchorElement;if(n.isCrossBlockSelectionStarted&&o.anyBlockSelected&&y.default.get().removeAllRanges(),r){var i=null===r.closest(".".concat(b.default.CSS.content));if(i&&(this.Editor.InlineToolbar.containsNode(r)||this.Editor.InlineToolbar.close(),"true"!==r.dataset.inlineToolbar))return;this.Editor.BlockManager.currentBlock||this.Editor.BlockManager.setCurrentBlockByChildNode(r);var a=!0!==i;this.Editor.InlineToolbar.tryToShow(!0,a)}else y.default.range||this.Editor.InlineToolbar.close()}},{key:"appendSVGSprite",value:function(){var t=v.default.make("div");t.hidden=!0,t.style.display="none",t.innerHTML=p.default,v.default.append(this.nodes.wrapper,t)}},{key:"events",get:function(){return{blockHovered:"block-hovered"}}},{key:"CSS",get:function(){return{editorWrapper:"codex-editor",editorWrapperNarrow:"codex-editor--narrow",editorZone:"codex-editor__redactor",editorZoneHidden:"codex-editor__redactor--hidden",editorLoader:"codex-editor__loader",editorEmpty:"codex-editor--empty",editorRtlFix:"codex-editor--rtl"}}},{key:"contentRect",get:function(){if(this.contentRectCache)return this.contentRectCache;var t=this.nodes.wrapper.querySelector(".".concat(b.default.CSS.content));return t?(this.contentRectCache=t.getBoundingClientRect(),this.contentRectCache):{width:650,left:0,right:0}}},{key:"someToolbarOpened",get:function(){var t=this.Editor,e=t.Toolbar,n=t.BlockSettings,o=t.InlineToolbar,r=t.ConversionToolbar;return n.opened||o.opened||r.opened||e.toolbox.opened}},{key:"someFlipperButtonFocused",get:function(){return!!this.Editor.Toolbar.toolbox.hasFocus()||Object.entries(this.Editor).filter((function(t){var e=(0,r.default)(t,2);return e[0],e[1].flipper instanceof m.default})).some((function(t){var e=(0,r.default)(t,2);return e[0],e[1].flipper.hasFocus()}))}}]),k}(h.default);o.default=S,S.displayName="UI",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){n(188),t.exports=n(360)},function(t,e,n){n(189)},function(t,e,n){"use strict";n(190),n(333),n(335),n(338),n(340),n(342),n(344),n(346),n(348),n(350),n(352),n(354),n(356),n(147)},function(t,e,n){n(191),n(194),n(195),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(209),n(210),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232),n(233),n(234),n(235),n(237),n(238),n(239),n(240),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(259),n(260),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(272),n(273),n(275),n(276),n(277),n(278),n(279),n(280),n(281),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(290),n(291),n(292),n(293),n(294),n(295),n(105),n(296),n(136),n(297),n(137),n(298),n(299),n(300),n(301),n(138),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(328),n(329),n(330),n(331),n(332),t.exports=n(17)},function(t,e,n){"use strict";var o=n(10),r=n(26),i=n(18),a=n(0),s=n(21),l=n(41).KEY,c=n(11),u=n(69),f=n(53),d=n(44),p=n(15),h=n(86),v=n(117),g=n(193),y=n(72),b=n(12),m=n(13),k=n(20),x=n(28),w=n(40),S=n(43),T=n(48),E=n(120),B=n(34),C=n(71),_=n(19),I=n(46),O=B.f,M=_.f,R=E.f,A=o.Symbol,N=o.JSON,L=N&&N.stringify,P=p("_hidden"),D=p("toPrimitive"),j={}.propertyIsEnumerable,F=u("symbol-registry"),H=u("symbols"),U=u("op-symbols"),z=Object.prototype,W="function"==typeof A&&!!C.f,Y=o.QObject,V=!Y||!Y.prototype||!Y.prototype.findChild,X=i&&c((function(){return 7!=T(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a}))?function(t,e,n){var o=O(z,e);o&&delete z[e],M(t,e,n),o&&t!==z&&M(z,e,o)}:M,K=function(t){var e=H[t]=T(A.prototype);return e._k=t,e},G=W&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},Z=function(t,e,n){return t===z&&Z(U,e,n),b(t),e=w(e,!0),b(n),r(H,e)?(n.enumerable?(r(t,P)&&t[P][e]&&(t[P][e]=!1),n=T(n,{enumerable:S(0,!1)})):(r(t,P)||M(t,P,S(1,{})),t[P][e]=!0),X(t,e,n)):M(t,e,n)},q=function(t,e){b(t);for(var n,o=g(e=x(e)),r=0,i=o.length;i>r;)Z(t,n=o[r++],e[n]);return t},J=function(t){var e=j.call(this,t=w(t,!0));return!(this===z&&r(H,t)&&!r(U,t))&&(!(e||!r(this,t)||!r(H,t)||r(this,P)&&this[P][t])||e)},$=function(t,e){if(t=x(t),e=w(e,!0),t!==z||!r(H,e)||r(U,e)){var n=O(t,e);return!n||!r(H,e)||r(t,P)&&t[P][e]||(n.enumerable=!0),n}},Q=function(t){for(var e,n=R(x(t)),o=[],i=0;n.length>i;)r(H,e=n[i++])||e==P||e==l||o.push(e);return o},tt=function(t){for(var e,n=t===z,o=R(n?U:x(t)),i=[],a=0;o.length>a;)!r(H,e=o[a++])||n&&!r(z,e)||i.push(H[e]);return i};W||(s((A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===z&&e.call(U,n),r(this,P)&&r(this[P],t)&&(this[P][t]=!1),X(this,t,S(1,n))};return i&&V&&X(z,t,{configurable:!0,set:e}),K(t)}).prototype,"toString",(function(){return this._k})),B.f=$,_.f=Z,n(49).f=E.f=Q,n(63).f=J,C.f=tt,i&&!n(45)&&s(z,"propertyIsEnumerable",J,!0),h.f=function(t){return K(p(t))}),a(a.G+a.W+a.F*!W,{Symbol:A});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)p(et[nt++]);for(var ot=I(p.store),rt=0;ot.length>rt;)v(ot[rt++]);a(a.S+a.F*!W,"Symbol",{for:function(t){return r(F,t+="")?F[t]:F[t]=A(t)},keyFor:function(t){if(!G(t))throw TypeError(t+" is not a symbol!");for(var e in F)if(F[e]===t)return e},useSetter:function(){V=!0},useSimple:function(){V=!1}}),a(a.S+a.F*!W,"Object",{create:function(t,e){return void 0===e?T(t):q(T(t),e)},defineProperty:Z,defineProperties:q,getOwnPropertyDescriptor:$,getOwnPropertyNames:Q,getOwnPropertySymbols:tt});var it=c((function(){C.f(1)}));a(a.S+a.F*it,"Object",{getOwnPropertySymbols:function(t){return C.f(k(t))}}),N&&a(a.S+a.F*(!W||c((function(){var t=A();return"[null]"!=L([t])||"{}"!=L({a:t})||"{}"!=L(Object(t))}))),"JSON",{stringify:function(t){for(var e,n,o=[t],r=1;arguments.length>r;)o.push(arguments[r++]);if(n=e=o[1],(m(e)||void 0!==t)&&!G(t))return y(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!G(e))return e}),o[1]=e,L.apply(N,o)}}),A.prototype[D]||n(27)(A.prototype,D,A.prototype.valueOf),f(A,"Symbol"),f(Math,"Math",!0),f(o.JSON,"JSON",!0)},function(t,e,n){t.exports=n(69)("native-function-to-string",Function.toString)},function(t,e,n){var o=n(46),r=n(71),i=n(63);t.exports=function(t){var e=o(t),n=r.f;if(n)for(var a,s=n(t),l=i.f,c=0;s.length>c;)l.call(t,a=s[c++])&&e.push(a);return e}},function(t,e,n){var o=n(0);o(o.S,"Object",{create:n(48)})},function(t,e,n){var o=n(0);o(o.S+o.F*!n(18),"Object",{defineProperty:n(19).f})},function(t,e,n){var o=n(0);o(o.S+o.F*!n(18),"Object",{defineProperties:n(119)})},function(t,e,n){var o=n(28),r=n(34).f;n(35)("getOwnPropertyDescriptor",(function(){return function(t,e){return r(o(t),e)}}))},function(t,e,n){var o=n(20),r=n(50);n(35)("getPrototypeOf",(function(){return function(t){return r(o(t))}}))},function(t,e,n){var o=n(20),r=n(46);n(35)("keys",(function(){return function(t){return r(o(t))}}))},function(t,e,n){n(35)("getOwnPropertyNames",(function(){return n(120).f}))},function(t,e,n){var o=n(13),r=n(41).onFreeze;n(35)("freeze",(function(t){return function(e){return t&&o(e)?t(r(e)):e}}))},function(t,e,n){var o=n(13),r=n(41).onFreeze;n(35)("seal",(function(t){return function(e){return t&&o(e)?t(r(e)):e}}))},function(t,e,n){var o=n(13),r=n(41).onFreeze;n(35)("preventExtensions",(function(t){return function(e){return t&&o(e)?t(r(e)):e}}))},function(t,e,n){var o=n(13);n(35)("isFrozen",(function(t){return function(e){return!o(e)||!!t&&t(e)}}))},function(t,e,n){var o=n(13);n(35)("isSealed",(function(t){return function(e){return!o(e)||!!t&&t(e)}}))},function(t,e,n){var o=n(13);n(35)("isExtensible",(function(t){return function(e){return!!o(e)&&(!t||t(e))}}))},function(t,e,n){var o=n(0);o(o.S+o.F,"Object",{assign:n(121)})},function(t,e,n){var o=n(0);o(o.S,"Object",{is:n(122)})},function(t,e,n){var o=n(0);o(o.S,"Object",{setPrototypeOf:n(90).set})},function(t,e,n){"use strict";var o=n(64),r={};r[n(15)("toStringTag")]="z",r+""!="[object z]"&&n(21)(Object.prototype,"toString",(function(){return"[object "+o(this)+"]"}),!0)},function(t,e,n){var o=n(0);o(o.P,"Function",{bind:n(123)})},function(t,e,n){var o=n(19).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(18)&&o(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},function(t,e,n){"use strict";var o=n(13),r=n(50),i=n(15)("hasInstance"),a=Function.prototype;i in a||n(19).f(a,i,{value:function(t){if("function"!=typeof this||!o(t))return!1;if(!o(this.prototype))return t instanceof this;for(;t=r(t);)if(this.prototype===t)return!0;return!1}})},function(t,e,n){var o=n(0),r=n(125);o(o.G+o.F*(parseInt!=r),{parseInt:r})},function(t,e,n){var o=n(0),r=n(126);o(o.G+o.F*(parseFloat!=r),{parseFloat:r})},function(t,e,n){"use strict";var o=n(10),r=n(26),i=n(37),a=n(92),s=n(40),l=n(11),c=n(49).f,u=n(34).f,f=n(19).f,d=n(54).trim,p=o.Number,h=p,v=p.prototype,g="Number"==i(n(48)(v)),y="trim"in String.prototype,b=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var n,o,r,i=(e=y?e.trim():d(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+e}for(var a,l=e.slice(2),c=0,u=l.length;c<u;c++)if((a=l.charCodeAt(c))<48||a>r)return NaN;return parseInt(l,o)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof p&&(g?l((function(){v.valueOf.call(n)})):"Number"!=i(n))?a(new h(b(e)),n,p):b(e)};for(var m,k=n(18)?c(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;k.length>x;x++)r(h,m=k[x])&&!r(p,m)&&f(p,m,u(h,m));p.prototype=v,v.constructor=p,n(21)(o,"Number",p)}},function(t,e,n){"use strict";var o=n(0),r=n(33),i=n(127),a=n(93),s=1..toFixed,l=Math.floor,c=[0,0,0,0,0,0],u="Number.toFixed: incorrect invocation!",f=function(t,e){for(var n=-1,o=e;++n<6;)o+=t*c[n],c[n]=o%1e7,o=l(o/1e7)},d=function(t){for(var e=6,n=0;--e>=0;)n+=c[e],c[e]=l(n/t),n=n%t*1e7},p=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==c[t]){var n=String(c[t]);e=""===e?n:e+a.call("0",7-n.length)+n}return e},h=function(t,e,n){return 0===e?n:e%2==1?h(t,e-1,n*t):h(t*t,e/2,n)};o(o.P+o.F*(!!s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n(11)((function(){s.call({})}))),"Number",{toFixed:function(t){var e,n,o,s,l=i(this,u),c=r(t),v="",g="0";if(c<0||c>20)throw RangeError(u);if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(v="-",l=-l),l>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(l*h(2,69,1))-69)<0?l*h(2,-e,1):l/h(2,e,1),n*=4503599627370496,(e=52-e)>0){for(f(0,n),o=c;o>=7;)f(1e7,0),o-=7;for(f(h(10,o,1),0),o=e-1;o>=23;)d(1<<23),o-=23;d(1<<o),f(1,1),d(2),g=p()}else f(0,n),f(1<<-e,0),g=p()+a.call("0",c);return g=c>0?v+((s=g.length)<=c?"0."+a.call("0",c-s)+g:g.slice(0,s-c)+"."+g.slice(s-c)):v+g}})},function(t,e,n){"use strict";var o=n(0),r=n(11),i=n(127),a=1..toPrecision;o(o.P+o.F*(r((function(){return"1"!==a.call(1,void 0)}))||!r((function(){a.call({})}))),"Number",{toPrecision:function(t){var e=i(this,"Number#toPrecision: incorrect invocation!");return void 0===t?a.call(e):a.call(e,t)}})},function(t,e,n){var o=n(0);o(o.S,"Number",{EPSILON:Math.pow(2,-52)})},function(t,e,n){var o=n(0),r=n(10).isFinite;o(o.S,"Number",{isFinite:function(t){return"number"==typeof t&&r(t)}})},function(t,e,n){var o=n(0);o(o.S,"Number",{isInteger:n(128)})},function(t,e,n){var o=n(0);o(o.S,"Number",{isNaN:function(t){return t!=t}})},function(t,e,n){var o=n(0),r=n(128),i=Math.abs;o(o.S,"Number",{isSafeInteger:function(t){return r(t)&&i(t)<=9007199254740991}})},function(t,e,n){var o=n(0);o(o.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(t,e,n){var o=n(0);o(o.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(t,e,n){var o=n(0),r=n(126);o(o.S+o.F*(Number.parseFloat!=r),"Number",{parseFloat:r})},function(t,e,n){var o=n(0),r=n(125);o(o.S+o.F*(Number.parseInt!=r),"Number",{parseInt:r})},function(t,e,n){var o=n(0),r=n(129),i=Math.sqrt,a=Math.acosh;o(o.S+o.F*!(a&&710==Math.floor(a(Number.MAX_VALUE))&&a(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:r(t-1+i(t-1)*i(t+1))}})},function(t,e,n){var o=n(0),r=Math.asinh;o(o.S+o.F*!(r&&1/r(0)>0),"Math",{asinh:function t(e){return isFinite(e=+e)&&0!=e?e<0?-t(-e):Math.log(e+Math.sqrt(e*e+1)):e}})},function(t,e,n){var o=n(0),r=Math.atanh;o(o.S+o.F*!(r&&1/r(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},function(t,e,n){var o=n(0),r=n(94);o(o.S,"Math",{cbrt:function(t){return r(t=+t)*Math.pow(Math.abs(t),1/3)}})},function(t,e,n){var o=n(0);o(o.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},function(t,e,n){var o=n(0),r=Math.exp;o(o.S,"Math",{cosh:function(t){return(r(t=+t)+r(-t))/2}})},function(t,e,n){var o=n(0),r=n(95);o(o.S+o.F*(r!=Math.expm1),"Math",{expm1:r})},function(t,e,n){var o=n(0);o(o.S,"Math",{fround:n(236)})},function(t,e,n){var o=n(94),r=Math.pow,i=r(2,-52),a=r(2,-23),s=r(2,127)*(2-a),l=r(2,-126);t.exports=Math.fround||function(t){var e,n,r=Math.abs(t),c=o(t);return r<l?c*(r/l/a+1/i-1/i)*l*a:(n=(e=(1+a/i)*r)-(e-r))>s||n!=n?c*(1/0):c*n}},function(t,e,n){var o=n(0),r=Math.abs;o(o.S,"Math",{hypot:function(t,e){for(var n,o,i=0,a=0,s=arguments.length,l=0;a<s;)l<(n=r(arguments[a++]))?(i=i*(o=l/n)*o+1,l=n):i+=n>0?(o=n/l)*o:n;return l===1/0?1/0:l*Math.sqrt(i)}})},function(t,e,n){var o=n(0),r=Math.imul;o(o.S+o.F*n(11)((function(){return-5!=r(4294967295,5)||2!=r.length})),"Math",{imul:function(t,e){var n=+t,o=+e,r=65535&n,i=65535&o;return 0|r*i+((65535&n>>>16)*i+r*(65535&o>>>16)<<16>>>0)}})},function(t,e,n){var o=n(0);o(o.S,"Math",{log10:function(t){return Math.log(t)*Math.LOG10E}})},function(t,e,n){var o=n(0);o(o.S,"Math",{log1p:n(129)})},function(t,e,n){var o=n(0);o(o.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}})},function(t,e,n){var o=n(0);o(o.S,"Math",{sign:n(94)})},function(t,e,n){var o=n(0),r=n(95),i=Math.exp;o(o.S+o.F*n(11)((function(){return-2e-17!=!Math.sinh(-2e-17)})),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(r(t)-r(-t))/2:(i(t-1)-i(-t-1))*(Math.E/2)}})},function(t,e,n){var o=n(0),r=n(95),i=Math.exp;o(o.S,"Math",{tanh:function(t){var e=r(t=+t),n=r(-t);return e==1/0?1:n==1/0?-1:(e-n)/(i(t)+i(-t))}})},function(t,e,n){var o=n(0);o(o.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},function(t,e,n){var o=n(0),r=n(47),i=String.fromCharCode,a=String.fromCodePoint;o(o.S+o.F*(!!a&&1!=a.length),"String",{fromCodePoint:function(t){for(var e,n=[],o=arguments.length,a=0;o>a;){if(e=+arguments[a++],r(e,1114111)!==e)throw RangeError(e+" is not a valid code point");n.push(e<65536?i(e):i(55296+((e-=65536)>>10),e%1024+56320))}return n.join("")}})},function(t,e,n){var o=n(0),r=n(28),i=n(16);o(o.S,"String",{raw:function(t){for(var e=r(t.raw),n=i(e.length),o=arguments.length,a=[],s=0;n>s;)a.push(String(e[s++])),s<o&&a.push(String(arguments[s]));return a.join("")}})},function(t,e,n){"use strict";n(54)("trim",(function(t){return function(){return t(this,3)}}))},function(t,e,n){"use strict";var o=n(96)(!0);n(97)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1})}))},function(t,e,n){"use strict";var o=n(0),r=n(96)(!1);o(o.P,"String",{codePointAt:function(t){return r(this,t)}})},function(t,e,n){"use strict";var o=n(0),r=n(16),i=n(98),a="".endsWith;o(o.P+o.F*n(100)("endsWith"),"String",{endsWith:function(t){var e=i(this,t,"endsWith"),n=arguments.length>1?arguments[1]:void 0,o=r(e.length),s=void 0===n?o:Math.min(r(n),o),l=String(t);return a?a.call(e,l,s):e.slice(s-l.length,s)===l}})},function(t,e,n){"use strict";var o=n(0),r=n(98);o(o.P+o.F*n(100)("includes"),"String",{includes:function(t){return!!~r(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var o=n(0);o(o.P,"String",{repeat:n(93)})},function(t,e,n){"use strict";var o=n(0),r=n(16),i=n(98),a="".startsWith;o(o.P+o.F*n(100)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),o=String(t);return a?a.call(e,o,n):e.slice(n,n+o.length)===o}})},function(t,e,n){"use strict";n(22)("anchor",(function(t){return function(e){return t(this,"a","name",e)}}))},function(t,e,n){"use strict";n(22)("big",(function(t){return function(){return t(this,"big","","")}}))},function(t,e,n){"use strict";n(22)("blink",(function(t){return function(){return t(this,"blink","","")}}))},function(t,e,n){"use strict";n(22)("bold",(function(t){return function(){return t(this,"b","","")}}))},function(t,e,n){"use strict";n(22)("fixed",(function(t){return function(){return t(this,"tt","","")}}))},function(t,e,n){"use strict";n(22)("fontcolor",(function(t){return function(e){return t(this,"font","color",e)}}))},function(t,e,n){"use strict";n(22)("fontsize",(function(t){return function(e){return t(this,"font","size",e)}}))},function(t,e,n){"use strict";n(22)("italics",(function(t){return function(){return t(this,"i","","")}}))},function(t,e,n){"use strict";n(22)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},function(t,e,n){"use strict";n(22)("small",(function(t){return function(){return t(this,"small","","")}}))},function(t,e,n){"use strict";n(22)("strike",(function(t){return function(){return t(this,"strike","","")}}))},function(t,e,n){"use strict";n(22)("sub",(function(t){return function(){return t(this,"sub","","")}}))},function(t,e,n){"use strict";n(22)("sup",(function(t){return function(){return t(this,"sup","","")}}))},function(t,e,n){var o=n(0);o(o.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,e,n){"use strict";var o=n(0),r=n(20),i=n(40);o(o.P+o.F*n(11)((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(t){var e=r(this),n=i(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},function(t,e,n){var o=n(0),r=n(271);o(o.P+o.F*(Date.prototype.toISOString!==r),"Date",{toISOString:r})},function(t,e,n){"use strict";var o=n(11),r=Date.prototype.getTime,i=Date.prototype.toISOString,a=function(t){return t>9?t:"0"+t};t.exports=o((function(){return"0385-07-25T07:06:39.999Z"!=i.call(new Date(-50000000000001))}))||!o((function(){i.call(new Date(NaN))}))?function(){if(!isFinite(r.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),n=t.getUTCMilliseconds(),o=e<0?"-":e>9999?"+":"";return o+("00000"+Math.abs(e)).slice(o?-6:-4)+"-"+a(t.getUTCMonth()+1)+"-"+a(t.getUTCDate())+"T"+a(t.getUTCHours())+":"+a(t.getUTCMinutes())+":"+a(t.getUTCSeconds())+"."+(n>99?n:"0"+a(n))+"Z"}:i},function(t,e,n){var o=Date.prototype,r=o.toString,i=o.getTime;new Date(NaN)+""!="Invalid Date"&&n(21)(o,"toString",(function(){var t=i.call(this);return t==t?r.call(this):"Invalid Date"}))},function(t,e,n){var o=n(15)("toPrimitive"),r=Date.prototype;o in r||n(27)(r,o,n(274))},function(t,e,n){"use strict";var o=n(12),r=n(40);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return r(o(this),"number"!=t)}},function(t,e,n){var o=n(0);o(o.S,"Array",{isArray:n(72)})},function(t,e,n){"use strict";var o=n(31),r=n(0),i=n(20),a=n(131),s=n(101),l=n(16),c=n(102),u=n(103);r(r.S+r.F*!n(73)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,r,f,d=i(t),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,g=void 0!==v,y=0,b=u(d);if(g&&(v=o(v,h>2?arguments[2]:void 0,2)),null==b||p==Array&&s(b))for(n=new p(e=l(d.length));e>y;y++)c(n,y,g?v(d[y],y):d[y]);else for(f=b.call(d),n=new p;!(r=f.next()).done;y++)c(n,y,g?a(f,v,[r.value,y],!0):r.value);return n.length=y,n}})},function(t,e,n){"use strict";var o=n(0),r=n(102);o(o.S+o.F*n(11)((function(){function t(){}return!(Array.of.call(t)instanceof t)})),"Array",{of:function(){for(var t=0,e=arguments.length,n=new("function"==typeof this?this:Array)(e);e>t;)r(n,t,arguments[t++]);return n.length=e,n}})},function(t,e,n){"use strict";var o=n(0),r=n(28),i=[].join;o(o.P+o.F*(n(62)!=Object||!n(29)(i)),"Array",{join:function(t){return i.call(r(this),void 0===t?",":t)}})},function(t,e,n){"use strict";var o=n(0),r=n(89),i=n(37),a=n(47),s=n(16),l=[].slice;o(o.P+o.F*n(11)((function(){r&&l.call(r)})),"Array",{slice:function(t,e){var n=s(this.length),o=i(this);if(e=void 0===e?n:e,"Array"==o)return l.call(this,t,e);for(var r=a(t,n),c=a(e,n),u=s(c-r),f=new Array(u),d=0;d<u;d++)f[d]="String"==o?this.charAt(r+d):this[r+d];return f}})},function(t,e,n){"use strict";var o=n(0),r=n(32),i=n(20),a=n(11),s=[].sort,l=[1,2,3];o(o.P+o.F*(a((function(){l.sort(void 0)}))||!a((function(){l.sort(null)}))||!n(29)(s)),"Array",{sort:function(t){return void 0===t?s.call(i(this)):s.call(i(this),r(t))}})},function(t,e,n){"use strict";var o=n(0),r=n(36)(0),i=n(29)([].forEach,!0);o(o.P+o.F*!i,"Array",{forEach:function(t){return r(this,t,arguments[1])}})},function(t,e,n){var o=n(13),r=n(72),i=n(15)("species");t.exports=function(t){var e;return r(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!r(e.prototype)||(e=void 0),o(e)&&null===(e=e[i])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){"use strict";var o=n(0),r=n(36)(1);o(o.P+o.F*!n(29)([].map,!0),"Array",{map:function(t){return r(this,t,arguments[1])}})},function(t,e,n){"use strict";var o=n(0),r=n(36)(2);o(o.P+o.F*!n(29)([].filter,!0),"Array",{filter:function(t){return r(this,t,arguments[1])}})},function(t,e,n){"use strict";var o=n(0),r=n(36)(3);o(o.P+o.F*!n(29)([].some,!0),"Array",{some:function(t){return r(this,t,arguments[1])}})},function(t,e,n){"use strict";var o=n(0),r=n(36)(4);o(o.P+o.F*!n(29)([].every,!0),"Array",{every:function(t){return r(this,t,arguments[1])}})},function(t,e,n){"use strict";var o=n(0),r=n(133);o(o.P+o.F*!n(29)([].reduce,!0),"Array",{reduce:function(t){return r(this,t,arguments.length,arguments[1],!1)}})},function(t,e,n){"use strict";var o=n(0),r=n(133);o(o.P+o.F*!n(29)([].reduceRight,!0),"Array",{reduceRight:function(t){return r(this,t,arguments.length,arguments[1],!0)}})},function(t,e,n){"use strict";var o=n(0),r=n(70)(!1),i=[].indexOf,a=!!i&&1/[1].indexOf(1,-0)<0;o(o.P+o.F*(a||!n(29)(i)),"Array",{indexOf:function(t){return a?i.apply(this,arguments)||0:r(this,t,arguments[1])}})},function(t,e,n){"use strict";var o=n(0),r=n(28),i=n(33),a=n(16),s=[].lastIndexOf,l=!!s&&1/[1].lastIndexOf(1,-0)<0;o(o.P+o.F*(l||!n(29)(s)),"Array",{lastIndexOf:function(t){if(l)return s.apply(this,arguments)||0;var e=r(this),n=a(e.length),o=n-1;for(arguments.length>1&&(o=Math.min(o,i(arguments[1]))),o<0&&(o=n+o);o>=0;o--)if(o in e&&e[o]===t)return o||0;return-1}})},function(t,e,n){var o=n(0);o(o.P,"Array",{copyWithin:n(134)}),n(51)("copyWithin")},function(t,e,n){var o=n(0);o(o.P,"Array",{fill:n(104)}),n(51)("fill")},function(t,e,n){"use strict";var o=n(0),r=n(36)(5),i=!0;"find"in[]&&Array(1).find((function(){i=!1})),o(o.P+o.F*i,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(51)("find")},function(t,e,n){"use strict";var o=n(0),r=n(36)(6),i="findIndex",a=!0;i in[]&&Array(1)[i]((function(){a=!1})),o(o.P+o.F*a,"Array",{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(51)(i)},function(t,e,n){n(56)("Array")},function(t,e,n){var o=n(10),r=n(92),i=n(19).f,a=n(49).f,s=n(99),l=n(74),c=o.RegExp,u=c,f=c.prototype,d=/a/g,p=/a/g,h=new c(d)!==d;if(n(18)&&(!h||n(11)((function(){return p[n(15)("match")]=!1,c(d)!=d||c(p)==p||"/a/i"!=c(d,"i")})))){c=function(t,e){var n=this instanceof c,o=s(t),i=void 0===e;return!n&&o&&t.constructor===c&&i?t:r(h?new u(o&&!i?t.source:t,e):u((o=t instanceof c)?t.source:t,o&&i?l.call(t):e),n?this:f,c)};for(var v=function(t){t in c||i(c,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})},g=a(u),y=0;g.length>y;)v(g[y++]);f.constructor=c,c.prototype=f,n(21)(o,"RegExp",c)}n(56)("RegExp")},function(t,e,n){"use strict";n(137);var o=n(12),r=n(74),i=n(18),a=/./.toString,s=function(t){n(21)(RegExp.prototype,"toString",t,!0)};n(11)((function(){return"/a/b"!=a.call({source:"a",flags:"b"})}))?s((function(){var t=o(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?r.call(t):void 0)})):"toString"!=a.name&&s((function(){return a.call(this)}))},function(t,e,n){"use strict";var o=n(12),r=n(16),i=n(107),a=n(75);n(76)("match",1,(function(t,e,n,s){return[function(n){var o=t(this),r=null==n?void 0:n[e];return void 0!==r?r.call(n,o):new RegExp(n)[e](String(o))},function(t){var e=s(n,t,this);if(e.done)return e.value;var l=o(t),c=String(this);if(!l.global)return a(l,c);var u=l.unicode;l.lastIndex=0;for(var f,d=[],p=0;null!==(f=a(l,c));){var h=String(f[0]);d[p]=h,""===h&&(l.lastIndex=i(c,r(l.lastIndex),u)),p++}return 0===p?null:d}]}))},function(t,e,n){"use strict";var o=n(12),r=n(20),i=n(16),a=n(33),s=n(107),l=n(75),c=Math.max,u=Math.min,f=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g;n(76)("replace",2,(function(t,e,n,h){return[function(o,r){var i=t(this),a=null==o?void 0:o[e];return void 0!==a?a.call(o,i,r):n.call(String(i),o,r)},function(t,e){var r=h(n,t,this,e);if(r.done)return r.value;var f=o(t),d=String(this),p="function"==typeof e;p||(e=String(e));var g=f.global;if(g){var y=f.unicode;f.lastIndex=0}for(var b=[];;){var m=l(f,d);if(null===m)break;if(b.push(m),!g)break;""===String(m[0])&&(f.lastIndex=s(d,i(f.lastIndex),y))}for(var k,x="",w=0,S=0;S<b.length;S++){m=b[S];for(var T=String(m[0]),E=c(u(a(m.index),d.length),0),B=[],C=1;C<m.length;C++)B.push(void 0===(k=m[C])?k:String(k));var _=m.groups;if(p){var I=[T].concat(B,E,d);void 0!==_&&I.push(_);var O=String(e.apply(void 0,I))}else O=v(T,d,E,B,_,e);E>=w&&(x+=d.slice(w,E)+O,w=E+T.length)}return x+d.slice(w)}];function v(t,e,o,i,a,s){var l=o+t.length,c=i.length,u=p;return void 0!==a&&(a=r(a),u=d),n.call(s,u,(function(n,r){var s;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,o);case"'":return e.slice(l);case"<":s=a[r.slice(1,-1)];break;default:var u=+r;if(0===u)return n;if(u>c){var d=f(u/10);return 0===d?n:d<=c?void 0===i[d-1]?r.charAt(1):i[d-1]+r.charAt(1):n}s=i[u-1]}return void 0===s?"":s}))}}))},function(t,e,n){"use strict";var o=n(12),r=n(122),i=n(75);n(76)("search",1,(function(t,e,n,a){return[function(n){var o=t(this),r=null==n?void 0:n[e];return void 0!==r?r.call(n,o):new RegExp(n)[e](String(o))},function(t){var e=a(n,t,this);if(e.done)return e.value;var s=o(t),l=String(this),c=s.lastIndex;r(c,0)||(s.lastIndex=0);var u=i(s,l);return r(s.lastIndex,c)||(s.lastIndex=c),null===u?-1:u.index}]}))},function(t,e,n){"use strict";var o=n(99),r=n(12),i=n(65),a=n(107),s=n(16),l=n(75),c=n(106),u=n(11),f=Math.min,d=[].push,p="length",h=!u((function(){RegExp(4294967295,"y")}));n(76)("split",2,(function(t,e,n,u){var v;return v="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[p]||2!="ab".split(/(?:ab)*/)[p]||4!=".".split(/(.?)(.?)/)[p]||".".split(/()()/)[p]>1||"".split(/.?/)[p]?function(t,e){var r=String(this);if(void 0===t&&0===e)return[];if(!o(t))return n.call(r,t,e);for(var i,a,s,l=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,h=void 0===e?4294967295:e>>>0,v=new RegExp(t.source,u+"g");(i=c.call(v,r))&&!((a=v.lastIndex)>f&&(l.push(r.slice(f,i.index)),i[p]>1&&i.index<r[p]&&d.apply(l,i.slice(1)),s=i[0][p],f=a,l[p]>=h));)v.lastIndex===i.index&&v.lastIndex++;return f===r[p]?!s&&v.test("")||l.push(""):l.push(r.slice(f)),l[p]>h?l.slice(0,h):l}:"0".split(void 0,0)[p]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,o){var r=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,r,o):v.call(String(r),n,o)},function(t,e){var o=u(v,t,this,e,v!==n);if(o.done)return o.value;var c=r(t),d=String(this),p=i(c,RegExp),g=c.unicode,y=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(h?"y":"g"),b=new p(h?c:"^(?:"+c.source+")",y),m=void 0===e?4294967295:e>>>0;if(0===m)return[];if(0===d.length)return null===l(b,d)?[d]:[];for(var k=0,x=0,w=[];x<d.length;){b.lastIndex=h?x:0;var S,T=l(b,h?d:d.slice(x));if(null===T||(S=f(s(b.lastIndex+(h?0:x)),d.length))===k)x=a(d,x,g);else{if(w.push(d.slice(k,x)),w.length===m)return w;for(var E=1;E<=T.length-1;E++)if(w.push(T[E]),w.length===m)return w;x=k=S}}return w.push(d.slice(k)),w}]}))},function(t,e,n){var o=n(10),r=n(108).set,i=o.MutationObserver||o.WebKitMutationObserver,a=o.process,s=o.Promise,l="process"==n(37)(a);t.exports=function(){var t,e,n,c=function(){var o,r;for(l&&(o=a.domain)&&o.exit();t;){r=t.fn,t=t.next;try{r()}catch(o){throw t?n():e=void 0,o}}e=void 0,o&&o.enter()};if(l)n=function(){a.nextTick(c)};else if(!i||o.navigator&&o.navigator.standalone)if(s&&s.resolve){var u=s.resolve(void 0);n=function(){u.then(c)}}else n=function(){r.call(o,c)};else{var f=!0,d=document.createTextNode("");new i(c).observe(d,{characterData:!0}),n=function(){d.data=f=!f}}return function(o){var r={fn:o,next:void 0};e&&(e.next=r),t||(t=r,n()),e=r}}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){"use strict";var o=n(141),r=n(52);t.exports=n(79)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=o.getEntry(r(this,"Map"),t);return e&&e.v},set:function(t,e){return o.def(r(this,"Map"),0===t?0:t,e)}},o,!0)},function(t,e,n){"use strict";var o=n(141),r=n(52);t.exports=n(79)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return o.def(r(this,"Set"),t=0===t?0:t,t)}},o)},function(t,e,n){"use strict";var o,r=n(10),i=n(36)(0),a=n(21),s=n(41),l=n(121),c=n(142),u=n(13),f=n(52),d=n(52),p=!r.ActiveXObject&&"ActiveXObject"in r,h=s.getWeak,v=Object.isExtensible,g=c.ufstore,y=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(t){if(u(t)){var e=h(t);return!0===e?g(f(this,"WeakMap")).get(t):e?e[this._i]:void 0}},set:function(t,e){return c.def(f(this,"WeakMap"),t,e)}},m=t.exports=n(79)("WeakMap",y,b,c,!0,!0);d&&p&&(l((o=c.getConstructor(y,"WeakMap")).prototype,b),s.NEED=!0,i(["delete","has","get","set"],(function(t){var e=m.prototype,n=e[t];a(e,t,(function(e,r){if(u(e)&&!v(e)){this._f||(this._f=new o);var i=this._f[t](e,r);return"set"==t?this:i}return n.call(this,e,r)}))})))},function(t,e,n){"use strict";var o=n(142),r=n(52);n(79)("WeakSet",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return o.def(r(this,"WeakSet"),t,!0)}},o,!1,!0)},function(t,e,n){"use strict";var o=n(0),r=n(80),i=n(109),a=n(12),s=n(47),l=n(16),c=n(13),u=n(10).ArrayBuffer,f=n(65),d=i.ArrayBuffer,p=i.DataView,h=r.ABV&&u.isView,v=d.prototype.slice,g=r.VIEW;o(o.G+o.W+o.F*(u!==d),{ArrayBuffer:d}),o(o.S+o.F*!r.CONSTR,"ArrayBuffer",{isView:function(t){return h&&h(t)||c(t)&&g in t}}),o(o.P+o.U+o.F*n(11)((function(){return!new d(2).slice(1,void 0).byteLength})),"ArrayBuffer",{slice:function(t,e){if(void 0!==v&&void 0===e)return v.call(a(this),t);for(var n=a(this).byteLength,o=s(t,n),r=s(void 0===e?n:e,n),i=new(f(this,d))(l(r-o)),c=new p(this),u=new p(i),h=0;o<r;)u.setUint8(h++,c.getUint8(o++));return i}}),n(56)("ArrayBuffer")},function(t,e,n){var o=n(0);o(o.G+o.W+o.F*!n(80).ABV,{DataView:n(109).DataView})},function(t,e,n){n(39)("Int8",1,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(39)("Uint8",1,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(39)("Uint8",1,(function(t){return function(e,n,o){return t(this,e,n,o)}}),!0)},function(t,e,n){n(39)("Int16",2,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(39)("Uint16",2,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(39)("Int32",4,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(39)("Uint32",4,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(39)("Float32",4,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){n(39)("Float64",8,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},function(t,e,n){var o=n(0),r=n(32),i=n(12),a=(n(10).Reflect||{}).apply,s=Function.apply;o(o.S+o.F*!n(11)((function(){a((function(){}))})),"Reflect",{apply:function(t,e,n){var o=r(t),l=i(n);return a?a(o,e,l):s.call(o,e,l)}})},function(t,e,n){var o=n(0),r=n(48),i=n(32),a=n(12),s=n(13),l=n(11),c=n(123),u=(n(10).Reflect||{}).construct,f=l((function(){function t(){}return!(u((function(){}),[],t)instanceof t)})),d=!l((function(){u((function(){}))}));o(o.S+o.F*(f||d),"Reflect",{construct:function(t,e){i(t),a(e);var n=arguments.length<3?t:i(arguments[2]);if(d&&!f)return u(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var o=[null];return o.push.apply(o,e),new(c.apply(t,o))}var l=n.prototype,p=r(s(l)?l:Object.prototype),h=Function.apply.call(t,p,e);return s(h)?h:p}})},function(t,e,n){var o=n(19),r=n(0),i=n(12),a=n(40);r(r.S+r.F*n(11)((function(){Reflect.defineProperty(o.f({},1,{value:1}),1,{value:2})})),"Reflect",{defineProperty:function(t,e,n){i(t),e=a(e,!0),i(n);try{return o.f(t,e,n),!0}catch(t){return!1}}})},function(t,e,n){var o=n(0),r=n(34).f,i=n(12);o(o.S,"Reflect",{deleteProperty:function(t,e){var n=r(i(t),e);return!(n&&!n.configurable)&&delete t[e]}})},function(t,e,n){"use strict";var o=n(0),r=n(12),i=function(t){this._t=r(t),this._i=0;var e,n=this._k=[];for(e in t)n.push(e)};n(130)(i,"Object",(function(){var t,e=this._k;do{if(this._i>=e.length)return{value:void 0,done:!0}}while(!((t=e[this._i++])in this._t));return{value:t,done:!1}})),o(o.S,"Reflect",{enumerate:function(t){return new i(t)}})},function(t,e,n){var o=n(34),r=n(50),i=n(26),a=n(0),s=n(13),l=n(12);a(a.S,"Reflect",{get:function t(e,n){var a,c,u=arguments.length<3?e:arguments[2];return l(e)===u?e[n]:(a=o.f(e,n))?i(a,"value")?a.value:void 0!==a.get?a.get.call(u):void 0:s(c=r(e))?t(c,n,u):void 0}})},function(t,e,n){var o=n(34),r=n(0),i=n(12);r(r.S,"Reflect",{getOwnPropertyDescriptor:function(t,e){return o.f(i(t),e)}})},function(t,e,n){var o=n(0),r=n(50),i=n(12);o(o.S,"Reflect",{getPrototypeOf:function(t){return r(i(t))}})},function(t,e,n){var o=n(0);o(o.S,"Reflect",{has:function(t,e){return e in t}})},function(t,e,n){var o=n(0),r=n(12),i=Object.isExtensible;o(o.S,"Reflect",{isExtensible:function(t){return r(t),!i||i(t)}})},function(t,e,n){var o=n(0);o(o.S,"Reflect",{ownKeys:n(144)})},function(t,e,n){var o=n(0),r=n(12),i=Object.preventExtensions;o(o.S,"Reflect",{preventExtensions:function(t){r(t);try{return i&&i(t),!0}catch(t){return!1}}})},function(t,e,n){var o=n(19),r=n(34),i=n(50),a=n(26),s=n(0),l=n(43),c=n(12),u=n(13);s(s.S,"Reflect",{set:function t(e,n,s){var f,d,p=arguments.length<4?e:arguments[3],h=r.f(c(e),n);if(!h){if(u(d=i(e)))return t(d,n,s,p);h=l(0)}if(a(h,"value")){if(!1===h.writable||!u(p))return!1;if(f=r.f(p,n)){if(f.get||f.set||!1===f.writable)return!1;f.value=s,o.f(p,n,f)}else o.f(p,n,l(0,s));return!0}return void 0!==h.set&&(h.set.call(p,s),!0)}})},function(t,e,n){var o=n(0),r=n(90);r&&o(o.S,"Reflect",{setPrototypeOf:function(t,e){r.check(t,e);try{return r.set(t,e),!0}catch(t){return!1}}})},function(t,e,n){n(334),t.exports=n(17).Array.includes},function(t,e,n){"use strict";var o=n(0),r=n(70)(!0);o(o.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(51)("includes")},function(t,e,n){n(336),t.exports=n(17).Array.flatMap},function(t,e,n){"use strict";var o=n(0),r=n(337),i=n(20),a=n(16),s=n(32),l=n(132);o(o.P,"Array",{flatMap:function(t){var e,n,o=i(this);return s(t),e=a(o.length),n=l(o,0),r(n,o,o,e,0,1,t,arguments[1]),n}}),n(51)("flatMap")},function(t,e,n){"use strict";var o=n(72),r=n(13),i=n(16),a=n(31),s=n(15)("isConcatSpreadable");t.exports=function t(e,n,l,c,u,f,d,p){for(var h,v,g=u,y=0,b=!!d&&a(d,p,3);y<c;){if(y in l){if(h=b?b(l[y],y,n):l[y],v=!1,r(h)&&(v=void 0!==(v=h[s])?!!v:o(h)),v&&f>0)g=t(e,n,h,i(h.length),g,f-1)-1;else{if(g>=9007199254740991)throw TypeError();e[g]=h}g++}y++}return g}},function(t,e,n){n(339),t.exports=n(17).String.padStart},function(t,e,n){"use strict";var o=n(0),r=n(145),i=n(78),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);o(o.P+o.F*a,"String",{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},function(t,e,n){n(341),t.exports=n(17).String.padEnd},function(t,e,n){"use strict";var o=n(0),r=n(145),i=n(78),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);o(o.P+o.F*a,"String",{padEnd:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},function(t,e,n){n(343),t.exports=n(17).String.trimLeft},function(t,e,n){"use strict";n(54)("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},function(t,e,n){n(345),t.exports=n(17).String.trimRight},function(t,e,n){"use strict";n(54)("trimRight",(function(t){return function(){return t(this,2)}}),"trimEnd")},function(t,e,n){n(347),t.exports=n(86).f("asyncIterator")},function(t,e,n){n(117)("asyncIterator")},function(t,e,n){n(349),t.exports=n(17).Object.getOwnPropertyDescriptors},function(t,e,n){var o=n(0),r=n(144),i=n(28),a=n(34),s=n(102);o(o.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,n,o=i(t),l=a.f,c=r(o),u={},f=0;c.length>f;)void 0!==(n=l(o,e=c[f++]))&&s(u,e,n);return u}})},function(t,e,n){n(351),t.exports=n(17).Object.values},function(t,e,n){var o=n(0),r=n(146)(!1);o(o.S,"Object",{values:function(t){return r(t)}})},function(t,e,n){n(353),t.exports=n(17).Object.entries},function(t,e,n){var o=n(0),r=n(146)(!0);o(o.S,"Object",{entries:function(t){return r(t)}})},function(t,e,n){"use strict";n(138),n(355),t.exports=n(17).Promise.finally},function(t,e,n){"use strict";var o=n(0),r=n(17),i=n(10),a=n(65),s=n(140);o(o.P+o.R,"Promise",{finally:function(t){var e=a(this,r.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return s(e,t()).then((function(){return n}))}:t,n?function(n){return s(e,t()).then((function(){throw n}))}:t)}})},function(t,e,n){n(357),n(358),n(359),t.exports=n(17)},function(t,e,n){var o=n(10),r=n(0),i=n(78),a=[].slice,s=/MSIE .\./.test(i),l=function(t){return function(e,n){var o=arguments.length>2,r=!!o&&a.call(arguments,2);return t(o?function(){("function"==typeof e?e:Function(e)).apply(this,r)}:e,n)}};r(r.G+r.B+r.F*s,{setTimeout:l(o.setTimeout),setInterval:l(o.setInterval)})},function(t,e,n){var o=n(0),r=n(108);o(o.G+o.B,{setImmediate:r.set,clearImmediate:r.clear})},function(t,e,n){for(var o=n(105),r=n(46),i=n(21),a=n(10),s=n(27),l=n(55),c=n(15),u=c("iterator"),f=c("toStringTag"),d=l.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=r(p),v=0;v<h.length;v++){var g,y=h[v],b=p[y],m=a[y],k=m&&m.prototype;if(k&&(k[u]||s(k,u,d),k[f]||s(k,f,y),l[y]=d,b))for(g in o)k[g]||i(k,g,o[g],!0)}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(30),n(2),n(3),n(364),n(366),n(367),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u){"use strict";var f=n(8),d=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=d(r),i=d(i),a=d(a),c=d(c),u=f(u);var p=function(){function t(e){var n=this;(0,i.default)(this,t);var o=function(){};u.isObject(e)&&u.isFunction(e.onReady)&&(o=e.onReady);var r=new c.default(e);this.isReady=r.isReady.then((function(){n.exportAPI(r),o()}))}return(0,a.default)(t,[{key:"exportAPI",value:function(t){var e=this;["configuration"].forEach((function(n){e[n]=t[n]})),this.destroy=function(){for(var n in Object.values(t.moduleInstances).forEach((function(t){u.isFunction(t.destroy)&&t.destroy(),t.listeners.removeAll()})),t=null,e)Object.prototype.hasOwnProperty.call(e,n)&&delete e[n];Object.setPrototypeOf(e,null)},Object.setPrototypeOf(this,t.moduleInstances.API.methods),delete this.exportAPI,Object.entries({blocks:{clear:"clear",render:"render"},caret:{focus:"focus"},events:{on:"on",off:"off",emit:"emit"},saver:{save:"save"}}).forEach((function(n){var o=(0,r.default)(n,2),i=o[0],a=o[1];Object.entries(a).forEach((function(n){var o=(0,r.default)(n,2),a=o[0],s=o[1];e[s]=t.moduleInstances.API.methods[i][a]}))}))}}],[{key:"version",get:function(){return"2.24.2"}}]),t}();o.default=p,p.displayName="EditorJS",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==s.return||s.return()}finally{if(r)throw i}}return n}}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e,n){(e=t.exports=function(...t){return r(...t)}).__esModule=!0;const o=n(365),r=o.default;Object.assign(e,o)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){},e.revert=function(){}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[],void 0===(i="function"==typeof(o=function(){"use strict";Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;--n>=0&&e.item(n)!==this;);return n>-1}),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;if(!document.documentElement.contains(e))return null;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e);return null}),Element.prototype.prepend||(Element.prototype.prepend=function(t){var e=document.createDocumentFragment();Array.isArray(t)||(t=[t]),t.forEach((function(t){var n=t instanceof Node;e.appendChild(n?t:document.createTextNode(t))})),this.insertBefore(e,this.firstChild)}),Element.prototype.scrollIntoViewIfNeeded||(Element.prototype.scrollIntoViewIfNeeded=function(t){t=0===arguments.length||!!t;var e=this.parentNode,n=window.getComputedStyle(e,null),o=parseInt(n.getPropertyValue("border-top-width")),r=parseInt(n.getPropertyValue("border-left-width")),i=this.offsetTop-e.offsetTop<e.scrollTop,a=this.offsetTop-e.offsetTop+this.clientHeight-o>e.scrollTop+e.clientHeight,s=this.offsetLeft-e.offsetLeft<e.scrollLeft,l=this.offsetLeft-e.offsetLeft+this.clientWidth-r>e.scrollLeft+e.clientWidth,c=i&&!a;(i||a)&&t&&(e.scrollTop=this.offsetTop-e.offsetTop-e.clientHeight/2-o+this.clientHeight/2),(s||l)&&t&&(e.scrollLeft=this.offsetLeft-e.offsetLeft-e.clientWidth/2-r+this.clientWidth/2),(i||a||s||l)&&!t&&this.scrollIntoView(c)})})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(23),n(24),n(2),n(3),n(14),n(7),n(60),n(151),n(81)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u,f,d){"use strict";var p=n(8),h=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=h(r),i=h(i),a=h(a),s=h(s),l=h(l),c=p(c),u=h(u),d=h(d);var v=n(375),g=[];v.keys().forEach((function(t){t.match(/^\.\/[^_][\w/]*\.([tj])s$/)&&g.push(v(t))}));var y=function(){function t(e){var n,o,s=this;(0,a.default)(this,t),this.moduleInstances={},this.eventsDispatcher=new d.default,this.isReady=new Promise((function(t,e){n=t,o=e})),Promise.resolve().then((0,i.default)(r.default.mark((function t(){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.configuration=e,t.next=3,s.validate();case 3:return t.next=5,s.init();case 5:return t.next=7,s.start();case 7:c.logLabeled("I'm ready! (????????????)???*:?????????","log","","color: #E24A75"),setTimeout((0,i.default)(r.default.mark((function t(){var e,o,i;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.render();case 2:s.configuration.autofocus&&(e=s.moduleInstances,o=e.BlockManager,(i=e.Caret).setToBlock(o.blocks[0],i.positions.START),o.highlightCurrentNode()),s.moduleInstances.UI.removeLoader(),n();case 5:case"end":return t.stop()}}),t)}))),500);case 9:case"end":return t.stop()}}),t)})))).catch((function(t){c.log("Editor.js is not ready because of ".concat(t),"error"),o(t)}))}var e,n;return(0,s.default)(t,[{key:"validate",value:(n=(0,i.default)(r.default.mark((function t(){var e,n,o;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.config,n=e.holderId,o=e.holder,!n||!o){t.next=3;break}throw Error("??holderId?? and ??holder?? param can't assign at the same time.");case 3:if(!c.isString(o)||l.default.get(o)){t.next=5;break}throw Error("element with ID ??".concat(o,"?? is missing. Pass correct holder's ID."));case 5:if(!o||!c.isObject(o)||l.default.isElement(o)){t.next=7;break}throw Error("??holder?? value must be an Element node");case 7:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"init",value:function(){this.constructModules(),this.configureModules()}},{key:"start",value:(e=(0,i.default)(r.default.mark((function t(){var e,n=this;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=["Tools","UI","BlockManager","Paste","BlockSelection","RectangleSelection","CrossBlockSelection","ReadOnly"],t.next=3,e.reduce((function(t,e){return t.then((0,i.default)(r.default.mark((function t(){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.moduleInstances[e].prepare();case 3:t.next=10;break;case 5:if(t.prev=5,t.t0=t.catch(0),!(t.t0 instanceof f.CriticalError)){t.next=9;break}throw new Error(t.t0.message);case 9:c.log("Module ".concat(e," was skipped because of %o"),"warn",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,5]])}))))}),Promise.resolve());case 3:case"end":return t.stop()}}),t)}))),function(){return e.apply(this,arguments)})},{key:"render",value:function(){return this.moduleInstances.Renderer.render(this.config.data.blocks)}},{key:"constructModules",value:function(){var t=this;g.forEach((function(e){var n=c.isFunction(e)?e:e.default;try{t.moduleInstances[n.displayName]=new n({config:t.configuration,eventsDispatcher:t.eventsDispatcher})}catch(t){c.log("Module ".concat(n.displayName," skipped because"),"error",t)}}))}},{key:"configureModules",value:function(){for(var t in this.moduleInstances)Object.prototype.hasOwnProperty.call(this.moduleInstances,t)&&(this.moduleInstances[t].state=this.getModulesDiff(t))}},{key:"getModulesDiff",value:function(t){var e={};for(var n in this.moduleInstances)n!==t&&(e[n]=this.moduleInstances[n]);return e}},{key:"configuration",set:function(t){var e,n;c.isObject(t)?this.config=Object.assign({},t):this.config={holder:t},c.deprecationAssert(!!this.config.holderId,"config.holderId","config.holder"),this.config.holderId&&!this.config.holder&&(this.config.holder=this.config.holderId,this.config.holderId=null),null==this.config.holder&&(this.config.holder="editorjs"),this.config.logLevel||(this.config.logLevel=c.LogLevels.VERBOSE),c.setLogLevel(this.config.logLevel),c.deprecationAssert(Boolean(this.config.initialBlock),"config.initialBlock","config.defaultBlock"),this.config.defaultBlock=this.config.defaultBlock||this.config.initialBlock||"paragraph",this.config.minHeight=void 0!==this.config.minHeight?this.config.minHeight:300;var o={type:this.config.defaultBlock,data:{}};this.config.placeholder=this.config.placeholder||!1,this.config.sanitizer=this.config.sanitizer||{p:!0,b:!0,a:!0},this.config.hideToolbar=!!this.config.hideToolbar&&this.config.hideToolbar,this.config.tools=this.config.tools||{},this.config.i18n=this.config.i18n||{},this.config.data=this.config.data||{blocks:[]},this.config.onReady=this.config.onReady||function(){},this.config.onChange=this.config.onChange||function(){},this.config.inlineToolbar=void 0===this.config.inlineToolbar||this.config.inlineToolbar,!c.isEmpty(this.config.data)&&this.config.data.blocks&&0!==this.config.data.blocks.length||(this.config.data={blocks:[o]}),this.config.readOnly=this.config.readOnly||!1,(null===(e=this.config.i18n)||void 0===e?void 0:e.messages)&&u.default.setDictionary(this.config.i18n.messages),this.config.i18n.direction=(null===(n=this.config.i18n)||void 0===n?void 0:n.direction)||"ltr"},get:function(){return this.config}}]),t}();o.default=y,y.displayName="Core",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o=n(149);t.exports=function(t){if(Array.isArray(t))return o(t)}},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}},function(t,e,n){var o=n(110),r=n(374);function i(e,n,a){return r()?t.exports=i=Reflect.construct:t.exports=i=function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&o(i,n.prototype),i},i.apply(null,arguments)}t.exports=i},function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},function(t,e,n){var o={"./api":82,"./api/":82,"./api/blocks":154,"./api/blocks.ts":154,"./api/caret":155,"./api/caret.ts":155,"./api/events":156,"./api/events.ts":156,"./api/i18n":157,"./api/i18n.ts":157,"./api/index":82,"./api/index.ts":82,"./api/inlineToolbar":158,"./api/inlineToolbar.ts":158,"./api/listeners":159,"./api/listeners.ts":159,"./api/notifier":160,"./api/notifier.ts":160,"./api/readonly":161,"./api/readonly.ts":161,"./api/sanitizer":162,"./api/sanitizer.ts":162,"./api/saver":163,"./api/saver.ts":163,"./api/selection":164,"./api/selection.ts":164,"./api/styles":165,"./api/styles.ts":165,"./api/toolbar":166,"./api/toolbar.ts":166,"./api/tooltip":167,"./api/tooltip.ts":167,"./api/ui":168,"./api/ui.ts":168,"./blockEvents":169,"./blockEvents.ts":169,"./blockManager":170,"./blockManager.ts":170,"./blockSelection":171,"./blockSelection.ts":171,"./caret":172,"./caret.ts":172,"./crossBlockSelection":173,"./crossBlockSelection.ts":173,"./dragNDrop":174,"./dragNDrop.ts":174,"./modificationsObserver":175,"./modificationsObserver.ts":175,"./paste":176,"./paste.ts":176,"./readonly":177,"./readonly.ts":177,"./rectangleSelection":178,"./rectangleSelection.ts":178,"./renderer":179,"./renderer.ts":179,"./saver":180,"./saver.ts":180,"./toolbar":83,"./toolbar/":83,"./toolbar/blockSettings":181,"./toolbar/blockSettings.ts":181,"./toolbar/conversion":182,"./toolbar/conversion.ts":182,"./toolbar/index":83,"./toolbar/index.ts":83,"./toolbar/inline":183,"./toolbar/inline.ts":183,"./tools":184,"./tools.ts":184,"./ui":186,"./ui.ts":186};function r(t){var e=i(t);return n(e)}function i(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id=375},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(377)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var l=function(){function t(){(0,r.default)(this,t)}return(0,i.default)(t,[{key:"show",value:function(t){a.default.show(t)}}]),t}();o.default=l,l.displayName="Notifier",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){window,t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){"use strict";n(1),t.exports=function(){var t=n(6),e=null;return{show:function(n){if(n.message){!function(){if(e)return!0;e=t.getWrapper(),document.body.appendChild(e)}();var o=null,r=n.time||8e3;switch(n.type){case"confirm":o=t.confirm(n);break;case"prompt":o=t.prompt(n);break;default:o=t.alert(n),window.setTimeout((function(){o.remove()}),r)}e.appendChild(o),o.classList.add("cdx-notify--bounce-in")}}}}()},function(t,e,n){var o=n(2);"string"==typeof o&&(o=[[t.i,o,""]]),n(4)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,'.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:\'\';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:\'\';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}',""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n,o=t[1]||"",r=t[3];if(!r)return o;if(e&&"function"==typeof btoa){var i=(n=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),a=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[o].concat(a).concat([i]).join("\n")}return[o].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),l=null,c=0,u=[],f=n(5);function d(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(b(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(b(o.parts[a],e));i[o.id]={id:o.id,refs:1,parts:s}}}}function p(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=u[u.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,r)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function g(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),y(e,t.attrs),h(t,e),e}function y(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function b(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var a=c++;n=l||(l=g(e)),o=x.bind(null,n,a,!1),r=x.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),h(t,e),e}(e),o=function(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=f(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),r=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),o=function(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){v(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return d(n,e),function(t){for(var o=[],r=0;r<n.length;r++){var a=n[r];(s=i[a.id]).refs--,o.push(s)}for(t&&d(p(t,e),e),r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var m,k=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function x(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=k(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var r,i=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")}))}},function(t,e,n){"use strict";var o,r,i,a,s,l;t.exports=(o="cdx-notify",r="cdx-notify__cross",i="cdx-notify__button--confirm",a="cdx-notify__button",s="cdx-notify__btns-wrapper",{alert:l=function(t){var e=document.createElement("DIV"),n=document.createElement("DIV"),i=t.message,a=t.style;return e.classList.add(o),a&&e.classList.add(o+"--"+a),e.innerHTML=i,n.classList.add(r),n.addEventListener("click",e.remove.bind(e)),e.appendChild(n),e},confirm:function(t){var e=l(t),n=document.createElement("div"),o=document.createElement("button"),c=document.createElement("button"),u=e.querySelector("."+r),f=t.cancelHandler,d=t.okHandler;return n.classList.add(s),o.innerHTML=t.okText||"Confirm",c.innerHTML=t.cancelText||"Cancel",o.classList.add(a),c.classList.add(a),o.classList.add(i),c.classList.add("cdx-notify__button--cancel"),f&&"function"==typeof f&&(c.addEventListener("click",f),u.addEventListener("click",f)),d&&"function"==typeof d&&o.addEventListener("click",d),o.addEventListener("click",e.remove.bind(e)),c.addEventListener("click",e.remove.bind(e)),n.appendChild(o),n.appendChild(c),e.appendChild(n),e},prompt:function(t){var e=l(t),n=document.createElement("div"),o=document.createElement("button"),c=document.createElement("input"),u=e.querySelector("."+r),f=t.cancelHandler,d=t.okHandler;return n.classList.add(s),o.innerHTML=t.okText||"Ok",o.classList.add(a),o.classList.add(i),c.classList.add("cdx-notify__input"),t.placeholder&&c.setAttribute("placeholder",t.placeholder),t.default&&(c.value=t.default),t.inputType&&(c.type=t.inputType),f&&"function"==typeof f&&u.addEventListener("click",f),d&&"function"==typeof d&&o.addEventListener("click",(function(){d(c.value)})),o.addEventListener("click",e.remove.bind(e)),n.appendChild(c),n.appendChild(o),e.appendChild(n),e},getWrapper:function(){var t=document.createElement("DIV");return t.classList.add("cdx-notifies"),t}})}])},function(t,e,n){var o,r;void 0===(r="function"==typeof(o=function(){function t(t){var e=t.tags;if(!Object.keys(e).map((function(t){return typeof e[t]})).every((function(t){return"object"===t||"boolean"===t||"function"===t})))throw new Error("The configuration was invalid");this.config=t}var e=["P","LI","TD","TH","DIV","H1","H2","H3","H4","H5","H6","PRE"];function n(t){return-1!==e.indexOf(t.nodeName)}var o=["A","B","STRONG","I","EM","SUB","SUP","U","STRIKE"];function r(t){return-1!==o.indexOf(t.nodeName)}function i(t,e,n){return"function"==typeof t.tags[e]?t.tags[e](n):t.tags[e]}function a(t,e){return void 0===e||"boolean"==typeof e&&!e}function s(t,e,n){var o=t.name.toLowerCase();return!0!==e&&("function"==typeof e[o]?!e[o](t.value,n):void 0===e[o]||!1===e[o]||"string"==typeof e[o]&&e[o]!==t.value)}return t.prototype.clean=function(t){const e=document.implementation.createHTMLDocument(),n=e.createElement("div");return n.innerHTML=t,this._sanitize(e,n),n.innerHTML},t.prototype._sanitize=function(t,e){var o=function(t,e){return t.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT,null,!1)}(t,e),l=o.firstChild();if(l)do{if(l.nodeType!==Node.TEXT_NODE){if(l.nodeType===Node.COMMENT_NODE){e.removeChild(l),this._sanitize(t,e);break}var c,u=r(l);u&&(c=Array.prototype.some.call(l.childNodes,n));var f=!!e.parentNode,d=n(e)&&n(l)&&f,p=l.nodeName.toLowerCase(),h=i(this.config,p,l);if(u&&c||a(0,h)||!this.config.keepNestedBlockElements&&d){if("SCRIPT"!==l.nodeName&&"STYLE"!==l.nodeName)for(;l.childNodes.length>0;)e.insertBefore(l.childNodes[0],l);e.removeChild(l),this._sanitize(t,e);break}for(var v=0;v<l.attributes.length;v+=1){var g=l.attributes[v];s(g,h,l)&&(l.removeAttribute(g.name),v-=1)}this._sanitize(t,l)}else if(""===l.data.trim()&&(l.previousElementSibling&&n(l.previousElementSibling)||l.nextElementSibling&&n(l.nextElementSibling))){e.removeChild(l),this._sanitize(t,e);break}}while(l=o.nextSibling())},t})?o.call(e,n,e,t):o)||(t.exports=r)},function(t,e,n){window,t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));class o{constructor(){this.nodes={wrapper:null,content:null},this.showed=!1,this.offsetTop=10,this.offsetLeft=10,this.offsetRight=10,this.hidingDelay=0,this.handleWindowScroll=()=>{this.showed&&this.hide(!0)},this.loadStyles(),this.prepare(),window.addEventListener("scroll",this.handleWindowScroll,{passive:!0})}get CSS(){return{tooltip:"ct",tooltipContent:"ct__content",tooltipShown:"ct--shown",placement:{left:"ct--left",bottom:"ct--bottom",right:"ct--right",top:"ct--top"}}}show(t,e,n){this.nodes.wrapper||this.prepare(),this.hidingTimeout&&clearTimeout(this.hidingTimeout);const o=Object.assign({placement:"bottom",marginTop:0,marginLeft:0,marginRight:0,marginBottom:0,delay:70,hidingDelay:0},n);if(o.hidingDelay&&(this.hidingDelay=o.hidingDelay),this.nodes.content.innerHTML="","string"==typeof e)this.nodes.content.appendChild(document.createTextNode(e));else{if(!(e instanceof Node))throw Error("[CodeX Tooltip] Wrong type of ??content?? passed. It should be an instance of Node or String. But "+typeof e+" given.");this.nodes.content.appendChild(e)}switch(this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)),o.placement){case"top":this.placeTop(t,o);break;case"left":this.placeLeft(t,o);break;case"right":this.placeRight(t,o);break;case"bottom":default:this.placeBottom(t,o)}o&&o.delay?this.showingTimeout=setTimeout(()=>{this.nodes.wrapper.classList.add(this.CSS.tooltipShown),this.showed=!0},o.delay):(this.nodes.wrapper.classList.add(this.CSS.tooltipShown),this.showed=!0)}hide(t=!1){if(this.hidingDelay&&!t)return this.hidingTimeout&&clearTimeout(this.hidingTimeout),void(this.hidingTimeout=setTimeout(()=>{this.hide(!0)},this.hidingDelay));this.nodes.wrapper.classList.remove(this.CSS.tooltipShown),this.showed=!1,this.showingTimeout&&clearTimeout(this.showingTimeout)}onHover(t,e,n){t.addEventListener("mouseenter",()=>{this.show(t,e,n)}),t.addEventListener("mouseleave",()=>{this.hide()})}destroy(){this.nodes.wrapper.remove(),window.removeEventListener("scroll",this.handleWindowScroll)}prepare(){this.nodes.wrapper=this.make("div",this.CSS.tooltip),this.nodes.content=this.make("div",this.CSS.tooltipContent),this.append(this.nodes.wrapper,this.nodes.content),this.append(document.body,this.nodes.wrapper)}loadStyles(){const t="codex-tooltips-style";if(document.getElementById(t))return;const e=n(2),o=this.make("style",null,{textContent:e.toString(),id:t});this.prepend(document.head,o)}placeBottom(t,e){const n=t.getBoundingClientRect(),o=n.left+t.clientWidth/2-this.nodes.wrapper.offsetWidth/2,r=n.bottom+window.pageYOffset+this.offsetTop+e.marginTop;this.applyPlacement("bottom",o,r)}placeTop(t,e){const n=t.getBoundingClientRect(),o=n.left+t.clientWidth/2-this.nodes.wrapper.offsetWidth/2,r=n.top+window.pageYOffset-this.nodes.wrapper.clientHeight-this.offsetTop;this.applyPlacement("top",o,r)}placeLeft(t,e){const n=t.getBoundingClientRect(),o=n.left-this.nodes.wrapper.offsetWidth-this.offsetLeft-e.marginLeft,r=n.top+window.pageYOffset+t.clientHeight/2-this.nodes.wrapper.offsetHeight/2;this.applyPlacement("left",o,r)}placeRight(t,e){const n=t.getBoundingClientRect(),o=n.right+this.offsetRight+e.marginRight,r=n.top+window.pageYOffset+t.clientHeight/2-this.nodes.wrapper.offsetHeight/2;this.applyPlacement("right",o,r)}applyPlacement(t,e,n){this.nodes.wrapper.classList.add(this.CSS.placement[t]),this.nodes.wrapper.style.left=e+"px",this.nodes.wrapper.style.top=n+"px"}make(t,e=null,n={}){const o=document.createElement(t);Array.isArray(e)?o.classList.add(...e):e&&o.classList.add(e);for(const t in n)n.hasOwnProperty(t)&&(o[t]=n[t]);return o}append(t,e){Array.isArray(e)?e.forEach(e=>t.appendChild(e)):t.appendChild(e)}prepend(t,e){Array.isArray(e)?(e=e.reverse()).forEach(e=>t.prepend(e)):t.prepend(e)}}},function(t,e){t.exports='.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>\') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}'}]).default},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(14),n(7),n(25)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l){"use strict";var c=n(8),u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=c(s),l=u(l);var f=function(){function t(e,n){(0,r.default)(this,t),this.cursor=-1,this.items=[],this.items=e||[],this.focusedCssClass=n}return(0,i.default)(t,[{key:"setItems",value:function(t){this.items=t}},{key:"next",value:function(){this.cursor=this.leafNodesAndReturnIndex(t.directions.RIGHT)}},{key:"previous",value:function(){this.cursor=this.leafNodesAndReturnIndex(t.directions.LEFT)}},{key:"dropCursor",value:function(){-1!==this.cursor&&(this.items[this.cursor].classList.remove(this.focusedCssClass),this.cursor=-1)}},{key:"leafNodesAndReturnIndex",value:function(e){var n=this;if(0===this.items.length)return this.cursor;var o=this.cursor;return-1===o?o=e===t.directions.RIGHT?-1:0:this.items[o].classList.remove(this.focusedCssClass),o=e===t.directions.RIGHT?(o+1)%this.items.length:(this.items.length+o-1)%this.items.length,a.default.canSetCaret(this.items[o])&&s.delay((function(){return l.default.setCursor(n.items[o])}),50)(),this.items[o].classList.add(this.focusedCssClass),o}},{key:"currentItem",get:function(){return-1===this.cursor?null:this.items[this.cursor]}}]),t}();o.default=f,f.displayName="DomIterator",f.directions={RIGHT:"right",LEFT:"left"},t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o=n(4);t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=o(t)););return t}},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(7),n(14),n(67)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l){"use strict";var c=n(8),u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=c(a),s=u(s);var f=function(){function t(e){(0,r.default)(this,t),this.blocks=[],this.workingArea=e}return(0,i.default)(t,[{key:"push",value:function(t){this.blocks.push(t),this.insertToDOM(t)}},{key:"swap",value:function(t,e){var n=this.blocks[e];s.default.swap(this.blocks[t].holder,n.holder),this.blocks[e]=this.blocks[t],this.blocks[t]=n}},{key:"move",value:function(t,e){var n=this.blocks.splice(e,1)[0],o=t-1,r=Math.max(0,o),i=this.blocks[r];t>0?this.insertToDOM(n,"afterend",i):this.insertToDOM(n,"beforebegin",i),this.blocks.splice(t,0,n);var a=this.composeBlockEvent("move",{fromIndex:e,toIndex:t});n.call(l.BlockToolAPI.MOVED,a)}},{key:"insert",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this.length){t>this.length&&(t=this.length),n&&(this.blocks[t].holder.remove(),this.blocks[t].call(l.BlockToolAPI.REMOVED));var o=n?1:0;if(this.blocks.splice(t,o,e),t>0){var r=this.blocks[t-1];this.insertToDOM(e,"afterend",r)}else{var i=this.blocks[t+1];i?this.insertToDOM(e,"beforebegin",i):this.insertToDOM(e)}}else this.push(e)}},{key:"remove",value:function(t){isNaN(t)&&(t=this.length-1),this.blocks[t].holder.remove(),this.blocks[t].call(l.BlockToolAPI.REMOVED),this.blocks.splice(t,1)}},{key:"removeAll",value:function(){this.workingArea.innerHTML="",this.blocks.forEach((function(t){return t.call(l.BlockToolAPI.REMOVED)})),this.blocks.length=0}},{key:"insertAfter",value:function(t,e){var n=this.blocks.indexOf(t);this.insert(n+1,e)}},{key:"get",value:function(t){return this.blocks[t]}},{key:"indexOf",value:function(t){return this.blocks.indexOf(t)}},{key:"insertToDOM",value:function(t,e,n){e?n.holder.insertAdjacentElement(e,t.holder):this.workingArea.appendChild(t.holder),t.call(l.BlockToolAPI.RENDERED)}},{key:"composeBlockEvent",value:function(t,e){return new CustomEvent(t,{detail:e})}},{key:"length",get:function(){return this.blocks.length}},{key:"array",get:function(){return this.blocks}},{key:"nodes",get:function(){return a.array(this.workingArea.children)}}],[{key:"set",value:function(t,e,n){return isNaN(Number(e))?(Reflect.set(t,e,n),!0):(t.insert(+e,n),!0)}},{key:"get",value:function(t,e){return isNaN(Number(e))?Reflect.get(t,e):t.get(+e)}}]),t}();o.default=f,f.displayName="Blocks",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e],void 0===(i="function"==typeof(o=function(t){"use strict";var e;Object.defineProperty(t,"__esModule",{value:!0}),t.BlockMutationType=void 0,t.BlockMutationType=e,function(t){t.Added="block-added",t.Removed="block-removed",t.Moved="block-moved",t.Changed="block-changed"}(e||(t.BlockMutationType=e={}))})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){window,t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.r(e);var i=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.commands={},this.keys={},this.name=e.name,this.parseShortcutName(e.name),this.element=e.on,this.callback=e.callback,this.executeShortcut=function(t){n.execute(t)},this.element.addEventListener("keydown",this.executeShortcut,!1)}return r(t,null,[{key:"supportedCommands",get:function(){return{SHIFT:["SHIFT"],CMD:["CMD","CONTROL","COMMAND","WINDOWS","CTRL"],ALT:["ALT","OPTION"]}}},{key:"keyCodes",get:function(){return{0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,BACKSPACE:8,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:45,DELETE:46}}}]),r(t,[{key:"parseShortcutName",value:function(e){e=e.split("+");for(var n=0;n<e.length;n++){e[n]=e[n].toUpperCase();var o=!1;for(var r in t.supportedCommands)if(t.supportedCommands[r].includes(e[n])){o=this.commands[r]=!0;break}o||(this.keys[e[n]]=!0)}for(var i in t.supportedCommands)this.commands[i]||(this.commands[i]=!1)}},{key:"execute",value:function(e){var n,o={CMD:e.ctrlKey||e.metaKey,SHIFT:e.shiftKey,ALT:e.altKey},r=!0;for(n in this.commands)this.commands[n]!==o[n]&&(r=!1);var i,a=!0;for(i in this.keys)a=a&&e.keyCode===t.keyCodes[i];r&&a&&this.callback(e)}},{key:"remove",value:function(){this.element.removeEventListener("keydown",this.executeShortcut)}}]),t}();e.default=i}]).default},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(114),n(5),n(6),n(4),n(59),n(7),n(67),n(115),n(81),n(386),n(60),n(84)],void 0===(i="function"==typeof(o=function(t,e,o,r,i,a,s,l,c,u,f,d,p,h,v){"use strict";var g=n(8),y=n(1);function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ToolboxEvent=void 0,e=y(e),o=y(o),r=y(r),i=y(i),a=y(a),s=y(s),l=y(l),c=g(c),f=y(f),d=y(d),p=g(p),h=y(h);var m,k=function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===("undefined"==typeof Reflect?"undefined":(0,l.default)(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};t.ToolboxEvent=m,function(t){t.Opened="toolbox-opened",t.Closed="toolbox-closed",t.BlockAdded="toolbox-block-added"}(m||(t.ToolboxEvent=m={}));var x=function(t){(0,i.default)(d,t);var n,l=(n=d,function(){var t,e=(0,s.default)(n);if(b()){var o=(0,s.default)(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return(0,a.default)(this,t)});function d(t){var n,o=t.api,r=t.tools,i=t.i18nLabels;return(0,e.default)(this,d),(n=l.call(this)).opened=!1,n.nodes={toolbox:null},n.clickListenerId=null,n.onOverlayClicked=function(){n.close()},n.api=o,n.tools=r,n.i18nLabels=i,n}return(0,o.default)(d,[{key:"make",value:function(){var t=this;return this.popover=new p.default({className:d.CSS.toolbox,searchable:!0,filterLabel:this.i18nLabels.filter,nothingFoundLabel:this.i18nLabels.nothingFound,items:this.toolsToBeDisplayed.map((function(e){return{icon:e.toolbox.icon,label:h.default.t(v.I18nInternalNS.toolNames,e.toolbox.title||c.capitalize(e.name)),name:e.name,onClick:function(n){t.toolButtonActivated(e.name)},secondaryLabel:e.shortcut?c.beautifyShortcut(e.shortcut):""}}))}),this.popover.on(p.PopoverEvent.OverlayClicked,this.onOverlayClicked),this.enableShortcuts(),this.nodes.toolbox=this.popover.getElement(),this.nodes.toolbox}},{key:"hasFocus",value:function(){return this.popover.hasFocus()}},{key:"destroy",value:function(){(0,r.default)((0,s.default)(d.prototype),"destroy",this).call(this),this.nodes&&this.nodes.toolbox&&(this.nodes.toolbox.remove(),this.nodes.toolbox=null),this.api.listeners.offById(this.clickListenerId),this.removeAllShortcuts(),this.popover.off(p.PopoverEvent.OverlayClicked,this.onOverlayClicked)}},{key:"toolButtonActivated",value:function(t){this.insertNewBlock(t)}},{key:"open",value:function(){this.isEmpty||(this.shouldOpenPopoverBottom||(this.nodes.toolbox.style.setProperty("--popover-height",this.popover.calculateHeight()+"px"),this.nodes.toolbox.classList.add(d.CSS.toolboxOpenedTop)),this.popover.show(),this.opened=!0,this.emit(m.Opened))}},{key:"close",value:function(){this.popover.hide(),this.opened=!1,this.nodes.toolbox.classList.remove(d.CSS.toolboxOpenedTop),this.emit(m.Closed)}},{key:"toggle",value:function(){this.opened?this.close():this.open()}},{key:"enableShortcuts",value:function(){var t=this;this.toolsToBeDisplayed.forEach((function(e){var n=e.shortcut;n&&t.enableShortcutForTool(e.name,n)}))}},{key:"enableShortcutForTool",value:function(t,e){var n=this;f.default.add({name:e,on:this.api.ui.nodes.redactor,handler:function(e){e.preventDefault(),n.insertNewBlock(t)}})}},{key:"removeAllShortcuts",value:function(){var t=this;this.toolsToBeDisplayed.forEach((function(e){var n=e.shortcut;n&&f.default.remove(t.api.ui.nodes.redactor,n)}))}},{key:"insertNewBlock",value:function(t){var e=this.api.blocks.getCurrentBlockIndex(),n=this.api.blocks.getBlockByIndex(e);if(n){var o=n.isEmpty?e:e+1,r=this.api.blocks.insert(t,void 0,void 0,o,void 0,n.isEmpty);r.call(u.BlockToolAPI.APPEND_CALLBACK),this.api.caret.setToBlock(o),this.emit(m.BlockAdded,{block:r}),this.api.toolbar.close()}}},{key:"isEmpty",get:function(){return 0===this.toolsToBeDisplayed.length}},{key:"shouldOpenPopoverBottom",get:function(){var t=this.nodes.toolbox.getBoundingClientRect(),e=this.api.ui.nodes.redactor.getBoundingClientRect(),n=this.popover.calculateHeight(),o=t.top+n,r=t.top-n,i=Math.min(window.innerHeight,e.bottom);return r<e.top||o<=i}},{key:"toolsToBeDisplayed",get:function(){return Array.from(this.tools.values()).filter((function(t){var e=t.toolbox;return!(!e||e&&!e.icon&&(c.log("Toolbar icon is missed. Tool %o skipped","warn",t.name),1))}))}}],[{key:"CSS",get:function(){return{toolbox:"ce-toolbox",toolboxOpenedTop:"ce-toolbox--opened-top"}}}]),d}(d.default);t.default=x,x.displayName="Toolbox",k([c.cacheable],x.prototype,"toolsToBeDisplayed",null)})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(59),n(14),n(111),n(61),n(387),n(81),n(7),n(388)],void 0===(i="function"==typeof(o=function(t,e,o,r,i,a,s,l,c,u,f,d,p,h){"use strict";var v=n(1);function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.PopoverEvent=void 0,e=v(e),o=v(o),r=v(r),i=v(i),a=v(a),s=v(s),l=v(l),c=v(c),u=v(u),f=v(f),d=v(d),h=v(h);var y,b=function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===("undefined"==typeof Reflect?"undefined":(0,s.default)(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};t.PopoverEvent=y,function(t){t.OverlayClicked="overlay-clicked"}(y||(t.PopoverEvent=y={}));var m=function(t){(0,r.default)(d,t);var n,s=(n=d,function(){var t,e=(0,a.default)(n);if(g()){var o=(0,a.default)(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return(0,i.default)(this,t)});function d(t){var n,o=t.items,r=t.className,i=t.searchable,a=t.filterLabel,l=t.nothingFoundLabel;return(0,e.default)(this,d),(n=s.call(this)).isShown=!1,n.nodes={wrapper:null,popover:null,items:null,nothingFound:null,overlay:null},n.scrollLocker=new h.default,n.items=o,n.className=r||"",n.searchable=i,n.listeners=new c.default,n.filterLabel=a,n.nothingFoundLabel=l,n.render(),n.enableFlipper(),n}return(0,o.default)(d,[{key:"getElement",value:function(){return this.nodes.wrapper}},{key:"show",value:function(){var t=this;this.search.clear(),this.nodes.items.scrollTop=0,this.nodes.popover.classList.add(d.CSS.popoverOpened),this.nodes.overlay.classList.remove(d.CSS.popoverOverlayHidden),this.flipper.activate(),this.searchable&&window.requestAnimationFrame((function(){t.search.focus()})),(0,p.isMobileScreen)()&&this.scrollLocker.lock(),this.isShown=!0}},{key:"hide",value:function(){this.isShown&&(this.nodes.popover.classList.remove(d.CSS.popoverOpened),this.nodes.overlay.classList.add(d.CSS.popoverOverlayHidden),this.flipper.deactivate(),(0,p.isMobileScreen)()&&this.scrollLocker.unlock(),this.isShown=!1)}},{key:"destroy",value:function(){this.listeners.removeAll()}},{key:"hasFocus",value:function(){return this.flipper.hasFocus()}},{key:"calculateHeight",value:function(){var t,e=this.nodes.popover.cloneNode(!0);return e.style.visibility="hidden",e.style.position="absolute",e.style.top="-1000px",e.classList.add(d.CSS.popoverOpened),document.body.appendChild(e),t=e.offsetHeight,e.remove(),t}},{key:"render",value:function(){var t=this;this.nodes.wrapper=l.default.make("div",this.className),this.nodes.popover=l.default.make("div",d.CSS.popover),this.nodes.wrapper.appendChild(this.nodes.popover),this.nodes.overlay=l.default.make("div",[d.CSS.popoverOverlay,d.CSS.popoverOverlayHidden]),this.nodes.wrapper.appendChild(this.nodes.overlay),this.searchable&&this.addSearch(this.nodes.popover),this.nodes.items=l.default.make("div",d.CSS.itemsWrapper),this.items.forEach((function(e){t.nodes.items.appendChild(t.createItem(e))})),this.nodes.popover.appendChild(this.nodes.items),this.nodes.nothingFound=l.default.make("div",[d.CSS.noFoundMessage],{textContent:this.nothingFoundLabel}),this.nodes.popover.appendChild(this.nodes.nothingFound),this.listeners.on(this.nodes.popover,"click",(function(e){var n=e.target.closest(".".concat(d.CSS.item));n&&t.itemClicked(n)})),this.listeners.on(this.nodes.overlay,"click",(function(){t.emit(y.OverlayClicked)}))}},{key:"addSearch",value:function(t){var e=this;this.search=new f.default({items:this.items,placeholder:this.filterLabel,onSearch:function(t){var n=[];e.items.forEach((function(o,r){var i=e.nodes.items.children[r];t.includes(o)?(n.push(i),i.classList.remove(d.CSS.itemHidden)):i.classList.add(d.CSS.itemHidden)})),e.nodes.nothingFound.classList.toggle(d.CSS.noFoundMessageShown,0===n.length),e.flipper.deactivate(),e.flipper.activate(n),e.flipper.focusFirst()}});var n=this.search.getElement();t.appendChild(n)}},{key:"createItem",value:function(t){var e=l.default.make("div",d.CSS.item);e.dataset.itemName=t.name;var n=l.default.make("div",d.CSS.itemLabel,{innerHTML:t.label});return t.icon&&e.appendChild(l.default.make("div",d.CSS.itemIcon,{innerHTML:t.icon})),e.appendChild(n),t.secondaryLabel&&e.appendChild(l.default.make("div",d.CSS.itemSecondaryLabel,{textContent:t.secondaryLabel})),e}},{key:"itemClicked",value:function(t){var e=this.nodes.wrapper.querySelectorAll(".".concat(d.CSS.item)),n=Array.from(e).indexOf(t),o=this.items[n];o.onClick(o)}},{key:"enableFlipper",value:function(){var t=Array.from(this.nodes.wrapper.querySelectorAll(".".concat(d.CSS.item)));this.flipper=new u.default({items:t,focusedItemClass:d.CSS.itemFocused,allowedKeys:[p.keyCodes.TAB,p.keyCodes.UP,p.keyCodes.DOWN,p.keyCodes.ENTER]})}}],[{key:"CSS",get:function(){return{popover:"ce-popover",popoverOpened:"ce-popover--opened",itemsWrapper:"ce-popover__items",item:"ce-popover__item",itemHidden:"ce-popover__item--hidden",itemFocused:"ce-popover__item--focused",itemLabel:"ce-popover__item-label",itemIcon:"ce-popover__item-icon",itemSecondaryLabel:"ce-popover__item-secondary-label",noFoundMessage:"ce-popover__no-found",noFoundMessageShown:"ce-popover__no-found--shown",popoverOverlay:"ce-popover__overlay",popoverOverlayHidden:"ce-popover__overlay--hidden"}}}]),d}(d.default);t.default=m,m.displayName="Popover",b([p.cacheable],m.prototype,"calculateHeight",null)})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(14),n(111)],void 0===(i="function"==typeof(o=function(o,r,i,a,s){"use strict";var l=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=l(r),i=l(i),a=l(a),s=l(s);var c=function(){function t(e){var n=e.items,o=e.onSearch,i=e.placeholder;(0,r.default)(this,t),this.listeners=new s.default,this.items=n,this.onSearch=o,this.render(i)}return(0,i.default)(t,[{key:"getElement",value:function(){return this.wrapper}},{key:"focus",value:function(){this.input.focus()}},{key:"clear",value:function(){this.input.value="",this.searchQuery="",this.onSearch(this.foundItems)}},{key:"destroy",value:function(){this.listeners.removeAll()}},{key:"render",value:function(e){var n=this;this.wrapper=a.default.make("div",t.CSS.wrapper);var o=a.default.make("div",t.CSS.icon),r=a.default.svg("search",16,16);this.input=a.default.make("input",t.CSS.input,{placeholder:e}),o.appendChild(r),this.wrapper.appendChild(o),this.wrapper.appendChild(this.input),this.listeners.on(this.input,"input",(function(){n.searchQuery=n.input.value,n.onSearch(n.foundItems)}))}},{key:"checkItem",value:function(t){var e=t.label.toLowerCase(),n=this.searchQuery.toLowerCase();return e.includes(n)}},{key:"foundItems",get:function(){var t=this;return this.items.filter((function(e){return t.checkItem(e)}))}}],[{key:"CSS",get:function(){return{wrapper:"cdx-search-field",icon:"cdx-search-field__icon",input:"cdx-search-field__input"}}}]),t}();o.default=c,c.displayName="SearchInput",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i);var l=function(){function t(){(0,r.default)(this,t)}return(0,i.default)(t,[{key:"lock",value:function(){a.isIosDevice?this.lockHard():document.body.classList.add(t.CSS.scrollLocked)}},{key:"unlock",value:function(){a.isIosDevice?this.unlockHard():document.body.classList.remove(t.CSS.scrollLocked)}},{key:"lockHard",value:function(){this.scrollPosition=window.pageYOffset,document.documentElement.style.setProperty("--window-scroll-offset","".concat(this.scrollPosition,"px")),document.body.classList.add(t.CSS.scrollLockedHard)}},{key:"unlockHard",value:function(){document.body.classList.remove(t.CSS.scrollLockedHard),null!==this.scrollPosition&&window.scrollTo(0,this.scrollPosition),this.scrollPosition=null}}]),t}();o.default=l,l.displayName="ScrollLocker",l.CSS={scrollLocked:"ce-scroll-locked",scrollLockedHard:"ce-scroll-locked--hard"},t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){window,t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n(1).toString();var i=function(){function t(e){var n=e.data,o=e.config,r=e.api,i=e.readOnly;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=r,this.readOnly=i,this._CSS={block:this.api.styles.block,wrapper:"ce-paragraph"},this.readOnly||(this.onKeyUp=this.onKeyUp.bind(this)),this._placeholder=o.placeholder?o.placeholder:t.DEFAULT_PLACEHOLDER,this._data={},this._element=this.drawView(),this._preserveBlank=void 0!==o.preserveBlank&&o.preserveBlank,this.data=n}return r(t,null,[{key:"DEFAULT_PLACEHOLDER",get:function(){return""}}]),r(t,[{key:"onKeyUp",value:function(t){"Backspace"!==t.code&&"Delete"!==t.code||""===this._element.textContent&&(this._element.innerHTML="")}},{key:"drawView",value:function(){var t=document.createElement("DIV");return t.classList.add(this._CSS.wrapper,this._CSS.block),t.contentEditable=!1,t.dataset.placeholder=this.api.i18n.t(this._placeholder),this.readOnly||(t.contentEditable=!0,t.addEventListener("keyup",this.onKeyUp)),t}},{key:"render",value:function(){return this._element}},{key:"merge",value:function(t){var e={text:this.data.text+t.text};this.data=e}},{key:"validate",value:function(t){return!(""===t.text.trim()&&!this._preserveBlank)}},{key:"save",value:function(t){return{text:t.innerHTML}}},{key:"onPaste",value:function(t){var e={text:t.detail.data.innerHTML};this.data=e}},{key:"data",get:function(){var t=this._element.innerHTML;return this._data.text=t,this._data},set:function(t){this._data=t||{},this._element.innerHTML=this._data.text||""}}],[{key:"conversionConfig",get:function(){return{export:"text",import:"text"}}},{key:"sanitize",get:function(){return{text:{br:!0}}}},{key:"isReadOnlySupported",get:function(){return!0}},{key:"pasteConfig",get:function(){return{tags:["P"]}}},{key:"toolbox",get:function(){return{icon:n(5).default,title:"Text"}}}]),t}();t.exports=i},function(t,e,n){var o=n(2),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]),o(r,{insert:"head",singleton:!1}),t.exports=r.locals||{}},function(t,e,n){"use strict";var o,r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function a(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},o=[],r=0;r<t.length;r++){var s=t[r],l=e.base?s[0]+e.base:s[0],c=n[l]||0,u="".concat(l," ").concat(c);n[l]=c+1;var f=a(u),d={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:u,updater:v(d,e),references:1}),o.push(u)}return o}function l(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var a=r(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,u=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function f(t,e,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=u(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var p=null,h=0;function v(t,e){var n,o,r;if(e.singleton){var i=h++;n=p||(p=l(e)),o=f.bind(null,n,i,!1),r=f.bind(null,n,i,!0)}else n=l(e),o=d.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var r=a(n[o]);i[r].references--}for(var l=s(t,e),c=0;c<n.length;c++){var u=a(n[c]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=l}}}},function(t,e,n){(e=n(4)(!1)).push([t.i,".ce-paragraph {\n    line-height: 1.6em;\n    outline: none;\n}\n\n.ce-paragraph[data-placeholder]:empty::before{\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n/** Show placeholder at the first paragraph if Editor is empty */\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n.ce-paragraph p:first-of-type{\n    margin-top: 0;\n}\n\n.ce-paragraph p:last-of-type{\n    margin-bottom: 0;\n}\n",""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n,o,r,i=t[1]||"",a=t[3];if(!a)return i;if(e&&"function"==typeof btoa){var s=(n=a,o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(r," */")),l=a.sources.map((function(t){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(t," */")}));return[i].concat(l).concat([s]).join("\n")}return[i].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},function(t,e,n){"use strict";n.r(e),e.default='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.2 -0.3 9 11.4" width="12" height="14">\n  <path d="M0 2.77V.92A1 1 0 01.2.28C.35.1.56 0 .83 0h7.66c.28.01.48.1.63.28.14.17.21.38.21.64v1.85c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26a1 1 0 01-.21-.66V1.69H5.6v7.58h.5c.25 0 .45.08.6.23.17.16.25.35.25.6s-.08.45-.24.6a.87.87 0 01-.62.22H3.21a.87.87 0 01-.61-.22.78.78 0 01-.24-.6c0-.25.08-.44.24-.6a.85.85 0 01.61-.23h.5V1.7H1.73v1.08c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26A1 1 0 010 2.77z"/>\n</svg>\n'}])},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(14)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var l=function(){function t(){(0,r.default)(this,t),this.commandName="bold",this.CSS={button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--bold"},this.nodes={button:void 0}}return(0,i.default)(t,[{key:"render",value:function(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.appendChild(a.default.svg("bold",12,14)),this.nodes.button}},{key:"surround",value:function(t){document.execCommand(this.commandName)}},{key:"checkState",value:function(t){var e=document.queryCommandState(this.commandName);return this.nodes.button.classList.toggle(this.CSS.buttonActive,e),e}},{key:"shortcut",get:function(){return"CMD+B"}}],[{key:"sanitize",get:function(){return{b:{}}}}]),t}();o.default=l,l.displayName="BoldInlineTool",l.isInline=!0,l.title="Bold",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(14)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var l=function(){function t(){(0,r.default)(this,t),this.commandName="italic",this.CSS={button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--italic"},this.nodes={button:null}}return(0,i.default)(t,[{key:"render",value:function(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.appendChild(a.default.svg("italic",4,11)),this.nodes.button}},{key:"surround",value:function(t){document.execCommand(this.commandName)}},{key:"checkState",value:function(t){var e=document.queryCommandState(this.commandName);return this.nodes.button.classList.toggle(this.CSS.buttonActive,e),e}},{key:"shortcut",get:function(){return"CMD+I"}}],[{key:"sanitize",get:function(){return{i:{}}}}]),t}();o.default=l,l.displayName="ItalicInlineTool",l.isInline=!0,l.title="Italic",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(25),n(14),n(7)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l){"use strict";var c=n(8),u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),a=u(a),s=u(s),l=c(l);var f=function(){function t(e){var n=e.api;(0,r.default)(this,t),this.commandLink="createLink",this.commandUnlink="unlink",this.ENTER_KEY=13,this.CSS={button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--link",buttonUnlink:"ce-inline-tool--unlink",input:"ce-inline-tool-input",inputShowed:"ce-inline-tool-input--showed"},this.nodes={button:null,input:null},this.inputOpened=!1,this.toolbar=n.toolbar,this.inlineToolbar=n.inlineToolbar,this.notifier=n.notifier,this.i18n=n.i18n,this.selection=new a.default}return(0,i.default)(t,[{key:"render",value:function(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.appendChild(s.default.svg("link",14,10)),this.nodes.button.appendChild(s.default.svg("unlink",15,11)),this.nodes.button}},{key:"renderActions",value:function(){var t=this;return this.nodes.input=document.createElement("input"),this.nodes.input.placeholder=this.i18n.t("Add a link"),this.nodes.input.classList.add(this.CSS.input),this.nodes.input.addEventListener("keydown",(function(e){e.keyCode===t.ENTER_KEY&&t.enterPressed(e)})),this.nodes.input}},{key:"surround",value:function(t){if(t){this.inputOpened?(this.selection.restore(),this.selection.removeFakeBackground()):(this.selection.setFakeBackground(),this.selection.save());var e=this.selection.findParentTag("A");if(e)return this.selection.expandToTag(e),this.unlink(),this.closeActions(),this.checkState(),void this.toolbar.close()}this.toggleActions()}},{key:"checkState",value:function(t){var e=this.selection.findParentTag("A");if(e){this.nodes.button.classList.add(this.CSS.buttonUnlink),this.nodes.button.classList.add(this.CSS.buttonActive),this.openActions();var n=e.getAttribute("href");this.nodes.input.value="null"!==n?n:"",this.selection.save()}else this.nodes.button.classList.remove(this.CSS.buttonUnlink),this.nodes.button.classList.remove(this.CSS.buttonActive);return!!e}},{key:"clear",value:function(){this.closeActions()}},{key:"toggleActions",value:function(){this.inputOpened?this.closeActions(!1):this.openActions(!0)}},{key:"openActions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.nodes.input.classList.add(this.CSS.inputShowed),t&&this.nodes.input.focus(),this.inputOpened=!0}},{key:"closeActions",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.selection.isFakeBackgroundEnabled){var e=new a.default;e.save(),this.selection.restore(),this.selection.removeFakeBackground(),e.restore()}this.nodes.input.classList.remove(this.CSS.inputShowed),this.nodes.input.value="",t&&this.selection.clearSaved(),this.inputOpened=!1}},{key:"enterPressed",value:function(t){var e=this.nodes.input.value||"";return e.trim()?this.validateURL(e)?(e=this.prepareLink(e),this.selection.restore(),this.selection.removeFakeBackground(),this.insertLink(e),t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),this.selection.collapseToEnd(),void this.inlineToolbar.close()):(this.notifier.show({message:"Pasted link is not valid.",style:"error"}),void l.log("Incorrect Link pasted","warn",e)):(this.selection.restore(),this.unlink(),t.preventDefault(),void this.closeActions())}},{key:"validateURL",value:function(t){return!/\s/.test(t)}},{key:"prepareLink",value:function(t){return t=t.trim(),t=this.addProtocol(t)}},{key:"addProtocol",value:function(t){if(/^(\w+):(\/\/)?/.test(t))return t;var e=/^\/[^/\s]/.test(t),n="#"===t.substring(0,1),o=/^\/\/[^/\s]/.test(t);return e||n||o||(t="http://"+t),t}},{key:"insertLink",value:function(t){var e=this.selection.findParentTag("A");e&&this.selection.expandToTag(e),document.execCommand(this.commandLink,!1,t)}},{key:"unlink",value:function(){document.execCommand(this.commandUnlink)}},{key:"shortcut",get:function(){return"CMD+K"}}],[{key:"sanitize",get:function(){return{a:{href:!0,target:"_blank",rel:"nofollow"}}}}]),t}();o.default=f,f.displayName="LinkInlineTool",f.isInline=!0,f.title="Link",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(14)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var l=function(){function t(e){var n=e.data,o=e.api;(0,r.default)(this,t),this.CSS={wrapper:"ce-stub",info:"ce-stub__info",title:"ce-stub__title",subtitle:"ce-stub__subtitle"},this.api=o,this.title=n.title||this.api.i18n.t("Error"),this.subtitle=this.api.i18n.t("The block can not be displayed correctly."),this.savedData=n.savedData,this.wrapper=this.make()}return(0,i.default)(t,[{key:"render",value:function(){return this.wrapper}},{key:"save",value:function(){return this.savedData}},{key:"make",value:function(){var t=a.default.make("div",this.CSS.wrapper),e=a.default.svg("sad-face",52,52),n=a.default.make("div",this.CSS.info),o=a.default.make("div",this.CSS.title,{textContent:this.title}),r=a.default.make("div",this.CSS.subtitle,{textContent:this.subtitle});return t.appendChild(e),n.appendChild(o),n.appendChild(r),t.appendChild(n),t}}]),t}();o.default=l,l.displayName="Stub",l.isReadOnlySupported=!0,t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(68),n(395),n(396),n(397)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c){"use strict";var u=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=u(r),i=u(i),s=u(s),l=u(l),c=u(c);var f=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n},d=function(){function t(e,n,o){(0,r.default)(this,t),this.api=o,this.config=e,this.editorConfig=n}return(0,i.default)(t,[{key:"get",value:function(t){var e=this.config[t],n=e.class,o=e.isInternal,r=void 0!==o&&o,i=f(e,["class","isInternal"]);return new(this.getConstructor(n))({name:t,constructable:n,config:i,api:this.api,isDefault:t===this.editorConfig.defaultBlock,defaultPlaceholder:this.editorConfig.placeholder,isInternal:r})}},{key:"getConstructor",value:function(t){switch(!0){case t[a.InternalInlineToolSettings.IsInline]:return s.default;case t[a.InternalTuneSettings.IsTune]:return l.default;default:return c.default}}}]),t}();o.default=d,d.displayName="ToolsFactory",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(68)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c){"use strict";var u=n(8),f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=f(r),i=f(i),a=f(a),s=f(s),l=f(l);var p=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,l.default)(e);if(d()){var o=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).type=c.ToolType.Inline,t}return(0,i.default)(o,[{key:"create",value:function(){return new this.constructable({api:this.api.getMethodsForTool(this),config:this.settings})}},{key:"title",get:function(){return this.constructable[c.InternalInlineToolSettings.Title]}}]),o}((c=u(c)).default);o.default=p,p.displayName="InlineTool",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(5),n(6),n(4),n(68)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c){"use strict";var u=n(8),f=n(1);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=f(r),i=f(i),a=f(a),s=f(s),l=f(l);var p=function(t){(0,a.default)(o,t);var e,n=(e=o,function(){var t,n=(0,l.default)(e);if(d()){var o=(0,l.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,s.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).type=c.ToolType.Tune,t}return(0,i.default)(o,[{key:"create",value:function(t,e){return new this.constructable({api:this.api.getMethodsForTool(this),config:this.settings,block:e,data:t})}}]),o}((c=u(c)).default);o.default=p,p.displayName="BlockTune",t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(114),n(5),n(6),n(4),n(59),n(68),n(7),n(185)],void 0===(i="function"==typeof(o=function(o,r,i,a,s,l,c,u,f,d,p){"use strict";var h=n(8),v=n(1);function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=v(r),i=v(i),a=v(a),s=v(s),l=v(l),c=v(c),u=v(u),f=h(f),d=h(d),p=v(p);var y=function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===("undefined"==typeof Reflect?"undefined":(0,u.default)(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},b=function(t){(0,s.default)(o,t);var e,n=(e=o,function(){var t,n=(0,c.default)(e);if(g()){var o=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function o(){var t;return(0,r.default)(this,o),(t=n.apply(this,arguments)).type=f.ToolType.Block,t.inlineTools=new p.default,t.tunes=new p.default,t}return(0,i.default)(o,[{key:"create",value:function(t,e,n){return new this.constructable({data:t,block:e,readOnly:n,api:this.api.getMethodsForTool(this),config:this.settings})}},{key:"isReadOnlySupported",get:function(){return!0===this.constructable[f.InternalBlockToolSettings.IsReadOnlySupported]}},{key:"isLineBreaksEnabled",get:function(){return this.constructable[f.InternalBlockToolSettings.IsEnabledLineBreaks]}},{key:"toolbox",get:function(){var t=this.constructable[f.InternalBlockToolSettings.Toolbox],e=this.config[f.UserSettings.Toolbox];if(!d.isEmpty(t)&&!1!==(null!=e?e:t))return Object.assign({},t,e)}},{key:"conversionConfig",get:function(){return this.constructable[f.InternalBlockToolSettings.ConversionConfig]}},{key:"enabledInlineTools",get:function(){return this.config[f.UserSettings.EnabledInlineTools]||!1}},{key:"enabledBlockTunes",get:function(){return this.config[f.UserSettings.EnabledBlockTunes]}},{key:"pasteConfig",get:function(){return this.constructable[f.InternalBlockToolSettings.PasteConfig]||{}}},{key:"sanitizeConfig",get:function(){var t=(0,a.default)((0,c.default)(o.prototype),"sanitizeConfig",this),e=this.baseSanitizeConfig;if(d.isEmpty(t))return e;var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var i=t[r];d.isObject(i)?n[r]=Object.assign({},e,i):n[r]=i}return n}},{key:"baseSanitizeConfig",get:function(){var t={};return Array.from(this.inlineTools.values()).forEach((function(e){return Object.assign(t,e.sanitizeConfig)})),Array.from(this.tunes.values()).forEach((function(e){return Object.assign(t,e.sanitizeConfig)})),t}}]),o}(f.default);o.default=b,b.displayName="BlockTool",y([d.cacheable],b.prototype,"sanitizeConfig",null),y([d.cacheable],b.prototype,"baseSanitizeConfig",null),t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(14)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var l=function(){function t(e){var n=e.api;(0,r.default)(this,t),this.CSS={button:"ce-settings__button",wrapper:"ce-tune-move-down",animation:"wobble"},this.api=n}return(0,i.default)(t,[{key:"render",value:function(){var t=this,e=a.default.make("div",[this.CSS.button,this.CSS.wrapper],{});return e.appendChild(a.default.svg("arrow-down",14,14)),this.api.listeners.on(e,"click",(function(n){return t.handleClick(n,e)}),!1),this.api.tooltip.onHover(e,this.api.i18n.t("Move down"),{hidingDelay:300}),e}},{key:"handleClick",value:function(t,e){var n=this,o=this.api.blocks.getCurrentBlockIndex(),r=this.api.blocks.getBlockByIndex(o+1);if(!r)return e.classList.add(this.CSS.animation),void window.setTimeout((function(){e.classList.remove(n.CSS.animation)}),500);var i=r.holder,a=i.getBoundingClientRect(),s=Math.abs(window.innerHeight-i.offsetHeight);a.top<window.innerHeight&&(s=window.scrollY+i.offsetHeight),window.scrollTo(0,s),this.api.blocks.move(o+1),this.api.toolbar.toggleBlockSettings(!0),this.api.tooltip.hide()}}]),t}();o.default=l,l.displayName="MoveDownTune",l.isTune=!0,t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(14)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var l=function(){function t(e){var n=this,o=e.api;(0,r.default)(this,t),this.CSS={button:"ce-settings__button",buttonDelete:"ce-settings__button--delete",buttonConfirm:"ce-settings__button--confirm"},this.nodes={button:null},this.api=o,this.resetConfirmation=function(){n.setConfirmation(!1)}}return(0,i.default)(t,[{key:"render",value:function(){var t=this;return this.nodes.button=a.default.make("div",[this.CSS.button,this.CSS.buttonDelete],{}),this.nodes.button.appendChild(a.default.svg("cross",12,12)),this.api.listeners.on(this.nodes.button,"click",(function(e){return t.handleClick(e)}),!1),this.api.tooltip.onHover(this.nodes.button,this.api.i18n.t("Delete"),{hidingDelay:300}),this.nodes.button}},{key:"handleClick",value:function(t){this.needConfirmation?(this.api.events.off("block-settings-closed",this.resetConfirmation),this.api.blocks.delete(),this.api.toolbar.close(),this.api.tooltip.hide(),t.stopPropagation()):(this.setConfirmation(!0),this.api.events.on("block-settings-closed",this.resetConfirmation))}},{key:"setConfirmation",value:function(t){this.needConfirmation=t,this.nodes.button.classList.add(this.CSS.buttonConfirm)}}]),t}();o.default=l,l.displayName="DeleteTune",l.isTune=!0,t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){var o,r,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[e,n(2),n(3),n(14)],void 0===(i="function"==typeof(o=function(o,r,i,a){"use strict";var s=n(1);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,r=s(r),i=s(i),a=s(a);var l=function(){function t(e){var n=e.api;(0,r.default)(this,t),this.CSS={button:"ce-settings__button",wrapper:"ce-tune-move-up",animation:"wobble"},this.api=n}return(0,i.default)(t,[{key:"render",value:function(){var t=this,e=a.default.make("div",[this.CSS.button,this.CSS.wrapper],{});return e.appendChild(a.default.svg("arrow-up",14,14)),this.api.listeners.on(e,"click",(function(n){return t.handleClick(n,e)}),!1),this.api.tooltip.onHover(e,this.api.i18n.t("Move up"),{hidingDelay:300}),e}},{key:"handleClick",value:function(t,e){var n=this,o=this.api.blocks.getCurrentBlockIndex(),r=this.api.blocks.getBlockByIndex(o),i=this.api.blocks.getBlockByIndex(o-1);if(0===o||!r||!i)return e.classList.add(this.CSS.animation),void window.setTimeout((function(){e.classList.remove(n.CSS.animation)}),500);var a,s=r.holder,l=i.holder,c=s.getBoundingClientRect(),u=l.getBoundingClientRect();a=u.top>0?Math.abs(c.top)-Math.abs(u.top):window.innerHeight-Math.abs(c.top)+Math.abs(u.top),window.scrollBy(0,-1*a),this.api.blocks.move(o-1),this.api.toolbar.toggleBlockSettings(!0),this.api.tooltip.hide()}}]),t}();o.default=l,l.displayName="MoveUpTune",l.isTune=!0,t.exports=e.default})?o.apply(e,r):o)||(t.exports=i)},function(t,e,n){"use strict";n.r(e),e.default='<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns="http://www.w3.org/2000/svg">\n<symbol id="arrow-down" viewBox="0 0 14 14">\n  <path transform="matrix(1 0 0 -1 0 14)" d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="arrow-up" viewBox="0 0 14 14">\n    <path d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="bold" viewBox="0 0 12 14"><path d="M5.997 14H1.72c-.618 0-1.058-.138-1.323-.415C.132 13.308 0 12.867 0 12.262V1.738C0 1.121.135.676.406.406.676.136 1.114 0 1.719 0h4.536c.669 0 1.248.041 1.738.124.49.083.93.242 1.318.478a3.458 3.458 0 0 1 1.461 1.752c.134.366.2.753.2 1.16 0 1.401-.7 2.426-2.1 3.075 1.84.586 2.76 1.726 2.76 3.42 0 .782-.2 1.487-.602 2.114a3.61 3.61 0 0 1-1.623 1.39 5.772 5.772 0 0 1-1.471.377c-.554.073-1.2.11-1.939.11zm-.21-6.217h-2.95v4.087h3.046c1.916 0 2.874-.69 2.874-2.072 0-.707-.248-1.22-.745-1.537-.496-.319-1.238-.478-2.225-.478zM2.837 2.13v3.619h2.597c.707 0 1.252-.067 1.638-.2.385-.134.68-.389.883-.765.16-.267.239-.566.239-.897 0-.707-.252-1.176-.755-1.409-.503-.232-1.27-.348-2.301-.348H2.836z"/>\n</symbol>\n<symbol id="cross" viewBox="0 0 237 237">\n  <path transform="rotate(45 280.675 51.325)" d="M191 191V73c0-5.523 4.477-10 10-10h25c5.523 0 10 4.477 10 10v118h118c5.523 0 10 4.477 10 10v25c0 5.523-4.477 10-10 10H236v118c0 5.523-4.477 10-10 10h-25c-5.523 0-10-4.477-10-10V236H73c-5.523 0-10-4.477-10-10v-25c0-5.523 4.477-10 10-10h118z"/>\n\n</symbol>\n<symbol id="dots" viewBox="0 0 16 16">\n  <g transform="translate(4 1.5)" fill-rule="evenodd">\n    <circle cx="1.3" cy="1.3" r="1.3"/>\n    <circle cx="6.5" cy="1.3" r="1.3"/>\n    <circle cx="6.5" cy="6.5" r="1.3"/>\n    <circle cx="1.3" cy="6.5" r="1.3"/>\n    <circle cx="6.5" cy="11.7" r="1.3"/>\n    <circle cx="1.3" cy="11.7" r="1.3"/>\n  </g>\n\n</symbol>\n<symbol id="italic" viewBox="0 0 4 11">\n    <path d="M3.289 4.17L2.164 9.713c-.078.384-.238.674-.48.87-.243.198-.52.296-.831.296-.312 0-.545-.1-.699-.302-.153-.202-.192-.49-.116-.864L1.15 4.225c.077-.38.232-.665.466-.857a1.25 1.25 0 01.818-.288c.312 0 .55.096.713.288.163.192.21.46.141.801zm-.667-2.09c-.295 0-.53-.09-.706-.273-.176-.181-.233-.439-.173-.77.055-.302.207-.55.457-.745C2.45.097 2.716 0 3 0c.273 0 .5.088.68.265.179.176.238.434.177.771-.06.327-.21.583-.45.767-.24.185-.502.277-.785.277z"/>\n\n</symbol>\n<symbol id="link" viewBox="0 0 14 10">\n  <path d="M6 0v2H5a3 3 0 000 6h1v2H5A5 5 0 115 0h1zm2 0h1a5 5 0 110 10H8V8h1a3 3 0 000-6H8V0zM5 4h4a1 1 0 110 2H5a1 1 0 110-2z"/>\n\n</symbol>\n<symbol id="plus" viewBox="0 0 16 16">\n  <g transform="translate(1 1.5)" fill-rule="evenodd">\n    <rect x="6" width="2" height="13" rx="1"/>\n    <rect x=".5" y="5.5" width="13" height="2" rx="1"/>\n  </g>\n\n</symbol>\n<symbol id="sad-face" viewBox="0 0 52 52">\n    <path fill="#D76B6B" fill-rule="nonzero" d="M26 52C11.64 52 0 40.36 0 26S11.64 0 26 0s26 11.64 26 26-11.64 26-26 26zm0-3.25c12.564 0 22.75-10.186 22.75-22.75S38.564 3.25 26 3.25 3.25 13.436 3.25 26 13.436 48.75 26 48.75zM15.708 33.042a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm23.834 0a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm-15.875 5.452a1.083 1.083 0 1 1-1.834-1.155c1.331-2.114 3.49-3.179 6.334-3.179 2.844 0 5.002 1.065 6.333 3.18a1.083 1.083 0 1 1-1.833 1.154c-.913-1.45-2.366-2.167-4.5-2.167s-3.587.717-4.5 2.167z"/>\n\n</symbol>\n<symbol id="search" viewBox="0 0 16 16">\n  <path d="M12.711 2.18a7.448 7.448 0 0 1 .79 9.603l2.143 2.144a1.214 1.214 0 1 1-1.717 1.717L11.783 13.5a7.446 7.446 0 1 1 .928-11.32ZM11.39 3.61a5.5 5.5 0 1 0-7.778 7.78 5.5 5.5 0 0 0 7.778-7.78Z" fill-rule="evenodd"/>\n\n</symbol>\n<symbol id="toggler-down">\n  <path d="M6.5 9.294a.792.792 0 01-.562-.232L2.233 5.356a.794.794 0 011.123-1.123L6.5 7.377l3.144-3.144a.794.794 0 011.123 1.123L7.062 9.062a.792.792 0 01-.562.232z"/>\n\n</symbol>\n<symbol id="unlink" viewBox="0 0 15 11">\n  <path d="M13.073 2.099l-1.448 1.448A3 3 0 009 2H8V0h1c1.68 0 3.166.828 4.073 2.099zM6.929 4l-.879.879L7.172 6H5a1 1 0 110-2h1.929zM6 0v2H5a3 3 0 100 6h1v2H5A5 5 0 115 0h1zm6.414 7l2.122 2.121-1.415 1.415L11 8.414l-2.121 2.122L7.464 9.12 9.586 7 7.464 4.879 8.88 3.464 11 5.586l2.121-2.122 1.415 1.415L12.414 7z"/>\n\n</symbol></svg>'},function(t,e){t.exports='.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide,.codex-editor__redactor--hidden{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff "}@media (min-width:651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor__loader{position:relative;height:30vh}.codex-editor__loader:before{content:"";position:absolute;left:50%;top:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:50%;border:2px solid rgba(201,201,204,.48);border-top-color:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-animation:editor-loader-spin .8s linear infinite;animation:editor-loader-spin .8s linear infinite;will-change:transform}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:rgba(46,170,220,.2);border:1px solid transparent}.codex-editor svg{fill:currentColor;vertical-align:middle;max-height:100%}::-moz-selection{background-color:#d4ecff}::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}@-webkit-keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(-1*var(--window-scroll-offset));position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (max-width:650px){.ce-toolbar__plus{width:36px;height:36px}}@media (hover:hover){.ce-toolbar__plus:hover{background-color:#eff2f5}}.ce-toolbar__plus{-ms-flex-negative:0;flex-shrink:0}.ce-toolbar__plus--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}@media (max-width:650px){.ce-toolbar__plus{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}}@media (max-width:650px) and (max-width:650px){.ce-toolbar__plus{-webkit-box-shadow:0 8px 6px -6px rgba(33,48,73,.19);box-shadow:0 8px 6px -6px rgba(33,48,73,.19);border-bottom-color:#c7c7c7}}@media (max-width:650px){.ce-toolbar__plus{position:static}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:5px}.ce-toolbar__actions--opened{opacity:1}@media (max-width:650px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media (max-width:650px){.ce-toolbar__settings-btn{width:36px;height:36px}}@media (hover:hover){.ce-toolbar__settings-btn:hover{background-color:#eff2f5}}.ce-toolbar__settings-btn{margin-left:5px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-toolbar__settings-btn--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (min-width:651px){.ce-toolbar__settings-btn{width:18px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width:650px){.ce-toolbar__settings-btn{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}}@media (max-width:650px) and (max-width:650px){.ce-toolbar__settings-btn{-webkit-box-shadow:0 8px 6px -6px rgba(33,48,73,.19);box-shadow:0 8px 6px -6px rgba(33,48,73,.19);border-bottom-color:#c7c7c7}}@media (max-width:650px){.ce-toolbar__settings-btn{position:static}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}.ce-toolbox{--gap:8px}@media (min-width:651px){.ce-toolbox{position:absolute;top:calc(26px + var(--gap));left:0}.ce-toolbox--opened-top{top:calc(-1*(var(--gap) + var(--popover-height)))}}@media (min-width:651px){.codex-editor--narrow .ce-toolbox{left:auto;right:0}.codex-editor--narrow .ce-toolbox .ce-popover{right:0}}.ce-inline-toolbar{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}@media (max-width:650px){.ce-inline-toolbar{-webkit-box-shadow:0 8px 6px -6px rgba(33,48,73,.19);box-shadow:0 8px 6px -6px rgba(33,48,73,.19);border-bottom-color:#c7c7c7}}.ce-inline-toolbar{-webkit-transform:translateX(-50%) translateY(8px) scale(.9);transform:translateX(-50%) translateY(8px) scale(.9);opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease,-webkit-transform .15s ease;transition:opacity .25s ease,-webkit-transform .15s ease;transition:transform .15s ease,opacity .25s ease;transition:transform .15s ease,opacity .25s ease,-webkit-transform .15s ease;will-change:transform,opacity;top:0;left:0;z-index:3}.ce-inline-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-inline-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-inline-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.ce-inline-toolbar--left-oriented{-webkit-transform:translateX(-23px) translateY(8px) scale(.9);transform:translateX(-23px) translateY(8px) scale(.9)}.ce-inline-toolbar--left-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-23px);transform:translateX(-23px)}.ce-inline-toolbar--right-oriented{-webkit-transform:translateX(-100%) translateY(8px) scale(.9);transform:translateX(-100%) translateY(8px) scale(.9);margin-left:23px}.ce-inline-toolbar--right-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{width:100%;padding:0 6px}.ce-inline-toolbar__buttons,.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:34px;padding:0 9px 0 10px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48)}.ce-inline-toolbar__dropdown:hover{background:#eff2f5}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content{display:-webkit-box;display:-ms-flexbox;display:flex;font-weight:500;font-size:14px}.ce-inline-toolbar__dropdown-content svg{height:12px}.ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:4px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.ce-inline-tool:hover{background-color:#eff2f5}.ce-inline-tool{border-radius:0;line-height:normal;width:auto;padding:0 5px!important;min-width:24px}.ce-inline-tool--active{color:#388ae5}.ce-inline-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-inline-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-inline-tool:not(:last-of-type){margin-right:2px}.ce-inline-tool .icon{height:12px}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{outline:none;border:0;border-radius:0 0 4px 4px;margin:0;font-size:13px;padding:10px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;border-top:1px solid rgba(201,201,204,.48)}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-conversion-toolbar{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}@media (max-width:650px){.ce-conversion-toolbar{-webkit-box-shadow:0 8px 6px -6px rgba(33,48,73,.19);box-shadow:0 8px 6px -6px rgba(33,48,73,.19);border-bottom-color:#c7c7c7}}.ce-conversion-toolbar{opacity:0;visibility:hidden;will-change:transform,opacity;-webkit-transition:opacity .1s ease,-webkit-transform .1s ease;transition:opacity .1s ease,-webkit-transform .1s ease;transition:transform .1s ease,opacity .1s ease;transition:transform .1s ease,opacity .1s ease,-webkit-transform .1s ease;-webkit-transform:translateY(-8px);transform:translateY(-8px);left:-1px;width:150px;margin-top:5px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-conversion-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-conversion-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-conversion-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:none;transform:none}.ce-conversion-toolbar [hidden]{display:none!important}.ce-conversion-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-conversion-toolbar__label{color:#707684;font-size:11px;font-weight:500;letter-spacing:.33px;padding:10px 10px 5px;text-transform:uppercase}.ce-conversion-tool{display:-webkit-box;display:-ms-flexbox;display:flex;padding:5px 10px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-conversion-tool--hidden{display:none}.ce-conversion-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-conversion-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-conversion-tool:hover{background:#eff2f5}.ce-conversion-tool__icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:20px;height:20px;border:1px solid rgba(201,201,204,.48);border-radius:3px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:10px;background:#fff}.ce-conversion-tool__icon svg{width:11px;height:11px}.ce-conversion-tool--last{margin-right:0!important}.ce-conversion-tool--active{color:#388ae5!important;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-settings{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}@media (max-width:650px){.ce-settings{-webkit-box-shadow:0 8px 6px -6px rgba(33,48,73,.19);box-shadow:0 8px 6px -6px rgba(33,48,73,.19);border-bottom-color:#c7c7c7}}.ce-settings{top:34px;left:0;min-width:114px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-settings--left-oriented:before{left:15px;margin-left:0}.ce-settings--right-oriented:before{left:auto;right:15px;margin-left:0}@media (max-width:650px){.ce-settings{bottom:40px;right:auto;top:auto}}.ce-settings:before{left:auto;right:12px}@media (max-width:650px){.ce-settings:before{bottom:-5px;top:auto}}.ce-settings{display:none}.ce-settings--opened{display:block;-webkit-animation-duration:.1s;animation-duration:.1s;-webkit-animation-name:panelShowing;animation-name:panelShowing}.ce-settings__plugin-zone:not(:empty){padding:3px 3px 0}.ce-settings__default-zone:not(:empty){padding:3px}.ce-settings__button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.ce-settings__button:hover{background-color:#eff2f5}.ce-settings__button--active{color:#388ae5}.ce-settings__button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-settings__button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-settings__button:not(:nth-child(3n+3)){margin-right:3px}.ce-settings__button:nth-child(n+4){margin-top:3px}.ce-settings__button{line-height:32px}.ce-settings__button--disabled{cursor:not-allowed!important;opacity:.3}.ce-settings__button--selected{color:#388ae5}.ce-settings__button--delete{-webkit-transition:background-color .3s ease;transition:background-color .3s ease;will-change:background-color}.ce-settings__button--delete .icon{-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;will-change:transform}.ce-settings__button--confirm{background-color:#e24a4a!important;color:#fff}.ce-settings__button--confirm:hover{background-color:#d54a4a!important}.ce-settings__button--confirm .icon{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease;-webkit-animation-fill-mode:none;-webkit-animation-fill-mode:initial;animation-fill-mode:none}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content .ce-stub,.ce-block--selected .ce-block__content img{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388ae5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388ae5,#388ae5 1px,#fff 0,#fff 6px)}.ce-block a{cursor:pointer;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@media (min-width:651px){.codex-editor--narrow .ce-block--focused{margin-right:-50px;padding-right:50px}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important;display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.cdx-settings-button:hover{background-color:#eff2f5}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button:not(:nth-child(3n+3)){margin-right:3px}.cdx-settings-button:nth-child(n+4){margin-top:3px}.cdx-settings-button--active{color:#388ae5}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s linear infinite;animation:cdxRotation 1.2s linear infinite}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px 0 rgba(18,30,57,.04);color:#707684;text-align:center;cursor:pointer}.cdx-button:hover{background:#fbfcfe;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px 0 rgba(18,30,57,.08)}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:3.5em 0;margin:17px 0;border-radius:3px;background:#fcf7f7;color:#b46262}.ce-stub__info{margin-left:20px}.ce-stub__title{margin-bottom:3px;font-weight:600;font-size:18px;text-transform:capitalize}.ce-stub__subtitle{font-size:16px}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width:650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0 solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0;right:5px}}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.ce-popover{opacity:0;will-change:opacity,transform;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:6px;min-width:200px;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0;max-height:0;position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}@media (max-width:650px){.ce-popover{-webkit-box-shadow:0 8px 6px -6px rgba(33,48,73,.19);box-shadow:0 8px 6px -6px rgba(33,48,73,.19);border-bottom-color:#c7c7c7}}.ce-popover{z-index:4;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.ce-popover--left-oriented:before{left:15px;margin-left:0}.ce-popover--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-popover--opened{opacity:1;max-height:270px;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease}@media (max-width:650px){.ce-popover--opened{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}.ce-popover::-webkit-scrollbar{width:7px}.ce-popover::-webkit-scrollbar-thumb{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:inset 0 0 2px 2px #eff2f5;box-shadow:inset 0 0 2px 2px #eff2f5;border-color:transparent;border-style:solid;border-width:4px 3px 4px 0}@media (max-width:650px){.ce-popover{position:fixed;max-width:none;min-width:auto;left:5px;right:5px;bottom:calc(5px + env(safe-area-inset-bottom));top:auto;border-radius:10px}}.ce-popover__items{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain}@media (min-width:651px){.ce-popover__items{margin-top:5px}}.ce-popover__item{display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;white-space:nowrap;padding:3px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:6px}.ce-popover__item:not(:last-of-type){margin-bottom:1px}@media (hover:hover){.ce-popover__item:hover{background-color:#eff2f5}}@media (max-width:650px){.ce-popover__item{font-size:16px;padding:4px}}.ce-popover__item--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-popover__item--hidden{display:none}.ce-popover__item-icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:26px;height:26px;border:1px solid rgba(201,201,204,.48);border-radius:5px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0;margin-right:10px}@media (max-width:650px){.ce-popover__item-icon{width:36px;height:36px;border-radius:8px}}.ce-popover__item-icon svg{width:12px;height:12px}.ce-popover__item-label:after{content:"";width:25px;display:inline-block}.ce-popover__item-secondary-label{color:#707684;font-size:12px;margin-left:auto;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;margin-bottom:-2px;opacity:.6}@media (max-width:650px){.ce-popover__item-secondary-label{display:none}}.ce-popover__no-found{display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;white-space:nowrap;padding:3px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:6px}.ce-popover__no-found:not(:last-of-type){margin-bottom:1px}@media (hover:hover){.ce-popover__no-found:hover{background-color:#eff2f5}}@media (max-width:650px){.ce-popover__no-found{font-size:16px;padding:4px}}.ce-popover__no-found{color:#707684;display:none;cursor:default}.ce-popover__no-found--shown{display:block}.ce-popover__no-found:hover{background-color:transparent}@media (max-width:650px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#1d202b;opacity:.5;z-index:3;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}.ce-popover .cdx-search-field{display:none}}.ce-popover__overlay--hidden{z-index:0;opacity:0;visibility:hidden}.cdx-search-field{--icon-margin-right:10px;background:rgba(232,232,235,.49);border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon .icon{width:14px;height:14px;color:#707684;-ms-flex-negative:0;flex-shrink:0}.cdx-search-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::placeholder{color:#707684;font-weight:500}'},function(t,e,n){"use strict";n.r(e),n.d(e,"nanoid",(function(){return s})),n.d(e,"customAlphabet",(function(){return a})),n.d(e,"customRandom",(function(){return i})),n.d(e,"urlAlphabet",(function(){return o})),n.d(e,"random",(function(){return r}));let o="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let r=t=>crypto.getRandomValues(new Uint8Array(t)),i=(t,e,n)=>{let o=(2<<Math.log(t.length-1)/Math.LN2)-1,r=-~(1.6*o*e/t.length);return()=>{let i="";for(;;){let a=n(r),s=r;for(;s--;)if(i+=t[a[s]&o]||"",i.length===e)return i}}},a=(t,e)=>i(t,e,r),s=(t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;){let o=63&n[t];e+=o<36?o.toString(36):o<62?(o-26).toString(36).toUpperCase():o<63?"_":"-"}return e}}])}));

/***/ }),

/***/ "./node_modules/@editorjs/header/dist/bundle.js":
/*!******************************************************!*\
  !*** ./node_modules/@editorjs/header/dist/bundle.js ***!
  \******************************************************/
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n(1).toString();
/**
 * Header block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license MIT
 * @version 2.0.0
 */
var a=function(){function e(t){var n=t.data,r=t.config,i=t.api,a=t.readOnly;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=i,this.readOnly=a,this._CSS={block:this.api.styles.block,settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive,wrapper:"ce-header"},this._settings=r,this._data=this.normalizeData(n),this.settingsButtons=[],this._element=this.getTag()}var t,a,o;return t=e,o=[{key:"conversionConfig",get:function(){return{export:"text",import:"text"}}},{key:"sanitize",get:function(){return{level:!1,text:{}}}},{key:"isReadOnlySupported",get:function(){return!0}},{key:"pasteConfig",get:function(){return{tags:["H1","H2","H3","H4","H5","H6"]}}},{key:"toolbox",get:function(){return{icon:n(6).default,title:"Heading"}}}],(a=[{key:"normalizeData",value:function(e){var t={};return"object"!==r(e)&&(e={}),t.text=e.text||"",t.level=parseInt(e.level)||this.defaultLevel.number,t}},{key:"render",value:function(){return this._element}},{key:"renderSettings",value:function(){var e=this,t=document.createElement("DIV");return this.levels.length<=1||this.levels.forEach((function(n){var r=document.createElement("SPAN");r.classList.add(e._CSS.settingsButton),e.currentLevel.number===n.number&&r.classList.add(e._CSS.settingsButtonActive),r.innerHTML=n.svg,r.dataset.level=n.number,r.addEventListener("click",(function(){e.setLevel(n.number)})),t.appendChild(r),e.settingsButtons.push(r)})),t}},{key:"setLevel",value:function(e){var t=this;this.data={level:e,text:this.data.text},this.settingsButtons.forEach((function(n){n.classList.toggle(t._CSS.settingsButtonActive,parseInt(n.dataset.level)===e)}))}},{key:"merge",value:function(e){var t={text:this.data.text+e.text,level:this.data.level};this.data=t}},{key:"validate",value:function(e){return""!==e.text.trim()}},{key:"save",value:function(e){return{text:e.innerHTML,level:this.currentLevel.number}}},{key:"getTag",value:function(){var e=document.createElement(this.currentLevel.tag);return e.innerHTML=this._data.text||"",e.classList.add(this._CSS.wrapper),e.contentEditable=this.readOnly?"false":"true",e.dataset.placeholder=this.api.i18n.t(this._settings.placeholder||""),e}},{key:"onPaste",value:function(e){var t=e.detail.data,n=this.defaultLevel.number;switch(t.tagName){case"H1":n=1;break;case"H2":n=2;break;case"H3":n=3;break;case"H4":n=4;break;case"H5":n=5;break;case"H6":n=6}this._settings.levels&&(n=this._settings.levels.reduce((function(e,t){return Math.abs(t-n)<Math.abs(e-n)?t:e}))),this.data={level:n,text:t.innerHTML}}},{key:"data",get:function(){return this._data.text=this._element.innerHTML,this._data.level=this.currentLevel.number,this._data},set:function(e){if(this._data=this.normalizeData(e),void 0!==e.level&&this._element.parentNode){var t=this.getTag();t.innerHTML=this._element.innerHTML,this._element.parentNode.replaceChild(t,this._element),this._element=t}void 0!==e.text&&(this._element.innerHTML=this._data.text||"")}},{key:"currentLevel",get:function(){var e=this,t=this.levels.find((function(t){return t.number===e._data.level}));return t||(t=this.defaultLevel),t}},{key:"defaultLevel",get:function(){var e=this;if(this._settings.defaultLevel){var t=this.levels.find((function(t){return t.number===e._settings.defaultLevel}));if(t)return t;console.warn("(???'??-'??)??? Heading Tool: the default level specified was not found in available levels")}return this.levels[1]}},{key:"levels",get:function(){var e=this,t=[{number:1,tag:"H1",svg:'<svg width="16" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.14 1.494V4.98h4.62V1.494c0-.498.098-.871.293-1.12A.927.927 0 0 1 7.82 0c.322 0 .583.123.782.37.2.246.3.62.3 1.124v9.588c0 .503-.101.88-.303 1.128a.957.957 0 0 1-.779.374.921.921 0 0 1-.77-.378c-.193-.251-.29-.626-.29-1.124V6.989H2.14v4.093c0 .503-.1.88-.302 1.128a.957.957 0 0 1-.778.374.921.921 0 0 1-.772-.378C.096 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.285.374A.922.922 0 0 1 1.06 0c.321 0 .582.123.782.37.199.246.299.62.299 1.124zm11.653 9.985V5.27c-1.279.887-2.14 1.33-2.583 1.33a.802.802 0 0 1-.563-.228.703.703 0 0 1-.245-.529c0-.232.08-.402.241-.511.161-.11.446-.25.854-.424.61-.259 1.096-.532 1.462-.818a5.84 5.84 0 0 0 .97-.962c.282-.355.466-.573.552-.655.085-.082.246-.123.483-.123.267 0 .481.093.642.28.161.186.242.443.242.77v7.813c0 .914-.345 1.371-1.035 1.371-.307 0-.554-.093-.74-.28-.187-.186-.28-.461-.28-.825z"/></svg>'},{number:2,tag:"H2",svg:'<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm10.99 9.288h3.527c.351 0 .62.072.804.216.185.144.277.34.277.588 0 .22-.073.408-.22.56-.146.154-.368.23-.665.23h-4.972c-.338 0-.601-.093-.79-.28a.896.896 0 0 1-.284-.659c0-.162.06-.377.182-.645s.255-.478.399-.631a38.617 38.617 0 0 1 1.621-1.598c.482-.444.827-.735 1.034-.875.369-.261.676-.523.922-.787.245-.263.432-.534.56-.81.129-.278.193-.549.193-.815 0-.288-.069-.546-.206-.773a1.428 1.428 0 0 0-.56-.53 1.618 1.618 0 0 0-.774-.19c-.59 0-1.054.26-1.392.777-.045.068-.12.252-.226.554-.106.302-.225.534-.358.696-.133.162-.328.243-.585.243a.76.76 0 0 1-.56-.223c-.149-.148-.223-.351-.223-.608 0-.31.07-.635.21-.972.139-.338.347-.645.624-.92a3.093 3.093 0 0 1 1.054-.665c.426-.169.924-.253 1.496-.253.69 0 1.277.108 1.764.324.315.144.592.343.83.595.24.252.425.544.558.875.133.33.2.674.2 1.03 0 .558-.14 1.066-.416 1.523-.277.457-.56.815-.848 1.074-.288.26-.771.666-1.45 1.22-.677.554-1.142.984-1.394 1.29a3.836 3.836 0 0 0-.331.44z"/></svg>'},{number:3,tag:"H3",svg:'<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm11.61 4.919c.418 0 .778-.123 1.08-.368.301-.245.452-.597.452-1.055 0-.35-.12-.65-.36-.902-.241-.252-.566-.378-.974-.378-.277 0-.505.038-.684.116a1.1 1.1 0 0 0-.426.306 2.31 2.31 0 0 0-.296.49c-.093.2-.178.388-.255.565a.479.479 0 0 1-.245.225.965.965 0 0 1-.409.081.706.706 0 0 1-.5-.22c-.152-.148-.228-.345-.228-.59 0-.236.071-.484.214-.745a2.72 2.72 0 0 1 .627-.746 3.149 3.149 0 0 1 1.024-.568 4.122 4.122 0 0 1 1.368-.214c.44 0 .842.06 1.205.18.364.12.679.294.947.52.267.228.47.49.606.79.136.3.204.622.204.967 0 .454-.099.843-.296 1.168-.198.324-.48.64-.848.95.354.19.653.408.895.653.243.245.426.516.548.813.123.298.184.619.184.964 0 .413-.083.812-.248 1.198-.166.386-.41.73-.732 1.031a3.49 3.49 0 0 1-1.147.708c-.443.17-.932.256-1.467.256a3.512 3.512 0 0 1-1.464-.293 3.332 3.332 0 0 1-1.699-1.64c-.142-.314-.214-.573-.214-.777 0-.263.085-.475.255-.636a.89.89 0 0 1 .637-.242c.127 0 .25.037.367.112a.53.53 0 0 1 .232.27c.236.63.489 1.099.759 1.405.27.306.65.46 1.14.46a1.714 1.714 0 0 0 1.46-.824c.17-.273.256-.588.256-.947 0-.53-.145-.947-.436-1.249-.29-.302-.694-.453-1.212-.453-.09 0-.231.01-.422.028-.19.018-.313.027-.367.027-.25 0-.443-.062-.579-.187-.136-.125-.204-.299-.204-.521 0-.218.081-.394.245-.528.163-.134.406-.2.728-.2h.28z"/></svg>'},{number:4,tag:"H4",svg:'<svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm13.003 10.09v-1.252h-3.38c-.427 0-.746-.097-.96-.29-.213-.193-.32-.456-.32-.788 0-.085.016-.171.048-.259.031-.088.078-.18.141-.276.063-.097.128-.19.195-.28.068-.09.15-.2.25-.33l3.568-4.774a5.44 5.44 0 0 1 .576-.683.763.763 0 0 1 .542-.212c.682 0 1.023.39 1.023 1.171v5.212h.29c.346 0 .623.047.832.142.208.094.313.3.313.62 0 .26-.086.45-.256.568-.17.12-.427.179-.768.179h-.41v1.252c0 .346-.077.603-.23.771-.152.168-.356.253-.612.253a.78.78 0 0 1-.61-.26c-.154-.173-.232-.427-.232-.764zm-2.895-2.76h2.895V4.91L12.26 8.823z"/></svg>'},{number:5,tag:"H5",svg:'<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm14.16 2.645h-3.234l-.388 2.205c.644-.344 1.239-.517 1.783-.517.436 0 .843.082 1.222.245.38.164.712.39.998.677.286.289.51.63.674 1.025.163.395.245.82.245 1.273 0 .658-.148 1.257-.443 1.797-.295.54-.72.97-1.276 1.287-.556.318-1.197.477-1.923.477-.813 0-1.472-.15-1.978-.45-.506-.3-.865-.643-1.076-1.031-.21-.388-.316-.727-.316-1.018 0-.177.073-.345.22-.504a.725.725 0 0 1 .556-.238c.381 0 .665.22.85.66.182.404.427.719.736.943.309.225.654.337 1.035.337.35 0 .656-.09.919-.272.263-.182.466-.431.61-.749.142-.318.214-.678.214-1.082 0-.436-.078-.808-.232-1.117a1.607 1.607 0 0 0-.62-.69 1.674 1.674 0 0 0-.864-.229c-.39 0-.67.048-.837.143-.168.095-.41.262-.725.5-.316.239-.576.358-.78.358a.843.843 0 0 1-.592-.242c-.173-.16-.259-.344-.259-.548 0-.022.025-.177.075-.463l.572-3.26c.063-.39.181-.675.354-.852.172-.177.454-.265.844-.265h3.595c.708 0 1.062.27 1.062.81a.711.711 0 0 1-.26.572c-.172.145-.426.218-.762.218z"/></svg>'},{number:6,tag:"H6",svg:'<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zM12.53 7.058a3.093 3.093 0 0 1 1.004-.814 2.734 2.734 0 0 1 1.214-.264c.43 0 .827.08 1.19.24.365.161.684.39.957.686.274.296.485.645.635 1.048a3.6 3.6 0 0 1 .223 1.262c0 .637-.145 1.216-.437 1.736-.292.52-.699.926-1.221 1.218-.522.292-1.114.438-1.774.438-.76 0-1.416-.186-1.967-.557-.552-.37-.974-.919-1.265-1.645-.292-.726-.438-1.613-.438-2.662 0-.855.088-1.62.265-2.293.176-.674.43-1.233.76-1.676.33-.443.73-.778 1.2-1.004.47-.226 1.006-.339 1.608-.339.579 0 1.089.113 1.53.34.44.225.773.506.997.84.224.335.335.656.335.964 0 .185-.07.354-.21.505a.698.698 0 0 1-.536.227.874.874 0 0 1-.529-.18 1.039 1.039 0 0 1-.36-.498 1.42 1.42 0 0 0-.495-.655 1.3 1.3 0 0 0-.786-.247c-.24 0-.479.069-.716.207a1.863 1.863 0 0 0-.6.56c-.33.479-.525 1.333-.584 2.563zm1.832 4.213c.456 0 .834-.186 1.133-.56.298-.373.447-.862.447-1.468 0-.412-.07-.766-.21-1.062a1.584 1.584 0 0 0-.577-.678 1.47 1.47 0 0 0-.807-.234c-.28 0-.548.074-.804.224-.255.149-.461.365-.617.647a2.024 2.024 0 0 0-.234.994c0 .61.158 1.12.475 1.527.316.407.714.61 1.194.61z"/></svg>'}];return this._settings.levels?t.filter((function(t){return e._settings.levels.includes(t.number)})):t}}])&&i(t.prototype,a),o&&i(t,o),e}();e.exports=a},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"/**\n * Plugin styles\n */\n.ce-header {\n  padding: 0.6em 0 3px;\n  margin: 0;\n  line-height: 1.25em;\n  outline: none;\n}\n\n.ce-header p,\n.ce-header div{\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n/**\n * Styles for Plugin icon in Toolbar\n */\n.ce-header__icon {}\n\n.ce-header[contentEditable=true][data-placeholder]::before{\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  display: none;\n  cursor: text;\n}\n\n.ce-header[contentEditable=true][data-placeholder]:empty::before {\n  display: block;\n}\n\n.ce-header[contentEditable=true][data-placeholder]:empty:focus::before {\n  display: none;\n}\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),a=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(a).concat([i]).join("\n")}var o;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<e.length;i++){var o=e[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){var r,i,a={},o=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(e){return document.querySelector(e)},c=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=s.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),l=null,u=0,f=[],d=n(5);function h(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=a[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(y(r.parts[o],t))}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(y(r.parts[o],t));a[r.id]={id:r.id,refs:1,parts:s}}}}function v(e,t){for(var n=[],r={},i=0;i<e.length;i++){var a=e[i],o=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[o]?r[o].parts.push(s):n.push(r[o]={id:o,parts:[s]})}return n}function p(e,t){var n=c(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=c(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,i)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function m(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),b(t,e.attrs),p(e,t),t}function b(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function y(e,t){var n,r,i,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var o=u++;n=l||(l=m(t)),r=L.bind(null,n,o,!1),i=L.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),p(e,t),t}(t),r=_.bind(null,n,t),i=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),r=H.bind(null,n),i=function(){g(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=v(e,t);return h(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var o=n[i];(s=a[o.id]).refs--,r.push(s)}e&&h(v(e,t),t);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete a[s.id]}}}};var w,x=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function L(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,i);else{var a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function H(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function _(e,t,n){var r=n.css,i=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||a)&&(r=d(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var i,a=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(i=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}},function(e,t,n){"use strict";n.r(t),t.default='<svg width="10" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 14">\n  <path d="M7.6 8.15H2.25v4.525a1.125 1.125 0 0 1-2.25 0V1.125a1.125 1.125 0 1 1 2.25 0V5.9H7.6V1.125a1.125 1.125 0 0 1 2.25 0v11.55a1.125 1.125 0 0 1-2.25 0V8.15z"/>\n</svg>\n'}])}));

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.6.0",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						// Support: Chrome 86+
						// In Chrome, if an element having a focusout handler is blurred by
						// clicking outside of it, it invokes the handler synchronously. If
						// that handler calls `.remove()` on the element, the data is cleared,
						// leaving `result` undefined. We need to guard against this.
						return result && result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		// Suppress native focus or blur as it's already being fired
		// in leverageNative.
		_default: function() {
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./resources/js/editor.js ***!
  \********************************/
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// todo:???????????????????????????????????????????????????????????????
// import EditorJS from '@editorjs/editorjs';
// editor.js??????
var EditorJS = __webpack_require__(/*! @editorjs/editorjs */ "./node_modules/@editorjs/editorjs/dist/editor.js"); // ??????????????????????????????


var Header = __webpack_require__(/*! @editorjs/header */ "./node_modules/@editorjs/header/dist/bundle.js"); //
// editor.js?????????simpleImage??????????????????


var SimpleImage = /*#__PURE__*/function () {
  function SimpleImage() {
    _classCallCheck(this, SimpleImage);
  }

  _createClass(SimpleImage, [{
    key: "rendor",
    value: function rendor() {
      return document.createElement('input');
    }
  }, {
    key: "save",
    value: function save(blockContent) {
      return {
        url: blockContent.value
      };
    }
  }], [{
    key: "toolbox",
    get: function get() {
      return {
        title: 'image',
        icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>'
      };
    }
  }]);

  return SimpleImage;
}();
/**
 * editor.js
 */


$(function () {
  // ?????????https://qiita.com/yamachita0109/items/2c6c8fd1ef772f7be05b
  // ?????????????????????????????????
  // Quote?????????????????????????????????
  // class Box extends Quote {
  //   static get toolbox() {
  //     return {
  //       title: 'Box',
  //       icon: 'Box'
  //     };
  //   }
  // }
  var editor = new EditorJS({
    holder: 'editor',
    autofocus: true,
    placeholder: '???????????????',
    tools: {
      image: SimpleImage,
      header: {
        "class": Header,
        config: {
          placeholder: '????????????????????????',
          levels: [1, 2, 3, 4, 5, 6],
          defaultLevel: 2
        }
      } //   quote: Quote,
      //   box: Box,
      //   table: Table,
      //   image: {
      //     class: ImageTool,
      //     config: {
      //       endpoints: {
      //         byFile: '/byFile',
      //         byUrl: '/byUrl',
      //       },
      //       additionalRequestHeaders: {
      //         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      //       },
      //     }
      //   },
      //   Color: {
      //     class: ColorPlugin,
      //     config: {
      //       colorCollections: ['#000', '#FF1300', '#EC7878', '#9C27B0', '#673AB7', '#3F51B5', '#0070FF', '#03A9F4', '#00BCD4', '#4CAF50', '#8BC34A', '#CDDC39', '#FFF'],
      //       defaultColor: '#FF1300',
      //       type: 'text',
      //     }
      //   },

    },
    data: function () {
      // ????????????????????????
      var v = $('#content').val();
      return v ? JSON.parse(v) : '??????????????????';
    }(),
    onReady: function onReady() {
      // ??????????????????
      console.log('editor.js is ready!');
    },
    onChange: function onChange() {// ??????????????????
    }
  });
  $('#submit-btn').on('click', function () {
    editor.save().then(function (data) {
      $('#content').val(JSON.stringify(data));
      $('#form').submit();
    });
  });
});
})();

/******/ })()
;