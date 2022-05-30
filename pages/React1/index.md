# 对于 React 版本演进的一些探索（一）

## 起
网上对 React 源码讨论分析的相关文章、课程层出不穷，但看完之后还是觉得自己对其原理知之甚少。  

例如最近正好遇到下面这个问题，百思不得其解。所以下定决心自己动手好好钻研一下 React 源码。

<iframe src="https://codesandbox.io/embed/strange-behavior-when-setstate-in-async-function-rx27ii?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Strange behavior when setState in async function"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

想法有了，从何开始呢？  

React 最早的 3.0 版本是在 2013 年发布的，到现在（2022 年）最新发布的 18.0 版本，经历了长达九年的迭代。最早的版本只有一万行代码，最新的版本代码已经有几十万行。所以对完全没接触过源码的人来说，直接从最新版本入手可谓天方夜谭。  

另外从学习的角度来讲，深究每次版本变动背后的原因和思路也能带来不少收获。  

所以我打算从最早的 3.0 版本开始一步步剖析 React 底层实现。  

不出意外的话，这应该是一个漫长的系列。  

## 3.0 版本概述
* ReactComponent
* Event
* Transaction
* DOMUtils

## 基础渲染流程

![React 3.0 基础渲染流程图](https://pic.imgdb.cn/item/62908aa10947543129b2a3f7.jpg)


未完待续...