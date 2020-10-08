import React from 'react';
import classNames from 'classnames';

export interface IEmptyLineProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  height?: number;
}

const EmptyLine = ({ height = 20, prefixCls = 'dantd', className, style }: IEmptyLineProps) => {
  const emptyLineClassName = classNames(`${prefixCls}-empty-line`, className);
  const emptyLineStyle = {
    height,
    ...style,
  };
  return <div className={emptyLineClassName} style={emptyLineStyle} />;
};

export default EmptyLine;
