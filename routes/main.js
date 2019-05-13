var express = require('express');
var router = express.Router();

var mysql_db = require('../mysql-db');



router.get('/', function (req, res, next) {
    res.render('main');
});

// router.get('/join', function (req, res, next) {
//     res.render('join');
// });
//
// router.get('login', function (req, res, next) {
//     res.render('login');
// });

module.exports = router;
