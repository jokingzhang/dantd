import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { uuidv4 } from '../utils';

export type SwitchSize = 'small' | 'default';
export type SwitchChangeEventHandler = (checked: boolean, event: MouseEvent) => void;
export type SwitchClickEventHandler = SwitchChangeEventHandler;

export interface ISwitchProps {
  prefixCls?: string;
  size?: SwitchSize;
  className?: string;
  id?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: SwitchChangeEventHandler;
  onClick?: SwitchClickEventHandler;
  unCheckedChildren?: React.ReactNode;
  checkedChildren?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  autoFocus?: boolean;
  style?: React.CSSProperties;
}

function Switch(props: ISwitchProps) {
  const prefixCls = `${props.prefixCls || 'dantd'}-switch`;

  const switchClassName = classNames(
    prefixCls,
    {
      [`${prefixCls}-small`]: props.size === 'small',
      [`${prefixCls}-default`]: props.size !== 'small',
      [`${prefixCls}-disabled`]: !!props.disabled,
    },
    props.className,
  );

  const switchStyle = {
    ...props.style,
  };
  const id = props.id || `dantd-switch-${uuidv4()}`;
  let checked = false;
  if ('checked' in props) {
    checked = !!props.checked;
  } else {
    checked = !!props.defaultChecked;
  }

  const [checkedState, setChacked] = useState(checked);

  useEffect(() => {
    if ('checked' in props && props.checked !== checkedState && props.checked !== undefined) {
      setChacked(props.checked);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.checked]);

  const handleChange = (e) => {
    const { disabled, onChange, onClick } = props;
    if (disabled) {
      return;
    }
    if (!('checked' in props)) {
      setChacked(e.target.checked);
    }
    if (onChange) {
      onChange(e.target.checked, e);
    }
    if (onClick) {
      onClick(e.target.checked, e);
    }
  };

  return (
    <fieldset data-testid="switch-wrapper" className={switchClassName} style={switchStyle}>
      <input
        data-testid="switch-input"
        checked={checkedState}
        onChange={handleChange}
        type="checkbox"
        id={id}
      />
      <label data-testid="switch-label" htmlFor={id} className={`${prefixCls}-label`}>
        {props.size !== 'small' && (
          <>
            <div data-testid="content-left" className={`${prefixCls}-left-content`}>
              {(checkedState ? props.unCheckedChildren : props.checkedChildren) || ''}
            </div>
            <div data-testid="content-right" className={`${prefixCls}-right-content`}>
              {(checkedState ? props.checkedChildren : props.unCheckedChildren) || (
                <div style={{ fontSize: 0 }}>·</div>
              )}
            </div>
          </>
        )}
      </label>
    </fieldset>
  );
}
export default Switch;
