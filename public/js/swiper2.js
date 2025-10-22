document.querySelectorAll('.brand section').forEach(sectionEl => {
  const thumbsEl = sectionEl.querySelector('.swiper[class*="-thumbs-swiper"]');
  const mainEl   = sectionEl.querySelector('.swiper[class*="-main-swiper"]');

  if (thumbsEl && mainEl) {
    // 1. Inicializamos el swiper de thumbnails
    const thumbsSwiper = new Swiper(thumbsEl, {
      spaceBetween: 10,
      slidesPerView: 'auto',
      freeMode: true,
      watchSlidesProgress: false,
      loop: false,
      autoplay: false,
    });

    // 2. Inicializamos el swiper principal y lo vinculamos con el de thumbs
    const mainSwiper = new Swiper(mainEl, {
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true
      },
      freeMode: {
      enabled: true,
      momentumBounceRatio: 3,
      },
      thumbs: {
        swiper: thumbsSwiper,
      },
    });

    // 3. Autoplay inteligente con IntersectionObserver
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          mainSwiper.autoplay.start();
        } else {
          mainSwiper.autoplay.stop();
        }
      });
    }, { threshold: 0.3 });

    observer.observe(mainEl);
  }
});