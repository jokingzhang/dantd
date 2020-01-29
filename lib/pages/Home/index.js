"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/statistic/style");

var _statistic = _interopRequireDefault(require("antd/es/statistic"));

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

require("antd/es/col/style");

var _col = _interopRequireDefault(require("antd/es/col"));

require("antd/es/avatar/style");

var _avatar = _interopRequireDefault(require("antd/es/avatar"));

require("antd/es/card/style");

var _card = _interopRequireDefault(require("antd/es/card"));

var _react = _interopRequireDefault(require("react"));

var _components = require("components");

var _config = require("../../config");

require("./style.css");

var _chong = _interopRequireDefault(require("./chong.png"));

var _chahua = _interopRequireDefault(require("./chahua.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Meta = _card.default.Meta;

var Home = function Home() {
  var _a;

  var ndate = new Date();
  var hr = ndate.getHours();
  var hello = '早上好';

  if (hr >= 12 && hr <= 17) {
    hello = '下午好';
  }

  if (hr >= 17 && hr <= 24) {
    hello = '晚上好';
  }

  return _react.default.createElement("div", {
    className: "p-home"
  }, _react.default.createElement("h3", null, " \u7EC4\u4EF6\u5E73\u53F0 "), _react.default.createElement(_components.EmptyLine, null), _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, {
    span: 20
  }, _react.default.createElement(Meta, {
    avatar: _react.default.createElement(_avatar.default, {
      style: {
        marginTop: 5
      },
      size: "large",
      src: _chong.default
    }),
    title: "".concat(hello, "\uFF0C\u795D\u4F60\u5F00\u5FC3\u6BCF\u4E00\u5929"),
    description: "\u6D88\u9664\u6050\u60E7\u7684\u6700\u597D\u529E\u6CD5\u5C31\u662F\u9762\u5BF9\u6050\u60E7\uFF01\u575A\u6301\uFF0C\u624D\u662F\u80DC\u5229\u3002\u52A0\u6CB9\uFF01\u5965\u5229\u7ED9\uFF01"
  })), _react.default.createElement(_col.default, {
    style: {
      marginTop: -13
    },
    span: 4
  }, _react.default.createElement(_statistic.default, {
    title: "\u5F53\u524D\u7EC4\u4EF6\u603B\u6570",
    value: (_a = _config.routeCfg[1].routes) === null || _a === void 0 ? void 0 : _a.length,
    prefix: _react.default.createElement(_icon.default, {
      type: "like"
    })
  }))), _react.default.createElement("div", {
    className: "img-wrapper"
  }, _react.default.createElement("img", {
    src: _chahua.default,
    alt: "\u7EC4\u4EF6\u5E73\u53F0"
  })));
};

var _default = Home;
exports.default = _default;