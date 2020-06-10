---
title: Vue跨域，设置代理
date: 2020-06-10 15:35
publish: true
categories:
  - 前端开发
tags:
  - Vue.js
---

## 1.vue.config.js->devServer{}
```javascript
 devServer: {
  	open: true,
    host: '127.0.0.1',
  	port: port,
  	https: false,
  	hotOnly: false,
    // 代理
  	proxy: {
  		'/api': {
  			target: 'http://127.0.0.1:3001',
  			ws: true,
  			changOrigin: true,
  			pathRewrite: {
  				'^/api': ''
  			}
  		}
  	},
  	before: app => { }
  },
  ```
