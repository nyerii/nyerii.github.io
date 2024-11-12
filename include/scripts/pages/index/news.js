$(document).ready(function() {
    // Cargar el archivo JSON
    $.getJSON("/include/content/prensa.json", function(data) {
        var $newsContainer = $(".news-container"); // Asegúrate de tener este contenedor en tu HTML

        // Iterar sobre cada registro del JSON
        $.each(data, function(index, item) {
            // Asignar los valores del JSON
            var link = item.link;
            var title = item.title_43;
            var date = formatDate(item.date);  // Formateo de la fecha
            var imgSrc = item.img;
            var imgAlt = item.alt_img;
            var cadena = item.cadena_h4;
            var cadenaLogo = item.logo_cadena;
            var cadenaLogoAlt = item.logo_cadena_alt;
            var customLogoClass = item.custom_logo_class ? `${item.custom_logo_class}` : '';
            var labelIcon = item.label_icon;
            var labelText = item.label;

            // Obtener el SVG correspondiente al label_icon
            var buttonSvg = getIconSvg(labelIcon);

            // Crear el HTML dinámicamente
            var newsCard = `
                <a class="news-card" href="${link}" target="_blank">
                    <div class="news-card-container">
                        <div class="news-card-image">
                            <div class="news-card-label">
                                ${buttonSvg}
                                <span>${labelText}</span>
                            </div>
                            <img src="${imgSrc}" alt="${imgAlt}">
                            <div class="news-card-content-img_container_float ${customLogoClass}">
                                <img src="${cadenaLogo}" alt="${cadenaLogoAlt}">
                            </div>
                        </div>
                        <div class="news-card-content">
                            <time datetime="${item.date}">${date}</time>
                            <h3>${title}</h3>
                            <div class="news-card-content_container">
                                <h4>${cadena}</h4>
                            </div>
                        </div>
                    </div>
                </a>
            `;

            // Agregar la tarjeta al contenedor
            $newsContainer.append(newsCard);
        });

        $('.news-container').slick({
            infinite: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            slidesToScroll: 1,
            variableWidth: true,
            prevArrow: $(".news-arrow-prev"),
            nextArrow: $(".news-arrow-next")
        });

    });

    // Función para formatear la fecha
    function formatDate(dateString) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', options); // Asegúrate de usar la configuración regional adecuada
    }

    // Función para devolver el SVG correspondiente al label_icon
    function getIconSvg(labelIcon) {
        var iconSvg;
        switch (labelIcon) {
            case 'tv':
                iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.6.0 by @fontawesome --><path d="M64 64l0 288 512 0 0-288L64 64zM0 64C0 28.7 28.7 0 64 0L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 416c-35.3 0-64-28.7-64-64L0 64zM128 448l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-384 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>`;
                break;
            case 'yt':
                iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>`;
                break;
            case 'blog':
                iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.7-9.2L288 94.6z"/></svg>`;
                break;                
            case 'nw':
                iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M96 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L80 480c-44.2 0-80-35.8-80-80L0 128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 272c0 8.8 7.2 16 16 16s16-7.2 16-16L96 96zm64 24l0 80c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24l0-80c0-13.3-10.7-24-24-24L184 96c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-256 0c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-256 0c-8.8 0-16 7.2-16 16z"/></svg>`;
                break;                
            default:
                iconSvg = "";
        }
        return iconSvg;
    }
});
