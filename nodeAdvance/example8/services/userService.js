// 引用模块
var User = require('../models/userModel');

module.exports = {
	getAllUser: function (user, callBack) { //提供外部调用的查询接口
		User.find(user, callBack); //user为一个查询的对象，callback回调函数
	},

	deleteUser: function (user, callBack) {
		User.remove(user, callBack);
	},

	insertUser: function (user, callBack) {
		var user = new User({
			name: user.name,
			sex: user.sex,
			age: user.age
		});
		user.save(callBack);
	},

	getUserById: function (user, callBack) {
		User.findOne(user, callBack);
	},

	updateUser: function (user, callBack) {
		var wherestr = {
			'_id': user._id
		};

		delete user._id;

		var updatestr = user;

		User.update(wherestr, updatestr, callBack);
	}
};
