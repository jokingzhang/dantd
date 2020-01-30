import React from 'react';

export interface IEmptyLineProps {
  height?: number;
}

const EmptyLine = ({ height = 20 }: IEmptyLineProps) => {
  return <div className="d-empty-line" style={{ height }} />;
};

export default EmptyLine;
