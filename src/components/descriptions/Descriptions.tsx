import React from 'react';

import './style/index.less';

export interface IDescriptionItem {
  title: string;
  content: string | string[];
}

export interface IDescriptionsProps {
  title?: string;
  dataSource: IDescriptionItem[];
}

const Descriptions: React.FC<IDescriptionsProps> = props => {
  function renderEmpty(content: string | string[]) {
    if (!content || (Array.isArray(content) && content.length === 0)) {
      return '暂无数据';
    }
    return null;
  }
  return (
    <div className="d-desc">
      {props.title && <div className="title">{props.title}</div>}
      {props.dataSource.map(dataItem => {
        return (
          <div key={`desc-${dataItem.title}`} className="item">
            <div className="item-title">{dataItem.title}</div>
            <div className="item-content">
              {renderEmpty(dataItem.content)}
              {typeof dataItem.content === 'string'
                ? dataItem.content
                : dataItem.content.join('，')}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Descriptions;
