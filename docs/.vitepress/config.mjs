import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kevin-Zhou",
  description: "Kevin Zhou's Teaching and Research Dairy",
  base: '/',
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Linux', link: '/public/Linux/index'},
      {text: 'MySQL', link: '/public/MySQL/index'},
      {
        text: 'Other',
        items: [
          {text: '毕业设计', link: '/public/Thesis'},
          {text: 'About Me', link: '/public/AboutMe'}
        ]
      }
    ],
    sidebar: {
      '/public/Linux/': sidebarLinux(),
      '/public/MySQL/': sidebarMySQL(),
    }
  }
})

function sidebarLinux() {
  return [
    {
      text: 'Linux',
      collapsed: false,
      items: [
        { text: 'Linux命令大全', link: 'https://www.linuxcool.com/' },
        { text: 'Linux应该怎么学', link: '/public/Linux/HowtoLearn'},
        { text: 'Linux软件包管理', link: '/public/Linux/Package/index'},
      ]
    },
  ]
}

function sidebarMySQL() {
  return [
    {
      text: 'MySQL',
      collapsed: false,
      items: [
        { text: '常见错误', link: '/public/MySQL/Errors' },
      ]
    },
  ]
}