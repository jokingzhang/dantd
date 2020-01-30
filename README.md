# dantd

[预览地址](https://jokingzhang.github.io/dantd/)

> dantd 一个基于 antd 封装的组件库 （扩展包），由于组件库使用 [umijs/father](https://github.com/umijs/father)，而在执行`father build`的时候，还不能指定文件路径入口，导致现在使用了一个单独的项目做组件的打包，发布。所以，目前的做法是，在这个项目 [dantd-demo](https://github.com/jokingzhang/dantd-demo) 完成开发，测试；在 [dantd](https://github.com/jokingzhang/dantd) 中写文档，打包，发布。这个问题正在解决中..

# Features

- 基于 [umijs/father](https://github.com/umijs/father) 完成打包，可使用 cjs、esm 和 umd 三种格式的引用
- 支持 mdx 文档

# Installation

```
$ npm install
```

# Usage


```
# 开发
$ npm start

# 文档构建
$ npm run doc:build

# 文档发布
$ npm run doc:deploy

# npm 构建
$ npm run build
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
