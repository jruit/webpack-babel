
// module.exports = {
  // entry: {
  //   app1: './a.js',
  //   app2: './d.js',
  // },
  
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: '[contenthash:8]-[name].js'
  // },
  
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './a.js',  // a.js里引入了CSS文件
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader'
      ],
    }],
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: 'Webpack与Babel入门教程',
      // template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash:8].css',
      chunkFilename: '[id].css',
    }),
  ],
  mode: 'none'
};