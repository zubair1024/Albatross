var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var sql = require('mssql');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var login = require('./routes/login');
var users = require('./routes/users');

var db = require('./services/db');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Playground for passport
 */
var passport = require('passport');
var passportLocal = require('passport-local');
var expressSession = require('express-session');

app.use(cookieParser());
app.use(expressSession({
    secret: process.env.SESSION_SECRET || 'secret',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new passportLocal.Strategy({
    usernameField: 'username',
    passwordField: 'password'
}, function (username, password, done) {
    //Use a real DB
    console.log(username);
    console.log(password);
    if (username === password) {
        done(null, {id: 123, name: username});
    } else {
        done(null, null);
    }
}));

passport.serializeUser(function (user, done) {
    console.log('serializeUser');
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    console.log('deserial');
    done({id: id, name: id});
});

app.post('/logon', passport.authenticate('local'), function (req, res, next) {
    if (req.isAuthenticated()) {
        res.send('Success');
    }
});

/**
 * Playground for passport
 */
app.use('/', routes);
app.use('/users', users);
app.use('/asset', users);
app.use('/login', login);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
