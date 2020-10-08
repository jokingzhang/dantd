---
order: 0
title: 基本
---

展示一个简单的描述列表，可以为其设置 `title`。

```jsx
import { Descriptions } from 'dantdv3';
import { Row, Col, Card, Typography, Badge } from 'antd';

export const data1 = [
  {
    title: '【番剧推荐】为寻你，吾宁赴深渊——《龙的牙医》',
    content: '呐，龙是用牙齿哭泣的啊——《龙的牙医》',
  },
  {
    title: '《紫罗兰永恒花园外传：永远与自动手记人偶》值得看吗？',
    content:
      '《紫罗兰永恒花园外传：永远与自动手记人偶》已于1月10日登录国内影院。考虑到影片国内刚刚上映没几天，本篇推荐并不会涉及太多剧情上的...',
  },
];

export const data2 = [
  {
    title: 'content-length',
    content: 4,
  },
  {
    title: 'content-type',
    content: 'text/plain',
  },
  {
    title: 'date',
    content: 'Tue,03 Mar 2020 13:0',
  },
  {
    title: 'x-fc-code-checksum',
    content: '28283487410827349081',
  },
  {
    title: 'x-fc-invocation-dura',
    content: '60',
  },
  {
    title: 'x-fc-max—memory-usag',
    content: 7.65,
  },
  {
    title: 'x-fc-request-id',
    content: '342343434-3434534534',
  },
];

ReactDOM.render(
  <Row gutter={18}>
    <Col span={12}>
      <Card title={'番剧'}>
        <Descriptions titleWidth={160} title="番剧推荐" dataSource={data1} />
      </Card>
    </Col>
    <Col span={12}>
      <Card title={'请求信息'}>
        <Descriptions titleWidth={150} dataSource={data2} />
      </Card>
    </Col>
  </Row>
, mountNode);
```
