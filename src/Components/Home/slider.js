var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 4,
    spaceBetween: 40,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      mousewheel: true,
      keyboard: true,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      380: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      550: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      750: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
