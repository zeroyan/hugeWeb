/**
 * Created by zeroyan on 15/12/25.
 */
window.onload = function(){
    var $ = function(id){
        return document.getElementById(id);
    };
    //绑定事件兼容
    var addEvent=(function(){
        if(document.addEventListener){
            return function(el, type, fn){
                if(el.length){
                    for(var i=0; i<el.length; i++){
                        addEvent(el[i], type, fn);
                    }
                }else{
                    el.addEventListener(type, fn, false);
                }
            };
        }else{
            return function(el, type, fn){
                if(el.length){
                    for(var i=0; i<el.length; i++){
                        addEvent(el[i], type, fn);
                    }
                }else{
                    el.attachEvent('on' + type,function(){
                        return fn.call(el,window.event);
                    });
                }
            };
        }
    })();
    //计算器函数工厂
    var calculater = function(a, op, b){
        var res = "";
        a = parseFloat(a);
        b = parseFloat(b);
        switch (op){
            case "+":
                res = a + b;
                break;
            case "-":
                res = a - b;
                break;
            case "*":
                res = 10000 * a * b / 10000;
                break;
            case "/":
                if(b == 0){
                    res = "error:被除数不能为0！";
                    calTempNum = '0';
                }else{
                    res = (a*10000) / (b*10000);
                }
                break;
            case "%":
                if(b == 0) {
                    res = "error:被除数不能为0！";
                    calTempNum = '0';
                }else{
                    res = a % b;
                }
                break;
            case "1/x":
                if(a == 0){
                    res = "error:被分母不能为0！";
                    calTempNum = '0';
                }else{
                    var tmp = (1.0 / (a * 10000)) * 10000;
                    if(tmp - Math.floor(tmp) < 0.000001) tmp = Math.floor(tmp);
                    res = tmp;
                }
                break;
            case "√":
                res = Math.sqrt(a);
                break;
            default:
                res = "请选择正确运算符！";
        }
        return res;
    };

    var screen = $("text"); //计算器屏幕
    var calTempNum = '0'; //上一个数值
    var calTempOpeartor = ''; //上一个运算符
    var calLastNum = null; //运算中第一个数值
    var calNowNum = null; //运算中第二个数值
    var calState = true; //计算器开关
    var calFirst = true; //第一次操作

    //初始化
    var init = function(){
        screen.value = '0';
        calTempNum = '0';
        calTempOpeartor = '';
        calLastNum = null;
        calNowNum = null;
        calState = true;
        calFirst = true;
    };

    //点击数字显示
    var number = document.getElementsByClassName('num');
    for(var i=0; i<number.length; i++){
        addEvent(number[i], 'click', function(){
        //number[i].addEventListener('click', function(){
            if(!calState) return;
            var calNewNum = screen.value + this.innerText;
            //最长十位
            if(calNewNum.length <= 15){
                if(calTempNum == '0'){
                    calLastNum = parseFloat(screen.value);
                    if(isNaN(calLastNum)) calLastNum = null;
                    screen.value = this.innerText;
                    calTempNum = (this.innerText == '0') ? '0' : calNewNum;
                }else{
                    screen.value = calNewNum;
                    calTempNum = calNewNum;
                }
            }
            //screen.value = (calTempNum == 0) ? this.innerText : calNewNum;
            //calTempNum = calNewNum;
        });
    }
    //小数点显示
    addEvent($("calPoint"), 'click', function(){
    //$("calPoint").addEventListener('click', function(){
        if(!calState) return;
        if( calTempNum.indexOf('.') == -1 ){
            screen.value += ".";
            calTempNum = screen.value;
        }
    });

    //计算器开关
    addEvent($("calSwitch"), 'click', function(){
    //$("calSwitch").addEventListener('click', function(){
        if(calState){
            calState = false;
            screen.value = "";
        } else{
            init();
        }
    });

    //退格
    addEvent($("calDel"), 'click', function(){
    //$("calDel").addEventListener('click', function(){
        var nowVal = screen.value;
        if(!calState || nowVal.length == 1) return;
        screen.value = nowVal.slice(0, -1);
    });

    //清屏
    addEvent($("calClearAll"), 'click', function(){
    //$("calClearAll").addEventListener('click', function(){
        if(!calState) return;
        init();
    });

    //取反数
    addEvent($("calPosNeg"), 'click', function(){
    //$("calPosNeg").addEventListener('click', function(){
        if(!calState) return;
        if(screen.value.length == 2 && screen.value[1] == '.') return;
        var nowVal = 0.0 - parseFloat(screen.value);
        screen.value = nowVal;
    });

    //取倒数
    addEvent($("calReciprocal"), 'click', function(){
    //$("calReciprocal").addEventListener('click', function(){
        if(!calState) return;
        //calTempNum = '0'; //上一个数置0
        var nowVal = parseFloat(screen.value);
        var res = calculater(nowVal, "1/x", null).toString().slice(0, 15);
        screen.value = res;
    });

    //取平方根
    addEvent($("calSqrt"), 'click', function(){
    //$("calSqrt").addEventListener('click', function(){
        if(!calState) return;
        //calTempNum = '0'; //上一个数置0
        var nowVal = parseFloat(screen.value);
        var res = calculater(nowVal, "√", null).toString().slice(0, 15);
        screen.value = res;
    });

    //取等号
    var equalFoo = function(){
        console.log('==');
        calNowNum = screen.value;
        console.log(calLastNum + calTempOpeartor + calNowNum);
        var res = calculater(calLastNum, calTempOpeartor, calNowNum).toString().slice(0, 14);
        screen.value = res;
        calLastNum = calNowNum;
    };
    addEvent($("equal"), 'click', function(){
    //$("equal").addEventListener('click', function(){
        if(!calState || calTempOpeartor == '' || calTempNum == '0') return;
        equalFoo();
        //calTempOpeartor = '';
        calTempNum = '0';
    });

    //取加法
    addEvent($("calPlus"), 'click', function(){
    //$("calPlus").addEventListener('click', function(){
        if(!calState) return;
        calTempOpeartor = '+';
        if(calTempNum == '0') return;
        calTempNum = '0';
        equalFoo();
    });
    //取减法
    addEvent($("calMinus"), 'click', function(){
    //$("calMinus").addEventListener('click', function(){
        if(!calState) return;
        calTempOpeartor = '-';
        if(calTempNum == '0') return;
        calTempNum = '0';
        if(calFirst) {
            calLastNum = screen.value * 2;
            calFirst = false;
        }
        equalFoo();
    });
    //取乘法
    addEvent($("calMultiply"), 'click', function(){
    //$("calMultiply").addEventListener('click', function(){
        if(!calState) return;
        calTempOpeartor = '*';
        if(calTempNum == '0') return;
        calTempNum = '0';
        if(calFirst) {
            calLastNum = 1;
            calFirst = false;
        }
        equalFoo();
    });
    //取除法
    addEvent($("calDivide"), 'click', function(){
    //$("calDivide").addEventListener('click', function(){
        if(!calState) return;
        calTempOpeartor = '/';
        if(calTempNum == '0') return;
        calTempNum = '0';
        if(calFirst) {
            calLastNum = screen.value * screen.value;
            calFirst = false;
        }
        equalFoo();
    });
    //取模
    addEvent($("calModule"), 'click', function(){
    //$("calModule").addEventListener('click', function(){
        if(!calState) return;
        calTempOpeartor = '%';
        if(calTempNum == '0') return;
        calTempNum = '0';
        equalFoo();
    });
};
