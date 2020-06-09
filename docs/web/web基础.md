---
title: Vue 常见问题解决方案
date: 2020-06-08 17:15
publish: true
categories:
  - 前端开发
tags:
  - web基础
---

## 数组和对象不能直接赋值情况

Vue 检测不到数组变化：
```javascript
// 使用索引设置元素值时
this.arr[1] = 'text';
// 设置数组的长度时
this.arr.length = 1;

// 使用`set`方式
this.$set(this.arr, index, newVal);
```

Vue 无法添加或删除对象属性：
```javascript
// 单个属性
this.$set(this.client, 'name', 'hannah');

// 多个属性
Object.assign({}, this.client, { name:'wee', age:12 });
```
