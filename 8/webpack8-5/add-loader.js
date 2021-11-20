module.exports = function (src) {
  var result = '';
  if (src) {
    result = +src + 100;
  }
  return `module.exports = '${result}'`;
}