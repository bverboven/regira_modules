!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}({6:function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.r(e),n.d(e,"redirect",(function(){return u})),n.d(e,"setMetaTag",(function(){return i})),n.d(e,"setCanonicalTag",(function(){return c}));var u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=document.createElement("meta");n.setAttribute("http-equiv","Refresh"),n.setAttribute("content","".concat(e,"; url=").concat(t)),document.head.appendChild(n)},i=function(t,e){var n=document.getElementsByName(t)[0];if(null==n){var o=r(document.head.childNodes.values()).filter((function(t){return"META"===t.tagName})).slice(-1)[0];n=document.createElement("meta"),null!=o?o.insertAdjacentElement("afterend",n):document.head.appendChild(n)}n.setAttribute("name",t),n.setAttribute("content",e)},c=function(t){var e=document.querySelector("[rel=canonical]");if(null==e){var n=r(document.head.childNodes.values()).filter((function(t){return"META"===t.tagName})).slice(-1)[0];e=document.createElement("meta"),null!=n?n.insertAdjacentElement("afterend",e):document.head.appendChild(e)}e.setAttribute("rel","canonical"),e.setAttribute("href",t)};e.default={redirect:u,setMetaTag:i,setCanonicalTag:c}},8:function(t,e,n){"use strict";n.r(e),n.d(e,"isLocalHost",(function(){return o})),n.d(e,"isHttps",(function(){return u})),n.d(e,"getHttpsUrl",(function(){return i})),n.d(e,"forceHttps",(function(){return c})),n.d(e,"toAbsoluteUrl",(function(){return a})),n.d(e,"toQueryString",(function(){return l}));var r=n(6),o=function(){return"localhost"===location.hostname||"127.0.0.1"===location.hostname},u=function(t){return"https:"===("string"==typeof t?new URL(t):t).protocol},i=function(t){var e=new URL(t);return u(e)?t:"https:"+t.substring(e.protocol.length)},c=function(t){var e=i(t);e===t||o()||Object(r.redirect)(e)},a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e||(e=window.location.origin);for(var n=e.split("/"),r=t.split("/"),o=0;o<r.length;o++)"."!==r[o]&&(".."===r[o]?n.pop():n.push(r[o]));return n.join("/")},l=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object.entries(t).filter((function(t){return e||null!=t[1]})).map((function(t){return"".concat(encodeURIComponent(t[0]),"=").concat(encodeURIComponent(t[1]))})).join("&")};e.default={isLocalHost:o,getHttpsUrl:i,forceHttps:c,toQueryString:l}}})}));
//# sourceMappingURL=http-utility.js.map