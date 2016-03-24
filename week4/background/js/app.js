$(document).ready(function(){
    var setBodyHeight = function(){
        var wHeight = window.screen.height;
        var view = $('.grad');
        view.height(wHeight);
    };
    setBodyHeight();
    $('.btn-login').click(function(){
        location.href = '../../../week8/indexAOP.html';
    });
});