var express = require('express');
var router = express.Router();

var user = require('../controllers/userController');

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

router.get('/userList', user.userList);

router.post('/deleteUser', user.deleteUser);

router.post('/userManage', user.userManage);

router.post('/getUserById', user.getUserById);

module.exports = router;
