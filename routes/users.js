var express = require('express');
var passport = require('passport');
var router = express.Router();

sql = require('mssql');
db = require('../services/db');


router.get('/',function (request, res, next) {
    var dbObj = db.createConn();
    dbObj.conn.connect(function (err) {
        if (err) {
            console.log('error');
            console.log(err);
        } else {
            dbObj.request.query('select * from TBAsset', function (err, recordset) {
                if (err) {
                    console.log('error');
                    console.log(err);
                } else {
                    res.send(recordset);
                }
                dbObj.conn.close();
            });
        }
    });
});

module.exports = router;
