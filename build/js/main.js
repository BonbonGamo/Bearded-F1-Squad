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
})
