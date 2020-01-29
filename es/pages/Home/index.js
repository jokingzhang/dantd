import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/statistic/style";
import _Statistic from "antd/es/statistic";
import "antd/es/icon/style";
import _Icon from "antd/es/icon";
import "antd/es/col/style";
import _Col from "antd/es/col";
import "antd/es/avatar/style";
import _Avatar from "antd/es/avatar";
import "antd/es/card/style";
import _Card from "antd/es/card";
import React from 'react';
import { EmptyLine } from 'components';
import { routeCfg } from '../../config';
import "./style.css";
import img from './chong.png';
import img2 from './chahua.png';
var Meta = _Card.Meta;

var Home = function Home() {
  var _a;

  var ndate = new Date();
  var hr = ndate.getHours();
  var hello = '早上好';

  if (hr >= 12 && hr <= 17) {
    hello = '下午好';
  }

  if (hr >= 17 && hr <= 24) {
    hello = '晚上好';
  }

  return React.createElement("div", {
    className: "p-home"
  }, React.createElement("h3", null, " \u7EC4\u4EF6\u5E73\u53F0 "), React.createElement(EmptyLine, null), React.createElement(_Row, null, React.createElement(_Col, {
    span: 20
  }, React.createElement(Meta, {
    avatar: React.createElement(_Avatar, {
      style: {
        marginTop: 5
      },
      size: "large",
      src: img
    }),
    title: "".concat(hello, "\uFF0C\u795D\u4F60\u5F00\u5FC3\u6BCF\u4E00\u5929"),
    description: "\u6D88\u9664\u6050\u60E7\u7684\u6700\u597D\u529E\u6CD5\u5C31\u662F\u9762\u5BF9\u6050\u60E7\uFF01\u575A\u6301\uFF0C\u624D\u662F\u80DC\u5229\u3002\u52A0\u6CB9\uFF01\u5965\u5229\u7ED9\uFF01"
  })), React.createElement(_Col, {
    style: {
      marginTop: -13
    },
    span: 4
  }, React.createElement(_Statistic, {
    title: "\u5F53\u524D\u7EC4\u4EF6\u603B\u6570",
    value: (_a = routeCfg[1].routes) === null || _a === void 0 ? void 0 : _a.length,
    prefix: React.createElement(_Icon, {
      type: "like"
    })
  }))), React.createElement("div", {
    className: "img-wrapper"
  }, React.createElement("img", {
    src: img2,
    alt: "\u7EC4\u4EF6\u5E73\u53F0"
  })));
};

export default Home;