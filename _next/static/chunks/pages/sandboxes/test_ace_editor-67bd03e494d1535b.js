(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[471],{2715:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sandboxes/test_ace_editor",function(){return n(2078)}])},8378:function(e,t,n){"use strict";n.d(t,{E7:function(){return l},Hj:function(){return a},lW:function(){return r}});let l=["java","python","ruby"],a={java:'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String line = sc.nextLine();\n        System.out.println("hello");\n    }\n}',python:'# coding: utf-8\ninput_line = raw_input()\nprint "XXXXXX"\n',ruby:'input_line = gets\nputs "XXXXXX"\n'},r={java:"Java",python:"Python",ruby:"Ruby"}},4564:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{children:t}=e;return t},t.suspense=function(){let e=Error(l.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=l.NEXT_DYNAMIC_NO_SSR_CODE,e},(0,n(2648).Z)(n(7294));var l=n(2983)},7645:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let n=i.default,a={loading:e=>{let{error:t,isLoading:n,pastDelay:l}=e;return null}};e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a=l({},a,e)),a=l({},a,t);let r=a.loader,u=()=>r().then(s);if(a.loadableGenerated&&delete(a=l({},a,a.loadableGenerated,{loader:u})).loadableGenerated,"boolean"==typeof a.ssr){if(!a.ssr)return delete a.ssr,o(u,a);delete a.ssr}return n(a)},t.noSSR=o;var l=n(6495).Z,a=n(2648).Z,r=(0,n(1598).Z)(n(7294)),i=a(n(4588)),u=a(n(4564));function s(e){return{default:e.default||e}}function o(e,t){delete t.webpack,delete t.modules;let n=r.lazy(e),l=t.loading,a=r.default.createElement(l,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1});return e=>r.default.createElement(r.Suspense,{fallback:a},r.default.createElement(u.default,null,r.default.createElement(n,Object.assign({},e))))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3644:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var l=(0,n(2648).Z)(n(7294));let a=l.default.createContext(null);t.LoadableContext=a},4588:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(6495).Z,a=(0,n(2648).Z)(n(7294)),r=n(3644);let i=[],u=[],s=!1;function o(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=l({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t);n.lazy=a.default.lazy(n.loader);let l=null;function i(){if(!l){let t=new d(e,n);l={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return l.promise()}if(!s){let o=n.webpack?n.webpack():n.modules;o&&u.push(e=>{for(let t of o)if(-1!==e.indexOf(t))return i()})}function c(e){!function(){i();let e=a.default.useContext(r.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let t=a.default.createElement(n.loading,{isLoading:!0,pastDelay:!0,error:null});return a.default.createElement(a.default.Suspense,{fallback:t},a.default.createElement(n.lazy,e))}return c.preload=()=>i(),c.displayName="LoadableComponent",c}(o,e)}function f(e,t){let n=[];for(;e.length;){let l=e.pop();n.push(l(t))}return Promise.all(n).then(()=>{if(e.length)return f(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{f(i).then(e,t)}),c.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let n=()=>(s=!0,t());f(u,e).then(n,n)})},window.__NEXT_PRELOADREADY=c.preloadReady,t.default=c},2078:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var l=n(5893),a=n(7294),r=n(5152),i=n.n(r),u=n(8378);let s=i()(async()=>(await Promise.all([n.e(281),n.e(96),n.e(940)]).then(n.bind(n,2281))).AceEditor,{loadableGenerated:{webpack:()=>[2281]},ssr:!1});function o(){let e=(0,a.useRef)(null),[t,n]=(0,a.useState)("python"),[r,i]=(0,a.useState)("");return(0,l.jsxs)("article",{children:[(0,l.jsx)("h1",{children:"Try Ace Editor"}),(0,l.jsxs)("div",{style:{display:"flex",padding:"0.5rem",gap:"0.5rem",alignItems:"center"},children:[(0,l.jsx)("p",{children:"言語を選択"}),(0,l.jsx)("select",{value:t,onChange:e=>{n(e.target.value)},style:{padding:"0.5rem"},children:u.E7.map(e=>(0,l.jsx)("option",{value:e,children:u.lW[e]},e))})]}),(0,l.jsx)(s,{editorRef:e,language:t,width:"100%",height:"300px"}),(0,l.jsxs)("div",{style:{display:"flex",padding:"0.5rem",gap:"2rem"},children:[(0,l.jsx)("button",{onClick:()=>{var t;i((null===(t=e.current)||void 0===t?void 0:t.session.getValue())||"")},style:{padding:"0.5rem"},children:"コードを出力"}),(0,l.jsx)("textarea",{value:r,readOnly:!0,style:{height:"5rem",width:"20rem"}})]})]})}},5152:function(e,t,n){e.exports=n(7645)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2715)}),_N_E=e.O()}]);