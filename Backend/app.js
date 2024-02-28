var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var connection  = require('./lib/db');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var lotsRouter = require('./routes/lots');
var spotsRouter = require('./routes/spots');
var reservationsRouter = require('./routes/reservations');


var app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
  cookie: { maxAge: 60000 },
  store: new session.MemoryStore,
  saveUninitialized: true,
  resave: 'true',
  secret: 'secret'
}))

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/lots', lotsRouter);
app.use('/spots', spotsRouter);
app.use('/reservations', reservationsRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
