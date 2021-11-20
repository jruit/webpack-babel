var path = require('path');
var copy = require('./copy.js');

class CopyPlugin {
  constructor (options) {
    console.log(options);
  }
  apply (compiler) {
    compiler.hooks.afterEmit.tap('CopyPlugin', compilation => {
      console.log('CopyPlugin');
      var from = path.resolve(__dirname, 'pic');
      var to = path.resolve(__dirname, 'img');
      copy(from, to);
    })
  }
}

module.exports = CopyPlugin;








