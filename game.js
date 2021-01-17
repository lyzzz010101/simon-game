//the value
var buttonColours = ["red", "blue", "green", "yellow"];
//random generate pattern and user picked pattern
var gamePattern = [];
var userClickedPattern = [];
//started = false, so that it can be startover again
var started = false;
//start from level 0 or 1 is both ok
var level = 0;
//use keypress to star a random pick
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});
//add a sound and animation to buttons
$(".btn").click(function() {
//get info of the button being clicked
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
//!!! everytimes the btn get clicked, it will examine the match
  checkAnswer(userClickedPattern.length-1);
});
//most imp!
function checkAnswer(currentLevel) {
//level stands for which order we are in now
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
        //if not click in all order, this wont function
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

//decting key pressed!
document.addEventListener("keypress",function(event){
    keyPress(event.key);
})
//link keypress with btn
function keyPress(key){
    switch (key) {

        case "q":
        var userChosenColour = "green";
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);
        checkAnswer(userClickedPattern.length-1);
        break;
        case "w":
        var userChosenColour = "red";
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);
        checkAnswer(userClickedPattern.length-1);
        break;
        case "a":
        var userChosenColour = "yellow";
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);
        checkAnswer(userClickedPattern.length-1);
        break;
        case "s":
        var userChosenColour = "blue";
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);
        checkAnswer(userClickedPattern.length-1);
        break;


    }
}
