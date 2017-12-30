/**
 * 安装依赖
 * npm install gulp gulp-if gulp-concat webpack webpack-stream vinyl-named gulp-livereload gulp-plumber gulp-rename gulp-uglify gulp-util yargs --save-dev
 */

import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat'; //文件拼接
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload'; //热更新
import plumber from 'gulp-plumber'; //处理文件信息流
import rename from 'gulp-rename';
import uglify from 'gulp-uglify'; //处理JS压缩
import {log,colors} from 'gulp-util'; //命令行工具输出包
import args from './util/args';

/**
 * 创建scripts任务
 */
gulp.task('scripts', ()=>{
	return gulp.src(['app/js/index.js'])//open file
		.pipe(plumber({ //handle error
			errorHandle: function () {

			}
		}))
		.pipe(named()) //rename file
		.pipe(gulpWebpack({ //use webpack compile
			module:{
				loaders:[{
					test:/\.js$/,
					loader:'babel'
				}]
			}
		}), null, (err, stats) =>{
			log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
				chunks:false
			}))
		})
		.pipe(gulp.dest('server/public/js')) //assign file path
		/**
		 * 重新起一个新名字，用于保存压缩的文件
		 */
		.pipe(rename({
			basename: 'cp',
			extname: '.min.js'
		}))
		/**
		 * uglify code
		 */
		.pipe(uglify({
			compress: {
				properties:false
			},
			output: {
				'quote_keys':true
			}
		}))
		.pipe(gulp.dest('server/public/js')) //保存新取名的文件
		.pipe(gulpif(args.watch, livereload())) //监听watch参数，执行热更新
});
