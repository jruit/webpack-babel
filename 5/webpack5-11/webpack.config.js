const path = require('path');

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(jpg|png)$/,
      type: 'asset',
      parser: {
        dataUrlCondition: {
          maxSize: 6 * 1024 // 6kb
        }
      }
    }]
  },
  mode: 'none'
};