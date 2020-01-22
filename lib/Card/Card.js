"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _card = _interopRequireDefault(require("antd/lib/card"));

var _typography = _interopRequireDefault(require("antd/lib/typography"));

require("antd/lib/card/style");

require("antd/lib/typography/style");

require("./style/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Paragraph = _typography.default.Paragraph;

var DCard = function DCard(_ref) {
  var antdProps = _ref.antdProps,
      copyText = _ref.copyText,
      children = _ref.children;

  function renderRightExtra() {
    if (copyText) {
      return _react.default.createElement(Paragraph, {
        style: {
          marginBottom: 0
        },
        copyable: true
      }, copyText);
    }

    return false;
  }

  return _react.default.createElement("div", {
    className: "d-card"
  }, _react.default.createElement(_card.default, _extends({
    extra: renderRightExtra()
  }, antdProps), children));
};

var _default = DCard;
exports.default = _default;