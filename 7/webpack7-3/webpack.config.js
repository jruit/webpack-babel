const path = require('path');
var webpack = require('webpack');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
let config = {
  entry: './a.js',  // a.js里引入了CSS文件
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ],
    }],
  },
  plugins:[
    new webpack.DefinePlugin({
      MY_ENV: JSON.stringify('dev'),
    }),  
  ],
  mode: 'none'
}

module.exports = smp.wrap(config);