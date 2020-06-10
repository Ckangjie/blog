---
title: vuepress 部署到GitHub
date: 2020-06-10 15:40:39
publish: true
categories:
  - 前端开发
tags:
  - vuepress
---

## 1.构建自己的blog
推荐 vuepress-theme-reco@1.4.6,参考案例。
```html
<a href="https://vuepress-theme-reco.recoluan.com">vuepress-theme-reco@1.4.6</a>
```
## 2.自动化打包部署
在package.json同级下新建deploy.sh文件，内容如下。
```javascript
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build
# 进入生成的文件夹(打包之后的文件夹)
cd dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io  填写你刚刚创建的仓库地址
# xxxx 为用户名
# xxx-blog 为仓库名
git push -f git@github.com:xxxx/xxx-blog.git master:gh-pages

cd -
```
打包输出的base路径和xxx-blog一样。
