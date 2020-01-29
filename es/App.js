import "antd/es/icon/style";
import _Icon from "antd/es/icon";
import "antd/es/menu/style";
import _Menu from "antd/es/menu";
import "antd/es/layout/style";
import _Layout from "antd/es/layout";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from 'react';
import { Switch, Route, withRouter, NavLink } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import { routeCfg } from './config';
import "./App.css";
var Header = _Layout.Header,
    Sider = _Layout.Sider,
    Content = _Layout.Content;
var SubMenu = _Menu.SubMenu;
export function RouteWithSubRoutes(route) {
  return React.createElement(Route, {
    path: route.path,
    render: function render(props) {
      return (// pass the sub-routes down to keep nesting
        React.createElement(route.component, _extends({}, props, {
          routes: route.routes
        }))
      );
    }
  });
}

var App = function App() {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  function toggle() {
    setCollapsed(!collapsed);
  }

  return React.createElement("div", {
    className: "App"
  }, React.createElement(_Layout, null, React.createElement(Sider, {
    trigger: null,
    collapsible: true,
    collapsed: collapsed
  }, React.createElement("div", {
    className: "logo"
  }), React.createElement(_Menu, {
    theme: "dark",
    mode: "inline",
    defaultSelectedKeys: ['home'],
    defaultOpenKeys: ['comp']
  }, routeCfg.map(function (routeItem) {
    if (routeItem.routes) {
      return React.createElement(SubMenu, {
        key: routeItem.key,
        title: React.createElement("span", null, routeItem.icon && React.createElement(_Icon, {
          type: routeItem.icon
        }), React.createElement("span", null, routeItem.title))
      }, routeItem.routes.map(function (subItem) {
        return React.createElement(_Menu.Item, {
          key: subItem.key
        }, React.createElement(NavLink, {
          to: subItem.path
        }, subItem.icon && React.createElement(_Icon, {
          type: subItem.icon
        }), React.createElement("span", null, subItem.title)));
      }));
    } else if (routeItem.component) {
      return React.createElement(_Menu.Item, {
        key: routeItem.key
      }, React.createElement(NavLink, {
        to: routeItem.path
      }, routeItem.icon && React.createElement(_Icon, {
        type: routeItem.icon
      }), React.createElement("span", null, routeItem.title)));
    }

    return null;
  }))), React.createElement(_Layout, null, React.createElement(Header, {
    style: {
      background: '#fff',
      padding: 0
    }
  }, React.createElement(_Icon, {
    className: "trigger",
    type: collapsed ? 'menu-unfold' : 'menu-fold',
    onClick: toggle
  })), React.createElement(Content, {
    className: "App-content"
  }, React.createElement(Switch, null, routeCfg.map(function (route) {
    return React.createElement(RouteWithSubRoutes, _extends({
      key: route.key
    }, route));
  }), React.createElement(Route, {
    component: NotFound
  }))))));
};

export default withRouter(App);