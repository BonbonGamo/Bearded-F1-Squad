'use strict'
function content(){
  this.newContent = (req,res,next)=>{
    res.send(200);
  }
}
module.exports = new content;
