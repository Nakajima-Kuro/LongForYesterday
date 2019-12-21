var trigger = 400;
var done = false;

window.onload = function () {
    this.done = true;
    $('html, body').animate({ scrollTop: '0px' }, 200);
    setTimeout(function () {
        $('#cover_2').addClass('fade-in')
    }, 0 + this.trigger);
    setTimeout(function () {
        $('#cover_1').addClass('fade-in')
    }, 500 + this.trigger);
    setTimeout(function () {
        $('#cover_3').addClass('fade-in')
    }, 1000 + this.trigger);
    setTimeout(function () {
        $('#cover_4').addClass('fade-in')
    }, 1800 + this.trigger);
    setTimeout(function () {
        $('#cover_5').addClass('fade-in')
    }, 2500 + this.trigger);
    setTimeout(function () {
        $('#cover_6').addClass('fade-in')
    }, 3000 + this.trigger);
}
$(document).ready(function () {

    setTimeout(function () {
        var $intro = $('#intro')
        $intro.waypoint(function () {
            $intro.addClass('fade-in-fast');
        }, { offset: '50%' });
        var $notes = $('#notes')
        $notes.waypoint(function () {
            $notes.addClass('fade-in-fast');
        }, { offset: '80%' });

        var $song1 = $('#song1')
        trigger = 100;
        $song1.waypoint(function () {
            $song1.addClass('fade-in-fast');
            setTimeout(function () {
                $('#cover_jacket').addClass('fade-in-medium')
            }, 300 + this.trigger);
            setTimeout(function () {
                $('#song2').addClass('fade-in-medium')
            }, 0 + this.trigger);
            setTimeout(function () {
                $('#song3').addClass('fade-in-medium')
            }, 250 + this.trigger);
            setTimeout(function () {
                $('#song4').addClass('fade-in-medium')
            }, 500 + this.trigger);
            setTimeout(function () {
                $('#song5').addClass('fade-in-medium')
            }, 750 + this.trigger);
            setTimeout(function () {
                $('#song6').addClass('fade-in-medium')
            }, 1000 + this.trigger);
            setTimeout(function () {
                $('#song7').addClass('fade-in-medium')
            }, 1250 + this.trigger);
            setTimeout(function () {
                $('#song8').addClass('fade-in-medium')
            }, 1500 + this.trigger);
            setTimeout(function () {
                $('#song9').addClass('fade-in-medium')
            }, 1500 + this.trigger);
            setTimeout(function () {
                $('#song10').addClass('fade-in-medium')
            }, 1500 + this.trigger);
        }, { offset: '80%' });
    }, 500);
})