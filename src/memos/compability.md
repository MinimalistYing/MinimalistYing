在各类 Dom 事件中可以通过
```js
// e.path Chrome采用 非标准属性
// e.composedPath() 标准属性 最新的 FF Chrome Safari都兼容
const path = e.path || (e.composedPath && e.composedPath())

// 如果需要兼容更低版本的浏览器 可以自己去遍历
function getPath(e) {
	const path = []
	let dom = e.target || e.srcElement
	while (dom) {
		path.push(dom)
		
		// 为了和composedPath()行为一致
		if (dom.tagName === 'HTML') {
            path.push(document)
            path.push(window)

            return path
       }

		dom = dom.parentNode
	}
}
```
去获取这个事件从触发事件的 Dom 节点开始到 Window 的 Dom 路径
