const path = require('path');

module.exports = {
  entry: ['core-js/stable', 'regenerator-runtime/runtime', './a.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development'
};