# 我是如何把个人网站从 GitHub Page 迁上阿里云的

## 起因
其实光是我在 GitHub Page 上的个人网站就已经来来回回折腾了三版。可能你会好奇，一个小小的个人网站能折腾出什么花来？  

下面就先借这个机会，记录一下我个人网站的进化之路。（Ps: 想直奔主题的可以直接跳到下一小节）  

大概是在 17 年中旬的时候，毕业不到一年的我想着平日的积累如果不找个好方法记录一下实在有点可惜。那要记在哪呢？想了想还是搞个自己的网站比较炫，在什么掘金/简书之类的地方写写也太普通了。由于刚开始还舍不得买服务器，调研来调研去就选择了免费的 GitHub Page。  

那时的我还不会 React / Vue / Angular 之类高大上的框架。老老实实写 HTML 吧，写了一小段时间后，怎么想都觉得直接用 HTML 来写博客也太扯淡了，MarkDown 这么轻便的文档格式为什么不用上呢。想了想自己正在学习的 Gulp , 为什么我不自己实现一个工作流将 MarkDown 文件自动转为 HTML 呢？为了兼容之前写的东西，我先自己实现了一个简单的 Gulp MarkDown Plugin 支持在原有的 HTML 中把类似 \`\` 的 MarkDown 简单语法转为对应的 HTML 标签。终于可以在写博客时用上一些简单的 MarkDown 语法了，到这为止第一版的博客正式搭建完成。  

转眼就到了 18 年初，刚开始接触 React 的我开始跃跃欲试，为什么不试着用 React 来重构一下我的网站呢？由于对 React 还是一知半解，先是摸索着把原来的数据改为了 JSON 格式存储在 js 文件中。（原谅我，那个时候的我还完全不知道有更好的方式）自己学着用 Webpack 搭了个 React 的 SPA ，但还有个问题就是，在 js 文件中写 MarkDown 也很麻烦。而且内容一多就很难看清楚排版。到了 18 年中旬总算是对 React 比较熟了，通过 React  开源社区的 MardDown Component 和 WebPack 的 raw-loader 终于实现了可以直接将 MarkDown 文件渲染成页面的个人网站，到这里第二版的博客搭建完成。  

眨眼到了 19 年初，两年过去了，我的网站也积累了不少的东西。但是问题来了，垃圾百度就是搜不到我写的东西，只有 Google 会把我的网站爬下来。年轻的我以为这是百度对 SPA 不友好，不会爬取里面的所有内容。怎么办呢？首先 GitHub Page 只支持静态网页，所以 SSR 就别想了。调研了下 GatsbyJs ,好像也不怎么符合我的需求。想了想，最简单的方式就是把原本 React SPA 中的每个页面 HTML 都爬下来，最后的效果就是每篇博客都是一个独立的 HTML 文件。这样既不影响我在开发的时候借助 React 的便利，也可以实现生成多个静态页面的目的。抱着这个念头，我找到了 PrerenderSPAPlugin 这个 Webpack 插件，完美实现了我的需求。到这里我的第三版的博客系统也搭建完成了，然而我还是太年轻，垃圾百度估计是不会去爬 `.github.io` 域名下的内容，尤其是像我这种访问量小的个人网站。  

综上所述，秉承着人生贵在折腾的原则，我决定把我的网站迁上阿里云，并买个自己的域名部署，希望百度这回不要再让我失望。  

**2021 年了，网站上云后本应该立马换上 SSR，但是偷懒到了现在真是惭愧。使用 PrerenderSPAPlugin 会对体验带来很多不良影响，包括但不仅限于会加载大量但无用 Javascript Code。近来用 `next.js` 将项目又重构一次，个人感觉 SSR 对于这类弱交互的展示型网站可能是最优解。改造完后页面加载速度提升了三倍有余。不出意外的话这应该是最终版了，不管是从读者角度还是我自己写文章都有很好的体验。**

## 第一步，在阿里云上买好相应的服务
* 域名注册
* 云服务器 ECS (Ps: 我选的是最便宜的 600 多三年)
* 云解析 DNS

Ps: 我这每个服务都买了三年，加起来大概花了一千毛爷爷。

## 第二步，将代码上传至 ECS
购买成功后即可在阿里云的 ECS 控制台里找到自己服务器的实例，以及该服务器的公网 IP 等信息。  

Ps: 以下操作都是在 Mac OS 中进行
> ssh root@公网IP  

会出现提示让你输入密码，也就是在你买服务器的时候会让你输入初始密码，忘了也没关系，在 ECS 控制台上重置一下就好。  

> Welcome to Alibaba Cloud Elastic Compute Service !

在命令行里看到这行信息就说明你已经成功登入了服务器。  

接下来我们首先通过 `yum` 安装一下 node (Ps: 我的 ECS 是默认的 CentOS 系统)

> yum install -y nodejs  

将代码文件上传至服务器

> scp -r /待上传的文件目录 root@公网IP:app

这里我将代码文件上传到了服务器上的 `root/app` 目录下  

假设我们的代码目录里只有一个 `index.js`
```js
const http = require('http')

http.createServer((req, res) => {
  res.end('Hello World!')
}).listen(8080)
```

在以上步骤完成后再次通过 SSH 连上服务器

> node ./app/index.js

然后在浏览器中访问我们的 `公网IP:8080`, 如果一切正常的话你应该可以看到 `Hello World!` 了。（Ps: 需要先在 ECS 控制台上配置好端口 8080 的安全组规则）

## 第三步，域名解析
要求不多的话直接选择域名解析里的新手引导，跟着配置就好。最后还要记得申请一下域名备案，这个流程比较长（可能要几周，因为要走政府监管部门的流程）。等备案下来后才可以正常通过域名直接访问我们的网站。

## 第四步，启用HTTPS
进入阿里云 SSL 证书购买页面，可以选择 Symantec 提供个免费版 DV 进行购买，支持绑定一个域名，但对个人网站来说应该已经够用了。  
证书签发下来后需要将证书下载下来，由于我的服务器用的是 Express 所以我选择的是其它服务器类型，如果你用的是 Tomcat / Nginx 等也可以直接下载对应类型的证书。下面以 Node.js + Express 为例子写一个简单的支持 HTTPS 的服务器：
```js
const express = require('express')
const https = require('https')
const http = require('http')
const fs = require('fs')

const app = express()

app.use(express.static('./dist'))

http.createServer(app).listen(80)

// key 和 cert 对应的就是下载的证书
// 需要把证书上传到服务器上
https.createServer({
  key: fs.readFileSync('xxx.key'),
  cert: fs.readFileSync('xxx.pem')
}, app).listen(443)
```
