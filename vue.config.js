
const UglifyJsPlugin=require('uglifyjs-webpack-plugin')

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    externals: {
      vue: "vue"
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            output: {
              comments: false,
            },
            compress: {
              warnings: false,
              drop_debugger: true,
              drop_console: true
            }
          }
        })
      ]
    }
  }
}