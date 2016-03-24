/**
 * Created by zeroyan on 15/12/1.
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

//所有a跳转
function aClickGo(){
    var tag_a = document.getElementsByTagName('a');
    for(var i = 0; i < tag_a.length; i ++ ){
        tag_a[i].onclick = function(){
            alert('跳转中...');
        };
    }
}

//更多产品动画
function navMoreAnimation(){
    var navMore = document.getElementsByClassName('nav-more');
    var moreList = document.getElementsByClassName('nav-more-list');

    navMore[0].onmouseover = function(e){
        console.log('in');
        moreList[0].style.height = document.documentElement.clientHeight + "px";
        moreList[0].style.opacity = '1';
        moreList[0].style.display = 'block';
        stopEventBubble(e);
    };
    moreList[0].onmouseout = function(){
        console.log('out');
        this.style.opacity = '0';
        this.style.display = 'none';
    };
    var list_a = moreList[0].getElementsByTagName('a');
    for(var i = 0; i < list_a.length; i++){
        list_a[i].onmouseout = function(e){
            stopEventBubble(e);
        };
    }
}
window.onload = function(){
    var doucumentWidth = document.documentElement.clientWidth;
    if (doucumentWidth >= 640){
        navMoreAnimation();
    }
    tabShift($(".tabBox"));
    $.ajax({
        url:"https://www.baidu.com/home/pcweb/data/mancardhtml",
        data:{
            id: 2,
            isPull: "",
            indextype: "manht",
            _req_seqid: "0xd238dcdf00044df9",
            asyn: 1,
            t: 1453883728892,
            sid: "1445_18240_18878_17944_18965_18778_18133_17001_17073_15291_12230_18981"
        },
        type:'get',
        dataType:'jsonp',
        timeout:5000,
        success:function(json){
            console.log(json.html);
        }
    });


};