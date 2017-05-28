$(document).ready(function(){
  var date = new Date("Sep 1, 2017 00:00:01").getTime();
  var x setInterval(function(){
    var now = new Date().getTime();
    var dist = date - now;
    var timeObj = {
      days:Math.floor(dist / (1000 * 60 * 60 * 24)),
      hours:Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      mins:Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60)),
      secs:Math.floor((dist % (1000 * 60)) / 1000)
    }
    
    if(dist < 0){
      clearInterval(x);

    }
  },1000);
})


  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
