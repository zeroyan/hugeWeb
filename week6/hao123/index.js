/**
 * Created by zeroyan on 16/1/4.
 */
window.onload = function() {
    var $ = function (id) {
        return document.getElementById(id);
    };
    //getElementsByClassName兼容性
    var getElementsByClassName = function(className) {
        var all = document.all ? document.all : document.getElementsByTagName('*');
        var elements = [];
        for (var e = 0; e < all.length; e++) {
            if (all[e].className == className) {
                elements[elements.length] = all[e];
            }
        }
        return elements;
    };
    //绑定事件兼容
    var addEvent = (function () {
        if (document.addEventListener) {
            return function (el, type, fn) {
                if (el.length) {
                    for (var i = 0; i < el.length; i++) {
                        addEvent(el[i], type, fn);
                    }
                } else {
                    el.addEventListener(type, fn, false);
                }
            };
        } else {
            return function (el, type, fn) {
                if (el.length) {
                    for (var i = 0; i < el.length; i++) {
                        addEvent(el[i], type, fn);
                    }
                } else {
                    el.attachEvent('on' + type, function () {
                        return fn.call(el, window.event);
                    });
                }
            };
        }
    })();

    var changeColor = function(){
        var allLi = getElementsByClassName("changeColorBtn");
        for(var i=0; i<allLi.length; i++){
            var _thisBtn = allLi[i].childNodes;
            addEvent(_thisBtn, "click", function(){
                var _this_color = this.getAttribute("class").replace("bg", "skin-color");
                document.body.setAttribute("class", _this_color);
                localStorage.bgColor = _this_color;
            });
        }
    }();
};