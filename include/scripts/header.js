function openNavbar() {
    $('.hidden-navbar').addClass('close');
    setTimeout(function() {
        $('.hidden-navbar-content').addClass('close');
    }, 200); 
}

function closeNavbar() {
    $('.hidden-navbar-content').removeClass('close');
    setTimeout(function() {
        $('.hidden-navbar').removeClass('close');    
    }, 200); 
}

$(document).ready(function() {
    var lastScrollTop = 0; // Variable para almacenar la posición anterior del scroll
    var threshold = window.innerHeight * 0.3; // 30% de la altura de la ventana

    $(window).scroll(function() {
        var currentScrollTop = $(this).scrollTop();

        // Verificar si la posición actual del scroll es mayor que el umbral (30% de la altura)
        if (currentScrollTop > threshold) {
            if (currentScrollTop > lastScrollTop) {
                // Si está scrolleando hacia abajo, ocultar el navbar
                $('header').removeClass('open');
            } else {
                // Si está scrolleando hacia arriba, mostrar el navbar
                $('header').addClass('open');
            }
        } else {
            // Si la posición está por encima del 30% de la altura de la pantalla, ocultar el navbar
            $('header').removeClass('open');
        }

        lastScrollTop = currentScrollTop; // Actualizar la posición del scroll
    });
});
