
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
    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js' },
      // { src: 'https://kit.fontawesome.com/6f8bc706a7.js', body: true },
      { src: 'https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js', body: true },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js', body: true },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js', body: true },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js', body: true },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js', body: true },
      { src: 'https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js', body: true },
      { src: '/plugins.js', body: true }, 
      { src: '/main.js', body: true},

    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/static/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap' },
      { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/css/plugins.css' }
    ]
  },

  loading: '~/components/HomePreloader/index.vue',

  css: [
    '@/assets/styles/global.scss',
  ],

  plugins: [
    { src: '~/plugins/bootstrap-vue.js' },
    { src: '~plugins/aos.js', ssr: false }
  ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/dotenv'
  ],

  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },

    transpile: [],
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
