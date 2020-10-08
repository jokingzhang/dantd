import react from 'react';
import reactDom from 'react-dom';
import reactIs from 'react-is';
import propTypes from 'prop-types';

export default 
{
    // cssModules: true, // 默认是 .module.css 走 css modules，.css 不走 css modules。配置 cssModules 为 true 后，全部 css 文件都走 css modules。（less 文件同理）
    extractCSS: true,
    esm: 'babel',
    cjs: 'babel',
    umd: {
      name: 'dantd',
      sourcemap: true,
      globals: {
        react: 'React',
        antd: 'antd'
      },
    },
    extraBabelPlugins: [
      ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    ],
    entry: 'src/index.tsx',
    namedExports: {
      react: Object.keys(react),
      'react-dom': Object.keys(reactDom),
      'react-is': Object.keys(reactIs),
      'prop-types': Object.keys(propTypes),
    },
    doc: {
      title: '滴滴运维产品UI组件库',
      themeConfig: {
        logo: {
          src: 'http://git.xiaojukeji.com/ops-fe/dantd/uploads/2c3d4120c0815dd1b00107a73b2371e0/WX20200209-194701.png',
          width: 270,
        },
        colors: {
          primary: '#fa8c16',
          link: '#fa8c16',
        }
      },
      menu: [
        '首页',
        '更新日志',
        '组件'
      ]
    },
}