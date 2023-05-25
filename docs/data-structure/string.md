---
title: 认识字符串
date: 2023/05/24
---
## 二、字符串常用方法

1. `chat()`

   返回指定索引位置处的字符。类似于数组用中括号获取相应下标位置的数据。

   ```js
   const str = 'abcdef'
   console.log(str.chat(2)) // 'c'
   console.log(srt[2]) // 'c'
   ```

2. `concat()`

   类似数组的`concat()`，用来返回一个合并拼接两个或两个以上字符串。原字符串不变。

   ```js
   const str = '123'
   console.log(str.concat('456')) // '123456'
   console.log(str) // '123'
   ```

3. `indexOf()、lastIndexOf()`

   `indexOf`,返回一个字符在字符串中首次出现的位置,`lastIndexOf`返回一个字符在字符串中最后一次出现的位置。

   ```js
   const str = 'abcdcefcg'
   console.log(str.indexOf('c')) // 输出 '2'
   console.log(str.lastIndexOf('c')) // 输出 '7'
   ```

4. `slice()`

   提取字符串的片断，并把提取的字符串作为新的字符串返回出来。原字符串不变。

   ```js
   const str = 'abcdefg'
   console.log(str.slice()) // 输出 'abcdefg', 不传递参数默认复制整个字符串
   console.log(str.slice(1)) // 输出 'bcdefg',传递一个，则为提取的起点，然后到字符串结尾
   console.log(str.slice(2, str.length-1)) // 输出'cdef',传递两个，为提取的起始点和结束点
   ```

5. `split()`

   使用指定的分隔符将一个字符串拆分为多个子字符串数组并返回，原字符串不变。

   ```js
   const str = 'A*B*C*D*E*F*G'
   console.log(str.split('*')) // 输出 ["A", "B", "C", "D", "E", "F", "G"]
   ```

6. `substr()、substring()`

   这两个方法的功能都是截取字符串的片段，它们的区别就在于参数二。

   `substr()`的第二个参数是截取返回的字符串的长度；`substring()`的第二个参数是截取返回字符串的结束点，并且截取的部分不包含结束点,类似数组中的`slice()`方法。

   ```js
   const str = 'ABCDEFGHIJKLMN'
   console.log(str.substr(2))  // 输出 'CDEFGHIJKLMN'
   console.log(str.substring(2)) // 输出 'CDEFGHIJKLMN'
   
   console.log(str.substr(2, 9))  // 输出 'CDEFGHIJK'
   console.log(str.substring(2, 9))  // 输出 'CDEFGHI'
   ```

7. `match()`

   `match()`方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配，并返回一个包含该搜索结果的数组。

   ```js
   const str = '2018年结束了，2019年开始了，2020年就也不远了'
   const reg = /\d+/g  // 这里是定义匹配规则，匹配字符串里的1到多个数字
   console.log(str.match(reg))  // 输出符合匹配规则的内容，以数组形式返回 ['2018', '2019', '2020']
   console.log(str.match('20'))  // 不使用正则 ["20", index: 0, input: "2018年结束了，2019年开始了"]
   ```

8. `replace()`

   `replace`接收两个参数，参数一是需要替换掉的字符或者一个正则的匹配规则，参数二，需要替换进去的字符，在实际的原理当中，参数二，你可以换成一个回调函数。

   ```js
   const str = '2018年结束了，2019年开始了，2020年就也不远了'
   const rex = /\d+/g  // 这里是定义匹配规则，匹配字符串里的1到多个数字
   const str1 = str.replace(rex, '****') 
   console.log(str1) // 输出："****年结束了，****年开始了,****年也不远了"
   ```

9. `search()`

   在目标字符串中搜索与正则规则相匹配的字符，搜索到，则返回第一个匹配项在目标字符串当中的位置，没有搜索到则返回一个`-1`。

   ```js
   const str = '2018年结束了，2019年开始了，2020年就也不远了'
   const reg = /\d+/i  // 这里是定义匹配规则,匹配字符串里的1到多个数字
   console.log(str.search(reg)) // 输出 0  这里搜索到的第一项是从位置0开始的
   ```

10. `toLowerCase(),toUpperCase()`

    `toLowerCase`把字母转换成小写，`toUpperCase()`则是把字母转换成大写。

    ```js
    const str1 = 'abcdefg'
    const str2 = 'ABCDEFG'
    console.log(str2.toLowerCase())  // 输出：'abcdefg'
    console.log(str1.toUpperCase())  // 输出：'ABCDEFG'
    ```

11. `include()、startsWith()、endsWith()`

    `includes`、`startsWith`、`endsWith`，`es6`的新增方法，`includes` 用来检测目标字符串对象是否包含某个字符，返回一个布尔值，`startsWith`用来检测当前字符是否是目标字符串的起始部分，相对的`endwith`是用来检测是否是目标字符串的结尾部分。

    ```js
    const str = 'Excuse me, how do I get to park road?'
    console.log(str.includes('how')) // 输出：true
    console.log(str.startsWith('Excuse')) // 输出： true
    console.log(str.endsWith('?')) // 输出： true
    ```

12. `repeat()`

    传入一个数字，repeat()方法会返回重复了指定次数的原始字符串。原始字符串不变。

    ```js
    const str = 'hello'
    console.log(str.repeat(2)) // 'hellohello'
    console.log(str) // hello
    ```
