
// Swiper for review section

var swiper7 = new Swiper(".nexcent-swiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 2000, 
        disableOnInteraction: false, 
      },
    spaceBetween: 10,
    loop: true,
    speed:800,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 50,
      modifier: 2,
      slideShadows: true,
    },  
   
  });


  //animate css on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const animationClass = entry.target.getAttribute('data-animate');
        entry.target.classList.add(animationClass);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.animate-on-scroll').forEach(elem => {
    observer.observe(elem);
  });
