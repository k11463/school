function chg_mailgold(){
    var a = $("input[name=speed]:checked");
    for(var i = 0; i < a.length; i++){
        console.log(a[i].id);
        if (a[i].id == "slow"){
            $("#mailgold").val(a[i].value);
        }
        if (a[i].id == "fast"){
            $("#mailgold").val(a[i].value);
        }
        if (a[i].id == "safe"){
            var b = $("#mailgold").val() * 1;
            b = b + a[i].value * 1;
            $("#mailgold").val(b);
        }
    }
}

function show_city(id){
    var res = id.split("\n");
    //$("#city option").remove();
    for (var i in res){
        var res_cut = res[i].split(" ");
        var opt = new Option ( res_cut[0], res_cut[1] );
        $("#city").append(opt);
    }
}

function get_address(){
    var url = "Server/areaCode/000County.txt";
    var oData = {
        account: $("#account").val(),
        pass: $("#pass").val()
    };
    
    $.ajax({
        url: url,
        type: "GET",
        data: oData,
        success: show_city,
        contentType: "text/plain",
        xhrFields: { withCredentials: false }
    });
}

function chg_city(){
    var a = $("#city option:checked");
    get_country(a[0].value);
    console.log(a[0].value);
}

function get_country(val){
    var url = "Server/areaCode/" + val + ".txt";
    var oData = {
        account: $("#account").val(),
        pass: $("#pass").val()
    };
    
    $.ajax({
        url: url,
        type: "GET",
        data: oData,
        success: show_country,
        contentType: "text/plain",
        xhrFields: { withCredentials: false }
    });
}

function show_country(id){
    var res = id.split("\n");
    for (var i in res){
        var res_cut = res[i].split(" ");
        var opt = new Option ( res_cut[0], res_cut[1] );
        $("#country").append(opt);
    }
}

function core_areacode(){
    $("input[name=speed]").on("change", chg_mailgold);
    $("input[type=button]").button();
    $("input[type=button]").css({
        "font-family": "'Noto Sans TC', sans-serif"
    });
    get_address();
    $("#city").on("change", chg_city);
}