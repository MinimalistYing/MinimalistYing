Javascript中的整数在超过9007199254740992也就是 `Math.pow(2, 53)` 时精度无法精确至个位  
会出现 `Math.pow(2, 53) + 1 === Math.pow(2, 53)` 的情况  
关于其它数字过大时存在的问题可见[这篇Blog](http://www.plqblog.com/views/article.php?id=29)

---

关于`encodeURI|decodeURI`以及`encodeURIComponent|decodeURIComponent`，俩者都是用于对URI进行编解码操作  
区别在于前者默认接受的是一个完整的URL所以不会对所有的字符进行编解码  
而后者会对所有需要被编解码的字符进行编解码，例如对`http://www.a.com?a=1+1`进行`encodeURI`  
不会发生任何变化而进行`encodeURIComponent`的结果是`http%3A%2F%2Fwww.a.com%3Fa%3D1%2B1`

---

关于`Object.keys()`以及`Object.getOwnPropertyNames()`的区别  
相同的是俩者都不会列出从原型上继承的属性key值  
区别在于前者只会列出所有可枚举属性的key值，而后者会列出所有属性的key值，包括不可枚举的  
所谓不可枚举的属性，即是通过类似  
`Object.defineProperty(o, 'a', { enumerable: false, value: 0 })`定义的属性

---

IE10+ 以及各现代浏览器提供了原生的方法 `btoa` 以及 `atob` 支持对字符串进行 Base64 编解码  
```js
// Binary to ASCII 编码
window.btoa('a') // "YQ=="
// ASCII to Binary 解码
window.atob('YQ==') // "a"
```
需要注意的是这俩个方法只支持 `ASCII` 编码，所以在处理 `UTF-8` 编码的字符串时会出现乱码  
例如 `btoa('我')` 会报错
> Uncaught DOMException: Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.

解决方法如下(Ps: GitHub 提供部分 API 就是通过这种形式对内容编解码的)
```js
// 编码
window.btoa(unescape(encodeURIComponent(str)))
// 解码
decodeURIComponent(escape(window.atob(str)))
```

---

关于函数参数同时采用解构以及默认参数时的细微不同

```js
function test( { x = 1 } = {}, { y } = { y: 1 }) {
	console.log(x,y)
}
test() // 1,1
test({}, {}) // 1,undefined
```

---

关于 ES6 新引入的 Regexp Sticky Mode (适用于匹配一串以一定规则重复的字符串)
```js
var reg = /foo/
var regSticky = /foo/y
var str = '***foo***'

reg.test(str) // true
reg.lastIndex = 4
reg.test(str) // true

regSticky.test(str) // false
regSticky.lastIndex = 3 // 只有在lastIndex处完全匹配 才算做匹配成功
regSticky.test(str) // true
console.log(regSticky.lastIndex) // 6 匹配成功会将lastIndex移动至匹配结果后紧接着的index
regSticky.test(str) // false
console.log(regSticky.lastIndex) // 0 匹配失败会将lastIndex重置为0
```

---

JavaScript 实现数组乱序
```js
const arr = [1,2,3,4,5,6,7,8,9,10]

// 错误的方法 以下代码并不能做到真正乱序
// 由于Array.sort()内部的实现方式导致
// Array.prototype.sort(comparefn)
// Calling comparefn(a,b) always returns the same value v when given a specific pair of values a and b as its two arguments.
arr.sort(() => Math.random() - 0.5)

// 进阶版 保证对于相同的a,b arr.sort()比较产生的结果相同
const random = arr.map(Math.random);
arr.sort((a, b) => random[a] - random[b]);

// Fisher–Yates shuffle
let i = arr.length
while(i) {
	const random = Math.floor(Math.random()*i);
  i--;
  [arr[i], arr[random]] = [arr[random], arr[i]]
}
```

---

给定一组数 `1 2 3 4 5 6 7 8 9` 在其间隔处任意加上 `+ - * / 空白` 五种操作符  
列出其所有计算结果为 `100` 的组合
```js
const num = [2, 3, 4, 5, 6, 7, 8, 9]
const operators = ['', '+', '-' , '*', '/']

function recursive(t, i) {
	let str
	for (let operator of operators) {
		str = t + operator + num[i]
		if (i >= 7) {
			if (eval(str) === 100) console.log(str, eval(str))
		} else {
			recursive(str, i+1)
		}
	}
}

// 以 1 为起始进行递归
recursive('1', 0)

```

---

关于 JavaScript 中的 Timer `setTimeout` 以及 `setInterval`
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

---

项目中开发接入支付宝跳转流程时碰到了一个问题  
需要通过 Ajax 向后台请求跳转 URL 并通过 `window.open()` 在新窗口中打开  
由于浏览器限制只允许在 Dom 事件处理函数中通过 `window.open()` 来打开新页面  
所以如果直接在请求成功的回调函数中进行操作会发现打开新窗口的操作被浏览器拦截  
需要用户确认允许该页面弹窗才能正常跳转  
该问题的最终解决方案如下
```js
function onClick() {
	// 先在点击事件中打开原项目的中转页
	const newWindow = window.open('redirect.html', '_blank')
	axios.post('xxx')
	.then(url => newWindow.location.href = url) // 请求成功 将新页面的地址修改为后台返回的 URL
	.catch(err => newWindow.close()) // 请求失败 关闭新开的窗口
}
```

---

关于在 Promise 中使用 `return Promise.reject()` 以及 `return new Error()` 的不同
```js
Promise.resolve('a')
.then(res => {
  if (Math.random() > 0.5) {
    return res
  } else {
    return Promise.reject('error')
    // return new Error('error')
  }
}, err => {
  console.error(err + '1 reject')
}).then(res => {
	// 使用 return new Error() 会执行
  console.log(res + '2 fulfill')
}, err => {
	// 使用 return Promise.reject() 会执行
  console.error(err + '2 reject')
})
```

---

```js
const listeners = []
listeners.push(function() {
  console.log(this)
})
listeners.push(function() {
  console.log(this)
})

for (let i = 0; i < listeners.length; i++) {
	const listener = listeners[i]
	listener() // 指向 window
}

for (let i = 0; i < listeners.length; i++) {
	listeners[i]() // 指向 listeners 数组
}

for (let listener of listeners) {
	listener() // 指向 window
}
```
理解这个问题关键在于认识到数组在 Javascript 中其实只是一种特殊的对象
