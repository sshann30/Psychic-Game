var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var defusecode = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var letterToGuess = null;
var guessedLetters = [];

var computerGuess = defusecode[Math.floor(Math.random() * defusecode.length)];

var updateGuessesLeft = function() {
 
  document.querySelector('#guessLeft').innerHTML = "Wire Cuts Remaining: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.defusecode[Math.floor(Math.random() * this.defusecode.length)];
};

var updateGuessesSoFar = function() {
 
  document.querySelector('#guessedLetters').innerHTML = "Unsuccesful Attempts: " + guessedLetters.join(', ');
};

var reset = function() {
  totalGuesses = 10;
  guessesLeft = 10;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();

}

updateLetterToGuess();
updateGuessesLeft();

document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++
                document.querySelector('#Wins').innerHTML = "Successful Defuses: " + wins;
                alert("You DEFUSED the bomb! Good guess on " + letterToGuess);
                reset();
            }

        }else if(guessesLeft == 0){ 
            losses++;
            document.querySelector('#Losses').innerHTML = "Untimely Detonations: " + losses;
            alert("You FAILED to defuse the bomb!"); 
            alert(letterToGuess  + "  was the right choice"); 
            reset();
        }
};