$.fn.inner_float = function(top){
    var k = $(this);
    var x = parseInt(top.top);
    $(window).scroll(function () {
        var a =k.parent();
        var p1=a.position();
        var hparent = $(a).height();
        var h= k.height();
        if (window.pageYOffset > p1.top - x ) {
            k.addClass("fix-scroll");
            k.css({"top":top.top});
            if (window.pageYOffset >( p1.top + hparent- h - x) ){
                k.removeClass("fix-scroll");
                k.css({"top": ""});
                a.addClass("pa");
                k.addClass("fix");
            }else {
                k.addClass("fix-scroll");
                k.css({"top":top.top});
                a.removeClass("pa");
                k.removeClass("fix");
            }
        }
        else {
            k.removeClass("fix-scroll")
            k.css({"top": ""});
        }
    });
};
$('#almost-show').inner_float({
    top: "10px"
});


