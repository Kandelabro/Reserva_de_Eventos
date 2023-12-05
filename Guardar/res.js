let asientoSeleccionado = null;
    function reservarAsiento(asiento) {
        if (asiento === asientoSeleccionado) {
            // Cancelar la selección si se hace clic en el mismo asiento nuevamente
            asiento.classList.remove('reservado');
            asientoSeleccionado = null;
            document.getElementById('asiento').value = '';
        } else {
            // Remover la clase 'reservado' de cualquier asiento seleccionado anteriormente
            if (asientoSeleccionado !== null) {
                asientoSeleccionado.classList.remove('reservado');
            }
            // Seleccionar el nuevo asiento
            asiento.classList.add('reservado');
            asientoSeleccionado = asiento;
            // Actualizar el valor del campo de número de asiento en el formulario
            document.getElementById('asiento').value = asiento.textContent;
        }
    }
