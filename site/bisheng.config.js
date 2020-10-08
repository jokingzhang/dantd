var path = require('path');

module.exports = {
  port: 8078,
  theme: './site/theme',
  root: '/dantd/',
  themeConfig: {
    logo: 'https://jokingzhang.github.io/dantd/static/logo.png',
    sitename: 'Dantd基础UI组件库',
    tagline: 'The one theme for bisheng',
    categoryOrder: {
      'Ant Design': 0,
      全局样式: 1,
      'Global Styles': 1,
      设计模式: 2,
      'Design Patterns': 2,
      其他: 6,
      Other: 6,
      Components: 100,
      组件: 100,
    },
    typeOrder: {
      // Component
      General: 0,
      Layout: 1,
      Navigation: 2,
      'Data Entry': 3,
      'Data Display': 4,
      Feedback: 5,
      Other: 6,
      Deprecated: 7,
      通用: 0,
      布局: 1,
      导航: 2,
      数据录入: 3,
      数据展示: 4,
      反馈: 5,
      其他: 6,
      废弃: 7,
      // Design
      原则: 1,
      Principles: 1,
      全局规则: 2,
      'Global Rules': 2,
      模板文档: 3,
      'Template Document': 3,
    },
  },
  source: {
    components: './components',
    docs: './docs',
  },
  lessConfig: {
    javascriptEnabled: true,
  },
  webpackConfig(config) {
    // const NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules');
    config.resolve.alias = {
      dantdv3: path.join(process.cwd(), 'components'),
      'react-router': 'react-router/umd/ReactRouter',
      // jquery: path.resolve(NODE_MODULES_PATH, 'jquery'),
    };
    config.performance = {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    };
    return config;
  },
};
