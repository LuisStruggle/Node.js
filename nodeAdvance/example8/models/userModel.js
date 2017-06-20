var mongoose = require('./dbConnection'),
	Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: {
		type: String
	}, //姓名
	sex: {
		type: String
	}, //性别
	age: {
		type: Number
	} //年龄
});

//导出模块
module.exports = mongoose.model('User', UserSchema, 'user'); //引用名 定义的表结构 表名
