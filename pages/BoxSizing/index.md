# Box Sizing

## 序
`box-sizing` 共支持 `content-box` 以及 `border-box` 俩种模式。  

不同模式对盒子的实际宽高计算方式不同，如下图所示，左侧是浏览器默认的 `content-box` 右侧是 `border-box`。

![content-box & border-box](https://pic.imgdb.cn/item/61404c5944eaada739f3373b.png)

## 建议在所有项目中都全局 Reset 为 border-box
因为这更符合人类的直觉。  

举个例子，假设你希望通过 `width: 25%` 来使一行正好放下四个盒子。  

如果你使用的是 `content-box` 那么当你再给盒子加上一个 `border: 1px solid #ddd` 边框后会发现盒子意外换行了。

而使用 `border-box` 就不需要担心类似的问题。

## 进行全局 Reset 的最佳实践
关于为什么可见 [这篇文章](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/)
```css
html {
	box-sizing: border-box;
}
*, *::before, *::after {
	box-sizing: inherit;
}
```
