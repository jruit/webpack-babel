var path = require('path');
// var TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: './index.js', 
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  // optimization: {
  //   usedExports: true,
  //   minimize: true,
  //   minimizer: [new TerserPlugin()],
  // },
  mode: 'production'
};