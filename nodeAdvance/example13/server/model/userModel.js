const mongoose = require('./dbConnection');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: {
		type: String
	},
	sex: {
		type: String
	},
	age: {
		type: Number
	}
});

// mongoose.model的第一个参数（生成的表名是复数小写）
module.exports = mongoose.model('users', UserSchema);
