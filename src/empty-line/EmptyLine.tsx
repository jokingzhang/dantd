import React from 'react';
import './style/index.less';

export interface IEmptyLineProps {
  height?: number;
}

const EmptyLine = ({ height = 20 }: IEmptyLineProps) => {
  return <div className="d-empty-line" style={{ height }} />;
};

export default EmptyLine;
