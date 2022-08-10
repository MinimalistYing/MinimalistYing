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

## 为什么说 `async` + `await` 是 Generate + Promise 结合而成的语法糖？
先看下例：
```js
async function a() {
  const v1 = await new Promise(resolve => resolve(1))
  const v2 = await new Promise(resolve => resolve(2))

  return v1 + v2
}

// 初看是不是和 async/await 很像？
function* b() {
  const v1 = yield new Promise(resolve => resolve(1))
  const v2 = yield new Promise(resolve => resolve(2))

  return v1 + v2
}

// 但实际上想要 Generator 实现和 async/await 一致的逻辑还需要一些额外的工作
const g = b()
const p1 = g.next().value
p1.then(v1 => {
  const p2 = g.next(v1).value
  
  p2.then(v2 => {
    // 这里才能拿到最后 return 出来的 v1 + v2
    const ret = g.next(v2)

    console.log(ret.value)
  })
})

a().then(console.log)

```
所以可以认为 async/await 替我们做了这些执行操作外加一些错误处理。接着我们可以试着写一个简单的自动执行器：
```js
function async (generator, ...params) {
  return new Promise((resolve, reject) => {
    const gen = generator(...params)

    function next(result) {
      if (result.done) {
        resolve(result.value)
      } else {
        // If the value is not a Promise, it converts the value to a resolved Promise, and waits for it.
        Promise.resolve(result.value).then(v => {
          let ret
          try {
            ret = gen.next(v)
          } catch (e) {
            return reject(e)
          }

          next(ret)
        }).catch(err => {
          let ret
          try {
            ret = gen.throw(err)
          } catch (e) {
            return reject(e)
          }
          next(ret)
        })
      }
    }

    next(gen.next())
  })
}

async(function* () {
  const v1 = yield new Promise(resolve => resolve(1))
  const v2 = yield new Promise(resolve => resolve(2))

  return v1 + v2
}).then(console.log)
```