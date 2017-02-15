//ROUNDED for Berserker, Demolitionist, Firebug, SWAT and 
//base damage of each of the core guns
var grenp = 30;
var c4= 820;
var rpg =  750;
var m79 =  225;


//perk 
var bomba = .25;


var fragr = .30; //reduces damage done.



                    //On direct hits ballistic damage is always applied. 150 damage base 
var himpa = .20;    //direct hits damage to any area
var apr = .50;    //direct hts to critical areas         



$(function(){
	{

	//perk level
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;

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
        $(".m16").html(calc2);


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



$("#frag, #bombar, #perkLVL").on("click change blur focus", function() {
    
if  ($('#bombar').is(':checked') && $('#frag').is(':checked'))
    {

            
       console.log("2 boxes checked")
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;

        calc1 = grenp + (plvl * grenp) + (bomba * grenp) - (fragr * grenp);
        calc2 = m79 + (plvl * m79) + (bomba * m79) - (fragr * m79);
        calc3 = rpg + (plvl * rpg) + (bomba * rpg) - (fragr * rpg);
        calc4 = c4 + (plvl * c4) + (bomba * c4) - (fragr * c4);

        calc1 = Math.round(calc1);
        calc2 = Math.round(calc2);
        calc3 = Math.round(calc3);
        calc4 = Math.round(calc4);

      

        $(".hx25").html(calc1);
        $(".m79").html(calc2);
        $(".rpg").html(calc3);
        $(".c4").html(calc4);
        $(".m16").html(calc2);

 }

 else if 

   ($('#frag').is(':checked'))
    {
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;

        calc1 = grenp + (plvl * grenp) - (fragr * grenp);
        calc2 = m79 + (plvl * m79) - (fragr * m79);
        calc3 = rpg + (plvl * rpg) - (fragr * rpg);
        calc4 = c4 + (plvl * c4) - (fragr * c4);

        calc1 = Math.round(calc1);
        calc2 = Math.round(calc2);
        calc3 = Math.round(calc3);
        calc4 = Math.round(calc4);

      

        $(".hx25").html(calc1);
        $(".m79").html(calc2);
        $(".rpg").html(calc3);
        $(".c4").html(calc4);
        $(".m16").html(calc2);

}

  else if   ($('#bombar').is(':checked'))
    {
        console.log('bombar checked')

        plvl = $("#perkLVL").val();
        plvl = plvl * .01;

        calc1 = grenp + (plvl * grenp) + (bomba * grenp);
        calc2 = m79 + (plvl * m79) + (bomba * m79);
        calc3 = rpg + (plvl * rpg) + (bomba * rpg);
        calc4 = c4 + (plvl * c4) + (bomba * c4);

        calc1 = Math.round(calc1);
        calc2 = Math.round(calc2);
        calc3 = Math.round(calc3);
        calc4 = Math.round(calc4);

      

        $(".hx25").html(calc1);
        $(".m79").html(calc2);
        $(".rpg").html(calc3);
        $(".c4").html(calc4);
        $(".m16").html(calc2);

 }

    else {
            console.log('nothing is checked')
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;
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
        $(".m16").html(calc2);

    }

    }); 