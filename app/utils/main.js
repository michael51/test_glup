/*
* @Author: Rosen
* @Date:   2017-05-15 15:26:38
* @Last Modified by:   Rosen
* @Last Modified time: 2017-05-21 14:58:37
*/

'use strict';
let Hogan = require('hogan.js');
let conf = {
	serverHost : ''
};
let _main = {
	// 网络请求
	request : function(param){
		let _this = this;
		$.ajax({
			type        : param.method  || 'get',
			url         : param.url     || '',
			dataType    : param.type    || 'json',
			data        : param.data    || '',
			success     : function(res){
				param.success(res);
			},
			error       : function(err){
				typeof param.error === 'function' && param.error(err.statusText);
			}
		});
	},
	// 获取服务器地址
	getServerUrl: function (path) {
		return '执行getServerUrl';
	},

	getTitle: function () {
		return conf.title;
	},
	setTitile: (title) => {
		conf.title = title;
	},
	// 渲染html模板
	renderHtml : function(htmlTemplate, data){
		let template    = Hogan.compile(htmlTemplate),
			result      = template.render(data);
		return result;
	},
	// 成功提示
	successTips : function(msg){
		alert(msg || '操作成功！');
	},
	// 错误提示
	errorTips : function(msg){
		alert(msg || '哪里不对了~');
	},
	// 字段的验证，支持非空、手机、邮箱的判断
	validate : function(value, type){
		let values = $.trim(value);
		// 非空验证
		if('require' === type){
			return !!values;
		}
		// 手机号验证
		if('phone' === type){
			return /^1\d{10}$/.test(value);
		}
		// 邮箱格式验证
		if('email' === type){
			return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
		}
	},
	// 统一登录处理
	doLogin : function(){
		window.location.href = './user-login.html?redirect=' + encodeURIComponent(window.location.href);
	},
	goHome : function(){
		window.location.href = './index.html';
	}

};

module.exports = _main;