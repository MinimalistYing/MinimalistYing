# 记一次 Puppeteer 报错

## 起因
我的博客一直在使用 Puppeteer 来进行页面的预渲染，但是最近突然在 Build 时报错：
```
UnhandledPromiseRejectionWarning: Error: Chromium revision is not downloaded. Run "npm install" or "yarn install" at Launcher.launch
```
按照指令重新 `npm install` 了一遍仍然报错，但是基本上可以确定是因为 Puppeteer 依赖的 Chromium 未正确安装导致的问题，所以着重从这个方向寻找答案。

## 解决方案
在执行 `npm i puppeteer` 时会同时默认地去执行包下的 `install.js` 来安装 Chromium，但是在某些情况下这个脚本不会被执行，所以就会出现 Chromium 没有正常安装的情况，例如在 `npmrc` 中设置了 `ignore-scripts=true`。  

所以可以通过检查 `node_modules/puppeteer/.local-chromium/linux-<your_chrome_version>/` 目录下是否有正确安装 Chromium 来确定问题。

如果发现没有正确安装，那么就需要手动执行一下安装脚本：
```
node node_modules/puppeteer/install.js
```

如果安装过程中出现错误，大概率是因为国内的长城防火墙导致。如果你有梯子的话可以设置一下代理，此外还可以通过 [Document](https://github.com/puppeteer/puppeteer/blob/v10.2.0/docs/api.md#environment-variables) 中提供的修改 NPM 环境变量的方法来解决：
```
npm config set PUPPETEER_DOWNLOAD_HOST https://npm.taobao.org/mirrors
```

## 参考
* [Stackoverflow](https://stackoverflow.com/questions/53997175/puppeteer-error-chromium-revision-is-not-downloaded)