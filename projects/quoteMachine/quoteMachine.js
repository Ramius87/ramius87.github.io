// URl of Forismatic API which creates a random quote and delivers a JSON Object
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";
var tweet = "";

// Create a String to tweet on Twitter
var createTweet = function (json) {
    "use strict";
    // Empty String
    tweet = "";
    // Create tweet
    tweet = json.quoteText + " - " + json.quoteAuthor;
};

// Transform JSON Object to be displayed on the screen
var quote = function (json) {
    "use strict";
    //Remove current Quote & Author
    $(".quote").remove();
    $(".author").remove();
    // Append Quote Text
    $(".card").append('<p class="quote">' + json.quoteText + '</p>');
    // Check if there exists an author, otherwise set the author to 'Unknown'
    if (json.quoteAuthor === "") {
        json.quoteAuthor = 'Unknown';
    }
    // Append quote Author
    $(".card").append('<p class="author">' + json.quoteAuthor + '</p>');
    // Create a tweet 
    createTweet(json);
};

// Start to rotate gears for a limited time
var gear = function () {
    "use strict";
    // Rotate small gears
    $('.gear.one>.gear-inner').toggleClass("rotating-small-clockwise");
    $('.gear.two>.gear-inner').toggleClass("rotating-small-counter-clockwise");
    $('.gear.three>.gear-inner').toggleClass("rotating-small-clockwise");
    // Rotate medium gears
    $('.gear-medium.one>.gear-medium-inner').toggleClass("rotating-medium-clockwise");
    $('.gear-medium.two>.gear-medium-inner').toggleClass("rotating-medium-counter-clockwise");
    $('.gear-medium.three>.gear-medium-inner').toggleClass("rotating-medium-clockwise");
    $('.gear-medium.four>.gear-medium-inner').toggleClass("rotating-medium-counter-clockwise");
    // Rotate large gears
    $('.gear-large.one>.gear-large-inner').toggleClass("rotating-large-counter-clockwise");
    $('.gear-large.two>.gear-large-inner').toggleClass("rotating-large-counter-clockwise");
    $('.gear-large.three>.gear-large-inner').toggleClass("rotating-large-clockwise");
};


// Main Function 
var main = function () {
    "use strict";
    // 'New Quote' Button Click Event
    $('#getQuote').click(function () {
        $.getJSON(url, quote);
        // Unselect Button
        $(this).blur();
        // Activate Twitter Button
        $("#twitter").removeAttr("disabled").removeClass("inactive");
        // Rotate gears for a certain amount of time
        gear();
        // Stop rotating gears after a specific time
        setTimeout(gear, 3150);
    });
    
    // 'Twitter' Button Click Event
    $('#twitter').click(function () {
        var url = "https://twitter.com/intent/tweet?button_hashtag=QuoteMachine&text=" + tweet;
        window.open(url, '_blank');
        // Unselect Button
        $(this).blur();
    });
};

// Start main function when document is completely loaded
$(document).ready(main);