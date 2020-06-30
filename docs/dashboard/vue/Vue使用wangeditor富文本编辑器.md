---
title: Vue使用wangeditor富文本编辑器
date: 2020-06-30 11:22
publish: true
categories:
  - 前端开发
tags:
  - Vue.js
---

## 1.wangEditor编辑器
 wangEditor —— 轻量级 web 富文本编辑器，配置方便，使用简单。支持 IE10+ 浏览器
>官网 [wangeditor](http://www.wangeditor.com/)
>参考博客 https://blog.csdn.net/ligang2585116/article/details/78964349

## 2.vue使用wangEditor编辑器
```javascript
npm i wangeditor -S
```
1. 在 .vue文件引入wangeditor -> import Editor from "wangeditor" (直接看代码)

```html
<template>
	<el-row type="flex" class="row-bg release" justify="center">
		<el-col :span="12">
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<span>❤</span>关于我
				</div>
				<div>
					<p>小白煎鱼一条,渴望技术</p>
				</div>
				<!-- 添加富文本编辑器 wangeditor -->
				<div class="clearfix">
					<!-- 标题 -->
					<input type="text" class="title" placeholder="请输入标题" name="title" v-model="title"/>
					<!-- 富文本编辑框 -->
					<div id="editor" class="editor"></div>
					<!-- 提交按钮 -->
					<el-button type="primary" @click="submit" class="submit">点击上传</el-button>
				</div>
			</el-card>
		</el-col>
	</el-row>
</template>
<script>
	import Editor from "wangeditor";
	export default {
		name: "editor",
		data() {
			return {
				editor: "",
				title:''
			};
		},
		methods: {
			// 创建编辑器
			createEditor() {
				//实例化一个编辑器
				this.editor = new Editor("#editor");
				// 图片上传格式
				this.editor.customConfig.uploadImgShowBase64 = true;
				// 隐藏网络图片
				this.editor.customConfig.showLinkImg = false;
				// 关闭样式过滤(貌似不生效)
				this.editor.customConfig.pasteFilterStyle = false
				// 自定义颜色
				this.editor.customConfig.colors = ['#000000','#eeece0','#1c487f','#4d80bf','#c24f4a','#8baa4a','#7b5ba1','#46acc8','#f9963b','#ffffff']
				// 配置字体
				this.editor.customConfig.fontNames = ['宋体','微软雅黑','Arial','Tahoma','Verdana']
				//创建
				this.editor.create();
				// 富文本内容
				this.editor.txt.html();
			},
			// 上传富文本内容
			submit() {
				let content = this.editor.txt.html()
				console.log(content)
				console.log(this.title)
			}
		},
		mounted() {
			this.createEditor();
		}
	};
</script>

<style scoped lang="less">
	.release .title {
		height: 40px;
		width: 100%;
		margin-bottom: 10px;
		padding-left: 10px;
		border: 1px solid #cccccc;
		outline: none;
	}
	.release .submit {
		padding: 10px;
		float: right;
		margin-top: 10px;
	}
</style>
```
