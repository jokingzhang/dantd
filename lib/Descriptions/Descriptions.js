"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Descriptions = function Descriptions(props) {
  function renderEmpty(content) {
    if (!content || Array.isArray(content) && content.length === 0) {
      return '- -';
    }

    return null;
  }

  return _react.default.createElement("div", {
    className: "d-desc"
  }, props.dataSource.length === 0 && '- -', props.title && _react.default.createElement("div", {
    className: "title"
  }, props.title), props.dataSource.map(function (dataItem) {
    return _react.default.createElement("div", {
      key: "desc-" + dataItem.title,
      className: "item"
    }, _react.default.createElement("div", {
      className: "item-title"
    }, dataItem.title), _react.default.createElement("div", {
      className: "item-content"
    }, renderEmpty(dataItem.content), typeof dataItem.content === 'string' ? dataItem.content : dataItem.content.join('，')));
  }));
};

var _default = Descriptions;
exports.default = _default;