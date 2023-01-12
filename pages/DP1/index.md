# Dynamic Programming 入门（一）

## 起
动态规划的思路其实很简单，就是把一个复杂的问题拆解为一个个可递归解决的相对简单的子问题。但是在实践中，怎样找到问题的规律，怎样去合理的去拆解，以及怎样处理一些限制条件就得花点功夫了。  

个人经验是多练、多想、多写，没有太多捷径，光看别人的解法是掌握不了 DP 的。  

下面拿三个我认为比较经典的入门例子来进行分析。

## 斐波那契数
![Fibonacci Number](https://pic.imgdb.cn/item/63bfc0a1be43e0d30ec7044c.jpg)

这个应该算是最最最最简单的 DP 了，但是能很好的阐述动态规划的思想。  

假设我们想要得到第 100 位斐波那契数，那我们首先需要知道第 99 位和第 98 位的值，俩者相加就能得到第 100 位的值。照这个逻辑依次递归下去就类似：  

* F(100) = F(99) + F(98)
* F(100) = F(98) + F(97) + F(97) + F(96)
* ....
* F(2) = F(1) + F(0) = 1 + 0 = 1

将这个过程抽象出来就是：
> F(n) = F(n - 1) + F(n - 2)

然后代码就很简单了：
```js
function fib(n) {
  if (n === 0 || n === 1) return n

  return fib(n - 1) + fib(n - 2)
}
```

## 打家劫舍
![打家劫舍](https://pic.imgdb.cn/item/63bfc013be43e0d30ec5987a.jpg)

碰到这类求最大/最小值的情况，都可以试着先从 DP 入手解一下。  

因为限制条件是不能连续光顾相邻的俩家，所以假设我们从最末端的一家开始拜访。那么每次我们都会有俩种选择，这一家或者他前面的邻居。但是我们不能俩者都选，因为会被抓。也不能俩者都不选，因为会让我们损失惨重。  

还是试着抽象一下这个过程：
> F(n) = max(F(n - 1), F(n - 2) + Arr[n])

由于每一步得出的结果都是当前可能的最大值，所以最后直接返回即可。

```js
function rob(nums) {

  function dp(n) {
    if (n < 0) return 0
    
    return Math.max(
      dp(n - 1),
      dp(n - 2) + nums[n]
    )
  }

  return dp(nums.length - 1)
}
```
再优化一下，加个缓存，这样效率会高很多。
```js
function rob(nums) {
  const cache = new Map()

  function dp(n) {
    if (n < 0) return 0

    if (cache.has(n)) return cache.get(n)

    const re = Math.max(
      dp(n - 1),
      dp(n - 2) + nums[n]
    )

    cache.set(n, re)
    
    return re
  }

  return dp(nums.length - 1)
}
```

## 最大子数组和
![最大子数组和](https://pic.imgdb.cn/item/63bfc06fbe43e0d30ec6af8b.jpg)

这个问题就变得稍微复杂一点🤏。  

还是按照拆解问题的思路来，想要计算一个长度为 n 的数组的最大子数和，我们可以先试着去计算下标为 0 至 n-1 的子数组的的最大子数和。然后加上数组最后一个元素的值可能就是该数组的最大子数和。  

注意上面我用了可能，因为假设数组最后一项是负数，那显然不加得到的值来的更大。  

另外再考虑一种情况，假设 0 至 n-1 的子数组最大子数合为负数。那这个时候当然是把前面的值都去掉，最后得到的结果更大。  

接下来试着抽象这个过程：
> F(n) = F(n - 1) > 0 ? F(n - 1) + A[n] : A[n] 

在这个过程中，对每一次 F(n) 的计算结果取最大值，就是我们想要的答案。

```js
function maxSubArray(nums) {
  let max = Number.NEGATIVE_INFINITY

  function dp(n) {
    let re = null
    if (n === 0) {
      re = nums[0]
    } else {
      const last = dp(n - 1)
      re = last > 0 ? last + nums[n] : nums[n]
    }

    max = Math.max(max, re)
    return re
  }

  dp(nums.length - 1)

  return max
}
```

## 链接
* [509. Fibonacci Number](https://leetcode.com/problems/fibonacci-number/description/)
* [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/description/)
* [198. House Robber](https://leetcode.com/problems/house-robber/description/)