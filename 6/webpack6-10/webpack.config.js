var path = require('path');  

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  performance: {
  	hints: 'error',
    maxEntrypointSize: 1000,
  },
  mode: 'none'
};