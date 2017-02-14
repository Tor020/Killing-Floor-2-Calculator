//ROUNDED for Berserker, Demolitionist, Firebug, SWAT and 



//base damage of each of the core guns
var grenp = 30;
var c4= 820;
var rpg =  750;
var m79 =  225;

//On direct hits ballistic damage is always applied. 

//perk 
var bomba = .25;


var fragr = .30; //reduces damage done.




var himpa = .20;  //direct hits damage to any area
var apr = .50;    //direct hts to critical areas         150 damage base
// doesn't increase damage var madBo = .25;  //Only active during ZED time


$(function(){
	{

	//perk level
	var plvl = $("#perkLVL").val();

        calc1 = grenp + (plvl * grenp);
        calc2 = m79 + (plvl * m79);
        calc3 = rpg + (plvl * rpg);
        calc4 = c4 + (plvl * c4);



        calc1 = Math.round(calc1);
        calc2 = Math.round(calc2);
        calc3 = Math.round(calc3);
        calc4 = Math.round(calc4);


        $(".hx25").html(calc1);
        $(".m79").html(calc2);
        $(".rpg").html(calc3);
        $(".c4").html(calc4);
        $(".m16").html(calc2;


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