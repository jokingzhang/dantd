import React, { useState } from 'react';
import { Form, Button, InputNumber } from 'antd';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, cleanup } from '@testing-library/react';
import BasicFormItems from '../BasicFormItems';
import { processBasicFormItemsData } from '../../utils';

describe('Basic Forms Testing Custom', () => {
  afterEach(cleanup);
  it('输入，提交校验', async () => {
    const Demo = (props) => {
      const { form } = props;
      const [results, setResults] = useState('');
      const customDataSource = [['张三', 23, '程序员']];
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
                  <InputNumber
                    data-testid="input-number"
                    style={{ marginTop: 4, width: '100%' }}
                    min={0}
                    precision={0}
                  />
                ),
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

          <Button data-testid="btn-submit" type="primary" onClick={handleSubmit}>
            提交
          </Button>
          {results}
        </div>
      );
    };

    const BasicDemoForm = Form.create({ name: 'basic-form' })(Demo);
    const { findByText, findAllByTestId, getByTestId } = render(<BasicDemoForm />);
    const addBtn = getByTestId('btn-add');
    // 增加1次
    fireEvent.click(addBtn);
    const rowElements = await findAllByTestId('row');
    expect(rowElements).toHaveLength(2);

    // 输入
    const inputElements = await findAllByTestId('field-input');
    const inputEle = inputElements[inputElements.length - 1];
    fireEvent.change(inputEle, { target: { value: '李四' } });

    // 选择第二个选项
    const selectElements = await findAllByTestId('select');
    fireEvent.click(selectElements[selectElements.length - 1]);
    const optionElements = await findAllByTestId('select-option');
    fireEvent.click(optionElements[1]);

    // 输入
    const numberElements = await findAllByTestId('input-number');
    const numberEle = numberElements[numberElements.length - 1];
    fireEvent.change(numberEle, { target: { value: 25 } });

    // 提交
    const submitBtn = getByTestId('btn-submit');
    fireEvent.click(submitBtn);

    await findByText('{"customParams":[["张三",23,"程序员"],["李四",25,"产品经理"]]}');
  });
});
