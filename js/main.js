jQuery(document).ready(function( $ ) {

    // counter
    $('.counter').countUp({
        'time': 2000,
        'delay': 10

    });

    // blog slider
    $('.blog-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    });

    // sponsore slider
    $('.sponsore-wrap').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        
    });

    // Swiprw js
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
          },
        loop:true,
    });

    // ASO js
    AOS.init({
        offset: 120,
        duration: 1000,
    });


});