(function($) {
    var winH, winW,
        $body = $("body"),
        /* Sound */
        playerinstance,
        /* Icon Sound */
        allowPlaying,
        cycle,
        /* Slider */
        popActive = 0,
        currentSlide,
        slider1,
        slider2,
        slider3,
        slider4;

    function getWinProps() {
        winW = $(window).width();
        winH = $(window).height();
        // console.log('winW: '+winW+' winH: '+winH);
        return winW, winH;
    }

    /* ==========================================================================
       DOM
       ========================================================================== */
    $(document).ready(function() {
        getWinProps();    

        /* Panic of Height */
        if ( winW < 1024 && winH <= 945
            || winW < 1440 && winH <= 713
            || winW >= 1440 && winH <= 788 ) {
            $('h2').css('font-size','10vh');
        }
        if ( winH <= 705 ) {
            $('.catalog h4').hide();
        }
        if ( winH <= 760 ) {
            $('.txt-vertical').hide(); 
            $('.block-left').css('margin','10vh 0 0'); 
            $('.container').css('padding','10vh 0 0'); 
            $('.map').hide(); 
        }
        if ( winH <= 906 ) {
            $('.catalog h2').css({ 'font-size':'8vh', 'margin':'0 0 0 20px' });
            $('.catalog h4, explication').css({ 'margin-top':'4vh', 'line-height':'4vh' });
        }

        createFullpage();
            setTimeout(function() {
                $('.border, main').removeClass('unvisible');
            }, 1200); 
            setTimeout(function() {
                $('.home-video').addClass('not-blur');
            }, 3300); 
            setTimeout(function() {
                $('.home .intro, .home-video').addClass('moveUp');
            }, 3600);
            setTimeout(function() {
                $('.bg-video, .block-left').removeClass('unvisible');
            }, 1200); 
            setTimeout(function() {
                $('.language, .scroll').show();
            }, 4300);
            if (winW >= 1440) {
                allowPlaying = true;
                /* HTML5 background audio */
                setTimeout(function() {
                    playerinstance = bgaudioplayer({
                        audioid: 'bgplayer',
                        audiointerface: 'bgplayerui',
                        autoplay: false,
                        persistTimeLine: true,
                        volume: 0.8,
                        volumelevels: 15
                    });
                    playerinstance.playfile('play');
                    timer();
                }, 3000);
                $('#map-canvas').height(554);
            } else {
                allowPlaying = false;
                console.clear();
                console.log('Sound allow', allowPlaying);
                clearInterval(cycle);
                if (typeof playerinstance !== "undefined") {
                    playerinstance.playfile('pause');
                }
            }
        if ( winH <= 952 ) {
            $('#map-canvas').height('40vh');
        }
        createSlider4(); // Slide #4. Деловая Среда
    });

    $(window).bind('resize orientationchange', function(e) {
        getWinProps();
        /* Panic of Height */
        if ( winH <= 906 ) {   
            setTimeout(function() {
                window.setTimeout('location.reload()', 0);
                $.fn.fullpage.reBuild();
                $('#map-canvas').height($('.fp-tableCell').height() / 2);
            }, 1000);
        }
        if (popActive == 1) {
            createSlider1();
            $('footer').show();
        }
        if (popActive == 2) {
            createSlider2();
            setTimeout(function() {
                slider2.reloadSlider();
            }, 200);
        }
        if (popActive == 3) createSlider3();
    });


    /* ==========================================================================
       Main Slides Build
       ========================================================================== */
    function createFullpage() {
        $('main').fullpage({
            // Navigation
            anchors: ['home', 'silence', 'business', 'catalog', 'contact'],
            slidesNavigation: false,
            // Scrolling
            css3: true,
            loopBottom: true,
            scrollOverflow: true,
            loopHorizontal: true,
            //Accessibility
            keyboardinitializeolling: true,
            animateAnchor: true,
            recordHistory: true,
            // Design
            controlArrows: true,
            verticalCentered: true,
            // Custom selectors
            sectionSelector: '.section',
            slideSelector: '.slide',
            lazyLoading: true,
            // Events
            afterLoad: function() {
                console.log('fullpage: afterRender - Ok');
                $('.home-video').get(0).play();
            },
            onLeave: function(index, nextIndex, direction) {
                if (nextIndex == 1) {
                    $('.bg-video, body > .block-left').removeClass('move');
                }
                if (nextIndex == 2) {
                    // Slide-2
                    $('.bg-video, body > .block-left').addClass('move');
                    setTimeout(function() {
                        $('h4').addClass('fadeInUp');
                    }, 400);
                    setTimeout(function() {
                        $('h2 span:nth-child(1)').addClass('fadeInUp');
                    }, 400);
                    setTimeout(function() {
                        $('h2 span:nth-child(2)').addClass('fadeInUp');
                    }, 500);
                    setTimeout(function() {
                        $('h2 span:nth-child(3)').addClass('fadeInUp');
                    }, 600);
                } else {
                    // Slide-2
                    $('h2 span, h4').removeClass('fadeInUp');
                }
                if (nextIndex == 3) {
                    // Slide-3
                    $('.bg-video, body > .block-left').addClass('move');
                    setTimeout(function() {
                        $('h2 span:nth-child(1)').addClass('fadeInUp');
                    }, 400);
                    setTimeout(function() {
                        $('h2 span:nth-child(2)').addClass('fadeInUp');
                    }, 500);
                    setTimeout(function() {
                        $('aside').addClass('fadeInUp');
                    }, 600);
                } else {
                    // Slide-3
                    $('h2 span, aside').removeClass('fadeInUp');
                }
                if (nextIndex == 4) {
                    // Slide-4
                    $('.bg-video').addClass('move');
                    $('body > .block-left').removeClass('move');
                    $('.border').addClass('close');
                    setTimeout(function() {
                        $('h2 span:nth-child(1)').addClass('fadeInUp');
                    }, 400);
                    setTimeout(function() {
                        $('h2 span:nth-child(2)').addClass('fadeInUp');
                    }, 500);
                } else {
                    // Slide-4
                    $('.border').removeClass('close');
                    $('h2 span').removeClass('fadeInUp');
                }
                if (nextIndex == 5) {
                    // Slide-5
                    $('.bg-video').addClass('move');
                    $('body > .block-left').removeClass('move');
                    setTimeout(function() {
                        $('h2 span').addClass('fadeInUp');
                    }, 400);
                    if (winW < 1024) {
                        $('.contact').click(function() {
                            $('.acc-close').click();
                        });
                    }
                } else {
                    // Slide-5
                    setTimeout(function() {
                        $('.contact h2 span').removeClass('fadeInUp');
                    }, 500);
                }
            }
        });
    }

    /* ==========================================================================
       Create bxSlides in PopUp
       ========================================================================== */
    function createSlider1() {
        getWinProps();
        if (typeof slider1 !== "undefined") {
            slider1.destroySlider();
        }
        if (winW >= 1024) {
            slider1 = $('#popup-1 .bxslider').bxSlider({
                minSlides: 1,
                maxSlides: 5,
                slideWidth: 502,
                slideMargin: 20,
                pager: false,
                autoHover: true,
                autoStart: true,
                startSlide: 0
            });
        }
        if (winW < 1024) {
            slider1 = $('#popup-1 .bxslider').bxSlider({
                adaptiveHeight: true,
                pager: false
            });
        }
    }

    function createSlider2() {
        getWinProps();
        if (typeof slider2 !== "undefined") {
            slider2.destroySlider();
        }

        /* PopUp-2, Slides in 2 rows */
        $.fn.chunk = function(size) {
            var arr = [];
            for (var i = 0; i < this.length; i += size) {
                arr.push(this.slice(i, i + size));
            }
            return this.pushStack(arr, 'chunk', size);
        }

        if (winW >= 1440) {
            slider2 = $('#popup-2 .bxslider').bxSlider({
                minSlides: 1,
                maxSlides: 4,
                slideWidth: 270,
                slideMargin: 20,
                pager: false,
                autoHover: true,
                autoStart: true
            });
            $('#popup-2 .bxslider img').chunk(2).wrap('');
        }
        if (winW >= 1024 && winW < 1440) {
            slider2 = $('#popup-2 .bxslider').bxSlider({
                minSlides: 1,
                maxSlides: 3,
                slideWidth: 270,
                pager: false,
                autoHover: true,
                autoStart: true
            });
            $('#popup-2 .bxslider img').chunk(2).wrap('');
        }
        if (winW < 1024) {
            slider2 = $('#popup-2 .bxslider').bxSlider({
                minSlides: 2,
                maxSlides: 2,
                slideWidth: 270,
                slideMargin: 20,
                pager: false
            });
            $('#popup-2 .bxslider img').chunk(2).wrap('<div></div>');
        }
        slider2.reloadSlider();
    }

    function createSlider3() {
        getWinProps();
        if (typeof slider3 !== "undefined") {
            slider3.destroySlider();
        }
        if (winW >= 1024) {
            slider3 = $('#popup-3 .bxslider').bxSlider({
                minSlides: 1,
                maxSlides: 3,
                slideWidth: 500,
                slideMargin: 20,
                pager: false,
                autoHover: true,
                autoStart: true,
                startSlide: 0
            });
        }
        if (winW < 1024) {
            slider3 = $('#popup-3 .bxslider').bxSlider({
                adaptiveHeight: true,
                pager: false
            });
        }
    }

    function createSlider4() {
        getWinProps();
        if (typeof slider4 !== "undefined") {
            slider4.destroySlider();
        }
        if (winW >= 1024) {
            slider4 = $('.catalog .bxslider').bxSlider({
                minSlides: 1,
                maxSlides: 5,
                slideWidth: 500,
                slideMargin: 20,
                pager: false,
                autoHover: true,
                autoStart: true,
                startSlide: 0
            });
        }
        if (winW < 1024) {
            slider4 = $('.catalog .bxslider').bxSlider({
                maxSlides: 2,
                slideWidth: 660,
                slideMargin: 20,
                pager: false
            });
        }
    }



    /* ==========================================================================
       Icon Sound
       ========================================================================== */
    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    }

    function timer() {
        cycle = setInterval(function() {
            var x = randomInteger(5, 15);
            var y = randomInteger(5, 15);
            var z = randomInteger(5, 15);
            $('#soundA').css({ 'height': x });
            $('#soundB').css({ 'height': y });
            $('#soundC').css({ 'height': z });
            console.log('Sound allow', allowPlaying);
        }, 100);
    }

    /* ==========================================================================
       Menu Icon ≡/× 
       ========================================================================== */
    $('nav .menu-icon-wrapper').hover(
        function() {
            $(this).addClass("hover");
        },
        function() {
            $(this).removeClass("hover");
        }
    );

    $('nav .menu-icon-wrapper').on('click', function(e) {
        e.preventDefault();
        $('.main-menu').toggleClass('visible');
        $('nav .menu-icon-trigger').toggleClass('close');
        if ($('.main-menu').hasClass('visible')) {
            setTimeout(function() {
                $('nav .menu-icon-trigger').addClass('rotate');
            }, 500);
            setTimeout(function() {
                $('nav .menu-icon-trigger').addClass('rotate45');
            }, 800);
        } else {
            $('nav .menu-icon-trigger').removeClass('rotate').removeClass('rotate45');
        }
        return false;
    });

    /* ==========================================================================
       Event
       ========================================================================== */
    /* HTML5 background audio */
    $('.play').on('click', function() {
        allowPlaying = !allowPlaying;
        if (!allowPlaying) {
            clearInterval(cycle);
        } else {
            timer();
        }
    });
    /* Scroll: Up/Down */
    $('.moveToHome').click(function(e) {
        e.preventDefault();
        $.fn.fullpage.moveTo(1);
    });
    $('.scroll, .moveSectionDown').click(function(e) {
        e.preventDefault();
        $.fn.fullpage.moveSectionDown();
    });

    /* language */
    $('.language li').hover(
        function() {
            $('.language li a').removeClass('strike');
            if ( $(this).hasClass('active')) {
                $('.language li a').removeClass('strike');
            } else {
                $('.language').find('.active').find('a').addClass('strike');
            }
            return false;
        },
        function() {
            $('.language li a').removeClass('strike');
            return false;
        }
    );
    $('.language li').click(function() {
        $('.language li').removeClass('active');
        $('.language a').removeClass("strike");
        $(this).addClass('active');
        return false;
    });    

    /* Main Navigation -> Click */
    $('#pop1').on("click", function() {
        openPopup(1);
        $('nav .menu-icon-wrapper').click();
    });
    $('#pop2').on("click", function() {
        openPopup(2);
        $('nav .menu-icon-wrapper').click();
    });
    $('#pop3').on("click", function() {
        openPopup(3);
        $('nav .menu-icon-wrapper').click();
    });
    $('#pop4').on("click", function() {
        openPopup(4);
        $('nav .menu-icon-wrapper').click();
    });

    /* Slide-3 Aside -> Click */
    $('.business aside a').on("click", function() {
        popActive = $(this).attr("data-rel");
        openPopup(popActive);
    });

    /* Slide-4 Экспликация -> Click */
    $('.explication').on("click", function() {
        popActive = $(this).attr("data");
        openPopup(popActive);
    });


    /* PopUp: Open */
    function openPopup(n) {
        popActive = n;
        if (popActive == 1) createSlider1();
        if (popActive == 2) createSlider2();
        if (popActive == 3) createSlider3();

        $('#popup-' + popActive).addClass('visible');
        setTimeout(function() {
            $('.popup.visible .popup-txt').addClass('visible');
        }, 1000);

        // Scroll: disable
        $.fn.fullpage.setMouseWheelScrolling(false);
        $.fn.fullpage.setAllowScrolling(false);
        console.log('Scroll: disable');

        return false;
    }

    /* PopUp: Close */
    $('.popup .menu-icon-wrapper').on('click', function() {
        $('.popup').removeClass('visible');
        $('.popup-txt').removeClass('visible');
        if (popActive == 1) slider1.destroySlider();
        if (popActive == 2) slider2.destroySlider();
        if (popActive == 3) slider3.destroySlider();
        $('#popup-1 .bxslider').removeClass('full-width');
        $('footer').show();

        // Scroll: enable
        $.fn.fullpage.setMouseWheelScrolling(true);
        $.fn.fullpage.setAllowScrolling(true);
        console.log('Scroll: enable');
    });

    /* Slide-3 PopUp-1: Create Slider full/normal width */
    $('#popup-1 .bxslider li').on('click', function() {
        if (winW >= 1024) {
            $('#popup-1 .bxslider').toggleClass('full-width');
            if ($('#popup-1 .bxslider').hasClass('full-width')) {
               $('footer').hide();
                currentSlide = $(this).index() - 2;
                slider1.destroySlider();
                slider1 = $('#popup-1 .bxslider').bxSlider({
                    minSlides: 1,
                    maxSlides: 1,
                    slideWidth: 0,
                    slideMargin: 0,
                    pager: false,
                    adaptiveHeight: true,
                    startSlide: currentSlide - 1
                });
            } else {
               $('footer').show();
                currentSlide = $(this).index();
                slider1.destroySlider();
                slider1 = $('#popup-1 .bxslider').bxSlider({
                    minSlides: 1,
                    maxSlides: 5,
                    slideWidth: 502,
                    slideMargin: 20,
                    pager: false,
                    autoHover: true,
                    autoStart: true,
                    startSlide: currentSlide - 1
                });
            }
        }
    });

    /* Slide-3 PopUp-3: Create Slider full/normal width */
    $('#popup-3 .bxslider li').on('click', function() {
        if (winW >= 1024) {
            $('#popup-3 .bxslider').toggleClass('full-width');
            if ($('#popup-3 .bxslider').hasClass('full-width')) {
                $('footer').hide();
                currentSlide = $(this).index() - 2;
                slider3.destroySlider();
                slider3 = $('#popup-3 .bxslider').bxSlider({
                    minSlides: 1,
                    maxSlides: 1,
                    slideWidth: 0,
                    slideMargin: 0,
                    pager: false,
                    adaptiveHeight: true,
                    startSlide: currentSlide - 1
                });
            } else {
                $('footer').show();
                currentSlide = $(this).index();
                slider3.destroySlider();
                slider3 = $('#popup-3 .bxslider').bxSlider({
                    minSlides: 1,
                    maxSlides: 3,
                    slideWidth: 500,
                    slideMargin: 20,
                    pager: false,
                    autoHover: true,
                    autoStart: true,
                    startSlide: currentSlide - 1
                });
            }
        }
    });

    /* Slide-5 */
    var allAccordions = $('.accordion div.data');
    var allAccordionItems = $('.accordion .accordion-item');
    $('.accordion > .accordion-item').click(function() {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $('.accordion').removeClass('active');
            $('.acc-close').removeClass('fadeInLeft');
            $(this).next().slideUp("fast");
        } else {
            allAccordions.slideUp("fast");
            allAccordionItems.removeClass('open');
            $('.accordion').removeClass('active');
            $('.acc-close').removeClass('fadeInLeft');
            $(this).addClass('open');
            $('.accordion').addClass('active');
            $('.acc-close').addClass('fadeInLeft');
            $(this).next().slideDown("fast");
            return false;
        }
    });
    $('.acc-close').click(function() {
        $('.acc-close').removeClass('fadeInLeft');
        $('.acc-close').addClass('fadeInRight');
        setTimeout(function() {
            $('.acc-close').removeClass('fadeInRight');
        }, 200);
        setTimeout(function() {
            $('.accordion .data').slideUp("fast");
            $('.accordion-item').removeClass('open');  
            $('.map').css('overflow','hidden');
            $('.accordion').addClass('fadeInDown').removeClass('active');
            setTimeout(function() {
                $('.accordion').removeClass('fadeInDown');
                $('.map').css('overflow','visible');
            }, 300);
        }, 300);
        return false;
    });

    $('.data.one a').click(function() {
        $('.data.one a').removeClass('on');
        $(this).addClass('on');
        return false;
    });

    $('.data.two a').click(function() {
        $('.two .on + span').removeClass('display');
        $('.data.two a').removeClass('on');
        $(this).addClass('on');
        $('.two .on + span').addClass('display');
        return false;
    });

}(jQuery));
