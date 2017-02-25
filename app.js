var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
});

<<<<<<< HEAD
// uncomment after placing your favicon in /views
//app.use(favicon(path.join(__dirname, 'views', 'favicon.ico')));
=======
app.get('/survey', function (req, res) {
	res.render('survey', { title: 'Survey Title Here', message: 'Render message here' })
});

app.get('/main', function (req, res) {
	res.render('main', { title: 'Login or Sign Up', message: 'Render message here' })
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
>>>>>>> apooley
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


module.exports = app;
