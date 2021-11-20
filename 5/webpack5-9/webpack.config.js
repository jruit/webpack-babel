const path = require('path');

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js',
    assetModuleFilename: 'static/[hash:6][ext][query]'
  },
  module: {
    rules: [{
      test: /\.jpg$/,
      type: 'asset/resource'
    }]
  },
  mode: 'none'
};