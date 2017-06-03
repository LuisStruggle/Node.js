exports.doSign = function (req, res) {
	var username = req.query.username;
	var email = req.query.email;
	res.send('恭喜' + username + '注册成功，你的邮箱为:' + email);
}

exports.Test = function (req, res) {
	res.render('about/myPage', {
		title: 'users'
	});
}

exports.login = function (req, res) {
	var _body = req.body;
	var username = _body.username;
	var password = _body.password;

	if (username === 'admin' && password === 'admin') {
		req.session.user = username;
		//此处加return是为了登录成功后，提前返回
		return res.send({
			code: 0
		});
	}
	res.send({
		code: 1,
		msg: '用户名或者密码错误'
	});
}

exports.admin = function (req, res) {
	var user = req.session.user;
	res.render('users/admin', {
		user: user,
		title: 'admin'
	});
}
