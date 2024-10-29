// Cerrar submenús al hacer clic fuera del área
document.addEventListener('click', function(event) {
    var submenu = document.querySelectorAll('.main-nav ul li ul.submenu');
    submenu.forEach(function(menu) {
        if (!menu.parentElement.contains(event.target)) {
            menu.style.display = 'none'; // Oculta el submenú
        }
    });
});

// Mostrar el submenú al hacer hover
document.querySelectorAll('.main-nav ul li').forEach(function(item) {
    item.addEventListener('mouseenter', function() {
        var submenu = this.querySelector('ul.submenu');
        if (submenu) {
            submenu.style.display = 'block';
        }
    });
    item.addEventListener('mouseleave', function() {
        var submenu = this.querySelector('ul.submenu');
        if (submenu) {
            submenu.style.display = 'none';
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    
    const menuItems = document.querySelectorAll('.toggle-submenu');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const submenuId = item.getAttribute('data-submenu');
            const submenu = document.getElementById('submenu-' + submenuId);
            
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
            } else {
                document.querySelectorAll('.main-nav ul li .submenu').forEach(submenu => {
                    submenu.style.display = 'none';
                });
                submenu.style.display = 'block';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los submenús
    const submenus = document.querySelectorAll('.submenu');
    
    // Asegúrate de que todos los submenús estén ocultos por defecto
    submenus.forEach(function(submenu) {
      submenu.style.display = 'none'; // Oculta todos los submenús al cargar la página
    });
  
    // Añadir funcionalidad para abrir/cerrar el submenú correspondiente al hacer clic
    const menuItems = document.querySelectorAll('.has-submenu');
    menuItems.forEach(function(item) {
      item.addEventListener('click', function() {
        const submenu = item.querySelector('.submenu');
        if (submenu) {
          // Alterna entre mostrar y ocultar el submenú
          submenu.style.display = (submenu.style.display === 'none') ? 'block' : 'none';
        }
      });
    });
  });
  


document.addEventListener("DOMContentLoaded", function () {
   const popup = document.getElementById("infoPopup"); // Referencia al popup

    // Abrir/Cerrar sidebar al hacer clic en el menú hamburguesa
    menuBtn.addEventListener("click", function() {
        sidebar.classList.toggle("active"); // Muestra u oculta el sidebar
    });

    // Cerrar el sidebar y el popup al hacer clic fuera de ellos
    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !sidebar.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });

    document.getElementById("menu-btn").addEventListener("click", function() {
        document.getElementById("sidebar").classList.toggle("active");
    });
    

    // Slider de información
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



// Efecto de aparición gradual para elementos
document.addEventListener("DOMContentLoaded", function () {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -20px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});

// Botones de Logo y Video
function openTab(evt, tabName) {
    const tabContent = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = 'none';
    }
  
    const tabLinks = document.getElementsByClassName('tab-link');
    for (let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
  
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += " active";
  }
  
  // botones logo y video
  document.addEventListener("DOMContentLoaded", function() {
    const logoButton = document.querySelector(".tab-link[onclick*='logo']");
    const videoButton = document.querySelector(".tab-link[onclick*='video']");
    const logoSection = document.getElementById("logo");
    const videoSection = document.getElementById("video");

    document.addEventListener("click", function(event) {
        const isClickInsideLogo = logoSection.contains(event.target);
        const isClickInsideVideo = videoSection.contains(event.target);
        const isClickOnLogoButton = logoButton.contains(event.target);
        const isClickOnVideoButton = videoButton.contains(event.target);

        if (isClickOnLogoButton) {
            logoSection.classList.toggle("visible");
            videoSection.classList.remove("visible");
        } else if (isClickOnVideoButton) {
            videoSection.classList.toggle("visible");
            logoSection.classList.remove("visible");
        } else if (!isClickInsideLogo && !isClickInsideVideo) {
            logoSection.classList.remove("visible");
            videoSection.classList.remove("visible");
        }
    });

    // Asegúrate de que las secciones estén ocultas por defecto
    logoSection.classList.remove("visible");
    videoSection.classList.remove("visible");
});


// Asegúrate de que las secciones estén ocultas por defecto
document.addEventListener("DOMContentLoaded", function() {
    logoSection.classList.remove("visible");
    videoSection.classList.remove("visible");
});

  


// Sección Noticias y Cronograma
const btnNews = document.getElementById('btn-news');
const btnSchedule = document.getElementById('btn-schedule');
const newsSection = document.getElementById('news-section');
const scheduleSection = document.getElementById('schedule-section');

btnNews.addEventListener('click', function () {
    newsSection.classList.add('active-news');
    scheduleSection.classList.remove('active-schedule');
    btnNews.classList.add('active');
    btnSchedule.classList.remove('active');
});

btnSchedule.addEventListener('click', function () {
    newsSection.classList.remove('active-news');
    scheduleSection.classList.add('active-schedule');
    btnNews.classList.remove('active');
    btnSchedule.classList.add('active');
    $('.slick-slider').slick('setPosition');
});

// Inicializar el carrusel de Cronograma
$(document).ready(function(){
    $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev">Prev</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const closeModal = document.querySelector('.close');

    $('.schedule-item img').on('click', function() {
        modal.style.display = 'flex';
        modalImg.src = this.src;
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});

// Sección Contacto
document.getElementById("fecha-actual").innerHTML = new Date().toLocaleDateString();

// Mostrar el formulario emergente de contacto
document.getElementById('btn-contactenos').addEventListener('click', function() {
    var modal = document.getElementById("contactFormModal");
    modal.classList.remove("hidden");
    modal.style.display = "block";
});

// Cerrar el formulario emergente de contacto
document.querySelector(".close").addEventListener('click', function() {
    var modal = document.getElementById("contactFormModal");
    modal.classList.add("hidden");
    setTimeout(function() {
        modal.style.display = "none";
    }, 500);
});

// Cerrar el formulario emergente si se hace clic fuera
window.addEventListener('click', function(event) {
    var modal = document.getElementById("contactFormModal");
    if (event.target == modal) {
        modal.classList.add("hidden");
        setTimeout(function() {
            modal.style.display = "none";
        }, 500);
    }
});

// Volver arriba con animación
document.getElementById("btn-volver-arriba").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Funciones de Popup
window.onload = function() {
    document.getElementById("infoPopup").style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("infoPopup");
    popup.classList.add("hidden");
    setTimeout(function () {
        popup.style.display = "none";
    }, 500);
}

document.querySelector(".close-popup").addEventListener('click', closePopup);

window.onclick = function(event) {
    var popup = document.getElementById("infoPopup");
    var modal = document.getElementById("contactFormModal");
    
    // Cierra el popup si se hace clic fuera de él
    if (event.target == popup) {
        closePopup();
    }

    // Cierra el modal de contacto si se hace clic fuera de él
    if (event.target == modal) {
        modal.classList.add("hidden");
        setTimeout(function() {
            modal.style.display = "none";
        }, 500);
    }
};
