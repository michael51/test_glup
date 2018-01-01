# 通过express创建项目，带ejs模板

- 在server目录下创建express套件
> express -e

> npm install

- 创建.babelrc文件

- 创建gulpfile.babel.js文件

- 安装包（具体参考package.json）
> npm install gulp gulp-if gulp-concat webpack webpack-stream vinyl-named gulp-livereload gulp-plumber gulp-rename gulp-uglify gulp-util yargs --save-dev

- 配置args完成后，执行启动命令
> gulp --watch

- 增加热更新

找到以下代码
> app.use(express.static(path.join(__dirname, 'public')));

在其后增加热更新语句
> app.use(require('connect-livereload')()); //michael热更新