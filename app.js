
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

// Example route
// var user = require('./routes/user');
// Route for all the pages
var index = require('./routes/index');
var	register = require('./routes/register');
var	login =	require('./routes/login');
var	create = require('./routes/create');
var	hpconfig = require('./routes/hpconfig');
var	home = require('./routes/home');
var	input = require('./routes/input');
var	analytics = require('./routes/analytics');
var	logout = require('./routes/logout');
var	support = require('./routes/support');
var	equipments = require('./routes/equipments');
var	shop = require('./routes/shop');
var home2 = require('./routes/home2');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
// Example route
// app.get('/users', user.list);
app.get('/', index.view);
app.get('/register', register.view);
app.get('/login', login.view);
app.get('/create', create.view);
app.get('/hpconfig', hpconfig.view);
app.get('/home', home.view);
app.get('/home2', home2.view);
app.get('/input', input.view);
app.get('/analytics', analytics.view);
app.get('/logout', logout.view);
app.get('/support', support.view);
app.get('/equipments', equipments.view);
app.get('/shop', shop.view);

//app.post('/login',login.submit);
app.post('/register',register.submit);
app.post('/home', home.submit);
app.post('/home2',home2.submit);
app.post('/create',create.submit);
app.post('/input',input.submit);
app.post('/logout',logout.submit);
app.post('/hpconfig',hpconfig.submit);
app.post('/shop',shop.submit);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
