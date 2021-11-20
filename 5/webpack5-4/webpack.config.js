const path = require('path');

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    publicPath: '/',
    open: true,
    compress: true,
    hot: true,
    port: 8089,
  },
  mode: 'none'
};