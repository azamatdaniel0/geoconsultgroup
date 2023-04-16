
$(document).ready(function() {
    $("#news-slider").owlCarousel({
        loop:true,
        items : 4,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoplay:true,
        autoplayTimeout:1000,
        autoHeight: true,
    });
});