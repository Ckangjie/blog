---
title: vx/uni-app修改swiper样式
date: 2020-06-08 20:12
publish: true
categories:
  - 前端开发
tags:
  - 微信小程序
---

## 1.微信开发者工具>调试>调试微信开发者工具
![images](https://img-blog.csdnimg.cn/20200110112551832.png)

## 2.在弹出的框里找到相应节点
![images](https://img-blog.csdnimg.cn/20200110112634270.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzMzkxMTYw,size_16,color_FFFFFF,t_70)

## 3.修改样式
```css
/* wx-swiper-dots wx-swiper-dots-horizontal */
	wx-swiper .wx-swiper-dot-active{
	  width: 40rpx;
	  border-radius: 10rpx;
	  background: #eb544d;
	}
```