$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('main').delay(350).css({'overflow':'visible'});
})

$(function() {
  //initialize swiper when document ready
  mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    fadeEffect: {
      crossFade: true
    },
    speed: 1000,
    spaceBetween: 10,
    autoplay: {
      delay: 3000,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });
  mySwiper.init();

  //set wow animation
  wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
  });

  wow.init();

});