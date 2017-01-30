var plvl = $("#perkLVL").val();

// Shorthand for $( document ).ready()
$(function() {
    {
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;

        calc1 = ;
        calc2 = ;
        calc3 = ;

        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);

        $(".res1").html(calc1);
        $(".res2").html(calc2);
        $(".res3").html(calc3);
    }

});

//this fucntion prevents inputs more than 25
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



//perk level check function

$("#perkLVL").on("click change blur focus", function() {
    if ($('#chkHPR').is(':checked')) {
        plvl = $("#perkLVL").val();
        console.log(plvl);
        plvl = plvl * .01;
        console.log(plvl)

        calc1 =
        calc2 =
        calc3 =
        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);

        $(".res1").html(calc1);
        $(".res2").html(calc2);
        $(".res3").html(calc3);
    } else {
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;

        calc1 = 
        calc2 = 
        calc3 = 

        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);

        $(".res1").html(calc1);
        $(".res2").html(calc2);
        $(".res3").html(calc3);
    }
});