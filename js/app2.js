
$(document).ready(function(){
 newGame();
 /*--- Display information modal box ---*/
       $(".what").click(function(){
       $(".overlay").fadeIn(1000);

       });

       /*--- Hide information modal box ---*/
       $("a.close").click(function(){
       $(".overlay").fadeOut(1000);
       });

//New Game on click run this
$(".new").click(function () {
newGame();
count = 0;
$("#count").text(count);
$("#guessList").empty();
$("input").prop('disabled', false);
$("#feedback").text("Make your Guess!");

});

$("#guessButton").click(function(event) {
     event.preventDefault();
     userGuess = parseInt($("#userGuess").val());
     if (userGuess >= 1 && userGuess <= 100){
       getFeedback();
       guessBox();
       guessCounter();
     }
     else
     {
       alert("Please enter a number 1 - 100 ONLY!");
     }
     userGuess = $("#userGuess").val("");
   });

});

var secretNumber;
var userGuess;
var feedback;
var count = 0;
var difference;

function newGame() {
    userGuess = "";
    secretNumber = getSecretNumber();
    console.log("Random Generated Secret Number: " + secretNumber);
};

function getSecretNumber() {
        //generates random number 1-100
        return Math.floor(Math.random() * 100) + 1;
};

function getFeedback() {
    difference = Math.abs(userGuess - secretNumber);
    if (difference == 0) {
    $("#feedback").text("You got it! Click new game to play again.");
    $("input").prop('disabled', true);
    }
    else if (difference >= 50){
       $("#feedback").text("ICE ICE COLD, try again!");
     }
    else if (difference >= 40 && difference < 50){
       $("#feedback").text("ICE COLD, try again!");
     }
    else if (difference >= 30 && difference < 40){
       $("#feedback").text("Cold, try again!");
     }
    else if (difference >= 20 && difference < 30){
       $("#feedback").text("Semi-Cool, try again!");
     }
    else if (difference >= 15 && difference < 20){
       $("#feedback").text("Warm, try again!");
     }
    else if (difference >= 10 && difference < 15){
       $("#feedback").text("Hot, try again!");
     }
    else if (difference >= 5 && difference < 10 ){
       $("#feedback").text("5 ALARM HOT!, try again!");
     }
    };
function guessCounter() {
        count++;
        $("#count").text(count);
    };

function guessBox() {
        $("#guessList").append("<li>" + userGuess + "</li>");
};

 
