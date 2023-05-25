---
title: 常用的遍历方法
date: 2023/05/23
---
## 三、常用遍历方法

1. `for()`

   最常用、最基础的遍历方式，常用于遍历数组，也可以遍历字符串。

   ```js
   const arr = [1, 2, 3]
   for(let i = 0; i<arr.length; i++ ){
    console.log(arr[i])
   } // 输出：1 2 3
   ```

2. `while()、do while()`

   `while()` 和 `do while()`的主要功能是，当满足`while`后边的条件时，就执行相关业务。

   它们的区别是：`while()`是先判断后执行；`do while()`是先执行后判断,也就是说 **`do while`至少会执行一次操作**.。

   ```js
   while(1 = 1){
     //执行...
   }
   
   do{
     //执行
   }while(1 != 1)
   ```

3. `forEach()`

   是一个遍历方法，依次遍历数组内所有元素。不可停止。

   注意：

   - `return`无法终止循环。不过可以起到`continue`效果。
   - 本身是不支持的`continue`与`break`语句的我们可以通过`some`和 `every`来实现。

   ```js
   const arr = [1, 2, 3]
   arr.forEach((item)=>{
     if(item === 2){
       return
     }
     console.log(item)
   }) // 输出：1 3
   ```

4. `for...in()`

   `for...in()`是ES5提出的标准，该语法主要是用于遍历对象的属性。

   ```js
   const obj = {
     name:'小z',
     age:'66'
   }
   
   for(const key in obj){
     console.log(`可枚举属性：${obj[key]}`)
   }
   ```

5. `for...of()`

   `for...of()`是ES6新增的标准，`for...of()`不能遍历对象，但是可以使用break跳出循环。

   - `for-of`这个方法避开了`for-in`循环的所有缺陷

   - 与`forEach()`不同的是，它可以正确响应`break`、`continue`和`return`语句

   - `for-of`循环不仅支持数组，还支持大多数类数组对象，例如`DOM` [NodeList对象](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FNodeList)。

   - `for-of`循环也支持字符串遍历

     ```js
     const arr = [1, 2, 3]
     for(const value of arr){
      console.log(value)
     }// 输出1 2 3
     ```

6. `every() / some()`

   这两个方法都会返回一个布尔值。当我们需要判断数组中元素是否满足某个条件时，就可以使用这两个方法。

   它们的区别是：`every()`判断数组中所有元素是否符合条件，遇到不满足的条件直接返回`false`；`some()`则是遇到满足条件的元素直接返回`true`，否则返回`false`。

   ```js
   // every
   const foo = [5,1,3,7,4].every((item, index) => {
       console.log(`索引：${index}，数值：${item}`)
       return item > 2
   })
   console.log(foo)
   // every 打印：
   // 索引：0，数值：5
   // 索引：1，数值：1
   // false
   ```

   ```js
   //some
   const foo = [5,1,3,7,4].some((item, index) => {
       console.log(`索引：${index}，数值：${item}`)
       return item > 2
   })
   console.log(foo)
   // some 打印：
   // 索引：0，数值：5
   // true
   ```

7. `filter()`

   用于过滤数组中的元素，满足条件的元素会组成一个新的数组，并返回。该方法不会改变原数组。

   ```js
   const arr = [1, 2, 3, 4, 5, 6]
   const filterArr = arr.filter((item)=>{
     return item % 2 === 0
   })
   console.log(filterArr) // [2, 4, 6]
   ```

8. `map()`

   `map`即是 “映射”的意思 ，原数组被“映射”成对应新数组。相当于更改数组中的元素，并克隆一份。

   ```js
   const arr = [1, 2, 3, 4, 5, 6]
   const mapArr = arr.map((item)=>{
     return item % 2
   })
   console.log(mapArr) // [1, 0, 1, 0, 1, 0]
   ```

9. `reduce()、reduceRifht()`

   reduce 从左到右，对数组元素进行“叠加”处理；reduceRight则是从右到左。

   ```js
   const arr = [1, 3, 4]
   const foo = arr.reduce((total, cur) => {
       console.log(`叠加：${total}，当前：${cur}`)
       return total + cur
   })
   console.log(foo)// 8
   ```

10. `Object,keys,values遍历对象的属性`

    `Object.keys`方法的参数是一个对象，返回一个数组。该数组的成员都是该对象自身的（而不是继承的）所有属性名，且只返回可枚举的属性。

    ```js
    const obj = {
      p1: 123,
      p2: 456
    };
    Object.keys(obj) // ["p1", "p2"]
    Object.values(obj)// [123, 456]
    ```
