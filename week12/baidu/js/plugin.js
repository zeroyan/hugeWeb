/**
 * Created by zeroyan on 16/1/25.
 */
//阻止事件冒泡
function stopEventBubble(event){
    var e=event || window.event;

    if (e && e.stopPropagation){
        e.stopPropagation();
    }
    else{
        e.cancelBubble=true;
    }
}
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
function aClickGo(tag_a){
    for(var i = 0; i < tag_a.length; i ++ ){
        tag_a[i].onclick = function(){
            alert('跳转中...');
        };
    }
}
//更多产品动画
function navMoreAnimation(navMore, moreList){
    if (document.documentElement.clientWidth < 640){
        return;
    }
    navMore[0].onmouseover = function(e){
        moreList[0].style.height = document.documentElement.clientHeight + "px";
        moreList[0].style.opacity = '1';
        moreList[0].style.display = 'block';
        stopEventBubble(e);
    };
    moreList[0].onmouseout = function(){
        this.style.opacity = '0';
        this.style.display = 'none';
    };
    var list_a = moreList[0].getElementsByTagName('a');
    for(var i = 0; i < list_a.length; i++){
        list_a[i].onmouseout = function(e){
            stopEventBubble(e);
        };
    }
};