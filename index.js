function main(){
    $("#tabs").tabs( { active:3 } );
    
    $("#core").load("Client/html/core.html", core_main);
    $("#breakfast").load("Client/html/breakfast.html", core_breakfast);
    $("#season").load("Client/html/season.html", core_season);
    $("#areacode").load("Client/html/areacode.html", core_areacode);
}

$(document).ready(main);