/**
 * 监听app目录
 */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';

gulp.task('browser', (cb) => {
	if (!args.watch) return cb();
	gulp.watch('app/**/*.js', ['scripts']); //如果app/**/*.js文件发生改变，则启动scripts构建脚本
	gulp.watch('app/**/*.ejs', ['pages']);
	gulp.watch('app/**/*.css', ['css']);
	gulp.watch('app/**/*.scss', ['sass']);
});
