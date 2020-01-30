"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmptyLine = function EmptyLine(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 20 : _b;
  return _react.default.createElement("div", {
    className: "d-empty-line",
    style: {
      height: height
    }
  });
};

var _default = EmptyLine;
exports.default = _default;