$(function () {
    $('.active__box-inner').click((event) => {
        $('.active').toggleClass('deactive'),
            $('.header').toggleClass('header__active')
    });
    $('.header__menu-btn').click((event) => {
        $('.active').removeClass('deactive'),
            $('.header').removeClass('header__active')
    });

    $('.image-popup').magnificPopup({
        type: 'image',
        closeBtnInside: false
    });
    document.querySelector('.filter__box-inner').addEventListener('click', ftab);
    document.querySelector('.clic-2').addEventListener('click', tabsTwo);
    document.querySelector('.click-3').addEventListener('click', tabsThree);
    document.querySelector('.click-4').addEventListener('click', tabsFour);

    function ftab(event) {
        var dataActive = event.target.getAttribute('data-active');
        var tabActive = document.getElementsByClassName('filter__box-btn');


        console.log(tabActive)
        console.log(dataActive);
        for (var x = 0; x < tabActive.length; x++) {
            if (dataActive == x) {
                console.log(x)
                console.log(dataActive)

                tabActive[x].classList.toggle('filter__box-btn--active')
            }

        }
    };

    function tabsTwo(event) {
        var dataActive = event.target.getAttribute('data-active');
        var tabActive = document.getElementsByClassName('click__btn-2');

        console.log(tabActive)
        console.log(dataActive);
        for (var x = 0; x < tabActive.length; x++) {
            if (dataActive == x) {
                console.log(x)
                console.log(dataActive)

                tabActive[x].classList.toggle('filter__box-btn--active')
            }

        }
    };

    function tabsThree(event) {
        var dataActive = event.target.getAttribute('data-active');
        var tabActive = document.getElementsByClassName('click__btn-3');

        console.log(tabActive)
        console.log(dataActive);
        for (var x = 0; x < tabActive.length; x++) {
            if (dataActive == x) {
                console.log(x)
                console.log(dataActive)

                tabActive[x].classList.toggle('filter__box-btn--active')
            }

        }
    };

    function tabsFour(event) {
        var dataActive = event.target.getAttribute('data-active');
        var tabActive = document.getElementsByClassName('click__btn-4');

        console.log(tabActive)
        console.log(dataActive);
        for (var x = 0; x < tabActive.length; x++) {
            if (dataActive == x) {
                console.log(x)
                console.log(dataActive)

                tabActive[x].classList.toggle('filter__box-btn--active')
            }

        }
    };

});