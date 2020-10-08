---
order: 4
title: 大数据
---

大数据，虚拟滚动。

```jsx
import { VirtualSelect as Select } from 'dantdv3';

const { Option } = Select;

const bigOptions = [] as any[];
for (let i = 0; i < 10000; i++) {
  bigOptions.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

ReactDOM.render(
  <Select
    showSearch
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="Please select"
    defaultValue={['a10', 'c12']}
    onChange={handleChange}
  >
    {bigOptions}
  </Select>,
  mountNode,
);
```
