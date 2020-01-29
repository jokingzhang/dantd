"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/col/style");

var _col = _interopRequireDefault(require("antd/es/col"));

var _react = _interopRequireDefault(require("react"));

var _card = _interopRequireDefault(require("components/card"));

var _descriptions = _interopRequireDefault(require("components/descriptions"));

var _mock = require("./mock");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var demo = function demo() {
  return _react.default.createElement("div", null, _react.default.createElement("h3", null, "\u7EC4\u4EF6\u540D\u79F0\uFF1A\u4FE1\u606F\uFF08Descriptions\uFF09"), _react.default.createElement("p", null, "\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5C55\u793A\u4E00\u4E2A\u7B80\u5355\u7684\u4FE1\u606F\u5217\u8868"), _react.default.createElement(_row.default, {
    gutter: 24
  }, _react.default.createElement(_col.default, {
    span: 12
  }, _react.default.createElement(_card.default, {
    antdProps: {
      title: '番剧'
    }
  }, _react.default.createElement(_descriptions.default, {
    title: "\u756A\u5267\u63A8\u8350",
    dataSource: _mock.data1
  }))), _react.default.createElement(_col.default, {
    span: 12
  }, _react.default.createElement(_card.default, {
    antdProps: {
      title: '电影'
    }
  }, _react.default.createElement(_descriptions.default, {
    dataSource: _mock.data2
  })))));
};

var _default = demo;
exports.default = _default;