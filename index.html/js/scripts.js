document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar a');

    // Alternar el menú al hacer clic en el ícono de hamburguesa
    menuToggle.addEventListener('click', function () {
        sidebar.classList.toggle('open');
        menuToggle.classList.toggle('open');
    });

// Cerrar el menú al hacer clic fuera de él
document.addEventListener('click', function (e) {
        if (!menuToggle.contains(e.target) && !sidebar.contains(e.target)) {
            sidebar.classList.remove('open');
            menuToggle.classList.remove('open');
        }
    });

// Cerrar el menú al hacer clic en un enlace
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            sidebar.classList.remove('open');
            menuToggle.classList.remove('open');

            const target = link.getAttribute('href');
            if (target && target.startsWith('#')) {
                const targetElement = document.querySelector(target);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    document.querySelector('.btn-conoce-mas').addEventListener('click', function(e) {
        e.preventDefault();  // Prevenir el comportamiento por defecto del ancla
    
        const targetSection = document.querySelector('#seccion-informacion');
        
        // Añadir la clase para la animación
        targetSection.setAttribute('transition-style', 'in:wipe:up');
        
        // Desplazamiento suave hacia la sección
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
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

document.addEventListener("DOMContentLoaded", function () {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.2, /* Aparece cuando el 20% del elemento es visible */
        rootMargin: "0px 0px -20px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target); /* Solo lo observa una vez */
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const frases = [
        "Jesús me ama! con este solo pensamiento debemos olvidar todo lo demás”.",
        "Pero tú, Señor, lo puedes todo; sin duda tú puedes hacer también que te amemos, que te amemos con fuerza e intrepidez”.",
        "Aquí deberemos preguntar muchas veces a la Santísima Madre de Dios y a San José ¿Qué debemos hacer para alegrar al Divino Niño?”.",
        "Nuestra alegría ha de ser una alegría interior que por nada se deja perturbar si no que pasa por encima de todo, porque sabemos que poseemos el único tesoro que se puede tener”.",
        "Piensa cuantos años lleva el señor contigo, cuantas veces, si, cuantas veces entra el señor en tu corazón. ¿y que fruto ha sacado hasta la fecha de esta comunicación con el señor?”.",
        "Tendríamos que estar más agradecidos por todo lo que él señor ha hecho por nosotros. De esta manera nos dispondríamos a recibir mayores gracias y con más frecuencia”.",
        "Dichoso quien acoge con corazón fiel la gracia de Dios y no rechaza ninguno que llama la puerta, por pequeña que sea”.",
        "Si el señor ve en un alma la sed de santidad, entonces la bendice, la planifica con sus dones y la colma abundantemente con sus gracias”.",
        "Si vamos a él y suplicamos misericordia nos curará; porque como niño que es nos ama; un niño ama siempre”.",
        "El mismo señor y Dios que se nos dio a través de María entra en nuestro corazón por la sagrada comunión. ¿pero dónde está nuestro amor, nuestro aprecio, nuestra devoción, nuestro recogimiento continuo?”.",
        "El Señor nos regala en la Sagrada comunión su sangre, la sangre de su corazón. Que esta Sangre nos encienda en el amor verdadero a Él y un amor sincero al prójimo”.",
        "Si practicamos el amor al prójimo el Señor será misericordioso con nosotros y nos perdonará nuestros pecados”.",
        "El Señor quiere que nos tengamos un amor sincero y cordial, un amor que tenga sus raíces en El, que venda de Él y El conduzca”.",
        "Tendríamos que estar más agradecidos por todo lo que él señor ha hecho por nosotros. De esta manera nos dispondríamos a recibir mayores gracias y con más frecuencia”.",
        "Todo por Jesús, por Jesús Solo”."
    ];

    const randomIndex = Math.floor(Math.random() * frases.length);
    const randomQuote = frases[randomIndex];

    document.getElementById('random-quote').textContent = randomQuote;
});

// SECCIÓN NOTICIAS Y CRONOGRAMA

// Referencias a los elementos del DOM
const btnNews = document.getElementById('btn-news');
const btnSchedule = document.getElementById('btn-schedule');
const newsSection = document.getElementById('news-section');
const scheduleSection = document.getElementById('schedule-section');

// Alternar entre secciones Noticias y Cronograma
btnNews.addEventListener('click', function () {
    newsSection.classList.add('active-news');
    scheduleSection.classList.remove('active-schedule');

    btnNews.classList.add('active');
    btnSchedule.classList.remove('active');

    // Mostrar la sección de Noticias y ocultar Cronograma
    newsSection.classList.remove('hidden');
    scheduleSection.classList.add('hidden');
});

btnSchedule.addEventListener('click', function () {
    newsSection.classList.remove('active-news');
    scheduleSection.classList.add('active-schedule');

    btnNews.classList.remove('active');
    btnSchedule.classList.add('active');

    // Mostrar la sección de Cronograma y ocultar Noticias
    newsSection.classList.add('hidden');
    scheduleSection.classList.remove('hidden');

    // Forzar la actualización del carrusel de Cronograma
    $('.slick-slider').slick('setPosition');
});

// Carrusel de cronograma
$(document).ready(function(){
    // Inicializar el carrusel con Slick
    $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 3,  // Muestra 3 imágenes a la vez
        slidesToScroll: 1,  // Desplaza de 1 en 1 para más control
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

    // Modal para expandir la imagen al hacer clic
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

    // Cerrar el modal al hacer clic fuera de la imagen
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});

// Sección Contacto
document.getElementById("fecha-actual").innerHTML = new Date().toLocaleDateString();

// Mostrar el formulario emergente
document.getElementById('btn-contactenos').addEventListener('click', function() {
    var modal = document.getElementById("contactFormModal");
    modal.classList.remove("hidden");
    modal.style.display = "block";
    console.log("Formulario mostrado, comprobando visibilidad de la X.");
});

// Cerrar el formulario emergente al hacer clic en la "X"
document.querySelector(".close").addEventListener('click', function() {
    var modal = document.getElementById("contactFormModal");
    modal.classList.add("hidden");
    console.log("Formulario cerrado.");
    setTimeout(function() {
        modal.style.display = "none";
    }, 500);
});

var modal = document.getElementById("contactFormModal");
modal.addEventListener('show', function() {
    document.querySelector('.close').style.display = 'block'; // Asegúrate de que la 'X' se mantenga visible
});

// Cerrar el formulario si se hace clic fuera del formulario
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

// Mostrar el popup 
window.onload = function() {
    document.getElementById("infoPopup").style.display = "block";
}

// Cerrar popup al hacer clic en la 'X'
document.querySelector(".close-popup").addEventListener('click', function() {
    var popup = document.getElementById("infoPopup");
    popup.classList.add("hidden");
    setTimeout(function() {
        popup.style.display = "none";
    }, 500);
});

// Cerrar el popup si se hace clic fuera del contenido del popup
window.onclick = function(event) {
    var popup = document.getElementById("infoPopup");
    if (event.target == popup) {
        popup.classList.add("hidden");
        setTimeout(function() {
            popup.style.display = "none";
        }, 500);
    }
}