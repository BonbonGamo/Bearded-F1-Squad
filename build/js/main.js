var carousel_images = [
  {name:'gal1',caption:'I am a racecar! ROAR',position:'',active:true},
  {name:'gal2',caption:'Team Ferrari',position:''},
  {name:'gal3',caption:'Moottoriurheilu.tv at Czhech republic',position:''},
  {name:'gal4',caption:'Clean car',position:''},
  {name:'gal5',caption:'@Hungaroring',position:''},
]
var guys = [
  {name:'Juha',img:'juha.png',message:''},
  {name:'Niko',img:'niko.png',message:''},
  {name:'Anssi',img:'anssi.png',message:''},
  {name:'Nico',img:'nico.png',message:''},
  {name:'Mika',img:'mika.png',message:''},
]

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
    if($(window).scrollTop() > 50){
      $('#nav-scrollspy').addClass('navbar-bg')
    }else{
      $('#nav-scrollspy').removeClass('navbar-bg')
    }
  })
  $('.custom-form').change(function(){
    if($('#msg-name').val().length < 5 && $('#msg-name').val().length > 0){
      $('#label-name').addClass('red-text');
      $('#label-name').removeClass('yellow-text');
      $('#label-name').text('Name too short!');
    }else{
      $('#label-name').removeClass('red-text');
      $('#label-name').addClass('yellow-text');
      $('#label-name').text('Name:');
    }
    if($('#msg-email').val().indexOf('@') < 0 && $('#msg-email').val().length > 0){
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
