$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    new WOW().init();
    ///////// **search** /////////
    $('.mo-search-icon').click(function () {
        $(".search-form").fadeIn(400);
        $("body").addClass("overflow");
        $(".search-cont").addClass("search-in");
        $('.search-input').focus();
    });
    $('.search-form').click(function () {
        $("body").removeClass("overflow");
        $(".search-form").fadeOut(500);
        $(".search-cont").removeClass("search-in");
        $('.search-input').focusout();
    });
    $('.search-cont').click(function (e) {
        e.stopPropagation();
    });
    ///////// **main Slider** /////////
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        autoplay: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: false,
        nav: false,
    });

    ///////// **products Slider** /////////
    if ($(window).width() <= 991) {
        $(".productsGrid").addClass("productsSlider");
        $(".productsGrid").addClass("owl-carousel");
        $(".productsSlider").addClass("productsGrid");
    }
    $('.productsSlider').owlCarousel({
        margin: 22,
        autoplay: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 2,
                margin: 5,
            },
            992: {
                items: 3,
            },
        }
    });
    ///////// **footer** /////////
    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }

    ///////// **menu** /////////
    if ($(window).width() <= 991) {
        $(".setting-anchor").addClass("mo-accordion");
        $(".top-dropDown").addClass("mo-panel");
        $(".drop-li .nav-a").addClass("mo-accordion");
        $(".sub-ul").addClass("mo-panel");

        $('.mo-menu-icon').click(function () {
            $("nav").fadeIn(400);
            $(".mo-navbar").addClass("nav-in");
            $("body").toggleClass("overflow");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").toggleClass("overflow");
        });
        $('.mo-navbar').click(function (e) {
            e.stopPropagation();
        });
        $('.close-menu').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").toggleClass("overflow");
        });
    }

    ///////// **ACC** /////////
    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(500);
        } else {
            $(this).siblings().slideUp(500);
        }
        $(".mo-accordion").not(this).siblings().slideUp(500);
    })
});