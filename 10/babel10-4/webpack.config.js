const path = require('path');

module.exports = {
  entry: ['./polyfill.js', './a.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development'
};