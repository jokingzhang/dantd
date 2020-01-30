import React from 'react';
import { create, act } from 'react-test-renderer';
import Descriptions from '../Descriptions';
import { data1 } from '../mock';

test('列表渲染正常', () => {
  let comp: any;

  act(() => {
    comp = create(<Descriptions dataSource={data1} />);
  });

  expect(comp.toJSON()?.children.length).toEqual(data1.length);
});

test('空数据渲染正常', () => {
  let comp: any;

  act(() => {
    comp = create(<Descriptions dataSource={[]} />);
  });

  expect(comp.toJSON()?.children).toEqual(['- -']);
});
