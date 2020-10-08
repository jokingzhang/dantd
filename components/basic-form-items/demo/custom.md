---
order: 3
title: Custom
---

当 `type=custom` 时，可以通过 `component` 属性传入组件

```jsx
import React, {useState} from 'react';
import { BasicFormItems, EmptyLine } from 'dantdv3';
import { processBasicFormItemsData } from 'dantdv3/utils';
import { Form, Button, DatePicker, InputNumber } from 'antd';
import moment from 'moment';

const Demo = props => {
  const { form } = props;
  const [results, setResults] = useState();
  const customDataSource = [['张三', 23, moment('1996-12-23'), '程序员']];
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
        fieldName="customParams"
        form={form}
        dataSource={customDataSource}
        columns={[
          {
            type: 'input',
            title: '姓名',
            required: true,
          },
          {
            type: 'custom',
            title: '年龄',
            required: true,
            component: (
              <InputNumber style={{ marginTop: 4, width: '100%' }} min={0} precision={0} />
            ),
          },
          {
            type: 'custom',
            title: '生日',
            required: true,
            component: <DatePicker style={{ marginTop: 4, width: '100%' }} />,
          },
          {
            type: 'select',
            title: '职业',
            required: true,
            selectOptions: [
              {
                title: '程序员',
                value: '程序员',
              },
              {
                title: '产品经理',
                value: '产品经理',
              },
              {
                title: '设计师',
                value: '设计师',
              },
            ],
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
