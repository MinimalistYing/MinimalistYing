# 如何阻止模态框 (Modal / Popup / Dialog) 弹出后 Body 可滚动

## 序

通常当页面出现弹窗时，为了更好当用户体验，我们会希望能阻止底部区域的滚动行为。

## 修改样式为 `overflow: hidden`
在模态框弹出时通过修改 `<body>` 的样式使得滚动条消失：
```js
// 弹出
document.body.style.overflow = 'hidden'
// 关闭
document.body.style.overflow = 'initial'
```
Bootstrap 的 Modal 采取的就是这种方式，缺点在于滚动条消失会导致页面向右偏移约 20px，以填充滚动条消失的空白。在 PC 端会有比较明显的感觉，对用户体验还是稍有影响。  

另外移动端的大多浏览器对给 `<body>` 设置 `overflow: hidden` 并不感冒，绝大多数情况下这种方式在移动端不起作用(亲测 ios Chrome 下无效)。  

AntD 的弹窗的 [ScrollLocker](https://github.com/react-component/util/blob/master/src/Dom/scrollLocker.ts) 也使用的这种方式，不过更贴心的对滚动条宽度做了些特殊处理。

## 通过 Javascript 禁止滚动事件的默认行为
```js
function preventScroll(e) {
	e.preventDefault()
}

// 弹出
// { passive: false }是因为Chrome对相应事件做了优化 如果不设置会导致页面报错
// Unable to preventDefault inside passive event listener due to target being treated as passive. 
// See https://www.chromestatus.com/features/5093566007214080
document.body.addEventListener('mousewheel', preventScroll, { passive: false })
document.body.addEventListener('touchmove', preventScroll, { passive: false })

// 关闭
document.body.removeEventListener('mousewheel', preventScroll)
document.body.removeEventListener('touchmove', preventScroll)
```
这个方案会把弹窗内部的滚动也一并禁止，所以不可行。

## 进一步优化方案
由于我们不想禁止掉所有元素的滚动，可以考虑在需要滚动的元素上加一个特定类。  

当触发事件的元素是该允许滚动的元素或者其子元素时，不去阻止滚动：
```js
function preventScroll(e) {
	// 只有容器中类名包含 scroll-able 的元素以及子元素允许滚动
	if (!e.path.find(dom => dom.classList && dom.classList.contains('scroll-able'))) {
		e.preventDefault()
		e.stopPropagation()
	}
}
```

*----------------------------------------------------------------*  

*🎉 以下内容为 2022 年更新 🎉*  

*----------------------------------------------------------------*

## 最佳方案

使用最新的 [overscroll-behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior) 属性即可，可惜兼容性欠佳：
```css
.modal {
  overscroll-behavior: contain;
  overflow: auto;
}
```