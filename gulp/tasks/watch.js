/**
 * 监听app目录
 */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';
import gulpSequence from 'gulp-sequence'; //此包处理包的顺序问题（同步执行任务）

gulp.task('watch', (cb) => {
	if (!args.watch) return cb();

	//如果app/**/*.js文件发生改变，则启动scripts构建脚本
	gulp.watch('app/**/*.js', ['scripts']);

	gulp.watch('app/**/*.ejs', ['pages']);

	gulp.watch('app/**/*.css', ['css']);
	// gulp.watch('app/**/*.scss', ['sass']);

	//监控stylesheets的scss文件
	gulp.watch('app/assets/stylesheets/**/*.scss', ['sass']);

	//以下两个目录的scss因为是通过webpack加载，故修改之后，重新打包js
	gulp.watch(['app/components/**/*.scss','app/modules/**/*.scss'], ['scripts']);

	//如果雪碧图图标资源目录发生改变，执行重新生成雪碧图任务，然后复制图形目录
	// gulp.watch('app/assets/icon/sprite/*.png', ['sprite', 'graphic']);
	gulp.watch('app/assets/icon/sprite/*.png', ['sprite']);
	gulp.watch('app/assets/icon/sprite.png', ['graphic']);
});
