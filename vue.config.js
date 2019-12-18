const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/styles/global.scss')
      ],
    })
}

module.exports = {
  chainWebpack (config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  },
  // css: {
  //   loaderOptions: {
  //     less: {
  //       modifyVars: {
  //         'primary-color': '#1DA57A',
  //         'link-color': '#1DA57A',
  //         'border-radius-base': '2px',
  //       },
  //       javascriptEnabled: true
  //     }
  //   }
  // }
}
