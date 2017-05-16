const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	//url 库的 parse函数，它对 URL 地址进行解析，得到 URL 中的域名、请求路径等参数，其中第二参数在这里要设置true，否则它不会解析请求参数
	const query = url.parse(req.url, true).query;

	//打印出query，query是参数的json
	console.log(query);

	res.setHeader('Content-Type', 'text/plain');
	res.end(`Hello World from ${query['source']}\n`);
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
