---
title: vue computed属性 实现input实时搜索
date: 2020-06-09 8:36
publish: true
categories:
  - 前端开发
tags:
  - Vue.js
---

## computed属性

这是模板内容，在input绑定一个v-model，提供参考 ：
![图片描述](https://img-blog.csdnimg.cn/2019111312391221.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzMzkxMTYw,size_16,color_FFFFFF,t_70)

声明一个计算属性computed，将changeValue 绑定到input上，其中getValue()为axios 请求方法。里面接收来自input框的值
也就是我们绑定的v-model=“input”，值为this.input。
![图片描述](https://img-blog.csdnimg.cn/20191113124038371.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzMzkxMTYw,size_16,color_FFFFFF,t_70)
```javascript
computed: {
      changeValue: function(e) {
        // let value = this.input
        this.getValue(this.input)
        return this.input
      }
  }
```
提交数据，value就是我们获取的input值（this.input）
![图片描述](https://img-blog.csdnimg.cn/20191113124933932.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzMzkxMTYw,size_16,color_FFFFFF,t_70)
![图片描述](https://img-blog.csdnimg.cn/20191113125042898.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzMzkxMTYw,size_16,color_FFFFFF,t_70)

>参照博客,https://blog.csdn.net/qq_43391160/article/details/103046975