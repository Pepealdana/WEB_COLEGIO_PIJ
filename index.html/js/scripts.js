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

// Cargar frase aleatoria de Madre Clara
document.addEventListener("DOMContentLoaded", function () {
    const frases = [
        "Jesús me ama! con este solo pensamiento debemos olvidar todo lo demás”.",
        "Pero tú, Señor, lo puedes todo; sin duda tú puedes hacer también que te amemos, que te amemos con fuerza e intrepidez”.",
        "Aquí deberemos preguntar muchas veces a la Santísima Madre de Dios y a San José ¿Qué debemos hacer para alegrar al Divino Niño?”.",
        "Aquí deberemos preguntar muchas veces a la Santísima Madre de Dios y a San José ¿Qué debemos hacer para alegrar al Divino Niño?”.",
        "Nuestra alegría ha de ser una alegría interior que por nada se deja perturbar si no que pasa por encima de todo, porque sabemos que poseemos el único tesoro que se puede tener”.  ",
        "Piensa cuantos años lleva el señor contigo, cuantas veces, si, cuantas veces entra el señor en tu corazón. ¿y que fruto ha sacado hasta la fecha de esta comunicación con el señor?”.",
        "Tendríamos que estar más agradecidos por todo lo que él señor ha hecho por nosotros. De esta manera nos dispondríamos a recibir mayores gracias y con más frecuencia",
        "Dichoso quien acoge con corazón fiel la gracia de Dios y no rechaza ninguno que llama la puerta, por pequeña que sea”",
        "Si el señor ve en un alma la sed de santidad, entonces la bendice, la planifica con sus dones y la colma abundantemente con sus gracias”.",
        "Si vamos a él y suplicamos misericordia nos curara; porque como niño que es nos ama; un niño ama siempre”.",
        "El mismo señor y Dios que se nos dio a través de María entra en nuestro corazón por la sagrada comunión. ¿pero dónde está nuestro amor, nuestro aprecio, nuestra devoción, nuestro recogimiento continuo?”",
        "El Señor nos regala en la Sagrada comunión su sangre, la sangre de su corazón. Que esta Sangre nos encienda en el amor verdadero a Él y un amor sincero al prójimo.”",
        "Si practicamos el amor al prójimo el Señor será misericordioso con nosotros y nos perdonará nuestros pecados.” ",
        "El Señor quiere que nos tengamos un amor sincero y cordial, un amor que tenga sus raíces en El, que venda de Él y El conduzca.”",
        "Tendríamos que estar más agradecidos por todo lo que él señor ha hecho por nosotros. De esta manera nos dispondríamos a recibir mayores gracias y con más frecuencia.”",
        "Todo por Jesús, por Jesús Solo",
        "Todo por Jesús, por Jesús Solo"
    ];

    const randomIndex = Math.floor(Math.random() * frases.length);
    document.getElementById('random-quote').textContent = frases[randomIndex];
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
    if (event.target == popup) {
        closePopup();
    }
}
