---
order: 1
title: 如何开发一个组件？
---

> 本篇待完善

## 注意事项

- 组件，以及文档的文件命名，需要使用「小写」+「-」的形式，否则会有识别问题。

## 组件

### 开发

在 `src` 目录下，新增一个组件的目录，类似上面的 `empty-line` 组件。目录名需要保持**小写**。如果是自定义组件，需要取一个 `antd` 中所不包含的组件名称。添加完文件之后，在 `entry/config.tsx` 中增加 `demo` 的配置。此时应该可以看到组件，并继续开发了。

##### 设置样式前缀

需要增加 `dantd` 前缀，组件库前缀不应该与 `antd` 重名。

```less
@dantd-table-prefix-cls: ~'@{dantd-prefix}-table';

.@{dantd-table-prefix-cls} {
    &-header {
        ...
    }
    ...
}
```

##### 使用 `ant` 的 `less` 变量

引入变量，使用即可

```less
@import '~antd/es/style/themes/default.less';
...

.active {
    color: @primary-color;
}
```

##### 国际化

组件库中提供了两个国际化工具，自定义hooks `useIntl` ，高阶组件 `withIntl` 。使用方式如下：

```
// useIntl
import { useIntl } from '../locale-provider';
const { t } = useIntl();
t('xxx.xxx');
```

```
// withIntl
import { withIntl } from '../locale-provider';

props.t('xxx.xxx')

export default withIntl(Comp);
```

然后在 `../locale` 补充文案即可。

### 测试

测试文件需要保持 `.test.tsx` 的后缀。相关技术栈以及文档：

- [Jest](https://jestjs.io/)：JavaScript 测试框架。
- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro)：将 React 组件转化成 Dom 节点来测试，而不是渲染的 React 组件的实例，可以当做是 [Enzyme](http://airbnb.io/enzyme/) 的替代。编写测试脚本，并保证希望测试到的地方已经覆盖。

更多请参考：[使用 React Testing Library 和 Jest 完成单元测试](https://juejin.im/post/6844904095682134029)

### 发布

```
$ npm run build
$ npm login
$ npm version patch
$ git push
$ npm publish
```

# 文档

### 开发文档

在组件的 `demo` 文件夹中添加 `.md` 文件开发文档，并运行命令查看效果

```
npm start
```

### 构建文档

```
npm run site
```
