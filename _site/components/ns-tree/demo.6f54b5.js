(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1160:function(n,s,a){n.exports={basic:a(1452),control:a(1453)}},1452:function(n,s,a){n.exports={content:[["p","非受控组件，只需要传 ",["code","username"]," 即可"]],meta:{order:0,title:"非受控",filename:"components/ns-tree/demo/basic.md",id:"components-ns-tree-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>useState<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> NsTree<span class="token punctuation">,</span> EmptyLine <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'dantd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Demo <span class="token operator">=</span> props <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>results<span class="token punctuation">,</span> setResults<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NsTree</span>  \n        <span class="token attr-name">username</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zhangbx<span class="token punctuation">"</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>ns<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n          <span class="token function">setResults</span><span class="token punctuation">(</span>ns<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EmptyLine</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>选中节点：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span>results<span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],highlightedCodes:{jsx:'<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>useState<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> NsTree<span class="token punctuation">,</span> EmptyLine <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'dantd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Demo</span> <span class="token operator">=</span> <span class="token parameter">props</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>results<span class="token punctuation">,</span> setResults<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NsTree</span></span>  \n        <span class="token attr-name">username</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zhangbx<span class="token punctuation">"</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">ns</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n          <span class="token function">setResults</span><span class="token punctuation">(</span>ns<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">EmptyLine</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>选中节点：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span>results<span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},preview:function(){a(0),a(9);function n(s){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(s)}var s=function(s){if(s&&s.__esModule)return s;if(null===s||"object"!==n(s)&&"function"!=typeof s)return{default:s};var a=p();if(a&&a.has(s))return a.get(s);var t={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in s)if(Object.prototype.hasOwnProperty.call(s,e)){var c=o?Object.getOwnPropertyDescriptor(s,e):null;c&&(c.get||c.set)?Object.defineProperty(t,e,c):t[e]=s[e]}t.default=s,a&&a.set(s,t);return t}(a(0)),t=a(1188);function p(){if("function"!=typeof WeakMap)return null;var n=new WeakMap;return p=function(){return n},n}function o(n,s){return function(n){if(Array.isArray(n))return n}(n)||function(n,s){if(!(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)))return;var a=[],t=!0,p=!1,o=void 0;try{for(var e,c=n[Symbol.iterator]();!(t=(e=c.next()).done)&&(a.push(e.value),!s||a.length!==s);t=!0);}catch(n){p=!0,o=n}finally{try{t||null==c.return||c.return()}finally{if(p)throw o}}return a}(n,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}return s.default.createElement((function(n){var a=o((0,s.useState)(),2),p=a[0],e=a[1];return s.default.createElement("div",null,s.default.createElement(t.NsTree,{username:"zhangbx",onChange:function(n){e(n)}}),s.default.createElement(t.EmptyLine,null),s.default.createElement("h4",null,"选中节点："),p)}),null)}}},1453:function(n,s,a){n.exports={content:[["p","受控组件，通过 ",["code","value"]," 和 ",["code","onChange"]," ，来设置组件的值。"]],meta:{order:1,title:"受控",filename:"components/ns-tree/demo/control.md",id:"components-ns-tree-demo-control"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>useState<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> NsTree<span class="token punctuation">,</span> EmptyLine <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'dantd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Demo <span class="token operator">=</span> props <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>results<span class="token punctuation">,</span> setResults<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">\'fd.didi.com\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NsTree</span>  \n        <span class="token attr-name">username</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zhangbx<span class="token punctuation">"</span></span>\n        <span class="token attr-name">ns</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>results<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>ns<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n          <span class="token function">setResults</span><span class="token punctuation">(</span>ns<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EmptyLine</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>选中节点：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span>results<span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],highlightedCodes:{jsx:'<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>useState<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> NsTree<span class="token punctuation">,</span> EmptyLine <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'dantd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Demo</span> <span class="token operator">=</span> <span class="token parameter">props</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>results<span class="token punctuation">,</span> setResults<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">\'fd.didi.com\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NsTree</span></span>  \n        <span class="token attr-name">username</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zhangbx<span class="token punctuation">"</span></span>\n        <span class="token attr-name">ns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>results<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">ns</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n          <span class="token function">setResults</span><span class="token punctuation">(</span>ns<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">EmptyLine</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>选中节点：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span>results<span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},preview:function(){a(0),a(9);function n(s){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(s)}var s=function(s){if(s&&s.__esModule)return s;if(null===s||"object"!==n(s)&&"function"!=typeof s)return{default:s};var a=p();if(a&&a.has(s))return a.get(s);var t={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in s)if(Object.prototype.hasOwnProperty.call(s,e)){var c=o?Object.getOwnPropertyDescriptor(s,e):null;c&&(c.get||c.set)?Object.defineProperty(t,e,c):t[e]=s[e]}t.default=s,a&&a.set(s,t);return t}(a(0)),t=a(1188);function p(){if("function"!=typeof WeakMap)return null;var n=new WeakMap;return p=function(){return n},n}function o(n,s){return function(n){if(Array.isArray(n))return n}(n)||function(n,s){if(!(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)))return;var a=[],t=!0,p=!1,o=void 0;try{for(var e,c=n[Symbol.iterator]();!(t=(e=c.next()).done)&&(a.push(e.value),!s||a.length!==s);t=!0);}catch(n){p=!0,o=n}finally{try{t||null==c.return||c.return()}finally{if(p)throw o}}return a}(n,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}return s.default.createElement((function(n){var a=o((0,s.useState)("fd.didi.com"),2),p=a[0],e=a[1];return s.default.createElement("div",null,s.default.createElement(t.NsTree,{username:"zhangbx",ns:p,onChange:function(n){e(n)}}),s.default.createElement(t.EmptyLine,null),s.default.createElement("h4",null,"选中节点："),p)}),null)}}}}]);