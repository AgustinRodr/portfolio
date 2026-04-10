document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  const toggleBtn = document.getElementById("cv-toggle");
  const menu = document.getElementById("cv-menu");

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  // Cerrar el menú si se hace click fuera
  document.addEventListener("click", (e) => {
    if (!toggleBtn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove("show");
    }
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


const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggleBtn.classList.toggle("active");
});


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

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const toast = document.getElementById("toast");

  // Lista blanca de TLD válidos
  const validTLDs = [
    "com","net","org","edu","gov","info","biz","io","app","dev",
    "es","ar","mx","cl","br","co","uk","us"
  ];

  function validarEmail(email) {
    const emailPattern = /^[^@\s]+@[^@\s]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) return false;

    const tld = email.split(".").pop().toLowerCase();
    return validTLDs.includes(tld);
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let valid = true;

    // limpiar mensajes previos
    document.querySelectorAll(".error").forEach(span => span.textContent = "");

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    // Validaciones (igual que antes)
    const namePattern = /^[a-zA-ZÀ-ÿ\s]+$/;
    if (name.length < 2) {
      document.getElementById("error-name").textContent = "El nombre debe tener al menos 2 caracteres.";
      valid = false;
    } else if (!namePattern.test(name)) {
      document.getElementById("error-name").textContent = "El nombre solo puede contener letras y espacios.";
      valid = false;
    }

    if (!validarEmail(email)) {
      document.getElementById("error-email").textContent = "Ingresa un correo electrónico válido (.com, .net, .org, .ar, etc.).";
      valid = false;
    }

    if (service === "") {
      document.getElementById("error-service").textContent = "Selecciona un servicio.";
      valid = false;
    }

    if (message.length < 10) {
      document.getElementById("error-message").textContent = "El mensaje debe tener al menos 10 caracteres.";
      valid = false;
    } else if (message.length > 500) {
      document.getElementById("error-message").textContent = "El mensaje no debe superar los 500 caracteres.";
      valid = false;
    }

    // Si hay errores, no enviar
    if (!valid) return;

    // Ejecuta hCaptcha invisible antes de enviar
    hcaptcha.execute();
  });
});

// Callback que hCaptcha llama si la verificación fue exitosa
// Callback que hCaptcha llama si la verificación fue exitosa
async function onCaptchaSuccess(token) {
  const form = document.getElementById("contactForm");
  const toast = document.getElementById("toast");

  const formData = new FormData(form);
  formData.append("h-captcha-response", token); // 👈 importante

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData, // usar la variable con el token
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 3000);
      form.reset();
    } else {
      document.getElementById("error-message").textContent =
        "Error al enviar el formulario. Intenta más tarde.";
    }
  } catch (error) {
    document.getElementById("error-message").textContent =
      "Error de conexión. Revisa tu internet.";
  }
}