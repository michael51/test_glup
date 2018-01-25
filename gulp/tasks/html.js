import gulp from 'gulp';
import ejs from "gulp-ejs";
import replace from "gulp-replace";

/**
 * 把ejs文件打包一份html作为发布
 */
gulp.task('html', function(){
	gulp.src("./app/views/*.ejs")
		.pipe(ejs({ msg: 'Hello Gulp!'}, {}, { ext: '.html' }))
		.pipe(replace('?rev=@@', '?'+ Math.random() ))
		.pipe(gulp.dest("./server/public"))
});