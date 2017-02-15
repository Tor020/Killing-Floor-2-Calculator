//ROUNDED for Berserker, Demolitionist, Firebug, SWAT 
var caulk = 10;
var flamef = 21;
var micro = 14;

var incend = 27;
var pelletinc = 9;


var knifeli = 32;
var knifehe = 64;
var knifesta = 15;


// Shorthand for $( document ).ready()
$(function() {
    {
        plvl = $("#perkLVL").val();
        plvl = plvl * .008;

        calc1 = (varm + (plvl * varm));
        calc2 = (ak47 + (plvl * ak47));
        calc3 = (scar + (plvl * scar));

        calc1 = Math.round(calc1);
        calc2 = Math.round(calc2);
        calc3 = Math.round(calc3);

        $(".res1").html(calc1);
        $(".res2").html(calc2);
        $(".res3").html(calc3);
    }

});

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