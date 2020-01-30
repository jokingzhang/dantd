import React from 'react';
import { CardProps } from 'antd/lib/card';
export interface IDCardProps {
    antdProps?: CardProps;
    copyText?: string;
    children?: React.ReactNode;
}
declare const DCard: React.FC<IDCardProps>;
export default DCard;
