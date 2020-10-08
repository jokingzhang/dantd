---
category: 组件
type: 数据展示
title: Descriptions
subtitle: 描述列表
cols: 1
---

## 何时使用

用于展示一个简单的描述列表

## API

### Descriptions

| 参数       | 说明           | 类型                | 默认值 |
| :--------- | :------------- | :------------------ | :----- |
| title      | 标题           | string              | -      |
| titleWidth      | 标题宽度           | string \| number              |  '80px' \| 80      |
| dataSource | 需要展示的信息 | Descriptions.Item[] | -      |
| itemTitleStyle | 自定义详情标题的样式 | React.CSSProperties | -      |
| itemContentStyle | 自定义详情内容的样式 | React.CSSProperties | -      |
| bordered | 是否需要边框 | boolean | false |
| style | 自定义组件容器的样式 | React.CSSProperties | - |

### Descriptions.Item

| 参数    | 说明     | 类型               | 默认值 |
| :------ | :------- | :----------------- | :----- |
| title   | 详情标题 | string \| number \| React.ReactNode             | -      |
| content | 详情信息 | string \| number \| React.ReactNode | -      |
| mainTitle | 详情小标题 | string \| number \| React.ReactNode | -      |
