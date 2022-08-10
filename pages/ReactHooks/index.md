# React Hooks In Depth

## 序
除了最常见的 `useState` 以及 `useEffect`，React 其实还提供了不少其它 Hooks。这些 Hooks 由于平时在项目里使用场景较少，所以很容易被人忽略。但这些往往也是必须要掌握的，所以在此做一个整理，以便记忆。

## useImperativeHandle
必须配合 `React.forwardRef()` 一起使用，用于在函数组件中子组件向父组件暴露自身的状态以及方法。  

具体样例可参考 [React Refs](https://minimalistying.com/ReactRefs)。 

## useLayoutEffect
与 `useEffect` 有着完全相同的 API，区别仅在执行时机不同。`useEffect` 会不阻塞页面渲染异步执行，而 `useLayoutEffect` 会在所有的 DOM 变更之后同步调用，可以使用它来读取 DOM 布局并同步触发重渲染。从下面这个例子中可以看到，点击后，使用 `useEffect` 的组件会出现闪烁，而 `useLayoutEffect` 不会。  

<iframe src="https://codesandbox.io/embed/useeffect-vs-uselayouteffect-tg3uq2?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="useEffect Vs useLayoutEffect"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## useDebugValue
个人感觉，`useDebugValue` 只是一种临时性的方案。因为在 React DevTools 中没办法看到 Hooks 的状态名称，所以当逻辑稍微复杂一点时，就很难通过 DevTools 来 Debug。所以 React 官方提供了 `useDebugValue`，用于在 DevTools 中展示更多的信息便于 Debug。假设有如下 Hooks：
```js
function useDemo() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  useDebugValue(a % 2 === 0 ? 'a is Even' : 'a is Odd')
  useDebugValue(b % 2 === 0 ? 'b is Even' : 'b is Odd')

  return [a, b, setA, setB]
}
```
在 DevTools 就可以可以看到如下信息：
![useDebugValue in DevTools](https://pic.imgdb.cn/item/62d6336bf54cd3f93772382f.jpg)

## useCallback & useMemo
首先 `useCallback(fn, deps)` 等同于 `useMemo(() => fn, deps)`，所以接下来我们只讨论 `useMemo`。  

由于 Function Component 在每次触发渲染时都会将函数体执行一遍。而当其中存在一些消耗性能的计算时，每次 render 都去执行这些计算无疑会严重影响整个应用的性能。

<iframe src="https://codesandbox.io/embed/usememo-as-a-performance-optimization-wm7330?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="useMemo as a performance optimization"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

在上例中可以看到，使用 `useMemo` 优化后点击 refresh 按钮就不会再感觉卡顿了。

## 总结
* 尽可能使用 `useEffect` 而不是 `useLayoutEffect`。
* 当需要对自定义 Hooks 增加一些提示信息以便 Debug 时可以使用 `useDebugValue`。