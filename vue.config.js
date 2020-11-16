const webpack = require("webpack")

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    externals: {
      vue: "vue"
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        output: {
          comments: false
        }
      })
    ]
  }
}