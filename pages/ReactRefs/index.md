# React Refs

## 序
在 Class Component 统治的时期，Refs 还不是那么常见，大多只用在需要进行 DOM 操作的场景。随着现在转为大范围使用 Function Component，Refs 更加平凡地出现在我们的视野里，但感觉官方文档中对其的介绍比较分散。因此，在这里试着整理一下相关的知识，做个总结。

## 使用场景
* 获取 DOM 节点
* 获取子组件实例
* 在 Function Component 中模拟类中的实例变量

## 如何使用

### 在 Class Component 中获取当前组件的 DOM 节点
通过 `React.createRef()`
```js
class App extends React.Component {
  constructor (props) {
    super(props)
    this.inputDOM = React.createRef()
  }

  render () {
    return (
      <>
        <input ref={this.inputDOM} />
        <button onClick={() => this.inputDOM.current.focus()}>focus input</button>
      </>
    )
  }
}
```

### 在 Function Component 中获取当前组件的 DOM 节点
通过 `useRef()`
```js
export default function App() {
  const inputDOM = useRef()
  return (
    <>
      <input ref={inputDOM} />
      <button onClick={() => inputDOM.current.focus()}>focus input</button>
    </>
  )
}
```

### 获取子组件实例
如果子组件为 Class Component，那么很简单，直接像获取 DOM 节点一样通过属性中的 `ref` 赋值即可。特别需要注意的是子组件为 Function Component 的情况，因为函数本身是没有实例的，所以需要通过 `React.forwardRef()` 以及 `useImperativeHandle()` 配合才能实现相同的效果。
<iframe src="https://codesandbox.io/embed/how-to-call-a-child-component-function-in-parent-component-mnyir1?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="How to call a child Component function in parent Component."
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### 在 Function Component 中当作实例变量
不同于 Class Component 中可以直接通过 `this.xxx` 来使用实例变量，由于函数没有实例，所以只能借助 `useRef()` 实现
```js
export default function App() {
  const intervalId = useRef()

  function startInterval() {
    if (!intervalId.current) {
      intervalId.current = setInterval(() => {
        console.log('tictoc')
      }, 1000)
    }
  }

  function endInterval() {
    if (intervalId.current) {
      clearInterval(intervalId.current)
    }
  }

  return (
    <>
      <button onClick={startInterval}>start interval</button>
      <button onClick={endInterval}>end interval</button>
    </>
  )
}
```
这里需要特别提一下，可能大家首先会想到另一种实现方式
```js
let intervalId
export default function App() {
  function startInterval() {
    if (!intervalId) {
      intervalId = setInterval(() => {
        console.log('tictoc')
      }, 1000)
    }
  }

  function endInterval() {
    if (intervalId) {
      clearInterval(intervalId)
    }
  }

  return (
    <>
      <button onClick={startInterval}>start interval</button>
      <button onClick={endInterval}>end interval</button>
    </>
  )
}
```
乍看之下这种方法好像也是正确的，但是当这个组件在多处被调用时，`intervalId` 就会存在冲突，导致代码出问题。所以在 Function Component 中通过闭包使用变量时需要多加小心。

## 总结
* 非必要不使用😂。
* 在获取子组件实例时需要注意区分子组件是 Function Component 还是 Class Component，俩者的实现方式略有区别。
* Ref 无法在子组件中通过 `props.ref` 拿到，所以想要在父组件中获取子组件的 DOM 节点时，需要通过 `React.forwardRef()` 来传递 Ref。