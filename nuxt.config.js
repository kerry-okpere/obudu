import dotenv from 'dotenv'
let env = dotenv.config();

console.log(process.env.GRAPHQL_URL);
// console.log(config.env);
// const defineEnvironmentPlugin = new webpack.EnvironmentPlugin(['API_URI', 'ADMIN_PASSWORD', 'GRAPHQL_URL']);

// const defineEnvironmentPlugin = new webpack.EnvironmentPlugin(['API_URI', 'ADMIN_PASSWORD', 'GRAPHQL_URL']);

// const environmentPlugin = new webpack.DefinePlugin({
  // 'process.env.ADMIN_EMAIL': JSON.stringify(process.env.ADMIN_EMAIL),
  // 'process.env.ADMIN_PASSWORD': JSON.stringify(process.env.ADMIN_PASSWORD),
//   'process.env.GRAPHQL_URL': JSON.stringify(process.env.GRAPHQL_URL),
//   'process.env.API_URI': JSON.stringify(process.env.API_URI)
// });

// import webpack from 'webpack'

export default {
  mode: 'universal',
  server: {
    port: process.env.PORT ? process.env.PORT: 3000 , // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  // env: env.parsed,
  router: {
    middleware: 'loadEnv'
  },


  /*
  ** Webpack config
  *
  */

  // build: {
    // plugins: [
    //   new webpack.ProvidePlugin({
    //     defineEnvironmentPlugin,
    //     environmentPlugin
    //   })
    // ]
  // },

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
    { src: '~plugins/aos.js', ssr: false },
    { src: '~plugins/vue-social-sharing.js', ssr: true }
  ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/apollo',
    // ['nuxt-env', {
    //   keys: [
    //     { key: 'GRAPHQL_URL' },// Specify a default value
    //     { key: 'API_URI', default: 'default API_URI' } // Specify a default value
    //   ]
    // }]
    // '@nuxtjs/dotenv'
    // ['@nuxtjs/dotenv', { systemvars: true }]
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.GRAPHQL_URL ? process.env.GRAPHQL_URL : "/grapql/" 
      }
    }
  },
  // apollo: {
  //   clientConfigs: {
  //     default: {
  //       httpEndpoint: process.env.GRAPHQL_URL ? process.env.GRAPHQL_URL: "/graphql/"
  //     }
  //   }
  // },

  build: {
    vendor: [ 'vue-social-sharing'],
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
}
