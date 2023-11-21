// Select the button element
const button = document.querySelector('button');

// Add a click event listener to the button
button.addEventListener('click', function() {
  // Redirect the page to the desired URL
  window.location.href = '/pages';
  
  // Hide the page content
  const pageContent = document.querySelector('.page-content');
  pageContent.style.opacity = '0';
  pageContent.style.pointerEvents = 'none';
});
