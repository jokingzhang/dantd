---
category: 组件
type: 数据展示
cols: 1
title: Code
subtitle: 代码块
---

## 何时使用

更优雅的展示、编辑代码块。

## API

> 注意：value 和 defaultValue 只能设置一个

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| value | 当前 `code` 的值，设置了会变成受控组件 | string | - |  |
| defaultValue | 非受控组件的初始值 | string | - |  |
| onChange | 变化时回调函数 | Function(value: string) | - |  |
| loading | 让代码块展示加载中的状态 | boolean | false |  |
| defaultChecked | 初始是否选中 | boolean | false |  |
| style | 代码块的容器样式 | React.CSSProperties | - |  |
| width | 代码块的容器的宽度 | number \| string | `100%` |  |
| height | 代码块的容器的高度 | number \| string | `100px` |  |
| editable | 是否可以编辑 | boolean | false |  |
| theme | 主题 | `light`\| `dark` | `light` |  |
| language | 语言 | `javascript` \|`css` \|`go` \|`markdown` \|`jsx` \|`java` \|`nginx` \|`php` \|`python` \|`shell` \|`sql` \|`xml` \|`html` | -  |  |
| className | Code 类名 | string | - | |
