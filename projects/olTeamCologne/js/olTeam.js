var main = function() {
    
  // Function for showing and Hiding the Menu Bar on the right side of the page
  var menu_hidden=true;
  $("#menu").click(function(event) {
      if (menu_hidden) {
           $(".front").css("transform", "perspective(1800px) scale(0.65) translateX(-20%) rotateY(25deg)");
           menu_hidden= false;
      } else {
          $(".front").css("transform", "perspective(800px) scale(1) translateX(0) rotateY(0)");
           menu_hidden= true;
      }
      // not working but why????
      $(".btn-active").removeClass('btn-active');
  });

    
    
    
    
    
};

$(document).ready(main);

