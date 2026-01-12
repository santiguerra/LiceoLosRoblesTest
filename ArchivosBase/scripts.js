let currentSlide = 0;
const totalSlides = document.querySelectorAll('.carousel-item').length;

// Inicializar indicadores
function initDots() {
    const controlsContainer = document.getElementById('carouselControls');
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.onclick = () => goToSlide(i);
        controlsContainer.appendChild(dot);
    }
}

// Mostrar slide específico
function goToSlide(n) {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.carousel-dot');

    if (n >= totalSlides) currentSlide = 0;
    if (n < 0) currentSlide = totalSlides - 1;

    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    items[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Siguiente slide
function nextSlide() {
    currentSlide++;
    goToSlide(currentSlide);
}

// Slide anterior
function prevSlide() {
    currentSlide--;
    goToSlide(currentSlide);
}

// Auto-avance del carrusel cada 5 segundos
setInterval(() => {
    nextSlide();
}, 5000);

// Funcionalidad del menú hamburguesa
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú cuando se hace clic en un enlace
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Cerrar menú al hacer scroll
window.addEventListener('scroll', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
});

// Inicializar
initDots();
