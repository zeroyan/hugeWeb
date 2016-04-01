$(function () {
    $(".loading").hide();
    $(".content").show();
    $(".app-cate li").click(function () {
        var all_lis = $(this).parents().children("li");
        for (var i = 0; i < all_lis.length; i++) {
            $(all_lis[i]).removeClass("app-active");
        }
        $(this).addClass("app-active");
        var _this_cate = $(this).children("a").data("cate");
        //ajax
        $.ajax({
            type: "POST",
            url: "/news/getNewsByCate",
            data: {category: _this_cate},
            dataType: "text",
            beforeSend: function () {
                $(".loading").show();
                $(".content").hide();
                $('.am-slider').remove();
            },
            success: function (data) {
                $(".am-list").html(data);
                $(".loading").hide();
                $(".content").show();
            }
        });
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".app-goTop").fadeIn();
        } else {
            $(".app-goTop").fadeOut();
        }
    });

});
