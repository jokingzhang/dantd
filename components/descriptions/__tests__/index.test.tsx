import React from 'react';
import { create, act } from 'react-test-renderer';
import Descriptions from '../Descriptions';

const data = [
  {
    title: '【番剧推荐】为寻你，吾宁赴深渊——《龙的牙医》',
    content:
      '冬天就是要看些温暖清新的剧才能治愈一下疲惫的心啊。《龙的牙医》这部短片动漫是小编无意中发现的，画风很是清新温暖，很适合在冬天观赏。故事背景是在一个与龙签订了契约的国度，有一群人作为龙的牙医为龙清理牙菌。动画讲述了男主贝尔在龙牙里复活，与身为牙医的野野子相遇，两人一同作为牙医，守护龙牙的故事。',
  },
  {
    title: '《紫罗兰永恒花园外传：永远与自动手记人偶》值得看吗？',
    content:
      '《紫罗兰永恒花园外传：永远与自动手记人偶》已于1月10日登录国内影院。考虑到影片国内刚刚上映没几天，本篇推荐并不会涉及太多剧情上的...',
  },
];

test('列表渲染正常', () => {
  let comp: any;

  act(() => {
    comp = create(<Descriptions dataSource={data} />);
  });

  expect(comp.toJSON()?.children.length).toEqual(data.length);
});

test('空数据渲染正常', () => {
  let comp: any;

  act(() => {
    comp = create(<Descriptions dataSource={[]} />);
  });

  expect(comp.toJSON()?.children).toEqual(['- -']);
});
