/**
 * Created by zeroyan on 16/1/25.
 */
var PDmenu = function(box, speed){
    var ul = box.find("ul");
    var arrow = box.find(".arrow");
    var li = ul.find("li");
    box.hover(function(){
        $(ul).slideDown(speed);
        $(arrow).html("&uarr;");
    }, function(){
        $(ul).slideUp(speed);
        $(arrow).html("&darr;");
    });
};
//var PDmenu2 = function(userName, speed){
//    var ul = userName.parent().find("ul");
//    var arrow = userName.parent().find(".arrow");
//    var li = ul.find("li");
//    userName.on("mouseenter mouseout",function(e) {
//        if(e.type == "mouseenter"){
//            $(ul).slideDown(speed);
//            $(arrow).html("&uarr;");
//        }else if(e.type == "mouseout"){
//            if(e.target.nodeName != "LI" && e.target.nodeName != "A"){
//                $(this).slideUp(speed);
//                $(arrow).html("&darr;");
//            }
//        }
//    });
//    ul.on("mouseout", function(e){
//        e.stopPropagation();
//        //console.log(e.target.nodeName)
//        if(e.target.nodeName != "LI"){
//            $(this).slideUp(speed);
//            $(arrow).html("&darr;");
//        }
//    });
//    $.each(li, function(index, value){
//        $(value).on("mouseout", function(e){
//            e.stopPropagation();
//            //console.log(e.target.nodeName)
//            if(e.target.nodeName != "LI" && e.target.nodeName != "A"){
//                $(ul).slideUp(speed);
//                $(arrow).html("&darr;");
//            }
//        });
//    });
//};
var categoryMenu = function(){
    $('.all-sort-list > .item').hover(function(){
        $(this).children('.item-list').css('display','block');
    },function(){
        $(this).children('.item-list').css('display','none');
    });
};
var tabShift = function(box){
    var allLi = $(box.children("ul").children("li"));
    var allDiv = $(box.children("div"));
    allLi.each(function(index){
        var _this_li = $(this);
        _this_li.on("mouseover", function(){
            allDiv.removeClass("div-on");
            $(box.find(".li-on")).removeClass("li-on");
            allDiv.eq(index).addClass("div-on");
            _this_li.addClass("li-on");
        }).on("mouseout", function(){});
    });
};