var bs = .20;
var pis = 20;
var smg = 15;
var shot = 20;

var knifeli = 32;
var knifehe = 64;
var knifesta = 15;

var ar = 40;

$(function (){
{
	calc1 =	20;
	calc2 =	15;
	calc3 =	20;
	calc3A = calc3 * 6;
	calc4 =	40;

	$(".res1").html(20);
	$(".res2").html(15);
	$(".res3").html(20);
	$(".res4").html(40);
	$(".res3A").html(calc3A)
}

 });


$("#chkBS").on("change click blur focus", function(){
	console.log('called');
if ($("#chkBS").is(":checked")){
	console.log('called');

	calc1 = pis + (bs*pis);
	calc2 = smg + (bs*smg);
	calc3 = shot + (bs*shot);
	calc3A = calc3 * 6;
	calc4 = ar + (bs*ar);


	$(".res1").html(calc1);
	$(".res2").html(calc2);
	$(".res3").html(calc3);
	$(".res4").html(calc4);
	$(".res3A").html(calc3A)

}
else  {
	calc3A = 20 * 6;
	$(".res1").html(20);
	$(".res2").html(15);
	$(".res3").html(20);
	$(".res4").html(40);
	$(".res3A").html(calc3A);
}
});