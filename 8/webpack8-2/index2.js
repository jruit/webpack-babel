var { SyncHook } = require('tapable');
var hook2 = new SyncHook(['str']);

hook2.tap('tap1', function (arg1, arg2) {
  console.log(arg1);
  console.log(arg2);
});

hook2.call('我是调用参数1', '我是调用参数2');