var path = require('path');  

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: './js/a.js',   // a.js里又引入了b.js
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  mode: 'none'
};