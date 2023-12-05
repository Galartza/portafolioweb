document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");
    const btnCv = document.querySelector(".btn-cv");
    const header = document.getElementById('header');
    
        let prevScrollPos = window.scrollY;
    
        function handleScroll() {
            let currentScrollPos = window.scrollY;
    
            if (prevScrollPos > currentScrollPos) {
                // Hacer algo al hacer scroll hacia arriba
                header.classList.remove("header-move");
            } else {
                // Hacer algo al hacer scroll hacia abajo
                header.classList.add("header-move");
            }
    
            prevScrollPos = currentScrollPos;
        }
    


    abrir.addEventListener('click', () => {
        nav.classList.add("visible");
        btnCv.classList.add("no-hover");
    });

    cerrar.addEventListener('click', () => {
        nav.classList.remove("visible");     
        btnCv.classList.remove("no-hover");
    });
    nav.addEventListener('click', () => {
        nav.classList.remove("visible");     
        btnCv.classList.remove("no-hover");
    });


    var sobreMiSection = document.querySelector('.contenedor-sobre-mi');

    // Agregar un evento de desplazamiento (scroll)
    window.addEventListener('scroll', function() {
        // Verificar si el contenedor-sobre-mi está en el área visible
        var rect = sobreMiSection.getBoundingClientRect();
        var isInView = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;

        // Si está en el área visible, agregar la clase "animate"
        if (isInView) {
            sobreMiSection.classList.add('animate');
        }
    });
    
    window.addEventListener('scroll', handleScroll);
});






