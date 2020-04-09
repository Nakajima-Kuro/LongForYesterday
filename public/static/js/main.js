var trigger = 400;

window.onload = function () {
    $('html, body').animate({ scrollTop: '0px' }, 100);
    setTimeout(function () {
        setTimeout(function () {
            $('#cover_6').addClass('fade-in-fast') //background
        }, 0 + this.trigger);
        setTimeout(function () {
            $('#cover_2').addClass('fade-in-fast') //girl
        }, 500 + this.trigger);
        setTimeout(function () {
            $('#cover_3').addClass('fade-in-fast'); //Piano
        }, 1100 + this.trigger);
        setTimeout(function () {
            $('#cover_1').addClass('fade-in') //Sol
        }, 1500 + this.trigger);
        setTimeout(function () {
            $('#cover_4').addClass('fade-in')   //Title
        }, 2000 + this.trigger);
        setTimeout(function () {
            $('#cover_5').addClass('animated flyInSmall') //Punji
        }, 2800 + this.trigger);
    }, 150);
}
$(document).ready(function () {
    $(".wrapper").fadeOut('fast');
    setTimeout(function () {
        // un-lock scroll position
        var html = jQuery('html');
        var scrollPosition = html.data('scroll-position');
        html.css('overflow', html.data('previous-overflow'));
    }, 700)
    $('#start').waypoint(function () {
        setTimeout(function () {
            var $intro = $('#intro')
            $intro.waypoint(function () {
                $intro.addClass('animated flyInIntro');
            }, { offset: '80%' });
            // var $notes = $('#notes')
            // $notes.waypoint(function () {
            //     $notes.addClass('fade-in-fast');
            // }, { offset: '80%' });

            var $song1 = $('#song1')
            trigger = 100;
            $song1.waypoint(function () {
                $song1.addClass('animated slow fadeInLeft');
                setTimeout(function () {
                    $('#cover_jacket').addClass('animated slower fadeIn')
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

            var $crossfade = $('#crossfade')
            $crossfade.waypoint(function () {
                $('#crossfade').addClass('animated flyIn');
                $('#cover-photo-2').addClass('animated flyIn');
                $('#cover-photo-3').addClass('animated flyIn');
                $('#cover-photo-4').addClass('animated flyIn');
                $('#sample_arrow').addClass('animated flyIn');
            }, { offset: '70%' })

            $('#crossfade').click(function () {
                $('#youtubePreview').modal('toggle');
                $('#youtubePreview').modal({
                    backdrop: true
                });
            });

            var $shop = $('#shop')
            $shop.waypoint(function () {
                $('#cover-photo-5').addClass('animated slow flyInIntro');
                $('#shop_content').addClass('animated slower fadeIn');
            }, { offset: '80%' });

            var $credit = $('#credit')
            $credit.waypoint(function () {
                $('#credit').addClass('animated slow fadeIn');
            }, { offset: '90%' });

            var $videoSrc = "https://www.youtube-nocookie.com/embed/iAosGj32hdQ";
            
            $('#youtubePreview').on('shown.bs.modal', function (e) {

                // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
                $("#video").attr('src', $videoSrc + "?rel=0;autoplay=1&amp;modestbranding=1&amp;showinfo=0");
            })
            // stop playing the youtube video when I close the modal
            $('#youtubePreview').on('hide.bs.modal', function (e) {
                // a poor man's stop video
                $("#video").attr('src', $videoSrc);
            })
        }, 1000);
    });//end of body waypoint
})