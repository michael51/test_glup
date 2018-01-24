/**
 * 模板处理
 */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';
import replace from "gulp-replace";

// 指派任务pages
gulp.task('test',  ()=>{
	return gulp.src('app/**/*.html')
		.pipe(replace('?rev=@@', '?'+ Math.random()))
		.pipe(gulp.dest('server')) //目的地
});
