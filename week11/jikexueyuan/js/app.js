//define(function(require, exports, module) {
//    // 通过 require 引入依赖
//    var $ = require.('jquery');
//    var addons = require('addons');
//    console.log($);
//    console.log(addons);
//    function initJs(){
//        $('.search-text').on("focus blur", function () {
//            $('.search-btn').css("background", "#35b558 url(http://s1.jikexueyuan.com/common/images/topsearch-icon2_8c8d8b0.png) center center no-repeat")
//        });
//        $('.search-text').on("blur", function () {
//            $('.search-btn').css("background", "url(http://s1.jikexueyuan.com/common/images/topsearch-icon_e1f5df2.png) center center no-repeat")
//        });
//        addons.PDmenu($(".userMenu"), 100);
//        addons.PDmenu($(".navbox"), 0);
//        addons.categoryMenu();
//        addons.tabShift($(".hot-lesson"));
//        addons.boxRotate($(".card-transform"));
//        addons.slider("picList");
//    };
//    //main
//    $(function(){
//        initJs();
//    });
//});


$(function(){
    //dom特效初始化
    var initJs = function(){
        $('.search-text').on("focus blur", function(){
            $('.search-btn').css("background", "#35b558 url(http://s1.jikexueyuan.com/common/images/topsearch-icon2_8c8d8b0.png) center center no-repeat")
        });
        $('.search-text').on("blur", function(){
            $('.search-btn').css("background", "url(http://s1.jikexueyuan.com/common/images/topsearch-icon_e1f5df2.png) center center no-repeat")
        });
        PDmenu($(".userMenu"), 100);
        PDmenu($(".navbox"), 0);
        categoryMenu();
        tabShift($(".hot-lesson"));
        boxRotate($(".card-transform"));
        slider("picList");
    };

    //main
    initJs();
});