function chgopt(){
    $("#brk_select option").remove();
    var a = $("input[name=brk]:checked").val();
    console.log(a);
    for(var i = 0; i < opt[a].length; i++){
        $("#brk_select").append("<option value='" + opt[a][i].price + "'>" + opt[a][i].name + "</option>");
    }
    chgipt();
}



function chgipt(){
    var a = $("#brk_select option:selected").val();
    var b = $("#count").val();
    $("#price").val(a);
    $("#total01").val(a * b);
}

function core_breakfast(){
    chgopt();
    chgipt();
    $("input").on("change", chgopt);
    $("#brk_select").on("change", chgipt);
    $("#count").on("change", chgipt);
}

var opt = [
    [
        {
            "name": "燒餅",
            "price": 10
        },
        {
            "name": "油條",
            "price": 15
        },
        {
            "name": "豆漿",
            "price": 12
        }
            
    ],
    [
        {
            "name": "漢堡",
            "price": 20
        },
        {
            "name": "薯條",
            "price": 25
        },
        {
            "name": "可樂",
            "price": 15
        },
        {
            "name": "奶茶",
            "price": 25
        }
    ],
    [
        {
            "name": "馬鈴薯",
            "price": 50
        },
        {
            "name": "玉米濃湯",
            "price": 35
        },
        {
            "name": "起司培根",
            "price": 25
        },
        {
            "name": "奶昔",
            "price": 15
        }
    ]
]