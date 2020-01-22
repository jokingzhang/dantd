export const imports = {
  'document/changeLog.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "document-change-log" */ 'document/changeLog.mdx'
    ),
  'document/home.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "document-home" */ 'document/home.mdx'
    ),
  'src/card/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-card-index" */ 'src/card/index.mdx'
    ),
  'src/descriptions/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-descriptions-index" */ 'src/descriptions/index.mdx'
    ),
}
