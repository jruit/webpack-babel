const path = require('path');
const CopyPlugin = require('./copy-plugin.js')

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  plugins: [
    new CopyPlugin()
  ],
  mode: 'none'
};