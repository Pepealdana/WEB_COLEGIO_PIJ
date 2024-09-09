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
        // Condición para que no se cierre si haces clic dentro del menú o del icono
        if (!menuToggle.contains(e.target) && !nav.contains(e.target) && !sidebar.contains(e.target)) {
            nav.classList.remove('active');
            menuToggle.classList.remove('open');
            sidebar.classList.remove('active'); // Asegurarse de que el sidebar también se oculta
        }
    });

    // Ocultar el sidebar al hacer clic en un enlace del menú
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            // Prevenir el comportamiento predeterminado del enlace
            event.preventDefault();

            // Eliminar la clase 'active' del sidebar para ocultarlo
            sidebar.classList.remove('active');
            hamburgerIcon.classList.remove('open'); // Cambia el estado del ícono también

            // Desplazar la página hacia la sección del enlace
            const target = link.getAttribute('href');
            if (target && target.startsWith('#')) {
                const targetElement = document.querySelector(target);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Asegurarse de que los submenús no queden abiertos al cerrar el menú principal en móviles
    submenuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.stopPropagation(); // Evitar que el evento burbujee hacia el menú principal
        });
    });
});

// Slider (esto es parte de otra sección)
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
// Función para mostrar/ocultar el sidebar
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}
// Seleccionar el icono del menú y el sidebar
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

// Función para alternar la visibilidad del sidebar
menuIcon.addEventListener('click', function() {
    sidebar.classList.toggle('active');
    menuIcon.classList.toggle('active');
});

// Función para cerrar el sidebar si se hace clic fuera de él
document.addEventListener('click', function(event) {
    if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
        sidebar.classList.remove('active');
        menuIcon.classList.remove('active');
    }
});
