var shiftNav = function(jq_node, jq_content){
    var btns = jq_node.find("button");
    for(var i=0; i<btns.length; i+=1){
        //console.log($(btns[i]));
        $(btns[i]).click(function(index){
            return function(){
                //for(b in $($(this).parent().parent().find("button"))){
                //    console.log(b)
                //    $(b).removeClass("app-btn-active");
                //}
                var this_btns = $(this).parent().parent().find("button");
                for(var k=0; k<this_btns.length; k+=1){
                    $(this_btns[k]).removeClass("app-btn-active");
                }
                $(this).addClass("app-btn-active");
                //console.log(jq_content.length);
                for(var j=0; j<jq_content.length; j+=1){
                    $(jq_content[j]).css("display","none");
                }
                $(jq_content[index]).css("display","block");
            }
        }(i));
    }
};