var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

var bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.render('index');
});

var comments = require('./app/Comments.js');
app.use('/comments', comments());

app.listen(process.env.PORT || 3000);