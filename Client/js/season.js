function chgopt1(){
    $("#sea_select option").remove();
    var a = $("input[name=sea]:checked").val();
    for(var i = 0; i < sea[a].length; i++){
        $("#sea_select").append("<option value='" + sea[a][i].price + "'>" + sea[a][i].name + "</option>");
    }
    chgipt1();
}

function chgipt1(){
    var a = $("#sea_select option:selected").val();
    var b = $("#count1").val();
    var oku = parseInt(b / 4);
    $("#oku").val(oku);
    $("#price1").val(a);
    $("#total01_1").val( a * (b - oku) );
    var c = a * b;
    c_alltotal1();
}

function chgbox1(){
  var a = $("#soto1").prop("checked");
  var b = $("#plus1").prop("checked");
  var total = 0;
  var a_true = a ? $("#soto1").val() : 0;
  var b_true = b ? $("#plus1").val() : 0;
  $("#bag1").val(a_true);
  $("#pp1").val(b_true);
  c_alltotal1();
}

function c_alltotal1(){
  var a = $("#pp1").val()/100 + 1;
  var total = ($("#total01_1").val()*1 + $("#bag1").val()*1) * a;
  $("#alltotal1").val(total);
}

function core_season(){
    chgopt1();
    chgipt1();
    $("input[name=sea]").on("change", chgopt1);
    $("#sea_select").on("change", chgipt1);
    $("#count1").on("change", chgipt1);
    $("input[name=sea_check]").on("change", chgbox1);
}

var sea = [
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
