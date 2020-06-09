---
title: python 操作文件
date: 2020-06-08 19:37
publish: true
categories:
  - python
tags:
  - pthon
---

## 1.列表（list）保存为txt。
```javascript
//list转txt
list = ['a','b','c','d']
filename = open('D:\\soft\\Anaconda3\\list.txt','w')  
for i in list:
    filename.write(i)
    filename.write('\n')
filename.close()
```

## 2.字典（dict）保存为txt
```javascript
dict = {'姓名':'小李','性别':'男'}
filename = open('D:\\soft\\Anaconda3\\list.txt','w')#dict转txt
for k,v in dict.items():
    filename.write(k+':'+str(v))
    filename.write('\n')
filename.close()
```

## 3.字典保存为json格式
```javascript
import json
dict = {'姓名':'小李','性别':'男'}
jsonstr = json.dumps(dict)
filename = open('D:\\soft\\Anaconda3\\list1.json','w')#dict转josn
filename.write(jsonstr)
```

## 4.遍历文件
```javascript
#遍历文件
import os
import os.path
src = 'D:\\soft\\Anaconda3' #遍历的文件路径
for parent,dirname,filenames in os.walk(src):#返回的三个参数分别为，父目录，所有文件夹名，所有文件名。
    print('parent is:',parent)
    print('dirname is:',dirname)
for filename in filenames:
    print('filename is:',filename)
    print('文件路径:',os.path.join(parent,filename))
```

## 5.写文件
```javascript
str = '555555\n文件希尔1'
 
filename = open('D:\\soft\\Anaconda3\\text.txt','w')
filename.write(str)
filename.close()
```

## 6.读文件
```javascript
filename = open('D:\\soft\\Anaconda3\\text.txt','r')
filename.read()
print(filename.read())
```
