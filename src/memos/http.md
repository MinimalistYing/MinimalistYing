关于URI/URL/URN，URL和URM其实是URI(Uniform Resource Identifier)统一资源定位符的子集。
URL不止指定了资源的地址，同时还指定了获取资源的方式（协议/方法等等）。
而URN则只通过特定的命名空间标识资源，不关注操作获取资源的方式。

---

源IP地址、目标IP地址、源端口号、目标端口号这四个值一起唯一地定义了一个TCP连接

---

Web服务器也可以接受一个目录的URL请求，类似 `/dir/` 通过配置服务器可以指定不同的返回形式，
可以返回一个错误，可以默认的去搜索该目录下的index.html并返回，
可以扫描目录返回包含目录内容的html页面(通常这是不安全的，因为这样会把站点的目录结构暴露出来)

---

`Cache-Control : no-store` 禁止代理缓存 `Cache-Control : no-cache  Pragma : no-cache// 兼容HTTP/1.0` 
允许缓存，但必须先与服务器进行新鲜度验证，之后才能将内容返回给客户端
`Cache-Control : max-age:66,must-revalidate` 允许缓存，
并且只有在内容过期后才必须进行新鲜度验证（在缓存过期时即使服务器错误也不会将这个陈旧的缓存返回给客户端）

---

通过在Response Header中配置 `Strict-Transport-Security` 可以实现将请求的页面强制重定向至HTTPS协议访问

---

在服务器端将图片（或其它静态资源）请求的 Response Header 中增加 `Content-Disposition: attachment` 可以实现通过浏览器地址栏输入图片 URL 时自动下载图片，而不是默认的在浏览器中进行内容展示（也就是其默认值 `inline` 的行为）。

