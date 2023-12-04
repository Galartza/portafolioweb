document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");
    const overlay = document.getElementById('overlay');
    const btnCv = document.querySelector(".btn-cv");
    const header = document.getElementById('header');
    
        let prevScrollPos = window.scrollY || window.pageYOffset;
    
        function handleScroll() {
            let currentScrollPos = window.scrollY || window.pageYOffset;
    
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
        overlay.classList.add("visible");
        btnCv.classList.add("no-hover");
    });

    cerrar.addEventListener('click', () => {
        nav.classList.remove("visible");
        overlay.classList.remove("visible");
        btnCv.classList.remove("no-hover");
    });

    overlay.addEventListener('click', (event) => {
        // Solo cierra el menú si se hace clic directamente en el overlay (evita que se cierre al hacer clic en elementos internos)
        if (event.target === overlay) {
            nav.classList.remove("visible");
            overlay.classList.remove("visible");
            btnCv.classList.remove("no-hover");
        }
    });

    window.addEventListener('scroll', handleScroll);

});
