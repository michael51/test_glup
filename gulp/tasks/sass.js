import gulp from "gulp";
import gulpLoadPlugins from 'gulp-load-plugins';

let $ = gulpLoadPlugins();

gulp.task('sass', () => {
	return gulp.src(['app/**/*.scss','!app/pages/**/*.scss','!app/components/**/*.scss'])
		.pipe($.sass({
			outputStyle: 'expanded' ,
			includePaths:  ['./app']
		}))
		.on('error', $.sass.logError)
		.pipe($.autoprefixer({
			browsers: ['last 5 versions'],
			cascade: false
		}))
		//.pipe($.cleanCss())
		.pipe(gulp.dest('app'))
});