import React from 'react';
// import classNames from 'classnames';
import { Card, Typography } from 'antd';
import { CardProps } from 'antd/lib/card';

const { Paragraph } = Typography;

export interface IDCardProps {
  antdProps?: CardProps;
  copyText?: string;
  children?: React.ReactNode;
}

const DCard: React.FC<IDCardProps> = ({ antdProps, copyText, children }) => {
  function renderRightExtra() {
    if (copyText) {
      return (
        <Paragraph style={{ marginBottom: 0 }} copyable>
          {copyText}
        </Paragraph>
      );
    }

    return false;
  }

  return (
    <div className="d-card">
      <Card extra={renderRightExtra()} {...antdProps}>
        {children}
      </Card>
    </div>
  );
};

export default DCard;
