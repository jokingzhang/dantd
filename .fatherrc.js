export default 
{
    // cssModules: true, // 默认是 .module.css 走 css modules，.css 不走 css modules。配置 cssModules 为 true 后，全部 css 文件都走 css modules。（less 文件同理）
    extractCSS: true,
    esm: 'babel',
    cjs: 'babel',
    umd: false,
    extraBabelPlugins: [
      ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    ],
    // umd: {
    //   name: 'td',
    //   globals: {
    //     react: 'React',
    //   },
    // },
    doc: {
      // repository: false,
      themeConfig: {
        // mode: 'dark',
        // showPlaygroundEditor: false
      },
      base: '/dantd/',
    //   public: '/public',
      htmlContext: {
        head: {
          links: [
            { rel: 'stylesheet', href: '/public/common.css' },
          ],
        },
      },
      menu: [
        '首页',
        '更新日志',
        {
          name: '组件',
          menu: [
            'LinkBtn',
          ]
        }
      ]
    },
}