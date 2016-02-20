var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    if (req.isAuthenticated()) {
        res.render('dashboard', {title: 'Dashboard'});
    } else {
        res.render('login', {title: 'Login'});
    }
});

router.get('/register', function (req, res, next) {
    res.render('register', {title: 'Registration'});
});

router.get('/sim', function (req, res, next) {
    if (req.isAuthenticated()) {
        res.render('forms/sim', {title: 'Sim Panel'});
    } else {
        res.render('login');
    }
});


module.exports = router;
