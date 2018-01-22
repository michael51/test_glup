# 通过express创建项目，带ejs模板。
生成环境使用的是node.js+ejs。

- 在server目录下创建express套件
> express -e

> npm install

- 创建.babelrc文件（不使用es6语法）

- 创建gulpfile.babel.js文件（使用es6语法）

- 安装包（具体参考package.json）
> npm install gulp gulp-if gulp-concat webpack webpack-stream vinyl-named gulp-livereload gulp-plumber gulp-rename gulp-uglify gulp-util yargs --save-dev

- 配置args完成后，执行启动命令
> gulp --watchR

调试访问
> http://localhost:3000/

手动指定端口
> set PORT=2000&&gulp --watch

- 增加热更新

server/app.js找到以下代码
> app.use(express.static(path.join(__dirname, 'public')));

在其后增加热更新语句
> app.use(require('connect-livereload')()); //michael热更新