import React, { useState } from 'react';
import { Form, Button } from 'antd';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, cleanup } from '@testing-library/react';
import BasicFormItems from '../BasicFormItems';
import { processBasicFormItemsData } from '../../utils';

describe('Basic Forms Testing Input', () => {
  afterEach(cleanup);
  it('输入，提交校验', async () => {
    const Demo = (props) => {
      const { form } = props;
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
    // 增加3次
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    const inputElements = await findAllByTestId('field-input');
    // 输入
    inputElements.forEach((inputEle, inputIdx) => {
      fireEvent.change(inputEle, { target: { value: `test${inputIdx}` } });
    });
    const submitBtn = getByTestId('btn-submit');
    fireEvent.click(submitBtn);
    await findByText('{"inputParams":[["test0"],["test1"],["test2"]]}');
    const removeBtns = await findAllByTestId('btn-remove');
    fireEvent.click(removeBtns[0]);
    fireEvent.click(submitBtn);
    await findByText('{"inputParams":[["test1"],["test2"]]}');
  });
});
