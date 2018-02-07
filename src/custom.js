$(function() {
  //initialize swiper when document ready
  mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    speed: 900,
    spaceBetween: 100,
    autoplay: {
      delay: 2000,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });
  mySwiper.init();
});