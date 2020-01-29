"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RouteWithSubRoutes = RouteWithSubRoutes;
exports.default = void 0;

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

require("antd/es/menu/style");

var _menu = _interopRequireDefault(require("antd/es/menu"));

require("antd/es/layout/style");

var _layout = _interopRequireDefault(require("antd/es/layout"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _NotFound = _interopRequireDefault(require("pages/NotFound"));

var _config = require("./config");

require("./App.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Header = _layout.default.Header,
    Sider = _layout.default.Sider,
    Content = _layout.default.Content;
var SubMenu = _menu.default.SubMenu;

function RouteWithSubRoutes(route) {
  return _react.default.createElement(_reactRouterDom.Route, {
    path: route.path,
    render: function render(props) {
      return (// pass the sub-routes down to keep nesting
        _react.default.createElement(route.component, _extends({}, props, {
          routes: route.routes
        }))
      );
    }
  });
}

var App = function App() {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  function toggle() {
    setCollapsed(!collapsed);
  }

  return _react.default.createElement("div", {
    className: "App"
  }, _react.default.createElement(_layout.default, null, _react.default.createElement(Sider, {
    trigger: null,
    collapsible: true,
    collapsed: collapsed
  }, _react.default.createElement("div", {
    className: "logo"
  }), _react.default.createElement(_menu.default, {
    theme: "dark",
    mode: "inline",
    defaultSelectedKeys: ['home'],
    defaultOpenKeys: ['comp']
  }, _config.routeCfg.map(function (routeItem) {
    if (routeItem.routes) {
      return _react.default.createElement(SubMenu, {
        key: routeItem.key,
        title: _react.default.createElement("span", null, routeItem.icon && _react.default.createElement(_icon.default, {
          type: routeItem.icon
        }), _react.default.createElement("span", null, routeItem.title))
      }, routeItem.routes.map(function (subItem) {
        return _react.default.createElement(_menu.default.Item, {
          key: subItem.key
        }, _react.default.createElement(_reactRouterDom.NavLink, {
          to: subItem.path
        }, subItem.icon && _react.default.createElement(_icon.default, {
          type: subItem.icon
        }), _react.default.createElement("span", null, subItem.title)));
      }));
    } else if (routeItem.component) {
      return _react.default.createElement(_menu.default.Item, {
        key: routeItem.key
      }, _react.default.createElement(_reactRouterDom.NavLink, {
        to: routeItem.path
      }, routeItem.icon && _react.default.createElement(_icon.default, {
        type: routeItem.icon
      }), _react.default.createElement("span", null, routeItem.title)));
    }

    return null;
  }))), _react.default.createElement(_layout.default, null, _react.default.createElement(Header, {
    style: {
      background: '#fff',
      padding: 0
    }
  }, _react.default.createElement(_icon.default, {
    className: "trigger",
    type: collapsed ? 'menu-unfold' : 'menu-fold',
    onClick: toggle
  })), _react.default.createElement(Content, {
    className: "App-content"
  }, _react.default.createElement(_reactRouterDom.Switch, null, _config.routeCfg.map(function (route) {
    return _react.default.createElement(RouteWithSubRoutes, _extends({
      key: route.key
    }, route));
  }), _react.default.createElement(_reactRouterDom.Route, {
    component: _NotFound.default
  }))))));
};

var _default = (0, _reactRouterDom.withRouter)(App);

exports.default = _default;