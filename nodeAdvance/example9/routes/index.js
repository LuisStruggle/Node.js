var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});

router.get('/bootstrapTest', function (req, res, next) {
	res.render('bootstrapTest', {
		title: 'bootstrapTest'
	});
});

module.exports = router;
