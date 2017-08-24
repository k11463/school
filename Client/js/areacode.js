function chg_mailgold(){
    var a = $("input[name=speed]:checked");
    for(var i = 0; i < a.length; i++){
        console.log(a[i].id);
        if (a[i].id == "slow"){
            $("#mailgold").val(a[i].value) * 1;
        }
        if (a[i].id == "fast"){
            $("#mailgold").val(a[i].value) * 1;
        }
        if (a[i].id == "safe"){
            var b = $("#mailgold").val() * 1;
            b += a[i].value;
            $("#mailgold").val(b * 1);
        }
    }
}

function core_areacode(){
    $("input[name=speed]").on("change", chg_mailgold);
}