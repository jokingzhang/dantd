function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react'; // import classNames from 'classnames';

import Card from 'antd/lib/card';
import Typography from 'antd/lib/typography';
import 'antd/lib/card/style';
import 'antd/lib/typography/style';
import './style.less';
var Paragraph = Typography.Paragraph;

var DCard = function DCard(_a) {
  var antdProps = _a.antdProps,
      copyText = _a.copyText,
      children = _a.children;

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

export default DCard;