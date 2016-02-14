var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    if (req.isAuthenticated()) {
        res.render('dashboard', {title: ''});
    } else {
        res.render('login', {title: 'Sim Inventory Management'});
    }
});

router.get('/register', function (req, res, next) {
    res.render('register', {title: 'Register'});
});

router.get('/sim', function (req, res, next) {
    if (req.isAuthenticated()) {
        res.render('forms/sim', {title: 'SIM Panel'});
    } else {
        res.render('login');
    }
});


module.exports = router;
