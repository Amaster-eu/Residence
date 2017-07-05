(function($) {
    var winH, winW;

    function getWinProps() {
        winW = $(window).width();
        winH = $(window).height();
        return winW, winH;
    }

    $(document).ready(function() {
        getWinProps();
        $('.bxslider').bxSlider({
            pager: false
        });

        if (winW >= 1440) {
            setTimeout(function() {
                // $('.place .container').addClass('moved');
                // $('.place h3').addClass('fadeInRight');
                // $('.place .moved-up').addClass('fadeInUp');
            }, 3000);
        }


    });

    $(window).bind('resize orientationchange', function(e) {
        getWinProps();
        if (winW >= 1440) {
            setTimeout(function() {
                $('.place .container').addClass('moved');
                $('.place h3').addClass('fadeInRight');
                $('.place .moved-up').addClass('fadeInUp');
            }, 1000);
        }
        if (winW < 1440) {
            setTimeout(function() {
                $('.place .container').removeClass('moved');
                $('.place h3').removeClass('fadeInRight');
                $('.place .moved-up').removeClass('fadeInUp');
            }, 1000);
        }
    });

    /* ==========================================================================
       Menu Icon ≡/× 
       ========================================================================== */
    $('nav .menu-icon-wrapper').on('click', function() {
        $('.main-menu').toggleClass('visible');
        $('nav .menu-icon-trigger').toggleClass('close');
        if ($('.main-menu').hasClass('visible')) {
            setTimeout(function() {
                $('nav .menu-icon-trigger').addClass('rotate');
            }, 500);
            setTimeout(function() {
                $('nav .menu-icon-trigger').addClass('rotate45');
            }, 1200);
        } else {
            $('nav .menu-icon-trigger').removeClass('rotate').removeClass('rotate45');
        }
        return false;
    });

    /* ==========================================================================
       Event
       ========================================================================== */
    $('.icon-share').on('click', function() {
        $(this).toggleClass('click');
        if ($(this).hasClass('click')) {
            $('.social').addClass('active');
            $('.icon-save, .icon-print').css({ 'opacity': '0' });
            $('.icon-save, .icon-print').animate({
                height: 'toggle'
            }, 500);
        } else {
            $('.social').removeClass('active');
            $('.icon-save, .icon-print').animate({
                height: 'toggle'
            }, 500, function() {
                $('.icon-save, .icon-print').css({ 'opacity': '1' });
            });
        }
    });


}(jQuery));


