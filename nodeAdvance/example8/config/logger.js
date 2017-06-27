var log4js = require('log4js');

// 配置的意思，即在控制台输出，也在文件中输出
log4js.configure({
	appenders: [
		{
			type: 'console'
		},
		{
			type: 'file',
			filename: 'logs/user.log',
			maxLogSize: 2048, //文件大小
			backups: 3, // 备份3个文件
			category: 'user'
		}
  ],
	levels: {
		'user': 'INFO'
	}
});


module.exports = log4js.getLogger('user');
