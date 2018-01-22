import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('css', () => {
	return gulp.src('app/assets/**/*.css')
		.pipe(gulp.dest('server/public/assets'))
		.pipe(gulpif(args.watch, livereload())) //监听watch参数，执行热更新
});
