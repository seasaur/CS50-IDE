var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

var n=1;
var logger = function (req, res, next) {
    // console.log('Received ${n} requests');
    n+=1;
    next();
};

app.use(logger);

app.get('/', function(req, res) {
    responseText += `Received ${req.requestTime}requests`
    res.send(responseText);
});

app.listen(3000);

module.exports = app;
