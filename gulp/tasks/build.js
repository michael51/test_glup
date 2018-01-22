import gulp from 'gulp';
import gulpSequence from 'gulp-sequence'; //此包处理包的顺序问题（同步执行任务）

//设定脚本处理顺序
gulp.task('build', gulpSequence('clean', 'graphic', 'sass', 'css', 'pages', ['scripts'], ['browser', 'serve']));