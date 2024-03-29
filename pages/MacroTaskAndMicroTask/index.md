# JavaScript 中的宏任务（MacroTask）与微任务（MicroTask）

## 引子
给出如下代码，你能否迅速想出他的执行顺序呢？
```js
/* 申明函数 */
async function asyncFunc() {
  console.log('asyncFunc start')
  await foo()
  console.log('asyncFunc end')
}

function foo () {
  new Promise(resolve => {
    console.log('foo1 before resolve')
    resolve()
    console.log('foo2 after resolve')
  }).then(() => {
    console.log('foo3')
    new Promise(resolve => {
      console.log('foo4')
      resolve()
    }).then(() => {
      console.log('foo5')
    })
  }).then(() => {
    console.log('foo6')
  })
}

/* 程序执行 */
console.log('开始')

// 默认的 delay 是 0
setTimeout(() => {
  console.log('setTimeout end')
})

asyncFunc()

console.log('结束')
```

## EventLoop
首先我们需要了解 JavaScript 在浏览器中是如何运行的。  

JavaScript 是一种单线程语言 (不考虑 WebWorker) ，简单来说就是在同一时间只会有一个任务在执行。作为用于处理用户界面交互的语言来说，单线程带了的好处是不会出现多个线程同时操作一个 Dom 节点的情况，坏处是当处理一个耗时较长的复杂任务时会造成浏览器的卡死，用户在这个任务执行完成之前与页面进行的任何交互都需要等到该任务执行完毕才能得到响应。  

但是当 JavaScript 处理类似 I/O 或者 Network 等耗时较长的任务时，如果需要等请求结束用户才能与页面交互明显不合理。为了解决这个问题，JavaScript 提供了 EventLoop ，通过这种机制可以确保程序的运行不会处于一种被某个任务阻塞的等待状态。也就是说在等待一个请求从服务端返回的过程中，单线程可以继续处理其它的任务，直至请求返回后再等到某个”合适的时机“来处理该请求的回调函数。  

在程序运行过程中，JavaScript 有一个栈（Stack）来维护当前执行任务。  

先来看看不包括异步流程的情况：
```js
function a () {
  console.log('a')
  b()
}

function b () {
  console.log('b')
}

a()
```
我们先把整段代码当作一个主函数（main），所以该段代码的执行流程如下：
1. main 函数入栈
2. a 函数入栈，在 main 中被调用
3. console.log('a')
4. b 函数入栈，在 a 中被调用
5. console.log('b')
6. b 执行完毕，出栈
7. a 执行完毕，出栈
8. main 执行完毕，出栈  
   
如果存在异步任务呢？异步任务是什么时候入栈执行的？  

在运行过程中还存在 MarcroTask Queue / MicroTask Queue 俩种队列，异步任务注册的回调函数会被放入队列中，
并且等到当前 Stack 中的任务都执行完毕后将队列中的回调函数以先进先出的顺序入栈执行。首先我们只考率 MarcroTask Queue 例如
```js
console.log('start')

setTimeout(() => {
  console.log('MarcroTask')
})

for (let i = 0; i<1e9; i++) {
  // 长时间任务，保证执行时间超过浏览器 setTimeout 的默认延时
}

console.log('end')
```
该段代码的执行流程如下
1. main 函数入栈
2. console.log('start')
3. 执行 SetTimeout，由于没有设置延时时间，回调函数会在浏览器默认的最小间隔后放入任务队列
4. 执行循环，在过了最小间隔后虽然回调函数已经在队列中，但是由于当前 Stack 还有任务在执行，所以回调函数并没有立刻执行
5. console.log('end')
6. main 执行完毕，出栈
7. 当前 Stack 中的任务都执行完毕，回调函数从任务队列入栈
8. console.log('MarcroTask')

可以看到这就是最简单的一个异步流程，下面再来具体聊聊事件循环中的宏任务与微任务。

## 宏任务（MacroTask）
通过 `<script>` 加载的脚本，浏览器的 Render, `setTimeout` 中的回调函数都可以视为一种宏任务。  

在宏任务中可以继续注册新的宏任务或者微任务，区别是新的宏任务会被推至 MarcroTask Queue 中的队尾等待执行，而微任务则会推入 MircoTask Queue 队尾并且在当前宏任务执行完毕后立马执行。  

下面我们来看看理解宏任务对性能优化的帮助，假设我们有一段耗时很长的任务需要执行
```js
let start = Date.now()
function count() {
  for (let i = 0; i < 1e9; i++) {
    // 长时间任务
  }
  alert("Done in " + (Date.now() - start) + 'ms')
}
count()
```
在该消息框弹出之前，我们会发现页面上元素都无法点击，浏览器处于一个假死状态。假设该任务一定需要耗时这么久，那我们有没有办法让该任务在执行过程中不阻碍用户操作呢？  

答案是我们可以利用宏任务来使该任务分片运行。
```js
let start = Date.now()
let i = 0
function count() {
  i++
  while (i % 1e6 !== 0) {
    i++
  }
  if (i !== 1e9) {
    setTimeout(() => count(), 0)
  } else {
    alert("Done in " + (Date.now() - start) + 'ms')
  }
}
count()
```
将复杂任务分片成通过宏任务来递归执行的一个个小任务，这样在执行期间用户点击按钮等触发的回调函数就可以不被阻塞的放入 MarcroTask Queue。
并在一个个执行分片的宏任务之间被运行，虽然这样会导致任务总的运行时间被拉长，但是期间浏览器不会假死，我们的目的也就达到了。  

我们可以大概的把上下俩种方式的 MarcroTask Queue 做一个对比：  

不使用宏任务: `count(一次性执行完毕，耗时长)` => `onclick` => `onclick`  

使用宏任务: `count(分片一)` => `count(分片二)` => `onclick` => `count(分片三)`

Ps: 不考虑兼容性的话，将这些复杂任务放入 WebWoker 执行会更好

再来看看一个很典型的宏任务例子：
```js
for (var i = 1; i < 10; i++) {
  setTimeout(() => {
    console.log(i)
  })
}
```
为什么输出的是 10 而不是 1 - 9 呢？正是因为 `setTimeout` 里的回调函数是一个宏任务，所以等到函数执行时循环语句已经执行结束。  

而恰好 `var` 声明的变量是函数级作用域，所有的回调函数里的 `i` 指向的都是同一个变量，所以最终的输出结果是 10。如果换成 `let` 就不会有这个问题，因为它是块级作用域，相当于每次循环都重新声明了一个变量。

### 这些都是宏任务（Ps：由宿主环境发起的任务）
* `setTimeout`
* `setInterval`
* `setImmediate`
* `requestAnimationFrame`
* `addEventListener`

## 微任务（MicroTask）
首先来看一下 MDN 上给出的定义:  

> A microtask is a short function which is executed after the function or program which created it exits and only if the JavaScript execution stack is empty, but before returning control to the event loop being used by the user agent to drive the script's execution environment.

微任务与宏任务有许多相似之处，但是俩者存放在不同的队列中，主要区别在于俩个队列中的任务入栈时机不同，在每个宏任务执行完后都会立马将所有在队列中的微任务执行完毕，而且在微任务中递归的新增微任务，都会在这期间执行，直至队列中不再有微任务为止，所以不小心的话会造成死循环，例如
```js
let flag = true
function test () {
    Promise.resolve().then(() => {
        if (flag) test()
    })
}
// 100ms 后设置 flag 为 false 停止递归
setTimeout(() => flag = false, 100)
test()
```
换做宏任务来进行递归调用就可以解决问题
```js
let flag = true
function test () {
    Promise.resolve().then(() => {
        setTimeout(() => {
            if (flag) test()
        })
    })
}
setTimeout(() => flag = false, 100)
test()
```
再来看一个例子，更直观的感受微任务与宏任务的不同之处：
```js
const dom = document.getElementById('dom')
    
let i = 0
function count () {
  i++
  while (i % 10000 !== 0) {
    i++
  }
  if (i <= 1e7) {
      dom.innerText = i
      /* 宏任务 */
      // setTimeout(count)

      /* 微任务 */
      queueMicrotask(count)
  }
}
count()
```
假设页面上有一个 id 为 dom 的元素，会发现用宏任务递归调用可以看到数字逐步增长的动画，而用微任务调用则只能看到最终的数字。  


大多数情况下我们都不会特意的去用到微任务，但是在有些时候理解好微任务也能带给我们一定的帮助，尤其是对框架和库的作者来说。

### 这些都是微任务（Ps：由 JavaScript 引擎发起的任务）
* `Promise`
* `queueMicrotask`
* `process.nextTick`
* `MutationObserver`

## 关于计时器的一些代码片段

JavaScript 中的 Timer `setTimeout` 以及 `setInterval`
* 每次调用会返回一个自增的 ID 用于传入 `clearTimeout` 以及`clearInterval` 来清除计时器
* 由于 JavacScript 是单线程的，所以这俩个函数并不能确保一定会在指定时间到达后立即执行  

```js
// 超出 100ms 一段时间后才会输出
// 因为线程被循环阻塞
console.time('执行间隔')
setTimeout(() => console.timeEnd('执行间隔'), 100)

for (let i=0; i<1000000000; i++){}
```
* 不传入延时参数时默认为 0ms，哪怕延时 0ms 也是异步，只有主线程空闲时才执行

```js
// 输出顺序为 2 1
// 并不会按正常执行顺序输出
setTimeout(() => console.log(1))

console.log(2)
```
* `setInterval` 所指的间隔并不是指多长时间执行一次，而是多长时间将该函数放到执行队列中一次  
所以当传入其中的函数执行时间超过所设的间隔时间时，函数真实的执行间隔可能为 0ms

```js
let i = 0;
const start = Date.now();
const timer = setInterval(() => {
    i++;
    i === 5 && clearInterval(timer);
    console.log(`第${i}次开始`, Date.now() - start);
    for(let i = 0; i < 100000000; i++) {}
    console.log(`第${i}次结束`, Date.now() - start);
}, 100);
```

Ps: 还有一个 IE 专属的 `setImmediate` 可以理解为 `setTimeout(0)` 的替代，在此不做展开


## 思考题
代码一：
```js
let i = 0
let start = Date.now()
function count() {
  // do a piece of the heavy job (*)
  do {
    i++
  } while (i % 1e6 != 0)
  if (i == 1e9) {
    alert("Done in " + (Date.now() - start) + 'ms')
  } else {
    setTimeout(count) // schedule the new call (**)
  }
}
count()
```
代码二：
```js
let i = 0
let start = Date.now()
function count() {
  // move the scheduling to the beginning
  if (i < 1e9 - 1e6) {
    setTimeout(count) // schedule the new call
  }
  do {
    i++
  } while (i % 1e6 != 0)
  if (i == 1e9) {
    alert("Done in " + (Date.now() - start) + 'ms')
  }
}
count()
```
如上俩段代码，谁会更快的执行完毕？为什么？

## 为什么经常听到 setTimeout 有 4ms 的最小间隔时长？
实际上可以说所有浏览器都对 setTimeout 有一个最小间隔时长，只不过不一定是 4ms。  

建议看看 [Article](https://www.bruceyj.com/front-end-interview-summary/system-design/why-is-the-design/2-why-setTimeout-4ms.html)，文章深入分析了浏览器厂商为什么要设置这样一个最小间隔。

## 参考文档
* [https://javascript.info/event-loop](https://javascript.info/event-loop)
* [https://javascript.info/microtask-queue](https://javascript.info/microtask-queue)
* [https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth)
* [https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide)
* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
* [https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
* [https://juejin.im/post/5b73d7a6518825610072b42b](https://juejin.im/post/5b73d7a6518825610072b42b)
