# 「YDKJS Async & Performance」

## Async Console
由于 `console.log` 没有一个特定标准，并且 I/O 属于比较消耗性能的操作，所以有的浏览器实现会将其作为异步。  

这在某些时刻我们通过 `console.log` Debug 时会带来一些问题，例如：
```js
var a = { index: 1 } 
console.log(a) // 在某些情况下在控制台看到的输出可能是 {index: 2} 而不是期望中的 {index: 1}
a.index++
```
在最新的 Chrome（v96）下无法复现，说明浏览器已经针对相关行为做了改进。包括下面这俩个 Stackoverflow 上的问题同样也无法复现：
* [console-log-async-or-sync](https://stackoverflow.com/questions/23392111/console-log-async-or-sync)
* [console.log() shows the changed value](https://stackoverflow.com/questions/11284663/console-log-shows-the-changed-value-of-a-variable-before-the-value-actually-ch)

所以现在看来大多数情况下我们可以都相信浏览器的 `console` 输出，但当遇到预期之外的情况时可以通过输出特定对象的 Snapshot 来试试：
```js
var a = { index: 1 } 
console.log(JSON.stringify(a))
a.index++
```

## 异步代码中的异常处理
首先，`try ... catch` 无法捕获异步回调函数中的异常:
```js
try {
  setTimeout(() => {
    throw new Error('err')
  }, 500)
} catch (e) {
  console.log(`catched ${e}`)
}
// Uncaught Error: err
```
所以类似 `$.ajax` 都会接受成功和失败的俩个回调：
```js
$.ajax({
  success: function (result) {},
  error: function (err) {}
});
```
或者类似 Node.js 采用的 error-first 回调：
```js
fs.readdir('/xxx', (err, files) =>  {})
```
俩者都需要在提供方主动实现：
```js
function async (success, error) {
  setTimeout(() => {
    try {
      success()
    } catch(err => error(err))
  }, 500)
}
// or error-first
function async (cb) {
  setTimeout(() => {
    try {
      cb(null, 'data')
    } catch(err => cb(err))
  }, 500)
}
```
得益于 Promise 中错误会随着链式调用向上“冒泡”的特性，处理异常会轻松不少，不管在哪一步出现异常都可以通过最终的 `catch` 捕获：
```js
new Promise((resolve, reject) => resolve('a'))
  .then(res => Promise.resolve('b'))
  .then(res => {
    throw new Error('err')
  })
  .catch(err => console.log(`catched ${err}`))
// catched Error: err
```