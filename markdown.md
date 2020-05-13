# 开发踩坑记录

## 1.github gh-pages分支部署演示

## 所有开发放dev分支，开发完测试没问题合并master分支，
## master分支每次部署前记得先删除上次生成的dist文件夹，
## 然后yarn run build打包生成dist文件夹，记得将dist提交master分支，可能会引起代码冲突，
## 删除本地跟线上gh-pages分支，git branch -d gh-pages,git push origin --delete gh-pages,
## 然后运行git subtree push --prefix=dist origin gh-pages，要发布的内容将会推到gh-pages分支，
## 然后去https://github.com/FELBC/lbcShopmall/settings设置，Source设为gh-pages branch,
## 最终发布地址为https://felbc.github.io/lbcShopmall/index.html，
## 暂时没有找到更好的解决办法，应该有相应的自动化部署办法，有时间再折腾

## 2.vue.config.js修改完,其他配置文件添加修改eg:.babelrc添加都需重启才能生效

## 3.Mock.mock后面匹配的接口地址需要用正则, eg：/user\/login/,不然拦截不到接口

## 4.build生成dist放到github图片找不到路径问题,public目录引用为绝对路径，
## 项目部署在https://felbc.github.io/lbcShopmall这是一个二级目录，不是根目录，
## 绝对路径引用会有问题，如果都是根目录，则开发环境和生产环境都没问题，
## 解决办法，将imgs文件夹移动到assets下，所有页面data里面图片地址通过require引用

## 5.github gh-pages只支持静态资源部署，ajax异步请求不允许会导致数据加载不出来，
## 解决办法，所有真实接口请求到的数据修改为本地mock

## 6.Mock.mock get请求正则需要精确匹配，不然会出现某个接口请求拦截的时候，多个后台接口路径被同时匹配到，导致另外一个不是我们请求的接口数据拦截返回的问题，post不需要，正则需要进一步熟悉

## 7.vue 给UI库添加按需加载时启动项目时 babel-preset-es2015 报错
## 解决办法：yarn add @babel/preset-env，修改.babelrc文件，把es2015改成@babel/preset-env

## 8.涉及到金额和订单的数据需要入库，鉴于安全性考虑，尽量后台计算完返给前台，前台只做渲染，用户操作需要调用接口存储

## 9.chrome调试技巧，Sources => ⋮ => Open file(ctrl+p) => 搜索源文件 => 打断点调试(这个有点类似去服务端打断点联调了，能看到数据的每一步状态，对定位程序问题很有帮助)