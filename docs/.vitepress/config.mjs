import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kevin-Zhou",
  description: "Kevin Zhou's Teaching and Research Dairy",
  base: '/',
  head:[
      ['link',{rel:'icon',href:'/favicon.ico'}]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Linux', link: '/public/Linux' },
      { text: 'MySQL', link: '/public/MySQL' },
      {
        text: 'Other',
        items: [
          { text: '毕业设计', link: '/public/Thesis' },
          { text: 'About Me', link: '/public/AboutMe' }
        ]
      }
    ]
  }
})
