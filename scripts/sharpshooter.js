//ROUNDED UP for Commando, Support, Gunslinger and Sharpshooter.		

//Guns
var _9mm = 15;
var mag500 = 150;
var winch = 80;
var rev18 = 30;
var rail = 750;
var xbow = 350;
var m14 = 90;
var spx = 180

//Perks
var sniper = .25;
var stab = .30;
var rack = 0;
var deadeye = .1

// Shorthand for $( document ).ready()
$(function() {
    {
        $("#rackem").hide();
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;;

        //Base Damage
        calc1 = rev18;
        calc2 = m14;
        calc3 = rail;
        calc4 = mag500;
        calc5 = winch;
        calc6 = xbow;
        calc7 = _9mm;
        calc8 = spx;

        //Headshot damage
        calc1h = rev18 + (rev18 * plvl);
        calc2h = m14 + (m14 * plvl);
        calc3h = rail + (rail * plvl);
        calc4h = mag500 + (mag500 * plvl);
        calc5h = winch + (winch * plvl);
        calc6h = xbow + (xbow * plvl);
        calc7h = _9mm + (_9mm * plvl);
        calc8h = spx + (spx * plvl);

        //Base Damage
        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);
        calc7 = Math.ceil(calc7);        
        calc8 = Math.ceil(calc8);        

        //Head
        calc1h = Math.ceil(calc1h);
        calc2h = Math.ceil(calc2h);
        calc3h = Math.ceil(calc3h);
        calc4h = Math.ceil(calc4h);
        calc5h = Math.ceil(calc5h);
        calc6h = Math.ceil(calc6h);
        calc7h = Math.ceil(calc7h);
        calc8h = Math.ceil(calc8h);

        //Base Damage
        $(".1858").html(calc1);
        $(".m14").html(calc2);
        $(".rail").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".xbow").html(calc6);
        $(".9mm").html(calc7);
        $(".spx").html(calc8);
        
        //Headshot
        $(".1858H").html(calc1h);
        $(".m14H").html(calc2h);
        $(".railH").html(calc3h);
        $(".mag500H").html(calc4h);
        $(".wincH").html(calc5h);
        $(".xbowH").html(calc6h);
        $(".9mmH").html(calc7h);
        $(".spxH").html(calc8h);
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

$("#sniper, #stability, #rackemchk, #rackem, #perkLVL, #deadeye").on("click change blur focus", function()
 {
    if  ($('#sniper').is(':checked') && $('#stability').is(':checked') && $('#rackemchk').is(':checked') && $('#deadeye').is(':checked'))
        {
            plvl = $("#perkLVL").val();
            plvl = plvl * .01;;

            $('#rackem').show();
            rack = $("#rackem").val();
            rack = rack * .1;

            //Base Damage
            calc1 = rev18 + (rev18 * stab) + (rev18 * sniper) + (rev18 * rack);
            calc2 = m14 + (m14 * stab) + (m14 * sniper) + (m14 * rack);
            calc3 = rail + (rail * stab) + (rail * sniper) + (rail * rack);
            calc4 = mag500 + (mag500 * stab) + (mag500 * sniper) + (mag500 * rack);
            calc5 = winch  + (winch * stab) + (winch * sniper) + (winch * rack);
            calc6 = xbow + (xbow * stab) + (xbow * sniper) + (xbow * rack);
            calc7 = _9mm + (_9mm * stab) + (_9mm * sniper) + (_9mm * rack);
            calc8 = spx + (spx * stab) + (spx * sniper) + (spx * rack);
            
            //Headshot
            calc1h = rev18 + (rev18 * stab) + (rev18 * sniper) + (rev18 * rack) + (rev18 * plvl) + (rev18 * deadeye);
            calc2h = m14 + (m14 * stab) + (m14 * sniper) + (m14 * rack) + (m14 * plvl) + (m14 * deadeye);
            calc3h = rail + (rail * stab) + (rail * sniper) + (rail * rack) + (rail * plvl) + (rail * deadeye);
            calc4h = mag500 + (mag500 * stab) + (mag500 * sniper) + (mag500 * rack) + (mag500 * plvl) + (mag500 * deadeye);
            calc5h = winch  + (winch * stab) + (winch * sniper) + (winch * rack) + (winch * plvl) + (winch * deadeye);
            calc6h = xbow + (xbow * stab) + (xbow * sniper) + (xbow * rack) + (xbow * plvl) + (xbow * deadeye);
            calc7h = _9mm + (_9mm * stab) + (_9mm * sniper) + (_9mm * rack) + (_9mm * plvl) + (_9mm * deadeye);
            calc8h = spx + (spx * stab) + (spx * sniper) + (spx * rack) + (spx * plvl) + (spx * deadeye);
           
            //Base Damage
        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);
        calc7 = Math.ceil(calc7);        
        calc8 = Math.ceil(calc8);        

        //Head
        calc1h = Math.ceil(calc1h);
        calc2h = Math.ceil(calc2h);
        calc3h = Math.ceil(calc3h);
        calc4h = Math.ceil(calc4h);
        calc5h = Math.ceil(calc5h);
        calc6h = Math.ceil(calc6h);
        calc7h = Math.ceil(calc7h);
        calc8h = Math.ceil(calc8h);

        //Base Damage
        $(".1858").html(calc1);
        $(".m14").html(calc2);
        $(".rail").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".xbow").html(calc6);
        $(".9mm").html(calc7);
        $(".spx").html(calc8);
        
        //Headshot
        $(".1858H").html(calc1h);
        $(".m14H").html(calc2h);
        $(".railH").html(calc3h);
        $(".mag500H").html(calc4h);
        $(".wincH").html(calc5h);
        $(".xbowH").html(calc6h);
        $(".9mmH").html(calc7h);
        $(".spxH").html(calc8h);
 }
 else if ($('#sniper').is(':checked') && $('#stability').is(':checked') && $('#rackemchk').is(':checked'))
    {
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;;

        $('#rackem').show();
        rack = $("#rackem").val();
        rack = rack * .1;

        //Base Damage
        calc1 = rev18 + (rev18 * stab) + (rev18 * sniper) + (rev18 * rack);
        calc2 = m14 + (m14 * stab) + (m14 * sniper) + (m14 * rack);
        calc3 = rail + (rail * stab) + (rail * sniper) + (rail * rack);
        calc4 = mag500 + (mag500 * stab) + (mag500 * sniper) + (mag500 * rack);
        calc5 = winch  + (winch * stab) + (winch * sniper) + (winch * rack);
        calc6 = xbow + (xbow * stab) + (xbow * sniper) + (xbow * rack);
        calc7 = _9mm + (_9mm * stab) + (_9mm * sniper) + (_9mm * rack);
        calc8 = spx + (spx * stab) + (spx * sniper) + (spx * rack);
        
        //Headshot
        calc1h = rev18 + (rev18 * stab) + (rev18 * sniper) + (rev18 * rack) + (rev18 * plvl);
        calc2h = m14 + (m14 * stab) + (m14 * sniper) + (m14 * rack) + (m14 * plvl);
        calc3h = rail + (rail * stab) + (rail * sniper) + (rail * rack) + (rail * plvl); 
        calc4h = mag500 + (mag500 * stab) + (mag500 * sniper) + (mag500 * rack) + (mag500 * plvl);
        calc5h = winch  + (winch * stab) + (winch * sniper) + (winch * rack) + (winch * plvl);
        calc6h = xbow + (xbow * stab) + (xbow * sniper) + (xbow * rack) + (xbow * plvl); 
        calc7h = _9mm + (_9mm * stab) + (_9mm * sniper) + (_9mm * rack) + (_9mm * plvl); 
        calc8h = spx + (spx * stab) + (spx * sniper) + (spx * rack) + (spx * plvl); 
       
        //Base Damage
             
        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);
        calc7 = Math.ceil(calc7);        
        calc8 = Math.ceil(calc8);        

        //Head
        calc1h = Math.ceil(calc1h);
        calc2h = Math.ceil(calc2h);
        calc3h = Math.ceil(calc3h);
        calc4h = Math.ceil(calc4h);
        calc5h = Math.ceil(calc5h);
        calc6h = Math.ceil(calc6h);
        calc7h = Math.ceil(calc7h);
        calc8h = Math.ceil(calc8h);

        //Base Damage
        $(".1858").html(calc1);
        $(".m14").html(calc2);
        $(".rail").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".xbow").html(calc6);
        $(".9mm").html(calc7);
        $(".spx").html(calc8);
        
        //Headshot
        $(".1858H").html(calc1h);
        $(".m14H").html(calc2h);
        $(".railH").html(calc3h);
        $(".mag500H").html(calc4h);
        $(".wincH").html(calc5h);
        $(".xbowH").html(calc6h);
        $(".9mmH").html(calc7h);
        $(".spxH").html(calc8h);
 }
else if ($('#sniper').is(':checked') && $('#stability').is(':checked') && $("#deadeye").is(":checked"))
    {
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;;

        //Base Damage
        calc1 = rev18 + (rev18 * stab) + (rev18 * sniper);
        calc2 = m14 + (m14 * stab) + (m14 * sniper);
        calc3 = rail + (rail * stab) + (rail * sniper);
        calc4 = mag500 + (mag500 * stab) + (mag500 * sniper);
        calc5 = winch  + (winch * stab) + (winch * sniper);
        calc6 = xbow + (xbow * stab) + (xbow * sniper);
        calc7 = _9mm + (_9mm * stab) + (_9mm * sniper);
        calc8 = spx + (spx * stab) + (spx * sniper);

        //Headshot
        calc1h = rev18 + (rev18 * stab) + (rev18 * sniper) + (rev18 * plvl) + (rev18 * deadeye);
        calc2h = m14 + (m14 * stab) + (m14 * sniper) + (m14 * plvl) + (m14 * deadeye);
        calc3h = rail + (rail * stab) + (rail * sniper) + (rail * plvl) + (rail * deadeye);
        calc4h = mag500 + (mag500 * stab) + (mag500 * sniper) + (mag500 * plvl) + (mag500 * deadeye);
        calc5h = winch  + (winch * stab) + (winch * sniper) + (winch * plvl) + (winch * deadeye);
        calc6h = xbow + (xbow * stab) + (xbow * sniper) + (xbow * plvl) + (xbow * deadeye);
        calc7h = _9mm + (_9mm * stab) + (_9mm * sniper) + (_9mm * plvl) + (_9mm * deadeye);
        calc8h = spx + (spx * stab) + (spx * sniper) + (spx * plvl) + (spx * deadeye);

        //Base Damage
        //Base Damage
        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);
        calc7 = Math.ceil(calc7);        
        calc8 = Math.ceil(calc8);        

        //Head
        calc1h = Math.ceil(calc1h);
        calc2h = Math.ceil(calc2h);
        calc3h = Math.ceil(calc3h);
        calc4h = Math.ceil(calc4h);
        calc5h = Math.ceil(calc5h);
        calc6h = Math.ceil(calc6h);
        calc7h = Math.ceil(calc7h);
        calc8h = Math.ceil(calc8h);

        //Base Damage
        $(".1858").html(calc1);
        $(".m14").html(calc2);
        $(".rail").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".xbow").html(calc6);
        $(".9mm").html(calc7);
        $(".spx").html(calc8);
        
        //Headshot
        $(".1858H").html(calc1h);
        $(".m14H").html(calc2h);
        $(".railH").html(calc3h);
        $(".mag500H").html(calc4h);
        $(".wincH").html(calc5h);
        $(".xbowH").html(calc6h);
        $(".9mmH").html(calc7h);
        $(".spxH").html(calc8h);
}
 else if ($('#sniper').is(':checked') && $('#rackemchk').is(':checked') && $("#deadeye").is(":checked"))
    {
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;;

        $('#rackem').show();
        rack = $("#rackem").val();
        rack = rack * .1;

        //Base Damage
        calc1 = rev18 + (rev18 * sniper) + (rev18 * rack);
        calc2 = m14 + (m14 * sniper) + (m14 * rack);
        calc3 = rail + (rail * sniper) + (rail * rack);
        calc4 = mag500 + (mag500 * sniper) + (mag500 * rack);
        calc5 = winch  + (winch * sniper) + (winch * rack);
        calc6 = xbow  + (xbow * sniper) + (xbow * rack);
        calc7 = _9mm  + (_9mm * sniper) + (_9mm * rack);
        calc8 = spx  + (spx * sniper) + (spx * rack);

         //Headshot
        calc1h = rev18 + (rev18 * sniper) + (rev18 * rack) + (rev18 * plvl) + (rev18 * deadeye);
        calc2h = m14 + (m14 * sniper) + (m14 * rack) + (m14 * plvl) + (m14 * deadeye);
        calc3h = rail + (rail * sniper) + (rail * rack) + (rail * plvl) + (rail * deadeye);
        calc4h = mag500 + (mag500 * sniper) + (mag500 * rack) + (mag500 * plvl) + (mag500 * deadeye);
        calc5h = winch  + (winch * sniper) + (winch * rack) + (winch * plvl) + (winch * deadeye);
        calc6h = xbow  + (xbow * sniper) + (xbow * rack) + (xbow * plvl) + (xbow * deadeye);
        calc7h = _9mm  + (_9mm * sniper) + (_9mm * rack) + (_9mm * plvl) + (_9mm * deadeye);
        calc8h = spx  + (spx * sniper) + (spx * rack) + (spx * plvl) + (spx * deadeye);

        //Base Damage
               //Base Damage
        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);
        calc7 = Math.ceil(calc7);        
        calc8 = Math.ceil(calc8);        

        //Head
        calc1h = Math.ceil(calc1h);
        calc2h = Math.ceil(calc2h);
        calc3h = Math.ceil(calc3h);
        calc4h = Math.ceil(calc4h);
        calc5h = Math.ceil(calc5h);
        calc6h = Math.ceil(calc6h);
        calc7h = Math.ceil(calc7h);
        calc8h = Math.ceil(calc8h);

        //Base Damage
        $(".1858").html(calc1);
        $(".m14").html(calc2);
        $(".rail").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".xbow").html(calc6);
        $(".9mm").html(calc7);
        $(".spx").html(calc8);
        
        //Headshot
        $(".1858H").html(calc1h);
        $(".m14H").html(calc2h);
        $(".railH").html(calc3h);
        $(".mag500H").html(calc4h);
        $(".wincH").html(calc5h);
        $(".xbowH").html(calc6h);
        $(".9mmH").html(calc7h);
        $(".spxH").html(calc8h);  
}
 else if ($('#stability').is(':checked') && $('#rackemchk').is(':checked'))
  {
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;;

        $('#rackem').show();
        rack = $("#rackem").val();
        rack = rack * .1;

        //Base Damage
        calc1 = rev18 + (rev18 * stab) + (rev18 * rack);
        calc2 = m14 + (m14 * stab) + (m14 * rack);
        calc3 = rail + (rail * stab) + (rail * rack);
        calc4 = mag500 + (mag500 * stab) + (mag500 * rack);
        calc5 = winch  + (winch * stab) + (winch * rack);
        calc6 = xbow  + (xbow * stab) + (xbow * rack);
        calc7 = _9mm  + (_9mm * stab) + (_9mm * rack);
        calc8 = spx  + (spx * stab) + (spx * rack);

        //Headshot
        calc1h = rev18 + (rev18 * stab) + (rev18 * rack) + (rev18 * plvl);
        calc2h = m14 + (m14 * stab) + (m14 * rack) + (m14 * plvl);
        calc3h = rail + (rail * stab) + (rail * rack) + (rail * plvl);
        calc4h = mag500 + (mag500 * stab) + (mag500 * rack) + (mag500 * plvl);
        calc5h = winch  + (winch * stab) + (winch * rack) + (winch * plvl);
        calc6h = xbow  + (xbow * stab) + (xbow * rack) + (xbow * plvl);
        calc7h = _9mm  + (_9mm * stab) + (_9mm * rack) + (_9mm * plvl);
        calc8h = spx  + (spx * stab) + (spx * rack) + (spx * plvl);

        //Base Damage
               //Base Damage
        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);
        calc7 = Math.ceil(calc7);        
        calc8 = Math.ceil(calc8);        

        //Head
        calc1h = Math.ceil(calc1h);
        calc2h = Math.ceil(calc2h);
        calc3h = Math.ceil(calc3h);
        calc4h = Math.ceil(calc4h);
        calc5h = Math.ceil(calc5h);
        calc6h = Math.ceil(calc6h);
        calc7h = Math.ceil(calc7h);
        calc8h = Math.ceil(calc8h);

        //Base Damage
        $(".1858").html(calc1);
        $(".m14").html(calc2);
        $(".rail").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".xbow").html(calc6);
        $(".9mm").html(calc7);
        $(".spx").html(calc8);
        
        //Headshot
        $(".1858H").html(calc1h);
        $(".m14H").html(calc2h);
        $(".railH").html(calc3h);
        $(".mag500H").html(calc4h);
        $(".wincH").html(calc5h);
        $(".xbowH").html(calc6h);
        $(".9mmH").html(calc7h);
        $(".spxH").html(calc8h);}
 else if ($('#stability').is(':checked') && $("#deadeye").is(":checked"))
{ 
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;;

        //Base Damage
        calc1 = rev18 + (rev18 * stab);
        calc2 = m14 + (m14 * stab);
        calc3 = rail + (rail * stab);
        calc4 = mag500 + (mag500 * stab);
        calc5 = winch  + (winch * stab);
        calc6 = xbow +  (xbow * stab);
        calc7 = _9mm +  (_9mm * stab);        
        calc8 = spx +  (spx * stab);        

        //Headshot
        calc1h = rev18 + (rev18 * stab) + (rev18 * plvl) + (rev18 * deadeye);
        calc2h = m14 + (m14 * stab) + (m14 * plvl) + (m14 * deadeye);
        calc3h = rail + (rail * stab) + (rail * plvl) + (rail * deadeye);
        calc4h = mag500 + (mag500 * stab) + (mag500 * plvl) + (mag500 * deadeye);
        calc5h = winch  + (winch * stab) + (winch * plvl) + (winch * deadeye);
        calc6h = xbow +  (xbow * stab) + (xbow * plvl) + (xbow * deadeye);
        calc7h = _9mm +  (_9mm * stab) + (_9mm * plvl) + (_9mm * deadeye);
        calc8h = spx +  (spx * stab) + (spx * plvl) + (spx * deadeye);
    
         //Base Damage
        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);
        calc7 = Math.ceil(calc7);        
        calc8 = Math.ceil(calc8);        

        //Head
        calc1h = Math.ceil(calc1h);
        calc2h = Math.ceil(calc2h);
        calc3h = Math.ceil(calc3h);
        calc4h = Math.ceil(calc4h);
        calc5h = Math.ceil(calc5h);
        calc6h = Math.ceil(calc6h);
        calc7h = Math.ceil(calc7h);
        calc8h = Math.ceil(calc8h);

        //Base Damage
        $(".1858").html(calc1);
        $(".m14").html(calc2);
        $(".rail").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".xbow").html(calc6);
        $(".9mm").html(calc7);
        $(".spx").html(calc8);
        
        //Headshot
        $(".1858H").html(calc1h);
        $(".m14H").html(calc2h);
        $(".railH").html(calc3h);
        $(".mag500H").html(calc4h);
        $(".wincH").html(calc5h);
        $(".xbowH").html(calc6h);
        $(".9mmH").html(calc7h);
        $(".spxH").html(calc8h);

} 
else if ($('#sniper').is(':checked') && $("#deadeye").is(":checked"))
{
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;;

        //Base Damage
        calc1 = rev18 + (rev18 * sniper);
        calc2 = m14 + (m14 * sniper);
        calc3 = rail + (rail * sniper);
        calc4 = mag500 + (mag500 * sniper);
        calc5 = winch  + (winch * sniper);
        calc6 = xbow + (xbow * sniper);
        calc7 = _9mm + (_9mm * sniper);
        calc8 = spx + (spx * sniper);

        //Headshot
        calc1h = rev18 + (rev18 * sniper) + (rev18 * plvl) + (rev18 * deadeye);
        calc2h = m14 + (m14 * sniper) + (m14 * plvl) + (m14 * deadeye);
        calc3h = rail + (rail * sniper) + (rail * plvl) + (rail * deadeye);
        calc4h = mag500 + (mag500 * sniper) + (mag500 * plvl) + (mag500 * deadeye);
        calc5h = winch  + (winch * sniper) + (winch * plvl) + (winch * deadeye);
        calc6h = xbow + (xbow * sniper) + (xbow * plvl) + (xbow * deadeye);
        calc7h = _9mm + (_9mm * sniper) + (_9mm * plvl) + (_9mm * deadeye);
        calc8h = spx + (spx * sniper) + (spx * plvl) + (spx * deadeye);

         //Base Damage
        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);
        calc7 = Math.ceil(calc7);        
        calc8 = Math.ceil(calc8);        

        //Head
        calc1h = Math.ceil(calc1h);
        calc2h = Math.ceil(calc2h);
        calc3h = Math.ceil(calc3h);
        calc4h = Math.ceil(calc4h);
        calc5h = Math.ceil(calc5h);
        calc6h = Math.ceil(calc6h);
        calc7h = Math.ceil(calc7h);
        calc8h = Math.ceil(calc8h);

        //Base Damage
        $(".1858").html(calc1);
        $(".m14").html(calc2);
        $(".rail").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".xbow").html(calc6);
        $(".9mm").html(calc7);
        $(".spx").html(calc8);
        
        //Headshot
        $(".1858H").html(calc1h);
        $(".m14H").html(calc2h);
        $(".railH").html(calc3h);
        $(".mag500H").html(calc4h);
        $(".wincH").html(calc5h);
        $(".xbowH").html(calc6h);
        $(".9mmH").html(calc7h);
        $(".spxH").html(calc8h);

}
else if ($('#rackemchk').is(':checked') && $("#deadeye").is(":checked"))
{
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;;
        
        $('#rackem').show();
        rack = $("#rackem").val();
        rack = rack * .1;

        //Base Damage
        calc1 =  rev18 + (rev18 * rack);
        calc2 =  m14 + (m14 * rack);
        calc3 =  rail + (rail * rack);
        calc4 =  mag500  + (mag500 * rack);
        calc5 =  winch + (winch * rack);
        calc6 =  xbow + (xbow * rack);
        calc7 =  _9mm + (_9mm * rack);
        calc8 =  spx + (spx * rack);

        //Headshot
        calc1h =  rev18 + (rev18 * rack) + (rev18 * plvl) + (rev18 * deadeye);
        calc2h =  m14 + (m14 * rack) + (m14 * plvl) + (m14 * deadeye);
        calc3h =  rail + (rail * rack) + (rail * plvl) + (rail * deadeye);
        calc4h =  mag500  + (mag500 * rack) + (mag500 * plvl) + (mag500 * deadeye);
        calc5h =  winch + (winch * rack) + (winch * plvl) + (winch * deadeye);
        calc6h =  xbow + (xbow * rack) + (xbow * plvl) + (xbow * deadeye);
        calc7h =  _9mm + (_9mm * rack) + (_9mm * plvl) + (_9mm * deadeye);
        calc8h =  _9mm + (spx * rack) + (spx * plvl) + (spx * deadeye);

        //Base Damage
        //Base Damage
        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);
        calc7 = Math.ceil(calc7);        
        calc8 = Math.ceil(calc8);        

        //Head
        calc1h = Math.ceil(calc1h);
        calc2h = Math.ceil(calc2h);
        calc3h = Math.ceil(calc3h);
        calc4h = Math.ceil(calc4h);
        calc5h = Math.ceil(calc5h);
        calc6h = Math.ceil(calc6h);
        calc7h = Math.ceil(calc7h);
        calc8h = Math.ceil(calc8h);

        //Base Damage
        $(".1858").html(calc1);
        $(".m14").html(calc2);
        $(".rail").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".xbow").html(calc6);
        $(".9mm").html(calc7);
        $(".spx").html(calc8);
        
        //Headshot
        $(".1858H").html(calc1h);
        $(".m14H").html(calc2h);
        $(".railH").html(calc3h);
        $(".mag500H").html(calc4h);
        $(".wincH").html(calc5h);
        $(".xbowH").html(calc6h);
        $(".9mmH").html(calc7h);
        $(".spxH").html(calc8h);

 }
 else if ($('#sniper').is(':checked') && $('#stability').is(':checked'))
    {
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;;

        //Base Damage
        calc1 = rev18 + (rev18 * stab) + (rev18 * sniper);
        calc2 = m14 + (m14 * stab) + (m14 * sniper);
        calc3 = rail + (rail * stab) + (rail * sniper);
        calc4 = mag500 + (mag500 * stab) + (mag500 * sniper);
        calc5 = winch  + (winch * stab) + (winch * sniper);
        calc6 = xbow + (xbow * stab) + (xbow * sniper);
        calc7 = _9mm + (_9mm * stab) + (_9mm * sniper);
        calc8 = spx + (spx * stab) + (spx * sniper);

        //Headshot
        calc1h = rev18 + (rev18 * stab) + (rev18 * sniper) + (rev18 * plvl);
        calc2h = m14 + (m14 * stab) + (m14 * sniper) + (m14 * plvl);
        calc3h = rail + (rail * stab) + (rail * sniper) + (rail * plvl);
        calc4h = mag500 + (mag500 * stab) + (mag500 * sniper) + (mag500 * plvl);
        calc5h = winch  + (winch * stab) + (winch * sniper) + (winch * plvl);
        calc6h = xbow + (xbow * stab) + (xbow * sniper) + (xbow * plvl);
        calc7h = _9mm + (_9mm * stab) + (_9mm * sniper) + (_9mm * plvl);
        calc8h = spx + (spx * stab) + (spx * sniper) + (spx * plvl);

        //Base Damage
        //Base Damage
        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);
        calc7 = Math.ceil(calc7);        
        calc8 = Math.ceil(calc8);        

        //Head
        calc1h = Math.ceil(calc1h);
        calc2h = Math.ceil(calc2h);
        calc3h = Math.ceil(calc3h);
        calc4h = Math.ceil(calc4h);
        calc5h = Math.ceil(calc5h);
        calc6h = Math.ceil(calc6h);
        calc7h = Math.ceil(calc7h);
        calc8h = Math.ceil(calc8h);

        //Base Damage
        $(".1858").html(calc1);
        $(".m14").html(calc2);
        $(".rail").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".xbow").html(calc6);
        $(".9mm").html(calc7);
        $(".spx").html(calc8);
        
        //Headshot
        $(".1858H").html(calc1h);
        $(".m14H").html(calc2h);
        $(".railH").html(calc3h);
        $(".mag500H").html(calc4h);
        $(".wincH").html(calc5h);
        $(".xbowH").html(calc6h);
        $(".9mmH").html(calc7h);
        $(".spxH").html(calc8h);

}
  else if   ($('#sniper').is(':checked') && $('#rackemchk').is(':checked'))
{
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;;

        $('#rackem').show();
        rack = $("#rackem").val();
        rack = rack * .1;

        //Base Damage
        calc1 = rev18 + (rev18 * sniper) + (rev18 * rack);
        calc2 = m14 + (m14 * sniper) + (m14 * rack);
        calc3 = rail + (rail * sniper) + (rail * rack);
        calc4 = mag500 + (mag500 * sniper) + (mag500 * rack);
        calc5 = winch  + (winch * sniper) + (winch * rack);
        calc6 = xbow  + (xbow * sniper) + (xbow * rack);
        calc7 = _9mm  + (_9mm * sniper) + (_9mm * rack);
        calc8 = spx  + (spx * sniper) + (spx * rack);

        //Headshot
        calc1h = rev18 + (rev18 * sniper) + (rev18 * rack) + (rev18 * plvl);
        calc2h = m14 + (m14 * sniper) + (m14 * rack) + (m14 * plvl);
        calc3h = rail + (rail * sniper) + (rail * rack) + (rail * plvl);
        calc4h = mag500 + (mag500 * sniper) + (mag500 * rack) + (mag500 * plvl);
        calc5h = winch  + (winch * sniper) + (winch * rack) + (winch * plvl);
        calc6h = xbow  + (xbow * sniper) + (xbow * rack) + (xbow * plvl);
        calc7h = _9mm  + (_9mm * sniper) + (_9mm * rack) + (_9mm * plvl);
        calc8h = spx  + (spx * sniper) + (spx * rack) + (spx * plvl);

        //Base Damage
               //Base Damage
        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);
        calc7 = Math.ceil(calc7);        
        calc8 = Math.ceil(calc8);        

        //Head
        calc1h = Math.ceil(calc1h);
        calc2h = Math.ceil(calc2h);
        calc3h = Math.ceil(calc3h);
        calc4h = Math.ceil(calc4h);
        calc5h = Math.ceil(calc5h);
        calc6h = Math.ceil(calc6h);
        calc7h = Math.ceil(calc7h);
        calc8h = Math.ceil(calc8h);

        //Base Damage
        $(".1858").html(calc1);
        $(".m14").html(calc2);
        $(".rail").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".xbow").html(calc6);
        $(".9mm").html(calc7);
        $(".spx").html(calc8);
        
        //Headshot
        $(".1858H").html(calc1h);
        $(".m14H").html(calc2h);
        $(".railH").html(calc3h);
        $(".mag500H").html(calc4h);
        $(".wincH").html(calc5h);
        $(".xbowH").html(calc6h);
        $(".9mmH").html(calc7h);
        $(".spxH").html(calc8h);  
}
 else if ($('#stability').is(':checked') && $('#rackemchk').is(':checked'))
  {
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;;

        $('#rackem').show();
        rack = $("#rackem").val();
        rack = rack * .1;

        //Base Damage
        calc1 = rev18 + (rev18 * stab) + (rev18 * rack);
        calc2 = m14 + (m14 * stab) + (m14 * rack);
        calc3 = rail + (rail * stab) + (rail * rack);
        calc4 = mag500 + (mag500 * stab) + (mag500 * rack);
        calc5 = winch  + (winch * stab) + (winch * rack);
        calc6 = xbow  + (xbow * stab) + (xbow * rack);
        calc7 = _9mm  + (_9mm * stab) + (_9mm * rack);
        calc8 = spx  + (spx * stab) + (spx * rack);

        //Headshot
        calc1h = rev18 + (rev18 * stab) + (rev18 * rack) + (rev18 * plvl);
        calc2h = m14 + (m14 * stab) + (m14 * rack) + (m14 * plvl);
        calc3h = rail + (rail * stab) + (rail * rack) + (rail * plvl);
        calc4h = mag500 + (mag500 * stab) + (mag500 * rack) + (mag500 * plvl);
        calc5h = winch  + (winch * stab) + (winch * rack) + (winch * plvl);
        calc6h = xbow  + (xbow * stab) + (xbow * rack) + (xbow * plvl);
        calc7h = _9mm  + (_9mm * stab) + (_9mm * rack) + (_9mm * plvl);
        calc8h = spx  + (spx * stab) + (spx * rack) + (spx * plvl);

        //Base Damage
               //Base Damage
        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);
        calc7 = Math.ceil(calc7);        
        calc8 = Math.ceil(calc8);        

        //Head
        calc1h = Math.ceil(calc1h);
        calc2h = Math.ceil(calc2h);
        calc3h = Math.ceil(calc3h);
        calc4h = Math.ceil(calc4h);
        calc5h = Math.ceil(calc5h);
        calc6h = Math.ceil(calc6h);
        calc7h = Math.ceil(calc7h);
        calc8h = Math.ceil(calc8h);

        //Base Damage
        $(".1858").html(calc1);
        $(".m14").html(calc2);
        $(".rail").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".xbow").html(calc6);
        $(".9mm").html(calc7);
        $(".spx").html(calc8);
        
        //Headshot
        $(".1858H").html(calc1h);
        $(".m14H").html(calc2h);
        $(".railH").html(calc3h);
        $(".mag500H").html(calc4h);
        $(".wincH").html(calc5h);
        $(".xbowH").html(calc6h);
        $(".9mmH").html(calc7h);
        $(".spxH").html(calc8h);}

 else if ($('#stability').is(':checked')) 
{ 
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;;

        //Base Damage
        calc1 = rev18 + (rev18 * stab);
        calc2 = m14 + (m14 * stab);
        calc3 = rail + (rail * stab);
        calc4 = mag500 + (mag500 * stab);
        calc5 = winch  + (winch * stab);
        calc6 = xbow +  (xbow * stab);
        calc7 = _9mm +  (_9mm * stab);        
        calc8 = spx +  (spx * stab);        

        //Headshot
        calc1h = rev18 + (rev18 * stab) + (rev18 * plvl);
        calc2h = m14 + (m14 * stab) + (m14 * plvl);
        calc3h = rail + (rail * stab) + (rail * plvl);
        calc4h = mag500 + (mag500 * stab) + (mag500 * plvl);
        calc5h = winch  + (winch * stab) + (winch * plvl);
        calc6h = xbow +  (xbow * stab) + (xbow * plvl);
        calc7h = _9mm +  (_9mm * stab) + (_9mm * plvl);
        calc8h = spx +  (spx * stab) + (spx * plvl);
    
         //Base Damage
        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);
        calc7 = Math.ceil(calc7);        
        calc8 = Math.ceil(calc8);        

        //Head
        calc1h = Math.ceil(calc1h);
        calc2h = Math.ceil(calc2h);
        calc3h = Math.ceil(calc3h);
        calc4h = Math.ceil(calc4h);
        calc5h = Math.ceil(calc5h);
        calc6h = Math.ceil(calc6h);
        calc7h = Math.ceil(calc7h);
        calc8h = Math.ceil(calc8h);

        //Base Damage
        $(".1858").html(calc1);
        $(".m14").html(calc2);
        $(".rail").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".xbow").html(calc6);
        $(".9mm").html(calc7);
        $(".spx").html(calc8);
        
        //Headshot
        $(".1858H").html(calc1h);
        $(".m14H").html(calc2h);
        $(".railH").html(calc3h);
        $(".mag500H").html(calc4h);
        $(".wincH").html(calc5h);
        $(".xbowH").html(calc6h);
        $(".9mmH").html(calc7h);
        $(".spxH").html(calc8h);

    } 
    else if ($('#sniper').is(':checked'))
{
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;;

        //Base Damage
        calc1 = rev18 + (rev18 * sniper);
        calc2 = m14 + (m14 * sniper);
        calc3 = rail + (rail * sniper);
        calc4 = mag500 + (mag500 * sniper);
        calc5 = winch  + (winch * sniper);
        calc6 = xbow + (xbow * sniper);
        calc7 = _9mm + (_9mm * sniper);
        calc8 = spx + (spx * sniper);

        //Headshot
        calc1h = rev18 + (rev18 * sniper) + (rev18 * plvl);
        calc2h = m14 + (m14 * sniper) + (m14 * plvl);
        calc3h = rail + (rail * sniper) + (rail * plvl);
        calc4h = mag500 + (mag500 * sniper) + (mag500 * plvl);
        calc5h = winch  + (winch * sniper) + (winch * plvl);
        calc6h = xbow + (xbow * sniper) + (xbow * plvl);
        calc7h = _9mm + (_9mm * sniper) + (_9mm * plvl);
        calc8h = spx + (spx * sniper) + (spx * plvl);

         //Base Damage
        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);
        calc7 = Math.ceil(calc7);        
        calc8 = Math.ceil(calc8);        

        //Head
        calc1h = Math.ceil(calc1h);
        calc2h = Math.ceil(calc2h);
        calc3h = Math.ceil(calc3h);
        calc4h = Math.ceil(calc4h);
        calc5h = Math.ceil(calc5h);
        calc6h = Math.ceil(calc6h);
        calc7h = Math.ceil(calc7h);
        calc8h = Math.ceil(calc8h);

        //Base Damage
        $(".1858").html(calc1);
        $(".m14").html(calc2);
        $(".rail").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".xbow").html(calc6);
        $(".9mm").html(calc7);
        $(".spx").html(calc8);
        
        //Headshot
        $(".1858H").html(calc1h);
        $(".m14H").html(calc2h);
        $(".railH").html(calc3h);
        $(".mag500H").html(calc4h);
        $(".wincH").html(calc5h);
        $(".xbowH").html(calc6h);
        $(".9mmH").html(calc7h);
        $(".spxH").html(calc8h);

    }
     else if ($('#rackemchk').is(':checked'))
{
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;;
        
        $('#rackem').show();
        rack = $("#rackem").val();
        rack = rack * .1;

        //Base Damage
        calc1 =  rev18 + (rev18 * rack);
        calc2 =  m14 + (m14 * rack);
        calc3 =  rail + (rail * rack);
        calc4 =  mag500  + (mag500 * rack);
        calc5 =  winch + (winch * rack);
        calc6 =  xbow + (xbow * rack);
        calc7 =  _9mm + (_9mm * rack);
        calc8 =  spx + (spx * rack);

        //Headshot
        calc1h =  rev18 + (rev18 * rack) + (rev18 * plvl);
        calc2h =  m14 + (m14 * rack) + (m14 * plvl);
        calc3h =  rail + (rail * rack) + (rail * plvl);
        calc4h =  mag500  + (mag500 * rack) + (mag500 * plvl);
        calc5h =  winch + (winch * rack) + (winch * plvl);
        calc6h =  xbow + (xbow * rack) + (xbow * plvl);
        calc7h =  _9mm + (_9mm * rack) + (_9mm * plvl);
        calc8h =  spx + (spx * rack) + (spx * plvl);

        //Base Damage

        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);
        calc7 = Math.ceil(calc7);        
        calc8 = Math.ceil(calc8);        

        //Head
        calc1h = Math.ceil(calc1h);
        calc2h = Math.ceil(calc2h);
        calc3h = Math.ceil(calc3h);
        calc4h = Math.ceil(calc4h);
        calc5h = Math.ceil(calc5h);
        calc6h = Math.ceil(calc6h);
        calc7h = Math.ceil(calc7h);
        calc8h = Math.ceil(calc8h);

        //Base Damage
        $(".1858").html(calc1);
        $(".m14").html(calc2);
        $(".rail").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".xbow").html(calc6);
        $(".9mm").html(calc7);
        $(".spx").html(calc8);
        
        //Headshot
        $(".1858H").html(calc1h);
        $(".m14H").html(calc2h);
        $(".railH").html(calc3h);
        $(".mag500H").html(calc4h);
        $(".wincH").html(calc5h);
        $(".xbowH").html(calc6h);
        $(".9mmH").html(calc7h);
        $(".spxH").html(calc8h);

 }
    else if ($('#deadeye').is(':checked'))
{
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;;
        $("#rackem").hide();

        //Base Damage
        calc1 = rev18;
        calc2 = m14;
        calc3 = rail;
        calc4 = mag500;
        calc5 = winch;
        calc6 = xbow;
        calc7 = _9mm;
        calc8 = spx;

        //Headshot damage
        calc1h = rev18 + (rev18 * plvl) + (rev18 * deadeye);
        calc2h = m14 + (m14 * plvl) + (m14 * deadeye);
        calc3h = rail + (rail * plvl) + (rail * deadeye);
        calc4h = mag500 + (mag500 * plvl) + (mag500 * deadeye);
        calc5h = winch + (winch * plvl) + (winch * deadeye);
        calc6h = xbow + (xbow * plvl) + (xbow * deadeye);
        calc7h = _9mm + (_9mm * plvl) + (_9mm * deadeye);
        calc8h = spx + (spx * plvl) + (spx * deadeye);

        //Base Damage
        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);
        calc7 = Math.ceil(calc7);        
        calc8 = Math.ceil(calc8);        

        //Head
        calc1h = Math.ceil(calc1h);
        calc2h = Math.ceil(calc2h);
        calc3h = Math.ceil(calc3h);
        calc4h = Math.ceil(calc4h);
        calc5h = Math.ceil(calc5h);
        calc6h = Math.ceil(calc6h);
        calc7h = Math.ceil(calc7h);
        calc8h = Math.ceil(calc8h);

        //Base Damage
        $(".1858").html(calc1);
        $(".m14").html(calc2);
        $(".rail").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".xbow").html(calc6);
        $(".9mm").html(calc7);
        $(".spx").html(calc8);
        
        //Headshot
        $(".1858H").html(calc1h);
        $(".m14H").html(calc2h);
        $(".railH").html(calc3h);
        $(".mag500H").html(calc4h);
        $(".wincH").html(calc5h);
        $(".xbowH").html(calc6h);
        $(".9mmH").html(calc7h);
        $(".spxH").html(calc8h);
    }
 else
{
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;
        $("#rackem").hide();

        //Base Damage
        calc1 = rev18;
        calc2 = m14;
        calc3 = rail;
        calc4 = mag500;
        calc5 = winch;
        calc6 = xbow;
        calc7 = _9mm;
        calc8 = spx;

        //Headshot damage
        calc1h = rev18 + (rev18 * plvl);
        calc2h = m14 + (m14 * plvl);
        calc3h = rail + (rail * plvl);
        calc4h = mag500 + (mag500 * plvl);
        calc5h = winch + (winch * plvl);
        calc6h = xbow + (xbow * plvl);
        calc7h = _9mm + (_9mm * plvl);
        calc8h = spx + (spx * plvl);

        //Base Damage
        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);
        calc7 = Math.ceil(calc7);        
        calc8 = Math.ceil(calc8);        

        //Head
        calc1h = Math.ceil(calc1h);
        calc2h = Math.ceil(calc2h);
        calc3h = Math.ceil(calc3h);
        calc4h = Math.ceil(calc4h);
        calc5h = Math.ceil(calc5h);
        calc6h = Math.ceil(calc6h);
        calc7h = Math.ceil(calc7h);
        calc8h = Math.ceil(calc8h);

        //Base Damage
        $(".1858").html(calc1);
        $(".m14").html(calc2);
        $(".rail").html(calc3);
        $(".mag500").html(calc4);
        $(".winc").html(calc5);
        $(".xbow").html(calc6);
        $(".9mm").html(calc7);
        $(".spx").html(calc8);
        
        //Headshot
        $(".1858H").html(calc1h);
        $(".m14H").html(calc2h);
        $(".railH").html(calc3h);
        $(".mag500H").html(calc4h);
        $(".wincH").html(calc5h);
        $(".xbowH").html(calc6h);
        $(".9mmH").html(calc7h);
        $(".spxH").html(calc8h);
    }

    }); 
   