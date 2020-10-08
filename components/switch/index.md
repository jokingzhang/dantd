---
category: 组件
type: 数据录入
title: Switch
subtitle: 开关
---

## 何时使用

需要表示开关状态/两种状态之间的切换时；

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| checked | 指定当前是否选中 | boolean | false |  |
| checkedChildren | 选中时的内容 | string\|ReactNode |  |  |
| defaultChecked | 初始是否选中 | boolean | false |  |
| disabled | 是否禁用 | boolean | false |  |
| size | 开关大小，可选值：`default` `small` | string | default |  |
| unCheckedChildren | 非选中时的内容 | string\|ReactNode |  |  |
| onChange | 变化时回调函数 | Function(checked: boolean, event: Event) |  |  |
| onClick | 点击时回调函数 | Function(checked: boolean, event: Event) |  |  |
| className | Switch 器类名 | string | - | |
