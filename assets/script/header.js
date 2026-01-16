const header = document.getElementById('sticky-header');

window.addEventListener('scroll', () => {
    const scrollThreshold = window.innerHeight;

    if (window.scrollY >= scrollThreshold) {
        header.classList.remove('-translate-y-full');
    } else {
        header.classList.add('-translate-y-full');
    }
});