(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1169:function(n,s){n.exports={content:["article",["h2","何时使用"],["p","接收一个 async 函数或返回 promise 的函数，返回状态，数据形状与 ",["code","useAsync"]," 相同。"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> useAsyncFn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'dantd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'RESOLVED\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">useAsync</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span>state<span class="token punctuation">.</span>loading<span class="token operator">?</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Loading<span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">:</span> state<span class="token punctuation">.</span>error<span class="token operator">?</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Error<span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Value<span class="token punctuation">:</span> <span class="token punctuation">{</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { useAsyncFn } from 'dantd';\n\nconst fn = () => new Promise((resolve) => {\n  setTimeout(() => {\n    resolve('RESOLVED');\n  }, 1000);\n});\n\nconst Demo = () => {\n  const state = useAsync(fn);\n\n  return (\n    <div>\n      {state.loading?\n        <div>Loading...</div>\n        : state.error?\n        <div>Error...</div>\n        : <div>Value: {state.value}</div>\n      }\n    </div>\n  );\n};\n\nReactDOM.render(\n  <div>\n    <Demo />\n  </div>,\n  mountNode,\n);"]],["p","copy 自 ",["a",{title:null,href:"https://github.com/streamich/react-use/blob/master/docs/useAsyncFn.md"},"react-use"]]],meta:{category:"自定义Hook",cols:1,type:"hook",title:"useAsync",subtitle:"请求",filename:"components/use-async/index.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]]]}}}]);