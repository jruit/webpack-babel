var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle-[contenthash:8].js',
  },
  mode: 'none',
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: 'Webpack与Babel入门教程',
    }),
  ]
};