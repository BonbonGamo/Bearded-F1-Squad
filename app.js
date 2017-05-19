var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var postmark = require('postmark');

var port = process.env.PORT || 3000;
var client = new postmark.Client("5ae2fc5d-f8e2-421f-b932-9e89414ece18");

app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/node_modules'))
app.use('/build', express.static(__dirname + '/build'))
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.post('/message',function(req,res){
  var data = req.body;

  client.sendEmail({
    "From": "info@beardedf1.com",
    "To": "info@beardedf1.com",
    "Subject": 'Message from: ' + data.name + ' - ' + data.email,
    "TextBody": data.msg
  });
  console.log('Message sent from page: SENDER:',data.email,' MESSAGE: ',data.msg);
  res.sendStatus(200)
});

app.listen(port, function () {
  console.log('Example app listening on port: ', port)
})
