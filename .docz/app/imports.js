export const imports = {
  'document/changeLog.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "document-change-log" */ 'document/changeLog.mdx'
    ),
  'document/home.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "document-home" */ 'document/home.mdx'
    ),
  'src/Card/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-card-index" */ 'src/Card/index.mdx'
    ),
  'src/Descriptions/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-descriptions-index" */ 'src/Descriptions/index.mdx'
    ),
}
