module.exports = function (src) {
  var result = '';
  if (src) {
    var nums = src.split('');
    result = 1;
    var length = nums.length;
    for (var i = 0; i < length; i++) {
      result *= nums[i];
    }
    result = result + '';
  }
  
  return result;
  // this.callback(null, result);
}