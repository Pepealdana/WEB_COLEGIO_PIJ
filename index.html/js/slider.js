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


// botones logo y video
document.addEventListener('click', function(event) {
    const videoSection = document.querySelector('.video-section');
    const logoSection = document.querySelector('.logo-section');
    const logoButton = document.querySelector('.logo-btn');
    const videoButton = document.querySelector('.video-btn');
    
    // Detectar clic en botón de logo y video
    if (logoButton.contains(event.target)) {
      logoSection.classList.toggle('visible');
      videoSection.classList.remove('visible'); // Oculta el video si está visible
    } else if (videoButton.contains(event.target)) {
      videoSection.classList.toggle('visible');
      logoSection.classList.remove('visible'); // Oculta el logo si está visible
    } else {
      // Cerrar ambos si se hace clic fuera
      logoSection.classList.remove('visible');
      videoSection.classList.remove('visible');
    }
  });
  
  // Ejemplo de clases CSS para mostrar/ocultar video y logo
  .visible {
    display: block;
  }
  
  .logo-section, .video-section {
    display: none; /* Oculto por defecto */
  }
  
