"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeCfg = void 0;

var _Home = _interopRequireDefault(require("pages/Home"));

var _Component = _interopRequireDefault(require("pages/Component"));

var _demo = _interopRequireDefault(require("components/card/demo"));

var _demo2 = _interopRequireDefault(require("components/descriptions/demo"));

var _demo3 = _interopRequireDefault(require("components/empty-line/demo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// components
var routeCfg = [{
  key: 'home',
  icon: 'home',
  title: '首页',
  exact: true,
  component: _Home.default,
  inMenu: true,
  path: '/'
}, {
  key: 'comp',
  icon: 'gold',
  title: '组件',
  inMenu: true,
  component: _Component.default,
  path: '/comp',
  routes: [{
    key: 'card',
    title: '卡片·Card',
    component: _demo.default,
    path: '/comp/card'
  }, {
    key: 'descriptions',
    title: '简介·Descriptions',
    component: _demo2.default,
    path: '/comp/descriptions'
  }, {
    key: 'empty-line',
    title: '空行·EmptyLine',
    component: _demo3.default,
    path: '/comp/empty-line'
  }]
}];
exports.routeCfg = routeCfg;