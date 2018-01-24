import path from 'path';
import ExtractTextPlugin from "extract-text-webpack-plugin";

const entry_path = 'app/modules/pages/';

//几个独立页面就配置几个
const entry = [
	entry_path + 'index/index.js',
	entry_path + 'page1/index.js'
];

export default {
	entry: entry,
	externals: {
		vue: 'window.Vue',
		VueRouter: 'window.VueRouter'
	},
	resolve: {
		alias : {
			app      		: path.resolve(__dirname, '../app'),
			modules      	: path.resolve(__dirname, '../app/modules'),
			pages      		: path.resolve(__dirname, '../app/modules/pages'),
			components      : path.resolve(__dirname, '../app/components'),
			'@'      		: path.resolve(__dirname, '../')
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
					//use: ['css-loader', 'sass-loader']
					// use: ['css-loader', 'sass-loader?includePaths[]=./app']
					use: ['css-loader',
						{
							loader: "sass-loader",
							options: {
								includePaths: ["./app"],
								outputStyle: 'expanded'
							}
						}
					]
				})
			},
		]
	},
	plugins: [
		new ExtractTextPlugin('../stylesheets/[name].css'),
	]
}