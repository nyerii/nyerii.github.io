$(document).ready(function() {
    // Cargar el archivo JSON
    $.getJSON("/include/content/proyectos.json", function(data) {
        var $projectsContainer = $(".projects-highlight-container");

        // Iterar sobre cada registro del JSON
        $.each(data, function(index, item) {
            // Asignar los valores del JSON
            var link = item.link;
            var text = item.text;
            var title = item.title;
            var linkTarget = item.link_target;
            var span = item.span;
            var background = item.background;
            var backgroundAlt = item.background_alt;

            var projectCard = `
                <a href="${link}" class="projects-highlight-card">
                    <div class="projects-highlight-card-container">
                        <div class="projects-highlight-card-overlay"></div>
                        <div class="projects-highlight-card-background">
                            <img src="${background}" alt="${backgroundAlt}" loading="lazy">
                        </div>
                        <span>${span}</span>
                        <h3>${title}</h3>
                        <h4>${text}</h4>
                    </div>
                </a>
            `;

            // Agregar la tarjeta al contenedor
            $projectsContainer.append(projectCard);
        });

        // Inicializar el slick slider
        $('.projects-highlight-container').slick({
            infinite: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            slidesToScroll: 1,
            variableWidth: true,
            prevArrow: $(".projects-arrow-prev"),
            nextArrow: $(".projects-arrow-next")
        });
    });
});
