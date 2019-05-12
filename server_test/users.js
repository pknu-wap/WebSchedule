var loginRouter = require('./routes/login');
var joinRouter = require('./routes/join');
var showAllDataRouter = require('./routes/show-all-data');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/', main);
app.use('/',loginRouter);
app.use('/join',joinRouter);
app.use('/show-all-data',showAllDataRouter);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
