//文件流

const fs = require('fs');

exports.getData = function (path, callback) {
	fs.exists(path, statCallback);

	function statCallback(exists) {
		if (!exists) {
			return callback(true, path + '不存在');
		}

		const stream = fs.createReadStream(path);
		let data = '';

		//当前有新读入的数据
		stream.on('data', function (chunk) {
			data += chunk;
		});

		//当前的数据全都读取完毕
		stream.on('end', function () {
			return callback(false, data);
		});
	}
};
