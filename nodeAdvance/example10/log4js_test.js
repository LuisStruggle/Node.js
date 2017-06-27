var log4js = require('log4js');

// 配置的意思，即在控制台输出，也在文件中输出
log4js.configure({
	appenders: [
		{
			type: 'console'
		},
		{
			type: 'file',
			filename: 'logs/cheese.log',
			maxLogSize: 2048, //文件大小
			backups: 3, // 备份3个文件
			category: '分类'
		}
  ],
	levels: {
		'分类': 'ERROR'
	}
});

// 配置里如果写了category，则getLogger一定要和category分类名一样，否则文件里的不生效。要么category里的不配置，那么文件里的分类以getLogger中的为准

var logger = log4js.getLogger('分类');

// 设置logger错误输出层级
// logger.setLevel('DEBUG');

logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Gouda.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');
