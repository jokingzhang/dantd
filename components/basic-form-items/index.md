---
category: 组件
type: 动态表单
title: BasicFormItems
subtitle: 基础
---

## 何时使用

快捷的动态增加、减少表单项。



## API

### BasicFormItems

| 参数       | 说明           | 类型                | 默认值 |
| :--------- | :------------- | :------------------ | :----- |
| form      | 经 Form.create() 包装过的组件会自带 this.props.form 属性     | object              | -      |
| dataSource      | 初始参数    | [[string, string]...]              |  []      |
| columns | 表单列的配置描述，具体项见下表 | ColumnProps | []     |
| maxCount | 最大数量 | number | -      |
| fieldName | 在 `form` 中的唯一 `key`，在同一个页面中需要保持唯一 | string | -      |
| errorMessage | 错误提示，会出现在组件底端 | string \| React.ReactNode | -      |
| size | 组件的大小 | ['large', 'default', 'small'] | string | 'default'      |
| antConfig | 使用 `Antd ConfigProvider` 进行的全局配置，需要通过这个属性传进来 | [ConfigProviderProps](https://github.com/ant-design/ant-design/blob/master/components/config-provider/index.tsx) | - |

### Columns

表单列的配置描述，目前支持 `['input', 'select', 'custom']` 这三种。

> 在 `.tsx` 文件中，请使用 `'input' as 'input'`，来避免报错

| 参数       | 说明           | 类型                | 默认值 |
| :--------- | :------------- | :------------------ | :----- |
| type      | 动态表单组件的类型，内置 `input`, `select`；也可以自定义  | `['input', 'select', 'custom']`              | -      |
| title      | 标题    | string              |  -      |
| colSpan      | 默认会根据配置的长度，自动生成 `Col.span`；也可以手动设置    | number              |  -      |
| placeholder | 占位文案，默认会根据 `title` 自动生成 | string | -     |
| required | 是否对参数进行必填校验 | boolean | true      |
| rules | 自定义表单项的校验规则 | `object[]` | -      |
| showColon | 是否在改表单项后面添加冒号 `; ` | boolean | false      |
| isSelectUniq | `type="select"` 时，通过该属性设置下拉选择是否唯一 | boolean | false      |
| selectOptions | `type="select"` 时，通过该属性设置下拉选项 | {title: string;value: string;}[] | []      |
| component | `type="custom"` 时，可以通过该属性传递 `React.ReactNode` |  React.ReactNode | -      |


### 处理表单数据

向后端提交数据时，由于使用`useDynamicList`时，删除数据会在 也可以使用组件库提供的工具函数来快速处理

```
import { processBasicFormItemsData } from 'dantdv3/utils';
const values = form.getFieldsValue();
processBasicFormItemsData(values);
// [[xxx, xxx]...]
```