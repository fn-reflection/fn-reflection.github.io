(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[779],{2705:function(t,n,e){var r=e(5639).Symbol;t.exports=r},4239:function(t,n,e){var r=e(2705),o=e(9607),i=e(2333),c=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":c&&c in Object(t)?o(t):i(t)}},7561:function(t,n,e){var r=e(7990),o=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(o,""):t}},1957:function(t,n,e){var r="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g;t.exports=r},9607:function(t,n,e){var r=e(2705),o=Object.prototype,i=o.hasOwnProperty,c=o.toString,l=r?r.toStringTag:void 0;t.exports=function(t){var n=i.call(t,l),e=t[l];try{t[l]=void 0;var r=!0}catch(o){}var u=c.call(t);return r&&(n?t[l]=e:delete t[l]),u}},2333:function(t){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},5639:function(t,n,e){var r=e(1957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},7990:function(t){var n=/\s/;t.exports=function(t){for(var e=t.length;e--&&n.test(t.charAt(e)););return e}},3279:function(t,n,e){var r=e(3218),o=e(7771),i=e(4841),c=Math.max,l=Math.min;t.exports=function(t,n,e){var u,a,f,s,p,v,h=0,d=!1,x=!1,g=!0;if("function"!=typeof t)throw TypeError("Expected a function");function y(n){var e=u,r=a;return u=a=void 0,h=n,s=t.apply(r,e)}function b(t){var e=t-v,r=t-h;return void 0===v||e>=n||e<0||x&&r>=f}function j(){var t,e,r,i=o();if(b(i))return m(i);p=setTimeout(j,(t=i-v,e=i-h,r=n-t,x?l(r,f-e):r))}function m(t){return(p=void 0,g&&u)?y(t):(u=a=void 0,s)}function _(){var t,e=o(),r=b(e);if(u=arguments,a=this,v=e,r){if(void 0===p)return h=t=v,p=setTimeout(j,n),d?y(t):s;if(x)return clearTimeout(p),p=setTimeout(j,n),y(v)}return void 0===p&&(p=setTimeout(j,n)),s}return n=i(n)||0,r(e)&&(d=!!e.leading,f=(x="maxWait"in e)?c(i(e.maxWait)||0,n):f,g="trailing"in e?!!e.trailing:g),_.cancel=function(){void 0!==p&&clearTimeout(p),h=0,u=v=a=p=void 0},_.flush=function(){return void 0===p?s:m(o())},_}},3218:function(t){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},7005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},3448:function(t,n,e){var r=e(4239),o=e(7005);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},7771:function(t,n,e){var r=e(5639);t.exports=function(){return r.Date.now()}},3493:function(t,n,e){var r=e(3279),o=e(3218);t.exports=function(t,n,e){var i=!0,c=!0;if("function"!=typeof t)throw TypeError("Expected a function");return o(e)&&(i="leading"in e?!!e.leading:i,c="trailing"in e?!!e.trailing:c),r(t,n,{leading:i,maxWait:n,trailing:c})}},4841:function(t,n,e){var r=e(7561),o=e(3218),i=e(3448),c=0/0,l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return c;if(o(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=o(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var e=u.test(t);return e||a.test(t)?f(t.slice(2),e?2:8):l.test(t)?c:+t}},229:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sandboxes/scroll_bars",function(){return e(475)}])},475:function(t,n,e){"use strict";e.r(n);var r=e(5893),o=e(4137),i=e.n(o),c=e(3493),l=e.n(c),u=e(7294);let a=t=>(0,r.jsx)("div",{style:{backgroundColor:"#def"},children:"".concat(t.prefix,": ").concat(Array.from({length:1e3},(t,n)=>n).map(t=>t.toString()).join())}),f=t=>{let n=t.offsetHeight/t.scrollHeight;return{top:"".concat(t.scrollTop*(1+n),"px"),height:"".concat(t.offsetHeight*n,"px")}},s=()=>{let[t,n]=(0,u.useState)({top:"0",height:"0"}),e=l()(n,100);return(0,r.jsx)("article",{style:{height:"100vh",width:"100vw"},children:(0,r.jsxs)("div",{style:{height:"100%",display:"flex"},children:[(0,r.jsx)("div",{style:{height:"100%",overflowY:"hidden",paddingRight:"1rem",flexShrink:0},children:(0,r.jsx)("div",{style:{height:"100%",width:"300px",overflowY:"scroll",overscrollBehavior:"contain"},children:(0,r.jsx)(a,{prefix:"パターン1(標準)"})})}),(0,r.jsx)("div",{style:{height:"100%",overflowY:"hidden",flexShrink:0},children:(0,r.jsxs)("div",{onScroll:t=>{let n=f(t.currentTarget);e(n)},className:i()["scroll-area"],children:[(0,r.jsx)("div",{className:i()["scroll-thumb"],style:t}),(0,r.jsx)(a,{prefix:"パターン2(カスタム))"})]})}),(0,r.jsx)("div",{style:{height:"100%",width:"300px",flexShrink:0}})]})})};n.default=s},4137:function(t){t.exports={"scroll-area":"scroll_bars_scroll-area__oernw","scroll-thumb":"scroll_bars_scroll-thumb__RpnKj"}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=229)}),_N_E=t.O()}]);