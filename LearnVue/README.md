# Learn Vue

## Vue基础
### 基础
1. 声明式渲染：el, data, methods, components...。定义template然后挂载到index.html中的某个模块上(by id)
2. MVVM模型：双向绑定
3. 生命周期：beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, beforeDestroy, destroyed

### 模版语法
1. mustache，computed，watch属性（监听route）
2. v-once, text, pre, cloak
3. v-for: 给DOM元素添加key！！！
	1. 数组：(item, index) in myList
	2. 对象：(value, key, index) in myItem
4. v-bind: 单向绑定属性
	1. 属性：src, value, name, title, class, href, style, id
	2. 动态变样式！绑定class
5. v-on: 绑定事件监听
	1. click: stop, prevent, native, once
	2. keyup/keydown: enter...
6. v-if (else if, else) && v-show
7. v-model: 双向绑定
	1. 等于 v-bind + v-on (比如:value + :input)
	2. 应用元素：input, mustache, radio(相同value互斥), checkbox, select & option
	3. 修饰符：lazy, number, trim

	

## Vue的组件化开发
1. data必须是函数：有自己独立的作用域

### 父子组件通信
#### 父 --> 子
1. props
2. children（子组件数组）
3. ref

#### 子 --> 父
1. 事件监听：
	1. 子定义：this.$emit('自定义事件名字', 其他参数)
	2. 父中子：v-on绑定=‘自定义事件名字’
2. parent
3. root


### v-slot插槽
1. 插槽默认值
2. 具名插槽：name对应上
3. 作用域插槽：数据来自子组件，父组件重新进行排版(template + slot-scope="mychildslot") + mychildslot.myPropName


## Webpack + Vue CLI脚手架

### Webpack基础
1. 静态模块打包：处理依赖关系，用loader将文件转换成浏览器可识别文件。除了JS以外，图片等文件也可以被当成模块来使用
2. 使用：依赖node环境。
	npm init: package.json管理package name, versionn, description, entry point, script运行脚本, devDependencies, dependencies
3. 文件配置打包出入口
4. 使用vue：npm install vue。module中配置resolve extensions & alias

### Webpack loader
1. css
2. less
3. 图片：url-loader, file-loader
4. babel: 处理ES6语法

### Webpack Plugin

### Webpack-dev-server
1. 本地开发服务器，基于node.js服务器搭建
2. module.exports的dev对象中配置端口等信息

### Webpack配置文件: base都会被merge到dev和prod中
1. base.config.js
2. dev
3. prod

## Vue CLI
CLI3 0配置，提供 vue ui命令，提供可视化配置

### 项目目录结构
1. build
2. config
3. node_modules
4. src
5. static
6. .babelrc
7. .editorconfig
8. .eslintignore
9. .gitignore
10. ./postcssrc
11. index.html
12. package.json
13. package-lock.json
14. README.mD

### Runtime+compiler vs. Runtime-only
1. Vue程序运行过程：template —> AST —> render —> Virtual DOM —> UI
2. runtime-only直接render成virtual DOM，没有转换AST步骤，效率更高




## Vue Router

### 路由基本知识
1. 公网 & 内网IP
2. 路由过程：内容 + IP地址 —> 猫 —> 路由器通过映射表（内网IP和电脑MAC地址的对照表）再次转发消息
3. url的hash & HTML5的history
	1. pushState(data, title, url)
	2. history.back/forward/go/replaceState

### 前后端渲染 & 路由：后端渲染 --> (Ajax)前后端分离 --> SPA前端路由

### Vue-Router基础
1. router-link (to, tag, replace, (自定义)active class) + router-view
2. 代码跳转：this.$router.push/replace

### 动态路由
1. /user/:**uid**
2. this.$route.params.**uid**

### 路由懒加载：
1. 只请求 & 加载当前会用到的资源
2. const myCpn = () => import('component Path')


### 其他
1. 嵌套路由：children
2. 路由传参：params, query
3. 全局导航守卫：beforeEach (to, from, next), afterEach...
4. Keep-alive



## JavaScript ES6 语法
1. 模块化开发：
	1. Common JS: 
		1. module.exports = {...}
		2. const blablabla = require('myPath')
	2. ES6: 
		1. export (default)...
		2. import ... from ...
2. Promise: 异步操作管理

## Vuex：状态管理工具
1. 过程：Vue components —> dispatch —> actions —> commit —> mutations —> modules —> state —> render —> Vue components
2. state: 存储状态
3. getters: vuex的computed
4. mutations: 定义改变state的方法，使用时要commit
5. actions: 专门处理异步操作，使用时先dispatch到actions，然后actions在commit mutations方法/事件
6. modules: 拥有独立的state, getter, mutation, action的模块

## Axios网络请求封装框架
1. get/post，普通请求
2. 发送并发请求：
	1. axios.all([axios数组])
	2. axios.spread((res1, res2) => {
		......
	})
3. 全局配置：defaults: url, method, baseURL, headers, timeout...
4. 创建Axios实例：不同的实例有不同的配置
5. 封装：返回一个函数，返回Promise对象，其中创建axios实例&用传进来的config发送请求，返回Promise对象。外部正常then & catch
6. 拦截器：
	1. request请求拦截：
		1. 添加特殊的header（比如language）
		2. 开启loading
		3. 判断请求是否满足后端需求（比如看是否有token：登陆状态）
	2. response拦截：
		1. 后端返回的登陆状态：按需跳转登陆页面
		2. 关闭loading