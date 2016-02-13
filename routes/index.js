var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Sim Inventory Management' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});


module.exports = router;
