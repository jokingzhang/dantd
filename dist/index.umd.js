(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('antd/lib/card'), require('antd/lib/typography'), require('antd/lib/card/style'), require('antd/lib/typography/style')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'antd/lib/card', 'antd/lib/typography', 'antd/lib/card/style', 'antd/lib/typography/style'], factory) :
  (global = global || self, factory(global.dantd = {}, global.React, global.Card, global.Typography));
}(this, (function (exports, React, Card, Typography) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  Card = Card && Card.hasOwnProperty('default') ? Card['default'] : Card;
  Typography = Typography && Typography.hasOwnProperty('default') ? Typography['default'] : Typography;

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

  var Paragraph = Typography.Paragraph;

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
    }, React.createElement(Card, _extends({
      extra: renderRightExtra()
    }, antdProps), children));
  };

  exports.Card = DCard;
  exports.Descriptions = Descriptions;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
