//ROUNDED for Berserker, Demolitionist, Firebug, SWAT and 



//base damage of each of the core guns
var grenp = 30;
var m16Bull = 30;
var rpg =  750;
var m79 =  225;



//perk 
var bomba = .25;
var fragr = .30;
var himpa = .20;  //direct hits damage to any area
var apr = .50;    //direct hts to critical areas         150 damage base
// doesn't increase damage var madBo = .25;  //Only active during ZED time


$(function(){
	{

	//perk level
	var plvl = $("#perkLVL").val();





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