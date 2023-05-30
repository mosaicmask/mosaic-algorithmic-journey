---
title: 关于栈的算法练习
date: 2023/05/26
---

## 第一题

|       LeetCode        |      力扣      | 难度 |
| :-------------------: | :------------: | :--: |
| 20.Valid Parentheses. | 20. 有效的括号 | 简单 |



### 题目描述

给定一个只包括 `'('`，`')'`，`'{'`，`'}'`，`'['`，`']'` 的字符串 `s` ，判断字符串是否有效。

有效字符串需满足：

1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。
3. 每个右括号都有一个对应的相同类型的左括号。

**示例 1：**

```
输入：s = "()"
输出：true
```

**示例 2：**

```
输入：s = "()[]{}"
输出：true
```

**示例 3：**

```
输入：s = "(]"
输出：false
```



### 解题思路（依据官方，解题思路不唯一）

这里我们可以尝试这样去理解

首先，输入进来的是一个字符串，需要我们去判断，字符串内的括号是否**正确闭合**；这是最终我们要实现的目标。

这时我们就可以利用**“栈”**的特性，来去实现这个需求。

例如：当我们遇到任意“`(`”，我们就将“`(`”推入**栈**，随后如若遇到“`)`”，我们就将入栈的“`(`”推出栈，以此类推直至程序运行结束。

当程序运行结束，我们就去检查，栈中是否还存在未匹配的左括号，如果有，那证明括号并不能完全正确闭合，那自然要返回 `false`；如果栈清空了，那证明所有括号匹配完毕，返回`true`。



### 依据思路，实现代码：

首先我们创建一个方法，接收传递进来的 S 字符串参数，并对 S 字符串做个判断

```tsx
const isValid = (s:string) => {
	// 如果传进来的字符串长度不是偶数，证明肯定有括号是不匹配的
	if(s.lenght % 2 !== 0) return false
	
}
```

随后，我们要利用 Map 构造函数，构建一个字符表，用于括号的匹配

```tsx
const isValid = (s:string) => {
	// 如果传进来的字符串长度不是偶数，证明肯定有括号是不匹配的
	if(s.lenght % 2 !== 0) return false
  // 构建字符表
	const pairs = new Map()
  pairs.set('(',')')
  pairs.set('[',']')
  pairs.set('{','}')
}
```

使用数组，模拟栈，进行输入字符的括号匹配。

```tsx
const isValid = function (s:string):boolean {
  // 如果传入字符长度为奇数，直接返回false
  if (s.length % 2 === 1) return false;
  // 利用map存储括号对
  const pairs:Map<string,string> = new Map();
  // 存储括号对 key:右括号 value:左括号
  pairs.set(')', '(');
  pairs.set(']', '[');
  pairs.set('}', '{');
  // 利用栈来实现括号匹配
  const stack:string[] = [];
  for(let ch of s){
    if(pairs.has(ch)){
      // 如果是右括号，判断栈顶元素是否是对应的左括号
      // 不是则返回false
      if(!stack.length || stack[stack.length -1] !== pairs.get(ch)){
        return false
      }else{
        // 是则弹出栈顶元素
        stack.pop()
      }
    }else{
      // 如果是左括号，直接压入栈中
      stack.push(ch)
    }
    console.log(stack)
  }
  // 如果最后栈中还有元素，返回false
  return !stack.length
};

console.log(isValid('()'))
```

该解法的核心，就是利用栈的后入先出的特性，括号随着条件出栈入栈，最后判断栈是否为空，来实现括号的配对。