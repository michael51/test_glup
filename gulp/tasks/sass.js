import gulp from "gulp";
import gulpLoadPlugins from 'gulp-load-plugins';

let $ = gulpLoadPlugins();


//只打包公共css。注意其它的模块化scss文件由webpack负责

gulp.task('sass', () => {
	return gulp.src(['app/assets/stylesheets/**/*.scss','!app/assets/stylesheets/sprite/**/*.scss'])
		.pipe($.sass({
			outputStyle: 'expanded' ,
			includePaths:  ['./app', './app/assets/stylesheets']
		}))
		.on('error', $.sass.logError)
		.pipe($.autoprefixer({
			browsers: ['last 5 versions'],
			cascade: false
		}))
		//.pipe($.cleanCss())
		.pipe(gulp.dest('server/public/assets/stylesheets'))
});

/*
gulp.task('sass', () => {
	return gulp.src(['app/!**!/!*.scss','!app/pages/!**!/!*.scss','!app/components/!**!/!*.scss'])
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
});*/
