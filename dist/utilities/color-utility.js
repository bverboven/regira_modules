!function(u,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var e in r)("object"==typeof exports?exports:u)[e]=r[e]}}(window,(function(){return function(u){var t={};function r(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return u[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=u,r.c=t,r.d=function(u,t,e){r.o(u,t)||Object.defineProperty(u,t,{enumerable:!0,get:e})},r.r=function(u){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})},r.t=function(u,t){if(1&t&&(u=r(u)),8&t)return u;if(4&t&&"object"==typeof u&&u&&u.__esModule)return u;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:u}),2&t&&"string"!=typeof u)for(var n in u)r.d(e,n,function(t){return u[t]}.bind(null,n));return e},r.n=function(u){var t=u&&u.__esModule?function(){return u.default}:function(){return u};return r.d(t,"a",t),t},r.o=function(u,t){return Object.prototype.hasOwnProperty.call(u,t)},r.p="",r(r.s=5)}([function(u,t,r){"use strict";r.r(t),r.d(t,"isArray",(function(){return E})),r.d(t,"isIterable",(function(){return g})),r.d(t,"toArray",(function(){return d})),r.d(t,"newArray",(function(){return A})),r.d(t,"orderBy",(function(){return b})),r.d(t,"orderByDesc",(function(){return F})),r.d(t,"naturalSort",(function(){return C})),r.d(t,"shuffle",(function(){return h})),r.d(t,"innerJoin",(function(){return v})),r.d(t,"groupBy",(function(){return y})),r.d(t,"groupJoin",(function(){return p})),r.d(t,"except",(function(){return m})),r.d(t,"count",(function(){return D})),r.d(t,"first",(function(){return B})),r.d(t,"last",(function(){return j})),r.d(t,"distinctBy",(function(){return O})),r.d(t,"distinct",(function(){return w})),r.d(t,"union",(function(){return S})),r.d(t,"take",(function(){return x})),r.d(t,"skip",(function(){return I})),r.d(t,"page",(function(){return L})),r.d(t,"countPages",(function(){return M})),r.d(t,"min",(function(){return T})),r.d(t,"max",(function(){return R})),r.d(t,"sum",(function(){return k})),r.d(t,"average",(function(){return W})),r.d(t,"toMap",(function(){return P})),r.d(t,"sameContent",(function(){return z})),r.d(t,"query",(function(){return U})),r.d(t,"getEnumerator",(function(){return _})),r.d(t,"move",(function(){return J})),r.d(t,"reFill",(function(){return $}));var e=r(2),n=r(3);function o(u,t){return function(u){if(Array.isArray(u))return u}(u)||function(u,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(u)))return;var r=[],e=!0,n=!1,o=void 0;try{for(var i,a=u[Symbol.iterator]();!(e=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);e=!0);}catch(u){n=!0,o=u}finally{try{e||null==a.return||a.return()}finally{if(n)throw o}}return r}(u,t)||a(u,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(u){return function(u){if(Array.isArray(u))return c(u)}(u)||function(u){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(u))return Array.from(u)}(u)||a(u)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(u,t){if(u){if("string"==typeof u)return c(u,t);var r=Object.prototype.toString.call(u).slice(8,-1);return"Object"===r&&u.constructor&&(r=u.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(u,t):void 0}}function c(u,t){(null==t||t>u.length)&&(t=u.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=u[r];return e}var s=function(u){return u},f=function(u,t,r){return r(u)<r(t)?-1:r(u)>r(t)?1:0},l=function(u,t,r){return r(u)>r(t)?-1:r(u)<r(t)?1:0},E=function(u){return Array.isArray(u)},g=function(u){return null!=u&&"function"==typeof u[Symbol.iterator]},d=function(u){return E(u)?u:g(u)?i(u):Object.values(u)},A=function(u){return i(Array(u))},b=function(u){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,r=i(u);return r.sort((function(u,r){return f(u,r,t)})),r},F=function(u){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,r=i(u);return r.sort((function(u,r){return l(u,r,t)})),r},C=function(u){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,r=i(u);return r.sort((function(u,r){return Object(n.naturalCompare)(u,r,t)})),r},h=function(u){var t=i(u);return i(Array(t.length)).map((function(){var u=Object(n.getRandom)(t.length-1);return t.splice(u,1)[0]}))},v=function(u,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:s,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r,o=[],i=d(u),a=d(t);return i.forEach((function(u){a.filter((function(t){return r(u)===e(t)})).forEach((function(t){o.push(n(u,t))}))})),o},y=function(u,t){return i(P(u,t,(function(u,r,e){var n=t(u);return e.has(n)?e.get(n).concat(u):[u]})))},p=function(u,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:s,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(u,t){return[u,t]},i=d(t);return d(u).map((function(u,t,n){return[u,i.filter((function(o,i,a){return r(u,t,n)===e(o,i,a)}))]})).map((function(u){var t=o(u,2),r=t[0],e=t[1];return n(r,e)}))},m=function(u,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:s,n=d(t);return d(u).filter((function(u){return!n.some((function(t){return r(u)===e(t)}))}))},D=function(u,t){var r=d(u);return t?r.filter(t).length:r.length},B=function(u,t){var r=d(u);return t?r.find(t):r[0]},j=function(u,t){var r=d(u);if(!t)return r.length?r[r.length-1]:void 0;for(var e=r.length-1;e>=0;e--)if(t(r[e]))return r[e]},O=function(u,t){return d(u).reduce((function(u,r){return u.some((function(u){return t(u)===t(r)}))?u:u.concat([r])}),[])},w=function(u){return i(new Set(u))},S=function(u,t){return w(d(u).concat(d(t)))},x=function(u,t){return d(u).slice(0,t)},I=function(u,t){return d(u).slice(t)},L=function(u,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,e=t*r;return d(u).slice(e,e+t)},M=function(u,t){var r=d(u).length;return Math.ceil(r/t)},T=function(u){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,r=d(u);if(r.length)return r.reduce((function(u,r){var e=t(r);return null==u||e<u?e:u}),null)},R=function(u){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,r=d(u);if(r.length)return r.reduce((function(u,r){var e=t(r);return null==u||e>u?e:u}),null)},k=function(u){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;return d(u).reduce((function(u,r){return u+t(r)}),0)},W=function(u,t){return k(u,t)/u.length},P=function(u,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s,e=d(u);return e.reduce((function(u,e,n){var o=t(e),i=r(e,n,u);return u.set(o,i)}),new Map)},z=function(u,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(u===t)return!0;if(null==u||null==t)return!1;var e=d(u),n=d(t);if(e.length!==n.length)return!1;if(r){for(var o=0;o<e.length;o++)if(e[o]!==n[o])return!1;return!0}return v(e,n).length===e.length},U=function(u,t){return d(u).filter((function(u){return Object(e.filterObject)(u,t)}))},_=function(u){var t=0;return{get selectedIndex(){return t},set selectedIndex(r){r>=0&&r<u.length&&(t=r)},get length(){return u.length},get current(){return t>=0&&t<u.length?u[t]:null},first:function(){t=0},previous:function(){return t>0&&t--,t>0},next:function(){return t<u.length-1&&t++,t<u.length},last:function(){t=u.length-1}}},J=function(u,t,r){var e=u.indexOf(t);-1!==e&&(u.splice(e,1),u.splice(r,0,t))},$=function(u,t){u.splice.apply(u,[0,u.length].concat(i(t)))};t.default={isArray:E,isIterable:g,toArray:d,newArray:A,orderBy:b,orderByDesc:F,naturalSort:C,shuffle:h,innerJoin:v,groupBy:y,groupJoin:p,count:D,first:B,last:j,distinctBy:O,distinct:w,union:S,take:x,skip:I,page:L,countPages:M,min:T,max:R,sum:k,average:W,toMap:P,sameContent:z,query:U,getEnumerator:_,move:J,reFill:$}},function(u,t,r){"use strict";function e(u){return function(u){if(Array.isArray(u))return n(u)}(u)||function(u){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(u))return Array.from(u)}(u)||function(u,t){if(!u)return;if("string"==typeof u)return n(u,t);var r=Object.prototype.toString.call(u).slice(8,-1);"Object"===r&&u.constructor&&(r=u.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(u,t)}(u)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(u,t){(null==t||t>u.length)&&(t=u.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=u[r];return e}r.r(t),r.d(t,"equals",(function(){return o})),r.d(t,"contains",(function(){return i})),r.d(t,"startsWith",(function(){return a})),r.d(t,"endsWith",(function(){return c})),r.d(t,"trimLeft",(function(){return s})),r.d(t,"trimRight",(function(){return f})),r.d(t,"trim",(function(){return l})),r.d(t,"replaceAll",(function(){return E})),r.d(t,"randomize",(function(){return g})),r.d(t,"newGuid",(function(){return d})),r.d(t,"newPassword",(function(){return A})),r.d(t,"isEmail",(function(){return b})),r.d(t,"isUrl",(function(){return F})),r.d(t,"formatBelgianPhone",(function(){return C})),r.d(t,"htmlEncode",(function(){return h})),r.d(t,"htmlDecode",(function(){return v})),r.d(t,"normalizeDiacritics",(function(){return y})),r.d(t,"capitalize",(function(){return p})),r.d(t,"toKebabCase",(function(){return m})),r.d(t,"toSnakeCase",(function(){return D})),r.d(t,"toTrainCase",(function(){return B})),r.d(t,"toCamelCase",(function(){return j})),r.d(t,"toPascalCase",(function(){return O})),r.d(t,"slugify",(function(){return w}));var o=function(u,t,r){return r?u.toLowerCase()===t.toLowerCase():u===t},i=function(u,t,r){return r?-1!==u.toLowerCase().indexOf(t.toLowerCase()):-1!==u.indexOf(t)},a=function(u,t,r){return r?0===u.toLowerCase().indexOf(t.toLowerCase()):0===u.indexOf(t)},c=function(u,t,r){return r?-1!==u.toLowerCase().indexOf(t.toLowerCase(),u.length-t.length):-1!==u.indexOf(t,u.length-t.length)},s=function(u){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" \t\v\f\ufeff\n\r\u2028\u2029",r=""+u,e=0;e<u.length;e++){if(!t.includes(u[e]))return r;r=r.substring(1)}return r},f=function(u){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" \t\v\f\ufeff\n\r\u2028\u2029",r=""+u,e=u.length-1;e>=0;e--){if(!t.includes(u[e]))return r;r=r.substring(0,e)}return r},l=function(u){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" \t\v\f\ufeff\n\r\u2028\u2029";return null==t?u.trim():f(s(u,t),t)},E=function(u,t,r){return u.replace(new RegExp(t,"g"),r)},g=function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return e(Array(u)).map((function(){return Math.floor(62*Math.random())})).map((function(u){return u>36?(u-26).toString(36).toUpperCase():u.toString(36)})).join("")},d=function(){var u=g(32);return"".concat(u.substr(0,8),"-").concat(u.substr(8,4),"-").concat(u.substr(12,4),"-").concat(u.substr(16,4),"-").concat(u.substr(20,12))},A=function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Math.floor(24*Math.random())+8;return g(u)},b=function(u){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(u)},F=function(u){return/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/gi.test(u)},C=function(u){if("string"!=typeof u)return"";if(12===u.length&&0===u.indexOf("00323")){var t=u.match(/(\d{4})(\d{1})(\d{3})(\d{2})(\d{2})/);if(6==t.length)return"+".concat(t[1].substr(2)," ").concat(t[2]," ").concat(t[3]," ").concat(t[4]," ").concat(t[5])}else if(13===u.length&&0===u.indexOf("00324")){var r=u.match(/(\d{4})(\d{3})(\d{2})(\d{2})(\d{2})/);if(6==r.length)return"+".concat(r[1].substr(2)," ").concat(r[2]," ").concat(r[3]," ").concat(r[4]," ").concat(r[5])}return u},h=function(u){return u.replace(/[\u00A0-\u9999<>&]/gim,(function(u){return"&#"+u.charCodeAt(0)+";"}))},v=function(u){return u.replace(/&#(\d+);/g,(function(u,t){return String.fromCharCode(t)}))},y=function(u){for(var t=[{base:"A",letters:/[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g},{base:"AA",letters:/[\uA732]/g},{base:"AE",letters:/[\u00C6\u01FC\u01E2]/g},{base:"AO",letters:/[\uA734]/g},{base:"AU",letters:/[\uA736]/g},{base:"AV",letters:/[\uA738\uA73A]/g},{base:"AY",letters:/[\uA73C]/g},{base:"B",letters:/[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g},{base:"C",letters:/[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g},{base:"D",letters:/[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g},{base:"DZ",letters:/[\u01F1\u01C4]/g},{base:"Dz",letters:/[\u01F2\u01C5]/g},{base:"E",letters:/[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g},{base:"F",letters:/[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g},{base:"G",letters:/[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g},{base:"H",letters:/[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g},{base:"I",letters:/[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g},{base:"J",letters:/[\u004A\u24BF\uFF2A\u0134\u0248]/g},{base:"K",letters:/[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g},{base:"L",letters:/[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g},{base:"LJ",letters:/[\u01C7]/g},{base:"Lj",letters:/[\u01C8]/g},{base:"M",letters:/[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g},{base:"N",letters:/[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g},{base:"NJ",letters:/[\u01CA]/g},{base:"Nj",letters:/[\u01CB]/g},{base:"O",letters:/[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g},{base:"OE",letters:/[\u0152\u0276]/g},{base:"OI",letters:/[\u01A2]/g},{base:"OO",letters:/[\uA74E]/g},{base:"OU",letters:/[\u0222]/g},{base:"P",letters:/[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g},{base:"Q",letters:/[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g},{base:"R",letters:/[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g},{base:"S",letters:/[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g},{base:"T",letters:/[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g},{base:"TZ",letters:/[\uA728]/g},{base:"U",letters:/[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g},{base:"V",letters:/[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g},{base:"VY",letters:/[\uA760]/g},{base:"W",letters:/[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g},{base:"X",letters:/[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g},{base:"Y",letters:/[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g},{base:"Z",letters:/[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g},{base:"a",letters:/[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g},{base:"aa",letters:/[\uA733]/g},{base:"ae",letters:/[\u00E6\u01FD\u01E3]/g},{base:"ao",letters:/[\uA735]/g},{base:"au",letters:/[\uA737]/g},{base:"av",letters:/[\uA739\uA73B]/g},{base:"ay",letters:/[\uA73D]/g},{base:"b",letters:/[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g},{base:"c",letters:/[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g},{base:"d",letters:/[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g},{base:"dz",letters:/[\u01F3\u01C6]/g},{base:"e",letters:/[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g},{base:"f",letters:/[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g},{base:"g",letters:/[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g},{base:"h",letters:/[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g},{base:"hv",letters:/[\u0195]/g},{base:"i",letters:/[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g},{base:"j",letters:/[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g},{base:"k",letters:/[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g},{base:"l",letters:/[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g},{base:"lj",letters:/[\u01C9]/g},{base:"m",letters:/[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g},{base:"n",letters:/[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g},{base:"nj",letters:/[\u01CC]/g},{base:"o",letters:/[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g},{base:"oe",letters:/[\u0153\u1D14]/g},{base:"oi",letters:/[\u01A3]/g},{base:"ou",letters:/[\u0223]/g},{base:"oo",letters:/[\uA74F]/g},{base:"p",letters:/[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g},{base:"q",letters:/[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g},{base:"r",letters:/[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g},{base:"s",letters:/[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g},{base:"t",letters:/[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g},{base:"tz",letters:/[\uA729]/g},{base:"u",letters:/[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g},{base:"v",letters:/[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g},{base:"vy",letters:/[\uA761]/g},{base:"w",letters:/[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g},{base:"x",letters:/[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g},{base:"y",letters:/[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g},{base:"z",letters:/[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g}],r=0;r<t.length;r++)u=u.replace(t[r].letters,t[r].base);return u},p=function(u){return u?u[0].toUpperCase()+u.substr(1).replace(/\s(.)/g,(function(u){return u.toUpperCase()})):""},m=function(u){return u?l(u.replace(/[^\w ]+/g," ").replace(/\s+/g,"-").toLowerCase(),"-"):""},D=function(u){return u?m(u).replace(/-+/g,"_"):""},B=function(u){return u?p(m(u).replace(/-+/g," ")).replace(/\s+/g,"-"):""},j=function(u){return u?m(u).replace(/-/g," ").replace(/\s(.)/g,(function(u){return u.toUpperCase()})).replace(/\s/g,"").replace(/^(.)/,(function(u){return u.toLowerCase()})):""},O=function(u){return u?p(j(u)):""},w=function(u){return u?m(y(u)):""};t.default={equals:o,contains:i,startsWith:a,endsWith:c,trimLeft:s,trimRight:f,trim:l,replaceAll:E,randomize:g,newGuid:d,isEmail:b,isUrl:F,formatBelgianPhone:C,htmlEncode:h,htmlDecode:v,normalizeDiacritics:y,capitalize:p,toKebabCase:m,toSnakeCase:D,toTrainCase:B,toCamelCase:j,toPascalCase:O,slugify:w}},function(u,t,r){"use strict";r.r(t),r.d(t,"isPlainObject",(function(){return o})),r.d(t,"flattenObject",(function(){return i})),r.d(t,"crawlObject",(function(){return a})),r.d(t,"deepCopy",(function(){return c})),r.d(t,"mixin",(function(){return s})),r.d(t,"filterObject",(function(){return f}));var e=r(1);function n(u){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(u){return typeof u}:function(u){return u&&"function"==typeof Symbol&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u})(u)}var o=function(u){return"object"===n(u)&&"[object Object]"===Object.prototype.toString.call(u)},i=function(u){var t=function(u,t){return""===t?u:"".concat(t,".").concat(u)};return function u(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(Array.isArray(r))for(var i=0;i<r.length;i++)u(r,"".concat(e,"[").concat(i,"]"),o);else if("object"!==n(r))o[e]=r;else for(var a=0,c=Object.entries(r);a<c.length;a++){var s=c[a],f=s[0],l=s[1];if(Array.isArray(l))for(var E in l){var g=t("".concat(f,"[").concat(E,"]"),e);u(l[E],g,o)}else{var d=t(f,e);"object"===n(l)&&Object.keys(l).length>0?u(l,d,o):o[d]=l}}return o}(u)},a=function(u,t){return t.split(".").reduce((function(u,t){return null==u?null:u[t]}),u)},c=function(u){var t=function(u,t){return u.filter(t)[0]};return function u(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(null===r||"object"!==n(r))return r;var o=t(e,(function(u){return u.original===r}));if(o)return o.copy;if(r instanceof Date)return new Date(r);var i=Array.isArray(r)?[]:{};return e.push({original:r,copy:i}),Object.keys(r).forEach((function(t){i[t]=u(r[t],e)})),i}(u)},s=function(u){function t(u,t,e){var n=u[e];return o(t)&&o(n)?u[e]=r(n,t):u[e]=t,u}function r(u,r){return Object.keys(r).reduce((function(u,e){return t(u,r[e],e)}),u)}for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return n.reduce((function(u,t){return r(u,t)}),u)},f=function u(t,r){var n,o=(n=r)?Object.keys(n).filter((function(u){return void 0!==n[u]})):[];return!o.length||o.every((function(n){if("function"==typeof r[n])return r[n].apply(t,n);if((r[n]instanceof Date||"number"==typeof r[n])&&!(n in t)){var o=n[3].toLowerCase()+(n.length>4?n.substr(4):"");if(n.startsWith("min"))return t[o]>=r[n];if(n.startsWith("max"))return t[o]<=r[n]}var i=Object(e.trim)(n,"*");if("string"==typeof r[n]&&"string"==typeof t[i]){var a=r[n];if(n.startsWith("*")&&n.endsWith("*"))return t[i].includes(a);if(n.startsWith("*"))return t[i].endsWith(a);if(n.endsWith("*"))return t[i].startsWith(a)}return!(n in t)||(Array.isArray(r[n])&&!Array.isArray(t[n])?r[n].includes(t[n]):Array.isArray(t[n])&&!Array.isArray(r[n])?t[n].includes(r[n]):Array.isArray(t[n])&&Array.isArray(r[n])?r[n].every((function(u){return t[n].includes(u)})):r[n]instanceof Object?u(t[n],r[n]):t[n]===r[n])}))};t.default={isPlainObject:o,flattenObject:i,crawlObject:a,mixin:s,filterObject:f}},function(u,t,r){"use strict";r.r(t),r.d(t,"naturalCompare",(function(){return e})),r.d(t,"getRandom",(function(){return n}));var e=function(u,t,r){var e,n,o,i,a=0,c=/(\d+)|(\D+)/g,s=/\d/;if(isFinite(r(u))&&isFinite(r(t)))return r(u)-r(t);if((e=String(r(u)).toLowerCase())===(n=String(r(t)).toLowerCase()))return 0;if(!s.test(e)||!s.test(n))return e>n?1:-1;e=e.match(c),n=n.match(c);for(var f=e.length>n.length?n.length:e.length;a<f;)if((o=e[a])!==(i=n[a++]))return isFinite(o)&&isFinite(i)?("0"===o.charAt(0)&&(o="."+o),"0"===i.charAt(0)&&(i="."+i),o-i):o>i?1:-1;return e.length-n.length},n=function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;if(t===u&&(u=0),t<=u){if(0===u)return 0;var r="Invalid input (max should be greater than min)";throw console.error(r,{min:u,max:t}),Error(r)}return Math.floor(Math.random()*(t-u+1))+u};t.default={naturalCompare:e,getRandom:n}},,function(u,t,r){"use strict";r.r(t),r.d(t,"rgbToHex",(function(){return a})),r.d(t,"hexToRgb",(function(){return c})),r.d(t,"hexToRgbString",(function(){return s})),r.d(t,"hexToRgbArray",(function(){return f})),r.d(t,"getRgbString",(function(){return l})),r.d(t,"invertRgb",(function(){return E})),r.d(t,"invertHex",(function(){return g})),r.d(t,"grayscale",(function(){return d}));var e=r(0),n=r(1);function o(u,t){return function(u){if(Array.isArray(u))return u}(u)||function(u,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(u)))return;var r=[],e=!0,n=!1,o=void 0;try{for(var i,a=u[Symbol.iterator]();!(e=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);e=!0);}catch(u){n=!0,o=u}finally{try{e||null==a.return||a.return()}finally{if(n)throw o}}return r}(u,t)||function(u,t){if(!u)return;if("string"==typeof u)return i(u,t);var r=Object.prototype.toString.call(u).slice(8,-1);"Object"===r&&u.constructor&&(r=u.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(u,t)}(u,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(u,t){(null==t||t>u.length)&&(t=u.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=u[r];return e}var a=function(u,t,r){return"#"+[u,t,r].map((function(u){return u.toString(16).padStart(2,"0")})).join("")},c=function(u,t){4===u.length&&(u="#"+Object(e.toArray)(Object(n.trim)(u,"#").toLowerCase()).reduce((function(u,t){return u+t+t}),""));var r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(u);return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16),a:null!=t?t:1}:null},s=function(u,t){var r=c(u,t);return r?"rgba(".concat(r.r,", ").concat(r.g,", ").concat(r.b,", ").concat(r.a,")"):null},f=function(u,t){var r=c(u,t),e=r.r,n=r.g,o=r.b,i=r.a;return[e,n,o,void 0===i?1:i]},l=function u(t,r){if(Object(e.isArray)(t)){var i=o(t,4),a=i[0],c=i[1],f=i[2],l=i[3],E=void 0===l?1:l;return"rgba(".concat(a,",").concat(c,",").concat(f,",").concat(E,")")}if("string"==typeof t){if(Object(n.startsWith)(t,"#"))return s(t,r);if(Object(n.startsWith)(t,"rgba"))return t;if(Object(n.startsWith)(t,"rgb"))return u(Object(n.trim)(t.substring("rgb".length),"()").split(","),r)}return null},E=function(u,t,r){var e=o([u,t,r].map((function(u){return 255-u})),3);return{ri:e[0],gi:e[1],bi:e[2]}},g=function(u){var t=f(u),r=E.apply(null,t);return a.apply(null,r)},d=function(u){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"average",n=Object(e.take)(f(u),3);switch(r){case"light":var o=parseInt(.8*Object(e.max)(n),10);t=[o,o,o];break;case"dark":var i=parseInt(Object(e.min)(n),10);t=[i,i,i];break;case"weight":var c=[.21,.72,.07],s=Object(e.sum)(n,(function(u,t){return parseInt(u*c[t],10)}));t=[s,s,s];break;default:var l=parseInt(Object(e.average)(n),10);t=[l,l,l]}return a.apply(null,t)};t.default={rgbToHex:a,hexToRgb:c,hexToRgbString:s,hexToRgbArray:f,getRgbString:l,invertRgb:E,invertHex:g,grayscale:d}}])}));
//# sourceMappingURL=color-utility.js.map