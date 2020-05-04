!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("axios"));else if("function"==typeof define&&define.amd)define(["axios"],t);else{var r="object"==typeof exports?t(require("axios")):t(e.axios);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n);function u(e,t,r,n,o,u,i){try{var c=e[u](i),a=c.value}catch(e){return void r(e)}c.done?t(a):Promise.resolve(a).then(n,o)}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){var t="function"==typeof Map?new Map:void 0;return(a=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return f(e,arguments,l(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),p(n,e)})(e)}function f(e,t,r){return(f=s()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&p(o,r.prototype),o}).apply(null,arguments)}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(n,e);var t,r=(t=n,function(){var e,r=l(t);if(s()){var n=l(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return c(this,e)});function n(e,t){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(o=r.call(this,"".concat(e," (").concat(t,")"))).code=t,o}return n}(a(Error)),y=function(e){var t=e.status;if(t<200||t>=400){var r=e.data&&e.data.error?e.data.error.message:e.statusText;throw console.error("Firebase Error",t,{message:r,response:e}),new d(r,t)}},v=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,r,n){var u,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u={url:t,method:r},void 0!==n&&(u.data=n),e.next=4,o()(u);case 4:return i=e.sent,y(i),e.abrupt("return",i.data);case 7:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function c(e){u(i,n,o,c,a,"next",e)}function a(e){u(i,n,o,c,a,"throw",e)}c(void 0)}))});return function(e,r,n){return t.apply(this,arguments)}}();t.default={get:function(e){return v(e,"get")},put:function(e,t){return v(e,"put",t)},post:function(e,t){return v(e,"post",t)},delete:function(e){return v(e,"delete")}}},function(t,r){t.exports=e},,function(e,t,r){"use strict";r.r(t),r.d(t,"login",(function(){return f})),r.d(t,"refresh",(function(){return p})),r.d(t,"resetPassword",(function(){return d}));var n=r(0);function o(e,t,r,n,o,u,i){try{var c=e[u](i),a=c.value}catch(e){return void r(e)}c.done?t(a):Promise.resolve(a).then(n,o)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,u){var i=e.apply(t,r);function c(e){o(i,n,u,c,a,"next",e)}function a(e){o(i,n,u,c,a,"throw",e)}c(void 0)}))}}var i="https://securetoken.googleapis.com/v1",c="https://identitytoolkit.googleapis.com/v1/accounts:";function a(e,t,r){return"".concat(e,"/").concat(r,"/?key=").concat(t)}function f(e,t,r){return s.apply(this,arguments)}function s(){return(s=u(regeneratorRuntime.mark((function e(t,r,o){var u,i,f,s,p,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=a(c,t,"accounts:verifyPassword"),i={email:r,password:o,returnSecureToken:!0},e.next=4,n.default.post(u,i);case 4:return f=e.sent,s=f.idToken,p=f.refreshToken,l=f.expiresIn,d=f.localId,e.abrupt("return",{idToken:s,refreshToken:p,expiresIn:l,userId:d});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,t){return l.apply(this,arguments)}function l(){return(l=u(regeneratorRuntime.mark((function e(t,r){var o,u,c,f,s,p,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=a(i,t,"token"),u={grant_type:"refresh_token",refresh_token:r},e.next=4,n.default.post(o,u);case 4:return c=e.sent,f=c.id_token,s=c.refresh_token,p=c.expires_in,l=c.user_id,e.abrupt("return",{idToken:f,refreshToken:s,expiresIn:p,userId:l});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t){return y.apply(this,arguments)}function y(){return(y=u(regeneratorRuntime.mark((function e(t,r){var o,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=a(c,t,"accounts:sendOobCode"),u={email:r,requestType:"PASSWORD_RESET"},e.next=4,n.default.post(o,u);case 4:return e.abrupt("return",!0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default={login:f,refresh:p,resetPassword:d}}])}));
//# sourceMappingURL=authentication-utility.js.map