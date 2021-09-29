# React-Redux 从入门到后悔

## 序
Redux 作为一个简单的用于管理应用状态的工具，可以与任何其它的前端框架共用。当然，尤其适用于数据驱动视图的框架(Vue/React/Angular)。  

React-Redux 利用高阶组件(HOC) / Context，将 React UI 的更新与 Redux Store 的变化绑定在了一起。

## 源码中学习到的小技巧
React-Redux 默认通过以下方法来比较组件的Props是否相等  
如果不等则意味着组件需要进行重绘
```js
// 通过hasOwn.call(xx, xx)
// 相较于xx.hasOwnProperty(xx) 更简洁？
const hasOwn = Object.prototype.hasOwnProperty

// Object.is()的Polyfill
function is(x, y) {
	if (x === y) {
		// Object.is(0, -0) => false
		return x !== 0 || y !== 0 || 1 / x === 1 / y 
	} else {
		// Object.is(NaN, NaN) => true
		return x !== x && y !== y
	}
}

export default function shallowEqual(a, b) {
	if (is(a, b)) return true
	
	// 如果a或者b不是object 并且Object.is(a, b) => false
	// 则认为a和b不等
	if (typeof a !== 'object' || a === null ||
		typeof b !== 'object' || b === null
	) {
		return false
	}
	
	const keysA = Object.keys(a)
	const keysB = Object.keys(b)
	
	// 在a和b都是object的情况下
	// 如果a与b的所有key值相同 并且与之对应的value都满足Object.is(v1, v2) => true
	// 则也认为a和b相等
	if (keysA.length !== keysB.length) return false
	for (let i = 0; i < keysA.length; i++) {
		if (!hasOwn.call(b, keysA[i]) ||
			!is(objA[keysA[i]], objB[keysA[i]])
		) {
			return false
		}
	}
	
	return true
}
```

React的PropTypes除了进行如下的基础校验
```js
number string object bool func
array
symbol
node // 任何可以被当作节点绘制的类型
element // React Element
```
还可以利用相关API进行更严格的格式校验
```js
MyComponent.propTypes = {
	// 指定值中的其中一个 类似枚举类型
	xx: PropTypes.oneOf(['News', 'Photos']),
	// 特定实例
	xx: PropTypes.instanceOf(Foo),
	// 多种可选基础类型
	xx: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	// 只包含特定类型值的数组
	xx: PropTypes.arrayOf(PropTypes.number),
	// 只包含特定类型值的对象
	xx: PropTypes.objectOf(PropTypes.number),
	// 必须包含指定属性的对象
	xx: PropTypes.shape({
		xx: PropTypes.number,
		yy: PropTypes.bool.isRequired
	}),
	// 只能包含指定属性的对象
	xx: PropTypes.exact({
		xx: PropTypes.number,
		yy: PropTypes.bool.isRequired
	}),
	// 任意值
	xx: PropTypes.any.isRequired
}
```

React 的高阶组件(HOC)并不会自动将被包裹组件的静态方法自动继承到新返回的组件中  
会导致以下问题
```js
WrappedComponent.staticMethod = () => {}

const EnhancedComponent = HOC(WrappedComponent)
EnhancedComponent.staticMethod // => undefined
```
可以借助[hoist-non-react-statics](https://github.com/mridgway/hoist-non-react-statics)来解决这个问题
```js
import hoistNonReactStatic from 'hoist-non-react-statics'

const EnhancedComponent = hoistNonReactStatic(HOC(WrappedComponent), WrappedComponent)
EnhancedComponent.staticMethod // => () => {}
```
