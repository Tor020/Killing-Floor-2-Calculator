//ROUNDED UP for Commando, Support, Gunslinger and Sharpshooter.		

//bone breaker
var boneB = .20;
//bone breaker with arms and legs
var boneBal = .50;
//rackem
var rack = 0;


//base damage of each of the core guns
var rev18 = 30;
var m1911 = 50;
var deagle = 91;
var mag500 = 150;
var winch = 80;
var hmtp = 20;
var grenp = 30;

var knifeli = 32;
var knifehe = 64;
var knifesta = 15;
$(function() {
    {
    	$("#rackem").hide();
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;

        calc1 = rev18 + (plvl * rev18);
        calc2 = m1911 + (plvl * m1911);
        calc3 = deagle + (plvl * deagle);
        calc4 = mag500 + (plvl * mag500);
        calc5 = winch + (plvl * winch);
        calc6 = hmtp + (plvl * hmtp);
        calc7 = grenp + (plvl * grenp);

        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);
        calc7 = Math.ceil(calc7);

        $(".rev1858").html(calc1);
        $(".m19").html(calc2);
        $(".de1").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".hmt").html(calc6);
        $(".hx25").html(calc7);

        calc7 = (calc7 * 7);
        $(".hx25a").html(calc7)


    }

});

//this function prevents inputs more than 25
$('#perkLVL').on('keyup keydown', function(e) {
    //console.log($(this).val() > 25)
    if
    //e.keyCode != 46 aka delete
    //e.keyCode != 8 aka backspace
    ($(this).val() > 25 && e.keyCode != 46 && e.keyCode != 8) {
        e.preventDefault();
        $(this).val(25);
    }
});

$('#rackem').on('keyup keydown', function(e) {
  //  console.log($(this).val() > 5)
    if
    //e.keyCode != 46 aka delete
    //e.keyCode != 8 aka backspace
    ($(this).val() > 5 && e.keyCode != 46 && e.keyCode != 8) {
        e.preventDefault();
        $(this).val(5);
    }
});






$("#perkLVL, #chkBone, #rackemchk, #rackem").on("click change blur focus", function() {
    if ($('#chkBone').is(':checked')) {	
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;
      

        calc1 = rev18 + (plvl * rev18) + (rev18 * boneB);
        calc2 = m1911 + (plvl * m1911) + (m1911 * boneB);
        calc3 = deagle + (plvl * deagle) + (deagle * boneB);
        calc4 = mag500 + (plvl * mag500) + (mag500 * boneB);
        calc5 = winch + (plvl * winch) + (winch * boneB);
        calc6 = hmtp + (plvl * hmtp) + (hmtp * boneB);
        calc7 = grenp + (plvl * grenp) + (grenp * boneB);

        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);
        calc7 = Math.ceil(calc7);

        $(".rev1858").html(calc1);
        $(".m19").html(calc2);
        $(".de1").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".hmt").html(calc6);
        $(".hx25").html(calc7);

        calc7 = (calc7 * 7);
        $(".hx25a").html(calc7);

    } 





    else if ($('#rackemchk').is(':checked')) {
    	


        plvl = $("#perkLVL").val();
        plvl = plvl * .01;
        rack = $("#rackem").val();
        rack = rack * .1;
        $('#rackem').show();

        


        calc1 = rev18 + (plvl * rev18) + (rack * rev18);
        calc2 = m1911 + (plvl * m1911) + (rack * m1911);
        calc3 = deagle + (plvl * deagle) + (rack * deagle);
        calc4 = mag500 + (plvl * mag500) + (rack *mag500);
        calc5 = winch + (plvl * winch) + (rack * winch);
        calc6 = hmtp + (plvl * hmtp) + (rack * hmtp);
        calc7 = grenp + (plvl * grenp) + (rack * grenp);

        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);
        calc7 = Math.ceil(calc7);

        $(".rev1858").html(calc1);
        $(".m19").html(calc2);
        $(".de1").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".hmt").html(calc6);
        $(".hx25").html(calc7);

        calc7 = (calc7 * 7);
        $(".hx25a").html(calc7);

    }



    else



     {
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;
        $('#rackem').hide()

        calc1 = rev18 + (plvl * rev18);
        calc2 = m1911 + (plvl * m1911);
        calc3 = deagle + (plvl * deagle);
        calc4 = mag500 + (plvl * mag500);
        calc5 = winch + (plvl * winch);
        calc6 = hmtp + (plvl * hmtp);
        calc7 = grenp + (plvl * grenp);

        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);
        calc7 = Math.ceil(calc7);

        $(".rev1858").html(calc1);
        $(".m19").html(calc2);
        $(".de1").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".hmt").html(calc6);
        $(".hx25").html(calc7);

        calc7 = (calc7 * 7);
        $(".hx25a").html(calc7);

    }
});