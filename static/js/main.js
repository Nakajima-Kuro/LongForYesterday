var trigger = 400;
var done = false;

window.onload = function () {
    done = true;
    $('html, body').animate({ scrollTop: '0px' }, 200);
    setTimeout(function () {
        $('#cover_6').addClass('fade-in-fast') //background
    }, 0 + this.trigger);
    setTimeout(function () {
        $('#cover_2').addClass('fade-in-medium') //girl
    }, 500 + this.trigger);
    setTimeout(function () {
        $('#cover_1').addClass('fade-in'); //Piano
    }, 900 + this.trigger);
    setTimeout(function () {
        $('#cover_3').addClass('fade-in') //Sol
    }, 1500 + this.trigger);
    setTimeout(function () {
        $('#cover_4').addClass('fade-in')   //Title
    }, 2400 + this.trigger);
    setTimeout(function () {
        $('#cover_5').addClass('fade-in-medium') //Punji
    }, 3000 + this.trigger);
}
$(document).ready(function () {
    $('body').waypoint(function () {
        setTimeout(function () {
            var $intro = $('#intro')
            $intro.waypoint(function () {
                $intro.addClass('fade-in-medium');
            }, { offset: '80%' });
            var $notes = $('#notes')
            $notes.waypoint(function () {
                $notes.addClass('fade-in-fast');
            }, { offset: '80%' });

            var $song1 = $('#song1')
            trigger = 100;
            $song1.waypoint(function () {
                $song1.addClass('animated slow fadeInLeft');
                setTimeout(function () {
                    $('#cover_jacket').addClass('animated slow fadeIn')
                    $('#blue_arrow').addClass('animated slow fadeInDown')
                }, 300 + this.trigger);
                setTimeout(function () {
                    $('#song2').addClass('animated slow fadeInLeft')
                }, 0 + this.trigger);
                setTimeout(function () {
                    $('#song3').addClass('animated slow fadeInLeft')
                }, 250 + this.trigger);
                setTimeout(function () {
                    $('#song4').addClass('animated slow fadeInLeft')
                }, 500 + this.trigger);
                setTimeout(function () {
                    $('#song5').addClass('animated slow fadeInLeft')
                }, 750 + this.trigger);
                setTimeout(function () {
                    $('#song6').addClass('animated slow fadeInLeft')
                }, 1000 + this.trigger);
                setTimeout(function () {
                    $('#song7').addClass('animated slow fadeInLeft')
                }, 1250 + this.trigger);
                setTimeout(function () {
                    $('#song8').addClass('animated slow fadeInLeft')
                }, 1500 + this.trigger);
                setTimeout(function () {
                    $('#song9').addClass('animated slow fadeInLeft')
                }, 1500 + this.trigger);
                setTimeout(function () {
                    $('#song10').addClass('animated slow fadeInLeft')
                }, 1500 + this.trigger);
            }, { offset: '75%' });
        }, 500);
    });

    $('#cover_jacket').mouseenter(function () {
        $('#cover_jacket').removeClass('fadeIn transparent slow').addClass('animated infinite super-slow pulse')
    })
    $('#cover_jacket').mouseleave(function () {
        $(this).removeClass('infinite super-slow pulse')
        setTimeout(function () {
            $(this).addClass('infinite super-slow pulse')
        }, 100);
    })
})