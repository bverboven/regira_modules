!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var r in t)("object"==typeof exports?exports:e)[r]=t[r]}}(window,(function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var u in e)t.d(r,u,function(n){return e[n]}.bind(null,u));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n),t.d(n,"isValidLang",(function(){return r})),t.d(n,"getLangFromRoute",(function(){return u})),t.d(n,"getRouteNameForLang",(function(){return o})),t.d(n,"getLangUrl",(function(){return i})),t.d(n,"getLocalizedValue",(function(){return f}));var r=function(e,n){return n.includes(e)},u=function(e,n){var t=e.path.split("/").filter((function(e){return e})),u=t&&t.length?t[0]:null;return r(u,n)?u:null},o=function(e,n,t){var r=n.name;if(!r)return null;var o=r;return u(n,t)&&(o=r.substring(0,r.length-2)),o+e.toUpperCase()},i=function(e,n,t,r){var u=o(e,n,r);if(!u)return null;var i=t.find((function(e){return e.name===u}));return null==i?null:i.path},f=function(e,n){return e&&e[n]?e[n]:e};n.default={isValidLang:r,getLangFromRoute:u,getRouteNameForLang:o,getLangUrl:i,getLocalizedValue:f}}])}));
//# sourceMappingURL=language-utility.js.map