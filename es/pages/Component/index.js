function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { RouteWithSubRoutes } from '../../App';
import { Switch } from 'react-router-dom';
import "./style.css";

var Comp = function Comp(_ref) {
  var routes = _ref.routes;
  return React.createElement("div", {
    className: "p-comp"
  }, React.createElement(Switch, null, routes.map(function (route) {
    return React.createElement(RouteWithSubRoutes, _extends({
      key: route.key
    }, route));
  })));
};

export default Comp;