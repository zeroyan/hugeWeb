/**
 * Created by zeroyan on 15/12/1.
 */

function init() {
    var docWidth = document.documentElement.clientWidth;
    var docHeight = document.documentElement.clientHeight;
    var html = document.querySelector('html');
    html.style.fontSize = (docWidth / 50) + "px";
    //var container = document.getElementsByClassName('container');
    //container.style.marginTop = (docHeight / 2) + "px";
};
window.onload = function(){
    init();
    var tag_a = document.getElementsByTagName('a');
    for(var i = 0; i < tag_a.length; i ++ ){
        tag_a[i].onclick = function(){
            alert('跳转中...');
        };
    }
};
window.addEventListener('resize', init);