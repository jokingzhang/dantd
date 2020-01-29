"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _App = require("../../App");

var _reactRouterDom = require("react-router-dom");

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Comp = function Comp(_ref) {
  var routes = _ref.routes;
  return _react.default.createElement("div", {
    className: "p-comp"
  }, _react.default.createElement(_reactRouterDom.Switch, null, routes.map(function (route) {
    return _react.default.createElement(_App.RouteWithSubRoutes, _extends({
      key: route.key
    }, route));
  })));
};

var _default = Comp;
exports.default = _default;