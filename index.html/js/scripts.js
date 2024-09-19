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

    document.querySelector('.down-arrow').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.info-slider').scrollIntoView({
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
    const randomQuote = frases[randomIndex];

    document.getElementById('random-quote').textContent = randomQuote;
});
