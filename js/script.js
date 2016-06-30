$(document).ready(function () {
    
    /*$(".li-dropdown").mouseenter(function () {
        $(".second-dropdown").slideDown(600);
    });
    $(".li-dropdown").mouseleave(function () {
        $(".second-dropdown").slideUp(600);
    });*/
    //

    var owl = $("#owl-demo");

    owl.owlCarousel({
        items: 6, //10 items above 1000px browser width
        itemsDesktop: [1000, 5], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
        pagination: false,
        paginationNumbers: false,
    });
    owl.trigger('owl.play', 2000);
    // Custom Navigation Events
    $(".next").click(function () {
        owl.trigger('owl.next');
    })
    $(".prev").click(function () {
        owl.trigger('owl.prev');
    })
    $(".play").click(function () {
        owl.trigger('owl.play', 1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function () {
        owl.trigger('owl.stop');
    })

//    fisheyes carousel

    $(".slideItem").click(function () {
        if ($(this).hasClass("slideItem-left")) {
            var center = $(".slideItem-center");
            var right =$(".slideItem-right");
            center.attr({"class": "slideItem slideItem-right"});
            right.attr({"class": "slideItem slideItem-left"});
            $(this).attr({"class": "slideItem slideItem-center"});
        } else if ($(this).hasClass("slideItem-right")) {
            var center = $(".slideItem-center");
            var left =$(".slideItem-left");
            center.attr({"class": "slideItem slideItem-left"});
            left.attr({"class": "slideItem slideItem-right"});
            $(this).attr({"class": "slideItem slideItem-center"});
        }
    });

});