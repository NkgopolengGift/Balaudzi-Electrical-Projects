$(document).ready(function(){
    $("#hero-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000, // Time in milliseconds before switching to the next slide
        // autoplayHoverPause: true, // Pause on hover
        nav: true,
        // navText: ["<span class='owl-prev'>PREV</span>", "<span class='owl-next'>NEXT</span>"],
        // dots: true,
    });
});