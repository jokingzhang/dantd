"use strict";

import React from "react";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(require("react"));

require("./style/index.css");

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
      key: "desc-" + dataItem.title,
      className: "item"
    }, React.createElement("div", {
      className: "item-title"
    }, dataItem.title), React.createElement("div", {
      className: "item-content"
    }, renderEmpty(dataItem.content), typeof dataItem.content === 'string' ? dataItem.content : dataItem.content.join('，')));
  }));
};

exports.default = Descriptions;