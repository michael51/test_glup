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
import path from 'path';
import ExtractTextPlugin from "extract-text-webpack-plugin";

/**
 * 创建scripts任务
 * 多页面的时候考虑每一个页面配置一个入口
 */
gulp.task('scripts', ()=>{
	return gulp.src(['app/assets/js/index.js', 'app/assets/js/page1.js'])//open file
		.pipe(plumber({ //handle error
			errorHandle: function () {}
		}))
		.pipe(named()) //rename file
		.pipe(
			gulpWebpack({
				externals: {
					vue: 'window.Vue',
					VueRouter: 'window.VueRouter'
				},
				resolve : {
					alias : {
						app      		: path.resolve(__dirname, '../../app'),
						pages      		: path.resolve(__dirname, '../../app/pages'),
						components      : path.resolve(__dirname, '../../app/components'),
						'@'      		: path.resolve(__dirname, '../../')
					}
				},
				module:{ //use webpack compile
					loaders:[
						{
							test:/\.js$/,
							loader:'babel-loader'
						},
						{
							test: /\.css$/,
							use: ExtractTextPlugin.extract({
								fallback: "style-loader",
								use: "css-loader"
							})
						},
						{
							test: /\.scss$/,
							use: ExtractTextPlugin.extract({
								fallback: "style-loader",
								use: ['css-loader', 'sass-loader']
							})
						},
					]
				},
				plugins: [
					new ExtractTextPlugin("../stylesheets/components.css"),
				]
			}), null, (err, stats) => {
				log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
					chunks:false
				}))
			})
		.pipe(gulp.dest('server/public/assets/js')) //assign file path
		.pipe(gulpif(args.watch, livereload())) //监听watch参数，执行热更新
});



