var mp7 = 16;
var mp5 = 25;
var p90 = 30;
var kriss = 33;
var hmt201  = 20;

var knifeli = 32;
var knifehe = 64;
var knifesta = 15;

//this function prevents inputs more than 25
$('#perkLVL').on('keyup keydown', function(e) {
    console.log($(this).val() > 25)
    if
    //e.keyCode != 46 aka delete
    //e.keyCode != 8 aka backspace
    ($(this).val() > 25 && e.keyCode != 46 && e.keyCode != 8) {
        e.preventDefault();
        $(this).val(25);
    }
});

$(function() {
    {
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;

        calc1 = (mp7 + (plvl * mp7));
        calc2 = (mp5 + (plvl * mp5));
        calc3 = (p90 + (plvl * p90));
        calc4 = (kriss + (plvl * kriss));
        calc5 = (hmt201 + (plvl * hmt201));

        calc1 = Math.round(calc1);
        calc2 = Math.round(calc2);
        calc3 = Math.round(calc3);
        calc4 = Math.round(calc4);
        calc5 = Math.round(calc5)

        $(".mp7").html(calc1);
        $(".mp5").html(calc2);
        $(".p90").html(calc3);
        $(".kris").html(calc4);
        $(".hmtsmg").html(calc5);
    }

});

$("#perkLVL").on("click change blur focus", function() {
{
	    plvl = $("#perkLVL").val();
        plvl = plvl * .01;

        calc1 = (mp7 + (plvl * mp7));
        calc2 = (mp5 + (plvl * mp5));
        calc3 = (p90 + (plvl * p90));
        calc4 = (kriss + (plvl * kriss));
        calc5 = (hmt201 + (plvl * hmt201));

        calc1 = Math.round(calc1);
        calc2 = Math.round(calc2);
        calc3 = Math.round(calc3);
        calc4 = Math.round(calc4);
        calc5 = Math.round(calc5)

        $(".mp7").html(calc1);
        $(".mp5").html(calc2);
        $(".p90").html(calc3);
        $(".kris").html(calc4);
        $(".hmtsmg").html(calc5);
    }
   });
