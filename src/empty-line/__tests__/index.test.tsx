import React from 'react';
import { create, act } from 'react-test-renderer';
import EmptyLine from '../EmptyLine';

test('默认高度渲染正常', () => {
  const emptyLine = create(<EmptyLine />).toJSON();

  expect(emptyLine?.props.style).toEqual(
    expect.objectContaining({
      height: 20,
    }),
  );
});

test('自定义高度渲染正常', () => {
  let emptyLine: any;

  act(() => {
    emptyLine = create(<EmptyLine height={30} />);
  });

  expect(emptyLine.toJSON()?.props.style).toEqual(
    expect.objectContaining({
      height: 30,
    }),
  );
});
