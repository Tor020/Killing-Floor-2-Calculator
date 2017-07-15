//Normal
var cyst = {
	normal:75,
	hard: 100,
	suicidal: 100,
	HOE:100,
};

var cystHead = {
	normal:15,
	hard: 20,
	suicidal: 20,
	HOE:20,
};

var alphaClot = {
	normal:75,
	hard: 100,
	suicidal: 100,
	HOE:100,

};	

var alphaClotHead = {
	normal:15,
	hard: 20,
	suicidal: 20,
	HOE:20,
};	

var slasher = {
	normal:75,
	hard: 100,
	suicidal: 100,
	HOE:100,
};	

var slasherHead = {
	normal:15,
	hard: 20,
	suicidal: 20,
	HOE:20,
};	
var bloat = {
	normal:303,
	hard:405,
	suicidal:486,
	HOE:526,
};	

var bloatHead = {
	normal:56,
	hard: 75,
	suicidal: 78,
	HOE:82,
};	

var crawler = {
	normal:41,
	hard:55,
	suicidal:55,
	HOE:55,
};

var crawlerHead = {
	normal:15,
	hard: 20,
	suicidal: 20,
	HOE:20,
};

var gorefast = {
	normal:150,
	hard: 200,
	suicidal: 200,
	HOE:200,
};

var gorefastHead = {
	normal:37,
	hard: 50,
	suicidal: 50,
	HOE:50,
};

var gorefiend = {
	normal:300,
	hard: 400,
	suicidal: 400,
	HOE:400,
};

var gorefiendHead = {
	normal:112,
	hard: 150,
	suicidal: 150,
	HOE:150,
};

var stalker = {
	normal:56,
	hard: 75,
	suicidal: 75,
	HOE:75,
};

var stalkerHead = {
	normal:15,
	hard: 20,
	suicidal: 20,
	HOE:20,
};

var husk = {
	normal:346,
	hard: 462,
	suicidal: 462,
	HOE:600,
};

var huskHead = {
	normal:150,
	hard:200,
	suicidal:200,
	HOE:220,
};

var siren = {
	normal:230,
	hard: 230,
	suicidal: 230,
	HOE:230,
};

var sirenHead = {
	normal:155,
	hard: 155,
	suicidal: 155,
	HOE:155,
};

var scrake = {
	normal1p:935,
	normal2p:1299,
	normal3p:1664,
	normal4p:2028,
	normal5p:2393,
	normal6p:2758,
	hard1p:1100,
	hard2p:1529,
	hard3p:1958,
	hard4p:2387,
	hard5p:2816,
	hard6p:3245,
	suicidal1p:1210,
	suicidal2p:1681,
	suicidal3p:2153,
	suicidal4p:2625,
	suicidal5p:3097,
	suicidal6p:3569,
	HOE1p:1210,
	HOE2p:1681,
	HOE3p:2153,
	HOE4p:2625,
	HOE5p:3097,
	HOE6p:3569,
};

var scrakeHead = {
	normal1p:510,
	normal2p:652,
	normal3p:795,
	normal4p:938,
	normal5p:1081,
	normal6p:1224,
	hard1p:600,
	hard2p:768,
	hard3p: 936,
	hard4p: 1104,
	hard5p: 1272,
	hard6p: 1440,
	suicidal1p: 630,
	suicidal2p: 806,
	suicidal3p: 982,
	suicidal4p: 1159,
	suicidal5p: 1335,
	suicidal6p: 1512,
	HOE1p: 660,
	HOE2p: 844,
	HOE3p: 1029,
	HOE4p: 1214,
	HOE5p: 1399,
	HOE6p: 1584,
};

var fleshpound = {
	normal1p: 1125,
	normal2p: 1563,
	normal3p: 2002,
	normal4p: 2441,
	normal5p: 2880,
	normal6p: 3318,
	hard1p: 1500,
	hard2p: 2085,
	hard3p: 2670,
	hard4p: 3355,
	hard5p: 3840,
	hard6p: 4425,
	suicidal1p: 1650,
	suicidal2p: 2293,
	suicidal3p: 2937,
	suicidal4p: 3580,
	suicidal5p: 4224,
	suicidal6p: 4867,
	HOE1p: 1800,
	HOE2p: 2502,
	HOE3p: 3204,
	HOE4p: 3906,
	HOE5p: 4608,
	HOE6p: 5310,
};

var fleshpoundHead = {
	normal1p: 487,
	normal2p: 623,
	normal3p: 759,
	normal4p: 896,
	normal5p: 1032,
	normal6p: 1168,
	hard1p: 650,
	hard2p: 832,
	hard3p: 1014,
	hard4p: 1196,
	hard5p: 1378,
	hard6p: 1560,
	suicidal1p: 682,
	suicidal2p: 872,
	suicidal3p: 1063,
	suicidal4p: 1254,
	suicidal5p: 1445,
	suicidal6p: 1636,
	HOE1p: 715,
	HOE2p: 915,
	HOE3p: 1115,
	HOE4p: 1315,
	HOE5p: 1515,
	HOE6p: 1716,
};

$(document).ready(function() 
{
    if ($("input:radio[id=normaldiff]").is(":checked") && $("input:radio[id=1play]").is(":checked"))
					{
						$(".cysthp").html(cyst.normal);								
						$(".cystHhp").html(cystHead.normal);

						$(".alphahp").html(alphaClot.normal);
						$(".alphaHhp").html(alphaClotHead.normal);

						$(".slasherhp").html(slasher.normal);
						$(".slasherHhp").html(slasherHead.normal);

						$(".bloathp").html(bloat.normal);
						$(".bloatHhp").html(bloatHead.normal);

						$(".crawlerhp").html(crawler.normal);
						$(".crawlerHhp").html(crawlerHead.normal);

						$(".gorefasthp").html(gorefast.normal);
						$(".gorefastHhp").html(gorefastHead.normal);

						$(".gorefiendhp").html(gorefiend.normal);
						$(".gorefiendHhp").html(gorefiendHead.normal);

						$(".stalkerhp").html(stalker.normal);
						$(".stalkerHhp").html(stalkerHead.normal);

						$(".huskhp").html(husk.normal);
						$(".huskHhp").html(huskHead.normal);

						$(".sirenhp").html(siren.normal);
						$(".sirenHhp").html(sirenHead.normal);

						$(".scrakehp").html(scrake.normal1p);
						$(".scrakeHhp").html(scrakeHead.normal1p);

						$(".fleshpoundhp").html(fleshpound.normal1p);
						$(".fleshpoundHhp").html(fleshpoundHead.normal1p);
        	}
});

$('input:radio[class=rButton]').change(function() 
	{
		if ($("input:radio[id=normaldiff]").is(":checked") && $("input:radio[id=1play]").is(":checked"))
	{
						$(".cysthp").html(cyst.normal);								
						$(".cystHhp").html(cystHead.normal);

						$(".alphahp").html(alphaClot.normal);
						$(".alphaHhp").html(alphaClotHead.normal);

						$(".slasherhp").html(slasher.normal);
						$(".slasherHhp").html(slasherHead.normal);

						$(".bloathp").html(bloat.normal);
						$(".bloatHhp").html(bloatHead.normal);

						$(".crawlerhp").html(crawler.normal);
						$(".crawlerHhp").html(crawlerHead.normal);

						$(".gorefasthp").html(gorefast.normal);
						$(".gorefastHhp").html(gorefastHead.normal);

						$(".gorefiendhp").html(gorefiend.normal);
						$(".gorefiendHhp").html(gorefiendHead.normal);

						$(".stalkerhp").html(stalker.normal);
						$(".stalkerHhp").html(stalkerHead.normal);

						$(".huskhp").html(husk.normal);
						$(".huskHhp").html(huskHead.normal);

						$(".sirenhp").html(siren.normal);
						$(".sirenHhp").html(sirenHead.normal);

						$(".scrakehp").html(scrake.normal1p);
						$(".scrakeHhp").html(scrakeHead.normal1p);

						$(".fleshpoundhp").html(fleshpound.normal1p);
						$(".fleshpoundHhp").html(fleshpoundHead.normal1p);
   }
   else if ($("input:radio[id=normaldiff]").is(":checked") && $("input:radio[id=2play]").is(":checked"))
    {
        		$(".cysthp").html(cyst.normal);								
						$(".cystHhp").html(cystHead.normal);

						$(".alphahp").html(alphaClot.normal);
						$(".alphaHhp").html(alphaClotHead.normal);

						$(".slasherhp").html(slasher.normal);
						$(".slasherHhp").html(slasherHead.normal);

						$(".bloathp").html(bloat.normal);
						$(".bloatHhp").html(bloatHead.normal);

						$(".crawlerhp").html(crawler.normal);
						$(".crawlerHhp").html(crawlerHead.normal);

						$(".gorefasthp").html(gorefast.normal);
						$(".gorefastHhp").html(gorefastHead.normal);

						$(".gorefiendhp").html(gorefiend.normal);
						$(".gorefiendHhp").html(gorefiendHead.normal);

						$(".stalkerhp").html(stalker.normal);
						$(".stalkerHhp").html(stalkerHead.normal);

						$(".huskhp").html(husk.normal);
						$(".huskHhp").html(huskHead.normal);

						$(".sirenhp").html(siren.normal);
						$(".sirenHhp").html(sirenHead.normal);

						$(".scrakehp").html(scrake.normal2p);
						$(".scrakeHhp").html(scrakeHead.normal2p);

						$(".fleshpoundhp").html(fleshpound.normal2p);
						$(".fleshpoundHhp").html(fleshpoundHead.normal2p);
    } 
    else if ($("input:radio[id=normaldiff]").is(":checked") && $("input:radio[id=3play]").is(":checked"))
     {
            $(".cysthp").html(cyst.normal);								
						$(".cystHhp").html(cystHead.normal);

						$(".alphahp").html(alphaClot.normal);
						$(".alphaHhp").html(alphaClotHead.normal);

						$(".slasherhp").html(slasher.normal);
						$(".slasherHhp").html(slasherHead.normal);

						$(".bloathp").html(bloat.normal);
						$(".bloatHhp").html(bloatHead.normal);

						$(".crawlerhp").html(crawler.normal);
						$(".crawlerHhp").html(crawlerHead.normal);

						$(".gorefasthp").html(gorefast.normal);
						$(".gorefastHhp").html(gorefastHead.normal);

						$(".gorefiendhp").html(gorefiend.normal);
						$(".gorefiendHhp").html(gorefiendHead.normal);

						$(".stalkerhp").html(stalker.normal);
						$(".stalkerHhp").html(stalkerHead.normal);

						$(".huskhp").html(husk.normal);
						$(".huskHhp").html(huskHead.normal);

						$(".sirenhp").html(siren.normal);
						$(".sirenHhp").html(sirenHead.normal);

						$(".scrakehp").html(scrake.normal3p);
						$(".scrakeHhp").html(scrakeHead.normal3p);

						$(".fleshpoundhp").html(fleshpound.normal3p);
						$(".fleshpoundHhp").html(fleshpoundHead.normal3p);
    }
    else if ($("input:radio[id=normaldiff]").is(":checked") && $("input:radio[id=4play]").is(":checked"))
     {
            $(".cysthp").html(cyst.normal);								
						$(".cystHhp").html(cystHead.normal);

						$(".alphahp").html(alphaClot.normal);
						$(".alphaHhp").html(alphaClotHead.normal);

						$(".slasherhp").html(slasher.normal);
						$(".slasherHhp").html(slasherHead.normal);

						$(".bloathp").html(bloat.normal);
						$(".bloatHhp").html(bloatHead.normal);

						$(".crawlerhp").html(crawler.normal);
						$(".crawlerHhp").html(crawlerHead.normal);

						$(".gorefasthp").html(gorefast.normal);
						$(".gorefastHhp").html(gorefastHead.normal);

						$(".gorefiendhp").html(gorefiend.normal);
						$(".gorefiendHhp").html(gorefiendHead.normal);

						$(".stalkerhp").html(stalker.normal);
						$(".stalkerHhp").html(stalkerHead.normal);

						$(".huskhp").html(husk.normal);
						$(".huskHhp").html(huskHead.normal);

						$(".sirenhp").html(siren.normal);
						$(".sirenHhp").html(sirenHead.normal);

						$(".scrakehp").html(scrake.normal4p);
						$(".scrakeHhp").html(scrakeHead.normal4p);

						$(".fleshpoundhp").html(fleshpound.normal4p);
						$(".fleshpoundHhp").html(fleshpoundHead.normal4p);
    	}
    	else if ($("input:radio[id=normaldiff]").is(":checked") && $("input:radio[id=5play]").is(":checked"))
    	 {
           	$(".cysthp").html(cyst.normal);								
						$(".cystHhp").html(cystHead.normal);

						$(".alphahp").html(alphaClot.normal);
						$(".alphaHhp").html(alphaClotHead.normal);

						$(".slasherhp").html(slasher.normal);
						$(".slasherHhp").html(slasherHead.normal);

						$(".bloathp").html(bloat.normal);
						$(".bloatHhp").html(bloatHead.normal);

						$(".crawlerhp").html(crawler.normal);
						$(".crawlerHhp").html(crawlerHead.normal);

						$(".gorefasthp").html(gorefast.normal);
						$(".gorefastHhp").html(gorefastHead.normal);

						$(".gorefiendhp").html(gorefiend.normal);
						$(".gorefiendHhp").html(gorefiendHead.normal);

						$(".stalkerhp").html(stalker.normal);
						$(".stalkerHhp").html(stalkerHead.normal);

						$(".huskhp").html(husk.normal);
						$(".huskHhp").html(huskHead.normal);

						$(".sirenhp").html(siren.normal);
						$(".sirenHhp").html(sirenHead.normal);

						$(".scrakehp").html(scrake.normal5p);
						$(".scrakeHhp").html(scrakeHead.normal5p);

						$(".fleshpoundhp").html(fleshpound.normal5p);
						$(".fleshpoundHhp").html(fleshpoundHead.normal5p);
    	}
    	else if ($("input:radio[id=normaldiff]").is(":checked") && $("input:radio[id=6play]").is(":checked"))
    	 {
           	$(".cysthp").html(cyst.normal);								
						$(".cystHhp").html(cystHead.normal);

						$(".alphahp").html(alphaClot.normal);
						$(".alphaHhp").html(alphaClotHead.normal);

						$(".slasherhp").html(slasher.normal);
						$(".slasherHhp").html(slasherHead.normal);

						$(".bloathp").html(bloat.normal);
						$(".bloatHhp").html(bloatHead.normal);

						$(".crawlerhp").html(crawler.normal);
						$(".crawlerHhp").html(crawlerHead.normal);

						$(".gorefasthp").html(gorefast.normal);
						$(".gorefastHhp").html(gorefastHead.normal);

						$(".gorefiendhp").html(gorefiend.normal);
						$(".gorefiendHhp").html(gorefiendHead.normal);

						$(".stalkerhp").html(stalker.normal);
						$(".stalkerHhp").html(stalkerHead.normal);

						$(".huskhp").html(husk.normal);
						$(".huskHhp").html(huskHead.normal);

						$(".sirenhp").html(siren.normal);
						$(".sirenHhp").html(sirenHead.normal);

						$(".scrakehp").html(scrake.normal6p);
						$(".scrakeHhp").html(scrakeHead.normal6p);

						$(".fleshpoundhp").html(fleshpound.normal6p);
						$(".fleshpoundHhp").html(fleshpoundHead.normal6p);
    	}
/*


																			Normal Break


*/
   else if ($("input:radio[id=harddiff]").is(":checked") && $("input:radio[id=1play]").is(":checked"))
	{
						$(".cysthp").html(cyst.hard);								
						$(".cystHhp").html(cystHead.hard);

						$(".alphahp").html(alphaClot.hard);
						$(".alphaHhp").html(alphaClotHead.hard);

						$(".slasherhp").html(slasher.hard);
						$(".slasherHhp").html(slasherHead.hard);

						$(".bloathp").html(bloat.hard);
						$(".bloatHhp").html(bloatHead.hard);

						$(".crawlerhp").html(crawler.hard);
						$(".crawlerHhp").html(crawlerHead.hard);

						$(".gorefasthp").html(gorefast.hard);
						$(".gorefastHhp").html(gorefastHead.hard);

						$(".gorefiendhp").html(gorefiend.hard);
						$(".gorefiendHhp").html(gorefiendHead.hard);

						$(".stalkerhp").html(stalker.hard);
						$(".stalkerHhp").html(stalkerHead.hard);

						$(".huskhp").html(husk.hard);
						$(".huskHhp").html(huskHead.hard);

						$(".sirenhp").html(siren.hard);
						$(".sirenHhp").html(sirenHead.hard);

						$(".scrakehp").html(scrake.hard1p);
						$(".scrakeHhp").html(scrakeHead.hard1p);

						$(".fleshpoundhp").html(fleshpound.hard1p);
						$(".fleshpoundHhp").html(fleshpoundHead.hard1p);
   }
   else if ($("input:radio[id=harddiff]").is(":checked") && $("input:radio[id=2play]").is(":checked"))
    {
        		$(".cysthp").html(cyst.hard);								
						$(".cystHhp").html(cystHead.hard);

						$(".alphahp").html(alphaClot.hard);
						$(".alphaHhp").html(alphaClotHead.hard);

						$(".slasherhp").html(slasher.hard);
						$(".slasherHhp").html(slasherHead.hard);

						$(".bloathp").html(bloat.hard);
						$(".bloatHhp").html(bloatHead.hard);

						$(".crawlerhp").html(crawler.hard);
						$(".crawlerHhp").html(crawlerHead.hard);

						$(".gorefasthp").html(gorefast.hard);
						$(".gorefastHhp").html(gorefastHead.hard);

						$(".gorefiendhp").html(gorefiend.hard);
						$(".gorefiendHhp").html(gorefiendHead.hard);

						$(".stalkerhp").html(stalker.hard);
						$(".stalkerHhp").html(stalkerHead.hard);

						$(".huskhp").html(husk.hard);
						$(".huskHhp").html(huskHead.hard);

						$(".sirenhp").html(siren.hard);
						$(".sirenHhp").html(sirenHead.hard);

						$(".scrakehp").html(scrake.hard2p);
						$(".scrakeHhp").html(scrakeHead.hard2p);

						$(".fleshpoundhp").html(fleshpound.hard2p);
						$(".fleshpoundHhp").html(fleshpoundHead.hard2p);
    } 
    else if ($("input:radio[id=harddiff]").is(":checked") && $("input:radio[id=3play]").is(":checked"))
     {
            $(".cysthp").html(cyst.hard);								
						$(".cystHhp").html(cystHead.hard);

						$(".alphahp").html(alphaClot.hard);
						$(".alphaHhp").html(alphaClotHead.hard);

						$(".slasherhp").html(slasher.hard);
						$(".slasherHhp").html(slasherHead.hard);

						$(".bloathp").html(bloat.hard);
						$(".bloatHhp").html(bloatHead.hard);

						$(".crawlerhp").html(crawler.hard);
						$(".crawlerHhp").html(crawlerHead.hard);

						$(".gorefasthp").html(gorefast.hard);
						$(".gorefastHhp").html(gorefastHead.hard);

						$(".gorefiendhp").html(gorefiend.hard);
						$(".gorefiendHhp").html(gorefiendHead.hard);

						$(".stalkerhp").html(stalker.hard);
						$(".stalkerHhp").html(stalkerHead.hard);

						$(".huskhp").html(husk.hard);
						$(".huskHhp").html(huskHead.hard);

						$(".sirenhp").html(siren.hard);
						$(".sirenHhp").html(sirenHead.hard);

						$(".scrakehp").html(scrake.hard3p);
						$(".scrakeHhp").html(scrakeHead.hard3p);

						$(".fleshpoundhp").html(fleshpound.hard3p);
						$(".fleshpoundHhp").html(fleshpoundHead.hard3p);
    }
    else if ($("input:radio[id=harddiff]").is(":checked") && $("input:radio[id=4play]").is(":checked"))
     {
            $(".cysthp").html(cyst.hard);								
						$(".cystHhp").html(cystHead.hard);

						$(".alphahp").html(alphaClot.hard);
						$(".alphaHhp").html(alphaClotHead.hard);

						$(".slasherhp").html(slasher.hard);
						$(".slasherHhp").html(slasherHead.hard);

						$(".bloathp").html(bloat.hard);
						$(".bloatHhp").html(bloatHead.hard);

						$(".crawlerhp").html(crawler.hard);
						$(".crawlerHhp").html(crawlerHead.hard);

						$(".gorefasthp").html(gorefast.hard);
						$(".gorefastHhp").html(gorefastHead.hard);

						$(".gorefiendhp").html(gorefiend.hard);
						$(".gorefiendHhp").html(gorefiendHead.hard);

						$(".stalkerhp").html(stalker.hard);
						$(".stalkerHhp").html(stalkerHead.hard);

						$(".huskhp").html(husk.hard);
						$(".huskHhp").html(huskHead.hard);

						$(".sirenhp").html(siren.hard);
						$(".sirenHhp").html(sirenHead.hard);

						$(".scrakehp").html(scrake.hard4p);
						$(".scrakeHhp").html(scrakeHead.hard4p);

						$(".fleshpoundhp").html(fleshpound.hard4p);
						$(".fleshpoundHhp").html(fleshpoundHead.hard4p);
    	}
    	else if ($("input:radio[id=harddiff]").is(":checked") && $("input:radio[id=5play]").is(":checked"))
    	 {
           	$(".cysthp").html(cyst.hard);								
						$(".cystHhp").html(cystHead.hard);

						$(".alphahp").html(alphaClot.hard);
						$(".alphaHhp").html(alphaClotHead.hard);

						$(".slasherhp").html(slasher.hard);
						$(".slasherHhp").html(slasherHead.hard);

						$(".bloathp").html(bloat.hard);
						$(".bloatHhp").html(bloatHead.hard);

						$(".crawlerhp").html(crawler.hard);
						$(".crawlerHhp").html(crawlerHead.hard);

						$(".gorefasthp").html(gorefast.hard);
						$(".gorefastHhp").html(gorefastHead.hard);

						$(".gorefiendhp").html(gorefiend.hard);
						$(".gorefiendHhp").html(gorefiendHead.hard);

						$(".stalkerhp").html(stalker.hard);
						$(".stalkerHhp").html(stalkerHead.hard);

						$(".huskhp").html(husk.hard);
						$(".huskHhp").html(huskHead.hard);

						$(".sirenhp").html(siren.hard);
						$(".sirenHhp").html(sirenHead.hard);

						$(".scrakehp").html(scrake.hard5p);
						$(".scrakeHhp").html(scrakeHead.hard5p);

						$(".fleshpoundhp").html(fleshpound.hard5p);
						$(".fleshpoundHhp").html(fleshpoundHead.hard5p);
    	}
    	else if ($("input:radio[id=harddiff]").is(":checked") && $("input:radio[id=6play]").is(":checked"))
    	 {
           	$(".cysthp").html(cyst.hard);								
						$(".cystHhp").html(cystHead.hard);

						$(".alphahp").html(alphaClot.hard);
						$(".alphaHhp").html(alphaClotHead.hard);

						$(".slasherhp").html(slasher.hard);
						$(".slasherHhp").html(slasherHead.hard);

						$(".bloathp").html(bloat.hard);
						$(".bloatHhp").html(bloatHead.hard);

						$(".crawlerhp").html(crawler.hard);
						$(".crawlerHhp").html(crawlerHead.hard);

						$(".gorefasthp").html(gorefast.hard);
						$(".gorefastHhp").html(gorefastHead.hard);

						$(".gorefiendhp").html(gorefiend.hard);
						$(".gorefiendHhp").html(gorefiendHead.hard);

						$(".stalkerhp").html(stalker.hard);
						$(".stalkerHhp").html(stalkerHead.hard);

						$(".huskhp").html(husk.hard);
						$(".huskHhp").html(huskHead.hard);

						$(".sirenhp").html(siren.hard);
						$(".sirenHhp").html(sirenHead.hard);

						$(".scrakehp").html(scrake.hard6p);
						$(".scrakeHhp").html(scrakeHead.hard6p);

						$(".fleshpoundhp").html(fleshpound.hard6p);
						$(".fleshpoundHhp").html(fleshpoundHead.hard6p);
    	}
/*


																			Hard Break

																
*/
   else if ($("input:radio[id=suicidaldiff]").is(":checked") && $("input:radio[id=1play]").is(":checked"))
	{
						$(".cysthp").html(cyst.suicidal);								
						$(".cystHhp").html(cystHead.suicidal);

						$(".alphahp").html(alphaClot.suicidal);
						$(".alphaHhp").html(alphaClotHead.suicidal);

						$(".slasherhp").html(slasher.suicidal);
						$(".slasherHhp").html(slasherHead.suicidal);

						$(".bloathp").html(bloat.suicidal);
						$(".bloatHhp").html(bloatHead.suicidal);

						$(".crawlerhp").html(crawler.suicidal);
						$(".crawlerHhp").html(crawlerHead.suicidal);

						$(".gorefasthp").html(gorefast.suicidal);
						$(".gorefastHhp").html(gorefastHead.suicidal);

						$(".gorefiendhp").html(gorefiend.suicidal);
						$(".gorefiendHhp").html(gorefiendHead.suicidal);

						$(".stalkerhp").html(stalker.suicidal);
						$(".stalkerHhp").html(stalkerHead.suicidal);

						$(".huskhp").html(husk.suicidal);
						$(".huskHhp").html(huskHead.suicidal);

						$(".sirenhp").html(siren.suicidal);
						$(".sirenHhp").html(sirenHead.suicidal);

						$(".scrakehp").html(scrake.suicidal1p);
						$(".scrakeHhp").html(scrakeHead.suicidal1p);

						$(".fleshpoundhp").html(fleshpound.suicidal1p);
						$(".fleshpoundHhp").html(fleshpoundHead.suicidal1p);
   }
   else if ($("input:radio[id=suicidaldiff]").is(":checked") && $("input:radio[id=2play]").is(":checked"))
    {
        		$(".cysthp").html(cyst.suicidal);								
						$(".cystHhp").html(cystHead.suicidal);

						$(".alphahp").html(alphaClot.suicidal);
						$(".alphaHhp").html(alphaClotHead.suicidal);

						$(".slasherhp").html(slasher.suicidal);
						$(".slasherHhp").html(slasherHead.suicidal);

						$(".bloathp").html(bloat.suicidal);
						$(".bloatHhp").html(bloatHead.suicidal);

						$(".crawlerhp").html(crawler.suicidal);
						$(".crawlerHhp").html(crawlerHead.suicidal);

						$(".gorefasthp").html(gorefast.suicidal);
						$(".gorefastHhp").html(gorefastHead.suicidal);

						$(".gorefiendhp").html(gorefiend.suicidal);
						$(".gorefiendHhp").html(gorefiendHead.suicidal);

						$(".stalkerhp").html(stalker.suicidal);
						$(".stalkerHhp").html(stalkerHead.suicidal);

						$(".huskhp").html(husk.suicidal);
						$(".huskHhp").html(huskHead.suicidal);

						$(".sirenhp").html(siren.suicidal);
						$(".sirenHhp").html(sirenHead.suicidal);

						$(".scrakehp").html(scrake.suicidal2p);
						$(".scrakeHhp").html(scrakeHead.suicidal2p);

						$(".fleshpoundhp").html(fleshpound.suicidal2p);
						$(".fleshpoundHhp").html(fleshpoundHead.suicidal2p);
    } 
    else if ($("input:radio[id=suicidaldiff]").is(":checked") && $("input:radio[id=3play]").is(":checked"))
     {
            $(".cysthp").html(cyst.suicidal);								
						$(".cystHhp").html(cystHead.suicidal);

						$(".alphahp").html(alphaClot.suicidal);
						$(".alphaHhp").html(alphaClotHead.suicidal);

						$(".slasherhp").html(slasher.suicidal);
						$(".slasherHhp").html(slasherHead.suicidal);

						$(".bloathp").html(bloat.suicidal);
						$(".bloatHhp").html(bloatHead.suicidal);

						$(".crawlerhp").html(crawler.suicidal);
						$(".crawlerHhp").html(crawlerHead.suicidal);

						$(".gorefasthp").html(gorefast.suicidal);
						$(".gorefastHhp").html(gorefastHead.suicidal);

						$(".gorefiendhp").html(gorefiend.suicidal);
						$(".gorefiendHhp").html(gorefiendHead.suicidal);

						$(".stalkerhp").html(stalker.suicidal);
						$(".stalkerHhp").html(stalkerHead.suicidal);

						$(".huskhp").html(husk.suicidal);
						$(".huskHhp").html(huskHead.suicidal);

						$(".sirenhp").html(siren.suicidal);
						$(".sirenHhp").html(sirenHead.suicidal);

						$(".scrakehp").html(scrake.suicidal3p);
						$(".scrakeHhp").html(scrakeHead.suicidal3p);

						$(".fleshpoundhp").html(fleshpound.suicidal3p);
						$(".fleshpoundHhp").html(fleshpoundHead.suicidal3p);
    }
    else if ($("input:radio[id=suicidaldiff]").is(":checked") && $("input:radio[id=4play]").is(":checked"))
     {
            $(".cysthp").html(cyst.suicidal);								
						$(".cystHhp").html(cystHead.suicidal);

						$(".alphahp").html(alphaClot.suicidal);
						$(".alphaHhp").html(alphaClotHead.suicidal);

						$(".slasherhp").html(slasher.suicidal);
						$(".slasherHhp").html(slasherHead.suicidal);

						$(".bloathp").html(bloat.suicidal);
						$(".bloatHhp").html(bloatHead.suicidal);

						$(".crawlerhp").html(crawler.suicidal);
						$(".crawlerHhp").html(crawlerHead.suicidal);

						$(".gorefasthp").html(gorefast.suicidal);
						$(".gorefastHhp").html(gorefastHead.suicidal);

						$(".gorefiendhp").html(gorefiend.suicidal);
						$(".gorefiendHhp").html(gorefiendHead.suicidal);

						$(".stalkerhp").html(stalker.suicidal);
						$(".stalkerHhp").html(stalkerHead.suicidal);

						$(".huskhp").html(husk.suicidal);
						$(".huskHhp").html(huskHead.suicidal);

						$(".sirenhp").html(siren.suicidal);
						$(".sirenHhp").html(sirenHead.suicidal);

						$(".scrakehp").html(scrake.suicidal4p);
						$(".scrakeHhp").html(scrakeHead.suicidal4p);

						$(".fleshpoundhp").html(fleshpound.suicidal4p);
						$(".fleshpoundHhp").html(fleshpoundHead.suicidal4p);
    	}
    	else if ($("input:radio[id=suicidaldiff]").is(":checked") && $("input:radio[id=5play]").is(":checked"))
    	 {
           	$(".cysthp").html(cyst.suicidal);								
						$(".cystHhp").html(cystHead.suicidal);

						$(".alphahp").html(alphaClot.suicidal);
						$(".alphaHhp").html(alphaClotHead.suicidal);

						$(".slasherhp").html(slasher.suicidal);
						$(".slasherHhp").html(slasherHead.suicidal);

						$(".bloathp").html(bloat.suicidal);
						$(".bloatHhp").html(bloatHead.suicidal);

						$(".crawlerhp").html(crawler.suicidal);
						$(".crawlerHhp").html(crawlerHead.suicidal);

						$(".gorefasthp").html(gorefast.suicidal);
						$(".gorefastHhp").html(gorefastHead.suicidal);

						$(".gorefiendhp").html(gorefiend.suicidal);
						$(".gorefiendHhp").html(gorefiendHead.suicidal);

						$(".stalkerhp").html(stalker.suicidal);
						$(".stalkerHhp").html(stalkerHead.suicidal);

						$(".huskhp").html(husk.suicidal);
						$(".huskHhp").html(huskHead.suicidal);

						$(".sirenhp").html(siren.suicidal);
						$(".sirenHhp").html(sirenHead.suicidal);

						$(".scrakehp").html(scrake.suicidal5p);
						$(".scrakeHhp").html(scrakeHead.suicidal5p);

						$(".fleshpoundhp").html(fleshpound.suicidal5p);
						$(".fleshpoundHhp").html(fleshpoundHead.suicidal5p);
    	}
    	else if ($("input:radio[id=suicidaldiff]").is(":checked") && $("input:radio[id=6play]").is(":checked"))
    	 {
           	$(".cysthp").html(cyst.suicidal);								
						$(".cystHhp").html(cystHead.suicidal);

						$(".alphahp").html(alphaClot.suicidal);
						$(".alphaHhp").html(alphaClotHead.suicidal);

						$(".slasherhp").html(slasher.suicidal);
						$(".slasherHhp").html(slasherHead.suicidal);

						$(".bloathp").html(bloat.suicidal);
						$(".bloatHhp").html(bloatHead.suicidal);

						$(".crawlerhp").html(crawler.suicidal);
						$(".crawlerHhp").html(crawlerHead.suicidal);

						$(".gorefasthp").html(gorefast.suicidal);
						$(".gorefastHhp").html(gorefastHead.suicidal);

						$(".gorefiendhp").html(gorefiend.suicidal);
						$(".gorefiendHhp").html(gorefiendHead.suicidal);

						$(".stalkerhp").html(stalker.suicidal);
						$(".stalkerHhp").html(stalkerHead.suicidal);

						$(".huskhp").html(husk.suicidal);
						$(".huskHhp").html(huskHead.suicidal);

						$(".sirenhp").html(siren.suicidal);
						$(".sirenHhp").html(sirenHead.suicidal);

						$(".scrakehp").html(scrake.suicidal6p);
						$(".scrakeHhp").html(scrakeHead.suicidal6p);

						$(".fleshpoundhp").html(fleshpound.suicidal6p);
						$(".fleshpoundHhp").html(fleshpoundHead.suicidal6p);
    	}
/*


																			Suicidal Break

																
*/
   else if ($("input:radio[id=HOEdiff]").is(":checked") && $("input:radio[id=1play]").is(":checked"))
	{
						$(".cysthp").html(cyst.HOE);								
						$(".cystHhp").html(cystHead.HOE);

						$(".alphahp").html(alphaClot.HOE);
						$(".alphaHhp").html(alphaClotHead.HOE);

						$(".slasherhp").html(slasher.HOE);
						$(".slasherHhp").html(slasherHead.HOE);

						$(".bloathp").html(bloat.HOE);
						$(".bloatHhp").html(bloatHead.HOE);

						$(".crawlerhp").html(crawler.HOE);
						$(".crawlerHhp").html(crawlerHead.HOE);

						$(".gorefasthp").html(gorefast.HOE);
						$(".gorefastHhp").html(gorefastHead.HOE);

						$(".gorefiendhp").html(gorefiend.HOE);
						$(".gorefiendHhp").html(gorefiendHead.HOE);

						$(".stalkerhp").html(stalker.HOE);
						$(".stalkerHhp").html(stalkerHead.HOE);

						$(".huskhp").html(husk.HOE);
						$(".huskHhp").html(huskHead.HOE);

						$(".sirenhp").html(siren.HOE);
						$(".sirenHhp").html(sirenHead.HOE);

						$(".scrakehp").html(scrake.HOE1p);
						$(".scrakeHhp").html(scrakeHead.HOE1p);

						$(".fleshpoundhp").html(fleshpound.HOE1p);
						$(".fleshpoundHhp").html(fleshpoundHead.HOE1p);
   }
   else if ($("input:radio[id=HOEdiff]").is(":checked") && $("input:radio[id=2play]").is(":checked"))
    {
        		$(".cysthp").html(cyst.HOE);								
						$(".cystHhp").html(cystHead.HOE);

						$(".alphahp").html(alphaClot.HOE);
						$(".alphaHhp").html(alphaClotHead.HOE);

						$(".slasherhp").html(slasher.HOE);
						$(".slasherHhp").html(slasherHead.HOE);

						$(".bloathp").html(bloat.HOE);
						$(".bloatHhp").html(bloatHead.HOE);

						$(".crawlerhp").html(crawler.HOE);
						$(".crawlerHhp").html(crawlerHead.HOE);

						$(".gorefasthp").html(gorefast.HOE);
						$(".gorefastHhp").html(gorefastHead.HOE);

						$(".gorefiendhp").html(gorefiend.HOE);
						$(".gorefiendHhp").html(gorefiendHead.HOE);

						$(".stalkerhp").html(stalker.HOE);
						$(".stalkerHhp").html(stalkerHead.HOE);

						$(".huskhp").html(husk.HOE);
						$(".huskHhp").html(huskHead.HOE);

						$(".sirenhp").html(siren.HOE);
						$(".sirenHhp").html(sirenHead.HOE);

						$(".scrakehp").html(scrake.HOE2p);
						$(".scrakeHhp").html(scrakeHead.HOE2p);

						$(".fleshpoundhp").html(fleshpound.HOE2p);
						$(".fleshpoundHhp").html(fleshpoundHead.HOE2p);
    } 
    else if ($("input:radio[id=HOEdiff]").is(":checked") && $("input:radio[id=3play]").is(":checked"))
     {
            $(".cysthp").html(cyst.HOE);								
						$(".cystHhp").html(cystHead.HOE);

						$(".alphahp").html(alphaClot.HOE);
						$(".alphaHhp").html(alphaClotHead.HOE);

						$(".slasherhp").html(slasher.HOE);
						$(".slasherHhp").html(slasherHead.HOE);

						$(".bloathp").html(bloat.HOE);
						$(".bloatHhp").html(bloatHead.HOE);

						$(".crawlerhp").html(crawler.HOE);
						$(".crawlerHhp").html(crawlerHead.HOE);

						$(".gorefasthp").html(gorefast.HOE);
						$(".gorefastHhp").html(gorefastHead.HOE);

						$(".gorefiendhp").html(gorefiend.HOE);
						$(".gorefiendHhp").html(gorefiendHead.HOE);

						$(".stalkerhp").html(stalker.HOE);
						$(".stalkerHhp").html(stalkerHead.HOE);

						$(".huskhp").html(husk.HOE);
						$(".huskHhp").html(huskHead.HOE);

						$(".sirenhp").html(siren.HOE);
						$(".sirenHhp").html(sirenHead.HOE);

						$(".scrakehp").html(scrake.HOE3p);
						$(".scrakeHhp").html(scrakeHead.HOE3p);

						$(".fleshpoundhp").html(fleshpound.HOE3p);
						$(".fleshpoundHhp").html(fleshpoundHead.HOE3p);
    }
    else if ($("input:radio[id=HOEdiff]").is(":checked") && $("input:radio[id=4play]").is(":checked"))
     {
            $(".cysthp").html(cyst.HOE);								
						$(".cystHhp").html(cystHead.HOE);

						$(".alphahp").html(alphaClot.HOE);
						$(".alphaHhp").html(alphaClotHead.HOE);

						$(".slasherhp").html(slasher.HOE);
						$(".slasherHhp").html(slasherHead.HOE);

						$(".bloathp").html(bloat.HOE);
						$(".bloatHhp").html(bloatHead.HOE);

						$(".crawlerhp").html(crawler.HOE);
						$(".crawlerHhp").html(crawlerHead.HOE);

						$(".gorefasthp").html(gorefast.HOE);
						$(".gorefastHhp").html(gorefastHead.HOE);

						$(".gorefiendhp").html(gorefiend.HOE);
						$(".gorefiendHhp").html(gorefiendHead.HOE);

						$(".stalkerhp").html(stalker.HOE);
						$(".stalkerHhp").html(stalkerHead.HOE);

						$(".huskhp").html(husk.HOE);
						$(".huskHhp").html(huskHead.HOE);

						$(".sirenhp").html(siren.HOE);
						$(".sirenHhp").html(sirenHead.HOE);

						$(".scrakehp").html(scrake.HOE4p);
						$(".scrakeHhp").html(scrakeHead.HOE4p);

						$(".fleshpoundhp").html(fleshpound.HOE4p);
						$(".fleshpoundHhp").html(fleshpoundHead.HOE4p);
    	}
    	else if ($("input:radio[id=HOEdiff]").is(":checked") && $("input:radio[id=5play]").is(":checked"))
    	 {
           	$(".cysthp").html(cyst.HOE);								
						$(".cystHhp").html(cystHead.HOE);

						$(".alphahp").html(alphaClot.HOE);
						$(".alphaHhp").html(alphaClotHead.HOE);

						$(".slasherhp").html(slasher.HOE);
						$(".slasherHhp").html(slasherHead.HOE);

						$(".bloathp").html(bloat.HOE);
						$(".bloatHhp").html(bloatHead.HOE);

						$(".crawlerhp").html(crawler.HOE);
						$(".crawlerHhp").html(crawlerHead.HOE);

						$(".gorefasthp").html(gorefast.HOE);
						$(".gorefastHhp").html(gorefastHead.HOE);

						$(".gorefiendhp").html(gorefiend.HOE);
						$(".gorefiendHhp").html(gorefiendHead.HOE);

						$(".stalkerhp").html(stalker.HOE);
						$(".stalkerHhp").html(stalkerHead.HOE);

						$(".huskhp").html(husk.HOE);
						$(".huskHhp").html(huskHead.HOE);

						$(".sirenhp").html(siren.HOE);
						$(".sirenHhp").html(sirenHead.HOE);

						$(".scrakehp").html(scrake.HOE5p);
						$(".scrakeHhp").html(scrakeHead.HOE5p);

						$(".fleshpoundhp").html(fleshpound.HOE5p);
						$(".fleshpoundHhp").html(fleshpoundHead.HOE5p);
    	}
    	else if ($("input:radio[id=HOEdiff]").is(":checked") && $("input:radio[id=6play]").is(":checked"))
    	 {
           	$(".cysthp").html(cyst.HOE);								
						$(".cystHhp").html(cystHead.HOE);

						$(".alphahp").html(alphaClot.HOE);
						$(".alphaHhp").html(alphaClotHead.HOE);

						$(".slasherhp").html(slasher.HOE);
						$(".slasherHhp").html(slasherHead.HOE);

						$(".bloathp").html(bloat.HOE);
						$(".bloatHhp").html(bloatHead.HOE);

						$(".crawlerhp").html(crawler.HOE);
						$(".crawlerHhp").html(crawlerHead.HOE);

						$(".gorefasthp").html(gorefast.HOE);
						$(".gorefastHhp").html(gorefastHead.HOE);

						$(".gorefiendhp").html(gorefiend.HOE);
						$(".gorefiendHhp").html(gorefiendHead.HOE);

						$(".stalkerhp").html(stalker.HOE);
						$(".stalkerHhp").html(stalkerHead.HOE);

						$(".huskhp").html(husk.HOE);
						$(".huskHhp").html(huskHead.HOE);

						$(".sirenhp").html(siren.HOE);
						$(".sirenHhp").html(sirenHead.HOE);

						$(".scrakehp").html(scrake.HOE6p);
						$(".scrakeHhp").html(scrakeHead.HOE6p);

						$(".fleshpoundhp").html(fleshpound.HOE6p);
						$(".fleshpoundHhp").html(fleshpoundHead.HOE6p);
    	}
/*


																			HoE Break

																
*/

   });
