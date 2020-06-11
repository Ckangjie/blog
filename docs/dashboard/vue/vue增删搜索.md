---
title: vue.js 实现搜索，添加，删除，id自增
date: 2020-06-11 17:00
publish: true
categories:
  - 前端开发
tags:
  - Vue.js
---

## 1.html
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>vue小案例</title>
		<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
	</head>
	<style type="text/css">
		.box {
			margin: 0 auto;
			width: 70%;
		}
 
		.table-bordered>tbody>tr>th,
		.table-bordered>tbody>tr>td {
			text-align: center;
		}
 
		.table>tbody+tbody {
			border: 0;
		}
	</style>
	<body>
		<div class="box" id="app">
			<div class="row">
 
				<div class="data-box">
					<form class="form-inline">
						<div class="form-group">
							<label>name</label>
							<input type="text" name="name" class="form-control" v-model="name" />
						</div>
						<button type="button" class="btn btn-default" @click="add()">添加</button>
						<div class="form-group">
							<label>搜索</label>
							<input type="text" name="sousuo" class="form-control" v-model="keywords" />
						</div>
					</form>
				</div>
 
				<div class="">
					<table class="table table-bordered">
						<tr>
							<th>ID</th>
							<th>name</th>
							<th>Ctime</th>
							<th>Operation</th>
						</tr>
						<tbody id="demo">
							<tr v-for="item,index in searchList" :key="item.id">
								<td>{{index+1}}</td>
								<td v-text="item.name"></td>
								<td>{{item.ctime}}</td>
								<td>
									<!-- click.prevent阻止默认事件 -->
									<!-- click.stop阻止冒泡事件 -->
									<a href="" @click.prevent="del(index)">删除</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</body>
</html>
```
## 2.js
```javascript
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>
	let time = new Date()
	let y = time.getFullYear()
	let m = time.getMonth() + 1
	let d = time.getDate()
	let H = time.getHours()
	let min = time.getMinutes()
	let myDate = y + '-' + m + '-' + d + '-' + H + ':' + min
 
	let app = new Vue({
		el: "#app",
		data: {
			id: '',
			name: '',
			keywords: '',
			list: [{
					name: '小面',
					ctime: myDate
				},
				{
					name: '米粉',
					ctime: myDate
				},
				{
					name: '牛肉面',
					ctime: myDate
				},
				{
					name: '辣鸡粉',
					ctime: myDate
				}
			]
		},
		methods: {
			add() { // 添加的方法
				if (this.input()) {
					return false
				} else {
					var car = {
						id: this.id,
						name: this.name,
						ctime: myDate
					}
					this.list.push(car);
					this.id = this.name = '';
				}
			},
			del(index) { // 根据Id删除数据
				// 根据下标删除,删除1个
				this.list.splice(index, 1);
			},
			// 判断input框的值
			input() {
				let value = document.querySelector('[name=name]').value
				if (value == '') {
					alert('name不能为空')
					return true
				}
 
			}
		},
		// 计算属性
		computed: {
			searchList: function() {
				return this.list.filter(item => {
					return item.name.match(this.keywords)
				})
			}
		}
	})
</script>
```
