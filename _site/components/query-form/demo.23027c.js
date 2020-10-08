(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1165:function(n,s,a){n.exports={basic:a(1456)}},1456:function(n,s,a){n.exports={content:[["p","空行可以不传参数直接使用。增加文字或者组件之间的上下间距"]],meta:{order:0,title:"基本",filename:"components/query-form/demo/basic.md",id:"components-query-form-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> QueryForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'dantd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> InputNumber <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    type<span class="token punctuation">:</span> <span class="token string">\'input\'</span><span class="token punctuation">,</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'实例名称\'</span><span class="token punctuation">,</span>\n    dataIndex<span class="token punctuation">:</span> <span class="token string">\'name\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    type<span class="token punctuation">:</span> <span class="token string">\'select\'</span><span class="token punctuation">,</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'报警等级\'</span><span class="token punctuation">,</span>\n    dataIndex<span class="token punctuation">:</span> <span class="token string">\'level\'</span><span class="token punctuation">,</span>\n    options<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        title<span class="token punctuation">:</span> <span class="token string">\'全部\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'all\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        title<span class="token punctuation">:</span> <span class="token string">\'P0\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'p0\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        title<span class="token punctuation">:</span> <span class="token string">\'P1\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'p1\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        title<span class="token punctuation">:</span> <span class="token string">\'P2\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'p2\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    type<span class="token punctuation">:</span> <span class="token string">\'select\'</span><span class="token punctuation">,</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'任务状态\'</span><span class="token punctuation">,</span>\n    dataIndex<span class="token punctuation">:</span> <span class="token string">\'status\'</span><span class="token punctuation">,</span>\n    selectMode<span class="token punctuation">:</span> <span class="token string">\'multiple\'</span><span class="token punctuation">,</span>\n    options<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        title<span class="token punctuation">:</span> <span class="token string">\'进行中\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'processing\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        title<span class="token punctuation">:</span> <span class="token string">\'成功\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'success\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        title<span class="token punctuation">:</span> <span class="token string">\'失败\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'fail\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    type<span class="token punctuation">:</span> <span class="token string">\'custom\'</span><span class="token punctuation">,</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'机器数量\'</span><span class="token punctuation">,</span>\n    dataIndex<span class="token punctuation">:</span> <span class="token string">\'number\'</span><span class="token punctuation">,</span>\n    component<span class="token punctuation">:</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputNumber</span>\n        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>请输入机器数量<span class="token punctuation">"</span></span>\n        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">precision</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>result<span class="token punctuation">,</span> setResult<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> handleChange <span class="token operator">=</span> queryValue <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token function">setResult</span><span class="token punctuation">(</span>queryValue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>QueryForm</span> \n        <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>full<span class="token punctuation">"</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span> \n        <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span></span> \n      <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>结果：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>JSON<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],highlightedCodes:{jsx:'<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> QueryForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'dantd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> InputNumber <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    type<span class="token operator">:</span> <span class="token string">\'input\'</span><span class="token punctuation">,</span>\n    title<span class="token operator">:</span> <span class="token string">\'实例名称\'</span><span class="token punctuation">,</span>\n    dataIndex<span class="token operator">:</span> <span class="token string">\'name\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    type<span class="token operator">:</span> <span class="token string">\'select\'</span><span class="token punctuation">,</span>\n    title<span class="token operator">:</span> <span class="token string">\'报警等级\'</span><span class="token punctuation">,</span>\n    dataIndex<span class="token operator">:</span> <span class="token string">\'level\'</span><span class="token punctuation">,</span>\n    options<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        title<span class="token operator">:</span> <span class="token string">\'全部\'</span><span class="token punctuation">,</span>\n        value<span class="token operator">:</span> <span class="token string">\'all\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        title<span class="token operator">:</span> <span class="token string">\'P0\'</span><span class="token punctuation">,</span>\n        value<span class="token operator">:</span> <span class="token string">\'p0\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        title<span class="token operator">:</span> <span class="token string">\'P1\'</span><span class="token punctuation">,</span>\n        value<span class="token operator">:</span> <span class="token string">\'p1\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        title<span class="token operator">:</span> <span class="token string">\'P2\'</span><span class="token punctuation">,</span>\n        value<span class="token operator">:</span> <span class="token string">\'p2\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    type<span class="token operator">:</span> <span class="token string">\'select\'</span><span class="token punctuation">,</span>\n    title<span class="token operator">:</span> <span class="token string">\'任务状态\'</span><span class="token punctuation">,</span>\n    dataIndex<span class="token operator">:</span> <span class="token string">\'status\'</span><span class="token punctuation">,</span>\n    selectMode<span class="token operator">:</span> <span class="token string">\'multiple\'</span><span class="token punctuation">,</span>\n    options<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        title<span class="token operator">:</span> <span class="token string">\'进行中\'</span><span class="token punctuation">,</span>\n        value<span class="token operator">:</span> <span class="token string">\'processing\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        title<span class="token operator">:</span> <span class="token string">\'成功\'</span><span class="token punctuation">,</span>\n        value<span class="token operator">:</span> <span class="token string">\'success\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        title<span class="token operator">:</span> <span class="token string">\'失败\'</span><span class="token punctuation">,</span>\n        value<span class="token operator">:</span> <span class="token string">\'fail\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    type<span class="token operator">:</span> <span class="token string">\'custom\'</span><span class="token punctuation">,</span>\n    title<span class="token operator">:</span> <span class="token string">\'机器数量\'</span><span class="token punctuation">,</span>\n    dataIndex<span class="token operator">:</span> <span class="token string">\'number\'</span><span class="token punctuation">,</span>\n    component<span class="token operator">:</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">InputNumber</span></span>\n        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>请输入机器数量<span class="token punctuation">"</span></span>\n        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> width<span class="token operator">:</span> <span class="token string">\'100%\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">precision</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Demo<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>result<span class="token punctuation">,</span> setResult<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token parameter">queryValue</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">setResult</span><span class="token punctuation">(</span>queryValue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">QueryForm</span></span> \n        <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>full<span class="token punctuation">"</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span> \n        <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span></span> \n      <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>结果：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},preview:function(){var n=a(0),s=(a(9),a(0)),t=a(1188),p=a(99);function o(n,s){return function(n){if(Array.isArray(n))return n}(n)||function(n,s){if(!(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)))return;var a=[],t=!0,p=!1,o=void 0;try{for(var c,e=n[Symbol.iterator]();!(t=(c=e.next()).done)&&(a.push(c.value),!s||a.length!==s);t=!0);}catch(n){p=!0,o=n}finally{try{t||null==e.return||e.return()}finally{if(p)throw o}}return a}(n,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var c=[{type:"input",title:"实例名称",dataIndex:"name"},{type:"select",title:"报警等级",dataIndex:"level",options:[{title:"全部",value:"all"},{title:"P0",value:"p0"},{title:"P1",value:"p1"},{title:"P2",value:"p2"}]},{type:"select",title:"任务状态",dataIndex:"status",selectMode:"multiple",options:[{title:"进行中",value:"processing"},{title:"成功",value:"success"},{title:"失败",value:"fail"}]},{type:"custom",title:"机器数量",dataIndex:"number",component:n.createElement(p.InputNumber,{placeholder:"请输入机器数量",style:{marginTop:4,width:"100%"},min:0,precision:0})}];return n.createElement("div",null,n.createElement((function(){var a=o((0,s.useState)({}),2),p=a[0],e=a[1];return n.createElement("div",null,n.createElement(t.QueryForm,{mode:"full",onChange:function(n){e(n)},columns:c}),n.createElement("h3",null,"结果："),n.createElement("div",null,JSON.stringify(p)))}),null))}}}}]);