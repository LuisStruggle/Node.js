// 读取数据库配置文件
var fs = require('fs');
var file = "./src/configure/database.json";
var config = JSON.parse(fs.readFileSync(file));

// mongodb连接
var Db = require('mongodb').Db,
	Server = require('mongodb').Server;

console.log("打开数据库连接！");

module.exports = new Db(config.database, new Server(config.host, config.port, {}));
