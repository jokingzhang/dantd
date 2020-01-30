import "antd/es/card/style";
import _Card from "antd/es/card";
import "antd/es/typography/style";
import _Typography from "antd/es/typography";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react'; // import classNames from 'classnames';

var Paragraph = _Typography.Paragraph;

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
  }, React.createElement(_Card, _extends({
    extra: renderRightExtra()
  }, antdProps), children));
};

export default DCard;