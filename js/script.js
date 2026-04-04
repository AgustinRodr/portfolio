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


function createCarousel(imgId, images, prevClass, nextClass) {
  let index = 0;
  const imgElement = document.getElementById(imgId);

  function showImage(i) {
    imgElement.src = images[i];
  }

  document.querySelector(prevClass).addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
  });

  document.querySelector(nextClass).addEventListener("click", () => {
    index = (index + 1) % images.length;
    showImage(index);
  });
}

// Galaga
const galagaImages = [
  "images/projects/galaga_screenshoot1.png",
  "images/projects/galaga_screenshoot2.png",
  "images/projects/galaga_screenshoot3.png",
  "images/projects/galaga_screenshoot4.png",
  "images/projects/galaga_screenshoot5.png"
];
createCarousel("galaga-image", galagaImages, ".galaga-prev", ".galaga-next");

// Starbucks
const starbucksImages = [
  "images/projects/starbucks_dashboard1.png",
  "images/projects/starbucks_dashboard2.png",
  "images/projects/starbucks_dashboard3.png"
];
createCarousel("starbucks-image", starbucksImages, ".starbucks-prev", ".starbucks-next");

// VideoGameSales
const gameSalesImages = [
  "images/projects/videogames_dashboard1.png",
  "images/projects/videogames_dashboard2.png",
  "images/projects/videogames_dashboard3.png",
  "images/projects/videogames_dashboard4.png"
];
createCarousel("videogames-image", gameSalesImages, ".videogames-prev", ".videogames-next");