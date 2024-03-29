# Iterator in ES6
## Iterator 与 Iterable
Iterator 可以看做一个拥有固定格式的对象，可供 ES6 新增的遍历 `for of` 和解构 `...` 等消费，并按顺序依次产出结果，样例如下
```js
// 除了以下俩个值外也可以额外返回更多的自定义属性
const IteratorResult = {
	value: ..., // 每次迭代产出的真实值
	done: ..., // true|false true代表迭代结束 与true相对应的value一般建议为undefined
}

const Iterator = {
	// 必须 用于返回每次迭代的结果集
	next() { return IteratorResult },
	// 可选 提前结束迭代时做相应的资源清理操作并返回最后的结果集
	return() {},
	// 可选 抛出异常信息并返回最后的结果集
	throw() {}
}
```
一个对象如果实现了 Iterable 接口则被称为 Iterabel 对象(简单来说就是对象上有一个 key 为 `Symbol.iterator` 的方法并且这个的返回值为 Iterator)
```js
const Iterable = {
	[Symbol.iterator]() {return Iterator}
}
```

## 如何构造一个简单的 Iterable 对象
```js
let rand = Math.random()
// 会随机产生一串数字的Iterable对象
const iterable = {
	// 必备!!! 这样才能使该对象 Iterable
	[Symbol.iterator]() {return this},
	// 依次去获取数据
	next() {
		if (rand > 0.5) {
			rand = Math.random()
			return {
				value: rand,
				done: false
			}
		} else {
			return {
				done: true
			}
		}
	}
}
// 该对象可以用 for of 遍历
for (let value of iterable) {
	console.log(value)
}
```

## 如何构造一个完整的 Iterable 对象
```js
// 该对象可以步进的产生对数据的每一步累加结果
const stepAccumulator = {
	[Symbol.iterator]() {
		let sum = 0
		let index = 0
		const data = this.data.slice()
		let done = false
		return {
			// 使迭代器(Iterator)本身可迭代(Iterable)
			[Symbol.iterator]() { return this },
			next() {
				const value = sum += data[index]
				index++
				if (index <= data.length && !done) {
					return {
						value,
						done: false
					}
				} else {
					return {
						done: true
					}
				}
			},
			return(v) {
				console.log('abandoned')
				done = true
				return {
					value: v,
					done: true
				}
			},
			throw(e) {
				console.log('error')
				done = true
				return {
					value: e,
					done: true
				}
			}
		}
	},
	data: []
}
// 设置数据
stepAccumulator.data = [1, 2, 3]
console.log(...stepAccumulator) // 1 3 6

// 1 3 'abandoned'
for (let v of stepAccumulator) {
	console.log(v)
	if (v > 1) break
}

const it = stepAccumulator[Symbol.iterator]()
it.next() // { value:1, done: false }
it.throw('!!!') // 'error' { vallue:'!!!', done: true }
it.next() // { done: true }
```
* `return()` 和 `throw()` 都可以通过 **Iterator** 调用，并且调用后意味着迭代终止，之后便不能通过该迭代器获取到更多的值
* 一般来说 **Iterable** 对象支持同时生成多个 **Iterator**，且相互间的迭代不会互相影响，当然你也可以把迭代器设为单例
* 任何一种取消或者提前终止迭代的操作都会使 **Iterator** 自动调用 `return()` 来处理相关清理工作

## ES6 原生支持的 Iterable 数据结构
包括 `String` `Map` `Set` `Array` 等
```js
const str = 'abc'
const arr = [1, 2, 3]
const map = new Map()
map.set('a', 1)
map.set('b', 2)
for (let v of str) {
	console.log(v) // 'a' 'b' 'c'
}
for (let v of arr) {
	console.log(v) // 1 2 3
}
for (let v of map) {
	console.log(v) // ['a', 1] ['b', 2]
}
```
