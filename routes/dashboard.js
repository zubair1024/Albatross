var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    if (req.isAuthenticated()) {
        res.render('dashboard', {title:'Dashboard'});
    } else {
        res.render('login', { title: 'Login' });
    }
});


module.exports = router;
