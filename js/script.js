document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});

const btnEs = document.getElementById('btn-es');
const btnEn = document.getElementById('btn-en');
const cardEs = document.querySelector('.about-card.lang-es');
const cardEn = document.querySelector('.about-card.lang-en');

btnEs.addEventListener('click', () => {
  cardEs.classList.add('active');
  cardEn.classList.remove('active');
});

btnEn.addEventListener('click', () => {
  cardEn.classList.add('active');
  cardEs.classList.remove('active');
});


// RESIZE
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

// Swiper para Lenguajes
const swiperLenguajes = new Swiper('.lenguajes-swiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.lenguajes-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.lenguajes-next',
    prevEl: '.lenguajes-prev',
  },
  breakpoints: {
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 5 }
  }
});

// Swiper para Herramientas
const swiperHerramientas = new Swiper('.herramientas-swiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.herramientas-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.herramientas-next',
    prevEl: '.herramientas-prev',
  },
  breakpoints: {
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 5 }
  }
});


