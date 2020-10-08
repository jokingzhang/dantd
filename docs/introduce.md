---
order: 0
title: DiDi Ant Design of React
---

`dantd` 一个基于 [Antd-v3](https://ant.design/) 所封装的业务组件库

## ✨ 特性

- 📦 开箱即用的高质量 React 组件。
- 🛡 使用 TypeScript 开发，提供完整的类型定义文件。
- 🌈 赋能业务开发，提供业务常用，而 `Antd` 没有提供的组件。

## 安装

### 使用 npm 安装

```
$ npm install @didi/dantd --registry=http://registry.npm.xiaojukeji.com
```

### 使用 npm + dnpm + nrm 安装

我们推荐使用 `npm + dnpm + nrm` 的方式进行开发， `dnpm` 这是 `DiDi` 内部的 `npm` 工具，用了都说好~ 但是，`dnpm` 的版本可能不够新。所以还是推荐使用官方的 `npm`。 `nrm` 是一个 NPM 源管理器，允许你快速地在如下 NPM 源间切换。

```
$ sudo npm install -g dnpm nrm --registry=http://registry.npm.xiaojukeji.com
$ nrm add dnpm http://registry.npm.xiaojukeji.com/
$ nrm ls
$ nrm use dnpm
$ npm install @didi/dantd -D
```

## 示例

```jsx
import { EmptyLine } from '@didi/dantd';

ReactDOM.render(<EmptyLine />, mountNode);
```

## 博客

- [手摸手，打造属于自己的 React 组件库 —— 基础篇](http://way.xiaojukeji.com/article/20141)
- [手摸手，打造属于自己的 React 组件库 —— 测试篇](http://way.xiaojukeji.com/article/20144)
- [手摸手，打造属于自己的 React 组件库 —— 打包篇](http://way.xiaojukeji.com/article/20151)
