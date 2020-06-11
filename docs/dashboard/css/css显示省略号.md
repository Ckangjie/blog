---
title: css 显示省略号
date: 2020-06-11 17:06
publish: true
categories:
	- 前端开发
tags:
	- css
---

## 1.html如下
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
</head>
<body>
    <div class="brief-box">
    <p class="brief-word">
        详细说明简介详细说明简介详细说明简介详细说明
    </p>
</div>
</body>
</html>
```
## 2.css如下
```css
.brief-box {
    width:200px;
}
.brief-word {
    width:70%;
    padding-right:36px;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;  //显示文字行数。
    overflow:hidden;
}
```
