/**
 * Created by zeroyan on 15/12/25.
 */
$(document).ready(function(){
    //计算器函数
    var calculater = function(a, op, b){
        var res = "";
        switch (op){
            case "+":
                res = a + b;
                break;
            case "-":
                res = a - b;
                break;
            case "x":
                res = a * b;
                break;
            case "/":
                //边界条件
                res = (b == 0) ? "被除数不能为0！" : a / b;
                break;
            default:
                res = "请选择正确运算符！";
        }
        return res;
    };

    //点击计算
    $('button').click(function(){
        var inps = $('input');
        var a = Number($(inps[0]).val());
        var b = Number($(inps[1]).val());
        var operation = $('select').val();
        $('#res').html(calculater(a, operation ,b));
    });
});
