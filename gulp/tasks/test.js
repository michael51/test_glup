import gulp from "gulp";
import _console from "console-color-mr";
import dom from "gulp-jsdom";

gulp.task('html', function () {
	return gulp.src('test.html')
		.pipe(dom(function (document) {
			document.querySelectorAll('p').forEach(function (item, index) {
				console.info('x', item.textContent, index);
				let x = Number(item.getAttribute('data-x'));
				if (x === 1) {
					item.innerHTML = '123';
				}
			});
		}))
		.pipe(gulp.dest('test/'));
});