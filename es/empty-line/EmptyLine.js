import React from 'react';

var EmptyLine = function EmptyLine(_a) {
  var _b = _a.height,
      height = _b === void 0 ? 20 : _b;
  return React.createElement("div", {
    className: "d-empty-line",
    style: {
      height: height
    }
  });
};

export default EmptyLine;