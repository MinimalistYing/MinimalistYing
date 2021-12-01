# 移动端碰到的一些兼容问题记录

## 序
最近翻看以前的备忘时发现解决过不少移动端的兼容性问题。  

但这些问题不具备普适性，删了又怕以后再碰到，所以在此进行一下整合。

## Andriod 部分机型页面跳转失败
Andriod 部分机型的 WebView 不支持通过
```js
window.location.replace()
```
来实现无法返回的页面中转操作，因此建议优先考虑采用 History API 来实现相应功能
```js
window.history.replaceState({}, title, url)
```

## Andriod 下获取不到 localStorage
Andriod 中调用 WebView 来访问 H5 页面时 HTML5 的 DOMStorage 也就是`localStorage|sessionStorage` 默认是关闭的。  

需要客户端同学主动通过 `settings.setDomStorageEnabled(true)` 来开启，未开启的话会碰到这个问题。  

当然，我相信稍微有点经验的客户端同学都会默认帮前端配置好的。

## IOS 点击上一页渲染白屏
在用 Vue 开发 IOS WebView 内嵌 H5 SPA 页面时碰到点击APP返回上一页时出现页面白屏的问题，需要滑动一下页面，内容才会显示。  

具体问题以及解决方式可以参考[issue](https://github.com/vuejs/vue/issues/5533#issuecomment-343864468)  

导致这个问题的主要原因应该还是在返回时仍去异步加载数据，最佳解决方式应该是缓存相应的异步请求数据。  

另外这应该算是 Vue 自身的问题，不知道现在修复了没有。

## 页面字体大小受 Andriod 系统字体大小影响
在联调 Andriod WebView 内嵌 H5 页面时发现一个问题，页面的 `font-size|line-height`  会随着系统字体大小的调整而缩放导致布局错位。  

比如设置的 `font-size: 14px` 当手机字体设为超小时，通过 Chrome inspect WebView 可能会发现 Computed Style 中显示的实际 `font-size` 为 `14*0.86=12.04px`。  

让客户端同学配置 `webview.getSettings().setTextZoom(100)` 可完美解决问题。

## 如何禁用手机端长按弹出菜单
IOS：
```css
// 这个属性会导致IOS上的input能唤起浏览器键盘 但无法聚焦input框
// 最终结果就是无法正常输入!!!
// 感觉这种禁用需求应该直接予以否决
user-select: none; 
-webkit-touch-callout: none;
```
Andriod：
```js
window.oncontextmenu = e => e.preventDefault()
```

## 关于移动端点击事件 300ms 延时
为什么会有？
> 移动端的浏览器支持快速双击缩放页面，如果没有这个延时当用户点击时就无法判断用户是想要双击缩放还是仅仅单击。

> mobile browsers will wait approximately 300ms from the time that you tap the button to fire the click event. The reason for this is that the browser is waiting to see if you are actually performing a double tap.

解决方案：
* 禁用缩放: `<meta name="viewport" content="user-scalable=no">`
* 不禁用缩放，更改默认的视口宽度: `<meta name="viewport" content="width=device-width, initial-scale=1">`
* 直接使用 [FastClick](https://github.com/ftlabs/fastclick)

## 部分 WebView 中无法通过 document.title 直接修改页面标题
解决方案：
```js
setTimeout(() => {
	// 利用iframe的onload事件刷新页面
	document.title = 'xxxxxxxx'
	const iframe = document.createElement('iframe')
	iframe.style.visibility = 'hidden'
	iframe.style.width = '1px'
	iframe.style.height = '1px'
	iframe.onload = () => {
		setTimeout(() => {
			document.body.removeChild(iframe)
		}, 0)
	}
	document.body.appendChild(iframe)
}, 0)
```
