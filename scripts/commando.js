/*
With each next damage modification associated with perk, the base weapon damage will be increased by (base damage) x damage modification value. 
Amount of times to increase base damage will be depending on amount of damage bonuses. Sum of all damage adjustments will be either 
ROUNDED or ROUNDED UP - 
//ROUNDED for Berserker, Demolitionist, Firebug, SWAT and 
//ROUNDED UP for Commando, Support, Gunslinger and Sharpshooter.				
*/
//base damage of each of the core guns
var varm = 30;
var ak47 = 40;
var scar = 50;

var knifeli = 32;
var knifehe = 64;
var knifesta = 15;
//perk 
var hpr = .25;
var clco = 1.10;
//perk level
var plvl = $("#perkLVL").val();
//variable initializations for calculations
var calc1 = 0;
var calc2 = 0;
var calc3 = 0;

// Shorthand for $( document ).ready()
$(function() {
    {
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;

        calc1 = (varm + (plvl * varm));
        calc2 = (ak47 + (plvl * ak47));
        calc3 = (scar + (plvl * scar));

        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);

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

$("#perkLVL").on("click change blur focus", function() {
    if ($('#chkHPR').is(':checked')) {
        plvl = $("#perkLVL").val();
   
        plvl = plvl * .01;
   

        calc1 = (varm + (hpr * varm) + (plvl * varm));

        calc2 = (ak47 + (hpr * ak47) + (plvl * ak47));
        calc3 = (scar + (hpr * scar) + (plvl * scar));
        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);

        $(".res1").html(calc1);
        $(".res2").html(calc2);
        $(".res3").html(calc3);
    } else {
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;

        calc1 = (varm + (plvl * varm));
        calc2 = (ak47 + (plvl * ak47));
        calc3 = (scar + (plvl * scar));

        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);

        $(".res1").html(calc1);
        $(".res2").html(calc2);
        $(".res3").html(calc3);
    }
});


$("#chkHPR").change(function() {
    if ($('#chkHPR').is(':checked')) {
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;

        calc1 = (varm + (hpr * varm) + (plvl * varm));
        calc2 = (ak47 + (hpr * ak47) + (plvl * ak47));
        calc3 = (scar + (hpr * scar) + (plvl * scar));


        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);

        $(".res1").html(calc1);
        $(".res2").html(calc2);
        $(".res3").html(calc3);
    } else {
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;

        calc1 = (varm + (plvl * varm));
        calc2 = (ak47 + (plvl * ak47));
        calc3 = (scar + (plvl * scar));

        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);

        $(".res1").html(calc1);
        $(".res2").html(calc2);
        $(".res3").html(calc3);
    }
});