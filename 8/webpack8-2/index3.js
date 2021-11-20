var { SyncHook } = require('tapable');
var hook2 = new SyncHook(['str']);

hook2.tap('tap1', function (arg) {
  console.log(arg + 1);
});

hook2.tap('tap2', function (arg) {
  console.log(arg + 2);
});

hook2.call('参数');