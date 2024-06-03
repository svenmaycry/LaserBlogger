const videoSwiper = new Swiper('.js-swiper-blogger-videos', {
  // Optional parameters
  observer: true,
  observeParents: true,
  loop: true,
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 20,
  speed: 600,
  parallax: true,
  preloadImages: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    autoHeight: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Брейкпоинты

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    992: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1268: {
      slidesPerView: 4,
    },
  }

});