const mongoose = require('mongoose');
const url = require('../config/db').url;

//数据库连接
mongoose.connect(url);

//数据库连接成功
mongoose.connection.on('connected', function () {
	console.log('Mongoose connection open to ' + url);
});

//数据库连接失败
mongoose.connection.on('error', function (err) {
	console.log('Mongoose connection error: ' + err);
});

//数据库断开连接
mongoose.connection.on('disconnected', function () {
	console.log('Mongoose connection disconnected');
});

//导出mongoose对象
module.exports = mongoose;
