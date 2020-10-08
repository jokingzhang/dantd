---
order: 2
title: 设置小标题
---

`dataSource` 中，除了可以使用 `title + content`，还可以使用 `mainTitle` 设置小标题。

```jsx
import { Descriptions } from 'dantdv3';
import { Row, Col, Card, Typography, Badge } from 'antd';
const { Paragraph } = Typography;
export const data1 = [
  {
    title: '节点',
    content: 'xxx.xxx.xxx',
  },
  {
    title: '名称',
    content: 'test-demo',
  },
  {
    title: '状态',
    content: <Badge color="blue" text="等待审核" />,
  },
  {
    title: '备注信息',
    content: 'test',
  },
];

export const data2 = [
  {
    title: '占位',
    content: 'service 接口上线',
  },
  {
    title: '流量类型',
    content: <span style={{ color: '#F56C6C' }}> 高峰期 星期五 00:00 - 00:00</span>,
  },
  {
    mainTitle: '更改配置',
  },
  {
    title: '环境变量修改前',
    content: 'QQWWERTTQWQW：2',
  },
  {
    title: '环境变量修改后',
    content: 'QQWWERTTQWQWTTTT：2',
  },
  {
    title: '服务等级',
    content: <span style={{ color: '#67C23A' }}>P3</span>,
  },
  {
    title: '备注',
    content: (
      <span style={{ color: '#FAAD14' }}>
        {' '}测试 - 测试环境名称{' '}
      </span>
    ),
  },
];

ReactDOM.render(
  <Row gutter={18}>
    <Col span={12}>
      <Descriptions title="工单信息" titleWidth={70} bordered dataSource={data1} />
    </Col>
    <Col span={12}>
      <Descriptions title="更改配置信息" titleWidth={90} bordered dataSource={data2} />
    </Col>
  </Row>
, mountNode);
```
