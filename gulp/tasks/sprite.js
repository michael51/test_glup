import gulp from 'gulp';
import spritesmith from 'gulp.spritesmith';
import args from './util/args';
import {} from "console-color-mr";
import merge from "merge-stream";
import buffer from "vinyl-buffer";

gulp.task('sprite',function(){
	//console.info('args', args.production);
	const spriteData = gulp.src(spritesConfig.src)
		.pipe(spritesmith(Object.assign({}, spritesConfig.options)));

	const imgStream = spriteData.img
		.pipe(buffer())
		.pipe(gulp.dest(spritesConfig.dest.image))
		.on('end', () => {
			console.info("已完成雪碧图合并，雪碧图保存目录：", spritesConfig.dest.image);
		});

	const cssStream = spriteData.css
		.pipe(gulp.dest(spritesConfig.dest.css))
		.on('end', () => {
			console.info("已生成雪碧图样式，雪碧图样式保存目录：", spritesConfig.dest.css);
		});

	return merge(imgStream, cssStream);
});

const spritesConfig = {
	//源图片，可以用通配符匹配多张图片，也可以使用数组来枚举多张图片
	src: 'app/assets/icon/sprite/*.png',
	//image与css的目标路径
	dest: {
		css: './app/assets/stylesheets/sprite/',
		image: './app/assets/icon/'
	},
	//配置
	options: {
		//合成图名称
		imgName: 'sprite.png',
		//合成图css样式
		cssName: 'sprite.scss',
		//合成图里图标间距
		padding: 4,
		//css格式
		cssFormat: "scss",
		//css配置
		cssOpts: {
			//传递数据到hbs模板
			backgroundImageUrl : '/assets/icon/',
			cssClass: function(name) {
				// If this is a hover sprite, name it as a hover one (e.g. 'home-hover' -> 'home:hover')
				if (name.indexOf('-hover') !== -1) {
					return '.icon-' + name.replace('-hover', ':hover');
					// Otherwise, use the name as the selector (e.g. 'home' -> 'home')
				} else {
					return '.icon-' + name;
				}
			}
		},
		//合成css模型
		cssTemplate:'app/assets/stylesheets/sprite/sprite.hbs',
	}
};