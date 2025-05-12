// Toggle del menú hamburguesa
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// INICIO
document.addEventListener("DOMContentLoaded", () => {
  const contenidoInicioBtn = document.getElementById("contenidoInicioBtn");
  const carouselTrack = document.getElementById("carouselMenus");

  const modal = document.getElementById("myModal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");

  const closeModal = document.getElementById("closeModal");
  const closeCarousel = document.getElementById("closeCarousel");

  contenidoInicioBtn.addEventListener("click", () => {
    carouselTrack.classList.toggle("show");
  });

  // Abrir modal al hacer clic en imagen
  const images = document.querySelectorAll(".square img");
  images.forEach((img) => {
    img.loading = "lazy";
    img.onclick = function () {
      const square = this.closest(".square");
      const titleText = square.querySelector("p")?.innerText || "";
      const descriptionText = square.getAttribute("data-title") || "";

      modalTitle.textContent = titleText;
      modalDescription.textContent = descriptionText;
      modal.style.display = "flex";
    };
  });

  // Cerrar modal
  if (closeModal) {
    closeModal.onclick = () => {
      modal.style.display = "none";
    };

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  // Cerrar carrusel
  if (closeCarousel) {
    closeCarousel.onclick = () => {
      carouselTrack.classList.remove("show");
    };

    window.addEventListener("click", (event) => {
      if (event.target === carouselTrack) {
        carouselTrack.classList.remove("show");
      }
    });
  }
});









//SOBRE NOSOTROS









//CATALOGO

const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.querySelector(".close");

const images = document.querySelectorAll(".square img");
images.forEach(img => {
    img.loading = "lazy";
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;

        const square = this.closest('.square');
        modalTitle.textContent = square.getAttribute('data-title');
        modalDescription.textContent = square.getAttribute('data-content');
    };
});

closeModal.onclick = () => { modal.style.display = "none"; };
window.onclick = (event) => { if (event.target === modal) modal.style.display = "none"; };

const track = document.querySelector('.carousel-track');
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');
const dotsNav = document.querySelector('.carousel-dots');

let slideInterval;

function startSlideShow() {
    slideInterval = setInterval(() => {
        track.scrollBy({ left: 320, behavior: 'smooth' });
        updateDots();
    }, 5000);
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

nextButton.addEventListener('click', () => {
    track.scrollBy({ left: 320, behavior: 'smooth' });
    resetInterval();
});

prevButton.addEventListener('click', () => {
    track.scrollBy({ left: -320, behavior: 'smooth' });
    resetInterval();
});

function resetInterval() {
    stopSlideShow();
    startSlideShow();
}


function updateDots() {
    
}

track.addEventListener('mouseenter', stopSlideShow);
track.addEventListener('mouseleave', startSlideShow);


window.addEventListener('load', startSlideShow);








//CONTACTO