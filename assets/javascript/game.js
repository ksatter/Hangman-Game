var guessesLeft = 10;
var words = ["TACO", "BURRITO", "QUESADILLA", "TEQUILA", "NACHOS"];
var guessesMade = []
var computerGuess = words[Math.floor(Math.random() * words.length)];
var letters = "ABCDEFGHIJKLMNOP";
var correctGuesses = 0

function pushTo(id, text) {
    document.getElementById(id).innerHTML = text;
}

function reset() {
    computerGuess =Math.floor(Math.random() * words.length);
    guessesMade = [];
    guessesLeft = 10;
    correctGuesses = 0;
    console.log(computerGuess);
    pushTo("guesses-left", " Guesses Left: "  + guessesLeft);
    pushTo("guesses-made", "AlreadyGuessed:");
}

function writeBlanks(){

    for (i = 0; i < computerGuess.length - 1; i++){
        var ul = dcument.getElementById("word");
        var li = document.createElement("li");
        li.innerHTML = <h2 id= "i">
}
}

console.log(computerGuess);

//game

document.onkeyup = function(event){

    var userGuess = String.fromCharCode(event.keyCode).toUpperCase();



    if (letters.indexOf(userGuess) >= 0 && guessesMade.indexOf(userGuess) < 0){

        guessesLeft --;
        guessesMade.push(userGuess);
        pushTo("guesses-made", "Already Guessed: " + guessesMade.join(",  "));




        if (computerGuess.indexOf(userGuess) >= 0)
    }

    else if (guessesMade.indexOf(userGuess) >= 0) {

        pushTo("main-text", "You already tried " + userGuess + " and it isn't any more correct now than it was before.")
    }
    else {
        pushTo("main-text", "That wasn't even a real letter. Nice Try!");
}



