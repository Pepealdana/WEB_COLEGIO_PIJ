document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('.main-nav ul');
    const submenuItems = document.querySelectorAll('.submenu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const sidebar = document.getElementById('sidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar a');

    // Toggle del menú hamburguesa
    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('open'); // Cambia la apariencia del botón hamburguesa
    });

    // Cerrar el menú al hacer clic en cualquier lugar fuera del menú
    document.addEventListener('click', function (e) {
        if (!menuToggle.contains(e.target) && !nav.contains(e.target)) {
            nav.classList.remove('active');
            menuToggle.classList.remove('open');
        }
    });

    // Asegurarse de que los submenús no queden abiertos al cerrar el menú principal en móviles
    submenuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.stopPropagation(); // Evitar que el evento burbujee hacia el menú principal
        });
    });

    // Ocultar el sidebar al hacer clic en un enlace
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevenir que el enlace realice su comportamiento por defecto
            event.preventDefault();

            // Ocultar el sidebar
            sidebar.classList.remove('active');
            hamburgerIcon.classList.remove('open');

            // Si el enlace tiene un href con un ancla, realizar un scroll suave
            const target = link.getAttribute('href');
            if (target && target.startsWith('#')) {
                const targetElement = document.querySelector(target);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

// sección información (para el slider)
document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slider-item');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Mostrar la primera diapositiva
    showSlide(currentSlide);
});
