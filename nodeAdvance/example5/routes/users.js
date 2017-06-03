var express = require('express');
var router = express.Router();
var user = require('../controllers/user_controller'); // 相对路径

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

router.get('/myPage', function (req, res, next) {
	res.render('about/myPage', {
		title: 'users'
	});
});

router.get('/sign', function (req, res, next) {
	// res.render('users/sign', {}); //不带参数，这样写可以

	res.render('users/sign'); //不带参数，这样写也可以

});

//调用控制类中的方法
router.get('/do/sign', user.doSign);

//测试调用控制类中的方法
router.get('/Test', user.Test);

router.get('/login', function (req, res, next) {
	res.render('users/login');
});

router.post('/do/login', user.login);

router.get('/admin', user.admin);

module.exports = router;
