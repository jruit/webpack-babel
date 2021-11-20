var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './a.js',  // a.js里引入了CSS文件
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  module: {
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template.html'
    })
  ],
  mode: 'none'
};