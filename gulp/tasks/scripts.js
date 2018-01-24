/**
 * 安装依赖
 * npm install gulp gulp-if gulp-concat webpack webpack-stream vinyl-named gulp-livereload gulp-plumber gulp-rename gulp-uglify gulp-util yargs --save-dev
 */

import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat'; //文件拼接
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named'; //文件做标志
import livereload from 'gulp-livereload'; //热更新
import plumber from 'gulp-plumber'; //处理文件信息流
import rename from 'gulp-rename';
import uglify from 'gulp-uglify'; //处理JS压缩
import {log,colors} from 'gulp-util'; //命令行工具输出包
import args from './util/args';
import WebpackConfig from "../config/webpack.conf";

/**
 * 创建scripts任务
 * 多页面的时候考虑每一个页面配置一个入口
 */
gulp.task('scripts', ()=>{
	return gulp.src( WebpackConfig.pageEntry )
		.pipe(plumber({ //handle error
			errorHandle: function () {}
		}))
		/*处理文件名*/
		.pipe(named(function(file) {
			let fileUrl = file.base;
			let re = /.*\\(.*)\\/gi;

			while (re.exec(fileUrl) !== null){
				console.info('处理页面', (RegExp.$1).yellowBG);
			}

			return RegExp.$1
		}))
		.pipe(
			gulpWebpack({
				externals	: WebpackConfig.externals,
/*				resolve : {
					alias : {
						app      		: path.resolve(__dirname, '../../app'),
						modules      	: path.resolve(__dirname, '../../app/modules'),
						pages      		: path.resolve(__dirname, '../../app/modules/pages'),
						components      : path.resolve(__dirname, '../../app/components'),
						'@'      		: path.resolve(__dirname, '../../')
					}
				},	*/
				resolve 	: WebpackConfig.resolve,
				module		: WebpackConfig.module,
				plugins		: WebpackConfig.plugins
			}), null, (err, stats) => {
				log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
					chunks:false
				}))
			})
		.pipe(gulp.dest('server/public/assets/js')) //assign file path
		.pipe(gulpif(args.watch, livereload())) //监听watch参数，执行热更新
});


/**
 * 处理公共JS文件
 */
gulp.task('scripts-common', ()=>{
	return gulp.src( WebpackConfig.commonEntry )//open file
		.pipe(plumber({ //handle error
			errorHandle: function () {}
		}))
		.pipe(named(function(file) {
			return 'vendor.min'
		}))
		.pipe(
			gulpWebpack({ //use webpack compile
				module:{
					loaders:[{
						test:/\.js$/,
						loader:'babel-loader'
					}]
				}
			}), null, (err, stats) => {
				log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
					chunks:false
				}))
			})
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
		.pipe(gulp.dest('server/public/assets/js')) //保存新取名的文件
		.pipe(gulpif(args.watch, livereload())) //监听watch参数，执行热更新
});


