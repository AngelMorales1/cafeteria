$(document).ready(function () {
    $('.menu a').each(function (index,obj) { 
        $(this).css({
            top:-100
        });
        $(this).animate({top:'0'},800 + (index*500) );
    });
    if ($(window).width()>= 800) {
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });
        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        },800 );
    };

    var acercaDe= $('#acerca-de').offset().top;
    var menu= $('#menu').offset().top;
    var galeria= $('#galeria').offset().top;
    var ubicacion= $('#ubicacion').offset().top;


    $('#btn-acerca-de').on('click', function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: acercaDe
        },500);
    })
    $('#btn-menu').on('click', function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: menu
        },500);
    })
    $('#btn-galeria').on('click', function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: galeria
        },500);
    })
    $('#btn-ubicacion').on('click', function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: ubicacion
        },500);
    })
});