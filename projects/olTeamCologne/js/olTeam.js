// Remove Preloader as soon as site has been loaded
window.addEventListener('load', function () {
    // Add .loaded to body to use CSS for fading out the preloader
    $('body').addClass('loaded');
    // NavBar-Header is set to 0 opacity
    // Fade NavBar Header to 100 opacity when showing the site 
    $('#hidden-header').fadeTo(10000,100);
});

// Main Function
// Every functionality after site has been loaded properly
var main = function () {

    // Function for showing and hiding the Menu Bar on the right side of the page
    var menu_hidden = true;
    $("#menu").click(function (event) {
        if (menu_hidden) {
            $(".front").css("transform", "perspective(1800px) scale(0.65) translateX(-20%) rotateY(25deg)");
            menu_hidden = false;
        } else {
            $(".front").css("transform", "perspective(800px) scale(1) translateX(0) rotateY(0)");
            menu_hidden = true;
        }
        // Removing the focus after clicking the menu-btn
        $(this).blur();
    });

    // Function to move the map in the background according to mouse-movement
    var movementStrength = 50;
    // Calculate width & height of movement depending on window-size
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    // Animation Function which recognizes the movement of the mouse on the #animateMap
    $("#animateMap").mousemove(function (e) {  
        // Calculate the new values of the background position
        var newvalueX = width * e.pageX * -1;
        var newvalueY = height * e.pageY * -1;
        // Finally reset the values from the background-position
        $('#animateMap').css("background-position", newvalueX + "px " + newvalueY + "px");
    });







};

$(document).ready(main);