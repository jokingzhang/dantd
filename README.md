# dantd

[预览地址](https://jokingzhang.github.io/dantd/)

> 一个基于 [Antd-v3](https://github.com/ant-design/ant-design/) 所封装的业务组件库

# Features

- 支持 TypeScript
- 支持 单元测试 Jest + @testing-library/react
- 支持 less
- 支持 eslint & prettier
- 支持 react-app-rewired
- 基于 [umijs/father](https://github.com/umijs/father) 完成打包，可使用 cjs、esm 和 umd 三种格式的引用
- 支持 mdx 文档

# Installation

```
$ npm install
```

# Usage

```
# 开发组件
$ npm start

# 组件测试
$ npm test

# 开发文档
$ npm run doc:start

# 文档构建
$ npm run doc:build

# 文档发布
$ npm run doc:deploy

# 打包
$ npm run lib:build
```

# publish

登录 `npm` 账号，提交所有代码

```
$ npm version patch
$ git push
$ npm publish
```

# blog

- [手摸手，打造属于自己的 React 组件库 —— 基础篇](https://github.com/jokingzhang/blog/issues/1)
- [手摸手，打造属于自己的 React 组件库 —— 测试篇](https://github.com/jokingzhang/blog/issues/4)
- [手摸手，打造属于自己的 React 组件库 —— 打包篇](https://github.com/jokingzhang/blog/issues/2)
