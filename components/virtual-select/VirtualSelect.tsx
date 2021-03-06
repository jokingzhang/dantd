import React from 'react';
import * as PropTypes from 'prop-types';
import { Icon } from 'antd';
import { ConfigConsumer, ConfigConsumerProps, RenderEmptyHandler } from 'antd/es/config-provider';
import omit from 'omit.js';
import RcSelect, { Option, OptGroup, SelectProps as RcSelectProps } from 'rc-select';
import warning from 'antd/es/_util/warning';
import { tuple } from 'antd/es/_util/type';
import classNames from 'classnames';

const SelectSizes = tuple('default', 'large', 'small');
export type SizeType = 'small' | 'middle' | 'large' | undefined;

export interface AbstractSelectProps {
  prefixCls?: string;
  className?: string;
  showAction?: string | string[];
  size?: typeof SelectSizes[number];
  notFoundContent?: React.ReactNode | null;
  transitionName?: string;
  choiceTransitionName?: string;
  showSearch?: boolean;
  allowClear?: boolean;
  disabled?: boolean;
  showArrow?: boolean;
  style?: React.CSSProperties;
  tabIndex?: number;
  placeholder?: string | React.ReactNode;
  defaultActiveFirstOption?: boolean;
  dropdownClassName?: string;
  dropdownStyle?: React.CSSProperties;
  dropdownMenuStyle?: React.CSSProperties;
  dropdownMatchSelectWidth?: boolean;
  onSearch?: (value: string) => void;
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  filterOption?:
    | boolean
    | ((inputValue: string, option: React.ReactElement<OptionProps>) => boolean);
  id?: string;
  defaultOpen?: boolean;
  open?: boolean;
  onDropdownVisibleChange?: (open: boolean) => void;
  autoClearSearchValue?: boolean;
  dropdownRender?: (menu?: React.ReactNode, props?: RcSelectProps) => React.ReactNode;
  loading?: boolean;
}

export interface LabeledValue {
  key: string;
  label: React.ReactNode;
}

export type SelectValue = string | string[] | number | number[] | LabeledValue | LabeledValue[];

// export interface InternalSelectProps<VT> extends Omit<RcSelectProps<VT>, 'mode'> {
//   suffixIcon?: React.ReactNode;
//   size?: SizeType;
//   mode?: 'multiple' | 'tags' | 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
//   bordered?: boolean;
// }

const ModeOptions = tuple(
  'default',
  'multiple',
  'tags',
  'combobox',
  'SECRET_COMBOBOX_MODE_DO_NOT_USE',
);
export type ModeOption = typeof ModeOptions[number];
export interface SelectProps<T = SelectValue> extends AbstractSelectProps {
  value?: T;
  defaultValue?: T;
  mode?: ModeOption;
  theme?: 'dark';
  optionLabelProp?: string;
  firstActiveValue?: string | string[];
  onChange?: (value: T, option: React.ReactElement<any> | React.ReactElement<any>[]) => void;
  onSelect?: (value: T extends (infer I)[] ? I : T, option: React.ReactElement<any>) => void;
  onDeselect?: (value: T extends (infer I)[] ? I : T) => void;
  onBlur?: (value: T) => void;
  onFocus?: () => void;
  onPopupScroll?: React.UIEventHandler<HTMLDivElement>;
  onInputKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLInputElement>) => void;
  maxTagCount?: number;
  maxTagTextLength?: number;
  maxTagPlaceholder?: React.ReactNode | ((omittedValues: T[]) => React.ReactNode);
  optionFilterProp?: string;
  labelInValue?: boolean;
  tokenSeparators?: string[];
  getInputElement?: () => React.ReactElement<any>;
  autoFocus?: boolean;
  suffixIcon?: React.ReactNode;
  removeIcon?: React.ReactNode;
  clearIcon?: React.ReactNode;
  menuItemSelectedIcon?: React.ReactNode;
}

export interface OptionProps {
  disabled?: boolean;
  value?: string | number;
  title?: string;
  label?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface OptGroupProps {
  label?: React.ReactNode;
}

export interface SelectLocale {
  notFoundContent?: string;
}

const SelectPropTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(SelectSizes),
  notFoundContent: PropTypes.any,
  showSearch: PropTypes.bool,
  optionLabelProp: PropTypes.string,
  transitionName: PropTypes.string,
  choiceTransitionName: PropTypes.string,
  id: PropTypes.string,
};

export default class Select<T = SelectValue> extends React.Component<SelectProps<T>, {}> {
  static Option = (Option as unknown) as React.ClassicComponentClass<OptionProps>;

  static OptGroup = (OptGroup as unknown) as React.ClassicComponentClass<OptGroupProps>;

  static SECRET_COMBOBOX_MODE_DO_NOT_USE: ModeOption = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';

  static defaultProps = {
    showSearch: false,
    transitionName: 'slide-up',
    choiceTransitionName: 'zoom',
  };

  static propTypes = SelectPropTypes;

  private rcSelect: any;

  constructor(props: SelectProps<T>) {
    super(props);

    warning(
      props.mode !== 'combobox',
      'Select',
      'The combobox mode is deprecated, ' +
        'it will be removed in next major version, ' +
        'please use AutoComplete instead',
    );
  }

  getNotFoundContent(renderEmpty: RenderEmptyHandler) {
    const { notFoundContent } = this.props;
    if (notFoundContent !== undefined) {
      return notFoundContent;
    }

    if (this.isCombobox()) {
      return null;
    }

    return renderEmpty('Select');
  }

  saveSelect = (node: any) => {
    this.rcSelect = node;
  };

  focus() {
    this.rcSelect.focus();
  }

  blur() {
    this.rcSelect.blur();
  }

  getMode = () => {
    const { mode } = this.props;

    if ((mode as any) === 'combobox') {
      return undefined;
    }

    if (mode === Select.SECRET_COMBOBOX_MODE_DO_NOT_USE) {
      return 'combobox';
    }

    return mode;
  };

  isCombobox() {
    const { mode } = this.props;
    return mode === 'combobox' || mode === Select.SECRET_COMBOBOX_MODE_DO_NOT_USE;
  }

  renderSuffixIcon(prefixCls: string) {
    const { loading, suffixIcon } = this.props;
    if (suffixIcon) {
      return React.isValidElement<{ className?: string }>(suffixIcon)
        ? React.cloneElement(suffixIcon, {
            className: classNames(suffixIcon.props.className, `${prefixCls}-arrow-icon`),
          })
        : suffixIcon;
    }
    if (loading) {
      return <Icon type="loading" />;
    }
    return <Icon type="down" className={`${prefixCls}-arrow-icon`} />;
  }

  renderSelect = ({
    getPopupContainer: getContextPopupContainer,
    renderEmpty,
  }: ConfigConsumerProps) => {
    const {
      prefixCls: customizePrefixCls,
      className = '',
      dropdownClassName = '',
      size,
      theme,
      getPopupContainer,
      removeIcon,
      clearIcon,
      menuItemSelectedIcon,
      showArrow,
      ...restProps
    } = this.props;
    const rest = omit(restProps, ['inputIcon' as any]);

    // const prefixCls = getPrefixCls('select', customizePrefixCls);
    const prefixCls = `${customizePrefixCls || 'dantd'}-virtual-select`;

    const cls = classNames(
      {
        [`${prefixCls}-lg`]: size === 'large',
        [`${prefixCls}-sm`]: size === 'small',
        [`${prefixCls}-show-arrow`]: showArrow,
        dark: theme === 'dark',
      },
      className,
    );

    const dropdownCls = classNames(
      {
        dark: theme === 'dark',
      },
      dropdownClassName,
    );

    let { optionLabelProp } = this.props;
    if (this.isCombobox()) {
      // children 带 dom 结构时，无法填入输入框
      optionLabelProp = optionLabelProp || 'value';
    }

    const mode = this.getMode();

    // const isMultiple = mode === 'multiple' || mode === 'tags';

    const finalRemoveIcon = (removeIcon &&
      (React.isValidElement<{ className?: string }>(removeIcon)
        ? React.cloneElement(removeIcon, {
            className: classNames(removeIcon.props.className, `${prefixCls}-remove-icon`),
          })
        : removeIcon)) || <Icon type="close" className={`${prefixCls}-remove-icon`} />;

    const finalClearIcon = (clearIcon &&
      (React.isValidElement<{ className?: string }>(clearIcon)
        ? React.cloneElement(clearIcon, {
            className: classNames(clearIcon.props.className, `${prefixCls}-clear-icon`),
          })
        : clearIcon)) || (
      <Icon type="close-circle" theme="filled" className={`${prefixCls}-clear-icon`} />
    );

    const finalMenuItemSelectedIcon = (menuItemSelectedIcon &&
      (React.isValidElement<{ className?: string }>(menuItemSelectedIcon)
        ? React.cloneElement(menuItemSelectedIcon, {
            className: classNames(
              menuItemSelectedIcon.props.className,
              `${prefixCls}-selected-icon`,
            ),
          })
        : menuItemSelectedIcon)) || <Icon type="check" className={`${prefixCls}-selected-icon`} />;

    return (
      <RcSelect
        inputIcon={this.renderSuffixIcon(prefixCls)}
        removeIcon={finalRemoveIcon}
        clearIcon={finalClearIcon}
        menuItemSelectedIcon={finalMenuItemSelectedIcon}
        showArrow={showArrow}
        mode={mode as any}
        {...rest}
        prefixCls={prefixCls}
        className={cls}
        dropdownClassName={dropdownCls}
        optionLabelProp={optionLabelProp || 'children'}
        notFoundContent={this.getNotFoundContent(renderEmpty)}
        getPopupContainer={getPopupContainer || getContextPopupContainer}
        ref={this.saveSelect}
      />
    );
  };

  render() {
    return <ConfigConsumer>{this.renderSelect}</ConfigConsumer>;
  }
}
