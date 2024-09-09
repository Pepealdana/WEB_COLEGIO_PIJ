document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('.main-nav ul');
    const submenuItems = document.querySelectorAll('.submenu');
    const sidebar = document.getElementById('sidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar a');

    // Toggle del menú hamburguesa (menu-toggle)
    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('open'); // Cambia la apariencia del botón menu-toggle
    });

    // Cerrar el menú al hacer clic fuera del menú
    document.addEventListener('click', function (e) {
        if (!menuToggle.contains(e.target) && !nav.contains(e.target) && !sidebar.contains(e.target)) {
            nav.classList.remove('active');
            menuToggle.classList.remove('open');
            sidebar.classList.remove('active');
        }
    });

    // Ocultar el sidebar al hacer clic en un enlace del menú
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            sidebar.classList.remove('active');
            menuToggle.classList.remove('open'); // Cambia el estado del ícono también

            const target = link.getAttribute('href');
            if (target && target.startsWith('#')) {
                const targetElement = document.querySelector(target);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Asegurarse de que los submenús no queden abiertos al cerrar el menú en móviles
    submenuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.stopPropagation();
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

    showSlide(currentSlide);
});

// Función para mostrar/ocultar el sidebar
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

// Seleccionar el icono del menú y el sidebar
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menu-icon');
    const sidebar = document.querySelector('.sidebar');

    // Función para alternar la visibilidad del sidebar
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('open');
    });

    // Función para cerrar el sidebar si se hace clic fuera de él
    document.addEventListener('click', (e) => {
        // Verifica si el clic fue fuera del menú o del ícono de menú
        if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
            mainNav.classList.remove('open'); // Cierra el menú si se hace clic fuera
        }
    });
    
    // Opcional: cerrar el menú al hacer clic en cualquier enlace del menú
    document.querySelectorAll('.main-nav a').forEach(item => {
        item.addEventListener('click', () => {
            mainNav.classList.remove('open');
        });
    });
});