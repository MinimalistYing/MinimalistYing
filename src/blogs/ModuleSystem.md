# JavaScript 中的 AMD、UMD、CJS、ESM

## 序

## AMD (Asynchronous Module Definition) 
时代的眼泪，略微了解即可。  

定义模块:
```js
define(
  module_id /*optional*/, 
  [dependencies] /*optional*/, 
  definition function /*function for instantiating the module or object*/
)

define('myModule', [],
  // module definition function
  function () {
    // return a value that defines the module export
    // (i.e the functionality we want to expose for consumption)

    return {
      add (a, b) {
        return a + b
      }
    }
  }
)
```
使用模块：
```js
// 基于 require.js
require(['myModule'], function (myModule) {
  myModule.add(1, 1);
})
```
特点：
* 异步
* 更适用于浏览器使用


## UMD
为了使定义的模块可以被多种模块系统使用的兼容模式。（Ps: 主要是指 AMD 以及 CJS）
```js
/**
 * exports object based version, if you need to make a
 * circular dependency or need compatibility with
 * commonjs-like environments that are not Node.
 */
(function (define) {
    //The 'id' is optional, but recommended if this is
    //a popular web library that is used mostly in
    //non-AMD/Node environments. However, if want
    //to make an anonymous module, remove the 'id'
    //below, and remove the id use in the define shim.
    define('id', function (require, exports) {
        //If have dependencies, get them here
        var a = require('a');
 
        //Attach properties to exports.
        exports.name = value;
    });
}(typeof define === 'function' && define.amd ? define : function (id, factory) {
    if (typeof exports !== 'undefined') {
        //commonjs
        factory(require, exports);
    } else {
        //Create a global function. Only works if
        //the code does not have dependencies, or
        //dependencies fit the call pattern below.
        factory(function(value) {
            return window[value];
        }, (window[id] = {}));
    }
}));
```

## CJS (CommonJS)
定义模块:
```js
// myModule.js
function add (a, b) {
  return a + b
}
 
exports.add = add
```
使用模块：
```js
const { add } = require('myModule')

add(1, 1)
```
特点：
* 同步
* 更适用于服务端，nodejs 默认使用的模块系统
* 不支持 TreeShaking


## ESM
定义模块：
```js
export default function () {}

export const function add (a, b) {
  return a + b
}
```
使用模块：
```js
import { add } from 'myModule'

add(1, 1)
```
特点：
* 支持 TreeShaking
* 由 ECMA 维护，浏览器原生支持，nodejs 的支持也在跟进中。理论上这是未来大家唯一使用的模块系统。

## 对比
主要对比一下 ESM 和 CJS 的区别，因为这俩者估计是短期内主流的模块方式。  

最大的区别在于 CJS 引入的是拷贝而 ESM 引入的是引用，如下：
```js
let a = 1

function add () {
  a++
  console.log('modules:' + a)
}

exports.a = a
exports.add = add
```
无论调用多少次 `add` 函数都不会改变 require 进来的 `a` 的值
```js
const { add, a } = require('./a')

console.log(a)

add()

console.log(a)
```
再看看 ESM：
```js
let a = 1

function add () {
  a++
  console.log('modules:' + a)
}

export {
  a,
  add
}
```
这时会先后输出 1、2，由此可见 ESM 引入的是变量的地址而不是拷贝
```js
import { add, a } from './a'

console.log(a)

add()

console.log(a)
```
此外就是处理循环引用时的不同，可以参考 [nodejs 文档](https://nodejs.org/dist/latest-v14.x/docs/api/modules.html#modules_cycles)   

导致这些区别最主要的原因在于 CJS 运行在服务端，由于在机器上读取文件模块的时间很短所以 CJS 大都采用的是同步形式加载模块。而 ESM 由于需要通过网络加载所以将过程异步的分为了不同步骤，代码会等到所有模块加载完成最后一起执行。

## 参考
* [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
