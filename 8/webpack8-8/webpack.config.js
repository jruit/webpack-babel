const path = require('path');
const CopyPlugin = require('./copy-plugin.js')

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  plugins: [
    new CopyPlugin({
      from: path.resolve(__dirname, 'pic'),
      to: path.resolve(__dirname, 'img'),
    })
  ],
  mode: 'none'
};