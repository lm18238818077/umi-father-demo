export const imports = {
  'src/Foo/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-foo-index" */ 'src/Foo/index.mdx'
    ),
}
