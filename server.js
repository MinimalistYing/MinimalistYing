const express = require('express')
const https = require('https')
const http = require('http')
const fs = require('fs')
const compression = require('compression')

const app = express()

// gzip
app.use(compression())

app.use(express.static('./dist', { extensions: ['html'] }))

/**
 * 代理请求，获取 00 后黑话翻译
 */
app.get('/guess-proxy', function (req, res) {
  const proxyReq = https.request({
    hostname: 'lab.magiconch.com',
    port: 443,
    path: '/api/nbnhhsh/guess',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }, (proxyRes) => {
    proxyRes.setEncoding('utf8')
    proxyRes.on('data', (d) => {
      res.status(200).json(d)
    })
  })
  
  proxyReq.on('error', (e) => {
    res.status(500).json({ message: '服务器错误', error: e})
  })
  proxyReq.write(JSON.stringify({ text: req.query.text }))
  proxyReq.end()
})

http.createServer(app).listen(80)

https.createServer({
  key: fs.readFileSync('./www.minimalistying.com.key'),
  cert: fs.readFileSync('./www.minimalistying.com.pem')
}, app).listen(443)
