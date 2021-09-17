`Cache-Control : no-store` 禁止代理缓存 `Cache-Control : no-cache  Pragma : no-cache// 兼容HTTP/1.0` 
允许缓存，但必须先与服务器进行新鲜度验证，之后才能将内容返回给客户端
`Cache-Control : max-age:66,must-revalidate` 允许缓存，
并且只有在内容过期后才必须进行新鲜度验证（在缓存过期时即使服务器错误也不会将这个陈旧的缓存返回给客户端）

---

通过在Response Header中配置 `Strict-Transport-Security` 可以实现将请求的页面强制重定向至HTTPS协议访问

---

在服务器端将图片（或其它静态资源）请求的 Response Header 中增加 `Content-Disposition: attachment` 可以实现通过浏览器地址栏输入图片 URL 时自动下载图片，而不是默认的在浏览器中进行内容展示（也就是其默认值 `inline` 的行为）。

