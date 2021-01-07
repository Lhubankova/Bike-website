$(function(){

    $('.feedback__slider').slick({
        arrows: false,
        dots: true
    });

    $('.mobile-menu').on('click', function () {
        $('.header__menu').fadeToggle();
        $(this).toggleClass('change')
    });

});