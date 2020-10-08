---
order: 1
title: 文本
---

使用 `checkedChildren` 和 `unCheckedChildren`，传入中英文的文案。

```jsx
import { Switch } from 'dantdv3';

ReactDOM.render(
  <div className="p-switch-wrapper">
    <Switch checkedChildren="中" unCheckedChildren="EN" />
  </div>,
  mountNode,
);
```
