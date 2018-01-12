import gulp from 'gulp';

gulp.task('graphic', () => {
	return gulp.src(['app/assets/icon/**/*.*','!app/assets/icon/sprite/*'])
		.pipe(gulp.dest('server/public/assets/icon'))
});
