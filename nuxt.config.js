module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vue-mp3-to-itunes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A simple tool where you can convert your downloaded albums to Itunes format.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
  ** Plugins configuration
  */
  css: [
    '~/assets/vue2Dropzone.css'
  ],
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/toast
   '@nuxtjs/toast',
    // Doc: https://github.com/nuxt-community/axios-module#usage
   '@nuxtjs/axios'
  ],
  toast: {
    position: 'bottom-center'
  },
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  env: {
    baseUrl: process.env.BASE_URL
  },
}
