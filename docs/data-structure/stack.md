---
title: 认识栈
date: 2023/05/26
---
## JS中最棒的数据结构：数组

​	**数组是计算机科学中最常用的数据结构**。我们知道， 可以在数组的任意位置上删除或添加元素。然而，有时候我们还需要一种在添加或删除元素时有更多控制的数据结构。有两种数据结构类似于数组，但在添加和删除元素时更为可控。它们就是 **栈和队列**。

​	要开始学习算法，我们务必要学会数组的使用方法。这位博主已经列出了非常详细的数组方法的使用：[点击查看](https://juejin.cn/post/7087134135193436197)

​	在JS中，我们通过`push`和`pop`方法，就能用数组来模拟栈。

### 什么是栈？

​	栈是一种遵从后进先出(LIFO)原则的有序集合。新添加的或待删除的元素都保存在栈的 末尾，称作栈顶，另一端就叫栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底。

​	在现实生活中也能发现很多栈的例子。例如，下图里的一摞书或者餐厅里堆放的盘子。

### JS中如何实现栈？

​	我们在第一节说过，`在JS中，我们通过 push 和 pop 方法，就能用数组来模拟栈。`，所以我们就可以**用`push`操模拟入栈**，**用`pop`模拟出栈**，而数组，就是我们的栈

下面我用`TS`，创建了一个`Stack`类,包括了栈常见的一些操作，例如入栈、出栈等等；可以看到我们是**使用数组的方法来模拟栈的操作**的。

```tsx
class Stack {
  items: number[] = []

  // 入栈
  _push(element: number): void {
    this.items.push(element)
  }

  // 出栈
  _pop(): number | undefined {
    return this.items.pop()
  }

  // 返回栈顶元素
  _peek(): number {
    return this.items[this._size() - 1]
  }

  // 判断栈是否为空
  _isEmpty(): boolean {
    return this.items.length === 0
  }

  // 清空栈
  _clear(): void {
    this.items = []
  }

  // 返回栈的长度
  _size(): number {
    return this.items.length
  }

  // 打印栈
  _print(): void {
    console.log(this.items.toString())
  }
}
```

### 栈的简单应用

​	在我们了解过栈的概念之后，我们来学习如何简单的使用栈

​	首先，我们需要初始化一个栈。然后，验证一下栈是否为空(输出是true，因为还没有往 栈里添加元素)。

```js
const stack = new Stack(); 

console.log(stack._isEmpty); // true
```

​	接下来，往栈里添加一些元素(这里我们添加数字5和8;你可以添加任意类型的元素):

```js
    stack._push(5);
    stack._push(8);
```

如果调用peek方法，将会输出8，因为它是往栈里添加的最后一个元素:

```js
 console.log(stack._peek());//输出:8
```

再添加一个元素:

```js
stack._push(11);

console.log(stack._size()); //输出:3
```

最后， 我们再添加一个元素:

```js
stack._push(15);
```

下图描绘了目前为止我们对栈的操作，以及栈的当前状态:

![](https://my-note-images-mac.oss-cn-shanghai.aliyuncs.com/code-image/FGvSOh.png)

然后，调用两次pop方法从栈里移除2个元素:

```js
stack._pop();
stack._pop(); 
console.log(stack._size()); //输出: 2 
stack._print() //输出: 5 8
```

在两次调用pop方法前，我们的栈里有四个元素。调用两次后，现在栈里仅剩下5和8了。下图描绘这个过程的执行:

![](https://my-note-images-mac.oss-cn-shanghai.aliyuncs.com/code-image/ME6JZy.png)

到此为止，我们模拟了栈的操作，也明白了栈在入栈、出栈的执行逻辑，下面我们就可以用栈进行一些简单的需求实现。

### 利用栈，实现进制转换

在我们简单了解过栈之后，让我们来实现一些需求场景吧！

#### 实现二进制转换

```js
//利用 Stack类 实现二进制转换
function decimalToBinary(num: number): string {
  const stack = new Stack()
  // 余数
  let rem: number
  // 二进制数
  let binaryString = ''
  // 除以 2 取余数，直到商为 0
  // 余数入栈，然后出栈，得到的就是二进制数
  while (num > 0) {
    rem = Math.floor(num % 2)
    stack._push(rem)
    num = Math.floor(num/2)
  }
  while(!stack._isEmpty()){
    binaryString += stack._pop()
  }
  return binaryString
}

const binary = decimalToBinary(10)
console.log(binary) // 输出：1010
```

#### 实现多进制转换

在上面的基础上，我们可以通过同时传入需要转换的进制位数，实现不限于二进制的进制转换

```tsx
// 利用 Stack 转任意进制
function baseConverter(num: number, base: number): string {
  const stack: Stack = new Stack()
  const digits: string = '0123456789ABCDEF'
  let rem: number
  let basedString = ''
  while (num > 0) {
    rem = Math.floor(num % base)
    stack._push(rem)
    num = Math.floor(num / base)
  }
  stack._print()
  while (!stack._isEmpty()) {
    basedString += digits[stack._pop() as number]
  }
  return basedString
}

const basedString = baseConverter(10, 16)
console.log(basedString) // 输出：A
```

## 小结

通过本章，我们学习了栈这一数据结构的相关知识。我们用TS代码自己实现了栈，还讲解了如何用push和pop往栈里添加和移除元素。另外还用进制转换这个例子讲解了如何使用栈。

下一章将要学习队列。它和栈有很多相似之处，但有个重要区别，队列里的元素不遵循后进先出原则。