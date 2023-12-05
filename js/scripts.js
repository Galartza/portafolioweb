document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar elementos del DOM
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");
    const btnCv = document.querySelector(".btn-cv");
    const header = document.getElementById('header');

    // Variable para realizar un seguimiento del desplazamiento
    let prevScrollPos = window.scrollY;

    // Función para manejar el desplazamiento y agregar animación a las secciones visibles
    function handleScroll(section) {
        var rect = section.getBoundingClientRect();
        var isInView = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;

        if (isInView) {
            section.classList.add('animate');
        }
    }

    // Función para abrir la navegación y desactivar el hover del botón CV
    function openNav() {
        nav.classList.add("visible");
        btnCv.classList.add("no-hover");
    }

    // Función para cerrar la navegación y reactivar el hover del botón CV
    function closeNav() {
        nav.classList.remove("visible");
        btnCv.classList.remove("no-hover");
    }

    // Eventos de clic para abrir, cerrar y cerrar la navegación al hacer clic en ella
    abrir.addEventListener('click', openNav);
    cerrar.addEventListener('click', closeNav);
    nav.addEventListener('click', closeNav);

    // Seleccionar secciones del DOM
    var sobreMiSection = document.querySelector('.contenedor-sobre-mi');
    var portafolioSection = document.querySelector('.contenedor-portafolio');
    var backEndSection = document.querySelector('.contendor-Back-end');
    var contactoSection = document.querySelector('.contacto-contacto');

    // Evento de desplazamiento para activar la animación de las secciones al hacer scroll
    window.addEventListener('scroll', function () {
        handleScroll(sobreMiSection);
        handleScroll(portafolioSection);
        handleScroll(backEndSection);
        handleScroll(contactoSection);
    });

    // Seleccionar más secciones del DOM
    var tecnologiasSection = document.querySelector('.tecnologias-conozco');
    var aside = document.querySelector('.aside-bg');
    var tituloPortafolio = document.querySelector('.titulo-proyectos');
    var tituloBack = document.querySelector('.titulo-back');

    // Evento de desplazamiento para activar la animación de otras secciones al hacer scroll
    window.addEventListener('scroll', function () {
        handleScroll(tecnologiasSection);
        handleScroll(aside);
        handleScroll(tituloPortafolio);
        handleScroll(tituloBack);
    });

    // Evento de desplazamiento para ocultar/mostrar la barra de navegación al hacer scroll
    window.addEventListener('scroll', function () {
        let currentScrollPos = window.scrollY;

        if (prevScrollPos > currentScrollPos) {
            header.classList.remove("header-move");
        } else {
            header.classList.add("header-move");
        }

        prevScrollPos = currentScrollPos;
    });
});







