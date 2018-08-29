(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/components/Markdown/index.jsx":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=l(t("./node_modules/react/index.js")),a=l(t("./node_modules/marked/lib/marked.js")),r=l(t("./node_modules/highlight.js/lib/highlight.js")),s=l(t("./node_modules/highlight.js/lib/languages/javascript.js")),c=l(t("./node_modules/highlight.js/lib/languages/css.js")),i=l(t("./node_modules/highlight.js/lib/languages/xml.js"));function l(n){return n&&n.__esModule?n:{default:n}}t("./node_modules/highlight.js/styles/atom-one-light.css"),t("./src/components/Markdown/style.less"),r.default.registerLanguage("javascript",s.default),r.default.registerLanguage("css",c.default),r.default.registerLanguage("xml",i.default),a.default.setOptions({highlight:function(n){return r.default.highlightAuto(n).value}}),e.default=function(n){return o.default.createElement("div",{className:"my-md",dangerouslySetInnerHTML:{__html:(0,a.default)(n.data)}})}},"./src/components/Markdown/style.less":function(n,e,t){},"./src/components/Memo/index.jsx":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),a=s(t("./node_modules/react/index.js")),r=s(t("./src/components/Markdown/index.jsx"));function s(n){return n&&n.__esModule?n:{default:n}}t("./src/components/Memo/style.less");var c=function(n){function e(){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(e,a.default.Component),o(e,[{key:"render",value:function(){return a.default.createElement("div",{className:"memo"},a.default.createElement("div",{className:"memo-content"},a.default.createElement(r.default,{data:this.props.data.content})),a.default.createElement("span",{className:"memo-date"},this.props.data.date))}}]),e}();e.default=c},"./src/components/Memo/style.less":function(n,e,t){},"./src/components/Memos/index.jsx":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),a=c(t("./node_modules/react/index.js")),r=c(t("./src/components/Memo/index.jsx")),s=function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e}(t("./src/memos/index.js"));function c(n){return n&&n.__esModule?n:{default:n}}function i(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return Array.from(n)}t("./src/components/Memos/index.less");var l=s.compability,d=s.css,u=s.http,p=s.jquery,m=s.js,f=s.other,b=s.react,h=s.vue,g=s.webpack,y=[].concat(i(l),i(d),i(u),i(p),i(m),i(f),i(b),i(h),i(g)),j=function(n){function e(){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(e,a.default.Component),o(e,[{key:"render",value:function(){return a.default.createElement("main",{className:"memos"},a.default.createElement("section",{className:"memo-wrap"},y.map(function(n,e){return a.default.createElement(r.default,{key:e,data:n})})))}}]),e}();e.default=j},"./src/components/Memos/index.less":function(n,e,t){},"./src/memos/compability.js":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{date:"2017/8/1",content:'\n为了使\n```css\ndisplay: inline-block\n```\n在IE8中起作用，必须在文档开头加上\n```html\n<!DOCTYPE html>\n<meta http-equiv="X-UA-Compatible" content="IE=edge">\n```\n'},{date:"2017/8/2",content:"\nIE8中的伪元素只支持类似 `:after` 的写法，不支持 `::after` 的写法\n"},{date:"2017/8/9",content:"\nIE8切换为兼容性视图模式时会将原User-Agent中包含的`MSIE8.0`转变为 `MSIE7.0`\n所以在通过UA来判断IE版本时尤其要注意\n"},{date:"2017/8/13",content:"\n可以通过\n```css\nfilter: Alpha(opacity = ?)\n```\n来在IE7-8中兼容CSS3的 `opacity` 属性\n"},{date:"2017/8/16",content:"\n在IE8下如果在 `table-layout: auto` 的表格中为单元格设置\n```css\nwhite-space: nowrap;\noverflow: hidden;\ntext-overflow: ellipsis;\n```\n想实现单元格内文字过长时出现...并截断多余内容会发现无效，反而表格会被内容撑宽，破坏原有布局。\n要想实现这种效果，只能将表格设为 \n```css\ntable-layout: fixed\n```\n"},{date:"2017/9/1",content:'\nEdge和IE11还有Safari好像会试图去识别页面上的数字是否像电话号码，\n如果像的话会在这些数字下加一个下划线，并使其可点击打开Skype之类的应用拨号(有些邮箱以及地址也同理)，\n想禁用这一特性可在HTML中加上\n```html\n<meta\n\tname="format-detection"\n\tcontent="telephone=no,email=no,address=no"\n>\n```\n'},{date:"2017/9/5",content:'\n关于\n```html\n<meta http-equiv="X-UA-Compatible" content="IE=edge">\n```\n详情参看[这个回答](https://stackoverflow.com/questions/6771258/what-does-meta-http-equiv-x-ua-compatible-content-ie-edge-do)\n'},{date:"2017/9/8",content:"\n通过ES5shim和Babel使用新特性Class时如果类并没有继承却在 `contructor()` 中调用了 `super()`\n会导致在IE8下报错Stackoverflow。谨记如果没有继承关系则不应该调用 `super()` 方法\n"},{date:"2017/9/11",content:"\nIE8下可采用\n```css\nfilter:\nprogid:DXImageTransform\n.Microsoft\n.gradient(startColorstr=xxx,endColorstr=xxx);\n```\n来兼容 `rgba()`\n"},{date:"2018/6/21",content:"\nAndriod中调用WebView来访问H5页面时HTML5的DOMStorage也就是`localStorage|sessionStorage`\n默认是关闭的，需要通过`settings.setDomStorageEnabled(true)`来开启，\n未开启的话会碰到在H5中读取localStorage为null的问题\n"},{date:"2018/6/22",content:"\nAndriod部分机型的WebView不支持通过\n```js\nwindow.location.replace()\n```\n来实现无法返回的页面中转操作，\n因此建议优先考虑采用History API来实现相应功能\n```js\nwindow.history.replaceState({}, title, url)\n```\n"},{date:"2018/6/27",content:"\n手机端的H5页面长按会弹出复制分享的菜单，如果想要禁用IOS可以通过\n```css\n// 这个属性会导致IOS上的input能唤起浏览器键盘 但无法聚焦input框\n// 最终结果就是无法正常输入!!!\n// 感觉这种禁用需求应该直接予以否决\nuser-select: none; \n-webkit-touch-callout: none;\n```\nAndriod通过\n```js\nwindow.oncontextmenu = e => e.preventDefault()\n```\n"},{date:"2018/6/28",content:"\n在联调Andriod WebView内嵌H5页面时发现一个问题，页面的`font-size|line-height`会随着系统字体大小的调整而缩放导致布局错位，\n比如设置一个div的`font-size: 14px`当手机字体设为超小时，\n通过Chrome inspect WebView可能会发现Computed Style中显示的实际`font-size`为14*0.86=12.04px \n在Andriod端通过`webview.getSettings().setTextZoom(100)`可完美解决问题\n"},{date:"2018/7/6",content:"\n部分Andriod 4.4.4版本的机型WebView不支持CSS3的`transform`加了前缀`-webkit-transform`也不行\n但是手机自带的浏览器应该是支持带前缀的形式的，只是WebView中不支持，\n询问Andriod的同学得知WebView采用的浏览器内核和手机自带浏览器的内核还是有差别的\n"},{date:"2018/8/13",content:"\n在用Vue开发IOS WebView内嵌H5 SPA页面时碰到点击APP返回上一页时出现页面白屏的问题，  \n需要滑动一下页面，内容才会显示  \n具体问题以及解决方式可以参考[issue](https://github.com/vuejs/vue/issues/5533#issuecomment-343864468)  \n导致这个问题的主要原因应该还是在返回时仍去异步加载数据，最佳解决方式应该是缓存相应的异步请求数据\n"},{date:"2018/8/20",content:"\n在各类Dom事件中可以通过\n```js\n// e.path Chrome采用 非标准属性\n// e.composedPath() 标准属性 最新的 FF Chrome Safari都兼容\nconst path = e.path || (e.composedPath && e.composedPath())\n\n// 如果需要兼容更低版本的浏览器 可以自己去遍历\nfunction getPath(e) {\n\tconst path = []\n\tlet dom = e.target || e.srcElement\n\twhile (dom) {\n\t\tpath.push(dom)\n\t\t\n\t\t// 为了和composedPath()行为一致\n\t\tif (dom.tagName === 'HTML') {\n            path.push(document)\n            path.push(window)\n\n            return path\n       }\n\n\t\tdom = dom.parentNode\n\t}\n}\n```\n去获取这个事件从触发事件的Dom节点开始到Window的Dom路径\n"}]},"./src/memos/css.js":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{date:"2017/8/3",content:'\n为了实现隐藏一个元素的滚动条但仍可以在鼠标移入其中时进行滚动操作，\n可以通过将其用父元素包裹，并将父元素设为\n```css\noverflow: hidden;\n```\n同时将其向右偏移或者增宽，这样可以使得其滚动条隐藏在父元素之下，类似\n```html\n<div calss="wrapper" style="overflow: hidden; width: 200px">\n\t<div class="inner" style="max-height: 10px; overflow: scroll; width: 220px"></div>\n</div>\n```\n的写法\n'},{date:"2017/8/10",content:"\n`::selection`可用于改变文字选中时的字体颜色和背景色，IE9及以上和现代浏览器兼容\n"},{date:"2017/8/10",content:"\n想实现鼠标悬浮在一个父元素上能触发其子元素在 `:hover` 下的样式，\n之前的思路是通过借助jQuery `$(parent).hover(() => $(son).hover())`来实现，\n今天突然发现原来的方法太复杂，其实只需要几行CSS即可实现想要的效果，类似 \n```css\n.parent:hover .son {\n\t// 这里是鼠标悬浮在父元素上时子元素的样式\n}\n```\n先前的思路在使用原生的Javascript时更难实现，因为原生的规范中并没有hover事件，\n与之相关的是鼠标的 `mouseenter/mouseleave/mousemove` 事件，\n而即使是在代码中触发了这些事件也是无法触发CSS的 `:hover` 状态的\n"},{date:"2017/8/13",content:"\n当一个\n```css\ndisplay: inline-block\n```\n元素的overflow被设为visible以外的值时，它的baseline位置会被从默认的字符x的底线位置修改为下外边沿，\n与此同时同一包含块的其它\n```css\ndisplay : inline-block\n```\n元素会被迫向下偏移来和这个元素对齐，遵循IFC(Inline Formatting Contexts)原则\n"},{date:"2017/8/15",content:"\n当一个 `position: absolute` 的绝对定位元素的父元素的 `overflow` 值被设为非 `visible` 时，\n会出现该定位元素超出父元素的部分会被遮盖掉无法显示的情况，\n暂时对这种问题的解决方式只知道将父元素改为 `overflow: visible` 或者尽量保证定位元素不会超出父元素的边界\n"},{date:"2017/8/16",content:"\n当一个元素被设为 `display: flex` 时，它会被当作一个Flex Container，\n而它的所有子元素都会被当作Flex Item，并且这时候在其子元素上设置 `float | clear | vertical-align` \n的值都是无效的\n"},{date:"2017/8/16",content:"\n一种将全部元素reset为 `box-sizing: border-box` 的方法\n```css\n{\n\tbox-sizing: border-box;\n}\n*, *:before, *:after {\n\tbox-sizing: inherit;\n}\n```\n可能会有更好的方法？详情可见[这篇文章](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/)\n"},{date:"2017/8/27",content:"\n可以通过给锚点设置一个向上的负偏移量来实现调至锚点位置时不会将锚点至于页面最顶部(避免被顶部所固定的Header遮挡)，\n类似: \n```css\na {\n\tposition: relative;\n\ttop: -66px;\n}\n```\n"},{date:"2017/9/18",content:"\n一种提高使用transform以及opacity来做过度效果性能的思路[FLIP](https://aerotwist.com/blog/flip-your-animations/)\n"},{date:"2017/11/1",content:"\n关于实现背景透明但文字不透明的效果，首先考虑的是使用 `opacity` 但其子元素都会继承这个属性，\n且无法单独为其子元素设置一个值，所以不可行。如果只是背景色透明的话，\n使用 `rgba()` 来设置透明 `background-color` 是一种不错的方法，兼容至IE9。\n"},{date:"2017/11/17",content:"\n关于 'box-sizing: content-box' 以及 'box-sizing: border-box' 前者其实是W3C提出，\n后者是早期IE6、7quirk mode下的盒模型实现。但后来人们发现其实后者更符合人的逻辑，所以加了这个属性。\n对于 `content-box` 盒子宽度等于 `width` + `padding` + `border` \n对于 `border-box` 盒子宽度就等于所设的 `width`  减去 `padding` 以及 `border` 才是真正展示内容的宽度\n"},{date:"2017/11/24",content:"\n实现文字模糊效果\n```css\n{\n\tcolor: transparent;\n\ttext-shadow: #111 0 0 5px;\n}\n```\n"},{date:"2017/12/20",content:"\n当 `display: inline-block` 的元素间有换行时，浏览器的渲染结果会带有间隙。\n这是由于浏览器会将这个换行符当作字符，所以会占有一个的字符大小的宽度。\n解决方法有很多，个人较喜欢 `font-size：0`。\n"},{date:"2018/1/17",content:"\n通过CSS3的 `vh(当前视窗高度百分比)`  `vw(当前视窗宽度百分比)`  `vmin`  `vmax` \n这几个熟悉来实现基于浏览器视窗高度的布局，例如全屏遮罩，左侧导航100%自适应当前视窗高度等\n"},{date:"2018/3/1",content:"\n类似 `input/img/iframe` 等内部无法容纳其它内容的元素，\n无法利用伪元素 `::after/::before` 来实现特定样式\n"},{date:"2018/7/17",content:"\n可以通过mask属性来实现对一块区域的遮罩效果\n兼容性不佳，目前只有webkit内核支持\nPs:知乎在内容收起时的渐变透明文字遮罩的实现方式\n```css\n-webkit-mask-image: linear-gradient(#1a1a1a calc(100% - 8rem),transparent calc(100% - 2.8rem));\n-webkit-mask-size: 100% 100%;\n```\n"},{date:"2018/8/16",content:'\n在Less 1.x和2.x的版本中会默认的对calc中的数值进行计算，从而导致一些意外的结果，例如  \n`height: calc(100vh - 20px)`经less编译后的结果是80vh，很明显与我们想要的不符  \n为了避免这个问题需要采用`height: calc(~"100vh - 20px")`这样的写法(Ps: Less 3.x版本已修复这个问题)\n'}]},"./src/memos/http.js":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{date:"2017/8/22",content:"\nHTTP中的URL中没有具体表明端口号时，默认访问80端口，而HTTPS中的默认端口号为443\n"},{date:"2017/8/22",content:"\n关于URI/URL/URN，URL和URM其实是URI(Uniform Resource Identifier)统一资源定位符的子集。\nURL不止指定了资源的地址，同时还指定了获取资源的方式（协议/方法等等）。\n而URN则只通过特定的命名空间标识资源，不关注操作获取资源的方式。\n"},{date:"2017/8/23",content:"\nHTTP的版本号不会被当作小数来比较，而是每个数字都单独处理，\n所以假设将来有这么俩个版本HTTP/2.22和HTTP/2.3，\n前者的版本更高\n"},{date:"2017/8/25",content:"\n由于TCP具有慢启动特性（不能在连接的开始就将所有的IP分组一次发出，\n而是只有在一个分组成功确认后才有发出其它俩个分组的权限），\n所以新连接的速度一般会比已建立好的连接要慢\n"},{date:"2017/8/25",content:"\n源IP地址、目标IP地址、源端口号、目标端口号这四个值一起唯一地定义了一个TCP连接\n"},{date:"2017/8/28",content:"\nWeb服务器也可以接受一个目录的URL请求，类似 `/dir/` 通过配置服务器可以指定不同的返回形式，\n可以返回一个错误，可以默认的去搜索该目录下的index.html并返回，\n可以扫描目录返回包含目录内容的html页面(通常这是不安全的，因为这样会把站点的目录结构暴露出来)\n"},{date:"2017/8/28",content:"\n通常Web服务器的文件系统会有一个根目录(Document Root)来专门用于存放Web内容，\n当服务器收到一个对静态资源的请求时会获取其URI并附加在根目录后去寻找相应的文件，\n例如服务器的根目录为 `/usr/home` 请求为 `/test/haha.gif` \n服务器会在文件系统的 `/usr/home/test/haha.gif` 目录下去寻找被请求的资源文件。\n要注意的是，一个服务器也可能同时提供多个Web站点，它可以通过不同的请求Host或者IP来访问不同的根目录\n"},{date:"2017/9/5",content:"HTTP响应中的Date首部应该表示原始服务器最初产生这个对象的日期"},{date:"2017/9/5",content:"\n`Cache-Control : no-store` 禁止代理缓存 `Cache-Control : no-cache  Pragma : no-cache// 兼容HTTP/1.0` \n允许缓存，但必须先与服务器进行新鲜度验证，之后才能将内容返回给客户端\n`Cache-Control : max-age:66,must-revalidate` 允许缓存，\n并且只有在内容过期后才必须进行新鲜度验证（在缓存过期时即使服务器错误也不会将这个陈旧的缓存返回给客户端）\n"},{date:"2017/9/19",content:"\nHTTP常见状态码\n* 200 => 请求成功\n* 301 => 资源永久迁移\n* 302 => 资源临时迁移\n* 303 =>需要去另一个地址获取资源\n* 304 => 资源未发生变化\n* 400 => 请求异常\n* 401 => 未授权\n* 403 => 服务器拒绝请求\n* 404 => 未找到\n* 405 => 不支持的请求方法\n* 408 => 请求超时\n* 414 => 请求URL过长\n* 500 => 服务器错误\n* 502 => 网关故障\n* 504 => 网关超时\n"},{date:"2017/11/14",content:"\nHTTP协议其实并未对url的长度做过多的限制，但各实际中各浏览器的实现都有着不同的长度限制，\nRFC2616建议不应超过255 bytes也就是2040bit，实际中是IE浏览器最为严格url最长为2083个字符。\n所以关于在get请求中传数组这种操作还需慎重考虑。\n"},{date:"2017/11/17",content:"\n关于浏览器的同源策略:域名（需各级域名完全相同）、协议、端口号都相同称谓同源，非同源的请求会存在跨域问题\n"},{date:"2018/1/31",content:"\n通过在Response Header中配置 `Strict-Transport-Security` 可以实现将请求的页面强制重定向至HTTPS协议访问\n"}]},"./src/memos/index.js":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("./src/memos/compability.js");Object.defineProperty(e,"compability",{enumerable:!0,get:function(){return p(o).default}});var a=t("./src/memos/css.js");Object.defineProperty(e,"css",{enumerable:!0,get:function(){return p(a).default}});var r=t("./src/memos/http.js");Object.defineProperty(e,"http",{enumerable:!0,get:function(){return p(r).default}});var s=t("./src/memos/jquery.js");Object.defineProperty(e,"jquery",{enumerable:!0,get:function(){return p(s).default}});var c=t("./src/memos/js.js");Object.defineProperty(e,"js",{enumerable:!0,get:function(){return p(c).default}});var i=t("./src/memos/other.js");Object.defineProperty(e,"other",{enumerable:!0,get:function(){return p(i).default}});var l=t("./src/memos/react.js");Object.defineProperty(e,"react",{enumerable:!0,get:function(){return p(l).default}});var d=t("./src/memos/vue.js");Object.defineProperty(e,"vue",{enumerable:!0,get:function(){return p(d).default}});var u=t("./src/memos/webpack.js");function p(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"webpack",{enumerable:!0,get:function(){return p(u).default}})},"./src/memos/jquery.js":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{date:"2017/8/29",content:"\n利用好jQuery的事件命名空间可以减少很多需要在一个Dom元素的同一事件上绑定多个不同回调函数时会碰到的问题，例如\n```js\n$(dom).on('click.a', () => {})\n$(dom).on('click.b', () => {})\n```\n当出于某种原因需要解绑第一个函数时，只需要`$(dom).off('.a')` 即可实现，\n同时也不会对b命名空间下的绑定事件有任何影响。如果想触发某个特定空间下的事件，\n可以通过 `$(dom).trigger('click.b')` 来实现\n"},{date:"2017/8/30",content:"\njQuery可以通过 `$(':visible')/$(':hidden')` 来查找可见/不可见的Dom元素\n(通过判断元素的height和width是否大于0，所以\n```css\nopacity:0;\nvisibility: hidden;\n```\n的元素会被认为是可见的)。\n这俩种选择器会带来性能上的问题，尽量避免使用，\n一定要使用的话也应该先通过纯CSS选择器将目标选出再通过 `$(dom).is(':visible')` 或 `$(dom).is(':hidden')` 判断，\n或者通过 `$(dom).filter(':visible')` 或 `$(dom).filter(':hidden')` 过滤\n"},{date:"2017/8/30",content:"\njQuery核心函数的几种重载形式：\n```js\n$(($) => {  //文档加载完毕  //相当于$( document ).ready()  })\n$('selector') // 选择器\n$('selector', parentDom) // 选择器(在父元素的范围下)\n$(dom) // 将Dom对象包装成jQuery对象\n$(domArray) // 将Dom对象的数组包装成jQuery对象\n$() // 1.4以后返回空的jQuery对象\n$('<div></div>') // 将Html字符串包装成jQuery对象\n$('<div>', {'class': 'a'}) // 生成一个标签并包装成jQuery对象\n```\n"},{date:"2017/8/30",content:"\n使用 `$(dom).html('...')` 时需注意防范脚本注入攻击，如果传入的字符串中包含可由用户填写的字段需要先进行转义，\n更好的办法是尽量使用 `$(dom).text('...')`\n"},{date:"2017/9/26",content:"\njQuery部分版本(1.10.X 1.8.X 可能还有其它)存在一个很奇怪的Bug，\n在HTML标签中使用nodeName作为ID(或者input的name)会导致页面报错 `a.nodeName.toLowerCase is not a function` \n使用nodeType作为ID会导致$(window)发生变化并且绑定在上面的resize事件会失效。\n综上所述，以后谨记不要使用nodeName/nodeType/nodeValue作为HEML标签的ID或者name。\n"},{date:"2017/11/14",content:"\n关于 `$.trim()` IE9+应该已经实现了原生的 `String.prototype.trim()` \n低版本浏览器可以使用jQuery的方式来实现Polyfill\n```js\nfunction( text ) {\n\treturn text == null ?\n\t\t''\n\t\t:\n\t\t( text + '' ).replace( /^[s\ufeff ]+|[s\ufeff ]+$/g, '' )\n}\n```\n其正则中的 ` ` 代表全角空格 `\ufeff` 代表BOM头\n"}]},"./src/memos/js.js":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{date:"2017/8/2",content:"\n判断一个值是否为 `NaN` 一定要通过 `isNaN()` 而不是通过等号比较，因为 `NaN !== NaN`\n"},{date:"2017/8/2",content:"\n在Javascript中进行浮点数运算是不可靠的，遵循IEEE 754标准，二进制的浮点数运算不能正确的处理十进制小数，\n例如典型的 `0.1 + 0.2 !== 0.3` 在一定的精度范围内可通过将小数转化为整数再进行比较来解决这个问题\n"},{date:"2017/8/3",content:"\n通过Javascript\n```js\nelement.scrollTop = value\n$(dom).scrollTop(value)\n```\n去设置滚动条滚动位置时，注意所选取的元素就是设置了\n```css\noverflow-y: scroll\n```\n的元素\n"},{date:"2017/8/3",content:"\n在使用Javascript的 `parseInt()` 时，最好显示的指明进制，因为 `parseInt('0x16') === 22` \n而你可能期望的结果是 `parseInt('0x16') === 0` 所以显示的指定进制才能做到真正的结果可控 \n```js\nparseInt('0x16', 16) === 22\nparseInt('0x16', 10) === 0\n```\n"},{date:"2017/8/7",content:"\n实现类似改变一个DOM元素的滚动条位置但不触发绑定在上面的onscroll函数，\n或者改变一个input元素的值不触发绑定在上面的onchange函数的一种思路：在改变值之前先将其绑定的事件函数解绑，\n改变完成后再将原有函数绑定回元素上注意如果值的改变如果是连续的，也就是这个过程会短时间内重复多次执行时，\n需要将解绑和绑定操作放在延时函数中执行，避免反复多次的绑定事件和解绑事件消耗过多资源，导致浏览器卡顿\n"},{date:"2017/8/12",content:"\n判断点击是否在某个DOM外部发生的思路，判断 `event.srcElement(IE) || event.target(FF)` \n是否是这个DOM节点本身或者是其子元素,这里要注意在内部元素有特殊定位的情况下可能这个思路会有问题\n"},{date:"2017/8/20",content:"\nJavascript中字符串替换API\n```js\nconst replacement = (match, $1, $2, offset, string) =>{}\n// 其中的replacement可以是一个回调函数\nString.replace(reg, replacement)\n```\n通过种方法可以实现将被匹配的文本做特殊的转化后再替换的功能，\n具体参数意义以及接口可见[这篇文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)\n"},{date:"2017/9/1",content:"\n用于监听CSS3动画结束的事件\n* webkitAnimationEnd// Chrome Safari\n* mozAnimationEnd\n* MSAnimationEnd// IE10\n* oanimationend// Opera\n* animationend\n"},{date:"2017/9/3",content:"\nJavascript中的假值(falsy values)\n* false\n* null\n* undefined\n* 空字符串''\n* 0\n* NaN\n\n其它值都为true\n"},{date:"2017/9/8",content:"\n利用原生的JS即可输出格式化后的JSON字符串\n```js\nJSON.stringify(value[, replacer[, space]])\n// space即是缩进数，默认无缩进，最大为10\n// replacer可以是一个过滤函数，用来筛选或替换最后的输出结果\n```\n具体参数意义以及接口可见[这篇文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)\n"},{date:"2017/9/27",content:"\nJavascript中的原型是一种动态关系，改变原型的属性会立即对所有该原型链下的对象可见\n```js\nvar a = {}\n// a.test => undefined\nObject.prototype.test = 'Hello'\n// a.test => Hello\n```\n"},{date:"2017/9/27",content:"\n可以使用Object的 `hasOwnProperty()` 方法来检测一个属性是该对象独有还是由原型链继承而来\n"},{date:"2017/9/27",content:"\nJavascript中的Array其实是一种类数组的对象，效率比真正的数组要低，所以会有如下一些奇怪的行为\n```js\nvar arr = [1,2,3]\n// arr[0] => 1\n// arr['0'] => 1\narr.name = 'Hello'\n// arr.name => 'Hello'\narr[10] = 10\n// arr[6] => undefined\narr.length = 1\n// arr => [1]\n```\n"},{date:"2017/9/27",content:"\n在Javascript中尝试去获取对象的某个属性值时，如果该对象没有该属性，\n则会继续在其原型链上查找直至 `Object.prototype` ,如果都没有找到才会返回 `undefined`\n"},{date:"2017/9/27",content:"\n判断是否是数组的方法，IE9+直接用原生的 `Array.isArray()` 如果要向下兼容的话\n```js\nObject.prototype.toString.call(arg) === '[object Array]'\n```\nPs:jQuery的 `$.isArray()` 亦是采用这种方式\n"},{date:"2017/9/28",content:"\nJavascript的 `setTimeout()` 和 `setInterval()` 都可以接受字符串参数，并类似eval()将其执行，\n不安全并且效率低下，最好不要使用。\n具体可见[这篇文档](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)\n"},{date:"2017/9/28",content:"\n`Array.prototype.sort()` 可传入比较函数 `comparefn(a, b)` 来排序，希望a排在前该函数需返回一个负数，\n反之返回正数，俩者相等则返回0。\n"},{date:"2017/9/28",content:"\n关于\n```js\nString.prototype.split([separator[, limit]])\n// 'abc'.split() => ['abc']\n// 'abc'.split('') => ['a','b','c']\n// 'a,b'.split(/(,)/) => ['a', ',', 'b']\n'abc'.split('').reverse().join('') // 字符串倒序\n```\n"},{date:"2017/10/23",content:"\nJavascript的变量名允许使用Unicode字符集中的所有字母和数字，所以类似 `var 变量 = 1` 也是合法的\n"},{date:"2017/10/23",content:"\n使用Javascript时如果选择在行尾不加上 `;` 是比较危险的行为，例如\n```js\nvar arr = [1,2,3]\nvar b = arr\n[2].toString()\nconsole.info(b)\n```\n的结果可能会出人意料，自动加分号的结果是\n```js\nvar arr = [1,2,3];\nvar b = arr[2].toString();\nconsole.info(b);\n```\n再第二行以 `( [ + -` 开头时都需要注意避免以上情况\n"},{date:"2017/10/23",content:"使用 `String.prototype.length()` 来判断字符串长度在某些特殊场景下存在问题，例如 `'𝒜'.length === 2` \n因为这个方法判断的是给定字符串用了几个UTF-16（16bit）来编码，而有些特殊字符需要32bit来编码，\n这时候这个方法计算一个字符的长度是2，判断方法可见[这篇Blog](http://ife.baidu.com/note/detail/id/583)\n"},{date:"2017/11/12",content:"\n```js\n//  函数表达式\nvar f = function (){ return 1 }\n// 函数表达式\nvar f = function g(){ return 1 }\n// 函数声明\nfunction g(){ return 1 }\n```\n在混合时其实也是函数表达式，所以此时的 `g` 在函数外部是不可见的，试图执行 `g()` 会报错，\n关于函数表达式以及函数声明的具体差别可见[这篇文章](http://kangax.github.io/nfe/) \nPs:函数申明会存在函数提升的情况而函数表达式不会\n"},{date:"2017/11/21",content:"\n关于 `Date` 对象有几点需要注意 `new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]])`\n使用这个构造函数时 `month` 参数0代表一月，11代表十二月，\n同理 `dateObj.getMonth()` 一月返回0，十二月返回11`dateObj.getDay()` 0代表周日，6代表周一"},{date:"2017/11/22",content:"\n关于 `typeof` 一共有六种可能结果\n* number\n* string\n* boolean\n* undefined\n* function\n* object\n* symbol // ES6新增\n\n其中有一种较怪异的行为需注意`typeof null // 'object'`\n"},{date:"2017/11/23",content:"\nJavascript中的整数在超过9007199254740992也就是 `Math.pow(2, 53)` 时精度无法精确至个位，\n会出现 `Math.pow(2, 53) + 1 === Math.pow(2, 53)` 的情况，\n关于其它数字过大时存在的问题可见[这篇Blog](http://www.plqblog.com/views/article.php?id=29)\n"},{date:"2017/11/24",content:"\n小技巧，可以通过俩次位运算来将 `string` 形式的数字转为(效率比parseInt等高) `number` \n类似 `~~'123'// 123` ,Ps: 处理数字的上限是 `Math.pow(2,31) - 1` 对超出该值的数字无法正确转化\n"},{date:"2017/12/29",content:"\n获取浏览器当前滚动条位置可通过 `window.scrollY(Chrome Safari FF)||window.pageYOffset(IE9+)` ,\n横向位置则通过 `window.scrollX||window.pageXOffset`\n"},{date:"2018/1/16",content:"\n通过 `Element.requestFullscreen()` 以及 `Document.exitFullscreen()` \n可以将页面上的内容进行全屏展示以及取消全屏展示\n"},{date:"2018/2/2",content:"\n在Javascript中 `Object` 是 `truthy value` 所以哪怕是 `new Boolean(false)` \n也会在类型转化时被判断为true\n```js\nfalse && console.log(1) // false\nnew Boolean(false) && console.log(1) // 1\n```\n"},{date:"2018/2/2",content:"\nES6的 `import` 除了通常的 `import xx from 'lib'` 外，还可以采用 `import 'lib'` \n将依赖全部引入但不将其赋值给任何变量。在使用webpack引入样式文件时有一些作用，\n我们可以 `import 'xx.less'` 而不需要繁琐的 `import Style from 'xx.less'`\n"},{date:"2018/6/12",content:"\n关于`encodeURI|decodeURI`以及`encodeURIComponent|decodeURIComponent`，俩者都是用于对URI进行编解码操作，\n区别在于前者默认接受的是一个完整的URL所以不会对所有的字符进行编解码，\n而后者会对所有需要被编解码的字符进行编解码，例如对`http://www.a.com?a=1+1`进行`encodeURI`\n不会发生任何变化而进行`encodeURIComponent`的结果是`http%3A%2F%2Fwww.a.com%3Fa%3D1%2B1`\n"},{date:"2018/6/20",content:"\n关于 `location.href = 'xx' || location.assign('xx')` 与 `location.replace('xx')` \n俩者的区别在于采用前者当前的地址会被计入History中而后者不会，所以通过后者跳转到新页面后无法通过后退返回，\n这点在实现某些中间页面跳转页面是会很有用\n"},{date:"2018/6/27",content:"\n在使用ES6的Default Parameter时需要注意，调用函数时如果希望传入空参数应该传`undefined`而不是`null`\n例如`foo(undefined, 66)`\n"},{date:"2018/7/4",content:"\n返回一个只能执行一次的函数\n```js\nfunction once(fn) {\n\tlet isCalled = false\n\treturn () => {\n\t\tif (!isCalled) {\n\t\t\tisCalled = true\n\t\t\tfn.apply(this, arguments)\n\t\t}\n\t}\n```\n"},{date:"2018/7/10",content:"\n在使用ES6的Concise Methods时要注意\n```js\nconst o = {\n\tf() {\n\t\t// ....\n\t\tf() // Error: f is not a function\n\t}\n}\n```\n其实等同于\n```js\nconst o = {\n\tf: function() {\n\t\t// ...\n\t\tf() // Error: f is not a function\n\t}\n}\n```\n所以如果想要在函数`f()`通过`f()`来递归调用函数会导致报错，因为`f()`其实是一个匿名函数\n"},{date:"2018/7/10",content:"\n关于ES6的Object super关键字\n```js\nconst o1 = {\n\tfoo() { console.log(1) }\n}\nconst o2 = {\n\tfoo() {\n\t\t// 只能在Object concise methods 中使用\n\t\t// 且只能以super.XXX这种形式调用\n\t\tsuper.foo()\n\t\tconsole.log(2)\n\t}\n}\nObject.setPrototypeOf(o2, o1)\no2.foo() // 1 2\n```\n"},{date:"2018/7/10",content:"\n箭头函数都是匿名的函数表达式(function expression)\n"},{date:"2018/7/16",content:"\n关于ES6 Module\n* 基于文件，每个文件为一个Module，不可能一个文件中包含多个Module\n* 静态，不能动态的去修改一个Module对外export的API\n* 单例，所有的import都是指向同一实例\n* import和export只能出现在一个Module的最顶层，也就是说不能出现在任何块中或函数中\n"},{date:"2018/7/27",content:"\n对比`let o1 = {}`以及`let o2 = Object.create(null)`可以发现\n在o2并没有从Object.prototype上继承任何属性`o2.__proto__ === undefined`，是一个干净的空对象\n通过`{}`创建对象等同于`Object.create(Object.prototype)`\n"},{date:"2018/8/2",content:"\nES7移入了新的指数计算操作符`**`  \n可以用于替代以往使用的`Math.pow()`  \n```js\nMath.pow(2, 3) // 4\n2 ** 3 //8\n```\n"},{date:"2018/8/7",content:"\n可以借助****来实现跨行书写单行字符串  \nES6的Template String也支持这种写法\n```js\nconst str = 'abc'\n\nconsole.log(str) // => 'abc'\n```\n"},{date:"2018/8/10",content:"\n在WebView中动态设置title\n```js\nsetTimeout(() => {\n\t// 利用iframe的onload事件刷新页面\n\tdocument.title = 'xxxxxxxx'\n\tconst iframe = document.createElement('iframe')\n\tiframe.style.visibility = 'hidden'\n\tiframe.style.width = '1px'\n\tiframe.style.height = '1px'\n\tiframe.onload = () => {\n\t\tsetTimeout(() => {\n\t\t\tdocument.body.removeChild(iframe)\n\t\t}, 0)\n\t}\n\tdocument.body.appendChild(iframe)\n}, 0)\n```\n"}]},"./src/memos/other.js":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{date:"2017/8/6",content:"\n在自测与后台有交互，会发送请求的地方时一定要注意在Chrome的Network中观察发送请求的URL、参数等是否符合预期，\n同时也要注意考虑请求返回失败或返回空结果时页面UI的展示\n"},{date:"2017/8/14",content:"\n关于采集站点的PV、UV数据，传统的做法是当页面load完成后像后台发送数据，\n当作一次PV但在SPA(Single Page App)以及PWA(Progressive Web App)的情景下，这样的断定方式显得不那么合理，\n用户有可能一天中只Load一次页面然后在一天的任意时间段在这个应用中活动\n而不需要再一次Load页面考虑用更新的方式进行统计可能比较合理，\n例如借助[Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API)\n在用户初次打开应用浏览以及过去合理的一段时间后(可以用Session持续的最长时间来判断)后\n从其它再次切换到这个Tab页都作为一次PV\n详情可见这篇[Blog](https://philipwalton.com/articles/how-we-track-pageviews-is-all-wrong/)\n"},{date:"2017/8/17",content:"\nHTML5新增了 `input` 事件来监听文本框的输入变化，但在IE9下存在用户删除输入或剪切文本时不会触发该事件的Bug,\n并且IE8下没有该事件，需同时监听 `propertychange` 来实现兼容IE8\n"},{date:"2017/8/20",content:"\n正则表达式中的 `.` 可以用于匹配除换行符外的所有字符,如果想匹配含换行符在内的所有字符可以使用 `[sS]`\n"},{date:"2017/8/23",content:"\n在新的HTML5规范中，如果一个元素拥有ID属性，那么ID属性的属性值就会成为window对象的属性名，\n属性值就是ID对应的元素。如果下列标签中的元素拥有name属性\n* `<a>`\n* `<applet>`\n* `<area>`\n* `<embed>`\n* `<form>`\n* `<frame>`\n* `<frameset>`\n* `<iframe>`\n* `<img>`\n* `<object>`\n\n那么name属性的属性值就会成为window对象的属性名。\n例如页面上有这么一个元素\n```html\n<div id='a'></div>\n`\n在script中\n```js\nconsole.info(a)  //结果为<div id='a'></div>\n```\n"},{date:"2017/8/30",content:"\n阅读垠神博客有感\n* 会写程序不是一件很了不起的事情，不要自负\n* 语言、框架都只是工具，会用即可，不必过于推崇，重要的是我们脑海里的思想\n* 开发软件也是一种工程，一定要极力避免Bug，这才是一个工程师该做的\n* 面对同事、新人的提问请耐心解答，不要动不动就让提问者自行Google\n* 不要觉得向他人提问是什么难为情的事，世界上总有东西是你不清楚的，哪怕是你日常工作所用的东西\n* 复杂的代码不是显示能力的途径，简单易懂的才是\n"},{date:"2017/9/4",content:"\n在HTML中属性可以用双引号、单引号、甚至不用引号包围，浏览器都是支持的。\n所以Google为了节省字节会采用不用引号的风格，大概对访问量极大的网站这也是一种省钱的方式吧\n"},{date:"2017/9/5",content:'\n```html\n<meta http-equiv="Content-Type"\n\tcontent="text/html; charset=utf-8">\n<meta charset="utf-8">\n```\n在HTML中俩者都可用来表明页面所采用的字符集，各浏览器的兼容性良好，但后者更短建议采用后者\n'},{date:"2017/9/13",content:"\n当页面的UI需要在后台数据返回后进行刷新时，一定要考虑到网络极差的情况下，请求会延迟很久后返回。\n这期间UI要怎样展示，或者用户能否进行操作，会不会有遗留的表单数据等等。\n"},{date:"2017/9/13",content:"\n关于HTML中的相对路径 `./` 是文档相对路径，也就是当前访问页面的路径 `/` 是基于站点根目录的相对路径，\n举例说明访问网址http://0.0.0.0/1/2/son.html\n* ./test.js => http://0.0.0.0/1/2/test.js\n* /test.js => http://0.0.0.0/test.js\n"},{date:"2017/9/28",content:"\n关于正则表达式量词(Regexp Quantifier)\n* ?  => {0,1}\n* \\+ => {1,}\n* \\*  => {0,}\n\n如果只有一个量词则为贪婪匹配，会尽可能的匹配更多结果。如果量词后附加后缀?则进行非贪婪匹配。\n"},{date:"2017/11/9",content:"\n匹配中文字符（简繁体都包含）的正则 `/^[一-龥]+$/` 暂时无法确认其是否完全正确\n"},{date:"2017/11/14",content:"\nnpm安装node-sass报错 `%1 is not a valid Win32 application` 看了看报错信息大概是说什么东西下载失败导致的，\n切换成淘宝镜像用cnmp安装就好了 `npm install -g cnpm --registry=https://registry.npm.taobao.org`\n"},{date:"2017/11/17",content:"\n由于node有许多底层依赖包需要依靠c++,所以需要额外安装 `node-gyp` 提供跨平台的编译支持，\n安装之前需要先装好相应的python/c++等环境，\n根据官方文档 `npm install --global --production windows-build-tools` 即可\n（很多情况下的npm安装失败可能都是因为这个没装好）\n"},{date:"2018/3/26",content:"\n页面上引用静态资源时的相对路径与绝对路径的区别，\n* `src='xx.js'` 相对于当前页面的路径，\n* `src='./xx.js'` 相对于当前页面的路径，\n* `src='../xx.js'` 相对与当前页面的上级路径，\n* `src='/xx.js'` 相对于根目录路径，\n* `src='http//:xx.com/xx.js'` 绝对路径\n"},{date:"2018/4/20",content:"\n避免浏览器缓存HTML页面可以在head中加上标签\n```html\n<meta http-equiv='Cache-Control' content='no-store'>\n```\n通常会采用 `no-cache` 的策略，只有在服务器的资源发生变化时才去再重新拉取，否则返回304采用缓存的资源\nPs: 这种方式好像不可靠，不能保证浏览器一定会按照这个规则来执行，最好还是去配置提供静态资源的服务端容器\n"},{date:"2017/8/21",content:"\nGulp确保任务按一定顺序执行\n```js\ngulp.task('second', ['first'], () => {})\n``` \nGulp在匹配的文件列表中剔除指定文件\n```js\ngulp.src(['asset/*.js', '!asset/exclude.js'], () => {})\n```\n上述代码会匹配asset目录下除去exclude.js的所有以.js结尾的文件\n"},{date:"2017/8/21",content:"\nGulp在文件变化时触发回调函数\n```js\ngulp.watch('...', (event) => {})\n// event.path 发生变化文件的路径\n// event.type added|changed|deleted|renamed\n```\n"},{date:"2017/8/21",content:"\n在使用\n```js\ngulp.src(...).pipe(...).pipe(...)\n```\n的过程中会发现当出错时控制台中报出的错误信息很难看懂,这是由于在Node.js中stream出错时会抛出error事件，\n而上述代码里没有写有关错误事件的处理函数，所以Node会默认的报出堆栈跟踪信息作为错误信息。\n如果采取如下捕获异常事件的方式来处理错误\n```js\ngulp.src().pipe().on('err', () => {})\n```\n会使代码变得很复杂，推荐使用Pump的方式来进行处理\n```js\nvar pump = require('pump')\npump([gulp.src(), uglify(), concat()], cb)\n```\n"}]},"./src/memos/react.js":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{date:"2017/10/13",content:"\nReact组件中的HTML标签必须闭合，否则会编译报错，例如 `<img>` 必须写作 `<img/>`\n"},{date:"2017/10/14",content:"\n如果确定一个Component再初始化后不需要重新render，可以在组件中声明\n```js\nshouldComponentUpdate (nextProps, nextState) {return false;}\n```\n这会使React跳过对该组件是否需要重绘的检查，并且跳过调用\n* componentWillUpdate()\n* render()\n* componentDidUpdate()\n获得性能上的提升。\n还有一种情况下，如果你希望只有在组件的部分属性发生变化时才检查，可以通过在上述方法中比较\n`nextProps` 和 `nextState` 中的指定值是否发生变化来实现。\n还可以通过继承React提供的 `React.PureComponent` 来方便的实现上述需求，\nPureComponent只会对属性进行浅比较，当属性的数据结构复杂，层级较深时比较可能会失败\n从而一直返回false导致组件不会发生更新\n就最近的经验来看，把一些展示型的组件设为PureComponent可以获得较为明显的性能提升\n"},{date:"2017/10/19",content:"\n关于React中的Event Handlers传参数有一下俩种方式\n```html\n<button onClick={(e) => this.func(id, e)}>click</button>\n```\n或者\n```html\n<button onClick={this.func.bind(this, id)}>click</button>\n```\n第二种方式下的 `e` 会默认作为最后一个参数传递\n"},{date:"2017/10/30",content:"\n使用React-Router(3.x版本 其它版本估计也一样)，如果在 `<Router history={xxx}>` 上不配置 `history`\n会报错 `Uncaught TypeError: Cannot read property 'getCurrentLocation' of undefined` 所以这个属性是SPA必配？\n"},{date:"2017/10/31",content:"\n关于React-Router中 `browserHisory` 和 `hashHistory` 的区别，\n前者的URL类似 `xx/xx` 后者是 `/#/xx` 由于HTTP协议的约定，URL中 `#` 后作为片段(frag)不会随请求发送至后台，\n所以不需要服务器进行特殊配置，而前者是借助浏览器下的 `history` API实现，\n在IE8/9下会导致跳页时Full Load，并且需要服务器配置接受所有请求都返回 `index.html` 。\n优点时使得站点有清晰干净的URL，并且服务器端渲染只能通过这种方式实现，固推荐使用 `browserHistory`\n"},{date:"2017/11/2",content:"\n如果希望在React组件内部进行路由、页面跳转，可以借助React-Router提供的 `withRouter(comp)` \n之后便可在组件内部通过 `this.props.router` 来进行跳转。但有时候我们希望在组件外部来跳转，\n这就需要借助history来实现\n```js\nimport {browserHistory} from 'react-router'\nbrowserHistory.goBack()\nbrowserHistory.push()\n```\n"},{date:"2017/11/3",content:"\nReact-Router采用动态路由的形式时页面报错 `The root route must render a single element`\n可能是因为React组件是采用ES6的 `export default` 导出，\n而React-Router是采用CommonJS来 `require` 所以需要在导出的组件后加上 `.default` \n类似 `require('components/Comp')).default`\n"}]},"./src/memos/vue.js":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{date:"2017/12/6",content:"\nVue中对进行双向绑定的数据需进行初始化(包括向组件中传递的数据)，否则会导致双向绑定失效\n"},{date:"2018/1/2",content:"\n在Vue中使用Scoped Style时最好采用类选择器或Id选择器，这样会使与属性选择器连用\n(PostCSS实现Scoped Style的方式)时造成的性能损失最小\n"},{date:"2018/6/11",content:"\n利用`Webpack`的Code Splitting特性以及Vue的Async Component特性可以很容易的做到按需加载\n```js\nconst Com = () => import('./my-async-compnent')\n```\n"},{date:"2018/6/11",content:"\nVue-Router中路由配置的`redirect`和`alias`区别在于前者会将地址栏到URL重定向到新的而后者不改变URL，\n使得不同的URL也可以绘制同样的组件\n"}]},"./src/memos/webpack.js":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{date:"2017/10/27",content:"\n在开启Webpack `devServer` 遇到问题时可以路由至URL `/webpack-dev-server` \n来观察打包出来的bundle文件详情来Debug\n"},{date:"2017/10/27",content:"\nWebpack中的 `url-loader` 和 `file-loader` 都是用于打包一些图片字体之类的静态资源文件，\n区别在于 `url-loader` 会对一定大小限制内的图片进行Base64编码并采用DataUrl的形式嵌入页面或css，\n这些编码后的图片不会占用HTTP请求。但在图片过大的情况下会增加文件的大小，得不偿失，\n更适用于处理一些项目中多处用到的小图片（1kb以下）\n"},{date:"2017/11/3",content:"\n在开发环境中可配置 `devtool: 'cheap-module-eval-source-map'` 来获得更快的编译速度，\n在生产环境中可配置 `devtool: 'cheap-module-source-map'` 以便于更好的排查线上问题\n"},{date:"2017/12/5",content:"\n关于webpack devServer 的 `historyApiFallback` 在使用 类似 `vue-router` 或 `react-router` 来开发SPA时，\n如果将模式设为history模式需要将此项设为 `true` \n为了将404的页面请求重定向至index.html以显示相应的404错误提示页面\n"},{date:"2018/1/15",content:"\nwebpack配置中的 `optput.publicPath` 也会同时影响到webpack-dev-server去何处读取静态资源，\n如果配置错误会导致页面或静态资源无法加载，页面报错404或 `Cannot get /index.html`\n"},{date:"2018/1/16",content:"\n通过webpack引入相关polyfill时要留意，polyfill需要确保在所有bundle之前引入，\n而webpack并不会确保主entry中的\n```js\nimport xx from xx\n```\n会按顺序引入，所以需要采取在entry中进行类似\n```js\napp: ['babel-polyfill', './app.js']\n```\n这样的形式确保依赖顺序。\n详情可参见 `React` 的[Issue](https://github.com/facebook/react/issues/8379)\n"},{date:"2018/7/27",content:"\n`moment`的国际化资源文件很大，所以在生产环境打包时要留意不要将不必要的国际化文件也包含进来\n可以通过在webpack生产环境的配置文件中新增如下插件来解决这个问题\n```js\nplugins: [\n\t// 以下的配置会使打包出来的文件只包含简体以及繁体中文的国际化\n\tnew webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn|zh-tw/)\n]\n```\n"},{date:"2018/8/27",content:"\n在使用webpack提供的alias特性时，如果配置了eslint的import/no-unresolved规则  \n会发现eslint并不会识别alias，然后当你使用alias时会报错  \n这时需要借助[eslint-import-resolver-webpack](https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers/webpack)  \n然后再.eslintrc文件中增加配置项  \n```js\n{\n\tsettings: {\n\t\t'import/resolver': {\n\t\t\twebpack: {\n\t\t\t\t// 配置alias的文件路径\n\t\t\t\tconfig: './webpack.base.js'\n\t\t\t}\n\t\t}\n\t}\n}\n```\n"}]}}]);