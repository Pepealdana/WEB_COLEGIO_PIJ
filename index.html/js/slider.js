document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slider-item');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const indicatorContainer = document.querySelector('.slider-indicators');
    let autoSlideInterval;
    const slideDuration = 5000; // 5 segundos

    // Crear los indicadores (puntos)
    slides.forEach((_, index) => {
        const indicator = document.createElement('span');
        indicator.classList.add('indicator');
        if (index === 0) indicator.classList.add('active');
        indicatorContainer.appendChild(indicator);
    });

    const indicators = document.querySelectorAll('.indicator');

    function updateIndicators(index) {
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        updateIndicators(index);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, slideDuration);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    nextButton.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        setTimeout(startAutoSlide, 10000); // Reinicia después de 10 segundos
    });

    prevButton.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        setTimeout(startAutoSlide, 10000); // Reinicia después de 10 segundos
    });

    // Pausar al pasar el mouse sobre el slider
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', stopAutoSlide);
    sliderContainer.addEventListener('mouseleave', () => {
        setTimeout(startAutoSlide, 1000); // Reinicia después de 1 segundo
    });

    // Iniciar la rotación automática de diapositivas
    startAutoSlide();

    // Mostrar la primera diapositiva
    showSlide(currentSlide);
});
