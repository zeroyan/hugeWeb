$(function(){
    //辅助函数
    function getObjSize(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };
    var overlay = function(modal_id){
        var e1 = document.getElementById(modal_id);
        e1.style.visibility =  (e1.style.visibility == "visible"  ) ? "hidden" : "visible";
    };

    var drawImage = function(context, img, x, y, w, h){
        context.drawImage(img,x,y,w,h);
    };
    var writeText = function(context, text, x, y, algin, font, color){
        context.font = font;
        context.fillStyle = color;
        context.textAlign = algin;
        context.fillText(text,x,y);
    };

    var drawSector = function(id, score){
        var word = "";
        var color = "";
        if(score <= 20){
            word = "保障水平堪忧";
            color = "#ff4a35";
        }else if(score > 20 && score <= 50){
            word = "保障水平一般";
            color = "#ff9a02";
        }else if(score > 50 && score <= 90){
            word = "保障水平适中";
            color = "#badd11";
        }else if(score > 90){
            word = "保障水平良好";
            color = "##04c896";
        }
        //console.log(datas);

        var canvas = document.getElementById(id);
        if (canvas == null){
            return false;
        }
        var context = canvas.getContext("2d");
        var width = canvas.width;
        var height = canvas.height;
        outline = new Image;
        outline.src = "./images/sector_outline.png";
        outline.onload = function(){
            drawImage(context,outline,width*0.05,1,width*0.9,width*0.64);

            var circle_x = width/2;
            var circle_y = height-130;
            start_angle = 0.9*Math.PI;
            context.beginPath();
            context.arc(circle_x,circle_y,170,0.9*Math.PI,2.11*Math.PI,false);
            context.lineWidth = 1;
            context.strokeStyle = "#cccccc";
            context.stroke();
            context.closePath();

            context.beginPath();
            context.arc(circle_x,circle_y,200,0.9*Math.PI,2.11*Math.PI,false);
            context.lineWidth = 1;
            context.strokeStyle = "#cccccc";
            context.stroke();
            context.closePath();
            writeText(context,"BETA",circle_x,canvas.height-230,"center","2rem Calibri", "white");
            writeText(context,score,circle_x,canvas.height-120,"center","7rem Calibri",color);
            writeText(context,word,circle_x,canvas.height-90,"center","1.5rem Calibri",color);
            writeText(context,"评估时间:2015-07-07",circle_x,canvas.height-50,"center","1.5rem Calibri","gray");
            start_angle = 0.9*Math.PI;
            var draw_result_line = setInterval(function(){
                context.beginPath();
                context.arc(circle_x,circle_y,200,0.9*Math.PI,start_angle+0.01*Math.PI,false);//终点需要改变
                context.lineWidth = 5;
                context.strokeStyle = "rgb(40,196,149)";
                context.stroke();
                context.closePath();

                var point_x = circle_x+200*Math.cos(start_angle);
                var point_y = circle_y+200*Math.sin(start_angle);
                context.clearRect(point_x-3*1.5,point_y-3*1.5,10,10);
                context.beginPath();
                context.arc(point_x,point_y,3,2*Math.PI,false);
                context.strokeStyle = "rgb(40,196,149)";
                context.stroke();
                context.closePath();
                context.fillStyle = "#EDEDED";
                context.fill();

                start_angle += 0.009*Math.PI;
                if(start_angle > (0.9+1.21*score/100)*Math.PI){
                    clearInterval(draw_result_line);
                }
            },20);
        };
    };

    var drawSemiCircle = function(id, arr){
        var canvas = document.getElementById(id);
        if (canvas == null){
            return false;
        }
        var context = canvas.getContext("2d");
        var width = canvas.width;
        var height = canvas.height;
        outline = new Image;
        outline.src = "./images/semi_legend.jpg";
        outline.onload = function(){
            drawImage(context, outline, width-200, height/2 - 70, 200, 140);
        };
        writeText(context,"住院",90,80,"center ","1.4rem SimSun","black");
        writeText(context,"门诊",190,80,"center ","1.4rem SimSun","black");
        var circle_x = 150;
        var circle_y = (height/2)+20;
        context.beginPath();
        context.arc(circle_x,circle_y,130,0.47*Math.PI,1.53*Math.PI,false);
        context.closePath();
        context.lineWidth = 1;
        context.strokeStyle = "#cccccc";
        context.stroke();
        context.beginPath();
        context.arc(circle_x,circle_y,130,0.47*Math.PI,(0.47+arr[0])*1.04*Math.PI,false);
        //var point_x = 70+55*Math.cos((0.47+arr[0])*1.04*Math.PI);
        //var point_y = 80+55*Math.sin((0.47+arr[0])*1.04*Math.PI);
        context.lineTo(circle_x+12, circle_y+130*Math.sin((0.47+arr[0])*1.04*Math.PI));
        //context.quadraticCurveTo(point_x + 10*arr[0], point_y - 10*arr[0], 70-point_x, point_y);
        //context.quadraticCurveTo(70-point_x + 10*arr[0], point_y + 10*arr[0], 75, point_y);
        //context.quadraticCurveTo();
        context.closePath();
        context.lineWidth = 1;
        context.strokeStyle = "#cccccc";
        context.fillStyle = "rgb(252,137,162)";
        context.stroke();
        context.fill();

        circle_x += 30;
        context.beginPath();
        context.arc(circle_x,circle_y,130,1.47*Math.PI,0.53*Math.PI,false);
        context.closePath();
        context.lineWidth = 1;
        context.strokeStyle = "#cccccc";
        context.fillStyle = "rgb(176,51,78)";
        context.stroke();
        context.fill();
        context.beginPath();
        context.arc(circle_x,circle_y,130,1.47*Math.PI,(1.47+arr[1])*1.04*Math.PI,false);
        //context.arc(85,80,55,1.47*Math.PI,2*Math.PI,false);
        //var point_x = 85+55*Math.cos((1.47+arr[1])*1.04*Math.PI);
        //var point_y = 80+55*Math.sin((1.47+arr[1])*1.04*Math.PI);
        //context.quadraticCurveTo(point_x - 10*arr[1], point_y + 10*arr[1], (85+point_x)/2, point_y);
        //context.quadraticCurveTo((85+point_x)/2, point_y, 85, 80);
        context.lineTo(circle_x-12, circle_y+130*Math.sin((1.47+arr[1])*1.04*Math.PI));
        context.closePath();
        context.lineWidth = 1;
        context.strokeStyle = "#cccccc";
        context.fillStyle = "#ffffff";
        context.stroke();
        context.fill();
    };
    var drawColumn = function(id, dict){
        var canvas = document.getElementById(id);
        if (canvas == null){
            return false;
        }
        var context = canvas.getContext("2d");
        var width = canvas.width;
        var height = canvas.height;
        //console.log(dict);
        var dict_len = getObjSize(dict);
        //console.log(dict_len);
        var sum = 0;
        var i = 1;
        var val_max = 0;
        for(var key in dict){
            var val = Math.round(dict[key]);
            if(val > val_max){
                val_max = val;
            }
        }
        for(var key in dict){
            //console.log(key);
            var val = dict[key];
            val = Math.round(val);
            if(typeof(val) == "number"){
                sum += val;
                x = i * (width/dict_len)-80;
                context.fillStyle = "rgb(253,137,161)";
                context.fillRect(x-20,height-40,40,-(300*val/val_max));
                context.beginPath();
                context.moveTo(10, height-39);
                context.lineTo(width-10, height-39);
                context.closePath();
                context.lineWidth = 2;
                //context.strokeStyle = "rgb(253,137,161)";
                context.strokeStyle = "#cccccc";
                context.stroke();
                writeText(context,key,x-50,height-10,"center ","1.4rem sans-serif","black");
                writeText(context,val.toString()+"万",x-20,height-(300*val/val_max)-50,"center ","1.4rem SimSun","black");
            }
            i += 1;
        }
        writeText(context,"一共需要"+sum+"万",10,35,"center ","1.6rem SimSun","black");
    };

    //dom加载完后数据注入
    shiftNav($("#res_article_analysis_nav_btns"), $(".res-article-analysis div"));
    var docWidth = document.documentElement.clientWidth;
    var canvas_dou = docWidth*2*0.9;
    //console.log(docWidth);
    $(".res-article-analysis canvas").attr({"width":canvas_dou, "height":"440"});
    drawSector("sector_diagram", 1);
    $(".res-detail p").text("这是描述");
    drawSemiCircle("semicircle_diagram_1",[0.6,0.4]);
    drawColumn("column_diagram_1_1", {"个人花销":2,"子女抚养":4,
                                "父母赡养":2,"房屋贷款":10});
    drawColumn("column_diagram_1_2", {"子女教育":2,"子女抚养":3.5,
                                "父母赡养":1.1,"家庭债务":2.5});
    drawSemiCircle("semicircle_diagram_2",[0.8,0.2]);
    drawColumn("column_diagram_2_1", {"个人花销":4.4,"子女抚养":2.5,
                                        "父母赡养":2.4,"房屋贷款":5.8});
    drawColumn("column_diagram_2_2", {"子女教育":2,"子女抚养":1,
                                "父母赡养":0.6,"家庭债务":1.2});
    drawSemiCircle("semicircle_diagram_3",[0.4,0.8]);


    $("#consult").click(function(e){
        e.stopPropagation();
        $('#confirm_consult_modal').modal({
            relatedTarget: this,
            onConfirm: function() {
                changeModal();
                var e1 = document.getElementById("consult_modal");
                e1.style.visibility = "visible";
            },
            onCancel: function() {
                location.href = 'tel://15110230643';
                //var e1 = document.getElementById("consult_modal");
                //e1.style.visibility = "visible";
            }
        });
        //var e1 = document.getElementById("consult_modal");
        //e1.style.visibility = "visible";
        //alert("btn");
    });
    $("#consult_modal").click(function(e){
        e.stopPropagation();
        var div_list = $('#consult_modal>div');
        overlay("consult_modal");
        $(div_list[1]).css("display","none");
        $(div_list[0]).css("display","block");
        //alert("big")
    });
    $(".modal-conult-wechat").click(function(e){
        e.stopPropagation();
        alert("微信");
        var div_list = $('#consult_modal>div');
        $(div_list[0]).css("display","none");
        $(div_list[1]).css("display","block");
        //var div_1 = $("#consult_modal").find("div").eq(0);
        //var div_2 = $("#consult_modal").find("div").eq(1);
        //console.log(div_1, div_2);
    });
    $(".modal-conult-phone").click(function(e){
        e.stopPropagation();
        alert("电话");
    });
});