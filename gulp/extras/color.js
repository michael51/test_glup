/**
 * node颜色模块
 * demo1:console.info('x'.red, 'michael'.green, 'jackson'.blue);
 * demo2:console.info('x'.prompt);
 */
const colors = require('colors');

colors.setTheme({
	silly	: 'rainbow',
	input	: 'grey',
	verbose : 'cyan',
	prompt	: 'red',
	info	: 'green',
	data	: 'blue',
	help	: 'cyan',
	warn	: 'yellow',
	debug	: 'magenta',
	error	: 'red'
});