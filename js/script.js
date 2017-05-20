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

 /*smoothScroll*/
   $('.smoothScroll').click(function (event) {/*функция прокрутки на блок страницы при клике по элементам меню */
    event.preventDefault();
    var href = $(this).attr('href');
    var target = $(href);
    var top = target.offset().top;
    $('html,body').animate({scrollTop: top}, 1000);
    return false;
  });
 /*smoothScroll*/


 google.maps.event.addDomListener(window, 'load', init);

function init() {

   var mapOptions = {

       zoom: 18,
       scrollwheel: false,

       center: new google.maps.LatLng(50.517441, 30.467305),

  //      styles: [{
  //              featureType: "administrative",
  //              elementType: "all",
  //              stylers: [{hue: "#ff0000"}]
  //          }, {
  //              featureType: "administrative",
  //              elementType: "labels.text.fill",
  //              stylers: [{color: "#444444"}]
  //          },
   //
  //          {
  //              featureType: "administrative.country",
  //              elementType: "geometry.fill",
  //              stylers: [{visibility: "off"}]
  //          }, {
  //              featureType: "administrative.country",
  //              elementType: "geometry.stroke",
  //              stylers: [{visibility: "simplified"}]
  //          }, {featureType: "landscape", elementType: "all", stylers: [{color: "#fffffa"}]}, {
  //              featureType: "poi",
  //              elementType: "all",
  //              stylers: [{visibility: "off"}]
  //          },
  //          {
  //              "featureType": "poi",
  //              "elementType": "all",
  //              "stylers": [
  //                  {
  //                      "visibility": "off"
  //                  }
  //              ]
  //          },
  //  //  {
  //  //             featureType: "poi",
  //  //             elementType: "labels.icon",
  //  //             stylers: [{visibility: "on"}, {color: "#dd2020"}]
  //  //         },
  //           {
  //              featureType: "road",
  //              elementType: "all",
  //              stylers: [{saturation: -100}, {lightness: 45}]
  //          }, {
  //              featureType: "road.highway",
  //              elementType: "all",
  //              stylers: [{visibility: "off"}]
  //          }, {
  //              featureType: "road.arterial",
  //              elementType: "labels.icon",
  //              stylers: [{visibility: "off"}]
  //          }, {
  //              featureType: "transit",
  //              elementType: "all",
  //              stylers: [{visibility: "off"}]
  //          }, {
  //              featureType: "transit.station.airport",
  //              elementType: "all",
  //              stylers: [{visibility: "off"}, {color: "#edd5d5"}]
  //          },
  //          {
  //            featureType: "poi.business",
  //             elementType: "labels",
  //             stylers: [{ visibility: "off" }]
  //          },
  //           {
  //              featureType: "water",
  //              elementType: "all",
  //              stylers: [{color: "#f5f5f5"}, {visibility: "on"}, {weight: "8.25"}]
  //          }]

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
  /*valid name input*/

  $('video').click(function(){
     this.play();
   });
