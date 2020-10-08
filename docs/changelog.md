---
order: 5
title: 更新日志
toc: false
timeline: true
---

#### 发布周期

- 修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
- 次版本号：每月发布一个带有新特性的向下兼容的版本。
- 主版本号：含有破坏性更新和新特性，不在发布周期内。

---
## v0.3.19
`2020-08-24`
- 🐞 优化 `useInterval` Hook，重新加载时重复设置的问题。

## v0.3.14
`2020-08-17`
- 🐞 修复 `DataTable` Query 模式搜索错误的问题
- 🆕 新增 `Code` 代码组件。

## v0.3.4
`2020-08-13`
- 🆕 新增 `useAsync` 接收一个 async 函数或返回 promise 的函数，返回状态，数据形状与 `useAsync` 相同。参考 [react-use](https://github.com/streamich/react-use/blob/master/docs/useAsyncFn.md)
- 🆕 新增 `useAsyncFn` 这个 `Hook` 用于解析 async 函数或返回 promise 的函数。参考 [react-use](https://github.com/streamich/react-use/blob/master/docs/useAsync.md)
- 🆕 新增 `useAsyncRetry` 使用 `useAsync` 和一个额外的retry方法来轻松重试/刷新异步函数;，参考 [react-use](https://github.com/streamich/react-use/blob/master/docs/useAsyncRetry.md)
- 🆕 新增 `useMountedState` 生命周期钩子提供检查组件的挂载状态的能力，参考 [react-use](https://github.com/streamich/react-use/blob/master/docs/useMountedState.md)
- 🆕 新增 `useInterval` 一个定时器的hook，基于[Dan Abramov的文章](https://overreacted.io/making-setinterval-declarative-with-react-hooks)。可以通过将延迟设置为null来暂停时间间隔，参考 [react-use](https://github.com/streamich/react-use/blob/master/docs/useInterval.md)
- 🆕 新增 `useTimeout` 在指定的毫秒数后重新渲染组件。 提供取消或重置超时的调用方式。参考 [react-use](https://github.com/streamich/react-use/blob/master/docs/useTimeout.md)
- 🆕 新增 `useDeepCompareEffect` 需要深比较依赖，触发Effect的时候，参考 [react-use](https://github.com/streamich/react-use/blob/master/docs/useAsyncFn.md)
- 🆕 新增 `QueryForm` 查询表单组件。
- 🛠  `BasicTable` `DataTable` 增加 `queryFormColumns` 属性，可以配置顶部的查询表单。

## v0.2.9
`2020-07-28`
- 🆕 新增 `VirtualSelect` 选择器（虚拟滚动）组件。

## v0.1.18
`2020-06-02`
- 🆕 新增 `NsTree` 服务树组件。
- 🆕 新增 `NsTreeSelect` 服务树选择器。

## v0.1.17
`2020-05-24`
- 🐞 修复 `DataTable` url参数无法解析query部分问题

## v0.1.16
`2020-05-22`
- 🛠 `BasicFormItems` `BasicTable` `DataTable` 增加 `antConfig` 属性；使用 `Antd ConfigProvider` 进行的全局配置，需要通过这个属性传进来。

```
  <Table
    columns={columns}
    dataSource={data}
    antConfig={{
      prefixCls: 'antdv3',
      locale: 'zh_CN',
    }}
  />
```

## v0.1.12
`2020-05-06`
- 🛠 重做了 `BasicFormItems` 动态表单组件，支持了更多功能。
- 🆕 新增 `useDynamicList` 动态表单自定义Hook，参考 [umi hook useDynamicList v1.9.2](https://hooks.umijs.org/zh-CN/ui/use-dynamic-list)。

## v0.1.11
`2020-04-29`
- 🆕 新增 `BasicFormItems` 动态表单组件。

## v0.1.10
`2020-04-29`
- 🛠 优化了 `Descriptions` 组件的参数，支持更多定制

## v0.1.8 & v0.1.9
`2020-04-28`
- 🛠 `BasicTable` 和 `DataTable` 快速筛选区文案调整
  - 搜索：columnTitle：xxx
  - 排序：columnTitle：xxx,xxx
  - 过滤：columnTitle：升序
- 🛠 `BasicTable` 和 `DataTable` 快速筛选区每个筛选按钮增加最大宽度 `200`，内容区域超过长度会展示省略号「...」，hover 时 Tooltip 展示文字内容，并采用小号按钮实现
- 🐞 `BasicTable` 和 `DataTable` 快速筛选区样式被覆盖的问题
- 🐞 `BasicTable` 和 `DataTable` 连续搜索2个地方，点击清空，筛选按钮没有被清除掉

## v0.1.7
`2020-04-26`
- 🛠 调整了目录结构，优化了 `hook` 的官网展示。
- 🐞 404 页面样式修复
- 🐞 解决了， `IntlProvider`、`useDebounce` 不能通过 `import {xxx} from 'dantd'` 的方式引入的问题。

## v0.1.6
- 🐞 `DataTable` 补充单元测试，修复 `apiSearch` 搜索字段不全的问题。
- 🆕 移除了 `dist` 目录移除 `antd-theme-webpack-plugin.js`，原因是 `v1.3.3` 版本已经解决了之前有提到 `url(some url)` 的问题。
- 🛠 优化了 `dist` 目录的打包产物，移除了 `.md` 文件。

## v0.1.5
- 🐞 `Switch` 组件依赖字体文件，导致的乱码问题
- 🐞 `Switch` 组件的浏览器兼容性问题

## v0.1.2 & v0.1.3
- 🆕 `dist` 目录新增 `antd-theme-webpack-plugin.js`，提供 `theme` 切换功能，使用规则请查看文档。
- 🛠 优化了 `dist` 目录的打包产物

## v0.1.1
`2020-04-13`
- 🌐 新增国际化功能

## v0.0.9 & v0.0.10
`2020-04-05`
- 🆕 新增自定义组件：`Switch`。
- 🐞 `BasicTable` 和 `DataTable`中的`columns.title`传入`React.Node`，页面崩溃问题。
- 🐞 `DataTable` 请求参数处理有误，`ccp` 项目拿不到数据问题。
- 🐞 点击 `Switch` 组件，页面滚动问题。

## v0.0.8
`2020-03-30`
- 🆕 新增自定义hook：`useDebounce（防抖）`
- 🛠 更新 `less` 变量命名，需要增加 `dantd` 前缀，不应该与 `antd` 重名。
- 🐞 `BasicTable` 和 `DataTable` icon 颜色不随着 Theme 而改变的问题。

## v0.06 & v0.07

`2020-03-27`

修复了 `DataTable` API传参，监听分页无效等问题。

## v0.05

`2020-03-26`

去掉了之前的 `Table`，改为 `BasicTable` 和 `DataTable` 两个组件了。

## v0.04

`2020-03-16`

完成了 `Table` 组件。

## v0.03

`2020-03-11`

参考 Antd，重构了样式部分，增加了前缀（`dantd`）的概念。

## v0.02

`2020-02-22`

使用 [bisheng](https://github.com/benjycui/bisheng) 重构了项目的文档部分，并优化了文档的编写，以及官网的样式。

## v0.01

`2020-02-01`

开始了这个项目，串通了开发，测试，打包，文档所有流程。

- 支持 TypeScript
- 支持 单元测试 Jest + @testing-library/react
- 支持 less
- 支持 eslint & prettier
- 支持 react-app-rewired
- 基于 [umijs/father](https://github.com/umijs/father) 完成打包，可使用 cjs、esm 和 umd 三种格式的引用
- 支持 mdx 文档
