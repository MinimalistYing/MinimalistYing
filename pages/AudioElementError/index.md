# 记一次 Audio 标签未及时销毁导致的问题

## 起因
正在做的 IM 项目，通过如下组件（简化版）来展示语音消息：
```jsx
const Audio = ({ url }) => (
  <audio controls src={url} />
)
```
然后聊天窗口切着切着就发现音频文件无法正常加载了，并且控制台出现如下报错：
```
[Intervention] Blocked attempt to create a WebMediaPlayer as there are too many WebMediaPlayers already in existence. See crbug.com/1144736#c27
```
![错误信息](https://pic.imgdb.cn/item/61090eb15132923bf80b1389.jpg)

自从做了这个项目感觉就一直在试着挑战浏览器的极限，Google 了一番后发现 Chrome 自从 92 版本后新增了对做多加载 `<audio />` 以及 `<video />` 数量的上限，官方申明如下：

![公告](https://pic.imgdb.cn/item/610911f85132923bf812cfff.jpg)

但是实际页面上并没有同时渲染这么多标签，所以考虑是否是由于资源没有及时释放导致的问题。

## 解决方案
需要在组件销毁时手动释放一下 Audio 占用的资源，这可能是 React 自身需要修复的问题？
```jsx
const Audio = ({ url }) => {
  const audioDom = useRef(null)

  useEffect(() => {
    return () => {
      if (audioDom.current) {
        audioDom.current.removeAttribute('src')
        audioDom.current.srcObject = null
        audioDom.current.remove()
      }
    }
  }, [])

  return <audio ref={audioDom} controls src={url} />
}
```

### 参考
* [Chromium Review](https://chromium-review.googlesource.com/c/chromium/src/+/2816118)
* [Chromium Bugs](https://bugs.chromium.org/p/chromium/issues/detail?id=1232649)