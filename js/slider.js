 var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: { 
        delay: 6000,
        disableOnInteraction: false,
    },
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
        },
        800:{
            slidesPerView: 3,
        },
        1000:{
            slidesPerView: 3,
        },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });