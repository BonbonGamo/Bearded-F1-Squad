var express = require('express')
var app = express()
var path = require('path')

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/node_modules'))
app.use('/build', express.static(__dirname + '/build'))

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.listen(port, function () {
  console.log('Example app listening on port: ', port)
})
