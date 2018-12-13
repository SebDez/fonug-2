const path = require('path')
const webpack = require('webpack')

module.exports = {
  // Change build paths to make them Maven compatible
  // see https://cli.vuejs.org/config/
  outputDir: 'target/dist',

  assetsDir: 'assets',

  pluginOptions: {
    i18n: {
      locale: 'fr',
      fallbackLocale: 'fr',
      localeDir: 'locales',
      enableInSFC: 'false'
    }
  },

  chainWebpack: webpackConfig => {
    const svgRule = webpackConfig.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: {
          plugins: [
            { removeTitle: true },
            { removeViewBox: false }
          ]
        }
      })

    const allSassLoader = [
      webpackConfig.module.rule('sass').oneOf('vue-modules').use('sass-loader'),
      webpackConfig.module.rule('sass').oneOf('vue-modules').use('sass-loader'),
      webpackConfig.module.rule('sass').oneOf('vue').use('sass-loader'),
      webpackConfig.module.rule('sass').oneOf('normal-modules').use('sass-loader'),
      webpackConfig.module.rule('sass').oneOf('normal').use('sass-loader'),
      webpackConfig.module.rule('scss').oneOf('vue').use('sass-loader'),
      webpackConfig.module.rule('scss').oneOf('normal-modules').use('sass-loader'),
      webpackConfig.module.rule('scss').oneOf('normal').use('sass-loader')
    ]

    allSassLoader.forEach(sassLoader => {
      sassLoader.options({
        includePaths: [
          path.resolve('./node_modules')
        ]
      })
    })
  },

  configureWebpack: () => {
    return {
      plugins: [
        new webpack.DefinePlugin({
          'process.env.VUE_APP_APPLICATION_VERSION': JSON.stringify(require('./package.json').version)
        })
      ]
    }
  },

  baseUrl: ''
}
