var aa = function () {
	var str = {
		_id: 1,
		name: 'liu',
		sex: 'nan'
	};

	console.log(str);

	delete str._id;

	console.log(str);
}

aa();
