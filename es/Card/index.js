"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(require("react")); // import classNames from 'classnames';


var card_1 = __importDefault(require("antd/lib/card"));

var typography_1 = __importDefault(require("antd/lib/typography"));

require("antd/lib/card/style");

require("antd/lib/typography/style");

require("./style.less");

var Paragraph = typography_1.default.Paragraph;

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
  }, React.createElement(card_1.default, _extends({
    extra: renderRightExtra()
  }, antdProps), children));
};

exports.default = DCard;