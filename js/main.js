$(function () {
    $('.active__box-inner').click((event) => {
        $('.active').toggleClass('deactive'),
            $('.header__box').toggleClass('header__active'),
            $('body').toggleClass('look')
    });
    $('.header__menu-btn').click((event) => {
        $('.active').removeClass('deactive'),
            $('.header__box').removeClass('header__active'),
            $('body').toggleClass('look')
    });

    $('.image-popup').magnificPopup({
        type: 'image',
        closeBtnInside: false
    });

});