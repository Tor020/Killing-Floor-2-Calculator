//ROUNDED for Berserker, Demolitionist, Firebug, SWAT 
//Finish Smash standalone
//finish massacre
var plvl = $("#perkLVL").val();

var butch = .25;
var parry = .35;
var smash = .50;
//rmb head
var smashHead = .25;
//lmb
var mass = .30;

var cstl = 49;
var csth = 86;
var cstm = 15;

var kat1 = 68;
var kat2 = 98;

var pull = 70;
var pulh = 145;
var pulm = 528;

var zwel = 85 ;
var zweh = 195 ;
var zwem = 63 ;

var evil = 480;
var evih = 29;
var evim = 90; 

var bcl = 63;
var bch = 165;
var bcm = 175;

var vlad = 30;

// Shorthand for $( document ).ready()
$(function() {
    {
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;

        cstcalc1 = cstl + (plvl * cstl);
        cstcalc2 = csth + (plvl * csth);
        cstcalc3 = cstm + (plvl * cstm);
        katcalc1 = kat1 + (plvl * kat1);
        katcalc2 = kat2 + (plvl * kat2);
        pulcalc1 = pull + (plvl * pull);
        pulcalc2 = pulh + (plvl * pulh);
        pulcalc3 = pulm + (plvl * pulm);
        zweic1 = zwel + (plvl * zwel);
        zweic2 = zweh + (plvl * zweh);
        zweic3 = zwem + (plvl * zwem);
        evi1c = evil + (plvl * evil);
        evihc = evih + (plvl * evih);
        evimc = evim + (plvl * evim);
        bclc = bcl + (plvl * bcl);
        bchc = bch + (plvl * bch);
        bcmc = bcm + (plvl * bcm);
        vladc  = vlad + (plvl * vlad); 

        cstcalc1 = Math.round(cstcalc1);
        cstcalc2 = Math.round(cstcalc2);
        cstcalc3 = Math.round(cstcalc3);
        katcalc1 = Math.round(katcalc1);
        katcalc2 = Math.round(katcalc2);
        pulcalc1 = Math.round(pulcalc1);
        pulcalc2 = Math.round(pulcalc2);
        pulcalc3 = Math.round(pulcalc3);
        zweic1 = Math.round(zweic1);
        zweic2 = Math.round(zweic2);
        zweic3 = Math.round(zweic3);
        evi1c = Math.round(evi1c);
        evihc = Math.round(evih);
        evimc = Math.round(evim);
        bclc = Math.round(bclc);
        bchc = Math.round(bchc);
        bcmc = Math.round(bcmc);
        vladc = Math.round(vladc);

        $(".cst1").html(cstcalc1);
        $(".cst2").html(cstcalc2);
        $(".cst3").html(cstcalc3);
        $(".kat1").html(katcalc1);
        $(".kat2").html(katcalc2);
        $(".kat3").html(katcalc1);
        $(".pulv1").html(pulcalc1);
        $(".pulv2").html(pulcalc2);
        $(".pulv3").html(pulcalc3);
        $(".zwei1").html(zweic1);
        $(".zwei2").html(zweic2);
        $(".zwei3").html(zweic3);
        $(".evis1").html(evi1c);
        $(".evis2").html(evihc);
        $(".evis3").html(evimc);
        $(".bc1").html(bclc);
        $(".bc2").html(bchc);
        $(".bc3").html(bcmc);
        $(".ng1").html(vladc);
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

//Checking for smash and butcher being checked
$("#perkLVL, #chkbutch, #chksmash, #chkmass").on("click change blur focus", function() {
    if ($('#chkbutch').is(':checked') && $('#chksmash').is(':checked')) {
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;

        cstcalc1 = cstl + (plvl * cstl) + (butch * cstl);
        cstcalc2 = csth + (plvl * csth) + (butch * csth) + (smash * csth);
        cstcalc3 = cstm + (plvl * cstm) + (butch * cstm);
        katcalc1 = kat1 + (plvl * kat1) + (butch * kat1);
        katcalc2 = kat2 + (plvl * kat2) + (butch * kat2) + (smash * kat2);
        pulcalc1 = pull + (plvl * pull) + (butch * pull);
        pulcalc2 = pulh + (plvl * pulh) + (butch * pulh) + (smash * pulh);
        pulcalc3 = pulm + (plvl * pulm) + (butch * pulm) + (smash * pulm);
        zweic1 = zwel + (plvl * zwel) + (butch * zwel);
        zweic2 = zweh + (plvl * zweh) + (butch * zweh) + (smash * zweh);
        zweic3 = zwem + (plvl * zwem) + (butch * zwem);
        evi1c = evil + (plvl * evil) + (butch * evil);
        evihc = evih + (plvl * evih) + (butch * evih) + (smash * evih);
        evimc = evim + (plvl * evim) + (butch * evim);
        bclc = bcl + (plvl * bcl) + (butch * bcl);
        bchc = bch + (plvl * bch) + (butch * bch) + (smash * bch);
        bcmc = bcm + (plvl * bcm) + (butch * bcm);
        vladc  = vlad + (plvl * vlad) + (butch * vlad);

        cstcalc1 = Math.round(cstcalc1);
        cstcalc2 = Math.round(cstcalc2);
        cstcalc3 = Math.round(cstcalc3);
        katcalc1 = Math.round(katcalc1);
        katcalc2 = Math.round(katcalc2);
        pulcalc1 = Math.round(pulcalc1);
        pulcalc2 = Math.round(pulcalc2);
        pulcalc3 = Math.round(pulcalc3);
        zweic1 = Math.round(zweic1);
        zweic2 = Math.round(zweic2);
        zweic3 = Math.round(zweic3);
        evi1c = Math.round(evi1c);
        evihc = Math.round(evih);
        evimc = Math.round(evim);
        bclc = Math.round(bclc);
        bchc = Math.round(bchc);
        bcmc = Math.round(bcmc);
        vladc = Math.round(vladc);

        $(".cst1").html(cstcalc1);
        $(".cst2").html(cstcalc2);
        $(".cst3").html(cstcalc3);
        $(".kat1").html(katcalc1);
        $(".kat2").html(katcalc2);
        $(".kat3").html(katcalc1);
        $(".pulv1").html(pulcalc1);
        $(".pulv2").html(pulcalc2);
        $(".pulv3").html(pulcalc3);
        $(".zwei1").html(zweic1);
        $(".zwei2").html(zweic2);
        $(".zwei3").html(zweic3);
        $(".evis1").html(evi1c);
        $(".evis2").html(evihc);
        $(".evis3").html(evimc);
        $(".bc1").html(bclc);
        $(".bc2").html(bchc);
        $(".bc3").html(bcmc);
        $(".ng1").html(vladc);
    } 
//checking for butcher being checked
    else if ($('#chkbutch').is(':checked')) {
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;

        cstcalc1 = cstl + (plvl * cstl) + (butch * cstl);
        cstcalc2 = csth + (plvl * csth) + (butch * csth);
        cstcalc3 = cstm + (plvl * cstm) + (butch * cstm);
        katcalc1 = kat1 + (plvl * kat1) + (butch * kat1);
        katcalc2 = kat2 + (plvl * kat2) + (butch * kat2);
        pulcalc1 = pull + (plvl * pull) + (butch * pull);
        pulcalc2 = pulh + (plvl * pulh) + (butch * pulh);
        pulcalc3 = pulm + (plvl * pulm) + (butch * pulm);
        zweic1 = zwel + (plvl * zwel) + (butch * zwel);
        zweic2 = zweh + (plvl * zweh) + (butch * zweh);
        zweic3 = zwem + (plvl * zwem) + (butch * zwem);
        evi1c = evil + (plvl * evil) + (butch * evil);
        evihc = evih + (plvl * evih) + (butch * evih);
        evimc = evim + (plvl * evim) + (butch * evim);
        bclc = bcl + (plvl * bcl) + (butch * bcl);
        bchc = bch + (plvl * bch) + (butch * bch);
        bcmc = bcm + (plvl * bcm) + (butch * bcm);
        vladc  = vlad + (plvl * vlad) + (butch * vlad);

        cstcalc1 = Math.round(cstcalc1);
        cstcalc2 = Math.round(cstcalc2);
        cstcalc3 = Math.round(cstcalc3);
        katcalc1 = Math.round(katcalc1);
        katcalc2 = Math.round(katcalc2);
        pulcalc1 = Math.round(pulcalc1);
        pulcalc2 = Math.round(pulcalc2);
        pulcalc3 = Math.round(pulcalc3);
        zweic1 = Math.round(zweic1);
        zweic2 = Math.round(zweic2);
        zweic3 = Math.round(zweic3);
        evi1c = Math.round(evi1c);
        evihc = Math.round(evih);
        evimc = Math.round(evim);
        bclc = Math.round(bclc);
        bchc = Math.round(bchc);
        bcmc = Math.round(bcmc);
        vladc = Math.round(vladc);

        $(".cst1").html(cstcalc1);
        $(".cst2").html(cstcalc2);
        $(".cst3").html(cstcalc3);
        $(".kat1").html(katcalc1);
        $(".kat2").html(katcalc2);
        $(".kat3").html(katcalc1);
        $(".pulv1").html(pulcalc1);
        $(".pulv2").html(pulcalc2);
        $(".pulv3").html(pulcalc3);
        $(".zwei1").html(zweic1);
        $(".zwei2").html(zweic2);
        $(".zwei3").html(zweic3);
        $(".evis1").html(evi1c);
        $(".evis2").html(evihc);
        $(".evis3").html(evimc);
        $(".bc1").html(bclc);
        $(".bc2").html(bchc);
        $(".bc3").html(bcmc);
        $(".ng1").html(vladc);
    }
    //checking for mass and butcher being checked
    else if ($('#chkbutch').is(':checked') && $('#chkmass').is(':checked')) {
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;

        cstcalc1 = cstl + (plvl * cstl) + (butch * cstl) + (mass * cstl);
        cstcalc2 = csth + (plvl * csth) + (butch * csth);
        cstcalc3 = cstm + (plvl * cstm) + (butch * cstm);
        katcalc1 = kat1 + (plvl * kat1) + (butch * kat1) + (mass * kat1);
        katcalc2 = kat2 + (plvl * kat2) + (butch * kat2);
        pulcalc1 = pull + (plvl * pull) + (butch * pull) + (mass * pull);
        pulcalc2 = pulh + (plvl * pulh) + (butch * pulh);
        pulcalc3 = pulm + (plvl * pulm) + (butch * pulm);
        zweic1 = zwel + (plvl * zwel) + (butch * zwel) + (mass * zwel);
        zweic2 = zweh + (plvl * zweh) + (butch * zweh);
        zweic3 = zwem + (plvl * zwem) + (butch * zwem);
        evi1c = evil + (plvl * evil) + (butch * evil) + (mass * evil);
        evihc = evih + (plvl * evih) + (butch * evih);
        evimc = evim + (plvl * evim) + (butch * evim);
        bclc = bcl + (plvl * bcl) + (butch * bcl) + (mass * bcl);
        bchc = bch + (plvl * bch) + (butch * bch);
        bcmc = bcm + (plvl * bcm) + (butch * bcm);
        vladc  = vlad + (plvl * vlad) + (butch * vlad);

        cstcalc1 = Math.round(cstcalc1);
        cstcalc2 = Math.round(cstcalc2);
        cstcalc3 = Math.round(cstcalc3);
        katcalc1 = Math.round(katcalc1);
        katcalc2 = Math.round(katcalc2);
        pulcalc1 = Math.round(pulcalc1);
        pulcalc2 = Math.round(pulcalc2);
        pulcalc3 = Math.round(pulcalc3);
        zweic1 = Math.round(zweic1);
        zweic2 = Math.round(zweic2);
        zweic3 = Math.round(zweic3);
        evi1c = Math.round(evi1c);
        evihc = Math.round(evih);
        evimc = Math.round(evim);
        bclc = Math.round(bclc);
        bchc = Math.round(bchc);
        bcmc = Math.round(bcmc);
        vladc = Math.round(vladc);

        $(".cst1").html(cstcalc1);
        $(".cst2").html(cstcalc2);
        $(".cst3").html(cstcalc3);
        $(".kat1").html(katcalc1);
        $(".kat2").html(katcalc2);
        $(".kat3").html(katcalc1);
        $(".pulv1").html(pulcalc1);
        $(".pulv2").html(pulcalc2);
        $(".pulv3").html(pulcalc3);
        $(".zwei1").html(zweic1);
        $(".zwei2").html(zweic2);
        $(".zwei3").html(zweic3);
        $(".evis1").html(evi1c);
        $(".evis2").html(evihc);
        $(".evis3").html(evimc);
        $(".bc1").html(bclc);
        $(".bc2").html(bchc);
        $(".bc3").html(bcmc);
        $(".ng1").html(vladc);
    } 

    //checking if massacre only is checked
       else if ($('#chkmass').is(':checked')) {
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;

        cstcalc1 = cstl + (plvl * cstl) + (mass * cstl);
        cstcalc2 = csth + (plvl * csth) ;
        cstcalc3 = cstm + (plvl * cstm) ;
        katcalc1 = kat1 + (plvl * kat1) + (mass * kat1);
        katcalc2 = kat2 + (plvl * kat2) ;
        pulcalc1 = pull + (plvl * pull) + (mass * pull);
        pulcalc2 = pulh + (plvl * pulh) ;
        pulcalc3 = pulm + (plvl * pulm) ;
        zweic1 = zwel + (plvl * zwel) + (mass * zwel);
        zweic2 = zweh + (plvl * zweh) ;
        zweic3 = zwem + (plvl * zwem) ;
        evi1c = evil + (plvl * evil);
        evihc = evih + (plvl * evih) ;
        evimc = evim + (plvl * evim) ;
        bclc = bcl + (plvl * bcl) + (mass* bcl);
        bchc = bch + (plvl * bch);
        bcmc = bcm + (plvl * bcm);
        vladc  = vlad + (plvl * vlad) ;

        cstcalc1 = Math.round(cstcalc1);
        cstcalc2 = Math.round(cstcalc2);
        cstcalc3 = Math.round(cstcalc3);
        katcalc1 = Math.round(katcalc1);
        katcalc2 = Math.round(katcalc2);
        pulcalc1 = Math.round(pulcalc1);
        pulcalc2 = Math.round(pulcalc2);
        pulcalc3 = Math.round(pulcalc3);
        zweic1 = Math.round(zweic1);
        zweic2 = Math.round(zweic2);
        zweic3 = Math.round(zweic3);
        evi1c = Math.round(evi1c);
        evihc = Math.round(evih);
        evimc = Math.round(evim);
        bclc = Math.round(bclc);
        bchc = Math.round(bchc);
        bcmc = Math.round(bcmc);
        vladc = Math.round(vladc);

        $(".cst1").html(cstcalc1);
        $(".cst2").html(cstcalc2);
        $(".cst3").html(cstcalc3);
        $(".kat1").html(katcalc1);
        $(".kat2").html(katcalc2);
        $(".kat3").html(katcalc1);
        $(".pulv1").html(pulcalc1);
        $(".pulv2").html(pulcalc2);
        $(".pulv3").html(pulcalc3);
        $(".zwei1").html(zweic1);
        $(".zwei2").html(zweic2);
        $(".zwei3").html(zweic3);
        $(".evis1").html(evi1c);
        $(".evis2").html(evihc);
        $(".evis3").html(evimc);
        $(".bc1").html(bclc);
        $(".bc2").html(bchc);
        $(".bc3").html(bcmc);
        $(".ng1").html(vladc);
    }
    //check if smash is being added
       else if ($('#chksmash').is(':checked')) {
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;

        cstcalc1 = cstl + (plvl * cstl);
        cstcalc2 = csth + (plvl * csth) + (smash * csth);
        cstcalc3 = cstm + (plvl * cstm);
        katcalc1 = kat1 + (plvl * kat1);
        katcalc2 = kat2 + (plvl * kat2) + (smash * kat2);
        pulcalc1 = pull + (plvl * pull);
        pulcalc2 = pulh + (plvl * pulh) + (smash * pulh);
        pulcalc3 = pulm + (plvl * pulm);
        zweic1 = zwel + (plvl * zwel);
        zweic2 = zweh + (plvl * zweh) + (smash * zweh);
        zweic3 = zwem + (plvl * zwem); 
        evi1c = evil + (plvl * evil);
        evihc = evih + (plvl * evih) + (smash * evih);
        evihs = evih + (plvl * evih) + (smash * evih);
        evimc = evim + (plvl * evim);
        bclc = bcl + (plvl * bcl);
        bchc = bch + (plvl * bch) + (smash * bch);
        bcmc = bcm + (plvl * bcm);
        vladc  = vlad + (plvl * vlad);

        cstcalc1 = Math.round(cstcalc1);
        cstcalc2 = Math.round(cstcalc2);
        cstcalc3 = Math.round(cstcalc3);
        katcalc1 = Math.round(katcalc1);
        katcalc2 = Math.round(katcalc2);
        pulcalc1 = Math.round(pulcalc1);
        pulcalc2 = Math.round(pulcalc2);
        pulcalc3 = Math.round(pulcalc3);
        zweic1 = Math.round(zweic1);
        zweic2 = Math.round(zweic2);
        zweic3 = Math.round(zweic3);
        evi1c = Math.round(evi1c);
        evihc = Math.round(evih);
        evimc = Math.round(evim);
        bclc = Math.round(bclc);
        bchc = Math.round(bchc);
        bcmc = Math.round(bcmc);
        vladc = Math.round(vladc);

        $(".cst1").html(cstcalc1);
        $(".cst2").html(cstcalc2);
        $(".cst3").html(cstcalc3);
        $(".kat1").html(katcalc1);
        $(".kat2").html(katcalc2);
        $(".kat3").html(katcalc1);
        $(".pulv1").html(pulcalc1);
        $(".pulv2").html(pulcalc2);
        $(".pulv3").html(pulcalc3);
        $(".zwei1").html(zweic1);
        $(".zwei2").html(zweic2);
        $(".zwei3").html(zweic3);
        $(".evis1").html(evi1c);
        $(".evis2").html(evihc);
        $(".evis3").html(evimc);
        $(".bc1").html(bclc);
        $(".bc2").html(bchc);
        $(".bc3").html(bcmc);
        $(".ng1").html(vladc);
    }
    //if nothings checked
    else {
        plvl = $("#perkLVL").val();
        plvl = plvl * .01;

        cstcalc1 = cstl + (plvl * cstl);
        cstcalc2 = csth + (plvl * csth);
        cstcalc3 = cstm + (plvl * cstm);
        katcalc1 = kat1 + (plvl * kat1);
        katcalc2 = kat2 + (plvl * kat2);
        pulcalc1 = pull + (plvl * pull);
        pulcalc2 = pulh + (plvl * pulh);
        pulcalc3 = pulm + (plvl * pulm);
        zweic1 = zwel + (plvl * zwel);
        zweic2 = zweh + (plvl * zweh);
        zweic3 = zwem + (plvl * zwem);
        evi1c = evil + (plvl * evil);
        evihc = evih + (plvl * evih);
        evimc = evim + (plvl * evim);
        bclc = bcl + (plvl * bcl);
        bchc = bch + (plvl * bch);
        bcmc = bcm + (plvl * bcm);
        vladc  = vlad + (plvl * vlad); 

        cstcalc1 = Math.round(cstcalc1);
        cstcalc2 = Math.round(cstcalc2);
        cstcalc3 = Math.round(cstcalc3);
        katcalc1 = Math.round(katcalc1);
        katcalc2 = Math.round(katcalc2);
        pulcalc1 = Math.round(pulcalc1);
        pulcalc2 = Math.round(pulcalc2);
        pulcalc3 = Math.round(pulcalc3);
        zweic1 = Math.round(zweic1);
        zweic2 = Math.round(zweic2);
        zweic3 = Math.round(zweic3);
        evi1c = Math.round(evi1c);
        evihc = Math.round(evih);
        evimc = Math.round(evim);
        bclc = Math.round(bclc);
        bchc = Math.round(bchc);
        bcmc = Math.round(bcmc);
        vladc = Math.round(vladc);

        $(".cst1").html(cstcalc1);
        $(".cst2").html(cstcalc2);
        $(".cst3").html(cstcalc3);
        $(".kat1").html(katcalc1);
        $(".kat2").html(katcalc2);
        $(".kat3").html(katcalc1);
        $(".pulv1").html(pulcalc1);
        $(".pulv2").html(pulcalc2);
        $(".pulv3").html(pulcalc3);
        $(".zwei1").html(zweic1);
        $(".zwei2").html(zweic2);
        $(".zwei3").html(zweic3);
        $(".evis1").html(evi1c);
        $(".evis2").html(evihc);
        $(".evis3").html(evimc);
        $(".bc1").html(bclc);
        $(".bc2").html(bchc);
        $(".bc3").html(bcmc);
        $(".ng1").html(vladc);
    }
    
});

