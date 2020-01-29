export const imports = {
  'src/components/card/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-card-index" */ 'src/components/card/index.mdx'
    ),
  'src/components/descriptions/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-descriptions-index" */ 'src/components/descriptions/index.mdx'
    ),
  'src/components/docs/changeLog.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-docs-change-log" */ 'src/components/docs/changeLog.mdx'
    ),
  'src/components/docs/home.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-docs-home" */ 'src/components/docs/home.mdx'
    ),
  'src/components/empty-line/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-empty-line-index" */ 'src/components/empty-line/index.mdx'
    ),
}
