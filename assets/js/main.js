document.addEventListener('DOMContentLoaded', () => {
  console.log('main.js loaded ✅');

  /* ================= HAMBURGER MENU ================= */
  const menuBtn = document.getElementById('hamburgerMenu');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('show');
    });

    
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => mobileMenu.classList.remove('show'));
    });
  }

  /* ================= TESTIMONIAL SWIPER ================= */
  const testimonialEl = document.querySelector('.testimonial-swiper');

  if (!testimonialEl) {
    console.warn('testimonial-swiper not found ❌');
    return;
  }

  if (!window.Swiper) {
    console.warn('Swiper not loaded ❌ (check script order in HTML)');
    return;
  }

  const nextBtn = testimonialEl.querySelector('.swiper-button-next');
  const prevBtn = testimonialEl.querySelector('.swiper-button-prev');
  const paginationEl = testimonialEl.querySelector('.swiper-pagination');

  new Swiper(testimonialEl, {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn,
    },
    pagination: paginationEl
      ? {
          el: paginationEl,
          clickable: true,
        }
      : undefined,
  });

  console.log('Swiper initialized ✅');
});
