var { SyncHook } = require('tapable');
var hook1 = new SyncHook(['str']);

hook1.tap('tap1', function (arg) {
  console.log(arg);
});

hook1.call('我是调用参数');
