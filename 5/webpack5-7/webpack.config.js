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
      type: 'asset/resource'
    }]
  },
  mode: 'none'
};