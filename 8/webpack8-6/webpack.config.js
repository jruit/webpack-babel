var path = require('path');

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.hi$/,
      use: {
        loader: './math-loader.js',
        options: {
          add: false
        }
      }
    }]
  },
  mode: 'none'
};