new Swiper('.image-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 1000,
        stopOnLastSlide:false,
        disableOnInteraction:false,
    },
    speed:2000,
    effect: 'fade',
    fadeEffect:{
        crossFade:true
    },
});
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('body').toggleClass('lock');
        $('.header__burger,.menu__list').toggleClass('active');
        $('.menu-item').click(function (event){
            $('body').removeClass('lock');
            $('.header__burger,.menu__list').removeClass('active');
        });
    });
    $('.icon').on('mouseover', function () {
        $(this).addClass('is-hover');
    }).on('mouseout', function () {
        $(this).removeClass('is-hover');
    })
});