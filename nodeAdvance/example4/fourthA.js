// 注意最后一句 db.bind('article') 函数bind返回一个Collection对象，它在db对象上绑定一个article属性，指向刚才返回的对象，这句话在 mongoskin 中等同于 db.article = db.collection('article'); （ collection其实为原生mongodb驱动里面获取一个Collection的封装函数），调用完 bind 函数后我们就可以通过db.article来操作一系列的增删改查了。

var mongo = require('mongoskin');
var db = mongo.db("mongodb://localhost:27017/live", {
	native_parser: false
});
db.bind('article');

// 插入单条数据

db.article.insert({
	name: 'chapter5',
	content: 'Express.js 基础',
	createTime: new Date('2016/07/03')
}, function (err, ret) {
	console.log('单条插入', err, ret);
});
