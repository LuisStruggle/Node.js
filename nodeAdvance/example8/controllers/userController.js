const user = require('../services/userService');

exports.userList = function (req, res, next) {
	user.getAllUser({}, function (err, docs) {
		if (!err) {
			if (docs) { //查询结果不为空，则查询成功
				return res.render('users/userList', {
					userList: docs
				});
			} else {
				return res.render('users/userList', {
					userList: null
				});
			}
		}
	});
}

exports.deleteUser = function (req, res, next) {
	user.deleteUser({
		_id: req.body.userId
	}, function (err, result) {
		if (!err) {
			if (result.result.ok && result.result.n == 1) {
				return res.send({
					state: 1
				});
			} else {
				return res.send({
					state: 0
				});
			}
		}
	});
}

exports.userManage = function (req, res, next) {
	var _body = req.body;
	if (_body._id == null || _body._id == "") { //添加
		user.insertUser(_body, function (err, result) {
			if (!err) {
				return res.redirect('userList');
			}
		});
	} else { //更新
		user.updateUser(_body, function (err, result) {
			if (!err) {
				return res.redirect('userList');
			}
		});
	}
}

exports.getUserById = function (req, res, next) {
	user.getUserById({
		_id: req.body.userId
	}, function (err, doc) {
		if (!err) {
			if (doc) { //查询结果不为空，则查询成功
				return res.send({
					user: doc,
					state: 1
				});
			} else {
				return res.send({
					state: 0
				});
			}
		}
	});
}
