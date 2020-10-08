(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1146:function(t,s){t.exports={content:["section",["h2","何时使用"],["p","快捷的动态增加、减少表单项。"]],meta:{category:"组件",type:"动态表单",title:"BasicFormItems",subtitle:"基础",filename:"components/basic-form-items/index.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","BasicFormItems"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","form"],["td","经 Form.create() 包装过的组件会自带 this.props.form 属性"],["td","object"],["td","-"]],["tr",["td","dataSource"],["td","初始参数"],["td","[",["span","string, string"],"...]"],["td","[]"]],["tr",["td","columns"],["td","表单列的配置描述，具体项见下表"],["td","ColumnProps"],["td","[]"]],["tr",["td","maxCount"],["td","最大数量"],["td","number"],["td","-"]],["tr",["td","fieldName"],["td","在 ",["code","form"]," 中的唯一 ",["code","key"],"，在同一个页面中需要保持唯一"],["td","string"],["td","-"]],["tr",["td","errorMessage"],["td","错误提示，会出现在组件底端"],["td","string ","|"," React.ReactNode"],["td","-"]],["tr",["td","size"],["td","组件的大小"],["td",["span","'large', 'default', 'small'"]],["td","string"],["td","'default'"]],["tr",["td","antConfig"],["td","使用 ",["code","Antd ConfigProvider"]," 进行的全局配置，需要通过这个属性传进来"],["td",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/config-provider/index.tsx"},"ConfigProviderProps"]],["td","-"]]]],["h3","Columns"],["p","表单列的配置描述，目前支持 ",["code","['input', 'select', 'custom']"]," 这三种。"],["blockquote",["p","在 ",["code",".tsx"]," 文件中，请使用 ",["code","'input' as 'input'"],"，来避免报错"]],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","type"],["td","动态表单组件的类型，内置 ",["code","input"],", ",["code","select"],"；也可以自定义"],["td",["code","['input', 'select', 'custom']"]],["td","-"]],["tr",["td","title"],["td","标题"],["td","string"],["td","-"]],["tr",["td","colSpan"],["td","默认会根据配置的长度，自动生成 ",["code","Col.span"],"；也可以手动设置"],["td","number"],["td","-"]],["tr",["td","placeholder"],["td","占位文案，默认会根据 ",["code","title"]," 自动生成"],["td","string"],["td","-"]],["tr",["td","required"],["td","是否对参数进行必填校验"],["td","boolean"],["td","true"]],["tr",["td","rules"],["td","自定义表单项的校验规则"],["td",["code","object[]"]],["td","-"]],["tr",["td","showColon"],["td","是否在改表单项后面添加冒号 ",["code",";"]],["td","boolean"],["td","false"]],["tr",["td","isSelectUniq"],["td",["code",'type="select"']," 时，通过该属性设置下拉选择是否唯一"],["td","boolean"],["td","false"]],["tr",["td","selectOptions"],["td",["code",'type="select"']," 时，通过该属性设置下拉选项"],["td","{title: string;value: string;}[]"],["td","[]"]],["tr",["td","component"],["td",["code",'type="custom"']," 时，可以通过该属性传递 ",["code","React.ReactNode"]],["td","React.ReactNode"],["td","-"]]]],["h3","处理表单数据"],["p","向后端提交数据时，由于使用",["code","useDynamicList"],"时，删除数据会在 也可以使用组件库提供的工具函数来快速处理"],["pre",{lang:null,highlighted:'import { processBasicFormItemsData } from <span class="token string">\'dantd/utils\'</span><span class="token comment" spellcheck="true">;</span>\n<span class="token keyword">const</span> values <span class="token operator">=</span> form<span class="token punctuation">.</span><span class="token function">getFieldsValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n<span class="token function">processBasicFormItemsData</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n<span class="token operator">/</span><span class="token operator">/</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>xxx<span class="token punctuation">,</span> xxx<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>'},["code","import { processBasicFormItemsData } from 'dantd/utils';\nconst values = form.getFieldsValue();\nprocessBasicFormItemsData(values);\n// [[xxx, xxx]...]"]]]}}}]);