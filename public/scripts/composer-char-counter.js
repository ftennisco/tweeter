$(document).ready(function() {
  $("#tweet-text").on("input", function(event){
    let tweetLength = this.value.length;
    let charactersLeft = 140 - tweetLength;
    console.log(charactersLeft);
    
    // Update the counter on the page
    let counterElement = $(this).closest(".new-tweet").find(".counter");
    counterElement.text(charactersLeft);

    // Add or remove CSS class based on character limit
    if (charactersLeft < 0) {
      counterElement.addClass("invalid");
    } else {
      counterElement.removeClass("invalid");
    }
  });

});