/*  Theme Name: Jaman - Responsive Bootstrap 4 One Page Portfolio Template
    Author: Saptavarana
    Version: 1.0.0
    Created:October 2018
    File Description:Main JS file of the template
*/

(function($) {

    'use strict';

    function initNavbarStickey() {
        $(window).on('scroll', function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                $(".sticky").addClass("stickyadd");
            } else {
                $(".sticky").removeClass("stickyadd");
            }
        });
    }

    function initSmoothLink() {
        $('.navbar-nav a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    }

    function initScrollspy() {
        $("#navbarCollapse").scrollspy({
            offset: 20
        });
    }

    function initTesti() {
        $("#owl_testi").owlCarousel({
            autoPlay: 7000,
            stopOnHover: true,
            navigation: false,
            paginationSpeed: 1000,
            goToFirstSpeed: 2000,
            singleItem: true,
            autoHeight: true,
        });
    }

    function initMfpvideo() {
        $('.img-zoom').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            }
        });
    }

    function initBacktoTop() {
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 100) {
                $('.back_top_angle_up').fadeIn();
            } else {
                $('.back_top_angle_up').fadeOut();
            }
        });
        $('.back_top_angle_up').on('click', function() {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
    }

    function initPortfolio() {
        $(window).on('load', function() {
            var $container = $('.work-filter');
            var $filter = $('#menu-filter');
            $container.isotope({
                filter: '*',
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });

            $filter.find('a').on("click", function() {
                var selector = $(this).attr('data-filter');
                $filter.find('a').removeClass('active');
                $(this).addClass('active');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        animationDuration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        });
    }

    function initcloselightbox() {
        $(".open-lightbox").on("click", function(e) {
            e.preventDefault();

            $(".nav-bg-box").fadeIn("normal", function() {
                $(this).addClass("active")
            });
            $(".close-lightbox").addClass("loaded");
        });

        $(".close-lightbox").on("click", function(e) {
            e.preventDefault();

            $(".nav-bg-box").delay(100).removeClass("active").delay(200).fadeOut("slow");
            $(".close-lightbox").removeClass("loaded");
        });

        $(".navbar-nav-jaman li a").on("click", function(e) {
            $(".close-lightbox").trigger("click");
        });
    }

    function init() {
        initNavbarStickey();
        initSmoothLink();
        initScrollspy();
        initTesti();
        initMfpvideo();
        initPortfolio();
        initBacktoTop();
        initcloselightbox();
    }
    init();

})(jQuery)