document.querySelectorAll('.swiper').forEach(swiperEl => {
  // 1. Crear la instancia
  const swiper = new Swiper(swiperEl, {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 10,
    freeModeMomentumRatio: 2,
    loop: true,
    mousewheel: false,        // permite mover con la rueda del mouse
    autoplay: {
      delay: 3000,             // 3 segundos entre slides
      disableOnInteraction: true
    },         
    pagination: {
      el: swiperEl.querySelector('.swiper-pagination'),
      clickable: true,
    },
    scrollbar: {
      el: swiperEl.querySelector('.swiper-scrollbar'),
    },
  });

  // 2. Autoplay inteligente con IntersectionObserver
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        swiper.autoplay.start();   // arranca cuando entra en pantalla
      } else {
        swiper.autoplay.stop();    // se pausa cuando sale de vista
      }
    });
  }, { threshold: 0.3 }); // al menos 30% visible

  observer.observe(swiperEl);
});