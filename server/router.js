/**
 * 有几个页面就配置几个路由（2018/1/25）
 * 需要和页面页面对应。（modules/pages）
 * 系统根据ejs模板文件生成对应的html文件。方便线上部署。
 */

let index = require('./routes/index');
let users = require('./routes/users');

module.exports = function (app) {
	app.use('/', index);
	app.use('/users', users);
};


