!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){"use strict";r.r(t);var n=function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.type=t,this.src=r;var i=this;null!=n&&Object.keys(n).forEach((function(e){i.hasOwnProperty(e)||(i[e]=n[e])}))};function i(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,i)}var o=function(e){var t=e[0],r=e.splice(0,1)[0],n=r.callback||e[e.length-1],i=r.constraint||(e.length>2?e.splice(0,1).find((function(e){return e!==n&&"function"==typeof e})):void 0),o=r.scope;return{key:t||"",constraint:i,callback:n,thisScope:o}};function a(e){var t=this;e.key.split(" ").forEach((function(r){r in t.listeners||(t.listeners[r]=[]);var n={constraint:e.constraint,callback:e.callback,scope:e.thisScope,once:e.once};t.listeners[r].push(n)}))}var s=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)};s.injectInto=function(e){var t,r;Object.defineProperties(e,{listeners:{get:function(){return"_listeners"in this||Object.defineProperty(this,"_listeners",{value:{}}),this._listeners}},on:{value:function(){var e=o(Array.prototype.slice.call(arguments));return a.call(this,e),this},configurable:!0},once:{value:function(){var e=o(Array.prototype.slice.call(arguments));return e.once=!0,a.call(this,e),this},configurable:!0},off:{value:function(e,t){if(this.listeners[e]){if(this.listeners[e].length&&"function"==typeof t){var r=this.listeners[e].findIndex((function(e){return e.callback===t}));r>=0&&this.listeners[e].splice(r,1)}this.listeners[e].length&&null!=t||delete this.listeners[e]}return this},configurable:!0},trigger:{value:(t=regeneratorRuntime.mark((function e(t,r){var i,o,a,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=this,o="string"==typeof t?new n(t):t,a=[],s=(i.listeners[o.type]||[]).concat(i.listeners[""]).filter((function(e){return e&&(null==e.constraint||e.constraint.call(e.scope||i,t,r))})).map((function(e){return e.once&&i.off(o.type,e.callback),function(){try{var t=e.callback.call(e.scope||i,o,r||{});return Promise.resolve(t)}catch(t){return console.error("Executing listener failed",{error:t,event:o,listener:e.callback}),Promise.resolve(t)}}})),e.abrupt("return",s.reduce((function(e,t){return e.then(t).then((function(e){return a.push(e),e}))}),Promise.resolve()).then((function(){return a})));case 5:case"end":return e.stop()}}),e,this)})),r=function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function s(e){i(a,n,o,s,u,"next",e)}function u(e){i(a,n,o,s,u,"throw",e)}s(void 0)}))},function(e,t){return r.apply(this,arguments)}),configurable:!0}})},s.injectInto(s.prototype);var u=s;function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,i)}function p(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){h(o,n,i,a,s,"next",e)}function s(e){h(o,n,i,a,s,"throw",e)}a(void 0)}))}}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var y=function(){function e(t){var r=t.authenticationService,n=t.autoRefresh,i=void 0!==n&&n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._service=r,this._autoRefreshTimer=null,this._autoRefresh=i,this._setState()}var t,r,n,i,o,a;return t=e,(r=[{key:"login",value:(a=p(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._service.login(t,r);case 2:return n=e.sent,this._setState(n),this._checkAutoRefresh(),e.abrupt("return",this.trigger("login",f({},this.state)));case 6:case"end":return e.stop()}}),e,this)}))),function(e,t){return a.apply(this,arguments)})},{key:"refresh",value:(o=p(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._service.refresh(this.state.refreshToken);case 2:return t=e.sent,this._setState(t),this._checkAutoRefresh(),e.abrupt("return",this.trigger("refresh",f({},this.state)));case 6:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"logoff",value:(i=p(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f({},this.state),this._setState(),e.abrupt("return",this.trigger("logoff",t));case 3:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"_setState",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.state=e?f({},e,{expiresAt:new Date((new Date).getTime()+1e3*e.expiresIn),isAuthenticated:!0}):{isAuthenticated:!1}}},{key:"_checkAutoRefresh",value:function(){if(this._autoRefreshTimer&&clearTimeout(this._autoRefreshTimer),this._autoRefresh){var e=Math.abs(this.state.expiresAt-new Date)-6e4;this._autoRefreshTimer=setTimeout(this.refresh,e)}}},{key:"autoRefresh",get:function(){return this._autoRefresh},set:function(e){this._autoRefresh=!!e,this._checkAutoRefresh()}}])&&v(t.prototype,r),n&&v(t,n),e}();u.injectInto(y.prototype);t.default=y},function(e,t,r){"use strict";r.r(t),r.d(t,"IdentityManager",(function(){return n.default})),r.d(t,"DummyService",(function(){return s}));var n=r(0);function i(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,i)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function s(e){i(a,n,o,s,u,"next",e)}function u(e){i(a,n,o,s,u,"throw",e)}s(void 0)}))}}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),console.warn("This is a dummy-service")}var t,r,n,i,s,u;return t=e,(r=[{key:"login",value:(u=o(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.warn("Not implemented: login");case 1:case"end":return e.stop()}}),e)}))),function(e,t){return u.apply(this,arguments)})},{key:"refresh",value:(s=o(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.warn("Not implemented: refresh");case 1:case"end":return e.stop()}}),e)}))),function(e){return s.apply(this,arguments)})},{key:"resetPassword",value:(i=o(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.warn("Not implemented: resetPassword");case 1:case"end":return e.stop()}}),e)}))),function(e){return i.apply(this,arguments)})}])&&a(t.prototype,r),n&&a(t,n),e}();t.default={IdentityManager:n.default,DummyService:s}}])}));
//# sourceMappingURL=index.js.map