var http = require("http");

// 获取请求路径信息
var url = require("url");

function start(route, handle) {

	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;

		route(pathname, handle, response);		
	}

	http.createServer(onRequest).listen(8888);

	console.log('Server has started.');
}

// 暴露这个服务，供其它地方调用
exports.start = start;