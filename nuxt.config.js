
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'stylesheet', href:'/font-awesome-4.7.0/css/font-awesome.min.css' },
      { rel:'stylesheet', href:'/base.css' },
      { rel:'stylesheet', href:'/animate.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.bootcss.com/Swiper/3.4.2/css/swiper.min.css' },
    ],
    script:[
      { src: '/js/rem.js', async: true, defer: true },
      { src: 'https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js' },
      { src: 'https://cdn.bootcss.com/Swiper/3.4.2/js/swiper.min.js' }
  ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: "./plugins/lazy-load.js",ssr: false},
    {src:'~/plugins/eventbus.js', ssr: false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // 'nuxt-vuex-localstorage'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
