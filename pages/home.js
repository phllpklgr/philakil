const carousel = document.querySelector('.carousel');
const carouselImages = document.querySelectorAll('.carousel-image');
const carouselControls = document.querySelectorAll('.carousel-control');
let currentIndex = 0;

// Set up click event listeners for carousel controls
carouselControls.forEach((control) => {
  control.addEventListener('click', () => {
    if (control.classList.contains('carousel-prev')) {
      currentIndex = (currentIndex === 0) ? carouselImages.length