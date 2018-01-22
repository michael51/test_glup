var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
	res.render('user', { title: 'Express' });
	console.info('x');
});

module.exports = router;
