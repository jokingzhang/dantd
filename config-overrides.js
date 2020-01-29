const { override, fixBabelImports, addLessLoader, addBabelPlugins } = require('customize-cra');

module.exports = override(
  ...addBabelPlugins([
    'import',
    { libraryName: 'dantd', libraryDirectory: 'es', style: true },
    'dantd',
  ]),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
  }),
);
