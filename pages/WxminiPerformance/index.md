# 微信小程序性能优化小结

## 序
最近一段时间的工作重心都在对公司某 C 端的小程序性能优化上。秉持着耗费的心血不能白费的理念，在此做下记录。  

另外，由于使用的是内部基于 WEEX/MPX 的跨端技术，所以天然就会在性能上与原生的微信小程序有所差距。只能说尽力而为，把性能提高到同类小程序的平均水准之上。

## 原理
要想对程序进行性能优化，首先要做的是定下用哪些指标来衡量性能。好在微信小程序发展至今，相关的数据标准已经很完善，都可以在小程序的 WE 分析后台看到。其中影响用户体验的几个核心指标有总启动耗时、页面切换耗时、页面白屏情况等。  

有了目标后还需要去了解影响这些指标的瓶颈点何在，也就需要我们去了解一下微信小程序的基本技术原理。  

首先了解一下小程序的运行环境：
* 在 iOS、iPadOS 和 Mac OS 上，小程序逻辑层的 JavaScript 代码运行在 JavaScriptCore 中，视图层是由 WKWebView 来渲染的。
* 在 Android 上，小程序逻辑层的 JavaScript 代码运行在 V8 中，视图层是由基于 Mobile Chromium 内核的微信自研 XWeb 引擎来渲染的。
* 在 Windows 上，小程序逻辑层 JavaScript 和视图层都是用 Chromium 内核。
* 在 开发工具上，小程序逻辑层的 JavaScript 代码是运行在 NW.js 中，视图层是由 Chromium Webview 来渲染的。

👇下面是从官方文档里捞出来的启动流程图。(Ps：接下来说的启动都指的是冷启动，也就是本地小程序销毁过后的启动流程，而不是指小程序从后台切前台的热启动。)
![微信小程序启动流程](https://res.wx.qq.com/wxdoc/dist/assets/img/launch-1.0a7b0904.svg)

了解了小程序基本的启动流程后，接下来可以分阶段来看可以优化的点在哪。

### 资源准备阶段
第一步小程序相关信息准备，会获取一些用户、小程序的基本信息来做版本、权限控制等。微信会对这一步的信息进行缓存，但是每当版本发布时需要进行**同步请求进行更新并阻塞**小程序的启动流程。👉 **尽量少发版。** 

第二步运行环境准备，进行 Andriod\IOS 系统 UI 组件以及小程序基础库等的加载工作，受设备性能影响大，通常 IOS 会比 Andriod 快很多。👉 **开发者无法优化。**  

第三步代码包准备，通过网络下载代码包并进行校验。需要特意提的一点是微信会对代码包做 MD5，所以如果版本更新了但是代码实际没变化也不会去重新下载。👉 **减少包体积，合理规划分包。**  

### 代码注入
代码注入又分为逻辑层注入和视图层注入，虽然俩者是**并行进行**的，但是首次渲染依赖于逻辑层提供的数据，所以如果逻辑层注入过慢也会延后首次渲染的时间。**节点数量、代码包大小、代码复杂度、自定义组件个数**等都会影响代码注入的效率。👉 **开启按需注入、用时注入，移除无用的自定义组件，尽可能简化页面节点和初始化时的代码逻辑。**  

### 首页渲染
注入完成后，会根据初始数据和页面结构来进行首次渲染，渲染完成会触发小程序的 `Page.onReady` 事件，也标志着整个启动流程的结束。耗时长短与**页面结构复杂度、参与渲染的自定义组件数量**有关。👉 **开启初始渲染缓存，将首屏不必要的逻辑延后至 onReady 执行。**  

## 实践
具体在实践上又分为利用好微信小程序自身的优化能力以及修改业务代码俩个方向，通常小程序自身的能力只需通过简单的配置即可搞定而代码层面则依据业务各有不同。

### 小程序相关的性能优化配置
`app.json` 中的相关配置如下：
```js
{
  "window": {
    "initialRenderingCache": "static" // 初始渲染缓存，加快首页渲染速度
  },
  "lazyCodeLoading": "requiredComponents", // 按需注入，加快代码注入速度
  "preloadRule": {
    "pages/index": { // 当进入 pages/index 时对分包 packageA 进行预下载
      "network": "all",
      "packages": ["packageA"]
    },
  }
}
```
各页面 `index.json` 中的相关配置：
```js
{
  "componentPlaceholder": {
    "Bar": "/components/Bar" // 用时注入，加快代码注入速度
  } 
}
```

### 业务代码
由于平时开发总会碰到各种各样的意外情况所以很难保证写出来的代码都是高性能的，这就要求我们养成不时去重构代码的习惯。最基本的例如定期清除项目内的冗余代码，不论是从性能上来讲还是从后期的维护成本来讲都是一个很好的手段。  

同样一段逻辑不同的写法也可能会对性能造成巨大的影响。但这有时也涉及到代码可读性上的权衡，一个很好的例子就是 `async\await`:
```js
// Babel 转义前
async function foo() {
  const bar = await other()
}

// 转义后
function foo() {
  var bar;
  return regeneratorRuntime.async(function foo$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return regeneratorRuntime.awrap(other());
      case 2:
        bar = _context.sent;
      case 3:
      case "end":
        return _context.stop();
    }
  }, null, this);
}
```
可以看到转义前后的代码量差距很明显，这个时候就需要我们做一个权衡，如果仅包含一个异步行为的函数是否用 `Promise.then` 就足够了？  

此外还有对代码进行更好的抽象，当然也得权衡一下可读性。那一个数字键盘组件的部分代码举例，优化前：
```html
<View class="key-line">
  <View class="item" @click="handleInput(1)">
    <Text class="item-text">1</Text>
  </View>
  <View class="item" @click="handleInput(2)">
    <Text class="item-text">2</Text>
  </View>
  <View class="item" @click="handleInput(3)">
    <Text class="item-text">3</Text>
  </View>
</View>
<View class="key-line">
  <View class="item" @click="handleInput(4)">
    <Text class="item-text">4</Text>
  </View>
  <View class="item" @click="handleInput(5)">
    <Text class="item-text">5</Text>
  </View>
  <View class="item" @click="handleInput(6)">
    <Text class="item-text">6</Text>
  </View>
</View>
<View class="key-line">
  <View class="item" @click="handleInput(7)">
    <Text class="item-text">7</Text>
  </View>
  <View class="item" @click="handleInput(8)">
    <Text class="item-text">8</Text>
  </View>
  <View class="item" @click="handleInput(9)">
    <Text class="item-text">9</Text>
  </View>
</View>
```
优化后：
```html
<View class="key-line">
  <View v-for="i in ['1', '2', '3']" :key="i" class="item" @click="handleInput(i)">
    <Text class="item-text">{{ i }}</Text>
  </View>
</View>
<View class="key-line">
  <View v-for="i in ['4', '5', '6']" :key="i" class="item" @click="handleInput(i)">
    <Text class="item-text">{{ i }}</Text>
  </View>
</View>
<View class="key-line">
  <View v-for="i in ['7', '8', '9']" :key="i" class="item" @click="handleInput(i)">
    <Text class="item-text">{{ i }}</Text>
  </View>
</View>
```
利用二维数组再次优化：
```html
<View class="key-line" v-for="(col, index) in [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']]" :key="index">
  <View v-for="i in col" :key="i" class="item" @click="handleInput(i)">
    <Text class="item-text">{{ i }}</Text>
  </View>
</View>
```

如果去翻看一下自己往日写的代码，其实能找到类似的优化点有很多。但更重要的是我们对于可读性以及精炼代码的取舍，例如上例，如果要说优化前后的代码哪种更能一眼就看清楚逻辑，那肯定是优化前。

## 总结
对比小程序以及 Web 的性能优化手段其实可以对整个前端的优化手段做个小总结，大致也就是如下几个方向：
* 充分利用缓存。
* 减小代码包体积。
* 分片执行业务逻辑。