$(document).ready(function(){

  //main-visual
  var mv = new Swiper(".mv", {
    loop : true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      clickable: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

  });

  //new
  var nBox = new Swiper(".n-box", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
    slidesPerView: 3.5,
    spaceBetween: 30,
    loop:true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  //moreview
  var mw = new Swiper(".mw", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
    slidesPerView: 2.5,
    spaceBetween: 30,
    loop:true,
    clickable:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  //gift

  var gs = new Swiper(".gs", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });


});