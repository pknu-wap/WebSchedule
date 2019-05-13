var express = require('express');
var router = express.Router();

var mysql_db = require('../mysql-db');

// module.exports = function(app, fs)
// {
//      app.get('/',function(req,res){
//          res.render('login', {
//              title: "sibal",
//              length: 5
//          })
//      });
// }

router.get('/loginForm', function (req, res, next) {
    res.render('login');
});

router.post('/login_process', function (req, res, next) {
    var userId = req.body['userId'];
    var userPw = req.body['userPw'];
    mysql_db.query('select * from test_user where id=? and pw=?',[userId,userPw], function (err, rows, fields){
        if (!err) {
            if (rows[0]!=undefined) {
                // alert('Login Success!');
                res.render('main')
            } else {
                // alert('sign in id pw!!');
                res.redirect('/');
            }
        } else {
            res.send('error : ' + err);
        }
    });
});




module.exports = router;
