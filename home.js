const carousel = document.querySelector('.carousel');
const carouselImages = document.querySelectorAll('.carousel-image');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');
let currentIndex = 0;

// Set up click event listener for previous arrow
carouselPrev.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = carouselImages.length - 1;
  }
  updateCarousel();
});

// Set up click event listener for next arrow
carouselNext.addEventListener('click', () => {
  if (currentIndex < carouselImages.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
});

// Update carousel based on current index
function updateCarousel() {
  carouselImages.forEach((image, index) => {
    if (index === currentIndex) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

// Initialize carousel with first image active
updateCarousel();
