document.querySelectorAll('.swiper').forEach(swiperEl => {
  new Swiper(swiperEl, {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: swiperEl.querySelector('.swiper-pagination'),
      clickable: true,
    },
    navigation: {
      nextEl: swiperEl.querySelector('.swiper-button-next'),
      prevEl: swiperEl.querySelector('.swiper-button-prev'),
    },
    scrollbar: {
      el: swiperEl.querySelector('.swiper-scrollbar'),
    },
  });

});
