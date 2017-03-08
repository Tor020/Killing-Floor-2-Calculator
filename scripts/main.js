

$( document ).ready(function() 

        {

            $(".moreInfoDiv2").hide();
            $(".moreInfoDiv").hide();


            /*

            Table sorter plugin

            */

            
        });




  $("#menu-toggle").click(function(e)
   {

    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
            
   });


  $('.moreInfoButton').click(function()

  {

    $(".moreInfoDiv").toggle();

  });

