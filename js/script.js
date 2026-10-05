// Validación del formulario
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formulario');
    const respuesta = document.getElementById('respuesta');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();

        if (nombre === '' || email === '') {
            respuesta.textContent = 'Completa todos los campos';
            respuesta.style.color = 'red';
            return;
        }

        respuesta.textContent = `¡Gracias ${nombre}, te contactaremos pronto!`;
        respuesta.style.color = 'green';
        form.reset();
    });
});