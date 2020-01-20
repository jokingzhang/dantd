export const imports = {
  'document/changeLog.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "document-change-log" */ 'document/changeLog.mdx'
    ),
  'document/home.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "document-home" */ 'document/home.mdx'
    ),
  'src/Descriptions/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-descriptions-index" */ 'src/Descriptions/index.mdx'
    ),
}
