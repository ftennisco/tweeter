/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

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
      <div>${tweet.created_at}</div>
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

// Create tweet data
const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Elon",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirElon"
    },
    "content": {
      "text": "I am the king of Tesla."
    },
    "created_at": 1621116232227
  }
]

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet)
    $('.tweet-container').append($tweet)
  }
}
renderTweets(tweetData);


});