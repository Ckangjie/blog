---
title: layui模板引擎条件渲染
date: 2020-06-16 12:00
publish: true
categories:
	- 前端开发
tags:
	- layui
---

## 1.模板引擎条件渲染

```javascript
<script type="text/html" id="tool-status">
    {{# if(d.status === -1){ }}
    <span style="color: #666;">待付款</span>
    {{# } else if(d.status === 0) { }}
    <span style="color: #666;">已发货</span>
    {{# } else if(d.status === 1) { }}
    <span style="color: #666;">待收货</span>
    {{# } else if(d.status === 2) { }}
    <span style="color: #666;">待评价</span>
    {{# } else { }}
    <span style="color: #666;">售后/退款</span>
    {{# } }}
</script>
```

## 2.table渲染
开启头部工具
```javascript
layui.table.render({
            elem: '#demo',
            toolbar: true,
            cols: [[
                {field:'status', title:'订单状态',toolbar:'#tool-status'},
            ]],
        });
```
```html
<div class="layui-hide" id="demo" lay-filter="demo"></div>
```