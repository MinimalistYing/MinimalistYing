通过在Response Header中配置 `Strict-Transport-Security` 可以实现将请求的页面强制重定向至HTTPS协议访问

---

在服务器端将图片（或其它静态资源）请求的 Response Header 中增加 `Content-Disposition: attachment` 可以实现通过浏览器地址栏输入图片 URL 时自动下载图片，而不是默认的在浏览器中进行内容展示（也就是其默认值 `inline` 的行为）。

