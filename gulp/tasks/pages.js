/**
 * 模板处理
 */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

// 指派任务pages
gulp.task('pages',  ()=>{
	return gulp.src('app/**/*.ejs')
		.pipe(gulp.dest('server')) //目的地
		.pipe(gulpif(args.watch, livereload()))
});
