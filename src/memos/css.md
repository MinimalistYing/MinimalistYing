当 `display: inline-block` 的元素间有换行时，浏览器的渲染结果会带有间隙。
这是由于浏览器会将这个换行符当作字符，所以会占有一个的字符大小的宽度。
解决方法有很多，个人较喜欢 `font-size：0`。

---

CSS 中如下几个伪类选择器中 n 的值不止支持数字类型还支持关键字 (odd / even) 以及公式 (an + b)
* nth-child(n)
* nth-last-child(n)
* nth-of-type(n)
* nth-last-of-type(n)

例如 `p:nth-child(even)` 可以选择所有父元素中下标为偶数的 `<p>` 元素  
又例如 `p:nth-child(3n+1)` 可以选择所有父元素中下标为 3 的倍数加 1 的 `<p>` 元素

---

为什么说使用无单位的数字来设置 `line-height` 最好  
```html
<div style="font-size: 12px; line-height: 1.5em; width: 60px;">
	<p style="font-size: 40px;">段落内容</p>
<div>

<div style="font-size: 12px; line-height: 1.5; width: 60px;">
	<p style="font-size: 40px;">段落内容</p>
<div>
```
上述代码中的俩个 `div` 样式差别仅在于 `line-height`。  
但是可以发现第一个段落中的文字会重叠在一起，因为当使用带单位的值时子元素继承的 `line-height` 是计算值而不是比例。所以第一个段落的实际计算行高为 `18px(12px * 1.5em)` 而字体大小为 `40px`，第二个段落的行高为 `60px(40px * 1.5)` 字体大小与第一段相同。
所以第一段中的文字会发生重叠，为了避免这种问题通常建议使用无单位的数字来设置 `line-height`。  
Ps: `line-height` 的值最好不要设置小于 1.5 ，这样才能保持文本良好的可读性

---

关于清除浮动的各种方法以及其适用场景  
[what-methods-of-clearfix-can-i-use](https://stackoverflow.com/questions/211383/what-methods-of-clearfix-can-i-use)
