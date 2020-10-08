---
order: 4
title: 动态主题
---

简单几步可以实现 `Antd` 动态主题，此方法适用于 [Antd-v3](https://ant.design/) 版本。

### antd 主题切换

antd 中的动态主题能力来自于 [antd-theme-webpack-plugin](https://github.com/mzohaibqc/antd-theme-webpack-plugin)

> 之前有提到 `url(some url)` 的问题已经在最新版本修复，可以放心使用了~
> `dist/theme` 目录，也移除了自定义插件。

#### install

```bash
npm install antd-theme-webpack-plugin@^1.3.3
```

#### config-overrides.js

```js
// config-overrides.js
const AntDesignThemePlugin = require('antd-theme-webpack-plugin');
...
const options = {
  antDir: path.join(__dirname, './node_modules/antd'),
  stylesDir: path.join(__dirname, './src'),
  varFile: path.join(__dirname, './src/variables.less'),
  mainLessFile: path.join(__dirname, './src/style.less'),
  themeVariables: ['@primary-color'],
  indexFileName: 'index.html',
  generateOnce: false, // generate color.less on each compilation
};
...
addWebpackPlugin(new AntDesignThemePlugin(options))
```
插件的参数可以参考原来的文档：[antd-theme-webpack-plugin](https://github.com/mzohaibqc/antd-theme-webpack-plugin)。

这里在设置参数的时候，有几个需要**注意**的地方：

- `stylesDir` 需要包含本地开发的所有的样式文件。
- `mainLessFile` 需要引入所有 `Antd` 的变量，比如下面的例子：

```js
// antd variables
@import '~antd/es/style/themes/default.less';
// dantd variables
@import '~dantdv3/es/style/themes.less';
```