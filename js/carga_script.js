function validarFormulario(event) {
    const form = document.getElementById('registerForm');
    const inputs = form.querySelectorAll('input[required]');

    // Verifica si algún campo requerido está vacío
    for (let input of inputs) {
        if (input.value.trim() === '') {
            event.preventDefault(); // Evita que el formulario se envíe
            alert('-> Hay campos vacíos en el formulario! \n-> Por favor completar...');
            return; // Sale de la función
        }
    }

    // Si todos los campos requeridos están llenos, se muestra la alerta de éxito
    alert("-> CARGA REGISTRADA EXITOSAMENTE! \n-> Click en 'Aceptar' para dirigirse el registro de vehículos...");
}

