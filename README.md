# cursorFeTemp
Cursor系列教程，一步步搭建一个通用项目模板。使用Cursor创建一个前端模板工程，通过全局规则约束，让非前端开发也能快速上手前端。

## 2. 目的
-  目前常见的cursor都是从0开始搭建项目，晦涩难懂的专业知识让人难以理解。所以本项目用来解决此问题。
-  通过使用框架和规则，将注意力集中到部分内容即可
-  Cursor 的功能使用不多介绍，参考官网和文档：[https://docs.cursor.com/get-started/welcome](https://docs.cursor.com/get-started/welcome)

## 1. 环境准备
1. 安装Nodejs [官网](https://nodejs.org/en) nodejs 中包含了npm，npm是一个包管理工具，可以理解为一个应用商店，从里面安装、卸载、升级工具
2. 安装pnpm ```npm install -g pnpm@latest-10```  pnpm 是npm的升级版，比npm更快，在国内环境下使用更方便
3. 安装git [官网](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git) git 用来做你代码的版本管理，看到什么时间修改了什么内容

## 2. 加载项目基础
1. 下载代码包或者 ```git clone https://github.com/Li-vien/cursorFeTemp.git```
2. 切换到 Cursor Chat： 安装依赖  
    - 相当于执行 pnpm install 安装项目需要的所有插件
3. Chat： 启动项目  根据输出： 
    - 相当于执行 pnpm dev 运行项目
    - 正常输出：  ➜  Local:   http://localhost:5173/  点击链接即可访问
    - 至此，项目已经正常运行
4. 每次关机、退出Cursor后重新打开，只需要：启动项目 步骤，不需要重复安装依赖


## 3. 项目结构介绍
-  只需要注意src目录下的结构：
-  1. assets 所有的素材和资源都放在这个下面（图片、MP3。。。。）
-  2. components 下面放所有的组件（组件就是一个一个的小元素，比如按钮、输入框、卡片、弹窗、菜单...）
-  3. router 是页面路由，如果要新增一个单独的页面，需要修改
-  4. stores 是一些全局的存储，比如登录信息、用户信息之类，方便多个页面之间共享
-  5. views  下每一个文件夹都是一个单独的页面
-  6. services 所有的请求按照功能模块目录放到servies目录下
-  6. App.vue 项目的主入口文件，一般不用修改