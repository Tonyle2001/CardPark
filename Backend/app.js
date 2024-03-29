var createError = require('http-errors');
var express = require('express');
var path = require('path');

var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

var mysql = require('mysql');
var connection  = require('./lib/db');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var reservationsRouter = require('./routes/reservations');
var parkingspotsRouter = require('./routes/parkingspots');
var vehiclesRouter = require('./routes/vehicles');



var cors = require('cors');

var app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


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
app.use('/reservations', reservationsRouter);
app.use('/parkingspots', parkingspotsRouter);
app.use('/vehicles', vehiclesRouter);


app.listen('80', function () {
  console.log('Server started');
  
}); 

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
