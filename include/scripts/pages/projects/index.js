$.getJSON('/include/content/proyectos_2.json', function (data) {
    var projectsContainer = $('.projects-container');
    $.each(data, function (index, project) {
        var card = $('<div>', { class: 'projects-card projects-card_' + (index + 1) });
        
        var imageDiv = $('<div>', { class: 'projects-card-image' }).append(
            $('<img>', { src: project.background, alt: project.background_alt })
        );
        
        var contentDiv = $('<div>', { class: 'projects-card-content' });
        
        var spanElement = $('<span>', { class: 'label_span' }).text(project.span);
        var titleElement = $('<h2>').text(project.title);
        var textElement = $('<p>').html(project.text);
        
        contentDiv.append(spanElement, titleElement, textElement);
        
        if (project.link && project.boton) {
            var linkDiv = $('<div>', { class: 'project-card-links' }).append(
                $('<a>', {
                    href: project.link,
                    class: 'a-link-default',
                    'aria-label': project.title,
                    rel: 'noopener noreferrer',
                    title: project.title
                }).append($('<span>').text(project.boton))
            );
            contentDiv.append(linkDiv);
        }

        card.append(imageDiv, contentDiv);
        projectsContainer.append(card);
    });
});
