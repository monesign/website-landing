var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dbusers');
require("./models/User");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public/scss'));
// app.use("/styles", express.static(__dirname + "/styles"));
// app.use("/images", express.static(__dirname + "/images"));
// app.use("/fonts", express.static(__dirname + "/fonts"));
// app.use("/scss", express.static(__dirname + "/scss"));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error.ejs handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error.ejs handler
app.use(function(err, req, res, next) {
  // set locals, only providing error.ejs in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error.ejs page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
