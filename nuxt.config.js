
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */

  /* process.env.npm_package_name || */
  
  head: {
    title: 'MercurieMart Storefront',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/static/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600&display=swap' },
      { rel: 'stylesheet', href: 'https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css'}
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
    '@/assets/styles/global.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{
    src: '~/plugins/carousel',
    ssr: false
  },
  '~/plugins/buefy'],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },

  /*
  ** Environment Variables
  */

  env: {
    

  }
}
