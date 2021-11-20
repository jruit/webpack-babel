var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

let loaders = [];
let plugins = [
  new HtmlWebpackPlugin({
    template: 'template.html'
  })
];

if (process.env.NODE_ENV == 'development') {
  loaders = ['style-loader', 'css-loader'];
} else {
  loaders = [
    MiniCssExtractPlugin.loader,
    'css-loader'
  ];
  let plugin = new MiniCssExtractPlugin({
    filename: '[name]-[contenthash:8].css',
    chunkFilename: '[id].css',
  });
  plugins.push(plugin)
}

module.exports = {
  entry: './a.js',  // a.js里引入了CSS文件
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: loaders
    }],
  },
  plugins: plugins,
  mode: 'none'
};