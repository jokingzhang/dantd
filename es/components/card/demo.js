import React from 'react';
import Card from './Card';

var demo = function demo() {
  return React.createElement("div", null, React.createElement("h3", null, "\u7EC4\u4EF6\u540D\u79F0\uFF1A\u5361\u7247\uFF08Card\uFF09"), React.createElement("p", null, "\u7B80\u5355\u5C01\u88C5\u4E86 Card \u7EC4\u4EF6\uFF0C\u589E\u52A0\u4E86 nsextra \u5C5E\u6027\uFF0C\u96C6\u6210\u4E86\u590D\u5236\u5230\u526A\u5207\u677F\u7684\u529F\u80FD\u3002"), React.createElement("p", null, ' ', "\u5176\u4ED6\u7684\u914D\u7F6E\u53C2\u8003 \uFF1A", React.createElement("a", {
    href: "https://ant.design/components/card-cn/"
  }, "Antd Card")), React.createElement(Card, {
    antdProps: {
      bordered: false,
      title: '无边框卡片'
    }
  }, React.createElement("div", {
    style: {
      width: 300,
      height: 300
    }
  }, "\u5361\u7247\u8BE6\u60C5")), React.createElement("br", null), React.createElement(Card, {
    antdProps: {
      title: '普通卡片'
    }
  }, React.createElement("div", {
    style: {
      width: 300,
      height: 300
    }
  }, "\u5361\u7247\u8BE6\u60C5")), React.createElement("br", null), React.createElement(Card, {
    antdProps: {
      title: '有复制信息的卡片'
    },
    copyText: "\u6253\u5F00\u652F\u4ED8\u5B9D\u9996\u9875\u641C\u201C681424595\u201D\u9886\u7EA2\u5305\uFF0C\u9886\u5230\u5927\u7EA2\u5305\u7684\u5C0F\u4F19\u4F34\u8D76\u7D27\u4F7F\u7528\u54E6\uFF01"
  }, React.createElement("div", {
    style: {
      width: 300,
      height: 300
    }
  }, "\u5361\u7247\u8BE6\u60C5")));
};

export default demo;