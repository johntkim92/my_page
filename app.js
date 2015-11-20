$("#header").click(function() {
  alert("this works");
});

// Code addapted from Marius Craciunoiu
// https://medium.com/@mariusc23
// Photography by Matthias Heiderich
// http://www.matthias-heiderich.de/

var didScroll,
    lastScrollTop = 0,
    delta = 10,
    navbarHeight = $('nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure you scroll past delta.
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight){

        // Scroll Down
        $('nav').removeClass('nav-down').addClass('nav-up');
        console.log('----------nav-up-----------');
        console.log("Current Scroll " + st);
        console.log("Last Scroll " + lastScrollTop);

    } else {
        // Scroll Up
            $('nav').removeClass('nav-up').addClass('nav-down');
            console.log('----------nav-down---------');
            console.log("Current Scroll " + st);
            console.log("Last Scroll " + lastScrollTop);
    }

    lastScrollTop = st;
}
