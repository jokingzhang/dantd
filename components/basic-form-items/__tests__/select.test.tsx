import React, { useState } from 'react';
import { Form, Button } from 'antd';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, cleanup } from '@testing-library/react';
import BasicFormItems from '../BasicFormItems';
import { processBasicFormItemsData } from '../../utils';

describe('Basic Forms Testing Select', () => {
  afterEach(cleanup);
  it('输入，提交校验', async () => {
    const Demo = (props) => {
      const { form } = props;
      const dataSource = [
        ['显示器', '6'],
        ['主机', '2'],
      ];
      const [results, setResults] = useState('');
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
                type: 'select' as 'select',
                title: '电脑配件',
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
                type: 'input' as 'input',
                title: '数量',
                required: true,
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
    const { findByText, findByTestId, findAllByTestId, getByTestId } = render(<BasicDemoForm />);

    const rowElements = await findAllByTestId('row');
    expect(rowElements).toHaveLength(2);
    const addBtn = getByTestId('btn-add');
    // 增加1次
    fireEvent.click(addBtn);
    const newRowElements = await findAllByTestId('row');
    expect(newRowElements).toHaveLength(3);
    // 选择第一个选项
    const selectElements = await findAllByTestId('select');
    fireEvent.click(selectElements[selectElements.length - 1]);
    const optionElement = await findByTestId('select-option');
    fireEvent.click(optionElement);
    // 输入
    const inputElements = await findAllByTestId('field-input');
    const inputEle = inputElements[inputElements.length - 1];
    fireEvent.change(inputEle, { target: { value: 6 } });
    // 提交
    const submitBtn = getByTestId('btn-submit');
    fireEvent.click(submitBtn);
    await findByText('{"selectParams":[["显示器","6"],["主机","2"],["键盘","6"]]}');
  });
});
