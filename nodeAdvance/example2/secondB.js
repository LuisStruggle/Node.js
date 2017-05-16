const path = require('path');
const a = require('./secondA');

a.getData(path.join(__dirname, 'test.txt'), function (err, data) {
	console.log(err, data);
});
