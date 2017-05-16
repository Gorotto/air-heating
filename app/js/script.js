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
});
