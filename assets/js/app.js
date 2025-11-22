// Funcionalidad de scroll suave hacia arriba
document.addEventListener('DOMContentLoaded', function() {
    const botonIrArriba = document.getElementById('btn-ir-arriba');

    botonIrArriba.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
