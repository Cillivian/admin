# This is a repos for learning eggjs, vuejs and ant-design-vue.

the server is written with eggjs and the client is written with vuejs.
### author cillivian <h2ojeremy@hotmail.com>
# some note about this project

update at 2019.06.30 
version: v1.0.0
### 一、创建项目
---
利用egg-init 创建

安装egg-init
```bash
npm install egg-init -g
```
初始化项目

```bash
$ mkdir egg-example && cd egg-example
$ npm init egg --type=simple
$ npm i
```
运行项目：
```bash
npm run dev
```
默认后端监听7001端口
### 二、连接数据库
支持两种连接方式：

1. 使用egg-mysql连接
2. 使用egg-sequelize+mysql2连接

这里详述第二种，sequelize时建立在MySQL库上的一种库，有sequelize后，你可以省去写大部分都原生sql语句，直接调用api。

先是安装依赖

```bash
npm install --save egg-sequelize mysql2
```
然后启动插件，在 config/plugin.js 中引入 egg-sequelize 插件

```js

'use strict';
/** @type Egg.EggPlugin */
module.exports = {
// had enabled by egg
// static: {
// enable: true,
// }
    sequelize: {
    enable: true,
    package: 'egg-sequelize',
    },
};
```
接下来配置数据库信息（在 config/config.default.js 中添加 sequelize 配置）
```js

// 数据库
config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'admin',
    username: 'root',
    password: '100248',
};
```
然后新建文件夹model，新建app/model/user.js文件

```js

'use strict';
 
module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;
 
    const User = app.model.define('user',
        {
            userid: { type: INTEGER, primaryKey: true, autoIncrement: true },
            username: STRING(50),
            sex: STRING(4),
            userpass:STRING(32)
        },
        {
            freezeTableName: true, // Model 对应的表名将与model名相同
            timestamps: false,
        }
    );
    return User;
};
```

创建coontroller来操作数据库

app/controller/user.js

```js
'use strict';
 
const Controller = require('egg').Controller;
 
class UserController extends Controller {
    async index() {
        const _ctx = this.ctx
        const user = await _ctx.model.User.findAll()
        _ctx.body = user;
    }
}
 
module.exports = UserController;
```
连上路由
route.js
```js

'use strict';
/**
* @param {Egg.Application} app - egg application
*/
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/user', controller.user.index);
};
```
数据库创建对应的库和数据

```sql
CREATE TABLE `user` ( 
`userid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'primary key',
`username` varchar(30) DEFAULT NULL COMMENT 'user name', 
`sex` varchar(11) DEFAULT NULL COMMENT 'user sex', 
`userpass` varchar(255) DEFAULT NULL COMMENT 'user password', 
PRIMARY KEY (`id`)) 
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='user'
```
插入数据
```sql
INSERT INTO `admin`.`user`(`userid`, `username`, `sex`, `userpass`) VALUES (3, 'test', '男', '123456');
```
运行
```bash
$npm run dev
```
可以得到 [localhost:7001/user](localhost:7001/user)
```json
[{
    "userid":1,
    "username":"123",
    "sex":"男",
    "userpass":"123"
    },{
    "userid":2,
    "username":"admin",
    "sex":"男",
    "userpass":"123456"
    },{
    "userid":3
    ,"username":"test",
    "sex":"男",
    "userpass":"123456"
}]
```
