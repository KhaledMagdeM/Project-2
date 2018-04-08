/* global $, document, console, jQuery, window, SmoothScroll, alert */

/*jslint browser: true*/

/*jslint devel: true*/



$(document).ready(function () {
                  
    "use strict";

/* Start slider */
    
    
    // to slider work
    
    $('.carousel').carousel();
    
    
    // featured work shuffle
    
    $(".featured-work button").on("click", function () {
        
        $(this).addClass("active").siblings().removeClass("active");
        
        if ($(this).data("class") === ".all") {
            
            $(".shuffle-images .col-6").css("opacity", 1);
            
        } else {
           
            $(".shuffle-images .col-6").css("opacity", ".08");
            $($(this).data("class")).parent().css("opacity", 1);
        }
        
    });
   
    
    

    
  
    

   
   
    
});

/////////////////////////////////////////////////////////////////////////

// loading screen

$(window).on('load', function () {
    
    "use strict";
    
    $(".loading-overlay, .loading-overlay .spinner").fadeOut(1000, function () {
        
        $(this).remove(); // to remove div from html after loading screen fadeOut
        $("body").css("overflow", "auto");
    });
    
    
});    
    
/* End slider */

    