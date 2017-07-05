(function($) { 
    var winH, winW;

    function getWinProps() {
        winW = $(window).width();
        winH = $(window).height();
        //console.log('winW: '+winW+' winH: '+winH+' minSize: '+minSize);
        return winW, winH;
    }

/* ==========================================================================
   DOM
   ========================================================================== */
    $(document).ready(function() {
        getWinProps(); 
        if (winW < 550) {
            $('.home, .contact').height( winW*568/320 );
        } else {
            $('.home, .contact').height( 1000 );
        }
        HomeAnimation();
    });

    $(window).bind('resize orientationchange', function(e) {
        getWinProps();
    });

/* ==========================================================================
   Scrolling
   https://github.com/chayka/jQuery.Scroolly/wiki/Short-Story#jqueryscroolly-what-is-it

   direction: 1     -- scrolling down
   direction: -1    -- scrolling up
   ========================================================================== */

    /* Slide-1 */
    $('.home figure').scroolly([
        {   
            from: 'el-bottom = top',
            onCheckOut: function($el){
                $('.home *').removeClass('moveUp fadeInUp');
            }
        },
        {
            to: 'el-bottom = center',
            direction: -1,
            onCheckIn: function($el){
                HomeAnimation(); 
            }
        }
    ]);
    /* Slide-2 */
    $('.silence').scroolly([
        {   // "норм." появление, пока не ушел вверх
            from: 'el-top + 254 = bottom',
            to: 'el-bottom = top',
            direction: 1,
            onCheckIn: function($el){
                $('.silence figure').addClass('fadeIn');
            },
            onCheckOut: function($el){
                $('.silence *').removeClass('fadeIn fadeInRight');
            }
        },
        {   // сверху-вниз
            to: 'el-top = top',
            direction: -1,
            onCheckIn: function($el){
                $('.silence figure').addClass('fadeIn');
            }
        },
        {   // ушел вниз
            to: 'el-top = bottom',
            direction: -1,
            onCheckIn: function($el){
                $('.silence *').removeClass('fadeIn fadeInRight');
            }
        },
        {   
            from: 'el-center = center',
            to: 'el-top = top',
            onCheckIn: function($el){
                $('.silence p').addClass('fadeInUp');
            }
        }       
    ]);
    $('.silence figure').scroolly([
        {   
            from: 'el-top + 254 = bottom',
            to: 'el-bottom = top',
            direction: 1,
            onCheckIn: function($el){
                $('.silence figure').addClass('fadeIn');
                $('.silence h2').addClass('fadeInRight');
                setTimeout(function() {
                    $('.silence a').addClass('fadeIn');
                }, 1000);
            },
            onCheckOut: function($el){
                $('.silence *').removeClass('fadeIn fadeInRight');
            }
        }
    ]);
    $('.silence h2').scroolly([
        {   
            to: 'el-top = top',
            direction: -1,
            onCheckIn: function($el){
                $('.silence figure').addClass('fadeIn');
                $('.silence h2').addClass('fadeInRight');
                setTimeout(function() {
                    $('.silence a').addClass('fadeIn');
                }, 1500);
            }
        }
    ]);
    $('.silence p').scroolly([
        {   
            from: 'el-top + 254 = bottom',
            to: 'el-bottom = top',
            direction: 1,
            onCheckIn: function($el){
                $('.silence p').addClass('fadeInUp');
            }
        },
        {   
            to: 'el-bottom = center',
            direction: -1,
            onCheckIn: function($el){
                $('.silence p').addClass('fadeInUp');
            }
        } 
    ]);
    /* Slide-3 */
    $('.business').scroolly([
        {   // "норм." появление, пока не ушел вверх
            from: 'el-top + 254 = bottom',
            to: 'el-bottom = top',
            direction: 1,
            onCheckIn: function($el){
                $('.business figure').addClass('fadeIn');
            },
            onCheckOut: function($el){
                $('.business *').removeClass('fadeIn fadeInRight');
            }
        },
        {   // сверху-вниз
            to: 'el-top = top',
            direction: -1,
            onCheckIn: function($el){
                $('.business figure').addClass('fadeIn');
            }
        },
        {   // ушел вниз
            to: 'el-top = bottom',
            direction: -1,
            onCheckIn: function($el){
                $('.business *').removeClass('fadeIn fadeInRight');
            }
        }       
    ]);
    $('.business figure a').scroolly([
        {   // "норм." появление, пока не ушел вверх
            from: 'el-top + 254 = bottom',
            to: 'el-bottom = top',
            direction: 1,
            onCheckIn: function($el){
                $('.business figure a').addClass('fadeIn');
            }
        },
        {   // сверху-вниз
            to: 'el-top = center',
            direction: -1,
            onCheckIn: function($el){
                    $('.business figure a').addClass('fadeIn');
            }
        }      
    ]);
    $('.business h2').scroolly([
        {   // "норм." появление, пока не ушел вверх
            from: 'el-top + 254 = bottom',
            to: 'el-bottom = top',
            direction: 1,
            onCheckIn: function($el){
                $('.business h2').addClass('fadeInRight');
            }
        },
        {   // сверху-вниз
            to: 'el-top = center',
            direction: -1,
            onCheckIn: function($el){
                    $('.business h2').addClass('fadeInRight');
            }
        }      
    ]);
    $('.business ul').scroolly([
        {   // "норм." появление, пока не ушел вверх
            from: 'el-top + 254 = bottom',
            to: 'el-bottom = top',
            direction: 1,
            onCheckIn: function($el){
                $('.business ul').addClass('fadeInRight');
            }
        },
        {   // сверху-вниз
            to: 'el-top = top',
            direction: -1,
            onCheckIn: function($el){
                    $('.business ul').addClass('fadeInRight');
            }
        }      
    ]);
    /* Slide-4 */
    $('.catalog').scroolly([
        {   // "норм." появление, пока не ушел вверх
            from: 'el-top + 254 = bottom',
            to: 'el-bottom = top',
            direction: 1,
            onCheckIn: function($el){
                $('.catalog h2').addClass('fadeInRight');
            },
            onCheckOut: function($el){
                $('.catalog *').removeClass('fadeIn fadeInRight');
            }
        },
        {   // сверху-вниз
            to: 'el-top = center',
            direction: -1,
            onCheckIn: function($el){
                    $('.catalog h2').addClass('fadeInRight');
            }
        },
        {   
            to: 'el-bottom = top',
            onCheckOut: function($el){
                $('.catalog h2').removeClass('fadeInRight');
            }
        }      
    ]);
    $('.catalog header p').scroolly([
        {   // "норм." появление, пока не ушел вверх
            from: 'el-top + 254 = bottom',
            to: 'el-bottom = top',
            direction: 1,
            onCheckIn: function($el){
                $('.catalog header p').addClass('fadeInRight');
            }
        },
        {   // сверху-вниз
            to: 'el-top = center',
            direction: -1,
            onCheckIn: function($el){
                    $('.catalog header p').addClass('fadeInRight');
            }
        },
        {   
            to: 'el-bottom = top',
            onCheckOut: function($el){
                $('.catalog header p').removeClass('fadeInRight');
            }
        }      
    ]);
    $('.catalog li').scroolly([
        {   // "норм." появление, пока не ушел вверх
            from: 'el-top + 254 = bottom',
            to: 'el-bottom = top',
            direction: 1,
            onCheckIn: function($el){
                $('.catalog li[data-target]').removeClass('active');
                $('.catalog li p').addClass('fadeInDown');
                $('.catalog li[data-target="'+$el.data('target')+'"]').addClass('active');
            },
            onCheckOut: function($el){
                $('.catalog li[data-target]').removeClass('active');
                $('.catalog li p').removeClass('fadeInDown');
            }
        }  
    ]);
    /* Slide-5 */
    $('.contact h3').scroolly([
        {   // "норм." появление, пока не ушел вверх
            from: 'el-top + 254 = bottom',
            to: 'el-bottom = top',
            direction: 1,
            onCheckIn: function($el){
                $('.contact h3').addClass('fadeIn');
                setTimeout(function() {
                    $('.contact p').addClass('fadeInUp');
                }, 500);                
                setTimeout(function() {
                    $('.contact footer').addClass('fadeInUp');
                    setTimeout(function() {
                        $('.one').addClass('fadeInUp');
                    }, 500);
                    setTimeout(function() {
                        $('.two').addClass('fadeInUp');
                    }, 1000);
                }, 2500);
            }
        }  
    ]);
    $('.contact').scroolly([
        {   
            to: 'doc-bottom',
            onCheckOut: function($el){
                $('.contact footer').addClass('fadeInUp');
                setTimeout(function() {
                    $('.one').addClass('fadeInUp');
                }, 500);
                setTimeout(function() {
                    $('.two').addClass('fadeInUp');
                }, 1000);
            }
        } 
    ]);


    /* ==========================================================================
       Menu Icon ≡/× 
       ========================================================================== */
    $('nav .menu-icon-wrapper').on('click', function() {
        $('.main-menu').toggleClass('fadeInRight');
        $('nav .menu-icon-trigger').toggleClass('close'); 
        if ($('.main-menu').hasClass('fadeInRight')) {
            setTimeout(function() {
                $('nav .menu-icon-trigger').addClass('rotate45');
            }, 500);
        } else {
            $('nav .menu-icon-trigger').removeClass('rotate45');
        }
        return false;
    });

/* ==========================================================================
   Event
   ========================================================================== */

   /* One Page Scroll */
    $('a[href^="#"]').on("click", function(e) { 
        e.preventDefault();
        var target = this.hash, $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    }); 

    var allItems = $('.contact svg');
    $('.one, .two').on("click", function() { 
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
        } else {
            allItems.removeClass('open');
            $('.contact').addClass('open');
            return false;
        }
    });   
    $('.contact h5').on("click", function() { 
        $('.contact').removeClass('open');
        return false;
    });  

    function HomeAnimation() {
        setTimeout(function() {
           $('.home > *').addClass('moveUp');
        }, 1300);
        setTimeout(function() {
           $('.home h1, .home h3').addClass('fadeInUp');
        }, 1800);
        setTimeout(function() {
           $('.home a span').addClass('fadeIn');
        }, 2400);
    }

}(jQuery));
