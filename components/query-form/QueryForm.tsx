import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { ConfigProviderProps } from 'antd/es/config-provider';
import { FormComponentProps } from 'antd/lib/form';
import useAntdMediaQuery from './use-media-antd-query';
import { Button, Input, Form, Icon, Row, Col, Select, ConfigProvider } from 'antd';
import { useIntl } from '../locale-provider';
import useDeepCompareEffect from '../use-deep-compare-effect';
import { ModeOption } from 'antd/es/select';

declare const ItemSizes: ['large', 'default', 'small', string];
export declare type ItemSize = typeof ItemSizes[number];

declare const ColumnTypes: ['select', 'input', 'custom', string];
export declare type ColumnType = typeof ColumnTypes[number];

declare const ModeTypes: ['full', 'align', string];
export declare type ModeType = typeof ModeTypes[number];

declare const ValueTypes: ['query', 'object', string];
export declare type ValueType = typeof ValueTypes[number];

const FormItem = Form.Item;
const { Option } = Select;

export interface IColumnsType {
  type: ColumnType;
  dataIndex: string;
  title: string | React.ReactNode;
  placeholder?: string;
  required?: boolean;
  initialValue?: any;
  size?: ItemSize;
  rules?: any[]; // 校验规则
  component?: React.ReactNode;
  componentProps?: any; // 需要传给组件的其他属性
  selectMode?: ModeOption | string; // 单选或者多选
  options?: {
    title: string;
    value: string | number;
  }[];
  // showColon?: boolean;
  formItemLayout?: any;
}

export interface IQueryFormProps extends FormComponentProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  mode?: ModeType;
  valueType?: ValueType;
  columns: IColumnsType[];
  searchText?: string | React.ReactNode;
  resetText?: string | React.ReactNode;
  showOptionBtns?: boolean;
  showCollapseButton?: boolean;
  onChange?: (data: any, form: any) => any;
  onSearch?: (data: any, form: any) => any;
  onReset?: (data: any, form: any) => any;
  getFormInstance?: (form: any) => any;
  antConfig?: {} & ConfigProviderProps;
  defaultCollapse?: boolean;
  colConfig?:
    | {
        lg: number;
        md: number;
        xxl: number;
        xl: number;
        sm: number;
        xs: number;
      }
    | undefined;
}

const defaultColConfig = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 8,
  xxl: 6,
};

const defaultFormItemLayout = {
  labelCol: {
    xs: { span: 5 },
    sm: { span: 5 },
    md: { span: 7 },
    lg: { span: 7 },
    xl: { span: 8 },
    xxl: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 19 },
    sm: { span: 19 },
    md: { span: 17 },
    lg: { span: 17 },
    xl: { span: 16 },
    xxl: { span: 16 },
  },
};

/**
 * 合并用户和默认的配置
 * @param span
 * @param size
 */
const getSpanConfig = (
  span: number | typeof defaultColConfig,
  size: keyof typeof defaultColConfig,
): number => {
  if (typeof span === 'number') {
    return span;
  }
  const config = {
    ...defaultColConfig,
    ...span,
  };
  return config[size];
};

/**
 * 获取最后一行的 offset，保证在最后一列
 * @param length
 * @param span
 */
const getOffset = (length: number, span: number = 8) => {
  const cols = 24 / span;
  return (cols - 1 - (length % cols)) * span;
};

const getCollapseHideNum = (size: number) => {
  const maps = {
    6: 3,
    8: 2,
    12: 1,
    24: 1,
  };

  return maps[size] || 1;
};

const QueryForm = (props: IQueryFormProps) => {
  const prefixCls = `${props.prefixCls || 'dantd'}-query-form`;
  const { t } = useIntl();
  // const renderTimes = useRef(0);
  const {
    className,
    style,
    form,
    colConfig,
    searchText,
    resetText,
    showOptionBtns = true,
    showCollapseButton = true,
    defaultCollapse = false,
    onChange,
    onSearch,
    onReset,
    getFormInstance,
    columns = [] as IColumnsType[],
    mode = 'full',
    // valueType = 'object',
  } = props;

  const wrapperClassName = classNames(prefixCls, className);
  const formItemCls = classNames({
    [`${prefixCls}-formitem`]: true,
    [`${prefixCls}-formitem-full`]: mode === 'full',
  });
  const windowSize = useAntdMediaQuery();
  const itemColConfig = colConfig || defaultColConfig;
  const [colSize, setColSize] = useState(getSpanConfig(itemColConfig || 8, windowSize));
  const { getFieldDecorator, validateFields, getFieldsValue, resetFields } = form;
  const [collapsed, setCollapse] = useState(defaultCollapse);
  const fieldsValue = getFieldsValue();

  useEffect(() => {
    setColSize(getSpanConfig(itemColConfig || 8, windowSize));
  }, [windowSize]);

  useEffect(() => {
    if (getFormInstance) {
      getFormInstance(form);
    }
  }, []);

  useDeepCompareEffect(() => {
    if (onChange && Object.keys(fieldsValue).length > 0) {
      onChange(fieldsValue, form);
    }
  }, [fieldsValue]);

  const collapseHideNum = getCollapseHideNum(getSpanConfig(itemColConfig || 8, windowSize));

  const renderInputItem = (colItem) => {
    const {
      initialValue,
      dataIndex,
      title,
      required,
      componentProps = {},
      placeholder,
      formItemLayout,
      rules,
      size = 'default',
    } = colItem;

    const itemPlaceholder = placeholder ? placeholder : t('form.placeholder.prefix');

    let itemRules: any[] = [];
    if (required) {
      itemRules = [
        {
          required: true,
          message: itemPlaceholder,
        },
      ];
    }

    const itemFormItemLayout = formItemLayout || mode === 'align' ? defaultFormItemLayout : {};

    return (
      <FormItem label={title} className={formItemCls} {...itemFormItemLayout}>
        {getFieldDecorator(dataIndex as string, {
          initialValue,
          rules: rules || itemRules,
        })(
          <Input
            data-testid="field-input"
            size={size}
            placeholder={itemPlaceholder}
            {...componentProps}
          />,
        )}
      </FormItem>
    );
  };

  const renderSelectItem = (colItem) => {
    const {
      initialValue,
      dataIndex,
      title,
      required,
      placeholder,
      selectMode = 'single',
      rules,
      formItemLayout,
      options = [],
      componentProps = {},
      size = 'default',
    } = colItem;
    const itemPlaceholder = placeholder ? (
      placeholder
    ) : (
      <>
        {t('form.selectplaceholder.prefix')}
        &nbsp;
        {title}
      </>
    );

    let itemRules: any[] = [];
    if (required) {
      itemRules = [
        {
          required: true,
          message: itemPlaceholder,
        },
      ];
    }

    const itemFormItemLayout = formItemLayout || mode === 'align' ? defaultFormItemLayout : {};

    return (
      <FormItem label={title} className={formItemCls} {...itemFormItemLayout}>
        {getFieldDecorator(dataIndex as string, {
          initialValue,
          rules: rules || itemRules,
        })(
          <Select
            data-testid="select"
            mode={selectMode}
            size={size}
            allowClear
            placeholder={itemPlaceholder}
            showSearch={true}
            style={{ width: '100%' }}
            {...componentProps}
          >
            {options.map((option) => {
              return (
                <Option data-testid="select-option" value={option.value}>
                  {option.title}
                </Option>
              );
            })}
          </Select>,
        )}
      </FormItem>
    );
  };

  const renderCustomItem = (colItem) => {
    const {
      initialValue,
      formItemLayout,
      dataIndex,
      title,
      required,
      placeholder,
      rules,
      component,
    } = colItem;

    const itemPlaceholder = placeholder ? (
      placeholder
    ) : (
      <>
        {t('form.placeholder.prefix')}
        &nbsp;
        {title}
      </>
    );

    let itemRules: any[] = [];
    if (required) {
      itemRules = [
        {
          required: true,
          message: itemPlaceholder,
        },
      ];
    }

    const itemFormItemLayout = formItemLayout || mode === 'align' ? defaultFormItemLayout : {};

    return (
      <FormItem label={title} className={formItemCls} {...itemFormItemLayout}>
        {getFieldDecorator(dataIndex as string, {
          initialValue,
          rules: rules || itemRules,
        })(component)}
      </FormItem>
    );
  };

  const renderOptionBtns = () => {
    const offsetVal = collapsed
      ? columns.length <= collapseHideNum
        ? getOffset(columns.length, colSize)
        : getOffset(collapseHideNum, colSize)
      : getOffset(columns.length, colSize);
    return (
      <Col {...itemColConfig} offset={offsetVal} key="option" className={`${prefixCls}-option`}>
        <Form.Item>
          <span>
            <Button onClick={handleReset}>{resetText || t('queryform.reset')}</Button>
            <Button
              onClick={handleSearch}
              style={{ marginLeft: 10 }}
              type="primary"
              htmlType="submit"
            >
              {searchText || t('queryform.search')}
            </Button>
            {showCollapseButton && (
              <a
                style={{
                  marginLeft: 10,
                  display: 'inline-block',
                }}
                onClick={() => {
                  setCollapse(!collapsed);
                }}
              >
                {collapsed ? t('queryform.expand') : t('queryform.collapsed')}
                <Icon
                  type="down"
                  style={{
                    marginLeft: '0.5em',
                    transition: '0.3s all',
                    transform: `rotate(${collapsed ? 0 : 0.5}turn)`,
                  }}
                />
              </a>
            )}
          </span>
        </Form.Item>
      </Col>
    );
  };

  const handleSearch = () => {
    validateFields(async (errors, values) => {
      if (errors) {
        return;
      }

      if (onSearch) {
        onSearch(values, form);
      }
    });
  };

  const handleReset = () => {
    resetFields();
    setTimeout(() => {
      if (onReset) {
        onReset(getFieldsValue(), form);
      }
    });
  };

  return (
    <ConfigProvider {...props.antConfig}>
      <div className={wrapperClassName} style={style}>
        <Row gutter={16} justify="start">
          {columns.map((colItem, colIndex) => {
            const itemHide = collapsed && collapseHideNum <= colIndex;
            return (
              <Col
                style={{
                  display: itemHide ? 'none' : 'block',
                }}
                key={`query-form-col-${colItem.dataIndex}-${colIndex}`}
                {...itemColConfig}
              >
                {colItem.type === 'input' && renderInputItem(colItem)}
                {colItem.type === 'select' && renderSelectItem(colItem)}
                {colItem.type === 'custom' && renderCustomItem(colItem)}
              </Col>
            );
          })}
          {showOptionBtns && renderOptionBtns()}
        </Row>
      </div>
    </ConfigProvider>
  );
};

export default Form.create<IQueryFormProps>()(QueryForm);
