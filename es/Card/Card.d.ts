import React from 'react';
import { CardProps } from 'antd/lib/card';
import 'antd/lib/card/style';
import 'antd/lib/typography/style';
import './style/index.css';
export interface IDCardProps {
    antdProps?: CardProps;
    copyText?: string;
    children?: React.ReactNode;
}
declare const DCard: React.FC<IDCardProps>;
export default DCard;
