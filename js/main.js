// On capture la hauteur à laquelle se situe la navigation
let stickyNav = $('nav').offset().top;

function stickyFct() {
    let scrollTop = $(window).scrollTop();
    if (scrollTop > stickyNav) {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }
}

$(window).scroll(function () {
    stickyFct();
    $(window).resize(function () {
        stickyNav = $('nav').offset().top;
        stickyFct();
    });
});
