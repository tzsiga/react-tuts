var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.render('index');
});

app.listen(process.env.PORT || 3000);