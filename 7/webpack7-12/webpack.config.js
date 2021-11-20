var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app1: './a.js',
    app2: './c.js',
  },
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle-[contenthash:8].js',
  },
  mode: 'development',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      maxSize: 2000,
    },
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: 'Webpack与Babel入门教程',
    }),
  ]
};