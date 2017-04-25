var express = require('express')
var app = express()
var path = require('path')

app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/node_modules'))
app.use('/build', express.static(__dirname + '/build'))

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
