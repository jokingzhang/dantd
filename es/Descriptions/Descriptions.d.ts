import React from 'react';
export interface IDescriptionItem {
    title: string;
    content: string | string[];
}
export interface IDescriptionsProps {
    title?: string;
    dataSource: IDescriptionItem[];
}
declare const Descriptions: React.FC<IDescriptionsProps>;
export default Descriptions;
