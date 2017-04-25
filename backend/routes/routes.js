'use strict';
const user    = require('../controllers/user.js'),
      content = require('../controllers/content.js')

module.exports = (app, dirname) => {
  //INDEX
  app.get('/',(req, res)=>res.sendFile(dirname + '/index.html'));
  //USER
  app.get('/user/new',user.newUser);
  //CONTENT
  app.get('/content/new',content.newContent);
}
