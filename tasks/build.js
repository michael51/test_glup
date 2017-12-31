import gulp from 'gulp';
import gulpSequence from 'gulp-sequence'; //此包处理包的顺序问题

//设定脚本处理顺序
gulp.task('build', gulpSequence('clean', 'css', 'pages', 'scripts', ['browser', 'serve']));
