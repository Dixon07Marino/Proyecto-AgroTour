document.addEventListener("DOMContentLoaded", function() {
    const selectButtons = document.querySelectorAll('.package .select-button');
    const reserveButtonContainer = document.createElement('div');
    reserveButtonContainer.innerHTML = '<button id="reserve-button" style="display:none; background: rgb(200, 33, 50);">¡Reservar Ya!</button>';
    document.querySelector('.reservation-page').appendChild(reserveButtonContainer);
    
    const reserveButton = document.getElementById('reserve-button');
    let selectedPackage = null;

    // Función para manejar la selección de un paquete
    function selectPackage(packageDiv) {
        const description = packageDiv.querySelector('.description').textContent;
        const price = packageDiv.querySelector('.price').textContent;

        // Actualiza la información del paquete seleccionado
        selectedPackage = {
            description,
            price: price.replace(/\$/g, "").replace(/\./g, "").trim(),
        };

        reserveButton.style.display = 'inline-block'; // Muestra el botón de reservar
    }

    // Asociar eventos a los botones "Seleccionar"
    selectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const packageDiv = this.parentElement; // Obtiene el div del paquete
            selectPackage(packageDiv);
        });
    });

    reserveButton.addEventListener('click', function() {
        const startDate = new Date(document.getElementById('start-date').value);
        const endDate = new Date(document.getElementById('end-date').value);
        const guests = document.getElementById('guests').value;

        // Verificar si los campos están completos
        if (!startDate || !endDate || !guests) {
            alert('Por favor complete todos los campos: fecha de inicio, fecha de fin y cantidad de personas.');
            return;
        }
        
        const start = new Date(startDate);
        const end = new Date(endDate);

        // Validar fechas
        if (startDate >= endDate) {
            alert('La fecha de inicio debe ser anterior a la fecha de fin.');
            return;
        }

        const reservationDetails = `
            Detalles de la Reserva:
            Paquete: ${selectedPackage.description}
            Precio: $${selectedPackage.price}
            Fecha de Inicio: ${startDate.toLocaleDateString()}
            Fecha de Fin: ${endDate.toLocaleDateString()}
            Cantidad de Personas: ${guests}
        `;
        
        alert(reservationDetails);

        // Reiniciar selección
        selectedPackage = null; // Resetea el paquete seleccionado
        reserveButton.style.display = 'none'; // Oculta el botón de reservar

        // Limpiar los campos de fecha y número de huéspedes:
        document.getElementById('start-date').value = ''; 
        document.getElementById('end-date').value = '';
        document.getElementById('guests').value = ''; 
    });
});

console.log("hola cracks!!!");