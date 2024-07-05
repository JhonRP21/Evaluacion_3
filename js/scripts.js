function calcularTotal() {
    // Obtener valores seleccionados por el usuario
    let ruta = document.getElementById('ruta').value;
    let servicio = document.getElementById('servicio').value;
    let cantidad = parseInt(document.getElementById('cantidad').value);
    let pago = document.getElementById('pago').value;

    // Definir las tarifas y variaciones según la tabla
    let tarifa = 0;
    let variacion = 0;

    switch (ruta) {
        case 'lima-mala':
            tarifa = 20.00;
            variacion = 0;
            break;
        case 'lima-canete':
            tarifa = 25.00;
            variacion = 10;
            break;
        case 'lima-chincha':
            tarifa = 30.00;
            variacion = 15;
            break;
        case 'lima-pisco':
            tarifa = 40.00;
            break;
        default:
            tarifa = 0;
            break;
    }

    // Aplicar variación según el servicio
    if (servicio === 'ejecutivo') {
        tarifa *= (1 + variacion / 100);
    } else if (servicio === 'presidencial') {
        tarifa *= (1 + variacion / 100);
    }

    // Descuento si la cantidad de pasajes es mayor a 3
    if (cantidad > 3) {
        tarifa *= (cantidad - 1) / cantidad;
    }

    // Calcular total en Soles y Dólares
    let totalSoles = tarifa * cantidad;
    let totalDolares = totalSoles / 3.5;

    // Mostrar resultados en la página
    document.getElementById('totalSoles').textContent = totalSoles.toFixed(2);
    document.getElementById('totalDolares').textContent = totalDolares.toFixed(2);
}

function limpiarFormulario() {
    // Limpiar valores de los campos del formulario y resultados
    document.getElementById('formBoleta').reset();
    document.getElementById('totalSoles').textContent = '';
    document.getElementById('totalDolares').textContent = '';
}
