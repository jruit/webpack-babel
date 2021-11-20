var path = require('path');
var copy = require('./copy.js');

class CopyPlugin {
  constructor (options) {
    this.from = options.from;
    this.to = options.to;
  }
  apply (compiler) {
    compiler.hooks.afterEmit.tap('CopyPlugin', compilation => {
      copy(this.from, this.to);
    })
  }
}

module.exports = CopyPlugin;








