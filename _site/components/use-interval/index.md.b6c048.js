(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1177:function(n,s){n.exports={content:["article",["h2","何时使用"],["p","一个定时器的hook，基于",["a",{title:null,href:"https://joshwcomeau.com/snippets/react-hooks/use-interval"},"Josh的文章"],"。\n可以通过将延迟设置为null来暂停时间间隔。\n当组件卸载的时候，会自动清除定时器。\n也可以通过 ",["code","window.clearInterval"]," 来强行停止定制器。"],["h3","关于 Antd 的 Tab 组件"],["p","但是一般不推荐这么做，比如 ",["code","Antdv3"]," 的 ",["a",{title:null,href:"https://ant-design-3x.gitee.io/components/tabs-cn/"},"Tab"]," 组件，\n可以添加 ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/15102"},"destroyInactiveTabPane"]," 属性，当切换Tab时，自动卸载Tab里面的东西即可。"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> useInterval <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'dantd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> IntervalDemo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>status<span class="token punctuation">,</span> setStatus<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">\'running\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>timeElapsed<span class="token punctuation">,</span> setTimeElapsed<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">useInterval</span><span class="token punctuation">(</span>\n    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token function">setTimeElapsed</span><span class="token punctuation">(</span>timeElapsed <span class="token operator">=</span><span class="token operator">></span> timeElapsed <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    status <span class="token operator">===</span> <span class="token string">\'running\'</span> <span class="token operator">?</span> <span class="token number">1000</span> <span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> toggle <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeElapsed</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">setStatus</span><span class="token punctuation">(</span>status <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>status <span class="token operator">===</span> <span class="token string">\'running\'</span> <span class="token operator">?</span> <span class="token string">\'idle\'</span> <span class="token punctuation">:</span> <span class="token string">\'running\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> stop <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    window<span class="token punctuation">.</span><span class="token function">clearInterval</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span><span class="token operator">></span>\n      Time Elapsed<span class="token punctuation">:</span> <span class="token punctuation">{</span>timeElapsed<span class="token punctuation">}</span> <span class="token function">second</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>toggle<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>status <span class="token operator">===</span> <span class="token string">\'running\'</span> <span class="token operator">?</span> <span class="token string">\'Stop\'</span> <span class="token punctuation">:</span> <span class="token string">\'Start\'</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>stop<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>强行停止<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","import { useInterval } from 'dantd';\nimport { Button } from 'antd';\n\nconst IntervalDemo = () => {\n  const [status, setStatus] = React.useState('running');\n  const [timeElapsed, setTimeElapsed] = React.useState(0);\n  const instance = useInterval(\n    () => {\n      setTimeElapsed(timeElapsed => timeElapsed + 1);\n    },\n    status === 'running' ? 1000 : null,\n  );\n  const toggle = () => {\n    setTimeElapsed(0);\n    setStatus(status => (status === 'running' ? 'idle' : 'running'));\n  };\n\n  const stop = () => {\n    window.clearInterval(instance);\n  };\n  return (\n    <>\n      Time Elapsed: {timeElapsed} second(s) <br />\n      <Button onClick={toggle}>{status === 'running' ? 'Stop' : 'Start'}</Button>\n      <Button onClick={stop}>强行停止</Button>\n    </>\n  );\n};"]],["p","copy 自 ",["a",{title:null,href:"https://joshwcomeau.com/snippets/react-hooks/use-interval"},"useInterval"]]],meta:{category:"自定义Hook",cols:1,type:"hook",title:"useInterval",subtitle:"定时器",filename:"components/use-interval/index.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]]]}}}]);