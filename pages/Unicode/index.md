# Unicode & JavaScript

## 引子
计算机的世界里只有 0 和 1，图片 / 文字 / 视频等在计算机上存储传输都需要先通过某种规则进行转化。  

早期的 ASCII (American Standard Code for Information Interchange) 定义了 128 个常见字符。例如英文字母 `a` 对应的数字是 `97` 对应的二进制是 `0110 0001`。  

如果世界上只有英文一种语言，可能就不会有后面的故事了。但很可惜，地球上每个国家都有着各自的语言文字，仅中文就有着超过 3000 个的常用字符，当计算机被出口至世界各国时，ASCII 已经不足以满足人们的需求了。  

中国人当然希望计算机能展示处理汉字，于是就创造了 GB2312 / GB18030 等中文字符集。那么非洲同胞当然可能也有自己的 XXX 字符集。想象一下如果每个国家的文字都有着自己的字符集，那么碰到冲突时计算机又怎么能知道到底该用哪个字符呢。  

好在，有这么一群有志之士，致力于将全球所有的字符整理到同一个字符集。这就是 Unicode ，由 Unicode Consortium 负责维护，这里是他们的 [HomePage](https://home.unicode.org/)。

## Unicode
首先要明确的一点是 Unicode 是字符集，所以它的工作是将世界上所有的文字符号对应到相应的码点（Code Point ）上，而如何将对应的码点转化为 0 / 1 让计算机存储是字符编码（UTF-8 / UTF-16 等）的工作。  

码点通俗来讲就是一个数字，最新的 Unicode 标准支持一共 143,859 个字符，每个字符都与一个码点一一对应。因为字符数太多，所以为了将不同的字符做一个大概的区分，Unicode 将编码分成了 17 个平面（Plane），每平面拥有65536（即2^16）个码点。其中最常用的是 BMP（Basic Multilingual Plane），该平面包含了 U+0000 - U+FFFF 区间内的码点。

## UTF-8 / UTF-16 / UTF-32
UTF-8 是使用一至四个字节的变长编码：
```
U+ 0000 ~ U+ 007F:  0XXXXXXX
U+ 0080 ~ U+ 07FF:  110XXXXX 10XXXXXX
U+ 0800 ~ U+ FFFF:  1110XXXX 10XXXXXX 10XXXXXX
U+10000 ~ U+10FFFF: 11110XXX 10XXXXXX 10XXXXXX 10XXXXXX

// 下面通过几个例子来阐述 UTF-8 编码的过程

// A U+ 0041
// 在 U+ 0000 ~ U+ 007F 范围
// 首先将 U+ 0041 用二进制表示
10 1001
// 很简单将二进制直接填入，高位补零则能得到相应编码
0XXXXXXX
00101001

// 知 U+ 77E5
// 在 U+ 0800 ~ U+ FFFF 范围
// 首先将 U+ 77E5 用二进制表示
111 0111 1110 0101
// 将二进制填入，高位补零
1110XXXX 10XXXXXX 10XXXXXX
11100111 10011111 10100101
```
UTF-16 是使用二个或四个字节的变长编码（Ps: UTF-16 是 UCS-2 的超集，俩者在 BMP 范围内是等价的，UCS-2 固定用俩个字节进行编码所以仅支持 BMP 范围内的 65536 个字符）:
```
// A U+ 0041
// 二进制
10 1001
// 高位补零
00000000 00101001

// 知 U+ 77E5
// 二进制
111 0111 1110 0101
// 高位补零
01110111 11100101

// 𝌆 U+ 1D306
// 二进制
1 1101 0011 0000 0110
// 需要四个字节，这里有个比较复杂的计算过程，公式如下
H = Math.floor((c-0x10000) / 0x400)+0xD800

L = (c - 0x10000) % 0x400 + 0xDC00
// 最后结果是
1101 1000 0011 0100 1101 1111 0000 0110
```
另外还有 UTF-32，定长四字节，所以直接将码点转为二进制高位补零后存储即可。由于过于浪费空间，因为所有的字符都需要四个字节来存储，所以很少会见到这种编码方式。

再来讲讲 UTF-8 和 UTF-16 的优缺点，由于完全兼用 ASCII 编码所以 UTF-8 对英文世界特别友好，只需要一个字节就可以对几乎所有的文字进行编码，是一种非常节省空间和流量的方式。但是对于中文来说就不一样了，大部分中文字符用 UTF-8 需要三个字节来编码而用 UTF-16 则只需要俩个字节。

另外，在 Web 的世界中基本上都是通过 UTF-8 进行编码，包括 JSON / HTML 等等。大多数编程语言以及 Windows 系统都是用的 UTF-16 编码，但 Unix 系统的默认编码为 UTF-8。  

总结就是英语世界的人会更喜欢 UTF-8 因为占用空间少，编码方便，且没有字节序的问题。但是非英语世界的人可能会倾向于使用 UTF-16 。但从现在的角度来看，不论是网络传输还是本地存储，文字占用的空间可谓少之又少，所以现在考虑编码方式还需要关心空间浪费与否吗？为了避免那些因为编码方式不同导致的问题，我们是否需要统一一下世界上的编码方式呢？实际上现在的 Windows 已经[开始支持使用 UTF-8 了](https://docs.microsoft.com/en-us/windows/uwp/design/globalizing/use-utf8-code-page)。

## 如何使用正则匹配中文字符
如果你试图在百度上检索，那么可能会找到 `/[\u4e00-\u9fff]/` 或者 `/[\u4e00-\u9fa5]/` 这俩个比较常见的答案。但实际上这俩个正则都不能说完全正确，因为它们都只考虑到了 [CJK Unified Ideographs U+4e00 ~	U+9fff](https://unicode-table.com/cn/#cjk-unified-ideographs) 这一个 Block 下的字符。  

但还有很多不太常见的中文字符是其它 Block 下的，例如 [CJK Unified Ideographs Extension A](https://unicode-table.com/cn/#cjk-unified-ideographs-extension-a) 中就包含了很多中文生僻字符。  

Ps: CJK characters 指的是中日韩三国的字符，由于三国的文字有很多类似之处，所以在 Unicode 中通常都被归为同一类。  

所以如果非要写出一个完全正确的正则可能需要把 Unicode 中所有对应的中文字符编码找出来（个人建议是找出所有 CJK 的所属 Block 也就是把日语韩语也包含进去），但多数情况下使用 `/[\u4e00-\9fff]/` 应该就足够了。

## JavaScript 中的字符编码
早期 JavaScript 采用的编码方式是 USC-2，但现在协议中提到的只有 UTF-16：
> The String type is the set of all ordered sequences of zero or more 16-bit unsigned integer values (“elements”) up to a maximum length of 253 - 1 elements. The String type is generally used to represent textual data in a running ECMAScript program, in which case each element in the String is treated as a UTF-16 code unit value. Each element is regarded as occupying a position within the sequence. These positions are indexed with nonnegative integers. The first element (if any) is at index 0, the next element (if any) at index 1, and so on. The length of a String is the number of elements (i.e., 16-bit values) within it. The empty String has length zero and therefore contains no elements.

在 ES6 出来之前 JavaScript 处理 BMP 之外的字符（也就是需要四个字节存储的字符）会碰到不少让人迷惑的问题。ES6 尽可能的进行了一些修正，但是出于前向兼容的考虑，很多 API 仍然只能维持错误的行为。

例如 `String.prototype.length` 统计的是字符串用了多少个 16-bit 进行编码（16bit）。从上文中关于 UTF-16 的知识不难看出对于 Unicode BMP 范围外的字符这种统计方式很明显是错误的，因为一个字符会用到 4 个字节也就是 32-bit 来编码：
> This property returns the number of code units in the string. UTF-16, the string format used by JavaScript, uses a single 16-bit code unit to represent the most common characters, but needs to use two code units for less commonly-used characters, so it's possible for the value returned by length to not match the actual number of characters in the string

所以会出现字符串的 `length` 大于实际出现字符数的情况，例如：
```js
// U+ 1D306
'𝌆'.length // 2

/* 解决方案如下 */

// 因为 Array.prototype.from 是 ES6 引入的新 API，所以已经修复了相关问题
Array.from('𝌆').length // 1
```

再例如 `String.prototype.split` 会产生乱码：
```js
'𝌆'.split('') // ["�", "�"]

/* 解决方案如下 */

Array.from('𝌆') // ["𝌆"]
```

再例如 `String.prototype.charCodeAt` 以及 `String.fromCharCode` 碰到 BMP 外的字符都无法正常工作，还是拿 `𝌆` 来举例：
```js
// 𝌆 的码点是 U+ 1D306 对应的十进制数字 119558
'𝌆'.charCodeAt(0) // 55348 = = ! 这个码点对应的不是 𝌆

String.fromCharCode(119558) // 팆 = = ! 该字符的正确码点是 54022

// 实际上也是能正常工作的，只是需要俩步，当然这样做很麻烦
'𝌆'.charCodeAt(0) // 55348
'𝌆'.charCodeAt(1) // 57094
String.fromCharCode(55348, 57094) // 𝌆

/* 解决方案如下 */

'𝌆'.codePointAt(0) // 119558

String.fromCodePoint(119558) // 𝌆
```
另外字符串里的转义写法也存在问题：
```js
'\u0061' // a
'\u1D306' // "ᴰ6"

/* 解决方案如下 */

'\u{1D306}' // "𝌆"
```
最后还有正则表达式的一些坑：
```js
/^.$/.test('𝌆') // false

/* 解决方案如下 */

/^.$/u.test('𝌆') // true
```

## 相关网站
[Unicode 字符百科](https://unicode-table.com/cn/) 可以查询字符相对应的编码。  

[fileformat.info](https://www.fileformat.info/info/unicode/) 可以更进一步的查询 Unicode 分块等信息。

## 参考
[The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!)](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)  

[Unicode与JavaScript详解](https://www.ruanyifeng.com/blog/2014/12/unicode.html)