!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}({3:function(e,t,r){"use strict";r.r(t),r.d(t,"naturalCompare",(function(){return n})),r.d(t,"getRandom",(function(){return o}));var n=function(e,t,r){var n,o,i,u,f=0,a=/(\d+)|(\D+)/g,l=/\d/;if(isFinite(r(e))&&isFinite(r(t)))return r(e)-r(t);if((n=String(r(e)).toLowerCase())===(o=String(r(t)).toLowerCase()))return 0;if(!l.test(n)||!l.test(o))return n>o?1:-1;n=n.match(a),o=o.match(a);for(var c=n.length>o.length?o.length:n.length;f<c;)if((i=n[f])!==(u=o[f++]))return isFinite(i)&&isFinite(u)?("0"===i.charAt(0)&&(i="."+i),"0"===u.charAt(0)&&(u="."+u),i-u):i>u?1:-1;return n.length-o.length},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;if(t===e&&(e=0),t<=e){if(0===e)return 0;var r="Invalid input (max should be greater than min)";throw console.error(r,{min:e,max:t}),Error(r)}return Math.floor(Math.random()*(t-e+1))+e};t.default={naturalCompare:n,getRandom:o}}})}));
//# sourceMappingURL=number-utility.js.map