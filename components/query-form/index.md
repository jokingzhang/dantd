---
category: 组件
type: 数据录入
cols: 1
title: QueryForm
subtitle: 查询表单
---

## 何时使用

需要一个数据查询组件时使用，组件会自己管理状态并返回查询的数据。

## API


### BasicFormItems

| 参数       | 说明           | 类型                | 默认值 |
| :--------- | :------------- | :------------------ | :----- |
| columns | 表单列的配置描述，具体项见下表（必填） | ColumnProps | []     |
| searchText | 搜索按钮的文案 | string | React.ReactNode | 查询     |
| resetText | 重置按钮的文案 | string | React.ReactNode | 重置     |
| mode      | `FormItem` 的展示模式，`full`是占满整行，左对齐； `align` 会根据标题右对齐 | `['full', 'align']`              | `'full'`     |
| showOptionBtns | 是否展示右下角的「查询」「重置」按钮，以及「展开」「收起」 | boolean | true      |
| showCollapseButton | 是否展示右下角的「展开」「收起」 | boolean | true     |
| onChange | 表单的值改变时触发的回调 | Function(values, form) | - |
| onSearch | 点击查询按钮的回调 | Function(values, form) | - |
| onReset | 点击重置按钮的回调 | Function(form) | - |
| getFormInstance | 只用来获取Form实例的回调 | Function(form) | - |
| defaultCollapse | 是否默认「展开」 | boolean | true     |
| colConfig | Col 布局配置 | `{lg:number;md:number;xxl:number;xl:number;sm:number;xs:number}` | {xs:24,sm:24,md:12,lg:12,xl:8,xxl:6,} |
| antConfig | 使用 `Antd ConfigProvider` 进行的全局配置，需要通过这个属性传进来 | [ConfigProviderProps](https://github.com/ant-design/ant-design/blob/master/components/config-provider/index.tsx) | - |

### Columns

表单列的配置描述，目前支持 `['input', 'select', 'custom']` 这三种。

| 参数       | 说明           | 类型                | 默认值 |
| :--------- | :------------- | :------------------ | :----- |
| type      | 动态表单组件的类型，内置 `input`, `select`；也可以自定义  | `['input', 'select', 'custom']`              | -      |
| title      | 标题    | string              |  -      |
| dataIndex      | form表单的唯一标识，不可以重复   | string              |  -      |
| placeholder | 占位文案，默认会根据 `title` 自动生成 | string | -     |
| required | 是否对参数进行必填校验 | boolean | true      |
| initialValue | 表单的初始化值 | any | -      |
| formItemLayout | 表单的Layout | `{labelCol:{xs:{span:number},sm:{span:number},md:{span:number},lg:{span:number},xl:{span:number},xxl:{span:number}},wrapperCol:{xs:{span:number},sm:{span:number},md:{span:number},lg:{span:number},xl:{span:number},xxl:{span:number}}}` | `{labelCol:{xs:{span:5},sm:{span:5},md:{span:7},lg:{span:7},xl:{span:8},xxl:{span:8},},wrapperCol:{xs:{span:19},sm:{span:19},md:{span:17},lg:{span:17},xl:{span:16},xxl:{span:16},},}`     |
| rules | 自定义表单项的校验规则 | `object[]` | -      |
| size | 表单项的 `size` 属性 | `large` \| `default` \| `small` | `default`   |
| componentProps | `type="input|select"` 时，可以通过该属性 ant 组件的Props | any | -      |
| component | `type="custom"` 时，可以通过该属性传递 `React.ReactNode` |  React.ReactNode | -      |
| selectMode | `type="select"` 时的 `mode` 属性 | `default` \| `multiple` | `default`      |
| options | `type="select"` 时，通过该属性设置下拉选项 | {title: string;value: string;}[] | []      |