const carousel = document.querySelector('.carousel');
const carouselImages = document.querySelectorAll('.carousel-image');
const carouselControls = document.querySelectorAll('.carousel-control');
let currentIndex = 0;

// Set up click event listeners for carousel controls
carouselControls.forEach((control) => {
  control.addEventListener('click', () => {
    if (control.classList.contains('carousel-prev')) {
      currentIndex = (currentIndex === 0) ? carouselImages.length - 1 : currentIndex - 1;
    } else if (control.classList.contains('carousel-next')) {
      currentIndex = (currentIndex === carouselImages.length - 1) ? 0 : currentIndex + 1;
    }

    // Move the carousel to the new index
    const carouselWidth = carousel.offsetWidth;
    carousel.style.transform = `translateX(-${currentIndex * carouselWidth}px)`;

    // Update the active class on the carousel images
    carouselImages.forEach((image, index) => {
      if (index === currentIndex) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  });
});
