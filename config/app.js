/*
	Comp-229 Web Application Development Group 3
	Chafanarosa Buy and Sell Used Products
	This Website will enable users to post and view advertisements for used		
	products
	
	Developers
	Fatimah Binti Yasin – 301193282
	Nandagopan Dilip – 301166925
	Chantelle Lawson – 301216199
	Ronald Jr Ombao – 301213219
	Santiago Sanchez Calle – 300648373
	
	Copyright All Rights Reserved
*/

var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
let passport = require('passport');
let cors = require('cors');

var usersRouter = require('../routes/users');
var adlistRouter = require('../routes/advertisement');

var app = express();

// Enable cors
app.use(cors());
app.options('*', cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Sets up passport
const passportConfig = require('../config/local')(passport)
app.use(passport.initialize());

//routes
app.use('/api/auth', usersRouter);
app.use('/api/advertisements', adlistRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404, "Endpoint not found."));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	// res.render('error');
	res.json(
		{
			success: false,
			message: err.message
		}
	)
});

module.exports = app;