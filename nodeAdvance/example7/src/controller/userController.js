var ObjectID = require('mongodb').ObjectID;

exports.userList = function (req, res) {
	var mongodb = req.db;
	var errMsg = null;
	mongodb.open(function (err, db) {
		if (!err) {
			db.collection("user", {}, function (err, collection) {
				if (!err) {
					collection.find({}, function (err, cursor) {
						if (!err) {
							cursor.toArray(function (err, docs) {
								if (!err) {
									res.render('users/userList', {
										userList: docs
									});
								} else {
									errMsg = err;
								}
							});
						} else {
							errMsg = err;
						}
					});
				} else {
					errMsg = err;
				}
			});
		} else {
			errMsg = err;
		}
		if (errMsg) {
			console.log(errMsg);
			res.render('users/userList', {
				userList: null
			});
		}
		mongodb.close();
		console.log("关闭数据库连接！");
	});
}

exports.deleteUser = function (req, res) {
	var _body = req.body;
	var userId = _body.userId;
	var mongodb = req.db;
	var errMsg = null;
	mongodb.open(function (err, db) {
		if (!err) {
			db.collection("user", {}, function (err, collection) {
				if (!err) {
					collection.remove({
						'_id': new ObjectID(userId)
					}, function (err, result) {
						if (!err) {
							console.log('数据删除成功！');
							res.send({
								state: 1
							});
						} else {
							errMsg = err;
						}
					});
				} else {
					errMsg = err;
				}
			});
		} else {
			errMsg = err;
		}
		if (errMsg) {
			console.log(errMsg);
			res.send({
				state: 0
			});
		}
		mongodb.close();
		console.log("关闭数据库连接！");
	});
}

exports.userManage = function (req, res) {
	var _body = req.body;
	var mongodb = req.db;
	var errMsg = null;
	mongodb.open(function (err, db) {
		if (!err) {
			db.collection("user", {}, function (err, collection) {
				if (!err) {
					var userManageData = {};
					userManageData.name = _body.name;
					userManageData.sex = _body.sex;
					userManageData.age = _body.age;
					if (_body._id == null || _body._id == "") {
						collection.insert(userManageData, function (error, result) {
							if (!error) {
								console.log('数据添加成功！');
							} else {
								errMsg = err;
							}
						});
					} else {
						var whereData = {
							_id: new ObjectID(_body._id)
						}
						var updateData = {
							$set: userManageData
						};
						collection.update(whereData, updateData, function (error, result) {
							if (!error) {
								console.log('数据修改成功！');
							} else {
								errMsg = err;
							}
						});
					}
				} else {
					errMsg = err;
				}
			});
		} else {
			errMsg = err;
		}
		if (errMsg) {
			console.log(errMsg);
		}
		mongodb.close();
		console.log("关闭数据库连接！");
		res.redirect('userList');
	});
}

exports.getUserById = function (req, res) {
	var _body = req.body;
	var userId = _body.userId;
	var mongodb = req.db;
	var errMsg = null;
	mongodb.open(function (err, db) {
		if (!err) {
			db.collection("user", {}, function (err, collection) {
				if (!err) {
					collection.findOne({
						'_id': new ObjectID(userId)
					}, function (err, cursor) {
						if (!err) {
							res.send({
								user: cursor,
								state: 1
							});
						} else {
							errMsg = err;
						}
					});
				} else {
					errMsg = err;
				}
			});
		} else {
			errMsg = err;
		}
		if (errMsg) {
			console.log(errMsg);
			res.send({
				state: 0
			});
		}
		mongodb.close();
		console.log("关闭数据库连接！");
	});
}

// 三种导出都是正确的
//exports.userList = userList;
//module.exports.userList = userList;
