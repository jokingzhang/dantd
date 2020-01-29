"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _emptyLine = _interopRequireDefault(require("components/empty-line"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var demo = function demo() {
  return _react.default.createElement("div", null, _react.default.createElement("h3", null, "\u7EC4\u4EF6\u540D\u79F0\uFF1A\u7A7A\u884C\uFF08EmptyLine\uFF09"), _react.default.createElement("p", null, "\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u9ED8\u8BA4\u9AD8\u5EA6 20 \uFF0C\u5BBD\u5EA6 100%"), _react.default.createElement("p", null, "\u7B2C\u4E00\u884C\u6587\u5B57"), _react.default.createElement(_emptyLine.default, null), _react.default.createElement("p", null, "\u7B2C\u4E8C\u884C\u6587\u5B57"));
};

var _default = demo;
exports.default = _default;