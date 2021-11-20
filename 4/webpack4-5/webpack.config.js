var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: 'Webpack与Babel入门教程',
      // template: 'src/index.html'
    })
  ],
  mode: 'none'
};