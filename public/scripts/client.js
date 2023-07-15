/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault();

    const $form = $(this);
    const formData = $form.serialize();

    // Perform form data validation
    const tweetText = $form.find('#tweet-text').val();
    if (!tweetText) {
      alert('Error: Tweet content cannot be empty.'); // Display error message for empty tweet
      return false; // Exit the submit handler without submitting the form
    }
    if (tweetText.length > 140) {
      alert('Error: Tweet content exceeds 140 chatacters.'); // Display error message for exceeding character limit
      return false; // Exit the submit handler without submitting the form
    }

    // Send the serialized data to the server
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: formData,
      success: function (response) {
        console.log(response);
        loadTweets();
      },
      error: function (xhr, status, error) {
        console.log(error);
      }
    });
  });

  function createTweetElement(tweet) {
    // Create the DOM elements for the tweet structure
    const $tweet = $(`
  <article class="tweet">
    <header>
      <div class="tweet-header">
        <img src="${tweet.user.avatars}" alt="User Avatar">
        <h3>${tweet.user.name}</h3>
      </div>
      <h3 class="username">${tweet.user.handle}</h3>
    </header>
    <p class="tweet-text">${tweet.content.text}</p>
    <footer class="tweet-footer">
    <span> ${timeago.format(tweet.created_at)} </span>
      <div>
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-arrows-rotate"></i>
      <i class="fa-solid fa-heart"></i>
      </div>
    </footer>
  </article>
`);

    // Return the tweet element
    return $tweet;
  }


  const renderTweets = function (tweets) {
    //clear the tweets container first
    $('.tweet-container').empty();
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet)
      $('.tweet-container').prepend($tweet)
    }
  };

  function loadTweets() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'json',
      success: function (response) {
        console.log(response);
        renderTweets(response); // Call the renderTweets function with the received tweets
      },
      error: function (xhr, status, error) {
        console.log(error); // Handle any errors that occured during the request 
      }
    });
  }

  loadTweets();

  
});