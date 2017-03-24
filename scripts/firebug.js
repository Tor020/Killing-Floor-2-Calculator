//ROUNDED for Berserker, Demolitionist, Firebug, SWAT 
var caulk = 10;
var flame = 21;
var micro = 14;
var spitfire = 40;

var incend = 27;
var pelletinc = 9;

var bringTH =.35;

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


// Shorthand for $( document ).ready()
$(function() {
    {
        plvl = $("#perkLVL").val();
        plvl = plvl * .008;

        calc1 = (caulk + (plvl * caulk));
        calc2 = (flame + (plvl * flame));
        calc3 = (micro + (plvl * micro));
        calc4 = (incend + (plvl * incend));
        calc6 = (spitfire + (plvl * spitfire));

        calc1 = Math.round(calc1);
        calc2 = Math.round(calc2);
        calc3 = Math.round(calc3);
        calc4 = Math.round(calc4);
        calc5 = calc4 * pelletinc;
        calc6 = Math.round(calc6);

        calc1a = (calc1 *.08);
        calc2a = (calc2 *.08);
        calc3a = (calc3 *.08);        
        calc4a = (calc4 *.07);
        calc6a = (calc6 *.08);


        calc1a = Math.round(calc1a);
        calc2a = Math.round(calc2a);
        calc3a = Math.round(calc3a);
        calc4a = Math.round(calc4a);
        calc6a = Math.round(calc6a);

        $(".caulk").html(calc1);
        $(".flame").html(calc2);
        $(".micro").html(calc3);
        $(".tg1").html(calc4);  
        $(".tg2").html(calc5);
        $(".caulkaft").html(calc1a);
        $(".flameaft").html(calc2a);
        $(".microaft").html(calc3a);
        $(".tgaft").html(calc4a);
        $(".spitaft").html(calc6a);
        $(".spit").html(calc6);
    }

});

$("#perkLVL, #bringTH").on("click change blur focus", function() {
    if ($('#bringTH').is(':checked')) {
        plvl = $("#perkLVL").val();
        plvl = plvl * .008;
   

        calc1 = (caulk + (plvl * caulk) + (bringTH * caulk));
        calc2 = (flame + (plvl * flame) + (bringTH * flame));
        calc3 = (micro + (plvl * micro) + (bringTH * micro));
        calc4 = (incend + (plvl * incend) + (bringTH * incend));
        calc6 = (spitfire + (plvl * spitfire) + (bringTH * spitfire));

        calc1 = Math.round(calc1);
        calc2 = Math.round(calc2);
        calc3 = Math.round(calc3);
        calc4 = Math.round(calc4);
        calc5 = calc4 * pelletinc;
        calc6 = Math.round(calc6);

        calc1a = (calc1 *.08);
        calc2a = (calc2 *.08);
        calc3a = (calc3 *.08);        
        calc4a = (calc4 *.07);
        calc6a = (calc6 *.08);


        calc1a = Math.round(calc1a);
        calc2a = Math.round(calc2a);
        calc3a = Math.round(calc3a);
        calc4a = Math.round(calc4a);
        calc6a = Math.round(calc6a);

        $(".caulk").html(calc1);
        $(".flame").html(calc2);
        $(".micro").html(calc3);
        $(".tg1").html(calc4);  
        $(".tg2").html(calc5);
        $(".caulkaft").html(calc1a);
        $(".flameaft").html(calc2a);
        $(".microaft").html(calc3a);
        $(".tgaft").html(calc4a);
        $(".spitaft").html(calc6a);
        $(".spit").html(calc6);

    } else {
        plvl = $("#perkLVL").val();
        plvl = plvl * .008;

        calc1 = (caulk + (plvl * caulk));
        calc2 = (flame + (plvl * flame));
        calc3 = (micro + (plvl * micro));
        calc4 = (incend + (plvl * incend));
        calc6 = (spitfire + (plvl * spitfire));

        calc1 = Math.round(calc1);
        calc2 = Math.round(calc2);
        calc3 = Math.round(calc3);
        calc4 = Math.round(calc4);
        calc5 = calc4 * pelletinc;
        calc6 = Math.round(calc6);

        calc1a = (calc1 *.08);
        calc2a = (calc2 *.08);
        calc3a = (calc3 *.08);        
        calc4a = (calc4 *.07);
        calc6a = (calc6 *.08);


        calc1a = Math.round(calc1a);
        calc2a = Math.round(calc2a);
        calc3a = Math.round(calc3a);
        calc4a = Math.round(calc4a);
        calc6a = Math.round(calc6a);

        $(".caulk").html(calc1);
        $(".flame").html(calc2);
        $(".micro").html(calc3);
        $(".tg1").html(calc4);  
        $(".tg2").html(calc5);
        $(".caulkaft").html(calc1a);
        $(".flameaft").html(calc2a);
        $(".microaft").html(calc3a);
        $(".tgaft").html(calc4a);
        $(".spitaft").html(calc6a);
        $(".spit").html(calc6);
    }
});




