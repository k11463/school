function main(){
    $("#tabs").tabs( { active:1 } );
    
    $("#core").load("Client/html/core.html", core_main);
    $("#breakfast").load("Client/html/breakfast.html", core_breakfast);
    $("#aaaaaa").load("Client/html/aaaaaa.html", core_aaaaaa);
}

$(document).ready(main);