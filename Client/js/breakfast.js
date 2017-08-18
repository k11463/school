function chgopt(){
    $("#brk_select option").remove();
    var a = $("input[name=brk]:checked").val();
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
    var c = a * b;
    c_alltotal();
}

function chgbox(){
  var a = $("#soto").prop("checked");
  var b = $("#plus").prop("checked");
  var c = $("#soto").val();
  var d = $("#plus").val();
  var total = 0;
  if (a){
    $("#bag").val(c);
  }
  else{
    $("#bag").val(0);
  }
  if (b){
    $("#pp").val(d);
  }
  else{
    $("#pp").val(0);
  }
  c_alltotal();
}

function c_alltotal(){
  var a = $("#pp").val()/100 + 1;
  var total = ($("#total01").val()*1 + $("#bag").val()*1) * a;
  $("#alltotal").val(total);
}

function core_breakfast(){
    $("#alltotal").val(alltotal);
    chgopt();
    chgipt();
    $("input[type=radio]").on("change", chgopt);
    $("#brk_select").on("change", chgipt);
    $("#count").on("change", chgipt);
    $("input[type=checkbox]").on("change", chgbox);
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
