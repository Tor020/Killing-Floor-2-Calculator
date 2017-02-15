var sg500 = 20;
var db = 25;
var m4 = 25;
var aa12 = 20;
var incend = 27;
var hmt301 = 20;
var pelletsg = 7;
var pelletdb = 12;
var pelletinc = 9;
var pellethmt = 6;
var salv = .30;


var knifeli = 32;
var knifehe = 64;
var knifesta = 15;

var plvl = $("#perkLVL").val();




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


	$(function() {
{
		plvl = $("#perkLVL").val();
        plvl = plvl * .01;

        calc1 = (sg500 + (plvl * sg500));
        calc2 = (db + (plvl * db));
        calc3 = (db + (plvl * db));
        calc4 = (sg500 + (plvl * sg500));
        calc5 = (incend + (plvl * incend));
        calc6 = (sg500 + (plvl * sg500));        


        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);

        $(".sg1").html(calc1);
        $(".dbs1").html(calc2);
        $(".mcs1").html(calc3);	
        $(".aa121").html(calc4);
        $(".tg1").html(calc5);
        $(".hm1").html(calc6);

        calc1b = calc1 * pelletsg;
        calc2b = calc2 * pelletdb;
        calc3b = calc3 * pelletsg;
        calc4b = calc4 * pelletsg;
        calc5b = calc5 * pelletinc;
        calc6b = calc6 * pellethmt;

        $(".sg2").html(calc1b);
        $(".dbs2").html(calc2b);
        $(".mcs2").html(calc3b);	
        $(".aa122").html(calc4b);
        $(".tg2").html(calc5b);
        $(".hm2").html(calc6b);
}

	});

$("#perkLVL, #chkSalvo").on("click change blur focus", function() {
    if ($('#chkSalvo').is(':checked')) {
	plvl = $("#perkLVL").val();
        plvl = plvl * .01;

        calc1 = (sg500 + (plvl * sg500) + (salv * sg500));
        calc2 = (db + (plvl * db) + (salv * db));
        calc3 = (db + (plvl * db) + (salv * db));
        calc4 = (sg500 + (plvl * sg500) + (salv * sg500));
        calc5 = (incend + (plvl * incend) + (salv * incend));
        calc6 = (sg500 + (plvl * sg500) + (salv * sg500));        


        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);

        $(".sg1").html(calc1);
        $(".dbs1").html(calc2);
        $(".mcs1").html(calc3);	
        $(".aa121").html(calc4);
        $(".tg1").html(calc5);
        $(".hm1").html(calc6);

        calc1b = calc1 * pelletsg;
        calc2b = calc2 * pelletdb;
        calc3b = calc3 * pelletsg;
        calc4b = calc4 * pelletsg;
        calc5b = calc5 * pelletinc;
        calc6b = calc6 * pellethmt;

        $(".sg2").html(calc1b);
        $(".dbs2").html(calc2b);
        $(".mcs2").html(calc3b);	
        $(".aa122").html(calc4b);
        $(".tg2").html(calc5b);
        $(".hm2").html(calc6b);
	}

	else {
		plvl = $("#perkLVL").val();
        plvl = plvl * .01;

        calc1 = (sg500 + (plvl * sg500));
        calc2 = (db + (plvl * db));
        calc3 = (db + (plvl * db));
        calc4 = (sg500 + (plvl * sg500));
        calc5 = (incend + (plvl * incend));
        calc6 = (sg500 + (plvl * sg500));        


        calc1 = Math.ceil(calc1);
        calc2 = Math.ceil(calc2);
        calc3 = Math.ceil(calc3);
        calc4 = Math.ceil(calc4);
        calc5 = Math.ceil(calc5);
        calc6 = Math.ceil(calc6);

        $(".sg1").html(calc1);
        $(".dbs1").html(calc2);
        $(".mcs1").html(calc3);	
        $(".aa121").html(calc4);
        $(".tg1").html(calc5);
        $(".hm1").html(calc6);

        calc1b = calc1 * pelletsg;
        calc2b = calc2 * pelletdb;
        calc3b = calc3 * pelletsg;
        calc4b = calc4 * pelletsg;
        calc5b = calc5 * pelletinc;
        calc6b = calc6 * pellethmt;

        $(".sg2").html(calc1b);
        $(".dbs2").html(calc2b);
        $(".mcs2").html(calc3b);	
        $(".aa122").html(calc4b);
        $(".tg2").html(calc5b);
        $(".hm2").html(calc6b);
    }
});
	
