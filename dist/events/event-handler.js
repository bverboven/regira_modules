!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";n.r(t);t.default=function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.type=t,this.src=n;var i=this;null!=r&&Object.keys(r).forEach((function(e){i.hasOwnProperty(e)||(i[e]=r[e])}))}},function(e,t,n){"use strict";n.r(t);var r=n(0);function i(e,t,n,r,i,o,c){try{var s=e[o](c),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}var o=function(e){var t=e[0],n=e.splice(0,1)[0],r=n.callback||e[e.length-1],i=n.constraint||(e.length>2?e.splice(0,1).find((function(e){return e!==r&&"function"==typeof e})):void 0),o=n.scope;return{key:t||"",constraint:i,callback:r,thisScope:o}};function c(e){var t=this;e.key.split(" ").forEach((function(n){n in t.listeners||(t.listeners[n]=[]);var r={constraint:e.constraint,callback:e.callback,scope:e.thisScope,once:e.once};t.listeners[n].push(r)}))}var s=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)};s.injectInto=function(e){var t,n;Object.defineProperties(e,{listeners:{get:function(){return"_listeners"in this||Object.defineProperty(this,"_listeners",{value:{}}),this._listeners}},on:{value:function(){var e=o(Array.prototype.slice.call(arguments));return c.call(this,e),this},configurable:!0},once:{value:function(){var e=o(Array.prototype.slice.call(arguments));return e.once=!0,c.call(this,e),this},configurable:!0},off:{value:function(e,t){if(this.listeners[e]){if(this.listeners[e].length&&"function"==typeof t){var n=this.listeners[e].findIndex((function(e){return e.callback===t}));n>=0&&this.listeners[e].splice(n,1)}this.listeners[e].length&&null!=t||delete this.listeners[e]}return this},configurable:!0},trigger:{value:(t=regeneratorRuntime.mark((function e(t,n){var i,o,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=this,o="string"==typeof t?new r.default(t):t,c=[],s=(i.listeners[o.type]||[]).concat(i.listeners[""]).filter((function(e){return e&&(null==e.constraint||e.constraint.call(e.scope||i,t,n))})).map((function(e){return e.once&&i.off(o.type,e.callback),function(){try{var t=e.callback.call(e.scope||i,o,n||{});return Promise.resolve(t)}catch(t){return console.error("Executing listener failed",{error:t,event:o,listener:e.callback}),Promise.resolve(t)}}})),e.abrupt("return",s.reduce((function(e,t){return e.then(t).then((function(e){return c.push(e),e}))}),Promise.resolve()).then((function(){return c})));case 5:case"end":return e.stop()}}),e,this)})),n=function(){var e=this,n=arguments;return new Promise((function(r,o){var c=t.apply(e,n);function s(e){i(c,r,o,s,u,"next",e)}function u(e){i(c,r,o,s,u,"throw",e)}s(void 0)}))},function(e,t){return n.apply(this,arguments)}),configurable:!0}})},s.injectInto(s.prototype),t.default=s}])}));
//# sourceMappingURL=event-handler.js.map