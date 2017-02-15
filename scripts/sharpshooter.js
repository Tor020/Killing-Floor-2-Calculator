//ROUNDED UP for Commando, Support, Gunslinger and Sharpshooter.				

var mag500 = 150;
var winch = 80;
var rev18 = 30;
var rail = 750;
var xbow = 350;
var m14 = 90;

var sniper = .25;
var stab = .30;
var rack = 0;

var knifeli = 32;
var knifehe = 64;
var knifesta = 15;


// Shorthand for $( document ).ready()
$(function() {
    {
        $("#rackem").hide();

        calc1 = rev18;
        calc2 = rail;
        calc3 = m14;
        calc4 = mag500;
        calc5 = winch;
        calc6 = xbow;

        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);


        $(".1858").html(calc1);
        $(".rail").html(calc2);
        $(".m14").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".xbow").html(calc6);
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


$("#sniper, #stability, #rackemchk, #rackem").on("click change blur focus", function() {
    
if  ($('#sniper').is(':checked') && $('#stability').is(':checked') && $('#rackemchk').is(':checked'))
    {

        $('#rackem').show();
       console.log("All 3 boxes have been checked")
        rack = $("#rackem").val();
        rack = rack * .1;
        console.log(rack)

        calc1 = rev18 + (rev18 * stab) + (rev18 * sniper) + (rev18 * rack);
        calc2 = m14 + (m14 * stab) + (m14 * sniper) + (m14 * rack);
        calc3 = rail + (rail * stab) + (rail * sniper) + (rail * rack);
        calc4 = mag500 + (mag500 * stab) + (mag500 * sniper) + (mag500 * rack);
        calc5 = winch  + (winch * stab) + (winch * sniper) + (winch * rack);
        calc6 = xbow + (xbow * stab) + (xbow * sniper) + (xbow * rack);
       

        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);
      

        $(".1858").html(calc1);
        $(".m14").html(calc2);
        $(".rail").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".xbow").html(calc6);
 }

 else if 

   ($('#sniper').is(':checked') && $('#stability').is(':checked'))
    {
        console.log("sniper and stability is checked")

        calc1 = rev18 + (rev18 * stab) + (rev18 * sniper);
        calc2 = m14 + (m14 * stab) + (m14 * sniper);
        calc3 = rail + (rail * stab) + (rail * sniper);
        calc4 = mag500 + (mag500 * stab) + (mag500 * sniper);
        calc5 = winch  + (winch * stab) + (winch * sniper);
        calc6 = xbow + (xbow * stab) + (xbow * sniper);
       

        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);
      

        $(".1858").html(calc1);
        $(".rail").html(calc2);
        $(".m14").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".xbow").html(calc6);
    
}

  else if   ($('#sniper').is(':checked') && $('#rackemchk').is(':checked') )
    {
        console.log('sniper and rackemup are checked')
         $('#rackem').show();
        rack = $("#rackem").val();
        rack = rack * .1;


        calc1 = rev18 + (rev18 * sniper) + (rev18 * rack);
        calc2 = m14 + (m14 * sniper) + (m14 * rack);
        calc3 = rail + (rail * sniper) + (rail * rack);
        calc4 = mag500 + (mag500 * sniper) + (mag500 * rack);
        calc5 = winch  + (winch * sniper) + (winch * rack);
        calc6 = xbow  + (xbow * sniper) + (xbow * rack);
       

        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);
      

        $(".1858").html(calc1);
        $(".m14").html(calc2);
        $(".rail").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".xbow").html(calc6);
  
}

 else if   ($('#stability').is(':checked') && $('#rackemchk').is(':checked') )
    {
        console.log('stability and rackemup are checked')
        $('#rackem').show();
        rack = $("#rackem").val();
        rack = rack * .1;
         

        calc1 = rev18 + (rev18 * stab) + (rev18 * rack);
        calc2 = m14 + (m14 * stab) + (m14 * rack);
        calc3 = rail + (rail * stab) + (rail * rack);
        calc4 = mag500 + (mag500 * stab) + (mag500 * rack);
        calc5 = winch  + (winch * stab) + (winch * rack);
        calc6 = xbow  + (xbow * stab) + (xbow * rack);
       

        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);
      

        $(".1858").html(calc1);
        $(".m14").html(calc2);
        $(".rail").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".xbow").html(calc6);
}


 else if ($('#stability').is(':checked')) { 

          
        console.log('stability is checked')
        calc1 = rev18 + (rev18 * stab);
        calc2 = m14 + (m14 * stab);
        calc3 = rail + (rail * stab);
        calc4 = mag500 + (mag500 * stab);
        calc5 = winch  + (winch * stab);
        calc6 = xbow +  (xbow * stab);
       

        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);
      

        $(".1858").html(calc1);
        $(".m14").html(calc2);
        $(".rail").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".xbow").html(calc6);


    } 

    else if ($('#sniper').is(':checked')) {
       console.log('sniper is checked')

        calc1 = rev18 + (rev18 * sniper);
        calc2 = m14 + (m14 * sniper);
        calc3 = rail + (rail * sniper);
        calc4 = mag500 + (mag500 * sniper);
        calc5 = winch  + (winch * sniper);
        calc6 = xbow + (xbow * sniper);


        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);
      

        $(".1858").html(calc1);
        $(".m14").html(calc2);
        $(".rail").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".xbow").html(calc6);

    
    }


     else if ($('#rackemchk').is(':checked'))  {

            console.log('rackem up is checked')
        $('#rackem').show();

        rack = $("#rackem").val();
        rack = rack * .1;


       calc1 =  rev18 + (rev18 * rack);
       calc2 =  m14 + (m14 * rack);
       calc3 =  rail + (rail * rack);
       calc4 =  mag500  + (mag500 * rack);
       calc5 =  winch + (winch * rack);
       calc6 =  xbow + (xbow * rack);

        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);
      

        $(".1858").html(calc1);
        $(".m14").html(calc2);
        $(".rail").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".xbow").html(calc6);

 }

    else {
            console.log('nothing is checked')
        $("#rackem").hide();

        calc1 = rev18;
        calc2 = rail;
        calc3 = m14;
        calc4 = mag500;
        calc5 = winch;
        calc6 = xbow;

        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);


        $(".1858").html(calc1);
        $(".m14").html(calc2);
        $(".rail").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".xbow").html(calc6);
    }

    }); 
   