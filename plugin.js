
$(window).scroll(function () {
    var h500 = $(".h500").height();
    var h100=$("#almost-show").height();
    // console.log(window.pageYOffset)

    // console.log($("#almost-show").position().top)
    if (window.pageYOffset > $(".bg-yellow").position().top -10 ) {
        $("#almost-show").addClass("fix-scroll");
        if (window.pageYOffset >( $(".bg-yellow").position().top + h500 - h100 - 10) ){
            $("#almost-show").removeClass("fix-scroll");
            $(".h500").addClass("pa");
            $("#almost-show").addClass("fix");
        }else {
            $("#almost-show").addClass("fix-scroll");
            $(".h500").removeClass("pa");
            $("#almost-show").removeClass("fix");
        }
    }
    else {
        $("#almost-show").removeClass("fix-scroll")
    }

});



