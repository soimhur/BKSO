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

  var config = {
    easing: 'hustle',
    reset: true,
    delay: 'onload',
    vFactor: 0.90,
    mobile: true,
  }
  window.sr = new scrollReveal(config);

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