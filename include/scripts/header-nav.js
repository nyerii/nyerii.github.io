function updateContent() {
    var dps24Btn = document.getElementById('dps24-btn');

    if (window.innerWidth <= 831) {
      dps24Btn.textContent = 'DPS24';
    } else {
      // Restablece el contenido original si el ancho de la pantalla es mayor que 831px
      dps24Btn.textContent = 'Día del Pensamiento Scout';
    }
  }

  // Ejecuta la función al cargar la página y en cambios de tamaño de la pantalla
  window.addEventListener('load', updateContent);
  window.addEventListener('resize', updateContent);