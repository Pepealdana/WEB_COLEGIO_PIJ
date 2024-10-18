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
            entry.target.classList.add('madre-clara-visible');
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
        "Nuestra alegría ha de ser una alegría interior que por nada se deja perturbar si no que pasa por encima de todo, porque sabemos que poseemos el único tesoro que se puede tener”.",
        "Piensa cuantos años lleva el señor contigo, cuantas veces, si, cuantas veces entra el señor en tu corazón. ¿y que fruto ha sacado hasta la fecha de esta comunicación con el señor?”.",
        "Tendríamos que estar más agradecidos por todo lo que el señor ha hecho por nosotros. De esta manera nos dispondríamos a recibir mayores gracias y con más frecuencia.",
        "Dichoso quien acoge con corazón fiel la gracia de Dios y no rechaza ninguno que llama la puerta, por pequeña que sea”.",
        "Si el señor ve en un alma la sed de santidad, entonces la bendice, la planifica con sus dones y la colma abundantemente con sus gracias”.",
        "Si vamos a él y suplicamos misericordia nos curará; porque como niño que es nos ama; un niño ama siempre”.",
        "El mismo Señor y Dios que se nos dio a través de María entra en nuestro corazón por la sagrada comunión. ¿Pero dónde está nuestro amor, nuestro aprecio, nuestra devoción, nuestro recogimiento continuo?”.",
        "El Señor nos regala en la Sagrada comunión su sangre, la sangre de su corazón. Que esta sangre nos encienda en el amor verdadero a Él y un amor sincero al prójimo”.",
        "Si practicamos el amor al prójimo el Señor será misericordioso con nosotros y nos perdonará nuestros pecados”.",
        "El Señor quiere que nos tengamos un amor sincero y cordial, un amor que tenga sus raíces en Él, que venga de Él y Él conduzca”.",
        "Tendríamos que estar más agradecidos por todo lo que el Señor ha hecho por nosotros. De esta manera nos dispondríamos a recibir mayores gracias y con más frecuencia”.",
        "Todo por Jesús, por Jesús Solo.",
        "Todo por Jesús, por Jesús Solo."
    ];

    const randomIndex = Math.floor(Math.random() * frases.length);
    document.getElementById('madre-clara-frase').textContent = frases[randomIndex];
});
