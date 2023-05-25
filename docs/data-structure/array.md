---
title: 认识数组
date: 2023/05/24
---
## 介绍

此篇属于前端算法入门系列的第一篇，主要介绍常用的`数组方法`、`字符串方法`、`遍历方法`。

**文章主要包含以下内容：**

- 数组常用方法
- 字符串常用方法
- 常用遍历方法

## 一、数组常用方法

1. `push()`

   在尾部追加，类似于压栈。`push`<u>操作会改变原数组</u>，数组长度+1。

   ```js
   const arr = [1, 2, 3]
   arr.push(8)
   console.log(arr) // [1, 2, 3, 8]
   ```

2. `pop()`

   将数组中，最后一个元素弹出，类似于出栈，`pop()`操作会改变原数组，数组长度-1。

   ```js
   const arr = [1, 2, 3, 8]
   arr.pop()
   console.log(arr) // [1, 2, 3]
   ```

   ```js
   // 用数组方法，模拟栈操作
   const stack = [0, 1]
   stack.push(9) // 入栈
   console.log(stack) // [0, 1, 9]
   
   stack.pop() // 出栈
   console.log(stack) // [0, 1]
   ```

3. `unshift()`

   往数组头部插入一个元素，`unshift()`操作会改变原数组，数组长度+1。

   ```js
   const arr = [1, 2, 3]
   arr.shift(9)
   console.log(arr) // 9, 1, 2, 3
   ```

4. `shift()`

   将数组中，第一个元素弹出，`shift()`操作会改变原数组，数组长度-1。配合`unshft()`可以模拟**队列**数据结构

   ```js
   const arr = [1, 2, 3]
   arr.unshift()
   console.log(arr) // [2, 3]
   
   // 模拟常见数据结构之一：队列
   const queue = [0, 1]
   queue.push(2) // 入队
   console.log(queue) // [0, 1, 2]
   
   const shiftValue = queue.shift() // 出队
   console.log(shiftValue) // 0
   console.log(queue) // [1, 2]
   ```

5. `concat()`

   合并连个数据，将传入数组拼接至目标数组的尾部，该操作会返回一个新数组，不会改变原有数组。

   ```js
   const arr1 = [1, 2, 3]
   const arr2 = [4, 5, 6]
   const arr3 = arr1.concat(arr2)
   console.log(arr) // [1, 2, 3]
   console.log(arr2) // [4, 5, 6]
   console.log(arr3) // [1, 2, 3, 4, 5, 6]
   ```

6. `indexOf()`

   在数组中寻找指定元素，可以找到就返回该元素的下标，找不到则返回`-1`；注意，如果存在多个匹配元素，至会返回靠前的元素下标。

   ```js
   const arr = [1, 2]
   console.log(arr.indexOf(2)) // 1
   console.log(arr.indexOf(9)) // -1
   ```

7. `includes()`

   在数组中寻找指定元素，如果存在该元素，则返回`true`，否则返回`false`

   ```js
   const arr = [1, 2, 3]
   console.log(arr.includes(2)) // true
   console.log(arr.includes(4)) // false
   ```

8. `join()`

   将数组转换为字符串，并返回字符串，不传值默认用`,`分隔元素，原数组不变。

   ```js
   const arr = [1, 2, 3]
   const str = arr.join()
   console.log(str) // 1,2,3
   ```

9. `reverse()`

   翻转原数组，并返回已完成翻转的数组，原数组会被改变。

   ```js
   const arr = [1, 2, 3]
   console.log(arr.reverse()) // [3, 2, 1]
   console.log(arr) // [3, 2, 1]
   ```

10. `slice(start,end)`

    从 `start` 截取数组至 `end` ,但不包含end。`slice()`操作不会更改原数组。

    ```js
    const arr = [1, 3, 4, 6, 7, 9]
    console.log(arr.slice(0,3)) // [1, 3, 4]
    console.log(arr) // [1, 3, 4, 6, 7, 9]
    ```

11. `splice(start,deleteCount,item1,item2...)`

    移除或者替换已存在的元素 和/或 添加新元素

    - `start` 参数表示操作开始位置
    - `deleteCount` 参数表示需要截取的元素个数
    - `item` 为 要添加的元素

    如果`deleteCount`为`0`，则表示不删除元素，从`start`位置开始添加后面的几个元素到原始的数组里面。

    `splice()` 返回值为由被删除的元素组成的一个数组，如果没有删除元素，则返回一个空数组

    `splice()`方法这个方法会改变原始数组，数组的长度会发生变化

    ```js
    const arr1 = [1, 2, 3]
    const arr2 = arr1.splice(1, 0, 2, 3, 4) // 从第二位，不删除元素，插入2，3，4
    console.log(arr2) // []
    console.log(arr1) // [1, 2, 3, 4, 2, 3]
    ```

12. `sort()`

    - 对数组的元素进行排序，并返回数组。
    - 默认排序顺序是在将元素转换为字符串，然后比较它们的`UTF-16`代码单元值序列时构建的。
    - 由于它取决于具体实现，因此无法保证排序的时间和空间复杂性。

    ```js
    // 默认排序
    const arr = [3, '2', 'F', 'A']
    console.log(arr.sort()) // ['2', 3, 'A', 'F']
    
    // 自定义排序 (由大到小)
    const arr = [6,7,2,3,9,1,3,5]
    console.log(arr.sort((a,b) => b - a))
    ```

13. `toString()`

    将数组转化成字符串，并返回该字符串，逗号隔开，原数组不变。

    ```js
    const arr = [1, 2, 3, 4, 5]
    console.log(arr.toString()) // ‘1, 2, 3, 4, 5’
    console.log(arr) // [1, 2, 3, 4, 5]
    ```
