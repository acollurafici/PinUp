var globalThis=this;function __skpm_run(e,t){globalThis.context=t;var n=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=require("sketch")},function(e,n,r){"use strict";r.r(n);var o=r(0),i=r.n(o);i.a.selectedDocument;t.selection.forEach(function(e){e.hasFixedLeft=!1,e.hasFixedRight=!1,e.hasFixedTop=!1,e.hasFixedBottom=!1,e.hasFixedWidth=!1,e.hasFixedHeight=!1,e.hasFixedLeft=!0,e.hasFixedRight=!0,e.hasFixedTop=!1,e.hasFixedBottom=!0,e.hasFixedWidth=!1,e.hasFixedHeight=!0}),n.default=function(){i.a.UI.message("Fixed Footer")}}]);"default"===e&&"function"==typeof n?n(t):n[e](t)}globalThis.onRun=__skpm_run.bind(this,"default");