前端构建项目
==========

传统开发流程中，UI做好原型页面给开发人员，开发人员再改写成后端模板页面，经常需要两边同步修改，步骤繁琐，容易出错。引入thymeleaf后，希望能利用其natural特性，实现前后端共同维护一套页面，
提高开发效率。同时，通过webpack、gulp等项目自动化构建工具，自动完成前端项目资源编译、打包、压缩、发布等工作流，减少重复工作，提高代码质量。

构建目标
-------
* 使用Thymeleaf模板引擎解耦视图和后台数据，提供一个纯净的html模板方便前端人员编辑
* 项目以模块化方式开发，js、css、img等资源以模块为单位集中管理
* 资源路径插入
* js、css自动合并打包
* js、css公共文件自动分离，单独打包，优化加载时间
* 小体积图片文件自动base64转码,减少请求次数
* 大体积图片自动压缩
* 各种资源hash生成，解除浏览器cache
* 开发时无需手动刷新页面，通过监视文件变动自动刷新，提高开发效率

如何运行
-------

1. 本项目基于node.js构建，首选需要安装好node.js运行环境。 [nodejs官网](https://nodejs.org)

2. 从命令行进入WEB-INF/source目录，执行命令下载项目依赖
```
npm install
```

命令行工具
---------

##### 构建项目
```
npm run build
````
##### 清除构建目录
```
npm run clean:build
````
##### 打开开发服务器
```
npm run dev
````
##### 向html注入资源路径
step1 在html页面需要注入资源的位置加上相应的注释
* js
```
<!-- inject:js -->
<!-- endinject -->
````
* css
```
<!-- inject:css -->
<!-- endinject -->
```
step2 执行资源注入命令
```
npm run inject:assets
```
##### 发布项目
```
npm run publish
```
##### 压缩发布图片
```
npm run imagemin
```

开发规范
-------

Todo
----
* 自动化mock接口，提供rest api模拟数据
* JavaScript单元测试

参考资料
-------
+ UI
  - [SMACSS规范](https://smacss.com)
  - [字符图标](http://fontawesome.io/)
  - [Bootstrap 3](http://www.bootcss.com/)
  - [解决bootstrap 480px-768px的响应式布局问题](https://github.com/adjohnson916/bootstrap-grid-ms)
+ Webpack plugins
  - [imports-loader 解决不支持CommonJS规范的js包导入问题](https://github.com/webpack/docs/wiki/shimming-modules)
+ NPM  
  - [npm仓库查询地址](https://www.npmjs.com/)
  - [使用npm scripts的正确姿势](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)
