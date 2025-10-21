document.querySelectorAll('.swiper').forEach(swiperEl => {
  // 1. Crear la instancia
  const swiper = new Swiper(swiperEl, {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,          
    freeModeMomentum: true,  
    freeModeSticky: false,
    freeModeMomentumRatio: 2,
    loop: true,
    mousewheel: false,        // permite mover con la rueda del mouse
    autoplay: {
      delay: 3000,             // 3 segundos entre slides
      disableOnInteraction: true
    },
    autoHeight: true,          // ajusta la altura al contenido del slide activo
    pagination: {
      el: swiperEl.querySelector('.swiper-pagination'),
      clickable: true,
    },
    navigation: false,         // desactivamos navegación nativa
    scrollbar: {
      el: swiperEl.querySelector('.swiper-scrollbar'),
    },
  });

  // 2. Enganchar botones manualmente
  const nextBtn = swiperEl.querySelector('.swiper-button-next');
  const prevBtn = swiperEl.querySelector('.swiper-button-prev');

  if (nextBtn) {
    nextBtn.addEventListener('click', () => swiper.slideNext());
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', () => swiper.slidePrev());
  }

  // 3. Autoplay inteligente con IntersectionObserver
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