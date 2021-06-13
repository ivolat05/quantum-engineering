$(function () {
    $('.active__box-inner').click((event) => {
        $('.active').toggleClass('deactive'),
            $('.header').toggleClass('header__active')
    });
    $('.header__menu-btn').click((event) => {
        $('.active').removeClass('deactive'),
            $('.header').removeClass('header__active')
    });

    $('#choose-file').inputFileText({
        text: 'Прикрепить'
    });

});