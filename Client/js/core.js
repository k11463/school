function core_main(){
    $("input[type=button]").button();
    $("input[type=button]").css({
        "font-family": "'Noto Sans TC', sans-serif"
    });
    
    $("#ajaxGo").on("click", doAjax);
    $("#chgtitle").on("click", chgtitle);
    $("#addopt").on("click", addopt);
    $("#delopt").on("click", delopt);
    $("#delallopt").on("click", delallopt);
}

function chgtitle(){
    var msg = $("#msg").val();
    $("#title").text(msg);
}

function doAjax(){
    var msg = $("#msg").val()
    $("#shortMsg").val(msg);
    var firstname = $("#firstName").val();
    $("#serverMsg").val(msg+firstname);
    //console.log($("input[name=lang]:checked").val());
    var interest = $("input[name=interest]:checked");
    var s = "共有" + interest.length + "項興趣被選到!\n";
    var allinterest = $("input[name=interest]");
    for(var i = 0; i < interest.length; i++){
        for(var j = 0; j < allinterest.length; j++){
            if (interest[i].value == allinterest[j].value){
                s += "第" + (j+1) + "項 " + allinterest[j].id + "被選擇\n";
            }
        }
    }
    
    var id = $("#rank option:selected").index();
    var va = $("#rank option:selected").val();
    var txt = $("#rank option:selected").text();
    s += "第" + (id+1) + "項\n值=" + va + "\n內容=" + txt;
    $("#serverMsg").val(s);
    console.log(s);
    
    /*var a = $("#rank option");
        
    a += $("#rank").append("<option value='D'>第四名</option>");
    
    $("#rank").find(":selected").each(function(){
        console.log(this.text + "=" + this.value);
    })*/
}

function addopt(){
    var a = $("#msg").val();
    var b = $("#firstName").val();
    $("#rank").append("<option value='" + a + "'>" + b + "</option>");
}

function delopt(){
    $("#rank").find(":selected").remove();
}

function delallopt(){
    $("#rank option").remove();
}