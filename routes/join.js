var express = require('express');
var router = express.Router();

var mysqlDB = require('../mysql-db');

router.get('/join_form', function (req, res, next) {
    res.render('join');
});

router.post('/join_process', function (req, res, next) {
    var userId = req.body['userId'];
    var userPw = req.body['userPw'];
    var userNick = req.body['userNick'];
    var userPwRe = req.body['userPwRe'];
    if (userPw == userPwRe) {
        mysqlDB.query('insert into test_user values(?,?,?)', [userId, userPw, userNick], function (err, rows, fields) {
            if (!err) {
                // res.send('success');
                res.render('main')
            } else {
                res.send('err : ' + err);
                res.redirect('/');
            }
        });
    }else{
        res.send('password not match!');
    }
});

module.exports = router;
