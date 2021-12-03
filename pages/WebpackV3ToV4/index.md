# Webpack V3 升级至 V4「弃」

## 该文章已过时
> **⚠️ 现在 (2021年) Webpack 已经升级至 V5，所以该文章已过时。**

## 序
半年没关注，最近突然发现 Webpack 的版本已经升到 4.16.2 了，为了紧跟潮流的步伐，决定将项目中使用的 3.10.0 来个升级

## 步骤
1. 安装`webpack`以及`webpack-cli` Ps: V4 开始将 CLI 抽离到了独立的 `webpack-cli` 项目中维护  
所以现在需要分别安装俩个依赖
2. 将项目中所有用到的`loader`以及`plugin`升级到最新
3. 配置文件里新增 `mode: 'development'` or `mode: 'production'`
4. 移除`webpack.optimize.UglifyJsPlugin`，现在 `webpack` 会在生产环境默认对代码进行压缩
5. 移除`extract-text-webpack-plugin`，v4推荐使用新的`mini-css-extract-plugin`来提取样式文件
6. 引入`optimize-css-assets-webpack-plugin`以及`uglifyjs-webpack-plugin`，并在生产环境的配置文件下新增

```js
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = {
	optimization: {
		minimizer: [
			// 由于配置optimization会覆盖默认值 所以这里需要配一下UglifyJsPlugin
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	}
}
```
7. 搞定

## 总结
升级过后打包和编译速度大概提升了15%左右（粗略比较）

上述只是针对我之前项目配置的升级，并不完整，仅供参考

Webpack 官方有提供详细的迁移[Document](https://webpack.js.org/migrate/4/)

遇到问题也可以通过报错信息很快定位到原因，再去相应的Github库上找一找解决办法，迁移过程还是比较顺利的
