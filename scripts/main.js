//hides the initial divs
$(document).ready(function () {

    $(".moreInfoZedDiv").toggle();
    $(".moreInfoDivClass").toggle();
});

//toggles to show the div on click
$('.moreInfoButtonClass').click(function () {
    $(".moreInfoDivClass").toggle();

});

//toggles to show the div on click
$('.moreInfoButtonZED').click(function () {
    $(".moreInfoZedDiv").toggle();

});