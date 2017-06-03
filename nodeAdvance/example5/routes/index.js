var express = require('express');
var router = express.Router();

// middleware specific to this router
// 私人订制的中间件（middleware）
router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now()); //打印出当前的请求时间
	next();
});

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {
		title: 'Express',
		test: '测试参数'
	});
});

//"/about/myPage.html"这个是url要写的路径，"res.render('about/myPage'"这个是实际文件在views下的路径
router.get('/about/myPage', function (req, res, next) {
	res.render('about/myPage', {
		title: 'index'
	});
});

module.exports = router;
