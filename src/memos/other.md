众所周知，页面的加载顺序是从上至下的，并且浏览器中的 JavaScript 为单线程执行    
所以当碰到 `<script src="xxx"></script>` 时，浏览器会等待脚本下载并执行完才继续渲染页面  
如果脚本文件很大或者网络较慢就会导致浏览器长时间处于白屏状态，不那么耐心的用户可能会选择直接关闭网页  
起初开发者想到的优化办法是尽可能的把 `<script>` 放到页面底部（也就是 `</body>` 前）  
这样脚本加载便不会影响到页面最初的渲染效率了  
HTML5 新引入了 `defer` 以及 `async` 来优化这个过程  
* `<script defer src="xxx"></script>`  会使脚本的下载与页面渲染并行进行  
当页面渲染完毕后才去依次执行下载完的脚本文件
* `<script async src="xxx"></script>`  也会使脚本的下载与页面渲染并行进行  
与 `defer` 的区别在于一等到脚本下载完成浏览器便会暂停渲染并执行相应的脚本  

[点击看图](https://segmentfault.com/q/1010000000640869)

---

关于此图片来自微信公众平台未经允许不可引用的解决方法。  
搜了一下发现大多的方案都不正确，推测微信公众平台是依据浏览器请求图片资源时携带的 [Referer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) 来判断是否为盗链的。  
所以对于图片资源的最佳解决方案是利用 [Referrer-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) 例如：
```html
<img referrerPolicy="no-referrer" src="https://mmbiz.qpic.cn/mmbiz_png/9gYq0FHZpd3UzcibfXVwGSZVqUcaibCnJkFroYjTXSr8yKceicCPkm3iaXNNcseSaA7s79H1JZntXoIza7gMVJ1V4Q/640?wx_fmt=png&wxfrom=200" />
```