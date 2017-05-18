var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var postmark = require('postmark');

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/node_modules'))
app.use('/build', express.static(__dirname + '/build'))
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.post('/message',function(req,res){
  var data = req.body;
  console.log(data);
  res.send(200)
});

app.listen(port, function () {
  console.log('Example app listening on port: ', port)
})
