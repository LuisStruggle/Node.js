var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var index = require('./routes/index');
var users = require('./routes/users');
var authFilter = require('./filters/auth_filter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(cookieParser('myProject'));
app.use(express.static(path.join(__dirname, 'public')));

//该页面有中间件的先后顺序，这个要注意中间件的注册顺序
app.use(session({
	secret: 'myProject',
	name: 'project', //cookie name
	cookie: {
		maxAge: 1000 * 60 * 3
	}, //cookie存储三分钟
	resave: false,
	saveUninitialized: false,
	store: new MongoStore({
		url: 'mongodb://localhost:27017/myTest',
		ttl: 60 * 3 //服务端存储三分钟
	})
}));

//在下面两个路径之前进行拦截
app.use(authFilter);

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
