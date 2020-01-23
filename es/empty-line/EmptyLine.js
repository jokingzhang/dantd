import React from 'react';
import "./style/index.css";

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

export default EmptyLine;