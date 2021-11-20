var path = require('path');
var TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: './a.js', 
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  mode: 'none',
};