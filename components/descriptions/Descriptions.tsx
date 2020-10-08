import React from 'react';
import classNames from 'classnames';

export interface IDescriptionItem {
  title?: string | number | React.ReactNode;
  content?: string | number | React.ReactNode;
  mainTitle?: string | number | React.ReactNode;
}

export interface IDescriptionsProps {
  prefixCls?: string;
  className?: string;
  bordered?: boolean;
  style?: React.CSSProperties;
  title?: string;
  showColon?: boolean;
  titleWidth?: number | string;
  itemTitleStyle?: React.CSSProperties;
  itemContentStyle?: React.CSSProperties;
  dataSource: IDescriptionItem[];
}

const Descriptions: React.FC<IDescriptionsProps> = (props) => {
  const prefixCls = `${props.prefixCls || 'dantd'}-desc`;
  const {
    itemTitleStyle = {},
    itemContentStyle = {},
    className,
    bordered = false,
    style,
    showColon = false,
  } = props;
  const descClassName = classNames(prefixCls, bordered && `${prefixCls}-bordered`, className);
  const wrapperStyle = {
    ...style,
  };
  const defaultTitleWidth = 80;
  const titleStyle = {
    width: props.titleWidth ? props.titleWidth : defaultTitleWidth,
  };

  const itemTitleClassName = classNames(
    `${prefixCls}-item-title`,
    showColon && `${prefixCls}-item-title-colon`,
  );

  const localItemTitleStyle = {
    width: props.titleWidth ? props.titleWidth : defaultTitleWidth,
    ...itemTitleStyle,
  };

  const dataSource = props.dataSource ? props.dataSource : [];

  return (
    <div className={descClassName} style={wrapperStyle}>
      {dataSource.length === 0 && '- -'}
      {props.title && (
        <h3 style={titleStyle} className={`${prefixCls}-title`}>
          {props.title}
        </h3>
      )}
      {dataSource.map((dataItem, dataItemIdx) => {
        return dataItem.mainTitle ? (
          <div key={`${prefixCls}-${dataItemIdx}`} className={`${prefixCls}-item`}>
            <div style={localItemTitleStyle} className={`${prefixCls}-item-main-title`}>
              {dataItem.mainTitle}
            </div>
          </div>
        ) : (
          <div key={`${prefixCls}-${dataItemIdx}`} className={`${prefixCls}-item`}>
            <div style={localItemTitleStyle} className={itemTitleClassName}>
              {dataItem.title ? dataItem.title : '- -'}
            </div>
            <div style={itemContentStyle} className={`${prefixCls}-item-content`}>
              {dataItem.content ? dataItem.content : '- -'}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Descriptions;
