---
order: 0
title: 基本
---

空行可以不传参数直接使用。增加文字或者组件之间的上下间距

```jsx
import { useState } from 'react';
import { QueryForm } from 'dantdv3';
import { InputNumber } from 'antd';

const columns = [
  {
    type: 'input',
    title: '实例名称',
    dataIndex: 'name',
  },
  {
    type: 'select',
    title: '报警等级',
    dataIndex: 'level',
    options: [
      {
        title: '全部',
        value: 'all',
      },
      {
        title: 'P0',
        value: 'p0',
      },
      {
        title: 'P1',
        value: 'p1',
      },
      {
        title: 'P2',
        value: 'p2',
      },
    ],
  },
  {
    type: 'select',
    title: '任务状态',
    dataIndex: 'status',
    selectMode: 'multiple',
    options: [
      {
        title: '进行中',
        value: 'processing',
      },
      {
        title: '成功',
        value: 'success',
      },
      {
        title: '失败',
        value: 'fail',
      },
    ],
  },
  {
    type: 'custom',
    title: '机器数量',
    dataIndex: 'number',
    component: (
      <InputNumber
        placeholder="请输入机器数量"
        style={{ marginTop: 4, width: '100%' }}
        min={0}
        precision={0}
      />
    ),
  },
];

const Demo: React.FC = () => {
  const [result, setResult] = useState({});
  const handleChange = queryValue => {
    setResult(queryValue);
  };

  return (
    <div>
      <QueryForm 
        mode="full"
        onChange={handleChange} 
        columns={columns} 
      />
      <h3>结果：</h3>
      <div>{JSON.stringify(result)}</div>
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
