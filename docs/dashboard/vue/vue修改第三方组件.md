---
title: vue.js修改第三方组件（elementUI）样式 ,穿透修改样式
date: 2020-06-09 08:45:36
publish: true
categories:
  - 前端开发
tags:
  - Vue.js
---

## 1.修改格式

1. 外层类（自定义类） >>> 第三方（类名）{
    样式
}

2. /deep/ 第三方（类名）{

  样式

}

<!-- eg1 -->
```css
 .login >>> .el-input__inner {
    border: 1px solid transparent !important;
    background: transparent;
    color: white;
    border-bottom: 1px solid white !important;
  }
  ```
  <!-- eg2-->
  ```css
   /deep/ .el-input__inner {
      border: 1px solid transparent !important;
      background: transparent;
      color: white;
      border-bottom: 1px solid white !important;
    }
	```
3. 也可以新建一个专门修改三方组件样式的less,sass(scss)文件。
  