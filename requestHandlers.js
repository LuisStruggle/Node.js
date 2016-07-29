function start(response) {
	response.writeHead(200, {
		"Content-Type": "text/plain"
	});

	response.write('start');
	response.end();
}

function upload(response) {
	response.writeHead(200, {
		"Content-Type": "text/plain"
	});

	response.write('upload');
	response.end();
}

exports.start = start;
exports.upload = upload;