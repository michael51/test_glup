import path from 'path';
import ExtractTextPlugin from "extract-text-webpack-plugin";

const pageEntryPath = 'app/modules/pages/'; //单页目录
const libsEntryPath = 'app/assets/js/libs/'; //公共库目录

/*配置独立页*/
const pageEntry = [
	pageEntryPath + 'index/index.js',
	pageEntryPath + 'page1/index.js'
];


/*配置公共文件*/
const commonEntry = [
	libsEntryPath + '**/*.js'
];

export default {
	pageEntry,
	commonEntry,
	externals: {
		vue      : 'window.Vue',
		VueRouter: 'window.VueRouter'
	},
	resolve  : {
		alias: {
			app       : path.resolve(__dirname, '../../app'),
			modules   : path.resolve(__dirname, '../../app/modules'),
			pages     : path.resolve(__dirname, '../../app/modules/pages'),
			components: path.resolve(__dirname, '../../app/components'),
			'@'       : path.resolve(__dirname, '../../')
		}
	},
	module   : { //use webpack compile
		loaders: [
			{
				test   : /\.vue$/,
				loader : 'vue-loader',
				options: {
					extractCSS: true
				}
				//options: vueLoaderConfig
			},
			{
				test  : /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use : ExtractTextPlugin.extract({
					fallback: "style-loader",
					use     : "css-loader"
				})
			},
			{
				test: /\.scss$/,
				use : ExtractTextPlugin.extract({
					fallback: "style-loader",
					//use: ['css-loader', 'sass-loader']
					// use: ['css-loader', 'sass-loader?includePaths[]=./app']
					use     : ['css-loader',
						{
							loader : "sass-loader",
							options: {
								includePaths: ["./app"],
								outputStyle : 'expanded'
							}
						}
					]
				})
			},
		]
	},
	plugins  : [
		new ExtractTextPlugin('../stylesheets/[name].css')
	]
}