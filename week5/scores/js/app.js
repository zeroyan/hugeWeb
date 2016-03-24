/**
 * Created by zeroyan on 15/12/25.
 */
$(document).ready(function(){
    var partition = function(score){
        //边界条件
        //if ( !(score instanceof Number) ) return -1;
        if ( typeof(score) != "number" ) return -1;
        if ( score == 100 ) return 1;

        //函数映射
        return ( 10 - Math.floor(score / 10) );
    };

    //失去焦点计算
    var score = $('input');
    score.bind('blur', function(){
        var num = Number(this.value);
        var ctn = $('span');
        var p = partition(num);
        var c = (p>0) ? p+'等生' : '非法输入！';
        ctn.html(c);
    });
});
