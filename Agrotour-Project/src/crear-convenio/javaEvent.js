const currentDate = new Date();
const reserveBeginning = document.getElementById("fecha");
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2,"0");
const day = currentDate.getDate().toString().padStart(2,"0");
const dateFormat = `${year}-${month}-${day}`;
reserveBeginning.setAttribute("min",dateFormat);



const radios = document.querySelectorAll('input[type="radio"]');
				const imagenComida = document.getElementById('imagenComida');
					function manejarCambio() {
				if (document.querySelector('input[id="comidas"]:checked')) {
                subirImagen.disabled = false;
                subirImagen.classList.remove('disabled');
				} else {
                subirImagen.disabled = true;
                subirImagen.classList.add('disabled');
				}
			}
				radios.forEach(radio => radio.addEventListener('change', manejarCambio));
				

document.getElementById("aceptar").addEventListener("change", function() {
					if (this.checked) {
					alert("Has aceptado los términos y condiciones");
					}
				});
				
				

document.getElementById('enviar').addEventListener('submit', function(event) {
				event.preventDefault(); // Evita que el formulario se envíe realmente
				alert('¡Tu convenio se creó con éxito!');
			});