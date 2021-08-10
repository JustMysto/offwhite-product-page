$(function () {
    $('.menu-toggle, .fa-times').on('click', function (){
        $('nav').toggleClass('active');
        $('.overlay').toggleClass('menu-open');
    })
})

$(function () {
    $('.overlay').on('click', function (){
        $('nav').removeClass('active');
        $(this).removeClass('menu-open');
    })
})

// GASP animations

gsap.fromTo('.product-info',
{x: '15rem', opacity: 0},
{x: 0, opacity: 1, ease: 'back.out(3)', delay:.2});

gsap.fromTo('.clr-2',
{x: '15rem', opacity: 0},
{x: 0, opacity: 1, ease: 'back.out(1.5)'});