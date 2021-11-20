var path = require('path');

module.exports = {
  entry: './src/a.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'https://cdn.example.org/',
  },
  mode: 'none'
};