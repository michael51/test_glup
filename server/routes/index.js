var express = require('express');
var router = express.Router();

let color = require('../libs/color');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
	console.info( color.red('测试') );
});

module.exports = router;