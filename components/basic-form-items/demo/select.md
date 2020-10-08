---
order: 2
title: Select
---

当 `type=select` 时，可以通过 `selectOptions` 属性传入下拉选项


```jsx
import React, {useState} from 'react';
import { BasicFormItems, EmptyLine } from 'dantdv3';
import { processBasicFormItemsData } from 'dantdv3/utils';
import { Form, Button } from 'antd';



const Demo = props => {
  const { form } = props;
  const [results, setResults] = useState();
  const dataSource = [
    ['显示器', 6, 5000],
    ['主机', 2, 15000],
  ];
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
        fieldName="selectParams"
        form={form}
        dataSource={dataSource}
        maxCount={3}
        columns={[
          {
            type: 'select',
            title: '电脑配件',
            showColon: true,
            isSelectUniq: true,
            required: true,
            selectOptions: [
              {
                title: '显示器',
                value: '显示器',
              },
              {
                title: '主机',
                value: '主机',
              },
              {
                title: '键盘',
                value: '键盘',
              },
            ],
          },
          {
            type: 'input',
            title: '数量',
            required: true,
          },
          {
            type: 'input',
            title: '价格',
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
