$(document).ready(function () {
    const itemsPerPage = 3;  // Número de tarjetas por página
    const $projectCards = $('.project-card');
    const $pagination = $('#projects-pagination');
    let currentYear = 'all';
    let currentType = 'all';

    function filterAndShowPage(page = 1) {
        let filteredCards = $projectCards;

        // Filtrado por año
        if (currentYear !== 'all') {
            filteredCards = filteredCards.filter(`[data-year="${currentYear}"]`);
        }

        // Filtrado por tipo y destacado
        if (currentType !== 'all') {
            if (currentType === 'destacado') {
                filteredCards = filteredCards.filter(`[data-destacado="true"]`);
            } else {
                filteredCards = filteredCards.filter(`[data-type="${currentType}"]`);
            }
        }

        const totalItems = filteredCards.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);

        $pagination.empty();
        createPaginationButtons(totalPages);

        // Mostrar la página actual con la animación
        showPage(filteredCards, page, totalPages);
    }

    function showPage(filteredCards, page, totalPages) {
        $projectCards.hide();

        const start = (page - 1) * itemsPerPage;
        const end = page * itemsPerPage;

        filteredCards.slice(start, end).fadeIn(400);

        $('.pagination-button').removeClass('active');
        $pagination.find(`.pagination-button[data-page="${page}"]`).addClass('active');
    }

    function createPaginationButtons(totalPages) {
        for (let i = 1; i <= totalPages; i++) {
            $pagination.append(`<button class="pagination-button" data-page="${i}">${i}</button>`);
        }

        $('.pagination-button').on('click', function () {
            const page = $(this).data('page');
            filterAndShowPage(page);
        });
    }

    // Manejo de cambio en el filtro de año
    $('#pf-years-select').on('change', function () {
        currentYear = $(this).val();
        filterAndShowPage(1); // Reiniciar a la primera página
    });

    // Manejo de cambio en los filtros por tipo
    $('input[name="pf-type-input"]').on('change', function () {
        currentType = $(this).attr('id').replace('pf-type-', '');
        filterAndShowPage(1); // Reiniciar a la primera página
    });

    // Inicializar la visualización
    filterAndShowPage(1);
});
