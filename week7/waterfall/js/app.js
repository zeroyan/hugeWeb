$(function(){
    $(window).on("load", function(){
        init();
    });
    $(window).on("resize", function () {
        init();
    });
});

function init(){
    imgLocation();
    var dataImg = {
        "data": [{"src": "1.jpg"}, {"src": "2.jpg"}, {"src": "3.jpg"}, {"src": "4.jpg"}, {"src": "5.jpg"},]
    };
    window.onscroll = function(){
        if( scrollSide() ){
            $.each(dataImg.data, function(index, value){
                var box = $("<div>").addClass("box").appendTo("#container");
                var content = $("<div>").addClass("content").appendTo(box);
                $("<img>").attr("src", "./image/" + $(value).attr("src")).appendTo(content);
            });
            imgLocation();
        }
    };
}

function scrollSide(){
    var box = $(".box");
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    var documentHeight = $(document).width();
    var scrollHeight = $(window).scrollTop();
    return (lastboxHeight < scrollHeight + documentHeight)?true:false;
}

function imgLocation(){
    var box = $(".box");
    var boxWidth = box.eq(0).width();
    var num = Math.floor($(window).width() / boxWidth);
    var boxArr = [];
    box.each(function(index, values){
        var boxHeight = box.eq(index).height();
        $(values).css({
            "position": "relative",
            "top": "auto",
            "left": "auto"
        });
        if(index<num){
            boxArr[index] = boxHeight;
        }else{
            var minboxHeight = Math.min.apply(null, boxArr);
            var minboxIndex = $.inArray(minboxHeight, boxArr);
            $(values).css({
               "position": "absolute",
                "top": minboxHeight,
                "left": box.eq(minboxIndex).position().left
            });
            boxArr[minboxIndex] += box.eq(index).height();
        }
    });
}