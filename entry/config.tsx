import Home from './pages/Home';
import Component from './pages/Component';

// components
import Card from '../src/card/demo';
import Descriptions from '../src/descriptions/demo';
import EmptyLine from '../src/empty-line/demo';

export interface IRouteSubProps {
  key: string;
  title: string;
  path: string;
  icon?: string;
  exact?: boolean;
  component: React.ComponentType<any>;
}

export interface IRouteCfgProps {
  key: string;
  title: string;
  path: string;
  icon?: string;
  exact?: boolean;
  component: React.ComponentType<any>;
  inMenu?: boolean;
  hide?: boolean;
  routes?: Array<IRouteSubProps>;
}

export const routeCfg: IRouteCfgProps[] = [
  {
    key: 'home',
    icon: 'home',
    title: '首页',
    exact: true,
    component: Home,
    inMenu: true,
    path: '/',
  },
  {
    key: 'comp',
    icon: 'gold',
    title: '组件',
    inMenu: true,
    component: Component,
    path: '/comp',
    routes: [
      {
        key: 'card',
        title: '卡片·Card',
        component: Card,
        path: '/comp/card',
      },
      {
        key: 'descriptions',
        title: '简介·Descriptions',
        component: Descriptions,
        path: '/comp/descriptions',
      },
      {
        key: 'empty-line',
        title: '空行·EmptyLine',
        component: EmptyLine,
        path: '/comp/empty-line',
      },
    ],
  },
];
