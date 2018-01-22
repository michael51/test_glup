import gulp from 'gulp';
import ejs from "gulp-ejs";
//作废
gulp.task('html', function(){
	gulp.src("./app/views/*.ejs")
		.pipe(ejs({ msg: 'Hello Gulp!'}, {}, { ext: '.html' }))
		.pipe(gulp.dest("./server/public"))
});