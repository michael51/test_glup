import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('serve', (cb) => {
	if (!args.watch) return cb(); //如果不是处于监听状态，则直接返回回调函数。

	// 创建一个服务
	let server = liveserver.new(['--harmony', 'server/bin/www']);
	server.start();

	//监听所有js和ejs文件的改变
	gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'], function (file) {
		server.notify.apply(server, [file]); //通知服务器文件发送改变
	});

	//监听需要重启server的js
	gulp.watch(['server/routes/**/*.js', 'server/app.js'], function () {
		server.start.bind(server)();
	});
});
