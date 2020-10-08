---
order: 1
title: 切换状态
---

切换组件的`编辑`、`皮肤`、`语言` 等状态。

```jsx
import { useState } from 'react';
import { EmptyLine, Code, QueryForm } from 'dantdv3';
const codeStr = 'const twoSum = function(nums, target) {\n    const newNumsMap = new Map(nums.map((item, idx) => [item, idx]));\n\n    let result = [];\n    nums.forEach((numItem, numIndex) => {\n        const subItem = target - numItem;\n        if (newNumsMap.has(subItem) \&\& numIndex !== newNumsMap.get(subItem)) {\n            result = [newNumsMap.get(subItem), numIndex];\n        }\n    })\n    return result;\n};\n\nconst nums = [2, 7, 11, 15];\nconst target = 9;\n\nconsole.info(twoSum(nums, target));';

const columns = [
  {
    type: 'select',
    title: '主题',
    dataIndex: 'theme',
    initialValue: 'light',
    options: [
      {
        title: '默认模式（light）',
        value: 'light',
      },
      {
        title: '暗黑模式（dark）',
        value: 'dark',
      },
    ],
  },
  {
    type: 'select',
    title: '开发语言',
    dataIndex: 'language',
    initialValue: 'javascript',
    options: [
    {
        title: 'javascript',
        value: 'javascript'
    }, {
        title: 'css',
        value: 'css'
    }, {
        title: 'go',
        value: 'go'
    }, {
        title: 'markdown',
        value: 'markdown'
    }, {
        title: 'jsx',
        value: 'jsx'
    }, {
        title: 'java',
        value: 'java'
    }, {
        title: 'nginx',
        value: 'nginx'
    }, {
        title: 'php',
        value: 'php'
    }, {
        title: 'python',
        value: 'python'
    }, {
        title: 'shell',
        value: 'shell'
    }, {
        title: 'sql',
        value: 'sql'
    }, {
        title: 'xml',
        value: 'xml'
    }, {
        title: 'html',
        value: 'html'
    }]
  },
  {
    type: 'select',
    title: '是否可编辑',
    dataIndex: 'editable',
    initialValue: true,
    options: [
      {
        title: '详情（false）',
        value: false,
      },
      {
        title: '可编辑（true）',
        value: true,
      },
    ],
  },
];

const Demo: React.FC = () => {
  const [query, setQuery] = useState({
    theme: 'light',
    language: 'javascript',
    editable: true,
  });

  const [codeState, setCodeState] = useState(codeStr);

  const handleChange = queryValue => {
    setQuery(queryValue);
  };

  return (
    <div style={{
      background: '#f0f2f5',
      padding: 20,
    }}>
      <QueryForm 
        mode="full"
        onChange={handleChange} 
        columns={columns} 
      />
      <EmptyLine />
      <Code 
        height={350} 
        theme={query.theme} 
        language={query.language} 
        editable={query.editable} 
        value={codeState} 
        onChange={(val) => {
          setCodeState(val);
        }}
      />
    </div>
  );
}

ReactDOM.render(
  <div>
    <Demo />
  </div>,
  mountNode,
);
```
