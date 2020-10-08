import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Switch from '../switch';

describe('Switch Testing', () => {
  afterEach(cleanup);
  // works
  it('works', () => {
    const { getByTestId } = render(<Switch size="small" />);
    const input = getByTestId('switch-input');
    const label = getByTestId('switch-label');
    fireEvent.click(label);
    expect(input).toBeChecked();
  });
  // defaultChecked
  it('defaultChecked', () => {
    const { getByTestId } = render(<Switch defaultChecked={true} size="small" />);
    const input = getByTestId('switch-input');
    expect(input).toBeChecked();
  });
  // onChange & onClick
  it('onChange & onClick should called', () => {
    const onChange = jest.fn();
    const onClick = jest.fn();
    const { getByTestId } = render(<Switch onClick={onClick} onChange={onChange} size="small" />);
    const input = getByTestId('switch-input');
    fireEvent.click(input);
    expect(onChange).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalled();
  });
  // should not toggle when clicked in a disabled state
  it('should not toggle when clicked in a disabled state', () => {
    const { getByTestId } = render(<Switch disabled={true} size="small" />);
    const input = getByTestId('switch-input');
    const label = getByTestId('switch-label');
    fireEvent.click(label);
    expect(input).not.toBeChecked();
  });
  // unCheckedChildren & checkedChildren
  it('unCheckedChildren & checkedChildren', () => {
    const checkedChildren = '中';
    const unCheckedChildren = 'EN';
    const { getByTestId } = render(
      <Switch checkedChildren={checkedChildren} unCheckedChildren={unCheckedChildren} />,
    );
    const contentLeft = getByTestId('content-left');
    const contentRight = getByTestId('content-right');
    const label = getByTestId('switch-label');
    expect(contentLeft).toHaveTextContent(checkedChildren);
    expect(contentRight).toHaveTextContent(unCheckedChildren);
    fireEvent.click(label);
    expect(contentLeft).toHaveTextContent(unCheckedChildren);
    expect(contentRight).toHaveTextContent(checkedChildren);
  });
});
