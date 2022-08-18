$(document).ready(function () {
    // btnmenu
    let btnmenu = $('.btnmenu'),
        menufull = $('.menufull'),
        closemenufull = $('.menufull .close'),
        main = $('main'),
        overplay = $('.overplay-menu'),
        btnHambuger = $('.menu-fixed .btnhambuger')

    function openMenu(e) {
        e.stopPropagation();
        menufull.addClass('active')
        main.addClass('active')
        overplay.addClass('active')
    }
    btnmenu.on('click', function (e) {
        openMenu(e)
    })
    btnHambuger.on('click', function (e) {
        openMenu(e)
    })

    function closeMenu() {
        menufull.removeClass('active')
        main.removeClass('active')
        overplay.removeClass('active')
    }

    closemenufull.on('click', function () {
        closeMenu()
    })
    menufull.on('click', function (e) {
        e.stopPropagation()
    })

    $(document).on('click', function () {
        closeMenu()
    })
    $(window).resize(function () {
        closeMenu()
    })
    $(window).scroll(function () {
        closeMenu()
    })
    $(window).on('load', function () {
        $('.loading').removeClass('active')
    })
    // menu fixed
    let positionBtnMenu = $('.btnmenu').outerHeight() + $('.btnmenu').offset().top
    let menufixed = $('.menu-fixed')

    $(window).on('scroll', function () {
        let positionScroll = window.pageYOffset
        if (positionScroll > positionBtnMenu) {
            menufixed.addClass('active')
        } else {
            menufixed.removeClass('active')
        }
    })
    // back to top
    let btnbacktotop = $('footer .contact .backtotop')

    function backtotop(b) {
        b.click(function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        })
    }
    backtotop(btnbacktotop);
    // slider

    let $carousel = $('.slider__item-wrap')
    $carousel.flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        autoPlay: 2500,
        pageDots: false
    })

    $('.slider .slider__bottom-control .--prev').click(function () {
        $carousel.flickity('previous')
    })
    $('.slider .slider__bottom-control .--next').click(function () {
        $carousel.flickity('next')
    })
});