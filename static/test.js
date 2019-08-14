(function($) {
    "use strict";
    
    $(".zoompro").elevateZoom({
    gallery: "gallery",
    galleryActiveClass: "active",
    zoomWindowWidth: 300,
    zoomWindowHeight: 100,
    scrollZoom: false,
    zoomType: "inner",
    cursor: "crosshair"
});

window.sr = ScrollReveal({
    duration: 800,
    reset: false
});
sr.reveal('.scroll-zoom');


})(jQuery);