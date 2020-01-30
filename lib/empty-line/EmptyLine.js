"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmptyLine = function EmptyLine(_ref) {
  var _ref$height = _ref.height,
      height = _ref$height === void 0 ? 20 : _ref$height;
  return _react.default.createElement("div", {
    className: "d-empty-line",
    style: {
      height: height
    }
  });
};

var _default = EmptyLine;
exports.default = _default;