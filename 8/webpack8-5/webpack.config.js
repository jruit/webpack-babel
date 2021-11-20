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
      use: ['./add-loader.js', './mul-loader.js']
    }]
  },
  mode: 'none'
}