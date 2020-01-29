import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/col/style";
import _Col from "antd/es/col";
import React from 'react';
import Card from 'components/card';
import Descriptions from 'components/descriptions';
import { data1, data2 } from './mock';

var demo = function demo() {
  return React.createElement("div", null, React.createElement("h3", null, "\u7EC4\u4EF6\u540D\u79F0\uFF1A\u4FE1\u606F\uFF08Descriptions\uFF09"), React.createElement("p", null, "\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5C55\u793A\u4E00\u4E2A\u7B80\u5355\u7684\u4FE1\u606F\u5217\u8868"), React.createElement(_Row, {
    gutter: 24
  }, React.createElement(_Col, {
    span: 12
  }, React.createElement(Card, {
    antdProps: {
      title: '番剧'
    }
  }, React.createElement(Descriptions, {
    title: "\u756A\u5267\u63A8\u8350",
    dataSource: data1
  }))), React.createElement(_Col, {
    span: 12
  }, React.createElement(Card, {
    antdProps: {
      title: '电影'
    }
  }, React.createElement(Descriptions, {
    dataSource: data2
  })))));
};

export default demo;