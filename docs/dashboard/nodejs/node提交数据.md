---
title: 初识nodejs 前后数据交互，获取数据库数据。
date: 2020-06-08 20:45
publish: true
categories:
	- nodejs
tags:
	- nodejs
---

## 1.接收前台数据mysqldb.js
```javascrpt
let db = require('mysql')
let express = require('express')
let app = express()
app.all('*',function(req,res,next){
    res.header('Access-Control-Allow-Origin','*')
    next()
})
 
let connection = db.createConnection({
    host:'localhost',
    user:'root',
    password:'123',
    database:'web'
})
 
connection.connect(); 
let  sql = 'SELECT * FROM myweb_user';
connection.query(sql,  (error, results, fields)=> {
    if (!error) {
        app.get('/',(req,res)=>{
           //将数据库信息返回前台
            res.json(results)
 
            console.log('正在访问接口……')
            // 打印前台数据
            // console.log(req.query)
            console.log(req.query)
          }).listen(3002)
    }
  });
  ```
 ## 2.发送数据给后台xx.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div>
        <label for="">用户名:</label>
        <input type="text" class="name">
    </div>
    <div>
        <label for="">密码:</label>
        <input type="password" class="pwd">
    </div>
    <div><button class="">登陆</button></div>
 
</body>
</html>
<script src="kam/js/jquery-3.4.1.js"></script>
<script>
    $('.btn').click(function(){
 
       let name = $('.name').val()
       let pwd = $('.pwd').val()
       
       let data = {'username':name,'pwd':pwd}
 
       $.ajax({
           url:'http://127.0.0.1:3002/',
           type:'get',
           dataType:'json',
           data:data,
       })
 
    })
 
</script>
```
## 3.结果
前台提交
![images](https://img-blog.csdnimg.cn/20190922223614629.png)

后台接收
![images](https://img-blog.csdnimg.cn/201909222235485.png)
 
 