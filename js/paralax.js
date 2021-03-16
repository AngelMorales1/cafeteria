$(document).ready(function () {
    
    $(window).scroll(function () { 
        var windoww = $(window).width();

        if (windoww > 800) {
            var scroll = $(window).scrollTop();
    
            $('header .textos').css({
                'transform': 'translate(0px ,' + scroll / 2.5 + '%)'
            }); 
            $('header .textos').css({
                'transform': 'translate(0px ,' + scroll / 2.5 + '%)'
            }); 

            $('.acerca-de article').css({
                'transform': 'translate(0px , -' + scroll /11 + '%)'
            }); 
        }
    });
    
});