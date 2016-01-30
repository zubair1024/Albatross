var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    if (req.isAuthenticated()) {
        res.render('dashboard', {user: 'Zubair'});
    } else {
        res.render('login');
    }
});


module.exports = router;
