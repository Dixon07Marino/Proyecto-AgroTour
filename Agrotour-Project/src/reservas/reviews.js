document.addEventListener("DOMContentLoaded", function() {
    const reviewInput = document.querySelector('.review-input input');
    const submitButton = document.getElementById('submit-review');
    const reviewContainer = document.getElementById('review-container');
    const reviewsCountElement = document.querySelector('.reviews .reviews');

    submitButton.addEventListener('click', function() {
        const reviewText = reviewInput.value.trim();

        // Validar que el campo no esté vacío
        if (reviewText === "") {
            alert("Por favor, añade una reseña antes de enviar.");
            return;
        }

        // Obtener la fecha y hora actual
        const date = new Date();
        const formattedDate = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + " - " + date.toLocaleDateString();

        // Crear un nuevo elemento de reseña
        const newReview = document.createElement('div');
        newReview.classList.add('review');

        // "Permaneció del xx/xx/xxxx al xx/xx/xxxx"
        const stayDatesText = `Permaneció del ${date.toLocaleDateString()} ${formattedDate}`; 

        newReview.innerHTML = `
            <p class="review-date">${formattedDate}</p>
            <p class="review-author">Usuario Anónimo</p>
            <p class="review-stay">${stayDatesText}</p>
            <p class="review-text">${reviewText}</p>
        `;

        // Agregar la nueva reseña al contenedor de reseñas
        reviewContainer.appendChild(newReview);

        // Limpiar el campo de entrada de la reseña
        reviewInput.value = '';

        // Actualizar el número total de reseñas
        const currentReviewCount = reviewContainer.children.length; // Contar reseñas actuales
        const newReviewCountText = `(${currentReviewCount})`; // Actualizar a la nueva cuenta
        reviewsCountElement.textContent = newReviewCountText; // Actualizar el contador de reseñas
    });
});