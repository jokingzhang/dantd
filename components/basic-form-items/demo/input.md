---
order: 0
title: Input
---

这是一个基础的动态表单，可以使用 `dataSource` 来设置初始值。

```jsx
import React, {useState} from 'react';
import { BasicFormItems, EmptyLine } from 'dantdv3';
import { processBasicFormItemsData } from 'dantdv3/utils';
import { Form, Button } from 'antd';

const Demo = props => {
  const { form } = props;
  const [results, setResults] = useState();
  const handleSubmit = () => {
    const {
      form: { validateFields },
    } = props;

    validateFields(async (errors, values) => {
      if (errors) {
        return;
      }

      setResults(JSON.stringify(processBasicFormItemsData(values)));
    });
  };
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <BasicFormItems          
        fieldName="inputParams"
        form={form}
        columns={[
          {
            type: 'input',
            title: '自定义Value',
            required: true,
          },
        ]} 
      />
      <EmptyLine height={60} />
      <Button
        type="primary"
        onClick={handleSubmit}
      >
        提交
      </Button>
      <EmptyLine />
      {results}
    </div>
  );
}

const BasicDemoForm = Form.create({ name: 'basic-form' })(Demo);

ReactDOM.render(<BasicDemoForm />, mountNode);
```
