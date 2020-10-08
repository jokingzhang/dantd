---
order: 2
title: 禁用
---

使用 `disabled` 属性，禁用组件。

```jsx
import { Switch, EmptyLine } from 'dantdv3';

ReactDOM.render(
  <div style={{
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    background: '#1890FF',
    padding: 10
  }}>
    <Switch disabled={true} size="small" />
    <EmptyLine />
    <Switch disabled={true} checkedChildren="中" unCheckedChildren="EN" />
    <EmptyLine />
    <Switch size="small" />
    <EmptyLine />
    <Switch checkedChildren="中" unCheckedChildren="EN" />
  </div>,
  mountNode,
);
```
