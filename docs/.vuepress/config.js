module.exports = {
  base:'/Hyper-demo/',
  head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  title: 'Hyper UI',
  description: '一个基于 Vue 的 UI 组件库',
  themeConfig: {
    nav: [
      // { text: '首页', link: '/' },
      // { text: '文档', link: '/' },
      // { text: '交流', link: '/' }
    ],
    sidebar: [
      '/introduce/',
      {
        title: '入门',
        children: [
          '/install/',
          '/get-start/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button.md',
          '/components/buttonGroup.md',
          '/components/icon.md',
          '/components/input.md',
          '/components/layout.md',
          '/components/container.md',
          '/components/collapse.md',
          '/components/tabs.md',
          '/components/popover.md',
          '/components/toast.md'
        ]
      }
    ]
  }
}