
function _toggleHeader() {
    $('._hidden-nav').toggleClass('open');
}

$(document).ready(function() {
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {$("._header").addClass("_header-top");} 
        else {$("._header").removeClass("_header-top");}
    });

});
  