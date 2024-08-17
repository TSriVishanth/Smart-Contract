$(document).ready(function() {
    $('body').addClass('dark-theme').removeClass('LghtThme');
    $(window).on('load', function() {
        hdSticky();
    });

    $(window).scroll(function() {
        hdSticky();
    });

    function hdSticky() {
        var scroll = $(window).scrollTop();

        if (scroll >= 400) {
            $(".add-header ").addClass("add-header-active fixed-top ");
        } else {
            $(".add-header").removeClass("add-header-active fixed-top");
        }
    }

});


// sidebar
$(".side-btn").on('click', function() {
    $('body').toggleClass('side-Open');
});

// custom scrolll


(function($) {

    $(window).on("load ", function() {

        $(".scrollcustom ").mCustomScrollbar({
            theme: "light-2 ",
            scrollButtons: {
                enable: true

            },
            mouseWheel: {
                enable: true
            },

        });

    });
})(jQuery);








$('#test').change(function() {
    if ($(this).is(":checked")) {
        $('body').addClass('LghtThme').removeClass('dark-theme');
    } else {
        $('body').addClass('dark-theme').removeClass('LghtThme');
    }
});