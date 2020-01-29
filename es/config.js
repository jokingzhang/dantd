import Home from 'pages/Home';
import Component from 'pages/Component'; // components

import Card from 'components/card/demo';
import Descriptions from 'components/descriptions/demo';
import EmptyLine from 'components/empty-line/demo';
export var routeCfg = [{
  key: 'home',
  icon: 'home',
  title: '首页',
  exact: true,
  component: Home,
  inMenu: true,
  path: '/'
}, {
  key: 'comp',
  icon: 'gold',
  title: '组件',
  inMenu: true,
  component: Component,
  path: '/comp',
  routes: [{
    key: 'card',
    title: '卡片·Card',
    component: Card,
    path: '/comp/card'
  }, {
    key: 'descriptions',
    title: '简介·Descriptions',
    component: Descriptions,
    path: '/comp/descriptions'
  }, {
    key: 'empty-line',
    title: '空行·EmptyLine',
    component: EmptyLine,
    path: '/comp/empty-line'
  }]
}];