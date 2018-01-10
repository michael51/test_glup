/**
 * 2017.12.30
 * Michael
 * 引入gulp的yargs插件，定义参数集
 */
import yargs from 'yargs';

//定义参数内容
const args = yargs
	/**
	 *  gulp -production
	 *  区分线上环境
	 *  如果没有设置，则默认为false，使用开发环境。
	 */
	.option('production',{
		boolean: true,
		default: false,
		describe: 'min all scripts'
	})
	/**
	 * 监听自动编译
	 */
	.option('watch',{
		boolean: true,
		default: false,
		describe: 'watch all scripts'
	})

	/**
	 * 增加日志
	 */
	.option('verbose',{
		boolean: true,
		default: false,
		describe: 'log'
	})

	/**
	 * 处理资源映射
	 */
	.option('sourcemaps',{
		describe:'force the creation of sroucemaps'
	})

	/**
	 * 服务器端口
	 */
	.option('port',{
		string:true,
		default:8080,
		describe:'server port'
	})

	.argv; //命令行以字符串作为解析

export default args;