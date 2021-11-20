const path = require('path');

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jpg$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/[hash:8][ext][query]'
      }
    }]
  },
  mode: 'none'
};