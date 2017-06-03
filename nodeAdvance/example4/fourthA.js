var MongoClient = require('mongodb').MongoClient,
	assert = require('assert');


// Connection URL
var url = 'mongodb://localhost:27017/myTest';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {

	if (db == null) {
		console.log(err);
	}

	// 断言
	assert.equal(null, err);

	console.log("成功连接mongodb数据库服务！");

	/*db.collection("products", function (err, collection) {
		collection.insert({
			"product_name": "Apple iPhone",
			"category": "mobiles"
		}, function (err, docs) {
			if (docs.result.ok == 1) {
				console.log("插入数据成功！");
			} else {
				console.log(err);
			}
			db.close();
		});
	});*/

	/*db.collection("products", {}, function (err, collection) {
		collection.count(function (err, count) {
			console.log("there are " + count + " documents in the collection");
			db.close();
		});
	});*/

	/*db.collection("products", {}, function (err, collection) {
		collection.find({
			"_id": 1
		}, function (err, cursor) {
			cursor.toArray(function (err, items) {
				console.log("count: " + items.length);
				for (var i = 0; i < items.length; i++) {
					console.log(items[i]);
				}
			});
		});
		db.close();
	});*/

	var zzId = 0;
	db.eval("testFunction('productid')", function (error, result) {
		if (error) {
			console.log(error);
		} else {
			zzId = result;
		}
	});

	// 延迟执行，防止上面的执行的太快，下面的获取不到值
	setTimeout(function () {
		db.collection("products", function (err, collection) {
			collection.insert({
				"_id": zzId,
				"product_name": "Apple iPhone",
				"category": "mobiles"
			}, function (err, docs) {
				if (docs.result.ok == 1) {
					console.log("插入数据成功！");
				} else {
					console.log(err);
				}
			});
			db.close();
		});
	}, 1000);
});
