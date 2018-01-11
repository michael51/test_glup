import gulp from "gulp";
import gulpLoadPlugins from 'gulp-load-plugins';
import {swallowError} from '../extras/swallowError.js';

let $ = gulpLoadPlugins();

gulp.task('sass', () => {
	return gulp.src('app/**/*.scss')
		.pipe($.sass({ outputStyle: 'expanded' }))
		.on('error', swallowError)
		.pipe($.autoprefixer({
			browsers: ['last 5 versions'],
			cascade: false
		}))
		//.pipe($.cleanCss())
		.pipe(gulp.dest('app'))
});