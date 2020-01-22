"use strict";

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(require("react"));

require("./style.less");

var Descriptions = function Descriptions(props) {
  function renderEmpty(content) {
    if (!content || Array.isArray(content) && content.length === 0) {
      return '暂无数据';
    }

    return null;
  }

  return _react.default.createElement("div", {
    className: "d-desc"
  }, props.title && _react.default.createElement("div", {
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

exports.default = Descriptions;