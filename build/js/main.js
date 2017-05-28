var carousel_images = [
  {name:'gal1',caption:'I am a racecar! ROAR',position:'',active:true},
  {name:'gal2',caption:'Team Ferrari',position:''},
  {name:'gal3',caption:'Moottoriurheilu.tv at Czhech republic',position:''},
  {name:'gal4',caption:'Clean car',position:''},
  {name:'gal5',caption:'@Hungaroring',position:''},
  {name:'gal6',caption:'Lovely view',position:''},
  {name:'gal7',caption:'Nic/ko',position:''},
  {name:'gal8',caption:'The coolest place on earth',position:''},
  {name:'gal9',caption:'Taking a break',position:''},
  {name:'gal10',caption:'Enjoy the sunset',position:''},
    {name:'gal11',caption:'Glasses',position:''},
]
var guys = [
  {name:'Juha',img:'juha.png',message:''},
  {name:'Niko',img:'niko.png',message:''},
  {name:'Anssi',img:'anssi.png',message:''},
  {name:'Nico',img:'nico.png',message:''},
  {name:'Mika',img:'mika.png',message:''},
]

function validateEmail(email) {
  var re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return re.test(email);
}

function populateCarousell(arr){
  _.map(arr,function(obj){
    console.log('Append:',obj.name)
    var position = (!obj.postition)?'center':obj.position
    var active = (obj.active)?'active':'';
    $('#carousel').append(
      '<div class="carousel-ele item '+ active +'" style="background-image:url(/build/img/gallery/'+ obj.name +'.jpg);background-position:' + position + '">'+
        '<h3 class="carousel-cap">' + obj.caption + '</h3>'+
      '</div>'
    )
  })
}
$(document).ready(function(){
  populateCarousell(carousel_images);
  $(window).scroll(function(){
    if($(window).scrollTop() > 10){
      $('#nav-scrollspy').addClass('navbar-bg')
    }else{
      $('#nav-scrollspy').removeClass('navbar-bg')
    }
  })
  $('#msg-send').click(function(){
    if(!validateEmail($('#msg-email').val()) || $('#msg-name').val().length < 2 || $('#msg-message').val().length < 5){
      alert('Check the form and try again!')
    }else{
      var data = {
        name:$('#msg-name').val(),
        email:$('#msg-email').val(),
        msg:$('#msg-message').val()
      }
      $.ajax({
        method:'POST',
        url:'/message',
        data:data
      })
      .done(function(res){
        alert('Your message has been submitted!')
      })
      .fail(function(res){
        alert('Something went wrong try again!')
      })
    }
  });

  $('.custom-form').change(function(){
    if($('#msg-name').val().length < 2 && $('#msg-name').val().length > 0){
      $('#label-name').addClass('red-text');
      $('#label-name').removeClass('yellow-text');
      $('#label-name').text('Name too short!');
    }else{
      $('#label-name').removeClass('red-text');
      $('#label-name').addClass('yellow-text');
      $('#label-name').text('Name:');
    }
    if(!validateEmail($('#msg-email').val()) && $('#msg-email').val().length > 0){
      $('#label-email').addClass('red-text');
      $('#label-email').removeClass('yellow-text');
      $('#label-email').text('Not a email address!');
    }else{
      $('#label-email').removeClass('red-text');
      $('#label-email').addClass('yellow-text');
      $('#label-email').text('Email: ');
    }
    if($('#msg-message').val().length < 5 && $('#msg-message').val().length > 0){
      $('#label-message').addClass('red-text');
      $('#label-message').removeClass('yellow-text');
      $('#label-message').text('Write more!');
    }else{
      $('#label-message').removeClass('red-text');
      $('#label-message').addClass('yellow-text');
      $('#label-message').text('Message:');
    }
  })
})
