/**
 * Created by zeroyan on 15/12/1.
 * 单例模式，感觉功能不多，把具体动画实现分离出去，不知道算不算组合。
 */
var animation = {
    init: function(){
        this.render();
        this.bind();
    },
    render: function(){
        this.tag_a = document.getElementsByTagName('a');
        this.tabBox = $(".tabBox");
        this.navMore = document.getElementsByClassName('nav-more');
        this.moreList = document.getElementsByClassName('nav-more-list');
    },
    bind: function(){
        //绑定<a>事件
        aClickGo(this.tag_a);
        //栏目切换
        tabShift(this.tabBox);
        //更多切换栏
        navMoreAnimation(this.navMore, this.moreList);
    }
};

window.onload = function(){
    animation.init();
};