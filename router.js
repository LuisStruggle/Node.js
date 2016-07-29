function route(pathname, handle, response) {
	if (typeof handle[pathname] === 'function') {
		handle[pathname](response);
	} else {
		response.writeHead(200, {
			"Content-Type": "text/plain"
		});

		response.write('404');
		response.end();
	}
}

exports.route = route;