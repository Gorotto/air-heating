$(document).ready(function () {

  $('.slider-for').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
    arrows: true,
   fade: true,
   asNavFor: '.slider-nav'
 });
 $('.slider-nav').slick({
   slidesToShow: 4,
   centerPadding: false,
   slidesToScroll: 1,
   asNavFor: '.slider-for',
   dots: false,
  arrows: false,
   centerMode: true,
   focusOnSelect: true
 });

 $('.advantages__wrap_slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1
});

 /*popup*/
 $('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}

	});
 /*popup*/




 google.maps.event.addDomListener(window, 'load', init);

function init() {

   var mapOptions = {

       zoom: 18,
       scrollwheel: false,

       center: new google.maps.LatLng(50.517441, 30.467305),



   };

   // Get the HTML DOM element that will contain your map
   // We are using a div with id="map" seen below in the <body>
   var mapElement = document.getElementById('map');

   // Create the Google Map using our element and options defined above
   var map = new google.maps.Map(mapElement, mapOptions);

 var marker = new google.maps.Marker({
  position: {lat: 50.517441, lng: 30.467305},
  map: map,
  title: 'Украина г. Киев ул.Полярная 8е'
});

}


  /*modal*/

      $('.open_modal').click( function(event){ // лoвим клик пo ссылки с id="go"
        event.preventDefault(); // выключaем стaндaртную рoль элементa
        $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
          function(){ // пoсле выпoлнения предъидущей aнимaции
            $('.modals')
              .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
              .animate({opacity: 1}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
        });
      });
      /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
      $('.modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
        $('.modals')
          .animate({opacity: 0}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
            function(){ // пoсле aнимaции
              $(this).css('display', 'none'); // делaем ему display: none;
              $('#overlay').fadeOut(400); // скрывaем пoдлoжку
            }
          );
      });

  /*modal*/


  /*clock*/
  var clock;

  $(document).ready(function() {
      clock = new FlipClock($('.my-clock'), 86400, {
          // clockFace: 'Counter',
          autoStart: true,
          countdown: true,
         language:'ru-ru',
          callbacks: {
              stop: function() {
                  clock.setTime(86400);
                  clock.start();
              }
          }
      });

  });
  /*clock*/


  /*fixed menu*/
  $(window).scroll(function () {

    if($(this).scrollTop() >= 250){
    $('.header').addClass('fixed_header');
    $('.fixed-button').addClass('fixed-button-block');

    }
    else {
    $('.header').removeClass('fixed_header');
    $('.fixed-button').removeClass('fixed-button-block');
    }
    });
  /*fixed menu*/
  /*img hover*/
  // $('img').hover(
  //   function(){
  //     var imgsrc = $(this).attr('src');
  //     $(this).attr('src',$(this).attr('data-full'));
  //     $(this).attr('data-full',imgsrc);
  //   },function(){
  //     var imgsrc = $(this).attr('src');
  //     $(this).attr('src',$(this).attr('data-full'));
  //     $(this).attr('data-full',imgsrc);
// });
  /*img hover*/

});

jQuery(function($){
  $(".phone-valid").mask("+3 8 (099) 999-99-99");
});

/*valid name input*/
$('.name-inp').on('keyup keypress', function(e) {
  if (e.keyCode == 8 || e.keyCode == 46) {}
  else
  {
  var letters='.()@zxcvbnmasdfghjklqwertyuiopQWERTYUIOPLKJHGFDSAZXCVBNM-АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя';
        return (letters.indexOf(String.fromCharCode(e.which))!=-1);
    }
});



/*NEW*/
/*hamburger*/
var windowWidth = $(window).width();

    $(".toggle_mnu").click(function () {
        $(".sandwich").toggleClass("active");
    });

    if (windowWidth < 769) {
        $(".header__menu ul a").click(function () {
            $(".header__menu").fadeOut(600);
            $(".sandwich").toggleClass("active").append("<span>");
        });

        $(".toggle_mnu").click(function () {
            if ($(".header__menu").is(":visible")) {
                $(".header__menu").fadeOut(600);
                $(".header__menu li a").removeClass("fadeInUp animated");
            } else {
                $(".header__menu").fadeIn(600);
                $(".header__menu li a").addClass("fadeInUp animated");
            }
        });
        $('.smoothScroll').click(function (event) {
          $('.header__menu').hide();
          $('.sandwich').removeClass('active');
        });
    }
    if (windowWidth < 679){
      $(document).on('click', function(e) {
        if (!$(e.target).closest(".header").length) {
          $('.header__menu').hide();
          $('.sandwich').removeClass('active');
        }
        e.stopPropagation();
      });
    }
/*hamburger*/


/*new*/
// $(document).on('click', function(e) {
//   if (!$(e.target).closest(".header").length) {
//     $('.header__menu').hide();
//     $('.sandwich').removeClass('active');
//   }
//   e.stopPropagation();
// });

$('.hexagon').hover(
  function(){
    var imgsrc = $(this).find('img').attr('src');
    $(this).find('img').attr('src',$(this).find('img').attr('data-full'));
    $(this).find('img').attr('data-full',imgsrc);
  },function(){
    var imgsrc = $(this).find('img').attr('src');
    $(this).find('img').attr('src',$(this).find('img').attr('data-full'));
    $(this).find('img').attr('data-full',imgsrc);
});

/*smoothScroll*/
  $('.smoothScroll').click(function (event) {/*функция прокрутки на блок страницы при клике по элементам меню */
   event.preventDefault();
   var href = $(this).attr('href');
   var target = $(href);
   var top = target.offset().top;
   $('html,body').animate({scrollTop: top}, 1000);

     $(".header__menu li").removeClass("active");
       $(this).closest("li").addClass("active");

   return false;
 });

 var lastId,
     topMenu = $(".header__menu"),
     topMenuHeight = topMenu.outerHeight()+15,
     // All list items
     menuItems = topMenu.find("a"),
     // Anchors corresponding to menu items
     scrollItems = menuItems.map(function(){
       var item = $($(this).attr("href"));
       if (item.length) { return item; }
     });
     $(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }
});
/*smoothScroll*/
/*new*/
