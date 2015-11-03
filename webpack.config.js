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
  // cache:true,
  devtool: 'eval',
  output: {
    path: __dirname + '/dist',
    publicPath: "/",
    filename: 'bundle.js',
    sourceMapFilename: '[file].map'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      //exclude: /(node_modules|bower_components)/,
      include: [path.resolve(__dirname, 'node_modules/react-tree-menu'),
        path.resolve(__dirname, 'app')],
      loader: 'jsx?harmony'
    }, {
      test: /\.jsx?$/,
      //exclude: /(node_modules|bower_components)/,
      include: [path.resolve(__dirname, 'node_modules/react-tree-menu'),
        path.resolve(__dirname, 'app')],
      loader: 'babel',
      query: {
        cacheDirectory: false,
        stage: 0
      }
    }, {
      test: /\.css$/,
      //exclude: /(node_modules|bower_components)/,
      include: [path.resolve(__dirname, 'node_modules/font-awesome/css')],
      loader: "style-loader!css-loader"
    }, {
      test: /\.scss$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'style-loader!css-loader!sass-loader'
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      include: [path.resolve(__dirname, 'node_modules/font-awesome/fonts'),'./app'],
      loader: 'file-loader',
    }],
  },
}