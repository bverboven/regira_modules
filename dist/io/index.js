!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("axios"));else if("function"==typeof define&&define.amd)define(["axios"],e);else{var r="object"==typeof exports?e(require("axios")):e(t.axios);for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(window,(function(t){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=7)}([function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"i",(function(){return f})),r.d(e,"c",(function(){return s})),r.d(e,"h",(function(){return l})),r.d(e,"f",(function(){return p})),r.d(e,"e",(function(){return d})),r.d(e,"d",(function(){return h})),r.d(e,"g",(function(){return v})),r.d(e,"a",(function(){return g}));r(3);function n(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var u=function(t){return t},i=function(t){return Array.isArray(t)},c=function(t){return null!=t&&"function"==typeof t[Symbol.iterator]},f=function(t){return i(t)?t:c(t)?n(t):Object.values(t)},s=function(t,e){var r=f(t);if(!e)return r.length?r[r.length-1]:void 0;for(var n=r.length-1;n>=0;n--)if(e(r[n]))return r[n]},l=function(t,e){return f(t).slice(0,e)},p=function(t,e){return f(t).slice(e)},d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,r=f(t);if(r.length)return r.reduce((function(t,r){var n=e(r);return null==t||n<t?n:t}),null)},h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,r=f(t);if(r.length)return r.reduce((function(t,r){var n=e(r);return null==t||n>t?n:t}),null)},v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;return f(t).reduce((function(t,r){return t+e(r)}),0)},g=function(t,e){return v(t,e)/t.length}},function(t,e,r){"use strict";var n=r(0),a=r(3);function o(t,e,r,n,a,o,u){try{var i=t[o](u),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(n,a)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var u=t.apply(e,r);function i(t){o(u,n,a,i,c,"next",t)}function c(t){o(u,n,a,i,c,"throw",t)}i(void 0)}))}}function i(t,e,r){for(var n=new ArrayBuffer(t.length),a=new Uint8Array(n),o=0;o<t.length;o++)a[o]=t.charCodeAt(o);var u=new Blob([n],{type:r});return u.name=e,u}var c=function(t){if(!t||!t.includes("/"))return t;if(t.endsWith("/"))throw new Error("filename cannot end with a '/'");return Object(n.c)(t.split("/").filter((function(t){return t})))},f=function(){var t=u(regeneratorRuntime.mark((function t(e,r,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){var a=new FileReader;a.onload=function(){return t(i(a.result,r||e.name,n||e.type))},a.readAsBinaryString(e)})));case 1:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}(),s=function(){var t=u(regeneratorRuntime.mark((function t(e,r,n){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e).then((function(t){return t.blob()}));case 2:return a=t.sent,r&&(a.name=r),t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}(),l=function(){var t=u(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){var r=new FileReader;r.onload=function(e){return t(e.target.result)},r.readAsDataURL(e)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=u(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){var r=new FileReader;r.onload=function(e){return t(e.target.result)},r.readAsText(e)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.a={isFile:function(t){return null!=t&&t instanceof Blob},createUrl:function(t){return URL.createObjectURL(t)},revokeUrl:function(t){return URL.revokeObjectURL(t)},getFilename:c,getExtension:function(t){var e=t.split("."),r=Object(n.f)(e,1),a=Object(n.c)(r);return a?"."+a:""},getFilenameWithoutExtension:function(t){var e=c(t).split(".");return Object(n.h)(e,e.length-1||1).join(".")},toFormData:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=r.filesParameterName,u=void 0===o?"files":o,i=Object(a.b)(e),c=Object(n.i)(t).reduce((function(t,e){return t.append(u,e,e.name),t}),new FormData);return Object.entries(i).reduce((function(t,e){return t.append(e[0],e[1]),t}),c)},fileToBlob:f,base64ToBlob:function(t,e,r){var a=null;if(t.startsWith("data:")){var o=t.split(",");a=atob(Object(n.c)(o)),r||(r=o[0].split(":")[1].split(";")[0])}else a=t;return i(a,e,r)},urlToBlob:s,blobToBase64:l,readAllText:p,writeAllText:function(t,e,r){var n=new Blob([t],{type:r});return e&&(n.name=e),n},saveAs:function(t,e){var r=function(t){if(null==t||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))return null;var e=t.document,r=function(){return t.URL||t.webkitURL||t},n=e.createElementNS("http://www.w3.org/1999/xhtml","a"),a="download"in n,o=/constructor/i.test(t.HTMLElement)||t.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent),i=function(e){(t.setImmediate||t.setTimeout)((function(){throw e}),0)},c=function(t){setTimeout((function(){"string"==typeof t?r().revokeObjectURL(t):t.remove()}),4e4)},f=function(t,e,r){for(var n=(e=[].concat(e)).length;n--;){var a=t["on"+e[n]];if("function"==typeof a)try{a.call(t,r||t)}catch(t){i(t)}}},s=function(t){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t},l=function(e,i,l){l||(e=s(e));var p,d=this,h="application/octet-stream"===e.type,v=function(){f(d,"writestart progress write writeend".split(" "))};if(d.readyState=d.INIT,a)return p=r().createObjectURL(e),void setTimeout((function(){n.href=p,n.download=i,function(t){var e=new MouseEvent("click");t.dispatchEvent(e)}(n),v(),c(p),d.readyState=d.DONE}));!function(){if((u||h&&o)&&t.FileReader){var n=new FileReader;return n.onloadend=function(){var e=u?n.result:n.result.replace(/^data:[^;]*;/,"data:attachment/file;");t.open(e,"_blank")||(t.location.href=e),d.readyState=d.DONE,v()},n.readAsDataURL(e),void(d.readyState=d.INIT)}(p||(p=r().createObjectURL(e)),h)?t.location.href=p:t.open(p,"_blank")||(t.location.href=p);d.readyState=d.DONE,v(),c(p)}()},p=l.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(t,e,r){return e=e||t.name||"download",r||(t=s(t)),navigator.msSaveOrOpenBlob(t,e)}:(p.abort=function(){},p.readyState=p.INIT=0,p.WRITING=1,p.DONE=2,p.error=p.onwritestart=p.onprogress=p.onwrite=p.onabort=p.onerror=p.onwriteend=null,function(t,e,r){return new l(t,e||t.name||"download",r)})}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||(void 0).content);return r(t,e||t.name||"file")}}},function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return u})),r.d(e,"a",(function(){return i}));var n=function(t,e,r){return r?0===t.toLowerCase().indexOf(e.toLowerCase()):0===t.indexOf(e)},a=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" \t\v\f\ufeff\n\r\u2028\u2029",r=""+t,n=0;n<t.length;n++){if(!e.includes(t[n]))return r;r=r.substring(1)}return r},o=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" \t\v\f\ufeff\n\r\u2028\u2029",r=""+t,n=t.length-1;n>=0;n--){if(!e.includes(t[n]))return r;r=r.substring(0,n)}return r},u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" \t\v\f\ufeff\n\r\u2028\u2029";return null==e?t.trim():o(a(t,e),e)},i=function(t){return/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gi.test(t)}},function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return u}));var n=r(2);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=function(t){var e=function(t,e){return""===e?t:"".concat(e,".").concat(t)};return function t(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(Array.isArray(r))for(var u=0;u<value.length;u++)t(r,"".concat(n,"[").concat(u,"]"),o);else if("object"!==a(r))o[n]=r;else for(var c=0,f=Object.entries(r);c<f.length;c++){var s=f[c],l=s[0],p=s[1];if(Array.isArray(p)){var d=e("".concat(l,"[").concat(i,"]"),n);for(var h in p)t(p[h],d,o)}else{var v=e(l,n);"object"===a(p)&&Object.keys(p).length>0?t(p,v,o):o[v]=p}}return o}(t)},u=function t(e,r){var a,o=(a=r)?Object.keys(a).filter((function(t){return void 0!==a[t]})):[];return!o.length||o.every((function(a){if("function"==typeof r[a])return r[a].apply(e,a);if((r[a]instanceof Date||"number"==typeof r[a])&&!(a in e)){var o=a[3].toLowerCase()+(a.length>4?a.substr(4):"");if(a.startsWith("min"))return e[o]>=r[a];if(a.startsWith("max"))return e[o]<=r[a]}var u=Object(n.c)(a,"*");if("string"==typeof r[a]&&"string"==typeof e[u]){var i=r[a];if(a.startsWith("*")&&a.endsWith("*"))return e[u].includes(i);if(a.startsWith("*"))return e[u].endsWith(i);if(a.endsWith("*"))return e[u].startsWith(i)}return!(a in e)||(Array.isArray(r[a])&&!Array.isArray(e[a])?r[a].includes(e[a]):Array.isArray(e[a])&&!Array.isArray(r[a])?e[a].includes(r[a]):Array.isArray(e[a])&&Array.isArray(r[a])?r[a].every((function(t){return e[a].includes(t)})):r[a]instanceof Object?t(e[a],r[a]):e[a]===r[a])}))}},function(t,e,r){"use strict";r.r(e);var n=r(5),a=r.n(n),o=r(1),u=r(2);function i(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function f(t,e,r,n,a,o,u){try{var i=t[o](u),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(n,a)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function u(t){f(o,n,a,u,i,"next",t)}function i(t){f(o,n,a,u,i,"throw",t)}u(void 0)}))}}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var p=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,n,c,f,p,d,h,v,g;return e=t,(r=[{key:"getBlob",value:(g=s(regeneratorRuntime.mark((function t(e,r,n){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e instanceof File)){t.next=2;break}return t.abrupt("return",o.a.fileToBlob(e,r,n));case 2:if(!(e instanceof Blob)){t.next=6;break}return a=e,r&&a.name!==r&&(a.name=r),t.abrupt("return",a);case 6:if("string"!=typeof e){t.next=10;break}if(!Object(u.a)(e)){t.next=9;break}return t.abrupt("return",o.a.urlToBlob(e,r,n));case 9:return t.abrupt("return",o.a.base64ToBlob(e,r,n));case 10:throw Error("Cannot convert input to type Blob");case 11:case"end":return t.stop()}}),t)}))),function(t,e,r){return g.apply(this,arguments)})},{key:"createUrl",value:(v=s(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getBlob(e);case 2:return r=t.sent,t.abrupt("return",o.a.createUrl(r));case 4:case"end":return t.stop()}}),t,this)}))),function(t){return v.apply(this,arguments)})},{key:"browse",value:(h=s(regeneratorRuntime.mark((function t(){var e,r=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},t.abrupt("return",new Promise((function(t){var r=document.createElement("INPUT");r.setAttribute("type","file"),(null==e.multiple||e.multiple)&&r.setAttribute("multiple","true"),e.accept&&r.setAttribute("accept",Array.isArray(e.accept)?e.accept.join(","):e.accept),r.value="",r.setAttribute("style","display: none;"),r.addEventListener("change",(function e(){var n=i(this.files);r.removeEventListener("change",e),document.body.removeChild(r),t(n)})),document.body.appendChild(r),r.click()})));case 2:case"end":return t.stop()}}),t)}))),function(){return h.apply(this,arguments)})},{key:"readJson",value:(d=s(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.readAllText(e);case 2:return r=t.sent,t.prev=3,t.abrupt("return",JSON.parse(r));case 7:throw t.prev=7,t.t0=t.catch(3),console.error("Could not parse blob to JSON",{blob:e,content:r,error:t.t0}),t.t0;case 11:case"end":return t.stop()}}),t,null,[[3,7]])}))),function(t){return d.apply(this,arguments)})},{key:"writeJson",value:(p=s(regeneratorRuntime.mark((function t(e,r){var n,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.stringify(e,null,2),a=o.a.writeAllText(n,r,"application/json"),t.abrupt("return",a);case 3:case"end":return t.stop()}}),t)}))),function(t,e){return p.apply(this,arguments)})},{key:"send",value:(f=s(regeneratorRuntime.mark((function t(e,r){var n,u,i,c=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>2&&void 0!==c[2]?c[2]:{},u=c.length>3?c[3]:void 0,i=o.a.toFormData(r,n,u),t.abrupt("return",a()({method:"post",url:e,data:i,config:{headers:{"Content-Type":"multipart/form-data"}}}));case 4:case"end":return t.stop()}}),t)}))),function(t,e){return f.apply(this,arguments)})},{key:"saveAs",value:(c=s(regeneratorRuntime.mark((function t(e,r){var n,a,u=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>2&&void 0!==u[2]?u[2]:null,t.next=3,this.getBlob(e,n||e.name,r||e.type);case 3:return a=t.sent,t.abrupt("return",o.a.saveAs(a,a.name||"file"));case 5:case"end":return t.stop()}}),t,this)}))),function(t,e){return c.apply(this,arguments)})}])&&l(e.prototype,r),n&&l(e,n),t}();e.default=p},function(e,r){e.exports=t},function(t,e,r){"use strict";r.r(e);var n=r(4),a=r(0),o=r(2);function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var u,i=t[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!e||r.length!==e);n=!0);}catch(t){a=!0,o=t}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var c=function(t,e){4===t.length&&(t="#"+Object(a.i)(Object(o.c)(t,"#").toLowerCase()).reduce((function(t,e){return t+e+e}),""));var r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16),a:null!=e?e:1}:null},f=function(t,e){var r=c(t,e);return r?"rgba(".concat(r.r,", ").concat(r.g,", ").concat(r.b,", ").concat(r.a,")"):null},s=function t(e,r){if(Object(a.b)(e)){var n=u(e,4),i=n[0],c=n[1],s=n[2],l=n[3],p=void 0===l?1:l;return"rgba(".concat(i,",").concat(c,",").concat(s,",").concat(p,")")}if("string"==typeof e){if(Object(o.b)(e,"#"))return f(e,r);if(Object(o.b)(e,"rgba"))return e;if(Object(o.b)(e,"rgb"))return t(Object(o.c)(e.substring("rgb".length),"()").split(","),r)}return null},l=r(1);function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var u,i=t[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!e||r.length!==e);n=!0);}catch(t){a=!0,o=t}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function h(t,e,r,n,a,o,u){try{var i=t[o](u),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(n,a)}function v(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function u(t){h(o,n,a,u,i,"next",t)}function i(t){h(o,n,a,u,i,"throw",t)}u(void 0)}))}}var g={jpg:"image/jpeg",png:"image/png",gif:"image/gif"},m=g.jpg,y=function(){var t=v(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:return r=t.sent,n=new FileReader,t.abrupt("return",new Promise((function(t){n.onloadend=function(e){for(var r,n=new Uint8Array(e.target.result).subarray(0,4),a="",o=0;o<n.length;o++)a+=n[o].toString(16);switch(a){case"89504e47":r=g.png;break;case"47494638":r=g.gif;break;case"ffd8ffe0":case"ffd8ffe1":case"ffd8ffe2":case"ffd8ffe3":case"ffd8ffe8":r=g.jpg;break;default:r=void 0}t(r)},n.readAsArrayBuffer(r)})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(t){return(t||g.jpg).replace("/jpg","/jpeg")},w=function(t,e){var r=window.document.createElement("canvas");return r.width=t,r.height=e,r},x=function(t,e){var r=t.getContext("2d");return void 0!==e&&Object.keys(e).forEach((function(n){var a=e[n];if(null!==a)switch(n){case"background-color":r.fillStyle=s(a),r.fillRect(0,0,t.width,t.height);break;case"image":r.drawImage(a,0,0);break;default:r[n]=a}})),r},R=function(t){x(t).clearRect(0,0,t.width,t.height)},k=function(){var t=v(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){var r=new Image;r.onload=function(){return t(r)},r.src=e})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=v(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",k(l.a.createUrl(e)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=v(regeneratorRuntime.mark((function t(e,r,n){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=b(n),t.abrupt("return",l.a.urlToBlob(e.src,r,a));case 2:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}(),A=function(){var t=v(regeneratorRuntime.mark((function t(e){var r,n,a=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:m,n=a.length>2&&void 0!==a[2]?a[2]:1,t.abrupt("return",k(e.toDataURL(r,n)));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),S=function(t,e,r){var n=w(e||t.width,r||t.height);return x(n).drawImage(t,0,0,e||t.width,r||t.height),n},I=function(){var t=v(regeneratorRuntime.mark((function t(e){var r,n,a=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:m,n=a.length>2&&void 0!==a[2]?a[2]:1,t.abrupt("return",new Promise((function(t){return e.toBlob(t,r,n)})));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),T=function(){var t=v(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",k(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),F=function(){var t=v(regeneratorRuntime.mark((function t(e,r){var n,a,o,u,i,c,f,s,l,p=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(f=function(t,e,r){var n=w(t.width,t.height);return x(n,{"background-color":r===g.jpg?"#FFF":null}).drawImage(t,0,0),c(n,e,r)},c=function(t,e,r){var n=e*e,a=t.width,o=t.height,u=Math.floor(a*e),i=Math.floor(o*e),c=0,f=0,s=0,l=0,p=0,d=0,h=0,v=0,m=0,y=0,b=0,R=0,k=0,j=0,O=0,A=!1,S=!1,I=x(t).getImageData(0,0,a,o).data,T=new Float32Array(3*u*i),F=0,B=0,E=0;for(f=0;f<o;f++)for(d=3*(m=0|(p=f*e))*u,(S=m!==(0|p+e))&&(j=m+1-p,O=p+e-m-1),c=0;c<a;c++,s+=4)h=d+3*(v=0|(l=c*e)),(A=v!==(0|l+e))&&(R=v+1-l,k=l+e-v-1),F=I[s],B=I[s+1],E=I[s+2],A||S?A&&!S?(y=R*e,T[h]+=F*y,T[h+1]+=B*y,T[h+2]+=E*y,b=k*e,T[h+3]+=F*b,T[h+4]+=B*b,T[h+5]+=E*b):S&&!A?(y=j*e,T[h]+=F*y,T[h+1]+=B*y,T[h+2]+=E*y,b=O*e,T[h+3*u]+=F*b,T[h+3*u+1]+=B*b,T[h+3*u+2]+=E*b):(y=R*j,T[h]+=F*y,T[h+1]+=B*y,T[h+2]+=E*y,b=k*j,T[h+3]+=F*b,T[h+4]+=B*b,T[h+5]+=E*b,b=R*O,T[h+3*u]+=F*b,T[h+3*u+1]+=B*b,T[h+3*u+2]+=E*b,b=k*O,T[h+3*u+3]+=F*b,T[h+3*u+4]+=B*b,T[h+3*u+5]+=E*b):(T[h]+=F*n,T[h+1]+=B*n,T[h+2]+=E*n);var P=w(u,i),C=x(P,{"background-color":r===g.jpg?"#FFF":null}),L=C.getImageData(0,0,u,i),U=L.data,M=0;for(s=0,h=0;M<u*i;s+=3,h+=4,M++)U[h]=Math.ceil(T[s]),U[h+1]=Math.ceil(T[s+1]),U[h+2]=Math.ceil(T[s+2]),U[h+3]=255;return C.putImageData(L,0,0),P},n=p.length>2&&void 0!==p[2]?p[2]:{},a=n.quality,o=void 0===a?1:a,u=n.type,i=void 0===u?m:u,t.t0=b,t.t1=i,t.t1){t.next=9;break}return t.next=8,y(e);case 8:t.t1=t.sent;case 9:return t.t2=t.t1,s=(0,t.t0)(t.t2),l=f(e,r,s),t.abrupt("return",A(l,s,o));case 13:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),B=function(){var t=v(regeneratorRuntime.mark((function t(e,r){var n,o,u,i,c,f,s,l,d,h,v,R,k,j,O,S,I,T,F=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=F.length>2&&void 0!==F[2]?F[2]:{},o=n.quality,u=void 0===o?1:o,i=n.type,c=void 0===i?m:i,f=e.width,s=e.height,l=Object(a.b)(r)?r:[r,r],d=p(l,2),h=d[0],v=void 0===h?0:h,R=d[1],k=void 0===R?v:R,0==v&&(v=f*(k/s)),0==k&&(k=s*(v/f)),j=w(v,k),O=x(j,{imageSmoothingEnabled:!1}),I=w(f*(S=.5),s*S),x(I,{imageSmoothingEnabled:!1}).drawImage(I,0,0,f*S,s*S),O.drawImage(I,0,0,f*S,s*S,0,0,v,k),t.t0=b,t.t1=c,t.t1){t.next=18;break}return t.next=17,y(e);case 17:t.t1=t.sent;case 18:return t.t2=t.t1,T=(0,t.t0)(t.t2),t.abrupt("return",A(j,T||g.png,u));case 21:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),E=function(){var t=v(regeneratorRuntime.mark((function t(e){var r,n,a,o,u,i,c,f,s,l,p,d,h,v=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=v.length>1&&void 0!==v[1]?v[1]:1,n=v.length>2&&void 0!==v[2]?v[2]:m,a=r>0?90:r<0?-90:0,o=Math.max(e.width,e.height),u=e.naturalWidth,i=e.naturalHeight,c=0!==a?i:u,f=0!==a?u:i,t.t0=b,t.t1=n,t.t1){t.next=14;break}return t.next=13,y(e);case 13:t.t1=t.sent;case 14:return t.t2=t.t1,s=(0,t.t0)(t.t2),l=w(o,o),(p=x(l,{imageSmoothingEnabled:!1,"background-color":s===g.jpg?"#FFF":null})).translate(l.width/2,l.height/2),p.rotate(a*Math.PI/180),p.translate(-l.width/2,-l.height/2),p.drawImage(e,(l.width-u)/2,(l.height-i)/2),d=p.getImageData((o-c)/2,(o-f)/2,c,f),h=w(c,f),x(h,{imageSmoothingEnabled:!1,"background-color":s===g.jpg?"#FFF":null}).putImageData(d,0,0),t.abrupt("return",A(h,s,1));case 27:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),P=function(){var t=v(regeneratorRuntime.mark((function t(e,r,n){var a,o,u,i,c=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=c.length>3&&void 0!==c[3]?c[3]:m,t.t0=b,t.t1=a,t.t1){t.next=7;break}return t.next=6,y(e);case 6:t.t1=t.sent;case 7:return t.t2=t.t1,o=(0,t.t0)(t.t2),u=S(e),(i=x(u,{"background-color":o===g.jpg?"#FFF":null})).translate(r?e.width:0,n?e.height:0),i.scale(r?-1:1,n?-1:1),R(u),i.drawImage(e,0,0),i.restore(),t.abrupt("return",A(u,o,1));case 17:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}(),C=function(){var t=v(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=w(e.width,e.height),x(n,{"background-color":r===g.jpg?"#FFF":null}).drawImage(e,0,0),t.abrupt("return",A(n,r,1));case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),L=function(){var t=v(regeneratorRuntime.mark((function t(e,r){var n,a,o,u,i,c,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=e.width,a=e.height,o=S(e),u=x(o),i=u.getImageData(0,0,n,a),c=i.data,0,1,2,3,f=0;f<c.length;f+=4)c[f+0]>=255-r&&c[f+1]>=255-r&&c[f+2]>=255-r&&(c[f+3]=0);return u.putImageData(i,0,0),t.abrupt("return",A(o,g.png,1));case 10:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),U={contentTypes:g,getImageContentType:y,parseContentType:b,urlToImage:k,blobToImage:j,imageToBlob:O,canvasToImage:A,imageToCanvas:S,canvasToBlob:I,base64ToImage:T,imageToBase64:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=S(t);return n.toDataURL(e,r)},resizeByScale:F,resize:B,rotate:E,flipFlop:P,convertType:C,getLightness:function(t){for(var e,r,n,a=0,o=S(t),u=x(o).getImageData(0,0,o.width,o.height).data,i=0,c=u.length;i<c;i+=4)e=u[i],r=u[i+1],n=u[i+2],a+=Math.floor((e+r+n)/3);return Math.floor(a/(t.width*t.height))},white2transparent:L};function M(t){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function D(t,e,r,n,a,o,u){try{var i=t[o](u),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(n,a)}function _(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function u(t){D(o,n,a,u,i,"next",t)}function i(t){D(o,n,a,u,i,"throw",t)}u(void 0)}))}}function N(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function W(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function H(t,e,r){return(H="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=q(t)););return t}(t,e);if(n){var a=Object.getOwnPropertyDescriptor(n,e);return a.get?a.get.call(r):a.value}})(t,e,r||t)}function $(t,e){return($=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function z(t,e){return!e||"object"!==M(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function J(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function q(t){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var G=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&$(t,e)}(g,t);var e,r,n,a,o,u,i,c,f,s,l,p,d,h,v=(e=g,function(){var t,r=q(e);if(J()){var n=q(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return z(this,t)});function g(){return N(this,g),v.apply(this,arguments)}return r=g,(n=[{key:"getImage",value:(h=_(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e instanceof Image)){t.next=2;break}return t.abrupt("return",e);case 2:if("string"!=typeof e){t.next=4;break}return t.abrupt("return",U.urlToImage(e));case 4:if(!(e instanceof Blob)){t.next=6;break}return t.abrupt("return",U.blobToImage(e));case 6:if(!(e instanceof HTMLCanvasElement)){t.next=8;break}return t.abrupt("return",U.canvasToImage(e));case 8:throw Error("Cannot convert input to type Image");case 9:case"end":return t.stop()}}),t)}))),function(t){return h.apply(this,arguments)})},{key:"getBlob",value:(d=_(regeneratorRuntime.mark((function t(e,r,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e instanceof Image)){t.next=4;break}return t.abrupt("return",U.imageToBlob(e,r,n));case 4:if(!(e instanceof HTMLCanvasElement)){t.next=6;break}return t.abrupt("return",U.canvasToBlob(e,r,n));case 6:return t.abrupt("return",H(q(g.prototype),"getBlob",this).call(this,e,r,n));case 7:case"end":return t.stop()}}),t,this)}))),function(t,e,r){return d.apply(this,arguments)})},{key:"resize",value:(p=_(regeneratorRuntime.mark((function t(e,r,n){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getImage(e);case 2:return a=t.sent,t.abrupt("return",U.resizeByScale(a,Math.min(1,r/Math.max(a.width,a.height)),n));case 4:case"end":return t.stop()}}),t,this)}))),function(t,e,r){return p.apply(this,arguments)})},{key:"rotate",value:(l=_(regeneratorRuntime.mark((function t(e,r){var n,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=U.parseContentType(e.type),t.next=3,this.getImage(e);case 3:return a=t.sent,t.abrupt("return",U.rotate(a,r,n));case 5:case"end":return t.stop()}}),t,this)}))),function(t,e){return l.apply(this,arguments)})},{key:"flipHorizontally",value:(s=_(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.flipFlop(e,!0));case 1:case"end":return t.stop()}}),t,this)}))),function(t){return s.apply(this,arguments)})},{key:"flipVertically",value:(f=_(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.flipFlop(e,!1,!0));case 1:case"end":return t.stop()}}),t,this)}))),function(t){return f.apply(this,arguments)})},{key:"flipFlop",value:(c=_(regeneratorRuntime.mark((function t(e,r,n,a){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getImage(e);case 2:return o=t.sent,t.abrupt("return",U.flipFlop(o,r,n,a));case 4:case"end":return t.stop()}}),t,this)}))),function(t,e,r,n){return c.apply(this,arguments)})},{key:"convertType",value:(i=_(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getImage(e);case 2:return n=t.sent,t.abrupt("return",U.convertType(n,r));case 4:case"end":return t.stop()}}),t,this)}))),function(t,e){return i.apply(this,arguments)})},{key:"getLightness",value:(u=_(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getImage(e);case 2:return r=t.sent,t.abrupt("return",U.getLightness(r));case 4:case"end":return t.stop()}}),t,this)}))),function(t){return u.apply(this,arguments)})},{key:"white2transparent",value:(o=_(regeneratorRuntime.mark((function t(e){var r,n,a=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:0,t.next=3,this.getImage(e);case 3:return n=t.sent,t.abrupt("return",U.white2transparent(n,r));case 5:case"end":return t.stop()}}),t,this)}))),function(t){return o.apply(this,arguments)})}])&&W(r.prototype,n),a&&W(r,a),g}(n.default);e.default=G},function(t,e,r){"use strict";r.r(e);var n=r(4);r.d(e,"FileHelper",(function(){return n.default}));var a=r(6);r.d(e,"ImageHelper",(function(){return a.default})),e.default={FileHelper:n.default,ImageHelper:a.default}}])}));
//# sourceMappingURL=index.js.map