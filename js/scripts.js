document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");
    const overlay = document.getElementById('overlay');

    abrir.addEventListener('click', () => {
        nav.classList.add("visible");
        overlay.style.display = 'block';
    });

    cerrar.addEventListener('click', () => {
        nav.classList.remove("visible");
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', (event) => {
        // Solo cierra el menú si se hace clic directamente en el overlay (evita que se cierre al hacer clic en elementos internos)
        if (event.target === overlay) {
            nav.classList.remove("visible");
            overlay.style.display = 'none';
        }
    });
});

