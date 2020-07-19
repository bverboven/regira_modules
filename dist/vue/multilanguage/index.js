!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var e=n();for(var r in e)("object"==typeof exports?exports:t)[r]=e[r]}}(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)e.d(r,a,function(n){return t[n]}.bind(null,a));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=2)}([function(t,n,e){"use strict";e.r(n),e.d(n,"isValidLang",(function(){return r})),e.d(n,"getLangFromRoute",(function(){return a})),e.d(n,"getRouteNameForLang",(function(){return u})),e.d(n,"getLangUrl",(function(){return o})),e.d(n,"getLocalizedValue",(function(){return i}));var r=function(t,n){return n.includes(t)},a=function(t,n){var e=t.path.split("/").filter((function(t){return t})),a=e&&e.length?e[0]:null;return r(a,n)?a:null},u=function(t,n,e){var r=n.name;if(!r)return null;var u=r;return a(n,e)&&(u=r.substring(0,r.length-2)),u+t.toUpperCase()},o=function(t,n,e,r){var a=u(t,n,r);if(!a)return null;var o=e.find((function(t){return t.name===a}));return null==o?null:o.path},i=function(t,n){return t&&t[n]?t[n]:t};n.default={isValidLang:r,getLangFromRoute:a,getRouteNameForLang:u,getLangUrl:o,getLocalizedValue:i}},function(t,n,e){"use strict";e.r(n);var r=e(0);function a(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.router=n,this.languages=e}var n,e,u;return n=t,(e=[{key:"init",value:function(t){this.defaultLang=r.default.isValidLang(t,this.languages)?t:"en";var n=localStorage.getItem("lang");this.savedLang=r.default.isValidLang(n,this.languages)?n:null,this.restoreSavedLang(),this.saveLangOnChange()}},{key:"restoreSavedLang",value:function(){var t=this,n=!1;this.router.beforeEach((function(e,a,u){if(n)return u();n=!0;var o=r.default.getLangFromRoute(e,t.languages),i=t.savedLang||t.defaultLang;return i&&null==a.name&&!o?u({name:t.getRouteNameForLang(i,e)}):u()}))}},{key:"saveLangOnChange",value:function(){var t=this;this.router.afterEach((function(n){var e=r.default.getLangFromRoute(n,t.languages);t.setHtmlLang(e),e!==t.savedLang&&localStorage.setItem("lang",e)}))}},{key:"changeLang",value:function(t){if(this.currentLang!==t){var n=this.getRouteNameForLang(t,this.currentRoute);n&&this.router.push({name:n})}}},{key:"getRouteNameForLang",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return n||(n=this.currentRoute),r.default.getRouteNameForLang(t,n,this.languages)}},{key:"getLangUrl",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return n||(n=this.currentRoute),r.default.getLangUrl(t,n,this.routes,this.languages)}},{key:"getInitialRoute",value:function(t,n){var e=this.getLangFromRoute(t,this.languages);return n&&this.languages.includes(n)&&!e?{name:t.name.substring(0,t.name.length-2)+n.toUpperCase()}:null}},{key:"setHtmlLang",value:function(t){document.querySelector("html").setAttribute("lang",t)}},{key:"currentRoute",get:function(){return this.router.currentRoute}},{key:"currentLang",get:function(){return r.default.getLangFromRoute(this.currentRoute,this.languages)||this.defaultLang}},{key:"routes",get:function(){return this.router.options.routes}}])&&a(n.prototype,e),u&&a(n,u),t}();n.default=u},function(t,n,e){"use strict";e.r(n),e.d(n,"LanguageManager",(function(){return r.default})),e.d(n,"mapLanguages",(function(){return u})),e.d(n,"mapTranslations",(function(){return o})),e.d(n,"languageUtility",(function(){return a.default}));var r=e(1),a=e(0),u=function(){return{computed:{lang:function(){return(this.$route?Object(a.getLangFromRoute)(this.$route,this.$lang.languages):null)||this.$lang.defaultLang},langUrl:function(){var t=this;return function(n){return Object(a.getLangUrl)(n,t.$route,t.$lang.routes,t.$lang.languages)}},getLocalizedValue:function(){var t=this;return function(n){return n&&n[t.lang]?n[t.lang]:n}}},methods:{changeLang:function(t){this.$lang.changeLang(t)}}}},o=function(){return{computed:{translations:function(){return this.$store.getters["translations/translations"]},translate:function(){var t=this;return function(n){var e=t.translations[n];if(null==e)return n;if("string"==typeof e)return e;var r=e[t.lang];return null==r&&(r=e[t.defaultLang]),r||n}}}}};function i(t,n,e,r,a,u,o){try{var i=t[u](o),l=i.value}catch(t){return void e(t)}i.done?n(l):Promise.resolve(l).then(r,a)}function l(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return c(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var f=function(t){return{namespaced:!0,state:t.state,getters:{translations:function(t){return t.details||{}},languages:function(t,n){return l(new Set(Object.values(n.translations).map((function(t){return Object.keys(t)})).flat()))}},mutations:{load:function(n,e){t.state.details=e}},actions:{load:(n=regeneratorRuntime.mark((function n(e){var r,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,t.details();case 3:a=n.sent,r("load",a);case 5:case"end":return n.stop()}}),n)})),e=function(){var t=this,e=arguments;return new Promise((function(r,a){var u=n.apply(t,e);function o(t){i(u,r,a,o,l,"next",t)}function l(t){i(u,r,a,o,l,"throw",t)}o(void 0)}))},function(t){return e.apply(this,arguments)})}};var n,e};function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var g=function(t){return"object"===s(t)&&"[object Object]"===Object.prototype.toString.call(t)},d=function(t){function n(t,n,r){var a=t[r];return g(n)&&g(a)?t[r]=e(a,n):t[r]=n,t}function e(t,e){return Object.keys(e).reduce((function(t,r){return n(t,e[r],r)}),t)}for(var r=arguments.length,a=new Array(r>1?r-1:0),u=1;u<r;u++)a[u-1]=arguments[u];return a.reduce((function(t,n){return e(t,n)}),t)};function m(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return v(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return v(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}n.default={install:function(t,n){var e=n.service,a=n.store,i=n.router,l=n.translations,c=n.defaultLang,s=void 0===c?"en":c,g=f(e);a.registerModule("translations",g);var v=m(new Set(Object.values(l).map((function(t){return Object.keys(t)})).flat().concat(s))),y=new r.default(i,v);y.init(navigator.language.substring(0,2)||v[0]||s),t.prototype.$lang=y;var p=d(u(),o());t.mixin(p)}}}])}));
//# sourceMappingURL=index.js.map