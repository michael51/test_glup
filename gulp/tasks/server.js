import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('serve', (cb) => {
	if (!args.watch) return cb(); //如果不是处于监听状态，则直接返回回调函数。

	// 创建一个服务（端口在server/www配置）
	let server = liveserver.new(['--harmony', 'server/bin/www']);
	server.start();

	//监听相关文件的改变（热更新）
	gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs', 'server/public/**/*.css'], function (file) {
		server.notify.apply(server, [file]); //通知服务器文件发送改变
	});

	//监听需要重启server的js
	gulp.watch(['server/routes/**/*.js', 'server/app.js'], function () {
		console.info('执行重启server'.green);
		server.start.bind(server)();
	});

});
