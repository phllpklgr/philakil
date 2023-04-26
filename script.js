function hideElements() {
    const elementsToHide = document.querySelectorAll('body > *:not(#page-text)');
    for (let i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = 'none';
    }
    const pageText = document.getElementById('page-text');
    pageText.style.animation = 'slide-out 1s ease-in-out forwards';
    setTimeout(() => {
        window.location.href = 'main.html';
    }, 1000);
}
