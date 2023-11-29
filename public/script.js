function realizarTransaccion() {
    // Obtener datos del formulario
    const nombre = document.getElementById('nombre').value;
    const nombreCliente = document.getElementById('nombreCliente').value;
    const tipoVenta = document.getElementById('tipoVenta').value;

    // Validar datos (puedes agregar más validaciones según tus necesidades)

    // Enviar datos al servidor
    fetch('/realizarTransaccion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, nombreCliente, tipoVenta }),
    })
    .then(response => response.json())
    .then(data => {
        // Mostrar resultado en la interfaz
        document.getElementById('resultado').innerText = `Transacción realizada: ${data.resultado}`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
