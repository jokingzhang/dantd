(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('antd/es/card/style'), require('antd/es/card'), require('antd/es/typography/style'), require('antd/es/typography')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'antd/es/card/style', 'antd/es/card', 'antd/es/typography/style', 'antd/es/typography'], factory) :
  (global = global || self, factory(global.dantd = {}, global.React, null, global._Card, null, global._Typography));
}(this, (function (exports, React, style, _Card, style$1, _Typography) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  _Card = _Card && _Card.hasOwnProperty('default') ? _Card['default'] : _Card;
  _Typography = _Typography && _Typography.hasOwnProperty('default') ? _Typography['default'] : _Typography;

  var Descriptions = function Descriptions(props) {
    function renderEmpty(content) {
      if (!content || Array.isArray(content) && content.length === 0) {
        return '暂无数据';
      }

      return null;
    }

    return React.createElement("div", {
      className: "d-desc"
    }, props.title && React.createElement("div", {
      className: "title"
    }, props.title), props.dataSource.map(function (dataItem) {
      return React.createElement("div", {
        key: "desc-".concat(dataItem.title),
        className: "item"
      }, React.createElement("div", {
        className: "item-title"
      }, dataItem.title), React.createElement("div", {
        className: "item-content"
      }, renderEmpty(dataItem.content), typeof dataItem.content === 'string' ? dataItem.content : dataItem.content.join('，')));
    }));
  };

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  var Paragraph = _Typography.Paragraph;

  var DCard = function DCard(_ref) {
    var antdProps = _ref.antdProps,
        copyText = _ref.copyText,
        children = _ref.children;

    function renderRightExtra() {
      if (copyText) {
        return React.createElement(Paragraph, {
          style: {
            marginBottom: 0
          },
          copyable: true
        }, copyText);
      }

      return false;
    }

    return React.createElement("div", {
      className: "d-card"
    }, React.createElement(_Card, _extends({
      extra: renderRightExtra()
    }, antdProps), children));
  };

  var EmptyLine = function EmptyLine(_ref) {
    var _ref$height = _ref.height,
        height = _ref$height === void 0 ? 20 : _ref$height;
    return React.createElement("div", {
      className: "d-empty-line",
      style: {
        height: height
      }
    });
  };

  exports.Card = DCard;
  exports.Descriptions = Descriptions;
  exports.EmptyLine = EmptyLine;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
