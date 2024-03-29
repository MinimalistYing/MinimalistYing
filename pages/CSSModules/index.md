# CSS Modules
什么是 CSS Modules？摘自文档：
> A CSS Module is a CSS file in which all class names and animation names are scoped locally by default.

## CSS Modules 解决了什么问题
* 完全避免全局样式冲突
* 不会导致样式嵌套层级过深(Less / Sass)
* 不会导致样式命名过于复杂(BEM)
* 由于显示的建立了样式与元素之间的联系，通过编辑器插件等辅助手段可以更方便的清理无用的 CSS

## 如何使用
Webpack 的 `css-loader` 就实现了 CSS Modules，只需在配置 `css-loader` 时加上 `modules: true` 即可，如下
```js
module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            getLocalIdent: '[path][name]__[local]--[hash:base64:5]' // 这样最后生成的类名会提供更多信息 方便 Debug   
          }
        }
      ]
    }
  ]
}
```
配置好后，就可以在 Vue / React / jQuery 中使用 CSS Modules 了。  

假设 `style.css` 如下 
```css
.foo {
  color: red;
}
```
`index.jsx` 如下
```js
import style from './style.css'

ReactDOM.render(<h1 className={style.foo}>Hello World</h1>, document.getElementById('#app'))
```
如上代码，最终在页面上呈现的标题字体应该是红色的。并且可以看到 `<h1>` 标签上的实际类名是类似 `_2BQ9qrIFipNbLIGEytIz5Q` 的不规则字符串。这样哪怕你在多处同时用到 `.header` 这样的简单类名来声明样式，也不用担心会出现冲突。

在开启 CSS Modules 后默认的样式都是局部的，也就是说类名都会被处理成唯一的字符串。  

当然有时我们也希望能设置一些可以全局生效的样式（例如去覆盖一些 AntD 组件的样式），这个时候可以通过如下方式实现
```css
:global(.foo) {
  color: red;
}

/* 在使用 less / sass 也可以如下声明 */
:global {
  .bar {
    color: blue;
  }

  .test {
    color: green;
  }
}
```
全局样式的类名不会被处理，所以页面上所有符合选择器条件的元素都会正确的应用样式。  

CSS Modules 还可以通过 `composes` 进行样式复用。
```css
.base {
  background: black;
  font-size: 16px;
}

.redFont {
  composes: base;
  color: red;
}

.blueFont {
  composes: base;
  color: blue;
}
```
需要注意的是 `composes` 必须是第一条规则，也就是说如下写法是错误的。
```css
.blueFont {
  color: blue;
  composes: base;
}
```
还可以通过 `composes: classNameA classNameB;` 来从多个基类继承样式。

## 总结
工具归工具，正确的使用才能更好的解决问题。  

Ps：个人观点，如果让我决定技术选型的话，我应该不会用 CSS Modules 。从视觉上和代码体验来讲，不如直接使用类名更清晰。  

**Ps：2021 年了，俩年过去，我的观点也有所改变。是否使用 CSS Modules 可能更需要视项目规模而定。对于大型项目而言，
CSS Modules 带来的样式绝对不会冲突的特性还是挺吸引人的。另外也可以考虑使用 Styled-Component 作为替代。**