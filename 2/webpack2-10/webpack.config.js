var path = require('path');

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js',
    chunkFilename: '[chunkhash:8].js',
  },
  mode: 'none'
};