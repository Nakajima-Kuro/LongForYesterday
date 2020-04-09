// lock scroll position, but retain settings for later
var scrollPosition = [
    self.pageXOffset || document.documentElement.scrollLeft,
    self.pageYOffset || document.documentElement.scrollTop
];

var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
html.data('scroll-position', scrollPosition);
html.data('previous-overflow', html.css('overflow'));
html.css('overflow', 'hidden');