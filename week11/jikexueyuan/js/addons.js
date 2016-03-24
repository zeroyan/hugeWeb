/**
 * Created by zeroyan on 16/1/25.
 */
//define(function (require, exports) {
//    var $ = require('jquery');
//    exports.PDmenu = function (box, speed) {
//        var ul = box.find("ul");
//        var arrow = box.find(".arrow");
//        var li = ul.find("li");
//        box.hover(function () {
//            $(ul).slideDown(speed);
//            $(arrow).html("&uarr;");
//        }, function () {
//            $(ul).slideUp(speed);
//            $(arrow).html("&darr;");
//        });
//    };
//    exports.categoryMenu = function () {
//        $('.all-sort-list > .item').hover(function () {
//            $(this).children('.item-list').css('display', 'block');
//        }, function () {
//            $(this).children('.item-list').css('display', 'none');
//        });
//    };
//    exports.tabShift = function (box) {
//        var allLi = $(box.children("ul").children("li"));
//        var allDiv = $(box.children("div"));
//        allLi.each(function (index) {
//            var _this_li = $(this);
//            _this_li.on("mouseover", function () {
//                allDiv.removeClass("lesson-on");
//                $(box.find(".on")).removeClass("on");
//                allDiv.eq(index).addClass("lesson-on");
//                _this_li.addClass("on");
//            }).on("mouseout", function () {
//            });
//        });
//    };
//    exports.boxRotate = function (box) {
//        box.hover(function () {
//            var front = $($(this).find(".front"));
//            var back = $($(this).find(".back"));
//            front.fadeOut(100);
//        }, function () {
//            var front = $($(this).find(".front"));
//            var back = $($(this).find(".back"));
//            front.fadeIn(100);
//        });
//    }
//    exports.slider = function (id) {
//        var TweenLite = function ($target, $duration, $vars) {
//            var ease, onComplete, onUpdate, delay, vars = $vars, target = $target, speed = $duration;
//
//            if (!target) {
//                return false;
//            }
//            if (vars.ease) {
//                ease = vars.ease;
//                delete vars.ease;
//            } else {
//                ease = Tween.Linear;
//            }
//            if (vars.onComplete) {
//                onComplete = vars.onComplete;
//                delete vars.onComplete;
//            }
//            if (vars.onUpdate) {
//                onUpdate = vars.onUpdate;
//                delete vars.onUpdate;
//            }
//            if (vars.delay) {
//                delay = vars.delay;
//                delete vars.delay;
//            }
//            var ifstop = false;
//            var attrArr = [];
//            var curArr = [];
//            var initArr = [];
//            for (var at in vars) {
//                attrArr.push(at);
//                curArr.push(vars[at]);
//                var ato = 0;
//                switch (at) {
//                    case "opacity":
//                        ato = parseInt(parseFloat(getStyle(target, 'opacity')) * 100);
//                        if (isNaN(ato)) {
//                            ato = 100;
//                        }
//                        break;
//                    default:
//                        ato = parseInt(getStyle(target, at));
//                        break;
//                }
//                initArr.push(ato);
//            }
//            if (delay) {
//                if (target.delay) {
//                    clearTimeout(target.delay);
//                }
//                target.delay = setTimeout(run, delay * 1000);
//            } else {
//                run();
//            }
//
//            function run() {
//                var s = (new Date()).getTime() / 1000;
//                for (var attr in vars) {
//                    (function () {
//                        var t = (new Date()).getTime() / 1000 - s;
//                        for (var i = 0; i < attrArr.length; i++) {
//                            var easeVars = ease(t, initArr[i], curArr[i] - initArr[i], speed);
//                            if (attrArr[i] == 'opacity') {
//                                target.style["opacity"] = easeVars / 100;
//                                target.style["filter"] = "alpha(opacity:" + easeVars + ")";
//                                target.alpha = easeVars;
//                            }
//                            else {
//                                target.style[attrArr[i]] = attrArr[i] == "zIndex" ? Math.floor(easeVars) : Math.floor(easeVars) + "px";
//                            }
//                        }
//                        if (target.timer) {
//                            clearTimeout(target.timer);
//                        }
//                        if (t < speed) {
//                            target.timer = setTimeout(arguments.callee, 10);
//                            if (onUpdate) {
//                                onUpdate();
//                            }
//                        }
//                        else {
//                            if (!ifstop) {
//                                ifstop = true;
//                                clearTimeout(target.timer);
//                                if (onComplete) {
//                                    onComplete();
//                                }
//                            }
//                        }
//                    })();
//                }
//            }
//
//            function getStyle(ta, at) {
//                return ta.currentStyle ? ta.currentStyle[at] : getComputedStyle(ta, false)[at];
//            }
//        };
//        var Tween =
//        {
//            Linear: function (t, b, c, d) {
//                return c * t / d + b;
//            },
//            Expo: {
//                easeIn: function (t, b, c, d) {
//                    return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
//                },
//                easeOut: function (t, b, c, d) {
//                    return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
//                },
//                easeInOut: function (t, b, c, d) {
//                    if (t == 0) return b;
//                    if (t == d) return b + c;
//                    if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
//                    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
//                }
//            }
//        };
//        var $ = function (id) {
//            return document.getElementById(id);
//        };
//
//        var slide = function (id) {
//            var variable =
//            {
//                picList: null,
//                pics: null,
//                links: null,
//                titleBar: null,
//                titleLink: null,
//                count: 0,
//                flag: "",
//                playTime: 0,
//                duration: 0,
//                slideNum: [],
//                direction: "left",
//                index: 0
//            };
//
//            var init = function (id) {
//                variable.picList = $(id).getElementsByTagName("ul")[0];
//                variable.pics = variable.picList.getElementsByTagName("li");
//                variable.count = variable.pics.length;
//                variable.playTime = .8;
//                variable.duration = 3;
//                variable.picList.style.width = 568 * variable.count + "px";
//
//                clickEvent(id);
//                autoPlay();
//
//                variable.picList.onmouseover = function () {
//                    clearInterval(variable.flag);
//                };
//                variable.picList.onmouseout = function () {
//                    autoPlay();
//                }
//            };
//
//            var clickEvent = function (id) {
//                $("banner-left").onclick = function () {
//                    console.log(variable.index);
//                };
//            };
//
//            var autoPlay = function () {
//                variable.flag = setInterval
//                (
//                    function () {
//                        TweenLite
//                        (
//                            variable.picList,
//                            variable.playTime,
//                            {
//                                marginLeft: 0 - variable.index * 568,
//                                ease: Tween.Expo.easeOut,
//                                onComplete: function () {
//                                    if (variable.direction == "left") {
//                                        if (variable.index < variable.count - 1) {
//                                            variable.index++;
//                                        }
//                                        else {
//                                            variable.direction = "right";
//                                            variable.index--;
//                                        }
//                                    }
//                                    else {
//                                        if (variable.index > 0) {
//                                            variable.index--;
//                                        }
//                                        else {
//                                            variable.direction = "left";
//                                            variable.index++;
//                                        }
//                                    }
//                                }
//                            }
//                        );
//                    }, (variable.duration * 1000 + variable.playTime * 1000)
//                );
//            };
//            init(id);
//        };
//        slide(id);
//    };
//
//    exports.start = function(){
//        console.log(11);
//    }
//});

var PDmenu = function (box, speed) {
    var ul = box.find("ul");
    var arrow = box.find(".arrow");
    var li = ul.find("li");
    box.hover(function () {
        $(ul).slideDown(speed);
        $(arrow).html("&uarr;");
    }, function () {
        $(ul).slideUp(speed);
        $(arrow).html("&darr;");
    });
};
var categoryMenu = function () {
    $('.all-sort-list > .item').hover(function () {
        $(this).children('.item-list').css('display', 'block');
    }, function () {
        $(this).children('.item-list').css('display', 'none');
    });
};
var tabShift = function (box) {
    var allLi = $(box.children("ul").children("li"));
    var allDiv = $(box.children("div"));
    allLi.each(function (index) {
        var _this_li = $(this);
        _this_li.on("mouseover", function () {
            allDiv.removeClass("lesson-on");
            $(box.find(".on")).removeClass("on");
            allDiv.eq(index).addClass("lesson-on");
            _this_li.addClass("on");
        }).on("mouseout", function () {
        });
    });
};
function boxRotate(box) {
    box.hover(function () {
        var front = $($(this).find(".front"));
        var back = $($(this).find(".back"));
        front.fadeOut(100);
    }, function () {
        var front = $($(this).find(".front"));
        var back = $($(this).find(".back"));
        front.fadeIn(100);
    });
}

//滑动窗
function slider(id) {
    var TweenLite = function ($target, $duration, $vars) {
        var ease, onComplete, onUpdate, delay, vars = $vars, target = $target, speed = $duration;

        if (!target) {
            return false;
        }
        if (vars.ease) {
            ease = vars.ease;
            delete vars.ease;
        } else {
            ease = Tween.Linear;
        }
        if (vars.onComplete) {
            onComplete = vars.onComplete;
            delete vars.onComplete;
        }
        if (vars.onUpdate) {
            onUpdate = vars.onUpdate;
            delete vars.onUpdate;
        }
        if (vars.delay) {
            delay = vars.delay;
            delete vars.delay;
        }
        var ifstop = false;
        var attrArr = [];
        var curArr = [];
        var initArr = [];
        for (var at in vars) {
            attrArr.push(at);
            curArr.push(vars[at]);
            var ato = 0;
            switch (at) {
                case "opacity":
                    ato = parseInt(parseFloat(getStyle(target, 'opacity')) * 100);
                    if (isNaN(ato)) {
                        ato = 100;
                    }
                    break;
                default:
                    ato = parseInt(getStyle(target, at));
                    break;
            }
            initArr.push(ato);
        }
        if (delay) {
            if (target.delay) {
                clearTimeout(target.delay);
            }
            target.delay = setTimeout(run, delay * 1000);
        } else {
            run();
        }

        function run() {
            var s = (new Date()).getTime() / 1000;
            for (var attr in vars) {
                (function () {
                    var t = (new Date()).getTime() / 1000 - s;
                    for (var i = 0; i < attrArr.length; i++) {
                        var easeVars = ease(t, initArr[i], curArr[i] - initArr[i], speed);
                        if (attrArr[i] == 'opacity') {
                            target.style["opacity"] = easeVars / 100;
                            target.style["filter"] = "alpha(opacity:" + easeVars + ")";
                            target.alpha = easeVars;
                        }
                        else {
                            target.style[attrArr[i]] = attrArr[i] == "zIndex" ? Math.floor(easeVars) : Math.floor(easeVars) + "px";
                        }
                    }
                    if (target.timer) {
                        clearTimeout(target.timer);
                    }
                    if (t < speed) {
                        target.timer = setTimeout(arguments.callee, 10);
                        if (onUpdate) {
                            onUpdate();
                        }
                    }
                    else {
                        if (!ifstop) {
                            ifstop = true;
                            clearTimeout(target.timer);
                            if (onComplete) {
                                onComplete();
                            }
                        }
                    }
                })();
            }
        }

        function getStyle(ta, at) {
            return ta.currentStyle ? ta.currentStyle[at] : getComputedStyle(ta, false)[at];
        }
    };
    var Tween =
    {
        Linear: function (t, b, c, d) {
            return c * t / d + b;
        },
        Expo: {
            easeIn: function (t, b, c, d) {
                return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
            },
            easeOut: function (t, b, c, d) {
                return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
            },
            easeInOut: function (t, b, c, d) {
                if (t == 0) return b;
                if (t == d) return b + c;
                if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        }
    };
    var $ = function (id) {
        return document.getElementById(id);
    };

    var slide = function (id) {
        var variable =
        {
            picList: null,
            pics: null,
            links: null,
            titleBar: null,
            titleLink: null,
            count: 0,
            flag: "",
            playTime: 0,
            duration: 0,
            slideNum: [],
            direction: "left",
            index: 0
        };

        var init = function (id) {
            variable.picList = $(id).getElementsByTagName("ul")[0];
            variable.pics = variable.picList.getElementsByTagName("li");
            variable.count = variable.pics.length;
            variable.playTime = .8;
            variable.duration = 3;
            variable.picList.style.width = 568 * variable.count + "px";

            clickEvent(id);
            autoPlay();

            variable.picList.onmouseover = function () {
                clearInterval(variable.flag);
            };
            variable.picList.onmouseout = function () {
                autoPlay();
            }
        };

        var clickEvent = function (id) {
            $("banner-left").onclick = function () {
                console.log(variable.index);
            };
        };

        var autoPlay = function () {
            variable.flag = setInterval
            (
                function () {
                    TweenLite
                    (
                        variable.picList,
                        variable.playTime,
                        {
                            marginLeft: 0 - variable.index * 568,
                            ease: Tween.Expo.easeOut,
                            onComplete: function () {
                                if (variable.direction == "left") {
                                    if (variable.index < variable.count - 1) {
                                        variable.index++;
                                    }
                                    else {
                                        variable.direction = "right";
                                        variable.index--;
                                    }
                                }
                                else {
                                    if (variable.index > 0) {
                                        variable.index--;
                                    }
                                    else {
                                        variable.direction = "left";
                                        variable.index++;
                                    }
                                }
                            }
                        }
                    );
                }, (variable.duration * 1000 + variable.playTime * 1000)
            );
        };
        init(id);
    };
    slide(id);
}