var fs = require('fs');
var path = require('path');
var stat = fs.stat;
var copy;

var copyFun = function (src, dest) {
  fs.readdir(src, function (err, paths) {
    if (err) {
      throw err;
    }
    paths.forEach(function (path) {
      var from = src + '/' + path;
      var to = dest + '/' + path;
      var readStream;
      var writeStream;
      stat(from, function (err, s) {
        if (err) {
          throw err;
        }
        if (s.isFile()) {
          readStream = fs.createReadStream(from);
          writeStream = fs.createWriteStream(to);
          readStream.pipe(writeStream);
        } else if (s.isDirectory()) {
          copy(from, to);
        }
      })
    })
  })
}

copy = function (src, dest) {
  fs.exists(dest, function (exist) {
    if (exist) {
      copyFun(src, dest);
    } else {
      fs.mkdir(dest, function () {
        copyFun(src, dest);
      })
    }
  })
}

module.exports = copy;