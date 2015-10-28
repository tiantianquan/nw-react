var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    entry: [
      'webpack/hot/dev-server',
      './app/app.jsx'
    ]
  },
  target: 'node-webkit',
  output: {
    path: __dirname + '/dist',
    publicPath: "/",
    filename: 'bundle.js',
    sourceMapFilename: '[file].map'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loaders: [
        'jsx?harmony'
      ]
    }, {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        cacheDirectory: true,
        stage: 0
      }
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }],
  },
}