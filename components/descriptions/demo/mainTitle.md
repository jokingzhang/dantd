---
order: 2
title: 设置小标题
---

`dataSource` 中，除了可以使用 `title + content`，还可以使用 `mainTitle` 设置小标题。

```jsx
import { Descriptions } from '@didi/dantd';
import { Row, Col, Card, Typography, Badge } from 'antd';
const { Paragraph } = Typography;
export const data1 = [
  {
    title: '节点',
    content: 'ddcloud.op.didi.com',
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
    content: '测试环境部署上线，修改了后端service接口中对支付的处理逻辑',
  },
];

export const data2 = [
  {
    title: '占位',
    content: 'service 接口上线',
  },
  {
    title: '流量类型',
    content: <span style={{ color: '#F56C6C' }}> 高峰期 星期五 15:00 - 20:00</span>,
  },
  {
    mainTitle: '更改配置',
  },
  {
    title: '环境变量修改前',
    content: 'DIDIENV_DOCLOUD_GRACEPERIOD_SECONDS：2 \n DIDIENV_DOCLOUD_GRACEPERIOD_SECONDS：2',
  },
  {
    title: '环境变量修改后',
    content: 'DIDIENV_DOCLOUD_GRACEPERIOD_SECONDS：2 \n DIDIENV_DOCLOUD_GRACEPERIOD_SECONDS：2',
  },
  {
    title: '服务等级',
    content: <span style={{ color: '#67C23A' }}> P3</span>,
  },
  {
    title: '备注',
    content: (
      <span style={{ color: '#FAAD14' }}>
        {' '}
        测试 - 测试环境名称，美东 01-us01-线上，美东 01-us01-线上{' '}
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
