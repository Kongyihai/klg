var webpack = require("webpack");

module.exports = {
    entry: {
        './web/public/js/index':'./src/main/index.js'

    },
    output: {
        filename: '[name].js'
    },
  module: {
    loaders:[
      //{ test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
      /*,
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })*/
  ]
};
