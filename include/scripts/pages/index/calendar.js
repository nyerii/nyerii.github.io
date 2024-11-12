$(document).ready(function() {
    // Cargar el archivo JSON
    

    // Función para formatear la fecha
    function formatDate(dateString) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', options); // Asegúrate de usar la configuración regional adecuada
    }
});
